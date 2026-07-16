// Authored "South Korea: Democracy, the Chaebol, and the Lawsuit as a Weapon" — Wave 2 of the
// Workers' Rights track (plans/future-courses/workers-rights-track-proposal.md). A country course
// hanging off the anchor, "The History of Unions: America and the World"
// (scripts/data/history-of-unions-course.ts). The anchor has NO Korea lesson — its six national
// models are the Nordics, Germany, Japan, China, Poland/COSATU and the Gulf — so this course
// cross-links the anchor's four questions, its Japan enterprise-union lesson (the chaebol
// enterprise union is the nearest relative) and the Poland course (unions vs an authoritarian
// state; unions as a democratizing force), rather than duplicating any of them.
//
// The spine: unions under — and after — the developmental dictatorship. Korea compresses a century
// of labor history into four decades: labor suppression as EXPLICIT development policy under Park
// Chung-hee (export-led growth on cheap, controlled labor; the teenage women of the textile
// factories), Jeon Tae-il's self-immolation (13 Nov 1970 — the date is checked; the brief said
// 1 Nov and that is wrong), the 1987 Great Workers' Struggle as democratization broke open, and
// today's dual structure: KCTU vs FKTU, chaebol enterprise unions, and the regular/non-regular
// divide — Korea's version of the track's through-line (put the worker outside the protected
// category). Question 4's sharpest modern form anywhere in the track: civil damages suits and
// provisional seizure against individual strikers, inside a wealthy democracy.
//
// Sourcing discipline (the load-bearing part of this file):
//   * EVERY figure carries a YEAR and a source. Non-regular share 38.2% of wage workers / 8.568
//     million (August 2025; Statistics Korea, Economically Active Population Survey supplementary
//     results by employment type — unchanged from August 2024). Union density 13.1% (2022, Ministry
//     of Employment and Labor; 14.2% in 2021, 12.5% in 2019). OECD/AIAS ICTWSS country note for
//     Korea: density 11.6% and adjusted bargaining coverage 14.8% (both 2018), bargaining
//     predominantly ENTERPRISE-level, NO extension mechanism — so the brief's "~10%" density is
//     stale and is corrected here, dated.
//   * JEON TAE-IL'S QUOTE IS SOURCED, NOT RECITED. His reported last cries — "Comply with the
//     Labor Standards Act!", "We are not machines!" — come down through witness accounts assembled
//     in Cho Young-rae's biography (written clandestinely in the 1970s, published 1983; English:
//     *A Single Spark*). The course says exactly that, and does not present the words as a
//     recording. Date: 13 November 1970, Pyeonghwa (Peace) Market, Seoul. His mother Lee So-sun
//     presided over the founding of the Cheonggye Garment Workers' Union days after the funeral.
//   * STATUTE NAMES PRECISE: Trade Union and Labor Relations Adjustment Act (TULRAA, 1997);
//     Labor Standards Act (1953); Trucking Transport Business Act (return-to-work orders, first
//     ever use Nov 29, 2022). ILO C87 + C98 (+ C29) deposited 20 Apr 2021, in force 20 Apr 2022.
//   * LIVE POLITICS DATED, NOT ADJUDICATED. The "yellow envelope" TULRAA amendment: passed
//     Nov 2023 → vetoed; passed Aug 2024 → vetoed; passed 24 Aug 2025 (183–3), effective March
//     2026 — in force only months as this course ships (mid-2026), its effects untested, and the
//     course says so instead of asserting outcomes. Ssangyong death counts are given as a range
//     with the variance named. The 2022 truckers' strike is taught with both the government's
//     position and the ILO complaint, no winner declared.
//   * THE HONESTY LESSONS: density is LOW (~13%, 2022) despite world-famous militancy; coverage
//     (14.8%, 2018) barely exceeds membership because bargaining is enterprise-level with no
//     extension — the exact inverse of the Germany course's punchline; and the movement's own
//     enterprise unions of regular chaebol employees long excluded the irregular workers who now
//     make up 38% of the workforce. The track's through-line, taught against the movement itself.

import type { AuthoredCourse } from "./authored-course";

