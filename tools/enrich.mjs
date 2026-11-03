// Detail enrichment + liveness check. For each candidate posting, read the full description
// (that's where dates, duration, pay and language requirements live) from the ATS API when
// the URL is a known ATS, otherwise from the page's schema.org JobPosting or visible text.
// A 404/410 from the ATS (or an Ashby board that no longer lists the id) marks it Closed.
import { fetchJson, fetchJsonWithStatus, fetchText, stripHtml } from "./common.mjs";
import { ashbyPay } from "./collectors.mjs";

const SHORTLINK_HOSTS = /^(go\.vansh\.nyc|bit\.ly|tinyurl\.com|lnkd\.in|t\.co|simplify\.jobs)$/i;
const FULL_CONTENT_SOURCES = /^(Greenhouse|Lever|Ashby|Amazon)/;
const CLOSED_TEXT_RE = /no longer (?:accepting applications|available|open|active|posted)|position has been filled|(?:job|posting|requisition) (?:has )?(?:expired|been closed|is closed|is no longer)|this job is closed|job not found|page not found|the job you are looking for/i;

export function jsonLdJobPosting(html = "") {
  for (const m of String(html).matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    let data;
    try { data = JSON.parse(m[1].trim()); } catch { continue; }
    const items = (Array.isArray(data) ? data : [data]).flatMap((d) => (d?.["@graph"] ? d["@graph"] : [d]));
    const item = items.find((i) => i && /JobPosting/i.test(String(i["@type"] || "")));
    if (!item) continue;
    const locs = Array.isArray(item.jobLocation) ? item.jobLocation : [item.jobLocation].filter(Boolean);
    const location = [...new Set(locs.map((l) => {
      const a = l?.address || {};
      return [a.addressLocality, a.addressRegion, typeof a.addressCountry === "string" ? a.addressCountry : a.addressCountry?.name].filter(Boolean).join(", ");
    }).filter(Boolean))].join("; ");
    const v = item.baseSalary?.value || {};
    const unit = String(v.unitText || item.baseSalary?.unitText || "").toLowerCase();
    const pay = v.minValue || v.value ? `$${v.minValue ?? v.value}${v.maxValue ? ` - $${v.maxValue}` : ""} per ${unit || "?"} pay` : "";
    const validThrough = item.validThrough ? Date.parse(item.validThrough) : NaN;
    // Qualifications often live outside "description" (e.g. "Currently pursuing a PhD").
    const extra = ["responsibilities", "qualifications", "educationRequirements", "experienceRequirements", "skills"]
      .map((k) => item[k]).flat().filter(Boolean)
      .map((v) => (typeof v === "string" ? v : v.credentialCategory || v.description || v.name || "")).join(" . ");
    return { content: stripHtml(`${item.description || ""} . ${extra}`), location, pay, expired: Number.isFinite(validThrough) && validThrough < Date.now() - 2 * 86400000 };
  }
  return null;
}

const ashbyBoards = new Map();
function ashbyBoard(token) {
  if (!ashbyBoards.has(token)) ashbyBoards.set(token, fetchJson(`https://api.ashbyhq.com/posting-api/job-board/${token}?includeCompensation=true`, { timeoutMs: 25000 }));
  return ashbyBoards.get(token);
}

const closed = (finalUrl) => ({ closed: true, finalUrl });

