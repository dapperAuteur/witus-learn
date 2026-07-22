// Authored "Football: Play It, Read It, Work In It" — a high-school-level, cited course on the
// game the United States calls soccer. Covers how to play, strategy, the Laws, the history, the
// leagues, and the real opportunities for amateurs and entrepreneurs.
//
// Sourcing discipline (the load-bearing part of this file):
//   * The Laws of the Game are written by THE IFAB, NOT FIFA. This is the single most commonly
//     botched fact in football education and the course states it in Section 1 and hammers it in
//     Section 3. FIFA holds 4 of the 8 votes on The IFAB; the four British associations hold 1
//     each; a change needs a three-quarters majority — 6 of 8 (The IFAB, n.d., Organisation).
//   * Every Law statement is read out of the OFFICIAL "Laws of the Game 2026/27" PDF (effective
//     1 July 2026) and cited with its Law number. There are 17 Laws. No Law number is invented.
//     The three most-misstated Laws are taught from the current text verbatim-checked:
//       - Offside is LAW 11. The current text: head/body/feet count, HANDS AND ARMS DO NOT, and
//         the upper boundary of the arm is "in line with the bottom of the armpit."
//       - Handball is inside LAW 12 (Fouls and Misconduct). The 2026/27 text is NOT the 2019-21
//         text people still quote: the "accidental handball in the build-up to a team-mate's goal"
//         clause is GONE. Only the scorer's own hand/arm (directly, or immediately before) voids
//         a goal. Superseded versions were deliberately not shipped.
//       - VAR is LAW 5 §4 (plus a separate VAR protocol section). The reviewable categories in
//         2026/27 are goal/no goal, penalty/no penalty, red card, mistaken identity — and, NEW in
//         2026/27 and a COMPETITION OPTION, a clearly incorrectly awarded corner kick.
//   * Governance is kept exact: The IFAB (laws) · FIFA (world body, World Cup, 211 member
//     associations) · six confederations · national FAs · leagues. Routinely blurred; not here.
//   * Contested numbers are presented AS contested, with the competing figures and who published
//     them — never a single tidy headline number. This applies to the Dick, Kerr Ladies Goodison
//     Park attendance (46,000 vs 53,000), the Qatar 2022 migrant-worker death toll (the Guardian's
//     6,500 all-cause figure vs the Supreme Committee's 3 + 34 vs Al-Thawadi's "400-500" vs the
//     ILO's 50 work-related deaths in 2020 — four different things being counted), and the
//     Culture Foot Solidaire "15,000 boys a year" trafficking estimate (a hidden-population figure
//     that scholars say cannot be verified).
//   * Money and pay figures carry a year and a source or they are cut. Referee pay is cited to ONE
//     association's PUBLISHED fee schedule (SYA, effective Spring 2025) and labelled as such, not
//     presented as a national rate. Youth-sport cost and participation figures are the Aspen
//     Institute's Project Play. College odds are the NCAA's own published table (March 2026,
//     2024-25 data). The NCAA publishes NO high-school-to-pro probability for soccer — the course
//     says so and explains why, rather than inventing one.
//   * CUT for lack of a source: the Charles Wreford-Brown "coined soccer" anecdote (etymonline:
//     "On whose lips association first changed into 'soccer' history is silent"); any claim about
//     who wins the 2026 World Cup (it is being played as this course ships); any single "number of
//     people who play football worldwide" figure; and any recreational-level statistic that exists
//     only in coaching folklore.

import type { AuthoredCourse } from "./authored-course";

