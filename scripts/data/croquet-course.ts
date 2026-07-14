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

    // ══════════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 — History. Every claim here was checked against a primary or scholarly source, and
    // the beloved claims that FAILED the check are taught as failures (see "myths-we-cut"). The
    // 1900 Olympics women's claim in particular is corrected: croquet's women were among the first
    // female Olympians, NOT the first (Hélène de Pourtalès competed in yachting on 22 May 1900,
    // five weeks before croquet began on 28 June).
    // ══════════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "victorian-craze",
      title: "21 · Where croquet came from — and what nobody can prove",
      section: "6 · History you can actually check",
      body: `Croquet's history is genuinely interesting. It is also **badly told almost everywhere**, because it is exactly the kind of history where a charming, uncited claim gets repeated until it sounds like a fact. This section separates the two.

## What can be said with confidence

By the early 1860s croquet was a mass craze in Britain, and one man is at the centre of the documented record: **John Jaques II** (1820–1890), a London sports-equipment manufacturer. He is in the **World Croquet Federation's Hall of Fame** (inducted 2007), and the WCF's own citation says that "by the early 1860s he was recognized as the game's leading expert," and that in **1864** he "wrote and published *Croquet; the Laws and Regulations of the Game* **which is recognizably the foundation of the modern laws of Association Croquet**" (World Croquet Federation, n.d.).

That is a strong, checkable claim from a governing body: the modern Association Croquet laws trace back to an 1864 rulebook published by a manufacturer who was also selling the sets.

Hold that thought — a company that writes the rules *and* sells the equipment is a business model, and Section 8 comes back to it.

## What is disputed, and should be presented as disputed

**Where croquet actually came from is not settled.**

- The most-repeated version is that croquet arrived in England **from Ireland around 1850–52**. **OxfordCroquet**, a long-standing croquet reference site, calls the standard telling — croquet "emerging from the mists of Ireland around 1850" — a "**somewhat dubious refusal to acknowledge a really foreign source**," and argues instead for descent from the French game *jeu de mail* (OxfordCroquet, n.d.).
- The Jaques company's own marketing says it introduced croquet to Britain and exhibited at the **1851 Great Exhibition**, publishing the first English rulebook in **1857**. That claim is sourced chiefly to **the company's own blog** — and even that page concedes there is a rival claim (Jaques of London, n.d.). The WCF's Hall of Fame citation does **not** mention 1851 or 1857; it credits the **1864** rulebook.

**So here is how this course handles it, and it is a rule you can use for the rest of your life:**

> When two sources disagree and one of them is selling something, **cite the one that isn't**, and say out loud that the other exists.

Load-bearing claim: **1864, Jaques, cited to the WCF.** The 1851 and 1857 claims: "the company says so."

## The standard scholarly reference

If you want to go deeper than any website, the accepted book-length history is **Prichard, D. M. C. (1981). *The History of Croquet*. London: Cassell.** It was written with the cooperation of the Croquet Association and is the work later historians cite. This course does not quote it, because this course did not read it — which is itself the point. **Do not cite what you have not read.**

:::reveal What is the strongest, best-sourced claim about croquet's origins that this course will make — and what is the weakest claim it refuses to make? ||| Strongest: John Jaques II published "Croquet; the Laws and Regulations of the Game" in 1864, which the World Croquet Federation's own Hall of Fame citation calls "recognizably the foundation of the modern laws of Association Croquet." Weakest / refused: that croquet "came from Ireland around 1850," or that Jaques "introduced croquet to Britain" and won a medal at the 1851 Great Exhibition — those are disputed and are sourced mainly to the company's own marketing.

## Sources
- World Croquet Federation. (n.d.). *John Jaques II* [Hall of Fame citation]. https://worldcroquet.org/john-jaques-ii/
- OxfordCroquet. (n.d.). *The origins of croquet*. https://oxfordcroquet.org/history/origins1.php
- Jaques of London. (n.d.). *Who invented croquet?* [Company blog — a self-interested source, cited here only to show what it claims]. https://www.jaqueslondon.co.uk/blogs/posts/who-invented-croquet
- Prichard, D. M. C. (1981). *The history of croquet*. Cassell. [The standard scholarly history — named here as further reading; not quoted, because it was not read for this course.]`,
    },
    {
      slug: "wimbledon-pivot",
      title: "22 · The croquet club that became Wimbledon",
      section: "6 · History you can actually check",
      body: `This is the best-documented story in croquet, because the organisation it happened to is still around, is very rich, and publishes its own history. The source here is the **Wimbledon Compendium** — the All England Lawn Tennis Club's own official reference book (All England Lawn Tennis Club, 2025).

## The facts, from the club's own record

> "The story begins on **23 July 1868** when John H. Walsh, Capt. R.F. Dalton, J. Hinde Hale, the Revd. A. Law, S.H. Clarke Maddock and Walter Jones Whitmore met in the offices of Herbert Cox, the publisher of *The Field*, at **346 Strand in London**, and the **All England Croquet Club** was founded." (All England Lawn Tennis Club, 2025)

**Read the address.** The All England Croquet Club was founded **in central London, on the Strand** — *not* at Wimbledon. It **moved** to Wimbledon in **October 1869**, to a four-acre ground off Worple Road.

Almost every retelling you will find says "founded at Wimbledon in 1868." It is wrong, and the club's own book says so. This is a free, painless lesson in what happens when everyone copies everyone: **the error survives because nobody opens the primary source.**

## Then croquet collapsed

> "But **by 1875 interest in croquet had waned** and so had the Club's finances. The Committee, looking to revive the fortunes of the Club, announced that **one croquet lawn would be set apart for playing lawn tennis**, a new game introduced to the public by Major Wingfield in 1874 that was sweeping the country." (All England Lawn Tennis Club, 2025)

One lawn. That is how it starts.

- **April 1877:** the club is re-named "The All England Croquet and Lawn Tennis Club."
- **1877:** the first Championship is held — **22 entries, gentlemen only**.
- **1881:** the club raises enough money to buy the Worple Road ground; "the following year **croquet ceased to be played**" and it became the **All England Lawn Tennis Club**.

So: a croquet club, running out of money, rents out one lawn to a fashionable new game — and within seven years the new game has eaten it, and croquet is gone from the grounds entirely.

## The postscript nobody tells you

Croquet came back. The word returned to the club's name in **1899**, and croquet **as a sport was reintroduced in 1957** (All England Lawn Tennis Club, 2025). The full name of the club that runs Wimbledon today is the **All England Lawn Tennis and Croquet Club**.

That word "Croquet" in the name of the most famous tennis tournament on earth is not decoration. It is a receipt.

## What to take from it

Croquet's Victorian boom was enormous and **it ended fast**. Any story that treats croquet's decline as slow and dignified is not paying attention: the sport lost its own flagship club to a game that was three years old.

:::reveal Where was the All England Croquet Club actually founded, and what did the club do in 1875 that changed sport forever? ||| It was founded on 23 July 1868 in central London — in a publisher's offices at 346 Strand — NOT at Wimbledon (it moved to Wimbledon in October 1869). In 1875, with croquet's popularity and the club's finances both fading, the committee set aside ONE croquet lawn for the new game of lawn tennis. By 1882 croquet had ceased to be played there and the club had become the All England Lawn Tennis Club.

## Sources
- All England Lawn Tennis Club. (2025). *The Wimbledon compendium 2025* (pp. 18–19; history section adapted from J. Barrett, *Wimbledon: The Official History*). https://www.wimbledon.com/pdf/2025_Wimbledon_Compendium_W_250617.pdf`,
      recallContent: [
        {
          prompt: "What is the single best-sourced claim about croquet's origins, and who is the source?",
          answer:
            "John Jaques II published Croquet; the Laws and Regulations of the Game in 1864, which the World Croquet Federation's Hall of Fame citation calls 'recognizably the foundation of the modern laws of Association Croquet.'",
        },
        {
          prompt: "Why does this course refuse to state that croquet came to England from Ireland around 1850?",
          answer:
            "Because it is contested. OxfordCroquet calls the Irish-origin story 'somewhat dubious' and argues for descent from the French jeu de mail. A disputed claim is presented as a dispute, not as a fact.",
        },
      ],
    },
    {
      slug: "women-and-the-1900-olympics",
      title: "23 · Women, the 1900 Olympics, and a claim that got laundered",
      section: "6 · History you can actually check",
      body: `Croquet has been at the Olympic Games **once**: Paris, 1900. What happened there is genuinely remarkable, and the version you will read online is genuinely wrong. Both halves are worth your time.

The source throughout is **Olympedia**, the scholarly Olympic-history database maintained by the OlyMADMen and used by Olympic historians (Olympedia, n.d.-a).

## What actually happened

| | |
|---|---|
| **Venue and dates** | Cercle du Bois de Boulogne, Paris; 28 June – 22 July 1900 |
| **Total competitors** | **10** — seven men and **three women** |
| **Nations** | **One.** France. Every medal went to France. |
| **Events** | Three medal events (Singles One Ball; Singles Two Balls; Doubles), plus one non-medal handicap singles |
| **Singles, One Ball** | Nine competitors, 28 June 1900. Gold **Gaston Aumoitte**; silver **Georges Johin**; bronze **Chrétien Waydelich** |

Ten athletes. One country. That is the entire Olympic history of croquet.

## The part that matters

Olympedia's own summary is worth quoting exactly:

> "The most important occurrence at 1900 croquet is that **women made their Olympic début in this sport**. In fact, three women competed... and **they competed against the men in the same competition**. Thus, they would be **among the first female Olympians, trailing only the Swiss Hélène de Pourtalès in yachting**." (Olympedia, n.d.-a)

The three women were **Jeanne Filleul-Brohy**, **Marie Ohier**, and **Louise Anne Marie Després**. Després finished **fifth**; Filleul-Brohy and Ohier did not finish their first-round matches.

Read what they did again, because it is easy to skim past. **They were not in a separate women's event.** There wasn't one. They entered the same competition as the men and played against them. In 1900. In a Europe where women could not vote almost anywhere.

## Now the correction — and this is the lesson

You will read, in many places, that **"the croquet women were the first female Olympians."**

**That is false.** Olympedia's entry for **Hélène de Pourtalès** states that on **22 May 1900** she was part of the crew of the yacht *Lérina*, which won its class — "This made her **the first woman to compete at the Olympics and the first female Olympic medalist**" (Olympedia, n.d.-b).

**22 May beats 28 June by five weeks.** Sailing was first. Croquet was close behind.

And note who gets this wrong: not just random blogs. The **New-York Historical Society's own blog** states that "since the croquet match took place first, the women croquet players were the very first female Olympians" — and also says *two* women, not three (New-York Historical Society, n.d.).

An institution with a research library published it. It is still wrong. **Check the primary source, even when the source that got it wrong is impressive.**

**The defensible version — the one this course teaches:** croquet was **one of the first Olympic events in which women competed**, and — unusually, and much more interestingly — **the women competed directly against the men in the same competition.** That claim is true, it is sourced, and it is a better story than the false one.

## Roque, 1904: the sequel nobody remembers

Four years later, at the St. Louis Games, the Olympics held **roque** — the American hard-court variant, whose name Olympedia notes is croquet "with the initial 'c' and the trailing 't' dropped" (Olympedia, n.d.-c).

- 3–8 August 1904, Francis Field, Washington University, St. Louis
- **One event** (Singles, Men) and **four competitors — all American**
- Gold **Charles Jacobus**, silver **Smith Streeter**, bronze **Charles Brown**

Olympedia's verdict is flat: "**Croquet, or roque, has never again been contested at the Olympics**, and there are no plans for this in future."

Two appearances. Fourteen athletes between them. Both times, one country won everything.

:::reveal What is the accurate claim about women at the 1900 Olympic croquet event, and what is the popular claim that is false? ||| ACCURATE: croquet was one of the first Olympic events in which women competed (28 June 1900), and — unusually — the three women (Jeanne Filleul-Brohy, Marie Ohier and Louise Després) competed directly AGAINST the men in the same competition. FALSE: that they were "the first female Olympians." Hélène de Pourtalès competed in yachting on 22 May 1900, five weeks earlier, and is recorded as the first woman to compete at the Olympics and the first female Olympic medalist.

## Sources
- Olympedia. (n.d.-a). *Croquet at the 1900 Summer Olympics*. http://www.olympedia.org/editions/2/sports/CQT
- Olympedia. (n.d.-b). *Hélène de Pourtalès*. http://www.olympedia.org/athletes/61789
- Olympedia. (n.d.-c). *Roque at the 1904 Summer Olympics*. http://www.olympedia.org/editions/3/sports/ROQ
- New-York Historical Society. (n.d.). *Croquet: An Olympic sport* [Blog post — cited here as an example of the error, not as support for it]. https://blog.nyhistory.org/croquet-an-olympic-sport/`,
      recallContent: [
        {
          prompt: "Where was the All England Croquet Club founded, and why does the usual answer get it wrong?",
          answer:
            "At 346 Strand, in central London, on 23 July 1868 — not at Wimbledon. It moved to Wimbledon in October 1869. The error survives because retellings copy each other instead of opening the club's own Compendium.",
        },
        {
          prompt: "What happened to croquet at the All England Croquet Club after 1875?",
          answer:
            "With croquet's popularity fading, the committee set aside one lawn for lawn tennis. By April 1877 the club had been renamed to include lawn tennis; by 1882 croquet had ceased to be played there. Croquet returned to the club's name in 1899 and as a sport in 1957.",
        },
      ],
    },
    {
      slug: "myths-we-cut",
      title: "24 · The stories we cut, and why",
      section: "6 · History you can actually check",
      body: `Every course makes choices about what to leave out. Most courses do not tell you what they cut. This one does, because **the cuts are the lesson.**

Here is every well-loved croquet claim that this course checked and then refused to state as fact — and what happened when it was checked.

## 1. "The croquet women were the first female Olympians"

**Verdict: false.** Corrected in the previous lesson. Hélène de Pourtalès sailed on 22 May 1900; croquet began 28 June. It is repeated even by the New-York Historical Society's blog.

**What went wrong:** someone reasoned "croquet was early in the Games, therefore first" without checking whether anything was earlier. It was.

## 2. "The 1900 Olympic croquet event had only one paying spectator"

**Verdict: half-true, and the popular version launders a hedge into a statistic.** This one is the most interesting cut in the whole course.

It is not folklore. It really is in **the Official Report of the 1900 Games** — which is quoted at length by **Chris Hudson, then Secretary-General of the World Croquet Federation**, in *Croquet World Online Magazine* (Hudson, 1999). Here is the passage:

> "One must admit that there were not many players; about a dozen... Spectators were not at all numerous; although I must mention an English lover of the game who made the journey from Nice to Paris to watch the first matches of the competition; **unless I am very much mistaken, however, this gentleman was the only paying spectator**." (Official Report of the 1900 Games, as quoted and translated by Hudson, 1999)

Look at what the writer actually wrote: ***"unless I am very much mistaken."*** That is a man in 1900 saying *I think, but I'm not sure*.

A hundred and twenty-six years of retelling turned "I think, but I'm not sure" into "**fact: one paying spectator**." Nothing was invented. A hedge was simply **dropped**, and the sentence hardened.

**Two more honest notes.** First: this course verified the **English translation as published by the WCF**, not the French original — so the correct attribution is "the Official Report, as quoted and translated by the World Croquet Federation," not "the Official Report" flat. Second: Olympedia, the scholarly Olympic database, **does not mention the spectator claim at all**, and warns that "very little is known about croquet at the 1900 Olympics" and that "some Olympic historians will state that it was not an Olympic sport" (Olympedia, n.d.).

The same Official Report also sneers that croquet "**has hardly any pretensions to athleticism**" — and then, remarkably, defends it: "One would be wrong, however, to disdain croquet. It develops a combinative mind — one has only to see it **transform young girls into reasoners, and from reasoners into reasonable people**" (as quoted by Hudson, 1999). Read that sentence twice. It is 1900 congratulating itself for noticing that women can think.

## 3. "Croquet was banned in Boston by a clergyman"

**Verdict: cannot verify a ban. Cut.**

A clergyman **denouncing** something is not a ban. The USCA's own history says only that "the Boston clergy **spoke out against** the drinking, gambling, and licentious behavior" around croquet — no ban, and no citation. The vivid quote that always travels with this story (croquet as "the gaping jaw of Hades") circulates only through blogs and club pages, with no primary source attached.

Denunciation is real and interesting. "Banned" is a stronger word than anybody can support, so this course does not use it.

## 4. "Jaques introduced croquet to Britain and won a medal at the 1851 Great Exhibition"

**Verdict: sourced to the company's own marketing. Cut, or hedged.** See Lesson 21. The WCF's Hall of Fame citation credits the **1864** rulebook — that is what this course stands on.

## 5. "Croquet came to England from Ireland around 1850"

**Verdict: contested.** OxfordCroquet argues for the French *jeu de mail* and calls the Irish story "somewhat dubious." Presented as a dispute.

## 6. "The All England Croquet Club was founded at Wimbledon"

**Verdict: false.** Founded at 346 Strand, London; moved to Wimbledon the following year. The club's own Compendium says so.

## But the Victorian gender story is REAL — here is where to find it

None of this means the "croquet challenged Victorian gender roles" story is a myth. It is real, and it is **peer-reviewed** — which is exactly why it survives checking when the anecdotes do not.

- **Sterngass, J. (1998). Cheating, gender roles, and the nineteenth-century croquet craze. *Journal of Sport History*, 25(3), 398–418.** The argument: croquet's mixed-gender competition challenged Victorian ideas about womanhood; women frequently beat men, and were then **accused of cheating** — of using the "push shot," or of nudging the ball under their skirts.
- **Beissel Heath, M. (2012). Not "all ridges and furrows" and "uncroquetable lawns": Croquet, female citizenship, and 1860s domestic chronicles. *Critical Survey*, 24(1), 43–56.**

**An honesty note this course owes you:** it did **not** read the Sterngass article itself — the summary above follows *JSTOR Daily*'s account of it (JSTOR Daily, n.d.). That is why the article is named with full bibliographic detail: **so you can go and check, which is the entire point.** If you want the vivid period line about croquet as "a source of slumbering depravity, a veritable Frankenstein monster of recreation," it is quoted *in* Sterngass — go and read it there, and cite it as *quoted in Sterngass*, not as if you found it yourself.

## The transferable skill

Six claims. Three false, two hedged into shape, one only half-checkable. Not one of them was *malicious* — every single one started as something true-ish and got worn smooth by repetition.

**That is what happens to claims. Check the ones you plan to repeat.**

:::reveal The "only one paying spectator at the 1900 Olympic croquet" story turned out not to be folklore. So what exactly is wrong with the way it is usually told? ||| The claim IS in the Official Report of the 1900 Games — but the writer hedged it: "unless I am very much mistaken, however, this gentleman was the only paying spectator." Retelling dropped the hedge and turned "I think, but I'm not sure" into a hard statistic. Nothing was invented; a qualifier was simply lost. (Also: the verified text is the WCF's English translation, not the French original, and Olympedia does not mention the claim at all.)

## Sources
- Hudson, C. (1999). *Croquet in the Olympics* [Quoting and translating the Official Report of the 2nd Olympic Games]. Croquet World Online Magazine. http://www.croquetworld.com/News/Olympics.asp
- Olympedia. (n.d.). *Croquet at the 1900 Summer Olympics*. http://www.olympedia.org/editions/2/sports/CQT
- Sterngass, J. (1998). Cheating, gender roles, and the nineteenth-century croquet craze. *Journal of Sport History, 25*(3), 398–418.
- Beissel Heath, M. (2012). Not "all ridges and furrows" and "uncroquetable lawns": Croquet, female citizenship, and 1860s domestic chronicles. *Critical Survey, 24*(1), 43–56.
- JSTOR Daily. (n.d.). *The dangerous game of croquet* [Summarizing Sterngass, 1998; this is the source actually consulted for the summary above]. https://daily.jstor.org/the-dangerous-game-of-croquet/
- OxfordCroquet. (n.d.). *The origins of croquet*. https://oxfordcroquet.org/history/origins1.php
- All England Lawn Tennis Club. (2025). *The Wimbledon compendium 2025*. https://www.wimbledon.com/pdf/2025_Wimbledon_Compendium_W_250617.pdf`,
      recallContent: [
        {
          prompt: "Who was the first woman to compete at the modern Olympics, and in what sport?",
          answer:
            "Hélène de Pourtalès, in yachting, on 22 May 1900 — five weeks before croquet's event began on 28 June. Croquet's three women were among the first female Olympians, but not the first.",
        },
        {
          prompt: "What was genuinely unusual about the women in the 1900 Olympic croquet event?",
          answer:
            "They competed directly against the men in the same competition — there was no separate women's event. Louise Després finished fifth.",
        },
      ],
    },
    {
      slug: "quiz-history",
      title: "25 · Section quiz: history you can check",
      section: "6 · History you can actually check",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the best-sourced claim about the foundation of the modern Association Croquet laws?",
            options: [
              "Jaques introduced croquet to Britain at the 1851 Great Exhibition",
              "John Jaques II published 'Croquet; the Laws and Regulations of the Game' in 1864 — which the WCF's Hall of Fame calls 'recognizably the foundation of the modern laws of Association Croquet'",
              "The rules came from Ireland in 1850",
              "The All England Croquet Club wrote them in 1868",
            ],
            correctIndex: 1,
            explanation:
              "The 1864 rulebook is cited by the governing body itself. The 1851/1857 claims come from the company's own marketing and are not repeated by the WCF.",
            sourceLessonSlug: "victorian-craze",
          },
          {
            prompt: "How does this course treat the claim that croquet came to England from Ireland around 1850?",
            options: [
              "As settled fact",
              "As a disputed claim — OxfordCroquet calls it 'somewhat dubious' and argues for the French jeu de mail instead",
              "As deliberately invented",
              "As proven by the WCF",
            ],
            correctIndex: 1,
            explanation: "A disputed claim is presented as a dispute, not as a fact.",
            sourceLessonSlug: "victorian-craze",
          },
          {
            prompt: "Where and when was the All England Croquet Club founded?",
            options: [
              "At Wimbledon, in 1868",
              "In central London, at 346 Strand, on 23 July 1868 — it moved to Wimbledon in October 1869",
              "At Worple Road, in 1875",
              "In Paris, in 1900",
            ],
            correctIndex: 1,
            explanation:
              "The club's own Wimbledon Compendium records the founding meeting in a publisher's offices on the Strand. 'Founded at Wimbledon' is the version everyone copies — and it is wrong.",
            sourceLessonSlug: "wimbledon-pivot",
          },
          {
            prompt: "What did the All England Croquet Club do in 1875, and what did it lead to?",
            options: [
              "It banned croquet outright",
              "With croquet's popularity and its finances fading, it set aside ONE lawn for lawn tennis — and by 1882 croquet had ceased to be played there",
              "It moved to Paris",
              "It merged with the Croquet Association",
            ],
            correctIndex: 1,
            explanation:
              "The first Championship followed in 1877 (22 entries, gentlemen only). Croquet returned to the club's name in 1899 and as a sport in 1957 — which is why the club is still the All England Lawn Tennis AND CROQUET Club.",
            sourceLessonSlug: "wimbledon-pivot",
          },
          {
            prompt: "How many athletes competed in croquet at the 1900 Paris Olympics, and from how many nations?",
            options: ["10 athletes, from 1 nation (France)", "72 athletes, from 12 nations", "4 athletes, from 1 nation", "22 athletes, from 3 nations"],
            correctIndex: 0,
            explanation:
              "Ten competitors — seven men and three women — all French. Every medal went to France. That is croquet's entire Olympic history.",
            sourceLessonSlug: "women-and-the-1900-olympics",
          },
          {
            prompt: "What was genuinely unusual about the three women in the 1900 Olympic croquet event?",
            options: [
              "They were the first female Olympians",
              "They competed directly against the men in the same competition — there was no separate women's event",
              "They won all three medals",
              "They were the only competitors",
            ],
            correctIndex: 1,
            explanation:
              "Jeanne Filleul-Brohy, Marie Ohier and Louise Després entered the same competition as the men. Després finished fifth. That is the true, and better, story.",
            sourceLessonSlug: "women-and-the-1900-olympics",
          },
          {
            prompt: "Why is 'the croquet women were the first female Olympians' false?",
            options: [
              "Because no women competed in 1900",
              "Because Hélène de Pourtalès competed in yachting on 22 May 1900 — five weeks before croquet began on 28 June",
              "Because croquet was not an Olympic sport",
              "Because they competed in a separate event",
            ],
            correctIndex: 1,
            explanation:
              "Olympedia records de Pourtalès as the first woman to compete at the Olympics and the first female Olympic medalist. Even the New-York Historical Society's blog gets this wrong.",
            sourceLessonSlug: "women-and-the-1900-olympics",
          },
          {
            prompt: "What happened to roque at the 1904 St. Louis Olympics?",
            options: [
              "It drew 80 competitors from 12 nations",
              "One event, four competitors, all American — gold to Charles Jacobus; croquet or roque has never been contested at the Olympics again",
              "It was cancelled",
              "Women competed against men again",
            ],
            correctIndex: 1,
            explanation:
              "Roque is croquet with the initial 'c' and trailing 't' dropped. Two Olympic appearances, fourteen athletes in total, and both times one country won everything.",
            sourceLessonSlug: "women-and-the-1900-olympics",
          },
          {
            prompt: "The 'only one paying spectator at the 1900 Olympics' story is best described as...",
            options: [
              "Pure folklore with no source",
              "A hard statistic from the Official Report",
              "Real but hedged — the Official Report says 'unless I am very much mistaken, however, this gentleman was the only paying spectator'; retelling dropped the hedge",
              "An invention of the WCF",
            ],
            correctIndex: 2,
            explanation:
              "Nothing was fabricated. A qualifier was simply lost, and 'I think, but I'm not sure' hardened into a fact over 126 years of repetition.",
            sourceLessonSlug: "myths-we-cut",
          },
          {
            prompt: "Why does this course cite the 1900 spectator quote as 'the Official Report, as quoted and translated by the World Croquet Federation' rather than just 'the Official Report'?",
            options: [
              "Because the WCF wrote the report",
              "Because the course verified the WCF's English translation, not the French original — so it says exactly what it checked",
              "Because the report is secret",
              "Because the WCF disputes the report",
            ],
            correctIndex: 1,
            explanation:
              "Cite what you actually read. If you read a translation, say you read a translation.",
            sourceLessonSlug: "myths-we-cut",
          },
          {
            prompt: "What is wrong with the claim that croquet was 'banned in Boston' by the clergy?",
            options: [
              "Nothing — it is well documented",
              "A ban cannot be verified. The USCA's own history says only that the Boston clergy 'spoke out against' the behaviour around croquet — denouncing is not banning",
              "It happened in New York, not Boston",
              "It was the police, not the clergy",
            ],
            correctIndex: 1,
            explanation:
              "The vivid 'gaping jaw of Hades' quote circulates only via blogs with no primary source. Denunciation is real; 'banned' is a stronger word than anyone can support.",
            sourceLessonSlug: "myths-we-cut",
          },
          {
            prompt: "Which source is peer-reviewed scholarship on croquet and Victorian gender roles?",
            options: [
              "The Jaques company blog",
              "Sterngass, J. (1998), 'Cheating, gender roles, and the nineteenth-century croquet craze', Journal of Sport History, 25(3)",
              "The New-York Historical Society blog post",
              "Croquet World Online Magazine",
            ],
            correctIndex: 1,
            explanation:
              "Its argument: mixed-gender competition challenged Victorian ideas of womanhood, and women who beat men were accused of cheating. This course names it with full detail precisely so you can go and check it.",
            sourceLessonSlug: "myths-we-cut",
          },
          {
            prompt: "This course names Prichard's 'The History of Croquet' (1981) but does not quote it. Why?",
            options: [
              "It is out of print",
              "It is unreliable",
              "Because the course did not read it — and you do not cite what you have not read",
              "Because the WCF disputes it",
            ],
            correctIndex: 2,
            explanation:
              "It is named as further reading. Naming a source you have not read, as further reading, is honest; quoting it as if you had is not.",
            sourceLessonSlug: "victorian-craze",
          },
          {
            prompt: "What is the general rule this course applies when two sources disagree and one of them is selling something?",
            options: [
              "Average the two",
              "Cite the one that isn't selling — and say out loud that the other exists",
              "Cite whichever is more famous",
              "Cite neither",
            ],
            correctIndex: 1,
            explanation:
              "Which is why the WCF's Hall of Fame citation (1864) is load-bearing here, and the manufacturer's 1851/1857 claims are reported as 'the company says'.",
            sourceLessonSlug: "victorian-craze",
          },
          {
            prompt: "What does Olympedia itself warn about croquet at the 1900 Games?",
            options: [
              "That it drew record crowds",
              "That 'very little is known' about it, and that some Olympic historians say it was not even an Olympic sport",
              "That the results were falsified",
              "That women were barred",
            ],
            correctIndex: 1,
            explanation:
              "A good source tells you the limits of what it knows. That is a feature, not a weakness — and it is why Olympedia is trustworthy on the parts it does document.",
            sourceLessonSlug: "myths-we-cut",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════════════════════
    // SECTION 7 — Clubs, leagues, handicaps, the ladder. Every number here is published by a
    // governing body. Where two official sources conflict (USCA club/member counts), the course
    // TEACHES the conflict instead of silently picking one.
    // ══════════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "handicaps-and-bisques",
      title: "26 · Handicaps: the system that engineers you a fair game",
      section: "7 · Clubs, leagues, and the ladder",
      body: `Croquet's handicap system is the most under-appreciated thing in the sport, and for a young player it is the whole reason the sport is worth entering.

**Here is what it does.** It is designed so that, over time, **you win about half your games — against anybody.** Croquet England states the goal plainly: to "give each player an equal chance of winning half of the games he plays over a period of time" (Croquet England, n.d.-a).

And it is honest about what it is *not*: "Bisques do not transform a poorer player into a better one, just as being given a start does not change a slower runner into a faster one" (Croquet England, n.d.-a). It equalises the *contest*, not the players.

## Reading a handicap

Handicaps run **backwards** from what you might expect. "A **high number indicates a weaker player**, and a low number indicates a stronger player; **zero and negative handicaps indicate very strong players**" (Croquet England, n.d.-b).

A beginner might be a 16 or a 20. A very strong player is a **minus**.

## What the weaker player actually gets

**Association Croquet (WCF):** extra turns, called **bisques**. The AC Laws Glossary defines a bisque as "an extra turn given to a player or side in handicap play," and a **half-bisque** as "a restricted bisque during which no point may be scored for any ball." Law 42.2.1: "The number of bisques given by the lower-handicapped player to the higher is the **difference between their handicaps**." Law 42.2.2: "A bisque may **not** be split into two half-bisques" (World Croquet Federation, 2021).

**Golf Croquet (WCF):** extra **strokes**, not extra turns (Croquet England, n.d.-b; World Croquet Federation, 2022, Rule 20).

**American Six-Wicket (USCA):** bisques again, but of two kinds. Rule 15.1 distinguishes a **replay bisque** (replay the shot you just played) from a **continuation bisque** (an extra shot from where the ball stopped). Rule 15.2 allows **one half-bisque per game**. Rule 15.4: "the lower handicap plays at zero and the higher handicap player receives the difference between the handicaps" (United States Croquet Association, 2024).

## 🚩 The trap: American and Association handicaps are DIFFERENT SCALES

This one bites people constantly, so read it twice.

The USCA's own rankings page states: "**add two to your American Croquet handicap to determine your Association Croquet handicap**" (United States Croquet Association, n.d.-a). They are **not the same number**. A handicap range quoted for one code is meaningless in the other.

For that reason this course will **not** quote you a numeric range for the American scale — the USCA does not publish a floor. What it does publish (Part 15) is: "**Handicaps from 20 to 5 change by whole numbers; below 5 handicaps change by half numbers**," and a "**scratch player**" is one with a zero handicap.

Refusing to state a range is not a gap in this course. It is the course refusing to make one up.

## How your handicap changes — the Automatic Handicap System

Croquet England runs an **Automatic Handicap System (AHS)** — "the principal method by which handicaps are changed" (Croquet England, n.d.-c). It works like a chess rating:

- Every player carries an **index** number.
- In handicap play, **a win adds 10 to your index; a loss subtracts 10.** (In level play the swing depends on the gap between the handicaps.)
- Each handicap has a **trigger point**. Cross it, and your handicap moves.
- A "**step**" is defined precisely: "two bisques from handicap 12 upwards, one bisque between handicaps 5 and 12, and half a bisque between handicaps 0 and 4½."
- There is **anti-yo-yo protection** so you cannot bounce straight back after one bad game.

**Only qualifying games count**: "singles games in Croquet England Calendar Fixtures, Federation leagues, inter-club contests and designated club competitions." Explicitly excluded: "**Doubles, friendly games within a club, ad-hoc games and abandoned games**" (Croquet England, n.d.-c).

The USCA runs an equivalent: "When a player accumulates a plus or minus of **28 points** total, a handicap change should occur" (United States Croquet Association, 2024, Part 15).

## Why this matters more than it sounds

A 15-year-old beginner can walk into a club and, in their **first tournament**, play a genuinely competitive game against a player with forty years of experience — and have a real chance of winning. Not a participation ribbon. A win, in a game where the maths was arranged so the contest would be close.

Almost no other sport can do that. It is croquet's single best recruiting argument, and hardly anyone outside the sport knows it exists.

:::reveal What is the goal of the croquet handicap system, and what does it explicitly NOT claim to do? ||| The goal is to give each player an equal chance of winning about half their games over time — an even contest against anyone. It explicitly does not claim to make a weaker player better: as Croquet England puts it, "Bisques do not transform a poorer player into a better one, just as being given a start does not change a slower runner into a faster one."

## Sources
- Croquet England. (n.d.-a). *Handicapping: background*. https://www.croquet.org.uk/?p=games%2Fassociation%2Fhandicapping%2Fbackground
- Croquet England. (n.d.-b). *Handicapping*. https://www.croquet.org.uk/?p=games/handicapping
- Croquet England. (n.d.-c). *The Automatic Handicap System*. https://www.croquet.org.uk/?p=games%2Fassociation%2Fhandicapping%2Fautomatic
- ${WCF_AC}
- ${WCF_GC}
- ${USCA_RULES}
- United States Croquet Association. (n.d.-a). *Rankings*. https://www.croquetamerica.com/content.aspx?page_id=22&club_id=962311&module_id=460005`,
    },
    {
      slug: "the-ladder",
      title: "27 · The ladder: from a club lawn to a world championship",
      section: "7 · Clubs, leagues, and the ladder",
      body: `Now the numbers. Every figure in this lesson is published by a governing body, and several of them are genuinely startling.

## Rung 1: a club

**In England and Wales**, the national governing body is **Croquet England** (which is what the Croquet Association renamed itself to in January 2024). Its published scale: "more than **8,000 subscribers**"; "**200 clubs** are members"; **nine regional Federations** and **10 Federation Development Officers**; and — this is worth noticing — "more than **60 volunteer members** help run our organisation, which only employs **three staff**" (Croquet England, n.d.-a).

**In the United States**, the **USCA** was organised in **1977** and is a 501(c)(3) nonprofit (United States Croquet Association, n.d.-a).

**How big is the USCA? Its own two documents disagree**, and this course is going to tell you so rather than pick one:

| Official USCA source | What it says |
|---|---|
| The **2024 rulebook**, p. 4 | "over **200** croquet clubs and **3,500** members" |
| The **About Us** page | "nearly **300** member clubs and **3,000** members" |

Both are official. They cannot both be exactly right. So the honest statement is: **roughly 200–300 clubs and roughly 3,000–3,500 members, and the USCA's own two sources differ.** If you see a course, a blog or an AI confidently state one of those numbers with no caveat, you now know something they didn't.

(One more, while we are here: a widely-ranked country-club blog claims the USCA has five regions including a "Northwest" and a "Southwest." The USCA's own management page lists **six** regions: **Northeast, Mid-Atlantic, Southeast, Florida, Midwest, Western** — and its districts extend to **Bermuda, Canada and Mexico**. The blog is simply wrong.)

## Rung 2: leagues, in tiers

England's structure is a beautifully explicit ladder, and it is public (Croquet England, n.d.-b). The national inter-club competitions are **banded by handicap**, so a beginner's club team is not thrown at champions:

| Competition | Who it is for |
|---|---|
| **AC Tier 1** | Level advanced play, no handicap limit |
| **AC Tier 2 — the Mary Rose** | Handicaps 0 and above |
| **AC Inter-Club Handicap — the Longman Trophies** | Handicaps 3.5+, team aggregate ≥ 24 |
| **GC Tier 1 / Tier 2 (Murphy Shield) / Tier 3 (the Bowl)** | Tier 3 requires a team handicap aggregate ≥ 20 — i.e. it is *for* higher-handicap players |
| **The All-England Handicap** | Runs club → regional → **national final**, and is explicitly "designed for **newcomers and developing players**" |

Read that last one again. There is a **national final**, played at a national venue, **for beginners**. That is a rung most sports simply do not have.

## Rung 3: the world championship — and here is the number

The **World Croquet Federation** has **29 member countries** — 13 Full members, plus Associates and Recognised Croquet Organisations (World Croquet Federation, n.d.-b). The AC and GC World Championships are each held **every two years** (AC in odd years, GC in even years).

Now the field sizes, from the WCF's own event pages:

- **2025 Association Croquet World Championship** (National Croquet Center, West Palm Beach, 17–26 October 2025): **72 players** in the main event, plus 5 places from a qualifier. Entry fee **£189 per player**. Won by **Reg Bamford** of South Africa — his **sixth** AC world title — beating Mark Avery of England (World Croquet Federation, n.d.-c).
- **2026 Golf Croquet World Championship** (Cairo, 21–29 November 2026): "**The event capacity is 80 players**." Entry fee **£189** (World Croquet Federation, n.d.-d).

**Seventy-two players. Eighty players. In the world.**

Sit with that. A single regional qualifier in mainstream golf or tennis has a bigger field than the entire croquet world championship. The whole global elite of this sport would not fill a school assembly hall.

**And notice the £189 entry fee.** At croquet's world championship, **the players pay to enter.** That tells you something true and important about the sport's economics, which Section 8 takes apart properly.

## How you actually get in

You do not enter a WCF world championship directly. You are entered **through your national federation**, and the places come in four flavours (World Croquet Federation, n.d.-d):

1. **Federation / membership places** — allocated to member countries.
2. **World ranking places** — the highest-ranked players over the previous 12 months.
3. **Wild card places** — nominated by members.
4. **Qualifier places** — won at a qualifying tournament immediately before the event.

Rankings are collected automatically from results posted on **Croquetscores.com** (World Croquet Federation, n.d.-e). Your results, from ordinary tournaments, feed the world ranking. There is no gatekeeper deciding whether you count.

## An honest fact about which code is growing

The WCF's own 2024 report does not flatter the sport, and that is why it is worth reading: "The number of ranked games in the AC Rankings has **declined by 11% in the past five years**. All Members are reporting a decline. There has been **no reported growth in AC during 2024**." The WCF launched an "**AC Regeneration**" working group in response (World Croquet Federation, 2025).

Meanwhile **Golf Croquet is growing** — the same report notes Spain alone has "more than 2000+ GC players," and the European Club League's second year drew **29 teams from 9 member countries**.

If you are choosing where to put your effort, that is real, published, non-marketing information about which door is opening.

:::reveal How many players are in the main draw of the Association Croquet World Championship, and what does the entry fee tell you? ||| 72 players (2025, West Palm Beach), and the Golf Croquet World Championship has a capacity of 80. The world's entire croquet elite is under a hundred people. The £189 entry fee tells you that at croquet's world championship the PLAYERS PAY TO ENTER — there is no prize-money economy pulling them in, which is exactly why the money in croquet is on the building side, not the winning side.

## Sources
- ${CE_ABOUT}
- Croquet England. (n.d.-b). *National inter-club events*. https://www.croquet.org.uk/?p=tournament/caEvents/inter-club
- ${USCA_ABOUT}
- ${USCA_RULES}
- United States Croquet Association. (n.d.). *Management: districts and district presidents by region*. https://www.croquetamerica.com/content.aspx?page_id=22&club_id=962311&module_id=512109
- World Croquet Federation. (n.d.-b). *Member countries*. https://worldcroquet.org/member-countries/
- World Croquet Federation. (n.d.-c). *2025 AC World Championship*. https://worldcroquet.org/2025-ac-world-championship-usa/
- World Croquet Federation. (n.d.-d). *2026 Golf Croquet World Championship*. https://worldcroquet.org/2026-golf-croquet-world-championship/
- World Croquet Federation. (n.d.-e). *WCF world rankings*. https://worldcroquet.org/wcf-world-rankings/
- ${WCF_REPORT_2024}`,
      recallContent: [
        {
          prompt: "In croquet handicaps, does a high number mean a strong or a weak player?",
          answer:
            "A weak one. High numbers are weaker players; low numbers are stronger; zero and NEGATIVE ('minus') handicaps indicate very strong players.",
        },
        {
          prompt: "Why must you never carry an American Six-Wicket handicap straight over into Association Croquet?",
          answer:
            "They are different scales. The USCA's own rankings page says to ADD TWO to your American handicap to get your Association Croquet handicap. A range quoted for one code is meaningless in the other.",
        },
      ],
    },
    {
      slug: "school-and-college-croquet",
      title: "28 · School and college croquet (and the free membership nobody uses)",
      section: "7 · Clubs, leagues, and the ladder",
      body: `If you are in high school, this lesson is the one with your name on it.

## USCA membership is FREE for students and schools

Straight from the USCA's published membership rates (United States Croquet Association, n.d.-a):

| Membership | Cost |
|---|---|
| Adult (over 25) | **$75** |
| Junior (25 and under) | **$25** |
| **Student (full-time, at a USCA-registered school)** | **FREE** |
| **School** | **FREE** |
| Club | $125 |
| Lifetime | $2,000 |

**A full-time student pays nothing, and a school pays nothing.** Membership brings eligibility for sanctioned tournaments (state, regional, national), a handicap and a national ranking, US National Team eligibility, and access to referee and instructor training.

Read that list again and then reread the price. There is a national sports governing body offering a high-school student a ranked competitive pathway **for zero dollars**, and it is barely used.

The USCA also runs a **Juniors Division** (K–12 clubs) and a **Collegiate Division** with "programs in a dozen colleges and universities" (United States Croquet Association, n.d.-b).

## The real collegiate rung: the USCA Collegiate National Championship

It exists, it is annual, and the results are published (United States Croquet Association, n.d.-c):

- **2025:** held **26–27 April 2025** at the **Merion Cricket Club**, Haverford, Pennsylvania. **Oklahoma Wesleyan University won the team title.**
- **2024:** Golf Croquet team — 1st **St. John's College**, 2nd Oklahoma Wesleyan, 3rd US Naval Academy, 4th Texas A&M.

Notice how few schools are in those results. **That is the opportunity, not the problem.** A high-school student who starts a college croquet club is not joining a crowded field — they are entering one with a national championship and single-digit competition.

## The Annapolis Cup — a tradition, and NOT a rung on the ladder

The most famous croquet event in America is the **Annapolis Cup**: **St. John's College** against the **US Naval Academy**, in Annapolis, every spring, in front of a crowd, with a brass band and boaters and a Navy team in dress uniform.

From St. John's own official fact sheet (St. John's College, n.d.):

- "St. John's has won the Annapolis Cup **32 out of 42 matches**; the Midshipmen have taken the trophy **10 times**."
- **12 players per side**, in two-person teams.
- Played under **nine-wicket** rules, on a **100 ft × 50 ft** court.
- Presenting sponsor: **PNC Bank**.

Two honesty notes, both instructive:

1. **It is played under NINE-WICKET rules** — a different code from everything in Sections 2, 3 and 5. It is a spectacle and a wonderful tradition, but it is **not** a step toward a WCF world championship. Both schools *also* play in the USCA Collegiate Nationals; those are two different things and it is worth not confusing them.
2. **This course will not tell you the year of the first match.** St. John's own materials date the *origin legend* to 1982 ("according to legend...") but elsewhere describe the series as running "since 1983." When an institution's own page is internally inconsistent, the right move is to say "the early 1980s" and stop — not to pick the more satisfying number.

## In England: schools are paired with clubs

Croquet England runs a **Schools and Juniors Golf Croquet Championship** with **U13 and U11** age groups (Croquet England, n.d.-a). Its published development model is simple and copyable: **pair a school with a nearby croquet club**, and have club members provide the coaching, with schools bringing pupils to the club. It uses **Golf Croquet** deliberately, because GC "proved popular with both athletic and non-athletic children" (Croquet England, n.d.-b).

**One rule you must know if you want to coach kids:** Croquet England requires that "**all coaches who coach children or lead coaching sessions must be CqE U18s Licensed Coaches**" (Croquet England, n.d.-c). Safeguarding is not optional and it is not paperwork theatre. If your plan involves under-18s, that licence is step one, not step five.

:::reveal You are a full-time high-school student in the US. What does USCA membership cost you, and what does it get you? ||| Nothing — student membership is FREE (and school membership is free too). It brings a handicap, a national ranking, eligibility for sanctioned state/regional/national tournaments, US National Team eligibility, and access to referee and instructor training.

## Sources
- United States Croquet Association. (n.d.-a). *Member benefits and rates*. https://www.croquetamerica.com/content.aspx?page_id=22&club_id=962311&module_id=481592
- ${USCA_ABOUT}
- United States Croquet Association. (n.d.-c). *Collegiate national championship results*. https://www.croquetamerica.com/content.aspx?page_id=5&club_id=962311&item_id=117221
- St. John's College. (n.d.). *Croquet: Facts and history*. https://www.sjc.edu/annapolis/events/croquet/facts
- Croquet England. (n.d.-a). *Schools and juniors GC championship*. https://croquet.org.uk/?p=press%2Fnews
- Croquet England. (n.d.-b). *Aiming at the right target* [Recruitment guidance]. https://www.croquet.org.uk/?p=games%2Fclubs%2Finfo%2Frecruitment%2Ftarget
- Croquet England. (n.d.-c). *Coaching under-18s*. https://croquet.org.uk/?p=games%2Fcoaching%2Fu18`,
      recallContent: [
        {
          prompt: "Why does this course say 'roughly 200–300 clubs and 3,000–3,500 members' for the USCA instead of one number?",
          answer:
            "Because the USCA's own two official sources disagree: the 2024 rulebook says over 200 clubs and 3,500 members, while the About Us page says nearly 300 clubs and 3,000 members. When official sources conflict, report the conflict.",
        },
        {
          prompt: "How many players are in the main draw of the AC World Championship, and how do you get in?",
          answer:
            "72 (2025); the GC World Championship capacity is 80. You enter through your national federation, via federation places, world-ranking places, wild cards, or a qualifying tournament.",
        },
      ],
    },
    {
      slug: "quiz-leagues",
      title: "29 · Section quiz: clubs, leagues, and the ladder",
      section: "7 · Clubs, leagues, and the ladder",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the stated goal of the croquet handicap system?",
            options: [
              "To make weaker players stronger",
              "To give each player an equal chance of winning about half their games over time",
              "To rank players for prize money",
              "To keep beginners out of tournaments",
            ],
            correctIndex: 1,
            explanation:
              "Croquet England is explicit that it equalises the CONTEST, not the players: 'Bisques do not transform a poorer player into a better one, just as being given a start does not change a slower runner into a faster one.'",
            sourceLessonSlug: "handicaps-and-bisques",
          },
          {
            prompt: "In croquet, what does a NEGATIVE ('minus') handicap indicate?",
            options: ["A beginner", "A very strong player", "A suspended player", "A junior"],
            correctIndex: 1,
            explanation:
              "Handicaps run backwards: high numbers are weaker players, low numbers stronger, and zero or minus handicaps indicate very strong players.",
            sourceLessonSlug: "handicaps-and-bisques",
          },
          {
            prompt: "What does the weaker player receive in HANDICAP Association Croquet?",
            options: [
              "Extra strokes",
              "Bisques — extra turns; the number is the difference between the two handicaps (Law 42.2.1)",
              "A head start of six points",
              "The right to choose the code",
            ],
            correctIndex: 1,
            explanation:
              "AC gives extra TURNS (bisques). Golf Croquet gives extra STROKES. And Law 42.2.2 forbids splitting a bisque into two half-bisques.",
            sourceLessonSlug: "handicaps-and-bisques",
          },
          {
            prompt: "Why can't you carry an American Six-Wicket handicap straight into Association Croquet?",
            options: [
              "You can — they are the same scale",
              "They are DIFFERENT scales — the USCA's own rankings page says to add two to your American handicap to get your Association handicap",
              "Association Croquet has no handicaps",
              "Only the WCF may issue handicaps",
            ],
            correctIndex: 1,
            explanation:
              "This is one of the easiest errors to make in croquet. A range quoted for one code is meaningless in the other — which is why this course refuses to quote a numeric range for the American scale at all.",
            sourceLessonSlug: "handicaps-and-bisques",
          },
          {
            prompt: "In Croquet England's Automatic Handicap System, what happens to your index when you win a handicap game?",
            options: ["+10", "+1", "It does not change", "-10"],
            correctIndex: 0,
            explanation:
              "Win +10, loss -10 in handicap play. Cross a trigger point and your handicap moves. Anti-yo-yo protection stops you bouncing straight back.",
            sourceLessonSlug: "handicaps-and-bisques",
          },
          {
            prompt: "Which games count toward your Croquet England handicap?",
            options: [
              "Every game you play, including friendlies",
              "Only qualifying singles games — calendar fixtures, federation leagues, inter-club contests and designated club competitions. Doubles, friendlies and ad-hoc games are excluded",
              "Only national championships",
              "Only doubles",
            ],
            correctIndex: 1,
            explanation:
              "So the handicap reflects real competitive results, not casual play.",
            sourceLessonSlug: "handicaps-and-bisques",
          },
          {
            prompt: "How many players were in the main event of the 2025 Association Croquet World Championship?",
            options: ["72", "500", "1,200", "24"],
            correctIndex: 0,
            explanation:
              "Seventy-two, plus five qualifier places. The 2026 Golf Croquet World Championship has a stated capacity of 80. The world's entire croquet elite would not fill a school hall.",
            sourceLessonSlug: "the-ladder",
          },
          {
            prompt: "What does the £189 entry fee at the croquet world championship tell you?",
            options: [
              "That the prize money is enormous",
              "That the PLAYERS pay to enter — croquet has no prize-money economy, which is why the money in the sport is on the building side, not the winning side",
              "That entry is restricted to sponsored professionals",
              "That the WCF is a for-profit company",
            ],
            correctIndex: 1,
            explanation: "It is the single most clarifying economic fact in the sport.",
            sourceLessonSlug: "the-ladder",
          },
          {
            prompt: "How do you get into a WCF world championship?",
            options: [
              "You enter directly online",
              "Through your national federation — via federation/membership places, world-ranking places, wild cards, or a qualifying tournament",
              "By invitation from the reigning champion",
              "By winning a national title only",
            ],
            correctIndex: 1,
            explanation:
              "And rankings are collected automatically from results posted on Croquetscores.com — your ordinary tournament results feed the world ranking.",
            sourceLessonSlug: "the-ladder",
          },
          {
            prompt: "What does the WCF's own 2024 report say about Association Croquet?",
            options: [
              "It is the fastest-growing code",
              "Ranked AC games have declined by 11% in five years, with no reported growth in 2024 — prompting an 'AC Regeneration' working group",
              "It has been discontinued",
              "It has doubled in size",
            ],
            correctIndex: 1,
            explanation:
              "Meanwhile Golf Croquet is growing. A governing body publishing unflattering numbers about itself is a source worth trusting.",
            sourceLessonSlug: "the-ladder",
          },
          {
            prompt: "How does this course report the size of the USCA?",
            options: [
              "Exactly 300 clubs and 3,000 members",
              "As a range — roughly 200–300 clubs and 3,000–3,500 members — because the USCA's own rulebook and About Us page give different figures",
              "It refuses to say anything",
              "Exactly 200 clubs and 3,500 members",
            ],
            correctIndex: 1,
            explanation:
              "Two official sources conflict. The honest move is to report the conflict, not to silently pick the number you like.",
            sourceLessonSlug: "the-ladder",
          },
          {
            prompt: "What is the All-England Handicap?",
            options: [
              "The championship for minus-handicap players",
              "A competition running club → regional → national final that is explicitly designed for NEWCOMERS and developing players",
              "The national doubles title",
              "A ranking list",
            ],
            correctIndex: 1,
            explanation:
              "A national final, at a national venue, for beginners. Very few sports have that rung at all.",
            sourceLessonSlug: "the-ladder",
          },
          {
            prompt: "What does USCA membership cost a full-time student, and a school?",
            options: ["$75 each", "$25 each", "Both are FREE", "$125 for a school, $25 for a student"],
            correctIndex: 2,
            explanation:
              "Free student and free school membership — bringing a handicap, a ranking, eligibility for sanctioned tournaments and US National Team eligibility. Barely anybody uses it.",
            sourceLessonSlug: "school-and-college-croquet",
          },
          {
            prompt: "Why is the Annapolis Cup NOT a rung on the competitive ladder?",
            options: [
              "It is not a real event",
              "It is played under NINE-WICKET rules — a different code — so it leads nowhere near a WCF world championship, however wonderful a tradition it is",
              "Only Navy may enter",
              "It has no crowd",
            ],
            correctIndex: 1,
            explanation:
              "St. John's leads it 32–10 over 42 matches. Both schools ALSO play the USCA Collegiate Nationals — which is the real competitive rung. Do not conflate the two.",
            sourceLessonSlug: "school-and-college-croquet",
          },
          {
            prompt: "Croquet England requires what of anyone who coaches children?",
            options: [
              "Nothing in particular",
              "That they be a CqE U18s Licensed Coach",
              "A minus handicap",
              "A university degree",
            ],
            correctIndex: 1,
            explanation:
              "Safeguarding is step one, not step five. If your plan involves under-18s, budget for the licence before anything else.",
            sourceLessonSlug: "school-and-college-croquet",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════════════════════════
    // SECTION 8 — Opportunities for amateurs and entrepreneurs. THE WitUS ANGLE, and the section a
    // generic croquet course would skip. Every number is a PUBLISHED figure from a governing body
    // or a business's own public rate card. NOTHING here is an earnings estimate — no croquet
    // coach's, mallet-maker's or club manager's income is published anywhere, so none is invented.
    // ══════════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "the-economics-of-croquet",
      title: "30 · Read the market honestly first",
      section: "8 · Opportunities: amateurs and entrepreneurs",
      body: `Before anyone tells you how to make a living in croquet, here is the truth about the money, stated as bluntly as the evidence allows.

## 1. Nobody knows how many croquet players there are

There is **no published global player count**. Not from the World Croquet Federation, not from anyone. This course is not going to estimate one, because an estimate dressed as a fact is a lie with a decimal point.

What *is* published:

| Body | Published figure |
|---|---|
| **USCA** | roughly 200–300 clubs; roughly 3,000–3,500 members (its own two sources differ — Section 7) |
| **Croquet England** | "more than **8,000 subscribers**"; **200** member clubs |
| **Spain** (via the WCF) | "more than **2000+** GC players" |
| **WCF** | **29** member countries |

That is close to the whole published picture of the sport's size. If you see a confident "there are X million croquet players worldwide," ask where it came from. There is nowhere for it to have come from.

## 2. There is essentially no prize-money economy

This is the load-bearing fact of the entire section, and it is the one that flips the whole opportunity around.

- **No prize fund is published for either the Association Croquet or the Golf Croquet World Championship.** The WCF's event pages do not mention prize money at all.
- What the event pages *do* publish is the **entry fee: £189 per player** (World Croquet Federation, n.d.-a, n.d.-b).

**At croquet's world championship, the players pay.**

So if your plan was "get very good, win money," the plan does not exist. Not because croquet is unfair, but because **the sport is not organised around purses at all**.

## 3. Therefore the money is on the BUILD side, not the WIN side

Every real economic opening in croquet is on the *supply* side of the sport:

- **Equipment** — and the approved supply side of championship croquet is astonishingly small (Lesson 34).
- **Coaching and refereeing** — with published qualification ladders and real rate cards (Lesson 33).
- **Courts and turf** — a specialist greenkeeping niche with published specs (Lesson 32).
- **Clubs** — which governing bodies will **lend you money** to start (Lesson 31).
- **Venues and events** — resorts already charge hundreds of dollars an hour for croquet (Lesson 33).

## 4. What this course refuses to tell you

**Nobody's income from croquet is published anywhere** — not a coach's, not a mallet-maker's, not a club manager's. So this course gives you **rate cards** (what businesses publicly charge) and **published grant figures** (what governing bodies say they have given), and it labels them as exactly that.

If a source tells you "croquet coaches earn $X a year," ask them where they got it. There is no published dataset. There is no survey. That number was invented.

**Rate cards and grant totals are evidence. Earnings claims are not.** Build your plan on the first kind.

:::reveal Why is "get very good at croquet and win prize money" not a viable plan — and what does that fact tell you about where the opportunity IS? ||| Because there is essentially no prize-money economy. No prize fund is published for either world championship, and what IS published is the £189 entry fee — the players pay to compete. So the money in croquet is entirely on the BUILD side: equipment, coaching, courts and turf, club formation, venues and events.

## Sources
- World Croquet Federation. (n.d.-a). *2025 AC World Championship*. https://worldcroquet.org/2025-ac-world-championship-usa/
- World Croquet Federation. (n.d.-b). *2026 Golf Croquet World Championship*. https://worldcroquet.org/2026-golf-croquet-world-championship/
- ${WCF_REPORT_2024}
- ${CE_ABOUT}
- ${USCA_ABOUT}`,
    },
    {
      slug: "start-a-club",
      title: "31 · Start a club (they will lend you the money)",
      section: "8 · Opportunities: amateurs and entrepreneurs",
      body: `Most sports want your money. Croquet's governing bodies want **your club to exist**, and they publish what they have paid to make that happen.

## The published grant numbers

From Croquet England's own About Us page (Croquet England, n.d.-a):

> "In the last 10 years we have awarded **grants totalling nearly £200,000 to 80 member clubs** and **interest-free loans of more than £28,000 to 15 clubs**."

> "In the last eight years, **48 new clubs** have benefited from our financial and practical help."

Forty-eight new clubs in eight years, in one country, with the governing body helping to pay for them.

Member clubs also get **free Public Liability Insurance**, and there are **10 Federation Development Officers** whose job is to help (Croquet England, n.d.-a).

**The WCF does it internationally too.** Its Development page states that WCF Members "may **apply for loans or grants from the WCF** for the purpose of developing croquet in their domain," and that the WCF funds coaching and referee training courses and sends volunteer coaches abroad, with "**all transport costs paid via the WCF Development Programme**" (World Croquet Federation, n.d.).

**The USCA has run a grant program too** — and here the course has to be careful with you. The page this course could verify is the **2022** program: a **$15,000** total pot, **up to $1,000 per applicant**, open to **clubs and schools**, funding member-recruitment events, with a USCA representative attending and **20% withheld** pending a final report (United States Croquet Association, n.d.-a). A 2023 round is referenced elsewhere. **A current round could not be confirmed.** So: those figures describe the 2022/2023 rounds, and **your first move is to ask the USCA whether a round is open now** — not to assume it.

## The starter pack already exists

Croquet England publishes a **"Forming a Club"** page offering "advice about creating lawns, legal advice, contacts with other players in your area, **grants or loans**, publicity, [and a] **Starter Pack** (template club rules, membership forms etc.)" (Croquet England, n.d.-b).

Its club-resources index carries **model constitutions** (including CASC and CIO forms — the legal structures a UK amateur sports club actually uses), insurance guidance, safeguarding policy, a communications toolkit, draft press releases, customisable leaflets, an accessibility guide, and a lawn-construction booklet (Croquet England, n.d.-c).

**Honesty note, and it is a useful one:** the "Forming a Club" page itself carries a banner reading *"This page has not been validated recently by its owner."* The governing body is telling you, on its own page, that the page may be stale. **Believe it, and confirm the current position by email before you rely on a figure.** A source that flags its own staleness is being *more* trustworthy, not less.

## How much lawn do you actually need? They published that too

The **Croquet Facility Guide** — written by Croquet Victoria and published by the WCF as an advice sheet — gives real planning numbers (Croquet Victoria, 2019):

- **One court ≈ 1,066 m²** (a 25.6 × 32 m court plus a 4 m buffer).
- **Two courts ≈ 2,132 m² (0.21 hectares)** — plus pavilion and parking, so realistically **half a hectare to a hectare** for a two-court venue.
- **One court per 25 members** is the planning ratio; **one court can accommodate up to 8 players at a time**.
- Their demand estimate: "one 2-court venue per **33,000 people aged over 15 years**."

Do the arithmetic on your own town. Then check how many croquet clubs it has.

## And you do not need a full-size court to start

Remember from Lesson 3: **GC Rule 2.4** explicitly allows a smaller court keeping the 5:4 proportions, and the USCA rulebook gives **50 × 40 ft** as a practical minimum. A school field corner is a legal court.

**The realistic first version of "start a club" is therefore not "buy a hectare."** It is: *one small court, in a space you already have access to, with a school or community partner, playing Golf Croquet because it is the fastest to teach.*

:::reveal Name three concrete forms of support a governing body publishes for people starting a croquet club. ||| Any three of: Croquet England grants (nearly £200,000 to 80 clubs in ten years) and interest-free loans (over £28,000 to 15 clubs); free Public Liability Insurance for member clubs; 10 Federation Development Officers; a "Forming a Club" Starter Pack with template club rules and membership forms; model constitutions and a lawn-construction booklet; WCF loans/grants to member federations plus volunteer coaches with transport costs paid; and the USCA's club/school grant program (verified for its 2022 round — check whether a current round is open).

## Sources
- ${CE_ABOUT}
- Croquet England. (n.d.-b). *Forming a club*. https://www.croquet.org.uk/?p=games/clubs/info/NewClub
- Croquet England. (n.d.-c). *Club resources*. https://www.croquet.org.uk/?p=games/clubs/info
- World Croquet Federation. (n.d.). *Development*. https://worldcroquet.org/wcf-business/development/
- United States Croquet Association. (n.d.-a). *Club grant program* [The 2022 round — verify whether a current round is open]. https://www.croquetamerica.com/content.aspx?page_id=22&club_id=962311&module_id=505061
- ${FACILITY_GUIDE}
- ${WCF_GC}
- ${USCA_RULES}`,
      recallContent: [
        {
          prompt: "Why does this course refuse to give you a global croquet player count?",
          answer:
            "Because no governing body publishes one. There is nowhere for such a number to have come from — so any confident 'X million players worldwide' figure was invented.",
        },
        {
          prompt: "What is published about prize money at the croquet world championships?",
          answer:
            "Nothing — no prize fund is published for either the AC or GC World Championship. What IS published is the £189 entry fee. The players pay to compete.",
        },
      ],
    },
    {
      slug: "courts-and-turf",
      title: "32 · Courts and turf: the specialist trade underneath the sport",
      section: "8 · Opportunities: amateurs and entrepreneurs",
      body: `Every croquet club in the world sits on a piece of grass that somebody has to build and somebody has to maintain. That is a trade, it has published specifications, and almost nobody is trained in it.

The source throughout is the **Croquet Facility Guide** (2nd ed., 2019), written by Croquet Victoria and published by the World Croquet Federation as an advice sheet (Croquet Victoria, 2019). It is one of the most useful documents in the sport and hardly anyone reads it.

## The actual specification

| Thing | The published number |
|---|---|
| **Mowing height** | **3 mm to 5 mm**, with a cylinder mower, "up to **three times a week** in the growing season" |
| **Court plus borders** | "each court should measure **39 by 32 yards minimum**" |
| **Land per court** | ≈ **1,066 m²** (court + 4 m buffer) |
| **Land per 2-court venue** | ≈ **2,132 m² (0.21 ha)** before pavilion and parking |
| **Lighting** | **at least 150 lux** — and the guide is explicit that 100 lux (the minimum for bowls) "is insufficient for croquet" |
| **Surface** | grass only: "**The sport is not currently played on synthetic surfaces**" |
| **Grass type** | "a hard wearing, preferably drought tolerant grass such as **Santa Ana couch**" — *stated for Australian conditions; your climate will differ, and the guide is an Australian document* |

Maintenance is a real job: **scarification and aeration at least once a year**, plus pest control, top dressing, weed control and rolling.

## ⚠️ A sourcing warning you can use on any technical question

Search the web for "croquet lawn mowing height" and you will get answers like "½ to ¾ inch" or "¼ to 5/8 inch" — from **turf-retailer blogs and backyard-game sites**. They are not governing-body sources, and **they contradict each other**.

This course uses **3–5 mm, from the Croquet Victoria/WCF guide, and tells you where it came from.** When a technical number matters, find the document that a governing body actually stands behind. The blogs are guessing.

## The business insight hiding in one sentence

Here is the best entrepreneurial fact in the whole guide, and you have to read carefully to catch it:

> "The grass height required for competitive croquet is approximately **3 mm**, compared with **4 mm for lawn tennis** and **1 mm for competitive bowls**. Daily sharing with lawn tennis (if played on turf) can therefore be achieved fairly readily." (Croquet Victoria, 2019)

**Croquet's turf requirement sits between tennis and bowls.** That means:

- A croquet lawn **can share a site, and a greenkeeper, with a tennis or bowls club** — and the guide notes that new clubs commonly do exactly that, because "a new club will not have the resources or expertise to maintain its own lawns."
- Which means the realistic route to a new court is often **not "buy land"** but **"partner with a facility that already has fine turf and a greenkeeper"** — a golf club, a bowls club, a school with a good field, a resort.

That reframes the whole capital problem. The scarce thing is not grass. It is **flat, finely-mown, well-drained grass with someone competent already looking after it** — and those places already exist, under-used, in every town.

## What that makes you

If you learn croquet turf properly, you are one of a very small number of people who can:

- advise a club on building a court to specification,
- keep a court to 3–5 mm through a season,
- and tell a resort or a school truthfully what it would cost.

That is a trade skill with a published standard and almost no competition. It also pairs directly with groundskeeping and turf-management careers that exist regardless of croquet.

:::reveal What mowing height does the WCF-published Croquet Facility Guide specify, and why is that number commercially interesting? ||| 3 mm to 5 mm, cut with a cylinder mower up to three times a week in the growing season. It is commercially interesting because croquet's ~3 mm sits between lawn tennis (~4 mm) and competitive bowls (~1 mm) — so a croquet court can share a site and a greenkeeper with an existing tennis or bowls facility. The scarce resource isn't land; it's finely-mown turf with someone competent already maintaining it.

## Sources
- ${FACILITY_GUIDE}
- ${WCF_GC}`,
      recallContent: [
        {
          prompt: "How much land does a two-court croquet venue need, before pavilion and parking?",
          answer:
            "About 2,132 m² — roughly 0.21 hectares (each court is about 1,066 m² including a 4 m buffer). Realistically half a hectare to a hectare once you add a pavilion and parking.",
        },
        {
          prompt: "What is the planning ratio for courts to members, and how many players fit on one court?",
          answer:
            "One court per 25 members; one court can accommodate up to 8 players at a time (Croquet Facility Guide, 2019).",
        },
      ],
    },
    {
      slug: "coaching-and-officiating",
      title: "33 · Coaching, refereeing, and what venues already charge",
      section: "8 · Opportunities: amateurs and entrepreneurs",
      body: `## The qualification ladder is published, and it is short

Croquet England publishes its whole coaching ladder (Croquet England, n.d.-a):

| Level | What it takes |
|---|---|
| **Club-Level Coach** (yellow badge) | A **two-day course** — lecture plus practical, formal assessment indoors and on the lawn, and an **open-book test on both the GC Rules and the AC Laws**. Qualifies you to coach beginners and high-handicap players **at your own club**. |
| **Grade 1 Coach** (blue badge) | AC handicap **12 or better**; GC handicap **6 or better** |
| **Grade 2 Coach** | AC handicap **6 or better** + a Silver merit award + Assistant Referee standard; GC handicap **3 or better** |
| **Grade 3 Coach** | AC handicap **0 or better** *plus an AC Referee's qualification*; GC **minus handicap** *plus a GC Referee's qualification* |
| **Examining Coach** | Assesses and recommends candidates |

**A two-day course.** That is the entry qualification to coach croquet at a club in England.

**In the United States**, the USCA has a **Referee & Instructor Committee** that sets testing, certification and re-certification standards, and runs **Croquet Schools** ("Learn From the Pros") at the National Croquet Center — Beginner, Intermediate and Advanced, with a **maximum 8:1 student-to-teacher ratio** and five hours a day on court (United States Croquet Association, n.d.-a, n.d.-b).

**And the WCF built an online route.** In December 2023 it launched **online Golf Croquet rules training and accreditation**, run with Ian Shore of the Chiltern Croquet Academy. The knock-on effect is quietly significant: because candidates arrive having done the pre-study pack, "some UK referee courses have now been reduced to a **one-day course**" (World Croquet Federation, 2025).

**The hard requirement, again:** to coach under-18s in England you must be a **CqE U18s Licensed Coach** (Croquet England, n.d.-b). Do that first.

## What venues already charge — real, public rate cards

These are **published prices from businesses' own websites**. They are *rate cards*, not anyone's income, and this course will not pretend otherwise.

**The Greenbrier** (White Sulphur Springs, West Virginia) publishes (Greenbrier, n.d.):

- Private croquet lesson: **$128** for one person
- **$80 per person** for groups of 2–6
- **$802** for groups larger than 6
- Open play: **$27 per adult per hour**; **$14 per child (13–17) per hour**

**Pinehurst Resort** (North Carolina) publishes, for sessions including instruction, equipment and lawn fees (Pinehurst Resort, n.d.):

- **$100** — up to 3 people, 1 hour
- **$175** — 4 people, 1.5 hours
- **$275** — 5–8 people
- **$550** — 9–16 people
- **$750** — 17–32 people
- **$20 per person** for experienced players who don't need instruction

Pinehurst runs all of that on **two croquet courts**, and states that croquet there can handle up to **24 players**.

## Put the two halves together

- The qualification to coach beginners at a club: **a two-day course**.
- What a resort charges for a croquet session: **$100 to $750**.
- What a resort needs in order to sell those sessions: **a lawn, some sets, and someone who can teach.**

That is a very short distance between "I know this game" and "someone is paying me to teach it." Croquet is one of the few sports where the coaching qualification is measured in **days** rather than years.

**The honest caveat, and it is the whole reason this course is trustworthy:** those are the *prices the venues charge*, not the money a coach takes home. **No croquet coach's earnings are published anywhere.** If you want to know what a coaching hour is worth in your area, the way to find out is to call three clubs and three resorts and ask — not to read a number off a website that invented it.

:::reveal What qualification does Croquet England require to coach beginners at your own club, and what do two US resorts publicly charge for a croquet session? ||| A Club-Level Coach badge — a TWO-DAY course with a practical assessment and an open-book test on both the GC Rules and the AC Laws. The Greenbrier publishes $128 for a private lesson ($80 per person for groups of 2–6); Pinehurst publishes $100 (up to 3 people, 1 hour) rising to $750 (17–32 people). Those are RATE CARDS, not anyone's earnings — no croquet coach's income is published anywhere.

## Sources
- Croquet England. (n.d.-a). *Coaching*. https://croquet.org.uk/?p=games%2Fcoaching
- Croquet England. (n.d.-b). *Coaching under-18s*. https://croquet.org.uk/?p=games%2Fcoaching%2Fu18
- United States Croquet Association. (n.d.-a). *Referee and instructor committee*. https://www.croquetamerica.com/content.aspx?page_id=22&club_id=962311&module_id=475662
- United States Croquet Association. (n.d.-b). *Croquet schools*. https://www.croquetamerica.com/content.aspx?page_id=22&club_id=962311&module_id=561773
- ${WCF_REPORT_2024}
- Greenbrier. (n.d.). *Croquet* [Published rate card]. https://www.greenbrier.com/activities/croquet/
- Pinehurst Resort. (n.d.). *Lawn sports* [Published rate card]. https://www.pinehurst.com/activities/lawn-sports/`,
      recallContent: [
        {
          prompt: "Why does this course quote resort rate cards rather than croquet coaches' salaries?",
          answer:
            "Because no croquet coach's, mallet-maker's or club manager's income is published anywhere. A rate card is evidence of what a business charges; an earnings figure with no source is an invention.",
        },
        {
          prompt: "What is the sourcing lesson in the 'croquet lawn mowing height' example?",
          answer:
            "The numbers you find on turf-retailer and backyard-game blogs contradict each other and are not governing-body sources. Use the 3–5 mm figure from the WCF-published Croquet Facility Guide — and say where it came from.",
        },
      ],
    },
    {
      slug: "equipment-and-events",
      title: "34 · Equipment and events: an unusually small supply side",
      section: "8 · Opportunities: amateurs and entrepreneurs",
      body: `## The entire global supply side of championship croquet fits on one page

The WCF publishes a list of **every approved ball and hoop in the world**. As of its 21 October 2024 list (World Croquet Federation, 2024):

**Approved balls — three brands. In the world.**

| Ball | Named supplier |
|---|---|
| Dawson 2000 International Mk III | Paul Manwaring |
| Sunshiny CQ16 | Richard Wu (Taiwan) |
| **Invictus X** (approved to Nov 2027) | **Robert Fletcher** |

**Approved hoops — nine.** Omega Adjustable · **Jaques Championship** (approved from July 2005) · George Wood Championship (Wood Mallets Ltd) · Hopewell · Atkins Quadway (Michael McClure, NZ) · Aldridge · Holdfast · Ultra (Michael Moore, South Africa) · Cerrajería Artística Borrajo, Spain (approved March 2024).

**And here is how you get on that list:** a manufacturer submits a set to the WCF Equipment Group **with a £100 fee**, and approval runs for a fixed term (World Croquet Federation, 2023).

**One hundred pounds.** That is the published fee to have equipment tested for approval at world-championship level in this sport. It is not a moat. It is a doorstep.

## The example that proves the whole section

**Robert Fletcher** won the **2013 Association Croquet World Championship** at Surbiton, beating Paddy Chapman. At **20 years old** he was the **youngest player ever to win the title**, and the first Australian (Croquet England, 2013).

That same Robert Fletcher is the named supplier of the **WCF-approved Invictus X ball** and runs **Invictus Croquet**, which makes mallets (World Croquet Federation, 2024). And in 2025 he won the **USCA Association Croquet national singles title** (United States Croquet Association, n.d.).

**A world champion who built an equipment company inside his own sport, and whose product is on the governing body's approved list.** Every step of that is checkable in governing-body documents. It is not a motivational anecdote — it is a documented path.

## The oldest name in the sport, and the lesson it teaches

**John Jaques II** is in the WCF Hall of Fame for the 1864 rulebook (Section 6), and the **Jaques Championship hoop is still on the WCF's approved list today**, approved from 1 July 2005 (World Croquet Federation, 2024). A company that shaped the rules in the 1860s is still supplying championship equipment.

Now hold three facts together, because a lazy course would only tell you the first one:

1. **The business dates itself to 1795** and calls itself the oldest games manufacturer in the world — *that is the company's own claim, on its own website*.
2. **The registered company** — JOHN JAQUES AND SON LIMITED, company no. **00399667** — was **incorporated on 22 October 1945**, per the UK's Companies House register.
3. As read on Companies House, its status was **"Voluntary Arrangement"** — a formal insolvency procedure, not simply "active" (Companies House, n.d.).

All three can be true at once. The romantic one is the one everybody repeats.

**⚠️ Check this yourself before you repeat it.** Companies House is a **live register** and a voluntary arrangement can conclude. That is precisely why this course tells you *where* it read it instead of just asserting it. **Go and look.** The URL is in the sources.

## Events and venues

- **Equipment makers sponsor championships.** Oakley Woods Croquet (Ontario) is the title sponsor of the Oakley Woods Canadian National GC Championship. That is a business model in one sentence: make the equipment, sponsor the event that showcases it.
- **A croquet venue can be an events business.** The **National Croquet Center** in West Palm Beach — home of the USCA and host of the 2025 AC World Championship — markets itself as an events venue: on its own site, **twelve full-sized championship lawns** on four acres, plus a **19,000 sq ft clubhouse** (built 2002) with a capacity of **600 guests** (National Croquet Center, n.d.).

  **A discrepancy worth noticing:** the Palm Beach County Sports Commission describes the same venue as **10 acres with 19 lawns** (Palm Beach County Sports Commission, n.d.). The venue's own site says 4 acres and 12 lawns. This course reports both and picks neither, because it cannot resolve them. That is what you do with a conflict you cannot settle.

- **A club can host the national collegiate championship.** Merion Cricket Club has hosted the USCA Collegiate Nationals for several years running (Section 7).

## The shape of the whole opportunity

Put the section together:

- Three approved ball makers in the world; nine approved hoops; **a £100 approval fee**.
- A world championship whose **entire field is under 100 players** and whose players **pay to enter**.
- Governing bodies that will **lend you money**, **insure your club**, and **send you a coach with the travel paid**.
- Resorts already charging **$100–$750** a session for something they need a lawn and a teacher to deliver.
- A coaching qualification measured in **days**.

**That is not a saturated market. It is an under-built one.** Which is a completely different problem, and a much better one to have.

:::reveal How many ball brands are WCF-approved worldwide, what does approval cost, and who supplies one of them? ||| Three approved ball brands in the world (Dawson, Sunshiny, and Invictus X), and nine approved hoops. A manufacturer submits a set to the WCF Equipment Group with a £100 fee. The Invictus X is supplied by Robert Fletcher — who won the 2013 AC World Championship at age 20, the youngest ever, and runs Invictus Croquet. A world champion who built an equipment company inside his own sport.

## Sources
- World Croquet Federation. (2024). *WCF approved balls and hoops (21 October 2024)*. https://worldcroquet.org/wp-content/uploads/2024/11/WCF-Approved-Balls-and-Hoops-21-October-2024.pdf
- World Croquet Federation. (2023). *WCF equipment regulations* (v6.4). https://worldcroquet.org/wp-content/uploads/2023/12/WCFEquipmentRegulations_v6.4published.pdf
- Croquet England. (2013). *Robert Fletcher wins the World Championship* [News]. https://www.croquet.org.uk/?p=press%2Fnews&NewsID=4683
- United States Croquet Association. (n.d.). *National champions*. https://www.croquetamerica.com/content.aspx?page_id=22&club_id=962311&module_id=459897
- Companies House. (n.d.). *John Jaques and Son Limited, company no. 00399667* [Live public register — re-check before repeating]. https://find-and-update.company-information.service.gov.uk/company/00399667
- National Croquet Center. (n.d.). *Home*. https://www.croquetnational.com/
- Palm Beach County Sports Commission. (n.d.). *National Croquet Center* [Gives figures that conflict with the venue's own site]. https://www.palmbeachsports.com/facilities/national-croquet-center/`,
      recallContent: [
        {
          prompt: "What does Croquet England require to become a Club-Level Coach?",
          answer:
            "A two-day course: lecture plus practical, a formal assessment indoors and on the lawn, and an open-book test on BOTH the GC Rules and the AC Laws.",
        },
        {
          prompt: "Name two published resort rate points for croquet instruction.",
          answer:
            "Any two of: the Greenbrier's $128 private lesson, or $80 per person for groups of 2–6; Pinehurst's $100 for up to 3 people for an hour, $275 for 5–8 people, or $750 for 17–32 people.",
        },
      ],
    },
    {
      slug: "your-move",
      title: "35 · Your move: the next ninety days",
      section: "8 · Opportunities: amateurs and entrepreneurs",
      body: `You now know more about croquet than almost anyone who has not played it. Here is what to actually do with that, in order, using only things this course has verified.

## Weeks 1–2 — get on a lawn

1. **Find your nearest club.** Both the USCA and Croquet England publish club finders. There are roughly 200–300 USCA clubs and 200 Croquet England member clubs.
2. **Ask for Golf Croquet.** It is one stroke per turn (Rule 1.1.1), you will be playing a real game in twenty minutes, and it is the code that is actually **growing** (World Croquet Federation, 2025).
3. **Name the code, every time.** "Which code do you play here?" is the sentence that tells a club you are serious.

## Weeks 3–6 — get a handicap

4. **Join.** If you are a full-time student in the US, **USCA membership is free** — and it brings a handicap, a national ranking, and eligibility for sanctioned tournaments (United States Croquet Association, n.d.).
5. **Get an initial handicap** and start a **handicap card**. Only qualifying games count (Croquet England, n.d.).
6. **Enter one handicap tournament.** Not a level-play one. The system is *engineered* to give you an even contest — that is its stated purpose. Use it.

## Weeks 7–12 — pick your lane

Now choose one, and go at it seriously:

| If you want to... | Do this |
|---|---|
| **Play** | Drill the croquet stroke, not the long shot. Break-building is the game; hitting in is the fallback. Keep the match log from Lesson 16. |
| **Coach** | Ask your club about the **Club-Level Coach** course (two days). If you want to coach under-18s in England, the **U18s licence comes first**. |
| **Build a club** | Read the **Croquet Facility Guide** and Croquet England's **Forming a Club** starter pack. Find a site that already has fine turf and a greenkeeper — a school, a bowls club, a tennis club. Start with a **small court** (GC Rule 2.4 makes it legal). |
| **Build a business** | Read the **WCF approved-equipment list** and the **Equipment Regulations** (£100 approval fee). Look at what the three approved ball makers and nine approved hoop makers *don't* cover. |
| **Organise** | Start a school or college club. The **USCA Collegiate National Championship** exists, school membership is **free**, and the results pages show how few schools compete. |

## The thing to hold onto

Croquet's world championship has **fewer than a hundred players in it**, its governing bodies will **lend you money to start a club**, its coaching qualification takes **two days**, and its championship equipment approval costs **£100**.

Almost every sport tells young people the door is narrow. In this one, **the door is standing open and nobody is walking through it.**

And you now have the one habit that matters more than any of it: **when someone tells you a fact about this sport — a rule, a number, a lovely story about Victorian ladies and hidden mallets — you ask which code, and you ask where they read it.**

:::reveal What is the single most efficient first move for a US high-school student who wants to enter competitive croquet, and why? ||| Join the USCA as a student — it is FREE for full-time students, and it brings a handicap, a national ranking, and eligibility for sanctioned state, regional and national tournaments. Then get an initial handicap and enter a HANDICAP tournament, because the handicap system is explicitly designed to give you an even contest against anyone.

## Sources
- ${WCF_GC}
- ${WCF_REPORT_2024}
- United States Croquet Association. (n.d.). *Member benefits and rates*. https://www.croquetamerica.com/content.aspx?page_id=22&club_id=962311&module_id=481592
- Croquet England. (n.d.). *The Automatic Handicap System*. https://www.croquet.org.uk/?p=games%2Fassociation%2Fhandicapping%2Fautomatic
- ${FACILITY_GUIDE}`,
      recallContent: [
        {
          prompt: "How many WCF-approved croquet balls exist worldwide, and what is the approval fee?",
          answer:
            "Three approved ball brands (Dawson, Sunshiny, Invictus X) and nine approved hoops. A manufacturer submits a set to the WCF Equipment Group with a £100 fee.",
        },
        {
          prompt: "What three facts about Jaques must be held together, rather than repeating only the romantic one?",
          answer:
            "(1) The business dates ITSELF to 1795 — its own claim. (2) The registered company, no. 00399667, was incorporated in 1945. (3) As read on Companies House, its status was 'Voluntary Arrangement' — a formal insolvency procedure. All three can be true at once, and the register is live, so re-check before repeating.",
        },
      ],
    },
    {
      slug: "quiz-opportunities",
      title: "36 · Section quiz: amateurs and entrepreneurs",
      section: "8 · Opportunities: amateurs and entrepreneurs",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is published about prize money at the croquet world championships?",
            options: [
              "A £50,000 purse for the winner",
              "Nothing — no prize fund is published for either world championship; what IS published is the £189 entry fee the players pay",
              "Prize money is shared among the top 8",
              "The WCF pays travel for all competitors",
            ],
            correctIndex: 1,
            explanation:
              "That single fact reframes the whole opportunity: the money in croquet is on the build side (equipment, coaching, courts, clubs, venues), not the win side.",
            sourceLessonSlug: "the-economics-of-croquet",
          },
          {
            prompt: "Why won't this course give you a worldwide croquet player count?",
            options: [
              "Because it is a secret",
              "Because no governing body publishes one — so any confident figure was invented",
              "Because it changes daily",
              "Because the WCF forbids publishing it",
            ],
            correctIndex: 1,
            explanation:
              "An estimate dressed as a fact is a lie with a decimal point. What IS published: USCA ~200–300 clubs, Croquet England 8,000+ subscribers and 200 clubs, WCF 29 member countries.",
            sourceLessonSlug: "the-economics-of-croquet",
          },
          {
            prompt: "According to Croquet England's own published figures, what has it given clubs over the last decade?",
            options: [
              "Nothing — clubs are self-funded",
              "Grants totalling nearly £200,000 to 80 member clubs, and interest-free loans of more than £28,000 to 15 clubs",
              "£5 million in prize money",
              "Free courts to every applicant",
            ],
            correctIndex: 1,
            explanation:
              "It also reports that 48 new clubs benefited from its financial and practical help over eight years, and it provides member clubs with free Public Liability Insurance.",
            sourceLessonSlug: "start-a-club",
          },
          {
            prompt: "What does the WCF's Development programme offer its member federations?",
            options: [
              "Nothing",
              "Loans or grants for developing croquet in their domain, plus funded coaching/referee courses and volunteer coaches with transport costs paid",
              "A share of TV revenue",
              "Free courts",
            ],
            correctIndex: 1,
            explanation: "A governing body that will lend you money and send you a coach is not a normal sports economy.",
            sourceLessonSlug: "start-a-club",
          },
          {
            prompt: "What is the published planning ratio of croquet courts to club members?",
            options: ["One court per 25 members", "One court per 200 members", "Two courts per member", "There is no published ratio"],
            correctIndex: 0,
            explanation:
              "From the WCF-published Croquet Facility Guide, which also notes one court accommodates up to 8 players at a time, and estimates demand at one 2-court venue per 33,000 people aged over 15.",
            sourceLessonSlug: "start-a-club",
          },
          {
            prompt: "What mowing height does the WCF-published Croquet Facility Guide specify?",
            options: ["½ to ¾ inch", "3 mm to 5 mm, with a cylinder mower, up to three times a week in the growing season", "1 mm", "It does not say"],
            correctIndex: 1,
            explanation:
              "The imperial figures you find online come from turf-retailer and backyard-game blogs, which contradict each other and are not governing-body sources.",
            sourceLessonSlug: "courts-and-turf",
          },
          {
            prompt: "Why can a croquet lawn realistically share a site with a tennis or bowls club?",
            options: [
              "Because the sports are played at the same time",
              "Because croquet's turf height (~3 mm) sits between lawn tennis (~4 mm) and competitive bowls (~1 mm), so the facility and the greenkeeper can be shared",
              "Because croquet needs no maintenance",
              "Because the courts are the same size",
            ],
            correctIndex: 1,
            explanation:
              "This reframes the capital problem: the scarce resource isn't land, it's finely-mown turf with someone competent already maintaining it — and those places already exist, under-used, in most towns.",
            sourceLessonSlug: "courts-and-turf",
          },
          {
            prompt: "What does the Croquet Facility Guide say about synthetic surfaces?",
            options: [
              "They are preferred for new clubs",
              "'The sport is not currently played on synthetic surfaces'",
              "They are required for tournaments",
              "They are cheaper and just as good",
            ],
            correctIndex: 1,
            explanation:
              "Grass only — which is exactly why turf skill is a real and scarce trade in this sport.",
            sourceLessonSlug: "courts-and-turf",
          },
          {
            prompt: "What does Croquet England's Club-Level Coach qualification require?",
            options: [
              "A university degree in sports science",
              "A two-day course with a practical assessment and an open-book test on BOTH the GC Rules and the AC Laws",
              "A minus handicap",
              "Ten years of play",
            ],
            correctIndex: 1,
            explanation:
              "Higher grades then require playing standards (Grade 1: AC handicap 12 or better, GC 6 or better; Grade 3: AC 0 or better plus a referee's qualification).",
            sourceLessonSlug: "coaching-and-officiating",
          },
          {
            prompt: "Pinehurst Resort's published croquet rate card runs from...",
            options: [
              "$5 to $20",
              "$100 (up to 3 people, 1 hour) to $750 (17–32 people)",
              "$1,000 to $5,000",
              "It does not publish prices",
            ],
            correctIndex: 1,
            explanation:
              "The Greenbrier publishes $128 for a private lesson and $80 per person for groups of 2–6. These are RATE CARDS — what the venue charges — not anyone's earnings.",
            sourceLessonSlug: "coaching-and-officiating",
          },
          {
            prompt: "Why does this course quote rate cards instead of coaches' salaries?",
            options: [
              "Because salaries are confidential by law",
              "Because no croquet coach's, mallet-maker's or club manager's income is published anywhere — so any earnings figure you see was invented",
              "Because coaches are unpaid",
              "Because the USCA forbids it",
            ],
            correctIndex: 1,
            explanation:
              "Rate cards and published grant totals are evidence. Earnings claims with no source are not. Build a plan on the first kind.",
            sourceLessonSlug: "the-economics-of-croquet",
          },
          {
            prompt: "How many ball brands are on the WCF's approved list worldwide, and what does approval cost?",
            options: [
              "Three brands (Dawson, Sunshiny, Invictus X); a manufacturer submits a set with a £100 fee",
              "Fifty brands; approval is free",
              "One brand; approval costs £50,000",
              "The WCF does not approve equipment",
            ],
            correctIndex: 0,
            explanation:
              "Nine hoops are approved as well. A £100 approval fee is not a moat — it is a doorstep. That is what an under-built supply side looks like.",
            sourceLessonSlug: "equipment-and-events",
          },
          {
            prompt: "What makes Robert Fletcher the section's key example?",
            options: [
              "He is the richest player in croquet",
              "He won the 2013 AC World Championship at 20 — the youngest ever — and is the named supplier of the WCF-approved Invictus X ball, running his own equipment company",
              "He invented Golf Croquet",
              "He founded the WCF",
            ],
            correctIndex: 1,
            explanation:
              "A world champion who built an equipment company inside his own sport — and every step of it is checkable in governing-body documents. Not an anecdote: a documented path.",
            sourceLessonSlug: "equipment-and-events",
          },
          {
            prompt: "Which three facts about the Jaques company must be held together?",
            options: [
              "Only that the business dates itself to 1795",
              "That the business dates ITSELF to 1795 (its own claim); that the registered company was incorporated in 1945; and that its Companies House status was read as 'Voluntary Arrangement' — a formal insolvency procedure",
              "That it went bankrupt in 1864",
              "That it no longer makes croquet equipment",
            ],
            correctIndex: 1,
            explanation:
              "All three can be true at once, and the romantic one is the one everybody repeats. Companies House is a LIVE register — re-check before repeating any of it.",
            sourceLessonSlug: "equipment-and-events",
          },
          {
            prompt: "What is the most efficient first move for a US high-school student who wants to compete?",
            options: [
              "Buy a championship mallet",
              "Join the USCA — student membership is FREE and brings a handicap, a national ranking and eligibility for sanctioned tournaments — then get a handicap and enter a HANDICAP tournament",
              "Enter the world championship qualifier",
              "Build a court",
            ],
            correctIndex: 1,
            explanation:
              "The handicap system is explicitly engineered to give you an even contest against anyone. Use the thing that was built for you.",
            sourceLessonSlug: "your-move",
          },
        ],
      },
    },
  ],
};
