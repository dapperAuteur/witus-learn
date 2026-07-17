// Authored "South Africa: The Union That Helped End Apartheid — Then Joined the Government" —
// Wave 2 of the Workers' Rights track (plans/future-courses/workers-rights-track-proposal.md).
// A country course hanging off the anchor, "The History of Unions: America and the World"
// (scripts/data/history-of-unions-course.ts). The anchor gives ONE lesson to Poland + South Africa
// ("when a union is the opposition", slug `solidarity-and-cosatu`) and supplies the four questions;
// this course goes deep on South Africa and CROSS-LINKS the anchor rather than re-telling it.
// Sibling to "Poland: Solidarność" (scripts/data/labor-poland-course.ts) — match its shape and depth.
//
// ⚠️⚠️ NEEDS-REVIEW-BEFORE-PROMOTION ⚠️⚠️
// Per the track proposal ("What BAM would need", item 2): this course requires a SOUTH AFRICAN
// REVIEWER before it is promoted/published. Marikana is still litigated (civil claims and
// prosecutions open as of 2026) and the ANC–SACP–COSATU alliance is a live domestic political
// fight. The same posture the repo takes on the Hoodoo courses (held pending review by a
// knowledgeable member of the tradition). Seeding is fine; PROMOTION waits for the reviewer.
// See plans/user-tasks/123-seed-labor-south-africa.md.
//
// The spine: the union movement that helped end apartheid — and then joined the government it once
// fought. Not a triumph story, not a betrayal story: both facts held at once, and the cost of a
// federation living inside the state it must bargain with, taught honestly.
//
// Sourcing discipline (the load-bearing part of this file):
//   * EVERY figure carries a YEAR and a source. COSATU launch ~460,000 members across 33 unions
//     (1 December 1985, Durban) is South African History Online (SAHO). Durban 1973 strike counts
//     are given as the documented RANGE (≈61,000 in Durban Jan–Mar per the Institute for Industrial
//     Education's 1974 study; ≈100,000 nationally during 1973 per SAHO) — not a single invented
//     number. Unemployment 32.9% official / 43.1% expanded (Q1 2025) is Stats SA's Quarterly Labour
//     Force Survey (P0211). Union-density figures are presented AS contested, with the variance
//     named (survey-dependent, between roughly a quarter and three in ten formal employees since
//     the 1990s; ILO/ICTWSS) rather than asserted to a decimal.
//   * STATUTES ARE PRECISE OR GENERIC, never half-remembered: Industrial Conciliation Act 11 of
//     1924; Mines and Works Act 12 of 1911 + Amendment Act 25 of 1926; Native Labour (Settlement of
//     Disputes) Act 48 of 1953; Industrial Conciliation Act 28 of 1956 (s 77 job reservation);
//     Industrial Conciliation Amendment Act 94 of 1979 (the Wiehahn opening); Labour Relations Act
//     66 of 1995; Constitution of the Republic of South Africa, 1996, s 23; Labour Relations
//     Amendment Act 6 of 2014 (s 198A deeming); National Minimum Wage Act 9 of 2018.
//   * 🔴 MARIKANA (16 Aug 2012, 34 miners killed by police at Lonmin) is taught FROM THE PUBLISHED
//     FINDINGS of the Farlam Commission (report handed to the President 31 March 2015, released
//     25 June 2015) plus reputable contemporaneous reporting. The lesson separates what the
//     commission FOUND from what it did NOT find; accountability (civil claims, prosecutions) is
//     stated as STILL OPEN and dated "as of 2026", with no adjudication beyond the record. Every
//     sentence in the two Marikana lessons is written to be checkable against a citation — this is
//     the content the South African reviewer most needs to check.
//   * NEUTRAL + DATED on live South African politics. The alliance debate (COSATU staying in vs
//     NUMSA/SAFTU leaving) is steelmanned FROM EACH SIDE'S OWN STATEMENTS (Joe Foster's 1982 FOSATU
//     address; COSATU congress positions; NUMSA's December 2013 resolutions; SAFTU's 2017 founding
//     declaration). The course adjudicates none of it. The Poland cross-link ("won the state — lost
//     the workplace?") is offered as a QUESTION, not forced as a verdict.
//   * THE RHYME is taught explicitly: labour broking (LRA s 198 "temporary employment services") is
//     the SAME structural move the anchor teaches in the US (misclassification), the Mexico course
//     teaches (protection contracts) and the Poland course teaches (junk contracts) — a legal form
//     that moves the worker OUTSIDE the protected category. Apartheid's exclusion of Black workers
//     from the word "employee" is that move at its most explicit anywhere in the track: by race,
//     by statute.

import type { AuthoredCourse } from "./authored-course";

