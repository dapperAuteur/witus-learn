// The Teachers Pay Teachers rollout plan, owner-facing at /admin/tpt-plan. The goal is to reach the
// most teachers and convert them into Learn.WitUS buyers, so the ORDER encodes a sales strategy, not
// just a course list. TpT ranks products largely by sales velocity and review count, and reviews
// only come from downloads, so the plan front-loads a free gateway to accumulate followers and
// reviews, then rides that ranking into paid units and finally bundles (which lift average order
// value once the individual units have reviews).
//
// Pricing follows what the already-built packets used ($9 for a full history unit, $7 for a state
// civics unit) and ordinary TpT norms (free gateway, $3-5 mini, $7-12 unit, $15-25 bundle). These are
// RECOMMENDATIONS; the owner sets the final price on TpT. No number here is a promise about sales.
//
// `courseSlug` is used only to show the real standards count the course already carries (a genuine
// TpT selling point), pulled from src/lib/standards at render time. Bundles have no single slug.

export type TptStatus = "built" | "next" | "planned";
export type TptTier = "gateway" | "unit" | "bundle";

export interface TptPlanItem {
  /** Rollout order. Lower ships first. */
  order: number;
  /** TpT product title (what a teacher searches and sees). */
  title: string;
  /** The course this packet is drawn from, for the live standards count. Omit for bundles. */
  courseSlug?: string;
  /** Bundle members, by courseSlug, for the standards rollup. */
  bundleSlugs?: string[];
  status: TptStatus;
  /** Directory under plans/future-courses/tpt-packets/ when the packet exists. */
  packetDir?: string;
  /** Recommended TpT price. "Free" for the gateway. */
  price: string;
  tier: TptTier;
  /** Why it sits here in the order and at this price, in sales terms. */
  rationale: string;
  /** Where a buyer of this is steered next (the cross-sell). */
  crossSell: string;
}

export const TPT_STRATEGY = [
  "Lead with a FREE gateway. TpT search rank is driven by sales velocity and reviews, and reviews only come from downloads, so a strong free product buys followers and reviews that lift every paid listing after it.",
  "Then state-civics units, which are high-intent and lower-competition: teachers search '<state> civics', and a state-specific packet meets that search with little rivalry.",
  "Then the differentiated flagship (Green Book), which is unlike anything else on TpT and cross-sells the highest-value catalog (the fourteen-course route series).",
  "Then evergreen broad units (US Constitution, Great Migration) for steady volume.",
  "Finally bundles, once the individual units have reviews, to lift average order value.",
  "Every listing's description points back to the full cited, standards-aligned course at Learn.WitUS.Online. The packet is the taste; the platform is the meal.",
];

