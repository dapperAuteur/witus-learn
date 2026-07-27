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
//     ITF. No invented statistics, no invented people, no invented rule numbers. Where the data
//     genuinely does not exist (full per-round, per-event prize-money distribution across both
//     tours), the lesson SAYS SO rather than fabricating a table.
//   * Technique (Section 2) is cited to USTA Player Development's stroke fundamentals. Note that
//     the ITF rulebook says NOTHING about grips — the course states that explicitly rather than
//     dressing coaching convention up as law.
//   * Strategy (Section 3) uses Craig O'Shannessy's ATP/Infosys rally-length work (~70% of points
//     end in 0-4 shots). That figure is flagged in-lesson as MEN'S PROFESSIONAL data, because no
//     comparable public recreational data exists. Court geometry is cited to ITF Rule 1 (exact
//     dimensions); the course deliberately REFUSES to quote a sourceless "X% of amateur points are
//     unforced errors" statistic, and says why.

import type { AuthoredCourse } from "./authored-course";

export const TENNIS_COURSE: AuthoredCourse = {
  title: "Tennis: Play It, Read It, Work In It",
  description:
    "A complete, cited tennis course for high school students: how to actually play (grips, strokes, footwork), how to think tactically (serve+1, court positioning, patterns, singles vs. doubles), the rules and who writes them (the ITF publishes them; the tours and the four Slams layer their own conditions on top), the sport's remarkable social history (the American Tennis Association, Althea Gibson, Arthur Ashe, Billie Jean King and the Original 9, the Open era, and the 34-year climb to equal prize money), how the leagues actually fit together, and the honest economics, what tennis really pays, and the many ways to build a life or a business in it without ever turning pro.",
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

Two numbers in that table are worth staring at. The doubles court is **9 feet wider** than the singles court, those two strips are the **alleys** (or "tramlines"), and they are in play in doubles and out in singles. And the net is **six inches lower in the middle than at the posts**. That is not a construction defect. It is the single most useful fact in tennis strategy, and Section 3 is going to build an entire tactical system on top of it.

The rest of the lines: the **baselines** are the ends, the **sidelines** are the sides, the two **service lines** run parallel to the net 21 feet away from it, and the **center service line** splits the space between the net and the service line into the two **service courts** you have to serve into (ITF, 2026, Rule 1).

**The gear.** A racket and a ball, both of which the ITF also specifies (Rule 3, Rule 4, and Appendices I and II). You do not need to memorize the specs. You *should* know that the ITF approves different ball types for different purposes, including slower, lower-bouncing **Stage 3 (Red)**, **Stage 2 (Orange)**, and **Stage 1 (Green)** balls used on smaller courts for players 10 and under (ITF, 2026, Appendix VIII). A red ball on a 36-foot court is not a toy. It is a deliberate design that lets a beginner rally on day one instead of chasing a ball that bounces over their head, and that is exactly why a coach will hand one to an adult beginner too.

**Shoes matter more than the racket.** Tennis is a lateral sport played in short, violent bursts. Running shoes are built to roll forward and will roll your ankle sideways. Court shoes are the one piece of equipment worth spending on first.

:::reveal The net is 3 feet high in the center and 3½ feet high at the posts. Why should a player care about that six-inch difference? ||| Because the lowest, safest part of the net is the middle, so the ball you hit through the center of the net (which, from a corner, means a cross-court ball) clears by more margin and travels over a longer diagonal. Cross-court is the geometrically safer shot, and it's the default for that reason. Down the line goes over a higher net into a shorter court.

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

With one catch, and it's the whole game: **if both players reach three points, the score is not 40-40, it is "Deuce."** From Deuce, the player who wins the next point has **"Advantage."** If they win the point after that, they win the game. If they lose it, the score goes **back to Deuce** (ITF, 2026, Rule 5a).

So the rule underneath the funny words is simple: **you must win a game by two points.** Deuce can go on essentially forever, and in a tight match it often does.

Where did "love," "15," "30," "40" come from? Honest answer: **nobody knows for certain.** You will hear a confident story about a clock face, 15, 30, 45, rounded to 40, and you will hear that "love" comes from the French *l'œuf* ("the egg," i.e., zero). Both are **theories**, not documented facts, and this course is not going to hand you a myth dressed as history. What *is* documented is the modern rule, and it is in Rule 5.

**Two variants you will actually meet.** The ITF also approves alternatives in **Appendix VI**, and your high school team or a college match may well use one:

- **"No-Ad" scoring.** At Deuce, you play a single **deciding point**, winner takes the game. No advantage, no endless deuces. The **receiver chooses** which side to receive it from (ITF, 2026, Appendix VI). This is common in college tennis and in doubles on the pro tours, and it exists for one reason: to make match length predictable.
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
      body: `Games stack into sets; sets stack into a match. Here is where most people's confident knowledge of tennis quietly turns out to be wrong, because **the format is not the same everywhere**, and the people who tell you it is have usually only watched one tournament.

**A set.** The ITF names two methods, and says the one being used **must be announced in advance of the event** (ITF, 2026, Rule 6):

- **Tie-break set**, first to **six games**, must win by **two**. At **six games all**, you play a **tie-break game**. This is the standard nearly everywhere.
- **Advantage set**, first to six games, win by two, and **no tie-break**: the set just keeps going. 7-5, 9-7, 24-22. This is the format that produced the legendary marathons, and it has been squeezed almost entirely out of the professional game.

**The tie-break game** is, confusingly, defined inside **Rule 5, "Score in a Game"**, because a tie-break *is* a game (ITF, 2026, Rule 5b). Points are counted "Zero, 1, 2, 3…" and the **first to seven points, by a margin of two**, wins the game *and* the set. Serving rotates in a specific way: whoever's turn it is serves **one** point, then the opponent serves **two**, and from there each player serves **two consecutive points** until it ends.

**A match** is best-of-3 sets (win 2) or best-of-5 sets (win 3), ITF Rule 7. Which one you play is up to the event. At the four Grand Slams, **men's singles is best-of-5 and women's singles is best-of-3**; almost everywhere else, including all ATP and WTA Tour events below the Slams, **everyone plays best-of-3**.

**The final-set tie-break: a rule that only recently stopped being a mess.** Until 2022, the four Slams each did something *different* when a deciding set reached 6-6. Then, on **16 March 2022**, the **Grand Slam Board**, the four tournaments acting together, not the ATP, WTA, or ITF, announced a single standard: at **six games all in the final set**, a **10-point tie-break** decides the match, first to 10 by a margin of two. It was announced as a **trial**, to be reviewed across a full Grand Slam year in consultation with the WTA, ATP, and ITF before any permanent rule change (Wimbledon, 2022). The ITF lists exactly this "**Final Set Tie-Break (10 points)**" among its approved alternatives in **Appendix VI**, alongside 7-point and 10-point **match tie-breaks** that replace a deciding set entirely (ITF, 2026).

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
            "At Deuce, a single deciding point wins the game, no advantage. The receiver chooses which side to receive it from (ITF Appendix VI).",
        },
      ],
    },
    {
      slug: "tennis-the-serve-and-the-let",
      title: "4 · The serve, the fault, and the let",
      section: "Section 1 · The court, the scoreboard, and the rulebook",
      body: `The serve is the only shot in tennis you control completely, nobody is hitting a ball at you, and it is where beginners lose most of their points. It is also where the rulebook is most specific.

**Where you stand.** Immediately before starting the service motion, the server stands **at rest with both feet behind the baseline**, between the imaginary extensions of the **center mark** and the **sideline** (ITF, 2026, Rule 16). You serve from behind **alternate halves** of the court, starting from the **right** half in every game (Rule 17).

**Where it has to go.** The serve must pass over the net and land in the **service court diagonally opposite** before the receiver returns it (ITF, 2026, Rule 17).

**Foot fault (Rule 18).** During the service motion you must not walk or run to change position (slight foot movements are fine), and you must not **touch the baseline or the court**, the area outside the imaginary sideline extension, or the imaginary extension of the center mark, with either foot. And a detail the rulebook answers explicitly: **you *are* allowed to have one or both feet off the ground** (ITF, 2026, Rule 18, Case 2).

**Service fault (Rule 19).** The serve is a fault if you break Rules 16, 17, or 18; if you **miss the ball** trying to hit it; if the ball hits a permanent fixture, singles stick, or net post before hitting the ground; or if it hits you, your partner, or anything you're wearing or carrying. But if you toss the ball and **decide not to hit it**, you may catch it or let it bounce, **that is not a fault** (ITF, 2026, Rule 19, Case 1).

**Two faults in a row and you lose the point**, a **double fault** (ITF, 2026, Rules 20 and 24a). This is why the second serve exists, and why the second serve is a different shot, hit with more spin and more margin.

**The let (Rule 22).** The service is a **let** if the ball touches the **net, strap, or band** and is otherwise good, or if you served when the receiver was not ready. You simply **serve that one again**, and crucially, **a service let does not cancel a previous fault** (ITF, 2026, Rule 22). Hit a fault, then a let on the second serve? You are still on your second serve.

**And now the variation.** The ITF's **Appendix VI** approves a **"No Let" rule**: play *without* the service let, so a serve that clips the net and lands in **is simply in play** (ITF, 2026). This is not hypothetical, no-let is used in a range of competitions, including college tennis in the United States. So if someone tells you a net-cord serve is "always" a let, they are describing one rule option, not the rule.

:::reveal You hit a fault on your first serve. Your second serve clips the net cord and lands in the correct service box. Under the standard ITF rule, what happens, and what would happen at an event playing "No Let"? ||| Under the standard rule it is a **service let** (Rule 22): you serve that one again, and because a service let does not cancel a previous fault, you are still on your **second serve**. At an event using the Appendix VI **"No Let"** rule, the serve is simply **in play** and the point continues.

## Sources
- International Tennis Federation. (2026). *ITF rules of tennis 2026*. https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf`,
      recallContent: [
        {
          prompt: "At six games all in the final set of a Grand Slam, what happens, and since when?",
          answer:
            "A 10-point tie-break (first to 10, win by 2). The Grand Slam Board announced this common standard across all four majors on 16 March 2022; before that, all four Slams did something different.",
        },
        {
          prompt: "Is a tie-break game a set or a game, per the ITF rulebook?",
          answer:
            "A game, it's defined inside Rule 5, 'Score in a Game.' Winning it wins both the game and the set.",
        },
      ],
    },
    {
      slug: "tennis-who-writes-the-rules",
      title: "5 · Who writes the rules, and who bends them",
      section: "Section 1 · The court, the scoreboard, and the rulebook",
      body: `This lesson exists because almost everyone gets this wrong, including people who watch tennis every week.

**The ITF publishes the rules.** The International Tennis Federation is the governing body of the game, and its duties "include protecting the integrity of the game through determination of the Rules of Tennis." A **Rules of Tennis Committee** monitors the game and recommends changes to the ITF Board, which recommends them to the ITF's **Annual General Meeting**, "the ultimate authority for making any changes to the Rules of Tennis" (ITF, 2026, Foreword). The rulebook is republished every year.

*(Naming note: the ITF's member nations voted in October 2025 to rebrand the federation as **"World Tennis,"** a trading name adopted on 1 January 2026 (ITF, 2025). You'll see both names in use for a while. This course says "ITF," because that is what the rulebook it cites still says on the cover.)*

**But the ITF does not run professional tennis.** Three other kinds of organization layer their own conditions on top of that rulebook:

- The **ATP** runs the men's professional tour and publishes its own annual rulebook (ATP Tour, 2026).
- The **WTA** runs the women's professional tour.
- The **four Grand Slams are run by neither.** The US Open belongs to the **USTA**; Wimbledon to the **All England Lawn Tennis Club**; Roland-Garros to the **Fédération Française de Tennis**; the Australian Open to **Tennis Australia**. They coordinate through a **Grand Slam Board** made up of the four Grand Slam chairs, supported by their CEOs, which is responsible for the Grand Slam rules, regulations, code of conduct, and officiating (Roland-Garros, n.d.).

So: **seven power centers, no commissioner.** The ITF writes the rules of the *game*; the tours run their *tours*; the Slams run *themselves*. This is why a rule change like the final-set tie-break had to be announced by the *Grand Slam Board* rather than simply decreed, and it is why, as you'll see in Section 5, **equal prize money had to be won four separate times.**

**Electronic line calling: the same story, happening right now.** From **2025**, the ATP adopted **Electronic Line Calling Live across all its tour-level events**, on every surface, replacing human line judges (ATP Tour, 2023). **Wimbledon** adopted Live ELC across all its match courts from **2025**, ending 147 years of line umpires calling its grass (Wimbledon, 2025). The Australian Open and US Open use it too.

And **Roland-Garros does not.** For **2026**, the French Open confirmed it is **keeping human line judges**, the only Grand Slam that does, because on clay the ball leaves a **mark**, which an umpire can climb down and inspect, and because tournament director Amélie Mauresmo has said the technology's "reliability... is not absolute" on the surface (Sky Sports, 2026). The ITF's own rulebook, meanwhile, still sets out **Electronic Review Procedures** for tournaments where a review system is used, including the rule that **each player gets three unsuccessful appeals per set** (ITF, 2026, Appendix VII).

Which means the honest answer to "does tennis use robot line judges?" is: **at three of the four majors and across the ATP Tour, yes; at Roland-Garros in 2026, no.** Get comfortable with that sentence. It is what almost every "rule" in this sport actually looks like up close.

:::reveal Who runs the four Grand Slam tournaments, and why does the answer matter? ||| Four separate national organizations, not the tours and not the ITF: the **USTA** (US Open), the **All England Lawn Tennis Club** (Wimbledon), the **Fédération Française de Tennis** (Roland-Garros), and **Tennis Australia** (Australian Open), coordinating through the **Grand Slam Board**. It matters because no one can order all four to do anything, which is why standardizing the final-set tie-break took a joint announcement, and why equal prize money had to be won at each Slam separately, over 34 years.

## Sources
- ATP Tour. (2023, April). *Electronic Line Calling Live to be adopted across the ATP Tour*. https://www.atptour.com/en/news/electronic-line-calling-release-april-2023
- ATP Tour. (2026). *The 2026 ATP official rulebook*. https://www.atptour.com/-/media/files/rulebook/2026/2026-rulebook_27apr26.pdf
- International Tennis Federation. (2025, October 16). *International Tennis Federation to become World Tennis in 2026*. https://www.itftennis.com/en/news-and-media/articles/international-tennis-federation-to-become-world-tennis-in-2026/
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
            "A serve that touches the net, strap, or band is simply in play, there's no service let. It's an approved option, used in some competitions (including U.S. college tennis), not the universal rule.",
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
              "6 inches lower, cross-court clears more net",
              "6 inches higher, making the down-the-line shot safer",
              "It is the same height all the way across",
              "1 foot lower, it makes the drop shot safer",
            ],
            correctIndex: 0,
            explanation:
              "3 ft at the center, 3½ ft at the posts (ITF Rule 1). The ball you hit through the middle of the net clears by more margin, the foundation of the cross-court default.",
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
            options: ["40-40", "Deuce", "Advantage", "Tie-break"],
            correctIndex: 1,
            explanation: "Three points each is 'Deuce,' not 40-40 (ITF Rule 5a). You must then win two consecutive points.",
            sourceLessonSlug: "tennis-scoring-a-game",
          },
          {
            prompt: "Where does the '15, 30, 40' scoring system come from?",
            options: [
              "It's specified in ITF Rule 5 as deriving from a clock face",
              "The clock-face story is a theory, not documented fact",
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
              "Nothing changes, you still need to win by two",
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
              "One point by the first server, then two each in turn",
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
              "The ITF, when it published the 2026 rulebook revision",
              "The ATP and WTA together, back in the 2019 season",
              "The Grand Slam Board, on 16 March 2022 as a trial",
              "The four Slams have never once standardized it",
            ],
            correctIndex: 2,
            explanation:
              "The Grand Slam Board, the four tournaments acting together, announced it on 16 March 2022, as a trial to be reviewed with the WTA, ATP, and ITF. Before that, all four majors did something different at 6-6 in the final set.",
            sourceLessonSlug: "tennis-sets-tiebreaks-and-match",
          },
          {
            prompt: "You toss the ball to serve, decide not to hit it, and catch it. What's the call?",
            options: [
              "Fault, exactly like a missed first serve",
              "A let, you replay the first serve",
              "Nothing, you may catch or bounce it",
              "Loss of point, a service fault",
            ],
            correctIndex: 2,
            explanation: "ITF Rule 19, Case 1 answers this explicitly: it is not a fault.",
            sourceLessonSlug: "tennis-the-serve-and-the-let",
          },
          {
            prompt: "During the service motion, may the server have one or both feet off the ground?",
            options: [
              "No, both feet must stay planted",
              "Yes, the rulebook explicitly permits it",
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
              "Double fault, you lose the point",
              "A let; replay it, still second serve",
              "It's a let, and you get a fresh first serve",
              "It's in play, the point continues",
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
            options: [
              "Wimbledon, played on grass",
              "The US Open, on hard court",
              "The Australian Open, on hard courts",
              "Roland-Garros, the French Open",
            ],
            correctIndex: 3,
            explanation:
              "Roland-Garros is the only major still using line judges. On clay the ball leaves an inspectable mark, and its tournament director has said the technology's reliability is 'not absolute' on the surface.",
            sourceLessonSlug: "tennis-who-writes-the-rules",
          },
        ],
      },
    },

    // ───────────────────────────── SECTION 2 · HITTING THE BALL ─────────────────────────────
    {
      slug: "tennis-grips",
      title: "7 · Grips: the one decision that quietly determines every shot you can hit",
      section: "Section 2 · Hitting the ball",
      body: `Before you swing at anything, you make a decision most beginners don't know they're making: **how you hold the racquet**. The grip is not a preference. It is a set of physical constraints. It decides what height of ball you can hit comfortably, how much topspin you can generate, and (this is the part nobody tells you) **which shots become nearly impossible**.

**The bevel system.** Hold the racquet edge-on, like an axe about to chop. The handle is an octagon: eight flat faces, called **bevels**. Number them starting with the top face as **bevel 1**, then go **clockwise for a right-hander** (counter-clockwise for a left-hander, every grip below mirrors). Where you put the **heel pad** and the **index knuckle** of your hitting hand names the grip (USTA Player Development, n.d.).

| Grip | Index knuckle on | What it's for | The trade-off |
| --- | --- | --- | --- |
| **Continental** | Bevel 2 | **Serves, volleys, overheads, slice**, and the bottom hand on a two-handed backhand | Terrible for a modern topspin forehand; the face is too open |
| **Eastern forehand** | Bevel 3 | A flat, penetrating, controllable forehand | Less topspin; struggles with high balls |
| **Semi-western forehand** | Bevel 4 | Heavy topspin; the most common forehand on tour today | Low, skidding balls are awkward |
| **Western forehand** | Bevel 5 | Extreme topspin, very high bounces | Low balls become genuinely hard; hostile on grass |
| **Eastern backhand** | Bevel 1 | A one-handed topspin backhand | Requires an early, disciplined preparation |

**The single most important grip is the Continental**, and it is the one beginners avoid, because it feels *wrong* on a forehand. Learn it anyway. It is the grip for the **serve, the volley, the overhead, and the slice**, four different shots, one grip (USTA Player Development, n.d.). A player who can't hold Continental cannot really serve or volley; they can only pat the ball. The reason it feels wrong is that it opens the racquet face, and an open face is exactly what a serve and a volley need, and exactly what a topspin forehand does not.

**Why the tour drifted semi-western.** The semi-western forehand closes the face and lets you brush **up** the back of the ball, which produces topspin, which makes the ball dip down inside the baseline. That lets you swing hard *and* keep it in. It is the best available compromise between spin and flat power across the ball heights the modern game produces (USTA Player Development, n.d.). It is not a free lunch: it makes low, sliced balls awkward, which is precisely why players slice against western-grip opponents.

**The honest coaching note.** There is no "correct" grip handed down by the ITF, **the rulebook says nothing whatsoever about how you hold the racquet**. Grips are coaching convention, not law. What *is* true is the constraint: a grip that is great for one shot is bad for another, so every grip choice is a bet about which shots you intend to hit.

:::reveal Which single grip is used for the serve, the volley, the overhead, AND the slice, and why does it feel wrong to beginners on a forehand? ||| The **Continental** grip (index knuckle on **bevel 2**). It feels wrong on a forehand because it leaves the racquet **face open**, which is exactly what a serve and a volley need, and exactly what a topspin forehand does not. Beginners avoid it for that reason, and as a result never really learn to serve or volley.

## Sources
- International Tennis Federation. (2026). *ITF rules of tennis 2026*. https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf
- USTA Player Development. (n.d.). *Technique: Stroke fundamentals*. https://www.playerdevelopment.usta.com/Improve-Your-Game/Sport-Science/114384_Technique_Stroke_Fundamentals/`,
      recallContent: [
        {
          prompt: "Who writes the Rules of Tennis, and who layers conditions on top?",
          answer:
            "The ITF publishes the Rules of Tennis. The ATP and WTA tours layer their own conditions on top for their events, and the four Grand Slams are run by their own national associations and the Grand Slam Board, NOT by the tours.",
        },
        {
          prompt: "Does the ITF rulebook specify how you must hold the racquet?",
          answer: "No. The rules say nothing about grips at all. Grips are coaching convention, not law.",
        },
      ],
    },
    {
      slug: "tennis-groundstrokes",
      title: "8 · Groundstrokes: the forehand, and the two different backhands",
      section: "Section 2 · Hitting the ball",
      body: `A **groundstroke** is any ball you hit after it bounces once. It is the majority of the shots you will ever play, and it comes in two flavours, forehand and backhand, that are not mirror images of each other.

**The forehand.** The dominant-side groundstroke, and for most players the shot they build a game around. The chain the USTA teaches is **legs → hips → torso → shoulder → arm → racquet**: power is generated from the ground up and passed along the body, not manufactured by the arm (USTA Player Development, n.d.). If you are arming the ball, you have skipped the first four links.

Three things matter more than the details:
- **Early preparation.** The racquet turns back as the ball crosses the net, not as it bounces on your side. Late preparation is the single most common fault in recreational tennis, and no grip fixes it.
- **Contact out in front.** You want to strike the ball ahead of your front hip, where you can still see it and still accelerate. Contact behind you is a defensive shot you didn't choose to hit.
- **Low to high.** To make topspin, the racquet head travels from **below** the ball to **above** it, brushing up the back. Topspin is what lets you hit hard and still land it in.

**The backhand: pick a side of an old argument.**

| | One-handed backhand | Two-handed backhand |
| --- | --- | --- |
| **Reach** | Longer | Shorter |
| **Slice / disguise** | Natural, it's the same grip | Requires releasing the top hand |
| **High balls** | Hard; the shoulder is exposed | Much easier, the second hand supports |
| **Learning curve** | Slower; demands early preparation | Faster; the second hand stabilizes for you |
| **Power on the return** | Harder to block back a big serve | Easier, this is why the tour drifted two-handed |

Neither is correct. The two-hander is easier to learn, better on high balls, and better against a big serve, which is why it dominates the professional game. The one-hander has more reach and a more natural slice. **The two-hander's grip is the interesting detail**: the bottom (dominant) hand typically stays **Continental**, which means a two-hander is, in part, the same grip you serve and volley with (USTA Player Development, n.d.).

**The slice.** Hit with a **Continental** grip and a high-to-low path, the slice puts **backspin** on the ball. It floats, it stays low after the bounce, and it gives you time. It is not a weak shot; it is a *different* shot. Against a western-grip opponent who wants the ball at shoulder height, a slice that stays at knee height is an attack, not a retreat.

:::reveal Name the power chain a groundstroke should use, in order, and the most common recreational fault that no grip change can fix. ||| **Legs → hips → torso → shoulder → arm → racquet**: power comes from the ground up, passed through the body, not manufactured by the arm. The most common fault is **late preparation**, turning the racquet back when the ball bounces on your side instead of when it crosses the net. No grip fixes being late.

## Sources
- USTA Player Development. (n.d.). *Technique: Stroke fundamentals*. https://www.playerdevelopment.usta.com/Improve-Your-Game/Sport-Science/114384_Technique_Stroke_Fundamentals/`,
      recallContent: [
        {
          prompt: "Where does the index knuckle sit for a Continental grip, and for a semi-western forehand?",
          answer:
            "Continental: bevel 2. Semi-western forehand: bevel 4. (Right-hander numbering, a left-hander mirrors it.)",
        },
        {
          prompt: "Why did the professional game drift toward the two-handed backhand?",
          answer:
            "It's easier to learn, far better on high balls, and much easier to block back a big serve, the second hand stabilizes the racquet.",
        },
      ],
    },
    {
      slug: "tennis-serve-and-return-technique",
      title: "9 · The serve and the return: the two shots that touch every single point",
      section: "Section 2 · Hitting the ball",
      body: `Lesson 4 covered what the **rules** say about the serve. This lesson is about **hitting** it, and about the shot on the other side of the net, which is the most under-practised stroke in tennis.

**Every point in tennis begins with a serve and a return. Every single one.** That is worth sitting with, because it means these two shots are guaranteed to appear in 100% of points, while your beautiful running forehand appears in some of them. Practice time in most clubs is allocated in almost exactly the reverse order.

**The serve.**
- **Grip: Continental.** Non-negotiable. A "frying-pan" (forehand) grip lets a beginner get the ball in the box on day one and then caps them forever: you cannot generate **spin** with it, so you cannot hit a reliable second serve, so you double-fault under pressure (USTA Player Development, n.d.).
- **The toss is the shot.** A serve is only as good as the toss. Consistent toss, consistent serve, and a toss you don't like, you are explicitly allowed to **catch and re-toss**: under ITF Rule 19, Case 1, if you toss the ball and decide not to hit it, you may catch it or let it bounce, and **it is not a fault** (ITF, 2026). Free do-over. Use it.
- **Trophy position → drive up.** The legs bend, the tossing arm extends, the hitting arm cocks. Then you drive **up** at the ball, not out at it. Beginners hit down at the ball, believing that's how you get it in the box; the net says otherwise.
- **The second serve is a different shot.** It is not "the first serve, but softer." That's how you get a serve that lands short and gets attacked. A real second serve is hit with **spin**, the racquet brushes across or up the back of the ball, which makes it dip into the box and kick up off the court. Spin, not speed, is what makes a second serve safe.

**The return.** The most neglected shot in tennis, and the one that decides who breaks serve.
- **Shorten the swing.** You do not have time for a full backswing against a real serve. The pace is supplied for you; your job is to redirect it. A blocked return that lands deep beats a beautiful full swing that lands in the net.
- **Split step as they strike.** (Next lesson.)
- **Two different jobs.** Against a **first serve**, the goal is simply to **get it back, deep, and neutralize**. Against a **second serve**, the goal is to **attack**, step in, take it early, and take the server's advantage away. Playing both returns the same way wastes the single biggest opportunity in a game.

**The strategic punchline:** the serve is the only shot in tennis you hit without anyone interfering, and the return is your only chance to take the server's free advantage away. They are the two highest-leverage strokes in the sport, which is exactly why Section 3 opens by proving it with data.

:::reveal Under ITF Rule 19, you toss the ball for your serve and don't like the toss. What are you allowed to do? ||| You may **catch it, or let it bounce**, and it is **not a fault** (ITF, 2026, Rule 19, Case 1). A serve is only as good as its toss, and the rulebook gives you a free do-over on a bad one. Most recreational players hit the bad toss anyway.

## Sources
- International Tennis Federation. (2026). *ITF rules of tennis 2026*. https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf
- USTA Player Development. (n.d.). *Technique: Stroke fundamentals*. https://www.playerdevelopment.usta.com/Improve-Your-Game/Sport-Science/114384_Technique_Stroke_Fundamentals/`,
      recallContent: [
        {
          prompt: "What makes a second serve safe, speed or spin? Why?",
          answer:
            "Spin. Brushing up/across the back of the ball makes it dip down into the box and kick off the court. A second serve that is just a slower first serve lands short and gets attacked.",
        },
        {
          prompt: "How should your goal differ returning a first serve vs. a second serve?",
          answer:
            "First serve: get it back deep and neutralize. Second serve: attack, step in, take it early, and take away the server's advantage.",
        },
      ],
    },
    {
      slug: "tennis-volleys-and-overheads",
      title: "10 · Volleys and overheads: the net game",
      section: "Section 2 · Hitting the ball",
      body: `A **volley** is a ball you hit **before it bounces**. An **overhead** (or "smash") is a volley hit above your head, like a serve, against a ball floating down at you. Both are hit with the **Continental** grip, the same grip as the serve (USTA Player Development, n.d.). One grip, three shots. This is the payoff for having learned the grip that felt wrong in Lesson 7.

**The volley is not a swing. It is a block.**

The single hardest idea to teach a beginner at the net is that you should **not swing**. The ball already has pace; you are borrowing it. The volley is a short, firm punch, racquet out in front, wrist firm, a small step forward through the ball. If you take a backswing at the net, the ball is past you before the racquet comes forward.

- **Racquet head above the wrist** wherever possible. When the ball is low, you **bend your knees** to get down to it, rather than dropping the racquet head.
- **Contact in front of the body**, where you can see it.
- **The open face is doing the work.** The Continental grip's open face is what lifts a low volley over the net and puts a little backspin on it so it stays low on the other side. You don't need to lift it with your arm; the grip does it.

**The overhead is a serve you didn't get to plan.** Same grip, same up-and-out motion, but the ball is moving, the sun may be in it, and you have to move your feet first. The rule that saves overheads: **turn sideways and move back with side-steps, getting behind the ball**, rather than backpedaling flat-footed with your chest to the net. Point your non-hitting hand up at the ball to track it.

**Why bother, in an era where nobody comes to net?**

Because "nobody comes to net" is a myth about *singles at the top of the men's tour*, generalized wildly. Even there it's false, players finish points at the net constantly; they just don't serve-and-volley every point. And in **doubles**, which is what most recreational tennis actually *is*, the net is the whole game: the team that controls the net usually wins. A player with no volley has voluntarily forfeited half the court and most of doubles.

:::reveal What is the one instruction that most improves a beginner's volley, and what should you do instead when the ball is low? ||| **Do not swing**, the volley is a short, firm **block/punch** with the racquet out in front; the ball already has pace and you are borrowing it. When the ball is low, **bend your knees** to get down to it rather than dropping the racquet head. The Continental grip's open face does the lifting for you.

## Sources
- USTA Player Development. (n.d.). *Technique: Stroke fundamentals*. https://www.playerdevelopment.usta.com/Improve-Your-Game/Sport-Science/114384_Technique_Stroke_Fundamentals/`,
      recallContent: [
        {
          prompt: "Which grip do the volley, the overhead, and the serve share?",
          answer: "Continental, index knuckle on bevel 2. One grip, three shots (plus the slice).",
        },
        {
          prompt: "How should you move back for an overhead?",
          answer:
            "Turn sideways and side-step back to get behind the ball, tracking it with the non-hitting hand pointed up, not backpedaling flat-footed with your chest to the net.",
        },
      ],
    },
    {
      slug: "tennis-footwork-and-recovery",
      title: "11 · Footwork: how you lose the point before you ever swing",
      section: "Section 2 · Hitting the ball",
      body: `Here is the most useful sentence in this whole section: **most bad shots are not bad swings. They are good swings taken from the wrong place.**

You cannot fix with your arm what you failed to fix with your feet. A player who arrives on balance hits a mediocre technique well. A player who arrives late and reaching hits a beautiful technique badly.

**The split step, the one thing to take from this lesson.**

As your opponent **strikes the ball**, you make a small hop and land lightly on the balls of both feet, knees bent, weight forward. That's it. That's the split step.

The timing is the whole trick: **you land as they make contact, not after.** The landing loads your legs like a spring, so that the instant you read the ball's direction you can push off in it. A player who is standing flat when the ball is struck must first *start* moving; a player who has split-stepped is already loaded and simply *goes*. Over a long rally that difference compounds into being a step late on every ball, which is indistinguishable, on the scoreboard, from having worse strokes.

**Recovery: the part nobody watches.**

Amateurs watch the ball. Watch the *player* instead, and you'll notice the thing that actually separates levels: **after hitting, they immediately move back toward the middle.** Not to the exact center, to the middle of the **angles their opponent can now hit**. Hit a ball crosscourt from the deuce corner and your recovery position is not the center mark; it is shaded toward the side the opponent's best reply comes from.

The rhythm of a rally is therefore not *hit, watch, hit*. It is:

**split step → read → move → hit → recover → split step → …**

Most recreational players do *hit → admire → panic*. They stand and watch their own shot, which is the single most expensive habit in the sport, because it costs them the split step and thus the first step to the next ball.

**The unglamorous truth about fitness.** Tennis is not a running sport in a straight line; it is a sport of short, explosive, multi-directional bursts with tiny recoveries between them. The stop is as important as the start, the ability to *decelerate*, plant, and change direction is what lets you hit on balance. That, and not stroke technique, is usually what gives out first in a long match.

:::reveal When exactly do you split step, and what does landing at that moment actually buy you? ||| You split step as your **opponent strikes the ball**, landing on the balls of both feet as they make contact, **not after**. Landing at that instant **loads your legs like a spring**, so that the moment you read direction you can push off immediately. A flat-footed player has to *start* moving first, which puts them a step late on every ball for the rest of the rally.

## Sources
- USTA Player Development. (n.d.). *Technique: Stroke fundamentals*. https://www.playerdevelopment.usta.com/Improve-Your-Game/Sport-Science/114384_Technique_Stroke_Fundamentals/`,
      recallContent: [
        {
          prompt: "Why is the volley a block rather than a swing?",
          answer:
            "The ball already carries pace, you're borrowing it. A backswing at the net means the ball is past you before the racquet comes forward.",
        },
        {
          prompt: "What's the full rhythm of a rally, in order?",
          answer: "Split step → read → move → hit → recover → split step → … (Not: hit → admire → panic.)",
        },
      ],
    },
    {
      slug: "tennis-quiz-hitting",
      title: "12 · Quiz: hitting the ball",
      section: "Section 2 · Hitting the ball",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "On the bevel system (right-hander), where does the index knuckle sit for a Continental grip?",
            options: ["Bevel 1", "Bevel 2", "Bevel 4", "Bevel 5"],
            correctIndex: 1,
            explanation:
              "Continental = heel pad and index knuckle on bevel 2 (bevel 7 for a left-hander, mirrored). It's the grip for serves, volleys, overheads, and slice.",
            sourceLessonSlug: "tennis-grips",
          },
          {
            prompt: "Which set of shots all share the Continental grip?",
            options: [
              "Topspin forehand, topspin backhand, and the return",
              "Serve, volley, overhead, and slice",
              "Only the serve",
              "Semi-western forehand and the two-handed backhand",
            ],
            correctIndex: 1,
            explanation:
              "One grip, four shots: serve, volley, overhead, slice, plus the bottom hand of a two-handed backhand. This is why the 'wrong-feeling' grip is the most important one to learn.",
            sourceLessonSlug: "tennis-grips",
          },
          {
            prompt: "What does the ITF rulebook say about which grip you must use?",
            options: [
              "It mandates the Continental grip for serving",
              "It mandates an Eastern grip for beginners",
              "Nothing, grips are convention, not law",
              "It bans the Western grip on grass",
            ],
            correctIndex: 2,
            explanation:
              "The rules say nothing whatsoever about how you hold the racquet. Every grip 'rule' you hear is coaching convention. The real constraint is physical: a grip that's great for one shot is bad for another.",
            sourceLessonSlug: "tennis-grips",
          },
          {
            prompt: "Why did the professional tour drift toward the semi-western forehand grip?",
            options: [
              "It is required by the ATP",
              "Closing the face gives heavy topspin",
              "It is the only grip that works on clay",
              "It makes low, skidding balls easier to handle",
            ],
            correctIndex: 1,
            explanation:
              "Semi-western closes the face, enabling heavy topspin, which dips the ball down inside the baseline. The trade-off is real: low, sliced balls become awkward, which is exactly why players slice against it.",
            sourceLessonSlug: "tennis-grips",
          },
          {
            prompt: "The USTA teaches groundstroke power as a chain. What is the correct order?",
            options: [
              "Arm → shoulder → torso → hips → knees → legs",
              "Legs → hips → torso → shoulder → arm",
              "Wrist → arm → racquet",
              "Torso → legs → arm → racquet",
            ],
            correctIndex: 1,
            explanation:
              "Legs → hips → torso → shoulder → arm → racquet. Power is generated from the ground up and passed through the body. If you're arming the ball, you skipped the first four links.",
            sourceLessonSlug: "tennis-groundstrokes",
          },
          {
            prompt: "What is the most common fault in recreational groundstrokes, the one no grip change can fix?",
            options: [
              "Gripping the racquet far too tightly",
              "Late preparation, racquet back too late",
              "Standing too close to the baseline for balance",
              "Using two hands on the backhand swing",
            ],
            correctIndex: 1,
            explanation:
              "Late preparation. The racquet should turn back as the ball crosses the net, not as it bounces on your side. No grip fixes being late.",
            sourceLessonSlug: "tennis-groundstrokes",
          },
          {
            prompt: "Which is a genuine advantage of the ONE-handed backhand over the two-hander?",
            options: [
              "It is easier on high, shoulder-height balls",
              "It is easier to block back a big serve",
              "More reach and a natural one-hand slice",
              "It is easier for beginners to learn",
            ],
            correctIndex: 2,
            explanation:
              "The one-hander has longer reach and a natural slice. The two-hander wins on high balls, on returns of big serves, and on learning speed, which is why the tour drifted two-handed.",
            sourceLessonSlug: "tennis-groundstrokes",
          },
          {
            prompt: "What does a slice do to the ball, and why is it not merely defensive?",
            options: [
              "Topspin, making the ball dip, it's purely a rally ball",
              "Backspin, so the ball floats then stays low",
              "Sidespin only, which is illegal in singles",
              "Nothing; slice is just a slower groundstroke",
            ],
            correctIndex: 1,
            explanation:
              "Backspin. The ball floats, gives you time, and stays low off the bounce. Against a western-grip opponent who wants shoulder-height balls, a knee-high slice is an attack.",
            sourceLessonSlug: "tennis-groundstrokes",
          },
          {
            prompt: "You toss the ball to serve, dislike the toss, and catch it. Under ITF Rule 19, what has happened?",
            options: [
              "A fault, like any missed serve",
              "A let, so you serve that point again",
              "Nothing, catch it or let it bounce",
              "Loss of point, a foot fault",
            ],
            correctIndex: 2,
            explanation:
              "ITF Rule 19, Case 1: if you toss the ball and decide not to hit it, you may catch it or let it bounce, and it is NOT a fault. It's a free do-over that most recreational players never use.",
            sourceLessonSlug: "tennis-serve-and-return-technique",
          },
          {
            prompt: "What actually makes a second serve safe?",
            options: [
              "Hitting the first serve more softly",
              "Spin that makes it dip in and kick",
              "Aiming for the centre line every single time",
              "Standing further behind the baseline",
            ],
            correctIndex: 1,
            explanation:
              "Spin, not reduced speed. A second serve that's just a slower first serve lands short and gets attacked. The spin is what makes it dip in and kick up.",
            sourceLessonSlug: "tennis-serve-and-return-technique",
          },
          {
            prompt: "How should your intent differ when returning a first serve versus a second serve?",
            options: [
              "Attack the first, neutralize the second",
              "Play both exactly the same way for consistency",
              "Neutralize the first, attack the second",
              "Lob the first, slice the second",
            ],
            correctIndex: 2,
            explanation:
              "First serve: get it back, deep, neutralize. Second serve: attack, step in and take away the server's advantage. Playing both the same wastes the biggest opportunity in a game.",
            sourceLessonSlug: "tennis-serve-and-return-technique",
          },
          {
            prompt: "What is the single most important instruction for a beginner's volley?",
            options: [
              "Take a long backswing to generate pace",
              "Do not swing, block the ball out in front",
              "Drop the racquet head below the wrist on every ball",
              "Always volley with a semi-western grip",
            ],
            correctIndex: 1,
            explanation:
              "Don't swing. The ball already has pace and you're borrowing it. A backswing at the net means the ball is past you before the racquet comes forward.",
            sourceLessonSlug: "tennis-volleys-and-overheads",
          },
          {
            prompt: "The ball is low at the net. What should you do?",
            options: [
              "Drop the racquet head well below your wrist",
              "Bend the knees, keep the racquet up",
              "Swing harder to lift it",
              "Let it bounce and hit a groundstroke",
            ],
            correctIndex: 1,
            explanation:
              "Bend the knees; keep the racquet head above the wrist where possible. The Continental grip's open face does the lifting, you don't need to lift with your arm.",
            sourceLessonSlug: "tennis-volleys-and-overheads",
          },
          {
            prompt: "When exactly should you split step?",
            options: [
              "Just after you hit your own shot",
              "As your opponent strikes, land on both feet",
              "Immediately after the ball bounces on your own side",
              "Only when you're at the net",
            ],
            correctIndex: 1,
            explanation:
              "You land as they make contact, not after. That loads your legs like a spring, so you can push off the instant you read direction. A flat-footed player has to start moving first, and is a step late all rally.",
            sourceLessonSlug: "tennis-footwork-and-recovery",
          },
          {
            prompt: "After you hit a shot, where should you recover to?",
            options: [
              "Exactly the centre mark, every time",
              "Toward the middle of their reply angles",
              "Stay right where you hit from, to watch the shot",
              "The net, always",
            ],
            correctIndex: 1,
            explanation:
              "Not the geometric centre, the middle of the opponent's available angles. And the habit that ruins this is standing to admire your own shot, which costs you the split step and the first step to the next ball.",
            sourceLessonSlug: "tennis-footwork-and-recovery",
          },
        ],
      },
    },

    // ───────────────────────────────── SECTION 3 · STRATEGY ─────────────────────────────────
    {
      slug: "tennis-the-first-4-shots",
      title: "13 · What tennis actually is: the first four shots",
      section: "Section 3 · Strategy: how points are actually won",
      body: `Ask a casual fan what professional tennis looks like and they will describe **long rallies**, two players trading heavy groundstrokes for twenty shots until one cracks. It is the sport's signature image. It is also, statistically, a minority event.

**The number that reorganizes everything.** Analysis of ATP match data by strategy analyst **Craig O'Shannessy**, whose work has been published through the ATP/Infosys partnership, found that in men's professional tennis roughly **70% of all points end within 0-4 shots**, about **20%** run 5-8 shots, and only about **10%** reach 9 shots or more (O'Shannessy, n.d.; TennisWorldUSA, 2016).

| Rally length | Share of points (ATP data) |
| --- | --- |
| **0-4 shots** | **~70%** |
| 5-8 shots | ~20% |
| 9+ shots | ~10% |

Sit with the first row. **Seven points in ten are over by the fourth shot.** In a 0-4 shot point, each player has touched the ball **at most twice**. So what are those four shots? They are always the same four (TennisWorldUSA, 2016):

1. The **serve**
2. The **return**
3. The server's next ball, **"Serve +1"**
4. The returner's next ball, **"Return +1"**

O'Shannessy calls these **The First 4 Shots**, and his central observation about coaching is a genuinely uncomfortable one: **these are the shots that get practised least and matter most.** Go to any club and watch. Two players rally crosscourt from the baseline for forty minutes, which is training for the ~10% of points that reach 9+ shots, and then play a match in which 70% of points are decided in the first four balls they never rehearsed.

**Important calibration, so you don't over-claim this.** That 70/20/10 split comes from **men's professional (ATP) match data**. It is *not* a measured fact about your high-school match, and this course will not pretend otherwise, comparable public rally-length data for recreational play essentially does not exist. But the *structural* point survives the change of level, and in fact **gets stronger**: at lower levels, serves and returns produce even more errors, so points end even sooner. If 70% is the professional figure, the recreational figure is not lower.

**What this changes about how you practise.** If you accept the data, the ordinary club practice routine is close to backwards. The rational allocation is to spend most of your time on:
- serving (both first and second),
- returning (both first and second serves),
- and the **one ball after each** of those.

**What this does NOT mean.** It does not mean rallying is worthless, or that fitness doesn't matter, or that you should try to end every point in two shots by swinging wildly. It means the **first four shots deserve the practice time they currently don't get**, and that the player who wins the short points usually wins the match.

:::reveal In men's professional tennis, roughly what share of points end within 0-4 shots, and what are those four shots called? ||| Roughly **70%** (with ~20% running 5-8 shots and ~10% going 9+). The four are the **serve**, the **return**, the server's next ball (**"Serve +1"**), and the returner's next ball (**"Return +1"**), what Craig O'Shannessy calls **The First 4 Shots**. They're the shots practised least and decisive most.

## Sources
- O'Shannessy, C. (n.d.). *ATP world articles: Tennis data & analytics*. Brain Game Tennis. https://braingametennis.com/media/atp-infosys-brain-game/
- SportsEdTV. (n.d.). *SportsEdTV talks with Craig O'Shannessy*. https://sportsedtv.com/blog/sportsedtv-talks-with-craig-o-shannessy
- TennisWorldUSA. (2016). *The first 4 shots*. https://www.tennisworldusa.org/tennis/news/Tennis_Technique/32178/the-first-4-shots/`,
      recallContent: [
        {
          prompt: "Most bad shots are not bad swings. What are they?",
          answer: "Good swings taken from the wrong place. You can't fix with your arm what you failed to fix with your feet.",
        },
        {
          prompt: "Which two shots appear in 100% of tennis points?",
          answer: "The serve and the return. Every point begins with both, yet they're among the least-practised shots at most clubs.",
        },
      ],
    },
    {
      slug: "tennis-serve-plus-one",
      title: "14 · Serve +1 and Return +1: building the point you want",
      section: "Section 3 · Strategy: how points are actually won",
      body: `If 70% of points end inside four shots (Lesson 13), then the question "what do I do with the ball *after* my serve?" is not a detail. It is most of the sport.

**Serve +1: the serve is a setup, not a weapon.**

Amateurs serve hoping for an ace. Aces are lovely and rare. The professional model treats the serve as the **first half of a two-shot combination**: you serve to a location *in order to force a predictable reply*, and you are already moving to hit that reply.

The classic pattern, for a right-hander:
1. **Serve wide** in the deuce court, pulling the returner off the court to their right.
2. The return, hit under pressure from outside the sideline, most often comes back **crosscourt**, the safest reply, over the low part of the net.
3. You have therefore **known in advance** roughly where the ball is coming. Step around and hit **Serve +1 into the open court** they just vacated.

That is it. That's the pattern that wins an enormous share of professional points. It is not exotic. It is available to a high-school player on day one, and almost none of them run it, because they are still hoping for the ace.

**The mechanism to internalize: you are not guessing, you are narrowing.** A serve to a location doesn't *determine* the return, it **shrinks the set of likely returns**. Strategy in tennis is almost never certainty; it is **playing the odds you yourself created.**

**Return +1: take the free lunch, then don't give it back.**

The mirror image. Against a **second serve**, the returner is the one with the advantage, and the standard failure is to waste it by trying to hit a winner off the return itself. The better model:
1. **Return +1 thinking**: hit a return that's *deep and aggressive but safe*, deliberately setting up the next ball.
2. **Then attack** with the +1 shot, from a balanced position, with the server now on defence.

The returner's cardinal sin is going for too much on the return of a second serve, turning the biggest advantage in the game into an unforced error, and handing back a point they were statistically favoured to win.

**Why "just get it back deep" is real strategy, not cowardice.** A deep ball takes away your opponent's ability to attack, because they must hit from behind the baseline, where the angles available to them are small. A short ball hands them the whole court. "Deep" is not a consolation prize for players who can't hit winners; **depth is the mechanism by which you take the opponent's options away.**

**Putting the section together:** you serve to a spot to narrow their reply → you pre-move to the reply you expect → you hit +1 into the space they left. You return deep to a spot to narrow *their* reply → you attack their weak next ball. That is what a "constructed" point means, and it is the whole difference between hitting tennis balls and playing tennis.

:::reveal Describe the classic Serve +1 pattern from the deuce court for a right-hander, and state what the serve is actually FOR. ||| **Serve wide** in the deuce court to pull the returner off the court; their return, hit under pressure from outside the sideline, most often comes back **crosscourt**; you step around and hit **Serve +1 into the open court** they just vacated. The serve is **not a weapon hunting an ace, it is a setup**: it doesn't determine the return, it **narrows** the set of likely returns, so you're playing odds you created yourself.

## Sources
- O'Shannessy, C. (n.d.). *ATP world articles: Tennis data & analytics*. Brain Game Tennis. https://braingametennis.com/media/atp-infosys-brain-game/
- TennisWorldUSA. (2016). *The first 4 shots*. https://www.tennisworldusa.org/tennis/news/Tennis_Technique/32178/the-first-4-shots/`,
      recallContent: [
        {
          prompt: "Roughly what share of ATP points end within 0-4 shots?",
          answer: "About 70%. Another ~20% run 5-8 shots, and only ~10% reach 9 or more.",
        },
        {
          prompt: "What are 'The First 4 Shots'?",
          answer: "Serve, return, Serve +1 (server's next ball), and Return +1 (returner's next ball). Practised least, decisive most.",
        },
      ],
    },
    {
      slug: "tennis-court-geometry",
      title: "15 · Court geometry: why crosscourt is free and the line is expensive",
      section: "Section 3 · Strategy: how points are actually won",
      body: `Tennis strategy is, to an unreasonable degree, just **geometry that most players never do**. Three facts about the shape of the court explain an enormous share of who wins.

**Fact 1, The net is lower in the middle.** The net is **3 feet (0.914 m) high at the centre** and **3 feet 6 inches (1.07 m) at the posts** (ITF, 2026, Rule 1). It **sags six inches**. So a crosscourt ball crosses a *lower* net than a down-the-line ball.

**Fact 2, The court is longer on the diagonal.** Obviously, but nobody uses it: the diagonal of the singles court is meaningfully longer than its straight length. So a crosscourt ball has **more court to land in**.

**Put those together and you get the most useful rule in tennis:**

> **Crosscourt gives you a lower net AND a longer court. Down-the-line gives you a higher net AND a shorter court.**

Which is why **crosscourt is the percentage rally ball, and down-the-line is the higher-risk attacking shot.** This is not a stylistic preference. It is arithmetic. Players who "go for the line" on neutral balls are choosing the smallest target over the biggest one, for no reason, and then blaming their technique when it misses.

**The corollary that wins matches: change direction on a ball you are ahead of, not one you are behind.** Hitting down the line is a *decision you earn*, take it when you're balanced and the ball is in your strike zone. Changing direction off a defensive ball, on the run, over the high part of the net, into the short part of the court, is the single most reliably losing shot in amateur tennis.

**Fact 3, Depth compresses your opponent's angles.** Think about where your opponent stands. If they're forced to hit from **behind the baseline**, the angles available to them are narrow, from back there, a sharp crosscourt simply doesn't geometrically exist. If you hit **short**, they can step inside the court, and from there the whole court opens up: sharp angles, drop shots, and approach shots all become available.

So **depth is defence and offence at the same time.** It's not the exciting shot, but it is the shot that decides whether your opponent gets to play the exciting one.

**And the myth to kill: "winners win matches."** At every level below professional, matches are decided overwhelmingly by **errors, not winners**, the ball that goes into the net or long is worth exactly as much to your opponent as their best forehand. The player who understands the geometry is simply **choosing targets with more margin**: over the low part of the net, into the long part of the court, deep enough that the reply is weak. That is "percentage tennis," and it beats prettier tennis with dreary regularity.

**One honest note on the numbers.** This lesson gives you the *court dimensions* from the ITF rulebook (ITF, 2026, Rule 1), which are exact and verifiable. It deliberately does **not** hand you a made-up statistic like "X% of amateur points end in unforced errors", that number gets thrown around constantly with no source behind it, and this course won't add to the pile. The geometry stands on its own without it.

:::reveal Why is a crosscourt ball the "percentage" shot? Give both geometric reasons, with the net heights. ||| Two reasons, and both are arithmetic. **(1) Lower net:** the net is **3 ft (0.914 m) at the centre** and **3 ft 6 in (1.07 m) at the posts** (ITF, 2026, Rule 1), it sags six inches, so a crosscourt ball crosses a *lower* net. **(2) Longer court:** the diagonal is longer than the straight length, so a crosscourt ball has *more court to land in*. Down-the-line gives you the opposite of both: a higher net and a shorter court, which is why it's the higher-risk attacking shot, to be taken only off a ball you're ahead of.

## Sources
- International Tennis Federation. (2026). *ITF rules of tennis 2026*. https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf
- O'Shannessy, C. (n.d.). *ATP world articles: Tennis data & analytics*. Brain Game Tennis. https://braingametennis.com/media/atp-infosys-brain-game/`,
      recallContent: [
        {
          prompt: "What is the returner's cardinal sin against a second serve?",
          answer:
            "Going for too much on the return itself, turning the biggest statistical advantage in the game into an unforced error. Return deep and aggressive but safe, THEN attack with the +1.",
        },
        {
          prompt: "Why is 'just get it back deep' real strategy rather than cowardice?",
          answer:
            "Depth forces the opponent to hit from behind the baseline, where the available angles are small. A short ball lets them step in and opens the whole court to them.",
        },
      ],
    },
    {
      slug: "tennis-doubles-strategy",
      title: "16 · Doubles: the same court, a completely different sport",
      section: "Section 3 · Strategy: how points are actually won",
      body: `Most tennis played by actual human beings is **doubles**. It is the format of club leagues, of high-school teams, of every social match ever arranged by four people who wanted to play for two hours. And it is not "singles with more people." The strategy inverts.

**The court gets wider, but not as much as you think.** The doubles court is **36 feet (10.97 m)** wide against the singles court's **27 feet (8.23 m)**, the two **doubles alleys** (or "tramlines") add **4.5 feet** each (ITF, 2026, Rule 1). Same length, though. So you have added **two players** and only **nine feet** of width. The court is, in effect, **much more crowded**, and that single fact drives everything else.

**Therefore: the net wins.** Because the court is crowded and short, the team that gets **both players to the net** controls the point. From the net you can hit **down** into a court that has no room; from the baseline you must hit **up** over the net to opponents who are waiting to volley. In doubles, the baseline is not neutral territory, it is a **disadvantage** you are trying to escape.

Which retro-justifies Lesson 10: a player with no volley is not a full doubles player. The net game isn't optional here; it's the objective.

**The standard formation, and what each player is actually doing.**
- The **server** serves and (in the attacking model) comes forward to join their partner.
- The **server's partner** stands at the net, and their job is *not* to stand there decoratively. It is to **poach**, to move across and intercept the return. Even the *threat* of poaching does work: a returner who is worried about the net player will aim wider, and miss more.
- The **returner** returns, ideally **crosscourt**, low, and away from that net player.
- The **returner's partner** starts near the service line, ready to come forward if the return is good, and to retreat if it isn't.

**The two rules that fix most amateur doubles:**
1. **Return crosscourt, and keep it low.** Down the line into the net player is a gift. Low is what matters more than hard: a ball hit at their feet cannot be volleyed down at you.
2. **Move as a unit.** The two partners are connected by an invisible rope about 8-10 feet long. Both up, or both back, but **never one up and one back**, which is the most common recreational formation and the worst one, because it leaves a diagonal corridor of open court that a competent team will hit through all afternoon.

**The lob is a real weapon, not an admission of defeat.** Against a team that has taken the net properly, the lob over the net player's head is the correct answer, it forces them to turn, retreat, and hit an overhead on the move, and it lets *your* team come forward. Amateurs treat the lob as embarrassing. Good doubles teams treat it as a play.

**And a rule detail that decides real points:** the serve must land in the service box **diagonally opposite** (ITF, 2026, Rule 17). The doubles alleys are **not** part of the service box, so the service box in doubles is *exactly the same size as in singles*. The alleys only come into play once the point is live. Half the recreational players in the world do not know this.

:::reveal In doubles, what is the worst common formation, why is it bad, and what are the doubles court's actual dimensions vs. singles? ||| **One up and one back**, it leaves a **diagonal corridor of open court** that a competent team will hit through all day. Partners should move as a unit ("connected by an invisible rope"): **both up, or both back.** The doubles court is **36 ft (10.97 m)** wide vs. singles' **27 ft (8.23 m)**, the two alleys add **4.5 ft each**, with the **same length** (ITF, 2026, Rule 1). Two extra players, only nine extra feet: the court is *more crowded*, which is why **the team that takes the net wins**.

## Sources
- International Tennis Federation. (2026). *ITF rules of tennis 2026*. https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf
- USTA Player Development. (n.d.). *Technique: Stroke fundamentals*. https://www.playerdevelopment.usta.com/Improve-Your-Game/Sport-Science/114384_Technique_Stroke_Fundamentals/`,
      recallContent: [
        {
          prompt: "What are the two geometric reasons crosscourt is the percentage shot?",
          answer:
            "The net is lower in the middle (3 ft centre vs 3 ft 6 in at the posts, it sags six inches), and the court is longer on the diagonal. Lower net, more court.",
        },
        {
          prompt: "When should you change direction and hit down the line?",
          answer:
            "Off a ball you're AHEAD of, balanced, in your strike zone. Changing direction off a defensive ball on the run is the most reliably losing shot in amateur tennis.",
        },
      ],
    },
    {
      slug: "tennis-quiz-strategy",
      title: "17 · Quiz: how points are actually won",
      section: "Section 3 · Strategy: how points are actually won",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "In men's professional (ATP) match data, roughly what share of points end within 0-4 shots?",
            options: ["About 30%", "About 50%", "About 70%", "About 95%"],
            correctIndex: 2,
            explanation:
              "About 70%, with ~20% running 5-8 shots and only ~10% reaching 9+. Seven points in ten are over by the fourth shot, meaning each player has touched the ball at most twice.",
            sourceLessonSlug: "tennis-the-first-4-shots",
          },
          {
            prompt: "What are 'The First 4 Shots'?",
            options: [
              "The first four games of a set",
              "Serve, return, Serve +1, and Return +1",
              "Forehand, backhand, volley, and overhead",
              "The four shots allowed before a let is called",
            ],
            correctIndex: 1,
            explanation:
              "The serve, the return, the server's next ball (Serve +1), and the returner's next ball (Return +1). O'Shannessy's point: these are practised least and matter most.",
            sourceLessonSlug: "tennis-the-first-4-shots",
          },
          {
            prompt: "The course cites the 70/20/10 rally-length split. What important caveat does it attach?",
            options: [
              "The data is disputed and probably all wrong",
              "It is men's ATP data, not recreational",
              "It only applies on clay courts",
              "It was measured at high-school matches",
            ],
            correctIndex: 1,
            explanation:
              "The course refuses to pretend an ATP statistic is a measured fact about your match. It notes the structural point survives, and likely strengthens, at lower levels, since serves and returns produce even more errors there.",
            sourceLessonSlug: "tennis-the-first-4-shots",
          },
          {
            prompt: "Why is the standard club practice routine (long crosscourt baseline rallies) close to backwards?",
            options: [
              "Rallying is worthless and should never be practised",
              "It drills rare long rallies, not the first four",
              "Crosscourt is a bad shot",
              "Because fitness doesn't matter in tennis",
            ],
            correctIndex: 1,
            explanation:
              "It's a misallocation, not a worthless activity. The rational split gives most time to serving, returning, and the one ball after each.",
            sourceLessonSlug: "tennis-the-first-4-shots",
          },
          {
            prompt: "In the classic Serve +1 pattern from the deuce court (right-hander), what does the wide serve accomplish?",
            options: [
              "It guarantees an outright ace",
              "It pulls the returner off the court",
              "It forces the returner to lob it back",
              "It is illegal under the current ITF rules",
            ],
            correctIndex: 1,
            explanation:
              "The serve is a setup, not a weapon. It doesn't determine the return, it narrows the likely returns, so you're playing odds you created yourself.",
            sourceLessonSlug: "tennis-serve-plus-one",
          },
          {
            prompt: "The course says strategy in tennis is 'almost never certainty.' What is it instead?",
            options: [
              "Guessing, and hoping",
              "Narrowing the set of likely replies",
              "Hitting as hard as possible",
              "Copying whatever the top professionals do",
            ],
            correctIndex: 1,
            explanation:
              "You are not guessing; you are narrowing. A serve to a location shrinks the set of likely returns. That's the whole mechanism behind a 'constructed' point.",
            sourceLessonSlug: "tennis-serve-plus-one",
          },
          {
            prompt: "What is the returner's cardinal sin against a second serve?",
            options: [
              "Returning it safely crosscourt",
              "Returning it far too deep",
              "Overhitting it into an unforced error",
              "Split-stepping much too early on the return",
            ],
            correctIndex: 2,
            explanation:
              "Against a second serve the returner is statistically favoured. Hit a deep, aggressive but SAFE return that sets up the next ball, then attack with the +1.",
            sourceLessonSlug: "tennis-serve-plus-one",
          },
          {
            prompt: "Why is hitting deep genuinely strategic rather than merely cautious?",
            options: [
              "It looks impressive to spectators",
              "It pins them deep, cutting angles",
              "Deep balls always produce winners",
              "The rules award bonus points for depth",
            ],
            correctIndex: 1,
            explanation:
              "Depth is the mechanism by which you take away the opponent's options. It's defence and offence simultaneously.",
            sourceLessonSlug: "tennis-serve-plus-one",
          },
          {
            prompt: "How high is the net at the centre, and at the posts?",
            options: [
              "3 ft at the centre; 3 ft 6 in at the posts",
              "3 ft 6 in at the centre; 3 ft at the posts",
              "3 ft everywhere",
              "4 ft at the centre; 3 ft at the posts",
            ],
            correctIndex: 0,
            explanation:
              "3 ft (0.914 m) at the centre, 3 ft 6 in (1.07 m) at the posts, it sags six inches (ITF, 2026, Rule 1). That sag is half the reason crosscourt is the percentage shot.",
            sourceLessonSlug: "tennis-court-geometry",
          },
          {
            prompt: "Give BOTH geometric reasons that crosscourt is the percentage rally ball.",
            options: [
              "Lower net in the middle, longer diagonal",
              "Higher net and a shorter court",
              "It's easier to disguise, and the wind helps",
              "It's the only legal direction on a rally ball",
            ],
            correctIndex: 0,
            explanation:
              "Crosscourt = lower net + more court to land in. Down-the-line = higher net + shorter court. It's arithmetic, not style, which is why down-the-line is the higher-risk attacking shot.",
            sourceLessonSlug: "tennis-court-geometry",
          },
          {
            prompt: "When should you change direction and go down the line?",
            options: [
              "On any ball, whenever you feel like going",
              "Off a defensive ball while on the run",
              "Off a ball you're ahead of, balanced",
              "Only on second serves",
            ],
            correctIndex: 2,
            explanation:
              "Down the line is a decision you earn. Changing direction off a defensive ball, on the run, over the high part of the net into the short part of the court, is the most reliably losing shot in amateur tennis.",
            sourceLessonSlug: "tennis-court-geometry",
          },
          {
            prompt: "The course refuses to cite one commonly-repeated statistic. Which, and why?",
            options: [
              "The net height, because it varies by tournament",
              "An amateur unforced-error %, repeated with no source",
              "The 70/20/10 rally split, because O'Shannessy is unreliable",
              "The court dimensions, because the ITF hasn't published them",
            ],
            correctIndex: 1,
            explanation:
              "The course gives the exact, verifiable ITF court dimensions but declines to invent an amateur unforced-error percentage. The geometry argument stands without it.",
            sourceLessonSlug: "tennis-court-geometry",
          },
          {
            prompt: "How wide is the doubles court compared with the singles court?",
            options: [
              "36 ft vs 27 ft, alleys add 4.5 ft, same length",
              "40 ft vs 27 ft, each alley adds 6.5 ft",
              "36 ft vs 27 ft, and the court is also longer",
              "They are the same width; only the service boxes change",
            ],
            correctIndex: 0,
            explanation:
              "36 ft vs 27 ft, alleys of 4.5 ft each, same length (ITF, 2026, Rule 1). Two extra players but only nine extra feet, so the court is MORE crowded, which is why the net wins.",
            sourceLessonSlug: "tennis-doubles-strategy",
          },
          {
            prompt: "In doubles, is the service box bigger than in singles?",
            options: [
              "Yes, the doubles alleys count on the serve too",
              "No, the alleys are not part of the serve",
              "Yes, but only on the second serve",
              "Only at Grand Slam events",
            ],
            correctIndex: 1,
            explanation:
              "The service box is exactly the same size as in singles (ITF, 2026, Rule 17). The alleys are live only after the serve. Half the recreational players in the world don't know this.",
            sourceLessonSlug: "tennis-doubles-strategy",
          },
          {
            prompt: "What is the worst common formation in recreational doubles?",
            options: [
              "Both players at the net",
              "Both players at the baseline",
              "One up, one back, a diagonal gap",
              "Both players standing deep in the alleys",
            ],
            correctIndex: 2,
            explanation:
              "One up, one back is the most common recreational formation and the worst. Partners should move as a unit, both up or both back, as if joined by an invisible 8-10 ft rope.",
            sourceLessonSlug: "tennis-doubles-strategy",
          },
        ],
      },
    },

    // ─────────────────────── SECTION 4 · WHERE THE GAME CAME FROM ───────────────────────
    {
      slug: "tennis-origins",
      title: "18 · From a monastery courtyard to a lawn: where tennis came from",
      section: "Section 4 · Where the game came from",
      body: `Modern tennis is about 150 years old. The game *behind* it is far older.

**Real tennis (*jeu de paume*).** The ITF traces the game to **France in the 11th or 12th century, played by French monks**, *jeu de paume*, "the game of the palm," because they hit the ball with the **hand**, in enclosed courtyards, adding gloves and eventually rackets (International Tennis Federation [ITF], n.d.-a). That ancestor game is not extinct. It is still played, under four national names for one sport: ***jeu de paume*** in France, **real tennis** in Britain, **court tennis** in the U.S., and **royal tennis** in Australia (ITF, n.d.-a), on an asymmetrical walled court that looks nothing like yours.

The word **"tennis"** comes from the French **"tenez"**, "take this," or "be ready", what the server called out before serving. Both the ITF and Britain's Lawn Tennis Association state this plainly (ITF, n.d.-a; Lawn Tennis Association [LTA], n.d.).

**Now the part where confident nonsense circulates.** Someone will tell you that 15/30/40 comes from a **clock face** (15, 30, 45, shortened to 40), and that "love" comes from the French *l'œuf*, "the egg." Notice that the LTA, the national federation, introduces the clock story with the words **"one theory is…"** and then immediately offers a *competing* theory, that the numbers come from the 45-foot *jeu de paume* court, where the server advanced 15 feet, then 15 more, then 10 (LTA, n.d.).

And there's a problem with the clock: **tennis scoring shows up in the 15th century, but clocks of that era had no minute hand.** You cannot move a hand a quarter-turn at a time on a clock that only tells hours. The earliest attempts to *explain* "15" were published in the 1500s, meaning the convention was **already old and already unexplained** 450 years ago.

The honest answer is: **nobody knows.** A course that tells you it knows is selling you something.

**Lawn tennis, 1873-74.** The game you play was assembled in Victorian Britain. **Major Walter Clopton Wingfield** designed and introduced his outdoor game in **1873**, and on **23 February 1874** obtained a **provisional patent, for a portable court** (International Tennis Hall of Fame [ITHF], n.d.-c). Get the object right, because it is the whole story: what he sold was **a box**. Two poles, a net, a mallet, pegs, four rackets, rubber balls, and an instruction manual (ITHF, n.d.-c). He briefly marketed it under the Greek-flavored name *Sphairistike*, which was a bad pun and did not stick; "lawn tennis" did.

**He did not invent tennis. He packaged it**, and packaging is why a monastic handball game became a global sport in about fifteen years. Within two years the **MCC** (the *cricket* club) had rewritten his rules, and it is the MCC's 1876 version, not Wingfield's, that carried forward (ITF, n.d.).

**The tournaments came fast.** The **All England Croquet and Lawn Tennis Club**, a *croquet* club that had taken up lawn tennis to fill its lawns and its accounts, held the first **Wimbledon Championships in 1877**. Its organizers set the court at **78 by 27 feet**, adopted **15/30/40** scoring, and allowed the server one fault. **All three of those decisions are still the rules today** (Britannica, n.d.-b). The first **U.S. National Championships** followed in **1881**; women's singles was added in **1887**. The **French Championships** began in **1891** but were **closed to foreign players until 1925**, which is why, as a true international major, it is the youngest of the four. The **Australasian Championships**, later the Australian Open, began in **1905**.

**And "15/30/40" was borrowed, not invented.** Lawn tennis took it from real tennis, which had been using it since at least the 1400s. Why *real* tennis used those numbers, nobody actually knows.

**About that "Grand Slam."** Two claims usually get told together, and only one of them is solid.

- **Solid:** in **1938, Don Budge became the first player to win all four majors in one year** (ITHF, n.d.-d).
- **Not solid:** the popular story that the writer Allison Danzig **coined** "Grand Slam" for Budge that year. Newspapers were already using the phrase about tennis in **1933**, for **Jack Crawford**, who won three of the four and then lost the U.S. final (Quinion, n.d.). The term itself comes from **bridge**, the card game, and reached sport first through **golf**.

So: Budge did it first. He probably didn't name it. This course will keep doing this to you, separating *what happened* from *the tidy story about what happened*, because that distinction is most of what a citation is for.

**Governing body: 1913.** The **International Lawn Tennis Federation** was founded in **Paris in 1913**, with 15 member nations, to write one set of rules for a game being played on four continents with local variations; it formally became the governor of the Rules of Tennis with effect from **1 January 1924** (ITF, n.d.-b). It later dropped the "Lawn" to become the **ITF**, and it is renaming again: in October 2025 its member nations voted to rebrand it **"World Tennis,"** a trading name it adopted on **1 January 2026** (ITF, 2025). If you see "World Tennis" and "ITF" used interchangeably, that is why.

:::reveal Walter Clopton Wingfield is often called the inventor of tennis. What did he actually patent in February 1874, and why is "inventor" the wrong word? ||| A **portable court**, sold as a **box** containing poles, a net, a mallet, pegs, rackets, balls, and an instruction manual, that turned any flat lawn into a tennis court. Racket-and-ball games (*jeu de paume* / real tennis) were centuries old, and within two years the MCC had rewritten his rules anyway. He didn't invent the game; he **packaged and distributed** it, which is exactly why it spread so fast.

## Sources
- Encyclopaedia Britannica. (n.d.-a). *Tennis*. https://www.britannica.com/sports/tennis
- Encyclopaedia Britannica. (n.d.-b). *All-England Croquet and Lawn Tennis Club*. https://www.britannica.com/topic/All-England-Croquet-and-Lawn-Tennis-Club
- International Tennis Federation. (n.d.-a). *History of tennis*. https://www.itftennis.com/en/news-and-media/articles/history-of-tennis/
- International Tennis Federation. (n.d.-b). *History of World Tennis*. https://www.itftennis.com/en/about-us/organisation/history-of-world-tennis/
- International Tennis Federation. (2025, October 16). *International Tennis Federation to become World Tennis in 2026*. https://www.itftennis.com/en/news-and-media/articles/international-tennis-federation-to-become-world-tennis-in-2026/
- International Tennis Hall of Fame. (n.d.-c). *Celebrating the Wingfield patent*. https://www.tennisfame.com/celebrating-the-wingfield-patent
- International Tennis Hall of Fame. (n.d.-d). *Don Budge*. https://www.tennisfame.com/hall-of-famers/inductees/don-budge
- Lawn Tennis Association. (n.d.). *History of tennis*. https://www.lta.org.uk/about-us/history-of-tennis/
- Quinion, M. (n.d.). *Grand slam*. World Wide Words. https://www.worldwidewords.org/qa/qa-gra7.htm`,
    },
    {
      slug: "tennis-amateurism-and-shamateurism",
      title: "19 · \"Amateur\": the rule that decided who was allowed to get paid",
      section: "Section 4 · Where the game came from",
      body: `For the first ninety years of its life, tennis had a rule that shaped everything else about it, and it was not in the rulebook you read in Section 1.

**The rule: amateurs and professionals could not play each other.**

- **Amateurs** played the tournaments that mattered, Wimbledon, the U.S. Nationals, Davis Cup, and were officially **unpaid**. They were governed by national associations and the ILTF.
- **Professionals** got paid openly, on barnstorming exhibition tours, and were **banned from the majors**.

Read that again, because the consequence is bizarre: **the best players in the world were not allowed to play the biggest tournaments in the world.** Once an amateur champion turned pro to earn a living, he vanished from Wimbledon forever. Jack Kramer's summary, quoted by the International Tennis Hall of Fame: *"The most well-known events didn't have the best players"* (International Tennis Hall of Fame [ITHF], 2018).

**And the amateurs were being paid anyway.** The Hall of Fame does not dance around this. Amateurs received "discreet, under-the-table payments in all sorts of random and beguiling ways," and by 1967 leading amateurs were pulling in **$1,000 a week and more** in appearance money, Roy Emerson reportedly demanding $1,500 simply to enter one event (ITHF, 2018). The sport had a name for this: **"shamateurism."**

So be precise about what the amateur rule actually was. It was **not** a rule that money didn't exist in tennis. It was a rule that money existed **dishonestly**. And the point of the arrangement, the part worth understanding if you ever end up on the wrong side of an institution, was **control**. As long as players' income came as untraceable favors from the federations that ran the tournaments, the federations held all the leverage: over who played where, for how much, under what conditions, and over who was allowed to complain.

**This is the thread that connects the whole course.** The Open era (next lesson) ends the amateur rule. The Original 9 (Section 5) walk out because the federations still set the purses. The ATP and WTA get founded because players finally organize. And "opportunities for amateurs", Section 7, is a phrase that only makes sense *because* of this history: for ninety years, "amateur" wasn't a stage of your development, it was a **legal category** that determined whether you were allowed to be paid.

:::reveal What was "shamateurism," and what was the real purpose of the amateur rule? ||| "Shamateurism" was the open secret that officially unpaid amateur players were in fact taking **under-the-table appearance money**, $1,000 a week and up by 1967. The amateur rule's real function wasn't to keep money out of tennis; it was to keep money **untraceable and discretionary**, which kept **control** in the hands of the national federations that ran the tournaments and quietly paid the players.

## Sources
- International Tennis Hall of Fame. (2018). *5 things to know: The dawn of the Open era*. https://www.tennisfame.com/blog/2018/4/5-things-to-know-the-dawn-of-the-open-era
- Encyclopaedia Britannica. (n.d.). *Tennis: Professional and open tennis*. https://www.britannica.com/sports/tennis/Professional-and-open-tennis`,
      recallContent: [
        {
          prompt: "What did Walter Clopton Wingfield actually do in 1874?",
          answer:
            "He patented and sold a portable lawn-tennis set, net, poles, rackets, balls, rules in a box, that turned any flat lawn into a court. He packaged the game; he didn't invent racket-and-ball sport.",
        },
        {
          prompt: "When was the first Wimbledon, and who ran it?",
          answer: "1877, by the All England Croquet and Lawn Tennis Club, a croquet club that had taken up lawn tennis.",
        },
      ],
    },
    {
      slug: "tennis-the-open-era",
      title: "20 · 1968: the Open era",
      section: "Section 4 · Where the game came from",
      body: `The amateur rule broke in one year.

**The vote.** On **30 March 1968**, at a Special General Meeting in Paris, the **International Lawn Tennis Federation approved open tennis**, tournaments in which amateurs and professionals could compete against each other, for money (International Tennis Hall of Fame [ITHF], 2018). Twelve "open" tournaments across eight countries were approved for that year.

**The first one.** The **British Hard Court Championships** at the West Hants Club in **Bournemouth, England**, began on **22 April 1968**, the first open tournament ever played (ITHF, 2018). **Ken Rosewall** beat **Rod Laver** in the men's final; **Virginia Wade** won the women's title.

And in the second round, something happened that ended the argument on the spot. **Mark Cox, an amateur, beat Pancho Gonzales, a professional, in five sets**, the first time an amateur had beaten a pro in an open event (ITHF, 2018). Ninety years of the sport had been organized around the premise that these were two different classes of human being. It took about four days to disprove.

The first **Grand Slam** of the Open era was the **1968 French Championships** in May-June. Bournemouth was first; it just wasn't a major.

**What actually changed.** Everything downstream:

- **Prize money became legal and public.** You could now know what a player earned, which meant you could now **compare** what two players earned, and Section 5 is what happened when women did that arithmetic.
- **Players could organize.** The **ATP** was formed in **September 1972**; the **WTA** in **June 1973**. Neither is imaginable under the amateur rule, because under the amateur rule the players were not employees, contractors, or professionals, they were *guests*.
- **"Amateur" stopped being a legal cage** and became what it means to you today: someone who plays for reasons other than money. That is a much better word, and you get to use it because a room full of people in Paris voted in 1968.

**One person did not get the memo, and it's the best story in the sport.** Keep that in mind, the next section opens with the 1968 US Open.

:::reveal What did the ILTF vote to do on 30 March 1968, where was the first open tournament, and what happened in its second round that undercut ninety years of policy? ||| The ILTF, meeting in Paris, **approved open tennis**, amateurs and professionals competing together for prize money. The first open tournament was the **British Hard Court Championships at Bournemouth**, starting **22 April 1968**. In the second round, the **amateur Mark Cox beat the professional Pancho Gonzales in five sets**, the first amateur ever to beat a pro in an open event, which demolished the idea that the two were different classes of player.

## Sources
- International Tennis Hall of Fame. (2018). *5 things to know: The dawn of the Open era*. https://www.tennisfame.com/blog/2018/4/5-things-to-know-the-dawn-of-the-open-era
- ATP Tour. (n.d.). *ATP heritage: Open tennis*. https://www.atptour.com/en/news/atp-heritage-open-tennis-laver-rosewall-cox-1968-bournemouth`,
      recallContent: [
        {
          prompt: "Under the amateur rule, why weren't the best players at the biggest tournaments?",
          answer:
            "Professionals were paid openly but were banned from the majors; amateurs played the majors but were officially unpaid. Once a champion turned pro to make a living, he could never play Wimbledon again.",
        },
        {
          prompt: "What did 'shamateurism' describe?",
          answer:
            "Officially unpaid amateurs taking substantial under-the-table appearance money, which kept the money untraceable and the power with the federations.",
        },
      ],
    },
    {
      slug: "tennis-quiz-history-origins",
      title: "21 · Quiz: origins, amateurism, and 1968",
      section: "Section 4 · Where the game came from",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is *jeu de paume*?",
            options: [
              "The French name for the Roland-Garros tournament",
              "A medieval French game, tennis's ancestor",
              "The original name for a tie-break",
              "The French tennis federation",
            ],
            correctIndex: 1,
            explanation: "Played in enclosed courtyards, later with gloves and rackets; it survives today as 'real tennis.'",
            sourceLessonSlug: "tennis-origins",
          },
          {
            prompt: "The clock-face explanation of 15/30/40 scoring is best described as:",
            options: [
              "A documented fact stated in the ITF rulebook",
              "A theory, widely repeated, but not established",
              "A rule invented by the USTA",
              "A myth that historians have definitively disproved",
            ],
            correctIndex: 1,
            explanation:
              "It may be true; nobody has established it. The same goes for l'œuf ('the egg') as the origin of 'love.' What is documented is the modern rule (ITF Rule 5).",
            sourceLessonSlug: "tennis-origins",
          },
          {
            prompt: "What did Walter Clopton Wingfield's February 1874 provisional patent actually cover?",
            options: [
              "The tie-break scoring rule",
              "The modern wooden tennis racket",
              "A portable court in a boxed kit",
              "The 15/30/40 point scoring system",
            ],
            correctIndex: 2,
            explanation:
              "He packaged and distributed the game, which is why it spread so fast. He did not invent racket-and-ball sport, and within two years the MCC had rewritten his rules anyway.",
            sourceLessonSlug: "tennis-origins",
          },
          {
            prompt: "Which statement about the phrase 'Grand Slam' is accurate?",
            options: [
              "Budge won all four in 1938, but the coinage is contested",
              "The writer Allison Danzig definitively coined it for Don Budge in 1938",
              "It is the official ITF term, defined in the rulebook",
              "It originated in baseball",
            ],
            correctIndex: 0,
            explanation:
              "The 1933 usages (about Jack Crawford) predate Budge. The term comes from bridge, the card game, and reached sport first through golf. Budge's feat is solid; the coinage story isn't.",
            sourceLessonSlug: "tennis-origins",
          },
          {
            prompt: "In what year was the first Wimbledon Championships held?",
            options: ["1868", "1877", "1891", "1905"],
            correctIndex: 1,
            explanation: "1877, by the All England Croquet and Lawn Tennis Club.",
            sourceLessonSlug: "tennis-origins",
          },
          {
            prompt: "Put these in order of first staging: US National Championships, Wimbledon, Australasian Championships, French Championships.",
            options: [
              "Wimbledon (1877), US (1881), French (1891), Australasian (1905)",
              "US (1877), Wimbledon (1881), Australasian (1891), French (1905)",
              "Wimbledon (1877), French (1881), US (1891), Australasian (1905)",
              "French (1877), Wimbledon (1881), US (1891), Australasian (1905)",
            ],
            correctIndex: 0,
            explanation: "Wimbledon 1877, US Nationals 1881, French 1891, Australasian 1905.",
            sourceLessonSlug: "tennis-origins",
          },
          {
            prompt: "Why was the French Championships, though founded in 1891, the last of the four to become a true international major?",
            options: [
              "It was cancelled for its first thirty years",
              "It was closed to foreign players until 1925",
              "It didn't allow women until 1968",
              "It wasn't played on clay until 1925",
            ],
            correctIndex: 1,
            explanation: "Before 1925 it was an interclub competition for French players.",
            sourceLessonSlug: "tennis-origins",
          },
          {
            prompt: "Under the pre-1968 amateur rule, what happened when an amateur champion turned professional?",
            options: [
              "Nothing, he kept playing the majors and now got paid",
              "Banned from the majors, only paid pro tours",
              "He had to give back his trophies",
              "He was required to join the ILTF board",
            ],
            correctIndex: 1,
            explanation:
              "Pros were barred from the majors. This is why, as Jack Kramer put it, 'the most well-known events didn't have the best players.'",
            sourceLessonSlug: "tennis-amateurism-and-shamateurism",
          },
          {
            prompt: "What was 'shamateurism'?",
            options: [
              "A style of play popular in the 1950s",
              "Amateurs taking under-the-table pay",
              "An early name for the ATP",
              "A rule allowing amateurs to accept prize money",
            ],
            correctIndex: 1,
            explanation: "By 1967, top amateurs were reportedly taking $1,000 a week and more in appearance money.",
            sourceLessonSlug: "tennis-amateurism-and-shamateurism",
          },
          {
            prompt: "What was the real function of the amateur rule?",
            options: [
              "To keep money out of tennis entirely",
              "To keep control with the federations",
              "To protect players from taxes",
              "To make matches shorter",
            ],
            correctIndex: 1,
            explanation:
              "Money was already in tennis. The rule made it a favor rather than a wage, and a favor can be withdrawn, which is leverage.",
            sourceLessonSlug: "tennis-amateurism-and-shamateurism",
          },
          {
            prompt: "On 30 March 1968, meeting in Paris, what did the ILTF vote to do?",
            options: [
              "Create the ATP",
              "Approve open tennis for all",
              "Standardize the tie-break",
              "Ban South Africa from Davis Cup",
            ],
            correctIndex: 1,
            explanation: "Twelve open tournaments across eight countries were approved for 1968.",
            sourceLessonSlug: "tennis-the-open-era",
          },
          {
            prompt: "What was the first open tournament ever played?",
            options: [
              "The 1968 Wimbledon Championships",
              "The 1968 US Open",
              "Bournemouth, 22 April 1968",
              "The 1968 French Championships",
            ],
            correctIndex: 2,
            explanation:
              "Bournemouth was first overall. The 1968 French Championships was the first open *Grand Slam*, weeks later.",
            sourceLessonSlug: "tennis-the-open-era",
          },
          {
            prompt: "In the second round at Bournemouth, amateur Mark Cox beat professional Pancho Gonzales. Why did that matter?",
            options: [
              "It was the first five-set match in history",
              "It won Cox the tournament",
              "First amateur to beat a pro in an open event",
              "It caused the ILTF to reverse the open-tennis vote",
            ],
            correctIndex: 2,
            explanation: "Ninety years of policy rested on that premise. It took about four days of open tennis to disprove.",
            sourceLessonSlug: "tennis-the-open-era",
          },
          {
            prompt: "Which of these became possible only *after* the Open era began?",
            options: [
              "Players forming their own associations",
              "The tie-break, introduced around 1970",
              "Mixed doubles played at the majors",
              "The Davis Cup, first contested in 1900",
            ],
            correctIndex: 0,
            explanation:
              "Under the amateur rule players weren't professionals at all, they were guests of the federations. Public prize money made both organizing and comparing pay possible.",
            sourceLessonSlug: "tennis-the-open-era",
          },
          {
            prompt: "Which tournament was the first open *Grand Slam*?",
            options: [
              "Wimbledon 1968",
              "The French Championships, May-June 1968",
              "The US Open 1968",
              "The Australian Championships 1968",
            ],
            correctIndex: 1,
            explanation: "Bournemouth (April 1968) was the first open tournament, but it was not a major.",
            sourceLessonSlug: "tennis-the-open-era",
          },
          {
            prompt: "How did the Open era change the meaning of the word 'amateur'?",
            options: [
              "It didn't, the word means the same thing it always did",
              "From a legal pay category to playing for love",
              "It made 'amateur' a professional ranking level",
              "It abolished amateur tennis entirely",
            ],
            correctIndex: 1,
            explanation:
              "Before 1968, 'amateur' was a cage. Afterward, it became a description of why you play, which is the sense used in Section 7 of this course.",
            sourceLessonSlug: "tennis-the-open-era",
          },
        ],
      },
    },

    // ─────────────────── SECTION 5 · THE PEOPLE WHO CHANGED THE GAME ───────────────────
    {
      slug: "tennis-ata-and-althea-gibson",
      title: "22 · The American Tennis Association and Althea Gibson",
      section: "Section 5 · The people who changed the game",
      body: `Before you can understand Althea Gibson, you have to understand the organization that made her possible, and *why it had to exist*.

**The American Tennis Association, 1916.** The U.S. Lawn Tennis Association (USLTA), which ran American tennis, had issued a policy statement **formally barring African American players from its competitions**. So on **Thanksgiving Day, 30 November 1916**, in **Washington, D.C.**, representatives of more than a dozen Black tennis clubs met and founded the **American Tennis Association** (American Tennis Association [ATA], n.d.). Its first national championships were held in **August 1917** at **Druid Hill Park in Baltimore**.

The ATA is **the oldest African American sports organization in the United States** (ATA, n.d.). It did not exist to be a protest. It existed because Black players wanted to *play tournaments*, and the tournaments were closed. So they built their own, and then that circuit produced two of the most consequential players in the history of the sport. Both **Althea Gibson** and **Arthur Ashe** were "sponsored and groomed by ATA officials and coaches" (ATA, n.d.), most famously through the junior development program run by **Dr. Walter Johnson**.

**Althea Gibson.** She won **ten consecutive ATA national women's singles titles beginning in 1947** (International Tennis Hall of Fame [ITHF], n.d.-a), dominating a circuit that the sport's official body pretended was not there.

Getting her out of it took a coalition. ATA officials lobbied the USLTA hard and continuously. And on **1 July 1950**, the former champion **Alice Marble** published an editorial in *American Lawn Tennis* magazine that made the exclusion impossible to ignore in polite company:

> "If tennis is a game for ladies and gentlemen, it's also time we acted a little more like gentle people and less like sanctimonious hypocrites.... If Althea Gibson represents a challenge to the present crop of women players, it's only fair that they should meet that challenge on the courts." (Marble, 1950, as published by ATA, n.d.-b)

**In August 1950, Gibson became the first Black player to compete at the U.S. National Championships** at Forest Hills (United States Tennis Association [USTA], 2020). She won her first-round match, and lost a rain-delayed three-setter in the second round to the reigning Wimbledon champion, Louise Brough. In **July 1951** she became the first Black player to compete at **Wimbledon** (ITHF, n.d.-a).

Then she won. In **1956 she won the French Championships, the first Black player, of any gender, to win a Grand Slam title.** She won **Wimbledon and the U.S. Nationals in both 1957 and 1958**. Five Grand Slam singles titles, eleven major titles overall, and she was named **Associated Press Female Athlete of the Year in 1957 *and* 1958** (ITHF, n.d.-a).

**And there was no money in it.** This is 1957, eleven years before the Open era. She was an amateur, because the tournaments she'd broken into only admitted amateurs. In **1964, aged 37, she became the first African American woman to join the LPGA golf tour** (ITHF, n.d.-a), a career change that tells you plenty about what a Black woman's tennis résumé was worth in the amateur era.

Hold that thought. It is exactly what the next three lessons are about.

:::reveal Why did the American Tennis Association have to be founded in 1916, and which two Hall of Fame players did it produce? ||| Because the USLTA, the body running American tennis, had formally barred African American players from its competitions. Black tennis clubs founded the ATA in Washington, D.C., on Thanksgiving Day 1916 so their players would have tournaments to enter. It is the oldest African American sports organization in the U.S., and it sponsored and developed both **Althea Gibson** and **Arthur Ashe**.

## Sources
- American Tennis Association. (n.d.-a). *History*. https://www.yourata.org/history
- American Tennis Association. (n.d.-b). *Historic pioneers: Alice Marble*. https://www.yourata.org/historic-pioneers/alice-marble
- International Tennis Hall of Fame. (n.d.-a). *Althea Gibson*. https://www.tennisfame.com/hall-of-famers/inductees/althea-gibson
- National Museum of African American History and Culture. (n.d.). *Althea Gibson, Hall of Famer*. https://nmaahc.si.edu/althea-gibson
- United States Tennis Association. (2020). *Black History Month: Althea Gibson's Forest Hills debut, 1950*. https://www.usta.com/en/home/stay-current/national/2020-black-history-month--althea-gibson-s-forest-hills-debut--19.html`,
    },
    {
      slug: "tennis-arthur-ashe",
      title: "23 · Arthur Ashe: the champion who wasn't allowed to be paid",
      section: "Section 5 · The people who changed the game",
      body: `**1968. The first US Open of the Open era.** After ninety years, prize money was finally legal, public, and on the line: a **$100,000** purse, **$14,000** to the champion.

**Arthur Ashe won it**, the first Black man ever to win the US Open, beating Tom Okker 14-12, 5-7, 6-3, 3-6, 6-3 (International Tennis Hall of Fame [ITHF], n.d.-b).

**He did not get the $14,000.** Ashe was a **U.S. Army lieutenant** and had kept his **amateur** status, which he needed for Davis Cup eligibility. So the winner's cheque went instead to **Tom Okker, the man he had just beaten**, who held "registered player" status and *was* allowed to take it (World Tennis Magazine, n.d.). What Ashe received was a **per diem of $20 a day** for the fortnight: **roughly $280** (CNBC, 2019).

You will sometimes see this told as "Arthur Ashe earned $20 for winning the US Open." That's a compression, and the true version is better: he earned **about $280 in expenses, while the $14,000 went to the runner-up**, in the very tournament that was supposed to have ended the amateur farce. The Open era did not arrive all at once. It arrived in pieces, and Ashe got caught in the seam.

**The rest of the résumé.** He won the **1970 Australian Open**, and in **1975** he beat the top-seeded, heavily favored Jimmy Connors in the **Wimbledon final**, 6-1, 6-1, 5-7, 6-4, one of the great upsets in the tournament's history (ITHF, n.d.-b). He was a **founding member of the ATP in 1972**, its **first vice-president**, and its **president from 1974** (ITHF, n.d.-b; ATP Tour, n.d.).

**South Africa.** Ashe spoke publicly against **apartheid**, and campaigned to have South Africa expelled from international tennis. South Africa **denied him a visa in 1969**, and again in following years, explicitly because of what he'd said (South African History Online, n.d.). In **November 1973** he was finally admitted, and played the **South African Open**, insisting on entering **as a Black man**, refusing the "honorary white" designation the apartheid government used to let foreign sports stars in. He lost the singles final to Connors and won the doubles title with Okker.

**And he was criticized for going.** Some anti-apartheid activists argued that playing there at all lent the regime legitimacy, no matter what he called himself. That criticism was serious, and Ashe took it seriously. **Do not smooth this over.** The interesting question, the one worth arguing about in class, is not "was Ashe a hero?" It is: **when a system is unjust, is it better to refuse to enter it, or to enter it on your own terms and be seen?** Reasonable people disagreed then. They still do.

**The end, and how it was taken from him.** Ashe had a heart attack and bypass surgery in 1979, and a **second bypass operation in 1983**, during which he received a **blood transfusion**, before any screening of the blood supply for HIV existed (*The Washington Post*, 1992). He was **diagnosed with HIV in September 1988**, after an infection cost him the use of his right hand.

He kept it private. Then, on **7 April 1992**, a *USA Today* reporter told him the paper had a tip. Ashe held a press conference the **next day** and announced his diagnosis, and the Hall of Fame states it plainly: **"news leaks forced his announcement"** (ITHF, n.d.-b). This is not the story of a man choosing to go public. It is the story of a man's medical privacy being taken from him, and it set off a national argument about journalism ethics that has not really ended.

He spent his last months campaigning on AIDS, founding an institute for urban health, and finishing *A Hard Road to Glory*, his history of the Black American athlete. He **died on 6 February 1993**, of AIDS-related pneumonia, aged 49.

:::reveal Arthur Ashe won the 1968 US Open, the first prize-money US Open. How much of the $14,000 winner's cheque did he receive, and why? ||| **None of it.** He was a U.S. Army lieutenant who had kept **amateur** status for Davis Cup eligibility, so under the rules the winner's cheque went to the **runner-up, Tom Okker**, who was a "registered player" and could accept it. Ashe got a **$20-a-day per diem, about $280 for the fortnight.**

## Sources
- ATP Tour. (n.d.). *ATP 50: Pioneers*. https://www.atptour.com/en/news/atp-50-pioneers-longform
- CNBC. (2019, September 9). *The first men's US Open champion earned $20 in 1968*. https://www.cnbc.com/2019/09/09/the-first-mens-us-open-champion-earned-20-in-1968.html
- International Tennis Hall of Fame. (n.d.-b). *Arthur Ashe*. https://www.tennisfame.com/hall-of-famers/inductees/arthur-ashe
- South African History Online. (n.d.). *African American tennis player Arthur Ashe denied visa by South African government*. https://sahistory.org.za/dated-event/african-american-tennis-player-arthur-ashe-denied-visa-south-african-government
- *The Washington Post*. (1992, April 9). *In 1983, HIV blood screening was nonexistent*. https://www.washingtonpost.com/archive/politics/1992/04/09/in-1983-hiv-blood-screening-was-nonexistent/02f1b98e-710d-4c94-8e2d-9ce5094d2f2e/
- World Tennis Magazine. (n.d.). *Tom Okker: The 1968 U.S. Open runner-up who got the first-prize paycheck*. https://worldtennismagazine.com/tom-okker-the-1968-u-s-open-runner-up-who-got-the-first-prize-paycheck/25573`,
      recallContent: [
        {
          prompt: "What did Althea Gibson win in 1956, and why was it historic?",
          answer:
            "The French Championships, making her the first Black player, of any gender, to win a Grand Slam title. She then won Wimbledon and the U.S. Nationals in both 1957 and 1958.",
        },
        {
          prompt: "Who published the July 1950 editorial that helped force the USLTA to admit Althea Gibson, and where?",
          answer:
            "Former champion Alice Marble, in *American Lawn Tennis* magazine. It worked alongside sustained lobbying by ATA officials, it was a coalition, not a lone rescuer.",
        },
      ],
    },
    {
      slug: "tennis-original-9-and-the-wta",
      title: "24 · The Original 9: nine players, nine one-dollar contracts",
      section: "Section 5 · The people who changed the game",
      body: `The Open era made prize money **public**. That turned out to be dangerous for the people setting it, because now anyone could do the subtraction.

**The arithmetic.** At the 1970 **Pacific Southwest Championships**, run by Jack Kramer, the **men's field played for a total purse of $12,500 and the women's field for $1,500**, an **8-to-1 gap**, at the same tournament, in the same week. Bud Collins called it a "feudalistic ratio."

*(A note on how this course handles that number: you will often see it written as "$12,500 to the men's champion, $1,500 to the women's champion." Sources contradict each other on whether these were champions' cheques or total purses. The **8-to-1 ratio** is consistent across every account, so that is what this lesson teaches, the ratio, which is the number that matters, rather than a figure we cannot pin down. This is what citation discipline looks like in practice: when the sources disagree, you say so.)*

Gladys Heldman, publisher of *World Tennis* magazine, asked Kramer to narrow the gap. **He refused.**

**23 September 1970.** Nine players signed **$1 contracts** with Heldman to play a tournament she had organized in Houston instead: the **Houston Women's Invitation**, a rival event, in defiance of the USLTA (Women's Tennis Association [WTA], n.d.-a).

The nine, **the Original 9**, were:

> **Jane "Peaches" Bartkowicz · Rosie Casals · Judy Dalton · Julie Heldman · Billie Jean King · Kerry Melville · Kristy Pigeon · Nancy Richey · Valerie Ziegenfuss**

**Why one dollar?** It was a **legal device**. By signing them as contract players for one week, Heldman made them professionals under contract rather than freelancing amateurs, which shielded the **Houston Racquet Club** from USLTA sanctions. They signed roughly an hour before play started, then held the dollar bills up for a photograph. That photo is the founding image of women's professional tennis (WTA, n.d.-a).

They were risking their careers. The USLTA could have, and threatened to, suspend them, which in 1970 meant losing their eligibility for the tournaments that defined the sport.

**June 1973: the WTA.** Three years later, in a room at the **Gloucester Hotel** in London, **a week before Wimbledon**, more than sixty players met and founded the **Women's Tennis Association**. **Billie Jean King** became its first president; she famously posted Betty Stöve at the door to keep the players in and the press out until they had agreed (Billie Jean King, n.d.; WTA, n.d.-b).

Note the timing. The men had formed the **ATP in September 1972**. The women formed the WTA in **June 1973**. The structural lesson is not subtle: **once one group of workers in an industry organizes, the other group's choice is to organize or to be left behind.**

**And in September 1973, King beat Bobby Riggs.** The "Battle of the Sexes," **20 September 1973**, Houston Astrodome, winner-take-all $100,000: **King (29) beat Riggs (55) in straight sets, 6-4, 6-3, 6-3**, in front of roughly **50 million** U.S. television viewers (Billie Jean King, n.d.). It was a spectacle, and it was also a stress test, she has said, repeatedly, that a loss would have set women's tennis back years. She did not lose.

:::reveal Why did the Original 9 sign contracts for exactly one dollar? ||| It was a **legal device**, not a symbolic one. Signing them as contract professionals for the week made the Houston tournament a contracted professional event, which **shielded the Houston Racquet Club from USLTA sanctions**. The players signed about an hour before play began and held the dollar bills up for the photograph that became the founding image of women's pro tennis.

## Sources
- Billie Jean King. (n.d.). *Battle of the Sexes* and *Women's Tennis Association*. https://www.billiejeanking.com/battle-of-the-sexes/
- Women's Tennis Association. (n.d.-a). *WTA honors Original 9 and Gladys Heldman on 55th anniversary of $1 contracts*. https://www.wtatennis.com/news/4367345/wta-honors-original-9-and-gladys-heldman-on-55th-anniversary-of-1-contracts
- Women's Tennis Association. (n.d.-b). *Serving up a revolution: Billie Jean King and the dawn of the WTA*. https://www.wtatennis.com/news/3545936/serving-up-a-revolution-billie-jean-king-and-the-dawn-of-the-wta
- Smithsonian American Women's History Museum. (n.d.). *Beyond the court: Billie Jean King's triumph in the Battle of the Sexes*. https://womenshistory.si.edu/blog/beyond-court-billie-jean-kings-triumph-battle-sexes`,
      recallContent: [
        {
          prompt: "Arthur Ashe was forced to announce his HIV diagnosis in April 1992. Why 'forced'?",
          answer:
            "A *USA Today* reporter told him on 7 April 1992 that the paper had a tip. He held a press conference the next day. The Hall of Fame states that 'news leaks forced his announcement', his medical privacy was taken from him, not surrendered.",
        },
        {
          prompt: "Why is Arthur Ashe's 1973 South African Open appearance a genuinely contested story?",
          answer:
            "He entered as a Black man, refusing the apartheid regime's 'honorary white' designation, but some anti-apartheid activists argued that playing there at all legitimized the regime. Reasonable people disagreed then and still do.",
        },
      ],
    },
    {
      slug: "tennis-equal-prize-money",
      title: "25 · Equal prize money: a 34-year climb, and the part that isn't finished",
      section: "Section 5 · The people who changed the game",
      body: `Here is the sentence you have probably heard: *"Tennis was the first sport to pay women equally, the US Open did it in 1973."*

The first half is true. The second half is where most people stop, and stopping there turns a 34-year fight into a feel-good anecdote. So let's do the whole thing.

**1973, the US Open, first of the four.** In 1972, **Billie Jean King** won the US Open and was paid **$10,000**; men's champion **Ilie Năstase** got **$25,000**. King said she would not play in 1973, and that no other woman would either. **Bristol-Myers** stepped in and offered to fund the entire difference, and that summer the US Open announced that **both singles champions would receive $25,000**, the **first Grand Slam, and by the USTA's account the first major sporting event in the world, to pay men and women equally** (US Open, 2023; ESPN, 2023).

**Notice how it was won.** Not by a federation deciding to reallocate its own money. By **a boycott threat plus a sponsor writing a cheque.** That is the honest version, and it is far more useful to you than the greeting-card version, because it tells you what actually moves an institution.

**Then, for a long time, nothing.**

| Year | What happened |
| --- | --- |
| **1973** | **US Open** pays equal prize money, the first Slam. |
| **1984** | **Australian Open** pays equal prize money, 11 years later. |
| **by 1996** | The **Australian Open is paying men more again**, citing **higher TV ratings for men's matches**. |
| **2001** | The **Australian Open restores** equal prize money, this time permanently. |
| **2006** | **Roland-Garros** pays its two **singles champions** equally, **but only the champions**. A woman losing in the third round is still paid less than a man losing in the third round. |
| **2007** | **Wimbledon** announces equal prize money at all stages (**22 February 2007**), the last Slam to offer *any* equal prize money. |
| **2007** | **Roland-Garros** extends equal prize money **through the entire draw** (announced **16 March 2007**), the last Slam to reach *full-draw* equality. |

*(Sources: US Open, 2023; ESPN, 2023; Tennis Majors, 2022, 2023; The Washington Post, 2007.)*

**"Which Slam was last?" is a trick question, and the dates are why.** **Wimbledon** was the last to offer equal prize money *at all*, it had none until **22 February 2007**. But **Roland-Garros** was the last to pay the *whole draw* equally, announcing that on **16 March 2007**, three weeks *after* Wimbledon. So the sport's tidiest sentence, "Wimbledon was the last", is only true under one definition of "last." Both crossed the line in **2007**; that is the number that matters, and it is **34 years** after the US Open.

**Three things in that table are routinely left out of the story, and each one is the interesting part.**

1. **The Australian Open went equal in 1984 and then went backwards.** By 1996 it was paying men more again, and its stated reason was **TV ratings** (US Open, 2023). Most timelines just say "Australian Open: 2001" and skip a decade. Don't. **This is the single most important fact in the lesson**, because it proves something students are rarely told: **equality is reversible.** A win is not a ratchet. It can be taken back, with a business rationale, by people who are not cartoon villains.
2. **"The French Open went equal in 2006" is not quite true.** In 2006 only the **champions** were paid equally. Full-draw equality came in **2007**. The gap between those two years is exactly the difference between a *trophy photo* and a *payroll*.
3. **It took 34 years.** 1973 to 2007. A student starting kindergarten the year Billie Jean King forced the US Open's hand would have been **36 years old** before all four majors paid equally.

**Venus Williams finished it.** In **2005**, ahead of the Wimbledon final, she addressed the Grand Slam committee in person on equal pay. Nothing changed. In 2006 Wimbledon declined again, arguing that men drew more spectators and played best-of-five sets. So on **26 June 2006**, Venus published an op-ed in *The Times* of London under the headline **"Wimbledon has sent me a message: I'm only a second-class champion."** She asked why Wimbledon placed a lesser value on her trophy than on Roger Federer's, and answered the best-of-five argument by pointing out that women would happily play five sets (*The Washington Post*, 2013).

**Wimbledon reversed in February 2007.** Venus won the title that year and became the first woman to collect an equal champion's cheque at Wimbledon, **£700,000**, the same as Federer.

Look at the shape of that: **a champion uses the press to shame the sport's gatekeepers into doing the right thing.** It is *precisely* what Alice Marble did for Althea Gibson in 1950 (Lesson 22). Same weapon, 56 years apart.

**And it is not finished.** Equal prize money at the four Slams is **not** equal pay in tennis. The Slams are four events in a season of dozens. Outside them the gap is large and current: in **2023**, Novak Djokovic won the Cincinnati title and received **$1.02 million**; Coco Gauff won the women's title **at the same combined event, the same week**, and received **$454,500**, less than half (ESPN, 2023).

**And that gap is not just at the top of the draw, it is the whole payroll.** At that same 2023 Cincinnati event, the tournament paid out roughly **$6.6 million to the men's field and about $2.8 million to the women's** (Sportico, 2023). That is the number to reach for when someone points at the Slams and says the problem is solved: the champions' cheques are the *most* equal part of tennis, not the least. Gauff's own response was to reject the usual explanation, "*My matches were more crowded or the same as some of the top seeds on the men's side, so I don't think it's an attraction issue*" (Sportico, 2023).

**One honest caveat about the numbers in this lesson.** Tournament-by-tournament *distribution* tables, how a purse is split across every round, at every event, for both tours, are **not published in one place**, and this course will not invent them. The figures above are the ones the tournaments and reporters actually published. Where you see a confident chart claiming to break down the full distribution of tennis prize money by gender across the whole calendar, ask where the underlying data came from; often the honest answer is that nobody has assembled it.

The WTA knows. On **27 June 2023** it announced a **pathway** to equal prize money: equal pay at **combined WTA 1000 and 500 events by 2027**, and at **non-combined ones by 2033** (WTA, 2023).

**2033 is sixty years after 1973.** And a pathway is a **promise**, not an achievement. When you hear "tennis solved equal pay," the accurate reply is: *tennis solved equal prize money at four tournaments, over 34 years, and has publicly given itself until 2033 to solve the rest.*

:::reveal The US Open paid equal prize money in 1973. Name the year each of the other three Slams did, and name the one that went equal and then went BACKWARDS. ||| **Australian Open: 1984**, then it **reverted to paying men more by 1996**, citing higher TV ratings for men's matches, and only restored equality permanently in **2001**. **Wimbledon: 2007** (announced 22 February), the last Slam to offer any equal prize money. **Roland-Garros: 2006 for the champions only, 2007 for the full draw** (announced 16 March), the last Slam to reach full-draw equality. From the US Open in 1973 to the last Slam in 2007 is **34 years**, and equal prize money across the rest of the tour still hasn't happened; the WTA has pledged 2027/2033.

## Sources
- ESPN. (2023). *Fifty years after the Battle of the Sexes and equal pay at the US Open, gender equity remains elusive in tennis*. https://www.espn.com/tennis/story/_/id/38441339/fifty-years-battle-sexes-equal-pay-us-open-gender-equity-remains-elusive-tennis
- Tennis Majors. (2022). *February 22, 2007: The day Wimbledon finally announced it would award equal pay*. https://www.tennismajors.com/wimbledon-news/february-22-2007-the-day-wimbledon-finally-announced-it-would-award-equal-pay-323512.html
- Tennis Majors. (2023). *The day Roland-Garros finally offered equal prize money*. https://www.tennismajors.com/atp/atp-wta-roland-garros-finally-offered-equal-prize-money-592633.html
- US Open. (2023, March 30). *Milestones in equality: A long climb to equal prize money at the four Grand Slams*. https://www.usopen.org/en_US/news/articles/2023-03-30/milestones_in_equality_a_long_climb_to_equal_prize_money_at_the_four_grand_slams.html
- Sportico. (2023, August 29). *US Open prize money equality still isn't the standard in tennis*. https://www.sportico.com/leagues/tennis/2023/us-open-prize-money-gender-pay-gap-1234736498/
- *The Washington Post*. (2007, March 17). *Finally, equal pay for all at French Open*. https://www.washingtonpost.com/archive/sports/2007/03/17/finally-equal-pay-for-all-at-french-open/b5c6c5b5-ae6b-428a-a0c1-d52553f8bba2/
- *The Washington Post*. (2013, July 2). *How Venus Williams got equal pay for women at Wimbledon*. https://www.washingtonpost.com/news/reliable-source/wp/2013/07/02/how-venus-williams-got-equal-pay-for-women-at-wimbledon/
- Women's Tennis Association. (2023, June 27). *WTA announces new tour calendar and pathway to equal prize money*. https://www.wtatennis.com/news/3557739/wta-announces-new-tour-calendar-and-pathway-to-equal-prize-money`,
      recallContent: [
        {
          prompt: "Name three of the Original 9.",
          answer:
            "Any three of: Jane 'Peaches' Bartkowicz, Rosie Casals, Judy Dalton, Julie Heldman, Billie Jean King, Kerry Melville, Kristy Pigeon, Nancy Richey, Valerie Ziegenfuss.",
        },
        {
          prompt: "The men founded the ATP in September 1972. When did the women found the WTA, and what's the structural lesson?",
          answer:
            "June 1973, at the Gloucester Hotel in London, a week before Wimbledon, Billie Jean King its first president. Once one group in an industry organizes, the other group's choice is to organize or be left behind.",
        },
      ],
    },
    {
      slug: "tennis-quiz-people",
      title: "26 · Quiz: the people who changed the game",
      section: "Section 5 · The people who changed the game",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why was the American Tennis Association founded in 1916?",
            options: [
              "To organize the professional tour",
              "The USLTA barred Black players",
              "To write the official rules of tennis",
              "To run the US Open tournament",
            ],
            correctIndex: 1,
            explanation:
              "Black tennis clubs founded the ATA in Washington, D.C., on Thanksgiving Day 1916 so their players would have tournaments to enter. It is the oldest African American sports organization in the U.S.",
            sourceLessonSlug: "tennis-ata-and-althea-gibson",
          },
          {
            prompt: "Which two Hall of Fame players were developed by the ATA?",
            options: [
              "Althea Gibson and Arthur Ashe",
              "Billie Jean King and Rosie Casals",
              "Venus and Serena Williams",
              "Alice Marble and Louise Brough",
            ],
            correctIndex: 0,
            explanation:
              "Both were 'sponsored and groomed by ATA officials and coaches,' notably through Dr. Walter Johnson's junior development program.",
            sourceLessonSlug: "tennis-ata-and-althea-gibson",
          },
          {
            prompt: "What did Althea Gibson win in 1956?",
            options: [
              "Wimbledon, which she won in 1957",
              "The U.S. Nationals, won in 1957",
              "The French Championships",
              "The Australian Championships",
            ],
            correctIndex: 2,
            explanation:
              "She then won Wimbledon and the U.S. Nationals in both 1957 and 1958, and was AP Female Athlete of the Year in 1957 and 1958.",
            sourceLessonSlug: "tennis-ata-and-althea-gibson",
          },
          {
            prompt: "Who wrote the July 1950 editorial in *American Lawn Tennis* that helped force the USLTA to admit Althea Gibson?",
            options: ["Billie Jean King", "Alice Marble", "Gladys Heldman", "Louise Brough"],
            correctIndex: 1,
            explanation:
              "Former champion Alice Marble. But it was a coalition: sustained ATA lobbying plus Marble's public shaming of the USLTA, not a lone rescuer.",
            sourceLessonSlug: "tennis-ata-and-althea-gibson",
          },
          {
            prompt: "Arthur Ashe won the 1968 US Open. Who received the $14,000 winner's cheque?",
            options: [
              "Ashe, the amateur champion",
              "Nobody, the cheque was withheld",
              "Tom Okker, the runner-up",
              "The USTA kept the cheque",
            ],
            correctIndex: 2,
            explanation:
              "Ashe was a U.S. Army lieutenant keeping amateur status for Davis Cup. He received a $20-a-day per diem, about $280 for the fortnight.",
            sourceLessonSlug: "tennis-arthur-ashe",
          },
          {
            prompt: "At the 1973 South African Open, what did Arthur Ashe insist on?",
            options: [
              "Playing only in the doubles draw",
              "Refusing 'honorary white' status",
              "Donating his prize money to the ATP",
              "Playing under an assumed false name",
            ],
            correctIndex: 1,
            explanation:
              "And some anti-apartheid activists still criticized him for going at all, arguing it legitimized the regime. The disagreement was serious and is worth arguing about.",
            sourceLessonSlug: "tennis-arthur-ashe",
          },
          {
            prompt: "How did Arthur Ashe's HIV diagnosis become public in April 1992?",
            options: [
              "He chose to announce it at a press conference of his own initiative",
              "A USA Today tip forced his hand, he announced next day",
              "It was disclosed by the ATP",
              "It was never made public in his lifetime",
            ],
            correctIndex: 1,
            explanation:
              "The International Tennis Hall of Fame states that 'news leaks forced his announcement.' It set off a lasting argument about journalism ethics and medical privacy.",
            sourceLessonSlug: "tennis-arthur-ashe",
          },
          {
            prompt: "Why did the Original 9 sign $1 contracts on 23 September 1970?",
            options: [
              "As a symbolic protest against low pay",
              "A legal device to avoid USLTA sanctions",
              "Because that was the tournament's actual prize money",
              "To join the ATP",
            ],
            correctIndex: 1,
            explanation:
              "Signed roughly an hour before play began, with Gladys Heldman, publisher of *World Tennis* magazine. The photo of them holding up the dollar bills is the founding image of women's pro tennis.",
            sourceLessonSlug: "tennis-original-9-and-the-wta",
          },
          {
            prompt: "At the 1970 Pacific Southwest Championships, what was the ratio between the men's and women's prize money?",
            options: ["2 to 1", "8 to 1", "20 to 1", "They were equal"],
            correctIndex: 1,
            explanation:
              "$12,500 to the men's field, $1,500 to the women's, a gap Bud Collins called a 'feudalistic ratio.' Sources disagree on whether these were champions' cheques or total purses, so this course teaches the ratio, which every account agrees on.",
            sourceLessonSlug: "tennis-original-9-and-the-wta",
          },
          {
            prompt: "When and where was the WTA founded?",
            options: [
              "September 1972, at Forest Hills",
              "June 1973, in London",
              "September 1970, in Houston",
              "March 1968, in Paris",
            ],
            correctIndex: 1,
            explanation:
              "Billie Jean King was its first president. The men had formed the ATP in September 1972, the women organized in response.",
            sourceLessonSlug: "tennis-original-9-and-the-wta",
          },
          {
            prompt: "Which Grand Slam was the first to pay equal prize money, and in what year?",
            options: ["Wimbledon, 2007", "The Australian Open, 1984", "The US Open, 1973", "Roland-Garros, 2006"],
            correctIndex: 2,
            explanation:
              "$25,000 to each singles champion, after Billie Jean King threatened a boycott and Bristol-Myers offered to fund the difference.",
            sourceLessonSlug: "tennis-equal-prize-money",
          },
          {
            prompt: "Which Grand Slam paid equal prize money, then went BACKWARDS to paying men more?",
            options: [
              "Wimbledon, equal only from 2007",
              "The US Open, equal since 1973",
              "The Australian Open, then reversed",
              "None of the four ever reversed course",
            ],
            correctIndex: 2,
            explanation:
              "Its stated reason for reverting was higher TV ratings for men's matches. This is the fact most timelines omit, and it proves that equality is reversible.",
            sourceLessonSlug: "tennis-equal-prize-money",
          },
          {
            prompt: "What is the precise truth about Roland-Garros and equal prize money?",
            options: [
              "It went fully equal in 2006",
              "Champions equal 2006, full draw 2007",
              "It has never once paid equal prize money",
              "It was the very first Slam to pay equally",
            ],
            correctIndex: 1,
            explanation:
              "The difference between 2006 and 2007 is the difference between a trophy photo and a payroll, in 2006 a woman losing in round three still earned less than a man losing in round three.",
            sourceLessonSlug: "tennis-equal-prize-money",
          },
          {
            prompt: "How long did it take from the first Slam paying equally to the last?",
            options: ["4 years", "12 years", "34 years (1973 to 2007)", "It still hasn't happened at all four"],
            correctIndex: 2,
            explanation: "US Open 1973 → Wimbledon and full-draw Roland-Garros in 2007.",
            sourceLessonSlug: "tennis-equal-prize-money",
          },
          {
            prompt: "Does equal prize money at the four Slams mean tennis has equal pay?",
            options: [
              "Yes, the Slams are the whole sport",
              "No, outside the Slams the gap is large",
              "Yes, since the WTA's 2023 announcement",
              "No, because the ATP refuses to allow it",
            ],
            correctIndex: 1,
            explanation:
              "In 2023 Djokovic earned $1.02m for the Cincinnati title while Gauff earned $454,500 at the same combined event the same week. 2033 would be sixty years after 1973, and a pathway is a promise, not an achievement.",
            sourceLessonSlug: "tennis-equal-prize-money",
          },
        ],
      },
    },

    // ───────────────────── SECTION 6 · HOW THE SPORT IS ORGANIZED ─────────────────────
    {
      slug: "tennis-the-professional-ladder",
      title: "27 · The professional ladder, and how rankings actually work",
      section: "Section 6 · How the sport is organized",
      body: `Professional tennis is a **ladder**, and almost nobody explains it to you, so here it is.

| Rung | What it is |
| --- | --- |
| **ITF World Tennis Tour** | The entry level. Roughly **600 tournaments in ~70 countries**. Men's events at the **$15,000** and **$30,000** prize-money levels; women's at **W15 / W25 / W60 / W80 / W100**. Results earn ATP/WTA ranking points (ITF, n.d.-c). |
| **ATP Challenger Tour** / **WTA 125** | The second tier, where you go once you have a ranking but not a tour-level one. |
| **ATP Tour** / **WTA Tour** | The main tour: **ATP 250 → ATP 500 → ATP Masters 1000**, and **WTA 250 → WTA 500 → WTA 1000**, plus the season-ending **ATP Finals** and **WTA Finals**. |
| **The four Grand Slams** | Owned and run by four national federations, not the tours (Section 1, Lesson 5). |

**Read that table again and notice the naming.** The ATP itself explains it: *"ATP 250, ATP 500 and ATP Masters 1000 events are named for the number of ATP Rankings points earned by their champion"* (ATP Tour, n.d.-b). The tier **is** the points number. Once you see that, the whole tour becomes legible: a WTA 500 title is worth 500 points, a WTA 1000 title is worth 1,000, and **a Grand Slam title is worth 2,000**, the biggest single prize in the ranking system on either tour (Women's Tennis Association [WTA], n.d.-c).

**Rankings are a rolling 52-week system**, updated every Monday. The points you win at a tournament stay on your ranking for **one year** and then **drop off** when that tournament comes around again. This is why commentators talk about a player having "points to defend", and it is the most important structural fact about a tennis career.

Think about what a rolling ranking actually does to a person:

- **You never bank anything.** A title you won last July is worth exactly zero next July unless you win it again.
- **You cannot rest.** Skip a tournament you won last year and your ranking falls even if you never lose a match.
- **An injury is not a pause; it is a demolition.** Miss six months and six months of points evaporate on schedule.

On the WTA side, a maximum of **18 tournaments** count toward a player's singles ranking (WTA, n.d.-c). Roughly **1,600 athletes** compete on the WTA tour (WTA, n.d.-d). Hold onto that number, Section 7 is going to ask you what fraction of them make a living.

**Integrity.** Since **1 January 2022**, tennis's **anti-doping and anti-corruption** programs have both been run by the **International Tennis Integrity Agency (ITIA)**, an independent body established in 2021 by the ATP, the ITF, the WTA, and the Grand Slams, with five independent members including its chair (International Tennis Integrity Agency [ITIA], n.d.). Note what happened there: the sport moved policing *out* of the organizations with a commercial interest in the results. That is not a small thing, and plenty of sports still haven't done it.

:::reveal Your ranking points from a tournament you won last year are about to "drop off." What does that mean, and what does the rolling 52-week system do to a player who gets injured? ||| Ranking points last exactly **52 weeks**. The points you earned at an event come off your ranking when that event comes around again, so you must "defend" them by performing at least as well, every year, forever. You never bank anything. And an injury isn't a pause: miss six months and six months of points evaporate on schedule, whether or not you ever lost a match.

## Sources
- ATP Tour. (n.d.-b). *Tennis explained: The ATP Tour*. https://www.atptour.com/en/news/tennis-explained-atp-tour
- International Tennis Federation. (n.d.-c). *What is the ITF World Tennis Tour?* https://www.itftennis.com/en/news-and-media/articles/what-is-the-itf-world-tennis-tour/
- International Tennis Integrity Agency. (n.d.). *About the ITIA*. https://www.itia.tennis/about/
- Women's Tennis Association. (n.d.-c). *Rankings explained*. https://www.wtatennis.com/rankings-explained
- Women's Tennis Association. (n.d.-d). *About the WTA*. https://www.wtatennis.com/news/1367607/about-the-wta`,
    },
    {
      slug: "tennis-team-competitions",
      title: "28 · The team game: Davis Cup, Billie Jean King Cup, and the Olympics",
      section: "Section 6 · How the sport is organized",
      body: `Tennis is famously a lonely sport. No teammates, no substitutions, no coach allowed to fix things mid-match. Which is exactly why its **team** competitions matter so much to the people who play them.

**Davis Cup (1900).** The men's national-team championship, and one of the oldest team competitions in any international sport. It came from four Harvard players; one of them, **Dwight Davis**, designed the format and **bought the trophy with his own money**. The first tie was played in **August 1900** at the Longwood Cricket Club in Boston, USA vs. the British Isles. It is run by the **ITF**.

**Billie Jean King Cup (1963).** The women's national-team championship, launched in **1963 as the Federation Cup** to mark the ITF's 50th anniversary, 16 nations, at Queen's Club, London, no prize money. It became the **Fed Cup** in 1995, and on **17 September 2020** it was renamed the **Billie Jean King Cup**. The ITF's announcement is worth quoting: *"It is the first time a major global team competition has been named after a woman"* (International Tennis Federation [ITF], 2020). By then it had grown to **116 nations**, the largest annual international team competition in women's sport.

Sit with that for a second. **2020.** Not 1975. The first time a global team competition in any sport was named for a woman was **six years ago**.

**The Olympics, and the 64-year hole.** Tennis was in the Games from **1896 to 1924**, and then it **vanished**. Why? A fight between the **ILTF and the IOC**, fundamentally about **amateurism and who controlled the players** (the same fight you met in Section 4). The ILTF voted not to take part in 1928, and tennis was gone from the official program for six decades. It appeared as a **demonstration sport** in 1968 and 1984, and returned as a **full medal sport at the 1988 Seoul Games**, this time **open to professionals** (Olympics.com, n.d.).

In that first year back, **Steffi Graf** won Olympic gold *and* all four Grand Slams in the same calendar year, the **"Golden Slam."** She remains **the only player, man or woman, ever to do it.**

**Team competitions you can actually watch this year:**

- **Laver Cup**, Team Europe vs. Team World, six a side, three days, with matches worth more points each day (Day 1 = 1 point, Day 2 = 2, Day 3 = 3; first to 13 wins). An officially sanctioned ATP Tour event since 2019.
- **World TeamTennis**, founded in **1974** with **Billie Jean King** among its founders; dormant since 2022; **relaunching on 2 December 2026** at Barclays Center in Brooklyn, with a format of four singles sets (two men's, two women's) plus a mixed-doubles supertiebreaker, and, notably, an ownership model that gives **competing players equity in the league**, a first in tennis (PR Newswire, 2025).

That last detail is not trivia. **Players owning a piece of the league they play in** is the logical endpoint of the story you read in Section 5, the Original 9's dollar bills, fifty-six years later.

:::reveal Tennis was an Olympic sport from 1896 to 1924, then disappeared for over sixty years. Why, and when did it return? ||| It was dropped after a fight between the **ILTF and the IOC over amateurism and control of the players**, the same fight that produced "shamateurism" and eventually the Open era. The ILTF voted not to take part in 1928. Tennis returned as a **full medal sport at the 1988 Seoul Games**, this time **open to professionals**. Steffi Graf promptly won gold plus all four majors in one year, the "Golden Slam," which no one else has ever done.

## Sources
- International Tennis Federation. (2020, September 17). *Fed Cup renamed Billie Jean King Cup by BNP Paribas*. https://www.itftennis.com/en/news-and-media/articles/fed-cup-renamed-billie-jean-king-cup-by-bnp-paribas/
- International Tennis Federation. (n.d.-d). *About World Tennis*. https://www.itftennis.com/en/about-us/
- Olympics.com. (n.d.). *A brief history of tennis*. https://www.olympics.com/en/news/a-brief-history-of-tennis
- PR Newswire. (2025). *World TeamTennis returns in 2026, built for a new generation of fans*. https://www.prnewswire.com/news-releases/world-team-tennis-returns-in-2026-built-for-a-new-generation-of-fans-302775257.html`,
      recallContent: [
        {
          prompt: "How long do ATP/WTA ranking points last?",
          answer:
            "52 weeks. Points drop off when that tournament comes around again, you must defend them every year. Nothing is ever banked.",
        },
        {
          prompt: "How many ranking points does a Grand Slam singles title award?",
          answer: "2,000, the biggest single prize in the ranking system on either tour.",
        },
      ],
    },
    {
      slug: "tennis-where-you-actually-play",
      title: "29 · Where you actually play: high school, leagues, juniors, college",
      section: "Section 6 · How the sport is organized",
      body: `Everything in the last two lessons was about roughly two thousand people on Earth. This lesson is about you.

**High school.** Tennis is a big high-school sport and it is **growing**. Per the NFHS's 2024-25 participation survey, U.S. high schools fielded **204,721 girls' tennis players** (the 7th most popular girls' sport, up more than 4% in one year) and **158,667 boys' tennis players** (9th most popular), roughly **363,000 high school tennis players** in total (National Federation of State High School Associations [NFHS], 2025).

Two things follow from that number, and they point in opposite directions:

- **The good news:** if your school has a team, you can very likely make it. Tennis is not football. A motivated beginner who works for two years can play varsity at a lot of schools.
- **The reality check:** 363,000 is also the denominator in Section 7's arithmetic about turning pro. Remember it.

**USTA League, the adult game, and the one almost nobody knows about.** USTA League is **the largest adult competitive tennis league in the country, with more than 320,000 players taking part each year** (United States Tennis Association [USTA], n.d.-a). You play locally, on a team, in a division for your level; win, and your team can advance to **district**, then **sectional**, then the **USTA League National Championships**.

Read that again: **there is a national championship for recreational adult tennis players, and it is a real thing you could plausibly reach.** Very few sports offer an ordinary adult a competitive ladder with a national final at the top of it. Tennis does. This is one of the most under-appreciated facts in American sport, and it is the direct answer to "opportunities for amateurs."

**NTRP.** That ladder works because of the **National Tennis Rating Program**, the USTA's level system that sorts players so that matches are competitive. USTA League play generally runs from **2.5 through 5.0**, and you either **self-rate** or get a **computer rating** generated from your match results (USTA, n.d.-b). A 3.0 plays 3.0s. A 4.5 plays 4.5s. Nobody's afternoon gets ruined.

*(This course deliberately does not print the descriptions of each NTRP level, because the USTA's own wording is the authority and it changes. Look up the current definitions on usta.com before you self-rate, guessing high or low both make for miserable matches.)*

**Juniors.** **USTA Junior Team Tennis** is coed team play for ages **5 to 18**, organized by junior NTRP rating, with **nearly 100,000 kids playing annually** (USTA, n.d.-c). A team match typically runs boys' singles, girls' singles, boys' doubles, girls' doubles, and mixed doubles, decided on **total games won**.

**College.** The **Intercollegiate Tennis Association (ITA)** is the governing body of college tennis, spanning NCAA Divisions I, II, and III, the NAIA, and junior/community colleges (ITA, n.d.). And college tennis has a **team scoring format the pro game does not have**: in Division I, three doubles matches play for **one** combined team point, then **six singles matches are worth one point each**, **first team to 4 points wins the dual match**, and any matches still in progress are stopped. It's played with **no-ad scoring** (NCAA, 2015), the Appendix VI option you met in Section 1.

Which means your teammate's match can end mid-point because someone else clinched. It is the most **team** thing that happens in tennis, and college players will tell you it is the best atmosphere in the sport.

:::reveal USTA League has more than 320,000 adult players a year. What can an ordinary recreational adult actually work their way up to, and what makes the ladder possible? ||| Local team play → **district** → **sectional** → the **USTA League National Championships**. A genuine national championship for recreational adults. It's possible because of the **NTRP** rating system, which sorts players by level (League runs roughly 2.5-5.0) so that people play opponents of comparable ability instead of being crushed or crushing.

## Sources
- Intercollegiate Tennis Association. (n.d.). *We are college tennis*. https://wearecollegetennis.com/
- National Collegiate Athletic Association. (2015, August 13). *Division I tennis championships move to no-ad scoring*. https://www.ncaa.com/news/tennis-men/article/2015-08-13/division-i-tennis-championships-move-no-ad-scoring
- National Federation of State High School Associations. (2025). *Participation in high school sports hits record high with sizable increase in 2024-25*. https://nfhs.org/stories/participation-in-high-school-sports-hits-record-high-with-sizable-increase-in-2024-25
- United States Tennis Association. (n.d.-a). *USTA League*. https://www.usta.com/en/home/play/adult-tennis/programs/national/usta-league.html
- United States Tennis Association. (n.d.-b). *About NTRP ratings*. https://www.usta.com/en/home/play/adult-tennis/programs/national/about-ntrp-ratings.html
- United States Tennis Association. (n.d.-c). *About USTA Junior Team Tennis*. https://www.usta.com/en/home/play/youth-tennis/programs/national/about-usta-junior-team-tennis.html`,
      recallContent: [
        {
          prompt: "In what year was the Fed Cup renamed the Billie Jean King Cup, and why was that notable?",
          answer:
            "2020, the first time a major global team competition in any sport had been named after a woman. Not 1975. 2020.",
        },
        {
          prompt: "Who is the only player ever to win the 'Golden Slam'?",
          answer:
            "Steffi Graf, in 1988, all four majors plus Olympic gold in the same calendar year, in the first year tennis returned to the Olympics as a full medal sport.",
        },
      ],
    },
    {
      slug: "tennis-quiz-organization",
      title: "30 · Quiz: how the sport is organized",
      section: "Section 6 · How the sport is organized",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the '500' in 'ATP 500' or 'WTA 500' refer to?",
            options: [
              "The prize money in thousands of dollars",
              "The champion's ranking points earned",
              "The number of players in the draw",
              "The year the event was founded",
            ],
            correctIndex: 1,
            explanation:
              "The tier IS the points number. A Grand Slam title is worth 2,000, the largest single prize in the ranking system on either tour.",
            sourceLessonSlug: "tennis-the-professional-ladder",
          },
          {
            prompt: "ATP and WTA rankings use a rolling 52-week system. What does that mean in practice?",
            options: [
              "Points accumulate permanently over a career",
              "Points expire after 52 weeks, you defend",
              "Rankings are recalculated once a year",
              "Only your best career result counts",
            ],
            correctIndex: 1,
            explanation:
              "Nothing is ever banked. Skip a tournament you won last year and your ranking falls even if you never lose a match, and an injury isn't a pause, it's a demolition.",
            sourceLessonSlug: "tennis-the-professional-ladder",
          },
          {
            prompt: "What is the ITF World Tennis Tour?",
            options: [
              "The top tier of professional tennis",
              "The entry level of the pro tour",
              "A team competition between nations",
              "The junior circuit only",
            ],
            correctIndex: 1,
            explanation:
              "Men's events at the $15,000 and $30,000 levels; women's at W15 through W100. It's the bottom rung of the professional ladder.",
            sourceLessonSlug: "tennis-the-professional-ladder",
          },
          {
            prompt: "Since 1 January 2022, who runs tennis's anti-doping and anti-corruption programs?",
            options: [
              "The ITF, as it always has",
              "The ATP and WTA, run separately",
              "The ITIA, an independent body",
              "The Grand Slam Board itself",
            ],
            correctIndex: 2,
            explanation:
              "Established in 2021 by the ATP, ITF, WTA, and the Slams, it moved policing out of the organizations with a commercial interest in the results.",
            sourceLessonSlug: "tennis-the-professional-ladder",
          },
          {
            prompt: "The Davis Cup began in 1900. Where did its trophy come from?",
            options: [
              "It was donated by the ITF",
              "Dwight Davis paid for it himself",
              "It was commissioned by the British royal family",
              "It was funded by a sponsor",
            ],
            correctIndex: 1,
            explanation: "Davis also designed the format. The first tie was USA vs. the British Isles, in Boston, August 1900.",
            sourceLessonSlug: "tennis-team-competitions",
          },
          {
            prompt: "The Fed Cup was renamed the Billie Jean King Cup in 2020. What made that notable?",
            options: [
              "It was the first team competition to allow professionals",
              "The first global team event named after a woman",
              "It was the first ITF event to pay prize money",
              "It merged with the Davis Cup",
            ],
            correctIndex: 1,
            explanation: "The competition began in 1963 as the Federation Cup and had grown to 116 nations by 2020.",
            sourceLessonSlug: "tennis-team-competitions",
          },
          {
            prompt: "Why did tennis disappear from the Olympics after 1924?",
            options: [
              "Not enough countries played it",
              "An ILTF-IOC dispute over amateurism",
              "The courts were too expensive to build",
              "It was replaced by badminton",
            ],
            correctIndex: 1,
            explanation:
              "The same fight that produced 'shamateurism.' The ILTF voted not to take part in 1928, and tennis was gone from the official program until 1988.",
            sourceLessonSlug: "tennis-team-competitions",
          },
          {
            prompt: "When did tennis return to the Olympics as a full medal sport, and who won the 'Golden Slam' that year?",
            options: [
              "1968, Billie Jean King",
              "1984, Martina Navratilova",
              "1988 (Seoul), Steffi Graf",
              "1992 (Barcelona), Jennifer Capriati",
            ],
            correctIndex: 2,
            explanation:
              "Graf won all four majors plus Olympic gold in the same calendar year, the only player, man or woman, ever to do it.",
            sourceLessonSlug: "tennis-team-competitions",
          },
          {
            prompt: "Roughly how many students played high school tennis in the U.S. in 2024-25?",
            options: ["About 60,000", "About 130,000", "About 363,000", "About 1.2 million"],
            correctIndex: 2,
            explanation:
              "Per the NFHS participation survey. Girls' tennis is the 7th most popular girls' sport; boys' tennis is 9th. Remember this number, it's the denominator when we do the odds of turning pro.",
            sourceLessonSlug: "tennis-where-you-actually-play",
          },
          {
            prompt: "What is USTA League?",
            options: [
              "The U.S. professional tour",
              "The largest adult tennis league",
              "A junior development program",
              "The college tennis governing body",
            ],
            correctIndex: 1,
            explanation:
              "Local team play advances to district, then sectional, then the USTA League National Championships. A genuine competitive ladder for ordinary adults, very few sports offer this.",
            sourceLessonSlug: "tennis-where-you-actually-play",
          },
          {
            prompt: "What makes the USTA League ladder work?",
            options: [
              "Age divisions only, by decade",
              "The NTRP rating system",
              "A player draft system",
              "Random team assignment",
            ],
            correctIndex: 1,
            explanation: "League play generally runs from 2.5 to 5.0. You either self-rate or receive a computer rating from your results.",
            sourceLessonSlug: "tennis-where-you-actually-play",
          },
          {
            prompt: "In NCAA Division I team tennis, how does a dual match work?",
            options: [
              "Six singles matches, most wins takes it",
              "A doubles point, six singles, first to 4",
              "One match per player, best of five sets",
              "Same as a pro tournament, single elimination",
            ],
            correctIndex: 1,
            explanation:
              "Matches still in progress are stopped once a team clinches. It's played with no-ad scoring, the ITF Appendix VI option from Section 1.",
            sourceLessonSlug: "tennis-where-you-actually-play",
          },
          {
            prompt: "Which body is the governing body of U.S. college tennis?",
            options: [
              "The USTA, the U.S. governing body",
              "The ITF, the world governing body",
              "The Intercollegiate Tennis Association",
              "The NCAA, acting entirely alone",
            ],
            correctIndex: 2,
            explanation:
              "The ITA spans NCAA Divisions I, II, and III, the NAIA, and junior/community colleges, and runs the rankings. The NCAA runs the team championships.",
            sourceLessonSlug: "tennis-where-you-actually-play",
          },
          {
            prompt: "World TeamTennis, founded in 1974 with Billie Jean King among its founders, relaunches in December 2026 with what notable feature?",
            options: [
              "No-let serving on every point",
              "Players get league equity",
              "Matches played on grass only",
              "No doubles matches at all",
            ],
            correctIndex: 1,
            explanation:
              "Players owning a piece of the league they play in is the logical endpoint of the Original 9's dollar bills, fifty-six years later.",
            sourceLessonSlug: "tennis-team-competitions",
          },
          {
            prompt: "Roughly how many athletes compete on the WTA tour?",
            options: ["About 200", "About 1,600", "About 12,000", "About 50,000"],
            correctIndex: 1,
            explanation:
              "Keep this number in mind for Section 7, when we ask how many of them actually earn a living from prize money.",
            sourceLessonSlug: "tennis-the-professional-ladder",
          },
        ],
      },
    },

    // ──────────────────── SECTION 7 · OPPORTUNITIES FOR AMATEURS ────────────────────
    {
      slug: "tennis-college-pipeline",
      title: "31 · The college pipeline, and the real odds",
      section: "Section 7 · Opportunities for amateurs",
      body: `College tennis is the single best opportunity in this course, and it is also where you need a clear head about numbers.

**The programs exist, and there are a lot of them.** Per the NCAA's own 2024-25 sponsorship report, U.S. colleges field **683 men's tennis teams** (2,420 D-I athletes, 1,654 D-II, 3,399 D-III → **7,473** men) and **840 women's tennis teams** (2,787 D-I, 1,891 D-II, 3,459 D-III → **8,137** women) (National Collegiate Athletic Association [NCAA], 2025a).

Notice that **most college tennis is not Division I.** There are more D-III men's programs (297) than D-I ones (237). If you are picturing "college tennis" as a scholarship at a giant football school, you are picturing about a quarter of it.

**The odds.** The NCAA publishes them, so we don't have to guess (NCAA, 2025b):

| | High school players | NCAA players | **HS → NCAA** | **HS → Division I** |
| --- | --- | --- | --- | --- |
| **Men** | 158,667 | 7,473 | **4.7%** | **1.5%** |
| **Women** | 204,721 | 8,137 | **4.0%** | **1.4%** |

**And the NCAA tells you those numbers are flattering.** Its own caveat: the high-school figures count only players on *high school teams*, not those competing exclusively on **club** teams, and the NCAA **specifically names tennis** as a sport where that happens a lot. So the true high-school-to-NCAA rate for tennis is **lower than 4.7% and 4.0%** (NCAA, 2025b).

Even so: **roughly 1 in 20 to 1 in 25.** That is a real, reachable target for a committed high school player, and it is *vastly* better than the odds in the next lesson.

**A big rule just changed, and most people haven't caught up.** For decades, D-I tennis ran on **scholarship limits**: men's tennis was an "equivalency" sport capped at **4.5** scholarships; women's tennis was a "head-count" sport with **8**. Those numbers are now **historical**. Following the **House v. NCAA settlement**, effective **1 July 2025**, the D-I Board replaced sport-specific scholarship limits with **roster limits**, **10 for men's tennis and 10 for women's tennis**, and schools may now offer a scholarship to **any and all** athletes on the roster (NCAA, 2025c).

Three things people are getting wrong about this, so get them right:

1. It applies only to D-I schools **in a defendant conference or that opt in** to the settlement.
2. **Opting in is all-or-nothing per institution**, a school can't opt in for football and out for tennis.
3. **D-II and D-III are unaffected.**

If you are being recruited, **ask each school directly whether it has opted in.** The answer changes what it can offer you.

**One more rule, and it's tennis-specific.** NCAA rules carve tennis out of the normal amateurism restrictions: **before full-time college enrollment, a tennis player may accept up to $10,000 per calendar year in prize money** and keep NCAA eligibility (beyond that, prize money may only cover actual and necessary expenses) (NCAA, 2025c). Almost no other sport gets this. Hold onto it, in the next lesson you'll compute how hard that $10,000 actually is to earn.

:::reveal Roughly what share of U.S. high school tennis players go on to play NCAA tennis, and why does the NCAA say its own figure is too generous? ||| About **4.7% of boys and 4.0% of girls**, roughly 1 in 20 to 1 in 25. The NCAA cautions that its high-school denominator counts only players on **high school teams**, not those competing exclusively on **club** teams, and it names tennis specifically as a sport where that's common. So the real rate is **lower** than the published figure.

## Sources
- National Collegiate Athletic Association. (2025a). *NCAA sports sponsorship and participation rates report (1956-57 through 2024-25)*. https://ncaaorg.s3.amazonaws.com/research/sportpart/2025RES_SportsSponsorshipParticipationRatesReport.pdf
- National Collegiate Athletic Association. (2025b). *Probability of competing beyond high school*. https://www.ncaa.org/student-athletes/probability-of-competing-beyond-high-school/
- National Collegiate Athletic Association. (2025c). *DI Board of Directors formally adopts changes to roster limits*. https://www.ncaa.org/media-center-di-board-of-directors-formally-adopts-changes-to-roster-limits/`,
    },
    {
      slug: "tennis-the-honest-math",
      title: "32 · The honest math: what professional tennis actually pays",
      section: "Section 7 · Opportunities for amateurs",
      body: `This is the most important lesson in the course, and it is a **math** lesson. Every number below comes from a governing body or a tournament's own published figures. Do the arithmetic yourself, that's the point.

**Start at the top.** At **Wimbledon 2025**, the singles champion, men's and women's, equally, as of 2007, received **£3,000,000**. A player who **lost in the first round** received **£66,000**. A player who lost in the first round of **qualifying** received **£15,500** (All England Lawn Tennis Club [AELTC], 2025).

At the **2025 US Open**, the champion received **$5,000,000**, and a **first-round loser received $110,000**, from a total player compensation pool of **$90,000,000** (US Open, 2025).

Look at that first-round number. **$110,000 for losing your first match.** That sounds like a solved problem.

**Now go to the bottom of the ladder, the ITF World Tennis Tour**, where essentially every professional starts. From the ITF's own 2026 prize-money tables (International Tennis Federation [ITF], 2026b):

| At an **M15** event ($15,000 total) | Prize |
| --- | --- |
| Winner | **$2,160** |
| Semi-finalist | $753 |
| **Lost in the first round** | **$156** |

At a **W15** event, the winner gets **$2,352**, a first-round loser **$147**, and **qualifying pays $0**.

**Do the subtraction.** A first-round loser at the US Open earns **$110,000**. A first-round loser at an M15 earns **$156**. That is a ratio of roughly **705 to 1**, and the M15 player is *also* a professional tennis player, playing an ITF-sanctioned professional tournament, in the same sport, in the same week.

**Now the costs.** The ITF studied this. Its 2014 review found the average annual cost of playing professional tennis, **excluding coaching**, was **$38,800 for men and $40,180 for women** (Independent Review Panel [IRP], 2018).

So: an M15 winner earns **$2,160**. Costs are about **$38,800 a year**. The Independent Review Panel spells out the consequence, and you should read it twice:

> "The winner of a singles tournament at that level is unlikely to receive more than $4,000. As a result, a player at that Lowest Level would need to **win at least ten tournaments in a year just to break even**, without any accounting for coaching." (IRP, 2018, ¶85)

**Win ten professional tournaments in a year. To break even. Before paying a coach.**

**How many people are we talking about?** The ITF, quoted in the same report: *"every year, 14,000 men and women play at least one $15,000 tournament, but research indicates that **only approximately 600 earn enough prize money to cover the typical annual cost of competing**, excluding the cost of coaching"* (IRP, 2018, ¶294). The panel's own summary puts it at **the top 250 to 350 players**, out of roughly **14,000** (IRP, 2018, ¶8.2).

**Your turn. Get out a calculator.**

- 600 ÷ 14,000 = **4.3%** of professional tennis players cover their costs.
- 350 ÷ 14,000 = **2.5%** by the panel's stricter figure.
- Which means **roughly 96-97% of professional tennis players lose money playing professional tennis.**
- The ITF puts the **break-even ranking** at **336 for men and 253 for women**, *before* coaching costs, so the true break-even ranking is **worse** than that (IRP, 2018, ¶84).
- And "earning a living" is a higher bar than breaking even. The panel says players ranked in the **top 100, possibly to around 150**, can generally earn a living from prize money and sponsorship (IRP, 2018, ¶84).

**Top 150. In the world. Out of ~14,000 trying.** That is **about one percent**, and every one of those 14,000 was, at some point, the best player at their high school.

**Two honest closing notes.**

First: **this is not a reason to quit.** It is a reason to be **clear-eyed about which prize you are actually playing for.** Section 6 showed you a national championship for recreational adults. This lesson shows you that the professional tour is a lottery with a 97% loss rate. Both are true, and only one of them is being sold to you by an academy.

Second: **notice how much of this you could only learn because someone published the numbers.** The ITF commissioned a review, the review printed the break-even ranking, and Wimbledon publishes its prize-money table as a PDF anyone can download. A sport that hid these figures would look exactly like a sport where everybody makes it.

:::reveal Roughly 14,000 people play professional tennis each year. Roughly how many earn enough prize money to cover the cost of competing, and what does that mean as a percentage? ||| **About 600**, the ITF's own figure, and that's *excluding* the cost of coaching. The Independent Review Panel puts it more strictly at **the top 250 to 350 players**. 600 ÷ 14,000 ≈ **4.3%**; 350 ÷ 14,000 = **2.5%**. So **roughly 96-97% of professional tennis players lose money playing professional tennis.** The break-even ranking is about **336 for men and 253 for women**, before coaching costs.

## Sources
- All England Lawn Tennis Club. (2025). *The Championships, Wimbledon 2025 prize money*. https://www.wimbledon.com/pdf/Wimbledon_Prize_Money_2025.pdf
- Independent Review Panel. (2018). *Independent review of integrity in tennis: Final report*. International Tennis Integrity Agency. https://www.itia.tennis/media/bjuateer/irp-report-final.pdf
- International Tennis Federation. (2026b). *2026 ITF World Tennis Tour regulations* (Appendices H and J: prize money). https://www.itftennis.com/media/15546/2026-wtt-regulations.pdf
- US Open. (2025, August 6). *2025 US Open prize money sets record for largest purse in tennis history*. https://www.usopen.org/en_US/news/articles/2025-08-06/2025_us_open_prize_money_sets_record_for_largest_purse_in_tennis_history.html`,
      recallContent: [
        {
          prompt: "What replaced NCAA Division I scholarship limits in tennis, and when?",
          answer:
            "Roster limits, 10 for men's tennis, 10 for women's, effective 1 July 2025 under the House v. NCAA settlement, for D-I schools in a defendant conference or that opt in. The old 4.5 (men) / 8 (women) scholarship numbers are now historical.",
        },
        {
          prompt: "How much prize money can a tennis player accept before college enrollment without losing NCAA eligibility?",
          answer:
            "Up to $10,000 per calendar year. Tennis is specifically carved out of the general NCAA amateurism rule, almost no other sport gets this.",
        },
      ],
    },
    {
      slug: "tennis-the-amateurs-real-opportunity",
      title: "33 · What tennis is actually for: the amateur's real opportunity",
      section: "Section 7 · Opportunities for amateurs",
      body: `Last lesson was brutal on purpose. This one is the other half of the truth, and it is the reason this course exists.

**Tennis is one of the very few sports you can play competitively for your entire life.** Not "stay active." **Compete.** Keep score, play a league, have a rating, chase a national championship, at 25, at 45, at 70.

Think about what that is worth relative to the sports you're being funneled toward. American football effectively ends at 22 for all but a few hundred people. Basketball becomes a pickup game. Tennis has **27.3 million U.S. players and grew for a sixth consecutive year in 2025**, up **54% since 2019** (United States Tennis Association [USTA], 2026). Globally, the ITF counts **just under 106 million players** and **698,034 courts** across 199 nations (International Tennis Federation [ITF], 2024).

**That's the asset. Now here's how to actually use it.**

**1. Get a rating, not an opinion.** Two systems matter:

- **NTRP** (the USTA's National Tennis Rating Program), the level system that USTA League runs on. It's what lets you find matches you can actually win and lose.
- **UTR (Universal Tennis Rating)**, a 1-16.50 rating run by the private company Universal Tennis. Note carefully: a **rating** estimates your *level*; a **ranking** is an *ordered list*. They are different tools, and UTR is a company's product, not a governing body's.

A rating is the single most useful thing an amateur can acquire, because it converts "am I any good?", an unanswerable, morale-destroying question, into a number that finds you competitive matches.

**2. Play the ladder that actually exists.** USTA League: local → **district** → **sectional** → **National Championships** (Section 6). 320,000+ adults a year. You will never be on Centre Court. You could absolutely be at a national final.

**3. Understand the second-order value.** Be honest that this is what a lot of tennis is *for*, socially:

- It is a **networking sport**, for reasons that are partly admirable (you can play it with anyone at any age; a 4.0 doubles game runs two hours and you talk the whole time) and partly not (it has been an upper-middle-class club sport for a century, and access to courts, coaching, and club membership is not evenly distributed, which is exactly why the ATA had to exist in 1916).
- Naming that plainly is not cynicism. It is **strategy**. If a sport is a room where useful relationships get made, then knowing how to get into the room is a real skill, and knowing who is *kept out of* the room is a real analysis.

**4. Be useful to your community immediately.** You do not need to be good to be valuable. High-school players are chronically in demand as hitting partners, junior-clinic helpers, tournament desk staff, and stringers. Every single one of those is a paid job for somebody, which is the entire subject of Section 8.

**The reframe.** For ninety years, "amateur" was a **cage**, a rule that decided whether you were allowed to be paid (Section 4). Today it means something the people who invented the word would not recognize: **a person who plays because the game is worth playing.** Roughly 96% of *professionals* lose money at tennis. The amateur, playing a Tuesday-night league match with a rating that finds them a fair opponent, is, measured honestly, having a better time and a better financial year.

That is not a consolation prize. **That is the prize.**

:::reveal What is the difference between a rating (like NTRP or UTR) and a ranking, and why is getting a rating the single most useful thing an amateur can do? ||| A **rating** estimates your **level** (a number describing how well you play). A **ranking** is an **ordered list** (who is ahead of whom). A rating is what an amateur needs, because it converts the unanswerable, morale-destroying question "am I any good?" into a number that **finds you competitive matches**, opponents you can genuinely beat and genuinely lose to. That's what makes leagues, ladders, and a lifetime of real competition possible.

## Sources
- International Tennis Federation. (2024). *ITF Global Tennis Report: Participation hits 106 million in five years*. https://www.itftennis.com/en/news-and-media/articles/itf-global-tennis-report-participation-hits-106-million-in-five-years/
- United States Tennis Association. (2026, February 18). *Tennis participation continues to surge with six consecutive years of growth*. https://www.usta.com/en/home/stay-current/national/tennis-participation-continues-to-surge-with-six-consecutive-yea.html`,
      recallContent: [
        {
          prompt: "At an ITF M15 event, what does the winner earn, and what does a first-round loser earn?",
          answer:
            "The winner gets $2,160; a first-round loser gets $156. Meanwhile a first-round loser at the 2025 US Open earned $110,000, a ratio of roughly 705 to 1, in the same sport, in the same week.",
        },
        {
          prompt: "How many tournaments would a lowest-level pro need to WIN in a year just to break even?",
          answer:
            "At least ten, and that's before paying a coach. Average annual cost of competing (excluding coaching) is about $38,800 for men and $40,180 for women.",
        },
      ],
    },
    {
      slug: "tennis-quiz-amateurs",
      title: "34 · Quiz: opportunities for amateurs",
      section: "Section 7 · Opportunities for amateurs",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Roughly what percentage of U.S. high school tennis players go on to play NCAA tennis?",
            options: ["About 25%", "About 15%", "About 4-5%", "Less than 0.1%"],
            correctIndex: 2,
            explanation:
              "And the NCAA notes its own figure is generous, because the denominator misses club-only players, a group it names tennis as having a lot of. So the true rate is lower.",
            sourceLessonSlug: "tennis-college-pipeline",
          },
          {
            prompt: "Which division has the MOST men's tennis programs?",
            options: ["Division I (237)", "Division II (149)", "Division III (297)", "They are equal"],
            correctIndex: 2,
            explanation:
              "Most college tennis is not Division I. If you picture 'college tennis' as a scholarship at a big football school, you're picturing about a quarter of it.",
            sourceLessonSlug: "tennis-college-pipeline",
          },
          {
            prompt: "What replaced NCAA Division I scholarship limits for tennis, effective 1 July 2025?",
            options: [
              "Nothing, men's tennis is still capped at 4.5 scholarships and women's at 8",
              "Roster limits of 10 men and 10 women, under the House v. NCAA settlement",
              "A hard ban on athletic scholarships in tennis",
              "A single scholarship per team",
            ],
            correctIndex: 1,
            explanation:
              "The old 4.5 / 8 numbers are now historical. Schools may offer a scholarship to any and all athletes on the roster, but only at D-I schools in a defendant conference or that opt in. Ask each school directly.",
            sourceLessonSlug: "tennis-college-pipeline",
          },
          {
            prompt: "How much prize money can a tennis player accept before college enrollment and keep NCAA eligibility?",
            options: ["$0, none allowed", "$1,000 per year", "$10,000 a year", "Unlimited, no cap"],
            correctIndex: 2,
            explanation: "Tennis is specifically carved out of the general NCAA amateurism rule. Almost no other sport gets this.",
            sourceLessonSlug: "tennis-college-pipeline",
          },
          {
            prompt: "At Wimbledon 2025, the singles champion received £3,000,000. What did a first-round loser receive?",
            options: ["£0", "£66,000", "£500,000", "£1,520,000"],
            correctIndex: 1,
            explanation:
              "And a first-round qualifying loser received £15,500. These figures are published by the AELTC as a downloadable PDF, anyone can check them.",
            sourceLessonSlug: "tennis-the-honest-math",
          },
          {
            prompt: "At an ITF M15 tournament, the entry level of professional tennis, what does the WINNER earn?",
            options: ["$15,000", "$2,160", "$110,000", "$25,000"],
            correctIndex: 1,
            explanation:
              "A first-round loser earns $156. Compare that to a first-round loser at the US Open ($110,000), a ratio of about 705 to 1, in the same sport.",
            sourceLessonSlug: "tennis-the-honest-math",
          },
          {
            prompt: "The ITF found the average annual cost of playing pro tennis (EXCLUDING coaching) was about:",
            options: [
              "$4,000 for men and women",
              "$38,800 for men and $40,180 for women",
              "$150,000 for men and women",
              "$12,000 for men and $10,000 for women",
            ],
            correctIndex: 1,
            explanation:
              "Which is why the Independent Review Panel concluded that a lowest-level player would need to WIN at least ten tournaments a year just to break even, before paying a coach.",
            sourceLessonSlug: "tennis-the-honest-math",
          },
          {
            prompt:
              "About 14,000 people play professional tennis each year. Roughly how many earn enough prize money to cover the cost of competing?",
            options: ["About 6,000", "About 2,500", "About 600", "Nearly all of them"],
            correctIndex: 2,
            explanation:
              "600 ÷ 14,000 ≈ 4.3%. By the panel's stricter figure, 350 ÷ 14,000 = 2.5%. Roughly 96-97% of professional tennis players LOSE money playing professional tennis.",
            sourceLessonSlug: "tennis-the-honest-math",
          },
          {
            prompt: "According to the ITF, what is the approximate 'break-even' ranking in professional tennis?",
            options: [
              "About 336 men, 253 women",
              "Around 1,000 for both",
              "Around 50 for both",
              "There is no break-even point",
            ],
            correctIndex: 0,
            explanation:
              "Since the figure excludes coaching, the true break-even ranking is worse than that. 'Earning a living' is a higher bar still, roughly the top 100 to 150.",
            sourceLessonSlug: "tennis-the-honest-math",
          },
          {
            prompt: "What is the difference between a rating (NTRP, UTR) and a ranking?",
            options: [
              "They are two words for the same thing",
              "A rating is your level; a ranking is your order",
              "A ranking estimates your level; a rating is an ordered list",
              "Ratings are only for professionals",
            ],
            correctIndex: 1,
            explanation:
              "A rating is what an amateur needs, it converts 'am I any good?' into a number that finds you competitive matches. Note that UTR is run by a private company, not a governing body.",
            sourceLessonSlug: "tennis-the-amateurs-real-opportunity",
          },
          {
            prompt: "How many people played tennis in the U.S. in 2025, and what's the trend?",
            options: [
              "27.3 million, up 54% since 2019",
              "5 million, declining fast",
              "60 million, roughly flat",
              "12 million, declining since 2019",
            ],
            correctIndex: 0,
            explanation: "Globally the ITF counts just under 106 million players and 698,034 courts across 199 nations.",
            sourceLessonSlug: "tennis-the-amateurs-real-opportunity",
          },
          {
            prompt: "What is the single strongest argument for tennis as a lifetime sport?",
            options: [
              "It is the easiest sport to learn",
              "You can COMPETE at 25, 45, and 70",
              "It requires no equipment",
              "It has the highest professional salaries",
            ],
            correctIndex: 1,
            explanation:
              "Not 'stay active', compete. Football effectively ends at 22 for almost everyone. Tennis doesn't end.",
            sourceLessonSlug: "tennis-the-amateurs-real-opportunity",
          },
          {
            prompt:
              "The lesson notes that tennis is a 'networking sport' but insists on naming a complication. What is it?",
            options: [
              "Tennis is too expensive to televise",
              "Court and coaching access is unequal",
              "Networking is against USTA rules",
              "Doubles partners are assigned randomly",
            ],
            correctIndex: 1,
            explanation:
              "Which is exactly why the American Tennis Association had to be founded in 1916. Naming who is kept out of the room is analysis, not cynicism.",
            sourceLessonSlug: "tennis-the-amateurs-real-opportunity",
          },
          {
            prompt: "Which statement best captures this section's argument?",
            options: [
              "Turning pro is the only worthwhile goal in tennis",
              "A 97% loss lottery vs a winnable amateur ladder",
              "Nobody should ever play competitive tennis",
              "College tennis is impossible for anyone to reach",
            ],
            correctIndex: 1,
            explanation:
              "Both facts are true at once. Being clear-eyed about which prize you're playing for is the whole lesson.",
            sourceLessonSlug: "tennis-the-amateurs-real-opportunity",
          },
          {
            prompt: "Why is it significant that the ITF and Wimbledon PUBLISH these prize-money and break-even figures?",
            options: [
              "It is required by U.S. federal law",
              "It isn't significant, every sport does it",
              "Hiding these would mask the loss rate",
              "It boosts ticket and TV sales revenue",
            ],
            correctIndex: 2,
            explanation:
              "The ITF commissioned a review that printed the break-even ranking; Wimbledon publishes its prize table as a downloadable PDF. You can only check what somebody publishes.",
            sourceLessonSlug: "tennis-the-honest-math",
          },
        ],
      },
    },

    // ────────────────── SECTION 8 · OPPORTUNITIES FOR ENTREPRENEURS ──────────────────
    {
      slug: "tennis-coaching-and-certification",
      title: "35 · Coaching: the biggest job in tennis",
      section: "Section 8 · Opportunities for entrepreneurs",
      body: `Here is the number that reframes everything. In the U.S., the Bureau of Labor Statistics counts (Bureau of Labor Statistics [BLS], 2025):

| Occupation | People employed | Median annual wage | Mean annual wage |
| --- | --- | --- | --- |
| **Coaches and scouts** | **248,950** | **$47,320** | $60,160 |
| **Athletes and sports competitors** | **15,070** | $66,710 | **$206,180** |

**There are about sixteen times more coaching jobs than athlete jobs.** Across all sports. That ratio is the entire thesis of this section.

**And look hard at the athletes' row, because it is a statistics lesson hiding in a salary table.** The **mean** ($206,180) is **3.1 times the median** ($66,710). The 90th percentile earns **$742,310**; the 10th earns **$26,500** (BLS, 2025). When a mean is triple its median, you are looking at a **right-skewed distribution**, a small number of enormous earners dragging the average far above what a typical person in that job actually makes.

**So whenever someone quotes you the "average" salary of a professional athlete, they are quoting a number that almost no professional athlete earns.** The median is the honest one. This is a trick that will be played on you for the rest of your life, in every industry. Tennis just gives you an unusually clean example.

**How you actually become a coach.**

**Certification.** Two organizations dominate in the U.S., and one of them changed its name recently, so get this right:

- **RSPA, the Racquet Sports Professionals Association.** This is the organization founded in **1927** as the **USPTA** (United States Professional Tennis Association). It **rebranded to RSPA on 16 September 2024** and now covers tennis, pickleball, padel, squash, and platform tennis. Over **14,000 members** (Racquet Sports Professionals Association [RSPA], n.d.). *If a website or an older adult says "USPTA," they mean RSPA.*
- **PTR, the Professional Tennis Registry.** A presence in **125 countries** and over **16,000 members**. Its **Level 1 Certification** is the entry-level credential, and the pathway is: register → complete pre-course requirements (**Safe Play, background check, First Aid/CPR**) → attend workshops → pass a **skills** assessment and a **written** assessment (Professional Tennis Registry [PTR], n.d.).

**And here is a distinction almost nobody knows.** **The USTA does not certify coaches.** It **accredits the organizations that do.** In the USTA's own words: *"'Accreditation' is an evaluation process where an entity (e.g., the USTA) defines standards… whereas 'certification' is a process by which an organization grants recognition of competence to an individual"* (United States Tennis Association [USTA], n.d.-d). Accreditation is **voluntary and free of charge**.

Sit with that for a second, because it's a general lesson about how industries are actually structured: **the governing body sets the standard; independent organizations sell the credential; the coach buys it.** Understanding who certifies whom, and who profits at each layer, is a skill that transfers to every professional field you will ever enter.

**Safe Play is not optional.** Any adult with regular contact with or authority over minor athletes in USTA programs, events, or tournaments must have **Safe Play Approval**, which requires **three** things: a **criminal background check**, acknowledgement of the **USTA Safe Play Policy**, and mandatory **U.S. Center for SafeSport training**. The training and policy acknowledgement are **annual**; the background screening is **every two years** (USTA, n.d.-e).

If you want to coach kids, this is the first door, and it is a locked one. Start here, not with your forehand.

:::reveal The BLS says the MEAN wage for athletes and sports competitors is $206,180 but the MEDIAN is $66,710. What does that gap tell you, and which number should you trust? ||| The mean is **3.1× the median**, which is the signature of a **right-skewed distribution**: a small number of superstar earners (90th percentile: $742,310) drag the *average* far above what a typical person in the job actually makes. **Trust the median.** Whenever someone quotes the "average" salary of a professional athlete, they're quoting a number almost no professional athlete earns.

## Sources
- Bureau of Labor Statistics. (2025). *Occupational employment and wage statistics: Coaches and scouts (27-2022); Athletes and sports competitors (27-2021)*. U.S. Department of Labor. https://www.bls.gov/oes/current/oes272022.htm
- Professional Tennis Registry. (n.d.). *Certification*. https://www.ptrtennis.org/certification/
- Racquet Sports Professionals Association. (n.d.). *RSPA vs PTR vs USTA*. https://rspa.net/rspa-vs-ptr-vs-usta/
- United States Tennis Association. (n.d.-d). *USTA coaching accreditation program*. https://www.usta.com/en/home/about-usta/who-we-are/national/usta-coaching-accreditation-program.html
- United States Tennis Association. (n.d.-e). *Safe Play*. https://www.usta.com/en/home/safe-play.html`,
    },
    {
      slug: "tennis-the-racquet-trade",
      title: "36 · The racquet trade: stringing as a real business",
      section: "Section 8 · Opportunities for entrepreneurs",
      body: `Every single player in every match you have ever watched is holding a piece of equipment that a **person had to build by hand**, and that **fails on a schedule**.

Strings break. Strings also lose tension even when they don't break, which means serious players restring on a *calendar*, not on failure. The old coaching rule of thumb, restring as many times per year as you play per week, is a rule of thumb, not a law, but the underlying economics are real: **a recurring, non-optional service, purchased repeatedly by the same customer, for as long as they play the sport.**

That is a **subscription business** wearing a tracksuit. And it's one of the very few businesses a high school student can actually start.

**Why it's a genuine entry point:**

- **The capital cost is a machine**, not a building, not a lease, and not a payroll.
- **The customers already exist and are standing next to you**, your team, your opponents' teams, the adults in the USTA League at your local courts (Section 6: 320,000+ of them a year).
- **You can learn it to a professional standard while you're still in school**, and the credential is real.

**The credential.** The **U.S. Racquet Stringers Association (USRSA)** certifies at three levels (U.S. Racquet Stringers Association [USRSA], n.d.):

| Certification | What it covers |
| --- | --- |
| **PRA**, Professional Racquet Advisor | For coaches and shop staff who **advise** on racquet and string technology but don't do the service work. |
| **CS**, Certified Stringer | Proficiency in stringing and servicing racquets. |
| **MRT**, **Master Racquet Technician** | The top credential: grommet and string installation, regripping, handle sizing, and **customizing weight, balance, and swingweight**, plus advanced knowledge of current frame and string technology. |

Certified members must **maintain USRSA membership and pass an annual test** on manufacturers' current technologies (USRSA, n.d.). That annual re-test is worth noticing: it tells you the knowledge **decays**, which is precisely why the credential retains value.

**Look at what an MRT actually is.** "Customizing weight, balance, and swingweight" is not stringing. That is a **racquet technician** modifying a professional's instrument to spec. It is a skilled trade, it is portable to any tournament on Earth, and (usefully) the **2025 US Open provided competitors with free stringing of up to five racquets per round** (US Open, 2025), which tells you exactly how essential tournaments consider that labor to be.

**The honest caveat, because this course doesn't guess.** The USRSA does **not** publish its exam fees or membership dues publicly, so this lesson will not invent a number for what certification costs or what a stringer earns. **Look it up before you commit money.** That instinct, refusing to act on a figure you cannot source, is worth more than any number this lesson could have printed.

:::reveal Why is racquet stringing structurally a good first business, and what is the top USRSA credential? ||| Because it's a **recurring, non-optional service**: strings break, and they lose tension even when they don't, so serious players restring on a schedule, the same customer, buying again, for as long as they play. It's a subscription business with a **machine** as its only real capital cost, and the customers are already standing next to you. The top credential is the **MRT (Master Racquet Technician)**, which covers not just stringing but **customizing a racquet's weight, balance, and swingweight**, a genuine skilled trade.

## Sources
- U.S. Racquet Stringers Association. (n.d.). *Types of certification*. https://www.racquettech.com/certification/types.php
- US Open. (2025, August 6). *2025 US Open prize money sets record for largest purse in tennis history*. https://www.usopen.org/en_US/news/articles/2025-08-06/2025_us_open_prize_money_sets_record_for_largest_purse_in_tennis_history.html`,
      recallContent: [
        {
          prompt: "How many coaching jobs are there compared with athlete jobs, per the BLS?",
          answer:
            "About 248,950 coaches and scouts vs. about 15,070 athletes and sports competitors, roughly sixteen times more coaching jobs than athlete jobs, across all sports.",
        },
        {
          prompt: "Does the USTA certify tennis coaches?",
          answer:
            "No. It ACCREDITS the organizations that certify coaches (like RSPA and PTR). Accreditation is voluntary and free. The governing body sets the standard; independent organizations sell the credential.",
        },
      ],
    },
    {
      slug: "tennis-officiating",
      title: "37 · Officiating: the career ladder nobody mentions",
      section: "Section 8 · Opportunities for entrepreneurs",
      body: `Every match needs officials. Almost nobody tells students that officiating is a **structured international career** with a published ladder you can climb, starting at your local junior tournament and ending, in principle, in the chair at a Grand Slam final.

**The ITF's ladder.** The ITF runs officiating schools at **four levels** (International Tennis Federation [ITF], n.d.-e):

| Level | Badge |
| --- | --- |
| National | *(national certification)* |
| **Level 1** | **Green Badge** |
| **Level 2** | **White Badge** |
| **Level 3** | **Bronze → Silver → Gold Badge** |

**Bronze, Silver, and Gold are the international badges**, these are the officials at the Grand Slams and on the ATP and WTA tours. Promotion to Silver and Gold is decided at an **end-of-year re-certification meeting** by a panel of the **Joint Certification Programme**, run by the ITF, ATP, WTA, and the Grand Slams together (ITF, n.d.-e).

*(Note the correction to a common mistake: the ladder starts with a **Green** badge, below White. People routinely list it as "white, bronze, silver, gold" and drop the first rung.)*

**Three distinct jobs, not one.** ITF certification covers the **Chair Umpire**, the **Chief Umpire**, and the **Referee**, different roles with different responsibilities. (Green Badge is offered only for Chair Umpire certification.) The chair umpire runs the match. The referee runs the *tournament* and is the final authority on questions of tennis law.

**Why this is worth your attention right now:**

1. **You can start as a teenager.** Local and junior tournaments need officials constantly, and that is the first rung.
2. **It pays, and it travels.** A badged international official works tournaments around the world.
3. **The job just got more interesting, not less.** You might assume electronic line calling (Section 1, Lesson 5) is killing officiating. Look again at what actually happened at **Wimbledon 2025**: Live ELC replaced the **line umpires' out/fault calls**, and the tournament kept roughly **70 officials on site**, redeployed as "match assistants" to support the umpires and step in during technical outages. **The chair umpire did not go anywhere.** The technology took the single most mechanical task in officiating and left every judgment-based task, code violations, hindrance, time violations, crowd management, deciding whether a player is being unreasonable, exactly where it was.

That is a pattern you should learn to recognize, because you are going to spend your whole career watching it happen: **automation eats the measurable task first, and leaves the judgment.** The correct response is not to avoid the field. It is to **move up the ladder toward the judgment.**

**And the ITF still publishes rules for it.** The 2026 rulebook contains full **Electronic Review Procedures**, including the rule that a player gets **three unsuccessful appeals per set**, for tournaments where a review system is used (ITF, 2026, Appendix VII). Somebody has to know those rules cold. That somebody gets paid.

:::reveal What are the ITF's officiating badge levels, in order, and why hasn't electronic line calling eliminated the job? ||| **National → Green Badge (Level 1) → White Badge (Level 2) → Bronze, Silver, Gold (Level 3).** Bronze/Silver/Gold are the international badges worked at Slams and on tour. ELC hasn't eliminated officiating because it only replaced the **out/fault line calls**, the single most *mechanical* task. Wimbledon 2025 kept ~70 officials on site as "match assistants," and the **chair umpire** still handles every judgment call: code violations, hindrance, time violations, crowd management. Automation eats the measurable task first and leaves the judgment.

## Sources
- International Tennis Federation. (n.d.-e). *Officiating FAQs*. https://www.itftennis.com/en/about-us/organisation/faqs/?type=officiating
- International Tennis Federation. (2026). *ITF rules of tennis 2026* (Appendix VII: Role of court officials). https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf
- Wimbledon. (2025, July 3). *The precision operation: Introducing electronic line calling*. https://www.wimbledon.com/en_GB/news/articles/2025-07-03/the_precision_operation_introducing_electronic_line_calling.html`,
      recallContent: [
        {
          prompt: "What are the three USRSA certification levels?",
          answer:
            "PRA (Professional Racquet Advisor, advises but doesn't service), CS (Certified Stringer), and MRT (Master Racquet Technician, the top credential, including customizing weight, balance, and swingweight).",
        },
        {
          prompt: "Why does the USRSA require certified members to pass an ANNUAL test?",
          answer:
            "Because knowledge of current frame and string technology decays, manufacturers keep changing it. That's exactly why the credential holds its value.",
        },
      ],
    },
    {
      slug: "tennis-courts-clubs-pickleball",
      title: "38 · Courts, clubs, and the pickleball squeeze",
      section: "Section 8 · Opportunities for entrepreneurs",
      body: `Tennis is played on a **physical asset that somebody owns**. Follow the asset and you find the business.

**The demand is real and growing.** U.S. tennis participation hit **27.3 million players in 2025**, a sixth consecutive year of growth and **up 54% since 2019** (United States Tennis Association [USTA], 2026). The USTA has stated a goal of **35 million players by 2035**.

**But so is the competition, for the same concrete.** Pickleball had **24.3 million U.S. players in 2025**, up from **4.2 million in 2020**, making it the nation's fastest-growing sport for five consecutive years (Sports & Fitness Industry Association [SFIA], 2026).

Put those two side by side:

| Sport | U.S. players, 2025 |
| --- | --- |
| Tennis | 27.3 million |
| Pickleball | 24.3 million |

**Two sports of nearly equal size, and a fixed number of courts.** A tennis court can be re-lined into **four** pickleball courts. Pickleball is louder. Both communities want the same municipal budget. **This is a genuine, documented conflict, not a culture-war invention**, the USTA's Southern section publishes a document literally titled *"Facing the Challenge, Tennis and Pickleball: It Doesn't Have to be a Battle."*

And it produces real outcomes with real money attached. In **September 2025, the City of Boise settled a lawsuit and announced it would convert pickleball courts at two city parks back to tennis-only**, over noise complaints (City of Boise, 2025).

**Why an entrepreneur should care.** Court supply is now a **contested, politically live resource** in most American towns, which means it is a market with a shortage, a policy fight, and public money moving through it. That is not a reason to despair. **That is a description of an opportunity.**

**There is public money.** The USTA's facility grant program funds **up to 50% of total project cost** for court construction and resurfacing, with grant maxima scaling by court count, and it **requires the facility to be open to the public** to qualify (USTA, 2025). The USTA committed an **additional $10 million** toward courts and facility infrastructure in February 2025.

Read the conditions again, because they are the actual business lesson: **the money is available, it is matched, and it is contingent on public access.** Somebody in your town has to write that application. It could be you.

**What this course refuses to tell you.** You will find websites confidently quoting "the cost to build a tennis court." **This lesson will not**, because the authoritative body, the **American Sports Builders Association**, which publishes the actual *Tennis Court Construction Guidelines*, **does not publish a price** (American Sports Builders Association [ASBA], n.d.). Costs vary by site, surface, drainage, region, and year. Every specific figure you find online is from a lead-generation site trying to sell you something.

So the honest instruction is: **the ASBA sets the standards; get real quotes from builders who follow them.** Anyone who gives you a confident national average for a construction project is not helping you.

:::reveal Tennis had 27.3 million U.S. players in 2025 and pickleball had 24.3 million. Why is that a business fact and not just a trivia fact? ||| Because both sports need the **same finite court supply**, and a single tennis court can be re-lined into four pickleball courts. That makes courts a **contested, politically live resource** in most American towns: a shortage, a policy fight, and public money moving through it (the USTA funds up to 50% of court projects, contingent on public access). A shortage with public funding attached is a description of an **opportunity**, and somebody has to write the grant application.

## Sources
- American Sports Builders Association. (n.d.). *Tennis court construction guidelines*. https://sportsbuilders.org/page/TennisConstructionGuidelines
- City of Boise. (2025, September). *City of Boise settles lawsuit; pickleball courts at two city parks transitioning back to tennis only*. https://www.cityofboise.org/news/parks-and-recreation/2025/september/city-of-boise-settles-lawsuit-pickleball-courts-at-two-city-parks-transitioning-back-to-tennis-only/
- Sports & Fitness Industry Association. (2026, June 4). *SFIA releases 2026 pickleball single sport report*. https://sfia.org/resources/sfia-releases-2026-pickleball-single-sport-report-team-sports-reports-to-follow/
- United States Tennis Association. (2025). *Facility grant program*. https://www.usta.com/content/dam/usta/2025-pdfs/facility-grant-one-pager.pdf
- United States Tennis Association. (2026, February 18). *Tennis participation continues to surge with six consecutive years of growth*. https://www.usta.com/en/home/stay-current/national/tennis-participation-continues-to-surge-with-six-consecutive-yea.html`,
      recallContent: [
        {
          prompt: "What are the ITF officiating badge levels, in order?",
          answer:
            "National → Green Badge (Level 1) → White Badge (Level 2) → Bronze, Silver, Gold (Level 3). Bronze/Silver/Gold are the international badges.",
        },
        {
          prompt: "Why hasn't electronic line calling eliminated the chair umpire's job?",
          answer:
            "ELC only replaced the out/fault line calls, the most mechanical task. Every judgment call (code violations, hindrance, time violations, crowd management) stays with the chair umpire. Automation eats the measurable task first and leaves the judgment.",
        },
      ],
    },
    {
      slug: "tennis-building-a-tennis-business",
      title: "39 · Building a business in tennis: putting it together",
      section: "Section 8 · Opportunities for entrepreneurs",
      body: `You now have every piece. Let's assemble them.

**The core insight of this whole section, in one line: the money in tennis is not mostly in *playing* tennis.** Roughly **96% of professional players lose money** (Lesson 32). Meanwhile there are **sixteen times more coaching jobs than athlete jobs** (Lesson 35), **27.3 million American players** who all need courts, strings, lessons, and organized competition (Lesson 38), and a **national league with 320,000 adults in it** (Section 6).

The players are the *product*. The **sport is the market.**

**Five businesses a person can actually start, ranked by capital required:**

| Business | Capital needed | The credential | What it sells |
| --- | --- | --- | --- |
| **Stringing** | A machine | USRSA **CS** → **MRT** | A recurring, non-optional service |
| **Officiating** | Almost none | ITF **Green → White → Bronze/Silver/Gold** | Judgment that automation didn't take |
| **Coaching** | Almost none | **PTR** Level 1 or **RSPA** | Time, expertise, and Safe Play clearance |
| **Programming** (clinics, camps, junior leagues) | Court time | Safe Play + a certification | Organized competition for other people |
| **Facilities** | Serious money, but the USTA funds up to **50%** |, | The asset everything else runs on |

**Notice something about that table.** The first three columns are within reach of a high school student **this year**. Not "someday." You could be a Certified Stringer and a certified official before you graduate, and both of those pay.

**Three things that make a tennis business different from a lemonade stand:**

1. **The customer is a repeat customer by the structure of the sport.** Strings break on a schedule. Lessons are weekly. Leagues run seasons. You are not chasing one-time transactions, which is exactly why the economics work at small scale.
2. **The credentials are cheap relative to the professions they gate.** Compare the cost of a PTR Level 1 or a USRSA certification to a four-year degree. This is one of the lowest-barrier skilled trades available to a teenager.
3. **The market is growing and under-supplied.** Six consecutive years of participation growth, a court shortage, and a governing body actively handing out matching grants.

**Now the discipline.** This course has cited every number it gave you, and it has **refused to give you several**, the cost of building a court, the annual cost of junior development, what a stringer earns, because **no authoritative source publishes them**. Take that seriously as a business habit, not just a school rule:

- **Where a governing body publishes a figure, use it.** The ITF's break-even ranking. The BLS median wage. The NFHS participation count. The USTA's grant terms.
- **Where nobody publishes a figure, go and get quotes.** Don't trust a website whose business model is selling you a lead.
- **And always ask who benefits from the number you're being shown.** An academy quoting you the *mean* professional salary, $206,180, instead of the *median*, $66,710, is not lying. It is selecting. Learning to catch that is worth more than any single fact in this course.

**One last thought, and it's the reason this section exists at all.** The people you met in Section 5 were not just players. **Gladys Heldman published a magazine and ran a tournament.** The **Original 9 signed contracts.** **Billie Jean King founded an organization and a league.** **Arthur Ashe built the players' union that still runs men's tennis.** They changed tennis not because they hit the ball hardest, but because they understood **how the business worked**, and were willing to build a different one.

You are being handed the same information they had to fight to assemble.

:::reveal The course argues that "the money in tennis is not mostly in playing tennis." What's the evidence, and what does it imply about where an entrepreneur should look? ||| The evidence: roughly **96% of professional players lose money**; there are **~16× more coaching jobs than athlete jobs** (248,950 vs 15,070); there are **27.3 million U.S. players** who need courts, strings, lessons, and organized competition; and USTA League alone has **320,000+ adults** a year. The implication: **the players are the product; the sport is the market.** An entrepreneur should look at the recurring services the 27 million need, stringing, coaching, officiating, programming, facilities, not at the lottery ticket 14,000 people are buying.

## Sources
- Bureau of Labor Statistics. (2025). *Occupational employment and wage statistics: Coaches and scouts (27-2022); Athletes and sports competitors (27-2021)*. U.S. Department of Labor. https://www.bls.gov/oes/current/oes272022.htm
- Independent Review Panel. (2018). *Independent review of integrity in tennis: Final report*. International Tennis Integrity Agency. https://www.itia.tennis/media/bjuateer/irp-report-final.pdf
- United States Tennis Association. (2026, February 18). *Tennis participation continues to surge with six consecutive years of growth*. https://www.usta.com/en/home/stay-current/national/tennis-participation-continues-to-surge-with-six-consecutive-yea.html`,
      recallContent: [
        {
          prompt: "Why won't this course tell you the cost of building a tennis court?",
          answer:
            "Because the authoritative body (the American Sports Builders Association) publishes construction STANDARDS but no price. Every confident figure online comes from a lead-generation site. The honest instruction is to get real quotes from builders who follow ASBA standards.",
        },
        {
          prompt: "What does the USTA facility grant program fund, and what's the catch?",
          answer:
            "Up to 50% of a court project's total cost, but the facility must be open to the PUBLIC to qualify. Somebody has to write the application.",
        },
      ],
    },
    {
      slug: "tennis-exercise",
      title: "40 · Practice: name the concept",
      section: "Section 8 · Opportunities for entrepreneurs",
      exercise: {
        instructions:
          "Fill in each blank with the term or number from this course, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "The body that publishes the Rules of Tennis is the ___ (three letters).",
            answer: "ITF",
            accept: ["itf", "international tennis federation", "world tennis"],
            explanation:
              "The International Tennis Federation, now rebranding as 'World Tennis' (trading name adopted 1 January 2026).",
          },
          {
            prompt: "When both players have won three points, the score is called ___.",
            answer: "deuce",
            explanation: "Not 40-40. From Deuce you must win two consecutive points (ITF Rule 5a).",
          },
          {
            prompt: "A serve that touches the net, strap, or band and is otherwise good is a ___ (ITF Rule 22).",
            answer: "let",
            accept: ["service let", "a let"],
            explanation: "You serve that one again, and a service let does NOT cancel a previous fault.",
          },
          {
            prompt: "The net is 3 feet high at the center and 3½ feet at the posts, which is why the ___-court ball is the geometrically safer shot.",
            answer: "cross",
            accept: ["cross-court", "crosscourt", "cross court"],
            explanation:
              "It travels over the lowest part of the net and along a longer diagonal, more margin in both dimensions.",
          },
          {
            prompt: "In 1968 the ILTF approved ___ tennis, ending the rule that amateurs and professionals couldn't compete against each other.",
            answer: "open",
            explanation: "Voted 30 March 1968 in Paris; the first open tournament was at Bournemouth from 22 April 1968.",
          },
          {
            prompt: "The organization founded in 1916 because the USLTA barred Black players was the American Tennis ___.",
            answer: "Association",
            accept: ["association", "ata"],
            explanation: "The ATA, the oldest African American sports organization in the U.S. It produced both Althea Gibson and Arthur Ashe.",
          },
          {
            prompt: "In 1956 Althea Gibson won the ___ Championships, the first Grand Slam title won by a Black player.",
            answer: "French",
            accept: ["french", "roland-garros", "roland garros"],
            explanation: "She then won Wimbledon and the U.S. Nationals in both 1957 and 1958.",
          },
          {
            prompt: "The nine players who signed $1 contracts in September 1970 to launch women's professional tennis are known as the Original ___.",
            answer: "9",
            accept: ["nine", "original 9", "original nine"],
            explanation:
              "The $1 contract was a legal device: it made them contract professionals, shielding the Houston Racquet Club from USLTA sanctions.",
          },
          {
            prompt: "The first Grand Slam to pay equal prize money did so in the year ___.",
            answer: "1973",
            explanation:
              "The US Open, $25,000 to each singles champion, after Billie Jean King threatened a boycott and Bristol-Myers funded the difference.",
          },
          {
            prompt: "The LAST Grand Slam to pay equal prize money did so in the year ___.",
            answer: "2007",
            explanation:
              "Wimbledon (and Roland-Garros across the full draw). 34 years after the US Open. The Australian Open went equal in 1984 and then went backwards.",
          },
          {
            prompt: "Ranking points on the ATP and WTA tours last exactly ___ weeks before dropping off.",
            answer: "52",
            accept: ["52 weeks", "fifty-two"],
            explanation: "A rolling system, you must defend your points every year. Nothing is ever banked.",
          },
          {
            prompt: "Of roughly 14,000 professional tennis players, only about ___ hundred earn enough prize money to cover their costs.",
            answer: "6",
            accept: ["six", "600", "6 hundred"],
            explanation:
              "About 600, per the ITF, and that excludes coaching costs. Roughly 96% of professional players lose money.",
          },
          {
            prompt: "The BLS counts about 249,000 coaches and scouts but only about 15,000 athletes, roughly ___ times more coaching jobs.",
            answer: "16",
            accept: ["sixteen", "16x", "15", "fifteen"],
            explanation: "Which is the entire thesis of Section 8: the players are the product; the sport is the market.",
          },
          {
            prompt: "The top USRSA stringing credential, which includes customizing a racquet's weight, balance, and swingweight, is the ___ (three letters).",
            answer: "MRT",
            accept: ["mrt", "master racquet technician"],
            explanation: "Below it sit CS (Certified Stringer) and PRA (Professional Racquet Advisor).",
          },
          {
            prompt: "The first international ITF officiating badge above National level is the ___ Badge.",
            answer: "Green",
            accept: ["green"],
            explanation: "The ladder runs National → Green → White → Bronze → Silver → Gold. People routinely forget the Green rung.",
          },
        ],
      },
    },
    {
      slug: "tennis-quiz-entrepreneurs",
      title: "41 · Quiz: opportunities for entrepreneurs",
      section: "Section 8 · Opportunities for entrepreneurs",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Per the BLS, roughly how many coaching jobs are there compared with athlete jobs?",
            options: [
              "About the same number of each",
              "16 times more coaching jobs",
              "About 3 times more athlete jobs",
              "About 100 times more athlete jobs",
            ],
            correctIndex: 1,
            explanation: "This ratio is the whole thesis of Section 8: the players are the product; the sport is the market.",
            sourceLessonSlug: "tennis-coaching-and-certification",
          },
          {
            prompt:
              "For athletes and sports competitors, the BLS mean wage is $206,180 and the median is $66,710. What does that tell you?",
            options: [
              "The data is wrong",
              "Right-skewed, a few stars pull the mean up",
              "Most athletes earn about $206,180",
              "It means athletes are underpaid relative to coaches",
            ],
            correctIndex: 1,
            explanation:
              "The 90th percentile earns $742,310; the 10th earns $26,500. When someone quotes the 'average' athlete salary, they're quoting a number almost no athlete earns.",
            sourceLessonSlug: "tennis-coaching-and-certification",
          },
          {
            prompt: "What happened to the USPTA?",
            options: [
              "It merged into the USTA in 2024",
              "It shut down completely in 2024",
              "It rebranded as the RSPA in 2024",
              "It was absorbed by the rival PTR",
            ],
            correctIndex: 2,
            explanation: "Founded in 1927 as the USPTA. Over 14,000 members. If an older source says 'USPTA,' it means RSPA.",
            sourceLessonSlug: "tennis-coaching-and-certification",
          },
          {
            prompt: "Does the USTA certify tennis coaches?",
            options: [
              "Yes, it is the only body that can",
              "No, it accredits the certifiers",
              "Yes, but only for junior coaches",
              "No, nobody certifies tennis coaches",
            ],
            correctIndex: 1,
            explanation:
              "The governing body sets the standard; independent organizations (RSPA, PTR) sell the credential; the coach buys it. Knowing who certifies whom, and who profits at each layer, transfers to every profession.",
            sourceLessonSlug: "tennis-coaching-and-certification",
          },
          {
            prompt: "What three things does USTA Safe Play Approval require?",
            options: [
              "A tennis rating, a résumé, and references",
              "Background check, policy sign-off, and training",
              "A college degree, a certification, and insurance",
              "Only a background check",
            ],
            correctIndex: 1,
            explanation:
              "Required for any adult with regular contact with or authority over minor athletes. Training and policy acknowledgement are annual; background screening is every two years. If you want to coach kids, this is the first door.",
            sourceLessonSlug: "tennis-coaching-and-certification",
          },
          {
            prompt: "Why is racquet stringing structurally a good first business?",
            options: [
              "It requires a large building and staff",
              "A recurring, non-optional service",
              "It has no competition anywhere",
              "It requires a four-year degree",
            ],
            correctIndex: 1,
            explanation:
              "A subscription business wearing a tracksuit. The only real capital cost is a machine, and the customers are already standing next to you.",
            sourceLessonSlug: "tennis-the-racquet-trade",
          },
          {
            prompt: "What is the top USRSA credential, and what does it uniquely cover?",
            options: [
              "CS (Certified Stringer), basic stringing only",
              "PRA (Professional Racquet Advisor), advising on technology",
              "MRT (Master Racquet Technician), full customizing",
              "There is only one USRSA credential",
            ],
            correctIndex: 2,
            explanation:
              "That's not stringing, that's a racquet technician modifying a professional's instrument to spec. A skilled trade, portable to any tournament on Earth.",
            sourceLessonSlug: "tennis-the-racquet-trade",
          },
          {
            prompt: "What are the ITF's officiating badge levels, in order?",
            options: [
              "White → Bronze → Silver → Gold",
              "National → Green → White → Bronze → Silver → Gold",
              "Bronze → Silver → Gold → Platinum",
              "Level 1 → Level 2 → Level 3, with no badges",
            ],
            correctIndex: 1,
            explanation:
              "People routinely drop the Green rung. Bronze, Silver, and Gold are the international badges, the officials at Slams and on tour.",
            sourceLessonSlug: "tennis-officiating",
          },
          {
            prompt: "Why hasn't electronic line calling eliminated the officiating career?",
            options: [
              "Because ELC is only used at Roland-Garros",
              "ELC replaced only line calls, not judgment",
              "Because the ITF banned it",
              "It has eliminated it, there are no officials left",
            ],
            correctIndex: 1,
            explanation:
              "Wimbledon 2025 kept ~70 officials on site as 'match assistants.' Automation eats the measurable task first and leaves the judgment. The correct response is to move up the ladder toward the judgment.",
            sourceLessonSlug: "tennis-officiating",
          },
          {
            prompt: "How many U.S. tennis players and pickleball players were there in 2025?",
            options: [
              "Tennis 27.3 million, pickleball 24.3 million",
              "Tennis 5 million, pickleball 40 million",
              "Tennis 50 million, pickleball 2 million",
              "Tennis 10 million, pickleball 10 million",
            ],
            correctIndex: 0,
            explanation:
              "Two sports of nearly equal size, competing for the same finite court supply. A tennis court can be re-lined into four pickleball courts.",
            sourceLessonSlug: "tennis-courts-clubs-pickleball",
          },
          {
            prompt: "What does the USTA's facility grant program fund, and what is the condition?",
            options: [
              "100% of costs, with no conditions",
              "Up to 50%, if open to the public",
              "Only private club renovations",
              "Only professional tournament venues",
            ],
            correctIndex: 1,
            explanation:
              "Matching money, contingent on public access. The USTA committed an additional $10 million toward courts in February 2025. Somebody has to write the application.",
            sourceLessonSlug: "tennis-courts-clubs-pickleball",
          },
          {
            prompt: "Why does this course refuse to state the cost of building a tennis court?",
            options: [
              "Because it's kept a secret",
              "The ASBA sets standards, not prices",
              "Because tennis courts are free to build",
              "Because the USTA strictly forbids it",
            ],
            correctIndex: 1,
            explanation:
              "Refusing to act on a figure you cannot source is a business habit, not just a school rule. Get real quotes from builders who follow ASBA standards.",
            sourceLessonSlug: "tennis-courts-clubs-pickleball",
          },
          {
            prompt: "Which of these tennis businesses requires the LEAST capital to start?",
            options: ["Building a facility", "Officiating", "Buying a tennis club", "Running a residential academy"],
            correctIndex: 1,
            explanation:
              "Officiating and coaching require almost no capital. Stringing requires a machine. Facilities require serious money, though the USTA will fund up to 50%.",
            sourceLessonSlug: "tennis-building-a-tennis-business",
          },
          {
            prompt: "What is the core argument of Section 8?",
            options: [
              "Everyone should try to turn professional",
              "The money isn't in playing tennis",
              "Tennis is a dying industry",
              "Only wealthy people can work in tennis",
            ],
            correctIndex: 1,
            explanation:
              "96% of pros lose money, but there are 16× more coaching jobs than athlete jobs and 27.3 million American players who need courts, strings, lessons, and organized competition.",
            sourceLessonSlug: "tennis-building-a-tennis-business",
          },
          {
            prompt:
              "The course points out that Gladys Heldman, the Original 9, Billie Jean King, and Arthur Ashe changed tennis. What does it say they had in common?",
            options: [
              "They all won the Wimbledon title",
              "They grasped how the business worked",
              "They were all coached by the same person",
              "They all played tennis left-handed",
            ],
            correctIndex: 1,
            explanation:
              "They changed the sport not because they hit the ball hardest, but because they understood its structure. You're being handed the information they had to fight to assemble.",
            sourceLessonSlug: "tennis-building-a-tennis-business",
          },
        ],
      },
    },
  ],
};
