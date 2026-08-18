import { describe, expect, it } from "vitest";
import type { TenantTheme } from "@/db/schema/tenancy";
import { applyThemePatch, httpsUrl, ThemePatchSchema } from "@/lib/theme-settings";

// The self-serve brand-identity slice of PATCH /api/admin/tenant: validation must only
// admit https URLs (or "" to clear), and the merge must never touch keys the form does
// not own (name, colors, manifestUrl). Pure, so pinned here without a route or database.

describe("httpsUrl", () => {
  it("accepts a valid https URL", () => {
    expect(httpsUrl.safeParse("https://cdn.example.com/logo.png").success).toBe(true);
  });

  it("accepts the empty string (clears the key)", () => {
    expect(httpsUrl.safeParse("").success).toBe(true);
  });

  it("rejects http, other schemes, and non-URLs", () => {
    expect(httpsUrl.safeParse("http://cdn.example.com/logo.png").success).toBe(false);
    expect(httpsUrl.safeParse("javascript:alert(1)").success).toBe(false);
    expect(httpsUrl.safeParse("data:image/png;base64,AAAA").success).toBe(false);
    expect(httpsUrl.safeParse("//cdn.example.com/logo.png").success).toBe(false);
    expect(httpsUrl.safeParse("logo.png").success).toBe(false);
  });

  it("rejects URLs beyond the length cap", () => {
    expect(httpsUrl.safeParse(`https://x.example/${"a".repeat(500)}`).success).toBe(false);
  });
});

describe("ThemePatchSchema", () => {
  it("every field is optional (a partial patch parses)", () => {
    expect(ThemePatchSchema.safeParse({}).success).toBe(true);
    expect(ThemePatchSchema.safeParse({ wordmark: "BVC" }).success).toBe(true);
  });

  it("themeColor takes a 6-digit hex or the empty string, nothing else", () => {
    expect(ThemePatchSchema.safeParse({ themeColor: "#993C1D" }).success).toBe(true);
    expect(ThemePatchSchema.safeParse({ themeColor: "" }).success).toBe(true);
    expect(ThemePatchSchema.safeParse({ themeColor: "#fff" }).success).toBe(false);
    expect(ThemePatchSchema.safeParse({ themeColor: "red" }).success).toBe(false);
  });

  it("bounds the text fields", () => {
    expect(ThemePatchSchema.safeParse({ wordmark: "a".repeat(81) }).success).toBe(false);
    expect(ThemePatchSchema.safeParse({ shortName: "a".repeat(31) }).success).toBe(false);
  });
});

describe("applyThemePatch", () => {
  const stored: TenantTheme = {
    name: "Better Vice Club",
    wordmark: "BVC",
    logoUrl: "https://cdn.example.com/old-logo.png",
    themeColor: "#111111",
    manifestUrl: "https://cdn.example.com/manifest.json",
    colors: { accent: "#993C1D", accentFg: "#ffffff" },
  };

  it("undefined leaves a stored key alone", () => {
    const next = applyThemePatch(stored, { wordmark: "Better Vice" });
    expect(next.wordmark).toBe("Better Vice");
    expect(next.logoUrl).toBe("https://cdn.example.com/old-logo.png");
    expect(next.themeColor).toBe("#111111");
  });

  it("empty string deletes the key so the platform default applies", () => {
    const next = applyThemePatch(stored, { logoUrl: "", themeColor: "" });
    expect("logoUrl" in next).toBe(false);
    expect("themeColor" in next).toBe(false);
  });

  it("whitespace-only counts as clearing, and stored values are trimmed", () => {
    const next = applyThemePatch(stored, { wordmark: "   ", shortName: "  BVC  " });
    expect("wordmark" in next).toBe(false);
    expect(next.shortName).toBe("BVC");
  });

  it("never touches keys outside the self-serve set", () => {
    const next = applyThemePatch(stored, {
      wordmark: "",
      shortName: "X",
      logoUrl: "",
      faviconUrl: "https://cdn.example.com/fav.png",
      ogDefaultUrl: "",
      themeColor: "#222222",
    });
    expect(next.name).toBe("Better Vice Club");
    expect(next.manifestUrl).toBe("https://cdn.example.com/manifest.json");
    expect(next.colors).toEqual({ accent: "#993C1D", accentFg: "#ffffff" });
  });

  it("does not mutate the stored theme", () => {
    const before = structuredClone(stored);
    applyThemePatch(stored, { wordmark: "", logoUrl: "https://cdn.example.com/new.png" });
    expect(stored).toEqual(before);
  });
});
