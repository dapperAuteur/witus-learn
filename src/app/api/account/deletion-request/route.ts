import { env } from "@/lib/env";
import { apiContext, errorJson, json } from "@/lib/api";
import { requestOrigin } from "@/lib/request-origin";
import { personLabel } from "@/lib/course-instructor";
import { createDeletionRequest, getAccountFacts, withdrawDeletionRequest } from "@/db/queries/account-settings";
import { sendAccountDeletionRequestEmail } from "@/lib/emails";

// POST /api/account/deletion-request: "Ask to delete my account" (BAM, 2026-11-10). There is no
// self-service deletion (an account can hold certificates, a course byline, a family link or a payment
// record), so this files a request the platform owner sees on /admin/users and handles by hand. No
// free text, by the no-inbox rule. Asking twice returns the open request. The owner's email is
// best-effort and never fails the request.
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Sign in first, then try again.", 401);
  const facts = await getAccountFacts(session.user.id);
  if (!facts) return errorJson("Sign in first, then try again.", 401);
  if (facts.isManagedChild) return errorJson("A child's profile is removed by their parent from Family.", 400);

  const { request, created } = await createDeletionRequest(session.user.id, sdb.tenantId);
  if (created && env.PLATFORM_OWNER_EMAIL) {
    try {
      const origin = requestOrigin(req.headers) ?? env.NEXT_PUBLIC_APP_URL;
      await sendAccountDeletionRequestEmail({
        tenant: sdb.tenant,
        to: env.PLATFORM_OWNER_EMAIL,
        who: personLabel({ displayName: facts.displayName, name: facts.name, username: facts.username }),
        adminUrl: `${origin}/admin/users#deletion-requests`,
      });
    } catch (err) {
      console.error(`[account] deletion request ${request.id} SAVED but the owner's email FAILED on school ${sdb.tenant.slug}:`, err);
    }
  }
  return json({ request: { id: request.id, createdAt: request.createdAt } }, created ? 201 : 200);
}

// DELETE /api/account/deletion-request: withdraw an open request.
export async function DELETE() {
  const { session } = await apiContext();
  if (!session) return errorJson("Sign in first, then try again.", 401);
  const withdrawn = await withdrawDeletionRequest(session.user.id);
  return json({ ok: true, withdrawn });
}
