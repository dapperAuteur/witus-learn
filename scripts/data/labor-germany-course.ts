// Authored "Germany: Workers on the Board" — Wave 1 of the Workers' Rights track
// (plans/future-courses/workers-rights-track-proposal.md). A country course hanging off the
// anchor, "The History of Unions: America and the World" (scripts/data/history-of-unions-course.ts).
// The anchor gives one lesson to German co-determination and supplies the four questions; this
// course goes deep on one country and CROSS-LINKS the anchor rather than re-telling it.
//
// Sourcing discipline (the load-bearing part of this file):
//   * EVERY statutory claim was READ OUT OF THE STATUTE, not recalled. The Works Constitution Act
//     (BetrVG) is quoted from the OFFICIAL ENGLISH TRANSLATION published by the Federal Ministry of
//     Justice at gesetze-im-internet.de. The Co-determination Act 1976 (MitbestG), the One-Third
//     Participation Act 2004 (DrittelbG), the Coal & Steel Co-determination Act 1951
//     (Montan-MitbestG) and the Collective Agreements Act (TVG) have NO official English text, so
//     they were read in the German original at gesetze-im-internet.de and the section numbers are
//     the real ones: MitbestG §§ 1, 7, 15, 27, 29, 33; DrittelbG § 1; Montan-MitbestG §§ 1, 4, 13;
//     TVG §§ 3, 4, 5. Basic Law Art. 9(3) is the official English translation.
//   * The distinction between INFORMATION (§ 90(1), § 92, § 106), CONSULTATION (§ 90(2), § 111) and
//     genuine CO-DETERMINATION (§ 87(1), 14 enumerated matters, deadlock resolved by a conciliation
//     committee whose award REPLACES agreement, § 87(2)) is the spine of Section 2. Those words are
//     not synonyms and the course refuses to blur them.
//   * THE CORRECTION THAT MATTERS: coverage in Germany does NOT mainly come from state extension.
//     Extension (Allgemeinverbindlicherklärung, TVG § 5) exists but OECD/AIAS describes it as
//     "rather exceptional, used in some industries only." Coverage comes from EMPLOYER-ASSOCIATION
//     MEMBERSHIP (employer-organisation density 65.7%, 2018) plus contractual reference clauses.
//     France extends; Germany does not. A course that says "extension" here is teaching France.
//   * EVERY figure carries a YEAR. Density 14.1% (2024) and adjusted bargaining coverage 49% (2024)
//     are OECD/AIAS ICTWSS. Coverage by region is Destatis (2023). Works-council reach is the IAB
//     Establishment Panel (2023) via ETUI. Board-level erosion is Sick (2024), Mitbestimmungsreport
//     Nr. 81. US comparators are BLS (2026, for 2025) — with the BLS's own shutdown caveat, exactly
//     as the anchor course states it.
//   * NOT ROMANTICISED. The erosion is a full section: coverage fell 25 points in the West since
//     1998; OT-Mitgliedschaft lets employers stay in the association and out of the agreement; only
//     ~60% of firms over 2,000 domestic employees have the parity board the 1976 Act nominally
//     requires; works councils exist in 7% of workplaces. And the empirical literature (Jäger,
//     Schoefer & Heining, 2021, QJE; Jäger, Noy & Schoefer, 2022, ILR Review) finds co-determination
//     to be MODEST in effect — which cuts against the boosters AND the doom-mongers, and the course
//     says so.
//   * REFUSALS, stated in-lesson rather than papered over: no reliable current count of
//     Montan-co-determined companies exists in the sources consulted (Hans-Böckler explicitly
//     excludes them from its tally), so the course gives no number. No strike-days statistic is
//     quoted, because none was retrieved from a primary source. No court case is cited by name for
//     the judge-made right to strike — the course says it is Bundesarbeitsgericht case law resting
//     on Basic Law Art. 9(3) and stops there rather than inventing a citation.

