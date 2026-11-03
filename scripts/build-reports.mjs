// Writes README.md (dashboard), reports/*.md|csv and data/*.json from a finished scan.
import fs from "node:fs/promises";
import path from "node:path";
import { toCsv } from "../tools/common.mjs";
import { TRACKS } from "../tools/filter.mjs";

const TRACK_LABEL = { Software: "💻 Software Engineering", Product: "📱 Product Management", Data: "📊 Data / Analytics / ML", Finance: "📈 Finance / Investment / Quant" };
const README_ASK_PER_TRACK = 60;

const esc = (s = "") => String(s).replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
const shortLoc = (loc = "") => {
  const parts = String(loc).split(/\s*;\s*/).filter(Boolean);
  if (parts.length <= 2) return esc(parts.join("; "));
  return `${esc(parts.slice(0, 2).join("; "))} +${parts.length - 2}`;
};
const day = (iso = "") => (iso ? String(iso).slice(0, 10) : "");
const py = (v = "") => (v === "yes" ? "✓" : v.startsWith("no") ? `✗ ${v.replace(/^no \(|\)$/g, "")}` : "");
const sortRoles = (rows) => rows.slice().sort((a, b) =>
  TRACKS.indexOf(a.Track) - TRACKS.indexOf(b.Track) || (a.Tier ?? 99) - (b.Tier ?? 99) || a.Company.localeCompare(b.Company) || a.Title.localeCompare(b.Title));

function table(rows, { showTrack = false, note = true } = {}) {
  if (!rows.length) return "_None right now._\n";
  const head = ["Company", "Role", ...(showTrack ? ["Track"] : []), "Location", note ? "Dates / note" : "Dates", "Pay", "Py", "Posted", "Link"];
  const lines = [`| ${head.join(" | ")} |`, `|${head.map(() => "---").join("|")}|`];
  for (const r of rows) {
    const dateCell = esc([r.Dates, note && r.Bucket !== "fit" ? r.DateNote : ""].filter(Boolean).join(" — "));
    const tags = [r.New ? "🆕" : "", r.Applied ? `✅ ${esc(r.Applied)}` : ""].filter(Boolean).join(" ");
    lines.push(`| **${esc(r.Company)}** | ${esc(r.Title)}${tags ? ` ${tags}` : ""} | ${showTrack ? `${r.Track} | ` : ""}${shortLoc(r.Location)} | ${dateCell} | ${esc(r.Pay)} | ${py(r.Python)} | ${day(r.PostedAt)} | [Apply](${r.URL}) |`);
  }
  return `${lines.join("\n")}\n`;
}

function byTrack(rows, render) {
  return TRACKS.map((t) => {
    const list = rows.filter((r) => r.Track === t);
    return list.length ? render(t, list) : "";
  }).filter(Boolean).join("\n");
}

