import { apiContext, errorJson, json } from "@/lib/api";
import { enrollFree, isEnrolled } from "@/db/queries/enrollment";
import { getUnmetRequired } from "@/db/queries/prerequisites";
import {
  getInstructorBillingProfile,
  getPlatformFeePercent,
  isConnectInstructor,
  validatePromo,
} from "@/db/queries/connect";
import { isFreeCourse } from "@/lib/gating";
import { createCourseCheckout, createPromoCoupon, ensureCoursePrice, getStripe } from "@/lib/stripe";
import { getSiteUrl } from "@/lib/site-url";

// POST /api/courses/[id]/enroll — free → insert directly; paid → return a Stripe
// Checkout URL (with optional promo discount + Connect payout routing). 404s
// across tenants; enforces required prerequisites first.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const course = await sdb.getCourseById(id);
  if (!course || !course.isPublished) return errorJson("Not found", 404);

  if (await isEnrolled(session.user.id, id)) {
    return json({ enrolled: true });
  }

  const unmet = await getUnmetRequired(session.user.id, id);
  if (unmet.length > 0) {
    return json(
      {
        error: "Complete the required prerequisites first.",
        unmet: unmet.map((c) => ({ id: c.id, title: c.title })),
      },
      403,
    );
  }

  if (isFreeCourse(course)) {
    const enrollment = await enrollFree(sdb.tenantId, session.user.id, id);
    return json({ enrolled: true, enrollment }, 201);
  }

  // Paid → Stripe Checkout (the webhook confirms enrollment on payment).
  const stripe = getStripe();
  if (!stripe) return errorJson("Payments are not configured", 503);
  const priceId = await ensureCoursePrice(stripe, sdb.tenantId, course);

  // Optional promo code from the request body.
  const body = (await req.json().catch(() => ({}))) as { promo_code?: unknown };
  let couponId: string | null = null;
  let promoId: string | null = null;
  if (typeof body.promo_code === "string" && body.promo_code.trim()) {
    const promo = await validatePromo(sdb.tenantId, id, body.promo_code.trim());
    if (!promo) return errorJson("Invalid or expired promo code", 400);
    promoId = promo.id;
    couponId = promo.stripeCouponId ?? (await createPromoCoupon(stripe, promo.discountPercent));
  }

  // Route payout to the instructor's Connect account (minus platform fee) if set.
  const profile = await getInstructorBillingProfile(course.instructorId);
  const connectAccountId = isConnectInstructor(profile)
    ? (profile?.stripeConnectAccountId ?? null)
    : null;
  const feePercent = connectAccountId ? await getPlatformFeePercent(sdb.tenantId) : 0;

  const url = await createCourseCheckout({
    stripe,
    tenant: sdb.tenant,
    course,
    userId: session.user.id,
    priceId,
    siteUrl: await getSiteUrl(),
    connectAccountId,
    feePercent,
    couponId,
    promoId,
  });
  return json({ url });
}
