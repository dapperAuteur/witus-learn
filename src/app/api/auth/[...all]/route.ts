import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/auth";
import { silentSsoRecoveryPath } from "@/lib/silent-sso";

// Better Auth handlers: magic-link request/verify, session, sign-out, and the ecosystem OIDC
// callback.
const handlers = toNextJsHandler(auth);

/**
 * One thing is intercepted before Better Auth sees it: an ecosystem sign-in the WitUS IdP declined
 * without completing.
 *
 * Why it has to happen here. better-auth's generic-OAuth callback checks `ctx.query.error` and
 * redirects to its own /api/auth/error page BEFORE it parses the OAuth state, so the
 * `errorCallbackURL` we send with the request is never consulted for an error the IdP itself
 * returned. The visitor's "I changed my mind" lands them on a bare error screen instead of the form
 * they started from. It also blocks the redirect loop the silent check is designed against: the
 * recovery path carries `?sso=tried`, the half of the one-shot marker that survives a browser with
 * no usable sessionStorage.
 *
 * Deliberately narrow (see SILENT_AUTH_FAILURES): only this app's witus callback, only the codes
 * that mean "a human has to act". A genuine fault still surfaces exactly as it does today.
 */
export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const recovery = silentSsoRecoveryPath(url);
  if (recovery) {
    // A RELATIVE Location on purpose. Every tenant has its own domain, and resolving an absolute
    // URL here would have to pick one; the browser resolves a relative one against the host the
    // visitor is actually on, which is always the right answer.
    return new Response(null, { status: 303, headers: { location: recovery } });
  }
  // better-auth 1.7 compatibility shim. The IdP still sends the browser to the registered
  // /api/auth/oauth2/callback/witus (see redirectURI in src/lib/auth.ts), but 1.7 handles OAuth
  // callbacks only at /api/auth/callback/:id. Forward code/state intact; relative Location for the
  // same multi-tenant reason as above.
  const legacyCallback = /^\/api\/auth\/oauth2\/callback\/([^/]+)\/?$/.exec(url.pathname);
  if (legacyCallback) {
    return new Response(null, {
      status: 307,
      headers: { location: `/api/auth/callback/${legacyCallback[1]}${url.search}` },
    });
  }
  return handlers.GET(request);
}

export const POST = handlers.POST;
