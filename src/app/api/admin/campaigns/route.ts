import { z } from "zod";
import { apiContext, errorJson, json, isTenantAdmin } from "@/lib/api";
import { createCampaign, listCampaigns } from "@/db/queries/marketing";

// Email-campaign DRAFTS (marketing). Compose + store only — NO email is sent from
// here; sending is a separate, explicitly-confirmed step. Brand-admin gated.
async function guard() {
  const { sdb, session } = await apiContext();
  if (!session) return { res: errorJson("Unauthorized", 401) };
  if (!(await isTenantAdmin(session, sdb.tenantId))) return { res: errorJson("Forbidden", 403) };
  return { sdb, session };
}

export async function GET() {
  const ctx = await guard();
  if ("res" in ctx) return ctx.res;
  return json({ campaigns: await listCampaigns(ctx.sdb.tenantId) });
}

const PostSchema = z.object({
  subject: z.string().min(1).max(200),
  body: z.string().min(1).max(20000),
  audience: z.enum(["leads", "enrolled"]),
});

export async function POST(req: Request) {
  const ctx = await guard();
  if ("res" in ctx) return ctx.res;
  const parsed = PostSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const campaign = await createCampaign(ctx.sdb.tenantId, ctx.session.user.id, parsed.data);
  return json({ campaign }, 201);
}
