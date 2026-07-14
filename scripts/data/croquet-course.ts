// Authored "Croquet: How to Play, How to Think, and How to Build in the Sport" — a sectioned,
// quizzed, citation-first sports course for a high-school audience.
//
// THE LOAD-BEARING CONSTRAINT (read before editing a single line):
//   "Croquet" is not one game. It is at least three formally codified games plus an informal one,
//   and their court layouts, turn structures and scoring genuinely differ:
//     • GOLF CROQUET (GC)          — governed by the World Croquet Federation. Rulebook: the WCF
//                                    Rules of Golf Croquet, 6th edition (approved 7 March 2022).
//     • ASSOCIATION CROQUET (AC)   — governed by the World Croquet Federation. Rulebook: the WCF
//                                    Laws of Association Croquet, 7th edition (approved 24 Jan 2021).
//     • AMERICAN SIX-WICKET        — governed by the USCA. Rulebook: The Official Rules of American
//                                    Six Wicket Croquet, revised 2024.
//     • GARDEN / BACKYARD CROQUET  — no governing body, no rulebook, no code.
//   EVERY lesson states which code it is teaching, in bold, in its first lines. Do not "simplify"
//   by merging them. Do not present one code's rule as universal.
//
// SOURCING RULES APPLIED (every rule number below was read in the actual governing body's own
// current rulebook — none are reconstructed from memory):
//   • Where a concept is real but has NO rule number, the course says so out loud rather than
//     inventing one. Three examples, all deliberate:
//       – "Break" is NOT a defined term in the AC Laws (it is not in the Glossary). The course
//         cites the WCF's own Association Croquet information page for it, not a Law.
//       – The word "jump" appears NOWHERE in the WCF GC Rules. Jump shots are legal by omission,
//         bounded by the fault list (Rule 11.2). The course teaches it exactly that way.
//       – "Carryover deadness" appears ZERO times in the USCA's 2024 rulebook. The concept is real
//         and is what Rule 7.1 describes; the phrase is coaching slang. The course says so.
//   • Claims that could not be sourced were CUT, not softened. See the "Myths we cut" lesson —
//     the cuts are taught, on purpose, as a lesson in checking claims.
//
// Structure: 8 sections → 8 collapsible course modules. Every section ends with a quiz whose bank
// is 15 questions (the serving layer caps an attempt at 10 and draws a random subset, so a bank
// above 10 is what makes the rotation actually rotate). Every question carries `sourceLessonSlug`.

import type { AuthoredCourse } from "./authored-course";

// ── Shared bibliography lines (APA 7), so a citation is worded identically everywhere ──────────
const WCF_AC = "World Croquet Federation. (2021). *The World Croquet Federation laws of Association Croquet* (7th ed.). https://worldcroquet.org/wp-content/uploads/2021/02/Laws-7th-Edition-master-new.pdf";
const WCF_GC = "World Croquet Federation. (2022). *The WCF rules of Golf Croquet* (6th ed.). https://worldcroquet.org/wp-content/uploads/2022/03/WCF-GC-Rules-6th-Edition-Final-7.3.22.pdf";
const USCA_RULES = "United States Croquet Association. (2024). *The official rules of American six wicket croquet* (rev. 2024). https://www.croquetamerica.com/content.aspx?page_id=22&club_id=962311&module_id=460170";
const WCF_AC_PAGE = "World Croquet Federation. (n.d.). *Association croquet*. https://worldcroquet.org/croquet-information/association-croquet/";
const WCF_LINKS = "World Croquet Federation. (n.d.). *Useful links*. https://worldcroquet.org/croquet-information/useful-links/";
const USCA_ABOUT = "United States Croquet Association. (n.d.). *About the USCA*. https://www.croquetamerica.com/content.aspx?page_id=22&club_id=962311&module_id=450335";
const CE_ABOUT = "Croquet England. (n.d.). *About us*. https://www.croquetengland.org.uk/about-us/";
const FACILITY_GUIDE = "Croquet Victoria. (2019). *Croquet facility guide* (2nd ed.). Published as a World Croquet Federation advice sheet. https://worldcroquet.org/wp-content/uploads/2021/01/Croquet-Facility-Guide-A4_FullColour.pdf";
const WCF_REPORT_2024 = "World Croquet Federation. (2025). *Management Committee report 2024*. https://worldcroquet.org/wp-content/uploads/2025/01/WCF-MC-Report-2024.pdf";

