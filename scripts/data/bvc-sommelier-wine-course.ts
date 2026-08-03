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
import { flightCard, STRUCTURE, TASTING_GRID, WINE_METHOD_NOTE, type Flight } from "../lib/sommelier";

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
  alternate: "This whole flight is already alcohol free. It is the foundation for every later flight, so run it first either way.",
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
  alternate:
    "Substitute four non-alcoholic drinks that isolate the same axes: unsweetened cranberry juice (high acid), a sweetened iced tea (residual sugar), a twelve minute black tea (tannin), and a full fat oat milk (body). Score them on the same six-line grid. The vocabulary transfers exactly, and alcohol is the one line you skip.",
};

const FLIGHT_2: Flight = {
  n: 2,
  title: "Four white grapes, four signatures",
  teaches: "The markers that give a white grape away, tasted side by side so the differences are unmissable.",
  tier: "core",
  bottles: [
    {
      role: "Pyrazines and thiols",
      target: "A Sauvignon Blanc from the Loire (Sancerre or Touraine) or from Marlborough",
      priceUsd: "15-25",
      substitute: "Any wine labelled Sauvignon Blanc from a cool region",
    },
    {
      role: "Acid as a structural spine",
      target: "A dry Riesling from Germany, Alsace or Austria",
      priceUsd: "16-25",
      substitute: "An Australian Riesling from Clare or Eden Valley",
    },
    {
      role: "A neutral grape showing the winemaker instead of itself",
      target: "An unoaked Chardonnay, Chablis if the budget stretches",
      priceUsd: "18-28",
      substitute: "Any Chardonnay whose back label says stainless steel or unoaked",
    },
    {
      role: "Texture and salinity",
      target: "An Albarino from Rias Baixas, or a Gruner Veltliner from Austria",
      priceUsd: "15-24",
      substitute: "A dry Chenin Blanc from the Loire or South Africa",
    },
  ],
  procedure: [
    "Serve all four at the same temperature, around 10 to 12 degrees Celsius. Temperature differences will masquerade as grape differences.",
    "Nose all four before tasting any of them. Rank them from most aromatic to least, and write down what makes the loudest one loud.",
    "Score acidity on all four before flavour. Riesling should be at or near the top. If it is not, check your Sauvignon Blanc, which can rival it.",
    "Find the green note in the Sauvignon Blanc and name it precisely: grass, gooseberry, green pepper, blackcurrant leaf. That family is the pyrazine and thiol signature.",
    "Ask of the Chardonnay: what does this taste of that is NOT the grape? That is the lesson of Chardonnay.",
  ],
  lookFor:
    "Covering the labels and re-pouring in a different order, you can pick out the Sauvignon Blanc and the Riesling with confidence.",
  alternate:
    "Run the same shape with four non-alcoholic drinks chosen for aromatic contrast: fresh grapefruit juice (loud and thiol-like), unsweetened green tea (herbaceous and lightly grippy), coconut water (neutral and textural), and a lime-and-mineral-water mix (acid spine). Rank aromatic intensity, score acid, and name the green note. The exercise is the ranking, and it works without wine.",
};

const FLIGHT_3: Flight = {
  n: 3,
  title: "Four red grapes, four structures",
  teaches: "That red grapes differ more in STRUCTURE than in flavour, and structure is what you can actually recognise.",
  tier: "core",
  bottles: [
    {
      role: "Pale, high acid, low to medium tannin",
      target: "A Pinot Noir from Burgundy at village level, Oregon, or a Beaujolais Cru for the cheaper version of the lesson",
      priceUsd: "20-30",
      substitute: "Any pale, light bodied red from a cool region",
    },
    {
      role: "Peppery and savoury, medium to high tannin",
      target: "A Syrah from the Northern Rhone (Crozes-Hermitage or Saint-Joseph)",
      priceUsd: "20-30",
      substitute: "A cool climate Syrah from Chile, Victoria or Washington",
    },
    {
      role: "High tannin, black fruit, structural spine",
      target: "A Cabernet Sauvignon from Bordeaux, Chile or California",
      priceUsd: "18-28",
      substitute: "A Bordeaux blend labelled by its appellation rather than its grape",
    },
    {
      role: "High alcohol, ripe red fruit, soft tannin",
      target: "A Grenache-based blend from the Southern Rhone (Cotes du Rhone or Rasteau)",
      priceUsd: "15-24",
      substitute: "A Garnacha from Aragon or a warm climate Grenache from Australia",
    },
  ],
  procedure: [
    "Serve all four at 16 to 18 degrees Celsius, cooler than most rooms. A warm red reads as alcoholic and flabby and will wreck the comparison.",
    "Score tannin on all four FIRST, before any flavour note, and rank them. This ranking is the point of the flight.",
    "Now score acid and rank again. Notice that the Pinot Noir can be the lightest AND among the highest in acid.",
    "Look specifically for black pepper in the Syrah. Some people cannot smell the compound responsible, so if you find nothing there, that is a real and documented result, not a failure.",
    "Check every label for stated alcohol after you have scored, and see how close your alcohol calls were.",
  ],
  lookFor:
    "You can rank the four by tannin and by acid, and those two rankings are not the same ranking.",
  alternate:
    "Build the same structural ladder without wine: a hibiscus or cranberry infusion (high acid, low grip), a twelve minute black tea (high grip), a pomegranate juice cut with water (fruit plus moderate grip), and a strong unsweetened cocoa infusion (grip plus body). Rank grip, then rank acid, and confirm the two rankings differ. That is the transferable lesson.",
};

const FLIGHT_4: Flight = {
  n: 4,
  title: "One grape, two climates",
  teaches: "That climate is legible in the glass, and it moves acid, alcohol, fruit ripeness and body together.",
  tier: "core",
  bottles: [
    {
      role: "Cool climate white",
      target: "A Chablis, or another cool region unoaked Chardonnay",
      priceUsd: "20-30",
      substitute: "A Chardonnay from Chile's Limari or from Tasmania",
    },
    {
      role: "Warm climate white, same grape",
      target: "A Chardonnay from California, South Australia or Mendoza, unoaked if you can find it",
      priceUsd: "15-25",
      substitute: "Any Chardonnay stating 14% alcohol or more",
    },
    {
      role: "Cool climate red",
      target: "A Syrah from the Northern Rhone",
      priceUsd: "20-30",
      substitute: "A cool climate Syrah from Chile or Washington",
    },
    {
      role: "Warm climate red, same grape",
      target: "A Shiraz from Barossa or McLaren Vale",
      priceUsd: "18-28",
      substitute: "Any Shiraz stating 14.5% alcohol or more",
    },
  ],
  procedure: [
    "Taste in pairs: the two Chardonnays together, then the two Syrahs together. Never all four at once, because the pair IS the experiment.",
    "For each pair, score acid, alcohol, body and fruit state (fresh, ripe, cooked, dried). Four lines, two wines.",
    "Predict which is which before you look, then check the labels and the stated alcohol.",
    "Write one sentence per pair: what moved together. Acid down, alcohol up, fruit riper, body fuller is the standard warm climate package.",
    "Now find the exception in your own results, because there usually is one, and ask whether winemaking rather than climate explains it.",
  ],
  lookFor:
    "You called cool versus warm correctly in both pairs, and you can name the four things that moved together.",
  alternate:
    "Compare fruit at two ripeness stages, which is the same variable: a green underripe apple against a soft ripe one, and fresh grapes against raisins. Score acid, sweetness, body and fruit state on each. The cool-to-warm package (acid falling, sugar rising, fruit moving from fresh to cooked to dried) is exactly what your mouth reports.",
};

const FLIGHT_5: Flight = {
  n: 5,
  title: "What oak actually does",
  teaches: "Separating the taste of a GRAPE from the taste of a winemaking decision.",
  tier: "core",
  bottles: [
    {
      role: "The control, no oak",
      target: "An unoaked Chardonnay, stainless steel stated on the label",
      priceUsd: "15-22",
      substitute: "A Chablis at village level",
    },
    {
      role: "The same grape with oak",
      target: "An oaked Chardonnay from California, Burgundy or Australia",
      priceUsd: "20-30",
      substitute: "Any Chardonnay whose back label mentions barrel fermentation or French oak",
    },
    {
      role: "American oak signature",
      target: "A Rioja Crianza or Reserva, traditionally aged in American oak",
      priceUsd: "16-26",
      substitute: "A Bourbon barrel aged red, which pushes the same signature further",
    },
  ],
  procedure: [
    "Nose the unoaked wine and write three aromas. This is your grape baseline.",
    "Nose the oaked version of the same grape and write only what is ADDED. Vanilla, clove, toast, smoke, cedar, coconut, baking spice.",
    "Taste both and compare TEXTURE, not flavour. Oak adds tannin to a white wine, which most people do not expect, and it usually adds a broader, rounder mouthfeel.",
    "Nose the Rioja for coconut and dill. Those two point specifically toward American oak rather than French.",
    "Ask the honest question on each wine: is the oak carrying the fruit, or hiding it?",
  ],
  lookFor:
    "You can list what oak added without naming a single thing the grape itself contributed.",
  alternate:
    "Oak is an infusion, so infuse. Steep a clean, food-safe oak chip (sold for home brewing and for cooking) in water overnight, then taste that water against plain water: vanilla, toast and a faint grip appear from nothing. Then compare plain unsweetened cocoa against a vanilla-and-toast-forward hot chocolate for the same lesson at a larger scale.",
};

const FLIGHT_6: Flight = {
  n: 6,
  title: "Three ways to put bubbles in a bottle",
  teaches: "That how the second fermentation was done changes the aroma more than the grape does.",
  tier: "core",
  bottles: [
    {
      role: "Tank method, primary fruit preserved",
      target: "A Prosecco, Brut or Extra Dry",
      priceUsd: "14-20",
      substitute: "Any sparkling wine made by the tank or Charmat method",
    },
    {
      role: "Traditional method, autolytic character",
      target: "A Cremant from France, or a Cava Reserva",
      priceUsd: "16-26",
      substitute: "Any sparkler labelled traditional method, methode traditionnelle or metodo classico",
    },
    {
      role: "Dosage contrast",
      target: "A second bottle of the traditional method wine at a different sweetness level, Brut Nature or Extra Dry",
      priceUsd: "16-26",
      substitute: "A Moscato d'Asti, which sits far along the same sweetness axis",
    },
  ],
  procedure: [
    "Serve all at 6 to 8 degrees Celsius, in a normal wine glass rather than a flute. A flute concentrates bubbles and hides aroma.",
    "Nose the tank method wine: expect pear, apple and flowers, the primary fruit of the grape.",
    "Nose the traditional method wine: look for bread, brioche, biscuit and toasted nuts. That family is autolysis, from time on the dead yeast.",
    "Compare bubble texture, not bubble size. Time on lees tends to give a finer, more integrated feel.",
    "Compare the two dosage levels and note how much sugar changes your read on the acid, even though the acid did not change.",
  ],
  lookFor:
    "You can say which wine had a second fermentation in its own bottle, from aroma alone, without reading the label.",
  alternate:
    "The autolytic character is a bread aroma, so smell it at the source: fresh bread crust, a plain biscuit and toasted brioche against a fresh pear and a green apple. Then run the sweetness half honestly with sparkling water plus zero, six and thirty grams of sugar per litre, tasting each against a squeeze of lemon. You will feel sugar mask acid without the acid changing.",
};

const FLIGHT_7: Flight = {
  n: 7,
  title: "Bordeaux, left bank against right bank",
  teaches: "That one region's two halves are two different wines, and that the grape mix is readable from the glass.",
  tier: "splurge",
  bottles: [
    {
      role: "Cabernet Sauvignon dominant, gravel soils",
      target: "A left bank Bordeaux: Haut-Medoc, Saint-Estephe, Pauillac, Saint-Julien or Margaux",
      priceUsd: "35-60",
      substitute: "A Haut-Medoc at the lower end of the band, which shows the same structure with less flesh",
    },
    {
      role: "Merlot dominant, clay and limestone",
      target: "A right bank Bordeaux: Saint-Emilion, or a Lalande-de-Pomerol for the affordable version",
      priceUsd: "35-60",
      substitute: "A Castillon or Fronsac, the same grapes from the neighbouring appellations",
    },
  ],
  procedure: [
    "Decant both an hour ahead, and taste at 16 to 18 degrees Celsius. These wines are built to be aired.",
    "Score tannin, acid and body on both before smelling for flavour.",
    "Look for the structural difference: the Cabernet dominant wine should feel firmer and more angular, the Merlot dominant one rounder and plusher at the same price.",
    "Look for the aromatic difference: blackcurrant, cedar and a graphite or pencil-lead note on one side, plum and chocolate on the other.",
    "Then check the technical sheet or the producer's site for the actual blend, and mark how close you were.",
  ],
  lookFor:
    "You can defend a left bank or right bank call using structure rather than flavour, which is the more reliable evidence.",
  alternate:
    "Run the structural half with two black teas: an assertive Assam and a softer Ceylon, both steeped ten minutes, tasted side by side. The lesson is that two things from the same family can differ mainly in the SHAPE of their tannin, angular against round, and that shape is what a left bank and right bank comparison is really teaching.",
};

const FLIGHT_8: Flight = {
  n: 8,
  title: "Two Italians, two kinds of high acid",
  teaches: "That acid and tannin combine differently in different grapes, and that Italy's greatness is savoury rather than fruity.",
  tier: "splurge",
  bottles: [
    {
      role: "Nebbiolo, the tannin and acid extreme",
      target: "A Barolo or Barbaresco, or a Langhe Nebbiolo at half the price for most of the lesson",
      priceUsd: "40-70",
      substitute: "A Nebbiolo from Alto Piemonte or Valtellina",
    },
    {
      role: "Sangiovese, savoury and food shaped",
      target: "A Chianti Classico, ideally a Riserva",
      priceUsd: "25-40",
      substitute: "A Rosso di Montalcino, which is the younger sibling of Brunello",
    },
  ],
  procedure: [
    "Taste both without food first. Score acid and tannin on each, and write down which one your mouth finds harder work.",
    "Now eat something fatty and salty with them: aged cheese, cured meat, or a simple tomato and olive oil dish.",
    "Score again. The scores will move, and the direction they move is the entire lesson of Module 10.",
    "Find the savoury notes rather than the fruit ones: tar, dried rose, leather, tomato leaf, dried herbs.",
    "Ask yourself the honest question: were either of these enjoyable on their own, and did that change with food?",
  ],
  lookFor:
    "You can explain why both wines make more sense with food than without, and name what in each wine the food was acting on.",
  alternate:
    "Use a strong unsweetened black tea and a tart hibiscus infusion, tasted before and after eating aged cheese or salted olives. Score grip and acid each time. The direction of the change (fat and salt softening grip, food making acid feel refreshing rather than sharp) is exactly what the wine flight demonstrates.",
};

const FLIGHT_9: Flight = {
  n: 9,
  title: "One grape, two philosophies",
  teaches: "The difference between a wine made to express a SITE and a wine made to express FRUIT.",
  tier: "splurge",
  bottles: [
    {
      role: "Site expression",
      target: "A village level red Burgundy, or a Bourgogne Rouge from a good producer if the budget is tight",
      priceUsd: "35-70",
      substitute: "A Cru Beaujolais such as Morgon or Moulin-a-Vent, which teaches the same idea for far less",
    },
    {
      role: "Fruit expression",
      target: "A Pinot Noir from Sonoma Coast, Willamette Valley or Central Otago",
      priceUsd: "30-55",
      substitute: "Any New World Pinot Noir stating 14% alcohol or more",
    },
  ],
  procedure: [
    "Taste blind if you can get someone to pour. This is the flight where knowing the label most distorts the judgement.",
    "Score fruit intensity, acid, alcohol and body. Then score how much of the wine is NOT fruit: earth, mushroom, stem, spice, savoury notes.",
    "Ask which wine is louder and which is more detailed. They are not the same question, and this flight exists to prove it.",
    "Now ask the honest preference question separately from the quality question, exactly as Lesson 9 framed it.",
    "Write one sentence you would say to a guest about each, in plain language, without a single wine word.",
  ],
  lookFor:
    "You can describe the difference without ranking them, and you can then rank them and say clearly that the ranking is your preference.",
  alternate:
    "Compare a single origin light roast coffee against a commercial dark roast blend, both brewed the same way. One is detailed, acidic and site specific, the other is louder, rounder and more consistent. Score intensity against detail separately. That is the same philosophical split the wine flight is teaching, in a drink you can buy anywhere.",
};

const FLIGHT_10: Flight = {
  n: 10,
  title: "What price actually buys, blind",
  teaches: "Where your own money stops buying you pleasure, which is a personal number nobody else can give you.",
  tier: "core",
  bottles: [
    { role: "Entry tier", target: "A wine at about $10 from a region you like", priceUsd: "9-12" },
    { role: "The value sweet spot", target: "The same grape and region at about $20", priceUsd: "18-24" },
    { role: "Step up", target: "The same grape and region at about $40", priceUsd: "35-45" },
  ],
  procedure: [
    "Same grape, same region, three prices. Have someone else pour them into numbered glasses, or bag the bottles yourself and shuffle.",
    "Score all three on the full grid before guessing any prices.",
    "Rank them by quality using the four criteria: balance, length, intensity, complexity.",
    "Rank them again by pure enjoyment. Write both rankings down before revealing.",
    "Reveal. The question that matters is not whether you ranked them in price order, it is where the jump was biggest FOR YOU.",
  ],
  lookFor:
    "You can name your own price ceiling with evidence: the point above which the wine got better and you stopped caring.",
  alternate:
    "Run it with olive oil, chocolate or coffee at three price tiers, same origin and style, tasted blind and scored on the same four criteria. Almost everyone finds the jump from cheapest to middle is large and the jump from middle to expensive is smaller, which is the finding that changes how you shop.",
};

const FLIGHT_11: Flight = {
  n: 11,
  title: "Pairing, tested rather than assumed",
  teaches: "That pairing is mechanics you can predict, not etiquette you have to memorise.",
  tier: "core",
  bottles: [
    {
      role: "High acid white",
      target: "A Sauvignon Blanc, a dry Riesling or a Muscadet",
      priceUsd: "15-22",
      substitute: "Any unoaked white from a cool region",
    },
    {
      role: "High tannin red",
      target: "A young Cabernet Sauvignon or a Nebbiolo",
      priceUsd: "18-30",
      substitute: "Any young red whose tannin you scored as high in Flight 1",
    },
    {
      role: "Off dry white",
      target: "An off dry Riesling or a Vouvray Demi-Sec",
      priceUsd: "16-25",
      substitute: "A Moscato d'Asti",
    },
  ],
  procedure: [
    "Set out five foods: a lemon wedge, salted crisps or olives, a hard aged cheese, a fatty item such as rare steak or a rich cheese, and something genuinely spicy with chilli heat.",
    "Taste each wine alone and record acid, tannin, sweetness and how much you like it right now.",
    "Now taste each wine after each food, one at a time, rinsing with water between. Fifteen combinations. It goes faster than it sounds.",
    "Record only what MOVED: did the wine seem more or less acidic, more or less tannic, more or less sweet, more or less enjoyable.",
    "Pay particular attention to two combinations: the tannic red with the fatty item, and the tannic red with the chilli.",
  ],
  lookFor:
    "You can predict, before tasting, what salt will do to tannin and what chilli will do to alcohol, because you felt both happen.",
  alternate:
    "Every mechanism in this flight except the alcohol and chilli interaction works without wine. Use strong black tea (tannin), lemon water (acid) and a sweetened iced tea (sugar) against the same five foods. Salt softening tannin and fat softening tannin are both dramatic in tea, and the sugar and chilli relationship works exactly the same way.",
};

