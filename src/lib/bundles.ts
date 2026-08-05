// Proposed bundles for selling on the app AND on Teachers Pay Teachers, owner-facing at
// /admin/pricing. A bundle is a themed set of courses sold together at a discount. These are
// RECOMMENDATIONS with a justification for EACH channel. Bundle SALES now ship (schema/bundles.ts,
// createBundleCheckout, the webhook, /admin/bundles, /bundles/[slug]): `pnpm seed:bundles` creates
// each of these UNPUBLISHED with the recommended price pre-filled, and BAM sets the final price and
// publishes at /admin/bundles. Nothing here changes a live price on its own.
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
  /**
   * Do not seed this bundle until EVERY member course exists in the tenant.
   *
   * Default (false/undefined) is the growing-bundle behaviour the older proposals rely on: seed with
   * whichever members exist and let the bundle fill out as courses ship. That is right for
   * `structural-paths`, whose justification explicitly plans for it.
   *
   * It is WRONG for a bundle whose price assumes a full set that does not exist yet. The Imaging &
   * Drone bundles include `faa-part-107`, which is already seeded, so without this flag
   * `pnpm seed:bundles` would create a "$99 Drone Services" bundle containing exactly one course.
   * Unpublished, so nothing could sell, but the admin list would show a price that is a lie about
   * what is in it.
   */
  plannedUntilComplete?: boolean;
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

  // ══ Imaging & Drone Services (plans/54) ══════════════════════════════════════════════════════
  // PLANNED, none of these courses are seeded yet, so /admin/pricing shows "0 of N courses" until
  // they are. The prices are here now because they are the reasoning the series is being built
  // against, and because the market anchors behind them (src/lib/market-comparison.ts) are visible
  // on the same page for vetting.
  //
  // The shared core `capture-services-business` is FREE and appears in all three bundles: it is the
  // funnel, so it contributes $0 to every sum-of-parts and belongs in each list for completeness.
  {
    slug: "imaging-360-services",
    plannedUntilComplete: true,
    title: "360 Imaging Services",
    appMembers: [
      "capture-services-business",
      "360-capture-fundamentals",
      "360-real-estate-tours",
      "360-publishing-and-hosting",
      "360-location-based-games",
    ],
    appPrice: 49,
    appJustification:
      "The no-licence on-ramp: everything needed to earn with a 360 camera, or a phone, without waiting on an FAA certificate. Four paid courses sum to $96, so $49 is a clean half-off. It is priced just under the single $49.99 Udemy virtual-tour title it competes with while delivering four courses instead of three hours, though Udemy discounts hard, so treat that as position rather than a knockout. This is the impulse tier and the entry point to the whole series.",
    tptPrice: null,
    tptJustification:
      "No TpT price, and there should never be one. Teachers Pay Teachers is a K-12 teacher marketplace; commercial 360 capture services have no buyer there. Recorded explicitly so this is not re-litigated as an oversight.",
  },
  {
    slug: "drone-services",
    plannedUntilComplete: true,
    title: "Drone Services (with Part 107)",
    appMembers: [
      "capture-services-business",
      "faa-part-107",
      "drone-work-for-hire",
      "drone-roof-property-and-claims",
      "drone-solar-and-thermal",
      "drone-construction-documentation",
      "drone-film-tv-and-corporate",
      "drone-stadium-and-events",
    ],
    appPrice: 99,
    appJustification:
      "Licence to livelihood in one purchase, and it MUST include faa-part-107: the certificate is a hard prerequisite for all six vertical courses, so selling this bundle without it would be selling a locked door. Sum of parts is $213. At $99 it undercuts Drone Launch Academy's $199 exam prep ALONE, before any vertical training, which is why this is the bundle marketing should lead with. Their roof-inspection course by itself is $499 against our $29 equivalent; that gap is worth investigating rather than boasting about, since a $499 course usually ships sample deliverables we do not have yet.",
    tptPrice: null,
    tptJustification:
      "No TpT price. Commercial drone services have no K-12 teacher buyer. See the 360 bundle's note.",
  },
  {
    slug: "imaging-and-drone-complete",
    plannedUntilComplete: true,
    title: "Imaging & Drone Services (Complete)",
    appMembers: [
      "capture-services-business",
      "faa-part-107",
      "360-capture-fundamentals",
      "360-real-estate-tours",
      "360-publishing-and-hosting",
      "360-location-based-games",
      "drone-work-for-hire",
      "drone-roof-property-and-claims",
      "drone-solar-and-thermal",
      "drone-construction-documentation",
      "drone-film-tv-and-corporate",
      "drone-stadium-and-events",
      "capture-services-capstone",
    ],
    appPrice: 129,
    appJustification:
      "Both capture methods, every vertical, the certificate, and the capstone. Sum of parts is $338. NOTE THE DELIBERATE EXCEPTION: this is the only bundle priced ABOVE the $99/year all-access, breaking the rule stated at the top of this file. The reasoning is that at $99 it would be exactly dominated by all-access and give a buyer no reason to prefer it, while the honest distinction, perpetual access versus a lapsing subscription, is worth the $30. The comparison set here is $200-$500 per SINGLE course, not $10-20 titles: the competitor's exam prep plus its roof course alone is $698. If the invariant matters more than the margin, the fallback is 360 $49 / drone $79 excluding Part 107 / complete $99, which is fully consistent with today's rules and leaves roughly $30 per combined sale on the table.",
    tptPrice: null,
    tptJustification:
      "No TpT price. See the 360 bundle's note.",
  },
];
