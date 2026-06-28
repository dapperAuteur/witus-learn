import { z } from "zod";
import { apiContext, canEditCourse, errorJson, json } from "@/lib/api";
import { isEnrolled } from "@/db/queries/enrollment";
import { isFreeCourse } from "@/lib/gating";
import { askTutor } from "@/lib/ai/tutor";
import { hasAiProvider } from "@/lib/env";

const Schema = z.object({ question: z.string().min(2).max(1000) });

// POST /api/courses/[id]/tutor — grounded course tutor. Auth + access gated; the
// retrieval is course-scoped so it can never cite another course/tenant.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!hasAiProvider) return errorJson("The AI tutor is not configured", 503);

  const course = await sdb.getCourseById(id);
  if (!course || !course.isPublished) return errorJson("Not found", 404);

  const allowed =
    (await canEditCourse(session, sdb.tenantId, course)) ||
    isFreeCourse(course) ||
    (await isEnrolled(session.user.id, id));
  if (!allowed) return errorJson("Enroll to use the course tutor", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const result = await askTutor(course, parsed.data.question);
  return json(result);
}
