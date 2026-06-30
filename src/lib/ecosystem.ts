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
  name: string;
  href: string;
  status: EcosystemStatus;
  /** Opens off-domain (a different host than learn.witus.online). */
  external: boolean;
}

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  { name: "WitUS", href: "https://witus.online", status: "infrastructure", external: true },
  { name: "CentenarianOS", href: "https://centenarianos.com", status: "live", external: true },
  { name: "Work.WitUS", href: "https://work.witus.online", status: "live", external: true },
  { name: "Learn.WitUS", href: "https://centenarianos.com/academy", status: "live", external: true },
  { name: "AwesomeWebStore", href: "https://awesomewebstore.com", status: "live", external: true },
  { name: "Tour Manager OS", href: "https://tour.witus.online", status: "beta", external: true },
  { name: "Wanderlearn", href: "https://wanderlearn.witus.online", status: "beta", external: true },
  { name: "Fly.WitUS", href: "https://fly.witus.online", status: "beta", external: true },
  { name: "FlashLearnAI", href: "https://flashlearnai.witus.online", status: "beta", external: true },
  { name: "Stream.WitUS", href: "https://stream.witus.online", status: "beta", external: true },
  { name: "Centenarian Coach", href: "https://centenarian.coach.multiagent.witus.online", status: "beta", external: true },
  { name: "Triage.Agent.WitUS", href: "https://triage.agent.witus.online", status: "beta", external: true },
  // Shared infrastructure surfaces (rendered in their own column).
  { name: "WitUS Inbox", href: "https://inbox.witus.online", status: "infrastructure", external: true },
  { name: "WitUS Outbox", href: "https://outbox.witus.online", status: "infrastructure", external: true },
  { name: "Shop.WitUS", href: "https://shop.witus.online", status: "infrastructure", external: true },
  { name: "Wanderlearn Field Reporter", href: "https://wanderlearn.field.reporter.witus.online", status: "infrastructure", external: true },
];
