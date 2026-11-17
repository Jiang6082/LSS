# LSS — Late-Summer Internship Scanner

Scans for **US internships at well-known firms** in **software engineering, product management, data/analytics and finance/investment** that can run **after an early-summer internship: starting mid/late July 2027 and ending by 2027-09-30**. Sister project of [QJS](https://github.com/Jiang6082/QJS), [PTS](https://github.com/Jiang6082/PTS) and [ECS](https://github.com/Jiang6082/ECS).

**Filters:** US only (incl. US-remote) · known firms only ([list](inputs/known_firms.json)) · pay ≥ $30/hr when the posting states pay · undergrad roles (PhD / MBA / master's-only excluded) · titles naming C++, Java, iOS/Android, embedded or hardware skipped (Python-friendly) · posted in the last 30 days (undated postings kept) · window 2027-07-13 → 2027-09-30 ([config](inputs/config.json))

> **Last scan:** 2026-11-17 &nbsp;•&nbsp; **0 dates fit** &nbsp;•&nbsp; **4 flexible / near miss** &nbsp;•&nbsp; **444 summer, dates not stated** &nbsp;•&nbsp; **18 new** &nbsp;•&nbsp; 19 closed postings dropped

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
| **Epic Games** | AI Programmer Intern | Cary, NC | flexible — posting says "flexible start" |  | ✓ | ✓ | 2026-11-11 | [Apply](https://epicgames.com/careers/jobs/6251540004?gh_jid=6251540004) |

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

444 roles. The first 60 per track are below; the full list is in [reports/summer_dates_not_stated.md](reports/summer_dates_not_stated.md).

<details>
<summary><strong>💻 Software Engineering</strong> (268)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Adobe** | 2027 Intern - Emerging Technology & Innovation | San Jose | term dates not stated | $38-51/hr |  | ✓ | 2026-10-21 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Amazon** | Associate Engagement Manager Intern- National Security, AWS Professional Services | Arlington, Virginia, USA | term dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-11-02 | [Apply](https://www.amazon.jobs/en/jobs/10594714/associate-engagement-manager-intern-national-security-aws-professional-services) |
| **Amazon** | Database Engineer Intern | Seattle, WA; East Palo Alto, CA +1 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-10-27 | [Apply](https://amazon.jobs/en/jobs/10590290/database-engineer-intern-summer-2027) |
| **Amazon** | Undergrad Software Engineer Intern | SF | term dates not stated | $43/hr |  | ✓ | 2026-10-22 | [Apply](https://job-boards.greenhouse.io/twitch/jobs/8886605002) |
| **Amazon** | Undergrad Software Engineering Intern | San Francisco, CA | Summer 2027 dates not stated | $43/hr |  | ✓ | 2026-10-22 | [Apply](https://job-boards.greenhouse.io/twitch/jobs/8886748002) |
| **Bloomberg** | Engineering Intern | Arlington, VA - 1801 S Bell (INDG) | term dates not stated |  |  | ✓ | 2026-11-13 | [Apply](https://bloomberg.wd1.myworkdayjobs.com/Bloombergindustrygroup_External_Career_Site/job/Arlington-VA---1801-S-Bell-INDG/Engineering-Intern_145704) |
| **Cisco** | Software Engineer Full-Stack / Backend I - Intern - United States | San Jose, CA +2 | term dates not stated |  |  | ? | 2026-11-10 | [Apply](https://cisco.wd5.myworkdayjobs.com/en-US/cisco_careers/job/San-Jose-California-US/Software-Engineer-Full-Stack---Backend-I--Intern----United-States_2024647-1) |
| **Electronic Arts** | Anticheat Engineer Intern | Austin, TX | Summer 2027 dates not stated |  |  |  | 2026-11-03 | [Apply](https://jobs.ea.com/en_US/careers/SearchJobs) |
| **Electronic Arts** | Software Engineer Intern | Orlando, FL | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-19 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Software-Engineer-Intern/216263) |
| **Intuit** | Software Engineering Intern, Full Stack | United States | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $36-79/hr |  | ✓ | 2026-10-30 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-software-engineering-intern-full-stack/27595/100620927520) |
| **Microsoft** | First-Year Explore Program Engineering Intern | Redmond, WA | Summer 2027 dates not stated | $26-48/hr |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556925823) |
| **Microsoft** | Software Engineer Intern | Redmond, WA; Aliso Viejo, CA | Summer 2027 dates not stated | $52/hr | ✓ | ✓ | 2026-11-04 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557037859) |
| **Microsoft** | Software Engineer Intern - First Play | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-55/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://jobs.smartrecruiters.com/LinkedIn3/744000158394370) |
| **Microsoft** | Software Engineer Intern, CoreAI | Multiple Locations, United States; Redmond, WA | Summer 2027 dates not stated | $33/hr |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0) |
| **Microsoft** | Software Engineer Intern, Security & Identity | Redmond, WA; Cambridge, MA +1 | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-10-23 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922930) |
| **Microsoft** | Software Engineer Intern, Teamwork Experiences | Redmond, WA | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557037859) |
| **Microsoft** | Software Engineer: Security & Identity Intern Opportunities for University Students - Cambridge | Cambridge, MA | term dates not stated | $52/hr | ✓ | ✓ | 2026-10-23 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557044765) |
| **Microsoft** | Software Engineer: Security & Identity Intern Opportunities for University Students - Redmond | Redmond, WA | term dates not stated | $52/hr | ✓ | ✓ | 2026-11-06 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556922930) |
| **Nintendo** | Intern - Software Engineer, DevOps (NTD) | Redmond, WA | term dates not stated | $45/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4472002009) |
| **Nintendo** | Software Engineer Intern - Audio | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4470048009) |
| **Nintendo** | Software Engineer Intern - Connectivity | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4472147009) |
| **Nintendo** | Software Engineer Intern - CPU Debugger - NTD | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4471972009) |
| **Nintendo** | Software Engineer Intern - CPU Profiler | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4469762009) |
| **Nintendo** | Software Engineer Intern - Graphics | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-31 | [Apply](https://careers.nintendo.com/?gh_jid=4473550009) |
| **Nintendo** | Software Engineer Intern - Performance Tools | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-31 | [Apply](https://careers.nintendo.com/?gh_jid=4473568009) |
| **Nintendo** | Software Engineer Intern - Platform Security | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-30 | [Apply](https://careers.nintendo.com/?gh_jid=4469778009) |
| **Nintendo** | Software Engineer Intern, CPU Debugger | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4471972009) |
| **Nintendo** | Software Engineer Intern, DevOps | Redmond, WA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4472002009) |
| **NVIDIA** | AI Systems Software Engineering Intern | Austin, TX | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-10-30 | [Apply](https://jobs.nvidia.com/careers/job/893398073452) |
| **NVIDIA** | Math Libraries Intern | Canada; Santa Clara, CA +1 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-02 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/Math-Libraries-Intern--cuEST---Summer-2027_JR2028449) |
| **NVIDIA** | NVIDIA 2027 Internships: Software Engineering | Santa Clara, CA | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✓ | ✓ | 2026-08-20 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Software-Engineering_JR2023495) |
| **NVIDIA** | NVIDIA 2027 Internships: Systems Software Engineering | Santa Clara, CA; US, CA, Santa Clara | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✗ c++ | ✓ | 2026-10-30 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Systems-Software-Engineering_JR2023492) |
| **NVIDIA** | Performance Testing Engineering Intern - 2027 | Armenia, Yerevan | term dates not stated |  | ✓ | ✓ | 2026-10-29 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/Armenia-Yerevan/Performance-Testing-Engineering-Intern---2027_JR2028481-1) |
| **NVIDIA** | Software Engineering Intern | Canada; Santa Clara, CA +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-31 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Software-Engineering_JR2023495) |
| **Palantir** | Forward Deployed Software Engineer Intern - Warp Speed | NYC; New York, NY | term dates not stated | $58/hr | ✓ |  | 2026-10-23 | [Apply](https://jobs.lever.co/palantir/b3d81928-6c26-432f-8a0a-36602c2eefcb/apply) |
| **Palantir** | Software Engineer Intern - Connectivity Platform - Product | Denver, CO | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-11 | [Apply](https://jobs.lever.co/palantir/eb496d6a-a960-43d3-a09b-e3843052f54e/apply) |
| **Palantir** | Software Engineer Intern - Connectivity Platform and Product | NYC; Denver, CO +1 | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-10 | [Apply](https://jobs.lever.co/palantir/130ee501-bd22-4d44-b651-39581ef97743/apply) |
| **Palantir** | Software Engineer Intern - Data Connectors | NYC; New York, NY | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-10 | [Apply](https://jobs.lever.co/palantir/45e4617d-d658-4b30-8dc9-378ca84a027a/apply) |
| **Palantir** | Software Engineer Intern - Query Engines | NYC; New York, NY | term dates not stated | $61/hr | ✓ | ✓ | 2026-10-20 | [Apply](https://jobs.lever.co/palantir/da774f81-c98c-4dcf-9b9c-949fd7d90a13/apply) |
| **Palantir** | Software Engineer Intern - Sovereign AI Systems | NYC; New York, NY | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-06 | [Apply](https://jobs.lever.co/palantir/cd64bcd4-50bb-4aeb-a135-4e0487ffd312/apply) |
| **PayPal** | Cybersecurity Intern | San Jose, CA; Scottsdale, AZ +2 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922982812) |
| **PayPal** | Cybersecurity Intern - Summer 2027 | San Jose, California, United States of America; Chicago, Illinois, United States of America +2 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.wd1.myworkdayjobs.com/jobs/job/San-Jose-California-United-States-of-America/Cybersecurity-Intern---Summer-2027_R0138587) |
| **PayPal** | Software Engineer Intern | Austin, TX; San Jose, CA +8 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922982814) |
| **PayPal** | Software Engineer Intern - Summer 2027 | San Jose, CA +4; San Jose, California, United States of America +4 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-06 | [Apply](https://paypal.wd1.myworkdayjobs.com/en-US/jobs/job/San-Jose-California-United-States-of-America/Software-Engineer-Intern---Summer-2027_R0138586) |
| **Salesforce** | Software Engineer Intern | Palo Alto, CA; Seattle, WA +14 | Summer 2027 dates not stated | $43-52/hr | ✗ java | ✓ | 2026-10-30 | [Apply](https://salesforce.wd12.myworkdayjobs.com/Futureforce_Internships/job/California---San-Francisco/Summer-2027-Intern---Software-Engineer_JR340771) |
| **Salesforce** | Software Engineer Intern, Security/Government | San Francisco, CA; Bellevue, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $43-52/hr | ✗ java |  | 2026-10-19 | [Apply](https://salesforce.wd12.myworkdayjobs.com/Futureforce_Internships/job/California---San-Francisco/Summer-2027-Intern---Software-Engineer--Security-Government-_JR364911) |
| **Salesforce** | Summer 2027 Intern - Software Engineer - Security/Government | California, USA +2 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $54/hr | ✗ java |  | 2026-10-20 | [Apply](https://salesforce.wd12.myworkdayjobs.com/en-US/external_career_site/job/California---San-Francisco/Summer-2027-Intern---Software-Engineer--Security-Government-_JR364911-1) |
| **Samsung** | AI Application Engineer Intern | San Jose, CA; Folsom, CA | term dates not stated | $28-68/hr | ✓ |  | 2026-11-03 | [Apply](https://job-boards.greenhouse.io/samsungsemiconductor/jobs/8163994003) |
| **ServiceNow** | AI Security Engineer Intern | San Diego, CA | term dates not stated |  |  | ✓ | 2026-11-14 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161548289-ai-security-engineer-intern?oga=true) |
| **ServiceNow** | Associate Detection Engineering Intern | Kirkland, WA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161210069) |
| **ServiceNow** | Associate Forward Deployed Solution Engineer Intern 🆕 | Santa Clara, CA; NYC +2 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-11-16 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161936128) |
| **ServiceNow** | Associate Information Security Engineer Intern | San Diego, CA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161204235) |
| **ServiceNow** | Associate Security Engineering & Automation Intern | Santa Clara, CA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161209810) |
| **Tesla** | Physics Engine Development Engineer Intern - Optimus | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-11-02 | [Apply](https://www.tesla.com/careers/search/job/282147) |
| **Tesla** | Software Engineer Intern - Energy Engineering | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-11-13 | [Apply](https://www.tesla.com/careers/search/job/289796) |
| **Tesla** | Software Engineer Intern - SI Reinforcement Learning | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-11-07 | [Apply](https://www.tesla.com/careers/search/job/289241) |
| **Tesla** | Software Engineering Intern, People Products | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-11-02 | [Apply](https://www.tesla.com/careers/search/job/284004) |
| **TikTok** | AI Infrastructure Engineer Intern, Compute Efficiency & Scheduling | Seattle, WA; San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $43/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7668802157205965109) |
| **TikTok** | AI Software Engineer Project Intern, Transaction Platform | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✗ java | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7646621925436131637) |
| **TikTok** | Backend Development Engineer Intern, Infrastructure Platform Delivery | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✗ java | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7668489218234157365) |

_+208 more in the full list._

</details>

<details>
<summary><strong>📱 Product Management</strong> (15)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Product Manager Intern - ALA | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10491935/2027-amazon-leadership-accelerator-ala-product-manager-internship) |
| **Microsoft** | Product Manager Intern | Remote; Cambridge, MA | Summer 2027 dates not stated | $33/hr |  | ✓ | 2026-10-23 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556953113) |
| **Salesforce** | Product Management Intern - Product Management | SF; NYC +2 | Summer 2027 dates not stated |  |  | ? | 2026-11-06 | [Apply](https://salesforce.wd12.myworkdayjobs.com/Futureforce_Internships/job/California---San-Francisco/Summer-2027-Intern---Product-Management_JR367659) |
| **Anduril** | 2027 Technical Program Manager Intern | Costa Mesa, California, United States; Honolulu, Hawaii, United States +3 | term dates not stated; 12+ weeks, so a late-July start would run into October | $28-45/hr |  | ✓ | 2026-10-19 | [Apply](https://boards.greenhouse.io/andurilindustries/jobs/5268864007?gh_jid=5268864007) |
| **Shield AI** | Program Manager, Intern Experience 🆕 | Seattle, WA, US | term dates not stated |  |  |  | 2026-11-17 | [Apply](https://jobs.ashbyhq.com/shield/af061c1a-f291-4540-be30-2df5adc22cc5) |
| **Intercontinental Exchange** | Product Management Intern | Atlanta, GA | Summer 2027 dates not stated |  |  | ✓ | 2026-10-23 | [Apply](https://ice.jibeapply.com/jobs/14065?icims=1) |
| **Nationwide** | Summer 2027 State Product Analyst Intern - Personal Lines | Iowa - Des Moines, 1100 Locust Street; Ohio - Columbus, One Nationwide Plaza | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $23-50/hr |  | ✓ |  | [Apply](https://nationwide.wd1.myworkdayjobs.com/Nationwide_Career/job/Iowa---Des-Moines-1100-Locust-Street/Summer-2027-State-Product-Analyst-Intern---Personal-Lines_099794) |
| **Invesco** | Digital Product Management Intern | Atlanta, GA | Summer 2027 dates not stated; 9-week program | $35/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://invesco.wd1.myworkdayjobs.com/en-US/IVZ/job/Atlanta-Georgia/Early-Career-Intern---Digital-Product-Management_R-15876-1) |
| **Invesco** | Early Career Intern - Digital Product Management | Atlanta, Georgia | term dates not stated; 9-week program | $35/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://invesco.wd1.myworkdayjobs.com/IVZ/job/Atlanta-Georgia/Early-Career-Intern---Digital-Product-Management_R-15876-1) |
| **DocuSign** | Product Manager Intern | SF | term dates not stated; 13+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-11-06 | [Apply](https://careers.docusign.com/jobs/30625?icims=1&lang=en-us) |
| **Micron** | CMBU Product Management Intern | San Jose, CA | term dates not stated | $56/hr | ✓ | ✓ | 2026-10-27 | [Apply](https://micron.wd1.myworkdayjobs.com/External/job/San-Jose-CA/Intern---CMBU-Product-Management_JR115941) |
| **Micron** | NAND Storage Strategic Roadmap Planning Intern | Boise, ID | term dates not stated |  |  | ✓ | 2026-10-27 | [Apply](https://micron.wd1.myworkdayjobs.com/External/job/Boise-ID---Main-Site/Intern---NAND-Storage-Strategic-Roadmap-Planning_JR115838) |
| **Motorola Solutions** | Program Manager Intern - Summer 2027 | Plantation, FL | Summer 2027 dates not stated |  |  | ✓ | 2026-11-11 | [Apply](https://motorolasolutions.wd5.myworkdayjobs.com/Careers/job/Plantation-FL/Program-Manager-Intern---Summer-2027_R69762) |
| **Zebra Technologies** | Product Management Intern | Lincolnshire, IL | Summer 2027 dates not stated | $26-32/hr |  | ✓ | 2026-10-26 | [Apply](https://zebra.wd501.myworkdayjobs.com/Zebra_careers/job/Lincolnshire-Illinois/XMLNAME-2027-Summer-Internship--US----Product-Management_JR103652) |
| **PACCAR** | Product Planning Intern | Denton, TX | Summer 2027 dates not stated |  |  | ✓ | 2026-11-03 | [Apply](https://jobs.paccar.com/job/Denton-2027-Summer-Internship-Product-Planning-TX-76205-7864/1453917433/?ats=successfactors) |

</details>

<details>
<summary><strong>📊 Data / Analytics / ML</strong> (137)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Adobe** | 2027 Intern - AI & Architecture | San Jose, CA | term dates not stated | $55/hr |  | ✓ | 2026-10-20 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---AI---Architecture_R172998) |
| **Adobe** | 2027 Intern - Applied and Research Scientist/Engineer | College, AK +3; San Jose +5 | term dates not stated | $55/hr |  | ✓ | 2026-10-20 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Applied-and-Research-Scientist-Engineer_R172064) |
| **Adobe** | 2027 Intern - Data - AI & Innovation | San Jose, CA | term dates not stated | $55/hr |  | ✓ | 2026-10-20 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Adobe** | AI & Architecture Intern | San Jose, CA | Summer 2027 dates not stated | $38-51/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---AI---Architecture_R172998) |
| **Adobe** | Data, AI & Innovation Intern | San Jose, CA | Summer 2027 dates not stated | $38-51/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Bloomberg** | Data Analyst Intern | Arlington, VA - 1801 S Bell (INDG) | term dates not stated |  | ✓ | ✓ | 2026-11-16 | [Apply](https://bloomberg.wd1.myworkdayjobs.com/Bloombergindustrygroup_External_Career_Site/job/Arlington-VA---1801-S-Bell-INDG/Data-Analyst-Intern_145487) |
| **Databricks** | Data Science Intern | SF; Mountain View, CA | term dates not stated |  |  | ✓ | 2026-10-22 | [Apply](https://boards.greenhouse.io/embed/job_app?token=6866538002) |
| **Microsoft** | Applied Scientist Intern | Redmond, WA | term dates not stated | $33/hr |  | ✓ | 2026-10-30 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556986141) |
| **Microsoft** | Applied Scientist Intern, Turing | Redmond, WA | Summer 2027 dates not stated | $33/hr |  | ✓ | 2026-10-29 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557050150) |
| **Microsoft** | Security Research Intern | Redmond, WA | Summer 2027 dates not stated |  |  | ✓ | 2026-10-22 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557044769) |
| **NVIDIA** | Deep Learning Intern | Santa Clara, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-31 | [Apply](https://jobs.nvidia.com/careers/job/893397026418) |
| **NVIDIA** | NVIDIA 2027 Internships: Deep Learning | Santa Clara, CA; US, CA, Santa Clara | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✓ | ✓ | 2026-10-30 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning_JR2023497-1) |
| **NVIDIA** | NVIDIA 2027 Internships: Deep Learning Computer Architecture | Santa Clara, CA; US, CA, Santa Clara | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr |  | ✓ | 2026-10-30 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning-Computer-Architecture_JR2023491) |
| **PayPal** | Data Scientist Intern | San Jose, CA | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922982821) |
| **PayPal** | Data Scientist Intern - Summer 2027 | San Jose, CA; San Jose, California, United States of America | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-06 | [Apply](https://paypal.wd1.myworkdayjobs.com/en-US/jobs/job/San-Jose-California-United-States-of-America/Data-Scientist-Intern---Summer-2027_R0138582) |
| **PayPal** | Machine Learning Engineer Intern | San Jose, CA | Summer 2027 dates not stated | $50-59/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922983149) |
| **PayPal** | Machine Learning Engineer Intern - Summer 2027 | San Jose, CA; San Jose, California, United States of America | Summer 2027 dates not stated | $50-59/hr | ✓ | ✓ | 2026-11-06 | [Apply](https://paypal.wd1.myworkdayjobs.com/en-US/jobs/job/San-Jose-California-United-States-of-America/Machine-Learning-Engineer-Intern---Summer-2027_R0138581) |
| **Salesforce** | Summer 2027 Intern - Applied AI Strategy & Research | San Francisco, CA | Summer 2027 dates not stated | $54/hr |  | ? | 2026-11-11 | [Apply](https://salesforce.wd12.myworkdayjobs.com/en-US/futureforce_newgradroles/job/California---San-Francisco/Summer-2027-Intern---Applied-AI-Strategy---Research_JR367516-3) |
| **Samsung** | AI Data Analyst Intern | Plano, TX | term dates not stated |  | ✓ | ✓ | 2026-11-06 | [Apply](https://sec.wd3.myworkdayjobs.com/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/Samsung-Care-AI-Data-Analytic-Intern_R121971-1) |
| **Samsung** | Business Intelligence & Data Analytics Intern | Plano, TX | Summer 2027 dates not stated; 10-week program |  | ✓ |  | 2026-11-07 | [Apply](https://sec.wd3.myworkdayjobs.com/en-US/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/Business-Intelligence---Data-Analytics-Intern_R121949) |
| **Samsung** | Care AI Data Analytic Intern | Plano, TX | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-06 | [Apply](https://sec.wd3.myworkdayjobs.com/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/Samsung-Care-AI-Data-Analytic-Intern_R121971-1) |
| **Samsung** | ePro Business & Data Analyst Intern | Plano, TX | term dates not stated |  |  | ✓ | 2026-11-09 | [Apply](https://sec.wd3.myworkdayjobs.com/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/ePro-Business---Data-Analyst-Intern_R121996) |
| **Samsung** | Samsung Care AI Data Analytic Intern | Plano, TX | term dates not stated |  | ✓ | ✓ | 2026-11-07 | [Apply](https://sec.wd3.myworkdayjobs.com/en-US/samsung_careers/job/6625-Excellence-Way-Plano-TX-USA/Samsung-Care-AI-Data-Analytic-Intern_R121971-1) |
| **ServiceNow** | AI Identity Intern | Kirkland, WA | term dates not stated |  |  | ✓ | 2026-11-15 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161594249-ai-identity-intern?oga=true) |
| **ServiceNow** | Assoc AI Engineering - Cloud Security Automation Intern | Santa Clara, CA | term dates not stated |  |  | ✓ | 2026-11-13 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161209600-assoc-ai-engineering-cloud-security-automation-intern?oga=true) |
| **ServiceNow** | Associate AI Engineering Intern, Cloud Security Automation | Santa Clara, CA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161209600) |
| **Tesla** | Data Engineer Intern - Energy | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-10-29 | [Apply](https://www.tesla.com/careers/search/job/287982) |
| **TikTok** | Agent Evaluation & Evolution Machine Learning Engineer Intern, AML-Ark-US | Seattle, WA; San Jose, CA | Summer 2027 dates not stated | $43/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7672391300141877557) |
| **TikTok** | Data Engineer Intern - Data Platform Global Live | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7674032146438162693) |
| **TikTok** | Data Engineer Intern - Monetization Data | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7671232204182276405) |
| **TikTok** | Data Engineer Intern, Data Platform TikTok BP | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-60/hr |  | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7681783406632782085) |
| **TikTok** | Data Engineering Project Intern, Ads Targeting | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7668533140146817333) |
| **TikTok** | Data Lake Infrastructure & Data Analytics Research Engineer Intern, AML-Ark-US | Seattle, WA; San Jose, CA | Summer 2027 dates not stated | $43/hr |  | ✓ | 2026-11-01 | [Apply](https://joinbytedance.com/search/7672394389001816325) |
| **TikTok** | Data Science Intern, TikTok Integrity and Safety | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7669682935444900149) |
| **TikTok** | Data Science Project Intern, Advertisement | San Jose, CA | Summer 2027 dates not stated | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7675080308216154373) |
| **TikTok** | Data Scientist Intern - VOD Data | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7670287013157095733) |
| **TikTok** | Data Scientist Project Intern, TikTok Integrity and Safety | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $35/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7610543185362372917) |
| **TikTok** | Machine Learning Engineer Intern | San Jose, CA | Summer 2027 dates not stated | $45-60/hr | ✓ | ✓ | 2026-11-13 | [Apply](https://lifeattiktok.com/search/7667338938890930437) |
| **TikTok** | Machine Learning Engineer Intern - Ads Signal & Measurement | San Jose, CA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7669700361976809733) |
| **TikTok** | Machine Learning Engineer Intern - App Ads and Gaming | San Jose, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45/hr | ✓ | ✓ | 2026-11-01 | [Apply](https://lifeattiktok.com/search/7669709472078170373) |
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

_+77 more in the full list._

</details>

<details>
<summary><strong>📈 Finance / Investment / Quant</strong> (24)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Man Group** | Systematic Fast Trading Intern | New York | term dates not stated; 10-week program | $50-60/hr | ✓ | ✓ | 2026-10-26 | [Apply](https://job-boards.eu.greenhouse.io/mangroup/jobs/5012801101) |
| **Tower Research Capital** | Finance Intern | New York | term dates not stated |  |  | ✓ | 2026-11-10 | [Apply](https://www.tower-research.com/open-positions/?gh_jid=8372658) |
| **Barclays** | Private Bank and Wealth Management Summer Internship Programme 2027 Jersey | Jersey, 5-6 Esplanade | Summer 2027 dates not stated |  |  | ✓ | 2026-10-22 | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Jersey-5-6-Esplanade/Private-Bank-and-Wealth-Management-Summer-Internship-Programme-2027-Jersey_JR-0000125565) |
| **Federal Reserve** | 2027 Summer Internship Program - IT Portfolio Analyst Intern | Atlanta, GA | Summer 2027 dates not stated |  |  |  | 2026-11-16 | [Apply](https://rb.wd5.myworkdayjobs.com/FRS/job/Atlanta-GA/XMLNAME-2027-Summer-Internship-Program---IT-Portfolio-Analyst-Intern_R-0000034092) |
| **Federal Reserve** | 2027 Summer Internship Program - Supervision & Regulation (CORE Risk Team) | Atlanta, GA | Summer 2027 dates not stated; 10-week program |  | ✓ | ✓ | 2026-11-06 | [Apply](https://rb.wd5.myworkdayjobs.com/FRS/job/Atlanta-GA/XMLNAME-2027-Summer-Internship-Program---Supervision---Regulation--CORE-Risk-Team-_R-0000033859) |
| **Global Payments** | Investor Relations and Corporate Development University Intern | ATLANTA, GEORGIA | term dates not stated |  |  | ✓ | 2026-11-16 | [Apply](https://tsys.wd1.myworkdayjobs.com/TSYS/job/ATLANTA-GEORGIA/Investor-Relations-and-Corporate-Development-University-Intern_R0077793) |
| **Intercontinental Exchange** | Trading System Development Intern | NYC; New York, NY | Summer 2027 dates not stated | $30/hr | ✓ | ✓ | 2026-11-06 | [Apply](https://ice.jibeapply.com/jobs/14102?icims=1) |
| **KeyBank** | 2027 Summer Risk Management Internship Program- Cleveland | Cleveland, OH | Summer 2027 dates not stated; 5-week program |  |  | ✓ | 2026-11-04 | [Apply](https://keybank.wd5.myworkdayjobs.com/External_Career_Site/job/Cleveland-OH/XMLNAME-2027-Summer-Risk-Management-Internship-Program--Cleveland_R-41378) |
| **Nationwide** | Summer 2027 Agribusiness Farm Underwriting Intern | Iowa - Des Moines, 1100 Locust Street | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $23-50/hr |  | ✓ |  | [Apply](https://nationwide.wd1.myworkdayjobs.com/Nationwide_Career/job/Iowa---Des-Moines-1100-Locust-Street/Summer-2027-Agribusiness-Farm-Underwriting-Intern_100051) |
| **State Street** | State Street Global Credit Finance - Client Strategy - 2027 Summer Internship 🆕 | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-17 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Global-Credit-Finance---Client-Strategy---2027-Summer-Internship_R-801224) |
| **State Street** | State Street Investment Management - Credit Research - 2027 Summer Internship | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  |  | 2026-11-04 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---Credit-Research---2027-Summer-Internship_R-800754) |
| **State Street** | State Street Investment Management - Global Leveraged Finance Intern - 2027 Summer | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-04 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---Global-Leveraged-Finance-Intern---2027-Summer_R-800756) |
| **State Street** | State Street Investment Management - Investment Solutions Group - 2027 Summer Internship 🆕 | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-17 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---Investment-Solutions-Group---2027-Summer-Internship_R-801219-1) |
| **State Street** | State Street Investment Management - US Cash Client Service Team - 2027 Summer Internship | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-04 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---US-Cash-Client-Service-Team---2027-Summer-Internship_R-800751) |
| **State Street** | State Street Investment Management - US Wealth - 2027 Summer Internship | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-03 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---US-Wealth---2027-Summer-Internship_R-800715) |
| **State Street** | State Street Investment Management- Client Portfolio Management - 2027 Summer Internship 🆕 | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  |  | 2026-11-17 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management--Client-Portfolio-Management---2027-Summer-Internship_R-801215-1) |
| **Travelers** | Actuarial Leadership Development Program (ALDP) Intern | CT - Hartford; MN - St. Paul | term dates not stated | $28-33/hr |  | ✓ | 2026-10-26 | [Apply](https://travelers.wd5.myworkdayjobs.com/External/job/CT---Hartford/Actuarial-Leadership-Development-Program--ALDP--Intern_R-52299) |
| **GCM Grosvenor** | 2027 Treasury Summer Intern | Chicago, Illinois, United States | Summer 2027 dates not stated | $31-34/hr |  | ✓ | 2026-11-04 | [Apply](https://job-boards.greenhouse.io/gcmgrosvenor/jobs/8004540003) |
| **GCM Grosvenor** | 2027 Valuation Summer Intern | Chicago, Illinois, United States | Summer 2027 dates not stated | $31-34/hr |  | ✓ | 2026-11-03 | [Apply](https://job-boards.greenhouse.io/gcmgrosvenor/jobs/8004539003) |
| **Ramp** | Risk Strategy Intern | New York, NY (HQ) | term dates not stated; 12+ weeks, so a late-July start would run into October | $46/hr | ✓ | ✓ | 2026-11-13 | [Apply](https://jobs.ashbyhq.com/ramp/b87e898f-8d8b-447d-b3d5-9073ccf7d109) |
| **Robinhood** | Corporate Finance Intern (Summer 2027) | New York, NY | Summer 2027 dates not stated | $33/hr |  |  | 2026-11-13 | [Apply](https://boards.greenhouse.io/robinhood/jobs/8357464?t=gh_src=&gh_jid=8357464) |
| **Visa** | Risk Intern | PA - Panama City, Panama | term dates not stated |  |  | ✓ | 2026-10-30 | [Apply](https://visa.wd5.myworkdayjobs.com/Visa/job/PA---Panama-City-Panama/Risk-Intern_REF086150W-1) |
| **Booz Allen Hamilton** | Quantum Computing Research Intern | Washington, DC | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-11-10 | [Apply](https://bah.wd1.myworkdayjobs.com/bah_jobs/job/Washington-DC/University---Summer-2027-Quantum-Computing-Research-Intern_R0249046) |
| **Bristol Myers Squibb** | Data & Quantitative Sciences Intern-Summer 2027 | Princeton, NJ +5 | Summer 2027 dates not stated |  |  | ? | 2026-11-12 | [Apply](https://bristolmyerssquibb.wd5.myworkdayjobs.com/en-US/bms/job/Princeton---NJ---US/Data---Quantitative-Sciences-Intern-Summer-2027_R1608215) |

</details>

---

## 🆕 New since last scan

| Company | Role | Track | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|---|
| **ServiceNow** | Associate Forward Deployed Solution Engineer Intern 🆕 | Software | Santa Clara, CA; NYC +2 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-11-16 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161936128) |
| **Skydio** | Systems Engineering Intern 🆕 | Software | San Mateo, California, United States | term dates not stated | $47/hr | ✓ | ✓ | 2026-11-09 | [Apply](https://jobs.ashbyhq.com/skydio/33f1f123-8cec-4e6a-b125-e8831603a62a) |
| **Schonfeld** | Platform Engineering Intern 🆕 | Software | New York, NY; New York, New York, United States | Summer 2027 dates not stated | $48/hr | ✓ |  | 2026-11-16 | [Apply](https://job-boards.greenhouse.io/schonfeld/jobs/8171699) |
| **T-Mobile** | Site Reliability Engineering Intern 🆕 | Software | Frisco, TX; Atlanta, GA | Summer 2027 dates not stated |  |  | ? | 2026-11-10 | [Apply](https://tmobile.wd1.myworkdayjobs.com/External/job/Frisco-Texas/Summer-2027-Site-Reliability-Engineering-Internship_REQ381393) |
| **T-Mobile** | Software Engineer Intern 🆕 | Software | Philadelphia, PA | Summer 2027 dates not stated |  |  | ? | 2026-11-10 | [Apply](https://tmobile.wd1.myworkdayjobs.com/External/job/Philadelphia-Pennsylvania/Summer-2027-T-Ads-Software-Engineering-Internship_REQ381225) |
| **T-Mobile** | Software Engineer Intern, T-Ads 🆕 | Software | Philadelphia, PA | Summer 2027 dates not stated |  |  | ? | 2026-11-10 | [Apply](https://tmobile.wd1.myworkdayjobs.com/External/job/Philadelphia-Pennsylvania/Summer-2027-T-Ads-Software-Engineering-Internship_REQ381219) |
| **T-Mobile** | Summer 2027 Site Reliability Engineering Internship 🆕 | Software | Frisco, TX +1 | Summer 2027 dates not stated |  |  | ? | 2026-11-11 | [Apply](https://tmobile.wd1.myworkdayjobs.com/en-US/external/job/Frisco-Texas/Summer-2027-Site-Reliability-Engineering-Internship_REQ381393) |
| **T-Mobile** | Summer 2027 T-Ads Software Engineering Internship 🆕 | Software | Philadelphia, PA | Summer 2027 dates not stated |  |  | ? | 2026-11-11 | [Apply](https://tmobile.wd1.myworkdayjobs.com/en-US/external/job/Philadelphia-Pennsylvania/Summer-2027-T-Ads-Software-Engineering-Internship_REQ381225) |
| **Shield AI** | Program Manager, Intern Experience 🆕 | Product | Seattle, WA, US | term dates not stated |  |  |  | 2026-11-17 | [Apply](https://jobs.ashbyhq.com/shield/af061c1a-f291-4540-be30-2df5adc22cc5) |
| **Federal Reserve** | 2027 Summer Internship Program - Business of IT Analyst Intern 🆕 | Data | Atlanta, GA | Summer 2027 dates not stated |  |  |  | 2026-11-17 | [Apply](https://rb.wd5.myworkdayjobs.com/FRS/job/Atlanta-GA/XMLNAME-2027-Summer-Internship-Program---Business-of-IT-Analyst-Intern_R-0000034091) |
| **State Street** | State Street Investment Management - Data Scientist - Summer Internship 2027 🆕 | Data | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr | ✓ | ✓ | 2026-11-17 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---Data-Scientist---Summer-Internship-2027_R-801213) |
| **Synchrony** | Intern, Analytics 🆕 | Data | Central Region Engagement Hub IN; Northern Region Engagement Hub IN +3 | term dates not stated |  | ✓ | ✓ | 2026-11-17 | [Apply](https://synchronyfinancial.wd5.myworkdayjobs.com/careers/job/Central-Region-Engagement-Hub-IN/Intern--Analytics_2603082) |
| **Bloomberg Industry Group** | Data Analyst Intern 🆕 | Data | Arlington, VA | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-16 | [Apply](https://bloomberg.wd1.myworkdayjobs.com/Bloombergindustrygroup_External_Career_Site/job/Arlington-VA---1801-S-Bell-INDG/Data-Analyst-Intern_145487) |
| **Trinity Life Sciences** | Data Science Intern 🆕 | Data | Waltham, MA; New York, NY | Summer 2027 dates not stated |  |  | ? | 2026-10-27 | [Apply](https://trinitylifesciences.wd108.myworkdayjobs.com/Trinity/job/Waltham-MA---Headquarters/Data-Science-Intern_JR100881) |
| **Toyota** | Data Science Intern, TFS 🆕 | Data | Plano, TX | Summer 2027 dates not stated |  |  | ? | 2026-10-21 | [Apply](https://go.vansh.nyc/dm) |
| **State Street** | State Street Global Credit Finance - Client Strategy - 2027 Summer Internship 🆕 | Finance | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-17 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Global-Credit-Finance---Client-Strategy---2027-Summer-Internship_R-801224) |
| **State Street** | State Street Investment Management - Investment Solutions Group - 2027 Summer Internship 🆕 | Finance | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-17 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---Investment-Solutions-Group---2027-Summer-Internship_R-801219-1) |
| **State Street** | State Street Investment Management- Client Portfolio Management - 2027 Summer Internship 🆕 | Finance | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  |  | 2026-11-17 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management--Client-Portfolio-Management---2027-Summer-Internship_R-801215-1) |


<details>
<summary>27 roles no longer found this scan</summary>

- NVIDIA — Deep Learning Computer Architecture Intern (ask; first seen 2026-11-03)
- Tesla — Advanced Automation Engineer Intern - Cell Engineering - Winter/Spring 2027 (ask; first seen 2026-11-03)
- Campbell Soup — Data Science Intern (ask; first seen 2026-11-03)
- Atlassian — Security Engineer Intern (ask; first seen 2026-11-03)
- Garmin — Cyber Security Engineer Intern (ask; first seen 2026-11-03)
- Keysight — R&D Software Engineer QA DevOps Intern (ask; first seen 2026-11-03)
- NVIDIA — Systems Software Engineering Intern (ask; first seen 2026-11-03)
- Rivian — Computer Vision Software Intern (ask; first seen 2026-11-03)
- Susquehanna International Group — Machine Learning Engineering Intern (ask; first seen 2026-11-03)
- TikTok — Security Software Engineer Project Intern, Product Security (ask; first seen 2026-11-03)
- TikTok — Software Development Engineer in Test Intern, Testing (ask; first seen 2026-11-03)
- TikTok — Software Development Engineer Intern, Global E-Commerce Quality Platform & AI Test Automation (ask; first seen 2026-11-03)
- TikTok — Site Reliability Engineer Intern, Global SRE (ask; first seen 2026-11-03)
- Two Sigma — Software Engineering Intern (ask; first seen 2026-11-03)
- Zipline — System Test Automation Intern (ask; first seen 2026-11-03)
- Qualcomm — Machine Learning & Artificial Intelligence Engineering Intern (ask; first seen 2026-11-03)
- Qualcomm — Software Engineering Intern (ask; first seen 2026-11-03)
- Qualcomm — Security Engineering Intern, Product, Systems, Cyber (ask; first seen 2026-11-03)
- Qualcomm — IT Infrastructure & Cloud Engineering Intern (ask; first seen 2026-11-03)
- Seagate — Software and Data Analytics Development Intern, AFM (ask; first seen 2026-11-03)
- Seagate — Machine Learning for Corporate Strategy Intern (ask; first seen 2026-11-03)
- Booz Allen Hamilton — Systems Engineer Intern - Summer Games (ask; first seen 2026-11-06)
- Toyota Research Institute — Automated Driving Advanced Development Intern - Machine Learning Research (ask; first seen 2026-11-06)
- Skydio — Systems Engineering Intern - Summer 2027 (ask; first seen 2026-11-09)
- Nationwide — Summer 2027 Commercial Agribusiness Underwriting Intern (ask; first seen 2026-11-10)
- Philips — AI & Analytics Analyst Intern (ask; first seen 2026-11-16)
- Marriott — Corporate Information Technology Intern (ask; first seen 2026-11-16)

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
