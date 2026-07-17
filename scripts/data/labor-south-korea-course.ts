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

    // ────────────── SECTION 2 · THE DEVELOPMENTAL DICTATORSHIP ──────────────
    {
      slug: "korea-growth-first",
      title: "3 · The miracle had a wage bill",
      section: "Section 2 · The developmental dictatorship (1961–1979)",
      body: `In 1961, South Korea was one of the poorest countries on earth — poorer, by most measures, than much of sub-Saharan Africa — a war-shattered, aid-dependent state barely eight years past the armistice that froze the Korean War. Forty years later it was an OECD industrial power. That transformation is usually called the **Miracle on the Han River**, and it is real. This lesson is about the part of the invoice that the word "miracle" hides.

**The regime.** On 16 May 1961, Major General **Park Chung-hee** seized power in a military coup. He ruled for eighteen years — first as junta leader, then as elected president, and after 1972 as something close to a legal dictator, when his **Yushin Constitution** dissolved the existing order, ended direct presidential elections and gave him effectively unlimited terms and emergency powers. His government planned the economy the way a general staff plans a campaign: five-year plans from 1962, state-directed credit, and a bet that a country with no oil, no minerals and no capital had exactly one export to build on — **inexpensive, disciplined, educated labor.**

**The strategy.** Korea's climb started with **export-led light manufacturing**: textiles, garments, wigs, plywood, footwear. Factories in Seoul's Guro district and the Peace Market garment quarter, and later the heavy-industry cities of the southeast, sold to the world on one advantage — price. And the price advantage *was* the wage bill. Keeping labor cheap, plentiful and quiet was therefore not a regrettable by-product of the development model. **It was a load-bearing component of it.** Cheap exports required cheap labor; cheap labor required that workers not be able to bid up its price; and making sure they couldn't was the state's job.

**The machinery of quiet.** Three interlocking parts:

- **A single, supervised labor federation.** Unions were not banned — that is a common misreading. The Federation of Korean Trade Unions (**FKTU**) existed legally through the whole period, and the state kept it close: leadership vetted, militancy filtered out, grievances channeled into paperwork. (Keep this pattern in mind from the Poland course — a one-federation system whose job runs downward is a tool of the state, whatever it is called.)
- **Emergency law.** In December 1971, a special national-security measures law effectively **suspended collective bargaining and collective action** — and the 1972 Yushin system deepened the freeze. For most of the 1970s, the legal answer to "may we strike?" was in substance *no*.
- **The intelligence services.** Labor disputes were treated as security matters. The Korean Central Intelligence Agency (KCIA) surveilled, infiltrated and broke independent worker organizing — you will see its hand directly in the Dongil Textile story two lessons from now.

**Who paid.** The workforce of the light-industry export machine was overwhelmingly **young women** — teenagers and women in their early twenties, recruited off the countryside, living in dormitories or crammed rooms, remitting wages home to pay school fees for brothers. In the Peace Market's subdivided attic workshops, garment workers — many of them **"sida,"** teenage assistant seamstresses — worked days that routinely ran thirteen to fifteen hours in spaces too low to stand up in, breathing fabric dust, for some of the lowest industrial wages in Asia. A **Labor Standards Act** existed — enacted in 1953, on paper guaranteeing working hours, rest days and safe conditions — and in the export quarters it was simply not enforced. The law was real; its enforcement was not part of the plan.

Hold that gap — a real statute, deliberately left dead — because the next lesson is about a 22-year-old tailor who read that statute and decided the country was going to hear about it.

:::reveal The course insists that cheap labor under Park Chung-hee was "a load-bearing component" of the development model, not a side effect. What is the difference, and what evidence does the lesson give? ||| A side effect is something a policy tolerates; a component is something it requires and maintains. Korea's export-led strategy sold on price, the price advantage was the wage bill, and the state actively maintained it: a single supervised federation (FKTU) channeling grievances, 1971 emergency law suspending bargaining and strikes through the Yushin era, and the KCIA treating labor organizing as a security threat. The state did not merely fail to protect workers — it organized their quiet, because worker power would have bid up the one input the model depended on.

## Sources
- Chang, D. (2021). Korean labour movement: The birth, rise and transformation of the democratic trade union movement. In *Routledge Handbook of Contemporary South Korea*. https://labourschool.org/wp-content/uploads/2024/09/Chang-2021-Korean-Labour-Movement-Routledge-Handbook-of-Contemporary-South-Korea.pdf
- Federation of Korean Trade Unions. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/Federation_of_Korean_Trade_Unions
- The Korea Times. (2011, January 23). *Labor activist Chon Tae-il's death: A wake-up call*. https://www.koreatimes.co.kr/southkorea/20110123/century-labor-activist-chon-tae-ils-death-a-wake-up-call`,
      recallContent: [
        {
          prompt: "What three mechanisms did the Park regime use to keep labor cheap and quiet?",
          answer:
            "(1) A single legal, state-supervised federation (the FKTU) with vetted leadership channeling grievances downward; (2) emergency law — the December 1971 special measures and the 1972 Yushin system — suspending effective bargaining and strike rights; (3) the KCIA treating labor organizing as a security matter: surveillance, infiltration, and breaking of independent unions.",
        },
        {
          prompt: "Who staffed Korea's light-industry export machine, and under what conditions?",
          answer:
            "Overwhelmingly young women — teenagers and women in their early twenties from the countryside — including the 'sida' assistant seamstresses of Seoul's Peace Market: thirteen-to-fifteen-hour days in attic workshops too low to stand in, fabric dust, dormitory living, wages remitted home. The 1953 Labor Standards Act guaranteed hours and conditions on paper and was simply not enforced there.",
        },
      ],
    },
    {
      slug: "korea-jeon-tae-il",
      title: "4 · 13 November 1970: Jeon Tae-il",
      section: "Section 2 · The developmental dictatorship (1961–1979)",
      body: `Every labor movement has a founding story. Korea's is a specific young man on a specific street, and this lesson tells it soberly, because it deserves better than legend.

**The man.** **Jeon Tae-il** was born in 1948 into deep poverty in Daegu. From his mid-teens he worked in the garment workshops of Seoul's **Pyeonghwa Market** — "Peace Market" — first as a sida (assistant), later a sewing-machine operator, eventually a tailor. He was not, at first, an activist of any kind. What changed him, by the accounts of those who knew him, was watching the sida — girls of fourteen, fifteen, sixteen — cough blood from fabric dust, get fired when they got sick, and work fifteen-hour days for less than the price of a coffee. His biography records that he sometimes gave his bus fare to buy food for the youngest workers and walked hours home.

**The discovery.** In 1968 Jeon learned something that reorganized his life: **the law was already on the workers' side.** The **Labor Standards Act**, enacted in 1953, set maximum hours, mandated paid rest, and regulated the employment of minors. It applied, on paper, to the Peace Market. Barely schooled, he bought a guidebook to the Act and taught himself to read it — famously wishing aloud for "a friend who could read the difficult words." He formed a small group of fellow tailors (they called themselves the **Fools' Society**, *Babohoe* — fools, for having worked all those years without knowing they had rights), surveyed hundreds of Peace Market workers about their hours and health, and carried the results to the Labor Office, to newspapers, to anyone official who would take the file. The answer everywhere was the one the previous lesson taught you to expect from a state whose growth model needed the Peace Market cheap: nothing.

**The day.** On **13 November 1970**, during a small workers' demonstration at the Peace Market that police were breaking up, Jeon Tae-il, aged 22, soaked his body in flammable liquid, set himself alight, and burned as a protest — alongside a copy of the Labor Standards Act, the dead statute consigned to the fire with him. He died in a hospital that evening, after asking his mother to finish what he could not.

**What he said.** His reported last cries — shouted as he burned, remembered by fellow workers who were there — were: **"Comply with the Labor Standards Act!"**, **"We are not machines!"**, and **"Do not let my death be in vain!"** Be precise about the sourcing, because this course does not launder legend into transcript: these words come down through witness accounts, assembled most influentially in **Cho Young-rae's biography of Jeon** — written clandestinely under the dictatorship in the 1970s and published in 1983 (in English, *A Single Spark*). The exact wording varies slightly across tellings, as shouted last words always do. The substance does not: he died demanding not revolution, but that the government **obey its own law** — the same move you saw in Poland's Demand #1 citing an ILO convention Poland had already ratified. The floor existed on paper; the fight was to make it real.

**What it did.** Jeon's death detonated something the regime could not put back. Within days, his funeral became a rallying point; within two weeks, the Peace Market had the beginnings of its first real union (next lesson). Beyond the market, his death fused two groups the dictatorship had carefully kept apart: **workers and students.** University students — many of whom would later say they carried "a debt to Jeon Tae-il" — began going into factories through night schools and church labor missions; a generation of intellectuals turned toward labor. The modern Korean labor movement dates itself from this day. When you meet the KCTU in Section 3, remember its ancestry runs here.

:::reveal Jeon Tae-il's reported last words are among the most famous sentences in Korean history — "We are not machines! Comply with the Labor Standards Act!" How does this course source them, and why does the precision matter? ||| They are witness-remembered last cries, not a recording: shouted as he burned on 13 November 1970 and passed down through fellow workers' accounts, assembled most influentially in Cho Young-rae's biography (written clandestinely in the 1970s, published 1983; English title *A Single Spark*), with slight wording variations across tellings. The precision matters because this course's trust rests on never presenting legend as transcript — and because the verified substance is even sharper than the legend: he died demanding the state enforce its own existing statute, not utopia.

## Sources
- Jeon Tae-il. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/Jeon_Tae-il
- The Korea Times. (2011, January 23). *Labor activist Chon Tae-il's death: A wake-up call*. https://www.koreatimes.co.kr/southkorea/20110123/century-labor-activist-chon-tae-ils-death-a-wake-up-call
- Working Class History. (2020). *E51: Jeon Tae-il and Lee So-sun* [Podcast episode notes]. https://workingclasshistory.com/podcast/e51-jeon-tae-il-and-lee-so-sun/
- Cho, Y. (2003). *A single spark: The biography of Chun Tae-il* (Dolbegae, publisher; original Korean edition 1983).`,
      recallContent: [
        {
          prompt: "What did Jeon Tae-il discover in 1968, and what did he do about it before his death?",
          answer:
            "That the 1953 Labor Standards Act already guaranteed, on paper, the hours, rest and protections the Peace Market denied — the law existed but was unenforced. He taught himself the statute from a guidebook, formed the 'Fools' Society' of fellow tailors, surveyed hundreds of workers about hours and health, and took the evidence to the Labor Office and the press. Officialdom did nothing.",
        },
        {
          prompt: "What happened on 13 November 1970, and what were its two immediate legacies?",
          answer:
            "Jeon Tae-il, 22, self-immolated at Seoul's Peace Market beside a burning copy of the Labor Standards Act, dying that evening after asking his mother to continue the work. Legacies: the Peace Market's first real union within two weeks (founded with his mother Lee So-sun presiding), and the fusing of workers and students — the alliance that became the backbone of the democratic labor movement.",
        },
      ],
    },
    {
      slug: "korea-women-of-the-seventies",
      title: "5 · The mother, the union, and the women who shook the state",
      section: "Section 2 · The developmental dictatorship (1961–1979)",
      body: `The 1970s democratic labor movement in Korea has a feature that every honest telling must put in the center, because the movement's own later history will try to push it to the edge: **it was built overwhelmingly by women.** The heavy-industry men of Ulsan enter this story in 1987. The people who kept independent unionism alive through the worst decade of the dictatorship were the young women of the textile, garment, electronics and wig factories — and one bereaved mother in her forties.

**The mother.** Jeon Tae-il's dying request to his mother, **Lee So-sun**, was that she carry on what he had started. She did — for the next forty years. Barely a week after her son's funeral, she presided over the founding ceremony of the **Cheonggye Garment Workers' Union**, the Peace Market union her son had died asking for and one of the first genuinely democratic unions of the era. She was jailed repeatedly under the dictatorship, kept organizing anyway, and by the time she died in 2011, at 82, the whole Korean labor movement called her **"the mother of workers"** (Korea Herald obituary). Learn her name alongside her son's; Korean workers do.

**Dongil Textile — and the price of a woman-led union.** At the Dongil textile plant in Incheon, women workers built one of the era's flagship democratic unions — in 1972 electing a woman to lead the local, in an industry where women did the work and men had always held the union offices. The company, backed by the state's security apparatus, spent years trying to break it: mass firings, beatings, a notorious 1976 episode in which police dragged away semi-clad women strikers. The episode to remember — taught here exactly because of how ugly it is — came on **22 February 1978**, when company-side men attacked women unionists arriving to vote in a union election, **smearing them with buckets of human excrement** — into faces, mouths, clothing — to humiliate them out of the union. Over a hundred women who kept resisting were fired and **blacklisted** across the industry. When some of them burst into a nationally broadcast event shouting that they could not eat excrement, they were beaten and arrested. Remember this scene when someone tells you Korea's labor peace was consensual.

**YH Trading — the strike that toppled a dictator.** In August 1979, the YH Trading Company — a wig and garment exporter — announced it was closing and dismissing its remaining workforce, mostly young women. About two hundred of them staged a sit-in at the headquarters of the **New Democratic Party**, the parliamentary opposition, asking politicians to witness their case. Before dawn on **11 August 1979**, roughly a thousand riot police stormed the building. Lawmakers and journalists were beaten; the workers were dragged out; and a 21-year-old union officer named **Kim Kyung-suk** fell from the building to her death during the raid. The regime then **expelled opposition leader Kim Young-sam from the National Assembly** for championing the workers — which detonated mass protests in his home region, the **Busan–Masan uprising** of October 1979. Within weeks, amid the crisis the uprising opened inside the regime, Park Chung-hee was **assassinated by his own intelligence chief on 26 October 1979.**

Do not overclaim the chain — historians debate the exact weights — but the sequence itself is documented and taught in Korea: **a garment workers' sit-in → a police raid and a young woman's death → an opposition leader's expulsion → a regional uprising → the end of the eighteen-year dictatorship.** The women of the light-industry unions did not just endure the developmental state. They were the proximate trigger of its terminal crisis.

**Why this lesson sits here.** When this course reaches the male-dominated federations of the 1990s and the non-regular workforce of today — which is disproportionately female — you will need this lesson as the measuring stick. The Korean labor movement's founding generation was female. What the movement later did with that inheritance is one of the honesty tests of Section 4.

:::reveal The course claims the women of Korea's 1970s light-industry unions were "the proximate trigger" of the dictatorship's terminal crisis. Trace the documented chain of events from August to October 1979. ||| YH Trading announced closure and layoffs; about two hundred women workers staged a sit-in at the opposition New Democratic Party headquarters; ~1,000 riot police stormed it on 11 August 1979 and 21-year-old unionist Kim Kyung-suk fell to her death; the regime expelled opposition leader Kim Young-sam from the National Assembly for backing the workers; his home region exploded in the Busan–Masan uprising of October 1979; and amid the crisis it opened inside the regime, Park Chung-hee was assassinated by his own KCIA chief on 26 October 1979. Historians debate the weights, not the sequence.

## Sources
- The Korea Herald. (2011, September 4). *Lee So-sun, mother of labor activist Jeon Tae-il, dies at 82*. http://www.koreaherald.com/view.php?ud=20110904000260
- Global Nonviolent Action Database. (n.d.). *Korean women textile workers fight for fair union election, 1976–1978*. Swarthmore College. https://nvdatabase.swarthmore.edu/content/korean-women-textile-workers-fight-fair-union-election-1976-1978
- Monash University Korean Studies Research Hub. (n.d.). *8.11 The YH Trading Company incident*. https://www.monash.edu/arts/languages-literatures-cultures-linguistics/korean-studies-research-hub/research/on-this-day-in-korean-history/15-8.11-the-yh-trading-company-incident-yh-incident
- Global Nonviolent Action Database. (n.d.). *South Korean women labourers protest closing of YH wig manufacturing company, 1979*. Swarthmore College. https://nvdatabase.swarthmore.edu/content/south-korean-women-labourers-protest-closing-yh-wig-manufacturing-company-1979`,
      recallContent: [
        {
          prompt: "Who was Lee So-sun, and what did she do after 13 November 1970?",
          answer:
            "Jeon Tae-il's mother. Honoring his dying request, she presided over the founding of the Cheonggye Garment Workers' Union barely a week after his funeral, was jailed repeatedly under the dictatorship, and organized for four more decades. When she died in 2011 at 82, the movement called her 'the mother of workers.'",
        },
        {
          prompt: "What happened at Dongil Textile on 22 February 1978, and what followed for the women involved?",
          answer:
            "Company-side men attacked women unionists arriving to vote in a union election, smearing them with buckets of human excrement to humiliate them out of their woman-led democratic union. Over a hundred who kept resisting were fired and blacklisted across the industry; women who protested at a broadcast event were beaten and arrested.",
        },
      ],
    },
    {
      slug: "korea-quiz-2",
      title: "Section 2 quiz · The developmental dictatorship",
      section: "Section 2 · The developmental dictatorship (1961–1979)",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does the course call cheap labor a 'load-bearing component' of Park Chung-hee's development model?",
            options: [
              "Because Korea's exports sold on price, the price advantage was the wage bill, and the state actively organized workers' quiet to protect it",
              "Because Korea had abundant oil wealth to fund wages",
              "Because unions set national wage policy",
              "Because labor costs were irrelevant to exports",
            ],
            correctIndex: 0,
            explanation:
              "Export-led light manufacturing (textiles, garments, wigs) competed on price; suppressing labor's bargaining power was policy, maintained through the supervised FKTU, emergency law, and the KCIA.",
            sourceLessonSlug: "korea-growth-first",
          },
          {
            prompt: "How did Park Chung-hee come to power, and what was the Yushin system?",
            options: [
              "He won a free election in 1961; Yushin was a welfare program",
              "He seized power in a military coup on 16 May 1961; the 1972 Yushin Constitution ended direct presidential elections and gave him effectively unlimited rule",
              "He inherited power from his father; Yushin was a trade treaty",
              "He was appointed by the UN; Yushin was a union federation",
            ],
            correctIndex: 1,
            explanation:
              "Eighteen years of rule: junta leader, then president, then — after the 1972 Yushin Constitution — something close to a legal dictator with emergency powers.",
            sourceLessonSlug: "korea-growth-first",
          },
          {
            prompt: "Were unions banned outright under the developmental dictatorship?",
            options: [
              "Yes — no union existed legally until 1987",
              "No — the FKTU existed legally throughout, kept close to the state, while independent organizing was treated as subversion and 1971 emergency law suspended effective bargaining and strikes",
              "No — all unions operated freely",
              "Yes — union membership was a capital crime",
            ],
            correctIndex: 1,
            explanation:
              "The pattern is 'no unions the state didn't control,' not 'no unions' — the same distinction the Poland course teaches about Party-run federations.",
            sourceLessonSlug: "korea-growth-first",
          },
          {
            prompt: "Who were the 'sida' of the Peace Market?",
            options: [
              "Factory owners' sons in management training",
              "Teenage assistant seamstresses — girls of roughly 14 to 16 working thirteen-to-fifteen-hour days in attic workshops",
              "Government labor inspectors",
              "Union shop stewards",
            ],
            correctIndex: 1,
            explanation:
              "The youngest, cheapest layer of the garment workforce — the workers whose condition transformed Jeon Tae-il from tailor to organizer.",
            sourceLessonSlug: "korea-growth-first",
          },
          {
            prompt: "What legal discovery reorganized Jeon Tae-il's life in 1968?",
            options: [
              "That strikes were legal under the constitution",
              "That the Labor Standards Act of 1953 already guaranteed on paper the hours, rest and protections the Peace Market denied — the law existed but went unenforced",
              "That the Peace Market was foreign-owned",
              "That minors could not legally work at all",
            ],
            correctIndex: 1,
            explanation:
              "He taught himself the statute from a guidebook, wished for 'a friend who could read the difficult words,' and built the Fools' Society to survey workers and demand enforcement.",
            sourceLessonSlug: "korea-jeon-tae-il",
          },
          {
            prompt: "What happened on 13 November 1970?",
            options: [
              "The Peace Market burned down in an accidental fire",
              "Jeon Tae-il, 22, self-immolated at the Peace Market beside a burning copy of the Labor Standards Act, dying that evening",
              "Park Chung-hee was assassinated",
              "The FKTU was founded",
            ],
            correctIndex: 1,
            explanation:
              "The founding moment of the modern Korean labor movement — a protest demanding the state enforce its own dead statute.",
            sourceLessonSlug: "korea-jeon-tae-il",
          },
          {
            prompt: "How does the course source Jeon Tae-il's famous last words ('We are not machines!')?",
            options: [
              "From a police audio recording",
              "As witness-remembered cries passed down through fellow workers' accounts, assembled in Cho Young-rae's clandestinely written biography (published 1983), with wording varying slightly across tellings",
              "From Jeon's own published memoir",
              "From a live television broadcast",
            ],
            correctIndex: 1,
            explanation:
              "The course refuses to launder legend into transcript: reported last words, sourced to the biography and witness accounts — while noting the substance (enforce the existing law) is beyond dispute.",
            sourceLessonSlug: "korea-jeon-tae-il",
          },
          {
            prompt: "What was the 'Fools' Society' (Babohoe)?",
            options: [
              "A government propaganda troupe",
              "Jeon Tae-il's small group of fellow tailors — 'fools' for having worked years without knowing their legal rights — who surveyed Peace Market workers and petitioned officials",
              "A student drama club",
              "An employers' association",
            ],
            correctIndex: 1,
            explanation:
              "The name is the lesson: the discovery that rights already existed on paper, unknown and unenforced, is what turned a tailor into an organizer.",
            sourceLessonSlug: "korea-jeon-tae-il",
          },
          {
            prompt: "What did Jeon Tae-il's death fuse together that the dictatorship had kept apart?",
            options: [
              "The army and the police",
              "Workers and students — a generation of students turned toward factories and labor organizing, citing a 'debt to Jeon Tae-il'",
              "The two Koreas",
              "Business and government",
            ],
            correctIndex: 1,
            explanation:
              "The worker-student alliance became the backbone of the democratic labor movement that resurfaces in 1987 — and the ancestry of the KCTU.",
            sourceLessonSlug: "korea-jeon-tae-il",
          },
          {
            prompt: "Who founded the Cheonggye Garment Workers' Union, and when?",
            options: [
              "The government, in 1953",
              "Peace Market workers with Jeon Tae-il's mother Lee So-sun presiding, within about two weeks of his November 1970 death",
              "The FKTU, in 1961",
              "Foreign missionaries, in 1980",
            ],
            correctIndex: 1,
            explanation:
              "Jeon's dying request to his mother was to carry on the work. She did, for forty years, becoming 'the mother of workers' (d. 2011, age 82).",
            sourceLessonSlug: "korea-women-of-the-seventies",
          },
          {
            prompt: "Which workers kept independent unionism alive through the 1970s, per the course?",
            options: [
              "Heavy-industry men in Ulsan",
              "The young women of the textile, garment, electronics and wig factories",
              "Civil servants",
              "Bank clerks",
            ],
            correctIndex: 1,
            explanation:
              "The founding generation of Korea's democratic labor movement was female — the measuring stick the course applies when the movement's later, male-dominated era appears.",
            sourceLessonSlug: "korea-women-of-the-seventies",
          },
          {
            prompt: "What happened at Dongil Textile on 22 February 1978?",
            options: [
              "The union won a landmark wage agreement",
              "Company-side men attacked women unionists arriving to vote, smearing them with human excrement; over a hundred resisters were later fired and blacklisted",
              "The factory closed for renovation",
              "The women's union merged with the FKTU by choice",
            ],
            correctIndex: 1,
            explanation:
              "One of the ugliest documented episodes of the era — deliberate humiliation as union-busting, with the state's security apparatus behind the company.",
            sourceLessonSlug: "korea-women-of-the-seventies",
          },
          {
            prompt: "Who was Kim Kyung-suk?",
            options: [
              "Park Chung-hee's intelligence chief",
              "A 21-year-old YH Trading union officer who fell to her death during the 11 August 1979 police raid on the opposition party headquarters sit-in",
              "Korea's first female labor minister",
              "The founder of the FKTU",
            ],
            correctIndex: 1,
            explanation:
              "Her death during the raid on the YH women's sit-in set off the chain — Kim Young-sam's expulsion, the Busan–Masan uprising — that ended in Park's assassination on 26 October 1979.",
            sourceLessonSlug: "korea-women-of-the-seventies",
          },
          {
            prompt: "How does the course handle the claim that the YH strike 'toppled the dictator'?",
            options: [
              "It asserts the strike single-handedly caused the assassination",
              "It teaches the documented sequence — sit-in, raid, death, expulsion, uprising, assassination — while noting historians debate the exact causal weights",
              "It denies any connection between the events",
              "It says the CIA organized the strike",
            ],
            correctIndex: 1,
            explanation:
              "The sequence is documented; the weights are debated. Teaching both is the course's standard for live or contested history.",
            sourceLessonSlug: "korea-women-of-the-seventies",
          },
          {
            prompt: "Why does the course insist on placing the women's history of the 1970s at the center rather than the edge?",
            options: [
              "Because no men worked in Korean factories",
              "Because the movement's founding generation was female — and that inheritance becomes the measuring stick for judging the movement's later treatment of today's disproportionately female non-regular workforce",
              "Because the government mandated gender quotas in unions",
              "Because women's wages were higher than men's",
            ],
            correctIndex: 1,
            explanation:
              "Section 4's honesty test — how the movement treated irregular workers — lands only if you know who built the movement in the first place.",
            sourceLessonSlug: "korea-women-of-the-seventies",
          },
        ],
      },
    },

    // ────────────── SECTION 3 · 1987 ──────────────
    {
      slug: "korea-great-workers-struggle",
      title: "6 · The Great Workers' Struggle: three thousand strikes in one summer",
      section: "Section 3 · 1987 — democracy and the unions arrive together",
      body: `Park Chung-hee's assassination in October 1979 did not end the dictatorship — it changed the dictator. Within months, another general, **Chun Doo-hwan**, seized power; in May 1980 his regime drowned the **Gwangju uprising** in blood; and the labor regime of the 1970s continued into the 1980s essentially intact. The breakthrough came seven years later, and it came twice in one year — first in the streets, then on the shop floor.

**June 1987: the political dam breaks.** Millions of Koreans — students, office workers, the middle class — filled the streets of the **June Democratic Uprising**, demanding direct presidential elections. On **29 June 1987**, the regime's designated successor capitulated in the **June 29 Declaration**: direct elections, restored civil liberties. This is the moment Korean democratization textbooks celebrate. But for this course, the June uprising is the *fuse*. What it detonated came next, and is far less often taught outside Korea.

**July–September 1987: the Great Workers' Struggle** (*nodongja daetujaeng*). With the police state suddenly hesitant and the old rules visibly suspended, Korean workers did in three months what they had been prevented from doing for three decades. Beginning in the vast **Hyundai** complexes of **Ulsan** — the southeastern heavy-industry city the dictatorship had built as its showcase — and rolling through Masan, Changwon, Busan and the whole industrial map, workers struck, occupied, marched, and above all **founded unions**. The commonly cited tallies: **more than 3,300 labor disputes in about three months, involving roughly 1.2 million workers** — in a country whose *entire* union membership had been about a million. Nothing on this scale had ever happened in Korean history; little on this scale has happened anywhere. For comparison inside this track: Poland's August 1980 produced one negotiated agreement and one union; Korea's 1987 produced thousands of strikes and thousands of unions, plant by plant, in a single season.

**What they won, immediately.** Wage settlements commonly in the range of **25–30%**; the end of the military-style discipline of the developmental factory (compulsory morning drills, hair and uniform inspections, managers empowered to slap); and, above all, **the union itself** — by the end of 1988, over **3,400 new unions** had been founded, and total union membership roughly doubled toward its historic peak (just under one wage worker in five) by 1989.

**Who struck, and why it matters.** 1987's strikers were centrally the **men of heavy industry** — shipyards, auto plants, steel — a different workforce from the female light-industry unions of the 1970s (Lesson 5). This is where the Korean labor movement acquired the shape it has today: massive, militant, concentrated **enterprise unions inside the chaebol** — and it is also where the seed of Section 4's problem was planted, because a movement built on the strongest workers of the biggest firms will one day have to answer for everyone else.

**The Poland cross-link, precisely.** In the Poland course, a union forced open a one-party state: the union came first, democratization followed. Korea ran the arrow the other way: **the democratic opening came first — by weeks — and workers poured through it.** Two sequences, one lesson, and it is one of the most important findings in this whole track: whichever direction the causality runs, *mass worker organization and democratization arrive together*. Authoritarian states understand this, which is exactly why both regimes had treated independent unions as regime threats.

:::reveal Poland 1980 and Korea 1987 both pair mass unionization with democratization — but the causal arrow points in opposite directions. Explain, and state the shared lesson. ||| In Poland the union came first: Solidarność (1980) forced concessions from a one-party state, and democratization followed in 1989. In Korea the democratic opening came first: the June 1987 uprising won direct elections on 29 June, and within weeks workers poured through the opened door — 3,300+ strikes and thousands of new unions by September. The shared lesson: mass worker organization and democratization arrive together, whichever leads — which is why authoritarian states in both countries treated independent unions as threats to the regime itself.

## Sources
- The Korea Times. (2017, August 2). *Great labor uprising of summer 1987*. https://www.koreatimes.co.kr/opinion/20170802/great-labor-uprising-of-summer-1987
- libcom.org. (n.d.). *1987: The Great Workers' Struggle in South Korea*. https://libcom.org/article/1987-great-workers-struggle-south-korea
- Chang, D. (2021). Korean labour movement: The birth, rise and transformation of the democratic trade union movement. In *Routledge Handbook of Contemporary South Korea*. https://labourschool.org/wp-content/uploads/2024/09/Chang-2021-Korean-Labour-Movement-Routledge-Handbook-of-Contemporary-South-Korea.pdf`,
      recallContent: [
        {
          prompt: "What was the Great Workers' Struggle, in numbers?",
          answer:
            "July–September 1987: more than 3,300 labor disputes involving roughly 1.2 million workers in about three months — in a country whose entire union membership had been about a million. By the end of 1988 over 3,400 new unions existed, wage settlements commonly ran 25–30%, and membership roughly doubled toward its 1989 peak of just under one wage worker in five.",
        },
        {
          prompt: "Where did the 1987 strike wave begin, and which workforce led it?",
          answer:
            "In the Hyundai complexes of Ulsan, the dictatorship's showcase heavy-industry city, spreading through Masan, Changwon and Busan. The strikers were centrally the men of heavy industry — shipyards, autos, steel — a different workforce from the women of the 1970s light-industry unions, and the origin of today's chaebol enterprise-union movement.",
        },
      ],
    },
    {
      slug: "korea-two-federations",
      title: "7 · Two federations, the chaebol, and the enterprise union",
      section: "Section 3 · 1987 — democracy and the unions arrive together",
      body: `The unions born in 1987 needed a national home, and the story of where they found one explains almost everything about how Korean labor politics works today — including why Korean union news so often features two federations denouncing each other.

**First, the employer side of the equation: the chaebol.** A *chaebol* is a family-controlled conglomerate — Samsung, Hyundai, LG, SK and their kin — typically sprawling across dozens of legally separate subsidiaries under one founding family's control. The developmental state built them deliberately, channeling credit and export licenses to national champions. They are why Korean bargaining is so concentrated: a single chaebol assembly complex can employ tens of thousands, so **one enterprise union at one subsidiary can be an army — while the economy-wide structure stays fragmented**, because each union stops at its own company's gate. If you took the anchor course, this should ring a bell: it is the **Japanese enterprise union** pattern — the anchor's Japan lesson is the nearest relative — but bolted onto bigger, more confrontational firms, without Japan's tradition of labor–management accommodation. One chaebol deserves its own sentence: **Samsung**, the largest of them all, maintained an explicit no-union management policy for most of its existence; its chairman publicly apologized for union-busting and renounced "union-less Samsung" only in **May 2020** (UPI). Let that date sit next to 1987 for a moment.

**The old house: FKTU.** The Federation of Korean Trade Unions — the single legal federation of the dictatorship years (Lesson 3) — survived democratization and remade itself as a more genuine, if habitually moderate and negotiation-oriented, labor center. It never fully escaped its history in the eyes of the militants, who through the 1970s–80s had a name for state-tamed company unionism: *eoyong* — roughly, "kept" unions.

**The new house: KCTU.** The democratic unions of 1987 refused to join the federation they associated with the state, and after years of semi-clandestine coordination founded the **Korean Confederation of Trade Unions (KCTU)** in **November 1995**. Here is the fact worth pausing on: the KCTU was **illegal at birth** — Korean law then permitted only one national center, and the FKTU held the slot. The confederation that today co-governs Korea's tripartite bodies operated **outside the law until November 1999**, when it finally won legal recognition. A democracy, eight years old, took another eight years to legalize its second union federation. (File that beside the 2021 ILO ratification from Lesson 1 — the same slow-motion pattern.)

**The two-federation reality today.** The two centers are nearly the same size — each organizes roughly 1.1 million workers (the KCTU counted 1,086,618 members at end-2023, per Ministry of Employment and Labor organization-status figures) — but they are culturally distinct: the FKTU more moderate and deal-making, the KCTU more militant, more political, more likely to call the general strike and fill the plaza. Most of the strikes, arrests and damages suits you will meet in Section 5 involve KCTU affiliates. When you read Korean labor news, the federation named in the second paragraph usually tells you what kind of story it is.

**One more date, because the statute matters later.** In December 1996, the government rammed a package of labor-law revisions through a dawn parliamentary session with no opposition present — including easier layoffs. The answer was the biggest strike wave since 1987, led by the then-still-illegal KCTU, and in **March 1997** the laws were re-passed in negotiated form as the **Trade Union and Labor Relations Adjustment Act (TULRAA)** — the statute that still governs Korean unions, strikes, and (crucially for Section 5) what counts as a *lawful* dispute and a *worker*. Learn the acronym; the rest of this course keeps returning to it.

:::reveal The KCTU — today one of Korea's two great union federations — was illegal from its founding in November 1995 until November 1999. Why, and what does the course want you to file this fact next to? ||| Korean law then allowed only one national labor center, and the FKTU — the federation inherited from the dictatorship — held the slot, so the democratic unions' new confederation operated outside the law for four years inside a democracy. The course files it beside Korea's 2021 ratification of ILO Convention 87: the same slow-motion pattern of a democratic Korea taking years or decades to legalize basic freedom-of-association machinery that its own constitution and the world's paper floor already promised.

## Sources
- Korean Confederation of Trade Unions. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/Korean_Confederation_of_Trade_Unions
- Federation of Korean Trade Unions. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/Federation_of_Korean_Trade_Unions
- Chang, D. (2021). Korean labour movement: The birth, rise and transformation of the democratic trade union movement. In *Routledge Handbook of Contemporary South Korea*. https://labourschool.org/wp-content/uploads/2024/09/Chang-2021-Korean-Labour-Movement-Routledge-Handbook-of-Contemporary-South-Korea.pdf
- UPI. (2020, May 6). *Samsung heir apologizes for no-union policy*. https://www.upi.com/Top_News/World-News/2020/05/06/Samsung-heir-apologies-for-no-union-policy/4521588766924/`,
      recallContent: [
        {
          prompt: "What is a chaebol, and how does it shape Korean union structure?",
          answer:
            "A family-controlled conglomerate (Samsung, Hyundai, LG, SK…) spanning dozens of legally separate subsidiaries, deliberately built by the developmental state. Because one complex can employ tens of thousands, a single enterprise union can be an army while the economy-wide structure stays fragmented — each union stops at its own company's gate. It is the Japanese enterprise-union pattern on bigger, more confrontational firms.",
        },
        {
          prompt: "Distinguish the FKTU and the KCTU.",
          answer:
            "FKTU: the older federation, the dictatorship era's single legal center, today the more moderate and negotiation-oriented house. KCTU: founded November 1995 by the democratic unions of 1987, illegal until November 1999 (the law allowed one center and FKTU held the slot), today the more militant and political federation. Each organizes roughly 1.1 million workers (KCTU: 1,086,618 at end-2023, MOEL figures).",
        },
      ],
    },
    {
      slug: "korea-quiz-3",
      title: "Section 3 quiz · 1987 and the two federations",
      section: "Section 3 · 1987 — democracy and the unions arrive together",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did the June 29 Declaration of 1987 concede?",
            options: [
              "Korea's exit from the UN",
              "Direct presidential elections and restored civil liberties, capitulating to the June Democratic Uprising",
              "The dissolution of the chaebol",
              "An immediate 30% national wage rise",
            ],
            correctIndex: 1,
            explanation:
              "Millions in the streets forced the regime's designated successor to concede direct elections. For this course, June is the fuse; the labor explosion came in July–September.",
            sourceLessonSlug: "korea-great-workers-struggle",
          },
          {
            prompt: "What are the commonly cited tallies of the Great Workers' Struggle?",
            options: [
              "About 100 strikes involving 10,000 workers",
              "More than 3,300 labor disputes involving roughly 1.2 million workers in about three months (July–September 1987)",
              "One general strike lasting one day",
              "Ten thousand strikes over ten years",
            ],
            correctIndex: 1,
            explanation:
              "In a country whose entire union membership had been about a million, 1.2 million workers joined disputes in a single season — with over 3,400 new unions by the end of 1988.",
            sourceLessonSlug: "korea-great-workers-struggle",
          },
          {
            prompt: "Where did the 1987 strike wave ignite?",
            options: [
              "The Peace Market in Seoul",
              "The Hyundai complexes of Ulsan, the dictatorship's showcase heavy-industry city",
              "Jeju Island's tourist hotels",
              "The Busan fish markets",
            ],
            correctIndex: 1,
            explanation:
              "From Ulsan it rolled through Masan, Changwon, Busan and the whole industrial map — heavy industry leading, unlike the female-led light industry of the 1970s.",
            sourceLessonSlug: "korea-great-workers-struggle",
          },
          {
            prompt: "Besides wage rises of commonly 25–30%, what did 1987's strikers win that the course weights most heavily?",
            options: [
              "Stock options",
              "The union itself — thousands of new plant-level unions — plus the end of military-style factory discipline",
              "A four-day work week",
              "Free housing",
            ],
            correctIndex: 1,
            explanation:
              "Over 3,400 new unions by end-1988 and membership roughly doubling toward the 1989 peak. The organizational gain outlasted any single wage settlement.",
            sourceLessonSlug: "korea-great-workers-struggle",
          },
          {
            prompt: "How do the causal arrows of Poland 1980 and Korea 1987 differ?",
            options: [
              "They are identical",
              "Poland: union first, democratization followed (1989). Korea: democratic opening first (June 1987), then workers poured through it within weeks",
              "Poland: democracy first; Korea: union first",
              "Neither involved unions",
            ],
            correctIndex: 1,
            explanation:
              "Opposite arrows, one lesson: mass worker organization and democratization arrive together — which is why authoritarian states treat independent unions as regime threats.",
            sourceLessonSlug: "korea-great-workers-struggle",
          },
          {
            prompt: "What happened between Park's assassination (1979) and the 1987 breakthrough?",
            options: [
              "Immediate democratization",
              "Another general — Chun Doo-hwan — seized power, crushed the May 1980 Gwangju uprising, and continued the labor regime of the 1970s",
              "A decade of union-led government",
              "Korea left the export economy behind",
            ],
            correctIndex: 1,
            explanation:
              "The dictatorship changed dictators, not character. The dam held until June 1987.",
            sourceLessonSlug: "korea-great-workers-struggle",
          },
          {
            prompt: "What is a chaebol?",
            options: [
              "A government ministry",
              "A family-controlled conglomerate spanning dozens of legally separate subsidiaries — Samsung, Hyundai, LG, SK — deliberately built by the developmental state",
              "A type of labor union",
              "A Buddhist monastery",
            ],
            correctIndex: 1,
            explanation:
              "The chaebol's scale is why one enterprise union can be an army while the economy-wide structure stays fragmented at the company gate.",
            sourceLessonSlug: "korea-two-federations",
          },
          {
            prompt: "Which anchor-course pattern is the Korean chaebol enterprise union closest to?",
            options: [
              "The Nordic sectoral union",
              "The Japanese enterprise union — but on bigger, more confrontational firms without Japan's accommodation tradition",
              "The German works council",
              "The Polish inter-factory committee",
            ],
            correctIndex: 1,
            explanation:
              "The anchor's Japan lesson is the nearest relative: unions organized within, and stopping at, the single company.",
            sourceLessonSlug: "korea-two-federations",
          },
          {
            prompt: "When did Samsung's chairman publicly renounce the group's no-union policy?",
            options: ["1987", "1999", "May 2020", "1961"],
            correctIndex: 2,
            explanation:
              "Samsung, the largest chaebol, maintained explicit union-free management for most of its existence; the public apology and pledge came only in May 2020 (UPI) — a date the course asks you to sit beside 1987.",
            sourceLessonSlug: "korea-two-federations",
          },
          {
            prompt: "Why was the KCTU illegal from its founding in 1995 until 1999?",
            options: [
              "Its leaders were foreign nationals",
              "Korean law then permitted only one national labor center, and the FKTU held the slot",
              "It refused to register paperwork",
              "It advocated the violent overthrow of the state",
            ],
            correctIndex: 1,
            explanation:
              "A democracy took until November 1999 to legalize its second union federation — the same slow-motion pattern as the 2021 ILO ratification.",
            sourceLessonSlug: "korea-two-federations",
          },
          {
            prompt: "How do the FKTU and KCTU compare in size and character today?",
            options: [
              "The FKTU is ten times larger and more militant",
              "They are nearly equal — each roughly 1.1 million members (KCTU: 1,086,618 at end-2023, MOEL) — with the FKTU more moderate and the KCTU more militant and political",
              "The KCTU absorbed the FKTU in 2005",
              "Both dissolved in the 1997 crisis",
            ],
            correctIndex: 1,
            explanation:
              "Two houses of similar size, different cultures. Most of Section 5's strikes and damages suits involve KCTU affiliates.",
            sourceLessonSlug: "korea-two-federations",
          },
          {
            prompt: "What was 'eoyong' unionism?",
            options: [
              "A militant strike tactic",
              "The militants' term for state-tamed, 'kept' company unionism — the charge long aimed at the dictatorship-era FKTU",
              "A form of profit-sharing",
              "A Japanese management import",
            ],
            correctIndex: 1,
            explanation:
              "The vocabulary of the 1970s–80s democratic union movement: unions that formally existed but served management and state.",
            sourceLessonSlug: "korea-two-federations",
          },
          {
            prompt: "What provoked the winter 1996–97 general strike, and what came of it?",
            options: [
              "A pay dispute at one bakery; nothing changed",
              "The government rammed labor-law revisions (including easier layoffs) through a dawn session with no opposition present; the biggest strike wave since 1987 forced renegotiation, and the laws were re-passed in March 1997 as TULRAA",
              "An oil shock; the government fell",
              "A soccer defeat; a national holiday was created",
            ],
            correctIndex: 1,
            explanation:
              "The Trade Union and Labor Relations Adjustment Act of March 1997 still governs Korean unions, lawful disputes, and the definition of 'worker' — the statute at the center of Section 5.",
            sourceLessonSlug: "korea-two-federations",
          },
          {
            prompt: "Who led the 1996–97 general strike?",
            options: [
              "The then-still-illegal KCTU",
              "The employers' federation",
              "The national police",
              "The Ministry of Labor",
            ],
            correctIndex: 0,
            explanation:
              "An illegal federation led the country's biggest strike wave since 1987 and forced a sitting government to renegotiate legislation — two years before it was itself legalized.",
            sourceLessonSlug: "korea-two-federations",
          },
          {
            prompt: "Why does the course say 1987 'planted the seed' of the problem taught in Section 4?",
            options: [
              "Because 1987's unions banned women from membership by statute",
              "Because the movement was rebuilt around the strongest workers of the biggest firms — chaebol enterprise unions — and would one day have to answer for everyone outside those gates",
              "Because the strikes bankrupted the country",
              "Because the unions abolished the minimum wage",
            ],
            correctIndex: 1,
            explanation:
              "A movement anchored in regular employees of giant firms structurally struggles to cover the fragmented, outsourced, non-regular workforce that came after 1997 — Section 4's subject.",
            sourceLessonSlug: "korea-great-workers-struggle",
          },
        ],
      },
    },

    // ────────────── SECTION 4 · THE DUAL LABOR MARKET ──────────────
    {
      slug: "korea-imf-crisis",
      title: "8 · December 1997: the crisis that redrew the workforce",
      section: "Section 4 · Regular and non-regular — the divide that defines Korea",
      body: `Every country in this track has a hinge year — the moment its labor system took the shape you now see. Germany's is 1976, Poland's 1989, Mexico's 2019. Korea's is **1997**, and Koreans still call what followed simply "the IMF era" — a period so traumatic it functions in the national memory the way "the Depression" does in America's.

**The crash.** In late 1997 the Asian financial crisis reached Korea. The chaebol had gorged on short-term foreign debt; when confidence broke, the currency collapsed and the state faced default. On **3 December 1997**, Korea signed its letter of intent to the **International Monetary Fund**, unlocking an IMF-led international rescue of **roughly $58 billion — at the time the largest ever assembled** (the IMF's own stand-by credit was about $21 billion, approved 4 December 1997; the World Bank, the Asian Development Bank and bilateral lenders made up the rest). The money came with conditions, and one of them mattered more for this course than all the others combined: **labor market flexibility.** In plain language, the IMF and Korea's creditors wanted it to become legally easier for Korean firms to shed workers.

**The bargain.** In February 1998, the incoming government of Kim Dae-jung — a former dissident, elected in the crisis's depths — convened a **Tripartite Commission**: government, employers, and both federations, the KCTU included, at a national table for the first time. The pact they signed traded, in essence, security for voice:

- **Employers and the state got:** legalized **layoffs for "urgent managerial necessity"** (the dismissal-for-business-reasons power the 1996–97 general strike had delayed), and a new **Dispatch Workers Act** legalizing temporary-agency employment — hiring a worker *through* a middleman firm rather than *as* your employee.
- **Labor got:** legal recognition of the teachers' union, rights of political participation for unions, and a seat at the tripartite table — recognition, in exchange for flexibility.

Note the honest footnote: when the KCTU's leadership signed, its **rank and file revolted**, voted the pact down, and forced the leadership's resignation — the confederation's members understood immediately what they had traded. But the deal stood, the laws passed, and the door was open.

**What walked through the door.** Mass layoffs arrived within months — you will meet the most famous one, Ssangyong Motor, in Section 5. But the deeper change was slower and structural: Korean firms rebuilt their workforces around the new legal tools. Why employ a worker directly, with severance obligations and a chaebol union contract, when you can hire her on a **fixed-term contract**, through a **dispatch agency**, or via an **in-house subcontractor** — a nominally separate company whose employees work on your assembly line, in your uniform colors, at lower pay, outside your union? Layer by layer, hire by hire, Korea grew a **second workforce** alongside the protected one.

That second workforce is the next lesson's subject, and it is not a fringe: it is **38.2% of all wage workers** (August 2025, Statistics Korea). Before you turn the page, register what this means for the story so far. The unions of 1987 fought the state and won. The restructuring of 1998 did not frontally attack them at all — it **grew a new workforce around them**, outside the walls they had built. It is the most effective answer to worker power in this course, and no one was ever beaten or jailed to accomplish it.

:::reveal The course calls the post-1997 restructuring "the most effective answer to worker power in this course," more effective than the dictatorship's police. What was the mechanism? ||| The February 1998 tripartite bargain — struck under a ~$58 billion IMF rescue with 'labor market flexibility' conditions — legalized layoffs for urgent managerial necessity and dispatch (temp-agency) work. Firms then rebuilt employment around the new tools: fixed-term contracts, dispatch agencies, in-house subcontractors. Rather than attacking the 1987 unions frontally, employers grew a second, cheaper, largely un-unionized workforce around them — 38.2% of wage workers by August 2025 — no beatings or jailings required. The walls the unions had built still stood; the economy was simply rebuilt outside them.

## Sources
- International Monetary Fund. (1997, December 4). *IMF approves SDR 15.5 billion stand-by credit for Korea* [Press release No. 97/55]. https://www.imf.org/external/np/sec/pr/1997/pr9755.htm
- International Monetary Fund. (1997, December 3). *Korea — letter of intent*. https://www.imf.org/external/np/loi/120397.HTM
- Chang, D. (2021). Korean labour movement: The birth, rise and transformation of the democratic trade union movement. In *Routledge Handbook of Contemporary South Korea*. https://labourschool.org/wp-content/uploads/2024/09/Chang-2021-Korean-Labour-Movement-Routledge-Handbook-of-Contemporary-South-Korea.pdf
- Statistics Korea. (2025, October). *Supplementary results of the Economically Active Population Survey by employment type in August 2025* [Press release]. https://mods.go.kr/board.es?act=view&bid=11735&list_no=439078&mid=a20105010000`,
      recallContent: [
        {
          prompt: "What did each side get in the February 1998 tripartite bargain?",
          answer:
            "Employers and the state got legalized layoffs for 'urgent managerial necessity' and the Dispatch Workers Act legalizing temp-agency employment. Labor got recognition: teachers'-union legalization, union political-participation rights, and a seat at the tripartite table. The KCTU rank and file revolted and voted it down, forcing their leadership's resignation — but the deal stood.",
        },
        {
          prompt: "Why is 1997 Korea's hinge year for this course?",
          answer:
            "The IMF-led ~$58 billion international rescue (letter of intent signed 3 December 1997, then the largest ever assembled) came with labor-flexibility conditions. The resulting 1998 legal tools — business-reason layoffs, dispatch work, and the outsourcing wave that followed — grew today's non-regular workforce (38.2% of wage workers, August 2025) around the unions of 1987 rather than through them.",
        },
      ],
    },
    {
      slug: "korea-non-regular-divide",
      title: "9 · Regular and non-regular: the divide, in numbers",
      section: "Section 4 · Regular and non-regular — the divide that defines Korea",
      body: `Here is the single most important fact about work in South Korea today, and it comes with a year and a source, as every number in this track must:

> **As of August 2025, 8,568,000 South Korean wage workers — 38.2% of all wage workers — were "non-regular"** (Statistics Korea, Economically Active Population Survey, supplementary results by employment type; the share was unchanged from August 2024).

Nearly four in ten. Now unpack what the label means, because "non-regular" (*bijeonggyujik*) is not one arrangement but a family of them, and each member of the family is a different way of doing the same thing — **moving the person who does the work away from the protected core**:

- **Fixed-term workers** — employed on contracts with an end date, renewed (or not) at the employer's option. Korea's 2007 fixed-term law limits such contracts to two years, after which the worker must be treated as permanent — which in practice also created a rhythm of **terminations at month 23**.
- **Part-time workers** — shorter hours, and usually thinner benefits, than the statutory norm.
- **Dispatched workers** — employed by a staffing agency, working under another firm's direction: two companies, and neither fully your employer.
- **In-house subcontract workers** — the Korean specialty. A nominally independent contractor company supplies crews who work *inside* the principal firm's plant — same shipyard, same assembly line, often literally alongside regular employees — at lower pay, under separate (or no) union representation. The giant shipyards and auto plants run on this arrangement, and much of it sits at the edge of, or over, the legal line: Korean courts have repeatedly found major manufacturers' in-house subcontracting to be disguised illegal dispatch.
- **"Specially employed" workers** — the sharpest edge: people treated in law as **self-employed businesses** rather than workers at all. Truck drivers who own their vehicles, delivery riders, golf caddies, insurance agents, many freelancers. They have no employer to bargain with by definition — remember the India course's question, *what happens when there is no employer?* — and when they act collectively, the law may not recognize it as a strike. Section 5's truckers live here.

**What the divide costs.** Non-regular status is not a technicality. Statistics Korea's own supplementary survey documents, release after release, large gaps in monthly wages, social-insurance enrollment, severance coverage and bonus eligibility between the two groups (check the current release for the year's exact figures — they move, the gap persists). And the divide is not distributed randomly: non-regular work falls disproportionately on **women** — recall who built this movement in the 1970s — on the **young**, and on the **old**.

**The track's through-line, one more time.** The anchor taught you the Wagner Act's farm-and-domestic carve-out. Poland taught you the civil-law "junk contract." Mexico taught you the contract signed over workers' heads. Korea's version is the most statistically developed in the whole track: a wealthy democracy where nearly four in ten wage earners hold a status designed, in one way or another, to cost less and owe less — and where the census bureau publishes the divide's exact size every August. **When a labor system looks strong but four workers in ten stand outside its walls, the walls are the story.**

:::reveal Name the five main categories of Korean "non-regular" work, and the one design feature they share. ||| Fixed-term workers (contracts with end dates — with terminations clustering before the two-year conversion rule); part-time workers; dispatched workers (employed by a staffing agency, directed by another firm); in-house subcontract workers (contractor crews inside the principal's own plant, sometimes ruled disguised illegal dispatch); and "specially employed" workers legally classed as self-employed businesses with no employer at all. The shared feature: each arrangement moves the person doing the work away from the protected core — same work, thinner obligations — the track's oldest move at a scale of 8.57 million people, 38.2% of wage workers (August 2025, Statistics Korea).

## Sources
- Statistics Korea. (2025, October). *Supplementary results of the Economically Active Population Survey by employment type in August 2025* [Press release]. https://mods.go.kr/board.es?act=view&bid=11735&list_no=439078&mid=a20105010000
- HR Asia. (2025). *Non-regular workers comprise 38.2% of South Korea's wage earners*. https://hr.asia/asia-2/non-regular-workers-comprise-38-2-of-south-koreas-wage-earners/
- International Labour Organization. (n.d.). *Republic of Korea — country profile*. ILOSTAT. https://ilostat.ilo.org/data/country-profiles/kor/`,
      recallContent: [
        {
          prompt: "What is the size of Korea's non-regular workforce, with year and source?",
          answer:
            "8,568,000 workers — 38.2% of all wage workers — as of August 2025, per Statistics Korea's Economically Active Population Survey supplementary results by employment type (unchanged in share from August 2024). Nearly four in ten wage earners.",
        },
        {
          prompt: "What is in-house subcontracting, and why does the course call it 'the Korean specialty'?",
          answer:
            "A nominally independent contractor company supplies crews who work inside the principal firm's own plant — same shipyard or assembly line as regular employees — at lower pay and outside the enterprise union. Korea's giant shipyards and auto plants run on it, and courts have repeatedly found major manufacturers' versions to be disguised illegal dispatch.",
        },
      ],
    },
    {
      slug: "korea-movements-blind-spot",
      title: "10 · The movement's own blind spot",
      section: "Section 4 · Regular and non-regular — the divide that defines Korea",
      body: `This is the lesson a promotional history of Korean labor would omit, and this track's standing rule is that the omitted lesson is usually the load-bearing one. The question: **where were the unions while the non-regular workforce grew to four in ten?** The honest answer has three parts, and the first is uncomfortable.

**Part one: the structure made the movement complicit.** Recall what 1987 built: **enterprise unions of regular employees at large firms**. An enterprise union bargains for its members — the regular workers of one company. The in-house subcontract crews on the same line are, legally, employees of *someone else*; the fixed-term workers are, definitionally, temporary; none of them are in the bargaining unit. So when restructuring came, the structurally rational move for an enterprise union was to **defend its members' security first — even when the price was agreeing, or acquiescing, as the company filled the next vacancy with a subcontractor.** In more than a few documented bargaining rounds, protecting the regular core and conceding the outsourced periphery was the deal on the table, and it was taken. No conspiracy is needed; the incentive is built into the union form itself. (This is the dark twin of the anchor's Japan lesson — the enterprise union protects the inside, and the inside only.)

**Part two: the excluded organized anyway — and their fights are the era's defining ones.** Just as the 1970s belonged to the factory women, the 2000s' most emblematic labor struggles belonged to irregular workers, disproportionately women, usually fighting *without* — sometimes against the indifference of — the big federations' core unions:

- The **KTX train attendants**: around 280 women hired for Korea's new high-speed rail through a subsidiary, dismissed in 2006 when they demanded the direct employment they said they had been promised. Their fight — court cases won and then reversed, years on picket lines and rooftops — ran **twelve years**, until a 2018 agreement finally returned them to direct employment.
- The **Kiryung Electronics women** — dispatched and contract workers at a Seoul electronics maker whose struggle for direct employment lasted the better part of six years in the late 2000s and became a national symbol before ending in a direct-employment agreement (2010).

Register the pattern: the growth sector of Korean labor organizing in this century has been **irregular and 'specially employed' workers building their own unions** — often as direct-membership or industrial unions precisely because the enterprise-union form had no room for them.

**Part three: the federations have been changing — datedly, partially, and under pressure from below.** The KCTU in particular has, since the mid-2000s, made irregular workers' organizing a stated priority, chartered industrial and regional unions open to them, and supplied the era's most visible solidarity campaigns (you will meet the "Hope Buses" in Section 5). By the 2020s several of the KCTU's fastest-growing affiliates were unions of platform, delivery, subcontract and specially-employed workers. That is real. It is also incomplete — union density among non-regular workers remains a small fraction of that among regular workers (Statistics Korea's supplementary survey and ILOSTAT both document the gap in their current releases) — and the change was driven substantially by the excluded organizing themselves and forcing the door.

**Why this lesson matters beyond Korea.** Every labor movement in this track eventually faces its version of this test — the anchor taught you American unions' own exclusion history (Black workers, women, the 1935 carve-outs). Korea's version is distinctive because it happened *fast* and *recently*, inside living memory, to a movement whose founding martyrs were teenage factory girls. The measuring stick from Lesson 5 comes due here: **a movement founded by the excluded rebuilt itself around the included** — and the excluded, once again, had to organize themselves.

:::reveal Why does the course say "no conspiracy is needed" to explain how Korea's unions ended up defending the regular core while the non-regular periphery grew? ||| Because the incentive lives in the union form itself: an enterprise union legally bargains only for its members — the regular employees of one firm. Subcontract crews belong to another employer, fixed-term workers are temporary by definition, and none are in the bargaining unit. So under restructuring pressure, the structurally rational move was to defend members' security even at the price of acquiescing in outsourcing the next vacancy. The exclusion was a property of the structure 1987 built — the enterprise union protects the inside, and the inside only — which is why the excluded had to build their own unions to force the door.

## Sources
- Korea Policy Institute. (2021). *Women workers and the fight to eradicate precarious labor in South Korea*. https://www.kpolicy.org/post/women-workers-and-the-fight-to-eradicate-precarious-labor-in-south-korea
- Chang, D. (2021). Korean labour movement: The birth, rise and transformation of the democratic trade union movement. In *Routledge Handbook of Contemporary South Korea*. https://labourschool.org/wp-content/uploads/2024/09/Chang-2021-Korean-Labour-Movement-Routledge-Handbook-of-Contemporary-South-Korea.pdf
- Statistics Korea. (2025, October). *Supplementary results of the Economically Active Population Survey by employment type in August 2025* [Press release]. https://mods.go.kr/board.es?act=view&bid=11735&list_no=439078&mid=a20105010000`,
      recallContent: [
        {
          prompt: "Who were the KTX attendants, and how long did their fight run?",
          answer:
            "About 280 women hired through a subsidiary for Korea's new high-speed rail, dismissed in 2006 after demanding the direct employment they said was promised. Through reversed court victories, picket lines and rooftop protests, the fight ran twelve years, ending with a 2018 agreement returning them to direct employment — an emblematic irregular-workers' struggle fought largely outside the big federations' core unions.",
        },
        {
          prompt: "What is the three-part honest answer to 'where were the unions while non-regular work grew?'",
          answer:
            "(1) The enterprise-union structure made defending the regular core rational, even at the price of acquiescing in outsourcing — no conspiracy needed; (2) the excluded organized anyway (KTX attendants, Kiryung Electronics), creating the era's defining struggles; (3) the federations — especially the KCTU — have since made irregular organizing a priority, but the change is partial, recent, and was forced substantially from below.",
        },
      ],
    },
    {
      slug: "korea-quiz-4",
      title: "Section 4 quiz · The divide",
      section: "Section 4 · Regular and non-regular — the divide that defines Korea",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What happened on 3 December 1997?",
            options: [
              "Korea hosted the Olympics",
              "Korea signed its letter of intent for an IMF-led rescue package of roughly $58 billion — then the largest ever assembled — with labor-flexibility conditions attached",
              "The KCTU was founded",
              "Korea left the OECD",
            ],
            correctIndex: 1,
            explanation:
              "The Asian financial crisis reached a chaebol economy gorged on short-term foreign debt. Koreans still call the period 'the IMF era.'",
            sourceLessonSlug: "korea-imf-crisis",
          },
          {
            prompt: "What two legal tools did the February 1998 tripartite bargain hand employers?",
            options: [
              "Layoffs for 'urgent managerial necessity' and legalized dispatch (temp-agency) work",
              "A strike ban and wage controls",
              "Import tariffs and tax cuts",
              "Nothing — employers got no concessions",
            ],
            correctIndex: 0,
            explanation:
              "Security traded for voice: labor got teachers'-union recognition, political rights and a tripartite seat; employers got the tools around which the non-regular economy grew.",
            sourceLessonSlug: "korea-imf-crisis",
          },
          {
            prompt: "How did the KCTU's rank and file respond to their leadership signing the 1998 pact?",
            options: [
              "With a celebration rally",
              "They revolted, voted the pact down, and forced the leadership's resignation — though the deal stood and the laws passed",
              "They ignored it",
              "They defected to the FKTU en masse",
            ],
            correctIndex: 1,
            explanation:
              "The members understood immediately what had been traded. The course keeps this footnote because it shows the bargain was contested inside labor from day one.",
            sourceLessonSlug: "korea-imf-crisis",
          },
          {
            prompt: "Why does the course rate the post-1997 restructuring as more effective against worker power than the dictatorship's police?",
            options: [
              "It wasn't — the police were more effective",
              "Because it never attacked the 1987 unions frontally: it grew a second, cheaper workforce around them, outside their walls, with no one beaten or jailed",
              "Because it abolished unions by statute",
              "Because it deported union leaders",
            ],
            correctIndex: 1,
            explanation:
              "Fixed-term hiring, dispatch and in-house subcontracting rebuilt the workforce around the protected core — the most effective answer to worker power in the course.",
            sourceLessonSlug: "korea-imf-crisis",
          },
          {
            prompt: "What share and number of Korean wage workers were non-regular in August 2025?",
            options: [
              "38.2% — 8.57 million (Statistics Korea)",
              "10% — 2 million",
              "62% — 14 million",
              "25% — 5 million",
            ],
            correctIndex: 0,
            explanation:
              "8,568,000 workers, 38.2% of wage workers — unchanged in share from August 2024. Every number in this track carries a year and a source.",
            sourceLessonSlug: "korea-non-regular-divide",
          },
          {
            prompt: "What rhythm did Korea's 2007 two-year conversion rule for fixed-term contracts create in practice?",
            options: [
              "Automatic permanent conversion for everyone",
              "Terminations clustering around month 23, just before conversion would be owed",
              "Ten-year contracts",
              "The abolition of fixed-term work",
            ],
            correctIndex: 1,
            explanation:
              "A protection with a threshold invites management to the threshold's edge — a pattern to look for in any country's fixed-term rules.",
            sourceLessonSlug: "korea-non-regular-divide",
          },
          {
            prompt: "What is distinctive about 'specially employed' workers like owner-operator truck drivers?",
            options: [
              "They earn the highest wages in Korea",
              "They are treated in law as self-employed businesses — no employer to bargain with by definition, and collective action that may not legally count as a strike",
              "They are all foreign nationals",
              "They are automatically union members",
            ],
            correctIndex: 1,
            explanation:
              "The sharpest edge of the divide: exclusion not from a benefit but from the legal category 'worker' itself. Section 5's truckers live here.",
            sourceLessonSlug: "korea-non-regular-divide",
          },
          {
            prompt: "What have Korean courts repeatedly found about major manufacturers' in-house subcontracting?",
            options: [
              "That it is always lawful",
              "That much of it amounts to disguised illegal dispatch — contractor crews working inside the principal's plant under its direction",
              "That it does not exist",
              "That it only occurs in agriculture",
            ],
            correctIndex: 1,
            explanation:
              "Same line, same work, different employer on paper — and courts have repeatedly pierced the paper at Korea's giant shipyards and auto plants.",
            sourceLessonSlug: "korea-non-regular-divide",
          },
          {
            prompt: "On whom does non-regular work fall disproportionately?",
            options: [
              "Mid-career male chaebol engineers",
              "Women, the young, and the old",
              "Government ministers",
              "It is distributed perfectly evenly",
            ],
            correctIndex: 1,
            explanation:
              "The demographics rhyme darkly with Lesson 5: the movement's founding constituency — working women — is over-represented outside today's walls.",
            sourceLessonSlug: "korea-non-regular-divide",
          },
          {
            prompt: "Why does the course say 'no conspiracy is needed' to explain the unions' role in the divide?",
            options: [
              "Because there was a proven conspiracy",
              "Because the enterprise-union form itself makes defending the regular core rational — subcontract and fixed-term workers simply aren't in the bargaining unit",
              "Because unions had no role at all",
              "Because the government ordered unions to exclude the non-regular workforce",
            ],
            correctIndex: 1,
            explanation:
              "The incentive is structural: an enterprise union bargains for its members, and the periphery belongs, legally, to someone else. The dark twin of the anchor's Japan lesson.",
            sourceLessonSlug: "korea-movements-blind-spot",
          },
          {
            prompt: "How did the KTX attendants' twelve-year fight end?",
            options: [
              "In defeat, with no jobs recovered",
              "With a 2018 agreement returning the dismissed women to direct employment",
              "With criminal convictions of the attendants",
              "With the abolition of Korea's railways",
            ],
            correctIndex: 1,
            explanation:
              "Dismissed in 2006 after demanding promised direct employment; through reversed court wins and years of protest, they finally returned in 2018 — an emblem of irregular workers organizing for themselves.",
            sourceLessonSlug: "korea-movements-blind-spot",
          },
          {
            prompt: "What organizational forms have irregular and specially-employed workers used to organize, and why?",
            options: [
              "Enterprise unions, because the form suited them",
              "Direct-membership, industrial and regional unions — because the enterprise-union form had no room for workers whose employer is absent, temporary or nominal",
              "Political parties only",
              "They have never organized",
            ],
            correctIndex: 1,
            explanation:
              "The growth sector of Korean organizing this century: unions built by the excluded, outside the company-gate form — several now among the KCTU's fastest-growing affiliates.",
            sourceLessonSlug: "korea-movements-blind-spot",
          },
          {
            prompt: "How does the course characterize the federations' turn toward irregular workers?",
            options: [
              "Complete and finished decades ago",
              "Real but partial and recent — union density among non-regular workers remains far below that of regular workers, and the change was forced substantially from below",
              "Nonexistent",
              "Imposed by the employers",
            ],
            correctIndex: 1,
            explanation:
              "The honest, dated verdict: stated priority since the mid-2000s, visible growth in platform/subcontract/special-employment affiliates by the 2020s, and a persistent density gap documented in each year's official releases.",
            sourceLessonSlug: "korea-movements-blind-spot",
          },
          {
            prompt: "Which anchor-course chapter does Korea's blind-spot lesson parallel?",
            options: [
              "The anchor's lesson on American unions' own exclusion history — Black workers, women, the 1935 carve-outs",
              "The anchor's Haymarket lesson",
              "The anchor's ILO lesson",
              "The anchor's PATCO lesson",
            ],
            correctIndex: 0,
            explanation:
              "Every movement in the track faces this test. Korea's version is distinctive for happening fast, recently, and to a movement founded by teenage factory girls.",
            sourceLessonSlug: "korea-movements-blind-spot",
          },
          {
            prompt: "What single sentence does the course offer as the summary of Section 4?",
            options: [
              "When a labor system looks strong but four workers in ten stand outside its walls, the walls are the story",
              "Non-regular work is a myth",
              "The IMF saved Korean unions",
              "Enterprise unions cover everyone eventually",
            ],
            correctIndex: 0,
            explanation:
              "The through-line of the whole track — who is outside the protected category? — at its most statistically developed: the census bureau publishes the divide's exact size every August.",
            sourceLessonSlug: "korea-non-regular-divide",
          },
        ],
      },
    },

    // ────────────── SECTION 5 · THE LAWSUIT AS A WEAPON ──────────────
    {
      slug: "korea-ssangyong",
      title: "11 · Ssangyong, 2009: seventy-seven days, then the bill",
      section: "Section 5 · Question 4 today — the lawsuit as a weapon",
      body: `Now the mechanism this course exists to teach — the one the track proposal flagged as something you will not see anywhere else: **destroying a striker financially, through the civil courts, without ever criminalizing the strike.** It is best taught through the case that made it a national issue.

**The strike.** In early 2009, Ssangyong Motor — a mid-sized automaker in Pyeongtaek, south of Seoul, then in bankruptcy protection — announced restructuring that would shed roughly 2,600 workers, over a third of its workforce. In **May 2009**, workers of the Korean Metal Workers' Union occupied the paint shop and held the plant for **77 days**. The end, in August 2009, looked like a small war and was broadcast live: **police commandos rappelling from helicopters onto the factory roof**, tear gas, taser guns, workers with metal pipes on one side and shield walls on the other. The occupation was broken; the layoffs stood.

**Then came the part this lesson is about — the bill.** The strike had been ruled illegal. So the company sued the union **and individual workers** for the production it had lost; the **state sued too** — the national police sought damages for injured officers and destroyed equipment, including a damaged helicopter; and the company's insurer joined with its own claim. Reported claims ran to the tens of billions of won. Courts ordered **provisional seizure** (*gapryu*) against defendants while the litigation ran — the freezing of wages, severance pay, even homes, **before any final judgment**. In 2013–14, courts ordered strikers and their union to pay roughly **4.7 billion won** (then about $4.3 million) to the company. Individual assembly-line workers were now personally, jointly liable for corporate-scale sums that no wage could ever repay — with their pay packets garnished in the meantime.

**What that does to human beings.** In the decade after the strike, Korean media and the workers' own association counted, one by one, the deaths of laid-off and reinstated-pending Ssangyong workers and their family members — suicides prominent among them, alongside stress-linked illness. **By 2018 the widely reported count stood around thirty** (counts vary with the period and definition used; Korean outlets reported the "30th death" that year). Medical surveys of the dismissed workers found post-traumatic stress at rates researchers compared to combat veterans. When Korean unionists say a damages suit is a weapon, this is the decade they mean: a worker who will never see a courtroom verdict can still live under a frozen bank account, a garnished severance, and a debt with eleven digits.

**The long legal coda — dated, because it is still moving.** Korean high courts spent the 2010s and 2020s trimming these awards without abolishing the mechanism. In **June 2023**, Korea's Supreme Court overturned the damages award against the metalworkers' union and sent it back down, ruling the company's payments to returning workers could not be counted as strike losses — cutting the principal by about a third (Korea Times). In late 2022 the Court had similarly pared back the state's helicopter claims. Note the shape of these rulings: **relief arrived, at the highest court, more than thirteen years after the strike** — after the seizures, the garnishments, and the funerals. The mechanism's power was never mainly the final judgment. It was the years in between.

**File this precisely.** Under the anchor's Question 4, the dictatorship's answer was the policeman (Sections 2–3). The democracy's answer became the plaintiff. It is a colder instrument, and — as the yellow-envelope fight two lessons from now shows — it proved far harder to abolish, because it wears the clothes of ordinary civil law: who could object to a company recovering its losses?

:::reveal The course says the power of Korea's anti-strike damages suits "was never mainly the final judgment. It was the years in between." What does that mean, concretely, in the Ssangyong case? ||| Courts ordered provisional seizure (gapryu) — freezing wages, severance and homes — while litigation ran, before any final judgment. Individual workers ordered in 2013–14 to pay ~4.7 billion won lived for years under garnished pay and eleven-digit joint debt; by 2018 media counted around thirty deaths among laid-off workers and family members, suicides prominent among them. When the Supreme Court finally trimmed the awards in June 2023 — thirteen-plus years after the strike — the seizures, the poverty and the funerals had already happened. The process, not the verdict, is the punishment; that is what makes the lawsuit a weapon.

## Sources
- The Korea Times. (2023, June 15). *Top court orders reduction in union's compensation to SsangYong over strike*. https://www.koreatimes.co.kr/www/nation/2023/08/113_353048.html
- Labor Notes. (2021, October). *The real-life auto strike behind the runaway Netflix hit Squid Game*. https://labornotes.org/blogs/2021/10/real-life-auto-strike-behind-runaway-netflix-hit-squid-game
- The Korea Times. (2018). *21 fired Ssangyong employees, family members dead since 2009*. http://www.koreatimes.co.kr/www/tech/2021/04/693_107378.html
- Peoples Dispatch. (2020, January 13). *For the dismissed workers of the 2009 Ssangyong Motors strike, the struggle continues*. https://peoplesdispatch.org/2020/01/13/for-the-dismissed-workers-of-the-2009-ssangyong-motors-strike-the-struggle-continues/`,
      recallContent: [
        {
          prompt: "What is provisional seizure (gapryu), and why does it make the damages suit so potent?",
          answer:
            "A court order freezing a defendant's assets — wages, severance pay, homes — while litigation runs, before any final judgment. Because anti-strike damages cases can run a decade or more (Ssangyong's reached the Supreme Court in June 2023, 13+ years after the 2009 strike), workers live for years under garnished pay and corporate-scale joint debt regardless of the eventual verdict. The process is the punishment.",
        },
        {
          prompt: "Summarize the Ssangyong 2009 strike and its human aftermath.",
          answer:
            "Facing ~2,600 layoffs, metalworkers occupied the Pyeongtaek plant for 77 days until police commandos rappelling from helicopters broke it in August 2009. The company, its insurer and the state then sued the union and individual workers; courts ordered ~4.7 billion won in damages (2013–14) with provisional seizures. By 2018 media counted around thirty deaths among laid-off workers and family members (counts vary by period and definition), suicides prominent among them.",
        },
      ],
    },
    {
      slug: "korea-truckers",
      title: "12 · The truckers: when the striker is not legally a worker",
      section: "Section 5 · Question 4 today — the lawsuit as a weapon",
      body: `Section 4 introduced Korea's "specially employed" workers — people the law treats as self-employed businesses. This lesson is what Question 4 looks like for them, through the biggest labor confrontation of Korea's 2020s.

**The setup.** Most Korean freight moves behind an **owner-operator**: a driver who owns (and owes payments on) his own truck and hauls under contract for logistics firms. In law he is a one-man business — **not a "worker" under the Trade Union and Labor Relations Adjustment Act** — so the organization that represents tens of thousands of these drivers, **TruckSol** (Cargo Truckers' Solidarity, a division of the KCTU-affiliated public-service and transport union), is in the government's eyes not a union bargaining, but an association of businesses colluding. Same men, same trucks, same grievances — but the legal category decides whether their collective action is a protected strike or something with no protection at all.

**What they wanted.** The **Safe Trucking Freight Rates System** — a minimum-rate scheme introduced in 2020 for container and cement haulage, on the logic that rock-bottom freight rates force drivers into overloading and dangerously long hours (the name is literal: safe *rates*, so drivers need not drive unsafely to eat). The system carried a **three-year sunset — expiry at the end of 2022** — and the truckers' demands were to make it permanent and extend it to more cargo types.

**The confrontation, dated.** TruckSol struck for eight days in **June 2022** (ending with a promise of extension talks), then again from **24 November 2022** — over 9,000 drivers by industry counts, choking container ports, cement plants and fuel depots, with losses employers put in the trillions of won. On **29 November 2022**, the government did something no Korean government had ever done: it invoked the **return-to-work order** provision of the **Trucking Transport Business Act** — on the books since 2004, never before used — against roughly 2,500 cement haulers, with a second order for steel and petrochemical drivers on 8 December. Defiance carried up to **three years in prison or a 30 million won fine**, plus license suspension. Ministers publicly framed the strike as holding the economy hostage; drivers who stayed out risked prosecution *as individuals*, and prosecutors and regulators opened parallel inquiries against the union. On **9 December 2022**, TruckSol's members voted to end the strike, having won none of their demands. The safe-rates system **lapsed on 31 December 2022.**

**The international echo — presented both ways.** The KCTU and global union federations complained to the **ILO**, arguing that ordering individual strikers back to work under criminal penalty violates the freedom-of-association conventions Korea had ratified the previous year; ILO bodies took the matter up and communicated with Seoul (The Diplomat). The government's position was that the orders were lawful emergency powers over a critical industry, applied to business operators rather than to workers — which is, note carefully, **the legal category doing the work again**: classify the striker as a business, and a strike-breaking order becomes market regulation. This dispute over Korea's compliance remained a live matter before ILO supervisory bodies as of this course's writing (mid-2026); check current status before citing an outcome.

**Why this lesson matters beyond trucking.** Put the two halves of Question 4 side by side now. A *worker* who strikes illegally in Korea faces the Ssangyong mechanism — the damages suit. A *non-worker* who strikes faces this one — criminalized defiance of an administrative order, because his strike was never a strike at all. Between them, the two mechanisms bracket exactly the people Section 4 taught you about: the category "worker" decides which weapon you face, and for four in ten it was never certain the category included them. That is why the statute's definitions — TULRAA's two opening articles — became the most fought-over sentences in Korean politics. The next lesson is that fight.

:::reveal In the 2022 truckers' strike, the government insisted its return-to-work orders were not strike-breaking but regulation of businesses. Explain how the legal category of the driver does the work in that argument. ||| Owner-operator truckers are classed as self-employed businesses, not "workers" under TULRAA — so TruckSol's stoppage was, legally, not a strike by workers (which the constitution and ILO conventions protect) but a collective refusal by transport operators. Reclassified that way, an order forcing individuals back to driving under threat of three years' prison or a 30 million won fine becomes 'emergency market regulation' rather than compelled strike-breaking. The whole dispute — including the ILO complaints under the conventions Korea ratified in 2021 — turns on whether the category, or the reality of dependent work, controls.

## Sources
- Al Jazeera. (2022, November 29). *South Korea orders striking truckers back to work*. https://www.aljazeera.com/economy/2022/11/29/south-korea-weighs-ordering-striking-truckers-back-to-work
- Al Jazeera. (2022, December 9). *South Korean truck drivers vote to end nationwide strike*. https://www.aljazeera.com/economy/2022/12/9/south-korean-truck-drivers-vote-to-end-strike
- The Diplomat. (2022, December). *South Korea's government accused of violating labor rights amid truckers' strike*. https://thediplomat.com/2022/12/south-koreas-government-accused-of-violating-labor-rights-amid-truckers-strike/
- Jacobin. (2023, February). *South Korean truckers provide a model for labor organizing among independent contractors*. https://jacobin.com/2023/02/south-korean-trucker-contractor-strike-trucksol`,
      recallContent: [
        {
          prompt: "What was the Safe Trucking Freight Rates System, and what happened to it?",
          answer:
            "A minimum freight-rate scheme introduced in 2020 for container and cement haulage, on the logic that rock-bottom rates force owner-operators into overloading and dangerous hours. It carried a three-year sunset; the 2022 strikes sought to make it permanent and extend it, but after the November–December strike ended in defeat (9 December 2022), the system lapsed on 31 December 2022.",
        },
        {
          prompt: "What was unprecedented about the government's response on 29 November 2022?",
          answer:
            "It invoked the return-to-work order provision of the Trucking Transport Business Act — on the books since 2004, never before used — against ~2,500 cement haulers (a second order followed 8 December for steel/petrochemical drivers). Defiance carried up to three years in prison or a 30 million won fine plus license suspension, applied to drivers as individuals — legally 'business operators,' not workers.",
        },
      ],
    },
    {
      slug: "korea-yellow-envelope",
      title: "13 · The yellow envelope",
      section: "Section 5 · Question 4 today — the lawsuit as a weapon",
      body: `In the winter of 2013–14, after courts ordered Ssangyong workers and their union to pay roughly 4.7 billion won, a reader sent a Korean weekly a donation for the workers: **47,000 won — a hundred-thousandth of the debt — in a yellow envelope**, the kind Korean wages used to be paid in. The gesture went viral. Some fifty thousand people eventually gave about 1.5 billion won, envelope by envelope, and Korean politics acquired a name for the demand that workers stop being sued into oblivion: the **yellow envelope law**. This lesson is the decade-long fight over it — taught **dated**, because parts of it are still live.

**What the bill actually does.** The "yellow envelope law" is a package of amendments to **Articles 2 and 3 of TULRAA** — the definitions and the damages rules you have now seen weaponized. Its main moves (Korea Times explainer; Baker McKenzie client alert):

1. **Broaden "employer"** to include anyone who "substantially and specifically controls" working conditions — so in-house subcontract workers (Lesson 9) can lawfully bargain with the *principal* firm that really sets their conditions, not just the shell that signs their paychecks.
2. **Broaden the lawful scope of disputes** — so strikes over restructuring-type management decisions that determine working conditions (a Ssangyong-style layoff, say) are less automatically "illegal," and less automatically damages-eligible.
3. **Rein in the damages weapon** — courts must apportion liability **individually, by each person's actual contribution**, ending the blanket joint-and-several liability that let a company hold every striker liable for everything, which is what made the provisional-seizure squeeze so crushing.

Notice what the package is: **a point-by-point answer to this course's Section 5.** Each clause targets one component of the mechanism you have just studied.

**The fight, dated.** The National Assembly passed versions of the bill **twice** — in November 2023 and again in August 2024 — and President Yoon Suk-yeol **vetoed it both times**, siding with employer groups who argued it would legalize chronic strikes and unravel subcontracting. Then Korean politics convulsed: Yoon's December 2024 martial-law declaration, his impeachment, and a June 2025 election that brought in a government backed by the bill's supporters. On **24 August 2025**, the National Assembly passed the yellow envelope law a third time, 183–3 (most of the conservative opposition boycotted the vote), and this time it was signed, **taking effect in March 2026** — six months after promulgation (Korea Times; Baker McKenzie; DLA Piper).

**Where that leaves things — the honest, dated close.** As this course ships (mid-2026), the law has been in force for a few months. That means: the *statutory* fight is, for now, decided — a twenty-year union demand became law, eleven years after the first envelope. But **nothing about its real-world effect can honestly be asserted yet.** Employers' associations warned of investment flight and endless bargaining disputes; unions promised a transformed landscape for subcontracted labor; courts have only begun interpreting the new definitions, and the first big test cases — who counts as a "substantially controlling" employer, what a court does with individualized apportionment — were still working through the system. **This course states the law's text and its dates, and asserts no outcomes. If you are reading this even a year from now, check the current status before you repeat any claim about how it worked out.** That discipline — date the claim, name the source, refuse the prediction — is the single most transferable habit this track can leave you with.

:::reveal Each of the yellow envelope law's three main amendments answers one part of the repression mechanism taught in this section. Match them. ||| (1) Broadening "employer" to whoever substantially controls working conditions answers the in-house subcontracting dodge — the periphery workforce could never bargain with the firm that actually set its conditions. (2) Broadening the lawful scope of disputes answers the "illegal strike" trigger — strikes over restructuring decisions like Ssangyong's layoffs were near-automatically unlawful, which is what armed the damages claim. (3) Individualized apportionment of liability answers the joint-and-several damages weapon itself — no more holding every striker liable for everything, which was what made provisional seizure so crushing. Passed 24 August 2025 (after 2023 and 2024 vetoes), in force March 2026; its real-world effects were untested as of this course's writing.

## Sources
- The Korea Times. (2025, July 30). *Explainer: What's in Korea's 'yellow envelope law'?* https://www.koreatimes.co.kr/southkorea/politics/20250730/explainer-whats-in-koreas-yellow-envelope-law
- Baker McKenzie. (2025, August 26). *National Assembly passes Yellow Envelope Act* [Client alert]. https://www.bakermckenzie.com/-/media/files/insight/publications/alerts/08/national_assembly_passes_yellow_envelope_act_20560.pdf
- Korea Bizwire. (2025). *From a 47,000-won donation to national law: Korea's yellow envelope saga ends in passage*. http://koreabizwire.com/from-a-47000-won-donation-to-national-law-koreas-yellow-envelope-saga-ends-in-passage/330582
- DLA Piper. (2025). *Key implications of the 'Yellow Envelope Act' on labour-management relations*. https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/2025/key-implications-of-yellow-envelope-act-on-labour-management-relations
- The Korea Herald. (2025). *How will 'Yellow Envelope' bill reshape Korea's labor landscape?* https://www.koreaherald.com/article/10564042`,
      recallContent: [
        {
          prompt: "Where does the name 'yellow envelope law' come from?",
          answer:
            "From a 2013–14 citizens' campaign: after courts ordered Ssangyong workers to pay ~4.7 billion won, a reader sent 47,000 won in a yellow envelope — the kind wages used to be paid in — to help. Around fifty thousand people gave about 1.5 billion won, and the envelope became the emblem of the demand to rein in damages suits against strikers.",
        },
        {
          prompt: "Give the dated legislative history of the yellow envelope law.",
          answer:
            "Passed by the National Assembly November 2023 — vetoed by President Yoon. Passed again August 2024 — vetoed again. After Yoon's December 2024 martial-law crisis, impeachment, and the June 2025 election, passed a third time on 24 August 2025 (183–3, opposition boycotting), signed, and effective March 2026. As of mid-2026 its real-world effects are untested — check current status before asserting outcomes.",
        },
      ],
    },
    {
      slug: "korea-quiz-5",
      title: "Section 5 quiz · The lawsuit as a weapon",
      section: "Section 5 · Question 4 today — the lawsuit as a weapon",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How did the 77-day Ssangyong plant occupation of 2009 end?",
            options: [
              "With a negotiated win for the union",
              "With police commandos rappelling from helicopters onto the factory roof in August 2009 — the occupation broken, the ~2,600 layoffs standing",
              "With the government nationalizing the company",
              "With the strike simply fading out",
            ],
            correctIndex: 1,
            explanation:
              "The broadcast images of the assault made Pyeongtaek a national reference point — but the course's real subject is what came after: the bill.",
            sourceLessonSlug: "korea-ssangyong",
          },
          {
            prompt: "Who sued the Ssangyong strikers after 2009?",
            options: [
              "No one — the matter ended with the strike",
              "The company, its insurer, AND the state (police damages, including a helicopter) — against the union and individual workers",
              "Only foreign shareholders",
              "Only the city of Pyeongtaek",
            ],
            correctIndex: 1,
            explanation:
              "Multiple plaintiffs, individual defendants, joint liability: courts ordered roughly 4.7 billion won against strikers and their union in 2013–14.",
            sourceLessonSlug: "korea-ssangyong",
          },
          {
            prompt: "What is provisional seizure (gapryu)?",
            options: [
              "A criminal sentence after conviction",
              "A court order freezing wages, severance and homes while litigation runs — before any final judgment",
              "A tax audit",
              "A form of workplace suspension",
            ],
            correctIndex: 1,
            explanation:
              "Because anti-strike damages cases can run a decade, the freeze — not the verdict — is the punishment. It is what makes the lawsuit a weapon.",
            sourceLessonSlug: "korea-ssangyong",
          },
          {
            prompt: "What human toll did Korean media count among Ssangyong's laid-off workers and families by 2018?",
            options: [
              "None",
              "Around thirty deaths — suicides prominent among them, alongside stress-linked illness (counts vary with period and definition)",
              "Three injuries",
              "Exactly one hundred deaths, officially certified",
            ],
            correctIndex: 1,
            explanation:
              "The course reports the widely cited count and names the variance rather than asserting a precise figure — the standard for contested numbers.",
            sourceLessonSlug: "korea-ssangyong",
          },
          {
            prompt: "What did Korea's Supreme Court do in June 2023 regarding Ssangyong?",
            options: [
              "It increased the damages award tenfold",
              "It overturned the award against the metalworkers' union — ruling payments to returning workers couldn't count as strike losses, cutting the principal by about a third — thirteen-plus years after the strike",
              "It jailed the union's leadership",
              "It abolished damages suits entirely",
            ],
            correctIndex: 1,
            explanation:
              "Relief arrived at the highest court long after the seizures and funerals — proof that the mechanism's power was the years in between, not the final judgment.",
            sourceLessonSlug: "korea-ssangyong",
          },
          {
            prompt: "Why are Korea's owner-operator truckers outside TULRAA's protections?",
            options: [
              "Because trucking is a state secret",
              "Because they are legally classed as self-employed businesses, not 'workers' — so their collective action is not legally a strike",
              "Because they refused to register their union",
              "Because they are mostly foreign nationals",
            ],
            correctIndex: 1,
            explanation:
              "Same men, same grievances — but the legal category decides whether collective action is a protected strike or unprotected collusion. The category is the weapon's selector switch.",
            sourceLessonSlug: "korea-truckers",
          },
          {
            prompt: "What was the Safe Trucking Freight Rates System?",
            options: [
              "A speed-limit law",
              "A 2020 minimum freight-rate scheme for container and cement haulage — so drivers needn't overload and overdrive to survive — with a three-year sunset at end-2022",
              "A fuel subsidy",
              "A truck-safety inspection regime",
            ],
            correctIndex: 1,
            explanation:
              "The truckers' 2022 demands were to make it permanent and extend it to more cargo types. After the strike's defeat, it lapsed on 31 December 2022.",
            sourceLessonSlug: "korea-truckers",
          },
          {
            prompt: "What unprecedented step did the government take on 29 November 2022?",
            options: [
              "It nationalized the ports",
              "It issued the first-ever return-to-work orders under the Trucking Transport Business Act (on the books since 2004) — ~2,500 cement haulers, with up to 3 years' prison or a 30 million won fine for defiance",
              "It granted all the strikers' demands",
              "It dissolved the KCTU",
            ],
            correctIndex: 1,
            explanation:
              "A second order followed 8 December for steel and petrochemical drivers. TruckSol members voted to end the strike 9 December, having won none of their demands.",
            sourceLessonSlug: "korea-truckers",
          },
          {
            prompt: "How does the course present the ILO dispute over the truckers' return-to-work orders?",
            options: [
              "As settled in the government's favor",
              "As settled in the unions' favor",
              "Both positions stated — union complaints under the newly ratified conventions vs. the government's 'regulation of business operators' defense — with the matter live before ILO bodies as of mid-2026, status to be checked",
              "As a hoax",
            ],
            correctIndex: 2,
            explanation:
              "Neutral and dated on live disputes: both arguments taught, no winner declared, check-before-citing flagged.",
            sourceLessonSlug: "korea-truckers",
          },
          {
            prompt: "Where does the name 'yellow envelope law' come from?",
            options: [
              "The color of the National Assembly's voting slips",
              "A 2013–14 campaign in which citizens — starting with one 47,000-won donation in a yellow pay envelope — gave ~1.5 billion won to help Ssangyong workers pay court-ordered damages",
              "A postal regulation",
              "The uniform color of delivery riders",
            ],
            correctIndex: 1,
            explanation:
              "About fifty thousand donors, envelope by envelope — the wage packet as a symbol against the damages suit. Eleven years later the demand became law.",
            sourceLessonSlug: "korea-yellow-envelope",
          },
          {
            prompt: "Which THREE changes make up the yellow envelope law's core package?",
            options: [
              "A minimum wage rise, a pension reform, and a tax credit",
              "Broadened 'employer' (substantial control test), broadened lawful dispute scope, and individualized apportionment of strike damages ending blanket joint-and-several liability",
              "A strike ban, a union subsidy, and a tariff",
              "Nationalization of subcontractors",
            ],
            correctIndex: 1,
            explanation:
              "A point-by-point answer to this section: the subcontracting dodge, the 'illegal strike' trigger, and the damages weapon itself — one amendment each (TULRAA Articles 2 and 3).",
            sourceLessonSlug: "korea-yellow-envelope",
          },
          {
            prompt: "What is the dated legislative history of the yellow envelope law?",
            options: [
              "Passed once in 1997 and never contested",
              "Passed Nov 2023 (vetoed), passed Aug 2024 (vetoed), passed 24 Aug 2025 by 183–3 after Korea's political crisis and change of government — signed, effective March 2026",
              "Rejected by every National Assembly vote to date",
              "Adopted by referendum in 2010",
            ],
            correctIndex: 1,
            explanation:
              "Two Yoon vetoes, then passage after the December 2024 martial-law crisis, impeachment and June 2025 election. Dates are the course's discipline on live politics.",
            sourceLessonSlug: "korea-yellow-envelope",
          },
          {
            prompt: "What does the course assert about the yellow envelope law's real-world effects?",
            options: [
              "That it destroyed the Korean economy",
              "That it ended all labor disputes",
              "Nothing — as of mid-2026 the law had been in force only months, courts had barely begun interpreting it, and the course states text and dates while refusing predictions",
              "That it was repealed immediately",
            ],
            correctIndex: 2,
            explanation:
              "Date the claim, name the source, refuse the prediction — the single most transferable habit the track teaches. Check current status before repeating any outcome claim.",
            sourceLessonSlug: "korea-yellow-envelope",
          },
          {
            prompt: "How do Korea's two modern repression mechanisms bracket the workforce, per the course?",
            options: [
              "Both apply only to civil servants",
              "A 'worker' striking illegally faces the damages suit (Ssangyong); a 'non-worker' striking faces criminalized defiance of administrative orders (truckers) — the legal category selects the weapon",
              "Neither mechanism still exists",
              "Both were invented by the dictatorship in 1972",
            ],
            correctIndex: 1,
            explanation:
              "TULRAA's definitions decide which instrument you face — which is why Articles 2 and 3 became the most fought-over sentences in Korean politics.",
            sourceLessonSlug: "korea-truckers",
          },
          {
            prompt: "Why does the course call the damages suit 'a colder instrument' than the dictatorship's policeman — and harder to abolish?",
            options: [
              "Because it is faster than a police raid",
              "Because it ruins without jailing and wears the clothes of ordinary civil law — 'who could object to a company recovering its losses?' — so dismantling it took a decade-long political fight",
              "Because judges are colder people than police officers",
              "Because it only applies in winter",
            ],
            correctIndex: 1,
            explanation:
              "Question 4's democratic form hides inside neutral-looking private law. That disguise is exactly what made the yellow-envelope fight take eleven years from first envelope to statute.",
            sourceLessonSlug: "korea-ssangyong",
          },
        ],
      },
    },

    // ────────────── SECTION 6 · THE SCORECARD ──────────────
    {
      slug: "korea-ilo-2021",
      title: "14 · 2021: signing the floor, thirty years late",
      section: "Section 6 · The scorecard, and the skill you keep",
      body: `Return now to the fact this course opened with, because you can finally read it properly: **on 20 April 2021, South Korea deposited its ratifications of ILO Conventions 87 and 98** (freedom of association; the right to organise and bargain collectively), together with Convention 29 on forced labour. They entered into force on **20 April 2022**, and — a detail worth knowing — under Article 6(1) of Korea's constitution, ratified treaties carry **the same effect as domestic statute** (Kim & Chang). Thirty years after joining the ILO in 1991 with a promise to ratify, the promise was kept.

**Why did it take thirty years?** Not forgetfulness. Ratifying would have meant admitting that specific, defended features of Korean labor law contradicted the conventions — and each was somebody's fortress:

- **The membership bars.** Korean law long required that union members be *employees* — so a **dismissed worker lost union membership**, which conveniently meant that firing an organizer also removed him from the union he led. Teachers' and public officials' unions spent years derecognized on exactly this ground (the teachers' union was stripped of legal status in the 2010s over a handful of dismissed members — restored by the courts in 2020).
- **The category gates** you now know intimately: "specially employed" workers outside the definition of *worker* altogether (Lesson 12).
- **The dispute limits and their enforcement** — the narrow lawful scope of strikes, criminal "obstruction of business" charges, and the damages machinery of Section 5, all of which ILO supervisory bodies had criticized for years.

**What ratification forced, and what it didn't.** To ratify, the National Assembly amended **TULRAA in early 2021**: most prominently, dismissed and unemployed workers may now join unions, and several restrictions on union office and public-sector organizing were loosened. That is real movement — the membership-bar fortress fell. But the course you have just taken is the evidence for the other half: **the truckers' return-to-work orders (November 2022) and the damages fights came *after* ratification.** Unions immediately took both to ILO supervisory bodies under the newly binding conventions; the government defended both as lawful. Those proceedings, and the first court tests of what the conventions' domestic-statute status means in practice, were **still unfolding as of this course's writing (mid-2026)** — dated, unresolved, check before citing.

**How to think about it — the track's ILO lesson, Korean edition.** The anchor taught you that the ILO floor is "made of paper": near-universal on parchment, weakly enforced everywhere. Korea adds the sharpest known illustration of the *other* face of that lesson: the paper floor **matters enough that a rich democracy spent thirty years refusing to sign it.** States do not spend three decades avoiding meaningless documents. The conventions' value was never that they enforce themselves — it is that they give every domestic fight (the yellow envelope debates cited them constantly; so do the truckers' complaints) a fixed, external standard to argue from. Paper, yes. But load-bearing paper.

:::reveal Korea's thirty-year delay in ratifying ILO Conventions 87 and 98 is presented as proof that the "paper floor" matters. Reconstruct the argument. ||| If the conventions were meaningless parchment, ratification would have been costless and immediate. Instead Korea delayed from 1991 to 2021 precisely because ratifying meant dismantling defended features of its law — the rule stripping dismissed workers of union membership (which made firing an organizer a union-expulsion tool), the category gates around 'worker,' and the narrow strike-scope-plus-damages machinery the ILO had long criticized. Ratification forced real 2021 TULRAA amendments, and the conventions now anchor live ILO proceedings over the 2022 return-to-work orders. States don't spend thirty years avoiding documents that bind nothing — the paper is weak as enforcement but load-bearing as a standard.

## Sources
- Ministry of Foreign Affairs, Republic of Korea. (2021, April 20). *Ratification of three fundamental ILO conventions marked in virtual ceremony with ILO* [Press release]. https://www.mofa.go.kr/eng/brd/m_5676/view.do?seq=321641
- Kim & Chang. (2022). *Implementation and implications of the ILO fundamental conventions*. https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=24986
- International Labour Organization. (n.d.). *Ratifications for the Republic of Korea*. NORMLEX. https://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:11200:0::NO::P11200_COUNTRY_ID:103123
- The Diplomat. (2022, December). *South Korea's government accused of violating labor rights amid truckers' strike*. https://thediplomat.com/2022/12/south-koreas-government-accused-of-violating-labor-rights-amid-truckers-strike/`,
      recallContent: [
        {
          prompt: "What did Korea have to change in its own law to ratify ILO Conventions 87 and 98?",
          answer:
            "The 2021 TULRAA amendments — most prominently allowing dismissed and unemployed workers to join unions (ending the rule that made firing an organizer a union-expulsion tool), plus loosened restrictions on union office and public-sector organizing. The conventions were deposited 20 April 2021, entered into force 20 April 2022, and carry the same effect as domestic statute under Article 6(1) of the constitution.",
        },
        {
          prompt: "What post-ratification events show the fight didn't end in 2021?",
          answer:
            "The November 2022 truckers' return-to-work orders and the continuing damages-suit battles both came after ratification; unions took them to ILO supervisory bodies under the newly binding conventions, the government defended them as lawful, and those proceedings — plus the first court tests of the conventions' domestic effect — were still unfolding as of mid-2026.",
        },
      ],
    },
    {
      slug: "korea-scorecard",
      title: "15 · The scorecard, and the skill you keep",
      section: "Section 6 · The scorecard, and the skill you keep",
      body: `Close with the honest numbers, because Korea's are the most misread in this track. Korean labor's *image* — the headbands, the plaza rallies, the general strikes, the most militant union movement in the rich world — is real. Now put the scorecard next to it:

| Measure | Korea | For comparison |
| --- | --- | --- |
| Union density | **13.1%** (2022, Ministry of Employment and Labor; 14.2% in 2021, 12.5% in 2019) | Germany ~14% — Sweden ~65% |
| Collective bargaining coverage | **~14.8%** (2018, OECD/AIAS ICTWSS) | Germany ~49% — France ~90%+ |
| Predominant bargaining level | **Enterprise** (company by company) | Germany/Nordics: sector |
| Extension of agreements to non-signers | **None** — no legal mechanism or functional equivalent (OECD/AIAS) | France/Germany: extension exists |
| Non-regular share of wage workers | **38.2%** (August 2025, Statistics Korea) | — |

Three readings, and then the skill.

**Reading one: militancy is not density.** The most strike-prone labor movement in the OECD organizes about one worker in eight — down from a peak of just under one in five at the post-1987 high-water mark (1989), and below one in ten around 2010 before a partial recovery (Ministry of Employment and Labor series). The rallies you see on the news are the mobilization of a militant *minority*, concentrated in the chaebol plants and the public sector. If the Poland course taught you that a right can be secure and barely used, Korea teaches the sibling lesson: **a movement can be loud and small at the same time.**

**Reading two: density is not coverage — the Germany lesson, inverted.** Korea and Germany have nearly the same density. Germany's agreements cover about half its workers; Korea's cover barely more than its members, because bargaining is enterprise-level and **nothing extends an agreement beyond the firm that signed it**. Every union victory in Korea is won inside one company's walls and stays there. (One structural consequence you can now predict: since agreements can't spread, the wage floor for everyone else has to be statutory — which is why Korea's **minimum wage**, unlike the Nordic countries', is set by law and fought over nationally every summer.)

**Reading three: the walls have a population.** Whatever the insiders win, 38.2% of wage workers stand structurally outside it (August 2025, Statistics Korea) — and the sharpest edge of them, the "specially employed," stand outside the word *worker* itself. Korea's labor question in the 2020s is not "will the unions win?" It is **"who is inside the category?"** — which is precisely why the yellow envelope law aimed its first clause at the definition of *employer* and why every count in this course keeps returning to the boundary line.

**The four questions, answered one last time.** *Who may organise?* Anyone the law calls a worker — a category fought over sentence by sentence. *Who is excluded?* The non-regular 38.2%, above all the specially employed. *Who bargains, at what level?* Enterprise unions, company by company, nothing extending. *What happens if you try?* For workers: the damages suit — now curbed on paper by a March 2026 law whose real effect is unproven. For non-workers: administrative orders with criminal teeth. **Every answer runs through a definition.** That is Korea's signature.

**The skill you keep.** From Germany you took *find the bargaining level*. From Poland, *find the legal form that moves workers out of the protected category*. Korea gives you the third tool, and it may be the sharpest: **find out what happens after the strike ends.** Not the confrontation — the paperwork. Who gets sued, for how much, under what liability rule; whose assets can be frozen while the case runs; which strikers were ever legally "on strike" at all. A country's labor law shows you its true face not on the day workers walk out, but in the years of consequences afterward. Ask that question of any country — including your own — and you will see past both the headbands and the press releases.

*Where to go next in this track:* the anchor's Japan lesson (the enterprise-union family Korea belongs to), **Poland** (the democratization twin, arrow reversed), **Germany** (the coverage machine Korea lacks), and — for your own workplace, today — **Know Your Rights at Work**.

:::reveal Korea hands you the track's third diagnostic tool: "find out what happens after the strike ends." What, concretely, should you look up — and why does it reveal more than the strike itself? ||| Look up the aftermath machinery: who can be sued for strike losses and under what liability rule (blanket joint-and-several vs individually apportioned); whether assets can be frozen by provisional seizure while cases run; whether criminal charges like obstruction-of-business attach; and whether the strikers were even inside the legal category 'worker,' which decides if it was legally a strike at all. The confrontation is theater that every system permits occasionally; the years of consequences are policy. Korea's decade — Ssangyong's seizures and funerals, truckers prosecuted as 'business operators,' the eleven-year yellow-envelope fight over Articles 2 and 3 — shows the true answer to 'what happens to you if you try?' lives in the paperwork, not the plaza.

## Sources
- Statista. (2024). *Trade union membership rate South Korea 1977–2023* [Reporting Ministry of Employment and Labor figures]. https://www.statista.com/statistics/648966/south-korea-union-membership-rate/
- OECD & AIAS. (2021). *ICTWSS database — country note: Korea*. OECD Publishing. https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/10/main-indicators-and-characteristics-of-collective-bargaining-2021-country-notes_4b5553c9/korea_a03553b6/ae3e1cc3-en.pdf
- Statistics Korea. (2025, October). *Supplementary results of the Economically Active Population Survey by employment type in August 2025* [Press release]. https://mods.go.kr/board.es?act=view&bid=11735&list_no=439078&mid=a20105010000`,
      recallContent: [
        {
          prompt: "Give Korea's scorecard numbers with years and sources.",
          answer:
            "Density 13.1% (2022, MOEL; 14.2% in 2021, 12.5% in 2019; below 10% around 2010; peak just under one in five in 1989). Coverage ~14.8% (2018, OECD/AIAS ICTWSS). Bargaining: enterprise-level, with no mechanism extending agreements to non-signers. Non-regular share: 38.2% of wage workers (August 2025, Statistics Korea).",
        },
        {
          prompt: "What is the third diagnostic tool this course adds to the track's toolkit?",
          answer:
            "Find out what happens after the strike ends: who gets sued and under what liability rule, whether provisional seizure freezes assets during litigation, what criminal charges attach, and whether the strikers were inside the legal category 'worker' at all. A labor system's true face is the years of consequences, not the day of confrontation. (Germany contributed 'find the bargaining level'; Poland 'find the form that moves workers out of the category.')",
        },
      ],
    },
    {
      slug: "korea-quiz-6",
      title: "Section 6 quiz · The scorecard",
      section: "Section 6 · The scorecard, and the skill you keep",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Under Article 6(1) of Korea's constitution, what legal force do the ratified ILO conventions carry?",
            options: [
              "None — they are symbolic",
              "The same effect as domestic statute",
              "They override the constitution itself",
              "They apply only to foreign companies",
            ],
            correctIndex: 1,
            explanation:
              "Ratified treaties have domestic-statute effect — which is why the first court tests of the conventions' meaning matter, and why unions cite them in live proceedings.",
            sourceLessonSlug: "korea-ilo-2021",
          },
          {
            prompt: "What rule long made firing a Korean union organizer doubly effective?",
            options: [
              "Organizers had to repay their training costs",
              "Union members had to be employees — so a dismissed worker lost union membership, and firing an organizer expelled him from the union he led",
              "Organizers were banned from re-employment for life",
              "Unions had to disband if any member was fired",
            ],
            correctIndex: 1,
            explanation:
              "The membership bar — the fortress that fell in the 2021 TULRAA amendments so Korea could ratify C87. The teachers' union spent years derecognized on this ground.",
            sourceLessonSlug: "korea-ilo-2021",
          },
          {
            prompt: "What did the early-2021 TULRAA amendments change?",
            options: [
              "They abolished the minimum wage",
              "Dismissed and unemployed workers may join unions, with loosened restrictions on union office and public-sector organizing — aligning the law enough to ratify the ILO conventions",
              "They banned enterprise unions",
              "They privatized the railways",
            ],
            correctIndex: 1,
            explanation:
              "Real movement forced by ratification — while the truckers' orders and damages fights of 2022+ show which fortresses still stood.",
            sourceLessonSlug: "korea-ilo-2021",
          },
          {
            prompt: "How does the course read Korea's thirty-year ratification delay?",
            options: [
              "As bureaucratic forgetfulness",
              "As proof the paper floor matters: states don't spend three decades avoiding meaningless documents — ratifying meant dismantling defended features of Korean law",
              "As an ILO clerical error",
              "As irrelevant trivia",
            ],
            correctIndex: 1,
            explanation:
              "The anchor's 'floor made of paper' lesson, Korean edition: weak as enforcement, load-bearing as a standard that every domestic fight now argues from.",
            sourceLessonSlug: "korea-ilo-2021",
          },
          {
            prompt: "What is Korea's union density, dated and sourced?",
            options: [
              "13.1% (2022, Ministry of Employment and Labor)",
              "38.2% (2025, Statistics Korea)",
              "49% (2024, OECD)",
              "65% (2022, ILO)",
            ],
            correctIndex: 0,
            explanation:
              "13.1% in 2022 (14.2% in 2021, 12.5% in 2019, below 10% around 2010, peak just under one in five in 1989). The 38.2% figure is the non-regular share — a different statistic.",
            sourceLessonSlug: "korea-scorecard",
          },
          {
            prompt: "Korea and Germany have similar union density. Why is Korea's bargaining coverage (~14.8%, 2018, OECD/AIAS) a third of Germany's?",
            options: [
              "Korean unions refuse to bargain",
              "Enterprise-level bargaining plus no extension mechanism: every agreement stays inside the company that signed it",
              "German workers strike more often",
              "Korea has no written labor law",
            ],
            correctIndex: 1,
            explanation:
              "The Germany lesson inverted: without sectoral bargaining or extension, coverage cannot outrun membership. Every Korean union victory stays inside one company's walls.",
            sourceLessonSlug: "korea-scorecard",
          },
          {
            prompt: "Why does Korea, unlike the Nordic countries, fight a national statutory minimum-wage battle every year?",
            options: [
              "Because Korean unions demanded the abolition of contracts",
              "Because agreements can't spread beyond the signing firm, so the wage floor for everyone outside must be statutory",
              "Because the IMF sets Korean wages",
              "Because the constitution forbids collective agreements",
            ],
            correctIndex: 1,
            explanation:
              "A structural consequence you can predict from the scorecard: no extension mechanism → the law, not the contract, must be the floor. The Nordics run the opposite design.",
            sourceLessonSlug: "korea-scorecard",
          },
          {
            prompt: "What does the course mean by 'a movement can be loud and small at the same time'?",
            options: [
              "Korean unions have no members at all",
              "The OECD's most strike-prone movement organizes about one worker in eight — headline militancy is the mobilization of a concentrated minority in chaebol plants and the public sector",
              "Korean strikes are silent",
              "Density is above 60%",
            ],
            correctIndex: 1,
            explanation:
              "The sibling of Poland's lesson (a right can be secure and barely used): image and scorecard must be read together.",
            sourceLessonSlug: "korea-scorecard",
          },
          {
            prompt: "What is Korea's 'signature,' per the course's final answer to the four questions?",
            options: [
              "Every answer runs through a definition — worker, employer, lawful dispute — fought over sentence by sentence",
              "Every answer runs through the monarchy",
              "Every answer runs through foreign treaties alone",
              "The four questions don't apply to Korea",
            ],
            correctIndex: 0,
            explanation:
              "Who may organise, who is excluded, who bargains, and what happens after — in Korea each one is decided by a statutory category's boundary line.",
            sourceLessonSlug: "korea-scorecard",
          },
          {
            prompt: "What third diagnostic tool does Korea add to the track's toolkit?",
            options: [
              "Count the strike days per year",
              "Find out what happens AFTER the strike ends — the lawsuits, liability rules, seizures, and whether the strikers were legally 'workers' at all",
              "Measure the size of rallies",
              "Read only the union's press releases",
            ],
            correctIndex: 1,
            explanation:
              "Germany: find the bargaining level. Poland: find the category-moving form. Korea: the aftermath paperwork is the system's true face.",
            sourceLessonSlug: "korea-scorecard",
          },
          {
            prompt: "Which post-ratification disputes went to ILO supervisory bodies under the newly binding conventions?",
            options: [
              "None — all disputes ended in 2021",
              "The 2022 truckers' return-to-work orders and the anti-strike damages machinery — with proceedings still unfolding as of mid-2026",
              "A dispute over K-pop royalties",
              "A dispute over rice tariffs",
            ],
            correctIndex: 1,
            explanation:
              "Ratification moved the fight to a new arena rather than ending it; the course leaves the outcome dated and open, to be checked.",
            sourceLessonSlug: "korea-ilo-2021",
          },
          {
            prompt: "Roughly how has Korean union density moved since 1989?",
            options: [
              "Steadily up to 50%",
              "From just under one in five (1989 peak) to below one in ten around 2010, then a partial recovery to 13.1% by 2022 (MOEL series)",
              "Flat at 40% throughout",
              "Down to 1%",
            ],
            correctIndex: 1,
            explanation:
              "The arc mirrors the story: the 1987 explosion, the post-1997 erosion, and a partial 2010s recovery concentrated in the public sector.",
            sourceLessonSlug: "korea-scorecard",
          },
          {
            prompt: "The course says Korea's labor question in the 2020s is not 'will the unions win?' What is it?",
            options: [
              "'Who is inside the category?' — which is why the yellow envelope law aimed first at the definition of employer",
              "'Which federation has the better logo?'",
              "'Will strikes be replaced by robots?'",
              "'Should Korea leave the ILO?'",
            ],
            correctIndex: 0,
            explanation:
              "With 38.2% of wage workers non-regular and the sharpest-edge workers outside the word 'worker,' the boundary line is the battlefield.",
            sourceLessonSlug: "korea-scorecard",
          },
          {
            prompt: "Which courses does this one point you toward next, and why?",
            options: [
              "The anchor's Japan lesson (Korea's enterprise-union family), Poland (democratization twin, arrow reversed), Germany (the coverage machine Korea lacks), and Know Your Rights at Work (your own workplace, today)",
              "Only courses about East Asia",
              "No other courses — Korea stands alone",
              "The golf course",
            ],
            correctIndex: 0,
            explanation:
              "The track compounds by cross-linking: each country is a tool, and Korea's connects to Japan's form, Poland's arrow, and Germany's missing machinery.",
            sourceLessonSlug: "korea-scorecard",
          },
          {
            prompt: "What does the course assert about the March 2026 damages-law reform's effect on Question 4?",
            options: [
              "It has already ended all damages suits",
              "It curbs the weapon on paper, but its real effect is unproven as of this course's writing — dated, to be checked",
              "It was repealed in April 2026",
              "It doubled the damages available",
            ],
            correctIndex: 1,
            explanation:
              "The final answer to Question 4 stays honest: 'now curbed on paper by a March 2026 law whose real effect is unproven.' Date the claim; refuse the prediction.",
            sourceLessonSlug: "korea-scorecard",
          },
        ],
      },
    },
  ],
};
