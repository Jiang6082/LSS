// Offline self-test: unit checks for the date classifier, role/location/pay screens, firm matching
// and list parsers, then a full scan against fixtures (tests/mock-fetch.mjs) with network stubbed.
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { rowsFromListingsJson, rowsFromSpeedyReadme } from "./aggregators.mjs";
import { canonicalUrl } from "./common.mjs";
import { classifyDates } from "./dates.mjs";
import { parsePay, screenRole, usStatus } from "./filter.mjs";
import { loadKnownFirms } from "./firms.mjs";

let passed = 0;
const failures = [];
const check = (name, fn) => {
  try { fn(); passed += 1; } catch (error) { failures.push(`${name}: ${error.message}`); }
};

// ---- Date classifier ------------------------------------------------------------------------
const S = ["Summer 2027"];
const dateCases = [
  ["range inside window", { Title: "SWE Intern", Terms: S, Content: "This internship runs from July 20 to September 25, 2027." }, "fit"],
  ["mid-July to late September", { Title: "PM Intern", Terms: [], Content: "Dates: mid-July to late September 2027." }, "fit"],
  ["numeric dates", { Title: "Intern", Terms: S, Content: "Internship dates: 7/27/2027 - 9/25/2027" }, "fit"],
  ["start + 8 weeks", { Title: "Data Intern", Terms: S, Content: "This is an 8-week internship. Start date: August 3, 2027." }, "fit"],
  ["June-August conflicts", { Title: "SWE Intern", Terms: S, Content: "Our 10-week program runs June 8 - August 14, 2027." }, "exclude"],
  ["June-Aug but flexible", { Title: "SWE Intern", Terms: S, Content: "The program typically runs June through August. Start dates are flexible." }, "flex"],
  ["start July 20, 12 weeks", { Title: "Intern", Terms: S, Content: "This is a 12-week internship program. The internship will start on July 20, 2027." }, "flex"],
  ["July-Sept, day unknown", { Title: "Intern", Terms: S, Content: "The internship takes place July - September." }, "flex"],
  ["starts Jul 6", { Title: "Intern", Terms: S, Content: "The internship runs July 6 - September 11, 2027." }, "flex"],
  ["offered start window", { Title: "Intern", Terms: S, Content: "Start dates are available from May through August." }, "flex"],
  ["off-cycle title", { Title: "Off-Cycle Investment Banking Analyst", Terms: [], Content: "" }, "flex"],
  ["summer/fall", { Title: "Software Engineer Intern (Summer/Fall 2027)", Terms: ["Summer 2027", "Fall 2027"], Content: "" }, "flex"],
  ["graduation dates ignored", { Title: "SWE Intern", Terms: S, Content: "Candidates must be graduating between December 2027 and June 2028." }, "ask"],
  ["deadline ignored", { Title: "SWE Intern", Terms: S, Content: "Applications close October 15, 2026. Build things with Python." }, "ask"],
  ["no dates", { Title: "SWE Intern", Terms: S, Content: "Build cool stuff with Python." }, "ask"],
  ["'you may' is not May", { Title: "SWE Intern", Terms: S, Content: "You may join one of several teams." }, "ask"],
  ["June start", { Title: "SWE Intern", Terms: S, Content: "Interns start in June 2027." }, "exclude"],
  ["fall only", { Title: "SWE Intern", Terms: ["Fall 2027"], Content: "" }, "exclude"],
  ["fall Aug-Dec", { Title: "SWE Intern", Terms: ["Fall 2027"], Content: "The internship runs from August 24 to December 11, 2027." }, "exclude"],
  ["Fall 2026", { Title: "SWE Intern - Fall 2026", Terms: ["Fall 2026"], Content: "" }, "exclude"],
  ["spring", { Title: "SWE Intern", Terms: ["Spring 2027"], Content: "" }, "exclude"],
  ["6-month co-op", { Title: "Software Engineering Co-op", Terms: [], Content: "This is a 6-month co-op." }, "exclude"],
  ["window wider than program", { Title: "SWE Intern", Terms: S, Content: "Internships typically run 10-12 weeks between May and September." }, "flex"],
  ["flexible schedule is not flexible start", { Title: "SWE Intern", Terms: S, Content: "We offer a flexible schedule and hybrid work. Our 10-week program runs June 8 - August 14." }, "exclude"],
  ["'we offer' sentence still read", { Title: "SWE Intern", Terms: S, Content: "We offer a 10-week program from June 15 through August 21, 2027." }, "exclude"],
  ["'expected to start' read", { Title: "SWE Intern", Terms: S, Content: "Interns are expected to start on June 1, 2027." }, "exclude"],
  ["late May or early June", { Title: "SWE Intern", Terms: S, Content: "Interns typically begin in late May or early June." }, "exclude"],
];
for (const [name, job, want] of dateCases) check(`dates: ${name}`, () => assert.equal(classifyDates(job).bucket, want, JSON.stringify(classifyDates(job))));