export const LABOR_SOUTH_KOREA_COURSE: AuthoredCourse = {
  title: "South Korea: Democracy, the Chaebol, and the Lawsuit as a Weapon",
  description:
    "South Korea compresses a century of labor history into four decades. Under Park Chung-hee's developmental dictatorship, cheap and tightly controlled labor was not a side effect of the economic miracle — it was the policy, and the teenage women sewing in the Peace Market's attic workshops paid for it. On 13 November 1970 a 22-year-old tailor named Jeon Tae-il burned himself alive beside a copy of the Labor Standards Act the state refused to enforce; his reported last words — \"We are not machines\" — became the founding sentence of the modern Korean labor movement, and his mother Lee So-sun spent the next four decades building the unions her son died asking for. In the summer of 1987, as the dictatorship cracked, more than three thousand strikes erupted in three months — the Great Workers' Struggle — and Korean workers won their unions and their democracy in the same season. Then the honest part: a wealthy OECD democracy that ratified the ILO's freedom-of-association conventions only in 2021; a workforce where 38.2% of wage workers are 'non-regular' (August 2025, Statistics Korea) and stand outside most of what the unions won; union density of about 13% (2022, Ministry of Employment and Labor) with bargaining coverage barely higher, because bargaining stops at the company gate; and a repression mechanism students will not have seen anywhere else in this track — civil damages suits and provisional seizure of wages and homes brought against individual strikers, which can financially destroy a worker without ever jailing one. The decade-long fight over that mechanism, the 'yellow envelope law,' is taught dated and unresolved. A country course in the Workers' Rights track — take \"The History of Unions: America and the World\" first.",
  lessons: [
    // ────────────── SECTION 1 · THE PARADOX ──────────────
    {
      slug: "korea-the-paradox",
      title: "1 · A rich democracy that signed the floor in 2021",
      section: "Section 1 · The paradox that runs the whole course",
      body: `Here are two facts about the same country. Hold them next to each other and you have this entire course.

| | South Korea |
| --- | --- |
| Economic rank | One of the largest economies on earth — an OECD member since 1996, a manufacturing superpower whose ships, cars, phones and semiconductors are in your life right now |
| Year it ratified ILO Convention 87 — the basic international guarantee of **freedom of association**, the floor beneath every other labor right | **2021** |

*(Korea deposited its ratifications of ILO Conventions 87 and 98 — plus the forced-labour Convention 29 — on 20 April 2021; they entered into force one year later, on 20 April 2022. Ministry of Foreign Affairs of the Republic of Korea; ILO NORMLEX.)*

Read the second row again. Convention 87 dates from **1948**. Poland — the communist one-party state you may have met elsewhere in this track — ratified it in **1957**. South Korea, a democracy since 1987 and one of the richest societies in Asia, did not ratify it until **2021**, thirty years after joining the ILO in 1991 with a promise to do so. For three decades, on the single most basic question in labor law — *may workers freely organize?* — the world's paper floor did not formally apply in Seoul.

**That gap is not an oversight. It is the fingerprint of this country's whole labor history**, and this course is the story of how it got there and what it means:

- Korea industrialized under a **developmental dictatorship** (1961–1987) that treated cheap, controlled labor as an explicit ingredient of the economic miracle — not a regrettable side effect, but policy (Section 2).
- Korean workers won their unions **in the same season they won their democracy** — the Great Workers' Struggle of 1987, more than three thousand strikes in three months (Section 3).
- And what they won came with two catches that define Korea today: a workforce split between **regular** and **non-regular** workers, with 38.2% of wage workers on the wrong side of the line (August 2025, Statistics Korea — Section 4); and a repression mechanism unlike anything else in this track — **the lawsuit**. Not the policeman, not the prison: the civil damages claim and the court-ordered seizure of a striker's wages and home (Section 5).

**Why this course matters to an American student in particular.** The other countries in this track show you unions under communism (Poland), unions in the boardroom (Germany), unions running the welfare plumbing (the Nordics). Korea shows you something closer to home and stranger at once: a wealthy capitalist democracy — elections, courts, free press — where the answer to the anchor course's Question 4 (*what happens to you if you try?*) remained, well into the 2020s, sharp enough that the ILO's most basic convention took seventy-three years to arrive. If you assume Question 4 gets boring once a country gets rich and free, Korea is the course that corrects you.

**One promise before we start.** Korea's labor story is often told as a martyrology — and it has real martyrs, as you will see. This course will not round the story off in either direction. The militancy is real *and* union density is only about 13% (2022, Ministry of Employment and Labor). The movement fought a dictatorship *and* later fenced out the irregular workers who most needed it. Both halves are the course.

:::reveal South Korea is a rich OECD democracy — yet it ratified ILO Convention 87, the basic freedom-of-association convention of 1948, only in 2021. Why does the course treat that date as the "fingerprint" of Korea's whole labor history rather than a paperwork delay? ||| Because the seventy-three-year gap tracks the substance: Korea industrialized under a dictatorship that used controlled, cheap labor as explicit development policy, workers only won unions alongside democracy in 1987, and even the democratic decades kept legal machinery — narrow definitions of "worker," criminal "obstruction of business," and civil damages suits against strikers — that sat uneasily with Convention 87. The ratification finally came in 2021, thirty years after Korea joined the ILO promising it. The date is late because the floor was genuinely contested, not because someone lost the form.

## Sources
- Ministry of Foreign Affairs, Republic of Korea. (2021, April 20). *Ratification of three fundamental ILO conventions marked in virtual ceremony with ILO* [Press release]. https://www.mofa.go.kr/eng/brd/m_5676/view.do?seq=321641
- International Labour Organization. (n.d.). *Ratifications for the Republic of Korea*. NORMLEX. https://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:11200:0::NO::P11200_COUNTRY_ID:103123
- Statistics Korea. (2025, October). *Supplementary results of the Economically Active Population Survey by employment type in August 2025* [Press release]. https://mods.go.kr/board.es?act=view&bid=11735&list_no=439078&mid=a20105010000
- Kim & Chang. (2022). *Implementation and implications of the ILO fundamental conventions*. https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=24986`,
      recallContent: [
        {
          prompt: "When did South Korea ratify ILO Conventions 87 and 98, and when did they enter into force?",
          answer:
            "Korea deposited the ratifications (together with Convention 29 on forced labour) on 20 April 2021; they entered into force one year later, on 20 April 2022 — thirty years after Korea joined the ILO in 1991 promising to ratify them, and seventy-three years after Convention 87 was written.",
        },
        {
          prompt: "What two present-day 'catches' does the course say came with the unions Korean workers won in 1987?",
          answer:
            "(1) A workforce split between regular and non-regular workers — 38.2% of wage workers were non-regular in August 2025 (Statistics Korea) and stand outside most of what the unions won; and (2) a repression mechanism unique in the track: civil damages suits and provisional seizure of wages and homes brought against individual strikers.",
        },
      ],
    },
    {
      slug: "korea-four-questions",
      title: "2 · The four questions, asked of Korea",
      section: "Section 1 · The paradox that runs the whole course",
      body: `If you have taken **The History of Unions: America and the World** — the anchor of this track — you own the tool this course runs on: four questions you can ask of any country on earth.

1. **Who is allowed to organise?**
2. **Who is excluded?**
3. **Who bargains with whom, and at what level?**
4. **What happens to you if you try?**

*(If you haven't taken the anchor: you can follow this course without it, but take it after — it supplies the comparative frame, and its Japan lesson on the enterprise union is the nearest relative of what you will meet inside Korea's chaebol. The anchor has no Korea lesson at all; this course is Korea's first appearance in the track.)*

Here are Korea's answers in advance. Everything after this lesson is the detail.

**Q1 — Who is allowed to organise?** Under the developmental dictatorship (1961–1987): in form, unions existed — one legal federation, kept close to the state; in substance, independent organising was treated as subversion, and emergency legislation of the early 1970s suspended effective bargaining and strike rights outright. After 1987: organising is a constitutional right (the Korean constitution names workers' rights to **independent association, collective bargaining and collective action**). But watch the fine print of *who counts as a worker* — it decides everything in this country.

**Q2 — Who is excluded?** This is Korea's defining answer, and the track's oldest move wearing a new uniform. The anchor taught you the US New Deal's carve-out (farm and domestic workers written out of the Wagner Act); Poland showed you civil-law "junk contracts." Korea runs the same play at extraordinary scale: **38.2% of wage workers are "non-regular"** — fixed-term, part-time, dispatched, in-house subcontracted, or "specially employed" like truck drivers who are legally self-employed businesses (August 2025, Statistics Korea). Many of them stand outside effective union protection, and some — the truckers of Section 5 — are outside the legal definition of "worker" entirely, so their strikes are not legally strikes.

**Q3 — Who bargains with whom, and at what level?** At the **enterprise**. Korean bargaining happens overwhelmingly company by company — often conglomerate subsidiary by conglomerate subsidiary — and there is **no mechanism to extend agreements** to firms that didn't sign (OECD/AIAS ICTWSS country note). Remember Germany's trick, where 14% membership produces ~49% coverage because sectors bargain? Korea is the anti-Germany: density about 13% (2022, Ministry of Employment and Labor), coverage about **14.8%** (2018, OECD/AIAS) — coverage barely exceeds membership, because a Hyundai agreement stops at Hyundai's gate, and usually at the *regular workers'* section of Hyundai's gate.

**Q4 — What happens to you if you try?** Historically: prison, torture, the blacklist — Section 2 is honest about the dictatorship. But Korea's signature answer is the modern one, and no other course in this track has it: **the civil damages suit and provisional seizure**. A strike is ruled illegal (easy, when the lawful scope of disputes is narrow); the company sues the union *and individual workers* for the business it lost; a court freezes wages and homes while the case runs. No one is jailed. The worker is simply ruined — or frightened out of trying years before it comes to that. The decade-long political war over this mechanism, the "yellow envelope law," is Section 5's finale.

**One map for the whole course.** Every section from here is one of these answers unpacked: the dictatorship (Q1 then, and Q4 at its bloodiest), 1987 (the answers flipping in a single summer), the dual labor market (Q2 and Q3 today), and the lawsuit (Q4 today). Keep the four questions in hand; Korea will move all four faster than any country you have studied.

:::reveal Germany and Korea have similar union density — roughly one worker in seven. Germany's bargaining coverage is about 49%; Korea's is about 14.8% (2018, OECD/AIAS). What single structural difference explains the gap? ||| The level of bargaining plus extension. German unions bargain sector-wide and agreements reach every employee of every signatory employer-association firm, so coverage rides far above membership. Korean bargaining is enterprise-level — company by company — with no legal mechanism to extend an agreement to anyone who didn't sign, so an agreement stops at the company gate and coverage stays pinned to membership. Same density, different plumbing, wildly different reach.

## Sources
- OECD & AIAS. (2021). *ICTWSS database — country note: Korea*. OECD Publishing. https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/10/main-indicators-and-characteristics-of-collective-bargaining-2021-country-notes_4b5553c9/korea_a03553b6/ae3e1cc3-en.pdf
- Statistics Korea. (2025, October). *Supplementary results of the Economically Active Population Survey by employment type in August 2025* [Press release]. https://mods.go.kr/board.es?act=view&bid=11735&list_no=439078&mid=a20105010000
- Statista. (2024). *Trade union membership rate South Korea 1977–2023* [Reporting Ministry of Employment and Labor figures]. https://www.statista.com/statistics/648966/south-korea-union-membership-rate/`,
      recallContent: [
        {
          prompt: "What is Korea's defining answer to Question 2 (who is excluded)?",
          answer:
            "The regular/non-regular divide: 38.2% of wage workers — 8.57 million people — were non-regular in August 2025 (Statistics Korea): fixed-term, part-time, dispatched, in-house subcontracted, or 'specially employed' self-employed like truck drivers. Many stand outside effective union protection; some are outside the legal definition of 'worker' entirely.",
        },
        {
          prompt: "What is Korea's signature modern answer to Question 4 (what happens to you if you try)?",
          answer:
            "The civil damages suit plus provisional seizure: a strike is ruled illegal, the company sues the union and individual strikers for lost business, and courts freeze wages and homes while the case runs. It can financially destroy a worker without jailing anyone — a mechanism no other course in the track has.",
        },
      ],
    },
    {
      slug: "korea-quiz-1",
      title: "Section 1 quiz · The paradox, and the four questions",
      section: "Section 1 · The paradox that runs the whole course",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "When did South Korea ratify ILO Convention 87 on freedom of association?",
            options: ["1948", "1987", "2021", "1996"],
            correctIndex: 2,
            explanation:
              "Korea deposited ratifications of Conventions 87 and 98 (plus 29) on 20 April 2021, in force 20 April 2022 — thirty years after joining the ILO in 1991 with a promise to ratify, and seventy-three years after C87 was written.",
            sourceLessonSlug: "korea-the-paradox",
          },
          {
            prompt: "Why is Korea's 2021 ratification date such a striking fact?",
            options: [
              "Because Korea was too poor to ratify earlier",
              "Because a rich OECD democracy took until the 2020s to sign the basic freedom-of-association floor that even communist Poland had ratified in 1957",
              "Because the ILO only invited Korea in 2020",
              "Because ratification is meaningless everywhere",
            ],
            correctIndex: 1,
            explanation:
              "The gap is the fingerprint of Korea's labor history: the floor was genuinely contested — through the dictatorship and well into the democratic decades — not mislaid paperwork.",
            sourceLessonSlug: "korea-the-paradox",
          },
          {
            prompt: "What share of South Korean wage workers were 'non-regular' in August 2025, per Statistics Korea?",
            options: ["About 10%", "About 38%", "About 62%", "About 5%"],
            correctIndex: 1,
            explanation:
              "38.2% — 8.57 million people — per the Economically Active Population Survey supplementary results (August 2025), unchanged from August 2024. That divide is Korea's defining answer to 'who is excluded?'",
            sourceLessonSlug: "korea-four-questions",
          },
          {
            prompt: "Korea's union density is roughly 13% (2022, Ministry of Employment and Labor). What is its bargaining coverage, and why so close to density?",
            options: [
              "About 49% — sectoral agreements extend coverage",
              "About 14.8% (2018, OECD/AIAS) — bargaining is enterprise-level with no extension mechanism, so agreements stop at the company gate",
              "About 90% — the state extends all agreements",
              "Zero — collective bargaining is illegal",
            ],
            correctIndex: 1,
            explanation:
              "Korea is the anti-Germany: company-by-company bargaining and no extension means coverage stays pinned to membership. Same density as Germany, a third of the coverage.",
            sourceLessonSlug: "korea-four-questions",
          },
          {
            prompt: "What repression mechanism does the course say no other country course in this track has?",
            options: [
              "Mass imprisonment of strikers",
              "Civil damages suits and provisional seizure of wages and homes brought against individual strikers",
              "Deportation of union leaders",
              "A ban on all union meetings",
            ],
            correctIndex: 1,
            explanation:
              "A strike is ruled illegal, the employer sues individuals for lost business, and courts freeze wages and homes while the case runs — financial destruction without a prison cell. Section 5 is this mechanism.",
            sourceLessonSlug: "korea-four-questions",
          },
          {
            prompt: "During what period did Korea's developmental dictatorship run, per the course?",
            options: ["1910–1945", "1961–1987", "1987–1997", "1948–1953"],
            correctIndex: 1,
            explanation:
              "From Park Chung-hee's 1961 coup to the democratic breakthrough of 1987 — the era when cheap, controlled labor was explicit development policy.",
            sourceLessonSlug: "korea-the-paradox",
          },
          {
            prompt: "What happened in Korea in the same season workers won their independent unions?",
            options: [
              "The country joined the OECD",
              "The country won its democracy — the 1987 Great Workers' Struggle broke out as the dictatorship cracked",
              "The IMF bailout was signed",
              "The chaebol were dissolved",
            ],
            correctIndex: 1,
            explanation:
              "More than three thousand strikes erupted in the three months after the June 1987 democratic breakthrough. Unions and democracy arrived together — the heart of Section 3.",
            sourceLessonSlug: "korea-the-paradox",
          },
          {
            prompt: "Why does the course say Korea 'corrects' an American student's assumption about Question 4?",
            options: [
              "Because Korea proves repression only happens in poor countries",
              "Because Korea shows that 'what happens to you if you try?' can stay sharp inside a wealthy capitalist democracy with elections, courts and a free press",
              "Because Korean workers never faced repression",
              "Because Question 4 does not apply in Asia",
            ],
            correctIndex: 1,
            explanation:
              "Students assume Question 4 gets boring once a country is rich and free. Korea — where the basic ILO floor arrived in 2021 and strikers face ruinous lawsuits — is the counterexample.",
            sourceLessonSlug: "korea-the-paradox",
          },
          {
            prompt: "Which anchor-course lesson does this course call the 'nearest relative' of Korean chaebol unionism?",
            options: [
              "The Japan lesson on enterprise unions",
              "The Gulf kafala lesson",
              "The Nordic Ghent-system lesson",
              "The Haymarket lesson",
            ],
            correctIndex: 0,
            explanation:
              "The anchor has no Korea lesson at all; its Japan enterprise-union lesson is the closest cousin of the company-by-company unionism you will meet inside Korea's conglomerates.",
            sourceLessonSlug: "korea-four-questions",
          },
          {
            prompt: "Under the dictatorship, what was the formal status of unions?",
            options: [
              "All unions were banned outright at all times",
              "Unions existed in form — one legal federation kept close to the state — while independent organising was treated as subversion",
              "Unions ran the government",
              "Only foreign workers could unionize",
            ],
            correctIndex: 1,
            explanation:
              "Like several authoritarian systems in this track, the point was not 'no unions' but 'no unions the state didn't control' — with early-1970s emergency legislation suspending effective bargaining and strike rights.",
            sourceLessonSlug: "korea-four-questions",
          },
          {
            prompt: "Which categories make up Korea's 'non-regular' workforce?",
            options: [
              "Only foreign guest workers",
              "Fixed-term, part-time, dispatched, in-house subcontracted, and 'specially employed' workers who are legally self-employed",
              "Only workers under age 25",
              "Government employees",
            ],
            correctIndex: 1,
            explanation:
              "The categories share one feature: each moves the person doing the work away from the protected core — the track's oldest move, at Korean scale.",
            sourceLessonSlug: "korea-four-questions",
          },
          {
            prompt: "What does the Korean constitution guarantee workers, on paper, since democratization?",
            options: [
              "Nothing about labor",
              "The rights to independent association, collective bargaining and collective action",
              "A guaranteed job for life",
              "Union membership as a legal duty",
            ],
            correctIndex: 1,
            explanation:
              "The three labor rights are constitutional text. The course's drama is the distance between that text and the fine print of who counts as a 'worker.'",
            sourceLessonSlug: "korea-four-questions",
          },
          {
            prompt: "The course promises not to tell Korea's story as a pure 'martyrology.' What two honest facts does it commit to keeping in view?",
            options: [
              "Korea has no labor martyrs and no unions",
              "Union density is only about 13% despite world-famous militancy, and the movement itself long fenced out the irregular workers who most needed it",
              "All Korean workers are union members and all are regular employees",
              "The dictatorship never repressed anyone",
            ],
            correctIndex: 1,
            explanation:
              "Both halves are the course: real martyrs and real militancy, alongside low density, low coverage, and the movement's own exclusions.",
            sourceLessonSlug: "korea-the-paradox",
          },
          {
            prompt: "Korea joined the ILO in what year — making the 2021 ratification a thirty-year-old promise kept?",
            options: ["1948", "1991", "2010", "1961"],
            correctIndex: 1,
            explanation:
              "Korea joined the ILO in 1991, pledging to ratify the fundamental conventions. C87 and C98 waited until 20 April 2021.",
            sourceLessonSlug: "korea-the-paradox",
          },
          {
            prompt: "Why should you 'watch the fine print of who counts as a worker' in Korea?",
            options: [
              "Because the definition decides who gets the constitutional labor rights — and workers defined out of the category (like self-employed truckers) lose legal strike protection entirely",
              "Because the definition changes the minimum wage only",
              "Because only civil servants are workers in Korea",
              "Because the term is purely ceremonial",
            ],
            correctIndex: 0,
            explanation:
              "Korea's sharpest exclusions run through the legal category itself: if you are not a 'worker' under the statute, your strike is not legally a strike. Section 5's truckers live this.",
            sourceLessonSlug: "korea-four-questions",
          },
        ],
      },
    },
  ],
};
