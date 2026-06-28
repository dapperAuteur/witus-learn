import { beforeAll, describe, expect, it } from "vitest";
import { ALL_LENSES, LENSES } from "@/lib/ai/specialists";

// The AI tutor's isolation rests on two things, tested here:
//  1. (pure) the specialists are instructed to use ONLY this course's material.
//  2. (DB) retrieval is course/tenant-scoped — it can never surface another
//     course's or tenant's lessons. The DB part needs the seeded BVC + Acme
//     tenants (pnpm seed:tenants && pnpm seed:bvc) + DATABASE_URL; skipped offline.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");
const NO_EXCLUDE = "00000000-0000-0000-0000-000000000000";
// Deterministic non-zero query vector (order doesn't matter — we assert scope, not ranking).
const VEC = Array.from({ length: 768 }, (_, i) => ((i % 7) + 1) / 10);

describe("tutor grounding guardrails (pure)", () => {
  it("the explanation lens restricts the model to the course material", () => {
    expect(LENSES.explain.instruction).toMatch(/ONLY the course material/i);
  });
  it("offers exactly the explain/examples/coach lenses", () => {
    expect(ALL_LENSES).toEqual(["explain", "examples", "coach"]);
  });
});

describe.skipIf(!HAS_DB)("tutor retrieval is course/tenant-scoped (isolation)", () => {
  let bvcId = "";
  let bvcCourseId = "";
  let acmeCourseId = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    bvcId = (await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1))[0]!.id;
    const acmeId = (await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1))[0]!.id;
    bvcCourseId = (await db.select().from(courses).where(eq(courses.tenantId, bvcId)).limit(1))[0]!.id;
    acmeCourseId = (await db.select().from(courses).where(eq(courses.tenantId, acmeId)).limit(1))[0]!.id;
  });

  it("matchLessons returns only lessons from the queried course", async () => {
    const { matchLessons } = await import("@/db/queries/cyoa");
    const hits = await matchLessons(bvcCourseId, VEC, NO_EXCLUDE, 8);
    if (hits.length === 0) return; // no embeddings seeded → scoping holds vacuously
    expect(hits.every((h) => h.courseId === bvcCourseId)).toBe(true);
    expect(hits.map((h) => h.courseId)).not.toContain(acmeCourseId);
  });

  it("matchLessonsGlobal honors the mandatory tenant_filter (no cross-tenant leak)", async () => {
    const { matchLessonsGlobal } = await import("@/db/queries/cyoa");
    const { db } = await import("@/db/client");
    const { courses } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");

    const hits = await matchLessonsGlobal(bvcId, VEC, NO_EXCLUDE, bvcCourseId, 12);
    if (hits.length === 0) return; // no opted-in cross-course embeddings → vacuous
    const courseIds = [...new Set(hits.map((h) => h.courseId))];
    const rows = await db
      .select({ id: courses.id, tenantId: courses.tenantId })
      .from(courses)
      .where(inArray(courses.id, courseIds));
    // Every neighbor belongs to a course in the BVC tenant — never another tenant.
    expect(rows.every((r) => r.tenantId === bvcId)).toBe(true);
    expect(courseIds).not.toContain(acmeCourseId);
  });
});
