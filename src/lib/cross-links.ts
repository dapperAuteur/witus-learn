// Cross-course link registry: every place one course's lesson TALKS ABOUT another course, offered
// to the owner as a candidate link and rendered to learners only once he approves it.
//
// WHY IT IS A REVIEW QUEUE AND NOT AN AUTOMATIC LINK. `pnpm cross-links` (scripts/find-cross-links.ts)
// finds mentions mechanically, and its own header says the loudest true thing about them: whether
// two courses SHOULD link is a judgment call. A title match can be a genuine pointer ("the argument
// in Who Gets Named applies here") or it can be a coincidence of ordinary English. Linking every
// match would put wrong links in front of learners; linking none wastes the connections that are
// most of this catalog's value now that it is past 200 courses. So a human decides, once, per
// mention, and the decision is data rather than an edit to the lesson prose.
//
// WHERE THE DATA COMES FROM. `pnpm gen:cross-links` reads `lessons.text_content` from the DATABASE
// and writes src/lib/cross-link-content/cross-links.ts, which this file imports. Reading the
// database rather than scripts/data/*-course.ts is the same load-bearing choice `pnpm gen:citations`
// made, for the same reason: BVC episodes come from CSVs in the gitignored content/bvc/, the health
// courses are generated, FAA and the languages have their own seeders, and a generator reading only
// the committed course modules would silently cover about two thirds of the library and report
// success. The report script still reads source files, because it is a developer tool run offline
// and an undercount there costs nothing; a SHORT owner queue that looks complete is the failure this
// generator avoids.
//
// Nothing here touches the filesystem or the database at request time.

import { CROSS_LINK_CANDIDATES, CROSS_LINKS_GENERATED_AT } from "@/lib/cross-link-content/cross-links";

export { CROSS_LINKS_GENERATED_AT };

export interface CrossLinkCandidate {
  /** The course whose lesson carries the mention. */
  sourceCourseSlug: string;
  sourceCourseTitle: string;
  /** The lesson inside that course. */
  sourceLessonSlug: string;
  sourceLessonTitle: string;
  /** The course being talked about. */
  targetCourseSlug: string;
  targetCourseTitle: string;
  /** How it was found: the target's exact title in the prose, or its slug. */
  via: "title" | "slug";
  /**
   * The sentence the mention sits in, quoted from the lesson.
   *
   * REQUIRED, and that is the point. The owner has to be able to tell a real pointer from a
   * coincidence without opening the lesson, because a decision made blind is worse than no decision:
   * it CLOSES the item and nobody looks again (src/lib/lesson-links.ts says the same thing about
   * links). A mention whose sentence cannot be located is not offered as a candidate at all, rather
   * than offered with a blank where the evidence goes.
   */
  sentence: string;
}

/**
 * The identity of a candidate, and of the decision recorded against it: the triple of source course,
 * source lesson and target course. Same shape as the columns on cross_link_approvals, so a row and a
 * registry entry are matched without either side owning an opaque key the other has to store.
 */
export function crossLinkKey(c: {
  sourceCourseSlug: string;
  sourceLessonSlug: string;
  targetCourseSlug: string;
}): string {
  return `${c.sourceCourseSlug}|${c.sourceLessonSlug}|${c.targetCourseSlug}`;
}

export interface CrossLinkGroup {
  courseSlug: string;
  courseTitle: string;
  candidates: CrossLinkCandidate[];
}

/** Candidates grouped by the course that does the mentioning, which is how the board is reviewed. */
export function groupedCrossLinks(
  candidates: readonly CrossLinkCandidate[] = CROSS_LINK_CANDIDATES,
): CrossLinkGroup[] {
  const byCourse = new Map<string, CrossLinkGroup>();
  for (const c of candidates) {
    const group = byCourse.get(c.sourceCourseSlug);
    if (group) group.candidates.push(c);
    else
      byCourse.set(c.sourceCourseSlug, {
        courseSlug: c.sourceCourseSlug,
        courseTitle: c.sourceCourseTitle,
        candidates: [c],
      });
  }
  return [...byCourse.values()].sort((a, b) => a.courseTitle.localeCompare(b.courseTitle));
}

export { CROSS_LINK_CANDIDATES };

/** Is this triple one the registry actually found? The API asks before writing a decision. */
export function isKnownCandidate(
  triple: { sourceCourseSlug: string; sourceLessonSlug: string; targetCourseSlug: string },
  candidates: readonly CrossLinkCandidate[] = CROSS_LINK_CANDIDATES,
): boolean {
  const key = crossLinkKey(triple);
  return candidates.some((c) => crossLinkKey(c) === key);
}

