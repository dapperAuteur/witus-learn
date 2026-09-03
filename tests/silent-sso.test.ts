import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  SILENT_AUTH_FAILURES,
  SSO_ATTEMPT_STORAGE_KEY,
  continueAsLabel,
  endSessionEndpointFromDiscovery,
  hasAttemptMarker,
  isSilentAuthFailure,
  parseSilentSsoIdentity,
  silentSsoDecision,
  silentSsoEndpointFromDiscovery,
  silentSsoRecoveryPath,
  withAttemptMarker,
} from "@/lib/silent-sso";

/**
 * The silent ecosystem-SSO check ("Continue as <name>"), option B.
 *
 * Pinned here, in order of what each would cost if it broke:
 *   1. ISOLATION. A tenant without the ecosystem gate must never touch accounts.witus.online. One
 *      request from a white-label school reveals the ecosystem exists AND tells it someone visited
 *      that school, which is the invariant this whole repo is built around.
 *   2. THE REDIRECT LOOP. probe -> "Continue as X" -> click -> IdP declines -> back to /login ->
 *      probe. It never appears in normal use, so it is simulated end to end below.
 *   3. THE INTENDED DESTINATION. The old button hardcoded `${origin}/`, so a learner deep-linked to
 *      a lesson was returned to the home page after signing in.
 *   4. INVISIBLE FAILURE. Nothing the probe can return may produce an error, a stuck spinner, or a
 *      claim about who the visitor is.
 */

const ROOT = join(__dirname, "..");
const read = (rel: string) => readFileSync(join(ROOT, rel), "utf-8");

/** Assertions about what the CODE does must not be satisfied (or broken) by a comment. */
const stripComments = (src: string) =>
  src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");

const ENDPOINT = "https://accounts.witus.online/api/ecosystem/session";

describe("the tenant gate: the check never fires without it", () => {
  it("refuses on an ineligible tenant no matter what else is true", () => {
    // Every other input set to its most "yes, go ahead" value. The gate still wins, and it wins
    // FIRST, so the reason reported is the tenant and not some later condition.
    for (const search of ["", "?next=/lesson", "?sso=tried"]) {
      for (const attempted of [false, true]) {
        for (const signedIn of [false, true]) {
          expect(
            silentSsoDecision({ enabled: false, endpoint: ENDPOINT, search, attempted, signedIn }),
          ).toEqual({ attempt: false, skip: "tenant-not-eligible" });
        }
      }
    }
  });

  it("attempts on an eligible tenant with a configured endpoint and a clean first visit", () => {
    expect(silentSsoDecision({ enabled: true, endpoint: ENDPOINT, search: "" })).toEqual({
      attempt: true,
    });
  });

  it("stays dark when ecosystem SSO is not configured", () => {
    for (const endpoint of [null, undefined, ""]) {
      expect(silentSsoDecision({ enabled: true, endpoint, search: "" })).toEqual({
        attempt: false,
        skip: "not-configured",
      });
    }
  });

  it("does not ask on behalf of someone already signed in", () => {
    expect(silentSsoDecision({ enabled: true, endpoint: ENDPOINT, signedIn: true })).toEqual({
      attempt: false,
      skip: "already-signed-in",
    });
  });

  it("is enforced in the login page, not only in the component", () => {
    const page = read("src/app/login/page.tsx");
    // The gate itself, unchanged: resolved from the REQUEST HOST on the server, never the client.
    expect(page).toContain(
      "const showWitusSso = isWitusBrandedHost(host) || tenant?.flags.ecosystemSso === true;",
    );
    // The button is rendered inside `showWitusSso ? ... : null`, and the IdP endpoint is passed
    // only there, so an ineligible tenant's browser never receives the URL at all.
    const gated = page.slice(page.indexOf("{showWitusSso ?"), page.indexOf("{showDemoLogin ?"));
    expect(gated).toContain("<WitusSsoButton");
    expect(gated).toContain("silentCheckUrl={witusSilentSsoEndpoint}");
    expect(gated).toContain("enabled={showWitusSso}");
    // ...and nowhere else in the file.
    expect(page.split("<WitusSsoButton").length - 1).toBe(1);
    expect(page.split("witusSilentSsoEndpoint").length - 1).toBe(2); // the import + the one use
  });

  it("is repeated as a hard precondition inside the component", () => {
    const component = read("src/components/witus-sso-button.tsx");
    // A caller who forgets the wrapper gets a dark button, not a leak.
    expect(component).toContain("if (!enabled) return null;");
    // Exactly one network call, and the decision function is what guards it.
    expect(component.split("fetch(").length - 1).toBe(1);
    const effect = component.slice(
      component.indexOf("useEffect(() => {"),
      component.indexOf("fetch("),
    );
    expect(effect).toContain("silentSsoDecision({");
    expect(effect).toContain("if (!decision.attempt || !endpoint) return;");
  });

  it("only ever asks the server-resolved endpoint, never one it builds itself", () => {
    // Comments name the IdP; CODE must not. A URL literal here would be a client-side default that
    // could outlive the gate, which is exactly how a white-label tenant starts leaking.
    const code = stripComments(read("src/components/witus-sso-button.tsx"));
    expect(code).not.toContain("https://");
    expect(code).not.toContain("witus.online");
    expect(code).toContain("const endpoint = silentCheckUrl;");
    expect(code).toContain("fetch(endpoint,");
  });
});

