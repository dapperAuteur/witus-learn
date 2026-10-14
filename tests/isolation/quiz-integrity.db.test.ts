import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Quiz integrity panel isolation (plans/93 section 3, DB-backed). The counts behind the Coming-soon
// face and /admin/quiz-integrity must stay inside their tenant, and must be counts: no string from a
// quiz may come back. Requires the seeded BVC + Acme tenants (pnpm seed:tenants && pnpm seed:bvc);
// skipped offline like the other .db suites.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("quiz-integrity counts are tenant-scoped and carry no question text", () => {
  const stamp = Date.now();
  let bvcId = "";
  let acmeId = "";
  let courseId = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { courses, tenants } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    const { seedAuthoredCourse } = await import("../../scripts/lib/seed-authored-course");
    bvcId = (await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1))[0]!.id;
    acmeId = (await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1))[0]!.id;
    const instructorId = (await db.select().from(courses).where(eq(courses.tenantId, bvcId)).limit(1))[0]!.instructorId;
    courseId = await seedAuthoredCourse(db, {
      tenantId: bvcId,
      instructorId,
      slug: `iso-quiz-integrity-${stamp}`,
      course: {
        title: `Isolation quiz-integrity fixture ${stamp}`,
        description: "Throwaway quiz-integrity fixture.",
        lessons: [
          { slug: "teach", title: "Teach", body: "The answer is taught here." },
          {
            slug: "check",
            title: "Check",
            quiz: {
              questions: Array.from({ length: 8 }, (_, i) => ({
                prompt: `SECRET PROMPT ${i}`,
                options: ["SECRET alpha", "SECRET bravo", "SECRET charl", "SECRET delta"],
                correctIndex: i % 4,
                explanation: i % 2 === 0 ? "SECRET because." : undefined,
                sourceLessonSlug: i < 6 ? "teach" : "not-in-this-course",
              })),
            },
          },
        ],
      },
      visibility: "private",
      publishHoldReason: "Isolation test fixture.",
    });
  });

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    if (courseId) await db.delete(courses).where(eq(courses.id, courseId));
  });

  it("counts the course in its own tenant", async () => {
    const { quizIntegrityByCourse } = await import("@/db/queries/quiz-integrity");
    const summary = (await quizIntegrityByCourse(bvcId, courseId)).get(courseId);
    expect(summary).toEqual({
      quizzes: 1,
      questions: 8,
      shuffled: 1,
      balance: { measured: 1, passing: 1 },
      tied: 6,
      explained: 4,
    });
  });

  it("returns nothing for the same course id asked from another tenant", async () => {
    const { quizIntegrityByCourse } = await import("@/db/queries/quiz-integrity");
    expect((await quizIntegrityByCourse(acmeId, courseId)).size).toBe(0);
    expect((await quizIntegrityByCourse(acmeId)).has(courseId)).toBe(false);
  });

  it("returns numbers only: no string from the quiz comes back", async () => {
    const { quizIntegrityByCourse } = await import("@/db/queries/quiz-integrity");
    const all = await quizIntegrityByCourse(bvcId);
    expect(JSON.stringify(all.get(courseId))).not.toContain("SECRET");
  });
});
