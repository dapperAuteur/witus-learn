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
    "Germany answers the question \"who decides?\" differently than any country an American student has ever seen, and the proof is a pair of numbers. About 14% of German workers belong to a union (2024). About half of them are covered by a collective agreement (2024). Those numbers are not in tension; they are the whole lesson. This course takes co-determination (Mitbestimmung) apart piece by piece: works councils elected by ALL employees under the Works Constitution Act, and the precise, unglamorous difference between a right to be informed, a right to be consulted, and a right to actually say no; workers holding half the seats on the supervisory board of a big company under the Co-determination Act of 1976, and the casting vote that means \"half\" overstates it; the dual system of sectoral bargaining above the firm and the peace obligation that comes with it. Then the honest part: coverage has been falling for twenty-five years, most German workplaces have no works council at all, roughly 40% of the companies big enough to owe workers a parity board have engineered their way out of it, and the best economics finds co-determination's effects to be real but modest. Cited to the German statutes themselves, Destatis, the IAB, OECD/AIAS, ETUI and the Hans-Böckler-Stiftung. A country course in the Workers' Rights track, take \"The History of Unions: America and the World\" first.",
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

*(Germany: OECD/AIAS ICTWSS database, country note for Germany. United States: Bureau of Labor Statistics [BLS], 2026, the "covered" line is the BLS's "represented by a union" series, which counts members plus non-members covered by a union contract.)*

Read the table again slowly, because the first row is *boring* and the second row is *astonishing*.

**Row one.** Germany and the United States have roughly the same union membership rate. Germany's is higher, but it is the same order of magnitude, one worker in seven versus one in ten. If union membership were the thing that mattered, these two countries would look similar.

**Row two.** In the United States, the covered share (11.2%) is barely above the member share (10.0%). Coverage tracks membership, with a small gap for non-members inside a unionized bargaining unit. In Germany, the covered share is **roughly three and a half times the member share.** Tens of millions of German workers are working under the terms of a collective agreement they never voted for, negotiated by a union they never joined.

**That is not an anomaly. It is the design.** And it is the single most important idea in this course.

Here is why an American student will get this wrong if nobody warns them. In the United States, union density and union coverage are *nearly the same number*, because of how American bargaining works: a union wins an election at **one workplace**, and it bargains a contract for **that workplace**. Coverage is built one shop at a time out of members. So an American learns, correctly for America, that *coverage is what membership buys you*, and then carries that rule to Germany, where it is flatly false.

In Germany, coverage is not built out of members. It is built out of **employers**. Lesson 2 shows you exactly how, and it is a piece of plumbing, not a piece of culture.

**One honest caveat about the numbers, because a course that hides its caveats is selling something.** The BLS itself warns that its 2025 annual figures are 11-month averages that exclude October 2025 (the data were not collected during the federal government shutdown), so the 2025 US estimates are **not strictly comparable** with other years (BLS, 2026). And "collective bargaining coverage" is measured slightly differently by different bodies, Germany's own Federal Statistical Office (Destatis) and the IAB Establishment Panel both put German coverage in the high-40s to 50% range for 2022-2023, which is why you will see "49%," "50%," and "~half" used interchangeably by serious people. **The gap between 14 and 49 is far too large for any of that measurement noise to explain it.** That is the point.

:::reveal Germany's union membership rate (14.1%, 2024) is close to America's (10.0%, 2025). Its bargaining coverage (49%, 2024) is more than four times America's (11.2%, 2025). What does that tell you about where coverage comes from in Germany? ||| That coverage in Germany is not produced by workers joining unions. It is produced somewhere else, by the employer's side of the table. A German worker can be covered by a collective agreement without ever having joined anything, because the agreement attaches to the *employer*, not to the worker.

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

**TVG § 3(1), who is bound.** The Act says, in the German original, that the parties bound by a collective agreement are *"die Mitglieder der Tarifvertragsparteien"*, **the members of the bargaining parties**, plus any employer who signed the agreement itself.

Now look at who the bargaining parties are. On one side, an **industrial union** (IG Metall for metal and electrical, ver.di for services, IG BCE for mining/chemicals/energy). On the other side, and this is the part Americans have no equivalent for, an **employers' association** (*Arbeitgeberverband*), like Gesamtmetall in the metal industry. The union and the association negotiate one agreement for the whole **sector**, often region by region. That is a *Flächentarifvertrag*, a "area-wide" or sectoral agreement.

**So: when a company joins the employers' association, the company becomes bound by whatever that association signs.** Not the company's workers. The *company*.

**How many German employers are in an association? A lot.** OECD/AIAS puts **employer-organisation density at 65.7% (2018)**, that is, employers covering about two-thirds of employees belong to one. Compare that to the 14.1% of *workers* who belong to a union (2024), and the mystery dissolves. **Germany's coverage rate is high because the employers are organized, not because the workers are.**

**Then a second step, which is where the last piece clicks.** Strictly, TVG § 4(1) says the agreement's terms apply *"zwischen den beiderseits Tarifgebundenen"*, between parties bound **on both sides**. Read literally, a non-union worker at a member company is not legally entitled to the agreement. In practice German employers hand the agreement's terms to **everyone** in the firm, usually through a **reference clause** written into each individual employment contract. Why would an employer volunteer that? Think about it for ten seconds and you will get there yourself: if the union contract applied *only to union members*, the union would have the greatest recruiting pitch in industrial history. Paying non-members less than members is how you build a union. So employers don't.

**And now the correction that most summaries of Germany get wrong.** You may have heard that European coverage is high because governments **extend** collective agreements by law to non-member firms. That is true of **France**. It is **not** how Germany does it. Germany *has* an extension power, the **Allgemeinverbindlicherklärung** under **TVG § 5**, by which the Federal Ministry of Labour and Social Affairs, acting in agreement with a committee of employer and union peak organisations, can declare an agreement generally binding. But OECD/AIAS's own country note describes German extension as **"rather exceptional, used in some industries only,"** citing high thresholds and employer veto power in the committee. Political scientists have written an entire paper on precisely this, *why Germany abstains* from the extension tool its neighbours lean on (Günther & Höpner, 2023).

**So the German mechanism, in one line:** *the employer joins the association → the association signs the sectoral agreement → the employer is bound → the employer applies it to everyone in the building.* No worker had to join anything. No minister had to sign anything.

Hold onto that, because it also tells you exactly **how the system breaks**, and it does break. If coverage rides on employers staying in the association, then coverage collapses the moment employers find a way to be in the association *without* being bound by the agreement. They found one. Section 5.

:::reveal Germany has a legal power to extend a collective agreement to firms that never signed it (TVG § 5). So why is it wrong to say that extension is what produces Germany's ~49% coverage? ||| Because Germany barely uses it. OECD/AIAS calls German extension "rather exceptional, used in some industries only." Coverage comes overwhelmingly from employers voluntarily belonging to employers' associations (employer-organisation density 65.7%, 2018), which binds them under TVG § 3(1), plus contractual reference clauses that pass the terms on to non-members. Heavy use of statutory extension is the FRENCH model, not the German one.

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
            "The MEMBERS of the bargaining parties, i.e. the employers who belong to the employers' association, and the workers who belong to the union, plus any employer that signed directly. The binding runs through the employer's membership, which is why coverage far exceeds union membership.",
        },
      ],
    },
    {
      slug: "germany-the-four-questions-in-germany",
      title: "3 · The four questions, asked of Germany",
      section: "Section 1 · The number that reframes everything",
      body: `If you have taken **The History of Unions: America and the World**, the anchor course of this track, you already own the tool you need. It ends by handing you four questions you can ask of any country on earth:

1. **Who is allowed to organise?**
2. **Who is excluded?**
3. **Who bargains with whom, and at what level?**
4. **What happens to you if you try?**

*(If you haven't taken it: you can follow this course without it, but take it after. It is where the comparative frame comes from, and this course does not repeat it.)*

Here are Germany's answers, in advance. Everything after this lesson is the detail.

**Q1, Who is allowed to organise?** Essentially everyone. **Article 9(3) of the Basic Law** (*Grundgesetz*), Germany's constitution, guarantees "the right to form associations to safeguard and improve working and economic conditions… to every individual and to every occupation or profession," and then says something remarkable: **"Agreements that restrict or seek to impair this right shall be null and void; measures directed to this end shall be unlawful"** (Basic Law, Art. 9(3), official English translation). Not "the employer commits an unfair labor practice." **Null and void.** The freedom to combine is a constitutional right that runs against private parties, not only against the state. Germany ratified ILO Convention No. 87 (freedom of association) on **20 March 1957** and Convention No. 98 (right to organise and bargain collectively) on **8 June 1956** (International Labour Organization [ILO], NORMLEX).

**Q2, Who is excluded?** Fewer people than in the US, but the exclusions are real and you should know them before anybody sells you a fairy tale. **Executive staff** (*leitende Angestellte*) are outside the Works Constitution Act (**BetrVG § 5(3)**). So are **religious communities and their charitable and educational institutions**, *"irrespective of their legal form"* (**BetrVG § 118(2)**), and in Germany that carve-out is not small, because the churches' welfare organisations are among the country's largest employers. Compare that to the anchor course's account of the **National Labor Relations Act's 1935 exclusion of agricultural and domestic workers**: a class of worker defined *by statute* as outside the system everyone else is in. Different country, different class of worker, **same mechanism**. Every labor law has a door, and every door has people standing outside it.

**Q3, Who bargains with whom, and at what level?** This is the question Germany answers differently, and it answers it **twice**:
- **Above the firm:** an industrial union and an employers' association, bargaining for a whole **sector** (lesson 2). This is where pay comes from.
- **Inside the firm:** a **works council** (*Betriebsrat*), a statutory body elected by **all** the employees, which is **not the union**, with real legal power over how the workplace is run (Section 2), and, in big companies, **employee representatives holding half the seats on the supervisory board** (Section 3).

Germans call that two-channel structure the **dual system** (*duales System*), and it is the thing this whole course is about.

**Q4, What happens to you if you try?** In Germany, obstructing a works-council election or interfering with a works council is a **criminal offence** punishable by up to **one year's imprisonment or a fine** (**BetrVG § 119**). Read that again, not a fine on the company, a **crime**. Whether that is actually *enforced* is a different and much less flattering question, and lesson 7 asks it honestly.

:::reveal Germany's Basic Law says private agreements that restrict the right to combine are "null and void." Why is that a stronger statement than "the employer has committed an unfair labor practice"? ||| Because it strikes the agreement down by operation of law rather than creating a claim someone has to win. The constitutional right runs directly against private parties, not only against the state, so a contract term that impairs the freedom to organise has no legal effect at all, without any tribunal having to order a remedy first.

## Sources
- Basic Law for the Federal Republic of Germany, Art. 9(3) [official English translation]. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/englisch_gg/englisch_gg.html
- Betriebsverfassungsgesetz [Works Constitution Act] (Germany), §§ 5(3), 118(2), 119 [official English translation]. https://www.gesetze-im-internet.de/englisch_betrvg/englisch_betrvg.html
- International Labour Organization. (n.d.). *Ratifications for Germany*. NORMLEX. https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:11200:0::NO::P11200_COUNTRY_ID:102643`,
      recallContent: [
        {
          prompt: "Name the two channels of the German 'dual system.'",
          answer:
            "Channel one: sectoral collective bargaining, ABOVE the firm, an industrial union and an employers' association, mainly over pay. Channel two: the works council INSIDE the firm (plus, in large companies, employee representatives on the supervisory board).",
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
              "14.1% in 2024 (OECD/AIAS ICTWSS). That is close to the US rate, which is exactly why the coverage figure is so surprising.",
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
              "Nothing, density is the only thing that matters",
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
              "The members of the bargaining parties, including the employers who belong to the employers' association",
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
              "It is the employers' side of the sectoral bargaining table. Employer-organisation density was 65.7% in 2018, that, not union membership, is what carries German coverage.",
            sourceLessonSlug: "germany-how-coverage-works",
          },
          {
            prompt:
              "True or false: Germany's high bargaining coverage is mainly produced by the government legally extending agreements to non-member firms.",
            options: [
              "True, that is exactly how it works",
              "False, Germany has that power (TVG § 5) but OECD/AIAS calls its use 'rather exceptional'; coverage comes from employer-association membership",
              "True, every German agreement is automatically extended",
              "False, Germany has no extension power at all",
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
              "No, the agreement only binds union members",
              "Yes, the employer is bound and in practice applies the terms to everyone, usually via a reference clause in the individual contract",
              "Only if a court orders it",
              "Only if more than half her colleagues are union members",
            ],
            correctIndex: 1,
            explanation:
              "Strictly, TVG § 4(1) binds where BOTH sides are bound, but employers extend the terms to everyone, because paying non-members less would be the union's best recruiting pitch.",
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
              "Nobody, it covers every worker in Germany",
            ],
            correctIndex: 1,
            explanation:
              "Every labor law has a door, and every door has people outside it, the German exclusions run to executives and the church-run welfare sector, which is a very large employer.",
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
              "Because a course that hides its caveats is selling something, the figures are not strictly comparable year-to-year, though the gap with Germany is far too big for that to explain",
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
              "Question 1, who is allowed to organise",
              "Question 2, who is excluded",
              "Question 3, who bargains with whom, and at what level",
              "Question 4, what happens to you if you try",
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
              "The area-wide sectoral agreement is the workhorse of German bargaining, one deal covering an industry, often region by region.",
            sourceLessonSlug: "germany-how-coverage-works",
          },
          {
            prompt:
              "Germany's coverage rides on employers staying inside employers' associations. What does that immediately predict about how the system could break?",
            options: [
              "It breaks if workers stop joining unions",
              "It breaks if employers find a way to belong to the association without being bound by the agreement",
              "It breaks if the government stops extending agreements",
              "It cannot break, it is written into the constitution",
            ],
            correctIndex: 1,
            explanation:
              "Exactly what happened: 'OT-Mitgliedschaft', membership without collective-bargaining obligation. Section 5.",
            sourceLessonSlug: "germany-how-coverage-works",
          },
        ],
      },
    },

    // ────────────── SECTION 2 · CHANNEL ONE: THE WORKS COUNCIL ──────────────
    {
      slug: "germany-works-council-what-it-is",
      title: "4 · The works council is not the union",
      section: "Section 2 · Channel one, the works council (Betriebsrat)",
      body: `The **works council** (*Betriebsrat*) is the part of the German system Americans consistently misunderstand, and the misunderstanding is always the same one: **people assume it is the union's branch office inside the company. It is not.**

**What the statute actually says.** The **Works Constitution Act** (*Betriebsverfassungsgesetz*, BetrVG), which the German Ministry of Justice publishes in an official English translation, so you can read it yourself, opens like this:

> "Works councils are elected in all establishments that normally have **five or more permanent employees** with voting rights, including three who are eligible." (BetrVG, § 1(1))

Five people. Not five hundred. **Any German workplace with five employees can have one.**

**Now the four facts that make it a genuinely different object from anything in US law:**

**1. It is elected by *all* the employees, not by union members.** Every employee in the establishment votes, whether or not they belong to a union, and whether or not any union exists there at all. A works council can be, and often is, entirely composed of people who have never joined anything.

**2. It is a creature of statute, not of a contract.** In the United States, a union's rights inside a workplace come from a contract it had to *win*, an election, then a negotiation. A German works council's rights come from **an Act of Parliament**. Nobody has to win them. They are simply there, in the law, waiting for five employees to hold an election.

**3. It is unpaid, and the employer pays for it anyway.** "The post of member of the works council is **unpaid**" (§ 37(1)), you don't get a salary for it. But you are "released from your work duties **without loss of pay** to the extent necessary for the proper performance of your functions" (§ 37(2)), and **"the costs of the election are borne by the employer"** (§ 20(3)). Read those together: the law obliges the company to fund the body that will spend the next four years arguing with it. The regular term is **four years** (§ 21).

**4. It cannot strike.** We will come back to this in Section 4, because it is the deal at the heart of the whole design. § 74(2) is blunt: **"Industrial action between the employer and the works council is unlawful."**

**So what *is* the union's relationship to it?** Informal and enormous. Unions run the training, supply the legal support, and put up candidates, and in practice a large share of works councillors in unionised sectors *are* union members. But that is sociology, not law. **Legally, the works council is the workforce's body, not the union's.** The union bargains the sector from outside; the works council governs the workplace from inside. Two channels. Section 4 shows you the seam where they meet.

**And the exclusions, so nobody sells you the fairy-tale version.** **Executive staff** (*leitende Angestellte*) are outside the Act (§ 5(3)), they get a separate representative committee. And under **§ 118(2)**, the Act **"does not apply to religious communities or to their charitable and educational institutions irrespective of their legal form."** In a country where the churches' welfare arms are among the largest employers, that is not a footnote. § 118(1) also limits the Act's reach in "tendency" establishments, political, union, religious, charitable, educational, scientific, artistic, and news/opinion organisations.

:::reveal An American hears "works council" and pictures the local union chapter. Give the two sharpest reasons that picture is wrong. ||| (1) It is elected by ALL employees, not by union members, it can exist, and frequently does, in a workplace with no union at all. (2) Its powers come from a statute (the BetrVG), not from a contract the union had to win at the bargaining table. It is the workforce's statutory body, not the union's branch.

## Sources
- Betriebsverfassungsgesetz [Works Constitution Act] (Germany), §§ 1, 5(3), 20(3), 21, 37, 74(2), 118 [official English translation]. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/englisch_betrvg/englisch_betrvg.html`,
    },
    {
      slug: "germany-three-tiers",
      title: "5 · Informed, consulted, or actually consulted? The three tiers",
      section: "Section 2 · Channel one, the works council (Betriebsrat)",
      body: `**This is the most important lesson in Section 2, and it turns on a distinction that sloppy writing destroys.** "Information," "consultation," and "co-determination" are **not** three words for the same thing. They are three completely different amounts of power, and the German statute is scrupulous about which is which. If you can hold these apart, you can read any country's labour law and immediately see how much a worker representative body can actually *do*.

Here is the ladder, with the sections that put each rung there.

| Tier | What it means | The test | Where it lives in the BetrVG |
| --- | --- | --- | --- |
| **Information** | The employer must **tell** you. | Can it act without telling you? **No.** Can it act after telling you? **Yes.** | § 90(1), § 92(1), § 106 |
| **Consultation** | The employer must **discuss** it with you, in good time, and genuinely consider your objections. | Can it act over your objection? **Yes**, once it has really consulted. | § 90(2), § 92(1), § 111 |
| **Co-determination** (*Mitbestimmung*) | The employer **cannot act without your agreement**. | Can it act over your objection? **No.** | **§ 87(1)** |

**Tier 1, Information.** Under **§ 90(1)** the employer "has to inform the works council **in due time**" of plans concerning premises, technical plants, "working procedures and operations **including the use of artificial intelligence**," and jobs, and hand over the documents. Under **§ 106**, every company with more than 100 permanent employees must have a **finance committee** (*Wirtschaftsausschuss*), which the employer must inform "in full and in good time of the financial affairs of the company." Real, and not nothing: you cannot fight a plan you have never seen. But information is not a veto.

**Tier 2, Consultation.** **§ 90(2)** requires the employer to "**consult** the works council in good time on the action envisaged and its effects on the employees… **so that suggestions and objections on the part of the works council can be taken into account.**" That is a genuine obligation, it must happen early enough to matter, not after the decision. But read the sentence one more time: *taken into account*. **The employer must listen. The employer may then go ahead.**

**Tier 3, Co-determination. This is the one with teeth**, and the statute makes you earn it by listing exactly where it applies. **§ 87(1)**: "The works council has a **right of co-determination** in the following matters in so far as they are not prescribed by legislation or collective agreement", and then **fourteen numbered items**, including:

- **the rules of operation** of the establishment and the conduct of employees in it (§ 87(1) no. 1);
- **the start and end of the daily working hours**, breaks, and how hours are distributed across the week (no. 2);
- **temporary reduction or extension of the hours normally worked**, which is how short-time working gets agreed (no. 3);
- the **time, place and form of payment** of remuneration (no. 4);
- **holiday principles and the leave schedule** (no. 5);
- **"the introduction and use of technical devices designed to monitor the behaviour or performance of the employees"** (no. 6), the surveillance clause, and the reason a German employer cannot simply install monitoring software one morning;
- **accident prevention and health protection** arrangements (no. 7);
- **remuneration arrangements in the establishment**, including principles of remuneration and new pay methods (no. 10) and **piece and bonus rates** (no. 11);
- **principles governing group work** (no. 13);
- **the structuring of mobile work** performed by information and communication technology (no. 14), i.e., remote work.

**And here is the sentence that converts it from a nice idea into power.** § 87(2): *"If no agreement can be reached on a matter covered by the preceding paragraph, the **conciliation committee** makes a decision. **The award of the conciliation committee takes the place of an agreement** between the employer and the works council."*

Stop and appreciate what that does. Deadlock does **not** default to the employer. Deadlock goes to a **conciliation committee** (*Einigungsstelle*), an equal number of assessors from each side plus an impartial chair the parties agree on, and **whatever the committee decides simply *is* the rule**. The employer cannot wait the works council out, and cannot break the tie by being the boss. **That is what makes it co-determination and not consultation.**

**Now read the chapeau of § 87(1) again**, because it is doing quiet work: *"in so far as they are not prescribed by legislation or collective agreement."* If the sectoral collective agreement already fixes a matter, the works council has nothing to co-determine there. **That is the seam between the two channels**, and Section 4 is about it. Note especially what is *not* on the fourteen-item list: **the level of wages**, and **the length of the working week**. Those belong to the union and the employers' association, upstairs. The works council co-determines the *structure* of pay (how bonus rates are set), not the *amount*.

:::reveal An employer wants to install software that logs every keystroke and ranks employees by output. Under the BetrVG, does the works council get to be informed, consulted, or does it get to say no? ||| It gets to say **no**. Technical devices designed to monitor employee behaviour or performance are item 6 on the § 87(1) co-determination list, the employer cannot introduce them without the works council's agreement, and if the two deadlock, the conciliation committee decides and its award REPLACES agreement (§ 87(2)). This is the top tier, not consultation.

## Sources
- Betriebsverfassungsgesetz [Works Constitution Act] (Germany), §§ 87, 90, 92, 106 [official English translation]. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/englisch_betrvg/englisch_betrvg.html`,
      recallContent: [
        {
          prompt: "How many employees does a German establishment need before it can elect a works council?",
          answer: "Five permanent employees with voting rights, three of whom are eligible to stand (BetrVG § 1(1)).",
        },
        {
          prompt: "What is the difference between a consultation right and a co-determination right?",
          answer:
            "With consultation, the employer must genuinely discuss it and consider your objections, and may then act anyway. With co-determination, the employer cannot act without your agreement; deadlock goes to a conciliation committee whose award replaces agreement (§ 87(2)).",
        },
      ],
    },
    {
      slug: "germany-dismissal-and-restructuring",
      title: "6 · Getting fired, and closing the plant",
      section: "Section 2 · Channel one, the works council (Betriebsrat)",
      body: `Now apply the three-tier ladder to the two moments that matter most to a worker: **you are being fired**, and **the plant is being closed**. Germany's answers are precise, and they are not what either a cynic or a romantic would predict.

## Being hired, moved, or graded: § 99, a consent right

In companies with **more than twenty** employees with voting rights, the employer must notify the works council in advance of **any recruitment, grading, regrading or transfer**, supply the documents, and **"obtain its consent to the measure envisaged"** (§ 99(1)). The works council can **refuse consent** on the grounds listed in § 99(2), including that the measure would breach a statute, a collective agreement, or a works agreement, or that there is factual reason to think it will lead to the dismissal of other employees.

So: an American manager can generally hire whoever they want. A German manager of a firm with 21 employees **needs the works council to sign off on the transfer**.

## Being fired: § 102, consultation, with a very sharp edge

Here is the whole opening of § 102(1), because every word of it is load-bearing:

> "**The works council has to be consulted before every dismissal.** The employer has to inform the works council about the reasons for dismissal. **Any notice of dismissal that is given without consulting the works council is null and void.**"

Read that carefully and you will see something strange. **This is a *consultation* right, not a co-determination right, the works council cannot veto your dismissal.** And yet the penalty for skipping the consultation is not a fine, not a bargaining-order, not back pay. **The dismissal simply does not exist.** *Null and void.* You are still employed.

That is the German trick: **a right that is only "consultation" in strength but nuclear in remedy.** Compare the anchor course's account of how American law handles an unlawful firing, years of NLRB process, reinstatement that arrives late if at all. Germany doesn't reinstate you. Germany never fired you.

What the works council *can* do is **object**, in writing, within **one week**, on the five grounds in § 102(3), most importantly that the employer **"disregarded or did not take sufficient account of social aspects"** in choosing whom to dismiss (that is *Sozialauswahl*, social selection, and it is why German redundancy decisions have to weigh things like length of service and dependants), or that the employee **could be kept on** in another job, or after retraining, or on changed terms. And then § 102(5) does something with real bite: if the works council objected properly **and** the employee sues under the Protection Against Dismissal Act, **the employer must keep the employee at work, on unchanged conditions, until the case is finally decided.** Not on paper. At the desk. Getting paid.

## Closing the plant: §§ 111-113, the distinction that teaches the whole system

An "alteration" (*Betriebsänderung*), closing or shrinking an important department, moving it, merging or splitting the establishment, or introducing "entirely new work methods and production processes", triggers §§ 111-113 in any company that normally has **more than twenty** employees with voting rights (§ 111). And here Germany splits the response into **two different things**, which look similar and are not:

| | **Reconciliation of interests** (*Interessenausgleich*) | **Social compensation plan** (*Sozialplan*) |
| --- | --- | --- |
| The question it answers | **Whether, how and when** the change happens | **What the workers get** for the harm it does |
| Can the works council block it? | **No.** The employer must genuinely *attempt* to agree. | **It does not have to.** |
| What happens on deadlock? | Mediation, then the conciliation committee tries to reconcile the parties. If they still don't agree, **the employer may proceed.** | **"If no agreement is reached on the social compensation plan, the conciliation committee makes a decision… The award of the conciliation committee takes the place of an agreement"** (§ 112(4)). |
| The penalty for skipping it | § 113: dismissed employees can sue the employer for **indemnities**. |, |

**So, in one line: the works council cannot stop the plant from closing. It *can* force a binding, enforceable severance package, and if the employer refuses, an outside committee will write one and impose it.**

That is neither the caricature ("German workers run the company") nor its opposite ("it's all a talking shop"). It is a specific, deliberate settlement: **management keeps the decision; the workforce keeps the price.**

:::reveal Your German employer fires you and never mentioned it to the works council. What is the legal consequence? ||| The dismissal is **null and void** (§ 102(1)), it has no legal effect at all, and you are still employed. Note the oddity: consulting the works council is only a CONSULTATION right (it cannot veto your dismissal), but the remedy for skipping the consultation is total.

## Sources
- Betriebsverfassungsgesetz [Works Constitution Act] (Germany), §§ 99, 102, 111, 112, 113 [official English translation]. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/englisch_betrvg/englisch_betrvg.html`,
      recallContent: [
        {
          prompt: "Name three of the fourteen matters in BetrVG § 87(1) where the works council has genuine co-determination.",
          answer:
            "Any three of: rules of operation and employee conduct; start/end of daily working hours and breaks; temporary short-time or extended hours; time/place/form of pay; holiday principles and the leave schedule; technical devices that monitor employee behaviour or performance; accident prevention and health protection; establishment-level remuneration arrangements; piece and bonus rates; principles of group work; the structuring of mobile (remote) work.",
        },
        {
          prompt: "What happens when the employer and works council deadlock on a § 87(1) matter?",
          answer:
            "The conciliation committee (Einigungsstelle) decides, and its award TAKES THE PLACE of an agreement between them (§ 87(2)). Deadlock does not default to the employer, that is what makes it co-determination.",
        },
      ],
    },
    {
      slug: "germany-works-council-reach",
      title: "7 · The right that most German workers don't have",
      section: "Section 2 · Channel one, the works council (Betriebsrat)",
      body: `Everything in lessons 4-6 is real German law, in force today, available to any establishment with five employees. Now here is the number that keeps it honest.

**In 2023, only about 7% of German workplaces had a works council**, around 10% of workplaces with five or more employees, and **9% of private-sector establishments**. Because works councils are far more common in *big* workplaces, they cover many more people than that ratio suggests: **41% of all employees** and **34% of private-sector employees** (IAB Establishment Panel, 2023, reported by ETUI/Worker Participation).

Sit with that. **The most powerful workplace-representation statute in the industrialised world reaches fewer than half of German workers, and only about a third in the private sector.**

**It is a size story, and a sharp one.** In 2023, **73% of workplaces with more than 200 employees** had a works council or equivalent, against **16% of workplaces with 21 to 50 employees** (IAB, 2023, via ETUI). If you work at Volkswagen, co-determination is the air you breathe. If you work at a 30-person logistics firm, there is a decent chance you have never met anyone who has seen a works council.

**And there is an east/west gap**, which will follow you through the rest of this course: in 2023 roughly **42% of west German employees** and **37% of east German employees** worked in an establishment with a works or staff council (IAB, 2023, via ETUI).

## So why doesn't every workplace just elect one?

Three honest reasons, in ascending order of discomfort.

**1. Nobody has to.** The BetrVG says works councils "are elected" in establishments with five or more employees, but it does not *impose* one. Somebody inside has to start the process. In a small, informal, reasonably well-run firm, often nobody does, and there is nothing sinister about that.

**2. It's work.** The post is **unpaid** (§ 37(1)). You get released from your duties to do it (§ 37(2)), and then you spend four years in meetings arguing with your boss, and your boss is still your boss on Monday.

**3. And some employers fight it, which brings us to Question 4 from the anchor course: *what happens to you if you try?***

**Germany's formal answer is unusually tough.** Under **§ 20(1)**, "**no person may obstruct the election of a works council**," and any attempt to influence an election "by inflicting or threatening any unfavourable treatment or by granting or promising any advantage" is unlawful (§ 20(2)). **§ 78** protects works councillors from being "disfavoured or favoured" by reason of their office. And then **§ 119** makes it a **crime**:

> "The following offences are **punishable by a term of imprisonment not exceeding one year or a fine**: 1. interfering with an election to the works council… or influencing such elections by inflicting or threatening reprisals or granting or promising incentives, 2. **obstructing or interfering with the activities of the works council**… 3. prejudicing or favouring a member… by reason of his office."

An American student should stop here, because there is nothing like this in US law. Fire a worker for organising in the United States and the employer faces a civil proceeding. Obstruct a works council in Germany and the responsible person faces **prison**.

**And now the part that stops this from being propaganda.** Look at **§ 119(2)**:

> "Proceedings concerning the offence are instituted **only on application** by the works council, the central works council… the electoral board, the employer or a trade union represented in the establishment."

Read that against the reality. The crime is *obstructing the formation of a works council*, and prosecution requires an application from, among a short list, **the works council that does not exist yet**, or **a union represented in the establishment** (in a workplace with no union), or **the employer** (the one doing the obstructing). German unions and legal scholars have complained about this for years: **the offence that protects the body is hardest to prosecute precisely in the workplaces where the body has not been formed.** The tough-looking criminal provision is easiest to use where it is least needed.

**Hold both facts at once, because that is what an educated reader does.** Germany gives workers a strong statutory right that the United States has never given anyone, **and** most German workplaces don't have it, **and** the criminal shield around it has a procedural hole in exactly the wrong place. All three of those are true.

:::reveal Germany makes obstructing a works council a criminal offence carrying up to a year in prison (§ 119). Why does that provision have less bite than it looks like it has? ||| Because § 119(2) says proceedings may be instituted ONLY on application, by the works council, the electoral board, a union represented in the establishment, or the employer. In a workplace where the employer is successfully preventing a works council from forming, there is no works council to apply, often no union present, and the employer is not going to report itself.

## Sources
- Betriebsverfassungsgesetz [Works Constitution Act] (Germany), §§ 20, 37, 78, 119 [official English translation]. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/englisch_betrvg/englisch_betrvg.html
- ETUI / Worker Participation. (n.d.). *Germany: Workplace representation* [reporting IAB Establishment Panel 2023 data]. European Trade Union Institute. https://www.worker-participation.eu/national-industrial-relations/countries/germany`,
      recallContent: [
        {
          prompt: "What share of German workplaces had a works council in 2023, and what share of employees did they cover?",
          answer:
            "About 7% of all workplaces (10% of those with 5+ employees); covering 41% of all employees and 34% of private-sector employees (IAB Establishment Panel, 2023, via ETUI).",
        },
        {
          prompt: "Under BetrVG § 119, what is the penalty for obstructing a works-council election, and what is the catch?",
          answer:
            "Up to one year's imprisonment or a fine. The catch is § 119(2): prosecution only happens on application by the works council, the electoral board, a union represented in the establishment, or the employer, which is hardest to satisfy exactly where no works council exists.",
        },
      ],
    },
    {
      slug: "germany-quiz-2",
      title: "Section 2 quiz · The works council",
      section: "Section 2 · Channel one, the works council (Betriebsrat)",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who elects a German works council?",
            options: [
              "The union's members in the workplace",
              "All the employees of the establishment, whether or not they belong to a union",
              "The employer, from a list of candidates",
              "The Federal Employment Agency",
            ],
            correctIndex: 1,
            explanation:
              "All employees vote. The works council is a statutory body of the workforce, not the union's branch, it can exist in a workplace with no union at all.",
            sourceLessonSlug: "germany-works-council-what-it-is",
          },
          {
            prompt: "How many employees must an establishment have before a works council can be elected (BetrVG § 1)?",
            options: ["5", "20", "50", "500"],
            correctIndex: 0,
            explanation:
              "Five permanent employees with voting rights, three of whom are eligible to stand. Five, not five hundred.",
            sourceLessonSlug: "germany-works-council-what-it-is",
          },
          {
            prompt: "Where do a German works council's powers come from?",
            options: [
              "A collective agreement the union won at the bargaining table",
              "An Act of Parliament, the Betriebsverfassungsgesetz",
              "The company's articles of association",
              "A European Union directive",
            ],
            correctIndex: 1,
            explanation:
              "They are statutory. Nobody had to win them in a negotiation, that is the deepest difference from the American model.",
            sourceLessonSlug: "germany-works-council-what-it-is",
          },
          {
            prompt: "An employer must INFORM the works council of a plan. Can it then proceed over the works council's objection?",
            options: [
              "No, information rights include a veto",
              "Yes, information means the employer must tell you; it does not mean you can stop it",
              "Only with a court order",
              "Only if the union agrees",
            ],
            correctIndex: 1,
            explanation:
              "Information (§ 90(1), § 92, § 106) is the bottom rung. You cannot fight a plan you have never seen, but seeing it is not blocking it.",
            sourceLessonSlug: "germany-three-tiers",
          },
          {
            prompt: "What makes a § 87(1) matter a genuine CO-DETERMINATION right rather than a consultation right?",
            options: [
              "The employer has to reply in writing",
              "The employer cannot act without agreement, and on deadlock the conciliation committee decides, its award REPLACING agreement (§ 87(2))",
              "The union must be notified",
              "It only applies in companies over 2,000 employees",
            ],
            correctIndex: 1,
            explanation:
              "Deadlock does not default to the employer. That single fact is the whole difference between the top rung and the middle one.",
            sourceLessonSlug: "germany-three-tiers",
          },
          {
            prompt:
              "An employer wants to install software that monitors employee performance. Which tier of right does the works council have here?",
            options: [
              "Information only",
              "Consultation only",
              "Co-determination, § 87(1) no. 6 covers technical devices designed to monitor employee behaviour or performance",
              "No right at all; monitoring is a management prerogative",
            ],
            correctIndex: 2,
            explanation:
              "Item 6 on the § 87(1) list. The employer cannot introduce workplace surveillance without the works council's agreement.",
            sourceLessonSlug: "germany-three-tiers",
          },
          {
            prompt: "Which of these is NOT something a works council co-determines under § 87(1)?",
            options: [
              "The start and end of the daily working hours",
              "Piece and bonus rates",
              "The LEVEL of wages and the length of the working week",
              "Holiday scheduling principles",
            ],
            correctIndex: 2,
            explanation:
              "Wage levels and the working week belong to the sectoral collective agreement, the union's channel, upstairs. § 87(1) applies only 'in so far as [matters] are not prescribed by legislation or collective agreement.'",
            sourceLessonSlug: "germany-three-tiers",
          },
          {
            prompt: "A German employer dismisses a worker without consulting the works council. What happens?",
            options: [
              "The employer pays a €10,000 administrative fine",
              "The dismissal is null and void, it has no legal effect",
              "The works council may appeal to a labour court within 30 days",
              "Nothing; consultation is optional",
            ],
            correctIndex: 1,
            explanation:
              "§ 102(1): 'Any notice of dismissal that is given without consulting the works council is null and void.' A consultation-strength right with a nuclear remedy.",
            sourceLessonSlug: "germany-dismissal-and-restructuring",
          },
          {
            prompt: "Can a German works council VETO an individual dismissal?",
            options: [
              "Yes, dismissal requires its consent",
              "No, it must be consulted and may object on five statutory grounds, but it cannot block the dismissal",
              "Yes, but only for union members",
              "Only in companies with more than 2,000 employees",
            ],
            correctIndex: 1,
            explanation:
              "§ 102 is a consultation right. The council objects (e.g. that social selection was ignored, or the worker could be redeployed), and § 102(5) can keep the worker employed while they litigate, but there is no veto.",
            sourceLessonSlug: "germany-dismissal-and-restructuring",
          },
          {
            prompt:
              "A company is closing a major department. What is the difference between the Interessenausgleich and the Sozialplan?",
            options: [
              "They are two names for the same document",
              "The Interessenausgleich (whether/how/when the change happens) cannot be forced on the employer; the Sozialplan (what workers get) CAN be imposed by the conciliation committee under § 112(4)",
              "The Sozialplan is voluntary; the Interessenausgleich is binding",
              "Both can be imposed by the labour court",
            ],
            correctIndex: 1,
            explanation:
              "Management keeps the decision; the workforce keeps the price. If the employer will not agree a social plan, the conciliation committee writes one and its award replaces agreement.",
            sourceLessonSlug: "germany-dismissal-and-restructuring",
          },
          {
            prompt: "Under § 99, what does a works council in a firm with more than 20 employees get to do about a hiring or transfer?",
            options: [
              "Be informed after the fact",
              "Give or refuse its CONSENT to the measure, on the grounds listed in § 99(2)",
              "Interview the candidate",
              "Nothing, recruitment is a management prerogative",
            ],
            correctIndex: 1,
            explanation:
              "The employer must 'obtain its consent to the measure envisaged' (§ 99(1)) for recruitment, grading, regrading and transfer.",
            sourceLessonSlug: "germany-dismissal-and-restructuring",
          },
          {
            prompt: "What share of German workplaces actually had a works council in 2023?",
            options: ["About 7%", "About 40%", "About 65%", "About 90%"],
            correctIndex: 0,
            explanation:
              "About 7% of all workplaces (10% of those with 5+ employees), covering 41% of all employees and 34% in the private sector (IAB, 2023, via ETUI). The right exists everywhere; the body does not.",
            sourceLessonSlug: "germany-works-council-reach",
          },
          {
            prompt: "Works councils are much more common in large workplaces. What were the 2023 figures?",
            options: [
              "73% of workplaces with 200+ employees, versus 16% of those with 21-50",
              "50% of large workplaces, versus 45% of small ones",
              "Every workplace over 5 employees has one, by law",
              "20% of large workplaces, versus 19% of small ones",
            ],
            correctIndex: 0,
            explanation:
              "IAB (2023) via ETUI. Co-determination is the air you breathe at Volkswagen and a rumour at a 30-person logistics firm.",
            sourceLessonSlug: "germany-works-council-reach",
          },
          {
            prompt: "In Germany, obstructing a works-council election is…",
            options: [
              "A civil matter handled by the labour court",
              "A criminal offence punishable by up to one year's imprisonment or a fine (§ 119)",
              "Permitted if the employer objects to the union",
              "Punished by an automatic €10,000 fine",
            ],
            correctIndex: 1,
            explanation:
              "§ 119 makes it a crime, there is no US equivalent. (The €10,000 administrative fine in § 121 is for failing to supply information, a different and lesser wrong.)",
            sourceLessonSlug: "germany-works-council-reach",
          },
          {
            prompt: "What is the procedural hole in BetrVG § 119?",
            options: [
              "The maximum sentence is too short",
              "§ 119(2): prosecution happens only on application, from the works council (which may not exist), a union in the establishment (which may not be present), the electoral board, or the employer itself",
              "It only applies to companies over 500 employees",
              "It expires after one year",
            ],
            correctIndex: 1,
            explanation:
              "The offence protecting the body is hardest to prosecute precisely in the workplaces where the body has not been formed.",
            sourceLessonSlug: "germany-works-council-reach",
          },
        ],
      },
    },

    // ────────────── SECTION 3 · CHANNEL TWO: WORKERS ON THE BOARD ──────────────
    {
      slug: "germany-two-tier-board",
      title: "8 · You cannot understand this without the two-tier board",
      section: "Section 3 · Channel two, workers on the board",
      body: `You are about to be told that in large German companies, **workers hold half the seats on the board**. Before you hear that sentence, you need to know what a German board *is*, because if you picture an American board of directors, the sentence will mean something dramatic and **wrong**.

**An American public company has one board.** The board of directors hires and fires the CEO, and it also sits at the top of the decision chain: strategy, major transactions, executive pay. One body, both jobs.

**A German company has two, stacked.**

~~~
                     ┌─────────────────────────────────────┐
   THE OWNERS  ──▶   │  HAUPTVERSAMMLUNG (shareholders)    │
                     └──────────────────┬──────────────────┘
                                        │ elect the shareholder half
                                        ▼
        ┌───────────────────────────────────────────────────────────┐
        │   AUFSICHTSRAT, the SUPERVISORY board                    │
        │   Does NOT run the company. It APPOINTS, OVERSEES and     │
        │   can REMOVE the management board, approves certain big   │
        │   decisions, and signs off the accounts.                  │
        │                                                           │
        │   ◀── THIS is the board workers sit on. ──▶               │
        └───────────────────────────────┬───────────────────────────┘
                                        │ appoints / dismisses
                                        ▼
        ┌───────────────────────────────────────────────────────────┐
        │   VORSTAND, the MANAGEMENT board                         │
        │   RUNS the company day to day. Sets strategy, executes.   │
        │   (No employee representatives sit here as of right, │
        │    with one exception you'll meet in lesson 10.)          │
        └───────────────────────────────────────────────────────────┘
                                        │
                                        ▼
        ┌───────────────────────────────────────────────────────────┐
        │   THE ESTABLISHMENT, where the WORKS COUNCIL lives       │
        │   (Section 2). Different body, different statute,         │
        │   different powers.                                       │
        └───────────────────────────────────────────────────────────┘
~~~

**Now re-read the claim.** "Workers hold half the seats on the board" means workers hold half the seats on the ***supervisory*** board, the body that **hires, watches and can fire the management**, and approves certain major decisions. It does **not** mean workers are running the company. The *Vorstand* runs the company.

Is that a demotion of the claim? **Partly, and be honest about it.** But do not undersell it either. The supervisory board is the body that:

- **appoints and dismisses the people who run the company** (and in a co-determined company that vote is the one lesson 10 is about);
- **sees the numbers**, the real ones, before anybody else outside management does;
- **has to approve certain classes of major transaction**, depending on the company's own articles.

So: workers in a large German company do not decide what the firm makes or where it sells. They **choose, watch, and can remove the people who do**, and they cannot be kept out of the room where those things are discussed. In American corporate law there is no room a worker is entitled to be in. That is the difference, stated exactly.

:::reveal "Workers hold half the seats on the board", which board, and what does that board actually do? ||| The **supervisory board** (Aufsichtsrat), not the management board (Vorstand). The supervisory board appoints, oversees and can dismiss the management board, sees the company's real numbers, and approves certain major decisions. It does not run the company day to day, the Vorstand does.

## Sources
- Mitbestimmungsgesetz [Co-determination Act] of 4 May 1976 (Germany), Zweiter und Dritter Teil [Parts Two and Three]. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/mitbestg/
- ETUI / Worker Participation. (n.d.). *Germany: Board-level representation*. European Trade Union Institute. https://www.worker-participation.eu/national-industrial-relations/countries/germany`,
    },
    {
      slug: "germany-mitbestimmung-1976",
      title: "9 · The Co-determination Act of 1976: who gets seats, and how many",
      section: "Section 3 · Channel two, workers on the board",
      body: `Germany does not have *one* board-level co-determination law. It has **three**, and which one applies to you depends on how big your company is and what it makes.

| Statute | Applies to | Employee share of the supervisory board |
| --- | --- | --- |
| **Montan-Mitbestimmungsgesetz 1951** (coal & steel) | Coal, iron-ore and iron-and-steel companies (AG or GmbH) with **more than 1,000 employees** | **Genuine parity**, plus a neutral extra member (lesson 10) |
| **Mitbestimmungsgesetz 1976** | AG, KGaA, GmbH or co-operative with **more than 2,000 employees** | **Half**, with a catch (lesson 10) |
| **Drittelbeteiligungsgesetz 2004** | AG, KGaA or GmbH with **more than 500 employees** | **One third** |

*(Read straight out of Montan-MitbestG §§ 1(1)-(2); MitbestG § 1(1); DrittelbG § 1(1). The 1976 Act itself, at § 1(2)-(3), says it does not apply where the coal-and-steel law does, and that everything below its own threshold falls to the One-Third Participation Act.)*

## The 1976 Act, in detail

**Scope (§ 1(1)).** A company run as a public limited company (*Aktiengesellschaft*), a partnership limited by shares, a **GmbH** (the ordinary German private limited company), or a co-operative, which **"in der Regel mehr als 2.000 Arbeitnehmer beschäftigen"**, normally employs **more than 2,000 employees**.

**Size of the board (§ 7(1)).** The supervisory board scales with the workforce, and the two sides are always **equal in number**:

| Company size | Shareholder seats | Employee seats | Total |
| --- | --- | --- | --- |
| Not more than 10,000 employees | 6 | 6 | 12 |
| More than 10,000, up to 20,000 | 8 | 8 | 16 |
| More than 20,000 | 10 | 10 | 20 |

**Who fills the employee seats (§ 7(2)).** This is where the union finally reappears, and note how *little* of the bench it gets:

| Employee seats | Employees of the company | **Union representatives** |
| --- | --- | --- |
| 6 | 4 | **2** |
| 8 | 6 | **2** |
| 10 | 7 | **3** |

So on the supervisory board of a 25,000-employee German company, out of **twenty** seats, **three** belong to trade union representatives. The other seven on the employee bench are the company's own workers, elected by the workforce.

**And one seat on the workers' bench is not quite a worker.** **§ 15(1)** of the Act ends with a sentence that is easy to skim and important not to: *"**Dem Aufsichtsrat muss ein leitender Angestellter angehören**"*, **the supervisory board must include a senior executive** (*leitender Angestellter*), and that seat comes out of the *employee* allocation. Remember who leitende Angestellte are: **the people the Works Constitution Act explicitly excludes from the works council** (BetrVG § 5(3)). A senior manager sits on the workers' bench, by law.

**One more thing the 1976 Act does that has no American parallel at all.** **§ 33** requires that the *management* board, the Vorstand, the people who actually run the company, include an **Arbeitsdirektor**, a **labour director**, "as an equal member." Every co-determined German company of this size has, on its executive team, someone whose brief is the workforce, sitting as a full peer of the finance and operations chiefs.

**How many companies are we talking about?** In **2025**, **670** German companies had a parity-co-determined supervisory board under the 1976 Act, up from 667 in 2024, and down from a peak of **767 in 2002** (Hans-Böckler-Stiftung, 2025). Lesson 11 asks why the number went the wrong way.

:::reveal Under the Co-determination Act 1976, a company with 25,000 employees has a 20-seat supervisory board. How many of those seats belong to trade union representatives? ||| **Three.** § 7(1) gives ten seats to each side; § 7(2) splits the ten employee seats into seven employees of the company and **three** union representatives. The workers' bench is mostly the company's own workforce, not the union, and § 15(1) requires one of those seats to go to a senior executive.

## Sources
- Drittelbeteiligungsgesetz [One-Third Participation Act] of 18 May 2004 (Germany), § 1. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/drittelbg/
- Hans-Böckler-Stiftung. (2025). *Mitbestimmte Unternehmen: Zahlen und Fakten* [Co-determined companies: figures and facts]. Mitbestimmungsportal. https://www.mitbestimmung.de/html/starke-arbeitnehmerbank-in-635-197.html
- Mitbestimmungsgesetz [Co-determination Act] of 4 May 1976 (Germany), §§ 1, 7, 15, 33. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/mitbestg/
- Montan-Mitbestimmungsgesetz [Coal and Steel Co-determination Act] of 21 May 1951 (Germany), § 1. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/montanmitbestg/`,
      recallContent: [
        {
          prompt: "Which German board do employee representatives sit on, and what does it do?",
          answer:
            "The Aufsichtsrat (supervisory board). It appoints, oversees and can dismiss the Vorstand (management board), sees the company's numbers and approves certain major decisions, it does not run the company day to day.",
        },
        {
          prompt: "Name the three German board-level co-determination statutes and their thresholds.",
          answer:
            "Montan-Mitbestimmungsgesetz 1951 (coal and steel, >1,000 employees, genuine parity); Mitbestimmungsgesetz 1976 (>2,000 employees, half the seats); Drittelbeteiligungsgesetz 2004 (>500 employees, one third).",
        },
      ],
    },
    {
      slug: "germany-casting-vote-and-montan",
      title: "10 · The casting vote, why 'half' overstates it, and where real parity lives",
      section: "Section 3 · Channel two, workers on the board",
      body: `Half the seats sounds like half the power. **It isn't**, and the honest version of this course has to say so on the record. There are **two** reasons, both written into the 1976 Act, and then there is one place in German law where the workers really *do* have parity, and it is not where you would guess.

## Catch one: the chair, and his second vote

Walk through the 1976 Act in order.

**Step 1, the board elects a chair and a deputy (§ 27(1)).** It needs a **two-thirds majority** of all the seats. If both sides agree on a chair, fine: everyone has consented, and there is no problem.

**Step 2, but what if they don't? (§ 27(2)).** If the two-thirds majority is not reached, there is a second ballot, and in that ballot: **"die Aufsichtsratsmitglieder der Anteilseigner [wählen] den Aufsichtsratsvorsitzenden und die Aufsichtsratsmitglieder der Arbeitnehmer den Stellvertreter"**, the **shareholder** members elect the **chair**, and the **employee** members elect the **deputy**. Each with a simple majority of its own bench.

Read that again. **If the two sides cannot agree, the shareholders get the chair. Automatically. Every time.** The workers get the deputy, as a consolation.

**Step 3, and now § 29(2), which is the whole ballgame.** If a vote in the supervisory board is **tied**, there is a re-vote on the same matter, and **if that is tied too, the chair has two votes**:

> *"Ergibt eine Abstimmung im Aufsichtsrat Stimmengleichheit, so hat bei einer erneuten Abstimmung über denselben Gegenstand, wenn auch sie Stimmengleichheit ergibt, der Aufsichtsratsvorsitzende **zwei Stimmen**… **Dem Stellvertreter steht die zweite Stimme nicht zu.**"* (MitbestG § 29(2))

**The chair gets two votes. The deputy expressly does not.** The same rule appears again at § 27(4) for the specific, and rather important, question of **appointing the management board**.

Put the three steps together and you have the machine: **equal seats, deadlock, re-vote, deadlock, and the shareholder-appointed chair breaks the tie in the shareholders' favour.** So on any question the two sides genuinely, finally disagree about, **the shareholders win.**

**That is not a loophole. It is a design decision, taken deliberately in 1976**, and it is the reason the Act survived its constitutional challenge. **Nine companies and twenty-nine employer and business associations took the 1976 Act to the Federal Constitutional Court**, arguing it was an unconstitutional invasion of property rights. On **1 March 1979** the Court rejected them (BVerfG, 1 BvR 532/77 and joined cases), holding among other things that the Basic Law is economically neutral, and its reasoning leaned on exactly the machinery above: because the chair breaks the tie, the Act does **not** give the workforce dominance over the owners. **The casting vote is not an oversight. It is the thing that made the law constitutional.**

**Parity of seats; not parity of power.**

## Catch two: one of the workers' seats belongs to a manager

You met this in lesson 9. **MitbestG § 15(1)**: the supervisory board **must include a senior executive** (*leitender Angestellter*), and that seat is carved out of the **employee** allocation. Whether that person votes with the workforce or with management is a question about human beings rather than statutes, but it is one more reason to distrust the arithmetic of "half."

## So where is the real thing? 1951. Coal and steel.

Twenty-five years before the 1976 Act, in the ruins of the Ruhr, the **Montan-Mitbestimmungsgesetz of 21 May 1951** did something the 1976 Act carefully did not. Read **§ 4(1)**:

> The supervisory board consists of **eleven** members: (a) **four shareholder representatives and one further member**; (b) **four employee representatives and one further member**; (c) **one further member**.

There is no shareholder chair with a second vote. There is an **eleventh member**, and § 4(2) says who that person may *not* be: not a representative or employee of a union, an employers' association, or their peak bodies; not someone who held such a post in the last year; not an employee or employer *in the company*; and **not someone with a substantial economic interest in the company**. In other words, a **genuinely neutral** eleventh person, elected by the other ten. **When the board splits 5-5, the tie is broken by someone who belongs to neither side.**

And § 13(1) goes further than the 1976 Act ever did. The *Arbeitsdirektor*, the labour director on the **management** board, **"kann nicht gegen die Stimmen der Mehrheit der nach § 6 gewählten Aufsichtsratsmitglieder bestellt werden"**: he or she **cannot be appointed against the votes of the majority of the employee-elected supervisory board members.** The workers hold a veto over who the labour director is. Under the 1976 Act (§ 33) they do not.

**That is real parity, and it exists in German law, and it applies to coal and steel.** Why there? Because of *when*. In 1951 the coal and steel industries of the Ruhr were the strategic heart of West German reindustrialisation, the Allies were still deciding what to do with them, and the unions had the leverage of that moment. **They got a better deal than anyone got afterwards, because they asked at the only time the answer was going to be yes.** That is a lesson about power, not about Germany.

**A number this course will not give you.** You may want to know how many companies are still co-determined under the 1951 Act. The Hans-Böckler-Stiftung's own tally of co-determined companies **explicitly excludes** the coal-and-steel firms, and this course did not find a current count from a source it trusts. **So it is not going to invent one.** What is safe to say: German coal is finished and German steel is much diminished, so the number is small and falling, and the strongest co-determination law Germany ever wrote is slowly running out of companies to apply to.

:::reveal Workers hold half the seats on a German supervisory board under the 1976 Act. Explain, using the statute, why they still lose a genuine deadlock. ||| Because of the chair. Under § 27(2), if the board cannot elect a chair by a two-thirds majority, the SHAREHOLDER members elect the chair and the employee members get only the deputy. And under § 29(2), on a tied re-vote the chair, not the deputy, has **two votes**. So equal seats, deadlock, re-vote, deadlock: the shareholder-appointed chair breaks the tie for the shareholders. Parity of seats, not of power.

## Sources
- Bundesverfassungsgericht [Federal Constitutional Court]. (1979, March 1). *Mitbestimmungsurteil*, 1 BvR 532/77 and joined cases. (Constitutional complaints by nine companies and 29 employer and business associations against the Co-determination Act 1976, rejected.) https://dejure.org/dienste/vernetzung/rechtsprechung?Gericht=BVerfG&Datum=01.03.1979&Aktenzeichen=1+BvR+532/77
- Hans-Böckler-Stiftung. (n.d.). *Meilensteine der Mitbestimmung* [Milestones of co-determination]. Mitbestimmungsportal. https://www.mitbestimmung.de/html/meilensteine-der-mitbestimmung-3074.html
- Mitbestimmungsgesetz [Co-determination Act] of 4 May 1976 (Germany), §§ 15(1), 27, 29(2), 33. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/mitbestg/
- Montan-Mitbestimmungsgesetz [Coal and Steel Co-determination Act] of 21 May 1951 (BGBl. I p. 347) (Germany), §§ 1, 4, 13. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/montanmitbestg/`,
      recallContent: [
        {
          prompt: "Under the Co-determination Act 1976, who breaks a tie on the supervisory board?",
          answer:
            "The chair, who has a second vote on a tied re-vote (§ 29(2)), and the deputy expressly does not. If the two sides cannot agree a chair by a two-thirds majority, the shareholder bench elects the chair (§ 27(2)). So the shareholders win a genuine deadlock.",
        },
        {
          prompt: "How is the 1951 coal-and-steel supervisory board different?",
          answer:
            "Eleven members: 4 shareholder + 1, 4 employee + 1, and a genuinely NEUTRAL eleventh member who may not be tied to either side (§ 4). Ties are broken by someone who belongs to neither camp, and the labour director cannot be appointed against the majority of the employee-elected members (§ 13(1)). That is real parity.",
        },
      ],
    },
    {
      slug: "germany-quiz-3",
      title: "Section 3 quiz · Workers on the board",
      section: "Section 3 · Channel two, workers on the board",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "German companies have two boards. Which one do employee representatives sit on?",
            options: [
              "The Vorstand (management board), which runs the company",
              "The Aufsichtsrat (supervisory board), which appoints and oversees the management board",
              "Both, equally",
              "Neither, they sit on a separate workers' board",
            ],
            correctIndex: 1,
            explanation:
              "The supervisory board. It hires, watches and can fire the management board, it does not run the company day to day.",
            sourceLessonSlug: "germany-two-tier-board",
          },
          {
            prompt: "Under the Mitbestimmungsgesetz 1976, which companies must give employees half the supervisory-board seats?",
            options: [
              "All companies with more than 500 employees",
              "AGs, KGaAs, GmbHs and co-operatives that normally employ MORE THAN 2,000",
              "Only coal and steel companies",
              "Only publicly listed companies of any size",
            ],
            correctIndex: 1,
            explanation: "MitbestG § 1(1): more than 2,000 employees. Below that, the One-Third Participation Act 2004 takes over at 500.",
            sourceLessonSlug: "germany-mitbestimmung-1976",
          },
          {
            prompt: "A German company with 700 employees, what board-level representation do its workers get?",
            options: [
              "Half the supervisory board",
              "One third of the supervisory board, under the Drittelbeteiligungsgesetz 2004",
              "None",
              "Full parity plus a neutral member",
            ],
            correctIndex: 1,
            explanation: "DrittelbG § 1: more than 500 employees → one third of the supervisory board.",
            sourceLessonSlug: "germany-mitbestimmung-1976",
          },
          {
            prompt:
              "On the 20-seat supervisory board of a 25,000-employee German company, how many seats go to trade union representatives?",
            options: ["Ten", "Seven", "Three", "Zero"],
            correctIndex: 2,
            explanation:
              "§ 7(2): the ten employee seats split into seven employees of the company and three union representatives. The workers' bench is mostly the workforce, not the union.",
            sourceLessonSlug: "germany-mitbestimmung-1976",
          },
          {
            prompt: "What does MitbestG § 15(1) require about the composition of the employee bench?",
            options: [
              "That it be at least half women",
              "That it include a senior executive (leitender Angestellter), a person the Works Constitution Act excludes from the works council",
              "That every member be a union member",
              "That no member be a manager",
            ],
            correctIndex: 1,
            explanation:
              "A senior manager sits on the workers' bench, by law, and that seat comes out of the employee allocation, one reason 'half the seats' overstates worker power.",
            sourceLessonSlug: "germany-mitbestimmung-1976",
          },
          {
            prompt: "Under MitbestG § 27(2), what happens if the supervisory board cannot elect a chair by a two-thirds majority?",
            options: [
              "A court appoints a neutral chair",
              "The shareholder members elect the chair; the employee members elect only the deputy",
              "The employee members elect the chair",
              "The seat stays vacant",
            ],
            correctIndex: 1,
            explanation: "The chair goes to the shareholder side automatically, and the workers get the deputy as a consolation.",
            sourceLessonSlug: "germany-casting-vote-and-montan",
          },
          {
            prompt: "Under MitbestG § 29(2), who has a second vote when the supervisory board deadlocks?",
            options: [
              "The chair, and the statute says expressly that the deputy does NOT",
              "The deputy chair",
              "The labour director",
              "Nobody; the motion simply fails",
            ],
            correctIndex: 0,
            explanation:
              "On a tied re-vote of the same matter the chair casts two votes. Combined with § 27(2), that means the shareholders win any genuine deadlock.",
            sourceLessonSlug: "germany-casting-vote-and-montan",
          },
          {
            prompt: "What is the accurate one-line summary of German board-level co-determination under the 1976 Act?",
            options: [
              "Workers run large German companies",
              "Parity of seats, not parity of power",
              "Workers have a veto over all major decisions",
              "It is purely symbolic and has no legal effect",
            ],
            correctIndex: 1,
            explanation:
              "Equal seats, but the shareholder-appointed chair breaks ties, a deliberate 1976 design choice, upheld by the Federal Constitutional Court in 1979.",
            sourceLessonSlug: "germany-casting-vote-and-montan",
          },
          {
            prompt: "How does the 1951 coal-and-steel supervisory board break a tie?",
            options: [
              "The shareholder chair casts a second vote",
              "An eleventh, genuinely NEUTRAL member, who may not be tied to a union, an employers' association, or the company, elected by the other ten",
              "The government appoints an arbitrator",
              "It cannot; the board is simply deadlocked",
            ],
            correctIndex: 1,
            explanation:
              "Montan-MitbestG § 4: 4+1 shareholder, 4+1 employee, plus one neutral. § 4(2) disqualifies anyone with a stake on either side. That is genuine parity.",
            sourceLessonSlug: "germany-casting-vote-and-montan",
          },
          {
            prompt: "What extra power do workers have under the 1951 Act that they do NOT have under the 1976 Act?",
            options: [
              "The right to strike inside the boardroom",
              "The labour director cannot be appointed against the majority of the employee-elected supervisory board members (§ 13(1))",
              "The right to veto dividends",
              "A majority of the supervisory board seats",
            ],
            correctIndex: 1,
            explanation:
              "A workers' veto over who the Arbeitsdirektor is. The 1976 Act (§ 33) requires a labour director but gives workers no such veto.",
            sourceLessonSlug: "germany-casting-vote-and-montan",
          },
          {
            prompt: "Why did coal and steel workers get a better deal in 1951 than everyone else got in 1976?",
            options: [
              "Coal miners are more skilled",
              "Timing and leverage, in 1951 the Ruhr's coal and steel were the strategic heart of West German reindustrialisation, and the unions asked at the one moment the answer would be yes",
              "The 1976 Act was written by unions",
              "The 1951 Act was imposed by the United Nations",
            ],
            correctIndex: 1,
            explanation: "A lesson about power, not about Germany. Institutions record the balance of forces at the moment they were written.",
            sourceLessonSlug: "germany-casting-vote-and-montan",
          },
          {
            prompt: "What is an Arbeitsdirektor?",
            options: [
              "The head of the works council",
              "A labour director who sits as an equal member of the MANAGEMENT board (MitbestG § 33; Montan-MitbestG § 13)",
              "A government inspector",
              "The chair of the supervisory board",
            ],
            correctIndex: 1,
            explanation:
              "Every co-determined German company of that size has someone on the executive team whose brief is the workforce, sitting as a full peer of the finance and operations chiefs.",
            sourceLessonSlug: "germany-mitbestimmung-1976",
          },
          {
            prompt: "How many German companies had a parity-co-determined supervisory board in 2025?",
            options: ["670, down from a peak of 767 in 2002", "About 5,000", "About 50", "Every company with over 500 employees"],
            correctIndex: 0,
            explanation:
              "Hans-Böckler-Stiftung (2025). The number peaked in 2002 and has fallen since, lesson 11 asks why.",
            sourceLessonSlug: "germany-mitbestimmung-1976",
          },
          {
            prompt:
              "This course refuses to tell you how many companies are still co-determined under the 1951 coal-and-steel Act. Why?",
            options: [
              "The number is secret",
              "Because the Hans-Böckler tally explicitly excludes them and no trustworthy current count was found, so the course will not invent one",
              "Because the 1951 Act was repealed",
              "Because it is the same as the 1976 number",
            ],
            correctIndex: 1,
            explanation:
              "What is safe to say: German coal is finished and steel is much diminished, so the number is small and falling. A number you cannot source is a liability, not a fact.",
            sourceLessonSlug: "germany-casting-vote-and-montan",
          },
          {
            prompt: "Why does the two-tier board structure matter for reading the claim 'workers are on the board'?",
            options: [
              "It doesn't; a board is a board",
              "Because the board workers sit on is the SUPERVISORY board, it appoints and oversees management rather than running the company, so 'on the board' means something narrower and more precise than an American would assume",
              "Because German boards have no legal power",
              "Because workers actually sit on the management board",
            ],
            correctIndex: 1,
            explanation:
              "Workers choose, watch and can remove the people who run the firm. They do not run it. Stating that precisely is the difference between teaching and cheerleading.",
            sourceLessonSlug: "germany-two-tier-board",
          },
        ],
      },
    },

    // ────────────── SECTION 4 · THE DUAL SYSTEM AND THE PEACE OBLIGATION ──────────────
    {
      slug: "germany-dual-system-and-tarifvorrang",
      title: "11 · The dual system: two channels, one seam",
      section: "Section 4 · The dual system, and the price of it",
      body: `You now have both channels in your head. Put them together, and you have the thing Germans call the **dual system** (*duales System*), and the reason it works is a **seam**: a line the law draws between the two, so that they do not fight each other for the same job.

| | **Channel one: the union** | **Channel two: the works council** |
| --- | --- | --- |
| **Where it sits** | **Above** the firm, at the level of the whole sector | **Inside** the firm, in the establishment |
| **Who it is** | An industrial union (IG Metall, ver.di…) facing an employers' association | A statutory body elected by **all** employees |
| **What it produces** | A **collective agreement** (*Tarifvertrag*), pay, the length of the working week | A **works agreement** (*Betriebsvereinbarung*), how the workplace is actually run |
| **Its weapon** | **The strike** | **None. It may not strike.** |
| **Its statute** | TVG (+ Basic Law Art. 9(3)) | BetrVG |

## The seam: Tarifvorrang

The law does not leave the boundary to good manners. It writes it down, twice.

**First, in the works council's own charter, BetrVG § 77(3):**

> "**Works agreements cannot deal with remuneration and other conditions of employment that have been fixed or are normally fixed by collective agreement.** The foregoing does not apply where a collective agreement expressly authorises the making of supplementary works agreements."

**Second, in the co-determination list itself, the opening words of § 87(1):** the works council has co-determination rights in those fourteen matters **"in so far as they are not prescribed by legislation or collective agreement."**

Germans call this **Tarifvorrang**, the *primacy of the collective agreement*. And it is the piece that makes the whole architecture cohere.

**Think about what it prevents.** Without it, an employer under pressure would go straight to the works council, a body made of its own employees, who cannot strike, who work in the building, whose kids go to the local school, and negotiate a cheaper deal on pay than the union got at sector level. Every firm would do this. Within a decade the sectoral agreement would be worthless and the works council would have become the instrument for undercutting it. **§ 77(3) makes that illegal.** Pay is the union's, and the works council may not trade it away.

So the division of labour is exact:

- **The union decides how much you are paid, and how many hours you work.** It bargains for the sector, and it can strike.
- **The works council decides how the place is run**, shifts, monitoring, health and safety, discipline, bonus *structures*, remote work, and it can force those to a binding decision without ever downing tools.

**Two bodies. Two statutes. Two kinds of power. One line between them.**

## The opening clause, where the seam has been giving way

Note the second sentence of § 77(3): a works agreement *can* deal with pay **"where a collective agreement expressly authorises"** it. Since the 1990s, German sectoral agreements have increasingly written in exactly such authorisations, **opening clauses** (*Öffnungsklauseln*), that let a single firm, with its works council's agreement, deviate from the sectoral deal: work longer hours, defer a raise, cut a bonus, usually in exchange for a job guarantee.

You can read that two ways, and both are honest:
- **As flexibility that saved the system.** A sectoral agreement that cannot bend will break, firms in trouble would simply leave. Opening clauses let them stay covered.
- **As decentralisation by the back door.** Every opening clause moves a decision from the sector, where the union is strong and can strike, into the firm, where the works council is closer to management and cannot.

The German system's defenders and its critics agree on the mechanism and disagree about the verdict. **You are allowed to do the same, once you can describe it.**

:::reveal Why does BetrVG § 77(3) forbid a works agreement from setting pay that the collective agreement normally fixes? ||| Because otherwise employers would bypass the union entirely, negotiating pay with a body made of their own employees that cannot strike, that works in the building, and that is under far more pressure to say yes. The sectoral agreement would be undercut firm by firm until it was worthless. Tarifvorrang keeps pay in the channel that has the strike.

## Sources
- Betriebsverfassungsgesetz [Works Constitution Act] (Germany), §§ 77(3), 87(1) [official English translation]. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/englisch_betrvg/englisch_betrvg.html
- Tarifvertragsgesetz [Collective Agreements Act] (Germany), §§ 3, 4. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/tvg/`,
    },
    {
      slug: "germany-strikes-and-the-peace-obligation",
      title: "12 · The peace obligation: what Germany charges for all this",
      section: "Section 4 · The dual system, and the price of it",
      body: `Nothing in this course is free. Germany gives workers a statutory body inside every establishment, real co-determination over how the place runs, and half the seats on the supervisory board of every large firm. **In exchange, it takes something away, and it is worth naming precisely what.**

## 1. The works council may not strike. Ever.

**BetrVG § 74(2)**, first sentence:

> "**Industrial action between the employer and the works council is unlawful**; the foregoing does not apply to industrial action between collective bargaining parties. The employer and the works council have to refrain from activities that interfere with operations or imperil the peace in the establishment."

And § 74(1) requires the two of them to meet **at least once a month** and to "discuss the matters at issue **with an earnest desire to reach agreement**."

So the body with power *inside* the company has **no** power to stop work, and a statutory duty to be constructive. The body that *can* stop work, the union, is **outside** the company. **That separation is the deal.** The works council trades the strike for the conciliation committee; instead of downing tools when it deadlocks, it goes to arbitration whose award becomes the rule (§ 87(2)).

Whether that is a good trade is a real question, and Section 6 lets you argue it. But notice how neatly it explains the thing foreigners always remark on: **German industrial relations are quiet inside the firm.** They are quiet by construction. Conflict inside the establishment isn't suppressed by culture; it is *routed*, into a monthly meeting and, failing that, into an arbitration panel.

## 2. And the union may not strike whenever it likes either, the Friedenspflicht

Here the course has to be careful, because **Germany has no statute that grants a right to strike.** Not one. What it has is:

- **Basic Law Art. 9(3)**, which guarantees the right to combine "to safeguard and improve working and economic conditions" to every individual and every occupation, and voids any agreement that impairs it; and
- **decades of case law from the Federal Labour Court** (*Bundesarbeitsgericht*), which built the German law of industrial action on top of that constitutional guarantee.

**This course is not going to cite you a case name for that, because it did not retrieve one, and a fabricated citation is worse than an honest gap.** What you should take away is the *shape* of the judge-made rules, which is well established and which German labour lawyers will all recognise:

- **A strike must be led by a union.** Spontaneous, unofficial walkouts, what Americans call **wildcat strikes**, are not protected industrial action in Germany.
- **A strike must aim at a collective agreement.** It must be about something a *Tarifvertrag* could lawfully settle. A **purely political strike**, a strike against a government policy rather than an employer, is not protected.
- **And while a collective agreement is running, there is a peace obligation**, the *Friedenspflicht*. You do not strike over things your own contract has already settled, for as long as it lasts.

Put that last one next to the numbers and you can see the machine at work. A German sectoral agreement runs for a fixed term. **For that whole term, the matters it settles are off the table.** Bargaining rounds are scheduled events. Warning strikes (*Warnstreiks*), short, sharp stoppages during a bargaining round, once the peace obligation has lapsed, are a normal and expected part of the choreography.

**The result is a system in which industrial conflict is legal, real, and almost entirely predictable.** It happens at a known level (the sector), between known parties (the union and the employers' association), at a known time (when the agreement expires), over a known subject (what the next agreement will say).

*(A word on what this course will not tell you: you may have read that Germany loses very few days to strikes compared with, say, France or the United States. That is the general reputation, and the structural reasons above make it plausible. But this course did not retrieve a strike-days statistic from a primary source it trusts, and it is not going to quote one it cannot stand behind. **Learn the mechanism; be suspicious of the tidy number.**)*

## 3. The trade, in one sentence

**Germany gives the workforce a permanent, statutory seat and takes away its ability to make a scene.**

That is not a criticism. It might be the best bargain any working class ever struck. But an educated person should be able to state the *price* of an institution as fluently as its benefits, and the price of German co-determination is paid in the currency of disruption.

:::reveal A German works council deadlocks with the employer over shift patterns. Can it call a strike? What does it do instead? ||| **No.** BetrVG § 74(2): "Industrial action between the employer and the works council is unlawful." Shift patterns are a § 87(1) co-determination matter, so it goes to the **conciliation committee**, whose award takes the place of an agreement (§ 87(2)). The works council trades the strike for binding arbitration. The strike belongs to the union, which sits outside the firm.

## Sources
- Basic Law for the Federal Republic of Germany, Art. 9(3) [official English translation]. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/englisch_gg/englisch_gg.html
- Betriebsverfassungsgesetz [Works Constitution Act] (Germany), §§ 74, 87(2) [official English translation]. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/englisch_betrvg/englisch_betrvg.html
- Tarifvertragsgesetz [Collective Agreements Act] (Germany), § 4. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/tvg/`,
      recallContent: [
        {
          prompt: "What is Tarifvorrang, and which section states it?",
          answer:
            "The primacy of the collective agreement: BetrVG § 77(3) forbids a works agreement from dealing with pay and conditions that a collective agreement fixes or normally fixes, unless the collective agreement expressly opens the door. It keeps pay in the channel that has the strike.",
        },
        {
          prompt: "Can a German works council go on strike?",
          answer:
            "No. BetrVG § 74(2): 'Industrial action between the employer and the works council is unlawful.' It goes to the conciliation committee instead. Only the union, outside the firm, can strike.",
        },
      ],
    },
    {
      slug: "germany-quiz-4",
      title: "Section 4 quiz · The dual system and the peace obligation",
      section: "Section 4 · The dual system, and the price of it",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In the German dual system, who bargains over the LEVEL of pay?",
            options: [
              "The works council, inside the firm",
              "The industrial union and the employers' association, at sector level",
              "The supervisory board",
              "The Federal Ministry of Labour",
            ],
            correctIndex: 1,
            explanation: "Pay is channel one, the union's channel, above the firm. The works council is expressly forbidden from touching it.",
            sourceLessonSlug: "germany-dual-system-and-tarifvorrang",
          },
          {
            prompt: "What does BetrVG § 77(3) forbid?",
            options: [
              "Works councils from meeting without the employer",
              "Works agreements from dealing with pay and conditions that a collective agreement fixes or normally fixes",
              "Unions from entering the workplace",
              "Employers from joining an employers' association",
            ],
            correctIndex: 1,
            explanation:
              "Tarifvorrang, the primacy of the collective agreement. Without it, employers would bypass the union by cutting a cheaper deal with a body that cannot strike.",
            sourceLessonSlug: "germany-dual-system-and-tarifvorrang",
          },
          {
            prompt: "Why is Tarifvorrang necessary to the whole architecture?",
            options: [
              "It saves the employer paperwork",
              "Without it, employers would negotiate pay with the works council, a body of their own employees who cannot strike, and undercut the sectoral agreement firm by firm",
              "It is an EU requirement",
              "It stops works councils from being elected",
            ],
            correctIndex: 1,
            explanation: "The rule keeps pay in the one channel that carries a credible threat.",
            sourceLessonSlug: "germany-dual-system-and-tarifvorrang",
          },
          {
            prompt: "What is an Öffnungsklausel (opening clause)?",
            options: [
              "A clause letting workers open the company's books",
              "A clause in a sectoral agreement expressly authorising a single firm and its works council to deviate from it, e.g. longer hours in exchange for a job guarantee",
              "A clause letting an employer leave the employers' association",
              "A clause opening the works council to union members only",
            ],
            correctIndex: 1,
            explanation:
              "Permitted by the second sentence of § 77(3). Read as flexibility that saved the system, or as decentralisation by the back door, the mechanism is agreed, the verdict is not.",
            sourceLessonSlug: "germany-dual-system-and-tarifvorrang",
          },
          {
            prompt: "Can a German works council lawfully call a strike?",
            options: [
              "Yes, over any § 87(1) matter",
              "No, BetrVG § 74(2) makes industrial action between the employer and the works council unlawful",
              "Yes, but only with the union's permission",
              "Yes, but only once per year",
            ],
            correctIndex: 1,
            explanation:
              "It trades the strike for the conciliation committee, whose award replaces agreement (§ 87(2)). The body with power inside the firm has no power to stop work.",
            sourceLessonSlug: "germany-strikes-and-the-peace-obligation",
          },
          {
            prompt: "Under § 74(1), how often must the employer and works council meet?",
            options: [
              "Once a year",
              "At least once a month, discussing matters 'with an earnest desire to reach agreement'",
              "Only when the employer chooses",
              "Never, meetings are voluntary",
            ],
            correctIndex: 1,
            explanation: "Conflict inside the German establishment isn't suppressed by culture; it is routed, into a monthly meeting.",
            sourceLessonSlug: "germany-strikes-and-the-peace-obligation",
          },
          {
            prompt: "Where does the German right to strike come from?",
            options: [
              "A statute passed in 1949",
              "Basic Law Art. 9(3) plus decades of Federal Labour Court (Bundesarbeitsgericht) case law, there is no statute granting it",
              "The Works Constitution Act, § 74",
              "An EU directive",
            ],
            correctIndex: 1,
            explanation:
              "It is judge-made law resting on the constitutional guarantee of freedom of association. This course does not cite you a case name for it, because it did not retrieve one.",
            sourceLessonSlug: "germany-strikes-and-the-peace-obligation",
          },
          {
            prompt: "Which of these is NOT protected industrial action in Germany?",
            options: [
              "A warning strike during a bargaining round after the peace obligation has lapsed",
              "A union strike aimed at a new collective agreement",
              "A spontaneous, unofficial walkout not led by a union ('wildcat strike')",
              "A strike organised by IG Metall over pay",
            ],
            correctIndex: 2,
            explanation:
              "Under the judge-made rules a strike must be led by a union and aimed at something a collective agreement could settle. Wildcat strikes, and purely political strikes, are not protected.",
            sourceLessonSlug: "germany-strikes-and-the-peace-obligation",
          },
          {
            prompt: "What is the Friedenspflicht (peace obligation)?",
            options: [
              "A ban on all strikes in Germany",
              "While a collective agreement is running, the matters it settles are off the table, you do not strike over what your own contract has already agreed",
              "A duty on the government to mediate every dispute",
              "A rule that strikes must be announced 30 days in advance",
            ],
            correctIndex: 1,
            explanation:
              "It is why German industrial conflict is legal, real, and almost entirely predictable: known level, known parties, known time, known subject.",
            sourceLessonSlug: "germany-strikes-and-the-peace-obligation",
          },
          {
            prompt: "This course refuses to quote a 'days lost to strikes' statistic for Germany. Why?",
            options: [
              "Because Germany has never had a strike",
              "Because it did not retrieve one from a primary source it trusts, learn the mechanism, be suspicious of the tidy number",
              "Because the figure is classified",
              "Because strike data is meaningless",
            ],
            correctIndex: 1,
            explanation:
              "The structural reasons for low disruption are well sourced. The headline statistic was not. So the course teaches the first and declines the second.",
            sourceLessonSlug: "germany-strikes-and-the-peace-obligation",
          },
          {
            prompt: "State the German trade in one sentence.",
            options: [
              "Germany gives workers a strike fund and takes away their board seats",
              "Germany gives the workforce a permanent, statutory seat, and takes away its ability to make a scene",
              "Germany gives workers pay rises and takes away their holidays",
              "Germany gives employers total control and workers nothing",
            ],
            correctIndex: 1,
            explanation:
              "An educated person should be able to state the price of an institution as fluently as its benefits. Co-determination's price is paid in the currency of disruption.",
            sourceLessonSlug: "germany-strikes-and-the-peace-obligation",
          },
          {
            prompt: "A works agreement (Betriebsvereinbarung) and a collective agreement (Tarifvertrag), which produces which?",
            options: [
              "The union produces the works agreement; the works council produces the collective agreement",
              "The works council + employer produce the works agreement; the union + employers' association produce the collective agreement",
              "Both are produced by the supervisory board",
              "Both are issued by the labour ministry",
            ],
            correctIndex: 1,
            explanation: "Two bodies, two statutes, two kinds of power, and § 77(3) is the line between them.",
            sourceLessonSlug: "germany-dual-system-and-tarifvorrang",
          },
          {
            prompt:
              "An employer in trouble wants its works council to accept a pay cut below the sectoral rate. What does it need first?",
            options: [
              "Nothing, the works council can simply agree",
              "An opening clause in the sectoral collective agreement expressly authorising the deviation (§ 77(3), second sentence)",
              "Permission from the supervisory board",
              "A court order",
            ],
            correctIndex: 1,
            explanation:
              "Absent an express authorisation in the collective agreement, a works agreement on pay is void. That is the whole point of Tarifvorrang.",
            sourceLessonSlug: "germany-dual-system-and-tarifvorrang",
          },
          {
            prompt: "Which body has power inside the German firm, and which body has the strike?",
            options: [
              "Both belong to the works council",
              "Both belong to the union",
              "The works council has power inside the firm; the union, outside the firm, has the strike",
              "Neither has either",
            ],
            correctIndex: 2,
            explanation:
              "That separation IS the deal. It is why conflict inside a German establishment is quiet: it has been routed somewhere else by design.",
            sourceLessonSlug: "germany-strikes-and-the-peace-obligation",
          },
          {
            prompt: "Under § 87(1)'s opening words, what happens to a works council's co-determination right if the collective agreement already covers the matter?",
            options: [
              "The works council co-determines it anyway",
              "The right does not apply, § 87(1) operates only 'in so far as [matters] are not prescribed by legislation or collective agreement'",
              "The works council may override the collective agreement",
              "The matter goes to the supervisory board",
            ],
            correctIndex: 1,
            explanation: "The second half of the seam. Between § 87(1)'s chapeau and § 77(3), the boundary between the two channels is fully written down.",
            sourceLessonSlug: "germany-dual-system-and-tarifvorrang",
          },
        ],
      },
    },

    // ────────────── SECTION 5 · THE EROSION ──────────────
    {
      slug: "germany-erosion-of-coverage",
      title: "13 · The coverage is falling, and has been for twenty-five years",
      section: "Section 5 · The erosion, do not tell a fairy tale",
      body: `Everything so far has been the German system working. **This lesson is the German system leaking**, and if you skip it you will walk away with a postcard instead of an education.

Go back to lesson 2 and the mechanism: **coverage rides on employers staying inside employers' associations.** You were told, at the end of that lesson, that this tells you exactly how the system breaks. Here is how.

## The numbers, and they are not good

Germany's own Federal Statistical Office (**Destatis**) publishes the series. As of **2023**:

| | **West** (old *Länder*) | **East** (new *Länder*) |
| --- | --- | --- |
| Covered by a **branch-level (sectoral)** agreement | **44%** | **31%** |
| Covered by a **company-level** agreement | **7%** | **14%** |
| **Covered by no collective agreement at all** | **49%** | **56%** |

*(Statistisches Bundesamt, 2023 data.)*

And the trend line, which is the part that matters:

- In the West, coverage has fallen from **76% in 1998** to about **51% in 2023**, **down 25 percentage points in a quarter of a century** (Destatis).
- In the East, it has fallen from **63% in 1998**, down about **19 percentage points** over the same period (Destatis).

**Nearly half of all German employees, and a clear majority of East German employees, now work in a company with no collective agreement of any kind.** The famous 49% national coverage figure (2024, OECD/AIAS) is not a plateau. **It is a point on a slide.**

**Two more shapes in the data, both from Destatis (2023):**
- **Coverage is a big-firm phenomenon.** It runs at about **62%** in companies with more than 200 employees, and peaks at only about **31%** in companies with 10 to 20.
- **And a sector story.** Coverage is around **98% in public administration**, **72%** in finance and insurance, **61%** in mining, and about **11%** in information and communication. **The German tech sector is, in bargaining terms, roughly as uncovered as the American private sector.**

## How employers left without leaving: *OT-Mitgliedschaft*

Now the mechanism, and it is elegant and a little bit ruthless.

Until the 1990s, the rule was simple: if you were a member of an employers' association, the association's collective agreements bound you (TVG § 3(1)). Membership and coverage were the same thing.

Then, facing member firms threatening to walk out over inflexible agreements, the associations invented a way to keep them: **membership *ohne Tarifbindung***, **"OT membership,"** membership **without collective-bargaining obligation**. You stay in the association. You get the legal advice, the lobbying, the services, the information. **You are simply not bound by the agreement the association signs.**

It was introduced as a stopgap to stop the bleeding. It became the norm. It has been studied extensively, Jirjahn (2022) analyses what drives firms to choose it, and its consequences show up directly in the numbers above: **the employers' association can still look strong while the agreement it negotiates covers fewer and fewer people.** Germany did not lose coverage because workers stopped joining unions. **Coverage was never made of union members.** It is being lost because employers found the exit that did not require them to leave.

## The extension tool Germany won't use

Remember TVG § 5 from lesson 2, the power to declare an agreement **generally binding**, which would sweep the OT firms and the non-members back in. Germany has it. **Germany barely uses it** ("rather exceptional, used in some industries only", OECD/AIAS), and Günther and Höpner (2023) wrote a paper whose title is the whole story: *"Why does Germany abstain from statutory bargaining extensions? Explaining the exceptional German erosion of collective wage bargaining."* Part of the answer is structural: the § 5 procedure requires the Ministry to act **in agreement with a committee** made up of three representatives each from the employer and union peak organisations, so **the employers' side sits on the committee that would have to approve binding the employers.**

## And then Germany had to build a floor it never needed

Here is the consequence, and it is the most elegant proof in this whole course that **institutions are plumbing, not culture.**

For most of its post-war history, **Germany had no national minimum wage.** It didn't need one. **The collective agreement *was* the wage floor**, when 76% of West German workers were covered, a legislated minimum would have been redundant for three out of four of them.

Then coverage fell. And a country with no national minimum wage and only half its workers covered has, by definition, **a large and growing hole where the bottom of the labour market used to be.**

So on **1 January 2015**, Germany introduced a **statutory national minimum wage** under the **Mindestlohngesetz (MiLoG)**, at **€8.50 an hour**. It has been raised repeatedly since; it stands at **€13.90 an hour from 1 January 2026**, and is legislated to rise to **€14.60 from 1 January 2027**.

**Read the arc.** The minimum wage is not an *addition* to the German model. **It is a patch on a hole the erosion opened.** The state had to build with law what the collective agreement used to build with contract. That is the same trade the Nordic countries are currently arguing about, and it is the deepest reason the Sweden & Denmark course in this track is worth taking next.

## Brussels has noticed

The EU's **Directive (EU) 2022/2041 on adequate minimum wages** sets a benchmark in **Article 4**: any member state whose collective-bargaining coverage is **below 80%** must draw up an **action plan**, with a timeline and concrete measures, to raise it. Germany, at ~49%, is well below that line.

**Two honest caveats**, because this is live law:
1. The Commission has been clear that the 80% figure is an **obligation of effort, not of result**, not a mandatory target.
2. On **11 November 2025**, the Court of Justice of the EU, in **Denmark v Parliament and Council (C-19/23)**, **annulled parts of Article 5** of the Directive (provisions on the criteria for setting statutory minimum wages), as an over-reach into national wage-setting. **Article 4, the collective-bargaining promotion duty, survived.** So the obligation to raise coverage still stands.

:::reveal German bargaining coverage has collapsed by 25 points in the West since 1998, but union density explains almost none of that. What does explain it? ||| Employers leaving the *agreement* without leaving the *association*, **OT-Mitgliedschaft** (*ohne Tarifbindung*), membership without collective-bargaining obligation, invented by the associations in the 1990s to retain restive members. Coverage was never made of union members (TVG § 3(1) binds through the EMPLOYER), so it was never union membership that could destroy it. And Germany declines to plug the gap with the statutory extension power (TVG § 5) it already has.

## Sources
- Court of Justice of the European Union. (2025, November 11). *Denmark v Parliament and Council* (C-19/23). https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A62023CJ0019
- Directive (EU) 2022/2041 of the European Parliament and of the Council of 19 October 2022 on adequate minimum wages in the European Union, Art. 4. https://eur-lex.europa.eu/eli/dir/2022/2041/oj/eng
- Günther, W., & Höpner, M. (2023). Why does Germany abstain from statutory bargaining extensions? Explaining the exceptional German erosion of collective wage bargaining. *Economic and Industrial Democracy, 44*(1), 88–108. https://doi.org/10.1177/0143831X211065783
- Jirjahn, U. (2022). On the determinants of bargaining-free membership in German employers' associations. *Industrial Relations Journal, 53*(6), 545–558. https://doi.org/10.1111/irj.12385
- Mindestlohngesetz [Minimum Wage Act] (Germany). Bundesministerium der Justiz. https://www.gesetze-im-internet.de/milog/
- OECD/AIAS. (n.d.). *ICTWSS database — country note: Germany*. https://www.oecd.org/content/dam/oecd/en/data/datasets/oecd-aias-ictwss/Germany.pdf
- Statistisches Bundesamt. (n.d.). *Quality of employment: Branch-specific collective agreements* [2023 data]. https://www.destatis.de/EN/Themes/Labour/Labour-Market/Quality-Employment/Dimension5/5_1_BranchSpecificCollectiveAgreements.html
- Tarifvertragsgesetz [Collective Agreements Act] (Germany), § 5. https://www.gesetze-im-internet.de/tvg/`,
    },
    {
      slug: "germany-erosion-of-the-board",
      title: "14 · Forty percent of the companies that owe workers a board seat don't give one",
      section: "Section 5 · The erosion, do not tell a fairy tale",
      body: `Channel one is leaking (lesson 13). **Channel two is leaking too**, and this one is stranger, because the law did not change. **The companies did.**

Recall the rule: a German company with **more than 2,000 employees** must give employees **half** the seats on its supervisory board (MitbestG § 1(1)). It is not optional. It is not a target. It is a statutory obligation.

Now the finding. The Hans-Böckler-Stiftung's Institute for Co-determination and Corporate Management (I.M.U.) has tracked this for decades, and in **Sick (2024)**, *Erosion der Unternehmensmitbestimmung*, Mitbestimmungsreport No. 81, the numbers are these, for **2022**:

- There were **1,084** German companies with **more than 2,000 domestic employees**.
- Only about **60%** of them actually had a parity-co-determined supervisory board, **down from about 67% in 2019**.
- **At least 2.45 million employees** in large enterprises were therefore **denied** the parity co-determination the 1976 Act nominally gives them, roughly **300,000 more** than in 2019.

**Roughly four in ten of the companies big enough to owe their workers half the boardroom do not deliver it.** And it is getting worse, not better.

## How? Three routes, all legal, none accidental

**1. Become a European company (SE).** The **Societas Europaea** is an EU legal form. When a company converts to an SE, the level of employee board representation is **negotiated and then frozen at whatever it was on the day of conversion**. So: convert **before** you cross the 2,000-employee threshold, while you owe workers one third, or nothing at all, and then grow. **You can become a 50,000-person company that never owes a parity board, because you locked the rule in when you were small.** The Hans-Böckler research is blunt about how common this is: **five of the six largest German SEs, together employing nearly half a million people, have no parity co-determination.**

**2. Wear a foreign legal form.** German co-determination statutes attach to German legal forms (AG, KGaA, GmbH, co-operative). Structure the group so the parent is, say, a Dutch **B.V.** sitting on top of a German limited partnership, a *B.V. & Co. KG*, and the German co-determination statutes have nothing to bite on. Sick (2024) counted **at least 72** companies using such hybrid constructions, covering roughly **399,000 employees**.

**3. The one-third gap** (*Drittelbeteiligungslücke*). The One-Third Participation Act, unlike the 1976 Act, has **no automatic attribution of subsidiaries' employees to the parent company**. Structure your group as a parent with subsidiaries and the headcount never adds up at the top. Around **750** enterprises of comparable size escape through this hole (Sick, 2024). **The best-known casualty is Wirecard**, the payments company whose collapse in 2020 was one of the largest frauds in German corporate history, which, because of this gap, **had no employee representatives on its supervisory board at all.** Whatever else was wrong at Wirecard, there was nobody in the boardroom whose job was to be suspicious on the workforce's behalf.

## What this actually tells you

**It tells you that co-determination is contested inside Germany, right now, by people with lawyers.** The picture where German business has made peace with workers in the boardroom is a picture of about 1985. Since then, a steady, well-advised, entirely lawful migration out of the statute has been under way, and it has moved **at least 2.45 million workers** out of a right their employers' size says they should have.

**And it tells you something a student of institutions should never forget: a law that attaches to a legal form can be escaped by changing the legal form.** The 1976 Act asks *what shape is this company?*, and the answer to that question turns out to be something a company can simply decide.

**One counter-fact, in fairness.** The number of parity-co-determined companies is *not* collapsing in absolute terms: it was **670 in 2025**, up from 667 in 2024, though below the peak of **767 in 2002** (Hans-Böckler-Stiftung, 2025). What has fallen is the **share** of eligible companies that comply, which is the number that tells you about intent.

:::reveal A German firm converts to a European Company (SE) while it still has 1,500 employees, then grows to 40,000. How many supervisory-board seats do its workers get? ||| Whatever they had **on the day of conversion**, because an SE's level of board-level participation is negotiated and then **frozen** at conversion. It never crosses into the Co-determination Act 1976's parity requirement, no matter how large it grows. Five of the six largest German SEs, employing nearly half a million people between them, have no parity co-determination (Sick, 2024).

## Sources
- Hans-Böckler-Stiftung. (2025). *Mitbestimmte Unternehmen: Zahlen und Fakten* [Co-determined companies: figures and facts]. Mitbestimmungsportal. https://www.mitbestimmung.de/html/starke-arbeitnehmerbank-in-635-197.html
- Mitbestimmungsgesetz [Co-determination Act] of 4 May 1976 (Germany), § 1. https://www.gesetze-im-internet.de/mitbestg/
- Sick, S. (2024). *Erosion der Unternehmensmitbestimmung* [Erosion of company co-determination] (Mitbestimmungsreport Nr. 81). Institut für Mitbestimmung und Unternehmensführung, Hans-Böckler-Stiftung. https://www.boeckler.de/de/pressemitteilungen-2675-erosion-der-unternehmensmitbestimmung-beschaeftigte-ohne-paritatische-mitbestimmung-61219.htm`,
      recallContent: [
        {
          prompt: "German collective bargaining coverage in the West: 1998 versus 2023?",
          answer: "76% in 1998, about 51% in 2023, down 25 percentage points (Destatis). In the East it fell about 19 points from 63%.",
        },
        {
          prompt: "What is OT-Mitgliedschaft and why did it matter?",
          answer:
            "Membership of an employers' association 'ohne Tarifbindung', without collective-bargaining obligation. Invented in the 1990s to retain restive members, it lets a firm stay in the association while escaping the agreement. It is the main engine of Germany's coverage collapse.",
        },
        {
          prompt: "Why did Germany introduce a statutory minimum wage in 2015 when it had never needed one?",
          answer:
            "Because the collective agreement used to BE the wage floor. When coverage fell far enough, a hole opened at the bottom of the labour market, and the state had to build with law (MiLoG, €8.50 from 1 Jan 2015; €13.90 from 1 Jan 2026) what the contract used to build on its own.",
        },
      ],
    },
    {
      slug: "germany-quiz-5",
      title: "Section 5 quiz · The erosion",
      section: "Section 5 · The erosion, do not tell a fairy tale",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What has happened to collective bargaining coverage in West Germany since 1998?",
            options: [
              "It has risen from 51% to 76%",
              "It has fallen from 76% to about 51%, down 25 percentage points",
              "It has been flat at about 50%",
              "It has fallen from 90% to 80%",
            ],
            correctIndex: 1,
            explanation:
              "Destatis. The famous ~49% national coverage figure is not a plateau, it is a point on a slide.",
            sourceLessonSlug: "germany-erosion-of-coverage",
          },
          {
            prompt: "In 2023, what share of EAST German employees worked in a company with no collective agreement at all?",
            options: ["14%", "31%", "49%", "56%"],
            correctIndex: 3,
            explanation:
              "56% in the East, against 49% in the West (Destatis, 2023). A clear majority of East German employees are uncovered.",
            sourceLessonSlug: "germany-erosion-of-coverage",
          },
          {
            prompt: "What is OT-Mitgliedschaft?",
            options: [
              "Overtime membership, a union scheme for shift workers",
              "Membership of an employers' association 'ohne Tarifbindung', WITHOUT being bound by the collective agreement it signs",
              "A works council for temporary workers",
              "A union membership discount",
            ],
            correctIndex: 1,
            explanation:
              "Introduced in the 1990s as a stopgap to retain restive member firms; it became the norm, and it is the main engine of the coverage collapse.",
            sourceLessonSlug: "germany-erosion-of-coverage",
          },
          {
            prompt: "Germany's coverage fell by 25 points in the West. Did union density cause that?",
            options: [
              "Yes, workers stopped joining unions",
              "No, coverage was never made of union members (TVG § 3(1) binds through the EMPLOYER). It fell because employers escaped the agreement while staying in the association",
              "Yes, the government abolished collective agreements",
              "No, coverage actually rose",
            ],
            correctIndex: 1,
            explanation:
              "The mechanism that gave Germany its high coverage is the same mechanism that is now losing it. Follow the plumbing.",
            sourceLessonSlug: "germany-erosion-of-coverage",
          },
          {
            prompt: "Germany could sweep uncovered firms back in by declaring agreements generally binding (TVG § 5). Why doesn't it?",
            options: [
              "The power was repealed in 1998",
              "It is used only exceptionally, partly because § 5 requires the Ministry to act in agreement with a committee on which the employers' peak organisations sit",
              "The EU forbids it",
              "German unions oppose it",
            ],
            correctIndex: 1,
            explanation:
              "Günther & Höpner (2023) wrote the paper on exactly this. The employers' side sits on the committee that would have to approve binding the employers.",
            sourceLessonSlug: "germany-erosion-of-coverage",
          },
          {
            prompt: "Why did Germany introduce a national statutory minimum wage in 2015, having never had one before?",
            options: [
              "Because the EU ordered it",
              "Because the collective agreement used to BE the floor, and as coverage collapsed, a hole opened at the bottom of the labour market that the state had to patch with law",
              "Because unions demanded it in 1949",
              "Because inflation rose",
            ],
            correctIndex: 1,
            explanation:
              "MiLoG, €8.50 from 1 January 2015, a patch on a hole the erosion opened, not an addition to the model. Institutions are plumbing, not culture.",
            sourceLessonSlug: "germany-erosion-of-coverage",
          },
          {
            prompt: "What does Article 4 of EU Directive 2022/2041 require of a member state with coverage below 80%?",
            options: [
              "It must reach 80% within five years or face fines",
              "It must draw up an action plan, with a timeline and concrete measures, to raise collective bargaining coverage",
              "It must abolish its statutory minimum wage",
              "Nothing, it is purely advisory",
            ],
            correctIndex: 1,
            explanation:
              "The Commission treats 80% as an obligation of EFFORT, not of result. Germany, at ~49%, is well below it.",
            sourceLessonSlug: "germany-erosion-of-coverage",
          },
          {
            prompt: "In November 2025 the CJEU ruled on the Adequate Minimum Wages Directive (C-19/23). What survived?",
            options: [
              "Nothing, the whole Directive was annulled",
              "Parts of Article 5 (criteria for setting statutory minimum wages) were annulled; ARTICLE 4, the duty to promote collective bargaining, survived",
              "Article 4 was annulled; Article 5 survived",
              "The Court upheld the Directive in full",
            ],
            correctIndex: 1,
            explanation:
              "Denmark v Parliament and Council, 11 November 2025. The obligation on Germany to raise coverage still stands.",
            sourceLessonSlug: "germany-erosion-of-coverage",
          },
          {
            prompt:
              "In 2022, what share of the 1,084 German companies with more than 2,000 domestic employees actually had a parity-co-determined supervisory board?",
            options: ["About 100%", "About 90%", "About 60%", "About 20%"],
            correctIndex: 2,
            explanation:
              "About 60%, down from ~67% in 2019 (Sick, 2024). Roughly four in ten of the companies that owe workers half the boardroom do not deliver it.",
            sourceLessonSlug: "germany-erosion-of-the-board",
          },
          {
            prompt: "How does converting to a European Company (SE) let a firm avoid parity co-determination?",
            options: [
              "SEs are exempt from all labour law",
              "The level of board-level participation is negotiated and then FROZEN at conversion, so convert while small, then grow past 2,000 employees without ever owing a parity board",
              "SEs must be registered in Luxembourg",
              "SEs have no supervisory board",
            ],
            correctIndex: 1,
            explanation:
              "Five of the six largest German SEs, employing nearly half a million people, have no parity co-determination (Sick, 2024).",
            sourceLessonSlug: "germany-erosion-of-the-board",
          },
          {
            prompt: "How many employees in large German enterprises were denied parity co-determination as of 2022?",
            options: ["At least 2.45 million", "About 50,000", "About 300,000", "Nobody, the law is universally complied with"],
            correctIndex: 0,
            explanation:
              "Sick (2024), Mitbestimmungsreport Nr. 81, roughly 300,000 more than in 2019. The trend is getting worse, not better.",
            sourceLessonSlug: "germany-erosion-of-the-board",
          },
          {
            prompt: "What is the Drittelbeteiligungslücke ('one-third gap'), and which famous collapse illustrated it?",
            options: [
              "A gap in pension funding; Deutsche Bank",
              "The One-Third Participation Act has no automatic attribution of subsidiaries' employees to the parent, so group structures escape it, which is why WIRECARD had no employee representatives on its supervisory board",
              "A gap in works-council coverage; Volkswagen",
              "A gap in the minimum wage; Amazon",
            ],
            correctIndex: 1,
            explanation:
              "Around 750 enterprises escape through this hole (Sick, 2024). At Wirecard there was nobody in the boardroom whose job was to be suspicious on the workforce's behalf.",
            sourceLessonSlug: "germany-erosion-of-the-board",
          },
          {
            prompt: "What general lesson about institutions does the board-level erosion teach?",
            options: [
              "Laws are always obeyed",
              "A law that attaches to a LEGAL FORM can be escaped by changing the legal form, and a company can simply decide what shape it is",
              "German companies are uniquely dishonest",
              "Co-determination has been repealed",
            ],
            correctIndex: 1,
            explanation:
              "The 1976 Act asks 'what shape is this company?', and that turns out to be a question with an optional answer.",
            sourceLessonSlug: "germany-erosion-of-the-board",
          },
          {
            prompt: "Collective bargaining coverage in the German information and communication sector (2023) was about…",
            options: ["98%", "72%", "31%", "11%"],
            correctIndex: 3,
            explanation:
              "About 11% (Destatis, 2023), against ~98% in public administration. The German tech sector is, in bargaining terms, roughly as uncovered as the American private sector.",
            sourceLessonSlug: "germany-erosion-of-coverage",
          },
          {
            prompt: "The number of parity-co-determined German companies was 670 in 2025. Why is that NOT reassuring on its own?",
            options: [
              "Because 670 is a made-up number",
              "Because the absolute count is roughly stable (peak 767 in 2002) while the SHARE of eligible companies complying has fallen, and the share is the number that tells you about intent",
              "Because it should be zero",
              "Because it counts coal and steel companies twice",
            ],
            correctIndex: 1,
            explanation:
              "Absolute counts hide the denominator. The eligible population grew; compliance within it fell from ~67% (2019) to ~60% (2022).",
            sourceLessonSlug: "germany-erosion-of-the-board",
          },
        ],
      },
    },

    // ────────────── SECTION 6 · THE VERDICT — WHAT IT ACTUALLY DOES ──────────────
    {
      slug: "germany-what-the-evidence-says",
      title: "15 · What the evidence says: real, but modest",
      section: "Section 6 · The verdict, what co-determination actually does",
      body: `You have taken the machine apart. You know the two numbers, the two channels, the casting vote, the peace obligation, and the erosion. One question is left, and it is the one people actually argue about at dinner: **does co-determination work?** Does putting workers in the room change what the firm does, pay, jobs, investment, survival?

For most of its history that question got answered with anecdotes and ideology. In the last decade it started getting answered with **data and a natural experiment**, and the answer is not the one either side wanted.

## The problem the economists had to solve

You cannot just compare co-determined firms to non-co-determined firms and call the difference "the effect of co-determination." Big firms have parity boards; small firms don't, so any comparison is really measuring **size**, not co-determination. To find the real effect you need two groups of firms that are alike in every way **except** whether the law put workers on the board. Germany, by accident of legislative history, produced exactly that.

## The boardroom study

Jäger, Schoefer and Heining (2021), *Labor in the Boardroom*, in the *Quarterly Journal of Economics*, used a sharp cut-off in German company law: firms incorporated in a particular window fell under board-level codetermination while otherwise-identical firms just the other side of the line did **not**. That is as close to a controlled experiment as this subject gets. What they found, comparing the two groups over years:

- **Little to no effect on wages.** Putting worker representatives on the supervisory board did **not** measurably raise (or cut) what the firm paid. The board seat is not a pay-raise machine.
- **It slightly *increased* capital investment.** The old fear, that workers on the board would vote for wages today and starve the firm of investment (an "underinvestment" or hold-up story), **did not happen.** If anything the co-determined firms invested a little *more* in capital.
- **No damage to productivity, profitability, or survival.** The other old fear, that co-determination would make firms sclerotic and drive them under, **also did not show up in the data.**

Read those three together and the headline writes itself: **board-level co-determination is neither the transfer machine its supporters hoped for nor the wrecking ball its opponents feared. Its measurable effects are small.**

## The wider review

That is one institution (the board). Jäger, Noy and Schoefer (2022), *What Does Codetermination Do?*, in *ILR Review*, stepped back and reviewed the broader empirical literature on German co-determination, works councils included. Their synthesis lands in the same place: the effects on wages, productivity and profits are **modest**, and co-determination is better understood as a set of institutions that **enable long-run cooperation** between labour and management than as a lever that redistributes large amounts of money or power. It coincides with Germany's cooperative, low-conflict industrial relations; it does not, by itself, transform who gets what.

## Why "modest" is the most interesting possible answer

It would be easy to read "modest effects" as "so it doesn't matter." **That is the wrong lesson, and here is why.** The claim that co-determination is a catastrophe for competitiveness is an **empirical** claim, and it fails the test. Firms with workers on the board do not underinvest, do not collapse, do not underperform. So the standard argument *against* co-determination, "it will scare off capital and destroy jobs", is not supported by the best evidence we have. That is a real finding, and it cuts against the doom-mongers.

But the mirror-image claim, that co-determination is the secret engine of high German wages and equality, **also** fails the same test. The wages were not, mostly, produced in the boardroom. If you want to know where German wage compression came from, the honest answer points back to **Section 1**: the sectoral collective agreement, the channel that is *eroding*. Co-determination sits alongside that system; it is not a substitute for it.

**So the evidence disciplines both sides.** Keep that in your pocket for the last lesson, where you get to form your own verdict, and you now have the thing you need to form one honestly: not a slogan, but a result.

:::reveal Critics say worker board seats will make firms underinvest and collapse; boosters say they are the engine of high German wages. What did the best natural-experiment evidence (Jäger, Schoefer & Heining, 2021) find about both claims? ||| Both are largely wrong. Board-level co-determination had little measurable effect on wages, it slightly *increased* capital investment rather than starving it, and it did no detectable damage to productivity, profitability or firm survival. Its effects are modest, which refutes the doom-mongers (no wrecked competitiveness) and disappoints the boosters (the boardroom is not where the high wages come from) in the same breath.

## Sources
- Jäger, S., Schoefer, B., & Heining, J. (2021). Labor in the boardroom. *The Quarterly Journal of Economics, 136*(2), 669–725.
- Jäger, S., Noy, S., & Schoefer, B. (2022). What does codetermination do? *ILR Review, 75*(4), 857–890.`,
      recallContent: [
        {
          prompt: "What did Jäger, Schoefer & Heining (2021) find about board-level co-determination's effect on wages and investment?",
          answer:
            "Little to no effect on wages, and a slight INCREASE in capital investment rather than the underinvestment critics predicted, with no detectable harm to productivity, profitability or firm survival. The effects are modest.",
        },
        {
          prompt: "Why is 'modest effects' the finding that disciplines both sides of the co-determination argument?",
          answer:
            "It refutes the doom-mongers, no evidence co-determination wrecks investment, productivity or competitiveness, and it disappoints the boosters, the high German wages come mainly from sectoral bargaining (Section 1), not from the boardroom. The boardroom seat is real but is not, by itself, a large lever on who gets what.",
        },
      ],
    },
    {
      slug: "germany-two-critiques-and-your-verdict",
      title: "16 · Two critiques, and your job now",
      section: "Section 6 · The verdict, what co-determination actually does",
      body: `A course that ended on "the effects are modest, the end" would be dodging the argument, not settling it. The modest-effects finding is a **fact**; what you make of it is a **judgement**, and educated people make it in two opposite directions. Here are both, stated as fairly as this course can state them, because you should be able to argue either before you pick.

## The critique from the right: it is a cost firms pay to escape

The efficiency critique says co-determination and sectoral bargaining make the German labour market **rigid**, hard to hire, hard to fire, hard to adjust, and split the workforce into protected **insiders** (covered, works-councilled, hard to dismiss) and exposed **outsiders** (the uncovered near-half from Section 5, the temps, the tech sector at ~11% coverage). And it makes an argument the previous section handed it for free: **look at what firms actually do.** They convert to European Companies to freeze board representation. They take *OT-Mitgliedschaft* to escape the agreement. They wear foreign legal forms. A firm that engineers its way out of an institution is telling you, in the only language that never lies, its own behaviour, that it experiences the institution as a **burden**. That is real, and it is the strongest single fact on this side of the table.

**The reply from the evidence (lesson 15) is just as real:** the predicted efficiency *damage* does not show up. Firms may dislike co-determination, but co-determined firms are not less productive, less profitable, or shorter-lived. "They try to avoid it" and "it does measurable harm" are different claims, and only the first survives contact with the data. You are allowed to hold both.

## The critique from the left: it is a golden cage

The opposite critique grants that co-determination is real and says that is exactly the problem. Recall the trade from Section 4: **the body with power inside the firm cannot strike** (BetrVG § 74(2)), and on the board **the shareholders keep the casting vote** (MitbestG § 29(2)). So co-determination, on this view, **incorporates** workers, it buys their cooperation and their quiet with a seat at a table where the owners still decide the close votes. It blunts militancy, ties the union's fate to the firm's competitiveness, and turns worker representatives into co-managers of their own exploitation. And the modest-effects finding is, for this critique, **not a disappointment but a confirmation**: a system that changes the distribution of money and power only a little is a system that has traded the strike for a chair, and got a chair.

**The reply here** is the erosion itself: the parts of the German model now visibly disappearing, coverage, the parity board, are the parts firms are fighting to escape, which is not what you would expect if the whole thing were a toothless management ploy. You do not build elaborate legal machinery to escape a cage that was holding no one.

## Your job now

You came in with two numbers you could not explain. You can now explain them, and a great deal more:

- **Who is allowed to organise, who is excluded, who bargains with whom, and what happens if you try**, the anchor course's four questions, answered for Germany in Section 1. (If you have not taken **The History of Unions: America and the World**, take it next; it is where those four questions come from, and this course did not repeat their derivation.)
- The difference between **information, consultation and co-determination**, three amounts of power that sloppy writing turns into synonyms, and you will now never misread again.
- Why **14% density and ~49% coverage** are not a contradiction but a design, and why that design is **eroding**.
- And now a **verdict you can defend**: co-determination is a real institution with modest measured effects, admired and escaped at the same time, and worth neither a postcard nor a takedown.

That last one is the whole point of the Workers' Rights track. Germany is one answer to "who decides?", a good one, an eroding one, an argued-over one. **The next country you study will answer it differently**, and the tool for comparing them is the one you now hold. The natural next step in the track is the Nordic model (Sweden and Denmark), where, as lesson 13 flagged, the same fight over whether the *law* or the *contract* should hold up the floor is being had from the other side. Same question. Different plumbing.

:::reveal State the two opposite critiques of German co-determination in one line each, and the fact that answers each. ||| From the right: it is a rigid cost that splits workers into insiders and outsiders, answered by firms' own escape behaviour (SE conversions, OT-membership), but undercut by evidence showing no productivity or survival damage. From the left: it is a golden cage that trades the strike (§ 74(2)) and the casting vote (§ 29(2)) for cooperation and buys industrial peace by incorporating workers, answered by the erosion itself, since firms fight hard to escape an institution the critique calls toothless.

## Sources
- Betriebsverfassungsgesetz [Works Constitution Act] (Germany), § 74(2) [official English translation]. Bundesministerium der Justiz. https://www.gesetze-im-internet.de/englisch_betrvg/englisch_betrvg.html
- Jäger, S., Noy, S., & Schoefer, B. (2022). What does codetermination do? *ILR Review, 75*(4), 857–890.
- Mitbestimmungsgesetz [Co-determination Act] of 4 May 1976 (Germany), § 29(2). Bundesministerium der Justiz. https://www.gesetze-im-internet.de/mitbestg/`,
      recallContent: [
        {
          prompt: "What is the single strongest fact behind the 'efficiency' critique of co-determination from the right?",
          answer:
            "Revealed preference: firms engineer their way out of it, converting to a Societas Europaea to freeze board representation, taking OT-Mitgliedschaft to escape the agreement, adopting foreign legal forms. A firm that spends effort escaping an institution is signalling it experiences it as a cost. (The reply: the predicted efficiency DAMAGE still does not show up in the data.)",
        },
        {
          prompt: "How does the 'golden cage' critique from the left read the modest-effects finding?",
          answer:
            "As confirmation, not disappointment. The works council cannot strike (§ 74(2)) and shareholders keep the casting vote (§ 29(2)), so co-determination incorporates workers and buys industrial peace; a system that redistributes little is a system that traded militancy for a chair. (The reply: firms fight hard to escape it, which is odd for a supposedly toothless institution.)",
        },
      ],
    },
    {
      slug: "germany-quiz-6",
      title: "Section 6 quiz · The verdict",
      section: "Section 6 · The verdict, what co-determination actually does",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt:
              "Why can't you measure the effect of co-determination by simply comparing co-determined firms to non-co-determined firms?",
            options: [
              "Because co-determined firms refuse to share data",
              "Because co-determined firms are the big ones and the others are small, so the comparison measures SIZE, not co-determination",
              "Because co-determination is illegal to study",
              "Because the two groups are identical, so there is nothing to compare",
            ],
            correctIndex: 1,
            explanation:
              "Board thresholds are size thresholds. To isolate the effect you need firms alike in everything except whether the law put workers on the board, which a sharp legal cut-off provided.",
            sourceLessonSlug: "germany-what-the-evidence-says",
          },
          {
            prompt:
              "In Jäger, Schoefer & Heining (2021), what happened to WAGES when workers were placed on the supervisory board?",
            options: [
              "Wages jumped sharply",
              "Wages collapsed",
              "There was little to no measurable effect on wages",
              "Wages doubled within five years",
            ],
            correctIndex: 2,
            explanation:
              "The board seat is not a pay-raise machine. German wage compression comes mainly from sectoral bargaining (Section 1), not from the boardroom.",
            sourceLessonSlug: "germany-what-the-evidence-says",
          },
          {
            prompt:
              "Critics predicted that workers on the board would starve firms of investment ('underinvestment'). What did the evidence actually show about capital investment?",
            options: [
              "Investment collapsed, exactly as predicted",
              "Investment was unaffected",
              "Investment slightly INCREASED, the opposite of the prediction",
              "Investment moved entirely abroad",
            ],
            correctIndex: 2,
            explanation:
              "If anything, co-determined firms invested a little more in capital. The hold-up / underinvestment fear did not materialise.",
            sourceLessonSlug: "germany-what-the-evidence-says",
          },
          {
            prompt:
              "What did the boardroom study find about productivity, profitability, and firm survival under co-determination?",
            options: [
              "Sharp declines in all three",
              "No detectable damage to any of them",
              "Firms survived but became far less profitable",
              "Productivity rose but survival fell",
            ],
            correctIndex: 1,
            explanation:
              "The 'co-determination makes firms sclerotic and drives them under' fear did not show up in the data either. The measurable effects are small.",
            sourceLessonSlug: "germany-what-the-evidence-says",
          },
          {
            prompt:
              "Jäger, Noy & Schoefer (2022), 'What Does Codetermination Do?', best characterises co-determination's effects as…",
            options: [
              "Enormous and redistributive",
              "Modest, better understood as enabling long-run cooperation than as a large lever on wages, productivity or profits",
              "Uniformly negative for firms",
              "Impossible to measure",
            ],
            correctIndex: 1,
            explanation:
              "The review lands where the boardroom study does: modest measured effects; co-determination coincides with cooperative labour relations rather than transforming distribution.",
            sourceLessonSlug: "germany-what-the-evidence-says",
          },
          {
            prompt:
              "How does the 'modest effects' finding cut against the DOOM-MONGERS (co-determination's critics)?",
            options: [
              "It shows co-determination doubled German wages",
              "It shows the predicted damage, wrecked investment, lost productivity, firm collapse, does not appear in the data",
              "It shows co-determination is unconstitutional",
              "It shows firms love co-determination",
            ],
            correctIndex: 1,
            explanation:
              "'It will scare off capital and destroy jobs' is an empirical claim, and it fails the test. Co-determined firms do not underinvest or collapse.",
            sourceLessonSlug: "germany-what-the-evidence-says",
          },
          {
            prompt:
              "How does the same 'modest effects' finding cut against the BOOSTERS (co-determination's champions)?",
            options: [
              "It proves co-determination should be abolished",
              "It shows the high German wages come mainly from sectoral bargaining, not the boardroom, so co-determination is not the engine boosters claim",
              "It shows co-determination raises profits enormously",
              "It shows works councils are illegal",
            ],
            correctIndex: 1,
            explanation:
              "The wages were not, mostly, produced in the boardroom. Co-determination sits alongside the sectoral system; it is not a substitute for the channel that is eroding.",
            sourceLessonSlug: "germany-what-the-evidence-says",
          },
          {
            prompt:
              "What is the single strongest fact behind the efficiency (right-side) critique of co-determination?",
            options: [
              "That co-determination is banned in the United States",
              "Revealed preference, firms spend real effort engineering their way OUT of it (SE conversions, OT-membership, foreign legal forms), which signals they experience it as a burden",
              "That works councils go on strike constantly",
              "That co-determined firms always go bankrupt",
            ],
            correctIndex: 1,
            explanation:
              "Behaviour is the language that never lies. But note the limit: 'firms try to avoid it' and 'it does measurable harm' are different claims, and only the first survives the data.",
            sourceLessonSlug: "germany-two-critiques-and-your-verdict",
          },
          {
            prompt:
              "The efficiency critique says the German labour market splits into 'insiders' and 'outsiders.' Who are the outsiders, in the terms of this course?",
            options: [
              "Supervisory-board members",
              "The uncovered near-half of workers from Section 5, temps, and low-coverage sectors like tech at ~11%",
              "Trade union officials",
              "Executives excluded from the works council",
            ],
            correctIndex: 1,
            explanation:
              "Protected covered insiders on one side; the eroding, uncovered remainder on the other. The coverage collapse of Section 5 is what gives this critique its bite.",
            sourceLessonSlug: "germany-two-critiques-and-your-verdict",
          },
          {
            prompt:
              "The 'golden cage' critique from the left points to two statutory facts to argue co-determination pacifies workers. Which two?",
            options: [
              "The five-employee threshold and the four-year term",
              "The works council cannot strike (BetrVG § 74(2)) and the shareholder chair keeps the casting vote (MitbestG § 29(2))",
              "The finance committee and the labour director",
              "The reference clause and the opening clause",
            ],
            correctIndex: 1,
            explanation:
              "No strike inside the firm, and the owners break the close votes on the board, so co-determination buys cooperation with a seat where shareholders still decide.",
            sourceLessonSlug: "germany-two-critiques-and-your-verdict",
          },
          {
            prompt:
              "How does the 'golden cage' critique read the modest-effects evidence?",
            options: [
              "As proof co-determination should be expanded",
              "As confirmation, a system that redistributes little is one that traded militancy for a chair",
              "As evidence the data are wrong",
              "As irrelevant to its argument",
            ],
            correctIndex: 1,
            explanation:
              "For this critique the small effects are the point, not a disappointment: cooperation was bought, and it changed the distribution of money and power only a little.",
            sourceLessonSlug: "germany-two-critiques-and-your-verdict",
          },
          {
            prompt:
              "What is the reply to the 'golden cage' (toothless-ploy) critique, drawn from Section 5?",
            options: [
              "There is no reply; the critique is unanswerable",
              "The erosion itself, firms build elaborate legal machinery to ESCAPE co-determination, which is strange behaviour toward an institution that supposedly holds no one",
              "That works councils actually can strike",
              "That co-determination raised wages enormously",
            ],
            correctIndex: 1,
            explanation:
              "You do not spend effort escaping a cage that isn't holding you. The escape routes cut against the claim that co-determination is purely a management ploy.",
            sourceLessonSlug: "germany-two-critiques-and-your-verdict",
          },
          {
            prompt:
              "A student says: 'Firms avoid co-determination, therefore it must do them real economic harm.' What is the precise flaw?",
            options: [
              "Firms do not actually avoid it",
              "'Firms try to avoid it' and 'it does measurable harm' are different claims, the evidence supports the first but not the second",
              "Co-determination is voluntary, so avoidance is impossible",
              "There is no flaw; the reasoning is correct",
            ],
            correctIndex: 1,
            explanation:
              "Revealed preference shows firms dislike the institution; the outcome data show co-determined firms are not less productive, profitable or long-lived. Hold both.",
            sourceLessonSlug: "germany-two-critiques-and-your-verdict",
          },
          {
            prompt:
              "Which honest one-line verdict on German co-determination does this course arrive at?",
            options: [
              "A fairy tale of workers running German industry",
              "A toothless management ploy with no real content",
              "A real institution with modest measured effects, admired and escaped at once, worth neither a postcard nor a takedown",
              "The single cause of high German wages",
            ],
            correctIndex: 2,
            explanation:
              "Neither cheerleading nor takedown. That defensible, evidence-disciplined verdict is the deliverable of the whole course.",
            sourceLessonSlug: "germany-two-critiques-and-your-verdict",
          },
          {
            prompt:
              "The course points you to the Nordic model (Sweden and Denmark) as the next step in the track. What shared question makes that the natural comparison?",
            options: [
              "Whether workers should sit on boards at all",
              "Whether the LAW or the CONTRACT should hold up the wage floor, the same fight Germany's erosion and 2015 minimum wage exposed, argued from the other side",
              "Whether unions should be legal",
              "Whether to abolish the supervisory board",
            ],
            correctIndex: 1,
            explanation:
              "Same question, 'who decides?', and law-versus-contract for the floor, different plumbing. The four questions from the anchor course are the tool for comparing them.",
            sourceLessonSlug: "germany-two-critiques-and-your-verdict",
          },
        ],
      },
    },
  ],
};
