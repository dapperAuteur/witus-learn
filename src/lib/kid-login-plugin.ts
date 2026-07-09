import { createAuthEndpoint } from "better-auth/api";
import { setSessionCookie } from "better-auth/cookies";
import { APIError } from "better-auth";
import * as z from "zod";
import { getCohortIdByClassCode, isCohortMember, verifyKidPin } from "@/db/queries/kid-login";
import { checkLoginOrigin } from "@/lib/auth-origins";

// A dedicated Better Auth plugin (Option A of plans/kid-login-avatar-pin-design.md) that
// mints a real Better Auth session for a child user WITHOUT a magic link or a password.
//
// Why a plugin (not a hand-rolled cookie): Better Auth's own built-in endpoints — magic-link
// verify, credential sign-in, admin impersonation — all mint sessions the exact same way:
// `ctx.context.internalAdapter.createSession(userId)` then `setSessionCookie(ctx, {session,
// user})`. Both are supported, public building blocks (`better-auth/cookies` is a published
// export; `createAuthEndpoint`/`ctx.context.internalAdapter` are what every first-party
// plugin uses). Writing our own endpoint via `createAuthEndpoint` is the SAME extension
// point Better Auth's own plugins use — not a workaround. It also guarantees the minted
// session cookie is signed exactly the way `getSession()` expects (same `ctx.setSignedCookie`
// call every other sign-in path uses), so there is no risk of forging a signature by hand.
//
// SECURITY: all the real validation (origin/CSRF, class code → cohort, cohort membership,
// rate-limited PIN compare) lives INSIDE this endpoint, not in the Next.js route that calls
// it. That matters because this plugin is registered on the shared `auth` instance whose
// handler backs the public `/api/auth/[...all]` catch-all — so this endpoint is ALSO
// reachable directly at POST /api/auth/kid-login/verify, not just via our own POST
// /api/kid-login wrapper. If the validation lived only in the wrapper route, hitting the
// plugin path directly would mint a session without checking the PIN. Keeping the checks
// here means both entry points enforce the identical rate-limited, class-code-bound PIN
// verification and the same login-CSRF (trusted-origin) guard.
//
// CSRF: `checkLoginOrigin` mirrors Better Auth's built-in `validateFormCsrf` (the exact
// middleware `/sign-in/email` runs) against the SAME trusted-origin set as auth.ts, so
// kid-login is neither more nor less permissive than the platform's own sign-in. We call
// it explicitly (rather than the built-in middleware) because this endpoint is invoked via
// `auth.api.kidLoginVerify({ headers })` where `ctx.request` isn't set — the built-in
// middleware short-circuits on a missing `ctx.request`, so it would silently NOT run. The
// wrapper forwards the real request headers, which arrive here as `ctx.headers`.
const kidLoginBodySchema = z.object({
  classCode: z.string().trim().min(1).max(32),
  childUserId: z.string().min(1),
  pin: z.string().min(4).max(6),
});

/** One generic message for every failure mode — invalid code, child not in that class,
 *  wrong PIN, or locked out — so a caller can never learn which one it was (no
 *  enumeration of class codes or children). */
function genericFailure(): never {
  throw new APIError("UNAUTHORIZED", { message: "That didn't match. Please try again." });
}

export const kidLoginPlugin = () => ({
  id: "kid-login",
  endpoints: {
    kidLoginVerify: createAuthEndpoint(
      "/kid-login/verify",
      { method: "POST", body: kidLoginBodySchema },
      async (ctx) => {
        // Login-CSRF guard FIRST, before any DB work — a cross-origin POST is rejected
        // exactly as the built-in sign-in would reject it. `ctx.headers` is the forwarded
        // request's headers (or, on the direct HTTP path, the real request's).
        const headers = ctx.headers ?? ctx.request?.headers;
        if (headers && (await checkLoginOrigin(headers)) === "blocked") {
          throw new APIError("FORBIDDEN", { message: "That didn't match. Please try again." });
        }

        const { classCode, childUserId, pin } = ctx.body;

        const cohort = await getCohortIdByClassCode(classCode);
        if (!cohort) genericFailure();

        const isMember = await isCohortMember(cohort.id, childUserId);
        if (!isMember) genericFailure();

        const result = await verifyKidPin(cohort.tenantId, childUserId, pin);
        if (!result.ok) genericFailure();

        const user = await ctx.context.internalAdapter.findUserById(result.userId);
        if (!user) genericFailure();

        const session = await ctx.context.internalAdapter.createSession(user.id);
        if (!session) genericFailure();

        await setSessionCookie(ctx, { session, user });
        return ctx.json({ ok: true });
      },
    ),
  },
});
