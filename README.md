# LSS — Late-Summer Internship Scanner

Scans for **US internships at well-known firms** in **software engineering, product management, data/analytics and finance/investment** that can run **after an early-summer internship: starting mid/late July 2027 and ending by 2027-09-30**. Sister project of [QJS](https://github.com/Jiang6082/QJS), [PTS](https://github.com/Jiang6082/PTS) and [ECS](https://github.com/Jiang6082/ECS).

**Filters:** US only (incl. US-remote) · known firms only ([list](inputs/known_firms.json)) · pay ≥ $30/hr when the posting states pay · undergrad roles (PhD / MBA / master's-only excluded) · titles naming C++, Java, iOS/Android, embedded or hardware skipped (Python-friendly) · window 2027-07-13 → 2027-09-30 ([config](inputs/config.json))

> **Last scan:** 2026-11-04 &nbsp;•&nbsp; **0 dates fit** &nbsp;•&nbsp; **13 flexible / near miss** &nbsp;•&nbsp; **1009 summer, dates not stated** &nbsp;•&nbsp; **0 new** &nbsp;•&nbsp; 5 closed postings dropped

**Jump to:** [✅ Dates fit](#-dates-fit) · [🟡 Flexible](#-flexible-start--near-miss) · [⚪ Dates not stated](#-summer-2027--dates-not-stated) · [🆕 New](#-new-since-last-scan) · [How it works](#how-it-works) · [How to run](#how-to-run) · [CSV of everything](reports/roles.csv)

| Bucket | What it means | What to do |
|---|---|---|
| ✅ **Dates fit** | The posting's own dates (or start + length) land inside 2027-07-13 → 2027-09-30 | Apply |
| 🟡 **Flexible / near miss** | Flexible, rolling or multiple start dates; off-cycle; Summer/Fall; a start inside the window with no end date; or a few days outside it | Apply, then confirm dates with the recruiter |
| ⚪ **Dates not stated** | Summer 2027 role whose posting gives no dates | Ask whether a late-July start is possible before investing in the application |

Py: ✓ = posting mentions Python · ✗ = mentions only other languages · blank = none listed. UG: ✓ = posting explicitly includes undergraduates · blank = description read, no degree level stated · ? = description couldn't be read, check the posting. Roles requiring a Master's, PhD, MBA or JD are removed ([what was removed](reports/degree_screen.md)).

---

## ✅ Dates fit

_None right now._

---

## 🟡 Flexible start / near miss

### 💻 Software Engineering (6)

<details open>
<summary>6 roles</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Network Development Engineer Intern, 2027 Summer | Seattle, Washington, USA | starts Aug — end date not stated |  | ✓ | ✓ | October 27 | [Apply](https://www.amazon.jobs/en/jobs/10590368/network-development-engineer-intern-2027-summer) |
| **Epic Games** | Frontend Programmer Intern | Cary, NC | flexible — posting says "flexible start" |  |  |  | 2026-08-31 | [Apply](https://epicgames.com/careers/jobs/6173862004?gh_jid=6173862004) |
| **Cloudflare** | Software Engineer Intern | Austin, TX; In-Office | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  | ✓ |  | 2026-09-29 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8199958) |
| **Cloudflare** | Software Engineer Intern - 2027 - Austin - TX | Austin, TX | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  | ✓ |  | 2026-09-17 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8199958?gh_jid=8199958) |
| **CACI** | Software Engineer Co-op | Danbury, CT | posting mentions "Summer & Fall" | $22-44/hr | ✓ | ✓ | 2026-08-31 | [Apply](https://caci.wd1.myworkdayjobs.com/external/job/Danbury-CT-US/Software-Engineering-Co-op---Summer---Fall-2027_331354) |
| **CACI** | Software Engineer Co-op - Summer & Fall 2027 | Danbury, CT | posting mentions "Summer & Fall" | $22-44/hr | ✓ | ✓ | 2026-08-31 | [Apply](https://caci.wd1.myworkdayjobs.com/external/job/Danbury-CT-US/Software-Engineering-Co-op---Summer---Fall-2027_331354) |

</details>

### 📱 Product Management (3)

<details open>
<summary>3 roles</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Program Manager Intern – Summer 2027 | Seattle, Washington, USA | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  | ✓ | ✓ | October  9 | [Apply](https://www.amazon.jobs/en/jobs/10575248/program-manager-intern-summer-2027) |
| **Cloudflare** | Product Manager Intern | Austin, TX | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  |  | ✓ | 2026-10-29 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8274790) |
| **Cloudflare** | Product Manager Intern (2027) - Austin, TX | In-Office | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  |  | ✓ | 2026-10-29 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8274790?gh_jid=8274790) |

</details>

### 📊 Data / Analytics / ML (3)

<details open>
<summary>3 roles</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Business Analyst Intern – Summer 2027 | Bellevue, Washington, USA | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  |  | ✓ | October  9 | [Apply](https://www.amazon.jobs/en/jobs/10575250/business-analyst-intern-summer-2027) |
| **Epic Games** | Data Science Intern | Cary, NC | flexible — posting says "flexible start" |  | ✓ |  | 2026-09-22 | [Apply](https://epicgames.com/careers/jobs/6202675004?gh_jid=6202675004) |
| **CACI** | AI Prompt Engineer Intern | Ashburn, VA | Jul - Sep — start day not stated - confirm it is mid/late month | $19-36/hr | ✓ | ✓ | 2026-10-01 | [Apply](https://caci.wd1.myworkdayjobs.com/external/job/Ashburn-VA-US/AI-Prompt-Engineer-High-School-Intern---Summer-2027_332816-1) |

</details>

### 📈 Finance / Investment / Quant (1)

<details open>
<summary>1 role</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Risk Specialist Intern – Summer 2027 | Seattle, Washington, USA | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  |  | ✓ | October  9 | [Apply](https://www.amazon.jobs/en/jobs/10575251/risk-specialist-intern-summer-2027) |

</details>

---

## ⚪ Summer 2027 — dates not stated

1009 roles. The first 60 per track are below; the full list is in [reports/summer_dates_not_stated.md](reports/summer_dates_not_stated.md).

<details>
<summary><strong>💻 Software Engineering</strong> (589)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Adobe** | 2027 Intern - Emerging Technology & Innovation | San Jose | term dates not stated | $38-51/hr |  | ✓ | Posted 14  | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Amazon** | Associate Engagement Manager Intern- National Security, AWS Professional Services | Arlington, Virginia, USA | term dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | November   | [Apply](https://www.amazon.jobs/en/jobs/10594714/associate-engagement-manager-intern-national-security-aws-professional-services) |
| **Amazon** | Automation Engineer Intern, (Nationwide) - Summer 2027 | Mt Juliet, Tennessee, USA | Summer 2027 dates not stated; 10-week program |  |  | ✓ | August 13, | [Apply](https://www.amazon.jobs/en/jobs/10501526/automation-engineer-intern-nationwide-summer-2027) |
| **Amazon** | Database Engineer Intern | Seattle, WA; East Palo Alto, CA +1 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-10-27 | [Apply](https://amazon.jobs/en/jobs/10590290/database-engineer-intern-summer-2027) |
| **Amazon** | Software Development Engineer Intern - Robotics | Seattle, WA; Nashville, TN +12 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-09-04 | [Apply](https://amazon.jobs/en/jobs/10529525/software-development-engineer-intern-robotics-2027) |
| **Amazon** | Software Development Engineer Intern, Annapurna Labs | Cupertino, CA; Cupertino, California, USA | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-27 | [Apply](https://www.amazon.jobs/en/jobs/10517567/software-development-engineer-intern-annapurna-labs-2027) |
| **Amazon** | Software Engineer Intern | Foster City, CA | Summer 2027 dates not stated; 13+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-29 | [Apply](https://jobs.lever.co/zoox/67982bee-811b-453b-8596-b53c13f7a78d) |
| **Amazon** | Undergrad Software Engineer Intern | SF | term dates not stated | $43/hr |  | ✓ | 2026-10-22 | [Apply](https://job-boards.greenhouse.io/twitch/jobs/8886605002) |
| **Amazon** | Undergrad Software Engineering Intern | San Francisco, CA | Summer 2027 dates not stated | $43/hr |  | ✓ | 2026-10-22 | [Apply](https://job-boards.greenhouse.io/twitch/jobs/8886748002) |
| **Apple** | Software Engineer Intern, Undergrad | United States | Summer 2027 dates not stated |  |  | ✓ | 2026-05-22 | [Apply](https://jobs.apple.com/en-us/details/200664785/software-undergrad-engineering-internships) |
| **Atlassian** | Security Engineer Intern | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $59/hr | ✓ | ✓ | 2026-10-18 | [Apply](https://campus-americas.icims.com/jobs/26267/security-engineer-intern%2c-2027-summer-u.s./job) |
| **Bloomberg** | 2027 Summer News Internship - Digital Editor | Arlington, VA - 1801 S Bell (INDG) | Summer 2027 dates not stated |  |  | ✓ | Posted 30+ | [Apply](https://bloomberg.wd1.myworkdayjobs.com/Bloombergindustrygroup_External_Career_Site/job/Arlington-VA---1801-S-Bell-INDG/XMLNAME-2027-Summer-News-Internship---Digital-Editor_144775) |
| **Cisco** | Software Consulting Engineer I Intern | Research Triangle Park, NC | Summer 2027 dates not stated | $89/hr | ✓ | ✓ | 2026-10-01 | [Apply](https://cisco.wd5.myworkdayjobs.com/cisco_careers/job/USA-RESEARCH-TRIANGLE-PARK/Software-Consulting-Engineer-I--Intern--United-States_2025180) |
| **Databricks** | Software Engineering Intern | Bellevue, WA; Mountain View, CA +6 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $54-60/hr | ✓ |  | 2023-08-04 | [Apply](https://www.databricks.com/company/careers/university-recruiting---engineering/software-engineering-intern-2027-6865687002?gh_jid=6865687002) |
| **Electronic Arts** | Anticheat Engineer Intern | Austin, TX | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✗ rust/java | ✓ | 2026-11-03 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Anticheat-Engineer-Intern-Summer-2027/216242) |
| **Electronic Arts** | Software Engineer Intern | Orlando, FL | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-09-30 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Software-Engineer-Intern/216263) |
| **Expedia** | Software Development Engineer Intern | Seattle, WA; Austin, TX +4 | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-10-05 | [Apply](https://expedia.wd108.myworkdayjobs.com/private/job/Washington---Seattle-Campus/Software-Development-Engineering-Intern---2027---Austin--San-Jose--Seattle_R-110311) |
| **Expedia** | Software Development Engineering Intern - 2027 - Austin - San Jose - Seattle | Washington, DC +3 | term dates not stated | $45/hr | ✓ | ✓ | 2026-10-05 | [Apply](https://expedia.wd108.myworkdayjobs.com/en-US/private/job/Washington---Seattle-Campus/Software-Development-Engineering-Intern---2027---Austin--San-Jose--Seattle_R-110311) |
| **Google** | Forward Deployed Engineer Intern | NYC; Sunnyvale, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-12 | [Apply](https://www.google.com/about/careers/applications/jobs/results/75665705386549958) |
| **Google** | Forward Deployed Engineering Intern | Sunnyvale, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-12 | [Apply](https://www.google.com/about/careers/applications/jobs/results/75665705386549958) |
| **Intel** | Software Engineer Intern | Austin, TX; Santa Clara, CA +8 | Summer 2027 dates not stated |  |  | ✓ | 2026-09-02 | [Apply](https://intel.wd1.myworkdayjobs.com/en-us/external/job/US-Oregon-Hillsboro/Software-Engineering---Intern--Graduate_JR0286836) |
| **Intel** | Software Engineering - Intern, Bachelor’s | US, Oregon, Hillsboro; US, California, Folsom +3 | term dates not stated | $46/hr |  | ✓ | Posted 30+ | [Apply](https://intel.wd1.myworkdayjobs.com/External/job/US-Oregon-Hillsboro/Software-Engineering---Intern--Bachelor-s_JR0286834) |
| **Intuit** | Software Engineer Intern - Cybersecurity | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $36-82/hr |  | ✓ | 2026-09-14 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-software-engineering-intern-cybersecurity/27595/100620927616) |
| **Intuit** | Software Engineering Intern, Full Stack | United States | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $36-79/hr |  | ✓ | 2026-10-30 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-software-engineering-intern-full-stack/27595/100620927520) |
| **Lyft** | Software Engineer Intern - Backend | SF; San Francisco, CA | Summer 2027 dates not stated | $58/hr |  | ✓ | 2026-09-11 | [Apply](https://app.careerpuck.com/job-board/lyft/job/8767726002?gh_jid=8767726002) |
| **Meta** | Software Engineer Intern | Seattle, WA; Menlo Park, CA +2 | term dates not stated | $50/hr | ✓ | ✓ | 2026-10-06 | [Apply](https://www.metacareers.com/jobs/1952991802037374) |
| **Microsoft** | Explore Program Engineering Intern | Redmond, WA | term dates not stated | $26-48/hr |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556925823) |
| **Microsoft** | First-Year Explore Program Engineering Intern | Redmond, WA | Summer 2027 dates not stated | $26-48/hr |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556925823) |
| **Microsoft** | Security Assurance Intern | Redmond, WA | Summer 2027 dates not stated |  |  | ✓ | 2026-09-11 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556988203) |
| **Microsoft** | Software Engineer Intern | Mountain View, CA; United States +2 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-55/hr | ✓ | ✓ | 2026-10-21 | [Apply](https://jobs.smartrecruiters.com/LinkedIn3/744000156616169) |
| **Microsoft** | Software Engineer Intern - CoreAI | Redmond, WA; Multiple Locations, United States | Summer 2027 dates not stated | $52/hr |  | ✓ | 2026-08-03 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556951950) |
| **Microsoft** | Software Engineer Intern - First Play | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-55/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://jobs.smartrecruiters.com/LinkedIn3/744000158394370) |
| **Microsoft** | Software Engineer Intern, AI/ML & LLM | Redmond, WA | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922929) |
| **Microsoft** | Software Engineer Intern, Cloud & Distributed Backend | Redmond, WA | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922923) |
| **Microsoft** | Software Engineer Intern, Data Platform/Analytics | Redmond, WA | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922931) |
| **Microsoft** | Software Engineer Intern, Fullstack Product (Web + Services) | Multiple Locations, United States | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922922) |
| **Microsoft** | Software Engineer Intern, Security & Identity | Redmond, WA; Cambridge, MA +1 | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922930) |
| **Microsoft** | Software Engineer Intern, Teamwork Experiences | Redmond, WA | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557037859) |
| **Microsoft** | Software Engineer: Security & Identity Intern Opportunities for University Students - Cambridge | Cambridge, MA | term dates not stated | $52/hr | ✓ | ✓ | 2026-10-22 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557044765) |
| **Microsoft** | Software Engineer: Security & Identity Intern Opportunities for University Students - Redmond | Redmond, WA | term dates not stated | $52/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556922930) |
| **Microsoft** | Software Engineering Intern | Redmond, WA; Reston, VA | Summer 2027 dates not stated |  |  | ✓ | 2026-09-11 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556983221) |
| **Microsoft** | Software Engineering Intern - CTJ - TS | Redmond, WA; Reston, VA | term dates not stated | $52/hr |  | ✓ | 2026-09-11 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556983221) |
| **Nintendo** | Intern - Software Engineer - Audio - NTD | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-29 | [Apply](https://careers.nintendo.com/?gh_jid=4470048009) |
| **Nintendo** | Intern - Software Engineer - Connectivity - NTD | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-29 | [Apply](https://careers.nintendo.com/?gh_jid=4472147009) |
| **Nintendo** | Intern - Software Engineer - Graphics - NTD | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4473550009) |
| **Nintendo** | Intern - Software Engineer - Performance Tools - NTD | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-31 | [Apply](https://careers.nintendo.com/?gh_jid=4473568009) |
| **Nintendo** | Intern - Software Engineer - Platform Security - NTD | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-29 | [Apply](https://careers.nintendo.com/?gh_jid=4469778009) |
| **Nintendo** | Intern - Software Engineer, CPU Debugger (NTD) | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4471972009) |
| **Nintendo** | Intern - Software Engineer, CPU Profiler (NTD) | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4469762009) |
| **Nintendo** | Intern - Software Engineer, DevOps (NTD) | Redmond, WA | term dates not stated | $45/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4472002009) |
| **Nintendo** | Software Engineer Intern, Audio | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4470048009) |
| **Nintendo** | Software Engineer Intern, Connectivity | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-29 | [Apply](https://careers.nintendo.com/?gh_jid=4472147009) |
| **Nintendo** | Software Engineer Intern, CPU Debugger | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4471972009) |
| **Nintendo** | Software Engineer Intern, CPU Profiler | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4469762009) |
| **Nintendo** | Software Engineer Intern, DevOps | Redmond, WA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4472002009) |
| **Nintendo** | Software Engineer Intern, Graphics | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4473550009) |
| **Nintendo** | Software Engineer Intern, Performance Tools | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4473568009) |
| **Nintendo** | Software Engineer Intern, Platform Security | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4469778009) |
| **NVIDIA** | AI Systems Software Engineering Intern | Austin, TX | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-10-30 | [Apply](https://jobs.nvidia.com/careers/job/893398073452) |
| **NVIDIA** | Math Libraries Intern | Canada; Santa Clara, CA +1 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-02 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/Math-Libraries-Intern--cuEST---Summer-2027_JR2028449) |

_+529 more in the full list._

</details>

<details>
<summary><strong>📱 Product Management</strong> (43)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Product Manager Intern - ALA | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10491935/2027-amazon-leadership-accelerator-ala-product-manager-internship) |
| **Databricks** | Product Management Intern | SF; Bellevue, WA +1 | Summer 2027 dates not stated |  |  | ✓ | 2026-07-16 | [Apply](https://boards.greenhouse.io/embed/job_app?token=6883068002) |
| **Databricks** | Product Management Intern (Summer 2027) | Bellevue, Washington; Mountain View, California +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $54-56/hr | ✓ | ✓ | 2023-08-17 | [Apply](https://databricks.com/company/careers/open-positions/job?gh_jid=6883068002) |
| **Electronic Arts** | Product Management Intern | Austin, TX | Summer 2027 dates not stated |  |  | ✓ | 2026-10-06 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Product-Management-Intern-Fan-Care-Community-Care-Summer-2027/216182) |
| **Intuit** | Product Manager Intern | Mountain View, CA; San Diego, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $48-74/hr |  | ✓ | 2026-09-14 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-product-manager-intern/27595/100620927632) |
| **Microsoft** | Product Manager Intern | Remote; Cambridge, MA | Summer 2027 dates not stated | $33/hr |  | ✓ | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556953113) |
| **Microsoft** | Technical Program Management Intern | Redmond, WA | term dates not stated |  |  | ✓ | 2026-09-11 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556983238) |
| **TikTok** | AI Governance Strategy Product Manager Intern - Platform Trust and Ecosystem | San Jose, CA | Summer 2027 dates not stated | $35-55/hr | ✓ | ✓ | 2026-09-03 | [Apply](https://lifeattiktok.com/search/7677493272788683013) |
| **TikTok** | AI Product Manager Intern - Product Social | San Jose, CA | Summer 2027 dates not stated | $35/hr |  | ✓ | 2026-08-22 | [Apply](https://lifeattiktok.com/search/7675616554318596357) |
| **TikTok** | AI Product Operations Intern | San Jose, CA | term dates not stated | $60/hr |  | ✓ | 2026-08-06 | [Apply](https://lifeattiktok.com/search/7670420017544251701) |
| **TikTok** | AI Safety Evaluation & Governance Product Manager Intern - Multiple Teams | San Jose, CA | Summer 2027 dates not stated | $35/hr |  | ✓ | 2026-08-11 | [Apply](https://lifeattiktok.com/search/7670529537944766773) |
| **TikTok** | Product Management Project Intern - Global Payment | San Jose, CA | Summer 2027 dates not stated |  |  | ? | 2026-09-22 | [Apply](https://jobs.bytedance.com/en/position/7686394581777631541/detail) |
| **TikTok** | Product Manager Intern - Ads Interface and Platform | San Jose, CA; Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35-55/hr |  | ✓ | 2026-08-12 | [Apply](https://lifeattiktok.com/search/7672562486917286149) |
| **TikTok** | Product Manager Intern - Commerce Ads | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35-55/hr |  | ✓ | 2026-08-12 | [Apply](https://lifeattiktok.com/search/7672557943224961333) |
| **TikTok** | Product Manager Intern - Pgc | LA; San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $33/hr |  | ✓ | 2026-08-24 | [Apply](https://lifeattiktok.com/search/7673365416605010229) |
| **TikTok** | Product Manager Intern - Scaled Growth | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35-55/hr |  | ✓ | 2026-08-14 | [Apply](https://lifeattiktok.com/search/7673559305519794437) |
| **TikTok** | Product Manager Intern - Signal and Identity Product | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35-55/hr |  | ✓ | 2026-08-12 | [Apply](https://lifeattiktok.com/search/7672554809555192117) |
| **TikTok** | Strategy Product Manager Intern - Platform Responsibility | San Jose, CA | Summer 2027 dates not stated | $35/hr |  | ✓ | 2026-08-06 | [Apply](https://lifeattiktok.com/search/7670420287191517493) |
| **Workday** | Product Manager Intern | Pleasanton, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $74/hr |  | ✓ | 2026-10-09 | [Apply](https://workday.wd5.myworkdayjobs.com/Workday_Early_Career/job/USA-CA-Pleasanton/Product-Manager-Intern_JR-0110813) |
| **Anduril** | 2027 Technical Program Manager Intern | Costa Mesa, California, United States; Honolulu, Hawaii, United States +3 | term dates not stated; 12+ weeks, so a late-July start would run into October | $28-45/hr |  | ✓ | 2026-10-19 | [Apply](https://boards.greenhouse.io/andurilindustries/jobs/5268864007?gh_jid=5268864007) |
| **American Express** | Product Development Intern - US Consumer Services | NYC | Summer 2027 dates not stated |  |  | ✓ | 2026-08-04 | [Apply](https://egug.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/26012174) |
| **American Express** | Product Management Intern - Global Merchant & Network Services | NYC; Phoenix, AZ | Summer 2027 dates not stated; 10-week program |  |  | ✓ | 2026-08-05 | [Apply](https://egug.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/26012152) |
| **BNY** | Product Management Intern | Lake Mary, FL | Summer 2027 dates not stated; 10-week program |  |  | ✓ | 2026-10-01 | [Apply](https://eofe.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/82784) |
| **BNY** | Product Management Intern - Product Management | NYC | Summer 2027 dates not stated; 10-week program |  |  | ✓ | 2026-08-24 | [Apply](https://eofe.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/81345) |
| **BNY** | Product Management Intern - Program Management | Pittsburgh, PA | Summer 2027 dates not stated; 10-week program |  |  | ✓ | 2026-10-01 | [Apply](https://eofe.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/82782) |
| **DTCC** | Product Management Intern - 2027 Internship Program | Tampa, FL; Jersey City, NJ | Summer 2027 dates not stated; 10-week program |  |  | ✓ | 2026-08-25 | [Apply](https://ebxr.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/214410) |
| **Federal Reserve** | Supervision & Regulation Intern - Business Relationship | Atlanta, GA | Summer 2027 dates not stated; 10-week program |  |  | ✓ | 2026-11-02 | [Apply](https://rb.wd5.myworkdayjobs.com/en-US/FRS/job/Atlanta-GA/XMLNAME-2027-Summer-Internship-Program---Supervision---Regulation--Business-Relationship-_R-0000033860) |
| **Intercontinental Exchange** | Product Management Intern | Atlanta, GA | Summer 2027 dates not stated |  |  | ✓ | 2026-10-23 | [Apply](https://ice.jibeapply.com/jobs/14065?icims=1) |
| **LPL Financial** | Product Intern - Product | Austin, TX; Fort Mill, SC | Summer 2027 dates not stated | $25-30/hr |  | ✓ | 2026-08-10 | [Apply](https://lplfinancial.wd1.myworkdayjobs.com/university/job/Fort-MillCharlotte/Summer-Intern-2027--Product_R-052918) |
| **Coinbase** | Associate Product Manager Intern | Hybrid - San Francisco, CA | term dates not stated; 12+ weeks, so a late-July start would run into October | $55/hr |  |  | 2026-09-08 | [Apply](https://www.coinbase.com/careers/positions/8168322?gh_jid=8168322) |
| **Coinbase** | Associate Product Manager Intern - Multiple Teams | SF | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $55/hr |  |  | 2026-09-09 | [Apply](https://boards.greenhouse.io/embed/job_app?token=8168322) |
| **Visa** | Product Management Intern - Data and AI Team | Foster City, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $46-55/hr |  | ✓ | 2026-10-27 | [Apply](https://visa.wd5.myworkdayjobs.com/Visa_Early_Careers/job/US---Foster-City-CA/Product-Management-Intern--Data-and-AI-Team---Summer-2027_REF089881W) |
| **Visa** | Product Management Intern - Data and AI Team - Summer 2027 | Foster City, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $46-55/hr |  | ✓ | 2026-10-27 | [Apply](https://visa.wd5.myworkdayjobs.com/en-US/visa_early_careers/job/US---Foster-City-CA/Product-Management-Intern--Data-and-AI-Team---Summer-2027_REF089881W) |
| **Appian** | Product Manager Intern | McLean, VA | Summer 2027 dates not stated; 10-week program | $50/hr |  | ✓ | 2026-07-23 | [Apply](https://job-boards.greenhouse.io/appian/jobs/8041243) |
| **Cadence** | Product Management Intern | Remote in USA; Remote +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $55/hr |  | ✓ | 2026-10-06 | [Apply](https://job-boards.greenhouse.io/solutions/jobs/4715294006) |
| **Hewlett Packard Enterprise** | Product Management Intern | Andover, MA; Bloomington, MN +18 | term dates not stated |  |  | ✓ | 2026-08-28 | [Apply](https://hpe.wd5.myworkdayjobs.com/jobsathpe/job/Spring-Texas-United-States-of-America/Product-Management-Intern--Master-s-MBA-_1213634) |
| **Micron** | CMBU Product Management Intern | San Jose, CA | term dates not stated | $56/hr | ✓ | ✓ | 2026-10-27 | [Apply](https://micron.wd1.myworkdayjobs.com/External/job/San-Jose-CA/Intern---CMBU-Product-Management_JR115941) |
| **Micron** | NAND Storage Strategic Roadmap Planning Intern | Boise, ID | term dates not stated |  |  | ✓ | 2026-10-27 | [Apply](https://micron.wd1.myworkdayjobs.com/External/job/Boise-ID---Main-Site/Intern---NAND-Storage-Strategic-Roadmap-Planning_JR115838) |
| **Motorola Solutions** | Program Manager Intern - Summer 2027 | Plantation, FL | Summer 2027 dates not stated |  |  | ✓ | Posted 5 D | [Apply](https://motorolasolutions.wd5.myworkdayjobs.com/Careers/job/Plantation-FL/Program-Manager-Intern---Summer-2027_R69762) |
| **Trimble** | Product Management Intern | Westminster, CO; San Diego, CA | Summer 2027 dates not stated |  |  |  | 2026-09-08 | [Apply](https://trimble.wd1.myworkdayjobs.com/en-US/TrimbleCareers/job/US---CO-Westminster/Product-Management-Intern_R57675-1) |
| **Zebra Technologies** | Product Management Intern | Lincolnshire, IL | Summer 2027 dates not stated | $26-32/hr |  | ✓ | 2026-10-26 | [Apply](https://zebra.wd501.myworkdayjobs.com/Zebra_careers/job/Lincolnshire-Illinois/XMLNAME-2027-Summer-Internship--US----Product-Management_JR103652) |
| **Illinois Tool Works** | Product Management Intern | Troy, OH | Summer 2027 dates not stated |  |  |  | 2026-09-15 | [Apply](https://careers.itw.com/global/en/job/JR10105) |
| **PACCAR** | Product Planning Intern | Denton, TX | Summer 2027 dates not stated |  |  | ✓ | 2026-11-03 | [Apply](https://jobs.paccar.com/job/Denton-2027-Summer-Internship-Product-Planning-TX-76205-7864/1453917433/?ats=successfactors) |

</details>

<details>
<summary><strong>📊 Data / Analytics / ML</strong> (280)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Adobe** | 2027 Intern - AI & Architecture | San Jose, CA | term dates not stated | $55/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---AI---Architecture_R172998) |
| **Adobe** | 2027 Intern - Applied and Research Scientist/Engineer | College, AK +3 | term dates not stated | $55/hr |  | ✓ | 2026-10-05 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Applied-and-Research-Scientist-Engineer_R172064) |
| **Adobe** | 2027 Intern - Data - AI & Innovation | San Jose, CA | term dates not stated | $55/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Adobe** | AI & Architecture Intern | San Jose, CA | Summer 2027 dates not stated | $38-51/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---AI---Architecture_R172998) |
| **Adobe** | Applied and Research Scientist/Engineer Intern | Cambridge, MA; Seattle, WA +4 | term dates not stated | $45-61/hr |  | ✓ | 2026-10-05 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Applied-and-Research-Scientist-Engineer_R172064) |
| **Adobe** | Data, AI & Innovation Intern | San Jose, CA | Summer 2027 dates not stated | $38-51/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Apple** | Applied Data Solutions Program Intern | Austin, TX; Cupertino, CA | Summer 2027 dates not stated |  |  | ? | 2026-08-27 | [Apply](https://jobs.apple.com/en-us/details/200673612-0157/applied-data-solutions-program-internships-summer-2027) |
| **Apple** | Machine Learning and Artificial Intelligence Undergrad Intern | United States | Summer 2027 dates not stated |  |  | ✓ | 2026-05-21 | [Apply](https://jobs.apple.com/en-us/details/200664780/machine-learning-and-artificial-intelligence-undergrad-internships) |
| **Bloomberg** | 2027 Summer News Internship - Data Reporter | Arlington, VA - 1801 S Bell (INDG) | Summer 2027 dates not stated |  | ✓ | ✓ | Posted 30+ | [Apply](https://bloomberg.wd1.myworkdayjobs.com/Bloombergindustrygroup_External_Career_Site/job/Arlington-VA---1801-S-Bell-INDG/XMLNAME-2027-Summer-News-Internship---Data-Reporter_144774) |
| **Databricks** | Data Science Intern | SF; Mountain View, CA | term dates not stated |  |  | ✓ | 2026-10-22 | [Apply](https://boards.greenhouse.io/embed/job_app?token=6866538002) |
| **Intuit** | AI Scientist Intern | NYC; Mountain View, CA +2 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $43-87/hr | ✓ | ✓ | 2026-09-14 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-ai-science-intern/27595/100620927536) |
| **Intuit** | Business Data Analyst Intern - Strategy & Planning | Mountain View, CA | Summer 2027 dates not stated; 17+ weeks, so a late-July start would run into October | $31-62/hr |  | ✓ | 2026-10-01 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-business-data-analyst-intern-strategy-and-planning/27595/101410847360) |
| **Intuit** | Finance Transformation & Analytics Intern | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $37-57/hr | ✓ | ✓ | 2026-10-02 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-finance-transformation-and-analytics-intern/27595/101444103184) |
| **Meta** | Data Engineer Intern - Product Analytics - Summer 2027 | Menlo Park, CA +2 | Summer 2027 dates not stated | $50/hr | ✓ | ✓ | 2026-07-31 | [Apply](https://www.metacareers.com/jobs/1373603594867455) |
| **Meta** | Data Scientist Intern - Product Analytics | Menlo Park, CA; NYC +1 | Summer 2027 dates not stated | $50/hr | ✓ | ✓ | 2026-10-06 | [Apply](https://www.metacareers.com/jobs/1633096478817942) |
| **Microsoft** | Applied Scientist Intern | Redmond, WA | term dates not stated | $52/hr |  | ✓ | 2026-10-07 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557050150) |
| **Microsoft** | Applied Scientist Intern, Turing | Redmond, WA | Summer 2027 dates not stated | $33/hr |  | ✓ | 2026-10-29 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557050150) |
| **Microsoft** | Security Research Intern | Redmond, WA | Summer 2027 dates not stated |  |  | ✓ | 2026-10-22 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557044769) |
| **NVIDIA** | Deep Learning Computer Architecture Intern | Santa Clara, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-08-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning-Computer-Architecture_JR2023491) |
| **NVIDIA** | Deep Learning Intern | Santa Clara, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-31 | [Apply](https://jobs.nvidia.com/careers/job/893397026418) |
| **NVIDIA** | NVIDIA 2027 Internships: Deep Learning | Santa Clara, CA; US, CA, Santa Clara | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✓ | ✓ | 2026-08-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning_JR2023497-1) |
| **NVIDIA** | NVIDIA 2027 Internships: Deep Learning Computer Architecture | Santa Clara, CA | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr |  | ✓ | 2026-08-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning-Computer-Architecture_JR2023491) |
| **Qualcomm** | Machine Learning & Artificial Intelligence Engineering Intern | San Diego, CA; Austin, TX +5 | Summer 2027 dates not stated; 11-week program |  | ✓ | ✓ | 2026-10-18 | [Apply](https://careers.qualcomm.com/careers/job/446720740525) |
| **Samsung** | Agentic AI Solutions Intern | Mountain View, CA | term dates not stated | $36-63/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://job-boards.greenhouse.io/samsungresearchamericainternship/jobs/8926019002) |
| **Stripe** | Data Analyst - Intern | New York City, NY | term dates not stated | $60/hr |  | ✓ | 2026-10-01 | [Apply](https://stripe.com/jobs/search?gh_jid=8194291) |
| **Tesla** | Data Engineer Intern - Energy | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-10-29 | [Apply](https://www.tesla.com/careers/search/job/287982) |
| **TikTok** | Agent Evaluation & Evolution Machine Learning Engineer Intern - Applied Machine Learning Ark | San Jose, CA; Seattle, WA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-08-10 | [Apply](https://jobs.bytedance.com/en/position/7671096345243535669/detail) |
| **TikTok** | Agent Evaluation & Evolution Machine Learning Engineer Intern, AML-Ark-US | Seattle, WA; San Jose, CA | Summer 2027 dates not stated | $43/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7672391300141877557) |
| **TikTok** | AI Engineer Intern, TikTok-Client Arch | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7667935738190465285) |
| **TikTok** | AI Perception Intern - Pico | San Jose, CA | Summer 2027 dates not stated | $55/hr | ✓ | ✓ | 2026-08-03 | [Apply](https://jobs.bytedance.com/en/position/7665457718334425349/detail) |
| **TikTok** | Applied Machine Learning Production Engineer Intern | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45/hr | ✓ | ✓ | 2026-08-06 | [Apply](https://joinbytedance.com/search/7670009669494704437) |
| **TikTok** | Artificial Intelligence Engineer Intern - Client Architecture | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr | ✓ | ✓ | 2026-08-03 | [Apply](https://lifeattiktok.com/search/7667935738190465285) |
| **TikTok** | Client Solutions Intern - Global Business Solutions | Austin, TX | Summer 2027 dates not stated |  |  | ✓ | 2026-09-15 | [Apply](https://lifeattiktok.com/search/7684623688945961221) |
| **TikTok** | Client Solutions Manager Intern - GBS-LATAM | Miami, FL | Summer 2027 dates not stated |  |  | ✓ | 2026-09-14 | [Apply](https://lifeattiktok.com/search/7684612598114240821) |
| **TikTok** | Data Engineer Intern - Ads Targeting | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-05 | [Apply](https://lifeattiktok.com/search/7668533140146817333) |
| **TikTok** | Data Engineer Intern - Data Platform Global Live | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-17 | [Apply](https://lifeattiktok.com/search/7674032146438162693) |
| **TikTok** | Data Engineer Intern - Data Platfrom TikTok BP - 2027 Summer | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr |  | ✓ | 2026-09-05 | [Apply](https://lifeattiktok.com/search/7681783406632782085) |
| **TikTok** | Data Engineer Intern - E-commerce - 2027 Summer | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr |  | ✓ | 2026-08-21 | [Apply](https://lifeattiktok.com/search/7676250516494436661) |
| **TikTok** | Data Engineer Intern - Monetization Data | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr | ✓ | ✓ | 2026-08-10 | [Apply](https://lifeattiktok.com/search/7671232204182276405) |
| **TikTok** | Data Engineer Intern, Data Platform TikTok BP | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-60/hr |  | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7681783406632782085) |
| **TikTok** | Data Engineering Project Intern, Ads Targeting | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7668533140146817333) |
| **TikTok** | Data Lake Infrastructure & Data Analytics Research Engineer Intern - Applied Machine Learning Ark | Seattle, WA | Summer 2027 dates not stated | $43/hr |  | ✓ | 2026-08-11 | [Apply](https://jobs.bytedance.com/en/position/7672394389001816325/detail) |
| **TikTok** | Data Lake Infrastructure & Data Analytics Research Engineer Intern, AML-Ark-US | Seattle, WA; San Jose, CA | Summer 2027 dates not stated | $43/hr |  | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7672394389001816325) |
| **TikTok** | Data Lake Infrastructure and Data Analytics Research Engineer Intern - Applied Machine Learning Ark | San Jose, CA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-08-10 | [Apply](https://jobs.bytedance.com/en/position/7671109787509213445/detail) |
| **TikTok** | Data Science Intern - Integrity and Safety | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://lifeattiktok.com/search/7669682935444900149) |
| **TikTok** | Data Science Intern - TikTok Live | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://lifeattiktok.com/search/7669700822370945333) |
| **TikTok** | Data Science Intern - TikTok Product | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-05 | [Apply](https://lifeattiktok.com/search/7669683639101884725) |
| **TikTok** | Data Science Intern, TikTok Integrity and Safety | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7669682935444900149) |
| **TikTok** | Data Science Project Intern, Advertisement | San Jose, CA | Summer 2027 dates not stated | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7675080308216154373) |
| **TikTok** | Data Scientist Intern - VOD Data | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-05 | [Apply](https://lifeattiktok.com/search/7670287013157095733) |
| **TikTok** | Data Scientist Project Intern, TikTok Integrity and Safety | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7610543185362372917) |
| **TikTok** | LLM Post-training Engineer Intern - Research & Product | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-06 | [Apply](https://lifeattiktok.com/search/7670285031018432773) |
| **TikTok** | Machine Learning Engineer Intern | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-03 | [Apply](https://lifeattiktok.com/search/7667338938890930437) |
| **TikTok** | Machine Learning Engineer Intern - Ads Signal & Measurement | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://lifeattiktok.com/search/7669700361976809733) |
| **TikTok** | Machine Learning Engineer Intern - App Ads and Gaming | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://lifeattiktok.com/search/7669709472078170373) |
| **TikTok** | Machine Learning Engineer Intern - Commerce Ads - Summer 2027 | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://lifeattiktok.com/search/7669711968043092229) |
| **TikTok** | Machine Learning Engineer Intern - Data Search Recommendation Global E-Commerce | Seattle, WA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://lifeattiktok.com/search/7668383643375257909) |
| **TikTok** | Machine Learning Engineer Intern - E-Commerce Governance | Seattle, WA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-10-14 | [Apply](https://lifeattiktok.com/search/7694366551807265029) |
| **TikTok** | Machine Learning Engineer Intern - E-Commerce Knowledge Graph | Seattle, WA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-10-14 | [Apply](https://lifeattiktok.com/search/7679220954338494773) |
| **TikTok** | Machine Learning Engineer Intern - E-Commerce Recommendation Live | Seattle, WA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-10-14 | [Apply](https://lifeattiktok.com/search/7694360097210861829) |

_+220 more in the full list._

</details>

<details>
<summary><strong>📈 Finance / Investment / Quant</strong> (97)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Loss Prevention Specialist Intern 2027 | Fort Worth, Texas, USA | term dates not stated; 10-week program |  |  | ✓ | August 14, | [Apply](https://www.amazon.jobs/en/jobs/10502807/loss-prevention-specialist-intern-2027) |
| **Akuna Capital** | Quantitative Development & Strategy Intern | Chicago, IL; Chicago | Summer 2027 dates not stated; 10-week program | $75/hr | ✓ | ✓ | 2026-07-13 | [Apply](https://www.akunacapital.com/careers/job/8021481/?gh_jid=8021481) |
| **Akuna Capital** | Quantitative Research Intern | Chicago, IL; Chicago | Summer 2027 dates not stated; 10-week program | $75/hr | ✓ | ✓ | 2026-07-13 | [Apply](https://www.akunacapital.com/careers/job/8036614/?gh_jid=8036614) |
| **Aquatic Capital Management** | Quantitative Researcher – Intern | London, UK; Chicago, IL | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-04-01 | [Apply](https://job-boards.greenhouse.io/aquaticcapitalmanagement/jobs/8489186002) |
| **Arrowstreet Capital** | Quantitative Researcher Intern | Boston, MA | Summer 2027 dates not stated | $88-125/hr | ✓ | ✓ | 2026-07-10 | [Apply](https://arrowstreetcapital.wd5.myworkdayjobs.com/Campus_Careers/job/Boston/Quantitative-Researcher-Intern--Summer-2027_R1505) |
| **Belvedere Trading** | Quantitative Trading Intern | Chicago, IL | Summer 2027 dates not stated | $67/hr | ✓ |  | 2026-08-17 | [Apply](https://jobs.lever.co/belvederetrading/cbde47db-c60b-4339-a8f4-a8e4f30505ab) |
| **Belvedere Trading** | Quantitative Trading Intern - Summer 2027 | Chicago, IL | Summer 2027 dates not stated | $72/hr | ✓ |  | 2026-08-07 | [Apply](https://jobs.lever.co/belvederetrading/cbde47db-c60b-4339-a8f4-a8e4f30505ab/apply) |
| **Citadel** | Quantitative Research Analyst - Intern - US | Miami, FL +1 | term dates not stated | $125/hr |  | ? | 2026-07-15 | [Apply](https://www.citadel.com/careers/details/quantitative-research-analyst-intern-us/) |
| **Citadel** | Quantitative Trader: Equity Quantitative Research - Intern - US | Miami, FL +1 | term dates not stated | $125/hr |  | ? | 2026-07-15 | [Apply](https://www.citadel.com/careers/details/quantitative-trader-equity-quantitative-research-intern-us/) |
| **Citadel Securities** | Quantitative Trader - Intern - US - Trading and Research | Miami, FL +1 | term dates not stated | $125/hr |  | ? | 2026-07-15 | [Apply](https://www.citadelsecurities.com/careers/details/quantitative-trader-intern-us/) |
| **DRW** | Quantitative Research Intern | Chicago, IL; New York City, NY +1 | Summer 2027 dates not stated | $120-144/hr | ✓ | ✓ | 2026-07-13 | [Apply](https://www.drw.com/work-at-drw/listings/quantitative-research-intern-3413670) |
| **DRW** | Quantitative Trading Analyst Intern | Chicago, IL | Summer 2027 dates not stated | $120/hr | ✓ | ✓ | 2026-07-13 | [Apply](https://www.drw.com/work-at-drw/listings/quantitative-trading-analyst-intern-3375090) |
| **DRW** | Venture Capital Analyst Intern | Chicago, IL | term dates not stated; 10-week program | $38/hr |  | ✓ | 2026-07-13 | [Apply](https://job-boards.greenhouse.io/drweng/jobs/7993004) |
| **DV Trading** | Quantitative Research Intern - DV Equities | NYC | Summer 2027 dates not stated | $50/hr | ✓ | ✓ | 2026-09-11 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4733133005) |
| **DV Trading** | Quantitative Risk Intern | Chicago, IL | Summer 2027 dates not stated | $35-40/hr | ✓ |  | 2026-08-04 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4719118005) |
| **DV Trading** | Quantitative Trading Intern - DV Equities | NYC | Summer 2027 dates not stated | $50/hr | ✓ | ✓ | 2026-09-11 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4702083005) |
| **DV Trading** | Trading Intern - Summer 2027 - DV Commodities | NYC | Summer 2027 dates not stated | $50/hr | ✓ |  | 2026-08-17 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4719134005) |
| **Hudson River Trading** | Algorithm Development (Quant Research & Trading) Internship – Summer 2027 | London, United Kingdom; New York, NY, United States +1 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-07-13 | [Apply](https://www.hudsonrivertrading.com/careers/job/?gh_jid=7964062) |
| **Jane Street** | Quantitative Researcher Intern | NYC | term dates not stated |  | ✓ | ✓ | 2026-07-06 | [Apply](https://job-boards.greenhouse.io/janestreet/jobs/8498547002) |
| **Jump Trading** | Campus Quantitative Researcher - UG/MS - Intern | Chicago, IL +1 | term dates not stated; 10-week program | $138/hr | ✓ | ✓ | 2026-07-09 | [Apply](https://www.jumptrading.com/hr/job?gh_jid=7982648) |
| **Jump Trading** | Campus Quantitative Trader - Intern | Chicago, IL +1 | term dates not stated; 10-week program | $138/hr |  | ✓ | 2026-07-09 | [Apply](https://www.jumptrading.com/hr/job?gh_jid=7848371) |
| **Jump Trading** | Quantitative Trader Intern | Chicago, IL; New York, NY | Summer 2027 dates not stated; 10-week program | $144/hr |  | ✓ | 2026-07-09 | [Apply](https://www.jumptrading.com/hr/job?gh_jid=7848371) |
| **Man Group** | Systematic Fast Trading Intern | New York | term dates not stated; 10-week program | $50-60/hr | ✓ | ✓ | 2026-10-25 | [Apply](https://job-boards.eu.greenhouse.io/mangroup/jobs/5012801101) |
| **Peak6** | Trading Internship for Women+ Summer 2027 | Chicago, IL | Summer 2027 dates not stated | $60-75/hr | ✓ | ✓ | Posted 30+ | [Apply](https://peak6group.wd1.myworkdayjobs.com/PEAK6/job/Chicago-IL/Trading-Internship-for-Women--Summer-2027_JR105061) |
| **Tower Research Capital** | Quantitative Trader Intern | Chicago, IL; NYC | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-07-05 | [Apply](https://www.tower-research.com/open-positions/?gh_jid=8024128) |
| **TransMarket Group** | Algorithmic Trader Intern | Chicago, Illinois, United States | term dates not stated |  | ✓ | ✓ | 2026-08-03 | [Apply](https://job-boards.greenhouse.io/transmarketgroup/jobs/5151581007?gh_jid=5151581007) |
| **TransMarket Group** | Quantitative Trader Intern | Chicago, IL | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-06-02 | [Apply](https://job-boards.greenhouse.io/transmarketgroup/jobs/5151569007?gh_jid=5151569007) |
| **Two Sigma** | Quantitative Researcher Intern | NYC | Summer 2027 dates not stated; 10-week program | $145/hr | ✓ | ✓ | 2026-08-02 | [Apply](https://twosigma.avature.net/careers/JobDetail/13945) |
| **Voloridge Investment Management** | Quantitative Research Intern | Jupiter, FL | Summer 2027 dates not stated; 10-week program | $48/hr | ✓ | ✓ | 2026-07-14 | [Apply](https://job-boards.greenhouse.io/voloridgeinvestmentmanagement/jobs/4226247009) |
| **Voloridge Investment Management** | Quantitative Trading Intern 2027 | Jupiter, FL | term dates not stated |  | ✓ | ✓ | 2026-09-24 | [Apply](https://job-boards.greenhouse.io/voloridgeinvestmentmanagement/jobs/4405530009) |
| **AQR** | Arbitrage Research Analyst Intern, Arbitrage | Greenwich, CT | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-25 | [Apply](https://careers.aqr.com/jobs/open-positions/greenwich-ct/aqr-arbitrage-2027-research-summer-analyst-/8156993?gh_jid=8156993) |
| **AQR** | Arbitrage Research Summer Analyst Intern - AQR Arbitrage | Greenwich, CT | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-25 | [Apply](https://careers.aqr.com/jobs?gh_jid=8156993&gh_jid=8156993) |
| **AQR** | Quantitative Prediction Markets Research Summer Analyst Intern | Greenwich, CT | Summer 2027 dates not stated; 10-week program |  | ✓ | ✓ | 2026-08-11 | [Apply](https://careers.aqr.com/jobs?gh_jid=8122378&gh_jid=8122378) |
| **AQR** | Research Summer Analyst Intern | Greenwich, CT | Summer 2027 dates not stated; 10-week program |  | ✓ | ✓ | 2026-05-15 | [Apply](https://careers.aqr.com/jobs?gh_jid=7895583&gh_jid=7895583) |
| **Brevan Howard** | 2027 Summer Internship Program – Trading, New York | New York | Summer 2027 dates not stated; 10-week program | $96/hr | ✓ | ✓ | Posted 30+ | [Apply](https://brevanhoward.wd3.myworkdayjobs.com/BH_ExternalCareers/job/New-York/XMLNAME-2027-Summer-Internship-Program---Trading--New-York_JR101583) |
| **Brevan Howard** | 2027 Summer Internship Program – Venture Capital, New York | New York | Summer 2027 dates not stated; 10-week program | $72/hr |  | ✓ | Posted 30+ | [Apply](https://brevanhoward.wd3.myworkdayjobs.com/BH_ExternalCareers/job/New-York/XMLNAME-2027-Summer-Internship-Program---Venture-Capital--New-York_JR101594) |
| **Brevan Howard** | Trading Intern - Trading | NYC | Summer 2027 dates not stated; 10-week program | $96/hr | ✓ | ✓ | 2026-09-07 | [Apply](https://wd3.myworkdaysite.com/recruiting/brevanhoward/BH_ExternalCareers/job/New-York/XMLNAME-2027-Summer-Internship-Program---Trading--New-York_JR101583) |
| **Bridgewater Associates** | 2027 Investment Associate Intern | New York City | term dates not stated; 8-week program | $34/hr |  |  | 2026-01-28 | [Apply](https://job-boards.greenhouse.io/bridgewater89/jobs/8395041002) |
| **Point72** | 2027 Summer Internship - Investment Services | New York, New York, United States, Stamford, Connecticut, United States | Summer 2027 dates not stated; 10-week program | $43/hr |  | ✓ | 2026-09-18 | [Apply](https://boards.greenhouse.io/point72/jobs/8811167002?gh_jid=8811167002) |
| **Point72** | Investment Analyst Intern, Point72 Academy | New York, NY; San Francisco, CA +3 | Summer 2027 dates not stated |  |  | ? | 2026-04-19 | [Apply](https://careers.point72.com/CSJobDetail?jobName=2027-point72-academy-investment-analyst-summer-internship-program-us&jobCode=CPA-0014081) |
| **Barclays** | Banking Associate Summer Internship Program 2027 Chicago | Chicago, 190 South LaSalle Street | Summer 2027 dates not stated | $84/hr |  | ✓ | Posted 30+ | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Chicago-190-South-LaSalle-Street/Banking-Associate-Summer-Internship-Program-2027-Chicago_JR-0000130640) |
| **Barclays** | Banking Associate Summer Internship Program 2027 Houston | Houston, 609 Main Street | Summer 2027 dates not stated |  |  | ✓ | Posted 30+ | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Houston-609-Main-Street/Banking-Associate-Summer-Internship-Program-2027-Houston_JR-0000130641) |
| **Barclays** | Banking Associate Summer Internship Program 2027 New York | New York, 745 7th Avenue | Summer 2027 dates not stated | $84/hr |  | ✓ | Posted 30+ | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/New-York-745-7th-Avenue/Banking-Associate-Summer-Internship-Program-2027-New-York_JR-0000130643) |
| **Barclays** | Banking Associate Summer Internship Program 2027 San Francisco | San Francisco, Four Embarcadero Center | Summer 2027 dates not stated | $84/hr |  | ✓ | Posted 30+ | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/San-Francisco-Four-Embarcadero-Center/Banking-Associate-Summer-Internship-Program-2027-San-Francisco_JR-0000130642) |
| **Barclays** | Private Bank and Wealth Management Summer Internship Programme 2027 Jersey | Jersey, 5-6 Esplanade | Summer 2027 dates not stated |  |  | ✓ | Posted 13  | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Jersey-5-6-Esplanade/Private-Bank-and-Wealth-Management-Summer-Internship-Programme-2027-Jersey_JR-0000125565) |
| **Goldman Sachs** | Quantitative Strategist Intern - Americas | Dallas, TX | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171532?type=students) |
| **Goldman Sachs** | Quantitative Strategist Intern - Americas - The Core Quantitative Strats | Salt Lake City, UT; Dallas, TX +1 | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171551?type=students) |
| **Goldman Sachs** | Quantitative Strategist Intern - Asset and Wealth Management - Quantitative Strats | Salt Lake City, UT | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171549?type=students) |
| **Goldman Sachs** | Quantitative Strategist Intern - Multiple Teams | NYC | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171563?type=students) |
| **Goldman Sachs** | Quantitative Strats Analyst Intern - Americas - Investment Banking | Dallas, TX | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171548?type=students) |
| **Goldman Sachs** | Summer Analyst Intern | NYC | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171550?type=students) |
| **Goldman Sachs** | Summer Analyst Intern - Americas - Investment Banking Quantitative Strats | NYC | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171547?type=students) |
| **Goldman Sachs** | Summer Analyst Intern - FICC and Equities - Sales and Trading | West Palm Beach, FL | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/181628?type=students) |
| **JPMorgan Chase** | 2027 Commercial & Investment Bank Risk Management Summer Analyst Program | New York, NY, United States; Plano, TX, United States +4 | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-10-26 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210690781) |
| **JPMorgan Chase** | Quantitative Research Intern | NYC | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-03 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210774061) |
| **JPMorgan Chase** | Quantitative Research Intern - Markets - Analyst | NYC | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-03 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210774038) |
| **JPMorgan Chase** | Quantitative Research Summer Analyst Intern - Asset Management | NYC | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-03 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210774074) |
| **JPMorgan Chase** | Quantitative Research, Asset Management Summer Analyst | New York, NY | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-21 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210774074) |
| **JPMorgan Chase** | Quantitative Research, Markets, Summer Internship - Analyst | New York, NY | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-21 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210774038) |
| **Raymond James** | 2027 Investment Banking Summer Analyst Leveraged Finance New York, NY | New York, New York - United States | Summer 2027 dates not stated | $30/hr |  | ✓ | Posted 9 D | [Apply](https://raymondjames.wd1.myworkdayjobs.com/RaymondJamesEarlyCareers/job/New-York-New-York---United-States/XMLNAME-2027-Investment-Banking-Summer-Analyst-Leveraged-Finance-New-York--NY_R-0013576) |

_+37 more in the full list._

</details>

---

## 🆕 New since last scan

_None right now._


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
| [reports/date_evidence.md](reports/date_evidence.md) | The sentence behind every ✅ / 🟡 verdict |
| [reports/degree_screen.md](reports/degree_screen.md) | Roles removed for requiring a Master's / PhD / MBA / JD, with the sentence used |
| [reports/excluded_by_dates.md](reports/excluded_by_dates.md) | Roles dropped for conflicting dates, with evidence |
| [reports/scan_audit.md](reports/scan_audit.md) | Source health, funnel, rejection reasons, unlisted firms, ATS boards |
| [data/roles.json](data/roles.json) · [data/history.json](data/history.json) | Machine-readable results and first-seen history |
