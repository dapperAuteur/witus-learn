import "server-only";
import Stripe from "stripe";
import type { Course } from "@/db/schema";
import type { Bundle } from "@/db/schema/bundles";
import type { TenantRecord } from "@/lib/tenant";
import { updateCourse } from "@/db/queries/authoring";
import { updateBundleStripe } from "@/db/queries/bundles";
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

/**
 * The Stripe PRODUCT for a course (created + cached if missing), without creating a Price.
 *
 * A codeless promotion charges an amount that is not the course's list price, and the honest way to
 * do that is an ad-hoc `price_data` line item on the Checkout Session, NOT rewriting the cached
 * `stripe_price_id` (which would leave the list price unrepresented the moment the sale ends) and
 * certainly not rewriting `courses.price`. `price_data` still needs a product to hang off, so this
 * gives it the same one the list price uses.
 */
export async function ensureCourseProduct(
  stripe: Stripe,
  tenantId: string,
  course: Course,
): Promise<string> {
  if (course.stripeProductId) return course.stripeProductId;
  const product = await stripe.products.create({
    name: course.title,
    metadata: { course_id: course.id },
  });
  await updateCourse(tenantId, course.id, { stripeProductId: product.id });
  return product.id;
}

/** The Stripe product for a bundle (created + cached if missing). Mirrors ensureCourseProduct. */
export async function ensureBundleProduct(
  stripe: Stripe,
  tenantId: string,
  bundle: Bundle,
): Promise<string> {
  if (bundle.stripeProductId) return bundle.stripeProductId;
  const product = await stripe.products.create({
    name: bundle.title,
    metadata: { bundle_id: bundle.id },
  });
  await updateBundleStripe(tenantId, bundle.id, { stripeProductId: product.id });
  return product.id;
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
  /** The cached list price. Required unless a promotional amount is passed instead. */
  priceId?: string | null;
  /**
   * A codeless promotion's resolved amount, in cents, ALWAYS re-computed on the server. When set,
   * the session is built from an ad-hoc price_data line item at this amount (see
   * ensureCourseProduct) instead of the cached list price, so the stored list price is never
   * overwritten by a sale.
   */
  saleAmountCents?: number | null;
  /** The course's Stripe product, required with saleAmountCents. */
  productId?: string | null;
  /** The promotion that produced saleAmountCents, recorded on the session for reconciliation. */
  promotionId?: string | null;
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
    saleAmountCents,
    productId,
    promotionId,
    siteUrl,
    connectAccountId,
    feePercent = 0,
    couponId,
    promoId,
  } = opts;
  const isSub = course.priceType === "subscription";
  const descriptor = tenant.stripe.statementDescriptor;
  // The Connect transfer and the platform fee follow what is actually charged, not the list price:
  // a fee computed on $19 for a $9 sale would overdraw the payment.
  const amountCents = saleAmountCents ?? Math.round(Number(course.price) * 100);

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
    line_items: [
      saleAmountCents != null && productId
        ? {
            price_data: { currency: "usd", unit_amount: saleAmountCents, product: productId },
            quantity: 1,
          }
        : { price: priceId as string, quantity: 1 },
    ],
    // Fulfill on return (backstop for the webhook, which can lag or, in dev, never arrive). The verify
    // route enrolls idempotently and redirects to the now-unlocked course. See /api/checkout/verify.
    success_url: `${siteUrl}/api/checkout/verify?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/course/${course.id}?canceled=true`,
    client_reference_id: userId,
    metadata: {
      course_id: course.id,
      user_id: userId,
      tenant_id: tenant.id,
      attempt_number: "1",
      ...(promoId ? { promo_id: promoId } : {}),
      ...(promotionId ? { promotion_id: promotionId } : {}),
    },
    ...(couponId ? { discounts: [{ coupon: couponId }] } : {}),
    ...(Object.keys(paymentIntentData).length ? { payment_intent_data: paymentIntentData } : {}),
    ...(Object.keys(subscriptionData).length ? { subscription_data: subscriptionData } : {}),
  });
  return session.url;
}

