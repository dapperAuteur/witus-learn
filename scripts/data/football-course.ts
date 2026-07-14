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
  ],
};
