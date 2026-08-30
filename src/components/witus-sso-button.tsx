"use client";

import { useCallback, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  SILENT_SSO_TIMEOUT_MS,
  SSO_ATTEMPT_STORAGE_KEY,
  continueAsLabel,
  parseSilentSsoIdentity,
  silentSsoDecision,
  withAttemptMarker,
  type SsoIdentity,
} from "@/lib/silent-sso";

/**
 * "Sign in with WitUS", plus the silent "Continue as <name>" check on top of it.
 *
 * THE GATE IS THE WHOLE POINT. `enabled` is resolved on the SERVER from the request host
 * (`isWitusBrandedHost(host) || tenant.flags.ecosystemSso`, see src/app/login/page.tsx) and is
 * never derived here or supplied by the client. A white-label school must never so much as touch
 * accounts.witus.online: that single request would both reveal the ecosystem exists and tell it
 * someone visited that school. The login page already renders this component only behind that gate;
 * `enabled` repeats it as the hard precondition so a future caller who forgets the wrapper gets a
 * dark button rather than a leak.
 *
 * WHAT THE VISITOR SEES. The form is already on screen; nothing here delays it. The button says
 * "Sign in with WitUS" from the first paint. If the probe comes back with a WitUS session it
 * becomes "Continue as <name>". If the probe fails, times out, is blocked by the browser's
 * third-party-cookie rules, or the IdP does not answer, nothing changes and nothing is said, which
 * is the requirement: a failed silent check is invisible.
 */
export function WitusSsoButton({
  enabled,
  callbackURL,
  silentCheckUrl,
}: {
  /** Server-resolved ecosystem gate. False means this component does nothing at all. */
  enabled: boolean;
  /**
   * Same-origin path to land on after sign-in. The login page has already validated it through
   * safeNextPath, so a deep link to a lesson comes back to that lesson instead of the home page,
   * which is what the old hardcoded `${origin}/` got wrong.
   */
  callbackURL: string;
  /** IdP session endpoint, or null when ecosystem SSO is not configured. */
  silentCheckUrl: string | null;
}) {
  const [pending, setPending] = useState(false);
  const [identity, setIdentity] = useState<SsoIdentity | null>(null);

  useEffect(() => {
    const endpoint = silentCheckUrl;
    const decision = silentSsoDecision({
      enabled,
      endpoint,
      search: window.location.search,
      attempted: readAttempted(),
    });
    // `!endpoint` is already implied by decision.attempt; it is repeated so the narrowing is the
    // compiler's and not a cast that could quietly outlive the invariant.
    if (!decision.attempt || !endpoint) return;

    // Abort rather than hang. A probe still in flight when the visitor has moved on is a leak of
    // attention, not just of a socket.
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), SILENT_SSO_TIMEOUT_MS);
    let live = true;

    // `credentials: "include"` is the entire mechanism: the answer depends on the IdP's OWN cookie,
    // which is third-party from here. Browsers that partition or block third-party cookies (Safari
    // ITP, Firefox Total Cookie Protection) answer "nobody", and that is a supported outcome, not a
    // bug to work around: the visitor keeps the ordinary button.
    fetch(endpoint, {
      credentials: "include",
      mode: "cors",
      cache: "no-store",
      headers: { accept: "application/json" },
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((payload) => {
        if (!live) return;
        const found = parseSilentSsoIdentity(payload);
        // NEVER a credential. This name is display copy for a button whose click runs the real
        // OIDC code flow; it grants nothing on its own and must never be treated as identity.
        if (found) setIdentity(found);
      })
      .catch(() => {
        // Invisible on purpose: network error, CORS refusal, abort, non-JSON body. All the same.
      })
      .finally(() => clearTimeout(timer));

    return () => {
      live = false;
      clearTimeout(timer);
      controller.abort();
    };
  }, [enabled, silentCheckUrl]);

  const start = useCallback(() => {
    setPending(true);
    // THE LOOP GUARD, written BEFORE the redirect, never after the return. Without it a visitor
    // whose IdP session has gone stale gets: probe says "Continue as X" -> click -> the IdP cannot
    // finish -> back to /login -> probe says "Continue as X" -> forever. With it, one attempt per
    // tab: the second render of this page offers the plain button and the email form, which always
    // work.
    writeAttempted();
    const origin = window.location.origin;
    void authClient.signIn
      .oauth2({
        providerId: "witus",
        callbackURL: `${origin}${callbackURL}`,
        // Belt and braces with the callback interceptor in src/app/api/auth/[...all]/route.ts.
        // better-auth only reads this errorCallbackURL for failures AFTER it parses the OAuth
        // state, so an error the IdP itself returns is handled there instead; this covers the rest
        // (token exchange, issuer mismatch) and carries the same one-shot marker.
        errorCallbackURL: `${origin}${withAttemptMarker(callbackURL === "/" ? "/login" : `/login?next=${encodeURIComponent(callbackURL)}`)}`,
      })
      .finally(() => setPending(false));
  }, [callbackURL]);

  if (!enabled) return null;

  const label = pending ? "Redirecting…" : continueAsLabel(identity);

  return (
    <>
      <button
        type="button"
        disabled={pending}
        onClick={start}
        className="min-h-12 w-full rounded-md bg-neutral-900 px-4 font-medium text-white hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        {label}
      </button>
      {/* Always in the DOM so the label change is announced when it happens, and silent (and
          invisible) when the probe found nothing. */}
      <p
        role="status"
        aria-live="polite"
        className={
          identity ? "mt-2 text-center text-xs text-neutral-500 dark:text-neutral-400" : "sr-only"
        }
      >
        {identity ? "Not you? Sign in with your email above." : ""}
      </p>
    </>
  );
}

/**
 * sessionStorage throws outright in some privacy modes, so both halves are wrapped. A browser that
 * cannot remember the attempt still gets the other half of the guard: the `?sso=tried` marker the
 * callback interceptor puts on the URL.
 */
function readAttempted(): boolean {
  try {
    return window.sessionStorage.getItem(SSO_ATTEMPT_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function writeAttempted(): void {
  try {
    window.sessionStorage.setItem(SSO_ATTEMPT_STORAGE_KEY, "1");
  } catch {
    // No storage, no marker. The query-param half still applies.
  }
}
