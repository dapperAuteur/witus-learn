import { beforeAll, describe, expect, it } from "vitest";

// Content-isolation gate (DB-backed) for the in-course search read (plans/61 §5).
//
// The pure half lives in tests/course-search.test.ts. This is the half that can only be proved
// against a real database: that listPublishedLessonSearchRows, which returns LESSON TEXT, yields
// nothing when asked from another tenant for a course id it does not hold — the exact call the
// /api/courses/[id]/search route would make if its by-id 404 guard were ever bypassed. It also
// pins the published-only filter: a draft lesson's title and body must never enter the search set.
//
// Requires the seeded BVC + Acme tenants:  pnpm seed:tenants && pnpm seed:bvc, then
//   DATABASE_URL=... pnpm test
// Skipped offline so the pure suite still runs.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("in-course search read is tenant-scoped and published-only", () => {
  let bvcId = "";
  let acmeId = "";
  let bvcCourseId = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, lessons } = await import("@/db/schema");
    const { and, eq } = await import("drizzle-orm");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;

    // Any BVC course that has at least one published lesson (so the control assertion has teeth).
    const row = await db
      .select({ courseId: lessons.courseId })
      .from(lessons)
      .where(and(eq(lessons.tenantId, bvcId), eq(lessons.isPublished, true)))
      .limit(1);
    bvcCourseId = row[0]?.courseId ?? "";
  });

  it("returns nothing when another tenant asks for this course's lessons", async () => {
    const { listPublishedLessonSearchRows } = await import("@/db/queries/course-search");
    if (!bvcCourseId) return; // nothing seeded to attempt to steal

    // Control: the owner tenant really can read it.
    const own = await listPublishedLessonSearchRows(bvcId, bvcCourseId);
    expect(own.length).toBeGreaterThan(0);

    // The leak attempt: Acme handing over BVC's course id must get zero rows, not a redirect,
    // not a partial set.
    expect(await listPublishedLessonSearchRows(acmeId, bvcCourseId)).toEqual([]);
  });

  it("never returns an unpublished lesson", async () => {
    const { listPublishedLessonSearchRows } = await import("@/db/queries/course-search");
    const { db } = await import("@/db/client");
    const { lessons } = await import("@/db/schema");
    const { and, eq } = await import("drizzle-orm");
    if (!bvcCourseId) return;

    const drafts = await db
      .select({ id: lessons.id })
      .from(lessons)
      .where(and(eq(lessons.courseId, bvcCourseId), eq(lessons.isPublished, false)));
    const draftIds = new Set(drafts.map((d) => d.id));

    const rows = await listPublishedLessonSearchRows(bvcId, bvcCourseId);
    for (const r of rows) expect(draftIds.has(r.id)).toBe(false);
  });
});
