// Build (or rebuild) one course's "chat with the sources" index, and list the courses that need one.
// plans/97 Q5 and the 2026-11-01 Gemini 429 report: the CLI (scripts/rag-index.ts), the post-merge
// workflow, and the admin page /admin/rag (a list with a button per course and a Run all button) all
// call THESE two functions, so there is one indexer. Embeddings are mistral-embed (1024 dimensions)
// in `source_chunks.embedding_v2` since migration 0076; the legacy Gemini `embedding` column is
// neither written nor read here.
//
// Runs from the app and from tsx scripts alike: no `server-only` import, and no database client at
// module load. Pass `db` (a scripts' own neon-serverless drizzle instance, or `db` from
// "@/db/client" in the app); without it the app client is imported lazily on first use.
//
// What indexCourse does, in order, so a failure part-way never leaves a course with a half index:
//   1. read the course's lessons and sources, and the content hash of exactly that content;
//   2. chunk and embed everything (throttled and retried in ./embed-batch.ts), touching nothing yet;
//   3. in ONE transaction: delete the course's lesson and citation chunks (and its public-domain
//      chunks only when a new `sourceUrl` is given, since an automated re-index has no URL and must
//      not drop a full text someone ingested by hand), insert the new chunks, and upsert
//      course_rag_index (content_hash, indexed_at, chunk_count).
//   Kept public-domain chunks that predate 0076 have no `embedding_v2`, so retrieval would skip them;
//   step 2 embeds their stored text too and step 3 fills `embedding_v2` in place (the text is not
//   fetched again).
// Tenant- and course-scoped like every source_chunks row (isolation invariant).

import { and, eq, inArray, isNull, ne, notInArray, sql } from "drizzle-orm";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";
import * as schema from "@/db/schema";
import { embedTexts, type EmbedProgress, type EmbedTextsOptions } from "./embed-batch";
import { RAG_HASH_HEADER, chunkText, citationText, courseRagContentHash } from "./content-hash";

export type RagDb = NeonDatabase<typeof schema>;

export interface IndexProgress {
  courseSlug: string;
  tenantSlug: string;
  message: string;
  embed?: EmbedProgress;
}

export type EmbedFn = (texts: string[], opts: Pick<EmbedTextsOptions, "onProgress">) => Promise<number[][]>;

export interface IndexCourseOptions {
  onProgress?: (p: IndexProgress) => void;
  db?: RagDb;
  /** Replace the embedder (tests); defaults to the throttled Mistral batch embedder. */
  embed?: EmbedFn;
  /** Also ingest (and replace) a PUBLIC-DOMAIN full text from this URL. */
  sourceUrl?: string;
  fetchImpl?: typeof fetch;
}

export interface IndexCourseResult {
  courseId: string;
  tenantSlug: string;
  courseSlug: string;
  title: string;
  contentHash: string;
  lessonChunks: number;
  citationChunks: number;
  /** New public-domain chunks (with sourceUrl) or the ones kept from before (without). */
  publicDomainChunks: number;
  publicDomainKept: boolean;
  /** Kept public-domain chunks that had no 1024-dim vector yet and were embedded in this run. */
  publicDomainReembedded: number;
}

export interface CourseNeedingIndex {
  tenantSlug: string;
  courseSlug: string;
  courseId: string;
  title: string;
  /** never = no record and no chunks; changed = content differs from what was indexed, or chunks exist with no record. */
  reason: "never" | "changed";
  indexedAt: Date | null;
}

async function resolveDb(db?: RagDb): Promise<RagDb> {
  if (db) return db;
  const mod = await import("@/db/client");
  return mod.db as RagDb;
}

/**
 * The content hash of every course (or one), computed in Postgres with the same algorithm as
 * courseRagContentHash in ./content-hash.ts, plus how many items it covered. One query for the whole
 * catalog, so listing never pulls lesson text into memory.
 */
