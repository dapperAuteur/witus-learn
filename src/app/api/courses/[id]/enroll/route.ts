import { apiContext, auditorReadOnlyBlock, canAccessCourse, canEditCourse, errorJson, json } from "@/lib/api";
import { enrollFree, isEnrolled } from "@/db/queries/enrollment";
import { getUnmetRequired } from "@/db/queries/prerequisites";
import {
  getInstructorBillingProfile,
  getPlatformFeePercent,
  isConnectInstructor,
  validatePromo,
} from "@/db/queries/connect";
import { isFreeCourse } from "@/lib/gating";
import {
  createCourseCheckout,
  createPromoCoupon,
  ensureCoursePrice,
  ensureCourseProduct,
  getStripe,
} from "@/lib/stripe";
import { coursePriceView } from "@/lib/sale-pricing";
import { getSiteUrl } from "@/lib/site-url";
import { getActiveLearner } from "@/lib/active-learner";

// POST /api/courses/[id]/enroll — free → insert directly; paid → return a Stripe
// Checkout URL (with optional promo discount + Connect payout routing). 404s
// across tenants; enforces required prerequisites first. Enrollment is attributed
// to the ACTIVE learner (self, or a managed child if "studying as" one) — Stripe
// Checkout collects its own payment-page email, so the parent's/child's synthetic
// email never enters the payment flow either way.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const learner = (await getActiveLearner(session))!;

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  // Unpublished (which includes private, plans/67: the owner's WELL study program) is enrollable
  // ONLY by whoever could edit it anyway: the platform owner or the course's own instructor. For
  // everyone else it stays a plain 404, never a hint that the course exists.
  if (!course.isPublished && !(await canAccessCourse(session, sdb.tenantId, course))) {
    return errorJson("Not found", 404);
  }

  if (await isEnrolled(learner.id, id)) {
    return json({ enrolled: true });
  }

  // An invited auditor (plans/52 section 5) was asked to REVIEW this unvetted course, not to take
  // it. Enrolling would turn a read-only grant into a learner record, which is the one thing the
  // audit seat is designed not to be, so it is refused here as well as hidden in the UI.
  const auditorBlocked = await auditorReadOnlyBlock({
    session,
    tenantId: sdb.tenantId,
    course,
    isEditor: await canEditCourse(session, sdb.tenantId, course),
    isEnrolled: false,
  });
  if (auditorBlocked) return auditorBlocked;

  const unmet = await getUnmetRequired(learner.id, id);
  if (unmet.length > 0) {
    return json(
      {
        error: "Complete the required prerequisites first.",
        unmet: unmet.map((c) => ({ id: c.id, title: c.title })),
      },
      403,
    );
  }

  // Codeless promotions, resolved HERE on the server from this tenant's own rows. The page's price
  // is never trusted (nothing about it is even sent), so a stale tab or a forged request cannot buy
  // a course at a price that is not currently on offer.
  const priceView = coursePriceView(
    course,
    sdb.tenantId,
    await sdb.listActivePromotions(),
  );

  // Free by list price, or free because a promotion took it to zero: enroll directly, no Stripe.
  if (isFreeCourse(course) || priceView.isFree) {
    const enrollment = await enrollFree(sdb.tenantId, learner.id, id);
    return json({ enrolled: true, enrollment, promotionId: priceView.promotion?.id ?? null }, 201);
  }

  // Paid → Stripe Checkout (the webhook confirms enrollment on payment).
  const stripe = getStripe();
  if (!stripe) return errorJson("Payments are not configured", 503);
  // On sale → charge the resolved amount via an ad-hoc line item; otherwise the cached list price.
  // Either way `courses.price` (the owner's list price) is left exactly as it is.
  const onSale = priceView.discounted;
  const saleAmountCents = onSale ? Math.round(priceView.effectivePrice * 100) : null;
  const productId = onSale ? await ensureCourseProduct(stripe, sdb.tenantId, course) : null;
  const priceId = onSale ? null : await ensureCoursePrice(stripe, sdb.tenantId, course);

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
    userId: learner.id,
    priceId,
    saleAmountCents,
    productId,
    promotionId: priceView.promotion?.id ?? null,
    siteUrl: await getSiteUrl(),
    connectAccountId,
    feePercent,
    couponId,
    promoId,
  });
  return json({ url });
}
