// ─────────────────────────────────────────────────────────────────────────────
// Standards alignment for the catalog — the data behind /standards (the state-standards finder).
//
// ⚠️ THE RULE THIS MODULE LIVES BY — read before editing any jurisdiction file.
//
// Every entry is a claim, made to teachers and to homeschooling parents who may file it with a
// state, about what a public education standard requires. A wrong or invented code is worse
// than no standards page at all. Therefore:
//
//   1. Every `code` and every `text` was FETCHED FROM THE PUBLISHER and transcribed verbatim.
//      `text` is the standard's own words — not a paraphrase, not a summary, not a memory.
//      If you cannot fetch it, you do not cite it. There is no "close enough".
//   2. Every alignment was checked against the ACTUAL LESSON CONTENT (content/bvc/*.csv and
//      scripts/data/*-course.ts), not against a lesson title. A title is not evidence.
//   3. `coverage: "partial"` is not a weaker "full" — it is a promise that we looked and the
//      match is genuinely incomplete. Say WHY in `note`. Never round a partial up.
//   4. Standards get revised. Each framework's `fetchedOn` is the day it was retrieved from the
//      publisher; it is rendered in the UI, and the UI tells the teacher to confirm against
//      their own jurisdiction's current requirements. If you edit an entry, you re-fetched it,
//      so update that framework's date.
//   5. Standards considered and REJECTED go in the jurisdiction's `notClaimed` list — published
//      as loudly as the claims. That list is the evidence the map was not padded.
//
// HOW THIS SCALES TO 50 STATES: one file per jurisdiction (indiana.ts, washington-dc.ts, …),
// each exporting a single `JurisdictionData`. Register it in JURISDICTION_DATA below and the
// finder picks it up — the picker, the per-state pages, the filters, and the isolation tests all
// derive from this registry. Nothing else needs to change. States not in the registry render as
// "not mapped yet" in the finder (with AZ/AR flagged as next), never as errors.
//
// THE TENANT BOUNDARY IS UNCHANGED: this table knows course SLUGS, not tenant ids. The page
// resolves slugs against the tenant's own published catalog via db/queries/standards.ts (the
// load-bearing tenant filter), and scopeAlignments() below drops every claim the tenant's
// catalog cannot back. A tenant that hosts none of a standard's courses can never surface it.
// ─────────────────────────────────────────────────────────────────────────────

import { INDIANA } from "./indiana";
import { WASHINGTON_DC } from "./washington-dc";
import {
  NEXT_UP,
  US_JURISDICTIONS,
  isStateCode,
  jurisdictionName,
  type Jurisdiction,
  type StateCode,
} from "./jurisdictions";
import type {
  AlignedCourseLike,
  Coverage,
  JurisdictionData,
  NotClaimedItem,
  ScopedAlignment,
  ScopedFramework,
  StandardAlignment,
  StandardsFramework,
  Subject,
} from "./types";

export { NEXT_UP, US_JURISDICTIONS, isStateCode, jurisdictionName };
export type {
  AlignedCourseLike,
  Coverage,
  Jurisdiction,
  JurisdictionData,
  NotClaimedItem,
  ScopedAlignment,
  ScopedFramework,
  StandardAlignment,
  StandardsFramework,
  StateCode,
  Subject,
};

// ── The registry — add a state's file here and the finder grows by one state ──

export const JURISDICTION_DATA: JurisdictionData[] = [INDIANA, WASHINGTON_DC];

export const FRAMEWORKS: StandardsFramework[] = JURISDICTION_DATA.flatMap((j) => j.frameworks);
export const ALIGNMENTS: StandardAlignment[] = JURISDICTION_DATA.flatMap((j) => j.alignments);

/** States that actually have mapped data — derived, never hand-maintained. */
export function mappedStates(): StateCode[] {
  return JURISDICTION_DATA.map((j) => j.state);
}

export function jurisdictionData(state: StateCode): JurisdictionData | undefined {
  return JURISDICTION_DATA.find((j) => j.state === state);
}

/**
 * The most recent day any framework's codes were retrieved from a publisher. Kept for callers
 * that need a single provenance date; each framework carries its own `fetchedOn`, and the UI
 * prefers the per-framework date.
 */
export const STANDARDS_FETCHED_ON: string = FRAMEWORKS.map((f) => f.fetchedOn)
  .sort()
  .at(-1)!;

// ── Derived helpers (pure — the unit suite exercises these with no DB) ────────

/** Every course slug any standard depends on. The page asks the DB which of these THIS tenant has. */
export function allAlignedCourseSlugs(): string[] {
  return [...new Set(ALIGNMENTS.flatMap((a) => a.courseSlugs))];
}