async function detailFor(row, ghTokens = []) {
  let url = row.DetailURL || row.URL;
  let resolved = null;
  try {
    if (SHORTLINK_HOSTS.test(new URL(url).hostname)) {
      resolved = await fetchText(url, { timeoutMs: 15000 });
      if (resolved.status === 404 || resolved.status === 410) return closed(resolved.url);
      if (resolved.url) url = resolved.url;
    }
  } catch { return null; }

  // Greenhouse
  let m = url.match(/(?:job-)?boards(?:\.eu)?\.greenhouse\.io\/([^/?#]+)\/jobs\/(\d+)/i) || url.match(/greenhouse\.io\/embed\/job_app\?(?:.*&)?for=([^&]+)&(?:.*&)?token=(\d+)/i);
  let ghId = m ? null : url.match(/[?&]gh_jid=(\d+)/i)?.[1];
  const ghCandidates = m ? [[m[1], m[2]]] : ghId ? ghTokens.map((t) => [t, ghId]) : [];
  for (const [token, id] of ghCandidates) {
    const r = await fetchJsonWithStatus(`https://boards-api.greenhouse.io/v1/boards/${token}/jobs/${id}?pay_transparency=true`, { timeoutMs: 15000 });
    if (r.json) {
      const ranges = r.json.pay_input_ranges || [];
      const pay = ranges.length ? ranges.map((p) => `$${(p.min_cents || 0) / 100} - $${(p.max_cents || 0) / 100} pay`).join("; ") : "";
      return { content: stripHtml(r.json.content || ""), location: r.json.location?.name || "", pay, finalUrl: url, via: "greenhouse" };
    }
    if ((r.status === 404 || r.status === 410) && m) return closed(url);
  }

  // Lever
  m = url.match(/jobs\.(eu\.)?lever\.co\/([^/?#]+)\/([0-9a-f-]{36})/i);
  if (m) {
    const r = await fetchJsonWithStatus(`https://api.${m[1] || ""}lever.co/v0/postings/${m[2]}/${m[3]}`, { timeoutMs: 15000 });
    if (r.status === 404 || r.status === 410) return closed(url);
    if (r.json) {
      const j = r.json;
      const pay = j.salaryRange ? `$${j.salaryRange.min} - $${j.salaryRange.max} per ${String(j.salaryRange.interval || "").replace(/-/g, " ")} pay` : "";
      return { content: stripHtml(`${j.descriptionPlain || ""} ${(j.lists || []).map((l) => `${l.text} ${l.content}`).join(" ")} ${j.additionalPlain || ""}`), location: j.categories?.location || "", pay, finalUrl: url, via: "lever" };
    }
  }

  // Ashby
  m = url.match(/jobs\.ashbyhq\.com\/([^/?#]+)\/([0-9a-f-]{36})/i);
  if (m) {
    const board = await ashbyBoard(m[1]);
    if (board && Array.isArray(board.jobs)) {
      const j = board.jobs.find((x) => String(x.id).toLowerCase() === m[2].toLowerCase());
      if (!j) return closed(url);
      return { content: stripHtml(j.descriptionHtml || j.descriptionPlain || ""), location: j.locationName || "", pay: ashbyPay(j), finalUrl: url, via: "ashby" };
    }
  }

  // Workday (public CXS detail API)
  m = url.match(/^https?:\/\/([a-z0-9-]+\.wd\d+\.myworkdayjobs\.com)\/wday\/cxs\/([^/]+)\/([^/]+)\/(job\/[^?#]+)/i)
    || url.match(/^https?:\/\/([a-z0-9-]+\.wd\d+\.myworkdayjobs\.com)\/(?:[a-z]{2}-[A-Z]{2}\/)?()([^/]+)\/(job\/[^?#]+)/);
  if (m) {
    const host = m[1]; const tenant = m[2] || host.split(".")[0]; const site = m[3]; const path = m[4];
    const r = await fetchJsonWithStatus(`https://${host}/wday/cxs/${tenant}/${site}/${path}`, { timeoutMs: 15000 });
    if (r.status === 404 || r.status === 410) return closed(url);
    const info = r.json?.jobPostingInfo;
    if (info) {
      return { content: stripHtml(info.jobDescription || ""), location: [info.location, ...(info.additionalLocations || [])].filter(Boolean).join("; "), pay: "", finalUrl: url, via: "workday", commitment: info.timeType || "" };
    }
  }

  // SmartRecruiters
  m = url.match(/api\.smartrecruiters\.com\/v1\/companies\/([^/]+)\/postings\/([^/?#]+)/i) || url.match(/jobs\.smartrecruiters\.com\/([^/?#]+)\/(\d+)/i);
  if (m) {
    const r = await fetchJsonWithStatus(`https://api.smartrecruiters.com/v1/companies/${m[1]}/postings/${m[2]}`, { timeoutMs: 15000 });
    if (r.status === 404 || r.status === 410) return closed(url);
    if (r.json) {
      const sections = r.json.jobAd?.sections || {};
      return { content: stripHtml(Object.values(sections).map((x) => x?.text || "").join(" . ")), location: "", pay: "", finalUrl: url, via: "smartrecruiters" };
    }
  }

  // Workable
  m = url.match(/apply\.workable\.com\/(?:api\/v\d\/accounts\/)?([^/?#]+)\/(?:j|jobs)\/([A-Z0-9]+)/i);
  if (m) {
    const r = await fetchJsonWithStatus(`https://apply.workable.com/api/v2/accounts/${m[1]}/jobs/${m[2]}`, { timeoutMs: 15000 });
    if (r.status === 404 || r.status === 410) return closed(url);
    if (r.json) return { content: stripHtml(`${r.json.description || ""} ${r.json.requirements || ""} ${r.json.benefits || ""}`), location: "", pay: "", finalUrl: url, via: "workable" };
  }

  // Oracle Recruiting Cloud
  m = url.match(/^https?:\/\/([a-z0-9.-]+oraclecloud\.com)\/hcmUI\/CandidateExperience\/[a-z]{2}\/sites\/([^/]+)\/job\/(\d+)/i);
  if (m || /recruitingCEJobRequisitionDetails/.test(url)) {
    const api = m ? `https://${m[1]}/hcmRestApi/resources/latest/recruitingCEJobRequisitionDetails?expand=all&onlyData=true&finder=ById;Id=%22${m[3]}%22,siteNumber=${m[2]}` : url;
    const d = (await fetchJson(api, { timeoutMs: 15000 }))?.items?.[0];
    if (d) return { content: stripHtml(`${d.ExternalDescriptionStr || ""} ${d.ExternalResponsibilitiesStr || ""} ${d.ExternalQualificationsStr || ""}`), location: d.PrimaryLocation || "", pay: "", finalUrl: url, via: "oracle" };
  }

  // Anything else: the page itself.
  const res = resolved && resolved.url === url ? resolved : await fetchText(url, { timeoutMs: 15000 });
  if (res.status === 404 || res.status === 410) return closed(res.url || url);
  if (!res.ok) return { error: res.error || `HTTP ${res.status}`, finalUrl: res.url || url };
  const ld = jsonLdJobPosting(res.text);
  if (ld) return ld.expired ? closed(res.url || url) : { ...ld, finalUrl: res.url || url, via: "jsonld" };
  const text = stripHtml(res.text.replace(/<(nav|header|footer)[\s\S]*?<\/\1>/gi, " "));
  if (text.length < 3000 && CLOSED_TEXT_RE.test(text)) return closed(res.url || url);
  return { content: text.slice(0, 25000), location: "", pay: "", finalUrl: res.url || url, via: "html" };
}

export async function enrichRow(row, { ghTokens = [] } = {}) {
  if (FULL_CONTENT_SOURCES.test(row.Source || "") && (row.Content || "").length > 300) return { ...row, DetailStatus: "board" };
  try {
    const d = await detailFor(row, ghTokens);
    if (!d) return { ...row, DetailStatus: "error" };
    if (d.closed) return { ...row, Closed: true, DetailStatus: "closed", FinalURL: d.finalUrl || "" };
    if (d.error) return { ...row, DetailStatus: `error: ${d.error}`, FinalURL: d.finalUrl || "" };
    const out = { ...row, DetailStatus: d.via || "ok", FinalURL: d.finalUrl || "" };
    if (d.content && d.content.length > (row.Content || "").length) out.Content = d.content.slice(0, 25000);
    if (d.pay && !out.Pay) out.Pay = d.pay;
    if (d.location && (!out.Location || /^\d+ locations?$/i.test(out.Location))) out.Location = d.location;
    if (d.commitment && !out.Commitment) out.Commitment = d.commitment;
    return out;
  } catch (error) {
    return { ...row, DetailStatus: `error: ${error.message}` };
  }
}
