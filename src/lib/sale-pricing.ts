// Pure price resolution for codeless promotions (the `promotions` table). No DB, no next/headers,
// no Stripe: given a list price, the promotion rows that could apply, and "now", it returns the
// price to SHOW and the price to CHARGE. Both the catalog and the checkout routes call this, so a
// learner can never be charged something other than what the page said.
//
// Named sale-pricing.ts because "sale" is what the surface is called in the admin UI ("Sales and
// promotions"); the table is `promotions` because it sits beside `promo_codes`.

export type PromotionScope = "course" | "bundle" | "tenant" | "courses";
export type PromotionKind = "percent" | "amount" | "free";

/** The shape this module needs. The Drizzle row satisfies it (numeric columns arrive as strings). */
export interface PromotionLike {
  id: string;
  tenantId: string;
  name: string;
  scope: PromotionScope | string;
  courseId: string | null;
  bundleId: string | null;
  kind: PromotionKind | string;
  value: string | number | null;
  startsAt: Date | string | null;
  endsAt: Date | string | null;
  endedAt: Date | string | null;
  createdAt?: Date | string | null;
  /**
   * Members of a `scope: 'courses'` campaign, supplied by the query layer from `promotion_courses`.
   *
   * OPTIONAL, AND ABSENCE MEANS EMPTY, WHICH IS THE SAFE DIRECTION. A caller that forgets to load
   * the membership makes the campaign apply to nothing, so a course shows its list price. The
   * opposite default would silently discount the entire catalog on a plumbing mistake.
   */
  courseIds?: readonly string[] | null;
}

export interface PriceView {
  /** The owner-set list price, untouched. */
  listPrice: number;
  /** What the learner pays now. Never above listPrice, never below 0. */
  effectivePrice: number;
  /** True when nothing is owed (either free by list price or free by promotion). */
  isFree: boolean;
  /** True only when a promotion actually LOWERED the price (so the UI shows a struck price). */
  discounted: boolean;
  /** The winning promotion, or null when the list price stands. */
  promotion: PromotionLike | null;
}

export interface ResolveInput {
  /** The tenant whose page is being rendered. Foreign rows are dropped, never applied. */
  tenantId: string;
  /** What is being priced. */
  target: { kind: "course" | "bundle"; id: string };
  /** The owner-set list price (Drizzle numeric arrives as a string). */
  listPrice: string | number | null | undefined;
  /** 'free' | 'one_time' | 'subscription'. Subscriptions are excluded (see below). */
  priceType?: string | null;
  /** Candidate rows. May include other tenants' rows, ended rows, and rows for other targets. */
  promotions: readonly PromotionLike[];
  now?: Date;
}

function toDate(v: Date | string | null | undefined): Date | null {
  if (v == null) return null;
  const d = v instanceof Date ? v : new Date(v);
  return Number.isNaN(d.getTime()) ? null : d;
}

function toNumber(v: string | number | null | undefined): number {
  const n = typeof v === "number" ? v : Number(v ?? 0);
  return Number.isFinite(n) ? n : 0;
}

/** Round to whole cents so a 33% discount can never produce a fraction of a cent to charge. */
function toCents(dollars: number): number {
  return Math.round(dollars * 100) / 100;
}

/**
 * Live right now: started (or no start), not past its end date, and not ended by hand.
 * A NULL `endsAt` is the "runs indefinitely" case BAM asked for and is deliberately NOT an error.
 */
export function isPromotionActive(p: PromotionLike, now: Date = new Date()): boolean {
  const starts = toDate(p.startsAt);
  if (starts && starts.getTime() > now.getTime()) return false;
  const ends = toDate(p.endsAt);
  if (ends && ends.getTime() <= now.getTime()) return false;
  const ended = toDate(p.endedAt);
  if (ended && ended.getTime() <= now.getTime()) return false;
  return true;
}

/** 'scheduled' (not started) | 'active' | 'ended'. What the admin list groups by. */
export function promotionStatus(p: PromotionLike, now: Date = new Date()): "scheduled" | "active" | "ended" {
  const ends = toDate(p.endsAt);
  const ended = toDate(p.endedAt);
  if ((ends && ends.getTime() <= now.getTime()) || (ended && ended.getTime() <= now.getTime())) {
    return "ended";
  }
  const starts = toDate(p.startsAt);
  if (starts && starts.getTime() > now.getTime()) return "scheduled";
  return "active";
}

