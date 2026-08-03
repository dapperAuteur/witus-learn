// Authored "BVC Sommelier: Coffee" — course #2 in the BVC Sommelier series
// (plans/53-bvc-sommelier-series-wine.md). Sequel to BVC Season 1, Episode 1, "Coffee": that
// episode covers the Ethiopian origins and the economics that put $2-a-day farmers behind a $5 cup.
// This one teaches the learner to taste coffee systematically, brew it repeatably, and buy it well.
//
// NOT age-gated. Coffee is the series' first un-gated course, which is deliberate: the wine course
// sits behind a 21+ wall, so the series needed a front door that does not.
//
// SOURCING DISCIPLINE:
//   * Protocol and measurement claims cite the Specialty Coffee Association, and the course teaches
//     BOTH the classic cupping form and the newer Coffee Value Assessment rather than presenting
//     the older one as current. Where the SCA revises a standard, a course that names only the old
//     form goes quietly stale.
//   * Extraction numbers (the 18-22% yield and 1.15-1.35% strength window) are cited to the SCA's
//     brewing control work and stated as a WINDOW, never as a single correct number.
//   * Roast temperatures are NOT asserted. First and second crack happen at temperatures that vary
//     by machine, bean and measurement point, so the course teaches the AUDIBLE events and refuses
//     to print a number it cannot stand behind. Same discipline as the Predikat must weights in
//     the wine course.
//   * Arabica's parentage (a natural allopolyploid of C. canephora and C. eugenioides) is cited to
//     the genome work, not to folklore.
//   * No producer, roaster or cafe is ever named as a recommendation, for the same reason the wine
//     course names no bottles: it dates the course and reads as unpaid endorsement.
//   * NO affiliation with the SCA, the Coffee Quality Institute, or any Q Grader programme is
//     claimed, and nothing here is sold as exam preparation. Lesson 1 says so.
//
// The ALTERNATE PATH on every flight is caffeine, not alcohol: decaf and caffeine-free
// substitutions, so a learner who is pregnant, caffeine-sensitive, or simply does not want six cups
// in an afternoon can run every drill. The `alternate` field on the shared Flight type is required,
// so it cannot be dropped by omission.

import type { AuthoredCourse } from "./authored-course";
import { flightCard, STRUCTURE, type Flight } from "../lib/sommelier";

const ALT = "Without the caffeine";

/** The coffee equivalent of the wine course's spit-bucket note: method plus the honest caution. */
const COFFEE_METHOD_NOTE = `> **Slurp, and know your ceiling.** Cuppers slurp hard from a spoon to spray coffee across the whole palate and drive aroma up the retronasal route. It feels ridiculous and it genuinely works. Two cautions, both practical: a flight is six to eight cups, so **spit into a cup rather than swallowing** unless you want the afternoon to get away from you, and caffeine tolerance varies enormously between people. If you are pregnant, caffeine-sensitive, on a medication that interacts with it, or simply do not want the jitters, run the decaf path at the bottom of each flight. It teaches the same structure with the same vocabulary.`;

// ─────────────────────────────── FLIGHTS ───────────────────────────────

const FLIGHT_0: Flight = {
  n: 0,
  title: "The calibration set (no coffee required)",
  teaches: "What acidity, bitterness, body and sweetness feel like as SENSATIONS, before any coffee is involved.",
  tier: "core",
  bottles: [
    { role: "Acid, three strengths", target: "One lemon and a glass of water", priceUsd: "1-2" },
    { role: "Bitterness, three strengths", target: "A box of plain black tea, and a bar of unsweetened baking chocolate", priceUsd: "4-8" },
    { role: "Sweetness, three strengths", target: "Table sugar you already own", priceUsd: "0-2" },
    { role: "Body, three weights", target: "Skim milk, whole milk, half and half", priceUsd: "4-8" },
  ],
  procedure: [
    "Three cups of water with a quarter, a half and a full teaspoon of sugar. Taste in order. Sweetness lands at the front of the tongue and fades.",
    "Lemon into three cups at rising strength. Notice where you salivate, at the sides of the tongue and under the jaw. That salivation IS acidity, and in coffee it is a virtue rather than a defect.",
    "Steep one tea bag for four, eight and twelve minutes, then taste a shaving of unsweetened chocolate. You are separating two things people conflate: BITTERNESS (a taste) from ASTRINGENCY (the drying grip).",
    "Sip skim, then whole, then half and half. Flavour barely moves, WEIGHT moves. That weight is body, and in coffee it is what people mean by a cup feeling thin or syrupy.",
    "Write one sentence per component in your own words. Not a coffee word, your word.",
  ],
  lookFor:
    "You can say where in your mouth you feel each of the four, and you can tell bitterness apart from astringency out loud.",
  alternate: "This whole flight is already caffeine free, and it is the foundation for every later one, so run it first either way.",
};

const FLIGHT_1: Flight = {
  n: 1,
  title: "Your first cupping",
  teaches: "The cupping protocol itself, which is the one repeatable way to compare coffees without a brewing method in the way.",
  tier: "core",
  bottles: [
    {
      role: "A washed coffee",
      target: "A bag stating WASHED process, from anywhere",
      priceUsd: "16-22",
      substitute: "Any single origin whose bag names one country and one farm or cooperative",
    },
    {
      role: "A natural coffee",
      target: "A bag stating NATURAL or dry process",
      priceUsd: "16-24",
      substitute: "A honey or pulped natural, which sits between the two",
    },
    {
      role: "A supermarket blend, as the control",
      target: "Any pre-ground supermarket coffee with no roast date",
      priceUsd: "6-10",
      substitute: "The oldest bag already in your cupboard",
    },
  ],
  procedure: [
    "Grind each coffee coarsely, just before you start. Use the SCA cupping ratio: 8.25 g of coffee per 150 ml of water, which is close enough to two level tablespoons per small cup.",
    "Smell the DRY grounds first and write what you get. This is fragrance, and it is a separate observation from aroma.",
    "Pour water just off the boil over each, filling to the rim. Wait four minutes. Do not stir.",
    "BREAK the crust: push the floating grounds back with a spoon while putting your nose right over the cup. This is the single most aromatic moment in coffee, and most people have never smelled it. Write it down.",
    "Skim the foam off, wait until it is cool enough to slurp, then taste each in turn, slurping hard. Score acidity, sweetness, body, bitterness and aftertaste. Come back at ten minutes and again at twenty: coffee changes more as it cools than wine does in a glass.",
  ],
  lookFor:
    "You can name at least one clear difference between the washed and the natural coffee, and the supermarket control tastes noticeably flatter than both.",
  alternate:
    "Buy the same three coffees as decaf where you can (washed and natural decafs both exist), or run the entire protocol with three teas: a green, a black and a stale bag from the back of the cupboard. The protocol, the crust break and the cooling observations are the lesson, and none of them require caffeine.",
};

const FLIGHT_2: Flight = {
  n: 2,
  title: "Process, tasted side by side",
  teaches: "That how the fruit was removed from the seed changes the cup more than most people expect.",
  tier: "core",
  bottles: [
    { role: "Clean and transparent", target: "A washed Ethiopian or Kenyan", priceUsd: "18-24" },
    { role: "Fruit forward and heavy", target: "A natural Ethiopian or Brazilian", priceUsd: "18-24" },
    { role: "In between", target: "A honey or pulped natural, often from Costa Rica or El Salvador", priceUsd: "18-26" },
    {
      role: "The loud modern one",
      target: "An anaerobic or carbonic maceration lot, if a local roaster has one",
      priceUsd: "22-30",
      substitute: "Skip it rather than substitute. Nothing else tastes like it, and a bad stand-in teaches the wrong thing",
    },
  ],
  procedure: [
    "Cup all four together using the Flight 1 protocol. Same grind, same ratio, same water, same time. Process is the only variable you are allowing.",
    "Score acidity and body on all four FIRST, before any flavour note.",
    "Ask of each: how much does this taste like FRUIT, and how much does it taste like the fruit FERMENTED?",
    "Write down which cup is cleanest, meaning the one where each flavour is most distinct from the others. Clean cup is a real scored attribute and it is not the same as tasty.",
    "Come back at twenty minutes. Natural and anaerobic lots often fall apart as they cool, while a good washed coffee holds together.",
  ],
  lookFor:
    "You can predict, on a fresh bag you have not tasted, roughly what the process on the label will do to acidity and body.",
  alternate:
    "Decaf versions of washed and natural coffees are both widely available and the process difference survives decaffeination, so this flight runs almost unchanged. If you cannot source them, compare fresh grapes, raisins and a fruit that has begun to ferment: the axis from clean fruit to dried fruit to fermented fruit is exactly the axis the flight teaches.",
};

const FLIGHT_3: Flight = {
  n: 3,
  title: "Roast, and what it hides",
  teaches: "Separating the taste of the BEAN from the taste of the roaster's decision, which is the single most useful thing a coffee drinker can learn.",
  tier: "core",
  bottles: [
    { role: "Light roast, origin forward", target: "A light roast single origin from a specialty roaster", priceUsd: "18-24" },
    { role: "Medium roast, same origin if possible", target: "A medium roast of the same country, ideally the same roaster", priceUsd: "16-22" },
    { role: "Dark roast", target: "A dark roast or espresso roast", priceUsd: "14-20" },
  ],
  procedure: [
    "Look at the beans before you grind. Note colour, and note whether the surface is dry or oily. Oil on the surface means the roast went far enough to push oils out, which is a roast reading you can take with your eyes.",
    "Cup all three. Score acidity, bitterness, body and sweetness.",
    "Watch what happens to acidity as the roast darkens, and watch what happens to body. They move in opposite directions, and that trade is the whole decision a roaster is making.",
    "Now ask the question that matters: on the dark roast, can you tell where the coffee came from at all? Usually you cannot, and that is the honest cost of the style.",
    "Write down which one you actually want to drink tomorrow morning. It is allowed to be the dark one.",
  ],
  lookFor:
    "You can say what roast level a cup is from taste alone, and you can name what the roast took away as well as what it added.",
  alternate:
    "Buy the same three roast levels in decaf, which every specialty roaster sells. Failing that, compare raw almonds, lightly toasted almonds and darkly toasted almonds: the movement from bright and distinct toward sweet, then toward smoky and uniform, is the same Maillard progression the roast flight is teaching.",
};

const FLIGHT_4: Flight = {
  n: 4,
  title: "One coffee, four grinds",
  teaches: "Extraction, felt directly, and the fact that most bad coffee at home is a grind problem rather than a bean problem.",
  tier: "core",
  bottles: [
    { role: "The only coffee you need", target: "One bag of fresh single origin, plus access to a grinder", priceUsd: "16-22" },
  ],
  procedure: [
    "Brew the same coffee four times, changing ONLY the grind: very coarse, coarse, medium, fine. Keep the dose, the water, the temperature and the total brew time identical.",
    "Taste them in order. Write one word for each before you analyse anything.",
    "Find the two failure states at the ends. Too coarse and the water runs through without dissolving enough: the cup is sour, thin, salty and it finishes fast. That is UNDER-extracted.",
    "Too fine and the water dissolves too much, including compounds you do not want: bitter, hollow, drying, and it lingers unpleasantly. That is OVER-extracted.",
    "The middle is not a single point, it is a range, and inside that range there is a spot you personally like. Find yours and write the grind setting down. That number is worth more than any bag of coffee you will buy this year.",
  ],
  lookFor:
    "You can taste a cup and say confidently whether to grind finer or coarser next time, which is the whole skill.",
  alternate:
    "Decaf works identically here, since extraction is physics rather than pharmacology. If you would rather not drink four cups of anything, run it with loose leaf tea at four steep times: two minutes, four, eight and twelve. Under and over extraction present the same way, sour and thin at one end, bitter and drying at the other.",
};

const FLIGHT_5: Flight = {
  n: 5,
  title: "Water, the ingredient nobody buys",
  teaches: "That the cup is about ninety-eight percent water, and that changing the water changes the coffee more than changing the bean.",
  tier: "core",
  bottles: [
    { role: "The constant", target: "One bag of coffee, ground the same for every brew", priceUsd: "16-22" },
    { role: "Water 1", target: "Distilled or deionised water, from a supermarket or pharmacy", priceUsd: "2-4" },
    { role: "Water 2", target: "Your tap water", priceUsd: "0" },
    { role: "Water 3", target: "A bottled mineral water with the mineral content printed on the label", priceUsd: "2-5" },
  ],
  procedure: [
    "Brew the same coffee three times, identically, changing only the water.",
    "Taste the distilled brew first. Most people find it flat, hollow and strangely sour: with almost no minerals, water extracts poorly and there is nothing to carry the flavour.",
    "Taste the tap and the mineral brews against it. Note which one gives more sweetness and more body.",
    "Read the mineral label and write down the numbers next to your notes. Over a few months of doing this you build your own reference.",
    "If your tap water is very hard, look inside your kettle. Scale is the same chemistry showing up somewhere less delicious.",
  ],
  lookFor:
    "You can explain to someone why their expensive beans taste bad at their house and fine at yours.",
  alternate: "Entirely caffeine free if you brew decaf, and equally clear with tea. Water changes tea at least as dramatically as it changes coffee, and green tea is the most sensitive of all.",
};

