import "server-only";
import { and, desc, eq, ilike, isNull, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { pendingRoleGrants, sessions, tenantMemberships, userProfiles, users, type TenantRole } from "@/db/schema";

// Everyone with a role on ONE school (tenant_memberships), for /admin/users (BAM, 2026-11-10: "admin
// should be able to see list of users and email/username/etc. Now I can't"). The dashboard roster is
// built from enrollments, so a member with no enrollment yet (a new teacher, a learner who has not
// started) was invisible. Tenant-scoped: every read filters tenant_id, so a school's admin sees its
// members only, never another school's. The last sign-in is the newest session row for the account,
// which exists for every sign-in method (magic link, Sign in with WitUS, kid login).

export interface SchoolMemberRow {
  userId: string;
  role: TenantRole;
  name: string | null;
  displayName: string | null;
  username: string | null;
  email: string;
  /** When the role on this school was granted. */
  joinedAt: Date;
  /** The newest session's start, or null when the account has never signed in. */
  lastSignInAt: Date | null;
}

/** Turn a search box value into the ILIKE pattern used against email, name and username. */
export function memberSearchPattern(q: string | null | undefined): string | null {
  const t = (q ?? "").trim().toLowerCase().replace(/[%_\\]/g, "");
  return t ? `%${t}%` : null;
}

export async function listSchoolMembers(tenantId: string, q?: string | null, limit = 500): Promise<SchoolMemberRow[]> {
  const pattern = memberSearchPattern(q);
  const lastSession = db
    .select({ userId: sessions.userId, at: sql<Date>`max(${sessions.createdAt})`.as("at") })
    .from(sessions)
    .groupBy(sessions.userId)
    .as("last_session");
  const conds = [eq(tenantMemberships.tenantId, tenantId)];
  if (pattern) {
    conds.push(or(ilike(users.email, pattern), ilike(users.name, pattern), ilike(userProfiles.displayName, pattern), ilike(userProfiles.username, pattern))!);
  }
  const rows = await db
    .select({
      userId: tenantMemberships.userId,
      role: tenantMemberships.role,
      name: users.name,
      displayName: userProfiles.displayName,
      username: userProfiles.username,
      email: users.email,
      joinedAt: tenantMemberships.createdAt,
      lastSignInAt: lastSession.at,
    })
    .from(tenantMemberships)
    .innerJoin(users, eq(users.id, tenantMemberships.userId))
    .leftJoin(userProfiles, eq(userProfiles.userId, tenantMemberships.userId))
    .leftJoin(lastSession, eq(lastSession.userId, tenantMemberships.userId))
    .where(and(...conds))
    .orderBy(desc(tenantMemberships.createdAt))
    .limit(limit);
  return rows.map((r) => ({ ...r, role: r.role as TenantRole, lastSignInAt: r.lastSignInAt ?? null }));
}

/** Role grants on this school still waiting for a first sign-in (pnpm test-users:prod). */
export async function listPendingSchoolGrants(tenantId: string): Promise<{ email: string; role: TenantRole; createdAt: Date }[]> {
  const rows = await db
    .select({ email: pendingRoleGrants.email, role: pendingRoleGrants.role, createdAt: pendingRoleGrants.createdAt })
    .from(pendingRoleGrants)
    .where(and(eq(pendingRoleGrants.tenantId, tenantId), isNull(pendingRoleGrants.claimedAt)))
    .orderBy(desc(pendingRoleGrants.createdAt));
  return rows.map((r) => ({ ...r, role: r.role as TenantRole }));
}

export async function countSchoolMembers(tenantId: string): Promise<number> {
  const [row] = await db
    .select({ n: sql<number>`count(*)::int` })
    .from(tenantMemberships)
    .where(eq(tenantMemberships.tenantId, tenantId));
  return row?.n ?? 0;
}