/** Does this promotion cover this course/bundle at all (ignoring dates)? */
export function promotionCoversTarget(
  p: PromotionLike,
  target: { kind: "course" | "bundle"; id: string },
): boolean {
  if (p.scope === "tenant") return true;
  if (p.scope === "course") return target.kind === "course" && p.courseId === target.id;
  if (p.scope === "bundle") return target.kind === "bundle" && p.bundleId === target.id;
  // A campaign covers exactly its members, and only courses: a bundle is priced by its own row.
  // No members means it covers nothing, which is what an unloaded membership also produces.
  if (p.scope === "courses") {
    return target.kind === "course" && (p.courseIds ?? []).includes(target.id);
  }
  return false;
}

/** The price this promotion would produce for a list price, clamped to [0, listPrice]. */
export function applyPromotion(p: PromotionLike, listPrice: number): number {
  if (p.kind === "free") return 0;
  const value = toNumber(p.value);
  if (p.kind === "percent") {
    // Clamp the percentage as well as the result: a bad row can only ever be a smaller discount,
    // never a negative price or (via a negative percent) a price INCREASE.
    const pct = Math.min(100, Math.max(0, value));
    return toCents(Math.max(0, listPrice * (1 - pct / 100)));
  }
  if (p.kind === "amount") {
    return toCents(Math.max(0, listPrice - Math.max(0, value)));
  }
  // Unknown kind (a row written by a future migration this build does not understand): no discount.
  return listPrice;
}

/**
 * PRECEDENCE, when several promotions apply to the same course or bundle:
 *
 *   1. MOST SPECIFIC SCOPE WINS, on three levels rather than two:
 *
 *        course / bundle  (2)  a decision about THIS product
 *        courses          (1)  a campaign this product was deliberately added to
 *        tenant           (0)  a blanket offer over everything
 *
 *      A course-scoped sale beats a campaign, and a campaign beats a brand-wide sale, even when the
 *      broader one is deeper. The narrower row is the more deliberate decision, so a blanket
 *      "20% off everything" must not quietly override "this course is free this week", in either
 *      direction. A campaign sits in the middle for the same reason: adding a course to Back to
 *      School is a choice about that course, and putting it above tenant but below a single-course
 *      row keeps the most specific intent winning.
 *   2. Within the same specificity, the LARGEST DISCOUNT wins (lowest resulting price). Two
 *      overlapping brand-wide sales are almost always an operator mistake, and the reading that
 *      never overcharges is the honest one.
 *   3. Ties break on the NEWEST createdAt, then on id, so the same inputs always pick the same row
 *      (an unstable winner would make the displayed price flicker between renders).
 *
 * Invariants, whatever the rows say: a promotion never raises a price, never makes an
 * already-free course paid, and never produces a negative price.
 *
 * SUBSCRIPTIONS ARE EXCLUDED. A recurring price plus a one-off discount is an unanswered product
 * question (first period only? every period? for how long?), and guessing it would charge people
 * something nobody decided. Subscription courses and bundles show their list price until that
 * decision is made.
 */
