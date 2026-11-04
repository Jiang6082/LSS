# LSS — Late-Summer Internship Scanner

Scans for **US internships at well-known firms** in **software engineering, product management, data/analytics and finance/investment** that can run **after an early-summer internship: starting mid/late July 2027 and ending by 2027-09-30**. Sister project of [QJS](https://github.com/Jiang6082/QJS), [PTS](https://github.com/Jiang6082/PTS) and [ECS](https://github.com/Jiang6082/ECS).

**Filters:** US only (incl. US-remote) · known firms only ([list](inputs/known_firms.json)) · pay ≥ $30/hr when the posting states pay · undergrad roles (PhD / MBA / master's-only excluded) · titles naming C++, Java, iOS/Android, embedded or hardware skipped (Python-friendly) · window 2027-07-13 → 2027-09-30 ([config](inputs/config.json))

> **Last scan:** 2026-11-04 &nbsp;•&nbsp; **0 dates fit** &nbsp;•&nbsp; **17 flexible / near miss** &nbsp;•&nbsp; **1028 summer, dates not stated** &nbsp;•&nbsp; **59 new** &nbsp;•&nbsp; 21 closed postings dropped

**Jump to:** [✅ Dates fit](#-dates-fit) · [🟡 Flexible](#-flexible-start--near-miss) · [⚪ Dates not stated](#-summer-2027--dates-not-stated) · [🆕 New](#-new-since-last-scan) · [How it works](#how-it-works) · [How to run](#how-to-run) · [CSV of everything](reports/roles.csv)

| Bucket | What it means | What to do |
|---|---|---|
| ✅ **Dates fit** | The posting's own dates (or start + length) land inside 2027-07-13 → 2027-09-30 | Apply |
| 🟡 **Flexible / near miss** | Flexible, rolling or multiple start dates; off-cycle; Summer/Fall; a start inside the window with no end date; or a few days outside it | Apply, then confirm dates with the recruiter |
| ⚪ **Dates not stated** | Summer 2027 role whose posting gives no dates | Ask whether a late-July start is possible before investing in the application |

Py: ✓ = posting mentions Python · ✗ = mentions only other languages · blank = none listed. UG: ✓ = posting explicitly includes undergraduates · blank = degree level not stated. Roles requiring a Master's, PhD, MBA or JD are removed ([what was removed](reports/degree_screen.md)).

---

## ✅ Dates fit

_None right now._

---

## 🟡 Flexible start / near miss

### 💻 Software Engineering (7)

<details open>
<summary>7 roles</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Network Development Engineer Intern, 2027 Summer | Seattle, Washington, USA | starts Aug — end date not stated |  | ✓ | ✓ | October 27 | [Apply](https://www.amazon.jobs/en/jobs/10590368/network-development-engineer-intern-2027-summer) |
| **Epic Games** | Frontend Programmer Intern | Cary, NC | flexible — posting says "flexible start" |  |  |  | 2026-08-31 | [Apply](https://epicgames.com/careers/jobs/6173862004?gh_jid=6173862004) |
| **Cloudflare** | Software Engineer Intern | Austin, TX; In-Office | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  | ✓ |  | 2026-09-29 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8199958) |
| **Cloudflare** | Software Engineer Intern - 2027 - Austin - TX | Austin, TX | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  | ✓ |  | 2026-09-18 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8199958?gh_jid=8199958) |
| **CACI** | Software Engineer Co-op | Danbury, CT | posting mentions "Summer & Fall" | $22-44/hr | ✓ | ✓ | 2026-08-31 | [Apply](https://caci.wd1.myworkdayjobs.com/external/job/Danbury-CT-US/Software-Engineering-Co-op---Summer---Fall-2027_331354) |
| **CACI** | Software Engineer Co-op - Summer & Fall 2027 | Danbury, CT | posting mentions "Summer & Fall" | $22-44/hr | ✓ | ✓ | 2026-08-31 | [Apply](https://caci.wd1.myworkdayjobs.com/external/job/Danbury-CT-US/Software-Engineering-Co-op---Summer---Fall-2027_331354) |
| **RTX** | 2027 Summer/Fall Co-op - AGS Software Engineering - Onsite 🆕 | Cedar Rapids, IA | posting mentions "Summer/Fall" |  | ✓ | ✓ | 2026-09-29 | [Apply](https://globalhr.wd5.myworkdayjobs.com/en-US/rec_rtx_ext_gateway/job/US-IA-CEDAR-RAPIDS-131--5450-C-Ave-NE--BLDG-131/XMLNAME-2027-Summer-Fall-Co-op--AGS-Software-Engineering--Onsite-_01871646) |

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

### 📊 Data / Analytics / ML (6)

<details open>
<summary>6 roles</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Business Analyst Intern – Summer 2027 | Bellevue, Washington, USA | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  |  | ✓ | October  9 | [Apply](https://www.amazon.jobs/en/jobs/10575250/business-analyst-intern-summer-2027) |
| **Epic Games** | Data Science Intern | Cary, NC | flexible — posting says "flexible start" |  | ✓ |  | 2026-09-22 | [Apply](https://epicgames.com/careers/jobs/6202675004?gh_jid=6202675004) |
| **Meta** | Research Scientist Intern - AI & Compute Foundation | Menlo Park, CA | flexible — posting says "various start dates" |  | ✓ |  | 2026-10-13 | [Apply](https://www.metacareers.com/jobs/1866761794487684) |
| **Meta** | Research Scientist Intern - Generative Recommendation Systems | Menlo Park, CA | flexible — posting says "various start dates" |  | ✓ |  | 2026-10-26 | [Apply](https://www.metacareers.com/jobs/3265378000517806) |
| **Meta** | Research Scientist Intern - Multimodal Behavioral Modeling - Hearing Science | Redmond, WA | flexible — posting says "various start dates" |  | ✓ |  | 2026-10-16 | [Apply](https://www.metacareers.com/jobs/1141752241867684) |
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

1028 roles. The first 60 per track are below; the full list is in [reports/summer_dates_not_stated.md](reports/summer_dates_not_stated.md).

<details>
<summary><strong>💻 Software Engineering</strong> (599)</summary>

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
| **Electronic Arts** | Anticheat Engineer Intern 🆕 | Austin, TX | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✗ rust/java | ✓ | 2026-11-03 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Anticheat-Engineer-Intern-Summer-2027/216242) |
| **Electronic Arts** | Software Engineer Intern | Orlando, FL | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-09-30 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Software-Engineer-Intern/216263) |
| **Google** | Forward Deployed Engineer Intern | NYC; Sunnyvale, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-12 | [Apply](https://www.google.com/about/careers/applications/jobs/results/75665705386549958) |
| **Google** | Forward Deployed Engineering Intern | Sunnyvale, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-12 | [Apply](https://www.google.com/about/careers/applications/jobs/results/75665705386549958) |
| **Intel** | Software Engineer Intern | Austin, TX; Santa Clara, CA +8 | Summer 2027 dates not stated |  |  |  | 2026-09-02 | [Apply](https://intel.wd1.myworkdayjobs.com/en-us/external/job/US-Oregon-Hillsboro/Software-Engineering---Intern--Graduate_JR0286836) |
| **Intel** | Software Engineering - Intern, Bachelor’s | US, Oregon, Hillsboro; US, California, Folsom +3 | term dates not stated | $46/hr |  | ✓ | Posted 30+ | [Apply](https://intel.wd1.myworkdayjobs.com/External/job/US-Oregon-Hillsboro/Software-Engineering---Intern--Bachelor-s_JR0286834) |
| **Intuit** | Software Engineer Intern - Cybersecurity | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $36-82/hr |  | ✓ | 2026-09-14 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-software-engineering-intern-cybersecurity/27595/100620927616) |
| **Intuit** | Software Engineering Intern, Full Stack | United States | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $36-79/hr |  | ✓ | 2026-10-30 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-software-engineering-intern-full-stack/27595/100620927520) |
| **Lyft** | Software Engineer Intern - Backend | SF; San Francisco, CA | Summer 2027 dates not stated | $58/hr |  | ✓ | 2026-09-11 | [Apply](https://app.careerpuck.com/job-board/lyft/job/8767726002?gh_jid=8767726002) |
| **Meta** | Software Engineer Intern | Seattle, WA; Menlo Park, CA +2 | term dates not stated | $50/hr | ✓ | ✓ | 2026-10-06 | [Apply](https://www.metacareers.com/jobs/1952991802037374) |
| **Microsoft** | Explore Program Engineering Intern | Redmond, WA | term dates not stated | $26-48/hr |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556925823) |
| **Microsoft** | First-Year Explore Program Engineering Intern | Redmond, WA | Summer 2027 dates not stated | $26-48/hr |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556925823) |
| **Microsoft** | Research Intern - Efficient AI Software Systems | Redmond, WA | term dates not stated | $52/hr |  |  | 2026-10-16 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557041731) |
| **Microsoft** | Security Assurance Intern | Redmond, WA | Summer 2027 dates not stated |  |  | ✓ | 2026-09-11 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556988203) |
| **Microsoft** | Software Engineer Intern | Mountain View, CA; United States +2 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-55/hr | ✓ | ✓ | 2026-10-21 | [Apply](https://jobs.smartrecruiters.com/LinkedIn3/744000156616169) |
| **Microsoft** | Software Engineer Intern - CoreAI | Redmond, WA; Multiple Locations, United States | Summer 2027 dates not stated |  |  | ✓ | 2026-08-03 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556951950) |
| **Microsoft** | Software Engineer Intern - First Play | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-55/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://jobs.smartrecruiters.com/LinkedIn3/744000158394370) |
| **Microsoft** | Software Engineer Intern, AI/ML & LLM | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922929) |
| **Microsoft** | Software Engineer Intern, Cloud & Distributed Backend | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922923) |
| **Microsoft** | Software Engineer Intern, Data Platform/Analytics | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922931) |
| **Microsoft** | Software Engineer Intern, Fullstack Product (Web + Services) | Multiple Locations, United States | Summer 2027 dates not stated |  |  |  | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922922) |
| **Microsoft** | Software Engineer Intern, Security & Identity | Redmond, WA; Cambridge, MA +1 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922930) |
| **Microsoft** | Software Engineer Intern, Teamwork Experiences 🆕 | Redmond, WA | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-03 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557037859) |
| **Microsoft** | Software Engineer: Security & Identity Intern Opportunities for University Students - Cambridge | Cambridge, MA | term dates not stated | $52/hr | ✓ | ✓ | 2026-10-23 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557044765) |
| **Microsoft** | Software Engineer: Security & Identity Intern Opportunities for University Students - Redmond | Redmond, WA | term dates not stated | $52/hr | ✓ | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556922930) |
| **Microsoft** | Software Engineering Intern | Redmond, WA; Reston, VA | Summer 2027 dates not stated |  |  | ✓ | 2026-09-11 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556983221) |
| **Microsoft** | Software Engineering Intern - CTJ - TS | Redmond, WA; Reston, VA | term dates not stated | $52/hr |  | ✓ | 2026-09-12 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556983221) |
| **Nintendo** | Intern - Software Engineer - Audio - NTD | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4470048009) |
| **Nintendo** | Intern - Software Engineer - Connectivity - NTD | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4472147009) |
| **Nintendo** | Intern - Software Engineer - Graphics - NTD | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-31 | [Apply](https://careers.nintendo.com/?gh_jid=4473550009) |
| **Nintendo** | Intern - Software Engineer - Performance Tools - NTD | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-11-01 | [Apply](https://careers.nintendo.com/?gh_jid=4473568009) |
| **Nintendo** | Intern - Software Engineer - Platform Security - NTD | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4469778009) |
| **Nintendo** | Intern - Software Engineer, CPU Debugger (NTD) | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4471972009) |
| **Nintendo** | Intern - Software Engineer, CPU Profiler (NTD) | Redmond, WA | term dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4469762009) |
| **Nintendo** | Intern - Software Engineer, DevOps (NTD) | Redmond, WA | term dates not stated | $45/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4472002009) |
| **Nintendo** | Software Engineer Intern, Audio | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4470048009) |
| **Nintendo** | Software Engineer Intern, Connectivity | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-10-29 | [Apply](https://careers.nintendo.com/?gh_jid=4472147009) |
| **Nintendo** | Software Engineer Intern, CPU Debugger | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4471972009) |
| **Nintendo** | Software Engineer Intern, CPU Profiler | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4469762009) |
| **Nintendo** | Software Engineer Intern, DevOps | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4472002009) |
| **Nintendo** | Software Engineer Intern, Graphics | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4473550009) |
| **Nintendo** | Software Engineer Intern, Performance Tools | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4473568009) |
| **Nintendo** | Software Engineer Intern, Platform Security | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4469778009) |
| **NVIDIA** | AI Systems Software Engineering Intern | Austin, TX | Summer 2027 dates not stated |  |  |  | 2026-10-30 | [Apply](https://jobs.nvidia.com/careers/job/893398073452) |
| **NVIDIA** | AI Systems Software Engineering Intern - Summer 2027 | Austin, TX | Summer 2027 dates not stated | $62/hr |  |  | 2026-10-30 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-TX-Austin/AI-Systems-Software-Engineering-Intern---Summer-2027_JR2027170) |
| **NVIDIA** | Math Libraries Intern | Canada; Santa Clara, CA +1 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-02 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/Math-Libraries-Intern--cuEST---Summer-2027_JR2028449) |

