import { apiContext, errorJson, json } from "@/lib/api";
import { enrollFree } from "@/db/queries/enrollment";
import { isFreeCourse } from "@/lib/gating";

// POST /api/courses/[id]/enroll — free enrollment (idempotent). 404s across
// tenants before doing anything. Paid courses get Stripe Checkout in Phase 5b.
export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const course = await sdb.getCourseById(id);
  if (!course || !course.isPublished) return errorJson("Not found", 404);
  if (!isFreeCourse(course)) return errorJson("Paid enrollment is not available yet", 501);

  const enrollment = await enrollFree(sdb.tenantId, session.user.id, id);
  return json({ enrolled: true, enrollment }, 201);
}
