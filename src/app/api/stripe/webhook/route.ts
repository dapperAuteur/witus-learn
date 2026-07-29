import type Stripe from "stripe";
import { env } from "@/lib/env";
import { getStripe } from "@/lib/stripe";
import { cancelEnrollmentBySubscription, enrollPaid } from "@/db/queries/enrollment";
import { getBundleCourseIds } from "@/db/queries/bundles";
import { incrementPromoUsage } from "@/db/queries/connect";
import {
  activatePlatformSubscription,
  setPlatformSubscriptionStatusByStripeId,
} from "@/db/queries/platform-subscriptions";

// POST /api/stripe/webhook — Stripe calls this directly (no tenant host), so it
// reads tenant/course/user from the session metadata and verifies the signature
// over the RAW body. Not tenant-scoped by design.
export async function POST(req: Request) {
  const stripe = getStripe();
  if (!stripe || !env.STRIPE_WEBHOOK_SECRET) {
    return new Response("Stripe not configured", { status: 503 });
  }

  const sig = req.headers.get("stripe-signature");
  if (!sig) return new Response("Missing signature", { status: 400 });

  const raw = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const s = event.data.object as Stripe.Checkout.Session;
    const md = s.metadata ?? {};
    if (md.course_id && md.user_id && md.tenant_id) {
      await enrollPaid(
        md.tenant_id,
        md.user_id,
        md.course_id,
        s.id,
        typeof s.subscription === "string" ? s.subscription : null,
      );
    }
    // A bundle purchase enrolls the buyer in EVERY member course. enrollPaid is idempotent
    // (onConflictDoNothing on user+course+attempt), so a Stripe retry of the same event never
    // double-enrolls. Access is granted per course, so editing the bundle later cannot revoke it.
    if (md.bundle_id && md.user_id && md.tenant_id) {
      const courseIds = await getBundleCourseIds(md.tenant_id, md.bundle_id);
      for (const courseId of courseIds) {
        await enrollPaid(md.tenant_id, md.user_id, courseId, s.id, null);
      }
    }
    if (md.promo_id) await incrementPromoUsage(md.promo_id);
    // A SCHOOL bought its own white-label instance (plans/51). Activate its billing row and the
    // tenant. Idempotent, so a Stripe retry is a no-op. Covers both a recurring subscription and a
    // one-time lifetime payment (a lifetime session simply has no `subscription`).
    if (md.platform_tenant_id) {
      await activatePlatformSubscription({
        tenantId: md.platform_tenant_id,
        checkoutSessionId: s.id,
        stripeCustomerId: typeof s.customer === "string" ? s.customer : null,
        stripeSubscriptionId: typeof s.subscription === "string" ? s.subscription : null,
      });
    }
  } else if (event.type === "customer.subscription.deleted") {
    const sub = event.data.object as Stripe.Subscription;
    // The id belongs to either a student's course subscription or a school's platform subscription;
    // only one of these matches, so calling both is safe.
    await cancelEnrollmentBySubscription(sub.id);
    await setPlatformSubscriptionStatusByStripeId(sub.id, "canceled");
  } else if (event.type === "customer.subscription.updated") {
    // Dunning for a SCHOOL's platform subscription (plans/51). Course enrollments ignore this event;
    // this branch only touches platform subs, keyed by the Stripe subscription id (which never matches
    // a student's course sub — those live in a different table). A repeated event is a no-op rewrite.
    const sub = event.data.object as Stripe.Subscription;
    if (sub.status === "past_due") {
      await setPlatformSubscriptionStatusByStripeId(sub.id, "past_due");
    } else if (sub.status === "active") {
      // Payment recovered: flip the school back to active.
      await setPlatformSubscriptionStatusByStripeId(sub.id, "active");
    }
  }

  return new Response("ok", { status: 200 });
}
