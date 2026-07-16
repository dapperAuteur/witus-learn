// Authored "India: When Most Workers Have No Employer" — Wave 2 of the Workers' Rights track
// (plans/future-courses/workers-rights-track-proposal.md; the proposal calls this "the single most
// important course in the track"). A country course hanging off the anchor, "The History of Unions:
// America and the World" (scripts/data/history-of-unions-course.ts). The anchor supplies the four
// questions; this course is where the assumption UNDER all four — worker = employee with an
// employer — breaks.
//
// Sourcing discipline (the load-bearing part of this file):
//   * THE HEADLINE NUMBER IS NAMED, DATED AND DEFINED, never just quoted. The India Employment
//     Report 2024 (ILO + Institute for Human Development, built on the Periodic Labour Force
//     Survey) puts ~82% of workers in the INFORMAL SECTOR and ~90% in INFORMAL EMPLOYMENT — and the
//     course teaches the difference between those two measures (the gap is informal jobs inside
//     formal firms). Informality statistics are genuinely contested; the course says so and names
//     its definition (no social security / no employment benefits) rather than asserting "the"
//     number.
//   * THE LABOUR CODES ARE TAUGHT DATED, not asserted as settled. Passed 2019 (Wages) and 2020
//     (Industrial Relations, OSH, Social Security), consolidating 29 central laws; brought into
//     force 21 November 2025; final Central Rules notified 8 May 2026; STATE rules still uneven as
//     of mid-2026 because labour is a concurrent subject. Every status claim carries an "as of."
//   * STATUTE SECTIONS ARE THE REAL ONES or none are given: Trade Unions Act 1926 § 4 (with the
//     2001 amendment thresholds), IR Code 2020 (300-worker prior-permission threshold, 14-day
//     strike notice, 51% sole negotiating union), Social Security Code 2020 § 2 definitions of
//     gig worker / platform worker / aggregator and the 1–2%-of-turnover contribution capped at 5%
//     of payouts. No scheme name or section number is invented.
//   * STRIKE HEADCOUNTS ARE ATTRIBUTED, NOT ASSERTED: the 9 July 2025 general strike's "over 250
//     million" is the organising unions' claim and the course says exactly that — no independent
//     turnstile count exists.
//   * THE CASTE MATERIAL IS GOVERNMENT DATA READ INTO PARLIAMENT, not advocacy numbers: 377 deaths
//     in hazardous sewer/septic-tank cleaning 2019–2023 (Rajya Sabha, July 2024) stated by the SAME
//     ministry that reported no manual scavenging "as defined by the 2013 Act" — the definitional
//     gap is taught as the artifact it is. NAMASTE profiling (Lok Sabha, December 2024): of 54,574
//     validated sewer/septic workers, 67.9% Scheduled Castes, ~92% SC/ST/OBC combined.
//   * REFUSALS, stated in-lesson rather than papered over: no current verified union-membership
//     census exists (the last completed government verification dates to 2002) and the course gives
//     federation claims as claims; "the world's largest workforce" is NOT asserted (China's labour
//     force is comparable and the claim is unverifiable) — "most populous country" (UN, 2023) is;
//     no count of "protection-contract-style" fake unions is offered because none exists.
//   * India has NOT ratified ILO Conventions 87 & 98 — the course gives the government's own stated
//     reason (statutory restrictions on government servants) rather than an imputed one, and pairs
//     it with T.K. Rangarajan v. Government of Tamil Nadu (2003): no fundamental, legal, moral or
//     equitable right to strike for government employees.

import type { AuthoredCourse } from "./authored-course";

