import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { deleteSavedSourceChat } from "@/db/queries/source-chat-history";

// DELETE /api/admin/source-chat-history/[id]: delete one of the signed-in owner's saved "chat with the
// sources" answers. Owner-only, server-checked; the delete is keyed by the owner's user id as well as
// the row id, so a guessed id belonging to anyone else is a 404.

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };

export async function DELETE(_req: Request, { params }: Params) {
  const { session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const { id } = await params;
  if (!z.string().uuid().safeParse(id).success) return errorJson("Not found", 404);
  if (!(await deleteSavedSourceChat(session.user.id, id))) return errorJson("Not found", 404);
  return json({ deleted: 1 });
}
