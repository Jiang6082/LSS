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
import { advancedDegreeOnly, parsePay, screenRole, usStatus } from "./filter.mjs";
import { loadKnownFirms } from "./firms.mjs";
import { degreeRequirement, researchTitle, titleDegree } from "./degree.mjs";

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
  // Regressions from the first live scan (2026-11-03)
  ["May/June-Aug/Sep (HP)", { Title: "Software Engineer Intern", Terms: S, Content: "2027 Internship Program Dates: May/June–August/September 2027." }, "exclude"],
  ["May/June to Aug/Sep (Databricks)", { Title: "Software Engineer Intern", Terms: S, Content: "Please confirm that you are only interested in a Summer internship from May/June to August/September of 2027." }, "exclude"],
  ["starting May/June ending Aug/Sep (Amazon)", { Title: "SDE Intern", Terms: S, Content: "All intern roles require in-person work and are 12 weeks in duration, starting in May/June and ending in August/September. Fall (Starts August/September 2027)" }, "exclude"],
  ["May or June, 12 weeks (MongoDB)", { Title: "SWE Intern", Terms: S, Content: "MongoDB internships are full-time (40 hours/week) for 12 consecutive weeks beginning in May or June and ending in August or September." }, "exclude"],
  ["begin June, last until Aug (Gelber)", { Title: "Trading Intern", Terms: S, Content: "This internship will begin in June 2027 and last until the first week of August 2027." }, "exclude"],
  ["start June 7, end Aug 13 (Lazard)", { Title: "Quant Intern", Terms: S, Content: "Ability to start an internship June 7, 2027, and end August 13, 2027" }, "exclude"],
  ["begin May 17, through Jul 23 (Lincoln)", { Title: "Summer Analyst", Terms: S, Content: "We are expecting this role to begin on May 17, 2027, and continue through July 23, 2027." }, "exclude"],
  ["late May/early June to mid-Aug (Travelers)", { Title: "Intern", Terms: S, Content: "Positions last approximately 10-12 weeks beginning in late May/early June and ending in mid-August." }, "exclude"],
  ["early June, wrap mid-Aug (Battery)", { Title: "Investment Intern", Terms: S, Content: "The program will start in early June and will wrap up in mid-August." }, "exclude"],
  ["May-Aug or Jun-Sep (Patreon)", { Title: "SWE Intern", Terms: S, Content: "Our summer internship is a 12-week program running May–August or June–September 2027" }, "exclude"],
  ["summer shutdown is not the program", { Title: "AI Intern", Terms: S, Content: "July 6 - July 9, 2027: Intern Optional Summer Shutdown" }, "ask"],
  ["cohort timeline is not the program", { Title: "SWE Intern", Terms: S, Content: "We're reviewing applications on a rolling basis, and we expect to finalize our cohort by late November/early December." }, "ask"],
  ["Summer/Fall option does not beat posted dates (AMD)", { Title: "SWE Intern/Co-op", Terms: S, Content: "Spring/Summer Co-op : January 25, 2027 - August 13, 2027. Summer/Fall Co-op : May 17, 2027 - December 10, 2027." }, "exclude"],
  ["May/June start dates (Scale)", { Title: "SWE Intern", Terms: S, Content: "Available for a Summer 2027 internship (May/June start dates) in San Francisco" }, "exclude"],
  ["August start", { Title: "SWE Intern", Terms: S, Content: "We are hiring for an August start; this is an 8-week internship." }, "fit"],
  ["'candidate may vary' is not 'dates may vary' (Point72)", { Title: "SWE Intern", Terms: S, Content: "Actual compensation offered to the successful candidate may vary from posted hiring range." }, "ask"],
  ["graduation 'Summer/Fall' is not flexibility (Samsara)", { Title: "SWE Intern", Terms: S, Content: "Currently a junior-year student on track to complete a Bachelor's degree between Spring/Summer/Fall 2028 or Winter 2029" }, "ask"],
  ["flexible start date (Epic)", { Title: "Data Science Intern", Terms: S, Content: "This internship has a flexible start date in 2027." }, "flex"],
  ["various start dates (Meta)", { Title: "Research Intern", Terms: S, Content: "Our internships are twelve (12) to twenty-four (24) weeks long and we have various start dates throughout the year." }, "flex"],
  ["May-Sep window, 10 weeks", { Title: "PM Intern", Terms: S, Content: "Summer (May - September 2027). This is a 10-week internship." }, "flex"],
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
  ["Product Design Intern", null], ["IT Support Intern", null], ["MBA Summer Associate", null], ["Engine Programmer Intern", null], ["Tech Art Intern", null], ["AI Prompt Engineer High School Intern - Summer 2027", null], ["Trading Bootcamp Micro-Internship - Summer 2027", null],
];
for (const [title, want] of roleCases) check(`role: ${title}`, () => { const r = screenRole({ Title: title }); assert.equal(r.ok ? r.track : null, want, JSON.stringify(r)); });

