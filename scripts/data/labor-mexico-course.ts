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

    // ───────────────────── SECTION 2 · THE PROTECTION CONTRACT ─────────────────────
    {
      slug: "mexico-protection-contract",
      section: "Section 2 · The protection contract: a union that exists to prevent unions",
      title: "4 · The protection contract, explained precisely",
      body: `This is the lesson the course was built for. Read it slowly, because the object it describes is genuinely counter-intuitive and most people get it slightly wrong.

**A protection contract — *contrato de protección* — is a real, legally registered collective bargaining agreement, signed between a company and a union, which the company's workers have never heard of.**

Not a fake document. Not a forgery. A **valid, enforceable, registered union contract**, filed with the labor authorities, covering the workers at that workplace — negotiated *without their consent or their knowledge* (Gacek, 2019).

Now the detail that turns this from "corrupt" into something genuinely new:

> **It was frequently signed *before the company had hired anybody*.** As Gacek (2019) puts it, "in many cases, these agreements have been signed prior to a business commencing operations, even before the hiring of the workforce."

**Think about what that sentence means.** A factory is being built. There are no workers yet — not one. And the company signs a *collective bargaining agreement on behalf of the workers it has not yet hired*, with a union those future workers will never meet, setting the wages and conditions they will be offered on their first day.

The workers arrive. They have a union. They have a contract. **Nobody asked them anything.**

---

## Why would a company want a union contract?

This is the question that unlocks it. American students are trained to think a company's goal is *no union*. In Mexico, under this system, a company's goal was often **this union** — because a union contract you already have is the most effective possible defense against a union contract you don't want.

Here is the logic, and it is airtight:

1. Mexican law lets one collective bargaining agreement govern a workplace, held by one union — the *titularidad* (title) of the contract.
2. So if the workplace **already has** a registered agreement, a real union that shows up later cannot simply organize the workers and demand to bargain. **The seat is taken.**
3. To get in, the real union must first take the title *away* from the incumbent — a legal fight, against an opponent funded by the employer, in front of a tripartite board (remember clause XX) where the incumbent's confederation held the labor seat.

So the employer buys **labor peace**, permanently and cheaply. The protection union collects **dues** from workers who never chose it. And the workers get a contract they didn't negotiate, defended by a union that is being paid — in effect — to make sure nothing changes.

Gacek (2019) describes the arrangement bluntly: it involves unions "that profit from them by **selling 'protection' to employers**," and it "fosters total employer interference and dominance, making any legitimate, authentic and independent collective expression of worker demands at the bargaining table impossible."

---

## The thing to actually learn

Every other course in this track teaches you to ask **"is there a union?"**

Mexico teaches you that the question is worthless, and that the real question is:

> ### **Whose union is it?**

A workplace with 100% union coverage, a signed collective agreement, and dues deducted from every paycheck can be a workplace where the workers have **no voice whatsoever** — and where the union is one of the two things standing on the employer's side of the table.

**This is why the protection contract belongs in a workers' rights course and not just a corruption course.** It is not simply that someone was bribed. It is that *the institutional form of worker power was turned inside out and used as an instrument against workers*. The anchor course showed you unions that were crushed by the state (Poland), unions that were absorbed by the state (China), and unions that were built by workers (the US, Sweden). This is the fourth thing: **a union deployed by the employer.**

:::reveal A company signs a collective bargaining agreement before it has hired a single worker. Why would a company WANT a union contract? ||| Because a union contract it already holds is the best possible defense against one it doesn't want. Mexican law lets one registered agreement govern a workplace, held by one union — so if the seat is already taken by a friendly union, a real union that organizes the workers later cannot simply demand to bargain. It must first win the contract's title away from an incumbent funded by the employer. The company buys permanent labor peace; the protection union collects dues from workers who never chose it.

## Sources
- Gacek, S. A. (2019). Mexico's ratification of ILO Convention number 98 and the future of protection contracts. *Mexican Law Review, 12*(1), 157–178. https://doi.org/10.22201/iij.24485306e.2019.2.13642
- Ley Federal del Trabajo. (1970, as amended 2019). Cámara de Diputados. https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf
- Constitución Política de los Estados Unidos Mexicanos. (1917, as amended). Cámara de Diputados. https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf`,
    },
    {
      slug: "mexico-how-it-blocked-you",
      section: "Section 2 · The protection contract: a union that exists to prevent unions",
      title: "5 · Why you couldn't just vote it out — and how many there were",
      recallContent: [
        {
          prompt: "Define a protection contract in one sentence.",
          answer: "A real, legally registered collective bargaining agreement signed between a company and a union the workers have never heard of — often before the company has hired anyone — which then blocks a genuine union from bargaining, because the contract's seat is already taken.",
        },
        {
          prompt: "What is the question Mexico teaches you to ask, instead of 'is there a union?'",
          answer: "Whose union is it?",
        },
      ],
      body: `The obvious objection, and every student raises it: *fine — but the workers outnumber everybody. Why didn't they just vote the fake union out?*

Because of **how the vote worked**. And the cleanest way to prove what was wrong with the old procedure is to read what Mexico's reformers insisted on replacing it with.

## Read the fix, and you can infer the flaw

When Mexico rewrote its labor law in 2019 — and when it committed to that rewrite in the USMCA — the demand was extremely specific. Every vote had to be, in the law's exact words, **personal, free, direct, and secret** (*voto personal, libre, directo y secreto*) (Ley Federal del Trabajo [LFT], 1970/2019).

The United States and Mexico wrote the same requirement into the treaty. Under **USMCA Annex 23-A**, Mexico committed to legislate that before an initial collective agreement can be registered, an independent body must verify — by documents, direct consultation with workers, or **on-site inspection** — that:

> **(A) the worksite is operational,**
> (B) a copy of the collective bargaining agreement was made readily accessible to individual workers **prior to the vote**, and
> (C) a majority of workers covered by the agreement demonstrated support through a **personal, free, and secret vote**.

**Now read requirement (A) again.** A trade agreement between two countries contains a clause requiring somebody to go and check **that the factory exists and is running** before its union contract counts.

You do not write that sentence unless contracts were being registered for workplaces that were not operating. **Requirement (A) is the protection contract's fingerprint, preserved in treaty language.** And requirement (C) tells you, just as plainly, that the old vote was not secret.

**That is the answer to "why didn't they just vote it out."** A vote where your employer and the incumbent union can see how you voted is not a vote. It is a list of people to fire — and Article 123 clause XXII, which says you cannot be fired for union activity, is worth exactly as much as your ability to prove *why* you were let go.

Add the rest of the machinery from Section 1: disputes went to a **tripartite board** on which the dominant confederation held the labor seat; a challenger union had to win the contract's title through that board; and delay is itself a weapon, because workers cannot outlast a lawsuit and an employer can.

---

## So how many protection contracts were there? — an honest answer

Here is where this course does something you should demand of every course you take.

**Nobody knows, and this course is not going to make a number up.**

Gacek (2019) — a peer-reviewed article in the *Mexican Law Review*, published by Mexico's national university — says protection contracts are "**believed to** … make up the overwhelming majority of collective agreements in Mexico." *Believed to.* He gives **no figure**, and he is right not to, because there was no honest way to count them. A protection contract does not announce itself. It looks, on paper, exactly like a real one. **That is the entire point of it.**

You will nonetheless see confident numbers quoted. Be careful with them. In Section 3 you will meet a genuinely startling official statistic — that around **139,000** collective agreements were on Mexico's register in January 2023, and that the overwhelming majority of them **died** in 2023 because nobody put them to a worker vote (Secretaría del Trabajo y Previsión Social [STPS], 2023).

It is very tempting to say: *there — that's the count. That's how many protection contracts there were.*

**Don't.** An agreement can fail to be legitimized for reasons that have nothing to do with protection:

- the company **closed** years ago and the paper was never cleaned up;
- the union **didn't bother**, or couldn't manage the process;
- the workplace has **three employees** and nobody thought it mattered.

The number of contracts that died is a **ceiling**, not a count. It tells you the scale of the problem was **enormous** — that is beyond dispute, and it is the honest conclusion. It does not tell you the figure, and anybody who converts it into one is doing arithmetic on an assumption.

**Hold two things at once, which is the skill this whole track is teaching:** the practice was pervasive enough that Mexico rewrote its constitution, its labor law, and part of a trade treaty to stop it — *and* the exact number is not knowable, so you should not cite one.

:::reveal USMCA Annex 23-A requires an independent body to verify, before registering an initial collective agreement, that "the worksite is operational." What does the existence of that clause prove? ||| That collective agreements were being registered for workplaces that were not operating — i.e. contracts signed before the factory opened or hired anyone. It is the protection contract's fingerprint, preserved in the text of a trade agreement. (The clause requiring a "personal, free, and secret vote" tells you, just as plainly, that the old vote was not secret.)

## Sources
- Ley Federal del Trabajo. (1970, as amended by decree published May 1, 2019). Cámara de Diputados. https://www.diputados.gob.mx/LeyesBiblio/ref/lft/LFT_ref30_01may19.pdf
- Office of the United States Trade Representative. (n.d.). *Agreement between the United States of America, the United Mexican States, and Canada: Chapter 23 — Labor, Annex 23-A (Worker Representation in Collective Bargaining in Mexico)*. https://ustr.gov/sites/default/files/files/agreements/FTA/USMCA/Text/23-Labor.pdf
- Gacek, S. A. (2019). Mexico's ratification of ILO Convention number 98 and the future of protection contracts. *Mexican Law Review, 12*(1), 157–178. https://doi.org/10.22201/iij.24485306e.2019.2.13642
- Secretaría del Trabajo y Previsión Social. (2023, January 20). *100 días para concluir el plazo de legitimación de contratos colectivos*. Gobierno de México. https://www.gob.mx/stps/prensa/100-dias-para-concluir-el-plazo-de-legitimacion-de-contratos-colectivos`,
    },
    {
      slug: "mexico-section-2-quiz",
      section: "Section 2 · The protection contract: a union that exists to prevent unions",
      title: "6 · Check yourself: whose union is it?",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a protection contract (contrato de protección)?",
            options: [
              "A real, registered collective bargaining agreement signed between a company and a union the workers have never heard of",
              "A forged document with no legal standing",
              "An insurance policy a union buys to cover strike pay",
              "A government contract guaranteeing a factory's workers a minimum wage",
            ],
            correctIndex: 0,
            explanation: "The crucial point is that it is NOT a forgery. It is valid, enforceable and registered — negotiated without the workers' consent or knowledge (Gacek, 2019).",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "What was frequently true about WHEN a protection contract was signed?",
            options: [
              "Before the company had hired any workers at all — sometimes before it began operations",
              "Only after a union had won a secret-ballot election",
              "Only after a strike had already begun",
              "Exactly five years after the factory opened",
            ],
            correctIndex: 0,
            explanation: "Gacek (2019): 'In many cases, these agreements have been signed prior to a business commencing operations, even before the hiring of the workforce.'",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "Why would a company WANT to hold a union contract?",
            options: [
              "Because a contract it already holds blocks the one it doesn't want — the seat is taken",
              "Because Mexican law gives tax breaks to unionized firms",
              "Because unions pay companies for the right to represent their workers",
              "Because it is required before a company can export goods",
            ],
            correctIndex: 0,
            explanation: "One registered agreement governs the workplace, held by one union. If a friendly union already holds the title, a real union must first fight to take it away.",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "The Spanish term for holding the collective agreement — the thing a real union must take away from an incumbent — is:",
            options: ["titularidad (the title of the contract)", "constancia (the certificate)", "recuento (the count)", "amparo (the injunction)"],
            correctIndex: 0,
            explanation: "Because one union holds the title to the workplace's agreement, a challenger cannot simply organize and demand to bargain — it must win the title.",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "In the protection-contract system, who pays the protection union?",
            options: [
              "The workers, through dues deducted from workers who never chose that union",
              "The government, from a labor fund",
              "The ILO",
              "Nobody — protection unions are unpaid",
            ],
            correctIndex: 0,
            explanation: "The employer buys labor peace; the union collects dues from workers who never selected it. Gacek describes unions 'that profit from them by selling protection to employers.'",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "What question does Mexico teach you to ask, in place of 'is there a union?'",
            options: ["Whose union is it?", "How big is the union?", "Is the union legal?", "How old is the union?"],
            correctIndex: 0,
            explanation: "A workplace can have 100% coverage, a signed agreement and dues deducted from every paycheck — and workers with no voice at all.",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "Why is the protection contract a workers' RIGHTS problem and not merely a corruption problem?",
            options: [
              "Because the institutional form of worker power was turned inside out and used as an instrument against workers",
              "Because bribery is not illegal in Mexico",
              "Because unions are banned in Mexico",
              "Because it only affects foreign-owned companies",
            ],
            correctIndex: 0,
            explanation: "The anchor showed unions crushed by the state, absorbed by the state, and built by workers. This is a fourth object: a union deployed by the employer.",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "Mexico's 2019 reform requires that every union vote be, in the law's words:",
            options: [
              "personal, free, direct, and secret",
              "public, recorded, and witnessed by the employer",
              "conducted by the union's executive committee",
              "supervised by the ILO",
            ],
            correctIndex: 0,
            explanation: "Voto personal, libre, directo y secreto. Reading the fix tells you what the flaw was: the old vote was not secret.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "USMCA Annex 23-A requires an independent body to verify, before an initial collective agreement is registered, that — among other things — what?",
            options: [
              "That the worksite is operational",
              "That the company is profitable",
              "That the union has at least 1,000 members",
              "That the agreement has been translated into English",
            ],
            correctIndex: 0,
            explanation: "A trade treaty containing a clause requiring someone to check that the factory actually exists is the protection contract's fingerprint, preserved in treaty language.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "Why is a vote your employer can watch not really a vote?",
            options: [
              "Because it is effectively a list of people to fire, and proving WHY you were dismissed is very hard",
              "Because the ballots are always miscounted",
              "Because Mexican law forbids employers from attending",
              "Because workers cannot read the ballot",
            ],
            correctIndex: 0,
            explanation: "Article 123, clause XXII bans firing a worker for union activity — but that protection is worth only as much as your ability to prove the reason for your dismissal.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "How many protection contracts existed in Mexico?",
            options: [
              "Nobody knows — there is no reliable count, and this course refuses to invent one",
              "Exactly 139,000",
              "Exactly 119,000",
              "Fewer than 5,000",
            ],
            correctIndex: 0,
            explanation: "Gacek (2019) says they are 'believed to' make up the overwhelming majority of collective agreements and gives no figure — because a protection contract looks, on paper, exactly like a real one. That is the point of it.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "Around 139,000 collective agreements were on Mexico's register in January 2023, and the great majority died in 2023 for want of a worker vote. Why can't you call that the count of protection contracts?",
            options: [
              "Because an agreement can also die if the company closed, the union didn't bother, or the workplace was tiny — so it is a ceiling, not a count",
              "Because the figure was never published",
              "Because protection contracts were all legitimized successfully",
              "Because the number is far too small",
            ],
            correctIndex: 0,
            explanation: "The number tells you the scale was enormous — that is beyond dispute. It does not give you a figure, and converting it into one is doing arithmetic on an assumption.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "What is the source-evaluation habit this section is teaching?",
            options: [
              "Hold two things at once: the practice was pervasive AND the exact number is not knowable, so don't cite one",
              "Always prefer the largest available estimate",
              "Never cite academic sources",
              "If an official body publishes a number, it is a fact",
            ],
            correctIndex: 0,
            explanation: "Mexico rewrote its constitution, its labor law and part of a trade treaty to stop the practice. That establishes scale. It does not establish a count.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "Besides the open vote, what other feature of the old system made a protection contract hard to dislodge?",
            options: [
              "Disputes went to a tripartite board on which the dominant confederation held the labor seat — and delay itself favors the employer",
              "Challenger unions were illegal",
              "Only the president could authorize a union election",
              "Workers had no right to strike",
            ],
            correctIndex: 0,
            explanation: "The Junta de Conciliación y Arbitraje (Article 123, clause XX). Workers cannot outlast a lawsuit; an employer can.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "A protection contract is best described as:",
            options: [
              "A union contract whose function is to prevent unionization",
              "A contract that protects workers from being fired",
              "A contract between two unions",
              "A safety agreement covering hazardous workplaces",
            ],
            correctIndex: 0,
            explanation: "That inversion — the form of worker power used as a tool against workers — is why Mexico earns its slot in this track.",
            sourceLessonSlug: "mexico-protection-contract",
          },
        ],
      },
    },

    // ──────────────── SECTION 3 · THE 2019 REFORM, AND WHO ACTUALLY DROVE IT ────────────────
    {
      slug: "mexico-2019-reform",
      section: "Section 3 · The 2019 reform, and who actually drove it",
      title: "7 · Mexico rewrites its labor law — and the 68-year gap that explains why",
      body: `Between 2017 and 2019, Mexico dismantled the machinery you just spent a section learning. This lesson is what changed. The next one is what it cost the protection contracts.

## First, a date that tells the whole story

Mexico ratified **ILO Convention No. 87** — freedom of association — on **1 April 1950**. Early. Decades before many rich democracies.

Mexico ratified **ILO Convention No. 98** — the right to organize and bargain collectively — on **23 November 2018** (International Labour Organization [ILO], 2018).

**A sixty-eight-year gap.** And it is not an accident of paperwork, because of what C98 specifically requires. Convention 87 protects your right to *form* a union. **Convention 98 is the one that prohibits *employer interference and domination* of workers' organizations** — the one that says an employer may not run, fund, or dominate the union that is supposed to bargain against it.

That is a precise legal description of a protection contract. Mexico could sign the convention about *forming* unions in 1950. It could not sign the convention about *employer-dominated* unions until it was ready to give them up. **The ratification date is the confession.**

## What actually changed

**Step 1 — the constitution, 24 February 2017.** Mexico amended Articles 107 and 123 (DOF, 2017). The **Juntas de Conciliación y Arbitraje** — the tripartite boards of clause XX, the ones the dominant confederation sat on — were **abolished**. In their place:

| Old | New |
| --- | --- |
| Tripartite Juntas de Conciliación y Arbitraje | **Labor courts**, inside the judiciary, staffed by judges |
| Registration handled by those same boards | An **independent federal body** for registering unions and collective agreements |
| — | Compulsory **conciliation** before you may go to court |

**Step 2 — the law, 1 May 2019.** The implementing rewrite of the **Ley Federal del Trabajo** was published in the *Diario Oficial de la Federación* on **1 May 2019** — Mexico's Labor Day — and took effect the next day (LFT, 1970/2019). It created:

- The **Centro Federal de Conciliación y Registro Laboral (CFCRL)** — the Federal Center for Conciliation and Labor Registration. One national body that registers every union and every collective agreement, and verifies that the votes were real.
- The **personal, free, direct and secret vote** — for electing union leaders, for approving a first contract, for approving every revision, and (next lesson) for keeping the contract you already have.
- The **constancia de representatividad** — before a union may even seek to negotiate an initial collective agreement, it must obtain a certificate from the CFCRL showing it has the support of at least **30%** of the workers it wants to cover (Procuraduría Federal de la Defensa del Trabajo [PROFEDET], n.d.).
- A **public website** carrying every collective agreement in force — so that a worker can *read their own contract*, which is not a joke: under the old system, many could not.

**Look at what the 30% certificate does.** It attacks the protection contract at its root. You can no longer produce an agreement out of nowhere for a workforce that has not been consulted. You must first *demonstrate that actual workers want you there.*

---

## Now the part that is easy to get wrong, so get it right

You are about to learn (Section 4) about a US enforcement tool, and there is a very tempting story in which the United States forced Mexico to clean up its labor law. **That story is false, and the treaty itself says so.**

Read the opening line of **USMCA Annex 23-A**, the annex where Mexico's labor commitments live:

> "Mexico shall adopt and maintain the measures set out in paragraph 2 … **given that the Mexican government incoming in December 2018 has confirmed that each of these provisions is within the scope of the mandate provided to the government by the people of Mexico in the elections**." (Office of the United States Trade Representative [USTR], n.d., Annex 23-A, ¶1)

The treaty text explicitly grounds the reform in **a Mexican electoral mandate**. And check the calendar, because the chronology settles it:

| Date | Event |
| --- | --- |
| 1 July 2018 | Mexican general election |
| 23 Nov 2018 | Mexico ratifies ILO Convention 98 |
| 24 Feb 2017 → 1 May **2019** | Mexico's constitutional reform, then its new labor law |
| **1 July 2020** | **USMCA — and the enforcement mechanism — enters into force** |

**Mexico's labor law was rewritten more than a year before the trade agreement that supposedly forced it existed.** The reform came out of decades of work by Mexican independent unions, Mexican labor lawyers, Mexican courts and a Mexican election. It was passed by Mexico's Congress and published in Mexico's official gazette.

**What the trade agreement added was not the law. It was a way to make somebody obey it.** Hold that distinction — the entire next section depends on it.

:::reveal Mexico ratified ILO Convention 87 (freedom of association) in 1950 but Convention 98 in 2018. Why is that 68-year gap so revealing? ||| Because of what C98 specifically prohibits: employer interference in and domination of workers' organizations. That is a precise legal description of a protection contract. Mexico could ratify the convention about the right to *form* a union in 1950; it could not ratify the convention against *employer-dominated* unions until it was prepared to give them up. The ratification date is effectively a confession about what the system had been.

## Sources
- International Labour Organization. (2018, November 23). *Mexico ratifies the Right to Organise and Collective Bargaining Convention, 1949 (No. 98)*. https://www.ilo.org/resource/news/mexico-ratifies-right-organise-and-collective-bargaining-convention-1949-no
- International Labour Organization. (n.d.). *Ratifications for Mexico*. NORMLEX. https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:11200:0::NO::P11200_COUNTRY_ID:102764
- Diario Oficial de la Federación. (2017, February 24). *Decreto por el que se declaran reformadas y adicionadas diversas disposiciones de los artículos 107 y 123 de la Constitución Política de los Estados Unidos Mexicanos, en materia de Justicia Laboral*. https://www.dof.gob.mx/nota_detalle.php?codigo=5472965&fecha=24/02/2017
- Ley Federal del Trabajo. (1970, as amended by decree published May 1, 2019). Cámara de Diputados. https://www.diputados.gob.mx/LeyesBiblio/ref/lft/LFT_ref30_01may19.pdf
- Office of the United States Trade Representative. (n.d.). *USMCA Chapter 23 — Labor, Annex 23-A*. https://ustr.gov/sites/default/files/files/agreements/FTA/USMCA/Text/23-Labor.pdf
- Procuraduría Federal de la Defensa del Trabajo. (n.d.). *Constancia de Representatividad y aprobación de los contratos colectivos, pilares de la Reforma Laboral*. Gobierno de México. https://www.gob.mx/profedet/articulos/constancia-de-representatividad-y-aprobacion-de-los-contratos-colectivos-pilares-de-la-reforma-laboral`,
    },
    {
      slug: "mexico-legitimation",
      section: "Section 3 · The 2019 reform, and who actually drove it",
      title: "8 · Legitimation: every contract in the country goes to a vote, or dies",
      recallContent: [
        {
          prompt: "What body did the 2019 reform create to register every union and every collective agreement, and to verify that votes were real?",
          answer: "The Centro Federal de Conciliación y Registro Laboral (CFCRL) — the Federal Center for Conciliation and Labor Registration.",
        },
        {
          prompt: "What must a union now obtain before it can even seek to negotiate an initial collective agreement — and what threshold does it require?",
          answer: "A constancia de representatividad from the CFCRL, showing support from at least 30% of the workers it wants to cover.",
        },
        {
          prompt: "Which came first — Mexico's 2019 labor law, or the USMCA enforcement mechanism?",
          answer: "Mexico's law. The Ley Federal del Trabajo rewrite was published 1 May 2019; USMCA entered into force 1 July 2020. The trade agreement did not author the right — it added a way to enforce it.",
        },
      ],
      body: `Reforming the law going forward is the easy half. Mexico then did the hard half, and it is one of the most remarkable things any country has done to its own labor system.

**It put every collective bargaining agreement in the country on trial.**

## The rule

The 2019 reform gave existing agreements a **four-year deadline**. The commitment appears in the treaty in exactly these terms:

> "all **existing** collective bargaining agreements shall be **revised at least once during the four years** after the legislation goes into effect" — and shall not be terminated by that deadline "as long as a **majority of the workers** covered by the collective bargaining agreement **demonstrate support** for such agreement through a **personal, free, and secret vote**." (USTR, n.d., Annex 23-A, ¶2(f))

Mexican law calls this **legitimation** (*legitimación*). The mechanics, in plain terms:

1. Every collective agreement already on the books had to be **shown to the workers it covered** — the actual text, in advance.
2. The workers then voted on it, in a **personal, free, direct and secret** ballot, verified by the CFCRL.
3. **Majority yes → the contract lives**, and the CFCRL issues a certificate of legitimation.
4. **Majority no, or no vote at all → the contract dies.**

The deadline was **1 May 2023** — four years to the day after the law took effect.

**Understand how aggressive that is.** The Mexican state told every union in the country: *go and ask the workers whether they want you. If you can't, or won't, your contract is void.* No other country in this track has ever put its entire stock of collective agreements to a confidence vote of the workforce.

---

## What happened

**Start with a number that should stop you.** When the Federal Center actually digitized and audited the register, it found it did not know what was in it. Agreements had been described in the hundreds of thousands for years; after the audit, **139,000** collective agreements had **active registration** (STPS, 2023, 20 January). Everything else was duplicate, dead, or empty paper.

**A state that cannot say how many union contracts it has is telling you something about what those contracts were for.**

Then the clock ran out. The dated record:

| Date | Legitimized so far | Source |
| --- | --- | --- |
| **20 Jan 2023** (100 days left) | **12,641** contracts, via 23,845 consultations, out of **139,000** | STPS (official) |
| **~27 Apr 2023** (4 days left) | **15,742** legitimized; **287** rejected by workers | *La Jornada* (newspaper, reporting the tally) |
| **1 May 2023** | **Deadline.** | — |
| **2 May 2023** | Every agreement without a certificate of legitimation is **terminated** | CFCRL, published in the DOF |

Processes already under way on 1 May could be completed until **31 July 2023**, so the final figure is somewhat higher than the last column above (CFCRL, 2023).

**But the shape is unmistakable, and it is staggering.** Of roughly 139,000 registered collective bargaining agreements in Mexico, something on the order of **one in nine** was put to a vote of the workers and survived. **The overwhelming majority of Mexico's union contracts were never defended by anybody, and simply ceased to exist.**

Recall Section 2's discipline: that is a **ceiling on** the protection-contract problem, not a measurement of it. Some of those contracts died because the firm was long gone. But a country does not lose seven-eighths of its collective agreements overnight because of clerical untidiness. **Whatever the precise number was, it was very large.**

---

## The question every student asks next

*If my contract died, did I lose my wages?*

**No — and the law is explicit about it.** When an agreement was not legitimized, the union lost the contract: its administration, its dues, its privileges. But the **workers keep the wages, benefits and conditions** they already had; those carry over into their individual employment terms (CFCRL, 2023; STPS, n.d.).

**That design choice is worth admiring.** The reform was built so that killing a fake union could not be used to cut a real worker's pay — which is precisely the threat an employer would otherwise have made in the run-up to the vote. Remove that threat and the vote becomes free. **Good institutional design anticipates the retaliation.**

:::reveal Roughly 139,000 collective agreements were on Mexico's register; only about 16,000 were legitimized by the deadline. What did NOT happen to the workers whose contracts died? ||| They did not lose their pay. The union lost the contract — its administration, its dues and its privileges — but the workers keep the wages, benefits and conditions they already had, which carry over into their individual employment terms. The reform was deliberately built that way, so that an employer could not campaign against legitimation by threatening workers that a "no" vote would cut their wages.

## Sources
- Office of the United States Trade Representative. (n.d.). *USMCA Chapter 23 — Labor, Annex 23-A*. https://ustr.gov/sites/default/files/files/agreements/FTA/USMCA/Text/23-Labor.pdf
- Secretaría del Trabajo y Previsión Social. (2023, January 20). *100 días para concluir el plazo de legitimación de contratos colectivos*. Gobierno de México. https://www.gob.mx/stps/prensa/100-dias-para-concluir-el-plazo-de-legitimacion-de-contratos-colectivos
- Secretaría del Trabajo y Previsión Social. (2023, May 2). *Concluye etapa histórica de la Reforma Laboral*. Gobierno de México. https://www.gob.mx/stps/prensa/concluye-etapa-historica-de-la-reforma-laboral-332970
- Centro Federal de Conciliación y Registro Laboral. (2023, May 2). *Acuerdo por el que se dan a conocer los contratos colectivos de trabajo legitimados y aquellos que se dan por terminados*. Diario Oficial de la Federación. https://www.dof.gob.mx/2023/CFCRL/acuerdo-terminacion-CCT.pdf
- Secretaría del Trabajo y Previsión Social. (n.d.). *¿No se legitimó el contrato colectivo en tu empresa?* Gobierno de México. https://www.gob.mx/stps/documentos/no-se-legitimo-el-contrato-colectivo-en-tu-empresa
- *La Jornada*. (2023, April 29). *Validaron sólo 20 mil de 500 mil contratos colectivos de trabajo*. https://www.jornada.com.mx/notas/2023/04/29/sociedad/validaron-solo-20-mil-de-500-mil-contratos-colectivos-de-trabajo/ [Newspaper reporting of the running tally — cited for the late-April figure, which no official source published in real time.]`,
    },
    {
      slug: "mexico-section-3-quiz",
      section: "Section 3 · The 2019 reform, and who actually drove it",
      title: "9 · Check yourself: the reform and the reckoning",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Mexico ratified ILO Convention 87 in 1950 but Convention 98 only in 2018. What does Convention 98 specifically prohibit?",
            options: [
              "Employer interference in, and domination of, workers' organizations",
              "Child labor in hazardous industries",
              "Forced labor",
              "Strikes in essential public services",
            ],
            correctIndex: 0,
            explanation: "Which is a precise legal description of a protection contract. Mexico could ratify the convention about forming unions in 1950; it could not ratify the one against employer-dominated unions until it was ready to give them up.",
            sourceLessonSlug: "mexico-2019-reform",
          },
          {
            prompt: "On what date did Mexico ratify ILO Convention No. 98?",
            options: ["23 November 2018", "1 April 1950", "1 May 2019", "1 July 2020"],
            correctIndex: 0,
            explanation: "1 April 1950 is C87. 1 May 2019 is the labor-law decree. 1 July 2020 is USMCA's entry into force.",
            sourceLessonSlug: "mexico-2019-reform",
          },
          {
            prompt: "What did Mexico's constitutional reform of 24 February 2017 abolish?",
            options: [
              "The tripartite Juntas de Conciliación y Arbitraje, replacing them with labor courts inside the judiciary",
              "The right to strike",
              "Article 123 itself",
              "The Confederación de Trabajadores de México",
            ],
            correctIndex: 0,
            explanation: "The tripartite boards of clause XX — the ones the dominant confederation sat on — were replaced by judges, plus compulsory conciliation and an independent registration body.",
            sourceLessonSlug: "mexico-2019-reform",
          },
          {
            prompt: "What does CFCRL stand for, and what does it do?",
            options: [
              "The Centro Federal de Conciliación y Registro Laboral — it registers every union and collective agreement and verifies that votes were real",
              "The Mexican labor ministry",
              "The federal labor court of appeal",
              "The employers' conciliation council",
            ],
            correctIndex: 0,
            explanation: "One national registration body, created by the 2019 reform, replacing registration by the old tripartite boards.",
            sourceLessonSlug: "mexico-2019-reform",
          },
          {
            prompt: "What is a constancia de representatividad, and what threshold does it require?",
            options: [
              "A CFCRL certificate showing a union has the support of at least 30% of the workers it wants to cover, required before it may seek to negotiate an initial contract",
              "A certificate proving a union has been legally registered for at least five years",
              "A document showing 51% of workers voted for a strike",
              "A permit allowing a foreign union to operate in Mexico",
            ],
            correctIndex: 0,
            explanation: "It attacks the protection contract at its root: you can no longer produce an agreement out of nowhere for a workforce nobody consulted.",
            sourceLessonSlug: "mexico-2019-reform",
          },
          {
            prompt: "Which came FIRST?",
            options: [
              "Mexico's 2019 labor law (1 May 2019) — USMCA entered into force 1 July 2020",
              "USMCA's entry into force — Mexico legislated afterwards, under pressure",
              "They took effect on the same day",
              "The USMCA Rapid Response Mechanism, by two years",
            ],
            correctIndex: 0,
            explanation: "The chronology is the whole point. Mexico's labor law was rewritten more than a year before the trade agreement that supposedly forced it existed.",
            sourceLessonSlug: "mexico-2019-reform",
          },
          {
            prompt: "What does USMCA Annex 23-A, paragraph 1 say about WHY Mexico is adopting these measures?",
            options: [
              "That they are within 'the mandate provided to the government by the people of Mexico in the elections'",
              "That the United States required them as a condition of trade",
              "That the ILO ordered them",
              "That Mexican employers requested them",
            ],
            correctIndex: 0,
            explanation: "The treaty text itself grounds the reform in a Mexican electoral mandate. This is the sentence that kills the 'US cleaned up Mexico' story.",
            sourceLessonSlug: "mexico-2019-reform",
          },
          {
            prompt: "What is 'legitimation' (legitimación)?",
            options: [
              "The requirement that every EXISTING collective agreement be put to a free, secret, personal vote of the workers by 1 May 2023, or be terminated",
              "The process of registering a new union",
              "The government's formal recognition of a union's elected leadership",
              "The certification of a strike as lawful",
            ],
            correctIndex: 0,
            explanation: "Four years from the law taking effect (2 May 2019) to the deadline of 1 May 2023. Mexico put its entire stock of collective agreements to a confidence vote.",
            sourceLessonSlug: "mexico-legitimation",
          },
          {
            prompt: "What was the legitimation deadline?",
            options: ["1 May 2023", "1 July 2020", "31 December 2022", "23 November 2021"],
            correctIndex: 0,
            explanation: "Four years to the day after the reformed Ley Federal del Trabajo took effect. Processes already under way could be completed until 31 July 2023.",
            sourceLessonSlug: "mexico-legitimation",
          },
          {
            prompt: "How many collective agreements had ACTIVE registration in Mexico, once the Federal Center digitized and audited the register (STPS, January 2023)?",
            options: ["About 139,000", "About 550,000", "About 12,000", "About 4 million"],
            correctIndex: 0,
            explanation: "The register had been described in the hundreds of thousands. After the audit, 139,000 had active registration; the rest was duplicate, dead or empty paper.",
            sourceLessonSlug: "mexico-legitimation",
          },
          {
            prompt: "Roughly what share of Mexico's registered collective agreements survived legitimation?",
            options: [
              "On the order of one in nine — the overwhelming majority were never put to a vote and ceased to exist",
              "About three quarters",
              "Almost all of them",
              "Exactly half",
            ],
            correctIndex: 0,
            explanation: "About 15,742 legitimized of roughly 139,000 as of late April 2023. A country does not lose seven-eighths of its collective agreements overnight because of clerical untidiness.",
            sourceLessonSlug: "mexico-legitimation",
          },
          {
            prompt: "If a worker's collective agreement was NOT legitimized, what happened to their pay and benefits?",
            options: [
              "They kept them — the wages, benefits and conditions carry over into their individual employment terms",
              "They reverted to the statutory minimum wage",
              "They were frozen for four years",
              "They were cut by the same proportion as the union's dues",
            ],
            correctIndex: 0,
            explanation: "The union lost the contract — its administration, dues and privileges. The worker did not lose their pay. That was deliberate.",
            sourceLessonSlug: "mexico-legitimation",
          },
          {
            prompt: "Why was it good institutional design to guarantee that workers keep their pay even if the contract dies?",
            options: [
              "Because otherwise an employer could campaign against legitimation by threatening that a 'no' vote would cut wages — removing that threat makes the vote free",
              "Because it saved the government money",
              "Because the ILO required it",
              "Because it made the vote unnecessary",
            ],
            correctIndex: 0,
            explanation: "Good institutional design anticipates the retaliation. Killing a fake union must not be usable as a way to cut a real worker's pay.",
            sourceLessonSlug: "mexico-legitimation",
          },
          {
            prompt: "What does it tell you that Mexico's state could not say how many collective agreements it had until it audited the register?",
            options: [
              "Something about what many of those contracts were for — a register nobody maintained was a register nobody was using to represent anyone",
              "That Mexican record-keeping is uniquely bad",
              "That the agreements were all forged",
              "Nothing — every country has this problem",
            ],
            correctIndex: 0,
            explanation: "The state's own ignorance of its register is evidence about the system it was registering.",
            sourceLessonSlug: "mexico-legitimation",
          },
          {
            prompt: "Under legitimation, what happened if the workers simply were never asked to vote at all?",
            options: [
              "The contract died — no vote was the same as a lost vote",
              "The contract was automatically renewed",
              "The government held the vote on the union's behalf",
              "The employer could legitimize it unilaterally",
            ],
            correctIndex: 0,
            explanation: "Majority yes → the contract lives. Majority no, OR no vote at all → the contract is terminated. That is why so many simply ceased to exist.",
            sourceLessonSlug: "mexico-legitimation",
          },
        ],
      },
    },
  ],
};
