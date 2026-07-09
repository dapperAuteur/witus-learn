import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import { resetDemoData } from "@/db/queries/demo";

// GET/POST /api/cron/demo-reset — nightly wipe + reseed of the shared demo account's
// Acme data (see vercel.json's cron entry, "0 0 * * *" = midnight UTC). Vercel Cron
// invokes GET with `Authorization: Bearer ${CRON_SECRET}` auto-attached when CRON_SECRET
// is set as a project env var; POST is accepted too for a manual trigger with the same
// header. This endpoint is USELESS without the exact secret — a missing/mismatched
// header (or a missing CRON_SECRET altogether) is a flat 401, no partial information
// leaked either way.
function guard(req: Request): boolean {
  if (!env.CRON_SECRET) return false;
  const auth = req.headers.get("authorization");
  return auth === `Bearer ${env.CRON_SECRET}`;
}

async function handle(req: Request): Promise<NextResponse> {
  if (!guard(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const demo = await resetDemoData();
    if (!demo) {
      // Not a secret leak — just "the demo account isn't configured yet" (missing
      // DEMO_VISITOR_USER_EMAIL or the Acme tenant hasn't been seeded).
      return NextResponse.json({ error: "Demo account not configured" }, { status: 500 });
    }
    return NextResponse.json({ ok: true, at: new Date().toISOString() });
  } catch (err) {
    // Log the failure shape for debugging, but never the CRON_SECRET or any request
    // header — only the error message/stack, same as every other route in this app.
    console.error("[cron/demo-reset] reset failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Reset failed" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  return handle(req);
}

export async function POST(req: Request) {
  return handle(req);
}
