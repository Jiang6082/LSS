// Official ATS collectors (adapted from PTS tools/collectors.mjs).
// Each returns { source, jobs } when the board resolves, or null.
// Job shape: { Company, Title, Department, Location, URL, Source, PostedAt, Content, Commitment,
//              Workplace, Pay, DetailURL? }
import { decodeHtml, fetchJson, fetchText, postJson, stripHtml } from "./common.mjs";

const job = (company, source, fields) => ({
  Company: company,
  Title: decodeHtml(fields.Title || "").replace(/\s+/g, " ").trim(),
  Department: fields.Department || "",
  Location: (fields.Location || "").toString().replace(/\s+/g, " ").trim(),
  URL: (fields.URL || "").trim(),
  Source: source,
  PostedAt: fields.PostedAt || "",
  Content: (fields.Content || "").slice(0, 25000),
  Commitment: String(fields.Commitment || "").trim(),
  Workplace: normalizeWorkplace(fields.Workplace),
  Pay: fields.Pay || "",
  ...(fields.DetailURL ? { DetailURL: fields.DetailURL } : {}),
});

export function normalizeWorkplace(value = "") {
  const v = String(value || "").toLowerCase().replace(/[_\s-]+/g, "");
  if (!v || v === "unspecified") return "";
  if (/remote|telecommute|virtual|wfh/.test(v)) return "remote";
  if (/hybrid|flexible/.test(v)) return "hybrid";
  if (/onsite|office|inperson/.test(v)) return "onsite";
  return "";
}

const metaValue = (meta = [], re) => (meta || []).filter((m) => re.test(m?.name || ""))
  .map((m) => (Array.isArray(m.value) ? m.value.join(", ") : m.value)).filter((v) => typeof v === "string" && v).join(", ");

// ---- Greenhouse ---------------------------------------------------------------------------
export async function greenhouse(company, token, { eu = false } = {}) {
  const host = eu ? "boards-api.eu.greenhouse.io" : "boards-api.greenhouse.io";
  const json = await fetchJson(`https://${host}/v1/boards/${token}/jobs?content=true`, { timeoutMs: 25000 });
  if (!json || !Array.isArray(json.jobs)) return null;
  const source = `Greenhouse${eu ? "-EU" : ""}:${token}`;
  return {
    source,
    jobs: json.jobs.map((j) => job(company, source, {
      Title: j.title,
      Department: (j.departments || []).map((d) => d.name).filter(Boolean).join(", "),
      Location: j.location?.name,
      URL: j.absolute_url || `https://job-boards${eu ? ".eu" : ""}.greenhouse.io/${token}/jobs/${j.id}`,
      PostedAt: j.first_published || j.updated_at || "",
      Content: stripHtml(j.content || ""),
      Commitment: metaValue(j.metadata, /employment|job type|commitment|schedule|time type|hours/i),
      Workplace: metaValue(j.metadata, /workplace|remote|location type|work type/i),
    })),
  };
}

// ---- Lever --------------------------------------------------------------------------------
export async function lever(company, token, { eu = false } = {}) {
  const json = await fetchJson(`https://api.${eu ? "eu." : ""}lever.co/v0/postings/${token}?mode=json`, { timeoutMs: 25000 });
  if (!Array.isArray(json)) return null;
  const source = `Lever${eu ? "-EU" : ""}:${token}`;
  return {
    source,
    jobs: json.map((j) => job(company, source, {
      Title: j.text,
      Department: [j.categories?.team, j.categories?.department, j.categories?.commitment].filter(Boolean).join(", "),
      Location: j.categories?.allLocations?.join("; ") || j.categories?.location,
      URL: j.hostedUrl || j.applyUrl,
      PostedAt: j.createdAt ? new Date(j.createdAt).toISOString() : "",
      Content: stripHtml(`${j.descriptionPlain || ""} ${(j.lists || []).map((l) => `${l.text} ${l.content}`).join(" ")} ${j.additionalPlain || ""}`),
      Commitment: j.categories?.commitment || "",
      Workplace: j.workplaceType || "",
      Pay: j.salaryRange ? `${j.salaryRange.min ?? ""}-${j.salaryRange.max ?? ""} ${j.salaryRange.currency || ""} per ${j.salaryRange.interval || ""}` : "",
    })),
  };
}

