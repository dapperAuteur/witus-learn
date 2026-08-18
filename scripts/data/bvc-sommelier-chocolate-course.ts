// Authored "BVC Sommelier: Chocolate" — course #3 in the BVC Sommelier series
// (plans/53-bvc-sommelier-series-wine.md). Sequel to BVC Season 1, Episode 3, "Chocolate": that
// episode covers the sacred Maya and Aztec currency and the fact that most cacao now grows in West
// Africa. This one teaches the learner to taste chocolate systematically and buy it knowingly.
//
// NOT age-gated, like coffee.
//
// SOURCING DISCIPLINE:
//   * The Criollo / Forastero / Trinitario framework almost every chocolate book still uses is
//     OUT OF DATE, and this course says so: Motamayor et al. (2008) resolved cacao into ten
//     genetic clusters. Teaching the old three as current would be the chocolate equivalent of
//     teaching rock-to-glass minerality in the wine course, so it gets the same treatment: the
//     folklore is named, and then corrected with the citation.
//   * Composition rules are cited to the standards of identity, not to marketing: 21 CFR Part 163
//     in the United States and Directive 2000/36/EC in the EU. Those are what a percentage on a
//     wrapper legally means, and what it does not.
//   * The cocoa butter polymorph numbering (six crystal forms, Form V being the one a tempered bar
//     wants) is cited to the crystallography rather than asserted, because half the popular
//     writing on tempering garbles it.
//   * The child labour figure comes from the NORC at the University of Chicago report commissioned
//     on the subject, with its survey years stated, rather than from a round number in circulation.
//     A course that raises the ethics and then cites nothing is worse than one that stays silent.
//   * NO health or efficacy claims. Flavanols appear once, as something alkalisation reduces, with
//     no assertion about what they do for a person. That restraint is deliberate.
//   * No maker is ever named as a recommendation, for the same reason no producer is named in wine
//     or coffee.
//
// The ALTERNATE PATH on every flight is dairy and sugar rather than alcohol or caffeine, since
// those are the constraints that actually exclude people from a chocolate tasting. The `alternate`
// field on the shared Flight type is required, so it cannot be dropped by omission.

import type { AuthoredCourse } from "./authored-course";
import { flightCard, type Flight } from "../lib/sommelier";

const ALT = "Dairy-free and lower-sugar";

const CHOCOLATE_METHOD_NOTE = `> **Let it melt. Do not chew.** Chocolate is the one tasting in this series where the texture IS half the data, and chewing destroys it. Break a piece, listen to the snap, warm it against the roof of your mouth and let it melt with your tongue still. Aroma builds as it melts and the finish keeps changing for a minute after the chocolate is gone, which is why the grid below asks you to wait. Cleanse with plain water and, if you need it, a plain unsalted cracker. Palate fatigue arrives fast with chocolate: five or six samples is a full session, and past that you are guessing.`;

// ─────────────────────────────── FLIGHTS ───────────────────────────────

const FLIGHT_0: Flight = {
  n: 0,
  title: "The calibration set (no chocolate required)",
  teaches: "Bitterness, astringency, acidity and body as separate sensations, before any bar is involved.",
  tier: "core",
  bottles: [
    { role: "Bitterness, isolated", target: "A bar of unsweetened baking chocolate, 100% cacao", priceUsd: "4-8" },
    { role: "Astringency, three strengths", target: "A box of plain black tea", priceUsd: "3-5" },
    { role: "Acidity", target: "One lemon and a glass of water", priceUsd: "1-2" },
    { role: "Body and melt", target: "Butter, and a hard vegetable-fat margarine or shortening", priceUsd: "4-8" },
  ],
  procedure: [
    "Taste a shaving of the 100% bar. Do not swallow immediately. This is what cacao tastes like with nothing added, and it is most people's first honest encounter with pure bitterness.",
    "Steep one tea bag for four, eight and twelve minutes and sip each. The rising DRYING GRIP on your gums is astringency, and it is not bitterness, though they arrive together in the 100% bar.",
    "Lemon in water at rising strength. Notice the salivation at the sides of the tongue. Cacao has real acidity too, and most people have never looked for it.",
    "Put a small piece of butter on your tongue and let it melt, then do the same with the hard fat. Note the temperature at which each gives way and how each coats your mouth. Cocoa butter's melt is the single most engineered property in chocolate, and this is the comparison that makes you notice it.",
    "Write one sentence per sensation in your own words.",
  ],
  lookFor:
    "You can separate bitterness from astringency out loud, and you noticed that a fat's melting point changes the entire experience of eating it.",
  alternate: "Already dairy free and sugar free apart from the butter, which the hard vegetable fat substitutes for on its own. Run it first either way.",
};

const FLIGHT_1: Flight = {
  n: 1,
  title: "One origin, four percentages",
  teaches: "What the number on the wrapper actually changes, and what it does not.",
  tier: "core",
  bottles: [
    { role: "Milk", target: "A milk chocolate, ideally from a maker who also sells dark", priceUsd: "4-9" },
    { role: "Low dark", target: "A bar around 55 to 65 percent", priceUsd: "5-10" },
    { role: "Mid dark", target: "A bar around 70 to 75 percent", priceUsd: "6-12" },
    { role: "High dark", target: "A bar at 85 percent or above", priceUsd: "6-12" },
  ],
  procedure: [
    "Buy all four from the SAME maker if you can. Otherwise the maker's style will masquerade as the percentage effect, which is the mistake this flight exists to prevent.",
    "Taste in ascending order, milk to highest. Let each melt. Cleanse with water between.",
    "Score bitterness, astringency, acidity, sweetness and how long the finish lasts.",
    "Now the actual lesson: read the ingredient lists side by side. Ask which bar has more COCOA BUTTER added versus more cocoa mass, because both raise the percentage and only one raises the intensity.",
    "Rank them by how much you enjoyed them, separately from how intense they were. Those two rankings are rarely the same, and the gap between them is worth a paragraph in your notes.",
  ],
  lookFor:
    "You can explain to someone why an 85 percent bar is not necessarily more intense than a 70 percent one.",
  alternate:
    "Dark chocolate at 70 percent and above is usually dairy free already, so run the three dark bars and substitute a dairy-free milk-style bar (oat or rice based) for the milk. For lower sugar, note that percentage IS the sugar dial: an 85 percent bar is roughly 15 percent everything else, most of which is sugar, so ascending the ladder is itself a descending sugar ladder.",
};

const FLIGHT_2: Flight = {
  n: 2,
  title: "Four origins, one percentage",
  teaches: "That cacao has origin character as legible as coffee's, once the percentage stops varying.",
  tier: "core",
  bottles: [
    { role: "Latin America", target: "A single origin bar from Ecuador, Peru or Venezuela, 70 percent", priceUsd: "8-14" },
    { role: "West Africa", target: "A single origin from Ghana, Cote d'Ivoire or Tanzania, 70 percent", priceUsd: "8-14" },
    { role: "Island or Caribbean", target: "A single origin from Madagascar, the Dominican Republic or Trinidad, 70 percent", priceUsd: "8-14" },
    { role: "Asia or Oceania", target: "A single origin from Vietnam, Papua New Guinea or India, 70 percent", priceUsd: "8-16" },
  ],
  procedure: [
    "All four at the same percentage, ideally 70, and from as few makers as you can manage. Percentage and maker are the variables you are holding still.",
    "Taste blind if someone will unwrap them for you. Origin bars are the flight where knowing the label most distorts the note.",
    "Score acidity FIRST on all four, before flavor. Madagascar in particular tends to arrive with a citric brightness people do not expect from chocolate, and finding it is the moment the course usually clicks.",
    "Then score bitterness and astringency, then look for flavor: red fruit, dried fruit, nuts, earth, smoke, floral, spice.",
    "Write which one you would buy again and why, in plain language, without using the word notes.",
  ],
  lookFor:
    "You found real acidity in at least one bar and can describe how two origins differ without mentioning the percentage.",
  alternate: "Single origin dark bars at 70 percent are almost always dairy free, so this flight runs unchanged. If sugar is the constraint, source the same origins at 85 percent instead and hold THAT number still across all four.",
};

const FLIGHT_3: Flight = {
  n: 3,
  title: "Process, and what the factory decided",
  teaches: "Separating the bean from the maker's decisions, which is this course's version of telling grape from oak.",
  tier: "core",
  bottles: [
    { role: "Craft, minimally processed", target: "A bean-to-bar maker's 70 percent, ingredients list of two or three items", priceUsd: "8-14" },
    { role: "Industrial, long conched", target: "A mainstream supermarket dark bar at a similar percentage", priceUsd: "3-6" },
    { role: "Alkalised", target: "Any product listing cocoa processed with alkali, or Dutch process cocoa powder", priceUsd: "4-8" },
    { role: "Natural cocoa, as the control", target: "A natural, non-alkalised cocoa powder", priceUsd: "4-8" },
  ],
  procedure: [
    "Taste the two bars against each other. Score acidity and astringency first. Long conching drives off volatile acids, so the industrial bar is usually rounder, smoother and quieter, and the craft bar louder and sometimes rougher.",
    "Decide honestly which you prefer, and notice that the answer is allowed to be the industrial one. Smoothness is a real achievement, not a compromise.",
    "Now the two cocoa powders. Mix each with a little hot water and compare color and taste side by side.",
    "The alkalised one will be darker and markedly less sharp. That is Dutching, and it is a chemical decision made for color and mildness.",
    "Read all four ingredient lists. Count how many things are in each, and note where lecithin, vanilla and added cocoa butter appear.",
  ],
  lookFor:
    "You can taste a bar and say something specific about how it was PROCESSED, not only where it came from.",
  alternate: "Every item here is dairy free if you choose dark bars, and the two cocoa powders are unsweetened. For lower sugar, the cocoa powder half of this flight carries the entire lesson on its own.",
};

