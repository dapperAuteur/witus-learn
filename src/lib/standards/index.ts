// ─────────────────────────────────────────────────────────────────────────────
// Standards alignment for the catalog — the data behind /standards (the state-standards finder).
//
// ⚠️ THE RULE THIS MODULE LIVES BY — read before editing claims.ts, shared/*, or data/*.
//
// Every entry is a claim, made to teachers and to homeschooling parents who may file it with a
// state, about what a public education standard requires. A wrong or invented code is worse
// than no standards page at all. Therefore:
//
//   1. Every `code` and every `text` was FETCHED FROM THE PUBLISHER and transcribed verbatim.
//      `text` is the standard's own words — not a paraphrase, not a summary, not a memory.
//      If you cannot fetch it, you do not cite it. There is no "close enough".
//   2. Every course claim (claims.ts) was checked against the ACTUAL LESSON CONTENT
//      (content/bvc/*.csv and scripts/data/*-course.ts), not against a lesson title. A title
//      is not evidence.
//   3. `coverage: "partial"` is not a weaker "full" — it is a promise that we looked and the
//      match is genuinely incomplete. Say WHY in `note`. Never round a partial up.
//   4. Standards get revised. Each framework's `fetchedOn` is the day it was retrieved from the
//      publisher; it is rendered in the UI, and the UI tells the teacher to confirm against
//      their own jurisdiction's current requirements. If you edit an entry, you re-fetched it,
//      so update that framework's date.
//   5. Standards considered and REJECTED go in the jurisdiction's `notClaimed` list — published
//      as loudly as the claims. That list is the evidence the map was not padded.
//
// HOW THIS SCALES TO 51 JURISDICTIONS (the concept-hub model):
//   · claims.ts — the catalog analyzed ONCE into framework-agnostic course claims.
//   · shared/   — frameworks published by multi-state bodies (NGSS, Common Core), mapped ONCE;
//     a state ADOPTS them (verbatim or with local code aliases) instead of re-mapping.
//   · data/<state>.ts — that state's codes, verbatim text, and coverage, referencing claims.
//     Discovered by the committed, generated data/index.generated.ts (`pnpm gen:standards`) —
//     adding a state is one new file plus a regenerate, zero hand-edited code change.
// So mapping state #3..#51 means reading THAT STATE'S documents, never re-reading the catalog.
//
// THE TENANT BOUNDARY IS UNCHANGED: this table knows course SLUGS, not tenant ids. The page
// resolves slugs against the tenant's own published catalog via db/queries/standards.ts (the
// load-bearing tenant filter), and scopeAlignments() below drops every claim the tenant's
// catalog cannot back. A tenant that hosts none of a standard's courses can never surface it.
// ─────────────────────────────────────────────────────────────────────────────

import { COURSE_CLAIMS, getClaim } from "./claims";
import { JURISDICTION_FILES } from "./data/index.generated";
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
  CourseClaim,
  Coverage,
  JurisdictionFile,
  MatrixRow,
  NotClaimedItem,
  ScopedAlignment,
  ScopedFramework,
  SharedAdoption,
  StandardAlignment,
  StandardRef,
  StandardsFramework,
  Subject,
} from "./types";

export {
  COURSE_CLAIMS,
  JURISDICTION_FILES,
  NEXT_UP,
  US_JURISDICTIONS,
  isStateCode,
  jurisdictionName,
};
export type {
  AlignedCourseLike,
  CourseClaim,
  Coverage,
  Jurisdiction,
  JurisdictionFile,
  MatrixRow,
  NotClaimedItem,
  ScopedAlignment,
  ScopedFramework,
  StandardAlignment,
  StandardsFramework,
  StateCode,
  Subject,
};

// ── Resolution: expand adoptions, join standards to their course claims ───────

function resolveStandard(frameworkId: string, s: StandardRef): StandardAlignment {
  const claims = s.claimIds.map(getClaim); // throws on a typo'd id — tests import this module
  return {
    ...s,
    frameworkId,
    courseSlugs: [...new Set(claims.flatMap((c) => c.courseSlugs))],
    lessons: [...new Set(claims.flatMap((c) => c.lessons))],
  };
}

function expandAdoption(
  state: StateCode,
  a: SharedAdoption,
): {
  framework: StandardsFramework;
  alignments: StandardAlignment[];
} {
  const id = `${state.toLowerCase()}-${a.framework.id}`;
  for (const canonical of Object.keys(a.aliases ?? {})) {
    if (!a.framework.standards.some((s) => s.code === canonical)) {
      throw new Error(`standards: ${state} aliases unknown ${a.framework.id} code "${canonical}"`);
    }
  }
  return {
    framework: {
      id,
      state,
      jurisdiction: jurisdictionName(state),
      adoption: a.adoption,
      name: a.framework.name,
      publisher: a.framework.publisher,
      version: a.framework.version,
      sourceUrl: a.framework.sourceUrl,
      fetchedOn: a.framework.fetchedOn,
      subject: a.framework.subject,
    },
    alignments: a.framework.standards.map((s) =>
      resolveStandard(id, { ...s, code: a.aliases?.[s.code] ?? s.code }),
    ),
  };
}

