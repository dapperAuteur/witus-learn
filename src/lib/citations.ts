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
  /**
   * The sentence in the lesson that carries this source's in-text citation, when one was found.
   *
   * This is the whole question the reviewer is being asked, in one line: the board asks whether the
   * source "says what the lesson claims", and until now it showed the source and not the claim. It
   * is computed at generation time by `pnpm gen:citations` (src/lib/lesson-excerpt.ts) and committed
   * with the rest of the registry, so this module still reads no database at request time.
   *
   * ABSENT MEANS NOT FOUND, never "there is none". A course that cites in a style the matcher does
   * not recognise gets no excerpt and the reviewer follows the lesson link instead. Showing a
   * nearby-looking sentence would be worse than showing nothing: it reads as the lesson's own words.
   */
  excerpt?: string;
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
  "voice-acting",
  "well-orientation-scope",
  "well-coaching-psychology",
  "well-coaching-movement",
  "well-coaching-nutrition",
  "well-recovery-stress",
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
  // Here Be Dragons (plans/58). Staged as a set, because the series' whole subject is the difference
  // between a claim and the evidence for it: a course teaching that, with sources nobody has checked,
  // would be the most self-undermining thing in the catalog. Several of these deliberately cite
  // CONTESTED scholarship (the griffin thesis and its 2024 rebuttal, the Brontosaurus proposal, the
  // Deccan-tempo papers that disagree with each other), so a verifier should expect to confirm that a
  // source exists and says what the lesson says it says, NOT that the field agrees with it.
  "monsters-at-the-edge-of-the-map",
  "giants-dragons-and-the-bones",
  "deep-time-and-the-dinosaur-renaissance",
  "wrong-for-good-reasons",
  "writing-the-world",
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
