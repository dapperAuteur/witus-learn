import { z } from "zod";
import { eq } from "drizzle-orm";
import { apiContext, errorJson, isTenantAdmin } from "@/lib/api";
import { db } from "@/db/client";
import { tenants } from "@/db/schema";

const HEX = /^#[0-9a-fA-F]{6}$/;

const Schema = z.object({
  name: z.string().min(1).max(120).optional(),
  tagline: z.string().max(200).nullable().optional(),
  accent: z.string().regex(HEX).optional(),
  accentFg: z.string().regex(HEX).optional(),
  gamification: z.enum(["off", "light", "full"]).optional(),
  aiTutor: z.boolean().optional(),
  comingSoon: z.boolean().optional(),
  requiresAgeGate: z.boolean().optional(),
});

// PATCH /api/admin/tenant — update the CURRENT tenant's branding + flags. Tenant is
// resolved server-side from the host (never client-supplied); gated to a brand admin
// of that tenant (or the platform owner). Isolation preserved.
export async function PATCH(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const d = parsed.data;

  const theme = { ...sdb.tenant.theme };
  if (d.name !== undefined) theme.name = d.name;
  const colors = { ...(theme.colors ?? {}) };
  if (d.accent !== undefined) colors.accent = d.accent;
  if (d.accentFg !== undefined) colors.accentFg = d.accentFg;
  theme.colors = colors;

  const flags = { ...sdb.tenant.flags };
  if (d.gamification !== undefined) flags.gamification = d.gamification;
  if (d.aiTutor !== undefined) flags.aiTutor = d.aiTutor;
  if (d.comingSoon !== undefined) flags.comingSoon = d.comingSoon;

  await db
    .update(tenants)
    .set({
      ...(d.name !== undefined ? { name: d.name } : {}),
      ...(d.tagline !== undefined ? { tagline: d.tagline } : {}),
      ...(d.requiresAgeGate !== undefined ? { requiresAgeGate: d.requiresAgeGate } : {}),
      theme,
      flags,
      updatedAt: new Date(),
    })
    .where(eq(tenants.id, sdb.tenantId));

  return Response.json({ ok: true });
}