export const CROQUET_COURSE: AuthoredCourse = {
  title: "Croquet: How to Play, How to Think, and How to Build in the Sport",
  description:
    "Croquet is not a garden pastime with a mallet. It is a tactical game — closer to billiards or chess than to badminton — with one of the lowest barriers to entry and the most reachable competitive ladder in world sport. This course teaches you to actually play and think: the three codified games that share the name (Golf Croquet and Association Croquet under the World Croquet Federation; American Six-Wicket under the USCA), how a turn works in each, break-building, wiring, deadness, and the tactics that decide games. Then it does the part a normal croquet course skips: the history you can actually verify (and the beloved stories that fall apart when you check them), how leagues and handicaps work, and the genuine openings for an amateur or an entrepreneur — starting a club, coaching, courts and turf, equipment, tournaments, and a world championship whose entire field is under 100 players. Every rule cited comes from the governing body's own current rulebook. Where a rule number does not exist, this course says so instead of inventing one.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 — The game and its codes
    // ══════════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "what-croquet-actually-is",
      title: "1 · What croquet actually is",
      section: "1 · The game and its codes",
      body: `Most people picture croquet as something that happens at a garden party: a mallet, a few hoops stuck in a lawn, someone's uncle cheating. That version exists. It is not the sport.

The sport is a **tactical game played on a flat, closely mown lawn**, and its closest relatives are billiards, snooker and chess — not badminton. You are not really trying to hit a ball through a hoop. You are trying to leave the four balls on the court in a position where *your* next turn is easy and your opponent's next turn is impossible.

Here is the single fact that tells you what kind of game this is. In **Association Croquet**, one of the two games run by the World Croquet Federation, hitting another ball earns you extra strokes. Chain those extra strokes together and you get a **break** — the same idea as a break in snooker. The World Croquet Federation describes it on its own Association Croquet page: the game "is based on the concept of a 'break' (as in snooker, billiards and pool) in which the right may be earned to play a succession of extra strokes," and "it is possible to play a break of up to **91 strokes** in which the striker's ball will have been made to pass through twelve hoops and then strike the centre peg" (World Croquet Federation, n.d.).

Ninety-one strokes. One turn. Your opponent stands and watches the whole thing. That is the game.

**What makes croquet unusual as a sport to take up:**

- **The physical barrier is close to zero.** You do not need to be tall, fast, or strong. A stroke is a controlled swing of a mallet. Fourteen-year-olds beat forty-year-olds; forty-year-olds beat seventy-year-olds; seventy-year-olds beat everybody.
- **The tactical ceiling is very high.** That is where the actual competition lives.
- **The competitive ladder is short.** You will see the real numbers in Section 7. They are much smaller than you expect, and they are published.

**One warning before you go further, and it is the most important sentence in this course:** the word "croquet" names *several different games*, with different rulebooks, different courts, and different turn structures. A course that blurs them teaches you to be wrong confidently. The next lesson sorts them out.

:::reveal What kind of game is competitive croquet actually closest to, and what is the tactical unit that makes it feel that way? ||| It is closest to billiards, snooker and pool. The tactical unit is the "break" — a chain of earned extra strokes in one turn. The World Croquet Federation's own Association Croquet page notes a break can run to 91 strokes, taking a ball through all twelve hoops and the peg in a single turn.

## Sources
- ${WCF_AC_PAGE}`,
    },
    {
      slug: "the-codes",
      title: "2 · Four games, one name (start here or stay confused)",
      section: "1 · The game and its codes",
      body: `This is the lesson that separates people who know croquet from people who think they do.

There is no such thing as "the rules of croquet." There are **several separate, incompatible codes**, each with its own governing body and its own current rulebook. Here is the honest map.

| Code | Who governs it | Its own current rulebook |
|---|---|---|
| **Golf Croquet (GC)** | **World Croquet Federation (WCF)** | *The WCF Rules of Golf Croquet*, **6th edition**, approved 7 March 2022 (World Croquet Federation, 2022) |
| **Association Croquet (AC)** | **World Croquet Federation (WCF)** | *The WCF Laws of Association Croquet*, **7th edition**, approved by the WCF Council on 24 January 2021 (World Croquet Federation, 2021) |
| **American Six-Wicket** | **United States Croquet Association (USCA)** | *The Official Rules of American Six Wicket Croquet*, **revised 2024** (United States Croquet Association, 2024) |
| **Garden / backyard croquet** | **Nobody** | **There isn't one.** House rules. |

A few things fall out of that table immediately:

- **The WCF publishes rulebooks for exactly two codes** — Association Croquet and Golf Croquet. That is worth being precise about, because plenty of other mallet games exist (Ricochet, gateball, and others) and are *not* WCF codes. The WCF's own links page says so bluntly of the variants it lists: "**Note: these games are not WCF recognised versions of Croquet**" (World Croquet Federation, n.d.-b).
- **The USCA is not a WCF rival — it is a WCF member.** It runs the American code *and* national championships in the WCF's codes. In fact the USCA crowns national champions under **four** rule sets: American, Association, Golf Croquet, and Nine-Wicket (United States Croquet Association, n.d.).
- **Garden croquet is a real thing and a fine thing.** It is just not a code. If someone hands you a nine-hoop set from a hardware store and says "the rules are on the box," that is not the sport this course teaches — and it is not "wrong," it is a different activity.

**The rule this course enforces on itself, and that you should enforce on any croquet source you read:**

> **Every rule statement must name its code.** "In croquet you get an extra shot when you hit another ball" is a *false* sentence, because it is true in Association Croquet and false in Golf Croquet.

From here on, every lesson tells you in its first lines which code it teaches. If a website, a video, or a friend explains a croquet rule and does not tell you the code, you have learned nothing you can rely on.

:::reveal Name the three codified croquet codes taught in this course, and which body governs each. ||| Golf Croquet and Association Croquet are both governed by the World Croquet Federation (WCF). American Six-Wicket is governed by the United States Croquet Association (USCA). Garden/backyard croquet is a fourth, informal thing with no governing body and no rulebook.

## Sources
- ${WCF_AC}
- ${WCF_GC}
- ${USCA_RULES}
- ${WCF_LINKS}
- United States Croquet Association. (n.d.). *National champions*. https://www.croquetamerica.com/content.aspx?page_id=22&club_id=962311&module_id=459897`,
      recallContent: [
        {
          prompt: "What is a 'break', and which code is it the centre of?",
          answer:
            "A chain of earned extra strokes played in a single turn — the same idea as a break in snooker. It is the centre of Association Croquet, where a break can run to 91 strokes.",
        },
        {
          prompt: "Why is the sentence 'in croquet, hitting another ball earns you extra strokes' a bad sentence?",
          answer:
            "Because it does not name a code. It is true in Association Croquet and false in Golf Croquet, where a turn is a single stroke.",
        },
      ],
    },
    {
      slug: "court-and-equipment",
      title: "3 · The court and the kit — and where the codes diverge",
      section: "1 · The game and its codes",
      body: `**Codes in this lesson: all three.** This is the one lesson that deliberately compares them side by side.

## The full-size court

The good news for a beginner is that **Association Croquet and Golf Croquet use the same court**, and the American court is the same rectangle described in feet.

- **AC (WCF):** "The standard court is a rectangle measuring **28 by 35 yards** (25.6 by 32.0 metres)" (World Croquet Federation, 2021, Law 4.1.1), with a tolerance of ±6 inches (Law 4.1.2).
- **GC (WCF):** identical — 28 by 35 yards, ±6 inches (World Croquet Federation, 2022, Rules 2.1.1–2.1.2).
- **American Six-Wicket (USCA):** "The standard court is a rectangle, measuring **35 by 28 yards (105 by 84 feet)**" (United States Croquet Association, 2024, equipment section).

## Six hoops and a peg (or six wickets and a stake)

All three codes put **six** hoops on the court, plus a central peg. The layout is the same geometry, described in different units:

- **WCF (both codes):** the peg is in the centre; the two **inner** hoops sit **7 yards** north and south of the peg, and the four **outer** hoops sit **7 yards** from their adjacent boundaries (World Croquet Federation, 2021, Law 4.4; World Croquet Federation, 2022, Rule 2.3.2).
- **USCA:** the stake is at the centre; the two inner wickets are **21 feet** north and south of the stake and the four outer wickets **21 feet** from their adjacent boundaries (United States Croquet Association, 2024). Twenty-one feet **is** seven yards. Same court, different tape measure.

Vocabulary alert: the WCF says **hoop** and **peg**; the USCA says **wicket** and **stake**. Same objects.

Both the WCF codes and the USCA code run each of those six hoops **twice**, in opposite directions, so a ball has **12 hoop (wicket) points** to score plus the peg (stake) point — **26 points for a side of two balls**. That much is genuinely common ground (World Croquet Federation, 2021, Law 1.1; United States Croquet Association, 2024, Rule 1.1(b)).

## The kit

| Item | WCF (AC & GC) | USCA (American Six-Wicket) |
|---|---|---|
| Ball | 3⅝ in (92 mm) diameter, 16 oz (454 g) (World Croquet Federation, 2021, Law 5.3.1) | 3⅝ in, 16 oz (United States Croquet Association, 2024) |
| Hoop / wicket height | 12 in above ground (Law 5.2.1.1) | 12 in above ground |
| Hoop / wicket width | uprights not less than 3 11/16 in and not more than 4 in apart (Law 5.2.1.3) | same range for normal play; **max 3¾ in** for tournament play |
| Peg / stake | 18 in above ground, 1½ in diameter (Law 5.1.1) | 18 in tall, 1½ in diameter, banded blue-red-black-yellow downwards |

Look at the hoop width against the ball width. A championship hoop can be **less than a tenth of an inch wider than the ball**. That is why "just hit it through the hoop" is not a plan.

## You do not need a full-size court to start — and that is written into the rules

This is a genuinely important, genuinely under-known fact, and Section 8 turns it into a business.

- **GC (WCF), Rule 2.4:** "If the available area is too small for a standard court, a smaller court may be laid out by **retaining the court proportions of five units long by four units wide** but using a unit shorter than the standard 7 yards" (World Croquet Federation, 2022).
- **USCA:** the same idea — keep the proportions **5 units long by 4 wide**; with 10-foot units you get a **50 × 40 ft** court, which the rulebook calls "generally considered the minimum for this game" (United States Croquet Association, 2024).

A 50 × 40 foot rectangle is a school field corner, a big backyard, a park. The rulebooks *anticipate* you not having a championship lawn.

:::reveal A friend says "a croquet court has twelve hoops, because there are twelve hoop points." What is wrong with that, and what is the actual arrangement? ||| There are only SIX hoops (six wickets) on the court, plus a central peg/stake. Each hoop is run TWICE, in opposite directions, which is where the 12 hoop points come from. Twelve hoop points plus the peg point makes 13 points per ball, and 26 for a side of two balls.

## Sources
- ${WCF_AC}
- ${WCF_GC}
- ${USCA_RULES}`,
      recallContent: [
        {
          prompt: "Which two codes does the World Croquet Federation publish rulebooks for?",
          answer: "Association Croquet and Golf Croquet. Only those two.",
        },
        {
          prompt: "Who governs American Six-Wicket, and what is its current rulebook?",
          answer:
            "The United States Croquet Association (USCA). Its rulebook is The Official Rules of American Six Wicket Croquet, revised 2024.",
        },
      ],
    },
    {
      slug: "quiz-codes",
      title: "4 · Section quiz: the game and its codes",
      section: "1 · The game and its codes",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How many separate codes of croquet does the World Croquet Federation publish rulebooks for?",
            options: ["One — 'the rules of croquet'", "Two — Association Croquet and Golf Croquet", "Four — including American Six-Wicket and garden croquet", "Six, one per hoop"],
            correctIndex: 1,
            explanation:
              "The WCF publishes exactly two rulebooks: the Laws of Association Croquet (7th ed., 2021) and the Rules of Golf Croquet (6th ed., 2022). American Six-Wicket is the USCA's code; garden croquet has no governing body at all.",
            sourceLessonSlug: "the-codes",
          },
          {
            prompt: "Which body governs American Six-Wicket croquet?",
            options: ["The World Croquet Federation", "The United States Croquet Association (USCA)", "Croquet England", "No one — it is an informal code"],
            correctIndex: 1,
            explanation:
              "The USCA publishes The Official Rules of American Six Wicket Croquet (revised 2024). The USCA is a member of the WCF, not a rival to it, and it also runs national championships in the WCF's codes.",
            sourceLessonSlug: "the-codes",
          },
          {
            prompt: "Why is 'in croquet, hitting another ball earns you extra strokes' a bad sentence?",
            options: [
              "It is simply false in every code",
              "It fails to name a code — it is true in Association Croquet and false in Golf Croquet",
              "It confuses hoops with wickets",
              "It is true, but only on a full-size court",
            ],
            correctIndex: 1,
            explanation:
              "Every rule statement must name its code. In Golf Croquet a turn is a single stroke and hitting another ball earns nothing.",
            sourceLessonSlug: "the-codes",
          },
          {
            prompt: "What are the dimensions of a standard WCF croquet court?",
            options: ["28 by 35 yards", "35 by 50 yards", "50 by 40 feet", "100 by 50 feet"],
            correctIndex: 0,
            explanation:
              "Law 4.1.1 of the AC Laws and Rule 2.1.1 of the GC Rules both specify 28 by 35 yards (25.6 by 32.0 m), with a ±6 inch tolerance. The USCA describes the same rectangle as 35 by 28 yards, or 105 by 84 feet.",
            sourceLessonSlug: "court-and-equipment",
          },
          {
            prompt: "How many hoops are physically set on a six-wicket croquet court?",
            options: ["Twelve, one per hoop point", "Nine", "Six, each run twice in opposite directions", "Six, each run once"],
            correctIndex: 2,
            explanation:
              "Six hoops plus a central peg. Each hoop is run twice, in opposite directions, giving 12 hoop points per ball; with the peg point that is 13 per ball and 26 for a side of two balls.",
            sourceLessonSlug: "court-and-equipment",
          },
          {
            prompt: "In the WCF codes, where are the two inner hoops set?",
            options: [
              "Against the north and south boundaries",
              "Seven yards north and south of the central peg",
              "Twenty-one yards from the peg",
              "In the corners",
            ],
            correctIndex: 1,
            explanation:
              "AC Law 4.4 and GC Rule 2.3.2: the two inner hoops sit 7 yards north and south of the peg; the four outer hoops sit 7 yards from their adjacent boundaries. The USCA describes the same layout as 21 feet — which is the same distance.",
            sourceLessonSlug: "court-and-equipment",
          },
          {
            prompt: "The WCF says 'hoop' and 'peg'. What does the USCA rulebook call the same two objects?",
            options: ["Gate and pole", "Wicket and stake", "Arch and post", "Ring and pin"],
            correctIndex: 1,
            explanation:
              "Same objects, different vocabulary. Knowing both is how you read across codes without getting lost.",
            sourceLessonSlug: "court-and-equipment",
          },
          {
            prompt: "A championship hoop's uprights are set how far apart, relative to the ball?",
            options: [
              "About twice the ball's width",
              "Between 3 11/16 in and 4 in — barely wider than the 3⅝ in ball",
              "Exactly 5 inches",
              "It varies with no upper limit",
            ],
            correctIndex: 1,
            explanation:
              "AC Law 5.2.1.3 sets the uprights between 3 11/16 in and 4 in apart, and the ball is 3⅝ in (Law 5.3.1). That margin can be under a tenth of an inch — which is why running a hoop is a skill, not a formality.",
            sourceLessonSlug: "court-and-equipment",
          },
          {
            prompt: "What does GC Rule 2.4 allow when the available space is too small for a standard court?",
            options: [
              "Nothing — the game cannot be played",
              "A smaller court keeping the proportions five units long by four units wide",
              "Removing two hoops",
              "Playing with two balls instead of four",
            ],
            correctIndex: 1,
            explanation:
              "The rulebook itself anticipates small spaces: keep the 5:4 proportions and shrink the unit below 7 yards. The USCA equivalent gives 50 × 40 ft as a practical minimum.",
            sourceLessonSlug: "court-and-equipment",
          },
          {
            prompt: "According to the WCF's own Association Croquet page, how long can a break run?",
            options: ["Up to 12 strokes", "Up to 26 strokes", "Up to 91 strokes", "There is no published figure"],
            correctIndex: 2,
            explanation:
              "The WCF page states it is possible to play a break of up to 91 strokes, taking a ball through all twelve hoops and then the peg — in a single turn.",
            sourceLessonSlug: "what-croquet-actually-is",
          },
          {
            prompt: "Competitive croquet is most usefully compared to which of these?",
            options: ["Badminton", "Billiards, snooker and pool", "Sprinting", "Archery"],
            correctIndex: 1,
            explanation:
              "The WCF makes the comparison itself: the game is built on the concept of a break, 'as in snooker, billiards and pool'. The tactical unit — chaining earned strokes — is the same idea.",
            sourceLessonSlug: "what-croquet-actually-is",
          },
          {
            prompt: "How many points does a SIDE need to win a six-wicket game (in both the WCF's Association code and the USCA's American code)?",
            options: ["13", "26", "12", "7"],
            correctIndex: 1,
            explanation:
              "Each ball scores 12 hoop points plus the peg/stake point = 13; a side has two balls, so 26 (AC Law 1.1; USCA Rule 1.1(b)).",
            sourceLessonSlug: "court-and-equipment",
          },
          {
            prompt: "Which statement about garden/backyard croquet is accurate?",
            options: [
              "It is the WCF's beginner code",
              "It is governed by the USCA",
              "It has no governing body and no rulebook — it is a different, informal activity",
              "It is played on a standard 28 by 35 yard court",
            ],
            correctIndex: 2,
            explanation:
              "Garden croquet is real and fine, but it is not a code. It has no rulebook and no governing body, so nothing in it is authoritative for the sport.",
            sourceLessonSlug: "the-codes",
          },
          {
            prompt: "Under how many rule sets does the USCA crown national champions?",
            options: ["One (American only)", "Two", "Four — American, Association, Golf Croquet and Nine-Wicket", "Six"],
            correctIndex: 2,
            explanation:
              "The USCA runs national championships in four codes. That is why 'the American body only plays the American code' is wrong.",
            sourceLessonSlug: "the-codes",
          },
          {
            prompt: "What does the WCF say about croquet variants such as Ricochet that it lists on its links page?",
            options: [
              "They are WCF codes with their own world championships",
              "'Note: these games are not WCF recognised versions of Croquet'",
              "They are the beginner tier of Golf Croquet",
              "They are banned",
            ],
            correctIndex: 1,
            explanation:
              "The WCF's links page carries that note verbatim. Other mallet games exist and are governed elsewhere — do not attribute their rules to the WCF.",
            sourceLessonSlug: "the-codes",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 — Golf Croquet (WCF). The entry code: one stroke per turn.
    // ══════════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gc-how-a-turn-works",
      title: "5 · Golf Croquet: one turn, one stroke",
      section: "2 · Golf Croquet (WCF)",
      body: `**Code taught in this lesson: GOLF CROQUET (GC), governed by the World Croquet Federation.** Rulebook: *The WCF Rules of Golf Croquet*, 6th edition, February 2022.

Golf Croquet is where nearly everyone starts, and it is not a watered-down version of the "real" game — it is a full WCF code with its own world championship. It is also the fastest-growing form of the sport (see Section 7).

## The whole engine, in three rules

**1. A turn is one stroke.** Rule 1.1.1: "There are two opposing sides which play in alternate turns, **each turn containing one stroke** (subject to exceptions set out in these Rules)" (World Croquet Federation, 2022). The main exception is handicap play, where the weaker player gets extra strokes (Rule 20).

That single sentence is why GC is easy to learn: there is no chain of earned strokes to keep track of. You hit; they hit; you hit.

**2. The balls are played in a fixed colour sequence.** Rule 1.2.1: "The balls are to be played in the colour sequence **blue, red, black and yellow**." One side owns blue and black; the other owns red and yellow (Rule 1.1.3). In doubles, each player plays one ball for the whole game (Rule 1.1.2).

Because the sequence is fixed, **you always know exactly who shoots next, and with which ball.** That turns GC into a game of "what can they do to me on their one stroke?" — which is why it is far more tactical than it first appears.

**3. All four balls contest the same hoop, and the first ball through scores it.** Rule 1.3.2: "A point is scored for the side whose ball **first** runs the hoop in order... **Both sides then contest the next hoop** in the specified order" (World Croquet Federation, 2022).

That is the whole game. Everyone is fighting over hoop 1. Someone runs it. Now everyone is fighting over hoop 2.

## What Golf Croquet does NOT have — and how we know

There is **no roquet** and **no croquet stroke** in Golf Croquet. Hitting an opponent's ball earns you nothing at all.

Here is how careful sourcing works, and it is worth watching: the words "roquet" and "croquet stroke" **do not appear anywhere in the WCF Rules of Golf Croquet, 6th edition**. So the honest statement is not "GC Rule X bans the croquet stroke" — there is no such rule to cite. The honest statement is: **a turn is one stroke (Rule 1.1.1), and the rulebook contains no croquet stroke and no roquet.** If a source hands you a rule number for a rule that "bans" the croquet stroke in GC, that source made it up.

## Where you start from

Play begins from the **start area** — within one yard of corner IV (World Croquet Federation, 2022, Rule 5.2.1). All four balls enter from there, in colour sequence.

:::reveal In Golf Croquet, you hit your opponent's ball hard and knock it off the court. What do you earn for that? ||| Nothing extra. A GC turn is a single stroke (Rule 1.1.1). There is no roquet and no croquet stroke in Golf Croquet — hitting another ball buys you no additional strokes. (It may still be a great tactical move, because you moved their ball away from the hoop.)

## Sources
- ${WCF_GC}`,
    },
    {
      slug: "gc-scoring-and-hoop-order",
      title: "6 · Golf Croquet: 7, 13 and 19-point games",
      section: "2 · Golf Croquet (WCF)",
      body: `**Code taught in this lesson: GOLF CROQUET (GC), World Croquet Federation.**

A GC game is a race to a **majority of the points contested**, and the rulebook offers three lengths.

Rule 1.4.1: "A game is a contest for the best of **7, 13 or 19 points**" (World Croquet Federation, 2022). Most club and social play is 7 or 13.

| Game | How the hoops run | If it goes the distance |
|---|---|---|
| **7-point** | The first **six** hoops are contested in order, hoop 1 to hoop 6 (Rule 1.4.2) | "If required, the seventh point is scored by contesting **hoop 1 again**" |
| **13-point** | The first **twelve** hoops are contested in order, hoop 1 to hoop 12 (Rule 1.4.3) | "If required, the 13th point is scored by contesting **hoop 3 again**" |
| **19-point** | Hoops 1–12, then hoops **3, 4, 1, 2, 11, 12** as hoops 13–18 (Rule 1.4.4) | A 19th point is hoop 3 again |

Notice the design. The odd total means **there are no draws** — someone must reach 4, 7 or 10. And the deciding hoop is a *specific named hoop*, not "whatever comes next": hoop 1 in a 7-point game, hoop 3 in a 13-point game. If you are 3–3 in a 7-point game, you know exactly where the game will be decided before it happens. So does your opponent.

## Running a hoop

Rule 7.1.1: to score a point, a ball "must move as the result of a stroke, either directly or indirectly... and pass through the hoop in order" (World Croquet Federation, 2022).

Read "**indirectly**" carefully. Your ball does not have to be hit *by you, directly, through the hoop*. If your partner ball, or even an opponent's ball, cannons into your ball and knocks it through the hoop in order, **the point is scored for the side that owns the ball that went through**. This produces one of GC's best tactics — the **promotion**, where you deliberately hit one ball into another to send *that* one through the hoop.

That also means you can score a hoop *for your opponent* by accident. Be careful what you push around near a hoop.

:::reveal You are playing a 13-point game and the score reaches 6–6. Which hoop decides the game, and why does knowing that matter? ||| Hoop 3, contested again (Rule 1.4.3). It matters because both players know in advance exactly where the decider will be played — so the positioning battle in the previous hoop is really a battle for good position at hoop 3.

## Sources
- ${WCF_GC}`,
      recallContent: [
        {
          prompt: "How many strokes are in a Golf Croquet turn, and what rule says so?",
          answer: "One. Rule 1.1.1 of the WCF Rules of Golf Croquet (6th ed.), with handicap extra strokes as the main exception.",
        },
        {
          prompt: "What is the fixed colour sequence in Golf Croquet, and why does it matter tactically?",
          answer:
            "Blue, red, black, yellow (Rule 1.2.1). It matters because you always know exactly who plays next and with which ball, so every stroke can be chosen against a known reply.",
        },
      ],
    },
    {
      slug: "gc-offside-rule",
      title: "7 · Golf Croquet: the offside (halfway) rule",
      section: "2 · Golf Croquet (WCF)",
      body: `**Code taught in this lesson: GOLF CROQUET (GC), World Croquet Federation.** This rule does not exist in Association Croquet or in American Six-Wicket. It is GC-only.

This is the rule people get wrong most often, including people who have played for years. It is **Rule 8**, and it exists to stop a player from parking a ball at the *next* hoop while everyone else is still fighting over the current one.

## The trigger — read it exactly

Rule 8.2.1: "a ball becomes an **offside ball** if **all of it is clearly beyond the halfway line for the hoop in order at the end of a turn in which a point is scored**" (World Croquet Federation, 2022).

Two things in that sentence are load-bearing, and both are usually misremembered:

1. **It is not "beyond halfway at any time."** The status is only checked **at the end of a turn in which a point is scored**. A hoop being run is the trigger. If nobody scores, nobody goes offside.
2. **The whole ball must be clearly beyond the line.** Touching or straddling the line is not offside.

## The halfway lines

Rule 8.1.1 defines a **halfway line** as "the line between each hoop and the next hoop in order." Rule 8.1.2 names four of them — lines **AF**, **BG**, **CH**, and **DE** (DE runs through the peg, perpendicular to the East and West boundaries).

Rule 8.1.3 then maps each hoop in order to its line. Rather than memorise the table, memorise the shape of it: **line DE — the line through the peg — is the default**, and it applies to "all others," including every deciding hoop (the 7th of a 7-point game, the 13th of a 13-point game, the 19th of a 19-point game). Only hoops 7/17 (line AF), 3/9/15 (line BG) and 5/11 (line CH) get a different line.

## The exemptions — and they are generous

Rule 8.3.1: a ball is **not** offside if it got to its position by:

- **(a)** the stroke just played; **or**
- **(b)** a stroke played by the **opposing** side; **or**
- **(c)** contact with an opponent ball at any time in the last turn in which the ball moved or was played.

In plain English: **you are never punished for being sent there by your opponent, and you are never punished for the stroke you just played.** The rule is aimed at deliberate parking, not at accidents.

## The penalty is not automatic

This is the second thing people get wrong. Being offside does not automatically move your ball. Rule 8.4.1: the **opponent may give an offside direction** — that is, they may *choose* to direct that your ball be next played from **either penalty area**. A penalty area is "a semi-circular area on the court, with a **radius of one yard**" centred on the points D and E (Rule 17.1.1).

They may also simply *not bother* — if your offside ball is somewhere useless to you, leaving it there is often better for them. And a ball stops being offside the moment the direction is given, or (if none is given) when the offside opponent plays a stroke (Rule 8.2.2).

:::reveal Your ball is sitting well beyond the halfway line when your opponent runs the hoop. Are you automatically offside, and are you automatically moved? ||| Not necessarily on either count. You are offside only if ALL of the ball is clearly beyond the halfway line at the end of a turn in which a point was scored (Rule 8.2.1) AND none of the exemptions in Rule 8.3.1 apply — you are exempt if you got there by the stroke just played, by a stroke of the opposing side, or by contact with an opponent ball in the last turn the ball moved. Even then, nothing moves automatically: the opponent MAY give an offside direction sending the ball to a penalty area (Rule 8.4.1), but they can also choose not to.

## Sources
- ${WCF_GC}`,
      recallContent: [
        {
          prompt: "What are the three legal game lengths in Golf Croquet?",
          answer: "Best of 7, 13 or 19 points (Rule 1.4.1). The odd totals mean a GC game cannot be drawn.",
        },
        {
          prompt: "Can a ball score a hoop without you hitting it through directly?",
          answer:
            "Yes. Rule 7.1.1 says the ball may pass through the hoop 'directly or indirectly' — so a ball knocked through by another ball scores for the side that owns it. That includes scoring for your opponent by accident.",
        },
      ],
    },
    {
      slug: "gc-faults-and-jump-shots",
      title: "8 · Golf Croquet: faults, and the truth about jump shots",
      section: "2 · Golf Croquet (WCF)",
      body: `**Code taught in this lesson: GOLF CROQUET (GC), World Croquet Federation.**

## Jump shots: a masterclass in not inventing a rule

Watch high-level Golf Croquet for ten minutes and you will see a player **jump** their ball over an opponent's ball to run a hoop. It looks illegal. It is not.

Now here is the part that matters more than the shot. **The word "jump" does not appear anywhere in the WCF Rules of Golf Croquet, 6th edition.** There is no "Rule N: jump shots are permitted." So this course will not give you one, and if another source does, that source is fabricating.

The accurate way to say it: **a jump shot is legal by omission.** Nothing forbids it, and it is bounded by the general **fault list in Rule 11.2** (World Croquet Federation, 2022). The three faults that most often catch a jump shot are:

- **Rule 11.2.3** — striking the ball with any part of the mallet other than an **end-face**. (Scooping with the side of the mallet head is a fault.)
- **Rule 11.2.6** — a **crush**: causing a ball, "while still in contact with the mallet, to touch a hoop, the peg or... another ball."
- **Rule 11.2.10** — **damaging the court surface.** A jump shot driven into the turf gouges the lawn; that is a fault, and it is also how you get uninvited from a club.

So the true sentence is: *you may jump, and you must do it cleanly, with the end-face of the mallet, without crushing and without wrecking the lawn.*

(For contrast, the Association Croquet Laws *do* mention jumping once — Law 29.2.3.2 refers to "a single-ball stroke in which the striker is attempting to make the striker's ball **jump**", in the context of when court damage or mallet contact counts as a fault (World Croquet Federation, 2021). Two codes, two different treatments of the same shot. This is exactly why you always name the code.)

## The general lesson: rulebooks are not the whole law

One more thing, and it will save you an argument one day. The 7th-edition AC Laws and the 6th-edition GC Rules are the current rulebooks — but they are **amended by Official Rulings** issued by the WCF's rules committees between editions. For example, an Association Croquet Laws Committee Official Ruling effective **1 November 2025** amended Law 48.4 (playing out of sequence in Alternate Stroke Doubles) (World Croquet Federation, 2025).

You do not need to know that ruling. You need to know the *pattern*: **the PDF plus the current rulings is the law, not the PDF alone.** Before you argue a fine point in a tournament, check the governing body's rulings page.

:::reveal A player tells you "Golf Croquet Rule 11.4 permits jump shots." What is wrong with that sentence? ||| No such permission exists. The word "jump" does not appear anywhere in the WCF Rules of Golf Croquet, 6th edition. Jump shots are legal by OMISSION — nothing forbids them — and are bounded by the general fault list in Rule 11.2 (strike with an end-face, no crush, no damage to the court). Anyone quoting a rule number that "permits" jump shots in GC is inventing it.

## Sources
- ${WCF_GC}
- ${WCF_AC}
- World Croquet Federation, Association Croquet Laws Committee. (2025). *Official ruling: Alternate stroke doubles, effective 1 November 2025*. https://worldcroquet.org/wp-content/uploads/2025/11/ACLC-Official-Ruling-ASD-1.11.25.pdf`,
      recallContent: [
        {
          prompt: "In Golf Croquet, what triggers the check for whether a ball is offside?",
          answer:
            "The end of a turn in which a point is scored (Rule 8.2.1). If no hoop is scored, nobody goes offside — it is not a 'beyond halfway at any time' rule.",
        },
        {
          prompt: "Name two of the three exemptions that stop a ball being offside in Golf Croquet.",
          answer:
            "Any two of (Rule 8.3.1): it got there by the stroke just played; it got there by a stroke played by the opposing side; or it got there by contact with an opponent ball in the last turn the ball moved or was played.",
        },
      ],
    },
    {
      slug: "quiz-gc",
      title: "9 · Section quiz: Golf Croquet",
      section: "2 · Golf Croquet (WCF)",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How many strokes does a Golf Croquet turn contain?",
            options: ["As many as you can earn", "One (Rule 1.1.1), with handicap extra strokes as the main exception", "Two", "Four — one per ball"],
            correctIndex: 1,
            explanation:
              "Rule 1.1.1: each turn contains one stroke. This is the single biggest difference from Association Croquet, where earned extra strokes build breaks.",
            sourceLessonSlug: "gc-how-a-turn-works",
          },
          {
            prompt: "In Golf Croquet, what do you earn by hitting an opponent's ball?",
            options: ["An extra stroke", "A croquet stroke", "Nothing extra — there is no roquet and no croquet stroke in GC", "One point"],
            correctIndex: 2,
            explanation:
              "The words 'roquet' and 'croquet stroke' do not appear anywhere in the WCF Rules of Golf Croquet. Hitting a ball can still be a strong tactical move — but it buys no strokes.",
            sourceLessonSlug: "gc-how-a-turn-works",
          },
          {
            prompt: "What is the fixed colour sequence of play in Golf Croquet?",
            options: ["Blue, black, red, yellow", "Blue, red, black, yellow", "Red, blue, yellow, black", "Whatever order the players agree"],
            correctIndex: 1,
            explanation:
              "Rule 1.2.1. One side plays blue and black, the other red and yellow. Because the sequence is fixed, you always know who shoots next — which is what makes GC tactical.",
            sourceLessonSlug: "gc-how-a-turn-works",
          },
          {
            prompt: "In Golf Croquet, who scores the hoop point?",
            options: [
              "The side whose ball first runs the hoop in order",
              "The side whose ball is closest to the hoop when the turn ends",
              "Every ball that eventually goes through",
              "The side that played the last stroke",
            ],
            correctIndex: 0,
            explanation:
              "Rule 1.3.2: the point goes to the side whose ball FIRST runs the hoop in order; both sides then move on and contest the next hoop.",
            sourceLessonSlug: "gc-how-a-turn-works",
          },
          {
            prompt: "Which of these is NOT a legal Golf Croquet game length?",
            options: ["7 points", "13 points", "19 points", "26 points"],
            correctIndex: 3,
            explanation:
              "Rule 1.4.1 allows best of 7, 13 or 19. Twenty-six is the point total of an Association Croquet or American Six-Wicket game — a different code entirely.",
            sourceLessonSlug: "gc-scoring-and-hoop-order",
          },
          {
            prompt: "In a 13-point Golf Croquet game that reaches 6–6, which hoop is contested for the deciding point?",
            options: ["Hoop 13", "Hoop 1 again", "Hoop 3 again", "Whichever hoop the winner of the toss chooses"],
            correctIndex: 2,
            explanation:
              "Rule 1.4.3. In a 7-point game the decider is hoop 1 again (Rule 1.4.2). Both players know the venue of the decider in advance — so the previous hoop is really a fight for position at the decider.",
            sourceLessonSlug: "gc-scoring-and-hoop-order",
          },
          {
            prompt: "Can a ball score a Golf Croquet hoop point without being struck directly through it?",
            options: [
              "No — only a direct strike scores",
              "Yes — Rule 7.1.1 allows the ball to pass through 'directly or indirectly', so a ball knocked through by another ball scores",
              "Only in handicap play",
              "Only if the referee agrees",
            ],
            correctIndex: 1,
            explanation:
              "This is the basis of the 'promotion' tactic — and also of the horrible accident where you knock an opponent's ball through the hoop and score it for them.",
            sourceLessonSlug: "gc-scoring-and-hoop-order",
          },
          {
            prompt: "What exactly triggers the offside check in Golf Croquet (Rule 8.2.1)?",
            options: [
              "A ball crossing the halfway line at any moment",
              "The end of a turn in which a point is scored",
              "The start of every turn",
              "A referee's call",
            ],
            correctIndex: 1,
            explanation:
              "Offside is only assessed at the end of a turn in which a hoop is scored, and the whole ball must be clearly beyond the halfway line. No hoop scored, no offside.",
            sourceLessonSlug: "gc-offside-rule",
          },
          {
            prompt: "Which of these makes a ball EXEMPT from being offside in Golf Croquet?",
            options: [
              "It was sent there by a stroke played by the opposing side",
              "It has already run its hoop",
              "It belongs to the player with the higher handicap",
              "It is within a yard of a boundary",
            ],
            correctIndex: 0,
            explanation:
              "Rule 8.3.1 lists three exemptions: the stroke just played, a stroke played by the opposing side, or contact with an opponent ball in the last turn the ball moved. You are never punished for where your opponent put you.",
            sourceLessonSlug: "gc-offside-rule",
          },
          {
            prompt: "What actually happens to an offside ball in Golf Croquet?",
            options: [
              "It is automatically moved to a penalty area",
              "It is removed from the game",
              "Nothing automatic — the opponent MAY give an offside direction, sending it to be played from a penalty area",
              "Its side loses the hoop",
            ],
            correctIndex: 2,
            explanation:
              "Rule 8.4.1. The offside opponent chooses. If the offside ball is useless to you where it sits, they will often just leave it there.",
            sourceLessonSlug: "gc-offside-rule",
          },
          {
            prompt: "How big is a Golf Croquet penalty area?",
            options: [
              "A semi-circle of one yard radius, centred on point D or E",
              "A full circle of three yards radius",
              "A square yard in each corner",
              "The whole area behind the halfway line",
            ],
            correctIndex: 0,
            explanation: "Rule 17.1.1 defines the penalty area as a semi-circular area of one-yard radius.",
            sourceLessonSlug: "gc-offside-rule",
          },
          {
            prompt: "What is the accurate statement about jump shots in Golf Croquet?",
            options: [
              "They are banned by Rule 11.2",
              "They are expressly permitted by a named rule",
              "The word 'jump' appears nowhere in the GC Rules — they are legal by omission, bounded by the fault list in Rule 11.2",
              "They are legal only in handicap play",
            ],
            correctIndex: 2,
            explanation:
              "There is no rule permitting or banning them. Anyone citing a GC rule number that 'permits jump shots' has invented it. What binds them is the general fault list: end-face contact, no crush, no court damage.",
            sourceLessonSlug: "gc-faults-and-jump-shots",
          },
          {
            prompt: "Which of these IS a fault under GC Rule 11.2?",
            options: [
              "Running a hoop backwards by accident",
              "Causing a ball to touch a hoop, the peg or another ball while it is still in contact with the mallet (a crush)",
              "Scoring a hoop for your opponent",
              "Playing out of the start area",
            ],
            correctIndex: 1,
            explanation:
              "Rule 11.2.6 — the crush. Also on the list: striking with any part of the mallet other than an end-face (11.2.3) and damaging the court surface (11.2.10).",
            sourceLessonSlug: "gc-faults-and-jump-shots",
          },
          {
            prompt: "Where does Golf Croquet play begin from?",
            options: ["The centre peg", "Anywhere on the boundary", "The start area — within one yard of corner IV", "Corner I"],
            correctIndex: 2,
            explanation: "Rule 5.2.1. All four balls enter from the start area, in the fixed colour sequence.",
            sourceLessonSlug: "gc-how-a-turn-works",
          },
          {
            prompt: "Why is 'the 6th-edition PDF is the complete law of Golf Croquet' not quite true?",
            options: [
              "Because clubs may rewrite it",
              "Because the rulebooks are amended between editions by Official Rulings from the WCF's rules committees",
              "Because the WCF has no authority over GC",
              "Because each country writes its own version",
            ],
            correctIndex: 1,
            explanation:
              "The PDF plus the current Official Rulings is the law. The AC Laws Committee, for instance, issued a ruling effective 1 November 2025 amending Law 48.4. Check the rulings page before arguing a fine point.",
            sourceLessonSlug: "gc-faults-and-jump-shots",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 — Association Croquet (WCF). The full game: roquet → croquet → continuation.
    // ══════════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ac-objective-and-26-points",
      title: "10 · Association Croquet: the objective",
      section: "3 · Association Croquet (WCF)",
      body: `**Code taught in this lesson: ASSOCIATION CROQUET (AC), governed by the World Croquet Federation.** Rulebook: *The WCF Laws of Association Croquet*, 7th edition, approved by the WCF Council on 24 January 2021.

Association Croquet is the deep game. It is harder to learn than Golf Croquet and it rewards planning far more. It is also the code where a single turn can end the game.

## What you are trying to do

Law 1.1: "The objective of the game is for each side to make each ball belonging to the side score **12 hoop points and a peg point, a total of 26 points**, before the other side" (World Croquet Federation, 2021).

Law 7.3.1: "A game is won... by the side whose balls are **both** pegged out."

Read that word **both**. It is not enough to get one ball around. You must bring **both** of your balls all the way through twelve hoops and then hit the peg. A side that races one ball home and abandons the other loses.

## Sides and balls

Law 2.3: "One side plays the **blue and black** balls and the other the **red and yellow** balls (or green and brown versus pink and white...)." Four balls, two per side. In singles you play **both** of your side's balls — and crucially, **you choose which one to play at the start of each turn.** That choice is a large part of the strategy.

## Twelve hoop points from six hoops

Law 2.4: a ball scores a hoop point "by passing through the correct hoop in the order and direction shown as hoops 1 to 12." The last six of those twelve "are also known as **1-back, 2-back, 3-back, 4-back, penultimate and rover**."

So the six physical hoops are each run twice, and the second circuit has its own names. When a player says a ball is "on 4-back," they mean it is going for the tenth hoop point of its circuit. When they say a ball is a **rover**, they mean it has scored all 12 and only the peg remains.

## The peg

Law 2.5 and Law 22.1.1: only a **rover** ball may score the peg point, and it does so "by hitting the peg as a consequence of a stroke." It is then **pegged out** — removed from the game entirely.

That creates a real strategic problem that has no equivalent in Golf Croquet: **pegging out your first ball takes it off the court.** Now you are playing one ball against your opponent's two. Strong players routinely leave a rover ball *on* the court rather than peg it out, because a ball is a tool, and removing your own tool to score a single point can lose you the game.

:::reveal Your first ball is a rover, sitting next to the peg. Why might a strong player deliberately NOT peg it out? ||| Because pegging out removes that ball from the game (Laws 2.5, 22.1.1), leaving you playing one ball against your opponent's two. Balls are tools — you use them to build breaks. A side must peg out BOTH balls to win (Law 7.3.1), so the peg point can wait until the second ball is also ready.

## Sources
- ${WCF_AC}`,
    },
    {
      slug: "ac-roquet-croquet-continuation",
      title: "11 · Association Croquet: roquet, croquet, continuation",
      section: "3 · Association Croquet (WCF)",
      body: `**Code taught in this lesson: ASSOCIATION CROQUET (AC), World Croquet Federation.** None of this exists in Golf Croquet.

This is the engine of the game. Learn these four moves and you understand Association Croquet.

## 1. The roquet — you hit another ball

Law 17.1: "The striker's ball makes a **roquet** when there is any contact between it and a **live** ball during and as a consequence of a stroke" (World Croquet Federation, 2021).

Consequence (Law 17.3.4): your ball "becomes a ball in hand at the end of the stroke and the striker **must** take croquet." Not *may*. **Must.**

"Live" matters. A ball you have already roqueted this turn is **dead** to you until you score a hoop — see the renewal rule in the next lesson.

## 2. The croquet stroke — you pick your ball up

Law 18.3: "The striker prepares for a croquet stroke by placing the striker's ball on the ground in any position **in contact with** the ball from which croquet will be taken."

You physically pick your ball up and set it touching the ball you just hit. Then you strike **your** ball, and Law 18.5 requires that the stroke "must play into the croqueted ball and **move or shake it**." (If it does not move, you have faulted.)

**This is the whole magic of the game.** Because your ball and their ball start in contact, one stroke moves *both of them*, and by changing the angle and the force you control roughly where each one ends up. You are not just advancing yourself — you are **placing another ball where you will want it three strokes from now.**

Law 18.6: the croqueted ball immediately becomes **dead** to you.

## 3. The continuation stroke — you get one more

Law 19.1: "After the striker's ball scores a hoop point for itself, **or after a croquet stroke**, the striker becomes entitled to play a continuation stroke."

One free stroke. And Law 19.3 is strict: continuation strokes **may not be accumulated**. You cannot bank them. Use it or lose it.

## 4. The turn ends

Law 7.6.1: the turn ends if, in a stroke other than a croquet stroke, "the striker's ball **neither makes a roquet nor scores a hoop point** for itself."

That is the whole loop:

> **roquet → take croquet → continuation stroke → roquet again → take croquet → continuation...** and the instant you neither hit a live ball nor run your hoop, you sit down.

## Why this is the most elegant rule in the sport

Put the four laws together and you get a game where **every stroke has two jobs**: advance yourself, and arrange the furniture for the strokes after this one. A good player is not thinking about this hoop. They are thinking about where all four balls will sit when they arrive at the hoop after next.

:::reveal In Association Croquet you roquet an opponent's ball. What are you now REQUIRED to do, and what does that let you do? ||| You MUST take croquet (Law 17.3.4). You pick your ball up and place it in contact with the ball you hit (Law 18.3), then strike your own ball so that it moves the croqueted ball (Law 18.5). Because one stroke moves both balls, you can place the other ball where you'll want it later — and you then get a continuation stroke (Law 19.1).

## Sources
- ${WCF_AC}`,
      recallContent: [
        {
          prompt: "How many points must an Association Croquet side score to win, and what must happen to both of its balls?",
          answer:
            "26 points — each of the two balls scores 12 hoop points plus the peg point (Law 1.1). The game is won by the side whose balls are BOTH pegged out (Law 7.3.1).",
        },
        {
          prompt: "What is a 'rover' ball in Association Croquet?",
          answer: "A ball that has scored all 12 of its hoop points. Only a rover may score the peg point (Laws 2.4, 2.5).",
        },
      ],
    },
    {
      slug: "ac-the-break",
      title: "12 · Association Croquet: how a break is possible at all",
      section: "3 · Association Croquet (WCF)",
      body: `**Code taught in this lesson: ASSOCIATION CROQUET (AC), World Croquet Federation.**

Last lesson gave you a loop that ends as soon as you run out of live balls to hit. So how does anyone play a 91-stroke turn? One law.

## The renewal rule — Law 2.6.10

> "The striker's ball may take croquet **only once from each of the other balls** in play during a turn **unless it scores a hoop point for itself**, in which case the right to roquet and take croquet once from each of the other balls in play is **renewed**." (World Croquet Federation, 2021, Law 2.6.10)

Read it twice. It is the whole game.

- You may use each of the other three balls **once** per turn.
- **Running your hoop resets that count.** All three become live again.

So the loop is not "hit the balls until you run out." It is:

> use the balls → **run your hoop** → the balls come back to life → use them again → **run your next hoop** → ...

That is a break. It is the same mechanism as a snooker break: score, and you buy the right to keep going.

## "Break" is not a defined term — and that is worth knowing

Here is another honesty check, and it is the kind of thing that separates a course you can trust from one you cannot.

**The word "break" is not defined in the AC Laws.** It is not in the Glossary. It appears only incidentally in the 7th edition (for instance, Law 59.2.3 mentions "a player who is making a break"). **There is no law number you can cite for "break."**

So this course does not give you one. Instead it cites the WCF's own Association Croquet information page, which describes the concept in plain words: the game "is based on the concept of a 'break' (as in snooker, billiards and pool) in which the right may be earned to play a succession of extra strokes," and "it is possible to play a break of up to **91 strokes**" (World Croquet Federation, n.d.).

That is the honest citation. If a source hands you "AC Law 12.4 defines a break," it is fabricating.

## Wiring: the defensive half of the game

If breaks are the attacking half, **wiring** is the defensive half.

Law 16.3 defines it: a ball is **wired** from another ball if any part of a hoop or the peg would impede the direct course of the ball toward the target, or would impede the swing of the mallet, or if the ball would have to pass through a hoop to hit the target, or if the ball lies within the jaws of a hoop (World Croquet Federation, 2021).

In other words: **you can hide a ball behind a hoop.** A wired ball cannot shoot at you.

But the Laws will not let you be *too* clever. Law 16.1 gives a **wiring lift**: at the start of a turn, if the **opponent** is responsible for the position of a ball of the striker's side that is not touching another ball and is wired from **all** other balls, the striker may either play as the balls lie **or lift that ball** and play it from any unoccupied point on either baulk-line. And Law 16.5.3 settles the arguments: borderline cases are decided **as wired**.

So wiring an opponent's ball on purpose can hand them a free lift. Wiring is a scalpel, not a hammer.

:::reveal What single law makes a long Association Croquet break possible, and what does it say? ||| Law 2.6.10. You may take croquet only once from each of the other balls in a turn — UNLESS you score a hoop point for yourself, in which case your right to roquet and take croquet from each ball is renewed. Running your hoop brings all the other balls back to life, so you can keep going.

## Sources
- ${WCF_AC}
- ${WCF_AC_PAGE}`,
      recallContent: [
        {
          prompt: "In Association Croquet, what must you do immediately after making a roquet?",
          answer:
            "You must take croquet (Law 17.3.4): place your ball in contact with the roqueted ball (Law 18.3) and play a stroke that moves or shakes it (Law 18.5). You then get one continuation stroke (Law 19.1).",
        },
        {
          prompt: "When does an Association Croquet turn end?",
          answer:
            "Law 7.6.1: when, in a stroke other than a croquet stroke, your ball neither makes a roquet nor scores a hoop point for itself.",
        },
      ],
    },
    {
      slug: "quiz-ac",
      title: "13 · Section quiz: Association Croquet",
      section: "3 · Association Croquet (WCF)",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How does a side win a game of Association Croquet?",
            options: [
              "By scoring 13 points with one ball",
              "By having BOTH of its balls score 12 hoop points and the peg point — 26 points — and both pegged out",
              "By running all six hoops first",
              "By reaching 7 points",
            ],
            correctIndex: 1,
            explanation:
              "Law 1.1 sets the 26-point objective; Law 7.3.1 says the game is won by the side whose balls are BOTH pegged out. Racing one ball home and abandoning the other loses.",
            sourceLessonSlug: "ac-objective-and-26-points",
          },
          {
            prompt: "What is a 'rover' ball?",
            options: [
              "A ball that has been pegged out",
              "A ball that has scored all 12 of its hoop points and may now score the peg",
              "The opponent's ball you are dead on",
              "A ball outside the boundary",
            ],
            correctIndex: 1,
            explanation:
              "Law 2.4 names the last six hoop points 1-back through rover. Only a rover ball may score the peg point (Laws 2.5, 22.1.1).",
            sourceLessonSlug: "ac-objective-and-26-points",
          },
          {
            prompt: "Why might a strong player deliberately NOT peg out their rover ball?",
            options: [
              "Because pegging out is illegal before the opponent scores",
              "Because pegging out removes that ball from the game, leaving them one ball against the opponent's two",
              "Because it costs a point",
              "Because the peg is out of bounds",
            ],
            correctIndex: 1,
            explanation:
              "A ball on the court is a tool for building breaks. Since a side must peg out BOTH balls to win, the peg point can wait until the second ball is also ready.",
            sourceLessonSlug: "ac-objective-and-26-points",
          },
          {
            prompt: "What is a roquet (Law 17.1)?",
            options: [
              "Running a hoop",
              "Any contact between the striker's ball and a LIVE ball during and as a consequence of a stroke",
              "Hitting the peg",
              "Placing your ball against another ball",
            ],
            correctIndex: 1,
            explanation:
              "And the consequence is compulsory: after a roquet the striker MUST take croquet (Law 17.3.4).",
            sourceLessonSlug: "ac-roquet-croquet-continuation",
          },
          {
            prompt: "After making a roquet, what does the striker do?",
            options: [
              "Play on from where the ball stopped",
              "Take croquet: pick the ball up and place it in contact with the roqueted ball, then play a stroke that moves it",
              "Take two free strokes from the peg",
              "End the turn",
            ],
            correctIndex: 1,
            explanation:
              "Law 18.3 (place in contact) and Law 18.5 (the stroke must move or shake the croqueted ball). Because one stroke moves both balls, the croquet stroke is how you arrange the court in your favour.",
            sourceLessonSlug: "ac-roquet-croquet-continuation",
          },
          {
            prompt: "What does Law 19.1 grant, and what does Law 19.3 forbid?",
            options: [
              "A continuation stroke after a croquet stroke or a hoop point — and continuation strokes may NOT be accumulated",
              "Two continuation strokes — which may be banked for later",
              "A free lift — which may not be refused",
              "An extra ball — which may not be pegged out",
            ],
            correctIndex: 0,
            explanation:
              "One continuation stroke, use it or lose it. You cannot save them up.",
            sourceLessonSlug: "ac-roquet-croquet-continuation",
          },
          {
            prompt: "When does an Association Croquet turn end (Law 7.6.1)?",
            options: [
              "After four strokes",
              "When, in a stroke other than a croquet stroke, the striker's ball neither makes a roquet nor scores a hoop point for itself",
              "When the striker chooses to stop",
              "When a ball goes off court",
            ],
            correctIndex: 1,
            explanation:
              "Miss the ball and miss the hoop, and you sit down. That is why every stroke tries to do two jobs at once.",
            sourceLessonSlug: "ac-roquet-croquet-continuation",
          },
          {
            prompt: "Which law makes a long break possible?",
            options: [
              "Law 1.1 — the 26-point objective",
              "Law 2.6.10 — you may take croquet once from each other ball per turn, UNLESS you score a hoop, which renews the right",
              "Law 16.3 — the definition of wiring",
              "Law 19.3 — continuation strokes may not be accumulated",
            ],
            correctIndex: 1,
            explanation:
              "Running your hoop brings all the other balls back to life. Score, and you buy the right to keep going — exactly like a snooker break.",
            sourceLessonSlug: "ac-the-break",
          },
          {
            prompt: "Which statement about the word 'break' in the AC Laws is true?",
            options: [
              "It is defined in the Glossary of the 7th edition",
              "It is defined in Law 2.6",
              "It is NOT a defined term — there is no law number to cite for it; the WCF's Association Croquet information page is the honest source",
              "It appears nowhere in the Laws at all",
            ],
            correctIndex: 2,
            explanation:
              "It appears only incidentally (e.g. Law 59.2.3) and is not in the Glossary. Any source giving you 'the law that defines a break' is inventing it.",
            sourceLessonSlug: "ac-the-break",
          },
          {
            prompt: "How many balls are in play, and how are they divided?",
            options: [
              "Four — blue and black against red and yellow (Law 2.3)",
              "Two — one per player",
              "Six — one per hoop",
              "Four, but each player owns one and plays alone",
            ],
            correctIndex: 0,
            explanation:
              "Law 2.3. In singles you play BOTH of your side's balls, and you choose which one to play at the start of each turn — a big part of the strategy.",
            sourceLessonSlug: "ac-objective-and-26-points",
          },
          {
            prompt: "What does Law 16.3 define?",
            options: [
              "The croquet stroke",
              "Wiring — when a hoop or the peg impedes a ball's direct course to a target ball, or impedes the mallet swing, or the ball lies in a hoop's jaws",
              "The peg point",
              "The order of play",
            ],
            correctIndex: 1,
            explanation:
              "Wiring is the defensive half of the game: a wired ball cannot shoot at you because a hoop or the peg is in the way.",
            sourceLessonSlug: "ac-the-break",
          },
          {
            prompt: "What is the wiring lift (Law 16.1), and why does it make wiring risky?",
            options: [
              "It lets you lift any ball at any time — so wiring is pointless",
              "If the OPPONENT is responsible for a ball of yours being wired from all other balls and not touching another ball, you may lift it and play from either baulk-line — so wiring an opponent can hand them a free lift",
              "It lets the referee reposition balls",
              "It only applies in handicap play",
            ],
            correctIndex: 1,
            explanation:
              "And Law 16.5.3 decides borderline cases AS WIRED. Wiring is a scalpel, not a hammer.",
            sourceLessonSlug: "ac-the-break",
          },
          {
            prompt: "In Association Croquet, what does it mean that a ball is 'dead' to you?",
            options: [
              "It has been pegged out",
              "You have already taken croquet from it this turn, so you may not roquet it again until you score a hoop point",
              "It is off the court",
              "It belongs to your opponent",
            ],
            correctIndex: 1,
            explanation:
              "Law 18.6 makes the croqueted ball dead immediately; Law 2.6.10 renews your right to it when you score a hoop point for yourself.",
            sourceLessonSlug: "ac-the-break",
          },
          {
            prompt: "What must a croquet stroke do to the croqueted ball (Law 18.5)?",
            options: [
              "Send it out of bounds",
              "Move or shake it",
              "Send it through a hoop",
              "Leave it exactly where it was",
            ],
            correctIndex: 1,
            explanation:
              "The stroke must play into the croqueted ball and move or shake it. If it does not move at all, that is a fault.",
            sourceLessonSlug: "ac-roquet-croquet-continuation",
          },
          {
            prompt: "Which of these is the correct AC loop?",
            options: [
              "hoop → peg → hoop → peg",
              "roquet → take croquet → continuation stroke → (roquet again, or run a hoop) ...",
              "one stroke, then the opponent plays",
              "four strokes per turn, always",
            ],
            correctIndex: 1,
            explanation:
              "The loop ends the instant a non-croquet stroke neither roquets a live ball nor runs your hoop (Law 7.6.1).",
            sourceLessonSlug: "ac-roquet-croquet-continuation",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 — Strategy. NOTE: break-building vocabulary (pioneer, pivot, leave) is COACHING
    // vocabulary, not Law vocabulary. The lessons say so explicitly and cite the Law that the
    // tactic exploits, rather than inventing a law number for the tactic itself.
    // ══════════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "the-four-ball-break",
      title: "14 · Strategy: the four-ball break",
      section: "4 · Strategy: think like a break-builder",
      body: `**Code taught in this lesson: ASSOCIATION CROQUET (AC), World Croquet Federation.**

**A vocabulary warning first, because it matters.** The words in this lesson — *break*, *pioneer*, *pivot*, *leave* — are **coaching vocabulary**, not Law vocabulary. They are used by every coach and commentator in the sport, and none of them is a defined term in the WCF Laws. So no lesson in this section will hand you a law number for a *tactic*. What each tactic exploits is a real, citable Law, and that is what gets cited.

## The problem the break solves

You know from Law 2.6.10 that running a hoop renews your right to use all three other balls. So a break is simply this: **arrive at every hoop with the balls you need already sitting where you need them.**

The bad version of croquet is: hit a ball, take croquet, hope. The good version is: **before you run this hoop, you have already sent balls to the next two hoops.**

## The four-ball break, in plain English

Give the three balls that are not yours three jobs:

| Job | Coaching name | Where it sits |
|---|---|---|
| The ball waiting at **your next hoop** | **pioneer** | Just beside the next hoop |
| The ball waiting at **the hoop after that** | **pioneer** (the forward one) | Just beside the hoop after next |
| The ball parked **in the middle of the court** | **pivot** | Near the peg |

Now the cycle, one hoop at a time:

1. **Roquet** the ball at your current hoop.
2. **Take croquet**, and use that stroke to do *two* jobs: put yourself in front of the hoop, and send that ball off to become the pioneer for a later hoop.
3. **Run the hoop** with your continuation stroke. All three balls are now live again (Law 2.6.10).
4. **Roquet the pivot** in the middle, take croquet off it, and use that stroke to travel to your next hoop — where your pioneer is already waiting.
5. Repeat.

The pivot near the peg is the trick that makes the whole thing stable: it is close to *everything*, so there is always a ball within reach from the middle of the court.

## Why this is the real skill

Look at what step 2 asks of you. **One stroke, two outcomes.** You must land your own ball in front of a hoop *and* land the other ball twenty yards away next to a different hoop, with the same swing. That is a *croquet stroke* (Law 18.3: your ball starts in contact with theirs, so both move). Learning to control the ratio between the two balls — how far each travels, at what angle — is the single highest-leverage skill in Association Croquet.

Everything else — hitting long shots, running tight hoops — is secondary to this. Long straight shots are the *fallback* when your break falls apart.

## The honest truth about breaks

Most beginners' breaks collapse at hoop 3 or 4, because they took the easy croquet stroke instead of the correct one. The discipline that separates a 5-hoop break from a 12-hoop break is: **never take a croquet stroke that only solves this hoop.**

:::reveal In a four-ball break, what are the three jobs you give the other three balls? ||| A pioneer at your NEXT hoop; a second pioneer at the hoop AFTER that; and a pivot parked near the peg in the middle of the court. The pivot is close to everything, so you can always reach a ball from the centre. (These are coaching terms, not defined terms in the WCF Laws.)

## Sources
- ${WCF_AC}
- ${WCF_AC_PAGE}`,
    },
    {
      slug: "leaves-and-wiring",
      title: "15 · Strategy: the leave — winning while you are not playing",
      section: "4 · Strategy: think like a break-builder",
      body: `**Code taught in this lesson: ASSOCIATION CROQUET (AC), World Croquet Federation.**

Your break has to end eventually. What matters enormously — and what beginners never think about — is **what the court looks like when it does**.

The coaching word for that arrangement is a **leave**. (Again: coaching vocabulary, not a defined term in the Laws.) A good leave means your opponent's best available shot is still bad.

## The three questions a leave answers

1. **How far must my opponent shoot to hit anything?** Every extra yard is a bigger chance they miss.
2. **If they miss, what do I get?** A miss should hand *you* an easy break, not just an ordinary turn.
3. **Can they even see a target?** — which brings us to wiring.

## Wiring, used properly

Law 16.3 defines a ball as **wired** from another if a hoop or the peg would impede its direct course to the target, or impede the mallet swing, or if it would have to pass through a hoop to hit the target, or if it lies in a hoop's jaws (World Croquet Federation, 2021).

So you can hide behind a hoop. Excellent. But — and this is the bit that catches people — **Law 16.1 gives your opponent a wiring lift** if *you* are responsible for the position of one of their balls, it is not touching another ball, and it is wired from **all** other balls. They may then lift it and play from any unoccupied point on either baulk-line. Borderline cases are decided **as wired** (Law 16.5.3), which means the tie goes *against* the person who did the wiring.

**The practical rule that falls out of this:**

- Wiring an opponent's ball **from your own balls** (so they cannot shoot at you) is a strong idea — right up until you wire it from *everything*, at which point you may have given them a free lift to the baulk-line.
- The safer, more common leave is **distance plus angle**: put your two balls together, far away, so their only shot is a long one; and if they miss, their ball runs off somewhere useless while your two sit ready.

## The shot they have to take

Here is why leaves decide games. If you leave your opponent a **13-yard shot**, they will miss it most of the time — and if they miss, you have two balls in position and a break waiting. If you leave them a **3-yard shot**, they hit it, and now *they* have the break and you are watching.

The difference between those two leaves is one croquet stroke played thoughtfully at the end of your turn. **That is the game.**

## Golf Croquet has leaves too

In GC there is no croquet stroke, so you cannot arrange the court with a single stroke. But because the colour order is fixed (Rule 1.2.1), you always know exactly who plays next — so the "leave" question becomes: **what is the best thing my opponent can do with their one stroke, and can I make it worse?**

Common GC answers, all of them tactics rather than rules:

- **Block.** Put a ball in the line between their ball and the hoop.
- **Clear.** Hit their ball away from the hoop. It earns you nothing (one stroke per turn — Rule 1.1.1), but their ball is now twenty yards from where it wanted to be.
- **Promote.** Hit one ball into another to send *that* ball through the hoop — legal because Rule 7.1.1 allows a ball to run a hoop "directly or **indirectly**."
- **Jump.** Go over a blocking ball. Legal by omission, bounded by the fault list in Rule 11.2 (see Lesson 8).

:::reveal Your Association Croquet break has ended. What is the single question that should decide where you leave the balls? ||| "What is the best shot my opponent now has, and what do I get when they miss it?" A good leave forces a long, low-percentage shot AND leaves your two balls arranged so that a miss hands you a break. Distance plus angle usually beats clever wiring, because wiring a ball from ALL other balls can hand them a free wiring lift (Law 16.1).

## Sources
- ${WCF_AC}
- ${WCF_GC}`,
      recallContent: [
        {
          prompt: "What is the pivot in a four-ball break, and why is it placed near the peg?",
          answer:
            "The pivot is the ball parked in the middle of the court. It sits near the peg because the centre is close to everything — so you can always reach a ball from the middle and travel on to your next hoop.",
        },
        {
          prompt: "Why is one croquet stroke expected to do two jobs?",
          answer:
            "Because your ball starts in contact with the croqueted ball (Law 18.3), one stroke moves both. The good version puts you in front of your hoop AND sends the other ball ahead to become a pioneer at a later hoop.",
        },
      ],
    },
    {
      slug: "practice-your-thinking",
      title: "16 · Practice: think it through",
      section: "4 · Strategy: think like a break-builder",
      body: `Before the drill, one habit worth building — and it is the habit that actually makes people better at this game.

## Keep a match log

Strong croquet players are not the ones with the best swing. They are the ones who **know why they lost**. After every game you play — even a garden game — write four lines:

| Field | What to write |
|---|---|
| **Code** | Golf Croquet, Association Croquet, American Six-Wicket, or garden. Always name it. |
| **Where it turned** | The one moment the game changed hands. Be specific: "3–3 in a 7-point GC game, I was blocked at hoop 4 and cleared instead of jumping." |
| **The stroke I got wrong** | Not the one you *missed* — the one you **chose** wrong. Those are different, and only one of them is fixable this week. |
| **What I'll drill** | One thing. "Croquet stroke: send the other ball 15 yards while I travel 5." |

Do that for ten games and you will have a written map of your own weaknesses. That is worth more than ten hours of hitting balls at nothing.

Now the drill.`,
      exercise: {
        instructions:
          "Fill in each blank with the term or number from this course. Spelling and capitalisation are forgiving. Every answer is stated somewhere in Sections 1–4.",
        items: [
          {
            prompt: "In Association Croquet, hitting a live ball with your ball is called a ___.",
            answer: "roquet",
            explanation: "Law 17.1. The consequence is compulsory: you must then take croquet (Law 17.3.4).",
          },
          {
            prompt: "After a roquet you must pick your ball up and place it in contact with the ball you hit. That stroke is called the ___ stroke.",
            answer: "croquet",
            explanation: "Law 18.3. Because both balls start in contact, one stroke moves both — which is how you arrange the court.",
          },
          {
            prompt: "After a croquet stroke, or after running a hoop, you get one ___ stroke.",
            answer: "continuation",
            explanation: "Law 19.1 grants it; Law 19.3 forbids accumulating them.",
          },
          {
            prompt: "In a four-ball break, the ball waiting for you at your next hoop is called a ___.",
            answer: "pioneer",
            explanation: "Coaching vocabulary, not a term defined in the WCF Laws.",
          },
          {
            prompt: "In a four-ball break, the ball parked in the middle of the court, near the peg, is the ___.",
            answer: "pivot",
            explanation: "The centre is close to everything, so there is always a ball within reach.",
          },
          {
            prompt: "Hiding a ball behind a hoop so it cannot shoot at another ball is called ___.",
            answer: "wiring",
            accept: ["wiring it", "to wire"],
            explanation: "Defined in Law 16.3 — but beware the wiring lift in Law 16.1.",
          },
          {
            prompt: "A side wins Association Croquet by scoring a total of ___ points.",
            answer: "26",
            accept: ["twenty-six", "twenty six"],
            explanation: "12 hoop points plus the peg point, for each of the side's two balls (Law 1.1).",
          },
          {
            prompt: "In Golf Croquet, a turn contains exactly ___ stroke(s).",
            answer: "one",
            accept: ["1"],
            explanation: "Rule 1.1.1. Handicap extra strokes are the main exception.",
          },
          {
            prompt: "The fixed Golf Croquet colour sequence is blue, red, black, and ___.",
            answer: "yellow",
            explanation: "Rule 1.2.1. Because it is fixed, you always know who shoots next.",
          },
          {
            prompt: "In Golf Croquet, a ball becomes ___ if all of it is clearly beyond the halfway line at the end of a turn in which a point is scored.",
            answer: "offside",
            explanation: "Rule 8.2.1 — and the penalty is not automatic; the opponent may give an offside direction (Rule 8.4.1).",
          },
          {
            prompt: "The law that renews your right to use all the other balls when you score a hoop point is Law 2.6.___.",
            answer: "10",
            explanation: "Law 2.6.10 — the one law that makes a long break possible.",
          },
          {
            prompt: "A standard WCF croquet court measures 28 by ___ yards.",
            answer: "35",
            accept: ["35 yards", "thirty-five"],
            explanation: "AC Law 4.1.1 and GC Rule 2.1.1, with a ±6 inch tolerance.",
          },
        ],
      },
      recallContent: [
        {
          prompt: "What is a 'leave', and what question does a good one answer?",
          answer:
            "The arrangement of the balls when your turn ends. A good leave answers: what is the best shot my opponent now has, and what do I get when they miss it? Force a long shot, and be positioned to punish a miss.",
        },
        {
          prompt: "Name two Golf Croquet tactics that do not exist as named rules.",
          answer:
            "Any two of: blocking (put a ball on their line to the hoop), clearing (hit their ball away), promoting (hit one ball into another to send it through the hoop — legal because Rule 7.1.1 allows 'indirect' running), and jumping (legal by omission, bounded by the fault list in Rule 11.2).",
        },
      ],
    },
    {
      slug: "quiz-strategy",
      title: "17 · Section quiz: strategy",
      section: "4 · Strategy: think like a break-builder",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "In a four-ball break, what is a 'pioneer'?",
            options: [
              "The ball you are currently playing",
              "A ball sent ahead to wait at a hoop you have not reached yet",
              "The ball parked near the peg",
              "A ball that has been pegged out",
            ],
            correctIndex: 1,
            explanation:
              "You keep pioneers at your next hoop and at the hoop after that, so you always arrive to a ball already in position. It is coaching vocabulary, not a term in the WCF Laws.",
            sourceLessonSlug: "the-four-ball-break",
          },
          {
            prompt: "Why is the pivot placed near the peg?",
            options: [
              "Because the Laws require it",
              "Because the centre of the court is close to everything, so a ball is always within reach",
              "Because it scores a point there",
              "Because it cannot be roqueted there",
            ],
            correctIndex: 1,
            explanation:
              "The pivot is the stabiliser of the break — from the middle you can reach a ball and travel on to your next hoop.",
            sourceLessonSlug: "the-four-ball-break",
          },
          {
            prompt: "What makes the croquet stroke the highest-leverage skill in Association Croquet?",
            options: [
              "It scores a point directly",
              "One stroke moves BOTH balls, so it must place your ball in front of the hoop AND send the other ball ahead as a pioneer",
              "It is the only legal stroke",
              "It cannot be faulted",
            ],
            correctIndex: 1,
            explanation:
              "Law 18.3 puts the two balls in contact before the stroke, so a single swing controls where both end up. Controlling the ratio between them is the core skill.",
            sourceLessonSlug: "the-four-ball-break",
          },
          {
            prompt: "Which of these is coaching vocabulary rather than a defined term in the WCF Laws?",
            options: ["Roquet", "Croquet stroke", "Pioneer", "Continuation stroke"],
            correctIndex: 2,
            explanation:
              "Roquet (Law 17.1), croquet stroke (Law 18.3) and continuation stroke (Law 19.1) are all defined in the Laws. Pioneer, pivot, leave and even 'break' are coaching terms — no law number exists for them.",
            sourceLessonSlug: "the-four-ball-break",
          },
          {
            prompt: "What is a 'leave'?",
            options: [
              "Conceding the game",
              "The arrangement of the balls on the court when your turn ends",
              "The moment your ball leaves the court",
              "A referee's ruling",
            ],
            correctIndex: 1,
            explanation:
              "A good leave forces your opponent into a long, low-percentage shot and positions your balls to punish a miss.",
            sourceLessonSlug: "leaves-and-wiring",
          },
          {
            prompt: "Why can wiring an opponent's ball backfire?",
            options: [
              "It is a fault",
              "If you are responsible for their ball being wired from ALL other balls (and it is not touching one), Law 16.1 may give them a free wiring lift to the baulk-line",
              "It costs you a continuation stroke",
              "It scores a point for them",
            ],
            correctIndex: 1,
            explanation:
              "And Law 16.5.3 decides borderline cases AS WIRED — the tie goes against the player who did the wiring. Wiring is a scalpel, not a hammer.",
            sourceLessonSlug: "leaves-and-wiring",
          },
          {
            prompt: "Which leave is generally safer than an all-out wiring leave?",
            options: [
              "Leaving both your balls in the middle of the court",
              "Distance plus angle: your two balls together, far away, so their only shot is long — and a miss hands you a break",
              "Leaving your balls on the boundary next to theirs",
              "Pegging out one of your balls",
            ],
            correctIndex: 1,
            explanation:
              "A 13-yard shot is missed most of the time; a 3-yard shot is hit. The difference between those two leaves is one thoughtful croquet stroke.",
            sourceLessonSlug: "leaves-and-wiring",
          },
          {
            prompt: "In Golf Croquet, what does 'clearing' an opponent's ball earn you?",
            options: [
              "An extra stroke",
              "A point",
              "No extra strokes at all — a turn is one stroke — but their ball is now far from the hoop it wanted",
              "A croquet stroke",
            ],
            correctIndex: 2,
            explanation:
              "Rule 1.1.1. GC tactics work by changing the position of the balls, not by earning strokes.",
            sourceLessonSlug: "leaves-and-wiring",
          },
          {
            prompt: "What is a 'promotion' in Golf Croquet, and why is it legal?",
            options: [
              "Hitting one ball into another so that the second ball runs the hoop — legal because Rule 7.1.1 allows a ball to run a hoop directly or INDIRECTLY",
              "Moving your ball up the colour sequence",
              "Being promoted to a lower handicap",
              "Running two hoops in one stroke",
            ],
            correctIndex: 0,
            explanation:
              "The same rule means you can accidentally score a hoop FOR your opponent by knocking their ball through. Be careful what you push around near a hoop.",
            sourceLessonSlug: "leaves-and-wiring",
          },
          {
            prompt: "Most beginners' Association Croquet breaks collapse because they...",
            options: [
              "hit too hard",
              "take the easy croquet stroke that only solves the current hoop, instead of the correct one that sets up the next two",
              "wire themselves",
              "peg out too early",
            ],
            correctIndex: 1,
            explanation:
              "The discipline that separates a 5-hoop break from a 12-hoop break: never take a croquet stroke that only solves this hoop.",
            sourceLessonSlug: "the-four-ball-break",
          },
          {
            prompt: "Which fixed feature of Golf Croquet makes its tactics calculable?",
            options: [
              "The offside rule",
              "The fixed colour sequence (Rule 1.2.1) — you always know exactly who plays next and with which ball",
              "The 7-point game length",
              "The penalty areas",
            ],
            correctIndex: 1,
            explanation:
              "Every stroke can be chosen against a known reply. That is what turns a 'simple' one-stroke game into a hard tactical one.",
            sourceLessonSlug: "leaves-and-wiring",
          },
          {
            prompt: "In your match log, which stroke should you record?",
            options: [
              "The one you physically missed",
              "The one you CHOSE wrong — a different thing, and the one that is actually fixable",
              "Every stroke of the game",
              "Only strokes that scored",
            ],
            correctIndex: 1,
            explanation:
              "Missing a shot is a mechanical problem; choosing the wrong shot is a thinking problem. Only one of them can be fixed this week.",
            sourceLessonSlug: "practice-your-thinking",
          },
          {
            prompt: "Which field must every match-log entry begin with?",
            options: ["The score", "The weather", "The CODE you were playing", "Your handicap"],
            correctIndex: 2,
            explanation:
              "Always name the code. A tactical note from a Golf Croquet game can be actively wrong advice in Association Croquet.",
            sourceLessonSlug: "practice-your-thinking",
          },
          {
            prompt: "What is the 'fallback' skill in Association Croquet, used when your break has fallen apart?",
            options: [
              "The long straight shot (hitting in from distance)",
              "The croquet stroke",
              "The wiring lift",
              "The peg-out",
            ],
            correctIndex: 0,
            explanation:
              "Long shots and tight hoop-running matter, but they are what you fall back on. Break-building is the primary skill.",
            sourceLessonSlug: "the-four-ball-break",
          },
          {
            prompt: "In a four-ball break, how many jobs does each of the other three balls have?",
            options: [
              "One each: two pioneers (next hoop and the hoop after) and one pivot near the peg",
              "None — they are obstacles",
              "They rotate randomly",
              "Two each",
            ],
            correctIndex: 0,
            explanation:
              "The whole art is keeping those three jobs filled while you advance — which is what the croquet stroke is for.",
            sourceLessonSlug: "the-four-ball-break",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 — American Six-Wicket (USCA). NOTE: "carryover deadness" is COACHING SLANG — the
    // phrase appears ZERO times in the official 2024 rulebook. The concept is real and is what
    // Rule 7.1 describes. The lesson teaches the concept and cites 7.1, and refuses to attach a
    // rule number to the slang phrase.
    // ══════════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "american-six-wicket",
      title: "18 · American Six-Wicket: the USCA code",
      section: "5 · American Six-Wicket (USCA)",
      body: `**Code taught in this lesson: AMERICAN SIX-WICKET, governed by the United States Croquet Association.** Rulebook: *The Official Rules of American Six Wicket Croquet*, **revised 2024**.

If you play tournament croquet in the United States, this is the code you are most likely to meet first. It shares the roquet–croquet–continuation engine with Association Croquet, and it shares the 26-point objective. Then it does two things very differently, and both of them change how the game feels.

## Same objective, same court

Rule 1.1(b): "The object of the game is for a side to make each ball on the side score the **12 wicket points and the stake point, a total of 26 points**, before the opponent" (United States Croquet Association, 2024). Rule 10.4 restates the win condition: score the 24 wicket points and **stake out both balls**, for 26 total — or, in a time-limited game, score the most points.

One side plays **blue and black**, the other **red and yellow** (Rule 1.1(a)). A **coin toss** decides who goes first (Rule 1.1(c)). The 26-point game may be shortened to a **14-point game** (Rule 16.1).

## Difference 1: the order of play is FIXED

Rule 1.3(a): "Play shall begin with the **blue ball followed by red, black, and yellow** (the order of colors descending on the center stake) and that shall be the proper order of play until the game ends or a ball stakes out."

Compare that with Association Croquet, where **you choose which of your two balls to play at the start of each turn** (AC Law 2.3; World Croquet Federation, 2021). In the American game, you do not choose. The rotation tells you.

That single change reshapes the strategy. In AC, a huge part of the thinking is *"which of my balls has the better opportunity right now?"* In the American game that question does not exist — you play the ball whose turn it is, and you must plan **two turns ahead for each of your balls**, because you know exactly when each one comes up.

(The American rules do contain an **experimental** provision, Rule 17.1, allowing a choice of ball in one narrow case — where a ball scores 1-back and 4-back in the same turn. It is explicitly experimental. Do not describe ball choice as part of the standard American game.)

## Difference 2: deadness — see the next lesson

That one is big enough to deserve its own lesson.

## The clock

The American game is the most explicitly **timed** of the three codes, which is one reason it works on television and at clubs with a lot of members and few lawns.

- **Rule 13.7:** a time limit may be set by the tournament director before the first game.
- **Rule 13.8(a):** "the striker shall have a maximum of **45 seconds** to strike the striker ball following the completion of the previous shot." The timekeeper announces when 15 seconds remain.
- **Rule 13.9:** "Each side is allotted **three one-minute player time-outs**."
- **Rule 13.10 / 13.11:** the timekeeper announces 15 minutes and 1 minute remaining, then calls **"match time"** — after which each remaining ball gets one **last turn**, in rotation. Then "the side scoring the most wicket and stake points is declared the winner"; if tied, play continues in full rounds.
- The rulebook notes games are "normally an hour ten minutes to two hours."

A **45-second shot clock** in croquet. Remember that the next time someone calls this a slow game for retirees.

:::reveal Name the single biggest structural difference between the American Six-Wicket code and Association Croquet in how a turn begins. ||| Order of play. In American Six-Wicket the rotation is FIXED — blue, red, black, yellow (USCA Rule 1.3(a)) — and you play whichever ball's turn it is. In Association Croquet you CHOOSE which of your side's two balls to play at the start of each turn.

## Sources
- ${USCA_RULES}
- ${WCF_AC}`,
    },
    {
      slug: "deadness",
      title: "19 · Deadness, and the board that shows it",
      section: "5 · American Six-Wicket (USCA)",
      body: `**Code taught in this lesson: AMERICAN SIX-WICKET, USCA.** Association Croquet has a *related* idea, but it does not work this way and it has no deadness board. Do not mix them.

## The rule

Rule 7.1: "When the striker earns the croquet shot, the striker ball becomes '**dead**' on the roqueted ball and **may not roquet it again until the striker ball scores its next wicket** or is cleared of deadness under rule 7.3 (1-back) or 9.2 (blocking)" (United States Croquet Association, 2024).

Here is what makes the American game different, and it is one word: **deadness persists across turns.** It is not wiped clean when your turn ends. Your ball stays dead on that ball, sitting there, turn after turn, until it runs its next wicket.

So a ball can be **dead on two, or even three, of the other balls** — which means that when its turn comes around, it may have almost nothing it is allowed to hit. A ball that is dead on everything is nearly useless, and your opponent knows it.

**Vocabulary warning, and this one is a good demonstration of how to read a rulebook.** Coaches and players call this "**carryover deadness**." The phrase is real and everyone uses it — but it appears **zero times in the official 2024 USCA rulebook**. There is no "carryover deadness rule." The concept is exactly what **Rule 7.1** describes. So: use the phrase in conversation, cite **Rule 7.1** when it matters, and never quote a rule number for the phrase itself.

## The deadness board

Because deadness is invisible — you cannot look at a ball and see what it is dead on — the American game gives it a physical display. From the rulebook's equipment section:

> "In order to aid the contestants (and spectators) in identifying balls which have deadness, a board approximately **2' high x 3' wide** is used with the four ball colors permanently affixed in proper sequence vertically on the left side and **12 colored squares (three each of the four ball colors)**... The white squares can be moved so as to cover or uncover the colored squares to show a ball's deadness." (United States Croquet Association, 2024)

Three squares per ball, because each ball can be dead on the other three. **The whole state of the game is on a board where everyone — including the crowd — can read it.** That is a genuinely thoughtful piece of sports design, and it is unique to this code.

## Getting clean again

There are three ways out of deadness, and all three are cited:

1. **Score your next wicket.** The default (Rule 7.1). Deadness clears.
2. **The 1-back clearing (Rule 7.3).** "As each ball of both sides scores its 1-back wicket, the opposing side has the option of clearing the deadness from either of its balls that is eligible for a clearing." You must **declare** which ball before playing the first shot of your next turn, "or no relief shall be given," and Rule 7.3(c) adds that the first colour declared "shall be the one cleared and may not subsequently be changed." Say it once, say it right.
3. **Blocking relief (Rule 9.2).** If a ball is blocked in a wicket (a stymie), there is deadness relief.

And a fourth, for rover balls: **Rule 10.3.** A rover that is dead on two or more balls clears its deadness by running any wicket in either direction — but remains "last dead" on one ball.

## Why this changes everything strategically

In Association Croquet, your break-building problem is *arranging* the balls. In American Six-Wicket, it is arranging the balls **while managing a resource that runs out**. Every roquet you take spends something. A player who burns all their deadness on a break that then collapses has left a ball on the court that cannot hit anything.

The board tells your opponent exactly how poor you are. Play accordingly.

:::reveal A friend cites "USCA carryover deadness rule" and gives you a rule number. What is wrong, and what is the correct citation? ||| The phrase "carryover deadness" appears ZERO times in the official 2024 USCA rulebook — there is no rule of that name and no rule number for it. The CONCEPT is real: deadness persists across turns until the ball scores its next wicket, and that is what Rule 7.1 says. Cite Rule 7.1; treat "carryover deadness" as coaching slang.

## Sources
- ${USCA_RULES}`,
      recallContent: [
        {
          prompt: "In American Six-Wicket, what is the order of play, and can you choose your ball?",
          answer:
            "Blue, red, black, yellow — a fixed rotation (Rule 1.3(a)). You cannot choose; you play whichever ball's turn it is. (Association Croquet is the opposite: you choose.)",
        },
        {
          prompt: "How long does a striker have to play a shot in the American game?",
          answer:
            "A maximum of 45 seconds after the previous shot is completed (Rule 13.8(a)). Each side also gets three one-minute time-outs (Rule 13.9).",
        },
      ],
    },
    {
      slug: "quiz-usca",
      title: "20 · Section quiz: American Six-Wicket",
      section: "5 · American Six-Wicket (USCA)",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which body governs American Six-Wicket, and what is its current rulebook?",
            options: [
              "The WCF — the Laws of Association Croquet, 7th ed.",
              "The USCA — The Official Rules of American Six Wicket Croquet, revised 2024",
              "Croquet England — the Golf Croquet Rules",
              "No one — it is an informal code",
            ],
            correctIndex: 1,
            explanation:
              "Cite the edition as 'revised 2024'. An older 2006 rulebook URL still turns up in search results but now 404s.",
            sourceLessonSlug: "american-six-wicket",
          },
          {
            prompt: "What is the order of play in American Six-Wicket?",
            options: [
              "The striker chooses which of their side's balls to play each turn",
              "A fixed rotation: blue, red, black, yellow",
              "Whichever ball is closest to the next wicket",
              "Alternating sides, but each side chooses its ball",
            ],
            correctIndex: 1,
            explanation:
              "Rule 1.3(a) — the colours descend the centre stake in that order. Choosing your ball each turn is the ASSOCIATION code, not this one.",
            sourceLessonSlug: "american-six-wicket",
          },
          {
            prompt: "How many points does a side need to win an American Six-Wicket game?",
            options: ["13", "26 — 12 wicket points plus the stake point, for each of the side's two balls", "7", "24"],
            correctIndex: 1,
            explanation:
              "Rule 1.1(b) and Rule 10.4. The side must stake out BOTH balls (or, in a time-limited game, score the most points).",
            sourceLessonSlug: "american-six-wicket",
          },
          {
            prompt: "What does USCA Rule 7.1 say happens when the striker earns the croquet shot?",
            options: [
              "The striker ball becomes 'dead' on the roqueted ball and may not roquet it again until it scores its next wicket",
              "The striker ball is removed from the game",
              "The roqueted ball is removed",
              "Deadness is cleared at the end of every turn",
            ],
            correctIndex: 0,
            explanation:
              "And crucially, that deadness PERSISTS across turns — it is not wiped when your turn ends. That is the signature of the American code.",
            sourceLessonSlug: "deadness",
          },
          {
            prompt: "What is the correct thing to say about the phrase 'carryover deadness'?",
            options: [
              "It is USCA Rule 7.2",
              "It is a term defined in the rulebook's glossary",
              "It appears ZERO times in the official 2024 rulebook — it is coaching slang for what Rule 7.1 describes",
              "It is an Association Croquet term",
            ],
            correctIndex: 2,
            explanation:
              "The concept is completely real; the phrase is not in the rulebook. Cite Rule 7.1 and never attach a rule number to the slang.",
            sourceLessonSlug: "deadness",
          },
          {
            prompt: "Roughly how big is a deadness board, and what is on it?",
            options: [
              "About 2 ft high by 3 ft wide, with the four ball colours down the left and 12 coloured squares — three per ball",
              "A pocket-sized scorecard carried by the referee",
              "A digital screen required at every club",
              "A 6 ft square scoreboard with 26 squares",
            ],
            correctIndex: 0,
            explanation:
              "Three squares per ball, because each ball can be dead on the other three. The full state of the game is public — spectators included.",
            sourceLessonSlug: "deadness",
          },
          {
            prompt: "What is the 1-back clearing (Rule 7.3)?",
            options: [
              "Deadness is cleared automatically for everyone at 1-back",
              "As each ball scores its 1-back wicket, the OPPOSING side may clear the deadness from one of its eligible balls — and must declare which before playing its next first shot",
              "A ball at 1-back may roquet any ball twice",
              "It clears the deadness board at half time",
            ],
            correctIndex: 1,
            explanation:
              "Rule 7.3(c): the first colour declared is the one cleared, and it may not subsequently be changed. Say it once, say it right.",
            sourceLessonSlug: "deadness",
          },
          {
            prompt: "How long does a striker have to play a shot in the American game?",
            options: ["No limit", "45 seconds after the previous shot is completed", "10 seconds", "Two minutes"],
            correctIndex: 1,
            explanation:
              "Rule 13.8(a), with the timekeeper announcing when 15 seconds remain. A 45-second shot clock is not a slow game.",
            sourceLessonSlug: "american-six-wicket",
          },
          {
            prompt: "How many time-outs does each side get in a timed American game?",
            options: ["None", "Three one-minute player time-outs", "One five-minute time-out", "Unlimited"],
            correctIndex: 1,
            explanation: "Rule 13.9.",
            sourceLessonSlug: "american-six-wicket",
          },
          {
            prompt: "What happens at 'match time' in a timed American game?",
            options: [
              "Play stops immediately and the leader wins",
              "Each remaining ball gets one last turn in rotation; then the side with the most wicket and stake points wins (ties → play continues in full rounds)",
              "The game is replayed",
              "The deadness board is cleared",
            ],
            correctIndex: 1,
            explanation: "Rules 13.10 and 13.11(b).",
            sourceLessonSlug: "american-six-wicket",
          },
          {
            prompt: "How does a rover ball dead on two or more balls clear its deadness (Rule 10.3)?",
            options: [
              "It cannot",
              "By running any wicket in either direction — though it remains 'last dead' on one ball",
              "By staking out",
              "By waiting one full rotation",
            ],
            correctIndex: 1,
            explanation: "A rover has no 'next wicket' left in order, so the rules give it a different clearing path.",
            sourceLessonSlug: "deadness",
          },
          {
            prompt: "Is choosing which of your two balls to play part of the standard American game?",
            options: [
              "Yes — it is the core of American strategy",
              "No — the rotation is fixed. A ball choice exists only as an EXPERIMENTAL rule (17.1) in one narrow case",
              "Only in doubles",
              "Only in handicap play",
            ],
            correctIndex: 1,
            explanation:
              "Rule 17.1 is explicitly experimental, and applies only where a ball scores 1-back and 4-back in the same turn. Do not describe ball choice as standard in this code.",
            sourceLessonSlug: "american-six-wicket",
          },
          {
            prompt: "Strategically, what does deadness add on top of Association Croquet's break-building problem?",
            options: [
              "Nothing — it is cosmetic",
              "A resource that runs out: every roquet spends something, and the board shows your opponent exactly how poor you are",
              "A time limit",
              "Extra points",
            ],
            correctIndex: 1,
            explanation:
              "A player who burns all their deadness on a break that collapses leaves a ball on the court that can hit nothing.",
            sourceLessonSlug: "deadness",
          },
          {
            prompt: "What decides who plays first in American Six-Wicket?",
            options: ["A coin toss (Rule 1.1(c))", "The lower handicap", "The home club", "The referee"],
            correctIndex: 0,
            explanation: "The winner takes blue and black (first and third) or red and yellow (second and fourth).",
            sourceLessonSlug: "american-six-wicket",
          },
          {
            prompt: "May an American Six-Wicket game be shortened?",
            options: [
              "No",
              "Yes — Rule 16.1 provides a 14-point game (6 wicket points plus the stake, per ball)",
              "Yes — down to 7 points, as in Golf Croquet",
              "Only in juniors' play",
            ],
            correctIndex: 1,
            explanation:
              "Both the WCF and USCA codes offer shortened games; the 7-point game is a GOLF CROQUET length and belongs to a different code.",
            sourceLessonSlug: "american-six-wicket",
          },
        ],
      },
    },
  ],
};