export const LABOR_SOUTH_AFRICA_COURSE: AuthoredCourse = {
  title: "South Africa: The Union That Helped End Apartheid — Then Joined the Government",
  description:
    "Apartheid South Africa put Black workers outside labour law by name: the Industrial Conciliation Act of 1924 wrote them out of the word \"employee,\" a 1953 statute criminalised their strikes, and \"job reservation\" saved the best jobs for white workers by law — the bluntest version of the exclusion move this track finds in country after country. This course follows what the excluded built anyway: the leaderless Durban strikes of 1973, the shop-steward unions that became COSATU in 1985 (about 460,000 members at launch — South African History Online), the three-week miners' strike of 1987, and the Tripartite Alliance with the ANC that helped end apartheid in 1994. Then it follows the harder story after the victory. The Labour Relations Act 66 of 1995 is among the most worker-friendly statutes anywhere, written partly by the unionists who had just won — and yet official unemployment stands at 32.9% (Q1 2025, Stats SA), labour broking moves workers outside the paper protections, and on 16 August 2012 police of the democratic state shot dead 34 striking miners at Marikana. That day is taught soberly, from the published findings of the Farlam Commission — what it found, what it did not find, and what is still unresolved, dated and left open. The course ends with the fracture the alliance produced — NUMSA expelled in 2014, the rival SAFTU federation founded in 2017 — and with a question borrowed from this track's Poland course, offered and not answered: can a union movement win the state without losing the workplace? Cited to South African History Online, the statutes themselves, Stats SA, the ILO and the Marikana Commission report. A country course in the Workers' Rights track — take \"The History of Unions: America and the World\" first.",
  lessons: [
    // ────────────── SECTION 1 · THE PARADOX ──────────────
    {
      slug: "sa-the-paradox",
      title: "1 · The union that helped free a country — and the massacre on its watch",
      section: "Section 1 · The paradox that runs the whole course",
      body: `Here are two facts about the same country and, in a real sense, the same movement. Both are true. Hold them next to each other and you have this entire course.

| | South Africa |
| --- | --- |
| **1 December 1985** | The Congress of South African Trade Unions (**COSATU**) is launched in Durban — **33 unions, about 460,000 members** (South African History Online) — and becomes one of the central engines of the movement that ends apartheid in **1994** |
| **16 August 2012** | Police of the democratic South Africa — governed by the alliance COSATU belongs to — shoot dead **34 striking miners** in a single afternoon at **Marikana** (Marikana Commission of Inquiry report, 2015), the deadliest use of force by South African police since the end of apartheid (BBC News, 2012) |

Read those two rows again, because the distance between them is the reason this course exists.

**Row one is one of the great labour stories ever told.** Under apartheid, Black South Africans could not vote, and for most of the century Black workers were excluded from labour law itself — not by accident, but **by race, written into the statute** (Section 2 shows you the exact words). What they built anyway — a union federation forged on the shop floor, democratic to its stewards, allied to a liberation movement — helped make the country ungovernable and helped end one of the most elaborate systems of racial domination the modern world has produced. When South Africans of every race finally voted on **27 April 1994**, union members had done as much as anyone alive to bring that day about.

**Row two is what the same country looked like eighteen years later.** The miners who died at Marikana were striking against a platinum company for a living wage — R12,500 a month. The police who shot them answered to a government led by the African National Congress, the party COSATU had fought beside and formally allied with. The largest union on that mine, the National Union of Mineworkers, was a founding COSATU affiliate — and many of the strikers had just abandoned it for a rival. A union federation that had once faced the state's guns was now, in the eyes of many of the dead men's families, standing next to them.

**This course refuses two easy versions of that story.** The first is the **triumph story** — end the course in 1994, roll credits. The second is the **betrayal story** — read Marikana backwards and conclude the struggle was a fraud. Both are cheap, and both are false to the record. The honest version is harder: a union movement really did help free a country, *and* the alliance it formed to do so put it inside a government it now has to bargain with, criticise, and answer for — a position no union in this track's Wave 1 ever occupied, and one that has costs this course will name precisely, from the record, with dates.

**One warning before you start.** Much of what this course covers is not history yet. Marikana's civil claims and prosecutions were still moving through South African courts when this course was written (2026), and the alliance is a live fight in South African politics — argued about in every election. This course teaches from published findings and each side's own words, dates every claim, and does not tell you who is right where South Africans themselves have not settled it.

:::reveal COSATU helped end apartheid in 1994; in 2012, police of the democratic state killed 34 striking miners at Marikana. Why does this course refuse to collapse those two facts into either a triumph story or a betrayal story? ||| Because both facts are true and neither cancels the other. The triumph story (end in 1994) hides the cost of the federation's move inside the state — Marikana happened on the alliance's watch. The betrayal story (read Marikana backwards) falsifies a real liberation: the union movement genuinely helped free the country. The honest version holds both — a union that won its war and then had to live inside the government it created — and that tension, not either verdict, is the course.

## Sources
- South African History Online. (n.d.). *The Congress of South African Trade Unions (COSATU)*. https://sahistory.org.za/article/congress-south-african-trade-unions-cosatu
- Republic of South Africa. (2015). *Report of the Marikana Commission of Inquiry*. https://www.gov.za/documents/marikana-commission-inquiry-report
- BBC News. (2012, August 17). *South Africa's Lonmin Marikana mine clashes killed 34*. https://www.bbc.com/news/world-africa-19292909`,
      recallContent: [
        {
          prompt: "What was launched in Durban on 1 December 1985, and at what size?",
          answer:
            "COSATU — the Congress of South African Trade Unions — with 33 affiliated unions and about 460,000 members (South African History Online). It became one of the central engines of the movement that ended apartheid in 1994.",
        },
        {
          prompt: "What happened at Marikana on 16 August 2012, and why does it open this course?",
          answer:
            "Police shot dead 34 striking miners at Lonmin's Marikana platinum mine — the deadliest police action since apartheid ended (BBC, 2012). It opens the course because it happened under the government COSATU's alliance helped elect: the paradox the whole course must explain.",
        },
      ],
    },
    {
      slug: "sa-four-questions",
      title: "2 · The four questions, asked of South Africa",
      section: "Section 1 · The paradox that runs the whole course",
      body: `If you have taken **The History of Unions: America and the World** — the anchor course of this track — you already own the tool this course runs on. Four questions you can ask of any country on earth:

1. **Who is allowed to organise?**
2. **Who is excluded?**
3. **Who bargains with whom, and at what level?**
4. **What happens to you if you try?**

*(If you haven't: you can follow this course without it, but take it after. The anchor gives South Africa half of a single lesson — "Poland and South Africa: when a union is the opposition" — and this course is the deep version of the South African half. The anchor also teaches the Wiehahn Commission and Marikana in two paragraphs; here they each get the room they deserve.)*

Here are South Africa's answers in advance — and notice that they move **three times**, which is once more than any other country in this track.

**Q1 — Who is allowed to organise?** Under apartheid: **white, coloured and Indian workers, in registered unions; African workers, not** — and the exclusion was not custom or employer resistance but **statute** (Section 2 quotes it). Then, from 1979, a strange opening: the state *let* African workers into the registered system, hoping registration would mean control — and the unions took the opening and turned it into a weapon (Section 3). Today, the answer is: **everyone.** Section 23 of the 1996 Constitution gives every worker the right to form and join a union and to strike — one of the few constitutions on earth that entrenches the strike itself. South Africa ratified ILO Conventions 87 and 98 in **February 1996**, within two years of democracy; the apartheid state never had (ILO NORMLEX).

**Q2 — Who is excluded?** Under apartheid, the answer was a race. Today the exclusions wear the track's familiar disguises instead: the worker whose employer on paper is a **labour broker** rather than the company whose floor she sweeps (Section 4), and — South Africa's bleakest number — the roughly **one in three** who has no job at all (32.9% official unemployment, Q1 2025, Stats SA) and so stands outside the entire bargaining system, however progressive its paper.

**Q3 — Who bargains with whom, and at what level?** Under apartheid: industrial councils for those inside the racial door; "works committees" — talking shops with no power — for those outside it. Today: **bargaining councils** by sector, a national bargaining forum (NEDLAC) where unions, business and the state negotiate legislation itself, and — the fact with no parallel in this track — a union federation **formally allied to the governing party**, bargaining with a state its own former officials help run. Whether that is influence or capture is the fight of Section 6.

**Q4 — What happens to you if you try?** Run the dates. **1946:** African mineworkers strike; police drive them back down the shafts; at least nine dead (SAHO). **1973:** Durban strikers elect no leaders at all, because a leader is a person the police can arrest. **1987:** three weeks of strike, tens of thousands dismissed. **2012:** thirty-four strikers shot dead in an afternoon — *under democracy*. That last answer is the one this course will not let you look away from, and it is taught from the commission's findings, not from anyone's slogans (Section 5).

**One map for the whole course.** Apartheid's answers (exclusion by race, by statute) → the struggle's answers (the union as the ballot of the voteless) → democracy's answers (the best rights on paper in the track, and Marikana on its watch). Watch all four questions move each time.

:::reveal South Africa's answers to the anchor's four questions moved three times — under apartheid, during the struggle, and under democracy. For Question 2 (who is excluded?), what changed between the first era and the third? ||| Under apartheid the excluded were defined by race, in the statute itself — African workers written out of the word "employee." Under democracy the racial bar is gone and the Constitution covers everyone; the excluded are now defined by position instead: workers whose paper employer is a labour broker rather than the firm they actually work in, and the roughly one in three South Africans (32.9% official, Q1 2025, Stats SA) who have no job at all and so stand outside the whole bargaining system.

## Sources
- Republic of South Africa. (1996). *Constitution of the Republic of South Africa, 1996* (s 23, Labour relations). https://www.gov.za/documents/constitution-republic-south-africa-1996
- International Labour Organization. (n.d.). *Ratifications for South Africa — C087 and C098*. NORMLEX. https://normlex.ilo.org/
- Statistics South Africa. (2025). *Quarterly Labour Force Survey, Q1 2025* (P0211). https://www.statssa.gov.za/?page_id=1854&PPN=P0211
- South African History Online. (n.d.). *The 1946 African Mine Workers' Strike*. https://sahistory.org.za/article/1946-african-mine-workers-strike`,
      recallContent: [
        {
          prompt: "What are the anchor course's four questions?",
          answer:
            "(1) Who is allowed to organise? (2) Who is excluded? (3) Who bargains with whom, and at what level? (4) What happens to you if you try? South Africa's answers move three times — apartheid, the struggle, democracy — more than any other country in the track.",
        },
        {
          prompt: "What does Section 23 of South Africa's 1996 Constitution do, and when did South Africa ratify ILO Conventions 87 and 98?",
          answer:
            "Section 23 gives every worker the constitutional right to form and join a union, to organise, to bargain collectively — and to strike, one of the few constitutions that entrenches the strike itself. South Africa ratified ILO C87 and C98 in February 1996, within two years of democracy; the apartheid state never had.",
        },
      ],
    },
    {
      slug: "sa-quiz-1",
      title: "Section 1 quiz · The paradox, and the four questions",
      section: "Section 1 · The paradox that runs the whole course",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "When and where was COSATU launched, and at roughly what size?",
            options: [
              "Johannesburg, 1994, with about 50,000 members",
              "Durban, 1 December 1985, with 33 unions and about 460,000 members",
              "Cape Town, 1973, with 12 unions",
              "Pretoria, 1979, with about 1 million members",
            ],
            correctIndex: 1,
            explanation:
              "COSATU launched in Durban on 1 December 1985 with 33 affiliated unions and roughly 460,000 members (South African History Online) — and grew fast from there.",
            sourceLessonSlug: "sa-the-paradox",
          },
          {
            prompt: "What happened at Marikana on 16 August 2012?",
            options: [
              "Miners won a court case against Lonmin",
              "Police shot dead 34 striking miners at Lonmin's platinum mine in a single afternoon",
              "A mine collapse killed 34 workers",
              "The government nationalised the mine",
            ],
            correctIndex: 1,
            explanation:
              "Police killed 34 strikers and wounded at least 78 (Marikana Commission of Inquiry report, 2015) — the deadliest police action since the end of apartheid (BBC, 2012).",
            sourceLessonSlug: "sa-the-paradox",
          },
          {
            prompt: "Why does the course open by pairing COSATU's 1985 launch with Marikana 2012?",
            options: [
              "To show the union movement never mattered",
              "Because the distance between them — a union that helped free the country, and a massacre under the government its alliance helped elect — is the paradox the whole course must explain",
              "Because both events happened in Durban",
              "To prove apartheid never really ended",
            ],
            correctIndex: 1,
            explanation:
              "Both facts are true and neither cancels the other. Holding them together, rather than choosing a triumph or betrayal story, is the course's method.",
            sourceLessonSlug: "sa-the-paradox",
          },
          {
            prompt: "What two 'easy versions' of the South African story does the course refuse?",
            options: [
              "The economic version and the political version",
              "The triumph story (end in 1994, roll credits) and the betrayal story (read Marikana backwards and call the struggle a fraud)",
              "The rural version and the urban version",
              "The union version and the employer version",
            ],
            correctIndex: 1,
            explanation:
              "Both are cheap and false to the record. The honest version holds the liberation and its costs at once.",
            sourceLessonSlug: "sa-the-paradox",
          },
          {
            prompt: "What were the Marikana strikers demanding?",
            options: [
              "A living wage of R12,500 a month",
              "The nationalisation of Lonmin",
              "The resignation of the president",
              "Shorter shifts underground",
            ],
            correctIndex: 0,
            explanation:
              "The rock drill operators' demand was R12,500 a month — a wage demand, at a platinum mine, that became the deadliest labour event of democratic South Africa.",
            sourceLessonSlug: "sa-the-paradox",
          },
          {
            prompt: "What are the anchor course's four questions?",
            options: [
              "Who profits? Who pays? Who votes? Who rules?",
              "Who is allowed to organise? Who is excluded? Who bargains with whom, and at what level? What happens to you if you try?",
              "What is the minimum wage? What is the strike rate? What is union density? What is coverage?",
              "Who owns the mines? Who owns the farms? Who owns the banks? Who owns the press?",
            ],
            correctIndex: 1,
            explanation:
              "The four questions are the track's reusable spine. South Africa's answers move three times — under apartheid, during the struggle, and under democracy.",
            sourceLessonSlug: "sa-four-questions",
          },
          {
            prompt: "Under apartheid, who was allowed into the registered union system?",
            options: [
              "Everyone, regardless of race",
              "White, coloured and Indian workers — African workers were excluded by statute",
              "Only mine workers",
              "No one; all unions were banned",
            ],
            correctIndex: 1,
            explanation:
              "The exclusion was not custom or employer resistance but written law — the most explicit version of the exclusion move anywhere in this track.",
            sourceLessonSlug: "sa-four-questions",
          },
          {
            prompt: "What makes South Africa's apartheid-era exclusion the most explicit version of the track's 'put them outside the category' move?",
            options: [
              "It was done by informal custom",
              "It was written into statute, by race — African workers excluded from the legal definition of 'employee' itself",
              "It only applied to farm workers",
              "It was imposed by foreign companies",
            ],
            correctIndex: 1,
            explanation:
              "The US hid its carve-outs inside occupational categories; Poland and Mexico use contract forms. South Africa wrote the race directly into the law.",
            sourceLessonSlug: "sa-four-questions",
          },
          {
            prompt: "Which anchor-course lesson is this South Africa course the 'deep version' of?",
            options: [
              "'Poland and South Africa: when a union is the opposition'",
              "'The Nordics: when the union pays your unemployment cheque'",
              "'Japan: the union inside the company'",
              "'The ILO: the floor made of paper'",
            ],
            correctIndex: 0,
            explanation:
              "The anchor gives South Africa half of one lesson, alongside Poland. This course expands the South African half into a full country study.",
            sourceLessonSlug: "sa-four-questions",
          },
          {
            prompt: "Run Question 4 ('what happens to you if you try?') across South Africa's dates. Which sequence is correct?",
            options: [
              "1946: strikers promoted · 1973: strikers arrested · 2012: strikers paid off",
              "1946: at least nine strikers killed · 1973: strikers elect no leaders so none can be arrested · 1987: tens of thousands dismissed · 2012: thirty-four shot dead under democracy",
              "1946: nothing · 1973: nothing · 2012: nothing",
              "Strikes have always been legal and safe in South Africa",
            ],
            correctIndex: 1,
            explanation:
              "The 2012 answer — a massacre under democracy — is the one the course will not look away from, taught from the commission's findings in Section 5.",
            sourceLessonSlug: "sa-four-questions",
          },
          {
            prompt: "When did South Africa ratify ILO Conventions 87 and 98?",
            options: [
              "1948, at the ILO's founding era",
              "February 1996, within two years of democracy — the apartheid state never had",
              "It has never ratified them",
              "1985, when COSATU launched",
            ],
            correctIndex: 1,
            explanation:
              "Ratification came almost immediately after apartheid ended (ILO NORMLEX) — a marker of how completely the answer to 'who may organise?' flipped.",
            sourceLessonSlug: "sa-four-questions",
          },
          {
            prompt: "What is the Tripartite Alliance?",
            options: [
              "A trade agreement between South Africa, Botswana and Namibia",
              "The formal political alliance of the ANC, the South African Communist Party and COSATU",
              "A mining industry cartel",
              "The three branches of the South African government",
            ],
            correctIndex: 1,
            explanation:
              "COSATU is a formal ally of the governing ANC (with the SACP) — the fact with no parallel in this track, and the source of the course's central tension.",
            sourceLessonSlug: "sa-the-paradox",
          },
          {
            prompt: "Why, under apartheid, was the strike 'the ballot of the voteless'?",
            options: [
              "Because strikes were the only legal form of protest",
              "Because Black South Africans could not vote, so withdrawing labour was the political power they had — which made the union the political vehicle",
              "Because ballots were printed at union offices",
              "Because employers allowed workers time off to vote",
            ],
            correctIndex: 1,
            explanation:
              "In a country where you cannot vote, withdrawing your labour is the ballot you have — the anchor's line, and the reason 'who may organise?' was the same question as 'who governs?'",
            sourceLessonSlug: "sa-four-questions",
          },
          {
            prompt: "Who stands outside South Africa's bargaining system today, however progressive its paper?",
            options: [
              "Nobody — coverage is universal",
              "Workers whose paper employer is a labour broker, and the roughly one in three South Africans with no job at all (32.9% official unemployment, Q1 2025, Stats SA)",
              "Only foreign nationals",
              "Only farm workers, by statute",
            ],
            correctIndex: 1,
            explanation:
              "The racial bar is gone; today's exclusions wear the track's familiar disguises — the outside-the-category contract form, and unemployment itself.",
            sourceLessonSlug: "sa-four-questions",
          },
          {
            prompt: "How does this course promise to teach Marikana?",
            options: [
              "From social media posts of the time",
              "From the published findings of the Farlam Commission plus reputable reporting — separating what the commission found from what it did not find, with open litigation dated and left open",
              "From the police's press statements only",
              "From the striking miners' statements only",
            ],
            correctIndex: 1,
            explanation:
              "Published findings, dated claims, disputes named, no adjudication beyond the record — the track's standing editorial rule, applied to its hardest lesson.",
            sourceLessonSlug: "sa-the-paradox",
          },
        ],
      },
    },
    // ────────────── SECTION 2 · EXCLUDED BY RACE, BY STATUTE ──────────────
    {
      slug: "sa-not-an-employee",
      title: "3 · \"Employee\" — the word a nation was written out of",
      section: "Section 2 · Excluded by race, by statute",
      body: `Every course in this track eventually finds the same move: a class of workers placed **outside the category** that the protections attach to. The anchor showed it in the United States — the Wagner Act's carve-out of agricultural and domestic workers, facially neutral, racially targeted. Mexico does it with the protection contract; Poland with the civil-law "junk contract." **South Africa is where the move drops the disguise.** No proxy category, no contract trick. The race is written into the statute.

**The Industrial Conciliation Act 11 of 1924** built South Africa's collective-bargaining machine: registered trade unions, industrial councils where unions and employers set wages for an industry, legally enforceable agreements. A modern system, years ahead of many countries — for those inside it. But the Act's definition of **"employee" excluded "pass-bearing natives"** — which, given who was forced to carry passes (Lesson 4), meant most African men (O'Malley Archives; South African History Online). Read what that did, mechanically:

- An African worker was not banned from joining a union. He was defined as **not an employee** — so his union could not register, could not sit on an industrial council, could not sign an enforceable agreement.
- Industrial-council agreements set wages "for the industry" — negotiated **without** the majority of the people working in it, and often used to price them out of skilled work.
- Everything the anchor taught you a bargaining system is — election, recognition, contract, grievance — existed in South Africa. It just **did not apply** to most South Africans.

**Then, in 1953, the state answered a decade of wartime African union growth by criminalising the exit.** The **Native Labour (Settlement of Disputes) Act 48 of 1953** made strikes by African workers a **criminal offence** — not unprotected, criminal — and created a separate machinery in place of unions: state-appointed regional committees and toothless "works committees" inside the workplace (South African History Online). African unions were still not technically illegal; they were simply given **nothing** — no registration, no recognition, no lawful strike — a shadow system designed so that using it changed nothing and stepping outside it was a crime.

**Notice the design.** The apartheid state rarely wrote "Africans may not organise." It wrote definitions — *employee*, *pass-bearer*, *works committee* — and let the definitions do the work. That is the track's exclusion move in its purest laboratory form, and it is why this course keeps insisting you read definitions before you read rights. **A right belongs to a category, and whoever writes the category decides who has the right.**

Two footnotes that matter later. First, this architecture sat on older stone: the colonial-era **Masters and Servants laws** had made it a crime for a "servant" to break a contract — desertion, insolence, refusal to work — long before 1924. Second, hold the phrase **"works committee"** in your mind. In 1973, in Durban, workers will be offered works committees again — and what they do instead is where the modern story begins (Section 3).

:::reveal The Industrial Conciliation Act of 1924 never said "Africans may not join unions." How did it exclude them anyway — and why does this course call that the track's exclusion move "with the disguise dropped"? ||| It defined the word "employee" to exclude pass-bearing workers — most African men — so their unions could not register, sit on industrial councils, or sign enforceable agreements. The whole bargaining system existed; it simply did not apply to them by definition. It is the exclusion move undisguised because where the US used facially neutral occupational carve-outs and Poland or Mexico use contract forms, South Africa wrote the racial line into the statute's definitions themselves — the category, not the right, did the work.

## Sources
- O'Malley, P. (n.d.). *1924. Industrial Conciliation Act No. 11*. O'Malley Archives, Nelson Mandela Foundation. https://omalley.nelsonmandela.org/
- South African History Online. (n.d.). *Native Labour (Settlement of Disputes) Act of 1953*. https://sahistory.org.za/
- International Labour Organization. (2016). *A review of the South African labour market* (historical overview of the Industrial Conciliation framework). https://www.ilo.org/`,
      recallContent: [
        {
          prompt: "What did the Industrial Conciliation Act 11 of 1924 do, in one sentence each for its two faces?",
          answer:
            "It built a modern collective-bargaining system — registered unions, industrial councils, enforceable industry agreements — and it defined 'employee' to exclude pass-bearing African workers, so the entire system did not apply to most South Africans (O'Malley Archives; SAHO).",
        },
        {
          prompt: "What did the Native Labour (Settlement of Disputes) Act 48 of 1953 do?",
          answer:
            "It made strikes by African workers a criminal offence and substituted a shadow machinery — state-appointed regional committees and powerless 'works committees' — for union rights. African unions were not banned; they were given nothing: no registration, no recognition, no lawful strike (SAHO).",
        },
      ],
    },
    {
      slug: "sa-colour-bar",
      title: "4 · The colour bar, the pass, and the compound",
      section: "Section 2 · Excluded by race, by statute",
      body: `The definitions of Lesson 3 were one wall. Three more surrounded the African worker — and one of them was built at the demand of white *unions*, which is the uncomfortable part this course will not skip.

**Wall one: job reservation — the statutory colour bar.** The **Mines and Works Act 12 of 1911** and, decisively, its **1926 Amendment** (known plainly as the "Colour Bar Act") reserved certificates of competency for skilled mine work — blasting, engine driving — for white and coloured workers (South African History Online). The **Industrial Conciliation Act 28 of 1956** went further: its **section 77** let the minister reserve whole classes of work for a specified race, in any industry. A Black worker could be barred from a job not by an employer's prejudice but by a government notice.

**And who demanded the colour bar? Organised white labour.** In 1922, when mine owners moved to replace expensive white workers with cheaper Black workers, white miners rose in the armed **Rand Revolt** — some marched under the banner, preserved in the photographic record, **"Workers of the World, Unite and Fight for a White South Africa"** (SAHO). The Smuts government crushed the rising with troops, aircraft and artillery; well over a hundred people died. But the white miners lost the battle and won the war: the government elected in 1924 adopted a "civilised labour" policy, and the 1926 Colour Bar Act wrote their demand into law. The anchor taught you that American unions spent decades excluding Black workers from their own ranks. South Africa's version is the same lesson at maximum voltage: **a union is a machine for the people inside it, and it can be aimed at the people outside it.**

**Wall two: the pass.** Pass laws — consolidated by the bluntly misnamed **Natives (Abolition of Passes and Co-ordination of Documents) Act 67 of 1952** into a single reference book, the "dompas" — controlled where an African worker could live, travel and take work. At their peak, pass-law prosecutions ran to **hundreds of thousands per year** (SAHO). For labour law the pass did double duty: it made workers *removable* (fired often meant expelled from the urban area) — and, per Lesson 3, carrying one was exactly what defined you out of the word "employee."

**Wall three: the compound.** The gold mines ran on **migrant labour**: men recruited on fixed contracts, housed in single-sex compounds and hostels, families left behind in the reserves. A compound is a labour-control technology — the employer is also the landlord, the strike is also an eviction. The economist **Francis Wilson's** classic study of the gold mines found that African miners' real cash wages were **no higher in 1969 than they had been in 1911** (Wilson, 1972). Six decades. Zero.

**What happened when the excluded struck anyway.** In **August 1946**, roughly **60,000–100,000 African mineworkers** on the Rand struck for a ten-shilling daily wage, called out by the African Mine Workers' Union. The state's answer was Question 4 with no mask: police drove strikers back down the shafts at gunpoint and batoned marchers; within a week the strike was broken, **at least nine workers were dead and more than 1,200 injured** (South African History Online), and the union was effectively destroyed. It was the largest strike South Africa had seen — and its defeat convinced a generation that workplace power alone could not beat a state like this, pushing African unionism toward political alliance (a thread that runs straight to Section 3).

:::reveal The 1926 Colour Bar Act is this course's most uncomfortable exhibit about unions themselves. Why? ||| Because it was organised white labour that demanded it. When mine owners tried to substitute cheaper Black workers in 1922, white miners fought an armed revolt — some under the banner "Workers of the World, Unite and Fight for a White South Africa" — and though the rising was crushed, their demand became law in 1926: skilled mine work reserved by race. It proves a union is a machine for the people inside it, and can be aimed at those outside it — the same exclusion lesson the anchor taught about American unions, at maximum voltage.

## Sources
- South African History Online. (n.d.). *The Rand Revolt of 1922*. https://sahistory.org.za/
- South African History Online. (n.d.). *The 1946 African Mine Workers' Strike*. https://sahistory.org.za/article/1946-african-mine-workers-strike
- Wilson, F. (1972). *Labour in the South African gold mines, 1911–1969*. Cambridge University Press.
- O'Malley, P. (n.d.). *Legislation index: Mines and Works Act; Industrial Conciliation Act (1956), s 77; Natives (Abolition of Passes) Act (1952)*. O'Malley Archives, Nelson Mandela Foundation. https://omalley.nelsonmandela.org/`,
      recallContent: [
        {
          prompt: "Name the three 'walls' around the African worker beyond the 1924 definition, with one fact each.",
          answer:
            "(1) Job reservation — the Mines and Works Amendment Act 1926 and s 77 of the 1956 Industrial Conciliation Act reserved work by race. (2) The pass — the 1952 reference-book system controlled residence and work; prosecutions ran to hundreds of thousands a year at peak (SAHO). (3) The compound — migrant labour housed by the employer; Wilson (1972) found African gold-mine real wages no higher in 1969 than 1911.",
        },
        {
          prompt: "What happened in the 1946 African mineworkers' strike, and what lesson did its defeat teach?",
          answer:
            "Roughly 60,000–100,000 miners struck for ten shillings a day in August 1946; police broke the strike within a week — at least nine dead, over 1,200 injured (SAHO) — and the union was destroyed. The defeat convinced a generation that workplace power alone could not beat this state, pushing African unionism toward political alliance.",
        },
      ],
    },
    {
      slug: "sa-quiz-2",
      title: "Section 2 quiz · Excluded by race, by statute",
      section: "Section 2 · Excluded by race, by statute",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How did the Industrial Conciliation Act 11 of 1924 exclude African workers from collective bargaining?",
            options: [
              "It banned all trade unions in South Africa",
              "It defined 'employee' to exclude pass-bearing workers, so African unions could not register, sit on industrial councils, or sign enforceable agreements",
              "It required unions to charge unaffordable fees",
              "It only applied to farms",
            ],
            correctIndex: 1,
            explanation:
              "The system existed — registered unions, industrial councils, enforceable agreements — and by definition did not apply to most South Africans. The category, not the right, did the work.",
            sourceLessonSlug: "sa-not-an-employee",
          },
          {
            prompt: "What did the Native Labour (Settlement of Disputes) Act 48 of 1953 make of strikes by African workers?",
            options: [
              "Protected, if a ballot was held",
              "A criminal offence",
              "Legal only in mining",
              "Legal only during daylight",
            ],
            correctIndex: 1,
            explanation:
              "Not merely unprotected — criminal. In place of unions the Act offered state-appointed committees and powerless 'works committees' (SAHO).",
            sourceLessonSlug: "sa-not-an-employee",
          },
          {
            prompt: "Why does the course say the apartheid state 'let the definitions do the work'?",
            options: [
              "Because the state never passed labour laws",
              "Because instead of writing 'Africans may not organise,' it wrote categories — 'employee,' 'pass-bearer,' 'works committee' — whose boundaries produced the exclusion",
              "Because judges wrote the statutes",
              "Because employers drafted the definitions",
            ],
            correctIndex: 1,
            explanation:
              "A right belongs to a category, and whoever writes the category decides who has the right — the sharpest single lesson South Africa teaches the track.",
            sourceLessonSlug: "sa-not-an-employee",
          },
          {
            prompt: "How does South Africa's exclusion move compare with the US version the anchor taught?",
            options: [
              "They are unrelated",
              "The US carve-out (agricultural/domestic workers) was facially neutral but racially targeted; South Africa wrote the race directly into the statute — the same move, with the disguise dropped",
              "The US version was harsher",
              "South Africa copied the NLRA word for word",
            ],
            correctIndex: 1,
            explanation:
              "Same structural move — put the workers outside the protected category — at different levels of candour.",
            sourceLessonSlug: "sa-not-an-employee",
          },
          {
            prompt: "What were 'works committees' under the 1953 Act?",
            options: [
              "Democratically elected mini-unions with bargaining power",
              "Toothless in-workplace bodies offered in place of union rights — a shadow system designed so that using it changed nothing",
              "Employer boards of directors",
              "Government wage tribunals",
            ],
            correctIndex: 1,
            explanation:
              "Hold the phrase: in 1973 Durban's workers are offered works committees again, and what they do instead starts the modern story.",
            sourceLessonSlug: "sa-not-an-employee",
          },
          {
            prompt: "What did the Mines and Works Amendment Act of 1926 — the 'Colour Bar Act' — do?",
            options: [
              "Abolished racial restrictions in mining",
              "Reserved certificates of competency for skilled mine work for white and coloured workers",
              "Nationalised the gold mines",
              "Set the first minimum wage",
            ],
            correctIndex: 1,
            explanation:
              "A Black worker could be barred from skilled work not by an employer's prejudice but by statute (SAHO).",
            sourceLessonSlug: "sa-colour-bar",
          },
          {
            prompt: "What does section 77 of the Industrial Conciliation Act 28 of 1956 illustrate?",
            options: [
              "The end of job reservation",
              "That the minister could reserve whole classes of work for a specified race, in any industry — job reservation as ordinary administration",
              "That unions could veto ministerial decisions",
              "That the colour bar applied only underground",
            ],
            correctIndex: 1,
            explanation:
              "Job reservation moved from the mines to the whole economy by government notice.",
            sourceLessonSlug: "sa-colour-bar",
          },
          {
            prompt: "Who demanded the statutory colour bar of 1926?",
            options: [
              "Mine owners, to cut costs",
              "Organised white labour — after the armed Rand Revolt of 1922 against the substitution of cheaper Black workers",
              "The British colonial office",
              "African unions, as a compromise",
            ],
            correctIndex: 1,
            explanation:
              "The white miners lost the 1922 rising but won the law in 1926 — the course's most uncomfortable exhibit about what unions can be aimed at.",
            sourceLessonSlug: "sa-colour-bar",
          },
          {
            prompt: "What banner from the 1922 Rand Revolt does the course cite, and why?",
            options: [
              "'Bread and Roses' — showing international solidarity",
              "'Workers of the World, Unite and Fight for a White South Africa' — showing a union movement aimed at the workers outside it",
              "'One Industry, One Union' — showing industrial unionism",
              "'Pass Laws Must Fall' — showing anti-pass politics",
            ],
            correctIndex: 1,
            explanation:
              "Preserved in the photographic record (SAHO). A union is a machine for the people inside it — the anchor's exclusion lesson at maximum voltage.",
            sourceLessonSlug: "sa-colour-bar",
          },
          {
            prompt: "What was the 'dompas'?",
            options: [
              "A mining safety certificate",
              "The reference book of the pass system (consolidated by the 1952 Act), controlling where an African worker could live, travel and take work",
              "A union membership card",
              "A tax receipt",
            ],
            correctIndex: 1,
            explanation:
              "Pass-law prosecutions ran to hundreds of thousands a year at their peak (SAHO) — and carrying a pass was what defined workers out of the word 'employee.'",
            sourceLessonSlug: "sa-colour-bar",
          },
          {
            prompt: "Why does the course call the mine compound 'a labour-control technology'?",
            options: [
              "Because it was expensive to build",
              "Because the employer was also the landlord — a strike was also an eviction, and migrant contracts kept families dependent and distant",
              "Because it improved productivity",
              "Because it was run by unions",
            ],
            correctIndex: 1,
            explanation:
              "Single-sex compounds, fixed contracts, families in the reserves: the housing system itself disciplined the workforce.",
            sourceLessonSlug: "sa-colour-bar",
          },
          {
            prompt: "What did Francis Wilson's classic study (1972) find about African gold miners' wages?",
            options: [
              "They doubled every decade",
              "Real cash wages were no higher in 1969 than they had been in 1911",
              "They matched white wages by 1960",
              "They were the highest in Africa",
            ],
            correctIndex: 1,
            explanation:
              "Six decades, zero real growth — the measurable output of the walls this section describes.",
            sourceLessonSlug: "sa-colour-bar",
          },
          {
            prompt: "What happened to the 1946 African mineworkers' strike?",
            options: [
              "It won the ten-shilling demand",
              "Police broke it within a week — at least nine workers dead, more than 1,200 injured (SAHO) — and the union was effectively destroyed",
              "It was settled by arbitration",
              "It lasted a year and ended in a draw",
            ],
            correctIndex: 1,
            explanation:
              "The largest strike South Africa had seen, answered at gunpoint. Its defeat pushed African unionism toward political alliance.",
            sourceLessonSlug: "sa-colour-bar",
          },
          {
            prompt: "What lesson did a generation of African unionists draw from the 1946 defeat?",
            options: [
              "That strikes always fail",
              "That workplace power alone could not beat a state like this — organised labour would need political alliance",
              "That wages did not matter",
              "That mining should be avoided",
            ],
            correctIndex: 1,
            explanation:
              "A thread that runs straight to the COSATU–ANC alliance of Section 3 — and to the costs of that alliance in Section 6.",
            sourceLessonSlug: "sa-colour-bar",
          },
          {
            prompt: "The course says: 'A right belongs to a category, and whoever writes the category decides who has the right.' Which pair of apartheid categories best illustrates this?",
            options: [
              "'Employee' (excluding pass-bearers) and 'works committee' (substituting for a union)",
              "'Employer' and 'shareholder'",
              "'Citizen' and 'taxpayer'",
              "'Skilled' and 'unskilled'",
            ],
            correctIndex: 0,
            explanation:
              "The definitions did the excluding: not an employee, so no union rights; a works committee, so no bargaining power. Read definitions before rights.",
            sourceLessonSlug: "sa-not-an-employee",
          },
        ],
      },
    },
    // ────────────── SECTION 3 · DURBAN TO COSATU ──────────────
    {
      slug: "sa-durban-1973",
      title: "5 · Durban, 1973: the strike with no leaders",
      section: "Section 3 · Durban 1973 to COSATU 1985 — rebuilding from the shop floor",
      body: `For twenty years after the 1953 strike ban, mass African worker action all but disappeared from South Africa. The state had every reason to believe the walls would hold. Then, in the first months of **1973**, they cracked — not in a political campaign, but over pay.

**On 9 January 1973**, workers at the **Coronation Brick and Tile** works outside **Durban** stopped work demanding higher wages. The strike leapt from factory to factory across Durban and the surrounding region — textiles, docks, municipal services. The most careful contemporary study, by the Institute for Industrial Education, counted **about 61,000 workers striking in and around Durban between January and March 1973**; counting the wave as it spread nationally through the year, South African History Online puts participation at **around 100,000**. Both numbers are honest; they measure different things, and this course gives you the range rather than inventing precision.

**The tactical genius of Durban was an absence: the strikes had no leaders.** Workers had learned exactly what Lesson 4 taught you — a leader is a person the police can arrest, an employer can victimise, a court can prosecute under the 1953 Act. So strikers refused, workplace after workplace, to elect negotiating committees or name spokesmen. Managers who came out to ask "who are your leaders?" faced a crowd that answered, in effect: *all of us*. Demands were shouted collectively; offers were accepted or rejected by roar. The state could not decapitate a movement that had no head.

**And it worked — that is the part that changed history.** Employers, desperate to restart production and facing workers they could not lawfully bargain with, simply **raised wages**. Most strikers went back within days with increases; dismissals and prosecutions, by the standards of 1946, were remarkably few. After decades in which the lesson of every strike had been *you will be crushed*, Durban taught a different one: **mass action, held inside the workplace, could win.** (Notice the family resemblance to Poland's occupation strikes of 1980 — a repressed workforce redesigning the strike itself so the state's usual answer would not work. The two movements discovered it independently, seven years apart.)

**What Durban left behind mattered more than the raises.** Around the strikes grew a new infrastructure: wage-advice offices, worker education projects, and a generation of new **unregistered** unions — organisations that could not sign legal agreements but organised anyway, factory by factory. The state's official answer was to offer, once again, **works committees** — the toothless bodies of the 1953 Act. Workers used them where useful and built real unions in their shadow. By the late 1970s these unions were large enough that the state faced the choice Section 3's next lesson describes: keep pretending the category "employee" could hold, or open it and try to control what came in.

:::reveal The Durban strikers of 1973 refused to elect any leaders or negotiating committees. Why — and what did that refusal accomplish? ||| Because under the 1953 Act an African strike was a crime, a named leader was a target: arrestable, dismissable, prosecutable. By bargaining as a crowd — demands shouted collectively, offers answered by roar — the strikers gave the state no head to cut off, and employers desperate to restart production simply raised wages. After 1946's lesson ("you will be crushed"), Durban proved mass action inside the workplace could win, and the unregistered unions it spawned became the seed of everything that followed.

## Sources
- South African History Online. (n.d.). *The Durban strikes of 1973*. https://sahistory.org.za/
- Institute for Industrial Education. (1974). *The Durban strikes 1973: "Human beings with souls"*. Ravan Press.
- Friedman, S. (1987). *Building tomorrow today: African workers in trade unions, 1970–1984*. Ravan Press.`,
      recallContent: [
        {
          prompt: "How large were the 1973 Durban strikes, and why does the course give a range?",
          answer:
            "About 61,000 strikers in and around Durban between January and March 1973 (Institute for Industrial Education, 1974); around 100,000 counting the wave nationally through the year (SAHO). The two figures measure different things, so the course reports the documented range instead of inventing one number.",
        },
        {
          prompt: "What was the 'no leaders' tactic, and what echo does it have elsewhere in this track?",
          answer:
            "Strikers refused to elect committees or spokesmen because a named leader could be arrested or victimised under the 1953 strike ban; crowds bargained collectively and the state had no head to cut off. It rhymes with Poland's occupation strikes of 1980 — a repressed workforce redesigning the strike so the state's usual answer fails.",
        },
      ],
    },
    {
      slug: "sa-wiehahn-fosatu",
      title: "6 · Wiehahn's gamble, and FOSATU's warning",
      section: "Section 3 · Durban 1973 to COSATU 1985 — rebuilding from the shop floor",
      body: `By the late 1970s the state faced a fact it could not prosecute away: African unions existed, were growing, and sat entirely **outside** the legal machinery — unregulated precisely because they were unrecognised. Its response is one the anchor course already taught you, and this course will not re-teach it at length: the **Wiehahn Commission**, whose 1979 report recommended that African workers be admitted to the registered industrial-relations system. The reasoning was **control** — a registered union files its constitution, discloses its finances, becomes subject to the law's discipline. Parliament obliged with the **Industrial Conciliation Amendment Act 94 of 1979**, and for the first time African workers could belong to registered unions. *(If you want Wiehahn's logic in full, re-read the anchor's lesson "Poland and South Africa: when a union is the opposition" — this course picks up where it stops: with what the unions did with the opening.)*

**What they did was take the machine and keep their own engine.** The unions that entered the system had already, in April 1979, federated as **FOSATU — the Federation of South African Trade Unions** — a dozen unions built out of the post-Durban organising drive (South African History Online). FOSATU's signature was **shop-floor democracy**: power vested in elected **shop stewards**, mandated and recallable by the workers of a specific factory, with paid officials kept on a short leash. Registration, on this model, was a tool — you used the industrial council when it served your members and struck when it did not — but the union's strength lived in the workplace, not in the statute book. Hold that design; it is the answer to Question 3 that COSATU inherits, and it is why South African unions became formidable rather than captured, which is what Wiehahn's authors had gambled on.

**And then, in April 1982, FOSATU's general secretary said something this course quotes because Section 6 cannot be understood without it.** In a keynote address to FOSATU's congress — published as *"The Workers' Struggle — Where Does FOSATU Stand?"* (South African Labour Bulletin, 1982) — **Joe Foster** argued that workers must of course fight apartheid alongside the broader popular movement, but that they needed their **own independent organisation**, because a mass liberation movement is led by many classes at once, and without an independent base workers' interests would be spoken *for* rather than *by* them — and could be set aside after victory. This position, tagged **"workerism"** by its critics, was fiercely contested by unionists who argued the opposite — that the factory could not be separated from the township, and that standing apart from the national struggle while people were being shot was a moral and strategic absurdity. That rival current, **"populism"** to *its* critics, carried the day in the end.

**Read Foster's warning the way this course reads Wiehahn: as a prediction whose test results come later.** In 1982 it was a debate about strategy. After 1994 — when the federation Foster's federation helped build had entered a formal alliance with a governing party — the question *"what happens to workers' independent voice inside a multi-class alliance in power?"* stopped being theoretical. Section 6 shows you both sides claiming vindication, from their own documents. This course tells you now, so you can watch for it: **it does not declare a winner.**

:::reveal Joe Foster's 1982 FOSATU address is quoted in this course as "a prediction whose test results come later." What did he argue, and what later events test it? ||| Foster argued workers should fight apartheid with the popular movement but keep an independent workers' organisation — because a liberation movement is multi-class, and without their own base workers would be spoken for rather than by themselves, and could be set aside after victory. The test comes after 1994, when COSATU sat inside a formal alliance with the governing ANC: NUMSA and SAFTU later claimed Marikana and the alliance's record proved Foster right; COSATU points to the LRA and the minimum wage as proof the alliance delivered. The course shows both cases and declares no winner.

## Sources
- South African History Online. (n.d.). *The Federation of South African Trade Unions (FOSATU)*. https://sahistory.org.za/
- Foster, J. (1982). The workers' struggle — where does FOSATU stand? *South African Labour Bulletin, 7*(8).
- South African History Online. (n.d.). *Wiehahn Commission report tabled in parliament*. https://sahistory.org.za/dated-event/wiehahn-commission-report-tabled-parliament`,
      recallContent: [
        {
          prompt: "What was the Wiehahn opening, and what was the state's gamble?",
          answer:
            "The Wiehahn Commission (1979) recommended admitting African workers to the registered union system — enacted by the Industrial Conciliation Amendment Act 94 of 1979. The gamble was control: a registered union is a regulable union. The unions took the machinery and kept shop-floor power, and the gamble failed.",
        },
        {
          prompt: "What organisational design did FOSATU (founded April 1979) run on?",
          answer:
            "Shop-floor democracy: elected, mandated, recallable shop stewards holding the power, officials on a short leash, registration used as a tool rather than a leash. COSATU inherited this design — it is why the unions became formidable rather than captured.",
        },
      ],
    },
    {
      slug: "sa-cosatu-ungovernable",
      title: "7 · COSATU, 1985: one federation, and a country made ungovernable",
      section: "Section 3 · Durban 1973 to COSATU 1985 — rebuilding from the shop floor",
      body: `By the mid-1980s South Africa was in open crisis: the townships had risen after the 1984 constitution excluded the Black majority yet again; the **United Democratic Front (UDF)** — a coalition of hundreds of civic, church, student and community organisations aligned with the banned ANC — was coordinating resistance; the state answered with **states of emergency** (1985, renewed 1986) that put soldiers in the townships and tens of thousands in detention. Into this, on **1 December 1985**, after four years of unity talks, walked a new federation.

**COSATU — the Congress of South African Trade Unions — launched in Durban with 33 unions and about 460,000 paid-up members** (South African History Online), on three organising principles: **one industry, one union; one country, one federation**; worker control (the FOSATU steward tradition); and — the decisive break with FOSATU's caution — **open engagement in the political struggle**. Its first president, **Elijah Barayi**, used the launch rally to give the government an ultimatum on the pass laws; its general secretary, **Jay Naidoo**, came from the FOSATU tradition. The largest affiliate was the **National Union of Mineworkers (NUM)** — founded in 1982, led by its founding general secretary **Cyril Ramaphosa**. Keep both of those names: NUM is one of the two unions at Marikana in Section 5, and Ramaphosa — by then a Lonmin director — is a figure the Farlam Commission had to make findings about, before he became the country's president.

**What "engagement in the political struggle" meant in practice was scale.** COSATU turned the strike and the **stayaway** — a coordinated day when workers simply do not appear, across a whole city or country — into instruments no emergency decree could suppress: you can detain organisers, but you cannot arrest an absence, any more than Durban's managers could arrest a crowd. In **August 1987**, NUM led around **340,000 miners** (the union's figure; the Chamber of Mines counted fewer — the course gives you both sides' numbers) into a **three-week strike**, the largest in South African history to that point; it ended in defeat, with **tens of thousands dismissed** (SAHO). The state understood exactly what the federation was: in **May 1987, COSATU House, the federation's Johannesburg headquarters, was bombed** — an attack security police later confessed to in amnesty proceedings before the **Truth and Reconciliation Commission**. Political funerals, consumer boycotts, stayaways, strikes: by the late 1980s the resistance's slogan — make South Africa **ungovernable** — ran in large part on organised workers.

**And the alliance became formal.** COSATU aligned with the UDF and, in 1987, adopted the **Freedom Charter** — the ANC-aligned movement's founding document — settling the Foster debate, at least officially, in favour of full political engagement. When the ANC and SACP were unbanned on **2 February 1990**, the relationship took its lasting shape: the **Tripartite Alliance** — ANC, South African Communist Party, COSATU — which negotiated the transition and contested the **27 April 1994** election as one bloc. Union leaders moved wholesale into the new state: Ramaphosa chaired the constitutional negotiations; Naidoo entered Mandela's cabinet to run the Reconstruction and Development Programme. The federation that had been the hammer of the old state was now **inside** the new one.

**Close this section by asking the anchor's Question 1 one more time.** Under a state where Black workers could not vote, COSATU's answer had been the anchor's line: *withdrawing your labour is the ballot you have.* After 27 April 1994 every worker had an actual ballot — and the federation had a seat at the government's own table. What that seat cost, and what it bought, is the rest of this course.

:::reveal COSATU launched in 1985 with the principle of open political engagement, adopted the Freedom Charter in 1987, and entered the Tripartite Alliance with the ANC and SACP. What did the federation gain by 1994, and what open question did it carry into the new era? ||| It gained the victory itself — its strikes and stayaways helped make apartheid ungovernable — plus a formal seat inside the new order: alliance partner of the governing party, its leaders (Ramaphosa, Naidoo) moving into the constitutional talks and cabinet. The open question was Joe Foster's from 1982: inside a multi-class alliance that now holds state power, who speaks for workers when the government their federation helped elect is also their bargaining counterpart — and, at Marikana, their police?

## Sources
- South African History Online. (n.d.). *The Congress of South African Trade Unions (COSATU)*. https://sahistory.org.za/article/congress-south-african-trade-unions-cosatu
- South African History Online. (n.d.). *The 1987 mineworkers' strike*. https://sahistory.org.za/
- Truth and Reconciliation Commission of South Africa. (1998–2003). *Amnesty proceedings: the bombing of COSATU House (May 1987)*. https://www.justice.gov.za/trc/
- Baskin, J. (1991). *Striking back: A history of COSATU*. Ravan Press.`,
      recallContent: [
        {
          prompt: "Name COSATU's founding principles and its decisive break with FOSATU.",
          answer:
            "One industry, one union; one country, one federation; worker control through shop stewards — plus the break: open engagement in the political struggle, sealed by adopting the Freedom Charter in 1987 and entering the Tripartite Alliance (ANC–SACP–COSATU) after the 1990 unbannings.",
        },
        {
          prompt: "What was the August 1987 miners' strike, and how does the course handle its numbers?",
          answer:
            "A three-week NUM-led strike — the largest in South African history to that point. NUM claimed about 340,000 participants; the Chamber of Mines counted fewer; the course reports both sides' figures. It ended in defeat with tens of thousands dismissed (SAHO).",
        },
      ],
    },
    {
      slug: "sa-quiz-3",
      title: "Section 3 quiz · Durban to COSATU",
      section: "Section 3 · Durban 1973 to COSATU 1985 — rebuilding from the shop floor",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where and when did the 1973 strike wave begin?",
            options: [
              "At the Coronation Brick and Tile works outside Durban, on 9 January 1973",
              "At a Johannesburg gold mine in 1976",
              "At the Cape Town docks in 1970",
              "At a Pretoria steel plant in 1979",
            ],
            correctIndex: 0,
            explanation:
              "A pay strike at one brickworks leapt across Durban's factories, docks and services — and ended two decades of enforced quiet.",
            sourceLessonSlug: "sa-durban-1973",
          },
          {
            prompt: "How many workers struck in the 1973 wave?",
            options: [
              "Exactly 12,000",
              "About 61,000 in and around Durban (Jan–Mar, Institute for Industrial Education) and around 100,000 nationally through 1973 (SAHO) — the course reports the documented range",
              "Over a million",
              "The number is unknowable",
            ],
            correctIndex: 1,
            explanation:
              "Two honest figures measuring different things — the course gives the range rather than inventing precision.",
            sourceLessonSlug: "sa-durban-1973",
          },
          {
            prompt: "Why did the Durban strikers elect no leaders?",
            options: [
              "They could not agree on candidates",
              "Because under the 1953 strike ban a named leader could be arrested, victimised or prosecuted — a crowd bargaining by roar gave the state no head to cut off",
              "The law required anonymous bargaining",
              "Employers refused to meet leaders",
            ],
            correctIndex: 1,
            explanation:
              "The 'no leaders' tactic was a designed answer to Question 4, exactly as Poland's occupation strikes were — discovered independently, seven years apart.",
            sourceLessonSlug: "sa-durban-1973",
          },
          {
            prompt: "What made Durban 1973 a turning point rather than another 1946?",
            options: [
              "The army refused to deploy",
              "It won — employers raised wages, dismissals were few, and the strikes left behind unregistered unions, proving mass action inside the workplace could succeed",
              "The government fell immediately",
              "The United Nations intervened",
            ],
            correctIndex: 1,
            explanation:
              "After decades in which every strike taught 'you will be crushed,' Durban taught the opposite lesson — and built the organising infrastructure that grew into FOSATU.",
            sourceLessonSlug: "sa-durban-1973",
          },
          {
            prompt: "What did the Wiehahn Commission (1979) recommend, and why?",
            options: [
              "Banning African unions permanently, for security",
              "Admitting African workers to the registered union system — because unregistered unions were growing anyway and a registered union can be regulated",
              "Abolishing all unions",
              "Handing the mines to the unions",
            ],
            correctIndex: 1,
            explanation:
              "The control gamble, enacted as the Industrial Conciliation Amendment Act 94 of 1979 — taught in the anchor; this course teaches what the unions did with the opening.",
            sourceLessonSlug: "sa-wiehahn-fosatu",
          },
          {
            prompt: "What was FOSATU's signature organisational design?",
            options: [
              "Power concentrated in a charismatic president",
              "Shop-floor democracy — elected, mandated, recallable shop stewards holding power, with paid officials on a short leash",
              "Control by international federations",
              "Government-appointed administrators",
            ],
            correctIndex: 1,
            explanation:
              "Strength lived in the workplace, not the statute book — why registration became a tool rather than a leash, and why Wiehahn's gamble failed.",
            sourceLessonSlug: "sa-wiehahn-fosatu",
          },
          {
            prompt: "In his 1982 address, Joe Foster argued that workers should…",
            options: [
              "stay out of the anti-apartheid struggle entirely",
              "fight apartheid with the popular movement but keep an independent workers' organisation, lest workers be spoken for and set aside after victory",
              "merge the unions into the ANC immediately",
              "focus only on wages and never on politics",
            ],
            correctIndex: 1,
            explanation:
              "Published as 'The Workers' Struggle — Where Does FOSATU Stand?' (South African Labour Bulletin, 1982) — the 'workerist' position, and the course's planted prediction for Section 6.",
            sourceLessonSlug: "sa-wiehahn-fosatu",
          },
          {
            prompt: "What was the rival position to Foster's 'workerism' in the 1980s union debates?",
            options: [
              "'Populism' (its critics' tag): the factory cannot be separated from the township, and standing apart from the national struggle was absurd while people were being shot",
              "'Monetarism': unions should focus on inflation",
              "'Legalism': unions should only litigate",
              "'Isolationism': unions should leave South Africa",
            ],
            correctIndex: 0,
            explanation:
              "That current carried the day: COSATU launched with open political engagement and adopted the Freedom Charter in 1987. The course declares no winner in the debate.",
            sourceLessonSlug: "sa-wiehahn-fosatu",
          },
          {
            prompt: "Which principles did COSATU launch on in December 1985?",
            options: [
              "One industry, one union; one country, one federation; worker control; open political engagement",
              "Craft unionism and political neutrality",
              "Company unions and works councils",
              "State charters and compulsory dues",
            ],
            correctIndex: 0,
            explanation:
              "The FOSATU steward tradition plus the decisive break: full engagement in the political struggle.",
            sourceLessonSlug: "sa-cosatu-ungovernable",
          },
          {
            prompt: "Who was NUM's founding general secretary — a name that recurs at Marikana and beyond?",
            options: ["Elijah Barayi", "Cyril Ramaphosa", "Jay Naidoo", "Joe Foster"],
            correctIndex: 1,
            explanation:
              "Ramaphosa led NUM from 1982, chaired the constitutional negotiations, was a Lonmin director in 2012 (the Farlam Commission made findings about him), and later became president.",
            sourceLessonSlug: "sa-cosatu-ungovernable",
          },
          {
            prompt: "Why was the stayaway so hard for the emergency state to suppress?",
            options: [
              "It was constitutionally protected",
              "You can detain organisers, but you cannot arrest an absence — a coordinated no-show has no head and no crowd to disperse",
              "The police supported it",
              "It only happened on Sundays",
            ],
            correctIndex: 1,
            explanation:
              "The same design logic as Durban's leaderless crowds: build the action so the state's usual answer has nothing to grab.",
            sourceLessonSlug: "sa-cosatu-ungovernable",
          },
          {
            prompt: "How does the course report the size of the August 1987 miners' strike?",
            options: [
              "Exactly 500,000, per the government",
              "NUM's figure (~340,000) alongside the Chamber of Mines' lower count — both sides' numbers, since they disagree",
              "It refuses to give any number",
              "Ten thousand",
            ],
            correctIndex: 1,
            explanation:
              "Contested figures are presented as contested — the three-week strike was the largest to that point and ended with tens of thousands dismissed (SAHO).",
            sourceLessonSlug: "sa-cosatu-ungovernable",
          },
          {
            prompt: "What happened to COSATU House in May 1987, and how do we know who did it?",
            options: [
              "It burned down accidentally; insurance records show it",
              "It was bombed; security police later confessed in amnesty proceedings before the Truth and Reconciliation Commission",
              "It was sold to developers; deeds show it",
              "Nothing happened to it",
            ],
            correctIndex: 1,
            explanation:
              "The state understood exactly what the federation was — and the TRC record, not rumour, is how the course sources the attack.",
            sourceLessonSlug: "sa-cosatu-ungovernable",
          },
          {
            prompt: "What is the Tripartite Alliance, and when did it take its lasting shape?",
            options: [
              "ANC–SACP–COSATU, formalised after the unbannings of 2 February 1990, contesting the 1994 election as one bloc",
              "A 1950s pact between mining houses",
              "A UN oversight body from 1994",
              "COSATU–FOSATU–NUM, formed in 1985",
            ],
            correctIndex: 0,
            explanation:
              "The federation that hammered the old state moved inside the new one — Ramaphosa to the constitutional talks, Naidoo to cabinet.",
            sourceLessonSlug: "sa-cosatu-ungovernable",
          },
          {
            prompt: "With the vote won in 1994, what new version of Question 1 did COSATU carry into democracy?",
            options: [
              "Whether strikes would remain legal",
              "What a workers' independent voice costs and buys inside a multi-class alliance that now holds state power",
              "Whether to admit white workers",
              "Whether to register with the ILO",
            ],
            correctIndex: 1,
            explanation:
              "Foster's 1982 question stopped being theoretical the day the alliance became the government — it is the axis of Sections 4 through 6.",
            sourceLessonSlug: "sa-cosatu-ungovernable",
          },
        ],
      },
    },
    // ────────────── SECTION 4 · THE PAPER AND THE REALITY ──────────────
    {
      slug: "sa-lra-1995",
      title: "8 · The most worker-friendly law on paper: LRA 66 of 1995",
      section: "Section 4 · After 1994 — the paper and the reality",
      body: `What does a labour law look like when the people who write it have just won a liberation struggle led, in large part, by unions? South Africa is the world's cleanest answer, because that is literally what happened. The post-1994 labour framework was negotiated at **NEDLAC** — the National Economic Development and Labour Council, launched in **February 1995** — a statutory chamber where organised labour, organised business, government and community organisations negotiate social and economic legislation **before** it reaches parliament. The unions were not lobbying from the corridor. They were at the drafting table.

**Start at the top: the Constitution.** Section 23 of the **Constitution of the Republic of South Africa, 1996** guarantees everyone the right to fair labour practices; every worker the right to form and join a union, to organise, and **to strike**. Constitutionalising the strike itself is rare anywhere on earth — the direct imprint of a movement whose only ballot, for decades, had been the strike.

**Then the machine: the Labour Relations Act 66 of 1995**, in force November 1996, which replaced the apartheid framework wholesale. Its architecture answers each of the anchor's questions in the most worker-friendly register in this track:

- **One law for everyone.** The racial definitions are gone; the Act covers nearly all employees, with *no* carve-out of farm or domestic workers — a deliberate refusal, by drafters who knew exactly what the anchor's NLRA lesson teaches, to repeat the American move.
- **Organisational rights** for representative unions: access to the workplace, stop-order dues deduction, elected shop stewards with statutory standing — FOSATU's shop-floor design, written into national law.
- **Bargaining councils** by sector, whose agreements can be extended to non-parties; and **protected strikes** — follow the procedure and you cannot be dismissed for striking.
- **The CCMA** — the Commission for Conciliation, Mediation and Arbitration — a free, fast, informal tribunal for dismissal and rights disputes. It is used on a staggering scale: its annual reports in the 2020s record on the order of 150,000+ referrals a year (CCMA annual reports).

Add the **Basic Conditions of Employment Act 75 of 1997** (hours, leave, notice) and the **Employment Equity Act 55 of 1998** (anti-discrimination and redress), and South Africa's paper framework became — and remains — one of the most progressive on earth. The ILO's core conventions were ratified (C87 and C98 in February 1996, as Lesson 2 noted). If the anchor course taught you to grade countries by their statutes, South Africa would sit at the top of this track's table.

**But the anchor taught you the opposite habit — and so does the rest of this section.** A statute is a floor for the people standing inside the building. The next two lessons are about the people who are not: the roughly one in three with no job at all, and the workers whose employer, on paper, is not the company they work for. Read this lesson as the setup of a deliberate tension, not as a happy ending: **the gap between this law and the next two lessons is the post-1994 story.**

:::reveal In what specific, structural way did the drafters of the LRA 66 of 1995 refuse to repeat the US Wagner Act's most consequential move — and why were they, of all drafters, positioned to know better? ||| The Wagner Act excluded agricultural and domestic workers — a facially neutral carve-out with racially targeted effects, as the anchor teaches. The LRA covers nearly all employees, farm and domestic workers included, with no such carve-out. Its drafters knew the trick intimately because South Africa's own 1924 Act had run the same move undisguised — defining African workers out of "employee" — and many of the drafters came from the union movement that exclusion had been aimed at.

## Sources
- Republic of South Africa. (1995). *Labour Relations Act 66 of 1995*. https://www.gov.za/documents/labour-relations-act
- Republic of South Africa. (1996). *Constitution of the Republic of South Africa, 1996* (s 23). https://www.gov.za/documents/constitution-republic-south-africa-1996
- Commission for Conciliation, Mediation and Arbitration. (n.d.). *Annual reports*. https://www.ccma.org.za/
- National Economic Development and Labour Council. (n.d.). *About NEDLAC*. https://nedlac.org.za/`,
      recallContent: [
        {
          prompt: "Name four worker-facing features of the LRA 66 of 1995.",
          answer:
            "(1) Coverage of nearly all employees — no farm/domestic carve-out; (2) organisational rights including statutory shop stewards; (3) sectoral bargaining councils with extension, plus protected strikes; (4) the CCMA, a free and informal disputes tribunal handling on the order of 150,000+ referrals a year (CCMA annual reports).",
        },
        {
          prompt: "What is NEDLAC, and why does it matter for Question 3?",
          answer:
            "The National Economic Development and Labour Council (launched February 1995): a statutory chamber where labour, business, government and community negotiate legislation before parliament. It puts unions at the drafting table itself — the highest bargaining 'level' anywhere in this track.",
        },
      ],
    },
    {
      slug: "sa-unemployment-outsiders",
      title: "9 · The queue outside: unemployment, and the insider/outsider fight",
      section: "Section 4 · After 1994 — the paper and the reality",
      body: `Now the number that shadows everything the last lesson said. In the first quarter of 2025, South Africa's **official unemployment rate was 32.9%** — and on the **expanded definition**, which counts people who want work but have given up actively searching, **43.1%** (Statistics South Africa, Quarterly Labour Force Survey, Q1 2025). For young people aged 15–24 the official rate was around **62%** (same survey). These are not recession spikes; South Africa's unemployment has sat at crisis levels for decades and is regularly the highest official rate among the economies the World Bank and ILO track (mid-2020s). Date any unemployment figure you ever quote about South Africa — it moves quarterly — but it has not been *low* in living memory.

**Sit with what a third means for this course.** Every mechanism Lesson 8 celebrated — the bargaining council, the protected strike, the CCMA — attaches to a person who **has a job**. Roughly one South African in three who wants work stands outside all of it. Under apartheid, the excluded were defined by race, in the statute. Under democracy, the largest excluded class is defined by **having no employment at all** — the queue outside the building the LRA built. That is Question 2's modern answer, and it is bleaker than any clause.

**And it has produced South Africa's sharpest post-1994 argument — the insider/outsider critique.** This course steelmans both sides, because both are made seriously, and it adjudicates neither.

**The critique**, pressed by many economists — including the international growth panel that advised the National Treasury in the late 2000s (Centre for International Development, Harvard, 2008) — runs: South Africa's bargaining system protects employed **insiders** at the expense of unemployed **outsiders**. Bargaining-council agreements negotiated by large firms and strong unions are **extended** to small firms that never sat at the table, raising their costs; strong dismissal protection makes hiring a risk; the whole apparatus, on this view, prices low-skilled outsiders out of their first job. On this reading, the LRA's very strengths help keep the queue outside long.

**The unions' answer**, from COSATU's own submissions and congress documents, runs: mass unemployment predates the LRA and tracks causes no labour statute created — apartheid's deliberate destruction of Black education and its spatial planning that stranded workers far from work, capital-intensive industry, an economy still concentrated around the old mineral core. Wages at the bottom are too **low** to live on, not too high (Lesson 13's minimum-wage fight returns here); cutting protections would not conjure jobs, only cheapen the ones that exist — and the state's own experiments with wage subsidies and exemptions have not dented the queue. On this reading, blaming the LRA for unemployment mistakes the crime scene for the culprit.

**What should a student of this track do with a fight like this?** Exactly what you did with contested figures: refuse the false comfort of picking a side by temperament. Notice instead what **both** sides concede: that the queue is real, that it is enormous, and that the constituency of the unemployed sits outside the bargaining system — and largely outside the federation whose alliance governs. Hold that last clause. It is the quiet structural fact under everything in Sections 5 and 6.

:::reveal The insider/outsider critique and COSATU's rebuttal disagree about almost everything. What do both sides concede — and why does the course call that concession "the quiet structural fact" under Sections 5 and 6? ||| Both concede that mass unemployment is real and enormous (32.9% official, 43.1% expanded, Q1 2025, Stats SA) and that the unemployed stand outside the bargaining system — no bargaining council, protected strike or CCMA case attaches to a person without a job. It is the quiet structural fact because the federation inside the governing alliance speaks, by definition, for the employed; the largest excluded class in democratic South Africa is thus unrepresented in the very system built by its liberators — pressure that surfaces at Marikana and in the alliance's fractures.

## Sources
- Statistics South Africa. (2025). *Quarterly Labour Force Survey, Q1 2025* (P0211). https://www.statssa.gov.za/?page_id=1854&PPN=P0211
- Centre for International Development, Harvard University. (2008). *Final recommendations of the international panel on ASGISA* (International Panel on Growth, advising the National Treasury of South Africa). https://www.hks.harvard.edu/centers/cid
- Congress of South African Trade Unions. (n.d.). *Congress resolutions and policy submissions*. https://cosatu.org.za/`,
      recallContent: [
        {
          prompt: "Give South Africa's unemployment figures with definitions, source and date.",
          answer:
            "Q1 2025, Stats SA Quarterly Labour Force Survey: 32.9% official (actively searching), 43.1% expanded (includes discouraged work-seekers), and roughly 62% official for ages 15–24. Always date these — they move quarterly — but they have not been low in living memory.",
        },
        {
          prompt: "Summarise the insider/outsider critique and the unions' rebuttal in one sentence each.",
          answer:
            "Critique (e.g. the Harvard-led growth panel advising the Treasury, 2008): extended bargaining agreements and strong protections raise hiring costs and price unemployed outsiders out of work. Rebuttal (COSATU's own submissions): unemployment tracks apartheid's education and spatial legacies and the economy's structure, not the LRA — bottom wages are too low to live on, and cheapening jobs would not create them.",
        },
      ],
    },
    {
      slug: "sa-labour-broking",
      title: "10 · Labour broking: the outside-the-category move returns",
      section: "Section 4 · After 1994 — the paper and the reality",
      body: `By now you can smell this track's signature move from a page away. The United States does it with **misclassification** — call the worker an "independent contractor" and the NLRA no longer sees her. Mexico did it with the **protection contract** — a union that belongs to the employer. Poland does it with the **junk contract** — a civil-law form that is not "employment." Here is South Africa's version, and the rhyme is exact: **labour broking**.

**The mechanics.** The LRA's own **section 198** recognises the **"temporary employment service"** (TES) — the labour broker. A broker supplies workers to a client company; the workers do the client's work, on the client's premises, under the client's supervision — but in law, **the broker, not the client, is the employer**. Feel what that single designation moves:

- The client's **bargaining council agreement**, its union recognition, its negotiated wages? They attach to the client's *employees* — and on paper, you are not one.
- Dismissal protection? The client does not have to dismiss you; it just **ends the assignment** and the broker "has nothing for you this week."
- Strike at the client? Your employer — the broker — is a company you may never have seen, with no power over the workplace that actually controls your life.

The same building the LRA built, with a side door that lets the work in while leaving the worker outside. **How many workers?** Here the course does what it did for Durban's crowds and the 1987 strike: refuses to invent a number. Industry and union estimates in the early 2010s ranged from several hundred thousand to around a million placed workers, and the count was itself a weapon in the political fight — the biggest private estimates came from the industry's own consultants (contested figures, presented as contested).

**The fight.** COSATU campaigned from the late 2000s for the **total banning** of labour broking, describing it in its own campaign language as a modern form of slavery — that is the federation's characterisation, quoted here as its position, not adopted as this course's. Business and the broking industry defended the TES model as flexibility that creates entry-level jobs. The compromise arrived as the **Labour Relations Amendment Act 6 of 2014**: its new **section 198A** provides that a placed worker earning **below a statutory earnings threshold** who works for a client for more than **three months** is **deemed to be the employee of the client**. Not a ban — a time-and-income fuse on the side door.

**Then the courts closed a loophole in the fuse.** Employers argued the deeming created a *dual* employment — broker and client both — leaving brokers usefully in the chain. In ***Assign Services (Pty) Ltd v NUMSA*** [2018] ZACC 22 (26 July 2018), the **Constitutional Court** held that after three months the client is the **sole** employer for LRA purposes. Note who took that case to the top court and won: **NUMSA** — the union you are about to watch be expelled from COSATU in Section 6. Outside-the-category workers were being defended most aggressively by the federation's most rebellious affiliate; that is not a coincidence, and Section 6 explains why.

**The honest limits, dated.** The deeming applies only *below* the earnings threshold and only *after* three months; enforcement runs worker by worker through the CCMA; broking persists above the threshold, inside the three-month window, and wherever workers do not know or cannot afford to claim their rights (status as of the mid-2020s). The side door is narrower than it was in 2010. It is not closed.

:::reveal Name the track's four-country rhyme that this lesson completes, and state what single legal designation does the work in the South African version. ||| The rhyme: US misclassification ("independent contractor"), Mexico's protection contract (the employer's own union), Poland's junk contracts (civil-law forms outside the Labour Code), and South Africa's labour broking. In the SA version the work is done by LRA s 198's designation of the temporary employment service — the broker — as the employer: the worker does the client's work on the client's premises, but the client's agreements, wages and dismissal protections attach to "employees," which on paper she is not. The 2014 s 198A deeming (below-threshold, 3 months) and Assign Services (ZACC, 2018, sole-employer) narrowed the door without closing it.

## Sources
- Republic of South Africa. (2014). *Labour Relations Amendment Act 6 of 2014* (s 198A). https://www.gov.za/documents/labour-relations-amendment-act
- Constitutional Court of South Africa. (2018). *Assign Services (Pty) Ltd v National Union of Metalworkers of South Africa and Others* [2018] ZACC 22. https://www.saflii.org/za/cases/ZACC/2018/22.html
- Congress of South African Trade Unions. (n.d.). *Campaign statements on labour broking*. https://cosatu.org.za/`,
      recallContent: [
        {
          prompt: "How does labour broking move a worker outside the LRA's protections?",
          answer:
            "Under LRA s 198 the temporary employment service (broker) is the employer, not the client whose work the worker actually does — so the client's bargaining agreements, wages and dismissal protections don't attach; the client can simply end the assignment. Same room, different door: the track's outside-the-category move.",
        },
        {
          prompt: "What did the 2014 amendment and the 2018 Assign Services judgment each do?",
          answer:
            "The Labour Relations Amendment Act 6 of 2014 (s 198A) deems a below-threshold placed worker the client's employee after three months. Assign Services v NUMSA [2018] ZACC 22 held the client becomes the SOLE employer — closing the 'dual employer' loophole. NUMSA, the federation's most rebellious affiliate, litigated it to the top court.",
        },
      ],
    },
    {
      slug: "sa-quiz-4",
      title: "Section 4 quiz · The paper and the reality",
      section: "Section 4 · After 1994 — the paper and the reality",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is NEDLAC?",
            options: [
              "A mining safety regulator",
              "A statutory council where labour, business, government and community negotiate social and economic legislation before it reaches parliament",
              "South Africa's largest labour broker",
              "The ANC's economics committee",
            ],
            correctIndex: 1,
            explanation:
              "Launched February 1995 — the unions at the drafting table itself, the highest bargaining 'level' in this track.",
            sourceLessonSlug: "sa-lra-1995",
          },
          {
            prompt: "What is constitutionally unusual about section 23 of South Africa's 1996 Constitution?",
            options: [
              "It sets a numerical minimum wage",
              "It entrenches the right to strike itself — rare among the world's constitutions",
              "It bans trade unions in essential services",
              "It requires arbitration of all disputes",
            ],
            correctIndex: 1,
            explanation:
              "The imprint of a movement whose only ballot, for decades, was the strike.",
            sourceLessonSlug: "sa-lra-1995",
          },
          {
            prompt: "How did the LRA 66 of 1995 answer the US Wagner Act's farm/domestic carve-out?",
            options: [
              "It copied the carve-out",
              "It refused the move: nearly all employees are covered, farm and domestic workers included — drafters who had lived the 1924 exclusion did not repeat it",
              "It excluded mineworkers instead",
              "It left coverage to the provinces",
            ],
            correctIndex: 1,
            explanation:
              "The anchor's NLRA lesson, answered deliberately by people the exclusion move had been aimed at.",
            sourceLessonSlug: "sa-lra-1995",
          },
          {
            prompt: "What is the CCMA?",
            options: [
              "A commission that licenses mines",
              "The Commission for Conciliation, Mediation and Arbitration — a free, fast disputes tribunal handling on the order of 150,000+ referrals a year (its annual reports)",
              "COSATU's internal court",
              "A wage-setting board for agriculture",
            ],
            correctIndex: 1,
            explanation:
              "The LRA's everyday machine — used on a staggering scale.",
            sourceLessonSlug: "sa-lra-1995",
          },
          {
            prompt: "What were South Africa's unemployment rates in Q1 2025 (Stats SA QLFS)?",
            options: [
              "32.9% official; 43.1% expanded; roughly 62% official for ages 15–24",
              "12% official; 15% expanded",
              "50% official; 70% expanded",
              "8% official; 10% expanded",
            ],
            correctIndex: 0,
            explanation:
              "Dated figures from the Quarterly Labour Force Survey — they move quarterly, but have not been low in living memory.",
            sourceLessonSlug: "sa-unemployment-outsiders",
          },
          {
            prompt: "What does the 'expanded' unemployment definition add to the official one?",
            options: [
              "Part-time workers",
              "People who want work but have given up actively searching (discouraged work-seekers)",
              "Students and pensioners",
              "Informal traders",
            ],
            correctIndex: 1,
            explanation:
              "Official = actively searching (32.9%, Q1 2025); expanded adds the discouraged (43.1%). Knowing which definition a number uses is part of quoting it honestly.",
            sourceLessonSlug: "sa-unemployment-outsiders",
          },
          {
            prompt: "Why does mass unemployment shadow every protection in the LRA?",
            options: [
              "Because the LRA expires in a recession",
              "Because every LRA mechanism — council, protected strike, CCMA — attaches to a person who has a job; roughly one in three who wants work stands outside all of it",
              "Because unemployed people cannot vote",
              "Because the CCMA charges fees",
            ],
            correctIndex: 1,
            explanation:
              "Question 2's modern answer: the largest excluded class is defined by having no employment at all.",
            sourceLessonSlug: "sa-unemployment-outsiders",
          },
          {
            prompt: "State the insider/outsider critique fairly.",
            options: [
              "Unions cause inflation by striking",
              "Extended bargaining agreements and strong protections raise costs for firms that never sat at the table and make hiring risky — protecting employed insiders while pricing unemployed outsiders out of a first job",
              "The unemployed are insufficiently educated to deserve jobs",
              "The LRA is unconstitutional",
            ],
            correctIndex: 1,
            explanation:
              "Pressed seriously, e.g. by the Harvard-led growth panel advising the Treasury (2008). The course steelmans it — and its rebuttal — without picking a side.",
            sourceLessonSlug: "sa-unemployment-outsiders",
          },
          {
            prompt: "State COSATU's rebuttal to the insider/outsider critique fairly.",
            options: [
              "Unemployment statistics are fabricated",
              "Unemployment tracks apartheid's education and spatial legacies and the economy's structure, not the LRA; bottom wages are too low to live on, and cheapening jobs would not create them",
              "The unemployed should join unions to get jobs",
              "Only foreign competition matters",
            ],
            correctIndex: 1,
            explanation:
              "From the federation's own submissions and congress documents — blaming the LRA, on this view, mistakes the crime scene for the culprit.",
            sourceLessonSlug: "sa-unemployment-outsiders",
          },
          {
            prompt: "What do both sides of the insider/outsider fight concede?",
            options: [
              "That the LRA should be repealed",
              "That the queue is real and enormous, and that the unemployed stand outside the bargaining system — and largely outside the federation whose alliance governs",
              "That unemployment is falling fast",
              "That bargaining councils set perfect wages",
            ],
            correctIndex: 1,
            explanation:
              "The quiet structural fact under Sections 5 and 6: the system's largest excluded class is unrepresented within it.",
            sourceLessonSlug: "sa-unemployment-outsiders",
          },
          {
            prompt: "Under LRA s 198, who is a placed worker's employer on paper?",
            options: [
              "The client company whose work she does",
              "The temporary employment service — the labour broker — not the client",
              "The bargaining council",
              "The Department of Labour",
            ],
            correctIndex: 1,
            explanation:
              "That single designation moves the worker outside the client's agreements, wages and dismissal protections — the track's rhyming move, South African verse.",
            sourceLessonSlug: "sa-labour-broking",
          },
          {
            prompt: "Which four devices make up the track's outside-the-category rhyme?",
            options: [
              "US misclassification, Mexico's protection contract, Poland's junk contract, South Africa's labour broking",
              "Germany's works council, Sweden's Ghent fund, Poland's MKS, COSATU's stayaway",
              "The NLRA, the LRA, the CLT, the Labour Code",
              "Strikes, boycotts, stayaways, go-slows",
            ],
            correctIndex: 0,
            explanation:
              "Different doors, same room: a legal form that moves the worker outside the category the protections attach to.",
            sourceLessonSlug: "sa-labour-broking",
          },
          {
            prompt: "What did section 198A (Labour Relations Amendment Act 6 of 2014) provide?",
            options: [
              "A total ban on labour broking",
              "That a placed worker earning below a statutory threshold who works for a client more than three months is deemed the client's employee",
              "That brokers must pay double wages",
              "That broking is limited to mining",
            ],
            correctIndex: 1,
            explanation:
              "Not the ban COSATU campaigned for — a time-and-income fuse on the side door. The honest limits: threshold, three-month window, worker-by-worker enforcement.",
            sourceLessonSlug: "sa-labour-broking",
          },
          {
            prompt: "What did the Constitutional Court hold in Assign Services v NUMSA (2018)?",
            options: [
              "That labour broking is unconstitutional",
              "That after three months the client is the SOLE employer of a deemed worker — not a dual employer alongside the broker",
              "That the CCMA lacks jurisdiction over brokers",
              "That the earnings threshold is invalid",
            ],
            correctIndex: 1,
            explanation:
              "[2018] ZACC 22 (26 July 2018) — the loophole of 'dual employment' closed. NUMSA litigated it to the top court.",
            sourceLessonSlug: "sa-labour-broking",
          },
          {
            prompt: "How does the course handle the question 'how many workers are placed by labour brokers?'",
            options: [
              "It gives an exact count of 1,032,000",
              "It refuses to invent a number: early-2010s estimates ranged from several hundred thousand to around a million, the count was itself a weapon in the political fight, and the biggest estimates came from the industry's own consultants",
              "It says the number is zero since 2018",
              "It cites the CCMA's official census",
            ],
            correctIndex: 1,
            explanation:
              "Contested figures presented as contested, with the range and the motivated sources named — the track's standing rule.",
            sourceLessonSlug: "sa-labour-broking",
          },
        ],
      },
    },
    // ────────────── SECTION 5 · MARIKANA ──────────────
    // 🔴 REVIEWER FOCUS: these two lessons are the ones the South African reviewer most needs to
    // check. Every sentence is written to be verifiable against the Farlam Commission's published
    // report (2015) or named contemporaneous reporting; open litigation is dated "as of 2026" and
    // NOT adjudicated. Do not promote this course until a South African reviewer has signed off.
    {
      slug: "sa-marikana-what-happened",
      title: "11 · Marikana, 16 August 2012: what happened",
      section: "Section 5 · Marikana — taught from the record",
      body: `This lesson and the next are taught under the strictest sourcing rule in this course. What follows comes from the published report of the **Marikana Commission of Inquiry** (the "Farlam Commission," 2015) and from reputable contemporaneous reporting. Where the record is disputed, the dispute is named. Where courts had not finished, this course says so and stops. Nothing here is anyone's slogan.

**The place and the dispute.** In August 2012, **Lonmin plc** operated platinum mines at **Marikana**, near Rustenburg in North West province; it was then the world's third-largest platinum producer. On **9 August 2012**, thousands of **rock drill operators** — the men who hold the drills at the rock face, among the hardest jobs underground — began an **unprotected (wildcat) strike**, outside any union's authorisation, demanding a take-home wage of **R12,500 a month**.

**The union context — essential, and easy to get wrong.** The recognised majority union at Lonmin was the **National Union of Mineworkers (NUM)** — COSATU's founding giant, the union of Section 3. But NUM's standing among Lonmin's lowest-paid underground workers had collapsed; many saw it as too close to management and too far from the rock face. The **Association of Mineworkers and Construction Union (AMCU)** — a rival founded in 1998 by **Joseph Mathunjwa** after his expulsion from NUM — was recruiting hard on the platinum belt. The strikers, though, had launched the strike **themselves**, initially outside both unions; the two organisations then contested furiously for the strikers' allegiance. Within a year AMCU had displaced NUM as the majority union across much of the platinum belt — the first major crack in COSATU's world, and Section 6 begins there.

**The week before, told plainly.** Between **10 and 15 August**, ten people were killed around Marikana: among them **two Lonmin security guards**, **two police officers**, and **six others**, including striking and non-striking workers and NUM members (Marikana Commission report, 2015 — the report documents each death). On **11 August**, shots were fired when strikers marched on the NUM office and two strikers were wounded; the commission found that this event pushed many strikers to arm themselves with traditional weapons — spears, clubs, machetes — and to gather on a rocky hill near the Nkaneng shack settlement: **the koppie**. By mid-week, thousands were camped there. Police negotiations, and separate approaches by both unions' leaders, failed to end the standoff.

**16 August.** On the evening of **15 August**, police commanders decided that if the strikers did not disarm and disperse the next day, the police would implement what they called the **"tactical option"** — forcibly disarming and dispersing the gathering. On the afternoon of 16 August, police deployed razor wire, armoured vehicles, water cannon, and lines that included the paramilitary **Tactical Response Team** carrying R5 assault rifles. As a group of strikers moved out from the koppie — whether advancing on the police or channelled toward them by the wire and the gas remained disputed before the commission, and this course does not resolve what it could not — police opened fire at what became known as **scene 1**, killing **17 men** in roughly twelve seconds, in front of television cameras. In the following minutes, several hundred metres away at a smaller outcrop — **scene 2**, with no cameras present — police killed **17 more**, many of them shot while hiding among the rocks or, on the evidence heard by the commission, while trying to surrender or flee. In total: **34 dead, at least 78 wounded**, and about **270 arrested** (Marikana Commission report, 2015).

**Two aftermath facts, dated.** First: prosecutors initially charged the **arrested strikers** with the murder of their own colleagues, under the apartheid-era "common purpose" doctrine — a decision so widely condemned that the charges were provisionally withdrawn within days (September 2012). Second: the strike itself continued and **ended on 18 September 2012**, when workers accepted a settlement including increases of up to around 22% (BBC News, 2012). The next lesson is what the commission found — and what it did not.

:::reveal At Marikana on 16 August 2012, the killings happened at two scenes. State the difference between them — and why the course is careful to keep them distinct. ||| At scene 1, police shot 17 men in about twelve seconds in front of television cameras as a group of strikers came toward or was channelled toward the police lines — whether they were advancing or fleeing the gas and wire was disputed before the commission. At scene 2, a smaller outcrop minutes later with no cameras, police killed 17 more, many shot while hiding among rocks or, on evidence the commission heard, surrendering or fleeing. The course keeps them distinct because the record does: the commission treated the scenes separately, found the police account of scene 2 particularly untenable, and referred both for criminal investigation — still unresolved as of 2026.

## Sources
- Republic of South Africa. (2015). *Report of the Marikana Commission of Inquiry*. https://www.gov.za/documents/marikana-commission-inquiry-report
- BBC News. (2012, September 18). *South Africa's Marikana miners end strike after pay deal*. https://www.bbc.com/news/world-africa-19634440
- South African History Online. (n.d.). *The Marikana massacre, 16 August 2012*. https://sahistory.org.za/`,
      recallContent: [
        {
          prompt: "Who was striking at Marikana, for what, and under whose authorisation?",
          answer:
            "Rock drill operators at Lonmin's platinum mines began an unprotected (wildcat) strike on 9 August 2012, demanding R12,500 a month take-home — launched by the workers themselves, initially outside both NUM (the recognised majority union, whose standing had collapsed) and the rival AMCU, which was recruiting hard.",
        },
        {
          prompt: "What is the documented toll of the Marikana events, per the commission's report?",
          answer:
            "Ten people killed between 10 and 15 August (including two police officers and two Lonmin security guards); then on 16 August, 34 strikers killed by police — 17 at scene 1, 17 at scene 2 — with at least 78 wounded and about 270 arrested (Marikana Commission of Inquiry report, 2015).",
        },
      ],
    },
    {
      slug: "sa-farlam",
      title: "12 · What the Farlam Commission found — and what it did not",
      section: "Section 5 · Marikana — taught from the record",
      body: `A week after the shootings, President Jacob Zuma appointed a judicial commission of inquiry under retired judge **Ian Farlam**. It sat for nearly **300 hearing days**, and its report was handed to the President on **31 March 2015** and released publicly on **25 June 2015**. That report is the closest thing to an authoritative record that exists, and this lesson is organised around a distinction the commentary constantly blurs: what the commission **found**, and what it **did not find**. Learn the distinction itself — it is how you should read every official inquiry you ever meet.

**What the commission found** (Marikana Commission of Inquiry report, 2015):

- **On the police operation:** the decision, taken on the evening of 15 August, to disarm and disperse the strikers by force the next day if they did not comply was a **defective decision**, taken without proper planning and against expert advice available to the police; the operation should not have been launched as and when it was. The commission also found that the police account given afterwards was in material respects **not truthful**, and that SAPS had withheld and, in part, constructed evidence — a finding about the *cover-up*, distinct from the shootings themselves. It recommended that a team of investigators and the Directorate for Priority Crime Investigation determine **individual criminal liability** at scenes 1 and 2, and that an inquiry be held into the **fitness for office of the National Commissioner of Police**, Riah Phiyega.
- **On Lonmin:** the company failed to use its best endeavours to resolve the dispute, failed to respond appropriately to the escalating danger to its employees — and had failed to meet housing commitments made under its social and labour plan, a failure the commission linked to the conditions from which the strike grew.
- **On the unions:** both **NUM and AMCU** failed to exercise effective control over their members, and both contributed, in different ways, to an environment in which the confrontation grew — findings each union rejects in whole or in part, which this course simply records.
- **On Cyril Ramaphosa:** by 2012 the former NUM general secretary was a Lonmin non-executive director; in the days before 16 August he had sent emails urging that the violence (ten people were already dead) be treated as **"dastardly criminal"** conduct requiring **"concomitant action"** by the authorities. Families and political critics accused him of procuring the massacre. The commission **rejected that accusation**: it found the attacks on him groundless on the evidence, reading his intervention as an attempt to get the authorities to prevent further deaths, and recommended no action against him. The accusation has remained alive in South African politics ever since — repeated in election seasons, denied by him, unresolved in public argument — and this course neither revives nor buries it: **the commission's finding is the record, and the record is what is taught.**

**What the commission did NOT find** — read this list as carefully as the first:

- It did **not** find that any minister or politician ordered the shootings, and it did **not** find a political conspiracy — while critics note, accurately, that a commission's not finding something is not the same as proving its absence.
- It did **not** convict anyone of anything: a commission of inquiry is not a court. It **referred** criminal questions onward.
- It did **not** award compensation; it recommended processes through which claims could be pursued.

**What has happened since — dated, and left open, because it is open.** The board of inquiry into Commissioner Phiyega found her unfit for office; she had been suspended in 2015 and her term expired in 2017. Civil claims by the families of the dead, the wounded and the arrested were brought against the state; the state has settled many of the families' claims (payments reported from 2018 onward), while other claims were still being litigated or settled piecemeal into the mid-2020s. On the criminal side: **no one had been convicted of any of the August 2012 killings when this course was written (2026).** No police officer has stood trial for the 34 deaths of 16 August itself; the prosecutions brought so far have concerned deaths earlier in that week and alleged obstruction afterwards, and they have ended in acquittal or were still before the courts. A South African reading this lesson years from now should check what has changed; the course states the position honestly as of its writing and expects to be updated.

:::reveal The Farlam Commission both criticised the police operation severely and rejected the accusation against Cyril Ramaphosa. Why does this course insist you hold both findings at once? ||| Because using only one of them turns the record into a slogan. The commission found the operation defectively planned, the police account materially untruthful, and criminal liability worth investigating — the state's conduct stands condemned in the record. The same record found the accusation that Ramaphosa procured the massacre groundless on the evidence, reading his emails as pressure to prevent further deaths. A reader who cites the first finding and hides the second (or the reverse) is editing the commission to fit a politics — exactly what this course's sourcing rule exists to prevent.

## Sources
- Republic of South Africa. (2015). *Report of the Marikana Commission of Inquiry*. https://www.gov.za/documents/marikana-commission-inquiry-report
- The Presidency, Republic of South Africa. (2015, June 25). *Statement on the release of the report of the Marikana Commission of Inquiry*. https://www.gov.za/
- BBC News. (2015, June 25). *Marikana commission: Key findings*. https://www.bbc.com/news/world-africa-33269205`,
      recallContent: [
        {
          prompt: "List three things the Farlam Commission found and three it did not find.",
          answer:
            "Found: the 15–16 August police operation was defectively decided and planned; the police account was materially untruthful (evidence withheld/constructed); Lonmin, NUM and AMCU each bore documented failures — and the accusation against Ramaphosa was rejected as groundless. Did NOT find: any political order or conspiracy behind the shootings; any criminal conviction (commissions refer, they don't convict); any compensation award (it recommended processes).",
        },
        {
          prompt: "What was the state of Marikana accountability when this course was written (2026)?",
          answer:
            "Phiyega found unfit for office (suspended 2015, term expired 2017); many family civil claims settled from 2018 onward, others still in progress into the mid-2020s; and no one convicted of any August 2012 killing — no officer tried for 16 August itself; prosecutions so far concern the earlier deaths and alleged obstruction, ended in acquittal or still before the courts. Dated, open, to be re-checked.",
        },
      ],
    },
    {
      slug: "sa-quiz-5",
      title: "Section 5 quiz · Marikana, from the record",
      section: "Section 5 · Marikana — taught from the record",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What sourcing rule governs this course's Marikana lessons?",
            options: [
              "Teach from the strikers' statements only",
              "Teach from the Farlam Commission's published findings and named contemporaneous reporting; name disputes; date open litigation; adjudicate nothing beyond the record",
              "Teach from the police press releases",
              "Avoid the topic entirely",
            ],
            correctIndex: 1,
            explanation:
              "The track's standing editorial rule at maximum strictness — these are the lessons the course's South African reviewer most needs to check.",
            sourceLessonSlug: "sa-marikana-what-happened",
          },
          {
            prompt: "Who began the Marikana strike, and what was the demand?",
            options: [
              "AMCU's national office, demanding recognition",
              "The rock drill operators themselves — a wildcat strike outside both unions — demanding R12,500 a month take-home",
              "NUM, demanding a closed shop",
              "Lonmin management, locking workers out",
            ],
            correctIndex: 1,
            explanation:
              "The strike was unprotected and worker-launched; NUM and AMCU then contested furiously for the strikers' allegiance.",
            sourceLessonSlug: "sa-marikana-what-happened",
          },
          {
            prompt: "What was the union situation at Lonmin in August 2012?",
            options: [
              "No unions were present",
              "NUM was the recognised majority union but had lost standing with the lowest-paid underground workers; the rival AMCU was recruiting hard; within a year AMCU displaced NUM across much of the platinum belt",
              "AMCU held a closed-shop agreement",
              "COSATU had expelled NUM",
            ],
            correctIndex: 1,
            explanation:
              "The NUM/AMCU rivalry is essential context — and the first major crack in COSATU's world, where Section 6 begins.",
            sourceLessonSlug: "sa-marikana-what-happened",
          },
          {
            prompt: "What happened between 10 and 15 August 2012, before the massacre?",
            options: [
              "Nothing — 16 August came without warning",
              "Ten people were killed, including two police officers and two Lonmin security guards; after shots near the NUM office wounded two strikers on 11 August, many strikers armed themselves and gathered on the koppie",
              "Lonmin agreed to the wage demand and then reneged",
              "The army occupied the mine",
            ],
            correctIndex: 1,
            explanation:
              "The commission's report documents each of the ten deaths. The week's violence — on all sides — is part of the record, not an excuse for what followed.",
            sourceLessonSlug: "sa-marikana-what-happened",
          },
          {
            prompt: "What was the police 'tactical option'?",
            options: [
              "A negotiation strategy",
              "The forcible disarming and dispersal of the gathered strikers, decided on the evening of 15 August for execution on the 16th if strikers did not comply",
              "A plan to arrest union leaders only",
              "Aerial surveillance of the koppie",
            ],
            correctIndex: 1,
            explanation:
              "The commission found this decision defective, taken without proper planning and against available expert advice.",
            sourceLessonSlug: "sa-marikana-what-happened",
          },
          {
            prompt: "State the toll of 16 August 2012 as the commission's report records it.",
            options: [
              "34 strikers killed (17 at scene 1, 17 at scene 2), at least 78 wounded, about 270 arrested",
              "10 killed, 20 wounded",
              "50 killed, all at one scene",
              "34 police officers killed",
            ],
            correctIndex: 0,
            explanation:
              "Scene 1 fell in roughly twelve seconds before television cameras; scene 2, minutes later at a smaller outcrop, had no cameras.",
            sourceLessonSlug: "sa-marikana-what-happened",
          },
          {
            prompt: "Why does the course refuse to state whether the scene 1 strikers were attacking the police line?",
            options: [
              "Because no one has ever asked",
              "Because that question was disputed before the commission — advancing versus channelled toward police by wire and gas — and the course does not resolve what the record could not",
              "Because the commission proved they were attacking",
              "Because the commission proved they were fleeing",
            ],
            correctIndex: 1,
            explanation:
              "Where the record holds a dispute, the course teaches the dispute — not a resolution it does not possess.",
            sourceLessonSlug: "sa-marikana-what-happened",
          },
          {
            prompt: "What happened to the roughly 270 arrested strikers immediately after the massacre?",
            options: [
              "They were released with compensation",
              "Prosecutors initially charged them with the murder of their own colleagues under the apartheid-era 'common purpose' doctrine — charges provisionally withdrawn within days after widespread condemnation (September 2012)",
              "They were deported",
              "They were rehired at higher wages",
            ],
            correctIndex: 1,
            explanation:
              "One of the most widely condemned prosecutorial decisions of democratic South Africa — and a documented, dated fact of the aftermath.",
            sourceLessonSlug: "sa-marikana-what-happened",
          },
          {
            prompt: "How did the strike itself end?",
            options: [
              "It collapsed with no gains",
              "On 18 September 2012, with a settlement including increases of up to around 22% (BBC, 2012)",
              "With nationalisation of Lonmin",
              "It never ended",
            ],
            correctIndex: 1,
            explanation:
              "Five weeks after it began, and a month after the massacre, the wildcat strike won a substantial raise — a fact any honest telling includes.",
            sourceLessonSlug: "sa-marikana-what-happened",
          },
          {
            prompt: "What did the Farlam Commission find about the police operation?",
            options: [
              "That it was well planned and lawfully executed",
              "That the decision to proceed was defective and improperly planned, and that the police account afterwards was in material respects untruthful, with evidence withheld and in part constructed",
              "That the police never fired",
              "That the operation was ordered by parliament",
            ],
            correctIndex: 1,
            explanation:
              "Two distinct condemnations: the operation, and the cover-up. It referred individual criminal liability to investigators.",
            sourceLessonSlug: "sa-farlam",
          },
          {
            prompt: "What did the commission find regarding Lonmin?",
            options: [
              "That it bore no responsibility",
              "That it failed to use its best endeavours to resolve the dispute, failed to respond appropriately to the danger, and had not met housing commitments under its social and labour plan",
              "That it ordered the police operation",
              "That it paid the strikers' wage demand secretly",
            ],
            correctIndex: 1,
            explanation:
              "The housing failure mattered: the commission linked the conditions at Marikana to the ground the strike grew from.",
            sourceLessonSlug: "sa-farlam",
          },
          {
            prompt: "What did the commission conclude about Cyril Ramaphosa's role?",
            options: [
              "It found him guilty of murder",
              "It rejected the accusation that he procured the massacre as groundless on the evidence, reading his 'concomitant action' emails as pressure on the authorities to prevent further deaths — a finding his critics continue to contest politically",
              "It made no mention of him",
              "It recommended his prosecution",
            ],
            correctIndex: 1,
            explanation:
              "The commission's finding is the record; the accusation's afterlife in electoral politics is noted, not adjudicated, by this course.",
            sourceLessonSlug: "sa-farlam",
          },
          {
            prompt: "Which of these is something the commission did NOT do?",
            options: [
              "Criticise the police operation",
              "Convict individuals or award compensation — a commission of inquiry is not a court; it referred criminal questions and recommended claims processes",
              "Recommend an inquiry into the National Commissioner's fitness",
              "Make findings about NUM and AMCU",
            ],
            correctIndex: 1,
            explanation:
              "Learning what an inquiry cannot do is as important as learning what this one found.",
            sourceLessonSlug: "sa-farlam",
          },
          {
            prompt: "What was the accountability position when this course was written (2026)?",
            options: [
              "All officers involved had been convicted",
              "Phiyega found unfit for office; many family civil claims settled from 2018 onward, others continuing; no one convicted of any August 2012 killing, and no officer tried for 16 August itself",
              "The state refused to pay any claims",
              "The commission's report remains secret",
            ],
            correctIndex: 1,
            explanation:
              "Dated and left open — the course expects a future reader to check what has changed since.",
            sourceLessonSlug: "sa-farlam",
          },
          {
            prompt: "Why does the course teach 'found' and 'did not find' as separate lists?",
            options: [
              "To make the lesson longer",
              "Because citing only the findings that fit a politics — the operation's defects without the Ramaphosa exoneration, or the reverse — edits the record into a slogan; holding both lists is how to read any official inquiry",
              "Because the commission required it",
              "Because the lists are identical",
            ],
            correctIndex: 1,
            explanation:
              "The distinction is itself the transferable skill of Section 5.",
            sourceLessonSlug: "sa-farlam",
          },
        ],
      },
    },
  ],
};
