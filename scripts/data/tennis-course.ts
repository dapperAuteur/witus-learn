// Authored "Tennis: Play It, Read It, Work In It" — a high-school-level, cited course covering
// how to play, how to think tactically, the rules, the history, the leagues, and the real
// economics of the sport for amateurs and entrepreneurs.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every rule statement is cited to the ITF's own 2026 Rules of Tennis PDF, with the RULE
//     NUMBER read out of that document — not guessed. The tie-break is Rule 5(b) (inside "Score
//     in a Game"), NOT a rule of its own; the service let is Rule 22; alternative scoring (No-Ad,
//     Short Sets, match tie-breaks, No-Let) is Appendix VI. Web summaries get this wrong; the PDF
//     does not.
//   * Where a format VARIES by event (best-of-5 vs best-of-3, final-set tie-break, electronic line
//     calling, no-let), the course says so and names the event, rather than asserting a universal.
//   * History dates are cited to the International Tennis Hall of Fame, the USTA/US Open's own
//     history pages, the ATA's own history page, the WTA, and Wimbledon/Roland-Garros official
//     announcements. Several tidy myths were deliberately NOT repeated: the "$12,500 vs $1,500
//     champions' cheques" (they were field purses — the course teaches the 8-to-1 RATIO), the
//     "Ashe earned $20" compression (it was $20/day expenses; the $14,000 cheque went to the
//     runner-up), "the French Open went equal in 2006" (champions only; full draw was 2007), and
//     "the Australian Open went equal in 2001" (it first went equal in 1984 and went BACKWARDS).
//   * The prize-money distribution lesson uses only figures published by the tournaments and the
//     ITF. No invented statistics, no invented people, no invented rule numbers.

import type { AuthoredCourse } from "./authored-course";

