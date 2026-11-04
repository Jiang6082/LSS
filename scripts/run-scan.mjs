// LSS scan: community job lists + official ATS boards -> known-firm, US, SWE/PM/data/finance
// internships -> detail fetch (dates, pay, language, still open?) -> date-window buckets -> reports.
//
//   node scripts/run-scan.mjs [--out=DIR] [--no-ats] [--no-guess] [--no-remote-seeds] [--max-enrich=N]
import fs from "node:fs/promises";
import path from "node:path";
import { collectAggregators } from "../tools/aggregators.mjs";
import { ashby, collectorTasks, greenhouse, lever, seedKey } from "../tools/collectors.mjs";
import { canonicalUrl, fetchJson, mapLimit, parseCsv } from "../tools/common.mjs";
import { classifyDates } from "../tools/dates.mjs";
import { enrichRow } from "../tools/enrich.mjs";
import { degreeRequirement, titleDegree } from "../tools/degree.mjs";
import { languageFlags, parsePay, screenRole, UNPAID_RE, usStatus } from "../tools/filter.mjs";
import { generatedTokens, loadKnownFirms, loadSeeds, normalizeCompany } from "../tools/firms.mjs";
import { writeReports } from "./build-reports.mjs";

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(`--${name}`);
const opt = (name, fallback) => argv.find((a) => a.startsWith(`--${name}=`))?.split("=").slice(1).join("=") ?? fallback;
const OUT = opt("out", ".");
const started = Date.now();
const log = { scannedAt: new Date().toISOString(), steps: [], errors: [] };
const step = (msg) => { const line = `[${((Date.now() - started) / 1000).toFixed(0)}s] ${msg}`; console.log(line); log.steps.push(line); };

const config = JSON.parse(await fs.readFile(opt("config", "inputs/config.json"), "utf8"));
const known = await loadKnownFirms("inputs/known_firms.json");
const minPay = Number(config.minHourlyPay ?? 30);
step(`known firms: ${known.firms.length}; window ${config.window.earliestStart} -> ${config.window.latestEnd}; min pay $${minPay}/hr`);

// ---------------------------------------------------------------------------------------------
// 1. Community lists
const agg = await collectAggregators(config.sources || {}, { maxAgeDays: config.maxPostingAgeDays ?? 240 });
log.sources = agg.status;
step(`aggregators: ${Object.entries(agg.status).map(([k, v]) => `${k}=${v.ok ? v.rows : `FAILED (${v.error})`}`).join(", ")}`);

// ---------------------------------------------------------------------------------------------
// 2. Official ATS boards for known firms
const { seeds, ptsStatus } = await loadSeeds(known, { remote: !flag("no-remote-seeds") });
log.ptsSeeds = ptsStatus;
const GUESS_CATEGORIES = new Set(config.guessAtsCategories || []);
const normalizeName = (v = "") => v.toLowerCase().replace(/&/g, "and").replace(/\(.*?\)/g, " ").replace(/[^a-z0-9]+/g, " ").trim();
async function greenhouseBoardMatches(firm, token) {
  const meta = await fetchJson(`https://boards-api.greenhouse.io/v1/boards/${token}`);
  if (!meta?.name) return false;
  const board = normalizeName(meta.name).replace(/\s+/g, "");
  const words = normalizeName(firm.name).split(" ").filter((w) => w.length > 2 && !["the", "and", "group", "capital", "partners", "ventures", "labs", "technologies", "inc"].includes(w));
  return words.some((w) => board.includes(w));
}
const guessedJobsMatch = (firm, jobs) => {
  const words = normalizeName(firm.name).split(" ").filter((w) => w.length > 3);
  if (!jobs.length) return false;
  const text = jobs.slice(0, 15).map((j) => `${j.Content} ${j.URL}`).join(" ").toLowerCase();
  return words.some((w) => text.includes(w));
};

