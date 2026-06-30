import { describe, expect, it } from "vitest";
import { rewriteOrigin } from "@/lib/auth-url";

// The magic-link `url` Better-Auth hands to sendMagicLink: verify endpoint on the
// platform baseURL, carrying a relative callbackURL.
const platformLink =
  "https://learn.witus.online/api/auth/magic-link/verify?token=abc&callbackURL=%2F";

describe("rewriteOrigin (magic-link tenant pinning)", () => {
  it("rewrites the verify host to the tenant the user signed in from", () => {
    const out = new URL(rewriteOrigin(platformLink, "bettervice.club", "https"));
    expect(out.host).toBe("bettervice.club");
    expect(out.protocol).toBe("https:");
    expect(out.searchParams.get("token")).toBe("abc");
  });

  it("absolutizes a relative callbackURL onto the tenant origin (the bug)", () => {
    // Without this, verify resolves "/" against BETTER_AUTH_URL and bounces the
    // user to learn.witus.online after clicking the link on bettervice.club.
    const out = new URL(rewriteOrigin(platformLink, "bettervice.club", "https"));
    expect(out.searchParams.get("callbackURL")).toBe("https://bettervice.club/");
  });

  it("handles a relative callbackURL with a deeper path", () => {
    const link =
      "https://learn.witus.online/api/auth/magic-link/verify?token=t&callbackURL=%2Fmy-courses";
    const out = new URL(rewriteOrigin(link, "elementarymba.com", "https"));
    expect(out.searchParams.get("callbackURL")).toBe("https://elementarymba.com/my-courses");
  });

  it("leaves an absolute callbackURL untouched (originCheck guards it at verify)", () => {
    const link =
      "https://learn.witus.online/api/auth/magic-link/verify?token=t&callbackURL=https%3A%2F%2Fbettervice.club%2Fdashboard";
    const out = new URL(rewriteOrigin(link, "bettervice.club", "https"));
    expect(out.searchParams.get("callbackURL")).toBe("https://bettervice.club/dashboard");
  });

  it("absolutizes newUserCallbackURL and errorCallbackURL too", () => {
    const link =
      "https://learn.witus.online/api/auth/magic-link/verify?token=t&callbackURL=%2F&newUserCallbackURL=%2Fwelcome&errorCallbackURL=%2Foops";
    const out = new URL(rewriteOrigin(link, "bettervice.club", "https"));
    expect(out.searchParams.get("newUserCallbackURL")).toBe("https://bettervice.club/welcome");
    expect(out.searchParams.get("errorCallbackURL")).toBe("https://bettervice.club/oops");
  });

  it("defaults to http for localhost dev hosts", () => {
    const out = new URL(rewriteOrigin(platformLink, "bvc.localhost:3040", null));
    expect(out.protocol).toBe("http:");
    expect(out.host).toBe("bvc.localhost:3040");
    expect(out.searchParams.get("callbackURL")).toBe("http://bvc.localhost:3040/");
  });

  it("returns the url unchanged when no host is available", () => {
    expect(rewriteOrigin(platformLink, null, null)).toBe(platformLink);
  });
});
