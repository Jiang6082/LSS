// Preloaded by the self-test (node --import) so the full scan runs offline against fixtures.
const now = Math.floor(Date.now() / 1000);
const listing = (o) => ({ source: "Simplify", id: o.url, active: true, is_visible: true, date_posted: now - 5 * 86400, date_updated: now, company_url: "", sponsorship: "Other", category: "Software", terms: ["Summer 2027"], ...o });

const SIMPLIFY = [
  listing({ company_name: "Stripe", title: "Software Engineer Intern", locations: ["San Francisco, CA"], url: "https://boards.greenhouse.io/stripe/jobs/111?utm_source=Simplify&ref=Simplify" }),
  listing({ company_name: "Notion", title: "Product Manager Intern", locations: ["New York, NY"], url: "https://jobs.ashbyhq.com/notion/aaaaaaaa-1111-2222-3333-444444444444", category: "Product" }),
  listing({ company_name: "NVIDIA", title: "Data Science Intern", locations: ["Santa Clara, CA"], url: "https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/Data-Science-Intern_JR1", category: "AI/ML/Data" }),
  listing({ company_name: "Palantir", title: "Software Engineer Intern", locations: ["New York, NY"], url: "https://jobs.lever.co/palantir/bbbbbbbb-1111-2222-3333-444444444444" }),
  listing({ company_name: "Google", title: "Software Engineering Intern", locations: ["London, UK"], url: "https://careers.google.com/jobs/1" }),
  listing({ company_name: "Tiny Startup", title: "Software Engineer Intern", locations: ["Austin, TX"], url: "https://tiny.example/jobs/1" }),
  listing({ company_name: "Goldman Sachs", title: "2027 Summer Analyst - Investment Banking", locations: ["New York, NY"], url: "https://higher.gs.com/roles/1", category: "Quant" }),
  listing({ company_name: "Citadel", title: "Software Engineer Intern", locations: ["Chicago, IL"], url: "https://citadel.example/fall", terms: ["Fall 2026"] }),
  listing({ company_name: "Two Sigma", title: "Quantitative Research Intern", locations: ["New York, NY"], url: "https://careers.twosigma.com/x", category: "Quant" }),
  listing({ company_name: "Capital One", title: "Data Analyst Intern", locations: ["McLean, VA"], url: "https://www.capitalonecareers.com/job/1", category: "AI/ML/Data" }),
  listing({ company_name: "Datadog", title: "Software Engineer Intern", locations: ["New York, NY"], url: "https://datadog.example/closed", active: false }),
];

const VANSH = [
  { company_name: "Robinhood", title: "Software Engineer Intern", locations: ["Menlo Park, CA"], url: "https://go.vansh.nyc/abc", season: "Summer", active: true, is_visible: true, date_posted: now - 86400, date_updated: now, company_url: "", sponsorship: "Other", source: "x", id: "1" },
];

const SPEEDY = `# 2027 SWE
## 2027 USA SWE Internships :books::eagle:
### FAANG+
<!-- TABLE_FAANG_START -->
| Company | Position | Location | Salary | Posting | Age |
|---|---|---|---|---|---|
| <a href="https://www.meta.com"><strong>Meta</strong></a> | Data Engineer Intern | Menlo Park, CA | $55/hr | <a href="https://www.metacareers.com/jobs/123/"><img src="x" alt="Apply" width="70"/></a> | 3d |
| <a href="https://unknownfaang.example"><strong>Unknown Faang Co</strong></a> | Software Engineer Intern | Seattle, WA | $50/hr | <a href="https://unknownfaang.example/jobs/1"><img src="x" alt="Apply" width="70"/></a> | 2d |
<!-- TABLE_FAANG_END -->
### Other
<!-- TABLE_START -->
| Company | Position | Location | Posting | Age |
|---|---|---|---|---|
| <a href="https://stripe.com"><strong>Stripe</strong></a> | Software Engineer Intern | San Francisco, CA | <a href="https://boards.greenhouse.io/stripe/jobs/111"><img src="x" alt="Apply" width="70"/></a> | 5d |
<!-- TABLE_END -->
`;