const boardAudit = [];
let boardRows = [];
if (!flag("no-ats") && config.atsBoards !== false) {
  const firmsToScan = known.firms.filter((f) => seeds[f.name] || (!flag("no-guess") && config.guessAtsSlugs !== false && GUESS_CATEGORIES.has(f.category)));
  step(`ATS: scanning ${firmsToScan.length} firms (${Object.keys(seeds).length} seeded; PTS seeds ${ptsStatus})`);
  const results = await mapLimit(firmsToScan, 10, async (firm) => {
    const firmSeeds = seeds[firm.name] || {};
    const tasks = collectorTasks(firm.name, firmSeeds).map((t) => ({ ...t, origin: firmSeeds._origin || "seeded" }));
    const seeded = new Set(tasks.map((t) => seedKey(t.key, t.value)));
    if (!flag("no-guess") && config.guessAtsSlugs !== false && GUESS_CATEGORIES.has(firm.category)) {
      for (const token of generatedTokens(firm.name)) {
        if (!seeded.has(seedKey("greenhouse", token))) tasks.push({ key: "greenhouse", value: token, origin: "guessed", run: async () => ((await greenhouseBoardMatches(firm, token)) ? greenhouse(firm.name, token) : null) });
        if (!seeded.has(seedKey("lever", token))) tasks.push({ key: "lever", value: token, origin: "guessed", run: async () => { const b = await lever(firm.name, token); return b && guessedJobsMatch(firm, b.jobs) ? b : null; } });
        if (!seeded.has(seedKey("ashby", token))) tasks.push({ key: "ashby", value: token, origin: "guessed", run: async () => { const b = await ashby(firm.name, token); return b && guessedJobsMatch(firm, b.jobs) ? b : null; } });
      }
    }
    const outcomes = await Promise.all(tasks.map((t) => t.run().catch(() => null)));
    const live = []; const failed = [];
    const rows = [];
    outcomes.forEach((res, i) => {
      const t = tasks[i];
      const label = `${t.key}:${typeof t.value === "string" ? t.value : `${t.value.host}/${t.value.site || t.value.domain}`}`;
      if (res) {
        live.push({ board: label, origin: t.origin, jobs: res.jobs.length, candidates: res.jobs.filter((j) => screenRole(j).ok).length });
        // Keep only internship-looking, non-foreign postings here so big boards don't sit in memory.
        for (const j of res.jobs) {
          if (!screenRole(j, { excludeNonPythonTitles: config.excludeNonPythonTitles !== false }).ok || usStatus(j.Location) === "non-us") continue;
          rows.push({ ...j, Company: firm.name, Terms: [], Category: "", Source: `ATS ${res.source}` });
        }
      } else if (t.origin !== "guessed") failed.push(label);
    });
    return { firm: firm.name, category: firm.category, live, failed, rows };
  }, "ATS firms");
  for (const r of results.filter(Boolean)) {
    boardAudit.push({ firm: r.firm, category: r.category, live: r.live, failed: r.failed, jobs: r.rows.length });
    boardRows.push(...r.rows);
  }
  step(`ATS: ${boardAudit.filter((b) => b.live.length).length} firms with live boards, ${boardRows.length} postings`);
}
log.boards = { firmsWithLiveBoards: boardAudit.filter((b) => b.live.length).length, postings: boardRows.length, failedSeeds: boardAudit.flatMap((b) => b.failed.map((f) => `${b.firm} ${f}`)) };

