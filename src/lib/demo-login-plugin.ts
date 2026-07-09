import { timingSafeEqual } from "node:crypto";
import { createAuthEndpoint } from "better-auth/api";
import { setSessionCookie } from "better-auth/cookies";
import { APIError } from "better-auth";
import * as z from "zod";
import { ensureDemoUser, DEMO_TENANT_SLUG } from "@/db/queries/demo";
import { getTenantByHost } from "@/lib/tenant";
import { checkLoginOrigin } from "@/lib/auth-origins";
import { env } from "@/lib/env";

// A dedicated Better Auth plugin (mirrors src/lib/kid-login-plugin.ts) that mints a real
// Better Auth session for the SHARED demo account — no email, no per-visitor password
// prompt. "Try the demo" on the Acme login page POSTs here with no secret in the request
// body; this route itself supplies DEMO_VISITOR_PASSWORD server-side (see the wrapper at
// src/app/api/demo-login/route.ts) so the browser never sees the value. The password
// check still runs INSIDE this endpoint (not just the wrapper) for the same reason
// kid-login keeps its checks here: this plugin is also reachable directly at
// POST /api/auth/demo-login/verify (it's registered on the shared `auth` instance behind
// the public /api/auth/[...all] catch-all), so an attacker who finds that URL still has
// to know the real DEMO_VISITOR_PASSWORD — a server-only secret — to mint a session.
//
// SECURITY BOUNDARIES (see also src/db/queries/demo.ts):
//   1. Tenant-locked: the request's Host must resolve to the acme-academy tenant. The
//      demo can never be logged into on bettervice.club or any other brand's domain,
//      even with the correct password.
//   2. Secret-locked: DEMO_VISITOR_PASSWORD must be configured AND match exactly
//      (constant-time compare, so repeated guesses can't be timed to narrow it down).
//   3. Blast-radius-locked: the session minted is the demo user, which ensureDemoUser()
//      makes a brand_admin of Acme ONLY — never a platform owner, never a member of any
//      other tenant. Even a leaked/replayed demo session cookie can't reach another
//      brand's admin surface or /platform tooling; every authz check in this app re-reads
//      tenant_memberships per-tenant (src/lib/session.ts), so there is no "global admin"
//      escalation available to this account.
// Errors are always the same generic message — never confirm whether the tenant, the
// env var, or the password was the problem.
const demoLoginBodySchema = z.object({
  password: z.string().min(1).max(200),
});

const GENERIC_MESSAGE = "Demo sign-in isn't available right now.";

function genericFailure(): never {
  throw new APIError("UNAUTHORIZED", { message: GENERIC_MESSAGE });
}

/** Constant-time compare that doesn't leak length via early return. */
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // Burn a comparable amount of time on a same-length pair so a mismatched length
    // doesn't return measurably faster than a mismatched value of the right length.
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

export const demoLoginPlugin = () => ({
  id: "demo-login",
  endpoints: {
    demoLoginVerify: createAuthEndpoint(
      "/demo-login/verify",
      { method: "POST", body: demoLoginBodySchema },
      async (ctx) => {
        // Login-CSRF guard first, before any DB work — same check every sign-in path runs.
        const headers = ctx.headers ?? ctx.request?.headers;
        if (headers && (await checkLoginOrigin(headers)) === "blocked") {
          throw new APIError("FORBIDDEN", { message: GENERIC_MESSAGE });
        }

        // Tenant lock: only mintable while the request resolves to Acme.
        const host = headers?.get("x-forwarded-host") ?? headers?.get("host");
        const tenant = await getTenantByHost(host);
        if (!tenant || tenant.slug !== DEMO_TENANT_SLUG) genericFailure();

        // Secret lock: DEMO_VISITOR_PASSWORD must be configured and match exactly.
        if (!env.DEMO_VISITOR_PASSWORD) genericFailure();
        if (!safeEqual(ctx.body.password, env.DEMO_VISITOR_PASSWORD)) genericFailure();

        const demo = await ensureDemoUser();
        if (!demo) genericFailure();

        const user = await ctx.context.internalAdapter.findUserById(demo.userId);
        if (!user) genericFailure();

        const session = await ctx.context.internalAdapter.createSession(user.id);
        if (!session) genericFailure();

        await setSessionCookie(ctx, { session, user });
        return ctx.json({ ok: true });
      },
    ),
  },
});