describe("the redirect loop: simulating an IdP that will not sign the visitor in", () => {
  /**
   * The failure this guard exists for, walked start to finish. It cannot be reproduced by using the
   * app normally, because in normal use the IdP either has a session or shows its own login page.
   */
  it("attempts once, then never again in that tab", () => {
    // 1. First arrival: no marker anywhere.
    let storage = false;
    let search = "";
    expect(silentSsoDecision({ enabled: true, endpoint: ENDPOINT, search, attempted: storage })).toEqual(
      { attempt: true },
    );

    // 2. The probe answered, the visitor clicked, and the marker is written BEFORE the redirect.
    storage = true;

    // 3. The IdP declines. This is what comes back to our callback.
    const declined = new URL(
      "https://learn.witus.online/api/auth/oauth2/callback/witus?error=login_required&error_description=Authentication+required+but+prompt+is+none",
    );
    const recovery = silentSsoRecoveryPath(declined);
    expect(recovery).toBe("/login?sso=tried");
    search = new URL(recovery as string, "https://learn.witus.online").search;

    // 4. Back on the login page. Both halves of the marker now say stop.
    expect(silentSsoDecision({ enabled: true, endpoint: ENDPOINT, search, attempted: storage })).toEqual(
      { attempt: false, skip: "already-attempted" },
    );

    // 5. sessionStorage alone stops it (the visitor navigated back to a bare /login).
    expect(silentSsoDecision({ enabled: true, endpoint: ENDPOINT, search: "", attempted: true })).toEqual(
      { attempt: false, skip: "already-attempted" },
    );

    // 6. The query param alone stops it, which is the case that matters in a browser where
    //    sessionStorage throws or is empty (private mode, a fresh tab from the redirect).
    expect(silentSsoDecision({ enabled: true, endpoint: ENDPOINT, search, attempted: false })).toEqual(
      { attempt: false, skip: "already-attempted" },
    );
  });

  it("writes the marker BEFORE redirecting, never after the return", () => {
    const component = read("src/components/witus-sso-button.tsx");
    const write = component.indexOf("writeAttempted();");
    const redirect = component.indexOf("authClient.signIn");
    expect(write).toBeGreaterThan(-1);
    expect(redirect).toBeGreaterThan(-1);
    // A marker written after the redirect is a marker that never exists when the return is the
    // thing that failed, which is precisely the loop.
    expect(write).toBeLessThan(redirect);
    expect(component).toContain("SSO_ATTEMPT_STORAGE_KEY");
    // The key itself lives in the shared module, so the component and the tests cannot drift.
    expect(SSO_ATTEMPT_STORAGE_KEY).toBe("witus.sso.attempted");
  });

  it("recovers only from declines, and only from this app's own witus callback", () => {
    const base = "https://learn.witus.online";
    for (const code of SILENT_AUTH_FAILURES) {
      expect(
        silentSsoRecoveryPath(new URL(`${base}/api/auth/oauth2/callback/witus?error=${code}`)),
      ).toBe("/login?sso=tried");
    }
    // A real fault must still surface the way it does today.
    expect(
      silentSsoRecoveryPath(new URL(`${base}/api/auth/oauth2/callback/witus?error=server_error`)),
    ).toBeNull();
    // A success must never be swallowed.
    expect(
      silentSsoRecoveryPath(new URL(`${base}/api/auth/oauth2/callback/witus?code=abc&state=xyz`)),
    ).toBeNull();
    // Another provider, and every other auth route, are untouched.
    expect(
      silentSsoRecoveryPath(new URL(`${base}/api/auth/oauth2/callback/other?error=login_required`)),
    ).toBeNull();
    expect(silentSsoRecoveryPath(new URL(`${base}/api/auth/get-session`))).toBeNull();
    expect(silentSsoRecoveryPath(new URL(`${base}/api/auth/magic-link/verify?token=t`))).toBeNull();
  });

  it("is wired into the auth route ahead of Better Auth", () => {
    const route = read("src/app/api/auth/[...all]/route.ts");
    const guard = route.indexOf("silentSsoRecoveryPath(");
    const delegate = route.indexOf("handlers.GET(request)");
    expect(guard).toBeGreaterThan(-1);
    expect(guard).toBeLessThan(delegate);
    // Relative Location: each tenant is on its own domain, so the browser has to resolve it.
    expect(route).toContain('headers: { location: recovery }');
    expect(route).toContain("export const POST = handlers.POST;");
  });

  it("classifies the OIDC decline codes and nothing else", () => {
    expect(isSilentAuthFailure("login_required")).toBe(true);
    expect(isSilentAuthFailure("interaction_required")).toBe(true);
    expect(isSilentAuthFailure("access_denied")).toBe(true);
    expect(isSilentAuthFailure("invalid_request")).toBe(false);
    expect(isSilentAuthFailure("")).toBe(false);
    expect(isSilentAuthFailure(null)).toBe(false);
    expect(isSilentAuthFailure(undefined)).toBe(false);
  });
});

