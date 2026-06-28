import { describe, expect, it } from "vitest";

// DB-backed isolation check. Skipped unless a real DATABASE_URL is present, so the
// pure suite stays runnable offline. Run against the seeded BVC + Acme tenants:
//   DATABASE_URL=... pnpm test     (or export it from .env.local first)
// Later phases extend this file with the content-leak assertions (catalog,
// by-id/slug 404, enroll 404, CYOA, AI recs, sitemap) once courses exist.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");

describe.skipIf(!HAS_DB)("host → tenant resolution (DB)", () => {
  it("resolves each seeded host to its own tenant and rejects unknown hosts", async () => {
    const { getTenantByHost } = await import("@/lib/tenant");

    const bvc = await getTenantByHost("bvc.localhost");
    const acme = await getTenantByHost("acme.localhost");

    expect(bvc?.slug).toBe("better-vice-club");
    expect(acme?.slug).toBe("acme-academy");
    expect(bvc?.id).toBeTruthy();
    expect(bvc?.id).not.toBe(acme?.id);

    // Unknown host must not fall back to a default brand.
    expect(await getTenantByHost("unknown.example")).toBeNull();
  });
});
