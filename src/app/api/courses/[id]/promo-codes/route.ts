import { z } from "zod";
import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { createPromo, deletePromo, listPromos } from "@/db/queries/connect";
import { createPromoCoupon, getStripe } from "@/lib/stripe";

type Params = { params: Promise<{ id: string }> };

// GET — promo codes that apply to this course (instructor view).
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;
  const promos = await listPromos(ctx.sdb.tenantId, ctx.session.user.id);
  return json({ promoCodes: promos.filter((p) => !p.courseId || p.courseId === id) });
}

const PostSchema = z.object({
  code: z.string().min(2).max(40),
  discountPercent: z.number().int().min(1).max(100),
  maxUses: z.number().int().positive().nullable().optional(),
  expiresAt: z.string().datetime().nullable().optional(),
});

// POST — create a promo code (mirrors a Stripe coupon when Stripe is configured).
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const parsed = PostSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const stripe = getStripe();
  const stripeCouponId = stripe ? await createPromoCoupon(stripe, parsed.data.discountPercent) : null;

  try {
    const promo = await createPromo(ctx.sdb.tenantId, ctx.session.user.id, {
      code: parsed.data.code,
      discountPercent: parsed.data.discountPercent,
      courseId: id,
      maxUses: parsed.data.maxUses ?? null,
      expiresAt: parsed.data.expiresAt ? new Date(parsed.data.expiresAt) : null,
      stripeCouponId,
    });
    return json({ promoCode: promo }, 201);
  } catch {
    return errorJson("That code is already taken", 409);
  }
}

// DELETE — remove a promo code by `code`.
export async function DELETE(req: Request, { params }: Params) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const parsed = z.object({ code: z.string() }).safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  await deletePromo(ctx.sdb.tenantId, ctx.session.user.id, parsed.data.code);
  return json({ ok: true });
}
