// Vetting ("Coming soon") gate. PURE (no next/headers, no db) so the isolation suite can
// exercise every branch offline. See plans/52 for the decision record.
//
// A course is UNVETTED when `courses.vetted_at IS NULL`. The migration that added the column
// deliberately did NOT backfill, so every course that existed before it reads as unvetted until
// the platform owner works through them.
//
// The rule, in one sentence: the landing page is public, the course behind it is closed.
//
//   DISCOVERY surfaces INCLUDE an unvetted course, badged "Coming soon".
//     Catalog cards, the home page, on-site search, category counts, series listings, instructor
//     pages, the sitemap, the course landing page itself, and its OG card / JSON-LD. The landing
//     page carries the description and the standards the course meets, which is exactly what
//     teachers and schools shop on, so hiding it would throw away real public value. It just must
//     not OFFER the course: no price, no enroll button, and no price/offer structured data.
//
//   LESSON-ROUTING surfaces EXCLUDE an unvetted course.
//     Anything that hands a learner a LESSON url: cross-course CYOA (match_lessons_global),
//     AI recommendations, the read-only api-v1 lesson endpoints. An unvetted course has no
//     reachable lessons for a stranger, so routing there is a broken dead end. When a surface is
//     ambiguous about whether it routes to a lesson or to a landing page, exclude it.
//
// Full CONTENT access (lessons, lesson titles, media URLs) needs one of:
//   platform owner · the course's own instructor · an EXISTING enrollment · (later) an invited
//   auditor. Enrollees matter most: the no-backfill migration un-vets every course at once, so
//   without them every learner mid-course, including everyone who paid, would lose access.

/** A course is unvetted until the platform owner stamps `vetted_at`. */
export function isUnvetted(course: { vettedAt: Date | null }): boolean {
  return course.vettedAt == null;
}

/**
 * Who the viewer is, relative to ONE course. Every flag is resolved server-side (session +
 * tenant-scoped reads); nothing here may come from the client.
 */
export interface CourseViewer {
  /**
   * The platform owner, or THIS course's own instructor. Deliberately NOT brand_admins or
   * moderators, mirroring the private-course rule canAccessCourse already documents.
   */
  isOwnerOrInstructor: boolean;
  /** Has an active enrollment in THIS course (isEnrolled in src/db/queries/enrollment.ts). */
  isEnrolled: boolean;
  /**
   * Reserved for invite-to-audit (plans/52 §5, out of scope for the first ship): an accepted
   * `course_auditors` row for this course. Left optional and unset so adding it later is one
   * call site, not a restructure. Defaults to false, which is today's behaviour.
   */
  isAuditor?: boolean;
}

/** May this viewer reach an unvetted course's CONTENT (lessons, titles, media URLs)? */
export function canSeeUnvettedContent(viewer: CourseViewer): boolean {
  return viewer.isOwnerOrInstructor || viewer.isEnrolled || viewer.isAuditor === true;
}

/**
 * The single decision for a course landing page.
 *
 *   "not-found" → 404 (a draft, or private, to someone who can't edit it). Never a redirect:
 *                 that would leak that the row exists.
 *   "coming-soon" → render the PUBLIC landing face: title, description, standards, share card.
 *                 No lesson list, no lesson titles, no media URLs, no price, no enroll button.
 *   "open" → the normal course experience.
 */
export function courseViewGate(input: {
  isPublished: boolean;
  visibility: string;
  vettedAt: Date | null;
  /** Passes the draft/private gate (canAccessCourse: owner, instructor, or tenant admin). */
  isEditor: boolean;
  /** Passes the unvetted CONTENT gate (canSeeUnvettedContent), a stricter set. */
  canSeeUnvetted: boolean;
}): "not-found" | "coming-soon" | "open" {
  if ((!input.isPublished || input.visibility === "private") && !input.isEditor) {
    return "not-found";
  }
  if (isUnvetted(input) && !input.canSeeUnvetted) return "coming-soon";
  return "open";
}

/**
 * Does this course belong in the sitemap? Unvetted courses DO (their landing page is real,
 * indexable public content); drafts, private courses, and courses with no pretty URL do not,
 * because those URLs would 404 and a sitemap must never list a URL that 404s.
 */
export function includeInSitemap(course: {
  isPublished: boolean;
  visibility: string;
  slug: string | null;
}): boolean {
  return course.isPublished && course.visibility !== "private" && Boolean(course.slug);
}
