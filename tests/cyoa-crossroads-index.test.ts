import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { drizzle } from "drizzle-orm/pg-proxy";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as schema from "@/db/schema";
import type { RagDb } from "@/lib/rag/index-course";

// The CYOA crossroads index moved from Gemini (768, lesson_embeddings.embedding) to Mistral (1024,
// lesson_embeddings.embedding_v2) in migration 0079 (BAM, 2026-11-03: "move CYOA to Mistral"). No network
// and no database: the embedder is a fake, and the database is drizzle's pg-proxy driver, which hands every
// statement to a callback, so the SQL each function sends is asserted, not hoped.

interface Sent {
  sql: string;
  params: unknown[];
  method: string;
}

/** A drizzle db whose queries land in `sent`; `answer` returns the rows (arrays, in select-field order). */
function proxyDb(answer: (q: Sent) => unknown[][] = () => []) {
  const sent: Sent[] = [];
  const db = drizzle(
    async (sql, params, method) => {
      const q = { sql, params, method };
      sent.push(q);
      return { rows: answer(q) };
    },
    { schema },
  );
  return { db: db as unknown as RagDb, sent };
}

const vec = (seed: number) => Array.from({ length: 1024 }, (_, i) => ((i + seed) % 5) / 10);
const ROOT = join(import.meta.dirname, "..");

describe("crossroads content hash (pure)", () => {
  it("is md5 of the model header, the title and the text, joined with the unit separator", async () => {
    const { CROSSROADS_HASH_HEADER, crossroadsLessonHash } = await import("@/lib/cyoa/crossroads-index");
    expect(CROSSROADS_HASH_HEADER).toBe("cyoa-v2|mistral-embed|1024");
    const expected = createHash("md5").update(`cyoa-v2|mistral-embed|1024\u001fTitle\u001fBody`, "utf8").digest("hex");
    expect(crossroadsLessonHash("Title", "Body")).toBe(expected);
    expect(crossroadsLessonHash("Title", null)).toBe(crossroadsLessonHash("Title", ""));
    expect(crossroadsLessonHash("Title", "Body 2")).not.toBe(expected);
    expect(crossroadsLessonHash("Title 2", "Body")).not.toBe(expected);
  });

  it("the SQL twin hashes the same string: header param, chr(31), title, chr(31), coalesced text", async () => {
    const { crossroadsHashSql, CROSSROADS_HASH_HEADER } = await import("@/lib/cyoa/crossroads-index");
    const { db, sent } = proxyDb(() => [["x"]]);
    await db.select({ h: crossroadsHashSql() }).from(schema.lessons);
    // (A single-table select drops the table qualifier; the joined status queries keep it.)
    expect(sent[0].sql).toMatch(/md5\(\$1 \|\| chr\(31\) \|\| (?:"lessons"\.)?"title" \|\| chr\(31\) \|\| coalesce\((?:"lessons"\.)?"text_content", ''\)\)/);
    expect(sent[0].params).toEqual([CROSSROADS_HASH_HEADER]);
  });

  it("embeds the title and the body, and nothing for an empty lesson", async () => {
    const { crossroadsLessonText } = await import("@/lib/cyoa/crossroads-index");
    expect(crossroadsLessonText("T", "B")).toBe("T\n\nB");
    expect(crossroadsLessonText("T", null)).toBe("T");
    expect(crossroadsLessonText("", null)).toBe("");
  });
});

