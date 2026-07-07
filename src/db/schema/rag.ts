import { sql } from "drizzle-orm";
import { check, index, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { vector } from "./_types";
import { courses } from "./courses";
import { courseSources } from "./pedagogy";
import { tenants } from "./tenancy";

// Retrieval corpus for the per-course "chat with the sources" feature (plans/future/17). Each row is
// an embedded chunk of either a lesson body, a public-domain source's full text, or a bibliography
// citation. TENANT- and COURSE-scoped so retrieval never crosses tenants/courses (isolation invariant).
// 768-dim to match the Gemini embeddings used elsewhere (lesson_embeddings). The hnsw cosine index is
// added by hand in the migration (like lesson_embeddings), since drizzle-kit doesn't emit vector indexes.
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
    embedding: vector("embedding", { dimensions: 768 }),
    ord: integer("ord").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("source_chunks_tenant_course_idx").on(t.tenantId, t.courseId),
    check("source_chunks_kind_chk", sql`${t.kind} in ('public_domain_text','lesson','citation')`),
  ],
);

export type SourceChunk = typeof sourceChunks.$inferSelect;
