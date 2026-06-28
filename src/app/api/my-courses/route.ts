import { apiContext, errorJson, json } from "@/lib/api";
import { listMyCourses } from "@/db/queries/enrollment";

// GET /api/my-courses — the signed-in learner's enrollments on this tenant.
export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const courses = await listMyCourses(sdb.tenantId, session.user.id);
  return json({ courses });
}
