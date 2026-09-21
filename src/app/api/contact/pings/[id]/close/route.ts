import { apiContext, errorJson, json } from "@/lib/api";

// POST /api/contact/pings/[id]/close: the person who was ASKED closes the request (decided
// 2026-09-20: "they get a way to close request"), for example after calling back. It ends the ping
// for both people: it leaves both pages and the badge, and the 48-hour email is never sent. The
// asker is not told who closed it or why; that would be a "seen" signal, which the no-inbox rule
// bans. Anyone but the recipient, or a ping on another school, gets 404.
export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!/^[0-9a-f-]{36}$/i.test(id)) return errorJson("Not found", 404);

  const ok = await sdb.closePingAsRecipient(id, session.user.id);
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}