// ── Platform billing (a school buying its own white-label instance) ───────────
// Opposite direction from a course sale: the SCHOOL pays the platform account, so NO Connect transfer.
// The amount is set per school (price_data with a custom unit_amount), so every school can be a
// different price, and either a recurring subscription or a one-time lifetime payment (plans/51).
export async function createPlatformCheckout(opts: {
  stripe: Stripe;
  /** The school being billed (only its id + name are needed). */
  school: { id: string; name: string };
  billingType: "subscription" | "lifetime";
  /** 'month' | 'year' for a subscription; ignored for lifetime. */
  interval: "month" | "year" | null;
  amountCents: number;
  currency?: string;
  siteUrl: string;
}): Promise<string | null> {
  const { stripe, school, billingType, interval, amountCents, currency = "usd", siteUrl } = opts;
  const isSub = billingType === "subscription";

  const priceData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData = {
    currency,
    unit_amount: amountCents,
    product_data: { name: `${school.name} white-label school` },
    ...(isSub && interval ? { recurring: { interval } } : {}),
  };

  const session = await stripe.checkout.sessions.create({
    mode: isSub ? "subscription" : "payment",
    line_items: [{ price_data: priceData, quantity: 1 }],
    success_url: `${siteUrl}/admin/school-billing?paid=${school.id}`,
    cancel_url: `${siteUrl}/admin/school-billing?canceled=${school.id}`,
    metadata: { platform_tenant_id: school.id, billing_type: billingType },
  });
  return session.url;
}

// ── Bundles ──────────────────────────────────────────────────────────────────
// A bundle is sold exactly like a one-time course, but the webhook enrolls the buyer in every member
// course instead of one. ensureBundlePrice/createBundleCheckout mirror the course helpers so the
// Stripe surface stays a single well-understood pattern.

export async function ensureBundlePrice(stripe: Stripe, tenantId: string, bundle: Bundle): Promise<string> {
  if (bundle.stripePriceId) return bundle.stripePriceId;

  const productId =
    bundle.stripeProductId ??
    (await stripe.products.create({ name: bundle.title, metadata: { bundle_id: bundle.id } })).id;

  const price = await stripe.prices.create({
    product: productId,
    currency: "usd",
    unit_amount: Math.round(Number(bundle.price) * 100),
    ...(bundle.priceType === "subscription"
      ? { recurring: { interval: bundle.billingInterval === "year" ? "year" : "month" } }
      : {}),
    metadata: { bundle_id: bundle.id },
  });

  await updateBundleStripe(tenantId, bundle.id, { stripeProductId: productId, stripePriceId: price.id });
  return price.id;
}

export async function createBundleCheckout(opts: {
  stripe: Stripe;
  tenant: TenantRecord;
  bundle: Bundle;
  userId: string;
  priceId?: string | null;
  /** Resolved codeless-promotion amount in cents; see createCourseCheckout. */
  saleAmountCents?: number | null;
  productId?: string | null;
  promotionId?: string | null;
  siteUrl: string;
  couponId?: string | null;
  promoId?: string | null;
}): Promise<string | null> {
  const {
    stripe,
    tenant,
    bundle,
    userId,
    priceId,
    saleAmountCents,
    productId,
    promotionId,
    siteUrl,
    couponId,
    promoId,
  } = opts;
  const isSub = bundle.priceType === "subscription";
  const descriptor = tenant.stripe.statementDescriptor;

  const paymentIntentData: Stripe.Checkout.SessionCreateParams.PaymentIntentData = {};
  if (!isSub && descriptor) paymentIntentData.statement_descriptor_suffix = descriptor.slice(0, 22);

  const session = await stripe.checkout.sessions.create({
    mode: isSub ? "subscription" : "payment",
    line_items: [
      saleAmountCents != null && productId
        ? {
            price_data: { currency: "usd", unit_amount: saleAmountCents, product: productId },
            quantity: 1,
          }
        : { price: priceId as string, quantity: 1 },
    ],
    // Same verify-on-return backstop as a course; it enrolls the buyer in every member course and
    // sends them to /my-courses. See /api/checkout/verify.
    success_url: `${siteUrl}/api/checkout/verify?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/bundles/${bundle.slug}?canceled=true`,
    client_reference_id: userId,
    metadata: {
      bundle_id: bundle.id,
      user_id: userId,
      tenant_id: tenant.id,
      ...(promoId ? { promo_id: promoId } : {}),
      ...(promotionId ? { promotion_id: promotionId } : {}),
    },
    ...(couponId ? { discounts: [{ coupon: couponId }] } : {}),
    ...(Object.keys(paymentIntentData).length ? { payment_intent_data: paymentIntentData } : {}),
  });
  return session.url;
}
