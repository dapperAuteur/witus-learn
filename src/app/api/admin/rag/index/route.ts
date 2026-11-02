import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { findCourseById, indexCourse } from "@/lib/rag/index-course";
import { EmbedRateLimitError } from "@/lib/rag/embed-batch";

// POST /api/admin/rag/index { courseId }: rebuild ONE course's "chat with the sources" index with
// mistral-embed (BAM, 2026-11-02), the Run button on /admin/rag. "Run all" on that page calls this once
// per course, one at a time, from the browser, so no single request runs long and closing the tab
// only leaves the rest listed.
//
// Owner-only and cross-school, like the CLI (`pnpm rag:index`) and seed-production.yml, which index
// the whole catalog: it authorizes with isPlatformOwner, not a per-school admin check, and acts on
// the one course id it is given. It calls the same indexCourse as the CLI, so there is one indexer;
// a failure leaves the old index in place (indexCourse swaps chunks in one transaction).
//
// No audit table exists for admin actions in Learn, so the run is logged to the function log with
// the user id, course id and outcome (never an email or a key).

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
// A course of a few hundred chunks is a handful of requests under Mistral's 60 a minute. 300 s is
// Vercel's default AND maximum function duration on the Hobby plan with Fluid compute, and the default
// on Pro (https://vercel.com/docs/functions/configuring-functions/duration, read 2026-11-02), so it is
// valid on any plan. If Fluid compute is off for this project, the platform's lower limit wins.
export const maxDuration = 300;

const Body = z.object({ courseId: z.string().uuid() });

export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  if (!process.env.MISTRAL_API_KEY) {
    return errorJson("MISTRAL_API_KEY is not set on this deployment, so nothing can be indexed.", 503);
  }

  const course = await findCourseById(parsed.data.courseId);
  if (!course?.courseSlug) return errorJson("Course not found.", 404);

  const started = Date.now();
  try {
    const r = await indexCourse(course.courseSlug, course.tenantSlug);
    const chunkCount = r.lessonChunks + r.citationChunks + r.publicDomainChunks;
    console.info(
      `rag-index: user=${session.user.id} course=${course.courseId} ok chunks=${chunkCount} ms=${Date.now() - started}`,
    );
    return json({
      ok: true,
      courseId: course.courseId,
      indexedAt: new Date().toISOString(),
      chunkCount,
      lessonChunks: r.lessonChunks,
      citationChunks: r.citationChunks,
      publicDomainChunks: r.publicDomainChunks,
      publicDomainReembedded: r.publicDomainReembedded,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`rag-index: user=${session.user.id} course=${course.courseId} failed ms=${Date.now() - started}: ${message}`);
    const status = err instanceof EmbedRateLimitError ? 429 : 500;
    return errorJson(
      status === 429
        ? "Mistral is rate limiting right now. The old index is unchanged; try this course again in a minute."
        : `Indexing failed; the old index is unchanged. ${message.slice(0, 300)}`,
      status,
    );
  }
}
