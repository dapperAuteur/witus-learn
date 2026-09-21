import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { revokeTeacherAgeException } from "@/db/queries/teacher-age";

// DELETE /api/admin/teacher-age/exceptions/[userId]: revoke someone's active exception. Owner only.
// The row is kept with who revoked it and when. Classes they already run are not taken from them;
// they simply cannot create or be assigned to new ones while the rule is on.
export async function DELETE(_req: Request, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const revoked = await revokeTeacherAgeException(userId, session.user.id);
  if (!revoked) return errorJson("No active exception for that person.", 404);
  return json({ ok: true });
}
