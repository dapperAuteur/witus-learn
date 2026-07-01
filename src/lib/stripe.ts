import "server-only";
import Stripe from "stripe";
import type { Course } from "@/db/schema";
import type { TenantRecord } from "@/lib/tenant";
import { updateCourse } from "@/db/queries/authoring";
import { env, hasStripe } from "./env";

let cached: Stripe | undefined;

/** The Stripe client, or null when no key is configured (paid flows then 503). */
export function getStripe(): Stripe | null {
  if (!hasStripe) return null;
  cached ??= new Stripe(env.STRIPE_SECRET_KEY as string);
  return cached;
}

/** Lazily create (and cache on the course) the Stripe product + price. */
export async function ensureCoursePrice(
  stripe: Stripe,
  tenantId: string,
  course: Course,
): Promise<string> {
  if (course.stripePriceId) return course.stripePriceId;

  const productId =
    course.stripeProductId ??
    (await stripe.products.create({ name: course.title, metadata: { course_id: course.id } })).id;

  const price = await stripe.prices.create({
    product: productId,
    currency: "usd",
    unit_amount: Math.round(Number(course.price) * 100),
    ...(course.priceType === "subscription"
      ? { recurring: { interval: course.billingInterval === "year" ? "year" : "month" } }
      : {}),
    metadata: { course_id: course.id },
  });

  await updateCourse(tenantId, course.id, {
    stripeProductId: productId,
    stripePriceId: price.id,
  });
  return price.id;
}

// ── Connect (instructor payouts) ─────────────────────────────────────────────

/** Existing Connect account id, or a new Express account for the instructor. */
export async function ensureConnectAccount(
  stripe: Stripe,
  existingId: string | null,
  email: string,
): Promise<string> {
  if (existingId) return existingId;
  const account = await stripe.accounts.create({
    type: "express",
    email,
    capabilities: { transfers: { requested: true } },
  });
  return account.id;
}

export async function createOnboardingLink(
  stripe: Stripe,
  accountId: string,
  refreshUrl: string,
  returnUrl: string,
): Promise<string> {
  const link = await stripe.accountLinks.create({
    account: accountId,
    type: "account_onboarding",
    refresh_url: refreshUrl,
    return_url: returnUrl,
  });
  return link.url;
}

export async function getConnectOnboarded(stripe: Stripe, accountId: string): Promise<boolean> {
  const acct = await stripe.accounts.retrieve(accountId);
  return Boolean(acct.details_submitted && acct.charges_enabled);
}

/** A reusable percent-off coupon for a promo code. */
export async function createPromoCoupon(stripe: Stripe, percentOff: number): Promise<string> {
  const coupon = await stripe.coupons.create({ percent_off: percentOff, duration: "once" });
  return coupon.id;
}

/** Create a Checkout session for a paid course. Carries a per-tenant statement
 *  descriptor, optional promo coupon, and Connect payout routing (transfer to the
 *  instructor's account minus the platform fee) when the instructor is on Connect. */
export async function createCourseCheckout(opts: {
  stripe: Stripe;
  tenant: TenantRecord;
  course: Course;
  userId: string;
  priceId: string;
  siteUrl: string;
  connectAccountId?: string | null;
  feePercent?: number;
  couponId?: string | null;
  promoId?: string | null;
}): Promise<string | null> {
  const {
    stripe,
    tenant,
    course,
    userId,
    priceId,
    siteUrl,
    connectAccountId,
    feePercent = 0,
    couponId,
    promoId,
  } = opts;
  const isSub = course.priceType === "subscription";
  const descriptor = tenant.stripe.statementDescriptor;
  const amountCents = Math.round(Number(course.price) * 100);

  const paymentIntentData: Stripe.Checkout.SessionCreateParams.PaymentIntentData = {};
  if (!isSub && descriptor) paymentIntentData.statement_descriptor_suffix = descriptor.slice(0, 22);
  if (!isSub && connectAccountId) {
    paymentIntentData.transfer_data = { destination: connectAccountId };
    if (feePercent > 0) {
      paymentIntentData.application_fee_amount = Math.round((amountCents * feePercent) / 100);
    }
  }

  const subscriptionData: Stripe.Checkout.SessionCreateParams.SubscriptionData = {};
  if (isSub && course.trialPeriodDays) {
    subscriptionData.trial_period_days = course.trialPeriodDays;
    subscriptionData.trial_settings = { end_behavior: { missing_payment_method: "cancel" } };
  }
  if (isSub && connectAccountId) {
    subscriptionData.transfer_data = { destination: connectAccountId };
    if (feePercent > 0) subscriptionData.application_fee_percent = feePercent;
  }

  const session = await stripe.checkout.sessions.create({
    mode: isSub ? "subscription" : "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/course/${course.id}?enrolled=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/course/${course.id}?canceled=true`,
    client_reference_id: userId,
    metadata: {
      course_id: course.id,
      user_id: userId,
      tenant_id: tenant.id,
      attempt_number: "1",
      ...(promoId ? { promo_id: promoId } : {}),
    },
    ...(couponId ? { discounts: [{ coupon: couponId }] } : {}),
    ...(Object.keys(paymentIntentData).length ? { payment_intent_data: paymentIntentData } : {}),
    ...(Object.keys(subscriptionData).length ? { subscription_data: subscriptionData } : {}),
  });
  return session.url;
}
