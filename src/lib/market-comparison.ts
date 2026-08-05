// MARKET COMPARISON, the competing products a price recommendation is reasoned against, with a
// link to each, what it costs, and how it is genuinely alike and different from ours.
//
// THE PROBLEM THIS SOLVES. `course-pricing.ts` and `bundles.ts` carry prices and a justification
// sentence. The justification names a comparison ("well below Coursera's $39-79") but the owner
// cannot SEE the thing being compared, cannot click through to check it, and cannot tell whether
// the number is still true. That makes the reasoning unauditable at exactly the moment it matters:
// while vetting a price.
//
// So: every anchor a price leans on lives here, with its URL, the date the figure was gathered, and
// an honest `alike` / `different` pair. `/admin/pricing` renders it next to the recommendations.
//
// ── THE RULES, and they are not decoration ──────────────────────────────────────────────────────
//
// 1. EVERY PRICE IS A SNAPSHOT, NOT A FACT. Competitors discount constantly and several of these
//    were list prices during a promotion. `gatheredOn` is required, and the UI shows it. A figure
//    with no date is not usable.
//
// 2. NOTHING HERE MAY REACH A LEARNER OR A MARKETING PAGE UNVERIFIED. The page-quality rule bans
//    fabricated stats and prices, and the authoritative-values rule bans asserting a value owned by
//    an external system. These are internal reasoning aids. The matching entries in
//    `research-checks.ts` (`price-*`) are how they get verified before any of them is quoted
//    publicly. See `verify` on each entry for which check clears it.
//
// 3. `different` MUST BE HONEST IN BOTH DIRECTIONS. It is easy to write a comparison table where we
//    win every row. A comparison that only flatters us is worthless for vetting a price, because the
//    reason a competitor charges 10x may be a real thing they have and we do not. Where they are
//    genuinely better, this file says so.
//
// TO ADD AN ANCHOR: append an entry, date it, and file a matching `price-*` research check.

export type ComparisonKind = "course" | "bundle" | "membership" | "platform";

export interface MarketComparison {
  /** Stable key. Also the suffix of its research-check key (`price-<key>`). */
  key: string;
  /** The competing product's name. */
  product: string;
  /** Who sells it. */
  vendor: string;
  kind: ComparisonKind;
  /** Their price in USD at `gatheredOn`. Null when we could not establish one. */
  price: number | null;
  /** Free text where a plain number would mislead (a range, a promo, a per-year figure). */
  priceNote?: string;
  /** ISO date the figure was gathered. Required, a price with no date is not usable. */
  gatheredOn: string;
  /** Where the figure came from, so the owner can click through and check it. */
  url: string;
  /** Which of our courses/bundles this anchors. Slugs, or a bundle slug. */
  anchors: string[];
  /** What is genuinely comparable about it. */
  alike: string;
  /** How it genuinely differs, INCLUDING where they are better. */
  different: string;
  /** True when the figure still needs BAM's verification before it may be quoted anywhere public. */
  needsVerification: boolean;
}

