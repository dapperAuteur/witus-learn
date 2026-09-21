import "server-only";
import { and, asc, desc, eq, gt, inArray, isNull, lte, or, sql, type SQL } from "drizzle-orm";
import { db } from "@/db/client";
import {
  cohortMembers,
  cohortTeachers,
  cohorts,
  contactOverrides,
  contactPings,
  contactSettings,
  guardians,
  tenantDomains,
  tenants,
  userProfiles,
  users,
  type ContactPing,
} from "@/db/schema";
import type { TenantRecord } from "@/lib/tenant";
import { env } from "@/lib/env";
import {
  DEFAULT_CONTACT_MODE,
  PING_ACTIVE_MS,
  PING_EMAIL_AFTER_MS,
  type ContactMode,
  type Role,
} from "@/lib/contact";
import { adultStatus, type AdultStatus } from "@/lib/teacher-age";

// Parent/teacher contact: data access. The rules are pure, in src/lib/contact.ts.
//
// THE SECURITY SURFACE IS THE RELATIONSHIP. Two adults may see or ping each other only while a live
// triple holds IN THIS TENANT: the parent is a guardian of the student (guardians), the student is a
// member of the class (cohort_members), and the teacher teaches that class (cohort_teachers). It is
// recomputed on EVERY read, never cached and never copied: a family whose child left the class in
// June must not still see that teacher's phone number in September. Do not add `use cache`, a
// denormalized column, or a stored "contactable" flag to anything here.

export interface ContactSettingsView {
  parentsMode: ContactMode;
  teachersMode: ContactMode;
  phone: string | null;
  note: string | null;
}

const DEFAULT_SETTINGS: ContactSettingsView = {
  parentsMode: DEFAULT_CONTACT_MODE,
  teachersMode: DEFAULT_CONTACT_MODE,
  phone: null,
  note: null,
};

export async function getContactSettings(tenantId: string, userId: string): Promise<ContactSettingsView> {
  const [row] = await db
    .select()
    .from(contactSettings)
    .where(and(eq(contactSettings.tenantId, tenantId), eq(contactSettings.userId, userId)))
    .limit(1);
  if (!row) return DEFAULT_SETTINGS;
  return {
    parentsMode: row.parentsMode as ContactMode,
    teachersMode: row.teachersMode as ContactMode,
    phone: row.phone,
    note: row.note,
  };
}

export async function saveContactSettings(tenantId: string, userId: string, input: ContactSettingsView): Promise<void> {
  const values = { ...input, updatedAt: new Date() };
  await db
    .insert(contactSettings)
    .values({ tenantId, userId, ...values })
    .onConflictDoUpdate({ target: [contactSettings.tenantId, contactSettings.userId], set: values });
}

// ── Overrides ─────────────────────────────────────────────────────────────────

/** My per-person overrides: other user id -> mode. */
export async function listOverridesBy(tenantId: string, userId: string): Promise<Map<string, ContactMode>> {
  const rows = await db
    .select({ otherUserId: contactOverrides.otherUserId, mode: contactOverrides.mode })
    .from(contactOverrides)
    .where(and(eq(contactOverrides.tenantId, tenantId), eq(contactOverrides.userId, userId)));
  return new Map(rows.map((r) => [r.otherUserId, r.mode as ContactMode]));
}

/** Overrides that OTHER people set about me: their user id -> the mode they chose for me. */
export async function listOverridesAbout(
  tenantId: string,
  aboutUserId: string,
  ownerIds: string[],
): Promise<Map<string, ContactMode>> {
  if (ownerIds.length === 0) return new Map();
  const rows = await db
    .select({ userId: contactOverrides.userId, mode: contactOverrides.mode })
    .from(contactOverrides)
    .where(
      and(
        eq(contactOverrides.tenantId, tenantId),
        eq(contactOverrides.otherUserId, aboutUserId),
        inArray(contactOverrides.userId, ownerIds),
      ),
    );
  return new Map(rows.map((r) => [r.userId, r.mode as ContactMode]));
}

