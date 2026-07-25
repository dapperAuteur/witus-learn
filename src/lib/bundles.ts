// Proposed bundles for selling on the app AND on Teachers Pay Teachers, owner-facing at
// /admin/pricing. A bundle is a themed set of courses sold together at a discount. These are
// RECOMMENDATIONS with a justification for EACH channel; the app cannot yet SELL a bundle (see
// plans/48 and the operator task), so treat these as the plan the bundle-sales feature will seed.
//
// Two channels, two products, two prices:
//   - APP bundle: the full interactive courses, sold as one purchase. Priced at a real discount off
//     the sum of the members' proposed course prices, and deliberately kept ABOVE the $99/year
//     all-access subscription is not (a single theme bundle should be cheaper than all-access, so the
//     subscription stays the best deal for a heavy user while a bundle is the best deal for someone
//     who wants one theme).
//   - TPT bundle: the printable PACKETS for the same theme, following TpT norms ($15-25), discounted
//     off the sum of the individual packet prices. Only lists packets that exist or are queued.
//
// `appMembers` are course slugs (used to compute the honest sum-of-parts on the admin page). Every
// price is a recommendation; no number here is a revenue promise.

export interface BundleProposal {
  slug: string;
  title: string;
  /** Course slugs in the app bundle, for the sum-of-parts and savings math. */
  appMembers: string[];
  /** Recommended app price (one-time), USD. */
  appPrice: number;
  /** Why this app price is fair and competitive. */
  appJustification: string;
  /** Recommended TpT bundle price, USD, or null if no TpT packets exist for it yet. */
  tptPrice: number | null;
  /** Why this TpT price, and which packets it bundles. */
  tptJustification: string;
}

const ROUTE_SERIES = [
  "green-book-how-to-read-a-route",
  "indiana-avenue-a-district-and-what-replaced-it",
  "the-gym-and-the-color-line",
  "two-racetracks",
  "mudsock-how-a-rivalry-marks-a-boundary",
  "the-presidents-house",
  "fort-harrison-the-federal-footprint",
  "dc-where-the-instrument-was-blessed",
  "philadelphia-the-university-and-the-block",
  "seattle-the-modern-bookend",
  "baltimore-the-whole-chain",
  "pittsburgh-where-the-playbook-was-written",
  "how-the-tools-travelled",
  "exported-how-others-studied-american-race-law",
];

export const BUNDLE_PROPOSALS: BundleProposal[] = [
  {
    slug: "route-series-complete",
    title: "The Route Series (Complete)",
    appMembers: ROUTE_SERIES,
    appPrice: 99,
    appJustification:
      "Fourteen cited courses that build one argument. Sold singly they add up to well over $250, so $99 is a deep, obvious discount that turns the whole series into one decision. It sits at the same number as a year of all-access on purpose: a buyer who only wants this theme pays $99 once; a buyer who wants everything pays $99 a year, so the subscription still wins for a heavy user.",
    tptPrice: 22,
    tptJustification:
      "Bundles the Green Book packet with the metro-city packets as they ship. $22 is a standard TpT theme-bundle price, below the sum of the individual $9 units, and it is the highest-value cross-sell on TpT because a buyer of the method packet is the likeliest to come to the app for the full series.",
  },
  {
    slug: "black-history-through-place",
    title: "Black History Through Place",
    appMembers: [
      "green-book-how-to-read-a-route",
      "great-migration-and-the-world",
      "what-they-built",
      "where-we-rested",
      "the-schoolhouse-network",
    ],
    appPrice: 59,
    appJustification:
      "Five flagship history courses (the Green Book method, the Great Migration, and the three positive-track courses) whose proposed prices sum to roughly $105. $59 is a clear bundle discount and a strong standalone product for a Black-history or US-history unit, well below what a district pays per seat for comparable cited curriculum.",
    tptPrice: 22,
    tptJustification:
      "Bundles the Green Book and Great Migration packets (built) with What They Built (queued). $22 fits the TpT theme-bundle band and beats the sum of the $9 units; the theme is heavily searched in February and year-round.",
  },
  {
    slug: "civics-essentials",
    title: "Civics Essentials",
    appMembers: ["us-civics-101", "us-constitution-101", "voting-elections-101", "how-a-bill-becomes-law", "who-has-the-power"],
    appPrice: 39,
    appJustification:
      "The federal-civics core plus the Who Has the Power method course. With US Civics 101 free as the funnel, the four paid members sum to roughly $75, so $39 is a fair half-off bundle and an easy classroom or family purchase for a full civics semester.",
    tptPrice: 18,
    tptJustification:
      "Bundles the US Constitution packet (built) with the how-a-bill and voting packets as they ship. $18 is the standard TpT civics-bundle price and a natural add-on to the state-civics units.",
  },
  {
    slug: "state-civics-collection",
    title: "State Civics Collection",
    appMembers: ["state-civics-in", "state-civics-il", "state-civics-az"],
    appPrice: 19,
    appJustification:
      "The state-civics units are Foundation ($9) courses; three of them sum to $27, so $19 is a light bundle discount. Priced low on purpose, the goal is reach: a teacher who buys their own state is easy to convert to the multi-state set, and each state added later raises the bundle's value without raising the price much.",
    tptPrice: 18,
    tptJustification:
      "Bundles the Indiana, Illinois, and Arizona civics packets (all built) at $18 versus $21 bought singly. State civics is the highest-intent, lowest-competition search on TpT, so a discounted multi-state set converts single-state buyers.",
  },
  {
    slug: "structural-paths",
    title: "How Power and Business Are Built",
    appMembers: ["who-has-the-power", "the-local-layer", "what-a-business-entity-is", "financing-without-access"],
    appPrice: 39,
    appJustification:
      "The shipped courses of the two structural paths (government and business forms). Four Core courses sum to $76, so $39 is a clean half-off. The bundle price is designed to grow: as the remaining path courses ship they join the bundle and the standalone value rises toward $99, at which point the price steps up.",
    tptPrice: null,
    tptJustification:
      "No TpT packets for these yet. When Who Has the Power ships as a packet it can anchor a civics-methods TpT bundle; until then this is an app-only bundle.",
  },
  {
    slug: "labor-around-the-world",
    title: "Labor Around the World",
    appMembers: [
      "history-of-unions",
      "labor-brazil",
      "labor-chile",
      "labor-germany",
      "labor-india",
      "labor-south-africa",
      "labor-south-korea",
      "sweden-denmark-nordic-model",
    ],
    appPrice: 59,
    appJustification:
      "The US union history anchor plus seven national labor-economics courses, roughly $150 singly. $59 is a strong discount for an economics or global-studies teacher who wants the comparative set, and the comparative angle (same four questions across eight countries) is the selling point no single course carries.",
    tptPrice: null,
    tptJustification:
      "No labor packets built yet. A good future TpT bundle once two or three labor packets exist; the comparative worksheets travel well as printables.",
  },
];