function resolveJurisdiction(j: JurisdictionFile): {
  frameworks: StandardsFramework[];
  alignments: StandardAlignment[];
} {
  const frameworks: StandardsFramework[] = [];
  const alignments: StandardAlignment[] = [];

  for (const f of j.frameworks) {
    frameworks.push({
      id: f.id,
      state: j.state,
      jurisdiction: jurisdictionName(j.state),
      adoption: f.adoption,
      name: f.name,
      publisher: f.publisher,
      version: f.version,
      sourceUrl: f.sourceUrl,
      fetchedOn: f.fetchedOn,
      subject: f.subject,
    });
    for (const s of f.standards) alignments.push(resolveStandard(f.id, s));
  }
  for (const a of j.adoptions ?? []) {
    const expanded = expandAdoption(j.state, a);
    frameworks.push(expanded.framework);
    alignments.push(...expanded.alignments);
  }
  return { frameworks, alignments };
}

const RESOLVED = JURISDICTION_FILES.map((j) => ({ file: j, ...resolveJurisdiction(j) }));

export const FRAMEWORKS: StandardsFramework[] = RESOLVED.flatMap((r) => r.frameworks);
export const ALIGNMENTS: StandardAlignment[] = RESOLVED.flatMap((r) => r.alignments);

/** States that actually have mapped data — derived, never hand-maintained. */
export function mappedStates(): StateCode[] {
  return JURISDICTION_FILES.map((j) => j.state);
}

export function jurisdictionData(state: StateCode): JurisdictionFile | undefined {
  return JURISDICTION_FILES.find((j) => j.state === state);
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

/**
 * Flatten scoped framework groups into one row per (standard x course) — the cross-state matrix.
 *
 * TENANT BOUNDARY: this takes the OUTPUT of scopeAlignments(), which has already dropped every
 * standard no in-catalog course backs and rewritten each standard to name only THIS tenant's
 * courses. flattenAlignments never reaches back to the raw ALIGNMENTS table, so it cannot re-admit
 * a course the tenant does not publish. Pass scopeAlignments(available) with NO state to get every
 * mapped jurisdiction at once (the explorer's default view); the row's own `state` field is how the
 * client narrows back down. Adding a state (OH/GA next) needs zero change here — the rows are
 * derived from mappedStates()/the registry via scopeAlignments.
 */
export function flattenAlignments(groups: ScopedFramework[]): MatrixRow[] {
  const rows: MatrixRow[] = [];
  for (const { framework, alignments } of groups) {
    for (const a of alignments) {
      for (const course of a.courses) {
        rows.push({
          id: `${framework.id}::${a.code}::${course.slug}`,
          state: framework.state,
          stateName: framework.jurisdiction,
          frameworkId: framework.id,
          frameworkName: framework.name,
          subject: framework.subject,
          code: a.code,
          text: a.text,
          coverage: a.coverage,
          note: a.note,
          sourceUrl: framework.sourceUrl,
          fetchedOn: framework.fetchedOn,
          course,
        });
      }
    }
  }
  return rows;
}

/** A plain-text rendering a reporting homeschooler can paste into a filing. */
export function toPlainText(groups: ScopedFramework[], brand: string): string {
  const lines: string[] = [
    `Standards alignment, ${brand}`,
    `Mapped by ${brand} against the published standards; each framework below shows the date its codes and text were retrieved from the publisher.`,
    `Standards are revised; confirm against your jurisdiction's current requirements.`,
    "",
  ];

  for (const { framework, alignments } of groups) {
    lines.push(`${framework.jurisdiction}, ${framework.name} (${framework.version})`);
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

/**
 * The standards a single course meets, grouped by jurisdiction, for display ON the course page.
 *
 * Educators shop on standards coverage, so a course that meets 40 standards across 12 states should
 * say so where the course is, not only on a separate standards page they have to know exists. This
 * returns just enough for a compact, collapsible summary: which jurisdictions, how many standards in
 * each, and the total. The full detail stays at /academic-standards?course=<slug>, which this links
 * to, so the course page stays clean.
 *
 * Returns an empty array for an unmapped course, and the caller renders nothing. Never invent a
 * claim: an unmapped course showing "0 standards" would be worse than showing nothing, because it
 * reads as "meets none" when it means "not analysed yet". See scripts/check-standards-coverage.ts,
 * which is the guard that keeps that backlog visible.
 */
export function standardsForCourse(courseSlug: string): {
  jurisdictions: { state: StateCode; jurisdiction: string; count: number }[];
  total: number;
} {
  const byState = new Map<StateCode, { jurisdiction: string; count: number }>();
  const frameworkById = new Map(FRAMEWORKS.map((f) => [f.id, f]));

  for (const a of ALIGNMENTS) {
    if (!a.courseSlugs.includes(courseSlug)) continue;
    const f = frameworkById.get(a.frameworkId);
    if (!f) continue;
    const cur = byState.get(f.state);
    if (cur) cur.count += 1;
    else byState.set(f.state, { jurisdiction: f.jurisdiction, count: 1 });
  }

  const jurisdictions = [...byState.entries()]
    .map(([state, v]) => ({ state, jurisdiction: v.jurisdiction, count: v.count }))
    .sort((a, b) => b.count - a.count || a.jurisdiction.localeCompare(b.jurisdiction));

  return { jurisdictions, total: jurisdictions.reduce((n, j) => n + j.count, 0) };
}
