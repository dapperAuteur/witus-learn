import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { handoffConfigured, metricsHandoffLink } from "@/lib/centos-handoff";

// GET /api/integrations/centos/metrics
// Mints a FRESH short-lived handoff token for the signed-in learner and 302s to the CentOS
// metrics module (they land already authenticated). The token is generated per click and
// never embedded in cached HTML. Session-gated: only ever mints for an authenticated email.
export async function GET(req: Request) {
  const session = await getSession();
  const email = session?.user?.email;
  if (!email) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (!handoffConfigured()) {
    return NextResponse.json(
      { error: "Metrics handoff is not configured (WITUS_HANDOFF_SECRET missing)." },
      { status: 503 },
    );
  }
  return NextResponse.redirect(metricsHandoffLink(email, session.user.id));
}