const FLIGHT_4: Flight = {
  n: 4,
  title: "Temper and bloom, deliberately broken",
  teaches: "Why a bar snaps and shines, by destroying it on purpose and watching what happens.",
  tier: "core",
  bottles: [
    { role: "The subject", target: "Two identical bars of the same dark chocolate", priceUsd: "10-20" },
    { role: "Optional comparison", target: "A bar you already own that has visibly bloomed", priceUsd: "0-6" },
  ],
  procedure: [
    "Keep bar one in a cool, dry, dark place. Do not open it. This is the control.",
    "Take bar two, melt about half of it gently, then let it set at room temperature with no tempering at all. Leave it overnight.",
    "Compare them. The untempered piece will be dull rather than glossy, will bend or crumble rather than snap, and will feel waxy and slow to melt in your mouth. Same chocolate, same ingredients, entirely different product.",
    "Now cycle the rest of bar two: warm it in a pocket or a warm room until it softens slightly, cool it, repeat over a couple of days.",
    "Look for the grayish white film of FAT BLOOM appearing. Taste it. Note that it is not spoiled and not dangerous, and that the texture is ruined anyway.",
  ],
  lookFor:
    "You can explain snap and gloss as consequences of crystal form rather than as signs of quality ingredients.",
  alternate: "Dark chocolate is dairy free, and no additional sugar enters this flight. If you would rather not eat the results, this flight is fully legible by sight and touch alone: gloss, snap and bloom are all visible.",
};

const FLIGHT_5: Flight = {
  n: 5,
  title: "Blind: five bars, no wrappers",
  teaches: "Deduction under real conditions, and the honest limits of it.",
  tier: "core",
  bottles: [
    { role: "A milk chocolate", target: "Any milk bar from earlier flights", priceUsd: "4-9" },
    { role: "A high percentage dark", target: "85 percent or above", priceUsd: "6-12" },
    { role: "A bright, acidic origin", target: "Madagascar or a comparable high-acid origin", priceUsd: "8-14" },
    { role: "An earthy or nutty origin", target: "A West African or Papua New Guinea bar", priceUsd: "8-14" },
    { role: "An industrial bar", target: "A mainstream supermarket dark bar", priceUsd: "3-6" },
  ],
  procedure: [
    "Someone else unwraps and numbers them. If you are alone, unwrap them into numbered foil the day before so you have forgotten the order.",
    "Work the grid in silence on each: appearance and snap, aroma, melt, then acidity, bitterness, astringency, sweetness, then flavor, then finish.",
    "Commit in writing on each bar to: milk or dark, a rough percentage band, and whether it is craft or industrial. In that order, because that is the order of difficulty.",
    "Only after those three, guess at origin, and hedge deliberately: a character (bright and fruity, earthy and nutty) is a better answer than a country.",
    "Reveal all five at once. For every wrong call, write the ONE observation that should have redirected you.",
  ],
  lookFor:
    "You called milk versus dark and craft versus industrial reliably, and you can name your own recurring error.",
  alternate:
    "Run it with five dark bars only, which removes the milk call and is entirely dairy free. The percentage band, craft versus industrial and origin character calls all survive, and they are the three the flight is really training.",
};

// ─────────────────────────────── COURSE ───────────────────────────────

