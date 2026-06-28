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
    ...(course.priceType === "subscription" ? { recurring: { interval: "month" } } : {}),
    metadata: { course_id: course.id },
  });

  await updateCourse(tenantId, course.id, {
    stripeProductId: productId,
    stripePriceId: price.id,
  });
  return price.id;
}

/** Create a Checkout session for a paid course. Carries a per-tenant statement
 *  descriptor so a card statement never shows the wrong brand. */
export async function createCourseCheckout(opts: {
  stripe: Stripe;
  tenant: TenantRecord;
  course: Course;
  userId: string;
  priceId: string;
  siteUrl: string;
}): Promise<string | null> {
  const { stripe, tenant, course, userId, priceId, siteUrl } = opts;
  const isSub = course.priceType === "subscription";
  const descriptor = tenant.stripe.statementDescriptor;

  const session = await stripe.checkout.sessions.create({
    mode: isSub ? "subscription" : "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/course/${course.id}?enrolled=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/course/${course.id}?canceled=true`,
    client_reference_id: userId,
    metadata: { course_id: course.id, user_id: userId, tenant_id: tenant.id, attempt_number: "1" },
    ...(!isSub && descriptor
      ? { payment_intent_data: { statement_descriptor_suffix: descriptor.slice(0, 22) } }
      : {}),
    ...(isSub && course.trialPeriodDays
      ? {
          subscription_data: {
            trial_period_days: course.trialPeriodDays,
            trial_settings: { end_behavior: { missing_payment_method: "cancel" } },
          },
        }
      : {}),
  });
  return session.url;
}