describe("indexCrossroads writes Mistral vectors to embedding_v2", () => {
  async function run(opts: { force?: boolean } = {}) {
    const { crossroadsLessonHash, indexCrossroads } = await import("@/lib/cyoa/crossroads-index");
    // Four published lessons: L1 current, L2 changed text, L3 no row, L4 a legacy Gemini row with no v2.
    const lessonRows = [
      ["l1", "One", "Body 1", crossroadsLessonHash("One", "Body 1"), true],
      ["l2", "Two", "Body 2 edited", crossroadsLessonHash("Two", "Body 2"), true],
      ["l3", "Three", "Body 3", null, null],
      ["l4", "Four", "Body 4", null, false],
    ];
    const { db, sent } = proxyDb((q) => (q.sql.startsWith("select") ? lessonRows : []));
    const embed = vi.fn(async (texts: string[]) => texts.map((_, i) => vec(i)));
    const r = await indexCrossroads("course-1", { db, embed, force: opts.force });
    return { r, sent, embed };
  }

  it("embeds only the missing or changed lessons and upserts embedding_v2 + content_hash", async () => {
    const { r, sent, embed } = await run();
    expect(r).toEqual({ total: 4, embedded: 3, current: 1 });
    expect(embed).toHaveBeenCalledTimes(1);
    expect(embed.mock.calls[0][0]).toEqual(["Two\n\nBody 2 edited", "Three\n\nBody 3", "Four\n\nBody 4"]);

    const insert = sent.find((q) => q.sql.startsWith("insert"))!;
    expect(insert.sql).toMatch(/insert into "lesson_embeddings" \("lesson_id", "embedding", "embedding_v2", "content_hash", "created_at"\)/);
    // The legacy 768 column is never given a value (drizzle writes `default` for it) nor updated on conflict.
    expect(insert.sql).toMatch(/values \(\$1, default, \$2, \$3, \$4\)/);
    expect(insert.sql).toMatch(/on conflict \("lesson_id"\) do update set "embedding_v2" = excluded\.embedding_v2, "content_hash" = excluded\.content_hash, "created_at" = excluded\.created_at/);
    expect(insert.sql).not.toMatch(/"embedding" = /);
    // A 1024-dim vector in pgvector's text form, and the hash of the text just embedded.
    const [lessonId, v2] = insert.params as string[];
    expect(lessonId).toBe("l2");
    expect(v2.startsWith("[") && v2.split(",").length === 1024).toBe(true);
  });

  it("force re-embeds every published lesson", async () => {
    const { r, embed } = await run({ force: true });
    expect(r).toEqual({ total: 4, embedded: 4, current: 0 });
    expect(embed.mock.calls[0][0]).toHaveLength(4);
  });

  it("does nothing, and calls no embedder, when every lesson is current", async () => {
    const { crossroadsLessonHash, indexCrossroads } = await import("@/lib/cyoa/crossroads-index");
    const { db, sent } = proxyDb(() => [["l1", "One", "B", crossroadsLessonHash("One", "B"), true]]);
    const embed = vi.fn();
    expect(await indexCrossroads("c", { db, embed })).toEqual({ total: 1, embedded: 0, current: 1 });
    expect(embed).not.toHaveBeenCalled();
    expect(sent.some((q) => q.sql.startsWith("insert"))).toBe(false);
  });

  it("writes nothing when the embedder fails", async () => {
    const { indexCrossroads } = await import("@/lib/cyoa/crossroads-index");
    const { db, sent } = proxyDb((q) => (q.sql.startsWith("select") ? [["l3", "Three", "Body", null, null]] : []));
    await expect(indexCrossroads("c", { db, embed: async () => Promise.reject(new Error("boom")) })).rejects.toThrow("boom");
    expect(sent.some((q) => q.sql.startsWith("insert"))).toBe(false);
  });

  it("reads only this course's published lessons", async () => {
    const { sent } = await run();
    const select = sent.find((q) => q.sql.startsWith("select"))!;
    expect(select.sql).toMatch(/where \("lessons"\."course_id" = \$1 and "lessons"\."is_published" = \$2\)/);
    expect(select.params).toEqual(["course-1", true]);
  });
});