describe("the one-shot marker", () => {
  it("reads only its own exact value", () => {
    expect(hasAttemptMarker("?sso=tried")).toBe(true);
    expect(hasAttemptMarker("sso=tried")).toBe(true);
    expect(hasAttemptMarker("?next=%2Flesson&sso=tried")).toBe(true);
    expect(hasAttemptMarker("?sso=something-else")).toBe(false);
    expect(hasAttemptMarker("?next=/sso=tried")).toBe(false);
    expect(hasAttemptMarker("")).toBe(false);
    expect(hasAttemptMarker(null)).toBe(false);
    expect(hasAttemptMarker(undefined)).toBe(false);
  });

  it("keeps the intended destination when it marks a path", () => {
    // Rule 4: the deep link has to survive the round trip, so ?next= cannot be dropped here.
    expect(withAttemptMarker("/login?next=%2Fcourses%2Fknots%2F3")).toBe(
      "/login?next=%2Fcourses%2Fknots%2F3&sso=tried",
    );
    expect(withAttemptMarker("/login")).toBe("/login?sso=tried");
    expect(withAttemptMarker("/login#top")).toBe("/login?sso=tried#top");
  });

  it("is idempotent, so a second pass cannot stack duplicates", () => {
    const once = withAttemptMarker("/login?next=%2Ffamily");
    expect(withAttemptMarker(once)).toBe(once);
  });
});

describe("the endpoint is derived, never invented", () => {
  it("turns the configured discovery URL into the IdP's session route", () => {
    expect(
      silentSsoEndpointFromDiscovery(
        "https://accounts.witus.online/api/idp/.well-known/openid-configuration",
      ),
    ).toBe(ENDPOINT);
    // The probe lives at a FIXED path on the IdP's origin, not under its better-auth basePath,
    // so an IdP mounted at the root derives the same route.
    expect(
      silentSsoEndpointFromDiscovery("https://id.example.test/.well-known/openid-configuration"),
    ).toBe("https://id.example.test/api/ecosystem/session");
  });

  it("never probes better-auth's /get-session, which would expose a session token", () => {
    // THE POINT OF THIS TEST. /get-session returns { session, user } and `session` carries the
    // SESSION TOKEN. Pointing a credentialed cross-origin probe at it — which is what this app
    // did until 2026-09-02 — would mean any ecosystem origin, or an XSS on one, could lift a live
    // IdP session token. It failed closed only because better-auth sends no CORS headers, which is
    // luck, not design. If someone "fixes" the probe by re-deriving that path, this fails.
    for (const discovery of [
      "https://accounts.witus.online/api/idp/.well-known/openid-configuration",
      "https://id.example.test/.well-known/openid-configuration",
    ]) {
      expect(silentSsoEndpointFromDiscovery(discovery)).not.toContain("get-session");
    }
  });

  it("derives the RP-initiated logout endpoint under the IdP's basePath", () => {
    // Global sign-out (BAM, 2026-08-30). This is the `end_session_endpoint` the live discovery
    // document advertises, and unlike the probe it DOES live under the better-auth basePath.
    expect(
      endSessionEndpointFromDiscovery(
        "https://accounts.witus.online/api/idp/.well-known/openid-configuration",
      ),
    ).toBe("https://accounts.witus.online/api/idp/oauth2/endsession");
    expect(endSessionEndpointFromDiscovery(null)).toBeNull();
    expect(endSessionEndpointFromDiscovery("not a url")).toBeNull();
  });

  it("returns null rather than guessing when there is nothing to derive from", () => {
    expect(silentSsoEndpointFromDiscovery(null)).toBeNull();
    expect(silentSsoEndpointFromDiscovery(undefined)).toBeNull();
    expect(silentSsoEndpointFromDiscovery("")).toBeNull();
    expect(silentSsoEndpointFromDiscovery("not a url")).toBeNull();
    expect(silentSsoEndpointFromDiscovery("https://accounts.witus.online/api/idp")).toBeNull();
  });

  it("keeps the env fallback in step with the one src/lib/auth.ts already ships", () => {
    // Two files name this URL. If they ever disagree, the silent check would probe a different
    // host than the one the click actually signs in against.
    const authFallback = read("src/lib/auth.ts").match(
      /"(https:\/\/[^"]*openid-configuration)"/,
    )?.[1];
    const envFallback = read("src/lib/env.ts").match(
      /"(https:\/\/[^"]*openid-configuration)"/,
    )?.[1];
    expect(authFallback).toBeTruthy();
    expect(envFallback).toBe(authFallback);
  });
});

