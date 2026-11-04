import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { CROSSROADS_MISSING_KEY_MESSAGE, crossroadsEmbedderConfigured, indexCrossroads } from "@/lib/cyoa/crossroads-index";
import { EmbedRateLimitError } from "@/lib/rag/embed-batch";

// POST /api/courses/[id]/generate-embeddings: instructor/admin. The CYOA crossroads index: embeds each
// published lesson (title + text) that is missing or changed with Mistral's mistral-embed and upserts
// lesson_embeddings.embedding_v2 (migration 0079). The manual escape hatch; publishing a course auto-runs
// the same indexer (see PATCH), and the seed workflow / `pnpm cyoa:index` backfill every CYOA course.

export const runtime = "nodejs";
// A course of a few hundred lessons is a handful of batched requests under Mistral's 60 a minute; same
// ceiling as /api/admin/rag/index (valid on any Vercel plan with Fluid compute).
export const maxDuration = 300;

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;
  if (!crossroadsEmbedderConfigured()) return errorJson(CROSSROADS_MISSING_KEY_MESSAGE, 503);

  try {
    const r = await indexCrossroads(id);
    return json({ embedded: r.embedded, current: r.current, total: r.total });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`cyoa-index: course=${id} failed: ${message}`);
    if (err instanceof EmbedRateLimitError) {
      return errorJson("Mistral is rate limiting right now. Nothing was changed; try again in a minute.", 429);
    }
    return errorJson("Embedding failed; try again. Lessons it did not reach keep their old status.", 500);
  }
}
