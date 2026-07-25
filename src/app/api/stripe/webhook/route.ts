import type Stripe from "stripe";
import { env } from "@/lib/env";
import { getStripe } from "@/lib/stripe";
import { cancelEnrollmentBySubscription, enrollPaid } from "@/db/queries/enrollment";
import { getBundleCourseIds } from "@/db/queries/bundles";
import { incrementPromoUsage } from "@/db/queries/connect";

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
  } else if (event.type === "customer.subscription.deleted") {
    const sub = event.data.object as Stripe.Subscription;
    await cancelEnrollmentBySubscription(sub.id);
  }

  return new Response("ok", { status: 200 });
}