// ---------------------------------------------------------------------------------------------
// 3. Title / company / location / term pre-screen
const reject = {};
const bump = (reason) => { reject[reason] = (reject[reason] || 0) + 1; };
const payRejected = [];
const degreeRejected = [];
const noteDegree = (row, level, evidence) => { if (degreeRejected.length < 1500) degreeRejected.push({ company: row.Firm || row.Company, title: row.Title, level, evidence: String(evidence || "").slice(0, 220), url: row.URL }); };
const notePay = (row, pay) => { if (payRejected.length < 400) payRejected.push({ company: row.Firm || row.Company, title: row.Title, pay: pay.text, hourly: pay.min, url: row.URL }); };
const unlisted = new Map();
const prefiltered = [];
for (const row of [...agg.rows, ...boardRows]) {
  if (!row.URL || !row.Title) { bump("missing url/title"); continue; }
  const role = screenRole(row, { excludeNonPythonTitles: config.excludeNonPythonTitles !== false });
  if (!role.ok) { bump(role.reason); continue; }
  const td = titleDegree(row.Title);
  if (!td.ok) { bump("graduate/professional degree (title)"); if (known.match(row.Company) || row.KnownBySource) noteDegree(row, "title", td.reason); continue; }
  const loc = usStatus(row.Location);
  if (loc === "non-us") { bump("outside US"); continue; }
  if (loc !== "us" && usStatus(row.Title) === "non-us") { bump("outside US (title)"); continue; }
  if (loc === "unknown" && config.includeUnknownLocation === false) { bump("location unknown"); continue; }
  const term = classifyDates({ Title: row.Title, Terms: row.Terms, Content: "" }, config.window);
  // Fall-only and undated co-ops still get a detail fetch: their posted dates decide.
  if (term.bucket === "exclude" && !/fall-only|co-op/.test(term.reason)) { bump(`term: ${term.reason.replace(/\d{4}(\/\d{4})*/g, "####")}`); continue; }
  let firm = known.match(row.Company);
  if (!firm && row.KnownBySource) firm = { name: row.Company, category: /quant/i.test(row.KnownBySource) ? "Quant & Trading" : "Big Tech", tier: 0, viaSource: row.KnownBySource };
  if (!firm) {
    bump("not on known-firm list");
    const key = normalizeCompany(row.Company);
    const u = unlisted.get(key) || { company: row.Company, count: 0, example: row.Title, url: row.URL };
    u.count += 1; unlisted.set(key, u);
    continue;
  }
  const pay = parsePay(row.Pay);
  if (pay && (pay.max ?? pay.min) < minPay) { bump(`pay below $${minPay}/hr`); notePay({ ...row, Firm: firm.name }, pay); continue; }
  prefiltered.push({ ...row, Firm: firm.name, FirmCategory: firm.category, FirmTier: firm.tier, Track: role.track, US: loc });
}
step(`pre-screen: ${prefiltered.length} candidate postings`);

// Merge identical URLs across sources before fetching details.
const byUrl = new Map();
for (const row of prefiltered) {
  const key = canonicalUrl(row.URL);
  const prev = byUrl.get(key);
  if (!prev) { byUrl.set(key, { ...row, Sources: [row.Source], CanonicalURL: key }); continue; }
  prev.Sources = [...new Set([...prev.Sources, row.Source])];
  if ((row.Content || "").length > (prev.Content || "").length) { prev.Content = row.Content; prev.DetailURL = row.DetailURL || prev.DetailURL; prev.Source = row.Source; }
  if (!prev.Pay && row.Pay) prev.Pay = row.Pay;
  if (!prev.Terms?.length && row.Terms?.length) prev.Terms = row.Terms;
  if (!prev.PostedAt && row.PostedAt) prev.PostedAt = row.PostedAt;
}
let candidates = [...byUrl.values()];
const maxEnrich = Number(opt("max-enrich", config.maxEnrich ?? 6000));
if (candidates.length > maxEnrich) { step(`capping detail fetches at ${maxEnrich}`); candidates = candidates.slice(0, maxEnrich); }

