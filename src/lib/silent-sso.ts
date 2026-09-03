/**
 * "Continue as <name>" - the silent ecosystem-SSO check (plans/app-improvements/silent-ecosystem-sso.md).
 *
 * BAM's complaint: signing in on learn.witus.online sends you to the WitUS login page even when
 * another tab already has you signed in to a WitUS app. BAM chose OPTION B on 2026-08-30: render
 * the login form immediately, ask the question in parallel, and offer "Continue as <name>" once the
 * answer arrives. NOT fully automatic, which is what keeps the latency off the common case (most
 * people hitting a login page are signed in nowhere) and keeps the redirect loop mostly impossible.
 *
 * WHY A CROSS-ORIGIN PROBE AND NOT `prompt=none`. The WitUS IdP genuinely supports OIDC
 * `prompt=none` (verified in better-auth's oidc-provider: it returns `login_required` with no
 * session, and every WitUS client is a trusted client with skipConsent, so a live session returns a
 * code). But `prompt=none` is a NAVIGATION. You leave the login page to ask, which is the automatic
 * design BAM rejected, and the only way to ask without leaving is a hidden iframe, which Safari's
 * ITP already blocks. So option B asks a dedicated IdP endpoint over CORS instead, in parallel
 * with a form that has already rendered.
 *
 * WHAT THIS BUYS AND WHAT IT DOES NOT. The probe carries the IdP's cookie as a THIRD-PARTY cookie,
 * so it answers on Chrome/Edge and returns nothing under Safari ITP or Firefox Total Cookie
 * Protection. That is fine and it is the design: a probe that answers nothing renders nothing, and
 * the visitor keeps the exact login page they already had (rule 3, a failed check is invisible).
 *
 * CORRECTION, 2026-09-02: until this date the probe answered on NO browser. It pointed at the IdP's
 * better-auth `/get-session`, which sends no CORS headers at all, so every browser discarded the
 * response and the degraded state above was the ONLY state. The IdP now serves a purpose-built
 * `/api/ecosystem/session` for this; see silentSsoEndpointFromDiscovery for why the original target
 * could not simply have CORS added to it. The Safari/Firefox note above is accurate again now.
 *
 * THE IDENTITY THIS RETURNS IS DISPLAY ONLY. It arrives from a cross-origin response, so it is
 * client-supplied by definition and MUST NEVER authenticate anyone. Clicking "Continue as <name>"
 * runs the real OIDC code flow, which is where identity is actually established. Nothing in this
 * file may ever be used to grant access.
 *
 * Pure helpers: NO `server-only`, NO next/headers, NO window access at module scope, same reasoning
 * as next-path.ts. The tests import them directly.
 */

/** Query param that marks "this browser already tried the ecosystem flow on this page". */
export const SSO_ATTEMPT_PARAM = "sso";
export const SSO_ATTEMPT_VALUE = "tried";

/**
 * sessionStorage key for the same marker. Written IMMEDIATELY BEFORE we send the browser to the
 * IdP, never after we come back: a marker written on return is a marker that never exists when the
 * return is the thing that failed.
 */
export const SSO_ATTEMPT_STORAGE_KEY = "witus.sso.attempted";

/** How long to wait for the probe before giving up. A silent check that hangs is a broken page. */
export const SILENT_SSO_TIMEOUT_MS = 4000;

/** Longest display name we will render. Caps a hostile or absurd value from blowing up the card. */
const MAX_LABEL_LENGTH = 48;

const CONTROL_CHARS = /[\u0000-\u001F\u007F]/g;

/**
 * OIDC authorization-error codes that mean "the IdP will not complete this without a human".
 *
 * `login_required` and `interaction_required` are what a `prompt=none` request gets back when the
 * IdP has no session; `consent_required` and `account_selection_required` are its siblings.
 * `access_denied` is the one that fires TODAY, on the interactive path: the visitor clicked
 * "Continue as ...", the IdP asked them to confirm, and they cancelled.
 *
 * All five share one correct response: put the visitor back on the login form with no error. Today
 * every one of them instead lands on better-auth's raw /api/auth/error page, because the generic
 * OAuth callback redirects on `ctx.query.error` BEFORE it parses the state that carries our
 * `errorCallbackURL`. See silentSsoRecoveryPath below.
 */