export function contentHashQuery(courseId?: string) {
  const lessonWhere = courseId ? sql`and l.course_id = ${courseId}` : sql``;
  const sourceWhere = courseId ? sql`and s.course_id = ${courseId}` : sql``;
  const courseWhere = courseId ? sql`where c.id = ${courseId}` : sql``;
  return sql`
    with items as (
      select l.course_id, md5('L' || chr(31) || l.title || chr(31) || l.text_content) as fp
        from lessons l
       where l.text_content is not null and l.text_content <> '' ${lessonWhere}
      union all
      select s.course_id, md5('C' || chr(31) || coalesce(nullif(s.apa, ''), s.in_text)) as fp
        from course_sources s
       where coalesce(nullif(s.apa, ''), s.in_text, '') <> '' ${sourceWhere}
    )
    select c.id as course_id,
           count(i.fp)::int as items,
           encode(sha256(convert_to(${RAG_HASH_HEADER} || chr(10) ||
             coalesce(string_agg(i.fp, chr(10) order by i.fp collate "C"), ''), 'UTF8')), 'hex') as content_hash
      from courses c
      left join items i on i.course_id = c.id
      ${courseWhere}
     group by c.id`;
}

/** Courses with this slug, one per tenant (a slug may repeat across schools). */
export async function findCoursesBySlug(
  slug: string,
  tenantSlug?: string,
  opts: { db?: RagDb } = {},
): Promise<{ courseId: string; tenantId: string; tenantSlug: string; courseSlug: string; title: string }[]> {
  const db = await resolveDb(opts.db);
  const rows = await db
    .select({
      courseId: schema.courses.id,
      tenantId: schema.courses.tenantId,
      tenantSlug: schema.tenants.slug,
      title: schema.courses.title,
    })
    .from(schema.courses)
    .innerJoin(schema.tenants, eq(schema.tenants.id, schema.courses.tenantId))
    .where(tenantSlug ? and(eq(schema.courses.slug, slug), eq(schema.tenants.slug, tenantSlug)) : eq(schema.courses.slug, slug));
  return rows.map((r) => ({ ...r, courseSlug: slug }));
}

/** One course by id, with its school's slug, or null (the admin page's Run button sends an id). */
export async function findCourseById(
  courseId: string,
  opts: { db?: RagDb } = {},
): Promise<{ courseId: string; tenantSlug: string; courseSlug: string | null; title: string } | null> {
  const db = await resolveDb(opts.db);
  const [row] = await db
    .select({ courseId: schema.courses.id, tenantSlug: schema.tenants.slug, courseSlug: schema.courses.slug, title: schema.courses.title })
    .from(schema.courses)
    .innerJoin(schema.tenants, eq(schema.tenants.id, schema.courses.tenantId))
    .where(eq(schema.courses.id, courseId))
    .limit(1);
  return row ?? null;
}

/**
 * Rebuild one course's index. `tenantSlug` is required only when the slug exists in more than one
 * school; the error says so. Throws on any failure, leaving the old index in place.
 */
