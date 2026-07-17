// Shared types for the standards-alignment data — the concept-hub model.
//
// THE SHAPE, IN ONE PARAGRAPH: the catalog's teaching is analyzed ONCE into framework-agnostic
// COURSE CLAIMS (claims.ts) — "this course genuinely teaches X, here are the lessons". Each
// jurisdiction then maps ITS OWN codes onto those claims (data/<state>.ts): verbatim standard
// text + source + fetch date + coverage live on the state side; course slugs and lesson evidence
// are DERIVED from the claims. Adding a state therefore never re-reads the catalog — the
// course-side analysis is already done. Frameworks published by multi-state bodies (NGSS,
// Common Core) are mapped once in shared/ and ADOPTED by states, verbatim or with local code
// aliases, so they are never mapped 50 times. See index.ts for THE RULE that governs every entry.

import type { StateCode } from "./jurisdictions";

export type Coverage = "full" | "partial";

/** The subject a teacher files under. Drives the finder's subject filter. */
export type Subject =
  | "Social Studies"
  | "English/Language Arts"
  | "Science"
  | "Health & Wellness"
  | "Physical Education";

// ── The claims layer (course side, analyzed once) ─────────────────────────────

/**
 * One thing the catalog genuinely teaches, stated once, framework-agnostically. State files
 * reference claims by id; they never restate course evidence. A claim is only as good as its
 * lesson list — every claim was checked against ACTUAL lesson content, not lesson titles.
 */
export interface CourseClaim {
  id: string;
  /** What is taught, in our words — one sentence, specific enough to be falsifiable. */
  claim: string;
  /** Course slugs (as seeded) whose lessons teach it. */
  courseSlugs: string[];
  /** The specific lessons that do the teaching — this is the evidence. */
  lessons: string[];
}

// ── The state side (codes, verbatim text, coverage) ───────────────────────────

/**
 * One standard, as authored in a jurisdiction file or a shared framework: the code exactly as
 * printed, the standard's own words, and which course claims back it. Course slugs and lessons
 * are resolved from the claims at load time.
 */
export interface StandardRef {
  /** The code exactly as printed in the source document. */
  code: string;
  /** The standard's text, transcribed verbatim from the source document. */
  text: string;
  /** The course claims that back this standard (ids into claims.ts). */
  claimIds: string[];
  coverage: Coverage;
  /** Required when coverage is "partial": exactly what is and is not covered. */
  note?: string;
}

/** Framework metadata shared by state-owned and multi-state frameworks. */
export interface FrameworkMeta {
  /** The document's own title, as published. */
  name: string;
  publisher: string;
  /** The edition/year printed on the document itself. */
  version: string;
  /** Deep link to the document we actually read. */
  sourceUrl: string;
  /**
   * The day this framework's codes and verbatim text were retrieved from the publisher.
   * Rendered to teachers as provenance. If you edit an entry, you re-fetched it — update this.
   */
  fetchedOn: string;
  /** The subject shelf this framework sits on, for the finder's filter. */
  subject: Subject;
}

/** A framework a state publishes itself, with its standards nested (no frameworkId to typo). */
export interface OwnFramework extends FrameworkMeta {
  id: string;
  /** How this framework applies in this jurisdiction, and anything a teacher must know. */
  adoption: string;
  standards: StandardRef[];
}

/**
 * A framework published by a multi-state body (NGSS, Common Core), mapped ONCE in shared/.
 * States adopt it — verbatim, or with local code aliases — instead of re-mapping it.
 */
export interface SharedFramework extends FrameworkMeta {
  /** Unqualified id ("ngss"); expansion prefixes the state ("dc-ngss"). */
  id: string;
  standards: StandardRef[];
}

/** One state's adoption of a shared framework. */
export interface SharedAdoption {
  framework: SharedFramework;
  /** How THIS state came to be answerable to the shared framework — cite the adoption itself. */
  adoption: string;
  /**
   * Local code renames (canonical code → this state's code), for states that adopt the content
   * but print their own numbering. Omitted = adopted verbatim. Codes not present pass through
   * unchanged; an alias that names a code the shared framework doesn't have is a data bug and
   * the test suite fails on it.
   */
  aliases?: Record<string, string>;
}

/** An honest omission, rendered under "What we don't claim" on a state's page. */
export interface NotClaimedItem {
  heading: string;
  body: string;
}

/**
 * Everything one jurisdiction contributes. One file per state under data/ exports exactly one
 * of these as `JURISDICTION`; the generated index (pnpm gen:standards) discovers it — adding a
 * state requires zero hand-edited code change.
 */
export interface JurisdictionFile {
  state: StateCode;
  /** Frameworks this state publishes itself. */
  frameworks: OwnFramework[];
  /** Multi-state frameworks this state adopted (mapped once, in shared/). */
  adoptions?: SharedAdoption[];
  /** Standards/subjects considered and NOT claimed, published as loudly as the claims. */
  notClaimed: NotClaimedItem[];
}

// ── Resolved shapes (what the app and tests consume) ──────────────────────────

export interface StandardsFramework extends FrameworkMeta {
  id: string;
  /** The jurisdiction this framework belongs to (postal code, keyed into US_JURISDICTIONS). */
  state: StateCode;
  /** The jurisdiction a teacher is answerable to, as displayed. */
  jurisdiction: string;
  adoption: string;
}

/** A standard with its course evidence resolved from the claims layer. */
export interface StandardAlignment extends StandardRef {
  frameworkId: string;
  /** Derived: the union of the backing claims' course slugs. */
  courseSlugs: string[];
  /** Derived: the union of the backing claims' lessons — the evidence for the claim. */
  lessons: string[];
}

/** A course as resolved from THIS tenant's catalog (mirrors db/queries/standards.AlignedCourse). */
export interface AlignedCourseLike {
  id: string;
  title: string;
  slug: string;
}

export interface ScopedAlignment extends StandardAlignment {
  /** The subset of this standard's courses that THIS tenant actually publishes. */
  courses: AlignedCourseLike[];
}

export interface ScopedFramework {
  framework: StandardsFramework;
  alignments: ScopedAlignment[];
}

/**
 * One flattened (state x standard x course) cell of the cross-state matrix — the row shape the
 * /standards/matrix explorer browses. Produced by flattenAlignments() from the SAME scoped groups
 * the per-state finder renders, so the tenant boundary is inherited, not re-implemented: a row can
 * only exist for a course this tenant publishes. One standard covered by three of a tenant's
 * courses becomes three rows.
 */
export interface MatrixRow {
  /** Stable, unique key: `${frameworkId}::${code}::${courseSlug}`. */
  id: string;
  state: StateCode;
  /** The jurisdiction as displayed (e.g. "New York"). */
  stateName: string;
  frameworkId: string;
  /** The framework's published title. */
  frameworkName: string;
  subject: Subject;
  /** The standard's code, exactly as printed. */
  code: string;
  /** The standard's verbatim text (never altered — display only). */
  text: string;
  coverage: Coverage;
  /** Present when coverage is "partial": exactly what is and is not covered. */
  note?: string;
  /** Deep link to the source document a teacher can open to check the claim. */
  sourceUrl: string;
  /** The day this framework's codes and text were retrieved from the publisher. */
  fetchedOn: string;
  /** The single course (this tenant's) that this row claims coverage for. */
  course: AlignedCourseLike;
}
