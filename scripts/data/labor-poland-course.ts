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
  title: "Poland: Solidarność, When a Union Brought Down a State",
  description:
    "In August 1980, workers at a shipyard in Gdańsk went on strike and posted twenty-one demands on the gate. Demand number one was not about pay, it was the right to form a trade union free of the Communist Party. Within a year that union, Solidarność, had roughly ten million members, about a third of Poland. Nine years later it negotiated the communist state out of existence and swept the first partly-free election in the Soviet bloc. No other country in this track shows a trade union as the primary engine of a political revolution, a union that brought down a government. That is the spine of this course, taught with the repression and not just the triumph: martial law, internment, nine miners shot dead at the Wujek colliery, a decade underground. Then the honest ending, which is the actual lesson: the union won the country and then lost the workplace. Solidarity's own governments ran the shock-therapy reforms of the 1990s, unemployment climbed from zero to over 16%, and today Poland's union density (about 9%, 2022, OECD/AIAS) is among the lowest in the European Union, its bargaining fragmented to the single company. A union won a country and could not hold the shop floor. Cited to UNESCO's Memory of the World, the European Solidarity Centre, Statistics Poland (GUS), OECD/AIAS and ETUI. A country course in the Workers' Rights track, take \"The History of Unions: America and the World\" first.",
  lessons: [
    // ────────────── SECTION 1 · THE PARADOX ──────────────
    {
      slug: "poland-the-paradox",
      title: "1 · Ten million members, in a country where almost no one is in a union now",
      section: "Section 1 · The paradox that runs the whole course",
      body: `Here are two facts about the same country. Both are true. Hold them next to each other and you have this entire course.

| | Poland |
| --- | --- |
| Members of the trade union **Solidarność**, at its peak (September 1981) | **~10 million**, about **one-third of the country**, roughly **80% of all wage earners** |
| Share of Polish workers who **belong to any union today** (density) | **9.4%** (2022), among the **lowest in the European Union** |

*(Peak membership: European Solidarity Centre, the museum and archive of the movement in Gdańsk. Present-day density: OECD/AIAS ICTWSS database, country note for Poland. Estimates of current density vary by a few points depending on who is counted and when, but every serious one puts Poland near the bottom of the EU.)*

Read those two rows again, because the distance between them is the strangest fact in this whole track.

**Row one is one of the great stories of the twentieth century.** A single trade union, in a country of about 36 million people, signed up something like **ten million members in a little over a year** (European Solidarity Centre). Not ten million voters. Ten million people who joined an organisation the government had spent thirty-five years insisting was unnecessary, because, the government said, Poland was *already* a workers' state. This was the largest membership organisation the communist bloc ever produced, and it produced it in **opposition** to the state that ruled it.

**Row two is what that same movement's country looks like now.** Fewer than one Polish worker in ten carries a union card. Collective bargaining reaches barely more (Section 5 has the exact figure). By the ordinary measuring sticks of this course, the ones you learned in the anchor, Poland today has a **weak** labour movement.

**How does a country go from the first row to the second?** That question is the course. And the answer is not "the union failed." The answer is much more interesting, and much more uncomfortable, than that.

**Here is the shape of it, so you are not surprised at the end.** Solidarność did something no other union in this track did: it did not just win a contract, or a law, or a seat on a board. **It won the country.** In 1989 it negotiated the communist government out of power and formed the next one. And then, this is the part you must not skip, and the part a triumphant tour of Gdańsk will never tell you, **the union that won the country could not hold the workplace.** Its own governments ran the harsh market reforms of the 1990s. Unemployment, which communism had officially kept at zero, went past 16% (Statistics Poland, 1993). Membership fell and kept falling. The union had been the vehicle for a revolution, and after the revolution the thing it was built to do, bargain for workers, on the shop floor, over pay, quietly stopped working.

**So this is not a victory lap.** It is the honest story of a union that won the biggest thing a union has ever won and lost the smallest, and it is worth more than the fairy-tale version precisely because it is true.

:::reveal In 1981 Solidarność had roughly ten million members. Today Polish union density is about 9% (2022). Why is it wrong to explain that fall by saying "the union failed"? ||| Because the union did not fail at the thing that made it famous, it *won*, negotiating the communist state out of power in 1989. What collapsed afterwards was the ordinary workplace function of unions (membership, bargaining, density). Solidarność won the country and then lost the shop floor. The gap between the two rows is that story, not a story of failure.

## Sources
- European Solidarity Centre. (n.d.). *How did Solidarność (Solidarity) come to be?* https://ecs.gda.pl/en/how-did-solidarnosc-solidarity-come-to-be/
- OECD/AIAS. (n.d.). *ICTWSS database — country note: Poland*. Organisation for Economic Co-operation and Development. https://www.oecd.org/content/dam/oecd/en/data/datasets/oecd-aias-ictwss/Poland.pdf
- Statistics Poland (GUS). (n.d.). *Registered unemployment rate 1990–2025*. https://stat.gov.pl/en/topics/labour-market/registered-unemployment/unemployment-rate-1990-2025,3,1.html`,
      recallContent: [
        {
          prompt: "What was Solidarność's approximate peak membership, and when?",
          answer:
            "About 10 million members at its peak in September 1981, roughly a third of Poland's population and around 80% of wage earners (European Solidarity Centre). The largest membership organisation the communist bloc ever produced.",
        },
        {
          prompt: "What is Poland's trade union density today, and how does it rank in the EU?",
          answer:
            "About 9.4% (2022, OECD/AIAS ICTWSS), among the lowest in the European Union. A union that once enrolled a third of the country now organises fewer than one worker in ten.",
        },
      ],
    },
    {
      slug: "poland-four-questions",
      title: "2 · The four questions, asked of Poland",
      section: "Section 1 · The paradox that runs the whole course",
      body: `If you have taken **The History of Unions: America and the World**, the anchor course of this track, you already own the tool this course runs on. It hands you four questions you can ask of any country on earth:

1. **Who is allowed to organise?**
2. **Who is excluded?**
3. **Who bargains with whom, and at what level?**
4. **What happens to you if you try?**

*(If you haven't taken it: you can follow this course without it, but take it after. The anchor gives Poland a single lesson, "when a union is the opposition," alongside South Africa, and this course is the deep version of that lesson. It is where the comparative frame comes from, and this course does not repeat it.)*

Here are Poland's answers in advance. Everything after this lesson is the detail, and notice how the answers **change** between 1980 and today, which no other country in this track does so violently.

**Q1, Who is allowed to organise?** This is the question Poland turns into world history. In a **one-party communist state**, the honest answer in 1980 was: *nobody, independently.* The only legal unions were run by the Party and existed to transmit its decisions downward, not to represent workers upward. So when Polish workers demanded a union **"independent of the Party,"** they were not asking for better pay. They were asking for a centre of organised power the Party did not control, which, in a state that claimed total authority, is indistinguishable from asking **who governs.** That is why this course exists. **In a one-party state, Question 1 *is* the question of the state itself.** After 1989, the answer flipped completely: Poland became a democracy where anyone may organise, and, as you will see, hardly anyone does.

**Q2, Who is excluded?** In 1980, everyone, from independent organisation, that was the point. Today the exclusions are subtler and, for a modern worker, more consequential: a very large share of Polish workers are employed not on a **Labour Code contract** but on a **civil-law contract**, the "junk contracts" of Section 6, which places them outside much of labour law, including, in practice, the machinery of collective bargaining. Every labour system has a door, and people standing outside it. In Poland the door is not marked "agricultural worker," as in the anchor's account of the US New Deal. It is marked "you are not technically an employee."

**Q3, Who bargains with whom, and at what level?** Here is Poland's quiet tragedy, and the mirror image of the Germany course. Germany bargains for whole **sectors**, above the firm, which is why a seventh of German workers being union members produces coverage for half of them. Poland bargains, when it bargains at all, **company by company**, and a company agreement in Poland generally requires a union to exist *inside that company* first (ETUI, 2023). Sectoral agreements have all but vanished. So coverage cannot outrun membership the way it does in Germany; it tracks it, low, and falling. Section 5 is this question.

**Q4, What happens to you if you try?** In 1981, the answer was **martial law**: the union banned, thousands interned, and at the Wujek colliery nine striking miners **shot dead** (Section 3). That is the most extreme answer to Question 4 in the entire Wave-1 group of this track, and it is why the course teaches the repression and not only the victory. Today the answer is an ordinary democratic one, you may organise freely, and the everyday obstacles are the ones a low-density, fragmented system throws up, not tanks.

**One map for the whole course.** Watch each of these four answers move: from a one-party state where organising *was* revolution, through the revolution itself, to a democracy where the right to organise is secure and the *practice* of it has quietly withered. That arc, right won, workplace lost, is the thing worth carrying out of here.

:::reveal In a normal democracy, "who is allowed to organise?" and "who governs the country?" are two separate questions. Why were they the SAME question in communist Poland in 1980? ||| Because the state was a one-party state that claimed total authority and permitted only Party-run unions. An *independent* union would be a large centre of organised power outside the Party's control, which, in a state built on the Party controlling everything, is the same thing as an alternative government. So demanding a free union was, structurally, demanding to break the Party's monopoly on power.

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
            "Germany bargains for whole sectors above the firm, so coverage far exceeds membership. Poland bargains company by company, and a company agreement generally needs a union inside that firm first, so coverage tracks membership: low and falling. Sectoral bargaining has nearly disappeared.",
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
              "About 10 million at its peak in September 1981, roughly a third of Poland and around 80% of wage earners (European Solidarity Centre). The largest membership organisation the communist bloc ever produced.",
            sourceLessonSlug: "poland-the-paradox",
          },
          {
            prompt: "What is Poland's trade union density today (2022, OECD/AIAS), and how does it rank in the EU?",
            options: [
              "About 9%, among the lowest in the EU",
              "About 35%, around the EU average",
              "About 65%, among the highest in the EU",
              "About 80%, the highest in the EU",
            ],
            correctIndex: 0,
            explanation:
              "9.4% in 2022 (OECD/AIAS ICTWSS), among the lowest in the European Union. A union that once enrolled a third of the country now organises fewer than one worker in ten.",
            sourceLessonSlug: "poland-the-paradox",
          },
          {
            prompt: "The course says the fall from 10 million members to ~9% density should NOT be explained by saying 'the union failed.' Why?",
            options: [
              "Because the union never really had 10 million members",
              "Because the union succeeded at its historic task, it won the country in 1989, and what collapsed afterwards was the ordinary workplace function of unions",
              "Because density is not a real measure",
              "Because the government banned all unions permanently",
            ],
            correctIndex: 1,
            explanation:
              "Solidarność won the biggest thing a union has ever won (a country) and then lost the smallest (the shop floor). The gap between the two numbers is that story, not a story of failure.",
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
              "Solidarność brought down a government in 1989, and then Polish union density and bargaining collapsed to among the EU's lowest. Right won, workplace lost.",
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
              "An independent, self-governing union was a centre of organised power the Party did not control, indistinguishable, in a one-party state, from a challenge to who governs.",
            sourceLessonSlug: "poland-four-questions",
          },
          {
            prompt: "How does Poland answer Question 3 (who bargains, at what level) differently from Germany?",
            options: [
              "Poland bargains at the national level for the whole economy",
              "Poland bargains company by company, and sectoral agreements have nearly vanished, so coverage tracks membership rather than exceeding it",
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
              "Poland's exclusion door is marked 'you are not technically an employee', the civil-law contracts of Section 6, which sit outside much of the Labour Code.",
            sourceLessonSlug: "poland-four-questions",
          },
          {
            prompt: "In 1981, what was Poland's answer to Question 4 ('what happens to you if you try?')?",
            options: [
              "A modest fine",
              "Martial law, the union banned, thousands interned, and nine miners shot dead at the Wujek colliery",
              "Nothing; organising was always legal",
              "Automatic promotion for organisers",
            ],
            correctIndex: 1,
            explanation:
              "The most extreme answer to Question 4 in the Wave-1 group of this track, which is exactly why the course teaches the repression and not only the victory.",
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
              "Roughly a third of the population and about 80% of wage earners (European Solidarity Centre), a scale of organisation with almost no parallel anywhere.",
            sourceLessonSlug: "poland-the-paradox",
          },
          {
            prompt: "Why does the course insist this is 'not a victory lap'?",
            options: [
              "Because Solidarność never actually won anything",
              "Because the honest arc includes the collapse that followed the victory, and that collapse is the real lesson",
              "Because Poland is not a democracy today",
              "Because the union still runs the government",
            ],
            correctIndex: 1,
            explanation:
              "A triumphant tour of Gdańsk hides the ending. The course teaches the ending, right won, workplace lost, because it is true and more instructive than the fairy tale.",
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
              "The four questions' answers, from a one-party state, through revolution, to a democracy where the right to organise is secure but barely used",
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
              "The German trick, sectoral agreements binding whole industries through employer-association membership, barely exists in Poland, so coverage stays pinned near the low membership rate.",
            sourceLessonSlug: "poland-four-questions",
          },
        ],
      },
    },

    // ────────────── SECTION 2 · AUGUST 1980 ──────────────
    {
      slug: "poland-workers-state",
      title: "3 · A workers' state with a worker problem",
      section: "Section 2 · August 1980, the strike that started it",
      body: `To understand why one shipyard strike in 1980 became a revolution, you need to know what came before it, because the workers at the Lenin Shipyard were not naïve. They had watched the state answer strikes with bullets twice in living memory, and they built August 1980 specifically so that it could not be answered the same way.

**The setup.** Communist Poland was, on paper, a *workers'* state: the Polish United Workers' Party (the "PZPR") ruled in the name of the working class, and the only legal unions belonged to a Party-run federation whose job was to pass decisions **down** to workers, not carry demands **up** from them. There was no independent channel. If your wages were cut or your factory was dangerous, the "union" was on management's side, because management and the union and the state were all the same thing.

**The pattern, before 1980.** Polish workers had already learned that the pressure valve was a strike over prices, and that the state's reflex was violence:

- **December 1970.** The government announced steep food-price rises days before Christmas. Workers in the Baltic port cities, Gdańsk, Gdynia, Szczecin, walked out and marched. The army and militia opened fire. Dozens were killed (the official and historical counts differ; the toll ran to at least several dozen). The scar of **1970**, especially in Gdynia, is central to everything that follows.
- **June 1976.** Another attempt to raise prices set off strikes at **Radom** and the **Ursus** tractor works near Warsaw. This time the regime backed off the price rise, but arrested, beat and sacked participants. Out of the defence of those workers grew **KOR**, the Workers' Defence Committee: intellectuals and activists who provided legal and financial help to persecuted workers. **KOR is the hinge**, it linked the workers to the dissident intelligentsia and taught a crucial tactical lesson.

**And here is the lesson the workers drew from 1970**, which changed everything in 1980: *do not march.* In 1970 they had left the workplaces and taken to the streets, where they could be shot. In 1980 they would **stay inside the factory** and hold an **occupation strike**, sit down at the workplace, control the gates, let no one provoke a fight in the open. A sit-in inside a shipyard is far harder for a government to fire on than a march down a boulevard. The **discipline of August 1980, no alcohol, no violence, stay inside, negotiate, was a deliberate answer to December 1970.**

**One more piece of Polish exceptionalism, because it matters.** In **October 1978**, a Pole, Karol Wojtyła, became **Pope John Paul II**, and in **June 1979** he made a nine-day pilgrimage home. Millions attended open-air Masses organised almost entirely by Poles themselves, with the regime standing aside. For a country used to being told that nothing happened without the Party, the sight of the nation organising itself, peacefully, in numbers the state could not match, was electric. It did not cause Solidarność, but it is part of why Poles in 1980 believed a mass movement independent of the Party was even thinkable.

So the strikers of August 1980 were experienced, disciplined, and connected to allies. They were not going to march, and they were not going to settle for a pay rise. Lesson 4 is what they asked for instead.

:::reveal After the December 1970 price protests were met with army gunfire in the streets, what tactical choice did Polish workers make in 1980 to protect themselves, and why did it work? ||| They held an *occupation strike*, staying inside the workplace and controlling the gates rather than marching in the streets. A sit-in inside a shipyard is far harder for a government to fire on than a march in the open, and the strict discipline (no alcohol, no violence, no leaving) denied the regime any pretext for a crackdown. The whole method of August 1980 was a deliberate answer to the massacre of 1970.

## Sources
- European Solidarity Centre. (n.d.). *How did Solidarność (Solidarity) come to be?* https://ecs.gda.pl/en/how-did-solidarnosc-solidarity-come-to-be/
- Encyclopædia Britannica. (n.d.). *Solidarity (Polish trade union)*. https://www.britannica.com/topic/Solidarity
- U.S. Bureau of Labor Statistics. (1989, September). *How Poland's Solidarity won freedom of association*. Monthly Labor Review. https://www.bls.gov/opub/mlr/1989/09/art5full.pdf`,
      recallContent: [
        {
          prompt: "What were the December 1970 and June 1976 events, and why do they matter for 1980?",
          answer:
            "Both were worker uprisings against government food-price rises, Baltic ports in 1970 (met with army gunfire, dozens killed) and Radom/Ursus in 1976 (price rise withdrawn, but participants beaten and sacked, giving rise to the KOR defence committee). They taught the 1980 strikers to stay inside the factory rather than march, and connected workers to dissident allies.",
        },
        {
          prompt: "Why did a 'workers' state' have no channel for worker grievances?",
          answer:
            "Because the only legal unions belonged to the ruling Party and existed to transmit the Party's decisions downward, not to represent workers upward. Management, the union and the state were effectively the same body, so workers had no independent voice, which is exactly what Solidarność would demand.",
        },
      ],
    },
    {
      slug: "poland-21-demands",
      title: "4 · The 21 Demands, and the one that came first",
      section: "Section 2 · August 1980, the strike that started it",
      body: `On **14 August 1980**, work stopped at the **Lenin Shipyard** in **Gdańsk**. The immediate spark was a firing: **Anna Walentynowicz**, a crane operator and known activist, had been dismissed months before her pension, and the workers struck partly to get her reinstated. An electrician named **Lech Wałęsa**, himself sacked from the yard years earlier, climbed over the wall to join and was chosen to lead. Keep those two names; the course returns to how differently history has treated them.

**What made Gdańsk 1980 different from every earlier strike was not the shipyard. It was what happened next door.** When the shipyard management started to offer the Lenin workers a deal to end *their* strike, the strike leaders made a decision that turned a labour dispute into a revolution: **they refused to settle alone.** Dozens, then hundreds of other workplaces across the region had walked out in sympathy. Rather than take their own raise and go home, the shipyard workers formed an **Inter-factory Strike Committee**, in Polish, the *Międzyzakładowy Komitet Strajkowy*, or **MKS**, to bargain **on behalf of all of them at once.** Solidarity between factories was the whole idea; it is where the union got its name.

**The MKS drew up 21 demands** and posted them, hand-lettered on two large plywood boards, on **Gate No. 2** of the shipyard. Those boards survive, and in **2003 UNESCO inscribed them on its Memory of the World register**, the same register that holds the Magna Carta and Beethoven's Ninth. That means the 21 Demands are a **citable primary artifact**, not a legend: you can read what the workers actually asked for, in the order they asked for it.

**And the order is the entire point.** A hungry workforce, in a country where a strike had always been about the price of food, put its demands in this sequence:

> **Demand 1. Acceptance of free trade unions independent of the Party and of employers, in accordance with ILO Convention No. 87 concerning the right to form free trade unions.**

Only **after** that came the right to strike (demand 2), free speech (demand 3), the reinstatement of sacked workers (demand 4), and (much further down the list) pay, food supplies, pensions and health care.

**Sit with demand number one, because it is the reason this course exists.** These were not full-time revolutionaries. They were shipyard workers who could have gone home with a raise. Instead, the first thing they wrote down, ahead of wages, ahead of bread, was the right to an **organisation of their own that the Party did not control.** They understood, better than most political theorists, that in their system every other demand was worthless without that one: a pay rise the Party could grant it could also take back, but a free union could keep fighting for the next one. **The instrument mattered more than any single outcome.**

**One detail that shows how deep the hypocrisy ran.** Demand 1 cited **ILO Convention No. 87**, the international treaty guaranteeing freedom of association, *because Poland had already ratified it, back in 1957.* The workers were not asking for a new right. They were asking the government to obey a treaty it had signed twenty-three years earlier and ignored ever since. That is a move you will see again and again in this track: the floor exists on paper; the fight is to make it real.

:::reveal Of the 21 Demands posted at the Gdańsk shipyard in August 1980, the very first was not about wages, food, or even the right to strike. What was it, and why did the workers put it first? ||| Demand 1 was the acceptance of *free trade unions independent of the Party and employers* (citing ILO Convention No. 87). They put it first because every other gain was worthless without it: a pay rise the Party granted it could revoke, but an independent union could keep fighting for the next demand and the next. The instrument of self-organisation mattered more than any single outcome, which is precisely why it terrified the state.

## Sources
- UNESCO. (n.d.). *Twenty-one demands, Gdańsk, August 1980: The birth of the Solidarity trade union*. Memory of the World Register. https://www.unesco.org/en/memory-world/twenty-one-demands-gdansk-august-1980-birth-solidarity-trades-union-massive-social-movement
- European Solidarity Centre. (n.d.). *How did Solidarność (Solidarity) come to be?* https://ecs.gda.pl/en/how-did-solidarnosc-solidarity-come-to-be/
- International Labour Organization. (n.d.). *Ratifications for Poland — C087 and C098*. NORMLEX. https://normlex.ilo.org/dyn/normlex/en/f?p=1000:11200:0::NO:11200:P11200_COUNTRY_ID:102809`,
      recallContent: [
        {
          prompt: "What was the Inter-factory Strike Committee (MKS), and why was it revolutionary?",
          answer:
            "The Międzyzakładowy Komitet Strajkowy, a committee formed by the Gdańsk shipyard strikers to bargain on behalf of hundreds of striking workplaces at once, instead of each settling separately. Refusing to settle alone, in solidarity across factories, is where the union got both its power and its name.",
        },
        {
          prompt: "Why did the 21 Demands cite ILO Convention No. 87, and what did that expose?",
          answer:
            "Because Poland had ratified Convention 87 (freedom of association) back in 1957 and then ignored it. The workers were not asking for a new right, they were demanding the government obey a treaty it had signed 23 years earlier. It exposed the gap between the paper floor and the real one.",
        },
      ],
    },
    {
      slug: "poland-gdansk-agreement",
      title: "5 · 31 August 1980, and the fight to be legal",
      section: "Section 2 · August 1980, the strike that started it",
      body: `The strike worked. On **31 August 1980**, in the Lenin Shipyard, Lech Wałęsa and the deputy prime minister **Mieczysław Jagielski** signed the **Gdańsk Agreement**, and the communist government conceded the thing no communist government had ever conceded: **the right to form independent, self-governing trade unions.** (Parallel accords were signed at Szczecin on 30 August and Jastrzębie on 3 September, but Gdańsk is the one history remembers.) It was the first legally tolerated independent union in the Soviet bloc.

On **17 September 1980**, delegates from strike committees all over Poland met and made a second fateful choice: rather than form a scatter of regional unions the state could pick off one by one, they merged into **a single national union**, *Niezależny Samorządny Związek Zawodowy "Solidarność"*, the Independent Self-Governing Trade Union "Solidarity." One union, one name, one card. That decision is why the membership numbers in Lesson 1 are so staggering: everyone was joining the *same* thing.

**But a signed agreement is not a legal union, and the last fight of 1980 is the one most tellings skip, even though it is the sharpest illustration of the whole course.** To operate, Solidarność had to be **registered** by a court. And here the state tried to take back with paperwork what it had conceded on the shipyard floor.

Follow this carefully, because it is exactly the kind of detail that gets reported wrong:

- On **24 October 1980**, the **Warsaw provincial court** agreed to register the union, but it did not register the union's own statute. It **inserted a clause of its own**, writing into the union's founding document an acknowledgment of the **"leading role of the Polish United Workers' Party."** In other words: *you may have your union, as long as its own charter says the Party leads it.*
- Solidarność refused. To accept the clause would be to concede, in its founding text, the very supremacy it existed to challenge. The union announced it would call a **nationwide general strike** if the change stood.
- The confrontation went to the country's highest court. On **10 November 1980**, the **Supreme Court of Poland** ruled for the union: it **struck the inserted clause out of the statute itself** and registered Solidarność with its own text intact. The reference to the Party's role and to Poland's alliances was moved into a **separate appendix that simply quoted the already-signed Gdańsk Agreement**, an annex, not a governing clause of the union's charter.

**Why does a fight over where a sentence goes in a legal document matter?** Because it is Question 1 of this course, argued in a courtroom. The state was not trying to ban the union at that point, it had already agreed to it. It was trying to write, into the union's own constitution, that the Party was still supreme. Solidarność understood that if it accepted that sentence, it would be an independent union in name and a Party body in law. **The location of that clause was the difference between a real union and a decorative one, and Solidarność forced the state's own Supreme Court to put it in the harmless place.**

That is what "who may organise?" looks like when the answer is genuinely up for grabs: not a vote, but a ten-million-strong movement, a general-strike threat, and a supreme court, fighting over a single paragraph.

:::reveal When a Warsaw court tried to register Solidarność in October 1980, it inserted a clause into the union's own statute acknowledging the Communist Party's "leading role." Why did the union fight this all the way to the Supreme Court rather than accept it to get registered? ||| Because a clause in the union's *own founding charter* affirming Party supremacy would make it an independent union in name only, a Party body in law. Solidarność existed precisely to be a centre of power the Party did not control. It threatened a general strike, and on 10 November 1980 the Supreme Court struck the clause out of the statute, relegating the reference to a harmless appendix quoting the Gdańsk Agreement. Where the sentence sat was the difference between a real union and a decorative one.

## Sources
- U.S. Bureau of Labor Statistics. (1989, September). *How Poland's Solidarity won freedom of association*. Monthly Labor Review. https://www.bls.gov/opub/mlr/1989/09/art5full.pdf
- European Solidarity Centre. (n.d.). *How did Solidarność (Solidarity) come to be?* https://ecs.gda.pl/en/how-did-solidarnosc-solidarity-come-to-be/
- Encyclopædia Britannica. (n.d.). *Solidarity (Polish trade union)*. https://www.britannica.com/topic/Solidarity`,
      recallContent: [
        {
          prompt: "What did the Gdańsk Agreement (31 August 1980) concede, and why was it historic?",
          answer:
            "It conceded the right to form independent, self-governing trade unions, the first time any communist government in the Soviet bloc had allowed a union outside Party control. Signed by Lech Wałęsa and deputy PM Mieczysław Jagielski at the Lenin Shipyard.",
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
      section: "Section 2 · August 1980, the strike that started it",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What tactic did the August 1980 strikers use to avoid a repeat of the December 1970 street massacre?",
            options: [
              "They marched at night to avoid the army",
              "They held an occupation strike, staying inside the workplace and controlling the gates rather than marching in the streets",
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
              "The Party's, they transmitted decisions downward rather than representing workers upward",
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
              "The Workers' Defence Committee, intellectuals and activists who gave legal and financial help to persecuted workers, linking workers to the dissident intelligentsia",
              "A Party-run union federation",
              "A NATO advisory body",
            ],
            correctIndex: 1,
            explanation:
              "KOR is the hinge that connected workers to dissident allies, one reason the 1980 movement was so much better organised than earlier revolts.",
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
              "A committee that bargained on behalf of hundreds of striking workplaces at once, instead of each settling separately, solidarity across factories, which gave the union its name",
              "A court that registered the union",
              "A Party commission investigating the strike",
            ],
            correctIndex: 1,
            explanation:
              "Refusing to settle alone and bargaining for everyone together turned a single labour dispute into a national movement, and named it.",
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
              "Demand 1 was free independent unions (citing ILO Convention No. 87), ahead of the right to strike, free speech, and pay. The instrument mattered more than any single outcome.",
            sourceLessonSlug: "poland-21-demands",
          },
          {
            prompt: "Why is it significant that Demand 1 cited ILO Convention No. 87?",
            options: [
              "Because Poland had never heard of the ILO",
              "Because Poland had already ratified Convention 87 in 1957 and then ignored it, so the workers were demanding the state obey a treaty it had signed 23 years earlier",
              "Because the ILO ordered Poland to create the union",
              "Because Convention 87 bans all strikes",
            ],
            correctIndex: 1,
            explanation:
              "It exposed the gap between the paper floor and the real one, a recurring pattern in this track. The right already existed on paper; the fight was to make it real.",
            sourceLessonSlug: "poland-21-demands",
          },
          {
            prompt: "What UNESCO recognition do the 21 Demands hold?",
            options: [
              "World Heritage Site",
              "Inscription on the Memory of the World register (2003), making them a citable primary artifact",
              "Intangible Cultural Heritage",
              "None, they were destroyed",
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
              "The right to form independent, self-governing trade unions, the first in the Soviet bloc",
              "Poland's exit from the Warsaw Pact",
              "The abolition of the Communist Party",
            ],
            correctIndex: 1,
            explanation:
              "Signed by Wałęsa and deputy PM Jagielski. It was a union right, not yet a political revolution, but it cracked the Party's monopoly on organisation.",
            sourceLessonSlug: "poland-gdansk-agreement",
          },
          {
            prompt: "Why did the strike committees merge into a SINGLE national union on 17 September 1980?",
            options: [
              "Because the law required exactly one union",
              "So the state could not pick off a scatter of small regional unions one by one, one union, one name, one card",
              "Because Wałęsa demanded personal control",
              "To qualify for foreign funding",
            ],
            correctIndex: 1,
            explanation:
              "Merging into NSZZ 'Solidarność' is why the membership figures are so staggering, everyone was joining the same organisation.",
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
              "It tried to write Party supremacy into the union's founding charter, which would make Solidarność independent in name but a Party body in law.",
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
              "Solidarność had threatened a general strike. Where the sentence sat was the difference between a real union and a decorative one, and the union forced the state's own top court to put it in the harmless place.",
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
              "Rather than take their own raise and go home, they bargained on behalf of every striking workplace through the MKS, solidarity between factories was the whole idea",
              "They distrusted their own leaders",
              "The government forbade separate deals",
            ],
            correctIndex: 1,
            explanation:
              "That choice is what turned a shipyard dispute into a movement of millions, and it is literally where the name Solidarność comes from.",
            sourceLessonSlug: "poland-21-demands",
          },
        ],
      },
    },

    // ────────────── SECTION 3 · TRIUMPH AND REPRESSION ──────────────
    {
      slug: "poland-sixteen-months",
      title: "6 · The sixteen months: what ten million members felt like",
      section: "Section 3 · Triumph, and the state's answer",
      body: `Between the Gdańsk Agreement and what came next lie about **sixteen months**, from **September 1980 to December 1981**, when Solidarność existed **legally**, out in the open, ten million strong. It is worth pausing on this window, because it is the only time in the story when the union got to simply *be* a union in a communist country, and because understanding how alive it was makes what happened next land properly.

**What ten million members actually meant.** Solidarność was never only a labour union in these months. With roughly a third of the population carrying a card, it became something closer to an entire **parallel society**: it ran its own printing presses and bulletins in a country of state media; it debated openly in a country of enforced silence; it organised, argued, and elected its own leaders democratically in a country that had not held a free election in decades. Historians sometimes call this period the **"carnival of Solidarity"**, a burst of self-organisation and free expression that Poles had not experienced in their adult lives.

**But it was not a holiday, and the course will not pretend it was.** Three pressures built through 1981:

1. **The economy was collapsing.** Poland was deep in debt and mismanagement; shortages worsened; rationing spread to basic goods. A union cannot bargain its way out of empty shelves, and the daily reality for members was queues, not victories.
2. **The state kept testing the limits.** In **March 1981**, in the **Bydgoszcz** crisis, police beat Solidarity activists, nearly triggering a general strike and showing how fragile the settlement was. Farmers had to fight their own battle to register **Rural Solidarity** (*NSZZ Rolników Indywidualnych "Solidarność"*), finally recognised in **May 1981**.
3. **Moscow was watching.** An independent mass movement in a Warsaw Pact country was exactly the thing the Soviet Union had crushed with tanks in **Hungary (1956)** and **Czechoslovakia (1968)**. The threat of Soviet military intervention hung over every decision Solidarność made, and it shaped the union's caution.

So the sixteen months were exhilarating and precarious at the same time: a genuine democratic explosion happening inside a police state that was going broke, watched by a superpower with a history of sending in the army. Something was going to give. In December 1981, it did, and not from the direction most feared.

:::reveal Why do historians sometimes call the sixteen months of legal Solidarność the "carnival of Solidarity", and what makes that phrase only half the truth? ||| Because with a third of the country as members, Solidarność became a parallel society, free presses, open debate, democratic elections, things Poles had not known in their adult lives, an exhilarating burst of self-organisation. But it is only half the truth because those same months were shadowed by a collapsing economy and rationing, state provocations like the Bydgoszcz beatings, and the constant threat of Soviet military intervention. It was a democratic explosion inside a bankrupt police state watched by a superpower, thrilling and precarious at once.

## Sources
- European Solidarity Centre. (n.d.). *How did Solidarność (Solidarity) come to be?* https://ecs.gda.pl/en/how-did-solidarnosc-solidarity-come-to-be/
- Encyclopædia Britannica. (n.d.). *Solidarity (Polish trade union)*. https://www.britannica.com/topic/Solidarity`,
      recallContent: [
        {
          prompt: "What made Solidarność, in 1980-81, 'more than a union'?",
          answer:
            "With ~10 million members it became a parallel society, running independent presses and bulletins, debating openly, and electing its leaders democratically inside a one-party state. The 'carnival of Solidarity' was a burst of free self-organisation Poles had not known in their adult lives.",
        },
        {
          prompt: "What three pressures built during 1981?",
          answer:
            "(1) A collapsing, indebted economy with worsening shortages and rationing; (2) state provocations like the March 1981 Bydgoszcz beatings of activists; and (3) the constant threat of Soviet military intervention, as in Hungary 1956 and Czechoslovakia 1968.",
        },
      ],
    },
    {
      slug: "poland-martial-law",
      title: "7 · 13 December 1981: the state answers",
      section: "Section 3 · Triumph, and the state's answer",
      body: `This is the lesson the triumphant version leaves out, and it is why this course teaches the repression and not only the victory. **The most important thing a student can carry out of the Poland story is that Solidarność did not win in a straight line. It was crushed first, and stayed crushed for most of a decade.**

**In the early hours of 13 December 1981**, General **Wojciech Jaruzelski**, who by then held all three of the top posts (head of the Party, prime minister, and defence minister), declared **martial law** (*stan wojenny*). Power passed to a **Military Council of National Salvation** (the **WRON**). Overnight:

- Solidarność was **suspended**, its offices seized, its presses shut, telephones cut, travel between regions banned, a curfew imposed.
- Roughly **ten thousand** Solidarity activists and advisers were **interned** without trial, including most of the national leadership and **Lech Wałęsa** himself.
- Tanks and the **ZOMO** riot police took the streets. Workers who occupied their factories in protest were cleared by force.

**And then the killing that the course refuses to round off.** At the **Wujek coal mine** in Katowice, miners occupied the pit and struck against martial law. On **16 December 1981**, three days in, police and army units moved in, and officers **opened fire on the miners, killing nine and wounding many more.** They were unarmed. Name the toll plainly: **nine dead men at Wujek** is the single sharpest answer to the anchor's Question 4, *what happens to you if you try?*, anywhere in the Wave-1 courses.

**The union did not die, but it went underground.** Formally, Solidarność was not just suspended but **outlawed by statute on 8 October 1982**, when a new trade-union law dissolved it. Martial law itself was **suspended at the end of 1982 and formally lifted on 22 July 1983.** Through those years and beyond, Solidarność survived as an **underground organisation**, clandestine presses, smuggled funds, an entire secret civil society, while its leaders moved in and out of detention. In **1983, Lech Wałęsa was awarded the Nobel Peace Prize** (his wife accepted it; he feared he would not be allowed back into Poland if he travelled). In **October 1984**, the secret police **abducted and murdered Father Jerzy Popiełuszko**, a priest closely associated with the movement, a killing that, unusually, led to a public trial of the officers responsible, and that hardened opposition further.

**Hold the whole shape of this in your head, because it is the honest one.** A union of ten million was defeated by a state willing to use its army against it, and it spent roughly seven years, 1982 to 1989, banned, hunted, and operating in secret. When Solidarność finally won, it did **not** win because it was never beaten. It won because it **survived being beaten**, and because the state that beat it eventually ran out of money and options. That is a harder and truer story than "the workers marched and freedom came," and it is the one worth knowing.

:::reveal On 13 December 1981 the Polish state answered Solidarność with martial law. Give the single fact that best captures how far the repression went, and how long it lasted. ||| At the Wujek coal mine on 16 December 1981, police and army opened fire on striking miners, killing nine unarmed men. Roughly ten thousand activists (including Wałęsa) were interned, the union was outlawed by statute on 8 October 1982, and Solidarność spent about seven years (1982-1989) banned and operating underground. It won not because it was never beaten, but because it survived being beaten while the state ran out of money and options.

## Sources
- European Network Remembrance and Solidarity. (n.d.). *The introduction of martial law in Poland*. https://enrs.eu/article/the-introduction-of-martial-law-in-poland
- Institute of National Remembrance / European Solidarity Centre. (n.d.). *Pacification of Wujek, 16 December 1981*. https://ecs.gda.pl/en/
- The Nobel Foundation. (n.d.). *Lech Wałęsa — Nobel Peace Prize 1983*. https://www.nobelprize.org/prizes/peace/1983/walesa/facts/`,
      recallContent: [
        {
          prompt: "What happened at the Wujek coal mine on 16 December 1981?",
          answer:
            "Three days into martial law, police and army units opened fire on striking miners occupying the pit, killing nine unarmed men and wounding many more. It is the sharpest answer to 'what happens to you if you try?' in the Wave-1 courses.",
        },
        {
          prompt: "Who imposed martial law, and how long was Solidarność banned?",
          answer:
            "General Wojciech Jaruzelski, ruling through the Military Council of National Salvation (WRON), imposed it on 13 December 1981. Solidarność was outlawed by statute on 8 October 1982 and operated underground for roughly seven years until 1989.",
        },
      ],
    },
    {
      slug: "poland-quiz-3",
      title: "Section 3 quiz · Triumph and repression",
      section: "Section 3 · Triumph, and the state's answer",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Roughly how long did Solidarność exist LEGALLY before martial law?",
            options: ["About sixteen months (September 1980 to December 1981)", "About ten years", "A few weeks", "It was never legal"],
            correctIndex: 0,
            explanation:
              "From the Gdańsk Agreement / registration to 13 December 1981, the only window in which the union got to operate openly in a communist state.",
            sourceLessonSlug: "poland-sixteen-months",
          },
          {
            prompt: "What is meant by the 'carnival of Solidarity'?",
            options: [
              "A music festival the union sponsored",
              "The 1980-81 burst of free self-organisation, independent presses, open debate, democratic elections, that made Solidarność a parallel society",
              "The celebrations after the 1989 election",
              "A Party propaganda campaign",
            ],
            correctIndex: 1,
            explanation:
              "With a third of the country as members, the union became far more than a labour organisation, an entire free civil society inside a one-party state.",
            sourceLessonSlug: "poland-sixteen-months",
          },
          {
            prompt: "Which pressure was NOT building against Solidarność during 1981?",
            options: [
              "A collapsing, indebted economy with worsening shortages",
              "State provocations such as the Bydgoszcz beatings",
              "The threat of Soviet military intervention",
              "A flood of foreign investment overheating the economy",
            ],
            correctIndex: 3,
            explanation:
              "Communist Poland's problem was scarcity and debt, not foreign investment. The real pressures were economic collapse, state provocation, and the Soviet threat.",
            sourceLessonSlug: "poland-sixteen-months",
          },
          {
            prompt: "Why did the threat of Soviet intervention shape Solidarność's caution?",
            options: [
              "Because the USSR funded the union",
              "Because the USSR had crushed independent movements with tanks in Hungary (1956) and Czechoslovakia (1968), and Poland was a Warsaw Pact country",
              "Because the union wanted to join the USSR",
              "Because Moscow controlled the Polish courts directly",
            ],
            correctIndex: 1,
            explanation:
              "An independent mass movement in a Warsaw Pact state was exactly what Moscow had previously answered with the army. That history hung over every decision.",
            sourceLessonSlug: "poland-sixteen-months",
          },
          {
            prompt: "Who declared martial law in Poland, and when?",
            options: [
              "Lech Wałęsa, August 1980",
              "General Wojciech Jaruzelski, 13 December 1981",
              "Pope John Paul II, June 1979",
              "Mieczysław Jagielski, October 1980",
            ],
            correctIndex: 1,
            explanation:
              "Jaruzelski held the top Party, government and military posts and ruled through the Military Council of National Salvation (WRON).",
            sourceLessonSlug: "poland-martial-law",
          },
          {
            prompt: "What happened at the Wujek coal mine on 16 December 1981?",
            options: [
              "The miners won a pay rise",
              "Police and army opened fire on striking miners, killing nine unarmed men",
              "The mine was closed permanently",
              "Wałęsa was arrested there",
            ],
            correctIndex: 1,
            explanation:
              "Three days into martial law. Nine dead at Wujek is the sharpest answer to the anchor's Question 4 in the Wave-1 courses.",
            sourceLessonSlug: "poland-martial-law",
          },
          {
            prompt: "Roughly how many Solidarity activists were interned under martial law, and was Wałęsa among them?",
            options: [
              "About 100; no",
              "About ten thousand, including Wałęsa and most of the national leadership",
              "None, they all fled abroad",
              "About a million",
            ],
            correctIndex: 1,
            explanation:
              "Internment without trial swept up around 10,000 people, decapitating the union's open leadership overnight.",
            sourceLessonSlug: "poland-martial-law",
          },
          {
            prompt: "When was Solidarność formally outlawed by statute?",
            options: [
              "13 December 1981",
              "8 October 1982, when a new trade-union law dissolved it",
              "4 June 1989",
              "It was never formally banned",
            ],
            correctIndex: 1,
            explanation:
              "Suspended under martial law in December 1981, then legally dissolved by the October 1982 trade-union law. It went underground.",
            sourceLessonSlug: "poland-martial-law",
          },
          {
            prompt: "When was martial law formally lifted?",
            options: ["22 July 1983", "December 1981", "1989", "1980"],
            correctIndex: 0,
            explanation:
              "Suspended at the end of 1982 and formally lifted on 22 July 1983, but repression and the union's illegality continued for years afterward.",
            sourceLessonSlug: "poland-martial-law",
          },
          {
            prompt: "What recognition did Lech Wałęsa receive in 1983?",
            options: [
              "The Nobel Peace Prize",
              "The Polish presidency",
              "A seat in the communist parliament",
              "Command of the army",
            ],
            correctIndex: 0,
            explanation:
              "His wife accepted it; he feared he would not be allowed back into Poland if he travelled to collect it himself.",
            sourceLessonSlug: "poland-martial-law",
          },
          {
            prompt: "What happened to Father Jerzy Popiełuszko in October 1984?",
            options: [
              "He became head of Solidarność",
              "He was abducted and murdered by the secret police, a priest closely associated with the movement",
              "He was elected to parliament",
              "He emigrated to Rome",
            ],
            correctIndex: 1,
            explanation:
              "The killing led, unusually, to a public trial of the officers responsible, and hardened opposition to the regime.",
            sourceLessonSlug: "poland-martial-law",
          },
          {
            prompt: "The course says Solidarność 'did not win in a straight line.' What is the honest shape of the story?",
            options: [
              "It was never defeated",
              "It was crushed first and spent roughly seven years (1982-1989) banned and underground, it won by surviving defeat while the state ran out of money and options",
              "It won within a year of forming",
              "It was defeated permanently",
            ],
            correctIndex: 1,
            explanation:
              "'The workers marched and freedom came' is false. The true story is defeat, survival underground, and eventual victory as the state collapsed, harder and truer.",
            sourceLessonSlug: "poland-martial-law",
          },
          {
            prompt: "Which body governed Poland during martial law?",
            options: [
              "The Sejm",
              "The Military Council of National Salvation (WRON)",
              "The Supreme Court",
              "The European Union",
            ],
            correctIndex: 1,
            explanation:
              "Power passed to the WRON, a military junta headed by Jaruzelski, which suspended the union and imposed curfews, travel bans and censorship.",
            sourceLessonSlug: "poland-martial-law",
          },
          {
            prompt: "Farmers won recognition of their own union, Rural Solidarity, in what year?",
            options: ["May 1981", "1976", "1989", "1970"],
            correctIndex: 0,
            explanation:
              "NSZZ Rolników Indywidualnych 'Solidarność' was recognised in May 1981, after its own registration struggle, part of the movement's spread beyond industry.",
            sourceLessonSlug: "poland-sixteen-months",
          },
          {
            prompt: "Why can a union not simply 'bargain its way out' of the 1981 Polish economy?",
            options: [
              "Because bargaining was illegal",
              "Because the economy was collapsing into shortages and rationing, you cannot negotiate goods onto empty shelves",
              "Because the union had no members",
              "Because wages were already the highest in Europe",
            ],
            correctIndex: 1,
            explanation:
              "Deep debt and mismanagement meant the daily member experience was queues, not victories, one reason the settlement was so fragile.",
            sourceLessonSlug: "poland-sixteen-months",
          },
        ],
      },
    },

    // ────────────── SECTION 4 · 1989 ──────────────
    {
      slug: "poland-round-table",
      title: "8 · 1989: a union negotiates a state out of existence",
      section: "Section 4 · 1989, the union at the table",
      body: `By the late 1980s the Polish state was **exhausted and broke.** The economy that martial law was supposed to stabilise had not recovered; foreign debt was crushing; and a fresh **wave of strikes in 1988**, this time led partly by a younger generation, showed that repression had bought time, not peace. The regime faced a choice it had spent a decade avoiding: keep suppressing a movement it could not kill, or **talk to it.** It chose to talk. That decision is the most remarkable thing about Poland's transition, and Solidarność's role in it is why this course exists.

**The Round Table.** From **6 February to 5 April 1989**, the government sat across an actual round table from the still-technically-illegal Solidarność, the union it had banned seven years earlier, and negotiated the terms of sharing power. Think about how strange that is: the state's designated negotiating partner for the future of the country was **a trade union.** Not an army, not a rival party, not a foreign power. A union of workers was the institution with enough legitimacy and organisation to speak for the society against the state.

**The deal.** The Round Table produced two headline outcomes:

1. **Solidarność was relegalised**, allowed to exist and organise again.
2. **Partly-free elections** were scheduled. The compromise was carefully rigged in the Party's favour: in the lower house (the **Sejm**), only **35% of the seats** would be openly contested, the Party and its allies reserved the other 65% for themselves. But a brand-new upper house, the **Senate**, would be **entirely freely elected.** The Party expected to manage the outcome.

**The election, 4 June 1989.** It did not go as the Party expected. Voting for Solidarity's Citizens' Committee candidates, Poles delivered a landslide so total it broke the arrangement: Solidarność won **every single one** of the 35% of Sejm seats it was allowed to contest, and **99 of the 100 seats** in the freely-elected Senate. The communist candidates, even running unopposed on the reserved list, were humiliated when voters crossed their names off. The "managed" election had become a **referendum on communist rule, and communism lost.**

**What followed came fast.** The rigged arithmetic could not hold against a result that lopsided. In **August 1989**, **Tadeusz Mazowiecki**, a Solidarity adviser, became **prime minister, the first non-communist head of government in the Soviet bloc** in over four decades. Within months the other communist states of Central and Eastern Europe fell in turn; the Berlin Wall opened in November 1989. In **December 1990**, Lech Wałęsa, the electrician who had climbed the shipyard wall, was elected **President of Poland** in a fully free vote.

**Now say clearly what just happened, in the vocabulary of this course.** A **trade union** was the primary vehicle that negotiated a communist state out of power and formed the government that replaced it. That is Question 1, "who may organise?", resolved at the scale of an entire nation. **No other course in this track can show you that.** In Germany a union wins a seat on a board; in the Nordics it runs the unemployment fund; in Mexico it can be a tool of the boss. In Poland, for one extraordinary stretch, the union *was* the opposition, and then it *was* the state.

And that, precisely, is where its troubles began. Winning the country turned out to be the easy part. Lesson 9 is the bill.

:::reveal In 1989 the Polish communist government needed a negotiating partner to arrange a transition. Why is it so striking that the partner was a trade union? ||| Because in most transitions the state bargains with an army, a rival party, or a foreign power. In Poland the institution with enough legitimacy and organisation to speak for the whole society against the state was a *union of workers*, Solidarność. It negotiated partly-free elections at the Round Table, won them in a landslide on 4 June 1989, and formed the first non-communist government in the Soviet bloc. A trade union was the primary vehicle of a national political revolution, which no other country in this track can show.

## Sources
- European Solidarity Centre. (n.d.). *How did Solidarność (Solidarity) come to be?* https://ecs.gda.pl/en/how-did-solidarnosc-solidarity-come-to-be/
- Encyclopædia Britannica. (n.d.). *Solidarity (Polish trade union)*. https://www.britannica.com/topic/Solidarity
- Chancellery of the President of the Republic of Poland. (n.d.). *1989 — Freedom Day*. https://www.president.pl/archives/bronislaw-komorowski/freedom-day/1989`,
      recallContent: [
        {
          prompt: "What did the Round Table (6 Feb-5 Apr 1989) and the 4 June 1989 election produce?",
          answer:
            "The Round Table relegalised Solidarność and scheduled partly-free elections (35% of the Sejm contestable; the Senate fully free). On 4 June 1989 Solidarity won every contestable Sejm seat and 99 of 100 Senate seats, a landslide that became a referendum communism lost, leading to Mazowiecki as the bloc's first non-communist PM in August 1989.",
        },
        {
          prompt: "In the vocabulary of the four questions, what did Poland 1989 resolve?",
          answer:
            "Question 1, 'who may organise?', resolved at national scale. A trade union was the primary vehicle that negotiated a communist state out of power and formed the government that replaced it. No other course in the track shows a union as the engine of a national political revolution.",
        },
      ],
    },
    {
      slug: "poland-shock-therapy",
      title: "9 · What winning cost: shock therapy",
      section: "Section 4 · 1989, the union at the table",
      body: `Here is the turn that makes Poland the most honest course in the track. **The union won the country, and then the government the union formed did something to Polish workers that no communist government had dared.**

The Mazowiecki government inherited an economy in freefall: hyperinflation, empty shelves, a worthless currency, unpayable debt. Its finance minister, **Leszek Balcerowicz**, chose the most radical possible cure, a package of reforms, passed at the end of 1989 and in force from **1 January 1990**, that came to be called the **Balcerowicz Plan**, or more bluntly, **"shock therapy."** In one stroke it **freed prices, cut subsidies, tightened money and credit, and opened the economy to the market and to competition.** The logic was that a slow transition would fail, so the pain should be taken all at once.

**It worked, in the way its designers meant.** Hyperinflation was broken; the shelves filled; after a deep initial slump the economy began, from the mid-1990s, a long run of growth that eventually made Poland one of the transition's success stories. Economists still argue about whether a gentler path was possible, but few dispute that the plan stabilised a collapsing economy.

**And here is the cost, and why you must not skip it.** Shock therapy fell hardest on exactly the people who had built Solidarność, the industrial workers of the state factories, mines and shipyards. When subsidies ended and firms faced real competition overnight, the great state enterprises that had been the union's heartland began to shrink and close. **Unemployment, which communism had officially reported as zero, went from essentially nothing to 6.5% within 1990 and to 16.4% by 1993** (Statistics Poland). For the first time in living memory, millions of Polish workers could lose their jobs, and the government presiding over it was **their** government, staffed by **their** movement's advisers.

**Read that as the mechanism it is, not just an irony.** The very shipyard that produced Solidarność, the Gdańsk yard, faced restructuring and decline in the years after the movement it birthed took power. A union that had promised workers dignity and security found itself, in office, administering insecurity to them. Many members felt betrayed, and the movement began to **fracture**: the moral authority of "Solidarity" splintered into competing camps almost immediately, in a 1990 feud between the Wałęsa and Mazowiecki wings that Poles called the **"war at the top"** (*wojna na górze*).

**This is the deepest lesson in the course, so let it sit.** It is possible for a union to win the largest political victory a union has ever won and, by that very victory, be placed in the position of hurting the workers it represents. Solidarność was not corrupt and it was not stupid; it faced a genuinely broken economy with no painless options. But **the workplace and the country are different battlefields, and winning one can cost you the other.** Poland won its freedom and, in the same decade, began losing the dense, organised, bargaining labour movement that had delivered it. Section 5 counts what was lost.

:::reveal Solidarność won the country in 1989. Why is the "shock therapy" that followed the most uncomfortable, and most important, part of the whole story? ||| Because the government the union formed adopted the Balcerowicz Plan (in force 1 January 1990), which freed prices and cut subsidies overnight, and the pain fell hardest on the industrial workers who had built Solidarność. Unemployment went from an official zero to 16.4% by 1993 (GUS) as the state factories and shipyards shrank. A union that promised workers security found itself, in office, administering insecurity to them. Winning the country and holding the workplace turned out to be different battles, and Poland shows you can win one and lose the other.

## Sources
- Statistics Poland (GUS). (n.d.). *Registered unemployment rate 1990–2025*. https://stat.gov.pl/en/topics/labour-market/registered-unemployment/unemployment-rate-1990-2025,3,1.html
- Encyclopædia Britannica. (n.d.). *Leszek Balcerowicz* / *Poland: Economy after 1989*. https://www.britannica.com/biography/Leszek-Balcerowicz
- Eurofound. (2002). *The dynamics of unemployment 1990–2002*. https://www.eurofound.europa.eu/en/resources/article/2002/dynamics-unemployment-1990-2002`,
      recallContent: [
        {
          prompt: "What was the Balcerowicz Plan, and when did it take effect?",
          answer:
            "The 'shock therapy' package (in force 1 January 1990) that freed prices, cut subsidies, tightened money, and opened Poland's economy to the market all at once. It broke hyperinflation and eventually restored growth, but caused a deep transitional recession.",
        },
        {
          prompt: "How did shock therapy affect the workers who had built Solidarność, and what does that teach?",
          answer:
            "It fell hardest on the industrial workers of the state factories, mines and shipyards, as those enterprises shrank and closed; unemployment rose from an official zero to 16.4% by 1993 (GUS). The union's own government administered insecurity to its own base, teaching that winning the country and holding the workplace are different battles.",
        },
      ],
    },
    {
      slug: "poland-quiz-4",
      title: "Section 4 quiz · 1989 and its price",
      section: "Section 4 · 1989, the union at the table",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why did the Polish regime agree to negotiate with Solidarność in 1989?",
            options: [
              "It had defeated the union and wanted to celebrate",
              "The economy was exhausted and broke, and a 1988 strike wave showed repression had bought time, not peace",
              "The Soviet Union ordered it to hand over power",
              "The union had won an election already",
            ],
            correctIndex: 1,
            explanation:
              "A decade of repression had not killed the movement, and the state could no longer afford the stalemate. So it chose to talk.",
            sourceLessonSlug: "poland-round-table",
          },
          {
            prompt: "Who was the communist state's negotiating partner at the 1989 Round Table?",
            options: [
              "A foreign government",
              "The still-technically-illegal trade union Solidarność",
              "The army",
              "The Catholic Church alone",
            ],
            correctIndex: 1,
            explanation:
              "The institution with enough legitimacy and organisation to speak for society against the state was a union of workers, which is the whole point of the course.",
            sourceLessonSlug: "poland-round-table",
          },
          {
            prompt: "How were the June 1989 elections deliberately limited in the Party's favour?",
            options: [
              "Only men could vote",
              "Only 35% of the Sejm's seats were openly contested; the Party reserved 65% for itself (though the new Senate was fully free)",
              "Solidarność candidates were banned",
              "The results were secret",
            ],
            correctIndex: 1,
            explanation:
              "The compromise was rigged so the Party expected to keep control, an expectation the voters demolished.",
            sourceLessonSlug: "poland-round-table",
          },
          {
            prompt: "What was the result of the 4 June 1989 election?",
            options: [
              "The communists won comfortably",
              "Solidarity won every contestable Sejm seat and 99 of 100 Senate seats, a landslide that became a referendum communism lost",
              "A narrow Solidarity win in one region",
              "The election was cancelled",
            ],
            correctIndex: 1,
            explanation:
              "Even unopposed communist candidates were crossed off ballots. The 'managed' election turned into a verdict on the regime.",
            sourceLessonSlug: "poland-round-table",
          },
          {
            prompt: "Who became prime minister in August 1989, and why was it historic?",
            options: [
              "Wojciech Jaruzelski, he kept power",
              "Tadeusz Mazowiecki, the first non-communist head of government in the Soviet bloc in over four decades",
              "Leszek Balcerowicz, the first union president",
              "Lech Wałęsa, immediately after the election",
            ],
            correctIndex: 1,
            explanation:
              "A Solidarity adviser became PM, and within months the other communist states of the region fell in turn.",
            sourceLessonSlug: "poland-round-table",
          },
          {
            prompt: "In the vocabulary of the four questions, what did Poland 1989 uniquely demonstrate?",
            options: [
              "That unions should stay out of politics",
              "That a trade union could be the primary vehicle that negotiates a state out of power and forms the next government, Question 1 at national scale",
              "That co-determination works",
              "That the Ghent system raises density",
            ],
            correctIndex: 1,
            explanation:
              "No other course in the track shows a union as the engine of a national political revolution. That is why Poland earns its slot.",
            sourceLessonSlug: "poland-round-table",
          },
          {
            prompt: "What was the 'Balcerowicz Plan'?",
            options: [
              "A plan to nationalise all industry",
              "The 'shock therapy' package (in force 1 January 1990) that freed prices, cut subsidies, tightened money and opened the economy all at once",
              "A Soviet aid programme",
              "A plan to ban private business",
            ],
            correctIndex: 1,
            explanation:
              "Radical, all-at-once market reform, on the theory that a slow transition would fail. It broke hyperinflation but caused a deep slump.",
            sourceLessonSlug: "poland-shock-therapy",
          },
          {
            prompt: "How did registered unemployment change in Poland after 1989 (GUS)?",
            options: [
              "It stayed at zero",
              "It rose from an official zero to 6.5% within 1990 and to 16.4% by 1993",
              "It fell steadily",
              "It reached 50%",
            ],
            correctIndex: 1,
            explanation:
              "Communism had reported zero unemployment; shock therapy made mass joblessness real as state enterprises shrank and closed.",
            sourceLessonSlug: "poland-shock-therapy",
          },
          {
            prompt: "Why is the shock-therapy chapter the 'most uncomfortable' part of the Poland story?",
            options: [
              "Because the union refused to govern",
              "Because the government the union formed imposed reforms whose pain fell hardest on the industrial workers who had built Solidarność",
              "Because the reforms failed completely",
              "Because foreign powers imposed the plan",
            ],
            correctIndex: 1,
            explanation:
              "A union that promised workers security found itself, in office, administering insecurity to its own base. That is the honest core of the course.",
            sourceLessonSlug: "poland-shock-therapy",
          },
          {
            prompt: "What does the course mean by 'the workplace and the country are different battlefields'?",
            options: [
              "Unions should never enter politics",
              "Winning national political power (the country) and maintaining a dense, organised bargaining movement (the workplace) are separate achievements, and winning one can cost you the other",
              "Factories and parliaments are in different cities",
              "Strikes are illegal in Poland",
            ],
            correctIndex: 1,
            explanation:
              "Poland won its freedom and, in the same decade, began losing the organised labour movement that delivered it. That is the deepest lesson here.",
            sourceLessonSlug: "poland-shock-therapy",
          },
          {
            prompt: "What was the 'war at the top' (wojna na górze)?",
            options: [
              "A Soviet invasion",
              "A 1990 feud between the Wałęsa and Mazowiecki wings, as the moral authority of 'Solidarity' fractured into competing camps",
              "A miners' strike",
              "A dispute with the Catholic Church",
            ],
            correctIndex: 1,
            explanation:
              "The unified movement splintered almost as soon as it took power, an early sign of the fragmentation Section 5 examines.",
            sourceLessonSlug: "poland-shock-therapy",
          },
          {
            prompt: "Did shock therapy ultimately 'work,' by its designers' measure?",
            options: [
              "No, hyperinflation continued forever",
              "Broadly yes, it broke hyperinflation and Poland later became a growth success story, though economists still debate whether a gentler path was possible and the transitional pain was severe",
              "It was never actually implemented",
              "It made Poland the poorest country in Europe",
            ],
            correctIndex: 1,
            explanation:
              "The course is honest both ways: the plan stabilised a collapsing economy AND it inflicted real, concentrated harm on the union's own base.",
            sourceLessonSlug: "poland-shock-therapy",
          },
          {
            prompt: "When was Lech Wałęsa elected President of Poland?",
            options: ["December 1990", "June 1989", "August 1980", "1983"],
            correctIndex: 0,
            explanation:
              "The electrician who climbed the shipyard wall in 1980 was elected head of state in a fully free vote in December 1990.",
            sourceLessonSlug: "poland-round-table",
          },
          {
            prompt: "Which enterprise, the very birthplace of Solidarność, faced restructuring and decline after the movement took power?",
            options: [
              "The Gdańsk shipyard",
              "A German car plant",
              "A Warsaw bank",
              "The Wieliczka salt mine",
            ],
            correctIndex: 0,
            explanation:
              "The yard that produced the movement faced the same market forces the movement's government unleashed, a vivid image of winning the country and losing the workplace.",
            sourceLessonSlug: "poland-shock-therapy",
          },
          {
            prompt: "Why does the course stress that Solidarność 'was not corrupt and was not stupid' about shock therapy?",
            options: [
              "To excuse the union of any responsibility",
              "To make clear the harm came not from bad faith but from a genuinely broken economy with no painless options, the tragedy is structural, not a moral failing",
              "Because the union opposed the plan entirely",
              "Because the plan was secretly designed by Moscow",
            ],
            correctIndex: 1,
            explanation:
              "The point is not to blame the union but to show that even good actors can be trapped: the workplace and the country are different battlefields.",
            sourceLessonSlug: "poland-shock-therapy",
          },
        ],
      },
    },

    // ────────────── SECTION 5 · WON THE COUNTRY, LOST THE WORKPLACE ──────────────
    {
      slug: "poland-density-collapse",
      title: "10 · The workplace it lost: bargaining in Poland today",
      section: "Section 5 · Won the country, lost the workplace",
      body: `Now we close the circle back to Lesson 1. The union won the country in 1989. Here is the workplace it has today, in numbers, each with a year and a source.

| Poland today | Figure |
| --- | --- |
| Trade union **density** (members as a share of employees) | **9.4%** (2022) |
| Collective bargaining **coverage** | **11.6%** (2023) |
| **Employer-organisation** density | **56.3%** (2022) |

*(All three: OECD/AIAS ICTWSS database, country note for Poland. Other bodies put coverage a little higher, ETUI reports around 13%, but the picture is the same wherever you look.)*

**Start with the comparison this whole track is built to let you make.** Go back to the Germany course's opening table. Germany: density ~14%, coverage ~49%, coverage more than three times membership. Poland: density ~9%, coverage ~12%, coverage barely above membership. **Same rough density; completely different coverage.** Why?

**Because Poland answers Question 3 the opposite way from Germany, and you now know exactly what that means.** Recall the German machine: employers join an employers' association → the association signs a *sectoral* agreement → every member firm is bound → the terms reach all their workers. That is why German coverage floats free of German membership. Poland has the employers' side of that machine, employer-organisation density is a respectable **56.3%**, but it has almost none of the **sectoral bargaining** that would turn it into coverage. **Sector-level agreements in Poland have dwindled to a handful.** Bargaining happens, when it happens at all, **company by company.**

**And company-level bargaining has a built-in ceiling that sectoral bargaining does not.** In Poland, a company collective agreement generally requires a **trade union to exist inside that particular company** (ETUI, 2023). Now layer on a fact about the Polish economy: around **70% of employees work in small and medium-sized firms, and nearly half of those in micro-enterprises** (ETUI). Unions are rare in small firms, they are hard to organise and easy to discourage. So the bargaining mechanism Poland relies on simply **cannot reach most of the workforce**, because most of the workforce is in firms too small to have a union in the first place. Coverage is chained to membership, and membership is low.

**This is the structural reason the two numbers in Lesson 1 sit so far apart.** It is not that Poles are apathetic or that Solidarność "gave up." It is that the transition rebuilt Polish industrial relations on a **decentralised, firm-by-firm** model, the opposite of the sectoral model that lets a country like Germany protect half its workers with a seventh of them as members. Coverage that was around **30% in the 1990s has fallen to roughly 12-13% today** (ETUI). The revolution delivered democracy and, eventually, prosperity. It did not deliver a strong bargaining system, and by the design that emerged, it almost could not.

**So the answer to "who bargains with whom, and at what level?" in Poland is: mostly no one, at the level of the single firm.** That is the workplace a union of ten million left behind.

:::reveal Poland and Germany have roughly the same union density (~9% vs ~14%), but Germany's bargaining coverage (~49%) dwarfs Poland's (~12%). Using Question 3, explain the gap. ||| It is the *level* of bargaining. Germany bargains at the sectoral level, employers' associations sign agreements that bind every member firm, so coverage floats free of union membership. Poland bargains company by company, sectoral agreements have nearly vanished, and a company agreement generally needs a union inside that firm, but ~70% of Polish workers are in SMEs too small to have one. So Polish coverage is chained to its low membership, while Germany's is not.

## Sources
- OECD/AIAS. (n.d.). *ICTWSS database — country note: Poland*. https://www.oecd.org/content/dam/oecd/en/data/datasets/oecd-aias-ictwss/Poland.pdf
- European Trade Union Institute. (2023). *Poland: Trade unions developing after a decline* (Chapter 22). https://www.etui.org/sites/default/files/2023-06/Chapter22_Poland_Trade%20unions%20developing%20after%20a%20decline_2023.pdf
- European Trade Union Institute. (2025). *Poland: Collective bargaining and minimum wage regime*. https://www.etui.org/sites/default/files/2025-06/Poland_Collective%20bargaining%20and%20minimum%20wage%20regime_2025_0.pdf`,
      recallContent: [
        {
          prompt: "Give Poland's union density, bargaining coverage, and employer-organisation density, with years and source.",
          answer:
            "Density 9.4% (2022), bargaining coverage 11.6% (2023), employer-organisation density 56.3% (2022), all OECD/AIAS ICTWSS. Coverage is barely above membership, unlike Germany where it is over three times membership.",
        },
        {
          prompt: "Why is Polish coverage 'chained to' its low membership, when Germany's is not?",
          answer:
            "Poland bargains company by company (sectoral agreements have nearly vanished), and a company agreement generally needs a union inside that firm, but ~70% of workers are in SMEs too small to have one. Germany's sectoral bargaining, by contrast, binds whole industries through employer-association membership, so its coverage floats free of membership.",
        },
      ],
    },
    {
      slug: "poland-solidarnosc-today",
      title: "11 · Solidarność today, and a legacy Poland argues about",
      section: "Section 5 · Won the country, lost the workplace",
      body: `The Solidarność of 2026 is not the Solidarność of 1980, and one of the things this course owes you is an honest, careful account of the difference, including the parts that are politically contested in Poland right now. The rule for this lesson is the same one the anchor course uses for Hoffa and for Marikana: **state what is documented, date it, and do not adjudicate what is genuinely disputed.**

**First, the landscape. Poland does not have one union movement; it has a fragmented one.** There are three nationally representative union confederations (Eurofound; ETUI, 2023):

- **NSZZ "Solidarność"**, the direct descendant of the 1980 movement, founded 1980.
- **OPZZ** (the All-Poland Alliance of Trade Unions), the **second** major confederation, and here is an irony worth holding: it was **created in 1984 by the communist regime** as an official alternative *after* Solidarność was banned. The union the state built to replace the one it crushed is now a legitimate, independent confederation of its own, generally on the political left.
- **FZZ** (the Trade Unions Forum), a third confederation, established in 2002.

That three-way split is itself part of the weakness Lesson 10 described: bargaining power that might be concentrated is instead divided among rival federations that do not always cooperate.

**Second, the politics, stated as fact and dated.** Since the 1990s, NSZZ "Solidarność" has been openly aligned with the **national-catholic right** in Polish politics. It has publicly backed candidates and parties of that camp, for example, it campaigned for the **Law and Justice (PiS)** party's candidate, Lech Kaczyński, in the **2005** presidential election, and it has cooperated with PiS since (Eurofound). A union that was founded as a broad, cross-ideological movement of *the whole society* against the state has, in the democratic era, become a **partisan actor** identified with one side of a bitterly divided politics. You do not have to have an opinion about Polish politics to see that this is a very different institution from the ten-million-strong national movement of 1980, and to understand why some Poles who revere the 1980 Solidarność feel estranged from the organisation that carries its name today.

**Third, and this is the paragraph the proposal for this course specifically asked for, the contested legacy, which the course will name and then leave to Poland.** The meaning of Solidarność's history is **actively fought over in Polish public life.** In particular, the personal record of **Lech Wałęsa** is the subject of a long-running and fierce dispute: there are contested allegations, which Wałęsa denies, that in the early 1970s, before the movement, he was a paid informer for the communist security service under the codename "Bolek." Polish historians, courts, and institutions have argued about the authenticity and meaning of the relevant files for years, and it remains a live, polarising controversy. **This course does not adjudicate it.** It is not our place, from the outside, to declare who is right about a disputed chapter of another country's national memory. What you should carry away is only this: **the facts of 1980-1989 in this course are firmly established and sourced; the *meaning and personal reckonings* of that era are still being argued in Poland, and honest teaching says so rather than pretending the argument is settled.**

**Put the whole section together.** Poland is a democracy where anyone may organise, and where, measured by density, coverage, fragmentation, and the drift of its most famous union into partisan politics, the organised labour movement is weak and divided. The country that a union set free is not, today, a country of strong unions. That is not a paradox to be explained away. **It is the honest ending, and it is the most important thing this course has to teach: a movement can win the state and still lose the workplace, and winning the first does not guarantee keeping the second.**

:::reveal How should a careful course handle the fierce Polish dispute over Lech Wałęsa's alleged 1970s security-service file? ||| It should name that the dispute exists, note that the allegations are contested and that Wałęsa denies them, and then decline to adjudicate, because the facts of 1980-1989 are well established and sourced, but the personal reckonings and the meaning of that era are still being argued in Poland today. Honest teaching states plainly what is settled and what is contested, rather than pretending an active national controversy has a verdict.

## Sources
- European Trade Union Institute. (2023). *Poland: Trade unions developing after a decline* (Chapter 22). https://www.etui.org/sites/default/files/2023-06/Chapter22_Poland_Trade%20unions%20developing%20after%20a%20decline_2023.pdf
- Eurofound. (n.d.). *Poland: Actors and institutions*. European Foundation for the Improvement of Living and Working Conditions. https://www.eurofound.europa.eu/en/countries/poland/actors-and-institutions
- Encyclopædia Britannica. (n.d.). *Lech Wałęsa*. https://www.britannica.com/biography/Lech-Walesa`,
      recallContent: [
        {
          prompt: "Name Poland's three nationally representative union confederations, and the irony about one of them.",
          answer:
            "NSZZ 'Solidarność' (1980), OPZZ (the All-Poland Alliance of Trade Unions), and FZZ (Trade Unions Forum, 2002). The irony: OPZZ was created in 1984 by the communist regime as an official alternative after Solidarność was banned, and is now a legitimate independent confederation of its own.",
        },
        {
          prompt: "How does the course handle Solidarność's contemporary politics and the Wałęsa dispute?",
          answer:
            "It states as dated fact that NSZZ 'Solidarność' has since the 1990s been aligned with the national-catholic right and backed PiS (e.g. Lech Kaczyński in 2005). On Wałęsa's contested 1970s security-service allegations, it names the dispute, notes he denies them, and declines to adjudicate, settled facts vs. still-argued meaning.",
        },
      ],
    },
    {
      slug: "poland-quiz-5",
      title: "Section 5 quiz · The workplace, and today",
      section: "Section 5 · Won the country, lost the workplace",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is Poland's collective bargaining coverage today (2023, OECD/AIAS)?",
            options: ["About 12%", "About 49%", "About 80%", "About 30%"],
            correctIndex: 0,
            explanation:
              "11.6% in 2023 (OECD/AIAS); ETUI puts it around 13%. Either way, barely above the ~9% membership rate.",
            sourceLessonSlug: "poland-density-collapse",
          },
          {
            prompt: "Poland and Germany have similar union density but very different coverage. What explains the gap?",
            options: [
              "Germans are more loyal to unions",
              "The LEVEL of bargaining, Germany bargains sectorally (binding whole industries), Poland bargains company by company with almost no sectoral agreements",
              "Poland has no collective bargaining law",
              "Germany forces every worker to join a union",
            ],
            correctIndex: 1,
            explanation:
              "Sectoral bargaining lets German coverage float free of membership; Poland's firm-by-firm model chains coverage to its low membership.",
            sourceLessonSlug: "poland-density-collapse",
          },
          {
            prompt: "Poland's employer-organisation density is 56.3% (2022), fairly high. Why doesn't that produce high coverage as it does in Germany?",
            options: [
              "Because Polish employers refuse to sign anything",
              "Because Poland lacks the sectoral bargaining that turns employer organisation into coverage, bargaining is company-level",
              "Because the figure is fake",
              "Because employers' associations are banned",
            ],
            correctIndex: 1,
            explanation:
              "Poland has the employers' side of the German machine but not the sectoral agreements, so the organisation doesn't convert into coverage.",
            sourceLessonSlug: "poland-density-collapse",
          },
          {
            prompt: "Why does company-level bargaining have a built-in ceiling in Poland?",
            options: [
              "Companies are forbidden to bargain",
              "A company agreement generally needs a union inside that firm, but ~70% of workers are in SMEs too small to have one",
              "Only the government can sign agreements",
              "Workers must pay to bargain",
            ],
            correctIndex: 1,
            explanation:
              "The mechanism can't reach most of the workforce, because most of the workforce is in firms too small to organise. Coverage is chained to membership.",
            sourceLessonSlug: "poland-density-collapse",
          },
          {
            prompt: "How has Polish bargaining coverage changed since the 1990s (ETUI)?",
            options: [
              "It rose from 12% to 30%",
              "It fell from around 30% in the 1990s to roughly 12-13% today",
              "It has stayed flat at 50%",
              "It reached 80%",
            ],
            correctIndex: 1,
            explanation:
              "The transition rebuilt industrial relations on a decentralised model, and coverage has more than halved since the 1990s.",
            sourceLessonSlug: "poland-density-collapse",
          },
          {
            prompt: "What is the honest ending the course draws from Poland's numbers?",
            options: [
              "That unions always win in the end",
              "That a movement can win the state and still lose the workplace, winning the first does not guarantee keeping the second",
              "That democracy makes unions strong automatically",
              "That Poland has the strongest unions in the EU",
            ],
            correctIndex: 1,
            explanation:
              "The country a union set free is not, today, a country of strong unions. That is the central lesson, not a paradox to explain away.",
            sourceLessonSlug: "poland-density-collapse",
          },
          {
            prompt: "Which are Poland's three nationally representative trade union confederations?",
            options: [
              "AFL, CIO, and Teamsters",
              "NSZZ 'Solidarność', OPZZ, and FZZ",
              "IG Metall, ver.di, and IG BCE",
              "CGT, CFDT, and FO",
            ],
            correctIndex: 1,
            explanation:
              "Solidarność (1980), the All-Poland Alliance of Trade Unions (OPZZ), and the Trade Unions Forum (FZZ, 2002). The movement is fragmented among rivals.",
            sourceLessonSlug: "poland-solidarnosc-today",
          },
          {
            prompt: "What is the irony about OPZZ, Poland's second-largest confederation?",
            options: [
              "It was founded by the Catholic Church",
              "It was created in 1984 by the communist regime as an official alternative after Solidarność was banned, and is now a legitimate independent confederation",
              "It is secretly controlled by Solidarność",
              "It represents only managers",
            ],
            correctIndex: 1,
            explanation:
              "The union the state built to replace the one it crushed is now a rival confederation in its own right, generally on the political left.",
            sourceLessonSlug: "poland-solidarnosc-today",
          },
          {
            prompt: "How does the course describe NSZZ 'Solidarność's' contemporary politics?",
            options: [
              "As strictly non-political",
              "As openly aligned since the 1990s with the national-catholic right, having backed PiS candidates (e.g. Lech Kaczyński in 2005), stated as dated fact, with the course taking no side",
              "As a branch of the Communist Party",
              "As allied with the political left",
            ],
            correctIndex: 1,
            explanation:
              "A movement founded as a cross-ideological front of the whole society has become a partisan actor. The course reports this neutrally and dated.",
            sourceLessonSlug: "poland-solidarnosc-today",
          },
          {
            prompt: "How does the course handle the dispute over Lech Wałęsa's alleged 1970s security-service file?",
            options: [
              "It declares him guilty",
              "It declares him innocent",
              "It names the dispute, notes the allegations are contested and that he denies them, and declines to adjudicate",
              "It ignores the subject entirely",
            ],
            correctIndex: 2,
            explanation:
              "Settled facts (1980-89) vs. still-argued meaning. Honest teaching states what is disputed rather than pretending an active controversy is resolved.",
            sourceLessonSlug: "poland-solidarnosc-today",
          },
          {
            prompt: "Why does the fragmentation into three confederations matter for worker power?",
            options: [
              "It makes unions stronger by competition",
              "Bargaining power that might be concentrated is instead divided among rival federations that do not always cooperate",
              "It has no effect",
              "It is required by EU law",
            ],
            correctIndex: 1,
            explanation:
              "Division is part of the weakness described in Lesson 10, a fragmented movement bargains less effectively than a unified one.",
            sourceLessonSlug: "poland-solidarnosc-today",
          },
          {
            prompt: "What editorial rule does this lesson borrow from the anchor course (Hoffa, Marikana)?",
            options: [
              "Always take the union's side",
              "State what is documented, date it, and do not adjudicate what is genuinely disputed",
              "Avoid all contemporary politics",
              "Only cite government sources",
            ],
            correctIndex: 1,
            explanation:
              "The same posture the whole platform uses for contested chapters: name the dispute, cite the record, refuse to invent a verdict.",
            sourceLessonSlug: "poland-solidarnosc-today",
          },
          {
            prompt: "Why might some Poles who revere the 1980 movement feel estranged from today's NSZZ 'Solidarność'?",
            options: [
              "Because it grew too large",
              "Because a movement founded as a broad, cross-ideological front of the whole society has become a partisan actor identified with one side of a divided politics",
              "Because it merged with OPZZ",
              "Because it left Poland",
            ],
            correctIndex: 1,
            explanation:
              "The 1980 union and the 2026 union are genuinely different institutions, which is why the course distinguishes them so carefully.",
            sourceLessonSlug: "poland-solidarnosc-today",
          },
          {
            prompt: "True or false: the FACTS of Poland's 1980-1989 history are well established, even though the MEANING of that era is still contested in Poland.",
            options: [
              "True",
              "False, the facts are as disputed as the meaning",
              "False, nothing about the period is documented",
              "True, but only the meaning is documented",
            ],
            correctIndex: 0,
            explanation:
              "The course draws exactly this line: settled, sourced facts vs. an ongoing national argument over their meaning and personal reckonings.",
            sourceLessonSlug: "poland-solidarnosc-today",
          },
          {
            prompt: "What is the single best summary of Poland's answer to 'who bargains, at what level?' today?",
            options: [
              "The whole economy, at national level",
              "Mostly no one, at the level of the single firm",
              "Every sector, by ministerial decree",
              "Only the government, for all workers",
            ],
            correctIndex: 1,
            explanation:
              "Decentralised, firm-by-firm bargaining that reaches only a small minority, the workplace a ten-million-member union left behind.",
            sourceLessonSlug: "poland-density-collapse",
          },
        ],
      },
    },

    // ────────────── SECTION 6 · THE RHYME, AND THE SKILL ──────────────
    {
      slug: "poland-junk-contracts",
      title: "12 · The rhyme: 'junk contracts' and the move you have seen before",
      section: "Section 6 · The rhyme, and the skill you keep",
      body: `Here is the lesson that pays off the whole *track*, not just this course. Once you have seen it in Poland, you will recognise it everywhere, and recognising it is the single most useful skill a workers'-rights course can give you.

**The Polish version is called *umowy śmieciowe*, "junk contracts" (literally "trash contracts").** To understand them, you need one distinction in Polish law:

- An **employment contract**, *umowa o pracę*, is governed by the **Labour Code** (*Kodeks pracy*). It comes with the protections you would expect: paid annual leave, notice periods, working-time limits, the minimum wage, sick and maternity entitlements, full social-security contributions, and access to the **labour courts** if something goes wrong.
- A **civil-law contract**, most commonly the *umowa zlecenie* (a "contract of mandate") or *umowa o dzieło* (a "contract for a specific task"), is governed instead by the **Civil Code** (*Kodeks cywilny*). It is meant for genuinely independent, one-off, or freelance work. Historically it carried **none** of the Labour Code's protections: no paid leave, no notice, limited or no social-security contributions, and no labour-court jurisdiction. (Poland has since bolted on some fixes, a minimum hourly rate for *umowa zlecenie* was introduced in 2017, but the gap in protection remains wide.)

**Now the move.** For years, large numbers of Polish employers took people who were doing **ordinary, employee-like, day-in-day-out jobs**, and hired them on a **civil-law contract** instead of an employment contract. The worker shows up at the same time every day, uses the company's tools, takes the company's orders, and does the company's core work, every functional test of an "employee", but on paper they are a "contractor" performing a "task." That paper reclassification lets the employer **escape the Labour Code**: cheaper, more disposable labour, outside much of labour law, and (crucially for this course) **outside the collective-bargaining system**, because those protections and structures attach to *employees*. Poland leaned on this so heavily that economists describe a **"dual" labour market**, and the practice has been a live political fight for over a decade (the term went mainstream around 2011-2012). Reforms to curb it, including giving labour inspectors power to **reclassify** disguised employment, have been debated and staged into the mid-2020s, tied to EU funding conditions; the exact status keeps moving, so treat any single "it's fixed now" claim with caution and check the date.

**And here is why you already understand this, even if you have never heard a Polish word before.** Look at what the move *is*, stripped of the local vocabulary: **an employer uses a legal form to place a worker outside the category that carries the protections.** Now recall the rest of the track:

- **The United States** (the anchor course): **misclassification.** Call a worker an "independent contractor" rather than an "employee," and they fall outside the National Labor Relations Act, the minimum wage, overtime, the same escape, through a different door.
- **Mexico** (its own course): the **protection contract.** A company signs a collective agreement with a friendly or phantom union before workers even organise, so that a *real* union is legally blocked. Again: a legal form that leaves the worker outside genuine protection while *appearing* to be inside it.
- **Poland: the junk contract.** A civil-law contract that keeps an employee-in-all-but-name outside the Labour Code.

**Three countries, three names, one structural move.** The details are completely different, a US contractor, a Mexican phantom union, a Polish civil-law contract, but the *shape* is identical: **the fight is not "is there a protection?" but "is this worker inside or outside the category the protection attaches to?"** That question, *whose category is it, and does it actually cover the person doing the work?*, is the thing this whole track has been quietly teaching you to ask. Poland just gives it one of its clearest names.

:::reveal Poland's "junk contracts," US "misclassification," and Mexico's "protection contracts" look completely different. What single structural move do all three share? ||| In each, an employer uses a *legal form* to place a worker outside the category that carries the protections, a civil-law contract in Poland, an "independent contractor" label in the US, a phantom-union agreement in Mexico. The worker does protected-category work but is defined, on paper, as outside it. So the real question in every country is not "is there a protection?" but "is this worker inside or outside the category the protection attaches to?"

## Sources
- European Trade Union Institute. (n.d.). *The struggle against 'junk contracts' in Poland*. https://www.etui.org/covid-social-impact/poland/the-struggle-against-junk-contracts-in-poland
- Arak, P., Lewandowski, P., & Żakowiecki, P. (2019). Normalisation of "junk contracts": Public policies towards civil-law employment in Poland. *Problemy Polityki Społecznej, 46*(3). http://cejsh.icm.edu.pl/cejsh/element/bwmeta1.element.desklight-c6ff36fc-d3fb-4c6b-9ac1-485f494328b7
- Notes from Poland. (2026, April 3). *Poland boosts labour inspector powers to curb precarious work*. https://notesfrompoland.com/2026/04/03/poland-boosts-labour-inspector-powers-to-curb-precarious-work/`,
      recallContent: [
        {
          prompt: "What is a Polish 'junk contract' (umowa śmieciowa), and how does it dodge the Labour Code?",
          answer:
            "A civil-law contract (umowa zlecenie or umowa o dzieło, under the Civil Code) used to hire someone doing ordinary employee-like work, instead of an employment contract (umowa o pracę, under the Labour Code). Because labour protections and collective bargaining attach to 'employees,' the paper reclassification puts the worker outside paid leave, notice, full social security, labour courts, and bargaining.",
        },
        {
          prompt: "State the one structural move shared by Polish junk contracts, US misclassification, and Mexican protection contracts.",
          answer:
            "In all three, an employer uses a legal form to place a worker outside the category that carries the protections, a civil-law contract, an 'independent contractor' label, or a phantom-union agreement. The real question everywhere is not 'is there a protection?' but 'is this worker inside or outside the category the protection attaches to?'",
        },
      ],
    },
    {
      slug: "poland-the-skill",
      title: "13 · Reading any country: the skill you keep",
      section: "Section 6 · The rhyme, and the skill you keep",
      body: `You could forget every date in this course, the 21 Demands, 10 November 1980, 13 December 1981, 4 June 1989, and still have gotten the valuable thing, if you keep the **method**. So let's make it explicit by running the anchor's four questions across the whole Polish story one last time, and watching the answers move.

**Q1, Who is allowed to organise?**
- *1980:* No one independently, which is why demanding a free union was demanding to break the Party's monopoly on power. Question 1 *was* the question of the state.
- *Today:* Everyone. Poland is a democracy with full freedom of association. And yet density is ~9% (2022). **The right can be secure and barely used at the same time** — a pairing you should now expect, not find surprising.

**Q2, Who is excluded?**
- *1980:* Everyone, from independent organisation.
- *Today:* Workers pushed onto **civil-law "junk contracts,"** outside the Labour Code and the bargaining system, the same *structural* exclusion the US runs through misclassification.

**Q3, Who bargains with whom, and at what level?**
- The hinge of the whole comparison with Germany: Poland bargains **company by company**, sectoral agreements have withered, and coverage (~12%, 2023) is therefore chained to low membership. **Always find the *level* of bargaining before you judge the *strength* of a labour movement.**

**Q4, What happens to you if you try?**
- *1981:* Martial law, internment, nine dead at Wujek, the most violent answer in the Wave-1 courses.
- *Today:* An ordinary democratic answer, you may organise; the obstacles are structural, not martial.

**And the transferable habit this course adds to your kit, on top of the four questions:** *when a labour movement looks mysteriously weak, look for the legal form that moves workers out of the protected category, and look for the level at which bargaining happens.* Those two structural facts, the exclusion move and the bargaining level, explain more about a country's real worker power than any amount of rhetoric about culture or national character. You saw the plumbing beat the culture in the Germany and Nordic courses. **In Poland you saw something even sharper: a movement can win the entire state and still, through the structures that come afterward, lose the workplace.** Carry that, and you can walk into a country you have never studied and ask the right questions first.

One last cross-link. This course was **history and structure**, *how did this happen, and why is Poland's labour system shaped this way?* Its companion, **Know Your Rights at Work**, is the present-tense, practical one, *what do I actually do on the job on Monday?* If Poland's story moved you, that is the course that turns the feeling into something you can use.

:::reveal Beyond the four questions, what is the transferable habit this course adds, the two structural facts that explain a country's real worker power better than talk of "culture"? ||| First, the *exclusion move*: look for the legal form that shifts workers out of the protected category (junk contracts, misclassification, phantom unions). Second, the *bargaining level*: find out whether bargaining happens at the sector or only the single firm, because the level caps how far coverage can reach beyond membership. Those two facts, who is defined out, and at what level anyone bargains, tell you more than any amount of rhetoric about national character.

## Sources
- OECD/AIAS. (n.d.). *ICTWSS database — country note: Poland*. https://www.oecd.org/content/dam/oecd/en/data/datasets/oecd-aias-ictwss/Poland.pdf
- European Trade Union Institute. (2023). *Poland: Trade unions developing after a decline* (Chapter 22). https://www.etui.org/sites/default/files/2023-06/Chapter22_Poland_Trade%20unions%20developing%20after%20a%20decline_2023.pdf`,
      recallContent: [
        {
          prompt: "Run the four questions on Poland today in one line each.",
          answer:
            "Q1 (who may organise?): everyone, yet density is only ~9%. Q2 (who is excluded?): workers on civil-law junk contracts. Q3 (who bargains, at what level?): company by company, so coverage ~12% is chained to membership. Q4 (what if you try?): an ordinary democratic answer now, versus martial law and Wujek in 1981.",
        },
        {
          prompt: "What single sentence captures Poland's place in the whole track?",
          answer:
            "A movement can win the entire state and still, through the structures that come afterward, lose the workplace. No other country in the track shows a union as the engine of a national revolution, or the collapse of workplace power that followed.",
        },
      ],
    },
    {
      slug: "poland-practice",
      title: "14 · Practice: the facts you should be able to produce cold",
      section: "Section 6 · The rhyme, and the skill you keep",
      body: `Fill in each blank, then check. Spelling and capitalization are forgiving.

These are the specific, checkable facts this course wants in your head, the ones that let you catch an error in someone else's telling of the Solidarność story. Everything else you can look up.`,
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "The strike that launched Solidarność began in August 1980 at the Lenin Shipyard in the city of ___.",
            answer: "Gdańsk",
            accept: ["Gdansk"],
            explanation:
              "The Baltic port of Gdańsk. The occupation strike there, and the Inter-factory Strike Committee it spawned, turned a local dispute into a national movement.",
          },
          {
            prompt: "The workers posted ___ demands on the shipyard gate, now on UNESCO's Memory of the World register.",
            answer: "21",
            accept: ["twenty-one", "twenty one"],
            explanation:
              "The 21 Demands, hand-lettered on two plywood boards at Gate No. 2, inscribed by UNESCO in 2003, a citable primary artifact.",
          },
          {
            prompt: "Demand number one was not about pay. It was the right to form free trade unions ___ of the Communist Party.",
            answer: "independent",
            explanation:
              "In a one-party state, an independent union is a centre of power outside the Party, which made 'who may organise?' the same question as 'who governs?'",
          },
          {
            prompt: "The agreement conceding independent unions was signed on 31 August 1980. It is known as the ___ Agreement.",
            answer: "Gdańsk",
            accept: ["Gdansk"],
            explanation:
              "Signed by Lech Wałęsa and deputy PM Mieczysław Jagielski, the first legally tolerated independent union in the Soviet bloc.",
          },
          {
            prompt: "At its 1981 peak, Solidarność had roughly ___ million members.",
            answer: "10",
            accept: ["ten", "10 million", "ten million"],
            explanation:
              "About a third of Poland's population, the largest membership organisation the communist bloc ever produced.",
          },
          {
            prompt: "On 13 December 1981, General Wojciech ___ declared martial law and banned the union.",
            answer: "Jaruzelski",
            explanation:
              "He held the top Party, government and military posts and ruled through the Military Council of National Salvation (WRON).",
          },
          {
            prompt: "Three days into martial law, police and army killed ___ striking miners at the Wujek coal mine.",
            answer: "nine",
            accept: ["9"],
            explanation:
              "16 December 1981. The sharpest answer to the anchor's Question 4, 'what happens to you if you try?', in the Wave-1 courses.",
          },
          {
            prompt: "The negotiations that ended communist rule in 1989 are named after the shape of the table: the ___ Table talks.",
            answer: "Round",
            explanation:
              "6 February to 5 April 1989. The state's negotiating partner for the future of the country was a trade union.",
          },
          {
            prompt: "In the partly-free election of ___ June 1989, Solidarity won nearly every seat it was allowed to contest.",
            answer: "4",
            accept: ["4th", "fourth", "June 4"],
            explanation:
              "Every contestable Sejm seat and 99 of 100 Senate seats, a landslide that became a referendum communism lost.",
          },
          {
            prompt: "The 1990 'shock therapy' reform package that freed prices and cut subsidies is named after finance minister Leszek ___.",
            answer: "Balcerowicz",
            explanation:
              "In force 1 January 1990. It broke hyperinflation, and its pain fell hardest on the industrial workers who built Solidarność.",
          },
          {
            prompt: "Registered unemployment, an official zero under communism, rose to about ___ percent by 1993 (Statistics Poland).",
            answer: "16",
            accept: ["16.4", "16 percent", "16.4%", "16%"],
            explanation:
              "16.4% in 1993 (GUS). Mass joblessness became real as state enterprises shrank, the cost of winning the country.",
          },
          {
            prompt: "Today Poland's trade union density is about ___ percent (2022, OECD/AIAS), among the lowest in the EU.",
            answer: "9",
            accept: ["9.4", "9 percent", "9.4%", "9%", "about 9"],
            explanation:
              "9.4% in 2022. A union that enrolled a third of the country now organises fewer than one worker in ten.",
          },
          {
            prompt: "Poland bargains mostly at the ___ level (single firm), not the sector, which is why its coverage barely exceeds its membership.",
            answer: "company",
            accept: ["firm", "enterprise", "company level", "firm level"],
            explanation:
              "The opposite of Germany's sectoral model. Company-level bargaining chains coverage to low membership.",
          },
          {
            prompt: "Poland's civil-law contracts used to keep workers outside the Labour Code are nicknamed '___ contracts.'",
            answer: "junk",
            accept: ["trash", "junk (umowy śmieciowe)", "śmieciowe"],
            explanation:
              "Umowy śmieciowe. The same structural move as US misclassification and Mexican protection contracts: a legal form that puts the worker outside the protected category.",
          },
        ],
      },
    },
    {
      slug: "poland-quiz-6",
      title: "Section 6 quiz · The rhyme, and the skill",
      section: "Section 6 · The rhyme, and the skill you keep",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In Polish law, which contract type is governed by the Labour Code and carries the full protections?",
            options: [
              "The umowa o pracę (employment contract)",
              "The umowa zlecenie (contract of mandate)",
              "The umowa o dzieło (contract for a task)",
              "None, Poland has no labour code",
            ],
            correctIndex: 0,
            explanation:
              "The umowa o pracę brings paid leave, notice, minimum wage, social security and labour-court access. Civil-law contracts (zlecenie, o dzieło) sit under the Civil Code instead.",
            sourceLessonSlug: "poland-junk-contracts",
          },
          {
            prompt: "What is a Polish 'junk contract' (umowa śmieciowa)?",
            options: [
              "A contract for hazardous waste disposal",
              "A civil-law contract used to hire employee-like workers so the employer escapes the Labour Code and the bargaining system",
              "A short-term employment contract with full benefits",
              "A collective agreement",
            ],
            correctIndex: 1,
            explanation:
              "The worker does ordinary employee work but, on paper, is a 'contractor', outside paid leave, notice, full social security, labour courts and collective bargaining.",
            sourceLessonSlug: "poland-junk-contracts",
          },
          {
            prompt: "What single structural move do Polish junk contracts, US misclassification, and Mexican protection contracts share?",
            options: [
              "They all raise wages",
              "In each, an employer uses a legal form to place a worker OUTSIDE the category that carries the protections",
              "They are all illegal everywhere",
              "They all require a union election",
            ],
            correctIndex: 1,
            explanation:
              "Different door, same room. The real question is always: is this worker inside or outside the category the protection attaches to?",
            sourceLessonSlug: "poland-junk-contracts",
          },
          {
            prompt: "The US version of this move, taught in the anchor course, is called…",
            options: ["co-determination", "misclassification (calling an employee an 'independent contractor')", "the Ghent system", "sectoral extension"],
            correctIndex: 1,
            explanation:
              "Misclassification puts a worker outside the NLRA, minimum wage and overtime, the American door to the same escape Poland reaches through civil-law contracts.",
            sourceLessonSlug: "poland-junk-contracts",
          },
          {
            prompt: "The Mexican version of the move, from that country's course, is the…",
            options: ["works council", "protection contract (a friendly/phantom union's agreement that blocks a real union)", "enterprise union", "minimum-service law"],
            correctIndex: 1,
            explanation:
              "A legal form that leaves the worker outside genuine protection while appearing to be inside it, the same family as junk contracts and misclassification.",
            sourceLessonSlug: "poland-junk-contracts",
          },
          {
            prompt: "Why does the exclusion-move question matter more than 'is there a union/protection here?'",
            options: [
              "Because protections never matter",
              "Because a protection is worthless to a worker who has been defined, on paper, as outside the category it attaches to",
              "Because unions are always illegal",
              "Because every worker is automatically covered",
            ],
            correctIndex: 1,
            explanation:
              "The whole track trains you to ask 'whose category is it, and does it cover the person doing the work?', the sharpest single diagnostic in labour law.",
            sourceLessonSlug: "poland-junk-contracts",
          },
          {
            prompt: "Running Question 1 across Poland: what is the striking pairing in the answer 'today'?",
            options: [
              "Organising is banned, and density is high",
              "Everyone may organise, yet density is only ~9%, the right can be secure and barely used at once",
              "Only farmers may organise",
              "Organising requires Party approval",
            ],
            correctIndex: 1,
            explanation:
              "A secure right paired with low use is a pattern the course teaches you to expect rather than find surprising.",
            sourceLessonSlug: "poland-the-skill",
          },
          {
            prompt: "What is the transferable habit the course adds on top of the four questions?",
            options: [
              "Judge a labour movement by its rhetoric",
              "When a labour movement looks weak, look for the legal form that moves workers out of the protected category, and look for the LEVEL at which bargaining happens",
              "Assume culture explains everything",
              "Count only strike days",
            ],
            correctIndex: 1,
            explanation:
              "The exclusion move and the bargaining level explain real worker power better than any talk of national character.",
            sourceLessonSlug: "poland-the-skill",
          },
          {
            prompt: "In one sentence, what is Poland's unique place in the whole track?",
            options: [
              "A country where workers sit on company boards",
              "A movement can win the entire state and still, through the structures that come afterward, lose the workplace",
              "A country where the union runs the unemployment fund",
              "A country with no labour law at all",
            ],
            correctIndex: 1,
            explanation:
              "No other course shows a union as the engine of a national revolution, or the collapse of workplace power that followed it.",
            sourceLessonSlug: "poland-the-skill",
          },
          {
            prompt: "Which companion course is the practical, present-tense complement to this historical one?",
            options: [
              "Know Your Rights at Work",
              "The History of Unions (the anchor)",
              "Germany: Workers on the Board",
              "Learning How to Learn",
            ],
            correctIndex: 0,
            explanation:
              "This course is 'how did this happen'; Know Your Rights at Work is 'what do I do on the job Monday.' The anchor supplies the four questions both share.",
            sourceLessonSlug: "poland-the-skill",
          },
          {
            prompt: "Why should any single 'the junk-contract problem is fixed now' claim be treated with caution?",
            options: [
              "Because junk contracts don't exist",
              "Because reforms (e.g. giving inspectors power to reclassify disguised employment) have been staged and debated into the mid-2020s and the status keeps moving, so check the date",
              "Because Poland has no government",
              "Because the EU banned the topic",
            ],
            correctIndex: 1,
            explanation:
              "The authoritative-values habit: a live, changing policy area should be dated and checked, not asserted as settled.",
            sourceLessonSlug: "poland-junk-contracts",
          },
          {
            prompt: "How does 'find the bargaining level' help you read a country you have never studied?",
            options: [
              "It tells you the country's GDP",
              "Whether bargaining is sectoral or firm-level caps how far coverage can spread beyond union membership, a structural fact that predicts real worker power",
              "It tells you the strike frequency",
              "It reveals the minimum wage",
            ],
            correctIndex: 1,
            explanation:
              "Germany (sectoral) vs Poland (firm-level) with similar density but wildly different coverage is the proof: the level is decisive.",
            sourceLessonSlug: "poland-the-skill",
          },
          {
            prompt: "A minimum hourly rate was bolted onto the umowa zlecenie in what year, narrowing (not closing) the protection gap?",
            options: ["2017", "1980", "1990", "2002"],
            correctIndex: 0,
            explanation:
              "2017. Poland has patched some gaps in civil-law contracts, but the difference from a full Labour Code employment contract remains wide.",
            sourceLessonSlug: "poland-junk-contracts",
          },
          {
            prompt: "What does the term 'dual labour market' describe in the Polish context?",
            options: [
              "Two currencies",
              "A split between workers on protected Labour Code contracts and those on unprotected civil-law 'junk' contracts",
              "Public vs private sectors",
              "Two competing minimum wages",
            ],
            correctIndex: 1,
            explanation:
              "Economists use 'duality' for exactly this divide, one workforce inside the protective category, another paid to stay outside it.",
            sourceLessonSlug: "poland-junk-contracts",
          },
          {
            prompt: "If you forgot every date in this course, what would still be worth keeping?",
            options: [
              "The names of the shipyards",
              "The METHOD, the four questions plus the two structural facts (the exclusion move and the bargaining level)",
              "The exchange rate of the złoty",
              "Nothing",
            ],
            correctIndex: 1,
            explanation:
              "The dates are the illustration; the transferable diagnostic method is the actual payload of the course and the track.",
            sourceLessonSlug: "poland-the-skill",
          },
        ],
      },
    },
  ],
};
