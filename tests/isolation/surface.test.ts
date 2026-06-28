import { describe, expect, it } from "vitest";
import { ageGateCookieName, isBlockedSurfacePath, normalizeHost } from "@/lib/tenant-util";

describe("normalizeHost", () => {
  it("lowercases and strips port + whitespace", () => {
    expect(normalizeHost("BVC.localhost:3040")).toBe("bvc.localhost");
    expect(normalizeHost("  Acme.Localhost ")).toBe("acme.localhost");
  });
  it("strips a leading www. so www.X resolves like X", () => {
    expect(normalizeHost("WWW.BetterVice.Club:443")).toBe("bettervice.club");
  });
  it("returns empty for missing host", () => {
    expect(normalizeHost(null)).toBe("");
    expect(normalizeHost(undefined)).toBe("");
  });
});

describe("ageGateCookieName is per-tenant", () => {
  it("namespaces by slug so brands never share an acknowledgment", () => {
    expect(ageGateCookieName("better-vice-club")).toBe("better-vice-club_age_ok");
    expect(ageGateCookieName("acme-academy")).not.toBe(ageGateCookieName("better-vice-club"));
  });
});

describe("route-surface gating", () => {
  it("blocks CentOS-style routes", () => {
    for (const p of ["/dashboard", "/dashboard/courses", "/pricing", "/modules/1", "/academy"]) {
      expect(isBlockedSurfacePath(p)).toBe(true);
    }
  });
  it("allows the tenant surface", () => {
    for (const p of ["/", "/explore", "/paths", "/terms", "/privacy", "/my-courses", "/verify/x"]) {
      expect(isBlockedSurfacePath(p)).toBe(false);
    }
  });
});
