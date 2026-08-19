import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Private-course invisibility + the owner's study loop (plans/67 branch 1, DB-backed).
//
// The WELL series ships `visibility: "private"` + unpublished through the new seeder opt, so this
// suite pins BOTH halves of the contract: (a) a private course appears on NO public surface, and
// (b) the OWNER can still enroll in and complete their own private course, minting a real
// verification token, which is the study loop the WELL program depends on.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("a private course is invisible everywhere and studyable by its owner", () => {
  const stamp = Date.now();
  const slug = `iso-private-${stamp}`;
  let bvcId = "";
  let courseId = "";
  let instructorId = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { courses, tenants, userProfiles } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    bvcId = bvc[0]!.id;
    // Reuse a real instructor (any course's) so profile joins behave like production.
    const anyCourse = await db.select().from(courses).where(eq(courses.tenantId, bvcId)).limit(1);
    instructorId = anyCourse[0]!.instructorId;
    void userProfiles;

    const { seedAuthoredCourse } = await import("../../scripts/lib/seed-authored-course");
    courseId = await seedAuthoredCourse(db, {
      tenantId: bvcId,
      instructorId,
      slug,
      course: {
        title: "Isolation Private Course",
        description: "Throwaway private-course fixture.",
        lessons: [
          { slug: "l1", title: "Only lesson", body: "Private fixture body." },
        ],
      },
      category: "Health & Longevity",
      visibility: "private",
      publishHoldReason: "Isolation test fixture. Owner-only.",
    });
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    await db.delete(courses).where(eq(courses.id, courseId));
  });

  it("was born unpublished + private with the hold reason (the seeder opt's contract)", async () => {
    const { db } = await import("@/db/client");
    const { courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    const [row] = await db.select().from(courses).where(eq(courses.id, courseId));
    expect(row.visibility).toBe("private");
    expect(row.isPublished).toBe(false);
    expect(row.publishedAt).toBeNull();
    expect(row.publishHoldReason).toContain("Owner-only");
  });

  it("re-seeding does NOT resurrect visibility or publishing (insert-only, the public-flip guarantee)", async () => {
    const { db } = await import("@/db/client");
    const { courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    // Simulate the owner's later public flip in the admin UI...
    await db
      .update(courses)
      .set({ visibility: "public", isPublished: true, publishedAt: new Date(), publishHoldReason: null })
      .where(eq(courses.id, courseId));
    // ...then a routine content re-seed:
    const { seedAuthoredCourse } = await import("../../scripts/lib/seed-authored-course");
    await seedAuthoredCourse(db, {
      tenantId: bvcId,
      instructorId,
      slug,
      course: {
        title: "Isolation Private Course",
        description: "Throwaway private-course fixture.",
        lessons: [{ slug: "l1", title: "Only lesson", body: "Edited body." }],
      },
      category: "Health & Longevity",
      visibility: "private",
      publishHoldReason: "Must not reapply.",
    });
    const [row] = await db.select().from(courses).where(eq(courses.id, courseId));
    expect(row.visibility).toBe("public");
    expect(row.isPublished).toBe(true);
    // Restore the private state for the visibility assertions below.
    await db
      .update(courses)
      .set({ visibility: "private", isPublished: false, publishedAt: null })
      .where(eq(courses.id, courseId));
  });

  it("appears in NO public read: catalog, series, sitemap, api-v1, embed card, search rows", async () => {
    const { listCourses, listSeries, listSitemapCourses } = await import("@/db/queries/catalog");
    expect((await listCourses(bvcId)).map((c) => c.slug)).not.toContain(slug);
    expect((await listSeries(bvcId)).map((s) => s.slug)).not.toContain("well-wellness-coaching");
    // The sitemap query is deliberately raw; the include decision is the pure includeInSitemap
    // (src/lib/vetting.ts), which is what the sitemap route applies. Assert at that layer.
    const { includeInSitemap } = await import("@/lib/vetting");
    const sitemapRows = (await listSitemapCourses(bvcId)).filter(includeInSitemap);
    expect(sitemapRows.map((c) => c.slug)).not.toContain(slug);

    const { listPublishedCourses } = await import("@/db/queries/api-v1");
    const apiList = await listPublishedCourses(bvcId, { limit: 100, offset: 0 });
    expect(apiList.items.map((c) => c.id)).not.toContain(courseId);

    const { getPublishedCourseCard } = await import("@/db/queries/embed");
    expect(await getPublishedCourseCard(bvcId, courseId)).toBeFalsy();

    // In-course search is deliberately NOT asserted here: its query serves whoever the ROUTE
    // authorizes (enrolled/editor/auditor after a tenant-scoped course fetch), and the owner
    // searching their own private course must keep working. Route-level cross-tenant coverage
    // lives in tests/isolation/course-search.db.test.ts.
  });

  it("can never be a specialization leg while private", async () => {
    const { computeSpecializations } = await import("@/lib/specializations");
    // The query layer filters ne(visibility,'private'); emulate its contract here: a published
    // map that (correctly) excludes the private course drops any def naming it.
    const def = {
      slug: "iso-prog",
      title: "x",
      description: "x",
      legs: [{ label: "Only", courseSlug: slug }, { label: "B", courseSlug: "how-to-research" }, { label: "C", courseSlug: "documentary" }],
    };
    const published = new Map([["how-to-research", { title: "r" }], ["documentary", { title: "d" }]]);
    expect(computeSpecializations([def], published, new Map())).toHaveLength(0);
  });

  it("the owner's study loop works: enroll + complete queries mint a verification token", async () => {
    const { db } = await import("@/db/client");
    const { enrollments } = await import("@/db/schema");
    const { and, eq } = await import("drizzle-orm");
    // Route-level auth (canAccessCourse) is covered by its own unit surface; here we pin that the
    // underlying writes are not blocked by publishing state for the instructor's own course, via
    // the same query the complete route uses (it generates the verification token).
    await db.insert(enrollments).values({ tenantId: bvcId, userId: instructorId, courseId, status: "active" });
    const { createCompletion } = await import("@/db/queries/enrollment");
    const { completion } = await createCompletion(instructorId, courseId);
    expect(completion.verificationToken).toBeTruthy();
    const { getCompletionByToken } = await import("@/db/queries/enrollment");
    const found = await getCompletionByToken(bvcId, completion.verificationToken);
    expect(found).not.toBeNull();
    await db.delete(enrollments).where(and(eq(enrollments.courseId, courseId), eq(enrollments.userId, instructorId)));
  });
});
