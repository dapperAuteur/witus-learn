// Authored "Pickleball: Play It, Question It, Build With It" — a full course covering how to
// play, strategy, history, rules, leagues, and (the WitUS angle a generic sports course skips)
// the real opportunities for amateurs and entrepreneurs in the fastest-growing sport in the U.S.
//
// Two authoring traps this course is built to survive:
//
//  1. THE RULES CHANGE EVERY YEAR. USA Pickleball revises its rulebook annually, and the 2026
//     edition RENUMBERED nearly everything (the 2025 serve-fault rule 4.M.4 is the 2026 rule
//     7.E.1). So every rule number in this course is cited to the *2026 USA Pickleball Official
//     Rulebook*, by year, verified against the actual PDF at
//     https://usapickleball.org/docs/rules/USAP-Official-Rulebook.pdf. No rule number is asserted
//     from memory. Where a concept is taught without a rule number, that is deliberate.
//
//  2. THE ORIGIN STORY IS CONTESTED. The "named after a dog named Pickles" story is DISPUTED, not
//     settled — and the governing body's rebuttal (the dog was born in 1968) rests on undocumented
//     family testimony. The course teaches the dispute, not a winner, and uses it as a source-
//     evaluation lesson.
//
// Growth numbers are SFIA's own published figures (not the conflicting series circulating on
// aggregator sites). Every statistic carries a year and a named source or it is not stated.
//
// Sectioned (six collapsible modules), a 15-question quiz bank per section (the serving layer caps
// attempts at 10 and draws a random subset, so a bank >10 is what makes rotation vary), :::reveal
// click-to-reveal checks, recall cards, and APA 7 in-line citations + a `## Sources` block per lesson.

import type { AuthoredCourse } from "./authored-course";