/**
 * Narrow the full alignment table down to what THIS tenant can honestly claim.
 *
 * The tenant boundary: `available` is the set of courses the caller resolved from the DB with
 * a tenant-scoped query. A standard survives only if at least one of its courses is in that
 * set, and it is then rewritten to name ONLY those courses. So a tenant that shares just
 * Season 1 (Learn.WitUS, ElementaryMBA) can never surface a Season 2/3 standard, and never
 * links a course it does not have — the tenant's own catalog decides what it may claim.
 *
 * Pass `state` to narrow to one jurisdiction (the finder's per-state view). No `state` keeps
 * the old behaviour: every jurisdiction with at least one claim this tenant can back.
 */
export function scopeAlignments(
  available: Map<string, AlignedCourseLike>,
  state?: StateCode,
): ScopedFramework[] {
  const scoped: ScopedAlignment[] = [];

  for (const a of ALIGNMENTS) {
    const courses = a.courseSlugs
      .map((slug) => available.get(slug))
      .filter((c): c is AlignedCourseLike => c !== undefined);
    if (courses.length === 0) continue;
    scoped.push({ ...a, courses });
  }

  // Keep the declared framework order, and show "full" before "partial" within a framework so a
  // teacher reads the strongest claims first — never the other way round.
  return FRAMEWORKS.filter((f) => state === undefined || f.state === state)
    .map((framework) => ({
      framework,
      alignments: scoped
        .filter((a) => a.frameworkId === framework.id)
        .sort((a, b) => (a.coverage === b.coverage ? 0 : a.coverage === "full" ? -1 : 1)),
    }))
    .filter((g) => g.alignments.length > 0);
}

/** The subjects present in a set of scoped groups, in first-seen order (drives the filter). */
export function subjectsIn(groups: ScopedFramework[]): Subject[] {
  return [...new Set(groups.map((g) => g.framework.subject))];
}

/** The distinct courses appearing in a set of scoped groups, alphabetical (drives the filter). */
export function coursesIn(groups: ScopedFramework[]): AlignedCourseLike[] {
  const bySlug = new Map<string, AlignedCourseLike>();
  for (const g of groups) {
    for (const a of g.alignments) for (const c of a.courses) bySlug.set(c.slug, c);
  }
  return [...bySlug.values()].sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Apply the finder's subject/course filters to scoped groups. Filtering never invents data:
 * it only narrows what scopeAlignments already allowed, so the tenant boundary is preserved.
 */
export function filterGroups(
  groups: ScopedFramework[],
  opts: { subject?: Subject; courseSlug?: string },
): ScopedFramework[] {
  return groups
    .filter((g) => opts.subject === undefined || g.framework.subject === opts.subject)
    .map((g) => ({
      framework: g.framework,
      alignments:
        opts.courseSlug === undefined
          ? g.alignments
          : g.alignments.filter((a) => a.courses.some((c) => c.slug === opts.courseSlug)),
    }))
    .filter((g) => g.alignments.length > 0);
}

/** Counts for the page's summary line. Derived, never typed in by hand. */
export function summarizeStandards(groups: ScopedFramework[]): {
  total: number;
  full: number;
  partial: number;
  frameworks: number;
  jurisdictions: number;
} {
  const all = groups.flatMap((g) => g.alignments);
  return {
    total: all.length,
    full: all.filter((a) => a.coverage === "full").length,
    partial: all.filter((a) => a.coverage === "partial").length,
    frameworks: groups.length,
    jurisdictions: new Set(groups.map((g) => g.framework.jurisdiction)).size,
  };
}

/** A plain-text rendering a reporting homeschooler can paste into a filing. */
export function toPlainText(groups: ScopedFramework[], brand: string): string {
  const lines: string[] = [
    `Standards alignment — ${brand}`,
    `Mapped by ${brand} against the published standards; each framework below shows the date its codes and text were retrieved from the publisher.`,
    `Standards are revised; confirm against your jurisdiction's current requirements.`,
    "",
  ];

  for (const { framework, alignments } of groups) {
    lines.push(`${framework.jurisdiction} — ${framework.name} (${framework.version})`);
    lines.push(`Publisher: ${framework.publisher}`);
    lines.push(`Source: ${framework.sourceUrl}`);
    lines.push(`Retrieved: ${framework.fetchedOn}`);
    lines.push("");
    for (const a of alignments) {
      lines.push(`  ${a.code} [${a.coverage.toUpperCase()}]`);
      lines.push(`    ${a.text}`);
      lines.push(`    Covered by: ${a.courses.map((c) => c.title).join("; ")}`);
      for (const l of a.lessons) lines.push(`      - ${l}`);
      if (a.note) lines.push(`    Note: ${a.note}`);
      lines.push("");
    }
  }
  return lines.join("\n");
}
