import { afterAll, beforeAll, describe, expect, it } from "vitest";

// Content-isolation gate for the PUBLIC course-card embed read (/embed/card/[id] →
// getPublishedCourseCard), DB-backed. Requires the seeded BVC + Acme tenants:
//   pnpm seed:tenants && pnpm seed:bvc, then DATABASE_URL=... pnpm test
// Skipped offline so the pure suite (embed-card.test.ts) still runs. Mints its own throwaway
// courses inside BVC (a draft, a private one, and an unvetted published one) and deletes them
// in afterAll — never touches real course content.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("/embed/card read is tenant-scoped and published+public only", () => {
  let bvcId = "";
  let acmeId = "";
  const throwaway: string[] = [];
  let draftId = "";
  let privateId = "";
  let unvettedId = "";

  beforeAll(async () => {
    const { db } = await import("@/db/client");
    const { tenants, courses } = await import("@/db/schema");
    const { and, eq } = await import("drizzle-orm");

    const bvc = await db.select().from(tenants).where(eq(tenants.slug, "better-vice-club")).limit(1);
    const acme = await db.select().from(tenants).where(eq(tenants.slug, "acme-academy")).limit(1);
    bvcId = bvc[0]!.id;
    acmeId = acme[0]!.id;

    // Borrow a real BVC instructor id (instructor_id is NOT NULL and references users), then
    // mint one throwaway course per gate branch rather than assuming seed-data shape.
    const anyBvcCourse = await db
      .select({ instructorId: courses.instructorId })
      .from(courses)
      .where(and(eq(courses.tenantId, bvcId), eq(courses.isPublished, true)))
      .limit(1);
    const instructorId = anyBvcCourse[0]!.instructorId;

    const mint = async (values: {
      title: string;
      isPublished: boolean;
      visibility: string;
      vettedAt?: Date | null;
    }) => {
      const rows = await db
        .insert(courses)
        .values({
          tenantId: bvcId,
          instructorId,
          title: values.title,
          description: "Throwaway isolation-test course for the public embed card.",
          isPublished: values.isPublished,
          visibility: values.visibility,
          vettedAt: values.vettedAt ?? null,
        })
        .returning({ id: courses.id });
      throwaway.push(rows[0]!.id);
      return rows[0]!.id;
    };

    draftId = await mint({ title: "Embed test: draft", isPublished: false, visibility: "public" });
    privateId = await mint({ title: "Embed test: private", isPublished: true, visibility: "private" });
    unvettedId = await mint({
      title: "Embed test: unvetted",
      isPublished: true,
      visibility: "public",
      vettedAt: null,
    });
  });

  afterAll(async () => {
    if (throwaway.length === 0) return;
    const { db } = await import("@/db/client");
    const { courses } = await import("@/db/schema");
    const { inArray } = await import("drizzle-orm");
    await db.delete(courses).where(inArray(courses.id, throwaway));
  });

  it("returns a published+public course to its OWN tenant", async () => {
    const { getPublishedCourseCard } = await import("@/db/queries/embed");
    const card = await getPublishedCourseCard(bvcId, unvettedId);
    expect(card?.id).toBe(unvettedId);
    expect(card?.title).toBe("Embed test: unvetted");
  });

  it("404s (null) across tenants — Acme can never render a BVC card", async () => {
    const { getPublishedCourseCard } = await import("@/db/queries/embed");
    expect(await getPublishedCourseCard(acmeId, unvettedId)).toBeNull();
  });

  it("404s (null) on a draft, even in the right tenant", async () => {
    const { getPublishedCourseCard } = await import("@/db/queries/embed");
    expect(await getPublishedCourseCard(bvcId, draftId)).toBeNull();
  });

  it("404s (null) on a private course, even published, even in the right tenant", async () => {
    const { getPublishedCourseCard } = await import("@/db/queries/embed");
    expect(await getPublishedCourseCard(bvcId, privateId)).toBeNull();
  });

  it("serves an unvetted published course, and the pure face reduces it to Coming soon", async () => {
    const { getPublishedCourseCard } = await import("@/db/queries/embed");
    const { embedCardFace } = await import("@/lib/embed-card");
    const card = await getPublishedCourseCard(bvcId, unvettedId);
    expect(card).not.toBeNull();
    expect(embedCardFace(card!)).toBe("coming-soon");
  });
});