// ── Resolving a target course inside ONE tenant ──────────────────────────────────────────────────
//
// THE HAZARD THIS HALF EXISTS FOR. The registry is GLOBAL (a mention is a property of the text) and
// the catalog is PER TENANT. An approval is per tenant, so tenant B never inherits tenant A's
// decision, but even inside one tenant the approved TARGET may be a course this school does not
// host, or holds unpublished, or holds twice under two instructors. Rendering a link then would send
// a learner to a 404 and would assert that this school teaches something it does not.
//
// So the same two rules src/lib/lesson-links.ts states are applied here, in the same words:
//   1. NO LINK RATHER THAN A GUESSED LINK. The target must be a course found in THIS tenant's rows.
//   2. AN AMBIGUOUS SLUG LINKS TO NOTHING. `courses.slug` is unique per (tenant, instructor), so one
//      brand may hold two courses at one slug; /{username}/{slug} cannot say which.
// Plus one this surface adds: an UNPUBLISHED target is not a discovery surface a stranger may be
// routed to, so it links to nothing either.
//
// The difference from the review boards is what happens on a miss. There, the reviewer is TOLD why
// there is no link, because a silent blank reads as a bug. Here the audience is a learner who never
// knew a candidate existed, so the lesson renders NOTHING: no card, no heading, no "unavailable"
// text. Show nothing rather than a 404.

/** One course of one tenant, as read through the scoped DAL. Enough to build a link and a label. */
export interface CourseLocationRow {
  courseId: string;
  courseSlug: string;
  courseTitle: string;
  /** The instructor's public username, the other half of /{username}/{slug}. */
  username: string | null;
  isPublished: boolean;
}

export interface CrossLinkTarget {
  courseSlug: string;
  /** THIS school's title for the course, or null when it does not hold it. */
  courseTitle: string | null;
  /** Where a learner would be sent, or null when this tenant cannot address it. */
  href: string | null;
  /** Why there is no link, in words an owner can act on. Null when there is one. */
  note: string | null;
}

export type CrossLinkTargetIndex = Map<string, CourseLocationRow[]>;

/** Fold scoped course rows into a lookup keyed by slug. Ambiguity is decided on course ID. */
export function buildCrossLinkTargets(rows: readonly CourseLocationRow[]): CrossLinkTargetIndex {
  const index: CrossLinkTargetIndex = new Map();
  for (const r of rows) {
    if (!r.courseSlug) continue;
    const list = index.get(r.courseSlug);
    // Two rows for one course id would double-count into a false ambiguity, so dedupe on id.
    if (list) {
      if (!list.some((x) => x.courseId === r.courseId)) list.push(r);
    } else index.set(r.courseSlug, [r]);
  }
  return index;
}

/** Where an approved target course lives for this tenant, and what to say when it lives nowhere. */
export function crossLinkTarget(
  index: CrossLinkTargetIndex,
  courseSlug: string,
): CrossLinkTarget {
  const rows = index.get(courseSlug) ?? [];
  if (rows.length === 0) {
    return {
      courseSlug,
      courseTitle: null,
      href: null,
      note: "This school does not host that course, so an approved link would render nothing here.",
    };
  }
  if (rows.length > 1) {
    return {
      courseSlug,
      courseTitle: null,
      href: null,
      note: "Two courses on this school share that slug, so the link cannot be addressed unambiguously.",
    };
  }
  const row = rows[0];
  if (!row.isPublished) {
    return {
      courseSlug,
      courseTitle: row.courseTitle,
      href: null,
      note: "That course is not published on this school, so no link is offered to learners.",
    };
  }
  if (!row.username) {
    return {
      courseSlug,
      courseTitle: row.courseTitle,
      href: null,
      note: "The instructor of that course has no public profile page yet, so it has no readable address.",
    };
  }
  return {
    courseSlug,
    courseTitle: row.courseTitle,
    href: `/${encodeURIComponent(row.username)}/${encodeURIComponent(row.courseSlug)}`,
    note: null,
  };
}

export interface RelatedCourseLink {
  href: string;
  title: string;
  courseSlug: string;
}

/**
 * The links a lesson actually renders: approved, hosted here, published here, addressable here.
 *
 * Anything that fails one of those is DROPPED silently, and the caller renders no section at all
 * when the list comes back empty.
 */
export function relatedCourseLinks(
  approvedTargetSlugs: readonly string[],
  index: CrossLinkTargetIndex,
): RelatedCourseLink[] {
  const out: RelatedCourseLink[] = [];
  const seen = new Set<string>();
  for (const slug of approvedTargetSlugs) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    const target = crossLinkTarget(index, slug);
    if (!target.href || !target.courseTitle) continue;
    out.push({ href: target.href, title: target.courseTitle, courseSlug: slug });
  }
  return out.sort((a, b) => a.title.localeCompare(b.title));
}
