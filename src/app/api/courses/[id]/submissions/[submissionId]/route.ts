import { z } from "zod";
import { apiContext, canEditCourse, errorJson, json } from "@/lib/api";
import { getSubmissionCourseId, gradeSubmission } from "@/db/queries/assignments";

const Schema = z.object({ grade: z.number().int().min(0).max(100), feedback: z.string().max(10000).optional() });

type Params = { params: Promise<{ id: string; submissionId: string }> };

// PATCH /api/courses/[id]/submissions/[submissionId] — instructor grades a submission.
// Gated by canEditCourse on the submission's own course (tenant-scoped).
export async function PATCH(req: Request, { params }: Params) {
  const { id, submissionId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const courseId = await getSubmissionCourseId(sdb.tenantId, submissionId);
  if (!courseId || courseId !== id) return errorJson("Not found", 404);
  const course = await sdb.getCourseById(courseId);
  if (!course || !(await canEditCourse(session, sdb.tenantId, course))) {
    return errorJson("Forbidden", 403);
  }

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  await gradeSubmission(sdb.tenantId, submissionId, parsed.data.grade, parsed.data.feedback ?? null);
  return json({ ok: true });
}
