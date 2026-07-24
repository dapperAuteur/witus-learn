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
//     course deliberately teaches the ones that went BADLY: San Martín / Grupo México mine, Zacatecas
//     (Mexico won the panel; determination public 13 May 2024) and Manufacturas VU / VU Manufacturing,
//     Piedras Negras (remediation agreed — then the company closed the plant, 10 Oct 2023, ~400 workers).
//     GM Silao (2021–22) is the WIN, told without the US-saves-Mexico framing; the 2026 Faurecia request
//     (18 May 2026) shows the tool survived a change of US administration. A course that only taught GM
//     Silao would be advertising. NOTE: an earlier draft plan named a "BBB Manufacturing" petition the US
//     supposedly rejected in Sept 2022; that outcome could NOT be verified against USTR/DOL in authoring,
//     so it is NOT cited — teach only what the primary sources confirm (the course's own discipline).
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
    "The country course that teaches you to stop asking \"is there a union?\" and start asking \"whose union is it?\" Mexico put labor rights in its constitution in 1917, eighteen years before the United States passed the Wagner Act, and then spent most of a century with a union movement built into the ruling party. Out of that grew the protection contract: a collective agreement signed between a company and a union the workers had never heard of, sometimes before the factory had hired anybody, which then legally blocked a real union from organizing. This course teaches exactly how that worked, how Mexico's own 2019 labor reform set out to kill it (every existing contract had to win a free, secret, personal vote by 1 May 2023 or die), and how the USMCA's Rapid Response Labor Mechanism became the one international labor tool anywhere that actually bites, a tariff penalty aimed at a single factory. Then it teaches the mechanism's limits, including the cases the United States lost. Cited to the treaty text, the Mexican Constitution, the Ley Federal del Trabajo, Mexico's STPS and Federal Labor Center, USTR, and the US Department of Labor.",
  lessons: [
    // ───────────── SECTION 1 · RIGHTS ON PAPER, BEFORE ANYBODY ELSE HAD THEM ─────────────
    {
      slug: "mexico-article-123",
      section: "Section 1 · Rights on paper, before anybody else had them",
      title: "1 · 1917: Mexico put labor rights in its constitution first",
      body: `Start with a fact that reorganizes the map.

In the anchor course, *The History of Unions*, the great American turning point is **1935**, the year the **Wagner Act** made organizing a union a protected legal right in the United States.

Mexico got there **eighteen years earlier**, and it did not use a statute. It used its **constitution**.

The **Constitución Política de los Estados Unidos Mexicanos**, promulgated in **1917** out of the Mexican Revolution, contains **Article 123**, an entire article of the country's founding document devoted to labor. Not a law that a later Congress could quietly repeal. The constitution itself.

Read what is actually in it (Constitución Política de los Estados Unidos Mexicanos [CPEUM], 1917/2015, art. 123, apartado A):

| Clause | What it says |
| --- | --- |
| **I** | "The maximum duration of the working day shall be **eight hours**." |
| **III** | Work by children under fifteen is prohibited. |
| **XVI** | "Both **employers and workers** shall have the right to join together for the defense of their respective interests, by **forming unions**, professional associations, etc." |
| **XVII** | "The laws shall recognize **strikes** and lockouts as **rights** of workers and employers." |
| **XVIII** | Strikes are lawful when their purpose is "to attain **equilibrium between the several factors of production**." |
| **XXII** | If an employer fires a worker **for joining a union** or for taking part in a lawful strike, the employer must **reinstate them or pay three months' wages**. |

Sit with the dates. **The eight-hour day. The right to form a union. The right to strike. Protection against being fired for organizing.** All of it, in a national constitution, in **1917**, while in the United States, federal courts were still routinely issuing injunctions to break strikes, and would keep doing so until the 1930s.

**This is the fact that should break an assumption you probably didn't know you had.** A student in the US is quietly taught to sort countries into "advanced" and "developing," and to assume that worker protections flow *from* the first group *to* the second. On the specific question of when labor rights entered the supreme law of the land, **Mexico was first and the United States was late.**

**And now the hard part, which is the whole course.** Having the best labor rights on paper in the world in 1917 did not give Mexican workers strong unions. For most of the century that followed, it gave them something else entirely, and the gap between what Article 123 promised and what a Mexican worker could actually do is the subject of the next four sections.

**One more clause, because it becomes a villain later.** The original Article 123 also set up *who decides* labor disputes, clause **XX** sent them to a **Junta de Conciliación y Arbitraje** (a Conciliation and Arbitration Board) made up of "an equal number of workers and employers, and one government representative" (CPEUM, 1917/2015, art. 123, apartado A, cl. XX). A **tripartite board**: labor, capital, government. It sounds fair. Hold onto it. In 2017 Mexico abolished those boards, and Section 3 explains why.

> **A note on how to read this table.** Clause XX as quoted is the **pre-2017** text. Mexico amended Article 123 on **24 February 2017** to replace the tripartite boards with real labor courts (Diario Oficial de la Federación [DOF], 2017). Always check which version of a constitution you are reading.

:::reveal Mexico's constitution protected the right to form a union and to strike in 1917. The US Wagner Act did the same in 1935. What conclusion should you NOT draw from that? ||| That Mexican workers therefore had stronger unions than American workers. Rights on paper and power in a workplace are different things, and the whole point of this course is the distance between them. What you *should* conclude is narrower and still surprising: on the question of when labor rights entered the supreme law of the land, Mexico was eighteen years ahead of the United States, which should permanently complicate any "advanced vs. developing" sorting you were carrying around.

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
          prompt: "In what year did labor rights, the eight-hour day, the right to unionize, the right to strike, enter Mexico's constitution? And what is the article called?",
          answer: "1917, in Article 123 of the Constitución Política de los Estados Unidos Mexicanos. That is eighteen years before the US Wagner Act (1935).",
        },
        {
          prompt: "Under the original Article 123, who decided labor disputes?",
          answer: "A Junta de Conciliación y Arbitraje, a tripartite board of equal numbers of workers and employers plus one government representative (clause XX). Mexico abolished these boards in the 2017 constitutional reform and replaced them with labor courts.",
        },
      ],
      body: `The anchor course taught you two kinds of union.

- The **free union**, an organization workers build themselves, which bargains against the employer, and which the state is supposed to leave alone (the US, Sweden, Germany).
- The **state union**, an organization that is an arm of the government, which you may join but may not found (China's ACFTU).

Mexico built a **third** kind, and it is genuinely distinct from both: a union that is a **constituent part of the governing political party**.

**How it happened.** In **1936**, under President **Lázaro Cárdenas**, Mexico's fragmented labor movement was gathered into a single national confederation: the **Confederación de Trabajadores de México**, the **CTM**. Its first general secretary was **Vicente Lombardo Toledano**. Two years later, in **1938**, the CTM was formally incorporated as the **labor sector** of the governing party (then the PRM, which became the **PRI**, the *Partido Revolucionario Institucional*) (Confederación de Trabajadores de México [CTM], n.d.).

And the PRI then governed Mexico, without interruption, for **about seventy-one years**, from 1929 until it lost the presidency in **2000**.

**Look carefully at what that arrangement does.** The CTM is a union. It is also a *wing of the government*. Its long-serving leader, **Fidel Velázquez**, ran it for most of the second half of the century.

So ask the anchor course's fourth question, *what happens to you if you try?*, and notice that in Mexico for most of the 20th century, the question had a strange answer. It wasn't that unions were **banned**. Mexico had unions. Mexico had *enormous* unions, with constitutional rights, the legal power to strike, and a seat inside the governing party.

**The problem was the opposite of a ban.** The problem was that the union might not be *yours*.

**The word for this system is *corporatism*.** In a corporatist system, the state does not smash the workers' organization; it **absorbs** it. Workers get an official channel, a real one, with real dues, real contracts, real officials, and real access to power. What they do not get is a *choice of channel*. And a labor movement that is structurally part of the government has a permanent conflict of interest, because its ally across the table is also its ally in the cabinet.

**This is the setup for everything that follows.** A country with:

1. The strongest labor rights on paper of any constitution in the hemisphere (1917), and
2. A dominant labor confederation fused to the party that ran the country (1938-2000), and
3. A **tripartite board** deciding every labor dispute, with the labor seat filled by that same confederation.

Out of those three things, Mexican employers and Mexican union officials built a device that this course exists to explain. It is called a **protection contract**, and it is the single strangest object in the whole Workers' Rights track: **a union contract whose purpose is to prevent unionization.**

> **Source note, and a habit worth keeping.** The CTM's founding dates here come partly from the CTM's own official history. The CTM is a **party to this story** — it is one of the organizations later accused of signing protection contracts, and it is the confederation whose contract workers voted out at General Motors Silao in 2021 (Section 4). Its own account of itself is useful for dates and names and should not be trusted for judgments. Label your sources; notice who is talking.

:::reveal The anchor course taught the "free union" and the "state union." What third model does Mexico's CTM represent, and why is it dangerous in a way that is easy to miss? ||| Corporatist unionism, a union that is a constituent sector of the governing party (the CTM joined the PRM/PRI's structure in 1938, and the PRI ruled for about 71 years). It is easy to miss because nothing is banned: the union is real, large, legal, and powerful. The danger is structural, not prohibitive, the workers' organization is fused to the state it is supposed to bargain against, so a worker's problem is not that there is no union but that the union is not answerable to them.

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
            prompt: "In what year did labor rights, including the eight-hour day and the right to strike, enter Mexico's constitution?",
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
              "The right of workers and employers to form unions defending their interests",
              "The right to a minimum wage set annually by the president in person",
              "The right of foreign companies to operate free of union interference",
              "The right to a trial by jury in labor disputes over wages or firings",
            ],
            correctIndex: 0,
            explanation: "Clause XVI: 'Both employers and workers shall have the right to join together for the defense of their respective interests, by forming unions, professional associations, etc.'",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "Article 123, clause XVII does what?",
            options: [
              "Recognizes strikes and lockouts as rights of workers and employers",
              "Bans strikes outright in any industry deemed essential by law",
              "Requires a secret ballot of every worker before a lawful strike",
              "Gives the president the power to end any strike after 30 days",
            ],
            correctIndex: 0,
            explanation: "Clause XVII: 'The laws shall recognize strikes and lockouts as rights of workers and employers.' Note that it recognizes the employer's lockout as well as the worker's strike.",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "Under Article 123, what is an employer required to do if it fires a worker for joining a union or for taking part in a lawful strike?",
            options: [
              "Reinstate the worker, or pay them three months' wages",
              "Nothing, the constitution is silent on dismissals",
              "Pay a fine to the government",
              "Offer the worker a different job at the same company",
            ],
            correctIndex: 0,
            explanation: "Clause XXII. The remedy, reinstatement or three months' pay, has been in the constitution since 1917.",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "What is the correct conclusion to draw from the fact that Mexico constitutionalized labor rights in 1917 and the US passed the Wagner Act in 1935?",
            options: [
              "That 'advanced vs. developing' is unreliable here, but NOT that Mexican unions were stronger",
              "That Mexican unions were therefore stronger than American unions all through the 20th century",
              "That the United States copied Article 123 when Congress drafted the Wagner Act in 1935",
              "That writing labor rights into a constitution always produces strong unions on the ground",
            ],
            correctIndex: 0,
            explanation: "Rights on paper and power in a workplace are different things. The gap between Article 123's promise and what a Mexican worker could actually do is the subject of the rest of the course.",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "Under the ORIGINAL Article 123, who decided a dispute between a worker and an employer?",
            options: [
              "A Junta de Conciliación y Arbitraje, a tripartite board with a state seat",
              "A federal labor court inside the judiciary, staffed by career judges",
              "The Supreme Court of Mexico, sitting as a labor chamber in Mexico City",
              "The union's own internal tribunal, whose ruling could not be appealed",
            ],
            correctIndex: 0,
            explanation: "Clause XX. The tripartite board sounds even-handed; Section 2 explains why, in a country where the dominant confederation sat in the governing party, it was not.",
            sourceLessonSlug: "mexico-article-123",
          },
          {
            prompt: "What does 'CTM' stand for, and what is it?",
            options: [
              "The Confederación de Trabajadores de México, the top confederation",
              "The Mexican labor ministry, known formally as the Secretaría del Trabajo",
              "The federal body that registers every union and collective contract",
              "The Mexican employers' federation, founded at Monterrey in 1936",
            ],
            correctIndex: 0,
            explanation: "Founded in 1936 under President Lázaro Cárdenas, with Vicente Lombardo Toledano as its first general secretary.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "What happened to the CTM in 1938?",
            options: [
              "It became the labor sector of the governing party, later the PRI",
              "It was banned by the government and its leaders driven into exile",
              "It merged with the Mexican Communist Party and lost its charter",
              "It won the right to bargain nationally across all Mexican industries",
            ],
            correctIndex: 0,
            explanation: "That incorporation is what makes Mexico's model a third kind, neither a free union nor a state union, but a union that is a constituent sector of the governing party.",
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
              "A system in which the state absorbs labor into an official channel, not a ban",
              "A system in which corporations are forbidden from recognizing any union",
              "A system in which unions are owned by their shareholders and traded",
              "A system in which every company above a set size needs a works council",
            ],
            correctIndex: 0,
            explanation: "The workers get a real channel with real dues, contracts and access to power, what they don't get is a choice of channel. Nothing is banned, which is exactly what makes it easy to miss.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "Why is a corporatist union structurally conflicted?",
            options: [
              "Because its opponent across the table is also its ally in the cabinet",
              "Because it is legally forbidden to strike or to bargain over pay",
              "Because it cannot collect dues from the workers it represents",
              "Because its members are all employees of the federal government",
            ],
            correctIndex: 0,
            explanation: "A labor movement that is part of the governing party must bargain against a state it belongs to. That is a permanent conflict of interest, not an occasional one.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "In 20th-century Mexico, what was the core problem facing a worker who wanted real representation?",
            options: [
              "Not that unions were banned, but that the union answered to somebody else",
              "That the constitution did not protect the right to strike after 1938",
              "That collective bargaining was illegal outside the state oil sector",
              "That there were no unions at all in Mexican industry before 1970",
            ],
            correctIndex: 0,
            explanation: "Mexico had unions, enormous ones, with constitutional rights and a seat inside the governing party. The problem was the opposite of a ban.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "Why does this course warn you to label the CTM's own official history as a source?",
            options: [
              "Because the CTM is a party to these disputes, good for dates, not judgments",
              "Because the CTM's own website and archive are written only in Spanish",
              "Because the CTM no longer exists and cannot answer for its record",
              "Because government sources are always more reliable than union ones",
            ],
            correctIndex: 0,
            explanation: "The CTM is one of the confederations later accused of signing protection contracts, and its contract at GM Silao was voted out in 2021. Notice who is talking.",
            sourceLessonSlug: "mexico-ctm-corporatism",
          },
          {
            prompt: "Which of these is the genuinely NEW object that Mexico contributes to the Workers' Rights track?",
            options: [
              "A union contract whose purpose is to prevent unionization",
              "A union that is banned outright by the state it bargains with",
              "A union that runs the national unemployment insurance system",
              "A union holding half the seats on the company's supervisory board",
            ],
            correctIndex: 0,
            explanation: "The protection contract, the subject of Section 2. The banned union, the Ghent system, and board co-determination belong to other courses in the track.",
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

**A protection contract, *contrato de protección*, is a real, legally registered collective bargaining agreement, signed between a company and a union, which the company's workers have never heard of.**

Not a fake document. Not a forgery. A **valid, enforceable, registered union contract**, filed with the labor authorities, covering the workers at that workplace, negotiated *without their consent or their knowledge* (Gacek, 2019).

Now the detail that turns this from "corrupt" into something genuinely new:

> **It was frequently signed *before the company had hired anybody*.** As Gacek (2019) puts it, "in many cases, these agreements have been signed prior to a business commencing operations, even before the hiring of the workforce."

**Think about what that sentence means.** A factory is being built. There are no workers yet, not one. And the company signs a *collective bargaining agreement on behalf of the workers it has not yet hired*, with a union those future workers will never meet, setting the wages and conditions they will be offered on their first day.

The workers arrive. They have a union. They have a contract. **Nobody asked them anything.**

---

## Why would a company want a union contract?

This is the question that unlocks it. American students are trained to think a company's goal is *no union*. In Mexico, under this system, a company's goal was often **this union**, because a union contract you already have is the most effective possible defense against a union contract you don't want.

Here is the logic, and it is airtight:

1. Mexican law lets one collective bargaining agreement govern a workplace, held by one union, the *titularidad* (title) of the contract.
2. So if the workplace **already has** a registered agreement, a real union that shows up later cannot simply organize the workers and demand to bargain. **The seat is taken.**
3. To get in, the real union must first take the title *away* from the incumbent, a legal fight, against an opponent funded by the employer, in front of a tripartite board (remember clause XX) where the incumbent's confederation held the labor seat.

So the employer buys **labor peace**, permanently and cheaply. The protection union collects **dues** from workers who never chose it. And the workers get a contract they didn't negotiate, defended by a union that is being paid, in effect, to make sure nothing changes.

Gacek (2019) describes the arrangement bluntly: it involves unions "that profit from them by **selling 'protection' to employers**," and it "fosters total employer interference and dominance, making any legitimate, authentic and independent collective expression of worker demands at the bargaining table impossible."

---

## The thing to actually learn

Every other course in this track teaches you to ask **"is there a union?"**

Mexico teaches you that the question is worthless, and that the real question is:

> ### **Whose union is it?**

A workplace with 100% union coverage, a signed collective agreement, and dues deducted from every paycheck can be a workplace where the workers have **no voice whatsoever**, and where the union is one of the two things standing on the employer's side of the table.

**This is why the protection contract belongs in a workers' rights course and not just a corruption course.** It is not simply that someone was bribed. It is that *the institutional form of worker power was turned inside out and used as an instrument against workers*. The anchor course showed you unions that were crushed by the state (Poland), unions that were absorbed by the state (China), and unions that were built by workers (the US, Sweden). This is the fourth thing: **a union deployed by the employer.**

:::reveal A company signs a collective bargaining agreement before it has hired a single worker. Why would a company WANT a union contract? ||| Because a union contract it already holds is the best possible defense against one it doesn't want. Mexican law lets one registered agreement govern a workplace, held by one union, so if the seat is already taken by a friendly union, a real union that organizes the workers later cannot simply demand to bargain. It must first win the contract's title away from an incumbent funded by the employer. The company buys permanent labor peace; the protection union collects dues from workers who never chose it.

## Sources
- Gacek, S. A. (2019). Mexico's ratification of ILO Convention number 98 and the future of protection contracts. *Mexican Law Review, 12*(1), 157–178. https://doi.org/10.22201/iij.24485306e.2019.2.13642
- Ley Federal del Trabajo. (1970, as amended 2019). Cámara de Diputados. https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf
- Constitución Política de los Estados Unidos Mexicanos. (1917, as amended). Cámara de Diputados. https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf`,
    },
    {
      slug: "mexico-how-it-blocked-you",
      section: "Section 2 · The protection contract: a union that exists to prevent unions",
      title: "5 · Why you couldn't just vote it out, and how many there were",
      recallContent: [
        {
          prompt: "Define a protection contract in one sentence.",
          answer: "A real, legally registered collective bargaining agreement signed between a company and a union the workers have never heard of, often before the company has hired anyone, which then blocks a genuine union from bargaining, because the contract's seat is already taken.",
        },
        {
          prompt: "What is the question Mexico teaches you to ask, instead of 'is there a union?'",
          answer: "Whose union is it?",
        },
      ],
      body: `The obvious objection, and every student raises it: *fine, but the workers outnumber everybody. Why didn't they just vote the fake union out?*

Because of **how the vote worked**. And the cleanest way to prove what was wrong with the old procedure is to read what Mexico's reformers insisted on replacing it with.

## Read the fix, and you can infer the flaw

When Mexico rewrote its labor law in 2019, and when it committed to that rewrite in the USMCA, the demand was extremely specific. Every vote had to be, in the law's exact words, **personal, free, direct, and secret** (*voto personal, libre, directo y secreto*) (Ley Federal del Trabajo [LFT], 1970/2019).

The United States and Mexico wrote the same requirement into the treaty. Under **USMCA Annex 23-A**, Mexico committed to legislate that before an initial collective agreement can be registered, an independent body must verify, by documents, direct consultation with workers, or **on-site inspection**, that:

> **(A) the worksite is operational,**
> (B) a copy of the collective bargaining agreement was made readily accessible to individual workers **prior to the vote**, and
> (C) a majority of workers covered by the agreement demonstrated support through a **personal, free, and secret vote**.

**Now read requirement (A) again.** A trade agreement between two countries contains a clause requiring somebody to go and check **that the factory exists and is running** before its union contract counts.

You do not write that sentence unless contracts were being registered for workplaces that were not operating. **Requirement (A) is the protection contract's fingerprint, preserved in treaty language.** And requirement (C) tells you, just as plainly, that the old vote was not secret.

**That is the answer to "why didn't they just vote it out."** A vote where your employer and the incumbent union can see how you voted is not a vote. It is a list of people to fire, and Article 123 clause XXII, which says you cannot be fired for union activity, is worth exactly as much as your ability to prove *why* you were let go.

Add the rest of the machinery from Section 1: disputes went to a **tripartite board** on which the dominant confederation held the labor seat; a challenger union had to win the contract's title through that board; and delay is itself a weapon, because workers cannot outlast a lawsuit and an employer can.

---

## So how many protection contracts were there?, an honest answer

Here is where this course does something you should demand of every course you take.

**Nobody knows, and this course is not going to make a number up.**

Gacek (2019), a peer-reviewed article in the *Mexican Law Review*, published by Mexico's national university, says protection contracts are "**believed to** … make up the overwhelming majority of collective agreements in Mexico." *Believed to.* He gives **no figure**, and he is right not to, because there was no honest way to count them. A protection contract does not announce itself. It looks, on paper, exactly like a real one. **That is the entire point of it.**

You will nonetheless see confident numbers quoted. Be careful with them. In Section 3 you will meet a genuinely startling official statistic, that around **139,000** collective agreements were on Mexico's register in January 2023, and that the overwhelming majority of them **died** in 2023 because nobody put them to a worker vote (Secretaría del Trabajo y Previsión Social [STPS], 2023).

It is very tempting to say: *there, that's the count. That's how many protection contracts there were.*

**Don't.** An agreement can fail to be legitimized for reasons that have nothing to do with protection:

- the company **closed** years ago and the paper was never cleaned up;
- the union **didn't bother**, or couldn't manage the process;
- the workplace has **three employees** and nobody thought it mattered.

The number of contracts that died is a **ceiling**, not a count. It tells you the scale of the problem was **enormous**, that is beyond dispute, and it is the honest conclusion. It does not tell you the figure, and anybody who converts it into one is doing arithmetic on an assumption.

**Hold two things at once, which is the skill this whole track is teaching:** the practice was pervasive enough that Mexico rewrote its constitution, its labor law, and part of a trade treaty to stop it, *and* the exact number is not knowable, so you should not cite one.

:::reveal USMCA Annex 23-A requires an independent body to verify, before registering an initial collective agreement, that "the worksite is operational." What does the existence of that clause prove? ||| That collective agreements were being registered for workplaces that were not operating, i.e. contracts signed before the factory opened or hired anyone. It is the protection contract's fingerprint, preserved in the text of a trade agreement. (The clause requiring a "personal, free, and secret vote" tells you, just as plainly, that the old vote was not secret.)

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
              "A real, registered agreement signed with a union the workers never heard of",
              "A forged bargaining agreement, void in law the moment it is discovered",
              "An insurance policy a union buys to cover strike pay for its members",
              "A government contract guaranteeing a factory's workers a minimum wage",
            ],
            correctIndex: 0,
            explanation: "The crucial point is that it is NOT a forgery. It is valid, enforceable and registered, negotiated without the workers' consent or knowledge (Gacek, 2019).",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "What was frequently true about WHEN a protection contract was signed?",
            options: [
              "Before the company had hired any workers, sometimes before it opened",
              "Only after a union had won a secret-ballot election among the staff",
              "Only after a strike had already begun and been declared lawful",
              "Exactly five years after the factory opened its doors, at renewal",
            ],
            correctIndex: 0,
            explanation: "Gacek (2019): 'In many cases, these agreements have been signed prior to a business commencing operations, even before the hiring of the workforce.'",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "Why would a company WANT to hold a union contract?",
            options: [
              "Because the contract it already holds blocks the one it doesn't want",
              "Because Mexican law gives tax breaks to firms that are unionized",
              "Because unions pay companies for the right to represent their workers",
              "Because a union contract is required before a company can export",
            ],
            correctIndex: 0,
            explanation: "One registered agreement governs the workplace, held by one union. If a friendly union already holds the title, a real union must first fight to take it away.",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "The Spanish term for holding the collective agreement, the thing a real union must take away from an incumbent, is:",
            options: [
              "titularidad (the title of the contract)",
              "constancia (the certificate of support)",
              "recuento (the counting of the votes)",
              "amparo (the constitutional injunction)",
            ],
            correctIndex: 0,
            explanation: "Because one union holds the title to the workplace's agreement, a challenger cannot simply organize and demand to bargain, it must win the title.",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "In the protection-contract system, who pays the protection union?",
            options: [
              "The workers, through dues taken from workers who never chose it",
              "The government, out of a federal fund kept for labor peace",
              "The ILO, from its technical assistance budget in Geneva",
              "Nobody at all, protection unions are unpaid volunteer bodies",
            ],
            correctIndex: 0,
            explanation: "The employer buys labor peace; the union collects dues from workers who never selected it. Gacek describes unions 'that profit from them by selling protection to employers.'",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "What question does Mexico teach you to ask, in place of 'is there a union?'",
            options: ["Whose union is it?", "How big is the union?", "Is the union legal?", "How old is the union?"],
            correctIndex: 0,
            explanation: "A workplace can have 100% coverage, a signed agreement and dues deducted from every paycheck, and workers with no voice at all.",
            sourceLessonSlug: "mexico-protection-contract",
          },
          {
            prompt: "Why is the protection contract a workers' RIGHTS problem and not merely a corruption problem?",
            options: [
              "Because the form of worker power was inverted into a tool against them",
              "Because bribery of a union officer is not a crime in Mexican law",
              "Because independent unions are banned outright under Mexican law",
              "Because it only affects foreign-owned companies along the border",
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
            prompt: "USMCA Annex 23-A requires an independent body to verify, before an initial collective agreement is registered, that, among other things, what?",
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
              "Because it is a list of people to fire, and proving WHY is very hard",
              "Because the ballots in an open vote are always miscounted by hand",
              "Because Mexican law forbids an employer from attending the count",
              "Because most workers cannot read the ballot without a translator",
            ],
            correctIndex: 0,
            explanation: "Article 123, clause XXII bans firing a worker for union activity, but that protection is worth only as much as your ability to prove the reason for your dismissal.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "How many protection contracts existed in Mexico?",
            options: [
              "Nobody knows, no reliable count exists and none should be invented",
              "Exactly 139,000, the figure on Mexico's January 2023 register",
              "Exactly 119,000, the number that failed legitimation in 2023",
              "Fewer than 5,000, according to the Federal Center's 2023 audit",
            ],
            correctIndex: 0,
            explanation: "Gacek (2019) says they are 'believed to' make up the overwhelming majority of collective agreements and gives no figure, because a protection contract looks, on paper, exactly like a real one. That is the point of it.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "Around 139,000 collective agreements were on Mexico's register in January 2023, and the great majority died in 2023 for want of a worker vote. Why can't you call that the count of protection contracts?",
            options: [
              "Because a contract can also die if the firm closed or nobody bothered, so it is a ceiling",
              "Because the figure was never published by the labor ministry or the Federal Center",
              "Because every protection contract was successfully legitimized by a vote in 2023",
              "Because the number is far too small for a national workforce the size of Mexico's",
            ],
            correctIndex: 0,
            explanation: "The number tells you the scale was enormous, that is beyond dispute. It does not give you a figure, and converting it into one is doing arithmetic on an assumption.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "What is the source-evaluation habit this section is teaching?",
            options: [
              "Hold two ideas at once: the practice was pervasive AND the count is unknowable",
              "Always prefer the largest available estimate you can find in the literature",
              "Never cite academic sources at all, rely only on the official register",
              "If an official body publishes a number, treat it as an established fact",
            ],
            correctIndex: 0,
            explanation: "Mexico rewrote its constitution, its labor law and part of a trade treaty to stop the practice. That establishes scale. It does not establish a count.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "Besides the open vote, what other feature of the old system made a protection contract hard to dislodge?",
            options: [
              "Disputes went to a board where the dominant confederation held the labor seat",
              "Challenger unions were illegal unless the incumbent union agreed first",
              "Only the president of the republic could authorize a representation vote",
              "Workers had no right to strike against an already registered agreement",
            ],
            correctIndex: 0,
            explanation: "The Junta de Conciliación y Arbitraje (Article 123, clause XX). Workers cannot outlast a lawsuit; an employer can.",
            sourceLessonSlug: "mexico-how-it-blocked-you",
          },
          {
            prompt: "A protection contract is best described as:",
            options: [
              "A union contract whose function is to prevent unionization",
              "A contract that protects workers from being fired at will",
              "A contract between two rival unions dividing up a workplace",
              "A safety agreement covering hazardous workplaces only",
            ],
            correctIndex: 0,
            explanation: "That inversion, the form of worker power used as a tool against workers, is why Mexico earns its slot in this track.",
            sourceLessonSlug: "mexico-protection-contract",
          },
        ],
      },
    },

    // ──────────────── SECTION 3 · THE 2019 REFORM, AND WHO ACTUALLY DROVE IT ────────────────
    {
      slug: "mexico-2019-reform",
      section: "Section 3 · The 2019 reform, and who actually drove it",
      title: "7 · Mexico rewrites its labor law, and the 68-year gap that explains why",
      body: `Between 2017 and 2019, Mexico dismantled the machinery you just spent a section learning. This lesson is what changed. The next one is what it cost the protection contracts.

## First, a date that tells the whole story

Mexico ratified **ILO Convention No. 87**, freedom of association, on **1 April 1950**. Early. Decades before many rich democracies.

Mexico ratified **ILO Convention No. 98**, the right to organize and bargain collectively, on **23 November 2018** (International Labour Organization [ILO], 2018).

**A sixty-eight-year gap.** And it is not an accident of paperwork, because of what C98 specifically requires. Convention 87 protects your right to *form* a union. **Convention 98 is the one that prohibits *employer interference and domination* of workers' organizations**, the one that says an employer may not run, fund, or dominate the union that is supposed to bargain against it.

That is a precise legal description of a protection contract. Mexico could sign the convention about *forming* unions in 1950. It could not sign the convention about *employer-dominated* unions until it was ready to give them up. **The ratification date is the confession.**

## What actually changed

**Step 1, the constitution, 24 February 2017.** Mexico amended Articles 107 and 123 (DOF, 2017). The **Juntas de Conciliación y Arbitraje**, the tripartite boards of clause XX, the ones the dominant confederation sat on, were **abolished**. In their place:

| Old | New |
| --- | --- |
| Tripartite Juntas de Conciliación y Arbitraje | **Labor courts**, inside the judiciary, staffed by judges |
| Registration handled by those same boards | An **independent federal body** for registering unions and collective agreements |
|, | Compulsory **conciliation** before you may go to court |

**Step 2, the law, 1 May 2019.** The implementing rewrite of the **Ley Federal del Trabajo** was published in the *Diario Oficial de la Federación* on **1 May 2019**, Mexico's Labor Day, and took effect the next day (LFT, 1970/2019). It created:

- The **Centro Federal de Conciliación y Registro Laboral (CFCRL)**, the Federal Center for Conciliation and Labor Registration. One national body that registers every union and every collective agreement, and verifies that the votes were real.
- The **personal, free, direct and secret vote**, for electing union leaders, for approving a first contract, for approving every revision, and (next lesson) for keeping the contract you already have.
- The **constancia de representatividad**, before a union may even seek to negotiate an initial collective agreement, it must obtain a certificate from the CFCRL showing it has the support of at least **30%** of the workers it wants to cover (Procuraduría Federal de la Defensa del Trabajo [PROFEDET], n.d.).
- A **public website** carrying every collective agreement in force, so that a worker can *read their own contract*, which is not a joke: under the old system, many could not.

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
| **1 July 2020** | **USMCA, and the enforcement mechanism, enters into force** |

**Mexico's labor law was rewritten more than a year before the trade agreement that supposedly forced it existed.** The reform came out of decades of work by Mexican independent unions, Mexican labor lawyers, Mexican courts and a Mexican election. It was passed by Mexico's Congress and published in Mexico's official gazette.

**What the trade agreement added was not the law. It was a way to make somebody obey it.** Hold that distinction, the entire next section depends on it.

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
          answer: "The Centro Federal de Conciliación y Registro Laboral (CFCRL), the Federal Center for Conciliation and Labor Registration.",
        },
        {
          prompt: "What must a union now obtain before it can even seek to negotiate an initial collective agreement, and what threshold does it require?",
          answer: "A constancia de representatividad from the CFCRL, showing support from at least 30% of the workers it wants to cover.",
        },
        {
          prompt: "Which came first, Mexico's 2019 labor law, or the USMCA enforcement mechanism?",
          answer: "Mexico's law. The Ley Federal del Trabajo rewrite was published 1 May 2019; USMCA entered into force 1 July 2020. The trade agreement did not author the right, it added a way to enforce it.",
        },
      ],
      body: `Reforming the law going forward is the easy half. Mexico then did the hard half, and it is one of the most remarkable things any country has done to its own labor system.

**It put every collective bargaining agreement in the country on trial.**

## The rule

The 2019 reform gave existing agreements a **four-year deadline**. The commitment appears in the treaty in exactly these terms:

> "all **existing** collective bargaining agreements shall be **revised at least once during the four years** after the legislation goes into effect" — and shall not be terminated by that deadline "as long as a **majority of the workers** covered by the collective bargaining agreement **demonstrate support** for such agreement through a **personal, free, and secret vote**." (USTR, n.d., Annex 23-A, ¶2(f))

Mexican law calls this **legitimation** (*legitimación*). The mechanics, in plain terms:

1. Every collective agreement already on the books had to be **shown to the workers it covered**, the actual text, in advance.
2. The workers then voted on it, in a **personal, free, direct and secret** ballot, verified by the CFCRL.
3. **Majority yes → the contract lives**, and the CFCRL issues a certificate of legitimation.
4. **Majority no, or no vote at all → the contract dies.**

The deadline was **1 May 2023**, four years to the day after the law took effect.

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
| **1 May 2023** | **Deadline.** |, |
| **2 May 2023** | Every agreement without a certificate of legitimation is **terminated** | CFCRL, published in the DOF |

Processes already under way on 1 May could be completed until **31 July 2023**, so the final figure is somewhat higher than the last column above (CFCRL, 2023).

**But the shape is unmistakable, and it is staggering.** Of roughly 139,000 registered collective bargaining agreements in Mexico, something on the order of **one in nine** was put to a vote of the workers and survived. **The overwhelming majority of Mexico's union contracts were never defended by anybody, and simply ceased to exist.**

Recall Section 2's discipline: that is a **ceiling on** the protection-contract problem, not a measurement of it. Some of those contracts died because the firm was long gone. But a country does not lose seven-eighths of its collective agreements overnight because of clerical untidiness. **Whatever the precise number was, it was very large.**

---

## The question every student asks next

*If my contract died, did I lose my wages?*

**No, and the law is explicit about it.** When an agreement was not legitimized, the union lost the contract: its administration, its dues, its privileges. But the **workers keep the wages, benefits and conditions** they already had; those carry over into their individual employment terms (CFCRL, 2023; STPS, n.d.).

**That design choice is worth admiring.** The reform was built so that killing a fake union could not be used to cut a real worker's pay, which is precisely the threat an employer would otherwise have made in the run-up to the vote. Remove that threat and the vote becomes free. **Good institutional design anticipates the retaliation.**

:::reveal Roughly 139,000 collective agreements were on Mexico's register; only about 16,000 were legitimized by the deadline. What did NOT happen to the workers whose contracts died? ||| They did not lose their pay. The union lost the contract, its administration, its dues and its privileges, but the workers keep the wages, benefits and conditions they already had, which carry over into their individual employment terms. The reform was deliberately built that way, so that an employer could not campaign against legitimation by threatening workers that a "no" vote would cut their wages.

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
              "Employer interference in and domination of workers' organizations",
              "Child labor in mining, farming and other hazardous industries",
              "Forced labor and debt bondage, including on farms and in mines",
              "Strikes in essential public services such as water and power",
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
              "The tripartite Juntas de Conciliación y Arbitraje, replaced by courts",
              "The right to strike in every industry under federal jurisdiction",
              "Article 123 itself, leaving labor rights to ordinary legislation",
              "The Confederación de Trabajadores de México and its legal charter",
            ],
            correctIndex: 0,
            explanation: "The tripartite boards of clause XX, the ones the dominant confederation sat on, were replaced by judges, plus compulsory conciliation and an independent registration body.",
            sourceLessonSlug: "mexico-2019-reform",
          },
          {
            prompt: "What does CFCRL stand for, and what does it do?",
            options: [
              "The Centro Federal de Conciliación y Registro Laboral, the registrar",
              "The Mexican labor ministry, which drafts the federal labor law",
              "The federal court of appeal for labor cases, sitting in Mexico City",
              "The employers' conciliation council, a private arbitration body",
            ],
            correctIndex: 0,
            explanation: "One national registration body, created by the 2019 reform, replacing registration by the old tripartite boards.",
            sourceLessonSlug: "mexico-2019-reform",
          },
          {
            prompt: "What is a constancia de representatividad, and what threshold does it require?",
            options: [
              "A CFCRL certificate that a union has support from at least 30% of the workers",
              "A certificate proving a union has been registered for at least five years",
              "A document showing that 51% of a plant's workers voted to strike lawfully",
              "A permit letting a foreign union operate lawfully inside Mexican plants",
            ],
            correctIndex: 0,
            explanation: "It attacks the protection contract at its root: you can no longer produce an agreement out of nowhere for a workforce nobody consulted.",
            sourceLessonSlug: "mexico-2019-reform",
          },
          {
            prompt: "Which came FIRST?",
            options: [
              "Mexico's 2019 labor law (1 May 2019), USMCA entered into force 1 July 2020",
              "USMCA's entry into force, Mexico legislated afterwards, under pressure",
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
              "That they fulfil the mandate the people of Mexico gave in the elections",
              "That the United States required them as a condition of the trade deal",
              "That the ILO ordered them after a formal complaint by U.S. unions",
              "That Mexican employers requested them in order to attract investment",
            ],
            correctIndex: 0,
            explanation: "The treaty text itself grounds the reform in a Mexican electoral mandate. This is the sentence that kills the 'US cleaned up Mexico' story.",
            sourceLessonSlug: "mexico-2019-reform",
          },
          {
            prompt: "What is 'legitimation' (legitimación)?",
            options: [
              "Every EXISTING agreement had to win a free secret worker vote by 1 May 2023",
              "The process of registering a brand-new union with the Federal Center",
              "The government's formal recognition of a union's elected leadership",
              "The certification by a federal labor court that a given strike is lawful",
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
              "On the order of one in nine, most were never put to a vote at all",
              "About three quarters of the register, most contracts survived",
              "Almost all of them, only a few hundred were ever terminated",
              "Exactly half of them, about 70,000 contracts out of 139,000",
            ],
            correctIndex: 0,
            explanation: "About 15,742 legitimized of roughly 139,000 as of late April 2023. A country does not lose seven-eighths of its collective agreements overnight because of clerical untidiness.",
            sourceLessonSlug: "mexico-legitimation",
          },
          {
            prompt: "If a worker's collective agreement was NOT legitimized, what happened to their pay and benefits?",
            options: [
              "They kept them, pay and conditions carry over into individual terms",
              "They dropped at once to the statutory minimum wage and no more",
              "They were frozen at their old level for a further four years",
              "They were cut by the same proportion as the union's lost dues",
            ],
            correctIndex: 0,
            explanation: "The union lost the contract, its administration, dues and privileges. The worker did not lose their pay. That was deliberate.",
            sourceLessonSlug: "mexico-legitimation",
          },
          {
            prompt: "Why was it good institutional design to guarantee that workers keep their pay even if the contract dies?",
            options: [
              "Because otherwise an employer could threaten that a 'no' vote would cut wages",
              "Because it saved the federal government money on inspections and courts",
              "Because the ILO demanded it under Convention 98, which Mexico ratified",
              "Because it made holding the legitimation vote unnecessary for most plants",
            ],
            correctIndex: 0,
            explanation: "Good institutional design anticipates the retaliation. Killing a fake union must not be usable as a way to cut a real worker's pay.",
            sourceLessonSlug: "mexico-legitimation",
          },
          {
            prompt: "What does it tell you that Mexico's state could not say how many collective agreements it had until it audited the register?",
            options: [
              "A register nobody maintained was one nobody used to represent anyone",
              "That Mexican record-keeping is uniquely bad among big economies",
              "That the agreements sitting on that register were all forgeries",
              "Nothing much, every country has this problem with its registers",
            ],
            correctIndex: 0,
            explanation: "The state's own ignorance of its register is evidence about the system it was registering.",
            sourceLessonSlug: "mexico-legitimation",
          },
          {
            prompt: "Under legitimation, what happened if the workers simply were never asked to vote at all?",
            options: [
              "The contract died, no vote was the same as a lost vote",
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

    // ─────────── SECTION 4 · THE TRADE DEAL THAT CAME FOR IT: RAPID RESPONSE ───────────
    {
      slug: "mexico-rrm-how-it-works",
      section: "Section 4 · The trade deal that came for it: the Rapid Response Mechanism",
      title: "10 · The Rapid Response Mechanism: an international labor rule with teeth",
      body: `The anchor course, *The History of Unions*, ends on a bleak note. Its last big lesson is the **International Labour Organization**, the world's labor floor, and the punchline is that the floor **is made of paper**. The ILO can investigate, report, convene a Commission of Inquiry, and *name* what it found. What it cannot do is make anyone pay. It has no fines, no court, no tariffs, no police.

**This lesson is the exception to that bleakness, the one place in the whole Workers' Rights track where an international labor rule acquired teeth.** It is not a treaty about labor in the abstract. It is a clause in a **trade** agreement, and it bites a single factory in the wallet.

## What it is

When the United States, Mexico, and Canada replaced NAFTA with the **USMCA** (the *Tratado entre México, Estados Unidos y Canadá*, T-MEC, in force **1 July 2020**), they attached to the dispute-settlement chapter a new device: the **Facility-Specific Rapid-Response Labor Mechanism**, in **Annex 31-A** (USTR, n.d.).

Read the name slowly, because two words in it are the whole innovation:

- **"Facility-Specific."** Every other international labor tool acts on a *country*. This one acts on **one factory**. It lets one government ask the other to review whether the workers at a **single named worksite** are being denied the right to **freedom of association and collective bargaining**.
- **"Rapid."** A World Trade Organization case takes years. This is built to run in **weeks**.

And one more thing the name does not say, which matters: **Annex 31-A binds only the United States and Mexico.** (There is a separate, parallel Annex 31-B between Canada and Mexico.) It is not a general treaty duty. It is a specific, bilateral lever aimed at Mexican workplaces, because the protection contract was a Mexican problem, and the leverage was designed for it.

## How the process actually runs

Here is the sequence, with the timeframes the two governments actually operate under (Covington & Burling, 2024):

1. **A petition.** A union, a worker, a labor NGO, or the U.S. Trade Representative on its own initiative, files a complaint that a covered facility is denying workers free association or collective bargaining.
2. **The 30-day screen.** The USTR's interagency labor committee has **30 days** to decide whether there is *sufficient, credible evidence*. (This is a real filter, not a rubber stamp, the next lesson shows the United States both winning and losing on the merits.)
3. **The request, and the freeze.** If the evidence clears the bar, the United States formally asks Mexico to **review** the facility. At the *same moment*, USTR can instruct the Treasury to **suspend liquidation** of customs on that facility's goods, i.e., freeze the tariff accounts, so the penalty is already loaded and waiting.
4. **Mexico's clock.** Mexico then has **10 days** to decide whether to conduct a review, and **45 days** to carry it out.
5. **Remediation, or a panel.** Most cases end in a **remediation plan** the two governments negotiate (a real re-vote, reinstatement of fired organizers, back pay). If they cannot agree, a **three-person Rapid Response panel** takes over, it can do an **on-site verification** at the plant and issue a binding determination.

## The remedy, the part with teeth

If a denial is found and not cured, the United States can **suspend preferential tariff treatment on the goods that specific facility exports**, and, for repeat offenders, block them. In plain terms: *a tariff penalty aimed at one factory's products.* Suddenly the company's exports to its largest market cost more than its law-abiding competitor's.

**That is the thing the ILO never had.** The ILO can tell the world your factory denies workers a union. The RRM can make your factory's goods **more expensive at the U.S. border** until it stops.

## One limit, built into the definition, remember it for later

A facility is only "covered" if it produces a good or supplies a service in a **Priority Sector**, defined as **manufacturing, services, and mining** (Covington & Burling, 2024). **Agriculture is not a Priority Sector.** The tool that finally put teeth into an international labor rule was pointed at the auto plant and the call center and the mine, and *not* at the farm, where some of the most vulnerable workers in North America are. Hold that; Section 4's third lesson comes back to it.

:::reveal What are the two features in the phrase "Facility-Specific Rapid-Response Labor Mechanism" that make it different from every other international labor tool, and what is its remedy? ||| It is facility-specific (it acts on one named factory, not a whole country) and rapid (built to run in weeks, not the years a WTO case takes). Its remedy is the thing the ILO never had: the United States can suspend preferential tariff treatment on the goods that one facility exports, a tariff penalty aimed at a single factory's products, making them more expensive at the U.S. border until the denial of rights is cured.

## Sources
- Office of the United States Trade Representative. (n.d.). *Chapter 31 Annex A: Facility-Specific Rapid-Response Labor Mechanism*. https://ustr.gov/trade-topics/enforcement/dispute-settlement-proceedings/fta-dispute-settlement/usmca/chapter-31-annex-facility-specific-rapid-response-labor-mechanism
- Office of the United States Trade Representative. (n.d.). *USMCA Chapter 31 — Dispute Settlement* [Treaty text]. https://ustr.gov/sites/default/files/files/agreements/FTA/USMCA/Text/31-Dispute-Settlement.pdf
- Covington & Burling LLP. (2024, May 20). *Four years of the USMCA rapid response labor mechanism*. https://www.cov.com/en/news-and-insights/insights/2024/05/four-years-of-the-usmca-rapid-response-labor-mechanism`,
    },
    {
      slug: "mexico-gm-silao",
      section: "Section 4 · The trade deal that came for it: the Rapid Response Mechanism",
      title: "11 · GM Silao: the case that proved the teeth were real",
      recallContent: [
        {
          prompt: "In one sentence, what does the USMCA Rapid Response Labor Mechanism do?",
          answer:
            "It lets one government ask the other to review a single named factory for denying workers free association or collective bargaining, with the remedy being suspension of preferential tariff treatment on that facility's exports, a tariff penalty aimed at one plant.",
        },
        {
          prompt: "Which two countries does USMCA Annex 31-A bind, and what is the covered-sector limit?",
          answer:
            "Only the United States and Mexico (Annex 31-B is the separate Canada-Mexico version). A facility is covered only if it is in a Priority Sector, manufacturing, services, or mining. Agriculture is not covered.",
        },
      ],
      body: `The first time anyone used the Rapid Response Mechanism, it landed on the biggest possible target, and it worked. This is the case to know, and the case people most often tell wrong.

## What happened, dated

| Date | Event |
| --- | --- |
| **April 2021** | A **legitimation vote** (Section 3) is held at **General Motors' pickup-truck plant in Silao, Guanajuato**, on the sitting **CTM** collective contract. Mexican federal labor inspectors detect **serious irregularities**, including **destroyed ballots**, and halt the count. |
| **12 May 2021** | The United States files the **first-ever RRM request**, asking Mexico to review whether Silao workers are being denied free association and collective bargaining. USTR instructs Treasury to suspend liquidation on the plant's goods. |
| **8 July 2021** | The two governments announce a **remediation plan**. |
| **August 2021** | The old CTM contract is put to a fresh **personal, free, secret vote**, with the **ILO** and Mexican authorities observing. **Workers reject it.** |
| **1-2 Feb 2022** | A new **independent** union, **SINTTIA** (Sindicato Independiente Nacional de Trabajadores y Trabajadoras de la Industria Automotriz), wins the representation vote with **about 76.5%**. |
| **May 2022** | SINTTIA negotiates a new contract with GM: **raises above inflation**. |

(Office of the United States Trade Representative, n.d.; Covington & Burling, 2024; Brookings Institution, 2024.)

**Sit with what that chain produced.** At one of the largest auto plants in Mexico, a **protection-style incumbent contract** was voted out and a genuinely independent union voted in, and then that union won real money at the table. This is exactly the outcome the anchor course's ILO lesson said the international system could never deliver. Here it was delivered, at a named factory, in under a year.

## Now the part people get wrong, and the reason this course exists

It is very tempting to tell this as: *the United States reached in and fixed a Mexican factory.* **Do not tell it that way. It is false, and it matters.**

Look again at the chain, and notice who did each thing:

- **Mexican labor inspectors** caught the ballot tampering and stopped the vote. That is what triggered everything.
- The tampering was illegal under **Mexico's own 2019 labor law** (Section 3), the personal, free, secret vote that **Mexico** had already legislated. There was a law to break because **Mexican workers, lawyers and legislators had passed it first.**
- **The workers of Silao** organized SINTTIA, ran the campaign, and cast the votes. Nobody in Washington did that.

So what did the RRM actually add? **A deadline and a price.** It took a violation that Mexican law already prohibited and attached a consequence, a tariff threat on GM's exports, that made resolving it urgent instead of eternal. Recall from Section 2 that *delay is the employer's weapon*: workers cannot outlast a lawsuit. The RRM's real contribution was to **put a clock and a cost on the other side of the table**, so that for once delay hurt the company more than the workers.

That is leverage. **It is not authorship.** The right was Mexican; the enforcement pressure was shared. Keep that distinction sharp, the next lesson shows you three different ways the leverage runs out.

:::reveal The GM Silao case is often told as "the United States fixed a Mexican factory." Why is that framing wrong, and what did the RRM actually contribute? ||| Because Mexicans did the substantive work: Mexican inspectors caught the ballot tampering and halted the vote, the tampering was illegal under Mexico's own 2019 labor law, and the workers of Silao organized the independent union (SINTTIA) and won the vote themselves. What the RRM added was not the right and not the union, it was a deadline and a price: a tariff threat on GM's exports that made resolving a violation Mexican law already prohibited urgent instead of eternal. That is leverage, not authorship.

## Sources
- Office of the United States Trade Representative. (n.d.). *Chapter 31 Annex A: Facility-Specific Rapid-Response Labor Mechanism* [case index]. https://ustr.gov/trade-topics/enforcement/dispute-settlement-proceedings/fta-dispute-settlement/usmca/chapter-31-annex-facility-specific-rapid-response-labor-mechanism
- Covington & Burling LLP. (2024, May 20). *Four years of the USMCA rapid response labor mechanism*. https://www.cov.com/en/news-and-insights/insights/2024/05/four-years-of-the-usmca-rapid-response-labor-mechanism
- Brookings Institution. (2024). *The track record of the USMCA rapid response mechanism*. https://www.brookings.edu/articles/the-track-record-of-the-usmca-rapid-response-mechanism/`,
    },
    {
      slug: "mexico-rrm-limits",
      section: "Section 4 · The trade deal that came for it: the Rapid Response Mechanism",
      title: "12 · The limits, honestly: the cases the United States lost",
      recallContent: [
        {
          prompt: "What did the RRM actually add at GM Silao, if not the right itself?",
          answer:
            "A deadline and a price. It attached a tariff threat to a violation that Mexican law already prohibited, so delay finally cost the employer more than the workers. Leverage, not authorship.",
        },
      ],
      body: `A course that taught only GM Silao would be an advertisement. The mechanism has real limits, and the honest way to learn them is through the cases that went **badly**. There are four limits, and the first two each have a dated case attached.

## Limit 1, it enforces a right; it cannot create one (the San Martín loss)

**The case.** In **August 2023** the United States requested the **second-ever RRM dispute-settlement panel**, over the **San Martín mine** (owned by **Grupo México**) in **Zacatecas**, where the miners' union **Los Mineros** was in a long recognition fight. The panel did an **on-site verification** in **February 2024**, held a hearing, and made its determination public on **13 May 2024** (USTR, 2024; United Steelworkers, 2024).

**The United States lost.** The panel agreed the mine was a *covered facility*, but found that the alleged denial of rights **was not brought under the specific Mexican labor laws that carry out Mexico's USMCA obligations**. In other words, the dispute did not fit the narrow legal channel the treaty enforces.

**This is the single most important limit, and it is the treaty working as written, not failing.** Go back to Section 3: the RRM enforces a right that **Mexican law already guarantees**. It is a lever bolted onto Mexican labor law, it can force Mexico to *apply* that law at a facility, but it **cannot reach a wrong that Mexican law does not already prohibit in the way the treaty specifies**. If you want the right itself changed, that is a job for Mexico's Congress, not a trade panel. The RRM is downstream of the reform, always.

## Limit 2, a tariff cannot keep a factory open (Manufacturas VU)

**The case.** A petition in **December 2022** targeted **Manufacturas VU** (VU Manufacturing), an auto-parts plant in **Piedras Negras, Coahuila**. The two governments agreed a **remediation plan in March 2023**. But instead of remediating, the company began **laying off workers and moving out its machinery**, and on **10 October 2023** it **closed the plant entirely, about 400 workers terminated** (U.S. Department of Labor, 2023; USTR, 2023).

**Read the limit precisely.** The RRM's whole threat is *"comply, or your goods get more expensive at the U.S. border."* But an owner always has a third option the threat cannot touch: **leave.** The mechanism can make a Mexican facility unprofitable to run badly; it cannot make anyone keep running it at all. The workers who organized at VU got the mechanism to work, and got a closed plant. **An enforcement tool that can win the case and still lose the jobs is a real tool with a real ceiling.**

## Limit 3, it is bilateral, and it depends on a willing U.S. administration

The RRM is not a neutral court a worker can walk into. It is a **lever held by the U.S. government**, which **chooses** whether to pull it. That has two edges:

- The United States has a direct commercial interest, protecting its own workers from competition with rights-denying plants, so it is genuinely motivated to act. That is why the tool has bite at all.
- But a lever that depends on political will can be set down. A different administration, a different trade mood, and the petitions simply stop being filed.

**Be honest in both directions here.** As of 2026 the tool has **not** been abandoned: the United States filed a fresh RRM request over a **Faurecia** auto-parts plant in **Silao** on **18 May 2026**, under a different administration than the one that started the program (USTR, 2026a). So the mechanism has survived a change of government. But "it still gets used" is not the same as "it is guaranteed." Its use is discretionary, and **discretion is exactly the vulnerability**, the right belongs to Mexican workers, but the enforcement belongs to Washington's calendar.

## Limit 4, it lasts only as long as the trade deal does

The RRM is a clause in the USMCA. Its life is the treaty's life. And the treaty's life is now an open question: at the **joint review on 1 July 2026**, the United States **declined to confirm the 16-year extension**, which under Article 34.7.4 triggers **annual reviews** for the rest of the term. The agreement **remains fully in force**, all rights and obligations, the RRM included, keep operating, and the extension is still available if the three governments later agree (USTR, 2026b; White & Case, 2026). **This course dates that fact and refuses to predict what happens next.** What you should take is structural: an enforcement tool attached to a trade deal is exactly as durable as the trade deal, and no more.

## A note on sourcing, in this course's own spirit

You will see confident aggregate claims about the RRM, "*N* cases, *X* workers helped." Treat them the way Section 2 taught you to treat the protection-contract count. The Brookings Institution (2024), reviewing the record, concluded only that "in at least a small handful of firms, workers appear to have benefitted economically", a deliberately modest claim. This lesson teaches only the individual cases it could verify against **USTR** and the **U.S. Department of Labor** directly, and it declines to launder a tidy success statistic it cannot stand behind.

:::reveal In the San Martín case the United States lost because the panel found the alleged denial "was not brought under" the Mexican labor laws that implement the USMCA. Why is that loss the clearest illustration of what the RRM fundamentally is? ||| Because it shows the RRM enforces a right rather than creating one. The mechanism is a lever bolted onto Mexican labor law: it can force Mexico to apply that law at a specific facility, but it cannot reach a wrong that Mexican law does not already prohibit in the way the treaty specifies. Changing the right itself is a job for Mexico's Congress; the RRM is always downstream of the domestic reform. The loss is the treaty working as written, not failing.

## Sources
- Office of the United States Trade Representative. (2024, May 13). *USMCA Rapid Response Labor Mechanism panel releases determination regarding Grupo México mine* [Press release]. https://ustr.gov/about-us/policy-offices/press-office/press-releases/2024/may/usmca-rapid-response-labor-mechanism-panel-releases-determination-regarding-grupo-mexico-mine-biden
- United Steelworkers. (2024, May 13). *USW disappointed in USMCA panel decision on San Martín mine* [Press release; a party to the dispute — read accordingly]. https://m.usw.org/news/media-center/releases/2024/usw-disappointed-in-usmca-panel-decision-on-san-martin-mine
- U.S. Department of Labor. (2023, October 10). *Statement by Under Secretary of Labor for International Affairs Thea Lee on closure of auto parts facility at Piedras Negras* [Press release]. https://www.dol.gov/newsroom/releases/ilab/ilab20231010
- Office of the United States Trade Representative. (2023, March 31). *United States and Mexico announce plan to remediate denials of rights at Manufacturas VU facility* [Press release]. https://ustr.gov/about-us/policy-offices/press-office/press-releases/2023/march/united-states-and-mexico-announce-plan-remediate-denials-rights-manufacturas-vu-facility
- Office of the United States Trade Representative. (2026a, May). *United States seeks Mexico's review of alleged denial of workers' rights at Faurecia facility* [Press release]. https://ustr.gov/about/policy-offices/press-office/press-releases/2026/may/united-states-seeks-mexicos-review-alleged-denial-workers-rights-faurecia-facility
- Office of the United States Trade Representative. (2026b, July). *Ambassador Greer issues statement on the USMCA joint review* [Press release]. https://ustr.gov/about/policy-offices/press-office/press-releases/2026/july/ambassador-greer-issues-statement-usmca-joint-review
- White & Case LLP. (2026). *USMCA 2026 joint review: United States declines to extend agreement, triggering annual reviews*. https://www.whitecase.com/insight-alert/usmca-2026-joint-review-united-states-declines-extend-agreement-triggering-annual
- Brookings Institution. (2024). *The track record of the USMCA rapid response mechanism*. https://www.brookings.edu/articles/the-track-record-of-the-usmca-rapid-response-mechanism/`,
    },
    {
      slug: "mexico-section-4-quiz",
      section: "Section 4 · The trade deal that came for it: the Rapid Response Mechanism",
      title: "13 · Check yourself: the mechanism, the win, and the limits",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the USMCA Rapid Response Labor Mechanism (Annex 31-A) act upon?",
            options: [
              "A single named facility accused of denying freedom of association",
              "A whole country's labor law, reviewed by a panel all at once",
              "An entire industrial sector across all three USMCA countries",
              "Individual workers' claims for unemployment and severance pay",
            ],
            correctIndex: 0,
            explanation: "The word is 'Facility-Specific.' Every other international labor tool acts on a country; this one acts on one factory.",
            sourceLessonSlug: "mexico-rrm-how-it-works",
          },
          {
            prompt: "What is the RRM's remedy, the thing that gives it 'teeth'?",
            options: [
              "Suspension of preferential tariff treatment on that facility's goods",
              "A public report naming the violation, with no financial consequence",
              "Imprisonment of the company's executives in the United States",
              "Expulsion of the offending country from the World Trade Organization",
            ],
            correctIndex: 0,
            explanation: "A tariff penalty aimed at one factory's products, the thing the ILO never had. The ILO can only publicize; the RRM can raise a factory's costs at the U.S. border.",
            sourceLessonSlug: "mexico-rrm-how-it-works",
          },
          {
            prompt: "Which countries does Annex 31-A bind?",
            options: [
              "Only the United States and Mexico (31-B is the Canada-Mexico version)",
              "All three USMCA countries equally, in every direction of trade",
              "The United States and Canada only, under the terms of Annex 31-B",
              "Every WTO member state that trades any goods with North America",
            ],
            correctIndex: 0,
            explanation: "It is a bilateral lever aimed at Mexican workplaces, because the protection contract was a Mexican problem the leverage was designed for.",
            sourceLessonSlug: "mexico-rrm-how-it-works",
          },
          {
            prompt: "A facility is only 'covered' if it is in a Priority Sector. Which sector is NOT covered?",
            options: ["Agriculture", "Manufacturing", "Mining", "Services"],
            correctIndex: 0,
            explanation: "Priority Sectors are manufacturing, services, and mining. Agriculture, where some of the most vulnerable workers in North America are, is not named.",
            sourceLessonSlug: "mexico-rrm-how-it-works",
          },
          {
            prompt: "Roughly how fast is the RRM designed to run, compared with an ordinary trade dispute?",
            options: [
              "Weeks, a WTO case can take years; 'Rapid' is in the name",
              "It takes longer than an ordinary WTO case, by design",
              "Exactly one calendar year, a period fixed by treaty",
              "There is no time limit at all written into the treaty",
            ],
            correctIndex: 0,
            explanation: "USTR has 30 days to screen a petition; Mexico then has 10 days to decide to review and 45 to conduct it. The whole point is speed.",
            sourceLessonSlug: "mexico-rrm-how-it-works",
          },
          {
            prompt: "Who can start an RRM case?",
            options: [
              "A union, a worker, or a labor NGO by petition, or USTR itself",
              "Only the President of the United States, acting in person",
              "Only the Mexican government, acting through its labor ministry",
              "Only a company that competes directly with the accused facility",
            ],
            correctIndex: 0,
            explanation: "A petition is screened by USTR's interagency labor committee within 30 days for sufficient, credible evidence before the U.S. formally asks Mexico to review.",
            sourceLessonSlug: "mexico-rrm-how-it-works",
          },
          {
            prompt: "What triggered the first-ever RRM case, at GM's Silao plant in 2021?",
            options: [
              "Mexican inspectors found irregularities, including destroyed ballots, in a vote",
              "General Motors voluntarily reported itself to the United States government",
              "A wildcat strike that shut down the whole Mexican auto industry for weeks",
              "A ruling by the U.S. Supreme Court on cross-border labor rights in 2021",
            ],
            correctIndex: 0,
            explanation: "The tampering was illegal under Mexico's own 2019 labor law. Mexican inspectors caught it and halted the vote; the U.S. filed the RRM request on 12 May 2021.",
            sourceLessonSlug: "mexico-gm-silao",
          },
          {
            prompt: "What was the outcome at GM Silao?",
            options: [
              "Workers rejected the CTM contract and voted in an independent union, SINTTIA",
              "The plant shut down and all of its production moved to the United States",
              "The CTM contract was upheld on appeal and the RRM case was dismissed",
              "The United States imposed permanent tariffs on all Mexican-built cars",
            ],
            correctIndex: 0,
            explanation: "SINTTIA won the representation vote with about 76.5% in February 2022 and negotiated a new contract by May 2022, the outcome the ILO lesson said the system could never deliver.",
            sourceLessonSlug: "mexico-gm-silao",
          },
          {
            prompt: "Why is it WRONG to tell GM Silao as 'the United States fixed a Mexican factory'?",
            options: [
              "Because Mexicans did the work: inspectors caught it, workers organized",
              "Because the United States played no part in the Silao case at all",
              "Because the GM plant at Silao was never actually unionized at all",
              "Because the case was settled by the ILO in Geneva, not by the RRM",
            ],
            correctIndex: 0,
            explanation: "The RRM added a deadline and a price to a violation Mexican law already prohibited. That is leverage, not authorship, the distinction this whole course turns on.",
            sourceLessonSlug: "mexico-gm-silao",
          },
          {
            prompt: "In the San Martín mine case (determination public 13 May 2024), what happened?",
            options: [
              "The United States LOST, the claim fell outside the laws the USMCA enforces",
              "The United States won and imposed tariffs on all Mexican copper exports",
              "The panel found the mine was not a covered facility under Annex 31-A",
              "The case is still pending, with no panel decision announced to date",
            ],
            correctIndex: 0,
            explanation: "The panel agreed the mine was covered but found the dispute did not fit the narrow legal channel the treaty enforces. The RRM enforces Mexican law; it cannot reach a wrong that law does not already prohibit in the specified way.",
            sourceLessonSlug: "mexico-rrm-limits",
          },
          {
            prompt: "What does the San Martín loss reveal about the fundamental nature of the RRM?",
            options: [
              "It enforces a right rather than creating one, a lever on Mexican labor law",
              "It proves the mechanism is broken and never works for workers",
              "It shows the United States can rewrite Mexican law through a panel",
              "It means agriculture is secretly a Priority Sector after all",
            ],
            correctIndex: 0,
            explanation: "Changing the right itself is a job for Mexico's Congress. The RRM can force Mexico to apply its law at a facility; it cannot supply a right the law does not contain. The loss is the treaty working as written.",
            sourceLessonSlug: "mexico-rrm-limits",
          },
          {
            prompt: "At Manufacturas VU (Piedras Negras), the remediation plan was agreed, and then what happened, on 10 October 2023?",
            options: [
              "The company closed the plant entirely, terminating about 400 workers",
              "The company complied in full and the new union thrived at the plant",
              "The United States seized the factory and blocked all its exports",
              "The workers voted to keep the old protection contract in place",
            ],
            correctIndex: 0,
            explanation: "An owner always has a third option a tariff threat cannot touch: leave. The tool can make a plant unprofitable to run badly; it cannot make anyone keep it open.",
            sourceLessonSlug: "mexico-rrm-limits",
          },
          {
            prompt: "What general limit does the VU Manufacturing closure illustrate?",
            options: [
              "An enforcement tool can win the case and still lose the jobs",
              "The RRM only ever works for automobile assembly plants",
              "Tariff threats always force a company into compliance",
              "Mexican law does not protect auto-parts workers at all",
            ],
            correctIndex: 0,
            explanation: "The RRM's threat is 'comply or your goods cost more at the border.' Closing the plant escapes that threat entirely, a real ceiling on a real tool.",
            sourceLessonSlug: "mexico-rrm-limits",
          },
          {
            prompt: "Why is the RRM's dependence on 'a willing U.S. administration' both a strength and a weakness?",
            options: [
              "The U.S. has a commercial motive to act, but a later administration can stop",
              "It means the mechanism is fully automatic and needs no one to trigger it",
              "It means only the Mexican government is ever able to start an RRM case",
              "It has no bearing at all on how often the U.S. actually files a case",
            ],
            correctIndex: 0,
            explanation: "The motive is why the tool bites; the discretion is the vulnerability. The right belongs to Mexican workers, but the enforcement belongs to Washington's calendar.",
            sourceLessonSlug: "mexico-rrm-limits",
          },
          {
            prompt: "As of 2026, is the RRM still in use, and what does that tell you?",
            options: [
              "Yes, a fresh RRM request over a Faurecia plant in Silao on 18 May 2026",
              "No, the mechanism was formally abolished by the parties in 2024",
              "It has never once been used again since the GM Silao case in 2021",
              "It was replaced in 2024 by a standing ILO tribunal based in Geneva",
            ],
            correctIndex: 0,
            explanation: "'It still gets used' is not the same as 'it is guaranteed.' The tool survived a change of administration, but its use is discretionary, and discretion is the vulnerability.",
            sourceLessonSlug: "mexico-rrm-limits",
          },
          {
            prompt: "What happened to the USMCA at the joint review on 1 July 2026?",
            options: [
              "The U.S. withheld the 16-year extension, triggering annual reviews",
              "The agreement was terminated immediately by all three parties",
              "The RRM was struck out of the treaty text at the July review",
              "Mexico gave formal notice that it was withdrawing from the USMCA",
            ],
            correctIndex: 0,
            explanation: "Under Article 34.7.4 the decision triggers annual reviews for the rest of the term; all rights and obligations, the RRM included, keep operating. The course dates this and refuses to predict what comes next.",
            sourceLessonSlug: "mexico-rrm-limits",
          },
        ],
      },
    },

    // ─────────── SECTION 5 · LEVERAGE, NOT AUTHORSHIP: THE SKILL YOU KEEP ───────────
    {
      slug: "mexico-leverage",
      section: "Section 5 · Leverage, not authorship: the skill you keep",
      title: "14 · What Mexico gives the track: leverage, and the question you keep",
      recallContent: [
        {
          prompt: "What is the single most important limit the San Martín case exposed?",
          answer:
            "The RRM enforces a right rather than creating one. It can force Mexico to apply its labor law at a specific facility, but it cannot reach a wrong Mexican law does not already prohibit in the way the treaty specifies. It is always downstream of the domestic reform.",
        },
        {
          prompt: "Name the three RRM cases this course teaches and what each shows.",
          answer:
            "GM Silao (2021-22), the win: a protection-style contract voted out, an independent union voted in. San Martín (lost, 13 May 2024), the RRM enforces a right, it cannot create one. Manufacturas VU (closed 10 Oct 2023), a tariff can't keep a factory open; you can win the case and lose the jobs.",
        },
      ],
      body: `You will not remember every date in this course five years from now. That is fine. **This is the lesson you keep.**

## Put the whole course in one line

The anchor course, *The History of Unions*, ends on the ILO and a bleak verdict: the world's labor floor **is made of paper**, no fines, no court, no teeth. This course was the answer to that lesson. Mexico is where an international labor rule finally acquired teeth.

**But read carefully what kind of teeth, because the honest answer is the point.** The Rapid Response Mechanism is real, and it has bitten. And it is:

- **Leverage, not authorship**, it enforces a right that *Mexican workers won for themselves* in the 2019 reform; it did not write that right.
- **Downstream, not upstream**, it can make Mexico apply its own law (Silao), but it cannot supply a right the law lacks (San Martín).
- **A lever, not a court**, it depends on a willing U.S. administration choosing to pull it.
- **As durable as a trade deal**, no more (the 2026 joint review put the whole USMCA on annual review).

An honest student holds both halves: **the RRM is the best piece of good news in the entire Workers' Rights track, *and* it is narrow, conditional, and borrowed.** Anyone who sells it as either a miracle or a fraud is selling you something.

## The question this course actually gave you

Every other course in the track teaches you to ask *is there a union?* Mexico rewired that question permanently. From now on you ask:

> ### **Whose union is it?**

A workplace with 100% coverage, a signed agreement, and dues on every paycheck can be a place where workers have **no voice at all**, where the union sits on the *employer's* side of the table. That is the protection contract, and once you have seen it you cannot un-see it. It is the most portable idea in this course: carry it into any country, any company, any headline about a "union deal," and ask *whose*.

## The four questions, applied to Mexico

The track's reusable spine (from the anchor), answered for the country you just studied:

| Question | Mexico's answer |
| --- | --- |
| **1. Who may organize?** | Anyone, since **1917**, in the constitution (Art. 123). On paper, early and generous. |
| **2. Who is excluded?** | For most of a century, *effectively everyone*, by the protection contract, and today, from the RRM's reach, **agricultural workers** (not a Priority Sector). |
| **3. Who bargains, at what level?** | Firm-level contracts, which is exactly what let a friendly union quietly hold the title to a workplace's agreement. |
| **4. What happens if you try?** | Historically: an *open* vote your employer could watch, a list of people to fire. Since 2019: a personal, free, **secret** vote, and an independent union can now win (Silao). |

## What you can actually do with this

- **The RRM petition is open**, to unions, workers, and labor NGOs, not just governments. The disputes are public: you can read the actual cases at **USTR** and the **U.S. Department of Labor**. If you ever need to know whether a specific Mexican plant is under review, that is where you look.
- **Follow the supply chain.** If you are a U.S. worker or consumer, the auto parts, electronics, and steel around you likely pass through exactly these plants. The RRM is one of the few places your government's trade policy and a Mexican worker's freedom of association are wired to the same switch.
- **Take the companion course.** For what your *own* rights are on the job today, protected concerted activity, retaliation, at-will employment, reading a contract, take **Know Your Rights at Work**. This course told you how one country killed the fake union and borrowed teeth from a trade deal. That one tells you what to do on Monday.

:::reveal After everything, what is the most honest one-sentence verdict on the USMCA Rapid Response Mechanism? ||| It is the best piece of good news in the Workers' Rights track, the one international labor rule with real teeth, but it is narrow, conditional, and borrowed: it enforces a right Mexican workers won for themselves rather than creating one, it can only make Mexico apply a law the law already contains, it depends on a willing U.S. administration choosing to use it, and it lasts only as long as the trade deal does.

## Sources
- Office of the United States Trade Representative. (n.d.). *Chapter 31 Annex A: Facility-Specific Rapid-Response Labor Mechanism*. https://ustr.gov/trade-topics/enforcement/dispute-settlement-proceedings/fta-dispute-settlement/usmca/chapter-31-annex-facility-specific-rapid-response-labor-mechanism
- U.S. Department of Labor. (n.d.). *USMCA cases* [Bureau of International Labor Affairs]. https://www.dol.gov/agencies/ilab/our-work/trade/labor-rights-usmca-cases
- Constitución Política de los Estados Unidos Mexicanos. (1917, as amended). Cámara de Diputados. https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf`,
    },
    {
      slug: "mexico-practice",
      section: "Section 5 · Leverage, not authorship: the skill you keep",
      title: "15 · Practice: the facts you should be able to produce cold",
      body: `Fill in each blank, then check. Spelling and capitalization are forgiving.

These are the specific, checkable facts this course wants in your head, the ones that let you catch an error in someone else's argument about Mexican labor or the USMCA. Everything else you can look up.`,
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Mexico put labor rights, the eight-hour day, the union, the strike, into its constitution in the year ___, in Article 123.",
            answer: "1917",
            explanation: "Eighteen years before the U.S. Wagner Act (1935). Rights on paper, first, the gap between that promise and real worker power is the whole course.",
          },
          {
            prompt: "Instead of asking 'is there a union?', Mexico teaches you to ask 'whose ___ is it?'",
            answer: "union",
            accept: ["union is it"],
            explanation: "A workplace can have full coverage, a signed contract, and dues on every paycheck, and workers with no voice, because the union sits on the employer's side.",
          },
          {
            prompt: "A collective agreement signed between a company and a union the workers never heard of, sometimes before anyone was hired, is called a ___ contract.",
            answer: "protection",
            accept: ["protection", "contrato de protección", "contrato de proteccion"],
            explanation: "A real, registered, enforceable contract whose function is to prevent unionization. Not a forgery, that is what makes it dangerous.",
          },
          {
            prompt: "Mexico's rewritten labor law was published on 1 May ___; every existing contract then had to win a free secret vote (legitimation) by 1 May 2023 or die.",
            answer: "2019",
            explanation: "The law came first (1 May 2019); the USMCA and its enforcement mechanism entered into force more than a year later (1 July 2020).",
          },
          {
            prompt: "The USMCA labor enforcement tool, a tariff penalty aimed at a single factory, is the Rapid ___ Labor Mechanism.",
            answer: "response",
            accept: ["Response", "response"],
            explanation: "Annex 31-A, between the U.S. and Mexico only. 'Facility-specific' and 'rapid' are the two words that make it different from every other international labor tool.",
          },
          {
            prompt: "The RRM's remedy is suspension of preferential ___ treatment on the goods a specific facility exports.",
            answer: "tariff",
            explanation: "The thing the ILO never had. It makes one factory's goods more expensive at the U.S. border until the denial of rights is cured.",
          },
          {
            prompt: "The first-ever RRM case, in 2021, was at a General Motors plant in the city of ___, Guanajuato.",
            answer: "Silao",
            explanation: "Workers rejected the old CTM contract and, in Feb 2022, voted in the independent union SINTTIA, the win the ILO lesson said the system could never produce.",
          },
          {
            prompt: "In the San Martín mine case (2024), the United States ___ (won / lost) the panel.",
            answer: "lost",
            explanation: "The panel found the alleged denial was not brought under the Mexican labor laws implementing the USMCA. The RRM enforces a right; it cannot create one.",
          },
          {
            prompt: "At the Manufacturas VU plant in Piedras Negras, rather than remediate, the company ___ the plant (Oct 2023), terminating about 400 workers.",
            answer: "closed",
            accept: ["shut", "shut down", "closed down"],
            explanation: "A tariff threat cannot keep a factory open. You can win the case and still lose the jobs.",
          },
          {
            prompt: "One-word answer: the sector NOT covered by the RRM's Priority Sectors (manufacturing, services, mining) is ___.",
            answer: "agriculture",
            accept: ["agriculture", "farming", "agricultural"],
            explanation: "Some of the most vulnerable workers in North America are agricultural, and they sit outside the one international labor tool with teeth.",
          },
        ],
      },
    },
    {
      slug: "mexico-section-5-quiz",
      section: "Section 5 · Leverage, not authorship: the skill you keep",
      title: "16 · Final check: the whole arc",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the single most portable idea in this course?",
            options: [
              "Ask 'whose union is it?', not merely 'is there a union?'",
              "All unions become corrupt once they grow large enough",
              "Trade agreements always end up helping the workers",
              "Constitutional rights always guarantee strong unions",
            ],
            correctIndex: 0,
            explanation: "A workplace with full coverage and dues on every paycheck can still leave workers voiceless if the union sits on the employer's side. That is the protection contract.",
            sourceLessonSlug: "mexico-leverage",
          },
          {
            prompt: "Which phrase best captures the honest verdict on the Rapid Response Mechanism?",
            options: [
              "Real teeth, but narrow, conditional, and borrowed",
              "A miracle that solved Mexican labor for good",
              "A fraud that has never once worked anywhere",
              "An ILO program with no enforcement at all",
            ],
            correctIndex: 0,
            explanation: "It enforces a right Mexican workers won, can only make Mexico apply a law it already has, depends on a willing U.S. administration, and lasts only as long as the trade deal.",
            sourceLessonSlug: "mexico-leverage",
          },
          {
            prompt: "The RRM is best described as 'leverage, not authorship.' What does that mean?",
            options: [
              "It pressures enforcement of a right Mexican workers created in 2019",
              "The United States wrote Mexico's 2019 labor law reform for it",
              "It creates brand-new rights that Mexican law never contained",
              "It has had no practical effect inside Mexican factories at all",
            ],
            correctIndex: 0,
            explanation: "The reform came out of Mexican unions, lawyers, courts, and an election. The RRM added a deadline and a price, that is leverage on an existing right.",
            sourceLessonSlug: "mexico-leverage",
          },
          {
            prompt: "In what year did labor rights enter Mexico's constitution, and how does that compare with the U.S.?",
            options: [
              "1917, eighteen years before the U.S. Wagner Act (1935)",
              "1935, the very same year as the U.S. Wagner Act",
              "1994, with NAFTA, some sixty years after the U.S.",
              "1950, with ILO Convention 87, later than the U.S.",
            ],
            correctIndex: 0,
            explanation: "Article 123. On the question of when labor rights entered the supreme law of the land, Mexico was early and the U.S. was late, but rights on paper are not power in a workplace.",
            sourceLessonSlug: "mexico-leverage",
          },
          {
            prompt: "Applying the track's four questions to Mexico: who is excluded from the RRM's reach today?",
            options: [
              "Agricultural workers, agriculture is not a Priority Sector",
              "Auto workers, manufacturing is not a Priority Sector",
              "Miners, mining was left out of the Priority Sectors",
              "Call-center workers, services are not a Priority Sector",
            ],
            correctIndex: 0,
            explanation: "Manufacturing, services, and mining are covered; agriculture is not. Someone is always excluded, Question 2 of the four questions.",
            sourceLessonSlug: "mexico-leverage",
          },
          {
            prompt: "Which came first, Mexico's 2019 labor reform, or the USMCA enforcement mechanism?",
            options: [
              "Mexico's reform (published 1 May 2019); USMCA in force 1 July 2020",
              "The USMCA mechanism, which then forced Mexico to legislate in 2020",
              "They both took effect on one and the same day, 1 July 2020",
              "Mexico has still never reformed its federal labor law at all",
            ],
            correctIndex: 0,
            explanation: "The chronology kills the 'US cleaned up Mexico' story. The treaty text itself grounds the reform in a Mexican electoral mandate (Annex 23-A, ¶1).",
            sourceLessonSlug: "mexico-leverage",
          },
          {
            prompt: "What was a protection contract's defining function?",
            options: [
              "To prevent unionization, a real contract blocking a genuine union",
              "To protect workers from being dismissed without just cause",
              "To guarantee a minimum wage fixed each year by the president",
              "To insure a union against the costs of a long or failed strike",
            ],
            correctIndex: 0,
            explanation: "The institutional form of worker power, turned inside out and used as an instrument against workers. That inversion is why Mexico earns its slot in the track.",
            sourceLessonSlug: "mexico-leverage",
          },
          {
            prompt: "Where can a worker or NGO actually read the record of RRM disputes?",
            options: [
              "USTR and the U.S. Department of Labor publish the cases",
              "Nowhere at all, the RRM case files are kept secret",
              "Only in Mexico's Diario Oficial de la Federación",
              "Only through an expensive subscription legal database",
            ],
            correctIndex: 0,
            explanation: "The petition is open to unions, workers, and NGOs, and the disputes are public. Reading the actual cases is the source-discipline habit this whole platform teaches.",
            sourceLessonSlug: "mexico-leverage",
          },
          {
            prompt: "Which companion course covers what your rights are on the job TODAY?",
            options: [
              "Know Your Rights at Work",
              "The History of Unions",
              "US Civics 101",
              "Learning How to Learn",
            ],
            correctIndex: 0,
            explanation: "This course = how one country killed the fake union and borrowed teeth from a trade deal. Know Your Rights at Work = what to do on Monday.",
            sourceLessonSlug: "mexico-leverage",
          },
          {
            prompt: "How does the RRM answer the anchor course's bleak ILO lesson ('the floor is made of paper')?",
            options: [
              "It shows an international rule CAN bite, via a facility-specific tariff",
              "It proves the ILO was right and that nothing can ever be enforced",
              "It replaced the ILO's conventions entirely across North America",
              "It gives the ILO itself the power to impose tariffs on member states",
            ],
            correctIndex: 0,
            explanation: "The ILO can only publicize; the RRM can make a factory's goods more expensive at the border. It is the track's one piece of good news, read honestly.",
            sourceLessonSlug: "mexico-leverage",
          },
          {
            prompt: "What is the correct lesson from the fact that ~139,000 registered contracts existed but only about one in nine survived legitimation?",
            options: [
              "The scale was enormous, but that number is a ceiling, not a count",
              "Exactly 139,000 protection contracts existed across Mexico",
              "Legitimation was a total failure and it changed nothing at all",
              "Most workers lost their wages when their contracts finally died",
            ],
            correctIndex: 0,
            explanation: "A contract can also die because the firm closed or the union never filed. Hold both: the practice was pervasive AND the exact number is unknowable.",
            sourceLessonSlug: "mexico-leverage",
          },
          {
            prompt: "Since 2019, why can an independent union now realistically win a vote it could not have won before?",
            options: [
              "The vote is now personal, free, direct and secret, not an open ballot",
              "Strikes by independent unions were made illegal by the 2019 law",
              "The government now appoints every union's leadership directly",
              "Foreign unions were allowed to take over the contracts in Mexico",
            ],
            correctIndex: 0,
            explanation: "An open vote is a list of people to fire. Making it secret is what made GM Silao's outcome possible.",
            sourceLessonSlug: "mexico-leverage",
          },
        ],
      },
    },
  ],
};