const ld = (description, extra = {}) => `<html><head><script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "JobPosting", title: "x", description, ...extra })}</script></head><body>x</body></html>`;

const routes = [
  [/fixtures\.local\/simplify\.json/, () => [200, JSON.stringify(SIMPLIFY), "application/json"]],
  [/fixtures\.local\/vansh\.json/, () => [200, JSON.stringify(VANSH), "application/json"]],
  [/fixtures\.local\/speedy\.md/, () => [200, SPEEDY]],
  [/boards-api\.greenhouse\.io\/v1\/boards\/stripe\/jobs\/111/, () => [200, JSON.stringify({ title: "Software Engineer Intern", location: { name: "San Francisco, CA" }, content: "&lt;p&gt;This internship runs from July 20 to September 25, 2027.&lt;/p&gt;&lt;p&gt;You will write Python and Go.&lt;/p&gt;&lt;p&gt;The pay range is $50 - $60 per hour.&lt;/p&gt;" }), "application/json"]],
  [/boards-api\.greenhouse\.io\/v1\/boards\/robinhood\/jobs\/222/, () => [200, JSON.stringify({ title: "Software Engineer Intern", location: { name: "Menlo Park, CA" }, content: "&lt;p&gt;Summer/Fall 2027 internship with off-cycle start dates available.&lt;/p&gt;" }), "application/json"]],
  [/go\.vansh\.nyc\/abc/, () => [200, "<html>redirected</html>", "text/html", "https://boards.greenhouse.io/robinhood/jobs/222"]],
  [/api\.ashbyhq\.com\/posting-api\/job-board\/notion/, () => [200, JSON.stringify({ jobs: [{ id: "aaaaaaaa-1111-2222-3333-444444444444", title: "Product Manager Intern", locationName: "New York, NY", descriptionHtml: "<p>Start dates are flexible between June and August.</p>", compensation: { compensationTierSummary: "$48/hr" } }] }), "application/json"]],
  [/nvidia\.wd5\.myworkdayjobs\.com\/wday\/cxs\/nvidia\/NVIDIAExternalCareerSite\/job\//, () => [200, JSON.stringify({ jobPostingInfo: { jobDescription: "<p>This 12-week internship runs May 18 - August 7, 2027.</p>", location: "Santa Clara, CA", timeType: "Full time" } }), "application/json"]],
  [/api\.lever\.co\/v0\/postings\/palantir\//, () => [404, "{}", "application/json"]],
  [/careers\.twosigma\.com\/x/, () => [200, "<html><body><h1>Quantitative Research Intern</h1><p>Summer 2027 internship. Work with Python and statistics.</p></body></html>"]],
  [/higher\.gs\.com\/roles\/1/, () => [200, ld("Our 10-week Summer Analyst program runs June 8 - August 14, 2027.")]],
  [/capitalonecareers\.com\/job\/1/, () => [200, ld("Analyze data with SQL and Python.", { baseSalary: { "@type": "MonetaryAmount", currency: "USD", value: { "@type": "QuantitativeValue", minValue: 25, maxValue: 28, unitText: "HOUR" } } })]],
  [/metacareers\.com\/jobs\/123/, () => [200, "<html><body><h1>Data Engineer Intern</h1><p>Summer 2027. Python, SQL.</p></body></html>"]],
  [/unknownfaang\.example\/jobs\/1/, () => [200, ld("The internship runs from August 3 to September 25, 2027. Python preferred.")]],
];

globalThis.fetch = async (input) => {
  const url = String(input?.url || input);
  for (const [re, handler] of routes) {
    if (!re.test(url)) continue;
    const [status, body, type = "text/html", finalUrl = url] = handler(url);
    const res = new Response(body, { status, headers: { "content-type": type } });
    Object.defineProperty(res, "url", { value: finalUrl });
    return res;
  }
  const res = new Response("not found", { status: 404 });
  Object.defineProperty(res, "url", { value: url });
  return res;
};