// ---- Ashby --------------------------------------------------------------------------------
export function ashbyPay(j = {}) {
  return j.compensation?.compensationTierSummary || j.compensation?.scrapeableCompensationSalarySummary || "";
}

export async function ashby(company, token) {
  const json = await fetchJson(`https://api.ashbyhq.com/posting-api/job-board/${token}?includeCompensation=true`, { timeoutMs: 25000 });
  if (!json || !Array.isArray(json.jobs)) return null;
  const source = `Ashby:${token}`;
  return {
    source,
    jobs: json.jobs.map((j) => job(company, source, {
      Title: j.title,
      Department: [j.department, j.team, j.employmentType].filter(Boolean).join(", "),
      Location: [j.locationName || j.location, ...(j.secondaryLocations || []).map((l) => l.location || l.locationName)].filter(Boolean).join("; "),
      URL: j.jobUrl || `https://jobs.ashbyhq.com/${token}/${j.id}`,
      PostedAt: j.publishedAt || "",
      Content: stripHtml(j.descriptionHtml || j.descriptionPlain || ""),
      Commitment: j.employmentType || "",
      Workplace: j.isRemote ? "remote" : j.workplaceType || "",
      Pay: ashbyPay(j),
    })),
  };
}

// ---- Workday (public CXS API) ---------------------------------------------------------------
// Each Workday site is searched for a few keywords instead of enumerating every job.
export const WORKDAY_DEFAULT_SEARCHES = ["intern", "summer", "student"];

async function workdaySearch(url, searchText) {
  const postings = [];
  const limit = 20;
  let total = 0;
  for (let offset = 0; offset < 1000; offset += limit) {
    const json = await postJson(url, { appliedFacets: {}, limit, offset, searchText });
    if (!json) return offset === 0 ? null : postings;
    if (offset === 0) total = json.total || 0; // Workday only reports `total` on the first page.
    const page = json.jobPostings || [];
    postings.push(...page);
    if (!page.length || page.length < limit || (total && postings.length >= total)) break;
  }
  return postings;
}

export async function workday(company, { host, site, tenant, searchText, searchTexts }) {
  const origin = `https://${host}`;
  const ten = tenant || host.split(".")[0];
  const url = `${origin}/wday/cxs/${ten}/${site}/jobs`;
  const queries = searchTexts || (searchText !== undefined ? [searchText] : WORKDAY_DEFAULT_SEARCHES);
  const byPath = new Map();
  let resolved = false;
  for (const q of queries) {
    const list = await workdaySearch(url, q);
    if (!list) continue;
    resolved = true;
    for (const p of list) if (!byPath.has(p.externalPath || p.title)) byPath.set(p.externalPath || p.title, p);
  }
  if (!resolved) return null;
  const source = `Workday:${ten}/${site}`;
  return {
    source,
    jobs: [...byPath.values()].map((p) => job(company, source, {
      Title: p.title,
      Location: p.locationsText,
      URL: `${origin}/${site}${p.externalPath || ""}`,
      PostedAt: p.postedOn || "",
      Content: (p.bulletFields || []).join(" | "),
      Workplace: p.remoteType || "",
      DetailURL: p.externalPath ? `${origin}/wday/cxs/${ten}/${site}${p.externalPath}` : "",
    })),
  };
}

// ---- SmartRecruiters ----------------------------------------------------------------------
export async function smartrecruiters(company, token) {
  const postings = [];
  for (let offset = 0; offset < 1000; offset += 100) {
    const json = await fetchJson(`https://api.smartrecruiters.com/v1/companies/${token}/postings?limit=100&offset=${offset}&q=intern`);
    if (!json) { if (offset === 0) return null; break; }
    const page = json.content || [];
    postings.push(...page);
    if (page.length < 100 || postings.length >= (json.totalFound || 0)) break;
  }
  const source = `SmartRecruiters:${token}`;
  return {
    source,
    jobs: postings.map((p) => job(company, source, {
      Title: p.name,
      Department: p.department?.label || p.function?.label || "",
      Location: [p.location?.remote ? "Remote" : "", p.location?.city, p.location?.region, p.location?.country].filter(Boolean).join(", "),
      URL: `https://jobs.smartrecruiters.com/${token}/${p.id}`,
      PostedAt: p.releasedDate || "",
      Commitment: p.typeOfEmployment?.label || "",
      Workplace: p.location?.remote ? "remote" : p.location?.hybrid ? "hybrid" : "",
      DetailURL: `https://api.smartrecruiters.com/v1/companies/${token}/postings/${p.id}`,
    })),
  };
}

