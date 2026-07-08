import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { deleteLiveMessage, listLiveMessages, postLiveMessage } from "@/db/queries/live-chat";

// Live class chat for the current tenant. Any signed-in user reads + posts; tenant admins can delete
// (moderation). Tenant resolved server-side (isolation). Polled by the client.

export async function GET(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const afterParam = new URL(req.url).searchParams.get("after");
  const after = afterParam ? new Date(afterParam) : undefined;
  const messages = await listLiveMessages(sdb.tenantId, after && !Number.isNaN(after.getTime()) ? after : undefined);
  return json({ messages });
}

const PostSchema = z.object({ body: z.string().min(1).max(500) });

export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const parsed = PostSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const msg = await postLiveMessage(sdb.tenantId, session.user.id, session.user.name ?? null, parsed.data.body.trim());
  return json(msg, 201);
}

export async function DELETE(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);
  const id = new URL(req.url).searchParams.get("id");
  if (!id) return errorJson("id required", 400);
  await deleteLiveMessage(sdb.tenantId, id);
  return json({ ok: true });
}
