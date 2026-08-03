// Authored "BVC Sommelier: Wine" — the first course in the BVC Sommelier series
// (plans/53-bvc-sommelier-series-wine.md). It is the SEQUEL to BVC Season 2, Episode 9,
// "Wine: Blood of the Earth": that episode teaches where wine came from and what it did to the
// world, this one teaches the learner to taste it, judge it, and choose it.
//
// SOURCING DISCIPLINE (the load-bearing part of this file):
//   * Appellation and labelling rules are cited to the LAW or the regulator, never to a wine blog.
//     EU wine law is Regulation (EU) No 1308/2013 (PDO/PGI) with the labelling detail in
//     Delegated Regulation (EU) 2019/33; US rules are 27 CFR Part 4 (labelling) and Part 9 (the
//     AVA list), administered by the TTB. Champagne dosage bands come from 2019/33 Annex III.
//   * Where a number varies by region, vintage, grape or market, the course says so and gives a
//     RANGE. German Predikat minimum must weights differ by region and variety, so this course
//     teaches the ladder and its ordering, and does not invent one Oechsle number for all of
//     Germany. Serving temperatures are bands, not points.
//   * No producer is ever named as a recommendation. Flights ask for a CATEGORY ("a Chablis, or an
//     unoaked Chardonnay") because naming a bottle would date the course within a vintage and read
//     as an endorsement nobody paid for.
//   * No fabricated tasting notes, and none attributed to a real critic or producer. Descriptors
//     are the learner's own to build, which is also the pedagogy.
//   * Grape parentage claims come from the DNA work, not from folklore: Cabernet Sauvignon as a
//     Cabernet Franc x Sauvignon Blanc cross is Bowers and Meredith (1997) in Nature Genetics.
//   * NO affiliation is claimed with WSET or the Court of Master Sommeliers, and nothing here is
//     sold as exam preparation. Lesson 1 says that in plain language. The arc is informed by what
//     the public syllabi cover because that is the consensus shape of the subject.
//
// AGE GATE AND THE NO-ALCOHOL PATH: seeded with requiresAgeGate: true. Every flight carries a
// non-alcoholic parallel drill (the `noAlcohol` field is required on the shared Flight type in
// scripts/lib/sommelier.ts, so it cannot be dropped by omission), because a learner who does not
// drink can still build the structural vocabulary, and because that pattern has to exist before
// the cannabis and tobacco courses in this series need it.

import type { AuthoredCourse } from "./authored-course";
import { flightCard, STRUCTURE, TASTING_GRID, TASTING_METHOD_NOTE, type Flight } from "../lib/sommelier";

// ─────────────────────────────── FLIGHTS ───────────────────────────────

const FLIGHT_0: Flight = {
  n: 0,
  title: "The calibration set (no alcohol required)",
  teaches: "What acid, tannin, sugar and body feel like as SENSATIONS, before any wine is involved.",
  tier: "core",
  bottles: [
    { role: "Acid, three strengths", target: "One lemon, plus a glass of water", priceUsd: "1-2" },
    { role: "Tannin, three strengths", target: "A box of plain black tea", priceUsd: "3-5" },
    { role: "Sweetness, three strengths", target: "Table sugar you already own", priceUsd: "0-2" },
    { role: "Body, three weights", target: "Skim milk, whole milk, half and half", priceUsd: "4-8" },
  ],
  procedure: [
    "Make three cups of water with a quarter, a half and a full teaspoon of sugar. Taste in order. Notice that sweetness lands on the front of your tongue first and fades.",
    "Squeeze lemon into three cups at rising strength. Taste in order. Notice where you salivate: the sides of the tongue and under the jaw. That salivation IS acidity.",
    "Steep the same tea bag in three cups for four, eight and twelve minutes. Sip each. Notice that the difference is not flavour, it is grip: your gums and cheeks go dry. That drying is tannin.",
    "Sip skim, then whole, then half and half. The flavour barely changes, the WEIGHT changes. That weight is body.",
    "Write one sentence per component in your own words. Not a wine word, your word.",
  ],
  lookFor:
    "You can say out loud where in your mouth you feel each of the four, and you stopped needing to look it up.",
  noAlcohol: "This whole flight is already alcohol free. It is the foundation for every later flight, so run it first either way.",
};

const FLIGHT_1: Flight = {
  n: 1,
  title: "Structure, four wines, one lesson each",
  teaches: "Scoring the structural components in real wine, where they arrive mixed rather than isolated.",
  tier: "core",
  bottles: [
    {
      role: "High acid, low tannin, bone dry",
      target: "A dry Riesling from Germany or a Muscadet from the Loire",
      priceUsd: "15-22",
      substitute: "Any unoaked white labelled dry from a cool region",
    },
    {
      role: "Obvious residual sugar",
      target: "An off-dry or Kabinett-level German Riesling",
      priceUsd: "16-25",
      substitute: "A Moscato d'Asti, which is sweeter still and makes the point louder",
    },
    {
      role: "High tannin",
      target: "A young Cabernet Sauvignon, or a Nebbiolo from Langhe",
      priceUsd: "18-30",
      substitute: "A young Tannat or a Sagrantino if the shop has one",
    },
    {
      role: "High alcohol and full body, low tannin",
      target: "A Zinfandel or a Grenache from a warm region, 14.5% or above",
      priceUsd: "16-25",
      substitute: "Any red whose label states 15% alcohol by volume",
    },
  ],
  procedure: [
    "Pour about 30 ml of each into four identical glasses, left to right in the order above.",
    "Score ONLY structure, and do it before you smell for flavours: sweetness, acid, tannin, alcohol, body, finish. Low, medium, or high for each. Nothing else.",
    "Go back to the calibration cups from Flight 0 between wines. Compare the wine directly against the lemon water and the twelve minute tea.",
    "Count the finish out loud in seconds on each wine. Most people are shocked by how short a cheap wine actually is.",
    "Now write flavour notes. Notice how much easier they come once structure is already on the page.",
  ],
  lookFor:
    "Two of your six structure scores would match another taster's within one step, and you can defend every score by pointing to where you felt it.",
  noAlcohol:
    "Substitute four non-alcoholic drinks that isolate the same axes: unsweetened cranberry juice (high acid), a sweetened iced tea (residual sugar), a twelve minute black tea (tannin), and a full fat oat milk (body). Score them on the same six-line grid. The vocabulary transfers exactly, and alcohol is the one line you skip.",
};

