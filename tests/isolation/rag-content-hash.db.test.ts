import { afterAll, describe, expect, it } from "vitest";

// The RAG content hash is computed twice with one algorithm: in SQL (contentHashQuery, one query for
// the whole catalog, used by rag:list / --needing and stored by indexCourse) and in JS
// (courseRagContentHash, the documented definition). If they ever disagree, every course reads as
// "changed" forever, so this runs the real query against real rows: a throwaway fixture course with
// the awkward cases (non-ASCII text, an empty body, a null body, an empty APA falling back to the
// in-text citation, a source with nothing), plus up to ten existing courses when the database has
// any. The fixture and its user are deleted afterwards (the course delete cascades).
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("RAG content hash: SQL equals JS", () => {
  const stamp = Date.now();
  const userId = `iso-rag-hash-${stamp}`;
  let courseId = "";

  afterAll(async () => {
    const { db } = await import("@/db/client");
    const { courses, users } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");
    if (courseId) await db.delete(courses).where(eq(courses.id, courseId));
    await db.delete(users).where(eq(users.id, userId));
  });

  async function compare(id: string) {
    const { db } = await import("@/db/client");
    const { eq } = await import("drizzle-orm");
    const schema = await import("@/db/schema");
    const { contentHashQuery } = await import("@/lib/rag/index-course");
    const { courseRagContentHash } = await import("@/lib/rag/content-hash");
    const [lessons, sources, hashed] = await Promise.all([
      db.select({ title: schema.lessons.title, body: schema.lessons.textContent }).from(schema.lessons).where(eq(schema.lessons.courseId, id)),
      db.select({ apa: schema.courseSources.apa, inText: schema.courseSources.inText }).from(schema.courseSources).where(eq(schema.courseSources.courseId, id)),
      db.execute(contentHashQuery(id)),
    ]);
    const row = (hashed.rows as { content_hash: string; items: number }[])[0];
    return { sql: row.content_hash, js: courseRagContentHash(lessons, sources), items: row.items };
  }

  it("matches on a fixture with the awkward cases", async () => {
    const { db } = await import("@/db/client");
    const { courseSources, courses, tenants, users } = await import("@/db/schema");
    const { sql } = await import("drizzle-orm");
    const tenant = (await db.select({ id: tenants.id }).from(tenants).limit(1))[0];
    expect(tenant, "the test database needs at least one tenant (pnpm seed:tenants)").toBeTruthy();
    await db.insert(users).values({ id: userId, email: `${userId}@isolation.test`, name: "Iso RAG" });
    const [c] = await db
      .insert(courses)
      .values({ tenantId: tenant!.id, instructorId: userId, title: "Iso RAG hash", slug: `iso-rag-hash-${stamp}`, description: "fixture" })
      .returning({ id: courses.id });
    courseId = c.id;
    // Raw SQL naming only the columns used, so this runs on a test branch that has not applied the
    // newest migrations yet (a Drizzle insert lists every column the schema knows).
    const t = tenant!.id;
    await db.execute(sql`
      insert into lessons (tenant_id, course_id, title, slug, text_content, sort_order) values
        (${t}, ${courseId}, ${"Café · naïve “quotes” — 日本語"}, 'a', ${"Body with ü, emoji 🧶 and\nnew lines."}, 1),
        (${t}, ${courseId}, 'Empty', 'b', '', 2),
        (${t}, ${courseId}, 'Null', 'c', null, 3)`);
    await db.insert(courseSources).values([
      { courseId, apa: "Smith, A. (2020). *A book*. https://example.org", inText: "(Smith, 2020)" },
      { courseId, apa: "", inText: "(Jones, 2019, p. 4)" },
      { courseId, apa: null, inText: null },
    ]);
    const r = await compare(courseId);
    expect(r.items).toBe(3);
    expect(r.sql).toBe(r.js);
  }, 60_000);

  it("matches on existing courses, when there are any", async () => {
    const { db } = await import("@/db/client");
    const { sql } = await import("drizzle-orm");
    const picked = await db.execute(sql`
      select c.id from courses c
       where exists (select 1 from lessons l where l.course_id = c.id and l.text_content <> '')
         and c.slug not like 'iso-%'
       order by c.created_at desc limit 10`);
    for (const { id } of picked.rows as { id: string }[]) {
      const r = await compare(id);
      expect(r.sql, `course ${id}`).toBe(r.js);
    }
  }, 120_000);
});
