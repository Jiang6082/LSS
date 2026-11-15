# LSS — Late-Summer Internship Scanner

Scans for **US internships at well-known firms** in **software engineering, product management, data/analytics and finance/investment** that can run **after an early-summer internship: starting mid/late July 2027 and ending by 2027-09-30**. Sister project of [QJS](https://github.com/Jiang6082/QJS), [PTS](https://github.com/Jiang6082/PTS) and [ECS](https://github.com/Jiang6082/ECS).

**Filters:** US only (incl. US-remote) · known firms only ([list](inputs/known_firms.json)) · pay ≥ $30/hr when the posting states pay · undergrad roles (PhD / MBA / master's-only excluded) · titles naming C++, Java, iOS/Android, embedded or hardware skipped (Python-friendly) · posted in the last 30 days (undated postings kept) · window 2027-07-13 → 2027-09-30 ([config](inputs/config.json))

> **Last scan:** 2026-11-15 &nbsp;•&nbsp; **0 dates fit** &nbsp;•&nbsp; **4 flexible / near miss** &nbsp;•&nbsp; **454 summer, dates not stated** &nbsp;•&nbsp; **0 new** &nbsp;•&nbsp; 9 closed postings dropped

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
| **Epic Games** | AI Programmer Intern | Cary, NC | flexible — posting says "flexible start" |  | ✓ | ✓ | 2026-11-10 | [Apply](https://epicgames.com/careers/jobs/6251540004?gh_jid=6251540004) |

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

454 roles. The first 60 per track are below; the full list is in [reports/summer_dates_not_stated.md](reports/summer_dates_not_stated.md).

<details>
<summary><strong>💻 Software Engineering</strong> (282)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Adobe** | 2027 Intern - Emerging Technology & Innovation | San Jose | term dates not stated | $38-51/hr |  | ✓ | 2026-10-21 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Amazon** | Associate Engagement Manager Intern- National Security, AWS Professional Services | Arlington, Virginia, USA | term dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-11-02 | [Apply](https://www.amazon.jobs/en/jobs/10594714/associate-engagement-manager-intern-national-security-aws-professional-services) |
| **Amazon** | Database Engineer Intern | Seattle, WA; East Palo Alto, CA +1 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-10-27 | [Apply](https://amazon.jobs/en/jobs/10590290/database-engineer-intern-summer-2027) |
| **Amazon** | Undergrad Software Engineer Intern | SF | term dates not stated | $43/hr |  | ✓ | 2026-10-22 | [Apply](https://job-boards.greenhouse.io/twitch/jobs/8886605002) |
| **Amazon** | Undergrad Software Engineering Intern | San Francisco, CA | Summer 2027 dates not stated | $43/hr |  | ✓ | 2026-10-22 | [Apply](https://job-boards.greenhouse.io/twitch/jobs/8886748002) |
| **Atlassian** | Security Engineer Intern | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $59/hr | ✓ | ✓ | 2026-10-18 | [Apply](https://campus-americas.icims.com/jobs/26267/security-engineer-intern%2c-2027-summer-u.s./job) |
| **Bloomberg** | Engineering Intern | Arlington, VA - 1801 S Bell (INDG) | term dates not stated |  |  | ✓ | 2026-11-13 | [Apply](https://bloomberg.wd1.myworkdayjobs.com/Bloombergindustrygroup_External_Career_Site/job/Arlington-VA---1801-S-Bell-INDG/Engineering-Intern_145704) |
| **Cisco** | Software Engineer Full-Stack / Backend I - Intern - United States | San Jose, CA +2 | term dates not stated |  |  | ? | 2026-11-09 | [Apply](https://cisco.wd5.myworkdayjobs.com/en-US/cisco_careers/job/San-Jose-California-US/Software-Engineer-Full-Stack---Backend-I--Intern----United-States_2024647-1) |
| **Electronic Arts** | Anticheat Engineer Intern | Austin, TX | Summer 2027 dates not stated |  |  |  | 2026-11-03 | [Apply](https://jobs.ea.com/en_US/careers/SearchJobs) |
| **Electronic Arts** | Software Engineer Intern | Orlando, FL | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-19 | [Apply](https://jobs.ea.com/en_US/careers/JobDetail/Software-Engineer-Intern/216263) |
| **Intuit** | Software Engineering Intern, Full Stack | United States | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $36-79/hr |  | ✓ | 2026-10-30 | [Apply](https://jobs.intuit.com/job/mountain-view/summer-2027-software-engineering-intern-full-stack/27595/100620927520) |
| **Microsoft** | First-Year Explore Program Engineering Intern | Redmond, WA | Summer 2027 dates not stated | $26-48/hr |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556925823) |
| **Microsoft** | Software Engineer Intern | Redmond, WA; Aliso Viejo, CA | Summer 2027 dates not stated | $52/hr | ✓ | ✓ | 2026-11-04 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557037859) |
| **Microsoft** | Software Engineer Intern - First Play | Mountain View, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $45-55/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://jobs.smartrecruiters.com/LinkedIn3/744000158394370) |
| **Microsoft** | Software Engineer Intern, CoreAI | Multiple Locations, United States; Redmond, WA | Summer 2027 dates not stated | $33/hr |  | ✓ | 2026-11-02 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0) |
| **Microsoft** | Software Engineer Intern, Security & Identity | Redmond, WA; Cambridge, MA +1 | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-10-23 | [Apply](https://apply.careers.microsoft.com/careers?query=intern&start=0&location=untied+states&sort_by=relevance&filter_include_remote=1&filter_include_relocation=0&pid=1970393556922930) |
| **Microsoft** | Software Engineer Intern, Teamwork Experiences | Redmond, WA | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-11-03 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557037859) |
| **Microsoft** | Software Engineer: Security & Identity Intern Opportunities for University Students - Cambridge | Cambridge, MA | term dates not stated | $52/hr | ✓ | ✓ | 2026-10-22 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557044765) |
| **Microsoft** | Software Engineer: Security & Identity Intern Opportunities for University Students - Redmond | Redmond, WA | term dates not stated | $52/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556922930) |
| **Nintendo** | Intern - Software Engineer, DevOps (NTD) | Redmond, WA | term dates not stated | $45/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4472002009) |
| **Nintendo** | Software Engineer Intern - Audio | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-29 | [Apply](https://careers.nintendo.com/?gh_jid=4470048009) |
| **Nintendo** | Software Engineer Intern - Connectivity | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-29 | [Apply](https://careers.nintendo.com/?gh_jid=4472147009) |
| **Nintendo** | Software Engineer Intern - CPU Debugger - NTD | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4471972009) |
| **Nintendo** | Software Engineer Intern - CPU Profiler | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4469762009) |
| **Nintendo** | Software Engineer Intern - Graphics | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-31 | [Apply](https://careers.nintendo.com/?gh_jid=4473550009) |
| **Nintendo** | Software Engineer Intern - Performance Tools | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-31 | [Apply](https://careers.nintendo.com/?gh_jid=4473568009) |
| **Nintendo** | Software Engineer Intern - Platform Security | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-29 | [Apply](https://careers.nintendo.com/?gh_jid=4469778009) |
| **Nintendo** | Software Engineer Intern, CPU Debugger | Redmond, WA | Summer 2027 dates not stated | $45/hr |  | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4471972009) |
| **Nintendo** | Software Engineer Intern, DevOps | Redmond, WA | Summer 2027 dates not stated | $45/hr | ✓ | ✓ | 2026-10-28 | [Apply](https://careers.nintendo.com/?gh_jid=4472002009) |
| **NVIDIA** | AI Systems Software Engineering Intern | Austin, TX | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-10-30 | [Apply](https://jobs.nvidia.com/careers/job/893398073452) |
| **NVIDIA** | Math Libraries Intern | Canada; Santa Clara, CA +1 | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-02 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/Math-Libraries-Intern--cuEST---Summer-2027_JR2028449) |
| **NVIDIA** | NVIDIA 2027 Internships: Software Engineering | Santa Clara, CA | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✓ | ✓ | 2026-08-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Software-Engineering_JR2023495) |
| **NVIDIA** | NVIDIA 2027 Internships: Systems Software Engineering | Santa Clara, CA; US, CA, Santa Clara | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✗ c++ | ✓ | 2026-10-30 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Systems-Software-Engineering_JR2023492) |
| **NVIDIA** | Performance Testing Engineering Intern - 2027 | Armenia, Yerevan | term dates not stated |  | ✓ | ✓ | 2026-10-29 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/Armenia-Yerevan/Performance-Testing-Engineering-Intern---2027_JR2028481-1) |
| **NVIDIA** | Software Engineering Intern | Canada; Santa Clara, CA +1 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-31 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Software-Engineering_JR2023495) |
| **NVIDIA** | Systems Software Engineering Intern | Santa Clara, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✗ c++ | ✓ | 2026-10-18 | [Apply](https://jobs.nvidia.com/careers/job/893397026201) |
| **Palantir** | Forward Deployed Software Engineer Intern - Warp Speed | NYC; New York, NY | term dates not stated | $58/hr | ✓ |  | 2026-10-23 | [Apply](https://jobs.lever.co/palantir/b3d81928-6c26-432f-8a0a-36602c2eefcb/apply) |
| **Palantir** | Software Engineer Intern - Connectivity Platform - Product | Denver, CO | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-10 | [Apply](https://jobs.lever.co/palantir/eb496d6a-a960-43d3-a09b-e3843052f54e/apply) |
| **Palantir** | Software Engineer Intern - Connectivity Platform and Product | NYC; Denver, CO +1 | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-10 | [Apply](https://jobs.lever.co/palantir/130ee501-bd22-4d44-b651-39581ef97743/apply) |
| **Palantir** | Software Engineer Intern - Data Connectors | NYC; New York, NY | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-10 | [Apply](https://jobs.lever.co/palantir/45e4617d-d658-4b30-8dc9-378ca84a027a/apply) |
| **Palantir** | Software Engineer Intern - Query Engines | NYC; New York, NY | term dates not stated | $61/hr | ✓ | ✓ | 2026-10-20 | [Apply](https://jobs.lever.co/palantir/da774f81-c98c-4dcf-9b9c-949fd7d90a13/apply) |
| **Palantir** | Software Engineer Intern - Sovereign AI Systems | NYC; New York, NY | term dates not stated | $61/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://jobs.lever.co/palantir/cd64bcd4-50bb-4aeb-a135-4e0487ffd312/apply) |
| **PayPal** | Cybersecurity Intern | San Jose, CA; Scottsdale, AZ +2 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922982812) |
| **PayPal** | Cybersecurity Intern - Summer 2027 | San Jose, California, United States of America; Chicago, Illinois, United States of America +2 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.wd1.myworkdayjobs.com/jobs/job/San-Jose-California-United-States-of-America/Cybersecurity-Intern---Summer-2027_R0138587) |
| **PayPal** | Software Engineer Intern | Austin, TX; San Jose, CA +8 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922982814) |
| **PayPal** | Software Engineer Intern - Summer 2027 | San Jose, CA +4; San Jose, California, United States of America +4 | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.wd1.myworkdayjobs.com/en-US/jobs/job/San-Jose-California-United-States-of-America/Software-Engineer-Intern---Summer-2027_R0138586) |
| **Qualcomm** | IT Infrastructure & Cloud Engineering Intern | San Diego, CA | Summer 2027 dates not stated; 11-week program |  | ✓ | ✓ | 2026-10-18 | [Apply](https://careers.qualcomm.com/careers/job/446720741668) |
| **Qualcomm** | Security Engineering Intern, Product, Systems, Cyber | San Diego, CA | Summer 2027 dates not stated; 11-week program |  | ✓ | ✓ | 2026-10-18 | [Apply](https://careers.qualcomm.com/careers/job/446720740636) |
| **Qualcomm** | Software Engineering Intern | San Diego, CA; Austin, TX +6 | Summer 2027 dates not stated; 11-week program |  | ✓ | ✓ | 2026-10-18 | [Apply](https://careers.qualcomm.com/careers/job/446720740529) |
| **Salesforce** | Software Engineer Intern | Palo Alto, CA; Seattle, WA +14 | Summer 2027 dates not stated | $43-52/hr | ✗ java | ✓ | 2026-10-30 | [Apply](https://salesforce.wd12.myworkdayjobs.com/Futureforce_Internships/job/California---San-Francisco/Summer-2027-Intern---Software-Engineer_JR340771) |
| **Salesforce** | Software Engineer Intern, Security/Government | San Francisco, CA; Bellevue, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $43-52/hr | ✗ java |  | 2026-10-19 | [Apply](https://salesforce.wd12.myworkdayjobs.com/Futureforce_Internships/job/California---San-Francisco/Summer-2027-Intern---Software-Engineer--Security-Government-_JR364911) |
| **Salesforce** | Summer 2027 Intern - Software Engineer - Security/Government | California, USA +2 | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $54/hr | ✗ java |  | 2026-10-19 | [Apply](https://salesforce.wd12.myworkdayjobs.com/en-US/external_career_site/job/California---San-Francisco/Summer-2027-Intern---Software-Engineer--Security-Government-_JR364911-1) |
| **Samsung** | AI Application Engineer Intern | San Jose, CA; Folsom, CA | term dates not stated | $28-68/hr | ✓ |  | 2026-11-03 | [Apply](https://job-boards.greenhouse.io/samsungsemiconductor/jobs/8163994003) |
| **ServiceNow** | AI Security Engineer Intern | San Diego, CA | term dates not stated |  |  | ✓ | 2026-11-13 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161548289-ai-security-engineer-intern?oga=true) |
| **ServiceNow** | Associate Detection Engineering Intern | Kirkland, WA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161210069) |
| **ServiceNow** | Associate Information Security Engineer Intern | San Diego, CA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161204235) |
| **ServiceNow** | Associate Security Engineering & Automation Intern | Santa Clara, CA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161209810) |
| **Tesla** | Advanced Automation Engineer Intern - Cell Engineering - Winter/Spring 2027 | Fremont, CA | Summer 2027 dates not stated |  |  | ? | 2026-10-18 | [Apply](https://www.tesla.com/careers/search/job/286986) |
| **Tesla** | Physics Engine Development Engineer Intern - Optimus | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-11-02 | [Apply](https://www.tesla.com/careers/search/job/282147) |
| **Tesla** | Software Engineer Intern - Energy Engineering | Palo Alto, CA | Summer 2027 dates not stated |  |  | ? | 2026-11-13 | [Apply](https://www.tesla.com/careers/search/job/289796) |

_+222 more in the full list._

</details>

<details>
<summary><strong>📱 Product Management</strong> (14)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Amazon** | Product Manager Intern - ALA | Seattle, WA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-10-23 | [Apply](https://amazon.jobs/en/jobs/10491935/2027-amazon-leadership-accelerator-ala-product-manager-internship) |
| **Microsoft** | Product Manager Intern | Redmond, WA; Remote +1 | Summer 2027 dates not stated | $33/hr |  | ✓ | 2026-10-23 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556953113) |
| **Salesforce** | Product Management Intern - Product Management | SF; NYC +2 | Summer 2027 dates not stated | $54-61/hr |  | ✓ | 2026-11-06 | [Apply](https://salesforce.wd12.myworkdayjobs.com/Futureforce_Internships/job/California---San-Francisco/Summer-2027-Intern---Product-Management_JR367659) |
| **Anduril** | 2027 Technical Program Manager Intern | Costa Mesa, California, United States; Honolulu, Hawaii, United States +3 | term dates not stated; 12+ weeks, so a late-July start would run into October | $28-45/hr |  | ✓ | 2026-10-19 | [Apply](https://boards.greenhouse.io/andurilindustries/jobs/5268864007?gh_jid=5268864007) |
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
<summary><strong>📊 Data / Analytics / ML</strong> (135)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Adobe** | 2027 Intern - AI & Architecture | San Jose, CA | term dates not stated | $55/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---AI---Architecture_R172998) |
| **Adobe** | 2027 Intern - Applied and Research Scientist/Engineer | College, AK +3; San Jose +5 | term dates not stated | $55/hr |  | ✓ | 2026-10-20 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Applied-and-Research-Scientist-Engineer_R172064) |
| **Adobe** | 2027 Intern - Data - AI & Innovation | San Jose, CA | term dates not stated | $55/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Adobe** | AI & Architecture Intern | San Jose, CA | Summer 2027 dates not stated | $38-51/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---AI---Architecture_R172998) |
| **Adobe** | Data, AI & Innovation Intern | San Jose, CA | Summer 2027 dates not stated | $38-51/hr |  | ✓ | 2026-10-19 | [Apply](https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Jose/XMLNAME-2027-Intern---Data--AI---Innovation_R172997) |
| **Databricks** | Data Science Intern | SF; Mountain View, CA | term dates not stated |  |  | ✓ | 2026-10-22 | [Apply](https://boards.greenhouse.io/embed/job_app?token=6866538002) |
| **Microsoft** | Applied Scientist Intern | Redmond, WA | term dates not stated | $33/hr |  | ✓ | 2026-10-29 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393556986141) |
| **Microsoft** | Applied Scientist Intern, Turing | Redmond, WA | Summer 2027 dates not stated | $33/hr |  | ✓ | 2026-10-29 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557050150) |
| **Microsoft** | Security Research Intern | Redmond, WA | Summer 2027 dates not stated |  |  | ✓ | 2026-10-22 | [Apply](https://apply.careers.microsoft.com/careers/job/1970393557044769) |
| **NVIDIA** | Deep Learning Computer Architecture Intern | Santa Clara, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  |  | ✓ | 2026-10-30 | [Apply](https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning-Computer-Architecture_JR2023491) |
| **NVIDIA** | Deep Learning Intern | Santa Clara, CA | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October |  | ✓ | ✓ | 2026-10-31 | [Apply](https://jobs.nvidia.com/careers/job/893397026418) |
| **NVIDIA** | NVIDIA 2027 Internships: Deep Learning | Santa Clara, CA; US, CA, Santa Clara | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr | ✓ | ✓ | 2026-10-30 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning_JR2023497-1) |
| **NVIDIA** | NVIDIA 2027 Internships: Deep Learning Computer Architecture | Santa Clara, CA | term dates not stated; 12+ weeks, so a late-July start would run into October | $62/hr |  | ✓ | 2026-08-19 | [Apply](https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/NVIDIA-2027-Internships--Deep-Learning-Computer-Architecture_JR2023491) |
| **PayPal** | Data Scientist Intern | San Jose, CA | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922982821) |
| **PayPal** | Data Scientist Intern - Summer 2027 | San Jose, CA; San Jose, California, United States of America | Summer 2027 dates not stated | $32-55/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.wd1.myworkdayjobs.com/en-US/jobs/job/San-Jose-California-United-States-of-America/Data-Scientist-Intern---Summer-2027_R0138582) |
| **PayPal** | Machine Learning Engineer Intern | San Jose, CA | Summer 2027 dates not stated | $50-59/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.eightfold.ai/careers/job/274922983149) |
| **PayPal** | Machine Learning Engineer Intern - Summer 2027 | San Jose, CA; San Jose, California, United States of America | Summer 2027 dates not stated | $50-59/hr | ✓ | ✓ | 2026-11-05 | [Apply](https://paypal.wd1.myworkdayjobs.com/en-US/jobs/job/San-Jose-California-United-States-of-America/Machine-Learning-Engineer-Intern---Summer-2027_R0138581) |
| **Qualcomm** | Machine Learning & Artificial Intelligence Engineering Intern | San Diego, CA; Austin, TX +5 | Summer 2027 dates not stated; 11-week program |  | ✓ | ✓ | 2026-10-18 | [Apply](https://careers.qualcomm.com/careers/job/446720740525) |
| **Salesforce** | Summer 2027 Intern - Applied AI Strategy & Research | San Francisco, CA | Summer 2027 dates not stated | $54/hr |  | ? | 2026-11-10 | [Apply](https://salesforce.wd12.myworkdayjobs.com/en-US/futureforce_newgradroles/job/California---San-Francisco/Summer-2027-Intern---Applied-AI-Strategy---Research_JR367516-3) |
| **Samsung** | AI Data Analyst Intern | Plano, TX | term dates not stated |  | ✓ | ✓ | 2026-11-06 | [Apply](https://sec.wd3.myworkdayjobs.com/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/Samsung-Care-AI-Data-Analytic-Intern_R121971-1) |
| **Samsung** | Business Intelligence & Data Analytics Intern | Plano, TX | Summer 2027 dates not stated; 10-week program |  | ✓ |  | 2026-11-06 | [Apply](https://sec.wd3.myworkdayjobs.com/en-US/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/Business-Intelligence---Data-Analytics-Intern_R121949) |
| **Samsung** | Care AI Data Analytic Intern | Plano, TX | Summer 2027 dates not stated |  | ✓ | ✓ | 2026-11-06 | [Apply](https://sec.wd3.myworkdayjobs.com/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/Samsung-Care-AI-Data-Analytic-Intern_R121971-1) |
| **Samsung** | ePro Business & Data Analyst Intern | Plano, TX | term dates not stated |  |  | ✓ | 2026-11-08 | [Apply](https://sec.wd3.myworkdayjobs.com/Samsung_Careers/job/6625-Excellence-Way-Plano-TX-USA/ePro-Business---Data-Analyst-Intern_R121996) |
| **Samsung** | Samsung Care AI Data Analytic Intern | Plano, TX | term dates not stated |  | ✓ | ✓ | 2026-11-06 | [Apply](https://sec.wd3.myworkdayjobs.com/en-US/samsung_careers/job/6625-Excellence-Way-Plano-TX-USA/Samsung-Care-AI-Data-Analytic-Intern_R121971-1) |
| **ServiceNow** | AI Identity Intern | Kirkland, WA | term dates not stated |  |  | ✓ | 2026-11-14 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161594249-ai-identity-intern?oga=true) |
| **ServiceNow** | Assoc AI Engineering - Cloud Security Automation Intern | Santa Clara, CA | term dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://jobs.smartrecruiters.com/ServiceNow/744000161209600-assoc-ai-engineering-cloud-security-automation-intern?oga=true) |
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

_+75 more in the full list._

</details>

<details>
<summary><strong>📈 Finance / Investment / Quant</strong> (23)</summary>

| Company | Role | Location | Dates / note | Pay | Py | UG | Posted | Link |
|---|---|---|---|---|---|---|---|---|
| **Man Group** | Systematic Fast Trading Intern | New York | term dates not stated; 10-week program | $50-60/hr | ✓ | ✓ | 2026-10-26 | [Apply](https://job-boards.eu.greenhouse.io/mangroup/jobs/5012801101) |
| **Tower Research Capital** | Finance Intern | New York | term dates not stated |  |  | ✓ | 2026-11-10 | [Apply](https://www.tower-research.com/open-positions/?gh_jid=8372658) |
| **Barclays** | Private Bank and Wealth Management Summer Internship Programme 2027 Jersey | Jersey, 5-6 Esplanade | Summer 2027 dates not stated |  |  | ✓ | 2026-10-22 | [Apply](https://barclays.wd3.myworkdayjobs.com/External_Career_Site_Barclays/job/Jersey-5-6-Esplanade/Private-Bank-and-Wealth-Management-Summer-Internship-Programme-2027-Jersey_JR-0000125565) |
| **JPMorgan Chase** | 2027 Markets Summer Analyst Program - Research | New York, NY, United States | Summer 2027 dates not stated |  |  | ✓ | 2026-11-13 | [Apply](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210690282) |
| **Raymond James** | 2027 Investment Banking Summer Analyst Leveraged Finance New York, NY | New York, New York - United States | Summer 2027 dates not stated | $30/hr |  | ✓ | 2026-10-26 | [Apply](https://raymondjames.wd1.myworkdayjobs.com/RaymondJamesEarlyCareers/job/New-York-New-York---United-States/XMLNAME-2027-Investment-Banking-Summer-Analyst-Leveraged-Finance-New-York--NY_R-0013576) |
| **Federal Reserve** | 2027 Summer Internship Program - Supervision & Regulation (CORE Risk Team) | Atlanta, GA | Summer 2027 dates not stated; 10-week program |  | ✓ | ✓ | 2026-11-06 | [Apply](https://rb.wd5.myworkdayjobs.com/FRS/job/Atlanta-GA/XMLNAME-2027-Summer-Internship-Program---Supervision---Regulation--CORE-Risk-Team-_R-0000033859) |
| **Fifth Third** | Summer 2027 Commercial Middle Market Internship - San Jose | San Jose, CA | Summer 2027 dates not stated |  |  | ✓ | 2026-11-12 | [Apply](https://fifththird.wd5.myworkdayjobs.com/53careers/job/San-Jose-CA/Summer-2027-Commercial-Middle-Market-Internship---San-Jose_R72043) |
| **Intercontinental Exchange** | Trading System Development Intern | NYC; New York, NY | Summer 2027 dates not stated | $30/hr | ✓ | ✓ | 2026-11-06 | [Apply](https://ice.jibeapply.com/jobs/14102?icims=1) |
| **KeyBank** | 2027 Summer Risk Management Internship Program- Cleveland | Cleveland, OH | Summer 2027 dates not stated; 5-week program |  |  | ✓ | 2026-11-04 | [Apply](https://keybank.wd5.myworkdayjobs.com/External_Career_Site/job/Cleveland-OH/XMLNAME-2027-Summer-Risk-Management-Internship-Program--Cleveland_R-41378) |
| **Nationwide** | Summer 2027 Agribusiness Farm Underwriting Intern | Iowa - Des Moines, 1100 Locust Street | Summer 2027 dates not stated; 12+ weeks, so a late-July start would run into October | $23-50/hr |  | ✓ |  | [Apply](https://nationwide.wd1.myworkdayjobs.com/Nationwide_Career/job/Iowa---Des-Moines-1100-Locust-Street/Summer-2027-Agribusiness-Farm-Underwriting-Intern_100051) |
| **Nationwide** | Summer 2027 Commercial Agribusiness Underwriting Intern | Iowa - Des Moines, 1100 Locust Street | Summer 2027 dates not stated | $23-50/hr |  | ✓ |  | [Apply](https://nationwide.wd1.myworkdayjobs.com/Nationwide_Career/job/Iowa---Des-Moines-1100-Locust-Street/Summer-2027-Commercial-Agribusiness-Underwriting-Intern_100049) |
| **State Street** | State Street Investment Management - Credit Research - 2027 Summer Internship | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  |  | 2026-11-04 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---Credit-Research---2027-Summer-Internship_R-800754) |
| **State Street** | State Street Investment Management - Global Leveraged Finance Intern - 2027 Summer | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-04 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---Global-Leveraged-Finance-Intern---2027-Summer_R-800756) |
| **State Street** | State Street Investment Management - US Cash Client Service Team - 2027 Summer Internship | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-04 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---US-Cash-Client-Service-Team---2027-Summer-Internship_R-800751) |
| **State Street** | State Street Investment Management - US Wealth - 2027 Summer Internship | Boston, Massachusetts | Summer 2027 dates not stated | $20-31/hr |  | ✓ | 2026-11-03 | [Apply](https://statestreet.wd1.myworkdayjobs.com/Global/job/Boston-Massachusetts/State-Street-Investment-Management---US-Wealth---2027-Summer-Internship_R-800715) |
| **Travelers** | Actuarial Leadership Development Program (ALDP) Intern | CT - Hartford; MN - St. Paul | term dates not stated | $28-33/hr |  | ✓ | 2026-10-26 | [Apply](https://travelers.wd5.myworkdayjobs.com/External/job/CT---Hartford/Actuarial-Leadership-Development-Program--ALDP--Intern_R-52299) |
| **GCM Grosvenor** | 2027 Treasury Summer Intern | Chicago, Illinois, United States | Summer 2027 dates not stated | $31-34/hr |  | ✓ | 2026-11-04 | [Apply](https://job-boards.greenhouse.io/gcmgrosvenor/jobs/8004540003) |
| **GCM Grosvenor** | 2027 Valuation Summer Intern | Chicago, Illinois, United States | Summer 2027 dates not stated | $31-34/hr |  | ✓ | 2026-11-03 | [Apply](https://job-boards.greenhouse.io/gcmgrosvenor/jobs/8004539003) |
| **Ramp** | Risk Strategy Intern | New York, NY (HQ) | term dates not stated; 12+ weeks, so a late-July start would run into October | $46/hr | ✓ | ✓ | 2026-11-13 | [Apply](https://jobs.ashbyhq.com/ramp/b87e898f-8d8b-447d-b3d5-9073ccf7d109) |
| **Robinhood** | Corporate Finance Intern (Summer 2027) | New York, NY | Summer 2027 dates not stated | $33/hr |  |  | 2026-11-13 | [Apply](https://boards.greenhouse.io/robinhood/jobs/8357464?t=gh_src=&gh_jid=8357464) |
| **Visa** | Risk Intern | PA - Panama City, Panama | term dates not stated |  |  | ✓ | 2026-10-30 | [Apply](https://visa.wd5.myworkdayjobs.com/Visa/job/PA---Panama-City-Panama/Risk-Intern_REF086150W-1) |
| **Motorola Solutions** | IT M&A Integration Analyst - 2027 Summer Internship (Chicago Hybrid) | Chicago, IL | Summer 2027 dates not stated |  |  | ✓ | 2026-11-10 | [Apply](https://motorolasolutions.wd5.myworkdayjobs.com/Careers/job/Chicago-IL/IT-M-A-Integration-Analyst---2026-Summer-Internship--Chicago-Hybrid-_R70464) |
| **Booz Allen Hamilton** | Quantum Computing Research Intern | Washington, DC | Summer 2027 dates not stated | $33/hr | ✓ | ✓ | 2026-11-10 | [Apply](https://bah.wd1.myworkdayjobs.com/bah_jobs/job/Washington-DC/University---Summer-2027-Quantum-Computing-Research-Intern_R0249046) |

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