export const TENNIS_COURSE: AuthoredCourse = {
  title: "Tennis: Play It, Read It, Work In It",
  description:
    "A complete, cited tennis course for high school students: how to actually play (grips, strokes, footwork), how to think tactically (serve+1, court positioning, patterns, singles vs. doubles), the rules and who writes them (the ITF publishes them; the tours and the four Slams layer their own conditions on top), the sport's remarkable social history (the American Tennis Association, Althea Gibson, Arthur Ashe, Billie Jean King and the Original 9, the Open era, and the 34-year climb to equal prize money), how the leagues actually fit together, and the honest economics — what tennis really pays, and the many ways to build a life or a business in it without ever turning pro.",
  lessons: [
    // ───────────────────────────────── SECTION 1 · THE RULES ─────────────────────────────────
    {
      slug: "tennis-court-and-gear",
      title: "1 · The court, the gear, and the one page of rules that matters",
      section: "Section 1 · The court, the scoreboard, and the rulebook",
      body: `Tennis looks complicated from the outside. It isn't. Two (or four) people hit a ball over a net; you lose the point when you can't get it back in. Everything else is bookkeeping.

Start with the box you play in. The **International Tennis Federation (ITF)** publishes the *Rules of Tennis* and revises them every year, and Rule 1 gives the court exactly (International Tennis Federation [ITF], 2026):

| Measurement | Value |
| --- | --- |
| Court length | 78 ft (23.77 m) |
| Width, singles | 27 ft (8.23 m) |
| Width, doubles | 36 ft (10.97 m) |
| Net height at the posts | 3½ ft (1.07 m) |
| Net height at the center | 3 ft (0.914 m) |
| Service line, from the net | 21 ft (6.40 m) |

Two numbers in that table are worth staring at. The doubles court is **9 feet wider** than the singles court — those two strips are the **alleys** (or "tramlines"), and they are in play in doubles and out in singles. And the net is **six inches lower in the middle than at the posts**. That is not a construction defect. It is the single most useful fact in tennis strategy, and Section 3 is going to build an entire tactical system on top of it.

The rest of the lines: the **baselines** are the ends, the **sidelines** are the sides, the two **service lines** run parallel to the net 21 feet away from it, and the **center service line** splits the space between the net and the service line into the two **service courts** you have to serve into (ITF, 2026, Rule 1).

**The gear.** A racket and a ball, both of which the ITF also specifies (Rule 3, Rule 4, and Appendices I and II). You do not need to memorize the specs. You *should* know that the ITF approves different ball types for different purposes — including slower, lower-bouncing **Stage 3 (Red)**, **Stage 2 (Orange)**, and **Stage 1 (Green)** balls used on smaller courts for players 10 and under (ITF, 2026, Appendix VIII). A red ball on a 36-foot court is not a toy. It is a deliberate design that lets a beginner rally on day one instead of chasing a ball that bounces over their head — and that is exactly why a coach will hand one to an adult beginner too.

**Shoes matter more than the racket.** Tennis is a lateral sport played in short, violent bursts. Running shoes are built to roll forward and will roll your ankle sideways. Court shoes are the one piece of equipment worth spending on first.

:::reveal The net is 3 feet high in the center and 3½ feet high at the posts. Why should a player care about that six-inch difference? ||| Because the lowest, safest part of the net is the middle — so the ball you hit through the center of the net (which, from a corner, means a cross-court ball) clears by more margin and travels over a longer diagonal. Cross-court is the geometrically safer shot, and it's the default for that reason. Down the line goes over a higher net into a shorter court.

## Sources
- International Tennis Federation. (2026). *ITF rules of tennis 2026*. https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf`,
    },
    {
      slug: "tennis-scoring-a-game",
      title: "2 · Scoring a game: love, 15, 30, 40, deuce",
      section: "Section 1 · The court, the scoreboard, and the rulebook",
      body: `Tennis scoring is the sport's weirdest feature and its best filter: learn it in ten minutes and you can watch any match in the world.

**A standard game** is scored like this, with the **server's score always called first** (ITF, 2026, Rule 5a):

| Points won | Called |
| --- | --- |
| 0 | "Love" |
| 1 | "15" |
| 2 | "30" |
| 3 | "40" |
| 4 | "Game" |

With one catch, and it's the whole game: **if both players reach three points, the score is not 40–40, it is "Deuce."** From Deuce, the player who wins the next point has **"Advantage."** If they win the point after that, they win the game. If they lose it, the score goes **back to Deuce** (ITF, 2026, Rule 5a).

So the rule underneath the funny words is simple: **you must win a game by two points.** Deuce can go on essentially forever, and in a tight match it often does.

Where did "love," "15," "30," "40" come from? Honest answer: **nobody knows for certain.** You will hear a confident story about a clock face — 15, 30, 45, rounded to 40 — and you will hear that "love" comes from the French *l'œuf* ("the egg," i.e., zero). Both are **theories**, not documented facts, and this course is not going to hand you a myth dressed as history. What *is* documented is the modern rule, and it is in Rule 5.

**Two variants you will actually meet.** The ITF also approves alternatives in **Appendix VI**, and your high school team or a college match may well use one:

- **"No-Ad" scoring.** At Deuce, you play a single **deciding point** — winner takes the game. No advantage, no endless deuces. The **receiver chooses** which side to receive it from (ITF, 2026, Appendix VI). This is common in college tennis and in doubles on the pro tours, and it exists for one reason: to make match length predictable.
- **Short sets** and **match tie-breaks**, which you'll meet in the next lesson.

Notice the pattern already: **the ITF writes one rulebook, and then each competition picks which options it's playing.** That is the real structure of tennis, and Lesson 5 is about it.

:::reveal Your opponent has won 3 points and so have you. What is the score called, and what exactly do you have to do to win the game from there? ||| "Deuce." You must win **two consecutive points**: the first gives you "Advantage," and the second wins the game. If you win Advantage and then lose the next point, the score returns to Deuce.

## Sources
- International Tennis Federation. (2026). *ITF rules of tennis 2026*. https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf`,
      recallContent: [
        {
          prompt: "How wide is a singles court, and how wide is a doubles court?",
          answer: "27 feet (8.23 m) for singles; 36 feet (10.97 m) for doubles. The 9-foot difference is the two alleys.",
        },
        {
          prompt: "Whose score is called first in tennis?",
          answer: "The server's, always.",
        },
      ],
    },
    {
      slug: "tennis-sets-tiebreaks-and-match",
      title: "3 · Sets, tie-breaks, and why the format changes from event to event",
      section: "Section 1 · The court, the scoreboard, and the rulebook",
      body: `Games stack into sets; sets stack into a match. Here is where most people's confident knowledge of tennis quietly turns out to be wrong — because **the format is not the same everywhere**, and the people who tell you it is have usually only watched one tournament.

**A set.** The ITF names two methods, and says the one being used **must be announced in advance of the event** (ITF, 2026, Rule 6):

- **Tie-break set** — first to **six games**, must win by **two**. At **six games all**, you play a **tie-break game**. This is the standard nearly everywhere.
- **Advantage set** — first to six games, win by two, and **no tie-break**: the set just keeps going. 7–5, 9–7, 24–22. This is the format that produced the legendary marathons, and it has been squeezed almost entirely out of the professional game.

**The tie-break game** is, confusingly, defined inside **Rule 5 — "Score in a Game"** — because a tie-break *is* a game (ITF, 2026, Rule 5b). Points are counted "Zero, 1, 2, 3…" and the **first to seven points, by a margin of two**, wins the game *and* the set. Serving rotates in a specific way: whoever's turn it is serves **one** point, then the opponent serves **two**, and from there each player serves **two consecutive points** until it ends.

**A match** is best-of-3 sets (win 2) or best-of-5 sets (win 3) — ITF Rule 7. Which one you play is up to the event. At the four Grand Slams, **men's singles is best-of-5 and women's singles is best-of-3**; almost everywhere else, including all ATP and WTA Tour events below the Slams, **everyone plays best-of-3**.

**The final-set tie-break: a rule that only recently stopped being a mess.** Until 2022, the four Slams each did something *different* when a deciding set reached 6–6. Then, on **16 March 2022**, the **Grand Slam Board** — the four tournaments acting together, not the ATP, WTA, or ITF — announced a single standard: at **six games all in the final set**, a **10-point tie-break** decides the match, first to 10 by a margin of two. It was announced as a **trial**, to be reviewed across a full Grand Slam year in consultation with the WTA, ATP, and ITF before any permanent rule change (Wimbledon, 2022). The ITF lists exactly this "**Final Set Tie-Break (10 points)**" among its approved alternatives in **Appendix VI**, alongside 7-point and 10-point **match tie-breaks** that replace a deciding set entirely (ITF, 2026).

Read that last paragraph again, because it is the shape of this whole sport: **a rule you would assume is fundamental was different at all four majors within living memory, and got standardized by a committee of tournaments.**

:::reveal In a tie-break game, how many points does the first server serve, and how many does the opponent then serve? ||| The player whose turn it is to serve serves the **first point only**. The opponent then serves the **next two**. After that, each player/team serves two consecutive points until the tie-break ends.

## Sources
- International Tennis Federation. (2026). *ITF rules of tennis 2026*. https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf
- Wimbledon. (2022, March 16). *Grand Slam tournaments jointly announce 10-point final set tie-break at six games all*. https://www.wimbledon.com/en_GB/news/articles/2022-03-16/grand_slam_tournaments_jointly_announce_10point_final_set_tiebreak_at_six_games_all.html`,
      recallContent: [
        {
          prompt: "At Deuce, what do you have to do to win the game?",
          answer: "Win two consecutive points: the first gives you Advantage, the second wins the game.",
        },
        {
          prompt: "What is 'No-Ad' scoring, and who chooses the side for the deciding point?",
          answer:
            "At Deuce, a single deciding point wins the game — no advantage. The receiver chooses which side to receive it from (ITF Appendix VI).",
        },
      ],
    },
    {
      slug: "tennis-the-serve-and-the-let",
      title: "4 · The serve, the fault, and the let",
      section: "Section 1 · The court, the scoreboard, and the rulebook",
      body: `The serve is the only shot in tennis you control completely — nobody is hitting a ball at you — and it is where beginners lose most of their points. It is also where the rulebook is most specific.

**Where you stand.** Immediately before starting the service motion, the server stands **at rest with both feet behind the baseline**, between the imaginary extensions of the **center mark** and the **sideline** (ITF, 2026, Rule 16). You serve from behind **alternate halves** of the court, starting from the **right** half in every game (Rule 17).

**Where it has to go.** The serve must pass over the net and land in the **service court diagonally opposite** before the receiver returns it (ITF, 2026, Rule 17).

**Foot fault (Rule 18).** During the service motion you must not walk or run to change position (slight foot movements are fine), and you must not **touch the baseline or the court**, the area outside the imaginary sideline extension, or the imaginary extension of the center mark, with either foot. And a detail the rulebook answers explicitly: **you *are* allowed to have one or both feet off the ground** (ITF, 2026, Rule 18, Case 2).

**Service fault (Rule 19).** The serve is a fault if you break Rules 16, 17, or 18; if you **miss the ball** trying to hit it; if the ball hits a permanent fixture, singles stick, or net post before hitting the ground; or if it hits you, your partner, or anything you're wearing or carrying. But if you toss the ball and **decide not to hit it**, you may catch it or let it bounce — **that is not a fault** (ITF, 2026, Rule 19, Case 1).

**Two faults in a row and you lose the point** — a **double fault** (ITF, 2026, Rules 20 and 24a). This is why the second serve exists, and why the second serve is a different shot, hit with more spin and more margin.

**The let (Rule 22).** The service is a **let** if the ball touches the **net, strap, or band** and is otherwise good, or if you served when the receiver was not ready. You simply **serve that one again** — and crucially, **a service let does not cancel a previous fault** (ITF, 2026, Rule 22). Hit a fault, then a let on the second serve? You are still on your second serve.

**And now the variation.** The ITF's **Appendix VI** approves a **"No Let" rule**: play *without* the service let, so a serve that clips the net and lands in **is simply in play** (ITF, 2026). This is not hypothetical — no-let is used in a range of competitions, including college tennis in the United States. So if someone tells you a net-cord serve is "always" a let, they are describing one rule option, not the rule.

:::reveal You hit a fault on your first serve. Your second serve clips the net cord and lands in the correct service box. Under the standard ITF rule, what happens — and what would happen at an event playing "No Let"? ||| Under the standard rule it is a **service let** (Rule 22): you serve that one again, and because a service let does not cancel a previous fault, you are still on your **second serve**. At an event using the Appendix VI **"No Let"** rule, the serve is simply **in play** and the point continues.

## Sources
- International Tennis Federation. (2026). *ITF rules of tennis 2026*. https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf`,
      recallContent: [
        {
          prompt: "At six games all in the final set of a Grand Slam, what happens — and since when?",
          answer:
            "A 10-point tie-break (first to 10, win by 2). The Grand Slam Board announced this common standard across all four majors on 16 March 2022; before that, all four Slams did something different.",
        },
        {
          prompt: "Is a tie-break game a set or a game, per the ITF rulebook?",
          answer:
            "A game — it's defined inside Rule 5, 'Score in a Game.' Winning it wins both the game and the set.",
        },
      ],
    },
    {
      slug: "tennis-who-writes-the-rules",
      title: "5 · Who writes the rules — and who bends them",
      section: "Section 1 · The court, the scoreboard, and the rulebook",
      body: `This lesson exists because almost everyone gets this wrong, including people who watch tennis every week.

**The ITF publishes the rules.** The International Tennis Federation is the governing body of the game, and its duties "include protecting the integrity of the game through determination of the Rules of Tennis." A **Rules of Tennis Committee** monitors the game and recommends changes to the ITF Board, which recommends them to the ITF's **Annual General Meeting** — "the ultimate authority for making any changes to the Rules of Tennis" (ITF, 2026, Foreword). The rulebook is republished every year.

**But the ITF does not run professional tennis.** Three other kinds of organization layer their own conditions on top of that rulebook:

- The **ATP** runs the men's professional tour and publishes its own annual rulebook (ATP Tour, 2026).
- The **WTA** runs the women's professional tour.
- The **four Grand Slams are run by neither.** The US Open belongs to the **USTA**; Wimbledon to the **All England Lawn Tennis Club**; Roland-Garros to the **Fédération Française de Tennis**; the Australian Open to **Tennis Australia**. They coordinate through a **Grand Slam Board** made up of the four Grand Slam chairs, supported by their CEOs, which is responsible for the Grand Slam rules, regulations, code of conduct, and officiating (Roland-Garros, n.d.).

So: **seven power centers, no commissioner.** The ITF writes the rules of the *game*; the tours run their *tours*; the Slams run *themselves*. This is why a rule change like the final-set tie-break had to be announced by the *Grand Slam Board* rather than simply decreed, and it is why — as you'll see in Section 5 — **equal prize money had to be won four separate times.**

**Electronic line calling: the same story, happening right now.** From **2025**, the ATP adopted **Electronic Line Calling Live across all its tour-level events**, on every surface, replacing human line judges (ATP Tour, 2023). **Wimbledon** adopted Live ELC across all its match courts from **2025**, ending 147 years of line umpires calling its grass (Wimbledon, 2025). The Australian Open and US Open use it too.

And **Roland-Garros does not.** For **2026**, the French Open confirmed it is **keeping human line judges** — the only Grand Slam that does — because on clay the ball leaves a **mark**, which an umpire can climb down and inspect, and because tournament director Amélie Mauresmo has said the technology's "reliability... is not absolute" on the surface (Sky Sports, 2026). The ITF's own rulebook, meanwhile, still sets out **Electronic Review Procedures** for tournaments where a review system is used — including the rule that **each player gets three unsuccessful appeals per set** (ITF, 2026, Appendix VII).

Which means the honest answer to "does tennis use robot line judges?" is: **at three of the four majors and across the ATP Tour, yes; at Roland-Garros in 2026, no.** Get comfortable with that sentence. It is what almost every "rule" in this sport actually looks like up close.

:::reveal Who runs the four Grand Slam tournaments, and why does the answer matter? ||| Four separate national organizations, not the tours and not the ITF: the **USTA** (US Open), the **All England Lawn Tennis Club** (Wimbledon), the **Fédération Française de Tennis** (Roland-Garros), and **Tennis Australia** (Australian Open), coordinating through the **Grand Slam Board**. It matters because no one can order all four to do anything — which is why standardizing the final-set tie-break took a joint announcement, and why equal prize money had to be won at each Slam separately, over 34 years.

## Sources
- ATP Tour. (2023, April). *Electronic Line Calling Live to be adopted across the ATP Tour*. https://www.atptour.com/en/news/electronic-line-calling-release-april-2023
- ATP Tour. (2026). *The 2026 ATP official rulebook*. https://www.atptour.com/-/media/files/rulebook/2026/2026-rulebook_27apr26.pdf
- International Tennis Federation. (2026). *ITF rules of tennis 2026*. https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf
- Roland-Garros. (n.d.). *Grand Slam tennis: A partnership with a shared governance structure*. https://www.rolandgarros.com/en-us/page/grand-slam-tennis-partnership-shared-governance-structure-development-history-traditions
- Sky Sports. (2026). *French Open will retain human line judges for 2026, making it a Grand Slam outlier*. https://www.skysports.com/tennis/news/32455/13441312/french-open-will-retain-human-line-judges-for-2026-making-it-a-grand-slam-outlier
- Wimbledon. (2025, July 3). *The precision operation: Introducing electronic line calling*. https://www.wimbledon.com/en_GB/news/articles/2025-07-03/the_precision_operation_introducing_electronic_line_calling.html`,
      recallContent: [
        {
          prompt: "Under the standard ITF rule, does a service let cancel a previous fault?",
          answer: "No. If you faulted on the first serve and then hit a let, you are still on your second serve.",
        },
        {
          prompt: "What does the ITF's Appendix VI 'No Let' rule change?",
          answer:
            "A serve that touches the net, strap, or band is simply in play — there's no service let. It's an approved option, used in some competitions (including U.S. college tennis), not the universal rule.",
        },
      ],
    },
    {
      slug: "tennis-quiz-rules",
      title: "6 · Quiz: the court, the scoreboard, and the rulebook",
      section: "Section 1 · The court, the scoreboard, and the rulebook",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How much wider is a doubles court than a singles court?",
            options: ["3 feet", "6 feet", "9 feet", "12 feet"],
            correctIndex: 2,
            explanation: "Singles is 27 ft wide, doubles is 36 ft (ITF Rule 1). The 9-foot difference is the two alleys.",
            sourceLessonSlug: "tennis-court-and-gear",
          },
          {
            prompt: "The tennis net is lower in the center than at the posts. By how much, and why does it matter tactically?",
            options: [
              "6 inches lower — it makes cross-court the geometrically safer shot",
              "6 inches higher — it makes down-the-line safer",
              "It is the same height all the way across",
              "1 foot lower — it makes the drop shot safer",
            ],
            correctIndex: 0,
            explanation:
              "3 ft at the center, 3½ ft at the posts (ITF Rule 1). The ball you hit through the middle of the net clears by more margin — the foundation of the cross-court default.",
            sourceLessonSlug: "tennis-court-and-gear",
          },
          {
            prompt: "Whose score is announced first in a tennis game?",
            options: ["The receiver's", "The server's", "Whoever is ahead", "Alphabetically, by last name"],
            correctIndex: 1,
            explanation: "The server's score is always called first (ITF Rule 5a).",
            sourceLessonSlug: "tennis-scoring-a-game",
          },
          {
            prompt: "Both players have won three points. What is the score called?",
            options: ["40–40", "Deuce", "Advantage", "Tie-break"],
            correctIndex: 1,
            explanation: "Three points each is 'Deuce,' not 40–40 (ITF Rule 5a). You must then win two consecutive points.",
            sourceLessonSlug: "tennis-scoring-a-game",
          },
          {
            prompt: "Where does the '15, 30, 40' scoring system come from?",
            options: [
              "It's specified in ITF Rule 5 as deriving from a clock face",
              "Nobody knows for certain — the clock-face story is a theory, not a documented fact",
              "It was invented by the USTA in 1881",
              "It comes from the number of feet between the service lines",
            ],
            correctIndex: 1,
            explanation:
              "The clock-face and l'œuf stories circulate widely but are theories. What is documented is the modern rule, in ITF Rule 5.",
            sourceLessonSlug: "tennis-scoring-a-game",
          },
          {
            prompt: "In 'No-Ad' scoring, what happens at Deuce, and who chooses the side?",
            options: [
              "A single deciding point wins the game; the receiver chooses the side",
              "A single deciding point wins the game; the server chooses the side",
              "You play a 7-point tie-break; the umpire chooses",
              "Nothing changes — you still need to win by two",
            ],
            correctIndex: 0,
            explanation: "ITF Appendix VI: one deciding point, and the receiver chooses which half to receive it from.",
            sourceLessonSlug: "tennis-scoring-a-game",
          },
          {
            prompt: "In a standard tie-break game, how many points do you need to win it?",
            options: [
              "Seven, by a margin of two",
              "Ten, by a margin of two",
              "Seven, margin irrelevant",
              "Six, by a margin of one",
            ],
            correctIndex: 0,
            explanation:
              "First to seven points with a two-point margin, continuing until that margin is achieved (ITF Rule 5b).",
            sourceLessonSlug: "tennis-sets-tiebreaks-and-match",
          },
          {
            prompt: "In a tie-break, the serve rotation is:",
            options: [
              "Each player serves two points throughout",
              "First server serves one point, then players alternate two consecutive points each",
              "The server of the previous game serves the whole tie-break",
              "Each player serves four points",
            ],
            correctIndex: 1,
            explanation: "One point, then two, then two, and so on (ITF Rule 5b).",
            sourceLessonSlug: "tennis-sets-tiebreaks-and-match",
          },
          {
            prompt: "At the four Grand Slams, what is the match format for men's and women's singles?",
            options: [
              "Best-of-5 for both",
              "Best-of-3 for both",
              "Men best-of-5, women best-of-3",
              "It changes tournament to tournament",
            ],
            correctIndex: 2,
            explanation:
              "ITF Rule 7 permits either. The Slams use best-of-5 for men's singles and best-of-3 for women's; below the Slams, ATP and WTA tour events are best-of-3 for everyone.",
            sourceLessonSlug: "tennis-sets-tiebreaks-and-match",
          },
          {
            prompt: "Who standardized the 10-point final-set tie-break across all four Grand Slams, and when?",
            options: [
              "The ITF, in its 2026 rulebook",
              "The ATP and WTA jointly, in 2019",
              "The Grand Slam Board, announced 16 March 2022 as a trial",
              "The four Slams have never standardized it",
            ],
            correctIndex: 2,
            explanation:
              "The Grand Slam Board — the four tournaments acting together — announced it on 16 March 2022, as a trial to be reviewed with the WTA, ATP, and ITF. Before that, all four majors did something different at 6–6 in the final set.",
            sourceLessonSlug: "tennis-sets-tiebreaks-and-match",
          },
          {
            prompt: "You toss the ball to serve, decide not to hit it, and catch it. What's the call?",
            options: ["Fault", "Let", "Nothing — you may catch it or let it bounce", "Loss of point"],
            correctIndex: 2,
            explanation: "ITF Rule 19, Case 1 answers this explicitly: it is not a fault.",
            sourceLessonSlug: "tennis-the-serve-and-the-let",
          },
          {
            prompt: "During the service motion, may the server have one or both feet off the ground?",
            options: [
              "No — both feet must stay planted",
              "Yes — the rulebook explicitly permits it",
              "Only on a second serve",
              "Only in doubles",
            ],
            correctIndex: 1,
            explanation: "ITF Rule 18, Case 2: 'Is the server allowed to have one or both feet off the ground? Decision: Yes.'",
            sourceLessonSlug: "tennis-the-serve-and-the-let",
          },
          {
            prompt:
              "You fault on the first serve. Your second serve clips the net cord and lands in. Under the standard ITF rule, what happens?",
            options: [
              "Double fault — you lose the point",
              "It's a let; you replay it, and you are still on your second serve",
              "It's a let; you get a fresh first serve",
              "It's in play — the point continues",
            ],
            correctIndex: 1,
            explanation:
              "ITF Rule 22: a service let does not cancel a previous fault. (At an event using Appendix VI's 'No Let' rule, it would simply be in play.)",
            sourceLessonSlug: "tennis-the-serve-and-the-let",
          },
          {
            prompt: "Which organization publishes the Rules of Tennis?",
            options: ["The ATP", "The WTA", "The ITF", "The Grand Slam Board"],
            correctIndex: 2,
            explanation:
              "The ITF determines the Rules of Tennis and republishes them annually. The ATP and WTA run their tours; the Slams run themselves.",
            sourceLessonSlug: "tennis-who-writes-the-rules",
          },
          {
            prompt: "Which Grand Slam confirmed it would keep human line judges for 2026?",
            options: ["Wimbledon", "The US Open", "The Australian Open", "Roland-Garros (the French Open)"],
            correctIndex: 3,
            explanation:
              "Roland-Garros is the only major still using line judges. On clay the ball leaves an inspectable mark, and its tournament director has said the technology's reliability is 'not absolute' on the surface.",
            sourceLessonSlug: "tennis-who-writes-the-rules",
          },
        ],
      },
    },
  ],
};
