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

    // ────────────── SECTION 2 · THE FEDERATIONS AND THEIR PARTIES ──────────────
    {
      slug: "india-federations-and-parties",
      title: "4 · Every federation has a party",
      section: "Section 2 · The unions that exist — and the parties that own them",
      body: `Before this course reaches the workers the law cannot see, meet the unions the law *can* see — because they are strange in their own way, and the strangeness is a third data point in a pattern this track has been building.

**The landscape.** India's union movement is organised into **central trade union organisations (CTUOs)** — national federations that pull together thousands of registered enterprise- and industry-level unions. The big ones, with founding dates and the detail that matters:

| Federation | Founded | Political family |
| --- | --- | --- |
| **AITUC** — All India Trade Union Congress | 1920 | The Communist Party of India (CPI) |
| **INTUC** — Indian National Trade Union Congress | 1947 | The Indian National Congress |
| **HMS** — Hind Mazdoor Sabha | 1948 | The socialist stream of the independence movement |
| **BMS** — Bharatiya Mazdoor Sangh | 1955 | The RSS (Rashtriya Swayamsevak Sangh), the ideological parent of the governing BJP |
| **CITU** — Centre of Indian Trade Unions | 1970 | The Communist Party of India (Marxist), after the communist split |

Read the right-hand column again. **Every major federation is tied to a political party or political family.** AITUC predates independence — Indian unionism is older than the Indian state — and INTUC was founded in 1947, the year of independence, precisely so that the Congress party would have a labour wing that communists did not control. When India's communists split in 1964, the union movement split with them (CITU, 1970). And the BMS was built by the RSS as an explicitly non-Marxist, "nationalist" labour organisation — today aligned with the family of the governing party, which puts it in the extraordinary position of being a union federation whose political parent runs the government it must bargain against.

**Now place this on the track's map, because you have seen politics-and-unions entangled twice before, and neither time looked like this.** In **Poland**, the union came first and *created* a political force: Solidarność brought down the party-state. In **China**, the party came first and *owns* the union: the ACFTU is an organ of the party-state, and no second federation may exist. **India is a third arrangement: many parties, each with its own union.** The union movement is free, plural, competitive — and *divided along party lines*, so that workers in the same factory may belong to rival federations whose first loyalty runs to rival parties. Competition guarantees independence from the state; it also guarantees fragmentation.

**How big are they? Honest answer: nobody currently knows.** Federations report membership claims in the tens of millions each, and the claims are self-declared. The Ministry of Labour runs periodic **membership verification** exercises — but the last one *completed*, whose results were formally used (for things like allocating seats at the ILO and on tripartite bodies), dates to **2002**, when the BMS was verified as the largest federation at about **6.2 million members**, with INTUC (~3.9m), AITUC (~3.3m) and CITU (~2.7m) behind it. A verification begun around 2011 was never brought to a clean, accepted conclusion. So this course does what it always does with contested numbers: gives you the last verified figure with its date, tells you the claims are claims, and refuses to average them. **A country of nine-tenths informal workers does not even have a current official count of its formal union members** — sit with that for a second; it is not an accident, it is a symptom.

*(One more federation belongs in this picture, and it fits no row of the table above: a union of self-employed women, tied to no party, that grew from a 1972 registration fight into millions of members. It gets its own section — Section 3.)*

:::reveal Poland, China, India — three entanglements of unions and political power. State each in one line. ||| Poland: the union came first and destroyed the party-state (Solidarność). China: the party came first and owns the single permitted federation (ACFTU). India: many parties, each with its own union federation — free and plural, but fragmented along party lines, with rival federations competing inside the same workforce.

## Sources
- Ministry of Labour & Employment, Government of India. (n.d.). *Verification of membership of trade unions* [2002 general verification results as reported]. https://labour.gov.in/
- Bharatiya Mazdoor Sangh. (n.d.). *History of trade union movement and BMS*. https://www.bms.org.in/history-of-trade-union-movement-and-bms/
- Centre of Indian Trade Unions. (n.d.). *About CITU*. https://www.citucentre.org/
- International Labour Organization & Institute for Human Development. (2024). *India Employment Report 2024*. ILO. https://www.ilo.org/sites/default/files/2024-08/India%20Employment%20-%20web_8%20April.pdf`,
      recallContent: [
        {
          prompt: "Name the five major Indian union federations, their founding years, and their political families.",
          answer:
            "AITUC (1920, Communist Party of India), INTUC (1947, Indian National Congress), HMS (1948, the socialist stream), BMS (1955, the RSS — the BJP's ideological parent), CITU (1970, CPI(M)). Every major federation has a party.",
        },
        {
          prompt: "What is the last completed government verification of union membership, and what did it find?",
          answer:
            "The 2002 verification: BMS largest at about 6.2 million, then INTUC (~3.9m), AITUC (~3.3m), CITU (~2.7m). Later claims are self-declared and a subsequent verification was never cleanly completed — so no current official count exists.",
        },
      ],
    },
    {
      slug: "india-general-strikes",
      title: "5 · The 250-million-worker strike (and what that number is)",
      section: "Section 2 · The unions that exist — and the parties that own them",
      body: `On **9 July 2025**, a forum of **ten central trade union federations** — INTUC, AITUC, HMS, CITU, and six others, along with **SEWA** (Section 3) — called a one-day nationwide general strike, a *Bharat bandh*. Banking, insurance, postal services, coal mining and public transport were disrupted across much of the country. The organisers' first demand: **repeal of the four Labour Codes** (Section 4). Their headline claim: **over 250 million participants** (ITUC-Asia Pacific, 2025; Business Standard, 2025).

Stop at that number and do to it what this course did to the 90% in lesson 1.

**What "250 million" is:** the organisers' own estimate, announced around the strike. **What it is not:** a turnstile count. Nobody counts a one-day strike across a country of 1.4 billion; there is no register of strikers, no independent audit, and much of the claimed participation is in sectors — agricultural labour, construction, street vending — where "on strike" and "not working today" cannot be told apart from outside. Similar claims accompanied earlier general strikes (2016, 2019, 2020, 2022), each billed at 150–250 million. **This course neither repeats the number as fact nor dismisses it as fiction: it attributes it.** "The unions claimed over 250 million" is a true sentence; "250 million struck" is an unverifiable one. That is not pedantry — it is the difference between reporting and amplifying, and you now know to apply it to every "largest strike in history" headline you will ever read.

**Even discounted heavily, though, something real is happening — and it is worth seeing what.** These strikes reliably shut down banks, mines, ports and state transport across whole regions; even skeptical coverage concedes participation in the tens of millions. That would make them among the largest coordinated work stoppages anywhere on earth. So hold both facts at once: Indian unions represent a *small verified fraction* of a workforce that is 90% informal — and they can produce, at intervals, the biggest strikes in the world.

**How can both be true? Because the Indian general strike is a different instrument from the strikes in the anchor course.** Homestead, Pullman, the Flint sit-down — those were strikes *against an employer*, aimed at a contract. The Indian *bharat bandh* is a strike **against a government, aimed at policy**: labour codes, privatisation, minimum-wage demands, social-security coverage. It is bargaining conducted at the only table where India's fragmented, party-tied federations all sit on the same side — and, crucially, it is the one form of industrial action an **informal worker can join**, because you need no employer to stay home, shut your stall, or march. The paradox of lesson 4 resolves: federations too divided to bargain jointly with any employer, representing a workforce mostly outside employment, converge once every year or two on the single act that requires neither unity of contract nor an employer at all.

**Note the irony in the target.** The unions' central demand in 2025 was repeal of the Labour Codes — laws whose stated purpose includes *extending* rights (a universal minimum wage, social security for gig workers) to the informal majority. Why would unions strike against that? Section 4 lays out what the Codes actually say, what the federations object to, and why the honest answer is "both sides have a case" — dated, as always.

:::reveal "Over 250 million workers joined the 9 July 2025 general strike." What is the epistemically careful version of that sentence, and why? ||| "The organising unions claimed over 250 million participants." The figure is the organisers' own estimate — there is no independent count of a one-day strike across a country of 1.4 billion, and in informal sectors striking is indistinguishable from not working that day. Attribute the number; don't assert or dismiss it.

## Sources
- ITUC-Asia Pacific. (2025, July). *Bharat Bandh: India's workers rise in unprecedented unity against anti-labour policies*. https://www.ituc-ap.org/news-and-updates/bharat-bandh-indias-workers-rise-in-unprecedented-unity-against-anti-labour-policies
- Business Standard. (2025, July 8). *Bharat Bandh on July 9: Over 250 million workers to join nationwide strike*. https://www.business-standard.com/india-news/bharat-bandh-july-9-250-million-workers-strike-public-sector-privatisation-125070800273_1.html
- British Safety Council India. (2025, July). *Bharat Bandh sees over 250 million workers join nationwide strike against 'anti-worker' policies*. https://www.britsafe.in/safety-management-news/2025/bharat-bandh-sees-over-250-million-workers-join-nationwide-strike-against-anti-worker-policies`,
      recallContent: [
        {
          prompt: "Why is the nationwide general strike the one industrial action an informal worker can join?",
          answer:
            "Because it requires no employer: you stay home, shut your stall, or march. Enterprise strikes need an employment relationship; the bharat bandh is aimed at the government and at policy, so the informal nine-tenths can take part.",
        },
        {
          prompt: "How do Indian general strikes differ in TARGET from the strikes in the anchor course (Homestead, Pullman, Flint)?",
          answer:
            "Anchor-course strikes ran against an employer, aimed at a contract. The Indian bharat bandh runs against the government, aimed at policy — labour codes, privatisation, social security. It is bargaining with the state, by the only means available to a fragmented movement.",
        },
      ],
    },
    {
      slug: "india-quiz-2",
      title: "Section 2 quiz · Federations, parties, and the general strike",
      section: "Section 2 · The unions that exist — and the parties that own them",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a CTUO in the Indian labour landscape?",
            options: [
              "A government wage board",
              "A central trade union organisation — a national federation of thousands of registered unions",
              "A type of collective agreement",
              "A labour court",
            ],
            correctIndex: 1,
            explanation:
              "The CTUOs (AITUC, INTUC, BMS, CITU, HMS and others) are the national federations; each major one is tied to a political party or family.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "Which federation is the oldest, and what does its 1920 founding date tell you?",
            options: [
              "INTUC — unions began at independence",
              "AITUC — Indian unionism is older than the Indian state itself",
              "BMS — unions began with the RSS",
              "CITU — unions began with the communist split",
            ],
            correctIndex: 1,
            explanation:
              "AITUC was founded in 1920, twenty-seven years before independence. The Indian union movement predates the Indian state.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "Why was INTUC founded in 1947?",
            options: [
              "To merge all existing unions",
              "So the Congress party would have a labour wing not controlled by communists",
              "To represent government employees only",
              "As a condition of ILO membership",
            ],
            correctIndex: 1,
            explanation:
              "INTUC gave the Congress its own union federation in the year of independence — party-tied unionism was built into the new state from day one.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "What is politically extraordinary about the BMS's position today?",
            options: [
              "It is banned",
              "It is a union federation whose ideological parent (the RSS) is also the parent of the governing party it must bargain against",
              "It has no members",
              "It is run by the ILO",
            ],
            correctIndex: 1,
            explanation:
              "The BMS (founded 1955) belongs to the RSS family, as does the governing BJP — a labour wing and a government grown from the same root.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "What happened to the union movement when India's Communist Party split in 1964?",
            options: [
              "Nothing — unions stayed united",
              "The union movement split with the party: CITU was founded in 1970 alongside AITUC",
              "All communist unions were dissolved",
              "The BMS absorbed both wings",
            ],
            correctIndex: 1,
            explanation:
              "Party splits become union splits when every federation has a party — CITU (CPI(M)) split off from the AITUC (CPI) orbit.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "Poland, China, India — how does this course distinguish their three union-politics entanglements?",
            options: [
              "They are identical",
              "Poland: union created a political force that destroyed the party-state; China: the party owns the one permitted union; India: many parties, each with its own union",
              "Poland: party owns union; China: union owns party; India: no unions",
              "All three have a single state-run federation",
            ],
            correctIndex: 1,
            explanation:
              "Three different orderings of union and party. India's version is free and plural — and fragmented along party lines.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "What is the trade-off of India's many-parties-many-unions arrangement?",
            options: [
              "Independence from the state, at the price of fragmentation — rival federations compete inside the same workforce",
              "Unity, at the price of state control",
              "High membership, at the price of illegality",
              "There is no trade-off",
            ],
            correctIndex: 0,
            explanation:
              "Competition guarantees no single party-state can own labour; it also means workers in one factory may belong to federations loyal to rival parties.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "When was the last completed, formally used government verification of union membership, and who was largest?",
            options: [
              "2019 — INTUC",
              "2002 — BMS, at about 6.2 million verified members",
              "2011 — CITU",
              "There has never been one",
            ],
            correctIndex: 1,
            explanation:
              "The 2002 verification (BMS ~6.2m, INTUC ~3.9m, AITUC ~3.3m, CITU ~2.7m) is the last completed one; later claims are self-declared and a 2011-era exercise was never cleanly concluded.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "Why does this course refuse to state current membership figures for the federations?",
            options: [
              "Membership is a state secret",
              "Because current claims are self-declared and no completed verification supports them — the course gives the last verified figure (2002) with its date instead",
              "Because membership is zero",
              "Because the ILO forbids publishing them",
            ],
            correctIndex: 1,
            explanation:
              "Same discipline as the informality statistic: a number needs a source and a date, and 'the union says so' is an attribution, not a verification.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "What was the organisers' first demand in the 9 July 2025 general strike?",
            options: [
              "A four-day work week",
              "Repeal of the four Labour Codes",
              "Nationalisation of all industry",
              "India's exit from the ILO",
            ],
            correctIndex: 1,
            explanation:
              "The forum of ten federations demanded repeal of the Codes — the laws Section 4 examines. Ten rival federations converging on one demand is itself the story.",
            sourceLessonSlug: "india-general-strikes",
          },
          {
            prompt: "What exactly is the '250 million' figure attached to the 9 July 2025 strike?",
            options: [
              "A government census of strikers",
              "The organising unions' own claimed participation figure — attributed by this course, not asserted",
              "An ILO-audited count",
              "The number of union members in India",
            ],
            correctIndex: 1,
            explanation:
              "No independent count of a one-day strike across 1.4 billion people exists. 'The unions claimed over 250 million' is true; '250 million struck' is unverifiable.",
            sourceLessonSlug: "india-general-strikes",
          },
          {
            prompt: "Why can't strike participation be verified in India's informal sectors?",
            options: [
              "Strikes are illegal there",
              "Because from outside, 'on strike' and 'not working today' are indistinguishable for a street vendor or day labourer",
              "Because informal workers never stop working",
              "Because the government hides the data",
            ],
            correctIndex: 1,
            explanation:
              "No employer, no shift roster, no picket line to cross — participation in the informal economy is unobservable, which is exactly why claims must be attributed.",
            sourceLessonSlug: "india-general-strikes",
          },
          {
            prompt: "How does the Indian bharat bandh differ from the anchor course's strikes in its target?",
            options: [
              "It does not differ",
              "It is aimed at the government and its policies, not at an employer and a contract",
              "It is aimed at foreign companies",
              "It is aimed at the courts",
            ],
            correctIndex: 1,
            explanation:
              "Homestead and Pullman ran against employers. The general strike is bargaining with the state — the one table where all federations sit on the same side.",
            sourceLessonSlug: "india-general-strikes",
          },
          {
            prompt: "Why is the general strike the one industrial action open to informal workers?",
            options: [
              "Because the law exempts them from strike notice",
              "Because it requires no employer — staying home, shutting a stall, or marching needs no employment relationship",
              "Because unions pay them to participate",
              "Because it happens on public holidays",
            ],
            correctIndex: 1,
            explanation:
              "An enterprise strike presupposes an employer; a political general strike does not. That is why a 90%-informal workforce can still produce world-scale stoppages.",
            sourceLessonSlug: "india-general-strikes",
          },
          {
            prompt:
              "The unions struck in 2025 against Labour Codes that extend a universal minimum wage and gig-worker social security. What does the course say about this apparent irony?",
            options: [
              "The unions misread the laws",
              "That both sides have a case, and Section 4 lays out the Codes' text and the objections — dated, as always",
              "The Codes secretly abolish unions",
              "The strike was actually in support of the Codes",
            ],
            correctIndex: 1,
            explanation:
              "The Codes give with one hand (coverage) and take with the other (thresholds, notice rules) — the honest treatment is the statute text plus both arguments, not a verdict by headline.",
            sourceLessonSlug: "india-general-strikes",
          },
        ],
      },
    },

    // ────────────── SECTION 3 · SEWA ──────────────
    {
      slug: "india-sewa-1972",
      title: "6 · Ahmedabad, 1972: a union with no employer to name",
      section: "Section 3 · SEWA — the union with no employer to strike against",
      body: `Here is the lesson the whole track has been waiting for — the one institutional invention built for exactly the place where "worker = employee" breaks.

**The setting.** Ahmedabad, in the state of Gujarat: one of the historic centres of Indian textile manufacturing, and home to the **Textile Labour Association (TLA)** — the mill-workers' union that grew out of the 1918 Ahmedabad mill strike in which Mohandas Gandhi was an adviser, and whose first president was Anasuya Sarabhai. A completely conventional union: mills, employers, members, disputes.

**The person.** **Ela Bhatt (1933–2022)**, a young labour lawyer on the TLA's staff, who came to head its women's wing. Doing that job, she kept meeting women the union had no category for: head-loaders carrying cloth between wholesale markets for per-trip payments; cart-pullers; used-garment dealers; home-based stitchers paid by the piece through middlemen. They worked in and around the textile trade the TLA existed to organise — and not one of them was anyone's employee. No mill on their pay records, no pay records at all.

**The move.** In 1972 Bhatt and these workers founded the **Self-Employed Women's Association — SEWA** — and applied to register it as a **trade union** under the Trade Unions Act, 1926. The Labour Department's objection was the entire subject of this course stated as bureaucracy: *a union, surely, requires an employer to struggle against — against whom would this union be directed?* SEWA's answer, which its members have repeated for fifty years: **a union is not defined by its adversary but by its purpose — organising workers, as workers, for their own development.** The registration went through: SEWA records its registration as a trade union on **12 April 1972** (SEWA, n.d.). Remember lesson 2: the 1926 Act asks for seven members; **it nowhere requires that they share an employer.** A colonial-era statute written for a world of mills turned out to contain, unnoticed for half a century, the legal space for a union of the employer-less.

**What it became.** SEWA today reports **3.78 million members across 20 states** (SEWA, n.d.) — street vendors, home-based workers, waste pickers, agricultural labourers, domestic workers, construction workers. Treat that figure with the discipline this course has drilled: it is **SEWA's own count**, not an audited one. But even discounted, hold it against lesson 4's landscape — the last *verified* membership of India's largest conventional federation was about 6.2 million (2002), and every conventional federation's verified base is dwarfed by its claims. By any honest reading, **a union of women who have no employers is one of the largest workers' organisations in India** — and, unlike every federation in lesson 4's table, **it belongs to no political party.**

**Why this matters beyond India.** Every model in this track so far — Wagner elections, German works councils, Nordic Ghent funds, even Solidarność — organises people *through their employment*. SEWA is the track's one working answer to the question the other eleven courses never have to ask: *how do you organise workers when there is no employer in the picture at all?* The next lesson takes the machine apart.

:::reveal The Labour Department's 1972 objection to registering SEWA states this course's central theme as bureaucracy. What was the objection, and what was SEWA's answer? ||| Objection: a union needs an employer to struggle against — against whom would a union of the self-employed be directed? Answer: a union is defined by its purpose, not its adversary — organising workers, as workers, for their own development. The Trade Unions Act, 1926 requires seven members, not a shared employer, and SEWA registered on 12 April 1972.

## Sources
- Self-Employed Women's Association. (n.d.). *About us*. https://www.sewa.org/about-us/
- Self-Employed Women's Association. (n.d.). *SEWA's membership*. https://www.sewa.org/membership-and-affiliations/sewa-membership/
- The Trade Unions Act, 1926 (India), § 4. India Code. https://www.indiacode.nic.in/bitstream/123456789/20965/1/the_trade_unions_act,_1926.pdf`,
      recallContent: [
        {
          prompt: "SEWA — who founded it, when, where, and under what law did it register?",
          answer:
            "Ela Bhatt (1933–2022), a labour lawyer from the Textile Labour Association's women's wing, founded the Self-Employed Women's Association in Ahmedabad in 1972. It registered as a trade union under the Trade Unions Act, 1926 (SEWA records 12 April 1972) after arguing a union needs a purpose, not an employer.",
        },
        {
          prompt: "How big is SEWA, and how should that figure be treated?",
          answer:
            "SEWA reports 3.78 million members across 20 states — its own count, attributed not audited. Even discounted, it is one of India's largest workers' organisations, and unlike the major federations it is tied to no political party.",
        },
      ],
    },
    {
      slug: "india-sewa-how",
      title: "7 · How do you bargain with nobody? The SEWA method",
      section: "Section 3 · SEWA — the union with no employer to strike against",
      body: `A union's toolkit, as the anchor course taught it: organise, certify, bargain, strike, grieve. Every verb aims at an employer. SEWA had to rebuild the toolkit for workers who have none — and the rebuild is the most instructive piece of labour-institution engineering in this track.

**SEWA's own formulation is "struggle and development"** — a union *and* a web of member-owned institutions, because for the self-employed, half of what a contract would provide has to be built instead.

**Tool 1 — the identity card.** The most underrated object in this course. A SEWA membership card is often the first document a member has ever held that names her as a *worker*. For a street vendor facing a policeman confiscating her cart, or a head-loader disputing a payment, a card — an organisation that will answer for her — converts an invisible person into a represented one. Recall lesson 3: informal retaliation (eviction, confiscation, harassment) is Question 4 for the informal worker. The card is the counter-tool.

**Tool 2 — replace the missing counterparty.** No employer? Then find the entity that actually controls the member's livelihood, and bargain *there*:
- For **piece-rate home workers**, the counterparty is the middleman and the trader chain — SEWA runs campaigns over piece rates, the informal economy's version of a wage claim.
- For **street vendors**, it is the **municipality** that controls the street. SEWA has fought vendors' eviction battles from city offices up into the courts, and that decades-long fight fed into a national statute: the **Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014**, which for the first time gave vendors a statutory framework — including town vending committees with mandated vendor representation (the Act sets it at 40 per cent of members). A law, note, that regulates *cities*, not employers: labour law with the employer deleted.
- For **everyone**, the residual counterparty is **the state** — lobbying workers onto welfare boards and social-security schemes. When lesson 12 reaches e-Shram, India's national registry of informal workers, you will recognise whose logic it borrows.

**Tool 3 — build what the contract would have contained.** A formal job carries credit-worthiness, insurance, childcare, a pension. SEWA builds each as a member-owned institution: the **SEWA Cooperative Bank**, founded in 1974 out of thousands of members' tiny share contributions, because no commercial bank would lend to an undocumented vegetable seller; insurance (VimoSEWA), childcare cooperatives, producer and vendor cooperatives that let members bypass the middleman entirely. This is the piece with no equivalent anywhere else in the track: **the union as a substitute for the employment relationship itself**, not just a party to it. (Nearest cousin: the Nordic Ghent funds — services binding members to the union — but those top up a formal system; SEWA's institutions stand in for an absent one.)

**Tool 4 — export the category.** SEWA took "the self-employed are workers" to the international level: Ela Bhatt co-founded **WIEGO** (Women in Informal Employment: Globalizing and Organizing, 1997), SEWA helped build **HomeNet**, the international alliance of home-based workers' organisations, and that alliance's campaigning contributed to the ILO's **Home Work Convention, 1996 (No. 177)** — the first ILO convention recognising home-based workers, and the ILO's **Recommendation 204 (2015)** on formalising the informal economy now frames the issue globally. The definitional fight a Gujarat labour department lost in 1972 has since been fought, and largely won, at the ILO.

**What the method costs.** Note what is absent from all four tools: a collective *agreement*. SEWA wins rates, laws, seats and services — it cannot win a contract, because there is no counterparty capable of signing one for its members as a class. That gap is the honest subject of the next lesson.

:::reveal SEWA cannot bargain with an employer, so it re-aims each tool. For a home-based piece-rate worker, a street vendor, and the membership at large — who is the counterparty in each case? ||| The home-based worker's counterparty is the middleman/trader chain (piece-rate campaigns). The street vendor's is the municipality that controls the street — a fight that fed the Street Vendors Act, 2014. For members at large it is the state: welfare boards, social-security schemes, registration. Where none of those suffice, SEWA builds the missing institution itself (bank, insurance, cooperatives).

## Sources
- Self-Employed Women's Association. (n.d.). *About us; SEWA's structure*. https://www.sewa.org/about-us/
- The Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014 (India). India Code. https://www.indiacode.nic.in/
- International Labour Organization. (1996). *Home Work Convention, 1996 (No. 177)*. https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID:312322
- International Labour Organization. (2015). *Transition from the Informal to the Formal Economy Recommendation, 2015 (No. 204)*. https://www.ilo.org/`,
      recallContent: [
        {
          prompt: "SEWA's 'struggle and development' — what does each half mean?",
          answer:
            "Struggle: the union half — piece-rate campaigns against middlemen, eviction fights with municipalities, lobbying the state for welfare boards and laws. Development: member-owned institutions that build what a contract would have contained — the SEWA Cooperative Bank (1974), insurance, childcare, producer cooperatives.",
        },
        {
          prompt: "Name the 2014 statute SEWA's vendor battles helped produce, and what is odd about it as labour law.",
          answer:
            "The Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014 — with town vending committees whose membership must be 40% vendors. It is labour law with the employer deleted: it regulates cities, not employers.",
        },
      ],
    },
    {
      slug: "india-sewa-lesson",
      title: "8 · What SEWA proves — and what it doesn't",
      section: "Section 3 · SEWA — the union with no employer to strike against",
      body: `Time to do to SEWA what this course did to the 90% and the 250 million: state precisely what it establishes, and refuse to romanticise past that line.

**What SEWA proves.**

**1. "Worker" and "employee" are different categories — as a matter of demonstrated fact, not theory.** Three-plus million self-employed women organised, registered, banked, insured and represented for five decades is an existence proof. The anchor course's machinery assumes the two categories coincide; SEWA is the standing demonstration that they need not.

**2. The four questions still work — they just return different answers.** Who may organise? Anyone with seven members and a purpose (the 1972 registration). Who is excluded? Nobody by statute — but note honestly who the model reaches less well: SEWA organises women, by design, rooted in the reality that informal work is disproportionately women's work; parallel organising of informal men has been thinner everywhere. Who bargains with whom? Middlemen, municipalities, the state — lesson 7. What happens if you try? Harassment and eviction still, but now with a card, a lawyer, and three million co-members behind you.

**3. Services build unions where statutes don't.** The Nordic course showed the Ghent effect: unions that administer unemployment funds keep members. SEWA is the same law operating at the opposite end of the world's income distribution: the bank, the insurance, the childcare are why members stay. **Where the law gives a union nothing to deliver, a union that wants members must deliver something itself.**

**What SEWA does not prove.**

**1. It has not produced a collective agreement — because it cannot.** There is no employer-side entity capable of binding itself to pay every head-loader in Ahmedabad a set rate. SEWA wins *rates* in specific markets, *laws* like the 2014 Street Vendors Act, *seats* on boards, *services* — but nothing in its toolkit does what the German sectoral agreement or even a single Wagner-Act contract does: create enforceable terms that attach to the work itself. The absence is structural, and you should hear in it lesson 3's theme again: **no counterparty, no contract.**

**2. Membership is not coverage.** 3.78 million (self-reported) is vast as organising and small as arithmetic: India's informal workforce is measured in the hundreds of millions. SEWA changes its members' lives; it has not changed the *aggregate* condition of Indian informal labour, and fifty years in, the model's spread — real, and international — is still nowhere near the scale of the problem.

**3. It is not a substitute for the state.** SEWA's own strategy concedes this: half its energy goes into pushing the state to build what only the state can — social security, registries, statutory protections. The Labour Codes of Section 4, whatever else they are, are the state finally moving on that terrain: a social-security code that claims to cover the unorganised, a registry (e-Shram) with over 300 million workers on it. Whether that is the SEWA logic scaled up, or a thin imitation of it, is a question you will be equipped to argue in three lessons.

**The one-line verdict to carry forward:** SEWA proves organising the employer-less is possible and shows the working method — identity, substituted counterparties, member-built institutions — while proving, by its own hardest limit, that *bargaining* in the anchor course's sense still requires the one thing nine-tenths of India's workers do not have.

:::reveal SEWA has never signed a collective agreement in fifty years. Why not — and why does this course treat that as a finding rather than a failure? ||| Because no counterparty exists that could bind itself to terms for its members as a class — no employer, no employers' association. No counterparty, no contract: the absence is structural, not a strategic shortfall. It is the cleanest single demonstration of what informality removes — which is exactly the finding this course exists to teach.

## Sources
- Self-Employed Women's Association. (n.d.). *About us; SEWA's membership*. https://www.sewa.org/about-us/
- International Labour Organization & Institute for Human Development. (2024). *India Employment Report 2024*. ILO. https://www.ilo.org/sites/default/files/2024-08/India%20Employment%20-%20web_8%20April.pdf
- International Labour Organization. (2015). *Transition from the Informal to the Formal Economy Recommendation, 2015 (No. 204)*. https://www.ilo.org/`,
      recallContent: [
        {
          prompt: "State SEWA's existence proof and its structural limit in one line each.",
          answer:
            "Proof: workers without employers can be organised at scale — three-plus million members, five decades, a working method. Limit: they cannot be brought under a collective agreement, because no counterparty exists to sign one — no counterparty, no contract.",
        },
        {
          prompt: "How does SEWA illustrate the same law as the Nordic Ghent system?",
          answer:
            "Both show services build unions: Nordic unions keep members by administering unemployment funds; SEWA keeps members through its bank, insurance, and childcare. Where the statute gives a union nothing to deliver, the union must deliver something itself.",
        },
      ],
    },
    {
      slug: "india-quiz-3",
      title: "Section 3 quiz · SEWA and the employer-less union",
      section: "Section 3 · SEWA — the union with no employer to strike against",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who founded SEWA, and from inside what organisation?",
            options: [
              "Anasuya Sarabhai, from inside the Congress party",
              "Ela Bhatt, a labour lawyer heading the women's wing of the Textile Labour Association in Ahmedabad",
              "A committee of the ILO",
              "The Gujarat Labour Department",
            ],
            correctIndex: 1,
            explanation:
              "Bhatt (1933–2022) kept meeting women who worked in and around the textile trade — head-loaders, cart-pullers, home stitchers — whom the mill union had no category for.",
            sourceLessonSlug: "india-sewa-1972",
          },
          {
            prompt: "What was the Labour Department's objection to registering SEWA in 1972?",
            options: [
              "SEWA had too few members",
              "A union needs an employer to struggle against — and SEWA's members had none",
              "Women could not legally form unions",
              "The Trade Unions Act had expired",
            ],
            correctIndex: 1,
            explanation:
              "The objection is this course's theme stated as bureaucracy. SEWA's answer: a union is defined by its purpose — organising workers for their own development — not by its adversary.",
            sourceLessonSlug: "india-sewa-1972",
          },
          {
            prompt: "What feature of the Trade Unions Act, 1926 made SEWA's registration legally possible?",
            options: [
              "A special exemption for women's organisations",
              "The Act requires seven members but nowhere requires that they share an employer",
              "A 1971 amendment covering the self-employed",
              "The Act does not apply in Gujarat",
            ],
            correctIndex: 1,
            explanation:
              "A colonial statute written for a world of mills contained, unnoticed for fifty years, the legal space for a union of the employer-less.",
            sourceLessonSlug: "india-sewa-1972",
          },
          {
            prompt: "How does this course treat SEWA's reported membership of 3.78 million across 20 states?",
            options: [
              "As an audited government figure",
              "As SEWA's own count — attributed, and still, even discounted, evidence of one of India's largest workers' organisations",
              "As an ILO estimate",
              "As deliberately falsified",
            ],
            correctIndex: 1,
            explanation:
              "Same discipline as the 90% and the 250 million: name the source. It is SEWA's count — and no political party owns SEWA, unlike every federation in lesson 4's table.",
            sourceLessonSlug: "india-sewa-1972",
          },
          {
            prompt: "Why does this course call the SEWA membership card 'the most underrated object' it teaches?",
            options: [
              "It doubles as a credit card",
              "It is often a member's first document naming her as a worker — converting an invisible person into a represented one when facing police or municipal harassment",
              "It is required by the Trade Unions Act",
              "It guarantees a minimum wage",
            ],
            correctIndex: 1,
            explanation:
              "Question 4 for informal workers is confiscation, eviction, harassment. An identity backed by an organisation that will answer for you is the counter-tool.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "For SEWA's home-based piece-rate workers, who replaces the employer as bargaining counterparty?",
            options: [
              "The ILO",
              "The middleman and trader chain, in piece-rate campaigns",
              "The police",
              "Nobody — they cannot bargain at all",
            ],
            correctIndex: 1,
            explanation:
              "Find the entity that actually controls the livelihood and bargain there. Piece-rate campaigns are the informal economy's wage claims.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "What is legally odd about the Street Vendors Act, 2014 as a piece of labour law?",
            options: [
              "It has no penalties",
              "It regulates municipalities rather than employers — labour law with the employer deleted",
              "It applies only to Gujarat",
              "It was written by SEWA",
            ],
            correctIndex: 1,
            explanation:
              "The vendor's adversary is the city that controls the street, so the statute disciplines town vending committees (with 40% vendor membership) — not any employer.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "Why did SEWA found its own cooperative bank in 1974?",
            options: [
              "To speculate in currency markets",
              "Because no commercial bank would lend to undocumented informal workers — so the union built the institution a formal job would have given access to",
              "Because the government required unions to run banks",
              "To pay strike benefits",
            ],
            correctIndex: 1,
            explanation:
              "Tool 3: build what the contract would have contained — credit, insurance (VimoSEWA), childcare, cooperatives. The union as substitute for the missing employment relationship.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "Which international instruments carry the definitional fight SEWA started in 1972?",
            options: [
              "The USMCA Rapid Response Mechanism",
              "The ILO Home Work Convention, 1996 (No. 177) and Recommendation 204 (2015) on formalising the informal economy",
              "The Geneva Conventions",
              "The Paris Agreement",
            ],
            correctIndex: 1,
            explanation:
              "Via HomeNet and WIEGO (co-founded by Ela Bhatt, 1997), 'the self-employed are workers' was argued and largely won at the ILO.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "What is the one classic union deliverable missing from SEWA's toolkit, and why?",
            options: [
              "Strikes — they are illegal for women",
              "A collective agreement — no counterparty exists that could bind itself to terms for its members as a class",
              "Membership dues",
              "Legal representation",
            ],
            correctIndex: 1,
            explanation:
              "SEWA wins rates, laws, seats and services — but no contract. No counterparty, no contract: the absence is structural, and it is the course's cleanest demonstration of what informality removes.",
            sourceLessonSlug: "india-sewa-lesson",
          },
          {
            prompt: "How is SEWA 'the Ghent effect at the other end of the income distribution'?",
            options: [
              "It administers Denmark's unemployment funds",
              "Like Nordic unions, it binds members through services — but its bank and insurance stand in for an absent formal system rather than topping up an existing one",
              "It was founded by Scandinavian unions",
              "It pays unemployment benefits from state funds",
            ],
            correctIndex: 1,
            explanation:
              "Same law — services build unions — operating where the statute gives the union nothing to deliver, so the union delivers it itself.",
            sourceLessonSlug: "india-sewa-lesson",
          },
          {
            prompt: "What does this course concede when it says 'membership is not coverage' about SEWA?",
            options: [
              "That SEWA's members are not real workers",
              "That 3.78 million is vast as organising but small against an informal workforce in the hundreds of millions — SEWA changes members' lives, not the aggregate condition",
              "That SEWA's membership is falling",
              "That coverage requires a political party",
            ],
            correctIndex: 1,
            explanation:
              "Refusing to romanticise is part of the method: the model is real, international — and still nowhere near the scale of the problem, fifty years in.",
            sourceLessonSlug: "india-sewa-lesson",
          },
          {
            prompt: "Whose logic does India's e-Shram registry of informal workers borrow, per this course?",
            options: [
              "The German works council's",
              "SEWA's — the state substituting itself as counterparty: registration, identity, welfare boards for workers with no employer",
              "The Wagner Act's",
              "China's ACFTU's",
            ],
            correctIndex: 1,
            explanation:
              "Registering and naming informal workers so the state can attach protections to them is the SEWA playbook (identity, welfare boards) scaled to national machinery — well or badly, Section 4 examines.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "SEWA organises women, by design. What honest observation does the course attach to that?",
            options: [
              "Men are legally barred from informal work",
              "Informal work is disproportionately women's work, and parallel organising of informal men has been thinner everywhere",
              "Women are a small minority of informal workers",
              "The design was imposed by the government",
            ],
            correctIndex: 1,
            explanation:
              "The gendered design is rooted in the gendered reality of informality — and the model's replication for informal men remains comparatively weak.",
            sourceLessonSlug: "india-sewa-lesson",
          },
          {
            prompt: "What one-line verdict on SEWA does this course ask you to carry forward?",
            options: [
              "SEWA failed because it never signed a contract",
              "Organising the employer-less is possible and SEWA shows the method — but bargaining in the anchor course's sense still requires the employer nine-tenths of Indian workers lack",
              "SEWA is a political party in waiting",
              "SEWA's model only works in Gujarat",
            ],
            correctIndex: 1,
            explanation:
              "Existence proof and structural limit, held together — the same both-hands honesty the Germany course applied to co-determination.",
            sourceLessonSlug: "india-sewa-lesson",
          },
        ],
      },
    },
  ],
};