/** Set (or with `mode = null`, clear back to the default) my rule for one counterpart. The caller
 *  must have checked areRelated first. */
export async function setOverride(
  tenantId: string,
  userId: string,
  otherUserId: string,
  mode: ContactMode | null,
): Promise<void> {
  const where = and(
    eq(contactOverrides.tenantId, tenantId),
    eq(contactOverrides.userId, userId),
    eq(contactOverrides.otherUserId, otherUserId),
  );
  if (mode === null) {
    await db.delete(contactOverrides).where(where);
    return;
  }
  await db
    .insert(contactOverrides)
    .values({ tenantId, userId, otherUserId, mode })
    .onConflictDoUpdate({
      target: [contactOverrides.tenantId, contactOverrides.userId, contactOverrides.otherUserId],
      set: { mode, updatedAt: new Date() },
    });
}

// ── People ────────────────────────────────────────────────────────────────────

export interface ContactPerson {
  userId: string;
  name: string;
  email: string;
  status: AdultStatus;
  settings: ContactSettingsView;
}

function displayName(name: string | null, profileName: string | null, fallback: string): string {
  return name?.trim() || profileName?.trim() || fallback;
}

/**
 * Names, account emails, adult status, and this tenant's contact settings for a set of users.
 * Returns EVERY field for every id asked; callers decide what the viewer may see (counterpartView).
 * Only ever called with ids that came out of a relationship query, never with client input alone.
 */
export async function getContactPeople(tenantId: string, userIds: string[]): Promise<Map<string, ContactPerson>> {
  const ids = [...new Set(userIds)];
  if (ids.length === 0) return new Map();
  const rows = await db
    .select({
      userId: users.id,
      email: users.email,
      name: users.name,
      displayName: userProfiles.displayName,
      attestedAt: userProfiles.adultAttestedAt,
      managedBy: userProfiles.managedByUserId,
      loginMethod: userProfiles.loginMethod,
      linkedStudent: sql<boolean>`exists (select 1 from ${guardians} where ${guardians.studentUserId} = ${users.id})`,
      parentsMode: contactSettings.parentsMode,
      teachersMode: contactSettings.teachersMode,
      phone: contactSettings.phone,
      note: contactSettings.note,
    })
    .from(users)
    .leftJoin(userProfiles, eq(userProfiles.userId, users.id))
    .leftJoin(contactSettings, and(eq(contactSettings.userId, users.id), eq(contactSettings.tenantId, tenantId)))
    .where(inArray(users.id, ids));
  return new Map(
    rows.map((r) => [
      r.userId,
      {
        userId: r.userId,
        name: displayName(r.name, r.displayName, "Someone"),
        email: r.email,
        status: adultStatus({
          attestedAt: r.attestedAt ?? null,
          isManagedChild: Boolean(r.managedBy),
          isAvatarPinLogin: r.loginMethod === "avatar_pin",
          isLinkedStudent: Boolean(r.linkedStudent),
        }),
        settings: {
          parentsMode: (r.parentsMode as ContactMode | null) ?? DEFAULT_CONTACT_MODE,
          teachersMode: (r.teachersMode as ContactMode | null) ?? DEFAULT_CONTACT_MODE,
          phone: r.phone ?? null,
          note: r.note ?? null,
        },
      },
    ]),
  );
}

// ── Relationships (live, every read) ──────────────────────────────────────────

export interface TeacherLink {
  studentUserId: string;
  studentName: string;
  cohortId: string;
  cohortName: string;
  teacherUserId: string;
}

/** For a parent: every (child, class, teacher) triple in this tenant. A parent who teaches their
 *  own child's class is not listed as their own counterpart. */
