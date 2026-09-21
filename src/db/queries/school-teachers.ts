import "server-only";
import { and, asc, eq, inArray, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { guardians, teacherAgeExceptions, tenantMemberships, userProfiles, users, type TenantRole } from "@/db/schema";
import { adultStatus, type AdultStatus } from "@/lib/teacher-age";

// The teachers and admins of ONE school (tenant_memberships), for /admin/teachers. Tenant-scoped:
// every read and write filters tenant_id, so granting someone the teacher role on one school never
// touches their role on another.

export interface SchoolTeacherRow {
  userId: string;
  name: string;
  email: string;
  role: TenantRole;
  status: AdultStatus;
  hasException: boolean;
}

export async function listSchoolTeachers(tenantId: string): Promise<SchoolTeacherRow[]> {
  const rows = await db
    .select({
      userId: tenantMemberships.userId,
      role: tenantMemberships.role,
      name: users.name,
      displayName: userProfiles.displayName,
      email: users.email,
      attestedAt: userProfiles.adultAttestedAt,
      managedBy: userProfiles.managedByUserId,
      loginMethod: userProfiles.loginMethod,
      linkedStudent: sql<boolean>`exists (select 1 from ${guardians} where ${guardians.studentUserId} = ${users.id})`,
      hasException: sql<boolean>`exists (select 1 from ${teacherAgeExceptions} where ${teacherAgeExceptions.userId} = ${users.id} and ${teacherAgeExceptions.revokedAt} is null)`,
    })
    .from(tenantMemberships)
    .innerJoin(users, eq(users.id, tenantMemberships.userId))
    .leftJoin(userProfiles, eq(userProfiles.userId, tenantMemberships.userId))
    .where(and(eq(tenantMemberships.tenantId, tenantId), inArray(tenantMemberships.role, ["instructor", "brand_admin"])))
    .orderBy(asc(tenantMemberships.role), asc(users.name));
  return rows.map((r) => ({
    userId: r.userId,
    name: r.name?.trim() || r.displayName?.trim() || r.email,
    email: r.email,
    role: r.role as TenantRole,
    status: adultStatus({
      attestedAt: r.attestedAt ?? null,
      isManagedChild: Boolean(r.managedBy),
      isAvatarPinLogin: r.loginMethod === "avatar_pin",
      isLinkedStudent: Boolean(r.linkedStudent),
    }),
    hasException: Boolean(r.hasException),
  }));
}

export async function getSchoolRole(tenantId: string, userId: string): Promise<TenantRole | null> {
  const [row] = await db
    .select({ role: tenantMemberships.role })
    .from(tenantMemberships)
    .where(and(eq(tenantMemberships.tenantId, tenantId), eq(tenantMemberships.userId, userId)))
    .limit(1);
  return (row?.role as TenantRole | undefined) ?? null;
}

/** Make them a teacher (instructor) on this school. Upgrades a learner membership; never touches a
 *  brand_admin (the route refuses that case before calling). */
export async function grantTeacherRole(tenantId: string, userId: string): Promise<void> {
  await db
    .insert(tenantMemberships)
    .values({ tenantId, userId, role: "instructor" })
    .onConflictDoUpdate({
      target: [tenantMemberships.tenantId, tenantMemberships.userId],
      set: { role: "instructor" },
      setWhere: eq(tenantMemberships.role, "learner"),
    });
}

/** Take the teacher role away (back to learner) on this school. Only ever demotes an instructor. The
 *  classes they already teach stay theirs; they just can't create new classes or courses here. */
export async function removeTeacherRole(tenantId: string, userId: string): Promise<boolean> {
  const rows = await db
    .update(tenantMemberships)
    .set({ role: "learner" })
    .where(
      and(
        eq(tenantMemberships.tenantId, tenantId),
        eq(tenantMemberships.userId, userId),
        eq(tenantMemberships.role, "instructor"),
      ),
    )
    .returning({ id: tenantMemberships.id });
  return rows.length > 0;
}
