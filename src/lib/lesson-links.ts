// "Where in the course does this appear" — the link half of the review-context feature.
//
// THE PROBLEM. Every review surface in this app asks for a judgment call on a fragment torn out of
// its lesson. /admin/citations shows a bare APA string and asks whether it supports "what the lesson
// claims". /admin/research asks about a hedge without showing the sentence that hedges.
// /admin/media shows a picture with no sight of the lesson it illustrates. A decision made blind is
// worse than no decision, because it CLOSES the item and nobody looks again.
//
// So each reviewable item now says which course and which lesson it came from and links straight to
// it. This module builds those links, and it is pure: the caller passes rows it already read through
// the tenant-scoped data-access layer, and nothing here touches the database or the request.
//
// TWO RULES, both about not lying to a reviewer:
//
//  1. NO LINK RATHER THAN A GUESSED LINK. A link is built only when the course AND the lesson were
//     both found in THIS tenant's rows. A citation registry entry is global (it is a property of the
//     text, not of a brand), so the same list renders on a school that does not host that course;
//     linking there would send a reviewer to a 404 at best and would assert something untrue at
//     worst. The surfaces show the course and lesson NAMES either way, since those come from the
//     registry and are facts about the source, and only the LINK is withheld.
//
//  2. AN AMBIGUOUS SLUG LINKS TO NOTHING. `courses.slug` is unique per (tenant, instructor), not per
//     tenant, so one brand may hold two courses with the same slug under different instructors. The
//     pretty URL /{username}/{slug} cannot say which. getCourseByIdOrSlug already returns null in
//     that case rather than taking the first row; this does the same, for the same reason.

/** One lesson of one course, as read through the scoped DAL. Enough to build a link and a label. */
export interface LessonLocationRow {
  courseId: string;
  courseSlug: string;
  courseTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  /** The instructor's public username, the other half of /{username}/{slug}. */
  username: string | null;
}

export interface CourseLocation {
  courseSlug: string;
  courseTitle: string;
  /** Null when the instructor has no public username, or when the slug is ambiguous. */
  username: string | null;
  /** True when this tenant holds more than one course at this slug. Links are withheld. */
  ambiguous: boolean;
  /** lessonSlug to lessonTitle, for the one unambiguous course at this slug. */
  lessonTitles: Map<string, string>;
}

export type LessonLinkIndex = Map<string, CourseLocation>;

/**
 * Fold scoped lesson rows into a lookup keyed by course slug.
 *
 * Ambiguity is decided on course ID, not on username: two courses at the same slug are two different
 * courses even if one instructor owns both, and merging their lesson lists would let a lesson title
 * from course A be shown for course B.
 */
export function buildLessonLinkIndex(rows: readonly LessonLocationRow[]): LessonLinkIndex {
  const courseIds = new Map<string, Set<string>>();
  for (const r of rows) {
    const set = courseIds.get(r.courseSlug);
    if (set) set.add(r.courseId);
    else courseIds.set(r.courseSlug, new Set([r.courseId]));
  }

  const index: LessonLinkIndex = new Map();
  for (const r of rows) {
    const ambiguous = (courseIds.get(r.courseSlug)?.size ?? 0) > 1;
    let loc = index.get(r.courseSlug);
    if (!loc) {
      loc = {
        courseSlug: r.courseSlug,
        courseTitle: r.courseTitle,
        username: ambiguous ? null : r.username,
        ambiguous,
        lessonTitles: new Map(),
      };
      index.set(r.courseSlug, loc);
    }
    if (ambiguous) {
      loc.ambiguous = true;
      loc.username = null;
      loc.lessonTitles.clear();
      continue;
    }
    if (r.lessonSlug) loc.lessonTitles.set(r.lessonSlug, r.lessonTitle);
  }
  return index;
}

/** The course landing page, or null when this tenant cannot unambiguously address it. */
export function courseHref(index: LessonLinkIndex, courseSlug: string | null): string | null {
  if (!courseSlug) return null;
  const loc = index.get(courseSlug);
  if (!loc || loc.ambiguous || !loc.username) return null;
  return `/${encodeURIComponent(loc.username)}/${encodeURIComponent(loc.courseSlug)}`;
}

/**
 * The lesson itself, or null. The lesson must be one this tenant actually holds: a slug that came
 * from the citation registry but is absent here means the brand hosts a different edit of the
 * course, and a link would point at a lesson that is not there.
 */
export function lessonHref(
  index: LessonLinkIndex,
  courseSlug: string | null,
  lessonSlug: string | null,
): string | null {
  if (!courseSlug || !lessonSlug) return null;
  const base = courseHref(index, courseSlug);
  if (!base) return null;
  if (!index.get(courseSlug)?.lessonTitles.has(lessonSlug)) return null;
  return `${base}/lesson/${encodeURIComponent(lessonSlug)}`;
}

export interface ReviewLocation {
  /** The page to open, or null when this tenant cannot address it. */
  href: string | null;
  /** True when href is the lesson itself; false when it is only the course landing page. */
  isLesson: boolean;
  /** Why the lesson could not be linked, in words a reviewer can act on. Null when it could. */
  note: string | null;
}

/**
 * Where a reviewable item lives, and what to say when it cannot be linked.
 *
 * Every branch that returns no link returns a reason with it. "No link" on its own reads as a bug
 * and gets ignored; "this school does not host that course" tells a reviewer that the item belongs
 * to somebody else's catalog and they can move on, which is the actual answer.
 */
export function reviewLocation(
  index: LessonLinkIndex,
  courseSlug: string | null,
  lessonSlug: string | null,
): ReviewLocation {
  if (!courseSlug) {
    return { href: null, isLesson: false, note: "No course was recorded for this item." };
  }
  const loc = index.get(courseSlug);
  if (!loc) {
    return {
      href: null,
      isLesson: false,
      note: "This school does not host that course, so there is nothing to open here.",
    };
  }
  if (loc.ambiguous) {
    return {
      href: null,
      isLesson: false,
      note: "Two courses on this school share that slug, so the lesson cannot be addressed unambiguously.",
    };
  }
  if (!loc.username) {
    return {
      href: null,
      isLesson: false,
      note: "The instructor of that course has no public profile page yet, so the course has no readable address.",
    };
  }
  const course = courseHref(index, courseSlug);
  if (!lessonSlug) {
    return { href: course, isLesson: false, note: "No lesson was recorded for this item." };
  }
  const lesson = lessonHref(index, courseSlug, lessonSlug);
  if (lesson) return { href: lesson, isLesson: true, note: null };
  return {
    href: course,
    isLesson: false,
    note: "That lesson is not in this school's copy of the course.",
  };
}

/** This tenant's title for a course slug, or null when it does not hold one. */
export function courseTitleFor(index: LessonLinkIndex, courseSlug: string | null): string | null {
  if (!courseSlug) return null;
  const loc = index.get(courseSlug);
  return loc && !loc.ambiguous ? loc.courseTitle : null;
}

/** This tenant's title for a lesson slug, or null when it does not hold one. */
export function lessonTitleFor(
  index: LessonLinkIndex,
  courseSlug: string | null,
  lessonSlug: string | null,
): string | null {
  if (!courseSlug || !lessonSlug) return null;
  const loc = index.get(courseSlug);
  if (!loc || loc.ambiguous) return null;
  return loc.lessonTitles.get(lessonSlug) ?? null;
}