export async function listTeacherLinksForGuardian(tenantId: string, guardianUserId: string): Promise<TeacherLink[]> {
  const rows = await db
    .select({
      studentUserId: guardians.studentUserId,
      studentName: users.name,
      studentDisplayName: userProfiles.displayName,
      cohortId: cohorts.id,
      cohortName: cohorts.name,
      teacherUserId: cohortTeachers.userId,
    })
    .from(guardians)
    .innerJoin(
      cohortMembers,
      and(eq(cohortMembers.userId, guardians.studentUserId), eq(cohortMembers.tenantId, tenantId)),
    )
    .innerJoin(cohorts, and(eq(cohorts.id, cohortMembers.cohortId), eq(cohorts.tenantId, tenantId)))
    .innerJoin(cohortTeachers, and(eq(cohortTeachers.cohortId, cohorts.id), eq(cohortTeachers.tenantId, tenantId)))
    .innerJoin(users, eq(users.id, guardians.studentUserId))
    .leftJoin(userProfiles, eq(userProfiles.userId, guardians.studentUserId))
    .where(
      and(
        eq(guardians.tenantId, tenantId),
        eq(guardians.guardianUserId, guardianUserId),
        sql`${cohortTeachers.userId} <> ${guardianUserId}`,
      ),
    )
    .orderBy(asc(cohorts.name));
  return rows.map((r) => ({
    studentUserId: r.studentUserId,
    studentName: displayName(r.studentName, r.studentDisplayName, "Student"),
    cohortId: r.cohortId,
    cohortName: r.cohortName,
    teacherUserId: r.teacherUserId,
  }));
}

export interface GuardianLink {
  studentUserId: string;
  guardianUserId: string;
}

/** For a class: every (student, guardian) pair in this tenant. */
export async function listGuardianLinksForCohort(tenantId: string, cohortId: string): Promise<GuardianLink[]> {
  return db
    .select({ studentUserId: cohortMembers.userId, guardianUserId: guardians.guardianUserId })
    .from(cohortMembers)
    .innerJoin(
      guardians,
      and(eq(guardians.studentUserId, cohortMembers.userId), eq(guardians.tenantId, tenantId)),
    )
    .where(and(eq(cohortMembers.tenantId, tenantId), eq(cohortMembers.cohortId, cohortId)))
    .orderBy(asc(guardians.createdAt));
}

function tripleHolds(guardianId: SQL | string, teacherId: SQL | string, studentId: SQL | string, cohortId: SQL | string, tenantId: SQL | string): SQL {
  return sql`exists (select 1 from ${guardians} g
      where g.tenant_id = ${tenantId} and g.guardian_user_id = ${guardianId} and g.student_user_id = ${studentId})
    and exists (select 1 from ${cohortMembers} m
      where m.tenant_id = ${tenantId} and m.cohort_id = ${cohortId} and m.user_id = ${studentId})
    and exists (select 1 from ${cohortTeachers} t
      where t.tenant_id = ${tenantId} and t.cohort_id = ${cohortId} and t.user_id = ${teacherId})`;
}

/**
 * The asker's role in this exact triple, or null when it does not hold. Null is the answer for an
 * unrelated adult AND for a user that does not exist, so the ping route returns the same 404 for
 * both and cannot be used to discover who is on the platform.
 */
export async function relationshipRole(
  tenantId: string,
  t: { fromUserId: string; toUserId: string; studentUserId: string; cohortId: string },
): Promise<Role | null> {
  const [row] = await db.execute<{ as_parent: boolean; as_teacher: boolean }>(sql`select
      (${tripleHolds(t.fromUserId, t.toUserId, t.studentUserId, t.cohortId, tenantId)}) as as_parent,
      (${tripleHolds(t.toUserId, t.fromUserId, t.studentUserId, t.cohortId, tenantId)}) as as_teacher`).then(
    (r) => r.rows,
  );
  if (row?.as_parent) return "parent";
  if (row?.as_teacher) return "teacher";
  return null;
}

/** Are these two adults related through ANY class in this tenant, in either direction? The gate
 *  for setting a per-person override: you can only make a rule about someone you are linked to. */
