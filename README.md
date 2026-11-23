# LSS — Late-Summer Internship Scanner

Scans for **US internships at well-known firms** in **software engineering, product management, data/analytics and finance/investment** that can run **after an early-summer internship: starting mid/late July 2027 and ending by 2027-09-30**. Sister project of [QJS](https://github.com/Jiang6082/QJS), [PTS](https://github.com/Jiang6082/PTS) and [ECS](https://github.com/Jiang6082/ECS).

**Filters:** US only (incl. US-remote) · known firms only ([list](inputs/known_firms.json)) · pay ≥ $30/hr when the posting states pay · undergrad roles (PhD / MBA / master's-only excluded) · titles naming C++, Java, iOS/Android, embedded or hardware skipped (Python-friendly) · posted in the last 30 days (undated postings kept) · window 2027-07-13 → 2027-09-30 ([config](inputs/config.json))

> **Last scan:** 2026-11-23 &nbsp;•&nbsp; **0 dates fit** &nbsp;•&nbsp; **4 flexible / near miss** &nbsp;•&nbsp; **415 summer, dates not stated** &nbsp;•&nbsp; **22 new** &nbsp;•&nbsp; 17 closed postings dropped

**Jump to:** [✅ Dates fit](#-dates-fit) · [🟡 Flexible](#-flexible-start--near-miss) · [⚪ Dates not stated](#-summer-2027--dates-not-stated) · [🆕 New](#-new-since-last-scan) · [How it works](#how-it-works) · [How to run](#how-to-run) · [CSV of everything](reports/roles.csv)

| Bucket | What it means | What to do |
|---|---|---|
| ✅ **Dates fit** | The posting's own dates (or start + length) land inside 2027-07-13 → 2027-09-30 | Apply |
| 🟡 **Flexible / near miss** | Flexible, rolling or multiple start dates; off-cycle; Summer/Fall; a start inside the window with no end date; or a few days outside it | Apply, then confirm dates with the recruiter |
| ⚪ **Dates not stated** | Summer 2027 role whose posting gives no dates | Ask whether a late-July start is possible before investing in the application |

Posted: the most recent date the role was posted on any board. Py: ✓ = posting mentions Python · ✗ = mentions only other languages · blank = none listed. UG: ✓ = posting explicitly includes undergraduates · blank = description read, no degree level stated · ? = description couldn't be read, check the posting. Roles requiring a Master's, PhD, MBA or JD are removed ([what was removed](reports/degree_screen.md)).

---

## ✅ Dates fit

_None right now._

---

## 🟡 Flexible start / near miss

### 💻 Software Engineering (2)

<details open>
<summary>2 roles</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Network Development Engineer Intern, 2027 Summer | Seattle, Washington, USA | starts Aug — end date not stated |  | ✓ | ✓ | 2026-10-27 | [Apply](https://www.amazon.jobs/en/jobs/10590368/network-development-engineer-intern-2027-summer) |
| **Epic Games** | AI Programmer Intern | Cary, NC | flexible — posting says "flexible start" |  | ✓ | ✓ | 2026-11-09 | [Apply](https://epicgames.com/careers/jobs/6251540004?gh_jid=6251540004) |

</details>

### 📱 Product Management (2)

<details open>
<summary>2 roles</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Cloudflare** | Product Manager Intern | Austin, TX | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  |  | ✓ | 2026-10-29 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8274790) |
| **Cloudflare** | Product Manager Intern (2027) - Austin, TX | In-Office | May - Sep — 12 wks anywhere in May - Sep; ask for a late-July start |  |  | ✓ | 2026-10-29 | [Apply](https://boards.greenhouse.io/cloudflare/jobs/8274790?gh_jid=8274790) |

</details>

---

## ⚪ Summer 2027 — dates not stated

415 roles. The first 60 per track are below; the full list is in [reports/summer_dates_not_stated.md](reports/summer_dates_not_stated.md).

<details>
<summary><strong>💻 Software Engineering</strong> (246)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Associate Engagement Manager Intern- National Security, AWS Professional Services | Arlington, Virginia, USA | term dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-11-02 | [Apply](https://www.amazon.jobs/en/jobs/10594714/associate-engagement-manager-intern-national-security-aws-professional-services) |
| **Bloomberg** | Engineering Intern | Arlington, VA - 1801 S Bell (INDG) | term dates not stated |  |  | ✓ | 2026-11-13 | [Apply](https://bloomberg.wd1.myworkdayjobs.com/Bloombergindustrygroup_External_Career_Site/job/Arlington-VA---1801-S-Bell-INDG/Engineering-Intern_145704) |
| **Cisco** | AI Cybersecurity Engineer I - Intern - United States | North Carolina, USA | term dates not stated | $89/hr | ✓ | ✓ | 2026-11-20 | [Apply](https://cisco.wd5.myworkdayjobs.com/en-US/cisco_careers/job/RTP-North-Carolina-US/AI-Cybersecurity-Engineer-I--Intern----United-States_2030295) |
| **Cisco** | AI Cybersecurity Engineer I Intern | Research Triangle Park, NC | Summer 2027 dates not stated | $89/hr | ✓ | ✓ | 2026-11-20 | [Apply](https://careers.cisco.com/global/en/job/CISCISGLOBAL2030295EXTERNALENGLOBAL/AI-Cybersecurity-Engineer-I-Intern-United-States) |
| **Electronic Arts** | Anticheat Engineer Intern | Austin, TX | Summer 2027 dates not stated |  |  |  | 2026-11-03 | [Apply](https://jobs.ea.com/en_US/careers/SearchJobs) |
| **Intel** | Signal Integrity Engineering Intern | US, Arizona, Phoenix | term dates not stated | $41/hr | ✓ | ✓ | 2026-11-20 | [Apply](https://intel.wd1.myworkdayjobs.com/External/job/US-Arizona-Phoenix/Signal-Integrity-Engineering-Intern_JR0289449) |
| **Intuit** | Software Engineering Intern, Full Stack | United States | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $36-79/hr |  | ✓ | 2026-10-30 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-software-engineering-intern-full-stack/27595/100620927520) |
| **Microsoft** | First-Year Explore Program Engineering Intern | Redmond, WA | Summer 2027 dates not stated | $26-48/hr |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556925823) |
| **Microsoft** | Software Engineer Intern | Redmond, WA; Aliso Viejo, CA | Summer 2027 dates not stated | $52/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557037859) |
| **Microsoft** | Software Engineer Intern, CoreAI | Multiple Locations, United States; Redmond, WA | Summer 2027 dates not stated | $33/hr |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0) |
| **Microsoft** | Software Engineer Intern, Teamwork Experiences | Redmond, WA | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557037859) |
| **Microsoft** | Software Engineer: Security & Identity Intern Opportunities for University Students - Redmond | Redmond, WA | term dates not stated | $52/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556922930) |
| **Nintendo** | Intern - Software Engineer, DevOps (NTD) | Redmond, WA | term dates not stated | $45/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4472002009) |
| **Nintendo** | Software Engineer Intern - Audio | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4470048009) |
| **Nintendo** | Software Engineer Intern - Connectivity | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-29 | [Apply](https://careers.nintendo.com/?gh_jid=4472147009) |
| **Nintendo** | Software Engineer Intern - CPU Debugger - NTD | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4471972009) |
| **Nintendo** | Software Engineer Intern - CPU Profiler | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4469762009) |
| **Nintendo** | Software Engineer Intern - Graphics | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4473550009) |
| **Nintendo** | Software Engineer Intern - Performance Tools | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4473568009) |
| **Nintendo** | Software Engineer Intern - Platform Security | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4469778009) |
| **Nintendo** | Software Engineer Intern, CPU Debugger | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4471972009) |
| **Nintendo** | Software Engineer Intern, DevOps | Redmond, WA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4472002009) |
| **NVIDIA** | AI Systems Software Engineering Intern | Austin, TX | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-10-30 | [Apply](https://jobs.nvidia.com/careers/job/893398073452) |
| **NVIDIA** | NVIDIA 2027 Internships: Software Engineering | Santa Clara, CA | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✓ | ✓ | 2026-08-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Software-Engineering_JR2023495) |
| **NVIDIA** | NVIDIA 2027 Internships: Systems Software Engineering | Santa Clara, CA; US, CA, Santa Clara | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✗ c++ | ✓ | 2026-11-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Systems-Software-Engineering_JR2023492) |
| **NVIDIA** | Performance Testing Engineering Intern - 2027 | Armenia, Yerevan | term dates not stated |  | ✓ | ✓ | 2026-10-29 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/Armenia-Yerevan/Performance-Testing-Engineering-Intern---2027_JR2028481-1) |
| **NVIDIA** | Software Engineering Intern | Canada; Santa Clara, CA +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-11-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Software-Engineering_JR2023495) |
| **Palantir** | Software Engineer Intern - Connectivity Platform - Product | Denver, CO | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-10 | [Apply](https://jobs.lever.co/palantir/eb496d6a-a960-43d3-a09b-e3843052f54e/apply) |
| **Palantir** | Software Engineer Intern - Connectivity Platform and Product | NYC; Denver, CO +1 | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-10 | [Apply](https://jobs.lever.co/palantir/130ee501-bd22-4d44-b651-39581ef97743/apply) |
| **Palantir** | Software Engineer Intern - Data Connectors | NYC; New York, NY | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-10 | [Apply](https://jobs.lever.co/palantir/45e4617d-d658-4b30-8dc9-378ca84a027a/apply) |
| **Palantir** | Software Engineer Intern - Sovereign AI Systems | NYC; New York, NY | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://jobs.lever.co/palantir/cd64bcd4-50bb-4aeb-a135-4e0487ffd312/apply) |
| **PayPal** | Cybersecurity Intern | San Jose, CA; Scottsdale, AZ +2 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922982812) |
| **PayPal** | Cybersecurity Intern - Summer 2027 | San Jose, California, United States of America; Chicago, Illinois, United States of America +2 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.wd1.myworkdayjobs.com/jobs/job/San-Jose-California-United-States-of-America/Cybersecurity-Intern---Summer-2027_R0138587) |
| **PayPal** | Software Engineer Intern | Austin, TX; San Jose, CA +8 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922982814) |
| **PayPal** | Software Engineer Intern - Summer 2027 | San Jose, CA +4; San Jose, California, United States of America +4 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.wd1.myworkdayjobs.com/en-US/jobs/job/San-Jose-California-United-States-of-America/Software-Engineer-Intern---Summer-2027_R0138586) |
| **Salesforce** | Summer 2027 Intern - Software Engineer - Security/Government | California, USA +2; California - San Francisco +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $54/hr | ✗ java |  | 2026-10-30 | [Apply](https://salesforce.wd12.myworkdayjobs.com/en-US/external_career_site/job/California---San-Francisco/Summer-2027-Intern---Software-Engineer--Security-Government-_JR364911-1) |
| **Samsung** | AI Application Engineer Intern | San Jose, CA; Folsom, CA | term dates not stated | $28-68/hr | ✓ |  | 2026-11-02 | [Apply](https://job-boards.greenhouse.io/samsungsemiconductor/jobs/8163994003) |
| **Samsung** | Architecture Research Engineer Intern - MoE Placement for Serving at Scale | San Jose, CA | term dates not stated | $28-68/hr |  |  | 2026-11-18 | [Apply](https://job-boards.greenhouse.io/samsungsemiconductor/jobs/8208494003) |
| **ServiceNow** | AI Security Engineer Intern | San Diego, CA | term dates not stated |  |  | ✓ | 2026-11-13 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161548289-ai-security-engineer-intern?oga=true) |
| **ServiceNow** | Associate Detection Engineering Intern | Kirkland, WA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161210069) |
| **ServiceNow** | Associate Information Security Engineer Intern | San Diego, CA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161204235) |
| **ServiceNow** | Associate Security Engineering & Automation Intern | Santa Clara, CA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161209810) |
| **Tesla** | Physics Engine Development Engineer Intern, Optimus | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-11-02 | [Apply](https://www.tesla.com/careers/search/job/282147) |
| **Tesla** | Software Engineer Intern - Energy Engineering | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-11-13 | [Apply](https://www.tesla.com/careers/search/job/289796) |
| **Tesla** | Software Engineer Intern - SI Reinforcement Learning | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-11-07 | [Apply](https://www.tesla.com/careers/search/job/289241) |
| **Tesla** | Software Engineering Intern, People Products | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-11-02 | [Apply](https://www.tesla.com/careers/search/job/284004) |
| **TikTok** | AI Infrastructure Engineer Intern, Compute Efficiency & Scheduling | Seattle, WA; San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $43/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7668802157205965109) |
| **TikTok** | Backend Development Engineer Intern, Infrastructure Platform Delivery | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✗ java | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7668489218234157365) |
| **TikTok** | Backend Software Engineer Intern - Creation Platform | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7670289874020993285) |
| **TikTok** | Frontend Engineer Intern - Ads Interface | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-60/hr |  | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7671211313289398581) |
| **TikTok** | Fullstack Software Engineer Intern, Global E-Commerce | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7670738362521520437) |
| **TikTok** | Machine Learning MLOps Intern, Global SRE | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7670875283026053381) |
| **TikTok** | Multi-Cloud CDN Scheduling Platform Engineer Intern, CDN Platform | Seattle, WA; San Jose, CA | Summer 2027 dates not stated | $43/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7670359288608114949) |
| **TikTok** | Network Software Development Engineer Intern, Network Observation | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7670772641439041797) |
| **TikTok** | Network Software Development Engineer Intern, Network Switch | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7670778018960542005) |
| **TikTok** | Recommendation Architecture AI/ML Infrastructure Engineer Intern, Data-Arch-TikTok Live | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7670876223732762933) |
| **TikTok** | Research Engineer Intern - Monetization Technology - Business Integrity | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7668202602270951733) |
| **TikTok** | Security Software Engineer Project Intern, Network Security | San Jose, CA | Summer 2027 dates not stated; 13+ weeks, so a late-July start would run into October | $45-60/hr |  | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7600201731980675333) |
| **TikTok** | Self-Built Engineer Intern - CDN Platform | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://jobs.bytedance.com/en/position/7670364362450733317/detail) |
| **TikTok** | Site Reliability Engineer Intern, Data Infra | Seattle, WA; San Jose, CA | Summer 2027 dates not stated | $43/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7672922352988342533) |

