import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { getSchoolRole, removeTeacherRole } from "@/db/queries/school-teachers";
import { teacherRemoveError } from "@/lib/school-teachers";

// DELETE /api/admin/teachers/[userId]: take the teacher role away on THIS school (back to learner).
// Brand admin or platform owner. Admins are not managed here. Classes the person already teaches
// stay theirs; they can no longer create new classes or courses on this school.
export async function DELETE(_req: Request, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const error = teacherRemoveError(await getSchoolRole(sdb.tenantId, userId));
  if (error) return errorJson(error, 409);
  await removeTeacherRole(sdb.tenantId, userId);
  return json({ ok: true });
}
