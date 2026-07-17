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
  ],
};
