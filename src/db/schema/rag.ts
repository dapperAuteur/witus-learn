import { sql } from "drizzle-orm";
import { check, index, integer, jsonb, pgTable, real, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { vector } from "./_types";
import { users } from "./auth";
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

/** One citation of a saved answer, exactly as the asker saw it, links included (src/lib/source-chat-links.ts). */
export interface SavedSourceChatCitation {
  n: number;
  kind: string;
  title: string | null;
  snippet: string;
  href: string | null;
  external: boolean;
}

/**
 * Saved "chat with the sources" answers (BAM, 2026-11-02: "add for me only first, I'll consider it for
 * other users later"). One row per question asked (one turn of a course-chat conversation), written by the
 * course chat route ONLY when the asker is the platform owner; nobody else's questions are stored. A personal record of the owner's own
 * questions to the AI, not a message between people (the no-inbox rule is about those). The citations
 * keep the links resolved at the time, so a saved answer opens the same places it did.
 */
export const sourceChatHistory = pgTable(
  "source_chat_history",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    question: text("question").notNull(),
    answer: text("answer").notNull(),
    citations: jsonb("citations").$type<SavedSourceChatCitation[]>().notNull().default([]),
    /** The specialist lenses that answered (explain, examples, coach). */
    agents: jsonb("agents").$type<string[]>().notNull().default([]),
    /** strict | mixed, as used for this answer. */
    grounding: text("grounding"),
    /** The provider asked first, or null for the default chain. */
    provider: text("provider"),
    temperature: real("temperature"),
    topK: integer("top_k"),
    usedChunks: integer("used_chunks").notNull().default(0),
    /**
     * The course-chat conversation this turn belongs to (migration 0078), so a saved chat shows the whole
     * thread. Null on rows saved before 0078: each of those is its own one-turn thread.
     */
    conversationId: uuid("conversation_id"),
    /** 0-based position of this turn in its conversation. */
    turn: integer("turn").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("source_chat_history_user_created_idx").on(t.userId, t.createdAt),
    index("source_chat_history_course_idx").on(t.courseId),
    index("source_chat_history_user_conversation_idx").on(t.userId, t.conversationId),
  ],
);

export type SourceChatHistoryRow = typeof sourceChatHistory.$inferSelect;
