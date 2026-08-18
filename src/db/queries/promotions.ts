import "server-only";
import { and, desc, eq, isNull, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { bundles } from "@/db/schema/bundles";
import { courses } from "@/db/schema/courses";
import { promotions, type Promotion } from "@/db/schema/promotions";
import type { PromotionKind, PromotionScope } from "@/lib/sale-pricing";

// Codeless promotions, tenant-scoped like every other catalog read. Every function here takes
// tenantId as its first argument and puts it in the WHERE clause, so one brand's sale can never be
// listed, applied, or ended from another brand's surface. Exposed to routes through ScopedDb.

/** Every promotion this tenant has ever created, newest first, with the target's title for the UI. */
export async function listPromotions(
  tenantId: string,
): Promise<(Promotion & { targetTitle: string | null })[]> {
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
  return rows.map((r) => ({
    ...r.promotion,
    targetTitle: r.courseTitle ?? r.bundleTitle ?? null,
  }));
}

/**
 * The promotions that are LIVE right now for this tenant: started, not past their end date, and not
 * ended by hand. The same predicate as isPromotionActive() in src/lib/sale-pricing.ts, pushed into
 * SQL so a catalog page fetches only what it can use; resolvePrice re-checks it either way.
 */
export async function listActivePromotions(tenantId: string, now: Date = new Date()): Promise<Promotion[]> {
  return db
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
  return row;
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
