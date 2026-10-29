import { readFileSync } from "node:fs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { endSessionEndpointFromDiscovery } from "@/lib/silent-sso";
import {
  LOCAL_SIGN_OUT_DESTINATION,
  SIGN_OUT_EVERYWHERE_HELP,
  SIGN_OUT_EVERYWHERE_LABEL,
  SIGN_OUT_LABEL,
  endSessionNavigationUrl,
  signOutEverywhere,
  signOutHere,
} from "@/lib/sign-out";
import { isWitusBrandedHost, tenantUsesWitusSso } from "@/lib/witus-host";

// Sign-out semantics (BAM, 2026-10-29, witus task 128 option (b)). "Sign out" ends only this
// app's session and never visits the IdP. "Sign out of WitUS everywhere" also ends the WitUS
// session, local first, and exists only on a school the IdP has registered. This file replaces
// the 2026-08-30 "global sign-out" tests, which pinned the opposite behaviour for the plain button.

// The buttons import the router, the browser auth client and the Cache API helpers; rendering
// markup needs none of them.
vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }) }));
vi.mock("@/lib/auth-client", () => ({ authClient: { signOut: vi.fn() } }));
vi.mock("@/lib/offline", () => ({
  settleOfflineSaves: vi.fn(),
  purgeSensitivePages: vi.fn(),
  clearVisitedPages: vi.fn(),
}));

const { SignOutButton, SignOutEverywhereButton } = await import("@/components/sign-out-button");

const END_SESSION =
  "https://accounts.witus.online/api/idp/oauth2/endsession?client_id=learn-client";
const ORIGIN = "https://learn.witus.online";

/** Records every step in order so a test can assert the sequence, not just the calls. */
function recorder() {
  const calls: string[] = [];
  return {
    calls,
    purgeOffline: async () => {
      calls.push("purge");
    },
    signOut: async () => {
      calls.push("signOut");
    },
  };
}

describe('"Sign out" (this app only)', () => {
  it("purges offline copies, ends the local session, then goes to / and never to the IdP", async () => {
    const r = recorder();
    await signOutHere({ ...r, goLocal: (path) => r.calls.push(`go:${path}`) });
    expect(LOCAL_SIGN_OUT_DESTINATION).toBe("/");
    expect(r.calls).toEqual(["purge", "signOut", "go:/"]);
  });

  it("still leaves when the purge or the sign-out call fails", async () => {
    const goLocal = vi.fn();
    await signOutHere({
      purgeOffline: () => Promise.reject(new Error("no Cache API")),
      signOut: () => Promise.reject(new Error("down")),
      goLocal,
    });
    expect(goLocal).toHaveBeenCalledWith("/");
  });

  it('is named exactly "Sign out" and carries no IdP URL', () => {
    const html = renderToStaticMarkup(createElement(SignOutButton));
    expect(SIGN_OUT_LABEL).toBe("Sign out");
    expect(html).toMatch(/<button[^>]*>Sign out<\/button>/);
    expect(html).not.toContain("WitUS");
    expect(html).not.toContain("endsession");
  });

  it("keeps the menu hooks the dropdowns use for arrow-key navigation", () => {
    const html = renderToStaticMarkup(createElement(SignOutButton, { menuItem: true }));
    expect(html).toContain('role="menuitem"');
    expect(html).toContain('data-menu-item="true"');
  });
});

