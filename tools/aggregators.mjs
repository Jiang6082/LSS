// Community job lists ("networks") parsed into the scanner's row shape:
//   SimplifyJobs/Summer2027-Internships  (.github/scripts/listings.json - summer + off-season)
//   vanshb03/Summer2027-Internships      (.github/scripts/listings.json)
//   speedyapply/2027-SWE-College-Jobs    (README tables, with salary for FAANG+/Quant)
//   speedyapply/2027-AI-College-Jobs     (README tables)
import { fetchText, stripHtml, decodeHtml } from "./common.mjs";

const toIso = (epochSeconds) => (Number.isFinite(Number(epochSeconds)) && Number(epochSeconds) > 0 ? new Date(Number(epochSeconds) * 1000).toISOString() : "");

export function rowsFromListingsJson(list, source, { maxAgeDays = 240, now = Date.now() } = {}) {
  if (!Array.isArray(list)) return [];
  const cutoff = now - maxAgeDays * 86400000;
  const rows = [];
  for (const l of list) {
    if (!l || l.active === false || l.is_visible === false) continue;
    const posted = Number(l.date_posted || 0) * 1000;
    if (posted && posted < cutoff) continue;
    const terms = Array.isArray(l.terms) ? l.terms : l.terms ? [l.terms] : l.season ? [l.season] : [];
    rows.push({
      Company: decodeHtml(l.company_name || ""),
      Title: decodeHtml(l.title || ""),
      Location: (Array.isArray(l.locations) ? l.locations : [l.locations || ""]).filter(Boolean).join("; "),
      URL: String(l.url || "").trim(),
      Terms: terms,
      PostedAt: toIso(l.date_posted),
      Category: l.category || "",
      Pay: "",
      Content: "",
      Department: "",
      Source: source,
      Sponsorship: l.sponsorship || "",
    });
  }
  return rows;
}

function splitRow(line) {
  const cells = line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|");
  return cells.map((c) => c.trim());
}

function ageToIso(age = "", now = Date.now()) {
  const m = String(age).match(/(\d+)\s*(d|day|w|wk|mo|month|h|hr)/i);
  if (!m) return "";
  const n = Number(m[1]);
  const unit = m[2].toLowerCase();
  const days = unit.startsWith("h") ? 0 : unit.startsWith("w") ? n * 7 : unit.startsWith("mo") ? n * 30 : n;
  return new Date(now - days * 86400000).toISOString();
}

// speedyapply README: "### FAANG+" / "### Quant" / "### Other" sections, each a markdown table.
export function rowsFromSpeedyReadme(md = "", source = "speedyapply", { now = Date.now() } = {}) {
  const rows = [];
  let section = "";
  let headers = null;
  for (const line of String(md).split(/\r?\n/)) {
    const heading = line.match(/^#{2,4}\s+(.+?)\s*$/);
    if (heading) { section = stripHtml(heading[1]).replace(/:[a-z_]+:/g, "").trim(); headers = null; continue; }
    if (/^\|\s*Company\s*\|/i.test(line)) { headers = splitRow(line).map((h) => h.toLowerCase()); continue; }
    if (!headers) continue;
    if (/^\|\s*:?-{2,}/.test(line)) continue;
    if (!line.trim().startsWith("|")) { headers = null; continue; }
    const cells = splitRow(line);
    const get = (name) => cells[headers.indexOf(name)] ?? "";
    const company = stripHtml(get("company"));
    const title = stripHtml(get("position") || get("role") || get("title"));
    const posting = get("posting") || get("link") || get("apply");
    const url = decodeHtml(posting.match(/href="([^"]+)"/i)?.[1] || posting.match(/\((https?:[^)]+)\)/)?.[1] || "");
    if (!company || !title || !url) continue;
    rows.push({
      Company: company,
      Title: title,
      Location: stripHtml(get("location")),
      URL: url,
      Terms: [],
      PostedAt: ageToIso(get("age"), now),
      Category: /quant/i.test(section) ? "Quantitative Finance" : "",
      Pay: stripHtml(get("salary")),
      Content: "",
      Department: "",
      Source: source,
      KnownBySource: /faang|quant/i.test(section) ? section : "",
    });
  }
  return rows;
}

export async function collectAggregators(sources = {}, opts = {}) {
  const status = {};
  const tasks = Object.entries(sources).filter(([, url]) => url).map(async ([name, url]) => {
    const res = await fetchText(url, { timeoutMs: 60000 });
    if (!res.ok) { status[name] = { ok: false, error: res.error || `HTTP ${res.status}`, rows: 0 }; return []; }
    let rows = [];
    try {
      if (/\.json(\?|$)/.test(url)) rows = rowsFromListingsJson(JSON.parse(res.text), sourceLabel(name), opts);
      else rows = rowsFromSpeedyReadme(res.text, sourceLabel(name), opts);
    } catch (error) {
      status[name] = { ok: false, error: error.message, rows: 0 };
      return [];
    }
    status[name] = { ok: true, rows: rows.length, bytes: res.text.length };
    return rows;
  });
  const rows = (await Promise.all(tasks)).flat();
  return { rows, status };
}

function sourceLabel(name) {
  return {
    simplify: "Simplify",
    vanshb03: "vanshb03",
    speedyapply_swe: "speedyapply SWE",
    speedyapply_ai: "speedyapply AI",
  }[name] || name;
}