// ---- Location / pay -------------------------------------------------------------------------
const locCases = [["New York, NY", "us"], ["Remote - US", "us"], ["Toronto, ON, Canada", "non-us"], ["Bangalore, IN", "non-us"], ["San Francisco, CA; London, UK", "us"], ["London, UK", "non-us"], ["Remote", "unknown"], ["Seattle", "us"], ["Vancouver, BC", "non-us"], ["Mountain View, CA, USA", "us"]];
for (const [loc, want] of locCases) check(`location: ${loc}`, () => assert.equal(usStatus(loc), want));
check("pay hourly range", () => assert.equal(parsePay("The pay range is $45 - $55 per hour.").min, 45));
check("pay monthly", () => assert.equal(parsePay("Salary: $8,000/month").min, 46));
check("pay annual k", () => assert.equal(parsePay("Base pay $110k-$130k annualized").min, 53));
check("pay ignores funding", () => assert.equal(parsePay("We raised $50 million"), null));
check("pay ignores housing stipend", () => assert.equal(parsePay("Interns receive a $2,500 housing stipend. Pay range: $45 - $50 per hour.").min, 45));
check("pay ignores signing bonus alone", () => assert.equal(parsePay("Compensation includes a $5,000 signing bonus."), null));
check("pay: unit-less 4,000 is not hourly", () => assert.equal(parsePay("Base pay range $4,000 - $6,000"), null));
check("PhD-only description", () => assert.ok(advancedDegreeOnly("Currently has, or is in the process of obtaining, a PhD degree in Computer Science or a related field.")));
check("BS/MS/PhD is not PhD-only", () => assert.equal(advancedDegreeOnly("Currently pursuing a Bachelor's, Master's or PhD in Computer Science."), ""));
check("PhD preferred is not PhD-only", () => assert.equal(advancedDegreeOnly("Currently pursuing a PhD is preferred."), ""));
check("title city: Lisbon", () => assert.equal(usStatus("Product Manager Intern (2027) - Lisbon, PT"), "non-us"));

