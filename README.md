# LSS — Late-Summer Internship Scanner

Scans for **US internships at well-known firms** in **software engineering, product management, data/analytics and finance/investment** that can run **after an early-summer internship: starting mid/late July 2027 and ending by 2027-09-30**. Sister project of [QJS](https://github.com/Jiang6082/QJS), [PTS](https://github.com/Jiang6082/PTS) and [ECS](https://github.com/Jiang6082/ECS).

**Filters:** US only (incl. US-remote) · known firms only ([list](inputs/known_firms.json)) · pay ≥ $30/hr when the posting states pay · undergrad roles (PhD / MBA / master's-only excluded) · titles naming C++, Java, iOS/Android, embedded or hardware skipped (Python-friendly) · window 2027-07-13 → 2027-09-30 ([config](inputs/config.json))

> **Last scan:** 2026-11-03 &nbsp;•&nbsp; **50 dates fit** &nbsp;•&nbsp; **87 flexible / near miss** &nbsp;•&nbsp; **1083 summer, dates not stated** &nbsp;•&nbsp; **first scan** &nbsp;•&nbsp; 24 closed postings dropped

**Jump to:** [✅ Dates fit](#-dates-fit) · [🟡 Flexible](#-flexible-start--near-miss) · [⚪ Dates not stated](#-summer-2027--dates-not-stated) · [🆕 New](#-new-since-last-scan) · [How it works](#how-it-works) · [How to run](#how-to-run) · [CSV of everything](reports/roles.csv)

| Bucket | What it means | What to do |
|---|---|---|
| ✅ **Dates fit** | The posting's own dates (or start + length) land inside 2027-07-13 → 2027-09-30 | Apply |
| 🟡 **Flexible / near miss** | Flexible, rolling or multiple start dates; off-cycle; Summer/Fall; a start inside the window with no end date; or a few days outside it | Apply, then confirm dates with the recruiter |
| ⚪ **Dates not stated** | Summer 2027 role whose posting gives no dates | Ask whether a late-July start is possible before investing in the application |

Py column: ✓ = posting mentions Python · ✗ = mentions only other languages · blank = no language listed.

---

## ✅ Dates fit

| Company | Role | Track | Location | Dates | Pay | Py | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Data Center Infrastructure Engineer Intern, Summer 2027 - Midwest / Southeast | Software | Austin, Texas, USA | Aug - Sep |  |  | October 29 | [Apply](https://www.amazon.jobs/en/jobs/10593054/data-center-infrastructure-engineer-intern-summer-2027-midwest-southeast) |
| **Amazon** | Network Development Engineer Intern, 2027 Summer | Software | Seattle, Washington, USA | Aug - Sep |  | ✓ | October 27 | [Apply](https://www.amazon.jobs/en/jobs/10590368/network-development-engineer-intern-2027-summer) |
| **Amazon** | Software Development Engineer - Embedded Systems Intern - Amazon Leo - Summer 2027 - USA | Software | Redmond, WA | Aug - Sep | $53/hr | ✓ | 2026-10-07 | [Apply](https://www.amazon.jobs/jobs/10571374/apply) |
| **Amazon** | Software Development Engineer Intern | Software | Cupertino, CA; Seattle, WA +1 | Aug - Sep |  | ✓ | 2026-09-18 | [Apply](https://amazon.jobs/en/jobs/10552937/software-development-engineer-intern-summer-2027-usa) |
| **Amazon** | Software Development Engineer Intern - Amazon Leo - Summer 2027 - USA | Software | Redmond, WA | Aug - Sep | $53/hr | ✓ | 2026-10-24 | [Apply](https://www.amazon.jobs/jobs/10587999/apply) |
| **Amazon** | Software Development Engineer Intern - AWS Database - 2027 - US | Software | Seattle, WA | Aug - Sep | $53/hr | ✓ | 2026-10-01 | [Apply](https://www.amazon.jobs/jobs/10565667/apply) |
| **Amazon** | Software Development Engineer Intern - Embedded Systems - Summer 2027 - USA | Software | Seattle, WA | Aug - Sep | $53/hr | ✓ | 2026-09-29 | [Apply](https://www.amazon.jobs/jobs/10567914/apply) |
| **Amazon** | Software Development Engineer Intern - Machine Learning/Automated Reasoning- Summer 2027 | Software | Seattle, WA | Aug - Sep | $53/hr | ✓ | 2026-10-15 | [Apply](https://www.amazon.jobs/jobs/10593521/apply) |
| **Amazon** | Software Development Engineer Intern - Summer | Software | Seattle, WA; Arlington County, Arlington, VA | Aug - Sep |  | ✓ | 2026-09-18 | [Apply](https://amazon.jobs/en/jobs/10552937/software-development-engineer-internship-summer-2027-usa) |
| **Amazon** | Software Development Engineer Intern - Summer 2027 - USA | Software | Seattle, WA; Seattle, Washington, USA | Aug - Sep | $53/hr | ✓ | 2026-09-10 | [Apply](https://www.amazon.jobs/jobs/10552937/apply) |
| **Amazon** | Software Development Engineer Intern, Amazon Leo | Software | Redmond, WA | Aug - Sep |  | ✓ | 2026-10-23 | [Apply](https://www.amazon.jobs/en/jobs/10587999/software-development-engineer-intern-amazon-leo-summer-2027-usa) |
| **Amazon** | Software Development Engineer Intern, Amazon Leo, Embedded Systems | Software | Redmond, WA | Aug - Sep |  | ✓ | 2026-10-07 | [Apply](https://www.amazon.jobs/en/jobs/10571374/software-development-engineer-embedded-systems-intern-amazon-leo-summer-2027-usa) |
| **Amazon** | Software Development Engineer Intern, Embedded Systems | Software | Seattle, WA | Aug - Sep |  | ✓ | 2026-10-02 | [Apply](https://www.amazon.jobs/en/jobs/10567914/software-development-engineer-intern-embedded-systems-summer-2027-usa) |
| **Amazon** | Software Development Engineer Intern, Machine Learning/Automated Reasoning | Software | Seattle, WA | Aug - Sep |  | ✓ | 2026-10-30 | [Apply](https://www.amazon.jobs/en/jobs/10593521/software-development-engineer-intern-machine-learning-automated-reasoning-summer-2027) |
| **Amazon** | Software Engineer Intern | Software | Seattle, WA; Jessup, MD +8 | Aug - Sep |  | ✓ | 2026-10-01 | [Apply](https://amazon.jobs/en/jobs/10587999/software-development-engineer-intern-amazon-leo-summer-2027-usa) |
| **Amazon** | Software Engineer Intern - AWS Database | Software | United States | Aug - Sep |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10565667/software-development-engineer-intern-aws-database-2027-us) |
| **Amazon** | Software Engineer Intern - Embedded Systems | Software | Redmond, WA; Northridge, LA +1 | Aug - Sep |  | ✓ | 2026-10-07 | [Apply](https://amazon.jobs/en/jobs/10571374/software-development-engineer-embedded-systems-intern-amazon-leo-summer-2027-usa) |
| **Amazon** | Software Engineer Intern - Machine Learning/Automated Reasoning | Software | Boston, MA; Seattle, WA +7 | Aug - Sep |  | ✓ | 2026-10-30 | [Apply](https://amazon.jobs/en/jobs/10593521/software-development-engineer-intern-machine-learning-automated-reasoning-summer-2027) |
| **Databricks** | Software Engineer Intern | Software | SF; Bellevue, WA +2 | Aug - Sep |  |  | 2026-10-12 | [Apply](https://boards.greenhouse.io/embed/job_app?token=6865687002) |
| **Rippling** | Full Stack Software Engineer Intern | Software | Seattle, WA; SF +1 | Aug - Sep |  | ✓ | 2026-09-22 | [Apply](https://ats.rippling.com/rippling/jobs/f64b6158-9534-4bab-9457-45556166b262) |
| **Rippling** | Machine Learning Software Engineer Intern - Summer 2027 | Software | SF | Aug - Sep |  | ✓ | 2026-09-22 | [Apply](https://ats.rippling.com/rippling/jobs/f9de04c3-e2c5-41f9-8e46-a0684707f89d) |
| **Rippling** | Software Engineer Intern - Backend Focused | Software | Seattle, WA; SF +1 | Aug - Sep |  | ✓ | 2026-09-22 | [Apply](https://ats.rippling.com/rippling/jobs/a07e4e46-3721-4934-b57b-0d58412e22ba) |
| **Disney** | Enterprise Technology & Data Software Engineering Intern | Software | Orlando, FL | Aug - Sep | $43/hr | ✓ | 2026-10-29 | [Apply](https://www.disneycareers.com/en/job/orlando/enterprise-technology-and-data-software-engineering-intern-summer-2027/391/102524650928) |
| **Disney** | Product & Technology Software Engineering Intern | Software | Glendale, CA; San Francisco, CA +1 | Aug - Sep | $43/hr | ✓ | 2026-10-18 | [Apply](https://www.disneycareers.com/en/job/glendale/product-and-technology-software-engineering-intern-summer-2027/391/102343795584) |
| **HP** | Software Engineer Intern | Software | SF | Aug - Sep | $40-50/hr | ✗ java | 2026-10-28 | [Apply](https://hp.wd5.myworkdayjobs.com/externalcareersite/job/San-Francisco-California-United-States-of-America/Software-Engineering-Intern---HP-IQ_UNI4806-1) |
| **HP** | Software Engineer Intern - Connectivity | Software | SF | Aug - Sep | $40-50/hr | ✓ | 2026-10-28 | [Apply](https://hp.wd5.myworkdayjobs.com/externalcareersite/job/San-Francisco-California-United-States-of-America/Software-Engineering-Intern--Connectivity---HP-IQ_UNI4812-1) |
| **HP** | Software Engineering Intern - Connectivity - HP IQ | Software | San Francisco, CA | Aug - Sep | $40-50/hr | ✓ | 2026-10-29 | [Apply](https://hp.wd5.myworkdayjobs.com/en-US/exteu-ac-careersite/job/San-Francisco-California-United-States-of-America/Software-Engineering-Intern--Connectivity---HP-IQ_UNI4812) |
| **HP** | Software Product Security Intern, HP IQ | Software | San Francisco, CA | Aug - Sep | $40-50/hr | ✓ | 2026-10-29 | [Apply](https://hp.wd5.myworkdayjobs.com/EXTEU-AC-CareerSite/job/San-Francisco-California-United-States-of-America/Software-Product-Security-Intern---HP-IQ_UNI4810-1) |
| **HP** | Software Quality Assurance Intern | Software | SF; San Francisco, CA | Aug - Sep | $40-50/hr |  | 2026-10-28 | [Apply](https://hp.wd5.myworkdayjobs.com/EXTEU-AC-CareerSite/job/San-Francisco-California-United-States-of-America/Software-Quality-Assurance-Intern_UNI4802) |
| **HP** | Software Systems Intern - HP IQ | Software | San Francisco, CA | Aug - Sep | $40-50/hr |  | 2026-10-29 | [Apply](https://hp.wd5.myworkdayjobs.com/en-US/externalcareersite/job/San-Francisco-California-United-States-of-America/Software-Systems-Intern_UNI4801-1) |
| **HP** | Software Systems Intern - IQ | Software | SF; San Francisco, CA | Aug - Sep | $40-50/hr |  | 2026-10-28 | [Apply](https://hp.wd5.myworkdayjobs.com/EXTEU-AC-CareerSite/job/San-Francisco-California-United-States-of-America/Software-Systems-Intern_UNI4801) |
| **CVS Health** | Innovation & Technology Internship - Product & Agile Delivery | Software | Dallas, TX; Scottsdale, AZ +2 | Aug 4, 5 wks | $35-39/hr |  | 2026-10-22 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/CVS_Health_Careers/job/Hartford-Farmington-Ave-Rogers/Innovation---Technology-Internship---Product---Agile-Delivery---Summer-2027--Undergraduate-_R1080767) |
| **CVS Health** | Innovation & Technology Internship - Software Engineering: Data & Intelligence | Software | NYC | Aug 4, 5 wks | $42/hr | ✓ | 2026-10-22 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/CVS_Health_Careers/job/NY---New-York/Innovation---Technology-Internship--Software-Engineering--Data---Intelligence-Summer-2027-Undergrad_R1081114) |
| **CVS Health** | Innovation & Technology Internship - Software Engineering: Data & Intelligence Summer 2027 Graduate | Software | New York City, NY | Aug 4, 5 wks | $52/hr | ✓ | 2026-10-23 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/en-US/cvs_health_careers/job/NY---New-York/Innovation---Technology-Internship--Software-Engineering--Data---Intelligence-Summer-2027-Graduate_R1081128) |
| **CVS Health** | Innovation & Technology Internship - Software Engineering: Data & Intelligence Summer 2027 Undergrad | Software | New York City, NY | Aug 4, 5 wks | $42/hr | ✓ | 2026-10-24 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/en-US/cvs_health_careers/job/NY---New-York/Innovation---Technology-Internship--Software-Engineering--Data---Intelligence-Summer-2027-Undergrad_R1081114) |
| **CVS Health** | Innovation & Technology Internship - Software Engineering: Platform & Applications -Summer 2027 Grad | Software | Scottsdale, AZ +3 | Aug 4, 5 wks | $43-47/hr | ✓ | 2026-10-23 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/en-US/cvs_health_careers/job/AZ---Scottsdale/Innovation---Technology-Internship-Software-Engineering--Platform---Applications--Summer-2027-Grad_R1081216) |
| **CVS Health** | Innovation & Technology Internship-Software Engineering:Platform & Applications-Summer2027 Undergrad | Software | Scottsdale, AZ +3 | Aug 4, 5 wks | $35-39/hr | ✓ | 2026-10-24 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/en-US/cvs_health_careers/job/AZ---Scottsdale/Innovation-Technology-Internship-Software-Engineering--Platform---Applications-Summer-2027-Undergrad_R1081193) |
| **CVS Health** | Innovation & Technology Software Engineering: Data & Intelligence Intern | Software | NYC | Aug 4, 5 wks | $52/hr | ✓ | 2026-10-22 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/CVS_Health_Careers/job/NY---New-York/Innovation---Technology-Internship--Software-Engineering--Data---Intelligence-Summer-2027-Graduate_R1081128) |
| **CVS Health** | Innovation & Technology Software Engineering: Platform & Applications Intern | Software | Dallas, TX; Scottsdale, AZ +2 | Aug 4, 5 wks | $43-47/hr | ✓ | 2026-10-22 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/CVS_Health_Careers/job/AZ---Scottsdale/Innovation---Technology-Internship-Software-Engineering--Platform---Applications--Summer-2027-Grad_R1081216) |
| **CVS Health** | Software Engineer Intern - Platform & Applications | Software | Dallas, TX; Scottsdale, AZ +2 | Aug 4, 5 wks | $35-39/hr | ✓ | 2026-10-22 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/CVS_Health_Careers/job/AZ---Scottsdale/Innovation-Technology-Internship-Software-Engineering--Platform---Applications-Summer-2027-Undergrad_R1081193) |
| **CVS Health** | Software Engineering Intern, Data & Intelligence | Software | New York, NY | Aug 4, 5 wks | $52/hr | ✓ | 2026-10-23 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/en-US/CVS_Health_Careers/job/NY---New-York/Innovation---Technology-Internship--Software-Engineering--Data---Intelligence-Summer-2027-Graduate_R1081128) |
| **CVS Health** | Software Engineering: Data & Intelligence Intern, Innovation & Technology | Software | New York, NY | Aug 4, 5 wks | $42/hr | ✓ | 2026-10-22 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/CVS_Health_Careers/job/NY---New-York/Innovation---Technology-Internship--Software-Engineering--Data---Intelligence-Summer-2027-Undergrad_R1081114) |
| **Amazon** | Business Intelligence Engineer Intern | Data | Seattle, WA | Aug - Sep |  | ✓ | 2026-10-08 | [Apply](https://amazon.jobs/en/jobs/10553765/business-intelligence-engineer-internship-2027-us) |
| **Amazon** | Data Engineer Intern | Data | Seattle, WA | Aug - Sep |  | ✓ | 2026-10-08 | [Apply](https://amazon.jobs/en/jobs/10553907/data-engineer-internship-2027-us) |
| **Waabi** | Safety Methodologies Intern Co-op | Data | Toronto, ON, Canada; SF +1 | Aug - Sep | $40-52/hr | ✓ | 2026-10-16 | [Apply](https://jobs.lever.co/waabi/480d9d41-33d0-429a-8883-7f9ec305a30f/apply) |
| **CVS Health** | Data Science Intern, Innovation & Technology | Data | New York, NY | Aug 4, 5 wks | $42/hr | ✓ | 2026-10-22 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/CVS_Health_Careers/job/NY---New-York/Innovation---Technology-Internship---Data-Science---Summer-2027--Undergraduate-_R1081067) |
| **CVS Health** | Innovation & Technology Data Science Intern | Data | NYC | Aug 4, 5 wks | $42/hr | ✓ | 2026-10-22 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/CVS_Health_Careers/job/NY---New-York/Innovation---Technology-Internship---Data-Science---Summer-2027--Undergraduate-_R1081067) |
| **CVS Health** | Innovation & Technology Internship - Data Science | Data | NYC | Aug 4, 5 wks | $52/hr | ✓ | 2026-10-22 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/CVS_Health_Careers/job/NY---New-York/Innovation---Technology-Internship---Data-Science---Summer-2027--Graduate-_R1081038) |
| **CVS Health** | Innovation & Technology Internship - Data Science - Summer 2027 - Graduate | Data | New York City, NY | Aug 4, 5 wks | $52/hr | ✓ | 2026-10-23 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/en-US/cvs_health_careers/job/NY---New-York/Innovation---Technology-Internship---Data-Science---Summer-2027--Graduate-_R1081038) |
| **CVS Health** | Innovation & Technology Internship - Data Science - Summer 2027 - Undergraduate | Data | New York City, NY | Aug 4, 5 wks | $42/hr | ✓ | 2026-10-24 | [Apply](https://cvshealth.wd1.myworkdayjobs.com/en-US/cvs_health_careers/job/NY---New-York/Innovation---Technology-Internship---Data-Science---Summer-2027--Undergraduate-_R1081067) |

---

## 🟡 Flexible start / near miss

### 💻 Software Engineering (20)

<details open>
<summary>20 roles</summary>

| Company | Role | Location | Dates / note | Pay | Py | Posted | Link |
|---|---|---|---|---|---|---|---|
| **Amazon** | Software Development Engineer Intern - Summer 2027 - USA - Amazon Dedicated Cloud - ADC | Seattle, WA | Aug, 12 wks — ends a little after Sep 30 - ask to end early | $53/hr | ✓ | 2026-09-25 | [Apply](https://www.amazon.jobs/jobs/10559746/apply) |
| **AMD** | Software Engineer Intern | Austin, TX; Boxborough, MA +12 | Jan 25 - Aug 13 — listed Jan 25 - Aug 13, but posting says "Summer/Fall" |  | ✓ | 2026-08-21 | [Apply](https://careers.amd.com/careers-home/jobs/91180) |
| **AMD** | Software Engineer Intern/Co-op | Rochester, NY; Austin, TX +12 | Jan 25 - Aug 13 — listed Jan 25 - Aug 13, but posting says "Summer/Fall" |  | ✓ | 2026-08-21 | [Apply](https://careers.amd.com/jobs/91180?icims=1) |
| **Epic Games** | Engine Programmer Intern | Cary, NC | flexible — posting says "flexible start" |  | ✗ java | 2026-09-22 | [Apply](https://epicgames.com/careers/jobs/6202659004?gh_jid=6202659004) |
| **Epic Games** | Frontend Programmer Intern | Cary, NC | flexible — posting says "flexible start" |  |  | 2026-08-31 | [Apply](https://epicgames.com/careers/jobs/6173862004?gh_jid=6173862004) |
| **Epic Games** | Tech Art Intern | Cary,North Carolina,United States | flexible — posting says "flexible start" |  | ✓ | 2026-08-19 | [Apply](https://epicgames.com/careers/jobs/6147154004?gh_jid=6147154004) |
| **Epic Games** | Tools Programmer Intern | Cary, NC; Cary,North Carolina,United States | flexible — posting says "flexible start" |  |  | 2026-08-19 | [Apply](https://epicgames.com/careers/jobs/6200355004?gh_jid=6200355004) |
| **Epic Games** | UI Programmer Intern | Cary,North Carolina,United States | flexible — posting says "flexible start" |  |  | 2026-09-09 | [Apply](https://epicgames.com/careers/jobs/6183401004?gh_jid=6183401004) |
| **Palantir** | Privacy and Civil Liberties Software Engineer Intern | NYC | flexible — posting says "dates may vary" | $36/hr | ✓ | 2026-06-29 | [Apply](https://jobs.lever.co/palantir/09846827-b931-4a9f-bd64-c3bb8860187b/apply) |
| **Point72** | 2027 Summer Internship - Software Engineer | New York City, NY | flexible — posting says "date may vary" | $63/hr | ✓ | 2026-10-15 | [Apply](https://boards.greenhouse.io/point72/jobs/8885733002?gh_jid=8885733002) |
| **Point72** | Software Engineer Intern | NYC; New York, NY | flexible — posting says "date may vary" | $63/hr | ✓ | 2026-10-14 | [Apply](https://boards.greenhouse.io/point72/jobs/8885733002) |
| **Cloudflare** | Software Engineer Intern | Austin, TX; In-Office | May - Sep — 12-12 wks somewhere in May - Sep; ask for a late-July start |  | ✓ | 2026-09-29 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8199958) |
| **Cloudflare** | Software Engineer Intern - 2027 - Austin - TX | Austin, TX | May - Sep — 12-12 wks somewhere in May - Sep; ask for a late-July start |  | ✓ | 2026-09-18 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8199958?gh_jid=8199958) |
| **MongoDB** | Software Engineer Intern | Palo Alto, CA; Seattle, WA +3 | Aug, 12 wks — ends a little after Sep 30 - ask to end early | $42-59/hr | ✓ | 2026-10-23 | [Apply](https://www.mongodb.com/careers/job/?gh_jid=8209134) |
| **Patreon** | Software Engineer Intern | SF; NYC +2 | Jun - Sep — 12-12 wks somewhere in Jun - Sep; ask for a late-July start | $55/hr | ✓ | 2026-10-19 | [Apply](https://jobs.ashbyhq.com/patreon/71f644bc-0873-4d62-a599-bd64405d6587/application?embed=true) |
| **Patreon** | Software Engineering Intern | New York, NY | Jun - Sep — 12-12 wks somewhere in Jun - Sep; ask for a late-July start | $55/hr | ✓ | 2026-10-31 | [Apply](https://jobs.ashbyhq.com/patreon/cefe07ab-ba4f-48cc-86b9-a88b1859a95c) |
| **Samsara** | Software Engineering Intern | San Francisco, CA | Nov 25 - Dec 5 — listed Nov 25 - Dec 5, but posting says "Summer/Fall" | $62/hr | ✗ go | 2026-08-04 | [Apply](https://www.samsara.com/company/careers/roles/8082091?gh_jid=8082091) |
| **Samsara** | Software Engineering Internship - San Francisco | San Francisco, CA | Nov 25 - Dec 5 — listed Nov 25 - Dec 5, but posting says "Summer/Fall" | $62/hr | ✗ go | 2026-08-04 | [Apply](https://www.samsara.com/company/careers/roles/8082091?gh_jid=8082091) |
| **General Motors** | Software Engineer Intern - Digital Product: Software Engineering | Austin, TX; Milford, MI +2 | Jun - Sep — 12-12 wks somewhere in Jun - Sep; ask for a late-July start | $37-60/hr | ✓ | 2026-09-21 | [Apply](https://generalmotors.wd5.myworkdayjobs.com/en-CA/Careers_GM/job/Warren-Michigan-United-States-of-America/XMLNAME-2027-Summer-Intern---Digital-Product--Software-Engineering_JR-202620546) |
| **General Motors** | Software Engineer Intern, Digital Product | Austin, TX; Milford, MI +2 | Jun - Sep — 12-12 wks somewhere in Jun - Sep; ask for a late-July start | $37-60/hr | ✓ | 2026-09-21 | [Apply](https://generalmotors.wd5.myworkdayjobs.com/en-CA/Careers_GM/job/Warren-Michigan-United-States-of-America/XMLNAME-2027-Summer-Intern---Digital-Product--Software-Engineering_JR-202620546) |

</details>

### 📱 Product Management (7)

<details open>
<summary>7 roles</summary>

| Company | Role | Location | Dates / note | Pay | Py | Posted | Link |
|---|---|---|---|---|---|---|---|
| **Amazon** | Program Manager Intern – Summer 2027 | Seattle, Washington, USA | May - Sep — 12-12 wks somewhere in May - Sep; ask for a late-July start |  | ✓ | October  9 | [Apply](https://www.amazon.jobs/en/jobs/10575248/program-manager-intern-summer-2027) |
| **Epic Games** | Product Management Intern | Cary, NC | flexible — posting says "flexible start" |  |  | 2026-09-29 | [Apply](https://epicgames.com/careers/jobs/6161289004?gh_jid=6161289004) |
| **Cloudflare** | Product Manager Intern | Austin, TX | May - Sep — 12-12 wks somewhere in May - Sep; ask for a late-July start |  |  | 2026-10-29 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8274790) |
| **Cloudflare** | Product Manager Intern (2027) - Austin, TX | In-Office | May - Sep — 12-12 wks somewhere in May - Sep; ask for a late-July start |  |  | 2026-10-29 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8274790?gh_jid=8274790) |
| **Cloudflare** | Product Manager Intern (2027) - Lisbon, PT | In-Office | May - Sep — 12-12 wks somewhere in May - Sep; ask for a late-July start |  |  | 2026-10-29 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8332008?gh_jid=8332008) |
| **Cloudflare** | Product Manager Intern (2027) - London, UK | In-Office | May - Sep — 12-12 wks somewhere in May - Sep; ask for a late-July start |  |  | 2026-10-29 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8328914?gh_jid=8328914) |
| **General Motors** | Product Management Intern - Digital Product | Austin, TX; Warren, MI | Jun - Sep — 12-12 wks somewhere in Jun - Sep; ask for a late-July start |  |  | 2026-09-18 | [Apply](https://generalmotors.wd5.myworkdayjobs.com/en-CA/Careers_GM/job/Warren-Michigan-United-States-of-America/XMLNAME-2027-Summer-Intern---Digital-Product--Product-Management--MBA-_JR-202620538) |

</details>

### 📊 Data / Analytics / ML (48)

<details open>
<summary>48 roles</summary>

| Company | Role | Location | Dates / note | Pay | Py | Posted | Link |
|---|---|---|---|---|---|---|---|
| **Amazon** | Business Analyst Intern – Summer 2027 | Bellevue, Washington, USA | May - Sep — 12-12 wks somewhere in May - Sep; ask for a late-July start |  |  | October  9 | [Apply](https://www.amazon.jobs/en/jobs/10575250/business-analyst-intern-summer-2027) |
| **AMD** | Machine Learning Intern/Co-op - Artificial Intelligence | Rochester, NY; Austin, TX +4 | Jan 25 - Aug 13 — listed Jan 25 - Aug 13, but posting says "Summer/Fall" |  | ✓ | 2026-08-21 | [Apply](https://careers.amd.com/jobs/91181?icims=1) |
| **AMD** | Machine Learning Intern/Co-op - Machine Learning - Artificial Intelligence | San Jose, CA; Santa Clara, CA +2 | Jan 25 - Aug 13 — listed Jan 25 - Aug 13, but posting says "Summer/Fall" |  | ✓ | 2026-08-21 | [Apply](https://careers.amd.com/jobs/91177?icims=1) |
| **AMD** | Machine Learning Intern/Co-op - Multiple Teams | Rochester, NY; Austin, TX +4 | Jan 25 - Aug 13 — listed Jan 25 - Aug 13, but posting says "Summer/Fall" |  | ✓ | 2026-08-21 | [Apply](https://careers.amd.com/jobs/91170?icims=1) |
| **Epic Games** | Data Science Intern | Cary, NC | flexible — posting says "flexible start" |  | ✓ | 2026-09-22 | [Apply](https://epicgames.com/careers/jobs/6202675004?gh_jid=6202675004) |
| **Epic Games** | Machine Learning Intern | BLANK,BLANK,Multiple Locations | flexible — posting says "flexible start" | $67-80/hr |  | 2026-08-07 | [Apply](https://epicgames.com/careers/jobs/6138134004?gh_jid=6138134004) |
| **Google** | Student Researcher | Palo Alto, CA; Cambridge, MA +42 | starts Aug - Dec — multiple start dates offered | $57-75/hr | ✓ | 2026-07-20 | [Apply](https://www.google.com/about/careers/applications/jobs/results/83535564552184518) |
| **Meta** | Research Scientist Intern | Menlo Park, CA | flexible — posting says "various start dates" |  |  | 2026-10-21 | [Apply](https://www.metacareers.com/jobs/1510576574212840) |
| **Meta** | Research Scientist Intern - Ads Recommendations | Menlo Park, CA | flexible — posting says "various start dates" |  |  | 2026-10-28 | [Apply](https://www.metacareers.com/jobs/1691709792593561) |
| **Meta** | Research Scientist Intern - AI & Compute Foundation | Menlo Park, CA | flexible — posting says "various start dates" |  |  | 2026-10-13 | [Apply](https://www.metacareers.com/jobs/1866761794487684) |
| **Meta** | Research Scientist Intern - AI Alignment | Boston, MA; Seattle, WA +3 | flexible — posting says "various start dates" | $50/hr |  | 2026-10-22 | [Apply](https://www.metacareers.com/jobs/2356892281747003) |
| **Meta** | Research Scientist Intern - AI Core Machine Learning | Seattle, WA; Bellevue, WA +1 | flexible — posting says "various start dates" |  |  | 2026-10-23 | [Apply](https://www.metacareers.com/jobs/1648122343381284) |
| **Meta** | Research Scientist Intern - AI Infra | Menlo Park, CA | flexible — posting says "various start dates" |  |  | 2026-10-29 | [Apply](https://www.metacareers.com/jobs/4603165899971826) |
| **Meta** | Research Scientist Intern - AI Research - Speech & Audio | Menlo Park, CA; NYC | flexible — posting says "various start dates" |  |  | 2026-10-27 | [Apply](https://www.metacareers.com/jobs/1567168005156007) |
| **Meta** | Research Scientist Intern - Artificial Intelligence-Driven Neural Interfaces | Burlingame, CA; Menlo Park, CA +1 | flexible — posting says "various start dates" |  |  | 2026-10-20 | [Apply](https://www.metacareers.com/jobs/1436615821934863) |
| **Meta** | Research Scientist Intern - Audio - Machine Learning and Computer Vision | Burlingame, CA; Redmond, WA | flexible — posting says "various start dates" |  |  | 2026-10-09 | [Apply](https://www.metacareers.com/jobs/2211974449401350) |
| **Meta** | Research Scientist Intern - Audio AI | Menlo Park, CA; Bellevue, WA | flexible — posting says "various start dates" |  |  | 2026-10-26 | [Apply](https://www.metacareers.com/jobs/1160814043168431) |
| **Meta** | Research Scientist Intern - Central Applied Science | Menlo Park, CA; NYC | flexible — posting says "various start dates" |  |  | 2026-10-22 | [Apply](https://www.metacareers.com/jobs/1582569213186235) |
| **Meta** | Research Scientist Intern - Egocentric Vision-Language Models | Redmond, WA; Sunnyvale, CA | flexible — posting says "various start dates" |  |  | 2026-10-13 | [Apply](https://www.metacareers.com/jobs/2067000203934229) |
| **Meta** | Research Scientist Intern - FAIR - Multimodal Foundations | Boston, MA; SF +3 | flexible — posting says "various start dates" |  |  | 2026-10-22 | [Apply](https://www.metacareers.com/jobs/2322361288548512) |
| **Meta** | Research Scientist Intern - Feed Recommendations | Bellevue, WA | flexible — posting says "various start dates" |  |  | 2026-10-22 | [Apply](https://www.metacareers.com/jobs/29044546168568671) |
| **Meta** | Research Scientist Intern - FM Quality ML | Menlo Park, CA | flexible — posting says "various start dates" |  |  | 2026-11-03 | [Apply](https://www.metacareers.com/jobs/1125383989877928) |
| **Meta** | Research Scientist Intern - Generative Recommendation Systems | Menlo Park, CA | flexible — posting says "various start dates" |  |  | 2026-10-26 | [Apply](https://www.metacareers.com/jobs/3265378000517806) |
| **Meta** | Research Scientist Intern - Language and Agents | Menlo Park, CA; Bellevue, WA | flexible — posting says "various start dates" |  |  | 2026-10-13 | [Apply](https://www.metacareers.com/jobs/2168438160696161) |
| **Meta** | Research Scientist Intern - Meta Recommendation Systems - Core ML | Seattle, WA; Menlo Park, CA +1 | flexible — posting says "various start dates" |  |  | 2026-10-23 | [Apply](https://www.metacareers.com/jobs/1023154190171838) |
| **Meta** | Research Scientist Intern - Multi-Agent Systems and Memory | Seattle, WA; NYC +1 | flexible — posting says "various start dates" |  |  | 2026-10-22 | [Apply](https://www.metacareers.com/jobs/2615214025585454) |
| **Meta** | Research Scientist Intern - Multimodal Behavioral Modeling - Hearing Science | Redmond, WA | flexible — posting says "various start dates" |  |  | 2026-10-16 | [Apply](https://www.metacareers.com/jobs/1141752241867684) |
| **Meta** | Research Scientist Intern - Multiple Teams | Seattle, WA; Bellevue, WA +1 | flexible — posting says "various start dates" |  |  | 2026-10-29 | [Apply](https://www.metacareers.com/jobs/1155292783739299) |
| **Meta** | Research Scientist Intern - On-Device AI Model Optimization | Burlingame, CA; Menlo Park, CA | flexible — posting says "start dates throughout the year" |  |  | 2026-10-19 | [Apply](https://www.metacareers.com/jobs/4455569504707135) |
| **Meta** | Research Scientist Intern - PAR Safety Evals and Red Teaming | Menlo Park, CA; NYC +2 | flexible — posting says "various start dates" |  |  | 2026-11-02 | [Apply](https://www.metacareers.com/jobs/1272664685039241) |
| **Meta** | Research Scientist Intern - Photorealistic Telepresence | Redmond, WA; Pittsburgh, PA | flexible — posting says "various start dates" |  |  | 2026-10-30 | [Apply](https://www.metacareers.com/jobs/1358944629494375) |
| **Meta** | Research Scientist Intern - Physical Engineering AI | Seattle, WA; NYC | flexible — posting says "various start dates" |  |  | 2026-10-22 | [Apply](https://www.metacareers.com/jobs/1081255008061721) |
| **Meta** | Research Scientist Intern - Ranking & Recommendations | Menlo Park, CA; NYC +1 | flexible — posting says "various start dates" |  |  | 2026-10-27 | [Apply](https://www.metacareers.com/jobs/1625515955324134) |
| **Meta** | Research Scientist Intern - Robot Foundation Models | Redmond, WA | flexible — posting says "various start dates" |  |  | 2026-10-21 | [Apply](https://www.metacareers.com/jobs/27730225806654441) |
| **Meta** | Research Scientist Intern - Scam and Trust | Menlo Park, CA | flexible — posting says "various start dates" |  |  | 2026-10-29 | [Apply](https://www.metacareers.com/jobs/2355649268510104) |
| **Meta** | Research Scientist Intern - Search | Menlo Park, CA | flexible — posting says "various start dates" |  |  | 2026-10-27 | [Apply](https://www.metacareers.com/jobs/2171476533578976) |
| **Meta** | Research Scientist Intern - Smart Glasses in Wearables AI | Burlingame, CA; Menlo Park, CA | flexible — posting says "various start dates" |  |  | 2026-10-19 | [Apply](https://www.metacareers.com/jobs/1584033410435097) |
| **Meta** | Research Scientist Intern - Spatial Audio Capture and Reproduction | Redmond, WA | flexible — posting says "various start dates" |  |  | 2026-10-09 | [Apply](https://www.metacareers.com/jobs/1674394627579563) |
| **Meta** | Research Scientist Intern - User Modeling and Reinforcement Learning | Menlo Park, CA; Bellevue, WA | flexible — posting says "various start dates" |  |  | 2026-10-27 | [Apply](https://www.metacareers.com/jobs/1751935042548465) |
| **Meta** | Research Scientist Intern - VLM and Omni Model Post-Training | Sunnyvale, CA | flexible — posting says "flexible start" |  |  | 2026-10-13 | [Apply](https://www.metacareers.com/jobs/2988199118196184) |
| **TikTok** | Student Researcher - Multiple Teams | San Jose, CA | flexible — posting says "Summer or Fall" | $85/hr | ✓ | 2026-08-05 | [Apply](https://jobs.bytedance.com/en/position/7670318960697952517/detail) |
| **Sierra** | Applied Research Intern | SF | flexible — posting says "start dates are flexible" |  | ✓ | 2026-10-31 | [Apply](https://jobs.ashbyhq.com/sierra/ef896ee9-e903-4a1f-84c2-537373cb9081/application?embed=true) |
| **Point72** | 2027 Summer Internship - Fundamental Researcher, Canvas | New York, NY | flexible — posting says "date may vary" | $43/hr |  | 2026-10-14 | [Apply](https://boards.greenhouse.io/point72/jobs/8885693002?gh_jid=8885693002) |
| **Point72** | 2027 Summer Internship - Sector Analyst, Proprietary Research | New York, NY | flexible — posting says "date may vary" | $48/hr |  | 2026-10-14 | [Apply](https://boards.greenhouse.io/point72/jobs/8885715002?gh_jid=8885715002) |
| **Point72** | Data Scientist Intern | NYC | flexible — posting says "date may vary" | $63-84/hr | ✓ | 2026-10-14 | [Apply](https://boards.greenhouse.io/point72/jobs/8885299002) |
| **Point72** | Fundamental Researcher Intern, Canvas | New York, NY | flexible — posting says "date may vary" | $43/hr |  | 2026-10-14 | [Apply](https://job-boards.greenhouse.io/point72/jobs/8885693002?gh_jid=8885693002) |
| **Sephora** | AI Automation Intern, WMS & DC Systems | United States | Jul 6 - Jul 9 — starts Jul 6, slightly before your window | $30/hr | ✓ | 2026-10-27 | [Apply](https://career55.sapsf.eu/career?career_ns=job_listing&company=SephoraUS&career_job_req_id=298054) |
| **Sephora** | AI Platform Infrastructure Intern, Technology | United States | Jul 6 - Jul 9 — starts Jul 6, slightly before your window | $30/hr | ✓ | 2026-10-27 | [Apply](https://career55.sapsf.eu/career?career_ns=job_listing&company=SephoraUS&career_job_req_id=297534) |

</details>

### 📈 Finance / Investment / Quant (12)

<details open>
<summary>12 roles</summary>

| Company | Role | Location | Dates / note | Pay | Py | Posted | Link |
|---|---|---|---|---|---|---|---|
| **Amazon** | Risk Specialist Intern – Summer 2027 | Seattle, Washington, USA | May - Sep — 12-12 wks somewhere in May - Sep; ask for a late-July start |  |  | October  9 | [Apply](https://www.amazon.jobs/en/jobs/10575251/risk-specialist-intern-summer-2027) |
| **Gelber Group** | Discretionary Trading Internship - Summer 2027 | Chicago, IL | Aug, 10 wks — ends a little after Sep 30 - ask to end early | $35/hr |  | 2026-09-25 | [Apply](https://job-boards.greenhouse.io/gelbergroup/jobs/4716779006) |
| **Point72** | 2027 Summer Internship - Investment Services | New York, New York, United States, Stamford, Connecticut, United States | flexible — posting says "date may vary" | $43/hr |  | 2026-09-18 | [Apply](https://boards.greenhouse.io/point72/jobs/8811167002?gh_jid=8811167002) |
| **Point72** | Quantitative Researcher Intern | New York, NY; New York | flexible — posting says "date may vary" | $115-144/hr | ✓ | 2024-08-15 | [Apply](https://careers.point72.com/CSJobDetail?jobName=summer-2027-quantitative-researcher-internship&jobCode=CSS-0012295) |
| **Point72** | Summer 2027 Quantitative Research Internship | New York | flexible — posting says "date may vary" | $115-144/hr | ✓ | 2024-08-15 | [Apply](https://boards.greenhouse.io/point72/jobs/7297642002?gh_jid=7297642002) |
| **Barclays** | Private Bank and Wealth Management Off Cycle Internship Programme 2027 Monaco | Monaco - Default Legacy Site | flexible — posting says "Off Cycle" |  |  | Posted 30+ | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Monaco---Default-Legacy-Site/Private-Bank-and-Wealth-Management-Off-Cycle-Internship-Programme-2027-Monaco_JR-0000124680) |
| **Barclays** | Quantitative Finance Associate Off Cycle Internship Programme 2027 London | Canary Wharf, 1 Churchill Place | flexible — posting says "Off Cycle" |  | ✓ | Posted 30+ | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Canary-Wharf-1-Churchill-Place/Quantitative-Finance-Associate-Off-Cycle-Internship-Programme-2027-London_JR-0000124685) |
| **Lazard** | Quantitative Research Intern | NYC | Aug 13, 10 wks — ends Oct 19 - ask to finish by Sep 30 | $43/hr | ✓ | 2026-09-21 | [Apply](https://icbpjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/LazardProfessionalCareers/job/6612) |
| **Lincoln International** | 2027 Summer Analyst Intern, Valuations & Opinions Group | Atlanta, GA; Dallas, TX +2 | starts Jul 23 — end date not stated | $46/hr |  | 2026-09-28 | [Apply](http://www.lincolninternational.com/greenhouse/?gh_jid=8237269) |
| **Travelers** | Bond and Specialty Insurance Intern: Underwriting Professional Development Program | IL - Chicago | starts Aug 15 — end date not stated |  |  | Posted 8 D | [Apply](https://travelers.wd5.myworkdayjobs.com/External/job/IL---Chicago/Bond-and-Specialty-Insurance-Intern--Underwriting-Professional-Development-Program_R-53090) |
| **Travelers** | Bond and Specialty Insurance Intern: Underwriting Professional Development Program (UPDP) | MN - St. Paul | starts Aug 15 — end date not stated |  |  | Posted 8 D | [Apply](https://travelers.wd5.myworkdayjobs.com/External/job/MN---St-Paul/Bond-and-Specialty-Insurance-Intern--Underwriting-Professional-Development-Program--UPDP-_R-53091) |
| **Battery Ventures** | 2027 Summer Investment Internship | Boston, MA | starts Aug 15 — end date not stated |  |  | 2026-09-09 | [Apply](https://job-boards.greenhouse.io/batteryventures/jobs/5413080008) |

</details>

---

## ⚪ Summer 2027 — dates not stated

1083 roles. The first 60 per track are below; the full list is in [reports/summer_dates_not_stated.md](reports/summer_dates_not_stated.md).

<details>
<summary><strong>💻 Software Engineering</strong> (512)</summary>

| Company | Role | Location | Dates / note | Pay | Py | Posted | Link |
|---|---|---|---|---|---|---|---|
| **Adobe** | 2027 Intern - Emerging Technology & Innovation | San Jose | term dates not stated | $38-51/hr |  | Posted 13  | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Amazon** | Associate Engagement Manager Intern- National Security, AWS Professional Services | Arlington, Virginia, USA | term dates not stated; 12+ weeks, so a late-July start would run into October |  |  | November   | [Apply](https://www.amazon.jobs/en/jobs/10594714/associate-engagement-manager-intern-national-security-aws-professional-services) |
| **Amazon** | Automation Engineer Intern, (Nationwide) - Summer 2027 | Mt Juliet, Tennessee, USA | Summer 2027 dates not stated; 10-week program |  |  | August 13, | [Apply](https://www.amazon.jobs/en/jobs/10501526/automation-engineer-intern-nationwide-summer-2027) |
| **Amazon** | Database Engineer Intern | Seattle, WA; East Palo Alto, CA +1 | Summer 2027 dates not stated |  | ✓ | 2026-10-27 | [Apply](https://amazon.jobs/en/jobs/10590290/database-engineer-intern-summer-2027) |
| **Amazon** | Software Development Engineer Intern - Robotics | Seattle, WA; Nashville, TN +12 | Summer 2027 dates not stated |  | ✓ | 2026-09-04 | [Apply](https://amazon.jobs/en/jobs/10529525/software-development-engineer-intern-robotics-2027) |
| **Amazon** | Software Development Engineer Intern, Annapurna Labs | Cupertino, CA; Cupertino, California, USA | Summer 2027 dates not stated |  | ✓ | 2026-08-27 | [Apply](https://www.amazon.jobs/en/jobs/10517567/software-development-engineer-intern-annapurna-labs-2027) |
| **Amazon** | Undergrad Software Engineer Intern | SF | term dates not stated | $43/hr |  | 2026-10-22 | [Apply](https://job-boards.greenhouse.io/twitch/jobs/8886605002) |
| **Amazon** | Undergrad Software Engineering Intern | San Francisco, CA | Summer 2027 dates not stated | $43/hr |  | 2026-10-22 | [Apply](https://job-boards.greenhouse.io/twitch/jobs/8886748002) |
| **Apple** | Software Engineer Intern, Undergrad | United States | Summer 2027 dates not stated |  |  | 2026-05-22 | [Apply](https://jobs.apple.com/en-us/details/200664785/software-undergrad-engineering-internships) |
| **Atlassian** | Security Engineer Intern | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $59/hr | ✓ | 2026-10-18 | [Apply](https://campus-americas.icims.com/jobs/26267/security-engineer-intern%2c-2027-summer-u.s./job) |
| **Bloomberg** | 2027 Summer News Internship - Digital Editor | Arlington, VA - 1801 S Bell (INDG) | Summer 2027 dates not stated |  |  | Posted 30+ | [Apply](https://bloomberg.wd1.myworkdayjobs.com/Bloombergindustrygroup_External_Career_Site/job/Arlington-VA---1801-S-Bell-INDG/XMLNAME-2027-Summer-News-Internship---Digital-Editor_144775) |
| **Cisco** | Software Consulting Engineer I Intern | Research Triangle Park, NC | Summer 2027 dates not stated | $89/hr | ✓ | 2026-10-01 | [Apply](https://cisco.wd5.myworkdayjobs.com/cisco_careers/job/USA-RESEARCH-TRIANGLE-PARK/Software-Consulting-Engineer-I--Intern--United-States_2025180) |
| **Databricks** | Software Engineering Intern | Bellevue, WA; Mountain View, CA +6 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $54-60/hr | ✓ | 2023-08-04 | [Apply](https://www.databricks.com/company/careers/university-recruiting---engineering/software-engineering-intern-2027-6865687002?gh_jid=6865687002) |
| **DoorDash** | Software Engineer Intern | SF; Sunnyvale, CA +2 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $55/hr | ✓ | 2026-10-08 | [Apply](https://job-boards.greenhouse.io/doordashusa/jobs/8263774) |
| **DoorDash** | Software Engineer Intern - Summer 2027 | Seattle, WA; SF +3 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $55/hr | ✓ | 2026-09-15 | [Apply](https://job-boards.greenhouse.io/doordashusa/jobs/8171041) |
| **Electronic Arts** | Software Engineer Intern | Orlando, FL | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | 2026-09-30 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Software-Engineer-Intern/216263) |
| **Epic Games** | Gameplay Programmer Intern | Cary, United States | Summer 2027 dates not stated |  |  | 2026-08-21 | [Apply](https://www.epicgames.com/site/careers/jobs/6141180004?gh_jid=6141180004) |
| **Expedia** | Software Development Engineer Intern | Seattle, WA; Austin, TX +4 | Summer 2027 dates not stated | $45/hr | ✓ | 2026-10-05 | [Apply](https://expedia.wd108.myworkdayjobs.com/private/job/Washington---Seattle-Campus/Software-Development-Engineering-Intern---2027---Austin--San-Jose--Seattle_R-110311) |
| **Expedia** | Software Development Engineering Intern - 2027 - Austin - San Jose - Seattle | Washington, DC +3 | term dates not stated | $45/hr | ✓ | 2026-10-06 | [Apply](https://expedia.wd108.myworkdayjobs.com/en-US/private/job/Washington---Seattle-Campus/Software-Development-Engineering-Intern---2027---Austin--San-Jose--Seattle_R-110311) |
| **Google** | Forward Deployed Engineer Intern | NYC; Sunnyvale, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | 2026-10-12 | [Apply](https://www.google.com/about/careers/applications/jobs/results/75665705386549958) |
| **Google** | Forward Deployed Engineering Intern | Sunnyvale, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | 2026-10-12 | [Apply](https://www.google.com/about/careers/applications/jobs/results/75665705386549958) |
| **Intel** | Software Engineer Intern | Austin, TX; Santa Clara, CA +8 | Summer 2027 dates not stated |  |  | 2026-09-02 | [Apply](https://intel.wd1.myworkdayjobs.com/en-us/external/job/US-Oregon-Hillsboro/Software-Engineering---Intern--Graduate_JR0286836) |
| **Intel** | Software Engineering - Intern, Bachelor’s | US, Oregon, Hillsboro; US, California, Folsom +3 | term dates not stated | $46/hr |  | Posted 30+ | [Apply](https://intel.wd1.myworkdayjobs.com/External/job/US-Oregon-Hillsboro/Software-Engineering---Intern--Bachelor-s_JR0286834) |
| **Intel** | Software Engineering - Intern, Graduate | US, Oregon, Hillsboro; US, California, Folsom +3 | term dates not stated | $53/hr |  | Posted 30+ | [Apply](https://intel.wd1.myworkdayjobs.com/External/job/US-Oregon-Hillsboro/Software-Engineering---Intern--Graduate_JR0286836) |
| **Intuit** | Software Engineer Intern - Cybersecurity | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $36-82/hr |  | 2026-09-14 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-software-engineering-intern-cybersecurity/27595/100620927616) |
| **Intuit** | Software Engineering Intern, Full Stack | United States | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $36-79/hr |  | 2026-10-30 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-software-engineering-intern-full-stack/27595/100620927520) |
| **Lyft** | Software Engineer Intern - Backend | SF; San Francisco, CA | Summer 2027 dates not stated | $58/hr |  | 2026-09-11 | [Apply](https://app.careerpuck.com/job-board/lyft/job/8767726002?gh_jid=8767726002) |
| **Meta** | Software Engineer Intern | Seattle, WA; Menlo Park, CA +2 | term dates not stated | $50/hr |  | 2026-10-06 | [Apply](https://www.metacareers.com/jobs/1952991802037374) |
| **Microsoft** | Research Intern - Coding Agents & Post-Training Optimization | Redmond, WA | term dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557053024) |
| **Microsoft** | Research Intern - Efficient AI Software Systems | Redmond, WA | term dates not stated | $52/hr |  | 2026-10-16 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557041731) |
| **Microsoft** | Security Assurance Intern | Redmond, WA | Summer 2027 dates not stated |  |  | 2026-09-11 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556988203) |
| **Microsoft** | Software Engineer Intern | Mountain View, CA; United States +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-55/hr | ✓ | 2026-10-21 | [Apply](https://jobs.smartrecruiters.com/LinkedIn3/744000156616169) |
| **Microsoft** | Software Engineer Intern - CoreAI | Redmond, WA; Multiple Locations, United States | Summer 2027 dates not stated |  |  | 2026-08-03 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556951950) |
| **Microsoft** | Software Engineer Intern - First Play | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-55/hr | ✓ | 2026-10-28 | [Apply](https://jobs.smartrecruiters.com/LinkedIn3/744000158394370) |
| **Microsoft** | Software Engineer Intern, AI/ML & LLM | Redmond, WA | Summer 2027 dates not stated |  |  | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922929) |
| **Microsoft** | Software Engineer Intern, Cloud & Distributed Backend | Redmond, WA | Summer 2027 dates not stated |  |  | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922923) |
| **Microsoft** | Software Engineer Intern, Data Platform/Analytics | Redmond, WA | Summer 2027 dates not stated |  |  | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922931) |
| **Microsoft** | Software Engineer Intern, Fullstack Product (Web + Services) | Multiple Locations, United States | Summer 2027 dates not stated |  |  | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922922) |
| **Microsoft** | Software Engineer Intern, Security & Identity | Redmond, WA; Cambridge, MA +1 | Summer 2027 dates not stated |  | ✓ | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922930) |
| **Microsoft** | Software Engineer: Security & Identity Intern Opportunities for University Students - Cambridge | Cambridge, MA | term dates not stated | $52/hr | ✓ | 2026-10-23 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557044765) |
| **Microsoft** | Software Engineer: Security & Identity Intern Opportunities for University Students - Redmond | Redmond, WA | term dates not stated | $52/hr | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556922930) |
| **Microsoft** | Software Engineering Intern | Redmond, WA; Reston, VA | Summer 2027 dates not stated |  |  | 2026-09-11 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556983221) |
| **Microsoft** | Software Engineering Intern - CTJ - TS | Redmond, WA; Reston, VA | term dates not stated | $52/hr |  | 2026-09-12 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556983221) |
| **NVIDIA** | AI Systems Software Engineer Intern | Austin, TX | Summer 2027 dates not stated |  | ✓ | 2026-10-29 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-TX-Austin/AI-Systems-Software-Engineering-Intern---Summer-2027_JR2027170) |
| **NVIDIA** | AI Systems Software Engineering Intern | Austin, TX | Summer 2027 dates not stated |  | ✓ | 2026-10-30 | [Apply](https://jobs.nvidia.com/careers/job/893398073452) |
| **NVIDIA** | AI Systems Software Engineering Intern - Summer 2027 | Austin, TX | Summer 2027 dates not stated | $62/hr | ✓ | 2026-10-30 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-TX-Austin/AI-Systems-Software-Engineering-Intern---Summer-2027_JR2027170) |
| **NVIDIA** | Math Libraries Intern | Canada; Santa Clara, CA +1 | Summer 2027 dates not stated |  | ✓ | 2026-11-02 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/Math-Libraries-Intern--cuEST---Summer-2027_JR2028449) |
| **NVIDIA** | NVIDIA 2027 Internships: Software Engineering | Santa Clara, CA | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✓ | 2026-08-20 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Software-Engineering_JR2023495) |
| **NVIDIA** | NVIDIA 2027 Internships: Systems Software Engineering | Santa Clara, CA; US, CA, Santa Clara | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✗ c++ | 2026-08-20 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Systems-Software-Engineering_JR2023492) |
| **NVIDIA** | Performance Testing Engineering Intern - 2027 | Armenia, Yerevan | term dates not stated |  | ✓ | Posted 5 D | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/Armenia-Yerevan/Performance-Testing-Engineering-Intern---2027_JR2028481-1) |
| **NVIDIA** | Software Engineering Intern | Canada; Santa Clara, CA +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | 2026-08-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Software-Engineering_JR2023495) |
| **NVIDIA** | Sparse Linear Algebra Libraries Intern | Santa Clara, CA | Summer 2027 dates not stated |  | ✓ | 2026-10-13 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/Sparse-Linear-Algebra-Libraries-Intern---Summer-2027_JR2027429) |
| **NVIDIA** | Systems Software Engineering Intern | Santa Clara, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✗ c++ | 2026-10-18 | [Apply](https://jobs.nvidia.com/careers/job/893397026201) |
| **NVIDIA** | Systems Software Intern, Aerial PHY | Santa Clara, CA | Summer 2027 dates not stated |  |  | 2026-10-18 | [Apply](https://jobs.nvidia.com/careers/job/893397883732) |
| **Palantir** | Forward Deployed Infrastructure Engineer, Internship - US Government | Washington, D.C.; Palo Alto, CA | term dates not stated | $58/hr | ✓ | 2026-07-10 | [Apply](https://jobs.lever.co/palantir/3db7e40a-28e0-4ad1-96c5-93de5bc96aa9) |
| **Palantir** | Forward Deployed Software Engineer Intern - Commercial | Chicago, IL; NYC | Summer 2027 dates not stated | $58/hr | ✓ | 2026-06-29 | [Apply](https://jobs.lever.co/palantir/d5486403-c050-4920-b2e0-91b69b61ebb2/apply) |
| **Palantir** | Forward Deployed Software Engineer Intern - Warp Speed | NYC; New York, NY | term dates not stated | $58/hr | ✓ | 2026-10-22 | [Apply](https://jobs.lever.co/palantir/b3d81928-6c26-432f-8a0a-36602c2eefcb/apply) |
| **Palantir** | Forward Deployed Software Engineer, Internship - France | New York, NY | term dates not stated | $58/hr | ✓ | 2026-03-10 | [Apply](https://jobs.lever.co/palantir/ac0dc094-2480-43c2-8495-26ade227ff4f) |
| **Palantir** | Forward Deployed Software Engineer, Internship - US Government | Honolulu, HI; New York, NY +1 | term dates not stated | $58/hr | ✓ | 2021-07-01 | [Apply](https://jobs.lever.co/palantir/315f695d-04d1-4a9a-848e-cb2bec7a997e) |
| **Palantir** | Information Security Engineer, Internship | New York, NY | term dates not stated | $61/hr | ✓ | 2022-08-03 | [Apply](https://jobs.lever.co/palantir/ef725594-42dd-4f0d-ba8e-df8179dbc6cb) |

_+452 more in the full list._

</details>

<details>
<summary><strong>📱 Product Management</strong> (48)</summary>

| Company | Role | Location | Dates / note | Pay | Py | Posted | Link |
|---|---|---|---|---|---|---|---|
| **Amazon** | Product Manager Intern - ALA | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10491935/2027-amazon-leadership-accelerator-ala-product-manager-internship) |
| **Databricks** | Product Management Intern | SF; Bellevue, WA +1 | Summer 2027 dates not stated |  |  | 2026-07-16 | [Apply](https://boards.greenhouse.io/embed/job_app?token=6883068002) |
| **Databricks** | Product Management Intern (Summer 2027) | Bellevue, Washington; Mountain View, California +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $54-56/hr | ✓ | 2023-08-17 | [Apply](https://databricks.com/company/careers/open-positions/job?gh_jid=6883068002) |
| **Electronic Arts** | Product Management Intern | Austin, TX | Summer 2027 dates not stated |  |  | 2026-10-06 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Product-Management-Intern-Fan-Care-Community-Care-Summer-2027/216182) |
| **Intuit** | Product Manager Intern | Mountain View, CA; San Diego, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $48-74/hr |  | 2026-09-14 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-product-manager-intern/27595/100620927632) |
| **Microsoft** | Product Manager Intern | Remote; Cambridge, MA | Summer 2027 dates not stated |  |  | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556953113) |
| **Microsoft** | Technical Program Management Intern | Redmond, WA | term dates not stated |  |  | 2026-09-11 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556983238) |
| **TikTok** | AI Governance Strategy Product Manager Intern - Platform Trust and Ecosystem | San Jose, CA | Summer 2027 dates not stated | $35-55/hr | ✓ | 2026-09-03 | [Apply](https://lifeattiktok.com/search/7677493272788683013) |
| **TikTok** | AI Product Manager Intern - Product Social | San Jose, CA | Summer 2027 dates not stated | $35/hr |  | 2026-08-22 | [Apply](https://lifeattiktok.com/search/7675616554318596357) |
| **TikTok** | AI Product Operations Intern | San Jose, CA | term dates not stated | $60/hr |  | 2026-08-06 | [Apply](https://lifeattiktok.com/search/7670420017544251701) |
| **TikTok** | AI Safety Evaluation & Governance Product Manager Intern - Multiple Teams | San Jose, CA | Summer 2027 dates not stated | $35/hr |  | 2026-08-11 | [Apply](https://lifeattiktok.com/search/7670529537944766773) |
| **TikTok** | Creative Product Operations Intern - Multiple Teams | San Jose, CA | Summer 2027 dates not stated | $30-50/hr | ✓ | 2026-10-09 | [Apply](https://lifeattiktok.com/search/7693727532178229509) |
| **TikTok** | Product Management Project Intern - Global Payment | San Jose, CA | Summer 2027 dates not stated | $35/hr |  | 2026-09-22 | [Apply](https://jobs.bytedance.com/en/position/7686394581777631541/detail) |
| **TikTok** | Product Manager Intern - Ads Interface and Platform | San Jose, CA; Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35-55/hr |  | 2026-08-12 | [Apply](https://lifeattiktok.com/search/7672562486917286149) |
| **TikTok** | Product Manager Intern - Commerce Ads | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35-55/hr |  | 2026-08-12 | [Apply](https://lifeattiktok.com/search/7672557943224961333) |
| **TikTok** | Product Manager Intern - Pgc | LA; San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $33/hr |  | 2026-08-24 | [Apply](https://lifeattiktok.com/search/7673365416605010229) |
| **TikTok** | Product Manager Intern - Scaled Growth | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35-55/hr |  | 2026-08-14 | [Apply](https://lifeattiktok.com/search/7673559305519794437) |
| **TikTok** | Product Manager Intern - Signal and Identity Product | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35-55/hr |  | 2026-08-12 | [Apply](https://lifeattiktok.com/search/7672554809555192117) |
| **TikTok** | Product Operations Intern - Apps and API | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $48/hr |  | 2026-08-05 | [Apply](https://lifeattiktok.com/search/7669927344569764101) |
| **TikTok** | Strategy Product Manager Intern - Platform Responsibility | San Jose, CA | Summer 2027 dates not stated | $35/hr |  | 2026-08-06 | [Apply](https://lifeattiktok.com/search/7670420287191517493) |
| **Workday** | Product Manager Intern | Pleasanton, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $74/hr |  | 2026-10-09 | [Apply](https://workday.wd5.myworkdayjobs.com/Workday_Early_Career/job/USA-CA-Pleasanton/Product-Manager-Intern_JR-0110813) |
| **C3 AI** | AI Product Manager Intern | Redwood City, CA | Summer 2027 dates not stated | $46-58/hr |  | 2026-10-02 | [Apply](https://job-boards.greenhouse.io/c3ascend/jobs/8860562002) |
| **C3 AI** | AI Product Manager Intern - Summer 2027 | Redwood City, CA | Summer 2027 dates not stated | $46-58/hr |  | 2026-10-02 | [Apply](https://c3.ai/job-description/8860563002?gh_jid=8860563002) |
| **TD Securities** | Graduate Leadership Program Consumer Deposit and Payment Products Intern | Greenville, SC; Mt Laurel Township, NJ +3 | Summer 2027 dates not stated; 10-week program | $65-67/hr |  | 2026-09-01 | [Apply](https://td.wd3.myworkdayjobs.com/TD_Bank_Careers/job/New-York-New-York/XMLNAME-2027-Summer-Internship-Graduate-Leadership-Program--Consumer-Deposit-and-Payment-Products_R_1508783) |
| **American Express** | Product Development Intern - 2027 Product Development - US Consumer Services | NYC | Summer 2027 dates not stated |  |  | 2026-09-01 | [Apply](https://egug.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/26011605) |
| **American Express** | Product Development Intern - US Consumer Services | NYC | Summer 2027 dates not stated |  |  | 2026-08-04 | [Apply](https://egug.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/26012174) |
| **American Express** | Product Management Intern - Global Merchant & Network Services | NYC; Phoenix, AZ | Summer 2027 dates not stated; 10-week program |  |  | 2026-08-05 | [Apply](https://egug.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/26012152) |
| **BNY** | Product Management Intern | Lake Mary, FL | Summer 2027 dates not stated; 10-week program |  |  | 2026-10-01 | [Apply](https://eofe.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/82784) |
| **BNY** | Product Management Intern - Product Management | NYC | Summer 2027 dates not stated; 10-week program |  |  | 2026-08-24 | [Apply](https://eofe.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/81345) |
| **BNY** | Product Management Intern - Program Management | Pittsburgh, PA | Summer 2027 dates not stated; 10-week program |  |  | 2026-10-01 | [Apply](https://eofe.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/82782) |
| **DTCC** | Product Management Intern - 2027 Internship Program | Tampa, FL; Jersey City, NJ | Summer 2027 dates not stated; 10-week program |  |  | 2026-08-25 | [Apply](https://ebxr.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/214410) |
| **Federal Reserve** | Supervision & Regulation Intern - Business Relationship | Atlanta, GA | Summer 2027 dates not stated; 10-week program |  |  | 2026-11-02 | [Apply](https://rb.wd5.myworkdayjobs.com/en-US/FRS/job/Atlanta-GA/XMLNAME-2027-Summer-Internship-Program---Supervision---Regulation--Business-Relationship-_R-0000033860) |
| **Intercontinental Exchange** | Product Management Intern | Atlanta, GA | Summer 2027 dates not stated |  |  | 2026-10-23 | [Apply](https://ice.jibeapply.com/jobs/14065?icims=1) |
| **Coinbase** | Associate Product Manager Intern | Hybrid - San Francisco, CA | term dates not stated; 12+ weeks, so a late-July start would run into October | $55/hr |  | 2026-09-08 | [Apply](https://www.coinbase.com/careers/positions/8168322?gh_jid=8168322) |
| **Coinbase** | Associate Product Manager Intern - Multiple Teams | SF | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $55/hr |  | 2026-09-09 | [Apply](https://boards.greenhouse.io/embed/job_app?token=8168322) |
| **Visa** | Product Management Intern - Data and AI Team | Foster City, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $46-55/hr |  | 2026-10-27 | [Apply](https://visa.wd5.myworkdayjobs.com/Visa_Early_Careers/job/US---Foster-City-CA/Product-Management-Intern--Data-and-AI-Team---Summer-2027_REF089881W) |
| **Visa** | Product Management Intern - Data and AI Team - Summer 2027 | Foster City, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $46-55/hr |  | 2026-10-28 | [Apply](https://visa.wd5.myworkdayjobs.com/en-US/visa_early_careers/job/US---Foster-City-CA/Product-Management-Intern--Data-and-AI-Team---Summer-2027_REF089881W) |
| **Appian** | Product Manager Intern | McLean, VA | Summer 2027 dates not stated; 10-week program | $50/hr |  | 2026-07-23 | [Apply](https://job-boards.greenhouse.io/appian/jobs/8041243) |
| **Applied Materials** | Data Intelligence/Technical Program Manager Intern | Santa Clara, CA | Summer 2027 dates not stated |  | ✓ | 2026-11-02 | [Apply](https://amat.wd1.myworkdayjobs.com/External/job/Santa-ClaraCA/Summer-2027-Data-Intelligence-Technical-Program-Management-Intern--Master-s--Santa-Clara--CA-_R2627705) |
| **Cadence** | Product Management Intern | Remote in USA; Remote +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $55/hr |  | 2026-10-06 | [Apply](https://job-boards.greenhouse.io/solutions/jobs/4715294006) |
| **Hewlett Packard Enterprise** | Product Management Intern | Andover, MA; Bloomington, MN +18 | term dates not stated |  |  | 2026-08-28 | [Apply](https://hpe.wd5.myworkdayjobs.com/jobsathpe/job/Spring-Texas-United-States-of-America/Product-Management-Intern--Master-s-MBA-_1213634) |
| **Micron** | CMBU Product Management Intern | San Jose, CA | term dates not stated | $56/hr | ✓ | 2026-10-27 | [Apply](https://micron.wd1.myworkdayjobs.com/External/job/San-Jose-CA/Intern---CMBU-Product-Management_JR115941) |
| **Micron** | NAND Storage Strategic Roadmap Planning Intern | Boise, ID | term dates not stated |  |  | 2026-10-27 | [Apply](https://micron.wd1.myworkdayjobs.com/External/job/Boise-ID---Main-Site/Intern---NAND-Storage-Strategic-Roadmap-Planning_JR115838) |
| **Motorola Solutions** | Program Manager Intern - Summer 2027 | Plantation, FL | Summer 2027 dates not stated |  |  | Posted 4 D | [Apply](https://motorolasolutions.wd5.myworkdayjobs.com/Careers/job/Plantation-FL/Program-Manager-Intern---Summer-2027_R69762) |
| **Illinois Tool Works** | Product Management Intern | Troy, OH | Summer 2027 dates not stated |  |  | 2026-09-15 | [Apply](https://careers.itw.com/global/en/job/JR10105) |
| **Nike** | Merchandising Graduate Intern | Boston, MA | term dates not stated | $31/hr |  | 2026-10-23 | [Apply](https://nike.wd1.myworkdayjobs.com/nke/job/Boston-Massachusetts/Converse-Merchandising-Graduate-Internship_R-96257) |
| **PACCAR** | Product Planning Intern | Denton, TX | Summer 2027 dates not stated |  |  | 2026-11-03 | [Apply](https://jobs.paccar.com/job/Denton-2027-Summer-Internship-Product-Planning-TX-76205-7864/1453917433/?ats=successfactors) |
| **Schneider Electric** | Graduate Product Management Intern | Nashville, TN | Summer 2027 dates not stated | $30-36/hr |  | 2026-09-30 | [Apply](https://se.jibeapply.com/jobs/135310?icims=1) |

</details>

<details>
<summary><strong>📊 Data / Analytics / ML</strong> (409)</summary>

| Company | Role | Location | Dates / note | Pay | Py | Posted | Link |
|---|---|---|---|---|---|---|---|
| **Adobe** | 2027 Intern - AI & Architecture | San Jose, CA | term dates not stated | $55/hr |  | 2026-10-20 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---AI---Architecture_R172998) |
| **Adobe** | 2027 Intern - Applied and Research Scientist/Engineer | College, AK +3 | term dates not stated | $55/hr |  | 2026-10-06 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Applied-and-Research-Scientist-Engineer_R172064) |
| **Adobe** | 2027 Intern - Data - AI & Innovation | San Jose, CA | term dates not stated | $55/hr |  | 2026-10-20 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Adobe** | AI & Architecture Intern | San Jose, CA | Summer 2027 dates not stated | $38-51/hr |  | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---AI---Architecture_R172998) |
| **Adobe** | Applied and Research Scientist/Engineer Intern | Cambridge, MA; Seattle, WA +4 | term dates not stated | $45-61/hr |  | 2026-10-05 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Applied-and-Research-Scientist-Engineer_R172064) |
| **Adobe** | Data, AI & Innovation Intern | San Jose, CA | Summer 2027 dates not stated | $38-51/hr |  | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Amazon** | 2027 Quantum Applied Science Internship, Quantum Technologies team | Pasadena, California, USA | term dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | September  | [Apply](https://www.amazon.jobs/en/jobs/10556930/2027-quantum-applied-science-internship-quantum-technologies-team) |
| **Amazon** | Applied Science Intern - Computer Vision | Seattle, WA | term dates not stated |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10564601/2027-applied-science-internship-computer-vision-united-states-phd-student-science-recruiting) |
| **Amazon** | Applied Science Intern - Gen AI & Large Language Models | Cambridge, MA; Boston, MA +6 | Summer 2027 dates not stated |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10564589/2027-applied-science-internship-gen-ai-large-language-models-united-states-phd-student-science-recruiting) |
| **Amazon** | Applied Science Intern - Information & Knowledge Management | Seattle, WA | Summer 2027 dates not stated |  | ✓ | 2026-09-30 | [Apply](https://amazon.jobs/en/jobs/10564585/2027-summer-applied-science-internship-information-knowledge-management-machine-learning-united-states-phd-student-science-recruiting) |
| **Amazon** | Applied Science Intern - Natural Language Processing and Speech Technologies | Cambridge, MA; Boston, MA +5 | Summer 2027 dates not stated |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10564593/2027-applied-science-internship-natural-language-processing-and-speech-technologies-united-states-phd-student-science-recruiting) |
| **Amazon** | Applied Scientist Intern - Automated Reasoning | Seattle, WA | term dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10552930/2027-applied-science-internship-automated-reasoning-united-states-phd-student-science-recruiting-automated-reasoning) |
| **Amazon** | Applied Scientist Intern - Reinforcement Learning & Optimization - Machine Learning | Palo Alto, CA; Boston, MA +6 | Summer 2027 dates not stated |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10564597/2027-applied-science-internship-reinforcement-learning-optimization-machine-learning-united-states-phd-student-science-recruiting) |
| **Amazon** | Data Science Intern | Seattle, WA | term dates not stated |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10556927/2027-data-science-internship-united-states-phd-or-masters-student) |
| **Amazon** | Research Science Intern | Cambridge, MA; Boston, MA +6 | term dates not stated |  |  | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10564602/2027-research-science-internship-united-states-phd-student-science-recruiting) |
| **Apple** | Applied Data Solutions Program Intern | Austin, TX; Cupertino, CA | Summer 2027 dates not stated |  |  | 2026-08-27 | [Apply](https://jobs.apple.com/en-us/details/200673612-0157/applied-data-solutions-program-internships-summer-2027) |
| **Apple** | Machine Learning and Artificial Intelligence Undergrad Intern | United States | Summer 2027 dates not stated |  |  | 2026-05-21 | [Apply](https://jobs.apple.com/en-us/details/200664780/machine-learning-and-artificial-intelligence-undergrad-internships) |
| **Bloomberg** | 2027 Summer News Internship - Data Reporter | Arlington, VA - 1801 S Bell (INDG) | Summer 2027 dates not stated |  | ✓ | Posted 30+ | [Apply](https://bloomberg.wd1.myworkdayjobs.com/Bloombergindustrygroup_External_Career_Site/job/Arlington-VA---1801-S-Bell-INDG/XMLNAME-2027-Summer-News-Internship---Data-Reporter_144774) |
| **Cisco** | Data Analyst I - Intern - United States | San Jose, CA +2 | term dates not stated |  |  | 2026-10-31 | [Apply](https://cisco.wd5.myworkdayjobs.com/en-US/cisco_careers/job/San-Jose-California-US/Data-Analyst-I--Intern----United-States_2024561-1) |
| **Databricks** | Data Science Intern | SF; Mountain View, CA | term dates not stated |  |  | 2026-10-22 | [Apply](https://boards.greenhouse.io/embed/job_app?token=6866538002) |
| **Databricks** | Data Science Intern (2027 Start) | Mountain View, California; San Francisco, California | term dates not stated | $54-60/hr | ✓ | 2023-08-17 | [Apply](https://databricks.com/company/careers/open-positions/job?gh_jid=6866538002) |
| **Electronic Arts** | AI Enablement Intern | Austin, TX | Summer 2027 dates not stated |  |  | 2026-09-30 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/AI-Enablement-Intern-Summer-2027/216185) |
| **Electronic Arts** | Data and AI Engineer Intern | Austin, TX | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | 2026-10-12 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Data-AI-Engineering-Intern-Summer-2027/216238) |
| **Expedia** | Applied Science Intern | Seattle, WA; Austin, TX +1 | Summer 2027 dates not stated | $56/hr | ✓ | 2026-10-05 | [Apply](https://expedia.wd108.myworkdayjobs.com/private/job/Austin-Domain-11---HomeAway/Applied-Science-Intern---PhD---2027---Austin--San-Jose--Seattle_R-110382) |
| **Google** | Business Data Scientist Intern | Palo Alto, CA; Cambridge, MA +29 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | 2026-09-14 | [Apply](https://www.google.com/about/careers/applications/jobs/results/134577198026629830) |
| **Intel** | AI Solution Architect Graduate Intern | Santa Clara, CA; US, California, Santa Clara | term dates not stated | $64/hr | ✓ | 2026-10-06 | [Apply](https://intel.wd1.myworkdayjobs.com/en-US/external/job/US-California-Santa-Clara/AI-Solution-Architect-Graduate-Intern_JR0287530) |
| **Intel** | Research Scientist Intern - Graphics, ML | Virtual US | term dates not stated | $82/hr | ✓ | Posted 30+ | [Apply](https://intel.wd1.myworkdayjobs.com/External/job/Virtual-US/Research-Scientist-Intern---Graphics--ML_JR0287525) |
| **Intuit** | AI Research Intern | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $64-87/hr | ✓ | 2026-09-14 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-phd-ai-research-intern/27595/100620927776) |
| **Intuit** | AI Scientist Intern | NYC; Mountain View, CA +2 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $43-87/hr | ✓ | 2026-09-14 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-ai-science-intern/27595/100620927536) |
| **Intuit** | Business Data Analyst Intern - Strategy & Planning | Mountain View, CA | Summer 2027 dates not stated; 17+ weeks, so a late-July start would run into October | $31-62/hr |  | 2026-10-01 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-business-data-analyst-intern-strategy-and-planning/27595/101410847360) |
| **Intuit** | Finance Transformation & Analytics Intern | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $37-57/hr | ✓ | 2026-10-02 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-finance-transformation-and-analytics-intern/27595/101444103184) |
| **Lyft** | Applied Scientist Intern | SF | Summer 2027 dates not stated | $64-68/hr | ✓ | 2026-09-28 | [Apply](https://app.careerpuck.com/job-board/lyft/job/8843341002?gh_jid=8843341002) |
| **Lyft** | Data Science Intern - Algorithms | SF; NYC | Summer 2027 dates not stated | $58/hr | ✓ | 2026-09-11 | [Apply](https://app.careerpuck.com/job-board/lyft/job/8767723002?gh_jid=8767723002) |
| **Meta** | Data Engineer Intern - Product Analytics - Summer 2027 | Menlo Park, CA +2 | Summer 2027 dates not stated | $50/hr |  | 2026-08-01 | [Apply](https://www.metacareers.com/jobs/1373603594867455) |
| **Meta** | Data Scientist Intern - Product Analytics | Menlo Park, CA; NYC +1 | Summer 2027 dates not stated | $50/hr |  | 2026-10-06 | [Apply](https://www.metacareers.com/jobs/1633096478817942) |
| **Meta** | Research Scientist Intern - Foundation Model Optimization | Burlingame, CA; Menlo Park, CA | term dates not stated |  |  | 2026-10-27 | [Apply](https://www.metacareers.com/jobs/1435245618154892) |
| **Meta** | Research Scientist Intern - Low-Power Scene Reconstruction for AR/VR | Burlingame, CA; Redmond, WA | term dates not stated | $50/hr |  | 2026-10-21 | [Apply](https://www.metacareers.com/jobs/1075160338670575) |
| **Meta** | Research Scientist Intern - Neural Representations Compression | Redmond, WA | term dates not stated | $50/hr |  | 2026-10-27 | [Apply](https://www.metacareers.com/jobs/2368433610564528) |
| **Microsoft** | Applied Scientist Intern | Redmond, WA | term dates not stated | $52/hr |  | 2026-10-07 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557050150) |
| **Microsoft** | Applied Scientist Intern, Turing | Redmond, WA | Summer 2027 dates not stated |  |  | 2026-10-29 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557050150) |
| **Microsoft** | Research Intern | Redmond, WA; Mountain View, CA | term dates not stated |  |  | 2026-10-22 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557045445) |
| **Microsoft** | Research Intern - Agentic Data Memory | Redmond, WA | term dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | 2026-10-13 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557040344) |
| **Microsoft** | Research Intern - Agentic Graph Learning | Redmond, WA | term dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | 2026-10-13 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557039243) |
| **Microsoft** | Research Intern - Algorithms Group - Generative Modeling | Redmond, WA | term dates not stated; 12+ weeks, so a late-July start would run into October | $52/hr |  | 2026-10-19 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557043740) |
| **Microsoft** | Research Intern - Algorithms Group: Theory | Redmond, WA | term dates not stated | $52/hr |  | 2026-10-24 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557045963) |
| **Microsoft** | Research Intern - Data Systems | Redmond, WA | term dates not stated; 12+ weeks, so a late-July start would run into October |  |  | 2026-09-26 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557008574) |
| **Microsoft** | Research Intern - Extended Perception, Interaction & Cognition | Redmond, WA | term dates not stated; 12+ weeks, so a late-July start would run into October |  |  | 2026-10-19 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557043754) |
| **Microsoft** | Research Intern - Foundational Models & Agent | Redmond, WA | term dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557052982) |
| **Microsoft** | Research Intern - Interactive Multimodal Futures Group - Situated, Social & Ubiquitous Computing | Redmond, WA | term dates not stated; 12+ weeks, so a late-July start would run into October |  |  | 2026-10-14 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557041012) |
| **Microsoft** | Research Intern - Machine Learning and Optimization | Redmond, WA | term dates not stated | $52/hr |  | 2026-10-28 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557049981) |
| **Microsoft** | Research Intern - Machine Learning and Statistics | Cambridge, MA; Redmond, WA | term dates not stated; 12+ weeks, so a late-July start would run into October | $52/hr |  | 2026-10-14 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557040502) |
| **Microsoft** | Research Intern - Machine Learning at MSR NYC | New York City, NY +1 | term dates not stated | $52/hr |  | 2026-10-17 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557042145) |
| **Microsoft** | Research Intern - MSR AI Interaction and Learning | Redmond, WA; NYC | term dates not stated; 12+ weeks, so a late-July start would run into October | $52/hr |  | 2026-10-16 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557042156) |
| **Microsoft** | Research Intern - MSR Systems Research Group | Redmond, WA | term dates not stated |  |  | 2026-10-28 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557050039) |
| **Microsoft** | Research Intern - Office of Applied Research | Redmond, WA; NYC | term dates not stated; 12+ weeks, so a late-July start would run into October |  |  | 2026-10-30 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557051409) |
| **Microsoft** | Research Intern - Security Research Group, Microsoft Research Redmond | United States, Washington, Redmond | term dates not stated; 12+ weeks, so a late-July start would run into October |  |  | 2026-10-01 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557022480) |
| **Microsoft** | Research Intern - Speech Processing | Redmond, WA | term dates not stated; 12+ weeks, so a late-July start would run into October |  |  | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557053016) |
| **Microsoft** | Researcher Intern - Coreai | Redmond, WA; Mountain View, CA | Summer 2027 dates not stated |  | ✓ | 2026-10-15 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557027387) |
| **Microsoft** | Security Research Intern | Redmond, WA | Summer 2027 dates not stated |  |  | 2026-10-22 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557044769) |
| **NVIDIA** | Deep Learning Computer Architecture Intern | Santa Clara, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | 2026-08-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning-Computer-Architecture_JR2023491) |

_+349 more in the full list._

</details>

<details>
<summary><strong>📈 Finance / Investment / Quant</strong> (114)</summary>

| Company | Role | Location | Dates / note | Pay | Py | Posted | Link |
|---|---|---|---|---|---|---|---|
| **Amazon** | Loss Prevention Specialist Intern 2027 | Fort Worth, Texas, USA | term dates not stated; 10-week program |  |  | August 14, | [Apply](https://www.amazon.jobs/en/jobs/10502807/loss-prevention-specialist-intern-2027) |
| **Microsoft** | Research Intern - Quantum Algorithms | Redmond, WA | term dates not stated; 12+ weeks, so a late-July start would run into October | $52/hr |  | 2026-10-01 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557021663) |
| **Palantir** | Finance Operator Intern | New York, NY | term dates not stated |  |  | 2026-10-31 | [Apply](https://jobs.lever.co/palantir/bd7766c4-6aea-4b37-8d47-a8864bb9bd69) |
| **Akuna Capital** | Quantitative Development & Strategy Intern | Chicago, IL; Chicago | Summer 2027 dates not stated; 10-week program | $75/hr | ✓ | 2026-07-13 | [Apply](https://www.akunacapital.com/careers/job/8021481/?gh_jid=8021481) |
| **Akuna Capital** | Quantitative Research Intern | Chicago, IL; Chicago | Summer 2027 dates not stated; 10-week program | $75/hr | ✓ | 2026-07-13 | [Apply](https://www.akunacapital.com/careers/job/8036614/?gh_jid=8036614) |
| **Aquatic Capital Management** | Quantitative Researcher – Intern | London, UK; Chicago, IL | Summer 2027 dates not stated |  | ✓ | 2026-04-01 | [Apply](https://job-boards.greenhouse.io/aquaticcapitalmanagement/jobs/8489186002) |
| **Arrowstreet Capital** | Investment Processes Intern | Boston, MA | Summer 2027 dates not stated | $88-125/hr | ✓ | 2026-10-27 | [Apply](https://arrowstreetcapital.wd5.myworkdayjobs.com/Campus_Careers/job/Boston/Investment-Processes-Intern--Summer-2027_R1557) |
| **Arrowstreet Capital** | Quantitative Researcher Intern | Boston, MA | Summer 2027 dates not stated | $88-125/hr | ✓ | 2026-07-10 | [Apply](https://arrowstreetcapital.wd5.myworkdayjobs.com/Campus_Careers/job/Boston/Quantitative-Researcher-Intern--Summer-2027_R1505) |
| **Belvedere Trading** | Quantitative Trading Intern | Chicago, IL | Summer 2027 dates not stated | $67/hr | ✓ | 2026-08-17 | [Apply](https://jobs.lever.co/belvederetrading/cbde47db-c60b-4339-a8f4-a8e4f30505ab) |
| **Belvedere Trading** | Quantitative Trading Intern - Summer 2027 | Chicago, IL | Summer 2027 dates not stated | $72/hr | ✓ | 2026-08-07 | [Apply](https://jobs.lever.co/belvederetrading/cbde47db-c60b-4339-a8f4-a8e4f30505ab/apply) |
| **Citadel** | Quantitative Research Analyst - Intern - US | Miami, FL +1 | term dates not stated | $125/hr |  | 2026-07-16 | [Apply](https://www.citadel.com/careers/details/quantitative-research-analyst-intern-us/) |
| **Citadel** | Quantitative Trader: Equity Quantitative Research - Intern - US | Miami, FL +1 | term dates not stated | $125/hr |  | 2026-07-16 | [Apply](https://www.citadel.com/careers/details/quantitative-trader-equity-quantitative-research-intern-us/) |
| **Citadel Securities** | Quantitative Trader - Intern - US - Trading and Research | Miami, FL +1 | term dates not stated | $125/hr |  | 2026-07-16 | [Apply](https://www.citadelsecurities.com/careers/details/quantitative-trader-intern-us/) |
| **DRW** | Quantitative Research Intern | Chicago, IL; New York City, NY +1 | Summer 2027 dates not stated | $120-144/hr | ✓ | 2026-07-14 | [Apply](https://www.drw.com/work-at-drw/listings/quantitative-research-intern-3413670) |
| **DRW** | Quantitative Trading Analyst Intern | Chicago, IL | Summer 2027 dates not stated | $120/hr | ✓ | 2026-07-14 | [Apply](https://www.drw.com/work-at-drw/listings/quantitative-trading-analyst-intern-3375090) |
| **DRW** | Venture Capital Analyst Intern | Chicago, IL | term dates not stated; 10-week program | $38/hr |  | 2026-07-13 | [Apply](https://job-boards.greenhouse.io/drweng/jobs/7993004) |
| **DV Trading** | Quantitative Research Intern - DV Equities | NYC | Summer 2027 dates not stated | $50/hr | ✓ | 2026-09-11 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4733133005) |
| **DV Trading** | Quantitative Risk Intern | Chicago, IL | Summer 2027 dates not stated | $35-40/hr | ✓ | 2026-08-04 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4719118005) |
| **DV Trading** | Quantitative Trading Intern - DV Equities | NYC | Summer 2027 dates not stated | $50/hr | ✓ | 2026-09-11 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4702083005) |
| **DV Trading** | Trading Intern - Summer 2027 - DV Commodities | NYC | Summer 2027 dates not stated | $50/hr | ✓ | 2026-08-17 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4719134005) |
| **Hudson River Trading** | Algorithm Development (Quant Research & Trading) Internship – Summer 2027 | London, United Kingdom; New York, NY, United States +1 | Summer 2027 dates not stated |  | ✓ | 2026-07-13 | [Apply](https://www.hudsonrivertrading.com/careers/job/?gh_jid=7964062) |
| **Jane Street** | Quantitative Researcher Intern | NYC | term dates not stated |  | ✓ | 2026-07-06 | [Apply](https://job-boards.greenhouse.io/janestreet/jobs/8498547002) |
| **Jump Trading** | Campus Quantitative Researcher - UG/MS - Intern | Chicago, IL +1 | term dates not stated; 10-week program | $138/hr | ✓ | 2026-07-10 | [Apply](https://www.jumptrading.com/hr/job?gh_jid=7982648) |
| **Jump Trading** | Campus Quantitative Trader - Intern | Chicago, IL +1 | term dates not stated; 10-week program | $138/hr |  | 2026-07-10 | [Apply](https://www.jumptrading.com/hr/job?gh_jid=7848371) |
| **Jump Trading** | Quantitative Trader Intern | Chicago, IL; New York, NY | Summer 2027 dates not stated; 10-week program | $144/hr |  | 2026-07-09 | [Apply](https://www.jumptrading.com/hr/job?gh_jid=7848371) |
| **Man Group** | Systematic Fast Trading Intern | New York | term dates not stated; 10-week program | $50-60/hr | ✓ | 2026-10-25 | [Apply](https://job-boards.eu.greenhouse.io/mangroup/jobs/5012801101) |
| **Man Group** | Systematic Quant Intern | Massachusetts | Summer 2027 dates not stated | $55-65/hr | ✓ | 2026-11-03 | [Apply](https://job-boards.eu.greenhouse.io/mangroup/jobs/5012811101) |
| **Peak6** | Trading Internship for Women+ Summer 2027 | Chicago, IL | Summer 2027 dates not stated | $60-75/hr | ✓ | Posted 30+ | [Apply](https://peak6group.wd1.myworkdayjobs.com/PEAK6/job/Chicago-IL/Trading-Internship-for-Women--Summer-2027_JR105061) |
| **Tower Research Capital** | Intern | Gift City | term dates not stated |  | ✓ | 2026-09-07 | [Apply](https://www.tower-research.com/open-positions/?gh_jid=8184771) |
| **TransMarket Group** | Algorithmic Trader Intern | Chicago, Illinois, United States | term dates not stated |  | ✓ | 2026-08-03 | [Apply](https://job-boards.greenhouse.io/transmarketgroup/jobs/5151581007?gh_jid=5151581007) |
| **TransMarket Group** | Quantitative Trader Intern | Chicago, IL | Summer 2027 dates not stated |  | ✓ | 2026-06-02 | [Apply](https://job-boards.greenhouse.io/transmarketgroup/jobs/5151569007?gh_jid=5151569007) |
| **Two Sigma** | Quantitative Researcher Intern | NYC | Summer 2027 dates not stated; 10-week program | $145/hr | ✓ | 2026-08-02 | [Apply](https://twosigma.avature.net/careers/JobDetail/13945) |
| **Virtu Financial** | Quantitative Researcher Internship | NYC | Summer 2027 dates not stated; 10-week program | $125-145/hr | ✓ | 2026-07-22 | [Apply](https://job-boards.greenhouse.io/virtu/jobs/8624424002) |
| **Voloridge Investment Management** | Quantitative Research Intern | Jupiter, FL | Summer 2027 dates not stated; 10-week program | $48/hr | ✓ | 2026-07-14 | [Apply](https://job-boards.greenhouse.io/voloridgeinvestmentmanagement/jobs/4226247009) |
| **Voloridge Investment Management** | Quantitative Trading Intern 2027 | Jupiter, FL | term dates not stated |  | ✓ | 2026-09-24 | [Apply](https://job-boards.greenhouse.io/voloridgeinvestmentmanagement/jobs/4405530009) |
| **AQR** | Arbitrage Research Analyst Intern, Arbitrage | Greenwich, CT | Summer 2027 dates not stated |  | ✓ | 2026-08-25 | [Apply](https://careers.aqr.com/jobs/open-positions/greenwich-ct/aqr-arbitrage-2027-research-summer-analyst-/8156993?gh_jid=8156993) |
| **AQR** | Arbitrage Research Summer Analyst Intern - AQR Arbitrage | Greenwich, CT | Summer 2027 dates not stated |  | ✓ | 2026-08-25 | [Apply](https://careers.aqr.com/jobs?gh_jid=8156993&gh_jid=8156993) |
| **AQR** | Quantitative Prediction Markets Research Summer Analyst Intern | Greenwich, CT | Summer 2027 dates not stated; 10-week program |  | ✓ | 2026-08-11 | [Apply](https://careers.aqr.com/jobs?gh_jid=8122378&gh_jid=8122378) |
| **AQR** | Research Summer Analyst Intern | Greenwich, CT | Summer 2027 dates not stated; 10-week program |  | ✓ | 2026-05-15 | [Apply](https://careers.aqr.com/jobs?gh_jid=7895583&gh_jid=7895583) |
| **Brevan Howard** | 2027 Summer Internship Program – Systematic Trading, New York | New York | Summer 2027 dates not stated; 10-week program | $96/hr | ✓ | Posted 30+ | [Apply](https://brevanhoward.wd3.myworkdayjobs.com/BH_ExternalCareers/job/New-York/XMLNAME-2027-Summer-Internship-Program---Systematic-Trading--New-York_JR101591) |
| **Brevan Howard** | 2027 Summer Internship Program – Trading, New York | New York | Summer 2027 dates not stated; 10-week program | $96/hr | ✓ | Posted 30+ | [Apply](https://brevanhoward.wd3.myworkdayjobs.com/BH_ExternalCareers/job/New-York/XMLNAME-2027-Summer-Internship-Program---Trading--New-York_JR101583) |
| **Brevan Howard** | 2027 Summer Internship Program – Venture Capital, New York | New York | Summer 2027 dates not stated; 10-week program | $72/hr |  | Posted 30+ | [Apply](https://brevanhoward.wd3.myworkdayjobs.com/BH_ExternalCareers/job/New-York/XMLNAME-2027-Summer-Internship-Program---Venture-Capital--New-York_JR101594) |
| **Brevan Howard** | Systematic Trading Intern | NYC | Summer 2027 dates not stated |  |  | 2026-09-09 | [Apply](https://wd3.myworkdaysite.com/recruiting/brevanhoward/BH_ExternalCareers/job/New-York/XMLNAME-2027-Summer-Internship-Program---Systematic-Trading--New-York_JR101591) |
| **Brevan Howard** | Trading Intern - Trading | NYC | Summer 2027 dates not stated |  |  | 2026-09-07 | [Apply](https://wd3.myworkdaysite.com/recruiting/brevanhoward/BH_ExternalCareers/job/New-York/XMLNAME-2027-Summer-Internship-Program---Trading--New-York_JR101583) |
| **Bridgewater Associates** | 2027 Investment Associate Intern | New York City | term dates not stated; 8-week program | $34/hr |  | 2026-01-28 | [Apply](https://job-boards.greenhouse.io/bridgewater89/jobs/8395041002) |
| **Jain Global** | Quant Modelling Intern | NYC | Summer 2027 dates not stated |  | ✓ | 2026-10-07 | [Apply](https://jainglobal.wd5.myworkdayjobs.com/ExternalSite/job/New-York-New-York/Quant-Modelling-Intern_JR100616) |
| **Jain Global** | Quant Research Intern - Systematic Trading | NYC | Summer 2027 dates not stated | $88/hr | ✓ | 2026-10-05 | [Apply](https://jainglobal.wd5.myworkdayjobs.com/ExternalSite/job/New-York-New-York/Quant-Research-Intern--Systematic-Trading_JR100603-1) |
| **Jain Global** | Quantitative Research Intern - Equity Arbitrage | NYC | term dates not stated | $88/hr | ✓ | 2026-10-19 | [Apply](https://jainglobal.wd5.myworkdayjobs.com/ExternalSite/job/New-York-New-York/Quantitative-Research-Intern---Equity-Arbitrage_JR100617-1) |
| **Point72** | Investment Analyst Intern, Point72 Academy | New York, NY; San Francisco, CA +3 | Summer 2027 dates not stated |  |  | 2026-04-19 | [Apply](https://careers.point72.com/CSJobDetail?jobName=2027-point72-academy-investment-analyst-summer-internship-program-us&jobCode=CPA-0014081) |
| **Point72** | Quantitative Research Intern | New York, Seattle | term dates not stated |  | ✓ | 2024-08-15 | [Apply](https://boards.greenhouse.io/point72/jobs/7297667002?gh_jid=7297667002) |
| **Schonfeld** | Quantitative Research Intern | Miami, FL | Summer 2027 dates not stated; 10-week program | $84/hr | ✓ | 2026-09-04 | [Apply](https://job-boards.greenhouse.io/schonfeld/jobs/8172076) |
| **Viking Global Investors** | Private Equity Investment Intern - Summer 2027 | New York, NY | Summer 2027 dates not stated | $120/hr |  | 2026-09-23 | [Apply](https://job-boards.greenhouse.io/vikingglobalinvestors/jobs/6203684004) |
| **Viking Global Investors** | Public Equity Investment Intern - Summer 2027 | New York, NY | Summer 2027 dates not stated | $120/hr |  | 2026-10-15 | [Apply](https://job-boards.greenhouse.io/vikingglobalinvestors/jobs/6203682004) |
| **Barclays** | Banking Associate Summer Internship Program 2027 Chicago | Chicago, 190 South LaSalle Street | Summer 2027 dates not stated | $84/hr |  | Posted 30+ | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Chicago-190-South-LaSalle-Street/Banking-Associate-Summer-Internship-Program-2027-Chicago_JR-0000130640) |
| **Barclays** | Banking Associate Summer Internship Program 2027 Houston | Houston, 609 Main Street | Summer 2027 dates not stated |  |  | Posted 30+ | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Houston-609-Main-Street/Banking-Associate-Summer-Internship-Program-2027-Houston_JR-0000130641) |
| **Barclays** | Banking Associate Summer Internship Program 2027 New York | New York, 745 7th Avenue | Summer 2027 dates not stated | $84/hr |  | Posted 30+ | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/New-York-745-7th-Avenue/Banking-Associate-Summer-Internship-Program-2027-New-York_JR-0000130643) |
| **Barclays** | Banking Associate Summer Internship Program 2027 San Francisco | San Francisco, Four Embarcadero Center | Summer 2027 dates not stated | $84/hr |  | Posted 30+ | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/San-Francisco-Four-Embarcadero-Center/Banking-Associate-Summer-Internship-Program-2027-San-Francisco_JR-0000130642) |
| **Barclays** | International Corporate Banking Summer Internship Programme 2027 London | Canary Wharf, 1 Churchill Place | Summer 2027 dates not stated |  |  | Posted 30+ | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Canary-Wharf-1-Churchill-Place/International-Corporate-Banking-Summer-Internship-Programme-2027-London_JR-0000123989) |
| **Barclays** | Private Bank and Wealth Management Summer Internship Programme 2027 Jersey | Jersey, 5-6 Esplanade | Summer 2027 dates not stated |  |  | Posted 12  | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Jersey-5-6-Esplanade/Private-Bank-and-Wealth-Management-Summer-Internship-Programme-2027-Jersey_JR-0000125565) |
| **Barclays** | Sustainable Finance Summer Internship Programme 2027 London | Canary Wharf, 1 Churchill Place | Summer 2027 dates not stated |  |  | Posted Yes | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Canary-Wharf-1-Churchill-Place/Sustainable-Finance-Summer-Internship-Programme-2027-London_JR-0000124202) |

_+54 more in the full list._

</details>

---

## 🆕 New since last scan

_First scan: everything is new. Later scans list only roles that appeared since the previous run._


---

## How it works

1. **Community lists** — pulls every active posting from [SimplifyJobs/Summer2027-Internships](https://github.com/SimplifyJobs/Summer2027-Internships) (summer + off-season `listings.json`), [vanshb03/Summer2027-Internships](https://github.com/vanshb03/Summer2027-Internships), and speedyapply's [2027 SWE](https://github.com/speedyapply/2027-SWE-College-Jobs) and [2027 AI](https://github.com/speedyapply/2027-AI-College-Jobs) lists (which include salary).
2. **Official ATS boards** — Greenhouse, Lever, Ashby, Workday, SmartRecruiters, Workable, iCIMS, Oracle, Eightfold and amazon.jobs boards for known firms, from [inputs/ats_seeds.json](inputs/ats_seeds.json) plus PTS's verified seeds (fetched at run time) plus guessed Greenhouse/Lever/Ashby slugs. This catches finance roles the tech lists miss.
3. **Screen** — internship titles only; known firm ([inputs/known_firms.json](inputs/known_firms.json), or speedyapply's FAANG+/Quant sections); track (Software / Product / Data / Finance); US location; no PhD/MBA/senior; no C++/Java/mobile/hardware titles; term year 2027.
4. **Detail fetch** — opens each posting through its ATS API (or the page's schema.org JobPosting) to read the full description and confirm it is still open. Closed postings are dropped.
5. **Date classifier** ([tools/dates.mjs](tools/dates.mjs)) — reads date ranges ("July 20 – September 25"), start dates, program length ("10-week"), flexible-start wording and Summer/Fall terms, ignoring graduation and deadline dates, then buckets the role. Postings whose own dates conflict go to [reports/excluded_by_dates.md](reports/excluded_by_dates.md) with the sentence that was used.
6. **Pay** — parsed from the posting or speedyapply; roles below the minimum are dropped (unstated pay is kept).

## How to run

Requires **Node.js 18+** (no dependencies).

```bash
npm run scan            # full scan, writes README + reports
npm run scan:fast       # community lists only (no ATS boards), ~2-4 min
npm test                # offline self-test
```

**On GitHub:** [.github/workflows/scan.yml](.github/workflows/scan.yml) runs daily, on manual dispatch, and on any push that edits [.github/scan-request](.github/scan-request).

**Tuning:** window dates, minimum pay and source URLs are in [inputs/config.json](inputs/config.json); add firms to [inputs/known_firms.json](inputs/known_firms.json); add ATS boards to [inputs/ats_seeds.json](inputs/ats_seeds.json); list roles you've applied to in [inputs/applied.csv](inputs/applied.csv) to tag them ✅.

## Files

| File | What it is |
|---|---|
| [reports/roles.csv](reports/roles.csv) | Every kept role with bucket, dates, pay, sources |
| [reports/summer_dates_not_stated.md](reports/summer_dates_not_stated.md) | Full ⚪ list |
| [reports/excluded_by_dates.md](reports/excluded_by_dates.md) | Roles dropped for conflicting dates, with evidence |
| [reports/scan_audit.md](reports/scan_audit.md) | Source health, funnel, rejection reasons, unlisted firms, ATS boards |
| [data/roles.json](data/roles.json) · [data/history.json](data/history.json) | Machine-readable results and first-seen history |
