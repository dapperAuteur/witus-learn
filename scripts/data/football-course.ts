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
  ],
};