// ---------------------------------------------------------------------------------------------
// 4. Detail fetch + liveness
const ghTokensByFirm = Object.fromEntries(Object.entries(seeds).map(([name, s]) => [name, s.greenhouse || []]));
step(`detail fetch: ${candidates.length} unique postings`);
const enriched = (await mapLimit(candidates, 12, (row) => enrichRow(row, { ghTokens: ghTokensByFirm[row.Firm] || [] }), "details")).filter(Boolean);
const detailStats = {};
for (const r of enriched) { const k = String(r.DetailStatus || "none").replace(/^error:.*/, "error"); detailStats[k] = (detailStats[k] || 0) + 1; }
log.detailStats = detailStats;
step(`detail results: ${Object.entries(detailStats).map(([k, v]) => `${k}=${v}`).join(", ")}`);

// ---------------------------------------------------------------------------------------------
// 5. Full classification
const kept = []; const dateExcluded = []; let closedCount = 0;
for (const row of enriched) {
  if (row.Closed) { closedCount += 1; bump("closed (verified)"); continue; }
  const loc = usStatus(row.Location);
  if (loc === "non-us") { bump("outside US (detail)"); continue; }
  if (UNPAID_RE.test(row.Content || "")) { bump("unpaid"); continue; }
  const degree = degreeRequirement(`${row.Title} . ${row.Content || ""}`);
  if (!degree.ok) { bump(`requires ${degree.level} (description)`); noteDegree(row, degree.level, degree.evidence); continue; }
  const pay = parsePay(row.Pay) || parsePay(row.Content);
  // Drop only when even the top of the stated range is below the minimum ("$25 - $75/hr" stays).
  if (pay && (pay.max ?? pay.min) < minPay) { bump(`pay below $${minPay}/hr`); notePay(row, pay); continue; }
  const verdict = classifyDates(row, config.window);
  const lang = languageFlags(row.Content);
  const out = {
    Company: row.Firm,
    Category: row.FirmCategory,
    Tier: row.FirmTier,
    Track: row.Track,
    Title: row.Title,
    Location: row.Location,
    US: loc,
    Bucket: verdict.bucket,
    Dates: verdict.dates || "",
    DateNote: verdict.reason,
    Weeks: verdict.weeks || "",
    Evidence: (verdict.evidence || "").slice(0, 220),
    Pay: pay ? (pay.max && pay.max !== pay.min ? `$${pay.min}-${pay.max}/hr` : `$${pay.min}/hr`) : "",
    PayMin: pay?.min ?? "",
    Python: lang.python ? "yes" : lang.others.length ? `no (${lang.others.join("/")})` : "",
    Undergrad: degree.level === "undergrad" ? "yes" : "",
    DegreeEvidence: (degree.evidence || "").slice(0, 200),
    URL: /go\.vansh\.nyc|simplify\.jobs/.test(row.URL) && row.FinalURL ? row.FinalURL : row.URL,
    CanonicalURL: row.CanonicalURL,
    Sources: row.Sources,
    PostedAt: row.PostedAt || "",
    Terms: Array.isArray(row.Terms) ? row.Terms.join(", ") : row.Terms || "",
    DetailStatus: row.DetailStatus || "",
  };
  if (verdict.bucket === "exclude") { dateExcluded.push(out); bump(`dates: ${verdict.reason.startsWith("posted dates") ? "posted dates conflict" : verdict.reason}`); continue; }
  kept.push(out);
}
step(`classified: ${kept.length} kept, ${dateExcluded.length} excluded by dates, ${closedCount} closed`);