export async function indexCourse(slug: string, tenantSlug?: string, opts: IndexCourseOptions = {}): Promise<IndexCourseResult> {
  const db = await resolveDb(opts.db);
  const matches = await findCoursesBySlug(slug, tenantSlug, { db });
  if (matches.length === 0) throw new Error(`No course with slug "${slug}"${tenantSlug ? ` in tenant "${tenantSlug}"` : ""}.`);
  if (matches.length > 1) {
    throw new Error(`Slug "${slug}" matches ${matches.length} courses (${matches.map((m) => m.tenantSlug).join(", ")}); pass a tenant.`);
  }
  const course = matches[0];
  const say = (message: string, embed?: EmbedProgress) =>
    opts.onProgress?.({ courseSlug: slug, tenantSlug: course.tenantSlug, message, embed });

  // 1) Read the content and its hash.
  const [lessons, sources, hashRows] = await Promise.all([
    db
      .select({ title: schema.lessons.title, body: schema.lessons.textContent, sortOrder: schema.lessons.sortOrder })
      .from(schema.lessons)
      .where(eq(schema.lessons.courseId, course.courseId)),
    db
      .select({ id: schema.courseSources.id, apa: schema.courseSources.apa, inText: schema.courseSources.inText })
      .from(schema.courseSources)
      .where(eq(schema.courseSources.courseId, course.courseId)),
    db.execute(contentHashQuery(course.courseId)),
  ]);
  const sqlHash = (hashRows.rows?.[0] as { content_hash?: string } | undefined)?.content_hash;
  const jsHash = courseRagContentHash(lessons, sources);
  // The stored hash must be the one listCoursesNeedingIndex compares against, i.e. the SQL one. The
  // JS hash is the same algorithm; a difference means they drifted apart, which this makes visible.
  if (sqlHash && sqlHash !== jsHash) say("warning: the SQL and JS content hashes differ; storing the SQL one");
  const contentHash = sqlHash ?? jsHash;

  // 2) Chunk and embed, before touching the database.
  type Row = typeof schema.sourceChunks.$inferInsert;
  const pending: { row: Omit<Row, "embedding">; text: string }[] = [];
  let lessonChunks = 0;
  let citationChunks = 0;
  for (const l of [...lessons].sort((a, b) => a.sortOrder - b.sortOrder)) {
    if (!l.body) continue;
    chunkText(l.body).forEach((text, ord) => {
      pending.push({ text, row: { tenantId: course.tenantId, courseId: course.courseId, kind: "lesson", title: l.title, text, ord } });
      lessonChunks++;
    });
  }
  for (const s of sources) {
    const cite = citationText(s);
    if (!cite) continue;
    pending.push({ text: cite, row: { tenantId: course.tenantId, courseId: course.courseId, sourceId: s.id, kind: "citation", title: s.apa ?? null, text: cite, ord: 0 } });
    citationChunks++;
  }
  let publicDomainChunks = 0;
  if (opts.sourceUrl) {
    say(`fetching public-domain text: ${opts.sourceUrl}`);
    const res = await (opts.fetchImpl ?? fetch)(opts.sourceUrl);
    if (!res.ok) throw new Error(`Public-domain text fetch failed: ${res.status}`);
    chunkText(await res.text()).forEach((text, ord) => {
      pending.push({ text, row: { tenantId: course.tenantId, courseId: course.courseId, kind: "public_domain_text", title: opts.sourceUrl ?? null, text, ord } });
      publicDomainChunks++;
    });
  }

  // Kept public-domain chunks (no new sourceUrl) still missing a 1024-dim vector: embed their stored text.
  const stalePublicDomain = opts.sourceUrl
    ? []
    : await db
        .select({ id: schema.sourceChunks.id, text: schema.sourceChunks.text })
        .from(schema.sourceChunks)
        .where(
          and(
            eq(schema.sourceChunks.courseId, course.courseId),
            notInArray(schema.sourceChunks.kind, ["lesson", "citation"]),
            isNull(schema.sourceChunks.embeddingV2),
          ),
        );

  say(
    `embedding ${pending.length + stalePublicDomain.length} chunks (${lessonChunks} lesson, ${citationChunks} citation, ` +
      `${publicDomainChunks + stalePublicDomain.length} public-domain)`,
  );
  const embed: EmbedFn = opts.embed ?? ((texts, o) => embedTexts(texts, o));
  const allTexts = [...pending.map((p) => p.text), ...stalePublicDomain.map((c) => c.text)];
  const allVectors = await embed(allTexts, { onProgress: (e) => say(e.message, e) });
  if (allVectors.length !== allTexts.length) throw new Error(`Embedder returned ${allVectors.length} vectors for ${allTexts.length} chunks.`);
  const vectors = allVectors.slice(0, pending.length);
  const staleVectors = allVectors.slice(pending.length);

  // 3) Swap the index in one transaction.
  const keptPublicDomain = await db.transaction(async (tx) => {
    const replaceKinds = opts.sourceUrl ? ["lesson", "citation", "public_domain_text"] : ["lesson", "citation"];
    await tx
      .delete(schema.sourceChunks)
      .where(and(eq(schema.sourceChunks.courseId, course.courseId), inArray(schema.sourceChunks.kind, replaceKinds)));
    // New rows carry ONLY the 1024-dim vector; the legacy `embedding` column stays NULL.
    const rows: Row[] = pending.map((p, i) => ({ ...p.row, embeddingV2: vectors[i] }));
    for (let i = 0; i < rows.length; i += 100) await tx.insert(schema.sourceChunks).values(rows.slice(i, i + 100));
    for (const [i, c] of stalePublicDomain.entries()) {
      await tx
        .update(schema.sourceChunks)
        .set({ embeddingV2: staleVectors[i] })
        .where(and(eq(schema.sourceChunks.id, c.id), eq(schema.sourceChunks.courseId, course.courseId)));
    }
    const kept = opts.sourceUrl
      ? 0
      : (
          await tx
            .select({ n: sql<number>`count(*)::int` })
            .from(schema.sourceChunks)
            .where(and(eq(schema.sourceChunks.courseId, course.courseId), ne(schema.sourceChunks.kind, "lesson"), ne(schema.sourceChunks.kind, "citation")))
        )[0]?.n ?? 0;
    const chunkCount = rows.length + kept;
    await tx
      .insert(schema.courseRagIndex)
      .values({ courseId: course.courseId, tenantId: course.tenantId, contentHash, indexedAt: new Date(), chunkCount })
      .onConflictDoUpdate({
        target: schema.courseRagIndex.courseId,
        set: { contentHash, indexedAt: new Date(), chunkCount, tenantId: course.tenantId },
      });
    return kept;
  });

  const result: IndexCourseResult = {
    courseId: course.courseId,
    tenantSlug: course.tenantSlug,
    courseSlug: slug,
    title: course.title,
    contentHash,
    lessonChunks,
    citationChunks,
    publicDomainChunks: opts.sourceUrl ? publicDomainChunks : keptPublicDomain,
    publicDomainKept: !opts.sourceUrl && keptPublicDomain > 0,
    publicDomainReembedded: stalePublicDomain.length,
  };
  say(
    `indexed ${lessonChunks} lesson, ${citationChunks} citation, ${result.publicDomainChunks} public-domain chunks` +
      (result.publicDomainKept ? " (public-domain chunks kept from before)" : ""),
  );
  return result;
}

