import "server-only";
import { cache } from "react";
import { headers } from "next/headers";
import { forbidden, redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { tenantMemberships, userProfiles, type TenantRole } from "@/db/schema";
import { auth, type Session } from "./auth";
import { loginPathFor, PATHNAME_HEADER } from "./next-path";

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

/**
 * Require an authenticated session. 403 (via forbidden()) otherwise.
 *
 * This is the API/route-handler guard, and the shared base for the role guards below. It must keep
 * returning a STATUS, never a redirect: `/api/admin/*` callers (and the admin UI's own fetches)
 * need a clean 403 they can branch on, not a 307 to an HTML sign-in page that then fails to parse
 * as JSON. Page components want the opposite, so they use requireUserPage().
 */
export async function requireUser(): Promise<Session> {
  const session = await getSession();
  if (!session) forbidden();
  return session;
}

/**
 * Require an authenticated session on a PAGE. A signed-out visitor is sent to /login carrying
 * where they were headed, instead of hitting a bare 403.
 *
 * Why this exists: /family and /cohorts used requireUser(), so a signed-out visitor following a
 * bookmark, a shared link, or browser history got a dead-end 403 (the digest Better Stack paged on:
 * NEXT_HTTP_ERROR_FALLBACK;403) with no way forward, while every /teach page redirected to /login
 * for the same condition. Same situation, two behaviours; this is the one page components want.
 *
 * A missing session is "not signed in yet", which is a redirect. It is NOT the same as "signed in
 * but not allowed", which stays a 403 through the role guards below and renders app/forbidden.tsx.
 */
export async function requireUserPage(): Promise<Session> {
  const session = await getSession();
  if (!session) {
    const pathname = (await headers()).get(PATHNAME_HEADER);
    redirect(loginPathFor(pathname));
  }
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
