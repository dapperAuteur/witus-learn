import { describe, expect, it } from "vitest";
import { brandName, tenantMetadata } from "@/lib/branding";
import { organizationJsonLd } from "@/lib/seo/json-ld";
import { ACME, BVC } from "./fixtures";

// SEO/branding must reference ONLY the resolved tenant. A leak here puts one
// brand's name on another's domain (OG/JSON-LD/title) — exactly the CentOS bug
// this rebuild fixes.
describe("branding + SEO are tenant-scoped (no cross-tenant leak)", () => {
  it("brandName returns only the tenant's own name", () => {
    expect(brandName(BVC)).toBe("Better Vice Club");
    expect(brandName(ACME)).toBe("Acme Academy");
    expect(brandName(null)).toBe("Learn.WitUS");
  });

  it("metadata never mentions another tenant", () => {
    const bvc = JSON.stringify(tenantMetadata(BVC));
    expect(bvc).toContain("Better Vice Club");
    expect(bvc).not.toContain("Acme");

    const acme = JSON.stringify(tenantMetadata(ACME));
    expect(acme).toContain("Acme Academy");
    expect(acme).not.toContain("Better Vice Club");
  });

  it("Organization JSON-LD uses the tenant's name + its own origin", () => {
    const ld = organizationJsonLd(BVC, "https://bettervice.club");
    expect(ld.name).toBe("Better Vice Club");
    expect(ld.url).toBe("https://bettervice.club");
    expect(JSON.stringify(ld)).not.toContain("Acme");
  });
});
