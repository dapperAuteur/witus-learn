import { errorJson } from "@/lib/api";
import { auth } from "@/lib/auth";
import { env } from "@/lib/env";

// POST /api/demo-login — "Try the demo" on the Acme login page. The visitor never types
// a password: the button just POSTs here with an empty body, and THIS route supplies
// DEMO_VISITOR_PASSWORD server-side when it calls the Better Auth plugin endpoint below —
// the secret never reaches the browser. All the real validation (tenant lock, secret
// compare, session mint) lives in `auth.api.demoLoginVerify`
// (src/lib/demo-login-plugin.ts) — kept there, not here, so the exact same checks apply
// no matter which URL a caller hits (that plugin endpoint is also reachable directly at
// POST /api/auth/demo-login/verify).
//
// Generic errors only — never reveal whether the env var is missing, the tenant didn't
// match, or (impossible from this wrapper, but true for a direct hit on the plugin route)
// the password was wrong.
const GENERIC_ERROR = "Demo sign-in isn't available right now.";

export async function POST(req: Request) {
  if (!env.DEMO_VISITOR_PASSWORD) return errorJson(GENERIC_ERROR, 500);

  try {
    const response = await auth.api.demoLoginVerify({
      body: { password: env.DEMO_VISITOR_PASSWORD },
      // Forward the real request headers so the plugin's tenant/origin checks see the
      // actual Host/Origin/Cookie/Sec-Fetch headers, not this server's own.
      headers: req.headers,
      asResponse: true,
    });
    return response;
  } catch {
    // Covers APIError (tenant mismatch, misconfigured secret) and any unexpected
    // failure alike — never leak which one it was.
    return errorJson(GENERIC_ERROR, 401);
  }
}