_+186 more in the full list._

</details>

<details>
<summary><strong>📱 Product Management</strong> (12)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Salesforce** | Product Management Intern - Product Management | SF; NYC | Summer 2027 dates not stated | $54-61/hr |  | ✓ | 2026-11-06 | [Apply](https://salesforce.wd12.myworkdayjobs.com/Futureforce_Internships/job/California---San-Francisco/Summer-2027-Intern---Product-Management_JR367659) |
| **Salesforce** | Summer 2027 Intern - Product Management | California - San Francisco; New York - New York | Summer 2027 dates not stated | $54-61/hr |  | ✓ | 2026-11-20 | [Apply](https://salesforce.wd12.myworkdayjobs.com/External_Career_Site/job/California---San-Francisco/Summer-2027-Intern---Product-Management_JR367659-1) |
| **Nuro** | Technical Program Manager, Systems Intern 🆕 | Mountain View, California (HQ) | term dates not stated |  |  | ✓ | 2026-11-23 | [Apply](https://nuro.ai/careersitem?gh_jid=8412577) |
| **Shield AI** | Program Manager, Intern Experience | Seattle, WA, US | term dates not stated |  |  |  | 2026-11-17 | [Apply](https://jobs.ashbyhq.com/shield/af061c1a-f291-4540-be30-2df5adc22cc5) |
| **Nationwide** | Summer 2027 State Product Analyst Intern - Personal Lines | Iowa - Des Moines, 1100 Locust Street; Ohio - Columbus, One Nationwide Plaza | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $23-50/hr |  | ✓ |  | [Apply](https://nationwide.wd1.myworkdayjobs.com/Nationwide_Career/job/Iowa---Des-Moines-1100-Locust-Street/Summer-2027-State-Product-Analyst-Intern---Personal-Lines_099794) |
| **State Street** | State Street Product Management Team - Business Analyst - Summer Internship 2027 | Boston, Massachusetts | Summer 2027 dates not stated |  |  | ✓ | 2026-11-20 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Product-Management-Team---Business-Analyst---Summer-Internship-2027_R-801339) |
| **Invesco** | Digital Product Management Intern | Atlanta, GA | Summer 2027 dates not stated |  |  | ? | 2026-11-05 | [Apply](https://invesco.wd1.myworkdayjobs.com/en-US/IVZ/job/Atlanta-Georgia/Early-Career-Intern---Digital-Product-Management_R-15876-1) |
| **Lucid Software** | Product Management Intern | Raleigh, NC; Salt Lake City, UT | Summer 2027 dates not stated |  |  | ✓ | 2026-11-18 | [Apply](https://job-boards.greenhouse.io/lucidsoftware/jobs/6239818004) |
| **DocuSign** | Product Manager Intern | SF | term dates not stated; 13+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-11-06 | [Apply](https://careers.docusign.com/jobs/30625?icims=1&lang=en-us) |
| **Micron** | CMBU Product Management Intern | San Jose, CA | term dates not stated | $56/hr | ✓ | ✓ | 2026-10-27 | [Apply](https://micron.wd1.myworkdayjobs.com/External/job/San-Jose-CA/Intern---CMBU-Product-Management_JR115941) |
| **Micron** | NAND Storage Strategic Roadmap Planning Intern | Boise, ID | term dates not stated |  |  | ✓ | 2026-10-27 | [Apply](https://micron.wd1.myworkdayjobs.com/External/job/Boise-ID---Main-Site/Intern---NAND-Storage-Strategic-Roadmap-Planning_JR115838) |
| **Motorola Solutions** | Program Manager Intern - Summer 2027 | Plantation, FL | Summer 2027 dates not stated |  |  | ✓ | 2026-11-11 | [Apply](https://motorolasolutions.wd5.myworkdayjobs.com/Careers/job/Plantation-FL/Program-Manager-Intern---Summer-2027_R69762) |

</details>

<details>
<summary><strong>📊 Data / Analytics / ML</strong> (134)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Adobe** | 2027 Intern - Applied and Research Scientist/Engineer | College, AK +3; San Jose +5 | term dates not stated | $55/hr |  | ✓ | 2026-11-23 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Applied-and-Research-Scientist-Engineer_R172064) |
| **Atlassian** | AI Researcher Intern 🆕 | Seattle, WA; SF | term dates not stated |  |  | ? | 2026-10-26 | [Apply](https://campus-americas.icims.com/jobs/26246/ai-researcher-%28phd%29%2c-2027-graduate-u.s./job) |
| **Cisco** | Data Science Analyst II - Intern - Untied States | San Jose, CA | term dates not stated | $89/hr | ✓ | ✓ | 2026-11-20 | [Apply](https://cisco.wd5.myworkdayjobs.com/en-US/cisco_careers/job/San-Jose-California-US/Data-Science-Analyst-II--Intern----Untied-States_2032691) |
| **Cisco** | Data Science Analyst II Intern | San Jose, CA | Summer 2027 dates not stated | $89/hr | ✓ | ✓ | 2026-11-20 | [Apply](https://cisco.wd5.myworkdayjobs.com/en-US/Cisco_Careers/job/San-Jose-California-US/Data-Science-Analyst-II--Intern----Untied-States_2032691) |
| **Microsoft** | Applied Scientist Intern | Redmond, WA | term dates not stated | $33/hr |  | ✓ | 2026-10-29 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556986141) |
| **Microsoft** | Applied Scientist Intern, Turing | Redmond, WA | Summer 2027 dates not stated | $33/hr |  | ✓ | 2026-10-29 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557050150) |
| **NVIDIA** | Deep Learning Intern | Santa Clara, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-31 | [Apply](https://jobs.nvidia.com/careers/job/893397026418) |
| **NVIDIA** | Finance AI Engineering Intern | Santa Clara, CA | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/nvidiaexternalcareersite/job/US-CA-Santa-Clara/Finance-AI-Engineering-Intern---Summer-2027_JR2029131) |
| **NVIDIA** | Finance AI Engineering Intern - Summer 2027 | Santa Clara, CA; US, CA, Santa Clara | Summer 2027 dates not stated | $62/hr | ✓ | ✓ | 2026-11-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/Finance-AI-Engineering-Intern---Summer-2027_JR2029131) |
| **NVIDIA** | NVIDIA 2027 Internships: Deep Learning | Santa Clara, CA; US, CA, Santa Clara | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✓ | ✓ | 2026-11-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning_JR2023497-1) |
| **NVIDIA** | NVIDIA 2027 Internships: Deep Learning Computer Architecture | Santa Clara, CA; US, CA, Santa Clara | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr |  | ✓ | 2026-11-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning-Computer-Architecture_JR2023491) |
| **PayPal** | Data Scientist Intern | San Jose, CA | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922982821) |
| **PayPal** | Data Scientist Intern - Summer 2027 | San Jose, CA; San Jose, California, United States of America | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.wd1.myworkdayjobs.com/en-US/jobs/job/San-Jose-California-United-States-of-America/Data-Scientist-Intern---Summer-2027_R0138582) |
| **PayPal** | Machine Learning Engineer Intern | San Jose, CA | Summer 2027 dates not stated | $50-59/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922983149) |
| **PayPal** | Machine Learning Engineer Intern - Summer 2027 | San Jose, CA; San Jose, California, United States of America | Summer 2027 dates not stated | $50-59/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.wd1.myworkdayjobs.com/en-US/jobs/job/San-Jose-California-United-States-of-America/Machine-Learning-Engineer-Intern---Summer-2027_R0138581) |
| **Samsung** | AI Data Analyst Intern | Plano, TX | term dates not stated |  | ✓ | ✓ | 2026-11-06 | [Apply](https://sec.wd3.myworkdayjobs.com/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/Samsung-Care-AI-Data-Analytic-Intern_R121971-1) |
| **Samsung** | Business Intelligence & Data Analytics Intern | Plano, TX | Summer 2027 dates not stated; 10-week program |  | ✓ |  | 2026-11-06 | [Apply](https://sec.wd3.myworkdayjobs.com/en-US/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/Business-Intelligence---Data-Analytics-Intern_R121949) |
| **Samsung** | Care AI Data Analytic Intern | Plano, TX | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-06 | [Apply](https://sec.wd3.myworkdayjobs.com/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/Samsung-Care-AI-Data-Analytic-Intern_R121971-1) |
| **Samsung** | ePro Business & Data Analyst Intern | Plano, TX | term dates not stated |  |  | ✓ | 2026-11-08 | [Apply](https://sec.wd3.myworkdayjobs.com/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/ePro-Business---Data-Analyst-Intern_R121996) |
| **Samsung** | Intern - Architecture Research Engineer - Agentic AI Workload Characterization | San Jose, CA | term dates not stated | $28-68/hr |  |  | 2026-11-18 | [Apply](https://job-boards.greenhouse.io/samsungsemiconductor/jobs/8208600003) |
| **Samsung** | Intern - LLM Inference Acceleration Architecture - Distributed Memory-Centric Accelerators | San Jose, CA | term dates not stated | $28-68/hr | ✓ |  | 2026-11-18 | [Apply](https://job-boards.greenhouse.io/samsungsemiconductor/jobs/8208641003) |
| **Samsung** | LLM Inference Acceleration Architecture Intern, Distributed Memory-Centric Accelerators | San Jose, CA | Summer 2027 dates not stated | $28-68/hr | ✓ |  | 2026-11-18 | [Apply](https://job-boards.greenhouse.io/samsungsemiconductor/jobs/8208641003) |
| **Samsung** | Samsung Care AI Data Analytic Intern | Plano, TX | term dates not stated |  | ✓ | ✓ | 2026-11-06 | [Apply](https://sec.wd3.myworkdayjobs.com/en-US/samsung_careers/job/6625-Excellence-Way-Plano-TX-USA/Samsung-Care-AI-Data-Analytic-Intern_R121971-1) |
| **ServiceNow** | AI Identity Intern | Kirkland, WA | term dates not stated |  |  | ✓ | 2026-11-13 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161594249-ai-identity-intern?oga=true) |
| **ServiceNow** | Assoc AI Engineering - Cloud Security Automation Intern | Santa Clara, CA | term dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161209600-assoc-ai-engineering-cloud-security-automation-intern?oga=true) |
| **ServiceNow** | Associate AI Engineering Intern, Cloud Security Automation | Santa Clara, CA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161209600) |
| **Tesla** | Data Engineer Intern - Energy | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-10-29 | [Apply](https://www.tesla.com/careers/search/job/287982) |
| **TikTok** | Agent Evaluation & Evolution Machine Learning Engineer Intern, AML-Ark-US | Seattle, WA; San Jose, CA | Summer 2027 dates not stated | $43/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7672391300141877557) |
| **TikTok** | Data Engineer Intern - Data Platform Global Live | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7674032146438162693) |
| **TikTok** | Data Engineer Intern - Monetization Data | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7671232204182276405) |
| **TikTok** | Data Engineer Intern, Data Platform TikTok BP | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-60/hr |  | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7681783406632782085) |
| **TikTok** | Data Engineering Project Intern, Ads Targeting | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7668533140146817333) |
| **TikTok** | Data Science Intern, TikTok Integrity and Safety | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7669682935444900149) |
| **TikTok** | Data Science Project Intern, Advertisement | San Jose, CA | Summer 2027 dates not stated | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7675080308216154373) |
| **TikTok** | Data Scientist Intern - VOD Data | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7670287013157095733) |
| **TikTok** | Data Scientist Project Intern, TikTok Integrity and Safety | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7610543185362372917) |
| **TikTok** | Machine Learning Engineer Intern | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-13 | [Apply](https://lifeattiktok.com/search/7667338938890930437) |
| **TikTok** | Machine Learning Engineer Intern - Ads Signal & Measurement | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7669700361976809733) |
| **TikTok** | Machine Learning Engineer Intern - E-Commerce Recommendation Mall | Seattle, WA; San Jose, CA | Summer 2027 dates not stated | $43/hr | ✓ | ✓ | 2026-11-11 | [Apply](https://lifeattiktok.com/search/7694362229701069109) |
| **TikTok** | Machine Learning Engineer Intern - Performance Monetization | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7669693163422845237) |
| **TikTok** | Machine Learning Engineer Intern - Search Ads | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7669698648817305909) |
| **TikTok** | Machine Learning Engineer Intern - Search Quality | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7665475460339665157) |
| **TikTok** | Machine Learning Engineer Intern, AML-Engine-Orchestration | San Jose, CA; Seattle, WA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7671291260529821957) |
| **TikTok** | Machine Learning Engineer Intern, Commerce Ads | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7669711968043092229) |
| **TikTok** | Machine Learning Engineer Intern, Data-Global E-Commerce-Search | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-13 | [Apply](https://lifeattiktok.com/search/7698822572474583301) |
| **TikTok** | Machine Learning Engineer Intern, Global E-Commerce Search | Seattle, WA | Summer 2027 dates not stated | $43-57/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7668396597746862341) |
| **TikTok** | Machine Learning Engineer Intern, Recommendation | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7667346576033777925) |
| **TikTok** | Machine Learning Engineer Intern, Recommendation Global E-Commerce | Seattle, WA | Summer 2027 dates not stated | $43/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7668383643375257909) |
| **TikTok** | Machine Learning Engineer Intern, TikTok-Data-Search-Basic Ranking | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7667338938890930437) |
| **TikTok** | Machine Learning Engineer Intern, TikTok-Data-Search-Local Service | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7668379675467761925) |
| **TikTok** | Machine Learning Engineer Project Intern, Security-Data | San Jose, CA | Summer 2027 dates not stated; 13+ weeks, so a late-July start would run into October | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7641703558211586309) |
| **TikTok** | ML Infra Engineer Intern, Ads Infra | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7668881813744191749) |
| **TikTok** | Research Engineer Intern, Agentic Systems & AI Infrastructure - TikTok-Generalized Arch | Seattle, WA | Summer 2027 dates not stated | $43/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7667934792727906565) |
| **TikTok** | Research Scientist Intern - Monetization Technology - Business Integrity | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7668202600147552517) |
| **TikTok** | Student Researcher Intern, Seed Model - AI Foundation Model Infrastructure | San Jose, CA; Seattle, WA | Summer 2027 dates not stated | $55/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7673274910202988805) |
| **TikTok** | Student Researcher Intern, Seed Model - LLM | San Jose, CA | Summer 2027 dates not stated | $55/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7623541709721307445) |
| **TikTok** | Student Researcher Intern, Seed Model - Speech | San Jose, CA | Summer 2027 dates not stated | $55/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7623551375612627253) |
| **TikTok** | Student Researcher Intern, Seed Model - Vision | San Jose, CA | Summer 2027 dates not stated | $55/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7623544831999346997) |
| **TikTok** | Student Researcher Intern, Seed Model: Multimodal Interaction & World Model | San Jose, CA | Summer 2027 dates not stated | $55/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7623548747208739077) |
| **TikTok** | Visual Generation & Multimodal Evaluation Machine Learning Engineer Intern, AML-Ark-US | Seattle, WA; San Jose, CA | Summer 2027 dates not stated | $43/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7672392998231050549) |

