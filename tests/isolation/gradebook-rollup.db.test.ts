import { afterAll, beforeAll, describe, expect, it } from "vitest";

// School roll-up + roster CRUD isolation (DB-backed, plans/50 Phase 3). getSchoolRollup is the
// whole-tenant read a brand_admin exports as CSV, so a leak here hands one school another
// school's learner PII: the roll-up for tenant A must contain nothing of tenant B. The roster
// mutations get the same treatment: removing a member of a foreign cohort must do nothing, and a
// pending invite must not be listable or refreshable under another tenant. Requires the seeded
// BVC + Acme tenants (pnpm seed:tenants && pnpm seed:bvc); skipped offline like the other .db suites.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("school roll-up and roster CRUD are tenant-scoped", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  let courseId = "";
  let lessonId = "";
  let cohortId = "";
  let cohortName = "";
  let acmeCohortId = "";
  let inviteId = "";
  let inviteToken = "";
  const learnerId = `iso-rollup-learner-${stamp}`;
  const acmeLearnerId = `iso-rollup-acme-${stamp}`;
  const teacherId = `iso-rollup-teacher-${stamp}`;

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses, lessons, lessonProgress, users, cohortMembers } = await import("@/db/schema");
    const { and, eq } = await import("drizzle-orm");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;

    const course = await db
      .select()
      .from(courses)
      .where(and(eq(courses.tenantId, bvcId), eq(courses.isPublished, true)))
      .limit(1);
    courseId = course[0]!.id;
    const lesson = await db.select().from(lessons).where(eq(lessons.courseId, courseId)).limit(1);
    lessonId = lesson[0]!.id;

    await db.insert(users).values([
      { id: learnerId, email: `${learnerId}@isolation.test`, name: "Iso Rollup Learner" },
      { id: acmeLearnerId, email: `${acmeLearnerId}@isolation.test`, name: "Iso Rollup Acme" },
      { id: teacherId, email: `${teacherId}@isolation.test`, name: "Iso Rollup Teacher" },
    ]);

    // The BVC learner: one enrollment, one completed lesson, one quiz attempt, one cohort seat.
    const { enrollFree } = await import("@/db/queries/enrollment");
    await enrollFree(bvcId, learnerId, courseId);
    await db.insert(lessonProgress).values({ userId: learnerId, lessonId, completedAt: new Date() });
    const { recordQuizAttempt } = await import("@/db/queries/quiz-attempts");
    await recordQuizAttempt({
      tenantId: bvcId,
      userId: learnerId,
      courseId,
      lessonId,
      score: 80,
      passed: true,
      correct: 4,
      total: 5,
      responses: [],
    });

    const { createCohort, createInvite } = await import("@/db/queries/cohorts");
    cohortName = `iso-rollup-cohort-${stamp}`;
    const cohort = await createCohort(bvcId, teacherId, cohortName);
    cohortId = cohort.id;
    await db.insert(cohortMembers).values({ tenantId: bvcId, cohortId, userId: learnerId });

    // The Acme learner exists ONLY as a cohort member on the other tenant.
    const acmeCohort = await createCohort(acmeId, teacherId, `iso-rollup-acme-cohort-${stamp}`);
    acmeCohortId = acmeCohort.id;
    await db.insert(cohortMembers).values({ tenantId: acmeId, cohortId: acmeCohortId, userId: acmeLearnerId });

    const invite = await createInvite(bvcId, cohortId, `iso-rollup-invitee-${stamp}@isolation.test`);
    inviteId = invite.id;
    inviteToken = invite.token;
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { cohorts, users } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    // Deleting the cohorts cascades members + invites; deleting the users cascades
    // enrollments, lesson progress, and quiz attempts.
    await db.delete(cohorts).where(inArray(cohorts.id, [cohortId, acmeCohortId]));
    await db.delete(users).where(inArray(users.id, [learnerId, acmeLearnerId, teacherId]));
  });

  it("rolls up the learner's numbers inside their own tenant", async () => {
    const { getSchoolRollup } = await import("@/db/queries/gradebook");
    const rows = await getSchoolRollup(bvcId);
    const row = rows.find((r) => r.userId === learnerId);
    expect(row).toBeDefined();
    expect(row!.email).toBe(`${learnerId}@isolation.test`);
    expect(row!.coursesEnrolled).toBeGreaterThanOrEqual(1);
    expect(row!.lessonsCompleted).toBeGreaterThanOrEqual(1);
    expect(row!.bestQuizAvg).toBe(80);
    expect(row!.cohortNames).toContain(cohortName);
  });

  it("shows nothing of one tenant's learners in the other tenant's roll-up", async () => {
    const { getSchoolRollup } = await import("@/db/queries/gradebook");
    const acmeRows = await getSchoolRollup(acmeId);
    // The BVC learner (enrollment + progress + quiz + cohort) must not appear under Acme...
    expect(acmeRows.find((r) => r.userId === learnerId)).toBeUndefined();
    // ...and no BVC cohort name may leak onto any Acme row.
    for (const row of acmeRows) expect(row.cohortNames).not.toContain(cohortName);
    // The cohort-only Acme learner appears under Acme, never under BVC.
    expect(acmeRows.find((r) => r.userId === acmeLearnerId)).toBeDefined();
    const bvcRows = await getSchoolRollup(bvcId);
    expect(bvcRows.find((r) => r.userId === acmeLearnerId)).toBeUndefined();
  });

  it("refuses to remove a member of a foreign cohort", async () => {
    const { listMembers, removeMember } = await import("@/db/queries/cohorts");
    // Wrong tenant for this cohort: the delete must match nothing.
    await removeMember(acmeId, cohortId, learnerId);
    const still = await listMembers(bvcId, cohortId);
    expect(still.map((m) => m.userId)).toContain(learnerId);
  });

  it("hides pending invites from the other tenant and refuses a cross-tenant refresh", async () => {
    const { listPendingInvites, refreshInvite } = await import("@/db/queries/cohorts");
    expect((await listPendingInvites(bvcId, cohortId)).map((i) => i.id)).toContain(inviteId);
    expect(await listPendingInvites(acmeId, cohortId)).toHaveLength(0);
    expect(await refreshInvite(acmeId, cohortId, inviteId)).toBeNull();
  });

  it("refreshes a pending invite in-tenant without rotating its token", async () => {
    const { refreshInvite } = await import("@/db/queries/cohorts");
    const refreshed = await refreshInvite(bvcId, cohortId, inviteId);
    expect(refreshed).not.toBeNull();
    // The link already in the student's inbox must keep working: same token, newer invitedAt.
    expect(refreshed!.token).toBe(inviteToken);
  });
});
