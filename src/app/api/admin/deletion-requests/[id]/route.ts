import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { resolveDeletionRequest } from "@/db/queries/account-settings";

// POST /api/admin/deletion-requests/[id]: the platform owner marks an "ask to delete my account"
// request handled, after deleting or keeping the account by hand. Owner only: accounts are global, so
// no single school's admin decides one.
export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Only the platform owner handles account deletion.", 403);
  if (!/^[0-9a-f-]{36}$/i.test(id)) return errorJson("Not found", 404);
  const ok = await resolveDeletionRequest(id, session.user.id);
  if (!ok) return errorJson("That request was already handled or withdrawn.", 409);
  return json({ ok: true });
}