// Same role posted at several URLs (cities, boards, aggregators) -> one row.
const BUCKET_RANK = { fit: 0, flex: 1, ask: 2 };
const titleKey = (t) => t.toLowerCase().replace(/\b20\d{2}\b/g, " ").replace(/[^a-z0-9+#]+/g, " ").trim();
const roles = new Map();
for (const r of kept) {
  const key = `${normalizeCompany(r.Company)}|${titleKey(r.Title)}`;
  const prev = roles.get(key);
  if (!prev) { roles.set(key, { ...r, Key: key, Locations: [r.Location].filter(Boolean), URLs: [r.URL] }); continue; }
  prev.Locations = [...new Set([...prev.Locations, ...String(r.Location).split(/\s*;\s*/)].filter(Boolean))];
  prev.URLs = [...new Set([...prev.URLs, r.URL])];
  prev.Sources = [...new Set([...prev.Sources, ...r.Sources])];
  if (BUCKET_RANK[r.Bucket] < BUCKET_RANK[prev.Bucket]) Object.assign(prev, { Bucket: r.Bucket, Dates: r.Dates, DateNote: r.DateNote, Evidence: r.Evidence, URL: r.URL, Weeks: r.Weeks });
  if (!prev.Pay && r.Pay) { prev.Pay = r.Pay; prev.PayMin = r.PayMin; }
  if (!prev.Python && r.Python) prev.Python = r.Python;
  if (!prev.Undergrad && r.Undergrad) { prev.Undergrad = r.Undergrad; prev.DegreeEvidence = r.DegreeEvidence; }
  if (r.PostedAt && (!prev.PostedAt || r.PostedAt < prev.PostedAt)) prev.PostedAt = r.PostedAt;
}
const final = [...roles.values()].map((r) => ({ ...r, Location: r.Locations.join("; ") }));

// ---------------------------------------------------------------------------------------------
// 6. Applied tracker + history (new since last scan)
let applied = [];
try { applied = parseCsv(await fs.readFile("inputs/applied.csv", "utf8")); } catch { applied = []; }
const appliedByUrl = new Map(applied.filter((a) => a.url).map((a) => [canonicalUrl(a.url), a]));
const appliedByKey = new Map(applied.filter((a) => a.company && a.title).map((a) => [`${normalizeCompany(a.company)}|${titleKey(a.title)}`, a]));
for (const r of final) {
  const a = appliedByKey.get(r.Key) || r.URLs.map((u) => appliedByUrl.get(canonicalUrl(u))).find(Boolean);
  if (a) r.Applied = a.status || "applied";
}

const historyPath = path.join(OUT, "data/history.json");
let history = {};
try { history = JSON.parse(await fs.readFile(historyPath, "utf8")); } catch { history = {}; }
const firstRun = !Object.keys(history).length;
const today = log.scannedAt.slice(0, 10);
const currentKeys = new Set(final.map((r) => r.Key));
for (const r of final) {
  const h = history[r.Key] || { firstSeen: today };
  r.FirstSeen = h.firstSeen;
  r.New = !firstRun && !history[r.Key];
  history[r.Key] = { firstSeen: h.firstSeen, lastSeen: today, bucket: r.Bucket, company: r.Company, title: r.Title, url: r.URL };
}
const gone = Object.entries(history).filter(([k, h]) => !currentKeys.has(k) && h.lastSeen && h.lastSeen < today && !h.goneOn).map(([k, h]) => { h.goneOn = today; return { Key: k, ...h }; });

log.funnel = { aggregatorRows: agg.rows.length, boardRows: boardRows.length, prefiltered: prefiltered.length, uniqueUrls: byUrl.size, enriched: enriched.length, closed: closedCount, kept: kept.length, roles: final.length, dateExcluded: dateExcluded.length };
log.rejected = Object.fromEntries(Object.entries(reject).sort((a, b) => b[1] - a[1]));
log.durationSec = Math.round((Date.now() - started) / 1000);

await writeReports({
  out: OUT, config, log, roles: final, dateExcluded, gone, firstRun, boardAudit, payRejected, degreeRejected,
  unlisted: [...unlisted.values()].sort((a, b) => b.count - a.count).slice(0, 120),
  history,
});
step(`done: ${final.filter((r) => r.Bucket === "fit").length} fit, ${final.filter((r) => r.Bucket === "flex").length} flexible, ${final.filter((r) => r.Bucket === "ask").length} ask-about-dates`);
await fs.writeFile(path.join(OUT, "data/run_log.json"), JSON.stringify(log, null, 2), "utf8");
