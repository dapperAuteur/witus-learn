import { and, asc, eq, inArray, or } from "drizzle-orm";
import { db } from "@/db/client";
import {
  assignmentSubmissions,
  cohortAttendance,
  cohortInvites,
  cohortMembers,
  cohorts,
  courses,
  enrollments,
  guardianInvites,
  guardians,
  lessonProgress,
  lessons,
  liveMessages,
  livePresence,
  liveSessions,
  quizAttempts,
  recallAttempts,
  tenantApiKeys,
  tenantDomains,
  tenantMemberships,
  tenants,
  userProfiles,
  users,
} from "@/db/schema";
import { enrollFree } from "@/db/queries/enrollment";
import { upsertProgress } from "@/db/queries/progress";
import { env } from "@/lib/env";
import type { TenantRecord } from "@/lib/tenant";

// Demo account: a single shared, tenant-scoped user prospective teachers land in via
// "Try the demo" on the Acme host. A nightly Vercel cron (`/api/cron/demo-reset`) wipes
// its data and reseeds a small baseline so every visitor gets a fresh, working sandbox.
//
// Everything here is STRICTLY scoped to (a) this one demo user id and (b) the Acme
// tenant id — never a raw "delete this user's data" across tenants. That scoping is
// the whole security story for the nightly reset: a bug here would either delete too
// little (stale demo data — annoying) or too much (cross-tenant data loss — the thing
// the isolation test suite exists to prevent), so every query below filters both ids.

/** The one tenant the demo account is allowed to touch. */
export const DEMO_TENANT_SLUG = "acme-academy";

/** Stable literal id (mirrors scripts/seed-owner.ts's `"bam"`) so the demo user is the
 *  exact same row across every nightly reset — never a fresh better-auth-generated id. */
const DEMO_USER_ID = "demo-teacher";

export interface DemoAccount {
  userId: string;
  tenantId: string;
}

/** The Acme demo tenant, or null if `pnpm seed:tenants` hasn't been run yet. */
export async function getDemoTenant(): Promise<TenantRecord | null> {
  const rows = await db.select().from(tenants).where(eq(tenants.slug, DEMO_TENANT_SLUG)).limit(1);
  return rows[0] ?? null;
}

/**
 * Find-or-create the shared demo user and make it a `brand_admin` member of the Acme
 * tenant ONLY — so a visitor can try teacher/admin surfaces (/admin, /teach, authoring,
 * /live, /cohorts) without ever becoming a platform owner or a member of any other
 * brand. Idempotent: safe to call on every login and every nightly reset.
 *
 * Returns null when DEMO_VISITOR_USER_EMAIL isn't configured or the Acme tenant hasn't
 * been seeded — callers must treat that as "feature not available", never throw a 500
 * that could leak whether the env var is set.
 */
export async function ensureDemoUser(): Promise<DemoAccount | null> {
  if (!env.DEMO_VISITOR_USER_EMAIL) return null;
  const tenant = await getDemoTenant();
  if (!tenant) return null;

  const email = env.DEMO_VISITOR_USER_EMAIL;
  await db
    .insert(users)
    .values({ id: DEMO_USER_ID, email, emailVerified: true, name: "Demo Teacher" })
    .onConflictDoNothing();

  const rows = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
  const userId = rows[0]?.id;
  if (!userId) return null;

  await db
    .insert(userProfiles)
    .values({ userId, displayName: "Demo Teacher", isPlatformOwner: false })
    .onConflictDoUpdate({
      target: userProfiles.userId,
      set: { displayName: "Demo Teacher", isPlatformOwner: false },
    });

  // brand_admin on Acme ONLY. Deliberately never touches tenant_memberships for any
  // other tenant and never sets isPlatformOwner — tenant isolation is what keeps a
  // compromised/shared demo session confined to the Acme sandbox.
  await db
    .insert(tenantMemberships)
    .values({ tenantId: tenant.id, userId, role: "brand_admin" })
    .onConflictDoNothing();

  return { userId, tenantId: tenant.id };
}