export const FOOTBALL_COURSE: AuthoredCourse = {
  title: "Football: Play It, Read It, Work In It",
  description:
    "A complete, cited football course for high school students, the game most of the world calls football and the United States calls soccer. How to actually play it (first touch, passing, dribbling, finishing, defending, goalkeeping); how to think about it (formations, possession, pressing, transitions, set pieces); the 17 Laws and who really writes them (The IFAB, not FIFA); the history, told honestly, from ball games that long predate England, to the 1863 codification, to the Football Association's 50-year ban on women's football; how the leagues and governing bodies actually fit together worldwide; the money, the labour, and the contested human cost; and the honest, concrete opportunities for amateurs and entrepreneurs, refereeing, coaching badges, running a club, and the jobs that actually exist around a game almost nobody makes a living playing.",
  lessons: [
    // ────────────────── SECTION 1 · THE GAME, THE NAME, AND THE PITCH ──────────────────
    {
      slug: "football-the-name-and-the-game",
      title: "1 · What the game is, and what to call it",
      section: "Section 1 · The game, the name, and the pitch",
      body: `Two teams of eleven. One ball. Ninety minutes. You may not use your hands. Whoever puts the ball in the other team's goal more times wins.

That is the whole sport. Everything else in this course, every Law, every tactic, every billion-dollar transfer, is detail hanging off those four sentences.

**We are going to call it football.** That is what it is called almost everywhere on Earth, it is what the people who wrote the rules called it, and it is the name in the official rulebook: the *Laws of the Game* are published for **football** (International Football Association Board [IFAB], 2026).

**One acknowledgement, and then we move on.** In the United States, this game is called **soccer**. If that is the word you grew up with, you were not wrong, you were using an *English* word.

**And here is the part almost everyone gets backwards.** "Soccer" is not an American invention. It is a **British** one. When the Football Association codified this game in 1863, its version was called **association football**, to distinguish it from **rugby football**. British students, Oxford in particular, had a slang habit of chopping a word down and sticking "-er" on the end: breakfast became *brekker*, rugby became *rugger*. Do that to *assoc.* (the abbreviation of *association*) and you get **socca**, **socker**, and finally **soccer** (Online Etymology Dictionary, n.d.). The earliest spellings are attested from the 1880s and 1890s.

You will often hear that a specific man, the England captain Charles Wreford-Brown, invented the word at Oxford. **That story is not documented.** The Online Etymology Dictionary's own entry puts it plainly: "On whose lips association first changed into 'soccer' history is silent" (Online Etymology Dictionary, n.d.). This course is not going to hand you a tidy fake. The word came out of British university slang; **we do not know who said it first.**

**Then Britain dropped it.** The economist Stefan Szymanski, who studied how often the word actually appeared in print, found that "soccer" was used comfortably in Britain for most of the twentieth century, and that its use in British publications **fell sharply from around 1980**, as the word came to be heard as an Americanism (University of Michigan, 2014). So: Britain coined it, Britain used it, Britain abandoned it, and then Britain got annoyed at Americans for keeping it.

**And one more thing, said once, clearly: this is not American football.** Different sport, different ball, different rules, different governing body, no relation beyond the word. If you came here looking for helmets and first downs, this is the wrong course. From here on, "football" means the game with the round ball.

**Why this course exists.** Because football is the most-played, most-watched game on the planet, and because the honest version of it, who governs it, who profits from it, who has been excluded from it, and where the actual jobs are, is far more interesting than the poster version.

:::reveal "Soccer" is an American word for football, true or false, and why? ||| False. It is a **British** coinage: Oxford-style "-er" slang applied to *assoc.*, the abbreviation of **association** football (as opposed to **rugby** football), attested from the 1880s-90s. Britain used it for most of the twentieth century and only dropped it from around 1980, once it started sounding American.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en
- Online Etymology Dictionary. (n.d.). *Soccer*. Retrieved July 2026, from https://www.etymonline.com/word/soccer
- University of Michigan. (2014, June 4). *Despite its British origins, Americans get a bad rap for using the word 'soccer'*. Phys.org. https://phys.org/news/2014-06-british-americans-bad-rap-word.html`,
    },
    {
      slug: "football-the-pitch-and-the-ball",
      title: "2 · The pitch and the ball, and why no two pitches are the same size",
      section: "Section 1 · The game, the name, and the pitch",
      body: `Here is a fact that surprises nearly everyone, including people who have watched football their whole lives: **a football pitch does not have one legal size.** It has a legal *range*.

**Law 1 (The Field of Play)** sets it out (IFAB, 2026, Law 1):

| Dimension | Minimum | Maximum |
| --- | --- | --- |
| Length (touchline) | 90 m (100 yds) | 120 m (130 yds) |
| Width (goal line) | 45 m (50 yds) | 90 m (100 yds) |

For **international matches**, the range narrows (IFAB, 2026, Law 1):

| Dimension | Minimum | Maximum |
| --- | --- | --- |
| Length (touchline) | 100 m (110 yds) | 110 m (120 yds) |
| Width (goal line) | 64 m (70 yds) | 75 m (80 yds) |

Compare that to a basketball court or a tennis court, where the dimensions are exact. In football, **the club chooses**, inside the range. That is why an away trip to a famously narrow pitch is a real tactical problem, and why a team built on wide play genuinely suffers on a small ground. The pitch is a variable, not a constant.

**The fixed measurements, the ones that never move** (IFAB, 2026, Law 1):

| Feature | Measurement |
| --- | --- |
| Distance between the inside of the goalposts | 7.32 m (8 yds) |
| Height of the crossbar from the ground | 2.44 m (8 ft) |
| Penalty area, from the goal line | 16.5 m (18 yds) |
| Goal area ("six-yard box"), from the goal line | 5.5 m (6 yds) |
| Penalty mark, from the goal line | 11 m (12 yds) |
| Centre circle radius (and the distance opponents must retreat at most restarts) | 9.15 m (10 yds) |

That last number, **9.15 m / 10 yds**, is worth memorising. It is the "keep back" distance at kick-offs, corners, and free kicks, and it is the radius of the centre circle. The circle is not decoration; it is a ruler.

**One more line in Law 1 that decides arguments:** "Measurements are from the **outside** of the lines as the lines are **part of the area they enclose**" (IFAB, 2026, Law 1). So the touchline is part of the field. A ball resting on the line is *in*. A foul committed on the penalty-area line is committed **inside** the penalty area, and that is a penalty kick, not a free kick. People lose games over this.

**The ball.** **Law 2** specifies it (IFAB, 2026, Law 2):

| Property | Specification |
| --- | --- |
| Shape | Spherical |
| Circumference | 68-70 cm (27-28 in) |
| Weight at the start of the match | 410-450 g (14-16 oz) |
| Pressure at sea level | 0.6-1.1 atmosphere |

That is a "size 5" ball, the adult ball. Younger age groups use size 4 and size 3, smaller and lighter, so a twelve-year-old can actually strike and control it. **The Law itself does not name "size 5"**; it gives the measurements, and the industry names the sizes. That distinction matters and it is the first example of a pattern you will see all course long: **know what the Law actually says, and know what is convention dressed up as law.**

:::reveal A defender pulls an attacker's shirt while standing exactly ON the painted line of the penalty area. Free kick or penalty? ||| **Penalty.** Law 1 states that the lines are part of the area they enclose, so the penalty-area line IS the penalty area. The offence happened inside it.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Is a football pitch a fixed size?",
          answer:
            "No. Law 1 gives a range: 90-120 m long and 45-90 m wide for general matches, narrowing to 100-110 m by 64-75 m for international matches. The club picks within the range.",
        },
        {
          prompt: "How far must opponents retreat at most restarts, and where else does that number appear?",
          answer: "9.15 m (10 yds), the same number as the radius of the centre circle and the penalty arc.",
        },
        {
          prompt: "How wide and how high is the goal?",
          answer: "7.32 m (8 yds) between the inside of the posts; 2.44 m (8 ft) from the ground to the underside of the crossbar.",
        },
      ],
    },
    {
      slug: "football-positions-and-shape",
      title: "3 · Eleven players: what each one is actually for",
      section: "Section 1 · The game, the name, and the pitch",
      body: `**Law 3** says a match is played by two teams of **a maximum of eleven players, one of whom must be the goalkeeper**, and that a match **may not start or continue if either team has fewer than seven players** (IFAB, 2026, Law 3).

Read that again: **seven**. If a team has three players sent off and starts with eleven, it can keep playing with eight. A fourth red card and the match is abandoned. This is a real rule that decides real matches.

Everything beyond "one goalkeeper" is **not law, it is choice.** The Laws do not name a single position. No Law says "striker." Teams arrange the other ten however they like, and the arrangement is called a **formation** (Section 4). But the jobs those ten do have settled into recognisable families.

**The goalkeeper.** The only player who may handle the ball, and **only inside their own penalty area** (IFAB, 2026, Law 12). Outside it, the goalkeeper is subject to exactly the same handball restrictions as anyone else. A modern goalkeeper is also expected to be the team's first passer and to sweep up behind a high defensive line.

**Defenders (the back line).**
- **Centre-backs** (usually two, sometimes three). Defend the middle, win headers, start attacks with passes out from the back.
- **Full-backs** (left and right). Defend the flanks and, in most modern systems, provide the team's width when attacking. Physically, the hardest running job on the pitch.
- **Wing-backs.** A full-back in a system with three centre-backs, expected to cover the entire touchline, defending and attacking.

**Midfielders (the engine room).**
- **Defensive midfielder** (the "6", the "pivot", the "holding" midfielder). Sits in front of the defence, screens the space, recycles possession, and is usually the first person to foul someone to stop a counter-attack.
- **Central midfielder** (the "8"). Box-to-box. Links defence and attack, arrives late in the penalty area.
- **Attacking midfielder** (the "10"). Operates between the opponent's midfield and defence, the hardest space in football to mark.
- **Wingers.** Attack from the flanks, either to cross or to cut inside and shoot.

**Forwards.**
- **Centre-forward / striker (the "9")**. Scores, holds the ball up with their back to goal, and (in the modern game) is the first defender, because pressing starts at the front.
- **False nine.** A centre-forward who deliberately drops deep, dragging a centre-back out of position and opening a hole for a midfielder to run into.

**About those numbers.** "The 6," "the 8," "the 10," "the 9" come from the old habit of assigning shirt numbers 1-11 by position. The **shirt numbers are gone**, squads now number into the nineties, but **the positional numbers survive as vocabulary**, and coaches, scouts and commentators still use them constantly. If someone says a team "has no proper 6," they mean it has no holding midfielder.

**Substitutes.** Law 3 says a team may use substitutes **as the competition rules permit**, this is one of many places where the Law hands the decision to the competition. In senior "A" international friendlies, the 2026/27 Laws raised the number of substitutes that may be used to **eight**, and allowed the two teams to agree on more, up to eleven (IFAB, 2026, Law 3). A World Cup match, a Premier League match, and your high school match may all use different substitution rules, **and all of them are legal.**

:::reveal A team has had three players sent off and is down to eight. Can the match continue? What if a fourth is sent off? ||| Yes, eight is legal. Law 3 says a match may not start or continue if a team has **fewer than seven** players. A fourth sending-off would take the team to seven, which is still legal; a **fifth** takes them to six and the match must be abandoned.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "What is the minimum number of players a team must have for a match to continue?",
          answer: "Seven (Law 3). Below seven, the match must not start or resume.",
        },
        {
          prompt: "How many positions do the Laws of the Game define?",
          answer:
            "One, the goalkeeper. Every other position (centre-back, the 6, the 10, the winger) is coaching convention, not law.",
        },
      ],
    },
    {
      slug: "football-how-a-match-runs",
      title: "4 · How a match actually runs: 90 minutes, added time, and what happens at 0-0",
      section: "Section 1 · The game, the name, and the pitch",
      body: `**Law 7 (The Duration of the Match)**: a match lasts **two equal halves of 45 minutes**, with a half-time interval **not exceeding 15 minutes** (IFAB, 2026, Law 7).

**But the clock never stops**, and this is the single biggest difference between football and almost every American sport. There are no timeouts. The referee does not stop the clock for a throw-in, a substitution, or an injury. Instead, **Law 7 requires the referee to make an "allowance for time lost"** in each half, for substitutions, injuries and treatment, time-wasting, disciplinary sanctions, drinks breaks, VAR delays, and goal celebrations (IFAB, 2026, Law 7).

That allowance is **added time** (also called stoppage time or injury time), and the amount is **the referee's judgement**. The fourth official holds up a board showing the *minimum* to be played. The referee can play more. **The referee, not the board, ends the half.**

The 2026/27 Laws pushed further against time-wasting: the "countdown" principle, where a visible countdown pressures a player to restart play within a set time, was **extended to throw-ins and goal kicks** (IFAB, 2026, Law changes 2026/27). Football is quietly at war with the stalling that a running clock invites.

**The flow of a match.**

1. **Kick-off** (Law 8). A coin toss decides who kicks off and which goal each team attacks. The ball is in play once it is kicked and *clearly moves*, it does **not** have to go forward. A goal may be scored **directly from kick-off**.
2. **Ball in and out of play** (Law 9). The ball is out only when it has **wholly** crossed the goal line or touchline, on the ground or in the air. **Wholly** is doing enormous work in that sentence: a ball that is 99% over the line is still in.
3. **Restarts.** Out over the touchline → **throw-in** to the other team. Out over the goal line, last touched by an attacker → **goal kick**. Out over the goal line, last touched by a defender → **corner kick**.
4. **Goal.** The ball must **wholly cross the goal line** between the posts and under the bar. Same word again: *wholly*. This is why goal-line technology exists.
5. **Full time.** The referee's whistle.

**And if the scores are level?** Here is the part people assume is a Law and is not. **Law 10 (Determining the Outcome of a Match)** says a match **may end as a draw**, and in a league, it usually does. Extra time and penalties are **not automatic**. They exist only if the **competition rules** say so (IFAB, 2026, Law 10).

When a competition does need a winner, Law 10 gives the tools:
- **Extra time**, two further equal periods, not exceeding 15 minutes each.
- **Penalties (the penalty shoot-out)**, taken from the penalty mark. Law 10 calls this procedure "kicks from the penalty mark," and it is a **tie-break procedure, not part of the match**. Goals scored in a shoot-out do not count in the score.

So a 0-0 draw is a legitimate, complete, finished football match. American viewers often find that maddening. It is the sport working as designed.

:::reveal The board says "+4". The referee plays 6 minutes and 20 seconds and then blows for full time. Has the referee broken the Law? ||| No. Law 7 makes the allowance for time lost **the referee's judgement**; the fourth official's board shows the **minimum** additional time, not a maximum. The referee ends the half, not the board.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Does the ball have to go forward at kick-off?",
          answer: "No. Law 8 only requires that it is kicked and clearly moves. A goal can be scored directly from kick-off.",
        },
        {
          prompt: "Are extra time and penalties part of the Laws of every match?",
          answer:
            "No. Law 10 says a match may end as a draw. Extra time and kicks from the penalty mark exist only where the COMPETITION rules require a winner.",
        },
        {
          prompt: "When is the ball out of play?",
          answer:
            "Only when it has WHOLLY crossed the touchline or goal line, on the ground or in the air (Law 9). Partly over the line is still in.",
        },
      ],
    },
    {
      slug: "football-quiz-section-1",
      title: "Section 1 quiz · The game, the name, and the pitch",
      section: "Section 1 · The game, the name, and the pitch",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where does the word 'soccer' come from?",
            options: [
              "British university slang: 'assoc.' (association football) plus the Oxford '-er' suffix",
              "An American shortening of 'association' invented in the 1920s",
              "A Scottish dialect word for kicking",
              "The surname of the man who wrote the first Laws",
            ],
            correctIndex: 0,
            explanation:
              "It is a British coinage from 'assoc.', association football, as distinct from rugby football, with the Oxford '-er' slang suffix, the same habit that produced 'rugger' and 'brekker'. Early spellings: socca, socker, soccer.",
            sourceLessonSlug: "football-the-name-and-the-game",
          },
          {
            prompt: "Who is documented as having coined the word 'soccer'?",
            options: [
              "Charles Wreford-Brown, the England captain",
              "Ebenezer Morley, founder of the FA",
              "Nobody, the coiner is unknown, and the Wreford-Brown story is undocumented",
              "A FIFA committee in 1904",
            ],
            correctIndex: 2,
            explanation:
              "The Wreford-Brown anecdote circulates widely but is not documented. The Online Etymology Dictionary puts it directly: 'On whose lips association first changed into soccer history is silent.' The course refuses to repeat the myth.",
            sourceLessonSlug: "football-the-name-and-the-game",
          },
          {
            prompt: "What happened to the word 'soccer' in Britain?",
            options: [
              "It was never used there",
              "It was used through most of the twentieth century, then declined sharply from around 1980 as it came to sound American",
              "It has always been the preferred British term",
              "It was banned by the Football Association in 1921",
            ],
            correctIndex: 1,
            explanation:
              "Szymanski's study of printed usage found 'soccer' was in comfortable British use for most of the 1900s and dropped away from roughly 1980, once it was heard as an Americanism (University of Michigan, 2014).",
            sourceLessonSlug: "football-the-name-and-the-game",
          },
          {
            prompt: "Under Law 1, what is the legal LENGTH of a football pitch?",
            options: [
              "Exactly 105 m, there is one legal size",
              "A range: 90-120 m (100-130 yds), narrowing to 100-110 m for international matches",
              "A range, but only for youth football; senior pitches are fixed",
              "Whatever the referee decides on the day",
            ],
            correctIndex: 1,
            explanation:
              "Law 1 gives a RANGE, not a fixed size: 90-120 m long, 45-90 m wide; 100-110 m by 64-75 m for internationals. The club chooses within the range, which is why pitch size is a genuine tactical variable.",
            sourceLessonSlug: "football-the-pitch-and-the-ball",
          },
          {
            prompt: "A defender handles the ball while standing with both feet exactly on the painted penalty-area line. What is the restart?",
            options: [
              "A direct free kick from outside the area",
              "A penalty kick",
              "An indirect free kick",
              "A dropped ball",
            ],
            correctIndex: 1,
            explanation:
              "Law 1: 'the lines are part of the area they enclose.' The penalty-area line IS the penalty area, so the offence occurred inside it, penalty kick.",
            sourceLessonSlug: "football-the-pitch-and-the-ball",
          },
          {
            prompt: "How far is the penalty mark from the goal line, and how wide is the goal?",
            options: [
              "11 m (12 yds); 7.32 m (8 yds) between the inside of the posts",
              "9.15 m (10 yds); 8 m",
              "12 m; 7 m",
              "16.5 m (18 yds); 7.32 m",
            ],
            correctIndex: 0,
            explanation:
              "Law 1: penalty mark 11 m (12 yds) from the goal line; goal 7.32 m (8 yds) wide and 2.44 m (8 ft) high. 16.5 m (18 yds) is the penalty AREA, not the spot.",
            sourceLessonSlug: "football-the-pitch-and-the-ball",
          },
          {
            prompt: "What does Law 2 specify about the ball?",
            options: [
              "That it must be a 'size 5' ball",
              "Spherical, 68-70 cm circumference, 410-450 g at the start of the match, 0.6-1.1 atmosphere pressure",
              "Only that it must be round and white",
              "That it must be made of leather",
            ],
            correctIndex: 1,
            explanation:
              "Law 2 gives measurements, not marketing names. 'Size 5' is the industry term for a ball meeting those specifications, the Law never uses it. Knowing law from convention is the habit this course is training.",
            sourceLessonSlug: "football-the-pitch-and-the-ball",
          },
          {
            prompt: "How many positions do the Laws of the Game define?",
            options: ["Eleven", "Four, defender, midfielder, forward, goalkeeper", "One, the goalkeeper", "None"],
            correctIndex: 2,
            explanation:
              "Law 3 requires that one of the eleven is the goalkeeper. Every other role, centre-back, the 6, the 10, the winger, is coaching convention, and formations are choices, not law.",
            sourceLessonSlug: "football-positions-and-shape",
          },
          {
            prompt: "A team has had four players sent off and is down to seven. May the match continue?",
            options: [
              "No, a team must have at least eight",
              "Yes, the minimum is seven",
              "Only with the opponents' agreement",
              "Only in cup competitions",
            ],
            correctIndex: 1,
            explanation:
              "Law 3: a match may not start or continue if either team has FEWER THAN SEVEN players. Seven is legal; six is not.",
            sourceLessonSlug: "football-positions-and-shape",
          },
          {
            prompt: "In football vocabulary, what is 'the 6'?",
            options: [
              "The player wearing shirt number 6",
              "The defensive/holding midfielder who screens the back line",
              "The sixth substitute",
              "The centre-forward",
            ],
            correctIndex: 1,
            explanation:
              "Positional numbers survive from the era of 1-11 shirt numbering even though squads now number into the nineties. 'The 6' means the holding midfielder regardless of the shirt they wear.",
            sourceLessonSlug: "football-positions-and-shape",
          },
          {
            prompt: "Where may the goalkeeper handle the ball?",
            options: [
              "Anywhere in their own half",
              "Only inside their own penalty area",
              "Anywhere, at any time",
              "Only inside the goal area (six-yard box)",
            ],
            correctIndex: 1,
            explanation:
              "Only inside their OWN PENALTY AREA. Outside it, Law 12 gives the goalkeeper exactly the same handball restrictions as any other player.",
            sourceLessonSlug: "football-positions-and-shape",
          },
          {
            prompt: "The fourth official's board shows a minimum of 4 added minutes. The referee plays 6. Is that legal?",
            options: [
              "No, the board is binding",
              "Yes, the board shows the minimum; Law 7 makes the allowance for time lost the referee's judgement",
              "Only if a goal is scored",
              "Only in extra time",
            ],
            correctIndex: 1,
            explanation:
              "Law 7 requires the referee to allow for time lost and gives no maximum. The board announces the minimum. The referee's whistle ends the half.",
            sourceLessonSlug: "football-how-a-match-runs",
          },
          {
            prompt: "When is the ball out of play?",
            options: [
              "As soon as any part of it crosses the line",
              "Only when it has WHOLLY crossed the line, on the ground or in the air",
              "When the referee says so, regardless of the line",
              "When it touches the advertising boards",
            ],
            correctIndex: 1,
            explanation:
              "Law 9: the ball is out only when it has wholly crossed the touchline or goal line. A ball 99% over the line is still in, which is exactly why goal-line technology was invented.",
            sourceLessonSlug: "football-how-a-match-runs",
          },
          {
            prompt: "The scores are level at full time in a league match. What do the Laws require?",
            options: [
              "Extra time, then penalties",
              "Nothing, Law 10 allows a match to end as a draw; extra time and penalties exist only if COMPETITION rules require a winner",
              "A replay",
              "A coin toss",
            ],
            correctIndex: 1,
            explanation:
              "This is a very common misconception. Law 10 explicitly permits a drawn match. Extra time and kicks from the penalty mark are options a competition may adopt, not universal Laws.",
            sourceLessonSlug: "football-how-a-match-runs",
          },
          {
            prompt: "Which statement about kick-off is correct under Law 8?",
            options: [
              "The ball must be played forward",
              "The ball must be touched by two players before it is in play",
              "The ball is in play once it is kicked and clearly moves, and a goal may be scored directly from kick-off",
              "A goal cannot be scored directly from kick-off",
            ],
            correctIndex: 2,
            explanation:
              "Law 8 requires only that the ball is kicked and clearly moves, in any direction, and a goal may be scored directly from the kick-off. The 'must go forward' rule was removed years ago and people still quote it.",
            sourceLessonSlug: "football-how-a-match-runs",
          },
        ],
      },
    },

    // ────────────────── SECTION 2 · HOW TO PLAY: THE SKILLS ──────────────────
    {
      slug: "football-first-touch-and-passing",
      title: "5 · First touch and passing, the two skills that decide everything else",
      section: "Section 2 · How to play: the skills",
      body: `**Read this before any other skills lesson.** The Laws of the Game say **nothing** about technique. There is no legal way to pass a ball. Law 12 tells you what you may not do to an opponent, and Law 11 tells you where you may not stand, but no Law has ever specified a grip, a stance, or a body shape (IFAB, 2026). Everything in this section is **coaching convention**: accumulated, tested, widely agreed, and still convention. A course that dresses coaching preference up as law is lying to you, so we will keep the line visible.

With that said, here is the convention, and it is very good convention.

**First touch is the skill.** Not passing. Not shooting. **First touch**, what happens to the ball in the moment it arrives at you. Everything downstream depends on it, because a bad first touch means the next thing you do is a rescue, and a good first touch means the next thing you do is a choice.

The whole point of a first touch is to **buy yourself time and space**. Three ideas do almost all the work:

1. **Look before it comes.** The single biggest difference between a good young player and an average one is not the feet, it is the **head**, checking your shoulders *before* the ball arrives so you already know who is behind you. If your first look at the pitch happens after the ball reaches your foot, you are already late.
2. **Cushion, don't block.** Meet the ball with a relaxed surface that gives slightly as it arrives, so the ball dies close. A rigid foot makes the ball bounce away from you.
3. **Touch it where you want to go next.** This is the whole game. Do not stop the ball dead in front of you and *then* decide. Take your first touch **into the space you have already chosen**, away from the nearest defender, into the direction you intend to attack. This is called an **open** or **directional** first touch, and it turns one action into two.

**Body shape ("open up").** Stand side-on, so you can see the ball *and* the pitch behind you at the same time. A player who receives square-on, facing their own goal, can only pass backwards. A player who has opened their body can go forwards, sideways, or back. Coaches will nag you about this constantly and they are right.

**Passing: the surfaces.**

| Surface | What it does | When |
| --- | --- | --- |
| **Inside of the foot** | Accurate, flat, low power | The default. The vast majority of passes in any match. |
| **Laces (instep)** | Power and distance, driven flat | Long switches of play, hard passes into a striker |
| **Outside of the foot** | Disguise, bend away from a defender | Quick, no-backlift passes; threading a ball round a marker |
| **Chipped / lofted** | Height over a defender or a line | Over a compact defence; over a pressing line to a runner |

**Weight of pass.** A pass has a *speed*, and choosing it is a decision as real as choosing a target. Too soft and a defender gets there first. Too hard and your team-mate cannot control it. The rule of thumb: **pass to the foot that keeps your team-mate facing forwards**, and **pass hard into pressure, soft into space**. If your team-mate is being closed down, a firm pass gives them time; a firm pass into empty space just gives the ball away.

**Both feet.** You do not need a *great* weak foot. You need a **usable** one. A player who can only receive and pass on one side is a player whose direction any defender can predict, and defenders at every level above under-12 do predict it. Fifteen minutes of weak-foot passing against a wall, three times a week, is genuinely the highest-return practice in the sport.

**A drill you can do alone.** A wall, a ball, and a spot on the ground two steps from the wall. Pass into the wall, take an **open** first touch into a target area to your left, pass again. Ten in a row. Then to the right. Then weak foot. That is the whole game compressed into a driveway.

:::reveal Your team-mate is about to be closed down hard by a defender. Should you pass the ball to them softly or firmly, and why? ||| **Firmly.** A hard pass arrives sooner and buys your team-mate the time the defender is trying to take away. Soft passes belong in **space**, not into pressure, a soft ball into a pressured player is an invitation to be tackled.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Do the Laws of the Game specify any passing, shooting or dribbling technique?",
          answer:
            "No. The Laws constrain what you may do to an opponent (Law 12) and where you may stand (Law 11). All technique is coaching convention, not law.",
        },
        {
          prompt: "What is an 'open' or 'directional' first touch?",
          answer:
            "A first touch taken INTO the space you have already decided to attack, rather than stopping the ball dead and then deciding. It turns one action into two and buys time.",
        },
      ],
    },
    {
      slug: "football-dribbling-and-running-with-the-ball",
      title: "6 · Dribbling, running with the ball, and the difference between them",
      section: "Section 2 · How to play: the skills",
      body: `Two things get called "dribbling" and they are not the same job.

**Running with the ball** is moving the ball into space at speed when nobody is directly in front of you. Big touches, head up, ball pushed ahead into your stride. The aim is **distance**.

**Dribbling** is beating a defender who *is* in front of you. Small touches, ball close, body doing the lying. The aim is **to get past someone**.

Confusing them is the most common mistake young players make: they take small, careful, close touches while sprinting into forty yards of empty grass (slow, and pointless), and then take big touches straight at a defender (which just hands the ball over).

**Running with the ball: the technique.** Push the ball with the **laces or the outside of the foot**, into the space in front of you, roughly one touch per two or three strides. Keep the ball far enough ahead that you can run properly, but close enough that a defender arriving cannot reach it before you can. **Head up.** If your eyes are on the ball, you are not going to see the pass that ends the move.

**Dribbling: how you actually beat someone.**

Every successful one-versus-one is the same three-part sentence:

1. **Attack the defender.** Run *at* them, not around them. A defender who is standing still and comfortable is unbeatable; a defender who has to move backwards and turn is beatable. You must force them to commit.
2. **Move them.** A feint, a body swerve, a step-over, a drop of the shoulder, the *content* of the trick barely matters. What matters is that you make the defender **shift their weight onto one foot**.
3. **Go the other way, and go fast.** The trick creates the moment; **acceleration** is what actually beats them. A gorgeous step-over followed by a jog is a tackle waiting to happen.

That is it. Every fancy skill on the internet is a variation on "make them lean, then leave."

**Where you should dribble, and where you should not.** This is the part coaches wish more players understood:

| Area of the pitch | Should you take people on? |
| --- | --- |
| **Your own defensive third** | **Almost never.** Losing the ball here creates a shot on your goal. Pass. |
| **The middle third** | Rarely, and only to break a press or escape pressure. |
| **The attacking third, especially wide** | **Yes. Constantly.** The worst outcome is a throw-in; the best is a goal. |

The risk of dribbling is losing the ball. The cost of losing the ball is not the same everywhere on the pitch. **Take your risks where the punishment is small and the reward is enormous.** That is not a football principle; it is a general principle about risk, and football is a very good place to learn it.

**Shielding.** You will not always be able to go forward. Putting your body between the defender and the ball, arm out for balance (careful: Law 12 makes it an offence to *push* or *hold*), ball on the far foot, back to the opponent, is a completely legitimate way to protect possession until help arrives. It is not glamorous. It wins matches.

:::reveal Why is a step-over useless without acceleration? ||| Because the trick doesn't beat the defender, it only makes them **commit their weight to one side**. What actually beats them is the **explosive change of direction and speed** that follows. A skill move followed by a jog just gives the defender time to recover and tackle.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "What is the difference between running with the ball and dribbling?",
          answer:
            "Running with the ball = covering space at speed with big touches, head up, when nobody is in front of you. Dribbling = beating a defender who IS in front of you, with small touches and deception.",
        },
        {
          prompt: "Where on the pitch should you take defenders on, and where should you not?",
          answer:
            "Take them on in the attacking third, especially wide, worst case is a throw-in. Almost never in your own defensive third, where losing the ball creates a shot on your own goal.",
        },
      ],
    },
    {
      slug: "football-shooting-and-finishing",
      title: "7 · Shooting and finishing, and why the best chance is a boring one",
      section: "Section 2 · How to play: the skills",
      body: `**The technique.**

A **driven shot**, the standard shot on goal, is struck with the **laces**, not the toe and not the inside of the foot.

| Element | What to do | Why |
| --- | --- | --- |
| **Non-kicking foot** | Planted **beside** the ball, pointing at your target | It aims the shot. Plant it behind the ball and you lean back and skie it. |
| **Body** | Leaning **over** the ball, chest forward | Keeps the shot down. Leaning back sends it over the bar. |
| **Contact** | Laces, through the **middle or upper half** of the ball | Below the middle lifts it; through the middle drives it. |
| **Follow-through** | Towards the target, landing on the kicking foot | Power comes from the swing, not from tensing up. |

**Placement beats power.** A shot into the bottom corner from twelve yards, hit at 70% power and on target, beats a rocket into row Z every single time. The most common finishing error at every amateur level is **hitting the ball as hard as possible**, which destroys accuracy and, because leaning back generates power, usually sends the ball over the bar.

**The one-word coaching cue that works:** *low*. Low shots are harder to save (the goalkeeper has to get down, which is slower than reaching up), they can deflect in, and if they miss they can still be rebounds. High shots that miss are goal kicks.

**Now the important part, and it is not technique.**

**The best chance in football is a boring one.** The romantic shot, the 30-yard screamer, is the *least* likely to go in. Goals overwhelmingly come from close range and from central positions, because two things determine how likely a shot is to score:

1. **Distance**, how far you are from goal.
2. **Angle**, how much of the goal you can actually see.

This is the intuition behind **expected goals (xG)**, the modelling metric now used across professional football: every shot is assigned a probability of scoring based on where it was taken from and how it was taken. You do not need the maths. You need the conclusion, and the conclusion is blunt: **a tap-in from six yards is worth more than a spectacular effort from thirty, every time.** A striker's real job is not to shoot brilliantly. It is to **arrive in the places where boring chances happen.**

That reframes what "being a good finisher" means. It is:

- **Movement, not marksmanship.** Losing your marker in the six-yard box. Attacking the near post. Gambling on a rebound while everyone else admires the save.
- **Taking the first-time option.** A chance that needs a touch to set up is a chance that gives the defender a second to block.
- **Hitting the target.** A shot on target can be saved, deflected, spilled, or scored. A shot off target can only be a goal kick.

**Heading.** A header is a shot or a pass made with the **forehead**, the flat, hard part above the eyebrows, never the top of the head and never the face. You attack the ball; you do not let it hit you. And **for goal, you head down**, a downward header bounces awkwardly in front of the goalkeeper and is far harder to save.

**A necessary note.** Concerns about repeated heading and long-term brain health have changed the game for young players, and several national federations have introduced **age-based restrictions or limits on deliberate heading in youth football and training**. Your league's rules on this may differ from the professional game. **Check your own competition's rules, do not assume.** This is a live area where the governing bodies are still moving.

:::reveal You are through on goal, twelve yards out, with the goalkeeper advancing. What is the single most common mistake, and what should you do instead? ||| Trying to **blast it**. Maximum power destroys accuracy and makes you lean back, which lifts the ball over the bar. Instead: **pick a corner, keep your body over the ball, and pass it into the net, low, and on target.** A saved shot can still be a rebound; a shot over the bar is a goal kick.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "What two factors most determine whether a shot becomes a goal?",
          answer:
            "Distance from goal and angle (how much of the goal you can see). This is the intuition behind expected goals (xG), and it means a boring six-yard tap-in is worth far more than a spectacular 30-yard effort.",
        },
        {
          prompt: "Why do coaches shout 'low' when you shoot?",
          answer:
            "Low shots are harder to save (getting down is slower than reaching up), can deflect in, and can produce rebounds. High shots that miss are just goal kicks.",
        },
      ],
    },
    {
      slug: "football-defending-and-winning-the-ball",
      title: "8 · Defending, and what Law 12 actually lets you do",
      section: "Section 2 · How to play: the skills",
      body: `Defending is the part of football that is most badly taught, because people think it means **tackling**. It does not. **The best defenders tackle relatively rarely.** Defending means denying the attacker the thing they want, for long enough that they run out of options.

**What the Law actually permits.** This matters, because half of amateur defending is illegal and the other half is unnecessarily timid. **Law 12** awards a direct free kick if a player **charges, jumps at, kicks, pushes, strikes, tackles or challenges, or trips** an opponent in a manner the referee considers **careless, reckless, or using excessive force**, and it defines all three (IFAB, 2026, Law 12):

| Term | The Law's definition | Consequence |
| --- | --- | --- |
| **Careless** | A lack of attention or consideration; acting without precaution | Free kick. **No card.** |
| **Reckless** | Acting with **disregard to the danger to, or consequences for**, an opponent | Free kick + **yellow card** |
| **Using excessive force** | Exceeding the necessary use of force **and/or endangering the safety** of an opponent | Free kick + **red card** |

Read that table again, because it is the whole disciplinary structure of football in three rows, and almost nobody in the stands knows it. The difference between "no card," "booked," and "sent off" for the same physical act is **how much danger the referee judges you accepted.**

Note also: Law 12 says that **if an offence involves contact, it is penalised by a direct free kick**. And a fair, well-timed tackle that wins the ball cleanly is **not** an offence at all, football is a contact sport, and the Law says so.

**The four jobs of a defender, in order.**

1. **Press / close the space.** Get to the attacker *fast* while the ball is travelling to them, then **slow down** in the last few steps. Arriving at full sprint means you get skinned; arriving under control means you get to defend.
2. **Set your body.** Stand **side-on**, not square. Side-on lets you turn and run with them; square means you have to pivot, and you will lose. Knees bent, weight on the balls of your feet.
3. **Show them somewhere.** You cannot cover both sides. So **choose**, angle your body so the only way past you is the way you *want* them to go: onto their weak foot, towards the touchline, away from goal, into a team-mate. A defender who "shows the winger outside" has already half-won the duel. The touchline is a defender's best team-mate; it does half the tackling.
4. **Be patient.** Do not dive in. The moment you commit, you are beaten if you miss. **Wait for the mistake**, a heavy touch, a head-down moment, a pass into your feet. Then take the ball.

**Delay, delay, delay.** If you are the last defender and a counter-attack is coming, your job is **not** to win the ball. It is to **slow it down** until your team-mates get back. Retreat, stay on your feet, force them wide, and buy seconds. Winning the ball would be lovely. Not being beaten is the job.

**The slide tackle** is a last resort, not a default. You are committing your whole body to one attempt; if you miss, you are on the ground and out of the play. Slide when it is the only option, when you can reach the ball, and when you are not endangering anyone.

**Defending as a unit.** Individual defending is a small part of it. The rest, pressing triggers, the offside trap, staying compact, forcing play into a trap, is **team** defending, and Section 4 covers it.

:::reveal A defender catches an attacker with a challenge that flies in at speed and endangers the opponent's safety. Under Law 12, is that a yellow or a red, and what is the exact word the Law uses? ||| **Red.** Law 12 defines **"using excessive force"** as exceeding the necessary use of force *and/or endangering the safety of an opponent*, and the player **must be sent off**. "Reckless" (disregard for danger or consequences) is the yellow-card level.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Law 12's three levels of a foul challenge, name them and their consequences.",
          answer:
            "Careless (lack of attention/precaution) = free kick, no card. Reckless (disregard for danger to or consequences for the opponent) = yellow card. Using excessive force (exceeds necessary force and/or endangers safety) = red card.",
        },
        {
          prompt: "As the last defender facing a counter-attack, what is your actual job?",
          answer:
            "To DELAY, stay on your feet, retreat, force them wide, and buy seconds for team-mates to recover. Winning the ball is a bonus; not being beaten is the job.",
        },
      ],
    },
    {
      slug: "football-goalkeeping",
      title: "9 · Goalkeeping, the one player with different rules",
      section: "Section 2 · How to play: the skills",
      body: `The goalkeeper is the only position the Laws actually name (IFAB, 2026, Law 3), and the only player with a different rulebook. Learn the rules first; the technique follows from them.

**The handling rules, exactly as Law 12 has them** (IFAB, 2026, Law 12):

- The goalkeeper may handle the ball **only inside their own penalty area**. Outside it, "the goalkeeper has the same restrictions on handling the ball as any other player."
- An **indirect free kick** is awarded if the goalkeeper, inside their own penalty area, **touches the ball with the hand/arm after releasing it** and before it has touched another player.
- An **indirect free kick** is awarded if the goalkeeper handles the ball after it has been **deliberately kicked to them by a team-mate**, the rule everyone calls the **back-pass rule**. Two things people get wrong about it:
  - It applies to a **deliberate kick** from a team-mate. A ball that comes off a team-mate's **head, chest or knee** may be handled, *unless* the team-mate used a **deliberate trick** to circumvent the Law, in which case the offence is committed and the **team-mate** is penalised (and Law 12 says the goalkeeper is penalised if responsible for initiating the trick).
  - A ball **accidentally deflected** off a team-mate is not a deliberate kick, and the goalkeeper may handle it.
- If a goalkeeper handles inside their area when not permitted to, the restart is an **indirect free kick** and there is **no disciplinary sanction**, no card, in the ordinary case.

**Handling is a small part of the modern job.** Today's goalkeeper is expected to be:

**1. A shot-stopper.**
- **The set position.** Just before the shot: feet a little wider than the shoulders, weight forward on the balls of the feet, hands up in front, knees soft. You cannot dive from a standing start with your heels down and your hands by your hips.
- **The ready-hop.** Small hop into the set position **as the striker plants their standing foot**. It loads your legs at exactly the moment the shot comes.
- **Hands.** For a high ball, the **W**, thumbs almost touching behind the ball, fingers spread. For a low ball, get the **body behind it** so that if the hands fail, the body still stops it.
- **Low shots are the hard ones.** Getting *down* takes longer than reaching *up*, which is precisely why strikers are coached to shoot low.

**2. A positioner.** Most saves are made before the shot, by standing in the right place. **Narrow the angle**: move off your line towards the ball so you cut down how much of the goal the striker can see. A goalkeeper glued to the line makes every shot look spectacular and lets in easy goals.

**3. A sweeper.** With a high defensive line, the space behind the defence is yours. Read the through-ball, come out, clear it, with your **feet** if you are outside the area, because outside the area you may not use your hands, and a goalkeeper who forgets that gets sent off for handling to deny an obvious goal-scoring opportunity (Law 12).

**4. A first passer.** Modern goalkeepers start attacks. Short passes to the centre-backs, longer passes into midfield. This is genuinely dangerous, mistakes here become goals, and it is why goalkeepers are now selected partly on their feet.

**5. The organiser.** The goalkeeper is the only player who can see the entire pitch and every team-mate at once. **Talk.** Set the wall. Push the line up. Call the offside trap. Communication is the most under-taught goalkeeping skill and the cheapest one to get good at.

**One safety note.** A goalkeeper in possession of the ball with their hands **cannot be challenged**, Law 12 awards an indirect free kick against a player who prevents the goalkeeper from releasing the ball from their hands.

:::reveal Your centre-back, under pressure, deliberately chests the ball back to you inside your penalty area. May you pick it up? ||| **Yes.** Law 12's restriction applies to a ball **deliberately kicked** to the goalkeeper by a team-mate. A **chest**, head or knee pass is legal to handle, **unless** it was a **deliberate trick** to circumvent the Law, in which case the offence stands and the team-mate is penalised.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "What is the restart if a goalkeeper illegally handles the ball inside their own penalty area?",
          answer:
            "An indirect free kick, with NO disciplinary sanction in the ordinary case (Law 12). Not a penalty, the offence happened in their own area, and Law 12 specifies an indirect free kick.",
        },
        {
          prompt: "Where may a goalkeeper handle the ball?",
          answer:
            "Only inside their own penalty area. Outside it they have exactly the same handball restrictions as any other player (Law 12).",
        },
      ],
    },
    {
      slug: "football-quiz-section-2",
      title: "Section 2 quiz · How to play: the skills",
      section: "Section 2 · How to play: the skills",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What do the Laws of the Game specify about passing, shooting and dribbling technique?",
            options: [
              "Law 12 sets out the legal passing surfaces",
              "Nothing, technique is entirely coaching convention",
              "Law 2 requires that the ball be struck with the instep",
              "The Laws mandate two-footedness at youth level",
            ],
            correctIndex: 1,
            explanation:
              "The Laws constrain what you may do to an opponent (Law 12) and where you may stand (Law 11). They say nothing whatsoever about technique. Knowing which 'rules' are actually law and which are convention is a core habit of this course.",
            sourceLessonSlug: "football-first-touch-and-passing",
          },
          {
            prompt: "What is the purpose of an 'open' or directional first touch?",
            options: [
              "To stop the ball completely dead so you can look up",
              "To take the ball INTO the space you have already chosen, turning one action into two",
              "To keep the ball as close to your standing foot as possible",
              "To slow the game down",
            ],
            correctIndex: 1,
            explanation:
              "Stopping the ball dead and then deciding gives the defender a free second. A directional first touch already moves you where you intend to go, it buys time and space in a single action.",
            sourceLessonSlug: "football-first-touch-and-passing",
          },
          {
            prompt: "Your team-mate is about to be closed down hard. How should you weight the pass?",
            options: [
              "Softly, so it is easy to control",
              "Firmly, a hard pass arrives sooner and buys them the time the defender is trying to take",
              "Chip it over their head",
              "Weight is irrelevant; only accuracy matters",
            ],
            correctIndex: 1,
            explanation:
              "Pass hard into pressure, soft into space. A soft ball into a pressured player is an invitation to be tackled.",
            sourceLessonSlug: "football-first-touch-and-passing",
          },
          {
            prompt: "What distinguishes 'running with the ball' from 'dribbling'?",
            options: [
              "They are the same thing",
              "Running with the ball covers space at speed with big touches when nobody is in front of you; dribbling beats a defender who IS in front of you",
              "Dribbling is only legal in the attacking third",
              "Running with the ball is only for defenders",
            ],
            correctIndex: 1,
            explanation:
              "Different jobs, different technique. Confusing them produces the classic error: tiny careful touches while sprinting into empty grass, and big touches straight at a defender.",
            sourceLessonSlug: "football-dribbling-and-running-with-the-ball",
          },
          {
            prompt: "Why does a step-over fail if it isn't followed by acceleration?",
            options: [
              "Because the referee will call it a foul",
              "Because the trick only makes the defender commit their weight, the change of pace is what actually beats them",
              "Because step-overs are illegal in most competitions",
              "It doesn't fail; the trick alone is enough",
            ],
            correctIndex: 1,
            explanation:
              "Every successful one-v-one is: attack the defender, move their weight, then explode the other way. Without the acceleration, you have simply given the defender time to recover.",
            sourceLessonSlug: "football-dribbling-and-running-with-the-ball",
          },
          {
            prompt: "Where on the pitch is it most sensible to take defenders on, and why?",
            options: [
              "In your own defensive third, it draws pressure away",
              "In the attacking third, especially wide, the worst outcome is a throw-in, the best is a goal",
              "In central midfield, because there is more space",
              "Anywhere; the risk is identical across the pitch",
            ],
            correctIndex: 1,
            explanation:
              "The risk of dribbling is losing the ball, but the COST of losing the ball differs enormously by area. Take risks where the punishment is small and the reward is large.",
            sourceLessonSlug: "football-dribbling-and-running-with-the-ball",
          },
          {
            prompt: "Where should the non-kicking (plant) foot go when driving a shot, and why?",
            options: [
              "Well behind the ball, so you can get more power",
              "Beside the ball, pointing at the target, planting behind it makes you lean back and lift the shot",
              "Directly on top of the ball",
              "It doesn't matter",
            ],
            correctIndex: 1,
            explanation:
              "The plant foot aims the shot. Planting behind the ball forces you to lean back, which is exactly how shots end up over the bar.",
            sourceLessonSlug: "football-shooting-and-finishing",
          },
          {
            prompt: "What two factors most determine the probability that a shot becomes a goal?",
            options: [
              "Power and spin",
              "Distance from goal and angle (how much of the goal you can see)",
              "Which foot you use and the weather",
              "The goalkeeper's height and the crowd noise",
            ],
            correctIndex: 1,
            explanation:
              "Distance and angle are the core of expected-goals (xG) modelling. The practical conclusion: a boring six-yard tap-in is worth far more than a spectacular 30-yard effort. A striker's real skill is ARRIVING where boring chances happen.",
            sourceLessonSlug: "football-shooting-and-finishing",
          },
          {
            prompt: "Why do coaches insist on low shots?",
            options: [
              "Low shots are worth more goals",
              "Getting down is slower for a goalkeeper than reaching up; low shots can also deflect in or produce rebounds",
              "The Laws penalise shots above the crossbar",
              "It is purely aesthetic preference",
            ],
            correctIndex: 1,
            explanation:
              "A shot on target can be saved, deflected, spilled, or scored. A shot over the bar can only be a goal kick.",
            sourceLessonSlug: "football-shooting-and-finishing",
          },
          {
            prompt: "Law 12 defines three levels of a foul challenge. Which one requires a RED card?",
            options: [
              "Careless, a lack of attention or consideration",
              "Reckless, disregard for the danger to or consequences for an opponent",
              "Using excessive force, exceeding necessary force and/or endangering the safety of an opponent",
              "Any challenge involving contact",
            ],
            correctIndex: 2,
            explanation:
              "Careless = free kick, no card. Reckless = yellow. Using excessive force = RED. Same physical act; the difference is how much danger the referee judges the player accepted.",
            sourceLessonSlug: "football-defending-and-winning-the-ball",
          },
          {
            prompt: "What is meant by 'showing' an attacker in one-v-one defending?",
            options: [
              "Pointing at where you want your team-mates to go",
              "Angling your body so the only route past you is the one you want them to take, weak foot, touchline, away from goal",
              "Standing square so you can cover both sides equally",
              "Diving in to force a mistake",
            ],
            correctIndex: 1,
            explanation:
              "You cannot cover both sides, so choose one. The touchline is a defender's best team-mate, it does half the tackling for you.",
            sourceLessonSlug: "football-defending-and-winning-the-ball",
          },
          {
            prompt: "You are the last defender and a counter-attack is coming at you. What is your job?",
            options: [
              "Win the ball immediately with a slide tackle",
              "Delay, stay on your feet, retreat, force them wide, buy seconds for team-mates to recover",
              "Foul the attacker to stop the attack",
              "Step up to play them offside",
            ],
            correctIndex: 1,
            explanation:
              "Winning the ball would be lovely; not being beaten is the job. Committing to a tackle you miss means you are on the ground and out of the play.",
            sourceLessonSlug: "football-defending-and-winning-the-ball",
          },
          {
            prompt: "A team-mate deliberately KICKS the ball back to the goalkeeper inside the penalty area and the goalkeeper picks it up. What is the restart?",
            options: [
              "A penalty kick",
              "An indirect free kick, with no disciplinary sanction in the ordinary case",
              "A direct free kick",
              "Play continues, the back-pass rule was abolished",
            ],
            correctIndex: 1,
            explanation:
              "Law 12: the goalkeeper may not handle a ball deliberately kicked to them by a team-mate. The restart is an INDIRECT free kick, and there is normally no card.",
            sourceLessonSlug: "football-goalkeeping",
          },
          {
            prompt: "A team-mate deliberately CHESTS the ball back to the goalkeeper. May the goalkeeper handle it?",
            options: [
              "No, any deliberate pass back may not be handled",
              "Yes, the restriction applies to a deliberate KICK; a chest, head or knee pass may be handled unless it was a deliberate trick to circumvent the Law",
              "Only if the goalkeeper is outside the six-yard box",
              "Only in youth football",
            ],
            correctIndex: 1,
            explanation:
              "This is the most commonly misstated goalkeeping rule. Law 12 restricts handling a deliberate KICK from a team-mate. Head/chest/knee is legal to handle, but a DELIBERATE TRICK to circumvent the Law is an offence, and the team-mate is penalised.",
            sourceLessonSlug: "football-goalkeeping",
          },
          {
            prompt: "What does it mean for a goalkeeper to 'narrow the angle'?",
            options: [
              "Standing on the goal line to cover both corners",
              "Advancing off the line towards the ball so the striker can see less of the goal",
              "Standing at the near post regardless of where the ball is",
              "Diving early to guess the shot",
            ],
            correctIndex: 1,
            explanation:
              "Most saves are made before the shot, by standing in the right place. A keeper glued to the line makes every save look spectacular, and concedes easy goals.",
            sourceLessonSlug: "football-goalkeeping",
          },
        ],
      },
    },

    // ────────────────── SECTION 3 · THE LAWS, AND WHO WRITES THEM ──────────────────
    {
      slug: "football-who-writes-the-laws",
      title: "10 · Who writes the Laws, and why it is not FIFA",
      section: "Section 3 · The Laws, and who writes them",
      body: `**Start with the thing almost every football article, textbook and school lesson gets wrong.**

> **FIFA does not write the Laws of the Game. The IFAB does.**

If you learn one fact from this course, make it that one. It is the single most common error in football education, and once you can spot it you will start noticing it everywhere, in newspapers, in commentary, in other people's "complete guides to soccer."

**Who The IFAB is.** The **International Football Association Board (The IFAB)** was founded in **1886** by the four British football associations, The FA (England), the Scottish FA, the FA of Wales and the Irish FA, as the body with sole responsibility for developing and preserving the Laws of the Game. **FIFA joined in 1913** (The IFAB, n.d.-a).

**How the votes work, and this is the detail that makes the point.** The IFAB has five members (The IFAB, n.d.-b):

| Member | Votes |
| --- | --- |
| The Football Association (England) | 1 |
| Scottish Football Association | 1 |
| Football Association of Wales | 1 |
| Irish Football Association (Northern Ireland) | 1 |
| **FIFA** (on behalf of every other national association in the world) | **4** |
| **Total** | **8** |

A change to the Laws requires a **three-quarters majority** at the Annual General Meeting (The IFAB, 2024, Statutes), which, with eight votes, means **six**.

**Now do the arithmetic, because it is the whole story.**

FIFA has 4 votes. It needs 6. **So FIFA cannot change a single Law of the Game on its own.** It must persuade at least **two of the four British associations** to vote with it. And the four British associations together have 4 votes, so they cannot change a Law without FIFA either. **Neither side can move without the other.** That deadlock is not a bug; it is the design. It makes the Laws deliberately, stubbornly hard to change.

This is genuinely strange, and worth sitting with: a global sport played by hundreds of millions of people has its rulebook controlled by a committee on which **four small British associations hold half the votes**. It is a colonial artefact of the game's origins that has simply never been dismantled, and it is the actual, current, legal structure of world football.

**The two meetings.**
- The **Annual Business Meeting (ABM)**, typically in **November**, decides which topics go to the AGM and approves experiments with proposed Law changes.
- The **Annual General Meeting (AGM)**, normally in **March**, is where binding decisions on the Laws are made (The IFAB, n.d.-b).

**The Laws are revised every year.** The current edition is the **Laws of the Game 2026/27**, effective **1 July 2026** (IFAB, 2026). Editions before that are **superseded**. This matters more than it sounds: the handball law in particular has been rewritten repeatedly, and a great deal of what people confidently "know" about handball is a version of the Law that **no longer exists**.

**There are 17 Laws.** Not 16, not 18. Here they are, in order, exactly as the rulebook lists them (IFAB, 2026):

| # | Law |
| --- | --- |
| 1 | The Field of Play |
| 2 | The Ball |
| 3 | The Players |
| 4 | The Players' Equipment |
| 5 | The Referee |
| 6 | The Other Match Officials |
| 7 | The Duration of the Match |
| 8 | The Start and Restart of Play |
| 9 | The Ball In and Out of Play |
| 10 | Determining the Outcome of a Match |
| 11 | Offside |
| 12 | Fouls and Misconduct |
| 13 | Free Kicks |
| 14 | The Penalty Kick |
| 15 | The Throw-in |
| 16 | The Goal Kick |
| 17 | The Corner Kick |

**So what is FIFA, then?** FIFA is the **world governing body** of football: it runs the World Cup and other global competitions, it has **211 member associations**, it writes the **transfer** regulations (Section 7), and it holds four seats at The IFAB's table. It is enormously powerful. It **does not own the rulebook**.

**One useful habit for the rest of your life:** when a source tells you "FIFA changed the offside rule," you now know it did not, The IFAB did, with FIFA's four votes and at least two British ones. That sentence is a reliable detector of a writer who did not check.

:::reveal FIFA wants to change a Law of the Game and every FIFA representative votes for it. Does it pass? ||| **No.** FIFA holds **4 of The IFAB's 8 votes**, and a change requires a **three-quarters majority, 6 votes**. FIFA must convince at least **two of the four British associations** (England, Scotland, Wales, Northern Ireland) to vote with it. FIFA cannot change a Law alone.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en
- The IFAB. (n.d.-a). *The IFAB background*. Retrieved July 2026, from https://www.theifab.com/background/
- The IFAB. (n.d.-b). *The IFAB organisation*. Retrieved July 2026, from https://www.theifab.com/organisation/
- The IFAB. (2024). *Statutes* (Version 8). https://downloads.theifab.com/downloads/ifab-statutes`,
      recallContent: [
        {
          prompt: "Who writes the Laws of the Game?",
          answer:
            "The IFAB (International Football Association Board), founded 1886 by the four British associations; FIFA joined in 1913. FIFA does NOT write the Laws.",
        },
        {
          prompt: "How are votes distributed on The IFAB, and what majority changes a Law?",
          answer:
            "8 votes: FIFA has 4, and each of the four British associations has 1. A change needs a three-quarters majority, 6 of 8. So neither FIFA nor the British associations can act alone.",
        },
        {
          prompt: "How many Laws of the Game are there, and how often are they revised?",
          answer: "17 Laws, revised annually. The current edition is the Laws of the Game 2026/27, effective 1 July 2026.",
        },
      ],
    },
    {
      slug: "football-law-11-offside",
      title: "11 · Law 11: offside, taught properly",
      section: "Section 3 · The Laws, and who writes them",
      body: `Offside is **Law 11**. It is football's most misunderstood rule, and almost all of the confusion comes from collapsing **two separate questions** into one.

> **Question 1: Is the player in an offside POSITION?**
> **Question 2: Have they committed an offside OFFENCE?**

The Law is explicit about this and opens with the sentence people forget:

> **"It is not an offence to be in an offside position."** (IFAB, 2026, Law 11)

You can stand in an offside position all afternoon. Nothing happens. The flag only goes up if you *do* something.

---

**Question 1, offside POSITION.**

A player is in an offside position if (IFAB, 2026, Law 11):

- **any part of the head, body or feet** is in the opponents' half (**excluding the halfway line**), **and**
- **any part of the head, body or feet** is nearer to the opponents' goal line than **both the ball and the second-last opponent**.

Three details, all of which decide real goals:

1. **The hands and arms of all players, including goalkeepers, are NOT considered.** You cannot be offside by an arm. The Law even defines the boundary: *"the upper boundary of the arm is in line with the bottom of the armpit."* This exists because you may legally score with your shoulder, so the shoulder counts, and you may not score with your hand, so the hand does not.
2. **"The second-last opponent."** People say "the last defender," and it is *usually* the same thing, because the goalkeeper is usually the last opponent, which makes the last outfield defender the second-last opponent. But if the goalkeeper has come out for a corner, **the second-last opponent might be an outfield player**, and the "last defender" mental model breaks. Say **second-last opponent** and you will never be wrong.
3. **Level is ONSIDE.** The Law says a player is **not** in an offside position if **level with the second-last opponent, or level with the last two opponents.** Ties go to the attacker.

---

**Question 2, offside OFFENCE.**

A player in an offside position **at the moment the ball is played or touched by a team-mate** is penalised **only on becoming involved in active play** by (IFAB, 2026, Law 11):

- **Interfering with play**, playing or touching a ball passed or touched by a team-mate.
- **Interfering with an opponent**, by clearly obstructing their line of vision; or challenging them for the ball; or clearly attempting to play a close ball in a way that impacts on the opponent; or making an obvious action that clearly impacts on the opponent's ability to play the ball.
- **Gaining an advantage** by playing the ball or interfering with an opponent after it has **rebounded or been deflected off** the goalpost, crossbar, a match official or an opponent, or after it has been **deliberately saved by any opponent**.

Note the timing: the position is judged **at the moment the ball is played by the team-mate**, not when the offside player receives it. This is why an attacker can look "miles offside" when they collect the ball and still be perfectly onside, they were level when the pass was struck and simply ran faster.

---

**The rule people most often get backwards.**

> A player in an offside position who receives the ball **from an opponent who deliberately played the ball** — **including by deliberate handball** — **is NOT considered to have gained an advantage** (IFAB, 2026, Law 11).

**Unless it was a deliberate SAVE by any opponent.** A save resets nothing; a deliberate *play* does.

And the Law goes further, defining what "deliberate play" means: the player had **control** of the ball with the possibility of passing it, gaining possession, or clearing it, and it explicitly adds that **an inaccurate or unsuccessful pass or clearance does not stop it being a deliberate play.** A defender who tries to head the ball clear and shanks it into an offside striker's path has **deliberately played** it. **No offside.** The goal stands. This causes fury in stadiums every week, and it is exactly what the Law says.

The Law even gives the indicators of "control": the ball travelled from a distance and the player had a clear view of it; it was not moving quickly; its direction was not unexpected; the player had time to coordinate their body movement (not an instinctive stretch or jump); and a ball on the ground is easier to play than one in the air.

---

**Where you can never be offside** (IFAB, 2026, Law 11). There is **no offside offence** if a player receives the ball **directly** from:

- a **goal kick**
- a **throw-in**
- a **corner kick**

**The restart.** An offside offence is punished with an **indirect free kick where the offence occurred**, including in the offending player's own half, if that is where it happened.

:::reveal A defender, under no pressure, sees a long ball coming, attempts a controlled headed clearance, mistimes it, and the ball loops to an attacker who was in an offside position when the pass was struck. The attacker scores. Goal or offside? ||| **Goal.** Law 11: a player in an offside position who receives the ball from an opponent who **deliberately played** it has not gained an advantage, and the Law explicitly states that an **inaccurate or unsuccessful clearance does not negate the fact that the player deliberately played the ball.** It was a deliberate play, not a deliberate **save**, so there is no offside offence.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Is it an offence to be in an offside position?",
          answer:
            "No. Law 11 opens with exactly that sentence. Being in an offside position is only penalised if you become involved in active play, interfering with play, interfering with an opponent, or gaining an advantage.",
        },
        {
          prompt: "Which parts of the body count for offside?",
          answer:
            "Head, body and feet. The hands and arms of ALL players, including goalkeepers, are NOT considered, the upper boundary of the arm is in line with the bottom of the armpit.",
        },
        {
          prompt: "Name the three restarts from which you can never be offside.",
          answer: "A goal kick, a throw-in, and a corner kick, when received directly.",
        },
        {
          prompt: "Why is 'the last defender' the wrong phrase?",
          answer:
            "The Law says 'the second-last opponent.' Usually the goalkeeper is last, making the last outfield defender second-last, but if the keeper is out of position, the second-last opponent can be an outfield player and the 'last defender' model breaks.",
        },
      ],
    },
    {
      slug: "football-law-12-handball-and-cards",
      title: "12 · Law 12: handball (the current version), fouls, and cards",
      section: "Section 3 · The Laws, and who writes them",
      body: `**Handball lives inside Law 12 (Fouls and Misconduct).** There is no "Law of handball," and if a source gives you a standalone Law number for it, the source is wrong.

Handball is also the Law that has been **rewritten most often in the last decade**, which means: **most of what people confidently believe about handball is out of date.** So here is the **current** text, the 2026/27 edition, effective 1 July 2026, and nothing else.

---

**Handball: the actual Law.**

Law 12 opens the section with two framing sentences that people skip and then argue about for ninety minutes (IFAB, 2026, Law 12):

> *"For the purposes of determining handball offences, the upper boundary of the arm is in line with the bottom of the armpit."*
> **"Not every touch of a player's hand/arm with the ball is an offence."**

Read that second sentence twice. **Ball-to-hand is not automatically a foul.** It never has been, and the Law says so out loud.

**It IS an offence if a player:**

1. **Deliberately touches the ball** with their hand/arm, "for example moving the hand/arm towards the ball."
2. **Touches the ball with their hand/arm when it has made their body unnaturally bigger.** The Law then defines what that means: *"A player is considered to have made their body unnaturally bigger when the position of their hand/arm is not a consequence of, or justifiable by, the player's body movement for that specific situation. By having their hand/arm in such a position, the player takes a risk of their hand/arm being hit by the ball and being penalised."*
3. **Scores in the opponents' goal:**
   - **directly** from their hand/arm, **even if accidental**, including by the goalkeeper; **or**
   - **immediately after** the ball has touched their hand/arm, **even if accidental**.

**That is the complete list. Note what is NOT on it.**

An earlier version of this Law disallowed a goal if the ball had **accidentally** touched the hand or arm of an **attacking team-mate** anywhere in the build-up. **That clause is gone.** In the current Law, an accidental handball only voids a goal for **the player who scored it**, either directly from their arm, or immediately before scoring. If a team-mate's arm is accidentally hit three passes earlier and you then score, **it is a goal.**

If you have ever been told otherwise, you were told a **superseded** version of Law 12. This is exactly why the edition year matters.

**The goalkeeper.** "The goalkeeper has the same restrictions on handling the ball as any other player **outside the penalty area**" (IFAB, 2026, Law 12). Inside their own area, illegal handling by the goalkeeper is an **indirect free kick**, normally with **no card**.

---

**Fouls: the three-level ladder.** (Also covered in Section 2, and worth knowing cold.)

| Level | Law 12's definition | Sanction |
| --- | --- | --- |
| **Careless** | Lack of attention or consideration; acting without precaution | Free kick, **no card** |
| **Reckless** | Disregard for the **danger to, or consequences for**, an opponent | Free kick + **yellow** |
| **Excessive force** | Exceeds necessary force **and/or endangers the safety** of an opponent | Free kick + **red** |

**Direct vs. indirect free kick.** A **direct** free kick can be scored straight from the kick. An **indirect** free kick cannot, another player must touch the ball first. Law 12 gives direct free kicks for contact offences (charging, jumping at, kicking, pushing, striking, tackling, tripping) and for handball. It gives **indirect** free kicks for things like **playing in a dangerous manner**, **impeding an opponent without contact**, and **dissent**.

---

**DOGSO, denying a goal or an obvious goal-scoring opportunity.** This is the rule the pundits call "the triple punishment debate," and the current Law is careful (IFAB, 2026, Law 12):

- A player who denies an obvious goal-scoring opportunity **inside their own penalty area** and concedes a penalty is **cautioned (yellow)** if the offence was **an attempt to play the ball or a challenge for the ball**, but **sent off** in all other circumstances (holding, pulling, pushing, or no possibility of playing the ball).
- A player who denies a goal or an obvious goal-scoring opportunity by **deliberate handball** is **sent off wherever it happens** (except a goalkeeper in their own area).
- A player who denies a goal or an obvious goal-scoring opportunity by a **non-deliberate** handball and concedes a penalty is **cautioned**.

So the honest attempt to play the ball is treated more leniently than the cynical grab. That is the principle underneath the whole of Law 12: **the Law punishes intent and danger, not merely outcome.**

**Cards.** A **yellow** is a caution. **Two yellows in one match = a red**. A **red** is a sending-off: the player leaves and **is not replaced**, the team plays short. (Some competitions also use **sin bins** / temporary dismissals; The IFAB publishes guidelines for them, and whether they apply is a **competition** decision, not a universal Law.)

:::reveal An attacker's arm is accidentally struck by the ball in midfield. Three passes later, a team-mate scores. Under the CURRENT Law 12, does the goal stand? ||| **Yes, the goal stands.** The current Law only voids a goal for accidental handball when the **scorer** puts the ball in **directly from their own hand/arm**, or **immediately after** it has touched their own hand/arm. The old clause disallowing goals for an accidental handball anywhere in a team-mate's build-up **has been removed.**

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Which Law contains handball, and what is its opening principle?",
          answer:
            "Law 12 (Fouls and Misconduct), there is no standalone handball Law. Its stated principle: 'Not every touch of a player's hand/arm with the ball is an offence.'",
        },
        {
          prompt: "Under the current Law, when does an ACCIDENTAL handball void a goal?",
          answer:
            "Only for the scorer: if they score directly from their own hand/arm, or immediately after the ball touched their own hand/arm. Accidental handball earlier in a team-mate's build-up no longer voids a goal.",
        },
        {
          prompt: "What is the difference between a direct and an indirect free kick?",
          answer:
            "A direct free kick can be scored straight from the kick. An indirect free kick cannot, another player must touch the ball first.",
        },
      ],
    },
    {
      slug: "football-law-5-referee-and-var",
      title: "13 · Law 5: the referee, and what VAR can and cannot do",
      section: "Section 3 · The Laws, and who writes them",
      body: `**Law 5 (The Referee)** is the Law that makes football work, and it is startlingly blunt:

> *"The decisions of the referee regarding facts connected with play, including whether or not a goal is scored and the result of the match, are final."* (IFAB, 2026, Law 5)

The referee is not an umpire adjudicating between two lawyers. The referee **is the authority**, and Law 5 gives them the power to enforce the Laws, act as timekeeper, stop or abandon the match, caution and send off, and (crucially) play **advantage**: allowing play to continue when stopping it for a foul would benefit the offending team.

There are **other match officials** too, assistant referees (the ones with flags), the fourth official, and, where a competition uses them, video match officials. That is **Law 6**.

---

**VAR is in Law 5. Specifically, Law 5 §4.**

And the first sentence of that section is the one that gets skipped:

> *"The use of video assistant referees (VARs) is **only permitted** where the match/competition organiser has fulfilled all the implementation requirements as set out in the VAR Handbook, and has **received written permission from FIFA**."* (IFAB, 2026, Law 5)

So **VAR is not part of football by default.** It is an option a competition must qualify for. Most football on Earth, your high school match, your local league, the vast majority of professional matches worldwide, is played **without** it, and that is entirely lawful.

**The threshold.** VAR may assist the referee **only** in the event of a **"clear and obvious error"** or a **"serious missed incident."** It is explicitly **not** a system for re-refereeing close calls. If the decision was defensible, VAR does not touch it.

**What VAR can review** (IFAB, 2026, Law 5 §4):

| Reviewable category | Notes |
| --- | --- |
| **Goal / no goal** | Including offences in the build-up |
| **Penalty / no penalty** | |
| **Red card** (direct) | Including a **clearly incorrect second caution** |
| **Mistaken identity** | When the referee cautions or sends off the **wrong player** |
| **Clearly incorrectly awarded corner kick** | **NEW in 2026/27**, and a **competition option**, only if the decision can be changed immediately and without delaying the restart |

**That is the complete list.** A second yellow card that the referee *meant* to give is **not** reviewable. A foul in midfield is **not** reviewable. Offside is only reviewable **as part of a goal/no-goal decision**. VAR is a narrow tool, and most of the anger directed at it comes from people expecting it to fix things it was never permitted to touch.

**Who decides?** The referee. Always. Law 5: *"The referee will make the final decision which may be based solely on the information from the VAR and/or the referee reviewing the replay footage directly ('on-field review')."* The VAR **recommends**; the referee **decides**. And except for a "serious missed incident," the on-field officials **must always make a decision first**, including a decision *not* to penalise, and that decision only changes if it was a **clear and obvious error**.

**After the restart.** Once play has restarted, the referee may only review for **mistaken identity**, or for a potential sending-off for **violent conduct, spitting, biting, or extremely offensive/insulting/abusive actions** (IFAB, 2026, Law 5).

---

**Other technology, and who chose it.** Law 5 also states that **competitions MAY use** technology to assist the referee with (IFAB, 2026, Law 5):

- **the VAR protocol**
- **ball in/out of play**, including **goal-line technology (GLT)**
- **offside**, including **semi-automated offside technology (SAOT)**

The word doing the work in every case is **may**. **The Law permits; the competition chooses.** This is the structural pattern of the whole rulebook, and if you understand it you understand football's rules better than most commentators: **The IFAB writes one set of Laws with a menu of options, and every competition on Earth picks from the menu.** That is why the World Cup, the Premier League, and your high school conference all play by the same 17 Laws, and still do not play the same game.

**And in 2026/27, one more option appeared:** referees **may** wear **body cameras**, where the competition organiser supplies them and controls the footage (IFAB, 2026, Law 5). Optional. Competition's call.

:::reveal The referee shows a second yellow card, and it is clearly the wrong decision, the player never fouled anyone. Can VAR intervene? What if it was simply a harsh but defensible second yellow? ||| **Yes to the first, no to the second.** VAR may review a **red card resulting from a clearly incorrect second caution**. But the threshold is a **"clear and obvious error"**, a harsh-but-defensible caution is not clearly incorrect, so VAR must leave it alone. VAR does not re-referee close calls.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Which Law contains VAR, and what is the threshold for intervention?",
          answer:
            "Law 5 (The Referee), section 4. VAR may only assist in the event of a 'clear and obvious error' or a 'serious missed incident', it is not a tool for re-refereeing close calls.",
        },
        {
          prompt: "Is VAR mandatory?",
          answer:
            "No. Law 5 permits it only where the competition organiser has met the VAR Handbook requirements AND received written permission from FIFA. Most football is lawfully played without it.",
        },
        {
          prompt: "List the categories VAR may review in 2026/27.",
          answer:
            "Goal/no goal; penalty/no penalty; direct red card (including a clearly incorrect second caution); mistaken identity; and (new in 2026/27, as a competition option) a clearly incorrectly awarded corner kick.",
        },
      ],
    },
    {
      slug: "football-restarts-and-set-piece-laws",
      title: "14 · Restarts: free kicks, penalties, throw-ins, corners, goal kicks",
      section: "Section 3 · The Laws, and who writes them",
      body: `Every time the ball stops, a **restart** puts it back. Six of the 17 Laws are about restarts, and knowing them is what separates a player who reacts from one who anticipates.

**Law 13 · Free Kicks.** Two types (see Lesson 12): **direct** (can be scored straight from the kick) and **indirect** (cannot, someone else must touch it first). The referee signals an indirect free kick by holding an arm straight up, and keeps it up until the ball is touched by another player or goes out of play. Opponents must be **at least 9.15 m (10 yds)** from the ball until it is in play (unless they are on their own goal line between the posts).

**One rule most fans do not know:** when a defending team forms a **wall of three or more players**, **all attacking players must remain at least 1 m (1 yd) from the wall** until the ball is in play. Sneaking a player into the wall to block the goalkeeper's view is an offence (IFAB, 2026, Law 13).

**Law 14 · The Penalty Kick.** Awarded for a **direct-free-kick offence committed by a player inside their own penalty area** while the ball is in play. Taken from the **penalty mark, 11 m (12 yds)** out.

The details that decide penalties:

- The kicker must be **clearly identified**.
- **When the ball is kicked, the defending goalkeeper must have at least part of one foot touching, in line with, or BEHIND, the goal line.** Note that last word, the goalkeeper is **allowed to be behind the line**; what they may not do is come **off** it early. Almost everyone states this rule as "one foot on the line," which is only two-thirds of it.
- **Every other player** must be **outside the penalty area**, **behind the penalty mark**, **inside the field of play**, and **at least 9.15 m (10 yds)** from the penalty mark, which is exactly what the **penalty arc** is for. The arc is not decoration; it is that 10-yard measurement drawn on the grass.
- The ball must be **kicked forward**, **backheeling is permitted, provided the ball moves forward**, and the kicker **may not play it again** until it has touched another player. (Which is why a kicker who scores off their own rebound from the post has committed an offence.)
- **Feinting in the run-up is permitted; feinting to kick the ball once the kicker has COMPLETED the run-up is not**, that is an indirect free kick and a caution, **whether or not a goal is scored** (IFAB, 2026, Law 14).

**Law 15 · The Throw-in.** Awarded to the opponents of the player who **last touched the ball** when it wholly crosses the touchline. At the moment of delivery, the thrower must:

- **Stand facing the field of play**
- Have **part of each foot on the touchline or on the ground outside it**
- **Throw the ball with both hands, from behind and over the head**, from the point where it left the field of play

All **opponents must stand at least 2 m (2 yds)** from that point (IFAB, 2026, Law 15). If the throw-in is not taken correctly, **the opposing team takes it**, the throw is not simply retaken by you.

**A goal cannot be scored directly from a throw-in.** And, as Law 11 already told us, **there is no offside from a throw-in.**

**Law 16 · The Goal Kick.** Awarded when the ball wholly crosses the goal line, **last touched by an attacker**, without a goal being scored. The ball is kicked from **any point within the goal area**, and it is in play **as soon as it is kicked and clearly moves**. Opponents must be **outside the penalty area** until then, and because the ball is in play the instant it moves, **it does not have to leave the penalty area first.**

That rule change is why you now see goalkeepers passing five yards to a centre-back standing inside the six-yard box, a shape that would have been illegal not long ago. **No offside directly from a goal kick.** A goal *can* be scored directly from a goal kick, but only against the opponents.

**Law 17 · The Corner Kick.** Awarded when the ball wholly crosses the goal line, **last touched by a defender**, without a goal. Taken from the corner arc; **the flagpost must not be moved**. Opponents must be at least **9.15 m (10 yds)** away. **A goal can be scored directly from a corner kick** (against the opponents), and there is **no offside directly from a corner.**

**Law 8 · The dropped ball.** When play is stopped for a reason not covered by any other restart, an injury, an outside interference, the ball striking a match official, the referee restarts with a **dropped ball** (IFAB, 2026, Law 8):

- If the ball was **inside the penalty area** when play stopped, it is dropped for **the defending team's goalkeeper**.
- If it was **outside** the penalty area, it is dropped for **one player of the team that would have retained or gained possession**, and only if the referee cannot determine that, for **one player of the team that last touched it**.
- **All other players of both teams must remain at least 4 m (4.5 yds) from the ball** until it is in play, and the ball is in play **when it touches the ground**.

This is deliberately unglamorous. The old "contested drop ball," where two players squared up over a bouncing ball, was removed because it caused injuries and manufactured chaos.

**Law 10 · Kicks from the penalty mark.** When a competition requires a winner, the shoot-out procedure lives in **Law 10**, and remember from Lesson 4: **goals scored in a shoot-out do not count as goals.** The match itself remains a draw; the shoot-out only decides who advances.

:::reveal Your team is defending a free kick and sets a wall of four. An attacker jogs over and stands shoulder-to-shoulder inside your wall to screen the goalkeeper. Is that legal? ||| **No.** Law 13: when the defending team forms a wall of **three or more** players, **all attacking players must remain at least 1 m (1 yd) from the wall** until the ball is in play. Standing in the wall is an offence.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "How far must attacking players stay from a defensive wall of three or more?",
          answer: "At least 1 m (1 yd), until the ball is in play (Law 13). Standing inside the wall is an offence.",
        },
        {
          prompt: "Must a goal kick leave the penalty area to be in play?",
          answer:
            "No. Under Law 16 the ball is in play as soon as it is kicked and clearly moves, which is why keepers now pass short to a defender standing inside the box.",
        },
        {
          prompt: "Can a goal be scored directly from a throw-in?",
          answer: "No (Law 15). And there is no offside directly from a throw-in either.",
        },
      ],
    },
    {
      slug: "football-quiz-section-3",
      title: "Section 3 quiz · The Laws, and who writes them",
      section: "Section 3 · The Laws, and who writes them",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who writes the Laws of the Game?",
            options: [
              "FIFA",
              "The IFAB (International Football Association Board)",
              "UEFA and the other confederations jointly",
              "The Football Association of England alone",
            ],
            correctIndex: 1,
            explanation:
              "The IFAB, founded in 1886 by the four British associations; FIFA joined in 1913. This is the single most commonly botched fact in football education. FIFA holds four of The IFAB's eight votes, it does not own the rulebook.",
            sourceLessonSlug: "football-who-writes-the-laws",
          },
          {
            prompt: "How many votes does FIFA hold on The IFAB, and how many are needed to change a Law?",
            options: [
              "4 of 8; a change needs 6 (a three-quarters majority)",
              "8 of 8; FIFA has absolute control",
              "1 of 5; each member has one vote",
              "4 of 8; a simple majority of 5 is enough",
            ],
            correctIndex: 0,
            explanation:
              "FIFA has 4 votes; each of the four British associations has 1, for 8 in total. A change requires a three-quarters majority, 6 votes. So FIFA must persuade at least two British associations, and they cannot act without FIFA either.",
            sourceLessonSlug: "football-who-writes-the-laws",
          },
          {
            prompt: "How many Laws of the Game are there, and what is the current edition?",
            options: [
              "16 Laws; the 2025/26 edition",
              "17 Laws; the Laws of the Game 2026/27, effective 1 July 2026",
              "18 Laws; revised every four years before each World Cup",
              "17 Laws, but they have not been revised since 1997",
            ],
            correctIndex: 1,
            explanation:
              "17 Laws, revised ANNUALLY. The current edition is the Laws of the Game 2026/27, in force from 1 July 2026. Earlier editions are superseded, which matters enormously for handball.",
            sourceLessonSlug: "football-who-writes-the-laws",
          },
          {
            prompt: "Which sentence opens Law 11?",
            options: [
              "'Offside is judged at the moment the ball is received.'",
              "'It is not an offence to be in an offside position.'",
              "'A player level with the last defender is offside.'",
              "'Offside applies only in the attacking third.'",
            ],
            correctIndex: 1,
            explanation:
              "Law 11's first principle. Position and OFFENCE are two separate questions, you may stand in an offside position indefinitely, and nothing happens until you become involved in active play.",
            sourceLessonSlug: "football-law-11-offside",
          },
          {
            prompt: "Which parts of the body are considered when judging offside position?",
            options: [
              "Every part of the body, including hands and arms",
              "Head, body and feet, hands and arms are NOT considered, for any player including goalkeepers",
              "Only the feet",
              "Only the part of the body nearest the goal, whatever it is",
            ],
            correctIndex: 1,
            explanation:
              "Law 11: head, body, feet. Hands and arms are excluded for all players. The Law even sets the boundary, 'the upper boundary of the arm is in line with the bottom of the armpit', because you may legally score with a shoulder but not a hand.",
            sourceLessonSlug: "football-law-11-offside",
          },
          {
            prompt: "A defender attempts a controlled headed clearance, mishits it, and it falls to an attacker who was in an offside position when the pass was played. The attacker scores. What is the decision?",
            options: [
              "Offside, the attacker gained an advantage",
              "Goal, the defender deliberately played the ball, and Law 11 says an inaccurate clearance does not negate that",
              "Indirect free kick to the defending team",
              "Drop ball",
            ],
            correctIndex: 1,
            explanation:
              "Law 11: receiving from an opponent who DELIBERATELY PLAYED the ball is not gaining an advantage, and the Law explicitly states that an inaccurate or unsuccessful clearance does not negate the deliberate play. Only a deliberate SAVE would keep the offside alive.",
            sourceLessonSlug: "football-law-11-offside",
          },
          {
            prompt: "From which restarts can a player NEVER be offside?",
            options: [
              "Free kicks and penalties",
              "Goal kick, throw-in, and corner kick",
              "Kick-off and dropped ball",
              "Only the throw-in",
            ],
            correctIndex: 1,
            explanation:
              "Law 11 lists exactly three: a goal kick, a throw-in, and a corner kick, when received directly.",
            sourceLessonSlug: "football-law-11-offside",
          },
          {
            prompt: "What does Law 12 state as the framing principle for handball?",
            options: [
              "'Any contact between the ball and the hand or arm is an offence.'",
              "'Not every touch of a player's hand/arm with the ball is an offence.'",
              "'Handball is always a deliberate act.'",
              "'Handball is judged only inside the penalty area.'",
            ],
            correctIndex: 1,
            explanation:
              "Ball-to-hand is not automatically a foul, and the Law says so explicitly. The offences are: deliberately touching it; touching it when the arm has made the body 'unnaturally bigger'; and scoring off your own hand/arm.",
            sourceLessonSlug: "football-law-12-handball-and-cards",
          },
          {
            prompt: "Under the CURRENT (2026/27) Law 12, when does an accidental handball void a goal?",
            options: [
              "Whenever the ball accidentally touches any attacking player's arm anywhere in the build-up",
              "Only for the scorer, directly off their own hand/arm, or immediately after it touched their own hand/arm",
              "Never, accidental handball never affects a goal",
              "Only if the referee judges it deliberate",
            ],
            correctIndex: 1,
            explanation:
              "The old clause voiding a goal for an accidental handball anywhere in a team-mate's build-up has been REMOVED. Option A is a superseded version of the Law that people still quote, which is exactly why the edition year matters.",
            sourceLessonSlug: "football-law-12-handball-and-cards",
          },
          {
            prompt: "A defender inside their own penalty area denies an obvious goal-scoring opportunity by making a genuine but mistimed attempt to play the ball. A penalty is given. What card?",
            options: ["Red", "Yellow", "No card", "Two yellows"],
            correctIndex: 1,
            explanation:
              "Law 12's DOGSO provision: inside their own area, a player is CAUTIONED if the offence was an attempt to play the ball or a challenge for the ball. In all other circumstances, holding, pulling, pushing, no possibility of playing the ball, they are sent off.",
            sourceLessonSlug: "football-law-12-handball-and-cards",
          },
          {
            prompt: "Which Law contains VAR?",
            options: ["Law 6 (The Other Match Officials)", "Law 5 (The Referee), section 4", "Its own Law, number 18", "Law 12"],
            correctIndex: 1,
            explanation:
              "VAR is in Law 5 §4, plus a separate VAR protocol section in the same book. There is no Law 18, there are exactly 17 Laws.",
            sourceLessonSlug: "football-law-5-referee-and-var",
          },
          {
            prompt: "What is the threshold for a VAR intervention?",
            options: [
              "Any decision a team disputes",
              "A 'clear and obvious error' or a 'serious missed incident'",
              "Any incident inside the penalty area",
              "Whenever the broadcaster's replay shows a different angle",
            ],
            correctIndex: 1,
            explanation:
              "VAR is deliberately narrow. If the on-field decision was defensible, VAR does not touch it, it is not a tool for re-refereeing close calls.",
            sourceLessonSlug: "football-law-5-referee-and-var",
          },
          {
            prompt: "Which of these is NOT a VAR-reviewable category in 2026/27?",
            options: [
              "Goal / no goal",
              "Penalty / no penalty",
              "A yellow card for a midfield foul that the referee intended to give",
              "Mistaken identity when the referee cards the wrong player",
            ],
            correctIndex: 2,
            explanation:
              "The reviewable categories are goal/no goal, penalty/no penalty, direct red card (including a clearly incorrect second caution), mistaken identity, and (new in 2026/27 and a competition option) a clearly incorrectly awarded corner kick. An ordinary yellow card is not reviewable.",
            sourceLessonSlug: "football-law-5-referee-and-var",
          },
          {
            prompt: "Is VAR mandatory in football?",
            options: [
              "Yes, all competitions must use it",
              "No, Law 5 permits it only where the organiser meets the VAR Handbook requirements and has written permission from FIFA",
              "Yes, but only in professional leagues",
              "It is required by IFAB statute in all matches above under-16 level",
            ],
            correctIndex: 1,
            explanation:
              "Most football on Earth is lawfully played without VAR. The Law permits; the competition chooses, the structural pattern of the whole rulebook.",
            sourceLessonSlug: "football-law-5-referee-and-var",
          },
          {
            prompt: "Under Law 16, must a goal kick leave the penalty area before the ball is in play?",
            options: [
              "Yes, that has always been the rule",
              "No, the ball is in play as soon as it is kicked and clearly moves, which is why keepers now pass short to a defender inside the box",
              "Only in matches with VAR",
              "Only if the opposition presses",
            ],
            correctIndex: 1,
            explanation:
              "Law 16: in play as soon as it is kicked and clearly moves. Opponents must be outside the penalty area until then. The old 'must leave the area' requirement is gone.",
            sourceLessonSlug: "football-restarts-and-set-piece-laws",
          },
        ],
      },
    },

    // ────────────────── SECTION 4 · STRATEGY ──────────────────
    {
      slug: "football-formations",
      title: "15 · Formations, what the numbers mean and what they hide",
      section: "Section 4 · Strategy: how football is actually won",
      body: `A **formation** is written as a string of numbers, 4-4-2, 4-3-3, 3-5-2, read from the back, **not counting the goalkeeper**. So 4-3-3 is four defenders, three midfielders, three forwards. The numbers always add to **ten**, because the eleventh is in goal.

Remember from Lesson 3: **no Law mentions formations.** They are pure choice.

**The common shapes and what each is really trying to do.**

| Formation | Shape | What it is good at | What it gives up |
| --- | --- | --- | --- |
| **4-4-2** | Two banks of four, two strikers | Simple, compact, defensively solid; two strikers occupy two centre-backs | Outnumbered in central midfield (2 v 3) against most modern shapes |
| **4-3-3** | Back four, midfield three, front three | Width high up, pressing triggers, three midfielders control the centre | Full-backs get exposed when the wingers stay high |
| **4-2-3-1** | Back four, **double pivot**, a 10 and two wingers, one striker | Very stable, two holding midfielders screen the defence | The lone striker can get isolated |
| **3-5-2** | Three centre-backs, wing-backs, three central midfielders | Overloads midfield; wing-backs provide all the width | Enormous physical demand on wing-backs; wide areas exposed if they are caught upfield |
| **4-4-2 diamond** | Back four, midfield diamond, two strikers | Dominates the centre; a 10 behind two strikers | Almost **no natural width**, full-backs must supply it all |

**Now the important part, and it is the part TV coverage never says.**

**A formation is not a shape. It is at least three shapes.** The graphic before kick-off is nearly a lie. A team lines up as one thing **in possession**, a different thing **out of possession**, and something else again **in transition**.

The clearest example: a "4-3-3" defending often becomes a **4-5-1**, the two wingers drop into the midfield line, and the front three is suddenly a front one. Meanwhile a "4-3-3" *attacking* frequently becomes a **2-3-5**, the full-backs push high or tuck inside, one midfielder drops between the centre-backs, and five players occupy the last line. Same eleven, same "formation," three completely different structures inside a single minute.

So when someone tells you a team "plays 4-3-3," they have told you almost nothing. The real questions are:

1. **Where does the width come from?** Wingers, or full-backs, or wing-backs? Somebody must stretch the pitch, or the defence never has to move.
2. **Who protects the space in front of the centre-backs?** If nobody does, the team is one pass from being cut open.
3. **Who occupies the space between the opponent's midfield and defence?** That is where matches are won, and it is the hardest area of the pitch to defend.
4. **When we lose the ball, how many players are behind it?** This is the question that decides whether an ambitious attacking shape is brave or reckless.

**The principle underneath everything.** Football is a game of **creating numerical superiority**, getting more players than the opposition in the area where the ball is. Every formation is a bet about **where** you want to be strong and **where** you can afford to be weak. There is no correct formation, only a formation that suits the players you actually have and the opponent you are actually facing.

Which is the honest coaching answer, and the one that will serve you best if you ever pick a team: **choose the shape that fits your players.** A 3-5-2 with wing-backs who cannot run is not a 3-5-2. It is a disaster with a nice diagram.

:::reveal Someone tells you their team "plays 4-3-3." Why does that sentence tell you almost nothing? ||| Because a formation is **at least three different shapes**: one in possession, one out of possession, one in transition. A 4-3-3 typically defends as a **4-5-1** (wingers drop in) and attacks as something like a **2-3-5** (full-backs push up, a midfielder drops in). The real questions are where the **width** comes from, who **screens** the centre-backs, who occupies the space **between the lines**, and how many players are **behind the ball** when possession is lost.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "How do you read a formation, and why do the numbers add to ten?",
          answer:
            "From the back, and the goalkeeper is not counted, so 4-3-3 is four defenders, three midfielders, three forwards. Ten outfield players plus the keeper makes eleven.",
        },
        {
          prompt: "What is the core strategic idea every formation is a bet about?",
          answer:
            "Creating numerical superiority, having more players than the opposition where the ball is. Every formation chooses where to be strong and where to accept weakness.",
        },
      ],
    },
    {
      slug: "football-in-possession",
      title: "16 · In possession: how good teams actually move the ball",
      section: "Section 4 · Strategy: how football is actually won",
      body: `You have the ball. What are you trying to do?

The naive answer, "go forwards", is the reason most amateur teams look like a firework display and lose 3-0. Here is the real one.

**The purpose of possession is to MOVE the opposition.** A defence that never has to move is impossible to break down. A defence that has been pulled ten yards to the left has a hole ten yards to the right. **You are not passing the ball to the ball. You are passing the ball to drag people.**

**The four principles.**

**1. Width and depth: make the pitch as big as you can.**
Push players to both touchlines and get somebody in behind. This forces the defence to **spread horizontally** (covering the width) and **drop vertically** (respecting the runner in behind). A stretched defence has gaps between its players. A compact one does not. Teams that attack with everyone in a bunch in the middle are making the defenders' job trivially easy.

**2. Create the passing triangle.**
The player on the ball should always have **at least two** passing options at different angles. If the only pass available is a straight line, a single defender can block it. Triangles mean a defender must choose, and choosing means being wrong about something. This is what coaches mean by "support the ball", and it is why the player *without* the ball is usually the one who has made the mistake when a possession breaks down.

**3. Play between the lines.**
The most valuable real estate on a football pitch is the strip of grass **between the opposition's midfield line and their defensive line**. Why? Because a player receiving there is **facing the goal** with **defenders behind them**, and the midfielders who should mark them are, by definition, in front of them and running the wrong way. This is why the "10" exists, and why the modern game obsesses over "receiving between the lines" and "playing through the lines."

**4. Switch the play.**
The single most under-used weapon in amateur football. When the opposition has shuffled everyone across to your right side to squeeze you, the whole **left** is empty. A long, flat pass across the pitch, a **switch**, forces the entire defence to sprint sideways and re-organise, and defences are at their most disorganised while moving. Grind them left, then punish them right.

**Building from the back.** Modern teams pass out from the goalkeeper rather than launching the ball long. It looks like showing off. It is not. The purpose is to **invite the press**: if the opposition come forward to hunt the ball, they leave space behind themselves, and one pass through the press means you are attacking a stretched, unbalanced defence with numbers. Law 16 makes this deliberately easier, a goal kick is in play as soon as it is kicked and clearly moves, and opponents must be outside the penalty area (IFAB, 2026, Law 16).

**But it is a genuine risk**, and this is the honest bit: playing out from the back with players who cannot execute it is how a team concedes an idiotic goal. If your centre-backs cannot pass under pressure, **do not do it**. A long ball into a channel is not a moral failure. It is a legitimate strategy, and some very good teams are built on it.

**The counter-argument, stated fairly.** There is an entire, respectable school of football, direct play, second balls, set pieces, pressing high and going long, that wins matches and trophies. Possession is **not** a virtue in itself. A team that has 70% of the ball and does nothing with it has simply found an elaborate way to pass sideways. **What matters is what possession produces**: shots from good positions (Lesson 7).

:::reveal Your opponents have crowded every player over to your right wing to trap you. What is the most valuable pass on the pitch, and why? ||| A **switch of play**, a long, flat pass to the completely empty **left** side. Defences are at their most disorganised while moving sideways, and forcing the whole block to sprint across the pitch and re-set is what creates the gap. Grinding them to one side and then punishing the other is the point of moving the ball at all.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "What is the actual purpose of keeping possession?",
          answer:
            "To MOVE the opposition. A defence that never has to move cannot be broken down; a defence dragged ten yards left has a hole ten yards right. Possession that doesn't move anyone is just elaborate sideways passing.",
        },
        {
          prompt: "Why is the space 'between the lines' so valuable?",
          answer:
            "A player receiving between the opponent's midfield and defensive lines is facing goal with defenders behind them, and the midfielders who should mark them are in front of them, running the wrong way.",
        },
        {
          prompt: "Why do teams play out from the back rather than launching it long?",
          answer:
            "To invite the press. If opponents come forward to hunt the ball, they leave space behind, and one pass through the press means attacking a stretched defence with numbers. But it is a real risk: if your defenders can't pass under pressure, don't do it.",
        },
      ],
    },
    {
      slug: "football-pressing-and-transitions",
      title: "17 · Out of possession: pressing, compactness, and the five seconds that decide games",
      section: "Section 4 · Strategy: how football is actually won",
      body: `You do not have the ball. There are two completely different ways to not have the ball, and the difference is a strategic choice.

**Option A: the high press.** Hunt the ball high up the pitch, in the opponent's half, immediately.

- **The prize:** win the ball 30 yards from their goal, with their defenders facing the wrong way. The shortest route to a good chance in football is winning the ball in the opponent's defensive third.
- **The price:** you must push your defensive line high to stay **compact**, which leaves space **behind** it. A single accurate long pass over the top can put a striker through on goal.
- **The requirement:** everyone presses or nobody does. One player who does not sprint creates a passing lane, and the press is broken, and now you have committed eight players upfield for nothing. It is the most physically and mentally demanding thing in football.

**Option B: the low block.** Drop deep, get everyone behind the ball, deny space near your own goal, and concede the ball in areas where it cannot hurt you.

- **The prize:** the opposition can pass it around in front of you all day. They are welcome to. There is nowhere to go, and no space behind you to run into.
- **The price:** you have surrendered territory and initiative. You will spend the match defending, and if you concede, you must come out of your shell and become vulnerable.
- **This is not cowardice.** It is a completely legitimate, often brilliant strategy, especially against a stronger team, and it pairs naturally with the counter-attack.

**Compactness: the concept underneath both.** In either plan, the distances between your defensive line, your midfield line, and your forward line must stay **short**. If your defence drops and your forwards do not, you have opened a 40-yard gap through the middle of your own team and the opposition will simply play in it. **The whole team moves as one block**, up together, back together, across together. Amateur teams lose because they stretch; good teams look like a net being dragged around.

**The offside trap.** A defensive line can step **up** in unison at the moment a pass is played, leaving the striker in an offside position. This is legal and effective, and it is a **high-risk play**, because a single defender who does not step (or steps late) plays everyone onside, and the entire line is then behind the ball with a striker running free. Remember Law 11: the position is judged **at the moment the ball is played by the team-mate**, and **level is onside** (IFAB, 2026, Law 11). The trap has to be *early* and it has to be *together*.

---

**Now the most important idea in modern football: TRANSITION.**

A **transition** is the moment possession changes hands. There are two.

**Transition to defence (you have just LOST the ball).** This is the most dangerous moment in football, and it is not close. Why? Because you were **attacking**, which means your players are spread out, pushed high, out of position, and off balance. The opposition are, at that exact instant, **facing a disorganised team**.

The response is the **counter-press**: the instant you lose the ball, the nearest two or three players attack the ball immediately and ferociously, not to tackle so much as to **deny the opponent the time to look up and start the counter**. If you win it back in those first seconds, you are attacking a defence that has already begun to think about attacking. If you fail, at least you have slowed the break long enough for your team to get back.

**Transition to attack (you have just WON the ball).** The mirror image. The opposition were attacking; they are spread out and disorganised. **This is the best attacking moment you will get all match**, and it lasts about five seconds. A team that wins the ball and immediately passes it sideways has thrown that moment away. A team that wins the ball and drives forward at speed is a **counter-attack**, and counter-attacks are efficient precisely because the defence has not yet re-formed.

**This is why the transition moments matter more than the possession phases.** A very well-organised defence, given time to set, is genuinely hard to break down. A defence caught in transition is not organised at all. The best teams in the world are not the ones with the prettiest passing, they are the ones who are **ruthless in the five seconds after the ball changes hands, in both directions.**

:::reveal What is the most dangerous moment for a team, and why? ||| **The moment they LOSE the ball.** Because they were attacking, so their players are spread out, pushed high, out of position, and off balance. The opposition are, at that instant, facing a disorganised team. The response is the **counter-press**: attack the ball immediately with the nearest players to deny the opponent time to look up and start their counter.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "What is a counter-press?",
          answer:
            "Attacking the ball immediately and ferociously in the first seconds after losing it, with the nearest two or three players, to deny the opponent time to look up and launch a counter-attack against your disorganised, spread-out team.",
        },
        {
          prompt: "Why is compactness the concept underneath both the high press and the low block?",
          answer:
            "Because the distances between your defensive, midfield and forward lines must stay short. If the defence drops and the forwards don't, you have opened a 40-yard hole through your own team. The whole block moves as one.",
        },
        {
          prompt: "Why is the offside trap high-risk?",
          answer:
            "One defender who fails to step up, or steps late, plays everyone onside, and the whole defensive line is then behind the ball with a striker running free. The trap must be early and it must be together.",
        },
      ],
    },
    {
      slug: "football-set-pieces-and-watching",
      title: "18 · Set pieces, and how to watch a match like an analyst",
      section: "Section 4 · Strategy: how football is actually won",
      body: `**Set pieces are the one part of football you can rehearse.**

Everything else in the game is chaotic, twenty-two people improvising. But a corner, a free kick, and a throw-in are **stopped, positioned, and repeatable**. It is the only moment where a coach's plan survives contact with reality intact, and it is the reason professional clubs now employ **dedicated set-piece coaches**. If you are a small team playing a better team, set pieces are the fairest fight you will get all afternoon.

**Attacking corners: the choices.**

| Delivery | What it does |
| --- | --- |
| **Inswinger** | Curls **towards** the goal. Attacks the goalkeeper. A flick anywhere is dangerous; the keeper must commit. |
| **Outswinger** | Curls **away** from the goal. Easier for an attacker to meet with power, and away from the keeper's reach. |
| **Near post flick-on** | One attacker attacks the near post and glances the ball across the six-yard box for runners behind. |
| **Short corner** | Two players, a pass, and a cross from a different angle, designed to drag defenders out and change the geometry. |

**Attacking routines** are about **movement, not height.** Blocking runs (legal screening, but be careful, Law 12 makes **holding** an offence), decoy runners, a group starting together and splitting late. The point is to **create a moment of separation** between a marker and a runner. And remember from Lesson 14: there is **no offside from a corner kick**, attackers can stand wherever they like.

**Defending corners: zonal vs man-marking.** Zonal marking assigns defenders to **spaces**; man-marking assigns them to **players**. Most teams now use a hybrid. Pundits love to blame "zonal marking" whenever a corner is conceded, which is mostly lazy, both systems concede goals, and both work.

**Free kicks.** Direct shooting range is roughly 18-30 yards out and central. Further out or wider, it becomes a **delivery**, effectively a corner from a different angle. And the wall: Law 13 requires opponents to stay **9.15 m (10 yds)** away, and where the defending team forms a wall of **three or more**, all attacking players must stay **1 m (1 yd)** clear of it (IFAB, 2026, Law 13).

**The long throw.** Genuinely underrated, entirely legal, and one of the cheapest advantages in amateur football. A throw-in launched into the penalty area is a free cross that the opposition cannot be offside against, Law 11 explicitly says **no offside from a throw-in**. One player with a long throw changes the value of every touchline in the attacking half.

---

**How to watch a match like an analyst.**

Almost everybody watches the ball. The ball is the least informative object on the pitch. Here is a better protocol, try it for ten minutes of any match:

**1. Watch the space, not the ball.** Where is the pitch **empty**? That is where the next goal comes from.

**2. Pick one player and watch only them for five minutes.** Not the striker, pick a **full-back** or a **holding midfielder**. You will suddenly see the enormous amount of work that happens off the ball and never appears on a highlight reel. This single exercise will teach you more about football than a hundred hours of watching the ball.

**3. Watch the defensive line.** Is it high or deep? Does it step up together? Where does it break? A back four that is not level is a back four about to concede.

**4. Watch the five seconds after every turnover.** Do they counter-press or do they retreat? That one choice tells you the coach's entire philosophy.

**5. Ask "who is free?"** At any moment, somebody on the pitch is unmarked. Find them before the player on the ball does. When you start beating the professionals to that answer, you are reading the game.

**6. Count the chances, not the score.** A 1-0 win in which you were battered is not a good performance; a 0-2 loss in which you created eight clear chances is often a team about to go on a run. Score is a noisy signal. **Chances are the real story**, which is the whole intuition behind expected goals from Lesson 7.

:::reveal Why are set pieces disproportionately valuable for a weaker team? ||| Because they are the **only rehearsable moments** in football. Open play is twenty-two people improvising, and the better team usually wins an improvisation contest. A corner or a free kick is stopped, positioned and repeatable, it is the fairest fight a weaker side will get, which is exactly why professional clubs now employ dedicated set-piece coaches.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Why can a long throw-in be so dangerous in the attacking half?",
          answer:
            "It is a free cross that the opposition cannot be offside against, Law 11 says there is no offside directly from a throw-in. One player with a long throw changes the value of every touchline.",
        },
        {
          prompt: "Name three things to watch in a match instead of the ball.",
          answer:
            "The empty space (where the next goal comes from); one single off-ball player for five minutes (a full-back or holding midfielder); and the five seconds after every turnover (counter-press or retreat?).",
        },
      ],
    },
    {
      slug: "football-quiz-section-4",
      title: "Section 4 quiz · Strategy",
      section: "Section 4 · Strategy: how football is actually won",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How is a formation read, and why do the numbers add to ten?",
            options: [
              "Front to back; ten because one player is always suspended",
              "Back to front, excluding the goalkeeper, ten outfield players plus the keeper makes eleven",
              "Back to front, including the goalkeeper",
              "The order is arbitrary",
            ],
            correctIndex: 1,
            explanation:
              "4-3-3 = four defenders, three midfielders, three forwards. The goalkeeper is never counted, so the digits always sum to ten.",
            sourceLessonSlug: "football-formations",
          },
          {
            prompt: "Why does 'we play 4-3-3' tell you very little about a team?",
            options: [
              "Because 4-3-3 is illegal in most competitions",
              "Because a formation is at least three shapes, one in possession, one out of possession, one in transition",
              "Because formations are decided by the referee",
              "Because all formations are functionally identical",
            ],
            correctIndex: 1,
            explanation:
              "A 4-3-3 typically defends as a 4-5-1 (wingers drop into midfield) and attacks as something like a 2-3-5 (full-backs push up, a midfielder drops in). The kick-off graphic is nearly a lie.",
            sourceLessonSlug: "football-formations",
          },
          {
            prompt: "Which of these is the weakness of a 4-4-2 against most modern shapes?",
            options: [
              "It has no strikers",
              "It is outnumbered in central midfield (two against three)",
              "It cannot defend set pieces",
              "It is illegal under Law 3",
            ],
            correctIndex: 1,
            explanation:
              "4-4-2 is compact and simple and its two strikers occupy two centre-backs, but two central midfielders against three is a losing count in the area that matters most.",
            sourceLessonSlug: "football-formations",
          },
          {
            prompt: "What is the actual purpose of keeping possession of the ball?",
            options: [
              "To run down the clock",
              "To MOVE the opposition, a defence that never has to move cannot be broken down",
              "To improve the team's passing statistics",
              "To tire out the opposition's goalkeeper",
            ],
            correctIndex: 1,
            explanation:
              "You are not passing the ball to the ball; you are passing it to drag people. A defence pulled ten yards left has a hole ten yards right. Possession that moves nobody is just elaborate sideways passing.",
            sourceLessonSlug: "football-in-possession",
          },
          {
            prompt: "Why is the space 'between the lines' the most valuable area of the pitch?",
            options: [
              "Because the Laws grant extra protection there",
              "Because a player receiving there faces the goal with defenders behind them, while the midfielders who should mark them are in front and running the wrong way",
              "Because it is closest to the goal",
              "Because offside does not apply there",
            ],
            correctIndex: 1,
            explanation:
              "This is why the '10' exists and why the modern game obsesses over 'receiving between the lines'. It has nothing to do with the Laws, it is pure geometry and body orientation.",
            sourceLessonSlug: "football-in-possession",
          },
          {
            prompt: "Why do teams deliberately pass out from the back instead of kicking long?",
            options: [
              "To show off technical ability",
              "To invite the press, if opponents come forward to hunt the ball, they leave space behind, and one pass through the press attacks a stretched defence",
              "Because Law 16 requires it",
              "To reduce the goalkeeper's workload",
            ],
            correctIndex: 1,
            explanation:
              "It is a deliberate trap, made easier by Law 16 (the ball is in play the instant it is kicked and clearly moves; opponents must be outside the area). But it is a genuine risk: if your centre-backs can't pass under pressure, don't do it.",
            sourceLessonSlug: "football-in-possession",
          },
          {
            prompt: "Your opponents have crowded everyone to one flank to trap you. What is the highest-value pass?",
            options: [
              "A pass backwards to the goalkeeper",
              "A switch of play, a long flat pass to the empty far side",
              "A short pass into the crowded area",
              "A long ball down the same flank",
            ],
            correctIndex: 1,
            explanation:
              "Defences are at their most disorganised while moving sideways. Grind them to one side, then punish the other. The switch is the single most under-used weapon in amateur football.",
            sourceLessonSlug: "football-in-possession",
          },
          {
            prompt: "What is the trade-off of a high press?",
            options: [
              "It wins the ball near the opponent's goal but leaves space behind a high defensive line",
              "It is safer than a low block in every respect",
              "It requires only the strikers to work hard",
              "It is prohibited above youth level",
            ],
            correctIndex: 0,
            explanation:
              "The prize is winning the ball 30 yards from their goal with defenders facing the wrong way. The price is the space behind your high line, and the requirement is that EVERYONE presses, one player who doesn't sprint breaks it.",
            sourceLessonSlug: "football-pressing-and-transitions",
          },
          {
            prompt: "Is a low block a sign of a cowardly or unambitious team?",
            options: [
              "Yes, good teams always press high",
              "No, it is a legitimate strategy that surrenders territory in exchange for denying space near your own goal, and it pairs naturally with the counter-attack",
              "Yes, and it is penalised as time-wasting",
              "It is only legal when a team is a player short",
            ],
            correctIndex: 1,
            explanation:
              "Dropping deep, getting everyone behind the ball and inviting the opponent to pass it around in front of you is often brilliant, especially against a stronger side. The price is surrendering territory and initiative.",
            sourceLessonSlug: "football-pressing-and-transitions",
          },
          {
            prompt: "What is the most dangerous moment in football for a team, and why?",
            options: [
              "The moment they win the ball, because they may be caught out of shape",
              "The moment they LOSE the ball, because they were attacking, so they are spread out, high, and off balance",
              "A corner against them",
              "The first minute of the second half",
            ],
            correctIndex: 1,
            explanation:
              "Losing the ball while attacking hands the opposition a disorganised team to attack. This is why the counter-press exists: the nearest players attack the ball instantly to deny the opponent time to look up.",
            sourceLessonSlug: "football-pressing-and-transitions",
          },
          {
            prompt: "Why is the offside trap high-risk?",
            options: [
              "Because Law 11 makes it an offence",
              "Because one defender who fails to step up (or steps late) plays everyone onside, leaving the whole line behind the ball",
              "Because VAR always overturns it",
              "Because it requires the goalkeeper to leave the area",
            ],
            correctIndex: 1,
            explanation:
              "The trap is legal and effective, but it must be EARLY and TOGETHER. Remember Law 11: position is judged at the moment the ball is played, and level is onside.",
            sourceLessonSlug: "football-pressing-and-transitions",
          },
          {
            prompt: "Why are set pieces disproportionately valuable for a weaker team?",
            options: [
              "Because referees award more of them to underdogs",
              "Because they are the only rehearsable moments in football, stopped, positioned, and repeatable",
              "Because the offside law is suspended during them",
              "Because they carry more points",
            ],
            correctIndex: 1,
            explanation:
              "Open play is twenty-two people improvising, and the better team usually wins an improvisation contest. Set pieces are the fairest fight a weaker side gets, which is why professional clubs now employ dedicated set-piece coaches.",
            sourceLessonSlug: "football-set-pieces-and-watching",
          },
          {
            prompt: "Why is a long throw-in into the box so dangerous?",
            options: [
              "Because a goal can be scored directly from it",
              "Because it is a free cross that the opposition cannot be offside against, Law 11 says no offside directly from a throw-in",
              "Because defenders must stay 10 yards away",
              "Because the goalkeeper may not handle it",
            ],
            correctIndex: 1,
            explanation:
              "No offside from a throw-in (Law 11). Note that a goal CANNOT be scored directly from a throw-in (Law 15), the danger is the second contact, not the throw itself.",
            sourceLessonSlug: "football-set-pieces-and-watching",
          },
          {
            prompt: "What does an inswinging corner do that an outswinger does not?",
            options: [
              "It curls TOWARDS the goal, attacking the goalkeeper, a flick anywhere is dangerous and the keeper must commit",
              "It guarantees a header on target",
              "It removes the offside law",
              "It must be taken with the weaker foot",
            ],
            correctIndex: 0,
            explanation:
              "The inswinger attacks the keeper and turns any flick into a threat. The outswinger curls AWAY from goal, easier for an attacker to meet with power, and away from the keeper's reach. Different tools, different jobs.",
            sourceLessonSlug: "football-set-pieces-and-watching",
          },
          {
            prompt: "You want to actually read a match rather than just watch it. What is the single best exercise?",
            options: [
              "Follow the ball closely at all times",
              "Pick one off-ball player, a full-back or holding midfielder, and watch only them for five minutes",
              "Watch only the replays",
              "Track the score minute by minute",
            ],
            correctIndex: 1,
            explanation:
              "The ball is the least informative object on the pitch. Watching one off-ball player reveals the enormous volume of work that never appears on a highlight reel, and it teaches you more than a hundred hours of ball-watching.",
            sourceLessonSlug: "football-set-pieces-and-watching",
          },
        ],
      },
    },

    // ────────────────── SECTION 5 · HISTORY ──────────────────
    {
      slug: "football-before-1863",
      title: "19 · Before England: the ball games that came first",
      section: "Section 5 · Where the game came from",
      body: `**Football was not invented in England.** England **codified** it. Those are different claims, and collapsing them is how a lot of football history gets told badly.

Human beings have been kicking objects at, over, and past each other for a very long time, on every inhabited continent. What England did in 1863 was write **one set of rules** that other people agreed to use, an act of standardisation, not creation. That act was genuinely world-changing. But it was not the beginning of football.

**Cuju.** The oldest ball game FIFA itself recognises is **cuju** (蹴鞠, literally "kick ball"), played in China. FIFA's position is careful and worth quoting in its own terms: cuju is **"the earliest form of football for which there is scientific evidence"** (FIFA, n.d.). During the **Han dynasty (206 BCE - 220 CE)**, cuju spread from the army to the royal court and the upper classes, and the games were **standardised, with established rules** (FIFA, n.d.).

Notice what that means. **Standardised, ruled ball-kicking is roughly two thousand years older than England.** The English contribution is real, but it is a contribution to a very long story, not the first page of it.

**Other games, honestly stated.** Many cultures played ball games that resemble football to a greater or lesser degree, among them **kemari** in Japan, **episkyros** and **harpastum** in the Greek and Roman worlds, and a family of rough, large-scale **"mob football"** games played across medieval Europe, in which whole villages contested a ball across open country with few rules and frequent injuries.

**Here is the honest caveat, and this course is going to make it rather than hand you a neat lineage:** these games are **not ancestors of modern football in any direct, traceable sense.** There is no documented line of descent from cuju to the Premier League. What the record actually shows is that **ball games are close to a human universal**, that they arose independently in many places, and that the specific game we play today was assembled in nineteenth-century Britain out of local British traditions.

Anyone who draws you a tidy family tree from Han China to Wembley is selling you something. The true claim is both more modest and more interesting: **England did not invent the idea. England invented the rulebook, and the rulebook is what let the game go global.**

**Why England, and why then?** Two specific pressures, and they are unglamorous:

1. **The public schools.** Different English schools played different football games with wildly different rules, some allowed carrying the ball, some allowed **"hacking"** (kicking an opponent in the shins), some did not. When boys from different schools met at university, they could not play each other, because nobody could agree on what the game was. That is a coordination problem, and coordination problems get solved by committees.
2. **Industrialisation.** Factories, railways, and the six-day working week produced something new: large numbers of urban workers with **Saturday afternoons free**, in **cities**, connected by **trains**. That is the exact recipe for organised, regular, spectator sport, teams that can travel to each other and crowds that can turn up to watch. Football did not spread because it was beautiful. It spread because the railway timetable made it possible.

:::reveal Did England invent football? ||| **No, England CODIFIED it.** Ball games are close to a human universal and arose independently in many cultures; FIFA itself recognises the Chinese game **cuju** (standardised, with rules, during the Han dynasty, 206 BCE-220 CE) as the earliest form of football for which there is scientific evidence. What England did in 1863 was write **one rulebook that others agreed to use**, an act of standardisation, and the thing that let the game go global.

## Sources
- FIFA. (n.d.). *The origins of football*. Retrieved July 2026, from https://inside.fifa.com/
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "What is cuju, and what exactly does FIFA claim about it?",
          answer:
            "A Chinese kicking game. FIFA's careful claim is that cuju is 'the earliest form of football for which there is scientific evidence', standardised with established rules during the Han dynasty (206 BCE-220 CE).",
        },
        {
          prompt: "Is there a traceable line of descent from cuju to modern football?",
          answer:
            "No. Ball games arose independently in many cultures. Modern football was assembled in nineteenth-century Britain out of local British traditions. Anyone drawing a tidy family tree from Han China to Wembley is selling you something.",
        },
      ],
    },
    {
      slug: "football-1863-and-the-fa",
      title: "20 · 1863: the tavern, the split with rugby, and the birth of the rulebook",
      section: "Section 5 · Where the game came from",
      body: `**Monday 26 October 1863. The Freemasons' Tavern, Great Queen Street, London.**

**Ebenezer Morley**, a solicitor and sportsman, met representatives of a dozen London and suburban clubs, having proposed that football should have **one standardised set of rules**. Out of that meeting the **Football Association (The FA)** was formed, and the original Laws of the Game began to take shape (FIFA, n.d.). The first match played under the new FA rules took place on **19 December 1863** (FIFA, n.d.).

That is the founding moment of the sport you are learning. It is not a stadium, a trophy, or a genius. It is **a meeting in a pub about rules**, and it worked because a rulebook is the only thing that lets strangers play each other.

**The split that created two sports.**

The FA's founders did not agree with each other. The arguments were about two things:

1. **Handling.** Should a player be allowed to **run with the ball in their hands**?
2. **Hacking.** Should a player be allowed to **kick an opponent in the shins**?

The clubs that wanted to keep handling and hacking walked away. **Blackheath** withdrew rather than give them up. The clubs that stayed produced a game of **kicking and dribbling**, with no carrying the ball. The clubs that left eventually organised themselves into **rugby football**.

So **football and rugby are siblings**, not distant relations. They were the same argument until 1863, and they separated over the question of whether you may pick the ball up. The word "soccer", from *assoc.*, exists **precisely to mark this split** (Lesson 1). Without rugby, nobody would ever have needed the word.

**Then came money, and money changed everything.**

Football began as a game for gentlemen amateurs who could afford not to be paid. But the game spread fast into the **industrial north and midlands of England**, into working-class towns where a talented player was a factory hand who could not afford to take a Saturday off unpaid. Northern clubs started **paying players quietly**, which was, under the rules of the time, cheating.

The FA had a choice: enforce amateurism and split the sport, or admit reality. On **20 July 1885, The FA legalised professionalism.** It is one of the most consequential decisions in sports history: it accepted that football would be a **working-class, paid, competitive** sport rather than a gentlemen's pastime, and it is the reason the game grew the way it did.

Three years later, on **17 April 1888**, twelve clubs meeting in Manchester created **the Football League**, the world's first professional league competition. Once you have professionals, you need a **regular fixture list** so clubs have reliable income, and once you have a fixture list you have a **league table**, and once you have a league table you have everything that follows: promotion, relegation, rivalries, and a hundred and forty years of arguing.

**Then it went international.** On **21 May 1904**, seven European associations founded **FIFA** in Paris, notably **without** the British associations, who did not initially join. The IFAB, remember, already existed (since **1886**) and already owned the Laws. **FIFA joined The IFAB in 1913** (The IFAB, n.d.), which is exactly the arrangement that still stands today: the world body has four votes at a table it did not build.

**Timeline.**

| Year | Event |
| --- | --- |
| **1863** | The FA founded at the Freemasons' Tavern; the first Laws of the Game drafted |
| **1885** | The FA legalises professionalism |
| **1886** | **The IFAB** founded by the four British associations |
| **1888** | The Football League founded in Manchester, the world's first professional league |
| **1904** | **FIFA** founded in Paris |
| **1913** | FIFA joins The IFAB |
| **1930** | The first **FIFA World Cup**, in Uruguay |

:::reveal Football and rugby split in 1863 over two specific questions. What were they? ||| **(1) Handling**, should a player be allowed to run with the ball in their hands? And **(2) hacking**, should a player be allowed to kick an opponent in the shins? The clubs that wanted to keep both (including **Blackheath**) walked out and eventually organised rugby football. The clubs that stayed produced a kicking-and-dribbling game, and the word "soccer," from *assoc.*, exists precisely to mark that split.

## Sources
- FIFA. (n.d.). *London's football history: Laws of the Game*. Retrieved July 2026, from https://inside.fifa.com/news/london-s-football-history-laws-of-the-game-2902981
- The Football Association. (n.d.). *The history of The FA*. Retrieved July 2026, from https://www.thefa.com/about-football-association/who-we-are/history
- The IFAB. (n.d.). *The IFAB background*. Retrieved July 2026, from https://www.theifab.com/background/`,
      recallContent: [
        {
          prompt: "Where and when was the Football Association founded, and by whom was it proposed?",
          answer:
            "26 October 1863, at the Freemasons' Tavern in London. Ebenezer Morley, a solicitor and sportsman, proposed that football should have one standardised set of rules and met representatives of a dozen clubs.",
        },
        {
          prompt: "When did The FA legalise professionalism, and why does it matter?",
          answer:
            "20 July 1885. Northern working-class clubs were already paying players quietly. Legalising it accepted that football would be a paid, working-class, competitive sport rather than a gentlemen's pastime, and that is why it grew the way it did.",
        },
        {
          prompt: "Which came first, FIFA or The IFAB?",
          answer:
            "The IFAB (1886). FIFA was founded in 1904 and joined The IFAB in 1913. The world body has four votes at a table it did not build.",
        },
      ],
    },
    {
      slug: "football-global-spread",
      title: "21 · How the game went global, and why the best of it is not European",
      section: "Section 5 · Where the game came from",
      body: `Football travelled the world along the routes of **British trade and empire**: sailors, railway engineers, mining companies, bankers, teachers and missionaries carried a ball and a rulebook to every port they worked in. That is the standard story and it is true as far as it goes.

**But it is only half the story, and the second half is the interesting one.**

Everywhere the game landed, **local people took it and made it their own**, and in most places they got very good at it very fast, often specifically by beating the people who brought it. Football did not stay a British export. It became a genuinely global vernacular, and the places it landed in reshaped it:

- **South America**, Argentina, Brazil, Uruguay, did not merely adopt football; it developed a distinct playing culture and then dominated the world stage. **Uruguay won the first World Cup, in 1930**, as hosts, beating Argentina 4-2 in the final (FIFA, n.d.). The idea that the game's centre of gravity has always been European is simply false, and it was false almost immediately.
- **Africa** has produced generations of world-class players and a fiercely competitive continental game, while remaining, as Section 7 will show, on the wrong end of the sport's economics.
- **Asia** hosts some of the largest football audiences on Earth and a rapidly growing professional infrastructure.

**Where the money went, and where the players came from.** Here is the modern reality stated plainly: **the richest LEAGUES are concentrated in western Europe; the PLAYERS are not.** European clubs recruit talent from South America, Africa, Asia and North America, and the value created by those players accrues overwhelmingly to European clubs. That is not an accident of geography or a story about talent. It is a **structure**, and it has a history, the same trade routes that carried the ball out now carry the players back. Section 7 takes this apart properly.

**Two things a good football education must not do:**

1. **Treat European football as the "real" game and everything else as a feeder.** The best players in the history of the sport have come from all over the world, and the game's most influential playing cultures are not all European.
2. **Treat the women's game as an appendix.**

**The women's game is not an appendix. It is a central part of this story, and it has its own, much uglier, history.** That history is the subject of the next lesson, and it is the most important thing in this section.

**The World Cup, briefly.** The first **FIFA World Cup** was played in **Uruguay in 1930**, with the hosts winning. The first **FIFA Women's World Cup** was played in **China in 1991**, with the **United States** beating Norway 2-1 in the final in Guangzhou. Look at those two dates: **1930** and **1991**. A sixty-one-year gap. That gap is not because women did not want to play. As the next lesson shows, it is because they were **stopped**.

**And, for accuracy:** the **2026 FIFA World Cup** is being played across **Canada, Mexico and the United States** with an expanded format, **48 teams** and **104 matches**, replacing the old 32-team, eight-group structure with **12 groups of four** (FIFA, n.d.). It is happening as this course is published, so this course is not going to tell you who won it.

:::reveal Which country won the first FIFA World Cup, in which year, and why does that fact matter to how we tell football's history? ||| **Uruguay**, in **1930**, as hosts, beating Argentina 4-2 in the final. It matters because it demolishes the assumption that the game's centre of gravity has always been European. South America did not merely adopt football; it developed its own playing culture and dominated the world stage **immediately**.

## Sources
- FIFA. (n.d.). *1930 FIFA World Cup Uruguay*. Retrieved July 2026, from https://www.fifa.com/
- FIFA. (n.d.). *FIFA Women's World Cup China 1991*. Retrieved July 2026, from https://www.fifa.com/en/tournaments/womens/womensworldcup/fifa-womens-world-cup-china-1991
- FIFA. (n.d.). *How the FIFA World Cup 26 will work with 48 teams*. Retrieved July 2026, from https://www.fifa.com/en/articles/article-fifa-world-cup-2026-mexico-canada-usa-new-format-tournament-football-soccer`,
      recallContent: [
        {
          prompt: "Who won the first men's World Cup and the first Women's World Cup, and when?",
          answer:
            "Men's: Uruguay, 1930, as hosts (beating Argentina 4-2). Women's: the United States, 1991, in China (beating Norway 2-1). The 61-year gap is not because women didn't want to play, they were stopped.",
        },
        {
          prompt: "State the modern structural reality of football's economics in one sentence.",
          answer:
            "The richest LEAGUES are concentrated in western Europe; the PLAYERS are not, European clubs recruit worldwide and capture the value those players create.",
        },
      ],
    },
    {
      slug: "football-the-fa-ban-on-womens-football",
      title: "22 · The 50-year ban: how the FA crushed women's football",
      section: "Section 5 · Where the game came from",
      body: `This is the most important lesson in this section, and it is one that most football courses skip.

**In 1921, the Football Association banned women from playing on the grounds of its member clubs. The ban lasted fifty years.**

Not because women's football was failing. **Because it was succeeding.**

---

**The context: the First World War.**

With men at the front, women went into the factories, and factory teams played football. The most famous was the **Dick, Kerr Ladies**, from the Dick, Kerr & Co. munitions works in **Preston, Lancashire**. They played from **1917 to 1965** and were, by any measure, one of the most successful football teams of their era. They raised very large sums for charity, for wounded soldiers, for the unemployed, and they drew crowds that clubs today would be delighted with.

**Boxing Day, 26 December 1920. Goodison Park, Liverpool. Dick, Kerr Ladies v St Helens Ladies.**

**Now, the honest treatment of the crowd figure, because this is exactly where football history goes soft.**

The number you will see everywhere is **53,000**, and it is widely reported that **thousands more were locked outside** the ground. But reports **vary**: some accounts give the attendance as **at least 46,000**. This course is going to say what is actually true: **the exact figure is not settled, the range in the sources runs from roughly 46,000 to 53,000, and thousands were turned away.**

And here is why the dispute does not matter to the argument: **at any figure in that range, a women's football match in 1920 drew a crowd that the vast majority of professional MEN'S clubs could not draw today.** That is the fact the FA was looking at.

---

**5 December 1921. The FA Council passes its resolution.**

Less than a year after Goodison, the FA Council **unanimously** passed a resolution on women's football. Its wording has survived, and it is worth reading exactly as written:

> *"Complaints having been made as to football being played by women, the Council feel impelled to express their strong opinion that the game of football is **quite unsuitable for females and ought not to be encouraged.**"* (Dick, Kerr Ladies, n.d.)

The resolution also raised concerns about how the charitable money was being handled, and (the operative part) **requested that clubs belonging to the Association refuse the use of their grounds for women's matches** (Dick, Kerr Ladies, n.d.; National Football Museum, n.d.).

**Understand precisely what that did.** The FA could not make it illegal for women to kick a ball. What it *could* do was **lock them out of every proper stadium in the country**, because virtually every ground worth playing in belonged to an FA member club. No stadiums meant **no crowds, no gate money, no press coverage, no revenue, no pathway, no professional structure.** It did not ban women's football. **It strangled it.**

**And it worked.** For fifty years.

**The FA did not rescind the ban until 1971.**

---

**Sit with the arithmetic for a moment.** 1921 to 1971. Fifty years, **two full generations** of players who never got a stadium, a crowd, a wage, or a career. And the reason that is given in the minute is not tactical, financial, or administrative. It is: *"quite unsuitable for females."*

The gap you noticed in the last lesson, **1930** for the men's World Cup, **1991** for the women's, is not a mystery. **It is a consequence.** The women's game did not start late. It was **stopped**, and then it had to start again from nothing.

**Why this belongs in a football course and not just a history class.**

Because it is the clearest possible demonstration of a thing that is true throughout this sport and, frankly, throughout most institutions: **the size of an audience does not determine who gets to play. The people who control the grounds do.** Access is a governance decision. It was in 1921, and (as Section 7's lesson on pay-to-play will show) **it still is.**

The women's game today is growing fast: the **2023 FIFA Women's World Cup** in Australia and New Zealand drew a total attendance of **1,978,274** across 64 matches, the largest in the tournament's history (FIFA, 2023). It took **a hundred and two years** from that Boxing Day crowd at Goodison to get there.

:::reveal What did the FA's 1921 resolution actually DO, and why was it so effective? ||| It **requested that FA member clubs refuse the use of their grounds for women's matches.** The FA could not stop women kicking a ball, but virtually every proper stadium in England belonged to a member club, so the resolution **locked women out of every ground worth playing in**. No stadiums meant no crowds, no gate money, no press, no revenue, no professional pathway. It did not ban the game; it **strangled** it. And it worked for **fifty years**, until 1971.

## Sources
- Dick, Kerr Ladies. (n.d.). *The FA ban*. Retrieved July 2026, from https://www.dickkerrladies.com/the-fa-ban
- FIFA. (2023, August 20). *FIFA Women's World Cup 2023 breaks new records*. https://inside.fifa.com/media-releases/fifa-womens-world-cup-2023-tm-breaks-new-records
- FourFourTwo. (n.d.). *Why women's football was banned for 50 years — and is only just recovering*. Retrieved July 2026, from https://www.fourfourtwo.com/features/womens-football-banned-england-50-years-fa-world-cup-history
- National Football Museum. (n.d.). *The FA minute book, 1921*. Retrieved July 2026, from https://nationalfootballmuseum.com/items/the-fa-minute-book-1921/`,
      recallContent: [
        {
          prompt: "What did the FA Council resolve on 5 December 1921, and in what words?",
          answer:
            "That 'the game of football is quite unsuitable for females and ought not to be encouraged', and it requested that member clubs refuse the use of their grounds for women's matches. It was passed unanimously.",
        },
        {
          prompt: "How big was the Boxing Day 1920 crowd at Goodison Park, and how should we state it?",
          answer:
            "Honestly: the figure is DISPUTED. The most-cited number is 53,000, but some accounts give at least 46,000, and thousands more were locked out. At any figure in that range it beat what most professional men's clubs draw today.",
        },
        {
          prompt: "How long did the FA ban last?",
          answer: "Fifty years, from 5 December 1921 until the FA rescinded it in 1971. Two full generations of players.",
        },
      ],
    },
    {
      slug: "football-quiz-section-5",
      title: "Section 5 quiz · Where the game came from",
      section: "Section 5 · Where the game came from",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Did England invent football?",
            options: [
              "Yes, the game did not exist anywhere before 1863",
              "No, England CODIFIED it. Ball games arose independently in many cultures; England wrote the rulebook others agreed to use",
              "No, football was invented in China and imported directly to England",
              "Yes, and FIFA officially recognises 1863 as the invention of ball sport",
            ],
            correctIndex: 1,
            explanation:
              "The distinction matters. Codifying is not creating. What England did in 1863 was standardise, and standardisation is exactly what let the game go global.",
            sourceLessonSlug: "football-before-1863",
          },
          {
            prompt: "What is FIFA's actual, carefully-worded claim about cuju?",
            options: [
              "That cuju is the direct ancestor of modern football",
              "That cuju is 'the earliest form of football for which there is scientific evidence'",
              "That cuju was invented in England and exported to China",
              "That cuju had no rules",
            ],
            correctIndex: 1,
            explanation:
              "Note the precision: 'the earliest form for which there is SCIENTIFIC EVIDENCE'. During the Han dynasty (206 BCE-220 CE) cuju was standardised with established rules. That is not the same as claiming a traceable line of descent, and there isn't one.",
            sourceLessonSlug: "football-before-1863",
          },
          {
            prompt: "Which two practical pressures pushed England to codify football when it did?",
            options: [
              "Royal decree and a papal ban",
              "Public schools that could not play each other because their rules differed, and industrialisation (free Saturday afternoons, cities, railways)",
              "Television rights and sponsorship",
              "A shortage of rugby balls",
            ],
            correctIndex: 1,
            explanation:
              "A coordination problem plus the railway timetable. Football did not spread because it was beautiful, it spread because trains and free Saturdays made regular fixtures between distant towns possible.",
            sourceLessonSlug: "football-before-1863",
          },
          {
            prompt: "Where and when was the Football Association founded?",
            options: [
              "Wembley Stadium, 1888",
              "The Freemasons' Tavern, London, 26 October 1863",
              "Manchester, 17 April 1888",
              "Paris, 21 May 1904",
            ],
            correctIndex: 1,
            explanation:
              "Ebenezer Morley, a solicitor, met representatives of a dozen clubs there, having proposed one standardised set of rules. The first match under FA rules followed on 19 December 1863.",
            sourceLessonSlug: "football-1863-and-the-fa",
          },
          {
            prompt: "Football and rugby split in 1863 over which two questions?",
            options: [
              "The size of the ball and the number of players",
              "Handling (may you run with the ball in your hands?) and hacking (may you kick an opponent in the shins?)",
              "Whether to allow substitutes, and the length of the match",
              "Professionalism and gate money",
            ],
            correctIndex: 1,
            explanation:
              "Blackheath and others withdrew rather than give up handling and hacking, and eventually organised rugby football. Football and rugby are siblings, and the word 'soccer' exists precisely to mark that split.",
            sourceLessonSlug: "football-1863-and-the-fa",
          },
          {
            prompt: "Why did The FA legalise professionalism in 1885?",
            options: [
              "Because FIFA required it",
              "Because working-class northern clubs were already paying players quietly, and the FA had to choose between enforcing amateurism (and splitting the sport) or admitting reality",
              "To make football more exclusive",
              "To fund the construction of Wembley",
            ],
            correctIndex: 1,
            explanation:
              "A talented player in an industrial town was a factory hand who could not afford an unpaid Saturday. Legalising professionalism accepted football as a paid, working-class, competitive sport, and is why the game grew as it did.",
            sourceLessonSlug: "football-1863-and-the-fa",
          },
          {
            prompt: "Put these in the correct chronological order: FIFA founded · The IFAB founded · The Football League founded · The FA founded.",
            options: [
              "FA (1863) → IFAB (1886) → Football League (1888) → FIFA (1904)",
              "FA (1863) → FIFA (1904) → IFAB (1886) → Football League (1888)",
              "FIFA (1904) → FA (1863) → IFAB (1886) → Football League (1888)",
              "IFAB (1886) → FA (1863) → FIFA (1904) → Football League (1888)",
            ],
            correctIndex: 0,
            explanation:
              "FA 1863 → professionalism legalised 1885 → IFAB 1886 → Football League 1888 → FIFA 1904 → FIFA joins The IFAB 1913. The IFAB predates FIFA by 18 years, which is exactly why FIFA sits at a table it did not build.",
            sourceLessonSlug: "football-1863-and-the-fa",
          },
          {
            prompt: "Which country won the first FIFA World Cup, and when?",
            options: ["Brazil, 1950", "Uruguay, 1930, as hosts", "England, 1966", "Italy, 1934"],
            correctIndex: 1,
            explanation:
              "Uruguay beat Argentina 4-2 in the 1930 final in Montevideo. It demolishes the assumption that football's centre of gravity has always been European, South America was dominant almost immediately.",
            sourceLessonSlug: "football-global-spread",
          },
          {
            prompt: "When and where was the first FIFA Women's World Cup, and who won it?",
            options: [
              "1991, China, the United States beat Norway 2-1",
              "1999, USA, the United States beat China",
              "1971, Mexico, Denmark won",
              "1930, Uruguay, held alongside the men's tournament",
            ],
            correctIndex: 0,
            explanation:
              "1991, in Guangdong, China. The 61-year gap between the men's first World Cup (1930) and the women's (1991) is not because women did not want to play, it is a direct consequence of bans like the FA's.",
            sourceLessonSlug: "football-global-spread",
          },
          {
            prompt: "State the structural reality of modern football's economics.",
            options: [
              "The richest leagues and the best players are both concentrated in Europe",
              "The richest LEAGUES are concentrated in western Europe; the PLAYERS are not, European clubs recruit globally and capture the value those players create",
              "Football's wealth is distributed evenly across the six confederations",
              "South America is the wealthiest football market",
            ],
            correctIndex: 1,
            explanation:
              "This is a structure with a history, the same trade routes that carried the ball out now carry the players back. Section 7 takes it apart.",
            sourceLessonSlug: "football-global-spread",
          },
          {
            prompt: "In 1921, why did the FA move against women's football?",
            options: [
              "Because nobody was watching it",
              "Because it was SUCCEEDING, drawing enormous crowds and large charitable revenues",
              "Because the players demanded professional contracts",
              "Because The IFAB instructed it to",
            ],
            correctIndex: 1,
            explanation:
              "The Dick, Kerr Ladies were drawing crowds that most professional men's clubs would envy today. The FA moved because the women's game was thriving, not because it was failing.",
            sourceLessonSlug: "football-the-fa-ban-on-womens-football",
          },
          {
            prompt: "What did the FA's 5 December 1921 resolution actually do?",
            options: [
              "Made it illegal for women to play football anywhere in England",
              "Requested that FA member clubs refuse the use of their grounds for women's matches",
              "Imposed a fine on any woman who played",
              "Required women's teams to play with a smaller ball",
            ],
            correctIndex: 1,
            explanation:
              "The FA could not stop women kicking a ball. It could lock them out of every ground worth playing in, and since virtually every proper stadium belonged to a member club, that meant no crowds, no gate money, no press, no pathway. It strangled the game rather than banning it.",
            sourceLessonSlug: "football-the-fa-ban-on-womens-football",
          },
          {
            prompt: "What crowd figure is given for the Dick, Kerr Ladies match at Goodison Park on Boxing Day 1920?",
            options: [
              "Exactly 53,000, the figure is settled and undisputed",
              "The figure is DISPUTED: the most-cited number is 53,000, but some accounts give at least 46,000, with thousands more locked out",
              "About 5,000",
              "No attendance was ever recorded",
            ],
            correctIndex: 1,
            explanation:
              "Honesty about the source range is the point. And note that the dispute does not weaken the argument: at ANY figure in that range, the crowd beat what most professional men's clubs draw today, which is exactly what the FA was looking at.",
            sourceLessonSlug: "football-the-fa-ban-on-womens-football",
          },
          {
            prompt: "How long did the FA's ban on women playing at member grounds last?",
            options: ["Five years", "Twenty years", "Fifty years, 1921 until 1971", "It has never been lifted"],
            correctIndex: 2,
            explanation:
              "Two full generations of players who never got a stadium, a crowd, a wage, or a career. The stated reason in the minute was that football is 'quite unsuitable for females'.",
            sourceLessonSlug: "football-the-fa-ban-on-womens-football",
          },
          {
            prompt: "What was the total attendance at the 2023 FIFA Women's World Cup?",
            options: [
              "1,978,274 across 64 matches, the largest in the tournament's history",
              "About 350,000",
              "Roughly 5 million",
              "FIFA has never published the figure",
            ],
            correctIndex: 0,
            explanation:
              "1,978,274, in Australia and New Zealand, a record. It took 102 years from that Boxing Day crowd at Goodison to reach it.",
            sourceLessonSlug: "football-the-fa-ban-on-womens-football",
          },
        ],
      },
    },

    // ────────────────── SECTION 6 · WHO RUNS WHAT, AND THE LEAGUES ──────────────────
    {
      slug: "football-who-runs-what",
      title: "23 · Who runs what: the five layers of football governance",
      section: "Section 6 · How the sport is organised",
      body: `Football's governance is **routinely blurred**, by journalists, by broadcasters, and by other courses. Here it is, exactly, in five layers. Learn this table and you will be more precise about football than most people who write about it professionally.

| Layer | Who | What they actually control |
| --- | --- | --- |
| **1. The Laws** | **The IFAB** | The 17 Laws of the Game. **Nothing else.** |
| **2. The world body** | **FIFA** | 211 member associations; the World Cup and other global competitions; the international **transfer** system; four of The IFAB's eight votes |
| **3. Confederations** | **UEFA · CONMEBOL · CAF · CONCACAF · AFC · OFC** | Continental competitions and continental governance |
| **4. National associations** | The FA (England), U.S. Soccer, the DFB (Germany), the CBF (Brazil)… | The game inside one country: national teams, referees, coaching licences, the domestic pyramid, discipline |
| **5. Leagues and clubs** | The Premier League, MLS, the NWSL, Liga MX… | Their own competition rules, the ones the Laws leave to the "competition" |

**The confederations, in full** (FIFA, n.d.):

| Confederation | Region |
| --- | --- |
| **UEFA** | Europe |
| **CONMEBOL** | South America |
| **CAF** | Africa |
| **CONCACAF** | North and Central America and the Caribbean |
| **AFC** | Asia |
| **OFC** | Oceania |

Six. Not five, not seven. **CONCACAF** is the one people mangle, it includes the **United States, Canada, Mexico**, all of Central America, and the Caribbean. And note that **Australia plays in the AFC (Asia), not the OFC**, a governance decision, not a geographical one, and a reminder that these are **political bodies**, not maps.

---

**Now the sentence that ties this whole course together.**

Remember from Section 3: the Laws are full of the words *"where competition rules permit."* Substitutions, VAR, goal-line technology, extra time, sin bins, the number of substitutes named on the bench, **The IFAB writes one rulebook with a menu of options, and Layer 5 picks from the menu.**

That is why:

- A **World Cup** match, a **Premier League** match, and **your high school match** all play the **same 17 Laws**...
- ...and still **do not play the same game.**

Once you see this, football's rules stop being confusing. There is one rulebook and thousands of configurations of it.

---

**Three governance errors to stop making.**

1. **"FIFA changed the offside rule."** No. **The IFAB** did, with FIFA's four votes and at least two British ones. (Lesson 10.)
2. **"UEFA runs European football."** Partly. UEFA runs European **competitions** and European governance, but the **Premier League** is run by the Premier League, and **The FA** governs English football. Three different bodies, three different jobs, constantly conflated.
3. **"The World Cup is the biggest club competition."** The World Cup is for **national teams**. Club football is a separate universe with its own competitions (next lesson but one).

---

**Where does the money and power actually sit?** Honestly: **not** in the place the org chart suggests. The IFAB owns the rulebook and has almost no money. FIFA has enormous money and does not own the rulebook. The richest **clubs** in Europe have, at various times, threatened to leave their competitions entirely, and the credibility of that threat is a form of power that appears on no org chart at all.

**Governance is what an institution can enforce, not what it is entitled to.** Keep that in mind for Section 7.

:::reveal Name the six confederations and say which one the United States belongs to. ||| **UEFA** (Europe) · **CONMEBOL** (South America) · **CAF** (Africa) · **CONCACAF** (North and Central America and the Caribbean) · **AFC** (Asia) · **OFC** (Oceania). The United States is in **CONCACAF**, along with Canada, Mexico, Central America and the Caribbean. (And note Australia plays in the **AFC**, not the OFC, these are political bodies, not maps.)

## Sources
- FIFA. (n.d.). *Member associations*. Retrieved July 2026, from https://inside.fifa.com/associations
- The IFAB. (n.d.). *The IFAB organisation*. Retrieved July 2026, from https://www.theifab.com/organisation/
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Name the five layers of football governance and what each controls.",
          answer:
            "1) The IFAB, the 17 Laws, and nothing else. 2) FIFA, world body, 211 member associations, the World Cup, the transfer system, 4 IFAB votes. 3) The six confederations, continental competitions. 4) National associations, the game inside one country. 5) Leagues and clubs, their own competition rules.",
        },
        {
          prompt: "Why do a World Cup match, a Premier League match and a high school match all use the same 17 Laws yet not play the same game?",
          answer:
            "Because the Laws are full of 'where competition rules permit'. The IFAB writes one rulebook with a MENU of options, substitutions, VAR, extra time, sin bins, and each competition picks from the menu.",
        },
      ],
    },
    {
      slug: "football-the-pyramid",
      title: "24 · The pyramid: promotion, relegation, and why American leagues are different",
      section: "Section 6 · How the sport is organised",
      body: `Most of the football world is organised as a **pyramid**, and the pyramid is the single biggest structural difference between football and American sport.

**How it works.** Divisions are stacked. At the end of each season, the **best teams in a division are promoted** to the one above, and the **worst are relegated** to the one below. In England, the ladder runs from the **Premier League** down through the **EFL Championship**, **League One**, **League Two**, into the **National League**, and then keeps going, through regional divisions, right down to genuinely local amateur football.

**And there is no floor.** The pyramid connects, in principle, and occasionally in practice, a team of teenagers on a public park to the top of the professional game. There is a **continuous ladder**. A club that keeps winning keeps going up. There is no committee that has to admit you and no franchise fee to pay.

**What this does to a season.** It means **most matches matter to somebody**. A club in mid-table with nothing to win is rare; a club fighting relegation is fighting for its **financial existence**, because dropping a division can mean losing a large share of its income and its best players. Relegation is not a sporting embarrassment. It is a **budgetary catastrophe**, and that is precisely why the football at the bottom of a table is often more desperate and more compelling than the football at the top.

---

**The American model is different, deliberately.**

**Major League Soccer (MLS)** in the United States and Canada is a **closed league**. There is **no promotion and no relegation** between MLS and the divisions below it. New clubs join by **expansion**, an existing ownership group is admitted, typically after paying a substantial expansion fee. MLS also operates as a **single entity**, with a **salary cap** and league-level mechanisms (like Designated Player rules) that allow clubs to sign a limited number of high-paid stars outside the cap.

Below MLS sit **USL** competitions (the USL Championship, USL League One) and other divisions; the **MLS NEXT** platform runs the elite youth pathway. **The USL has publicly moved toward introducing promotion and relegation within its own structure**, a genuinely notable development in American soccer, and one whose outcome you should check for yourself rather than take from any course, including this one.

**Which is better?** Here is the honest answer, and it is not the one football romantics want.

**The case for the pyramid:**
- **Sporting merit is the only entry ticket.** Win and you rise. No committee, no fee.
- **Almost every match has stakes.**
- **A local club can, in principle, climb.**

**The case for the closed league:**
- **Financial stability.** An owner's investment cannot be destroyed by relegation, so owners will invest in stadiums, academies and long-term projects that a club fighting relegation cannot afford to.
- **Cost control.** A salary cap prevents the arms race in which clubs spend themselves into insolvency chasing survival, which, in open pyramids, **happens regularly and ruins historic clubs.**
- **Competitive balance.** Closed leagues with caps and drafts tend to be far less predictable at the top than open leagues, where the same handful of wealthy clubs win over and over.

That last point deserves emphasis, because pyramid romantics skip it: **open pyramids are extremely unequal.** The same small group of rich clubs wins the big European leagues year after year, precisely because there is no cap, no draft, and no revenue-sharing floor. The pyramid gives you a beautiful theoretical ladder **and** a top division that is often boringly predictable. The closed league gives you no ladder **and** a genuinely competitive championship.

**Both models are trade-offs, and neither is morally superior.** Anyone who tells you otherwise is a fan, not an analyst.

:::reveal Why is relegation described as a budgetary catastrophe rather than a sporting embarrassment? ||| Because dropping a division can cost a club a large share of its **income**, broadcast money, gate revenue, sponsorship, and usually its best players too. The club's financial existence, not just its pride, is on the line. That is exactly why the football at the bottom of a table is often more desperate than the football at the top.

## Sources
- FIFA. (n.d.). *Member associations*. Retrieved July 2026, from https://inside.fifa.com/associations`,
      recallContent: [
        {
          prompt: "What is the single biggest structural difference between football and American sport?",
          answer:
            "The pyramid, promotion and relegation. Divisions are stacked and connected, with no floor: in principle a club can climb from a public park to the top division. MLS, by contrast, is a closed league: no promotion, no relegation, entry by expansion.",
        },
        {
          prompt: "State the strongest argument FOR a closed league.",
          answer:
            "Financial stability and competitive balance. An owner's investment can't be destroyed by relegation, so they invest long-term; a salary cap prevents the spending arms race that regularly bankrupts clubs in open pyramids; and capped leagues are often far less predictable at the top than open ones.",
        },
      ],
    },
    {
      slug: "football-leagues-and-competitions",
      title: "25 · The leagues and competitions worth knowing, men's and women's",
      section: "Section 6 · How the sport is organised",
      body: `**Three different kinds of competition run at the same time**, and confusing them is the most common way to sound lost in a football conversation.

| Type | What it is | Example |
| --- | --- | --- |
| **League** | Everyone plays everyone; points accumulate; the table decides | Premier League, MLS, NWSL |
| **Domestic cup** | Single-elimination knockout, usually open to clubs from **every** division | The FA Cup; the U.S. Open Cup |
| **Continental competition** | The best clubs of a confederation, playing each other | UEFA Champions League; CONMEBOL Copa Libertadores |

**A single club can be playing in all three in the same month.** That is why fixture congestion is a real, constant topic, a successful club can play twice a week for months.

---

**Domestic leagues (men's).** The wealthiest and most-watched are concentrated in western Europe, commonly called the "big five":

| League | Country |
| --- | --- |
| **Premier League** | England |
| **La Liga** | Spain |
| **Bundesliga** | Germany |
| **Serie A** | Italy |
| **Ligue 1** | France |

But **do not mistake wealth for the whole game.** Enormous football cultures with vast followings operate outside that list, **Brazil** and **Argentina** (whose leagues have produced a disproportionate share of the game's greatest players), **Liga MX** in Mexico, the leagues of North Africa and West Africa, **Japan's J1 League** and **South Korea's K League**, and **Major League Soccer** in the US and Canada. A course that treats western Europe as football and everything else as a feeder system is telling you about **money**, not about **football**.

**Domestic leagues (women's).** Not an appendix, a fast-growing professional game in its own right:

| League | Country |
| --- | --- |
| **National Women's Soccer League (NWSL)** | United States |
| **Women's Super League (WSL)** | England |
| **Liga F** | Spain |
| **Frauen-Bundesliga** | Germany |

**One concrete, verifiable difference worth knowing:** the **NWSL abolished its college draft.** The NCAA's own research now notes that the NWSL is excluded from its professional-probability tables because the league has **discontinued its draft** (NCAA Research, 2026). Players now enter as **free agents**, negotiating with any club, a genuinely significant labour change, and the sort of concrete detail that separates someone who follows the women's game from someone who says they support it.

---

**Continental club competitions, one per confederation.**

| Confederation | Premier club competition |
| --- | --- |
| **UEFA** | UEFA Champions League |
| **CONMEBOL** | Copa Libertadores |
| **CAF** | CAF Champions League |
| **CONCACAF** | CONCACAF Champions Cup |
| **AFC** | AFC Champions League Elite |
| **OFC** | OFC Champions League |

**Qualification is by league position**, not by invitation, finish high enough in your domestic league and you are in. This is another way the pyramid's logic reaches all the way up: your **league table** determines your **continental** football, which determines your **revenue**, which determines your **squad**. Everything is connected to the table.

---

**National-team competitions.**

- **FIFA World Cup** (men's) and **FIFA Women's World Cup**, the global championships, every four years.
- **Continental championships**, UEFA European Championship ("the Euros"), CONMEBOL Copa América, CAF Africa Cup of Nations (AFCON), CONCACAF Gold Cup, AFC Asian Cup, OFC Nations Cup, each with a women's counterpart.

**And the current one:** the **2026 FIFA World Cup**, hosted by **Canada, Mexico and the United States**, is the first with **48 teams** and **104 matches**, 12 groups of four, with the top two from each group plus the eight best third-placed teams advancing to a round of 32 (FIFA, n.d.). It is being played as this course is published. **This course is not going to tell you who won it**, go and find out, and notice that a source which *does* tell you, without checking, is a source that guesses.

:::reveal What genuinely significant labour change has the NWSL made, and how do you know it is true rather than rumour? ||| It **abolished its college draft**, players now enter the league as **free agents** who can negotiate with any club. You know it because the **NCAA's own research** now excludes the NWSL from its professional-probability tables on the explicit grounds that the league has **discontinued its draft**. That is a governing body documenting the change in its own published methodology, not a rumour.

## Sources
- FIFA. (n.d.). *How the FIFA World Cup 26 will work with 48 teams*. Retrieved July 2026, from https://www.fifa.com/en/articles/article-fifa-world-cup-2026-mexico-canada-usa-new-format-tournament-football-soccer
- FIFA. (n.d.). *Member associations*. Retrieved July 2026, from https://inside.fifa.com/associations
- NCAA Research. (2026, March). *Estimated probability of competing in college athletics*. National Collegiate Athletic Association. https://ncaaorg.s3.amazonaws.com/research/pro_beyond/RES_ProbabilityBeyondHSFiguresMethod.pdf`,
      recallContent: [
        {
          prompt: "Name the three kinds of competition a club can be playing in simultaneously.",
          answer:
            "A LEAGUE (everyone plays everyone; the table decides), a DOMESTIC CUP (knockout, usually open to clubs from every division), and a CONTINENTAL competition (the best clubs of a confederation).",
        },
        {
          prompt: "How do clubs qualify for continental competitions like the Champions League or the Copa Libertadores?",
          answer:
            "By LEAGUE POSITION, not invitation. Your table position determines your continental football, which determines your revenue, which determines your squad. Everything connects back to the table.",
        },
      ],
    },
    {
      slug: "football-quiz-section-6",
      title: "Section 6 quiz · How the sport is organised",
      section: "Section 6 · How the sport is organised",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which body controls the Laws of the Game, and what else does it control?",
            options: [
              "FIFA, it also runs the World Cup and the transfer system",
              "The IFAB, and nothing else",
              "UEFA, and European club competitions",
              "The Premier League, and English football",
            ],
            correctIndex: 1,
            explanation:
              "Layer 1 of the governance stack: The IFAB owns the 17 Laws and NOTHING else. FIFA (Layer 2) runs the World Cup, the transfer system, and 211 member associations, and holds four of The IFAB's eight votes.",
            sourceLessonSlug: "football-who-runs-what",
          },
          {
            prompt: "How many confederations are there, and which one does the United States belong to?",
            options: [
              "Five; the USA is in CONMEBOL",
              "Six; the USA is in CONCACAF",
              "Six; the USA is in UEFA",
              "Seven; the USA is in the OFC",
            ],
            correctIndex: 1,
            explanation:
              "Six: UEFA, CONMEBOL, CAF, CONCACAF, AFC, OFC. The USA is in CONCACAF, with Canada, Mexico, Central America and the Caribbean. Note that Australia plays in the AFC, not the OFC, these are political bodies, not maps.",
            sourceLessonSlug: "football-who-runs-what",
          },
          {
            prompt: "How many member associations does FIFA have?",
            options: ["48", "104", "211", "17"],
            correctIndex: 2,
            explanation:
              "211. (48 is the number of teams at the 2026 World Cup; 104 the number of matches; 17 the number of Laws, all different things, and all frequently muddled.)",
            sourceLessonSlug: "football-who-runs-what",
          },
          {
            prompt: "Which of these statements is CORRECT?",
            options: [
              "UEFA runs the Premier League",
              "The FA governs English football; the Premier League runs the Premier League; UEFA runs European competitions, three bodies, three jobs",
              "FIFA runs the Premier League and appoints its referees",
              "The IFAB approves each league's fixture list",
            ],
            correctIndex: 1,
            explanation:
              "Three different bodies, constantly conflated. Getting this right is what separates precise football talk from vague football talk.",
            sourceLessonSlug: "football-who-runs-what",
          },
          {
            prompt: "Why do a World Cup match and a high school match use the same 17 Laws without playing the same game?",
            options: [
              "Because the World Cup uses a secret extra rulebook",
              "Because the Laws are full of 'where competition rules permit', one rulebook with a MENU of options, and each competition picks from it",
              "Because FIFA modifies the Laws for elite competition",
              "Because high school football uses only 12 of the 17 Laws",
            ],
            correctIndex: 1,
            explanation:
              "Substitutions, VAR, extra time, sin bins, goal-line technology, all are options the Law offers and the COMPETITION chooses. Once you see this pattern, football's rules stop being confusing.",
            sourceLessonSlug: "football-who-runs-what",
          },
          {
            prompt: "What is a football 'pyramid'?",
            options: [
              "A youth development structure",
              "Stacked divisions connected by promotion and relegation, with no floor, in principle a park team can climb to the top",
              "The seating arrangement in a stadium",
              "FIFA's ranking of national teams",
            ],
            correctIndex: 1,
            explanation:
              "The single biggest structural difference between football and American sport. A club that keeps winning keeps going up, no committee has to admit it and no franchise fee is required.",
            sourceLessonSlug: "football-the-pyramid",
          },
          {
            prompt: "Why is relegation better described as a budgetary catastrophe than a sporting embarrassment?",
            options: [
              "Because relegated clubs must pay a fine to the league",
              "Because dropping a division can cost a club a large share of its income, broadcast money, gate, sponsorship, and usually its best players",
              "Because relegated clubs are expelled from the FA",
              "It isn't, relegation has no financial consequences",
            ],
            correctIndex: 1,
            explanation:
              "Financial existence, not just pride, is on the line. It is exactly why the football at the bottom of a table is often more desperate than the football at the top.",
            sourceLessonSlug: "football-the-pyramid",
          },
          {
            prompt: "How does MLS differ structurally from the English pyramid?",
            options: [
              "It has more divisions",
              "It is a CLOSED league, no promotion or relegation; new clubs join by expansion, and it operates as a single entity with a salary cap",
              "It plays by different Laws of the Game",
              "It is governed by UEFA",
            ],
            correctIndex: 1,
            explanation:
              "No promotion, no relegation, entry by expansion (usually with a substantial fee), single-entity structure, salary cap, and Designated Player rules for signing stars outside the cap.",
            sourceLessonSlug: "football-the-pyramid",
          },
          {
            prompt: "What is the strongest HONEST argument in favour of a closed league?",
            options: [
              "It is more traditional",
              "Financial stability and competitive balance, no relegation risk means long-term investment, and a cap prevents the spending arms race that regularly bankrupts clubs in open pyramids",
              "It produces better players",
              "It is required by FIFA",
            ],
            correctIndex: 1,
            explanation:
              "Pyramid romantics skip this: open pyramids are extremely UNEQUAL. The same rich clubs win the big European leagues year after year, because there is no cap, no draft, and no revenue floor. Both models are trade-offs; neither is morally superior.",
            sourceLessonSlug: "football-the-pyramid",
          },
          {
            prompt: "Name the three different kinds of competition a club may be playing in during the same month.",
            options: [
              "The league, the domestic cup, and the continental competition",
              "The league, the World Cup, and the Olympics",
              "The league, the transfer window, and the playoffs",
              "The league, the reserve league, and the youth league",
            ],
            correctIndex: 0,
            explanation:
              "League (everyone plays everyone; the table decides), domestic cup (knockout, usually open to every division), and continental competition (the best clubs of a confederation). This is why fixture congestion is a constant topic.",
            sourceLessonSlug: "football-leagues-and-competitions",
          },
          {
            prompt: "How do clubs qualify for the Champions League or the Copa Libertadores?",
            options: [
              "By invitation from the confederation",
              "By league position in their domestic league",
              "By winning the domestic cup only",
              "By paying an entry fee",
            ],
            correctIndex: 1,
            explanation:
              "By league position. Table → continental football → revenue → squad. Everything in football connects back to the table.",
            sourceLessonSlug: "football-leagues-and-competitions",
          },
          {
            prompt: "Which continental competition belongs to CONMEBOL?",
            options: ["The Copa Libertadores", "The UEFA Champions League", "The CONCACAF Champions Cup", "The AFC Champions League Elite"],
            correctIndex: 0,
            explanation:
              "One premier club competition per confederation: UEFA Champions League, CONMEBOL Copa Libertadores, CAF Champions League, CONCACAF Champions Cup, AFC Champions League Elite, OFC Champions League.",
            sourceLessonSlug: "football-leagues-and-competitions",
          },
          {
            prompt: "What significant labour change has the NWSL made?",
            options: [
              "It introduced promotion and relegation",
              "It abolished its college draft, players now enter as free agents who can negotiate with any club",
              "It adopted a hard salary cap for the first time",
              "It merged with MLS",
            ],
            correctIndex: 1,
            explanation:
              "Documented in the NCAA's own research methodology, which now excludes the NWSL from its professional-probability tables on the explicit grounds that the league has discontinued its draft.",
            sourceLessonSlug: "football-leagues-and-competitions",
          },
          {
            prompt: "What is new about the 2026 FIFA World Cup format?",
            options: [
              "48 teams and 104 matches, in 12 groups of four, with a round of 32",
              "32 teams in eight groups, as before",
              "It is the first to be held outside Europe",
              "It has abolished the group stage entirely",
            ],
            correctIndex: 0,
            explanation:
              "48 teams, 104 matches, 12 groups of four; the top two from each group plus the eight best third-placed teams reach a round of 32. Hosted by Canada, Mexico and the United States.",
            sourceLessonSlug: "football-leagues-and-competitions",
          },
          {
            prompt: "Why is it a mistake to treat western Europe's 'big five' leagues as the whole of football?",
            options: [
              "Because they are not actually the wealthiest",
              "Because that tells you about MONEY, not about football, enormous football cultures operate outside it, and the best players have never come only from Europe",
              "Because they play by different Laws",
              "Because they are not FIFA members",
            ],
            correctIndex: 1,
            explanation:
              "Brazil and Argentina alone have produced a disproportionate share of the game's greatest players. The richest LEAGUES are concentrated in western Europe; the PLAYERS are not.",
            sourceLessonSlug: "football-leagues-and-competitions",
          },
        ],
      },
    },

    // ────────────────── SECTION 7 · MONEY, LABOUR, AND THE COST OF THE GAME ──────────────────
    {
      slug: "football-transfers-and-academies",
      title: "26 · Transfers and academies: how a player becomes an asset",
      section: "Section 7 · Money, labour, and the cost of the game",
      body: `In most sports, a player under contract simply plays out that contract. In football, a club that wants a player who is under contract at another club **buys the contract**, and the price is the **transfer fee**.

**How a transfer actually works.**

1. Club A has a player under contract until, say, 2029.
2. Club B wants them. Club B offers Club A a **transfer fee**, a payment to release the player from the remaining contract.
3. If Club A accepts, Club B negotiates **personal terms** (wages) with the player.
4. The player's **registration** moves to Club B. **Transfer windows**, fixed periods set by the national association within FIFA's framework, limit when this may happen.

The fee goes **to the selling club**, not to the player. The player gets **wages** and, usually, a **signing-on fee**.

**And a player whose contract has EXPIRED costs nothing.** They are a **free agent** and may sign with anyone. This is the single most important economic fact in football's labour market, and it is the reason a club will often sell a star with one year left rather than lose them for nothing next summer. Contract length is leverage.

**The numbers, cited.**

- **The men's world record transfer fee is €222 million**, **Neymar**, from Barcelona to Paris Saint-Germain, in **August 2017**. Remarkably, it **still stands** (Statista, 2026). Nearly a decade, and no club has topped it.
- **The women's world record is roughly $1.1 million**, **Naomi Girma**, from the San Diego Wave to Chelsea, in **January 2025**. She was the **first player in women's football to move for more than $1 million**, surpassing the previous record of about **$767,000** (Racheal Kundananji to Bay FC, February 2024) (ESPN, 2025).

**Put those two numbers next to each other and just look at them.** €222 million. $1.1 million. That is not a small gap; it is a gap of roughly **two hundred times**. Both are records. Both are the highest price the market has ever paid. **That ratio is the honest measure of where the women's game currently sits economically**, and, given Lesson 22, it is a measure of what fifty stolen years cost.

---

**Academies: how clubs manufacture assets.**

A professional club's **academy** recruits children, often from the age of eight or nine, and develops them. If a player makes the first team, the club has produced a **first-team player at almost no transfer cost**. If they are sold, the fee is **almost pure profit**, because the club never paid a fee for them.

This is a genuinely rational business. It is also where the ethics get uncomfortable, and you should understand why:

- **The failure rate is enormous.** The overwhelming majority of children who enter a professional academy will **not** become professional footballers. They will be released, often as teenagers, often after years in which football has been the organising principle of their entire life and education has been the thing they fitted around it.
- **A released 16-year-old has an identity problem, not just a career problem.** This is a well-recognised welfare issue in the game, and clubs are increasingly required to provide educational and aftercare support. Whether they do it well is a fair question to ask of any academy you or a friend are considering.
- **A child in an academy is, on the club's balance sheet, a speculative asset.** That is not a slur. It is an accurate description of the incentive, and the incentive explains a great deal of the behaviour in this section.

**Solidarity and training compensation.** FIFA's transfer system does try to send money back down the chain: when a player is transferred internationally, a proportion is meant to flow to the clubs that **trained** them between roughly the ages of 12 and 23. In principle this rewards the small club that found a talent at eleven. In practice, whether small clubs, especially outside Europe, actually receive what they are owed is a persistent and legitimate complaint.

**The honest summary.** The transfer system is a market in **human beings' registrations**, in which the people being valued **do not receive the fee**. It has produced enormous wealth, a genuinely global talent pipeline, and (as the next lesson shows) a set of incentives that lead directly to the exploitation of children.

:::reveal Why will a club often sell its best player one year before their contract expires, rather than keeping them for the final season? ||| Because a player whose contract has **expired** becomes a **free agent** and can leave **for nothing**. Selling with a year left is the club's last chance to convert the player into a fee. Contract length is leverage, it is the single most important economic fact in football's labour market.

## Sources
- ESPN. (2025, January 26). *How Chelsea broke the women's transfer record to sign USWNT star Girma*. https://www.espn.com/soccer/story/_/id/43557138/how-chelsea-broke-world-record-sign-naomi-girma-san-diego-wave
- FIFA. (2025). *Regulations on the status and transfer of players* (January 2025 edition). https://digitalhub.fifa.com/m/696d877ea35ca761/original/Regulations-on-the-Status-and-Transfer-of-Players-January-2025-edition.pdf
- Statista. (2026). *Record transfers in soccer*. https://www.statista.com/statistics/263304/transfer-fees-the-10-most-expensive-transfers-in-soccer-ever/`,
      recallContent: [
        {
          prompt: "Who receives a transfer fee?",
          answer:
            "The SELLING CLUB, not the player. The player receives wages and usually a signing-on fee. The fee is the price of releasing them from their remaining contract.",
        },
        {
          prompt: "Compare the men's and women's world record transfer fees.",
          answer:
            "Men's: €222m (Neymar, Barcelona to PSG, August 2017), still the record. Women's: about $1.1m (Naomi Girma, San Diego Wave to Chelsea, January 2025), the first women's move above $1m. A gap of roughly 200 times.",
        },
        {
          prompt: "Why is an academy graduate so valuable to a club's balance sheet?",
          answer:
            "Because the club never paid a transfer fee for them, so if they are sold, the fee is almost pure profit. Which also means a child in an academy is, on the balance sheet, a speculative asset. That incentive explains a lot.",
        },
      ],
    },
    {
      slug: "football-agents-minors-and-exploitation",
      title: "27 · Agents, minors, and the trade in other people's children",
      section: "Section 7 · Money, labour, and the cost of the game",
      body: `Here is a market with the following properties:

- The prize is **life-changing wealth**.
- The odds of winning it are **tiny**.
- The people competing are **children**.
- The people who profit from arranging the competition are **not regulated in most of the places it happens**.

That is a recipe, and it produces exactly what you would expect.

---

**The rule that exists to stop it: FIFA's Article 19.**

FIFA's **Regulations on the Status and Transfer of Players (RSTP), Article 19, "Protection of minors"**, sets a hard default:

> **International transfers of players are only permitted if the player is over the age of 18.** (FIFA, 2025, Art. 19)

With narrow, listed exceptions, including:

- **(a)** The player's **parents move** to the country of the new club **for reasons not linked to football**.
- **(b)** The player is aged **16-18** and the transfer takes place **within the EU/EEA**, or between two associations within the same country, **and** the new club must then guarantee **adequate football education and training** to the highest national standard **and** an **academic, school or vocational education** enabling the player to pursue a career other than football if they stop playing.
- **(c)** The player lives **within 50 km of a national border** and the new club is within 50 km of the same border on the other side (with both associations consenting).
- Plus provision for **refugees and protected persons**.

Read exception (b) again. It is the rule that says: **if you take a 16-year-old's childhood, you owe them a fallback.** Whether that obligation is honoured in practice is one of the sharpest questions in the sport.

**Why Article 19 exists at all:** because without it, clubs would simply buy children internationally, and a large number would be discarded far from home.

---

**The unlicensed agents, and the trade in hope.**

Across **West Africa** in particular, and in parts of **South America** and **Asia**, a trade has grown up around a simple lie: *pay me, and I will get your son a trial at a European club.*

The mechanics are consistent and well documented in journalism and academic research:

1. A man who presents himself as an **agent** or a **scout** approaches a family, or opens a small, unlicensed "academy."
2. He asks for **money**, sometimes thousands of dollars, an amount that can require a family to sell land, borrow, or spend savings.
3. The boy is flown to Europe, or promised he will be.
4. **The trial does not exist**, or it exists and he is not signed.
5. He is **abandoned**, undocumented, unpaid, far from home, and frequently too ashamed of the failure to contact his family.

The result is a population of young men, mostly African, living irregularly in European cities, whose migration was financed by their families on the strength of a promise that was never real.

---

**Now the number, and how to handle it honestly.**

You will see the claim that **around 15,000 young players a year** are moved out of West Africa under false pretences. It is attributed to the NGO **Culture Foot Solidaire**, and it is repeated constantly in journalism.

**This course is not going to repeat it as a fact, and here is why.**

That figure describes a **hidden population**, people engaged in an activity that is unrecorded, often illegal, and by its nature invisible to official statistics. Estimates of hidden populations are notoriously unreliable in **both directions**, and researchers who study football migration specifically have cautioned that trafficking statistics in this field should be treated with real care, and have challenged the way the issue is popularly represented (Esson, 2015; Esson & Drywood, n.d.). Some experts believe the true number may be **higher**, because monitoring barely exists. Others argue the framing of "trafficking" itself obscures what is often a **voluntary, family-financed migration decision** taken under conditions of very poor information, which is a different problem requiring a different solution.

**So what IS true?**

- The **exploitation is real, documented, and serious**. That is not in dispute.
- The **scale is genuinely contested**, and **nobody has a reliable count**.
- **A course that gives you a confident number is telling you something it cannot know.**

That is a less satisfying lesson than a big scary statistic. It is also a **better** one, and it is the whole point of a cited education: **learning to say "the exploitation is documented; the number is not" is a harder and more valuable skill than memorising a figure that might be invented.**

**Agent regulation** is a live and contested area. FIFA has re-introduced a licensing system requiring agents to pass an examination, but parts of the accompanying regulations, in particular attempts to **cap agents' commissions**, have been **challenged in courts and in arbitration**, and their status has shifted. **If you need the current position, check FIFA's own published regulations and the relevant rulings, do not take it from a course, including this one.** That is not evasion; it is the honest state of the question.

:::reveal Why does this course refuse to state that 15,000 young African players are trafficked each year? ||| Because it describes a **hidden population**, unrecorded, often illegal, invisible to official statistics, and estimates of hidden populations are unreliable in **both directions**. Researchers of football migration caution that these figures must be treated with care. What IS true: **the exploitation is real, documented and serious; the scale is genuinely contested; and nobody has a reliable count.** Saying "the exploitation is documented, the number is not" is harder, and far more valuable, than memorising a figure that may be invented.

## Sources
- Esson, J. (2015). Better off at home? Rethinking responses to trafficked West African footballers in Europe. *Journal of Ethnic and Migration Studies, 41*(3), 512-530. https://doi.org/10.1080/1369183X.2014.927733
- Esson, J., & Drywood, E. (n.d.). *Challenging popular representations of child trafficking in football*. University of Liverpool Repository. https://livrepository.liverpool.ac.uk/3015792/1/Esson%20DrywoodTrafficking%20and%20football%20Sp%20Issue%20Sport%20and%20Crime%20Final.pdf
- FIFA. (2025). *Regulations on the status and transfer of players* (January 2025 edition), Article 19. https://digitalhub.fifa.com/m/696d877ea35ca761/original/Regulations-on-the-Status-and-Transfer-of-Players-January-2025-edition.pdf`,
      recallContent: [
        {
          prompt: "What is FIFA's Article 19, and what is its default rule?",
          answer:
            "'Protection of minors' in the Regulations on the Status and Transfer of Players. Default: international transfers are only permitted if the player is over 18, with narrow exceptions (parents moving for non-football reasons; 16-18 within the EU/EEA with a guaranteed academic education; a 50km cross-border rule; refugees).",
        },
        {
          prompt: "How should you talk about the scale of exploitation of young African footballers?",
          answer:
            "The exploitation is real, documented and serious, but the SCALE is genuinely contested and nobody has a reliable count. The widely-quoted '15,000 a year' is a hidden-population estimate researchers caution against citing as fact.",
        },
      ],
    },
    {
      slug: "football-qatar-2022",
      title: "28 · Qatar 2022: four numbers, four different questions",
      section: "Section 7 · Money, labour, and the cost of the game",
      body: `The 2022 FIFA World Cup in Qatar required an enormous construction programme, stadiums, but also a metro, roads, hotels and an entire new city, built overwhelmingly by **migrant workers** from South and Southeast Asia and East Africa.

**How many of them died?**

This is one of the most contested questions in modern sport. You will find confident answers everywhere, and **almost all of them are quietly answering a different question from the one they appear to be answering.**

So here is the honest method: **four figures, four sources, and (crucially) four DIFFERENT THINGS BEING COUNTED.**

---

| Figure | Source | What it actually counts |
| --- | --- | --- |
| **At least 6,500** | *The Guardian*, February 2021 | Deaths of migrant workers from **India, Pakistan, Nepal, Bangladesh and Sri Lanka**, in **Qatar**, from **all causes**, in **any job or none**, over **roughly 2010-2020** |
| **3 work-related + 34 non-work-related (37)** | Qatar's **Supreme Committee for Delivery & Legacy** | Deaths among workers **on FIFA World Cup stadium sites specifically** |
| **"Between 400 and 500"** | **Hassan Al-Thawadi**, Qatar's World Cup chief, November 2022 | Deaths of migrant workers **on projects connected to the tournament**, a much broader definition than stadium sites |
| **50 work-related deaths in 2020** (plus 500+ severe and c. 37,600 mild-to-moderate injuries) | **International Labour Organization**, November 2021 | **Occupational** deaths and injuries across **all of Qatar**, in the single year **2020** |

---

**Now look at what just happened.** Those four figures are **not four estimates of one number**. They are four **answers to four different questions**:

- The Guardian's **6,500** is a count of **all deaths** among a defined set of nationalities living in Qatar over a decade. Many of those people never worked on a World Cup project. Some died of old age, in traffic accidents, of illness. **The Guardian's own reporting says so**, and it explicitly notes the figure is likely an **undercount** of total migrant deaths, because it **excludes** several major sending countries (such as the Philippines and Kenya) and the final months of 2020 (*The Guardian*, 2021).
- Qatar's **37** counts only **stadium** workers, which is the narrowest possible definition of "the World Cup."
- Al-Thawadi's **400-500**, offered by Qatar's own World Cup chief, is much broader than Qatar's official stadium figure, and it is one of the more revealing numbers in the whole dispute, precisely because of **who said it** (CNN, 2022).
- The ILO's **50** is a **single year**, and only **work-related**.

**Anyone who tells you "6,500 workers died building the World Cup" has combined the widest possible death count with the narrowest possible cause, and produced a claim that no source actually supports.** Anyone who tells you "only 37 died" has done the reverse.

---

**The deeper problem, and it is the real story: the deaths were not properly investigated.**

This is where the dispute stops being about arithmetic and starts being about **accountability**.

- **Amnesty International** documented that Qatar routinely **failed to investigate** migrant worker deaths, leaving families without answers or compensation (Amnesty International, 2021).
- A very large share of deaths were certified as **"natural causes"**, acute heart or respiratory failure, **without autopsy**. The Guardian found that **69% of deaths among Indian, Nepali and Bangladeshi workers between 2010 and 2020** were attributed to natural causes (*The Guardian*, 2021).
- The **ILO's own 2021 report** found that Qatar was **not investigating or reporting all work-related deaths** (ILO, 2021).

**Why does the classification matter so much?** Because a young, healthy man who dies of "cardiac arrest" after working outdoors in extreme heat may well have died **of the heat**, and heat is a **workplace condition**, which makes his death a **work-related death**, which makes it someone's **legal responsibility**. Certifying it as "natural causes," **without an autopsy**, makes the question unanswerable, and unanswerable questions have no defendant.

**So the honest conclusion is not a number. It is this:**

> **The true toll of the labour that built Qatar 2022 is genuinely unknown — and it is unknown in large part because the deaths were not investigated. The absence of a reliable figure is not a neutral gap in the data. It is itself the finding.**

That is a harder sentence than "6,500 workers died." It is also the true one, and the one you can defend.

**What this teaches you beyond football:** when you meet a contested number, **do not pick the one that suits your argument.** Ask what each figure **counts**, who **published** it, and what **incentive** they had. That single habit will serve you for the rest of your life, in every subject you ever study.

:::reveal Why is "6,500 workers died building the Qatar World Cup" a claim that no source actually supports? ||| Because it **fuses two incompatible figures**. The Guardian's 6,500 counts **all deaths, from all causes, in any job or none**, among migrants from five countries living in Qatar over roughly a decade, not deaths on World Cup projects. Qatar's stadium-site figure is **37**. Its own World Cup chief said **400-500** across projects connected to the tournament. Each number answers a **different question**. The honest finding is that the true toll is **unknown, because the deaths were not investigated**, and that absence is itself the finding.

## Sources
- Amnesty International. (2021, August 26). *Qatar: Failure to investigate migrant worker deaths leaves families in despair*. https://www.amnesty.org/en/latest/news/2021/08/qatar-failure-to-investigate-migrant-worker-deaths-leaves-families-in-despair/
- CNN. (2022, November 29). *Qatar World Cup chief says between 400 and 500 migrant workers have died in projects connected to the tournament*. https://www.cnn.com/2022/11/29/football/qatar-world-cup-migrant-worker-deaths-spt-intl/index.html
- International Labour Organization. (2021, November). *One is too many: The collection and analysis of data on occupational injuries in Qatar*. https://www.ilo.org/publications/one-too-many-collection-and-analysis-data-occupational-injuries-qatar
- *The Guardian*. (2021, February 23). *Revealed: 6,500 migrant workers have died in Qatar since World Cup awarded*. https://www.theguardian.com/global-development/2021/feb/23/revealed-migrant-worker-deaths-qatar-fifa-world-cup-2022`,
      recallContent: [
        {
          prompt: "Name the four Qatar 2022 figures and what each one actually counts.",
          answer:
            "6,500 (Guardian, 2021) = all deaths, all causes, five nationalities, all of Qatar, c. 2010-2020. 37 (Qatar's Supreme Committee) = deaths among World Cup STADIUM workers. 400-500 (Al-Thawadi, 2022) = deaths on projects CONNECTED to the tournament. 50 (ILO, 2021) = work-related deaths across all Qatar in the single year 2020.",
        },
        {
          prompt: "What is the honest conclusion about the Qatar 2022 death toll?",
          answer:
            "That the true toll is genuinely UNKNOWN, largely because the deaths were not investigated and a great many were certified as 'natural causes' without autopsy. The absence of a reliable figure is not a neutral gap in the data; it is itself the finding.",
        },
        {
          prompt: "Why does certifying a death as 'natural causes' without an autopsy matter so much?",
          answer:
            "Because a young healthy man who dies of 'cardiac arrest' after working in extreme heat may have died OF the heat, and heat is a workplace condition, which would make it a work-related death and therefore someone's legal responsibility. Unanswerable questions have no defendant.",
        },
      ],
    },
    {
      slug: "football-pay-to-play",
      title: "29 · Pay-to-play: how American youth football gates access by income",
      section: "Section 7 · Money, labour, and the cost of the game",
      body: `Everything in this section so far has been about somewhere else. This one is about **the United States**, and it is probably the part of this course most likely to be about **you**.

**In most of the world, football is the cheapest sport there is.** A ball, some grass, two piles of jumpers for goalposts. That is the entire barrier to entry, which is exactly why the game is played everywhere, by everyone, and why so many of its greatest players came from places with no money at all.

**In the United States, it is one of the more expensive youth sports.** This is not an accident of the game. It is a feature of the **system built around it**, and it has a name: **pay-to-play.**

---

**How the American system works.**

There is no meaningful free pipeline. To play competitive youth football in the US, a family generally pays:

- **Club fees**, the core cost, paid to a private club, per season or per year.
- **Travel**, the "travel team" is the whole model. Tournaments in other cities and states mean petrol, flights, hotels and meals.
- **Kit**, required uniforms, training gear, warm-ups, often from a specified supplier.
- **Tournament entry fees.**
- **Private coaching and trainers**, if you want to keep up with the kids who have them.
- **The invisible cost: a parent's time.** Someone must drive to training three times a week and give up entire weekends. That requires a job with **flexible hours**, which is itself a marker of income.

---

**The numbers, cited.**

The Aspen Institute's **Project Play** surveys what American families actually spend:

- **Soccer is the most expensive** of the four major youth sports it studied: an average of **$1,188 per child, per season** (Aspen Institute, 2022), ahead of basketball, baseball and tackle football.
- Across youth sport generally, the average family spent **$1,016 on a child's primary sport in 2024, a 46% increase since 2019**, plus roughly **$475** more on that child's other sports, for **close to $1,500 a year for one child** (Aspen Institute, 2025).

**And here is the number that tells the actual story.** Regular sport participation among children aged **6-12**, by household income (Aspen Institute, 2022):

| Household income | Children playing sports regularly |
| --- | --- |
| **$25,000 or less** | **24%** |
| **$100,000 or more** | **40%** |

A child from a household earning over $100,000 is **substantially more likely** to be playing sport at all. And Project Play further reports that children from homes earning **$100,000 or more are twice as likely to play travel sports** as those from homes earning under $50,000 (Aspen Institute, 2025), and in American football, **travel is where the pathway is.**

---

**Now put that beside Lesson 22, and see the pattern.**

In **1921**, the FA did not ban women from playing football. It **locked them out of the grounds**, and without grounds there were no crowds, no revenue, and no pathway.

In the **United States today**, nobody bans poor children from playing football. **The pathway simply costs money they do not have**, and without the club, the travel, and the tournaments, they are invisible to the scouts, the college coaches, and the national team programme.

**Different century. Different mechanism. Same result: the people who control access decide who gets to play.**

This is why the pay-to-play problem is a **talent** problem as well as a **justice** problem. A system that selects for **parental income** is not selecting for **ability**, and every country that has a cheaper, more open pathway is drawing from a bigger pool of children than the United States is. When people ask why American football has not produced more world-class players relative to the size and wealth of the country, this is one of the serious answers on the table.

---

**What actually helps, practical, and not preachy.**

- **Recreational and school football exist and are dramatically cheaper.** They are not the elite pathway, but they are football, and a good player playing a lot of football is developing.
- **Ask clubs directly about scholarships, fee waivers and financial aid.** Many have them. Many do not advertise them. **Ask anyway**, the worst outcome is a no.
- **Free football is real football.** Pickup games, futsal courts, the wall in the driveway. Some of the best players alive learned in exactly these conditions, and the "everyone in the world learns on the street" story is not a myth, it is the norm nearly everywhere except here.
- **Refereeing (Lesson 30) is a way to be paid BY football rather than paying for it.** If cost is the barrier, this is the single most direct thing a teenager can do about it, and it is the subject of the very next lesson.

:::reveal What is structurally identical about the FA's 1921 ban on women's football and American pay-to-play, and what is different? ||| **Different mechanism, same result.** In 1921 the FA locked women out of the **grounds**; without grounds there were no crowds, no revenue, no pathway. In the US today nobody bans poor children, the **pathway simply costs money they do not have**, and without the club and the travel they are invisible to scouts and college coaches. In both cases, **the people who control access decide who gets to play.** And in both cases it is a **talent** problem as well as a justice one: a system that selects for parental income is not selecting for ability.

## Sources
- Aspen Institute. (2022). *State of play 2022: Costs to play trends*. https://www.aspeninstitute.org/wp-content/uploads/2025/08/2022_SoP_National_CostsPlay-FINAL.pdf
- Aspen Institute. (2025, February 24). *Project Play survey: Family spending on youth sports rises 46% over five years*. https://projectplay.org/news/2025/2/24/project-play-survey-family-spending-on-youth-sports-rises-46-over-five-years
- Aspen Institute's Project Play. (n.d.). *Youth sports facts: Challenges*. Retrieved July 2026, from https://projectplay.org/youth-sports/facts/challenges`,
      recallContent: [
        {
          prompt: "What does the average American family spend on youth soccer, and how does it compare to other sports?",
          answer:
            "About $1,188 per child per season (Aspen Institute, 2022), the MOST expensive of the four major youth sports studied, ahead of basketball, baseball and tackle football.",
        },
        {
          prompt: "Give the participation gap by household income for US children aged 6-12.",
          answer:
            "24% of children from households earning $25,000 or less play sports regularly, against 40% from households earning $100,000 or more. And kids from $100k+ homes are twice as likely to play TRAVEL sports, which, in American soccer, is where the pathway is.",
        },
        {
          prompt: "Why is pay-to-play a TALENT problem, not only a justice problem?",
          answer:
            "Because a system that selects for parental income is not selecting for ability. Every country with a cheaper, more open pathway is drawing from a bigger pool of children than the US is.",
        },
      ],
    },
    {
      slug: "football-quiz-section-7",
      title: "Section 7 quiz · Money, labour, and the cost of the game",
      section: "Section 7 · Money, labour, and the cost of the game",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who receives a transfer fee when a player moves clubs?",
            options: [
              "The player",
              "The selling club",
              "The player's agent, in full",
              "The national association",
            ],
            correctIndex: 1,
            explanation:
              "The fee goes to the SELLING CLUB, it is the price of releasing the player from their remaining contract. The player receives wages and usually a signing-on fee.",
            sourceLessonSlug: "football-transfers-and-academies",
          },
          {
            prompt: "Why does a club often sell its best player with a year left on their contract?",
            options: [
              "Because FIFA requires it",
              "Because an expired contract makes the player a FREE AGENT who can leave for nothing, so it is the club's last chance to convert them into a fee",
              "Because transfer fees are highest in a player's final year",
              "Because the salary cap forces it",
            ],
            correctIndex: 1,
            explanation:
              "Contract length is leverage, the single most important economic fact in football's labour market.",
            sourceLessonSlug: "football-transfers-and-academies",
          },
          {
            prompt: "What is the men's world record transfer fee, and does it still stand?",
            options: [
              "€222 million, Neymar, Barcelona to PSG, August 2017, and it still stands",
              "€100 million, and it has been broken many times since",
              "€500 million, set in 2024",
              "There is no record; fees are confidential",
            ],
            correctIndex: 0,
            explanation:
              "Neymar's €222m move in August 2017 remains the record nearly a decade later, no club has topped it.",
            sourceLessonSlug: "football-transfers-and-academies",
          },
          {
            prompt: "What is the women's world record transfer fee, and what makes it notable?",
            options: [
              "About $1.1 million, Naomi Girma to Chelsea, January 2025, the first women's transfer above $1 million",
              "About €50 million",
              "About $767,000, and it has not been broken",
              "There has never been a paid transfer in women's football",
            ],
            correctIndex: 0,
            explanation:
              "Girma's roughly $1.1m move from San Diego Wave to Chelsea broke the previous record of about $767,000 (Kundananji to Bay FC, February 2024). Set it beside the men's €222m and the ratio, roughly 200 times, is the honest measure of where the women's game sits economically.",
            sourceLessonSlug: "football-transfers-and-academies",
          },
          {
            prompt: "What is FIFA's Article 19?",
            options: [
              "The rule requiring VAR at all World Cup matches",
              "'Protection of minors', international transfers are only permitted if the player is over 18, with narrow listed exceptions",
              "The salary cap for MLS clubs",
              "The rule creating the transfer window",
            ],
            correctIndex: 1,
            explanation:
              "In the Regulations on the Status and Transfer of Players. Exceptions include parents moving for non-football reasons; players aged 16-18 within the EU/EEA (where the club must guarantee an academic education as well as football training); a 50km cross-border rule; and refugees.",
            sourceLessonSlug: "football-agents-minors-and-exploitation",
          },
          {
            prompt: "Under Article 19's EU/EEA exception for 16-18 year-olds, what must the new club guarantee?",
            options: [
              "A first-team contract",
              "Adequate football education AND an academic, school or vocational education allowing a career other than football",
              "A minimum wage set by FIFA",
              "Return travel to the player's home country",
            ],
            correctIndex: 1,
            explanation:
              "It is the rule that says: if you take a 16-year-old's childhood, you owe them a fallback. Whether that obligation is honoured in practice is one of the sharpest questions in the sport.",
            sourceLessonSlug: "football-agents-minors-and-exploitation",
          },
          {
            prompt: "How should the widely-quoted figure of '15,000 young West African players trafficked per year' be treated?",
            options: [
              "As an established fact, it comes from an NGO",
              "As a contested hidden-population estimate: the exploitation is real and documented, but nobody has a reliable count",
              "As a proven undercount",
              "As a fabrication with no basis at all",
            ],
            correctIndex: 1,
            explanation:
              "The figure describes a hidden population, unrecorded, often illegal, invisible to statistics. Researchers of football migration caution that such numbers must be handled with care. The exploitation is documented; the SCALE is not. Learning to say that is more valuable than memorising a number.",
            sourceLessonSlug: "football-agents-minors-and-exploitation",
          },
          {
            prompt: "The Guardian's figure of at least 6,500 migrant worker deaths in Qatar counts what, exactly?",
            options: [
              "Deaths of workers on World Cup stadium construction sites",
              "Deaths of migrant workers from five countries, in Qatar, from ALL causes, in any job or none, over roughly 2010-2020",
              "Work-related deaths across Qatar in 2020",
              "Deaths on all projects connected to the tournament",
            ],
            correctIndex: 1,
            explanation:
              "It is an ALL-CAUSE death count among migrants from India, Pakistan, Nepal, Bangladesh and Sri Lanka living in Qatar over a decade. The Guardian's own reporting says so and notes it likely undercounts total migrant deaths, since it excludes several major sending countries.",
            sourceLessonSlug: "football-qatar-2022",
          },
          {
            prompt: "Qatar's Supreme Committee reported 3 work-related and 34 non-work-related deaths (37 total). What does that figure count?",
            options: [
              "All migrant deaths in Qatar",
              "Deaths among workers on FIFA World Cup STADIUM sites specifically, the narrowest possible definition",
              "Deaths across all tournament-connected projects",
              "Work-related deaths in a single year",
            ],
            correctIndex: 1,
            explanation:
              "Stadium sites only. Anyone quoting 'only 37 died' has taken the narrowest possible count and applied it to the whole World Cup.",
            sourceLessonSlug: "football-qatar-2022",
          },
          {
            prompt: "Who said that between 400 and 500 migrant workers died on projects connected to the Qatar World Cup?",
            options: [
              "Amnesty International",
              "The International Labour Organization",
              "Hassan Al-Thawadi, Qatar's own World Cup chief, in November 2022",
              "The Guardian",
            ],
            correctIndex: 2,
            explanation:
              "It is one of the most revealing numbers in the dispute precisely because of WHO said it, Qatar's own World Cup chief, giving a figure far broader than Qatar's official stadium count of 37.",
            sourceLessonSlug: "football-qatar-2022",
          },
          {
            prompt: "What is the honest conclusion about the death toll of the labour that built Qatar 2022?",
            options: [
              "It was 6,500",
              "It was 37",
              "It is genuinely unknown, largely because the deaths were not investigated, and that absence is itself the finding",
              "It was 400-500, and the matter is settled",
            ],
            correctIndex: 2,
            explanation:
              "Amnesty documented Qatar's failure to investigate; the ILO found deaths were not all reported; and a large share were certified 'natural causes' without autopsy. A heat death certified as cardiac arrest becomes a question with no defendant.",
            sourceLessonSlug: "football-qatar-2022",
          },
          {
            prompt: "Why does certifying a worker's death as 'natural causes' without an autopsy matter?",
            options: [
              "It affects the family's religious rites only",
              "Because a young healthy man who dies of 'cardiac arrest' after working in extreme heat may have died OF the heat, a workplace condition, and therefore someone's legal responsibility",
              "It has no practical consequence",
              "It changes the total published by FIFA",
            ],
            correctIndex: 1,
            explanation:
              "The classification is not a clerical detail. It is the mechanism by which a work-related death becomes an unanswerable question, and unanswerable questions have no defendant.",
            sourceLessonSlug: "football-qatar-2022",
          },
          {
            prompt: "According to the Aspen Institute, how does soccer rank among the costs of major American youth sports?",
            options: [
              "The cheapest of the four major sports",
              "The MOST expensive of the four major sports studied, about $1,188 per child per season",
              "Roughly the same as baseball",
              "Free, because it is school-based",
            ],
            correctIndex: 1,
            explanation:
              "Ahead of basketball, baseball and tackle football. Elsewhere in the world football is the cheapest sport there is, a ball and some grass. In the US, the SYSTEM around it is expensive, not the game.",
            sourceLessonSlug: "football-pay-to-play",
          },
          {
            prompt: "What is the US youth sport participation gap by household income (ages 6-12)?",
            options: [
              "24% for households at $25,000 or less, versus 40% for households at $100,000 or more",
              "There is no meaningful gap",
              "40% versus 42%, the gap is negligible",
              "10% versus 90%",
            ],
            correctIndex: 0,
            explanation:
              "And children from $100k+ homes are twice as likely to play TRAVEL sports, which, in American soccer, is where the entire pathway lives.",
            sourceLessonSlug: "football-pay-to-play",
          },
          {
            prompt: "What do the FA's 1921 ban and American pay-to-play have in common?",
            options: [
              "Both were imposed by FIFA",
              "Different mechanisms, same result: the people who control ACCESS decide who gets to play, and a system that selects for income or gender is not selecting for ability",
              "Both were formally rescinded in 1971",
              "Nothing, they are unrelated",
            ],
            correctIndex: 1,
            explanation:
              "In 1921 the FA locked women out of the grounds; today the pathway simply costs money many families do not have. In both cases the barrier is structural, and in both cases it is a TALENT problem as well as a justice problem.",
            sourceLessonSlug: "football-pay-to-play",
          },
        ],
      },
    },

    // ────────────────── SECTION 8 · OPPORTUNITIES ──────────────────
    {
      slug: "football-refereeing",
      title: "30 · Refereeing: the best paid job a teenager can get in football",
      section: "Section 8 · Opportunities for amateurs and entrepreneurs",
      body: `**Start here, because this is the most actionable lesson in the course.**

If you are a high school student who loves football, **refereeing is the single most direct way to be paid BY football instead of paying for it.** It is real work, it pays properly, you can start at **13**, and there is a permanent shortage of officials, which means if you are competent and reliable, **you will get as many games as you can handle.**

---

**How to actually start (United States).**

1. **Age.** You must be **at least 13** to create a profile in the **U.S. Soccer Learning Center** (South Texas Soccer Referees, n.d.).
2. **The course.** The entry-level qualification is the **Grassroots referee** licence: an **online component of roughly 4.5 hours** plus an **in-person field session** (South Texas Soccer Referees, n.d.).
3. **The cost.** It varies by state association. The South Texas association publishes a **$55** total fee for the first-time referee course; other associations publish different figures, and some bundle a starter kit. **Check your own state association's published fee, do not assume this one applies to you.**
4. **Background check.** Required **only if you are 18 or older** (South Texas Soccer Referees, n.d.).
5. **Gear.** A whistle, a watch, cards, a notebook, and a uniform. Law 5 actually specifies the compulsory equipment, whistle, watch, red and yellow cards, and a means of keeping a record of the match (IFAB, 2026, Law 5).
6. **Get assigned.** Your local league or association assigns games. Say yes to everything early on.

---

**What it pays.**

Rates are set by **each league or association**, not nationally, so the honest way to show you is to take **one association's actual published fee schedule** and let you see the shape of it. Below is the scale published by **SYA (Sports & Youth Association, Centreville, Virginia), effective Spring 2025** (SYA, 2025):

**Recreational league:**

| Age group | Centre referee | Assistant referee |
| --- | --- | --- |
| U9-U10 | $30 | $15 |
| U11-U12 | $35 | $20 |
| U13-U14 | $45 | $25 |
| U15-U16 | $55 | $35 |
| U17-U19 | $65 | $40 |

**Higher-level competitive leagues (NCSL / ECNL-RL / EDP):**

| Age group | Centre referee | Assistant referee |
| --- | --- | --- |
| U11-U12 | $70 | $35-40 |
| U13-U14 | $75 | $35-45 |
| U15-U16 | $80 | $40-50 |
| U17-U19 | **$90** | $45-55 |

**These are one association's published rates, in one state, for one season. Yours will differ.** Look up your own, the numbers are usually published on the league's website, exactly like this one, and if they are not, ask.

**But look at the shape of it, because the shape is what matters.** A **$90** game. Referees frequently work **several matches on the same morning**, because clubs schedule back-to-back fixtures on the same fields. Do the arithmetic on a Saturday of three or four games and compare it to almost any other job available to a fifteen-year-old.

---

**The part nobody tells you: it is hard, and that is why it pays.**

You will be shouted at. By parents, mostly. Some of them will be shouting at a fourteen-year-old about a throw-in in an under-11 game, and they will not be embarrassed about it. **Referee retention is a genuine crisis in youth sport, and abuse from adults is the reason.**

So learn this before your first game:

- **Know the Laws better than anyone in the ground.** You have just spent Section 3 of this course doing exactly that. When you can say "Law 11, the second-last opponent, and hands and arms are not considered," calmly, you win the argument permanently.
- **Be decisive.** A confident wrong decision causes less trouble than a hesitant right one. Whistle, signal, move on.
- **Do not argue back.** You have a whistle and a notebook. You do not need to win a shouting match, and you will not.
- **Your assignor is your ally.** Report abuse. Every time. This is not tattling; it is how the system is supposed to work, and if you do not report it, nothing changes.

---

**Why this is also a CAREER, not just a job.**

Refereeing has a **ladder**, exactly like coaching. Grassroots → regional → national → professional → international. Referees at the top of that ladder officiate professional matches and are paid accordingly; a small number officiate at World Cups. **Every one of them started with an under-10 game on a Saturday morning and a parent screaming at them.**

And even if you never climb it: **you will learn the Laws better than any player you ever meet, you will get paid every weekend of your teens, and you will understand football from the inside.**

:::reveal You are 15, you have $55, and you want to earn money from football this season. What is the single most direct path, and what is the first thing you should do? ||| **Become a referee.** You can create a U.S. Soccer Learning Center profile from age **13**; the Grassroots licence takes roughly **4.5 hours online plus an in-person field session**; and a published scale like SYA's (Spring 2025) pays a centre referee **$30 at U9-U10 up to $90 at U17-U19** in top competitive leagues, often several games in one morning. **First step: look up YOUR state association's published course fee and referee pay scale** (they differ) and register for the next Grassroots course.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*, Law 5. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en
- South Texas Soccer Referees. (n.d.). *Referee certification and resources*. Retrieved July 2026, from https://www.stxref.org/referee/
- SYA. (2025). *Soccer referee pay scale* (Effective Spring 2025). Sports & Youth Association, Centreville, VA. https://syasports.org/resources/referee-pay-scale/
- U.S. Soccer. (n.d.). *U.S. Soccer Learning Center*. Retrieved July 2026, from https://learning.ussoccer.com/`,
      recallContent: [
        {
          prompt: "What is the minimum age to start the US Soccer grassroots referee pathway, and what does the course involve?",
          answer:
            "13, you must be at least 13 to create a U.S. Soccer Learning Center profile. The Grassroots licence is roughly 4.5 hours of online learning plus an in-person field session. A background check is required only from age 18.",
        },
        {
          prompt: "Roughly what does refereeing pay, and how should you find your own rate?",
          answer:
            "One published example (SYA, Virginia, Spring 2025): $30 for a U9-U10 centre up to $90 for a U17-U19 centre in top competitive leagues, with several games often scheduled in one morning. Rates are set locally, look up YOUR association's published scale.",
        },
        {
          prompt: "What is the single best defence against being shouted at as a young referee?",
          answer:
            "Knowing the Laws better than anyone in the ground, and being decisive. A confident wrong decision causes less trouble than a hesitant right one, and report abuse to your assignor every time.",
        },
      ],
    },
    {
      slug: "football-coaching-badges",
      title: "31 · Coaching: the licensing ladder, and how to get on it",
      section: "Section 8 · Opportunities for amateurs and entrepreneurs",
      body: `Coaching is a **licensed profession**, and the licence ladder is public, structured, and open to a teenager. You do **not** need to have been a professional player. Many excellent coaches were not, and some of the best managers in the world barely played at all.

---

**The U.S. Soccer coaching pathway.**

It starts free and gets progressively more demanding:

| Level | What it is |
| --- | --- |
| **Introduction to Grassroots Coaching** | A short, **free** online module. This is the front door, anyone can walk through it today. |
| **Grassroots licences: 4v4, 7v7, 9v9, 11v11** | Short (around two-hour) courses, each tied to a game format. Available online and in person. **Two must be taken in person**, and one of those in-person courses must be the **11v11**, before you can move up. |
| **National D Licence** | The **first formal licence** and the step from grassroots into competitive coaching, a multi-week course combining in-person sessions, virtual meetings, assignments and mentoring with a licensed U.S. Soccer educator. |
| **National C Licence** | Aimed at coaching in the roughly U13-U17 environment. |
| **National B Licence** | A months-long course focused on player and team development in a performance environment. Requires holding the C for a period, several years' coaching experience, and an active coaching role with access to 11v11 training. |
| **National A Licence** | Typically split into **A-Youth** (developing the future professional player) and **A-Senior** (high-performance senior environments). |
| **Pro Licence** | The top qualification, for coaching at the professional level (MLS, NWSL, USL, national teams). |

**Outside the US**, the equivalent ladder in Europe runs under **UEFA's coaching convention**, with licences commonly labelled **C → B → A → Pro**, administered by each **national association** (The FA in England, the DFB in Germany, and so on). **The exact names, prerequisites and costs are set by that national association, look them up at the source for the country you are in.** Do not take a course's word for it, including this one.

---

**Why this is a genuinely good route for a young person.**

- **You can start now.** The introductory module is free and online. The grassroots licences are short and cheap relative to almost any other professional qualification.
- **The work exists immediately.** Youth clubs, camps, and recreational leagues need coaches constantly, and a licensed 17-year-old who is reliable, safe and organised is genuinely employable.
- **It compounds.** Every licence unlocks the next, and every season of coaching is a prerequisite for the level above. A person who starts the ladder at 16 and keeps going is, at 26, ten years into a licensed career while their peers are just starting one.
- **It is transferable.** Everything coaching teaches, planning a session, holding a room, giving feedback, managing conflict with parents, is a management skill in a tracksuit.

---

**How to actually be good at it, briefly.**

- **Maximise touches.** The single most common mistake in youth coaching is drills in which twelve children stand in a line and one child touches the ball. **Small-sided games** with lots of repetitions beat elaborate exercises. If your session has a queue in it, redesign the session.
- **Let them play.** Children learn football by playing football. A session that is 80% talking is a session about you.
- **Coach the decision, not just the outcome.** "Good pass" teaches nothing. "You saw the switch was on, good decision" teaches the thing you actually want repeated.
- **Safeguarding is not paperwork.** Background checks, certification, never being alone with a child, knowing your club's reporting procedure. It is the **most important part of the job** and the part that ends careers when it is neglected. Take it seriously from your very first session.

:::reveal You are 16 and want to start coaching. What is the very first, free step, and what is the constraint on climbing past the grassroots level? ||| The **free online "Introduction to Grassroots Coaching" module**, that is the front door, and you can do it today. Then the grassroots licences (**4v4, 7v7, 9v9, 11v11**). The constraint: **two of the grassroots courses must be taken IN PERSON, and one of those must be the 11v11 course**, before you can progress to the **National D Licence**, the first formal licence and the step into competitive coaching.

## Sources
- U.S. Soccer. (2018, August 15). *7v7, 9v9 and 11v11 online courses complete new U.S. Soccer grassroots coaching pathway*. https://www.ussoccer.com/stories/2018/08/7v7-9v9-and-11v11-online-courses-complete-new-us-soccer-grassroots-coaching-pathway
- U.S. Soccer. (n.d.). *U.S. Soccer Learning Center*. Retrieved July 2026, from https://learning.ussoccer.com/
- Cal South. (n.d.). *Soccer coaching license pathway*. Retrieved July 2026, from https://calsouth.com/coaching-license-pathway/`,
      recallContent: [
        {
          prompt: "What is the first step on the U.S. Soccer coaching ladder, and what does it cost?",
          answer:
            "The 'Introduction to Grassroots Coaching' online module, it is free and short. From there: the 4v4, 7v7, 9v9 and 11v11 grassroots licences, then the National D Licence.",
        },
        {
          prompt: "What is the most common mistake in youth coaching?",
          answer:
            "Drills where twelve children queue and one touches the ball. Maximise touches, small-sided games with lots of repetitions beat elaborate exercises. If your session has a queue in it, redesign the session.",
        },
      ],
    },
    {
      slug: "football-the-honest-odds",
      title: "32 · Playing for a living: the honest odds, with the real numbers",
      section: "Section 8 · Opportunities for amateurs and entrepreneurs",
      body: `This lesson exists to tell you the truth, and the truth is not cruel, it is **useful**, because it lets you plan.

**Almost nobody makes a living playing football.** Not "few." **Almost nobody.**

---

**The pathway, laid out.**

In the United States, the routes are roughly:

- **High school football** → the broadest base, and for most players the end of the competitive road.
- **Club / travel football** (see Lesson 29 on what it costs) → where college recruitment actually happens.
- **MLS NEXT** and elite academy platforms → the highest-level youth environment; some clubs' academies are free, which is a genuine and underused route.
- **College football (NCAA Divisions I, II, III; NAIA; junior college)** → the main American pipeline, and by far the best of these options for the overwhelming majority, because **you also get a degree.**
- **Professional: MLS, USL Championship, USL League One, NWSL**, and leagues abroad.

---

**Now the numbers. These are the NCAA's own, published, current figures** (NCAA Research, 2026, high school data from the 2024-25 NFHS participation survey; college data from the NCAA's 2024-25 participation report):

**Men's soccer:**

| Measure | Figure |
| --- | --- |
| High school participants | **484,908** |
| NCAA participants | **28,746** |
| **% of HS players who play NCAA soccer (any division)** | **5.9%** |
| **% who play NCAA Division I** | **1.4%** |

**Women's soccer:**

| Measure | Figure |
| --- | --- |
| High school participants | **393,048** |
| NCAA participants | **31,200** |
| **% of HS players who play NCAA soccer (any division)** | **7.9%** |
| **% who play NCAA Division I** | **2.8%** |

**Read those Division I rows again.** Roughly **1 in 71** high school boys and **1 in 36** high school girls will play Division I college soccer. And **Division I college soccer is not professional football.** It is the step before people even begin to think about professional football.

---

**"So what percentage go pro?"**

**The NCAA does not publish that number for soccer, and the reason is itself worth learning.**

The NCAA's professional-probability tables are built from **draft data**. But **men's soccer is excluded** from those tables, because professional opportunity in men's soccer is not funnelled through a single draft, players sign with MLS, USL, and clubs all over the world by many different routes. And the **NWSL is excluded too**, because it has **discontinued its draft** altogether (NCAA Research, 2026). No draft, no draft data, no probability table.

So: **anyone who quotes you a precise "X% of high school players turn pro" figure for soccer is quoting a number that the sport's own major statistical authority declines to publish.** Ask them where it came from.

**What we can say honestly:** if only 1.4% of high school boys reach Division I, and professional football is a further, far narrower filter applied on top of that, recruiting globally, from a planet's worth of players, then the probability that any given high school player becomes a professional footballer is **very small indeed**. You do not need a decimal point to make the decision this fact implies.

---

**So what should you actually do? Four things, and they are not "give up."**

**1. Play. Really play.** The odds are an argument against *betting your future* on football. They are **not** an argument against playing. Football will give you fitness, friends, discipline and joy for your entire life, and none of that requires a professional contract.

**2. Take the college route seriously, for the degree.** College soccer is a genuinely great outcome: you play at a high level **and** you leave with a qualification that works whether or not football does. Play in high school **and** club, get your grades, and understand that coaches recruit players they can actually admit.

**3. Have the other plan, and have it EARLY.** Not "if football fails." **Alongside.** Every academy prospectus in the world says this and a great many families ignore it. Do not ignore it. The 16-year-old who is released and has nothing else is the most predictable tragedy in this sport, and it is entirely preventable.

**4. Point yourself at the industry, not just the pitch.** This is the real conclusion of this whole section, and it is the next lesson: **the jobs in football are not on the pitch.** For every player in a professional squad there are coaches, referees, physios, analysts, scouts, groundstaff, media, medics, kit staff, administrators, agents, commercial staff and executives. **That is where the careers are, that is where the numbers are survivable, and every single one of those people gets to spend their working life in football.**

:::reveal What percentage of American high school soccer players go on to play NCAA Division I soccer, and what does the NCAA say about the odds of turning professional? ||| **1.4% of boys and 2.8% of girls** reach **NCAA Division I** (NCAA Research, 2026). Overall NCAA participation (all divisions) is **5.9%** of high school boys and **7.9%** of girls. As for turning pro: **the NCAA does not publish a probability for soccer at all**, men's soccer is excluded because professional entry is not funnelled through a draft, and the **NWSL has discontinued its draft** entirely. So anyone quoting you a precise "% who turn pro" for soccer is quoting a figure the sport's own statistical authority declines to publish.

## Sources
- NCAA Research. (2026, March). *Estimated probability of competing in college athletics: Figures and methodology*. National Collegiate Athletic Association. https://ncaaorg.s3.amazonaws.com/research/pro_beyond/RES_ProbabilityBeyondHSFiguresMethod.pdf
- National Federation of State High School Associations. (2025). *2024-25 high school athletics participation survey*. https://www.nfhs.org/`,
      recallContent: [
        {
          prompt: "What percentage of US high school soccer players reach NCAA Division I?",
          answer:
            "1.4% of boys and 2.8% of girls (NCAA Research, 2026, using 2024-25 data). Across all NCAA divisions it is 5.9% of boys and 7.9% of girls. Roughly 1 in 71 boys and 1 in 36 girls reach DI.",
        },
        {
          prompt: "Why does the NCAA publish no high-school-to-professional probability for soccer?",
          answer:
            "Because its pro tables are built from DRAFT data. Men's soccer is excluded (pro entry isn't funnelled through one draft, MLS, USL, and clubs worldwide all sign players), and the NWSL is excluded because it has discontinued its draft. No draft, no data, no table.",
        },
        {
          prompt: "What is the real conclusion to draw from the odds?",
          answer:
            "Not 'give up', play, take the college route for the DEGREE, build the other plan ALONGSIDE (not after), and point yourself at the INDUSTRY, not just the pitch. That's where the careers, and the survivable numbers, actually are.",
        },
      ],
    },
    {
      slug: "football-starting-a-club-or-league",
      title: "33 · Building something: clubs, futsal leagues, and the entrepreneur's route in",
      section: "Section 8 · Opportunities for amateurs and entrepreneurs",
      body: `The most underrated fact about football: **the barriers to STARTING something are astonishingly low.** You need a ball, some people, and a place. Everything else is organisation, and organisation is a skill, not a birthright.

---

**Start a team.**

A team is eleven people who agree to turn up. (Or seven, or five.) What it actually requires is:

- **A place to play**, a school field, a park, a community pitch. Ask. Councils, schools and parks departments have pitches sitting empty most of the week, and are often startled that a young person has bothered to ask about them.
- **A way to affiliate.** To play in an organised league, a team usually needs to affiliate with the local league or state association, which brings **registration** and, importantly, **insurance**. Look up your state association's requirements. This is where "a group of mates" becomes "a club."
- **A treasurer.** Even if it is you. Money going in and out of a shared pot needs one person accountable for it, from day one, with a written record. This is the point at which most amateur organisations fail, and it is entirely avoidable.

---

**Start a futsal league. (Seriously.)**

**Futsal**, five-a-side, indoors, on a hard court, with a smaller, heavier, low-bounce ball, is the highest-leverage business idea in this entire course, and here is why:

| Futsal's property | Why it matters commercially |
| --- | --- |
| **Indoors** | It is **weather-proof**. Your season does not get rained off, which means your revenue does not get rained off. |
| **Small court** | You can run it in a **school gym, a community centre, a basketball court**, spaces that already exist, that are empty in the evenings, and that can be hired cheaply. |
| **Five-a-side** | You need **ten people**, not twenty-two. Filling a fixture is far easier. |
| **Short matches** | You can run **many games in one evening** on one court, which is what makes the economics work. |
| **Genuinely develops players** | The small court and heavy ball force **close control, fast decisions and constant touches**. It is not a watered-down version of football; it is a superb training environment for it. |

**The model, honestly stated.** You hire a court for an evening at a fixed cost. You sell entry to teams at a price per team per season. Your revenue is (teams × fee); your cost is (court hire + balls + a referee, who might be you, now that you read Lesson 30). **If the number of teams times the fee exceeds the cost of the court, you have a business.** If it does not, you have a hobby, and you will know which within one evening, which is exactly why it is a good first venture: **the feedback is immediate and the downside is one night's court hire.**

**The unglamorous parts that actually determine whether it works:** a **fixture list** people can rely on, a **results table** people can see, starting **on time**, and **insurance**. Amateur sport does not fail because the football is bad. It fails because nobody knows when they are playing, and because somebody got hurt and there was no cover.

---

**Other things a young person can genuinely build.**

- **Coach a camp.** School holidays, younger children, parents who need childcare. Get licensed (Lesson 31), get safeguarded, charge a fair rate. This is a real, common, first business.
- **Run a tournament.** A one-day, small-sided tournament with an entry fee per team. Logistically demanding, financially simple, and an outstanding thing to have organised at seventeen.
- **Provide a service to clubs that already exist.** Clubs need: photography, video, social media, a website, matchday programmes, kit printing, sponsorship packages. Most amateur clubs are run by volunteers who are exhausted and would gladly pay someone competent. **Walk into a local club and ask what they cannot get done.** That question is the origin of a large number of real businesses.

---

**The honest warning.** Everything above is real, and all of it is **work**. Booking courts, chasing fees, writing fixture lists, dealing with a team that drops out in week three. **The football is the easy part.** But the person who has organised a futsal league at seventeen has done something almost nobody their age has done, and can prove it, and that is worth considerably more than a trophy.

:::reveal Why is a futsal league a better first venture than an outdoor 11-a-side league? ||| Because almost every commercial risk is smaller. It is **indoors** (weather-proof, your revenue can't be rained off), it fits in **spaces that already exist and sit empty in the evenings** (a school gym, a community centre), it needs only **ten players** to fill a fixture rather than twenty-two, and **short matches** let you run many games on one court in one evening, which is what makes the economics work. Your downside is **one night's court hire**, and you'll know within one evening whether it's a business or a hobby.

## Sources
- U.S. Soccer. (n.d.). *U.S. Soccer Learning Center*. Retrieved July 2026, from https://learning.ussoccer.com/`,
      recallContent: [
        {
          prompt: "What are the two things that most often kill an amateur sports organisation?",
          answer:
            "Money with nobody accountable for it (get a treasurer and a written record from day one), and unreliability, no fixture list, no table, no punctuality. Plus no insurance. Amateur sport rarely fails because the football is bad.",
        },
        {
          prompt: "What is the simplest test of whether a futsal league is a business?",
          answer:
            "Teams × entry fee versus court hire + balls + referee. If revenue exceeds cost, it's a business; if not, it's a hobby. The downside is one night's court hire, and you find out immediately, which is what makes it a good first venture.",
        },
      ],
    },
    {
      slug: "football-jobs-around-the-game",
      title: "34 · The jobs that actually exist: where football's careers really are",
      section: "Section 8 · Opportunities for amateurs and entrepreneurs",
      body: `**The last lesson gave you the odds of playing. This one gives you the alternative, and it is much, much bigger than the pitch.**

A professional club fields eleven players. It **employs**, directly or through the industry around it, a great many more people than that, none of whom had to be good enough to play.

---

**The jobs, and what they actually are.**

**Officiating.** Covered in Lesson 30. Pays immediately, starts at 13, has a ladder to the professional game.

**Coaching.** Covered in Lesson 31. Licensed, laddered, and hiring constantly at the youth level.

**Grounds and pitch management.** A **groundskeeper** is an applied scientist. Soil, drainage, grass species, seed, irrigation, disease, fertiliser, mowing height, wear patterns, and (increasingly) hybrid natural/artificial surfaces (which Law 1 explicitly permits where competition rules allow). Every club, school, university, park and stadium needs its pitches maintained. It is **skilled**, **licensed** in places, **outdoors**, and there is genuine demand. Almost no teenager considers it, which is precisely the point.

**Sports medicine and performance.** Physiotherapists, athletic trainers, doctors, sports scientists, strength and conditioning coaches, nutritionists, and (a fast-growing area) **rehabilitation** and **injury-prevention** specialists. These are qualified professions with real training routes, and they exist at every level from a college programme upward.

**Performance analysis.** The person who codes every match, tags every event, builds the opposition report, and hands the coach the clips that decide the team talk. **This is now a standard role at professional clubs**, and it is one of the most accessible ways in for a young person who is good with a laptop, because the entry test is a **portfolio**, not a CV. **Analyse a match. Write it up. Publish it. Do it again.** Do that fifty times and you have something almost nobody else applying has.

**Data and recruitment analytics.** Clubs employ statisticians and data scientists to value players and model outcomes (expected goals, from Lesson 7, is the most famous product of this field). If you like maths and football, this is a real, growing, well-paid job, and it did not exist twenty-five years ago.

**Scouting.** Watching matches, identifying players, writing reports. Traditionally an apprenticeship built on trust and mileage; increasingly a hybrid of **video, data and live viewing**. Start by writing scouting reports on players in your own local league. Nobody will stop you, and it is exactly what the job is.

**Media, broadcast and content.** Commentary, journalism, podcasting, video, social media, club channels. Every club and league is now also a **media company**. The barrier to producing football media is currently **zero**, and the barrier to being **good** at it is the only real filter.

**Club operations, commercial and community.** Ticketing, sponsorship, matchday operations, merchandise, community programmes, safeguarding, finance, and running the actual organisation. **These are ordinary professional jobs, in football.** A club needs an accountant just as much as a hospital does.

**Kit, equipment, facilities, security, hospitality.** Real jobs. Real people. Every matchday.

---

**The economics of a lower-league club, and how to find them out for yourself.**

Here is the honest structure, without numbers I cannot source:

**Revenue** typically comes from **matchday** (tickets, food, bar), **commercial** (sponsorship, advertising, merchandise), **broadcast** (large at the top, small or nonexistent lower down), **player sales** (a genuine and sometimes dominant income line for a small club that develops well), and increasingly **community and facility hire** (the ground earning money on the days there is no match).

**Costs** are dominated, overwhelmingly, by **player and staff wages**. Then the stadium, the pitch, travel, insurance, and the academy.

**And the structural trap:** the way to earn more revenue is to be promoted, and the way to be promoted is to spend more on wages, so clubs spend beyond their income chasing promotion, and many **lose money**. Financial distress and even insolvency are **common** in lower-league football. This is a genuine, recurring, well-documented feature of the pyramid, and it is the price of the open ladder we praised in Lesson 24.

**Now here is the thing you should actually take away.** **You can check all of this yourself.** In England, football clubs are **companies**, and companies **file their accounts publicly**, you can read the real revenue and wage bill of a real football club, for free, at Companies House. Many clubs in other countries publish accounts too. **A course can tell you that wages dominate costs. A published set of accounts can PROVE it to you, and finding that out for yourself is exactly the skill this entire course has been trying to teach.**

---

**The closing point of this whole course.**

You are extremely unlikely to be paid to play football. You are **very likely indeed** to be able to build a life **in** football if you want one, as a referee, a coach, an analyst, a scout, a physio, a groundskeeper, a journalist, an administrator, or the person who started the futsal league.

**Almost nobody makes a living playing. The surrounding industry is where the jobs actually are, and it is enormous.** Go and find your part of it.

:::reveal You want a job in football analysis and you are 17 with no contacts. What is the entry test, and what should you do this week? ||| The entry test is a **portfolio, not a CV**, nobody is checking your credentials, they are checking your work. So: **analyse a match. Write it up. Publish it. Do it again.** Do that fifty times and you have something almost nobody else applying has. The same logic applies to scouting (write reports on players in your own local league) and to football media (the barrier to producing it is zero; the barrier to being good at it is the only filter).

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*, Law 1. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en
- NCAA Research. (2026, March). *Estimated probability of competing in college athletics: Figures and methodology*. National Collegiate Athletic Association. https://ncaaorg.s3.amazonaws.com/research/pro_beyond/RES_ProbabilityBeyondHSFiguresMethod.pdf`,
      recallContent: [
        {
          prompt: "What is the entry test for a job in football analysis or scouting?",
          answer:
            "A PORTFOLIO, not a CV. Analyse a match, write it up, publish it, repeat. Write scouting reports on players in your own local league. Nobody will stop you, and it is literally what the job is.",
        },
        {
          prompt: "What dominates the costs of a lower-league club, and what is the structural trap?",
          answer:
            "Player and staff WAGES dominate. The trap: more revenue requires promotion, and promotion requires spending more on wages, so clubs overspend chasing it, and financial distress is common. It is the price of the open pyramid.",
        },
        {
          prompt: "How can you verify a club's finances yourself?",
          answer:
            "In England, clubs are companies and file accounts publicly, you can read a real club's revenue and wage bill free at Companies House. A course can tell you wages dominate; published accounts can PROVE it.",
        },
      ],
    },
    {
      slug: "football-quiz-section-8",
      title: "Section 8 quiz · Opportunities for amateurs and entrepreneurs",
      section: "Section 8 · Opportunities for amateurs and entrepreneurs",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the minimum age to begin the U.S. Soccer grassroots referee pathway?",
            options: ["16", "13", "18", "21"],
            correctIndex: 1,
            explanation:
              "You must be at least 13 to create a profile in the U.S. Soccer Learning Center. A background check is required only from age 18, so a 13-to-17-year-old can be certified and working.",
            sourceLessonSlug: "football-refereeing",
          },
          {
            prompt: "What does the U.S. Soccer Grassroots referee course involve?",
            options: [
              "A four-year apprenticeship",
              "An online component of roughly 4.5 hours plus an in-person field session",
              "A written exam only, taken at a FIFA centre",
              "Playing at college level first",
            ],
            correctIndex: 1,
            explanation:
              "Roughly 4.5 hours online plus an in-person field session. Course fees vary by state association, one published example is $55, so look up YOUR association's fee rather than assuming.",
            sourceLessonSlug: "football-refereeing",
          },
          {
            prompt: "According to SYA's published Spring 2025 scale, what does a centre referee earn for a U17-U19 match in a top competitive league?",
            options: ["$15", "$30", "$90", "$250"],
            correctIndex: 2,
            explanation:
              "$90, and referees often work several matches in one morning, because clubs schedule back-to-back fixtures. Note this is ONE association's published rate in one state; rates are set locally and yours will differ.",
            sourceLessonSlug: "football-refereeing",
          },
          {
            prompt: "What is the best defence for a young referee against abuse from adults?",
            options: [
              "Arguing back forcefully",
              "Knowing the Laws better than anyone in the ground, being decisive, and reporting abuse to your assignor every time",
              "Avoiding difficult decisions",
              "Only refereeing matches involving friends",
            ],
            correctIndex: 1,
            explanation:
              "A confident wrong decision causes less trouble than a hesitant right one. And reporting abuse is not tattling, it is how the system is supposed to work. Referee retention is a genuine crisis, and adult abuse is the cause.",
            sourceLessonSlug: "football-refereeing",
          },
          {
            prompt: "What is the free first step on the U.S. Soccer coaching ladder?",
            options: [
              "The National D Licence",
              "The 'Introduction to Grassroots Coaching' online module",
              "The UEFA B Licence",
              "The Pro Licence",
            ],
            correctIndex: 1,
            explanation:
              "A short, free online module, the front door, and you can walk through it today. Then the 4v4, 7v7, 9v9 and 11v11 grassroots licences, then the National D.",
            sourceLessonSlug: "football-coaching-badges",
          },
          {
            prompt: "What must you do before progressing from the grassroots licences to the National D?",
            options: [
              "Have played professionally",
              "Take at least two grassroots courses IN PERSON, one of which must be the 11v11 course",
              "Coach for ten years",
              "Pass a written exam set by FIFA",
            ],
            correctIndex: 1,
            explanation:
              "Two of the grassroots courses must be in person, and one of those must be the 11v11. You do NOT need to have played professionally, many excellent coaches never did.",
            sourceLessonSlug: "football-coaching-badges",
          },
          {
            prompt: "What is the most common mistake in youth coaching sessions?",
            options: [
              "Too much small-sided play",
              "Drills where twelve children queue and one touches the ball, a session with a queue in it needs redesigning",
              "Letting children play without instruction",
              "Coaching decisions rather than outcomes",
            ],
            correctIndex: 1,
            explanation:
              "Maximise touches. Children learn football by playing football, and a session that is 80% talking is a session about you.",
            sourceLessonSlug: "football-coaching-badges",
          },
          {
            prompt: "What percentage of US high school MEN'S soccer players go on to play NCAA Division I soccer?",
            options: ["1.4%", "5.9%", "15%", "0.01%"],
            correctIndex: 0,
            explanation:
              "1.4% reach Division I; 5.9% reach the NCAA at any division (NCAA Research, 2026, from 2024-25 data). Roughly 1 in 71 high school boys reaches DI, and DI is not professional football, it is the step before people begin thinking about it.",
            sourceLessonSlug: "football-the-honest-odds",
          },
          {
            prompt: "What percentage of US high school WOMEN'S soccer players play NCAA soccer at any division?",
            options: ["2.8%", "7.9%", "25%", "0.5%"],
            correctIndex: 1,
            explanation:
              "7.9% across all NCAA divisions, and 2.8% at Division I, from 393,048 high school participants to 31,200 NCAA participants (NCAA Research, 2026).",
            sourceLessonSlug: "football-the-honest-odds",
          },
          {
            prompt: "Why does the NCAA publish no high-school-to-professional probability for soccer?",
            options: [
              "Because the figure is too depressing to publish",
              "Because its pro tables are built from DRAFT data, men's soccer is excluded (entry isn't funnelled through one draft) and the NWSL has discontinued its draft entirely",
              "Because soccer is not an NCAA sport",
              "Because FIFA prohibits it",
            ],
            correctIndex: 1,
            explanation:
              "No draft, no draft data, no probability table. So anyone quoting you a precise 'X% turn pro' figure for soccer is quoting a number the sport's own major statistical authority declines to publish. Ask them where it came from.",
            sourceLessonSlug: "football-the-honest-odds",
          },
          {
            prompt: "What is the honest conclusion of the odds lesson?",
            options: [
              "Give up football and study something else",
              "Play, take the college route for the DEGREE, build the other plan alongside rather than after, and point yourself at the industry rather than only the pitch",
              "Move abroad at 16 to join an academy",
              "Focus entirely on football and drop everything else",
            ],
            correctIndex: 1,
            explanation:
              "The odds are an argument against BETTING YOUR FUTURE on football, not against playing it. The 16-year-old who is released with nothing else is the most predictable tragedy in the sport, and it is entirely preventable.",
            sourceLessonSlug: "football-the-honest-odds",
          },
          {
            prompt: "Why is a futsal league an unusually good first business for a young person?",
            options: [
              "Because it requires no organisation at all",
              "Indoors (weather-proof revenue), uses spaces that already exist and sit empty, needs only ten players to fill a fixture, and short matches let you run many games per evening on one court",
              "Because futsal courts are free everywhere",
              "Because it needs no referee",
            ],
            correctIndex: 1,
            explanation:
              "The test is simple: teams × fee versus court hire + balls + referee. Downside is one night's court hire, and you learn immediately whether it is a business or a hobby.",
            sourceLessonSlug: "football-starting-a-club-or-league",
          },
          {
            prompt: "What most often kills an amateur football club or league?",
            options: [
              "Poor quality of football",
              "Money with nobody accountable for it, unreliability (no fixture list, no table, late starts), and no insurance",
              "Too many players wanting to join",
              "Playing on grass rather than turf",
            ],
            correctIndex: 1,
            explanation:
              "Amateur sport rarely fails because the football is bad. It fails because nobody knows when they are playing, and because somebody got hurt and there was no cover. Get a treasurer and a written record from day one.",
            sourceLessonSlug: "football-starting-a-club-or-league",
          },
          {
            prompt: "You are 17, want to work in football analysis, and have no contacts. What is the entry test?",
            options: [
              "A degree in sports science",
              "A PORTFOLIO, not a CV, analyse a match, write it up, publish it, and do it again",
              "Having played at academy level",
              "A FIFA agent licence",
            ],
            correctIndex: 1,
            explanation:
              "Do it fifty times and you have something almost nobody else applying has. The same logic applies to scouting (write reports on your own local league) and to football media, where the barrier to producing it is zero.",
            sourceLessonSlug: "football-jobs-around-the-game",
          },
          {
            prompt: "What dominates the cost base of a lower-league club, and how can you verify it yourself?",
            options: [
              "Stadium maintenance; you cannot verify it, as club finances are secret",
              "Player and staff WAGES, and in England clubs are companies that file accounts publicly, so you can read a real club's revenue and wage bill for free at Companies House",
              "Travel costs; verified through the league's website",
              "Broadcast production; verified via FIFA",
            ],
            correctIndex: 1,
            explanation:
              "Wages dominate, and the structural trap is that more revenue requires promotion while promotion requires more wages, so clubs overspend and financial distress is common. And you can PROVE all of it from published accounts, which is the skill this whole course has been teaching.",
            sourceLessonSlug: "football-jobs-around-the-game",
          },
        ],
      },
    },
  ],
};