// ---- Workable -----------------------------------------------------------------------------
export async function workable(company, account) {
  const results = [];
  let token;
  for (let i = 0; i < 20; i += 1) {
    const json = await postJson(`https://apply.workable.com/api/v3/accounts/${account}/jobs`, token ? { token } : {});
    if (!json) { if (i === 0) return null; break; }
    results.push(...(json.results || []));
    token = json.nextPage;
    if (!token) break;
  }
  const source = `Workable:${account}`;
  return {
    source,
    jobs: results.map((r) => job(company, source, {
      Title: r.title,
      Department: [r.department, r.type].filter(Boolean).join(", "),
      Location: [r.location?.city, r.location?.region, r.location?.country].filter(Boolean).join(", ") || (r.remote ? "Remote" : ""),
      URL: `https://apply.workable.com/${account}/j/${r.shortcode}/`,
      PostedAt: r.published || "",
      Commitment: r.type || r.employmentType || "",
      Workplace: r.workplace || (r.remote ? "remote" : ""),
      DetailURL: `https://apply.workable.com/api/v2/accounts/${account}/jobs/${r.shortcode}`,
    })),
  };
}

// ---- iCIMS (iframe search pages) ----------------------------------------------------------
export async function icims(company, sub) {
  const host = sub.includes(".") ? sub : `${sub}.icims.com`;
  const source = `iCIMS:${host.split(".")[0]}`;
  const seen = new Set();
  const jobs = [];
  let resolved = false;
  for (let page = 0; page < 15; page += 1) {
    const res = await fetchText(`https://${host}/jobs/search?ss=1&searchKeyword=intern&in_iframe=1&pr=${page}`);
    if (!res.ok) break;
    resolved = true;
    let added = 0;
    for (const m of res.text.matchAll(/<a[^>]+href="(https?:\/\/[^"]+\/jobs\/(\d+)\/[^"]*\/job[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)) {
      const id = m[2];
      if (seen.has(id)) continue;
      const title = stripHtml(m[3]).replace(/^(?:Job\s+)?(?:Posting\s+)?Title\s*/i, "").trim();
      if (!title) continue;
      seen.add(id);
      added += 1;
      jobs.push(job(company, source, { Title: title, Location: "", URL: `https://${host}/jobs/${id}/job`, DetailURL: `https://${host}/jobs/${id}/job?in_iframe=1` }));
    }
    if (!added) break;
  }
  return resolved ? { source, jobs } : null;
}

// ---- Oracle Recruiting Cloud --------------------------------------------------------------
export async function oracle(company, { host, site }) {
  const all = [];
  for (let offset = 0; offset < 1000; offset += 200) {
    const url = `https://${host}/hcmRestApi/resources/latest/recruitingCEJobRequisitions?onlyData=true&expand=requisitionList.secondaryLocations&finder=findReqs;siteNumber=${site},facetsList=NONE,limit=200,offset=${offset},keyword=intern,sortBy=POSTING_DATES_DESC`;
    const json = await fetchJson(url);
    const bucket = json?.items?.[0];
    if (!bucket) { if (offset === 0) return null; break; }
    const list = bucket.requisitionList || [];
    all.push(...list);
    if (list.length < 200 || all.length >= (bucket.TotalJobsCount || 0)) break;
  }
  const source = `Oracle:${host.split(".")[0]}/${site}`;
  return {
    source,
    jobs: all.map((r) => job(company, source, {
      Title: r.Title,
      Department: [r.JobFamily, r.JobFunction].filter(Boolean).join(", "),
      Location: [r.PrimaryLocation, ...(r.secondaryLocations || []).map((l) => l.Name)].filter(Boolean).join("; "),
      URL: `https://${host}/hcmUI/CandidateExperience/en/sites/${site}/job/${r.Id}`,
      PostedAt: r.PostedDate || "",
      Content: stripHtml(`${r.ShortDescriptionStr || ""} ${r.ExternalQualificationsStr || ""}`),
      Commitment: r.JobSchedule || r.WorkerType || "",
      Workplace: r.WorkplaceType || r.WorkplaceTypeCode || "",
      DetailURL: `https://${host}/hcmRestApi/resources/latest/recruitingCEJobRequisitionDetails?expand=all&onlyData=true&finder=ById;Id=%22${r.Id}%22,siteNumber=${site}`,
    })),
  };
}

// ---- Amazon (amazon.jobs public search JSON) ----------------------------------------------
export async function amazon(company, query) {
  const all = [];
  let resolved = false;
  for (let offset = 0; offset < 1000; offset += 100) {
    const json = await fetchJson(`https://www.amazon.jobs/en/search.json?base_query=${encodeURIComponent(query)}&country=USA&result_limit=100&offset=${offset}&sort=recent`);
    if (!json || !Array.isArray(json.jobs)) { if (offset === 0) return null; break; }
    resolved = true;
    all.push(...json.jobs);
    if (json.jobs.length < 100 || all.length >= (json.hits || 0)) break;
  }
  if (!resolved) return null;
  const source = `Amazon:${query}`;
  return {
    source,
    jobs: all.map((j) => job(company, source, {
      Title: j.title,
      Department: [j.job_category, j.business_category, j.team?.label].filter(Boolean).join(", "),
      Location: j.normalized_location || j.location || "",
      URL: j.job_path ? `https://www.amazon.jobs${j.job_path}` : j.url_next_step || "",
      PostedAt: j.posted_date || "",
      Content: stripHtml(`${j.description || j.description_short || ""} ${j.basic_qualifications || ""} ${j.preferred_qualifications || ""}`),
      Commitment: j.job_schedule_type || "",
      Workplace: /virtual|remote/i.test(`${j.location || ""} ${j.city || ""}`) ? "remote" : "",
    })),
  };
}

// ---- Eightfold ----------------------------------------------------------------------------
export async function eightfold(company, { host, domain, queries = ["intern", "summer"] }) {
  const byId = new Map();
  let resolved = false;
  for (const q of queries) {
    for (let start = 0; start < 500; start += 100) {
      const qs = `domain=${encodeURIComponent(domain)}&query=${encodeURIComponent(q)}&start=${start}&num=100&sort_by=relevance`;
      let json = await fetchJson(`https://${host}/api/apply/v2/jobs?${qs}`);
      let list = json?.positions;
      if (!Array.isArray(list)) {
        json = await fetchJson(`https://${host}/api/pcsx/search?${qs}`);
        list = json?.data?.positions;
      }
      if (!Array.isArray(list)) break;
      resolved = true;
      for (const p of list) byId.set(String(p.id), p);
      if (list.length < 100) break;
    }
  }
  if (!resolved) return null;
  const source = `Eightfold:${host}`;
  return {
    source,
    jobs: [...byId.values()].map((p) => job(company, source, {
      Title: p.name || p.posting_name,
      Department: p.department || "",
      Location: (p.locations || p.standardizedLocations || []).join("; ") || p.location || "",
      URL: p.canonicalPositionUrl || (p.positionUrl ? `https://${host}${p.positionUrl}` : `https://${host}/careers?pid=${p.id}&domain=${domain}`),
      PostedAt: p.t_create ? new Date(p.t_create * 1000).toISOString() : p.postedTs ? new Date(p.postedTs * 1000).toISOString() : "",
      Content: stripHtml(p.job_description || ""),
      Commitment: p.type || p.employmentType || "",
      Workplace: p.work_location_option || p.workLocationOption || "",
    })),
  };
}

// ---- Dispatcher ---------------------------------------------------------------------------
export function collectorTasks(company, seeds = {}) {
  const tasks = [];
  const add = (key, fn) => { for (const value of seeds[key] || []) tasks.push({ key, value, run: () => fn(value) }); };
  add("greenhouse", (t) => greenhouse(company, t));
  add("lever", (t) => lever(company, t));
  add("ashby", (t) => ashby(company, t));
  add("workday", (w) => workday(company, w));
  add("smartrecruiters", (t) => smartrecruiters(company, t));
  add("workable", (t) => workable(company, t));
  add("icims", (t) => icims(company, t));
  add("oracle", (o) => oracle(company, o));
  add("amazon", (q) => amazon(company, q));
  add("eightfold", (e) => eightfold(company, e));
  return tasks;
}

export const SUPPORTED_SEED_KEYS = ["greenhouse", "lever", "ashby", "workday", "smartrecruiters", "workable", "icims", "oracle", "amazon", "eightfold"];

export function seedKey(key, value) {
  return `${key}:${typeof value === "string" ? value.toLowerCase() : `${value.host}/${value.site || value.domain || ""}`.toLowerCase()}`;
}
