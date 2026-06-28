import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { vector } from "./_types";
import { lessons } from "./courses";

// Per-lesson embedding for CYOA semantic routing. Stored global (no tenant_id);
// isolation is enforced at QUERY time via the tenant_filter in match_lessons_global
// (the spec's "naturally safe" note). 768-dim to match Gemini gemini-embedding-001.
export const lessonEmbeddings = pgTable("lesson_embeddings", {
  lessonId: uuid("lesson_id")
    .primaryKey()
    .references(() => lessons.id, { onDelete: "cascade" }),
  embedding: vector("embedding", { dimensions: 768 }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type LessonEmbedding = typeof lessonEmbeddings.$inferSelect;
