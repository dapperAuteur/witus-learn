import "server-only";
import { crossroadsEmbedderConfigured, indexCrossroads } from "@/lib/cyoa/crossroads-index";

// Re-embed a course's published lessons into the CYOA crossroads index (lesson_embeddings.embedding_v2,
// mistral-embed, since migration 0079). Shared by the manual "Re-index crossroads" button
// (/api/courses/[id]/generate-embeddings) and the publish auto-index (after() in PATCH /api/courses/[id]
// and the visibility route), so there is one code path; scripts/cyoa-index.ts and the seed workflow call
// indexCrossroads directly. Embeds only the lessons that are missing or changed. Returns how many it
// embedded. No-ops (returns 0) when MISTRAL_API_KEY isn't set, so callers can fire it unconditionally.
export async function reindexCourseEmbeddings(courseId: string): Promise<number> {
  if (!crossroadsEmbedderConfigured()) return 0;
  const r = await indexCrossroads(courseId);
  return r.embedded;
}
