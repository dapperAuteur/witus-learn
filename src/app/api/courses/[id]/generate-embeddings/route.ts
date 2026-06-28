import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { listLessons } from "@/db/queries/authoring";
import { upsertLessonEmbedding } from "@/db/queries/cyoa";
import { embed } from "@/lib/ai/embeddings";
import { hasGemini } from "@/lib/env";

// POST /api/courses/[id]/generate-embeddings — instructor/admin. Embeds each
// published lesson (title + text) via Gemini and upserts lesson_embeddings.
export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;
  if (!hasGemini) return errorJson("Gemini is not configured", 503);

  const lessons = (await listLessons(id)).filter((l) => l.isPublished);
  let embedded = 0;
  for (const lesson of lessons) {
    const text = [lesson.title, lesson.textContent ?? ""].join("\n\n").trim();
    if (!text) continue;
    await upsertLessonEmbedding(lesson.id, await embed(text));
    embedded += 1;
  }
  return json({ embedded });
}