import type { AuthoredCourse } from "./authored-course";

export const LABOR_GERMANY_COURSE: AuthoredCourse = {
  title: "Germany: Workers on the Board",
  description:
    "Germany answers the question \"who decides?\" differently than any country an American student has ever seen — and the proof is a pair of numbers. About 14% of German workers belong to a union (2024). About half of them are covered by a collective agreement (2024). Those numbers are not in tension; they are the whole lesson. This course takes co-determination (Mitbestimmung) apart piece by piece: works councils elected by ALL employees under the Works Constitution Act, and the precise, unglamorous difference between a right to be informed, a right to be consulted, and a right to actually say no; workers holding half the seats on the supervisory board of a big company under the Co-determination Act of 1976 — and the casting vote that means \"half\" overstates it; the dual system of sectoral bargaining above the firm and the peace obligation that comes with it. Then the honest part: coverage has been falling for twenty-five years, most German workplaces have no works council at all, roughly 40% of the companies big enough to owe workers a parity board have engineered their way out of it, and the best economics finds co-determination's effects to be real but modest. Cited to the German statutes themselves, Destatis, the IAB, OECD/AIAS, ETUI and the Hans-Böckler-Stiftung. A country course in the Workers' Rights track — take \"The History of Unions: America and the World\" first.",
  lessons: [
    // ────────────── SECTION 1 · THE TWO NUMBERS ──────────────
    {
      slug: "germany-two-numbers",
      title: "1 · Two numbers that should not both be true",
      section: "Section 1 · The number that reframes everything",
      body: `Start with a puzzle. Here are four numbers. Two are German, two are American, and every one of them is real.

| | Germany | United States |
| --- | --- | --- |
| Share of workers who **belong to a union** (density) | **14.1%** (2024) | **10.0%** (2025) |
| Share of workers **covered by a collective agreement** | **49%** (2024) | **11.2%** (2025) |

*(Germany: OECD/AIAS ICTWSS database, country note for Germany. United States: Bureau of Labor Statistics [BLS], 2026 — the "covered" line is the BLS's "represented by a union" series, which counts members plus non-members covered by a union contract.)*

Read the table again slowly, because the first row is *boring* and the second row is *astonishing*.

**Row one.** Germany and the United States have roughly the same union membership rate. Germany's is higher, but it is the same order of magnitude — one worker in seven versus one in ten. If union membership were the thing that mattered, these two countries would look similar.

**Row two.** In the United States, the covered share (11.2%) is barely above the member share (10.0%). Coverage tracks membership, with a small gap for non-members inside a unionized bargaining unit. In Germany, the covered share is **roughly three and a half times the member share.** Tens of millions of German workers are working under the terms of a collective agreement they never voted for, negotiated by a union they never joined.

**That is not an anomaly. It is the design.** And it is the single most important idea in this course.

Here is why an American student will get this wrong if nobody warns them. In the United States, union density and union coverage are *nearly the same number*, because of how American bargaining works: a union wins an election at **one workplace**, and it bargains a contract for **that workplace**. Coverage is built one shop at a time out of members. So an American learns, correctly for America, that *coverage is what membership buys you* — and then carries that rule to Germany, where it is flatly false.

In Germany, coverage is not built out of members. It is built out of **employers**. Lesson 2 shows you exactly how, and it is a piece of plumbing, not a piece of culture.

**One honest caveat about the numbers, because a course that hides its caveats is selling something.** The BLS itself warns that its 2025 annual figures are 11-month averages that exclude October 2025 (the data were not collected during the federal government shutdown), so the 2025 US estimates are **not strictly comparable** with other years (BLS, 2026). And "collective bargaining coverage" is measured slightly differently by different bodies — Germany's own Federal Statistical Office (Destatis) and the IAB Establishment Panel both put German coverage in the high-40s to 50% range for 2022–2023, which is why you will see "49%," "50%," and "~half" used interchangeably by serious people. **The gap between 14 and 49 is far too large for any of that measurement noise to explain it.** That is the point.

:::reveal Germany's union membership rate (14.1%, 2024) is close to America's (10.0%, 2025). Its bargaining coverage (49%, 2024) is more than four times America's (11.2%, 2025). What does that tell you about where coverage comes from in Germany? ||| That coverage in Germany is not produced by workers joining unions. It is produced somewhere else — by the employer's side of the table. A German worker can be covered by a collective agreement without ever having joined anything, because the agreement attaches to the *employer*, not to the worker.

## Sources
- Bureau of Labor Statistics. (2026, February 18). *Union members — 2025* (USDL-26-0200). U.S. Department of Labor. https://www.bls.gov/news.release/pdf/union2.pdf
- OECD/AIAS. (n.d.). *ICTWSS database — country note: Germany*. Organisation for Economic Co-operation and Development. https://www.oecd.org/content/dam/oecd/en/data/datasets/oecd-aias-ictwss/Germany.pdf
- Statistisches Bundesamt. (n.d.). *Quality of employment: Branch-specific collective agreements* [2023 data]. https://www.destatis.de/EN/Themes/Labour/Labour-Market/Quality-Employment/Dimension5/5_1_BranchSpecificCollectiveAgreements.html`,
    },
    {
      slug: "germany-how-coverage-works",
      title: "2 · Where the coverage actually comes from (it is not what you think)",
      section: "Section 1 · The number that reframes everything",
      body: `The German collective agreement is called a **Tarifvertrag**, and the law that governs it is the **Collective Agreements Act** (*Tarifvertragsgesetz*, TVG). Two sections of that Act explain the whole 14-versus-49 puzzle.

**TVG § 3(1) — who is bound.** The Act says, in the German original, that the parties bound by a collective agreement are *"die Mitglieder der Tarifvertragsparteien"* — **the members of the bargaining parties** — plus any employer who signed the agreement itself.

Now look at who the bargaining parties are. On one side, an **industrial union** (IG Metall for metal and electrical, ver.di for services, IG BCE for mining/chemicals/energy). On the other side — and this is the part Americans have no equivalent for — an **employers' association** (*Arbeitgeberverband*), like Gesamtmetall in the metal industry. The union and the association negotiate one agreement for the whole **sector**, often region by region. That is a *Flächentarifvertrag*, a "area-wide" or sectoral agreement.

**So: when a company joins the employers' association, the company becomes bound by whatever that association signs.** Not the company's workers. The *company*.

**How many German employers are in an association? A lot.** OECD/AIAS puts **employer-organisation density at 65.7% (2018)** — that is, employers covering about two-thirds of employees belong to one. Compare that to the 14.1% of *workers* who belong to a union (2024), and the mystery dissolves. **Germany's coverage rate is high because the employers are organized, not because the workers are.**

**Then a second step, which is where the last piece clicks.** Strictly, TVG § 4(1) says the agreement's terms apply *"zwischen den beiderseits Tarifgebundenen"* — between parties bound **on both sides**. Read literally, a non-union worker at a member company is not legally entitled to the agreement. In practice German employers hand the agreement's terms to **everyone** in the firm, usually through a **reference clause** written into each individual employment contract. Why would an employer volunteer that? Think about it for ten seconds and you will get there yourself: if the union contract applied *only to union members*, the union would have the greatest recruiting pitch in industrial history. Paying non-members less than members is how you build a union. So employers don't.

**And now the correction that most summaries of Germany get wrong.** You may have heard that European coverage is high because governments **extend** collective agreements by law to non-member firms. That is true of **France**. It is **not** how Germany does it. Germany *has* an extension power — the **Allgemeinverbindlicherklärung** under **TVG § 5**, by which the Federal Ministry of Labour and Social Affairs, acting in agreement with a committee of employer and union peak organisations, can declare an agreement generally binding. But OECD/AIAS's own country note describes German extension as **"rather exceptional, used in some industries only,"** citing high thresholds and employer veto power in the committee. Political scientists have written an entire paper on precisely this — *why Germany abstains* from the extension tool its neighbours lean on (Günther & Höpner, 2023).

**So the German mechanism, in one line:** *the employer joins the association → the association signs the sectoral agreement → the employer is bound → the employer applies it to everyone in the building.* No worker had to join anything. No minister had to sign anything.

Hold onto that, because it also tells you exactly **how the system breaks** — and it does break. If coverage rides on employers staying in the association, then coverage collapses the moment employers find a way to be in the association *without* being bound by the agreement. They found one. Section 5.

:::reveal Germany has a legal power to extend a collective agreement to firms that never signed it (TVG § 5). So why is it wrong to say that extension is what produces Germany's ~49% coverage? ||| Because Germany barely uses it. OECD/AIAS calls German extension "rather exceptional, used in some industries only." Coverage comes overwhelmingly from employers voluntarily belonging to employers' associations (employer-organisation density 65.7%, 2018), which binds them under TVG § 3(1) — plus contractual reference clauses that pass the terms on to non-members. Heavy use of statutory extension is the FRENCH model, not the German one.

## Sources
- Günther, W., & Höpner, M. (2023). Why does Germany abstain from statutory bargaining extensions? Explaining the exceptional German erosion of collective wage bargaining. *Economic and Industrial Democracy, 44*(1), 88–108. https://doi.org/10.1177/0143831X211065783
- OECD/AIAS. (n.d.). *ICTWSS database — country note: Germany*. https://www.oecd.org/content/dam/oecd/en/data/datasets/oecd-aias-ictwss/Germany.pdf
- Tarifvertragsgesetz [Collective Agreements Act] (Germany), §§ 3, 4, 5. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/tvg/`,
      recallContent: [
        {
          prompt: "German union density and German bargaining coverage, with years and sources.",
          answer:
            "Density 14.1% (2024) and adjusted bargaining coverage 49% (2024), both OECD/AIAS ICTWSS. Coverage is over three times density.",
        },
        {
          prompt: "Under TVG § 3(1), who is bound by a German sectoral collective agreement?",
          answer:
            "The MEMBERS of the bargaining parties — i.e. the employers who belong to the employers' association, and the workers who belong to the union — plus any employer that signed directly. The binding runs through the employer's membership, which is why coverage far exceeds union membership.",
        },
      ],
    },
    {
      slug: "germany-the-four-questions-in-germany",
      title: "3 · The four questions, asked of Germany",
      section: "Section 1 · The number that reframes everything",
      body: `If you have taken **The History of Unions: America and the World** — the anchor course of this track — you already own the tool you need. It ends by handing you four questions you can ask of any country on earth:

1. **Who is allowed to organise?**
2. **Who is excluded?**
3. **Who bargains with whom, and at what level?**
4. **What happens to you if you try?**

*(If you haven't taken it: you can follow this course without it, but take it after. It is where the comparative frame comes from, and this course does not repeat it.)*

Here are Germany's answers, in advance. Everything after this lesson is the detail.

**Q1 — Who is allowed to organise?** Essentially everyone. **Article 9(3) of the Basic Law** (*Grundgesetz*), Germany's constitution, guarantees "the right to form associations to safeguard and improve working and economic conditions… to every individual and to every occupation or profession," and then says something remarkable: **"Agreements that restrict or seek to impair this right shall be null and void; measures directed to this end shall be unlawful"** (Basic Law, Art. 9(3), official English translation). Not "the employer commits an unfair labor practice." **Null and void.** The freedom to combine is a constitutional right that runs against private parties, not only against the state. Germany ratified ILO Convention No. 87 (freedom of association) on **20 March 1957** and Convention No. 98 (right to organise and bargain collectively) on **8 June 1956** (International Labour Organization [ILO], NORMLEX).

**Q2 — Who is excluded?** Fewer people than in the US, but the exclusions are real and you should know them before anybody sells you a fairy tale. **Executive staff** (*leitende Angestellte*) are outside the Works Constitution Act (**BetrVG § 5(3)**). So are **religious communities and their charitable and educational institutions**, *"irrespective of their legal form"* (**BetrVG § 118(2)**) — and in Germany that carve-out is not small, because the churches' welfare organisations are among the country's largest employers. Compare that to the anchor course's account of the **National Labor Relations Act's 1935 exclusion of agricultural and domestic workers**: a class of worker defined *by statute* as outside the system everyone else is in. Different country, different class of worker, **same mechanism**. Every labor law has a door, and every door has people standing outside it.

**Q3 — Who bargains with whom, and at what level?** This is the question Germany answers differently, and it answers it **twice**:
- **Above the firm:** an industrial union and an employers' association, bargaining for a whole **sector** (lesson 2). This is where pay comes from.
- **Inside the firm:** a **works council** (*Betriebsrat*) — a statutory body elected by **all** the employees, which is **not the union** — with real legal power over how the workplace is run (Section 2), and, in big companies, **employee representatives holding half the seats on the supervisory board** (Section 3).

Germans call that two-channel structure the **dual system** (*duales System*), and it is the thing this whole course is about.

**Q4 — What happens to you if you try?** In Germany, obstructing a works-council election or interfering with a works council is a **criminal offence** punishable by up to **one year's imprisonment or a fine** (**BetrVG § 119**). Read that again — not a fine on the company, a **crime**. Whether that is actually *enforced* is a different and much less flattering question, and lesson 7 asks it honestly.

:::reveal Germany's Basic Law says private agreements that restrict the right to combine are "null and void." Why is that a stronger statement than "the employer has committed an unfair labor practice"? ||| Because it strikes the agreement down by operation of law rather than creating a claim someone has to win. The constitutional right runs directly against private parties, not only against the state — so a contract term that impairs the freedom to organise has no legal effect at all, without any tribunal having to order a remedy first.

## Sources
- Basic Law for the Federal Republic of Germany, Art. 9(3) [official English translation]. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/englisch_gg/englisch_gg.html
- Betriebsverfassungsgesetz [Works Constitution Act] (Germany), §§ 5(3), 118(2), 119 [official English translation]. https://www.gesetze-im-internet.de/englisch_betrvg/englisch_betrvg.html
- International Labour Organization. (n.d.). *Ratifications for Germany*. NORMLEX. https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:11200:0::NO::P11200_COUNTRY_ID:102643`,
      recallContent: [
        {
          prompt: "Name the two channels of the German 'dual system.'",
          answer:
            "Channel one: sectoral collective bargaining, ABOVE the firm — an industrial union and an employers' association, mainly over pay. Channel two: the works council INSIDE the firm (plus, in large companies, employee representatives on the supervisory board).",
        },
        {
          prompt: "Who is carved out of the German Works Constitution Act?",
          answer:
            "Executive staff (leitende Angestellte, § 5(3)), and religious communities plus their charitable and educational institutions, whatever their legal form (§ 118(2)).",
        },
      ],
    },
    {
      slug: "germany-quiz-1",
      title: "Section 1 quiz · Density, coverage, and the plumbing",
      section: "Section 1 · The number that reframes everything",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was Germany's trade union density in 2024, according to OECD/AIAS?",
            options: ["About 14%", "About 30%", "About 50%", "About 65%"],
            correctIndex: 0,
            explanation:
              "14.1% in 2024 (OECD/AIAS ICTWSS). That is close to the US rate — which is exactly why the coverage figure is so surprising.",
            sourceLessonSlug: "germany-two-numbers",
          },
          {
            prompt: "What was Germany's collective bargaining coverage in 2024, according to OECD/AIAS?",
            options: ["About 14%", "About 25%", "About 49%", "About 90%"],
            correctIndex: 2,
            explanation:
              "49% (2024, OECD/AIAS adjusted bargaining coverage rate). Roughly three and a half times the density rate.",
            sourceLessonSlug: "germany-two-numbers",
          },
          {
            prompt:
              "An American student sees that German density is ~14% and concludes German workers must have weak protections. What has the student got wrong?",
            options: [
              "Nothing — density is the only thing that matters",
              "They have assumed coverage is built out of members, which is true in the US and false in Germany",
              "German density is actually 60%",
              "Germany has no collective agreements",
            ],
            correctIndex: 1,
            explanation:
              "In the US, coverage is built one workplace at a time out of members, so density ≈ coverage. In Germany coverage attaches to the EMPLOYER, so the two numbers come apart.",
            sourceLessonSlug: "germany-two-numbers",
          },
          {
            prompt: "Under TVG § 3(1), who is bound by a German collective agreement?",
            options: [
              "Every worker in the country",
              "The members of the bargaining parties — including the employers who belong to the employers' association",
              "Only workers who voted for it",
              "Only firms with more than 2,000 employees",
            ],
            correctIndex: 1,
            explanation:
              "TVG § 3(1): the bound parties are the members of the bargaining parties, plus any employer that is itself a party. Employer-association membership is the hinge.",
            sourceLessonSlug: "germany-how-coverage-works",
          },
          {
            prompt: "What is an Arbeitgeberverband, and why does it matter for coverage?",
            options: [
              "A German union; it recruits members",
              "An employers' association; when a company joins it, the company is bound by the sectoral agreement the association signs",
              "A government agency that sets wages",
              "A works council for managers",
            ],
            correctIndex: 1,
            explanation:
              "It is the employers' side of the sectoral bargaining table. Employer-organisation density was 65.7% in 2018 — that, not union membership, is what carries German coverage.",
            sourceLessonSlug: "germany-how-coverage-works",
          },
          {
            prompt:
              "True or false: Germany's high bargaining coverage is mainly produced by the government legally extending agreements to non-member firms.",
            options: [
              "True — that is exactly how it works",
              "False — Germany has that power (TVG § 5) but OECD/AIAS calls its use 'rather exceptional'; coverage comes from employer-association membership",
              "True — every German agreement is automatically extended",
              "False — Germany has no extension power at all",
            ],
            correctIndex: 1,
            explanation:
              "Heavy statutory extension is the FRENCH model. Germany's Allgemeinverbindlicherklärung under TVG § 5 exists but is used sparingly (Günther & Höpner, 2023).",
            sourceLessonSlug: "germany-how-coverage-works",
          },
          {
            prompt:
              "A German worker who has never joined a union works at a company that belongs to an employers' association. Is she likely to be paid under the sectoral collective agreement?",
            options: [
              "No — the agreement only binds union members",
              "Yes — the employer is bound and in practice applies the terms to everyone, usually via a reference clause in the individual contract",
              "Only if a court orders it",
              "Only if more than half her colleagues are union members",
            ],
            correctIndex: 1,
            explanation:
              "Strictly, TVG § 4(1) binds where BOTH sides are bound — but employers extend the terms to everyone, because paying non-members less would be the union's best recruiting pitch.",
            sourceLessonSlug: "germany-how-coverage-works",
          },
          {
            prompt: "What is the German 'dual system'?",
            options: [
              "Two competing union federations",
              "Sectoral bargaining ABOVE the firm (union ↔ employers' association) plus works councils INSIDE the firm",
              "Two houses of parliament voting on wages",
              "A system of two minimum wages, east and west",
            ],
            correctIndex: 1,
            explanation:
              "Two channels: the union bargains the sector; the works council runs the shop floor. They are different bodies with different powers.",
            sourceLessonSlug: "germany-the-four-questions-in-germany",
          },
          {
            prompt: "What does Article 9(3) of Germany's Basic Law say about agreements that restrict the right to organise?",
            options: [
              "They are permitted if both parties consent",
              "They are null and void, and measures directed to that end are unlawful",
              "They must be reviewed by the labour ministry",
              "They are punishable by a fine of €10,000",
            ],
            correctIndex: 1,
            explanation:
              "The constitutional right runs against private parties: the agreement has no legal effect, rather than merely giving rise to a claim.",
            sourceLessonSlug: "germany-the-four-questions-in-germany",
          },
          {
            prompt: "Which groups are excluded from the German Works Constitution Act?",
            options: [
              "Part-time workers and apprentices",
              "Executive staff (§ 5(3)), and religious communities and their charitable/educational institutions (§ 118(2))",
              "Anyone under 25",
              "Nobody — it covers every worker in Germany",
            ],
            correctIndex: 1,
            explanation:
              "Every labor law has a door, and every door has people outside it — the German exclusions run to executives and the church-run welfare sector, which is a very large employer.",
            sourceLessonSlug: "germany-the-four-questions-in-germany",
          },
          {
            prompt: "When did Germany ratify ILO Convention No. 87 (freedom of association)?",
            options: ["1919", "8 June 1956", "20 March 1957", "1976"],
            correctIndex: 2,
            explanation:
              "20 March 1957 (ILO NORMLEX). Convention No. 98 came slightly earlier, on 8 June 1956.",
            sourceLessonSlug: "germany-the-four-questions-in-germany",
          },
          {
            prompt:
              "The BLS warns that its 2025 US union figures are 11-month averages excluding October 2025. Why does the course tell you that?",
            options: [
              "Because it means the US numbers are fabricated",
              "Because a course that hides its caveats is selling something — the figures are not strictly comparable year-to-year, though the gap with Germany is far too big for that to explain",
              "Because the German numbers are also 11-month averages",
              "Because BLS retracted the release",
            ],
            correctIndex: 1,
            explanation:
              "October 2025 data were not collected during the federal government shutdown. Flag the caveat; then note it changes nothing about a 14-vs-49 gap.",
            sourceLessonSlug: "germany-two-numbers",
          },
          {
            prompt: "Which of the four questions from the anchor course does Germany answer most distinctively?",
            options: [
              "Question 1 — who is allowed to organise",
              "Question 2 — who is excluded",
              "Question 3 — who bargains with whom, and at what level",
              "Question 4 — what happens to you if you try",
            ],
            correctIndex: 2,
            explanation:
              "Germany answers Question 3 twice: sectorally, above the firm, AND structurally, inside it. That double answer is co-determination.",
            sourceLessonSlug: "germany-the-four-questions-in-germany",
          },
          {
            prompt: "What is a Flächentarifvertrag?",
            options: [
              "A single-company contract",
              "An area-wide / sectoral collective agreement between an industrial union and an employers' association",
              "A works agreement between an employer and a works council",
              "A government wage decree",
            ],
            correctIndex: 1,
            explanation:
              "The area-wide sectoral agreement is the workhorse of German bargaining — one deal covering an industry, often region by region.",
            sourceLessonSlug: "germany-how-coverage-works",
          },
          {
            prompt:
              "Germany's coverage rides on employers staying inside employers' associations. What does that immediately predict about how the system could break?",
            options: [
              "It breaks if workers stop joining unions",
              "It breaks if employers find a way to belong to the association without being bound by the agreement",
              "It breaks if the government stops extending agreements",
              "It cannot break — it is written into the constitution",
            ],
            correctIndex: 1,
            explanation:
              "Exactly what happened: 'OT-Mitgliedschaft' — membership without collective-bargaining obligation. Section 5.",
            sourceLessonSlug: "germany-how-coverage-works",
          },
        ],
      },
    },
  ],
};
