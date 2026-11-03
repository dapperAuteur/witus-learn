import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { vector } from "./_types";
import { lessons } from "./courses";

// Per-lesson embedding for CYOA semantic routing (the "crossroads" on the lesson player). Stored global
// (no tenant_id); isolation is enforced at QUERY time via the tenant filter in matchLessonsGlobal.
//
// `embedding` (768-dim Gemini gemini-embedding-001, migration 0007) is LEGACY: written and read only by
// code before migration 0079. Since 0079 the crossroads indexer (src/lib/cyoa/crossroads-index.ts)
// writes and the crossroads read `embedding_v2` (1024-dim Mistral mistral-embed, the same embedder as
// the source chat, src/lib/rag/embed-batch.ts), and a lesson with no `embedding_v2` simply gets no
// semantic crossroads. Keeping both columns lets the deployed code keep answering while the migration
// and the backfill run; a later cleanup migration drops `embedding` (plans/99-rag-embedding-v1-cleanup.md).
// The hnsw cosine indexes are written by hand in the migrations, since drizzle-kit does not emit them.
export const lessonEmbeddings = pgTable("lesson_embeddings", {
  lessonId: uuid("lesson_id")
    .primaryKey()
    .references(() => lessons.id, { onDelete: "cascade" }),
  /** LEGACY 768-dim Gemini vector; nothing since 0079 writes or reads it. Dropped by a later migration. */
  embedding: vector("embedding", { dimensions: 768 }),
  /** 1024-dim mistral-embed vector (migration 0079). NULL until the lesson is re-embedded. */
  embeddingV2: vector("embedding_v2", { dimensions: 1024 }),
  /** md5 of exactly the text embedded into `embedding_v2` (crossroadsLessonHash); a mismatch with the
   *  lesson's current title and text means the vector is stale. NULL on rows written before 0079. */
  contentHash: text("content_hash"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type LessonEmbedding = typeof lessonEmbeddings.$inferSelect;
