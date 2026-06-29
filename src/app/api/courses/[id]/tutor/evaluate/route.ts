import { z } from "zod";
import { apiContext, canEditCourse, errorJson } from "@/lib/api";
import { isEnrolled } from "@/db/queries/enrollment";
import { isFreeCourse } from "@/lib/gating";
import { streamSentenceEvaluation } from "@/lib/ai/tutor";
import { hasAiProvider } from "@/lib/env";

const Schema = z.object({ sentence: z.string().min(2).max(600) });

// POST /api/courses/[id]/tutor/evaluate — the sentence-evaluation coach. Same gating
// as the tutor: auth + AI configured + per-tenant flag + paid access. Course-scoped
// retrieval, so feedback can only ground on / cite THIS course.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!hasAiProvider) return errorJson("The AI coach is not configured", 503);
  if (sdb.tenant.flags.aiTutor === false) {
    return errorJson("The AI coach is disabled for this school", 403);
  }

  const course = await sdb.getCourseById(id);
  if (!course || !course.isPublished) return errorJson("Not found", 404);

  const paidLearner = !isFreeCourse(course) && (await isEnrolled(session.user.id, id));
  const allowed = (await canEditCourse(session, sdb.tenantId, course)) || paidLearner;
  if (!allowed) return errorJson("The AI coach is for enrolled paid students", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const stream = await streamSentenceEvaluation(course, parsed.data.sentence, {
    provider: sdb.tenant.flags.aiProvider,
  });
  return new Response(stream, {
    headers: { "content-type": "application/x-ndjson; charset=utf-8", "cache-control": "no-store" },
  });
}
