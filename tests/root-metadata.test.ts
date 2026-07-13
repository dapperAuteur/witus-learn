import { describe, expect, it } from "vitest";
import { tenantMetadata, tenantViewport } from "@/lib/branding";

// The root layout's generateMetadata/generateViewport run on EVERY route — including /offline and
// /downloads, which exist to work with no network. A tenant lookup there hits the DB, so a DB
// outage used to 500 every page (see the comment in src/app/layout.tsx). The layout now catches
// that and passes `null`, which only works because the branding helpers degrade to neutral
// defaults rather than throwing. These tests pin THAT contract: if someone makes the helpers
// assume a non-null tenant, the outage fallback silently becomes an outage again.
describe("root chrome degrades to neutral branding when the tenant can't be resolved", () => {
  it("tenantMetadata(null) returns usable metadata instead of throwing", () => {
    const meta = tenantMetadata(null, "https://learn.witus.online");
    expect(meta.title).toBeTruthy();
    expect(meta.description).toBeTruthy();
  });

  it("tenantMetadata(null) works with no base URL either (offline / unknown host)", () => {
    expect(() => tenantMetadata(null, null)).not.toThrow();
  });

  it("tenantViewport(null) still yields a theme color", () => {
    expect(tenantViewport(null).themeColor).toBeTruthy();
  });
});
