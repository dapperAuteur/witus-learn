import { apiContext, errorJson, json } from "@/lib/api";
import { heartbeat, listPresent } from "@/db/queries/live-chat";

// "Who's here" for the live class. POST is the client heartbeat (also returns the current roster, so one
// round-trip does both); GET just reads it. Any signed-in user; tenant-scoped (isolation).
export async function POST() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  await heartbeat(sdb.tenantId, session.user.id, session.user.name ?? null);
  return json({ present: await listPresent(sdb.tenantId) });
}

export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  return json({ present: await listPresent(sdb.tenantId) });
}