/** True when `email` is the configured demo account's email (used to show the
 *  "you're in a demo" banner). Case-insensitive; false when demo login isn't configured. */
export function isDemoEmail(email: string | null | undefined): boolean {
  if (!email || !env.DEMO_VISITOR_USER_EMAIL) return false;
  return email.toLowerCase() === env.DEMO_VISITOR_USER_EMAIL.toLowerCase();
}

/**
 * Delete every bit of learner + teacher data the demo user has on Acme — enrollments,
 * lesson progress, active-recall/quiz attempts, assignment submissions, cohorts they
 * own (+ that cohort's members/invites/attendance), cohort memberships/attendance
 * elsewhere, guardian links/invites, live chat/presence/sessions, API keys, and any
 * courses (+ modules/lessons, cascaded) they authored on Acme.
 *
 * Every delete below filters BOTH `userId === demoUserId` and the Acme `tenantId` (or,
 * for the couple of tables with no tenant_id column of their own, a lessons/cohorts
 * subquery pre-filtered to that tenant) — so calling this can never reach another
 * tenant's data or another user's data, even by accident.
 */
export async function clearDemoData(userId: string, tenantId: string): Promise<void> {
  // lesson_progress has no tenant_id column (it inherits scope from the lesson), so
  // scope it to THIS tenant's lesson ids only — never a bare "all progress for userId".
  const tenantLessons = await db.select({ id: lessons.id }).from(lessons).where(eq(lessons.tenantId, tenantId));
  const tenantLessonIds = tenantLessons.map((l) => l.id);
  if (tenantLessonIds.length > 0) {
    await db
      .delete(lessonProgress)
      .where(and(eq(lessonProgress.userId, userId), inArray(lessonProgress.lessonId, tenantLessonIds)));
  }

  await db
    .delete(recallAttempts)
    .where(and(eq(recallAttempts.tenantId, tenantId), eq(recallAttempts.userId, userId)));
  await db
    .delete(quizAttempts)
    .where(and(eq(quizAttempts.tenantId, tenantId), eq(quizAttempts.userId, userId)));
  await db
    .delete(assignmentSubmissions)
    .where(and(eq(assignmentSubmissions.tenantId, tenantId), eq(assignmentSubmissions.userId, userId)));
  await db.delete(enrollments).where(and(eq(enrollments.tenantId, tenantId), eq(enrollments.userId, userId)));

  // Cohort attendance/membership the demo user holds elsewhere (as a student/co-teacher),
  // THEN the cohorts they themselves own (cascades that cohort's own members/invites/attendance).
  await db
    .delete(cohortAttendance)
    .where(and(eq(cohortAttendance.tenantId, tenantId), eq(cohortAttendance.userId, userId)));
  await db
    .delete(cohortMembers)
    .where(and(eq(cohortMembers.tenantId, tenantId), eq(cohortMembers.userId, userId)));
  await db
    .delete(cohortInvites)
    .where(and(eq(cohortInvites.tenantId, tenantId), eq(cohortInvites.acceptedUserId, userId)));
  await db.delete(cohorts).where(and(eq(cohorts.tenantId, tenantId), eq(cohorts.ownerId, userId)));

  await db
    .delete(guardians)
    .where(
      and(
        eq(guardians.tenantId, tenantId),
        or(eq(guardians.guardianUserId, userId), eq(guardians.studentUserId, userId)),
      ),
    );
  await db
    .delete(guardianInvites)
    .where(
      and(
        eq(guardianInvites.tenantId, tenantId),
        or(eq(guardianInvites.studentUserId, userId), eq(guardianInvites.acceptedGuardianUserId, userId)),
      ),
    );

  await db
    .delete(liveMessages)
    .where(and(eq(liveMessages.tenantId, tenantId), eq(liveMessages.userId, userId)));
  await db
    .delete(livePresence)
    .where(and(eq(livePresence.tenantId, tenantId), eq(livePresence.userId, userId)));
  await db
    .delete(liveSessions)
    .where(and(eq(liveSessions.tenantId, tenantId), eq(liveSessions.createdBy, userId)));

  await db
    .delete(tenantApiKeys)
    .where(and(eq(tenantApiKeys.tenantId, tenantId), eq(tenantApiKeys.createdByUserId, userId)));

  // Courses the demo user authored on Acme. Cascades course_modules + lessons, and (via
  // each lesson's own FK cascade) any lesson_progress/recall/quiz/assignment/link-click/
  // social-share rows tied to THOSE specific lessons. Other instructors' courses/lessons
  // are untouched — the WHERE below is instructorId = this user, tenantId = Acme, only.
  await db.delete(courses).where(and(eq(courses.tenantId, tenantId), eq(courses.instructorId, userId)));
}

