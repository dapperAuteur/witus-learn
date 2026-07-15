// Shared types for the standards-alignment data. The data itself lives in one file per
// jurisdiction (indiana.ts, washington-dc.ts, …) so the model scales to 50 states without any
// single file becoming unreadable. See index.ts for THE RULE that governs every entry.

import type { StateCode } from "./jurisdictions";

export type Coverage = "full" | "partial";

/** The subject a teacher files under. Drives the finder's subject filter. */
export type Subject =
  | "Social Studies"
  | "English/Language Arts"
  | "Science"
  | "Health & Wellness"
  | "Physical Education";

export interface StandardsFramework {
  id: string;
  /** The jurisdiction this framework belongs to (postal code, keyed into US_JURISDICTIONS). */
  state: StateCode;
  /** The jurisdiction a teacher is answerable to, as displayed. */
  jurisdiction: string;
  /** The subject shelf this framework sits on, for the finder's filter. */
  subject: Subject;
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
  /** How this framework came to apply in this jurisdiction, and anything a teacher must know. */
  adoption: string;
}

export interface StandardAlignment {
  frameworkId: string;
  /** The code exactly as printed in the source document. */
  code: string;
  /** The standard's text, transcribed verbatim from the source document. */
  text: string;
  /** Course slugs (as seeded) whose lessons cover this standard. */
  courseSlugs: string[];
  /** The specific lessons that do the covering — this is the evidence for the claim. */
  lessons: string[];
  coverage: Coverage;
  /** Required when coverage is "partial": exactly what is and is not covered. */
  note?: string;
}

/** An honest omission, rendered under "What we don't claim" on a state's page. */
export interface NotClaimedItem {
  heading: string;
  body: string;
}

/** Everything one jurisdiction contributes. One file per state exports exactly one of these. */
export interface JurisdictionData {
  state: StateCode;
  frameworks: StandardsFramework[];
  alignments: StandardAlignment[];
  /** Standards/subjects considered and NOT claimed, published as loudly as the claims. */
  notClaimed: NotClaimedItem[];
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
