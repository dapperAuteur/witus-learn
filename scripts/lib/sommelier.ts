// Shared scaffold for the BVC Sommelier series (plans/53-bvc-sommelier-series-wine.md).
//
// Wine is course #1; chocolate, coffee, tea, beer, whiskey, rum and cannabis follow. The point of
// this module is that the SHAPE of tasting is the same across all of them, so a learner who builds
// the vocabulary on wine carries it into rum instead of relearning it. What differs per commodity
// is the raw material, the process, and the law, which is why only the transferable parts live
// here and every commodity's actual content stays in its own course file.
//
// Three things are shared:
//   1. TASTING_GRID  - the four stages of a systematic tasting, in order.
//   2. STRUCTURE     - the structural components a taster scores, and what each one physically is.
//   3. flightCard()  - renders a tasting flight (what to buy, the budget, the procedure, and the
//                      NO-ALCOHOL parallel) as the same markdown block in every course.
//
// The no-alcohol path is not a footnote. BAM's decision for the series is that every tasting drill
// has a non-alcoholic parallel, so a learner who does not drink can still build the palate. That is
// why `noAlcohol` is a REQUIRED field on a flight: it cannot be forgotten by omission.

/** One stage of the systematic approach. Deliberately generic: the same four stages work for
 *  coffee, chocolate and rum, which is the whole reason this is shared. */
export interface TastingStage {
  key: "sight" | "nose" | "palate" | "conclusion";
  label: string;
  /** What the learner is actually doing, in one line. */
  does: string;
  /** The mistake beginners make at this stage. */
  trap: string;
}

export const TASTING_GRID: TastingStage[] = [
  {
    key: "sight",
    label: "Sight",
    does: "Tilt the glass over something white and read clarity, intensity, colour and rim.",
    trap: "Guessing the wine from colour alone. Colour narrows the field, it does not name the wine.",
  },
  {
    key: "nose",
    label: "Nose",
    does: "Smell before swirling, then swirl and smell again, and name what you actually smell.",
    trap: "Reaching for someone else's descriptor. If it smells like your grandmother's pantry, say that.",
  },
  {
    key: "palate",
    label: "Palate",
    does: "Score the structural components (below) before you look for flavours.",
    trap: "Describing flavour first. Structure is measurable, flavour is associative, so structure comes first.",
  },
  {
    key: "conclusion",
    label: "Conclusion",
    does: "Say what the wine is, how good it is, and whether it is ready, and give your reason.",
    trap: "Confusing quality with preference. A wine can be excellent and not for you, and you should be able to say both.",
  },
];

/** A structural component: the measurable half of tasting. */
export interface StructuralComponent {
  key: "sweetness" | "acid" | "tannin" | "alcohol" | "body" | "finish";
  label: string;
  /** What it physically is, so the learner is measuring a thing, not a vibe. */
  physically: string;
  /** Where in the mouth you feel it. This is the part that makes it teachable. */
  feltAs: string;
  /** The everyday, non-alcoholic reference that calibrates it. */
  calibrateWith: string;
}

export const STRUCTURE: StructuralComponent[] = [
  {
    key: "sweetness",
    label: "Sweetness",
    physically: "Residual sugar left unfermented, measured in grams per litre.",
    feltAs: "Tip of the tongue, first impression, before anything else registers.",
    calibrateWith: "Water with no sugar, then a quarter teaspoon of sugar per cup, then a full teaspoon.",
  },
  {
    key: "acid",
    label: "Acidity",
    physically: "Mostly tartaric and malic acid from the grape, plus lactic acid if the wine went through malolactic conversion.",
    feltAs: "Sides of the tongue and under the jaw. It makes you salivate, which is the tell.",
    calibrateWith: "Lemon juice in water at rising strength, or plain versus a squeeze of lime.",
  },
  {
    key: "tannin",
    label: "Tannin",
    physically: "Phenolic compounds extracted from grape skins, seeds and stems, and from oak.",
    feltAs: "Not a taste at all, a texture. Gums and the roof of the mouth go dry and grippy.",
    calibrateWith: "Black tea steeped four minutes, then eight, then twelve. Same leaf, rising grip.",
  },
  {
    key: "alcohol",
    label: "Alcohol",
    physically: "Ethanol produced by fermentation, expressed as alcohol by volume.",
    feltAs: "Warmth down the throat and across the chest after you swallow or spit.",
    calibrateWith: "No substitute. On the no-alcohol path, read the stated ABV and skip this line.",
  },
  {
    key: "body",
    label: "Body",
    physically: "Perceived weight, driven mostly by alcohol, sugar and extract rather than by flavour.",
    feltAs: "Weight on the middle of the tongue, the way whole milk differs from skim.",
    calibrateWith: "Skim milk, then whole milk, then half and half. Same flavour family, three weights.",
  },
  {
    key: "finish",
    label: "Finish",
    physically: "How long the flavour and structure persist after the wine is gone.",
    feltAs: "Count the seconds after you swallow or spit until the taste actually stops.",
    calibrateWith: "Count after a sip of black coffee, then after a sip of water. Learn what long and short feel like.",
  },
];