/**
 * Seed a little realistic state so the demo doesn't look empty: enroll the demo user in
 * a couple of Acme's published courses and mark a lesson or two complete in each. A no-op
 * (not an error) when Acme has no published courses yet — BAM still needs to seed real
 * course content into Acme for the demo to feel alive; see the operator task this branch
 * files for that reminder.
 */
export async function seedDemoBaseline(userId: string, tenantId: string): Promise<void> {
  const published = await db
    .select()
    .from(courses)
    .where(and(eq(courses.tenantId, tenantId), eq(courses.isPublished, true)))
    .limit(2);

  for (const course of published) {
    await enrollFree(tenantId, userId, course.id);

    const courseLessons = await db
      .select({ id: lessons.id })
      .from(lessons)
      .where(and(eq(lessons.courseId, course.id), eq(lessons.isPublished, true)))
      .orderBy(asc(lessons.sortOrder))
      .limit(2);

    for (const lesson of courseLessons) {
      await upsertProgress(userId, lesson.id, { completed: true });
    }
  }
}

/** Find-or-ensure the demo user, then clear + reseed its Acme data. Used by both the
 *  nightly cron and any manual "reset now" trigger. Returns null when the demo account
 *  isn't configured (missing env or unseeded tenant) so the caller can 500 gracefully. */
export async function resetDemoData(): Promise<DemoAccount | null> {
  const demo = await ensureDemoUser();
  if (!demo) return null;
  await clearDemoData(demo.userId, demo.tenantId);
  await seedDemoBaseline(demo.userId, demo.tenantId);
  return demo;
}

const isLocalHost = (host: string): boolean => host === "localhost" || host.endsWith(".localhost");

/**
 * The Acme demo school's public URL — the `/platform` and `/demo` marketing pages' "Launch
 * the demo school" button. Read from `tenant_domains` at request time, NEVER hardcoded (BAM
 * may repoint the domain; see `plans/user-tasks/62-demo-account-setup.md`, which registers
 * `acme.learning.witus.online` as a two-place change — Vercel domain + `tenant_domains` row —
 * so a stale hardcoded guess here would silently drift from reality).
 *
 * Preference order: the tenant's primary non-local host → any non-local host → (dev only, so
 * the button still works before a prod host is registered) a `*.localhost` host with the dev
 * app's port → `null` when nothing usable exists yet, so the caller can show a "not published
 * yet" note instead of a dead link.
 */
export async function getDemoSchoolUrl(): Promise<string | null> {
  const tenant = await getDemoTenant();
  if (!tenant) return null;

  const hosts = await db
    .select({ host: tenantDomains.host, isPrimary: tenantDomains.isPrimary })
    .from(tenantDomains)
    .where(eq(tenantDomains.tenantId, tenant.id));

  const prodHosts = hosts.filter((h) => !isLocalHost(h.host));
  const primary = prodHosts.find((h) => h.isPrimary) ?? prodHosts[0];
  if (primary) return `https://${primary.host}`;

  if (env.NODE_ENV !== "production") {
    const devHost = hosts.find((h) => isLocalHost(h.host))?.host ?? "acme.localhost";
    let port = "3040";
    try {
      port = new URL(env.NEXT_PUBLIC_APP_URL).port || port;
    } catch {
      // env.NEXT_PUBLIC_APP_URL is already URL-validated by src/lib/env.ts; this catch is
      // just belt-and-suspenders so a malformed value never throws here.
    }
    return `http://${devHost}:${port}`;
  }

  return null;
}