export const SILENT_AUTH_FAILURES = [
  "login_required",
  "interaction_required",
  "consent_required",
  "account_selection_required",
  "access_denied",
] as const;

export function isSilentAuthFailure(error: string | null | undefined): boolean {
  return typeof error === "string" && (SILENT_AUTH_FAILURES as readonly string[]).includes(error);
}

/** Identity shown on the button. Display only, never a credential. */
export interface SsoIdentity {
  /** What "Continue as ___" says. Already trimmed, de-controlled, and length-capped. */
  label: string;
}

export type SilentSsoSkip =
  | "tenant-not-eligible"
  | "not-configured"
  | "already-attempted"
  | "already-signed-in";

export type SilentSsoDecision = { attempt: true } | { attempt: false; skip: SilentSsoSkip };

/**
 * Should this browser ask the IdP who it is?
 *
 * `enabled` is the SERVER-RESOLVED ecosystem gate (`isWitusBrandedHost(host) ||
 * tenant.flags.ecosystemSso`) handed down from the login page. It is checked FIRST and it is the
 * one that matters: a silent request to a shared IdP from a white-label school would both reveal
 * that the ecosystem exists and tell it that someone visited that school. Never re-derive this gate
 * here, and never accept a tenant from the client.
 */
export function silentSsoDecision(input: {
  enabled: boolean;
  endpoint: string | null | undefined;
  search?: string | null;
  attempted?: boolean;
  signedIn?: boolean;
}): SilentSsoDecision {
  if (!input.enabled) return { attempt: false, skip: "tenant-not-eligible" };
  if (!input.endpoint) return { attempt: false, skip: "not-configured" };
  if (input.signedIn) return { attempt: false, skip: "already-signed-in" };
  if (input.attempted || hasAttemptMarker(input.search)) {
    return { attempt: false, skip: "already-attempted" };
  }
  return { attempt: true };
}

/** Does this query string carry the one-shot marker? Accepts "?a=b" or "a=b". */
export function hasAttemptMarker(search: string | null | undefined): boolean {
  if (typeof search !== "string" || search === "") return false;
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  return params.get(SSO_ATTEMPT_PARAM) === SSO_ATTEMPT_VALUE;
}

/**
 * Add the one-shot marker to a same-origin path, preserving any query it already has (notably
 * `?next=`, which is how the intended destination survives, per rule 4).
 */
export function withAttemptMarker(path: string): string {
  const [beforeHash, ...hashRest] = path.split("#");
  const hash = hashRest.length > 0 ? `#${hashRest.join("#")}` : "";
  const [pathname, ...queryRest] = beforeHash.split("?");
  const params = new URLSearchParams(queryRest.join("?"));
  params.set(SSO_ATTEMPT_PARAM, SSO_ATTEMPT_VALUE);
  return `${pathname}?${params.toString()}${hash}`;
}

/**
 * Split a discovery URL into the IdP's origin and its better-auth basePath.
 *
 *   https://accounts.witus.online/api/idp/.well-known/openid-configuration
 *     -> { origin: "https://accounts.witus.online", basePath: "/api/idp" }
 *
 * Everything below derives from this rather than hardcoding accounts.witus.online, so the one
 * external value this app asserts stays the discovery URL it is already configured with
 * (authoritative-values rule).
 */
function splitDiscoveryUrl(
  discoveryUrl: string | null | undefined,
): { origin: string; basePath: string } | null {
  if (!discoveryUrl) return null;
  let parsed: URL;
  try {
    parsed = new URL(discoveryUrl);
  } catch {
    return null;
  }
  const cut = parsed.pathname.indexOf("/.well-known/");
  if (cut < 0) return null;
  return { origin: parsed.origin, basePath: parsed.pathname.slice(0, cut) };
}

/**
 * The IdP's RP-initiated logout endpoint: `<basePath>/oauth2/endsession`, which is the
 * `end_session_endpoint` the live discovery document advertises (verified 2026-09-02).
 *
 * BAM chose GLOBAL sign-out on 2026-08-30: "signout signs out of every app". Ending only this
 * app's session leaves the IdP session alive, and once "Continue as ..." is live that means
 * signing out and coming back offers to sign you straight back in, which reads as a broken logout.
 */
