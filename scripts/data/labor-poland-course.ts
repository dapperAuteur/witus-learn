// Authored "Poland: Solidarność — When a Union Brought Down a State" — Wave 1 of the Workers' Rights
// track (plans/future-courses/workers-rights-track-proposal.md). A country course hanging off the
// anchor, "The History of Unions: America and the World" (scripts/data/history-of-unions-course.ts).
// The anchor gives ONE lesson to Poland + South Africa ("when a union is the opposition") and supplies
// the four questions; this course goes deep on one country and CROSS-LINKS the anchor rather than
// re-telling it. Sibling to "Germany: Workers on the Board" (scripts/data/labor-germany-course.ts) —
// match its shape and depth.
//
// The spine (and the reason Poland earns a slot no other country can fill): Solidarność is the case
// where a *trade union* was the primary vehicle of a political revolution — it brought down a
// government. But this is NOT told as a triumph story. The honest arc is the whole point: a union won
// a country in 1989 and then lost the workplace. Union density collapsed to among the EU's lowest, and
// Solidarity's own governments ran shock-therapy reforms that hurt many of the workers who built it.
//
// Sourcing discipline (the load-bearing part of this file):
//   * EVERY figure carries a YEAR and a source. Peak membership ~10 million (September 1981) is the
//     European Solidarity Centre / standard historical figure. Union density 9.4% (2022), collective
//     bargaining coverage 11.6% (2023) and employer-organisation density 56.3% (2022) are OECD/AIAS
//     ICTWSS, country note for Poland. Transformation-era unemployment (0% → 6.5% in 1990 → 16.4% in
//     1993) is Statistics Poland (GUS). Coverage's fall from ~30% (1990s) to ~13% is ETUI.
//   * THE DATES ARE CHECKED, NOT RECALLED. Gdańsk Agreement 31 Aug 1980. Legal registration by the
//     Supreme Court 10 Nov 1980 — and the registration FIGHT is taught precisely: the Warsaw
//     provincial court on 24 Oct 1980 inserted a clause on the Party's "leading role" into the
//     statute; Solidarity threatened a general strike; the Supreme Court on 10 Nov 1980 registered the
//     union with its own statute, moving the Party reference to an appendix quoting the Gdańsk accord.
//     Martial law 13 Dec 1981 (Jaruzelski / WRON); Wujek mine, nine miners killed 16 Dec 1981;
//     Solidarity outlawed by statute 8 Oct 1982; martial law lifted 22 Jul 1983. Round Table
//     6 Feb–5 Apr 1989; partly-free election 4 June 1989; Balcerowicz Plan in force 1 Jan 1990.
//   * NEUTRAL ON LIVE POLISH POLITICS, per the proposal. The 1980–89 history is superbly sourced; the
//     present tense is a minefield. The course states in ONE honest paragraph that Solidarność's
//     contemporary legacy is contested in Poland and that Lech Wałęsa's 1970s security-service file is
//     fiercely disputed — and it DOES NOT ADJUDICATE either. Solidarność's documented alignment with
//     the national-catholic right (it openly backed PiS candidates, e.g. 2005) is stated as fact and
//     dated; the course takes no side.
//   * THE RHYME is taught explicitly: Poland's heavy use of civil-law "junk contracts" (umowy
//     śmieciowe) to keep workers outside the Labour Code is the SAME structural move the anchor
//     teaches in the US (misclassification) and that the Mexico course teaches (protection contracts).
//     That cross-country echo is the payoff of the whole track.

import type { AuthoredCourse } from "./authored-course";