// ---- Role screen ----------------------------------------------------------------------------
const roleCases = [
  ["Software Engineer Intern", "Software"], ["Associate Product Manager Intern", "Product"], ["Product Manager, Intern", "Product"],
  ["Data Science Intern - Summer 2027", "Data"], ["2027 Investment Banking Summer Analyst", "Finance"], ["Technology Summer Analyst 2027", "Software"],
  ["Quantitative Research Intern", "Finance"], ["Sales & Trading Summer Analyst", "Finance"], ["Machine Learning Engineer Intern", "Data"],
  ["Software Engineering Intern (BS/MS)", "Software"], ["Risk Analytics Intern", "Data"], ["Corporate Finance Intern", "Finance"],
  ["Software Engineer Intern (C++)", null], ["iOS Engineer Intern", null], ["Hardware Engineering Intern", null], ["Marketing Intern", null],
  ["PhD Research Intern", null], ["Software Engineer New Grad", null], ["Senior Software Engineer", null], ["Software Engineering Intern (Masters)", null],
  ["Product Design Intern", null], ["IT Support Intern", null], ["MBA Summer Associate", null],
];
for (const [title, want] of roleCases) check(`role: ${title}`, () => { const r = screenRole({ Title: title }); assert.equal(r.ok ? r.track : null, want, JSON.stringify(r)); });

// ---- Location / pay -------------------------------------------------------------------------
const locCases = [["New York, NY", "us"], ["Remote - US", "us"], ["Toronto, ON, Canada", "non-us"], ["Bangalore, IN", "non-us"], ["San Francisco, CA; London, UK", "us"], ["London, UK", "non-us"], ["Remote", "unknown"], ["Seattle", "us"], ["Vancouver, BC", "non-us"], ["Mountain View, CA, USA", "us"]];
for (const [loc, want] of locCases) check(`location: ${loc}`, () => assert.equal(usStatus(loc), want));
check("pay hourly range", () => assert.equal(parsePay("The pay range is $45 - $55 per hour.").min, 45));
check("pay monthly", () => assert.equal(parsePay("Salary: $8,000/month").min, 46));
check("pay annual k", () => assert.equal(parsePay("Base pay $110k-$130k annualized").min, 53));
check("pay ignores funding", () => assert.equal(parsePay("We raised $50 million"), null));

// ---- Firm matching ----------------------------------------------------------------------------
const known = await loadKnownFirms("inputs/known_firms.json");
const firmCases = [["Amazon Web Services", "Amazon"], ["JPMorgan Chase & Co.", "JPMorgan Chase"], ["J.P. Morgan", "JPMorgan Chase"], ["The D. E. Shaw Group", "D. E. Shaw"], ["Goldman Sachs & Co. LLC", "Goldman Sachs"], ["Block", "Block"], ["Blockchain Capital", null], ["Delta Dental", null], ["Citadel Securities", "Citadel Securities"], ["Two Sigma Investments", "Two Sigma"], ["Susquehanna International Group, LLP", "Susquehanna International Group"], ["Bloomberg LP", "Bloomberg"], ["Capital One Financial", "Capital One"], ["Tiny Startup", null]];
for (const [name, want] of firmCases) check(`firm: ${name}`, () => assert.equal(known.match(name)?.name ?? null, want));

