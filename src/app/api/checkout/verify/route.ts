import { apiContext } from "@/lib/api";
import { getStripe } from "@/lib/stripe";
import { getSiteUrl } from "@/lib/site-url";
import { enrollPaid } from "@/db/queries/enrollment";
import { getBundleCourseIds } from "@/db/queries/bundles";

// GET /api/checkout/verify?session_id=... — the success redirect target for a course or bundle
// purchase. It fulfills the enrollment HERE, on the buyer's return, as a backstop for the Stripe
// webhook. The webhook can lag in production and, in local dev, usually never reaches the server at
// all (no `stripe listen` forwarding), which leaves a paid course locked. Stripe's own guidance is to
// fulfill on BOTH the webhook and the success return; `enrollPaid` uses onConflictDoNothing, so doing
// it twice is a no-op. We only fulfill for the signed-in buyer + this tenant, exactly the checks the
// webhook makes, and we key off the Stripe session's own `status`/metadata (not a client-trusted flag).
export async function GET(req: Request) {
  const site = await getSiteUrl();
  const sessionId = new URL(req.url).searchParams.get("session_id");
  const { sdb, session } = await apiContext();
  const stripe = getStripe();

  let dest = "/my-courses";
  if (session && sessionId && stripe) {
    try {
      const cs = await stripe.checkout.sessions.retrieve(sessionId);
      const md = cs.metadata ?? {};
      const complete = cs.status === "complete";
      if (complete && md.user_id === session.user.id && md.tenant_id === sdb.tenantId) {
        const subId = typeof cs.subscription === "string" ? cs.subscription : null;
        if (md.course_id) {
          await enrollPaid(sdb.tenantId, session.user.id, md.course_id, cs.id, subId);
          dest = `/course/${md.course_id}?enrolled=true`;
        } else if (md.bundle_id) {
          const ids = await getBundleCourseIds(sdb.tenantId, md.bundle_id);
          for (const cid of ids) await enrollPaid(sdb.tenantId, session.user.id, cid, cs.id, null);
          dest = "/my-courses";
        }
      }
    } catch {
      // Retrieval failed; leave fulfillment to the webhook and just send the buyer to their courses.
    }
  }
  return Response.redirect(`${site}${dest}`, 303);
}