const FLIGHT_6: Flight = {
  n: 6,
  title: "Freshness, the cheapest upgrade available",
  teaches: "What staling actually tastes like, and why a roast date matters more than a brand.",
  tier: "core",
  bottles: [
    { role: "Fresh", target: "A bag roasted within the last two weeks, with the roast date printed", priceUsd: "16-22" },
    { role: "Old", target: "A bag of the same or similar coffee roasted two or more months ago", priceUsd: "10-18", substitute: "Any supermarket bag with only a best-before date, which almost always means it is old" },
    { role: "Pre-ground", target: "A pre-ground bag, opened a week before the flight and left in the cupboard", priceUsd: "6-10" },
  ],
  procedure: [
    "Smell all three dry grinds side by side before brewing. The difference is usually obvious enough to end the argument right there.",
    "Brew all three identically. Score aroma intensity, sweetness and aftertaste.",
    "Look for what staling actually does: it does not make coffee taste rotten, it makes it taste like LESS. Aroma flattens, sweetness fades, and a papery or cardboard note creeps in.",
    "Note how fast the pre-ground one lost ground. Grinding multiplies the surface area exposed to oxygen, which is why it stales in days rather than weeks.",
    "If you brew the fresh one within about three days of roasting, notice the opposite problem: carbon dioxide still escaping, a wildly bubbling bloom and an uneven, sometimes sour cup. Fresh has a floor as well as a ceiling.",
  ],
  lookFor:
    "You can taste staleness as an absence rather than a flavour, and you never buy a bag without a roast date again.",
  alternate: "Runs unchanged with decaf. Decaf actually stales faster in most people's experience, so the effect is, if anything, louder.",
};

const FLIGHT_7: Flight = {
  n: 7,
  title: "Origin, blind",
  teaches: "Deduction: calling process, roast level and rough origin from evidence, and being wrong usefully.",
  tier: "core",
  bottles: [
    { role: "East African", target: "An Ethiopian or Kenyan", priceUsd: "18-24" },
    { role: "Central American", target: "A Guatemalan, Costa Rican or Honduran", priceUsd: "16-22" },
    { role: "South American", target: "A Colombian or Brazilian", priceUsd: "14-20" },
    { role: "Indonesian or Indian", target: "A Sumatran, or an Indian monsooned coffee", priceUsd: "16-22" },
  ],
  procedure: [
    "Someone else labels the cups. If you are alone, number the bags, cup them in a shuffled order and do not look until you have committed everything to paper.",
    "Work the full grid on each in silence: fragrance, aroma at the break, acidity, sweetness, body, bitterness, aftertaste, clean cup.",
    "Commit in writing on each cup to: process, roast level, and rough origin region. In that order, because process and roast are far more callable than origin.",
    "Reveal all four at once, never one at a time, so an early miss does not distort the rest.",
    "For every wrong call, write the ONE observation that should have redirected you. That sentence is the actual output of the flight.",
  ],
  lookFor:
    "You called process and roast level more often than origin, which is the correct order of difficulty, and you can name your own recurring error.",
  alternate:
    "Decaf single origins exist from most of these regions, though the selection is narrower. If you cannot assemble four, run the same blind protocol on four teas from different origins. The deduction discipline, commit in writing, reveal at once, log errors by type, is what the flight trains, and it is drink agnostic.",
};

// ─────────────────────────────── COURSE ───────────────────────────────