export const MARKET_COMPARISONS: MarketComparison[] = [
  // ── Drone: the incumbent vocational sellers ──────────────────────────────────────────────────
  {
    key: "dla-part-107",
    product: "FAA Part 107 Exam Prep",
    vendor: "Drone Launch Academy",
    kind: "course",
    price: 199,
    gatheredOn: "2026-08-04",
    url: "https://dronelaunchacademy.com/resources/drone-pilot-training-cost/",
    anchors: ["faa-part-107"],
    alike:
      "Same job: get an adult from nothing to a passed Part 107 written exam. Both are self-paced and both are sold on the same promise, that the certificate leads to paid work.",
    different:
      "Theirs is video-led with instructor support and an industry reputation a learner can name-drop; ours is audio/text-first, cited, and standards-aligned. Ours is $39 against their $199, but their brand recognition in the drone community is real and we should not pretend it is not worth something to a buyer.",
    needsVerification: true,
  },
  {
    key: "dla-roof-inspection",
    product: "Aerial Roof Inspection Pro",
    vendor: "Drone Launch Academy",
    kind: "course",
    price: 499,
    gatheredOn: "2026-08-04",
    url: "https://dronelaunchacademy.com/resources/drone-pilot-training-cost/",
    anchors: ["drone-roof-property-and-claims"],
    alike:
      "The same vertical, and the closest single comparison in the whole market: drone roof capture sold as a route to paid inspection and claims work.",
    different:
      "This is the widest price gap in the table, $499 against our $29, and it is the one to interrogate rather than celebrate. A $499 course in this niche usually carries things we do not have: worked client deliverables, sample reports, and sometimes an industry affiliation. Ours adds the two-sided assessor/adjuster split and the state-licensing line, which their marketing does not mention. Worth buying theirs once to see what the money is actually for.",
    needsVerification: true,
  },
  {
    key: "dla-aerial-video",
    product: "Aerial Video: A to Z",
    vendor: "Drone Launch Academy",
    kind: "course",
    price: 397,
    gatheredOn: "2026-08-04",
    url: "https://dronelaunchacademy.com/resources/drone-pilot-training-cost/",
    anchors: ["drone-film-tv-and-corporate"],
    alike: "Aerial cinematography sold to people who want paid film, TV and corporate work.",
    different:
      "Video craft teaching is genuinely better delivered as video, which is their format and not ours. Our advantage is not the craft half, it is that ours is the companion to a shipped ten-course Storytelling series that teaches why a shot serves a story, which a standalone aerial-video course cannot.",
    needsVerification: true,
  },
  {
    key: "dla-aerial-photo",
    product: "Aerial Photo Pro",
    vendor: "Drone Launch Academy",
    kind: "course",
    price: 249,
    gatheredOn: "2026-08-04",
    url: "https://dronelaunchacademy.com/resources/drone-pilot-training-cost/",
    anchors: ["360-capture-fundamentals", "drone-film-tv-and-corporate"],
    alike: "Capture craft sold as a billable skill.",
    different:
      "Theirs is aerial stills specifically; our nearest equivalent splits across the 360 fundamentals course and the film/corporate course, so this is an anchor for the tier rather than a like-for-like.",
    needsVerification: true,
  },
  {
    key: "dla-connect-membership",
    product: "Drone Launch Connect (community), 12 months",
    vendor: "Drone Launch Academy",
    kind: "membership",
    price: 348,
    priceNote: "12-month membership",
    gatheredOn: "2026-08-04",
    url: "https://dronelaunchacademy.com/resources/drone-pilot-training-cost/",
    anchors: ["all-access"],
    alike:
      "A recurring annual payment for ongoing access, which is the same shape as our $99/year all-access.",
    different:
      "Theirs buys a PEER COMMUNITY, other working pilots, referrals, job leads. Ours buys a CONTENT CATALOG. This is the clearest example of a competitor charging more for something we genuinely do not offer, and it is worth deciding whether we ever want to. Do not present $99 vs $348 as like-for-like.",
    needsVerification: true,
  },
  {
    key: "pilot-institute-part-107",
    product: "Part 107 course",
    vendor: "Pilot Institute",
    kind: "course",
    price: 149,
    priceNote: "reported as a LIMITED-TIME reduction, so the standing price is probably higher",
    gatheredOn: "2026-08-04",
    url: "https://pilotinstitute.com/course/commercial-drone-pilot-bundle-part-107-drone-business/",
    anchors: ["faa-part-107"],
    alike: "Direct competitor to our Part 107 course, and they also sell a Part 107 + business bundle, which is exactly the structure of our Drone Services bundle.",
    different:
      "The figure is the least reliable in this table, it was reported as a temporary promotional price and the full bundle price could not be established. Treat as indicative only until the research check clears.",
    needsVerification: true,
  },

  // ── 360 / virtual tours ──────────────────────────────────────────────────────────────────────
  {
    key: "udemy-virtual-tours",
    product: "3D virtual property tours with 360 cameras (3 hours)",
    vendor: "Udemy",
    kind: "course",
    price: 49.99,
    priceNote: "Udemy list price; Udemy discounts aggressively and the effective price is often far lower",
    gatheredOn: "2026-08-04",
    url: "https://www.udemy.com/course/3d-virtual-property-home-tours-360-cameras-matterport-vr-technology/",
    anchors: ["360-capture-fundamentals", "360-real-estate-tours"],
    alike: "The same beginner promise: shoot a property in 360 and sell the tour.",
    different:
      "Three hours against our four-course track, and it teaches a specific commercial tool chain. But Udemy's real price after discount is frequently under $20, so the honest comparison for our $19 fundamentals course is 'about the same money, much more course', not 'we are less than half the price'.",
    needsVerification: true,
  },

  // ── The catalog-wide anchors already cited in course-pricing.ts ───────────────────────────────
  {
    key: "coursera-single-course",
    product: "Single self-paced course with certificate",
    vendor: "Coursera",
    kind: "course",
    price: null,
    priceNote: "$39-79 range, the anchor already used in course-pricing.ts",
    gatheredOn: "2026-08-04",
    url: "https://www.coursera.org/",
    anchors: ["all-access"],
    alike: "Self-paced, certificate-bearing, sold to adults for career reasons.",
    different:
      "University-affiliated and the certificate carries weight ours does not. Our catalog sits deliberately below this: premium relative to a throwaway title, accessible relative to a credential. This range predates the current pricing turn and should be re-checked rather than trusted.",
    needsVerification: true,
  },
];

/** Comparisons anchoring a given course slug, bundle slug, or the literal "all-access". */
export function comparisonsFor(anchor: string): MarketComparison[] {
  return MARKET_COMPARISONS.filter((c) => c.anchors.includes(anchor));
}

/** Everything still awaiting BAM's verification, newest-gathered first. */
export function unverifiedComparisons(): MarketComparison[] {
  return MARKET_COMPARISONS.filter((c) => c.needsVerification).sort((a, b) =>
    b.gatheredOn.localeCompare(a.gatheredOn),
  );
}

/**
 * The headline the Imaging & Drone Services pricing leans on. Kept as a computed value rather than a
 * hardcoded sentence so it cannot drift from the table above: if a price here is corrected, the
 * headline corrects with it.
 */
export function droneIncumbentComparison(): { theirs: number; parts: string[] } | null {
  const prep = MARKET_COMPARISONS.find((c) => c.key === "dla-part-107")?.price;
  const roof = MARKET_COMPARISONS.find((c) => c.key === "dla-roof-inspection")?.price;
  if (prep == null || roof == null) return null;
  return {
    theirs: prep + roof,
    parts: ["Drone Launch Academy Part 107 prep", "Aerial Roof Inspection Pro"],
  };
}
