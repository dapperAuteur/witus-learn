// Authored "Mexico: The Protection Contract, and the Trade Deal That Came for It" — Wave 1 of the
// Workers' Rights track (plans/future-courses/workers-rights-track-proposal.md). Country companion to
// the anchor, "The History of Unions: America and the World" (scripts/data/history-of-unions-course.ts).
// This course is the ANSWER to the anchor's bleakest lesson — the ILO floor "is made of paper."
// Mexico is where an international labor rule finally acquired teeth.
//
// Sourcing discipline (the load-bearing part of this file):
//   * The RRM is taught FROM THE TREATY TEXT, not from summaries. Every procedural number (10 days to
//     answer, 45 days to review, the 15-day notice, the 5-business-day notice after a panel finding)
//     and every remedy is read out of USMCA Annex 31-A as published by USTR. So is the fact that
//     Annex 31-A binds ONLY the US and Mexico (31-B is the separate Canada–Mexico annex), that a
//     "Priority Sector" is manufacturing, services, or mining — AGRICULTURE IS NOT NAMED — and the
//     asymmetry in footnote 2: a claim against a US facility requires an ALREADY-ENFORCED NLRB order,
//     while a claim against a Mexican facility runs against any law implementing Annex 23-A. Popular
//     summaries miss that footnote; it is the single most important limit on the mechanism.
//   * The framing rule: THIS IS NOT A US-SAVES-MEXICO STORY, and the treaty itself says so. Annex 23-A
//     paragraph 1 records that the reform is within "the mandate provided to the government by the
//     people of Mexico in the elections." Mexico's reform was published 1 May 2019; USMCA entered into
//     force 1 July 2020. The law came FIRST. The RRM enforces Mexican law; it does not author it, and
//     Article 31-A.2 means it CANNOT reach a wrong that Mexican law does not already prohibit — which
//     is exactly why the US LOST the San Martín panel.
//   * Every case is dated and cited to USTR or the US Department of Labor (both publish them), and the
//     course deliberately teaches the ones that went BADLY: San Martín (Mexico won; determination
//     final, 13 May 2024), BBB Manufacturing (the US government rejected the petition itself for
//     insufficient evidence, Sept 2022), and VU Manufacturing (remedy imposed — then the company
//     closed the plant, Oct 2023). A course that only taught GM Silao would be advertising.
//   * SCALE OF PROTECTION CONTRACTS IS DELIBERATELY NOT QUANTIFIED. Gacek (2019, Mexican Law Review)
//     says they are "believed to make up the overwhelming majority of collective agreements" and gives
//     no figure, because no reliable count exists. The course says so, and REFUSES the widely repeated
//     claim that the ~119,000 agreements that died at legitimation were all protection contracts — a
//     contract can fail legitimation because the firm closed, or the union never filed. The course
//     teaches that distinction as a source-evaluation lesson instead of laundering the number.
//   * Article 123 is cited to the Constitution; the clause numbering (XVI unions, XVII strike, XVIII
//     lawful-strike test, XX the old tripartite board, XXII anti-union dismissal) was READ from the
//     text, not recalled. Note fracción XX as quoted describes the PRE-2017 Juntas de Conciliación y
//     Arbitraje; the 2017 constitutional reform (DOF 24 Feb 2017) replaced them with labor courts.
//   * Currency: the USMCA joint review took place 1 July 2026 and the United States declined to
//     confirm the 16-year extension, which triggers ANNUAL reviews. The agreement remains in force.
//     The course states this, dates it, and REFUSES TO PREDICT what happens next.

import type { AuthoredCourse } from "./authored-course";

