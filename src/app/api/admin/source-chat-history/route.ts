import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { deleteAllSavedSourceChats } from "@/db/queries/source-chat-history";

// DELETE /api/admin/source-chat-history[?courseId=...]: delete all of the signed-in owner's saved
// "chat with the sources" answers, or all of them for one course. Owner-only, server-checked, and keyed
// by the owner's own user id, so it can only ever remove their own rows.

export const dynamic = "force-dynamic";

const CourseId = z.string().uuid();

export async function DELETE(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const raw = new URL(req.url).searchParams.get("courseId");
  let courseId: string | null = null;
  if (raw) {
    const parsed = CourseId.safeParse(raw);
    if (!parsed.success) return errorJson("Invalid course id", 400);
    courseId = parsed.data;
  }
  const deleted = await deleteAllSavedSourceChats(session.user.id, courseId);
  return json({ deleted });
}