export const PICKLEBALL_COURSE: AuthoredCourse = {
  title: "Pickleball: Play It, Question It, Build With It",
  description:
    "Learn to actually play pickleball — the court, the serve, the kitchen, the two-bounce rule, and the strategy that wins points — then learn the parts most players never do: how to read a rulebook that changes every year, why the sport's famous origin story is disputed, how the leagues and rating systems really work, and where the genuine money and opportunity is for amateurs and entrepreneurs in courts, coaching, equipment, and events. Every rule is cited to the 2026 USA Pickleball Official Rulebook by number; every statistic carries a year and a source.",
  lessons: [
    // ── Section 1: How the Game Works ───────────────────────────────────────
    {
      slug: "pb-what-the-game-is",
      title: "1 · What pickleball actually is",
      section: "How the Game Works",
      body: `Pickleball is a paddle sport that borrows from three older games at once. The rulebook says so in its own first sentence: it "combines elements of badminton, table tennis, and tennis" (USA Pickleball, 2026, Section 1). You get badminton's court, table tennis's paddles and short exchanges, and tennis's net and scoring instincts — which is exactly why it feels familiar to almost everybody and mastered by almost nobody.

**The physical facts, from the rulebook, not from a blog:**

| Thing | Spec | Rule |
|---|---|---|
| Court | 20 ft × 44 ft (6.10 m × 13.41 m), same for singles and doubles | 3.A.1 |
| Net at the sidelines | 36 in ± 0.25 in | 3.B.6 |
| Net at the center | 34 in ± 0.25 in | 3.B.7 |
| Non-volley zone ("the kitchen") | 7 ft × 20 ft on each side of the net | 3.A.4.c |
| Paddle | length + width ≤ 24 in; length ≤ 17 in; **no thickness or weight limit** | 3.D.2, 3.D.3 |
| Ball | perforated plastic, one uniform color, from the approved list | 3.C |

Two of those numbers do real strategic work later, so notice them now. The net **sags two inches in the middle** — 34 in at the center, 36 in at the sidelines (USA Pickleball, 2026, Rules 3.B.6–3.B.7). And the paddle rules cap *size* but not *thickness* or *weight*, which is the opening that the entire modern paddle industry drove a truck through (Section 6).

The same court hosts singles and doubles, but **doubles is the real game**. Nearly all competitive pickleball — rec play, leagues, the pro tours' marquee events — is doubles. Learn doubles first.

**What makes it different from tennis, in one sentence each:**

- You must let the serve **bounce**, and the return **bounce**, before anyone may hit the ball out of the air (Rule 10.A). That single rule kills the serve-and-volley, and it is why pickleball is a game of soft touch rather than a serving contest.
- There is a **7-foot no-volley strip** at the net you may not be standing in when you hit a ball out of the air (Rule 11.A). That single rule kills the smash-from-the-net game, and it is why the sport rewards patience.
- The serve is **underhand and rule-constrained** (Rules 7.C, 7.D), so it is a way to start the point, not a weapon.

Strip those three rules out and you have slow tennis. Put them in and you have a genuinely different sport — one where a 15-year-old who has never played a racket sport can be competitive against experienced adults within a season. That last claim is the honest hook of this whole course, and Section 6 is about what you can do with it.

:::reveal Name the three rules that make pickleball a different sport from tennis rather than just a slower version of it. ||| (1) The two-bounce rule (Rule 10.A) — the serve and the return must each bounce, which eliminates serve-and-volley. (2) The non-volley zone / "kitchen" (Rule 11.A) — you may not be in contact with the 7-foot zone when you volley, which eliminates camping at the net to smash. (3) The constrained underhand serve (Rules 7.C, 7.D), which makes the serve a way to start a point rather than a weapon.

## Sources
- USA Pickleball. (2026). *2026 USA Pickleball official rulebook*, Section 1; Rules 3.A.1, 3.B.6–3.B.7, 3.C, 3.D.2–3.D.3, 3.A.4.c, 7.C, 7.D, 10.A, 11.A. https://usapickleball.org/docs/rules/USAP-Official-Rulebook.pdf`,
    },
    {
      slug: "pb-the-court-and-your-gear",
      title: "2 · The court, the paddle, and the ball",
      section: "How the Game Works",
      body: `Every rule in pickleball is really a rule about a **line**, so learn the lines before you learn the rules.

**The lines** (all from USA Pickleball, 2026, Rule 3.A.4):

- **Baselines** — the back lines, parallel to the net (3.A.4.a).
- **Sidelines** — the two lines running from net to baseline (3.A.4.b).
- **Non-volley zone line** — runs parallel to the net, **7 feet from it**, all the way across (3.A.4.c). The zone it bounds is the kitchen.
- **Centerline** — splits each side into a right and a left **service court**, running from the non-volley zone line to the baseline (3.A.4.d). Note what it does *not* do: it does not cross the kitchen.
- **Serving areas** — the ground *behind* the baseline, split right and left by an imaginary extension of the centerline (3.A.4.g). You serve from here, not from inside the court.

Two details that decide arguments:

1. **The lines that bound the kitchen are part of the kitchen** (Rule 3.A.4.c). Touch the kitchen line while volleying and you have faulted. There is no "on the line is fine" in the non-volley zone.
2. **A service court includes its baseline, sideline, and the centerline** (Rule 3.A.4.f). A serve landing on any of those lines is in. A serve landing on the **kitchen line** is a fault (Rule 7.E.2) — the one line that is *not* on your side of the argument.

**The paddle.** The rulebook is remarkably permissive about paddles and remarkably strict about paddle *surfaces*. Combined length + width may not exceed 24 in, and length may not exceed 17 in — but there is **no restriction on paddle thickness** and **no restriction on paddle weight** (Rules 3.D.2, 3.D.3). What *is* restricted is what the face can do to the ball. The hitting surface must not contain "holes, cracks, **delamination**, or indentations that break the paddle skin or surface," rough texturing, sandpaper characteristics, rubber, moving parts, or "any other objects or features that allow a player to impart excessive spin on the ball" (Rule 3.D.5). Hold on to the word **delamination**. It is a rule about physics, and it became the biggest business scandal in the sport (Section 6).

For sanctioned play, your paddle must be on the **USA Pickleball Approved Paddle List** and carry the "USA Pickleball Approved" seal (Rule 3.D.1). For your driveway, use whatever you like.

**The ball.** A perforated plastic ball, molded smooth, one uniform color, from USA Pickleball's approved list (Rules 3.C.1–3.C.5). Indoor and outdoor balls both exist and both are legal for either setting (Rule 3.C.1) — but they are not interchangeable in practice. The rulebook's own figure notes that the ball with **larger holes** is customarily used indoors and the one with **smaller holes** outdoors (USA Pickleball, 2026, Figure 3-2). Outdoor balls are harder and faster; indoor balls are softer and float. Play with the wrong one and everything you learned about timing is off by a beat.

:::reveal A serve lands exactly on the non-volley zone line. A different serve lands exactly on the centerline of the correct service court. Which is in, and which is a fault? ||| The one on the centerline is IN — a service court includes its adjacent baseline, sideline, and the centerline (Rule 3.A.4.f). The one on the non-volley zone line is a FAULT — the lines bounding the non-volley zone are part of the zone (Rule 3.A.4.c), and a served ball landing in the non-volley zone is a fault against the server (Rule 7.E.2).

## Sources
- USA Pickleball. (2026). *2026 USA Pickleball official rulebook*, Rules 3.A.4.a–3.A.4.g, 3.C.1–3.C.5, 3.D.1–3.D.5, 7.E.2, Figure 3-2. https://usapickleball.org/docs/rules/USAP-Official-Rulebook.pdf`,
      recallContent: [
        {
          prompt: "How big is a pickleball court, and how tall is the net?",
          answer:
            "20 feet by 44 feet, for both singles and doubles (Rule 3.A.1). The net is 36 inches at the sidelines and 34 inches at the center (Rules 3.B.6-3.B.7) — it sags two inches in the middle.",
        },
        {
          prompt: "What does the rulebook restrict about a paddle, and what does it NOT restrict?",
          answer:
            "It restricts size (length + width no more than 24 inches, length no more than 17 inches) and the properties of the hitting surface (no holes, cracks, delamination, rough texturing, rubber, or anything that imparts excessive spin). It does NOT restrict thickness or weight (Rules 3.D.2, 3.D.3, 3.D.5).",
        },
      ],
    },
    {
      slug: "pb-serving-and-the-score",
      title: "3 · Serving, and why the score has three numbers",
      section: "How the Game Works",
      body: `**Serving.** You stand behind the baseline in the correct serving area. At the moment you hit the serve, at least one foot must be touching the ground in that area, neither foot may be touching the court, and neither foot may be outside the serving area (USA Pickleball, 2026, Rules 7.A.1–7.A.3). You serve **diagonally**, and the ball must clear the opponent's non-volley zone and land in the correct service court (Rule 7.E). A serve that lands in the kitchen is a fault (Rule 7.E.2).

You have **two legal ways** to serve, and they are governed by different rules:

- **The volley serve** (Rule 7.C) — you strike the ball out of the air. Three constraints, all judged at the moment of contact: the paddle must be moving in a **clear upward arc** (7.C.1); the **highest point of the paddle head** must clearly not be above the highest part of your **wrist joint** (7.C.2); and the **ball** must clearly be no higher than your **waist** (7.C.3). Break any of the three and it is a fault (7.C.5).
- **The drop serve** (Rule 7.D) — you drop the ball, let it bounce, and hit it. Here is the part almost nobody knows: **the upward-arc, wrist, and waist constraints do not apply to a drop serve.** Rule 7.D lists its own requirements, and they are only that you release the ball from a natural (unaided) height (7.D.1) and do not propel it in any direction (7.D.2). There is **no restriction on how many times the ball bounces** before you hit it (7.D.3) and **no restriction on where it bounces** (7.D.4). If your volley serve keeps getting called, the drop serve is a legal, lower-risk answer.

**You may not pre-spin the ball.** On release, you must not "manipulate the ball to add spin with any part of the server's body or the paddle prior to hitting the ball" — though you may let it roll off the paddle face by gravity, and **spin may absolutely be applied to the ball upon contact by the paddle** (Rule 7.B.2). Get that distinction right: spinning the ball *with your fingers before you hit it* is illegal; putting spin on it *with the paddle when you hit it* is completely legal and is most of what good servers do.

**The score.** In doubles, the score is called as **three numbers**: serving team's score, receiving team's score, then the **server number** — 1 or 2 (Rule 6.B.2). Both players on a team serve before the serve passes to the other team (Rule 5.B). The first server serves, alternating right and left after each point won, until the team loses a rally; then the **second server** serves under the same terms, and losing that rally is a **side out** (Rules 5.B.5, 5.B.6).

So why does every game start "**zero – zero – two**"? Because of one deliberately unfair-sounding line: the starting server for the team that starts the game "is designated as a **second server** for the team's first service rotation of that game" (Rule 5.B.2). The first team gets only *one* server before losing the serve — otherwise starting would be a permanent advantage. Hence the score call "0-0-2" (Rule 6.B.2). You must call the **entire score before you hit the serve** (Rule 6.C), and you have **10 seconds** after the score call to serve (Rule 6.D).

:::reveal Your volley serve keeps getting called for the paddle head being above your wrist. Name a completely legal serve you could switch to that has no upward-arc, wrist, or waist requirement at all, and cite the rule. ||| The drop serve (Rule 7.D). You drop the ball, let it bounce, and hit it. Rule 7.D's only requirements are that you release the ball from a natural, unaided height (7.D.1) and do not propel it in any direction (7.D.2). There is no restriction on the number of bounces (7.D.3) or where it bounces (7.D.4), and the volley-serve constraints in 7.C.1-7.C.3 do not apply.

## Sources
- USA Pickleball. (2026). *2026 USA Pickleball official rulebook*, Rules 5.B, 5.B.2, 5.B.5–5.B.6, 6.B.2, 6.C, 6.D, 7.A.1–7.A.3, 7.B.2, 7.C.1–7.C.5, 7.D.1–7.D.6, 7.E, 7.E.2. https://usapickleball.org/docs/rules/USAP-Official-Rulebook.pdf`,
      recallContent: [
        {
          prompt: "Where must your feet be when you hit a serve?",
          answer:
            "At least one foot must be in contact with the ground inside the correct serving area (behind the baseline), neither foot may be touching the court, and neither foot may be touching the surface outside the serving area (Rules 7.A.1-7.A.3).",
        },
        {
          prompt: "Can you put spin on a serve?",
          answer:
            "Yes — with the paddle, at contact. That is explicitly legal. What is illegal is manipulating the ball to add spin with your hand, body, or paddle BEFORE you hit it (Rule 7.B.2). Pre-spin: no. Paddle spin at contact: yes.",
        },
      ],
    },
    {
      slug: "pb-shape-of-a-rally",
      title: "4 · The shape of a rally",
      section: "How the Game Works",
      body: `A pickleball point has a shape, and it is the same shape almost every time. Learn the shape and you will understand nine-tenths of what good players are doing.

**Shot 1 — the serve.** Deep, in the correct service court, safely. It is not a weapon (see Lesson 3). Its job is to push the returner back and start the point.

**Shot 2 — the return of serve.** The returner **must let it bounce** (Rule 10.A; a fault against the receiver if they don't — 10.A.1). Hit it deep, and then **run to the kitchen line**. That run is the single most important habit in the sport. You have the time because you just hit the ball deep; use it.

**Shot 3 — the third shot.** The serving team **must let the return bounce too** (Rule 10.A.2). This is the two-bounce rule doing its work: the serving team is stuck near their own baseline while the returning team is already at the net. The serving team is *behind* on shot three of every point they serve. The whole game is built on this asymmetry. Their job is to get to the net anyway — the **third-shot drop** (Section 3).

**Shots 4 through whatever — the kitchen exchange.** Once everyone has arrived at the non-volley zone line, both teams are eight feet apart with a 34-inch net between them. Now nobody can hit hard, because a hard ball from that close either goes into the net or comes back faster. So they **dink** — soft shots that land in the opponent's kitchen and bounce low. This looks like nothing is happening. What is happening is that each team is waiting for one ball to come up an inch too high.

**The last shot — the put-away.** Somebody pops one up. Somebody else hits it down. Point over.

**Two rules govern the exchange at the net:**

- **You may stand in the kitchen whenever you like** — as long as you are not **volleying**. The rule says "a player, or anything in contact with the player, may contact the non-volley zone at any time except during the act of volleying a ball" (Rule 11.A). Standing in the kitchen is legal. It is just usually stupid, because you cannot volley from there.
- **Momentum counts.** If you volley and your own momentum carries you into the kitchen — even *after the ball is dead* — it is a fault (Rule 11.A.2). And after you have been in the kitchen, you may not volley again until **both feet** have touched the surface completely outside it (Rule 11.A.3).

**A hint of the strategy to come.** Look at the net numbers again: 36 inches at the sidelines, **34 inches at the center** (Rules 3.B.6–3.B.7). The net is *lowest in the middle*. That is where the safest aggressive shot lives, and it is why "hit it down the middle" is real advice and not a cliché.

:::reveal Why is the serving team at a disadvantage on the third shot of every point they serve? ||| Because of the two-bounce rule (Rule 10.A). The receiving team must let the serve bounce, but then the SERVING team must also let the return of serve bounce (Rule 10.A.2) — which pins them near their own baseline while the returning team, having hit a deep return, has already run up to the kitchen line. The serving team starts every point behind, and the third-shot drop is their tool for fixing it.

## Sources
- USA Pickleball. (2026). *2026 USA Pickleball official rulebook*, Rules 3.B.6–3.B.7, 10.A, 10.A.1–10.A.2, 11.A, 11.A.2–11.A.3. https://usapickleball.org/docs/rules/USAP-Official-Rulebook.pdf`,
      recallContent: [
        {
          prompt: "After you return the serve, where should you go, and why do you have time to get there?",
          answer:
            "Run to the non-volley zone (kitchen) line. You have time because the serving team must let your return bounce (Rule 10.A.2), which pins them near their baseline while you advance.",
        },
        {
          prompt: "Is it legal to stand inside the kitchen?",
          answer:
            "Yes, at any time — except during the act of volleying (Rule 11.A). It is legal, just usually a bad idea, because you cannot hit a ball out of the air while in contact with the zone.",
        },
      ],
    },
    {
      slug: "pb-quiz-how-the-game-works",
      title: "5 · Quiz: How the game works",
      section: "How the Game Works",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are the dimensions of a pickleball court?",
            options: [
              "20 ft × 44 ft, the same for singles and doubles",
              "20 ft × 44 ft for singles, 24 ft × 44 ft for doubles",
              "27 ft × 78 ft, the same as a tennis court",
              "22 ft × 40 ft, the same for singles and doubles",
            ],
            correctIndex: 0,
            explanation:
              "Rule 3.A.1 of the 2026 USA Pickleball Official Rulebook: 20 feet wide by 44 feet long, for both singles and doubles. Unlike tennis, the court does not widen for doubles.",
            sourceLessonSlug: "pb-what-the-game-is",
          },
          {
            prompt: "How tall is the net at the sidelines, and how tall at the center?",
            options: [
              "36 in at the sidelines, 34 in at the center",
              "34 in at the sidelines, 36 in at the center",
              "36 in everywhere — the net is level",
              "42 in at the sidelines, 36 in at the center",
            ],
            correctIndex: 0,
            explanation:
              "Rules 3.B.6 and 3.B.7: 36 inches at the sidelines, 34 inches at the center. The net is two inches lower in the middle, which is why the middle is the safest place to hit an aggressive shot.",
            sourceLessonSlug: "pb-what-the-game-is",
          },
          {
            prompt: "How big is the non-volley zone?",
            options: [
              "7 ft × 20 ft on each side of the net",
              "7 ft × 44 ft on each side of the net",
              "10 ft × 20 ft on each side of the net",
              "5 ft × 20 ft on each side of the net",
            ],
            correctIndex: 0,
            explanation:
              "Rule 3.A.4.c: the non-volley zone is a 7-foot by 20-foot area adjacent to each end of the net — 7 feet deep, spanning the full 20-foot width of the court.",
            sourceLessonSlug: "pb-what-the-game-is",
          },
          {
            prompt: "Which of these does the rulebook NOT restrict about a paddle?",
            options: [
              "Its thickness and its weight",
              "Its combined length plus width",
              "Its overall length",
              "Whether its face has rough texturing",
            ],
            correctIndex: 0,
            explanation:
              "Rule 3.D.2 explicitly states there is no restriction on paddle thickness, and Rule 3.D.3 states there is no restriction on paddle weight. Length + width is capped at 24 in and length at 17 in, and Rule 3.D.5 heavily restricts the hitting surface.",
            sourceLessonSlug: "pb-the-court-and-your-gear",
          },
          {
            prompt: "A served ball lands exactly on the non-volley zone line. What is the call?",
            options: [
              "Fault against the server",
              "Good serve — lines are always in",
              "Replay the serve",
              "Fault against the receiver",
            ],
            correctIndex: 0,
            explanation:
              "Rule 3.A.4.c says all lines bounding the non-volley zone are part of the zone, and Rule 7.E.2 says a served ball landing in the non-volley zone is a fault against the server. The kitchen line is the one line that does not help you.",
            sourceLessonSlug: "pb-the-court-and-your-gear",
          },
          {
            prompt: "A served ball lands exactly on the centerline of the correct service court. What is the call?",
            options: [
              "Good serve — the service court includes its centerline",
              "Fault — the centerline is out on a serve",
              "Replay",
              "Good only if it also touched the net",
            ],
            correctIndex: 0,
            explanation:
              "Rule 3.A.4.f: the right and left service courts are bounded by AND INCLUDE their adjacent baseline, sideline, and the centerline. A serve on the centerline is in.",
            sourceLessonSlug: "pb-the-court-and-your-gear",
          },
          {
            prompt: "Which three requirements must a VOLLEY serve meet at the moment of contact?",
            options: [
              "Paddle moving in a clear upward arc; paddle head not above the wrist; ball no higher than the waist",
              "Paddle moving in a clear upward arc; ball tossed at least 12 inches; contact behind the baseline",
              "Ball must bounce first; paddle below the waist; forehand only",
              "Feet together; ball above the waist; backhand only",
            ],
            correctIndex: 0,
            explanation:
              "Rules 7.C.1, 7.C.2, and 7.C.3. Violating any of the three is a fault under 7.C.5. Note the 2026 rulebook added the word 'clearly' to strengthen enforcement.",
            sourceLessonSlug: "pb-serving-and-the-score",
          },
          {
            prompt: "Which of the volley-serve constraints (upward arc, paddle below wrist, ball below waist) also apply to a DROP serve?",
            options: [
              "None of them — Rule 7.D has its own, much shorter list of requirements",
              "All three of them",
              "Only the upward-arc requirement",
              "Only the below-the-waist requirement",
            ],
            correctIndex: 0,
            explanation:
              "Rule 7.D governs the drop serve and requires only a release from a natural (unaided) height (7.D.1) and that the ball not be propelled (7.D.2). There is no restriction on the number of bounces (7.D.3) or where it bounces (7.D.4). The 7.C constraints are specific to the volley serve.",
            sourceLessonSlug: "pb-serving-and-the-score",
          },
          {
            prompt: "Which statement about spin on the serve is correct under the 2026 rulebook?",
            options: [
              "You may not pre-spin the ball on release, but you may apply spin with the paddle at contact",
              "All spin on the serve is banned",
              "You may pre-spin the ball with your fingers, but not with the paddle",
              "Spin is allowed on a drop serve but banned on a volley serve",
            ],
            correctIndex: 0,
            explanation:
              "Rule 7.B.2: the server must not manipulate the ball to add spin with any part of the body or the paddle prior to hitting it — but 'spin may be applied to the ball upon contact by the paddle.' Pre-spin is out; paddle spin at contact is fine.",
            sourceLessonSlug: "pb-serving-and-the-score",
          },
          {
            prompt: "Why does every doubles game begin with the score called as 'zero – zero – two'?",
            options: [
              "The starting server is designated the SECOND server for that first rotation, so the starting team gets only one server before a side out",
              "It is a superstition with no basis in the rulebook",
              "Because the receiving team's score is announced first",
              "Because two players must serve before any point can be scored",
            ],
            correctIndex: 0,
            explanation:
              "Rule 5.B.2: the starting server for the team that starts the game 'is designated as a second server for the team's first service rotation of that game.' Rule 6.B.2 requires the doubles score to be called as three numbers. So the first call is 0-0-2 — it stops the starting team from having a permanent advantage.",
            sourceLessonSlug: "pb-serving-and-the-score",
          },
          {
            prompt: "How long do you have to serve after the score has been called?",
            options: ["10 seconds", "5 seconds", "20 seconds", "There is no time limit"],
            correctIndex: 0,
            explanation:
              "Rule 6.D, the 10-Second Rule: the server must serve within 10 seconds after the score call is completed, or it is a fault (6.D.1). The entire score must also be called before the serve is hit (Rule 6.C).",
            sourceLessonSlug: "pb-serving-and-the-score",
          },
          {
            prompt: "Under the two-bounce rule, who must let the ball bounce?",
            options: [
              "The receiver must let the serve bounce, and then the serving team must let the return of serve bounce",
              "Only the receiver, on the serve",
              "Both teams, on every shot of the rally",
              "Only the serving team, on the third shot",
            ],
            correctIndex: 0,
            explanation:
              "Rule 10.A: 'The serve and the return of serve must each bounce before being returned.' Failing to let the serve bounce is a fault against the receiver (10.A.1); failing to let the return bounce is a fault against the serving side (10.A.2).",
            sourceLessonSlug: "pb-shape-of-a-rally",
          },
          {
            prompt: "You volley a ball from just behind the kitchen line, and your momentum carries you into the kitchen after the ball is already dead. What is the call?",
            options: [
              "Fault against you — momentum into the non-volley zone counts even after the ball becomes dead",
              "No fault — the ball was dead, so it doesn't matter",
              "No fault, as long as only one foot lands in the zone",
              "Replay",
            ],
            correctIndex: 0,
            explanation:
              "Rule 11.A.2, the momentum rule: when a volleying player's momentum causes them to contact anything in contact with the non-volley zone, 'even after the ball becomes dead,' it is a fault. This is the single most commonly misunderstood rule in the sport.",
            sourceLessonSlug: "pb-shape-of-a-rally",
          },
          {
            prompt: "Is it legal to simply stand inside the non-volley zone during a rally?",
            options: [
              "Yes, at any time — except during the act of volleying",
              "No, never — being in the zone is always a fault",
              "Only if the ball has already bounced on your side",
              "Only during the serve",
            ],
            correctIndex: 0,
            explanation:
              "Rule 11.A: 'A player, or anything in contact with the player, may contact the non-volley zone at any time except during the act of volleying a ball.' Standing there is perfectly legal — it is just tactically poor, because you cannot volley.",
            sourceLessonSlug: "pb-shape-of-a-rally",
          },
          {
            prompt: "After stepping into the kitchen, what must happen before you may legally volley again?",
            options: [
              "Both feet must contact the playing surface completely outside the non-volley zone",
              "One foot must be outside the zone",
              "You must wait for one full rally",
              "Nothing — you may volley as soon as the ball comes back",
            ],
            correctIndex: 0,
            explanation:
              "Rule 11.A.3: after contacting the non-volley zone, a player who volleys before BOTH feet have contacted the playing surface completely outside the zone commits a fault. This is why you see good players do a deliberate two-step 'reset' backward.",
            sourceLessonSlug: "pb-shape-of-a-rally",
          },
        ],
      },
    },

    // ── Section 2: The Rules People Get Wrong ───────────────────────────────
    {
      slug: "pb-the-kitchen",
      title: "6 · The kitchen: five things almost everyone gets wrong",
      section: "The Rules People Get Wrong",
      body: `The non-volley zone — universally called "the kitchen," a nickname that appears nowhere in the rulebook — generates more bad calls than every other rule combined. Here are the five errors, and the rule that settles each.

**Wrong #1: "You can't step in the kitchen."**
You absolutely can. Rule 11.A: "A player, or anything in contact with the player, may contact the non-volley zone **at any time except during the act of volleying a ball**." Chase a drop shot into the kitchen, hit it after the bounce, walk back out — all legal, all day. The zone restricts **one specific action** (volleying), not your feet.

**Wrong #2: "The kitchen is a box you can't reach into."**
The zone is explicitly **two-dimensional**: "The non-volley zone is two-dimensional and does not extend above the playing surface" (Rule 3.A.4.c). Your paddle may swing through the airspace over the kitchen. Your follow-through may hang over it. What may not happen is **you** — or anything touching you — being in contact with the *surface* of the zone while you volley.

**Wrong #3: "I got out of the kitchen before the ball came back, so I'm fine."**
Not necessarily. Rule 11.A.3: after contacting the non-volley zone, you may not volley until **both feet** have contacted the playing surface completely outside the zone. One foot out is not enough. This is why good players make a deliberate two-step reset backward instead of leaning out.

**Wrong #4: "The ball was dead, so my momentum doesn't matter."**
It matters. Rule 11.A.2: if a volleying player's momentum causes them to contact anything in contact with the non-volley zone — "**even after the ball becomes dead**" — it is a fault against them. You can win the rally with an unreturnable smash and then lose the point by stumbling forward. This is the rule that decides real matches.

**Wrong #5: "My partner was standing in the kitchen, but I hit the ball, so it's fine."**
No. Both 11.A.1 and 11.A.2 explicitly include **the player's partner**. If you volley while touching your partner, and your partner is touching the kitchen, that is a fault against you.

**One more, from the serve:** a served ball that lands in the non-volley zone — including on its line — is a fault against the server (Rule 7.E.2), because the lines that bound the zone are part of the zone (Rule 3.A.4.c).

**Why does this zone exist at all?** Because without it, the tallest, strongest player would stand at the net and hit every ball downward. The kitchen is a deliberate, artificial constraint that converts a power game into a touch game. It is also, not coincidentally, the reason a 15-year-old with good hands can beat a 30-year-old former college athlete.

:::reveal True or false: your paddle may swing through the air over the kitchen while you volley, as long as your feet are outside the zone. Cite the rule. ||| TRUE. Rule 3.A.4.c states that "the non-volley zone is two-dimensional and does not extend above the playing surface." The zone is a patch of ground, not a box of air. What matters is whether YOU (or anything in contact with you) are touching the SURFACE of the zone during the act of volleying (Rule 11.A).

## Sources
- USA Pickleball. (2026). *2026 USA Pickleball official rulebook*, Rules 3.A.4.c, 7.E.2, 11.A, 11.A.1–11.A.3. https://usapickleball.org/docs/rules/USAP-Official-Rulebook.pdf`,
      recallContent: [
        {
          prompt: "What single action does the non-volley zone actually restrict?",
          answer:
            "Volleying — hitting the ball out of the air. Rule 11.A permits contact with the zone at any time EXCEPT during the act of volleying. Standing, walking, and hitting a ball after it bounces are all legal in the kitchen.",
        },
        {
          prompt: "Is the non-volley zone two-dimensional or three-dimensional?",
          answer:
            "Two-dimensional. Rule 3.A.4.c: 'The non-volley zone is two-dimensional and does not extend above the playing surface.' Your paddle and follow-through may pass over it.",
        },
      ],
    },
    {
      slug: "pb-two-bounce-rule",
      title: "7 · The two-bounce rule (and the other double bounce)",
      section: "The Rules People Get Wrong",
      body: `**The rule, in the rulebook's own eleven words:** "The serve and the return of serve must each bounce before being returned" (USA Pickleball, 2026, Rule 10.A).

That is it. Not "every ball must bounce twice." Not "you must let two balls bounce before you can volley in general." Exactly two specific shots — the **serve** and the **return of serve** — must bounce.

The two faults:
- **10.A.1** — the receiver does not let the serve bounce. Fault against the **receiver**.
- **10.A.2** — the server or the server's partner does not let the return of serve bounce. Fault against the **serving side**.

After that, anything is fair game (subject to the kitchen).

**The naming trap.** People call this the "double-bounce rule," and the rulebook itself calls it the **Two-Bounce Rule** — because there is a *different* rule about a genuine double bounce sitting right next to it. Rule 10.B, **Maximum Number of Bounces**: "A player must return the ball before a second bounce," and letting it bounce twice is a fault under 10.B.1. So in one rulebook, right beside each other:

| Rule | Name | Meaning |
|---|---|---|
| 10.A | Two-Bounce Rule | The serve and the return must **each** bounce once before being returned |
| 10.B | Maximum Number of Bounces | A ball that bounces **twice** on your side is a fault against **you** |

Say "two-bounce rule" and you are speaking the rulebook's language. Say "double-bounce rule" and half the court thinks you mean 10.B.

**Why the rule exists.** It is the engine of the entire sport. Because the serving team may not volley the return, they are stuck at their baseline while the returners sprint to the net. That means the team that serves — the only team that can score under standard scoring — starts every point at a **positional disadvantage**. The sport is deliberately, structurally rigged against the server. Tennis is the opposite: the server dominates. This one rule inverts the whole logic of racket sports, and it is why the third shot (next section) is the most studied shot in pickleball and the serve is the least.

:::reveal What is the difference between Rule 10.A and Rule 10.B? ||| Rule 10.A is the Two-Bounce Rule: the serve and the return of serve must EACH bounce once before being returned. Rule 10.B is Maximum Number of Bounces: a player must return the ball before it bounces a SECOND time, and failing to do so is a fault against that player. They are two different rules that both involve the number two, which is why "double-bounce rule" is a confusing thing to say.

## Sources
- USA Pickleball. (2026). *2026 USA Pickleball official rulebook*, Rules 10.A, 10.A.1–10.A.2, 10.B, 10.B.1. https://usapickleball.org/docs/rules/USAP-Official-Rulebook.pdf`,
      recallContent: [
        {
          prompt: "State the two-bounce rule in one sentence.",
          answer:
            "The serve and the return of serve must each bounce before being returned (Rule 10.A). Nothing else in the rally has to bounce.",
        },
        {
          prompt: "Why does the two-bounce rule put the serving team at a disadvantage?",
          answer:
            "Because they may not volley the return of serve, they are pinned near their own baseline while the receiving team advances to the kitchen line. The team that serves — the only team that can score under standard scoring — starts every point in the worse court position.",
        },
      ],
    },
    {
      slug: "pb-the-serve-that-keeps-changing",
      title: "8 · The serve: the rule that keeps changing",
      section: "The Rules People Get Wrong",
      body: `If you learn one thing about pickleball rules, learn this: **the serve rules have changed repeatedly in recent years, and anything you half-remember about them may already be dead.**

**Where the serve stands in the 2026 rulebook.**

*The volley serve* (Rule 7.C) — hit out of the air, with three constraints at contact: a **clear upward arc** (7.C.1), the paddle head **not above the wrist joint** (7.C.2), and the ball **no higher than the waist** (7.C.3).

*The drop serve* (Rule 7.D) — drop, bounce, hit. It carries **none** of those three constraints. Its only requirements are a release from a natural (unaided) height (7.D.1) and no propelling of the ball (7.D.2). Bounce it once or five times, anywhere on the surface — the rulebook explicitly does not care (7.D.3, 7.D.4).

*Spin* (Rule 7.B.2) — you may **not** manipulate the ball to add spin with your body or paddle **before** hitting the serve. You **may** apply spin with the paddle **at contact**. The receiver who believes you pre-spun may call for a replay, but only before returning the serve (7.B.2.a).

**Now the history, which is the actual lesson.**

The spin serve is the clearest example of the sport rewriting itself. Players — most visibly the pro Zane Navratil, building on a technique attributed to Morgan Evans — developed a serve where the ball was violently pre-spun by the hand or against the paddle before being struck, producing a bounce receivers simply could not read. USA Pickleball banned the paddle-assisted version ("the chainsaw serve"), then, effective January 1, 2023, banned pre-imparted spin on the serve **entirely** — while explicitly preserving a player's right to spin the ball with the paddle at contact (Boss, 2023).

Notice something about that citation. Boss's *Forbes* piece reports the ban correctly, and then cites it as "Rule 4.5.A." **There is no Rule 4.5.A.** In the 2023 rulebook the relevant provision lived in Section 4; in the **2026** rulebook it is **Rule 7.B.2**. The reporter got the substance right and the number wrong, and that is the ordinary condition of pickleball rule reporting.

**And then 2026 renumbered everything.** USA Pickleball's own 2026 Rulebook Change Document is a table of the old rule number next to the new one, entry after entry: the 2025 service-fault rule **4.M.4** is now **7.E.1**. The 2025 volley-serve rule **4.A.7.a** is now **7.C.1**. The 2025 pre-spin rule **4.A.5** is now **7.B.2** (USA Pickleball, 2025/2026). The rules themselves barely moved; the addresses all did.

The 2026 edition also *tightened* the volley serve, adding the word "**clearly**" to the arc, wrist, and waist tests. USA Pickleball's stated reason: "The addition of the word Clearly makes it a stronger and more enforceable rule" (USA Pickleball, 2025/2026, entry 23).

**The takeaway is a habit, not a fact.** When you cite a pickleball rule, cite the **year** and the **number**, and check the number against that year's rulebook. When someone tells you what the rule is, ask when they learned it. A rule you learned in 2022 has a decent chance of being wrong in both substance and address by 2026.

:::reveal A friend insists the rule against pre-spinning the serve is "Rule 4.A.5." Under the 2026 rulebook, are they right? What should you do before repeating any pickleball rule number? ||| They are citing a real rule from an OLD rulebook. In the 2025 rulebook the pre-spin rule was 4.A.5; in the 2026 rulebook it is Rule 7.B.2 — the 2026 edition renumbered the rulebook, and USA Pickleball's own Change Document maps 4.A.5 to 7.B.2. Before repeating any pickleball rule number, check it against the CURRENT year's rulebook and cite the year with the number, because USA Pickleball revises the rulebook annually.

## Sources
- Boss, T. (2023, January 13). *The 2023 pickleball season kicks off with rule changes from the USAPA*. Forbes. https://www.forbes.com/sites/toddboss/2023/01/13/the-2023-pickleball-season-kicks-off-with-rule-changes-from-the-usapa/
- USA Pickleball. (2026). *2026 USA Pickleball official rulebook*, Rules 7.B.2, 7.B.2.a, 7.C.1–7.C.3, 7.D.1–7.D.4. https://usapickleball.org/docs/rules/USAP-Official-Rulebook.pdf
- USA Pickleball. (2025/2026). *2026 USA Pickleball rulebook change document* (published December 17, 2025; edited January 30, 2026), entries 1, 15, 23. https://usapickleball.org/docs/rules/USAP-Rulebook-Change-Document.pdf`,
      recallContent: [
        {
          prompt: "What are the three constraints on a volley serve, and do they apply to a drop serve?",
          answer:
            "Clear upward arc (7.C.1), paddle head not above the wrist (7.C.2), ball no higher than the waist (7.C.3). They do NOT apply to a drop serve — Rule 7.D has its own, much shorter requirements.",
        },
        {
          prompt: "Why should you never quote a pickleball rule number from memory?",
          answer:
            "Because USA Pickleball revises the rulebook annually, and the 2026 edition renumbered nearly everything (the 2025 rule 4.M.4 became the 2026 rule 7.E.1). Always cite the year with the number, and check it against that year's rulebook.",
        },
      ],
    },
    {
      slug: "pb-side-out-vs-rally-scoring",
      title: "9 · Side-out scoring vs. rally scoring: neither one is 'the' rule",
      section: "The Rules People Get Wrong",
      body: `Somebody will tell you "in pickleball, only the serving team can score." Somebody else will tell you "no, they changed it, every rally is a point now." **They are both describing a real format, and neither is universal.** This is the most common way people get pickleball scoring wrong, and the rulebook is unusually clear about it.

**Standard (side-out) scoring — Rule 4.A.**
"A point is scored by serving the ball and winning the rally." Win a rally on your opponent's serve and you get nothing but the ball back. In doubles, **both** players serve before the serve passes over (Rule 5.B); when the second server loses a rally, that is a **side out** (Rule 5.B.6). Games are typically to **11, win by 2**, and the rulebook's own overview says so in Section 1. In sanctioned tournaments the standard formats are best 2-of-3 to 11, best 3-of-5 to 11, one game to 15 or 21, or one game to 11 for round robins with six or more teams (Rule 15.C.1), and **all scoring options are win by two points, except win by one is allowed for team play** (Rule 15.C).

**Rally scoring — Rule 14.A, and note the label.**
The rulebook calls it a "**(Provisional Rule) Rally Scoring Option**." Under it, "a point is scored by the singles player or doubles team that wins **each** rally" (Rule 14.A.2), the score is called as **two** numbers rather than three (14.A.3), and — a big structural change — **only one player on a doubles team serves before a side out** (Rule 14.A.5).

**And here is a rule that changed for 2026, which is exactly the trap.** Under the *2025* rulebook's rally-scoring option, "a player or team scores a point for each rally won **except game point is scored only when serving**." That exception is **gone** in 2026: Rule 14.A.2 now simply says a point is scored by whoever wins each rally, and the change document titles the entry "Rally Scoring – Winning Point." Under 2026 rally scoring, **the receiving team can win the game** (USA Pickleball, 2025/2026, entry 20). If you learned rally scoring in 2025, you learned it wrong for 2026.

**Who decides which one you play?** In sanctioned tournaments, the **Tournament Director** may choose rally scoring — *except* for double-elimination doubles events, all 2026 USA Pickleball Golden Ticket events, and the 2026 USA Pickleball National Championship events, where it is not permitted (Rule 15.C.2). So USA Pickleball's own flagship events are still **side-out**.

USA Pickleball is candid that it is still deciding. Its stated reason for the 2026 rally-scoring changes says the organization "conducted extensive research on rally scoring using a third-party firm," which "analyzed hours of recorded rally-scoring matches and observed players of various skill levels" before USA Pickleball "elected to continue with" the provisional option (USA Pickleball, 2025/2026, entry 20). **"Provisional" means exactly what it sounds like.**

**And the pro tours run their own thing.** USA Pickleball is the national governing body and writes the rulebook that governs sanctioned play. The professional tours are private businesses; they are free to adopt formats USA Pickleball has not, and they have. So when you hear "the pros use rally scoring," the correct response is: *which pros, which event, which year* — not "so that's the rule now."

**What to actually say.** Not "the rule is side-out." Not "the rule is rally." Say: *"Standard pickleball uses side-out scoring (Rule 4.A). Rally scoring exists as a provisional option (Rule 14.A) and a tournament director may choose it, but not at USA Pickleball's Nationals. Ask before the match."*

:::reveal Under the 2026 rulebook's rally-scoring option, can the receiving team score the game-winning point? What was the answer under the 2025 rulebook? ||| Under 2026: YES. Rule 14.A.2 says a point is scored by whoever wins each rally, with no exception. Under 2025: NO — the old rule said "except game point is scored only when serving." USA Pickleball removed that exception for 2026 (Change Document, entry 20). This is a perfect example of why you must check the year on any pickleball rule.

## Sources
- USA Pickleball. (2026). *2026 USA Pickleball official rulebook*, Section 1; Rules 4.A, 5.B, 5.B.6, 14.A, 14.A.2, 14.A.3, 14.A.5, 15.C, 15.C.1, 15.C.2. https://usapickleball.org/docs/rules/USAP-Official-Rulebook.pdf
- USA Pickleball. (2025/2026). *2026 USA Pickleball rulebook change document* (published December 17, 2025; edited January 30, 2026), entry 20. https://usapickleball.org/docs/rules/USAP-Rulebook-Change-Document.pdf`,
      recallContent: [
        {
          prompt: "Under standard (side-out) scoring, who can score a point?",
          answer:
            "Only the serving side. Rule 4.A: 'A point is scored by serving the ball and winning the rally.' Winning a rally while receiving just gets you the serve.",
        },
        {
          prompt: "Is rally scoring 'the rule' in pickleball now?",
          answer:
            "No. Rule 14.A labels it a PROVISIONAL OPTION. A tournament director may choose it (Rule 15.C.2), but it is barred from double-elimination doubles events, Golden Ticket events, and the USA Pickleball National Championship. Standard side-out scoring (Rule 4.A) remains the default.",
        },
      ],
    },
    {
      slug: "pb-quiz-rules-people-get-wrong",
      title: "10 · Quiz: The rules people get wrong",
      section: "The Rules People Get Wrong",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Your opponent hits a soft drop. You run into the kitchen, let it bounce, hit it back, and walk out. What is the call?",
            options: [
              "Legal — the kitchen only restricts volleying",
              "Fault — you may never enter the non-volley zone",
              "Fault — you must exit the zone before the ball crosses the net",
              "Legal only if you were already in the kitchen when the ball was struck",
            ],
            correctIndex: 0,
            explanation:
              "Rule 11.A: a player may contact the non-volley zone at any time EXCEPT during the act of volleying. You let it bounce, so you did not volley. Completely legal.",
            sourceLessonSlug: "pb-the-kitchen",
          },
          {
            prompt: "You volley from behind the kitchen line and your paddle's follow-through swings out over the non-volley zone. What is the call?",
            options: [
              "Legal — the non-volley zone is two-dimensional and does not extend above the playing surface",
              "Fault — the paddle may not cross the plane of the kitchen line",
              "Fault — the zone extends upward to the height of the net",
              "Legal only if the paddle stays below waist height",
            ],
            correctIndex: 0,
            explanation:
              "Rule 3.A.4.c: 'The non-volley zone is two-dimensional and does not extend above the playing surface.' The zone is ground, not airspace. Only YOU (or something touching you) may not contact its surface while volleying.",
            sourceLessonSlug: "pb-the-kitchen",
          },
          {
            prompt: "You step into the kitchen to play a bounced ball, then step back with ONE foot outside the line and volley the next ball. What is the call?",
            options: [
              "Fault — BOTH feet must contact the surface completely outside the zone before you may volley",
              "Legal — one foot outside is enough",
              "Legal — the restriction ends as soon as you leave the zone",
              "Replay",
            ],
            correctIndex: 0,
            explanation:
              "Rule 11.A.3: after contacting the non-volley zone, volleying before BOTH feet have contacted the playing surface completely outside the zone is a fault. This is why good players make a full two-step reset backward.",
            sourceLessonSlug: "pb-the-kitchen",
          },
          {
            prompt: "You hit an unreturnable volley. The ball is dead. THEN your momentum carries you into the kitchen. What is the call?",
            options: [
              "Fault against you — the momentum rule applies even after the ball becomes dead",
              "No fault — the rally was already over",
              "No fault — momentum faults only apply if the ball is still live",
              "The point is replayed",
            ],
            correctIndex: 0,
            explanation:
              "Rule 11.A.2 says the momentum fault applies 'even after the ball becomes dead.' You can win the rally and lose the point. This decides real matches.",
            sourceLessonSlug: "pb-the-kitchen",
          },
          {
            prompt: "You volley a ball while touching your partner, who is standing in the kitchen. What is the call?",
            options: [
              "Fault against you — the rule explicitly includes anything in contact with the volleying player, including the partner",
              "No fault — only the player who hits the ball matters",
              "Fault against your partner, not you",
              "Legal if your partner is not moving",
            ],
            correctIndex: 0,
            explanation:
              "Rules 11.A.1 and 11.A.2 both name 'the player's partner' explicitly. Anything in contact with the volleying player that is in contact with the zone makes it a fault against the volleying player.",
            sourceLessonSlug: "pb-the-kitchen",
          },
          {
            prompt: "State the two-bounce rule correctly.",
            options: [
              "The serve and the return of serve must each bounce before being returned",
              "Every ball must bounce twice before it may be volleyed",
              "The first two shots of a rally may not be volleyed by either team",
              "The serve must bounce twice before the receiver hits it",
            ],
            correctIndex: 0,
            explanation:
              "Rule 10.A, verbatim: 'The serve and the return of serve must each bounce before being returned.' Two specific shots, one bounce each. Nothing else in the rally must bounce.",
            sourceLessonSlug: "pb-two-bounce-rule",
          },
          {
            prompt: "Which rule makes it a fault when a ball bounces TWICE on your side before you hit it?",
            options: [
              "Rule 10.B (Maximum Number of Bounces) — a different rule from the two-bounce rule",
              "Rule 10.A (the Two-Bounce Rule)",
              "Rule 11.A (Non-Volley Zone Infractions)",
              "There is no such rule — two bounces are always allowed",
            ],
            correctIndex: 0,
            explanation:
              "Rule 10.B: 'A player must return the ball before a second bounce,' and 10.B.1 makes failing to do so a fault. It sits right next to Rule 10.A, which is why calling 10.A 'the double-bounce rule' confuses people.",
            sourceLessonSlug: "pb-two-bounce-rule",
          },
          {
            prompt: "The receiver volleys the serve out of the air. What is the call?",
            options: [
              "Fault against the receiver (Rule 10.A.1)",
              "Fault against the server",
              "Legal, if the serve was going out",
              "Replay",
            ],
            correctIndex: 0,
            explanation:
              "Rule 10.A.1: when the receiver does not allow the serve to bounce before hitting the ball, it is a fault against the receiver. No exception for a ball that looked long.",
            sourceLessonSlug: "pb-two-bounce-rule",
          },
          {
            prompt: "Which of the volley-serve constraints applies to a DROP serve under Rule 7.D?",
            options: [
              "None of them — 7.D requires only a natural-height release and no propelling of the ball",
              "The upward-arc requirement only",
              "The below-the-waist requirement only",
              "All three (arc, wrist, waist)",
            ],
            correctIndex: 0,
            explanation:
              "Rules 7.D.1 and 7.D.2 are the only requirements; 7.D.3 and 7.D.4 explicitly remove any restriction on the number of bounces or where the ball bounces. The 7.C constraints govern the volley serve, not the drop serve.",
            sourceLessonSlug: "pb-the-serve-that-keeps-changing",
          },
          {
            prompt: "Under Rule 7.B.2, which is legal?",
            options: [
              "Applying spin to the ball with the paddle at the moment of contact",
              "Spinning the ball with your fingers as you release it",
              "Spinning the ball against the paddle face before striking it",
              "Any pre-spin, as long as the receiver can see it",
            ],
            correctIndex: 0,
            explanation:
              "Rule 7.B.2 forbids manipulating the ball to add spin with any part of the body or the paddle PRIOR to hitting it, then says plainly: 'Spin may be applied to the ball upon contact by the paddle.' Pre-spin is out; paddle spin at contact is in.",
            sourceLessonSlug: "pb-the-serve-that-keeps-changing",
          },
          {
            prompt: "What did the 2026 USA Pickleball rulebook do to the RULE NUMBERS?",
            options: [
              "It renumbered nearly everything — e.g. the 2025 service-fault rule 4.M.4 became the 2026 rule 7.E.1",
              "It kept the numbering identical to 2025",
              "It removed rule numbers entirely",
              "It only renumbered the wheelchair rules",
            ],
            correctIndex: 0,
            explanation:
              "USA Pickleball's own 2026 Rulebook Change Document maps old numbers to new ones, entry by entry: 4.M.4 → 7.E.1, 4.A.7.a → 7.C.1, 4.A.5 → 7.B.2. Which is why every rule citation must carry a year.",
            sourceLessonSlug: "pb-the-serve-that-keeps-changing",
          },
          {
            prompt: "Under STANDARD (side-out) scoring, what happens when the receiving team wins a rally?",
            options: [
              "No point is scored; the serve eventually passes to them",
              "They score a point",
              "They score a point and get the serve",
              "The rally is replayed",
            ],
            correctIndex: 0,
            explanation:
              "Rule 4.A: 'A point is scored by serving the ball and winning the rally.' Only the serving side can score. Winning a rally on the other team's serve gets you closer to the serve, not to a point.",
            sourceLessonSlug: "pb-side-out-vs-rally-scoring",
          },
          {
            prompt: "How does the 2026 rulebook describe rally scoring?",
            options: [
              "As a PROVISIONAL rule and an OPTION (Rule 14.A) that a tournament director may choose, with exceptions",
              "As the mandatory standard scoring system for all play",
              "As a format banned from all sanctioned play",
              "As a format used only in singles",
            ],
            correctIndex: 0,
            explanation:
              "Rule 14.A is headed '(Provisional Rule) Rally Scoring Option.' Rule 15.C.2 lets a Tournament Director choose it — except in double-elimination doubles events, Golden Ticket events, and the USA Pickleball National Championship.",
            sourceLessonSlug: "pb-side-out-vs-rally-scoring",
          },
          {
            prompt: "What changed about the rally-scoring GAME-WINNING point between the 2025 and 2026 rulebooks?",
            options: [
              "In 2025 the game point could be scored only when serving; in 2026 whoever wins the rally scores it, so the receiving team can win the game",
              "Nothing changed",
              "In 2026 the game point can be scored only when serving",
              "In 2026 rally scoring was abolished entirely",
            ],
            correctIndex: 0,
            explanation:
              "The 2025 rule read '...except game point is scored only when serving.' The 2026 Rule 14.A.2 removes that exception. USA Pickleball's Change Document lists it as entry 20, 'Rally Scoring – Winning Point.'",
            sourceLessonSlug: "pb-side-out-vs-rally-scoring",
          },
          {
            prompt: "Someone says 'the pros use rally scoring, so that's the rule now.' What is the accurate response?",
            options: [
              "The pro tours are private businesses that may run their own formats; USA Pickleball's rulebook still makes side-out scoring standard and rally scoring provisional",
              "They're right — pro rules automatically become the rules for everyone",
              "They're wrong; rally scoring does not exist anywhere in pickleball",
              "They're right, because USA Pickleball adopted rally scoring for its National Championship",
            ],
            correctIndex: 0,
            explanation:
              "USA Pickleball is the national governing body for sanctioned play; the pro tours are separate private organizations free to run their own formats. And rally scoring is expressly NOT permitted at the 2026 USA Pickleball National Championship (Rule 15.C.2).",
            sourceLessonSlug: "pb-side-out-vs-rally-scoring",
          },
        ],
      },
    },
  ],
};
