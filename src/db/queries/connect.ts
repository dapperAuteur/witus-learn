import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  instructorProfiles,
  platformSettings,
  promoCodes,
  type InstructorProfile,
  type PromoCode,
} from "@/db/schema";

// ── Instructor Connect profile ───────────────────────────────────────────────
export async function getInstructorBillingProfile(
  userId: string,
): Promise<InstructorProfile | null> {
  const rows = await db
    .select()
    .from(instructorProfiles)
    .where(eq(instructorProfiles.userId, userId))
    .limit(1);
  return rows[0] ?? null;
}

export async function upsertInstructorBillingProfile(
  userId: string,
  patch: Partial<typeof instructorProfiles.$inferInsert>,
): Promise<InstructorProfile> {
  const [row] = await db
    .insert(instructorProfiles)
    .values({ userId, ...patch })
    .onConflictDoUpdate({
      target: instructorProfiles.userId,
      set: { ...patch, updatedAt: new Date() },
    })
    .returning();
  return row;
}

/** True when the instructor can receive Connect payouts. */
export function isConnectInstructor(profile: InstructorProfile | null): boolean {
  return Boolean(profile?.stripeConnectAccountId && profile.stripeConnectOnboarded);
}

/** Platform fee % for a tenant (tenant override → global → default 15). */
export async function getPlatformFeePercent(tenantId: string): Promise<number> {
  const rows = await db
    .select()
    .from(platformSettings)
    .where(eq(platformSettings.key, "teacher_fee_percent"));
  const tenantVal = rows.find((r) => r.tenantId === tenantId)?.value;
  const globalVal = rows.find((r) => r.tenantId === null)?.value;
  const raw = tenantVal ?? globalVal;
  const n = raw ? Number(raw) : NaN;
  return Number.isFinite(n) ? n : 15;
}

// ── Promo codes ──────────────────────────────────────────────────────────────
export async function createPromo(
  tenantId: string,
  instructorId: string,
  data: {
    code: string;
    discountPercent: number;
    courseId?: string | null;
    maxUses?: number | null;
    expiresAt?: Date | null;
    stripeCouponId?: string | null;
  },
): Promise<PromoCode> {
  const [row] = await db
    .insert(promoCodes)
    .values({
      tenantId,
      instructorId,
      code: data.code,
      discountPercent: data.discountPercent,
      courseId: data.courseId ?? null,
      maxUses: data.maxUses ?? null,
      expiresAt: data.expiresAt ?? null,
      stripeCouponId: data.stripeCouponId ?? null,
    })
    .returning();
  return row;
}

export async function listPromos(tenantId: string, instructorId: string): Promise<PromoCode[]> {
  return db
    .select()
    .from(promoCodes)
    .where(and(eq(promoCodes.tenantId, tenantId), eq(promoCodes.instructorId, instructorId)))
    .orderBy(desc(promoCodes.createdAt));
}

export async function deletePromo(
  tenantId: string,
  instructorId: string,
  code: string,
): Promise<void> {
  await db
    .delete(promoCodes)
    .where(
      and(
        eq(promoCodes.tenantId, tenantId),
        eq(promoCodes.instructorId, instructorId),
        eq(promoCodes.code, code),
      ),
    );
}

/** Validate a code for a course in this tenant: not expired, under maxUses, and
 *  either course-specific (matching) or course-agnostic. */
export async function validatePromo(
  tenantId: string,
  courseId: string,
  code: string,
): Promise<PromoCode | null> {
  const rows = await db
    .select()
    .from(promoCodes)
    .where(and(eq(promoCodes.tenantId, tenantId), eq(promoCodes.code, code)))
    .limit(1);
  const promo = rows[0];
  if (!promo) return null;
  if (promo.courseId && promo.courseId !== courseId) return null;
  if (promo.expiresAt && promo.expiresAt.getTime() < Date.now()) return null;
  if (promo.maxUses !== null && promo.usesCount >= promo.maxUses) return null;
  return promo;
}

export async function incrementPromoUsage(promoId: string): Promise<void> {
  await db
    .update(promoCodes)
    .set({ usesCount: sql`${promoCodes.usesCount} + 1` })
    .where(eq(promoCodes.id, promoId));
}
