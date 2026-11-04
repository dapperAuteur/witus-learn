import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { deleteAllSavedSourceChats, deleteSavedSourceChatThread } from "@/db/queries/source-chat-history";

// DELETE /api/admin/source-chat-history[?courseId=...|?conversationId=...]: delete the signed-in owner's saved
// course-chat turns: all of them, all for one course, or every turn of one conversation. Owner-only,
// server-checked, and keyed by the owner's own user id, so it can only ever remove their own rows.

export const dynamic = "force-dynamic";

const Uuid = z.string().uuid();

export async function DELETE(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const params = new URL(req.url).searchParams;
  const rawConversation = params.get("conversationId");
  if (rawConversation) {
    const parsed = Uuid.safeParse(rawConversation);
    if (!parsed.success) return errorJson("Invalid conversation id", 400);
    const deleted = await deleteSavedSourceChatThread(session.user.id, parsed.data);
    return deleted > 0 ? json({ deleted }) : errorJson("Not found", 404);
  }

  const raw = params.get("courseId");
  let courseId: string | null = null;
  if (raw) {
    const parsed = Uuid.safeParse(raw);
    if (!parsed.success) return errorJson("Invalid course id", 400);
    courseId = parsed.data;
  }
  const deleted = await deleteAllSavedSourceChats(session.user.id, courseId);
  return json({ deleted });
}