describe("crossroads status counts lessons with no v2 vector or a stale hash", () => {
  it("getCrossroadsStatus counts published lessons and the stale ones", async () => {
    const { getCrossroadsStatus } = await import("@/lib/cyoa/crossroads-index");
    const { db, sent } = proxyDb(() => [[12, 5]]);
    expect(await getCrossroadsStatus("c1", { db })).toEqual({ published: 12, stale: 5 });
    const q = sent[0].sql;
    expect(q).toContain(`"lesson_embeddings"."lesson_id" is null`);
    expect(q).toContain(`"lesson_embeddings"."embedding_v2" is null`);
    expect(q).toMatch(/"lesson_embeddings"\."content_hash" is distinct from md5\(/);
    // The legacy Gemini column plays no part, and no timestamp comparison remains.
    expect(q).not.toMatch(/"lesson_embeddings"\."embedding"[^_]/);
    expect(q).not.toContain("updated_at");
  });

  it("listCyoaCrossroadsStates reads CYOA courses only; the backfill picks the stale ones", async () => {
    const { listCyoaCrossroadsStates, cyoaCoursesNeedingIndex } = await import("@/lib/cyoa/crossroads-index");
    const { db, sent } = proxyDb(() => [
      ["c1", "Alpha", "alpha", "bvc", true, 10, 0],
      ["c2", "Beta", "beta", "bvc", true, 8, 8],
      ["c3", "Gamma", "gamma", "acme", false, 4, 2],
    ]);
    const states = await listCyoaCrossroadsStates({ db });
    expect(sent[0].sql).toContain(`"courses"."navigation_mode" = $`);
    expect(sent[0].params).toContain("cyoa");
    // Published first, most stale first.
    expect(states.map((s) => s.courseId)).toEqual(["c2", "c1", "c3"]);
    expect(cyoaCoursesNeedingIndex(states).map((s) => s.courseId)).toEqual(["c2", "c3"]);
  });
});

describe("crossroads reads use embedding_v2 and keep the tenant filter", () => {
  const sent = vi.hoisted(() => [] as Sent[]);
  const rows = vi.hoisted(() => ({ next: [] as unknown[][] }));
  vi.mock("@/db/client", async () => {
    const { drizzle } = await import("drizzle-orm/pg-proxy");
    const schema = await import("@/db/schema");
    return {
      db: drizzle(
        async (sql, params, method) => {
          sent.push({ sql, params, method });
          return { rows: rows.next };
        },
        { schema },
      ),
    };
  });
  beforeEach(() => {
    sent.length = 0;
    rows.next = [];
  });

  it("getLessonEmbedding reads the v2 vector, and null when a lesson has none", async () => {
    const { getLessonEmbedding } = await import("@/db/queries/cyoa");
    rows.next = [[null]];
    expect(await getLessonEmbedding("l1")).toBeNull();
    expect(sent[0].sql).toMatch(/select "embedding_v2" from "lesson_embeddings"/);
    rows.next = [["[0.5,0.25]"]];
    expect(await getLessonEmbedding("l1")).toEqual([0.5, 0.25]);
  });

  it("matchLessons orders by embedding_v2 and skips lessons without one", async () => {
    const { matchLessons } = await import("@/db/queries/cyoa");
    await matchLessons("course-1", vec(0), "l1", 4);
    const q = sent[0].sql;
    expect(q).toContain(`"lesson_embeddings"."embedding_v2" is not null`);
    expect(q).toMatch(/order by "lesson_embeddings"\."embedding_v2" <=> \$\d+::vector/);
    expect(q).not.toMatch(/"lesson_embeddings"\."embedding" /);
    expect(q).toContain(`"lessons"."course_id" = $1`);
  });

  it("matchLessonsGlobal keeps the mandatory tenant filter and reads v2 only", async () => {
    const { matchLessonsGlobal } = await import("@/db/queries/cyoa");
    await matchLessonsGlobal("tenant-bvc", vec(0), "l1", "course-1", 1);
    const q = sent[0].sql;
    expect(q).toMatch(/"courses"\."tenant_id" = \$1/);
    expect(sent[0].params[0]).toBe("tenant-bvc");
    expect(q).toContain(`"courses"."allow_cross_course_cyoa" = $`);
    expect(q).toContain(`"lesson_embeddings"."embedding_v2" is not null`);
    expect(q).toMatch(/order by "lesson_embeddings"\."embedding_v2" <=> \$\d+::vector/);
    expect(q).not.toMatch(/"lesson_embeddings"\."embedding" /);
  });
});

describe("the crossroads embedder needs MISTRAL_API_KEY", () => {
  const saved = process.env.MISTRAL_API_KEY;
  afterEach(() => {
    if (saved === undefined) delete process.env.MISTRAL_API_KEY;
    else process.env.MISTRAL_API_KEY = saved;
    vi.doUnmock("@/lib/api");
    vi.resetModules();
  });

  it("the generate-embeddings route answers 503 naming the Mistral key when it is missing", async () => {
    delete process.env.MISTRAL_API_KEY;
    vi.resetModules();
    // The route's own auth helper is stubbed (it pulls in Better Auth); the editor check passes.
    vi.doMock("@/lib/api", () => ({
      json: (data: unknown, status = 200) => Response.json(data, { status }),
      errorJson: (error: string, status: number) => Response.json({ error }, { status }),
      loadEditableCourse: vi.fn(async () => ({ sdb: {}, session: {}, course: { id: "c1" } })),
    }));
    const { POST } = await import("@/app/api/courses/[id]/generate-embeddings/route");
    const res = await POST(new Request("http://x"), { params: Promise.resolve({ id: "c1" }) });
    expect(res.status).toBe(503);
    const body = await res.json();
    expect(body.error).toContain("MISTRAL_API_KEY");
    expect(body.error).not.toMatch(/Gemini/i);
  });

  it("the publish auto-index is a no-op without the key", async () => {
    delete process.env.MISTRAL_API_KEY;
    vi.resetModules();
    const { reindexCourseEmbeddings } = await import("@/lib/ai/reindex");
    expect(await reindexCourseEmbeddings("c1")).toBe(0);
  });

  it("Instructor tools name the Mistral key, never the Gemini one", () => {
    const src = readFileSync(join(ROOT, "src/components/course-admin-tools.tsx"), "utf8");
    expect(src).toContain("This deployment has no Mistral key (MISTRAL_API_KEY)");
    expect(src).not.toContain("GOOGLE_GEMINI_API_KEY");
    const page = readFileSync(join(ROOT, "src/app/(tenant)/[username]/[courseSlug]/page.tsx"), "utf8");
    expect(page).toContain("crossroadsKeyConfigured={hasMistral}");
  });

  it("nothing in src reads the legacy 768 column or calls the Gemini embedder", () => {
    const cyoa = readFileSync(join(ROOT, "src/db/queries/cyoa.ts"), "utf8");
    expect(cyoa).not.toMatch(/lessonEmbeddings\.embedding\b(?!V2)/);
    const idx = readFileSync(join(ROOT, "src/lib/cyoa/crossroads-index.ts"), "utf8");
    expect(idx).not.toMatch(/lessonEmbeddings\.embedding\b(?!V2)/);
    expect(idx).toContain("embedTexts");
  });
});

describe("cyoa:index arguments (pure)", () => {
  it("defaults to the backfill, and parses list, all and one course", async () => {
    const { parseCyoaIndexArgs } = await import("@/lib/cyoa/cyoa-index-args");
    expect(parseCyoaIndexArgs([])).toEqual({ mode: "needing" });
    expect(parseCyoaIndexArgs(["--list"])).toEqual({ mode: "list" });
    expect(parseCyoaIndexArgs(["--all"])).toEqual({ mode: "all" });
    expect(parseCyoaIndexArgs(["--course", "x", "--tenant", "bvc", "--force"])).toEqual({ mode: "course", course: "x", tenant: "bvc", force: true });
  });
  it("refuses conflicting or incomplete arguments", async () => {
    const { parseCyoaIndexArgs } = await import("@/lib/cyoa/cyoa-index-args");
    expect(parseCyoaIndexArgs(["--list", "--all"])).toHaveProperty("error");
    expect(parseCyoaIndexArgs(["--course"])).toHaveProperty("error");
    expect(parseCyoaIndexArgs(["--course", "x", "--all"])).toHaveProperty("error");
    expect(parseCyoaIndexArgs(["--tenant", "bvc"])).toHaveProperty("error");
    expect(parseCyoaIndexArgs(["--force"])).toHaveProperty("error");
    expect(parseCyoaIndexArgs(["--nope"])).toHaveProperty("error");
  });
});

describe("migration 0079 copies 0076's pattern", () => {
  it("adds embedding_v2 vector(1024) with an hnsw cosine index, and leaves the old column alone", () => {
    const sql = readFileSync(join(ROOT, "src/db/migrations/0079_cyoa_mistral_embedding_v2.sql"), "utf8");
    expect(sql).toContain(`ALTER TABLE "lesson_embeddings" ADD COLUMN IF NOT EXISTS "embedding_v2" vector(1024);`);
    expect(sql).toContain(`ALTER TABLE "lesson_embeddings" ADD COLUMN IF NOT EXISTS "content_hash" text;`);
    expect(sql).toContain(
      `CREATE INDEX IF NOT EXISTS "lesson_embeddings_embedding_v2_idx" ON "lesson_embeddings" USING hnsw ("embedding_v2" vector_cosine_ops);`,
    );
    const statements = sql.replace(/^--.*$/gm, "");
    expect(statements).not.toMatch(/DROP|ALTER COLUMN "embedding"/i);
  });
});

describe("seed-production.yml runs the CYOA backfill", () => {
  it("has a cyoa input and a step after the migration that calls scripts/cyoa-index.ts", () => {
    const wf = readFileSync(join(ROOT, ".github/workflows/seed-production.yml"), "utf8");
    expect(wf).toMatch(/\n {6}cyoa:\n(?: {8}.*\n)+? {8}options: \[needing, all, none\]/);
    const jobs = wf.slice(wf.indexOf("\njobs:"));
    expect(jobs.indexOf("scripts/cyoa-index.ts")).toBeGreaterThan(jobs.indexOf("scripts/migrate.ts"));
    expect(wf).toContain("if: ${{ !cancelled() && steps.migrate.outcome == 'success' }}");
    expect(wf).toContain("## CYOA crossroads index");
  });
});