describe("reading the probe answer", () => {
  it("finds the name in Better Auth's session shape", () => {
    expect(
      parseSilentSsoIdentity({
        session: { id: "s1", userId: "u1" },
        user: { id: "u1", name: "Brand Anthony McDonald", email: "bam@awews.com" },
      }),
    ).toEqual({ label: "Brand Anthony McDonald" });
  });

  it("accepts a bare user object and falls back to the email", () => {
    expect(parseSilentSsoIdentity({ name: "Ada", email: "ada@example.test" })).toEqual({
      label: "Ada",
    });
    expect(parseSilentSsoIdentity({ user: { name: "", email: "ada@example.test" } })).toEqual({
      label: "ada@example.test",
    });
  });

  it("returns nothing for every shape that means nobody is signed in", () => {
    // Better Auth answers a signed-out request with 200 and a null body, not an error.
    expect(parseSilentSsoIdentity(null)).toBeNull();
    expect(parseSilentSsoIdentity(undefined)).toBeNull();
    expect(parseSilentSsoIdentity({})).toBeNull();
    expect(parseSilentSsoIdentity({ user: null })).toBeNull();
    expect(parseSilentSsoIdentity({ user: { id: "u1" } })).toBeNull();
    expect(parseSilentSsoIdentity("Ada")).toBeNull();
    expect(parseSilentSsoIdentity(42)).toBeNull();
    expect(parseSilentSsoIdentity([{ name: "Ada" }])).toBeNull();
  });

  it("cleans a name it did not author before putting it on a button", () => {
    // The answer comes from another origin, so it is untrusted input even though it is only ever
    // display copy. Control characters go, whitespace is trimmed, absurd lengths are capped.
    expect(parseSilentSsoIdentity({ name: "  Ada  Lovelace " })).toEqual({
      label: "Ada Lovelace",
    });
    expect(parseSilentSsoIdentity({ name: "   " })).toBeNull();
    const long = parseSilentSsoIdentity({ name: "N".repeat(300) });
    expect(long?.label.length).toBeLessThanOrEqual(48);
  });

  it("says the right thing in both states", () => {
    expect(continueAsLabel(null)).toBe("Sign in with WitUS");
    expect(continueAsLabel({ label: "Ada" })).toBe("Continue as Ada");
  });
});

describe("the intended destination survives the ecosystem flow", () => {
  it("no longer hardcodes the home page as the callback", () => {
    const component = read("src/components/witus-sso-button.tsx");
    // The exact regression: `callbackURL: ${window.location.origin}/` sent every deep-linked
    // learner to the catalog instead of the lesson they asked for.
    expect(component).not.toMatch(/callbackURL:\s*`\$\{window\.location\.origin\}\/`/);
    expect(component).toContain("callbackURL: `${origin}${callbackURL}`");
    // And the login page hands it the value it already validated against the open-redirect guard.
    expect(read("src/app/login/page.tsx")).toContain("callbackURL={callbackURL}");
  });
});

describe("a failed check is invisible", () => {
  it("swallows every probe outcome and never renders an error", () => {
    const component = read("src/components/witus-sso-button.tsx");
    expect(component).toContain(".catch(() => {");
    // No error state to render, and no loading state that could hang: the button is fully usable
    // from first paint and only ever gains a better label.
    expect(component).not.toMatch(/useState[^\n]*[Ee]rror/);
    expect(component).not.toMatch(/useState[^\n]*[Ll]oading/);
    // The probe cannot hang the page open forever.
    expect(component).toContain("SILENT_SSO_TIMEOUT_MS");
    expect(component).toContain("controller.abort()");
  });
});