export const BVC_SOMMELIER_COFFEE_COURSE: AuthoredCourse = {
  title: "BVC Sommelier: Coffee",
  description:
    "Learn to taste coffee systematically and brew it repeatably: the cupping protocol used across the specialty trade and the attributes it scores, what acidity actually means in a cup and why it is a virtue, the two commercial species and the varieties that matter, how altitude and climate reach the cup, what washing, natural drying, honey processing and anaerobic fermentation each do, how to read a roast and hear what it costs you, extraction as something you can taste and correct, water as the ingredient nobody buys, what a bag's label legally promises and what certifications do and do not fix, the origins that set the reference points, the honest economics of the C price and why your $5 cup does not reach the farmer, brewing and espresso, the defects worth recognising, and blind deduction. The sequel to BVC Season 1, Episode 1, which covers coffee's history and economics. Eight flights with budgets and substitutes, and a caffeine-free path through every drill. Not affiliated with, and not exam preparation for, any certifying body.",
  lessons: [
    // ══════════════ MODULE 1 · BEFORE YOU BREW ══════════════
    {
      slug: "coffee-how-this-works",
      title: "1 · What this course is, and what it refuses to be",
      section: "Module 1 · Before you brew",
      body: `You already took Episode 1. You know coffee came out of the Ethiopian highlands, you know it is one of the most traded commodities on earth, and you know the economics that put two-dollar-a-day farmers behind a five-dollar cup.

This is the other half: tasting it, brewing it, and buying it well.

**What you will be able to do at the end**

- Run a cupping, the repeatable comparison method the entire specialty trade uses.
- Score the attributes that trade actually scores, and defend each score by pointing at a sensation.
- Taste a cup and say whether to grind finer or coarser, which fixes most bad coffee at home.
- Read a bag and know what it promises, what it merely implies, and what the certifications do and do not fix.
- Tell a roast decision apart from a bean, which is the skill that stops you blaming farmers for roasters' choices.
- Sit in front of four unlabelled cups and deduce process, roast and rough origin from evidence.

**What this course refuses to be**

It is **not affiliated with the Specialty Coffee Association, the Coffee Quality Institute, or any Q Grader programme, and it is not preparation for their examinations.** The arc it follows is informed by what those public protocols cover, because the trade has converged on them, and saying so is more useful than pretending to have invented a method.

It also names no roasters. Roasters change, lots sell out in weeks, and a course with favourites would be stale within a season and would read like advertising.

**How the flights work.** Eight flights, most of them three or four bags in the sixteen to twenty-four dollar range, which is roughly what specialty coffee costs. Several flights reuse bags from earlier ones, so the real total is lower than the sum. Each card tells you the budget, what to ask for, and what to accept instead.

**If you do not want the caffeine.** Every flight has a decaf or caffeine-free parallel printed at the bottom of the card. Decaf is not a compromise here: modern decaffeination preserves enough of the cup that process, roast, grind, water and freshness are all still legible, and the two flights that are hardest to run in decaf say so plainly and give you a tea-based alternative instead.

**One method note, stated once and meant every time.**

${COFFEE_METHOD_NOTE}

## Sources
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices
- International Coffee Organization. (n.d.). *Statistics*. https://ico.org`,
    },
    {
      slug: "coffee-acidity-is-not-a-defect",
      title: "2 · Acidity is a virtue, and three other things you were taught wrong",
      section: "Module 1 · Before you brew",
      recallContent: [
        {
          prompt: "This course names one thing it flatly refuses to claim about itself. What is it?",
          answer:
            "That it is affiliated with, or preparation for, any certifying body such as the Specialty Coffee Association, the Coffee Quality Institute or a Q Grader programme. It follows a similar arc because the trade has converged on those protocols, and it says so rather than implying an endorsement.",
        },
      ],
      body: `Four beliefs get in the way of learning to taste coffee, and all four are worth dismantling before you cup anything.

**1. "Acidity" is not sourness, and it is not a defect.** In coffee, acidity is the bright, juicy, mouth-watering quality that makes a cup taste alive: citric, malic and other organic acids, the same family that makes an apple pleasant rather than dull. High-grown coffees have more of it, and the trade prizes it. What people mean when they complain about "acidic coffee" is usually one of two different things: an UNDER-extracted brew, which is genuinely sour and thin, or heartburn, which is about their stomach rather than the cup. Learning to separate bright from sour is Module 2's whole job.

**2. Dark roast is not stronger.** Not in caffeine, and not in anything else except roast flavour. Caffeine is fairly stable through roasting, so the "strong coffee" people mean is the taste of the ROAST: smoke, char, bitterness, body. Meanwhile, the darker you roast, the more of the bean's own origin character you burn off. There is nothing wrong with wanting that. There is something wrong with a shop implying you are getting more coffee for it.

**3. Espresso is not a bean, it is a brewing method.** Any coffee can be pulled as espresso. "Espresso roast" is a roaster's suggestion, not a category of plant, and plenty of the world's best espresso is a light-roasted single origin.

**4. Freshness has a floor as well as a ceiling.** Coffee is not like bread, best on day one. It releases carbon dioxide for days after roasting, and too much of it makes the brew erupt and taste uneven and sour. Most filter coffee is better a few days off roast than the morning after it, and Flight 6 lets you taste both ends.

**One more, because it costs people the most money.** A grinder improves your coffee more than better beans do, up to a surprisingly high price point. Grinding unevenly means some particles over-extract while others under-extract, in the same cup, and no bean survives that. If you are choosing between a twenty-four dollar bag and a better grinder, buy the grinder.

:::reveal Someone says they avoid light roasts because they find them too acidic and prefer strong dark roast coffee. Name the two separate misunderstandings in that sentence. ||| First, acidity in coffee is the bright, juicy, mouth-watering quality from organic acids, and what they dislike is more likely under-extraction, which is genuinely sour and thin and is a brewing fault rather than a roast level. Second, dark roast is not stronger: caffeine is fairly stable through roasting, so what they are calling strength is roast flavour, smoke and bitterness and body, and the darker roast has actually burned off more of the coffee's own character.

## Sources
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.`,
    },
    {
      slug: "coffee-your-palate-is-trainable",
      title: "3 · Your palate is trainable, and the bottleneck is language",
      section: "Module 1 · Before you brew",
      body: `The same physiology lesson the wine side of this series teaches, because it is the same equipment.

**Most of tasting is smelling.** The tongue reports a short list: sweet, sour, salty, bitter, umami, plus physical sensations like temperature, burn and astringency. Everything you call flavour beyond that list is odour, arriving through the back of the throat as you swallow. That route is retronasal olfaction, and it runs on a large family of odorant receptor genes described by Buck and Axel (1991), work that later took the Nobel Prize in Physiology or Medicine (Nobel Assembly, 2004).

**Which is exactly why cuppers slurp.** Spraying coffee across the palate aerosolises it and pushes far more aroma up that retronasal route. It is not theatre, it is the point.

**Naming is the hard part, and it is learnable.** Describing an odour is much harder than detecting or recognising one, and trained panels improve mostly by fixing shared reference points to words (Lawless & Heymann, 2010). A tasting protocol is an agreement about what words mean.

**The flavour wheel, and how to use it without lying to yourself.** The coffee trade has a widely used flavour wheel, revised in 2016 alongside a sensory lexicon developed with World Coffee Research, which arranges descriptors from broad (fruity) to specific (blackberry). Use it from the INSIDE OUT: commit to a broad category you are confident in, then move outward only as far as your nose will honestly take you. Starting at the rim and reaching for "dried blackcurrant" produces notes that impress people and teach you nothing.

**Four rules for this whole course**

1. **Score structure before flavour.** Acidity, sweetness, body and bitterness are close to measurable. Flavour is associative and personal.
2. **Use your own references.** If it smells like the cereal you ate as a child, write that.
3. **Always taste comparatively.** One coffee alone teaches almost nothing. Two side by side teach the difference.
4. **Write before you speak.** In a group, whoever speaks first sets everyone else's note.

**Setup that actually matters.** Identical cups and spoons. Same grind, same ratio, same water, same timing, so the only variable is the one you are testing. No perfume or cologne. And taste the cups repeatedly as they cool, because coffee changes character across a twenty-minute window far more than most drinks.

Now run Flight 0. It requires no coffee at all, and every later flight leans on it.

${flightCard(FLIGHT_0, ALT)}

:::reveal Why does slurping loudly from a cupping spoon genuinely improve what you perceive, rather than just looking professional? ||| It aerosolises the coffee and sprays it across the whole palate, which drives far more aroma up the retronasal route from the back of the throat to the nose. Since most of what people call flavour is odour arriving that way rather than taste from the tongue, the slurp is delivering the majority of the information you are trying to collect.

## Sources
- Buck, L., & Axel, R. (1991). A novel multigene family may encode odorant receptors: A molecular basis for odor recognition. *Cell, 65*(1), 175-187. https://doi.org/10.1016/0092-8674(91)90418-X
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.
- Nobel Assembly at Karolinska Institutet. (2004). *The Nobel Prize in Physiology or Medicine 2004*. https://www.nobelprize.org/prizes/medicine/2004/summary/
- Specialty Coffee Association & World Coffee Research. (2016). *The coffee taster's flavor wheel*. https://sca.coffee/research/coffee-tasters-flavor-wheel`,
    },
    {
      slug: "coffee-quiz-1",
      title: "4 · Knowledge check: before you brew",
      section: "Module 1 · Before you brew",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does acidity mean in coffee tasting?",
            options: [
              "A brightness from organic acids that the specialty trade actively prizes",
              "A defect caused by under-roasting the beans before they are ground",
              "The sourness produced when a brew is left standing on a hot plate",
              "The measurable pH of the finished cup once it has cooled fully",
            ],
            correctIndex: 0,
            explanation:
              "Citric, malic and related acids give a juicy, mouth-watering quality, and high-grown coffees have more of it. What people usually dislike and call acidic is under-extraction, which is a brewing fault rather than a roast or a bean.",
            sourceLessonSlug: "coffee-acidity-is-not-a-defect",
          },
          {
            prompt: "Is a dark roast stronger in caffeine than a light roast?",
            options: [
              "Yes, roasting concentrates caffeine substantially in the bean",
              "No, caffeine is fairly stable through roasting, so strength means roast flavour",
              "Yes, but only when the beans are ground finer than filter grind",
              "No, because caffeine is entirely destroyed during the roasting process",
            ],
            correctIndex: 1,
            explanation:
              "What people call strength in a dark roast is smoke, char, bitterness and body. Roasting darker also burns off more of the bean's origin character, so you are trading information for intensity.",
            sourceLessonSlug: "coffee-acidity-is-not-a-defect",
          },
          {
            prompt: "What is espresso?",
            options: [
              "A species of coffee plant grown mainly in Brazil and Vietnam",
              "A specific dark roast level defined by the Specialty Coffee Association",
              "A brewing method, which any coffee at any roast level can be used for",
              "A blend that must contain at least some robusta for crema to form",
            ],
            correctIndex: 2,
            explanation:
              "Espresso roast is a roaster's suggestion, not a botanical or legal category. Plenty of excellent espresso is a light-roasted single origin, which is why the distinction matters when you shop.",
            sourceLessonSlug: "coffee-acidity-is-not-a-defect",
          },
          {
            prompt: "Why do cuppers slurp coffee loudly from a spoon?",
            options: [
              "It cools the coffee quickly to the correct assessment temperature",
              "It aerosolises the coffee and drives aroma up the retronasal route",
              "It removes suspended grounds before they reach the palate",
              "It is a scoring requirement in every formal cupping protocol",
            ],
            correctIndex: 1,
            explanation:
              "Most of what people call flavour is odour reaching the nose from the back of the throat. Spraying the coffee across the whole palate delivers far more of that information, which is why the technique survives despite sounding ridiculous.",
            sourceLessonSlug: "coffee-your-palate-is-trainable",
          },
          {
            prompt: "How does the course tell you to use the coffee flavour wheel?",
            options: [
              "From the outside in, starting with the most specific descriptor available",
              "By selecting exactly three descriptors from the outer rim every time",
              "By matching your note to the descriptor another taster used first",
              "From the inside out, moving outward only as far as your nose honestly goes",
            ],
            correctIndex: 3,
            explanation:
              "Committing to a broad category you are confident in, then narrowing, keeps a note honest. Reaching straight for a specific descriptor produces notes that impress people and teach the taster nothing.",
            sourceLessonSlug: "coffee-your-palate-is-trainable",
          },
          {
            prompt: "What does the course say about freshness having a floor as well as a ceiling?",
            options: [
              "Coffee is undrinkable until it has rested for at least one month",
              "Very fresh coffee still releasing carbon dioxide can brew unevenly and taste sour",
              "Coffee tastes identical for the first six months after roasting",
              "Freshness matters only for espresso and never for filter brewing",
            ],
            correctIndex: 1,
            explanation:
              "Coffee degasses for days after roasting, which makes the brew erupt and extract unevenly. Most filter coffee is better a few days off roast than the morning after, so a roast date is information rather than a countdown.",
            sourceLessonSlug: "coffee-acidity-is-not-a-defect",
          },
          {
            prompt: "Which purchase does the course say improves a home brewer's coffee most?",
            options: [
              "A better grinder, because uneven particles wreck any bean",
              "A more expensive single origin bag from a well known roaster",
              "A digital scale accurate to a tenth of a gram",
              "A temperature-controlled kettle with a gooseneck spout",
            ],
            correctIndex: 0,
            explanation:
              "Uneven grinding means some particles over-extract while others under-extract in the same cup, and no bean survives that. Scales and kettles help, and they help less than particle consistency does.",
            sourceLessonSlug: "coffee-acidity-is-not-a-defect",
          },
          {
            prompt: "Why does the course insist on identical cups, grind, ratio and water across a flight?",
            options: [
              "Cupping scores are invalid unless the equipment is certified",
              "Identical equipment is required to calculate an extraction yield",
              "So the only variable is the one being tested, which is what a flight is",
              "Because coffee absorbs flavour from differently shaped ceramics",
            ],
            correctIndex: 2,
            explanation:
              "A flight is an experiment with one variable. Letting grind or water drift alongside process or roast quietly contaminates the comparison and teaches you a difference that was never there.",
            sourceLessonSlug: "coffee-your-palate-is-trainable",
          },
          {
            prompt: "What does this course explicitly refuse to claim about itself?",
            options: [
              "That an ordinary drinker can learn to cup coffee reliably",
              "That comparative tasting beats tasting a single coffee alone",
              "That structure should be scored before flavour is described",
              "That it is affiliated with or preparation for any certifying body",
            ],
            correctIndex: 3,
            explanation:
              "Lesson 1 states there is no affiliation with the SCA, the Coffee Quality Institute or any Q Grader programme. The other three are things the course actively teaches.",
            sourceLessonSlug: "coffee-how-this-works",
          },
          {
            prompt: "Why does the course name no roasters?",
            options: [
              "Naming roasters would date the course and read as unpaid endorsement",
              "Roasters legally prohibit being named in educational material",
              "Specialty roasters all produce indistinguishable coffee anyway",
              "The flights are designed to use only supermarket coffee",
            ],
            correctIndex: 0,
            explanation:
              "Lots sell out within weeks and roasters change, so a named list goes stale within a season. The flights ask for categories instead, and one flight deliberately includes a supermarket bag as a control.",
            sourceLessonSlug: "coffee-how-this-works",
          },
        ],
      },
    },

    // ══════════════ MODULE 2 · THE CUP ══════════════
    {
      slug: "coffee-the-cupping-protocol",
      title: "5 · The cupping protocol",
      section: "Module 2 · The cup",
      recallContent: [
        {
          prompt: "Name the four components isolated in Flight 0, and say which two people most often confuse.",
          answer:
            "Acidity, bitterness, sweetness and body. The pair people confuse is bitterness and astringency: bitterness is a taste, astringency is the drying grip, and the twelve-minute tea in Flight 0 delivers both at once so you can pull them apart.",
        },
      ],
      body: `Cupping exists to solve one problem: comparing coffees without a brewing method getting in the way. Every variable is fixed, so that differences you taste belong to the coffee rather than to your technique.

**The standard setup.** The Specialty Coffee Association's protocol fixes a ratio of 8.25 g of coffee per 150 ml of water, a coarse grind, water just off the boil, and a four-minute steep before the crust is broken. You do not need certified equipment to benefit from it. You need to do the same thing every time.

**The sequence, and why each step is where it is**

1. **Fragrance.** Smell the DRY grounds, before any water. This is a separate observation from aroma and it is the one beginners skip.
2. **Pour, and wait four minutes.** Do not stir. A crust of grounds forms on the surface, holding aroma underneath it.
3. **Break the crust.** Nose right over the cup, push the grounds back with a spoon, and inhale as the trapped aroma releases. This is the most aromatic moment in coffee, and most drinkers have never experienced it.
4. **Skim and settle.** Remove the foam and floating grounds.
5. **Taste as it cools.** Start when it is cool enough to slurp, and come back at intervals. Coffee changes more as it cools than almost any other drink, and defects in particular tend to appear late.

**What the trade scores.** The classic SCA cupping form scores ten attributes, each on a scale that runs to ten, giving a total out of one hundred: fragrance and aroma, flavour, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and an overall judgement. **A coffee scoring 80 or above is what the specialty trade means by "specialty."**

**And what is replacing it.** The SCA has since developed the **Coffee Value Assessment**, which separates what a cup IS from how much you like it, splitting assessment into descriptive, affective, physical and extrinsic components. It matters here for one reason that outlives any form: describing and judging are different acts, and running them together is how tasting notes turn into marketing. A course that taught only the older form would be teaching a snapshot.

**The three attributes worth explaining, because they are not obvious**

- **Clean cup** does not mean tasty. It means the absence of interfering flavours, so each thing you taste is distinct. A very tasty coffee can be an unclean cup.
- **Uniformity** compares the cups of the SAME coffee. Cuppers brew several, because one defective bean can ruin a single cup and tell you nothing about the lot.
- **Balance** asks whether the attributes support each other or fight. Bright acidity with no sweetness to carry it is unbalanced, even though acidity is a virtue.

:::reveal Why do cuppers brew several cups of the SAME coffee rather than one? ||| Because a single defective bean can ruin one cup while saying nothing about the lot as a whole. Brewing several and comparing them is how uniformity is scored, and it is what separates "this coffee is defective" from "this particular cup was unlucky." It is the same logic as sampling in any quality control system.

## Sources
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices
- Specialty Coffee Association. (n.d.). *Coffee value assessment*. https://sca.coffee/value-assessment
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.`,
    },
    {
      slug: "coffee-scoring-the-cup",
      title: "6 · Scoring a cup, and telling bitter from astringent",
      section: "Module 2 · The cup",
      body: `Score structure first, flavour second, exactly as the wine course does, and for the same reason: structure is close to measurable and flavour is associative.

${STRUCTURE.filter((c) => ["acid", "sweetness", "body", "finish"].includes(c.key))
  .map((c) => `**${c.label}.** ${c.physically.replace("from the grape", "from the fruit and the roast")}\n\n*Where you feel it:* ${c.feltAs}\n\n*Calibrate against:* ${c.calibrateWith}`)
  .join("\n\n")}

**Bitterness**, which coffee has and wine largely does not, deserves its own entry. It comes from roast products and from compounds developed during roasting, and it rises as the roast darkens and as extraction goes further. Some bitterness is structural and welcome, in the way it is welcome in dark chocolate. Bitterness that arrives without sweetness underneath it is the problem.

**The confusion that ruins the most tasting notes: bitter versus astringent.** They are different mechanisms and they need different fixes.

| | Bitterness | Astringency |
| --- | --- | --- |
| What it is | A TASTE, reported by the tongue | A TEXTURE, from compounds binding salivary proteins |
| Where you feel it | Across the tongue, especially the back | Drying and rough on the gums, cheeks and roof of the mouth |
| Usual cause in coffee | Dark roast, or over-extraction | Over-extraction, under-developed roast, or certain defects |
| The fix | Lighter roast, or extract less | Almost always extract less: coarser grind or shorter contact |

If your mouth feels rough and dry after the coffee is gone, that is astringency, and it is one of the most reliable signs of over-extraction there is.

**Aftertaste, the attribute everyone skips.** Count the seconds after you swallow or spit until the flavour actually stops, and note whether what LINGERS is pleasant. Plenty of coffees taste good and finish badly, leaving ash or drying bitterness behind, and a long clean finish is one of the most honest quality signals available to a beginner.

**Sweetness in coffee is real and it is not sugar.** No meaningful sugar survives roasting in the form you would measure, yet good coffee genuinely reads sweet, from aroma compounds and from the absence of competing harshness. Sweetness is one of the best single indicators of both good farming and good roasting, and it is the first thing that disappears when either goes wrong.

:::reveal Your mouth feels rough and drying after the cup, and the coffee also tasted harsh. Which observation is more useful for fixing it, and what do you change? ||| The drying roughness is the more useful one, because astringency is a fairly specific signal of over-extraction, where harshness alone has several possible causes. The fix is to extract less: grind coarser, shorten the contact time, or lower the water temperature slightly. Changing the bean or blaming the roast level first is the common mistake.

## Sources
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices`,
    },
    {
      slug: "coffee-first-cupping",
      title: "7 · Your first cupping",
      section: "Module 2 · The cup",
      body: `Everything in this module is now something you do rather than read. Three coffees, one protocol, and a deliberately unfair control.

**Why the supermarket bag is in the flight.** Not to sneer at it. It is there because a control makes the other two legible: without something flat to compare against, "fruity" and "clean" are just words you read in this course. Plenty of people run this flight and discover the cheap bag is fine, which is a legitimate and useful result.

**What to write, in this order.** Fragrance from the dry grounds. Aroma at the crust break. Then acidity, sweetness, body, bitterness, aftertaste and clean cup. Then, and only then, flavour descriptors, from the inside of the wheel outward.

**Taste them three times.** Hot enough to slurp, then at about ten minutes, then at twenty. Write separately each time. This single habit teaches more than any reading, because coffee's character shifts across that window and defects in particular show up late.

${flightCard(FLIGHT_1, ALT)}

:::reveal Why does the first cupping deliberately include a cheap supermarket bag with no roast date? ||| It is a control. Without something flat to compare against, words like clean and fruity stay abstract, and the two specialty coffees have nothing to be legible against. It is also an honest test rather than a rigged one: if the cheap bag holds up in your cupping, that is a real result worth knowing, and it saves you money.

## Sources
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices`,
    },
    {
      slug: "coffee-quiz-2",
      title: "8 · Knowledge check: the cup",
      section: "Module 2 · The cup",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What is the purpose of breaking the crust during a cupping?",
            options: [
              "It stops the grounds from over-extracting into the water below",
              "It releases the trapped aroma at the most aromatic moment in coffee",
              "It cools the cup to the temperature required for accurate scoring",
              "It separates the defective beans so they can be removed by hand",
            ],
            correctIndex: 1,
            explanation:
              "A crust of grounds forms during the four-minute steep and holds aroma underneath it. Pushing it back with your nose over the cup is an observation most drinkers have never made.",
            sourceLessonSlug: "coffee-the-cupping-protocol",
          },
          {
            prompt: "What score defines specialty coffee on the classic SCA cupping form?",
            options: [
              "70 or above out of one hundred",
              "75 or above out of one hundred",
              "80 or above out of one hundred",
              "90 or above out of one hundred",
            ],
            correctIndex: 2,
            explanation:
              "The classic form scores ten attributes to a total of one hundred, and 80 is the specialty threshold the trade uses. The newer Coffee Value Assessment separates description from preference rather than replacing that idea outright.",
            sourceLessonSlug: "coffee-the-cupping-protocol",
          },
          {
            prompt: "What does clean cup actually measure?",
            options: [
              "The absence of interfering flavours, so each element stays distinct",
              "How pleasant the coffee tastes to the majority of a tasting panel",
              "Whether the cupping vessels were sterilised before the session",
              "The clarity of the liquid once the grounds have fully settled",
            ],
            correctIndex: 0,
            explanation:
              "Clean cup is not the same as tasty. A very enjoyable coffee can be an unclean cup, which is why the attribute is scored separately from flavour and from the overall judgement.",
            sourceLessonSlug: "coffee-the-cupping-protocol",
          },
          {
            prompt: "How do you distinguish bitterness from astringency?",
            options: [
              "Bitterness is felt on the gums, astringency across the back of the tongue",
              "Bitterness appears only when hot, astringency only once the cup is cold",
              "Bitterness is a taste, astringency is a drying texture on gums and cheeks",
              "Bitterness comes from the water, astringency comes from the beans",
            ],
            correctIndex: 2,
            explanation:
              "They are different mechanisms with different fixes. A rough, drying mouth after the coffee is gone is one of the most reliable indicators of over-extraction, and the answer is to extract less.",
            sourceLessonSlug: "coffee-scoring-the-cup",
          },
          {
            prompt: "What does uniformity compare in a cupping?",
            options: [
              "Several cups of the same coffee, to catch one unlucky defective bean",
              "The current lot against the same farm's crop from the previous year",
              "Each coffee on the table against the highest scoring one present",
              "The dry fragrance against the aroma released at the crust break",
            ],
            correctIndex: 0,
            explanation:
              "One defective bean can ruin a single cup while saying nothing about the lot. Brewing several and comparing is what separates a defective coffee from an unlucky cup, which is ordinary quality-control sampling.",
            sourceLessonSlug: "coffee-the-cupping-protocol",
          },
          {
            prompt: "Coffee reads as sweet even though little measurable sugar survives roasting. Why does that matter?",
            options: [
              "Because sweetness proves sugar was added during processing at origin",
              "Because sweetness is one of the best indicators of good farming and roasting",
              "Because sweetness only appears in coffees scoring above ninety points",
              "Because sweetness must be corrected for before any other attribute is scored",
            ],
            correctIndex: 1,
            explanation:
              "Perceived sweetness comes from aroma compounds and from the absence of competing harshness, and it is the first thing to disappear when farming or roasting goes wrong.",
            sourceLessonSlug: "coffee-scoring-the-cup",
          },
          {
            prompt: "Why does the course tell you to taste each cup again at ten and twenty minutes?",
            options: [
              "Scores are only valid once the coffee reaches room temperature",
              "The caffeine content changes measurably as the cup sits and cools",
              "It allows the grounds to settle enough for an accurate body score",
              "Coffee shifts character as it cools, and defects tend to appear late",
            ],
            correctIndex: 3,
            explanation:
              "Coffee changes across a twenty-minute window more than almost any other drink, and defects in particular tend to show up as it cools. Writing separately at each pass is the habit that teaches most.",
            sourceLessonSlug: "coffee-first-cupping",
          },
          {
            prompt: "What is the stated reason the first cupping includes a cheap bag with no roast date?",
            options: [
              "It serves as a control that makes the other coffees legible",
              "It is required by the cupping protocol as a calibration standard",
              "It demonstrates that inexpensive coffee is always inferior",
              "It provides enough volume to fill the remaining cupping bowls",
            ],
            correctIndex: 0,
            explanation:
              "Without something flat to compare against, clean and fruity are words rather than sensations. It is an honest test too: if the cheap bag holds up for you, that is a useful and money-saving result.",
            sourceLessonSlug: "coffee-first-cupping",
          },
          {
            prompt: "Why does the newer Coffee Value Assessment separate description from preference?",
            options: [
              "Because preference cannot be measured by any trained sensory panel",
              "Because describing and judging are different acts, and merging them produces marketing",
              "Because the older hundred-point form was found to be mathematically invalid",
              "Because buyers are legally barred from stating a preference for a lot",
            ],
            correctIndex: 1,
            explanation:
              "Running description and judgement together is how tasting notes turn into sales copy. That principle outlives any particular scoring form, which is why the course teaches both rather than only the older one.",
            sourceLessonSlug: "coffee-the-cupping-protocol",
          },
          {
            prompt: "What is balance asking about in a cupping score?",
            options: [
              "Whether the attributes support each other rather than fighting",
              "Whether the coffee weighs the correct dose for the water volume",
              "Whether every cup of the sample scored within one point",
              "Whether acidity and caffeine content are proportionate",
            ],
            correctIndex: 0,
            explanation:
              "Bright acidity with no sweetness underneath it is unbalanced even though acidity is a virtue. Uniformity is the attribute that compares cups of the same coffee.",
            sourceLessonSlug: "coffee-the-cupping-protocol",
          },
        ],
      },
    },

    // ══════════════ MODULE 3 · THE BEAN ══════════════
    {
      slug: "coffee-species-and-varieties",
      title: "9 · Two species, and the varieties worth knowing",
      section: "Module 3 · The bean",
      recallContent: [
        {
          prompt: "Name the three observations a cupper makes before tasting anything, in order.",
          answer:
            "Fragrance from the dry grounds, then the pour and a four-minute steep without stirring, then aroma at the crust break, with the nose right over the cup as the grounds are pushed back.",
        },
      ],
      body: `Nearly all commercial coffee is one of two species, and the difference between them is the first thing to learn because it explains most of the price gap on any shelf.

| | **Arabica** (*Coffea arabica*) | **Robusta** (*Coffea canephora*) |
| --- | --- | --- |
| Grows best | Higher altitude, cooler, more particular | Lower altitude, hotter, hardier |
| Caffeine | Lower, roughly half that of robusta | Higher, roughly double |
| Disease resistance | Poorer, notably to leaf rust | Better, which is why it is spreading with the climate |
| Typical cup | More acidity, more aromatic complexity, more sweetness | Heavier body, more bitterness, rubbery or grainy notes |
| Where you meet it | Nearly all specialty coffee | Instant coffee, commodity blends, and traditional Italian espresso blends for crema and body |

**Arabica is a hybrid, and a young one.** It is an allopolyploid: a natural cross between *Coffea canephora* and *Coffea eugenioides*, carrying both genomes. That origin left it with strikingly little genetic diversity, which is the underlying reason the species is so vulnerable to disease and to a warming climate (Scalabrin et al., 2020). This is not trivia. It is the biological version of the economic fragility Episode 1 covered.

**Robusta deserves better than its reputation.** It has been bred and processed badly for decades because it was grown for volume, but fine robusta exists, is being scored seriously, and is likely to matter more as the climate makes arabica's preferred altitudes harder to farm. Dismissing it wholesale is a habit worth dropping.

**The arabica varieties you will actually see on bags**

- **Typica and Bourbon.** The two historic lineages most other varieties descend from. Excellent cup, low yield, poor disease resistance.
- **Caturra, Catuai, Mundo Novo.** Bourbon and Typica derivatives bred for yield and manageability. The backbone of Latin American production.
- **Gesha (also spelled Geisha).** Ethiopian in origin, famous since a Panamanian farm won with it in the early 2000s. Floral, tea-like, and priced far beyond every other variety, which makes it a useful lesson in how much of coffee's price is scarcity and reputation.
- **SL28 and SL34.** Selected in Kenya, responsible for the blackcurrant intensity that makes Kenyan coffee recognisable.
- **Ethiopian landraces.** Often labelled "heirloom," which is a catch-all rather than a variety: Ethiopia holds the species' wild genetic diversity, and much of it is simply not catalogued.
- **Castillo, Catimor and other hybrids.** Bred with robusta parentage for leaf rust resistance. Long dismissed on cup quality, increasingly disputed, and central to the survival of farms.

**The honest frame.** Variety matters less in coffee than in wine, because process and roast are louder. It matters most at the extremes, Gesha and SL28, and least in the middle. Do not build a shopping strategy on it.

:::reveal Why does arabica's origin as a hybrid of two other species matter beyond botany? ||| Because that origin left it with very little genetic diversity, which is the underlying reason arabica is so vulnerable to disease, especially leaf rust, and to a warming climate. It is the biological counterpart to the economic fragility of a commodity crop: a narrow genetic base and a narrow income base fail in similar ways, and it is why rust-resistant hybrids with robusta parentage matter to farm survival.

## Sources
- Scalabrin, S., Toniutti, L., Di Gaspero, G., Scaglione, D., Magris, G., Vidotto, M., Pinosio, S., Cattonaro, F., Magni, F., Jurman, I., Cerutti, M., Liverani, F. S., Navarini, L., Del Terra, L., Pellegrino, G., Ruosi, M. R., Vitulo, N., Valle, G., Pallavicini, A., … Morgante, M. (2020). A single polyploidization event at the origin of the tetraploid genome of Coffea arabica is responsible for the extremely low genetic variation in wild and cultivated germplasm. *Scientific Reports, 10*, 4642. https://doi.org/10.1038/s41598-020-61216-7
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.
- World Coffee Research. (n.d.). *Arabica coffee varieties*. https://varieties.worldcoffeeresearch.org`,
    },
    {
      slug: "coffee-altitude-and-place",
      title: "10 · Altitude, climate, and what place does to a cup",
      section: "Module 3 · The bean",
      body: `Coffee grows in a belt around the equator, roughly between the tropics, and inside that belt the variable that does the most work is **altitude**.

**Why altitude matters.** Higher means cooler, and cooler means the cherry ripens more slowly. Slower ripening builds more sugars and more of the acids that give a cup its brightness, and it produces a denser bean. This is why bags advertise metres above sea level and why some producing countries grade coffee by altitude outright: Guatemala's Strictly Hard Bean and Costa Rica's Strictly Hard Bean designations are altitude classes, not quality panels.

| Higher grown | Lower grown |
| --- | --- |
| More acidity, more aromatic complexity | Softer acidity, heavier body |
| Denser beans, slower to roast through | Less dense, roast faster |
| Slower to ripen, later harvest | Earlier harvest |

**What altitude cannot do alone.** It is a proxy for temperature. A high-latitude, high-altitude farm and a low-latitude, high-altitude farm are not equivalent, and a shaded low farm can behave like a higher one. Treat the number on the bag as evidence, not a verdict.

**The rest of the environment, briefly.** Rainfall pattern determines whether there is one harvest or two. Shade trees moderate temperature and slow ripening. Soil matters mostly through drainage and nutrition, exactly as it does in wine, and the "you can taste the volcanic soil" claim runs into the same plant physiology problem the wine course covers: minerals are taken up as dissolved ions far below sensory thresholds.

**Climate change is not a future item in coffee.** Warming pushes the viable altitude band upward, and up a mountain there is progressively less land, so the area suitable for arabica shrinks rather than moves. Modelling of the major producing regions projects substantial reductions in suitable area under continued warming (Bunn et al., 2015). This is the mechanism behind the rising interest in robusta, in rust-resistant hybrids, and in new origins, and it will show up in what you can buy and what it costs.

**How this reaches your cup, practically.** When you read "1,800 to 2,000 metres, washed, Bourbon" on a bag, you can predict a great deal: probably bright, probably clean, probably denser beans that a roaster had to work harder to develop. When the bag says nothing about altitude, that silence is itself information about how much the seller knows or wants to tell you.

:::reveal Warming is pushing coffee's viable altitude band upward. Why does that shrink the growing area rather than simply move it? ||| Because a mountain narrows as it rises: there is progressively less land at each higher altitude band, so the suitable area contracts rather than relocating intact. It also cannot move sideways into land that is already farmed, forested or protected. That geometry is why the projections show reductions in suitable area, and why rust-resistant hybrids and fine robusta are getting serious attention rather than being dismissed.

## Sources
- Bunn, C., Läderach, P., Ovalle Rivera, O., & Kirschke, D. (2015). A bitter cup: Climate change profile of global production of Arabica and Robusta coffee. *Climatic Change, 129*(1-2), 89-101. https://doi.org/10.1007/s10584-014-1306-x
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.`,
    },
    {
      slug: "coffee-processing",
      title: "11 · Process: what happens to the fruit",
      section: "Module 3 · The bean",
      body: `A coffee bean is the seed of a fruit. Every process is a different answer to one question: how do you get the fruit off the seed, and how much of the fruit's influence do you leave behind?

| Process | What happens | What it usually does to the cup |
| --- | --- | --- |
| **Washed** (fully washed) | Fruit pulped off, remaining mucilage removed by fermentation and washing, then dried | Cleaner, brighter, more transparent. The origin and variety show most clearly |
| **Natural** (dry) | The whole cherry is dried intact, then hulled | Heavier body, lower perceived acidity, pronounced fruit, sometimes fermented or boozy notes |
| **Honey** (pulped natural) | Pulped, but some mucilage left on during drying | Between the two, and the amount left on is the dial |
| **Anaerobic / carbonic maceration** | Cherries sealed in oxygen-free tanks before drying, often with controlled temperature and time | Intense, distinctive, sometimes cinnamon or tropical or fermented. Divisive by design |
| **Wet hulled** (giling basah) | Hulled at a higher moisture content, an Indonesian practice | Heavy body, low acidity, earthy and savoury. The classic Sumatran profile |

**Two things worth understanding rather than memorising.**

**Fermentation is happening in every one of these.** Even a washed coffee ferments, in a tank, to break down the mucilage. The difference between processes is how much fermentation, with how much oxygen, at what temperature, and for how long. Once you see the axis, "anaerobic natural" stops being a marketing phrase and becomes a set of dials.

**Process is not a quality ranking.** A washed coffee is not better than a natural one. Washed shows origin more transparently, which is why it dominates in regions selling on origin character, and why some tasters call it cleaner. Natural adds a layer the process itself contributes. Both are choices, and a badly executed washed coffee is worse than a well executed natural.

**The honest caveat about the loud modern processes.** Heavily manipulated ferments can produce cups so distinctive that the origin becomes irrelevant, which is exactly the criticism levelled at heavy oak in wine. Some are extraordinary. Some are covering for ordinary coffee. The question to ask is the same one the wine course asks about oak: is there enough coffee underneath to carry it?

**Drying, which nobody talks about and which ruins more coffee than any of the above.** However the fruit came off, the beans must dry slowly and evenly to a stable moisture content. Dry too fast and the bean is damaged, too slow and mould and off-flavours develop, unevenly and the coffee will not store. Most defects you will meet were born during drying.

${flightCard(FLIGHT_2, ALT)}

:::reveal "Anaerobic natural" appears on a bag. Break that phrase into the two decisions it actually describes. ||| Anaerobic describes the FERMENTATION: the cherries were sealed in an oxygen-free environment before drying, usually with controlled time and temperature. Natural describes the DRYING: the whole cherry was dried intact rather than pulped first. Every coffee ferments to some degree, so the phrase is really specifying how much fermentation with how much oxygen, and then how the fruit was removed afterwards.

## Sources
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices`,
    },
    {
      slug: "coffee-roasting",
      title: "12 · Roasting: the decision you taste most",
      section: "Module 3 · The bean",
      body: `Green coffee smells of hay and tastes of almost nothing. Everything you recognise as coffee is created in the roaster, which makes roasting the single loudest decision in the chain.

**What is actually happening.** Heat drives off moisture, then the bean's sugars and amino acids react. **Maillard reactions** between sugars and amino acids generate hundreds of aroma compounds, and **caramelisation** breaks sugars down further. Both build flavour and both consume the sugars responsible for sweetness, which is the central tension of roasting: go far enough to develop flavour, not so far that you spend all the sweetness.

**The audible landmarks.** As water turns to steam and pressure builds, beans crack audibly. **First crack** marks the point where the bean has expanded and the coffee becomes drinkable. **Second crack**, later, is the bean's structure breaking down further, and oils migrate to the surface. Light roasts finish after first crack, medium between the two, dark at or past second crack.

**This course does not print a temperature for either**, and that is deliberate. The temperature at which a roaster reads first crack depends on the machine, the probe placement, the batch size and the bean, so a single number is the kind of confident, useless precision that makes a course look authoritative and leads a reader astray. Listen for it.

**What roast level costs you.**

| | Light | Medium | Dark |
| --- | --- | --- | --- |
| Acidity | Highest | Moderate | Largely gone |
| Body | Lighter | Fuller | Full but hollowing |
| Origin character | Most visible | Partly visible | Largely burned off |
| Roast character | Minimal | Present | Dominant: smoke, char |
| Surface | Dry | Dry | Often oily |

**Development, the concept that matters more than colour.** A bean can be dark on the outside and under-developed on the inside if the roast moved too fast. Under-developed coffee tastes of raw cereal, grass and a papery sourness that is easy to mistake for a bad bean or a bad brew. Colour alone does not tell you the roast was good, which is the same lesson the wine course teaches about colour depth.

**Quakers.** Underripe or defective beans that fail to brown and stay pale in a finished roast. In a light roast you can see them, and they taste of peanut and cardboard. Picking them out of a bag by hand before grinding is a five-second habit worth having.

${flightCard(FLIGHT_3, ALT)}

:::reveal A coffee looks convincingly dark but tastes of raw cereal, grass and a papery sourness. What most likely went wrong, and why is colour not enough to diagnose it? ||| The roast was probably under-developed: the beans browned on the outside without the inside progressing far enough, usually because the roast moved too fast. Colour reports only the surface, so a bean can be dark outside and raw inside, which is why development rather than colour is the concept that matters. It is the same reason depth of colour does not tell you a wine's structure.

## Sources
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices`,
    },
    {
      slug: "coffee-quiz-3",
      title: "13 · Knowledge check: the bean",
      section: "Module 3 · The bean",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Which statement about arabica and robusta is correct?",
            options: [
              "Robusta carries roughly double the caffeine and resists disease better",
              "Arabica carries roughly double the caffeine and resists disease better",
              "Both species carry identical caffeine and differ only in bean size",
              "Robusta grows only above 1,800 metres in equatorial highlands",
            ],
            correctIndex: 0,
            explanation:
              "Robusta is hardier, grows lower and hotter, and carries about twice the caffeine. Arabica brings more acidity and aromatic complexity, which is why nearly all specialty coffee is arabica.",
            sourceLessonSlug: "coffee-species-and-varieties",
          },
          {
            prompt: "Why is arabica so vulnerable to disease and climate stress?",
            options: [
              "Because it is grown almost entirely as a single global variety",
              "Because its shallow roots cannot survive any drought conditions",
              "Because its hybrid origin left it with very little genetic diversity",
              "Because it has been genetically modified in most producing countries",
            ],
            correctIndex: 2,
            explanation:
              "Arabica is an allopolyploid, a natural cross of C. canephora and C. eugenioides, and that origin left a narrow genetic base. It is the biological counterpart to the economic fragility of a commodity crop.",
            sourceLessonSlug: "coffee-species-and-varieties",
          },
          {
            prompt: "What does higher altitude do to a coffee?",
            options: [
              "Cooler temperatures slow ripening, building more acidity and denser beans",
              "Thinner air accelerates ripening, producing softer and heavier cups",
              "Increased sunlight raises caffeine content substantially in the seed",
              "Lower rainfall forces a second harvest later in the growing year",
            ],
            correctIndex: 0,
            explanation:
              "Slower ripening builds sugars and the acids behind brightness, and produces a denser bean that roasts differently. Altitude is a proxy for temperature, so it is evidence rather than a verdict.",
            sourceLessonSlug: "coffee-altitude-and-place",
          },
          {
            prompt: "Warming pushes coffee's viable altitude band upward. Why does the growing area shrink?",
            options: [
              "Because coffee cannot be grown above two thousand metres at all",
              "Because a mountain narrows as it rises, so there is less land at each band",
              "Because higher land is legally protected in every producing country",
              "Because the beans lose all commercial value above a certain height",
            ],
            correctIndex: 1,
            explanation:
              "The suitable zone contracts rather than relocating intact, and it cannot move sideways into land already farmed or forested. That geometry drives the interest in fine robusta and rust-resistant hybrids.",
            sourceLessonSlug: "coffee-altitude-and-place",
          },
          {
            prompt: "What distinguishes a washed coffee from a natural one?",
            options: [
              "Washed coffees are rinsed after roasting to remove surface oils",
              "Natural coffees are fermented and washed coffees never ferment at all",
              "Washed coffees use only arabica while naturals use only robusta",
              "Washed coffees have the fruit removed before drying, naturals dry whole",
            ],
            correctIndex: 3,
            explanation:
              "Washed tends to show origin more transparently, natural adds body and pronounced fruit. Every process involves fermentation to some degree, which is why the real axis is how much, with how much oxygen, and for how long.",
            sourceLessonSlug: "coffee-processing",
          },
          {
            prompt: "Which stage does the course say ruins more coffee than any other, despite rarely being discussed?",
            options: [
              "Drying, which must be slow and even to a stable moisture content",
              "Hulling, which cracks beans if the machinery is poorly calibrated",
              "Sorting, where defective beans are separated by density",
              "Shipping, where humidity fluctuates inside the container",
            ],
            correctIndex: 0,
            explanation:
              "Dry too fast and the bean is damaged, too slow and mould and off-flavours develop, unevenly and the coffee will not store. Most defects a taster meets were born during drying.",
            sourceLessonSlug: "coffee-processing",
          },
          {
            prompt: "Why does this course refuse to state the temperature of first crack?",
            options: [
              "Because the figure is a trade secret held by roasting equipment makers",
              "Because it varies by machine, probe placement, batch size and bean",
              "Because first crack is a visual event rather than a thermal one",
              "Because temperature has no relationship to roast development at all",
            ],
            correctIndex: 1,
            explanation:
              "A single number would be confident, useless precision. The course teaches the audible landmark instead, the same discipline it applies to any value owned by an external source.",
            sourceLessonSlug: "coffee-roasting",
          },
          {
            prompt: "What is an under-developed roast, and how does it taste?",
            options: [
              "A roast stopped before first crack, tasting intensely bitter and smoky",
              "A roast held past second crack, tasting of ash with no acidity left",
              "A roast that browned outside without the inside progressing, tasting of raw cereal and grass",
              "A roast cooled too slowly, tasting flat with no aroma whatsoever",
            ],
            correctIndex: 2,
            explanation:
              "It happens when the roast moves too fast, and it produces a papery sourness easy to mistake for a bad bean or a bad brew. Colour reports only the surface, which is why development matters more than colour.",
            sourceLessonSlug: "coffee-roasting",
          },
          {
            prompt: "What are quakers?",
            options: [
              "Underripe or defective beans that stay pale and taste of peanut and cardboard",
              "Beans that crack audibly a second time during a dark roast",
              "Broken bean fragments produced during the hulling process",
              "Beans deliberately left unroasted and blended in for body",
            ],
            correctIndex: 0,
            explanation:
              "They fail to brown, so they are visible in a light roast and can be picked out by hand in seconds before grinding, which is a cheap habit worth having.",
            sourceLessonSlug: "coffee-roasting",
          },
          {
            prompt: "What is the honest question to ask about a heavily manipulated anaerobic ferment?",
            options: [
              "Whether the producer holds a certification for the technique",
              "Whether there is enough coffee underneath to carry the process",
              "Whether the lot scored above ninety on the classic cupping form",
              "Whether the fermentation used commercial or ambient yeast",
            ],
            correctIndex: 1,
            explanation:
              "It is the same question the wine course asks about heavy new oak. Some are extraordinary and some are covering for ordinary coffee, and the process becoming louder than the origin is the tell.",
            sourceLessonSlug: "coffee-processing",
          },
          {
            prompt: "How much should variety drive a coffee shopping strategy?",
            options: [
              "It should be the primary filter, ahead of roast date and process",
              "It matters most at the extremes, such as Gesha and SL28, and least in the middle",
              "It is irrelevant, since all arabica varieties taste identical when roasted",
              "It matters only for robusta, where varietal differences are largest",
            ],
            correctIndex: 1,
            explanation:
              "Process and roast are louder than variety in coffee. Gesha and the Kenyan SL selections are the recognisable exceptions, and the middle of the range does not reward variety-led buying.",
            sourceLessonSlug: "coffee-species-and-varieties",
          },
        ],
      },
    },

    // ══════════════ MODULE 4 · BREWING ══════════════
    {
      slug: "coffee-extraction",
      title: "14 · Extraction, the one idea that fixes most bad coffee",
      section: "Module 4 · Brewing",
      recallContent: [
        {
          prompt: "Name the two chemical processes that build flavour during roasting, and the tension between them.",
          answer:
            "Maillard reactions between sugars and amino acids, and caramelisation of sugars. Both generate aroma compounds and both consume the sugars responsible for sweetness, so the roaster has to go far enough to develop flavour without spending all the sweetness.",
        },
      ],
      body: `Brewing is dissolving. Water passes through ground coffee and takes soluble compounds with it, and almost everything that goes wrong at home is a question of how much it took.

**Two numbers describe any brew.**

- **Extraction yield:** what percentage of the coffee's mass ended up dissolved in the cup. Take too little and you get the sour, thin, salty flavours that come out first. Take too much and you also pull the bitter, harsh, drying compounds that come out last.
- **Strength:** how concentrated the resulting liquid is, measured as total dissolved solids. Strength is about how it hits you, yield is about WHICH compounds you got.

Those are independent. A weak cup can be over-extracted and a strong cup can be under-extracted, which is why "make it stronger" so often makes coffee worse: people grind finer, pull more of the bitter end, and get a strong cup of the wrong compounds.

**The window.** The Specialty Coffee Association's brewing control work puts a widely used target range at roughly **18 to 22 percent extraction yield**, with strength around **1.15 to 1.35 percent** dissolved solids for filter coffee. Treat those as a WINDOW rather than a target, and treat your own preference inside it as the real answer.

**What you can actually taste**

| Symptom | Diagnosis | Fix |
| --- | --- | --- |
| Sour, thin, salty, finishes fast, empty | Under-extracted | Grind finer, brew longer, hotter water, more agitation |
| Bitter, hollow, drying, lingers unpleasantly | Over-extracted | Grind coarser, brew shorter, slightly cooler water, less agitation |
| Weak but not sour | Under-DOSED | Use more coffee, do not grind finer |
| Strong but harsh | Over-extracted at a high dose | Coarsen the grind first, before touching the dose |

That third and fourth row are where most people go wrong, because strength and extraction get confused.

**The four levers, in the order to reach for them**

1. **Grind size.** The dominant variable, because it changes surface area and how fast water moves through.
2. **Time.** How long the water and coffee are in contact.
3. **Temperature.** Hotter dissolves faster. Water just off the boil is a reasonable default for most filter methods.
4. **Agitation.** Stirring or pouring turbulence speeds extraction and evens it out.

**Ratio is separate.** Coffee to water, commonly somewhere around 1:15 to 1:18 by weight for filter, sets STRENGTH. Change the ratio to make a cup more or less intense, change the grind to fix how it tastes.

${flightCard(FLIGHT_4, ALT)}

:::reveal Someone says their coffee is too weak, so they grind finer and now it tastes bitter and drying. Diagnose the sequence of errors. ||| They confused strength with extraction. Weak-but-not-sour is an under-DOSING problem, fixed by using more coffee or a tighter ratio, so the correct move was to change the ratio. Grinding finer instead increased extraction, pulling the bitter and drying compounds that come out last, which produced a cup that is now over-extracted as well as being the wrong fix for the original complaint.

## Sources
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.`,
    },
    {
      slug: "coffee-water-and-method",
      title: "15 · Water, and choosing a method",
      section: "Module 4 · Brewing",
      body: `**A cup of coffee is about ninety-eight percent water**, and most people spend nothing on it and everything on beans. That ratio is backwards.

**What water does.** Minerals in water actively participate in extraction: certain ions bind and carry flavour compounds, so water with almost nothing in it extracts poorly and produces a hollow, oddly sour cup. Water with too much, especially high carbonate hardness, buffers the coffee's acidity away and leaves it flat, as well as scaling your equipment.

**What to aim for.** The SCA publishes a water standard for brewing, and the practically useful version is: aim for a moderate mineral content, low carbonate hardness, no chlorine, no off-odours. If you want one number to steer by, a total dissolved solids figure in the neighbourhood of 150 mg per litre is the commonly cited target, and the range around it matters more than the number itself. Local water varies enormously, which is exactly why the same beans taste different at your house and your friend's.

**Practical fixes, cheapest first.** A simple carbon filter removes chlorine, which is the single most common water fault. If your water is very hard, cutting it with distilled or using a bottled water with printed mineral content is a large upgrade. Do not use distilled alone.

**Choosing a method.** Every method is a set of choices about the four levers from Lesson 14.

| Method | How it extracts | What it suits |
| --- | --- | --- |
| **Pour over / filter cone** | Percolation, water passes through | Clarity and acidity. The most revealing method, and the least forgiving |
| **Immersion (French press, cupping)** | Coffee steeps in all the water | Body and forgiveness. A metal filter lets oils and fines through |
| **Aeropress and similar** | Immersion plus pressure through a filter | Flexibility, travel, and a very wide range of recipes |
| **Moka pot** | Steam pressure through a fine bed | Intensity, and easy to scorch |
| **Espresso** | About nine bars of pressure, very fine grind, short time | Concentration and texture, and the most equipment-dependent by far |
| **Cold brew** | Long immersion at low temperature | Low acidity and low bitterness, because cold water extracts less of both |

**A note on espresso, since people assume it is the goal.** It is the most demanding, most expensive and least forgiving method, and it amplifies grinder quality more than anything else. If you want better coffee tomorrow, improve your filter brewing. If you want a hobby, buy the espresso machine, and buy the grinder first.

${flightCard(FLIGHT_5, ALT)}

:::reveal Why does coffee brewed with distilled water taste hollow and oddly sour rather than simply pure? ||| Because minerals actively participate in extraction: certain ions bind and carry flavour compounds out of the grounds, so water with nothing in it extracts poorly. The result is a cup missing the compounds that would have given it sweetness and body, which reads as hollow, and with the sour early-extracting notes left relatively exposed. Pure water is not neutral, it is an ingredient doing its job badly.

## Sources
- Specialty Coffee Association. (n.d.). *Water quality standard*. https://sca.coffee/research/protocols-best-practices
- Hendon, C. H., Colonna-Dashwood, L., & Colonna-Dashwood, M. (2014). The role of dissolved cations in coffee extraction. *Journal of Agricultural and Food Chemistry, 62*(21), 4947-4950. https://doi.org/10.1021/jf501687c`,
    },
    {
      slug: "coffee-freshness-and-storage",
      title: "16 · Freshness, storage, and the roast date",
      section: "Module 4 · Brewing",
      body: `**The single most useful thing on a bag is a roast date**, and most coffee sold does not carry one. A best-before date twelve months out tells you the seller is not thinking about freshness, which is itself the information you needed.

**What staling actually is.** Two processes, running at once. Oxidation degrades the aroma compounds, and the volatile compounds simply escape. Neither makes coffee taste rotten. Both make it taste like LESS: aroma flattens, sweetness fades, and eventually a papery or cardboard note appears.

**The rough timeline, and why it is rough.** Whole beans in a sealed bag hold up for weeks. Ground coffee stales in days, because grinding multiplies the exposed surface area enormously. Brewed coffee degrades within the hour, and reheating it does not help. Anyone who gives you exact numbers is overstating a curve that depends on roast level, packaging, process and storage.

**Degassing, the other end.** Freshly roasted coffee releases carbon dioxide for days. Too much of it makes the bed erupt during brewing and extract unevenly, so very fresh coffee often tastes uneven and sour. Most filter coffee is better a few days off roast, and espresso often wants longer. This is why bags have one-way valves: they let carbon dioxide out without letting oxygen in.

**Storage, ranked by how much it matters**

1. **Buy less, more often.** No storage method beats not needing storage.
2. **Airtight and opaque, at room temperature.** Oxygen and light are the enemies.
3. **Do not keep it in the fridge.** It is humid and full of odours, and coffee takes on both.
4. **The freezer is genuinely good, with one rule.** Freezing whole beans in airtight portions preserves them well. The rule is: take out only what you will use and do not refreeze, because each cycle condenses moisture onto the beans.
5. **Grind immediately before brewing.** This is worth more than every other storage decision combined.

**What this means at the shop.** Look for a roast date, buy a quantity you will finish in two to three weeks, and buy whole beans. Those three habits cost nothing and will improve your coffee more than moving up a price tier.

${flightCard(FLIGHT_6, ALT)}

:::reveal Why is the freezer acceptable for coffee storage while the fridge is not, and what is the one rule? ||| The fridge is humid and full of strong odours, and coffee readily takes on both, so it damages the beans while barely slowing staling. A freezer, by contrast, slows the chemistry substantially and works well for whole beans in airtight portions. The rule is to take out only what you will use and never refreeze, because each cycle to room temperature and back condenses moisture onto the beans.

## Sources
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices`,
    },
    {
      slug: "coffee-brewing-drill",
      title: "17 · Drill: diagnose the cup",
      section: "Module 4 · Brewing",
      body: `Read the symptom, name the diagnosis or the fix. Type short answers, checked forgivingly.

This is the drill that pays for the course. Diagnosing a cup is the difference between owning a coffee habit and being at its mercy.`,
      exercise: {
        instructions: "Answer in a few words. Where a fix is asked for, name the lever and the direction.",
        items: [
          {
            prompt: "The cup is sour, thin, salty, and finishes almost immediately. Diagnosis?",
            answer: "under-extracted",
            accept: ["under extraction", "underextracted", "under-extraction"],
            explanation:
              "Sour, thin and salty are the compounds that come out first. The brew stopped before the sweeter, rounder compounds were dissolved.",
          },
          {
            prompt: "The cup is bitter, hollow, and leaves your gums dry and rough. Diagnosis?",
            answer: "over-extracted",
            accept: ["over extraction", "overextracted", "over-extraction"],
            explanation:
              "Drying astringency plus hollow bitterness is the late-extracting end. The water dissolved compounds you did not want.",
          },
          {
            prompt: "Same coffee, same grind, but you want a more intense cup. Which lever, and which direction?",
            answer: "ratio, use more coffee per water",
            accept: [
              "ratio, more coffee",
              "change the ratio",
              "tighter ratio",
              "more coffee, tighter ratio",
            ],
            explanation:
              "Intensity is strength, which the ratio sets. Grinding finer would change extraction instead and risks pulling bitter compounds.",
          },
          {
            prompt: "A cup tastes hollow and oddly sour, and the same beans taste fine at a friend's house. First suspect?",
            answer: "the water",
            accept: ["water", "water mineral content", "your water"],
            explanation:
              "Minerals participate in extraction. Very soft or distilled water extracts poorly, and very hard water buffers acidity away.",
          },
          {
            prompt: "Which single lever should you reach for FIRST when a cup tastes wrong?",
            answer: "grind size",
            accept: ["the grind", "grind", "particle size"],
            explanation:
              "Grind dominates because it changes surface area and flow rate at once. Time, temperature and agitation are the follow-up levers.",
          },
          {
            prompt: "Coffee roasted yesterday brews with a violently bubbling bed and tastes uneven and sour. Cause?",
            answer: "degassing, too much carbon dioxide",
            accept: ["degassing", "carbon dioxide", "co2 still escaping", "too fresh"],
            explanation:
              "Freshly roasted coffee releases carbon dioxide for days, which disrupts the bed and produces uneven extraction. Rest it a few days.",
          },
          {
            prompt: "Pale beans in a light roast that taste of peanut and cardboard. What are they called?",
            answer: "quakers",
            accept: ["quaker", "quaker beans"],
            explanation:
              "Underripe or defective beans that fail to brown. Visible in a light roast, and worth picking out by hand before grinding.",
          },
          {
            prompt: "A bag shows only a best-before date twelve months away. What does that tell you?",
            answer: "the seller is not thinking about freshness",
            accept: [
              "it is probably old",
              "no roast date, likely stale",
              "freshness is not a priority for the seller",
            ],
            explanation:
              "The absence of a roast date is itself the information. Whole beans hold up for weeks, not a year, and ground coffee stales in days.",
          },
          {
            prompt: "Name the storage location the course tells you to avoid outright.",
            answer: "the fridge",
            accept: ["fridge", "refrigerator", "the refrigerator"],
            explanation:
              "Humid and full of odours, both of which coffee takes on, while barely slowing staling. The freezer is fine for airtight portions never refrozen.",
          },
          {
            prompt: "Your brew is strong but harsh. Which lever do you change before touching the dose?",
            answer: "grind coarser",
            accept: ["coarser grind", "make the grind coarser", "coarsen the grind"],
            explanation:
              "Harshness is over-extraction, which the grind controls. Cutting the dose first would make a weaker cup that is still over-extracted.",
          },
        ],
      },
    },
    {
      slug: "coffee-quiz-4",
      title: "18 · Knowledge check: brewing",
      section: "Module 4 · Brewing",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the difference between extraction yield and strength?",
            options: [
              "Yield is which compounds you got, strength is how concentrated the liquid is",
              "Yield measures caffeine, strength measures total dissolved solids",
              "Yield applies to filter brewing, strength applies only to espresso",
              "They are two names for the same measurement taken at different times",
            ],
            correctIndex: 0,
            explanation:
              "They are independent, which is why a weak cup can be over-extracted and a strong one under-extracted. Confusing them is why 'make it stronger' so often makes coffee worse.",
            sourceLessonSlug: "coffee-extraction",
          },
          {
            prompt: "A cup is sour, thin, salty and finishes fast. What is the fix?",
            options: [
              "Grind coarser and shorten the brew time",
              "Grind finer, brew longer, or use hotter water",
              "Use less coffee for the same volume of water",
              "Switch to a darker roast of the same coffee",
            ],
            correctIndex: 1,
            explanation:
              "Those flavours are the early-extracting compounds, so the brew stopped too soon. Increasing extraction pulls the sweeter, rounder compounds that come later.",
            sourceLessonSlug: "coffee-extraction",
          },
          {
            prompt: "Which lever should you reach for first when a cup tastes wrong?",
            options: [
              "Water temperature, since it dissolves compounds fastest",
              "Agitation, since stirring evens out the extraction",
              "Grind size, since it changes surface area and flow rate at once",
              "The brewing device, since methods differ more than settings do",
            ],
            correctIndex: 2,
            explanation:
              "Grind dominates extraction. Time, temperature and agitation are real levers and they are the follow-up adjustments once the grind is close.",
            sourceLessonSlug: "coffee-extraction",
          },
          {
            prompt: "Why does distilled water make a hollow, oddly sour cup?",
            options: [
              "Because it boils at a lower temperature than mineral water",
              "Because it carries no minerals to bind and carry flavour compounds",
              "Because it dissolves too much, causing rapid over-extraction",
              "Because it reacts with the paper filter to produce off flavours",
            ],
            correctIndex: 1,
            explanation:
              "Minerals actively participate in extraction. Pure water is not neutral, it is an ingredient doing its job badly, which is why the same beans differ house to house.",
            sourceLessonSlug: "coffee-water-and-method",
          },
          {
            prompt: "What does staling do to coffee?",
            options: [
              "Makes it taste rancid and visibly changes the colour of the beans",
              "Increases bitterness sharply while leaving aroma intact",
              "Raises acidity as the oils oxidise into organic acids",
              "Makes it taste like less: aroma flattens, sweetness fades, paper appears",
            ],
            correctIndex: 3,
            explanation:
              "Staling is an absence rather than a flavour, which is why it is easy to miss without a fresh comparison. Ground coffee stales in days because grinding multiplies exposed surface area.",
            sourceLessonSlug: "coffee-freshness-and-storage",
          },
          {
            prompt: "Which storage advice does the course give?",
            options: [
              "Airtight, opaque, room temperature, and grind immediately before brewing",
              "Refrigerate in the original bag once it has been opened",
              "Decant into a clear glass jar so you can monitor the bean colour",
              "Grind the whole bag at once to minimise exposure during use",
            ],
            correctIndex: 0,
            explanation:
              "The fridge is humid and full of odours coffee absorbs. Freezing works for airtight portions that are never refrozen, and grinding fresh outweighs every other storage decision.",
            sourceLessonSlug: "coffee-freshness-and-storage",
          },
          {
            prompt: "Which brewing method does the course call the most revealing and least forgiving?",
            options: [
              "French press immersion with a metal filter",
              "Cold brew over an extended low temperature immersion",
              "Pour over percolation through a filter cone",
              "Moka pot extraction driven by steam pressure",
            ],
            correctIndex: 2,
            explanation:
              "Percolation through a paper filter gives clarity and shows acidity, which also means it exposes every error. Immersion methods are more forgiving and give more body.",
            sourceLessonSlug: "coffee-water-and-method",
          },
          {
            prompt: "What does the course advise someone who wants better coffee tomorrow?",
            options: [
              "Buy an espresso machine, since espresso extracts most completely",
              "Improve filter brewing first, since espresso is the least forgiving method",
              "Switch to darker roasts, which are more tolerant of technique errors",
              "Increase the dose substantially and keep every other variable fixed",
            ],
            correctIndex: 1,
            explanation:
              "Espresso is the most demanding, most expensive and most equipment-dependent method, and it amplifies grinder quality above all. It is a hobby rather than a shortcut to a better cup.",
            sourceLessonSlug: "coffee-water-and-method",
          },
          {
            prompt: "Very fresh coffee brews unevenly with a violently bubbling bed. Why?",
            options: [
              "Carbon dioxide still escaping from the beans disrupts extraction",
              "The oils have not yet migrated to the surface of the bean",
              "The beans retain too much moisture from the cooling process",
              "Fresh grounds are harder and resist water penetration entirely",
            ],
            correctIndex: 0,
            explanation:
              "Degassing continues for days after roasting, which is why bags have one-way valves and why most filter coffee is better a few days off roast than the morning after.",
            sourceLessonSlug: "coffee-freshness-and-storage",
          },
          {
            prompt: "Roughly what extraction yield window does the SCA's brewing control work identify?",
            options: [
              "About 8 to 12 percent of the coffee's mass dissolved",
              "About 18 to 22 percent of the coffee's mass dissolved",
              "About 30 to 35 percent of the coffee's mass dissolved",
              "About 45 to 50 percent of the coffee's mass dissolved",
            ],
            correctIndex: 1,
            explanation:
              "Paired with a strength of roughly 1.15 to 1.35 percent dissolved solids for filter. Both are a window to steer within rather than a single correct target.",
            sourceLessonSlug: "coffee-extraction",
          },
        ],
      },
    },

    // ══════════════ MODULE 5 · BUYING, ETHICS, DEDUCTION ══════════════
    {
      slug: "coffee-reading-a-bag",
      title: "19 · Reading a bag, and what certifications fix",
      section: "Module 5 · Buying and deduction",
      recallContent: [
        {
          prompt: "State the two numbers that describe any brew, and why confusing them makes coffee worse.",
          answer:
            "Extraction yield, the percentage of the coffee's mass dissolved into the cup, and strength, how concentrated the resulting liquid is. They are independent, so someone wanting a stronger cup who grinds finer instead of changing the ratio ends up with a strong cup of the bitter, late-extracting compounds.",
        },
      ],
      body: `**Read a bag in this order.** Roast date first, because everything else is moot if the coffee is old. Then origin specificity: a country is weak, a region is better, a named cooperative or farm and a lot number is a seller telling you they know where it came from. Then process, then variety, then altitude. Ignore the adjectives on the front.

**What the words legally promise, which in most markets is very little.** Unlike wine, coffee has almost no appellation law. There are exceptions worth knowing: **Jamaica Blue Mountain**, **Kona** and **Colombian coffee** all have protection schemes, and Kona in particular has been the subject of repeated fraud litigation over blends labelled to imply far more Kona content than they contained. But there is no general framework, and the words "artisan," "small batch," "gourmet," "premium" and "specialty roasted" mean nothing enforceable.

**The certifications, and what each one actually addresses**

| Mark | What it addresses | What it does not |
| --- | --- | --- |
| **Fairtrade** | A minimum price floor and a community premium, paid to certified cooperatives | Guarantee cup quality, or cover farms outside cooperatives |
| **Organic** | Prohibited inputs and certified practice | Say anything about price paid, labour, or quality |
| **Rainforest Alliance** | Environmental and some social criteria | Set a price floor |
| **Direct trade** | A roaster's own claim about buying relationships | Anything verifiable, since it is not a certification and has no standard |
| **Smallholder / cooperative language** | Often accurate | Carry any audited meaning by itself |

**The honest summary:** certifications address specific problems, none of them addresses all of them, and none is a quality mark. The most informative thing on a specialty bag is usually not a logo but a price paid and a lot traceable to a producer, which a growing number of roasters publish voluntarily.

**Why your five-dollar cup does not reach the farmer.** Episode 1 covered this economically. The mechanism worth adding here: most commodity coffee is priced against the **"C" futures contract**, a global benchmark that moves on weather, speculation and macro conditions rather than on any individual farmer's costs. When the C price sits below the cost of production, farmers sell at a loss, and that has happened repeatedly. Specialty buying escapes this partially by negotiating differentials above the C price, and fully only when a buyer prices against the cost of production instead.

**What that means for you, practically.** Paying more does not automatically help a farmer, because the extra money may stop anywhere along the chain. What reliably helps is buying from sellers who publish what they paid and to whom. Those sellers are increasingly easy to find, and the question is easy to ask.

:::reveal A bag says "premium artisan small-batch specialty roasted." Rank how much information that sentence contains, and say what you would look for instead. ||| It contains essentially none: not one of those words is enforceable or defined in most markets. What to look for instead, in order: a roast date, then how specifically the origin is named (country is weak, region better, a named cooperative or farm with a lot number best), then the process, then the variety and altitude. A published price paid to the producer is more informative than any front-label adjective or certification logo.

## Sources
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices
- Fairtrade International. (n.d.). *Coffee standards and minimum prices*. https://www.fairtrade.net
- International Coffee Organization. (n.d.). *Statistics and the ICO composite indicator price*. https://ico.org`,
    },
    {
      slug: "coffee-faults-and-defects",
      title: "20 · Defects worth recognising",
      section: "Module 5 · Buying and deduction",
      body: `A defect is not "a coffee I dislike." Knowing the specific ones lets you return a bag with confidence and, just as importantly, not blame a roaster for a brewing error.

**1. Staleness.** The commonest by far. Flat aroma, faded sweetness, papery or cardboard notes. Covered in Lesson 16.

**2. Over-extraction and under-extraction.** Also extremely common, and not the coffee's fault. Diagnosed in Lesson 14. Always rule these out before blaming the bag.

**3. Ferment.** An overpowering sour, vinegary, rotten-fruit or solvent character, from fermentation that went too far or in the wrong direction at origin. Distinguish it carefully from the deliberate fruit of a well made natural: intentional ferment is integrated and pleasant, defective ferment is sharp, hollow and makes you want to stop drinking.

**4. Phenolic.** A medicinal, plastic, disinfectant note. Unmistakable once met, and always a defect.

**5. Potato defect.** A raw potato smell, associated with damage from the antestia bug and found particularly in coffees from the Great Lakes region of Africa. It affects individual beans, so it can appear in one cup and not the next, which is exactly why cuppers brew several cups of the same coffee.

**6. Mould and mustiness.** Damp, cellar-like, dusty. Usually a drying or storage failure, and the reason drying is the stage that ruins the most coffee.

**7. Baked or scorched roast.** Baked coffee is flat and papery with no sweetness, from a roast that stalled and dragged. Scorched shows dark spots and a burnt, acrid edge, from too much heat too fast. Both are roasting errors rather than bean problems.

**8. Quakers.** Pale, underripe beans tasting of peanut and cardboard, from Lesson 12.

**And the things that are NOT defects.** Oils on the surface of a dark roast are normal for that roast level. Fine sediment in a French press cup is the method, not a fault. Coffee tasting different from the tasting notes on the bag is normal too: those notes were written by someone else's palate on someone else's equipment, and they are a starting point rather than a promise.

**How to complain usefully.** Give the roast date, the brew method, the ratio, the grind setting and what you tasted. A good roaster will engage seriously with that and dismiss "it tastes bad," and both responses are reasonable.

:::reveal A coffee tastes sharply sour and solvent-like. How do you decide whether that is a defect or a brewing error before contacting the roaster? ||| Rule out under-extraction first, since sour and thin is its signature: grind finer, brew longer or use hotter water and taste again. If the sourness persists across a properly extracted brew and is accompanied by a hollow, vinegary or solvent character that makes you want to stop drinking, it is more likely a ferment defect. The distinction from a well made natural is integration: intentional fruit is pleasant and integrated, defective ferment is sharp and hollow.

## Sources
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.`,
    },
    {
      slug: "coffee-origins-blind",
      title: "21 · The origins, and calling them blind",
      section: "Module 5 · Buying and deduction",
      body: `Rough reference points. Every one has exceptions, and the exceptions are increasing as processing spreads and producers experiment.

| Origin | Common reference profile |
| --- | --- |
| **Ethiopia** | Floral, citrus and stone fruit when washed, intense berry when natural. Tea-like body. The species' homeland and its genetic reservoir |
| **Kenya** | Blackcurrant, tomato-like savoury acidity, heavy and structured. SL28 and SL34 drive the signature |
| **Rwanda and Burundi** | Floral and clean, with the potato defect as a known risk |
| **Colombia** | Balanced, caramel sweetness, moderate to bright acidity. Enormous internal variation by region |
| **Brazil** | Low acidity, heavy body, chocolate and nuts. Mostly natural or pulped natural, and the volume backbone of the world |
| **Guatemala, Honduras, El Salvador, Costa Rica** | Balanced and clean, chocolate and orchard fruit, often altitude graded |
| **Indonesia (Sumatra)** | Earthy, savoury, herbal, very low acidity, heavy body, from wet hulling |
| **Yemen** | Wild, dried fruit, spice, funk. Historically central and now scarce |

**How to run a blind, and what to expect.** The order of difficulty is the important part: **process is easiest, roast level next, origin hardest.** Anyone who reliably calls farms blind is doing something other than what they claim.

**The deduction order**

1. **Roast level.** Look at the beans if you can, and taste for the acidity-versus-roast-character trade.
2. **Process.** Washed reads clean and transparent, natural reads heavy and fruit forward.
3. **Body and acidity together.** High acid with light body points one direction, low acid with heavy body another.
4. **Only then, origin**, and prefer a REGION to a country when the evidence is thin. "East African" is a better answer than a confident wrong Kenya.
5. **Commit in writing before you speak,** and name your second choice plus the observation that would have switched you.

**Record errors by type, not by coffee.** "I keep calling naturals washed when they are lightly roasted" is actionable. "I said Colombia and it was Guatemala" is not.

${flightCard(FLIGHT_7, ALT)}

:::reveal Why is process easier to call blind than origin, and what does that tell you about how to write a blind conclusion? ||| Because process changes the cup along a small number of loud, consistent axes: washed reads clean and transparent, natural reads heavier and fruit forward. Origin varies enormously within a single country and increasingly overlaps as producers adopt each other's processing, so the signal is weaker and noisier. It means a blind conclusion should commit confidently to process and roast, and hedge deliberately on origin by naming a region rather than a country when the evidence is thin.

## Sources
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices`,
    },
    {
      slug: "coffee-quiz-5",
      title: "22 · Knowledge check: buying and deduction",
      section: "Module 5 · Buying and deduction",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What should you read first on a bag of coffee?",
            options: [
              "The roast date, because everything else is moot if it is old",
              "The tasting notes, since they describe what you will experience",
              "The certification logos, which indicate the quality tier",
              "The roaster's name, which is the most reliable quality signal",
            ],
            correctIndex: 0,
            explanation:
              "After the roast date comes origin specificity, then process, then variety and altitude. Front-label adjectives such as artisan and premium mean nothing enforceable.",
            sourceLessonSlug: "coffee-reading-a-bag",
          },
          {
            prompt: "What does Fairtrade certification address?",
            options: [
              "A verified cup quality score above the specialty threshold",
              "A minimum price floor and a community premium for certified cooperatives",
              "A guarantee that the roaster paid above the market rate",
              "An independent audit of the roasting process and freshness",
            ],
            correctIndex: 1,
            explanation:
              "It is a price and premium mechanism, not a quality mark, and it covers certified cooperatives rather than every farm. No certification addresses all the problems at once.",
            sourceLessonSlug: "coffee-reading-a-bag",
          },
          {
            prompt: "What is the C price?",
            options: [
              "The retail ceiling price set by importing countries for green coffee",
              "The certified minimum price agreed under the organic standard",
              "A global futures benchmark moving on weather, speculation and macro conditions",
              "The average price paid by specialty roasters for traceable lots",
            ],
            correctIndex: 2,
            explanation:
              "It moves independently of any individual farmer's costs, so when it sits below the cost of production, farmers sell at a loss. Specialty buying escapes it only partially, through negotiated differentials.",
            sourceLessonSlug: "coffee-reading-a-bag",
          },
          {
            prompt: "Why can one cup of a coffee show the potato defect while the next does not?",
            options: [
              "The defect develops only in cups left to cool below room temperature",
              "It affects individual beans, which is why cuppers brew several cups",
              "It appears only when the grind is finer than filter setting",
              "It is caused by the water rather than by the coffee itself",
            ],
            correctIndex: 1,
            explanation:
              "The defect is associated with antestia bug damage and travels with individual beans. It is the clearest practical justification for the uniformity attribute in cupping.",
            sourceLessonSlug: "coffee-faults-and-defects",
          },
          {
            prompt: "How do you distinguish a ferment defect from a well made natural process coffee?",
            options: [
              "By the colour of the brewed liquid in the cup",
              "Defective ferment appears only in washed coffees",
              "A natural coffee never shows any fruit character at all",
              "Intentional fruit is integrated and pleasant, defective ferment is sharp and hollow",
            ],
            correctIndex: 3,
            explanation:
              "Both involve fermentation, so the presence of fruit is not the signal. Integration is: defective ferment reads vinegary and solvent-like and makes you want to stop drinking.",
            sourceLessonSlug: "coffee-faults-and-defects",
          },
          {
            prompt: "Which of these is NOT a defect?",
            options: [
              "Oil on the surface of a dark roasted bean",
              "A medicinal, disinfectant-like phenolic note",
              "A damp, cellar-like mustiness in the aroma",
              "A flat, papery cup with no sweetness from a stalled roast",
            ],
            correctIndex: 0,
            explanation:
              "Surface oil is normal at that roast level, as is sediment in a French press cup. Phenolic, mustiness and a baked roast are all genuine faults.",
            sourceLessonSlug: "coffee-faults-and-defects",
          },
          {
            prompt: "What is the correct order of difficulty when calling a coffee blind?",
            options: [
              "Origin is easiest, then variety, then process, then roast level",
              "Process is easiest, then roast level, then origin",
              "Variety is easiest, then origin, then process, then roast",
              "All four are equally difficult for a trained taster",
            ],
            correctIndex: 1,
            explanation:
              "Process changes the cup along a few loud axes, roast level is readable from the acidity and roast-character trade, and origin varies enormously within a country and increasingly overlaps between them.",
            sourceLessonSlug: "coffee-origins-blind",
          },
          {
            prompt: "Which origin profile is described as earthy, savoury, herbal, low acid and heavy bodied?",
            options: [
              "Kenya, driven by the SL28 and SL34 selections",
              "Ethiopia, the genetic homeland of the species",
              "Sumatra, a result of the wet hulling process",
              "Costa Rica, where coffee is graded by altitude",
            ],
            correctIndex: 2,
            explanation:
              "Wet hulling, or giling basah, produces the classic Indonesian profile. Kenya is blackcurrant and savoury acidity, Ethiopia floral or berry depending on process.",
            sourceLessonSlug: "coffee-origins-blind",
          },
          {
            prompt: "What is the most informative thing a specialty roaster can put on a bag, per this course?",
            options: [
              "A published price paid and a lot traceable to a producer",
              "A certification logo from a recognised international scheme",
              "A cupping score printed to one decimal place",
              "A detailed list of tasting notes from the head roaster",
            ],
            correctIndex: 0,
            explanation:
              "Paying more does not automatically reach a farmer, since the extra can stop anywhere along the chain. Sellers who publish what they paid and to whom are the reliable signal.",
            sourceLessonSlug: "coffee-reading-a-bag",
          },
          {
            prompt: "How should errors be recorded after a blind tasting?",
            options: [
              "As a running accuracy percentage across all sessions",
              "By coffee, so you can avoid origins you consistently misjudge",
              "By type, such as consistently calling naturals washed at light roasts",
              "Only when the error concerns origin, since process is easy",
            ],
            correctIndex: 2,
            explanation:
              "Errors cluster by type, and a short list of your own recurring ones is the fastest improvement available. 'I said Colombia and it was Guatemala' is not actionable.",
            sourceLessonSlug: "coffee-origins-blind",
          },
        ],
      },
    },
    {
      slug: "coffee-capstone",
      title: "23 · Capstone: buy, brew, and defend three coffees",
      section: "Module 5 · Buying and deduction",
      lessonType: "assignment",
      body: `One assignment, three bags, and a written defence. Nobody can complete it by reading, and the caffeine-free path completes it fully.

**The brief.** You are choosing coffee for yourself for a month, with a total budget of sixty US dollars for three bags. Buy, brew, cup and defend.

**What to submit.**

**1. Three bags, with reasoning.** For each: what you bought, what it cost, and WHY, citing at least one thing you read off the label using Lesson 19's order (roast date, origin specificity, process, variety, altitude). At least one bag must come from a seller who publishes something about what they paid or who they bought from, and you must say what they published.

**2. A full cupping of all three**, on the protocol from Module 2: fragrance, aroma at the crust break, then acidity, sweetness, body, bitterness, aftertaste and clean cup, scored at three temperatures as they cool. Scores defended by sensation, not by expectation.

**3. A dialled-in brew recipe for each.** Dose, water, ratio, grind setting, temperature, time. Show at least one adjustment you made and WHY, in the diagnostic language of Lesson 14: what you tasted, what you changed, what happened.

**4. A blind call on one of the three.** Have someone pour it among two others, or shuffle bagged samples yourself. Work the deduction order from Lesson 21, commit in writing to roast level, process and rough origin, then reveal. If you were wrong, name the ONE observation that should have redirected you.

**5. The economics, honestly.** For one of your three bags, write what you can actually establish about who was paid what. If the answer is "nothing is published and I could not find out," that is a legitimate and useful finding, and saying so scores as well as a fully traceable lot.

**6. Your price ceiling.** Across the three, where did more money stop buying you pleasure? Give a number and the evidence.

**The caffeine-free version.** Identical structure, using decaf for all three, which is straightforward for process and roast comparisons and increasingly easy to source as single origins. Where you cannot find a decaf equivalent, substitute a tea of contrasting origin and processing and say what you substituted and why. Graded identically.

**What a strong submission looks like.** Specific, evidenced, and honest about at least one thing that went wrong. A submission where every brew was perfect on the first attempt did not really test anything.`,
    },
    {
      slug: "coffee-review-and-sources",
      title: "24 · Cumulative review and sources",
      section: "Module 5 · Buying and deduction",
      body: `**Acidity is a virtue.** Bright and juicy, from organic acids. What people dislike and call acidic is usually under-extraction, which is a brewing fault.

**Dark roast is not stronger**, it is roastier. Caffeine is fairly stable through roasting, and darker roasting burns off origin character.

**Cupping fixes every variable** so the difference you taste belongs to the coffee: 8.25 g per 150 ml, coarse grind, four-minute steep, break the crust with your nose over the cup, taste repeatedly as it cools. Specialty means 80 or above on the classic hundred-point form, and the newer Coffee Value Assessment separates describing from judging.

**Bitterness is a taste, astringency is a texture.** Rough, drying gums after the cup is one of the most reliable signs of over-extraction.

**Two species.** Arabica for acidity and complexity, robusta for body, bitterness and about double the caffeine. Arabica's hybrid origin left it genetically narrow, which is why it is fragile.

**Altitude is a proxy for temperature.** Cooler ripens slower, which builds acidity and density. Warming shrinks the suitable area rather than moving it, because a mountain narrows as it rises.

**Process is a set of dials**, not a ranking: how much fermentation, with how much oxygen, for how long, and then how the fruit came off. Drying ruins more coffee than any other stage.

**Roasting is the loudest decision**, and development matters more than colour. A dark surface can hide a raw interior.

**Extraction and strength are independent.** Sour and thin means extract more, bitter and drying means extract less, weak but not sour means use more coffee. Reach for grind first.

**Water is ninety-eight percent of the cup.** Too few minerals extracts poorly, too many buffers acidity away.

**Freshness has a floor and a ceiling.** Rest a few days off roast, then use it within weeks, grind immediately, and never use the fridge.

**Certifications address specific problems and none is a quality mark.** A published price paid beats every logo.

**Blind, call process first, roast second, origin last**, prefer a region to a country, and record errors by type.

:::reveal Without looking back, state the three diagnoses from the extraction table and the fix for each. ||| Sour, thin, salty and fast-finishing means UNDER-extracted, so extract more: grind finer, brew longer, hotter water, more agitation. Bitter, hollow, drying and lingering means OVER-extracted, so extract less: grind coarser, brew shorter, slightly cooler water. Weak but not sour means under-DOSED, so change the ratio and use more coffee rather than grinding finer, because that is a strength problem rather than an extraction one.

## Sources

**Protocol and trade**
- Fairtrade International. (n.d.). *Coffee standards and minimum prices*. https://www.fairtrade.net
- International Coffee Organization. (n.d.). *Statistics and the ICO composite indicator price*. https://ico.org
- Specialty Coffee Association. (n.d.). *Protocols and best practices*. https://sca.coffee/research/protocols-best-practices
- Specialty Coffee Association. (n.d.). *Coffee value assessment*. https://sca.coffee/value-assessment
- Specialty Coffee Association & World Coffee Research. (2016). *The coffee taster's flavor wheel*. https://sca.coffee/research/coffee-tasters-flavor-wheel
- World Coffee Research. (n.d.). *Arabica coffee varieties*. https://varieties.worldcoffeeresearch.org

**Science**
- Bunn, C., Läderach, P., Ovalle Rivera, O., & Kirschke, D. (2015). A bitter cup: Climate change profile of global production of Arabica and Robusta coffee. *Climatic Change, 129*(1-2), 89-101. https://doi.org/10.1007/s10584-014-1306-x
- Buck, L., & Axel, R. (1991). A novel multigene family may encode odorant receptors: A molecular basis for odor recognition. *Cell, 65*(1), 175-187. https://doi.org/10.1016/0092-8674(91)90418-X
- Folmer, B. (Ed.). (2017). *The craft and science of coffee*. Academic Press.
- Hendon, C. H., Colonna-Dashwood, L., & Colonna-Dashwood, M. (2014). The role of dissolved cations in coffee extraction. *Journal of Agricultural and Food Chemistry, 62*(21), 4947-4950. https://doi.org/10.1021/jf501687c
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.
- Nobel Assembly at Karolinska Institutet. (2004). *The Nobel Prize in Physiology or Medicine 2004*. https://www.nobelprize.org/prizes/medicine/2004/summary/
- Scalabrin, S., Toniutti, L., Di Gaspero, G., Scaglione, D., Magris, G., Vidotto, M., Pinosio, S., Cattonaro, F., Magni, F., Jurman, I., Cerutti, M., Liverani, F. S., Navarini, L., Del Terra, L., Pellegrino, G., Ruosi, M. R., Vitulo, N., Valle, G., Pallavicini, A., … Morgante, M. (2020). A single polyploidization event at the origin of the tetraploid genome of Coffea arabica is responsible for the extremely low genetic variation in wild and cultivated germplasm. *Scientific Reports, 10*, 4642. https://doi.org/10.1038/s41598-020-61216-7`,
    },
  ],
};
