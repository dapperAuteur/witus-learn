import { apiContext, errorJson, json } from "@/lib/api";

// POST /api/contact/pings/[id]/connected: the person who ASKED says "we've started talking" (decided
// 2026-09-20: only the initiator signals this). Ends the ping: it leaves both pages and the badge,
// and the 48-hour fallback email is never sent. Anyone else, or a ping on another school, gets 404.
export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!/^[0-9a-f-]{36}$/i.test(id)) return errorJson("Not found", 404);

  const ok = await sdb.markPingConnected(id, session.user.id);
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}
