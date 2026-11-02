import { sql } from "drizzle-orm";
import { check, index, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { vector } from "./_types";
import { courses } from "./courses";
import { courseSources } from "./pedagogy";
import { tenants } from "./tenancy";

// Retrieval corpus for the per-course "chat with the sources" feature (plans/future/17). Each row is
// an embedded chunk of either a lesson body, a public-domain source's full text, or a bibliography
// citation. TENANT- and COURSE-scoped so retrieval never crosses tenants/courses (isolation invariant).
// `embedding` (768-dim Gemini, migration 0026) is LEGACY: written and read by code before migration
// 0076 only. Since 0076 the indexer writes and retrieval reads `embedding_v2` (1024-dim mistral-embed,
// src/lib/rag/embed-batch.ts), and a row with no `embedding_v2` is simply not returned. Keeping both
// columns lets the deployed code keep answering while the migration and the re-index run; a later
// cleanup migration drops `embedding` (plans/99-rag-embedding-v1-cleanup.md). The hnsw cosine indexes
// are added by hand in the migrations (like lesson_embeddings), since drizzle-kit doesn't emit them.
export const sourceChunks = pgTable(
  "source_chunks",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    // Set for citation/public-domain chunks tied to a bibliography entry; null for lesson chunks.
    sourceId: uuid("source_id").references(() => courseSources.id, { onDelete: "set null" }),
    /** public_domain_text | lesson | citation. */
    kind: text("kind").notNull(),
    title: text("title"),
    text: text("text").notNull(),
    /** LEGACY 768-dim Gemini vector; nothing since 0076 writes or reads it. Dropped by a later migration. */
    embedding: vector("embedding", { dimensions: 768 }),
    /** 1024-dim mistral-embed vector (migration 0076). NULL until the course is re-indexed. */
    embeddingV2: vector("embedding_v2", { dimensions: 1024 }),
    ord: integer("ord").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("source_chunks_tenant_course_idx").on(t.tenantId, t.courseId),
    check("source_chunks_kind_chk", sql`${t.kind} in ('public_domain_text','lesson','citation')`),
  ],
);

export type SourceChunk = typeof sourceChunks.$inferSelect;

/**
 * What the retrieval corpus of one course was built from (plans/97 Q5 automation). One row per
 * course, written by indexCourse (src/lib/rag/index-course.ts) after a successful rebuild:
 * `content_hash` is the hash of the lesson titles and bodies and the bibliography text that were
 * embedded, so "which courses changed since they were indexed, or were never indexed" is a
 * comparison, not a guess (listCoursesNeedingIndex, `pnpm rag:list`).
 */
export const courseRagIndex = pgTable(
  "course_rag_index",
  {
    courseId: uuid("course_id")
      .primaryKey()
      .references(() => courses.id, { onDelete: "cascade" }),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    contentHash: text("content_hash").notNull(),
    indexedAt: timestamp("indexed_at", { withTimezone: true }).notNull().defaultNow(),
    chunkCount: integer("chunk_count").notNull().default(0),
  },
  (t) => [index("course_rag_index_tenant_idx").on(t.tenantId)],
);

export type CourseRagIndex = typeof courseRagIndex.$inferSelect;
