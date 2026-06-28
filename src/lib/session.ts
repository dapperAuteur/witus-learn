import "server-only";
import { cache } from "react";
import { headers } from "next/headers";
import { forbidden } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { tenantMemberships, userProfiles, type TenantRole } from "@/db/schema";
import { auth, type Session } from "./auth";

/** Current Better Auth session (or null). React-cached per request. */
export const getSession = cache(async (): Promise<Session | null> => {
  return auth.api.getSession({ headers: await headers() });
});

/** The signed-in user's per-tenant role, or null if not a member. */
export async function getMembership(
  userId: string,
  tenantId: string,
): Promise<TenantRole | null> {
  const rows = await db
    .select({ role: tenantMemberships.role })
    .from(tenantMemberships)
    .where(and(eq(tenantMemberships.userId, userId), eq(tenantMemberships.tenantId, tenantId)))
    .limit(1);
  return (rows[0]?.role as TenantRole | undefined) ?? null;
}

export async function isPlatformOwner(userId: string): Promise<boolean> {
  const rows = await db
    .select({ owner: userProfiles.isPlatformOwner })
    .from(userProfiles)
    .where(eq(userProfiles.userId, userId))
    .limit(1);
  return rows[0]?.owner ?? false;
}

/** Require an authenticated session. 403 (via forbidden()) otherwise. */
export async function requireUser(): Promise<Session> {
  const session = await getSession();
  if (!session) forbidden();
  return session;
}

/** Require platform-owner (global). Used by /platform tooling. */
export async function requirePlatformOwner(): Promise<Session> {
  const session = await requireUser();
  if (!(await isPlatformOwner(session.user.id))) forbidden();
  return session;
}

/** Require brand_admin on the tenant (platform-owner always passes). */
export async function requireBrandAdmin(tenantId: string): Promise<Session> {
  const session = await requireUser();
  if (await isPlatformOwner(session.user.id)) return session;
  if ((await getMembership(session.user.id, tenantId)) !== "brand_admin") forbidden();
  return session;
}

/** Require instructor (or brand_admin / platform-owner) on the tenant. */
export async function requireInstructor(tenantId: string): Promise<Session> {
  const session = await requireUser();
  if (await isPlatformOwner(session.user.id)) return session;
  const role = await getMembership(session.user.id, tenantId);
  if (role !== "instructor" && role !== "brand_admin") forbidden();
  return session;
}