export async function areRelated(tenantId: string, userId: string, otherUserId: string): Promise<boolean> {
  const oneWay = (guardian: string, teacher: string) => sql`exists (
    select 1 from ${guardians} g
      join ${cohortMembers} m on m.user_id = g.student_user_id and m.tenant_id = ${tenantId}
      join ${cohortTeachers} t on t.cohort_id = m.cohort_id and t.tenant_id = ${tenantId}
    where g.tenant_id = ${tenantId} and g.guardian_user_id = ${guardian} and t.user_id = ${teacher})`;
  const [row] = await db
    .execute<{ related: boolean }>(sql`select (${oneWay(userId, otherUserId)} or ${oneWay(otherUserId, userId)}) as related`)
    .then((r) => r.rows);
  return Boolean(row?.related);
}

// ── Pings ─────────────────────────────────────────────────────────────────────

/** A ping is only ever shown while its triple still holds (the staleness rule, applied to pings). */
const pingIsLive = tripleHolds(
  sql`(case when ${contactPings.fromRole} = 'parent' then ${contactPings.fromUserId} else ${contactPings.toUserId} end)`,
  sql`(case when ${contactPings.fromRole} = 'teacher' then ${contactPings.fromUserId} else ${contactPings.toUserId} end)`,
  sql`${contactPings.studentUserId}`,
  sql`${contactPings.cohortId}`,
  sql`${contactPings.tenantId}`,
);

function activeSince(now: Date): Date {
  return new Date(now.getTime() - PING_ACTIVE_MS);
}

/** Every earlier ping from this asker, to this recipient, about this student (for the rate rule). */
export async function listPingsForTriple(
  tenantId: string,
  fromUserId: string,
  toUserId: string,
  studentUserId: string,
): Promise<ContactPing[]> {
  return db
    .select()
    .from(contactPings)
    .where(
      and(
        eq(contactPings.tenantId, tenantId),
        eq(contactPings.fromUserId, fromUserId),
        eq(contactPings.toUserId, toUserId),
        eq(contactPings.studentUserId, studentUserId),
      ),
    )
    .orderBy(desc(contactPings.createdAt))
    .limit(20);
}

export async function createPing(input: {
  tenantId: string;
  cohortId: string;
  studentUserId: string;
  fromUserId: string;
  toUserId: string;
  fromRole: Role;
}): Promise<ContactPing> {
  const [row] = await db.insert(contactPings).values(input).returning();
  return row;
}

/** Active, live pings I sent or received in this tenant. Small by nature (one per triple). */
export async function listActivePingsForUser(tenantId: string, userId: string, now = new Date()): Promise<ContactPing[]> {
  return db
    .select()
    .from(contactPings)
    .where(
      and(
        eq(contactPings.tenantId, tenantId),
        or(eq(contactPings.fromUserId, userId), eq(contactPings.toUserId, userId)),
        isNull(contactPings.connectedAt),
        gt(contactPings.createdAt, activeSince(now)),
        pingIsLive,
      ),
    )
    .orderBy(desc(contactPings.createdAt));
}

/** The asker (and only the asker) says they have started talking. Ends the ping. */
export async function markPingConnected(tenantId: string, pingId: string, userId: string): Promise<boolean> {
  const rows = await db
    .update(contactPings)
    .set({ connectedAt: new Date() })
    .where(
      and(
        eq(contactPings.id, pingId),
        eq(contactPings.tenantId, tenantId),
        eq(contactPings.fromUserId, userId),
        isNull(contactPings.connectedAt),
      ),
    )
    .returning({ id: contactPings.id });
  return rows.length > 0;
}

export interface IncomingPingCounts {
  /** Pings from teachers to me as a parent: the Family badge. */
  asParent: number;
  /** Pings from parents to me as a teacher: the Cohorts badge. */
  asTeacher: number;
  /** asTeacher, split by class, for the /cohorts list. */
  byCohort: Map<string, number>;
}