_+539 more in the full list._

</details>

<details>
<summary><strong>📱 Product Management</strong> (44)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Product Manager Intern - ALA 🆕 | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10491935/2027-amazon-leadership-accelerator-ala-product-manager-internship) |
| **Databricks** | Product Management Intern | SF; Bellevue, WA +1 | Summer 2027 dates not stated |  |  | ✓ | 2026-07-16 | [Apply](https://boards.greenhouse.io/embed/job_app?token=6883068002) |
| **Databricks** | Product Management Intern (Summer 2027) | Bellevue, Washington; Mountain View, California +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $54-56/hr | ✓ | ✓ | 2023-08-17 | [Apply](https://databricks.com/company/careers/open-positions/job?gh_jid=6883068002) |
| **Electronic Arts** | Product Management Intern | Austin, TX | Summer 2027 dates not stated |  |  | ✓ | 2026-10-06 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Product-Management-Intern-Fan-Care-Community-Care-Summer-2027/216182) |
| **Intuit** | Product Manager Intern | Mountain View, CA; San Diego, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $48-74/hr |  | ✓ | 2026-09-14 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-product-manager-intern/27595/100620927632) |
| **Microsoft** | Product Manager Intern | Remote; Cambridge, MA | Summer 2027 dates not stated |  |  |  | 2026-08-04 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556953113) |
| **Microsoft** | Technical Program Management Intern | Redmond, WA | term dates not stated |  |  | ✓ | 2026-09-11 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556983238) |
| **TikTok** | AI Governance Strategy Product Manager Intern - Platform Trust and Ecosystem | San Jose, CA | Summer 2027 dates not stated | $35-55/hr | ✓ | ✓ | 2026-09-03 | [Apply](https://lifeattiktok.com/search/7677493272788683013) |
| **TikTok** | AI Product Manager Intern - Product Social | San Jose, CA | Summer 2027 dates not stated | $35/hr |  | ✓ | 2026-08-22 | [Apply](https://lifeattiktok.com/search/7675616554318596357) |
| **TikTok** | AI Product Operations Intern | San Jose, CA | term dates not stated | $60/hr |  | ✓ | 2026-08-06 | [Apply](https://lifeattiktok.com/search/7670420017544251701) |
| **TikTok** | AI Safety Evaluation & Governance Product Manager Intern - Multiple Teams | San Jose, CA | Summer 2027 dates not stated | $35/hr |  | ✓ | 2026-08-11 | [Apply](https://lifeattiktok.com/search/7670529537944766773) |
| **TikTok** | Product Management Project Intern - Global Payment | San Jose, CA | Summer 2027 dates not stated | $35/hr |  | ✓ | 2026-09-22 | [Apply](https://jobs.bytedance.com/en/position/7686394581777631541/detail) |
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
| **Visa** | Product Management Intern - Data and AI Team - Summer 2027 | Foster City, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $46-55/hr |  | ✓ | 2026-10-28 | [Apply](https://visa.wd5.myworkdayjobs.com/en-US/visa_early_careers/job/US---Foster-City-CA/Product-Management-Intern--Data-and-AI-Team---Summer-2027_REF089881W) |
| **Appian** | Product Manager Intern | McLean, VA | Summer 2027 dates not stated; 10-week program | $50/hr |  | ✓ | 2026-07-23 | [Apply](https://job-boards.greenhouse.io/appian/jobs/8041243) |
| **Applied Materials** | Data Intelligence/Technical Program Manager Intern | Santa Clara, CA | Summer 2027 dates not stated |  | ✓ |  | 2026-11-02 | [Apply](https://amat.wd1.myworkdayjobs.com/External/job/Santa-ClaraCA/Summer-2027-Data-Intelligence-Technical-Program-Management-Intern--Master-s--Santa-Clara--CA-_R2627705) |
| **Cadence** | Product Management Intern | Remote in USA; Remote +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $55/hr |  | ✓ | 2026-10-06 | [Apply](https://job-boards.greenhouse.io/solutions/jobs/4715294006) |
| **Hewlett Packard Enterprise** | Product Management Intern | Andover, MA; Bloomington, MN +18 | term dates not stated |  |  | ✓ | 2026-08-28 | [Apply](https://hpe.wd5.myworkdayjobs.com/jobsathpe/job/Spring-Texas-United-States-of-America/Product-Management-Intern--Master-s-MBA-_1213634) |
| **Micron** | CMBU Product Management Intern | San Jose, CA | term dates not stated | $56/hr | ✓ | ✓ | 2026-10-27 | [Apply](https://micron.wd1.myworkdayjobs.com/External/job/San-Jose-CA/Intern---CMBU-Product-Management_JR115941) |
| **Micron** | NAND Storage Strategic Roadmap Planning Intern | Boise, ID | term dates not stated |  |  | ✓ | 2026-10-27 | [Apply](https://micron.wd1.myworkdayjobs.com/External/job/Boise-ID---Main-Site/Intern---NAND-Storage-Strategic-Roadmap-Planning_JR115838) |
| **Motorola Solutions** | Program Manager Intern - Summer 2027 | Plantation, FL | Summer 2027 dates not stated |  |  | ✓ | Posted 5 D | [Apply](https://motorolasolutions.wd5.myworkdayjobs.com/Careers/job/Plantation-FL/Program-Manager-Intern---Summer-2027_R69762) |
| **Trimble** | Product Management Intern 🆕 | Westminster, CO; San Diego, CA | Summer 2027 dates not stated |  |  |  | 2026-09-08 | [Apply](https://trimble.wd1.myworkdayjobs.com/en-US/TrimbleCareers/job/US---CO-Westminster/Product-Management-Intern_R57675-1) |
| **Zebra Technologies** | Product Management Intern | Lincolnshire, IL | Summer 2027 dates not stated | $26-32/hr |  | ✓ | 2026-10-26 | [Apply](https://zebra.wd501.myworkdayjobs.com/Zebra_careers/job/Lincolnshire-Illinois/XMLNAME-2027-Summer-Internship--US----Product-Management_JR103652) |
| **Illinois Tool Works** | Product Management Intern | Troy, OH | Summer 2027 dates not stated |  |  |  | 2026-09-15 | [Apply](https://careers.itw.com/global/en/job/JR10105) |
| **PACCAR** | Product Planning Intern | Denton, TX | Summer 2027 dates not stated |  |  |  | 2026-11-03 | [Apply](https://jobs.paccar.com/job/Denton-2027-Summer-Internship-Product-Planning-TX-76205-7864/1453917433/?ats=successfactors) |

</details>

<details>
<summary><strong>📊 Data / Analytics / ML</strong> (290)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Adobe** | 2027 Intern - AI & Architecture | San Jose, CA | term dates not stated | $55/hr |  | ✓ | 2026-10-20 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---AI---Architecture_R172998) |
| **Adobe** | 2027 Intern - Applied and Research Scientist/Engineer | College, AK +3 | term dates not stated | $55/hr |  | ✓ | 2026-10-06 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Applied-and-Research-Scientist-Engineer_R172064) |
| **Adobe** | 2027 Intern - Data - AI & Innovation | San Jose, CA | term dates not stated | $55/hr |  | ✓ | 2026-10-20 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Adobe** | AI & Architecture Intern | San Jose, CA | Summer 2027 dates not stated | $38-51/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---AI---Architecture_R172998) |
| **Adobe** | Applied and Research Scientist/Engineer Intern | Cambridge, MA; Seattle, WA +4 | term dates not stated | $45-61/hr |  | ✓ | 2026-10-05 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Applied-and-Research-Scientist-Engineer_R172064) |
| **Adobe** | Data, AI & Innovation Intern | San Jose, CA | Summer 2027 dates not stated | $38-51/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Apple** | Applied Data Solutions Program Intern | Austin, TX; Cupertino, CA | Summer 2027 dates not stated |  |  |  | 2026-08-27 | [Apply](https://jobs.apple.com/en-us/details/200673612-0157/applied-data-solutions-program-internships-summer-2027) |
| **Apple** | Machine Learning and Artificial Intelligence Undergrad Intern | United States | Summer 2027 dates not stated |  |  | ✓ | 2026-05-21 | [Apply](https://jobs.apple.com/en-us/details/200664780/machine-learning-and-artificial-intelligence-undergrad-internships) |
| **Bloomberg** | 2027 Summer News Internship - Data Reporter | Arlington, VA - 1801 S Bell (INDG) | Summer 2027 dates not stated |  | ✓ | ✓ | Posted 30+ | [Apply](https://bloomberg.wd1.myworkdayjobs.com/Bloombergindustrygroup_External_Career_Site/job/Arlington-VA---1801-S-Bell-INDG/XMLNAME-2027-Summer-News-Internship---Data-Reporter_144774) |
| **Databricks** | Data Science Intern | SF; Mountain View, CA | term dates not stated |  |  | ✓ | 2026-10-22 | [Apply](https://boards.greenhouse.io/embed/job_app?token=6866538002) |
| **Databricks** | Data Science Intern (2027 Start) | Mountain View, California; San Francisco, California | term dates not stated | $54-60/hr | ✓ |  | 2023-08-17 | [Apply](https://databricks.com/company/careers/open-positions/job?gh_jid=6866538002) |
| **Intuit** | AI Scientist Intern 🆕 | NYC; Mountain View, CA +2 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $43-87/hr | ✓ | ✓ | 2026-09-14 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-ai-science-intern/27595/100620927536) |
| **Intuit** | Business Data Analyst Intern - Strategy & Planning | Mountain View, CA | Summer 2027 dates not stated; 17+ weeks, so a late-July start would run into October | $31-62/hr |  | ✓ | 2026-10-01 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-business-data-analyst-intern-strategy-and-planning/27595/101410847360) |
| **Intuit** | Finance Transformation & Analytics Intern | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $37-57/hr | ✓ | ✓ | 2026-10-02 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-finance-transformation-and-analytics-intern/27595/101444103184) |
| **Meta** | Data Engineer Intern - Product Analytics - Summer 2027 | Menlo Park, CA +2 | Summer 2027 dates not stated | $50/hr | ✓ | ✓ | 2026-08-01 | [Apply](https://www.metacareers.com/jobs/1373603594867455) |
| **Meta** | Data Scientist Intern - Product Analytics | Menlo Park, CA; NYC +1 | Summer 2027 dates not stated | $50/hr | ✓ | ✓ | 2026-10-06 | [Apply](https://www.metacareers.com/jobs/1633096478817942) |
| **Meta** | Research Scientist Intern - Multiple Teams | Seattle, WA; Bellevue, WA | term dates not stated |  | ✓ |  | 2026-10-29 | [Apply](https://www.metacareers.com/jobs/1105933535765181) |
| **Meta** | Research Scientist Intern - Neural Representations Compression | Redmond, WA | term dates not stated | $50/hr | ✓ |  | 2026-10-27 | [Apply](https://www.metacareers.com/jobs/2368433610564528) |
| **Microsoft** | Applied Scientist Intern | Redmond, WA | term dates not stated | $52/hr |  | ✓ | 2026-10-07 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557050150) |
| **Microsoft** | Applied Scientist Intern, Turing | Redmond, WA | Summer 2027 dates not stated |  |  | ✓ | 2026-10-29 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557050150) |
| **Microsoft** | Research Intern | Redmond, WA; Mountain View, CA | term dates not stated |  |  |  | 2026-10-22 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557045445) |
| **Microsoft** | Research Intern - Algorithms Group: Theory | Redmond, WA | term dates not stated | $52/hr |  |  | 2026-10-24 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557045963) |
| **Microsoft** | Research Intern - Machine Learning and Optimization | Redmond, WA | term dates not stated | $52/hr |  |  | 2026-10-28 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557049981) |
| **Microsoft** | Research Intern - Machine Learning at MSR NYC | New York City, NY +1 | term dates not stated | $52/hr |  |  | 2026-10-17 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557042145) |
| **Microsoft** | Research Intern - MSR Systems Research Group | Redmond, WA | term dates not stated |  |  |  | 2026-10-28 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557050039) |
| **Microsoft** | Security Research Intern | Redmond, WA | Summer 2027 dates not stated |  |  |  | 2026-10-22 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557044769) |
| **NVIDIA** | Deep Learning Computer Architecture Intern | Santa Clara, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-08-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning-Computer-Architecture_JR2023491) |
| **NVIDIA** | Deep Learning Intern | Santa Clara, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-31 | [Apply](https://jobs.nvidia.com/careers/job/893397026418) |
| **NVIDIA** | NVIDIA 2027 Internships: Deep Learning | Santa Clara, CA; US, CA, Santa Clara | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✓ | ✓ | 2026-08-20 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning_JR2023497-1) |
| **NVIDIA** | NVIDIA 2027 Internships: Deep Learning Computer Architecture | Santa Clara, CA | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr |  | ✓ | 2026-08-20 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning-Computer-Architecture_JR2023491) |
| **Qualcomm** | Machine Learning & Artificial Intelligence Engineering Intern | San Diego, CA; Austin, TX +5 | Summer 2027 dates not stated; 11-week program |  | ✓ | ✓ | 2026-10-18 | [Apply](https://careers.qualcomm.com/careers/job/446720740525) |
| **Samsung** | Agentic AI Solutions Intern 🆕 | Mountain View, CA | term dates not stated | $36-63/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://job-boards.greenhouse.io/samsungresearchamericainternship/jobs/8926019002) |
| **Samsung** | Intern - Thermal Modeling & Simulation Engineer - AI Memory / HBM | San Jose, CA | term dates not stated | $28-68/hr | ✓ |  | 2026-10-29 | [Apply](https://job-boards.greenhouse.io/samsungsemiconductor/jobs/8046859003) |
| **Snap** | Generative Media Research Intern | LA; Los Angeles, CA | Summer 2027 dates not stated | $39-58/hr |  |  | 2026-10-14 | [Apply](https://wd1.myworkdaysite.com/recruiting/snapchat/snap/job/Los-Angeles-California/XMLNAME-2027-Generative-Media-Researc_R0047179) |
| **Stripe** | Data Analyst - Intern | New York City, NY | term dates not stated | $60/hr |  | ✓ | 2026-10-02 | [Apply](https://stripe.com/jobs/search?gh_jid=8194291) |
| **Tesla** | Data Engineer Intern - Energy | Palo Alto, CA | Summer 2027 dates not stated |  |  |  | 2026-10-29 | [Apply](https://www.tesla.com/careers/search/job/287982) |
| **TikTok** | Agent Evaluation & Evolution Machine Learning Engineer Intern - Applied Machine Learning Ark | San Jose, CA; Seattle, WA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-08-10 | [Apply](https://jobs.bytedance.com/en/position/7671096345243535669/detail) |
| **TikTok** | Agent Evaluation & Evolution Machine Learning Engineer Intern, AML-Ark-US | Seattle, WA; San Jose, CA | Summer 2027 dates not stated | $43/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7672391300141877557) |
| **TikTok** | AI Engineer Intern, TikTok-Client Arch | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7667935738190465285) |
| **TikTok** | AI Perception Intern - Pico 🆕 | San Jose, CA | Summer 2027 dates not stated | $55/hr | ✓ | ✓ | 2026-08-03 | [Apply](https://jobs.bytedance.com/en/position/7665457718334425349/detail) |
| **TikTok** | Applied Machine Learning Production Engineer Intern | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45/hr | ✓ | ✓ | 2026-08-06 | [Apply](https://joinbytedance.com/search/7670009669494704437) |
| **TikTok** | Artificial Intelligence Engineer Intern - Client Architecture | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr | ✓ | ✓ | 2026-08-03 | [Apply](https://lifeattiktok.com/search/7667935738190465285) |
| **TikTok** | Client Solutions Intern - Global Business Solutions | Austin, TX | Summer 2027 dates not stated |  |  | ✓ | 2026-09-15 | [Apply](https://lifeattiktok.com/search/7684623688945961221) |
| **TikTok** | Client Solutions Manager Intern - GBS-LATAM | Miami, FL | Summer 2027 dates not stated |  |  | ✓ | 2026-09-14 | [Apply](https://lifeattiktok.com/search/7684612598114240821) |
| **TikTok** | Data Engineer Intern - Ads Targeting | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-05 | [Apply](https://lifeattiktok.com/search/7668533140146817333) |
| **TikTok** | Data Engineer Intern - Data Platform Global Live | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-17 | [Apply](https://lifeattiktok.com/search/7674032146438162693) |
| **TikTok** | Data Engineer Intern - Data Platfrom TikTok BP - 2027 Summer | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr |  | ✓ | 2026-09-06 | [Apply](https://lifeattiktok.com/search/7681783406632782085) |
| **TikTok** | Data Engineer Intern - E-commerce - 2027 Summer | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr |  | ✓ | 2026-08-22 | [Apply](https://lifeattiktok.com/search/7676250516494436661) |
| **TikTok** | Data Engineer Intern - Monetization Data | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr | ✓ | ✓ | 2026-08-10 | [Apply](https://lifeattiktok.com/search/7671232204182276405) |
| **TikTok** | Data Engineer Intern, Data Platform TikTok BP | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-60/hr |  | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7681783406632782085) |
| **TikTok** | Data Engineering Project Intern, Ads Targeting | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7668533140146817333) |
| **TikTok** | Data Lake Infrastructure & Data Analytics Research Engineer Intern - Applied Machine Learning Ark | Seattle, WA | Summer 2027 dates not stated | $43/hr |  | ✓ | 2026-08-11 | [Apply](https://jobs.bytedance.com/en/position/7672394389001816325/detail) |
| **TikTok** | Data Lake Infrastructure & Data Analytics Research Engineer Intern, AML-Ark-US | Seattle, WA; San Jose, CA | Summer 2027 dates not stated | $43/hr |  | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7672394389001816325) |
| **TikTok** | Data Lake Infrastructure and Data Analytics Research Engineer Intern - Applied Machine Learning Ark | San Jose, CA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-08-10 | [Apply](https://jobs.bytedance.com/en/position/7671109787509213445/detail) |
| **TikTok** | Data Science Intern - Integrity and Safety | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $60/hr | ✓ | ✓ | 2026-08-04 | [Apply](https://lifeattiktok.com/search/7669682935444900149) |
| **TikTok** | Data Science Intern - TikTok Product | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-05 | [Apply](https://lifeattiktok.com/search/7669683639101884725) |
| **TikTok** | Data Science Intern, TikTok Integrity and Safety | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7669682935444900149) |
| **TikTok** | Data Science Project Intern, Advertisement | San Jose, CA | Summer 2027 dates not stated | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7675080308216154373) |
| **TikTok** | Data Scientist Intern - VOD Data | San Jose, CA | Summer 2027 dates not stated | $60/hr | ✓ | ✓ | 2026-08-05 | [Apply](https://lifeattiktok.com/search/7670287013157095733) |
| **TikTok** | Data Scientist Project Intern, TikTok Integrity and Safety | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7610543185362372917) |

_+230 more in the full list._

</details>

<details>
<summary><strong>📈 Finance / Investment / Quant</strong> (95)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Loss Prevention Specialist Intern 2027 | Fort Worth, Texas, USA | term dates not stated; 10-week program |  |  | ✓ | August 14, | [Apply](https://www.amazon.jobs/en/jobs/10502807/loss-prevention-specialist-intern-2027) |
| **Akuna Capital** | Quantitative Development & Strategy Intern | Chicago, IL; Chicago | Summer 2027 dates not stated; 10-week program | $75/hr | ✓ | ✓ | 2026-07-13 | [Apply](https://www.akunacapital.com/careers/job/8021481/?gh_jid=8021481) |
| **Akuna Capital** | Quantitative Research Intern | Chicago, IL; Chicago | Summer 2027 dates not stated; 10-week program | $75/hr | ✓ | ✓ | 2026-07-13 | [Apply](https://www.akunacapital.com/careers/job/8036614/?gh_jid=8036614) |
| **Aquatic Capital Management** | Quantitative Researcher – Intern | London, UK; Chicago, IL | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-04-01 | [Apply](https://job-boards.greenhouse.io/aquaticcapitalmanagement/jobs/8489186002) |
| **Arrowstreet Capital** | Quantitative Researcher Intern | Boston, MA | Summer 2027 dates not stated | $88-125/hr | ✓ | ✓ | 2026-07-10 | [Apply](https://arrowstreetcapital.wd5.myworkdayjobs.com/Campus_Careers/job/Boston/Quantitative-Researcher-Intern--Summer-2027_R1505) |
| **Belvedere Trading** | Quantitative Trading Intern | Chicago, IL | Summer 2027 dates not stated |  |  |  | 2026-08-17 | [Apply](https://go.vansh.nyc/6M) |
| **Citadel** | Quantitative Research Analyst - Intern - US | Miami, FL +1 | term dates not stated | $125/hr |  |  | 2026-07-16 | [Apply](https://www.citadel.com/careers/details/quantitative-research-analyst-intern-us/) |
| **Citadel** | Quantitative Trader: Equity Quantitative Research - Intern - US | Miami, FL +1 | term dates not stated | $125/hr |  |  | 2026-07-16 | [Apply](https://www.citadel.com/careers/details/quantitative-trader-equity-quantitative-research-intern-us/) |
| **Citadel Securities** | Quantitative Trader - Intern - US - Trading and Research | Miami, FL +1 | term dates not stated | $125/hr |  |  | 2026-07-16 | [Apply](https://www.citadelsecurities.com/careers/details/quantitative-trader-intern-us/) |
| **DRW** | Quantitative Research Intern | Chicago, IL; New York City, NY +1 | Summer 2027 dates not stated | $120-144/hr | ✓ | ✓ | 2026-07-14 | [Apply](https://www.drw.com/work-at-drw/listings/quantitative-research-intern-3413670) |
| **DRW** | Quantitative Trading Analyst Intern | Chicago, IL | Summer 2027 dates not stated | $120/hr | ✓ | ✓ | 2026-07-14 | [Apply](https://www.drw.com/work-at-drw/listings/quantitative-trading-analyst-intern-3375090) |
| **DRW** | Venture Capital Analyst Intern | Chicago, IL | term dates not stated; 10-week program | $38/hr |  | ✓ | 2026-07-13 | [Apply](https://job-boards.greenhouse.io/drweng/jobs/7993004) |
| **DV Trading** | Quantitative Research Intern - DV Equities | NYC | Summer 2027 dates not stated | $50/hr | ✓ | ✓ | 2026-09-11 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4733133005) |
| **DV Trading** | Quantitative Risk Intern | Chicago, IL | Summer 2027 dates not stated | $35-40/hr | ✓ |  | 2026-08-04 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4719118005) |
| **DV Trading** | Quantitative Trading Intern - DV Equities | NYC | Summer 2027 dates not stated | $50/hr | ✓ | ✓ | 2026-09-11 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4702083005) |
| **DV Trading** | Trading Intern - Summer 2027 - DV Commodities | NYC | Summer 2027 dates not stated | $50/hr | ✓ |  | 2026-08-17 | [Apply](https://job-boards.greenhouse.io/dvtrading/jobs/4719134005) |
| **Hudson River Trading** | Algorithm Development (Quant Research & Trading) Internship – Summer 2027 | London, United Kingdom; New York, NY, United States +1 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-07-13 | [Apply](https://www.hudsonrivertrading.com/careers/job/?gh_jid=7964062) |
| **Jane Street** | Quantitative Researcher Intern | NYC | term dates not stated |  | ✓ | ✓ | 2026-07-06 | [Apply](https://job-boards.greenhouse.io/janestreet/jobs/8498547002) |
| **Jump Trading** | Campus Quantitative Researcher - UG/MS - Intern | Chicago, IL +1 | term dates not stated; 10-week program | $138/hr | ✓ | ✓ | 2026-07-10 | [Apply](https://www.jumptrading.com/hr/job?gh_jid=7982648) |
| **Jump Trading** | Campus Quantitative Trader - Intern | Chicago, IL +1 | term dates not stated; 10-week program | $138/hr |  | ✓ | 2026-07-10 | [Apply](https://www.jumptrading.com/hr/job?gh_jid=7848371) |
| **Jump Trading** | Quantitative Trader Intern | Chicago, IL; New York, NY | Summer 2027 dates not stated; 10-week program | $144/hr |  | ✓ | 2026-07-09 | [Apply](https://www.jumptrading.com/hr/job?gh_jid=7848371) |
| **Man Group** | Systematic Quant Intern | Massachusetts | Summer 2027 dates not stated | $55-65/hr | ✓ |  | 2026-11-03 | [Apply](https://job-boards.eu.greenhouse.io/mangroup/jobs/5012811101) |
| **Peak6** | Trading Internship for Women+ Summer 2027 | Chicago, IL | Summer 2027 dates not stated | $60-75/hr | ✓ | ✓ | Posted 30+ | [Apply](https://peak6group.wd1.myworkdayjobs.com/PEAK6/job/Chicago-IL/Trading-Internship-for-Women--Summer-2027_JR105061) |
| **Tower Research Capital** | Intern | Gift City | term dates not stated |  | ✓ |  | 2026-09-07 | [Apply](https://www.tower-research.com/open-positions/?gh_jid=8184771) |
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
| **Brevan Howard** | Systematic Trading Intern | NYC | Summer 2027 dates not stated |  |  |  | 2026-09-09 | [Apply](https://wd3.myworkdaysite.com/recruiting/brevanhoward/BH_ExternalCareers/job/New-York/XMLNAME-2027-Summer-Internship-Program---Systematic-Trading--New-York_JR101591) |
| **Brevan Howard** | Trading Intern - Trading | NYC | Summer 2027 dates not stated |  |  |  | 2026-09-07 | [Apply](https://wd3.myworkdaysite.com/recruiting/brevanhoward/BH_ExternalCareers/job/New-York/XMLNAME-2027-Summer-Internship-Program---Trading--New-York_JR101583) |
| **Bridgewater Associates** | 2027 Investment Associate Intern | New York City | term dates not stated; 8-week program | $34/hr |  |  | 2026-01-28 | [Apply](https://job-boards.greenhouse.io/bridgewater89/jobs/8395041002) |
| **Point72** | 2027 Summer Internship - Investment Services | New York, New York, United States, Stamford, Connecticut, United States | Summer 2027 dates not stated; 10-week program | $43/hr |  | ✓ | 2026-09-18 | [Apply](https://boards.greenhouse.io/point72/jobs/8811167002?gh_jid=8811167002) |
| **Point72** | Investment Analyst Intern, Point72 Academy | New York, NY; San Francisco, CA +3 | Summer 2027 dates not stated |  |  |  | 2026-04-19 | [Apply](https://careers.point72.com/CSJobDetail?jobName=2027-point72-academy-investment-analyst-summer-internship-program-us&jobCode=CPA-0014081) |
| **Schonfeld** | Quantitative Research Intern 🆕 | Miami, FL | Summer 2027 dates not stated; 10-week program | $84/hr | ✓ |  | 2026-09-04 | [Apply](https://job-boards.greenhouse.io/schonfeld/jobs/8172076) |
| **Barclays** | Private Bank and Wealth Management Summer Internship Programme 2027 Jersey | Jersey, 5-6 Esplanade | Summer 2027 dates not stated |  |  |  | Posted 13  | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Jersey-5-6-Esplanade/Private-Bank-and-Wealth-Management-Summer-Internship-Programme-2027-Jersey_JR-0000125565) |
| **Goldman Sachs** | Quantitative Strategist Intern - Americas | Dallas, TX | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171532?type=students) |
| **Goldman Sachs** | Quantitative Strategist Intern - Americas - The Core Quantitative Strats | Salt Lake City, UT; Dallas, TX +1 | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171551?type=students) |
| **Goldman Sachs** | Quantitative Strategist Intern - Asset and Wealth Management - Quantitative Strats | Salt Lake City, UT | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171549?type=students) |
| **Goldman Sachs** | Quantitative Strategist Intern - Multiple Teams | NYC | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171563?type=students) |
| **Goldman Sachs** | Quantitative Strats Analyst Intern - Americas - Investment Banking | Dallas, TX | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171548?type=students) |
| **Goldman Sachs** | Summer Analyst Intern | NYC | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171550?type=students) |
| **Goldman Sachs** | Summer Analyst Intern - Americas - Investment Banking Quantitative Strats | NYC | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/171547?type=students) |
| **Goldman Sachs** | Summer Analyst Intern - FICC and Equities - Sales and Trading | West Palm Beach, FL | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-08-15 | [Apply](https://higher.gs.com/roles/181628?type=students) |
| **JPMorgan Chase** | Quantitative Research Intern 🆕 | NYC | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-03 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210774061) |
| **JPMorgan Chase** | Quantitative Research Intern - Markets - Analyst | NYC | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-03 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210774038) |
| **JPMorgan Chase** | Quantitative Research Summer Analyst Intern - Asset Management | NYC | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-03 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210774074) |
| **JPMorgan Chase** | Quantitative Research, Asset Management Summer Analyst | New York, NY | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-21 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210774074) |
| **JPMorgan Chase** | Quantitative Research, Markets, Summer Internship - Analyst | New York, NY | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-21 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210774038) |
| **Raymond James** | 2027 Investment Banking Summer Analyst Leveraged Finance New York, NY | New York, New York - United States | Summer 2027 dates not stated | $30/hr |  | ✓ | Posted 9 D | [Apply](https://raymondjames.wd1.myworkdayjobs.com/RaymondJamesEarlyCareers/job/New-York-New-York---United-States/XMLNAME-2027-Investment-Banking-Summer-Analyst-Leveraged-Finance-New-York--NY_R-0013576) |
| **RBC** | Capital Markets Intern - Quantitative Technology Services | Raleigh, NC | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-10-06 | [Apply](https://rbc.wd3.myworkdayjobs.com/RBCEARLYTALENT1/job/8081-ARCO-CORPORATE-DRIVERALEIGH/XMLNAME-2027-Capital-Markets--Quantitative-Technology-Services-Summer--Raleigh_R-0000189675) |
| **DTCC** | Model Risk Management Intern - 2027 Internship Program | Jersey City, NJ | Summer 2027 dates not stated; 10-week program |  | ✓ | ✓ | 2026-08-25 | [Apply](https://ebxr.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/214401) |
| **Federal Reserve** | 2027 Summer Internship Program - IT Asset Management Intern | Atlanta, GA | Summer 2027 dates not stated; 10-week program |  |  | ✓ | Posted 2 D | [Apply](https://rb.wd5.myworkdayjobs.com/FRS/job/Atlanta-GA/XMLNAME-2027-Summer-Internship-Program---IT-Asset-Management-Intern_R-0000033912) |

_+35 more in the full list._

</details>

---

## 🆕 New since last scan

| Company | Role | Track | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|---|
| **Electronic Arts** | Anticheat Engineer Intern 🆕 | Software | Austin, TX | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✗ rust/java | ✓ | 2026-11-03 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Anticheat-Engineer-Intern-Summer-2027/216242) |
| **Microsoft** | Software Engineer Intern, Teamwork Experiences 🆕 | Software | Redmond, WA | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-03 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557037859) |
| **Skydio** | Autonomy Engineer Intern - Reinforcement Learning 🆕 | Software | San Mateo, CA | term dates not stated | $47/hr | ✓ | ✓ | 2026-10-26 | [Apply](https://jobs.ashbyhq.com/skydio/19352f5e-c30d-4184-a070-3c25b0ebc048/application?embed=true) |
| **Galaxy** | Cybersecurity Intern 🆕 | Software | Remote; United States | Summer 2027 dates not stated | $55/hr | ✓ | ✓ | 2026-10-20 | [Apply](https://job-boards.greenhouse.io/galaxydigitalservices/jobs/6163325004) |
| **Visa** | 2027 Sophomore Internship Program - Software Engineer Intern - Austin - TX - 2027 🆕 | Software | Austin, TX | term dates not stated; 12+ weeks, so a late-July start would run into October | $39-46/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://visa.wd5.myworkdayjobs.com/en-US/visa_early_careers/job/US---Austin-TX/XMLNAME-2027-Sophomore-Internship-Program---Software-Engineer-Intern--Austin--TX---2027_REF089882W) |
| **Visa** | 2027 Sophomore Internship Program - Software Engineer Intern - Foster City 🆕 | Software | Foster City, CA | term dates not stated; 12+ weeks, so a late-July start would run into October | $46-50/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://visa.wd5.myworkdayjobs.com/en-US/visa/job/US---Foster-City-CA/XMLNAME-2027-Sophomore-Internship-Program---Software-Engineer-Intern--Foster-City_REF089919W-1) |
| **Visa** | Software Engineer - Intern - 2027 Austin - TX 🆕 | Software | Austin, TX | term dates not stated; 12+ weeks, so a late-July start would run into October | $39-46/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://visa.wd5.myworkdayjobs.com/en-US/visa_early_careers/job/US---Austin-TX/Software-Engineer--Intern---2027-Austin--TX_REF089918W) |
| **Applied Materials** | Summer 2027 Software Engineer Intern- Bachelor's/Master's - Santa Clara - CA 🆕 | Software | Santa Clara, CA | Summer 2027 dates not stated |  | ✓ |  | 2026-11-03 | [Apply](https://amat.wd1.myworkdayjobs.com/en-US/external/job/Santa-ClaraCA/Summer-2027-Software-Engineer-Intern--Bachelor-s-Master-s--Santa-Clara--CA-_R2630003) |
| **Dell** | Software Engineer Intern - Client Solutions Group Engineering 🆕 | Software | Austin, TX | Summer 2027 dates not stated | $30-32/hr | ✗ java | ✓ | 2026-09-10 | [Apply](https://iawmqy.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/careers/job/298217) |
| **Marvell** | AI-Native Development Platform Engineer Intern 🆕 | Software | Santa Clara, CA | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-09-29 | [Apply](https://marvell.wd1.myworkdayjobs.com/MarvellCareers/job/Santa-Clara-CA/AI-Native-Development-Platform-Engineer-Intern--MS---Summer-2027_2603848-1) |
| **Micron** | Intern - Front End Materials Category Supplier Manager - CSM 🆕 | Software | Boise, ID +1 | term dates not stated |  |  | ✓ | 2026-11-03 | [Apply](https://micron.wd1.myworkdayjobs.com/en-US/external/job/Boise-ID---North-Office/Intern---Front-End-Materials-Category-Supplier-Manager--CSM-_JR116161) |
| **Motorola Solutions** | Software Engineer Cybersecurity Services - 2027 Summer Internship 🆕 | Software | Remote - Virginia, USA +38 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-03 | [Apply](https://motorolasolutions.wd5.myworkdayjobs.com/en-US/careers/job/Virginia-Remote-Work/Software-Engineer-Cybersecurity-Services---2027-Summer-Internship_R69250) |
| **T-Mobile** | Summer 2027 Software Engineering Internship 🆕 | Software | Overland Park, KS | Summer 2027 dates not stated |  |  |  | 2026-10-29 | [Apply](https://tmobile.wd1.myworkdayjobs.com/en-US/external/job/Overland-Park-Kansas/Summer-2027-Software-Engineering-Internship_REQ380441) |
| **Trimble** | Software Engineer Intern 🆕 | Software | Dayton, OH; Knoxville, TN +6 | Summer 2027 dates not stated |  | ✓ |  | 2026-09-08 | [Apply](https://trimble.wd1.myworkdayjobs.com/en-US/TrimbleCareers/job/US---CO-Westminster/Software-Engineering-Intern_R57676) |
| **Zebra Technologies** | 2027 Summer Internship - US - Software Engineer 🆕 | Software | Holtsville, NY | Summer 2027 dates not stated | $41/hr |  | ✓ | 2026-11-03 | [Apply](https://zebra.wd501.myworkdayjobs.com/en-US/zebra_careers/job/Holtsville-New-York/XMLNAME-2027-Summer-Internship--US----Software-Engineer_JR103626) |
| **Zebra Technologies** | Software Engineer Intern 🆕 | Software | Holtsville, NY | Summer 2027 dates not stated | $30-33/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://zebra.wd501.myworkdayjobs.com/Zebra_careers/job/Holtsville-New-York/XMLNAME-2027-Summer-Internship--US----Software-Engineer_JR103638) |
| **Zebra Technologies** | Software Engineer Intern - AI Features & Product Convergence 🆕 | Software | Kennesaw, GA | Summer 2027 dates not stated | $33-41/hr | ✗ java | ✓ | 2026-11-04 | [Apply](https://zebra.wd501.myworkdayjobs.com/Zebra_careers/job/Kennesaw-Georgia/XMLNAME-2027-Summer-Internship--US----Software-Engineer--AI-Features---Product-Convergence--Zebra-Task-Manager_JR103636) |
| **Zebra Technologies** | Systems Engineer Intern 🆕 | Software | Germantown, MD | Summer 2027 dates not stated | $33-41/hr | ✓ | ✓ | 2026-11-04 | [Apply](https://zebra.wd501.myworkdayjobs.com/Zebra_careers/job/Germantown-Maryland/XMLNAME-2027-Summer-Internship--US----Systems-Engineer_JR103659) |
| **Boston Scientific** | AI Solutions Engineering Intern 🆕 | Software | Arden Hills, MN | Summer 2027 dates not stated |  |  |  | 2026-10-29 | [Apply](https://bostonscientific.eightfold.ai/careers/job/563602813547675) |
| **Boston Scientific** | R&D Software Design Intern 🆕 | Software | Arden Hills, MN | Summer 2027 dates not stated |  |  |  | 2026-10-29 | [Apply](https://bostonscientific.eightfold.ai/careers/job/563602813862687) |
| **Boston Scientific** | Software & Systems Testing Engineering Intern 🆕 | Software | Arden Hills, MN | Summer 2027 dates not stated |  |  |  | 2026-10-29 | [Apply](https://bostonscientific.eightfold.ai/careers/job/563602813862694) |
| **CACI** | Software Development Intern - Summer 2027 🆕 | Software | Ashburn, VA | Summer 2027 dates not stated | $22-44/hr |  |  | 2026-11-03 | [Apply](https://caci.wd1.myworkdayjobs.com/en-US/external/job/Ashburn-VA-US/Software-Development-Intern---Summer-2027_333051) |
| **General Dynamics** | Intern Engineer - Systems - Software - Electrical - Mechanical - Manufacturing - Other 🆕 | Software | USA | term dates not stated |  |  |  | 2026-11-03 | [Apply](https://careers-gdms.icims.com/jobs/76785/intern-engineer---%28systems%2c-software%2c-electrical%2c-mechanical%2c-manufacturing%2c-other%29/job) |
| **General Motors** | Simulation Intern - Software Engineer - Autonomous Vehicle: Simulation 🆕 | Software | Sunnyvale, CA | Summer 2027 dates not stated |  |  |  | 2026-10-01 | [Apply](https://generalmotors.wd5.myworkdayjobs.com/Careers_GM/job/Sunnyvale-California-United-States-of-America/XMLNAME-2027-Summer-Intern---Software-Engineer--Autonomous-Vehicle--Simulation_JR-202621503) |
| **McKesson** | Software Engineering Intern - Summer 2027 🆕 | Software | Irving, TX +3 | Summer 2027 dates not stated |  |  |  | 2026-10-08 | [Apply](https://mckesson.wd3.myworkdayjobs.com/en-US/external_careers/job/USA-TX-Irving/Software-Engineering-Intern---Summer-2027_JR0155382) |
| **Northrop Grumman** | 2027 Engineering Intern - Software/Mission Assurance/Quality - Chandler AZ 🆕 | Software | Chandler, AZ | term dates not stated; 10-week program | $19-34/hr |  | ✓ | 2026-11-03 | [Apply](https://ngc.wd1.myworkdayjobs.com/en-US/northrop_grumman_external_site/job/United-States-Arizona-Chandler/XMLNAME-2027-Engineering-Intern--Software-Mission-Assurance-Quality----Chandler-AZ_R10258848) |
| **Northrop Grumman** | 2027 Software Test Engineering Intern- Roy UT 🆕 | Software | Roy, UT | term dates not stated |  |  |  | 2026-10-30 | [Apply](https://ngc.wd1.myworkdayjobs.com/en-US/northrop_grumman_external_site/job/United-States-Utah-Roy/XMLNAME-2027-Software-Test-Engineering-Intern--Roy-UT_R10258276-1) |
| **Northrop Grumman** | Flight Software Engineer Intern 🆕 | Software | Manhattan Beach, CA | Summer 2027 dates not stated; 10-week program | $22-34/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://ngc.wd1.myworkdayjobs.com/Northrop_Grumman_External_Site/job/United-States-California-Manhattan-Beach/XMLNAME-2027-Flight-Software-Engineer-Intern---Redondo-Beach-CA_R10259032) |
| **Northrop Grumman** | Ground Software Engineer Intern 🆕 | Software | Redondo Beach, CA | Summer 2027 dates not stated; 10-week program | $22-34/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://ngc.wd1.myworkdayjobs.com/Northrop_Grumman_External_Site/job/United-States-California-Redondo-Beach/XMLNAME-2027-Ground-Software-Engineer-Intern---Redondo-Beach-CA_R10259057) |
| **Northrop Grumman** | Software Embedded Engineering Intern 🆕 | Software | Sykesville, MD | Summer 2027 dates not stated; 10-week program | $21-37/hr |  | ✓ | 2026-11-04 | [Apply](https://ngc.wd1.myworkdayjobs.com/Northrop_Grumman_External_Site/job/United-States-Maryland-Sykesville/XMLNAME-2027-S-W-Embedded-Engineering-Intern---Sykesville-MD_R10258553) |
| **RTX** | 2027 Summer/Fall Co-op - AGS Software Engineering - Onsite 🆕 | Software | Cedar Rapids, IA | posting mentions "Summer/Fall" |  | ✓ | ✓ | 2026-09-29 | [Apply](https://globalhr.wd5.myworkdayjobs.com/en-US/rec_rtx_ext_gateway/job/US-IA-CEDAR-RAPIDS-131--5450-C-Ave-NE--BLDG-131/XMLNAME-2027-Summer-Fall-Co-op--AGS-Software-Engineering--Onsite-_01871646) |
| **RTX** | Control/Diagnostic Software Intern 🆕 | Software | Jupiter, FL | Summer 2027 dates not stated |  |  | ✓ | 2026-11-04 | [Apply](https://globalhr.wd5.myworkdayjobs.com/rec_rtx_ext_gateway/job/US-FL-JUPITER-ADR--17900-Beeline-Hwy--ADR-BLDG/Intern--Summer-2027---Control-Diagnostic-Software--Onsite-_01883840) |
| **RTX** | Summer 2027 Embedded Software Engineering Intern - Onsite 🆕 | Software | EAST HARTFORD-ETC, CT | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-10-01 | [Apply](https://globalhr.wd5.myworkdayjobs.com/en-US/rec_rtx_ext_gateway/job/US-CT-EAST-HARTFORD-ETC--400-Main-St--BLDG-ETC/Summer-2027-Embedded-Software-Engineering-Intern--Onsite-_01878014) |
| **Amazon** | Product Manager Intern - ALA 🆕 | Product | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10491935/2027-amazon-leadership-accelerator-ala-product-manager-internship) |
| **Trimble** | Product Management Intern 🆕 | Product | Westminster, CO; San Diego, CA | Summer 2027 dates not stated |  |  |  | 2026-09-08 | [Apply](https://trimble.wd1.myworkdayjobs.com/en-US/TrimbleCareers/job/US---CO-Westminster/Product-Management-Intern_R57675-1) |
| **Intuit** | AI Scientist Intern 🆕 | Data | NYC; Mountain View, CA +2 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $43-87/hr | ✓ | ✓ | 2026-09-14 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-ai-science-intern/27595/100620927536) |
| **Samsung** | Agentic AI Solutions Intern 🆕 | Data | Mountain View, CA | term dates not stated | $36-63/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://job-boards.greenhouse.io/samsungresearchamericainternship/jobs/8926019002) |
| **TikTok** | AI Perception Intern - Pico 🆕 | Data | San Jose, CA | Summer 2027 dates not stated | $55/hr | ✓ | ✓ | 2026-08-03 | [Apply](https://jobs.bytedance.com/en/position/7665457718334425349/detail) |
| **Scale AI** | Safety Research Scholar Intern 🆕 | Data | Remote in USA | term dates not stated; 13+ weeks, so a late-July start would run into October | $100/hr |  |  | 2026-10-16 | [Apply](https://job-boards.greenhouse.io/scaleai/jobs/4744402005) |
| **Vatic Labs** | AI Research Internship (Summer 2027) 🆕 | Data | New York | Summer 2027 dates not stated | $113/hr | ✓ |  | 2025-09-04 | [Apply](https://job-boards.greenhouse.io/vaticlabs/jobs/7205954) |
| **Allen & Company** | Research Intern - AI for Science 🆕 | Data | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-10-19 | [Apply](https://job-boards.greenhouse.io/thealleninstitute/jobs/8293615) |
| **Allen & Company** | Research Intern - Open Ecosystem 🆕 | Data | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-10-26 | [Apply](https://job-boards.greenhouse.io/thealleninstitute/jobs/8319350) |
| **William Blair** | Agentic AI Development Intern 🆕 | Data | Chicago, IL | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35/hr | ✓ | ✓ | 2026-09-22 | [Apply](https://www.williamblair.com/Careers/job-description?gh_jid=5242282007) |
| **American Express** | Cybersecurity AI Engineer Intern - Enterprise Technology Services 🆕 | Data | Phoenix, AZ | Summer 2027 dates not stated; 10-week program |  | ✓ | ✓ | 2026-11-03 | [Apply](https://egug.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/26016065) |
| **American Express** | Undergraduate Program Cybersecurity AI Engineer Intern, Enterprise Technology Services 🆕 | Data | Phoenix, AZ | Summer 2027 dates not stated; 10-week program |  | ✓ | ✓ | 2026-11-03 | [Apply](https://egug.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/26016065) |
| **Marvell** | Data Science Intern 🆕 | Data | Boise, ID | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-10-28 | [Apply](https://marvell.wd1.myworkdayjobs.com/MarvellCareers2/job/Boise-ID/Data-Science-Intern--BS---Summer-2027_2603782) |
| **Marvell** | Data Science Intern - BS - Summer 2027 🆕 | Data | Boise, ID | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-10-29 | [Apply](https://marvell.wd1.myworkdayjobs.com/en-US/marvellcareers2/job/Boise-ID/Data-Science-Intern--BS---Summer-2027_2603782) |
| **Zebra Technologies** | 2027 Summer Internship - US - AI 🆕 | Data | Lincolnshire, IL | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://zebra.wd501.myworkdayjobs.com/en-US/zebra_careers/job/Lincolnshire-Illinois/XMLNAME-2027-Summer-Internship--US----AI_JR103639) |
| **Booz Allen Hamilton** | AI RAN Telecommunications Engineer Intern 🆕 | Data | McLean, VA | term dates not stated |  |  |  | 2026-09-30 | [Apply](https://bah.wd1.myworkdayjobs.com/en-US/bah_jobs/job/McLean-VA/AI-RAN-Telecommunications-Engineer-Intern_R0246869) |
| **Booz Allen Hamilton** | University - 2027 Summer Games Data Scientist Intern - Huntsville - AL 🆕 | Data | Huntsville, AL | Summer 2027 dates not stated | $30/hr |  |  | 2026-09-02 | [Apply](https://bah.wd1.myworkdayjobs.com/en-US/bah_jobs/job/Huntsville-AL/University---2027-Summer-Games-Data-Scientist-Intern---Huntsville--AL_R0248407) |
| **Booz Allen Hamilton** | University - 2027 Summer Games Data Scientist Intern - Royal Oak - MI 🆕 | Data | Detroit, MI | Summer 2027 dates not stated | $30/hr |  |  | 2026-11-03 | [Apply](https://bah.wd1.myworkdayjobs.com/en-US/bah_jobs/job/Detroit-MI/University---2027-Summer-Games-Data-Scientist-Intern---Royal-Oak--MI_R0252783) |
| **Schonfeld** | Quantitative Research Intern 🆕 | Finance | Miami, FL | Summer 2027 dates not stated; 10-week program | $84/hr | ✓ |  | 2026-09-04 | [Apply](https://job-boards.greenhouse.io/schonfeld/jobs/8172076) |
| **JPMorgan Chase** | Quantitative Research Intern 🆕 | Finance | NYC | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-08-03 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210774061) |
| **KeyBank** | 2027 Summer Risk Management Internship Program- Cleveland 🆕 | Finance | Cleveland, OH | Summer 2027 dates not stated; 5-week program |  |  | ✓ | Posted Tod | [Apply](https://keybank.wd5.myworkdayjobs.com/External_Career_Site/job/Cleveland-OH/XMLNAME-2027-Summer-Risk-Management-Internship-Program--Cleveland_R-41378) |
| **State Street** | State Street Investment Management - Credit Research - 2027 Summer Internship 🆕 | Finance | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  |  | Posted Tod | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---Credit-Research---2027-Summer-Internship_R-800754) |
| **State Street** | State Street Investment Management - Global Leveraged Finance Intern - 2027 Summer 🆕 | Finance | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | Posted Tod | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---Global-Leveraged-Finance-Intern---2027-Summer_R-800756) |
| **State Street** | State Street Investment Management - US Cash Client Service Team - 2027 Summer Internship 🆕 | Finance | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | Posted Tod | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---US-Cash-Client-Service-Team---2027-Summer-Internship_R-800751) |
| **GCM Grosvenor** | 2027 Treasury Summer Intern 🆕 | Finance | Chicago, Illinois, United States | Summer 2027 dates not stated | $31-34/hr |  | ✓ | 2026-11-04 | [Apply](https://job-boards.greenhouse.io/gcmgrosvenor/jobs/8004540003) |
| **GCM Grosvenor** | 2027 Valuation Summer Intern 🆕 | Finance | Chicago, Illinois, United States | Summer 2027 dates not stated | $31-34/hr |  | ✓ | 2026-11-03 | [Apply](https://job-boards.greenhouse.io/gcmgrosvenor/jobs/8004539003) |


<details>
<summary>207 roles no longer found this scan</summary>

- TikTok — Student Researcher - Large Language Model (ask; first seen 2026-11-03)
- TikTok — Student Researcher - Speech Foundation Model (ask; first seen 2026-11-03)
- TikTok — Student Researcher (ask; first seen 2026-11-03)
- Marshall Wace — Technology Intern (ask; first seen 2026-11-03)
- Virtu Financial — Quantitative Researcher Internship (ask; first seen 2026-11-03)
- Two Sigma — AI Research Scientist Intern - 2027 Summer (ask; first seen 2026-11-03)
- TikTok — Machine Learning Engineer Intern - Trust and Safety (ask; first seen 2026-11-03)
- JPMorgan Chase — Quantitative Research Intern - Risk and Treasury (ask; first seen 2026-11-03)
- TikTok — Software Engineer Intern - AI Infra Compute (ask; first seen 2026-11-03)
- TikTok — Software Engineer Intern - AI Infrastructure Compute (ask; first seen 2026-11-03)
- TikTok — Machine Learning Engineer Intern - Commercial AI-CRM and Transaction (ask; first seen 2026-11-03)
- TikTok — Data Science Intern - TikTok Live (ask; first seen 2026-11-03)
- Belvedere Trading — Quantitative Trading Intern - Summer 2027 (ask; first seen 2026-11-03)
- TikTok — Student Researcher - AI Foundation Model Infrastructure - Seed (ask; first seen 2026-11-03)
- Freddie Mac — Quantitative Risk Management Intern (ask; first seen 2026-11-03)
- C3 AI — Data Scientist Intern - Summer 2027 (ask; first seen 2026-11-03)
- American Express — Data Analytics Intern - US Consumer Services (ask; first seen 2026-11-03)
- American Express — Product Development Intern - 2027 Product Development - US Consumer Services (ask; first seen 2026-11-03)
- Emerson — Software Engineer Co-op - January 2027 - May 2027 (ask; first seen 2026-11-03)
- TikTok — Applied Scientist Intern - Multiple Teams (ask; first seen 2026-11-03)
- Citizens — Data Management Intern - Enterprise Data and Analytics (ask; first seen 2026-11-03)
- Lyft — Data Science Intern - Algorithms (ask; first seen 2026-11-03)
- Intuit — AI Research Intern (ask; first seen 2026-11-03)
- BlackRock — Quantitative Master’s Intern - Investments - Quantitative Investing (ask; first seen 2026-11-03)
- BlackRock — Quantitative Master’s Intern - Investments - Global Capital Markets (ask; first seen 2026-11-03)
- BlackRock — Quantitative Master’s Internship - Technology - Analytics & Modeling (ask; first seen 2026-11-03)
- Waymo — Quantitative Software Engineer Intern (ask; first seen 2026-11-03)
- Waymo — Software Engineering Intern - Maneuvering Tech (ask; first seen 2026-11-03)
- Viking Global Investors — Data Science Intern (ask; first seen 2026-11-03)
- Fidelity — Quantitative Analyst Intern - Fixed Income Team (ask; first seen 2026-11-03)
- Fidelity — Quantitative Research Analyst Intern - Equity Quantitative Research Team (ask; first seen 2026-11-03)
- Waymo — Software Engineer Intern - Simulation Evaluation ML Model (ask; first seen 2026-11-03)
- Emerson — Software Engineer Intern - Process Systems and Solutions (ask; first seen 2026-11-03)
- William Blair — Software Engineering Intern - Wit (ask; first seen 2026-11-03)
- William Blair — Application Development Intern - Multiple Teams (ask; first seen 2026-11-03)
- Waymo — Systems Engineer Intern - Autonomous Vehicle Networks & Diagnostics (ask; first seen 2026-11-03)
- Waymo — Perception Intern - Multiple Teams (ask; first seen 2026-11-03)
- Electronic Arts — AI Enablement Intern (ask; first seen 2026-11-03)
- Federal Reserve — Advanced Analytics Intern (ask; first seen 2026-11-03)
- Waymo — Intern - Multiple Teams (ask; first seen 2026-11-03)
- Expedia — Software Development Engineer Intern (ask; first seen 2026-11-03)
- Jain Global — Quant Research Intern - Systematic Trading (ask; first seen 2026-11-03)
- Jain Global — Data Engineer Intern (ask; first seen 2026-11-03)
- Mercor — Research Scientist Intern (ask; first seen 2026-11-03)
- Micron — SSD Architecture Modeling Intern (ask; first seen 2026-11-03)
- Waymo — Intern (ask; first seen 2026-11-03)
- Keysight — Enterprise Software Development Intern - EDA Tools (ask; first seen 2026-11-03)
- Waymo — Research Intern - Perception Foundation Models (ask; first seen 2026-11-03)
- Jain Global — Quant Modelling Intern (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - Audio - Machine Learning and Computer Vision (flex; first seen 2026-11-03)
- TikTok — Creative Product Operations Intern - Multiple Teams (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - Spatial Audio Capture and Reproduction (flex; first seen 2026-11-03)
- Bosch — Artificial Intelligence / Machine Learning: Foundation Models Intern (ask; first seen 2026-11-03)
- General Motors — Data Scaling Intern - Data Scaling - Embodied AI (ask; first seen 2026-11-03)
- Electronic Arts — Data and AI Engineer Intern (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - Language and Agents (flex; first seen 2026-11-03)
- Boston Consulting Group — Forward Deployed AI Engineer Intern (ask; first seen 2026-11-03)
- NVIDIA — Sparse Linear Algebra Libraries Intern (ask; first seen 2026-11-03)
- Waymo — Machine Learning Intern - Planning/Prediction (ask; first seen 2026-11-03)
- ServiceNow — Software Engineer Intern (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - VLM and Omni Model Post-Training (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - Egocentric Vision-Language Models (flex; first seen 2026-11-03)
- Boston Consulting Group — Forward Deployed AI Scientist Intern (ask; first seen 2026-11-03)
- KLA — Computer Vision/Machine Learning Intern (ask; first seen 2026-11-03)
- Microsoft — Researcher Intern - Coreai (ask; first seen 2026-11-03)
- General Motors — Embodied AI Data Scaling Intern - Data Scaling - Embodied AI (ask; first seen 2026-11-03)
- General Motors — Embodied AI Research Intern (ask; first seen 2026-11-03)
- General Motors — Onboard Autonomy Intern - Embodied AI (ask; first seen 2026-11-03)
- General Motors — Seam Intern - Embodied AI (ask; first seen 2026-11-03)
- Waymo — Semantics Intern (ask; first seen 2026-11-03)
- Invesco — Quantitative Research Intern (ask; first seen 2026-11-03)
- Jain Global — Quantitative Research Intern - Equity Arbitrage (ask; first seen 2026-11-03)
- Waymo — Machine Learning Intern - Simulation & Closed-Loop Training (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - Smart Glasses in Wearables AI (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - On-Device AI Model Optimization (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - Artificial Intelligence-Driven Neural Interfaces (flex; first seen 2026-11-03)
- Salesforce — AI Research Intern (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - Low-Power Scene Reconstruction for AR/VR (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - Robot Foundation Models (flex; first seen 2026-11-03)
- Keysight — Software Engineer Intern (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - Central Applied Science (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - Feed Recommendations (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - FAIR - Multimodal Foundations (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - Multi-Agent Systems and Memory (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - Physical Engineering AI (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - AI Alignment (flex; first seen 2026-11-03)
- Sony — Research Intern - Self-evolving Multimodal Foundation Models (ask; first seen 2026-11-03)
- Amazon — Data Science Intern (ask; first seen 2026-11-03)
- ZS — Business Technology Solutions Consultant Intern - University Students (ask; first seen 2026-11-03)
- TD Securities — Graduate Leadership Program Commercial Banking Intern (ask; first seen 2026-11-03)
- William Blair — Technology Intern - Wit - Data Science (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - AI Core Machine Learning (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - Meta Recommendation Systems - Core ML (flex; first seen 2026-11-03)
- Waymo — Summer Intern - Multiple Teams (ask; first seen 2026-11-03)
- Dell — Graduate Analytics Intern (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - Audio AI (flex; first seen 2026-11-03)
- Booz Allen Hamilton — Software Developer Intern - University - Summer Games (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - Search (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - Foundation Model Optimization (ask; first seen 2026-11-03)
- Dominion Energy — Power Systems Time-Series Analytics Intern (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - User Modeling and Reinforcement Learning (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - Ranking & Recommendations (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - AI Research - Speech & Audio (flex; first seen 2026-11-03)
- Allstate — Technology Internship (ask; first seen 2026-11-03)
- Arrowstreet Capital — Investment Processes Intern (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - Ads Recommendations (flex; first seen 2026-11-03)
- Workday — Analytics Engineer Intern (ask; first seen 2026-11-03)
- RTX — Sustainment Data and Analytics Intern (ask; first seen 2026-11-03)
- KLA — Image Processing Intern (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - Scam and Trust (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - AI Infra (flex; first seen 2026-11-03)
- Toyota Research Institute — Human Interactive Driving Research Intern - Perception for Driving at the Limits (ask; first seen 2026-11-03)
- Toyota Research Institute — Human Interactive Driving Research Intern - Learning-Based Control for Safe Autonomous Driving (ask; first seen 2026-11-03)
- NVIDIA — AI Systems Software Engineer Intern (ask; first seen 2026-11-03)
- C3 AI — Data Scientist Intern (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - Photorealistic Telepresence (flex; first seen 2026-11-03)
- Toyota Research Institute — Machine Learning/Agentic AI Intern (ask; first seen 2026-11-03)
- Stripe — Machine Learning Engineer Intern (ask; first seen 2026-11-03)
- Amazon — Software Development Engineer Intern (ask; first seen 2026-11-03)
- Schneider Electric — Graduate Product Management Intern (ask; first seen 2026-11-03)
- Intercontinental Exchange — Quantitative Engineer Intern (ask; first seen 2026-11-03)
- Intercontinental Exchange — Financial Engineering Intern (ask; first seen 2026-11-03)
- Zebra Technologies — Data Scientist Intern (ask; first seen 2026-11-03)
- Meta — Research Scientist Intern - PAR Safety Evals and Red Teaming (flex; first seen 2026-11-03)
- Meta — Research Scientist Intern - FM Quality ML (flex; first seen 2026-11-03)
- TikTok — Student Researcher Intern, Seed Model - Speech (ask; first seen 2026-11-03)
- TikTok — Student Researcher Intern, Seed Model - LLM (ask; first seen 2026-11-03)
- TikTok — Student Researcher Intern, Seed Model: Multimodal Interaction & World Model (ask; first seen 2026-11-03)
- TikTok — Machine Learning Engineer Intern, TikTok-Data-Search-Local Service (ask; first seen 2026-11-03)
- TikTok — Student Researcher Intern, Seed Model - Vision (ask; first seen 2026-11-03)
- Applied Materials — 2027 Summer Intern - Software Engineer - Bachelors Degree - Santa Clara (ask; first seen 2026-11-03)
- Sonos — Software Engineering Intern - Seattle (ask; first seen 2026-11-03)
- Northrop Grumman — 2027 Software Engineering Intern - Boulder CO (ask; first seen 2026-11-03)
- Visa — Software Engineer - Intern - 2027 Ashburn - VA (ask; first seen 2026-11-03)
- Visa — Software Engineer - Intern - Foster City 2027 (ask; first seen 2026-11-03)
- Visa — 2027 Sophomore Internship Program - Software Engineer Intern - Ashburn (ask; first seen 2026-11-03)
- Visa — 2027 Sophomore Internship Program - Software Engineer Intern - Highlands Ranch (ask; first seen 2026-11-03)
- Trimble — Software Engineering Intern (ask; first seen 2026-11-03)
- Expedia — Software Development Engineering Intern - 2027 - Austin - San Jose - Seattle (ask; first seen 2026-11-03)
- Motorola Solutions — DSP - Digital Signal Processing Software Engineering Intern - Summer 2027 (ask; first seen 2026-11-03)
- Salesforce — Summer 2027 Intern - AI Research (ask; first seen 2026-11-03)
- Boeing — Boeing Summer 2027 Internship Program - Paid - Data Analytics Intern (ask; first seen 2026-11-03)
- Cisco — Data Analyst I - Intern - United States (ask; first seen 2026-11-03)
- Invesco — Quantitative Strategies Research Intern (ask; first seen 2026-11-03)
- Invesco — Quantitative Intern - Portfolio Engineering and Analytics (ask; first seen 2026-11-03)
- Intel — AI Solution Architect Graduate Intern (ask; first seen 2026-11-03)
- Nike — NIKE - Inc. AI & Machine Learning - Innovation Graduate Internship (ask; first seen 2026-11-03)
- Toyota Research Institute — Human-Centered AI Research Intern - Causal Reasoning Models (ask; first seen 2026-11-03)
- Eli Lilly — AI Machine Learning Engineer Intern - BS (ask; first seen 2026-11-03)
- Eli Lilly — AI Data Engineering Intern - BS (ask; first seen 2026-11-03)
- Booz Allen Hamilton — University - 2027 Summer Games Data Scientist Intern - Annapolis Junction - MD (ask; first seen 2026-11-03)
- Booz Allen Hamilton — University - 2027 Summer Games Data Scientist Intern - Ft. Walton Beach - FL (ask; first seen 2026-11-03)
- Freddie Mac — Risk Management Graduate Intern - Quantitative Summer 2027 (ask; first seen 2026-11-03)
- NVIDIA — Go-to-Market Strategy Intern, NPN AI Consulting - Summer 2027 (ask; first seen 2026-11-03)
- Intel — Software Engineering - Intern, Graduate (ask; first seen 2026-11-03)
- Waymo — 2027 Summer Intern, MS, Software Engineering, Behavior Test (ask; first seen 2026-11-03)
- Palantir — Finance Operator Intern (ask; first seen 2026-11-03)
- Arrowstreet Capital — Software Engineer Intern, Summer 2027 (ask; first seen 2026-11-03)
- Man Group — Systematic Fast Trading Intern (ask; first seen 2026-11-03)
- Point72 — Quantitative Researcher Intern (ask; first seen 2026-11-03)
- Point72 — Quantitative Research Intern (ask; first seen 2026-11-03)
- Brevan Howard — 2027 Summer Internship Program – Systematic Trading, New York (ask; first seen 2026-11-03)
- JPMorgan Chase — 2027 Commercial & Investment Bank Risk Management Summer Analyst Program (ask; first seen 2026-11-03)
- Barclays — 2027 Technology Developer Summer Internship Programme Knutsford (ask; first seen 2026-11-03)
- Barclays — 2027 Technology Cyber and Security Summer Internship Programme Knutsford (ask; first seen 2026-11-03)
- Barclays — 2027 Technology Analyst Summer Internship Programme Northampton (ask; first seen 2026-11-03)
- Barclays — 2027 Technology Analyst Summer Internship Programme Knutsford (ask; first seen 2026-11-03)
- Barclays — 2027 Technology Developer Summer Internship Programme Northampton (ask; first seen 2026-11-03)
- William Blair — Working in Technology (WiT) Platform Engineering - Summer 2027 (ask; first seen 2026-11-03)
- Macquarie — Data Science Intern (ask; first seen 2026-11-03)
- Northern Trust — Wealth Management Intern - Delaware (ask; first seen 2026-11-03)
- Pacific Life — Summer Intern Investment Analyst (ask; first seen 2026-11-03)
- Blue Origin — Software Developer Intern - Avionics Software (ask; first seen 2026-11-03)
- Blue Origin — Avionics Software Intern (ask; first seen 2026-11-03)
- Bose — Audio Machine Learning Intern Co-op (ask; first seen 2026-11-03)
- Lawrence Livermore National Laboratory — Predictive Science Academic Alliance Program 4 Student Intern (ask; first seen 2026-11-03)
- Lawrence Livermore National Laboratory — Atomistic and Data-Driven Modeling of Materials for Energy Applications Intern (ask; first seen 2026-11-03)
- Lawrence Livermore National Laboratory — Computational Modeling Intern (ask; first seen 2026-11-03)
- Navy Federal — Data Analytics Intern (ask; first seen 2026-11-03)
- Lawrence Livermore National Laboratory — Ab Initio Nuclear Theory Postdoctoral Researcher Intern (ask; first seen 2026-11-03)
- Salesforce — Forward Deployed Engineer Intern - Global Public Sector (ask; first seen 2026-11-03)
- Toyota Research Institute — Human Interactive Driving Research Intern - World Models (ask; first seen 2026-11-03)
- ASML — Product Engineer Computational Model Intern (ask; first seen 2026-11-03)
- Blue Origin — Summer 2027 Software Developer Internship - Graduate (ask; first seen 2026-11-03)
- Blue Origin — Summer 2027 Avionics Software Internship - Graduate (ask; first seen 2026-11-03)
- Principal — Quantitative Analyst Intern - Quantitative Research (ask; first seen 2026-11-03)
- KLA — PLM Business Intelligence & Analytics Intern (ask; first seen 2026-11-03)
- KLA — AI/ML Software Engineer Intern (ask; first seen 2026-11-03)
- Zebra Technologies — Supplies & Sensors Product Manager Intern - US (ask; first seen 2026-11-03)
- Toyota Research Institute — Human Aware Interactions and Learning Intern (ask; first seen 2026-11-03)
- John Deere — Software Engineer Intern - Product Engineering (ask; first seen 2026-11-03)
- Samsung — Power-Thermal Simulation Software Engineer Intern (ask; first seen 2026-11-03)
- Samsung — Systems Software Engineer Intern (ask; first seen 2026-11-03)
- KLA — Software Engineer Intern - AI/ML (ask; first seen 2026-11-03)
- Samsung — Systems Software Engineering Intern (ask; first seen 2026-11-03)
- KLA — PLM BI & Analytics Intern (ask; first seen 2026-11-03)
- KLA — Digital Twin Eng Apps Intern (ask; first seen 2026-11-03)
- ASML — Internship - Software Quality Assurance (ask; first seen 2026-11-03)
- CACI — Software Engineering Co-op - Summer & Fall 2027 (flex; first seen 2026-11-03)

</details>

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
