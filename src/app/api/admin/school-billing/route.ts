import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { getSiteUrl } from "@/lib/site-url";
import { getStripe, createPlatformCheckout } from "@/lib/stripe";
import { upsertPlatformDeal, getSchoolForBilling } from "@/db/queries/platform-subscriptions";

const Body = z.object({
  tenantId: z.string().uuid(),
  billingType: z.enum(["subscription", "lifetime"]),
  interval: z.enum(["month", "year"]).nullish(),
  amountDollars: z.number().positive().max(1_000_000),
});

// POST /api/admin/school-billing (plans/51). The platform OWNER sets a school's white-label price and
// gets a Stripe Checkout link to send them: a custom amount per school, either a recurring subscription
// or a one-time lifetime payment. Owner-only and cross-tenant, so it authorizes with isPlatformOwner
// (not a per-tenant admin check) and does not run a tenant-scoped query.
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session || !(await isPlatformOwner(session.user.id))) return errorJson("Owner only.", 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Check the values and try again.", 400);
  const { tenantId, billingType, interval, amountDollars } = parsed.data;
  if (billingType === "subscription" && !interval) return errorJson("Choose monthly or yearly.", 400);

  const school = await getSchoolForBilling(tenantId);
  if (!school) return errorJson("School not found.", 404);

  const stripe = getStripe();
  if (!stripe) return errorJson("Stripe is not configured.", 503);

  const amountCents = Math.round(amountDollars * 100);
  const normalizedInterval = billingType === "subscription" ? (interval ?? null) : null;
  await upsertPlatformDeal({ tenantId, billingType, interval: normalizedInterval, amountCents });

  const url = await createPlatformCheckout({
    stripe,
    school,
    billingType,
    interval: normalizedInterval,
    amountCents,
    siteUrl: await getSiteUrl(),
  });
  if (!url) return errorJson("Could not create the checkout session.", 500);
  return json({ url });
}