export function endSessionEndpointFromDiscovery(
  discoveryUrl: string | null | undefined,
): string | null {
  const parts = splitDiscoveryUrl(discoveryUrl);
  if (!parts) return null;
  return `${parts.origin}${parts.basePath}/oauth2/endsession`;
}

/**
 * The ecosystem session probe: `<idp-origin>/api/ecosystem/session`.
 *
 * NOT `<basePath>/get-session`, which is where this pointed until 2026-09-02 and which could never
 * have worked. Two independent reasons, both verified rather than reasoned about:
 *
 *  1. better-auth's core emits no CORS headers at all (only its MCP plugin does), and the IdP sets
 *     no `trustedOrigins`. `curl -H "Origin: https://learn.witus.online"` against the live
 *     `/api/idp/get-session` returns 200 with NO `access-control-allow-origin`, so the browser
 *     discarded the response on Chrome and Edge too — not just under Safari ITP as the note below
 *     assumed. The probe has never once answered in production.
 *  2. It must not be fixed by adding CORS there. `/get-session` returns the full `{ session, user }`
 *     and `session` carries the SESSION TOKEN, so a credentialed allow-origin on it would let any
 *     ecosystem origin — or an XSS on any one of them — lift a live IdP session token.
 *
 * `/api/ecosystem/session` is the purpose-built replacement in gemini/witus
 * (app/api/ecosystem/session/route.ts): same cookie, but it answers with a display label and
 * nothing else, and its allow-origin list is derived from the IdP's own client registry. Its
 * response shape is `{ signedIn, user: { name } }`, which parseSilentSsoIdentity already reads.
 *
 * An explicit WITUS_SSO_SESSION_URL still wins, because the path is owned by that app, not this one.
 */
export function silentSsoEndpointFromDiscovery(
  discoveryUrl: string | null | undefined,
): string | null {
  const parts = splitDiscoveryUrl(discoveryUrl);
  if (!parts) return null;
  return `${parts.origin}/api/ecosystem/session`;
}

/**
 * Read a display name out of the probe response.
 *
 * Shapes handled: better-auth's `{ session, user }`, a bare user object, and the signed-out answer,
 * which is a 200 with a `null` body rather than an error. Anything else yields null, which renders
 * nothing.
 */
export function parseSilentSsoIdentity(payload: unknown): SsoIdentity | null {
  if (!payload || typeof payload !== "object") return null;
  const root = payload as Record<string, unknown>;
  const candidate =
    root.user && typeof root.user === "object" ? (root.user as Record<string, unknown>) : root;
  const label = cleanLabel(candidate.name) ?? cleanLabel(candidate.email);
  return label ? { label } : null;
}

function cleanLabel(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.replace(CONTROL_CHARS, "").trim();
  if (!cleaned) return null;
  return cleaned.length > MAX_LABEL_LENGTH
    ? `${cleaned.slice(0, MAX_LABEL_LENGTH - 1).trimEnd()}…`
    : cleaned;
}

/** Button copy. Kept here so the test pins the exact string the visitor reads. */
export function continueAsLabel(identity: SsoIdentity | null): string {
  return identity ? `Continue as ${identity.label}` : "Sign in with WitUS";
}

/**
 * Turn a failed ecosystem callback into a quiet return to the login form.
 *
 * Deliberately NARROW. It fires only on this app's own witus callback path and only for the five
 * codes in SILENT_AUTH_FAILURES, so a real fault (a token-exchange failure, an issuer mismatch)
 * still surfaces the way it does today instead of being swallowed into a blank login page.
 *
 * The returned path carries the one-shot marker, which is the half of the loop guard that survives
 * a browser with no usable sessionStorage and a return into a different tab.
 */
export function silentSsoRecoveryPath(url: URL, loginPath = "/login"): string | null {
  if (!/\/oauth2\/callback\/witus\/?$/.test(url.pathname)) return null;
  if (!isSilentAuthFailure(url.searchParams.get("error"))) return null;
  return withAttemptMarker(loginPath);
}
