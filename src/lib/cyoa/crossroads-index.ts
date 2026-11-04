// The CYOA crossroads index: one mistral-embed vector per published lesson in lesson_embeddings.embedding_v2
// (migration 0079), read by the "Related" and cross-course crossroads on the lesson player in CYOA mode
// (src/lib/crossroads.ts, src/db/queries/cyoa.ts).
//
// WHY MISTRAL (BAM, 2026-11-03: "move CYOA to Mistral"). Production has no GOOGLE_GEMINI_API_KEY, so the old
// Gemini 768-dim vectors could be neither built nor refreshed; MISTRAL_API_KEY is set there and already
// embeds the source chat's index (migration 0076). This uses the same embedder (src/lib/rag/embed-batch.ts:
// batched, paced under the per-minute request limit, 429s retried), so there is one embedding provider.
//
// Staleness is a HASH comparison, not a timestamp: the seeder rewrites every lesson's updated_at on every
// run even when nothing changed, so `updated_at > created_at` called every seeded lesson stale. Each row
// stores content_hash = md5(CROSSROADS_HASH_HEADER + US + title + US + text) of exactly what it embedded;
// the same expression in SQL (crossroadsHashSql) tells which lessons changed, without reading lesson text.
// The header names the model and dimensions, so a future model change marks every lesson stale.
//
// A lesson is "needing" when it is published and has no row, no embedding_v2, or a different hash. Until
// it is re-embedded it simply gets no semantic crossroads (the linear and random ones still show).
//
// Runs from the app and from tsx scripts alike (scripts/cyoa-index.ts, the seed workflow): no
// `server-only` import and no database client at module load; pass `db`, or the app client is imported
// lazily. The embedder is injectable so tests run with no network.

import { createHash } from "node:crypto";
import { and, asc, eq, sql } from "drizzle-orm";
import * as schema from "@/db/schema";
import { EMBED_DIMS, EMBED_MODEL, embedTexts, type EmbedProgress } from "@/lib/rag/embed-batch";
import type { RagDb } from "@/lib/rag/index-course";

export const CROSSROADS_HASH_HEADER = `cyoa-v2|${EMBED_MODEL}|${EMBED_DIMS}`;
const US = String.fromCharCode(31);
/** Rows per INSERT, so one statement never carries hundreds of 1024-dim vectors. */
const UPSERT_CHUNK = 50;

/** The text embedded for a lesson: its title, a blank line, its body. Empty when both are empty. */
export function crossroadsLessonText(title: string, textContent: string | null): string {
  return [title, textContent ?? ""].join("\n\n").trim();
}

/** PURE: the content hash stored with a lesson's vector. Must match crossroadsHashSql byte for byte. */
export function crossroadsLessonHash(title: string, textContent: string | null): string {
  return createHash("md5")
    .update(`${CROSSROADS_HASH_HEADER}${US}${title}${US}${textContent ?? ""}`, "utf8")
    .digest("hex");
}

/** The same hash in Postgres, over the `lessons` table's current title and text. */
export function crossroadsHashSql() {
  return sql`md5(${CROSSROADS_HASH_HEADER} || chr(31) || ${schema.lessons.title} || chr(31) || coalesce(${schema.lessons.textContent}, ''))`;
}

/** SQL: true when this lesson's crossroads vector is missing or stale (needs a left join to lesson_embeddings). */
export function crossroadsNeedsSql() {
  return sql`(${schema.lessonEmbeddings.lessonId} is null or ${schema.lessonEmbeddings.embeddingV2} is null or ${schema.lessonEmbeddings.contentHash} is distinct from ${crossroadsHashSql()})`;
}

/** True when this deployment can build the crossroads index (the embedder is Mistral). */
export function crossroadsEmbedderConfigured(): boolean {
  return Boolean(process.env.MISTRAL_API_KEY);
}

export const CROSSROADS_MISSING_KEY_MESSAGE =
  "The CYOA crossroads index needs a Mistral key (MISTRAL_API_KEY), and this deployment has none.";

async function resolveDb(db?: RagDb): Promise<RagDb> {
  if (db) return db;
  const mod = await import("@/db/client");
  return mod.db as RagDb;
}

export type CrossroadsEmbedFn = (texts: string[], opts: { onProgress?: (p: EmbedProgress) => void }) => Promise<number[][]>;

export interface IndexCrossroadsOptions {
  db?: RagDb;
  /** Defaults to embedTexts (Mistral). Tests inject a fake. */
  embed?: CrossroadsEmbedFn;
  /** Re-embed every published lesson, not only the missing or changed ones. */
  force?: boolean;
  onProgress?: (p: EmbedProgress) => void;
}

export interface IndexCrossroadsResult {
  /** Published lessons with something to embed. */
  total: number;
  /** Lessons embedded by this run. */
  embedded: number;
  /** Lessons already current, left alone. */
  current: number;
}

/**
 * Embed a course's published lessons that are missing or stale (all of them with `force`) into
 * lesson_embeddings.embedding_v2, with their content hash. Embeds everything first, then writes, so an
 * embedding failure writes nothing; the legacy `embedding` column is never touched. Throws on failure.
 */
