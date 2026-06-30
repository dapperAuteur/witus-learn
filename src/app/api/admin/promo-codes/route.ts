import { z } from "zod";
import { apiContext, errorJson, json, isTenantAdmin } from "@/lib/api";
import { createPromo, deletePromo, listPromos } from "@/db/queries/connect";
import { createPromoCoupon, getStripe } from "@/lib/stripe";

// Tenant-level promo-code admin (the marketing surface). Per-course codes live on the
// course page; these are brand-wide unless a courseId is given. Tenant resolved
// server-side from host; gated to a brand admin of that tenant.
async function guard() {
  const { sdb, session } = await apiContext();
  if (!session) return { res: errorJson("Unauthorized", 401) };
  if (!(await isTenantAdmin(session, sdb.tenantId))) return { res: errorJson("Forbidden", 403) };
  return { sdb, session };
}

export async function GET() {
  const ctx = await guard();
  if ("res" in ctx) return ctx.res;
  const promos = await listPromos(ctx.sdb.tenantId, ctx.session.user.id);
  return json({ promoCodes: promos });
}

const PostSchema = z.object({
  code: z.string().min(2).max(40),
  discountPercent: z.number().int().min(1).max(100),
  courseId: z.string().uuid().nullable().optional(),
  maxUses: z.number().int().positive().nullable().optional(),
  expiresAt: z.string().datetime().nullable().optional(),
});

export async function POST(req: Request) {
  const ctx = await guard();
  if ("res" in ctx) return ctx.res;

  const parsed = PostSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const stripe = getStripe();
  const stripeCouponId = stripe ? await createPromoCoupon(stripe, parsed.data.discountPercent) : null;

  try {
    const promo = await createPromo(ctx.sdb.tenantId, ctx.session.user.id, {
      code: parsed.data.code,
      discountPercent: parsed.data.discountPercent,
      courseId: parsed.data.courseId ?? null,
      maxUses: parsed.data.maxUses ?? null,
      expiresAt: parsed.data.expiresAt ? new Date(parsed.data.expiresAt) : null,
      stripeCouponId,
    });
    return json({ promoCode: promo }, 201);
  } catch {
    return errorJson("That code is already taken", 409);
  }
}

export async function DELETE(req: Request) {
  const ctx = await guard();
  if ("res" in ctx) return ctx.res;
  const parsed = z.object({ code: z.string() }).safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  await deletePromo(ctx.sdb.tenantId, ctx.session.user.id, parsed.data.code);
  return json({ ok: true });
}
