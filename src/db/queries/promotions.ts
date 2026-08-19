import "server-only";
import { and, desc, eq, inArray, isNotNull, isNull, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { bundles } from "@/db/schema/bundles";
import { courses } from "@/db/schema/courses";
import { promotionBundles, promotionCourses, promotions, type Promotion } from "@/db/schema/promotions";
import type { PromotionKind, PromotionScope } from "@/lib/sale-pricing";

// Codeless promotions, tenant-scoped like every other catalog read. Every function here takes
// tenantId as its first argument and puts it in the WHERE clause, so one brand's sale can never be
// listed, applied, or ended from another brand's surface. Exposed to routes through ScopedDb.


/**
 * Load the membership of every `scope: 'courses'` campaign in a set, as promotionId -> courseIds.
 *
 * WHY THIS EXISTS AS A SEPARATE STEP. resolvePrice needs `courseIds` on a campaign row or the
 * campaign covers nothing (src/lib/sale-pricing.ts is explicit that absence means empty, because
 * the opposite default would discount the whole catalog on a plumbing mistake). Every function
 * here that returns promotions therefore attaches it, rather than leaving it to callers to
 * remember.
 */
async function membershipByPromotion(
  promotionIds: readonly string[],
): Promise<{ courses: Map<string, string[]>; bundles: Map<string, string[]> }> {
  const courses = new Map<string, string[]>();
  const bundles = new Map<string, string[]>();
  if (promotionIds.length === 0) return { courses, bundles };
  const ids = [...promotionIds];
  const push = (m: Map<string, string[]>, k: string, v: string) => {
    const list = m.get(k);
    if (list) list.push(v);
    else m.set(k, [v]);
  };
  const [courseRows, bundleRows] = await Promise.all([
    db
      .select({ promotionId: promotionCourses.promotionId, courseId: promotionCourses.courseId })
      .from(promotionCourses)
      .where(inArray(promotionCourses.promotionId, ids)),
    db
      .select({ promotionId: promotionBundles.promotionId, bundleId: promotionBundles.bundleId })
      .from(promotionBundles)
      .where(inArray(promotionBundles.promotionId, ids)),
  ]);
  for (const r of courseRows) push(courses, r.promotionId, r.courseId);
  for (const r of bundleRows) push(bundles, r.promotionId, r.bundleId);
  return { courses, bundles };
}

/**
 * Attach the named courses and bundles to every row that can have them.
 *
 * BOTH set-shaped scopes are loaded, not just campaigns: a `tenant` sale's named rows are its
 * EXCEPTIONS, and forgetting to load those would silently apply a brand-wide discount to something
 * deliberately excluded. Single-target scopes get empty arrays rather than undefined, so callers
 * never have to distinguish "none" from "not loaded".
 */
async function withMembership<T extends Promotion>(
  rows: T[],
): Promise<(T & { courseIds: string[]; bundleIds: string[] })[]> {
  const setShaped = rows.filter((r) => r.scope === "courses" || r.scope === "tenant").map((r) => r.id);
  const { courses, bundles } = await membershipByPromotion(setShaped);
  return rows.map((r) => ({
    ...r,
    courseIds: courses.get(r.id) ?? [],
    bundleIds: bundles.get(r.id) ?? [],
  }));
}

/** Every promotion this tenant has ever created, newest first, with the target's title for the UI. */
export async function listPromotions(
  tenantId: string,
): Promise<(Promotion & { targetTitle: string | null; courseIds: string[]; bundleIds: string[] })[]> {
  const rows = await db
    .select({
      promotion: promotions,
      courseTitle: courses.title,
      bundleTitle: bundles.title,
    })
    .from(promotions)
    .leftJoin(courses, and(eq(courses.id, promotions.courseId), eq(courses.tenantId, tenantId)))
    .leftJoin(bundles, and(eq(bundles.id, promotions.bundleId), eq(bundles.tenantId, tenantId)))
    .where(eq(promotions.tenantId, tenantId))
    .orderBy(desc(promotions.createdAt));
  return withMembership(
    rows.map((r) => ({
      ...r.promotion,
      targetTitle: r.courseTitle ?? r.bundleTitle ?? null,
    })),
  );
}

/**
 * The promotions that are LIVE right now for this tenant: started, not past their end date, and not
 * ended by hand. The same predicate as isPromotionActive() in src/lib/sale-pricing.ts, pushed into
 * SQL so a catalog page fetches only what it can use; resolvePrice re-checks it either way.
 */
export async function listActivePromotions(
  tenantId: string,
  now: Date = new Date(),
): Promise<(Promotion & { courseIds: string[]; bundleIds: string[] })[]> {
  const rows = await db
    .select()
    .from(promotions)
    .where(
      and(
        eq(promotions.tenantId, tenantId),
        or(isNull(promotions.startsAt), sql`${promotions.startsAt} <= ${now}`),
        or(isNull(promotions.endsAt), sql`${promotions.endsAt} > ${now}`),
        or(isNull(promotions.endedAt), sql`${promotions.endedAt} > ${now}`),
      ),
    )
    .orderBy(desc(promotions.createdAt));
  return withMembership(rows);
}

export interface CreatePromotionInput {
  name: string;
  /** URL slug for a public /sale/<slug> page. Null for a sale with no page of its own. */
  slug?: string | null;
  scope: PromotionScope;
  courseId?: string | null;
  bundleId?: string | null;
  kind: PromotionKind;
  /** Dollars off or percent off; null for a `free` promotion. */
  value?: number | null;
  startsAt?: Date | null;
  endsAt?: Date | null;
  createdBy?: string | null;
  /** Courses to name at creation. Members for a campaign, exceptions for a brand-wide sale. May be
   *  empty: a campaign that starts with nothing in it and fills up as courses are vetted is the
   *  whole point of the scope. */
  courseIds?: readonly string[] | null;
  /** Bundles to name at creation, read the same way. */
  bundleIds?: readonly string[] | null;
}

export async function createPromotion(
  tenantId: string,
  input: CreatePromotionInput,
): Promise<Promotion> {
  const [row] = await db
    .insert(promotions)
    .values({
      tenantId,
      name: input.name,
      slug: input.slug?.trim() || null,
      scope: input.scope,
      courseId: input.scope === "course" ? (input.courseId ?? null) : null,
      bundleId: input.scope === "bundle" ? (input.bundleId ?? null) : null,
      kind: input.kind,
      value: input.kind === "free" ? null : String(input.value ?? 0),
      startsAt: input.startsAt ?? null,
      endsAt: input.endsAt ?? null,
      createdBy: input.createdBy ?? null,
    })
    .returning();
  const setShaped = input.scope === "courses" || input.scope === "tenant";
  if (setShaped && input.courseIds?.length) {
    await db
      .insert(promotionCourses)
      .values(input.courseIds.map((courseId) => ({ promotionId: row.id, courseId })))
      .onConflictDoNothing();
  }
  if (setShaped && input.bundleIds?.length) {
    await db
      .insert(promotionBundles)
      .values(input.bundleIds.map((bundleId) => ({ promotionId: row.id, bundleId })))
      .onConflictDoNothing();
  }
  return row;
}

/**
 * Add a course or bundle to a promotion's named set.
 *
 * WHAT "NAMED" MEANS DEPENDS ON THE SCOPE, and both are legitimate operations:
 *   · campaign (`courses`)  the item JOINS the sale
 *   · brand-wide (`tenant`) the item is EXCLUDED from the sale
 * Single-target scopes have no set, so this refuses them rather than silently doing nothing.
 *
 * Tenant-checked on BOTH sides. A join table is exactly where a crafted request could otherwise
 * attach another brand's course to this brand's sale and price it from here.
 *
 * Idempotent: the button can be pressed twice, and the second press is a no-op rather than a
 * duplicate-key error.
 */
export async function addItemToPromotion(
  tenantId: string,
  promotionId: string,
  item: { kind: "course" | "bundle"; id: string },
): Promise<boolean> {
  const [promo] = await db
    .select({ id: promotions.id, scope: promotions.scope })
    .from(promotions)
    .where(and(eq(promotions.tenantId, tenantId), eq(promotions.id, promotionId)))
    .limit(1);
  if (!promo || (promo.scope !== "courses" && promo.scope !== "tenant")) return false;

  if (item.kind === "course") {
    if (!(await courseBelongsToTenant(tenantId, item.id))) return false;
    await db
      .insert(promotionCourses)
      .values({ promotionId, courseId: item.id })
      .onConflictDoNothing();
    return true;
  }
  if (!(await bundleBelongsToTenant(tenantId, item.id))) return false;
  await db.insert(promotionBundles).values({ promotionId, bundleId: item.id }).onConflictDoNothing();
  return true;
}

/**
 * Remove one course or bundle from a promotion's named set.
 *
 * THE PROPERTY THAT MATTERS, and the reason this is one delete rather than a rewrite: removing an
 * item touches EXACTLY ONE ROW. Every other course and bundle in the promotion keeps its pricing
 * unchanged, the promotion itself is untouched, and its window and discount are unaffected. Taking
 * a course out of a running campaign therefore cannot disturb anything a learner is currently
 * being shown for the others.
 *
 * Deleting a row that is not there is not an error: the sale simply does not name that item.
 */
export async function removeItemFromPromotion(
  tenantId: string,
  promotionId: string,
  item: { kind: "course" | "bundle"; id: string },
): Promise<boolean> {
  const [promo] = await db
    .select({ id: promotions.id })
    .from(promotions)
    .where(and(eq(promotions.tenantId, tenantId), eq(promotions.id, promotionId)))
    .limit(1);
  if (!promo) return false;

  if (item.kind === "course") {
    await db
      .delete(promotionCourses)
      .where(
        and(eq(promotionCourses.promotionId, promotionId), eq(promotionCourses.courseId, item.id)),
      );
    return true;
  }
  await db
    .delete(promotionBundles)
    .where(
      and(eq(promotionBundles.promotionId, promotionId), eq(promotionBundles.bundleId, item.id)),
    );
  return true;
}

/**
 * "End now": stamp ended_at instead of deleting, so what was offered stays readable afterwards.
 * Returns undefined for an id this tenant does not own (the route 404s, never redirects).
 */
export async function endPromotionNow(
  tenantId: string,
  id: string,
  now: Date = new Date(),
): Promise<Promotion | undefined> {
  const [row] = await db
    .update(promotions)
    .set({ endedAt: now })
    .where(and(eq(promotions.tenantId, tenantId), eq(promotions.id, id), isNull(promotions.endedAt)))
    .returning();
  return row;
}

/** Is this course id one of THIS tenant's courses? Guards the create form's target. */
export async function courseBelongsToTenant(tenantId: string, courseId: string): Promise<boolean> {
  const rows = await db
    .select({ id: courses.id })
    .from(courses)
    .where(and(eq(courses.tenantId, tenantId), eq(courses.id, courseId)))
    .limit(1);
  return rows.length > 0;
}

/** Is this bundle id one of THIS tenant's bundles? Guards the create form's target. */
export async function bundleBelongsToTenant(tenantId: string, bundleId: string): Promise<boolean> {
  const rows = await db
    .select({ id: bundles.id })
    .from(bundles)
    .where(and(eq(bundles.tenantId, tenantId), eq(bundles.id, bundleId)))
    .limit(1);
  return rows.length > 0;
}

/**
 * One public campaign by slug, with its courses. Tenant-scoped, and returns undefined rather than
 * redirecting for a slug this tenant does not have, per the isolation rule: a redirect would leak
 * that the campaign exists on another brand.
 */
export async function getPublicPromotionBySlug(
  tenantId: string,
  slug: string,
): Promise<(Promotion & { courseIds: string[]; bundleIds: string[] }) | undefined> {
  const [row] = await db
    .select()
    .from(promotions)
    .where(and(eq(promotions.tenantId, tenantId), eq(promotions.slug, slug)))
    .limit(1);
  if (!row) return undefined;
  const [withIds] = await withMembership([row]);
  return withIds;
}

/**
 * Every promotion with a public page, newest first. Used by /sale.
 *
 * ENDED CAMPAIGNS ARE INCLUDED and the page marks them as over. A shared link to a finished sale
 * should say "this ended" rather than 404, because the link outlives the sale and a dead end is a
 * worse answer than an honest one.
 */
export async function listPublicPromotions(
  tenantId: string,
): Promise<(Promotion & { courseIds: string[]; bundleIds: string[] })[]> {
  const rows = await db
    .select()
    .from(promotions)
    .where(and(eq(promotions.tenantId, tenantId), isNotNull(promotions.slug)))
    .orderBy(desc(promotions.createdAt));
  return withMembership(rows);
}
