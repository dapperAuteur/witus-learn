// Series previews: a course shown on a second school as the first course of a series whose rest
// lives on its home school (BAM's sharing rule, 2026-10-23; `schoolShareViolations` in
// scripts/lib/seed-registry.ts enforces the seed side). A preview says so, on its landing page and
// after its last lesson: "This series continues on <home school>", linking to the series there.
//
// A registry keyed by school and course slug (the CERT_DISCLAIMERS house pattern) rather than a
// column, because which school is "home" is a fact about the catalog's shape, decided by BAM, and
// it is checked offline against the seed registry by tests/series-previews.test.ts.
//
// FOR PREVIEWS ONLY. The seven business-formation courses in FULL_SHARE_TO_ELEMENTARY_MBA are shared
// whole, so the whole series is on both schools and there is nothing to continue elsewhere; the test
// fails if one of them is listed here. The first entry is FIRM-01 on Learn.WitUS, pointing to the
// How a Firm Works (FIRM) series on ElementaryMBA.

export interface SeriesPreview {
  /** Tenant slug of the school the rest of the series lives on, e.g. "elementary-mba". */
  homeSchool: string;
  /** The series' slug on the home school; the link goes to /series/<seriesSlug> there. */
  seriesSlug: string;
}

/** The home school's public identity, as read from its tenant row (src/db/queries/home-school.ts). */
export interface HomeSchool {
  /** Display name, e.g. "ElementaryMBA". */
  name: string;
  /** The school's primary host from tenant_domains, or null when it has none. */
  primaryHost: string | null;
  isActive: boolean;
  /** tenants.flags.comingSoon: the school renders a "launching soon" page instead of its catalog. */
  comingSoon: boolean;
}

/** What the notice renders. `href` is null when the link must stay hidden. */
export interface SeriesContinuation {
  schoolName: string;
  href: string | null;
}

/** Registry keyed by the PREVIEWING school's tenant slug, then the course slug. */
export const SERIES_PREVIEWS: Record<string, Record<string, SeriesPreview>> = {
  "learn-witus": {
    // FIRM-01 Read the Statements: the rest of How a Firm Works is on ElementaryMBA (scripts/seed-speedway.ts).
    "read-the-statements": { homeSchool: "elementary-mba", seriesSlug: "how-a-firm-works" },
  },
};

export function seriesPreviewFor(
  tenantSlug: string | null | undefined,
  courseSlug: string | null | undefined,
): SeriesPreview | null {
  if (!tenantSlug || !courseSlug) return null;
  return SERIES_PREVIEWS[tenantSlug]?.[courseSlug] ?? null;
}

/**
 * The notice for one preview. The link is hidden (href null) while the home school is coming soon
 * or inactive, because it would land on a "launching soon" page or a 404, and when the school has no
 * primary host, because a guessed address would break the authoritative-values rule. Null when the
 * home school is not found at all: a notice naming a school that does not exist says nothing true.
 */
export function seriesContinuation(preview: SeriesPreview, home: HomeSchool | null): SeriesContinuation | null {
  // BAM, 2026-10-23: while the home school is coming soon or switched off, the whole line is hidden,
  // not only the link. A preview must not point learners at a school they cannot open yet.
  if (!home || !home.isActive || home.comingSoon) return null;
  return {
    schoolName: home.name,
    href: home.primaryHost != null ? `https://${home.primaryHost}/series/${encodeURIComponent(preview.seriesSlug)}` : null,
  };
}
