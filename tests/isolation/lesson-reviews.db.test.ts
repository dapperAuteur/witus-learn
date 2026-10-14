import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Reviewer sign-off isolation (plans/93 section 1, DB-backed). A verdict, a reviewer's credit and a
// reviewable lesson must stay inside their tenant AND their course: no read or write from another
// school, and no verdict on one course's lesson recorded under another course. Also pins the seeder
// half end to end: markers become review_needs, leave the stored text, and a re-seed that edits the
// lesson resets the verdict on read. Requires the seeded BVC + Acme tenants (pnpm seed:tenants &&
// pnpm seed:bvc); skipped offline like the other .db suites.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

const MARKED_BODY =
  "> **Before release:** needs a qualified reviewer (QR): an isolation-test rigger.\n\nA basket hitch doubles the capacity.";

describe.skipIf(!HAS_DB)("lesson reviews are tenant- and course-scoped", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  let instructorId = "";
  let courseA = "";
  let courseB = "";
  let lessonA = "";
  let lessonB = "";
  let auditorId = "";
  const reviewerId = `iso-reviewer-${stamp}`;

  const seedFixture = async (slug: string, body: string) => {
    const { db } = await import("@/db/client");
    const { seedAuthoredCourse } = await import("../../scripts/lib/seed-authored-course");
    return seedAuthoredCourse(db, {
      tenantId: bvcId,
      instructorId,
      slug,
      course: {
        title: `Isolation review fixture ${slug}`,
        description: "Throwaway reviewer sign-off fixture.",
        lessons: [{ slug: "l1", title: "Slings", body }],
      },
      visibility: "private",
      publishHoldReason: "Isolation test fixture.",
    });
  };

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { courses, lessons, tenants, users } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    bvcId = (await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1))[0]!.id;
    acmeId = (await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1))[0]!.id;
    instructorId = (await db.select().from(courses).where(eq(courses.tenantId, bvcId)).limit(1))[0]!.instructorId;

    courseA = await seedFixture(`iso-review-a-${stamp}`, MARKED_BODY);
    courseB = await seedFixture(`iso-review-b-${stamp}`, MARKED_BODY);
    lessonA = (await db.select().from(lessons).where(eq(lessons.courseId, courseA)).limit(1))[0]!.id;
    lessonB = (await db.select().from(lessons).where(eq(lessons.courseId, courseB)).limit(1))[0]!.id;

    await db.insert(users).values({ id: reviewerId, email: `${reviewerId}@isolation.test`, name: "Iso Reviewer" });
    const { acceptAuditorInvite, inviteCourseAuditor } = await import("@/db/queries/course-auditors");
    const grant = await inviteCourseAuditor({
      tenantId: bvcId,
      courseId: courseA,
      email: `${reviewerId}@isolation.test`,
      invitedBy: instructorId,
    });
    await acceptAuditorInvite(grant.token, reviewerId);
    auditorId = grant.id;
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { courses, users } = await import("@/db/schema");
    const { inArray, eq } = await import("drizzle-orm");
    // Deleting the courses cascades their lessons, grants and verdicts.
    await db.delete(courses).where(inArray(courses.id, [courseA, courseB].filter(Boolean)));
    await db.delete(users).where(eq(users.id, reviewerId));
  });

  const review = (over: Record<string, unknown> = {}) => ({
    tenantId: bvcId,
    courseId: courseA,
    lessonId: lessonA,
    needKind: "qr" as const,
    auditorId,
    reviewerUserId: reviewerId,
    reviewerName: "Iso Reviewer",
    reviewerCredential: "Isolation rigger",
    verdict: "cleared" as const,
    correction: null,
    lessonHash: "h",
    ...over,
  });

  it("the seeder stored the need and stripped the marker from the text", async () => {
    const { listReviewableLessons } = await import("@/db/queries/lesson-reviews");
    const [l] = await listReviewableLessons(bvcId, [courseA]);
    expect(l.reviewNeeds).toEqual([{ kind: "qr", who: "an isolation-test rigger" }]);
    expect(l.textContent).toBe("A basket hitch doubles the capacity.");
  });

  it("reviewable lessons are invisible from another tenant", async () => {
    const { listReviewableLessons } = await import("@/db/queries/lesson-reviews");
    expect(await listReviewableLessons(acmeId, [courseA, courseB])).toHaveLength(0);
  });

  it("refuses a verdict written under another tenant or another course", async () => {
    const { upsertLessonReview } = await import("@/db/queries/lesson-reviews");
    expect(await upsertLessonReview(review({ tenantId: acmeId }))).toBeNull();
    expect(await upsertLessonReview(review({ courseId: courseB }))).toBeNull();
    expect(await upsertLessonReview(review({ courseId: courseA, lessonId: lessonB }))).toBeNull();
  });

  it("records one verdict, readable in its own tenant and course only, and replaces it on a second", async () => {
    const { listLessonReviews, upsertLessonReview } = await import("@/db/queries/lesson-reviews");
    const first = await upsertLessonReview(review());
    expect(first?.verdict).toBe("cleared");
    const second = await upsertLessonReview(review({ verdict: "cleared_with_correction", correction: "Say basket hitch." }));
    expect(second?.id).toBe(first?.id);
    const rows = await listLessonReviews(bvcId, [courseA]);
    expect(rows).toHaveLength(1);
    expect(rows[0].verdict).toBe("cleared_with_correction");
    expect(await listLessonReviews(acmeId, [courseA])).toHaveLength(0);
    expect(await listLessonReviews(bvcId, [courseB])).toHaveLength(0);
  });

  it("'Applied as written' cannot be stamped from another tenant or course, and only once", async () => {
    const { markCorrectionApplied } = await import("@/db/queries/lesson-reviews");
    const base = { tenantId: bvcId, courseId: courseA, lessonId: lessonA, needKind: "qr" as const, lessonHash: "h2" };
    expect(await markCorrectionApplied({ ...base, tenantId: acmeId })).toBeNull();
    expect(await markCorrectionApplied({ ...base, courseId: courseB })).toBeNull();
    expect((await markCorrectionApplied(base))?.lessonHash).toBe("h2");
    expect(await markCorrectionApplied(base)).toBeNull();
  });

  it("a grant and its credit are invisible and unwritable from another tenant or course", async () => {
    const { getViewerAuditorGrant, setCourseAuditorCredit } = await import("@/db/queries/course-auditors");
    const viewer = { userId: reviewerId, email: `${reviewerId}@isolation.test` };
    expect(await getViewerAuditorGrant({ tenantId: bvcId, courseId: courseA, ...viewer })).not.toBeNull();
    expect(await getViewerAuditorGrant({ tenantId: acmeId, courseId: courseA, ...viewer })).toBeNull();
    expect(await getViewerAuditorGrant({ tenantId: bvcId, courseId: courseB, ...viewer })).toBeNull();
    const credit = { reviewerName: "Iso Reviewer", reviewerCredential: "Isolation rigger" };
    expect(await setCourseAuditorCredit(acmeId, courseA, auditorId, credit)).toBeNull();
    expect(await setCourseAuditorCredit(bvcId, courseB, auditorId, credit)).toBeNull();
    expect((await setCourseAuditorCredit(bvcId, courseA, auditorId, credit))?.reviewerCredential).toBe("Isolation rigger");
  });

  it("a re-seed that edits the lesson resets the verdict on read; one that does not, keeps it", async () => {
    const { listLessonReviews, listReviewableLessons, upsertLessonReview } = await import("@/db/queries/lesson-reviews");
    const { summarizeLessonReview } = await import("@/lib/lesson-review-summary");
    const { lessonReviewHash } = await import("@/lib/lesson-review-hash");
    const [before] = await listReviewableLessons(bvcId, [courseA]);
    await upsertLessonReview(review({ lessonHash: lessonReviewHash(before) }));
    const state = async () => {
      const [l] = await listReviewableLessons(bvcId, [courseA]);
      return summarizeLessonReview(l, await listLessonReviews(bvcId, [courseA])).rows[0].state;
    };
    expect(await state()).toBe("cleared");
    await seedFixture(`iso-review-a-${stamp}`, MARKED_BODY);
    expect(await state()).toBe("cleared");
    await seedFixture(`iso-review-a-${stamp}`, MARKED_BODY.replace("doubles", "triples"));
    expect(await state()).toBe("changed_since_review");
  });
});