describe('"Sign out of WitUS everywhere"', () => {
  it("is absent when the end-session URL is null (no OIDC client, or a white-label tenant)", () => {
    expect(
      renderToStaticMarkup(createElement(SignOutEverywhereButton, { endSessionUrl: null })),
    ).toBe("");
  });

  it("is present with the help text wired through aria-describedby when configured", () => {
    const html = renderToStaticMarkup(
      createElement(SignOutEverywhereButton, { endSessionUrl: END_SESSION }),
    );
    expect(SIGN_OUT_EVERYWHERE_LABEL).toBe("Sign out of WitUS everywhere");
    expect(SIGN_OUT_EVERYWHERE_HELP).toBe(
      "Also signs you out of WitUS. Other WitUS apps you are signed in to stay signed in until you sign out of them.",
    );
    const describedBy = html.match(/aria-describedby="([^"]+)"/)?.[1];
    expect(describedBy).toBeTruthy();
    expect(html).toContain(`>${SIGN_OUT_EVERYWHERE_LABEL}</button>`);
    expect(html).toContain(`id="${describedBy}"`);
    expect(html).toContain(SIGN_OUT_EVERYWHERE_HELP);
    // The IdP URL is used on click only, never rendered.
    expect(html).not.toContain("endsession");
  });

  it("in a dropdown, is a menu item and keeps its help text out of the menu's children", () => {
    const html = renderToStaticMarkup(
      createElement(SignOutEverywhereButton, { endSessionUrl: END_SESSION, menuItem: true }),
    );
    expect(html).toContain('role="menuitem"');
    expect(html).toContain('data-menu-item="true"');
    const describedBy = html.match(/aria-describedby="([^"]+)"/)?.[1];
    expect(html).toMatch(new RegExp(`<p id="${describedBy}" aria-hidden="true"`));
  });

  it("purges offline copies, then ends the local session, BEFORE navigating to the IdP", async () => {
    const calls: string[] = [];
    let finishSignOut!: () => void;
    const done = signOutEverywhere({
      purgeOffline: async () => {
        calls.push("purge");
      },
      signOut: () =>
        new Promise<void>((resolve) => {
          calls.push("signOut:start");
          finishSignOut = () => {
            calls.push("signOut:done");
            resolve();
          };
        }),
      navigate: (url) => calls.push(`navigate:${url}`),
      endSessionUrl: END_SESSION,
      origin: ORIGIN,
    });
    await new Promise((r) => setTimeout(r, 0));
    expect(calls).toEqual(["purge", "signOut:start"]);
    finishSignOut();
    await done;
    expect(calls[2]).toBe("signOut:done");
    expect(calls[3]).toMatch(/^navigate:/);
  });

  it("still hands off to the IdP when the local sign-out throws", async () => {
    const navigate = vi.fn();
    await signOutEverywhere({
      purgeOffline: async () => {},
      signOut: () => Promise.reject(new Error("down")),
      navigate,
      endSessionUrl: END_SESSION,
      origin: ORIGIN,
    });
    expect(navigate).toHaveBeenCalledTimes(1);
  });

  it("navigates to endsession with client_id and an encoded origin + '/'", async () => {
    const navigate = vi.fn();
    await signOutEverywhere({
      ...recorder(),
      navigate,
      endSessionUrl: END_SESSION,
      origin: ORIGIN,
    });
    expect(navigate).toHaveBeenCalledWith(
      "https://accounts.witus.online/api/idp/oauth2/endsession?client_id=learn-client" +
        "&post_logout_redirect_uri=https%3A%2F%2Flearn.witus.online%2F",
    );
    expect(endSessionNavigationUrl(END_SESSION, ORIGIN)).toBe(navigate.mock.calls[0][0]);
  });
});

describe("the end-session URL", () => {
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

  it("sends client_id, which the IdP requires, baked in on the server", () => {
    // Verified by reading better-auth's endSession endpoint, not the OIDC spec: a
    // post_logout_redirect_uri without a verifiable id_token_hint is rejected with
    // invalid_request unless client_id is present. We have no id_token in the browser.
    const env = readFileSync("src/lib/env.ts", "utf8");
    expect(env).toContain("client_id=${encodeURIComponent(clientId)}");
  });
});

describe("white-label tenants never see the everywhere control", () => {
  it("is gated on the server by the same rule as the sign-in half", () => {
    // The isolation invariant applies to logout exactly as it does to login: a white-label
    // school's learner redirected to accounts.witus.online learns the ecosystem exists.
    const header = readFileSync("src/components/site-header.tsx", "utf8");
    expect(header).toMatch(/tenantUsesWitusSso\(tenant\)\s*\?\s*witusEndSessionEndpoint\s*:\s*null/);
    const login = readFileSync("src/app/login/page.tsx", "utf8");
    expect(login).toMatch(/const showWitusSso = tenantUsesWitusSso\(tenant\)/);
    // The host test is for BRANDING only; it must not gate the IdP handoff.
    expect(header).not.toMatch(/isWitusBrandedHost/);
    expect(login).not.toMatch(/isWitusBrandedHost/);
    // The buttons hold no URL literal, so a caller who forgets the gate leaks nothing.
    const button = readFileSync("src/components/sign-out-button.tsx", "utf8");
    expect(button.replace(/\/\/.*$/gm, "")).not.toMatch(/https:\/\//);
  });

  it("plain Sign out is never handed the IdP URL, on desktop or mobile", () => {
    for (const file of ["src/components/site-header.tsx", "src/components/mobile-nav.tsx"]) {
      const src = readFileSync(file, "utf8");
      expect(src).toMatch(/<SignOutButton\b/);
      expect(src).not.toMatch(/<SignOutButton\b[^>]*endSessionUrl/);
      expect(src).toMatch(/<SignOutEverywhereButton[\s\S]{0,80}endSessionUrl=\{endSessionUrl\}/);
    }
  });

  it("hands off to the IdP only from a school the IdP has registered", () => {
    // 2026-09-21: signing out on the Acme demo (acme.learning.witus.online, a WitUS SUBDOMAIN, so
    // WitUS-branded) sent an unregistered post_logout_redirect_uri and the IdP refused it. The IdP
    // registers learn.witus.online only (gemini/witus lib/identity/clients.ts); tenant hosts never.
    const flags = (ecosystemSso?: boolean) => ({ ecosystemSso });
    expect(tenantUsesWitusSso({ slug: "learn-witus", flags: flags() })).toBe(true);
    expect(tenantUsesWitusSso({ slug: "acme-academy", flags: flags() })).toBe(false);
    expect(tenantUsesWitusSso({ slug: "better-vice-club", flags: flags(false) })).toBe(false);
    expect(tenantUsesWitusSso({ slug: "any-tenant", flags: flags(true) })).toBe(true);
    expect(tenantUsesWitusSso(null)).toBe(false);
    // Branding is a separate, wider question: Acme keeps the ecosystem footer.
    expect(isWitusBrandedHost("acme.learning.witus.online")).toBe(true);
  });
});