// ─────────────────────────────── COURSE ───────────────────────────────

export const BVC_SOMMELIER_WINE_COURSE: AuthoredCourse = {
  title: "BVC Sommelier: Wine",
  description:
    "Learn to taste wine systematically and choose it confidently: the four-stage tasting grid and the six structural components, the noble grapes and the markers that give each one away, how climate and place land in the glass, what the cellar does (oak, malolactic conversion, skin contact, carbonic maceration, the sparkling methods, botrytis and fortification), how to read any label in the world by decoding AOC, DOCG, DO, Predikat and AVA, the regions that set the reference points, what a price actually buys you in a shop and on a restaurant list, correct service, storage and the seven faults worth recognising, the mechanics behind why the classic food pairings work, and finally blind deduction: putting a glass in front of yourself and calling the grape, the climate, and the age from evidence. The sequel to BVC Season 2, Episode 9, which covers wine's history. Twelve tasting flights with budgets and substitutes, and a parallel no-alcohol path through every drill. Not affiliated with, and not exam preparation for, any certifying body.",
  lessons: [
    // ══════════════ MODULE 1 · BEFORE YOU POUR ══════════════
    {
      slug: "somm-how-this-works",
      title: "1 · What this course is, and what it refuses to be",
      section: "Module 1 · Before you pour",
      body: `You already took Episode 9. You know wine grew out of the Caucasus around six thousand years before the common era, you know what phylloxera did, you know why the Judgment of Paris mattered and what the Dop system was. That is the history of wine.

This is the other half. This course teaches you to pick up a glass and say something TRUE about it, and then to walk into a shop or open a wine list and choose well, on purpose, with your own money.

**What you will be able to do at the end**

- Taste any wine through a repeatable four-stage grid instead of guessing.
- Score six structural components (sweetness, acidity, tannin, alcohol, body, finish) and defend each score.
- Recognise the markers of about twenty grape varieties.
- Read a French, Italian, Spanish, German or American label cold and know what it legally promises.
- Say what a wine is likely to cost to make, and therefore whether its price is fair.
- Serve, store, decant, and spot the seven faults that actually show up.
- Sit in front of a wine you have never seen and deduce the grape, the climate and the rough age from evidence.

**What this course refuses to be**

It is **not affiliated with the Wine and Spirit Education Trust, the Court of Master Sommeliers, or any other certifying body, and it is not preparation for their exams.** Nobody here is authorised to say it would be. The arc it follows is informed by what those public syllabi cover, because after decades of teaching, the profession has converged on roughly the same order, and pretending otherwise would just make the course worse. If you go on to sit an exam, this will have helped. That is a claim about the subject, not a promise about a result.

It also will not tell you which bottles to buy by name. Producers change, vintages change, and a course that named its favourites would be out of date in a year and would read like advertising. Flights ask for CATEGORIES.

**How the flights work.** Twelve tasting flights, most of them three or four bottles in the fifteen to twenty-five dollar band, plus three flights where the course asks you to spend more because the cheap version genuinely cannot demonstrate the lesson. Each flight tells you the budget up front, what to ask a shop for, and what to accept instead when they are out.

**If you do not drink alcohol.** Every flight has a no-alcohol parallel drill printed at the bottom of the card. It uses tea, juice, milk and coffee to isolate the same structural axes, and it teaches the same vocabulary. You will skip exactly one line of the grid, alcohol, and you will still finish this course able to read a label, judge a list, and pair a menu. That path is deliberate, not a consolation prize.

**One safety rule, stated once and meant every time.**

${TASTING_METHOD_NOTE}

## Sources
- International Organisation of Vine and Wine. (2021). *OIV standard for international wine competitions and spirituous beverages of vitivinicultural origin*. OIV. https://www.oiv.int
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.`,
    },
    {
      slug: "somm-what-a-sommelier-does",
      title: "2 · What a sommelier actually does all day",
      section: "Module 1 · Before you pour",
      recallContent: [
        {
          prompt: "This course names one thing it flatly refuses to claim about itself. What is it?",
          answer:
            "That it is affiliated with, or preparation for, any certifying body such as WSET or the Court of Master Sommeliers. It follows a similar arc because the profession has converged on that order, and it says so instead of implying an endorsement.",
        },
      ],
      body: `The word arrives loaded. Most people picture a tasting competition: a person in a suit swirling a glass, announcing a village and a vintage, and being right. That is real, it is a small and theatrical corner of the job, and it is almost never what the work is.

**The job is buying.** A working beverage director spends more hours on spreadsheets than on stemware. What sells, what sits, what the cost percentage is, what to do with eleven cases of a wine the kitchen just took off the pairing menu. A wine list is a capital allocation problem with a personality.

**The job is service.** Getting the right glass to the right person at the right temperature, opening a bottle without theatre, and reading the table. The single most valuable service skill is not identification, it is asking a good question. "What have you enjoyed lately?" outperforms "Do you like Burgundy?" every time, because the second one asks the guest to perform knowledge and the first one asks them to remember pleasure.

**The job is translation.** Between the kitchen and the cellar, between a grower's story and a guest's budget, between what someone said they wanted ("something dry") and what they actually meant (very often: something without obvious sweetness, which is a different thing, because a dry wine with ripe fruit reads sweet to many drinkers).

**The job is protecting the guest.** From a corked bottle, from a bottle stored badly, and from being upsold. A good sommelier's most profitable long-term move is finding you the thirty-eight dollar bottle that overdelivers. You come back.

**And the myth.** Blind tasting is the sport of the profession, not its substance. It is trained the way musicians train scales: it sharpens the deduction that makes everything else faster. Module 11 teaches it honestly, including how often good tasters are wrong. Anyone who tells you they call wines correctly most of the time is selling something.

**What this means for you.** You are almost certainly not training for a floor job. You are training to be the person who orders well for a table of six, who does not overpay, who can tell whether a bottle is flawed or just not to your taste, and who can pair a menu without a chart. That is the same skill set, minus the spreadsheets.

:::reveal A guest says "I want something dry." What are the two different things they might mean, and what is the follow up question that separates them? ||| They might mean technically dry (little or no residual sugar), or they might mean not fruit forward, since a fully dry wine with very ripe fruit and high alcohol reads sweet to a lot of drinkers. The separating question is about a wine they already liked: "What is the last wine you really enjoyed?" A remembered pleasure tells you which of the two they mean, where a technical question just asks them to perform knowledge.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Court of Master Sommeliers. (n.d.). *Introductory sommelier certificate: Course content*. https://www.courtofmastersommeliers.org`,
    },
    {
      slug: "somm-your-palate-is-trainable",
      title: "3 · Your palate is trainable, and the bottleneck is language",
      section: "Module 1 · Before you pour",
      body: `The most common thing people say before their first tasting is "I have a terrible palate." Almost none of them do. What they have is a small vocabulary, and vocabulary is the actual bottleneck.

**Most of tasting is smelling.** The tongue reports a short list: sweet, sour, salty, bitter, umami, plus physical sensations like temperature, burn, and the drying grip of tannin. Everything you call "flavour" beyond that list is smell, arriving through the back of the throat while you chew or swallow. That route is called retronasal olfaction, and it is why food goes flat when you are congested. Odour perception runs on a large family of odorant receptor genes, discovered by Buck and Axel (1991), work that later took the Nobel Prize in Physiology or Medicine (Nobel Assembly, 2004). You have the hardware.

**People genuinely differ, less than they think.** There is real variation in sensitivity to certain bitter compounds, measured with the chemicals PROP and PTC: some people taste them intensely, some barely at all (Bartoshuk, 2000). That variation is real, and it is far smaller than the difference between a trained taster and an untrained one. Training beats genetics here.

**Naming is the hard part, and it is learnable.** Sensory science has known for decades that describing an odour is much harder than detecting or recognising it, and that trained panels improve mostly by fixing shared reference points to words (Lawless & Heymann, 2010). Which is exactly what a tasting grid is: an agreement about what words mean.

So the practical method for this whole course:

1. **Score structure before flavour.** Structure is close to measurable. Flavour is associative and personal.
2. **Use your own references.** If a wine smells like the inside of your grandmother's spice cupboard, write that. A borrowed descriptor you cannot actually smell teaches you nothing.
3. **Always taste comparatively.** One wine alone teaches almost nothing. Two wines side by side teach the difference, and difference is the only thing your senses are good at.
4. **Write it down before you discuss it.** Tasting in a group without writing first turns into agreeing with whoever spoke first.

**Some practical setup.** Use the same glass for every wine in a flight: shape changes what you smell, so a mixed set of glasses adds a variable you did not intend. There is an actual international standard for a tasting glass (ISO 3591:1977). You do not need it, you need four of anything identical with a bowl that narrows at the top. Taste in daylight if you can, against something white. Skip perfume, cologne, and coffee beforehand.

Now run Flight 0. It is the only flight that requires no wine at all, and every later flight leans on it.

${flightCard(FLIGHT_0)}

:::reveal You are congested and everything tastes like nothing. Which part of tasting is actually impaired, and which part still works? ||| Retronasal olfaction is impaired, which is most of what people call flavour. The tongue's own reports still work: sweet, sour, salty, bitter, umami, plus the physical sensations of temperature, alcohol warmth and tannin's drying grip. That is why you can still score most of the structural grid with a head cold, and why you should not try to describe aromas that day.

## Sources
- Bartoshuk, L. M. (2000). Comparing sensory experiences across individuals: Recent psychophysical advances illuminate genetic variation in taste perception. *Chemical Senses, 25*(4), 447-460. https://doi.org/10.1093/chemse/25.4.447
- Buck, L., & Axel, R. (1991). A novel multigene family may encode odorant receptors: A molecular basis for odor recognition. *Cell, 65*(1), 175-187. https://doi.org/10.1016/0092-8674(91)90418-X
- International Organization for Standardization. (1977). *Sensory analysis: Apparatus. Wine-tasting glass* (ISO 3591:1977). ISO.
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.
- Nobel Assembly at Karolinska Institutet. (2004). *The Nobel Prize in Physiology or Medicine 2004*. https://www.nobelprize.org/prizes/medicine/2004/summary/`,
    },
    {
      slug: "somm-quiz-1",
      title: "4 · Knowledge check: before you pour",
      section: "Module 1 · Before you pour",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does this course explicitly refuse to claim about itself?",
            options: [
              "That it is affiliated with or preparation for any certifying body",
              "That tasting can be learned by an ordinary drinker",
              "That comparative tasting is better than tasting one wine alone",
              "That structure should be scored before flavour is described",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 1 states plainly that there is no affiliation with WSET, the Court of Master Sommeliers, or any other body, and that nothing here is exam preparation. The other three are things the course actively teaches.",
            sourceLessonSlug: "somm-how-this-works",
          },
          {
            prompt: "Most of what a drinker calls the flavour of a wine is actually arriving by which route?",
            options: [
              "Retronasal olfaction, smell reaching the nose from the back of the throat",
              "Taste buds on the tongue reporting sweet, sour, salty, bitter and umami",
              "The trigeminal nerve reporting temperature and chemical burn",
              "Tactile receptors in the gums registering the grip of tannin",
            ],
            correctIndex: 0,
            explanation:
              "The tongue reports a short list of tastes. Everything beyond that list is odour arriving through the back of the throat, which is why food goes flat when you are congested. The other three routes are real and each reports something, just not flavour.",
            sourceLessonSlug: "somm-your-palate-is-trainable",
          },
          {
            prompt: "In the calibration set, what is the specific sensation that identifies acidity?",
            options: [
              "Salivation at the sides of the tongue and under the jaw",
              "A drying, grippy feeling across the gums and cheeks",
              "Warmth spreading down the throat and across the chest",
              "Weight sitting on the middle of the tongue after swallowing",
            ],
            correctIndex: 0,
            explanation:
              "Acid makes you salivate, and where you salivate is the giveaway. The drying grip is tannin, the warmth is alcohol, and the weight is body. Each of the four has its own address in your mouth, which is why Flight 0 isolates them separately.",
            sourceLessonSlug: "somm-your-palate-is-trainable",
          },
          {
            prompt: "Why does the course ask for a CATEGORY of wine in every flight rather than naming producers?",
            options: [
              "Named bottles date the course within a vintage and read as unpaid endorsement",
              "Category buying is always cheaper than buying a named producer",
              "Shops are legally barred from stocking wines named in educational material",
              "A named producer would make the no-alcohol path impossible to run",
            ],
            correctIndex: 0,
            explanation:
              "Producers and vintages change constantly, so a named list goes stale fast and starts to look like advertising. Price is unrelated, no such law exists, and the no-alcohol path runs on tea and juice regardless.",
            sourceLessonSlug: "somm-how-this-works",
          },
          {
            prompt: "How does the course describe the role of blind tasting in the sommelier profession?",
            options: [
              "The sport of the profession, useful training, but not its substance",
              "The single most important daily skill on a restaurant floor",
              "An obsolete ritual with no modern training value",
              "A reliable way to authenticate a bottle's stated origin",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 2 compares it to a musician practising scales: it sharpens deduction that speeds up everything else, but the daily work is buying, service and translation. Module 11 teaches it while being honest about how often good tasters are wrong.",
            sourceLessonSlug: "somm-what-a-sommelier-does",
          },
          {
            prompt: "Why does the course insist you use identical glasses across a flight?",
            options: [
              "Glass shape changes what you smell, adding a variable you did not intend",
              "Identical glasses hold identical volumes, which is required for legal pours",
              "Mismatched glasses change the wine's temperature at different rates",
              "Tasters are graded on presentation as well as accuracy",
            ],
            correctIndex: 0,
            explanation:
              "The whole point of a flight is that only one thing differs between the wines. Different bowl shapes deliver aroma differently, so mixed glassware quietly contaminates the comparison. Nobody is grading your table setting.",
            sourceLessonSlug: "somm-your-palate-is-trainable",
          },
          {
            prompt: "What does the research on PROP and PTC sensitivity actually establish about tasting ability?",
            options: [
              "Real individual variation exists, and it matters less than training does",
              "Roughly half of all people are physically incapable of learning to taste",
              "Sensitivity to bitterness predicts a person's preferred wine style",
              "Trained tasters lose bitter sensitivity over years of practice",
            ],
            correctIndex: 0,
            explanation:
              "Bartoshuk's work documents genuine differences in how intensely people register certain bitter compounds. The course's point is one of scale: that difference is smaller than the gap between a trained and an untrained taster, so 'I have a terrible palate' is usually a vocabulary problem.",
            sourceLessonSlug: "somm-your-palate-is-trainable",
          },
          {
            prompt: "A guest asks for 'something dry.' What ambiguity does that request carry?",
            options: [
              "They may mean low residual sugar, or they may mean not fruit forward",
              "They may mean low alcohol, or they may mean high acidity",
              "They may mean an old vintage, or they may mean an inexpensive one",
              "They may mean unoaked, or they may mean unfiltered",
            ],
            correctIndex: 0,
            explanation:
              "A technically dry wine with very ripe fruit and high alcohol still reads sweet to many drinkers, so the word covers two different requests. Asking what they last enjoyed separates them better than any technical question.",
            sourceLessonSlug: "somm-what-a-sommelier-does",
          },
          {
            prompt: "Why does the course tell you to write your notes before discussing a wine with others?",
            options: [
              "Group tasting without writing first collapses into agreeing with whoever spoke first",
              "Written notes are required evidence in any certified tasting",
              "Speaking aloud changes the temperature of the wine in the glass",
              "Discussion before writing makes the finish harder to time accurately",
            ],
            correctIndex: 0,
            explanation:
              "Once someone says 'green apple' out loud, everyone smells green apple. Committing your own note to paper first is what keeps a group tasting from measuring social influence instead of wine.",
            sourceLessonSlug: "somm-your-palate-is-trainable",
          },
          {
            prompt: "What is the stated reason tasters spit rather than swallow?",
            options: [
              "Ethanol degrades discrimination quickly, and a flight is four to six pours",
              "Swallowing prevents accurate measurement of the finish",
              "Spitting is required to detect cork taint reliably",
              "Swallowed wine coats the tongue and blocks retronasal aroma",
            ],
            correctIndex: 0,
            explanation:
              "The goal is a working palate for an hour, not a buzz for twenty minutes. You can time a finish perfectly well after spitting, and cork taint is found on the nose long before the palate.",
            sourceLessonSlug: "somm-how-this-works",
          },
        ],
      },
    },

    // ══════════════ MODULE 2 · THE GRID ══════════════
    {
      slug: "somm-the-grid",
      title: "5 · The four-stage grid",
      section: "Module 2 · The grid",
      recallContent: [
        {
          prompt: "Name the four structural components isolated in Flight 0 and where in the mouth each is felt.",
          answer:
            "Sweetness at the tip of the tongue, arriving first. Acidity at the sides of the tongue and under the jaw, felt as salivation. Tannin as a drying grip across the gums and cheeks, a texture rather than a taste. Body as weight on the middle of the tongue.",
        },
      ],
      body: `Every serious tasting system in the world is a version of the same four stages, in the same order. The order is not tradition, it is a defence against your own brain: each stage narrows the field before the next one, and skipping ahead means you decide what the wine is and then find evidence for it.

${TASTING_GRID.map((s, i) => `**${i + 1}. ${s.label}.** ${s.does}\n\n*The trap:* ${s.trap}`).join("\n\n")}

**Why the order is load bearing.** Confirmation bias is not a character flaw, it is how perception works. Tell a taster the wine is a Chardonnay and they will find butter and oak in a Chenin Blanc. So the grid works from the least suggestible evidence to the most: what the wine physically looks like, then what it smells like, then measurable mouth sensations, and only at the end, the guess. In blind tasting, that discipline is the whole game (Module 11).

**Write in a fixed order every time.** A tasting note in a random order is a diary entry. A tasting note in the same order every time is DATA: you can compare last Tuesday's Chablis to tonight's, because the same lines are in the same places.

A workable blank looks like this. Copy it into a notebook, print twenty, or draw it on an index card.

| Line | What goes here |
| --- | --- |
| Sight | Clear or hazy, pale to deep, the actual colour word, the rim |
| Nose | Clean or faulty, intensity, then three to five aromas in your own words |
| Sweetness | Dry, off dry, medium, sweet |
| Acidity | Low, medium minus, medium, medium plus, high |
| Tannin | Low, medium, high, plus a texture word (fine, chalky, grippy, coarse) |
| Alcohol | Low, medium, high, and the stated percentage from the label if you can see it |
| Body | Light, medium, full |
| Finish | Short, medium, long, and your count in seconds |
| Conclusion | What it is, how good it is, whether it is ready, and WHY |

**The five step scale, and why "medium plus" is not fussiness.** Most components get five steps rather than three, because almost every wine you meet is medium something, and a three step scale collapses the entire middle into one useless box. The difference between medium and medium plus acidity is the difference between a wine that works with a rich sauce and one that does not.

**The one rule that makes the whole grid honest:** every score has to be defensible by pointing at a sensation. "High acid because my mouth watered for three seconds after I spat." Not "high acid because it is a Riesling."

:::reveal Why does the grid put SIGHT first when colour alone almost never identifies a wine? ||| Because it is the least suggestible evidence, and it narrows the field before your brain commits to a guess. Colour tells you a small number of real things (rough age from the rim, likely a white or a red, sometimes an oxidative style), and the order protects you from the reverse process, where you decide the wine is a Chardonnay first and then find butter in a Chenin Blanc.

## Sources
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.`,
    },
    {
      slug: "somm-sight",
      title: "6 · Sight: what colour honestly tells you",
      section: "Module 2 · The grid",
      body: `Tilt the glass about thirty degrees over something white, and look at the wine where it thins out at the edge. Four things, in order.

**Clarity.** Clear or hazy. Haze used to be a straightforward fault signal. It is not any more: a lot of deliberately unfined and unfiltered wine is hazy on purpose and perfectly sound. So haze is now a question, not a verdict.

**Intensity.** Pale, medium, or deep. Look at the CENTRE of the wine, straight down through the bowl. Intensity in a red comes mostly from how much skin contact the wine got and how thick the grape's skins were, which is why a Pinot Noir with thin skins is pale and a Syrah is not.

**Colour.** Say an actual colour word. Whites run lemon green, lemon, gold, amber, brown. Reds run purple, ruby, garnet, tawny, brown. Rosé runs pink, salmon, orange.

**The rim.** Where the wine thins at the edge, compare it to the centre. This is the most useful thing sight gives you, because it is the closest thing to an age reading.

**What colour genuinely tells you**

| Observation | Honest inference |
| --- | --- |
| A white gaining gold and depth | Age, or oak, or oxidative handling, or a warmer climate. Four candidates, not one |
| A red shifting from purple to garnet at the rim | Age. Anthocyanins polymerise over time and the blue tones go first |
| A very pale red | A thin skinned grape (Pinot Noir, Nebbiolo, Gamay) or very short skin contact |
| A red that is nearly opaque to the centre | A thick skinned grape, a warm climate, or long maceration |
| Any deposit in an old bottle | Normal. Colour and tannin polymerise and drop out. This is exactly why you decant old reds |

**What colour does NOT tell you, no matter what anybody says at the table**

*Legs, or tears, the streaks running down the inside of the glass, are not a quality signal.* They are the Marangoni effect: alcohol evaporates faster than water from the film on the glass, the surface tension changes, and the liquid climbs and falls back. Thick slow legs tell you the wine is high in alcohol or sugar. That is all they tell you, and it is worth saying at a table because it is the single most confidently repeated piece of folklore in wine.

*Depth of colour is not quality either.* It is grape thickness and winemaking. Some of the most expensive red wine on earth is pale.

**One thing sight is genuinely great at.** Spotting a wine that has been cooked. A white that has gone deep gold or brown before its time, especially with a slightly sticky, baked apple nose, has probably sat in a hot warehouse or a car. Module 9 covers heat damage as a fault. Sight catches it first.

:::reveal A red wine is pale ruby and nearly transparent. Name two completely different explanations, and say what other evidence would separate them. ||| Either a thin skinned grape such as Pinot Noir, Nebbiolo or Gamay, or a very short maceration on the skins in a wine that could have been darker. Tannin separates them: Nebbiolo is pale AND ferociously tannic, which is one of the most useful contradictions in tasting, while a lightly macerated wine of a darker grape is usually soft. Age is the third candidate if the rim is garnet or tawny.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Waterhouse, A. L., Sacks, G. L., & Jeffery, D. W. (2016). *Understanding wine chemistry*. Wiley.`,
    },
    {
      slug: "somm-nose",
      title: "7 · Nose: primary, secondary, tertiary",
      section: "Module 2 · The grid",
      body: `Smell the wine BEFORE you swirl. The most volatile compounds are sitting on the surface and they leave first, and a fault, if there is one, is often clearest in that first still sniff. Then swirl, which drags more aroma out of solution, and smell again. Short sniffs beat one long inhale: olfactory receptors adapt within seconds, which is why the third sniff of the same glass tells you less than the first.

Then answer three questions in order.

**1. Is it clean?** Clean means no fault. Cork taint, oxidation, volatile acidity, reduction, brettanomyces. Module 9 teaches all of them. Ask this first, because if the answer is no, nothing else on the sheet matters.

**2. How intense is it?** Light, medium, or pronounced. Intensity is not quality. Some great wines are shy, especially when young or cold.

**3. What do you actually smell?** Three to five things, in your own words. Now sort them into three buckets, because the bucket is what carries information.

| Bucket | Where it comes from | Examples |
| --- | --- | --- |
| **Primary** | The grape and the fermentation | Fruit, flowers, herbs, pepper, grassiness |
| **Secondary** | Winemaking choices after fermentation | Vanilla, clove, toast, smoke, coconut from oak. Butter and cream from malolactic conversion. Bread, biscuit and pastry from time on lees |
| **Tertiary** | Age, in bottle or in barrel, oxidative or not | Dried fruit, leather, forest floor, mushroom, tobacco, nuts, honey, petrol in aged Riesling |

That sorting is the single most useful move on the nose, because it maps straight onto decisions. Primary heavy and nothing else usually means young and unoaked. Obvious secondary means someone chose oak, or lees, or malolactic conversion, and you can now ask why. Real tertiary character means the wine has age, which immediately narrows the field and tells you something about how it was stored.

**Fruit vocabulary that is worth the effort.** Rather than naming a specific fruit you may not be sure of, place it on two axes first, because both axes carry real information about climate and ripeness.

- **Family:** citrus, orchard (apple, pear), stone (peach, apricot), tropical (mango, pineapple) for whites. Red fruit (cranberry, cherry, raspberry), black fruit (blackberry, cassis, plum) for reds.
- **State:** underripe and green, fresh and just ripe, ripe, overripe, cooked, or dried.

"Cooked black fruit" tells another taster far more than "blackberry" does. It says warm climate or a hot vintage, high probable alcohol, low probable acid, before you have tasted anything.

**One honest warning about descriptors.** Wine writing is full of aromas most people cannot reliably find, and a taster who claims twenty of them is usually performing. Three specific things you actually smell beat fifteen you copied.

:::reveal You smell vanilla, clove and a faint coconut in a white wine. Which bucket is that, and what does it let you infer about how the wine was made? ||| Secondary: those are oak markers, so the wine spent time in barrel or met oak in some other form. Coconut in particular points toward American oak rather than French. It is a winemaking CHOICE, which means someone decided this wine could carry oak, and it is a different question from whether the wine has age.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Waterhouse, A. L., Sacks, G. L., & Jeffery, D. W. (2016). *Understanding wine chemistry*. Wiley.`,
    },
    {
      slug: "somm-palate-structure",
      title: "8 · Palate: score the six, then taste the wine",
      section: "Module 2 · The grid",
      body: `Take enough wine to coat your whole mouth, roughly a tablespoon, and hold it for a few seconds. Draw a little air across it if you can do so without choking, which pushes aroma up the retronasal route. Then spit, and keep paying attention, because half of what you are scoring happens after the wine is gone.

Score these six, in this order, before you describe a single flavour.

${STRUCTURE.map(
  (c) =>
    `**${c.label}.** ${c.physically}\n\n*Where you feel it:* ${c.feltAs}\n\n*Calibrate against:* ${c.calibrateWith}`,
).join("\n\n")}

**The two confusions that cause most bad notes**

*Acid mistaken for tannin.* Both make a mouth feel "dry" in casual speech. They are unrelated. Acid is a taste and it makes you salivate. Tannin is a texture and it takes salivation away, because tannins bind to the proteins in your saliva and the lubrication stops. If your mouth is watering, that is acid. If your gums feel like a paper towel, that is tannin. A wine can be high in both, which is what makes Nebbiolo so bracing.

*Alcohol mistaken for body.* Alcohol contributes body, so they travel together, but alcohol is a heat you feel after swallowing or spitting, and body is a weight you feel while the wine is in your mouth. Check the label afterwards: a wine at 11.5% and a wine at 15% is an enormous gap, and calibrating your guess against the stated number is the fastest way to train this line.

**Finish, the line everyone skips.** Count. Out loud if you are alone. Most inexpensive wine finishes in under five seconds and most people have never noticed, because nobody told them to look. Length is one of the few honest quality signals available to a beginner, and it is nearly impossible to fake in production.

**Now, and only now, describe flavour.** Use the same primary, secondary and tertiary buckets from the nose. Note where the flavours agree with the nose and where they do not, because a wine that smells of ripe fruit and tastes lean is telling you something interesting about how it was made.

${flightCard(FLIGHT_1)}

:::reveal Your mouth is watering hard, and at the same time your gums feel stripped and dry. Is that contradictory, and what kind of wine does it suggest? ||| Not contradictory at all. Salivation is acid, the drying grip is tannin, and they are different mechanisms, so a wine can be high in both at once. High acid plus high tannin plus a pale colour is the classic Nebbiolo signature, and the combination is also why such wines feel so severe young and so good with fatty food.

## Sources
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.
- Waterhouse, A. L., Sacks, G. L., & Jeffery, D. W. (2016). *Understanding wine chemistry*. Wiley.`,
    },
    {
      slug: "somm-conclusion-and-quality",
      title: "9 · Conclusion: quality is not preference",
      section: "Module 2 · The grid",
      body: `The last stage asks three questions, and the third one is the one people skip.

**1. What is it?** Grape or grapes, rough climate, rough origin, rough age. In a blind setting this is the whole exercise (Module 11). With the label in front of you it is still worth doing, because it forces you to connect what you tasted to what you know.

**2. How good is it?** Not "do I like it." This is the distinction that separates a taster from a fan, and it works in both directions: you should be able to say "this is a genuinely fine wine and I do not enjoy it," and also "this is simple and I love it." Both are respectable sentences. Only one of them is a quality judgement.

Four things carry most of a quality assessment, and they are all things you can actually observe:

| Criterion | The question | Why it is honest |
| --- | --- | --- |
| **Balance** | Does any component stick out? | Green acid, hot alcohol, bitter tannin, cloying sugar. Balance is the most important and the easiest to feel |
| **Length** | How long does it persist after spitting? | Hard to fake in production, easy for a beginner to measure |
| **Intensity** | Is there real concentration, or is it watery? | Distinguish concentration from mere loudness. Alcohol and oak are loud, not concentrated |
| **Complexity** | How many distinct things are going on, and do they change in the glass? | The last part matters most. A wine that shifts over twenty minutes has something going on |

**3. Is it ready, and what would you do with it?** Drink now, hold, or decant. Serve with what. This is the question that turns tasting into a useful skill instead of a parlour trick, and it is the question a guest actually wants answered.

**The scoring number problem.** Wine is widely rated on a hundred point scale where, in practice, almost everything published sits between about eighty-five and one hundred, which makes it a compressed fifteen point scale wearing a big number. It is useful as a rough signal from a critic whose palate you have calibrated against your own, and useless as an objective measure. This course does not teach scoring. It teaches the four criteria above, because those are things you can point at.

**Preference is data too.** Keep a private note of what you actually enjoyed, separate from what you judged good. Over a year that note becomes the most useful document you own: it tells you what to buy.

:::reveal Write the two sentences that prove you can separate quality from preference, using a style you personally dislike. ||| The shape is what matters: "This is a very well made example of its type, it is balanced, long and complex, and I do not enjoy the style." Paired with the reverse: "This is simple and short, it is not a fine wine, and I would happily drink it every week." If you can say both without embarrassment, the distinction has landed.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Hodgson, R. T. (2008). An examination of judge reliability at a major U.S. wine competition. *Journal of Wine Economics, 3*(2), 105-113. https://doi.org/10.1017/S1931436100001152`,
    },
    {
      slug: "somm-quiz-2",
      title: "10 · Knowledge check: the grid",
      section: "Module 2 · The grid",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What do the 'legs' running down the inside of a glass actually indicate?",
            options: [
              "Higher alcohol or sugar, through the Marangoni effect",
              "Higher quality and greater concentration of extract",
              "Longer ageing in oak barrels before bottling",
              "A wine that has begun to oxidise in the bottle",
            ],
            correctIndex: 0,
            explanation:
              "Alcohol evaporates faster than water from the film on the glass, surface tension changes, and the liquid climbs and falls back. Thick slow legs mean alcohol or sugar. They carry no information about quality, oak or oxidation.",
            sourceLessonSlug: "somm-sight",
          },
          {
            prompt: "Why does the grid ask whether the wine is CLEAN before anything else on the nose?",
            options: [
              "If the wine is faulty, no other observation on the sheet means anything",
              "Faults become undetectable once the wine has been swirled",
              "Clean wines legally require a different tasting sheet",
              "Cleanliness determines which glass shape should be used",
            ],
            correctIndex: 0,
            explanation:
              "A fault invalidates the rest of the assessment, so it is checked first. Swirling does change the aromatic picture, which is why you also smell before swirling, but faults remain findable afterwards.",
            sourceLessonSlug: "somm-nose",
          },
          {
            prompt: "A wine smells of leather, forest floor and dried fruit. Which aroma bucket is that, and what does it imply?",
            options: [
              "Tertiary, implying real age in barrel or bottle",
              "Secondary, implying malolactic conversion",
              "Primary, implying a very ripe vintage",
              "Secondary, implying extended time on the lees",
            ],
            correctIndex: 0,
            explanation:
              "Tertiary aromas come from age. Secondary aromas are winemaking choices such as oak (vanilla, clove, toast), malolactic conversion (butter, cream) and lees contact (bread, biscuit). Primary aromas come from the grape itself.",
            sourceLessonSlug: "somm-nose",
          },
          {
            prompt: "How do you tell acid apart from tannin in the mouth?",
            options: [
              "Acid makes you salivate, tannin binds saliva proteins and dries the gums",
              "Acid is felt at the back of the throat, tannin at the tip of the tongue",
              "Acid arrives after swallowing, tannin only while the wine is in the mouth",
              "Acid is a texture, tannin is one of the five basic tastes",
            ],
            correctIndex: 0,
            explanation:
              "They are opposite mechanisms: acid triggers salivation, tannin removes lubrication by binding to salivary proteins. Calling acid a texture and tannin a basic taste inverts both: tannin is the texture, and acid is the taste.",
            sourceLessonSlug: "somm-palate-structure",
          },
          {
            prompt: "Why does the palate stage use a five step scale rather than low, medium and high?",
            options: [
              "Almost every wine is medium something, so three steps collapse the useful middle",
              "Five steps are required for the hundred point rating scale",
              "Five matches the number of basic tastes the tongue reports",
              "Three step scales cannot be compared between two tasters",
            ],
            correctIndex: 0,
            explanation:
              "The distinction between medium and medium plus acidity decides whether a wine works with a rich sauce, and a three step scale throws that distinction away. It has nothing to do with critic scores, which the course does not teach.",
            sourceLessonSlug: "somm-the-grid",
          },
          {
            prompt: "Which pair of observations is the classic Nebbiolo contradiction?",
            options: [
              "Pale colour with high tannin",
              "Deep colour with low alcohol",
              "High sweetness with high acidity",
              "Pronounced oak with a short finish",
            ],
            correctIndex: 0,
            explanation:
              "Nebbiolo has thin skins, so it looks pale and unthreatening, and it is ferociously tannic. That mismatch is exactly why colour depth cannot be used as a proxy for structure.",
            sourceLessonSlug: "somm-sight",
          },
          {
            prompt: "What does a garnet or tawny rim on a red wine most directly suggest?",
            options: [
              "Age, as colour pigments polymerise and the blue tones fade first",
              "A thick skinned grape variety with long maceration",
              "Fermentation in stainless steel rather than oak",
              "Residual sugar left in the wine at bottling",
            ],
            correctIndex: 0,
            explanation:
              "The rim is the closest thing sight gives you to an age reading. Skin thickness and maceration drive intensity in the centre of the glass, not the colour shift at the edge.",
            sourceLessonSlug: "somm-sight",
          },
          {
            prompt: "Which quality criterion does the course call the most important and the easiest to feel?",
            options: [
              "Balance, meaning no single component sticks out",
              "Complexity, meaning many distinct aromas",
              "Intensity, meaning concentration in the middle of the palate",
              "Typicity, meaning the wine tastes like its region",
            ],
            correctIndex: 0,
            explanation:
              "Green acid, hot alcohol, bitter tannin and cloying sugar are all failures of balance, and a beginner can feel every one of them. Complexity and intensity matter, and typicity is not one of the four criteria this course uses.",
            sourceLessonSlug: "somm-conclusion-and-quality",
          },
          {
            prompt: "What is the honest position the course takes on hundred point wine scores?",
            options: [
              "A compressed scale, useful only against a critic you have calibrated against",
              "The most reliable objective measure of wine quality available",
              "Meaningless, because quality cannot be assessed at all",
              "Accurate for young wines and unreliable for aged ones",
            ],
            correctIndex: 0,
            explanation:
              "Published scores cluster in a narrow band near the top, so a hundred point scale operates as a much smaller one. The course teaches four observable criteria instead, while insisting quality assessment itself is real and learnable.",
            sourceLessonSlug: "somm-conclusion-and-quality",
          },
          {
            prompt: "Why does the tasting order run sight, nose, palate, conclusion rather than starting with a guess?",
            options: [
              "It moves from least suggestible evidence to most, limiting confirmation bias",
              "It follows the order in which the senses physically respond to liquid",
              "It matches the sequence required for restaurant service",
              "It allows the wine to warm to the correct temperature in stages",
            ],
            correctIndex: 0,
            explanation:
              "Naming a wine early makes a taster find supporting evidence in the wrong wine, which is ordinary perception rather than carelessness. The grid front loads the observations that are hardest to talk yourself into.",
            sourceLessonSlug: "somm-the-grid",
          },
          {
            prompt: "What does the course identify as the most useful thing a beginner can measure about quality?",
            options: [
              "Length of finish, counted in seconds after spitting",
              "The depth of colour in the centre of the glass",
              "The number of aromas identified on the nose",
              "The stated alcohol percentage on the label",
            ],
            correctIndex: 0,
            explanation:
              "Length is hard to fake in production and easy to count without training. Colour depth is grape and winemaking, aroma count rewards performance over accuracy, and alcohol is a fact you read rather than a judgement you make.",
            sourceLessonSlug: "somm-conclusion-and-quality",
          },
          {
            prompt: "You smell a wine, then smell it again three more times in quick succession and get less each time. Why?",
            options: [
              "Olfactory receptors adapt within seconds, so repeated sniffs return less",
              "The wine has oxidised measurably during those few seconds",
              "Ethanol has evaporated and taken the aroma compounds with it",
              "Swirling has driven the volatile compounds permanently out of solution",
            ],
            correctIndex: 0,
            explanation:
              "Adaptation is why short sniffs with pauses beat one long inhale, and why the first still sniff before swirling is worth taking seriously. The wine has not changed meaningfully in a few seconds.",
            sourceLessonSlug: "somm-nose",
          },
        ],
      },
    },
  ],
};