export async function writeReports({ out = ".", config, log, roles, dateExcluded, gone, firstRun, boardAudit, unlisted, history }) {
  const dir = (p) => path.join(out, p);
  await fs.mkdir(dir("reports"), { recursive: true });
  await fs.mkdir(dir("data"), { recursive: true });

  const fit = sortRoles(roles.filter((r) => r.Bucket === "fit"));
  const flex = sortRoles(roles.filter((r) => r.Bucket === "flex"));
  const ask = sortRoles(roles.filter((r) => r.Bucket === "ask"));
  const fresh = sortRoles(roles.filter((r) => r.New));
  const date = log.scannedAt.slice(0, 10);
  const w = config.window;
  const minPay = config.minHourlyPay ?? 30;

  // ---- CSV + JSON ---------------------------------------------------------------------------
  const headers = ["Bucket", "Track", "Company", "Category", "Title", "Location", "Dates", "DateNote", "Weeks", "Pay", "Python", "PostedAt", "FirstSeen", "New", "Applied", "URL", "Sources", "Evidence"];
  await fs.writeFile(dir("reports/roles.csv"), toCsv([...fit, ...flex, ...ask], headers), "utf8");
  await fs.writeFile(dir("reports/excluded_by_dates.csv"), toCsv(sortRoles(dateExcluded), ["Track", "Company", "Title", "Location", "Dates", "DateNote", "Pay", "URL", "Evidence"]), "utf8");
  await fs.writeFile(dir("data/roles.json"), JSON.stringify({ scannedAt: log.scannedAt, window: w, roles }, null, 1), "utf8");
  await fs.writeFile(dir("data/history.json"), JSON.stringify(history, null, 1), "utf8");

  // ---- Full "dates not stated" list -------------------------------------------------------
  await fs.writeFile(dir("reports/summer_dates_not_stated.md"), [
    "# Summer 2027 roles with no dates in the posting",
    "",
    `Scan: ${date} · ${ask.length} roles · ask the recruiter whether a start around late July (ending by ${w.latestEnd}) is possible. Fixed-class programs (bank analyst classes, rotational programs) rarely move; tech internships with individual start dates are the best bets.`,
    "",
    byTrack(ask, (t, list) => `## ${TRACK_LABEL[t]} (${list.length})\n\n${table(list)}`),
  ].join("\n"), "utf8");

  // ---- Excluded-by-dates report (near misses + sanity check of the date parser) -------------
  await fs.writeFile(dir("reports/excluded_by_dates.md"), [
    "# Excluded because the posted dates conflict with the window",
    "",
    `Scan: ${date} · ${dateExcluded.length} postings at known firms whose own dates fall outside ${w.earliestStart} → ${w.latestEnd} (e.g. a June start or an end in December). Listed so you can spot a misread date; the quoted sentence is what the parser used.`,
    "",
    "| Company | Role | Dates read | Why | Evidence | Link |",
    "|---|---|---|---|---|---|",
    ...sortRoles(dateExcluded).slice(0, 600).map((r) => `| ${esc(r.Company)} | ${esc(r.Title)} | ${esc(r.Dates)} | ${esc(r.DateNote)} | ${esc(r.Evidence).slice(0, 160)} | [link](${r.URL}) |`),
    "",
  ].join("\n"), "utf8");

  // ---- Audit ------------------------------------------------------------------------------------
  const live = boardAudit.filter((b) => b.live.length);
  await fs.writeFile(dir("reports/scan_audit.md"), [
    "# Scan audit",
    "",
    `Scan: ${log.scannedAt} · ${log.durationSec}s`,
    "",
    "## Sources",
    "",
    "| Source | Status | Rows |",
    "|---|---|---|",
    ...Object.entries(log.sources || {}).map(([k, v]) => `| ${k} | ${v.ok ? "ok" : `failed: ${esc(v.error)}`} | ${v.rows} |`),
    `| Official ATS boards | ${live.length} firms live | ${log.boards?.postings ?? 0} |`,
    "",
    `PTS seed sharing: ${log.ptsSeeds}`,
    "",
    "## Funnel",
    "",
    ...Object.entries(log.funnel || {}).map(([k, v]) => `- ${k}: ${v}`),
    "",
    "## Detail fetch results",
    "",
    ...Object.entries(log.detailStats || {}).map(([k, v]) => `- ${k}: ${v}`),
    "",
    "## Rejections by reason",
    "",
    ...Object.entries(log.rejected || {}).map(([k, v]) => `- ${k}: ${v}`),
    "",
    "## Firms not on the known-firm list that had otherwise-matching roles",
    "",
    "Add any you recognise to `inputs/known_firms.json`.",
    "",
    "| Company | Roles | Example |",
    "|---|---|---|",
    ...unlisted.map((u) => `| ${esc(u.company)} | ${u.count} | [${esc(u.example)}](${u.url}) |`),
    "",
    "## Live ATS boards",
    "",
    ...live.map((b) => `- **${b.firm}** (${b.category}): ${b.live.map((l) => `${l.board} [${l.origin}] ${l.jobs}`).join(", ")}`),
    "",
    "## Seeded boards that failed",
    "",
    ...(log.boards?.failedSeeds?.length ? log.boards.failedSeeds.map((f) => `- ${f}`) : ["_None._"]),
    "",
  ].join("\n"), "utf8");

  // ---- README dashboard -----------------------------------------------------------------------
  const readme = [
    "# LSS — Late-Summer Internship Scanner",
    "",
    `Scans for **US internships at well-known firms** in **software engineering, product management, data/analytics and finance/investment** that can run **after an early-summer internship: starting mid/late July 2027 and ending by ${w.latestEnd}**. Sister project of [QJS](https://github.com/Jiang6082/QJS), [PTS](https://github.com/Jiang6082/PTS) and [ECS](https://github.com/Jiang6082/ECS).`,
    "",
    `**Filters:** US only (incl. US-remote) · known firms only ([${"list"}](inputs/known_firms.json)) · pay ≥ $${minPay}/hr when the posting states pay · undergrad roles (PhD / MBA / master's-only excluded) · titles naming C++, Java, iOS/Android, embedded or hardware skipped (Python-friendly) · window ${w.earliestStart} → ${w.latestEnd} ([config](inputs/config.json))`,
    "",
    `> **Last scan:** ${date} &nbsp;•&nbsp; **${fit.length} dates fit** &nbsp;•&nbsp; **${flex.length} flexible / near miss** &nbsp;•&nbsp; **${ask.length} summer, dates not stated** &nbsp;•&nbsp; **${firstRun ? "first scan" : `${fresh.length} new`}** &nbsp;•&nbsp; ${log.funnel?.closed ?? 0} closed postings dropped`,
    "",
    `**Jump to:** [✅ Dates fit](#-dates-fit) · [🟡 Flexible](#-flexible-start--near-miss) · [⚪ Dates not stated](#-summer-2027--dates-not-stated) · [🆕 New](#-new-since-last-scan) · [How it works](#how-it-works) · [How to run](#how-to-run) · [CSV of everything](reports/roles.csv)`,
    "",
    "| Bucket | What it means | What to do |",
    "|---|---|---|",
    `| ✅ **Dates fit** | The posting's own dates (or start + length) land inside ${w.earliestStart} → ${w.latestEnd} | Apply |`,
    "| 🟡 **Flexible / near miss** | Flexible, rolling or multiple start dates; off-cycle; Summer/Fall; a start inside the window with no end date; or a few days outside it | Apply, then confirm dates with the recruiter |",
    "| ⚪ **Dates not stated** | Summer 2027 role whose posting gives no dates | Ask whether a late-July start is possible before investing in the application |",
    "",
    "Py column: ✓ = posting mentions Python · ✗ = mentions only other languages · blank = no language listed.",
    "",
    "---",
    "",
    `## ✅ Dates fit`,
    "",
    table(fit, { showTrack: true, note: false }),
    "---",
    "",
    "## 🟡 Flexible start / near miss",
    "",
    flex.length ? byTrack(flex, (t, list) => `### ${TRACK_LABEL[t]} (${list.length})\n\n<details open>\n<summary>${list.length} role${list.length === 1 ? "" : "s"}</summary>\n\n${table(list)}\n</details>\n`) : "_None right now._\n",
    "---",
    "",
    "## ⚪ Summer 2027 — dates not stated",
    "",
    `${ask.length} roles. The first ${README_ASK_PER_TRACK} per track are below; the full list is in [reports/summer_dates_not_stated.md](reports/summer_dates_not_stated.md).`,
    "",
    byTrack(ask, (t, list) => `<details>\n<summary><strong>${TRACK_LABEL[t]}</strong> (${list.length})</summary>\n\n${table(list.slice(0, README_ASK_PER_TRACK))}${list.length > README_ASK_PER_TRACK ? `\n_+${list.length - README_ASK_PER_TRACK} more in the full list._\n` : ""}\n</details>\n`),
    "---",
    "",
    "## 🆕 New since last scan",
    "",
    firstRun ? "_First scan: everything is new. Later scans list only roles that appeared since the previous run._\n" : table(fresh, { showTrack: true }),
    gone.length ? `\n<details>\n<summary>${gone.length} roles no longer found this scan</summary>\n\n${gone.slice(0, 200).map((g) => `- ${esc(g.company)} — ${esc(g.title)} (${g.bucket}; first seen ${g.firstSeen})`).join("\n")}\n\n</details>\n` : "",
    "---",
    "",
    "## How it works",
    "",
    "1. **Community lists** — pulls every active posting from [SimplifyJobs/Summer2027-Internships](https://github.com/SimplifyJobs/Summer2027-Internships) (summer + off-season `listings.json`), [vanshb03/Summer2027-Internships](https://github.com/vanshb03/Summer2027-Internships), and speedyapply's [2027 SWE](https://github.com/speedyapply/2027-SWE-College-Jobs) and [2027 AI](https://github.com/speedyapply/2027-AI-College-Jobs) lists (which include salary).",
    "2. **Official ATS boards** — Greenhouse, Lever, Ashby, Workday, SmartRecruiters, Workable, iCIMS, Oracle, Eightfold and amazon.jobs boards for known firms, from [inputs/ats_seeds.json](inputs/ats_seeds.json) plus PTS's verified seeds (fetched at run time) plus guessed Greenhouse/Lever/Ashby slugs. This catches finance roles the tech lists miss.",
    "3. **Screen** — internship titles only; known firm ([inputs/known_firms.json](inputs/known_firms.json), or speedyapply's FAANG+/Quant sections); track (Software / Product / Data / Finance); US location; no PhD/MBA/senior; no C++/Java/mobile/hardware titles; term year 2027.",
    "4. **Detail fetch** — opens each posting through its ATS API (or the page's schema.org JobPosting) to read the full description and confirm it is still open. Closed postings are dropped.",
    "5. **Date classifier** ([tools/dates.mjs](tools/dates.mjs)) — reads date ranges (\"July 20 – September 25\"), start dates, program length (\"10-week\"), flexible-start wording and Summer/Fall terms, ignoring graduation and deadline dates, then buckets the role. Postings whose own dates conflict go to [reports/excluded_by_dates.md](reports/excluded_by_dates.md) with the sentence that was used.",
    "6. **Pay** — parsed from the posting or speedyapply; roles below the minimum are dropped (unstated pay is kept).",
    "",
    "## How to run",
    "",
    "Requires **Node.js 18+** (no dependencies).",
    "",
    "```bash",
    "npm run scan            # full scan, writes README + reports",
    "npm run scan:fast       # community lists only (no ATS boards), ~2-4 min",
    "npm test                # offline self-test",
    "```",
    "",
    "**On GitHub:** [.github/workflows/scan.yml](.github/workflows/scan.yml) runs daily, on manual dispatch, and on any push that edits [.github/scan-request](.github/scan-request).",
    "",
    "**Tuning:** window dates, minimum pay and source URLs are in [inputs/config.json](inputs/config.json); add firms to [inputs/known_firms.json](inputs/known_firms.json); add ATS boards to [inputs/ats_seeds.json](inputs/ats_seeds.json); list roles you've applied to in [inputs/applied.csv](inputs/applied.csv) to tag them ✅.",
    "",
    "## Files",
    "",
    "| File | What it is |",
    "|---|---|",
    "| [reports/roles.csv](reports/roles.csv) | Every kept role with bucket, dates, pay, sources |",
    "| [reports/summer_dates_not_stated.md](reports/summer_dates_not_stated.md) | Full ⚪ list |",
    "| [reports/excluded_by_dates.md](reports/excluded_by_dates.md) | Roles dropped for conflicting dates, with evidence |",
    "| [reports/scan_audit.md](reports/scan_audit.md) | Source health, funnel, rejection reasons, unlisted firms, ATS boards |",
    "| [data/roles.json](data/roles.json) · [data/history.json](data/history.json) | Machine-readable results and first-seen history |",
    "",
  ].join("\n");
  await fs.writeFile(dir("README.md"), readme, "utf8");
}