/** One bottle in a flight. `target` is what to ask for, never a specific producer: naming a
 *  producer would date the course and read as an endorsement nobody paid for. */
export interface FlightBottle {
  /** What this bottle is in the flight FOR. */
  role: string;
  /** What to ask a shop for, in words a shop will understand. */
  target: string;
  /** Price band in US dollars, as a range, e.g. "15-20". A band, because wine pricing varies by
   *  state, market and vintage, and a single number would be a guess presented as a fact. */
  priceUsd: string;
  /** An acceptable stand-in when the target is unavailable. */
  substitute?: string;
}

export interface Flight {
  /** Flight number as the learner sees it. 0 is the non-alcoholic calibration set. */
  n: number;
  title: string;
  /** The one thing this flight exists to teach. */
  teaches: string;
  /** `core` flights are the budget spine. `splurge` flights are the two or three where the cheap
   *  bottle genuinely cannot demonstrate the lesson, and the course says why before asking. */
  tier: "core" | "splurge";
  bottles: FlightBottle[];
  /** Ordered steps. Written so they work with a spit cup and no swallowing. */
  procedure: string[];
  /** What a learner should be able to say afterwards. */
  lookFor: string;
  /** The parallel drill for a learner who does not drink alcohol. Required, never optional. */
  noAlcohol: string;
}

/** Total price band of a flight, summed from its bottles, e.g. "45-60". */
export function flightCost(f: Flight): string {
  let low = 0;
  let high = 0;
  for (const b of f.bottles) {
    const [a, z] = b.priceUsd.split("-");
    low += Number(a);
    high += Number(z ?? a);
  }
  return low === high ? `${low}` : `${low}-${high}`;
}

/**
 * Renders a flight as the markdown block every course in the series uses.
 *
 * Kept as a builder rather than hand-written markdown per lesson so that the no-alcohol path, the
 * price band and the spit-cup instruction cannot be dropped from one course and not another. The
 * output carries no em dashes, per the content policy.
 */
export function flightCard(f: Flight): string {
  const heading =
    f.n === 0
      ? `## Flight 0: ${f.title}`
      : `## Flight ${f.n}: ${f.title}${f.tier === "splurge" ? " (splurge flight)" : ""}`;

  const rows = f.bottles
    .map(
      (b) =>
        `| ${b.role} | ${b.target} | $${b.priceUsd} | ${b.substitute ?? "Ask the shop for the closest thing they have"} |`,
    )
    .join("\n");

  const steps = f.procedure.map((s, i) => `${i + 1}. ${s}`).join("\n");

  return `${heading}

**What it teaches:** ${f.teaches}
**Budget:** about $${flightCost(f)} for the set${f.tier === "splurge" ? ", and this is one of the flights where a cheaper bottle genuinely cannot show you the thing" : ""}.

| In the flight for | Ask for | Price band | If they are out |
| --- | --- | --- | --- |
${rows}

**How to run it**

${steps}

**You have got it when:** ${f.lookFor}

**Without alcohol:** ${f.noAlcohol}`;
}

/** The standing safety and method note that opens every tasting lesson in the series. Written once
 *  so it cannot drift between courses. */
export const TASTING_METHOD_NOTE = `> **Spit, do not swallow.** A flight is four to six pours. Tasters spit because the goal is a working palate for an hour, not a buzz for twenty minutes, and because ethanol flattens your discrimination fast. Pour about 30 ml (an ounce), taste, spit into an opaque cup, and rinse with water between wines. Never drive after a tasting, spitting included. If you do not drink, run the no-alcohol drill at the bottom of each flight instead: it teaches the same structure with the same vocabulary.`;
