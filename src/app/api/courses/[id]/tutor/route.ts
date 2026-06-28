import { z } from "zod";
import { apiContext, canEditCourse, errorJson } from "@/lib/api";
import { isEnrolled } from "@/db/queries/enrollment";
import { isFreeCourse } from "@/lib/gating";
import { streamTutor } from "@/lib/ai/tutor";
import { hasAiProvider } from "@/lib/env";

const Schema = z.object({ question: z.string().min(2).max(1000) });

// POST /api/courses/[id]/tutor — grounded course tutor. Auth + access gated; the
// retrieval is course-scoped so it can never cite another course/tenant.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!hasAiProvider) return errorJson("The AI tutor is not configured", 503);
  // Per-tenant opt-out: on by default when an AI key is configured.
  if (sdb.tenant.flags.aiTutor === false) {
    return errorJson("The AI tutor is disabled for this school", 403);
  }

  const course = await sdb.getCourseById(id);
  if (!course || !course.isPublished) return errorJson("Not found", 404);

  // AI tutor is for PAID students only: editors/owners, or learners enrolled in a
  // paid course (a free-course enrollment is not a payment, so it doesn't qualify).
  const paidLearner = !isFreeCourse(course) && (await isEnrolled(session.user.id, id));
  const allowed = (await canEditCourse(session, sdb.tenantId, course)) || paidLearner;
  if (!allowed) return errorJson("The AI tutor is for enrolled paid students", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const stream = await streamTutor(course, parsed.data.question, {
    provider: sdb.tenant.flags.aiProvider,
  });
  return new Response(stream, {
    headers: { "content-type": "application/x-ndjson; charset=utf-8", "cache-control": "no-store" },
  });
}
