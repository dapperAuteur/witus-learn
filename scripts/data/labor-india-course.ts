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
    "Every tool in the anchor course, the election, the contract, the grievance procedure, the duty to bargain, assumes one thing so basic it is never said out loud: that a worker is an employee, and an employee has an employer. India is where that assumption breaks. About 90% of Indian workers are in informal employment (India Employment Report 2024, ILO and the Institute for Human Development, built on the government's own Periodic Labour Force Survey): no written contract, no social security, often no identifiable employer at all. This course teaches what that number means and where it comes from; the full legal machine India built on paper (a union with seven members, a constitution that guarantees association, and a Supreme Court that found no fundamental right to strike); union federations that each belong to a political party, a third politics-and-labor entanglement to set against Poland and China; SEWA, the Self-Employed Women's Association, which since 1972 has organized millions of women who have no employer to bargain with, the one institutional invention in this track built for exactly that; the 2019-2020 Labour Codes that folded 29 laws into four and then waited five years to come into force (taught dated, because the states are still writing their rules); the first legal recognition of gig and platform workers anywhere in this track; and the honest part, caste and labor, the sewer deaths a ministry reported to Parliament in the same breath as 'no manual scavenging,' and child labor's real progress and real limits. Cited to the ILO, the Periodic Labour Force Survey, the Codes' own text, parliamentary answers, and SEWA's own record. A country course in the Workers' Rights track, take \"The History of Unions: America and the World\" first.",
  lessons: [
    // ────────────── SECTION 1 · THE NUMBER THAT BREAKS THE MACHINE ──────────────
    {
      slug: "india-nine-in-ten",
      title: "1 · Nine in ten: the number that breaks the machine",
      section: "Section 1 · The number that breaks the machine",
      body: `Think back to the anchor course, **The History of Unions: America and the World**, and list the machinery it taught you: the union election. The collective agreement. The grievance procedure. The duty to bargain. The unfair-dismissal claim. Now notice the one assumption every single piece of that machinery rests on, so basic it is never said out loud:

**A worker is an employee. An employee has an employer. The employer is who you organize against, bargain with, and file against.**

This course is about the country where that assumption breaks, not at the edges, but for **roughly nine workers out of ten.**

**The number, named, dated, and defined, because with this statistic, that discipline is the whole game.** The **India Employment Report 2024**, published by the **International Labour Organization (ILO)** together with the Institute for Human Development, and built on data from India's own **Periodic Labour Force Survey (PLFS)**, the official household survey run by the National Statistics Office, reports two different figures, and you need both:

| Measure | Share of India's workers | What it counts |
| --- | --- | --- |
| Workers in the **informal sector** | **about 82%** | People whose *workplace* is an unregistered or unincorporated enterprise, the street stall, the household, the five-person workshop |
| Workers in **informal employment** | **about 90%** | People whose *job* carries no social-security protection and no employment benefits, wherever that job sits |

*(ILO & Institute for Human Development, 2024.)*

Why is the second number bigger than the first? Because **formal firms hire informally too.** A cleaner working inside a registered factory, supplied by a contractor, with no provident fund and no paper trail, holds a formal-*sector* job and an informal *employment relationship*. The 90% is the more honest measure of how work is actually experienced, and it is the one this course means when it says "informal."

**What "informal" means concretely.** Not "illegal," and not "unemployed." It means: **no written contract. No paid leave. No provident fund (India's retirement system) and no employer health insurance. No notice period, because there is nothing to give notice under.** Frequently, no fixed workplace, and no single person or firm you could point to as "the employer." The street vendor buys her vegetables at dawn and owes nobody a timesheet. The construction worker is picked up at a morning labor market by a contractor who was himself hired by a subcontractor. The home-based worker rolls incense sticks or stitches garments at piece rates for a middleman she may never meet twice. The domestic worker has an employer of a kind, but one invisible to nearly every labor statute India has ever written.

**One honest caveat, before you get attached to the number.** Informality statistics are genuinely contested. Different bodies draw the line differently, by enterprise registration, by social-security coverage, by written contract, and the headline percentage moves with the definition. That is exactly why this course names its source (ILO/PLFS), its year (2024), and its definition (no social security or employment benefits), and why you should refuse any bare "X% of Indians work informally" that arrives without all three. The lesson generalises: **a statistic without a definition is a vibe.**

Scale, for orientation: India has been the world's **most populous country** since 2023 (United Nations, 2023). You will sometimes read that it has "the world's largest workforce", this course does not assert that, because it depends on definitions and China's labor force is of comparable size. Most populous country is enough: nine-tenths informality here is not a rounding error in the world's labor story. It may be the main plot.

:::reveal The India Employment Report 2024 gives two numbers, about 82% and about 90%. What does each measure, and why is the second bigger? ||| About 82% is the share of workers in the informal SECTOR, unregistered/unincorporated enterprises. About 90% is the share in informal EMPLOYMENT, jobs with no social security or employment benefits, wherever they sit. The second is bigger because formal firms also hire informally: a contract cleaner inside a registered factory holds a formal-sector job and an informal employment relationship.

## Sources
- International Labour Organization & Institute for Human Development. (2024). *India Employment Report 2024: Youth employment, education and skills*. ILO. https://www.ilo.org/sites/default/files/2024-08/India%20Employment%20-%20web_8%20April.pdf
- Ministry of Statistics and Programme Implementation, National Statistics Office. (n.d.). *Periodic Labour Force Survey (PLFS)*. Government of India. https://mospi.gov.in/
- United Nations Department of Economic and Social Affairs. (2023). *India overtakes China as the world's most populous country* (Policy Brief No. 153). https://www.un.org/development/desa/dpad/publication/un-desa-policy-brief-no-153-india-overtakes-china-as-the-worlds-most-populous-country/`,
    },
    {
      slug: "india-law-on-paper",
      title: "2 · The law on paper: a complete machine most workers never touch",
      section: "Section 1 · The number that breaks the machine",
      body: `Here is the twist a first-time student never expects: India's problem is **not** an absence of labor law. India has one of the oldest and most elaborate bodies of labor law in the world. The problem is who the machine can *see*.

**The machine, piece by piece.**

**The Trade Unions Act, 1926.** Passed under British rule, a year *after* the anchor course's American story reached the Wagner Act's predecessors, and still, until the new Codes, the registration law for every Indian union. Its threshold was famously low: **any seven members** of a union could apply to register it (§ 4). A 2001 amendment raised the bar for unions of workers: registration now also requires **at least 10% of the workforce or 100 workers of the establishment or industry, whichever is less**, still subject to the minimum of seven (Trade Unions (Amendment) Act, 2001). Hold that number: *seven people can be a union.* It matters enormously in lesson 6, because the Act does not actually say those seven need a common employer.

**The Industrial Disputes Act, 1947.** Passed in the year of independence: conciliation officers, labor tribunals, rules for lay-off, retrenchment and closure, including, in its later form, a requirement that larger factories get **government permission before mass lay-offs**. (The threshold and its 2020 tripling are a Section 4 story.)

**The Factories Act, 1948; the Minimum Wages Act, 1948.** Safety, hours and welfare for factories; minimum wages, but the Minimum Wages Act covered only **"scheduled employments,"** occupations a government had listed, so a worker in an unlisted occupation had no statutory wage floor at all. Remember that gap: the 2019 Code on Wages exists largely to close it (Section 4).

**The Constitution of India (1950), Article 19(1)(c)** guarantees all citizens the right **"to form associations or unions"**, a fundamental right, sitting next to speech and assembly. But note what is *not* there: the Supreme Court held in **T.K. Rangarajan v. Government of Tamil Nadu (2003)**, the case of roughly 170,000 Tamil Nadu government employees dismissed en masse for striking, that government employees have **"no fundamental, legal, moral or equitable right"** to strike. Forming the union is a constitutional right; using its sharpest tool is not.

**And the international floor?** India was a **founding member of the ILO in 1919** and has ratified six of the eight core conventions, including both child-labor conventions, ratified in 2017. But it has **never ratified Convention No. 87** (freedom of association) **or Convention No. 98** (collective bargaining), the same two conventions the anchor course called the floor. The government's own stated reason is worth reading precisely because it is candid: ratification would grant rights, to strike, to criticize government policy openly, to join foreign federations, that India's **statutory rules for government servants prohibit** (Press Information Bureau, 2017). File that alongside the anchor's ILO lesson: the country with the world's most famous informal workforce is out of step with the formal floor *because of its most formal workers*.

**Now the catch, and it is the whole course.** Reread the machine above and notice what every part assumes: an **establishment**. An **industry**. An **employer** to be conciliated with, to seek permission, to pay the scheduled wage. The machine is real, elaborate, and pointed at the formal fraction of the economy. For the roughly nine-in-ten in informal employment (lesson 1), there is no establishment to register at, no employer to dispute with, no schedule their occupation appears on. **India did not forget to build labor law. It built a cathedral, on the tenth of the ground where the law could see people standing.**

:::reveal India guarantees union-forming as a fundamental constitutional right, yet has never ratified ILO Conventions 87 and 98. What is the government's own stated reason? ||| Its statutory rules for government servants. Ratifying would mean granting government employees rights those rules prohibit, striking, openly criticizing government policy, freely joining foreign organizations, so India stays a non-ratifier of the freedom-of-association floor (its stated position as of 2017), even while Article 19(1)(c) protects forming unions.

## Sources
- The Trade Unions Act, 1926 (India), § 4, as amended by the Trade Unions (Amendment) Act, 2001. India Code. https://www.indiacode.nic.in/bitstream/123456789/20965/1/the_trade_unions_act,_1926.pdf
- The Industrial Disputes Act, 1947 (India). India Code. https://www.indiacode.nic.in/
- Press Information Bureau. (2017, July 24). *ILO fundamental conventions* [Press release]. Government of India, Ministry of Labour & Employment. https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=168889
- T.K. Rangarajan v. Government of Tamil Nadu & Others, Supreme Court of India (2003, August 6). https://indiankanoon.org/doc/88909580/`,
      recallContent: [
        {
          prompt: "India's informality figure, with year, source, and definition.",
          answer:
            "About 90% of India's workers are in INFORMAL EMPLOYMENT, jobs carrying no social-security protection or employment benefits, per the India Employment Report 2024 (ILO & Institute for Human Development), built on the government's Periodic Labour Force Survey. About 82% work in the informal SECTOR (unregistered enterprises).",
        },
        {
          prompt: "Why must any informality statistic carry its definition?",
          answer:
            "Because informality is measured differently by different bodies (enterprise registration vs social-security coverage vs written contract), and the headline percentage swings with the definition. A statistic without a definition, source, and year is not usable.",
        },
      ],
    },
    {
      slug: "india-four-questions",
      title: "3 · The four questions, asked of India",
      section: "Section 1 · The number that breaks the machine",
      body: `If you have taken the anchor course, you own the four questions. If you haven't: take it after this, the questions come from there, and this course does not re-derive them.

1. **Who is allowed to organize?**
2. **Who is excluded?**
3. **Who bargains with whom, and at what level?**
4. **What happens to you if you try?**

Here are India's answers in advance. Everything after this lesson is the detail, and watch what informality does to each question as it passes through.

**Q1, Who is allowed to organize?** On paper, nearly everyone: Article 19(1)(c) makes forming associations a fundamental right, and seven members can register a union (lesson 2). India is, on this axis, genuinely open, no single state-run federation as in China, no licensing of who may exist as in the Gulf. But the paper right is thinner than it looks: no ratification of ILO Conventions 87/98, and no fundamental right to strike (Rangarajan, 2003).

**Q2, Who is excluded?** Now compare the exclusions you have already met in this track. The American Wagner Act **wrote its exclusion into the statute**: agricultural and domestic workers, named and carved out. Germany's Works Constitution Act **names its doors too**: executives, church-run institutions. India's great exclusion is different in kind, **it is not written anywhere, because it does not need to be.** The law simply speaks of establishments, industries, employers, and the roughly 90% in informal employment stand outside the vocabulary itself. Nobody excluded the street vendor from the Industrial Disputes Act; there was never an "industrial dispute" she could be party to. Call this the difference between a **statutory door** and a **structural one**: a statutory exclusion can be repealed in an afternoon; a structural exclusion has nothing to repeal.

**Q3, Who bargains with whom, and at what level?** Where bargaining exists, the formal tenth, it is mostly **enterprise-level**, like the US and unlike Germany's sectors or the Nordic peak agreements, with a layer of tripartite politics on top (unions, employers, government, and every major federation tied to a party, which is Section 2). For the informal nine-tenths, the question mutates into something the anchor course never had to ask: **when there is no employer, who is across the table?** The answers that exist, and SEWA built most of them (Section 3), are: **the state** (welfare boards, registration schemes, social-security funds) and **the city** (the municipal authority that controls the vendor's street corner). Bargaining with government instead of a boss is not a metaphor here; it is the actual mechanism.

**Q4, What happens to you if you try?** Three different answers in one country. A **formal private-sector worker** faces a rulebook: strike notice requirements (14 days under the new Industrial Relations Code, dated detail in Section 4) and the tribunal machinery. A **government employee** faces Rangarajan: mass dismissal survived judicial review in 2003. And an **informal worker**? She cannot be fired, there is no job to be fired *from*, so retaliation arrives as **eviction from the street corner, confiscation of the cart, the contractor who simply stops calling, the police**. One of this course's quiet lessons: where employment is informal, *punishment is informal too*, which makes it both milder-looking and harder to litigate than anything in the anchor course.

Keep the four questions in hand. Sections 2 through 5 are India's long answers; Section 6 asks you to give the short ones back.

:::reveal The anchor course showed exclusion written into statutes (the Wagner Act's agricultural and domestic carve-out). Why does India's biggest exclusion have no section number to point to? ||| Because it is structural, not statutory. India's labor machine speaks of establishments, industries and employers, and roughly 90% of workers, being informally employed, fall outside that vocabulary without anyone writing them out. A statutory exclusion can be repealed; a structural one has nothing to repeal, which is why the fix required inventing new institutions rather than amending old ones.

## Sources
- International Labour Organization & Institute for Human Development. (2024). *India Employment Report 2024: Youth employment, education and skills*. ILO. https://www.ilo.org/sites/default/files/2024-08/India%20Employment%20-%20web_8%20April.pdf
- T.K. Rangarajan v. Government of Tamil Nadu & Others, Supreme Court of India (2003, August 6). https://indiankanoon.org/doc/88909580/
- Constitution of India, art. 19(1)(c). https://www.indiacode.nic.in/`,
      recallContent: [
        {
          prompt: "How many members does it take to apply to register a union under India's Trade Unions Act, 1926?",
          answer:
            "Seven (§ 4). Since the 2001 amendment, a union of workers also needs at least 10% of the establishment's workforce or 100 workers, whichever is less, still subject to the minimum of seven.",
        },
        {
          prompt: "What did T.K. Rangarajan v. Government of Tamil Nadu (2003) hold?",
          answer:
            "That government employees have no fundamental, legal, moral or equitable right to strike. It arose from the mass dismissal of roughly 170,000 striking Tamil Nadu government employees. Forming a union is a fundamental right under Article 19(1)(c); striking is not.",
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
              "About 90%, with about 82% in the informal sector. The report is built on India's own Periodic Labour Force Survey.",
            sourceLessonSlug: "india-nine-in-ten",
          },
          {
            prompt: "What is the difference between the 'informal sector' and 'informal employment'?",
            options: [
              "They are exact synonyms: both simply mean any job paid in cash and kept off the books",
              "Informal sector counts unregistered workplaces; informal employment counts unprotected jobs",
              "Informal sector means outright illegal work; informal employment means ordinary part-time work",
              "Informal employment counts only the self-employed; the informal sector counts all wage earners",
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
              "Informal sector and informal employment, on both of the two counts",
              "Formal sector and also formal employment, on both of the counts",
              "Formal-sector job, but informal employment relationship",
              "She falls outside both measures and is therefore not counted at all",
            ],
            correctIndex: 2,
            explanation:
              "Her workplace is registered (formal sector), but her job carries no protections (informal employment). This is exactly why the 90% exceeds the 82%.",
            sourceLessonSlug: "india-nine-in-ten",
          },
          {
            prompt: "Why does this course insist any informality statistic carry a source, a year, AND a definition?",
            options: [
              "Because India's labor statistics are officially secret and cannot be quoted",
              "Because bodies define informality differently, so the headline percentage swings",
              "Because the informality figure has stayed frozen and never once changed since 1947",
              "Because the ILO forbids quoting any figure without its own written permission",
            ],
            correctIndex: 1,
            explanation:
              "Enterprise registration, social-security coverage, written contract, different lines produce different numbers. A statistic without a definition is a vibe.",
            sourceLessonSlug: "india-nine-in-ten",
          },
          {
            prompt: "What does 'informal employment' concretely mean for the worker, in this course's definition?",
            options: [
              "Working illegally, in breach of the law, and therefore liable to prosecution",
              "Being unemployed, that is, having no work at all and actively looking for a job",
              "No written contract, no social security, no paid leave, no notice period",
              "Working from home rather than at the employer's own registered premises",
            ],
            correctIndex: 2,
            explanation:
              "Not illegal and not unemployed, working, but outside every protection the formal machine attaches to a job.",
            sourceLessonSlug: "india-nine-in-ten",
          },
          {
            prompt: "What underlying government survey does the India Employment Report 2024 build on?",
            options: [
              "The decennial Census of India, conducted by the Registrar General's office",
              "The Periodic Labour Force Survey (PLFS), run by the National Statistics Office",
              "The e-Shram portal, the national registry of unorganised informal workers",
              "The annual Economic Survey tabled in Parliament before the Union Budget",
            ],
            correctIndex: 1,
            explanation:
              "The PLFS is India's official household labor-force survey, the domestic data the ILO/IHD report is built on.",
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
              "It applied only to government employees, leaving the entire private sector uncovered",
              "It covered only 'scheduled employments', so unlisted occupations had no wage floor",
              "It set a statutory minimum wage only inside registered factories and nowhere else",
              "It lapsed entirely in 1960 and was never renewed by any subsequent Parliament",
            ],
            correctIndex: 1,
            explanation:
              "No listing, no floor. Closing this gap, a universal minimum wage, is one of the main things the 2019 Code on Wages does (Section 4).",
            sourceLessonSlug: "india-law-on-paper",
          },
          {
            prompt: "What did the Supreme Court hold in T.K. Rangarajan v. Government of Tamil Nadu (2003)?",
            options: [
              "That every strike in India is constitutionally protected as a fundamental right",
              "That government employees have no fundamental, legal, moral or equitable right to strike",
              "That government employees are barred from forming trade unions of any kind at all",
              "That the entire Trade Unions Act, 1926 is unconstitutional and void for vagueness",
            ],
            correctIndex: 1,
            explanation:
              "The case of roughly 170,000 dismissed Tamil Nadu government employees. Forming a union is a fundamental right (Art. 19(1)(c)); striking is not.",
            sourceLessonSlug: "india-law-on-paper",
          },
          {
            prompt: "Which two ILO core conventions has India never ratified, and what is the government's stated reason?",
            options: [
              "The two child-labor conventions, citing deep rural and family-farm poverty everywhere",
              "Conventions 87 and 98, citing statutory restrictions binding on government servants",
              "The two forced-labor conventions, citing the persistence of prison and bonded labor",
              "None of them, since India has in fact ratified all eight of the core ILO conventions",
            ],
            correctIndex: 1,
            explanation:
              "India has ratified six of eight core conventions (both child-labor ones in 2017) but not 87/98, because ratifying would grant government servants rights their service rules prohibit.",
            sourceLessonSlug: "india-law-on-paper",
          },
          {
            prompt: "What is the 'catch' in India's elaborate labour-law machine?",
            options: [
              "The labor laws were drafted but in the end were never actually passed by Parliament at all",
              "Every part assumes an establishment, an industry, an employer, only the formal fraction",
              "The labor laws apply only inside Delhi and a small handful of other union territories",
              "The machine already reaches every single Indian worker equally, formal and informal alike",
            ],
            correctIndex: 1,
            explanation:
              "India built a cathedral of labor law, on the tenth of the ground where the law could see people standing.",
            sourceLessonSlug: "india-law-on-paper",
          },
          {
            prompt:
              "How does India's biggest exclusion differ from the Wagner Act's exclusion of agricultural and domestic workers?",
            options: [
              "It is far harsher than the Wagner Act, and yet it is written in exactly the same way",
              "It is structural, not statutory: the law's vocabulary never reaches informal workers",
              "It affects only women workers, whom the statutes explicitly single out and exclude by name",
              "It was written by the British and, being colonial, can no longer be amended at all today",
            ],
            correctIndex: 1,
            explanation:
              "The Wagner Act names its excluded workers; India's informal nine-tenths were never in the statute's vocabulary at all. A statutory door can be reopened; a structural one has no hinge.",
            sourceLessonSlug: "india-four-questions",
          },
          {
            prompt: "For India's informal workers, who is 'across the table' when they organise?",
            options: [
              "Their employer's own human-resources department, exactly as in the formal sector",
              "Usually the state (welfare boards, schemes) or the city, since there is no employer",
              "The International Labour Organization, which bargains on the informal worker's behalf",
              "Nobody at all, because informal workers are legally forbidden from organizing at all",
            ],
            correctIndex: 1,
            explanation:
              "When no employer exists, bargaining is redirected at government, welfare boards, social-security funds, the municipality that controls the street corner. Section 3 shows who invented that playbook.",
            sourceLessonSlug: "india-four-questions",
          },
          {
            prompt: "What does retaliation ('Question 4') look like for an informal worker in India?",
            options: [
              "Formal dismissal with proper written notice and statutory severance pay",
              "A hearing before an industrial tribunal, with reinstatement as the usual remedy",
              "Informal punishment: eviction from the vending spot, confiscation of the cart",
              "Loss of trade-union membership and expulsion from the federation's rolls",
            ],
            correctIndex: 2,
            explanation:
              "You cannot be fired from a job that was never formalised. Informal employment produces informal punishment, milder-looking, and harder to litigate.",
            sourceLessonSlug: "india-four-questions",
          },
          {
            prompt: "Why does this course refuse to call India's workforce 'the world's largest'?",
            options: [
              "Because India's total workforce is in fact tiny by any international comparison",
              "Because the claim depends on definitions and China's labor force is comparable in size",
              "Because the United Nations has expressly forbidden making that particular comparison",
              "Because no workforce or labor-force statistics of any kind exist for India at all",
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
      section: "Section 2 · The unions that exist, and the parties that own them",
      body: `Before this course reaches the workers the law cannot see, meet the unions the law *can* see, because they are strange in their own way, and the strangeness is a third data point in a pattern this track has been building.

**The landscape.** India's union movement is organized into **central trade union organizations (CTUOs)**, national federations that pull together thousands of registered enterprise- and industry-level unions. The big ones, with founding dates and the detail that matters:

| Federation | Founded | Political family |
| --- | --- | --- |
| **AITUC**, All India Trade Union Congress | 1920 | The Communist Party of India (CPI) |
| **INTUC**, Indian National Trade Union Congress | 1947 | The Indian National Congress |
| **HMS**, Hind Mazdoor Sabha | 1948 | The socialist stream of the independence movement |
| **BMS**, Bharatiya Mazdoor Sangh | 1955 | The RSS (Rashtriya Swayamsevak Sangh), the ideological parent of the governing BJP |
| **CITU**, Centre of Indian Trade Unions | 1970 | The Communist Party of India (Marxist), after the communist split |

Read the right-hand column again. **Every major federation is tied to a political party or political family.** AITUC predates independence, Indian unionism is older than the Indian state, and INTUC was founded in 1947, the year of independence, precisely so that the Congress party would have a labor wing that communists did not control. When India's communists split in 1964, the union movement split with them (CITU, 1970). And the BMS was built by the RSS as an explicitly non-Marxist, "nationalist" labor organization, today aligned with the family of the governing party, which puts it in the extraordinary position of being a union federation whose political parent runs the government it must bargain against.

**Now place this on the track's map, because you have seen politics-and-unions entangled twice before, and neither time looked like this.** In **Poland**, the union came first and *created* a political force: Solidarność brought down the party-state. In **China**, the party came first and *owns* the union: the ACFTU is an organ of the party-state, and no second federation may exist. **India is a third arrangement: many parties, each with its own union.** The union movement is free, plural, competitive, and *divided along party lines*, so that workers in the same factory may belong to rival federations whose first loyalty runs to rival parties. Competition guarantees independence from the state; it also guarantees fragmentation.

**How big are they? Honest answer: nobody currently knows.** Federations report membership claims in the tens of millions each, and the claims are self-declared. The Ministry of Labour runs periodic **membership verification** exercises, but the last one *completed*, whose results were formally used (for things like allocating seats at the ILO and on tripartite bodies), dates to **2002**, when the BMS was verified as the largest federation at about **6.2 million members**, with INTUC (~3.9m), AITUC (~3.3m) and CITU (~2.7m) behind it. A verification begun around 2011 was never brought to a clean, accepted conclusion. So this course does what it always does with contested numbers: gives you the last verified figure with its date, tells you the claims are claims, and refuses to average them. **A country of nine-tenths informal workers does not even have a current official count of its formal union members**, sit with that for a second; it is not an accident, it is a symptom.

*(One more federation belongs in this picture, and it fits no row of the table above: a union of self-employed women, tied to no party, that grew from a 1972 registration fight into millions of members. It gets its own section, Section 3.)*

:::reveal Poland, China, India, three entanglements of unions and political power. State each in one line. ||| Poland: the union came first and destroyed the party-state (Solidarność). China: the party came first and owns the single permitted federation (ACFTU). India: many parties, each with its own union federation, free and plural, but fragmented along party lines, with rival federations competing inside the same workforce.

## Sources
- Ministry of Labour & Employment, Government of India. (n.d.). *Verification of membership of trade unions* [2002 general verification results as reported]. https://labour.gov.in/
- Bharatiya Mazdoor Sangh. (n.d.). *History of trade union movement and BMS*. https://www.bms.org.in/history-of-trade-union-movement-and-bms/
- Centre of Indian Trade Unions. (n.d.). *About CITU*. https://www.citucentre.org/
- International Labour Organization & Institute for Human Development. (2024). *India Employment Report 2024*. ILO. https://www.ilo.org/sites/default/files/2024-08/India%20Employment%20-%20web_8%20April.pdf`,
      recallContent: [
        {
          prompt: "Statutory exclusion versus structural exclusion, define both, with one example each.",
          answer:
            "Statutory: written into the law by name, the Wagner Act carving out agricultural and domestic workers. Structural: the law's vocabulary (employer, establishment, industry) simply never reaches you, India's ~90% informal workforce. The first can be repealed; the second has nothing to repeal.",
        },
        {
          prompt: "For an informal worker in India, what does Question 4 ('what happens to you if you try?') look like?",
          answer:
            "Not dismissal, there is no job to be dismissed from. Retaliation is informal too: eviction from the vending spot, confiscation of the cart, the contractor who stops calling, the police. Informal punishment is harder to litigate than a firing.",
        },
      ],
    },
    {
      slug: "india-general-strikes",
      title: "5 · The 250-million-worker strike (and what that number is)",
      section: "Section 2 · The unions that exist, and the parties that own them",
      body: `On **9 July 2025**, a forum of **ten central trade union federations**, INTUC, AITUC, HMS, CITU, and six others, along with **SEWA** (Section 3), called a one-day nationwide general strike, a *Bharat bandh*. Banking, insurance, postal services, coal mining and public transport were disrupted across much of the country. The organisers' first demand: **repeal of the four Labour Codes** (Section 4). Their headline claim: **over 250 million participants** (ITUC-Asia Pacific, 2025; Business Standard, 2025).

Stop at that number and do to it what this course did to the 90% in lesson 1.

**What "250 million" is:** the organisers' own estimate, announced around the strike. **What it is not:** a turnstile count. Nobody counts a one-day strike across a country of 1.4 billion; there is no register of strikers, no independent audit, and much of the claimed participation is in sectors, agricultural labor, construction, street vending, where "on strike" and "not working today" cannot be told apart from outside. Similar claims accompanied earlier general strikes (2016, 2019, 2020, 2022), each billed at 150-250 million. **This course neither repeats the number as fact nor dismisses it as fiction: it attributes it.** "The unions claimed over 250 million" is a true sentence; "250 million struck" is an unverifiable one. That is not pedantry, it is the difference between reporting and amplifying, and you now know to apply it to every "largest strike in history" headline you will ever read.

**Even discounted heavily, though, something real is happening, and it is worth seeing what.** These strikes reliably shut down banks, mines, ports and state transport across whole regions; even skeptical coverage concedes participation in the tens of millions. That would make them among the largest coordinated work stoppages anywhere on earth. So hold both facts at once: Indian unions represent a *small verified fraction* of a workforce that is 90% informal, and they can produce, at intervals, the biggest strikes in the world.

**How can both be true? Because the Indian general strike is a different instrument from the strikes in the anchor course.** Homestead, Pullman, the Flint sit-down, those were strikes *against an employer*, aimed at a contract. The Indian *bharat bandh* is a strike **against a government, aimed at policy**: labor codes, privatisation, minimum-wage demands, social-security coverage. It is bargaining conducted at the only table where India's fragmented, party-tied federations all sit on the same side, and, crucially, it is the one form of industrial action an **informal worker can join**, because you need no employer to stay home, shut your stall, or march. The paradox of lesson 4 resolves: federations too divided to bargain jointly with any employer, representing a workforce mostly outside employment, converge once every year or two on the single act that requires neither unity of contract nor an employer at all.

**Note the irony in the target.** The unions' central demand in 2025 was repeal of the Labour Codes, laws whose stated purpose includes *extending* rights (a universal minimum wage, social security for gig workers) to the informal majority. Why would unions strike against that? Section 4 lays out what the Codes actually say, what the federations object to, and why the honest answer is "both sides have a case", dated, as always.

:::reveal "Over 250 million workers joined the 9 July 2025 general strike." What is the epistemically careful version of that sentence, and why? ||| "The organising unions claimed over 250 million participants." The figure is the organisers' own estimate, there is no independent count of a one-day strike across a country of 1.4 billion, and in informal sectors striking is indistinguishable from not working that day. Attribute the number; don't assert or dismiss it.

## Sources
- ITUC-Asia Pacific. (2025, July). *Bharat Bandh: India's workers rise in unprecedented unity against anti-labour policies*. https://www.ituc-ap.org/news-and-updates/bharat-bandh-indias-workers-rise-in-unprecedented-unity-against-anti-labour-policies
- Business Standard. (2025, July 8). *Bharat Bandh on July 9: Over 250 million workers to join nationwide strike*. https://www.business-standard.com/india-news/bharat-bandh-july-9-250-million-workers-strike-public-sector-privatisation-125070800273_1.html
- British Safety Council India. (2025, July). *Bharat Bandh sees over 250 million workers join nationwide strike against 'anti-worker' policies*. https://www.britsafe.in/safety-management-news/2025/bharat-bandh-sees-over-250-million-workers-join-nationwide-strike-against-anti-worker-policies`,
      recallContent: [
        {
          prompt: "Name the five major Indian union federations, their founding years, and their political families.",
          answer:
            "AITUC (1920, Communist Party of India), INTUC (1947, Indian National Congress), HMS (1948, the socialist stream), BMS (1955, the RSS, the BJP's ideological parent), CITU (1970, CPI(M)). Every major federation has a party.",
        },
        {
          prompt: "What is the last completed government verification of union membership, and what did it find?",
          answer:
            "The 2002 verification: BMS largest at about 6.2 million, then INTUC (~3.9m), AITUC (~3.3m), CITU (~2.7m). Later claims are self-declared and a subsequent verification was never cleanly completed, so no current official count exists.",
        },
      ],
    },
    {
      slug: "india-quiz-2",
      title: "Section 2 quiz · Federations, parties, and the general strike",
      section: "Section 2 · The unions that exist, and the parties that own them",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a CTUO in the Indian labour landscape?",
            options: [
              "A statutory government wage board that fixes minimum wages sector by sector",
              "A central trade union organization, a national federation of registered unions",
              "A type of collective agreement signed at national level across an industry",
              "A specialized labor court that adjudicates industrial disputes and lay-offs",
            ],
            correctIndex: 1,
            explanation:
              "The CTUOs (AITUC, INTUC, BMS, CITU, HMS and others) are the national federations; each major one is tied to a political party or family.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "Which federation is the oldest, and what does its 1920 founding date tell you?",
            options: [
              "INTUC, meaning Indian trade unionism only began at independence in 1947",
              "AITUC, meaning Indian unionism is older than the Indian state itself",
              "BMS, meaning organized Indian trade unionism began only with the RSS",
              "CITU, meaning Indian unionism began with the 1964 communist party split",
            ],
            correctIndex: 1,
            explanation:
              "AITUC was founded in 1920, twenty-seven years before independence. The Indian union movement predates the Indian state.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "Why was INTUC founded in 1947?",
            options: [
              "To merge every existing Indian union into one single national federation",
              "So the Congress party would have a labor wing not controlled by communists",
              "To represent India's central-government employees and no other workers",
              "As a formal precondition of India's admission to the ILO in that year",
            ],
            correctIndex: 1,
            explanation:
              "INTUC gave the Congress its own union federation in the year of independence, party-tied unionism was built into the new state from day one.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "What is politically extraordinary about the BMS's position today?",
            options: [
              "It has been formally outlawed and deregistered by every central government since 1955",
              "Its ideological parent, the RSS, also fathered the governing party it must bargain against",
              "It has no members at all and exists only on paper as a registered shell federation",
              "It is run directly by the International Labour Organization from Geneva, not by Indians",
            ],
            correctIndex: 1,
            explanation:
              "The BMS (founded 1955) belongs to the RSS family, as does the governing BJP, a labor wing and a government grown from the same root.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "What happened to the union movement when India's Communist Party split in 1964?",
            options: [
              "Nothing at all happened; the union movement stayed completely united through it",
              "The union movement split with the party: CITU was founded in 1970 alongside AITUC",
              "Every communist-aligned union in the country was dissolved and formally banned",
              "The BMS quietly absorbed both wings of the divided communist union movement",
            ],
            correctIndex: 1,
            explanation:
              "Party splits become union splits when every federation has a party, CITU (CPI(M)) split off from the AITUC (CPI) orbit.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "Poland, China, India, how does this course distinguish their three union-politics entanglements?",
            options: [
              "All three are essentially identical: in each a single ruling party owns the one lawful union",
              "Poland: the union destroyed the party-state; China: the party owns the union; India: rival unions",
              "Poland: the party owns the union; China: the union owns the party; India: no unions exist at all",
              "All three simply run one single state-controlled federation and permit no rival unions at all",
            ],
            correctIndex: 1,
            explanation:
              "Three different orderings of union and party. India's version is free and plural, and fragmented along party lines.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "What is the trade-off of India's many-parties-many-unions arrangement?",
            options: [
              "Independence from the state, but at the price of fragmentation into rival party-tied unions",
              "Unity across the movement, but bought at the price of total state control of labor",
              "Very high union membership, but bought at the price of the unions' outright illegality",
              "There is genuinely no trade-off at all; the arrangement carries no cost whatsoever",
            ],
            correctIndex: 0,
            explanation:
              "Competition guarantees no single party-state can own labor; it also means workers in one factory may belong to federations loyal to rival parties.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "When was the last completed, formally used government verification of union membership, and who was largest?",
            options: [
              "2019, when INTUC was verified as the single largest federation",
              "2002, when the BMS was verified largest at about 6.2 million members",
              "2011, when CITU was verified as the single largest federation",
              "There has in fact never been any completed government verification",
            ],
            correctIndex: 1,
            explanation:
              "The 2002 verification (BMS ~6.2m, INTUC ~3.9m, AITUC ~3.3m, CITU ~2.7m) is the last completed one; later claims are self-declared and a 2011-era exercise was never cleanly concluded.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "Why does this course refuse to state current membership figures for the federations?",
            options: [
              "Because union membership figures are a formally classified state secret in India",
              "Because current claims are self-declared and no completed verification backs them",
              "Because the actual membership of every Indian federation is in fact zero today",
              "Because the ILO formally forbids any member state from publishing such figures",
            ],
            correctIndex: 1,
            explanation:
              "Same discipline as the informality statistic: a number needs a source and a date, and 'the union says so' is an attribution, not a verification.",
            sourceLessonSlug: "india-federations-and-parties",
          },
          {
            prompt: "What was the organisers' first demand in the 9 July 2025 general strike?",
            options: [
              "A statutory four-day working week",
              "Repeal of all four of the Labour Codes",
              "Nationalisation of all of industry",
              "India's immediate exit from the ILO",
            ],
            correctIndex: 1,
            explanation:
              "The forum of ten federations demanded repeal of the Codes, the laws Section 4 examines. Ten rival federations converging on one demand is itself the story.",
            sourceLessonSlug: "india-general-strikes",
          },
          {
            prompt: "What exactly is the '250 million' figure attached to the 9 July 2025 strike?",
            options: [
              "An official government census that physically counted every one of the strikers",
              "The organizing unions' own claimed figure, attributed by this course, not asserted",
              "An independent, ILO-audited head count of the strikers, verified afterward",
              "The total registered trade-union membership across the whole of India today",
            ],
            correctIndex: 1,
            explanation:
              "No independent count of a one-day strike across 1.4 billion people exists. 'The unions claimed over 250 million' is true; '250 million struck' is unverifiable.",
            sourceLessonSlug: "india-general-strikes",
          },
          {
            prompt: "Why can't strike participation be verified in India's informal sectors?",
            options: [
              "Because strikes are entirely illegal across India's informal sectors and go unrecorded",
              "Because from outside, 'on strike' and 'not working today' look identical for a street vendor",
              "Because informal workers, being self-employed, simply never stop working at all ever",
              "Because the central government deliberately hides all of the strike-participation data",
            ],
            correctIndex: 1,
            explanation:
              "No employer, no shift roster, no picket line to cross, participation in the informal economy is unobservable, which is exactly why claims must be attributed.",
            sourceLessonSlug: "india-general-strikes",
          },
          {
            prompt: "How does the Indian bharat bandh differ from the anchor course's strikes in its target?",
            options: [
              "It does not differ from the anchor course's strikes in any meaningful way at all",
              "It is aimed at the government and its policies, not at any employer or a contract",
              "It is aimed squarely at large foreign-owned multinational companies operating in India",
              "It is aimed at the labor courts and industrial tribunals rather than at any employer",
            ],
            correctIndex: 1,
            explanation:
              "Homestead and Pullman ran against employers. The general strike is bargaining with the state, the one table where all federations sit on the same side.",
            sourceLessonSlug: "india-general-strikes",
          },
          {
            prompt: "Why is the general strike the one industrial action open to informal workers?",
            options: [
              "Because the law specifically exempts all informal workers from the 14-day strike notice",
              "Because it needs no employer: staying home or shutting a stall needs no employment tie",
              "Because the organizing unions directly pay the informal workers a daily wage to join in",
              "Because a general strike always falls on an existing public holiday, so no work is lost",
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
              "That the unions simply misread the Codes and struck against a law that helps them",
              "That both sides have a case; Section 4 lays out the Codes' text and the objections",
              "That the Codes secretly abolish trade unions altogether behind their welfare language",
              "That the strike was in fact quietly called in open support of the four Labour Codes",
            ],
            correctIndex: 1,
            explanation:
              "The Codes give with one hand (coverage) and take with the other (thresholds, notice rules), the honest treatment is the statute text plus both arguments, not a verdict by headline.",
            sourceLessonSlug: "india-general-strikes",
          },
        ],
      },
    },

    // ────────────── SECTION 3 · SEWA ──────────────
    {
      slug: "india-sewa-1972",
      title: "6 · Ahmedabad, 1972: a union with no employer to name",
      section: "Section 3 · SEWA, the union with no employer to strike against",
      body: `Here is the lesson the whole track has been waiting for, the one institutional invention built for exactly the place where "worker = employee" breaks.

**The setting.** Ahmedabad, in the state of Gujarat: one of the historic centers of Indian textile manufacturing, and home to the **Textile Labour Association (TLA)**, the mill-workers' union that grew out of the 1918 Ahmedabad mill strike in which Mohandas Gandhi was an adviser, and whose first president was Anasuya Sarabhai. A completely conventional union: mills, employers, members, disputes.

**The person.** **Ela Bhatt (1933-2022)**, a young labor lawyer on the TLA's staff, who came to head its women's wing. Doing that job, she kept meeting women the union had no category for: head-loaders carrying cloth between wholesale markets for per-trip payments; cart-pullers; used-garment dealers; home-based stitchers paid by the piece through middlemen. They worked in and around the textile trade the TLA existed to organize, and not one of them was anyone's employee. No mill on their pay records, no pay records at all.

**The move.** In 1972 Bhatt and these workers founded the **Self-Employed Women's Association, SEWA**, and applied to register it as a **trade union** under the Trade Unions Act, 1926. The Labour Department's objection was the entire subject of this course stated as bureaucracy: *a union, surely, requires an employer to struggle against, against whom would this union be directed?* SEWA's answer, which its members have repeated for fifty years: **a union is not defined by its adversary but by its purpose, organizing workers, as workers, for their own development.** The registration went through: SEWA records its registration as a trade union on **12 April 1972** (SEWA, n.d.). Remember lesson 2: the 1926 Act asks for seven members; **it nowhere requires that they share an employer.** A colonial-era statute written for a world of mills turned out to contain, unnoticed for half a century, the legal space for a union of the employer-less.

**What it became.** SEWA today reports **3.78 million members across 20 states** (SEWA, n.d.), street vendors, home-based workers, waste pickers, agricultural labourers, domestic workers, construction workers. Treat that figure with the discipline this course has drilled: it is **SEWA's own count**, not an audited one. But even discounted, hold it against lesson 4's landscape, the last *verified* membership of India's largest conventional federation was about 6.2 million (2002), and every conventional federation's verified base is dwarfed by its claims. By any honest reading, **a union of women who have no employers is one of the largest workers' organizations in India**, and, unlike every federation in lesson 4's table, **it belongs to no political party.**

**Why this matters beyond India.** Every model in this track so far, Wagner elections, German works councils, Nordic Ghent funds, even Solidarność, organises people *through their employment*. SEWA is the track's one working answer to the question the other eleven courses never have to ask: *how do you organize workers when there is no employer in the picture at all?* The next lesson takes the machine apart.

:::reveal The Labour Department's 1972 objection to registering SEWA states this course's central theme as bureaucracy. What was the objection, and what was SEWA's answer? ||| Objection: a union needs an employer to struggle against, against whom would a union of the self-employed be directed? Answer: a union is defined by its purpose, not its adversary, organizing workers, as workers, for their own development. The Trade Unions Act, 1926 requires seven members, not a shared employer, and SEWA registered on 12 April 1972.

## Sources
- Self-Employed Women's Association. (n.d.). *About us*. https://www.sewa.org/about-us/
- Self-Employed Women's Association. (n.d.). *SEWA's membership*. https://www.sewa.org/membership-and-affiliations/sewa-membership/
- The Trade Unions Act, 1926 (India), § 4. India Code. https://www.indiacode.nic.in/bitstream/123456789/20965/1/the_trade_unions_act,_1926.pdf`,
      recallContent: [
        {
          prompt: "Why is the nationwide general strike the one industrial action an informal worker can join?",
          answer:
            "Because it requires no employer: you stay home, shut your stall, or march. Enterprise strikes need an employment relationship; the bharat bandh is aimed at the government and at policy, so the informal nine-tenths can take part.",
        },
        {
          prompt: "How do Indian general strikes differ in TARGET from the strikes in the anchor course (Homestead, Pullman, Flint)?",
          answer:
            "Anchor-course strikes ran against an employer, aimed at a contract. The Indian bharat bandh runs against the government, aimed at policy, labor codes, privatisation, social security. It is bargaining with the state, by the only means available to a fragmented movement.",
        },
      ],
    },
    {
      slug: "india-sewa-how",
      title: "7 · How do you bargain with nobody? The SEWA method",
      section: "Section 3 · SEWA, the union with no employer to strike against",
      body: `A union's toolkit, as the anchor course taught it: organize, certify, bargain, strike, grieve. Every verb aims at an employer. SEWA had to rebuild the toolkit for workers who have none, and the rebuild is the most instructive piece of labor-institution engineering in this track.

**SEWA's own formulation is "struggle and development"**, a union *and* a web of member-owned institutions, because for the self-employed, half of what a contract would provide has to be built instead.

**Tool 1, the identity card.** The most underrated object in this course. A SEWA membership card is often the first document a member has ever held that names her as a *worker*. For a street vendor facing a policeman confiscating her cart, or a head-loader disputing a payment, a card, an organization that will answer for her, converts an invisible person into a represented one. Recall lesson 3: informal retaliation (eviction, confiscation, harassment) is Question 4 for the informal worker. The card is the counter-tool.

**Tool 2, replace the missing counterparty.** No employer? Then find the entity that actually controls the member's livelihood, and bargain *there*:
- For **piece-rate home workers**, the counterparty is the middleman and the trader chain, SEWA runs campaigns over piece rates, the informal economy's version of a wage claim.
- For **street vendors**, it is the **municipality** that controls the street. SEWA has fought vendors' eviction battles from city offices up into the courts, and that decades-long fight fed into a national statute: the **Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014**, which for the first time gave vendors a statutory framework, including town vending committees with mandated vendor representation (the Act sets it at 40 per cent of members). A law, note, that regulates *cities*, not employers: labor law with the employer deleted.
- For **everyone**, the residual counterparty is **the state**, lobbying workers onto welfare boards and social-security schemes. When lesson 12 reaches e-Shram, India's national registry of informal workers, you will recognize whose logic it borrows.

**Tool 3, build what the contract would have contained.** A formal job carries credit-worthiness, insurance, childcare, a pension. SEWA builds each as a member-owned institution: the **SEWA Cooperative Bank**, founded in 1974 out of thousands of members' tiny share contributions, because no commercial bank would lend to an undocumented vegetable seller; insurance (VimoSEWA), childcare cooperatives, producer and vendor cooperatives that let members bypass the middleman entirely. This is the piece with no equivalent anywhere else in the track: **the union as a substitute for the employment relationship itself**, not just a party to it. (Nearest cousin: the Nordic Ghent funds, services binding members to the union, but those top up a formal system; SEWA's institutions stand in for an absent one.)

**Tool 4, export the category.** SEWA took "the self-employed are workers" to the international level: Ela Bhatt co-founded **WIEGO** (Women in Informal Employment: Globalizing and Organizing, 1997), SEWA helped build **HomeNet**, the international alliance of home-based workers' organizations, and that alliance's campaigning contributed to the ILO's **Home Work Convention, 1996 (No. 177)**, the first ILO convention recognizing home-based workers, and the ILO's **Recommendation 204 (2015)** on formalising the informal economy now frames the issue globally. The definitional fight a Gujarat labor department lost in 1972 has since been fought, and largely won, at the ILO.

**What the method costs.** Note what is absent from all four tools: a collective *agreement*. SEWA wins rates, laws, seats and services, it cannot win a contract, because there is no counterparty capable of signing one for its members as a class. That gap is the honest subject of the next lesson.

:::reveal SEWA cannot bargain with an employer, so it re-aims each tool. For a home-based piece-rate worker, a street vendor, and the membership at large, who is the counterparty in each case? ||| The home-based worker's counterparty is the middleman/trader chain (piece-rate campaigns). The street vendor's is the municipality that controls the street, a fight that fed the Street Vendors Act, 2014. For members at large it is the state: welfare boards, social-security schemes, registration. Where none of those suffice, SEWA builds the missing institution itself (bank, insurance, cooperatives).

## Sources
- Self-Employed Women's Association. (n.d.). *About us; SEWA's structure*. https://www.sewa.org/about-us/
- The Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014 (India). India Code. https://www.indiacode.nic.in/
- International Labour Organization. (1996). *Home Work Convention, 1996 (No. 177)*. https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID:312322
- International Labour Organization. (2015). *Transition from the Informal to the Formal Economy Recommendation, 2015 (No. 204)*. https://www.ilo.org/`,
      recallContent: [
        {
          prompt: "SEWA, who founded it, when, where, and under what law did it register?",
          answer:
            "Ela Bhatt (1933-2022), a labor lawyer from the Textile Labour Association's women's wing, founded the Self-Employed Women's Association in Ahmedabad in 1972. It registered as a trade union under the Trade Unions Act, 1926 (SEWA records 12 April 1972) after arguing a union needs a purpose, not an employer.",
        },
        {
          prompt: "How big is SEWA, and how should that figure be treated?",
          answer:
            "SEWA reports 3.78 million members across 20 states, its own count, attributed not audited. Even discounted, it is one of India's largest workers' organizations, and unlike the major federations it is tied to no political party.",
        },
      ],
    },
    {
      slug: "india-sewa-lesson",
      title: "8 · What SEWA proves, and what it doesn't",
      section: "Section 3 · SEWA, the union with no employer to strike against",
      body: `Time to do to SEWA what this course did to the 90% and the 250 million: state precisely what it establishes, and refuse to romanticise past that line.

**What SEWA proves.**

**1. "Worker" and "employee" are different categories, as a matter of demonstrated fact, not theory.** Three-plus million self-employed women organized, registered, banked, insured and represented for five decades is an existence proof. The anchor course's machinery assumes the two categories coincide; SEWA is the standing demonstration that they need not.

**2. The four questions still work, they just return different answers.** Who may organize? Anyone with seven members and a purpose (the 1972 registration). Who is excluded? Nobody by statute, but note honestly who the model reaches less well: SEWA organises women, by design, rooted in the reality that informal work is disproportionately women's work; parallel organizing of informal men has been thinner everywhere. Who bargains with whom? Middlemen, municipalities, the state, lesson 7. What happens if you try? Harassment and eviction still, but now with a card, a lawyer, and three million co-members behind you.

**3. Services build unions where statutes don't.** The Nordic course showed the Ghent effect: unions that administer unemployment funds keep members. SEWA is the same law operating at the opposite end of the world's income distribution: the bank, the insurance, the childcare are why members stay. **Where the law gives a union nothing to deliver, a union that wants members must deliver something itself.**

**What SEWA does not prove.**

**1. It has not produced a collective agreement, because it cannot.** There is no employer-side entity capable of binding itself to pay every head-loader in Ahmedabad a set rate. SEWA wins *rates* in specific markets, *laws* like the 2014 Street Vendors Act, *seats* on boards, *services*, but nothing in its toolkit does what the German sectoral agreement or even a single Wagner-Act contract does: create enforceable terms that attach to the work itself. The absence is structural, and you should hear in it lesson 3's theme again: **no counterparty, no contract.**

**2. Membership is not coverage.** 3.78 million (self-reported) is vast as organizing and small as arithmetic: India's informal workforce is measured in the hundreds of millions. SEWA changes its members' lives; it has not changed the *aggregate* condition of Indian informal labor, and fifty years in, the model's spread, real, and international, is still nowhere near the scale of the problem.

**3. It is not a substitute for the state.** SEWA's own strategy concedes this: half its energy goes into pushing the state to build what only the state can, social security, registries, statutory protections. The Labour Codes of Section 4, whatever else they are, are the state finally moving on that terrain: a social-security code that claims to cover the unorganised, a registry (e-Shram) with over 300 million workers on it. Whether that is the SEWA logic scaled up, or a thin imitation of it, is a question you will be equipped to argue in three lessons.

**The one-line verdict to carry forward:** SEWA proves organizing the employer-less is possible and shows the working method, identity, substituted counterparties, member-built institutions, while proving, by its own hardest limit, that *bargaining* in the anchor course's sense still requires the one thing nine-tenths of India's workers do not have.

:::reveal SEWA has never signed a collective agreement in fifty years. Why not, and why does this course treat that as a finding rather than a failure? ||| Because no counterparty exists that could bind itself to terms for its members as a class, no employer, no employers' association. No counterparty, no contract: the absence is structural, not a strategic shortfall. It is the cleanest single demonstration of what informality removes, which is exactly the finding this course exists to teach.

## Sources
- Self-Employed Women's Association. (n.d.). *About us; SEWA's membership*. https://www.sewa.org/about-us/
- International Labour Organization & Institute for Human Development. (2024). *India Employment Report 2024*. ILO. https://www.ilo.org/sites/default/files/2024-08/India%20Employment%20-%20web_8%20April.pdf
- International Labour Organization. (2015). *Transition from the Informal to the Formal Economy Recommendation, 2015 (No. 204)*. https://www.ilo.org/`,
      recallContent: [
        {
          prompt: "SEWA's 'struggle and development', what does each half mean?",
          answer:
            "Struggle: the union half, piece-rate campaigns against middlemen, eviction fights with municipalities, lobbying the state for welfare boards and laws. Development: member-owned institutions that build what a contract would have contained, the SEWA Cooperative Bank (1974), insurance, childcare, producer cooperatives.",
        },
        {
          prompt: "Name the 2014 statute SEWA's vendor battles helped produce, and what is odd about it as labour law.",
          answer:
            "The Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014, with town vending committees whose membership must be 40% vendors. It is labor law with the employer deleted: it regulates cities, not employers.",
        },
      ],
    },
    {
      slug: "india-quiz-3",
      title: "Section 3 quiz · SEWA and the employer-less union",
      section: "Section 3 · SEWA, the union with no employer to strike against",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who founded SEWA, and from inside what organisation?",
            options: [
              "Anasuya Sarabhai, from inside the Indian National Congress party in Ahmedabad",
              "Ela Bhatt, a labor lawyer heading the Textile Labour Association's women's wing",
              "A committee of the International Labour Organization, working out of Geneva",
              "The Gujarat state Labour Department, as an official state-government scheme",
            ],
            correctIndex: 1,
            explanation:
              "Bhatt (1933-2022) kept meeting women who worked in and around the textile trade, head-loaders, cart-pullers, home stitchers, whom the mill union had no category for.",
            sourceLessonSlug: "india-sewa-1972",
          },
          {
            prompt: "What was the Labour Department's objection to registering SEWA in 1972?",
            options: [
              "SEWA simply had far too few members to register as a trade union at all",
              "A union needs an employer to struggle against, and SEWA's members had none",
              "Women were not legally permitted to form or join trade unions at that time",
              "The Trade Unions Act, 1926 had by then expired and been repealed entirely",
            ],
            correctIndex: 1,
            explanation:
              "The objection is this course's theme stated as bureaucracy. SEWA's answer: a union is defined by its purpose, organizing workers for their own development, not by its adversary.",
            sourceLessonSlug: "india-sewa-1972",
          },
          {
            prompt: "What feature of the Trade Unions Act, 1926 made SEWA's registration legally possible?",
            options: [
              "A special statutory exemption written specifically for women's organizations",
              "The Act requires seven members but nowhere requires that they share an employer",
              "A 1971 amendment that specifically extended the Act to cover the self-employed",
              "The Act simply does not apply anywhere within the state of Gujarat at all",
            ],
            correctIndex: 1,
            explanation:
              "A colonial statute written for a world of mills contained, unnoticed for fifty years, the legal space for a union of the employer-less.",
            sourceLessonSlug: "india-sewa-1972",
          },
          {
            prompt: "How does this course treat SEWA's reported membership of 3.78 million across 20 states?",
            options: [
              "As a fully audited membership figure formally certified by the central government",
              "As SEWA's own count, attributed, and still evidence of a very large organization",
              "As an official membership estimate produced and published by the ILO in Geneva",
              "As a figure SEWA has deliberately falsified in order to inflate its own size",
            ],
            correctIndex: 1,
            explanation:
              "Same discipline as the 90% and the 250 million: name the source. It is SEWA's count, and no political party owns SEWA, unlike every federation in lesson 4's table.",
            sourceLessonSlug: "india-sewa-1972",
          },
          {
            prompt: "Why does this course call the SEWA membership card 'the most underrated object' it teaches?",
            options: [
              "It also doubles as a bank credit card usable at any commercial shop or bank branch",
              "It is often a member's first document naming her as a worker, not an invisible person",
              "It is a document expressly required of every trade-union member by the 1926 Act",
              "It legally guarantees its holder the full statutory national minimum wage always",
            ],
            correctIndex: 1,
            explanation:
              "Question 4 for informal workers is confiscation, eviction, harassment. An identity backed by an organization that will answer for you is the counter-tool.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "For SEWA's home-based piece-rate workers, who replaces the employer as bargaining counterparty?",
            options: [
              "The International Labour Organization, acting on their behalf",
              "The middleman and the trader chain, through piece-rate campaigns",
              "The local police, who control the wholesale market where they work",
              "Nobody at all, since these workers simply cannot bargain in any way",
            ],
            correctIndex: 1,
            explanation:
              "Find the entity that actually controls the livelihood and bargain there. Piece-rate campaigns are the informal economy's wage claims.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "What is legally odd about the Street Vendors Act, 2014 as a piece of labour law?",
            options: [
              "It contains no penalties and no enforcement mechanism of any single kind whatsoever",
              "It regulates municipalities rather than employers: labor law with the employer deleted",
              "It applies only within the single state of Gujarat and nowhere else in all of India",
              "It was drafted and written entirely by SEWA rather than by any state legislature",
            ],
            correctIndex: 1,
            explanation:
              "The vendor's adversary is the city that controls the street, so the statute disciplines town vending committees (with 40% vendor membership), not any employer.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "Why did SEWA found its own cooperative bank in 1974?",
            options: [
              "To speculate for profit in the international foreign-currency exchange markets abroad",
              "No commercial bank would lend to undocumented informal workers, so SEWA built its own",
              "Because the central government legally required every trade union to run its own bank",
              "To fund and pay out generous weekly strike benefits to all of its striking members",
            ],
            correctIndex: 1,
            explanation:
              "Tool 3: build what the contract would have contained, credit, insurance (VimoSEWA), childcare, cooperatives. The union as substitute for the missing employment relationship.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "Which international instruments carry the definitional fight SEWA started in 1972?",
            options: [
              "The USMCA Rapid Response Labour Mechanism, enforced through trade sanctions",
              "The ILO Home Work Convention, 1996 (No. 177) and Recommendation 204 of 2015",
              "The Geneva Conventions on the treatment of prisoners and civilians in war",
              "The Paris Agreement on limiting global greenhouse-gas emissions worldwide",
            ],
            correctIndex: 1,
            explanation:
              "Via HomeNet and WIEGO (co-founded by Ela Bhatt, 1997), 'the self-employed are workers' was argued and largely won at the ILO.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "What is the one classic union deliverable missing from SEWA's toolkit, and why?",
            options: [
              "Strikes, which remain entirely illegal for women workers everywhere across India",
              "A collective agreement: no counterparty exists that could sign terms for its members",
              "Membership dues, which SEWA is legally forbidden from collecting from any member",
              "Legal representation, which SEWA cannot lawfully provide to any of its members",
            ],
            correctIndex: 1,
            explanation:
              "SEWA wins rates, laws, seats and services, but no contract. No counterparty, no contract: the absence is structural, and it is the course's cleanest demonstration of what informality removes.",
            sourceLessonSlug: "india-sewa-lesson",
          },
          {
            prompt: "How is SEWA 'the Ghent effect at the other end of the income distribution'?",
            options: [
              "It directly administers the national state unemployment insurance funds of Denmark",
              "Like Nordic unions it binds members through services, but stands in for an absent system",
              "It was founded and is still bankrolled by the Scandinavian trade-union federations",
              "It pays out unemployment benefits drawn directly from central government tax funds",
            ],
            correctIndex: 1,
            explanation:
              "Same law, services build unions, operating where the statute gives the union nothing to deliver, so the union delivers it itself.",
            sourceLessonSlug: "india-sewa-lesson",
          },
          {
            prompt: "What does this course concede when it says 'membership is not coverage' about SEWA?",
            options: [
              "That SEWA's own members are not in fact real workers at all under any Indian law",
              "3.78 million is vast as organizing but tiny against a workforce of hundreds of millions",
              "That SEWA's total membership has been steadily falling every single year for a decade",
              "That real coverage always requires the direct backing of an allied political party",
            ],
            correctIndex: 1,
            explanation:
              "Refusing to romanticise is part of the method: the model is real, international, and still nowhere near the scale of the problem, fifty years in.",
            sourceLessonSlug: "india-sewa-lesson",
          },
          {
            prompt: "Whose logic does India's e-Shram registry of informal workers borrow, per this course?",
            options: [
              "The German works council's model of statutory plant-level worker representation",
              "SEWA's: the state substitutes itself as counterparty, registering the worker directly",
              "The American Wagner Act's model of a certified majority union bargaining at a firm",
              "China's ACFTU model of one single party-state-controlled national trade union",
            ],
            correctIndex: 1,
            explanation:
              "Registering and naming informal workers so the state can attach protections to them is the SEWA playbook (identity, welfare boards) scaled to national machinery, well or badly, Section 4 examines.",
            sourceLessonSlug: "india-sewa-how",
          },
          {
            prompt: "SEWA organises women, by design. What honest observation does the course attach to that?",
            options: [
              "Men are entirely and legally barred from doing any informal work throughout India",
              "Informal work is disproportionately women's work; organizing informal men stayed thinner",
              "Women make up only a very small minority of all of India's informal-sector workers",
              "The women-only design was directly imposed on SEWA by the central government by law",
            ],
            correctIndex: 1,
            explanation:
              "The gendered design is rooted in the gendered reality of informality, and the model's replication for informal men remains comparatively weak.",
            sourceLessonSlug: "india-sewa-lesson",
          },
          {
            prompt: "What one-line verdict on SEWA does this course ask you to carry forward?",
            options: [
              "SEWA ultimately failed because it never once managed to sign a collective contract",
              "Organising the employer-less works and SEWA shows how, but bargaining needs an employer",
              "SEWA is really a political party in waiting, biding its time before contesting polls",
              "SEWA's whole model only works inside the single home state of Gujarat, nowhere else",
            ],
            correctIndex: 1,
            explanation:
              "Existence proof and structural limit, held together, the same both-hands honesty the Germany course applied to co-determination.",
            sourceLessonSlug: "india-sewa-lesson",
          },
        ],
      },
    },

    // ────────────── SECTION 4 · THE LABOUR CODES ──────────────
    {
      slug: "india-codes-what",
      title: "9 · Twenty-nine laws, four Codes",
      section: "Section 4 · The Labour Codes, 29 laws, four Codes, one long wait",
      body: `Lesson 2 showed you the cathedral: a century's accumulation of labor statutes, the 1926 Act, the 1947 Act, the 1948 Acts, and dozens more, each with its own definitions, thresholds, registers and inspectors. Between 2019 and 2020, India's Parliament did something governments had discussed for decades: it repealed **29 central labor laws** and folded them into **four Codes**. Whatever you end up thinking of them, they are the largest rewrite of labor law in Indian history, and you should first meet them as text.

**1 · The Code on Wages, 2019** (passed August 2019), absorbs the Minimum Wages Act 1948, the Payment of Wages Act 1936, the Payment of Bonus Act 1965 and the Equal Remuneration Act 1976. Its headline change answers lesson 2 directly: the minimum wage becomes **universal**. The "scheduled employments" gate is gone, every wage worker, in listed occupations or not, is entitled to a minimum wage, and the Code adds a national **floor wage** below which no state's minimum may fall. On paper, this is the single largest extension of a labor right toward the informal workforce in the country's history. (Keep the italics on *on paper*, lesson 10 is about the gap between enactment and reach.)

**2 · The Industrial Relations Code, 2020**, absorbs the Trade Unions Act 1926, the Industrial Employment (Standing Orders) Act 1946 and the Industrial Disputes Act 1947. Three changes carry most of the controversy:
- **The 100 becomes 300.** Establishments needing **prior government permission** for lay-offs, retrenchment or closure: the threshold rises from 100 workers to **300**, with governments empowered to raise it further. Employers' case: the 100-worker rule froze hiring, firms stayed small or hired contract labor to duck it. Unions' case: it strips job-security review from every factory between 100 and 300.
- **The strike notice goes universal.** A **14-day advance notice** before any strike, previously required only in public utility services, now applies to **all establishments**, with wide no-strike windows while conciliation and adjudication are pending. Unions read this as making the lawful lightning strike impossible.
- **The negotiating union.** A union with **51% of workers** on the muster roll becomes the **sole negotiating union**, India's first general statutory recognition rule (before this, recognition was largely a matter of state laws and codes of practice). With multiple party-tied rivals in one plant (lesson 4), a 51% single winner is rare, failing that, the Code provides a negotiating *council* of the larger unions.

**3 · The Occupational Safety, Health and Working Conditions Code, 2020**, absorbs 13 laws including the Factories Act 1948, the Contract Labour Act 1970 and the Inter-State Migrant Workmen Act 1979: one licensing-and-safety regime for factories, contractors and migrant labor.

**4 · The Code on Social Security, 2020**, absorbs nine laws including the provident fund and state-insurance Acts and the Unorganised Workers' Social Security Act 2008, and, for the first time in any Indian statute, defines and covers **gig workers and platform workers**. That is lesson 11's story.

**Why unions struck against this (lesson 5) while the government calls it historic:** the Codes genuinely extend *floors* (universal minimum wage, social-security ambitions) while genuinely raising *thresholds* (300 workers, 14-day notice, longer no-strike windows). Whether that trade reads as modernisation or as de-fanging depends on which half of the package reaches you, a universal wage floor means most to the informal nine-tenths; the threshold changes cost most to the organized tenth that actually strikes. Hold both halves; refuse the headline versions of either.

:::reveal The IR Code raised the prior-permission threshold from 100 to 300 workers. Give the employers' argument and the unions' argument for and against, both in one line each. ||| Employers: the 100-worker rule froze firms below the threshold and pushed them into contract labor, raising it unfreezes hiring. Unions: every establishment between 100 and 300 workers loses government review of lay-offs and closure, job security shrinks for exactly the plants where unions exist.

## Sources
- The Code on Wages, 2019 (India), No. 29 of 2019. India Code. https://www.indiacode.nic.in/
- The Industrial Relations Code, 2020 (India), No. 35 of 2020. India Code. https://www.indiacode.nic.in/bitstream/123456789/22040/1/A2020-35.pdf
- The Occupational Safety, Health and Working Conditions Code, 2020 (India), No. 37 of 2020. India Code. https://www.indiacode.nic.in/
- The Code on Social Security, 2020 (India), No. 36 of 2020. India Code. https://www.indiacode.nic.in/
- Press Information Bureau. (n.d.). *Industrial Relations Code, 2020: Promoting harmony and ease of doing business* [Factsheet]. Government of India. https://www.pib.gov.in/FactsheetDetails.aspx?Id=150483`,
      recallContent: [
        {
          prompt: "State SEWA's existence proof and its structural limit in one line each.",
          answer:
            "Proof: workers without employers can be organized at scale, three-plus million members, five decades, a working method. Limit: they cannot be brought under a collective agreement, because no counterparty exists to sign one, no counterparty, no contract.",
        },
        {
          prompt: "How does SEWA illustrate the same law as the Nordic Ghent system?",
          answer:
            "Both show services build unions: Nordic unions keep members by administering unemployment funds; SEWA keeps members through its bank, insurance, and childcare. Where the statute gives a union nothing to deliver, the union must deliver something itself.",
        },
      ],
    },
    {
      slug: "india-codes-when",
      title: "10 · Passed in 2020, in force in 2025: always date the status",
      section: "Section 4 · The Labour Codes, 29 laws, four Codes, one long wait",
      body: `Now the part of the story that most summaries flatten, and that this course refuses to: **when** any of lesson 9 became real. Watch the dates, the gap between them is itself the lesson.

**The timeline, dated at every step:**
- **August 2019:** the Code on Wages is passed by Parliament.
- **September 2020:** the other three Codes are passed.
- **2020 → 2025:** the Codes sit on the books, enacted but **not brought into force**. No commencement notification; the old 29 laws keep operating. Five years.
- **21 November 2025:** the central government brings all four Codes **into force** (Ministry of Labour & Employment notification).
- **December 2025, May 2026:** draft central *rules* published (30 December 2025); **final Central Rules notified 8 May 2026**.
- **As of mid-2026:** state rules remain **uneven**, a majority of states and union territories have notified rules for at least one Code, several large states are still at the draft stage, and there is no single common commencement date for every state-dependent provision.

**Why did a government with a parliamentary majority wait five years to switch on its own flagship reform?** Several forces, all documented and none sufficient alone. The Codes were politically contested from birth, the union federations, including at times the **BMS, the federation aligned with the governing party's own family** (lesson 4), demanded changes or repeal, and lesson 5's general strikes kept the pressure public. The COVID-19 pandemic consumed the machinery's first years. And structurally: **labor sits on the Concurrent List of India's Constitution**, both the central government and every state legislate on it, and the Codes are built to run on *rules* that each state must write for itself. Switching on the Codes before states wrote rules would have produced a vacuum where the repealed laws had been. The federal plumbing, not any single villain, explains most of the five years, and explains why even now "in force" means different things in different states.

**Extract the method, because you will use it on every country you ever study.** Between "passed" and "protecting an actual worker" a law crosses at least four thresholds, **enacted → in force → rules framed → enforced**, and a claim about the law is meaningless until you know which threshold it refers to. "India has a universal minimum wage" was false-in-practice from 2019 to 2025 despite being on the statute book, and its truth **today** varies by state rule-making. Compare the track's siblings: Mexico's 2019 reform came with a hard deadline (all contracts legitimised by May 2023) and an external enforcer (the USMCA mechanism); India's reform had neither, and took five years to cross threshold two. **A dated claim is the only honest kind.** This course was written in mid-2026 and says so; if you are reading it later, the state-rules map has almost certainly moved, check it, don't trust us.

**And who does the wait fall on?** Notice the asymmetry: the organized tenth kept its old protections through the gap (the old laws stayed in force). The informal nine-tenths, whose universal minimum wage and social-security coverage existed only inside the un-commenced Codes, absorbed the entire five-year delay. The workers with the least were the ones waiting on the plumbing.

:::reveal 'India enacted a universal minimum wage in 2019.' Walk that claim through the four thresholds, enacted, in force, rules framed, enforced, with dates. ||| Enacted: August 2019 (Code on Wages passed). In force: not until 21 November 2025, a five-year gap in which the old scheduled-employments regime kept operating. Rules framed: final Central Rules 8 May 2026, with STATE rules still uneven as of mid-2026 (labor is a concurrent subject). Enforced: varies by state and is the threshold to check at the time you read this. The claim is true or false depending on which threshold, which is why undated claims about the Codes are worthless.

## Sources
- Ministry of Labour & Employment, Government of India. (2025, November 21). Commencement of the four Labour Codes [Notification, as reported]. https://labour.gov.in/
- KPMG. (2025, December). *India — Government of India announces implementation of four labour codes* (GMS Flash Alert 2025-267). https://kpmg.com/xx/en/our-insights/gms-flash-alert/flash-alert-2025-267.html
- EY India. (2025, November 21). *New labour codes implemented across the country effective 21 November 2025* [Alert]. https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/alerts-hub/2025/11/new-labour-codes-implemented-across-the-country-effective-21-november-2025.pdf
- Ministry of Labour & Employment, Government of India. (2026, January). *FAQ on myths and realities of the Industrial Relations Code 2020*. https://www.labour.gov.in/static/uploads/2026/01/b9f5b3916c042a5597f9cb4f3cc9f0fd.pdf`,
      recallContent: [
        {
          prompt: "The four Labour Codes, with years and one headline change each.",
          answer:
            "Code on Wages (2019): universal minimum wage plus a national floor wage. Industrial Relations Code (2020): 300-worker permission threshold, universal 14-day strike notice, 51% sole negotiating union. OSH Code (2020): one safety/licensing regime absorbing 13 laws. Code on Social Security (2020): first statutory coverage of gig and platform workers. Together they replace 29 central laws.",
        },
        {
          prompt: "What did the Code on Wages, 2019 do to the 'scheduled employments' gap?",
          answer:
            "Closed it: the minimum wage became universal instead of applying only to occupations a government had listed, with a national floor wage below which no state minimum may fall, on paper, the largest extension of a labor right toward the informal workforce in Indian history.",
        },
      ],
    },
    {
      slug: "india-gig-workers",
      title: "11 · The gig worker enters the statute",
      section: "Section 4 · The Labour Codes, 29 laws, four Codes, one long wait",
      body: `Inside the Code on Social Security, 2020 sits a first, not just for India but for this entire track: **the first time a national statute anywhere in these twelve courses names the gig worker as a legal category.**

**The definitions (Code on Social Security, 2020, § 2).** A **"gig worker"** is a person who earns from work arrangements **"outside of traditional employer-employee relationship."** A **"platform worker"** is a gig worker whose arrangement runs through an online platform. An **"aggregator"** is the digital intermediary, the app, connecting buyers of a service with its providers. Read the gig-worker definition twice, because something remarkable is happening in it: **the statute defines the worker by the absence of an employer.** Everything lesson 2's cathedral assumed, this definition negates, and instead of pretending the category doesn't exist, the law finally names it. It is lesson 1's ~90%, or rather its app-mediated sliver, written into § 2.

**The money.** The Code directs that schemes for gig and platform workers be funded in part by the aggregators themselves: a contribution of **1-2% of an aggregator's annual turnover, capped at 5% of the amount paid or payable to its gig and platform workers**, into a social-security fund. Registration runs through **e-Shram**, the national database of unorganised workers launched in **August 2021**, which by **July 2025** recorded **over 30.9 crore (309 million) registered workers** (Press Information Bureau, 2025). Pause on that number the way this course has taught you to: it is a count of *registrations on a self-declaration portal*, not of benefits delivered, but as a measure of how many people raised their hand when the state finally asked who works informally, it is staggering. Recognise the playbook, too: registration, identity, a welfare fund attached to the worker rather than to any employer, **the SEWA logic of lesson 7, run at national scale by the state.**

**What the recognition is not.** The Code gives gig workers *social security schemes*, not a minimum wage (that lives in the Code on Wages, keyed to employment), not working-time limits, not collective-bargaining rights. India has, in effect, answered the question the United States has litigated for a decade, *is a gig worker an employee?*, by statute, and the answer is **"no, but they get a third category with welfare attached."** Compare the anchor's misclassification wars: the American fight is over pushing gig workers *into* the employee box; India built a box *between* employee and invisible. Advocates of the approach call it realism, coverage without a definitional war. Critics call it entrenchment, informality, now with a statutory blessing and a discount social-security rate. Both readings are live; this course holds them open.

**And because the Codes idled for five years (lesson 10), the states moved first.** **Rajasthan** passed the first state gig-worker law in the country, the **Rajasthan Platform Based Gig Workers (Registration and Welfare) Act, 2023**: a state welfare board, a register of gig workers, and a **welfare cess of 1-2% per transaction** on aggregators. **Karnataka** followed with the **Karnataka Platform Based Gig Workers (Social Security and Welfare) Act, 2025**, a welfare fee of **1-5% of the payout per transaction**, graded by aggregator category, plus grievance and termination-protection provisions that go beyond welfare into something like employment rights. Federalism as laboratory, again: while the Centre's scheme-making under the SS Code is still being operationalised **(status as of mid-2026, check before relying)**, two states already run their own regimes, and every platform operating nationally now navigates a patchwork.

:::reveal India's SS Code defines a gig worker as earning 'outside of traditional employer-employee relationship.' Why does this course call that definition both a landmark and a warning? ||| Landmark: the statute finally names the employer-less worker instead of pretending the category doesn't exist, the first legal recognition of gig work in this track, with aggregator-funded social security attached. Warning: it creates a third category BETWEEN employee and invisible, welfare without minimum wage, working-time or bargaining rights, so it can be read as realism (coverage without a definitional war) or as entrenchment (informality with statutory blessing). Both readings are live.

## Sources
- The Code on Social Security, 2020 (India), No. 36 of 2020, § 2. India Code. https://www.indiacode.nic.in/
- Press Information Bureau. (2025, July). *Over 30.95 crore unorganised workers registered on e-Shram portal*. Government of India. https://www.pib.gov.in/PressReleasePage.aspx?PRID=2149351
- The Rajasthan Platform Based Gig Workers (Registration and Welfare) Act, 2023 (India), Act 29 of 2023. https://prsindia.org/files/bills_acts/acts_states/rajasthan/2023/Act29of2023Rajasthan.pdf
- PRS Legislative Research. (2025). *The Karnataka Platform Based Gig Workers (Social Security and Welfare) Bill, 2025*. https://prsindia.org/bills/states/the-karnataka-platform-based-gig-workers-social-security-and-welfare-bill-2025
- Press Information Bureau. (2025). *Labour reforms: Formalising and safeguarding India's gig & platform workforce*. Government of India. https://www.pib.gov.in/PressReleasePage.aspx?PRID=2200767`,
      recallContent: [
        {
          prompt: "The Labour Codes' four-threshold timeline, dated.",
          answer:
            "Enacted 2019 (Wages) and 2020 (the other three); brought into force 21 November 2025; final Central Rules 8 May 2026; state rules still uneven as of mid-2026 because labor is on the Concurrent List and every state writes its own rules. 'In force' means different things in different states.",
        },
        {
          prompt: "Who absorbed the five-year commencement delay, and why is that asymmetric?",
          answer:
            "The informal nine-tenths. The organized tenth kept its old-law protections through the gap; the universal minimum wage and gig social security existed only inside the un-commenced Codes, so the workers with the least did all the waiting.",
        },
      ],
    },
    {
      slug: "india-quiz-4",
      title: "Section 4 quiz · The Codes, dated",
      section: "Section 4 · The Labour Codes, 29 laws, four Codes, one long wait",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did India's four Labour Codes do to the existing body of central labour law?",
            options: [
              "Added four brand-new labor laws on top of the existing body of laws",
              "Repealed and consolidated 29 central labor laws into just four Codes",
              "Transferred the entire body of central labor law over to the states",
              "Abolished essentially all of India's central labor law altogether",
            ],
            correctIndex: 1,
            explanation:
              "Wages (2019), Industrial Relations, OSH, and Social Security (2020), the largest rewrite of labor law in Indian history, replacing 29 statutes.",
            sourceLessonSlug: "india-codes-what",
          },
          {
            prompt: "What is the headline change of the Code on Wages, 2019?",
            options: [
              "It abolished the statutory minimum wage across the whole of India entirely",
              "The minimum wage became universal, with a new national floor wage below it",
              "It automatically doubled every single worker's wage across the whole country",
              "It applies the minimum wage only inside registered factories, nowhere else",
            ],
            correctIndex: 1,
            explanation:
              "Under the 1948 Act, no listing meant no wage floor. The Code universalises the entitlement, on paper the largest extension of a labor right toward the informal workforce ever.",
            sourceLessonSlug: "india-codes-what",
          },
          {
            prompt: "Under the IR Code 2020, which establishments need prior government permission for lay-offs, retrenchment or closure?",
            options: [
              "All establishments, regardless of how many workers they happen to employ",
              "Those with 300 or more workers, raised from the previous threshold of 100",
              "Those with 50 or more workers, lowered from the previous threshold of 100",
              "None at all, since the prior-permission requirement was entirely abolished",
            ],
            correctIndex: 1,
            explanation:
              "The 100→300 change is the Codes' most contested single number: employers say 100 froze hiring; unions say plants of 100-300 lose job-security review.",
            sourceLessonSlug: "india-codes-what",
          },
          {
            prompt: "What did the IR Code do to strike notice requirements?",
            options: [
              "Abolished the strike-notice requirement altogether for every establishment",
              "Extended the 14-day strike notice from public utilities to all establishments",
              "Cut the required advance strike notice down to just 24 hours before a strike",
              "Made every strike, in every single sector, outright illegal across the country",
            ],
            correctIndex: 1,
            explanation:
              "Unions read the universal 14-day notice as ending the lawful lightning strike; the government frames it as orderly dispute resolution.",
            sourceLessonSlug: "india-codes-what",
          },
          {
            prompt: "What share of workers must a union have to become the sole negotiating union under the IR Code?",
            options: [
              "10% of the workers on the muster roll",
              "25% of the workers on the muster roll",
              "51% of the workers on the muster roll",
              "75% of the workers on the muster roll",
            ],
            correctIndex: 2,
            explanation:
              "India's first general statutory recognition rule. With party-tied rivals in one plant, a 51% winner is rare, failing that, a negotiating council of larger unions.",
            sourceLessonSlug: "india-codes-what",
          },
          {
            prompt: "Why does the course insist you 'hold both halves' of the Codes?",
            options: [
              "Because the entire content of the four Labour Codes has been kept officially secret",
              "They extend floors (a universal minimum wage) while raising thresholds (300 workers)",
              "Because exactly half of the four Labour Codes were later quietly repealed again",
              "Because the unions and the employers now fully agree on every part of the Codes",
            ],
            correctIndex: 1,
            explanation:
              "The floor extensions mean most to the informal nine-tenths; the threshold changes cost most to the organized tenth. Headline versions of either half mislead.",
            sourceLessonSlug: "india-codes-what",
          },
          {
            prompt: "When were the four Codes brought into force?",
            options: [
              "Immediately on passage, back in 2019 and 2020",
              "On 21 November 2025, five years after enactment",
              "They have in fact not yet been brought into force",
              "On 1 January 2022, about a year after passage",
            ],
            correctIndex: 1,
            explanation:
              "Enacted 2019/2020, commenced 21 November 2025, final Central Rules 8 May 2026, with state rules still uneven as of mid-2026.",
            sourceLessonSlug: "india-codes-when",
          },
          {
            prompt: "What structural feature of India's constitution explains most of the five-year commencement gap?",
            options: [
              "The President's power to veto and indefinitely delay the commencement order",
              "Labour is on the Concurrent List, so every state must write its own rules",
              "Indian labor law can take effect only after a nationwide public referendum",
              "The Supreme Court had suspended all four of the Codes for the whole period",
            ],
            correctIndex: 1,
            explanation:
              "Commencing the Codes before states wrote rules would have left a vacuum where the repealed laws had been. Federal plumbing, plus political contest and COVID, ate the five years.",
            sourceLessonSlug: "india-codes-when",
          },
          {
            prompt: "The course's four thresholds every law must cross before it protects anyone are…",
            options: [
              "Drafted, debated, amended, and finally printed",
              "Enacted, then in force, rules framed, enforced",
              "Proposed, passed, signed, and then celebrated",
              "State, then national, then ILO, then court",
            ],
            correctIndex: 1,
            explanation:
              "'India has a universal minimum wage' was false-in-practice for six years despite being on the books, a claim is meaningless until you know which threshold it refers to.",
            sourceLessonSlug: "india-codes-when",
          },
          {
            prompt: "Who absorbed the cost of the five-year gap between enactment and commencement?",
            options: [
              "The organized tenth, who entirely lost all of their old protections during the gap",
              "The informal nine-tenths, whose wage floor existed only inside the un-commenced Codes",
              "Employers, who were forced to pay double the compliance costs throughout the gap",
              "Nobody at all, since the five-year commencement gap in fact carried no real cost",
            ],
            correctIndex: 1,
            explanation:
              "The asymmetry is the point: the workers with the least did all the waiting.",
            sourceLessonSlug: "india-codes-when",
          },
          {
            prompt: "How does the Code on Social Security, 2020 define a 'gig worker'?",
            options: [
              "Any part-time worker employed for fewer than the standard number of weekly hours",
              "A person earning from work arrangements outside a traditional employer-employee tie",
              "Anyone at all who happens to be paid in cash rather than into a formal bank account",
              "Any worker who is under the age of thirty and works through some digital app",
            ],
            correctIndex: 1,
            explanation:
              "The statute defines the worker by the ABSENCE of an employer, the first legal naming of the category in this track, and lesson 1's theme written into § 2.",
            sourceLessonSlug: "india-gig-workers",
          },
          {
            prompt: "How are gig-worker social-security schemes funded under the SS Code?",
            options: [
              "Entirely out of general central-government taxation, at no cost to any of the apps",
              "By aggregator contributions of 1-2% of annual turnover, capped at 5% of payouts",
              "By compulsory worker dues set at a flat 10% of every single gig worker's earnings",
              "Directly by the International Labour Organization out of its own Geneva budget",
            ],
            correctIndex: 1,
            explanation:
              "The app pays into the fund; registration runs through e-Shram, which recorded over 309 million registrations by July 2025, registrations, note, not benefits delivered.",
            sourceLessonSlug: "india-gig-workers",
          },
          {
            prompt: "What did the SS Code's gig recognition deliberately NOT give gig workers?",
            options: [
              "Social-security schemes and welfare-fund coverage of the usual statutory sort",
              "A clear statutory definition of the gig worker written into the Code text itself",
              "Minimum wage, working-time limits and collective bargaining: it is welfare only",
              "Registration and enrollment on the national e-Shram portal for unorganised workers",
            ],
            correctIndex: 2,
            explanation:
              "India answered 'is a gig worker an employee?' by statute: no, a third category with welfare attached. Realism to advocates; entrenchment of informality to critics.",
            sourceLessonSlug: "india-gig-workers",
          },
          {
            prompt: "Which state passed India's first gig-worker law, and what does it levy?",
            options: [
              "Karnataka, which imposed a flat 10% payroll tax on all of the aggregators",
              "Rajasthan (2023), a welfare cess of 1-2% per transaction on aggregators",
              "Kerala, which imposed a single flat annual license fee on the aggregators",
              "Gujarat, which imposed no levy of any kind at all on any of the aggregators",
            ],
            correctIndex: 1,
            explanation:
              "Rajasthan moved first (2023) during the Centre's commencement gap; Karnataka (2025) followed with a 1-5% graded fee and protections reaching beyond welfare.",
            sourceLessonSlug: "india-gig-workers",
          },
          {
            prompt: "Why does the course say e-Shram 'borrows the SEWA logic'?",
            options: [
              "SEWA itself actually designed and built the whole of the e-Shram portal for the state",
              "It attaches identity, registration and welfare to the worker, not to any employer",
              "The e-Shram portal registers only women workers, just as SEWA itself originally did",
              "The e-Shram portal is run and headquartered in Ahmedabad, which is SEWA's home city",
            ],
            correctIndex: 1,
            explanation:
              "When no employer exists to hang protections on, you register the worker and attach them to the state, SEWA's method (lesson 7), nationalised.",
            sourceLessonSlug: "india-gig-workers",
          },
        ],
      },
    },

    // ────────────── SECTION 5 · CASTE, THE SEWER, AND THE CHILD ──────────────
    {
      slug: "india-caste-and-labor",
      title: "12 · Caste and labor: who is in the sewer",
      section: "Section 5 · The honest part, caste, the sewer, and the child",
      body: `Every course in this track has an honest part, the chapter the brochure version leaves out. Germany's was the coverage collapse; Mexico's was the protection contract. India's honest part is that its labor market is not only divided into formal and informal. It is also divided by **caste**, and the division runs *through* the informal economy, not alongside it.

**The one paragraph of background this course needs.** Caste is a hereditary system of social ranking in South Asia that historically assigned not just status but **occupation**, including a category of communities forced into work others deemed "polluting": sanitation, leatherwork, the removal of human waste and animal carcasses. B.R. Ambedkar, the economist and jurist who chaired the drafting of India's Constitution, and who was born into one of these communities, put the labor point in one line this course cannot improve on: caste "is not merely a division of labour. It is also a division of labourers" (Ambedkar, 1936). India's Constitution outlaws the system's sharpest edge, **Article 17: "Untouchability" is abolished and its practice in any form is forbidden**, and its schedules give the historically excluded communities their administrative names: **Scheduled Castes (SC)**, about 16.6% of the population, and **Scheduled Tribes (ST)**, about 8.6% (Census of India, 2011).

**Now watch what the data does when the state finally counts.** Manual removal of human excreta, "manual scavenging", has been banned twice: by the **Employment of Manual Scavengers and Construction of Dry Latrines (Prohibition) Act, 1993**, and again, with rehabilitation duties added, by the **Prohibition of Employment as Manual Scavengers and their Rehabilitation Act, 2013**, which also prohibits hazardous cleaning of sewers and septic tanks without protective equipment. Two prohibitions, thirty years apart, so is it over? In **July 2024**, the Ministry of Social Justice and Empowerment told the **Rajya Sabha** (Parliament's upper house) two things in the same breath, and you should hold them side by side:

- There are **no reports of the practice of manual scavenging** *as defined by the 2013 Act*.
- **377 people died cleaning sewers and septic tanks between 2019 and 2023** (Rajya Sabha, July 2024).

Both sentences can be true at once, and seeing how is a skill this course has been building since lesson 1: **the Act's definition of "manual scavenger" centers on human excreta in insanitary latrines, a person who dies inside a sewer or septic tank is counted under a different label, "hazardous cleaning."** The practice persists; the definition files it elsewhere. This is the same lesson as the 82%-versus-90% and the 250 million: *a number without its definition is a vibe*, and here the definitional gap is not an academic point. It is 377 deaths reported to Parliament by the same ministry reporting the practice extinguished. The Supreme Court has twice put money on the reality: **Safai Karamchari Andolan v. Union of India (2014)** ordered ₹10 lakh compensation for every sewer death since 1993, and **Dr. Balram Singh v. Union of India (2023)** directed that compensation for sewer deaths rise to **₹30 lakh** (about US$36,000).

**And who is in the sewer?** In 2023-24 the government launched **NAMASTE** (National Action for Mechanised Sanitation Ecosystem), a scheme to profile, equip and rehabilitate sewer and septic-tank workers. Its own profiling data, reported to the **Lok Sabha in December 2024**: of **54,574** sewer and septic-tank workers profiled and validated by that date, **67.9% were Scheduled Castes**, and roughly **92% were SC, ST or OBC (Other Backward Classes) combined** (Lok Sabha, December 2024). Set 67.9% against the SC population share of 16.6% and the point makes itself: **this is not a random draw of poor workers. It is occupational assignment by descent, surviving inside the informal economy two constitutional generations after Article 17.**

**Connect it to the course's spine.** Lesson 3 called India's great exclusion *structural*, the law's vocabulary never reaches the informal worker. This lesson adds the map: **the structural exclusion has a caste geography.** Who ends up in the informal economy's worst work, the sewer, the waste heap, the tannery, is not caste-neutral, which means "formalise the economy" and "annihilate caste-assigned work" are related but *not identical* projects. A universal minimum wage (Section 4) prices the work; it does not reassign who is compelled by descent and lack of alternatives to do it. The 2013 Act's own architecture concedes this: half the statute is prohibition, the other half is **rehabilitation**, alternative livelihoods, because banning the work without replacing the income only criminalises the worker.

:::reveal In July 2024 the same ministry told Parliament there were 'no reports of manual scavenging as defined by the 2013 Act' AND that 377 people died cleaning sewers and septic tanks in 2019-2023. How are both sentences true at once? ||| Because of the definition: the Act's 'manual scavenger' centers on removing human excreta from insanitary latrines, while deaths inside sewers and septic tanks are filed under a different label, 'hazardous cleaning.' The practice persists; the definitional boundary files it elsewhere. Same discipline as the 90% and the 250 million: a number means nothing without its definition, here the gap is 377 deaths wide.

## Sources
- Ambedkar, B. R. (1936). *Annihilation of caste*. Self-published address. https://ccnmtl.columbia.edu/projects/mmt/ambedkar/
- Constitution of India, art. 17. https://www.indiacode.nic.in/
- The Prohibition of Employment as Manual Scavengers and their Rehabilitation Act, 2013 (India), No. 25 of 2013. India Code. https://www.indiacode.nic.in/handle/123456789/2091
- Rajya Sabha, Parliament of India. (2024, July). *Deaths due to hazardous cleaning of sewers and septic tanks* [Unstarred question, Ministry of Social Justice and Empowerment answer]. https://sansad.in/rs/questions
- Lok Sabha, Parliament of India. (2024, December). *NAMASTE scheme — profiling of sewer and septic tank workers* [Question answer, Ministry of Social Justice and Empowerment]. https://sansad.in/ls/questions
- Safai Karamchari Andolan v. Union of India, Supreme Court of India (2014, March 27). https://indiankanoon.org/doc/71304530/
- Dr. Balram Singh v. Union of India, Supreme Court of India (2023, October 20). https://indiankanoon.org/doc/59089239/
- Census of India. (2011). *Primary census abstract: Scheduled Castes and Scheduled Tribes*. Office of the Registrar General & Census Commissioner. https://censusindia.gov.in/`,
      recallContent: [
        {
          prompt: "The SS Code 2020's three gig-economy definitions and the funding rule.",
          answer:
            "Gig worker: earns outside a traditional employer-employee relationship. Platform worker: a gig worker working through an online platform. Aggregator: the digital intermediary (the app). Funding: aggregators contribute 1-2% of annual turnover, capped at 5% of payments to their gig/platform workers, to a social-security fund; registration runs through e-Shram (309M+ registrations by July 2025).",
        },
        {
          prompt: "Which two states legislated on gig work before the central Codes were operational, and how do their levies differ?",
          answer:
            "Rajasthan (2023, first in India): welfare cess of 1-2% per transaction. Karnataka (2025): welfare fee of 1-5% of per-transaction payout, graded by aggregator category, plus grievance and termination protections. The states moved during the Centre's five-year commencement gap.",
        },
      ],
    },
    {
      slug: "india-child-labour",
      title: "13 · Child labor: real progress, and where the count stops",
      section: "Section 5 · The honest part, caste, the sewer, and the child",
      body: `The second honest chapter is child labor, and here the honest version cuts both ways: the progress is real, and so are the limits. This course refuses both the horror-story version (nothing has changed) and the brochure version (it is solved). As always: numbers with dates, laws with thresholds.

**The progress, dated.** India's census, the only full count there is, recorded **12.7 million working children aged 5-14 in 2001** and **10.1 million in 2011** (Census of India, 2011): a decline of roughly a fifth in a decade in which the child population grew. Behind the decline sits a real policy architecture. The **Right of Children to Free and Compulsory Education Act, 2009 (RTE)** made schooling ages 6-14 a legal entitlement from April 2010, and a child in school is the single most reliable non-worker there is. In **2017**, India ratified both ILO child-labor conventions, **No. 138** (minimum age) and **No. 182** (worst forms), the two core conventions lesson 2 noted it *had* signed, in the same breath as the two it has not. And in **2016**, Parliament amended the 1986 child-labor statute into the **Child and Adolescent Labour (Prohibition and Regulation) Act**: employment of children **under 14 is now prohibited in all occupations**, and adolescents (14-18) are barred from hazardous work. On paper, you know this course's next move, that is a complete ban, aligned with the RTE age.

**Now the limits, equally dated.** Read the 2016 amendment's fine print, because both of its most criticized features live there:

- **The family-enterprise exception.** A child under 14 may "help" in a **family or family enterprise**, after school hours and in non-hazardous work (child artists get a parallel carve-out). Critics, including UNICEF India at the time, made the obvious objection: in an economy that is roughly 90% informal (lesson 1), *the family enterprise is precisely where child labor lives*, the farm plot, the home-based piece-work of lesson 6, the roadside stall. The exception writes the informal economy's children out of the ban's reach, and unlike the anchor course's statutory exclusions, this one is genuinely hard to police even in good faith, because the workplace is a home.
- **The shrunken hazardous list.** The same amendment cut the list of hazardous occupations barred to adolescents from **83 items to 3 broad categories**, mines, inflammable substances and explosives, and hazardous processes under the Factories Act, moving everything else off the statutory schedule (Child and Adolescent Labour (Prohibition and Regulation) Amendment Act, 2016).

**And where the count stops.** The honest limit under everything above: **the last full count is 2011.** India's decennial census due in 2021 was postponed, and as of mid-2026 no new census child-labor tables exist, so every current figure you will meet is a survey estimate or a projection, and this course declines to headline any of them. Notice that this is the same epistemic hole as lesson 4's union-membership verification (last completed: 2002): **on the two questions where India's labor story is hardest, how many union members, how many working children, the official count is a decade or more old.** When the new census publishes, check it; do not trust a 2011 number recited as a present-tense fact, including by us.

**Connect it to the spine, one last time.** Child labor in India is overwhelmingly **informal-economy** labor: family farms, home-based work, small workshops, the places with no employer of record for an inspector to serve notice on. Which is why the machinery that has moved the number is mostly *not* labor-law machinery: it is **schools** (RTE), midday meals, household income growth. Where the employment relationship is invisible, the effective child-labor law turns out to be an education law. That is this course's thesis in miniature: **where "worker = employee with an employer" fails, protections that attach to the employer fail with it, and protections that attach to the person are what actually reach people.**

:::reveal The 2016 amendment banned all work by children under 14, with an exception for 'helping in family enterprises.' Why do critics call that exception the ban's biggest hole, in this course's terms? ||| Because in a ~90%-informal economy, the family enterprise, the farm, the home workshop, the stall, is exactly where most child labor happens. The exception carves the informal economy's children out of the ban, and it is structurally hard to police because the workplace is a home. A ban that attaches at the employer fails where there is no employer, the course's thesis applied to children.

## Sources
- Census of India. (2011). *Working children in the age group 5–14* [Census tables, as compiled]. Office of the Registrar General & Census Commissioner. https://censusindia.gov.in/
- The Child and Adolescent Labour (Prohibition and Regulation) Act, 1986, as amended by the Child Labour (Prohibition and Regulation) Amendment Act, 2016 (India). India Code. https://www.indiacode.nic.in/handle/123456789/1985
- The Right of Children to Free and Compulsory Education Act, 2009 (India), No. 35 of 2009. India Code. https://www.indiacode.nic.in/
- International Labour Organization. (2017, June 13). *India ratifies both fundamental ILO conventions on child labour* [Press release]. https://www.ilo.org/resource/news/india-ratifies-both-fundamental-ilo-conventions-child-labour
- UNICEF India. (2016, July). *Statement on the Child Labour (Prohibition and Regulation) Amendment Act, 2016*. https://www.unicef.org/india/`,
      recallContent: [
        {
          prompt: "The two 2024 parliamentary data points on manual scavenging, and the definitional artifact between them.",
          answer:
            "Rajya Sabha, July 2024: 'no reports of manual scavenging as defined by the 2013 Act', and 377 deaths cleaning sewers and septic tanks, 2019-2023, from the same ministry. The Act's definition centers on insanitary latrines; sewer and septic-tank deaths are filed under 'hazardous cleaning,' so the practice persists while the defined category reads as empty.",
        },
        {
          prompt: "What did NAMASTE profiling data (Lok Sabha, December 2024) show about who does sewer and septic-tank work?",
          answer:
            "Of 54,574 workers profiled and validated, 67.9% were Scheduled Castes and roughly 92% were SC/ST/OBC combined, against an SC population share of about 16.6% (Census 2011). Occupational assignment by descent, persisting inside the informal economy despite Article 17 and two statutory bans (1993, 2013).",
        },
      ],
    },
    {
      slug: "india-quiz-5",
      title: "Section 5 quiz · Caste, the sewer, and the child",
      section: "Section 5 · The honest part, caste, the sewer, and the child",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does Article 17 of India's Constitution do?",
            options: [
              "Guarantees every single worker a statutory national minimum wage",
              "Abolishes 'untouchability' and forbids its practice in any form",
              "Creates and formally codifies the whole caste system in Indian law",
              "Establishes and mandates the decennial national Census of India",
            ],
            correctIndex: 1,
            explanation:
              "Article 17 outlaws the caste system's sharpest edge. The NAMASTE data shows how far practice lags the text two constitutional generations later.",
            sourceLessonSlug: "india-caste-and-labor",
          },
          {
            prompt: "Complete Ambedkar's line: caste 'is not merely a division of labour. It is also a…'",
            options: [
              "…division of labourers",
              "…division of wages",
              "…division of land",
              "…division of parties",
            ],
            correctIndex: 0,
            explanation:
              "Ambedkar (Annihilation of Caste, 1936): the system ranks and assigns the WORKERS by descent, not just the work, which is why formalising the economy and ending caste-assigned work are related but not identical projects.",
            sourceLessonSlug: "india-caste-and-labor",
          },
          {
            prompt: "How many times has manual scavenging been banned by central statute, and when?",
            options: [
              "Once only, by a single central statute passed back in the year 1950",
              "Twice: the 1993 Act and the 2013 Manual Scavengers Rehabilitation Act",
              "It has in fact never once been banned by any central statute at all",
              "Three times, the most recent being inside the four 2020 Labour Codes",
            ],
            correctIndex: 1,
            explanation:
              "1993 (dry latrines) and 2013 (with rehabilitation duties and a ban on hazardous sewer/septic cleaning without protective equipment). Two prohibitions, thirty years apart, and 377 deaths reported for 2019-2023 anyway.",
            sourceLessonSlug: "india-caste-and-labor",
          },
          {
            prompt:
              "In July 2024 the Ministry of Social Justice told the Rajya Sabha there were 'no reports of manual scavenging as defined by the 2013 Act', and also reported what?",
            options: [
              "That the entire 2013 Act had by then been formally repealed in full",
              "377 deaths cleaning sewers and septic tanks between 2019 and 2023",
              "That all of India's sanitation work had by then been fully mechanised",
              "That the long-delayed decennial census had at last resumed nationwide",
            ],
            correctIndex: 1,
            explanation:
              "Both statements came from the same ministry. The definitional gap, latrine-centered 'manual scavenging' vs 'hazardous cleaning' of sewers, is what lets both be simultaneously true.",
            sourceLessonSlug: "india-caste-and-labor",
          },
          {
            prompt: "Why can 'no manual scavenging' and '377 sewer deaths' both be true at once?",
            options: [
              "Because all of the reported deaths in fact occurred abroad, outside India entirely",
              "The 2013 Act's definition centers on latrines, so sewer deaths are filed elsewhere",
              "Because the people who actually died were not legally workers under any statute",
              "The two official statements simply cannot both be true at the very same time",
            ],
            correctIndex: 1,
            explanation:
              "The practice persists; the definition files it elsewhere. A number without its definition is a vibe, this course's oldest lesson, at its highest stakes.",
            sourceLessonSlug: "india-caste-and-labor",
          },
          {
            prompt: "What did NAMASTE profiling data (Lok Sabha, December 2024) show about sewer and septic-tank workers?",
            options: [
              "They are drawn perfectly evenly and proportionally from all of India's communities",
              "Of 54,574 validated workers, 67.9% were Scheduled Castes and about 92% SC/ST/OBC",
              "Most of them are in fact recent migrant workers from outside of India entirely",
              "No caste data of any kind at all was gathered during the NAMASTE profiling drive",
            ],
            correctIndex: 1,
            explanation:
              "Against an SC population share of ~16.6% (Census 2011), 67.9% is not a random draw of poor workers, it is occupational assignment by descent surviving inside the informal economy.",
            sourceLessonSlug: "india-caste-and-labor",
          },
          {
            prompt: "What have India's Supreme Court rulings ordered for sewer deaths?",
            options: [
              "Nothing at all; both of the cases were summarily dismissed by the court",
              "Compensation: ₹10 lakh per death since 1993, raised to ₹30 lakh in 2023",
              "Only criminal penalties for the employers, with no compensation ordered",
              "The full nationalisation of all sanitation work across the whole country",
            ],
            correctIndex: 1,
            explanation:
              "Two judgments put money on the reality the definitions obscure, compensation orders premised on the deaths the category 'manual scavenging' does not count.",
            sourceLessonSlug: "india-caste-and-labor",
          },
          {
            prompt: "Why is half of the 2013 Act devoted to rehabilitation rather than prohibition?",
            options: [
              "It was included purely as an accidental drafting error in the whole 2013 statute",
              "Banning caste-assigned work without replacing the income only criminalises the worker",
              "Because prohibition of the practice was by 2013 already wholly and fully complete",
              "It was written in mainly as a way to help fund the long-delayed national census",
            ],
            correctIndex: 1,
            explanation:
              "A universal wage floor prices the work; it does not reassign who is compelled by descent and lack of alternatives to do it. Prohibition without rehabilitation punishes the person it claims to free.",
            sourceLessonSlug: "india-caste-and-labor",
          },
          {
            prompt: "What does this course mean by 'the structural exclusion has a caste geography'?",
            options: [
              "That informality as a whole exists only in some of India's states, and not others",
              "Who ends up in the informal economy's very worst work is not at all caste-neutral",
              "That caste itself is really only a regional phenomenon confined to the far south",
              "That formal-sector workers in India in fact have no caste identity of any kind",
            ],
            correctIndex: 1,
            explanation:
              "Lesson 3's structural exclusion, plus this lesson's map: formalising the economy and annihilating caste-assigned work are related but not identical projects.",
            sourceLessonSlug: "india-caste-and-labor",
          },
          {
            prompt: "What do India's census figures show about child labour between 2001 and 2011?",
            options: [
              "A sharp rise from about 10.1 million up to about 12.7 million working children total",
              "A decline from about 12.7 million to about 10.1 million working children aged 5-14",
              "No measurable change at all in the total number of working children aged 5 to 14",
              "The decennial census does not in fact count working children at all anywhere in India",
            ],
            correctIndex: 1,
            explanation:
              "Real, dated progress, driven less by labor inspection than by schools (RTE, 2009), midday meals, and rising household incomes.",
            sourceLessonSlug: "india-child-labour",
          },
          {
            prompt: "What did the 2016 amendment do to child employment law?",
            options: [
              "Legalised effectively all forms of child work everywhere throughout the country",
              "Banned all work by children under 14, with a family-enterprise exception",
              "Merely raised the minimum working age from ten up to just twelve years of age",
              "Applied its new child-work ban only inside registered factories and mines",
            ],
            correctIndex: 1,
            explanation:
              "A complete ban on paper, aligned with the RTE schooling age, with its two most criticized features in the fine print (the family-enterprise exception and the shrunken hazardous list).",
            sourceLessonSlug: "india-child-labour",
          },
          {
            prompt: "Why do critics call the family-enterprise exception the 2016 ban's biggest hole?",
            options: [
              "Because every family enterprise, without any exception, is inherently hazardous work",
              "In a ~90%-informal economy, the family farm is exactly where most child labor lives",
              "Because the exception in fact applies only to adolescents aged 14 to 18, not children",
              "Because the whole family-enterprise exception quietly expired back in the year 2020",
            ],
            correctIndex: 1,
            explanation:
              "A ban that attaches at the employer fails where there is no employer, the course's thesis, applied to children.",
            sourceLessonSlug: "india-child-labour",
          },
          {
            prompt: "What happened to the hazardous-occupations list for adolescents in the 2016 amendment?",
            options: [
              "It was expanded from just 3 items up to a full 83 hazardous categories",
              "It was cut from 83 items down to just 3 broad hazardous categories",
              "It was left entirely unchanged by the whole 2016 amendment, at 83 items",
              "It was lifted wholesale out of statute and moved into the Constitution",
            ],
            correctIndex: 1,
            explanation:
              "The same amendment that completed the under-14 ban narrowed the adolescent protections, both halves live in the 2016 fine print.",
            sourceLessonSlug: "india-child-labour",
          },
          {
            prompt: "Why does this course decline to give a current child-labour figure for India?",
            options: [
              "Because child labor in India has now been completely and entirely ended",
              "The last full count is the 2011 census, and the 2021 census was postponed",
              "Because all current child-labor data is officially classified as secret",
              "Because the International Labour Organization formally forbids publishing any",
            ],
            correctIndex: 1,
            explanation:
              "The same epistemic hole as union membership (last verified 2002): on India's hardest labor questions, the official count is a decade or more old. Check the new census when it publishes.",
            sourceLessonSlug: "india-child-labour",
          },
          {
            prompt: "What 'effective child-labour law' has actually moved India's numbers, per this course?",
            options: [
              "The Industrial Disputes Act of 1947, through its lay-off and retrenchment provisions",
              "Education law: the RTE compulsory-schooling entitlement, plus rising household income",
              "The Trade Unions Act of 1926, through its low seven-member union registration rule",
              "The Street Vendors Act of 2014, through its town vending committee requirements",
            ],
            correctIndex: 1,
            explanation:
              "Where the employment relationship is invisible, protections that attach to the PERSON (a school place) reach further than protections that attach to an employer. The course's thesis in miniature.",
            sourceLessonSlug: "india-child-labour",
          },
        ],
      },
    },

    // ────────────── SECTION 6 · THE FOUR ANSWERS ──────────────
    {
      slug: "india-four-answers",
      title: "14 · The four answers, and what India teaches the track",
      section: "Section 6 · The verdict, what India teaches everyone else",
      body: `Lesson 3 promised that Section 6 would ask you to give the four answers back, short. Here they are, India's answers first, then the three things this course adds to everything else you will study in this track.

**Q1, Who is allowed to organize?** Nearly anyone, genuinely: Article 19(1)(c) plus seven members (1926 Act), a floor low enough that in 1972 it admitted a union of women with no employer at all. But the right is thinner than its paper: no ILO 87/98 ratification, no fundamental right to strike (Rangarajan, 2003), and under the IR Code a lawful strike now needs 14 days' notice everywhere.

**Q2, Who is excluded?** Formally almost nobody; structurally, roughly nine in ten. India's great exclusion is written in no statute because the statutes' *vocabulary*, employer, establishment, industry, never reaches the informal worker. And the exclusion is not neutral: it has a caste geography (lesson 12) and it runs through childhood (lesson 13).

**Q3, Who bargains with whom?** The organized tenth bargains enterprise-by-enterprise, through party-tied federations too fragmented for a 51% sole negotiator to be common. The informal nine-tenths, where they bargain at all, bargain with **substituted counterparties**: the middleman, the municipality, above all the state, welfare boards, e-Shram, aggregator-funded schemes. SEWA invented the method; the state has begun nationalising it.

**Q4, What happens to you if you try?** Three answers in one country: the rulebook (formal private sector), Rangarajan's dismissal-without-remedy (government employees), and informal punishment, eviction, confiscation, the contractor who stops calling, for the majority, against which the working counter-tools are a membership card and an organization that answers for you.

**Now the three things India teaches the track, the reasons this course exists:**

**1. "Worker" and "employee" are different categories, and the difference is most of the world.** Every other course in this track studies variations on the employment relationship. India is the reminder that globally, per the ILO, informal employment is the majority experience of work, India is the largest case, not an exotic one. Any theory of labor rights that starts "when you get a job with an employer…" has skipped most of the people it claims to be about. Test everything you learned in the anchor against a street vendor; whatever survives is the real core.

**2. Institutions can be rebuilt around the missing employer, at a price that must be stated honestly.** SEWA proves organizing the employer-less works: identity, substituted counterparties, member-built institutions. The Social Security Code and e-Shram prove the state can run the same logic at national scale, registration and welfare attached to the person, not the job. And lesson 8's limit stands at both scales: none of it produces a collective agreement, because **no counterparty, no contract.** What replaces bargaining, when the employer is missing, is *politics*, which is why India's biggest labor events are general strikes against governments (claimed at 250 million, attributed, never verified), not contract fights against firms.

**3. Date every claim, define every number.** This course's method was its content. The 90% came with a source, year and definition; the 250 million stayed attributed; the Labour Codes carried an "as of" at every threshold (enacted 2019/20 → in force 21 November 2025 → Central Rules 8 May 2026 → state rules still uneven, mid-2026); the sewer deaths were counted honestly only once you saw the definitional seam; the child-labor count stops in 2011 and says so. Where the anchor course gave you four questions to ask of any country, India adds the discipline for hearing the answers: **no number without a definition, no law without a date, no claim without an owner.** Carry all three tools to the next course, and back into your own.

:::reveal Name the three things this course says India teaches the whole track. ||| (1) 'Worker' and 'employee' are different categories, and the informal majority, not the employed minority, is most of the world's experience of work. (2) Institutions can be rebuilt around a missing employer (SEWA's method; the state's e-Shram version), but no counterparty, no contract: what replaces bargaining is politics. (3) The sourcing discipline itself: no number without a definition, no law without a date, no claim without an owner.

## Sources
- International Labour Organization & Institute for Human Development. (2024). *India Employment Report 2024*. ILO. https://www.ilo.org/sites/default/files/2024-08/India%20Employment%20-%20web_8%20April.pdf
- International Labour Organization. (2023). *Women and men in the informal economy: A statistical update*. https://www.ilo.org/publications/women-and-men-informal-economy-statistical-update
- T.K. Rangarajan v. Government of Tamil Nadu & Others, Supreme Court of India (2003, August 6). https://indiankanoon.org/doc/88909580/
- The Industrial Relations Code, 2020 (India), No. 35 of 2020. India Code. https://www.indiacode.nic.in/bitstream/123456789/22040/1/A2020-35.pdf`,
      recallContent: [
        {
          prompt: "India's child-labour count, dated, and why no current figure is headlined.",
          answer:
            "Census 2001: 12.7 million working children aged 5-14; Census 2011: 10.1 million, a real decline. The 2021 census was postponed, so as of mid-2026 the last full count is fifteen years old; everything newer is a survey estimate, and the course attributes rather than asserts those.",
        },
        {
          prompt: "The 2016 amendment's two most criticised features.",
          answer:
            "(1) The family-enterprise exception: children under 14 may 'help' in family enterprises after school, non-hazardous, carving out exactly the informal settings where most child labor lives. (2) The hazardous-occupations list for adolescents was cut from 83 items to 3 broad categories (mines, inflammables/explosives, Factories Act hazardous processes).",
        },
      ],
    },
    {
      slug: "india-quiz-6",
      title: "Section 6 quiz · The four answers",
      section: "Section 6 · The verdict, what India teaches everyone else",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "India's answer to 'Who is allowed to organise?' is 'nearly anyone, but…' But what?",
            options: [
              "But only through one single official state-controlled trade-union federation",
              "But the right is thin on paper: no ILO 87/98, no right to strike, 14-day notice",
              "But only inside registered factories and mines, nowhere else in the whole economy",
              "But every union must first formally register itself with an approved political party",
            ],
            correctIndex: 1,
            explanation:
              "The floor for forming is low (seven members, Art. 19(1)(c)); the ceiling on acting is what Rangarajan and the IR Code set.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "Summarise India's answer to 'Who is excluded?'",
            options: [
              "Nobody at all is excluded from India's labor law, either formally or structurally",
              "Formally almost nobody; structurally roughly nine in ten, with a caste geography",
              "Only central and state government employees are excluded, and no other workers",
              "Only agricultural and domestic workers, carved out by name in the statute text",
            ],
            correctIndex: 1,
            explanation:
              "No carve-out clause exists because none was needed: employer/establishment/industry never reach the informal worker, and who lands in the worst informal work is not caste-neutral.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "For the informal nine-tenths, who fills the employer's chair at the bargaining table?",
            options: [
              "The single largest central trade union federation, acting on all their behalf",
              "Substituted counterparties: the middleman, the municipality, above all the state",
              "The International Labour Organization, negotiating directly for all the workers",
              "Nobody at all, since bargaining is entirely illegal for informal workers here",
            ],
            correctIndex: 1,
            explanation:
              "SEWA invented the substitution method (lesson 7); the SS Code and e-Shram are the state running the same logic at national scale.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "Why does the course say Question 4 has three answers in one country?",
            options: [
              "Because there are exactly three major central trade union federations across India",
              "Retaliation differs by which India you work in: rulebook, Rangarajan, informal punishment",
              "Because the Indian Constitution contains three separate articles dealing with strikes",
              "Because there are exactly three separate Labour Codes covering industrial relations",
            ],
            correctIndex: 1,
            explanation:
              "One legal system, three experiences of 'what happens if you try', the tripartite answer is itself the picture of a segmented labor market.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "Why does this course insist India is 'the largest case, not an exotic one'?",
            options: [
              "Because India has the single largest verified union membership in the whole world",
              "Per the ILO, informal employment is the majority experience of work worldwide",
              "Because every single country on earth is likewise about 90% informally employed",
              "Because the International Labour Organization is itself headquartered inside India",
            ],
            correctIndex: 1,
            explanation:
              "The track's other courses study variations on employment; India is the reminder that the employment relationship itself is the minority case worldwide.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "What replaces bargaining where the employer is missing, per this course's verdict?",
            options: [
              "Formal, binding arbitration of the whole dispute before a neutral third-party panel",
              "Politics: demands aimed at the state, which is why the big events are general strikes",
              "Litigation, taking the individual employer straight to the labor courts and tribunals",
              "Nothing at all replaces it; the informal workers simply have no recourse whatsoever",
            ],
            correctIndex: 1,
            explanation:
              "No counterparty, no contract, so the pressure goes where a counterparty exists: government. The 250M-claimed bharat bandh is that logic at maximum scale.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "State the course's three-part sourcing discipline.",
            options: [
              "Trust all official sources, distrust the unions, and simply ignore the press",
              "No number without a definition, no law without a date, no claim without an owner",
              "Always use the single largest available figure that any given source has published",
              "Only ever cite the ILO itself, and never cite any other source of data at all",
            ],
            correctIndex: 1,
            explanation:
              "The 90% (defined), the Codes (dated at four thresholds), the 250 million and the membership claims (attributed to their owners), the method was the content.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "Apply the discipline: a headline says 'India's Labour Codes guarantee every worker a minimum wage.' What must you ask before repeating it?",
            options: [
              "Nothing at all needs asking, since all Indian statutes are entirely self-executing",
              "Which of the four thresholds the claim refers to, and how it reaches informal workers",
              "Only whether the headline figure is expressed in crores or else in plain millions",
              "Only whether the headline came originally from a trade union or from an employer",
            ],
            correctIndex: 1,
            explanation:
              "A law protects nobody until it crosses enacted → in force → rules framed → enforced, and 'every worker' is doing heavy lifting in a 90%-informal economy.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "SEWA's method and e-Shram share one design principle. Which?",
            options: [
              "Attach identity, registration and protection to the person, not to a job or employer",
              "Fund absolutely everything entirely through the members' own trade-union dues alone",
              "Organise only the formal-sector workers, and never any of the informal workers at all",
              "Replace the entire state apparatus with member-owned worker cooperatives everywhere",
            ],
            correctIndex: 0,
            explanation:
              "When the employer is missing, protections that attach at the employer fail, so both attach them to the worker herself: card, register, welfare fund.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "What single structural limit stands at both SEWA scale and national scale?",
            options: [
              "A simple and chronic lack of enough dues-paying members to sustain all the work",
              "No counterparty, no contract: organizing works without an employer, a contract cannot",
              "A simple and chronic lack of any applicable labor laws on the statute books at all",
              "The long postponement and repeated delay of the whole decennial national census",
            ],
            correctIndex: 1,
            explanation:
              "Fifty years of SEWA and a 309-million-registration portal both stop at the same wall: nothing can sign terms for the informal economy as a class.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt:
              "The course closes by asking you to test the anchor course's machinery against one figure. Who, and why?",
            options: [
              "A factory manager, on the grounds that formal factories are the entirely typical case",
              "A street vendor: whatever survives contact with an employer-less worker is the core",
              "A high-court judge, on the grounds that the courts ultimately decide everything",
              "A federation president, on the grounds that the unions truly speak for all workers",
            ],
            correctIndex: 1,
            explanation:
              "The election, the contract, the grievance procedure all fail the street-vendor test; the right to organize, identity, and person-attached protection survive. That residue is the point of the course.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "Which pairing correctly matches the track's three union-politics entanglements to their countries?",
            options: [
              "India: the party owns the single union; China: many rival unions; Poland: the union won power",
              "Poland: the union destroyed the party-state; China: the party owns the union; India: rival unions",
              "Poland: many rival parties and unions; China: the union came first; India: one state federation",
              "All three countries simply run one single state-run federation and allow no rival unions at all",
            ],
            correctIndex: 1,
            explanation:
              "Three orderings of union and party, and India's plural, fragmented version is why a 51% sole negotiating union is rare and general strikes are the unifying act.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt:
              "Apply the discipline to '250 million workers struck on 9 July 2025.' Who owns that number, and what may you honestly repeat?",
            options: [
              "The government owns the figure, and so you may simply repeat it as a plain fact",
              "The unions own it; you may repeat 'the organisers claimed over 250 million', attributed",
              "The ILO owns the figure, and it has been fully and independently audited already",
              "Nobody at all owns the figure, since numbers never need to have any owners at all",
            ],
            correctIndex: 1,
            explanation:
              "No claim without an owner: there is no independent count of a one-day strike across 1.4 billion people, so the honest sentence names whose estimate it is.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "e-Shram recorded over 309 million registrations by July 2025. What is the careful reading of that figure?",
            options: [
              "All 309 million of those registered workers now actually receive their full benefits",
              "It counts self-declared registrations, who raised their hand, not benefits delivered",
              "It counts the total registered trade-union membership across the whole of India today",
              "It is simply the total number of all formal-sector employees in the entire country",
            ],
            correctIndex: 1,
            explanation:
              "Registration is the state's version of the SEWA card, identity attached to the person. It is staggering as a count of the invisible made visible, and it is not yet protection.",
            sourceLessonSlug: "india-four-answers",
          },
          {
            prompt: "Why is India called this track's most important stress test of the anchor course?",
            options: [
              "Because India in fact has the single strictest labor laws found anywhere in the world",
              "Every anchor tool assumes an employer, and India is the largest case where most lack one",
              "Because India was the very first country to ratify every single one of the ILO conventions",
              "Because India's trade unions are demonstrably the very oldest anywhere in the world",
            ],
            correctIndex: 1,
            explanation:
              "The election, the contract, the grievance procedure all presuppose an employment relationship; a ~90%-informal workforce is where that presupposition, and any theory built on it, gets tested.",
            sourceLessonSlug: "india-four-answers",
          },
        ],
      },
    },
  ],
};