_+74 more in the full list._

</details>

<details>
<summary><strong>📈 Finance / Investment / Quant</strong> (23)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Man Group** | Systematic Fast Trading Intern | New York | term dates not stated; 10-week program | $50-60/hr | ✓ | ✓ | 2026-10-26 | [Apply](https://job-boards.eu.greenhouse.io/mangroup/jobs/5012801101) |
| **Tower Research Capital** | Finance Intern | New York | term dates not stated |  |  | ✓ | 2026-11-10 | [Apply](https://www.tower-research.com/open-positions/?gh_jid=8372658) |
| **Goldman Sachs** | Summer Analyst Intern - Multiple Teams | Albany, NY | Summer 2027 dates not stated; 9-week program |  |  | ✓ | 2026-11-18 | [Apply](https://higher.gs.com/roles/189373?type=students) |
| **Raymond James** | 2027 Investment Banking Summer Analyst Private Capital Advisory New York, NY | New York, New York - United States | Summer 2027 dates not stated | $30/hr |  | ✓ | 2026-11-19 | [Apply](https://raymondjames.wd1.myworkdayjobs.com/RaymondJamesEarlyCareers/job/New-York-New-York---United-States/XMLNAME-2027-Investment-Banking-Summer-Analyst-Private-Capital-Advisory-New-York--NY_R-0012143) |
| **Federal Reserve** | 2027 Summer Internship Program - Credit Risk Management Intern | Atlanta, GA | Summer 2027 dates not stated; 10-week program |  |  | ✓ | 2026-11-20 | [Apply](https://rb.wd5.myworkdayjobs.com/FRS/job/Atlanta-GA/XMLNAME-2027-Summer-Internship-Program---Credit-Risk-Management-Intern_R-0000033874) |
| **Federal Reserve** | 2027 Summer Internship Program - IT Portfolio Analyst Intern | Atlanta, GA | Summer 2027 dates not stated |  |  |  | 2026-11-16 | [Apply](https://rb.wd5.myworkdayjobs.com/FRS/job/Atlanta-GA/XMLNAME-2027-Summer-Internship-Program---IT-Portfolio-Analyst-Intern_R-0000034092) |
| **S&P Global** | Summer Intern, Fixed Income Pricing | New York, NY | Summer 2027 dates not stated |  |  | ✓ | 2026-11-19 | [Apply](https://spgi.wd5.myworkdayjobs.com/SPGI_Careers/job/New-York-NY/Summer-Intern--Fixed-Income-Pricing_332613-2) |
| **State Street** | State Street Enterprise Risk Management - Quantitative Risk Internship - 2027 Summer Internship | Clifton, NJ; Clifton, New Jersey | Summer 2027 dates not stated | $20-31/hr | ✓ | ✓ | 2026-11-20 | [Apply](https://statestreet.wd1.myworkdayjobs.com/en-US/global/job/Clifton-New-Jersey/State-Street-Enterprise-Risk-Management---Quantitative-Risk-Internship---2027-Summer-Internship_R-801341) |
| **State Street** | State Street Global Credit Finance - Client Strategy - 2027 Summer Internship | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-17 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Global-Credit-Finance---Client-Strategy---2027-Summer-Internship_R-801224) |
| **State Street** | State Street Investment Management - Business Architecture - 2027 Summer Internship | Boston, Massachusetts | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-20 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---Business-Architecture---2027-Summer-Internship_R-801338) |
| **State Street** | State Street Investment Management - US Wealth - 2027 Summer Internship | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-03 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---US-Wealth---2027-Summer-Internship_R-800715) |
| **State Street** | State Street Investment Management- Client Portfolio Management - 2027 Summer Internship | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  |  | 2026-11-17 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management--Client-Portfolio-Management---2027-Summer-Internship_R-801215-1) |
| **State Street** | State Street Model Risk Management - Quantitative Analyst - 2027 Summer Internship | Boston, MA; Boston, Massachusetts | Summer 2027 dates not stated |  |  | ✓ | 2026-11-20 | [Apply](https://statestreet.wd1.myworkdayjobs.com/en-US/global/job/Boston-Massachusetts/State-Street-Model-Risk-Management---Quantitative-Analyst---2027-Summer-Internship_R-801343) |
| **State Street** | State Street’s Model Risk Management - Quantitative Analyst - 2027 Summer Internship | Boston, MA; Boston, Massachusetts | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-20 | [Apply](https://statestreet.wd1.myworkdayjobs.com/en-US/global/job/Boston-Massachusetts/State-Street-s-Model-Risk-Management---Quantitative-Analyst---2027-Summer-Internship_R-801342) |
| **Travelers** | Actuarial Leadership Development Program (ALDP) Intern | CT - Hartford; MN - St. Paul | term dates not stated | $28-33/hr |  | ✓ | 2026-10-26 | [Apply](https://travelers.wd5.myworkdayjobs.com/External/job/CT---Hartford/Actuarial-Leadership-Development-Program--ALDP--Intern_R-52299) |
| **GCM Grosvenor** | 2027 Credit Summer Intern | Chicago, Illinois, United States | Summer 2027 dates not stated; 10-week program | $34-35/hr |  | ✓ | 2026-11-20 | [Apply](https://job-boards.greenhouse.io/gcmgrosvenor/jobs/8208687003) |
| **GCM Grosvenor** | 2027 Treasury Summer Intern | Chicago, Illinois, United States | Summer 2027 dates not stated | $31-34/hr |  | ✓ | 2026-11-04 | [Apply](https://job-boards.greenhouse.io/gcmgrosvenor/jobs/8004540003) |
| **GCM Grosvenor** | 2027 Valuation Summer Intern | Chicago, Illinois, United States | Summer 2027 dates not stated | $31-34/hr |  | ✓ | 2026-11-03 | [Apply](https://job-boards.greenhouse.io/gcmgrosvenor/jobs/8004539003) |
| **Gusto** | Economics Research Intern | SF | Summer 2027 dates not stated; 10-week program | $66/hr | ✓ | ✓ | 2026-11-20 | [Apply](https://job-boards.greenhouse.io/gusto/jobs/8400148) |
| **Ramp** | Risk Strategy Intern | New York, NY (HQ) | term dates not stated; 12+ weeks, so a late-July start would run into October | $46/hr | ✓ | ✓ | 2026-11-13 | [Apply](https://jobs.ashbyhq.com/ramp/b87e898f-8d8b-447d-b3d5-9073ccf7d109) |
| **Robinhood** | Corporate Finance Intern (Summer 2027) | New York, NY | Summer 2027 dates not stated | $33/hr |  |  | 2026-11-13 | [Apply](https://boards.greenhouse.io/robinhood/jobs/8357464?t=gh_src=&gh_jid=8357464) |
| **Visa** | Risk Intern | PA - Panama City, Panama | term dates not stated |  |  | ✓ | 2026-10-30 | [Apply](https://visa.wd5.myworkdayjobs.com/Visa/job/PA---Panama-City-Panama/Risk-Intern_REF086150W-1) |
| **Booz Allen Hamilton** | Quantum Computing Research Intern | Washington, DC | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-11-10 | [Apply](https://bah.wd1.myworkdayjobs.com/bah_jobs/job/Washington-DC/University---Summer-2027-Quantum-Computing-Research-Intern_R0249046) |

</details>

---

## 🆕 New since last scan

| Company | Role | Track | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|---|
| **Shield AI** | 2027 Summer Intern - Software Engineering - 5815 🆕 | Software | Dallas, TX, US | Summer 2027 dates not stated | $35-75/hr | ✓ | ✓ | 2026-11-23 | [Apply](https://jobs.ashbyhq.com/shield/f96617c2-a120-4b3b-844d-790fcda42503) |
| **Benchling** | Software Engineer Intern 🆕 | Software | SF; San Francisco, CA | Summer 2027 dates not stated | $60/hr |  | ✓ | 2026-11-23 | [Apply](https://jobs.ashbyhq.com/benchling/96370d1b-d35e-446b-8e26-dce088860099/application?embed=true) |
| **Oscar Health** | Software Engineering Intern 🆕 | Software | New York, NY | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $57/hr | ✓ | ✓ | 2026-11-23 | [Apply](https://oscarhealth.com/careers/jobs/8407472-software-engineering-intern?gh_jid=8407472) |
| **DocuSign** | AI Platform Engineer Intern 🆕 | Software | San Francisco, CA | term dates not stated |  |  | ? | 2026-11-12 | [Apply](https://uscareers-docusign.icims.com/jobs/30578/ai-platform-engineer-intern/job) |
| **Garmin** | Software Engineer Intern - Real Time Aviation Data 🆕 | Software | Chanhassen, MN | term dates not stated |  |  | ? | 2026-11-17 | [Apply](https://careers-garmin.icims.com/jobs/20081/job) |
| **Garmin** | Software Engineer Intern, Automotive OEM 🆕 | Software | Novi, MI | Summer 2027 dates not stated |  | ✗ java |  | 2026-11-23 | [Apply](https://careers.garmin.com/jobs/19999?lang=en-us) |
| **Motorola Solutions** | Mission Critical Networks Software Engineer - Summer 2027 Internship 🆕 | Software | Schaumburg, IL, More... | Summer 2027 dates not stated |  |  | ✓ | 2026-11-23 | [Apply](https://motorolasolutions.wd5.myworkdayjobs.com/Careers/job/Schaumburg-IL/Mission-Critical-Networks-Software-Engineer---Summer-2027-Internship_R70631) |
| **Motorola Solutions** | Mission Critical Networks Software Engineer Intern 🆕 | Software | Schaumburg, IL; Chicago, IL | Summer 2027 dates not stated |  |  | ✓ | 2026-11-23 | [Apply](https://motorolasolutions.wd5.myworkdayjobs.com/Careers/job/Schaumburg-IL/Mission-Critical-Networks-Software-Engineer---Summer-2027-Internship_R70631) |
| **T-Mobile** | Software Engineering AI Intern 🆕 | Software | Atlanta, GA | Summer 2027 dates not stated |  |  | ? | 2026-11-16 | [Apply](https://tmobile.wd1.myworkdayjobs.com/External/job/Atlanta-Georgia/Summer-2027-Software-Engineering-AI-Intern_REQ381273) |
| **Zebra Technologies** | WWAN Cellular Engineer Intern 🆕 | Software | Holtsville, NY | Summer 2027 dates not stated | $36/hr | ✓ | ✓ | 2026-11-23 | [Apply](https://zebra.wd501.myworkdayjobs.com/Zebra_careers/job/Holtsville-New-York/XMLNAME-2027-Summer-Internship--US----WWAN-Cellular-Engineer_JR103951) |
| **Booz Allen Hamilton** | Cyber Security Intern 🆕 | Software | Colorado Springs, CO | Summer 2027 dates not stated |  |  | ? | 2026-11-03 | [Apply](https://bah.wd1.myworkdayjobs.com/bah_jobs/job/Colorado-Springs-CO/University--2027-Summer-Games-Cybersecurity-Intern_R0248131) |
| **General Dynamics** | Software Test Engineer Intern 🆕 | Software | Pittsburgh, PA | Summer 2027 dates not stated |  |  | ? | 2026-10-26 | [Apply](https://careers-gdms.icims.com/jobs/75729/software-test-engineer-intern/job) |
| **John Deere** | Simulation Engineering Student Intern - Product Engineering 🆕 | Software | Urbandale, IA | term dates not stated | $15-40/hr | ✓ |  | 2026-11-23 | [Apply](https://johndeere.eightfold.ai/careers/job/137484510505) |
| **Johns Hopkins Applied Physics Laboratory** | Reverse Engineer Intern, Offensive Cyber Capabilities 🆕 | Software | United States | Summer 2027 dates not stated |  |  | ? | 2026-11-11 | [Apply](https://studentcareers-jhuapl.icims.com/jobs/59907/job?in_iframe=1) |
| **Rockwell Automation** | Content IDE Software Development Intern 🆕 | Software | Mayfield Heights, OH | Summer 2027 dates not stated |  |  | ✓ | 2026-11-21 | [Apply](https://rockwellautomation.wd1.myworkdayjobs.com/External-Rockwell-Automation-Early-Careers/job/Mayfield-Heights-Ohio-United-States/Intern--Content-IDE-Software-Development--LCS-_R26-5010-1) |
| **Nuro** | Technical Program Manager, Systems Intern 🆕 | Product | Mountain View, California (HQ) | term dates not stated |  |  | ✓ | 2026-11-23 | [Apply](https://nuro.ai/careersitem?gh_jid=8412577) |
| **Atlassian** | AI Researcher Intern 🆕 | Data | Seattle, WA; SF | term dates not stated |  |  | ? | 2026-10-26 | [Apply](https://campus-americas.icims.com/jobs/26246/ai-researcher-%28phd%29%2c-2027-graduate-u.s./job) |
| **Liberty Mutual** | Analyst Development Intern 🆕 | Data | Boston, MA; Seattle, WA +1 | Summer 2027 dates not stated |  |  | ? | 2026-11-05 | [Apply](https://campus-libertymutual.icims.com/jobs/122764/job?mobile=true&needsRedirect=false) |
| **Micron** | Advanced Modeling and AI Solutions Intern 🆕 | Data | Boise, ID | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-23 | [Apply](https://micron.wd1.myworkdayjobs.com/external/job/Boise-ID---Main-Site/Intern--Advanced-Modeling-and-AI-Solutions_JR118093) |
| **Johns Hopkins Applied Physics Laboratory** | AI & Data Science Intern, Analytic Capabilities 🆕 | Data | United States | Summer 2027 dates not stated |  |  | ? | 2026-11-11 | [Apply](https://studentcareers-jhuapl.icims.com/jobs/60008/job?in_iframe=1) |
| **Northrop Grumman** | AI/ML Engineering Intern 🆕 | Data | Morrisville, NC | Summer 2027 dates not stated; 10-week program |  |  | ✓ | 2026-11-20 | [Apply](https://ngc.wd1.myworkdayjobs.com/Northrop_Grumman_External_Site/job/United-States-North-Carolina-Morrisville/XMLNAME-2027-AI-ML-Engineering-Intern---Morrisville-NC_R10261585-1) |
| **Roche** | 2027 Summer Intern - GCS ML Sequencing 🆕 | Data | Santa Clara, CA | Summer 2027 dates not stated |  |  | ? | 2026-11-16 | [Apply](https://roche.wd3.myworkdayjobs.com/en-US/roche-ext/job/Santa-Clara/XMLNAME-2027-Summer-Intern---GCS-ML-Sequencing_202611-128793) |


<details>
<summary>22 roles no longer found this scan</summary>

- Intercontinental Exchange — Integration Intern (ask; first seen 2026-11-03)
- Intercontinental Exchange — Index Analyst Intern (ask; first seen 2026-11-03)
- Intercontinental Exchange — Software Engineer Intern (ask; first seen 2026-11-03)
- Intercontinental Exchange — Trading System Development Intern (ask; first seen 2026-11-03)
- Intercontinental Exchange — Regulatory Products Intern (ask; first seen 2026-11-03)
- Microsoft — Software Engineer Intern, Security & Identity (ask; first seen 2026-11-03)
- Microsoft — Product Manager Intern (ask; first seen 2026-11-03)
- TikTok — Data Lake Infrastructure & Data Analytics Research Engineer Intern, AML-Ark-US (ask; first seen 2026-11-03)
- Navy Federal — Data Analytics Intern (ask; first seen 2026-11-03)
- ASML — Platform Software Engineer In Test Intern (ask; first seen 2026-11-03)
- Siemens — Python Backend Developer Intern - Energy Flexibility Platform (ask; first seen 2026-11-03)
- Zebra Technologies — Product Management Intern (ask; first seen 2026-11-03)
- Federal Reserve — Information Security Intern (ask; first seen 2026-11-05)
- Invesco — Early Career Intern - Digital Product Management (ask; first seen 2026-11-06)
- Shield AI — 2027 Summer Intern - Supplier Development Engineer - 6463 (ask; first seen 2026-11-07)
- General Dynamics — Professional Programmer Intern (ask; first seen 2026-11-13)
- RTX — Software Engineering Co-op (ask; first seen 2026-11-14)
- Global Payments — Investor Relations and Corporate Development University Intern (ask; first seen 2026-11-16)
- T-Mobile — Data Product Intern (ask; first seen 2026-11-19)
- Bread Financial — Software Engineering Intern (ask; first seen 2026-11-20)
- Cisco — AI Researcher II Intern (ask; first seen 2026-11-20)
- Shield AI — Operational Analysis Intern - Operational Analysis (ask; first seen 2026-11-21)

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
