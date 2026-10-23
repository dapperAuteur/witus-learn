import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import type { TenantRecord } from "@/lib/tenant";
import { schoolDisclaimerFor } from "@/lib/school-disclaimer";
import { SiteFooter } from "@/components/site-footer";
import { EcosystemFooter } from "@/components/ecosystem-footer";
import { ComingSoon } from "@/components/coming-soon";

// BAM's wording, 2026-10-23. Pinned verbatim: a paraphrase that drops "not accredited" or "any
// academic degree" weakens exactly the claim the notice exists to make.
const EMBA =
  "ElementaryMBA is a trademark and the name of this school, not a degree. It is not a university and not accredited by any accrediting body, and nothing here grants or counts toward an MBA or any academic degree. The name describes the subjects, not a credential.";

const tenant = (slug: string, name: string): TenantRecord =>
  ({ slug, name, tagline: null, theme: {}, legal: {}, flags: {} }) as unknown as TenantRecord;

describe("school disclaimer", () => {
  it("carries BAM's text for ElementaryMBA and nothing for other schools", () => {
    expect(schoolDisclaimerFor("elementary-mba")?.text).toBe(EMBA);
    expect(schoolDisclaimerFor("learn-witus")).toBeNull();
    expect(schoolDisclaimerFor(null)).toBeNull();
  });

  it("renders in both footers and on the coming-soon front page for ElementaryMBA only", () => {
    const emba = tenant("elementary-mba", "ElementaryMBA");
    for (const el of [SiteFooter, EcosystemFooter, ComingSoon]) {
      expect(renderToStaticMarkup(createElement(el, { tenant: emba })), el.name).toContain(EMBA);
      expect(renderToStaticMarkup(createElement(el, { tenant: tenant("learn-witus", "Learn.WitUS") })), el.name).not.toContain(
        "not a degree",
      );
    }
  });
});
