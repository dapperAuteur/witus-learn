import { z } from "zod";
import { apiContext, canEditCourse, errorJson, json } from "@/lib/api";
import { getFeedbackCourseId, setFeedbackStatus } from "@/db/queries/feedback";

const Schema = z.object({ status: z.enum(["open", "reviewed", "resolved"]) });

type Params = { params: Promise<{ id: string }> };

// PATCH /api/feedback/[id] — an instructor/admin updates the status of a curriculum
// feedback item. Gated by canEditCourse on the feedback's own course (tenant-scoped).
export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const courseId = await getFeedbackCourseId(sdb.tenantId, id);
  if (!courseId) return errorJson("Not found", 404);
  const course = await sdb.getCourseById(courseId);
  if (!course || !(await canEditCourse(session, sdb.tenantId, course))) {
    return errorJson("Forbidden", 403);
  }

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  await setFeedbackStatus(sdb.tenantId, id, parsed.data.status);
  return json({ ok: true });
}
