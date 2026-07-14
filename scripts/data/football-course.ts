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
    "A complete, cited football course for high school students — the game most of the world calls football and the United States calls soccer. How to actually play it (first touch, passing, dribbling, finishing, defending, goalkeeping); how to think about it (formations, possession, pressing, transitions, set pieces); the 17 Laws and who really writes them (The IFAB, not FIFA); the history, told honestly — from ball games that long predate England, to the 1863 codification, to the Football Association's 50-year ban on women's football; how the leagues and governing bodies actually fit together worldwide; the money, the labour, and the contested human cost; and the honest, concrete opportunities for amateurs and entrepreneurs — refereeing, coaching badges, running a club, and the jobs that actually exist around a game almost nobody makes a living playing.",
  lessons: [
    // ────────────────── SECTION 1 · THE GAME, THE NAME, AND THE PITCH ──────────────────
    {
      slug: "football-the-name-and-the-game",
      title: "1 · What the game is, and what to call it",
      section: "Section 1 · The game, the name, and the pitch",
      body: `Two teams of eleven. One ball. Ninety minutes. You may not use your hands. Whoever puts the ball in the other team's goal more times wins.

That is the whole sport. Everything else in this course — every Law, every tactic, every billion-dollar transfer — is detail hanging off those four sentences.

**We are going to call it football.** That is what it is called almost everywhere on Earth, it is what the people who wrote the rules called it, and it is the name in the official rulebook: the *Laws of the Game* are published for **football** (International Football Association Board [IFAB], 2026).

**One acknowledgement, and then we move on.** In the United States, this game is called **soccer**. If that is the word you grew up with, you were not wrong — you were using an *English* word.

**And here is the part almost everyone gets backwards.** "Soccer" is not an American invention. It is a **British** one. When the Football Association codified this game in 1863, its version was called **association football**, to distinguish it from **rugby football**. British students — Oxford in particular — had a slang habit of chopping a word down and sticking "-er" on the end: breakfast became *brekker*, rugby became *rugger*. Do that to *assoc.* (the abbreviation of *association*) and you get **socca**, **socker**, and finally **soccer** (Online Etymology Dictionary, n.d.). The earliest spellings are attested from the 1880s and 1890s.

You will often hear that a specific man — the England captain Charles Wreford-Brown — invented the word at Oxford. **That story is not documented.** The Online Etymology Dictionary's own entry puts it plainly: "On whose lips association first changed into 'soccer' history is silent" (Online Etymology Dictionary, n.d.). This course is not going to hand you a tidy fake. The word came out of British university slang; **we do not know who said it first.**

**Then Britain dropped it.** The economist Stefan Szymanski, who studied how often the word actually appeared in print, found that "soccer" was used comfortably in Britain for most of the twentieth century — and that its use in British publications **fell sharply from around 1980**, as the word came to be heard as an Americanism (University of Michigan, 2014). So: Britain coined it, Britain used it, Britain abandoned it, and then Britain got annoyed at Americans for keeping it.

**And one more thing, said once, clearly: this is not American football.** Different sport, different ball, different rules, different governing body, no relation beyond the word. If you came here looking for helmets and first downs, this is the wrong course. From here on, "football" means the game with the round ball.

**Why this course exists.** Because football is the most-played, most-watched game on the planet, and because the honest version of it — who governs it, who profits from it, who has been excluded from it, and where the actual jobs are — is far more interesting than the poster version.

:::reveal "Soccer" is an American word for football — true or false, and why? ||| False. It is a **British** coinage: Oxford-style "-er" slang applied to *assoc.*, the abbreviation of **association** football (as opposed to **rugby** football), attested from the 1880s-90s. Britain used it for most of the twentieth century and only dropped it from around 1980, once it started sounding American.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en
- Online Etymology Dictionary. (n.d.). *Soccer*. Retrieved July 2026, from https://www.etymonline.com/word/soccer
- University of Michigan. (2014, June 4). *Despite its British origins, Americans get a bad rap for using the word 'soccer'*. Phys.org. https://phys.org/news/2014-06-british-americans-bad-rap-word.html`,
    },
    {
      slug: "football-the-pitch-and-the-ball",
      title: "2 · The pitch and the ball — and why no two pitches are the same size",
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

**The fixed measurements — the ones that never move** (IFAB, 2026, Law 1):

| Feature | Measurement |
| --- | --- |
| Distance between the inside of the goalposts | 7.32 m (8 yds) |
| Height of the crossbar from the ground | 2.44 m (8 ft) |
| Penalty area, from the goal line | 16.5 m (18 yds) |
| Goal area ("six-yard box"), from the goal line | 5.5 m (6 yds) |
| Penalty mark, from the goal line | 11 m (12 yds) |
| Centre circle radius (and the distance opponents must retreat at most restarts) | 9.15 m (10 yds) |

That last number — **9.15 m / 10 yds** — is worth memorising. It is the "keep back" distance at kick-offs, corners, and free kicks, and it is the radius of the centre circle. The circle is not decoration; it is a ruler.

**One more line in Law 1 that decides arguments:** "Measurements are from the **outside** of the lines as the lines are **part of the area they enclose**" (IFAB, 2026, Law 1). So the touchline is part of the field. A ball resting on the line is *in*. A foul committed on the penalty-area line is committed **inside** the penalty area — and that is a penalty kick, not a free kick. People lose games over this.

**The ball.** **Law 2** specifies it (IFAB, 2026, Law 2):

| Property | Specification |
| --- | --- |
| Shape | Spherical |
| Circumference | 68-70 cm (27-28 in) |
| Weight at the start of the match | 410-450 g (14-16 oz) |
| Pressure at sea level | 0.6-1.1 atmosphere |

That is a "size 5" ball, the adult ball. Younger age groups use size 4 and size 3 — smaller and lighter, so a twelve-year-old can actually strike and control it. **The Law itself does not name "size 5"**; it gives the measurements, and the industry names the sizes. That distinction matters and it is the first example of a pattern you will see all course long: **know what the Law actually says, and know what is convention dressed up as law.**

:::reveal A defender pulls an attacker's shirt while standing exactly ON the painted line of the penalty area. Free kick or penalty? ||| **Penalty.** Law 1 states that the lines are part of the area they enclose — so the penalty-area line IS the penalty area. The offence happened inside it.

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
          answer: "9.15 m (10 yds) — the same number as the radius of the centre circle and the penalty arc.",
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

Everything beyond "one goalkeeper" is **not law — it is choice.** The Laws do not name a single position. No Law says "striker." Teams arrange the other ten however they like, and the arrangement is called a **formation** (Section 4). But the jobs those ten do have settled into recognisable families.

**The goalkeeper.** The only player who may handle the ball — and **only inside their own penalty area** (IFAB, 2026, Law 12). Outside it, the goalkeeper is subject to exactly the same handball restrictions as anyone else. A modern goalkeeper is also expected to be the team's first passer and to sweep up behind a high defensive line.

**Defenders (the back line).**
- **Centre-backs** (usually two, sometimes three). Defend the middle, win headers, start attacks with passes out from the back.
- **Full-backs** (left and right). Defend the flanks and, in most modern systems, provide the team's width when attacking. Physically, the hardest running job on the pitch.
- **Wing-backs.** A full-back in a system with three centre-backs — expected to cover the entire touchline, defending and attacking.

**Midfielders (the engine room).**
- **Defensive midfielder** (the "6", the "pivot", the "holding" midfielder). Sits in front of the defence, screens the space, recycles possession, and is usually the first person to foul someone to stop a counter-attack.
- **Central midfielder** (the "8"). Box-to-box. Links defence and attack, arrives late in the penalty area.
- **Attacking midfielder** (the "10"). Operates between the opponent's midfield and defence — the hardest space in football to mark.
- **Wingers.** Attack from the flanks, either to cross or to cut inside and shoot.

**Forwards.**
- **Centre-forward / striker (the "9")**. Scores, holds the ball up with their back to goal, and — in the modern game — is the first defender, because pressing starts at the front.
- **False nine.** A centre-forward who deliberately drops deep, dragging a centre-back out of position and opening a hole for a midfielder to run into.

**About those numbers.** "The 6," "the 8," "the 10," "the 9" come from the old habit of assigning shirt numbers 1-11 by position. The **shirt numbers are gone** — squads now number into the nineties — but **the positional numbers survive as vocabulary**, and coaches, scouts and commentators still use them constantly. If someone says a team "has no proper 6," they mean it has no holding midfielder.

**Substitutes.** Law 3 says a team may use substitutes **as the competition rules permit** — this is one of many places where the Law hands the decision to the competition. In senior "A" international friendlies, the 2026/27 Laws raised the number of substitutes that may be used to **eight**, and allowed the two teams to agree on more, up to eleven (IFAB, 2026, Law 3). A World Cup match, a Premier League match, and your high school match may all use different substitution rules — **and all of them are legal.**

:::reveal A team has had three players sent off and is down to eight. Can the match continue? What if a fourth is sent off? ||| Yes — eight is legal. Law 3 says a match may not start or continue if a team has **fewer than seven** players. A fourth sending-off would take the team to seven, which is still legal; a **fifth** takes them to six and the match must be abandoned.

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
            "One — the goalkeeper. Every other position (centre-back, the 6, the 10, the winger) is coaching convention, not law.",
        },
      ],
    },
    {
      slug: "football-how-a-match-runs",
      title: "4 · How a match actually runs: 90 minutes, added time, and what happens at 0-0",
      section: "Section 1 · The game, the name, and the pitch",
      body: `**Law 7 (The Duration of the Match)**: a match lasts **two equal halves of 45 minutes**, with a half-time interval **not exceeding 15 minutes** (IFAB, 2026, Law 7).

**But the clock never stops** — and this is the single biggest difference between football and almost every American sport. There are no timeouts. The referee does not stop the clock for a throw-in, a substitution, or an injury. Instead, **Law 7 requires the referee to make an "allowance for time lost"** in each half, for substitutions, injuries and treatment, time-wasting, disciplinary sanctions, drinks breaks, VAR delays, and goal celebrations (IFAB, 2026, Law 7).

That allowance is **added time** (also called stoppage time or injury time), and the amount is **the referee's judgement**. The fourth official holds up a board showing the *minimum* to be played. The referee can play more. **The referee, not the board, ends the half.**

The 2026/27 Laws pushed further against time-wasting: the "countdown" principle — where a visible countdown pressures a player to restart play within a set time — was **extended to throw-ins and goal kicks** (IFAB, 2026, Law changes 2026/27). Football is quietly at war with the stalling that a running clock invites.

**The flow of a match.**

1. **Kick-off** (Law 8). A coin toss decides who kicks off and which goal each team attacks. The ball is in play once it is kicked and *clearly moves* — it does **not** have to go forward. A goal may be scored **directly from kick-off**.
2. **Ball in and out of play** (Law 9). The ball is out only when it has **wholly** crossed the goal line or touchline, on the ground or in the air. **Wholly** is doing enormous work in that sentence: a ball that is 99% over the line is still in.
3. **Restarts.** Out over the touchline → **throw-in** to the other team. Out over the goal line, last touched by an attacker → **goal kick**. Out over the goal line, last touched by a defender → **corner kick**.
4. **Goal.** The ball must **wholly cross the goal line** between the posts and under the bar. Same word again: *wholly*. This is why goal-line technology exists.
5. **Full time.** The referee's whistle.

**And if the scores are level?** Here is the part people assume is a Law and is not. **Law 10 (Determining the Outcome of a Match)** says a match **may end as a draw** — and in a league, it usually does. Extra time and penalties are **not automatic**. They exist only if the **competition rules** say so (IFAB, 2026, Law 10).

When a competition does need a winner, Law 10 gives the tools:
- **Extra time** — two further equal periods, not exceeding 15 minutes each.
- **Penalties (the penalty shoot-out)** — taken from the penalty mark. Law 10 calls this procedure "kicks from the penalty mark," and it is a **tie-break procedure, not part of the match**. Goals scored in a shoot-out do not count in the score.

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
              "It is a British coinage from 'assoc.' — association football, as distinct from rugby football — with the Oxford '-er' slang suffix, the same habit that produced 'rugger' and 'brekker'. Early spellings: socca, socker, soccer.",
            sourceLessonSlug: "football-the-name-and-the-game",
          },
          {
            prompt: "Who is documented as having coined the word 'soccer'?",
            options: [
              "Charles Wreford-Brown, the England captain",
              "Ebenezer Morley, founder of the FA",
              "Nobody — the coiner is unknown, and the Wreford-Brown story is undocumented",
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
              "Exactly 105 m — there is one legal size",
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
              "Law 1: 'the lines are part of the area they enclose.' The penalty-area line IS the penalty area, so the offence occurred inside it — penalty kick.",
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
              "Law 2 gives measurements, not marketing names. 'Size 5' is the industry term for a ball meeting those specifications — the Law never uses it. Knowing law from convention is the habit this course is training.",
            sourceLessonSlug: "football-the-pitch-and-the-ball",
          },
          {
            prompt: "How many positions do the Laws of the Game define?",
            options: ["Eleven", "Four — defender, midfielder, forward, goalkeeper", "One — the goalkeeper", "None"],
            correctIndex: 2,
            explanation:
              "Law 3 requires that one of the eleven is the goalkeeper. Every other role — centre-back, the 6, the 10, the winger — is coaching convention, and formations are choices, not law.",
            sourceLessonSlug: "football-positions-and-shape",
          },
          {
            prompt: "A team has had four players sent off and is down to seven. May the match continue?",
            options: [
              "No — a team must have at least eight",
              "Yes — the minimum is seven",
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
              "No — the board is binding",
              "Yes — the board shows the minimum; Law 7 makes the allowance for time lost the referee's judgement",
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
              "Law 9: the ball is out only when it has wholly crossed the touchline or goal line. A ball 99% over the line is still in — which is exactly why goal-line technology was invented.",
            sourceLessonSlug: "football-how-a-match-runs",
          },
          {
            prompt: "The scores are level at full time in a league match. What do the Laws require?",
            options: [
              "Extra time, then penalties",
              "Nothing — Law 10 allows a match to end as a draw; extra time and penalties exist only if COMPETITION rules require a winner",
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
              "Law 8 requires only that the ball is kicked and clearly moves — in any direction — and a goal may be scored directly from the kick-off. The 'must go forward' rule was removed years ago and people still quote it.",
            sourceLessonSlug: "football-how-a-match-runs",
          },
        ],
      },
    },

    // ────────────────── SECTION 2 · HOW TO PLAY: THE SKILLS ──────────────────
    {
      slug: "football-first-touch-and-passing",
      title: "5 · First touch and passing — the two skills that decide everything else",
      section: "Section 2 · How to play: the skills",
      body: `**Read this before any other skills lesson.** The Laws of the Game say **nothing** about technique. There is no legal way to pass a ball. Law 12 tells you what you may not do to an opponent, and Law 11 tells you where you may not stand — but no Law has ever specified a grip, a stance, or a body shape (IFAB, 2026). Everything in this section is **coaching convention**: accumulated, tested, widely agreed — and still convention. A course that dresses coaching preference up as law is lying to you, so we will keep the line visible.

With that said, here is the convention, and it is very good convention.

**First touch is the skill.** Not passing. Not shooting. **First touch** — what happens to the ball in the moment it arrives at you. Everything downstream depends on it, because a bad first touch means the next thing you do is a rescue, and a good first touch means the next thing you do is a choice.

The whole point of a first touch is to **buy yourself time and space**. Three ideas do almost all the work:

1. **Look before it comes.** The single biggest difference between a good young player and an average one is not the feet, it is the **head** — checking your shoulders *before* the ball arrives so you already know who is behind you. If your first look at the pitch happens after the ball reaches your foot, you are already late.
2. **Cushion, don't block.** Meet the ball with a relaxed surface that gives slightly as it arrives, so the ball dies close. A rigid foot makes the ball bounce away from you.
3. **Touch it where you want to go next.** This is the whole game. Do not stop the ball dead in front of you and *then* decide. Take your first touch **into the space you have already chosen** — away from the nearest defender, into the direction you intend to attack. This is called an **open** or **directional** first touch, and it turns one action into two.

**Body shape ("open up").** Stand side-on, so you can see the ball *and* the pitch behind you at the same time. A player who receives square-on, facing their own goal, can only pass backwards. A player who has opened their body can go forwards, sideways, or back. Coaches will nag you about this constantly and they are right.

**Passing: the surfaces.**

| Surface | What it does | When |
| --- | --- | --- |
| **Inside of the foot** | Accurate, flat, low power | The default. The vast majority of passes in any match. |
| **Laces (instep)** | Power and distance, driven flat | Long switches of play, hard passes into a striker |
| **Outside of the foot** | Disguise, bend away from a defender | Quick, no-backlift passes; threading a ball round a marker |
| **Chipped / lofted** | Height over a defender or a line | Over a compact defence; over a pressing line to a runner |

**Weight of pass.** A pass has a *speed*, and choosing it is a decision as real as choosing a target. Too soft and a defender gets there first. Too hard and your team-mate cannot control it. The rule of thumb: **pass to the foot that keeps your team-mate facing forwards**, and **pass hard into pressure, soft into space**. If your team-mate is being closed down, a firm pass gives them time; a firm pass into empty space just gives the ball away.

**Both feet.** You do not need a *great* weak foot. You need a **usable** one. A player who can only receive and pass on one side is a player whose direction any defender can predict — and defenders at every level above under-12 do predict it. Fifteen minutes of weak-foot passing against a wall, three times a week, is genuinely the highest-return practice in the sport.

**A drill you can do alone.** A wall, a ball, and a spot on the ground two steps from the wall. Pass into the wall, take an **open** first touch into a target area to your left, pass again. Ten in a row. Then to the right. Then weak foot. That is the whole game compressed into a driveway.

:::reveal Your team-mate is about to be closed down hard by a defender. Should you pass the ball to them softly or firmly, and why? ||| **Firmly.** A hard pass arrives sooner and buys your team-mate the time the defender is trying to take away. Soft passes belong in **space**, not into pressure — a soft ball into a pressured player is an invitation to be tackled.

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
2. **Move them.** A feint, a body swerve, a step-over, a drop of the shoulder — the *content* of the trick barely matters. What matters is that you make the defender **shift their weight onto one foot**.
3. **Go the other way, and go fast.** The trick creates the moment; **acceleration** is what actually beats them. A gorgeous step-over followed by a jog is a tackle waiting to happen.

That is it. Every fancy skill on the internet is a variation on "make them lean, then leave."

**Where you should dribble — and where you should not.** This is the part coaches wish more players understood:

| Area of the pitch | Should you take people on? |
| --- | --- |
| **Your own defensive third** | **Almost never.** Losing the ball here creates a shot on your goal. Pass. |
| **The middle third** | Rarely, and only to break a press or escape pressure. |
| **The attacking third, especially wide** | **Yes. Constantly.** The worst outcome is a throw-in; the best is a goal. |

The risk of dribbling is losing the ball. The cost of losing the ball is not the same everywhere on the pitch. **Take your risks where the punishment is small and the reward is enormous.** That is not a football principle; it is a general principle about risk, and football is a very good place to learn it.

**Shielding.** You will not always be able to go forward. Putting your body between the defender and the ball — arm out for balance (careful: Law 12 makes it an offence to *push* or *hold*), ball on the far foot, back to the opponent — is a completely legitimate way to protect possession until help arrives. It is not glamorous. It wins matches.

:::reveal Why is a step-over useless without acceleration? ||| Because the trick doesn't beat the defender — it only makes them **commit their weight to one side**. What actually beats them is the **explosive change of direction and speed** that follows. A skill move followed by a jog just gives the defender time to recover and tackle.

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
            "Take them on in the attacking third, especially wide — worst case is a throw-in. Almost never in your own defensive third, where losing the ball creates a shot on your own goal.",
        },
      ],
    },
    {
      slug: "football-shooting-and-finishing",
      title: "7 · Shooting and finishing — and why the best chance is a boring one",
      section: "Section 2 · How to play: the skills",
      body: `**The technique.**

A **driven shot** — the standard shot on goal — is struck with the **laces**, not the toe and not the inside of the foot.

| Element | What to do | Why |
| --- | --- | --- |
| **Non-kicking foot** | Planted **beside** the ball, pointing at your target | It aims the shot. Plant it behind the ball and you lean back and skie it. |
| **Body** | Leaning **over** the ball, chest forward | Keeps the shot down. Leaning back sends it over the bar. |
| **Contact** | Laces, through the **middle or upper half** of the ball | Below the middle lifts it; through the middle drives it. |
| **Follow-through** | Towards the target, landing on the kicking foot | Power comes from the swing, not from tensing up. |

**Placement beats power.** A shot into the bottom corner from twelve yards, hit at 70% power and on target, beats a rocket into row Z every single time. The most common finishing error at every amateur level is **hitting the ball as hard as possible**, which destroys accuracy and, because leaning back generates power, usually sends the ball over the bar.

**The one-word coaching cue that works:** *low*. Low shots are harder to save (the goalkeeper has to get down, which is slower than reaching up), they can deflect in, and if they miss they can still be rebounds. High shots that miss are goal kicks.

**Now the important part, and it is not technique.**

**The best chance in football is a boring one.** The romantic shot — the 30-yard screamer — is the *least* likely to go in. Goals overwhelmingly come from close range and from central positions, because two things determine how likely a shot is to score:

1. **Distance** — how far you are from goal.
2. **Angle** — how much of the goal you can actually see.

This is the intuition behind **expected goals (xG)**, the modelling metric now used across professional football: every shot is assigned a probability of scoring based on where it was taken from and how it was taken. You do not need the maths. You need the conclusion, and the conclusion is blunt: **a tap-in from six yards is worth more than a spectacular effort from thirty, every time.** A striker's real job is not to shoot brilliantly. It is to **arrive in the places where boring chances happen.**

That reframes what "being a good finisher" means. It is:

- **Movement, not marksmanship.** Losing your marker in the six-yard box. Attacking the near post. Gambling on a rebound while everyone else admires the save.
- **Taking the first-time option.** A chance that needs a touch to set up is a chance that gives the defender a second to block.
- **Hitting the target.** A shot on target can be saved, deflected, spilled, or scored. A shot off target can only be a goal kick.

**Heading.** A header is a shot or a pass made with the **forehead** — the flat, hard part above the eyebrows, never the top of the head and never the face. You attack the ball; you do not let it hit you. And **for goal, you head down** — a downward header bounces awkwardly in front of the goalkeeper and is far harder to save.

**A necessary note.** Concerns about repeated heading and long-term brain health have changed the game for young players, and several national federations have introduced **age-based restrictions or limits on deliberate heading in youth football and training**. Your league's rules on this may differ from the professional game. **Check your own competition's rules — do not assume.** This is a live area where the governing bodies are still moving.

:::reveal You are through on goal, twelve yards out, with the goalkeeper advancing. What is the single most common mistake, and what should you do instead? ||| Trying to **blast it**. Maximum power destroys accuracy and makes you lean back, which lifts the ball over the bar. Instead: **pick a corner, keep your body over the ball, and pass it into the net — low, and on target.** A saved shot can still be a rebound; a shot over the bar is a goal kick.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "What two factors most determine whether a shot becomes a goal?",
          answer:
            "Distance from goal and angle (how much of the goal you can see). This is the intuition behind expected goals (xG) — and it means a boring six-yard tap-in is worth far more than a spectacular 30-yard effort.",
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
      title: "8 · Defending — and what Law 12 actually lets you do",
      section: "Section 2 · How to play: the skills",
      body: `Defending is the part of football that is most badly taught, because people think it means **tackling**. It does not. **The best defenders tackle relatively rarely.** Defending means denying the attacker the thing they want, for long enough that they run out of options.

**What the Law actually permits.** This matters, because half of amateur defending is illegal and the other half is unnecessarily timid. **Law 12** awards a direct free kick if a player **charges, jumps at, kicks, pushes, strikes, tackles or challenges, or trips** an opponent in a manner the referee considers **careless, reckless, or using excessive force** — and it defines all three (IFAB, 2026, Law 12):

| Term | The Law's definition | Consequence |
| --- | --- | --- |
| **Careless** | A lack of attention or consideration; acting without precaution | Free kick. **No card.** |
| **Reckless** | Acting with **disregard to the danger to, or consequences for**, an opponent | Free kick + **yellow card** |
| **Using excessive force** | Exceeding the necessary use of force **and/or endangering the safety** of an opponent | Free kick + **red card** |

Read that table again, because it is the whole disciplinary structure of football in three rows, and almost nobody in the stands knows it. The difference between "no card," "booked," and "sent off" for the same physical act is **how much danger the referee judges you accepted.**

Note also: Law 12 says that **if an offence involves contact, it is penalised by a direct free kick**. And a fair, well-timed tackle that wins the ball cleanly is **not** an offence at all — football is a contact sport, and the Law says so.

**The four jobs of a defender, in order.**

1. **Press / close the space.** Get to the attacker *fast* while the ball is travelling to them — then **slow down** in the last few steps. Arriving at full sprint means you get skinned; arriving under control means you get to defend.
2. **Set your body.** Stand **side-on**, not square. Side-on lets you turn and run with them; square means you have to pivot, and you will lose. Knees bent, weight on the balls of your feet.
3. **Show them somewhere.** You cannot cover both sides. So **choose** — angle your body so the only way past you is the way you *want* them to go: onto their weak foot, towards the touchline, away from goal, into a team-mate. A defender who "shows the winger outside" has already half-won the duel. The touchline is a defender's best team-mate; it does half the tackling.
4. **Be patient.** Do not dive in. The moment you commit, you are beaten if you miss. **Wait for the mistake** — a heavy touch, a head-down moment, a pass into your feet. Then take the ball.

**Delay, delay, delay.** If you are the last defender and a counter-attack is coming, your job is **not** to win the ball. It is to **slow it down** until your team-mates get back. Retreat, stay on your feet, force them wide, and buy seconds. Winning the ball would be lovely. Not being beaten is the job.

**The slide tackle** is a last resort, not a default. You are committing your whole body to one attempt; if you miss, you are on the ground and out of the play. Slide when it is the only option, when you can reach the ball, and when you are not endangering anyone.

**Defending as a unit.** Individual defending is a small part of it. The rest — pressing triggers, the offside trap, staying compact, forcing play into a trap — is **team** defending, and Section 4 covers it.

:::reveal A defender catches an attacker with a challenge that flies in at speed and endangers the opponent's safety. Under Law 12, is that a yellow or a red, and what is the exact word the Law uses? ||| **Red.** Law 12 defines **"using excessive force"** as exceeding the necessary use of force *and/or endangering the safety of an opponent* — and the player **must be sent off**. "Reckless" (disregard for danger or consequences) is the yellow-card level.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Law 12's three levels of a foul challenge — name them and their consequences.",
          answer:
            "Careless (lack of attention/precaution) = free kick, no card. Reckless (disregard for danger to or consequences for the opponent) = yellow card. Using excessive force (exceeds necessary force and/or endangers safety) = red card.",
        },
        {
          prompt: "As the last defender facing a counter-attack, what is your actual job?",
          answer:
            "To DELAY — stay on your feet, retreat, force them wide, and buy seconds for team-mates to recover. Winning the ball is a bonus; not being beaten is the job.",
        },
      ],
    },
    {
      slug: "football-goalkeeping",
      title: "9 · Goalkeeping — the one player with different rules",
      section: "Section 2 · How to play: the skills",
      body: `The goalkeeper is the only position the Laws actually name (IFAB, 2026, Law 3), and the only player with a different rulebook. Learn the rules first; the technique follows from them.

**The handling rules, exactly as Law 12 has them** (IFAB, 2026, Law 12):

- The goalkeeper may handle the ball **only inside their own penalty area**. Outside it, "the goalkeeper has the same restrictions on handling the ball as any other player."
- An **indirect free kick** is awarded if the goalkeeper, inside their own penalty area, **touches the ball with the hand/arm after releasing it** and before it has touched another player.
- An **indirect free kick** is awarded if the goalkeeper handles the ball after it has been **deliberately kicked to them by a team-mate** — the rule everyone calls the **back-pass rule**. Two things people get wrong about it:
  - It applies to a **deliberate kick** from a team-mate. A ball that comes off a team-mate's **head, chest or knee** may be handled — *unless* the team-mate used a **deliberate trick** to circumvent the Law, in which case the offence is committed and the **team-mate** is penalised (and Law 12 says the goalkeeper is penalised if responsible for initiating the trick).
  - A ball **accidentally deflected** off a team-mate is not a deliberate kick, and the goalkeeper may handle it.
- If a goalkeeper handles inside their area when not permitted to, the restart is an **indirect free kick** and there is **no disciplinary sanction** — no card, in the ordinary case.

**Handling is a small part of the modern job.** Today's goalkeeper is expected to be:

**1. A shot-stopper.**
- **The set position.** Just before the shot: feet a little wider than the shoulders, weight forward on the balls of the feet, hands up in front, knees soft. You cannot dive from a standing start with your heels down and your hands by your hips.
- **The ready-hop.** Small hop into the set position **as the striker plants their standing foot**. It loads your legs at exactly the moment the shot comes.
- **Hands.** For a high ball, the **W** — thumbs almost touching behind the ball, fingers spread. For a low ball, get the **body behind it** so that if the hands fail, the body still stops it.
- **Low shots are the hard ones.** Getting *down* takes longer than reaching *up*, which is precisely why strikers are coached to shoot low.

**2. A positioner.** Most saves are made before the shot, by standing in the right place. **Narrow the angle**: move off your line towards the ball so you cut down how much of the goal the striker can see. A goalkeeper glued to the line makes every shot look spectacular and lets in easy goals.

**3. A sweeper.** With a high defensive line, the space behind the defence is yours. Read the through-ball, come out, clear it — with your **feet** if you are outside the area, because outside the area you may not use your hands, and a goalkeeper who forgets that gets sent off for handling to deny an obvious goal-scoring opportunity (Law 12).

**4. A first passer.** Modern goalkeepers start attacks. Short passes to the centre-backs, longer passes into midfield. This is genuinely dangerous — mistakes here become goals — and it is why goalkeepers are now selected partly on their feet.

**5. The organiser.** The goalkeeper is the only player who can see the entire pitch and every team-mate at once. **Talk.** Set the wall. Push the line up. Call the offside trap. Communication is the most under-taught goalkeeping skill and the cheapest one to get good at.

**One safety note.** A goalkeeper in possession of the ball with their hands **cannot be challenged** — Law 12 awards an indirect free kick against a player who prevents the goalkeeper from releasing the ball from their hands.

:::reveal Your centre-back, under pressure, deliberately chests the ball back to you inside your penalty area. May you pick it up? ||| **Yes.** Law 12's restriction applies to a ball **deliberately kicked** to the goalkeeper by a team-mate. A **chest**, head or knee pass is legal to handle — **unless** it was a **deliberate trick** to circumvent the Law, in which case the offence stands and the team-mate is penalised.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "What is the restart if a goalkeeper illegally handles the ball inside their own penalty area?",
          answer:
            "An indirect free kick, with NO disciplinary sanction in the ordinary case (Law 12). Not a penalty — the offence happened in their own area, and Law 12 specifies an indirect free kick.",
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
              "Nothing — technique is entirely coaching convention",
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
              "Stopping the ball dead and then deciding gives the defender a free second. A directional first touch already moves you where you intend to go — it buys time and space in a single action.",
            sourceLessonSlug: "football-first-touch-and-passing",
          },
          {
            prompt: "Your team-mate is about to be closed down hard. How should you weight the pass?",
            options: [
              "Softly, so it is easy to control",
              "Firmly — a hard pass arrives sooner and buys them the time the defender is trying to take",
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
              "Because the trick only makes the defender commit their weight — the change of pace is what actually beats them",
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
              "In your own defensive third — it draws pressure away",
              "In the attacking third, especially wide — the worst outcome is a throw-in, the best is a goal",
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
              "Beside the ball, pointing at the target — planting behind it makes you lean back and lift the shot",
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
              "Careless — a lack of attention or consideration",
              "Reckless — disregard for the danger to or consequences for an opponent",
              "Using excessive force — exceeding necessary force and/or endangering the safety of an opponent",
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
              "Angling your body so the only route past you is the one you want them to take — weak foot, touchline, away from goal",
              "Standing square so you can cover both sides equally",
              "Diving in to force a mistake",
            ],
            correctIndex: 1,
            explanation:
              "You cannot cover both sides, so choose one. The touchline is a defender's best team-mate — it does half the tackling for you.",
            sourceLessonSlug: "football-defending-and-winning-the-ball",
          },
          {
            prompt: "You are the last defender and a counter-attack is coming at you. What is your job?",
            options: [
              "Win the ball immediately with a slide tackle",
              "Delay — stay on your feet, retreat, force them wide, buy seconds for team-mates to recover",
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
              "Play continues — the back-pass rule was abolished",
            ],
            correctIndex: 1,
            explanation:
              "Law 12: the goalkeeper may not handle a ball deliberately kicked to them by a team-mate. The restart is an INDIRECT free kick, and there is normally no card.",
            sourceLessonSlug: "football-goalkeeping",
          },
          {
            prompt: "A team-mate deliberately CHESTS the ball back to the goalkeeper. May the goalkeeper handle it?",
            options: [
              "No — any deliberate pass back may not be handled",
              "Yes — the restriction applies to a deliberate KICK; a chest, head or knee pass may be handled unless it was a deliberate trick to circumvent the Law",
              "Only if the goalkeeper is outside the six-yard box",
              "Only in youth football",
            ],
            correctIndex: 1,
            explanation:
              "This is the most commonly misstated goalkeeping rule. Law 12 restricts handling a deliberate KICK from a team-mate. Head/chest/knee is legal to handle — but a DELIBERATE TRICK to circumvent the Law is an offence, and the team-mate is penalised.",
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
              "Most saves are made before the shot, by standing in the right place. A keeper glued to the line makes every save look spectacular — and concedes easy goals.",
            sourceLessonSlug: "football-goalkeeping",
          },
        ],
      },
    },

    // ────────────────── SECTION 3 · THE LAWS, AND WHO WRITES THEM ──────────────────
    {
      slug: "football-who-writes-the-laws",
      title: "10 · Who writes the Laws — and why it is not FIFA",
      section: "Section 3 · The Laws, and who writes them",
      body: `**Start with the thing almost every football article, textbook and school lesson gets wrong.**

> **FIFA does not write the Laws of the Game. The IFAB does.**

If you learn one fact from this course, make it that one. It is the single most common error in football education, and once you can spot it you will start noticing it everywhere — in newspapers, in commentary, in other people's "complete guides to soccer."

**Who The IFAB is.** The **International Football Association Board (The IFAB)** was founded in **1886** by the four British football associations — The FA (England), the Scottish FA, the FA of Wales and the Irish FA — as the body with sole responsibility for developing and preserving the Laws of the Game. **FIFA joined in 1913** (The IFAB, n.d.-a).

**How the votes work — and this is the detail that makes the point.** The IFAB has five members (The IFAB, n.d.-b):

| Member | Votes |
| --- | --- |
| The Football Association (England) | 1 |
| Scottish Football Association | 1 |
| Football Association of Wales | 1 |
| Irish Football Association (Northern Ireland) | 1 |
| **FIFA** (on behalf of every other national association in the world) | **4** |
| **Total** | **8** |

A change to the Laws requires a **three-quarters majority** at the Annual General Meeting (The IFAB, 2024, Statutes) — which, with eight votes, means **six**.

**Now do the arithmetic, because it is the whole story.**

FIFA has 4 votes. It needs 6. **So FIFA cannot change a single Law of the Game on its own.** It must persuade at least **two of the four British associations** to vote with it. And the four British associations together have 4 votes — so they cannot change a Law without FIFA either. **Neither side can move without the other.** That deadlock is not a bug; it is the design. It makes the Laws deliberately, stubbornly hard to change.

This is genuinely strange, and worth sitting with: a global sport played by hundreds of millions of people has its rulebook controlled by a committee on which **four small British associations hold half the votes**. It is a colonial artefact of the game's origins that has simply never been dismantled — and it is the actual, current, legal structure of world football.

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

**One useful habit for the rest of your life:** when a source tells you "FIFA changed the offside rule," you now know it did not — The IFAB did, with FIFA's four votes and at least two British ones. That sentence is a reliable detector of a writer who did not check.

:::reveal FIFA wants to change a Law of the Game and every FIFA representative votes for it. Does it pass? ||| **No.** FIFA holds **4 of The IFAB's 8 votes**, and a change requires a **three-quarters majority — 6 votes**. FIFA must convince at least **two of the four British associations** (England, Scotland, Wales, Northern Ireland) to vote with it. FIFA cannot change a Law alone.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en
- The IFAB. (n.d.-a). *The IFAB background*. Retrieved July 2026, from https://www.theifab.com/background/
- The IFAB. (n.d.-b). *The IFAB organisation*. Retrieved July 2026, from https://www.theifab.com/organisation/
- The IFAB. (2024). *Statutes* (Version 8). https://downloads.theifab.com/downloads/ifab-statutes`,
      recallContent: [
        {
          prompt: "Who writes the Laws of the Game?",
          answer:
            "The IFAB (International Football Association Board) — founded 1886 by the four British associations; FIFA joined in 1913. FIFA does NOT write the Laws.",
        },
        {
          prompt: "How are votes distributed on The IFAB, and what majority changes a Law?",
          answer:
            "8 votes: FIFA has 4, and each of the four British associations has 1. A change needs a three-quarters majority — 6 of 8. So neither FIFA nor the British associations can act alone.",
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

**Question 1 — offside POSITION.**

A player is in an offside position if (IFAB, 2026, Law 11):

- **any part of the head, body or feet** is in the opponents' half (**excluding the halfway line**), **and**
- **any part of the head, body or feet** is nearer to the opponents' goal line than **both the ball and the second-last opponent**.

Three details, all of which decide real goals:

1. **The hands and arms of all players, including goalkeepers, are NOT considered.** You cannot be offside by an arm. The Law even defines the boundary: *"the upper boundary of the arm is in line with the bottom of the armpit."* This exists because you may legally score with your shoulder, so the shoulder counts — and you may not score with your hand, so the hand does not.
2. **"The second-last opponent."** People say "the last defender," and it is *usually* the same thing — because the goalkeeper is usually the last opponent, which makes the last outfield defender the second-last opponent. But if the goalkeeper has come out for a corner, **the second-last opponent might be an outfield player**, and the "last defender" mental model breaks. Say **second-last opponent** and you will never be wrong.
3. **Level is ONSIDE.** The Law says a player is **not** in an offside position if **level with the second-last opponent, or level with the last two opponents.** Ties go to the attacker.

---

**Question 2 — offside OFFENCE.**

A player in an offside position **at the moment the ball is played or touched by a team-mate** is penalised **only on becoming involved in active play** by (IFAB, 2026, Law 11):

- **Interfering with play** — playing or touching a ball passed or touched by a team-mate.
- **Interfering with an opponent** — by clearly obstructing their line of vision; or challenging them for the ball; or clearly attempting to play a close ball in a way that impacts on the opponent; or making an obvious action that clearly impacts on the opponent's ability to play the ball.
- **Gaining an advantage** by playing the ball or interfering with an opponent after it has **rebounded or been deflected off** the goalpost, crossbar, a match official or an opponent — or after it has been **deliberately saved by any opponent**.

Note the timing: the position is judged **at the moment the ball is played by the team-mate**, not when the offside player receives it. This is why an attacker can look "miles offside" when they collect the ball and still be perfectly onside — they were level when the pass was struck and simply ran faster.

---

**The rule people most often get backwards.**

> A player in an offside position who receives the ball **from an opponent who deliberately played the ball** — **including by deliberate handball** — **is NOT considered to have gained an advantage** (IFAB, 2026, Law 11).

**Unless it was a deliberate SAVE by any opponent.** A save resets nothing; a deliberate *play* does.

And the Law goes further, defining what "deliberate play" means: the player had **control** of the ball with the possibility of passing it, gaining possession, or clearing it — and it explicitly adds that **an inaccurate or unsuccessful pass or clearance does not stop it being a deliberate play.** A defender who tries to head the ball clear and shanks it into an offside striker's path has **deliberately played** it. **No offside.** The goal stands. This causes fury in stadiums every week, and it is exactly what the Law says.

The Law even gives the indicators of "control": the ball travelled from a distance and the player had a clear view of it; it was not moving quickly; its direction was not unexpected; the player had time to coordinate their body movement (not an instinctive stretch or jump); and a ball on the ground is easier to play than one in the air.

---

**Where you can never be offside** (IFAB, 2026, Law 11). There is **no offside offence** if a player receives the ball **directly** from:

- a **goal kick**
- a **throw-in**
- a **corner kick**

**The restart.** An offside offence is punished with an **indirect free kick where the offence occurred** — including in the offending player's own half, if that is where it happened.

:::reveal A defender, under no pressure, sees a long ball coming, attempts a controlled headed clearance, mistimes it, and the ball loops to an attacker who was in an offside position when the pass was struck. The attacker scores. Goal or offside? ||| **Goal.** Law 11: a player in an offside position who receives the ball from an opponent who **deliberately played** it has not gained an advantage — and the Law explicitly states that an **inaccurate or unsuccessful clearance does not negate the fact that the player deliberately played the ball.** It was a deliberate play, not a deliberate **save**, so there is no offside offence.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Is it an offence to be in an offside position?",
          answer:
            "No. Law 11 opens with exactly that sentence. Being in an offside position is only penalised if you become involved in active play — interfering with play, interfering with an opponent, or gaining an advantage.",
        },
        {
          prompt: "Which parts of the body count for offside?",
          answer:
            "Head, body and feet. The hands and arms of ALL players, including goalkeepers, are NOT considered — the upper boundary of the arm is in line with the bottom of the armpit.",
        },
        {
          prompt: "Name the three restarts from which you can never be offside.",
          answer: "A goal kick, a throw-in, and a corner kick — when received directly.",
        },
        {
          prompt: "Why is 'the last defender' the wrong phrase?",
          answer:
            "The Law says 'the second-last opponent.' Usually the goalkeeper is last, making the last outfield defender second-last — but if the keeper is out of position, the second-last opponent can be an outfield player and the 'last defender' model breaks.",
        },
      ],
    },
    {
      slug: "football-law-12-handball-and-cards",
      title: "12 · Law 12: handball (the current version), fouls, and cards",
      section: "Section 3 · The Laws, and who writes them",
      body: `**Handball lives inside Law 12 (Fouls and Misconduct).** There is no "Law of handball," and if a source gives you a standalone Law number for it, the source is wrong.

Handball is also the Law that has been **rewritten most often in the last decade**, which means: **most of what people confidently believe about handball is out of date.** So here is the **current** text — the 2026/27 edition, effective 1 July 2026 — and nothing else.

---

**Handball: the actual Law.**

Law 12 opens the section with two framing sentences that people skip and then argue about for ninety minutes (IFAB, 2026, Law 12):

> *"For the purposes of determining handball offences, the upper boundary of the arm is in line with the bottom of the armpit."*
> **"Not every touch of a player's hand/arm with the ball is an offence."**

Read that second sentence twice. **Ball-to-hand is not automatically a foul.** It never has been, and the Law says so out loud.

**It IS an offence if a player:**

1. **Deliberately touches the ball** with their hand/arm — "for example moving the hand/arm towards the ball."
2. **Touches the ball with their hand/arm when it has made their body unnaturally bigger.** The Law then defines what that means: *"A player is considered to have made their body unnaturally bigger when the position of their hand/arm is not a consequence of, or justifiable by, the player's body movement for that specific situation. By having their hand/arm in such a position, the player takes a risk of their hand/arm being hit by the ball and being penalised."*
3. **Scores in the opponents' goal:**
   - **directly** from their hand/arm — **even if accidental**, including by the goalkeeper; **or**
   - **immediately after** the ball has touched their hand/arm — **even if accidental**.

**That is the complete list. Note what is NOT on it.**

An earlier version of this Law disallowed a goal if the ball had **accidentally** touched the hand or arm of an **attacking team-mate** anywhere in the build-up. **That clause is gone.** In the current Law, an accidental handball only voids a goal for **the player who scored it** — either directly from their arm, or immediately before scoring. If a team-mate's arm is accidentally hit three passes earlier and you then score, **it is a goal.**

If you have ever been told otherwise, you were told a **superseded** version of Law 12. This is exactly why the edition year matters.

**The goalkeeper.** "The goalkeeper has the same restrictions on handling the ball as any other player **outside the penalty area**" (IFAB, 2026, Law 12). Inside their own area, illegal handling by the goalkeeper is an **indirect free kick**, normally with **no card**.

---

**Fouls: the three-level ladder.** (Also covered in Section 2, and worth knowing cold.)

| Level | Law 12's definition | Sanction |
| --- | --- | --- |
| **Careless** | Lack of attention or consideration; acting without precaution | Free kick, **no card** |
| **Reckless** | Disregard for the **danger to, or consequences for**, an opponent | Free kick + **yellow** |
| **Excessive force** | Exceeds necessary force **and/or endangers the safety** of an opponent | Free kick + **red** |

**Direct vs. indirect free kick.** A **direct** free kick can be scored straight from the kick. An **indirect** free kick cannot — another player must touch the ball first. Law 12 gives direct free kicks for contact offences (charging, jumping at, kicking, pushing, striking, tackling, tripping) and for handball. It gives **indirect** free kicks for things like **playing in a dangerous manner**, **impeding an opponent without contact**, and **dissent**.

---

**DOGSO — denying a goal or an obvious goal-scoring opportunity.** This is the rule the pundits call "the triple punishment debate," and the current Law is careful (IFAB, 2026, Law 12):

- A player who denies an obvious goal-scoring opportunity **inside their own penalty area** and concedes a penalty is **cautioned (yellow)** if the offence was **an attempt to play the ball or a challenge for the ball** — but **sent off** in all other circumstances (holding, pulling, pushing, or no possibility of playing the ball).
- A player who denies a goal or an obvious goal-scoring opportunity by **deliberate handball** is **sent off wherever it happens** (except a goalkeeper in their own area).
- A player who denies a goal or an obvious goal-scoring opportunity by a **non-deliberate** handball and concedes a penalty is **cautioned**.

So the honest attempt to play the ball is treated more leniently than the cynical grab. That is the principle underneath the whole of Law 12: **the Law punishes intent and danger, not merely outcome.**

**Cards.** A **yellow** is a caution. **Two yellows in one match = a red**. A **red** is a sending-off: the player leaves and **is not replaced** — the team plays short. (Some competitions also use **sin bins** / temporary dismissals; The IFAB publishes guidelines for them, and whether they apply is a **competition** decision, not a universal Law.)

:::reveal An attacker's arm is accidentally struck by the ball in midfield. Three passes later, a team-mate scores. Under the CURRENT Law 12, does the goal stand? ||| **Yes, the goal stands.** The current Law only voids a goal for accidental handball when the **scorer** puts the ball in **directly from their own hand/arm**, or **immediately after** it has touched their own hand/arm. The old clause disallowing goals for an accidental handball anywhere in a team-mate's build-up **has been removed.**

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Which Law contains handball, and what is its opening principle?",
          answer:
            "Law 12 (Fouls and Misconduct) — there is no standalone handball Law. Its stated principle: 'Not every touch of a player's hand/arm with the ball is an offence.'",
        },
        {
          prompt: "Under the current Law, when does an ACCIDENTAL handball void a goal?",
          answer:
            "Only for the scorer: if they score directly from their own hand/arm, or immediately after the ball touched their own hand/arm. Accidental handball earlier in a team-mate's build-up no longer voids a goal.",
        },
        {
          prompt: "What is the difference between a direct and an indirect free kick?",
          answer:
            "A direct free kick can be scored straight from the kick. An indirect free kick cannot — another player must touch the ball first.",
        },
      ],
    },
    {
      slug: "football-law-5-referee-and-var",
      title: "13 · Law 5: the referee, and what VAR can and cannot do",
      section: "Section 3 · The Laws, and who writes them",
      body: `**Law 5 (The Referee)** is the Law that makes football work, and it is startlingly blunt:

> *"The decisions of the referee regarding facts connected with play, including whether or not a goal is scored and the result of the match, are final."* (IFAB, 2026, Law 5)

The referee is not an umpire adjudicating between two lawyers. The referee **is the authority**, and Law 5 gives them the power to enforce the Laws, act as timekeeper, stop or abandon the match, caution and send off, and — crucially — play **advantage**: allowing play to continue when stopping it for a foul would benefit the offending team.

There are **other match officials** too — assistant referees (the ones with flags), the fourth official, and, where a competition uses them, video match officials. That is **Law 6**.

---

**VAR is in Law 5. Specifically, Law 5 §4.**

And the first sentence of that section is the one that gets skipped:

> *"The use of video assistant referees (VARs) is **only permitted** where the match/competition organiser has fulfilled all the implementation requirements as set out in the VAR Handbook, and has **received written permission from FIFA**."* (IFAB, 2026, Law 5)

So **VAR is not part of football by default.** It is an option a competition must qualify for. Most football on Earth — your high school match, your local league, the vast majority of professional matches worldwide — is played **without** it, and that is entirely lawful.

**The threshold.** VAR may assist the referee **only** in the event of a **"clear and obvious error"** or a **"serious missed incident."** It is explicitly **not** a system for re-refereeing close calls. If the decision was defensible, VAR does not touch it.

**What VAR can review** (IFAB, 2026, Law 5 §4):

| Reviewable category | Notes |
| --- | --- |
| **Goal / no goal** | Including offences in the build-up |
| **Penalty / no penalty** | |
| **Red card** (direct) | Including a **clearly incorrect second caution** |
| **Mistaken identity** | When the referee cautions or sends off the **wrong player** |
| **Clearly incorrectly awarded corner kick** | **NEW in 2026/27** — and a **competition option**, only if the decision can be changed immediately and without delaying the restart |

**That is the complete list.** A second yellow card that the referee *meant* to give is **not** reviewable. A foul in midfield is **not** reviewable. Offside is only reviewable **as part of a goal/no-goal decision**. VAR is a narrow tool, and most of the anger directed at it comes from people expecting it to fix things it was never permitted to touch.

**Who decides?** The referee. Always. Law 5: *"The referee will make the final decision which may be based solely on the information from the VAR and/or the referee reviewing the replay footage directly ('on-field review')."* The VAR **recommends**; the referee **decides**. And except for a "serious missed incident," the on-field officials **must always make a decision first** — including a decision *not* to penalise — and that decision only changes if it was a **clear and obvious error**.

**After the restart.** Once play has restarted, the referee may only review for **mistaken identity**, or for a potential sending-off for **violent conduct, spitting, biting, or extremely offensive/insulting/abusive actions** (IFAB, 2026, Law 5).

---

**Other technology, and who chose it.** Law 5 also states that **competitions MAY use** technology to assist the referee with (IFAB, 2026, Law 5):

- **the VAR protocol**
- **ball in/out of play**, including **goal-line technology (GLT)**
- **offside**, including **semi-automated offside technology (SAOT)**

The word doing the work in every case is **may**. **The Law permits; the competition chooses.** This is the structural pattern of the whole rulebook, and if you understand it you understand football's rules better than most commentators: **The IFAB writes one set of Laws with a menu of options, and every competition on Earth picks from the menu.** That is why the World Cup, the Premier League, and your high school conference all play by the same 17 Laws — and still do not play the same game.

**And in 2026/27, one more option appeared:** referees **may** wear **body cameras**, where the competition organiser supplies them and controls the footage (IFAB, 2026, Law 5). Optional. Competition's call.

:::reveal The referee shows a second yellow card, and it is clearly the wrong decision — the player never fouled anyone. Can VAR intervene? What if it was simply a harsh but defensible second yellow? ||| **Yes to the first, no to the second.** VAR may review a **red card resulting from a clearly incorrect second caution**. But the threshold is a **"clear and obvious error"** — a harsh-but-defensible caution is not clearly incorrect, so VAR must leave it alone. VAR does not re-referee close calls.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Which Law contains VAR, and what is the threshold for intervention?",
          answer:
            "Law 5 (The Referee), section 4. VAR may only assist in the event of a 'clear and obvious error' or a 'serious missed incident' — it is not a tool for re-refereeing close calls.",
        },
        {
          prompt: "Is VAR mandatory?",
          answer:
            "No. Law 5 permits it only where the competition organiser has met the VAR Handbook requirements AND received written permission from FIFA. Most football is lawfully played without it.",
        },
        {
          prompt: "List the categories VAR may review in 2026/27.",
          answer:
            "Goal/no goal; penalty/no penalty; direct red card (including a clearly incorrect second caution); mistaken identity; and — new in 2026/27, as a competition option — a clearly incorrectly awarded corner kick.",
        },
      ],
    },
    {
      slug: "football-restarts-and-set-piece-laws",
      title: "14 · Restarts: free kicks, penalties, throw-ins, corners, goal kicks",
      section: "Section 3 · The Laws, and who writes them",
      body: `Every time the ball stops, a **restart** puts it back. Six of the 17 Laws are about restarts, and knowing them is what separates a player who reacts from one who anticipates.

**Law 13 · Free Kicks.** Two types (see Lesson 12): **direct** (can be scored straight from the kick) and **indirect** (cannot — someone else must touch it first). The referee signals an indirect free kick by holding an arm straight up, and keeps it up until the ball is touched by another player or goes out of play. Opponents must be **at least 9.15 m (10 yds)** from the ball until it is in play (unless they are on their own goal line between the posts).

**One rule most fans do not know:** when a defending team forms a **wall of three or more players**, **all attacking players must remain at least 1 m (1 yd) from the wall** until the ball is in play. Sneaking a player into the wall to block the goalkeeper's view is an offence (IFAB, 2026, Law 13).

**Law 14 · The Penalty Kick.** Awarded for a **direct-free-kick offence committed by a player inside their own penalty area** while the ball is in play. Taken from the **penalty mark, 11 m (12 yds)** out.

The details that decide penalties:

- The kicker must be **clearly identified**.
- **When the ball is kicked, the defending goalkeeper must have at least part of one foot touching, in line with, or BEHIND, the goal line.** Note that last word — the goalkeeper is **allowed to be behind the line**; what they may not do is come **off** it early. Almost everyone states this rule as "one foot on the line," which is only two-thirds of it.
- **Every other player** must be **outside the penalty area**, **behind the penalty mark**, **inside the field of play**, and **at least 9.15 m (10 yds)** from the penalty mark — which is exactly what the **penalty arc** is for. The arc is not decoration; it is that 10-yard measurement drawn on the grass.
- The ball must be **kicked forward** — **backheeling is permitted, provided the ball moves forward** — and the kicker **may not play it again** until it has touched another player. (Which is why a kicker who scores off their own rebound from the post has committed an offence.)
- **Feinting in the run-up is permitted; feinting to kick the ball once the kicker has COMPLETED the run-up is not** — that is an indirect free kick and a caution, **whether or not a goal is scored** (IFAB, 2026, Law 14).

**Law 15 · The Throw-in.** Awarded to the opponents of the player who **last touched the ball** when it wholly crosses the touchline. At the moment of delivery, the thrower must:

- **Stand facing the field of play**
- Have **part of each foot on the touchline or on the ground outside it**
- **Throw the ball with both hands, from behind and over the head**, from the point where it left the field of play

All **opponents must stand at least 2 m (2 yds)** from that point (IFAB, 2026, Law 15). If the throw-in is not taken correctly, **the opposing team takes it** — the throw is not simply retaken by you.

**A goal cannot be scored directly from a throw-in.** And — as Law 11 already told us — **there is no offside from a throw-in.**

**Law 16 · The Goal Kick.** Awarded when the ball wholly crosses the goal line, **last touched by an attacker**, without a goal being scored. The ball is kicked from **any point within the goal area**, and it is in play **as soon as it is kicked and clearly moves**. Opponents must be **outside the penalty area** until then — and because the ball is in play the instant it moves, **it does not have to leave the penalty area first.**

That rule change is why you now see goalkeepers passing five yards to a centre-back standing inside the six-yard box — a shape that would have been illegal not long ago. **No offside directly from a goal kick.** A goal *can* be scored directly from a goal kick, but only against the opponents.

**Law 17 · The Corner Kick.** Awarded when the ball wholly crosses the goal line, **last touched by a defender**, without a goal. Taken from the corner arc; **the flagpost must not be moved**. Opponents must be at least **9.15 m (10 yds)** away. **A goal can be scored directly from a corner kick** (against the opponents) — and there is **no offside directly from a corner.**

**Law 8 · The dropped ball.** When play is stopped for a reason not covered by any other restart — an injury, an outside interference, the ball striking a match official — the referee restarts with a **dropped ball** (IFAB, 2026, Law 8):

- If the ball was **inside the penalty area** when play stopped, it is dropped for **the defending team's goalkeeper**.
- If it was **outside** the penalty area, it is dropped for **one player of the team that would have retained or gained possession** — and only if the referee cannot determine that, for **one player of the team that last touched it**.
- **All other players of both teams must remain at least 4 m (4.5 yds) from the ball** until it is in play, and the ball is in play **when it touches the ground**.

This is deliberately unglamorous. The old "contested drop ball," where two players squared up over a bouncing ball, was removed because it caused injuries and manufactured chaos.

**Law 10 · Kicks from the penalty mark.** When a competition requires a winner, the shoot-out procedure lives in **Law 10** — and remember from Lesson 4: **goals scored in a shoot-out do not count as goals.** The match itself remains a draw; the shoot-out only decides who advances.

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
            "No. Under Law 16 the ball is in play as soon as it is kicked and clearly moves — which is why keepers now pass short to a defender standing inside the box.",
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
              "The IFAB, founded in 1886 by the four British associations; FIFA joined in 1913. This is the single most commonly botched fact in football education. FIFA holds four of The IFAB's eight votes — it does not own the rulebook.",
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
              "FIFA has 4 votes; each of the four British associations has 1, for 8 in total. A change requires a three-quarters majority — 6 votes. So FIFA must persuade at least two British associations, and they cannot act without FIFA either.",
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
              "17 Laws, revised ANNUALLY. The current edition is the Laws of the Game 2026/27, in force from 1 July 2026. Earlier editions are superseded — which matters enormously for handball.",
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
              "Law 11's first principle. Position and OFFENCE are two separate questions — you may stand in an offside position indefinitely, and nothing happens until you become involved in active play.",
            sourceLessonSlug: "football-law-11-offside",
          },
          {
            prompt: "Which parts of the body are considered when judging offside position?",
            options: [
              "Every part of the body, including hands and arms",
              "Head, body and feet — hands and arms are NOT considered, for any player including goalkeepers",
              "Only the feet",
              "Only the part of the body nearest the goal, whatever it is",
            ],
            correctIndex: 1,
            explanation:
              "Law 11: head, body, feet. Hands and arms are excluded for all players. The Law even sets the boundary — 'the upper boundary of the arm is in line with the bottom of the armpit' — because you may legally score with a shoulder but not a hand.",
            sourceLessonSlug: "football-law-11-offside",
          },
          {
            prompt: "A defender attempts a controlled headed clearance, mishits it, and it falls to an attacker who was in an offside position when the pass was played. The attacker scores. What is the decision?",
            options: [
              "Offside — the attacker gained an advantage",
              "Goal — the defender deliberately played the ball, and Law 11 says an inaccurate clearance does not negate that",
              "Indirect free kick to the defending team",
              "Drop ball",
            ],
            correctIndex: 1,
            explanation:
              "Law 11: receiving from an opponent who DELIBERATELY PLAYED the ball is not gaining an advantage — and the Law explicitly states that an inaccurate or unsuccessful clearance does not negate the deliberate play. Only a deliberate SAVE would keep the offside alive.",
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
              "Only for the scorer — directly off their own hand/arm, or immediately after it touched their own hand/arm",
              "Never — accidental handball never affects a goal",
              "Only if the referee judges it deliberate",
            ],
            correctIndex: 1,
            explanation:
              "The old clause voiding a goal for an accidental handball anywhere in a team-mate's build-up has been REMOVED. Option A is a superseded version of the Law that people still quote — which is exactly why the edition year matters.",
            sourceLessonSlug: "football-law-12-handball-and-cards",
          },
          {
            prompt: "A defender inside their own penalty area denies an obvious goal-scoring opportunity by making a genuine but mistimed attempt to play the ball. A penalty is given. What card?",
            options: ["Red", "Yellow", "No card", "Two yellows"],
            correctIndex: 1,
            explanation:
              "Law 12's DOGSO provision: inside their own area, a player is CAUTIONED if the offence was an attempt to play the ball or a challenge for the ball. In all other circumstances — holding, pulling, pushing, no possibility of playing the ball — they are sent off.",
            sourceLessonSlug: "football-law-12-handball-and-cards",
          },
          {
            prompt: "Which Law contains VAR?",
            options: ["Law 6 (The Other Match Officials)", "Law 5 (The Referee), section 4", "Its own Law, number 18", "Law 12"],
            correctIndex: 1,
            explanation:
              "VAR is in Law 5 §4, plus a separate VAR protocol section in the same book. There is no Law 18 — there are exactly 17 Laws.",
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
              "VAR is deliberately narrow. If the on-field decision was defensible, VAR does not touch it — it is not a tool for re-refereeing close calls.",
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
              "The reviewable categories are goal/no goal, penalty/no penalty, direct red card (including a clearly incorrect second caution), mistaken identity, and — new in 2026/27 and a competition option — a clearly incorrectly awarded corner kick. An ordinary yellow card is not reviewable.",
            sourceLessonSlug: "football-law-5-referee-and-var",
          },
          {
            prompt: "Is VAR mandatory in football?",
            options: [
              "Yes — all competitions must use it",
              "No — Law 5 permits it only where the organiser meets the VAR Handbook requirements and has written permission from FIFA",
              "Yes, but only in professional leagues",
              "It is required by IFAB statute in all matches above under-16 level",
            ],
            correctIndex: 1,
            explanation:
              "Most football on Earth is lawfully played without VAR. The Law permits; the competition chooses — the structural pattern of the whole rulebook.",
            sourceLessonSlug: "football-law-5-referee-and-var",
          },
          {
            prompt: "Under Law 16, must a goal kick leave the penalty area before the ball is in play?",
            options: [
              "Yes — that has always been the rule",
              "No — the ball is in play as soon as it is kicked and clearly moves, which is why keepers now pass short to a defender inside the box",
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
      title: "15 · Formations — what the numbers mean and what they hide",
      section: "Section 4 · Strategy: how football is actually won",
      body: `A **formation** is written as a string of numbers — 4-4-2, 4-3-3, 3-5-2 — read from the back, **not counting the goalkeeper**. So 4-3-3 is four defenders, three midfielders, three forwards. The numbers always add to **ten**, because the eleventh is in goal.

Remember from Lesson 3: **no Law mentions formations.** They are pure choice.

**The common shapes and what each is really trying to do.**

| Formation | Shape | What it is good at | What it gives up |
| --- | --- | --- | --- |
| **4-4-2** | Two banks of four, two strikers | Simple, compact, defensively solid; two strikers occupy two centre-backs | Outnumbered in central midfield (2 v 3) against most modern shapes |
| **4-3-3** | Back four, midfield three, front three | Width high up, pressing triggers, three midfielders control the centre | Full-backs get exposed when the wingers stay high |
| **4-2-3-1** | Back four, **double pivot**, a 10 and two wingers, one striker | Very stable — two holding midfielders screen the defence | The lone striker can get isolated |
| **3-5-2** | Three centre-backs, wing-backs, three central midfielders | Overloads midfield; wing-backs provide all the width | Enormous physical demand on wing-backs; wide areas exposed if they are caught upfield |
| **4-4-2 diamond** | Back four, midfield diamond, two strikers | Dominates the centre; a 10 behind two strikers | Almost **no natural width** — full-backs must supply it all |

**Now the important part, and it is the part TV coverage never says.**

**A formation is not a shape. It is at least three shapes.** The graphic before kick-off is nearly a lie. A team lines up as one thing **in possession**, a different thing **out of possession**, and something else again **in transition**.

The clearest example: a "4-3-3" defending often becomes a **4-5-1** — the two wingers drop into the midfield line, and the front three is suddenly a front one. Meanwhile a "4-3-3" *attacking* frequently becomes a **2-3-5** — the full-backs push high or tuck inside, one midfielder drops between the centre-backs, and five players occupy the last line. Same eleven, same "formation," three completely different structures inside a single minute.

So when someone tells you a team "plays 4-3-3," they have told you almost nothing. The real questions are:

1. **Where does the width come from?** Wingers, or full-backs, or wing-backs? Somebody must stretch the pitch, or the defence never has to move.
2. **Who protects the space in front of the centre-backs?** If nobody does, the team is one pass from being cut open.
3. **Who occupies the space between the opponent's midfield and defence?** That is where matches are won, and it is the hardest area of the pitch to defend.
4. **When we lose the ball, how many players are behind it?** This is the question that decides whether an ambitious attacking shape is brave or reckless.

**The principle underneath everything.** Football is a game of **creating numerical superiority** — getting more players than the opposition in the area where the ball is. Every formation is a bet about **where** you want to be strong and **where** you can afford to be weak. There is no correct formation, only a formation that suits the players you actually have and the opponent you are actually facing.

Which is the honest coaching answer, and the one that will serve you best if you ever pick a team: **choose the shape that fits your players.** A 3-5-2 with wing-backs who cannot run is not a 3-5-2. It is a disaster with a nice diagram.

:::reveal Someone tells you their team "plays 4-3-3." Why does that sentence tell you almost nothing? ||| Because a formation is **at least three different shapes**: one in possession, one out of possession, one in transition. A 4-3-3 typically defends as a **4-5-1** (wingers drop in) and attacks as something like a **2-3-5** (full-backs push up, a midfielder drops in). The real questions are where the **width** comes from, who **screens** the centre-backs, who occupies the space **between the lines**, and how many players are **behind the ball** when possession is lost.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "How do you read a formation, and why do the numbers add to ten?",
          answer:
            "From the back, and the goalkeeper is not counted — so 4-3-3 is four defenders, three midfielders, three forwards. Ten outfield players plus the keeper makes eleven.",
        },
        {
          prompt: "What is the core strategic idea every formation is a bet about?",
          answer:
            "Creating numerical superiority — having more players than the opposition where the ball is. Every formation chooses where to be strong and where to accept weakness.",
        },
      ],
    },
    {
      slug: "football-in-possession",
      title: "16 · In possession: how good teams actually move the ball",
      section: "Section 4 · Strategy: how football is actually won",
      body: `You have the ball. What are you trying to do?

The naive answer — "go forwards" — is the reason most amateur teams look like a firework display and lose 3-0. Here is the real one.

**The purpose of possession is to MOVE the opposition.** A defence that never has to move is impossible to break down. A defence that has been pulled ten yards to the left has a hole ten yards to the right. **You are not passing the ball to the ball. You are passing the ball to drag people.**

**The four principles.**

**1. Width and depth: make the pitch as big as you can.**
Push players to both touchlines and get somebody in behind. This forces the defence to **spread horizontally** (covering the width) and **drop vertically** (respecting the runner in behind). A stretched defence has gaps between its players. A compact one does not. Teams that attack with everyone in a bunch in the middle are making the defenders' job trivially easy.

**2. Create the passing triangle.**
The player on the ball should always have **at least two** passing options at different angles. If the only pass available is a straight line, a single defender can block it. Triangles mean a defender must choose, and choosing means being wrong about something. This is what coaches mean by "support the ball" — and it is why the player *without* the ball is usually the one who has made the mistake when a possession breaks down.

**3. Play between the lines.**
The most valuable real estate on a football pitch is the strip of grass **between the opposition's midfield line and their defensive line**. Why? Because a player receiving there is **facing the goal** with **defenders behind them** — and the midfielders who should mark them are, by definition, in front of them and running the wrong way. This is why the "10" exists, and why the modern game obsesses over "receiving between the lines" and "playing through the lines."

**4. Switch the play.**
The single most under-used weapon in amateur football. When the opposition has shuffled everyone across to your right side to squeeze you, the whole **left** is empty. A long, flat pass across the pitch — a **switch** — forces the entire defence to sprint sideways and re-organise, and defences are at their most disorganised while moving. Grind them left, then punish them right.

**Building from the back.** Modern teams pass out from the goalkeeper rather than launching the ball long. It looks like showing off. It is not. The purpose is to **invite the press**: if the opposition come forward to hunt the ball, they leave space behind themselves, and one pass through the press means you are attacking a stretched, unbalanced defence with numbers. Law 16 makes this deliberately easier — a goal kick is in play as soon as it is kicked and clearly moves, and opponents must be outside the penalty area (IFAB, 2026, Law 16).

**But it is a genuine risk**, and this is the honest bit: playing out from the back with players who cannot execute it is how a team concedes an idiotic goal. If your centre-backs cannot pass under pressure, **do not do it**. A long ball into a channel is not a moral failure. It is a legitimate strategy, and some very good teams are built on it.

**The counter-argument, stated fairly.** There is an entire, respectable school of football — direct play, second balls, set pieces, pressing high and going long — that wins matches and trophies. Possession is **not** a virtue in itself. A team that has 70% of the ball and does nothing with it has simply found an elaborate way to pass sideways. **What matters is what possession produces**: shots from good positions (Lesson 7).

:::reveal Your opponents have crowded every player over to your right wing to trap you. What is the most valuable pass on the pitch, and why? ||| A **switch of play** — a long, flat pass to the completely empty **left** side. Defences are at their most disorganised while moving sideways, and forcing the whole block to sprint across the pitch and re-set is what creates the gap. Grinding them to one side and then punishing the other is the point of moving the ball at all.

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
            "A player receiving between the opponent's midfield and defensive lines is facing goal with defenders behind them — and the midfielders who should mark them are in front of them, running the wrong way.",
        },
        {
          prompt: "Why do teams play out from the back rather than launching it long?",
          answer:
            "To invite the press. If opponents come forward to hunt the ball, they leave space behind — and one pass through the press means attacking a stretched defence with numbers. But it is a real risk: if your defenders can't pass under pressure, don't do it.",
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
- **The requirement:** everyone presses or nobody does. One player who does not sprint creates a passing lane, and the press is broken — and now you have committed eight players upfield for nothing. It is the most physically and mentally demanding thing in football.

**Option B: the low block.** Drop deep, get everyone behind the ball, deny space near your own goal, and concede the ball in areas where it cannot hurt you.

- **The prize:** the opposition can pass it around in front of you all day. They are welcome to. There is nowhere to go, and no space behind you to run into.
- **The price:** you have surrendered territory and initiative. You will spend the match defending, and if you concede, you must come out of your shell and become vulnerable.
- **This is not cowardice.** It is a completely legitimate, often brilliant strategy — especially against a stronger team — and it pairs naturally with the counter-attack.

**Compactness: the concept underneath both.** In either plan, the distances between your defensive line, your midfield line, and your forward line must stay **short**. If your defence drops and your forwards do not, you have opened a 40-yard gap through the middle of your own team and the opposition will simply play in it. **The whole team moves as one block** — up together, back together, across together. Amateur teams lose because they stretch; good teams look like a net being dragged around.

**The offside trap.** A defensive line can step **up** in unison at the moment a pass is played, leaving the striker in an offside position. This is legal and effective — and it is a **high-risk play**, because a single defender who does not step (or steps late) plays everyone onside, and the entire line is then behind the ball with a striker running free. Remember Law 11: the position is judged **at the moment the ball is played by the team-mate**, and **level is onside** (IFAB, 2026, Law 11). The trap has to be *early* and it has to be *together*.

---

**Now the most important idea in modern football: TRANSITION.**

A **transition** is the moment possession changes hands. There are two.

**Transition to defence (you have just LOST the ball).** This is the most dangerous moment in football, and it is not close. Why? Because you were **attacking** — which means your players are spread out, pushed high, out of position, and off balance. The opposition are, at that exact instant, **facing a disorganised team**.

The response is the **counter-press**: the instant you lose the ball, the nearest two or three players attack the ball immediately and ferociously — not to tackle so much as to **deny the opponent the time to look up and start the counter**. If you win it back in those first seconds, you are attacking a defence that has already begun to think about attacking. If you fail, at least you have slowed the break long enough for your team to get back.

**Transition to attack (you have just WON the ball).** The mirror image. The opposition were attacking; they are spread out and disorganised. **This is the best attacking moment you will get all match** — and it lasts about five seconds. A team that wins the ball and immediately passes it sideways has thrown that moment away. A team that wins the ball and drives forward at speed is a **counter-attack**, and counter-attacks are efficient precisely because the defence has not yet re-formed.

**This is why the transition moments matter more than the possession phases.** A very well-organised defence, given time to set, is genuinely hard to break down. A defence caught in transition is not organised at all. The best teams in the world are not the ones with the prettiest passing — they are the ones who are **ruthless in the five seconds after the ball changes hands, in both directions.**

:::reveal What is the most dangerous moment for a team, and why? ||| **The moment they LOSE the ball.** Because they were attacking — so their players are spread out, pushed high, out of position, and off balance. The opposition are, at that instant, facing a disorganised team. The response is the **counter-press**: attack the ball immediately with the nearest players to deny the opponent time to look up and start their counter.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "What is a counter-press?",
          answer:
            "Attacking the ball immediately and ferociously in the first seconds after losing it, with the nearest two or three players — to deny the opponent time to look up and launch a counter-attack against your disorganised, spread-out team.",
        },
        {
          prompt: "Why is compactness the concept underneath both the high press and the low block?",
          answer:
            "Because the distances between your defensive, midfield and forward lines must stay short. If the defence drops and the forwards don't, you have opened a 40-yard hole through your own team. The whole block moves as one.",
        },
        {
          prompt: "Why is the offside trap high-risk?",
          answer:
            "One defender who fails to step up, or steps late, plays everyone onside — and the whole defensive line is then behind the ball with a striker running free. The trap must be early and it must be together.",
        },
      ],
    },
    {
      slug: "football-set-pieces-and-watching",
      title: "18 · Set pieces, and how to watch a match like an analyst",
      section: "Section 4 · Strategy: how football is actually won",
      body: `**Set pieces are the one part of football you can rehearse.**

Everything else in the game is chaotic — twenty-two people improvising. But a corner, a free kick, and a throw-in are **stopped, positioned, and repeatable**. It is the only moment where a coach's plan survives contact with reality intact, and it is the reason professional clubs now employ **dedicated set-piece coaches**. If you are a small team playing a better team, set pieces are the fairest fight you will get all afternoon.

**Attacking corners: the choices.**

| Delivery | What it does |
| --- | --- |
| **Inswinger** | Curls **towards** the goal. Attacks the goalkeeper. A flick anywhere is dangerous; the keeper must commit. |
| **Outswinger** | Curls **away** from the goal. Easier for an attacker to meet with power, and away from the keeper's reach. |
| **Near post flick-on** | One attacker attacks the near post and glances the ball across the six-yard box for runners behind. |
| **Short corner** | Two players, a pass, and a cross from a different angle — designed to drag defenders out and change the geometry. |

**Attacking routines** are about **movement, not height.** Blocking runs (legal screening — but be careful, Law 12 makes **holding** an offence), decoy runners, a group starting together and splitting late. The point is to **create a moment of separation** between a marker and a runner. And remember from Lesson 14: there is **no offside from a corner kick** — attackers can stand wherever they like.

**Defending corners: zonal vs man-marking.** Zonal marking assigns defenders to **spaces**; man-marking assigns them to **players**. Most teams now use a hybrid. Pundits love to blame "zonal marking" whenever a corner is conceded, which is mostly lazy — both systems concede goals, and both work.

**Free kicks.** Direct shooting range is roughly 18-30 yards out and central. Further out or wider, it becomes a **delivery** — effectively a corner from a different angle. And the wall: Law 13 requires opponents to stay **9.15 m (10 yds)** away, and where the defending team forms a wall of **three or more**, all attacking players must stay **1 m (1 yd)** clear of it (IFAB, 2026, Law 13).

**The long throw.** Genuinely underrated, entirely legal, and one of the cheapest advantages in amateur football. A throw-in launched into the penalty area is a free cross that the opposition cannot be offside against — Law 11 explicitly says **no offside from a throw-in**. One player with a long throw changes the value of every touchline in the attacking half.

---

**How to watch a match like an analyst.**

Almost everybody watches the ball. The ball is the least informative object on the pitch. Here is a better protocol — try it for ten minutes of any match:

**1. Watch the space, not the ball.** Where is the pitch **empty**? That is where the next goal comes from.

**2. Pick one player and watch only them for five minutes.** Not the striker — pick a **full-back** or a **holding midfielder**. You will suddenly see the enormous amount of work that happens off the ball and never appears on a highlight reel. This single exercise will teach you more about football than a hundred hours of watching the ball.

**3. Watch the defensive line.** Is it high or deep? Does it step up together? Where does it break? A back four that is not level is a back four about to concede.

**4. Watch the five seconds after every turnover.** Do they counter-press or do they retreat? That one choice tells you the coach's entire philosophy.

**5. Ask "who is free?"** At any moment, somebody on the pitch is unmarked. Find them before the player on the ball does. When you start beating the professionals to that answer, you are reading the game.

**6. Count the chances, not the score.** A 1-0 win in which you were battered is not a good performance; a 0-2 loss in which you created eight clear chances is often a team about to go on a run. Score is a noisy signal. **Chances are the real story** — which is the whole intuition behind expected goals from Lesson 7.

:::reveal Why are set pieces disproportionately valuable for a weaker team? ||| Because they are the **only rehearsable moments** in football. Open play is twenty-two people improvising, and the better team usually wins an improvisation contest. A corner or a free kick is stopped, positioned and repeatable — it is the fairest fight a weaker side will get, which is exactly why professional clubs now employ dedicated set-piece coaches.

## Sources
- International Football Association Board. (2026). *Laws of the game 2026/27*. https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`,
      recallContent: [
        {
          prompt: "Why can a long throw-in be so dangerous in the attacking half?",
          answer:
            "It is a free cross that the opposition cannot be offside against — Law 11 says there is no offside directly from a throw-in. One player with a long throw changes the value of every touchline.",
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
              "Back to front, excluding the goalkeeper — ten outfield players plus the keeper makes eleven",
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
              "Because a formation is at least three shapes — one in possession, one out of possession, one in transition",
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
              "4-4-2 is compact and simple and its two strikers occupy two centre-backs — but two central midfielders against three is a losing count in the area that matters most.",
            sourceLessonSlug: "football-formations",
          },
          {
            prompt: "What is the actual purpose of keeping possession of the ball?",
            options: [
              "To run down the clock",
              "To MOVE the opposition — a defence that never has to move cannot be broken down",
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
              "This is why the '10' exists and why the modern game obsesses over 'receiving between the lines'. It has nothing to do with the Laws — it is pure geometry and body orientation.",
            sourceLessonSlug: "football-in-possession",
          },
          {
            prompt: "Why do teams deliberately pass out from the back instead of kicking long?",
            options: [
              "To show off technical ability",
              "To invite the press — if opponents come forward to hunt the ball, they leave space behind, and one pass through the press attacks a stretched defence",
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
              "A switch of play — a long flat pass to the empty far side",
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
              "The prize is winning the ball 30 yards from their goal with defenders facing the wrong way. The price is the space behind your high line, and the requirement is that EVERYONE presses — one player who doesn't sprint breaks it.",
            sourceLessonSlug: "football-pressing-and-transitions",
          },
          {
            prompt: "Is a low block a sign of a cowardly or unambitious team?",
            options: [
              "Yes — good teams always press high",
              "No — it is a legitimate strategy that surrenders territory in exchange for denying space near your own goal, and it pairs naturally with the counter-attack",
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
              "The moment they LOSE the ball — because they were attacking, so they are spread out, high, and off balance",
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
              "Because they are the only rehearsable moments in football — stopped, positioned, and repeatable",
              "Because the offside law is suspended during them",
              "Because they carry more points",
            ],
            correctIndex: 1,
            explanation:
              "Open play is twenty-two people improvising, and the better team usually wins an improvisation contest. Set pieces are the fairest fight a weaker side gets — which is why professional clubs now employ dedicated set-piece coaches.",
            sourceLessonSlug: "football-set-pieces-and-watching",
          },
          {
            prompt: "Why is a long throw-in into the box so dangerous?",
            options: [
              "Because a goal can be scored directly from it",
              "Because it is a free cross that the opposition cannot be offside against — Law 11 says no offside directly from a throw-in",
              "Because defenders must stay 10 yards away",
              "Because the goalkeeper may not handle it",
            ],
            correctIndex: 1,
            explanation:
              "No offside from a throw-in (Law 11). Note that a goal CANNOT be scored directly from a throw-in (Law 15) — the danger is the second contact, not the throw itself.",
            sourceLessonSlug: "football-set-pieces-and-watching",
          },
          {
            prompt: "What does an inswinging corner do that an outswinger does not?",
            options: [
              "It curls TOWARDS the goal, attacking the goalkeeper — a flick anywhere is dangerous and the keeper must commit",
              "It guarantees a header on target",
              "It removes the offside law",
              "It must be taken with the weaker foot",
            ],
            correctIndex: 0,
            explanation:
              "The inswinger attacks the keeper and turns any flick into a threat. The outswinger curls AWAY from goal — easier for an attacker to meet with power, and away from the keeper's reach. Different tools, different jobs.",
            sourceLessonSlug: "football-set-pieces-and-watching",
          },
          {
            prompt: "You want to actually read a match rather than just watch it. What is the single best exercise?",
            options: [
              "Follow the ball closely at all times",
              "Pick one off-ball player — a full-back or holding midfielder — and watch only them for five minutes",
              "Watch only the replays",
              "Track the score minute by minute",
            ],
            correctIndex: 1,
            explanation:
              "The ball is the least informative object on the pitch. Watching one off-ball player reveals the enormous volume of work that never appears on a highlight reel — and it teaches you more than a hundred hours of ball-watching.",
            sourceLessonSlug: "football-set-pieces-and-watching",
          },
        ],
      },
    },
  ],
};