export const BVC_SOMMELIER_CHOCOLATE_COURSE: AuthoredCourse = {
  title: "BVC Taster: Chocolate",
  description:
    "Learn to taste chocolate systematically and buy it knowingly: the grid of appearance, snap, aroma, melt, flavor and finish, why the percentage on a wrapper is a recipe ratio rather than a quality score, what cacao genetics actually say now that the old Criollo and Forastero framework has been superseded, how fermentation and drying at origin create most of the flavor before a maker touches the bean, what roasting, conching, alkalising and tempering each decide, why a bar snaps and shines and what bloom really is, what the standards of identity legally require in the United States and the EU, which label words mean nothing, the ethics the category cannot avoid including child labor and the living income differential, food pairing, and blind deduction. The sequel to BVC Season 1, Episode 3, which covers chocolate's history. Six flights with budgets and substitutes, and a dairy-free, lower-sugar path through every drill. Not affiliated with, and not exam preparation for, any certifying body.",
  lessons: [
    // ══════════════ MODULE 1 · BEFORE YOU TASTE ══════════════
    {
      slug: "choc-how-this-works",
      title: "1 · What this course is, and the number that misleads everyone",
      section: "Module 1 · Before you taste",
      body: `You already took Episode 3. You know cacao was Maya and Aztec currency and ceremony, and you know that most of it now grows in West Africa, thousands of miles from where it started and from where most of the profit lands.

This is the other half: tasting it, and buying it knowingly.

**What you will be able to do at the end**

- Taste a bar through a repeatable grid that treats texture as data rather than decoration.
- Find acidity in chocolate, which most people do not know is there.
- Read an ingredient list and say what the maker decided, separately from what the bean brought.
- Explain what a percentage legally means, and why it is not a quality score.
- Recognise bloom, poor temper and over-conching, and know which are faults and which are choices.
- Speak accurately about the category's labor and income problems, with sources rather than vibes.

**What this course refuses to be.** Not affiliated with any certifying body, not exam preparation, and not a health course. Chocolate carries a large and noisy literature of health claims. This course makes none, in either direction.

**The number that misleads everyone, stated up front because it shapes every flight.**

A percentage on a wrapper tells you what proportion of the bar came from the cacao bean: cocoa mass and cocoa butter combined. **It is a recipe ratio, not a quality measure, and not reliably an intensity measure either.**

Here is why. Two bars can both say 70 percent. One gets there with mostly cocoa mass, which is where the bitterness, astringency and flavor live. The other gets there with a large share of added cocoa butter, which is fat: smooth, rich, and comparatively neutral. The second bar is softer, sweeter-seeming and much less intense, and the number is identical. Meanwhile the remaining 30 percent is mostly sugar in both.

So the percentage tells you roughly how much sugar is NOT in the bar, which is genuinely useful, and it tells you very little else. The ingredient list, in order, tells you more. Flight 1 makes you taste this rather than take my word for it.

**How the flights work.** Six flights, most of them three or four bars in the four to fourteen dollar range. Later flights reuse bars from earlier ones.

**If you avoid dairy or sugar.** Every flight has a dairy-free, lower-sugar parallel at the bottom of the card. Dark chocolate above about 70 percent is usually dairy free already, and the percentage ladder is itself a sugar ladder, so this path is less of a detour here than in any other course in the series.

**One method note, stated once and meant every time.**

${CHOCOLATE_METHOD_NOTE}


**And a note on what to call yourself, because the honest answer is more interesting than the title.**

Every vice on this shelf has a real expert title, and most of them are **owned certification marks belonging to programs this course has nothing to do with.**

| Vice | The real title | What it actually is |
| --- | --- | --- |
| Wine | **Sommelier** | The one word that escaped into common use. Generic, unowned, and now borrowed by cheese, water and olive oil |
| Beer | **Cicerone** | A trademarked certification. Its own program states the word is reserved for people who have passed it and should not be used as a synonym for beer expert |
| Coffee | **Q Grader** | A Coffee Quality Institute certification. The generic job word underneath it is *cupper* |
| Chocolate | **Chocolate taster** | Taught by dedicated institutes; *chocolatier* is a maker, which is a different job |
| Cannabis | **Interpener** | A specific institute's program term |
| Sake | **Kikisake-shi** | A Japanese certification, and the closest true parallel to a sommelier |

So this course is called a **Taster** course, which is the plain English for what you are actually doing, and it is a word nobody owns.

**How this relates to those programs, stated plainly:** it is not any of them, it does not prepare you for their exams, and finishing it entitles you to call yourself nothing. What it does is teach the same underlying skill they all test, which is tasting systematically and describing accurately. If you later sit one of those exams, this will have helped. That is a claim about the subject, not a promise about a result, and anyone who tells you a course can hand you a protected title is selling you something.
## Sources
- U.S. Food and Drug Administration. (n.d.). *Cacao products* (21 C.F.R. Part 163). https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-163
- Council Directive 2000/36/EC of the European Parliament and of the Council of 23 June 2000 relating to cocoa and chocolate products intended for human consumption. *Official Journal of the European Communities, L 197*, 19-25.
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.`,
    },
    {
      slug: "choc-your-palate-is-trainable",
      title: "2 · Texture is data, and melt is the whole trick",
      section: "Module 1 · Before you taste",
      recallContent: [
        {
          prompt: "What does a percentage on a chocolate wrapper actually tell you, and what does it not?",
          answer:
            "It tells you what proportion of the bar came from the cacao bean, cocoa mass and cocoa butter combined, which means it roughly tells you how much sugar is NOT in the bar. It does not tell you quality, and it is not a reliable intensity measure, because a bar can reach the same number with mostly cocoa mass (intense) or with a large share of added cocoa butter (soft and mild).",
        },
      ],
      body: `The physiology is the same as the rest of this series: the tongue reports a short list of tastes, and everything else you call flavor is odor arriving through the back of the throat as you swallow, on the retronasal route that runs on the odorant receptor gene family described by Buck and Axel (1991).

**What makes chocolate different from wine and coffee is that it arrives solid**, and has to become liquid in your mouth before any of that can happen. Which makes MELT the central event, and cocoa butter the reason.

**Cocoa butter is a remarkable fat.** It is nearly solid at room temperature and almost fully melted at body temperature, and that narrow window is why chocolate snaps in your hand and turns liquid on your tongue. Almost no other common fat behaves this way. Flight 0 makes you compare it against butter and a hard vegetable fat precisely so the difference stops being abstract.

**Which is why you must not chew.** Chewing bypasses the melt, mashes the particles, and throws away half of what you were trying to observe: the temperature at which it gives way, the speed, the way it coats, and whether it turns creamy or waxy or gritty. Let it melt against the roof of your mouth.

**Texture is measurable, and three things drive it**

1. **Particle size.** Chocolate is a suspension of solid particles in fat. Ground finely enough, roughly around 30 micrometres, the tongue stops registering individual particles and the chocolate reads as smooth. Coarser than that and it reads gritty, which some traditional styles do on purpose.
2. **Fat content.** More cocoa butter means faster, richer melt and more fluidity.
3. **Crystal form.** How the cocoa butter was set. Lesson 12 is entirely about this, and Flight 4 makes you break it deliberately.

**Palate fatigue is faster here than anywhere else in this series.** Fat coats the mouth and stays, sugar accumulates, and bitterness builds. Five or six samples is a real session. Cleanse with plain water, take breaks, and be suspicious of any note you wrote after the sixth bar.

**The four rules, unchanged from the rest of the series.** Score structure before flavor. Use your own references. Always taste comparatively. Write before you speak.

Now run Flight 0.

${flightCard(FLIGHT_0, ALT)}

:::reveal Why does chewing chocolate rather than letting it melt cost you more information than chewing would cost you in any other tasting? ||| Because chocolate arrives solid and has to become liquid before its aroma can reach the retronasal route at all, so the melt IS the delivery mechanism. Chewing bypasses it and throws away the observations that only exist during melting: the temperature at which it gives way, how fast, whether it turns creamy or waxy or gritty, and how it coats the mouth. In wine or coffee the sample is already liquid, so nothing equivalent is lost.

## Sources
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.
- Buck, L., & Axel, R. (1991). A novel multigene family may encode odorant receptors: A molecular basis for odor recognition. *Cell, 65*(1), 175-187. https://doi.org/10.1016/0092-8674(91)90418-X
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.`,
    },
    {
      slug: "choc-the-grid",
      title: "3 · The grid: appearance, snap, aroma, melt, flavor, finish",
      section: "Module 1 · Before you taste",
      body: `Six stages, in order, for the same reason every tasting system in this series fixes an order: it runs from the least suggestible evidence to the most.

**1. Appearance.** Look at the surface. A well tempered bar is glossy and even. Dull, streaked, grayish or white-filmed means poor temper or bloom, and Lesson 12 separates those. Colour ranges from pale reddish brown to almost black, and it reports roast level, origin and whether cocoa was alkalised, not quality.

**2. Snap.** Break a piece near your ear. A properly tempered dark bar gives a clean, sharp crack. A dull thud or a bend means the crystal structure is wrong, or the bar is warm, or it has a high milk or fat content, which softens the snap legitimately. Milk chocolate should not be expected to snap like dark.

**3. Aroma.** Smell the broken edge, which is fresher than the surface. Warm the piece in your fingers for a moment first. Look for the same three buckets the wine course uses:
- **From the bean and its fermentation:** fruit, nuts, flowers, earth, spice.
- **From the maker's process:** roast character, smoke, caramel, and the flatness of a heavily conched bar.
- **From age or damage:** cardboard, waxiness, or the smell of whatever it was stored next to.

**4. Melt.** Put it on your tongue, press it to the roof of your mouth, and do not chew. Time it roughly. Note the speed, the temperature at which it gives, and the texture as it goes: creamy, waxy, greasy, gritty, or clean.

**5. Flavour and structure.** As it melts, score:

| Component | What you are looking for |
| --- | --- |
| **Bitterness** | A taste, from cacao and roast. Rises with percentage and with roast level |
| **Astringency** | A texture, a drying grip on the gums. From polyphenols, and often from under-fermented beans |
| **Acidity** | Real and often overlooked. Bright and fruity when it comes from fermentation, sharp and sour when there was too much of it |
| **Sweetness** | The sugar, and the inverse of the percentage |
| **Flavour** | Only now, and from broad to specific |

**6. Finish.** Wait. Chocolate's finish is longer than almost anything you will taste, often a full minute or more, and it changes as it goes. Note what LINGERS: fruit, nuts and cocoa are good company, while a chalky, dusty or bitter-only finish is not.

**The one thing to write down every time.** Whether the bar got better or worse as it melted. Bars that open big and collapse are common, and bars that start quiet and bloom into a long finish are the ones worth buying again.

:::reveal A milk chocolate bar bends rather than snapping. Name the two possible explanations and say which one is a fault. ||| Either the bar is poorly tempered or has bloomed, which is a fault in the crystal structure, or it simply has a high milk and fat content that legitimately softens the snap, which is not a fault at all. Milk chocolate should not be expected to crack like a dark bar. Appearance settles it: a poorly tempered or bloomed bar is also dull, streaked or grayish, where a well made milk bar stays glossy while still bending.

## Sources
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.`,
    },
    {
      slug: "choc-percentage-flight",
      title: "4 · Tasting the percentage",
      section: "Module 1 · Before you taste",
      body: `Lesson 1 made the claim. This flight tests it, and the test is the ingredient list as much as the tasting.

**The rule that makes the flight honest:** buy all four from the same maker if you possibly can. Otherwise you will be tasting the difference between two companies' roasting and conching, and attributing it to the number on the front.

**What to read, and in what order.** Ingredients are listed by weight, descending. On a dark bar you will typically see some arrangement of cocoa mass (sometimes called cocoa liquor or cacao), sugar, cocoa butter, sometimes lecithin as an emulsifier, sometimes vanilla.

- **Cocoa mass first, then sugar** is the common craft arrangement.
- **Sugar first** means the bar is more than half sugar, which is normal for milk chocolate and tells you something on a dark one.
- **Added cocoa butter high in the list** means the maker is buying smoothness and fluidity, which raises the percentage without raising intensity. This is the mechanism Lesson 1 described, and now you can see it.
- **Lecithin** is an emulsifier that reduces viscosity, letting a maker use less cocoa butter. It is not a fault, and a bar without it is not automatically better.
- **Vanilla** rounds edges and can mask a rougher bean. Also not a fault, and worth noticing.

${flightCard(FLIGHT_1, ALT)}

:::reveal Two dark bars both say 70 percent. One lists cocoa mass, sugar, cocoa butter. The other lists cocoa mass, sugar, cocoa butter as a much larger share. Predict how they differ in the mouth. ||| The second will be softer, faster melting, richer and noticeably less intense, because cocoa butter is fat and comparatively neutral while cocoa mass carries the bitterness, astringency and flavor. Both bars are still about 30 percent sugar, so the difference is not sweetness, it is how much of the cacao portion is actually flavor-bearing solids rather than fat.

## Sources
- U.S. Food and Drug Administration. (n.d.). *Cacao products* (21 C.F.R. Part 163). https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-163
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.`,
    },
    {
      slug: "choc-quiz-1",
      title: "5 · Knowledge check: before you taste",
      section: "Module 1 · Before you taste",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the percentage on a chocolate wrapper represent?",
            options: [
              "The proportion of the bar that came from the cacao bean, mass and butter combined",
              "The proportion of cocoa solids alone, with all cocoa butter excluded from it",
              "A quality grade the maker assigns after tasting each finished production batch",
              "The percentage of beans from a single named origin in the blend",
            ],
            correctIndex: 0,
            explanation:
              "It is a recipe ratio. Because the remainder is mostly sugar, it roughly tells you how much sugar is not in the bar, and it tells you very little about quality or even intensity.",
            sourceLessonSlug: "choc-how-this-works",
          },
          {
            prompt: "Why can two bars both labelled 70 percent differ sharply in intensity?",
            options: [
              "Because the percentage is rounded under different rules in the US and the EU",
              "Because one may reach the number with added cocoa butter rather than cocoa mass",
              "Because a darker roast raises the measured cacao percentage of the finished bar",
              "Because one may contain milk solids that are counted in the total",
            ],
            correctIndex: 1,
            explanation:
              "Cocoa mass carries bitterness, astringency and flavor, while cocoa butter is comparatively neutral fat. Both count toward the percentage, so the ingredient list is more informative than the number.",
            sourceLessonSlug: "choc-how-this-works",
          },
          {
            prompt: "Why does the course tell you never to chew a chocolate sample?",
            options: [
              "Chewing releases bitter compounds from the sugar crystals",
              "Chewing is prohibited under formal chocolate judging protocols",
              "Chewing raises the sample's temperature above the tasting range",
              "The melt is how aroma is delivered, and chewing bypasses it entirely",
            ],
            correctIndex: 3,
            explanation:
              "Chocolate arrives solid and has to liquefy before aroma can reach the retronasal route. Chewing also destroys the texture observations, which are half the data in this particular tasting.",
            sourceLessonSlug: "choc-your-palate-is-trainable",
          },
          {
            prompt: "What makes cocoa butter unusual among common fats?",
            options: [
              "It stays liquid at room temperature and solidifies once it reaches the mouth",
              "It is nearly solid at room temperature and nearly melted at body temperature",
              "It has no measurable melting point at any temperature that has been recorded",
              "It melts only above the boiling point of water",
            ],
            correctIndex: 1,
            explanation:
              "That narrow window is why chocolate snaps in the hand and turns liquid on the tongue. Flight 0 compares it against butter and a hard vegetable fat so the difference stops being abstract.",
            sourceLessonSlug: "choc-your-palate-is-trainable",
          },
          {
            prompt: "Roughly what particle size does the tongue stop registering as gritty?",
            options: [
              "Around 3 micrometres",
              "Around 30 micrometres",
              "Around 300 micrometres",
              "Around 3 millimetres",
            ],
            correctIndex: 1,
            explanation:
              "Chocolate is solid particles suspended in fat, and around that threshold it reads as smooth. Coarser bars read gritty, which some traditional styles do deliberately.",
            sourceLessonSlug: "choc-your-palate-is-trainable",
          },
          {
            prompt: "In what order does the tasting grid proceed?",
            options: [
              "Appearance, snap, aroma, melt, flavor, finish",
              "Aroma, flavor, appearance, snap, melt, finish",
              "Snap, flavor, finish, aroma, appearance, melt",
              "Flavour, finish, melt, aroma, snap, appearance",
            ],
            correctIndex: 0,
            explanation:
              "The order runs from least suggestible evidence to most, the same principle the wine course uses, so a taster does not decide what a bar is and then find evidence for it.",
            sourceLessonSlug: "choc-the-grid",
          },
          {
            prompt: "A dark bar is dull, streaked and bends rather than snapping. What does that indicate?",
            options: [
              "A high proportion of single origin beans in the blend",
              "That the bar was made without any added cocoa butter",
              "Poor temper or bloom, meaning the crystal structure is wrong",
              "An unusually high percentage of cocoa mass",
            ],
            correctIndex: 2,
            explanation:
              "Gloss and a clean snap are consequences of crystal form. In milk chocolate a softer snap can be legitimate, because milk and fat content soften it, but dullness alongside it points to temper.",
            sourceLessonSlug: "choc-the-grid",
          },
          {
            prompt: "What does astringency in chocolate most often indicate?",
            options: [
              "Polyphenols, often from under-fermented beans, felt as a drying grip",
              "A taste produced when the nibs are roasted far past their intended endpoint",
              "Sugar crystals left undissolved because conching was cut short by the maker",
              "Milk solids that were added after the conching stage",
            ],
            correctIndex: 0,
            explanation:
              "Astringency is a texture rather than a taste, which is the same distinction the coffee course draws. Under-fermented beans are a common cause, which is why fermentation matters so much at origin.",
            sourceLessonSlug: "choc-the-grid",
          },
          {
            prompt: "What does lecithin do in a chocolate recipe?",
            options: [
              "It preserves the finished bar and extends its shelf life quite substantially",
              "It emulsifies and reduces viscosity, letting a maker use less cocoa butter",
              "It sweetens the finished bar without adding any measurable sugar content at all",
              "It stabilises the temper so the bar cannot bloom",
            ],
            correctIndex: 1,
            explanation:
              "It is not a fault, and a bar without it is not automatically better. Noticing it is part of reading an ingredient list as a record of the maker's decisions.",
            sourceLessonSlug: "choc-percentage-flight",
          },
          {
            prompt: "Why does the course warn that palate fatigue arrives faster with chocolate?",
            options: [
              "Fat coats the mouth, sugar accumulates and bitterness builds across samples",
              "Chocolate contains stimulants that rapidly dull the taster's sense of smell",
              "The samples must be tasted at a temperature that numbs the tongue",
              "Cocoa butter permanently blocks the retronasal route aroma travels along",
            ],
            correctIndex: 0,
            explanation:
              "Five or six samples is a genuine session, and notes written after that are worth being suspicious of. Plain water and breaks are the practical answer.",
            sourceLessonSlug: "choc-your-palate-is-trainable",
          },
        ],
      },
    },

    // ══════════════ MODULE 2 · THE BEAN AND THE PLACE ══════════════
    {
      slug: "choc-genetics",
      title: "6 · Cacao genetics, and the framework almost every book still gets wrong",
      section: "Module 2 · The bean and the place",
      recallContent: [
        {
          prompt: "Name the six stages of the chocolate tasting grid in order, and say why the order is fixed.",
          answer:
            "Appearance, snap, aroma, melt, flavor and structure, then finish. The order runs from least suggestible evidence to most, so a taster observes what is physically there before deciding what the bar is and then finding evidence for that decision.",
        },
      ],
      body: `Open almost any chocolate book and you will meet three names: **Criollo**, rare and fine and ancient; **Forastero**, bulk and hardy and dull; and **Trinitario**, a hybrid of the two. It is a tidy story, it maps neatly onto a quality hierarchy, and it is out of date.

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1786418272/witus/courses/sommelier/bvc-taster-chocolate/theobroma-cacao-kohler-plate.jpg ||| A colour botanical plate of cacao. Two very large oval leaves dominate the centre. At the upper left, a thick woody branch carries small pale pink and cream flowers growing directly out of the bark itself rather than from twigs or leaf joints. Around the edges are enlarged studies of a single flower, its parts separated, stamens, and a seed shown whole and in cross-section. ||| The detail worth pausing on is at the upper left: the flowers are growing straight out of the woody trunk. Cacao is cauliflorous, so the pods form on the trunk and old branches rather than at the ends of twigs. That single fact is why cacao is still cut by hand, one pod at a time, and why the crop resists mechanisation in a way coffee does not. ||| Franz Eugen Köhler, Köhler's Medizinal-Pflanzen. Theobroma cacao - Köhler–s Medizinal-Pflanzen-136.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Theobroma_cacao_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-136.jpg

**What the genetics actually show.** A large sampling study resolved *Theobroma cacao* into **ten genetic clusters**, named for the regions and rivers where they were sampled: Maranon, Curaray, Criollo, Iquitos, Nanay, Contamana, Amelonado, Purus, Nacional and Guiana (Motamayor et al., 2008). The old three-way scheme collapses a great deal of that diversity into a single category, "Forastero," which turns out to contain most of the species' variation.

**Why it matters rather than being pedantry.** Three reasons:

1. **The quality hierarchy was never reliable.** Fine flavor is not the property of one ancient noble variety, and treating Criollo as automatically superior is the chocolate equivalent of assuming an expensive appellation guarantees a good bottle.
2. **Amelonado is most of the world's chocolate.** The cluster behind the bulk West African crop is one of ten, and it was selected for yield and hardiness rather than flavor. That is a farming and economic story, not a genetic verdict on the beans.
3. **Nacional, in Ecuador, is a genuinely distinct cluster** with a famous floral character, and it nearly disappeared to disease in the early twentieth century. Its survival and rediscovery is the story people usually attach to Criollo.

**What to do with this as a taster.** Treat variety claims on a wrapper the way the wine course tells you to treat "old vines": possibly true, rarely verifiable, and much less predictive than the things you can taste. **Fermentation and roast will tell you more about a bar than its genetics will.**

**Where cacao grows.** Within roughly twenty degrees of the equator, in hot, humid, shaded conditions. West Africa, principally Cote d'Ivoire and Ghana, grows the majority of the world crop. Latin America, Indonesia, and a long tail of smaller origins make up the rest. That concentration is the economic fact underneath everything in Module 4, and Episode 3 covered how it came to be.

:::reveal Why is calling a bar "Criollo" weaker evidence than it looks? ||| Because the Criollo, Forastero and Trinitario scheme has been superseded: the genetics resolve cacao into ten clusters, and Forastero in particular was a bucket holding most of the species' actual diversity. So Criollo names one cluster rather than a quality tier, fine flavor is not exclusive to it, and the claim is rarely verifiable on a wrapper anyway. Fermentation and roast are far more predictive of what you will taste.

## Sources
- Motamayor, J. C., Lachenaud, P., da Silva e Mota, J. W., Loor, R., Kuhn, D. N., Brown, J. S., & Schnell, R. J. (2008). Geographic and genetic population differentiation of the Amazonian chocolate tree (Theobroma cacao L.). *PLoS ONE, 3*(10), e3311. https://doi.org/10.1371/journal.pone.0003311
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.`,
    },
    {
      slug: "choc-fermentation",
      title: "7 · Fermentation and drying: where the flavor is actually made",
      section: "Module 2 · The bean and the place",
      body: `Here is the fact that reorganises how most people think about chocolate: **a raw cacao bean does not taste of chocolate.** It is bitter, astringent and vegetal. Nearly all of what you recognize as chocolate flavor is created after harvest, in fermentation and roasting, and the first of those happens at origin, usually on the farm, often by hand.

**What happens in a fermentation heap or box.** The beans are removed from the pod surrounded by a sweet white pulp, and piled into boxes, heaps or baskets, typically for several days.

1. **Yeasts** consume the sugars in the pulp, with little oxygen available, producing ethanol.
2. **Lactic acid bacteria** follow.
3. **Acetic acid bacteria** convert the ethanol to acetic acid, and this stage generates heat.
4. **The heat and acid penetrate the bean and kill the embryo.** That is the essential event: it ends the seed's dormancy and releases enzymes that break proteins into the amino acids and peptides which become chocolate flavor when roasted.

**So fermentation does not add chocolate flavor. It creates the PRECURSORS**, and roasting later converts them. Under-ferment and there is nothing for the roast to work with: the bar is astringent, flat and vegetal no matter how skilled the maker. Over-ferment and you get sour, hammy or putrid off-notes.

**Which is why this lesson matters commercially.** The single largest quality lever in chocolate sits with the farmer and the cooperative, days after harvest, using equipment that costs almost nothing. And it is the part of the chain furthest from where the money is. A maker who pays for well fermented beans is paying for the thing that most determines the bar, and a maker who does not cannot fix it downstream.

**Drying.** After fermentation the beans are dried, usually in the sun over days, down to a moisture content low enough to store and ship safely. Too fast and acetic acid stays trapped in the bean, leaving a sour bar. Too slow, or in damp conditions, and mold and off-flavors develop. As in coffee, drying is where a great deal of otherwise good product is lost quietly.

:::reveal Someone says a chocolate maker "creates the flavour" of a bar. Correct that, using the actual sequence. ||| Most of it is created before the maker sees the beans. A raw cacao bean is bitter, astringent and vegetal, and fermentation at origin is what generates the flavor PRECURSORS: yeasts produce ethanol, bacteria convert it to acetic acid, the heat and acid kill the embryo, and enzymes break proteins into amino acids and peptides. Roasting later converts those precursors into chocolate flavor. A maker who buys under-fermented beans cannot repair them downstream, which is why the largest quality lever sits with the farmer.

## Sources
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.
- Afoakwa, E. O., Paterson, A., Fowler, M., & Ryan, A. (2008). Flavor formation and character in cocoa and chocolate: A critical review. *Critical Reviews in Food Science and Nutrition, 48*(9), 840-857. https://doi.org/10.1080/10408390701719272`,
    },
    {
      slug: "choc-origins",
      title: "8 · Origins, and what they tend to taste like",
      section: "Module 2 · The bean and the place",
      body: `Reference points, with the same caveat the coffee course carries: these are tendencies, they have many exceptions, and fermentation quality can outrun origin character completely.

| Origin | Common reference profile |
| --- | --- |
| **Madagascar** | Bright citric and red fruit acidity. The origin that most reliably convinces people chocolate has acidity |
| **Ecuador** | Floral and nutty, particularly the Nacional cluster's jasmine-like character |
| **Venezuela** | Nutty, mellow, low acidity, often held up as the classic fine flavor origin |
| **Peru and Bolivia** | Varied and increasingly prominent, often red fruit with moderate acidity |
| **Dominican Republic** | Earthy, tobacco, moderate acidity, and a large organic and fair trade supply |
| **Ghana and Cote d'Ivoire** | The classic straightforward cocoa flavor most people grew up with. Well fermented Ghanaian in particular is a benchmark for the flavor people mean by "chocolatey" |
| **Tanzania** | Often bright and fruity, which surprises people expecting a West African profile |
| **Vietnam** | Fruity and spiced, and one of the more recent origins to be taken seriously |
| **Papua New Guinea** | Smoky, from beans commonly dried over wood fires, which is a PROCESS marker rather than a place one |

**Read that last row carefully**, because it is the lesson of the whole table. Smokiness in PNG chocolate usually comes from wood-fired drying, not from the soil or the genetics. It is the chocolate equivalent of the carbonic banana note in the wine course: a process marker that a taster will happily file under origin and then be misled by for years.

**How much does origin actually predict?** Less than fermentation, and less than roast. A poorly fermented Madagascan bean will not give you bright red fruit, and a heavily roasted bar of anything trends toward generic roast character. Origin is the fourth thing to reason about, after those two and after the percentage, which is exactly the order Flight 5 asks you to call blind.

${flightCard(FLIGHT_2, ALT)}

:::reveal A Papua New Guinea bar tastes distinctly smoky. Why is it a mistake to file that under origin character? ||| Because it most likely comes from the beans being dried over wood fires, which is a PROCESSING decision rather than something about the place's soil or genetics. Filing it under origin means you will expect smoke from any PNG bar and be confused when a sun-dried one arrives clean, and you will miss the same smokiness when it turns up from a different origin using the same drying method. It is the same trap as attributing carbonic fermentation's banana note to a grape.

## Sources
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.
- Afoakwa, E. O., Paterson, A., Fowler, M., & Ryan, A. (2008). Flavor formation and character in cocoa and chocolate: A critical review. *Critical Reviews in Food Science and Nutrition, 48*(9), 840-857. https://doi.org/10.1080/10408390701719272`,
    },

    // ══════════════ MODULE 3 · THE FACTORY ══════════════
    {
      slug: "choc-roast-grind-conche",
      title: "9 · Roasting, grinding, conching",
      section: "Module 3 · The factory",
      recallContent: [
        {
          prompt: "What does fermentation actually produce, and what happens if a maker buys under-fermented beans?",
          answer:
            "It produces the flavor PRECURSORS rather than chocolate flavor itself: enzymes released when the embryo dies break proteins into amino acids and peptides, which roasting later converts. Under-fermented beans give the roast nothing to work with, so the bar stays astringent, flat and vegetal, and no downstream skill can repair it.",
        },
      ],
      body: `Everything from here is the maker's decision, and learning to hear those decisions separately from the bean is this course's version of telling grape from oak.

**Roasting.** The same Maillard chemistry as coffee: amino acids and reducing sugars, created during fermentation, react under heat to generate hundreds of aroma compounds. Chocolate is generally roasted more gently than coffee, and the trade-off is identical. A light roast preserves origin character, acidity and floral notes but risks leaving astringency and vegetal edges. A dark roast builds deep, familiar roasted-cocoa character and buries origin. Neither is correct.

**Winnowing.** The roasted beans are cracked and the shells blown away, leaving **nibs**, which are pure cacao. Shell in the finished chocolate is a defect, and it tastes woody and dusty.

**Grinding.** The nibs are ground until the cocoa butter is released and the mass liquefies. That liquid is **cocoa mass**, also called cocoa liquor or cacao, and it contains no alcohol, which the word "liquor" misleads people about constantly. Refining continues until the particles are small enough to read as smooth, roughly the 30 micrometre threshold from Lesson 2.

**Pressing, which is where cocoa powder comes from.** Cocoa mass can be pressed to separate **cocoa butter** from a dry **cake**, which is milled into **cocoa powder**. This is why cocoa butter is available to add back into bars, and why a maker can raise a bar's percentage with fat.

**Conching.** Rodolphe Lindt's contribution in 1879, and the stage that most distinguishes industrial chocolate from craft. The mass is agitated, often warm, for hours or sometimes days. Three things happen:

1. Volatile acids, especially the acetic acid left from fermentation, are driven off, which reduces sourness and sharpness.
2. Particles are coated in fat and edges are smoothed, improving texture.
3. Remaining moisture is reduced, which lowers viscosity.

**Long conching makes chocolate smoother, rounder and quieter.** That is the whole trade. A heavily conched industrial bar is remarkably consistent and comparatively characterless, and a lightly conched craft bar keeps more acidity and origin character and sometimes more roughness. Flight 3 makes you taste both and, importantly, allows you to prefer the industrial one.

**Alkalisation, or Dutching.** Treating cocoa with an alkali darkens the color and reduces acidity and bitterness, producing the dark, mellow cocoa powder used in a great deal of baking. Worth knowing for three reasons: it changes flavor substantially, it changes color dramatically, and it reduces flavanol content, which is a fact about the process rather than a claim about health.

${flightCard(FLIGHT_3, ALT)}

:::reveal A supermarket dark bar tastes smooth, round and slightly characterless next to a craft bar of the same percentage that is louder and a bit rough. Name the process most responsible and say which bar is better. ||| Conching is most responsible: long conching drives off volatile acids and smooths texture, making chocolate rounder, quieter and extremely consistent, while a lightly conched bar keeps more acidity and origin character along with more roughness. Neither bar is better in the abstract. Smoothness and consistency are real achievements rather than compromises, and the honest question is which you would rather eat.

## Sources
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.
- Afoakwa, E. O., Paterson, A., Fowler, M., & Ryan, A. (2008). Flavor formation and character in cocoa and chocolate: A critical review. *Critical Reviews in Food Science and Nutrition, 48*(9), 840-857. https://doi.org/10.1080/10408390701719272`,
    },
    {
      slug: "choc-tempering-and-bloom",
      title: "10 · Tempering, snap, gloss, and what bloom really is",
      section: "Module 3 · The factory",
      body: `This is the most satisfying piece of physical chemistry in food, and it explains three things you have noticed your whole life without having a name for them.

**Cocoa butter can crystallise in more than one form.** The classic crystallographic work identified **six polymorphic forms**, conventionally numbered I to VI, each with a different melting point and stability (Wille & Lutton, 1966). They are the same fat, arranged differently, exactly as graphite and diamond are the same carbon.

**Chocolate makers want Form V**, and only Form V, because it alone delivers all four properties at once:

- A hard, clean **snap**.
- A glossy **surface**.
- A melting point just below body temperature, so it holds its shape in your hand and melts on your tongue.
- **Contraction** on setting, which is how a molded bar releases from its mold.

**Tempering is the process of getting there.** Melt the chocolate fully to erase all existing crystals, cool it to encourage crystal formation, briefly warm it again to melt off the unstable low-numbered forms, and hold it there. What survives is a seed of Form V crystals, and the rest of the fat follows their structure as it sets. Skip it and you get a mix of unstable forms: dull, soft, bendy, waxy in the mouth, and quick to bloom.

**Bloom, and the two kinds people conflate.**

| | **Fat bloom** | **Sugar bloom** |
| --- | --- | --- |
| Looks like | Greyish white, streaky or blotchy, often soft-edged | White, gritty, crystalline, sometimes sparkly |
| Caused by | Temperature swings or poor temper; fat migrates and recrystallises into the more stable Form VI | Moisture on the surface dissolving sugar, which recrystallises when it dries |
| Where from | A warm car, a windowsill, repeated warming and cooling, or untempered chocolate | A fridge, condensation, a humid room |
| Fixable | Not really, though it can be re-melted and re-tempered | No |
| Dangerous | No | No |

**Neither is spoilage, and neither is dangerous.** Both ruin the texture, and both are usually a storage failure rather than a manufacturing one, which means most bloomed chocolate was ruined after it was sold.

**Which gives you the storage rules.** Cool, stable, dry and dark, ideally somewhere in the mid-teens Celsius, wrapped, away from strong smells, since cocoa butter readily absorbs odors. **Not the fridge**, which is humid and causes sugar bloom, and not a warm room that cycles. If you must refrigerate in a hot climate, seal the bar in an airtight container and let it return to room temperature before opening, so condensation forms on the container rather than on the chocolate.

${flightCard(FLIGHT_4, ALT)}

:::reveal A bar has a greyish, streaky film. Your friend says it has gone off. Give the accurate answer, including which kind of bloom and what caused it. ||| It has not gone off and it is not dangerous. Greyish, streaky and soft-edged is FAT bloom: temperature swings or poor temper let the cocoa butter migrate and recrystallise into a more stable form, which wrecks the gloss and the texture while leaving the chocolate safe to eat. Gritty, crystalline white would be SUGAR bloom instead, from moisture dissolving surface sugar which then recrystallises, typically from a fridge or a humid room. Both are usually storage failures after purchase rather than manufacturing faults.

## Sources
- Wille, R. L., & Lutton, E. S. (1966). Polymorphism of cocoa butter. *Journal of the American Oil Chemists' Society, 43*(8), 491-496. https://doi.org/10.1007/BF02641273
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.`,
    },
    {
      slug: "choc-quiz-2",
      title: "11 · Knowledge check: the bean and the factory",
      section: "Module 3 · The factory",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What did the genetic work on Theobroma cacao establish about the Criollo, Forastero and Trinitario framework?",
            options: [
              "It confirmed the three groups as genetically distinct and correctly ranked",
              "It found that all cacao belongs to a single undifferentiated population",
              "It resolved cacao into ten clusters, superseding the three-way scheme",
              "It showed that Trinitario is the oldest rather than a hybrid group",
            ],
            correctIndex: 2,
            explanation:
              "Motamayor and colleagues resolved the species into ten clusters. Forastero in particular was a bucket holding most of the species' actual diversity, so the old scheme also implied a quality hierarchy that was never reliable.",
            sourceLessonSlug: "choc-genetics",
          },
          {
            prompt: "What does fermentation contribute to chocolate flavour?",
            options: [
              "The flavor precursors, which roasting later converts",
              "The finished chocolate flavor, which roasting merely preserves",
              "The sweetness, by converting starches into simple sugars",
              "The cocoa butter, which is generated by the acetic bacteria",
            ],
            correctIndex: 0,
            explanation:
              "Heat and acid kill the embryo, releasing enzymes that break proteins into amino acids and peptides. Under-fermented beans leave the roast nothing to work with, and no downstream skill repairs that.",
            sourceLessonSlug: "choc-fermentation",
          },
          {
            prompt: "Why does the course call fermentation the largest quality lever in chocolate?",
            options: [
              "Because it is by a wide margin the most expensive stage in the supply chain",
              "Because it determines the final cacao percentage that is printed on the wrapper",
              "Because it is the only stage regulated by international standards",
              "Because it decides the bar and sits with the farmer, furthest from the money",
            ],
            correctIndex: 3,
            explanation:
              "It happens days after harvest with equipment costing almost nothing, and it determines what the maker has to work with. That is also why paying for well fermented beans is paying for the thing that matters most.",
            sourceLessonSlug: "choc-fermentation",
          },
          {
            prompt: "A raw, unfermented cacao bean tastes like what?",
            options: [
              "Bitter, astringent and vegetal, not like chocolate at all",
              "Mild milk chocolate, though without any sweetness",
              "Intensely fruity, with the origin character at its peak",
              "Almost exactly like an unsweetened baking chocolate bar",
            ],
            correctIndex: 0,
            explanation:
              "Nearly everything recognisable as chocolate flavor is created after harvest, in fermentation and then roasting. That fact reorganises how most people think about the whole product.",
            sourceLessonSlug: "choc-fermentation",
          },
          {
            prompt: "What does long conching do to chocolate?",
            options: [
              "Raises the bar's cocoa percentage by evaporating water out of the cocoa mass",
              "Drives off volatile acids and smooths texture, making it rounder and quieter",
              "Crystallises the cocoa butter into its most stable polymorphic form",
              "Removes the shell fragments that were left behind by the winnowing stage",
            ],
            correctIndex: 1,
            explanation:
              "It is the stage that most distinguishes industrial from craft chocolate. Smoothness and consistency are real achievements, so preferring the heavily conched bar is a legitimate result rather than a failure of taste.",
            sourceLessonSlug: "choc-roast-grind-conche",
          },
          {
            prompt: "Which crystal form of cocoa butter do makers temper chocolate to achieve?",
            options: [
              "Form I, the least stable of the six and the fastest of them to set solid",
              "Form III, which melts at a point well above human body temperature",
              "Form V, which gives snap, gloss and a melting point below body temperature",
              "Form VI, the most stable of the six polymorphic forms available",
            ],
            correctIndex: 2,
            explanation:
              "Form V delivers snap, gloss, the right melting point and contraction on setting all at once. Form VI is more stable and is what fat bloom migrates toward, wrecking the texture.",
            sourceLessonSlug: "choc-tempering-and-bloom",
          },
          {
            prompt: "How do you tell fat bloom from sugar bloom?",
            options: [
              "Fat bloom appears only on milk chocolate, sugar bloom only on dark",
              "Fat bloom smells rancid, sugar bloom has no aroma at all",
              "Fat bloom is safe to eat, sugar bloom indicates spoilage",
              "Fat bloom is grayish and streaky, sugar bloom is gritty and crystalline",
            ],
            correctIndex: 3,
            explanation:
              "Fat bloom comes from temperature swings or poor temper, sugar bloom from moisture dissolving surface sugar. Neither is spoilage and neither is dangerous, and both ruin texture.",
            sourceLessonSlug: "choc-tempering-and-bloom",
          },
          {
            prompt: "Why should chocolate not be stored in the fridge?",
            options: [
              "It is humid, and condensation causes sugar bloom",
              "The cold permanently destroys the Form V crystal structure",
              "Refrigeration accelerates the growth of harmful bacteria",
              "Cold storage causes the cocoa butter to separate entirely",
            ],
            correctIndex: 0,
            explanation:
              "Cool, stable, dry and dark is the target, and cocoa butter also absorbs odors readily. If a hot climate forces refrigeration, seal the bar airtight and let it warm before opening.",
            sourceLessonSlug: "choc-tempering-and-bloom",
          },
          {
            prompt: "What is cocoa mass, sometimes called cocoa liquor?",
            options: [
              "Ground nibs, liquefied by their own released cocoa butter",
              "Cocoa butter that has been separated from the cake by pressing",
              "An alcoholic extract used in flavouring confectionery",
              "The sweetened base used specifically for milk chocolate",
            ],
            correctIndex: 0,
            explanation:
              "The word liquor misleads people constantly: there is no alcohol in it. Pressing that mass separates cocoa butter from a cake, which is milled into cocoa powder.",
            sourceLessonSlug: "choc-roast-grind-conche",
          },
          {
            prompt: "What does alkalisation, or Dutching, do?",
            options: [
              "Darkens the color, reduces acidity and bitterness, and lowers flavanol content",
              "Increases acidity in order to brighten the flavor of bulk commodity cocoa",
              "Replaces the cocoa butter entirely with a cheaper vegetable fat substitute",
              "Sterilises the cocoa so that it can be stored safely without refrigeration",
            ],
            correctIndex: 0,
            explanation:
              "It produces the dark, mellow cocoa powder used widely in baking. The flavanol reduction is stated here as a fact about the process, with no claim attached about what flavanols do for a person.",
            sourceLessonSlug: "choc-roast-grind-conche",
          },
          {
            prompt: "Smokiness in a Papua New Guinea bar usually comes from what?",
            options: [
              "The volcanic soils that the cacao trees are grown in on the islands",
              "Wood-fired drying, which is a process marker rather than an origin one",
              "A genetic characteristic carried by the local cacao population there",
              "Conching extended well beyond the usual time at a raised temperature",
            ],
            correctIndex: 1,
            explanation:
              "Filing it under origin means expecting smoke from every PNG bar and missing the same character from other origins using wood-fired drying. It is the same trap as attributing carbonic fermentation's banana note to a grape.",
            sourceLessonSlug: "choc-origins",
          },
          {
            prompt: "Which origin most reliably convinces people that chocolate has real acidity?",
            options: [
              "Ghana, the benchmark for classic cocoa flavor",
              "Venezuela, known for nutty and mellow character",
              "Madagascar, with bright citric and red fruit acidity",
              "Papua New Guinea, with its smoky character",
            ],
            correctIndex: 2,
            explanation:
              "Finding real acidity in a Madagascan bar is the moment the course tends to click for people, because most drinkers have never thought to look for acidity in chocolate at all.",
            sourceLessonSlug: "choc-origins",
          },
        ],
      },
    },

    // ══════════════ MODULE 4 · LABELS, ETHICS, AND CHOOSING ══════════════
    {
      slug: "choc-labels-and-law",
      title: "12 · What a wrapper legally promises",
      section: "Module 4 · Labels, ethics, choosing",
      recallContent: [
        {
          prompt: "Name the four properties Form V crystallisation gives a chocolate bar.",
          answer:
            "A hard clean snap, a glossy surface, a melting point just below body temperature so it holds shape in the hand and melts on the tongue, and contraction on setting so a molded bar releases from its mold.",
        },
      ],
      body: `Chocolate has standards of identity, which is more legal structure than coffee has and far less than wine. They set minimum compositions, and they are the only part of a wrapper that is enforceable.

**United States**, under 21 CFR Part 163. The regulations set minimums for each named product: sweet chocolate must contain at least a stated minimum of chocolate liquor, milk chocolate must contain both a minimum of chocolate liquor and a minimum of milk solids, and white chocolate is defined by minimum cocoa butter and milk solids with a maximum sugar content. The important consequence for a shopper is that "milk chocolate" and "white chocolate" are legally defined terms rather than descriptions, and a product failing the minimums must be sold under a different name, which is why some products are labeled "chocolatey" or "made with chocolate."

**European Union**, under Directive 2000/36/EC. The thresholds are higher: chocolate must contain a stated minimum of total dry cocoa solids, with separate minimums for cocoa butter and for fat-free cocoa solids, and milk chocolate has its own lower total. The directive also permits a small proportion of specified vegetable fats other than cocoa butter, which was a genuinely contested political fight when it was agreed and which some producing countries opposed.

**What that means practically.** A bar that meets a legal minimum can still be poor, exactly as an appellation guarantees origin rather than quality. And the same product name can mean measurably different things in different markets.

**Now the words that mean nothing.**

- **"Belgian" and "Swiss."** Neither guarantees quality. Both are strong national reputations attached to industries, and both cover excellent and mediocre products.
- **"Artisan," "gourmet," "luxury," "premium."** Nothing.
- **"Raw."** Not meaningfully defined, and difficult to reconcile with fermentation, which generates real heat, and with the roasting that develops flavor.
- **"Single origin."** Usually accurate and only as specific as it says. A country is weak, a region better, a named cooperative or estate best.
- **"Bean to bar."** Means the maker bought beans and did everything themselves rather than melting someone else's couverture. Not a certification, generally used honestly, and not by itself a quality claim.
- **"Couverture."** This one is real: it denotes chocolate with a high cocoa butter content, formulated for fluidity so it can coat and mold well. It describes a technical property, not a quality tier.

**How to read a wrapper, in order.** Ingredients first, in their listed order, since they are the compositional truth. Then the percentage, read as a ratio rather than a score. Then origin specificity. Then any traceability the maker chooses to publish. Then, last and least, the adjectives on the front.

:::reveal A shopper reasons that a Belgian bar labelled premium at 72 percent must be better than an unbranded 70 percent bar. Take that argument apart. ||| Belgian guarantees nothing about quality, premium is not a defined term anywhere, and 72 versus 70 percent is a recipe ratio difference that could be entirely made up of added cocoa butter, which would make the higher number the MILDER bar. None of the three signals carries information. The ingredient list, the origin specificity and what the maker publishes about sourcing would all say more than any of them.

## Sources
- U.S. Food and Drug Administration. (n.d.). *Cacao products* (21 C.F.R. Part 163). https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-163
- Council Directive 2000/36/EC of the European Parliament and of the Council of 23 June 2000 relating to cocoa and chocolate products intended for human consumption. *Official Journal of the European Communities, L 197*, 19-25.`,
    },
    {
      slug: "choc-ethics",
      title: "13 · The part of this category you cannot taste",
      section: "Module 4 · Labels, ethics, choosing",
      body: `Episode 3 covered how cacao moved from Mesoamerica to West Africa. This lesson covers what that concentration means now, because a course that teaches you to appreciate chocolate and says nothing about how it is produced is teaching you to look away.

**The labor problem, with a number and a source.** A study conducted by NORC at the University of Chicago, commissioned to measure child labor in cocoa growing areas of Cote d'Ivoire and Ghana, estimated approximately **1.56 million children in child labor in cocoa production** in those two countries in the 2018/19 season, with a large majority engaged in hazardous work as defined by the survey (NORC, 2020). The figure had not fallen over the period the report examined, despite two decades of industry commitments dating to the Harkin-Engel Protocol of 2001.

Two things must be said alongside that number, because both are true and neither cancels the other:

1. **Most of this is family farm labor under extreme poverty**, not the trafficking imagery often used to describe it, though trafficking exists too. The distinction matters because the remedies differ: poverty-driven family labor responds to income, and trafficking requires enforcement.
2. **Income is the root variable.** Cocoa farming incomes in the two largest producing countries have been widely documented as falling below living income benchmarks, and a farmer who cannot pay an adult worker uses their children.

**The living income differential.** In 2019, Ghana and Cote d'Ivoire, who together grow most of the world's cocoa, jointly imposed a fixed premium per tonne on cocoa sales, explicitly to raise farmer income rather than leaving it to the world price. It is one of the few producer-side interventions of its kind in any commodity, and its effectiveness has been contested since, partly because buyers can reduce other differentials to offset it. It is worth knowing because it is producing countries acting collectively, which is exactly what Episode 3's economics implied was missing.

**The certifications, and honest limits.** Fairtrade, Rainforest Alliance and organic each address specific things: a price floor and premium, environmental and some social criteria, and prohibited inputs respectively. None is a quality mark, none audits everything, and independent evaluations of certification schemes have found mixed results on farmer income. They are better than nothing and they are not a solution.

**What actually distinguishes a serious buyer.** Published prices paid, named cooperatives or estates, multi-year relationships, and specificity. A maker who tells you what they paid per tonne and to whom is making a checkable claim, which puts them in a different category from one displaying a logo.

**What this course will not do.** It will not tell you to stop eating chocolate, and it will not pretend that buying a twelve dollar bar fixes a structural problem in a commodity chain. It will tell you that the information exists, that some makers publish it, and that asking is free.

:::reveal Why does the distinction between family farm labour under poverty and trafficking matter practically, rather than being a way to soften the number? ||| Because the two require different remedies. Poverty-driven family labor responds to farmer income: if a household can afford to hire adult workers and keep children in school, the behavior changes, which is why the living income differential and published prices paid are the relevant levers. Trafficking requires enforcement and monitoring instead. Treating all of it as one phenomenon leads to interventions aimed at the wrong mechanism, and both forms exist.

## Sources
- NORC at the University of Chicago. (2020). *Assessing progress in reducing child labor in cocoa production in cocoa growing areas of Côte d'Ivoire and Ghana*. https://www.norc.org
- Fairtrade International. (n.d.). *Cocoa standards and minimum prices*. https://www.fairtrade.net
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.`,
    },
    {
      slug: "choc-pairing-and-blind",
      title: "14 · Pairing, and calling a bar blind",
      section: "Module 4 · Labels, ethics, choosing",
      body: `**Pairing chocolate is the same mechanics the wine course teaches**, with one addition: chocolate brings both fat and bitterness, and both interact strongly.

| Interaction | What happens | Use it for |
| --- | --- | --- |
| **Bitter adds to bitter** | Chocolate's bitterness compounds with a tannic red wine or an over-extracted coffee | The most common pairing failure. High-percentage dark plus a young tannic red is genuinely unpleasant |
| **Sweet must not be outgunned** | A drink less sweet than the chocolate tastes sour and thin beside it | Sweet fortified wines work with dark chocolate for this exact reason |
| **Fat softens and coats** | Cocoa butter coats the palate and blunts what follows | Taste chocolate LAST in any mixed tasting, and give the palate longer than you think |
| **Acid cuts fat** | A high-acid drink refreshes between bites | Why a bright coffee works better with chocolate than a heavy dark roast |
| **Salt suppresses bitterness** | Salt reduces perceived bitterness directly | Why salted dark chocolate works, and it is a mechanism rather than a fashion |

**Three reliable pairings and the reason each works.** Sweet fortified wine with high-percentage dark, because the wine's sweetness is not outgunned and its own intensity survives. Bright acidic coffee with a fruity origin bar, because acid cuts the fat and the fruit characters echo. Salted nuts with dark chocolate, because salt suppresses bitterness while fat and protein round the astringency.

**The pairing to avoid**, and it is the one people most often attempt: a young, tannic dry red with a high-percentage dark bar. Bitterness compounds, the wine's tannin and the chocolate's astringency compound, and the chocolate's sugar makes the dry wine taste sour.

**Calling a bar blind.** The order of difficulty is the important part, and it mirrors coffee:

1. **Milk or dark**, which is nearly always callable.
2. **A rough percentage band.** Sweetness and bitterness together get you close.
3. **Craft or industrial.** Conching is the tell: industrial reads smoother, rounder and quieter, craft keeps more acidity and edge.
4. **Origin character**, and hedge deliberately. "Bright and fruity" or "earthy and nutty" is a better answer than a country, because fermentation and roast can outrun origin entirely.

**Record errors by type.** "I keep reading heavy roast as high percentage" is actionable. "I said Ecuador and it was Peru" is not.

${flightCard(FLIGHT_5, ALT)}

:::reveal Why is a young tannic dry red with a high-percentage dark bar such a reliably bad pairing? Name three separate mechanisms. ||| First, bitterness compounds: the chocolate's bitterness adds to the wine's rather than balancing it. Second, astringency compounds: the wine's tannin and the chocolate's polyphenols both dry the mouth, and together they strip it. Third, sweetness outguns: even a high-percentage bar carries sugar, and a dry wine tasted against something sweeter reads sour and thin. A sweet fortified wine avoids all three at once.

## Sources
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.`,
    },
    {
      slug: "choc-label-drill",
      title: "15 · Drill: read the wrapper",
      section: "Module 4 · Labels, ethics, choosing",
      body: `Each prompt gives you a wrapper or a symptom. Say what it means, or name the cause. Short typed answers, checked forgivingly.

The habit being built is separating the enforceable from the decorative, which is worth real money at a shop counter and is the same habit the wine and coffee courses drill.`,
      exercise: {
        instructions: "Answer in a few words. Where a term carries no guarantee, say so plainly.",
        items: [
          {
            prompt: "A wrapper says Belgian. What quality guarantee does that carry?",
            answer: "none",
            accept: ["no guarantee", "nothing", "none at all"],
            explanation:
              "A strong national reputation attached to an industry that makes both excellent and mediocre chocolate. Swiss carries the same non-guarantee.",
          },
          {
            prompt: "A dark bar lists sugar as the FIRST ingredient. What does that tell you?",
            answer: "it is more than half sugar",
            accept: [
              "more sugar than cocoa mass",
              "sugar is the largest component",
              "over half sugar",
            ],
            explanation:
              "Ingredients are listed by descending weight. Normal for milk chocolate, and informative on a bar sold as dark.",
          },
          {
            prompt: "Two 70 percent bars, and one lists a much larger share of added cocoa butter. Which is milder, and why?",
            answer: "the one with more cocoa butter, because butter is neutral fat",
            accept: [
              "the added cocoa butter one, fat is neutral",
              "more cocoa butter is milder",
              "the cocoa butter bar, less cocoa mass",
            ],
            explanation:
              "Cocoa mass carries bitterness, astringency and flavor. Reaching the same percentage with fat produces a softer, richer, less intense bar.",
          },
          {
            prompt: "Greyish, streaky film on a bar left in a warm car. Which bloom, and is it dangerous?",
            answer: "fat bloom, not dangerous",
            accept: [
              "fat bloom, safe",
              "fat bloom and it is safe to eat",
              "fat bloom, harmless",
            ],
            explanation:
              "Temperature swings let cocoa butter migrate and recrystallise into a more stable form. Texture is ruined, safety is not affected.",
          },
          {
            prompt: "Gritty, crystalline white specks on a bar stored in the fridge. Which bloom?",
            answer: "sugar bloom",
            accept: ["sugar bloom, from moisture", "sugar"],
            explanation:
              "Moisture dissolves surface sugar, which recrystallises as it dries. It is the specific reason the fridge is the wrong place for chocolate.",
          },
          {
            prompt: "What does the term couverture actually describe?",
            answer: "high cocoa butter content for fluidity",
            accept: [
              "chocolate with high cocoa butter, formulated to coat",
              "high cocoa butter for coating and moulding",
              "more cocoa butter, more fluid",
            ],
            explanation:
              "A technical property rather than a quality tier, and unlike premium or artisan it is a real, defined term.",
          },
          {
            prompt: "A bar is labelled bean to bar. What does that claim, and is it a certification?",
            answer: "the maker processed beans themselves, and it is not a certification",
            accept: [
              "made from beans by the maker, not a certification",
              "the maker did everything from beans, no certification",
              "not a certification, maker processed the beans",
            ],
            explanation:
              "It distinguishes a maker from one melting someone else's couverture. Generally used honestly, and not by itself a quality claim.",
          },
          {
            prompt: "A bar is astringent, flat and vegetal no matter how it is tasted. Which stage most likely failed?",
            answer: "fermentation, under-fermented beans",
            accept: [
              "fermentation",
              "under-fermentation",
              "poor fermentation at origin",
            ],
            explanation:
              "Under-fermented beans give the roast no precursors to work with, and no downstream skill can repair it.",
          },
          {
            prompt: "Which is the most informative thing a maker can print, per this course?",
            answer: "the price paid and who they bought from",
            accept: [
              "published price paid and the producer",
              "what they paid and to whom",
              "traceable sourcing with prices",
            ],
            explanation:
              "A checkable claim puts a maker in a different category from one displaying a logo, since no certification audits everything.",
          },
          {
            prompt: "Name the pairing the course says to avoid, in a few words.",
            answer: "young tannic dry red wine with high percentage dark chocolate",
            accept: [
              "tannic red wine and dark chocolate",
              "dry tannic red with dark chocolate",
              "young red wine with high percentage dark",
            ],
            explanation:
              "Bitterness compounds, astringency compounds, and the chocolate's sugar makes the dry wine taste sour. Three mechanisms failing at once.",
          },
        ],
      },
    },
    {
      slug: "choc-capstone",
      title: "16 · Capstone: buy, taste, and defend four bars",
      section: "Module 4 · Labels, ethics, choosing",
      lessonType: "assignment",
      body: `One assignment, four bars, a written defense. Nobody can complete it by reading, and the dairy-free path completes it fully.

**The brief.** You are assembling a tasting for four people, with a total budget of forty US dollars for four bars, chosen so the set teaches something rather than simply being four things you like.

**What to submit.**

**1. Four bars, with reasoning.** For each: what you bought, what it cost, and WHY. State what variable your set holds constant and what it varies (percentage, origin, maker, process). A set that varies everything at once teaches nothing, and saying which variable you controlled is most of the grade.

**2. A full tasting note on each**, on the grid from Lesson 3: appearance, snap, aroma, melt, then bitterness, astringency, acidity, sweetness, then flavor, then finish. Every score defended by a sensation, not by the wrapper.

**3. An ingredient-list analysis.** For each bar, what the list tells you about the maker's decisions: cocoa mass versus added cocoa butter, lecithin, vanilla, and where sugar falls in the order. Then say which bar the list predicted correctly and which one surprised you.

**4. A blind call on one bar.** Have someone unwrap it among the others. Work the order from Lesson 14: milk or dark, percentage band, craft or industrial, then origin character. Commit in writing, then reveal, and if you were wrong name the ONE observation that should have redirected you.

**5. The sourcing question, honestly.** For one bar, write what you can actually establish about where the beans came from and what was paid. "The maker publishes nothing and I could not find out" is a legitimate and useful finding that scores as well as a fully traceable bar.

**6. One pairing, tested.** Pick a mechanism from Lesson 14, predict what will happen, run it, and report what actually moved. A pairing that failed, analyzed honestly, scores as well as one that worked.

**The dairy-free, lower-sugar version.** Use four dark bars at 70 percent and above, which are almost always dairy free, and hold the percentage constant while varying origin or maker. The blind call drops the milk-versus-dark step and keeps the other three. Graded identically.

**What a strong submission looks like.** It names its controlled variable, cites its own evidence, and admits at least one thing that surprised it.`,
    },
    {
      slug: "choc-review-and-sources",
      title: "17 · Cumulative review and sources",
      section: "Module 4 · Labels, ethics, choosing",
      body: `**The percentage is a recipe ratio**, cocoa mass plus cocoa butter, not a quality score and not reliably an intensity measure. It does roughly tell you how much sugar is not in the bar. The ingredient list says more.

**Let it melt, never chew.** Chocolate arrives solid, and melt is how aroma reaches the retronasal route. Cocoa butter is nearly solid at room temperature and nearly melted at body temperature, which is the entire trick.

**The grid runs appearance, snap, aroma, melt, flavor and structure, finish**, least suggestible evidence first. Texture is data. Finish is longer than almost anything you will taste.

**Bitterness is a taste, astringency is a texture**, and astringency often means under-fermented beans.

**The old Criollo, Forastero, Trinitario framework is superseded.** Ten genetic clusters, and Forastero was a bucket holding most of the diversity. Variety claims are weaker evidence than they look.

**A raw bean does not taste of chocolate.** Fermentation at origin creates the precursors, roasting converts them. The largest quality lever sits with the farmer, days after harvest, furthest from the money.

**Origin is the fourth thing to reason about**, after percentage, fermentation quality and roast, and process markers such as wood-fired drying will masquerade as origin character if you let them.

**Conching is the industrial-versus-craft tell.** Long conching means smoother, rounder, quieter. Preferring it is allowed.

**Tempering means Form V**, which alone gives snap, gloss, the right melting point and contraction. Fat bloom is grayish and streaky from temperature swings, sugar bloom is gritty from moisture, neither is dangerous, both are usually storage failures after purchase.

**Standards of identity set minimum compositions** in the US and EU and nothing more. Belgian, Swiss, artisan, premium and raw guarantee nothing. Couverture and bean to bar mean something specific.

**The ethics are not optional context.** Roughly 1.56 million children were estimated in child labor in cocoa in Cote d'Ivoire and Ghana in 2018/19, income is the root variable, and published prices paid beat logos.

**Pairing:** bitter adds to bitter, sweet must not be outgunned, salt suppresses bitterness, and chocolate goes LAST in any mixed tasting because fat coats the palate.

:::reveal Without looking back, explain why an 85 percent bar is not necessarily more intense than a 70 percent one, and name the one thing you would read instead. ||| Because the percentage counts cocoa mass and cocoa butter together, and only cocoa mass carries bitterness, astringency and flavor. A maker can reach 85 percent with a large share of added cocoa butter, producing a softer, richer, milder bar than a 70 percent bar built mostly from mass. The thing to read instead is the ingredient list in its listed order, since ingredients are declared by descending weight and will show you where the cocoa butter sits.

## Sources

**Law and standards**
- Council Directive 2000/36/EC of the European Parliament and of the Council of 23 June 2000 relating to cocoa and chocolate products intended for human consumption. *Official Journal of the European Communities, L 197*, 19-25.
- U.S. Food and Drug Administration. (n.d.). *Cacao products* (21 C.F.R. Part 163). https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-163

**Science**
- Afoakwa, E. O., Paterson, A., Fowler, M., & Ryan, A. (2008). Flavor formation and character in cocoa and chocolate: A critical review. *Critical Reviews in Food Science and Nutrition, 48*(9), 840-857. https://doi.org/10.1080/10408390701719272
- Beckett, S. T., Fowler, M. S., & Ziegler, G. R. (Eds.). (2017). *Beckett's industrial chocolate manufacture and use* (5th ed.). Wiley-Blackwell.
- Buck, L., & Axel, R. (1991). A novel multigene family may encode odorant receptors: A molecular basis for odor recognition. *Cell, 65*(1), 175-187. https://doi.org/10.1016/0092-8674(91)90418-X
- Lawless, H. T., & Heymann, H. (2010). *Sensory evaluation of food: Principles and practices* (2nd ed.). Springer.
- Motamayor, J. C., Lachenaud, P., da Silva e Mota, J. W., Loor, R., Kuhn, D. N., Brown, J. S., & Schnell, R. J. (2008). Geographic and genetic population differentiation of the Amazonian chocolate tree (Theobroma cacao L.). *PLoS ONE, 3*(10), e3311. https://doi.org/10.1371/journal.pone.0003311
- Wille, R. L., & Lutton, E. S. (1966). Polymorphism of cocoa butter. *Journal of the American Oil Chemists' Society, 43*(8), 491-496. https://doi.org/10.1007/BF02641273

**Labour and trade**
- Fairtrade International. (n.d.). *Cocoa standards and minimum prices*. https://www.fairtrade.net
- NORC at the University of Chicago. (2020). *Assessing progress in reducing child labor in cocoa production in cocoa growing areas of Côte d'Ivoire and Ghana*. https://www.norc.org`,
    },
  ],
};
