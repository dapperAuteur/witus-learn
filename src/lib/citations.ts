// Citation registry — every source cited by a staged course, as a checkable list.
//
// This is LIST A of the two-list verification system (docs/citation-verification-plan.md).
// List B is src/lib/research-checks.ts: the small, hand-written queue of facts Claude could not
// confirm. They are deliberately separate surfaces, because mixing ten questions that need judgment
// into six thousand citations that are probably fine buries the ten that matter.
//
// WHERE THE DATA COMES FROM. `pnpm gen:citations` reads `lessons.text_content` from the DATABASE for
// the staged courses and writes src/lib/citation-content/citations.ts, which this file imports.
// Reading the database rather than scripts/data/*-course.ts is the load-bearing choice: a large part
// of this catalog is not committed TypeScript. BVC episodes come from CSVs in the gitignored
// content/bvc/, health courses are generated, FAA and the languages have their own seeders. A
// generator reading only the committed course modules would cover about two thirds of the library
// and report success, which is the failure mode this whole feature exists to prevent.
//
// Nothing here touches the filesystem or the database at request time.

import { STAGED_CITATIONS } from "@/lib/citation-content/citations";

export type CitationStatus = "unverified" | "verified" | "broken" | "mismatch";

export const CITATION_STATUS_LABEL: Record<CitationStatus, string> = {
  unverified: "Not checked yet",
  verified: "Verified: exists and supports the claim",
  broken: "Link is dead or the source cannot be found",
  mismatch: "Source exists but does not say what the lesson claims",
};

export interface Citation {
  /** `<courseSlug>:<hash>` — the join key for course_citation_checks.citation_key.
   *
   *  The hash is of the NORMALIZED entry text, so reordering a Sources list does not disturb the
   *  keys, and editing a citation DOES mint a new one. That second half is deliberate: an edited
   *  citation is a different claim and should be re-verified. It is the opposite call from
   *  quiz_attempts.questionKey, where a reworded prompt must not reset a learner's history, and the
   *  difference is that a quiz answer is a person's record while a citation check is a statement
   *  about the text as it stands today. */
  key: string;
  courseSlug: string;
  courseTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  /** The citation entry as it appears in the lesson, minus the leading bullet. */
  text: string;
  /** First URL or DOI found in the entry, when there is one. Most of the checking is clicking this. */
  url?: string;
}

/**
 * Courses whose citations have been generated, in rollout order.
 *
 * STAGE 1 (2026-08-03): the four courses just created, which nobody has ever checked, plus the
 * twelve BAM is enrolled in, because those are the ones he can read alongside the citation list.
 *
 * To advance a stage: add slugs here, run `pnpm gen:citations`, commit the regenerated module. There
 * is no code change after stage 1. The plan for stages 2-5 is in docs/citation-verification-plan.md.
 */
export const STAGED_COURSES: string[] = [
  // Newly created, never reviewed by anyone
  "bvc-taster-wine",
  "bvc-taster-coffee",
  "bvc-taster-chocolate",
  "surplus-funds-basics",
  // BAM's enrolled courses
  "ai-b1-prompt-engineering",
  "ai-literacy",
  "coffee",
  "faa-part-107",
  "green-book-how-to-read-a-route",
  "harvard-ed-l-d",
  "how-to-create-a-course",
  "langgraph-triage-agent",
  "nasm-cpt",
  "read-your-bodys-data",
  "spanish",
  "state-civics-in",
];

export const CITATIONS: Citation[] = STAGED_CITATIONS;

export function getCitation(key: string): Citation | undefined {
  return CITATIONS.find((c) => c.key === key);
}

export interface CitationCourseGroup {
  courseSlug: string;
  courseTitle: string;
  citations: Citation[];
}

/** Grouped by course, in STAGED_COURSES order so the newest and least-checked sit at the top. */
export function citationsByCourse(limitToCourses?: string[]): CitationCourseGroup[] {
  const allowed = limitToCourses ? new Set(limitToCourses) : null;
  const groups = new Map<string, CitationCourseGroup>();
  for (const c of CITATIONS) {
    if (allowed && !allowed.has(c.courseSlug)) continue;
    const g = groups.get(c.courseSlug);
    if (g) g.citations.push(c);
    else groups.set(c.courseSlug, { courseSlug: c.courseSlug, courseTitle: c.courseTitle, citations: [c] });
  }
  const order = new Map(STAGED_COURSES.map((s, i) => [s, i] as const));
  return [...groups.values()].sort(
    (a, b) => (order.get(a.courseSlug) ?? 999) - (order.get(b.courseSlug) ?? 999),
  );
}