export interface CourseIndexState extends Omit<CourseNeedingIndex, "reason"> {
  state: "never" | "changed" | "current" | "empty";
  chunkCount: number;
  tenantName: string;
  isPublished: boolean;
}

/** Every course with a slug and its index state. listCoursesNeedingIndex filters this. */
export async function listCourseIndexStates(opts: { db?: RagDb } = {}): Promise<CourseIndexState[]> {
  const db = await resolveDb(opts.db);
  const [courses, hashes, chunkCourses] = await Promise.all([
    db
      .select({
        courseId: schema.courses.id,
        courseSlug: schema.courses.slug,
        title: schema.courses.title,
        tenantSlug: schema.tenants.slug,
        tenantName: schema.tenants.name,
        isPublished: schema.courses.isPublished,
        indexedHash: schema.courseRagIndex.contentHash,
        indexedAt: schema.courseRagIndex.indexedAt,
        chunkCount: schema.courseRagIndex.chunkCount,
      })
      .from(schema.courses)
      .innerJoin(schema.tenants, eq(schema.tenants.id, schema.courses.tenantId))
      .leftJoin(schema.courseRagIndex, eq(schema.courseRagIndex.courseId, schema.courses.id)),
    db.execute(contentHashQuery()),
    db.selectDistinct({ courseId: schema.sourceChunks.courseId }).from(schema.sourceChunks),
  ]);
  return buildIndexStates(courses, hashRows(hashes.rows), chunkCourses.map((c) => c.courseId));
}

/** One course row as listCourseIndexStates reads it (courses joined to tenants and course_rag_index). */
export interface IndexStateCourseRow {
  courseId: string;
  courseSlug: string | null;
  title: string;
  tenantSlug: string;
  tenantName: string;
  isPublished: boolean;
  indexedHash: string | null;
  indexedAt: Date | null;
  chunkCount: number | null;
}

/**
 * PURE: join the course rows, today's content hashes (contentHashQuery) and the courses that have any
 * chunk into one state per course with a slug, sorted by school then title. Unit-tested.
 */
