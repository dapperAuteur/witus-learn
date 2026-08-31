import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { endSessionEndpointFromDiscovery } from "@/lib/silent-sso";

// BAM chose GLOBAL sign-out on 2026-08-30: "signout signs out of every app". Two things have to
// hold, and neither is visible by clicking around: the endpoint is DERIVED rather than hardcoded,
// and a tenant outside the ecosystem is never sent to the shared IdP.
describe("global sign-out", () => {
  it("derives the logout endpoint from the discovery URL, never a literal", () => {
    expect(
      endSessionEndpointFromDiscovery(
        "https://accounts.witus.online/api/idp/.well-known/openid-configuration",
      ),
    ).toBe("https://accounts.witus.online/api/idp/oauth2/endsession");
  });

  it("follows the discovery URL to a different origin and mount path", () => {
    // The authoritative-values rule in practice: point it somewhere else and it goes there,
    // which is what proves the production host is not baked in.
    expect(
      endSessionEndpointFromDiscovery("https://id.example.test/auth/.well-known/openid-configuration"),
    ).toBe("https://id.example.test/auth/oauth2/endsession");
  });

  it("stays dark rather than guessing when discovery is missing or unusable", () => {
    for (const bad of [null, undefined, "", "not-a-url", "https://example.test/no-marker"]) {
      expect(endSessionEndpointFromDiscovery(bad)).toBeNull();
    }
  });

  it("hands off to the IdP only AFTER the local session is destroyed", () => {
    // Order is the safety property. If the IdP refuses, is unreachable, or the redirect never
    // lands, the person must still be signed out here. A redirect placed before signOut() turns
    // any IdP failure into "I clicked sign out and I am still signed in".
    const src = readFileSync("src/components/sign-out-button.tsx", "utf8");
    const signOut = src.indexOf("authClient.signOut()");
    const handoff = src.indexOf("window.location.assign");
    expect(signOut).toBeGreaterThan(-1);
    expect(handoff).toBeGreaterThan(-1);
    expect(signOut).toBeLessThan(handoff);
  });

  it("never sends an off-ecosystem tenant to the shared IdP", () => {
    // The isolation invariant applies to logout exactly as it does to login: a white-label
    // school's learner redirected to accounts.witus.online learns the ecosystem exists.
    const header = readFileSync("src/components/site-header.tsx", "utf8");
    expect(header).toMatch(/isWitusBrandedHost\(hostHeader\)\s*\|\|\s*tenant\.flags\.ecosystemSso === true/);
    // Resolved from the request host on the server, never from anything the client supplies.
    expect(header).toContain('hdrs.get("x-forwarded-host")');
    // The button itself holds no URL literal, so a caller who forgets the gate leaks nothing.
    const button = readFileSync("src/components/sign-out-button.tsx", "utf8");
    expect(button.replace(/\/\/.*$/gm, "")).not.toMatch(/https:\/\//);
  });

  it("sends client_id, which the IdP requires, and joins the query correctly", () => {
    // Verified by reading better-auth's endSession endpoint, not the OIDC spec: a
    // post_logout_redirect_uri without a verifiable id_token_hint is rejected with
    // invalid_request unless client_id is present. We have no id_token in the browser, so the
    // endpoint carries client_id and the button must append with `&`, not `?`. Getting this
    // wrong is a 400 that only appears in production.
    const env = readFileSync("src/lib/env.ts", "utf8");
    expect(env).toContain("client_id=${encodeURIComponent(clientId)}");
    const button = readFileSync("src/components/sign-out-button.tsx", "utf8");
    expect(button).toContain("&post_logout_redirect_uri=");
    expect(button).not.toContain("?post_logout_redirect_uri=");
    // Trailing slash: the IdP exact-matches against the registered `https://learn.witus.online/`.
    expect(button).toContain("`${window.location.origin}/`");
  });

  it("says it signs you out of WitUS, not just this site", () => {
    // Ending five other sessions without saying so reads as a bug the first time someone loses
    // a session in another tab.
    const button = readFileSync("src/components/sign-out-button.tsx", "utf8");
    expect(button).toContain('"Sign out of WitUS"');
  });
});
