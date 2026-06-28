import type Stripe from "stripe";
import { env } from "@/lib/env";
import { getStripe } from "@/lib/stripe";
import { enrollPaid } from "@/db/queries/enrollment";

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
      await enrollPaid(md.tenant_id, md.user_id, md.course_id, s.id);
    }
  }
  // customer.subscription.deleted → cancel: handled in 5c (needs subscription id
  // persisted on the enrollment).

  return new Response("ok", { status: 200 });
}