export function buildIndexStates(
  courses: readonly IndexStateCourseRow[],
  hashes: readonly { course_id: string; items: number; content_hash: string }[],
  chunkCourseIds: readonly string[],
): CourseIndexState[] {
  const hashOf = new Map(hashes.map((r) => [r.course_id, r] as const));
  const hasChunks = new Set(chunkCourseIds);
  return courses
    .filter((c): c is IndexStateCourseRow & { courseSlug: string } => Boolean(c.courseSlug))
    .map((c) => {
      const h = hashOf.get(c.courseId);
      return {
        courseId: c.courseId,
        courseSlug: c.courseSlug,
        tenantSlug: c.tenantSlug,
        tenantName: c.tenantName,
        isPublished: c.isPublished,
        title: c.title,
        indexedAt: c.indexedAt ?? null,
        chunkCount: c.chunkCount ?? 0,
        state: classifyIndexState({
          indexedHash: c.indexedHash ?? null,
          currentHash: h?.content_hash ?? null,
          items: h?.items ?? 0,
          hasChunks: hasChunks.has(c.courseId),
        }),
      };
    })
    .sort((a, b) => a.tenantName.localeCompare(b.tenantName) || a.title.localeCompare(b.title));
}

function hashRows(rows: unknown): { course_id: string; items: number; content_hash: string }[] {
  return Array.isArray(rows) ? (rows as { course_id: string; items: number; content_hash: string }[]) : [];
}

/**
 * The one rule for a course's index state (pure, unit-tested):
 *   current  = the stored hash equals today's content hash;
 *   changed  = a stored hash that differs, or chunks with no record (indexed before records existed);
 *   never    = no record, no chunks, and something to index;
 *   empty    = no record, no chunks, nothing to index (no lesson bodies, no sources).
 */
export function classifyIndexState(i: {
  indexedHash: string | null;
  currentHash: string | null;
  items: number;
  hasChunks: boolean;
}): CourseIndexState["state"] {
  if (i.indexedHash) return i.indexedHash === i.currentHash ? "current" : "changed";
  if (i.hasChunks) return "changed";
  return i.items > 0 ? "never" : "empty";
}

/**
 * ONE course's chat-index state, by the same rule as /admin/rag (classifyIndexState), for the course page's
 * Instructor tools. Reads only this course: its index record, whether it has any current-model chunk, and
 * today's content hash of exactly this course.
 */
export async function getCourseIndexState(
  courseId: string,
  opts: { db?: RagDb } = {},
): Promise<{ state: CourseIndexState["state"]; chunkCount: number; indexedAt: Date | null }> {
  const db = await resolveDb(opts.db);
  const [record, chunk, hashes] = await Promise.all([
    db
      .select({
        contentHash: schema.courseRagIndex.contentHash,
        indexedAt: schema.courseRagIndex.indexedAt,
        chunkCount: schema.courseRagIndex.chunkCount,
      })
      .from(schema.courseRagIndex)
      .where(eq(schema.courseRagIndex.courseId, courseId))
      .limit(1),
    db.select({ id: schema.sourceChunks.id }).from(schema.sourceChunks).where(eq(schema.sourceChunks.courseId, courseId)).limit(1),
    db.execute(contentHashQuery(courseId)),
  ]);
  const h = hashRows(hashes.rows)[0];
  return {
    state: classifyIndexState({
      indexedHash: record[0]?.contentHash ?? null,
      currentHash: h?.content_hash ?? null,
      items: h?.items ?? 0,
      hasChunks: chunk.length > 0,
    }),
    chunkCount: record[0]?.chunkCount ?? 0,
    indexedAt: record[0]?.indexedAt ?? null,
  };
}

/** The courses an admin page or the workflow should index: never indexed, or changed since. */
export async function listCoursesNeedingIndex(opts: { db?: RagDb } = {}): Promise<CourseNeedingIndex[]> {
  return needingIndex(await listCourseIndexStates(opts));
}

/** PURE: the states that need an index run (never indexed, or changed since), as the list the CLI uses. */
export function needingIndex(states: readonly CourseIndexState[]): CourseNeedingIndex[] {
  return states
    .filter((s) => s.state === "never" || s.state === "changed")
    .map((s) => ({
      tenantSlug: s.tenantSlug,
      courseSlug: s.courseSlug,
      courseId: s.courseId,
      title: s.title,
      reason: s.state as "never" | "changed",
      indexedAt: s.indexedAt,
    }));
}
