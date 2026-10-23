// School-name disclaimers (sibling of cert-disclaimer.ts, same pattern). A school whose NAME could be
// read as a credential says, in one fixed sentence, what the name is and is not. ElementaryMBA is the
// case that started it: "MBA" is a degree, and this school grants none (BAM, 2026-10-23). A registry
// keyed by tenant slug makes the notice a data fact every surface renders, instead of copy each page
// remembers or forgets.
//
// Where it renders: the school's front page (all three states: coming soon, learner dashboard,
// catalog), its footer on every page (SiteFooter and EcosystemFooter), the chromeless embed view,
// every completion artifact (the /verify certificate page and the certificate email), the /login page,
// and every /api/v1 response as `schoolDisclaimer`. Not on /kids (BAM, 2026-10-23).
//
// Edit copy here ONLY; never paraphrase it at a call site.

export interface SchoolDisclaimer {
  /** The rendered disclaimer, verbatim. */
  text: string;
}

/** Registry keyed by tenant slug. */
export const SCHOOL_DISCLAIMERS: Record<string, SchoolDisclaimer> = {
  "elementary-mba": {
    text:
      "ElementaryMBA is a trademark and the name of this school, not a degree. It is not a university " +
      "and not accredited by any accrediting body, and nothing here grants or counts toward an MBA or " +
      "any academic degree. The name describes the subjects, not a credential.",
  },
};

export function schoolDisclaimerFor(tenantSlug: string | null | undefined): SchoolDisclaimer | null {
  if (!tenantSlug) return null;
  return SCHOOL_DISCLAIMERS[tenantSlug] ?? null;
}
