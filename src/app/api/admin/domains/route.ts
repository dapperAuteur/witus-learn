import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { addDomain } from "@/db/queries/admin-domains";

const Schema = z.object({ tenantId: z.string().uuid(), host: z.string().min(3).max(255) });

// POST /api/admin/domains — platform owner maps a custom domain to a school.
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const res = await addDomain(parsed.data.tenantId, parsed.data.host);
  if ("error" in res) return errorJson(res.error, 400);
  return json(res);
}