const FLIGHT_12: Flight = {
  n: 12,
  title: "Blind: six wines, no labels",
  teaches: "Deduction under real conditions, including being wrong and finding out why.",
  tier: "core",
  bottles: [
    { role: "Cool climate white", target: "Anything from Flight 2 or 4, poured by someone else", priceUsd: "15-25" },
    { role: "Warm climate white", target: "A contrasting white from a warm region", priceUsd: "15-25" },
    { role: "Light bodied red", target: "A Pinot Noir, Gamay or other pale, high acid red", priceUsd: "18-28" },
    { role: "Full bodied red", target: "A Cabernet, Syrah or Malbec from a warm region", priceUsd: "16-26" },
    { role: "A wine with obvious winemaking", target: "Something oaked, carbonic, skin contact or sparkling", priceUsd: "16-26" },
    { role: "A wine with some age", target: "Anything at least six or seven years old, from your own shelf or a shop's back stock", priceUsd: "20-40" },
  ],
  procedure: [
    "Someone else pours, bags the bottles, and does not tell you the order. If you are alone, bag them, shuffle, and pour with your eyes closed.",
    "Work the full deduction grid on each wine in silence, writing everything down before you speak or guess.",
    "Commit to a written conclusion on each: grape or grape family, climate, rough age, and a quality judgement.",
    "Reveal all six at once, not one at a time, so an early miss does not distort your later calls.",
    "For every wrong call, write the ONE observation that should have redirected you. That sentence is the actual output of this flight.",
  ],
  lookFor:
    "You called climate correctly more often than grape, which is the normal and correct order of difficulty, and you can name your own recurring error.",
  alternate:
    "Run a six-sample blind on teas, juices or coffees, chosen so that three variables are in play: intensity, acid, and grip. Work the same grid, commit to written conclusions, and reveal all six at once. The skill being trained is the DISCIPLINE of not guessing early, and that is drink agnostic.",
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

${WINE_METHOD_NOTE}

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
            "That it is affiliated with, or preparation for, any certifying body such as the Wine and Spirit Education Trust or the Court of Master Sommeliers. It follows a similar arc because the profession has converged on that order, and it says so instead of implying an endorsement.",
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

    // ══════════════ MODULE 3 · THE GRAPE ══════════════
    {
      slug: "somm-why-variety-matters",
      title: "11 · Why variety matters, and where it stops mattering",
      section: "Module 3 · The grape",
      recallContent: [
        {
          prompt: "Name the four quality criteria from the conclusion stage, and say which one the course calls the most important.",
          answer:
            "Balance, length, intensity and complexity. Balance is the most important and the easiest for a beginner to feel, because green acid, hot alcohol, bitter tannin and cloying sugar all announce themselves.",
        },
      ],
      body: `There are more than a thousand wine grape varieties in commercial use, documented variety by variety with their DNA relationships in Robinson, Harding and Vouillamoz (2012). You need about twenty. Those twenty cover most of what is on a shop shelf, and more importantly they set the REFERENCE POINTS you compare everything else against.

**What a variety actually gives you.** A grape brings a package: how thick its skin is (and therefore colour and tannin), how much acid it holds onto as it ripens, how early or late it ripens, and a set of aroma compounds that are genuinely characteristic. Some of those compounds are identified and measurable, which is why certain markers are reliable rather than poetic:

| Marker | Compound family | Grapes it points to |
| --- | --- | --- |
| Green bell pepper, blackcurrant leaf | Methoxypyrazines, which fall as the fruit ripens and gets sun exposure | Sauvignon Blanc, Cabernet Sauvignon, Cabernet Franc, Carmenere |
| Passionfruit, grapefruit, box tree | Volatile thiols | Sauvignon Blanc above all |
| Black pepper | Rotundone, identified as the pepper aroma in Shiraz by Wood et al. (2008) | Syrah, Gruner Veltliner, Mourvedre |
| Petrol or kerosene in an older white | TDN, which develops with age, more in sun exposed and warm sites | Riesling |
| Banana, kirsch, bubblegum | Isoamyl acetate, a fermentation product, not a grape trait | Any wine made by carbonic maceration, classically Beaujolais |

That last row is the important caveat. Some of what tastes like "the grape" is actually the winemaking, and Module 5 exists to separate the two.

**Where variety stops mattering.** Three places.

1. **Climate outruns it.** The same grape in Chablis and in Barossa produces wines a beginner would not guess were related. Module 4 makes this the whole lesson.
2. **Blends.** Much of the world's best wine is blended, and most Old World labels do not tell you what is in the bottle. A Chateauneuf-du-Pape may legally draw on a long list of permitted varieties. Asking "what grape is this" is sometimes the wrong question.
3. **Winemaking can shout louder.** Heavy new oak, extended lees ageing, or carbonic maceration can dominate a neutral grape completely. This is not a flaw, it is a choice, and Chardonnay is famous precisely because it takes a winemaker's fingerprint so willingly.

**How to actually learn twenty grapes.** Not by reading lists. By tasting them in CONTRAST, two or four at a time, and by writing down the one thing that separates them for you personally. The next two lessons give you the reference sets and the flights. Your notes from those flights are worth more than any table in this course, because they are in your vocabulary.

:::reveal A red wine smells strongly of banana and bubblegum. Is that telling you about the grape or about the winemaking, and what does it imply? ||| The winemaking. Isoamyl acetate is a fermentation product associated with carbonic maceration, the whole-berry technique classically used in Beaujolais, so it points at a METHOD rather than at a variety. It is the cleanest example of why the grape and the cellar have to be scored separately.

## Sources
- Robinson, J., Harding, J., & Vouillamoz, J. (2012). *Wine grapes: A complete guide to 1,368 vine varieties, including their origins and flavours*. Ecco.
- Wood, C., Siebert, T. E., Parker, M., Capone, D. L., Elsey, G. M., Pollnitz, A. P., Eggers, M., Meier, M., Vossing, T., Widder, S., Krammer, G., Sefton, M. A., & Herderich, M. J. (2008). From wine to pepper: Rotundone, an obscure sesquiterpene, is a potent spicy aroma compound. *Journal of Agricultural and Food Chemistry, 56*(10), 3738-3744. https://doi.org/10.1021/jf800183k`,
    },
    {
      slug: "somm-noble-whites",
      title: "12 · The white grapes worth knowing",
      section: "Module 3 · The grape",
      body: `Eight whites. Learn these and you can place most white wine you meet.

| Grape | Acid | Aromatic? | The marker that gives it away | Classic homes |
| --- | --- | --- | --- | --- |
| **Riesling** | Very high | Yes | Piercing acid with real fruit ripeness, often some residual sugar, and petrol with age | Germany, Alsace, Austria, Clare and Eden Valley |
| **Sauvignon Blanc** | High | Loudly | Green: grass, gooseberry, blackcurrant leaf, plus tropical thiols | Loire, Marlborough, Chile, Bordeaux blends |
| **Chardonnay** | Varies with site | Barely | Very little of its own. What you taste is site plus cellar | Burgundy, everywhere else on earth |
| **Chenin Blanc** | Very high | Moderate | Bruised apple, quince, wet wool, and it appears at every sweetness level | Loire (Vouvray, Savennieres), South Africa |
| **Pinot Gris / Grigio** | Low to medium | Moderate | Two personalities: lean and neutral as Grigio, rich and spiced as Gris | Northern Italy, Alsace, Oregon |
| **Gewurztraminer** | Low | Extremely | Lychee and rose. It is almost impossible to mistake and often reads sweet even when dry | Alsace, Alto Adige |
| **Viognier** | Low | Very | Apricot and honeysuckle with a full, oily body | Condrieu, Rhone, California |
| **Albarino / Gruner Veltliner** | High | Moderate | Albarino: citrus and salinity. Gruner: white pepper and lentil | Rias Baixas, Austria |

**The four that matter most, and why.**

**Riesling** is the reference for acid. It is also the most misunderstood grape in the shop, because a lot of people believe it is always sweet. It runs bone dry to intensely sweet, and Module 6 shows you how the German label tells you which. Its combination of high acid and low alcohol makes it one of the most food friendly wines in the world, and one of the longest lived whites.

**Sauvignon Blanc** is the reference for aromatic loudness. The green notes are pyrazines, which fall as grapes get riper and more sun, so a green, grassy Sauvignon is telling you about a cool site or an early pick. The tropical passionfruit notes are thiols. Both are the grape, neither is the cellar.

**Chardonnay** is the reference for NEUTRALITY, which is exactly why it became the world's most planted white. It is a blank cheque: it takes oak, lees, malolactic conversion and site expression more willingly than anything else. Chablis and a warm oaked Chardonnay taste unrelated, and are the same grape. The DNA work identifies it as a cross of Pinot and Gouais Blanc (Bowers et al., 1999), which is a useful reminder that most famous grapes are the children of unfamous ones.

**Chenin Blanc** is the reference for RANGE. Dry, off dry, sweet, sparkling, and it holds enough acid to make all of them work. South Africa's plantings, historically called Steen, mean the grape is often the best value on a list.

${flightCard(FLIGHT_2)}

:::reveal Someone hands you a white with high acid, pronounced green apple and quince, and a faint wet wool note, and it is very slightly off dry. Name the likely grape and the two regions you would guess first. ||| Chenin Blanc, with the Loire (Vouvray in particular, which is made across the sweetness range) and South Africa as first guesses. The combination that points to it is very high acid holding up real fruit ripeness, plus that lanolin or wet wool note, plus the fact that a small amount of residual sugar is entirely normal for the grape rather than a sign of a cheap wine.

## Sources
- Bowers, J., Boursiquot, J.-M., This, P., Chu, K., Johansson, H., & Meredith, C. (1999). Historical genetics: The parentage of Chardonnay, Gamay, and other wine grapes of northeastern France. *Science, 285*(5433), 1562-1565. https://doi.org/10.1126/science.285.5433.1562
- Robinson, J., Harding, J., & Vouillamoz, J. (2012). *Wine grapes: A complete guide to 1,368 vine varieties, including their origins and flavours*. Ecco.`,
    },
    {
      slug: "somm-noble-reds",
      title: "13 · The red grapes worth knowing",
      section: "Module 3 · The grape",
      body: `Ten reds, sorted by the thing you can actually feel: structure.

| Grape | Tannin | Acid | Body | The marker that gives it away | Classic homes |
| --- | --- | --- | --- | --- | --- |
| **Pinot Noir** | Low to medium | High | Light to medium | Pale colour with real perfume: red cherry, rose, forest floor with age | Burgundy, Oregon, Central Otago, Sonoma Coast |
| **Gamay** | Low | High | Light | Bright red fruit, often banana and kirsch when carbonic | Beaujolais |
| **Nebbiolo** | Very high | Very high | Medium | The contradiction: pale garnet colour with ferocious tannin, tar and roses | Barolo, Barbaresco, Valtellina |
| **Sangiovese** | High | Very high | Medium | Sour red cherry, tomato leaf, dried herbs, a savoury finish | Chianti, Montalcino, Montepulciano |
| **Tempranillo** | Medium to high | Medium | Medium to full | Red fruit and leather, and very often coconut and dill from American oak | Rioja, Ribera del Duero |
| **Merlot** | Medium | Medium | Medium to full | Plum and chocolate, softer and rounder than Cabernet at the same ripeness | Right Bank Bordeaux, everywhere |
| **Cabernet Sauvignon** | High | Medium to high | Full | Blackcurrant, cedar, and a pyrazine green edge when not fully ripe | Bordeaux, Napa, Chile, Coonawarra |
| **Syrah / Shiraz** | Medium to high | Medium | Full | Black pepper (rotundone) when cool grown, sweet blackberry and licorice when warm | Northern Rhone, Barossa, Chile |
| **Grenache / Garnacha** | Low to medium | Low to medium | Full | High alcohol with soft tannin and ripe red fruit, often with a herbal edge | Southern Rhone, Priorat, Aragon |
| **Malbec / Zinfandel** | Medium | Medium to low | Full | Malbec: inky violet, plush. Zinfandel: jammy, high alcohol, uneven ripeness | Mendoza, Cahors, California |

**Read that table by column, not by row.** The rows are trivia. The columns are the skill. Learning that Nebbiolo is pale AND very tannic while Malbec is dark AND moderately tannic is what breaks the beginner's assumption that dark equals strong.

**Cabernet Sauvignon is a made grape, and recently.** DNA analysis identified it as a natural cross of Cabernet Franc and Sauvignon Blanc (Bowers & Meredith, 1997), which explains the family resemblance in the green pyrazine note that runs through Sauvignon Blanc, Cabernet Franc and Cabernet Sauvignon alike. If you can find blackcurrant leaf in a Sauvignon Blanc, you already know how to find it in a Cabernet.

**Zinfandel and Primitivo are the same variety**, tracked back to a Croatian grape by DNA work in the early 2000s (Maletic et al., 2004). It ripens unevenly, so a single bunch can hold raisined and underripe berries at once, which is exactly why the wines are often high in alcohol and jammy.

**Syrah is the clearest climate demonstration in wine**, which is why Flight 4 uses it. Cool grown, it is peppery, savoury and medium bodied. Warm grown, the pepper compound largely disappears and the wine becomes sweet fruited, plush and high in alcohol. Same grape, two conclusions a beginner would swear were different varieties.

${flightCard(FLIGHT_3)}

:::reveal You have a red that is pale garnet, dries your gums aggressively, makes you salivate hard, and smells of tar and dried roses. What is your first guess and what is the confirming logic? ||| Nebbiolo, most likely from Barolo or Barbaresco. The confirming logic is the contradiction: almost no other grape combines a pale, easily seen-through colour with very high tannin and very high acid at once, and thin skins are precisely why it is pale despite the grip. Tar and roses is the classic descriptor pair, but the structure is what makes the call.

## Sources
- Bowers, J. E., & Meredith, C. P. (1997). The parentage of a classic wine grape, Cabernet Sauvignon. *Nature Genetics, 16*(1), 84-87. https://doi.org/10.1038/ng0597-84
- Maletic, E., Pejic, I., Kontic, J. K., Piljac, J., Dangl, G. S., Vokurka, A., Lacombe, T., Mirosevic, N., & Meredith, C. P. (2004). Zinfandel, Dobricic, and Plavac Mali: The genetic relationships among three cultivars of the Dalmatian coast of Croatia. *American Journal of Enology and Viticulture, 55*(2), 174-180.
- Robinson, J., Harding, J., & Vouillamoz, J. (2012). *Wine grapes: A complete guide to 1,368 vine varieties, including their origins and flavours*. Ecco.`,
    },
    {
      slug: "somm-varietal-markers-drill",
      title: "14 · Drill: name the grape from the evidence",
      section: "Module 3 · The grape",
      body: `Structure first, then marker, then name. Work from the evidence given and type the grape or the compound family. Answers are checked forgivingly, so spelling and accents will not sink you.

This drill is deliberately harder than a multiple choice question, because producing a name from evidence is the skill blind tasting actually needs.`,
      exercise: {
        instructions:
          "Read the evidence and type the answer. Grape names only, unless the prompt asks for a compound family.",
        items: [
          {
            prompt: "Pale garnet, very high tannin, very high acid, tar and dried roses. Grape?",
            answer: "Nebbiolo",
            explanation:
              "The pale-but-tannic contradiction is nearly unique to Nebbiolo, whose thin skins give little colour while delivering ferocious grip.",
          },
          {
            prompt: "White wine, blistering acid, low alcohol, ripe stone fruit, faint petrol note. Grape?",
            answer: "Riesling",
            accept: ["Riesling (aged)"],
            explanation:
              "Petrol comes from TDN, which develops with bottle age in Riesling. High acid with low alcohol is the other half of the signature.",
          },
          {
            prompt: "The compound family responsible for green bell pepper and blackcurrant leaf aromas?",
            answer: "pyrazines",
            accept: ["methoxypyrazines", "methoxypyrazine"],
            explanation:
              "Pyrazine levels fall as fruit ripens and gets sun exposure, so a strong green note points to a cool site or an early pick.",
          },
          {
            prompt: "Red wine with obvious black pepper, medium body, savoury rather than sweet fruit. Grape and climate?",
            answer: "Syrah, cool climate",
            accept: ["Syrah cool", "cool climate Syrah", "Shiraz, cool climate"],
            explanation:
              "Rotundone, the pepper compound, is far more evident in cool grown Syrah. Warm grown Shiraz loses the pepper and gains sweet fruit and alcohol.",
          },
          {
            prompt: "White wine, unmistakable lychee and rose, low acid, reads sweet even when dry. Grape?",
            answer: "Gewurztraminer",
            accept: ["Gewurztraminer", "Gewürztraminer"],
            explanation:
              "One of the few wines that is genuinely hard to mistake. Low acid plus overwhelming aromatics makes it read sweet regardless of residual sugar.",
          },
          {
            prompt: "Red wine, banana and bubblegum on the nose, light body, low tannin. Grape and technique?",
            answer: "Gamay, carbonic maceration",
            accept: ["Gamay carbonic", "Gamay, carbonic", "Gamay with carbonic maceration"],
            explanation:
              "Isoamyl acetate from carbonic maceration produces the banana note. It is a method marker, not a grape marker, and Beaujolais is the classic home of both.",
          },
          {
            prompt: "White wine with almost no aroma of its own, obvious vanilla and toast, broad texture. Grape and cellar decision?",
            answer: "Chardonnay, oak",
            accept: ["Chardonnay oak", "Chardonnay, oaked", "Chardonnay with oak"],
            explanation:
              "Chardonnay's neutrality is the point: what you are tasting is the winemaking. Vanilla and toast are oak markers, not grape markers.",
          },
          {
            prompt: "Red wine, coconut and dill over red fruit and leather, medium tannin. Grape and oak origin?",
            answer: "Tempranillo, American oak",
            accept: ["Tempranillo American oak", "Tempranillo, American"],
            explanation:
              "Coconut and dill point specifically at American oak rather than French, and the traditional Rioja style is the classic pairing of that oak with Tempranillo.",
          },
          {
            prompt: "Red wine, sour red cherry, dried herbs, tomato leaf, very high acid, savoury finish. Grape?",
            answer: "Sangiovese",
            explanation:
              "The savoury, sour-cherry profile with very high acid is Sangiovese's signature, and it is why the grape works so well with tomato-based food.",
          },
          {
            prompt: "Red wine, very high alcohol, soft tannin, ripe red fruit and a herbal edge. Grape?",
            answer: "Grenache",
            accept: ["Garnacha", "Grenache/Garnacha"],
            explanation:
              "Grenache accumulates sugar readily and holds relatively little tannin, so high alcohol with a soft structure is the standard package.",
          },
        ],
      },
    },
    {
      slug: "somm-quiz-3",
      title: "15 · Knowledge check: the grape",
      section: "Module 3 · The grape",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Why is Chardonnay described as the reference grape for neutrality?",
            options: [
              "It ripens later than other whites, so it accumulates fewer aroma compounds",
              "It contributes little aroma of its own, so site and cellar decisions show through",
              "It is legally required to be fermented without added yeast",
              "Its acid is so high that other flavours cannot be perceived",
            ],
            correctIndex: 1,
            explanation:
              "Neutrality is why Chardonnay became the world's canvas grape: it takes oak, lees and malolactic conversion willingly, so Chablis and a warm oaked Chardonnay taste unrelated while being the same variety.",
            sourceLessonSlug: "somm-noble-whites",
          },
          {
            prompt: "A strong green bell pepper note in a Cabernet Sauvignon most directly indicates what?",
            options: [
              "Extended ageing in new French oak barrels",
              "A fault caused by bacterial spoilage in the cellar",
              "Pyrazines, which fall with ripeness and sun exposure",
              "Residual sugar left in the wine after fermentation",
            ],
            correctIndex: 2,
            explanation:
              "Methoxypyrazines drop as the fruit ripens, so a pronounced green edge points to a cool site or an early pick. It is a grape and ripeness signal, not oak, not a fault, and not sugar.",
            sourceLessonSlug: "somm-why-variety-matters",
          },
          {
            prompt: "What makes Nebbiolo's appearance so useful as a teaching example?",
            options: [
              "Its colour is pale while its tannin is very high, breaking the dark-equals-strong assumption",
              "It is the only red grape that produces a wine with no visible rim variation",
              "Its colour deepens with age rather than fading, unlike other reds",
              "It is opaque when young and pale only after a decade in bottle",
            ],
            correctIndex: 0,
            explanation:
              "Thin skins give little colour while still delivering ferocious grip, so a beginner who reads depth of colour as a proxy for structure gets it exactly backwards on Nebbiolo.",
            sourceLessonSlug: "somm-noble-reds",
          },
          {
            prompt: "Banana and bubblegum aromas in a light red are telling you about what?",
            options: [
              "The grape variety, which produces those esters naturally",
              "The winemaking method, specifically carbonic maceration",
              "The age of the wine, since esters develop over a decade",
              "The soil type, which contributes those aromas through the roots",
            ],
            correctIndex: 1,
            explanation:
              "Isoamyl acetate is a fermentation product tied to carbonic maceration, classically Beaujolais. It is the clearest example of the cellar imitating a grape trait, which is why the two are scored separately.",
            sourceLessonSlug: "somm-why-variety-matters",
          },
          {
            prompt: "DNA analysis established Cabernet Sauvignon as a natural cross of which two varieties?",
            options: [
              "Pinot Noir and Gouais Blanc",
              "Merlot and Carmenere",
              "Cabernet Franc and Sauvignon Blanc",
              "Syrah and Mondeuse Blanche",
            ],
            correctIndex: 2,
            explanation:
              "Bowers and Meredith (1997) identified the Cabernet Franc by Sauvignon Blanc parentage, which explains the shared green pyrazine thread running through all three. Pinot by Gouais Blanc produced Chardonnay and Gamay instead.",
            sourceLessonSlug: "somm-noble-reds",
          },
          {
            prompt: "What does a petrol or kerosene note in a white wine most reliably indicate?",
            options: [
              "A fault introduced by a contaminated storage tank",
              "Fermentation carried out at an unusually high temperature",
              "Contact with a synthetic closure over several years",
              "TDN developing with age, characteristically in Riesling",
            ],
            correctIndex: 3,
            explanation:
              "TDN accumulates with bottle age and is more pronounced from sun exposed and warmer sites. It is a normal and prized part of mature Riesling, not a fault.",
            sourceLessonSlug: "somm-why-variety-matters",
          },
          {
            prompt: "Cool grown Syrah and warm grown Shiraz differ most obviously in what respect?",
            options: [
              "Peppery and savoury versus sweet fruited, plush and higher in alcohol",
              "Pale and low tannin versus opaque and very high tannin",
              "Very high acid versus no perceptible acid at all",
              "Aromatic when young versus completely neutral when young",
            ],
            correctIndex: 0,
            explanation:
              "Rotundone, the pepper compound, is far more evident in cool conditions. Warm growing pushes the wine toward sweet blackberry and licorice with more alcohol, which is why the same variety reads as two grapes.",
            sourceLessonSlug: "somm-noble-reds",
          },
          {
            prompt: "Why does the course say the grape variety is sometimes the wrong question to ask?",
            options: [
              "Because variety is legally secret in most of the world",
              "Because blends are common and many Old World labels never state the grapes",
              "Because DNA testing has shown most named varieties are identical",
              "Because variety has no measurable effect on structure or aroma",
            ],
            correctIndex: 1,
            explanation:
              "Much of the world's best wine is blended and labelled by place, so a Chateauneuf-du-Pape may draw on a long list of permitted varieties. Climate and winemaking can also outrun variety entirely.",
            sourceLessonSlug: "somm-why-variety-matters",
          },
          {
            prompt: "Coconut and dill notes over red fruit and leather point toward which combination?",
            options: [
              "Pinot Noir aged in stainless steel",
              "Sangiovese fermented with whole bunches",
              "Tempranillo aged in American oak",
              "Grenache aged in concrete vessels",
            ],
            correctIndex: 2,
            explanation:
              "Coconut and dill are American oak markers rather than French, and the traditional Rioja style pairs that oak with Tempranillo, which is why the combination is so recognisable.",
            sourceLessonSlug: "somm-noble-reds",
          },
          {
            prompt: "What is the practical reason the course teaches around twenty grape varieties rather than hundreds?",
            options: [
              "Twenty varieties account for all legally permitted plantings worldwide",
              "Twenty is the maximum number a human palate can distinguish",
              "The remaining varieties are all crosses of those twenty",
              "They cover most shelves and set the reference points everything else is judged against",
            ],
            correctIndex: 3,
            explanation:
              "More than a thousand varieties are in commercial use. The twenty are chosen as reference points, not as a complete map, so an unfamiliar grape can be placed by comparison.",
            sourceLessonSlug: "somm-why-variety-matters",
          },
          {
            prompt: "Which structural pairing is characteristic of Grenache?",
            options: [
              "High alcohol with soft tannin",
              "Low alcohol with very high tannin",
              "High acid with no perceptible fruit",
              "Very high tannin with very pale colour",
            ],
            correctIndex: 0,
            explanation:
              "Grenache accumulates sugar readily, producing high alcohol, while carrying relatively little tannin. Very high tannin with a pale colour is the Nebbiolo signature instead.",
            sourceLessonSlug: "somm-noble-reds",
          },
          {
            prompt: "Why does the course tell you to read the grape tables by column rather than by row?",
            options: [
              "The columns list the regions where each grape is legally permitted",
              "The columns are structural axes you can rank, which is the transferable skill",
              "The rows are arranged alphabetically and carry no meaning",
              "The columns are ordered by global planted area",
            ],
            correctIndex: 1,
            explanation:
              "Rows are trivia to memorise and forget. Ranking several grapes on tannin, then on acid, and noticing the two rankings differ is what actually transfers to a glass you have never seen.",
            sourceLessonSlug: "somm-noble-reds",
          },
        ],
      },
    },

    // ══════════════ MODULE 4 · PLACE ══════════════
    {
      slug: "somm-climate-in-the-glass",
      title: "16 · Climate, and the four things that move together",
      section: "Module 4 · Place",
      recallContent: [
        {
          prompt: "Which grape is the reference for neutrality, and why does that make it the world's most planted white?",
          answer:
            "Chardonnay. It contributes little aroma of its own, so it takes oak, lees contact, malolactic conversion and site expression more willingly than anything else, which makes it a blank cheque for a winemaker.",
        },
      ],
      body: `Climate is the single most legible thing in a glass, more legible than the grape, because it moves four things at once and in a predictable direction.

**The package.** As a growing season gets warmer, grapes accumulate more sugar and lose acid. That is the entire mechanism, and everything else follows from it.

| As the climate gets warmer | What happens in the glass |
| --- | --- |
| More sugar at harvest | Higher alcohol, and fuller body |
| Acid falls | Softer, rounder, less refreshing |
| Fruit ripens further | Fresh fruit becomes ripe, then cooked, then dried |
| Tannins ripen too | Grippy and green becomes rounder and sweeter feeling |

So when you find high acid, low alcohol and fresh or underripe fruit, you are looking at a cool climate or an early pick. When you find low acid, high alcohol and cooked or dried fruit, you are looking at a warm one. Two of the four is a hypothesis. Four of the four is a call.

**Cool, moderate, warm.** These are relative terms about the GROWING SEASON, not about a country. Germany is a cool climate. The Barossa is a warm one. And both exist inside larger countries with regions of every kind, which is why "an Australian wine" tells you nothing.

**Three climate types worth naming.**

- **Maritime.** Ocean moderated: mild, with rainfall through the year and little difference between summer and winter. Bordeaux is the reference. Vintage variation is high because rain arrives at inconvenient times.
- **Continental.** Inland: hot summers, cold winters, a big swing between them. Burgundy is the reference. Frost and hail are real annual risks, which is part of why the wines cost what they cost.
- **Mediterranean.** Warm and dry through the growing season with the rain arriving in winter. The Southern Rhone, much of California, much of Spain. Vintage variation is lower, which is a commercial advantage and a stylistic ceiling.

**Diurnal range, the factor that explains the exceptions.** Some very warm regions produce wines with startling acid, which the simple model above cannot explain. The answer is usually a big day to night temperature swing, common at altitude and near cold ocean currents. Warm days ripen the fruit, cold nights preserve the acid. Mendoza at altitude and parts of coastal California work exactly this way, and it is why "warm region" and "flabby wine" are not synonyms.

**Altitude and aspect.** Higher is cooler, roughly. A slope facing the sun ripens more than a flat field beside it, which is why so many famous vineyards are on hillsides and why Old World appellation boundaries so often follow contours rather than roads.

${flightCard(FLIGHT_4)}

:::reveal A wine has high acid, 14.5% alcohol and fully ripe fruit. The simple warm-cool model says that combination should not happen. What explains it? ||| A large diurnal range, most often from altitude or from a cold ocean influence. Warm days push sugar accumulation, so alcohol is high and fruit is ripe, while cold nights slow the loss of acid. High altitude Mendoza and coastal California sites work this way, which is why a warm region does not automatically mean a flabby wine.

## Sources
- Jones, G. V., White, M. A., Cooper, O. R., & Storchmann, K. (2005). Climate change and global wine quality. *Climatic Change, 73*(3), 319-343. https://doi.org/10.1007/s10584-005-4704-2
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.`,
    },
    {
      slug: "somm-terroir-honestly",
      title: "17 · Terroir, stated honestly",
      section: "Module 4 · Place",
      body: `Episode 9 gave you terroir as an idea and a piece of history. This lesson gives it to you as a working tool, which means separating what is well evidenced from what is marketing.

**The honest definition.** Terroir is the complete natural environment of a vineyard site: climate, soil, topography, and the way they interact, plus, in most French usage, the human tradition of working that site. It is a real and useful concept. Blind tastings have repeatedly shown that experienced tasters can distinguish wines from neighbouring sites made the same way, which is the claim that matters.

**What is well evidenced about soil.** Soil affects wine mainly through PHYSICS, not chemistry:

- **Drainage and water holding.** A vine under mild water stress puts less energy into leaves and more into fruit, and produces smaller, more concentrated berries. This is the biggest and best documented soil effect.
- **Heat retention and reflection.** Stony soils store daytime heat and release it at night, and pale soils reflect light up into the canopy. Both push ripening.
- **Root depth.** Deep, poor soils force roots down toward more stable water, which buffers a vine against drought years.

**What is not evidenced: rocks tasted directly.** The claim that a mineral flavour travels from the rock, through the vine, into the glass does not survive contact with plant physiology. Vines take up mineral NUTRIENTS as dissolved ions in quantities far below sensory thresholds, and those ions do not carry the aromas people describe. The geologist Alex Maltman has laid this out carefully for wine audiences (Maltman, 2013). The perception of "minerality" is real, tasters agree about it more often than chance, and it appears to come from other things: acidity, low pH, sulfur compounds, reduction, low fruit intensity. So use the word if it helps you, and know that it is describing a sensation, not a mechanism.

**Why the distinction matters commercially.** Terroir talk sells wine. A producer describing the limestone under their vineyard may be pointing at a genuine drainage and heat effect, or may be pointing at a story. You are allowed to enjoy the story. You should not pay a premium for the geology claim itself.

**What to do with all this as a taster.** Do not try to taste soil. Taste the things soil influences: concentration, ripeness at a given alcohol level, acid retention, and how the wine holds together at the finish. Then, when a producer tells you about their site, you have your own evidence to compare their story against.

:::reveal A producer says their wine tastes of the limestone in the vineyard. What part of that claim is defensible and what part is not, and what would you taste for? ||| The defensible part is that limestone influences drainage, water holding and heat, which affects vine stress, berry size and concentration, so the site genuinely shapes the wine. The indefensible part is the direct route: minerals are taken up as dissolved ions far below sensory thresholds and do not carry those aromas into the glass. Taste for concentration, acid retention and how the finish holds, which are the real downstream effects.

## Sources
- Maltman, A. (2013). Minerality in wine: A geological perspective. *Journal of Wine Research, 24*(3), 169-181. https://doi.org/10.1080/09571264.2013.793176
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- van Leeuwen, C., & Seguin, G. (2006). The concept of terroir in viticulture. *Journal of Wine Research, 17*(1), 1-10. https://doi.org/10.1080/09571260600633135`,
    },
    {
      slug: "somm-old-and-new-world",
      title: "18 · Old World and New World, and why the shorthand is leaking",
      section: "Module 4 · Place",
      body: `The oldest shorthand in wine divides Europe and the Middle East (Old World) from everywhere wine went later (New World). It is genuinely useful for one thing and increasingly misleading for another.

**Where it still holds: the label.** This difference is legal and it is real.

| | Old World | New World |
| --- | --- | --- |
| Labelled by | PLACE. Chablis, Barolo, Rioja | GRAPE. Chardonnay, Malbec, Shiraz |
| Assumes you know | Which grapes that place is permitted to grow | Nothing, which is why it won the shelf |
| Rules cover | Grape, yield, alcohol, ageing, often technique | Mostly boundaries and percentages |

That is why a beginner finds a New World shelf easier and an Old World list harder: the Old World label answers "where," and expects you to already know what grows there. Module 6 turns that from an obstacle into an advantage, because a place name is a much denser piece of information than a grape name once you can read it.

**Where the shorthand leaks: the style.** The old generalisation ran that Old World wines are lighter, higher in acid, more savoury and earthier, while New World wines are riper, fruitier, higher in alcohol and more oaked. That was a fair description of a real difference decades ago. Today it is a bad predictor, for three reasons:

1. **Climate crosses the line.** Southern Italy and southern Spain are warm. Tasmania, Central Otago and the Sonoma Coast are cool. Climate predicts style better than continent does, and Module 4's first lesson gave you the tools to read it directly.
2. **Technique moved in both directions.** New World producers pick earlier and use less new oak than they did, and plenty of European producers make ripe, extracted, generously oaked wine.
3. **The people moved too.** Winemakers train and consult across the divide constantly.

**The one stylistic difference that has held up better than the rest** is a matter of intent rather than geography: whether a wine is made to express a specific site or to express a grape at a consistent house style. That distinction runs straight through both hemispheres.

**How to use it in practice.** Use Old World and New World as a LABELLING category, which is precise and useful. When you want to predict style, use climate, grape and winemaking instead. If you catch yourself saying "it tastes New World," translate: you probably mean ripe fruit, higher alcohol, evident oak. Say that instead, because it is falsifiable.

:::reveal Translate the sentence "this tastes very New World" into three falsifiable observations. ||| Something like: the fruit reads ripe or cooked rather than fresh, the alcohol is high (likely 14% or above), and the oak is evident rather than integrated. Each of those can be checked against the glass and the label, where the original sentence cannot, and all three occur regularly in European wine from warm regions.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Jones, G. V., White, M. A., Cooper, O. R., & Storchmann, K. (2005). Climate change and global wine quality. *Climatic Change, 73*(3), 319-343. https://doi.org/10.1007/s10584-005-4704-2`,
    },
    {
      slug: "somm-quiz-4",
      title: "19 · Knowledge check: place",
      section: "Module 4 · Place",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Which combination points most clearly to a cool climate or an early pick?",
            options: [
              "Low acid, high alcohol, cooked or dried fruit character",
              "High acid, low alcohol, fresh or underripe fruit",
              "High acid with high alcohol and raisined, dried fruit notes",
              "Low acid, low alcohol, and neutral fruit with no ripeness",
            ],
            correctIndex: 1,
            explanation:
              "Warmth raises sugar and lowers acid, so the cool package is the mirror image: acid retained, alcohol modest, fruit still fresh. Getting all four to agree is what turns a hypothesis into a call.",
            sourceLessonSlug: "somm-climate-in-the-glass",
          },
          {
            prompt: "A warm region produces wines with unexpectedly high acid. What most often explains it?",
            options: [
              "Warm region producers are required by law to acidify every wine they bottle",
              "The grapes are left hanging and picked only after the first hard frost",
              "A large diurnal range, from altitude or a cold ocean influence",
              "Maritime rainfall falling steadily throughout the whole growing season",
            ],
            correctIndex: 2,
            explanation:
              "Warm days ripen fruit while cold nights slow acid loss, which is why high altitude Mendoza and cool coastal California sites break the simple model. Frost harvesting is a sweet wine technique, not an acid strategy.",
            sourceLessonSlug: "somm-climate-in-the-glass",
          },
          {
            prompt: "What is the best evidenced way soil influences a wine?",
            options: [
              "Mineral compounds travel from rock into the vine and into the glass",
              "Soil bacteria produce the aroma compounds found in the finished wine",
              "Soil pH determines the wine's final acidity directly",
              "Drainage and water holding change vine stress, berry size and concentration",
            ],
            correctIndex: 3,
            explanation:
              "Soil works mainly through physics: water availability, heat retention and root depth. The direct mineral-to-glass route fails on plant physiology, since nutrients are taken up as ions far below sensory thresholds.",
            sourceLessonSlug: "somm-terroir-honestly",
          },
          {
            prompt: "What is the honest status of 'minerality' as a tasting term?",
            options: [
              "A real perception with causes other than dissolved rock, so usable but not a mechanism",
              "A meaningless term that trained tasters agree on no more often than chance would predict",
              "A direct sensory reading of the vineyard's underlying geology, rock by rock",
              "A legally defined descriptor whose use is restricted to certain appellations",
            ],
            correctIndex: 0,
            explanation:
              "Tasters agree about it more often than chance, so the perception is real, but it appears to arise from acidity, low pH, sulfur compounds and low fruit intensity rather than from rock passing into the vine.",
            sourceLessonSlug: "somm-terroir-honestly",
          },
          {
            prompt: "Which distinction between Old World and New World remains precise and useful?",
            options: [
              "Old World wines are always lower in alcohol than New World equivalents",
              "Old World labels state a place, New World labels state a grape",
              "Old World wines are always aged in oak barrels before they are released",
              "New World growing regions carry no legally defined boundaries at all",
            ],
            correctIndex: 1,
            explanation:
              "The labelling difference is legal and holds. The stylistic generalisations leak badly, because southern Europe is warm, Tasmania is cool, and technique has crossed in both directions. New World regions do have defined boundaries, such as AVAs.",
            sourceLessonSlug: "somm-old-and-new-world",
          },
          {
            prompt: "Bordeaux is the reference example for which climate type?",
            options: [
              "Continental, with hot summers and cold winters",
              "Mediterranean, with dry summers and winter rainfall",
              "Maritime, ocean moderated with rainfall through the year",
              "Alpine, with a very large diurnal range",
            ],
            correctIndex: 2,
            explanation:
              "Maritime climates are ocean moderated with year round rain, which is why Bordeaux has such pronounced vintage variation. Burgundy is the continental reference, and the Southern Rhone the Mediterranean one.",
            sourceLessonSlug: "somm-climate-in-the-glass",
          },
          {
            prompt: "Why does the course say 'an Australian wine' tells you nothing about style?",
            options: [
              "Australian labels are not permitted by law to state a region of origin",
              "Australia permits blending across the entire country without any disclosure",
              "Australian wine is exported only in bulk and blended at its destination",
              "Climate terms describe growing seasons, and one country holds regions of every kind",
            ],
            correctIndex: 3,
            explanation:
              "Cool, moderate and warm describe growing seasons, not countries. Tasmania and the Barossa sit in the same nation and produce wines with almost nothing in common.",
            sourceLessonSlug: "somm-climate-in-the-glass",
          },
          {
            prompt: "Why do Old World appellation boundaries so often follow contours rather than roads?",
            options: [
              "Because slope and aspect change ripening, so the boundary tracks the growing conditions",
              "Because the roads were all built long after the appellation boundaries were drawn",
              "Because contour lines are cheaper and easier to survey than property lines are",
              "Because European wine law forbids an appellation border from running straight",
            ],
            correctIndex: 0,
            explanation:
              "A slope facing the sun ripens differently from the flat land beside it, and altitude changes temperature, so the meaningful unit is the growing condition rather than the parcel of land.",
            sourceLessonSlug: "somm-climate-in-the-glass",
          },
          {
            prompt: "Which stylistic distinction does the course say has held up better than Old World versus New World?",
            options: [
              "Whether the wine in the bottle is a red, a white or a rose",
              "Whether the wine expresses a specific site or a consistent house style",
              "Whether the wine is bottled under natural cork or under a screwcap",
              "Whether the producer owns the vineyard or buys the fruit from growers",
            ],
            correctIndex: 1,
            explanation:
              "Site expression versus house consistency is a difference of intent, and it runs through both hemispheres, which is exactly why it survives when the geographic shorthand does not.",
            sourceLessonSlug: "somm-old-and-new-world",
          },
          {
            prompt: "What happens to tannins as a growing season gets warmer?",
            options: [
              "They disappear from the grape skins entirely before the fruit is picked",
              "They convert into residual sugar over the course of the fermentation",
              "They ripen, moving from grippy and green toward rounder and sweeter feeling",
              "They increase sharply in both bitterness and astringency as sugar rises",
            ],
            correctIndex: 2,
            explanation:
              "Tannin ripeness travels with the rest of the warm climate package, which is why a warm vintage red can carry a lot of tannin and still feel plush rather than severe.",
            sourceLessonSlug: "somm-climate-in-the-glass",
          },
        ],
      },
    },

    // ══════════════ MODULE 5 · PROCESS ══════════════
    {
      slug: "somm-grape-to-glass",
      title: "20 · From grape to glass, in the order it happens",
      section: "Module 5 · Process",
      recallContent: [
        {
          prompt: "State the four things that move together as a growing season gets warmer.",
          answer:
            "Sugar rises so alcohol and body rise, acid falls, fruit character moves from fresh toward ripe, cooked and dried, and tannins ripen from grippy and green toward rounder and sweeter feeling.",
        },
      ],
      body: `Every winemaking decision in the rest of this module is a variation on one process. Learn the spine first.

**Fermentation, the only step that is not optional.** Yeast, principally Saccharomyces cerevisiae, converts sugar into ethanol and carbon dioxide. When the sugar runs out, the wine is dry. When the winemaker stops fermentation early, by chilling, filtering or adding spirit, sugar remains and the wine is sweet. That single choice is where every sweetness level in wine comes from.

**The spine.**

1. **Grow and pick.** The most consequential decision is WHEN, because picking date sets sugar, acid and ripeness at once (Module 4).
2. **Sort and crush.** Some producers keep whole bunches, including stems, which adds tannin and a savoury, sometimes green character.
3. **Press, or not yet.** This is the single biggest fork in the road.
4. **Ferment.** Ambient yeast or a selected strain, warm or cool, in steel, oak, concrete or clay.
5. **Post-fermentation choices.** Malolactic conversion, lees contact, oak, blending, fining, filtration.
6. **Age and bottle.**

**The fork that makes a red a red.** It is not the grape. It is WHEN you press.

- **White wine:** press first, ferment the juice alone. Little or no skin contact, so little colour and almost no tannin.
- **Red wine:** ferment ON the skins, then press. Colour, tannin and much of the flavour come out of the skins during that maceration.
- **Rose:** brief skin contact, then press. Hours, not weeks.
- **Skin contact or orange wine:** a white grape treated like a red, fermented on its skins for days to months. The result has tannin and grip, and it usually looks amber.

Which is why you can make a white wine from a red grape: press immediately and keep the juice off the skins. Most Champagne does exactly that with Pinot Noir and Meunier.

**Two decisions that fool beginners into thinking they are tasting a grape.**

- **Malolactic conversion.** Bacteria, usually Oenococcus oeni, convert sharp malic acid into softer lactic acid, lowering acidity and often producing diacetyl, which smells of butter. It happens in almost all red wine and is a deliberate choice in white wine. The buttery Chardonnay style is this decision, not the grape.
- **Time on the lees.** Leaving the wine on the dead yeast cells adds texture and, over time, bready and biscuity aromas as those cells break down. This is the backbone of traditional method sparkling wine (Lesson 23).

**Sulfites, since the label mentions them.** Sulfur dioxide is an antioxidant and antimicrobial used in winemaking for centuries, and yeast also produce a little on their own, so no wine is entirely sulfite free. In the United States a wine carries the words "Contains sulfites" when the level reaches ten parts per million or more (27 CFR 4.32(e)). EU rules cap the total permitted level, with lower caps for red than for white and rose, and higher allowances for sweet wines (Commission Delegated Regulation (EU) 2019/934, Annex I, Part B). Sulfites cause genuine reactions in a small number of people, particularly some asthmatics. They are not the cause of ordinary red wine headaches, and no good evidence says they are.

:::reveal Champagne is often made largely from Pinot Noir, a black grape, yet it is pale. Explain how, using the fork in the road from this lesson. ||| Colour lives in the skins, and the fork is when you press. Pressing black grapes immediately and fermenting only the juice keeps the wine off the skins, so almost no colour is extracted. Red wine is red because it ferments ON the skins before pressing, which is a decision about sequence rather than about the grape.

## Sources
- Commission Delegated Regulation (EU) 2019/934 of 12 March 2019 supplementing Regulation (EU) No 1308/2013 as regards wine-growing areas, oenological practices and the applicable restrictions. *Official Journal of the European Union, L 149*, 1-52.
- Alcohol and Tobacco Tax and Trade Bureau. (n.d.). *Labeling and advertising of wine* (27 C.F.R. Part 4). https://www.ecfr.gov/current/title-27/chapter-I/subchapter-A/part-4
- Waterhouse, A. L., Sacks, G. L., & Jeffery, D. W. (2016). *Understanding wine chemistry*. Wiley.`,
    },
    {
      slug: "somm-oak-and-lees",
      title: "21 · Oak, lees, and the taste of a decision",
      section: "Module 5 · Process",
      body: `Oak is the loudest thing a winemaker can add, and learning to hear it separately from the wine underneath is one of the fastest upgrades available to a taster.

**What oak actually does.** Three separate jobs, and people conflate them constantly.

1. **It adds flavour compounds.** Vanillin gives vanilla. Lactones give coconut. Toasting the barrel over fire produces smoke, toast, coffee and caramel notes. Wood also contributes its own tannin, which is why oaked white wine has a grip that unoaked white wine does not.
2. **It allows slow oxygen exchange.** Barrels breathe slightly, which softens tannin and stabilises colour over time. This is a texture job, not a flavour job, and it is why a producer might choose old, neutral barrels that add no flavour at all.
3. **It costs a fortune.** A new French oak barrel is one of the most expensive pieces of equipment in a small winery, which is why heavy new oak is concentrated in expensive wine and in wines that want to taste expensive.

**The variables that change the signature.**

| Variable | The effect you can taste |
| --- | --- |
| **French versus American oak** | French tends toward subtler spice and firmer tannin. American tends toward louder vanilla, coconut and dill |
| **New versus used** | A first-use barrel gives strong flavour. By its third or fourth wine, a barrel is mostly a breathing vessel |
| **Toast level** | Light toast leans woody and tannic. Heavy toast leans smoky, coffee, caramel |
| **Barrel size** | A standard Bordeaux barrique holds 225 litres. Bigger vessels mean less wood surface per litre of wine, so less oak character |
| **Chips and staves** | Cheaper alternatives that add flavour without the oxygen exchange or the price. Legal in many regions, and usually detectable as a flat, sawdust-like vanilla |

**How to tell oak from fruit.** Oak markers are a short list and they do not smell like fruit: vanilla, coconut, dill, clove, baking spice, smoke, toast, cedar, coffee, caramel, chocolate. If your note contains three of those and one fruit, you are describing a barrel, not a vineyard.

**The honest question.** Oak is not a fault and not a virtue. Ask instead: is there enough wine underneath to carry it? A concentrated wine absorbs new oak and integrates it over years. A thin wine wearing new oak tastes like a plank, and the giveaway is that the oak arrives before the fruit and stays after it.

**Lees, the quieter cousin.** After fermentation the dead yeast cells settle out. Leaving the wine on them, and sometimes stirring them, adds body and a creamy texture. Given long enough, the cells break down and release compounds that read as bread, biscuit and toasted nuts. That is the aroma family behind traditional method sparkling wine, and it is a useful one to learn early because it is unmistakable once you have met it.

${flightCard(FLIGHT_5)}

:::reveal A white wine has a noticeable drying grip on the gums. It is not a skin contact wine. Where else could tannin have come from? ||| From oak. Wood contributes its own tannin along with its flavour compounds, so a barrel-aged white can have a real textural grip that an unoaked white never has. That is one of the more surprising things about the oak flight, because most people file tannin under red wine and skins only.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Waterhouse, A. L., Sacks, G. L., & Jeffery, D. W. (2016). *Understanding wine chemistry*. Wiley.`,
    },
    {
      slug: "somm-skin-contact-and-carbonic",
      title: "22 · Skin contact, rose, and carbonic maceration",
      section: "Module 5 · Process",
      body: `Three techniques that all play with the same variable, contact between juice and skins, and produce results a beginner routinely mistakes for grape character.

**Rose, three ways.** Colour is not the point. Method is.

- **Direct press.** Black grapes pressed quickly, taking only the faint colour that comes out immediately. The pale, delicate Provencal style is made this way, and it is a deliberate style rather than a weak version of something.
- **Saignee**, meaning bleeding. Some juice is drawn off a red fermentation early. The juice becomes rose, and the remaining red wine gets a higher ratio of skins to juice and therefore more concentration. It is worth knowing that a saignee rose is sometimes a by-product of making a more concentrated red.
- **Blending.** Mixing finished red and white wine is prohibited for most European still rose, but it is precisely how most rose Champagne is made, which is a real and specific exception rather than a loophole.

**Skin contact whites, or orange wine.** A white grape fermented on its skins for days, weeks or months. The wine picks up colour (amber to orange), tannin, and a distinctive nutty, tea-like, sometimes savoury character. It is not a fault and it is not new: it is the traditional Georgian qvevri method Episode 9 covered, which is a rare case where a modern trend is genuinely ancient.

Practically, this matters at a table because an orange wine behaves like a light red. Serve it cool but not cold, and pair it like a red.

**Carbonic maceration.** Whole, uncrushed berries are sealed in a vessel filled with carbon dioxide. Without oxygen, the berries begin fermenting internally with their own enzymes before yeast take over properly. The results are consistent and easy to recognise:

- Bright, almost translucent colour and low tannin, because there is little extraction.
- Distinctive aromas: banana, kirsch, bubblegum, sometimes cinnamon.
- Wines meant to be drunk young and often served slightly chilled.

Beaujolais is the classic home. Many producers use a partial version, so the marker is often a hint rather than a shout. The reason it is worth knowing in a course about deduction is that it is a METHOD imitating a variety: those aromas belong to the technique, and if you file them under Gamay you will misread the next carbonic Syrah you meet.

**Whole bunch fermentation**, a related idea, keeps the stems in a normal red fermentation. It adds stem tannin and a savoury, sometimes green or floral lift. It is common in Syrah and Pinot Noir, and when overdone it reads as stalky and bitter.

:::reveal Why is a pale Provencal rose not simply a weakly coloured red wine, and what does its colour actually tell you? ||| Because pale colour is the result of a chosen method, direct pressing, which takes only the colour that comes off in the first moments of contact. Colour tells you about SKIN CONTACT TIME rather than about quality, ripeness or concentration, so a deeper rose means longer contact or a different method such as saignee, not a better or worse wine.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Waterhouse, A. L., Sacks, G. L., & Jeffery, D. W. (2016). *Understanding wine chemistry*. Wiley.`,
    },
    {
      slug: "somm-sparkling",
      title: "23 · Bubbles: the method is the flavour",
      section: "Module 5 · Process",
      body: `All sparkling wine works the same way: capture carbon dioxide from a second fermentation instead of letting it escape. WHERE that second fermentation happens changes the wine more than the grape does.

| Method | Where the second fermentation happens | What it tastes like | Typical examples |
| --- | --- | --- | --- |
| **Traditional method** | In the bottle you buy, then aged on the lees before disgorging | Bread, brioche, biscuit, toasted nuts over the fruit | Champagne, Cremant, Cava, English sparkling, many others |
| **Tank (Charmat) method** | In a large pressurised tank, then filtered and bottled | Primary fruit and flowers, fresh and aromatic | Prosecco, most Lambrusco |
| **Ancestral method** | The original fermentation, finished in bottle, never disgorged | Cloudy, often lightly sweet or slightly funky, lower pressure | Petillant naturel, some Bugey |
| **Transfer method** | In bottle, then emptied into a tank under pressure to filter | Between the first two, and often used for large formats | Various |
| **Carbonation** | Injected, no second fermentation | Coarse, short lived bubbles | Inexpensive commodity sparkling |

**Why the traditional method tastes like bread.** After the second fermentation the dead yeast stay in the bottle, and over months and years they break down. That is autolysis, and it is where brioche, biscuit and toasted nut character comes from. Time on lees is therefore the main quality lever, and it is also why traditional method wines cost more: the money is in the years of storage and the handling.

Champagne's own appellation rules set minimum ageing periods, longer for vintage wines than for non-vintage, which is the legal expression of exactly that principle (Comite Champagne, n.d.). Crémant and Cava have their own minima under their own rules, generally shorter than Champagne's.

**Dosage: the sweetness added at the end.** After disgorging, a small amount of liquid, usually wine with some sugar, tops the bottle up. That is dosage, and it sets the final sweetness. EU law defines the terms, and this table is the single most useful thing on a sparkling label:

| Term | Sugar, grams per litre |
| --- | --- |
| Brut nature (also zero dosage) | Less than 3, with no sugar added |
| Extra brut | 0 to 6 |
| Brut | Less than 12 |
| Extra dry | 12 to 17 |
| Dry (sec) | 17 to 32 |
| Demi-sec | 32 to 50 |
| Doux | 50 or more |

Two things people get wrong here, constantly. **"Extra dry" is sweeter than "brut,"** which is a genuine historical accident of the terminology and it catches everyone. And **most Prosecco sold as Extra Dry carries noticeable sugar**, which is a large part of why people think they dislike dry sparkling wine when they have never tried one.

**Serving, briefly, because bubbles punish carelessness.** Cold, around 6 to 8 degrees Celsius. Open by holding the cork and turning the BOTTLE, with a thumb over the cork the whole time. A flute looks elegant and hides aroma, so use a normal white wine glass if you actually want to smell the wine. Module 9 has the rest.

${flightCard(FLIGHT_6)}

:::reveal Two sparkling wines, same grape, same region. One smells of pear and white flowers, the other of brioche and toasted almond. What differs, and which one probably cost more to make? ||| The method. Pear and flowers is primary fruit preserved by a tank fermentation, while brioche and toasted almond is autolytic character from long ageing on the lees after a second fermentation in the bottle. The traditional method wine almost certainly cost more, because the money in that method is the years of bottle storage and the handling, not the grapes.

## Sources
- Commission Delegated Regulation (EU) 2019/33 of 17 October 2018 supplementing Regulation (EU) No 1308/2013 as regards applications for protection of designations of origin, geographical indications and traditional terms, labelling and presentation. *Official Journal of the European Union, L 9*, 2-45.
- Comite Champagne. (n.d.). *The Champagne appellation and its rules*. https://www.champagne.fr
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.`,
    },
    {
      slug: "somm-sweet-and-fortified",
      title: "24 · Sweet and fortified: five ways to keep the sugar",
      section: "Module 5 · Process",
      body: `Sweetness in wine is always the same story told five ways: get more sugar into the grape than the yeast can finish, or stop the yeast before they do.

**1. Noble rot.** The fungus Botrytis cinerea, under the right conditions of humid mornings and dry afternoons, punctures ripe grapes and dehydrates them. Sugar and acid both concentrate, and the fungus adds its own honeyed, marmalade, saffron-like character. This is Sauternes, German and Austrian Beerenauslese and Trockenbeerenauslese, and Tokaji Aszu. The same fungus in the wrong conditions is grey rot, which ruins fruit, so the whole category depends on a knife-edge of weather. That risk is most of the price.

**2. Freezing.** Grapes left on the vine until they freeze are pressed while still frozen, so water stays behind as ice and concentrated juice comes out. That is Eiswein or icewine, made in Germany, Austria and famously Canada. It requires a hard, sustained freeze at the right moment.

**3. Drying.** Grapes are dried on mats or hung after picking, losing water and concentrating sugar. Italy calls the technique passito or appassimento, behind Vin Santo, Recioto, and, in a dry version fermented all the way out, Amarone. Amarone is the useful example: dried grapes, but fermented to dryness, so it is powerfully concentrated and high in alcohol without being sweet.

**4. Stopping fermentation.** Chill, filter or sulfur the yeast into submission while sugar remains. This is how most inexpensive off-dry wine is made, and also how many fine German Rieslings retain sugar.

**5. Fortifying.** Add neutral grape spirit. Yeast cannot survive high alcohol, so fermentation halts. WHEN you add the spirit decides everything:

| Wine | Spirit added | Result |
| --- | --- | --- |
| **Port** | Partway through fermentation | Sugar remains, so Port is sweet and strong |
| **Sherry** | After fermentation finishes | The base wine is dry, so most Sherry is DRY, whatever the shelf implies |
| **Madeira** | Varies by style | Then deliberately heated, which is the signature |

**Sherry deserves the correction.** Most Sherry is bone dry: Fino and Manzanilla age under a living film of yeast called flor, which protects the wine from oxygen and gives a saline, bready, almost bruised-apple character. Amontillado and Oloroso age with oxygen and become nutty and deep. Cream Sherry, the sweet style most people met first, is sweetened afterwards. The solera system, fractionally blending across many barrels of different ages, means a bottle carries an average of many years rather than one vintage.

**Madeira deserves the odd fact.** It is deliberately heated during ageing, historically because barrels crossing the tropics as ballast improved with the voyage. The result is a wine that is effectively already cooked and oxidised, which is why an opened bottle survives months where a table wine dies in days.

:::reveal Port and Sherry are both fortified, yet Port is sweet and most Sherry is dry. Explain the difference using one variable. ||| Timing. Port is fortified PARTWAY through fermentation, so the added spirit kills the yeast while sugar is still unfermented and that sugar stays in the wine. Sherry is fortified AFTER fermentation has finished, by which point the yeast have consumed the sugar, so the base wine is dry. The sweet Sherry styles on a shelf are sweetened later rather than born sweet.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Jackson, R. S. (2020). *Wine science: Principles and applications* (5th ed.). Academic Press.`,
    },
    {
      slug: "somm-quiz-5",
      title: "25 · Knowledge check: process",
      section: "Module 5 · Process",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What single decision makes a wine red rather than white?",
            options: [
              "Fermenting on the skins before pressing, rather than pressing first",
              "Using a black grape variety rather than a white one",
              "Ageing in oak barrels rather than stainless steel",
              "Allowing malolactic conversion to complete",
            ],
            correctIndex: 0,
            explanation:
              "Colour and tannin come out of the skins during maceration, so the sequence decides the wine. This is exactly why most Champagne is pale despite being made largely from black grapes.",
            sourceLessonSlug: "somm-grape-to-glass",
          },
          {
            prompt: "A Chardonnay smells strongly of butter. What is the most likely cause?",
            options: [
              "The grape variety, which naturally produces buttery aromas",
              "Extended skin contact before pressing",
              "Malolactic conversion, which can produce diacetyl",
              "Fortification with neutral grape spirit",
            ],
            correctIndex: 2,
            explanation:
              "Bacteria convert sharp malic acid into softer lactic acid and often produce diacetyl, which smells of butter. It is a winemaking choice in white wine, not a grape trait, which is why the buttery style is a decision rather than a variety.",
            sourceLessonSlug: "somm-grape-to-glass",
          },
          {
            prompt: "Which sparkling wine term describes the SWEETEST of these categories?",
            options: [
              "Brut",
              "Extra brut",
              "Extra dry",
              "Brut nature",
            ],
            correctIndex: 2,
            explanation:
              "Extra dry sits at 12 to 17 grams of sugar per litre, above brut's limit of 12, which is a historical accident of terminology that catches nearly everyone. Brut nature is the driest of the group.",
            sourceLessonSlug: "somm-sparkling",
          },
          {
            prompt: "Where does the bread and brioche character of traditional method sparkling wine come from?",
            options: [
              "Oak barrels used for the first fermentation",
              "Autolysis, as dead yeast cells break down during bottle ageing",
              "A yeast strain selected specifically for bread aromas",
              "Dosage added at the moment of disgorging",
            ],
            correctIndex: 1,
            explanation:
              "Time on the lees is the main quality lever in traditional method wine, and it is why those wines cost more: the expense is years of storage and handling. Dosage sets sweetness, not autolytic character.",
            sourceLessonSlug: "somm-sparkling",
          },
          {
            prompt: "Port is sweet and most Sherry is dry. What explains the difference?",
            options: [
              "Port uses sweeter grape varieties than Sherry does",
              "Sherry is filtered to remove sugar before bottling",
              "Port is aged in a solera system and Sherry is not",
              "Port is fortified during fermentation, Sherry after it finishes",
            ],
            correctIndex: 3,
            explanation:
              "Adding spirit partway through fermentation kills the yeast while sugar remains, so Port keeps that sugar. Sherry's base wine has already fermented dry. The solera system belongs to Sherry rather than to Port, so that claim is backwards.",
            sourceLessonSlug: "somm-sweet-and-fortified",
          },
          {
            prompt: "Which oak markers point specifically toward American oak rather than French?",
            options: [
              "Coconut and dill",
              "Cedar and graphite",
              "Wet stone and citrus peel",
              "Forest floor and mushroom",
            ],
            correctIndex: 0,
            explanation:
              "Coconut and dill are the classic American oak signature, and the traditional Rioja style is where most tasters first learn them. Forest floor and mushroom are tertiary age markers rather than oak markers.",
            sourceLessonSlug: "somm-oak-and-lees",
          },
          {
            prompt: "Amarone is made from dried grapes, yet it is not a sweet wine. Why?",
            options: [
              "The drying process removes the sugar along with the water",
              "It is fortified after fermentation, as Sherry is",
              "The concentrated juice is fermented all the way to dryness",
              "Acid levels are so high that sweetness cannot be perceived",
            ],
            correctIndex: 2,
            explanation:
              "Drying concentrates sugar, and Amarone ferments that sugar out completely, which produces a powerfully concentrated wine high in alcohol rather than a sweet one. Recioto is the sweet wine made from the same dried fruit.",
            sourceLessonSlug: "somm-sweet-and-fortified",
          },
          {
            prompt: "What is the most reliable way to tell oak character apart from fruit character?",
            options: [
              "Oak character is always more intense than fruit character",
              "Oak markers are a short non-fruit list: vanilla, coconut, clove, toast, smoke, cedar",
              "Oak character appears only in red wine",
              "Oak character disappears entirely once a wine is decanted",
            ],
            correctIndex: 1,
            explanation:
              "If three of those non-fruit descriptors and one fruit are in your note, you are describing a barrel rather than a vineyard. Oak also appears in white wine, where it adds a grip most people do not expect.",
            sourceLessonSlug: "somm-oak-and-lees",
          },
          {
            prompt: "What does carbonic maceration reliably produce, and why does it matter for deduction?",
            options: [
              "High tannin and deep colour, which can be mistaken for oak ageing",
              "Banana and kirsch aromas, which can be mistaken for a grape trait",
              "Petrol aromas, which can be mistaken for bottle age",
              "Salinity, which can be mistaken for a coastal vineyard",
            ],
            correctIndex: 1,
            explanation:
              "Isoamyl acetate from whole berry fermentation gives banana, kirsch and bubblegum with low tannin. Filing those aromas under Gamay leads a taster straight into misreading the next carbonic Syrah.",
            sourceLessonSlug: "somm-skin-contact-and-carbonic",
          },
          {
            prompt: "What does the pale colour of a Provencal style rose tell you?",
            options: [
              "How long the juice spent in contact with the skins",
              "That the wine is lower in alcohol than a darker rose",
              "That the grapes were harvested before full ripeness",
              "That the wine was blended from red and white wine",
            ],
            correctIndex: 0,
            explanation:
              "Direct pressing takes only the colour that comes off in the first moments, so depth of colour reports skin contact time and method rather than quality, ripeness or strength.",
            sourceLessonSlug: "somm-skin-contact-and-carbonic",
          },
          {
            prompt: "What is the honest position on sulfites in wine?",
            options: [
              "No wine contains them unless they are deliberately added",
              "They are the established cause of red wine headaches",
              "They cause real reactions in a small group, and are declared in the US at ten parts per million or more",
              "They are banned outright in European winemaking",
            ],
            correctIndex: 2,
            explanation:
              "Yeast produce some sulfites naturally, so no wine is entirely free of them. US labelling requires the declaration at ten parts per million, EU rules cap the totals, and the red wine headache claim is not supported by good evidence.",
            sourceLessonSlug: "somm-grape-to-glass",
          },
          {
            prompt: "A skin contact white wine, sometimes called orange wine, behaves at the table most like what?",
            options: [
              "A light red, served cool but not cold and paired like a red",
              "A sparkling wine, served very cold in a flute",
              "A fortified wine, served in small measures after a meal",
              "A dessert wine, served with sweet food only",
            ],
            correctIndex: 0,
            explanation:
              "Fermenting a white grape on its skins gives real tannin and grip, so the wine has a red's structure. It is also the ancient Georgian qvevri method rather than a modern invention.",
            sourceLessonSlug: "somm-skin-contact-and-carbonic",
          },
        ],
      },
    },

    // ══════════════ MODULE 6 · LAW AND LABELS ══════════════
    {
      slug: "somm-why-appellations-exist",
      title: "26 · Why appellations exist, and what they do and do not promise",
      section: "Module 6 · Law and labels",
      recallContent: [
        {
          prompt: "Name the one variable that decides whether a fortified wine ends up sweet or dry.",
          answer:
            "When the spirit is added. Fortifying partway through fermentation kills the yeast while sugar remains, which is Port. Fortifying after fermentation has finished leaves a dry wine, which is why most Sherry is dry.",
        },
      ],
      body: `An appellation is a legal answer to fraud. Before them, a merchant could put a famous name on any barrel, and did, at enormous scale. The modern European system grew directly out of that, and the fraud problem is worth holding onto, because it explains what appellation rules actually guarantee and what they do not.

**What an appellation legally does.** It draws a boundary and attaches rules to the name. Those rules typically cover which grapes may be planted, maximum yield per hectare, minimum alcohol, and sometimes ageing time or technique. In EU law these sit in two tiers (Regulation (EU) No 1308/2013):

- **PDO**, protected designation of origin. Tighter boundaries, stricter rules, all grapes from the named place. French AOP/AOC, Italian DOC and DOCG, Spanish DO and DOCa, German Qualitatswein and Pradikatswein all sit here.
- **PGI**, protected geographical indication. Looser: bigger areas, more permitted grapes, higher yields. French IGP, Italian IGT, Spanish Vino de la Tierra.
- Below both sits generic wine with no geographic claim, such as Vin de France.

The United States runs a lighter version: the American Viticultural Area, a boundary defined and administered by the TTB under 27 CFR Part 9. An AVA delimits a place and nothing else. It does not tell a grower what to plant or how much to crop.

**What an appellation genuinely promises**

- The wine came from that place, within the stated tolerance.
- It used permitted grapes and met the stated production limits.
- For some appellations, that it was aged at least a stated minimum.

**What an appellation does NOT promise**

- **That the wine is good.** A poor producer inside a great appellation makes poor wine with a great name on it, and charges more for it than a good producer just outside.
- **That the rules are neutral.** Appellation boundaries are political documents, negotiated by people with land at stake, and they get redrawn.
- **That the hierarchy is a quality ranking.** Some of the world's most sought-after wine is deliberately declassified to a lower tier, because the producer wanted to work outside the rules.

**Why you should still learn them.** Because a place name is a much denser piece of information than a grape name. "Chablis" tells you the grape, the climate, the usual style, the likely acid, the typical oak treatment and a price expectation, all in one word. That density is the payoff for the two lessons that follow, and it is why the Old World shelf gets EASIER than the New World shelf once you can read it.

:::reveal A famous producer sells a wine labelled only as a generic regional or national wine, well below the appellation tier, at a high price. What are two legitimate reasons for that? ||| Either the producer used grapes or techniques the appellation rules do not permit (an unpermitted variety, a different vessel, a yield above the maximum), or the wine was rejected or not submitted for the tasting panel that grants the appellation. Neither is evidence of low quality: declassifying deliberately is a well established way of working outside rules the producer disagrees with.

## Sources
- Regulation (EU) No 1308/2013 of the European Parliament and of the Council of 17 December 2013 establishing a common organisation of the markets in agricultural products. *Official Journal of the European Union, L 347*, 671-854.
- Alcohol and Tobacco Tax and Trade Bureau. (n.d.). *American viticultural areas* (27 C.F.R. Part 9). https://www.ecfr.gov/current/title-27/chapter-I/subchapter-A/part-9
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.`,
    },
    {
      slug: "somm-reading-old-world-labels",
      title: "27 · Reading an Old World label",
      section: "Module 6 · Law and labels",
      body: `Four systems cover most of what you will meet. Each has a single organising idea, and once you have the idea the vocabulary follows.

**France: the smaller the named place, the tighter the rules.** That is the whole system. Burgundy shows it most clearly, as a ladder:

| Tier | What the label says | What it means |
| --- | --- | --- |
| Regional | Bourgogne | Grapes from across the region |
| Village | Gevrey-Chambertin, Meursault | Grapes from one commune |
| Premier Cru | The village, then the vineyard, then 1er Cru | A classified vineyard within that commune |
| Grand Cru | The vineyard name, often alone | The top classified vineyards, and the village name may not appear at all |

That last row is the trap: the most expensive bottles carry the LEAST familiar words, because a Grand Cru does not need to name its village. Bordeaux organises differently, by chateau and by the 1855 classification of the Medoc and Sauternes into five growths, a ranking based on the prices those estates commanded at the time. It has been amended exactly once in over a century and a half, when Mouton Rothschild was promoted to first growth in 1973. Saint-Emilion runs its own classification, revised periodically and repeatedly contested in court. Pomerol, home to some of the most expensive wine in the world, has no classification at all, which is the cleanest possible demonstration that a hierarchy is not a quality measure.

**Italy: the tier is a word, and the rest is geography.** DOCG sits above DOC, both above IGT, all above generic Vino. Two words worth more than the tier:

- **Classico** means the historic heartland of a zone, before the boundary was expanded for commercial reasons. Chianti Classico is a different and generally more serious thing than Chianti.
- **Riserva** means longer ageing before release, with the exact minimum set by each appellation rather than nationally.

**Spain: the tier plus the age.** DOCa (or DOQ) sits above DO. But the more useful information is the ageing term, historically Rioja's system and now used widely: Joven or Generico, then Crianza, Reserva, Gran Reserva, in rising order of minimum total ageing and minimum time in barrel. For red Rioja the ladder runs roughly two, three and five years total, with one, one and two of those in oak, and the exact requirements are set and periodically revised by the Consejo Regulador, so check the current rules rather than trusting a decade-old summary. The practical point stands regardless: on a Spanish label, the age term tells you more about the style in the glass than the appellation does.

**Germany: sweetness is not what the ladder measures.** This is the most misunderstood label in wine. The Pradikat ladder, Kabinett, Spatlese, Auslese, Beerenauslese, Eiswein, Trockenbeerenauslese, ranks the SUGAR IN THE GRAPES AT HARVEST, not the sugar in the finished wine. A Spatlese can be fermented bone dry. The minimum must weights differ by region and by grape variety, which is why no single number describes the ladder nationally.

So how do you tell if a German wine is dry? Different words entirely:

- **Trocken** means dry. **Halbtrocken** or **feinherb** means off dry.
- A **Grosses Gewachs** (often marked GG) is a dry wine from a top classified vineyard, under the rules of the VDP, which is a private producers' association with its own vineyard classification rather than a government tier.
- Failing all of that, read the alcohol. A Riesling at 8% has kept a lot of sugar. The same wine at 12% or above fermented most of it away.

:::reveal A German Riesling is labelled Spatlese and states 12.5% alcohol. Is it likely to be sweet, and how do you know? ||| Probably not sweet, or only just off dry. Spatlese describes how ripe the GRAPES were at harvest, not the finished wine, so it sets the potential sugar rather than the residual sugar. At 12.5% alcohol most of that sugar has been fermented into alcohol, whereas a genuinely sweet Spatlese usually lands nearer 8%. The word Trocken, if present, would settle it outright.

## Sources
- Regulation (EU) No 1308/2013 of the European Parliament and of the Council of 17 December 2013 establishing a common organisation of the markets in agricultural products. *Official Journal of the European Union, L 347*, 671-854.
- Consejo Regulador DOCa Rioja. (n.d.). *Ageing categories*. https://www.riojawine.com
- Verband Deutscher Pradikatsweinguter. (n.d.). *The VDP classification*. https://www.vdp.de
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.`,
    },
    {
      slug: "somm-reading-new-world-labels",
      title: "28 · Reading a New World label, and the words that mean nothing",
      section: "Module 6 · Law and labels",
      body: `A New World label answers "what grape" first and "where" second, which makes it easier to start with and less informative once you know something. The rules that matter are percentage rules.

**United States, under 27 CFR Part 4.** Four numbers do most of the work:

| Claim on the label | What the law requires |
| --- | --- |
| A grape variety named | At least 75% of that variety, federally. Some states set a higher bar for themselves, Oregon being the well known example |
| An AVA named | At least 85% of the grapes from that AVA |
| A vintage named, with an AVA | At least 95% from that year |
| A vintage named, with a state or county appellation | At least 85% from that year |

**Estate bottled** is a real, defined term: the winery must be within the named AVA and must have controlled the vineyard, and it must have done the whole production on its premises. It tells you about control of the fruit, which is worth something.

**And now the words that mean nothing at all.** In the United States, none of these carries a legal definition:

- **Reserve**, and every variant of it. Nothing. It appears on wines costing six dollars.
- **Old vines** or **vieilles vignes**. Nothing, almost everywhere. There is no legal minimum age.
- **Barrel select**, **winemaker's selection**, **proprietor's blend**, **hand crafted**. Marketing.
- **Natural**. Not legally defined in most markets. It describes a real philosophy (minimal intervention, little or no added sulfur, ambient yeast), and there is no authority checking it.
- **Contains no sulfites.** Impossible in practice, since yeast produce some. The regulated claim is the DECLARATION at ten parts per million or more.

Compare that with Europe, where Riserva, Classico, Grand Cru and Gran Reserva all have specific legal content. This is the real trade the two systems make: New World labels are easy to read and carry less enforceable information, Old World labels are hard to read and carry more.

**The rest of the New World, briefly.** Australia, New Zealand, Chile, Argentina and South Africa all run geographical indication systems with percentage rules similar in spirit to the American ones, generally 85% for a named region, variety or vintage. Australia's Label Integrity Programme is worth knowing about by name, because it audits those claims through the supply chain rather than trusting them.

**How to actually use a New World label.** Read three things in this order: the region (the more specific, the more the producer is claiming), the alcohol (your best single clue to climate and style), and the back label's technical detail if there is any. Ignore every adjective on the front.

:::reveal A California bottle says "Reserve Cabernet Sauvignon, Napa Valley, 2021." Which parts of that carry a legal guarantee and which do not? ||| Cabernet Sauvignon guarantees at least 75% of that variety federally, Napa Valley guarantees at least 85% of the fruit from that AVA, and 2021 with an AVA named guarantees at least 95% from that vintage. Reserve guarantees nothing whatsoever in the United States, and appears on wines at every price.

## Sources
- Alcohol and Tobacco Tax and Trade Bureau. (n.d.). *Labeling and advertising of wine* (27 C.F.R. Part 4). https://www.ecfr.gov/current/title-27/chapter-I/subchapter-A/part-4
- Wine Australia. (n.d.). *Label Integrity Programme*. https://www.wineaustralia.com
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.`,
    },
    {
      slug: "somm-label-drill",
      title: "29 · Drill: what does this label actually promise?",
      section: "Module 6 · Law and labels",
      body: `Each prompt gives you a label. Say what it legally guarantees, or what the key term means. Type short answers, they are checked forgivingly.

The habit being built is separating the enforceable from the decorative, which is worth real money at a shop counter.`,
      exercise: {
        instructions: "Answer in a few words. Where a term has no legal meaning, say so plainly.",
        items: [
          {
            prompt: "A US label says Reserve. What does that legally guarantee?",
            answer: "nothing",
            accept: ["no legal meaning", "nothing at all", "it means nothing"],
            explanation:
              "Reserve has no federal definition in the United States, unlike Riserva in Italy or Reserva in Spain, both of which set minimum ageing.",
          },
          {
            prompt: "German label, Riesling Spatlese, 8% alcohol, no other sweetness term. Sweet or dry, and why?",
            answer: "likely sweet, low alcohol means sugar was left unfermented",
            accept: [
              "sweet, low alcohol",
              "likely sweet",
              "sweet because the alcohol is low",
              "sweet, sugar was not fermented",
            ],
            explanation:
              "Pradikat ranks ripeness at harvest, not finished sweetness. Alcohol is the practical tell: sugar that did not become alcohol is still in the glass.",
          },
          {
            prompt: "What does Classico mean on an Italian label?",
            answer: "the historic heartland of the zone",
            accept: [
              "the original heartland zone",
              "historic core of the appellation",
              "the older, smaller original zone",
            ],
            explanation:
              "Zones were often expanded for commercial reasons, so Classico marks the original core. Chianti Classico is a distinct and generally more serious wine than Chianti.",
          },
          {
            prompt: "A Burgundy label names only a vineyard, with no village name. What tier is it?",
            answer: "Grand Cru",
            accept: ["grand cru", "the grand cru tier"],
            explanation:
              "Grand Cru vineyards may stand alone without the village. The trap is that the most expensive bottles carry the least familiar words.",
          },
          {
            prompt: "Two US labels state a vintage. One names an AVA, one names a state. Which carries the stricter vintage rule?",
            answer: "the one naming the AVA",
            accept: ["the AVA", "AVA", "the AVA one", "the wine with the AVA"],
            explanation:
              "A vintage claim alongside an AVA requires at least 95% of the fruit from that year, where a state or county appellation drops the requirement to 85%. The tighter the place claim, the tighter the vintage rule.",
          },
          {
            prompt: "What does Estate Bottled guarantee on a US label?",
            answer: "the winery is in the AVA and controlled the vineyard and production",
            accept: [
              "winery in the AVA and controlled the vineyard",
              "grown and made by the same producer in the AVA",
              "the producer controlled the vineyard and made the wine on site",
            ],
            explanation:
              "Unlike Reserve, this one is defined: the winery must sit inside the named AVA, must have controlled the vineyard, and must have produced the wine on its premises.",
          },
          {
            prompt: "Spanish red labelled Gran Reserva. What does the term describe?",
            answer: "the longest minimum ageing tier, including time in barrel",
            accept: [
              "long minimum ageing including barrel time",
              "the top ageing category",
              "minimum ageing in barrel and bottle",
            ],
            explanation:
              "The Spanish ageing ladder runs Joven, Crianza, Reserva, Gran Reserva. Exact minimums are set by each Consejo Regulador and are revised periodically.",
          },
          {
            prompt: "A bottle claims Contains No Sulfites. Why is that claim a problem?",
            answer: "yeast produce sulfites naturally, so no wine is free of them",
            accept: [
              "sulfites occur naturally from fermentation",
              "fermentation produces some sulfites",
              "no wine is entirely sulfite free",
            ],
            explanation:
              "The regulated claim is a declaration at ten parts per million or more, not an absence claim. Some sulfite is a by-product of fermentation itself.",
          },
          {
            prompt: "Pomerol has no classification system at all. What does that demonstrate?",
            answer: "a classification is not a measure of quality",
            accept: [
              "hierarchy is not quality",
              "classifications do not measure quality",
              "quality does not require a classification",
            ],
            explanation:
              "Some of the most expensive wine in the world comes from an unclassified appellation, which is the cleanest available proof that a hierarchy is a historical document rather than a quality ranking.",
          },
          {
            prompt: "What does the abbreviation GG on a German label indicate?",
            answer: "a dry wine from a top classified vineyard under VDP rules",
            accept: [
              "Grosses Gewachs, dry wine from a top vineyard",
              "dry wine from a classified vineyard",
              "Grosses Gewachs",
            ],
            explanation:
              "The VDP is a private producers' association with its own vineyard classification, so GG is not a government tier, and it does signal a dry wine from a top site.",
          },
        ],
      },
    },
    {
      slug: "somm-quiz-6",
      title: "30 · Knowledge check: law and labels",
      section: "Module 6 · Law and labels",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What does an appellation legally guarantee?",
            options: [
              "That an independent panel judged the wine to be of high quality",
              "Origin, permitted grapes and production limits, and sometimes minimum ageing",
              "That the producer owns every vineyard named on the bottle outright",
              "That the wine will improve for at least a decade in a proper cellar",
            ],
            correctIndex: 1,
            explanation:
              "Appellation rules cover where the fruit came from, what could be planted, how much could be cropped, and sometimes ageing. They were built to stop fraud, not to certify quality.",
            sourceLessonSlug: "somm-why-appellations-exist",
          },
          {
            prompt: "In Burgundy, a label naming only a vineyard with no village indicates what?",
            options: [
              "A regional wine blended from across the whole of Burgundy",
              "A village wine from a commune too small to be widely recognised",
              "A Grand Cru, the top tier, which need not name its village",
              "A declassified wine that failed the appellation tasting panel",
            ],
            correctIndex: 2,
            explanation:
              "The ladder runs regional, village, Premier Cru, Grand Cru, and a Grand Cru vineyard may stand alone. The most expensive bottles therefore carry the least familiar words on the shelf.",
            sourceLessonSlug: "somm-reading-old-world-labels",
          },
          {
            prompt: "What does the German Pradikat ladder actually measure?",
            options: [
              "The residual sugar remaining in the finished bottled wine",
              "The number of years the wine was aged before its release",
              "The classification rank of the vineyard the fruit came from",
              "The sugar in the grapes at harvest, which is ripeness rather than sweetness",
            ],
            correctIndex: 3,
            explanation:
              "A Spatlese can be fermented bone dry, which is why the ladder confuses so many drinkers. Trocken and feinherb describe finished sweetness, and alcohol level is the practical tell.",
            sourceLessonSlug: "somm-reading-old-world-labels",
          },
          {
            prompt: "Which term on a United States label carries NO legal definition?",
            options: [
              "Reserve",
              "Estate Bottled",
              "The named American Viticultural Area",
              "The stated vintage year",
            ],
            correctIndex: 0,
            explanation:
              "Estate Bottled, the AVA and the vintage all carry enforceable requirements under 27 CFR Part 4. Reserve appears on wines at every price and guarantees nothing at all.",
            sourceLessonSlug: "somm-reading-new-world-labels",
          },
          {
            prompt: "Pomerol has no classification system, yet produces some of the world's costliest wine. What does that show?",
            options: [
              "That French appellation law does not apply to the Right Bank of Bordeaux",
              "That classification hierarchies are historical documents, not quality measures",
              "That unclassified wines are systematically undervalued by the market",
              "That classification systems were abolished across France after 1973",
            ],
            correctIndex: 1,
            explanation:
              "Appellation boundaries and classifications are negotiated by people with land at stake. Pomerol is the cleanest demonstration that the absence of a rank says nothing about the wine.",
            sourceLessonSlug: "somm-reading-old-world-labels",
          },
          {
            prompt: "What is the practical difference between the EU's PDO and PGI tiers?",
            options: [
              "PDO wines are always red and PGI wines are always white or rose",
              "PDO applies to European wine and PGI applies to imported wine",
              "PDO covers tighter areas with stricter rules, PGI is broader and looser",
              "PDO requires oak ageing while PGI prohibits any use of oak",
            ],
            correctIndex: 2,
            explanation:
              "PDO covers French AOC, Italian DOC and DOCG, Spanish DO and DOCa. PGI covers IGP, IGT and Vino de la Tierra, with bigger areas, more permitted grapes and higher yields.",
            sourceLessonSlug: "somm-why-appellations-exist",
          },
          {
            prompt: "How does an American Viticultural Area differ from a French AOC?",
            options: [
              "An AVA delimits a place only, and sets no rules on grapes or yields",
              "An AVA requires all fruit to come from a single named vineyard site",
              "An AVA is granted by a tasting panel that assesses each vintage",
              "An AVA can only be applied to wines made from native American grapes",
            ],
            correctIndex: 0,
            explanation:
              "An AVA is a boundary administered under 27 CFR Part 9 and nothing more. It does not tell a grower what to plant or how much to crop, which is the core structural difference between the systems.",
            sourceLessonSlug: "somm-why-appellations-exist",
          },
          {
            prompt: "Why does the course say an Old World shelf becomes EASIER than a New World one with knowledge?",
            options: [
              "Because Old World labels print the grape variety in larger type",
              "Because Old World bottles are consistently cheaper at every quality tier",
              "Because Old World wines are made in a narrower range of styles overall",
              "Because a place name encodes grape, climate, style and price at once",
            ],
            correctIndex: 3,
            explanation:
              "One word like Chablis carries the grape, the climate, the usual oak treatment, the likely acid and a price expectation. A grape name alone carries far less.",
            sourceLessonSlug: "somm-why-appellations-exist",
          },
          {
            prompt: "What does Classico mean on an Italian label?",
            options: [
              "A wine made using only traditional equipment and native yeast",
              "The historic heartland of a zone, before the boundary was expanded",
              "A wine aged for a legally specified minimum period before release",
              "A blend drawn from several appellations within one Italian region",
            ],
            correctIndex: 1,
            explanation:
              "Zones were widened for commercial reasons, and Classico marks the original core. Riserva is the term that specifies extra ageing, with minimums set appellation by appellation.",
            sourceLessonSlug: "somm-reading-old-world-labels",
          },
          {
            prompt: "The 1855 Bordeaux classification was based on what, and how often has it changed?",
            options: [
              "On soil surveys, and it is revised every ten years by the INAO",
              "On blind tastings, and it has been fully revised three times since",
              "On the prices estates commanded then, and it changed once, in 1973",
              "On vineyard size, and it has never been amended in any way",
            ],
            correctIndex: 2,
            explanation:
              "It ranked the Medoc and Sauternes by the prices those estates were fetching at the time, and the single amendment promoted Mouton Rothschild to first growth in 1973.",
            sourceLessonSlug: "somm-reading-old-world-labels",
          },
          {
            prompt: "A US wine names a grape variety on the front label. What is the federal minimum for that variety?",
            options: [
              "51%, with the remainder unrestricted as to variety",
              "75%, with some states setting a higher bar for themselves",
              "85%, matching the requirement for a named AVA",
              "100%, with no blending of other varieties permitted",
            ],
            correctIndex: 1,
            explanation:
              "The federal varietal minimum is 75%. The 85% figure applies to a named AVA, and Oregon is the well known case of a state holding itself to a stricter standard than the federal one.",
            sourceLessonSlug: "somm-reading-new-world-labels",
          },
          {
            prompt: "Which is the most useful order for reading a New World label?",
            options: [
              "Front label adjectives, then the brand name, then the vintage year",
              "Price sticker, then the importer, then the closure type used",
              "Region specificity, then stated alcohol, then any technical back label",
              "Grape variety, then the reserve designation, then the bottle weight",
            ],
            correctIndex: 2,
            explanation:
              "A more specific region means the producer is claiming more, alcohol is the single best clue to climate and style, and a technical back label is real information. Front label adjectives are marketing.",
            sourceLessonSlug: "somm-reading-new-world-labels",
          },
        ],
      },
    },

    // ══════════════ MODULE 7 · THE REGIONS ══════════════
    {
      slug: "somm-france",
      title: "31 · France, the reference points",
      section: "Module 7 · The regions",
      recallContent: [
        {
          prompt: "Name three words on a US wine label that carry no legal definition at all.",
          answer:
            "Reserve, old vines, and any of the selection phrases such as barrel select, winemaker's selection or proprietor's blend. Natural is also undefined in most markets. Estate Bottled, by contrast, is legally defined.",
        },
      ],
      body: `France matters not because it is best but because most of the world's benchmarks were set there, so the vocabulary of wine is largely French vocabulary. Six regions carry most of it.

**Bordeaux: blends, and the river divides them.** The Gironde estuary splits the region, and the split is legible in the glass.

- **Left bank** (Medoc, Haut-Medoc, and the communes of Saint-Estephe, Pauillac, Saint-Julien, Margaux, plus Graves and Pessac-Leognan to the south). Gravel soils, Cabernet Sauvignon dominant blends. Firmer tannin, blackcurrant, cedar, a graphite edge, longer lived.
- **Right bank** (Saint-Emilion, Pomerol, and the satellites). Clay and limestone, Merlot dominant with Cabernet Franc. Rounder, plusher, plum and chocolate, approachable earlier.
- **Sauternes** makes botrytised sweet wine from Semillon and Sauvignon Blanc, and dry white Bordeaux from the same pair is one of the genuinely underpriced categories in wine.

**Burgundy: one grape each, and the site is everything.** Chardonnay for white, Pinot Noir for red, with the ladder from Lesson 27. Chablis at the northern end is the cool, high acid, usually unoaked reference for Chardonnay. The Cote de Nuits leans red and the Cote de Beaune holds the great whites. Prices are brutal, and the Cote Chalonnaise and Maconnais are where the value hides. **Beaujolais**, immediately south, is Gamay: light, high acid, often carbonic, and Cru Beaujolais such as Morgon or Moulin-a-Vent is the best value entry to the Burgundian idea.

**The Rhone: two valleys pretending to be one region.**

- **Northern Rhone.** Syrah alone for reds (Cote-Rotie, Hermitage, Cornas, Crozes-Hermitage, Saint-Joseph), peppery and savoury. Whites from Viognier (Condrieu), Marsanne and Roussanne.
- **Southern Rhone.** Blends led by Grenache with Syrah and Mourvedre. Chateauneuf-du-Pape is the famous one, Cotes du Rhone and Rasteau the value. Warmer, higher alcohol, rounder.

**The Loire: a river of high acid.** Muscadet at the Atlantic end (lean, saline, brilliant with shellfish), Chenin Blanc in the middle at every sweetness level (Vouvray, Savennieres), Cabernet Franc for reds (Chinon, Bourgueil, leafy and red fruited), and Sauvignon Blanc at the eastern end (Sancerre, Pouilly-Fume).

**Alsace: France labelled like Germany.** Varietally labelled, mostly Riesling, Gewurztraminer, Pinot Gris and Muscat, generally dry but not always, and the label often does not say which. Read the alcohol.

**Champagne: covered in Lesson 23.** Chardonnay, Pinot Noir and Meunier, the traditional method, and the coolest major region in France, which is exactly why the base wines have the acid the method needs.

${flightCard(FLIGHT_7)}

:::reveal Two Bordeaux at the same price, one firm and angular with blackcurrant and graphite, one round and plush with plum. Which bank is which, and what is the underlying cause? ||| The firm, angular, blackcurrant and graphite wine is left bank, Cabernet Sauvignon dominant on gravel soils. The round, plush, plummy one is right bank, Merlot dominant on clay and limestone. The cause is which grape ripens well on which soil, so the river is really dividing two soil types and therefore two blends.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Institut national de l'origine et de la qualite. (n.d.). *Les signes officiels de la qualite et de l'origine*. https://www.inao.gouv.fr`,
    },
    {
      slug: "somm-italy",
      title: "32 · Italy, where acid is the house style",
      section: "Module 7 · The regions",
      body: `Italy grows wine in every one of its regions and uses hundreds of native varieties, which makes it look impossible. One idea makes it tractable: Italian wine is built for the table. Acid is high, tannin is often firm, fruit is rarely the loudest thing, and a great many Italian wines are unimpressive alone and transformed by food.

**Piedmont: Nebbiolo, and the two hills.** Barolo and Barbaresco are both Nebbiolo, both in the Langhe. Barbaresco is generally the slightly softer and earlier drinking of the pair. Both are pale, tannic, high in acid, and smell of tar, dried roses and, with age, forest floor. **Langhe Nebbiolo** is the same grape at a fraction of the price and is how most people should learn it. Alongside them, **Barbera** gives high acid with low tannin, **Dolcetto** gives the reverse, and **Moscato d'Asti** is the region's sweet, low alcohol, lightly sparkling counterweight.

**Tuscany: Sangiovese, four ways.**

- **Chianti Classico**, from the historic heartland, is the reference: sour red cherry, dried herbs, tomato leaf, very high acid.
- **Brunello di Montalcino** is a single Sangiovese clone grown in a warmer, drier zone, aged long, and priced accordingly. **Rosso di Montalcino** is its younger sibling and a far better value lesson.
- **Vino Nobile di Montepulciano** is a third Sangiovese expression, and it is not the same thing as Montepulciano d'Abruzzo, which is a different GRAPE entirely from a different region. That naming collision catches everyone once.
- The **Super Tuscans** were born as a rebellion: producers using Cabernet Sauvignon and Merlot outside the appellation rules had to sell as basic table wine, and the wines were so successful that the law eventually built new appellations around them, notably Bolgheri. It is the best story in wine about a hierarchy failing to describe quality.

**Veneto: volume and surprises.** Soave (Garganega, quietly excellent at the top), Valpolicella (light and fresh), Amarone (dried grapes, fermented dry, powerful) and Prosecco (Glera, tank method) all come from here.

**The south, and the islands.** Where the value has moved. Aglianico from Campania and Basilicata is tannic and long lived. Primitivo from Puglia is the same variety as Zinfandel. Nero d'Avola in Sicily is warm and generous, and **Etna** on volcanic soil at altitude makes pale, high acid reds from Nerello Mascalese that fool a great many blind tasters into calling Burgundy.

${flightCard(FLIGHT_8)}

:::reveal A pale, high acid, savoury red with fine tannin turns out to be from Sicily. How is that possible in one of the hottest wine regions in Europe? ||| Altitude and volcanic soils on Mount Etna. Vineyards sit high enough that the growing season behaves like a much cooler region, with a large diurnal range preserving acid, so Nerello Mascalese produces pale, perfumed, high acid reds. It is the clearest single reminder that latitude and country are poor predictors, and that growing season conditions are what you actually taste.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Robinson, J., Harding, J., & Vouillamoz, J. (2012). *Wine grapes: A complete guide to 1,368 vine varieties, including their origins and flavours*. Ecco.`,
    },
    {
      slug: "somm-spain-portugal-germany-austria",
      title: "33 · Spain, Portugal, Germany and Austria",
      section: "Module 7 · The regions",
      body: `Four countries that between them hold most of the remaining value in fine wine, largely because their labels are harder to read.

**Spain: oak, age, and altitude.**

- **Rioja** is Tempranillo led, and its defining variable is the ageing ladder from Lesson 27 rather than the vineyard. The traditional style, long ageing in American oak, gives the coconut and dill signature. A modern style uses French oak and shorter ageing for a darker, fruitier wine. Both exist under the same appellation, and the label rarely tells you which, so the producer is the information.
- **Ribera del Duero** is Tempranillo at higher altitude, with a big diurnal range: darker, more structured, less overtly oaky.
- **Priorat** is old vine Garnacha and Carinena on slate, low yielding, powerful and expensive.
- **Rias Baixas** in the cool, wet, green northwest makes Albarino: citrus, salinity, high acid.
- **Jerez** makes Sherry, covered in Lesson 24, and remains the most underpriced fine wine category in the world.

**Portugal: the best value in Europe, for a specific reason.** Portugal grows a very large number of native varieties almost nobody outside the country can name, which suppresses prices without suppressing quality.

- **Douro** is where Port comes from, and its dry red table wines from the same grapes (Touriga Nacional, Touriga Franca, Tinta Roriz which is Tempranillo) are excellent and comparatively cheap.
- **Vinho Verde** in the north is light, low alcohol, high acid and often faintly spritzy.
- **Dao** and **Alentejo** cover the elegant and the generous ends of the red spectrum.

**Germany: cool climate Riesling, and the value question.** The Mosel makes the lightest, lowest alcohol, most piercing Rieslings on steep slate slopes. The Rheingau is fuller and more often dry. The Pfalz is warmer and riper. Germany also makes serious Pinot Noir, called **Spatburgunder**, which almost nobody expects. The label rules from Lesson 27 are the whole barrier here, and dismantling that barrier is why German Riesling remains one of the great value plays in fine wine.

**Austria: dry, precise, and consistent.** **Gruner Veltliner** is the signature white: white pepper, citrus, a savoury lentil note, high acid, almost always dry, and one of the most food friendly wines made anywhere. Austrian Riesling is drier and fuller than most German equivalents. **Blaufrankisch** is the red worth knowing: medium bodied, peppery, high acid, and structurally closer to a Northern Rhone Syrah than to anything else.

${flightCard(FLIGHT_9)}

:::reveal Why does the course argue German Riesling and Sherry are systematically underpriced rather than simply unpopular? ||| Because in both cases the barrier is legibility rather than quality. A German label ranks harvest ripeness rather than sweetness, so buyers cannot tell a dry wine from a sweet one without training, and Sherry is assumed to be sweet when most of it is bone dry. When demand is suppressed by a labelling misunderstanding rather than by what is in the glass, the price falls below the quality, which is exactly the gap a trained buyer exploits.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Consejo Regulador DOCa Rioja. (n.d.). *Ageing categories*. https://www.riojawine.com
- Verband Deutscher Pradikatsweinguter. (n.d.). *The VDP classification*. https://www.vdp.de`,
    },
    {
      slug: "somm-new-world-regions",
      title: "34 · The New World, region by region",
      section: "Module 7 · The regions",
      body: `The useful frame here is not country. It is the specific place, because every one of these countries contains cool and warm regions, and Module 4 already taught you that the growing season predicts the glass.

**United States.** California produces the great majority of American wine. **Napa** is warm and Cabernet Sauvignon country, priced globally. **Sonoma** is more varied, and its coastal edge is genuinely cool, giving high acid Pinot Noir and Chardonnay. **Oregon's Willamette Valley** is cool and marginal, making Pinot Noir closer in structure to Burgundy than to California. **Washington's** Columbia Valley is continental and dry, strong in Cabernet, Merlot and Syrah. **New York's Finger Lakes** makes Riesling that surprises people who have not been paying attention.

**Australia.** **Barossa** and **McLaren Vale** are warm, giving rich Shiraz and Grenache. **Coonawarra** on its red soils makes structured Cabernet. **Clare** and **Eden Valley** make some of the world's finest dry Riesling, lime driven and searingly acidic. **Yarra Valley**, **Mornington**, **Tasmania** and **Margaret River** cover the cool end, with Margaret River in particular producing Cabernet and Chardonnay at a very high level.

**New Zealand.** **Marlborough** Sauvignon Blanc changed the world's expectations of that grape in a single generation: pungent, tropical and grassy at once. **Central Otago** is one of the southernmost wine regions on earth and makes concentrated, high acid Pinot Noir.

**Chile.** A long, narrow country where the meaningful axis runs east to west, from cool coastal valleys to warm interior ones. **Maipo** for Cabernet, **Casablanca** and **San Antonio** for cool climate whites and Pinot, **Colchagua** for warm reds. **Carmenere**, long mistaken for Merlot until DNA work identified it in the 1990s, is Chile's signature: dark, savoury, with a pyrazine edge when picked early.

**Argentina.** **Mendoza**, and the story is altitude. Vineyards run from around 600 metres up past 1,500, and the higher ones have the diurnal range that keeps Malbec fresh rather than merely ripe. The **Uco Valley** is where that plays out most clearly. Argentine Malbec at altitude is the standard example of a warm country making structured wine.

**South Africa.** A long history and a recent transformation. **Stellenbosch** for Cabernet and Bordeaux blends, **Swartland** for old vine Chenin Blanc and Rhone varieties, **Hemel-en-Aarde** for cool climate Pinot Noir. South African **Chenin Blanc**, from old bush vines, is arguably the best quality-to-price ratio available anywhere in white wine.

**The pattern worth carrying away.** Every one of these countries has cool regions and warm regions, and the cool ones are where the fine wine conversation has moved. When a shop tells you a country's style, ask which region, then ask about the alcohol.

:::reveal A shop assistant says "Australian reds are all big and jammy." Give the two-sentence correction a trained buyer would make. ||| Australia contains regions of every climate, so the country name predicts nothing: Barossa Shiraz is warm and rich while Yarra, Mornington and Tasmania are genuinely cool and make restrained, high acid wine. The useful questions are which region and what the stated alcohol is, because the growing season is what you actually taste.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Robinson, J., Harding, J., & Vouillamoz, J. (2012). *Wine grapes: A complete guide to 1,368 vine varieties, including their origins and flavours*. Ecco.`,
    },
    {
      slug: "somm-quiz-7",
      title: "35 · Knowledge check: the regions",
      section: "Module 7 · The regions",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What is the structural difference between left bank and right bank Bordeaux?",
            options: [
              "Left bank is Cabernet dominant and firmer, right bank is Merlot dominant and rounder",
              "Left bank is a white wine region and right bank produces only red wine",
              "Left bank wines are unoaked while right bank wines are aged in new barrels",
              "Left bank permits blending and right bank requires a single named variety",
            ],
            correctIndex: 0,
            explanation:
              "Gravel soils on the left bank favour Cabernet Sauvignon, clay and limestone on the right favour Merlot, so the river is really dividing two soil types and therefore two blends and two structures.",
            sourceLessonSlug: "somm-france",
          },
          {
            prompt: "Barolo and Barbaresco are both made from which grape?",
            options: [
              "Sangiovese, the grape behind Chianti and Brunello",
              "Nebbiolo, pale in colour and very high in tannin",
              "Barbera, which carries high acid and low tannin",
              "Corvina, the principal grape of Valpolicella",
            ],
            correctIndex: 1,
            explanation:
              "Both are Nebbiolo from the Langhe in Piedmont. Langhe Nebbiolo is the same grape at a fraction of the price, and is how most people should first learn it.",
            sourceLessonSlug: "somm-italy",
          },
          {
            prompt: "Vino Nobile di Montepulciano and Montepulciano d'Abruzzo differ how?",
            options: [
              "They are the same wine sold under two regional trade names",
              "One is a sweet dessert wine and the other is a dry table wine",
              "One is Sangiovese from Tuscany, the other a different grape from Abruzzo",
              "One is a DOCG and the other has no appellation status of any kind",
            ],
            correctIndex: 2,
            explanation:
              "Montepulciano is a Tuscan town in one name and a grape variety in the other, which is the naming collision that catches nearly every learner once.",
            sourceLessonSlug: "somm-italy",
          },
          {
            prompt: "What does the Super Tuscan story demonstrate about appellation hierarchies?",
            options: [
              "That a hierarchy can fail to describe quality, forcing the law to catch up",
              "That producers who ignore appellation rules are always penalised commercially",
              "That Italian wine law has never been revised since it was first written",
              "That international grape varieties cannot succeed outside their homeland",
            ],
            correctIndex: 0,
            explanation:
              "Producers using Cabernet and Merlot outside the rules had to sell as basic table wine, the wines succeeded anyway, and new appellations such as Bolgheri were eventually built around them.",
            sourceLessonSlug: "somm-italy",
          },
          {
            prompt: "Etna produces pale, high acid, perfumed reds despite Sicily's heat. Why?",
            options: [
              "The grapes are harvested months earlier than elsewhere in Sicily",
              "Volcanic soil chemistry lowers the sugar content of the ripe fruit",
              "Sea breezes cool the island uniformly throughout the growing season",
              "Altitude gives a large diurnal range that preserves acidity in the fruit",
            ],
            correctIndex: 3,
            explanation:
              "Vineyards sit high enough on the volcano that the growing season behaves like a much cooler region. It is the clearest reminder that country and latitude predict far less than growing conditions do.",
            sourceLessonSlug: "somm-italy",
          },
          {
            prompt: "What is the defining variable in Rioja that the label does report?",
            options: [
              "The specific vineyard site the fruit was grown on",
              "The ageing ladder: Joven, Crianza, Reserva, Gran Reserva",
              "Whether the wine was fermented with ambient or selected yeast",
              "The exact proportion of Tempranillo in the finished blend",
            ],
            correctIndex: 1,
            explanation:
              "Rioja is organised around ageing rather than around site. What the label does not report is whether the producer used the traditional American oak style or the modern French oak one, so the producer is the information there.",
            sourceLessonSlug: "somm-spain-portugal-germany-austria",
          },
          {
            prompt: "Why does the course call Portuguese wine unusually good value?",
            options: [
              "Portugal subsidises wine exports more heavily than other EU states",
              "Portuguese wine is exempt from EU appellation law and its costs",
              "Its many native varieties are unfamiliar, which suppresses price but not quality",
              "Portuguese vineyards are mechanised, which lowers production costs sharply",
            ],
            correctIndex: 2,
            explanation:
              "Recognition drives price. A country whose grapes almost nobody outside it can name has weak brand recognition and strong wine, and the dry reds of the Douro are the clearest example.",
            sourceLessonSlug: "somm-spain-portugal-germany-austria",
          },
          {
            prompt: "Which Austrian white is described as one of the most food friendly wines made anywhere?",
            options: [
              "Gruner Veltliner, with white pepper, citrus and high acid",
              "Blaufrankisch, medium bodied and peppery",
              "Spatburgunder, grown mainly on limestone soils",
              "Garganega, the principal grape of the Soave zone",
            ],
            correctIndex: 0,
            explanation:
              "Gruner Veltliner is almost always dry, high in acid and savoury rather than fruity. Blaufrankisch is Austria's notable red, Spatburgunder is German Pinot Noir, and Garganega is Italian.",
            sourceLessonSlug: "somm-spain-portugal-germany-austria",
          },
          {
            prompt: "What makes Argentine Malbec from the Uco Valley structured rather than merely ripe?",
            options: [
              "Irrigation restrictions that deliberately stress the vines all season",
              "Altitude, and the large diurnal range that comes with it",
              "Harvesting before the grapes reach full phenolic ripeness",
              "Extended maceration on the skins after fermentation ends",
            ],
            correctIndex: 1,
            explanation:
              "Mendoza vineyards run from around 600 metres to past 1,500. Warm days ripen the fruit while cold nights preserve acid, which is the same mechanism that explains high acid wines from other warm regions.",
            sourceLessonSlug: "somm-new-world-regions",
          },
          {
            prompt: "Carmenere was mistaken for which grape until DNA work identified it in Chile?",
            options: [
              "Cabernet Franc, which shares its herbaceous character",
              "Syrah, which shares its dark colour and savoury profile",
              "Merlot, which it was planted alongside and sold as",
              "Malbec, which was also widely planted in Bordeaux",
            ],
            correctIndex: 2,
            explanation:
              "Chilean plantings were sold as Merlot for decades before the identification in the 1990s. Carmenere ripens later, and picked early it shows a pronounced pyrazine edge.",
            sourceLessonSlug: "somm-new-world-regions",
          },
          {
            prompt: "A shop says a country's wines are all one style. What is the trained buyer's response?",
            options: [
              "Ask for the vintage chart, since style varies by year not by place",
              "Accept it for New World countries and challenge it for European ones",
              "Ask which region, then check the stated alcohol on the bottle",
              "Ask whether the wine was bottled at the estate or by a negociant",
            ],
            correctIndex: 2,
            explanation:
              "Every major producing country contains cool and warm regions, so the country name predicts almost nothing. Region and alcohol together get you most of the way to the style.",
            sourceLessonSlug: "somm-new-world-regions",
          },
          {
            prompt: "Which pairing correctly matches a region to its signature wine?",
            options: [
              "Marlborough with Sauvignon Blanc, Willamette Valley with Pinot Noir",
              "Coonawarra with Riesling, Clare Valley with Cabernet Sauvignon",
              "Swartland with Pinot Noir, Hemel-en-Aarde with old vine Chenin Blanc",
              "Casablanca with Cabernet Sauvignon, Maipo with cool climate Chardonnay",
            ],
            correctIndex: 0,
            explanation:
              "Marlborough remade the world's expectations of Sauvignon Blanc and Willamette is cool climate Pinot country. The other three each swap two regions that genuinely produce the opposite of what is claimed.",
            sourceLessonSlug: "somm-new-world-regions",
          },
        ],
      },
    },

    // ══════════════ MODULE 8 · CHOOSING ══════════════
    {
      slug: "somm-what-price-buys",
      title: "36 · What a price actually buys",
      section: "Module 8 · Choosing",
      recallContent: [
        {
          prompt: "Why does the course say country names are useless for predicting wine style?",
          answer:
            "Because every major producing country contains both cool and warm regions, and the growing season is what you taste. Australia holds both Barossa and Tasmania. The useful questions are which region, and what alcohol the label states.",
        },
      ],
      body: `A bottle's price is mostly not the wine. Understanding the fixed costs is the single most practical thing in this module, because it tells you where your money starts buying quality instead of overheads.

**What is in the price before any wine happens.** Glass, closure, capsule, label, carton, freight, insurance, import duty, excise tax, and, in the United States, the margins of a distributor and a retailer under the three-tier system that requires most wine to pass through both. Those costs are roughly FLAT per bottle. They are nearly the same on a ten dollar wine and a hundred dollar one.

**Which produces the effect that matters.** On a very cheap bottle, the fixed costs eat most of the price and the liquid is what is left. As the price rises, the fixed costs stay put and a rapidly growing share goes to the wine itself. That is why the jump from an eight dollar bottle to a twenty dollar bottle is enormous, and the jump from twenty to fifty is real but much smaller, and the jump from fifty to two hundred is mostly scarcity, reputation, oak, lower yields and hand work.

**What more money genuinely buys, in rough order of how much difference you can taste**

1. **Lower yields and better fruit.** The biggest single lever, and it costs money because the same land makes less wine.
2. **Selection.** Discarding fruit or barrels that are not good enough is expensive by definition.
3. **Time.** Cellaring a wine for years before release is capital sitting still.
4. **New oak.** Expensive, and loud, which is why cheap wines imitate it with chips and staves.
5. **Hand work.** Hand harvesting, hand sorting, gentler handling.
6. **Scarcity and reputation.** Real market forces, and they buy you nothing in the glass.

**The uncomfortable evidence.** In a large study of blind tastings, Goldstein and colleagues (2008) found that people without wine training enjoyed more expensive wines slightly LESS on average, while those with training showed a small positive relationship between price and enjoyment. That does not mean expensive wine is a con. It means that price and pleasure come apart when you cannot see the label, and that training changes what you get for your money. Both halves of that are worth taking seriously, and Flight 10 makes you run the experiment on yourself rather than take anybody's word for it.

**The practical rule this course teaches.** Find your own ceiling. Somewhere on the price ladder is the point where a wine gets measurably better and you stop caring. Above that point you are buying an occasion, a story or a gift, all of which are legitimate purchases, as long as you know that is what you are doing.

:::reveal Why is the quality gap between an eight dollar wine and a twenty dollar wine so much larger than the gap between fifty and one hundred? ||| Because the fixed costs per bottle (glass, closure, label, freight, duty, distributor and retailer margins) are roughly the same at every price, so on a cheap bottle they consume most of the price and very little is left for the liquid. As the price rises those costs stay flat and a rapidly growing share goes to the wine, until at the top the extra money is mostly buying scarcity, reputation and hand work rather than a proportionate gain in the glass.

## Sources
- Goldstein, R., Almenberg, J., Dreber, A., Emerson, J. W., Herschkowitsch, A., & Katz, J. (2008). Do more expensive wines taste better? Evidence from a large sample of blind tastings. *Journal of Wine Economics, 3*(1), 1-9. https://doi.org/10.1017/S1931436100000523
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.`,
    },
    {
      slug: "somm-buying-in-a-shop",
      title: "37 · Buying: how to use a shop, and where value hides",
      section: "Module 8 · Choosing",
      body: `**Ask a better question.** The single highest leverage move in a wine shop is to give the person behind the counter three pieces of information: a price, a style you liked before, and what you are eating. "About twenty dollars, I loved a Chablis last week, and I am making roast chicken" gets you a genuinely useful recommendation. "What is good?" gets you whatever they need to move.

**Where value structurally hides.** Value is not random. It sits in predictable places, and every one of them is a market inefficiency you can name:

| Where | Why it is cheap |
| --- | --- |
| **Unfashionable grapes** | Nobody can pronounce them, so demand is low and quality is not |
| **The neighbour appellation** | Land beside a famous name costs a fraction of the famous name. Haut-Medoc beside Pauillac, Rosso di Montalcino beside Brunello, Langhe Nebbiolo beside Barolo |
| **Misunderstood labels** | German Riesling and Sherry are the standing examples, both cheap because buyers cannot read what they are looking at |
| **The second wine** | Many estates make a junior bottling from younger vines and declassified lots, at a fraction of the price |
| **Off-vintages in great regions** | A weaker year from a serious producer often beats a strong year from a weak one |
| **Whites and rose from red regions** | Dry white Bordeaux is the classic case |

**Where value does not hide.** Famous names in famous vintages, anything heavily advertised, and supermarket own-label wine made to hit a price point rather than a style. Also: the second-cheapest bottle on a restaurant list, which is folklore worth dismantling in the next lesson.

**Reading a shop.** A shop that stores wine upright under hot spotlights for months is damaging its stock, and heat is the most common way wine dies before you buy it. Dusty bottles in a cool corner are a better sign than a bright display. A shop that can tell you who imported a wine, and has opinions about importers, is a shop that thinks about provenance.

**Buying to keep.** Most wine sold today is made to drink now, and will not improve. Wines that genuinely repay cellaring have some combination of high acid, high tannin, or high sugar, all of which are preservatives. If a wine has none of the three, drinking it sooner is not impatience, it is correct.

${flightCard(FLIGHT_10)}

:::reveal Name three structural places value hides in a wine shop, and give the reason each one is underpriced. ||| Any three of: unfashionable grapes (low demand from unfamiliarity, not from low quality), the appellation next door to a famous one (you pay for the name, not the land), misunderstood labels such as German Riesling and Sherry (demand suppressed by a labelling misunderstanding), estate second wines (younger vines and declassified lots from a serious producer), and off-vintages from strong producers (a weak year from a good winemaker often beats a strong year from a weak one).

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Goldstein, R., Almenberg, J., Dreber, A., Emerson, J. W., Herschkowitsch, A., & Katz, J. (2008). Do more expensive wines taste better? Evidence from a large sample of blind tastings. *Journal of Wine Economics, 3*(1), 1-9. https://doi.org/10.1017/S1931436100000523`,
    },
    {
      slug: "somm-ordering-in-a-restaurant",
      title: "38 · Ordering: the list, the markup, and the ritual",
      section: "Module 8 · Choosing",
      body: `A restaurant wine list is a document with a business model. Read it that way and it stops being intimidating.

**The markup.** Restaurants commonly price wine at a multiple of what they paid, frequently in the range of two to four times the retail price, though the practice varies enormously by market, by venue and by bottle. The important structural point is not the multiple but its SHAPE: many lists apply a bigger multiple at the bottom and a smaller one at the top, because a fixed cash margin matters more than a fixed percentage. That has a direct consequence.

**Which kills the second-cheapest myth.** The folklore says the second-cheapest bottle is where restaurants hide their worst value, because everyone orders it to avoid looking cheap. Whether or not that was ever reliably true, the useful analysis is the one you can do at the table: the cheapest bottles usually carry the HIGHEST multiple, so the best value on many lists sits in the middle, and on a serious list the most expensive bottles can carry the lowest multiple of all. Look at the shape of the list rather than at a rule of thumb.

**Where the value is on a list**

- **Unfashionable regions**, exactly as in a shop. A list's Portuguese, Austrian, Greek or Sherry section is usually its best value.
- **The by-the-glass programme**, if the restaurant is busy enough to move bottles quickly. In a quiet place, an open bottle may have been open too long.
- **Anything the venue is known for.** A place with a serious Italian list buys Italian well.
- **Half bottles and larger formats**, both frequently mispriced.

**Use the sommelier properly.** Point at a price on the list rather than saying a number out loud if you are self-conscious, name a wine you have enjoyed, and say what you are eating. Then ask the one question that reliably produces the best bottle in the house at your price: "What is exciting you on the list right now around here?" A good wine person has been waiting all night for someone to ask.

**The ritual, and what it is actually for.** The presentation of the bottle is a series of checks, not theatre:

1. **The bottle is shown to you.** Confirm it is what you ordered, including the VINTAGE, which is the one that goes wrong most often.
2. **The cork may be placed on the table.** You are not required to smell it, and smelling it tells you very little. Looking at it can tell you about a leak or heat damage.
3. **A small pour is offered.** This is the check that matters, and it is not asking whether you LIKE the wine. It is asking whether the wine is FAULTY.

**Sending a bottle back.** You may send back a wine that is corked, oxidised, heat damaged, or otherwise faulty, and any decent venue replaces it without argument. You may not send back a wine because it turned out drier or more tannic than you expected. If you are unsure, say exactly that: "I think this might be corked, would you taste it?" That sentence is professional, it is honest, and it puts a second trained palate on the problem.

:::reveal The small pour arrives. What question are you actually being asked, and what are you not being asked? ||| You are being asked whether the wine is FAULTY: corked, oxidised, heat damaged or otherwise wrong. You are not being asked whether you like it or whether it matches what you imagined, and a wine that is simply drier or more tannic than you expected is not grounds for sending it back. If you suspect a fault but are not certain, asking the server or sommelier to taste it is the correct and professional move.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Court of Master Sommeliers. (n.d.). *Introductory sommelier certificate: Course content*. https://www.courtofmastersommeliers.org`,
    },
    {
      slug: "somm-quiz-8",
      title: "39 · Knowledge check: choosing",
      section: "Module 8 · Choosing",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Why is the quality jump from an eight dollar to a twenty dollar bottle so large?",
            options: [
              "Fixed per-bottle costs stay flat, so a growing share goes to the wine itself",
              "Cheaper wines are taxed at a substantially higher rate in most markets",
              "Wines under ten dollars are legally barred from stating a vintage year",
              "Distributors refuse to carry wines priced below a fixed minimum threshold",
            ],
            correctIndex: 0,
            explanation:
              "Glass, closure, label, freight, duty and trade margins cost roughly the same on any bottle. On a cheap wine they eat most of the price, so each extra dollar early on buys a lot of liquid.",
            sourceLessonSlug: "somm-what-price-buys",
          },
          {
            prompt: "What did Goldstein and colleagues (2008) find in their large blind tasting study?",
            options: [
              "Experts and non-experts agreed closely on which wines were most expensive",
              "Non-experts enjoyed pricier wines slightly less, while trained tasters showed a small positive link",
              "Price predicted enjoyment strongly for every group of tasters studied",
              "Blind tasters could identify a wine's price bracket with high reliability",
            ],
            correctIndex: 1,
            explanation:
              "The finding is that price and pleasure come apart once the label is hidden, and that training changes the relationship. It is evidence about labels and expectations rather than proof that expensive wine is a con.",
            sourceLessonSlug: "somm-what-price-buys",
          },
          {
            prompt: "Which of these buys the most detectable improvement in the glass?",
            options: [
              "The reputation and scarcity attached to a famous producer's name",
              "A heavier glass bottle with a deeper punt at the base",
              "Lower yields and better fruit from the vineyard",
              "A longer and more elaborate back label description",
            ],
            correctIndex: 2,
            explanation:
              "Lower yields are the biggest single quality lever and they cost money because the same land makes less wine. Scarcity and reputation are real market forces that buy nothing in the glass.",
            sourceLessonSlug: "somm-what-price-buys",
          },
          {
            prompt: "Why are German Riesling and Sherry described as structurally underpriced?",
            options: [
              "Both are produced in volumes far exceeding what the world can drink",
              "Both are subsidised heavily by their national governments",
              "Both are excluded from the EU appellation system entirely",
              "Demand is suppressed by labels buyers cannot read rather than by quality",
            ],
            correctIndex: 3,
            explanation:
              "German labels rank harvest ripeness rather than sweetness, and Sherry is assumed sweet when most is bone dry. When a labelling misunderstanding suppresses demand, price falls below quality.",
            sourceLessonSlug: "somm-buying-in-a-shop",
          },
          {
            prompt: "What does the course say about the second-cheapest bottle on a restaurant list?",
            options: [
              "It is reliably the worst value on every list, as the folklore claims",
              "It is always the best value because restaurants use it to attract customers",
              "The cheapest bottles often carry the highest multiple, so read the list's shape",
              "It is priced at cost, since venues make their margin on food instead",
            ],
            correctIndex: 2,
            explanation:
              "Many lists apply a larger multiple at the bottom and a smaller one at the top, so value frequently sits in the middle and sometimes at the very top. The analysis you can do at the table beats any rule of thumb.",
            sourceLessonSlug: "somm-ordering-in-a-restaurant",
          },
          {
            prompt: "The small pour at the table is asking you to judge what?",
            options: [
              "Whether the wine is faulty, not whether you like it",
              "Whether the wine is worth the price the list charges for it",
              "Whether the vintage matches the one printed on the menu",
              "Whether the wine has been served at the correct temperature",
            ],
            correctIndex: 0,
            explanation:
              "Corked, oxidised or heat damaged wine gets replaced without argument. A wine that is drier or more tannic than you imagined is not grounds for sending it back, and the vintage check happens when the bottle is presented.",
            sourceLessonSlug: "somm-ordering-in-a-restaurant",
          },
          {
            prompt: "Which combination indicates a wine that might genuinely repay cellaring?",
            options: [
              "A heavy bottle, a long cork and an elaborately printed front label",
              "High acid, high tannin or high sugar, all of which act as preservatives",
              "A high stated alcohol level combined with pronounced new oak",
              "A famous appellation name and a widely praised vintage year",
            ],
            correctIndex: 1,
            explanation:
              "Acid, tannin and sugar preserve wine. Most wine sold today is made to drink now and will not improve, so drinking a wine lacking all three sooner is correct rather than impatient.",
            sourceLessonSlug: "somm-buying-in-a-shop",
          },
          {
            prompt: "What is the highest leverage thing to tell someone working in a wine shop?",
            options: [
              "The name of the most expensive wine you have ever been given",
              "That you would like whatever they personally drink at home",
              "A price, a style you enjoyed before, and what you are eating",
              "That you are looking for something unusual and hard to find",
            ],
            correctIndex: 2,
            explanation:
              "Those three facts let someone match a real bottle to a real occasion. Asking what is good, with no constraints, invites whatever the shop needs to move that week.",
            sourceLessonSlug: "somm-buying-in-a-shop",
          },
          {
            prompt: "Why does an estate's 'second wine' often represent good value?",
            options: [
              "It is produced from a completely different and cheaper vineyard region",
              "It is made from younger vines and declassified lots by a serious producer",
              "It is bottled by a negociant who buys surplus from many estates at once",
              "It is released before the main wine and priced to fund the harvest",
            ],
            correctIndex: 1,
            explanation:
              "The same team, the same cellar and the same standards, applied to fruit that did not make the top selection, produces a wine at a fraction of the flagship price.",
            sourceLessonSlug: "somm-buying-in-a-shop",
          },
          {
            prompt: "What is a warning sign about how a wine shop stores its stock?",
            options: [
              "Dusty bottles resting on their sides in a cool, dim corner",
              "Bottles stored upright for months under hot display spotlights",
              "Staff who can name the importer behind each bottle they sell",
              "A rotating selection that changes several times each season",
            ],
            correctIndex: 1,
            explanation:
              "Heat is the most common way wine dies before you buy it, and standing upright under lights combines heat with a drying cork. Dust in a cool corner and importer knowledge are both good signs.",
            sourceLessonSlug: "somm-buying-in-a-shop",
          },
        ],
      },
    },

    // ══════════════ MODULE 9 · SERVICE AND FAULTS ══════════════
    {
      slug: "somm-temperature-glass-decanting",
      title: "40 · Temperature, glass, decanting",
      section: "Module 9 · Service and faults",
      recallContent: [
        {
          prompt: "Name three places value structurally hides in a wine shop.",
          answer:
            "Unfashionable grapes, the appellation next door to a famous one, misunderstood labels such as German Riesling and Sherry, estate second wines, off-vintages from strong producers, and white or rose wines from regions famous for red.",
        },
      ],
      body: `Service is where a good bottle is most often ruined, and almost always in one of two ways: most reds are served too warm, and most whites are served too cold.

**Temperature bands.** Treat these as bands, because the right point inside a band depends on the wine and the room:

| Style | Rough band |
| --- | --- |
| Sparkling | 6 to 8 degrees Celsius |
| Light, crisp white, and rose | 8 to 10 |
| Fuller white, oaked white | 10 to 13 |
| Light, high acid red | 12 to 14 |
| Full bodied red | 15 to 18 |

**Why it matters so much.** Temperature changes the wine's chemistry in your glass, not just its feel. Cold suppresses aroma, tightens acid and makes tannin feel harsher. Warmth releases aroma and makes alcohol more obvious. Which means: a red served at room temperature in a warm room reads hot and flabby, and the fix is fifteen minutes in the fridge. A white served straight from a cold fridge tastes of almost nothing, and the fix is ten minutes on the counter. Those two habits will improve more bottles than any other single thing in this module.

**Cheap wine benefits from cold.** Chilling suppresses aroma and emphasises freshness, which is exactly the trade you want on a simple wine. Serve a modest red slightly cool and it gets better.

**Glassware, honestly.** Shape matters, and it matters much less than the marketing suggests. Practical requirements: a bowl big enough to swirl in, a rim that narrows to gather the aroma, a stem so your hand does not warm the wine, and clear glass so you can see the colour. One good universal glass beats a cupboard of grape-specific shapes, and a flute is the one shape actively working against you, because it concentrates bubbles and starves the aroma.

**Decanting, and its two entirely different purposes.**

1. **To separate sediment.** Old reds throw a deposit as colour and tannin polymerise. Stand the bottle upright for a day, then pour slowly and steadily into a decanter, stopping when the sediment reaches the neck. This is careful work, not aeration.
2. **To introduce air.** Young, tannic, closed wines open up with oxygen. Here you WANT splashing, and an hour or two is not excessive on a young structured red.

**The mistake is confusing the two.** A very old wine may be fragile, and half an hour of aggressive aeration can flatten it completely. So: old and delicate means decant gently, right before serving, for sediment only. Young and tough means decant early and pour roughly.

**Does it need decanting?** Ask two questions. Is there sediment? Is the wine young, tannic and hard to smell? A yes to either is a reason. Neither is a reason to decant a crisp white, though decanting a reduced wine (Lesson 42) to blow off its struck-match note is a legitimate third use.

:::reveal You have a fifteen year old red with visible sediment and a two year old tannic red that smells closed. Describe how you would decant each, and why the treatments differ. ||| The old wine gets stood upright for a day, then poured slowly and steadily into a decanter and stopped at the neck when sediment appears, and served straight away, because the purpose is separating deposit and an old wine can flatten within half an hour of aggressive air. The young wine gets poured splashily an hour or two ahead, because the purpose there is oxygen, which softens tannin and opens a closed nose.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Jackson, R. S. (2020). *Wine science: Principles and applications* (5th ed.). Academic Press.`,
    },
    {
      slug: "somm-opening-and-storing",
      title: "41 · Opening, closures, and keeping wine alive",
      section: "Module 9 · Service and faults",
      body: `**Opening a still bottle.** Cut the foil below the lip so wine never touches metal, insert the worm slightly off centre and drive it straight down, and use the lever in two stages if your corkscrew has them. A waiter's friend with a double hinge is the only tool worth owning. If a cork breaks, push the worm in at an angle to the remaining piece rather than straight down, or push the cork through and decant.

**Opening a sparkling bottle, where carelessness causes actual injuries.** A Champagne bottle holds several atmospheres of pressure, which is a real hazard rather than an anecdote.

1. Chill it thoroughly. Cold wine holds gas better and is far less likely to gush.
2. Remove the foil and loosen the wire cage, keeping a thumb over the top from the moment the cage is loose.
3. Hold the cork still and TURN THE BOTTLE, not the cork.
4. Ease it out at an angle with a sigh, not a bang. The bang is wasted pressure and lost wine.
5. Never point it at a person, and never open a warm or shaken bottle.

**Closures, and what each one does to the wine.**

| Closure | What it means for the wine |
| --- | --- |
| **Natural cork** | Allows a small, variable amount of oxygen. Carries the risk of cork taint (Lesson 42) |
| **Technical and agglomerated corks** | Engineered from cork particles for consistency, with taint risk much reduced |
| **Screwcap** | Very consistent, eliminates cork taint, and its low oxygen ingress makes reduction more likely. Widely used for wines meant to stay fresh, and increasingly for age worthy wine |
| **Glass and crown cap** | Both used, both function, neither common |

A screwcap is not a sign of a cheap wine. That association is a marketing legacy and Australia and New Zealand demolished it years ago.

**Storage, in order of how much damage each factor does.**

1. **Heat.** The big one. Wine ages faster and worse in warm conditions, and a hot car or a warm attic can kill a bottle in a day. A stable cool temperature, roughly 10 to 15 degrees, is ideal.
2. **Temperature swings.** Repeated expansion and contraction pushes wine past the cork. A stable warm cupboard beats a fluctuating one.
3. **Light.** Ultraviolet damages wine, which is why bottles are green and brown. Keep it dark.
4. **Position.** Lie corked bottles down so the cork stays wet. Screwcapped bottles can stand up indefinitely.
5. **Humidity.** Very dry air dries corks out over years. Moderate humidity, around two thirds, is the usual target.
6. **Vibration.** Real but minor for most people. Do not store wine on top of the fridge, which combines vibration with heat anyway.

**Keeping an open bottle.** Oxygen is the enemy, so reduce the wine's contact with it. Recork and refrigerate, including reds, and pull them out to warm before serving. A vacuum pump helps a little. Decanting the remainder into a smaller bottle, filled to the top, helps a lot more, because it is the surface area that matters. Most wines are noticeably tired after two or three days. Fortified wines are the great exception: an opened Madeira or an oxidative Sherry survives for weeks or months, because the damage oxygen does has already been done deliberately.

:::reveal Why does a screwcap make reduction more likely, and why is that not an argument for cork? ||| A screwcap admits very little oxygen, and some sulfur compounds that cause reduced, struck-match or rotten-egg aromas are dissipated by small amounts of oxygen over time. So the very consistency that eliminates cork taint can leave a reductive wine reduced. It is not an argument for cork, because reduction can usually be blown off by decanting or vigorous swirling, whereas cork taint is permanent and ruins the bottle outright.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Jackson, R. S. (2020). *Wine science: Principles and applications* (5th ed.). Academic Press.`,
    },
    {
      slug: "somm-faults",
      title: "42 · The seven faults worth recognising",
      section: "Module 9 · Service and faults",
      body: `A fault is not "a wine I dislike." It is a specific, identifiable defect, and knowing them is what lets you send a bottle back with confidence and, just as importantly, NOT send one back when the wine is simply not to your taste.

**1. Cork taint (TCA).** The famous one. The compound is 2,4,6-trichloroanisole, and many people detect it at concentrations of only a few nanograms per litre, which is parts per trillion (Sefton & Simpson, 2005). It smells of wet cardboard, damp basement, or a wet dog, and in milder cases it does not smell of anything at all: it simply strips the fruit out, leaving a wine that seems muted and short. That subtle version is far more common than the obvious one, and it is why a wine that seems oddly flat deserves a second sniff. It is not harmful, it is not the drinker's fault, and it is grounds for replacement anywhere.

**2. Oxidation.** Too much oxygen, from a failed seal, poor storage or an old open bottle. Whites turn deep gold or brown and smell of bruised apple, nuts and toffee. Reds go brick coloured and lose fruit. The confusion to avoid: in Sherry, Madeira and certain traditional styles, oxidation is deliberate and correct.

**3. Volatile acidity.** Acetic acid and ethyl acetate, from acetic bacteria or from stressed fermentation. Smells of vinegar, or of nail polish remover in the ethyl acetate version. Tiny amounts add lift and complexity and are present in many great wines, so this is a matter of degree rather than a switch.

**4. Brettanomyces.** A yeast that produces compounds smelling of barnyard, sticking plaster, horse, or smoke. Genuinely divisive: small amounts read as savoury complexity to many experienced tasters, larger amounts smother fruit. It is a fault when it dominates, and calling it one at low levels will start an argument at any wine table in the world.

**5. Reduction.** Sulfur compounds giving struck match, rubber, rotten egg or boiled cabbage. Often a temporary state rather than permanent damage. Decant it, swirl it hard, give it twenty minutes. If it blows off, it was reduction and the wine underneath may be excellent. If it does not, the bottle is faulty.

**6. Heat damage.** A wine that has been cooked in transit or storage. Look for a pushed-up cork or a sticky capsule, and taste for baked, stewed, flat fruit with no freshness. Sight often catches it first, as Lesson 6 noted, because the colour is too advanced for the vintage.

**7. Refermentation.** Unintended fizz and haze in a still wine, from yeast restarting in the bottle. Rare in modern commercial wine, obvious when it happens.

**And the two things that are NOT faults, which get bottles sent back every day**

- **Sediment** in an old red. Entirely normal, and a sign the wine was not stripped by heavy filtration. Decant it.
- **Tartrate crystals**, the small clear crystals on the base of a cork or the bottom of a bottle. Harmless potassium bitartrate, precipitated by cold. They are sometimes a sign the wine was NOT cold stabilised, which some producers avoid deliberately.

:::reveal A red wine smells of rotten egg and struck match. What is your first move, and how does the result tell you whether the bottle is faulty? ||| Decant it, swirl it vigorously, and give it fifteen to twenty minutes. Those aromas are sulfur compounds, and reduction is often a temporary state that oxygen dissipates. If the smell blows off and the wine underneath is clean, it was reduction and the bottle is fine, and may be very good. If it persists after real aeration, the wine is faulty and should be replaced.

## Sources
- Sefton, M. A., & Simpson, R. F. (2005). Compounds causing cork taint and the factors affecting their transfer from natural cork closures to wine: A review. *Australian Journal of Grape and Wine Research, 11*(2), 226-240. https://doi.org/10.1111/j.1755-0238.2005.tb00290.x
- Waterhouse, A. L., Sacks, G. L., & Jeffery, D. W. (2016). *Understanding wine chemistry*. Wiley.
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.`,
    },
    {
      slug: "somm-quiz-9",
      title: "43 · Knowledge check: service and faults",
      section: "Module 9 · Service and faults",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What are the two most common service errors the course identifies?",
            options: [
              "Reds served too warm and whites served too cold",
              "Wines poured too generously and glasses filled too full",
              "Bottles opened too early and decanters left uncovered",
              "Glasses washed with detergent and stored upside down",
            ],
            correctIndex: 0,
            explanation:
              "Fifteen minutes in the fridge for a red and ten minutes on the counter for a white will improve more bottles than anything else in the module, because temperature changes aroma release, acid and tannin perception.",
            sourceLessonSlug: "somm-temperature-glass-decanting",
          },
          {
            prompt: "What does cold temperature do to a wine's perceived structure?",
            options: [
              "It softens tannin and makes acidity feel rounder and gentler",
              "It suppresses aroma, tightens acid and makes tannin feel harsher",
              "It increases the perception of alcohol and residual sweetness",
              "It has no measurable effect until the wine falls below freezing",
            ],
            correctIndex: 1,
            explanation:
              "Cold suppresses aromatic release and sharpens the structural edges, which is why chilling suits simple fresh wines and punishes tannic ones. Warmth does the reverse and makes alcohol more obvious.",
            sourceLessonSlug: "somm-temperature-glass-decanting",
          },
          {
            prompt: "How do the two purposes of decanting differ in technique?",
            options: [
              "Sediment removal needs vigorous splashing, aeration needs a slow steady pour",
              "Both require the same slow pour, differing only in the vessel used",
              "Sediment removal needs a slow careful pour, aeration wants air and time",
              "Aeration requires chilling the wine first, sediment removal does not",
            ],
            correctIndex: 2,
            explanation:
              "Separating deposit is careful work done just before serving, since an old wine can flatten with aggressive air. Opening a young closed wine is the opposite: splash it and give it an hour or two.",
            sourceLessonSlug: "somm-temperature-glass-decanting",
          },
          {
            prompt: "What is the correct technique for opening a sparkling bottle?",
            options: [
              "Hold the cork still and turn the bottle, easing it out at an angle",
              "Grip the cork firmly and twist it while holding the bottle steady",
              "Loosen the cage fully, then let internal pressure push the cork free",
              "Warm the neck slightly so the cork releases with less resistance",
            ],
            correctIndex: 0,
            explanation:
              "Several atmospheres of pressure make this a genuine hazard. Keep a thumb over the cork from the moment the cage loosens, chill the bottle thoroughly, and aim it away from people.",
            sourceLessonSlug: "somm-opening-and-storing",
          },
          {
            prompt: "Which storage factor does the course rank as doing the most damage?",
            options: [
              "Vibration from nearby appliances or passing traffic",
              "Low humidity drying out the cork over several years",
              "Storing bottles upright rather than lying them down",
              "Heat, and especially repeated swings in temperature",
            ],
            correctIndex: 3,
            explanation:
              "Heat ages wine faster and worse, and a hot car can kill a bottle in a day. Swings are worse than a stable warm cupboard, because expansion and contraction pushes wine past the cork.",
            sourceLessonSlug: "somm-opening-and-storing",
          },
          {
            prompt: "What is the most common presentation of cork taint?",
            options: [
              "An obvious smell of wet cardboard or a damp basement",
              "A subtle stripping of fruit that leaves the wine muted and short",
              "A visible haze combined with a light fizz on the palate",
              "A bruised apple and toffee character with a browning colour",
            ],
            correctIndex: 1,
            explanation:
              "The dramatic version is easy. The common one removes fruit without announcing itself, which is why a wine that seems oddly flat deserves a second sniff. Bruised apple and browning is oxidation instead.",
            sourceLessonSlug: "somm-faults",
          },
          {
            prompt: "Struck match and rotten egg aromas call for what response?",
            options: [
              "Immediate rejection, since the fault is permanent and untreatable",
              "Chilling the wine hard, which suppresses sulfur compounds",
              "Decanting and vigorous swirling, then reassessing after twenty minutes",
              "Adding a small amount of water to dilute the affected compounds",
            ],
            correctIndex: 2,
            explanation:
              "Reduction is often temporary and oxygen dissipates it. If the smell blows off the wine may be excellent, and if it survives real aeration the bottle is genuinely faulty.",
            sourceLessonSlug: "somm-faults",
          },
          {
            prompt: "Which of these is NOT a fault?",
            options: [
              "Tartrate crystals on the base of a cork or bottle",
              "A vinegar aroma dominating the wine's fruit character",
              "Baked, stewed fruit with a pushed-up cork and sticky capsule",
              "A wet cardboard aroma that strips the fruit from the palate",
            ],
            correctIndex: 0,
            explanation:
              "Tartrates are harmless potassium bitartrate precipitated by cold, and can indicate a wine that was not cold stabilised. The others describe volatile acidity, heat damage and cork taint.",
            sourceLessonSlug: "somm-faults",
          },
          {
            prompt: "Why is Brettanomyces described as divisive rather than simply bad?",
            options: [
              "It is undetectable to most tasters at any concentration",
              "It is legally permitted in some countries and banned in others",
              "It only affects white wines, which are rarely assessed for faults",
              "Small amounts read as savoury complexity, larger amounts smother fruit",
            ],
            correctIndex: 3,
            explanation:
              "It is a matter of degree, like volatile acidity. Many experienced tasters value a trace of it, and calling it a fault at low levels reliably starts an argument at a wine table.",
            sourceLessonSlug: "somm-faults",
          },
          {
            prompt: "What is the most effective way to keep an opened bottle of table wine?",
            options: [
              "Leave it on the counter so it can continue to open up",
              "Transfer it to a smaller bottle filled to the top, and refrigerate",
              "Add a splash of a stronger wine to raise the alcohol level",
              "Stand the original bottle upright without recorking it",
            ],
            correctIndex: 1,
            explanation:
              "Surface area in contact with oxygen is what matters, so a full small bottle beats a half empty large one, and cold slows everything down. Fortified wines are the exception, surviving weeks because the oxidation was deliberate.",
            sourceLessonSlug: "somm-opening-and-storing",
          },
          {
            prompt: "Why is a flute the least useful glass shape for tasting?",
            options: [
              "It concentrates bubbles and gives too little room for aroma",
              "Its thick walls transfer heat from the hand into the wine",
              "Its wide bowl allows aromatic compounds to escape too quickly",
              "Its narrow base makes swirling physically impossible to perform",
            ],
            correctIndex: 0,
            explanation:
              "A flute looks elegant and starves the nose. A normal white wine glass with a bowl to swirl in and a rim that narrows serves sparkling wine far better if you actually want to smell it.",
            sourceLessonSlug: "somm-temperature-glass-decanting",
          },
        ],
      },
    },

    // ══════════════ MODULE 10 · PAIRING ══════════════
    {
      slug: "somm-pairing-mechanics",
      title: "44 · Pairing is mechanics, not etiquette",
      section: "Module 10 · Pairing",
      recallContent: [
        {
          prompt: "Name the seven faults from the previous module, and the two things that are commonly mistaken for faults.",
          answer:
            "Cork taint, oxidation, volatile acidity, Brettanomyces, reduction, heat damage and refermentation. Sediment in an old red and tartrate crystals are both normal and harmless.",
        },
      ],
      body: `Forget red with meat and white with fish. That rule is a rough summary of a mechanism, and the mechanism itself is short enough to learn directly, at which point you can pair anything, including things no rule covers.

**The interactions that actually drive pairing.** Every one of these is something you can feel in Flight 11.

| Interaction | What happens | Use it for |
| --- | --- | --- |
| **Salt softens tannin** | Salt reduces the perception of bitterness and astringency, so a tannic red feels rounder | The single most useful trick in pairing. Salt is why cured meat and hard cheese rescue a young tannic red |
| **Fat and protein soften tannin** | Tannins bind to proteins, so the fat and protein in food occupy them instead of your saliva | Why steak and Cabernet works. It is a chemical transaction, not a tradition |
| **Acid in wine cuts fat** | High acid refreshes the palate between rich mouthfuls | Why Champagne works with fried food, and why a high acid white beats an oaked one with cream sauce |
| **Acid matches acid** | A dish with lemon or vinegar makes a low acid wine taste flat and flabby | Match or exceed the dish's acidity. Sangiovese and tomato is this rule |
| **Sweetness must not be outgunned** | If the food is sweeter than the wine, the wine tastes sour, thin and metallic | Dessert wine must be at least as sweet as the dessert |
| **Umami makes wine seem harsher** | Umami rich food increases perceived bitterness and astringency | Mushrooms, aged cheese, soy and cured fish need care. Salt and acid in the dish counteract it |
| **Alcohol amplifies chilli heat** | Ethanol intensifies capsaicin burn | With spicy food, drop the alcohol and add a little sweetness. Off dry Riesling is the classic answer |
| **Bitter adds to bitter** | Tannin plus bitter food compounds rather than balances | Be careful with very tannic reds alongside bitter greens or dark chocolate |

**The three principles those interactions collapse into.**

1. **Match weight.** A delicate wine dies under a heavy dish and vice versa. This is the one that makes red with steak and white with sole roughly work.
2. **Acid is your safety net.** A high acid wine is the most food flexible thing you can put on a table, because acid refreshes and rarely clashes.
3. **The most extreme element on the plate is what you pair with.** Not the protein. If the fish comes in a heavy cream sauce, pair with the sauce. If the chicken is coated in chilli, pair with the chilli.

**Two classic pairings, explained by the mechanism rather than the tradition.**

- **Sancerre with goat cheese.** Both come from the same place, which is the folk explanation. The mechanism is that the cheese's tartness and salt meet a wine with matching acidity, so neither flattens the other.
- **Port with Stilton.** Salt in the blue cheese softens the wine's structure, the wine's sweetness balances the cheese's savoury intensity, and both are powerful enough not to be erased.

**When it goes wrong.** The most common failures are a sweet dessert with a dry wine (the wine turns sour), a tannic red with a chilli-heavy dish (the burn and the astringency compound), and a delicate old wine with anything assertive (the food simply erases the wine).

:::reveal You are serving a spicy Thai curry. Explain, mechanically, why a high alcohol Zinfandel is a poor choice and what you would pour instead. ||| Ethanol amplifies the capsaicin burn, so a high alcohol red makes the dish hotter and the wine feel harsher, and any tannin adds astringency on top of the heat. The mechanical fix is lower alcohol plus some residual sugar, because sweetness tames the burn, so an off dry Riesling or a similar aromatic white at modest alcohol is the classic answer, and a fruity low tannin red served cool is a reasonable second choice.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.`,
    },
    {
      slug: "somm-pairing-practice",
      title: "45 · Testing the mechanics on your own tongue",
      section: "Module 10 · Pairing",
      body: `Everything in the previous lesson is falsifiable, which is unusual in wine writing and worth exploiting. This flight is a laboratory: five foods, three wines, fifteen combinations, and only one thing to record each time, what MOVED.

**Before you start, one warning about how you will be tempted to record results.** Do not write "good" or "bad." Write the direction of change. "The tannin dropped by a step." "The acid went from refreshing to sharp." "The wine tasted thinner." Direction is transferable to a wine you have never met, and a verdict is not.

**Predict first.** For each of the fifteen combinations, write your prediction before tasting. This is not busywork: predicting and then being wrong is what fixes the mechanism in memory, and simply confirming what you read teaches you far less.

**The two combinations to pay closest attention to**

- **Tannic red plus salty food.** This is the largest and most reliable effect in the whole flight, and the one you will use most often for the rest of your life.
- **Tannic red plus chilli.** The unpleasant one. Feeling how astringency and burn compound is the fastest way to stop making this mistake at a dinner table.

**After the flight, do this.** Take the three worst combinations you found and write, for each, what you would change: a different wine, or a change to the dish. "Add salt or fat to the dish" is a legitimate answer, and it is what a kitchen actually does. Pairing is a two-sided negotiation, and the food can move.

${flightCard(FLIGHT_11)}

:::reveal In the flight you record that a wine "tasted thinner" after a bite of food. Which interaction most likely produced that, and what would you change? ||| Most likely the food was sweeter or more acidic than the wine. Sweetness in the dish makes a less sweet wine read sour, thin and metallic, and a sharply acidic dish makes a lower acid wine taste flat. The fix on the wine side is to move up in sweetness or acidity to at least match the dish, and the fix on the food side is to cut the sugar or the acid, which is a legitimate move since pairing negotiates from both directions.

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.`,
    },
    {
      slug: "somm-quiz-10",
      title: "46 · Knowledge check: pairing",
      section: "Module 10 · Pairing",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does steak work with a tannic red wine?",
            options: [
              "Tannins bind to the fat and protein in the food instead of to your saliva",
              "The heat of cooked meat evaporates the alcohol in the wine",
              "Red meat and red wine share the same dominant aroma compounds",
              "Grilling produces acids that neutralise the tannins chemically",
            ],
            correctIndex: 0,
            explanation:
              "Tannin's drying grip comes from binding salivary proteins. Food that supplies its own fat and protein occupies the tannin, so the wine feels rounder. It is a transaction rather than a tradition.",
            sourceLessonSlug: "somm-pairing-mechanics",
          },
          {
            prompt: "What does the course call the single most useful trick in pairing?",
            options: [
              "Matching the wine's region to the dish's country of origin",
              "Salt softening the perception of tannin and bitterness",
              "Serving every wine two degrees cooler than usual",
              "Choosing wines older than the recipe being cooked",
            ],
            correctIndex: 1,
            explanation:
              "Salt reduces perceived bitterness and astringency, which is why cured meat and hard cheese rescue a young tannic red. It is the largest and most reliable effect in the pairing flight.",
            sourceLessonSlug: "somm-pairing-mechanics",
          },
          {
            prompt: "A dessert is sweeter than the wine served with it. What happens?",
            options: [
              "The wine tastes sweeter than it is by contrast with the dish",
              "The wine's alcohol becomes more noticeable and warming",
              "The wine tastes sour, thin and slightly metallic",
              "The pairing is neutral, since sweetness does not interact",
            ],
            correctIndex: 2,
            explanation:
              "Sweetness in food outguns a less sweet wine and strips it. The rule is that a dessert wine must be at least as sweet as the dessert it accompanies.",
            sourceLessonSlug: "somm-pairing-mechanics",
          },
          {
            prompt: "Which wine characteristic makes a chilli-heavy dish worse?",
            options: [
              "High alcohol, which amplifies the capsaicin burn",
              "High residual sugar, which coats the palate",
              "Low alcohol, which fails to cut through the spice",
              "High acidity, which reacts with the chilli oils",
            ],
            correctIndex: 0,
            explanation:
              "Ethanol intensifies the burn, and tannin adds astringency on top of it. The mechanical fix is lower alcohol plus some sweetness, which is why off dry Riesling is the classic answer to spicy food.",
            sourceLessonSlug: "somm-pairing-mechanics",
          },
          {
            prompt: "What should you pair with when the plate holds a mild protein in an assertive sauce?",
            options: [
              "The protein, since it forms the bulk of the dish by weight",
              "The most extreme element, which here is the sauce",
              "The side dishes, which set the meal's overall weight",
              "The cooking method, regardless of the ingredients used",
            ],
            correctIndex: 1,
            explanation:
              "Fish in a heavy cream sauce is a cream sauce pairing, and chicken under chilli is a chilli pairing. This is the principle that replaces red with meat and white with fish.",
            sourceLessonSlug: "somm-pairing-mechanics",
          },
          {
            prompt: "Why does umami rich food need care with wine?",
            options: [
              "It coats the tongue and blocks retronasal aroma completely",
              "It reacts with sulfites to produce an unpleasant aroma",
              "It neutralises acidity, leaving the wine tasting flabby",
              "It increases the perception of bitterness and astringency",
            ],
            correctIndex: 3,
            explanation:
              "Mushrooms, aged cheese, soy and cured fish can make a wine seem harsher than it is. Salt and acid in the dish counteract the effect, which is why seasoning matters to a pairing.",
            sourceLessonSlug: "somm-pairing-mechanics",
          },
          {
            prompt: "Why is a high acid wine described as the most food flexible choice?",
            options: [
              "Acid refreshes the palate and rarely clashes with a dish",
              "Acid masks any fault that might be present in the wine",
              "High acid wines are always lower in alcohol than other wines",
              "Acid prevents the food from changing the wine's structure at all",
            ],
            correctIndex: 0,
            explanation:
              "Acid cuts fat and matches acidic dishes, so it works across a very wide range of food. Food does still change the wine, which is the entire point of running the pairing flight.",
            sourceLessonSlug: "somm-pairing-mechanics",
          },
          {
            prompt: "When recording results in the pairing flight, what should you write down?",
            options: [
              "A verdict on whether each combination was good or bad",
              "The direction of change in each structural component",
              "A score out of ten for every one of the combinations",
              "Which of the two, the wine or the food, you preferred alone",
            ],
            correctIndex: 1,
            explanation:
              "Direction transfers to wines you have never met. A verdict does not, because it only describes the specific pair in front of you on that day.",
            sourceLessonSlug: "somm-pairing-practice",
          },
          {
            prompt: "What is the mechanical explanation for Port with Stilton?",
            options: [
              "Both originate in the same region, which guarantees a match",
              "The cheese's fat is the only element interacting with the wine",
              "Blue cheese contains no salt, so it cannot alter the wine",
              "Salt softens the wine's structure, and both are intense enough to survive each other",
            ],
            correctIndex: 3,
            explanation:
              "Salt in the cheese softens the wine, the wine's sweetness balances the cheese's savoury intensity, and matched weight keeps either from erasing the other. Geography is the folk explanation rather than the mechanism.",
            sourceLessonSlug: "somm-pairing-mechanics",
          },
          {
            prompt: "Why does the course tell you to predict each pairing result before tasting it?",
            options: [
              "Being wrong about a prediction fixes the mechanism in memory",
              "Predictions are required to calculate a pairing score afterwards",
              "It prevents the food from altering your perception of the wine",
              "Predicting speeds the flight up by reducing tasting time",
            ],
            correctIndex: 0,
            explanation:
              "Confirming something you just read teaches very little. Committing to a prediction and finding it wrong is what makes the interaction stick, which is why the flight asks for fifteen written guesses.",
            sourceLessonSlug: "somm-pairing-practice",
          },
        ],
      },
    },

    // ══════════════ MODULE 11 · DEDUCTION ══════════════
    {
      slug: "somm-deduction-grid",
      title: "47 · The deduction grid",
      section: "Module 11 · Deduction",
      recallContent: [
        {
          prompt: "State the three principles that all the pairing interactions collapse into.",
          answer:
            "Match the weight of the wine to the weight of the dish. Treat acid as your safety net, since a high acid wine is the most food flexible. And pair with the most extreme element on the plate, which is often the sauce or the spice rather than the protein.",
        },
      ],
      body: `Blind tasting is deduction, not recognition. Nobody recognises wines. What good tasters do is gather evidence in a fixed order, eliminate possibilities, and arrive at the most defensible conclusion. The conclusion is often wrong. The PROCESS is what gets graded, and it is the process that makes you better at every other part of this course.

**The order, and why each step comes where it does.**

**Step 1: Structure, before anything else.** Score all six components. Structure is the least suggestible evidence you have, and it eliminates more than aroma does. High tannin with a pale colour has already removed most of the world's red grapes.

**Step 2: Climate.** Use the four things that move together from Module 4: acid, alcohol, fruit ripeness, body. Climate is the call you will get right most often, and it should be made before you think about a grape, because it narrows the grape list enormously.

**Step 3: Winemaking.** Ask what was DONE to this wine. Oak, and if so how new and what origin. Malolactic conversion. Lees. Carbonic. Skin contact. Getting this wrong is what sends people down a wrong grape path, because oak vanilla and carbonic banana are constantly mistaken for varietal character.

**Step 4: Grape or grape family.** Only now. Use the markers from Module 3, and prefer a family to a name when the evidence is thin. "A thin skinned, high acid red" is a better answer than a confident wrong grape.

**Step 5: Age.** Colour at the rim, the balance of primary to tertiary aromas, and how integrated the tannin feels. Ranges, not years: young, moderate, or with real age.

**Step 6: Conclusion and quality.** Commit to a call. Then judge quality separately, using balance, length, intensity and complexity, and note whether the wine is ready.

**The discipline that makes it work.** Write everything down before you speak. Never revise an earlier observation to fit a later guess, which is the single most common failure and it feels exactly like insight while you are doing it. If step 4 contradicts step 1, step 1 usually wins, because structure is harder to talk yourself into than aroma.

**How accurate should you expect to be?** Not very, and this is worth saying plainly. Even professional judging is far less consistent than the confidence around it suggests: Hodgson (2008) found that judges at a major competition often failed to replicate their own scores on the same wine within the same event. Expect to call climate correctly most of the time, style and winemaking often, grape sometimes, and precise appellation and vintage rarely. Anyone claiming otherwise is performing.

:::reveal Your structural evidence says high tannin and pale colour, but the aroma makes you want to call a Syrah. Which do you trust and why? ||| Trust the structure. Syrah is not pale, so the structural evidence has already eliminated it, and the temptation to revise an earlier observation to fit a later guess is the single most common failure in blind tasting. Pale plus high tannin plus high acid points at Nebbiolo, and the honest move is to record the conflict rather than quietly downgrade what you observed first.

## Sources
- Hodgson, R. T. (2008). An examination of judge reliability at a major U.S. wine competition. *Journal of Wine Economics, 3*(2), 105-113. https://doi.org/10.1017/S1931436100001152
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.`,
    },
    {
      slug: "somm-calling-a-wine",
      title: "48 · Calling a wine, and being wrong usefully",
      section: "Module 11 · Deduction",
      body: `Two worked examples, then the flight where you do it yourself.

**Worked example one.**

> Pale lemon, no rim development. Pronounced nose: grass, gooseberry, passionfruit, no oak markers. Dry. Very high acid. No tannin. Medium alcohol, around 12.5%. Light to medium body. Medium finish.

Reasoning: no oak and no tertiary character, so young and unoaked. Very high acid with modest alcohol means a cool climate or an early pick. The green plus tropical combination is pyrazines and thiols together, which is a narrow door. Conclusion: Sauvignon Blanc, cool climate, one to three years old. If pressed on origin, the loud tropical end suggests New Zealand, the more restrained and mineral end suggests the Loire. Quality: judge on length and balance, not on how loud it is.

**Worked example two.**

> Medium ruby with a garnet rim. Medium intensity nose: dried cherry, tobacco, leather, dried herbs. Dry. Very high acid. High, slightly grainy tannin. Medium alcohol. Medium body. Long finish.

Reasoning: a garnet rim with leather and tobacco means real age, so at least eight to ten years. Very high acid with high tannin and only medium body is not a warm climate profile. The savoury, herbal, sour cherry direction narrows sharply. Conclusion: Sangiovese from Tuscany with roughly a decade of age, or Nebbiolo if the colour were paler and the tannin finer. Note the honesty of that last clause: naming your second choice and the evidence that would have switched you is what a good tasting note does.

**The three habits that separate a useful call from a lucky one**

1. **Name your second choice.** And say which single observation would have moved you to it. That sentence is worth more than the primary call.
2. **Say the confidence out loud.** "Cool climate, high confidence. Grape, low confidence." A calibrated taster is more useful than a confident one.
3. **Record your errors by TYPE.** Not "I said Merlot and it was Syrah," but "I under-called acid again," or "I read oak as ripeness again." Errors cluster by type, and your own list of two or three recurring errors is the fastest improvement available to you.

${flightCard(FLIGHT_12)}

:::reveal Why is naming your second choice and the observation that would have switched you more valuable than the primary call? ||| Because it makes the reasoning inspectable and improvable, where a bare guess is only right or wrong. It shows which evidence you actually weighted, exposes the specific observation you were least sure of, and when you turn out to be wrong it tells you immediately whether the failure was in the observation or in the inference drawn from it. That distinction is what lets errors be sorted by type, which is the fastest route to getting better.

## Sources
- Hodgson, R. T. (2008). An examination of judge reliability at a major U.S. wine competition. *Journal of Wine Economics, 3*(2), 105-113. https://doi.org/10.1017/S1931436100001152
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.`,
    },
    {
      slug: "somm-quiz-11",
      title: "49 · Knowledge check: deduction",
      section: "Module 11 · Deduction",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does the deduction grid score structure before considering the grape?",
            options: [
              "Structure is the least suggestible evidence and eliminates the most options",
              "Structure is the only element that appears on a certification score sheet",
              "Aroma compounds fade too quickly to be assessed reliably at all",
              "Grape identification is considered irrelevant to a professional taster",
            ],
            correctIndex: 0,
            explanation:
              "High tannin with a pale colour has already removed most red grapes before you smell anything. Structure is also much harder to talk yourself into than aroma is.",
            sourceLessonSlug: "somm-deduction-grid",
          },
          {
            prompt: "Which call should a taster expect to get right most often?",
            options: [
              "The exact vintage year of the wine",
              "The precise appellation the wine came from",
              "The climate the grapes were grown in",
              "The specific producer who made the wine",
            ],
            correctIndex: 2,
            explanation:
              "Climate moves four structural things together and is readable directly. Grape is sometimes gettable, and precise appellation and vintage are rarely reliable even for professionals.",
            sourceLessonSlug: "somm-deduction-grid",
          },
          {
            prompt: "What does Hodgson's (2008) study of a major competition establish?",
            options: [
              "That judges reliably agree with each other on the best wines",
              "That judges often failed to replicate their own scores on the same wine",
              "That blind tasting produces more accurate results than sighted tasting",
              "That expert judges outperform amateurs by a very wide margin",
            ],
            correctIndex: 1,
            explanation:
              "Self-consistency within a single event was poor, which is the honest backdrop for anyone claiming high blind tasting accuracy. It is a reason for calibration rather than for cynicism.",
            sourceLessonSlug: "somm-deduction-grid",
          },
          {
            prompt: "Your structural evidence conflicts with the grape your nose wants to call. What do you do?",
            options: [
              "Revise the structural scores so the evidence fits the grape",
              "Discard both and start the assessment over from the beginning",
              "Average the two and record a conclusion somewhere between them",
              "Trust the structure and record the conflict openly in your note",
            ],
            correctIndex: 3,
            explanation:
              "Quietly revising an earlier observation to fit a later guess is the most common failure in blind tasting, and it feels like insight while it is happening. Structure is the more reliable evidence.",
            sourceLessonSlug: "somm-deduction-grid",
          },
          {
            prompt: "Why should a taster record errors by TYPE rather than by wine?",
            options: [
              "Errors cluster by type, so a short list of recurring ones drives improvement",
              "Recording by wine is prohibited under standard tasting protocols",
              "Error types are needed to calculate an overall accuracy percentage",
              "Wines change between vintages, so the specific wine is irrelevant",
            ],
            correctIndex: 0,
            explanation:
              "'I under-called acid again' is actionable where 'I said Merlot and it was Syrah' is not. Two or three recurring error types are usually the fastest improvement available.",
            sourceLessonSlug: "somm-calling-a-wine",
          },
          {
            prompt: "What makes naming a second choice so valuable in a tasting note?",
            options: [
              "It doubles the chance that one of the two calls is correct",
              "It shows the reasoning, and identifies which observation was weakest",
              "It is required before a conclusion can be considered complete",
              "It allows other tasters to score the note more consistently",
            ],
            correctIndex: 1,
            explanation:
              "Naming the observation that would have switched you makes the reasoning inspectable, so a wrong call tells you whether the failure was in the observation or in the inference.",
            sourceLessonSlug: "somm-calling-a-wine",
          },
          {
            prompt: "In the grid, why does winemaking get assessed before the grape?",
            options: [
              "Winemaking is easier to identify than any structural component",
              "Grape character disappears entirely once a wine is oaked",
              "Oak and carbonic markers are routinely mistaken for varietal character",
              "Winemaking determines the legal appellation the wine can claim",
            ],
            correctIndex: 2,
            explanation:
              "Vanilla from oak and banana from carbonic maceration send tasters down wrong grape paths constantly. Naming the cellar decisions first removes them from the evidence pool.",
            sourceLessonSlug: "somm-deduction-grid",
          },
          {
            prompt: "A wine shows a garnet rim, leather, tobacco and dried cherry. What does that combination indicate?",
            options: [
              "A young wine that has been aged in heavily toasted new oak",
              "A wine with real bottle age, likely eight to ten years or more",
              "A wine that has suffered heat damage during shipping",
              "A wine made by carbonic maceration and released early",
            ],
            correctIndex: 1,
            explanation:
              "A garnet rim is the colour reading for age, and leather and tobacco are tertiary aromas. Heat damage reads as baked and flat fruit rather than as this developed, savoury complexity.",
            sourceLessonSlug: "somm-calling-a-wine",
          },
          {
            prompt: "What does the course recommend when the evidence for a specific grape is thin?",
            options: [
              "Name a grape family rather than committing to a single variety",
              "Decline to offer any conclusion at all about the wine",
              "Choose the most widely planted grape matching the profile",
              "Guess the most expensive grape that fits the observations",
            ],
            correctIndex: 0,
            explanation:
              "'A thin skinned, high acid red' is a better and more defensible answer than a confident wrong grape, and it keeps the note honest about how much the evidence actually supports.",
            sourceLessonSlug: "somm-deduction-grid",
          },
          {
            prompt: "Why does the blind flight ask you to reveal all six wines at once rather than one at a time?",
            options: [
              "It saves time and keeps the tasting to a single sitting",
              "Revealing individually is prohibited in formal examinations",
              "An early miss would distort the calls you make on the rest",
              "The wines must be compared simultaneously to be scored fairly",
            ],
            correctIndex: 2,
            explanation:
              "Learning you were wrong on wine two changes how you approach wines three through six, which contaminates the exercise. Committing to all six in writing first keeps each call independent.",
            sourceLessonSlug: "somm-calling-a-wine",
          },
        ],
      },
    },

    // ══════════════ MODULE 12 · CLOSE ══════════════
    {
      slug: "somm-capstone",
      title: "50 · Capstone: buy, taste, and defend three bottles",
      section: "Module 12 · Close",
      lessonType: "assignment",
      body: `One assignment, three bottles, and a written defence. It is designed so that nobody can complete it by reading, and so that a learner on the no-alcohol path can complete it fully.

**The brief.** You are choosing wine for a specific meal, for four people, with a total budget of sixty US dollars for three bottles. Pick any meal you like, including one you actually intend to cook. Then buy, taste and defend.

**What to submit.**

**1. The brief you set yourself.** The meal, in enough detail to pair against: the protein, the cooking method, the sauce, the seasoning, and which element is the most extreme one on the plate.

**2. Three bottles, with reasoning.** For each: what you bought, what it cost, and WHY, referencing at least one mechanism from Module 10 and one piece of label evidence from Module 6. At least one of the three must come from a place where value structurally hides (Lesson 37), and you must say which category it falls into and why that category is underpriced.

**3. A full tasting note on each**, on the grid from Module 2: sight, nose, all six structural components, conclusion. Scores must be defended by sensation, not by expectation.

**4. A blind call on one of the three.** Have someone pour one of them without telling you which. Work the deduction grid from Module 47, commit to a written conclusion, then reveal. Include your call, the reveal, and, if you were wrong, the ONE observation that should have redirected you.

**5. The pairing result.** What actually happened at the meal. Which of the three worked, which did not, and what MOVED in each wine when food arrived. A pairing that failed, analysed honestly, scores exactly as well here as one that worked.

**6. Your price ceiling.** From Flight 10 and this assignment, where does more money stop buying you pleasure? Give a number and the evidence behind it.

**The no-alcohol version.** Identical structure. Substitute three non-alcoholic drinks chosen to differ on acid, sweetness and grip (the substitution table in every flight card gives you the pattern), pair them against the same meal, run the same tasting grid minus the alcohol line, and run the blind call on one of the three. Every mechanism in Module 10 except the alcohol and chilli interaction is testable this way, and the assignment is graded identically.

**What a strong submission looks like.** It is specific, it cites its own evidence, and it admits at least one thing that went wrong. A submission where all three bottles were perfect and every prediction was correct is a submission that was not really tested.`,
    },
    {
      slug: "somm-cumulative-review",
      title: "51 · Cumulative review: the whole course on one page",
      section: "Module 12 · Close",
      body: `**The grid.** Sight, nose, palate, conclusion, in that order, because it runs from least suggestible evidence to most, and the order is a defence against your own confirmation bias.

**The six structural components**, each with its own address in your mouth: sweetness at the tip, acidity at the sides as salivation, tannin as a drying grip on the gums, alcohol as warmth after swallowing, body as weight, finish counted in seconds. Score them before describing flavour, because structure is close to measurable and flavour is associative.

**The three aroma buckets.** Primary from grape and fermentation, secondary from winemaking (oak, malolactic, lees), tertiary from age. Sorting an aroma into a bucket is what turns a descriptor into information.

**Quality is not preference.** Balance, length, intensity, complexity are the four criteria, and balance is the one a beginner can feel first. You should be able to say "this is excellent and I do not enjoy it" without embarrassment.

**Climate moves four things together.** Warmer means more sugar and less acid, so alcohol and body rise, fruit moves from fresh toward cooked and dried, and tannins ripen. Two of the four is a hypothesis, four is a call. A large diurnal range is what explains the exceptions.

**Terroir is real, and rock does not travel into the glass.** Soil works through drainage, heat and root depth. Minerality is a genuine perception with other causes.

**The cellar imitates the grape, constantly.** Butter is malolactic. Vanilla and coconut are oak. Banana is carbonic. Bread is lees. Naming the winemaking first is what keeps you from misreading the variety.

**Labels are legal documents.** Old World labels answer WHERE and carry more enforceable content. New World labels answer WHAT and carry percentage rules. Reserve means nothing in the United States. The German Pradikat ladder ranks ripeness at harvest, not sweetness, so read the alcohol.

**Price is mostly fixed costs at the bottom.** Which is why cheap to mid is the biggest quality jump you will ever buy, and why finding your own ceiling matters more than anybody's score.

**Service ruins more wine than winemaking does.** Reds too warm, whites too cold, and both fixable in ten minutes. Decant for sediment gently and late, decant for air early and roughly.

**Faults are specific.** Cork taint, oxidation, volatile acidity, brett, reduction, heat damage, refermentation. Sediment and tartrates are not faults. Reduction may blow off, so decant before you judge.

**Pairing is mechanics.** Salt and fat soften tannin. Acid cuts fat and must match the dish. The wine must be at least as sweet as the dessert. Alcohol amplifies chilli. Pair with the most extreme element on the plate.

**Deduction is a process, not a party trick.** Structure, climate, winemaking, grape, age, conclusion. Name your second choice. State your confidence. Record errors by type.

**And the one habit underneath all of it:** taste comparatively, write before you speak, and defend every score by pointing at a sensation.

:::reveal Without looking back, name the six structural components and where each is felt, then the three aroma buckets and what each one tells you about the wine. ||| Sweetness at the tip of the tongue, acidity at the sides felt as salivation, tannin as a drying grip on the gums and cheeks, alcohol as warmth after swallowing or spitting, body as weight on the tongue, and finish counted in seconds after the wine is gone. The buckets are primary (grape and fermentation, so it tells you about the variety and ripeness), secondary (winemaking, so it tells you what someone decided to do), and tertiary (age, so it tells you the wine has time on it and something about how it was stored).

## Sources
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Waterhouse, A. L., Sacks, G. L., & Jeffery, D. W. (2016). *Understanding wine chemistry*. Wiley.
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.`,
    },
    {
      slug: "somm-sources",
      title: "52 · Sources, and how to keep learning",
      section: "Module 12 · Close",
      body: `Every factual claim in this course is tied to a source, and the ones doing the heaviest lifting are gathered here. Where a rule is set by law, the law is cited rather than a summary of it, because appellation and labelling rules change and a secondary summary goes stale quietly.

**How to keep learning, in order of return on effort**

1. **Taste comparatively and write it down.** Two wines side by side, in a fixed note format, beats any amount of reading. A year of notes is the most valuable wine document you will ever own, because it is in your vocabulary.
2. **Join or start a group.** Blind tasting alone is possible and much harder. Four people splitting six bottles costs each of you very little and doubles the learning rate.
3. **Buy the same wine twice, years apart.** Almost nobody does this, and it teaches ageing in a way no book can.
4. **Read the law when a label confuses you.** The regulations below are public, free, and much clearer than most of what is written about them.
5. **Go back to Episode 9.** The history is not decoration. Knowing why the Dop system existed, what phylloxera did, and what the Judgment of Paris changed makes the map of modern wine legible in a way tasting alone does not.

**A closing note on what this course is.** It taught you a method, roughly twenty grapes, a set of legal systems, and a way of being honest about what you can and cannot tell from a glass. It is not a certification, it is not affiliated with any certifying body, and it does not prepare you for their examinations. If it has done its job, you can walk into a shop with forty dollars and come out with something you will genuinely enjoy, and explain to somebody else why.

## Sources

**Law and regulation**
- Alcohol and Tobacco Tax and Trade Bureau. (n.d.). *Labeling and advertising of wine* (27 C.F.R. Part 4). https://www.ecfr.gov/current/title-27/chapter-I/subchapter-A/part-4
- Alcohol and Tobacco Tax and Trade Bureau. (n.d.). *American viticultural areas* (27 C.F.R. Part 9). https://www.ecfr.gov/current/title-27/chapter-I/subchapter-A/part-9
- Commission Delegated Regulation (EU) 2019/33 of 17 October 2018 supplementing Regulation (EU) No 1308/2013 as regards applications for protection of designations of origin, geographical indications and traditional terms, labelling and presentation. *Official Journal of the European Union, L 9*, 2-45.
- Commission Delegated Regulation (EU) 2019/934 of 12 March 2019 supplementing Regulation (EU) No 1308/2013 as regards wine-growing areas, oenological practices and the applicable restrictions. *Official Journal of the European Union, L 149*, 1-52.
- Regulation (EU) No 1308/2013 of the European Parliament and of the Council of 17 December 2013 establishing a common organisation of the markets in agricultural products. *Official Journal of the European Union, L 347*, 671-854.

**Regulators and trade bodies**
- Comite Champagne. (n.d.). *The Champagne appellation and its rules*. https://www.champagne.fr
- Consejo Regulador DOCa Rioja. (n.d.). *Ageing categories*. https://www.riojawine.com
- Institut national de l'origine et de la qualite. (n.d.). *Les signes officiels de la qualite et de l'origine*. https://www.inao.gouv.fr
- International Organisation of Vine and Wine. (2021). *OIV standard for international wine competitions and spirituous beverages of vitivinicultural origin*. OIV. https://www.oiv.int
- Verband Deutscher Pradikatsweinguter. (n.d.). *The VDP classification*. https://www.vdp.de
- Wine Australia. (n.d.). *Label Integrity Programme*. https://www.wineaustralia.com

**Science**
- Bartoshuk, L. M. (2000). Comparing sensory experiences across individuals: Recent psychophysical advances illuminate genetic variation in taste perception. *Chemical Senses, 25*(4), 447-460. https://doi.org/10.1093/chemse/25.4.447
- Bowers, J. E., & Meredith, C. P. (1997). The parentage of a classic wine grape, Cabernet Sauvignon. *Nature Genetics, 16*(1), 84-87. https://doi.org/10.1038/ng0597-84
- Bowers, J., Boursiquot, J.-M., This, P., Chu, K., Johansson, H., & Meredith, C. (1999). Historical genetics: The parentage of Chardonnay, Gamay, and other wine grapes of northeastern France. *Science, 285*(5433), 1562-1565. https://doi.org/10.1126/science.285.5433.1562
- Buck, L., & Axel, R. (1991). A novel multigene family may encode odorant receptors: A molecular basis for odor recognition. *Cell, 65*(1), 175-187. https://doi.org/10.1016/0092-8674(91)90418-X
- Jackson, R. S. (2020). *Wine science: Principles and applications* (5th ed.). Academic Press.
- Jones, G. V., White, M. A., Cooper, O. R., & Storchmann, K. (2005). Climate change and global wine quality. *Climatic Change, 73*(3), 319-343. https://doi.org/10.1007/s10584-005-4704-2
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.
- Maletic, E., Pejic, I., Kontic, J. K., Piljac, J., Dangl, G. S., Vokurka, A., Lacombe, T., Mirosevic, N., & Meredith, C. P. (2004). Zinfandel, Dobricic, and Plavac Mali: The genetic relationships among three cultivars of the Dalmatian coast of Croatia. *American Journal of Enology and Viticulture, 55*(2), 174-180.
- Maltman, A. (2013). Minerality in wine: A geological perspective. *Journal of Wine Research, 24*(3), 169-181. https://doi.org/10.1080/09571264.2013.793176
- Sefton, M. A., & Simpson, R. F. (2005). Compounds causing cork taint and the factors affecting their transfer from natural cork closures to wine: A review. *Australian Journal of Grape and Wine Research, 11*(2), 226-240. https://doi.org/10.1111/j.1755-0238.2005.tb00290.x
- van Leeuwen, C., & Seguin, G. (2006). The concept of terroir in viticulture. *Journal of Wine Research, 17*(1), 1-10. https://doi.org/10.1080/09571260600633135
- Waterhouse, A. L., Sacks, G. L., & Jeffery, D. W. (2016). *Understanding wine chemistry*. Wiley.
- Wood, C., Siebert, T. E., Parker, M., Capone, D. L., Elsey, G. M., Pollnitz, A. P., Eggers, M., Meier, M., Vossing, T., Widder, S., Krammer, G., Sefton, M. A., & Herderich, M. J. (2008). From wine to pepper: Rotundone, an obscure sesquiterpene, is a potent spicy aroma compound. *Journal of Agricultural and Food Chemistry, 56*(10), 3738-3744. https://doi.org/10.1021/jf800183k

**Economics and judging**
- Goldstein, R., Almenberg, J., Dreber, A., Emerson, J. W., Herschkowitsch, A., & Katz, J. (2008). Do more expensive wines taste better? Evidence from a large sample of blind tastings. *Journal of Wine Economics, 3*(1), 1-9. https://doi.org/10.1017/S1931436100000523
- Hodgson, R. T. (2008). An examination of judge reliability at a major U.S. wine competition. *Journal of Wine Economics, 3*(2), 105-113. https://doi.org/10.1017/S1931436100001152

**Reference**
- International Organization for Standardization. (1977). *Sensory analysis: Apparatus. Wine-tasting glass* (ISO 3591:1977). ISO.
- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.
- Robinson, J., Harding, J., & Vouillamoz, J. (2012). *Wine grapes: A complete guide to 1,368 vine varieties, including their origins and flavours*. Ecco.`,
    },
  ],
};