export async function indexCrossroads(courseId: string, opts: IndexCrossroadsOptions = {}): Promise<IndexCrossroadsResult> {
  const db = await resolveDb(opts.db);
  const rows = await db
    .select({
      id: schema.lessons.id,
      title: schema.lessons.title,
      textContent: schema.lessons.textContent,
      storedHash: schema.lessonEmbeddings.contentHash,
      hasV2: sql<boolean>`${schema.lessonEmbeddings.embeddingV2} is not null`,
    })
    .from(schema.lessons)
    .leftJoin(schema.lessonEmbeddings, eq(schema.lessonEmbeddings.lessonId, schema.lessons.id))
    .where(and(eq(schema.lessons.courseId, courseId), eq(schema.lessons.isPublished, true)))
    .orderBy(asc(schema.lessons.sortOrder));

  const candidates = rows
    .map((r) => ({ ...r, text: crossroadsLessonText(r.title, r.textContent), hash: crossroadsLessonHash(r.title, r.textContent) }))
    .filter((r) => r.text.length > 0);
  const todo = opts.force ? candidates : candidates.filter((r) => !r.hasV2 || r.storedHash !== r.hash);
  const result = { total: candidates.length, embedded: todo.length, current: candidates.length - todo.length };
  if (todo.length === 0) return result;

  const embed: CrossroadsEmbedFn = opts.embed ?? ((texts, o) => embedTexts(texts, o));
  const vectors = await embed(
    todo.map((r) => r.text),
    { onProgress: opts.onProgress },
  );
  if (vectors.length !== todo.length) throw new Error(`The embedder returned ${vectors.length} vectors for ${todo.length} lessons.`);

  const now = new Date();
  for (let i = 0; i < todo.length; i += UPSERT_CHUNK) {
    const slice = todo.slice(i, i + UPSERT_CHUNK);
    await db
      .insert(schema.lessonEmbeddings)
      .values(slice.map((r, k) => ({ lessonId: r.id, embeddingV2: vectors[i + k], contentHash: r.hash, createdAt: now })))
      .onConflictDoUpdate({
        target: schema.lessonEmbeddings.lessonId,
        set: {
          embeddingV2: sql`excluded.embedding_v2`,
          contentHash: sql`excluded.content_hash`,
          createdAt: sql`excluded.created_at`,
        },
      });
  }
  return result;
}

/** Index freshness for one course: published lessons, and how many are missing or behind their v2 vector. */
export async function getCrossroadsStatus(courseId: string, opts: { db?: RagDb } = {}): Promise<{ published: number; stale: number }> {
  const db = await resolveDb(opts.db);
  const [row] = await db
    .select({
      published: sql<number>`count(*)`.mapWith(Number),
      stale: sql<number>`count(*) filter (where ${crossroadsNeedsSql()})`.mapWith(Number),
    })
    .from(schema.lessons)
    .leftJoin(schema.lessonEmbeddings, eq(schema.lessonEmbeddings.lessonId, schema.lessons.id))
    .where(and(eq(schema.lessons.courseId, courseId), eq(schema.lessons.isPublished, true)));
  return { published: row?.published ?? 0, stale: row?.stale ?? 0 };
}

export interface CyoaCourseState {
  courseId: string;
  title: string;
  courseSlug: string | null;
  tenantSlug: string;
  isPublished: boolean;
  /** Published lessons. */
  published: number;
  /** Published lessons missing or behind their crossroads vector. */
  stale: number;
}

/** Every CYOA course (all schools) with its crossroads index status. Owner tooling only: cross-school. */
export async function listCyoaCrossroadsStates(opts: { db?: RagDb } = {}): Promise<CyoaCourseState[]> {
  const db = await resolveDb(opts.db);
  const rows = await db
    .select({
      courseId: schema.courses.id,
      title: schema.courses.title,
      courseSlug: schema.courses.slug,
      tenantSlug: schema.tenants.slug,
      isPublished: schema.courses.isPublished,
      published: sql<number>`count(${schema.lessons.id})`.mapWith(Number),
      stale: sql<number>`count(${schema.lessons.id}) filter (where ${crossroadsNeedsSql()})`.mapWith(Number),
    })
    .from(schema.courses)
    .innerJoin(schema.tenants, eq(schema.tenants.id, schema.courses.tenantId))
    .leftJoin(schema.lessons, and(eq(schema.lessons.courseId, schema.courses.id), eq(schema.lessons.isPublished, true)))
    .leftJoin(schema.lessonEmbeddings, eq(schema.lessonEmbeddings.lessonId, schema.lessons.id))
    .where(eq(schema.courses.navigationMode, "cyoa"))
    .groupBy(schema.courses.id, schema.tenants.slug);
  return sortCyoaStates(rows);
}

/** PURE: published courses first, then the most stale lessons, then school and title. */
export function sortCyoaStates<T extends CyoaCourseState>(rows: readonly T[]): T[] {
  return [...rows].sort(
    (a, b) =>
      Number(b.isPublished) - Number(a.isPublished) ||
      b.stale - a.stale ||
      a.tenantSlug.localeCompare(b.tenantSlug) ||
      a.title.localeCompare(b.title),
  );
}

/** PURE: the CYOA courses a backfill should run (some lesson missing or stale). */
export function cyoaCoursesNeedingIndex<T extends CyoaCourseState>(rows: readonly T[]): T[] {
  return rows.filter((r) => r.stale > 0);
}
