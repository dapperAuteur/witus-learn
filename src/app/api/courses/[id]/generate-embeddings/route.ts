import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { reindexCourseEmbeddings } from "@/lib/ai/reindex";
import { hasGemini } from "@/lib/env";

// POST /api/courses/[id]/generate-embeddings — instructor/admin. Embeds each
// published lesson (title + text) via Gemini and upserts lesson_embeddings.
// The manual escape hatch; publishing a course auto-runs the same reindex (see PATCH).
export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;
  if (!hasGemini) return errorJson("Gemini is not configured", 503);

  const embedded = await reindexCourseEmbeddings(id);
  return json({ embedded });
}