// ---- Parsers --------------------------------------------------------------------------------
check("listings.json parser", () => {
  const rows = rowsFromListingsJson([{ company_name: "Stripe", title: "SWE Intern", locations: ["SF, CA"], url: "u", terms: ["Summer 2027"], active: true, is_visible: true, date_posted: Math.floor(Date.now() / 1000) }, { company_name: "X", title: "y", active: false }]);
  assert.equal(rows.length, 1); assert.deepEqual(rows[0].Terms, ["Summer 2027"]);
});
check("speedyapply parser", () => {
  const md = "### FAANG+\n| Company | Position | Location | Salary | Posting | Age |\n|---|---|---|---|---|---|\n| <a href=\"https://m.com\"><strong>Meta</strong></a> | SWE Intern | Menlo Park, CA | $55/hr | <a href=\"https://jobs.example/1\"><img/></a> | 3d |\n";
  const rows = rowsFromSpeedyReadme(md);
  assert.equal(rows.length, 1); assert.equal(rows[0].Company, "Meta"); assert.equal(rows[0].Pay, "$55/hr"); assert.equal(rows[0].URL, "https://jobs.example/1"); assert.equal(rows[0].KnownBySource, "FAANG+");
});
check("canonical url drops tracking", () => assert.equal(canonicalUrl("https://boards.greenhouse.io/stripe/jobs/111?utm_source=Simplify&ref=Simplify"), "https://boards.greenhouse.io/stripe/jobs/111"));

// ---- End-to-end scan against fixtures ---------------------------------------------------------
const tmp = await fs.mkdtemp(path.join(os.tmpdir(), "lss-selftest-"));
await fs.mkdir(path.join(tmp, "data"), { recursive: true });
const cfg = JSON.parse(await fs.readFile("inputs/config.json", "utf8"));
cfg.sources = { simplify: "https://fixtures.local/simplify.json", vanshb03: "https://fixtures.local/vansh.json", speedyapply_swe: "https://fixtures.local/speedy.md" };
cfg.atsBoards = false;
await fs.writeFile(path.join(tmp, "config.json"), JSON.stringify(cfg), "utf8");
const run = spawnSync(process.execPath, ["--import", pathToFileURL(path.resolve("tests/mock-fetch.mjs")).href, "scripts/run-scan.mjs", `--config=${path.join(tmp, "config.json")}`, `--out=${tmp}`, "--no-ats", "--no-remote-seeds"], { encoding: "utf8", timeout: 120000 });
check("e2e: scan exits 0", () => assert.equal(run.status, 0, `${run.stdout}\n${run.stderr}`));
let roles = [];
try { roles = JSON.parse(await fs.readFile(path.join(tmp, "data/roles.json"), "utf8")).roles; } catch (error) { failures.push(`e2e: roles.json missing (${error.message})\n${run.stdout}\n${run.stderr}`); }
const bucketOf = (company) => roles.find((r) => r.Company === company)?.Bucket ?? null;
const e2e = [["Stripe", "fit"], ["Unknown Faang Co", "fit"], ["Notion", "flex"], ["Robinhood", "flex"], ["Meta", "ask"], ["Two Sigma", "ask"], ["NVIDIA", null], ["Goldman Sachs", null], ["Palantir", null], ["Capital One", null], ["Google", null], ["Tiny Startup", null], ["Citadel", null], ["Datadog", null]];
for (const [company, want] of e2e) check(`e2e: ${company} -> ${want}`, () => assert.equal(bucketOf(company), want));
check("e2e: Stripe deduped across sources", () => { const r = roles.filter((x) => x.Company === "Stripe"); assert.equal(r.length, 1); assert.ok(r[0].Sources.length >= 2, JSON.stringify(r[0].Sources)); assert.equal(r[0].Pay, "$50-60/hr"); assert.equal(r[0].Python, "yes"); });
check("e2e: Robinhood URL resolved from short link", () => assert.match(roles.find((r) => r.Company === "Robinhood")?.URL || "", /greenhouse\.io\/robinhood/));
check("e2e: README written", async () => {});
const readme = await fs.readFile(path.join(tmp, "README.md"), "utf8").catch(() => "");
check("e2e: README has buckets", () => { assert.match(readme, /## ✅ Dates fit/); assert.match(readme, /Stripe/); });
const excluded = await fs.readFile(path.join(tmp, "reports/excluded_by_dates.md"), "utf8").catch(() => "");
check("e2e: excluded report lists NVIDIA", () => assert.match(excluded, /NVIDIA/));

await fs.rm(tmp, { recursive: true, force: true });
if (failures.length) {
  console.error(`selftest: ${passed} passed, ${failures.length} FAILED`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`selftest: all ${passed} checks passed`);
