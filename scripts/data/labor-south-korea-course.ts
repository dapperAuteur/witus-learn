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
  ],
};