export function resolvePrice(input: ResolveInput): PriceView {
  const now = input.now ?? new Date();
  const listPrice = Math.max(0, toNumber(input.listPrice));
  const free = { listPrice, effectivePrice: 0, isFree: true, discounted: false, promotion: null };
  const plain = {
    listPrice,
    effectivePrice: listPrice,
    isFree: false,
    discounted: false,
    promotion: null,
  };

  // Already free: there is nothing to discount, and a struck "$0" would be nonsense.
  if (input.priceType === "free" || listPrice <= 0) return free;
  if (input.priceType === "subscription") return plain;

  const candidates = input.promotions.filter(
    (p) =>
      // The tenant check is defensive belt-and-braces: callers pass tenant-scoped rows, and this
      // makes a plumbing mistake upstream inert rather than a cross-tenant price leak.
      p.tenantId === input.tenantId &&
      promotionCoversTarget(p, input.target) &&
      isPromotionActive(p, now),
  );
  if (candidates.length === 0) return plain;

  const specificity = (p: PromotionLike) => {
    if (p.scope === "tenant") return 0;
    if (p.scope === "courses") return 1;
    return 2; // course | bundle
  };
  const best = Math.max(...candidates.map(specificity));
  const scoped = candidates.filter((p) => specificity(p) === best);

  const created = (p: PromotionLike) => toDate(p.createdAt ?? null)?.getTime() ?? 0;
  let winner = scoped[0];
  let winnerPrice = applyPromotion(winner, listPrice);
  for (const p of scoped.slice(1)) {
    const price = applyPromotion(p, listPrice);
    if (
      price < winnerPrice ||
      (price === winnerPrice && created(p) > created(winner)) ||
      (price === winnerPrice && created(p) === created(winner) && p.id < winner.id)
    ) {
      winner = p;
      winnerPrice = price;
    }
  }

  // A promotion that does not lower the price (a 0-value row, an unknown kind) is not a sale: show
  // the list price with no strike-through rather than "was $19, now $19".
  if (winnerPrice >= listPrice) return plain;

  const effectivePrice = Math.max(0, Math.min(listPrice, winnerPrice));
  return {
    listPrice,
    effectivePrice,
    isFree: effectivePrice <= 0,
    discounted: true,
    promotion: winner,
  };
}

/** The JSON shape the admin panel renders. Dates as ISO strings; value as a number. */
export interface SaleView {
  id: string;
  name: string;
  scope: PromotionScope | string;
  targetId: string | null;
  targetTitle: string | null;
  kind: PromotionKind | string;
  value: number | null;
  startsAt: string | null;
  endsAt: string | null;
  endedAt: string | null;
  status: "scheduled" | "active" | "ended";
  /** Member course ids, for a `courses` campaign. Empty for every other scope. */
  courseIds: string[];
}

const iso = (v: Date | string | null | undefined): string | null =>
  v == null ? null : (v instanceof Date ? v : new Date(v)).toISOString();

/** Row → the admin panel's view model. Shared by the page and the API so they cannot drift. */
export function toSaleView(
  row: PromotionLike & { targetTitle?: string | null },
  now: Date = new Date(),
): SaleView {
  return {
    id: row.id,
    name: row.name,
    scope: row.scope,
    targetId: row.courseId ?? row.bundleId ?? null,
    targetTitle: row.targetTitle ?? null,
    kind: row.kind,
    value: row.value == null ? null : Number(row.value),
    startsAt: iso(row.startsAt),
    endsAt: iso(row.endsAt),
    endedAt: iso(row.endedAt),
    status: promotionStatus(row, now),
    courseIds: [...(row.courseIds ?? [])],
  };
}

/** "50% off" / "$5 off" / "Free". What the admin list shows for a promotion's size. */
export function describeSale(kind: string, value: number | null): string {
  if (kind === "free") return "Free";
  if (kind === "percent") return `${value ?? 0}% off`;
  return `${formatPrice(value ?? 0)} off`;
}

/** Convenience wrapper for a course row (Drizzle numeric price arrives as a string). */
export function coursePriceView(
  course: { id: string; price: string | number | null; priceType?: string | null },
  tenantId: string,
  promotions: readonly PromotionLike[],
  now?: Date,
): PriceView {
  return resolvePrice({
    tenantId,
    target: { kind: "course", id: course.id },
    listPrice: course.price,
    priceType: course.priceType,
    promotions,
    now,
  });
}

/** Convenience wrapper for a bundle row. */
export function bundlePriceView(
  bundle: { id: string; price: string | number | null; priceType?: string | null },
  tenantId: string,
  promotions: readonly PromotionLike[],
  now?: Date,
): PriceView {
  return resolvePrice({
    tenantId,
    target: { kind: "bundle", id: bundle.id },
    listPrice: bundle.price,
    priceType: bundle.priceType,
    promotions,
    now,
  });
}

/** "$19" / "$19.50" / "Free". The one place the money format is decided. */
export function formatPrice(amount: number): string {
  if (amount <= 0) return "Free";
  return `$${amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2)}`;
}

/** Screen-reader sentence for a discounted price, so a struck number is never read as the price. */
export function priceAnnouncement(view: PriceView): string {
  if (!view.discounted) return formatPrice(view.effectivePrice);
  return `was ${formatPrice(view.listPrice)}, now ${formatPrice(view.effectivePrice)}`;
}