export const LABOR_INDIA_COURSE: AuthoredCourse = {
  title: "India: When Most Workers Have No Employer",
  description:
    "Every tool in the anchor course — the election, the contract, the grievance procedure, the duty to bargain — assumes one thing so basic it is never said out loud: that a worker is an employee, and an employee has an employer. India is where that assumption breaks. About 90% of Indian workers are in informal employment (India Employment Report 2024, ILO and the Institute for Human Development, built on the government's own Periodic Labour Force Survey): no written contract, no social security, often no identifiable employer at all. This course teaches what that number means and where it comes from; the full legal machine India built on paper (a union with seven members, a constitution that guarantees association — and a Supreme Court that found no fundamental right to strike); union federations that each belong to a political party — a third politics-and-labor entanglement to set against Poland and China; SEWA, the Self-Employed Women's Association, which since 1972 has organised millions of women who have no employer to bargain with — the one institutional invention in this track built for exactly that; the 2019–2020 Labour Codes that folded 29 laws into four and then waited five years to come into force (taught dated, because the states are still writing their rules); the first legal recognition of gig and platform workers anywhere in this track; and the honest part — caste and labor, the sewer deaths a ministry reported to Parliament in the same breath as 'no manual scavenging,' and child labor's real progress and real limits. Cited to the ILO, the Periodic Labour Force Survey, the Codes' own text, parliamentary answers, and SEWA's own record. A country course in the Workers' Rights track — take \"The History of Unions: America and the World\" first.",
  lessons: [
    // ────────────── SECTION 1 · THE NUMBER THAT BREAKS THE MACHINE ──────────────
    {
      slug: "india-nine-in-ten",
      title: "1 · Nine in ten: the number that breaks the machine",
      section: "Section 1 · The number that breaks the machine",
      body: `Think back to the anchor course, **The History of Unions: America and the World**, and list the machinery it taught you: the union election. The collective agreement. The grievance procedure. The duty to bargain. The unfair-dismissal claim. Now notice the one assumption every single piece of that machinery rests on, so basic it is never said out loud:

**A worker is an employee. An employee has an employer. The employer is who you organise against, bargain with, and file against.**

This course is about the country where that assumption breaks — not at the edges, but for **roughly nine workers out of ten.**

**The number, named, dated, and defined — because with this statistic, that discipline is the whole game.** The **India Employment Report 2024**, published by the **International Labour Organization (ILO)** together with the Institute for Human Development, and built on data from India's own **Periodic Labour Force Survey (PLFS)** — the official household survey run by the National Statistics Office — reports two different figures, and you need both:

| Measure | Share of India's workers | What it counts |
| --- | --- | --- |
| Workers in the **informal sector** | **about 82%** | People whose *workplace* is an unregistered or unincorporated enterprise — the street stall, the household, the five-person workshop |
| Workers in **informal employment** | **about 90%** | People whose *job* carries no social-security protection and no employment benefits — wherever that job sits |

*(ILO & Institute for Human Development, 2024.)*

Why is the second number bigger than the first? Because **formal firms hire informally too.** A cleaner working inside a registered factory, supplied by a contractor, with no provident fund and no paper trail, holds a formal-*sector* job and an informal *employment relationship*. The 90% is the more honest measure of how work is actually experienced, and it is the one this course means when it says "informal."

**What "informal" means concretely.** Not "illegal," and not "unemployed." It means: **no written contract. No paid leave. No provident fund (India's retirement system) and no employer health insurance. No notice period, because there is nothing to give notice under.** Frequently, no fixed workplace, and no single person or firm you could point to as "the employer." The street vendor buys her vegetables at dawn and owes nobody a timesheet. The construction worker is picked up at a morning labour market by a contractor who was himself hired by a subcontractor. The home-based worker rolls incense sticks or stitches garments at piece rates for a middleman she may never meet twice. The domestic worker has an employer of a kind — but one invisible to nearly every labour statute India has ever written.

**One honest caveat, before you get attached to the number.** Informality statistics are genuinely contested. Different bodies draw the line differently — by enterprise registration, by social-security coverage, by written contract — and the headline percentage moves with the definition. That is exactly why this course names its source (ILO/PLFS), its year (2024), and its definition (no social security or employment benefits), and why you should refuse any bare "X% of Indians work informally" that arrives without all three. The lesson generalises: **a statistic without a definition is a vibe.**

Scale, for orientation: India has been the world's **most populous country** since 2023 (United Nations, 2023). You will sometimes read that it has "the world's largest workforce" — this course does not assert that, because it depends on definitions and China's labour force is of comparable size. Most populous country is enough: nine-tenths informality here is not a rounding error in the world's labour story. It may be the main plot.

:::reveal The India Employment Report 2024 gives two numbers — about 82% and about 90%. What does each measure, and why is the second bigger? ||| About 82% is the share of workers in the informal SECTOR — unregistered/unincorporated enterprises. About 90% is the share in informal EMPLOYMENT — jobs with no social security or employment benefits, wherever they sit. The second is bigger because formal firms also hire informally: a contract cleaner inside a registered factory holds a formal-sector job and an informal employment relationship.

## Sources
- International Labour Organization & Institute for Human Development. (2024). *India Employment Report 2024: Youth employment, education and skills*. ILO. https://www.ilo.org/sites/default/files/2024-08/India%20Employment%20-%20web_8%20April.pdf
- Ministry of Statistics and Programme Implementation, National Statistics Office. (n.d.). *Periodic Labour Force Survey (PLFS)*. Government of India. https://mospi.gov.in/
- United Nations Department of Economic and Social Affairs. (2023). *India overtakes China as the world's most populous country* (Policy Brief No. 153). https://www.un.org/development/desa/dpad/publication/un-desa-policy-brief-no-153-india-overtakes-china-as-the-worlds-most-populous-country/`,
      recallContent: [
        {
          prompt: "India's informality figure, with year, source, and definition.",
          answer:
            "About 90% of India's workers are in INFORMAL EMPLOYMENT — jobs carrying no social-security protection or employment benefits — per the India Employment Report 2024 (ILO & Institute for Human Development), built on the government's Periodic Labour Force Survey. About 82% work in the informal SECTOR (unregistered enterprises).",
        },
        {
          prompt: "Why must any informality statistic carry its definition?",
          answer:
            "Because informality is measured differently by different bodies (enterprise registration vs social-security coverage vs written contract), and the headline percentage swings with the definition. A statistic without a definition, source, and year is not usable.",
        },
      ],
    },
    {
      slug: "india-law-on-paper",
      title: "2 · The law on paper: a complete machine most workers never touch",
      section: "Section 1 · The number that breaks the machine",
      body: `Here is the twist a first-time student never expects: India's problem is **not** an absence of labour law. India has one of the oldest and most elaborate bodies of labour law in the world. The problem is who the machine can *see*.

**The machine, piece by piece.**

**The Trade Unions Act, 1926.** Passed under British rule — a year *after* the anchor course's American story reached the Wagner Act's predecessors — and still, until the new Codes, the registration law for every Indian union. Its threshold was famously low: **any seven members** of a union could apply to register it (§ 4). A 2001 amendment raised the bar for unions of workers: registration now also requires **at least 10% of the workforce or 100 workers of the establishment or industry, whichever is less** — still subject to the minimum of seven (Trade Unions (Amendment) Act, 2001). Hold that number: *seven people can be a union.* It matters enormously in lesson 6, because the Act does not actually say those seven need a common employer.

**The Industrial Disputes Act, 1947.** Passed in the year of independence: conciliation officers, labour tribunals, rules for lay-off, retrenchment and closure — including, in its later form, a requirement that larger factories get **government permission before mass lay-offs**. (The threshold and its 2020 tripling are a Section 4 story.)

**The Factories Act, 1948; the Minimum Wages Act, 1948.** Safety, hours and welfare for factories; minimum wages — but the Minimum Wages Act covered only **"scheduled employments,"** occupations a government had listed, so a worker in an unlisted occupation had no statutory wage floor at all. Remember that gap: the 2019 Code on Wages exists largely to close it (Section 4).

**The Constitution of India (1950), Article 19(1)(c)** guarantees all citizens the right **"to form associations or unions"** — a fundamental right, sitting next to speech and assembly. But note what is *not* there: the Supreme Court held in **T.K. Rangarajan v. Government of Tamil Nadu (2003)** — the case of roughly 170,000 Tamil Nadu government employees dismissed en masse for striking — that government employees have **"no fundamental, legal, moral or equitable right"** to strike. Forming the union is a constitutional right; using its sharpest tool is not.

**And the international floor?** India was a **founding member of the ILO in 1919** and has ratified six of the eight core conventions — including both child-labour conventions, ratified in 2017. But it has **never ratified Convention No. 87** (freedom of association) **or Convention No. 98** (collective bargaining) — the same two conventions the anchor course called the floor. The government's own stated reason is worth reading precisely because it is candid: ratification would grant rights — to strike, to criticise government policy openly, to join foreign federations — that India's **statutory rules for government servants prohibit** (Press Information Bureau, 2017). File that alongside the anchor's ILO lesson: the country with the world's most famous informal workforce is out of step with the formal floor *because of its most formal workers*.

**Now the catch, and it is the whole course.** Reread the machine above and notice what every part assumes: an **establishment**. An **industry**. An **employer** to be conciliated with, to seek permission, to pay the scheduled wage. The machine is real, elaborate — and pointed at the formal fraction of the economy. For the roughly nine-in-ten in informal employment (lesson 1), there is no establishment to register at, no employer to dispute with, no schedule their occupation appears on. **India did not forget to build labour law. It built a cathedral — on the tenth of the ground where the law could see people standing.**

:::reveal India guarantees union-forming as a fundamental constitutional right, yet has never ratified ILO Conventions 87 and 98. What is the government's own stated reason? ||| Its statutory rules for government servants. Ratifying would mean granting government employees rights those rules prohibit — striking, openly criticising government policy, freely joining foreign organisations — so India stays a non-ratifier of the freedom-of-association floor (its stated position as of 2017), even while Article 19(1)(c) protects forming unions.

## Sources
- The Trade Unions Act, 1926 (India), § 4, as amended by the Trade Unions (Amendment) Act, 2001. India Code. https://www.indiacode.nic.in/bitstream/123456789/20965/1/the_trade_unions_act,_1926.pdf
- The Industrial Disputes Act, 1947 (India). India Code. https://www.indiacode.nic.in/
- Press Information Bureau. (2017, July 24). *ILO fundamental conventions* [Press release]. Government of India, Ministry of Labour & Employment. https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=168889
- T.K. Rangarajan v. Government of Tamil Nadu & Others, Supreme Court of India (2003, August 6). https://indiankanoon.org/doc/88909580/`,
      recallContent: [
        {
          prompt: "How many members does it take to apply to register a union under India's Trade Unions Act, 1926?",
          answer:
            "Seven (§ 4). Since the 2001 amendment, a union of workers also needs at least 10% of the establishment's workforce or 100 workers, whichever is less — still subject to the minimum of seven.",
        },
        {
          prompt: "What did T.K. Rangarajan v. Government of Tamil Nadu (2003) hold?",
          answer:
            "That government employees have no fundamental, legal, moral or equitable right to strike. It arose from the mass dismissal of roughly 170,000 striking Tamil Nadu government employees. Forming a union is a fundamental right under Article 19(1)(c); striking is not.",
        },
      ],
    },
    {
      slug: "india-four-questions",
      title: "3 · The four questions, asked of India",
      section: "Section 1 · The number that breaks the machine",
      body: `If you have taken the anchor course, you own the four questions. If you haven't: take it after this — the questions come from there, and this course does not re-derive them.

1. **Who is allowed to organise?**
2. **Who is excluded?**
3. **Who bargains with whom, and at what level?**
4. **What happens to you if you try?**

Here are India's answers in advance. Everything after this lesson is the detail — and watch what informality does to each question as it passes through.

**Q1 — Who is allowed to organise?** On paper, nearly everyone: Article 19(1)(c) makes forming associations a fundamental right, and seven members can register a union (lesson 2). India is, on this axis, genuinely open — no single state-run federation as in China, no licensing of who may exist as in the Gulf. But the paper right is thinner than it looks: no ratification of ILO Conventions 87/98, and no fundamental right to strike (Rangarajan, 2003).

**Q2 — Who is excluded?** Now compare the exclusions you have already met in this track. The American Wagner Act **wrote its exclusion into the statute**: agricultural and domestic workers, named and carved out. Germany's Works Constitution Act **names its doors too**: executives, church-run institutions. India's great exclusion is different in kind — **it is not written anywhere, because it does not need to be.** The law simply speaks of establishments, industries, employers — and the roughly 90% in informal employment stand outside the vocabulary itself. Nobody excluded the street vendor from the Industrial Disputes Act; there was never an "industrial dispute" she could be party to. Call this the difference between a **statutory door** and a **structural one**: a statutory exclusion can be repealed in an afternoon; a structural exclusion has nothing to repeal.

**Q3 — Who bargains with whom, and at what level?** Where bargaining exists — the formal tenth — it is mostly **enterprise-level**, like the US and unlike Germany's sectors or the Nordic peak agreements, with a layer of tripartite politics on top (unions, employers, government — and every major federation tied to a party, which is Section 2). For the informal nine-tenths, the question mutates into something the anchor course never had to ask: **when there is no employer, who is across the table?** The answers that exist — and SEWA built most of them (Section 3) — are: **the state** (welfare boards, registration schemes, social-security funds) and **the city** (the municipal authority that controls the vendor's street corner). Bargaining with government instead of a boss is not a metaphor here; it is the actual mechanism.

**Q4 — What happens to you if you try?** Three different answers in one country. A **formal private-sector worker** faces a rulebook: strike notice requirements (14 days under the new Industrial Relations Code — dated detail in Section 4) and the tribunal machinery. A **government employee** faces Rangarajan: mass dismissal survived judicial review in 2003. And an **informal worker**? She cannot be fired — there is no job to be fired *from* — so retaliation arrives as **eviction from the street corner, confiscation of the cart, the contractor who simply stops calling, the police**. One of this course's quiet lessons: where employment is informal, *punishment is informal too*, which makes it both milder-looking and harder to litigate than anything in the anchor course.

Keep the four questions in hand. Sections 2 through 5 are India's long answers; Section 6 asks you to give the short ones back.

:::reveal The anchor course showed exclusion written into statutes (the Wagner Act's agricultural and domestic carve-out). Why does India's biggest exclusion have no section number to point to? ||| Because it is structural, not statutory. India's labour machine speaks of establishments, industries and employers — and roughly 90% of workers, being informally employed, fall outside that vocabulary without anyone writing them out. A statutory exclusion can be repealed; a structural one has nothing to repeal, which is why the fix required inventing new institutions rather than amending old ones.

## Sources
- International Labour Organization & Institute for Human Development. (2024). *India Employment Report 2024: Youth employment, education and skills*. ILO. https://www.ilo.org/sites/default/files/2024-08/India%20Employment%20-%20web_8%20April.pdf
- T.K. Rangarajan v. Government of Tamil Nadu & Others, Supreme Court of India (2003, August 6). https://indiankanoon.org/doc/88909580/
- Constitution of India, art. 19(1)(c). https://www.indiacode.nic.in/`,
      recallContent: [
        {
          prompt: "Statutory exclusion versus structural exclusion — define both, with one example each.",
          answer:
            "Statutory: written into the law by name — the Wagner Act carving out agricultural and domestic workers. Structural: the law's vocabulary (employer, establishment, industry) simply never reaches you — India's ~90% informal workforce. The first can be repealed; the second has nothing to repeal.",
        },
        {
          prompt: "For an informal worker in India, what does Question 4 ('what happens to you if you try?') look like?",
          answer:
            "Not dismissal — there is no job to be dismissed from. Retaliation is informal too: eviction from the vending spot, confiscation of the cart, the contractor who stops calling, the police. Informal punishment is harder to litigate than a firing.",
        },
      ],
    },
    {
      slug: "india-quiz-1",
      title: "Section 1 quiz · The number and the machine",
      section: "Section 1 · The number that breaks the machine",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt:
              "According to the India Employment Report 2024 (ILO & Institute for Human Development), roughly what share of India's workers are in informal employment?",
            options: ["About 30%", "About 50%", "About 70%", "About 90%"],
            correctIndex: 3,
            explanation:
              "About 90% — with about 82% in the informal sector. The report is built on India's own Periodic Labour Force Survey.",
            sourceLessonSlug: "india-nine-in-ten",
          },
          {
            prompt: "What is the difference between the 'informal sector' and 'informal employment'?",
            options: [
              "They are synonyms",
              "Informal sector counts unregistered workplaces; informal employment counts jobs without social security or benefits, wherever they sit",
              "Informal sector means illegal work; informal employment means part-time work",
              "Informal employment only counts the self-employed",
            ],
            correctIndex: 1,
            explanation:
              "Sector classifies the WORKPLACE; employment classifies the JOB. The gap between 82% and 90% is informal jobs inside formal firms.",
            sourceLessonSlug: "india-nine-in-ten",
          },
          {
            prompt:
              "A contract cleaner works inside a registered factory with no provident fund and no written contract. How do the two measures classify her?",
            options: [
              "Informal sector and informal employment",
              "Formal sector and formal employment",
              "Formal-sector job, but informal employment relationship",
              "She is not counted in either measure",
            ],
            correctIndex: 2,
            explanation:
              "Her workplace is registered (formal sector), but her job carries no protections (informal employment). This is exactly why the 90% exceeds the 82%.",
            sourceLessonSlug: "india-nine-in-ten",
          },
          {
            prompt: "Why does this course insist any informality statistic carry a source, a year, AND a definition?",
            options: [
              "Because Indian statistics are secret",
              "Because informality is defined differently by different bodies, and the headline percentage swings with the definition",
              "Because the number never changes",
              "Because the ILO forbids quoting numbers otherwise",
            ],
            correctIndex: 1,
            explanation:
              "Enterprise registration, social-security coverage, written contract — different lines produce different numbers. A statistic without a definition is a vibe.",
            sourceLessonSlug: "india-nine-in-ten",
          },
          {
            prompt: "What does 'informal employment' concretely mean for the worker, in this course's definition?",
            options: [
              "Working illegally",
              "Being unemployed",
              "No written contract, no social security (provident fund/health insurance), no paid leave, no notice period — often no identifiable employer",
              "Working from home",
            ],
            correctIndex: 2,
            explanation:
              "Not illegal and not unemployed — working, but outside every protection the formal machine attaches to a job.",
            sourceLessonSlug: "india-nine-in-ten",
          },
          {
            prompt: "What underlying government survey does the India Employment Report 2024 build on?",
            options: [
              "The Census of India",
              "The Periodic Labour Force Survey (PLFS), run by the National Statistics Office",
              "The e-Shram portal",
              "The Economic Survey",
            ],
            correctIndex: 1,
            explanation:
              "The PLFS is India's official household labour-force survey — the domestic data the ILO/IHD report is built on.",
            sourceLessonSlug: "india-nine-in-ten",
          },
          {
            prompt: "Under the Trade Unions Act, 1926, how many members could apply to register a trade union?",
            options: ["Seven", "Fifty", "One hundred", "A majority of the workforce"],
            correctIndex: 0,
            explanation:
              "Seven (§ 4). The 2001 amendment added a 10%-or-100-workers threshold (whichever is less) for unions of workers, still subject to the minimum of seven.",
            sourceLessonSlug: "india-law-on-paper",
          },
          {
            prompt: "What gap did the Minimum Wages Act, 1948 leave open?",
            options: [
              "It only applied to government employees",
              "It covered only 'scheduled employments' — occupations a government had listed — so unlisted occupations had no statutory wage floor",
              "It set wages only for factories",
              "It expired in 1960",
            ],
            correctIndex: 1,
            explanation:
              "No listing, no floor. Closing this gap — a universal minimum wage — is one of the main things the 2019 Code on Wages does (Section 4).",
            sourceLessonSlug: "india-law-on-paper",
          },
          {
            prompt: "What did the Supreme Court hold in T.K. Rangarajan v. Government of Tamil Nadu (2003)?",
            options: [
              "That all strikes are constitutionally protected",
              "That government employees have no fundamental, legal, moral or equitable right to strike",
              "That unions may not be formed by government employees",
              "That the Trade Unions Act is unconstitutional",
            ],
            correctIndex: 1,
            explanation:
              "The case of roughly 170,000 dismissed Tamil Nadu government employees. Forming a union is a fundamental right (Art. 19(1)(c)); striking is not.",
            sourceLessonSlug: "india-law-on-paper",
          },
          {
            prompt: "Which two ILO core conventions has India never ratified, and what is the government's stated reason?",
            options: [
              "The child-labour conventions, citing poverty",
              "Conventions 87 and 98 (freedom of association and collective bargaining), citing statutory restrictions on government servants",
              "The forced-labour conventions, citing prison labour",
              "None — India has ratified all eight",
            ],
            correctIndex: 1,
            explanation:
              "India has ratified six of eight core conventions (both child-labour ones in 2017) but not 87/98 — because ratifying would grant government servants rights their service rules prohibit.",
            sourceLessonSlug: "india-law-on-paper",
          },
          {
            prompt: "What is the 'catch' in India's elaborate labour-law machine?",
            options: [
              "The laws were never passed",
              "Every part assumes an establishment, an industry, an employer — so the machine only reaches the formal fraction of the economy",
              "The laws only apply in Delhi",
              "The machine covers everyone equally",
            ],
            correctIndex: 1,
            explanation:
              "India built a cathedral of labour law — on the tenth of the ground where the law could see people standing.",
            sourceLessonSlug: "india-law-on-paper",
          },
          {
            prompt:
              "How does India's biggest exclusion differ from the Wagner Act's exclusion of agricultural and domestic workers?",
            options: [
              "It is harsher but written in the same way",
              "It is structural rather than statutory — the law's vocabulary never reaches informal workers, so there is no carve-out clause to repeal",
              "It only affects women",
              "It was written by the British and cannot be amended",
            ],
            correctIndex: 1,
            explanation:
              "The Wagner Act names its excluded workers; India's informal nine-tenths were never in the statute's vocabulary at all. A statutory door can be reopened; a structural one has no hinge.",
            sourceLessonSlug: "india-four-questions",
          },
          {
            prompt: "For India's informal workers, who is 'across the table' when they organise?",
            options: [
              "Their employer's HR department",
              "Usually the state (welfare boards, registration schemes) or the city (municipal authorities) — because there is no employer to bargain with",
              "The ILO",
              "Nobody — informal workers cannot organise",
            ],
            correctIndex: 1,
            explanation:
              "When no employer exists, bargaining is redirected at government — welfare boards, social-security funds, the municipality that controls the street corner. Section 3 shows who invented that playbook.",
            sourceLessonSlug: "india-four-questions",
          },
          {
            prompt: "What does retaliation ('Question 4') look like for an informal worker in India?",
            options: [
              "Formal dismissal with notice",
              "A tribunal hearing",
              "Informal punishment — eviction from the vending spot, confiscation of the cart, the contractor who stops calling",
              "Loss of union membership",
            ],
            correctIndex: 2,
            explanation:
              "You cannot be fired from a job that was never formalised. Informal employment produces informal punishment — milder-looking, and harder to litigate.",
            sourceLessonSlug: "india-four-questions",
          },
          {
            prompt: "Why does this course refuse to call India's workforce 'the world's largest'?",
            options: [
              "Because India's workforce is tiny",
              "Because the claim depends on definitions and China's labour force is of comparable size — 'most populous country' (UN, 2023) is the verifiable claim",
              "Because the UN forbids the comparison",
              "Because workforce data does not exist for India",
            ],
            correctIndex: 1,
            explanation:
              "Assert what the source supports: India is the most populous country (UN, 2023). 'Largest workforce' is a definitional coin-flip the course declines.",
            sourceLessonSlug: "india-nine-in-ten",
          },
        ],
      },
    },
  ],
};
