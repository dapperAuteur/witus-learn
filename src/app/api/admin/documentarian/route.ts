import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { getTracker, setTracker } from "@/db/queries/tracker";

// The Documentarian tracker is the platform owner's private planning surface, so it's
// gated to the owner (not brand admins). Tenant is resolved server-side from the host.
const Schema = z.object({
  items: z.record(z.string(), z.object({ done: z.boolean(), note: z.string().max(2000) })).optional(),
  comments: z.array(z.object({ at: z.string().max(40), text: z.string().max(4000) })).optional(),
});

export async function PATCH(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  await setTracker(sdb.tenantId, {
    items: parsed.data.items ?? {},
    comments: parsed.data.comments ?? [],
  });
  return json(await getTracker(sdb.tenantId));
}

export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);
  return json(await getTracker(sdb.tenantId));
}
