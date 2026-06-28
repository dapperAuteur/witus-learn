import { apiContext, errorJson, isTenantInstructor, json } from "@/lib/api";
import {
  getInstructorBillingProfile,
  upsertInstructorBillingProfile,
} from "@/db/queries/connect";
import {
  createOnboardingLink,
  ensureConnectAccount,
  getConnectOnboarded,
  getStripe,
} from "@/lib/stripe";
import { getSiteUrl } from "@/lib/site-url";

// GET /api/instructor/connect — Connect status for the signed-in instructor.
export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantInstructor(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const profile = await getInstructorBillingProfile(session.user.id);
  return json({
    connected: Boolean(profile?.stripeConnectAccountId),
    onboarded: Boolean(profile?.stripeConnectOnboarded),
  });
}

// POST /api/instructor/connect — start/continue Connect onboarding; returns an
// onboarding URL (or { onboarded:true } once complete).
export async function POST() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantInstructor(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const stripe = getStripe();
  if (!stripe) return errorJson("Payments are not configured", 503);

  const profile = await getInstructorBillingProfile(session.user.id);
  const accountId = await ensureConnectAccount(
    stripe,
    profile?.stripeConnectAccountId ?? null,
    session.user.email,
  );
  const onboarded = await getConnectOnboarded(stripe, accountId);
  await upsertInstructorBillingProfile(session.user.id, {
    stripeConnectAccountId: accountId,
    stripeConnectOnboarded: onboarded,
  });
  if (onboarded) return json({ onboarded: true });

  const siteUrl = await getSiteUrl();
  const url = await createOnboardingLink(
    stripe,
    accountId,
    `${siteUrl}/teach`,
    `${siteUrl}/teach?connected=1`,
  );
  return json({ url });
}
