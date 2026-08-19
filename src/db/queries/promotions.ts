import "server-only";
import { and, desc, eq, inArray, isNull, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { bundles } from "@/db/schema/bundles";
import { courses } from "@/db/schema/courses";
import { promotionCourses, promotions, type Promotion } from "@/db/schema/promotions";
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
): Promise<Map<string, string[]>> {
  const out = new Map<string, string[]>();
  if (promotionIds.length === 0) return out;
  const rows = await db
    .select({ promotionId: promotionCourses.promotionId, courseId: promotionCourses.courseId })
    .from(promotionCourses)
    .where(inArray(promotionCourses.promotionId, [...promotionIds]));
  for (const r of rows) {
    const list = out.get(r.promotionId);
    if (list) list.push(r.courseId);
    else out.set(r.promotionId, [r.courseId]);
  }
  return out;
}

/** Attach `courseIds` to campaign rows. Non-campaign scopes get an empty array, never undefined. */
async function withMembership<T extends Promotion>(rows: T[]): Promise<(T & { courseIds: string[] })[]> {
  const campaignIds = rows.filter((r) => r.scope === "courses").map((r) => r.id);
  const members = await membershipByPromotion(campaignIds);
  return rows.map((r) => ({ ...r, courseIds: members.get(r.id) ?? [] }));
}

/** Every promotion this tenant has ever created, newest first, with the target's title for the UI. */
export async function listPromotions(
  tenantId: string,
): Promise<(Promotion & { targetTitle: string | null; courseIds: string[] })[]> {
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
): Promise<(Promotion & { courseIds: string[] })[]> {
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
  scope: PromotionScope;
  courseId?: string | null;
  bundleId?: string | null;
  kind: PromotionKind;
  /** Dollars off or percent off; null for a `free` promotion. */
  value?: number | null;
  startsAt?: Date | null;
  endsAt?: Date | null;
  createdBy?: string | null;
  /** Initial members for a `courses` campaign. May be empty: a campaign can start with nothing in
   *  it and have courses added as they are vetted, which is the whole point of the scope. */
  courseIds?: readonly string[] | null;
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
  if (input.scope === "courses" && input.courseIds?.length) {
    await db
      .insert(promotionCourses)
      .values(input.courseIds.map((courseId) => ({ promotionId: row.id, courseId })))
      .onConflictDoNothing();
  }
  return row;
}

/**
 * Add a course to a running campaign. This is the operation the whole scope exists for: a sale is
 * announced, courses are vetted over the following weeks, and each one joins with a single click.
 *
 * Tenant-checked on BOTH sides. The promotion must belong to this tenant and so must the course,
 * because a join table is exactly where a cross-tenant row would otherwise be insertable and would
 * then price another brand's course from this brand's sale.
 *
 * Idempotent: adding a course twice is a no-op rather than an error, since the button that calls
 * this can be pressed twice.
 */
export async function addCourseToPromotion(
  tenantId: string,
  promotionId: string,
  courseId: string,
): Promise<boolean> {
  const [promo] = await db
    .select({ id: promotions.id, scope: promotions.scope })
    .from(promotions)
    .where(and(eq(promotions.tenantId, tenantId), eq(promotions.id, promotionId)))
    .limit(1);
  if (!promo || promo.scope !== "courses") return false;
  if (!(await courseBelongsToTenant(tenantId, courseId))) return false;
  await db.insert(promotionCourses).values({ promotionId, courseId }).onConflictDoNothing();
  return true;
}

/** Remove a course from a campaign. Tenant-checked the same way. */
export async function removeCourseFromPromotion(
  tenantId: string,
  promotionId: string,
  courseId: string,
): Promise<boolean> {
  const [promo] = await db
    .select({ id: promotions.id })
    .from(promotions)
    .where(and(eq(promotions.tenantId, tenantId), eq(promotions.id, promotionId)))
    .limit(1);
  if (!promo) return false;
  await db
    .delete(promotionCourses)
    .where(
      and(eq(promotionCourses.promotionId, promotionId), eq(promotionCourses.courseId, courseId)),
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
