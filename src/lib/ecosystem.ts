/**
 * WitUS ecosystem product directory — shown in the ecosystem footer on
 * WitUS-branded surfaces only (see `isWitusBrandedHost`).
 *
 * CANONICAL SOURCE: this is a curated MIRROR of `lib/products.ts` in the
 * witus.online repo (gemini/witus). That file owns the authoritative names,
 * taglines, URLs, and statuses. Keep this list in sync when products are added
 * or their URLs change there; do not let the two drift. We intentionally carry
 * only the fields the footer renders (name, href, status, external) rather than
 * the full marketing copy.
 */

export type EcosystemStatus = "live" | "beta" | "coming-soon" | "infrastructure";

export interface EcosystemProduct {
  /** Stable id used to reference a product from a course/category (cross-promotion). */
  slug: string;
  name: string;
  href: string;
  status: EcosystemStatus;
  /** One-line "why a learner would go here" — shown on cross-promo cards/chips. */
  tagline?: string;
  /** Opens off-domain (a different host than learn.witus.online). */
  external: boolean;
}

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  { slug: "witus", name: "WitUS", href: "https://witus.online", status: "infrastructure", external: true },
  { slug: "centenarianos", name: "CentenarianOS", href: "https://centenarianos.com", status: "live", tagline: "Longevity habits, coaching, and health tracking.", external: true },
  { slug: "work-witus", name: "Work.WitUS", href: "https://work.witus.online", status: "live", tagline: "Find and manage skilled trade & union work.", external: true },
  { slug: "learn-witus", name: "Learn.WitUS", href: "https://centenarianos.com/academy", status: "live", external: true },
  { slug: "awesomewebstore", name: "AwesomeWebStore", href: "https://awesomewebstore.com", status: "live", tagline: "Launch a store fast.", external: true },
  { slug: "tour-manager-os", name: "Tour Manager OS", href: "https://tour.witus.online", status: "beta", tagline: "Plan and run a live tour.", external: true },
  { slug: "wanderlearn", name: "Wanderlearn", href: "https://wanderlearn.witus.online", status: "beta", tagline: "Learn by traveling and doing.", external: true },
  { slug: "fly-witus", name: "Fly.WitUS", href: "https://fly.witus.online", status: "beta", tagline: "Plan real drone flights and log FAA-compliant missions.", external: true },
  // RideWitUS is NOT yet in the canonical gemini/witus/lib/products.ts. URL + tagline are a
  // FALLBACK inferred from the ecosystem's X.witus.online naming convention — CONFIRM against
  // that file (and update here) once RideWitUS is registered there. See the authoritative-values rule.
  { slug: "ride-witus", name: "RideWitUS", href: "https://ride.witus.online", status: "beta", external: true },
  { slug: "flashlearnai", name: "FlashLearnAI", href: "https://flashlearnai.witus.online", status: "beta", tagline: "Turn any topic into study flashcards.", external: true },
  { slug: "stream-witus", name: "Stream.WitUS", href: "https://stream.witus.online", status: "beta", tagline: "Broadcast and watch live streams.", external: true },
  { slug: "centenarian-coach", name: "Centenarian Coach", href: "https://centenarian.coach.multiagent.witus.online", status: "beta", external: true },
  { slug: "triage-agent-witus", name: "Triage.Agent.WitUS", href: "https://triage.agent.witus.online", status: "beta", external: true },
  // Shared infrastructure surfaces (rendered in their own column).
  { slug: "witus-inbox", name: "WitUS Inbox", href: "https://inbox.witus.online", status: "infrastructure", external: true },
  { slug: "witus-outbox", name: "WitUS Outbox", href: "https://outbox.witus.online", status: "infrastructure", external: true },
  { slug: "shop-witus", name: "Shop.WitUS", href: "https://shop.witus.online", status: "infrastructure", external: true },
  { slug: "wanderlearn-field-reporter", name: "Wanderlearn Field Reporter", href: "https://wanderlearn.field.reporter.witus.online", status: "infrastructure", external: true },
];

// Pure back-office / ops surfaces that aren't learner destinations — never offered as cross-promo
// (unlike Shop.WitUS and the Field Reporter, which ARE learner-facing despite being "infrastructure").
const NON_PROMO_SLUGS = new Set(["learn-witus", "witus", "witus-inbox", "witus-outbox"]);

/** Products an instructor/admin can attach to a course/category as a cross-promo. Includes every
 * ecosystem app (live/beta/infra) EXCEPT this app itself and the pure ops surfaces above. Curated
 * per course, not a blanket ad list. */
export const CROSS_PROMO_PRODUCTS: EcosystemProduct[] = ECOSYSTEM_PRODUCTS.filter(
  (p) => !NON_PROMO_SLUGS.has(p.slug),
);

export function ecosystemProductBySlug(slug: string): EcosystemProduct | undefined {
  return ECOSYSTEM_PRODUCTS.find((p) => p.slug === slug);
}