export const TPT_PLAN: TptPlanItem[] = [
  {
    order: 1,
    title: "WOOP Goal-Setting: a free student printable",
    courseSlug: "woop-science-of-doing-it",
    status: "built",
    packetDir: "woop-goal-setting-printable",
    price: "Free",
    tier: "gateway",
    rationale:
      "The follower-and-review engine. A genuinely useful free printable gets downloaded widely, and those downloads become the reviews and follower count that rank every paid listing below it. List this first and promote it hardest.",
    crossSell: "Followers see every paid unit next; the printable footer links to Learn.WitUS.Online.",
  },
  {
    order: 2,
    title: "Indiana Civics: a printable unit",
    courseSlug: "state-civics-in",
    status: "built",
    packetDir: "indiana-civics-unit",
    price: "$7",
    tier: "unit",
    rationale:
      "State civics is high-intent, low-competition search traffic. Indiana teachers searching 'Indiana civics' find little; this meets that search directly. $7 matches the state-civics norm.",
    crossSell: "The wider US-civics catalog and the other state-civics units.",
  },
  {
    order: 3,
    title: "Illinois Civics: a printable unit",
    courseSlug: "state-civics-il",
    status: "built",
    packetDir: "illinois-civics-unit",
    price: "$7",
    tier: "unit",
    rationale:
      "Same play as Indiana in a far bigger market (Illinois has one of the largest public-school teacher populations). High-intent search, little rivalry.",
    crossSell: "US Constitution, how a bill becomes law, and the state-civics series.",
  },
  {
    order: 4,
    title: "Arizona Civics: a printable unit",
    courseSlug: "state-civics-az",
    status: "built",
    packetDir: "arizona-civics-unit",
    price: "$7",
    tier: "unit",
    rationale:
      "Arizona civics is a strong niche (state-specific institutions, direct democracy). Meets '<state> civics' search with an honest, cited unit.",
    crossSell: "The federal companion courses that complete Arizona's anchor standards.",
  },
  {
    order: 5,
    title: "The Green Book: How to Read a Route",
    courseSlug: "green-book-how-to-read-a-route",
    status: "built",
    packetDir: "green-book-unit",
    price: "$9",
    tier: "unit",
    rationale:
      "The differentiated flagship. Nothing else on TpT teaches primary-source route reconstruction like this, so it stands out in search and in a browse. $9 for a full history unit, matching Great Migration.",
    crossSell:
      "The single best cross-sell in the catalog: it is the method course for the fourteen-course route series.",
  },
  {
    order: 6,
    title: "The Great Migration: a printable unit",
    courseSlug: "great-migration-and-the-world",
    status: "built",
    packetDir: "great-migration-unit",
    price: "$9",
    tier: "unit",
    rationale:
      "Evergreen US-history search volume (widely taught, heavily searched). Steady baseline sales once it has reviews.",
    crossSell: "The route series and the positive-track history courses.",
  },
  {
    order: 7,
    title: "US Constitution: a mini-unit",
    courseSlug: "us-constitution-101",
    status: "built",
    packetDir: "us-constitution-mini-unit",
    price: "$5",
    tier: "unit",
    rationale:
      "The broadest evergreen civics topic, priced as a mini-unit to be an easy add-on impulse buy alongside the state units.",
    crossSell: "The full civics catalog and the state-civics units.",
  },
  {
    order: 8,
    title: "Who Has the Power? A civics method unit",
    courseSlug: "who-has-the-power",
    status: "built",
    packetDir: "who-has-the-power-unit",
    price: "$9",
    tier: "unit",
    rationale:
      "Newly shipped, unusually strong for civics classrooms (Dillon's Rule, tribal sovereignty as a separate sovereign). Differentiated and standards-aligned.",
    crossSell: "The Local Layer and the rest of the government-structures path.",
  },
  {
    order: 9,
    title: "What They Built: Black business districts",
    courseSlug: "what-they-built",
    status: "built",
    packetDir: "what-they-built-unit",
    price: "$9",
    tier: "unit",
    rationale:
      "Economics-and-history crossover with a clear standards story; complements the Great Migration and Green Book units for a Black-history bundle later.",
    crossSell: "The positive-track courses and the Green Book unit.",
  },
  {
    order: 10,
    title: "California Civics: a printable unit",
    courseSlug: "state-civics-ca",
    status: "built",
    packetDir: "california-civics-unit",
    price: "$7",
    tier: "unit",
    rationale:
      "Largest teacher market in the country. Once the state-civics format has reviews, add the highest-population states (CA, TX, FL, NY) for the most reach per unit built.",
    crossSell: "The state-civics series and the US-civics catalog.",
  },
  {
    order: 11,
    title: "Texas Civics: a printable unit",
    courseSlug: "state-civics-tx",
    status: "built",
    packetDir: "texas-civics-unit",
    price: "$7",
    tier: "unit",
    rationale:
      "Second-largest teacher market in the country, and the most distinctive state-civics story in the series (deliberately weak governor, biennial legislature, two high courts, no citizen initiative), so it stands out in high-intent search. $7 matches the state-civics norm.",
    crossSell: "The state-civics series (especially California as the direct-democracy contrast) and the US-civics catalog.",
  },
  {
    order: 12,
    title: "Florida Civics: a printable unit",
    courseSlug: "state-civics-fl",
    status: "built",
    packetDir: "florida-civics-unit",
    price: "$7",
    tier: "unit",
    rationale:
      "Third-largest teacher market in the country, and Florida civics is high-intent, low-competition search. Written from Florida's own sources, it meets 'Florida civics' directly. $7 matches the state-civics norm.",
    crossSell: "The state-civics series (Indiana, Illinois, Arizona, California) and the US-civics catalog.",
  },
  {
    order: 13,
    title: "New York Civics: a printable unit",
    courseSlug: "state-civics-ny",
    status: "built",
    packetDir: "new-york-civics-unit",
    price: "$7",
    tier: "unit",
    rationale:
      "Another of the highest-population teacher markets (the California item names NY as a target), and the mirror image of California (no statewide initiative, inverted court names), so it pairs naturally with the CA unit for compare-and-contrast. High-intent search, little rivalry. $7 matches the state-civics norm.",
    crossSell: "The California unit as its mirror-image pair, plus the US-civics catalog and the rest of the state-civics series.",
  },
  {
    order: 14,
    title: "Ohio Civics: a printable unit",
    courseSlug: "state-civics-oh",
    status: "built",
    packetDir: "ohio-civics-unit",
    price: "$7",
    tier: "unit",
    rationale:
      "Ohio requires a half-unit of American Government to graduate and gives a state end-of-course exam on it, so 'Ohio civics' is high-intent, low-competition search traffic. Ohio's own standards name Ohio's government (Content Statements 16 and 17), so the alignment is unusually strong (a real 1:1 home, not adjacency). $7 matches the state-civics norm.",
    crossSell: "US Constitution (the federal half of Ohio's American Government standards), how a bill becomes law, and the other state-civics units.",
  },
  {
    order: 15,
    title: "Georgia Civics: a printable unit",
    courseSlug: "state-civics-ga",
    status: "built",
    packetDir: "georgia-civics-unit",
    price: "$7",
    tier: "unit",
    rationale:
      "Another of the highest-population teacher markets, and the mirror image of California (no statewide citizen initiative, so amendments reach the ballot only by legislative referral), which pairs naturally with the CA and NY units for compare-and-contrast. Georgia's own civics standards name Georgia's government (SSCG17), so the alignment is on-point rather than stretched, and recently-changed election rules (SB 202) plus the majority-vote runoff make it high-intent, low-competition search. $7 matches the state-civics norm.",
    crossSell: "The California and New York units as its no-initiative pair, plus the US-civics catalog and the rest of the state-civics series.",
  },
  {
    order: 16,
    title: "North Carolina Civics: a printable unit",
    courseSlug: "state-civics-nc",
    status: "built",
    packetDir: "north-carolina-civics-unit",
    price: "$7",
    tier: "unit",
    rationale:
      "A large teacher market (top-ten by population), and the most distinctive executive story in the series (a plural elected Council of State, and the last state to give its governor a veto in 1997, overridden by only three-fifths), so it stands out in high-intent, low-competition search. $7 matches the state-civics norm.",
    crossSell: "The state-civics series (especially California and Arizona as the direct-democracy contrast, since North Carolina has no citizen initiative) and the US-civics catalog.",
  },
  {
    order: 17,
    title: "Michigan Civics: a printable unit",
    courseSlug: "state-civics-mi",
    status: "built",
    packetDir: "michigan-civics-unit",
    price: "$7",
    tier: "unit",
    rationale:
      "Large Midwest teacher market, and the clearest citizen-power story in the series (voters created the Independent Citizens Redistricting Commission by initiative, a national first, and kept a strong initiative, referendum, and recall). Michigan's 2019 civics standards also carry a dedicated state-government cluster, so the alignment maps cleanly. $7 matches the state-civics norm.",
    crossSell: "The state-civics series (especially Texas or Indiana as the no-initiative contrast) and the US-civics catalog.",
  },
  {
    order: 18,
    title: "State Civics Bundle (Indiana, Illinois, Arizona, and more)",
    bundleSlugs: ["state-civics-in", "state-civics-il", "state-civics-az", "state-civics-ca", "state-civics-tx", "state-civics-fl", "state-civics-ny", "state-civics-oh", "state-civics-ga", "state-civics-nc", "state-civics-mi"],
    status: "planned",
    price: "$18",
    tier: "bundle",
    rationale:
      "Lifts average order value once the individual state units have reviews. Priced below the sum of its parts, the standard TpT bundle discount, to convert single-unit buyers into multi-unit buyers.",
    crossSell: "The full state-civics series at Learn.WitUS.Online.",
  },
  {
    order: 19,
    title: "Black History Through Place Bundle (Green Book, Great Migration, What They Built)",
    bundleSlugs: ["green-book-how-to-read-a-route", "great-migration-and-the-world", "what-they-built"],
    status: "planned",
    price: "$22",
    tier: "bundle",
    rationale:
      "A themed bundle for the highest-value cross-sell, the route series. A teacher who buys this is the most likely to move to the full catalog.",
    crossSell: "The entire fourteen-course route series and the positive track.",
  },
];