// ---- Degree requirement ---------------------------------------------------------------------
const degreeCases = [
  ["Master's or PhD only", "Currently pursuing a Master's or PhD degree in Computer Science or a related field.", false],
  ["Bachelor's, Master's or PhD", "Currently pursuing a Bachelor's, Master's, or PhD in Computer Science.", true],
  ["JD program", "Currently enrolled in a JD program; 2L students preferred.", false],
  ["MBA candidates", "MBA candidates graduating in 2028 are eligible.", false],
  ["BS/MS", "Pursuing a BS/MS in Computer Science, Mathematics or related field.", true],
  ["rising junior", "Must be a rising junior or senior at an accredited university.", true],
  ["completed bachelor's, enrolled master's", "Bachelor's degree in Computer Science. Currently enrolled in a Master's program in Computer Science.", false],
  ["undergrad and grad", "Open to undergraduate and graduate students.", true],
  ["PhD preferred", "Pursuing a degree in CS or related field. PhD preferred.", true],
  ["PhD colleagues", "Work alongside our PhD researchers on cutting-edge problems.", true],
  ["Meta PhD wording", "Currently has, or is in the process of obtaining, a PhD degree in Computer Science, Machine Learning, or a related field.", false],
  ["MS Excel is not a degree", "Proficiency with MS Excel and SQL. Pursuing a degree in finance.", true],
  ["graduate program required", "Candidates must be enrolled in a graduate program (Master's or PhD).", false],
  ["undergrad or grad degree", "Pursuing an undergraduate or graduate degree in a quantitative field.", true],
  ["MFE", "Students currently pursuing a Master of Science in Financial Engineering (MFE).", false],
  ["completed undergrad + pursuing master's", "Completed undergraduate degree and currently pursuing a Master's degree in Data Science.", false],
  ["grad students also welcome", "Pursuing a degree in CS; graduate students are also welcome to apply.", true],
  ["bachelor's or above", "Are enrolled in a Bachelor's degree or above in Computer Science.", true],
  ["PhD or Master's program", "Currently enrolled in a PhD or Master's program in machine learning.", false],
  ["law students", "Open to rising 2L and 3L law students.", false],
  ["Master's students only", "This role is for Master's students only.", false],
  ["completed junior year", "Candidates should have completed their junior year by the internship start.", true],
  ["Master's required", "Minimum qualifications: Master's degree in Statistics or related field required.", false],
  // From the 2026-11-04 audit of reports/degree_screen.md
  ["employer 'graduate programme' (Barclays)", "If you are successful in receiving a return offer to our graduate programme, your location will be the same as it was during your internship.", true],
  ["employer 'Graduate Program' (Brevan Howard)", "The goal of our summer internship program is to convert top performing interns to our 2028 Graduate Program!", true],
  ["'master problem-solvers' (Belvedere)", "We're looking for quantitative thinkers and master problem-solvers with strong data analysis skills.", true],
  ["graduating with undergrad or master's (Expedia)", "Must be graduating with an undergraduate or master's degree in a technical subject.", true],
  ["pursuing or completed bachelor's or graduate (HP)", "Currently pursuing or recently completed a bachelor's or graduate degree in Computer Science, Engineering, or a related field.", true],
  ["under graduate (Raymond James)", "Currently enrolled in an accredited under graduate degree program.", true],
  ["junior, senior or grad student (J&J)", "Junior, Senior, or Grad student pursuing a degree in Computer Science, Software Engineering, or related field.", true],
  ["four-year or graduate-level (KeyBank)", "Pursuing a four-year or graduate-level degree by May 2029 with focused coursework in finance.", true],
  ["enrolled in college or graduate courses (Navy Federal)", "You must be currently enrolled in college or graduate level courses or a degree-seeking program throughout the internship.", true],
  ["senior or postgraduate students (RTX)", "This is a part-time, remote role targeting senior or postgraduate students with an expected graduation date of December 2027.", true],
  ["graduation from bachelor's or master's (JPMorgan)", "Expected graduation date of December 2027 through June 2028 from bachelor's or master's program. If you are pursuing a master's degree, it must be completed within 2 years of your bachelor's.", true],
  ["penultimate-year student (Roku)", "You are a penultimate-year student, or a final-year student planning to go on to a one-year master's course.", true],
  ["site navigation 'Program PhD Opportunities' (TikTok)", "Early Careers at TikTok Americas Asia Pacific Europe Global Frontier Tech Recruitment Program PhD Opportunities FAQs Blog", true],
  ["'our internship and graduate programs' (Freddie Mac)", "Our internship and graduate programs provide opportunities to tackle complex challenges.", true],
  ["'Current PhD' program label (Capital One)", "Current PhD, Applied Research Internship Program - Summer 2027", false],
  ["enrolled in a master's (Amex)", "Currently enrolled in a full-time graduate master's degree program", false],
  ["enrolled in a graduate program (Arrowstreet)", "Enrolled in a graduate program from an educational institution in finance, mathematics, economics, or closely related discipline.", false],
  ["MBA only (Viking)", "At this time, we are only accepting applications from first-year full-time MBA candidates.", false],
  ["JD (Palantir)", "What We Require Currently pursuing a J.D. or other relevant legal education, with an expected graduation date after Summer 2027", false],
  ["TikTok PhD student researcher", "Student Researcher - (Seed Model - LLM) - 2027 Start (PhD)", false],
  ["graduate students sought (William Blair)", "William Blair is seeking graduate students to join our technology team for a 12-week internship program.", false],
  ["MS or PhD candidate (Salesforce)", "You are a PhD or MS candidate in Computer Science, Artificial Intelligence, Machine Learning, or a related technical field.", false],
];
for (const [name, text, ok] of degreeCases) check(`degree: ${name}`, () => assert.equal(degreeRequirement(text).ok, ok, JSON.stringify(degreeRequirement(text))));
const titleDegreeCases = [
  ["Software Engineering - Intern, Graduate", false], ["2027 Summer Intern, MS, Software Engineering", false], ["Quantitative Master’s Internship - Technology", false],
  ["Postdoctoral Researcher Intern", false], ["Machine Learning Intern - PhD", false], ["Graduate Product Management Intern", false],
  ["Internship in Investment Engineering (Undergraduate & Master's)", true], ["Campus Quantitative Researcher - UG/MS - Intern", true],
  ["Software Engineer Intern - Bachelor's & Master's", true], ["Software Engineer Intern", true], ["Undergraduate Program Software Engineer Intern", true],
];
for (const [title, ok] of titleDegreeCases) check(`degree title: ${title}`, () => assert.equal(titleDegree(title).ok, ok));
const researchCases = [
  ["Research Scientist Intern - Multiple Teams", true], ["Applied Scientist Intern", true], ["Research Intern - Machine Learning and Optimization", true],
  ["Student Researcher", true], ["AI Research Scientist Intern - 2027 Summer", true], ["Safety Research Scholar Intern", true], ["Generative Media Research Intern", true],
  ["Data Scientist Intern", false], ["Quantitative Research Intern", false], ["Quantitative Researcher Intern", false], ["Equity Research Intern", false],
  ["Research Engineer Intern - Benchmarking", false], ["Campus AI Research Engineer - Intern", false], ["Software Engineer Intern", false], ["Market Research Associate Intern", false],
];
for (const [title, want] of researchCases) check(`research title: ${title}`, () => assert.equal(researchTitle(title), want));

// ---- Firm matching ----------------------------------------------------------------------------
const known = await loadKnownFirms("inputs/known_firms.json");
const firmCases = [["Amazon Web Services", "Amazon"], ["JPMorgan Chase & Co.", "JPMorgan Chase"], ["J.P. Morgan", "JPMorgan Chase"], ["The D. E. Shaw Group", "D. E. Shaw"], ["Goldman Sachs & Co. LLC", "Goldman Sachs"], ["Block", "Block"], ["Blockchain Capital", null], ["Delta Dental", null], ["Citadel Securities", "Citadel Securities"], ["Two Sigma Investments", "Two Sigma"], ["Susquehanna International Group, LLP", "Susquehanna International Group"], ["Bloomberg LP", "Bloomberg"], ["Capital One Financial", "Capital One"], ["Tiny Startup", null], ["HP IQ", "HP"], ["Intuitive", "Intuitive Surgical"], ["Intuitive Machines", null], ["GM financial", "General Motors"]];
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