export const LABOR_MEXICO_COURSE: AuthoredCourse = {
  title: "Mexico: The Protection Contract, and the Trade Deal That Came for It",
  description:
    "The country course that teaches you to stop asking \"is there a union?\" and start asking \"whose union is it?\" Mexico put labor rights in its constitution in 1917 — eighteen years before the United States passed the Wagner Act — and then spent most of a century with a union movement built into the ruling party. Out of that grew the protection contract: a collective agreement signed between a company and a union the workers had never heard of, sometimes before the factory had hired anybody, which then legally blocked a real union from organizing. This course teaches exactly how that worked, how Mexico's own 2019 labor reform set out to kill it (every existing contract had to win a free, secret, personal vote by 1 May 2023 or die), and how the USMCA's Rapid Response Labor Mechanism became the one international labor tool anywhere that actually bites — a tariff penalty aimed at a single factory. Then it teaches the mechanism's limits, including the cases the United States lost. Cited to the treaty text, the Mexican Constitution, the Ley Federal del Trabajo, Mexico's STPS and Federal Labor Center, USTR, and the US Department of Labor.",
  lessons: [
    // ───────────── SECTION 1 · RIGHTS ON PAPER, BEFORE ANYBODY ELSE HAD THEM ─────────────
    {
      slug: "mexico-article-123",
      section: "Section 1 · Rights on paper, before anybody else had them",
      title: "1 · 1917: Mexico put labor rights in its constitution first",
      body: `Start with a fact that reorganizes the map.

In the anchor course, *The History of Unions*, the great American turning point is **1935** — the year the **Wagner Act** made organizing a union a protected legal right in the United States.

Mexico got there **eighteen years earlier**, and it did not use a statute. It used its **constitution**.

The **Constitución Política de los Estados Unidos Mexicanos**, promulgated in **1917** out of the Mexican Revolution, contains **Article 123** — an entire article of the country's founding document devoted to labor. Not a law that a later Congress could quietly repeal. The constitution itself.

Read what is actually in it (Constitución Política de los Estados Unidos Mexicanos [CPEUM], 1917/2015, art. 123, apartado A):

| Clause | What it says |
| --- | --- |
| **I** | "The maximum duration of the working day shall be **eight hours**." |
| **III** | Work by children under fifteen is prohibited. |
| **XVI** | "Both **employers and workers** shall have the right to join together for the defense of their respective interests, by **forming unions**, professional associations, etc." |
| **XVII** | "The laws shall recognize **strikes** and lockouts as **rights** of workers and employers." |
| **XVIII** | Strikes are lawful when their purpose is "to attain **equilibrium between the several factors of production**." |
| **XXII** | If an employer fires a worker **for joining a union** or for taking part in a lawful strike, the employer must **reinstate them or pay three months' wages**. |

Sit with the dates. **The eight-hour day. The right to form a union. The right to strike. Protection against being fired for organizing.** All of it, in a national constitution, in **1917** — while in the United States, federal courts were still routinely issuing injunctions to break strikes, and would keep doing so until the 1930s.

**This is the fact that should break an assumption you probably didn't know you had.** A student in the US is quietly taught to sort countries into "advanced" and "developing," and to assume that worker protections flow *from* the first group *to* the second. On the specific question of when labor rights entered the supreme law of the land, **Mexico was first and the United States was late.**

**And now the hard part, which is the whole course.** Having the best labor rights on paper in the world in 1917 did not give Mexican workers strong unions. For most of the century that followed, it gave them something else entirely — and the gap between what Article 123 promised and what a Mexican worker could actually do is the subject of the next four sections.

**One more clause, because it becomes a villain later.** The original Article 123 also set up *who decides* labor disputes — clause **XX** sent them to a **Junta de Conciliación y Arbitraje** (a Conciliation and Arbitration Board) made up of "an equal number of workers and employers, and one government representative" (CPEUM, 1917/2015, art. 123, apartado A, cl. XX). A **tripartite board**: labor, capital, government. It sounds fair. Hold onto it. In 2017 Mexico abolished those boards, and Section 3 explains why.

> **A note on how to read this table.** Clause XX as quoted is the **pre-2017** text. Mexico amended Article 123 on **24 February 2017** to replace the tripartite boards with real labor courts (Diario Oficial de la Federación [DOF], 2017). Always check which version of a constitution you are reading.

:::reveal Mexico's constitution protected the right to form a union and to strike in 1917. The US Wagner Act did the same in 1935. What conclusion should you NOT draw from that? ||| That Mexican workers therefore had stronger unions than American workers. Rights on paper and power in a workplace are different things — and the whole point of this course is the distance between them. What you *should* conclude is narrower and still surprising: on the question of when labor rights entered the supreme law of the land, Mexico was eighteen years ahead of the United States, which should permanently complicate any "advanced vs. developing" sorting you were carrying around.

## Sources
- Constitución Política de los Estados Unidos Mexicanos. (1917, as amended). Cámara de Diputados. https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf
- Constitute Project. (n.d.). *Mexico's Constitution of 1917 with amendments through 2015* [English translation]. https://www.constituteproject.org/constitution/Mexico_2015
- Diario Oficial de la Federación. (2017, February 24). *Decreto por el que se declaran reformadas y adicionadas diversas disposiciones de los artículos 107 y 123 de la Constitución Política de los Estados Unidos Mexicanos, en materia de Justicia Laboral*. https://www.dof.gob.mx/nota_detalle.php?codigo=5472965&fecha=24/02/2017`,
    },
    {
      slug: "mexico-ctm-corporatism",
      section: "Section 1 · Rights on paper, before anybody else had them",
      title: "2 · The CTM: when the union is part of the governing party",
      recallContent: [
        {
          prompt: "In what year did labor rights — the eight-hour day, the right to unionize, the right to strike — enter Mexico's constitution? And what is the article called?",
          answer: "1917, in Article 123 of the Constitución Política de los Estados Unidos Mexicanos. That is eighteen years before the US Wagner Act (1935).",
        },
        {
          prompt: "Under the original Article 123, who decided labor disputes?",
          answer: "A Junta de Conciliación y Arbitraje — a tripartite board of equal numbers of workers and employers plus one government representative (clause XX). Mexico abolished these boards in the 2017 constitutional reform and replaced them with labor courts.",
        },
      ],
      body: `The anchor course taught you two kinds of union.

- The **free union** — an organization workers build themselves, which bargains against the employer, and which the state is supposed to leave alone (the US, Sweden, Germany).
- The **state union** — an organization that is an arm of the government, which you may join but may not found (China's ACFTU).

Mexico built a **third** kind, and it is genuinely distinct from both: a union that is a **constituent part of the governing political party**.

**How it happened.** In **1936**, under President **Lázaro Cárdenas**, Mexico's fragmented labor movement was gathered into a single national confederation: the **Confederación de Trabajadores de México** — the **CTM**. Its first general secretary was **Vicente Lombardo Toledano**. Two years later, in **1938**, the CTM was formally incorporated as the **labor sector** of the governing party (then the PRM, which became the **PRI** — the *Partido Revolucionario Institucional*) (Confederación de Trabajadores de México [CTM], n.d.).

And the PRI then governed Mexico, without interruption, for **about seventy-one years** — from 1929 until it lost the presidency in **2000**.

**Look carefully at what that arrangement does.** The CTM is a union. It is also a *wing of the government*. Its long-serving leader, **Fidel Velázquez**, ran it for most of the second half of the century.

So ask the anchor course's fourth question — *what happens to you if you try?* — and notice that in Mexico for most of the 20th century, the question had a strange answer. It wasn't that unions were **banned**. Mexico had unions. Mexico had *enormous* unions, with constitutional rights, the legal power to strike, and a seat inside the governing party.

**The problem was the opposite of a ban.** The problem was that the union might not be *yours*.

**The word for this system is *corporatism*.** In a corporatist system, the state does not smash the workers' organization; it **absorbs** it. Workers get an official channel — a real one, with real dues, real contracts, real officials, and real access to power. What they do not get is a *choice of channel*. And a labor movement that is structurally part of the government has a permanent conflict of interest, because its ally across the table is also its ally in the cabinet.

**This is the setup for everything that follows.** A country with:

1. The strongest labor rights on paper of any constitution in the hemisphere (1917), and
2. A dominant labor confederation fused to the party that ran the country (1938–2000), and
3. A **tripartite board** deciding every labor dispute — with the labor seat filled by that same confederation.

Out of those three things, Mexican employers and Mexican union officials built a device that this course exists to explain. It is called a **protection contract**, and it is the single strangest object in the whole Workers' Rights track: **a union contract whose purpose is to prevent unionization.**

> **Source note, and a habit worth keeping.** The CTM's founding dates here come partly from the CTM's own official history. The CTM is a **party to this story** — it is one of the organizations later accused of signing protection contracts, and it is the confederation whose contract workers voted out at General Motors Silao in 2021 (Section 4). Its own account of itself is useful for dates and names and should not be trusted for judgments. Label your sources; notice who is talking.

:::reveal The anchor course taught the "free union" and the "state union." What third model does Mexico's CTM represent, and why is it dangerous in a way that is easy to miss? ||| Corporatist unionism — a union that is a constituent sector of the governing party (the CTM joined the PRM/PRI's structure in 1938, and the PRI ruled for about 71 years). It is easy to miss because nothing is banned: the union is real, large, legal, and powerful. The danger is structural, not prohibitive — the workers' organization is fused to the state it is supposed to bargain against, so a worker's problem is not that there is no union but that the union is not answerable to them.

## Sources
- Confederación de Trabajadores de México. (n.d.). *Nuestra historia*. https://ctmoficial.org/nuestra-historia-2/ [The CTM's own account of its founding — a party to the disputes described in this course.]
- Gacek, S. A. (2019). Mexico's ratification of ILO Convention number 98 and the future of protection contracts. *Mexican Law Review, 12*(1), 157–178. https://doi.org/10.22201/iij.24485306e.2019.2.13642
- Constitución Política de los Estados Unidos Mexicanos. (1917, as amended). Cámara de Diputados. https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf`,
    },
    {
      slug: "mexico-section-1-quiz",
      section: "Section 1 · Rights on paper, before anybody else had them",
      title: "3 · Check yourself: 1917, and the union inside the party",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In what year did labor rights — including the eight-hour day and the right to strike — enter Mexico's constitution?",
            options: ["1917", "1935", "1936", "1994"],
            correctIndex: 0,
            explanation: "Article 123 of the Constitución Política de los Estados Unidos Mexicanos, promulgated in 1917 out of the Mexican Revolution. The US Wagner Act came eighteen years later, in 1935.",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "Which article of the Mexican Constitution is the labor article?",
            options: ["Article 123", "Article 23", "Article 31", "Article 98"],
            correctIndex: 0,
            explanation: "Article 123, in Title Six (Labor and Social Security). Apartado A governs the general employment relationship.",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "Article 123, clause XVI protects which right?",
            options: [
              "The right of both workers and employers to join together to defend their interests, by forming unions",
              "The right to a minimum wage set annually by the president",
              "The right of foreign companies to operate free of union interference",
              "The right to a jury trial in labor disputes",
            ],
            correctIndex: 0,
            explanation: "Clause XVI: 'Both employers and workers shall have the right to join together for the defense of their respective interests, by forming unions, professional associations, etc.'",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "Article 123, clause XVII does what?",
            options: [
              "Recognizes strikes and lockouts as rights of workers and employers",
              "Bans strikes in all industries deemed essential",
              "Requires a secret ballot before any strike",
              "Gives the president power to end any strike after 30 days",
            ],
            correctIndex: 0,
            explanation: "Clause XVII: 'The laws shall recognize strikes and lockouts as rights of workers and employers.' Note that it recognizes the employer's lockout as well as the worker's strike.",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "Under Article 123, what is an employer required to do if it fires a worker for joining a union or for taking part in a lawful strike?",
            options: [
              "Reinstate the worker, or pay them three months' wages",
              "Nothing — the constitution is silent on dismissals",
              "Pay a fine to the government",
              "Offer the worker a different job at the same company",
            ],
            correctIndex: 0,
            explanation: "Clause XXII. The remedy — reinstatement or three months' pay — has been in the constitution since 1917.",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "What is the correct conclusion to draw from the fact that Mexico constitutionalized labor rights in 1917 and the US passed the Wagner Act in 1935?",
            options: [
              "That the ordinary 'advanced vs. developing' sorting is unreliable on this question — but NOT that Mexican workers therefore had stronger unions",
              "That Mexican unions were therefore stronger than American unions throughout the 20th century",
              "That the United States copied Article 123 when it wrote the Wagner Act",
              "That constitutional rights always produce strong unions",
            ],
            correctIndex: 0,
            explanation: "Rights on paper and power in a workplace are different things. The gap between Article 123's promise and what a Mexican worker could actually do is the subject of the rest of the course.",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "Under the ORIGINAL Article 123, who decided a dispute between a worker and an employer?",
            options: [
              "A Junta de Conciliación y Arbitraje — a tripartite board of workers, employers, and one government representative",
              "A federal labor court staffed by career judges",
              "The Supreme Court of Mexico",
              "The union's own internal tribunal",
            ],
            correctIndex: 0,
            explanation: "Clause XX. The tripartite board sounds even-handed; Section 2 explains why, in a country where the dominant confederation sat in the governing party, it was not.",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "What does 'CTM' stand for, and what is it?",
            options: [
              "The Confederación de Trabajadores de México — the dominant labor confederation, founded 1936",
              "The Mexican labor ministry",
              "The federal body that registers unions and collective contracts",
              "The Mexican employers' federation",
            ],
            correctIndex: 0,
            explanation: "Founded in 1936 under President Lázaro Cárdenas, with Vicente Lombardo Toledano as its first general secretary.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "What happened to the CTM in 1938?",
            options: [
              "It was formally incorporated as the labor sector of the governing party (the PRM, later the PRI)",
              "It was banned by the government",
              "It merged with the Mexican Communist Party",
              "It won the right to bargain nationally across all industries",
            ],
            correctIndex: 0,
            explanation: "That incorporation is what makes Mexico's model a third kind — neither a free union nor a state union, but a union that is a constituent sector of the governing party.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "Roughly how long did the PRI hold the Mexican presidency without interruption?",
            options: ["About 71 years, until 2000", "About 20 years, until 1949", "About 40 years, until 1969", "It has never lost the presidency"],
            correctIndex: 0,
            explanation: "From 1929 to 2000. For that entire period, the country's dominant labor confederation was structurally part of the governing party.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "What is 'corporatism' in the labor sense?",
            options: [
              "A system in which the state absorbs the workers' organization into an official channel rather than banning it",
              "A system in which corporations are forbidden from recognizing unions",
              "A system in which unions are owned by shareholders",
              "A system in which every company must have a works council",
            ],
            correctIndex: 0,
            explanation: "The workers get a real channel with real dues, contracts and access to power — what they don't get is a choice of channel. Nothing is banned, which is exactly what makes it easy to miss.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "Why is a corporatist union structurally conflicted?",
            options: [
              "Because its ally across the bargaining table is also its ally in the cabinet",
              "Because it is legally forbidden to strike",
              "Because it cannot collect dues",
              "Because its members are all government employees",
            ],
            correctIndex: 0,
            explanation: "A labor movement that is part of the governing party must bargain against a state it belongs to. That is a permanent conflict of interest, not an occasional one.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "In 20th-century Mexico, what was the core problem facing a worker who wanted real representation?",
            options: [
              "Not that unions were banned — but that the union might not be answerable to them",
              "That the constitution did not protect the right to strike",
              "That collective bargaining was illegal",
              "That there were no unions at all",
            ],
            correctIndex: 0,
            explanation: "Mexico had unions — enormous ones, with constitutional rights and a seat inside the governing party. The problem was the opposite of a ban.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "Why does this course warn you to label the CTM's own official history as a source?",
            options: [
              "Because the CTM is a party to the disputes the course describes — useful for dates, not for judgments",
              "Because the CTM's website is written in Spanish",
              "Because the CTM no longer exists",
              "Because government sources are always more reliable than union sources",
            ],
            correctIndex: 0,
            explanation: "The CTM is one of the confederations later accused of signing protection contracts, and its contract at GM Silao was voted out in 2021. Notice who is talking.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "Which of these is the genuinely NEW object that Mexico contributes to the Workers' Rights track?",
            options: [
              "A union contract whose purpose is to prevent unionization",
              "A union that is banned by the state",
              "A union that runs the unemployment insurance system",
              "A union with seats on the company board",
            ],
            correctIndex: 0,
            explanation: "The protection contract — the subject of Section 2. The banned union, the Ghent system, and board co-determination belong to other courses in the track.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
        ],
      },
    },
  ],
};
