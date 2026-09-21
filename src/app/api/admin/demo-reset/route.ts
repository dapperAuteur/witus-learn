import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { resetDemoData } from "@/db/queries/demo";

// POST /api/admin/demo-reset: the "Reset demo data now" button on the admin home. Runs the SAME
// resetDemoData the nightly cron (/api/cron/demo-reset) runs, on demand, so the owner does not have
// to wait for midnight UTC after a demo gets messy. Owner only: the demo account lives on the Acme
// school whatever host this is called from, so a school's brand admin must not be able to wipe it.
// Authorized by the owner's session, never by CRON_SECRET, so the secret never reaches a browser.
// resetDemoData only ever touches the demo user's own rows on Acme (see clearDemoData).
export async function POST() {
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  try {
    const demo = await resetDemoData();
    if (!demo) {
      return errorJson(
        "The demo account isn't set up: DEMO_VISITOR_USER_EMAIL is missing, or the Acme school hasn't been seeded.",
        409,
      );
    }
    return json({ ok: true, at: new Date().toISOString() });
  } catch (err) {
    console.error("[admin/demo-reset] reset failed:", err instanceof Error ? err.message : err);
    return errorJson("Reset failed. Check the server logs.", 500);
  }
}
