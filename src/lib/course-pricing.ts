// Proposed per-course pricing for the catalog, owner-facing at /admin/pricing. These are
// RECOMMENDATIONS to review and apply on each course's settings (courses carry `price` +
// `priceType`); nothing here changes a live price. The goal is fair to the learner and competitive
// in the market, anchored on what a cited, standards-aligned course is worth to a family, teacher, or
// homeschooler, not on squeezing the maximum.
//
// Market anchors (one-time purchase of a single self-paced course): Udemy $10-20 (usually discounted),
// Coursera $39-79 (with a certificate), Outschool per-class, Teachers Pay Teachers $3-9 per unit. This
// catalog sits deliberately BELOW Coursera and ABOVE a throwaway Udemy title: premium (cited,
// standards-aligned) but accessible to schools and families.
//
// Strong recommendation, stated on the page: the primary model should probably be an ALL-ACCESS
// SUBSCRIPTION (roughly $12/month or $99/year), because per-course friction is high and a subscription
// maximizes lifetime value and access. The per-course prices below are for individual purchase and for
// anchoring the subscription's value ("all of this for less than two courses a year").

export type PriceTier = "free" | "foundation" | "core" | "premium" | "certification";

export interface TierDef {
  tier: PriceTier;
  price: number; // USD, one-time
  label: string;
  rationale: string;
}

export const PRICE_TIERS: TierDef[] = [
  {
    tier: "free",
    price: 0,
    label: "Free",
    rationale:
      "Gateway and public good. A free flagship civics course drives signups, demonstrates the citation-and-standards quality, and funnels learners toward paid courses. Keep this small and deliberate.",
  },
  {
    tier: "foundation",
    price: 9,
    label: "Foundation ($9)",
    rationale:
      "Shorter or single-topic courses (a single state's civics, a study skill, a practical skill). Priced as an easy impulse buy, competitive with a discounted Udemy title and just above a TpT unit.",
  },
  {
    tier: "core",
    price: 19,
    label: "Core ($19)",
    rationale:
      "The standard full course: cited, standards-aligned, roughly 15 to 25 lessons. Well below Coursera's $39-79 but clearly above a throwaway title, matching a premium-but-accessible position.",
  },
  {
    tier: "premium",
    price: 29,
    label: "Premium ($29)",
    rationale:
      "Long or flagship courses (roughly 30+ lessons), the route-series flagship and capstones, and professional-skill tracks (AI, cybersecurity) where willingness to pay is higher.",
  },
  {
    tier: "certification",
    price: 39,
    label: "Certification prep ($39)",
    rationale:
      "Real exam or certificate preparation with direct economic value to the learner (a Part 107 certificate leads to paid drone work). Still far below a bootcamp or a $150+ test-prep package.",
  },
];

const TIER_BY_NAME = new Map(PRICE_TIERS.map((t) => [t.tier, t]));

// Default tier by catalog category. Overrides below win.
const CATEGORY_TIER: Record<string, PriceTier> = {
  "Culture & History": "core",
  Civics: "core",
  "AI & Technology": "premium",
  "Travel & Living Abroad": "core",
  Sports: "premium",
  "Study Skills": "foundation",
  "Trade Skills": "foundation",
  Teaching: "core",
  Survival: "foundation",
  "Education Leadership": "core",
  Cybersecurity: "premium",
  "Careers & Media": "core",
  // Vocational with direct economic value, like AI and Cybersecurity: a learner buys these to get
  // paid work, and the competing products are $199-$499 PER COURSE (see MARKET_COMPARISON in
  // src/lib/market-comparison.ts). Premium here is still an order of magnitude below the market.
  "Imaging & Drone Services": "premium",
};

// Per-course overrides where the course is special relative to its category.
const SLUG_TIER: Record<string, PriceTier> = {
  // Free flagships / funnel
  "us-civics-101": "free",
  // The route-series flagship (its method course) and the two capstones: worth more, and they
  // cross-sell the rest of the series.
  "green-book-how-to-read-a-route": "premium",
  "how-the-tools-travelled": "premium",
  "exported-how-others-studied-american-race-law": "premium",
  // Real certification prep.
  "faa-part-107": "certification",

  // ── Imaging & Drone Services (plans/54) ─────────────────────────────────────────────────────
  // PLANNED, not yet seeded. Listed here anyway so /admin/pricing computes an honest bundle
  // sum-of-parts BEFORE the courses exist — proposePricing() keys off the slug, so a planned member
  // resolves to its real tier instead of silently defaulting to Core and understating the bundle.
  // The bundle cards show "0 of 5 courses" until they are seeded, which is the honest signal.
  //
  // The shared business core is FREE by decision: it is the funnel into the paid verticals, and the
  // course that proves the catalog's quality to someone deciding whether to buy one.
  "capture-services-business": "free",
  // The two shorter courses on the no-licence on-ramp. Kept at Core so the cheapest complete path
  // to a first paid job stays cheap; the comparable Udemy virtual-tour title is $49.99 for 3 hours.
  "360-capture-fundamentals": "core",
  "360-publishing-and-hosting": "core",
  // The verticals. Premium follows the category default; spelled out per slug so a later category
  // rename cannot silently reprice a course a learner is mid-purchase on.
  "360-real-estate-tours": "premium",
  "360-location-based-games": "premium",
  "drone-work-for-hire": "premium",
  "drone-roof-property-and-claims": "premium",
  "drone-solar-and-thermal": "premium",
  "drone-construction-documentation": "premium",
  "drone-film-tv-and-corporate": "premium",
  "drone-stadium-and-events": "premium",
  "capture-services-capstone": "premium",
};

export interface CoursePriceProposal {
  tier: PriceTier;
  price: number;
  rationale: string;
}

/**
 * Propose a tier and price for a course from its slug and category. Order: explicit slug override,
 * then the single-state civics rule (a one-state course is a Foundation unit), then the category
 * default, then Core as a safe floor.
 */
export function proposePricing(slug: string | null | undefined, category: string | null | undefined): CoursePriceProposal {
  let tier: PriceTier | undefined = slug ? SLUG_TIER[slug] : undefined;
  if (!tier && slug && slug.startsWith("state-civics-")) tier = "foundation";
  if (!tier && category) tier = CATEGORY_TIER[category];
  if (!tier) tier = "core";
  const def = TIER_BY_NAME.get(tier)!;
  return { tier, price: def.price, rationale: def.rationale };
}

/** Recommended all-access subscription, the model the page recommends as primary. */
export const SUBSCRIPTION_RECOMMENDATION = {
  monthly: 12,
  annual: 99,
  note: "Recommended as the PRIMARY model. At $99/year it costs less than two Core courses, which makes the whole catalog an easy yes and maximizes access and lifetime value. Use the per-course prices below for one-off buyers and to anchor the subscription's value.",
};
