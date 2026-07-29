import "server-only";
import { listLessons } from "@/db/queries/authoring";
import { upsertLessonEmbedding } from "@/db/queries/cyoa";
import { embed } from "@/lib/ai/embeddings";
import { hasGemini } from "@/lib/env";

// Re-embed a course's published lessons into lesson_embeddings (the index behind chat-with-sources
// and CYOA semantic routing). Extracted from the /generate-embeddings route so BOTH the manual
// button and the publish auto-index (after() in PATCH /api/courses/[id]) share one code path.
// No-ops (returns 0) when Gemini isn't configured, so callers can fire it unconditionally.
export async function reindexCourseEmbeddings(courseId: string): Promise<number> {
  if (!hasGemini) return 0;
  const lessons = (await listLessons(courseId)).filter((l) => l.isPublished);
  let embedded = 0;
  for (const lesson of lessons) {
    const text = [lesson.title, lesson.textContent ?? ""].join("\n\n").trim();
    if (!text) continue;
    await upsertLessonEmbedding(lesson.id, await embed(text));
    embedded += 1;
  }
  return embedded;
}