export const LABOR_POLAND_COURSE: AuthoredCourse = {
  title: "Poland: Solidarność — When a Union Brought Down a State",
  description:
    "In August 1980, workers at a shipyard in Gdańsk went on strike and posted twenty-one demands on the gate. Demand number one was not about pay — it was the right to form a trade union free of the Communist Party. Within a year that union, Solidarność, had roughly ten million members, about a third of Poland. Nine years later it negotiated the communist state out of existence and swept the first partly-free election in the Soviet bloc. No other country in this track shows a trade union as the primary engine of a political revolution — a union that brought down a government. That is the spine of this course, taught with the repression and not just the triumph: martial law, internment, nine miners shot dead at the Wujek colliery, a decade underground. Then the honest ending, which is the actual lesson: the union won the country and then lost the workplace. Solidarity's own governments ran the shock-therapy reforms of the 1990s, unemployment climbed from zero to over 16%, and today Poland's union density (about 9% — 2022, OECD/AIAS) is among the lowest in the European Union, its bargaining fragmented to the single company. A union won a country and could not hold the shop floor. Cited to UNESCO's Memory of the World, the European Solidarity Centre, Statistics Poland (GUS), OECD/AIAS and ETUI. A country course in the Workers' Rights track — take \"The History of Unions: America and the World\" first.",
  lessons: [
    // ────────────── SECTION 1 · THE PARADOX ──────────────
    {
      slug: "poland-the-paradox",
      title: "1 · Ten million members — in a country where almost no one is in a union now",
      section: "Section 1 · The paradox that runs the whole course",
      body: `Here are two facts about the same country. Both are true. Hold them next to each other and you have this entire course.

| | Poland |
| --- | --- |
| Members of the trade union **Solidarność**, at its peak (September 1981) | **~10 million** — about **one-third of the country**, roughly **80% of all wage earners** |
| Share of Polish workers who **belong to any union today** (density) | **9.4%** (2022) — among the **lowest in the European Union** |

*(Peak membership: European Solidarity Centre, the museum and archive of the movement in Gdańsk. Present-day density: OECD/AIAS ICTWSS database, country note for Poland. Estimates of current density vary by a few points depending on who is counted and when, but every serious one puts Poland near the bottom of the EU.)*

Read those two rows again, because the distance between them is the strangest fact in this whole track.

**Row one is one of the great stories of the twentieth century.** A single trade union, in a country of about 36 million people, signed up something like **ten million members in a little over a year** (European Solidarity Centre). Not ten million voters. Ten million people who joined an organisation the government had spent thirty-five years insisting was unnecessary — because, the government said, Poland was *already* a workers' state. This was the largest membership organisation the communist bloc ever produced, and it produced it in **opposition** to the state that ruled it.

**Row two is what that same movement's country looks like now.** Fewer than one Polish worker in ten carries a union card. Collective bargaining reaches barely more (Section 5 has the exact figure). By the ordinary measuring sticks of this course — the ones you learned in the anchor — Poland today has a **weak** labour movement.

**How does a country go from the first row to the second?** That question is the course. And the answer is not "the union failed." The answer is much more interesting, and much more uncomfortable, than that.

**Here is the shape of it, so you are not surprised at the end.** Solidarność did something no other union in this track did: it did not just win a contract, or a law, or a seat on a board. **It won the country.** In 1989 it negotiated the communist government out of power and formed the next one. And then — this is the part you must not skip, and the part a triumphant tour of Gdańsk will never tell you — **the union that won the country could not hold the workplace.** Its own governments ran the harsh market reforms of the 1990s. Unemployment, which communism had officially kept at zero, went past 16% (Statistics Poland, 1993). Membership fell and kept falling. The union had been the vehicle for a revolution, and after the revolution the thing it was built to do — bargain for workers, on the shop floor, over pay — quietly stopped working.

**So this is not a victory lap.** It is the honest story of a union that won the biggest thing a union has ever won and lost the smallest, and it is worth more than the fairy-tale version precisely because it is true.

:::reveal In 1981 Solidarność had roughly ten million members. Today Polish union density is about 9% (2022). Why is it wrong to explain that fall by saying "the union failed"? ||| Because the union did not fail at the thing that made it famous — it *won*, negotiating the communist state out of power in 1989. What collapsed afterwards was the ordinary workplace function of unions (membership, bargaining, density). Solidarność won the country and then lost the shop floor. The gap between the two rows is that story, not a story of failure.

## Sources
- European Solidarity Centre. (n.d.). *How did Solidarność (Solidarity) come to be?* https://ecs.gda.pl/en/how-did-solidarnosc-solidarity-come-to-be/
- OECD/AIAS. (n.d.). *ICTWSS database — country note: Poland*. Organisation for Economic Co-operation and Development. https://www.oecd.org/content/dam/oecd/en/data/datasets/oecd-aias-ictwss/Poland.pdf
- Statistics Poland (GUS). (n.d.). *Registered unemployment rate 1990–2025*. https://stat.gov.pl/en/topics/labour-market/registered-unemployment/unemployment-rate-1990-2025,3,1.html`,
      recallContent: [
        {
          prompt: "What was Solidarność's approximate peak membership, and when?",
          answer:
            "About 10 million members at its peak in September 1981 — roughly a third of Poland's population and around 80% of wage earners (European Solidarity Centre). The largest membership organisation the communist bloc ever produced.",
        },
        {
          prompt: "What is Poland's trade union density today, and how does it rank in the EU?",
          answer:
            "About 9.4% (2022, OECD/AIAS ICTWSS) — among the lowest in the European Union. A union that once enrolled a third of the country now organises fewer than one worker in ten.",
        },
      ],
    },
    {
      slug: "poland-four-questions",
      title: "2 · The four questions, asked of Poland",
      section: "Section 1 · The paradox that runs the whole course",
      body: `If you have taken **The History of Unions: America and the World** — the anchor course of this track — you already own the tool this course runs on. It hands you four questions you can ask of any country on earth:

1. **Who is allowed to organise?**
2. **Who is excluded?**
3. **Who bargains with whom, and at what level?**
4. **What happens to you if you try?**

*(If you haven't taken it: you can follow this course without it, but take it after. The anchor gives Poland a single lesson — "when a union is the opposition," alongside South Africa — and this course is the deep version of that lesson. It is where the comparative frame comes from, and this course does not repeat it.)*

Here are Poland's answers in advance. Everything after this lesson is the detail — and notice how the answers **change** between 1980 and today, which no other country in this track does so violently.

**Q1 — Who is allowed to organise?** This is the question Poland turns into world history. In a **one-party communist state**, the honest answer in 1980 was: *nobody, independently.* The only legal unions were run by the Party and existed to transmit its decisions downward, not to represent workers upward. So when Polish workers demanded a union **"independent of the Party,"** they were not asking for better pay. They were asking for a centre of organised power the Party did not control — which, in a state that claimed total authority, is indistinguishable from asking **who governs.** That is why this course exists. **In a one-party state, Question 1 *is* the question of the state itself.** After 1989, the answer flipped completely: Poland became a democracy where anyone may organise — and, as you will see, hardly anyone does.

**Q2 — Who is excluded?** In 1980, everyone, from independent organisation — that was the point. Today the exclusions are subtler and, for a modern worker, more consequential: a very large share of Polish workers are employed not on a **Labour Code contract** but on a **civil-law contract** — the "junk contracts" of Section 6 — which places them outside much of labour law, including, in practice, the machinery of collective bargaining. Every labour system has a door, and people standing outside it. In Poland the door is not marked "agricultural worker," as in the anchor's account of the US New Deal. It is marked "you are not technically an employee."

**Q3 — Who bargains with whom, and at what level?** Here is Poland's quiet tragedy, and the mirror image of the Germany course. Germany bargains for whole **sectors**, above the firm, which is why a seventh of German workers being union members produces coverage for half of them. Poland bargains — when it bargains at all — **company by company**, and a company agreement in Poland generally requires a union to exist *inside that company* first (ETUI, 2023). Sectoral agreements have all but vanished. So coverage cannot outrun membership the way it does in Germany; it tracks it, low, and falling. Section 5 is this question.

**Q4 — What happens to you if you try?** In 1981, the answer was **martial law**: the union banned, thousands interned, and at the Wujek colliery nine striking miners **shot dead** (Section 3). That is the most extreme answer to Question 4 in the entire Wave-1 group of this track, and it is why the course teaches the repression and not only the victory. Today the answer is an ordinary democratic one — you may organise freely, and the everyday obstacles are the ones a low-density, fragmented system throws up, not tanks.

**One map for the whole course.** Watch each of these four answers move: from a one-party state where organising *was* revolution, through the revolution itself, to a democracy where the right to organise is secure and the *practice* of it has quietly withered. That arc — right won, workplace lost — is the thing worth carrying out of here.

:::reveal In a normal democracy, "who is allowed to organise?" and "who governs the country?" are two separate questions. Why were they the SAME question in communist Poland in 1980? ||| Because the state was a one-party state that claimed total authority and permitted only Party-run unions. An *independent* union would be a large centre of organised power outside the Party's control — which, in a state built on the Party controlling everything, is the same thing as an alternative government. So demanding a free union was, structurally, demanding to break the Party's monopoly on power.

## Sources
- European Trade Union Institute. (2023). *Poland: Trade unions developing after a decline* (Chapter 22). In *Trade unions in the European Union*. https://www.etui.org/sites/default/files/2023-06/Chapter22_Poland_Trade%20unions%20developing%20after%20a%20decline_2023.pdf
- OECD/AIAS. (n.d.). *ICTWSS database — country note: Poland*. https://www.oecd.org/content/dam/oecd/en/data/datasets/oecd-aias-ictwss/Poland.pdf`,
      recallContent: [
        {
          prompt: "What are the anchor course's four questions?",
          answer:
            "(1) Who is allowed to organise? (2) Who is excluded? (3) Who bargains with whom, and at what level? (4) What happens to you if you try? Poland's answers to all four move violently between 1980 and today.",
        },
        {
          prompt: "How does Poland answer Question 3 (level of bargaining) differently from Germany?",
          answer:
            "Germany bargains for whole sectors above the firm, so coverage far exceeds membership. Poland bargains company by company — and a company agreement generally needs a union inside that firm first — so coverage tracks membership: low and falling. Sectoral bargaining has nearly disappeared.",
        },
      ],
    },
    {
      slug: "poland-quiz-1",
      title: "Section 1 quiz · The paradox, and the four questions",
      section: "Section 1 · The paradox that runs the whole course",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Roughly how many members did Solidarność have at its 1981 peak?",
            options: ["About 1 million", "About 10 million", "About 100,000", "About 30 million"],
            correctIndex: 1,
            explanation:
              "About 10 million at its peak in September 1981 — roughly a third of Poland and around 80% of wage earners (European Solidarity Centre). The largest membership organisation the communist bloc ever produced.",
            sourceLessonSlug: "poland-the-paradox",
          },
          {
            prompt: "What is Poland's trade union density today (2022, OECD/AIAS), and how does it rank in the EU?",
            options: [
              "About 9% — among the lowest in the EU",
              "About 35% — around the EU average",
              "About 65% — among the highest in the EU",
              "About 80% — the highest in the EU",
            ],
            correctIndex: 0,
            explanation:
              "9.4% in 2022 (OECD/AIAS ICTWSS) — among the lowest in the European Union. A union that once enrolled a third of the country now organises fewer than one worker in ten.",
            sourceLessonSlug: "poland-the-paradox",
          },
          {
            prompt: "The course says the fall from 10 million members to ~9% density should NOT be explained by saying 'the union failed.' Why?",
            options: [
              "Because the union never really had 10 million members",
              "Because the union succeeded at its historic task — it won the country in 1989 — and what collapsed afterwards was the ordinary workplace function of unions",
              "Because density is not a real measure",
              "Because the government banned all unions permanently",
            ],
            correctIndex: 1,
            explanation:
              "Solidarność won the biggest thing a union has ever won (a country) and then lost the smallest (the shop floor). The gap between the two numbers is that story — not a story of failure.",
            sourceLessonSlug: "poland-the-paradox",
          },
          {
            prompt: "What is the one-sentence 'spine' of this whole course?",
            options: [
              "A union that always cooperated with the state",
              "A union won a country and then lost the workplace",
              "A union that never grew beyond one shipyard",
              "A government that voluntarily created a free union",
            ],
            correctIndex: 1,
            explanation:
              "Solidarność brought down a government in 1989 — and then Polish union density and bargaining collapsed to among the EU's lowest. Right won, workplace lost.",
            sourceLessonSlug: "poland-the-paradox",
          },
          {
            prompt: "In communist Poland in 1980, why were 'who is allowed to organise?' and 'who governs?' the same question?",
            options: [
              "Because unions set tax policy",
              "Because the state was a one-party state that allowed only Party-run unions, so an independent union was a centre of power outside the Party's control",
              "Because workers elected the head of state directly",
              "Because the constitution banned all elections",
            ],
            correctIndex: 1,
            explanation:
              "In a state built on the Party controlling everything, an independent union is structurally an alternative government. That is why a demand for a free union was a demand about who rules.",
            sourceLessonSlug: "poland-four-questions",
          },
          {
            prompt: "What did Solidarność demand that made it a threat to the communist state, rather than an ordinary pay dispute?",
            options: [
              "A trade union INDEPENDENT of the Communist Party",
              "A 10% pay rise",
              "Longer holidays",
              "Cheaper bread",
            ],
            correctIndex: 0,
            explanation:
              "An independent, self-governing union was a centre of organised power the Party did not control — indistinguishable, in a one-party state, from a challenge to who governs.",
            sourceLessonSlug: "poland-four-questions",
          },
          {
            prompt: "How does Poland answer Question 3 (who bargains, at what level) differently from Germany?",
            options: [
              "Poland bargains at the national level for the whole economy",
              "Poland bargains company by company, and sectoral agreements have nearly vanished — so coverage tracks membership rather than exceeding it",
              "Poland has no collective bargaining laws at all",
              "Poland bargains only through the government",
            ],
            correctIndex: 1,
            explanation:
              "Germany's sectoral bargaining lets a seventh of workers being members produce coverage for half. Poland's company-level bargaining cannot do that trick, so its low density caps its coverage.",
            sourceLessonSlug: "poland-four-questions",
          },
          {
            prompt: "In Poland, who is now most likely to be 'excluded' (Question 2) from labour-law protection and bargaining?",
            options: [
              "Agricultural and domestic workers, by an old statute",
              "Workers on civil-law 'junk contracts,' who are not technically employees",
              "Anyone earning above the median wage",
              "Public-sector workers",
            ],
            correctIndex: 1,
            explanation:
              "Poland's exclusion door is marked 'you are not technically an employee' — the civil-law contracts of Section 6, which sit outside much of the Labour Code.",
            sourceLessonSlug: "poland-four-questions",
          },
          {
            prompt: "In 1981, what was Poland's answer to Question 4 ('what happens to you if you try?')?",
            options: [
              "A modest fine",
              "Martial law — the union banned, thousands interned, and nine miners shot dead at the Wujek colliery",
              "Nothing; organising was always legal",
              "Automatic promotion for organisers",
            ],
            correctIndex: 1,
            explanation:
              "The most extreme answer to Question 4 in the Wave-1 group of this track — which is exactly why the course teaches the repression and not only the victory.",
            sourceLessonSlug: "poland-four-questions",
          },
          {
            prompt: "Which anchor-course lesson is this Poland course the 'deep version' of?",
            options: [
              "'The Nordics: when the union pays your unemployment cheque'",
              "'Poland and South Africa: when a union is the opposition'",
              "'Japan: the union inside the company'",
              "'The Gulf: workers with almost no rights at all'",
            ],
            correctIndex: 1,
            explanation:
              "The anchor gives Poland a single lesson alongside South Africa. This course expands the Poland half into a full country study.",
            sourceLessonSlug: "poland-four-questions",
          },
          {
            prompt: "About what share of Poland's population were members of Solidarność at its peak?",
            options: ["About one in a hundred", "About one-third", "About three-quarters", "Everyone"],
            correctIndex: 1,
            explanation:
              "Roughly a third of the population and about 80% of wage earners (European Solidarity Centre) — a scale of organisation with almost no parallel anywhere.",
            sourceLessonSlug: "poland-the-paradox",
          },
          {
            prompt: "Why does the course insist this is 'not a victory lap'?",
            options: [
              "Because Solidarność never actually won anything",
              "Because the honest arc includes the collapse that followed the victory — and that collapse is the real lesson",
              "Because Poland is not a democracy today",
              "Because the union still runs the government",
            ],
            correctIndex: 1,
            explanation:
              "A triumphant tour of Gdańsk hides the ending. The course teaches the ending — right won, workplace lost — because it is true and more instructive than the fairy tale.",
            sourceLessonSlug: "poland-the-paradox",
          },
          {
            prompt: "The official communist claim that made Solidarność so awkward for the state was that Poland was already…",
            options: [
              "a market economy",
              "a workers' state",
              "a member of NATO",
              "a religious republic",
            ],
            correctIndex: 1,
            explanation:
              "A state that called itself a *workers'* state could not easily explain why actual workers were forbidden to organise themselves. That contradiction was the opening Solidarność drove through.",
            sourceLessonSlug: "poland-four-questions",
          },
          {
            prompt: "What should a student watch 'move' across this whole course?",
            options: [
              "The price of Polish exports",
              "The four questions' answers — from a one-party state, through revolution, to a democracy where the right to organise is secure but barely used",
              "The number of shipyards in Gdańsk",
              "The exchange rate of the złoty",
            ],
            correctIndex: 1,
            explanation:
              "No other country in the track moves its answers to all four questions this violently. Tracking that movement is the skill the course leaves you with.",
            sourceLessonSlug: "poland-four-questions",
          },
          {
            prompt: "Why can't Poland's coverage rate 'outrun' its membership the way Germany's does?",
            options: [
              "Because Poland has no employers' associations at all",
              "Because Polish bargaining is company-level and a company agreement generally needs a union inside that firm, so there is no sectoral mechanism to spread coverage beyond members",
              "Because Polish law bans collective agreements",
              "Because every Polish worker is automatically a union member",
            ],
            correctIndex: 1,
            explanation:
              "The German trick — sectoral agreements binding whole industries through employer-association membership — barely exists in Poland, so coverage stays pinned near the low membership rate.",
            sourceLessonSlug: "poland-four-questions",
          },
        ],
      },
    },

    // ────────────── SECTION 2 · AUGUST 1980 ──────────────
    {
      slug: "poland-workers-state",
      title: "3 · A workers' state with a worker problem",
      section: "Section 2 · August 1980 — the strike that started it",
      body: `To understand why one shipyard strike in 1980 became a revolution, you need to know what came before it — because the workers at the Lenin Shipyard were not naïve. They had watched the state answer strikes with bullets twice in living memory, and they built August 1980 specifically so that it could not be answered the same way.

**The setup.** Communist Poland was, on paper, a *workers'* state: the Polish United Workers' Party (the "PZPR") ruled in the name of the working class, and the only legal unions belonged to a Party-run federation whose job was to pass decisions **down** to workers, not carry demands **up** from them. There was no independent channel. If your wages were cut or your factory was dangerous, the "union" was on management's side, because management and the union and the state were all the same thing.

**The pattern, before 1980.** Polish workers had already learned that the pressure valve was a strike over prices — and that the state's reflex was violence:

- **December 1970.** The government announced steep food-price rises days before Christmas. Workers in the Baltic port cities — Gdańsk, Gdynia, Szczecin — walked out and marched. The army and militia opened fire. Dozens were killed (the official and historical counts differ; the toll ran to at least several dozen). The scar of **1970**, especially in Gdynia, is central to everything that follows.
- **June 1976.** Another attempt to raise prices set off strikes at **Radom** and the **Ursus** tractor works near Warsaw. This time the regime backed off the price rise — but arrested, beat and sacked participants. Out of the defence of those workers grew **KOR**, the Workers' Defence Committee: intellectuals and activists who provided legal and financial help to persecuted workers. **KOR is the hinge** — it linked the workers to the dissident intelligentsia and taught a crucial tactical lesson.

**And here is the lesson the workers drew from 1970**, which changed everything in 1980: *do not march.* In 1970 they had left the workplaces and taken to the streets, where they could be shot. In 1980 they would **stay inside the factory** and hold an **occupation strike** — sit down at the workplace, control the gates, let no one provoke a fight in the open. A sit-in inside a shipyard is far harder for a government to fire on than a march down a boulevard. The **discipline of August 1980 — no alcohol, no violence, stay inside, negotiate — was a deliberate answer to December 1970.**

**One more piece of Polish exceptionalism, because it matters.** In **October 1978**, a Pole, Karol Wojtyła, became **Pope John Paul II**, and in **June 1979** he made a nine-day pilgrimage home. Millions attended open-air Masses organised almost entirely by Poles themselves, with the regime standing aside. For a country used to being told that nothing happened without the Party, the sight of the nation organising itself, peacefully, in numbers the state could not match, was electric. It did not cause Solidarność — but it is part of why Poles in 1980 believed a mass movement independent of the Party was even thinkable.

So the strikers of August 1980 were experienced, disciplined, and connected to allies. They were not going to march, and they were not going to settle for a pay rise. Lesson 4 is what they asked for instead.

:::reveal After the December 1970 price protests were met with army gunfire in the streets, what tactical choice did Polish workers make in 1980 to protect themselves — and why did it work? ||| They held an *occupation strike* — staying inside the workplace and controlling the gates rather than marching in the streets. A sit-in inside a shipyard is far harder for a government to fire on than a march in the open, and the strict discipline (no alcohol, no violence, no leaving) denied the regime any pretext for a crackdown. The whole method of August 1980 was a deliberate answer to the massacre of 1970.

## Sources
- European Solidarity Centre. (n.d.). *How did Solidarność (Solidarity) come to be?* https://ecs.gda.pl/en/how-did-solidarnosc-solidarity-come-to-be/
- Encyclopædia Britannica. (n.d.). *Solidarity (Polish trade union)*. https://www.britannica.com/topic/Solidarity
- U.S. Bureau of Labor Statistics. (1989, September). *How Poland's Solidarity won freedom of association*. Monthly Labor Review. https://www.bls.gov/opub/mlr/1989/09/art5full.pdf`,
      recallContent: [
        {
          prompt: "What were the December 1970 and June 1976 events, and why do they matter for 1980?",
          answer:
            "Both were worker uprisings against government food-price rises — Baltic ports in 1970 (met with army gunfire, dozens killed) and Radom/Ursus in 1976 (price rise withdrawn, but participants beaten and sacked, giving rise to the KOR defence committee). They taught the 1980 strikers to stay inside the factory rather than march, and connected workers to dissident allies.",
        },
        {
          prompt: "Why did a 'workers' state' have no channel for worker grievances?",
          answer:
            "Because the only legal unions belonged to the ruling Party and existed to transmit the Party's decisions downward, not to represent workers upward. Management, the union and the state were effectively the same body, so workers had no independent voice — which is exactly what Solidarność would demand.",
        },
      ],
    },
    {
      slug: "poland-21-demands",
      title: "4 · The 21 Demands — and the one that came first",
      section: "Section 2 · August 1980 — the strike that started it",
      body: `On **14 August 1980**, work stopped at the **Lenin Shipyard** in **Gdańsk**. The immediate spark was a firing: **Anna Walentynowicz**, a crane operator and known activist, had been dismissed months before her pension — and the workers struck partly to get her reinstated. An electrician named **Lech Wałęsa**, himself sacked from the yard years earlier, climbed over the wall to join and was chosen to lead. Keep those two names; the course returns to how differently history has treated them.

**What made Gdańsk 1980 different from every earlier strike was not the shipyard. It was what happened next door.** When the shipyard management started to offer the Lenin workers a deal to end *their* strike, the strike leaders made a decision that turned a labour dispute into a revolution: **they refused to settle alone.** Dozens, then hundreds of other workplaces across the region had walked out in sympathy. Rather than take their own raise and go home, the shipyard workers formed an **Inter-factory Strike Committee** — in Polish, the *Międzyzakładowy Komitet Strajkowy*, or **MKS** — to bargain **on behalf of all of them at once.** Solidarity between factories was the whole idea; it is where the union got its name.

**The MKS drew up 21 demands** and posted them, hand-lettered on two large plywood boards, on **Gate No. 2** of the shipyard. Those boards survive, and in **2003 UNESCO inscribed them on its Memory of the World register** — the same register that holds the Magna Carta and Beethoven's Ninth. That means the 21 Demands are a **citable primary artifact**, not a legend: you can read what the workers actually asked for, in the order they asked for it.

**And the order is the entire point.** A hungry workforce, in a country where a strike had always been about the price of food, put its demands in this sequence:

> **Demand 1. Acceptance of free trade unions independent of the Party and of employers, in accordance with ILO Convention No. 87 concerning the right to form free trade unions.**

Only **after** that came the right to strike (demand 2), free speech (demand 3), the reinstatement of sacked workers (demand 4), and — much further down the list — pay, food supplies, pensions and health care.

**Sit with demand number one, because it is the reason this course exists.** These were not full-time revolutionaries. They were shipyard workers who could have gone home with a raise. Instead, the first thing they wrote down — ahead of wages, ahead of bread — was the right to an **organisation of their own that the Party did not control.** They understood, better than most political theorists, that in their system every other demand was worthless without that one: a pay rise the Party could grant it could also take back, but a free union could keep fighting for the next one. **The instrument mattered more than any single outcome.**

**One detail that shows how deep the hypocrisy ran.** Demand 1 cited **ILO Convention No. 87** — the international treaty guaranteeing freedom of association — *because Poland had already ratified it, back in 1957.* The workers were not asking for a new right. They were asking the government to obey a treaty it had signed twenty-three years earlier and ignored ever since. That is a move you will see again and again in this track: the floor exists on paper; the fight is to make it real.

:::reveal Of the 21 Demands posted at the Gdańsk shipyard in August 1980, the very first was not about wages, food, or even the right to strike. What was it — and why did the workers put it first? ||| Demand 1 was the acceptance of *free trade unions independent of the Party and employers* (citing ILO Convention No. 87). They put it first because every other gain was worthless without it: a pay rise the Party granted it could revoke, but an independent union could keep fighting for the next demand and the next. The instrument of self-organisation mattered more than any single outcome — which is precisely why it terrified the state.

## Sources
- UNESCO. (n.d.). *Twenty-one demands, Gdańsk, August 1980: The birth of the Solidarity trade union*. Memory of the World Register. https://www.unesco.org/en/memory-world/twenty-one-demands-gdansk-august-1980-birth-solidarity-trades-union-massive-social-movement
- European Solidarity Centre. (n.d.). *How did Solidarność (Solidarity) come to be?* https://ecs.gda.pl/en/how-did-solidarnosc-solidarity-come-to-be/
- International Labour Organization. (n.d.). *Ratifications for Poland — C087 and C098*. NORMLEX. https://normlex.ilo.org/dyn/normlex/en/f?p=1000:11200:0::NO:11200:P11200_COUNTRY_ID:102809`,
      recallContent: [
        {
          prompt: "What was the Inter-factory Strike Committee (MKS), and why was it revolutionary?",
          answer:
            "The Międzyzakładowy Komitet Strajkowy — a committee formed by the Gdańsk shipyard strikers to bargain on behalf of hundreds of striking workplaces at once, instead of each settling separately. Refusing to settle alone, in solidarity across factories, is where the union got both its power and its name.",
        },
        {
          prompt: "Why did the 21 Demands cite ILO Convention No. 87, and what did that expose?",
          answer:
            "Because Poland had ratified Convention 87 (freedom of association) back in 1957 and then ignored it. The workers were not asking for a new right — they were demanding the government obey a treaty it had signed 23 years earlier. It exposed the gap between the paper floor and the real one.",
        },
      ],
    },
    {
      slug: "poland-gdansk-agreement",
      title: "5 · 31 August 1980, and the fight to be legal",
      section: "Section 2 · August 1980 — the strike that started it",
      body: `The strike worked. On **31 August 1980**, in the Lenin Shipyard, Lech Wałęsa and the deputy prime minister **Mieczysław Jagielski** signed the **Gdańsk Agreement** — and the communist government conceded the thing no communist government had ever conceded: **the right to form independent, self-governing trade unions.** (Parallel accords were signed at Szczecin on 30 August and Jastrzębie on 3 September, but Gdańsk is the one history remembers.) It was the first legally tolerated independent union in the Soviet bloc.

On **17 September 1980**, delegates from strike committees all over Poland met and made a second fateful choice: rather than form a scatter of regional unions the state could pick off one by one, they merged into **a single national union** — *Niezależny Samorządny Związek Zawodowy "Solidarność"*, the Independent Self-Governing Trade Union "Solidarity." One union, one name, one card. That decision is why the membership numbers in Lesson 1 are so staggering: everyone was joining the *same* thing.

**But a signed agreement is not a legal union, and the last fight of 1980 is the one most tellings skip — even though it is the sharpest illustration of the whole course.** To operate, Solidarność had to be **registered** by a court. And here the state tried to take back with paperwork what it had conceded on the shipyard floor.

Follow this carefully, because it is exactly the kind of detail that gets reported wrong:

- On **24 October 1980**, the **Warsaw provincial court** agreed to register the union — but it did not register the union's own statute. It **inserted a clause of its own**, writing into the union's founding document an acknowledgment of the **"leading role of the Polish United Workers' Party."** In other words: *you may have your union, as long as its own charter says the Party leads it.*
- Solidarność refused. To accept the clause would be to concede, in its founding text, the very supremacy it existed to challenge. The union announced it would call a **nationwide general strike** if the change stood.
- The confrontation went to the country's highest court. On **10 November 1980**, the **Supreme Court of Poland** ruled for the union: it **struck the inserted clause out of the statute itself** and registered Solidarność with its own text intact. The reference to the Party's role and to Poland's alliances was moved into a **separate appendix that simply quoted the already-signed Gdańsk Agreement** — an annex, not a governing clause of the union's charter.

**Why does a fight over where a sentence goes in a legal document matter?** Because it is Question 1 of this course, argued in a courtroom. The state was not trying to ban the union at that point — it had already agreed to it. It was trying to write, into the union's own constitution, that the Party was still supreme. Solidarność understood that if it accepted that sentence, it would be an independent union in name and a Party body in law. **The location of that clause was the difference between a real union and a decorative one — and Solidarność forced the state's own Supreme Court to put it in the harmless place.**

That is what "who may organise?" looks like when the answer is genuinely up for grabs: not a vote, but a ten-million-strong movement, a general-strike threat, and a supreme court, fighting over a single paragraph.

:::reveal When a Warsaw court tried to register Solidarność in October 1980, it inserted a clause into the union's own statute acknowledging the Communist Party's "leading role." Why did the union fight this all the way to the Supreme Court rather than accept it to get registered? ||| Because a clause in the union's *own founding charter* affirming Party supremacy would make it an independent union in name only — a Party body in law. Solidarność existed precisely to be a centre of power the Party did not control. It threatened a general strike, and on 10 November 1980 the Supreme Court struck the clause out of the statute, relegating the reference to a harmless appendix quoting the Gdańsk Agreement. Where the sentence sat was the difference between a real union and a decorative one.

## Sources
- U.S. Bureau of Labor Statistics. (1989, September). *How Poland's Solidarity won freedom of association*. Monthly Labor Review. https://www.bls.gov/opub/mlr/1989/09/art5full.pdf
- European Solidarity Centre. (n.d.). *How did Solidarność (Solidarity) come to be?* https://ecs.gda.pl/en/how-did-solidarnosc-solidarity-come-to-be/
- Encyclopædia Britannica. (n.d.). *Solidarity (Polish trade union)*. https://www.britannica.com/topic/Solidarity`,
      recallContent: [
        {
          prompt: "What did the Gdańsk Agreement (31 August 1980) concede, and why was it historic?",
          answer:
            "It conceded the right to form independent, self-governing trade unions — the first time any communist government in the Soviet bloc had allowed a union outside Party control. Signed by Lech Wałęsa and deputy PM Mieczysław Jagielski at the Lenin Shipyard.",
        },
        {
          prompt: "How was the 1980 registration fight resolved, and what was really at stake?",
          answer:
            "A Warsaw court tried to write the Party's 'leading role' into Solidarność's own statute; the union threatened a general strike; on 10 November 1980 the Supreme Court removed the clause from the statute and put the reference in a mere appendix quoting the Gdańsk Agreement. At stake was whether the union would be genuinely independent or a Party body in law.",
        },
      ],
    },
    {
      slug: "poland-quiz-2",
      title: "Section 2 quiz · August 1980",
      section: "Section 2 · August 1980 — the strike that started it",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What tactic did the August 1980 strikers use to avoid a repeat of the December 1970 street massacre?",
            options: [
              "They marched at night to avoid the army",
              "They held an occupation strike — staying inside the workplace and controlling the gates rather than marching in the streets",
              "They fought the militia with improvised weapons",
              "They fled the country and organised from abroad",
            ],
            correctIndex: 1,
            explanation:
              "A sit-in inside a shipyard is far harder to fire on than a march. The strict discipline (no alcohol, no violence, no leaving) denied the regime a pretext. The method was a deliberate answer to 1970.",
            sourceLessonSlug: "poland-workers-state",
          },
          {
            prompt: "In communist Poland, whose interests did the only legal (Party-run) unions actually serve?",
            options: [
              "The workers', against management",
              "The Party's — they transmitted decisions downward rather than representing workers upward",
              "Foreign investors'",
              "The Catholic Church's",
            ],
            correctIndex: 1,
            explanation:
              "Management, the union and the state were effectively the same body, so workers had no independent channel. That absence is exactly what Solidarność set out to fill.",
            sourceLessonSlug: "poland-workers-state",
          },
          {
            prompt: "What was KOR, formed after the 1976 Radom and Ursus strikes?",
            options: [
              "A secret police unit",
              "The Workers' Defence Committee — intellectuals and activists who gave legal and financial help to persecuted workers, linking workers to the dissident intelligentsia",
              "A Party-run union federation",
              "A NATO advisory body",
            ],
            correctIndex: 1,
            explanation:
              "KOR is the hinge that connected workers to dissident allies — one reason the 1980 movement was so much better organised than earlier revolts.",
            sourceLessonSlug: "poland-workers-state",
          },
          {
            prompt: "Where and when did the strike that launched Solidarność begin?",
            options: [
              "The Ursus tractor works, June 1976",
              "The Lenin Shipyard in Gdańsk, August 1980",
              "The Wujek coal mine, December 1981",
              "Warsaw University, October 1978",
            ],
            correctIndex: 1,
            explanation:
              "Work stopped at the Lenin Shipyard on 14 August 1980, partly over the firing of crane operator Anna Walentynowicz. Lech Wałęsa climbed the wall to lead it.",
            sourceLessonSlug: "poland-21-demands",
          },
          {
            prompt: "What was the Inter-factory Strike Committee (MKS), and why did it matter?",
            options: [
              "A management body that ended the strike",
              "A committee that bargained on behalf of hundreds of striking workplaces at once, instead of each settling separately — solidarity across factories, which gave the union its name",
              "A court that registered the union",
              "A Party commission investigating the strike",
            ],
            correctIndex: 1,
            explanation:
              "Refusing to settle alone and bargaining for everyone together turned a single labour dispute into a national movement — and named it.",
            sourceLessonSlug: "poland-21-demands",
          },
          {
            prompt: "What was the FIRST of the 21 Demands posted at the Gdańsk shipyard?",
            options: [
              "A large pay rise",
              "The acceptance of free trade unions independent of the Party and employers",
              "Cheaper food",
              "Free national elections",
            ],
            correctIndex: 1,
            explanation:
              "Demand 1 was free independent unions (citing ILO Convention No. 87) — ahead of the right to strike, free speech, and pay. The instrument mattered more than any single outcome.",
            sourceLessonSlug: "poland-21-demands",
          },
          {
            prompt: "Why is it significant that Demand 1 cited ILO Convention No. 87?",
            options: [
              "Because Poland had never heard of the ILO",
              "Because Poland had already ratified Convention 87 in 1957 and then ignored it — so the workers were demanding the state obey a treaty it had signed 23 years earlier",
              "Because the ILO ordered Poland to create the union",
              "Because Convention 87 bans all strikes",
            ],
            correctIndex: 1,
            explanation:
              "It exposed the gap between the paper floor and the real one — a recurring pattern in this track. The right already existed on paper; the fight was to make it real.",
            sourceLessonSlug: "poland-21-demands",
          },
          {
            prompt: "What UNESCO recognition do the 21 Demands hold?",
            options: [
              "World Heritage Site",
              "Inscription on the Memory of the World register (2003), making them a citable primary artifact",
              "Intangible Cultural Heritage",
              "None — they were destroyed",
            ],
            correctIndex: 1,
            explanation:
              "The hand-lettered plywood boards from Gate No. 2 sit on the same register as the Magna Carta. You can read what the workers actually asked for, in order.",
            sourceLessonSlug: "poland-21-demands",
          },
          {
            prompt: "What did the Gdańsk Agreement of 31 August 1980 concede?",
            options: [
              "Free national elections",
              "The right to form independent, self-governing trade unions — the first in the Soviet bloc",
              "Poland's exit from the Warsaw Pact",
              "The abolition of the Communist Party",
            ],
            correctIndex: 1,
            explanation:
              "Signed by Wałęsa and deputy PM Jagielski. It was a union right, not yet a political revolution — but it cracked the Party's monopoly on organisation.",
            sourceLessonSlug: "poland-gdansk-agreement",
          },
          {
            prompt: "Why did the strike committees merge into a SINGLE national union on 17 September 1980?",
            options: [
              "Because the law required exactly one union",
              "So the state could not pick off a scatter of small regional unions one by one — one union, one name, one card",
              "Because Wałęsa demanded personal control",
              "To qualify for foreign funding",
            ],
            correctIndex: 1,
            explanation:
              "Merging into NSZZ 'Solidarność' is why the membership figures are so staggering — everyone was joining the same organisation.",
            sourceLessonSlug: "poland-gdansk-agreement",
          },
          {
            prompt: "In the October 1980 registration case, what did the Warsaw court try to do?",
            options: [
              "Ban the union outright",
              "Insert a clause into the union's OWN statute acknowledging the Communist Party's 'leading role'",
              "Rename the union",
              "Force Wałęsa to resign",
            ],
            correctIndex: 1,
            explanation:
              "It tried to write Party supremacy into the union's founding charter — which would make Solidarność independent in name but a Party body in law.",
            sourceLessonSlug: "poland-gdansk-agreement",
          },
          {
            prompt: "How did the Supreme Court resolve the registration fight on 10 November 1980?",
            options: [
              "It upheld the inserted clause",
              "It struck the clause out of the statute and moved the reference into a harmless appendix quoting the Gdańsk Agreement, registering the union with its own text intact",
              "It dissolved the union",
              "It ordered new strike-committee elections",
            ],
            correctIndex: 1,
            explanation:
              "Solidarność had threatened a general strike. Where the sentence sat was the difference between a real union and a decorative one — and the union forced the state's own top court to put it in the harmless place.",
            sourceLessonSlug: "poland-gdansk-agreement",
          },
          {
            prompt: "The firing of which activist helped spark the August 1980 shipyard strike?",
            options: [
              "Anna Walentynowicz, a crane operator",
              "Karol Wojtyła",
              "Mieczysław Jagielski",
              "Wojciech Jaruzelski",
            ],
            correctIndex: 0,
            explanation:
              "Walentynowicz, dismissed shortly before her pension, was one trigger; workers struck partly to reinstate her. Lech Wałęsa, himself earlier sacked from the yard, climbed the wall to lead.",
            sourceLessonSlug: "poland-21-demands",
          },
          {
            prompt: "How did the June 1979 papal pilgrimage of John Paul II contribute to the climate of 1980?",
            options: [
              "It funded the strike directly",
              "Millions organised themselves peacefully for open-air Masses the regime could not match, making a mass movement independent of the Party feel thinkable",
              "It ordered Catholics to strike",
              "It had no effect at all",
            ],
            correctIndex: 1,
            explanation:
              "The course is careful: the pilgrimage did not *cause* Solidarność, but the sight of the nation organising itself outside the Party helped Poles believe such a movement was possible.",
            sourceLessonSlug: "poland-workers-state",
          },
          {
            prompt: "Why does the course say the shipyard workers 'refused to settle alone'?",
            options: [
              "They wanted more money for themselves",
              "Rather than take their own raise and go home, they bargained on behalf of every striking workplace through the MKS — solidarity between factories was the whole idea",
              "They distrusted their own leaders",
              "The government forbade separate deals",
            ],
            correctIndex: 1,
            explanation:
              "That choice is what turned a shipyard dispute into a movement of millions — and it is literally where the name Solidarność comes from.",
            sourceLessonSlug: "poland-21-demands",
          },
        ],
      },
    },
  ],
};