/** The UI signal: how many live, active pings are waiting for me, and where. One query. */
export async function countIncomingPings(tenantId: string, userId: string, now = new Date()): Promise<IncomingPingCounts> {
  const rows = await db
    .select({ cohortId: contactPings.cohortId, fromRole: contactPings.fromRole, n: sql<number>`count(*)::int` })
    .from(contactPings)
    .where(
      and(
        eq(contactPings.tenantId, tenantId),
        eq(contactPings.toUserId, userId),
        isNull(contactPings.connectedAt),
        gt(contactPings.createdAt, activeSince(now)),
        pingIsLive,
      ),
    )
    .groupBy(contactPings.cohortId, contactPings.fromRole);
  const out: IncomingPingCounts = { asParent: 0, asTeacher: 0, byCohort: new Map() };
  for (const r of rows) {
    if (r.fromRole === "teacher") out.asParent += r.n;
    else {
      out.asTeacher += r.n;
      out.byCohort.set(r.cohortId, (out.byCohort.get(r.cohortId) ?? 0) + r.n);
    }
  }
  return out;
}

// ── The 48-hour fallback (cron, all tenants) ──────────────────────────────────

/** Pings, on every tenant, that are due their one fallback email. The cron re-checks each one's
 *  relationship and the recipient's current mode inside its own tenant before sending. */
export async function listPingsDueForEmail(now = new Date(), limit = 200): Promise<ContactPing[]> {
  return db
    .select()
    .from(contactPings)
    .where(
      and(
        isNull(contactPings.connectedAt),
        isNull(contactPings.emailedAt),
        gt(contactPings.createdAt, activeSince(now)),
        lte(contactPings.createdAt, new Date(now.getTime() - PING_EMAIL_AFTER_MS)),
        pingIsLive,
      ),
    )
    .orderBy(asc(contactPings.createdAt))
    .limit(limit);
}

/** Claim a ping for its email. Returns false if another run already did, so two overlapping cron
 *  runs can never send the same email twice. */
export async function claimPingForEmail(pingId: string): Promise<boolean> {
  const rows = await db
    .update(contactPings)
    .set({ emailedAt: new Date() })
    .where(and(eq(contactPings.id, pingId), isNull(contactPings.emailedAt)))
    .returning({ id: contactPings.id });
  return rows.length > 0;
}

/** Undo a claim when the send itself failed, so tomorrow's run tries again. */
export async function releasePingEmailClaim(pingId: string): Promise<void> {
  await db.update(contactPings).set({ emailedAt: null }).where(eq(contactPings.id, pingId));
}

export async function getCohortName(tenantId: string, cohortId: string): Promise<string | null> {
  const [row] = await db
    .select({ name: cohorts.name })
    .from(cohorts)
    .where(and(eq(cohorts.id, cohortId), eq(cohorts.tenantId, tenantId)))
    .limit(1);
  return row?.name ?? null;
}

const isLocalHost = (host: string): boolean => host === "localhost" || host.endsWith(".localhost");

/**
 * The tenant row plus the origin its links should use, for code that runs OUTSIDE a request (the
 * cron has no Host header to resolve a tenant from). Primary non-local domain first, then any
 * non-local domain. FALLBACK: NEXT_PUBLIC_APP_URL when a school has no production domain yet, which
 * is the platform's own address and says so in the returned `siteUrlIsFallback`.
 */
export async function getTenantWithSiteUrl(
  tenantId: string,
): Promise<{ tenant: TenantRecord; siteUrl: string; siteUrlIsFallback: boolean } | null> {
  const [tenant] = await db.select().from(tenants).where(eq(tenants.id, tenantId)).limit(1);
  if (!tenant) return null;
  const hosts = await db
    .select({ host: tenantDomains.host, isPrimary: tenantDomains.isPrimary })
    .from(tenantDomains)
    .where(eq(tenantDomains.tenantId, tenantId));
  const prod = hosts.filter((h) => !isLocalHost(h.host));
  const chosen = prod.find((h) => h.isPrimary) ?? prod[0];
  if (chosen) return { tenant, siteUrl: `https://${chosen.host}`, siteUrlIsFallback: false };
  return { tenant, siteUrl: env.NEXT_PUBLIC_APP_URL.replace(/\/$/, ""), siteUrlIsFallback: true };
}
