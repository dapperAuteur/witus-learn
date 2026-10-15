// Release follow-ups and the course launch to-do list: the work that falls due when a course reaches
// the catalog, is scheduled, or goes live, with the blog post that markets it named in full.
//
// WHERE IT SHOWS. On each course's /teach page as a to-do widget for everyone who edits the course
// (its teacher, the school's admin, the owner) while the course is not live; as a WARNING carrying
// that list whenever someone signals the course should go live (saving settings that schedule it,
// publish it or clear its hold, releasing the review hold, vetting it), so the teacher and BAM can
// plan for the real date; and owner-only at /admin/follow-ups and as a count on the admin home, so
// BAM hears when a teacher schedules a course.
//
// THE PROBLEM THIS SOLVES. Every course BAM ships gets a blog post (the standing blog-drafts rule),
// and most posts can only go out once their course exists, or once it is released: a post that
// promises a course a reader cannot open is worse than no post. The gate used to live in a task file
// in another repo ("publish only after the bundle is merged and seeded", "re-check step 4 when it is
// released"), which nothing in this app could see. A course could be released, by BAM or by a
// school admin, and the post that was waiting for it would stay waiting.
//
// TWO SOURCES, ONE LIST. (1) Committed follow-ups, defined below like src/lib/research-checks.ts, so
// the editorial call (which post, which blog, what to re-check) is reviewable in a diff; BAM closes
// them at /admin/follow-ups (status and note in `course_release_followups`). (2) Items a teacher or
// admin adds on the course page (`course_launch_todos`), so a school's own launch chores fit too.
// Every item says WHEN it falls due, computed from the course row as it stands, never stored:
//   - "seeded":    the course exists in the school's catalog, held or not.
//   - "scheduled": someone has scheduled it (visibility "scheduled"), or it is live. "Before it goes
//                  live" items use this, so they surface the moment a launch is planned.
//   - "live":      learners can take it (public or members, published, no publish hold, vetted or
//                  opened while unvetted). The same states the catalog badges read.
// Closing any item requires saying what was done (the live URL, what changed). `pnpm follow-ups:list`
// reads both back. Once a committed follow-up is done for good, DELETE it from this file.
//
// NOT AN INBOX (CLAUDE.md). An item is a chore attached to one course: no recipient, no reply, no
// read state, no notification. It ends when it is closed.
//
// TO ADD ONE: append an entry whenever you draft a blog post about a course, and whenever a course
// ships with work that has to wait for its release (a post to update, a task step to re-check, a
// partner to tell). `kind: "blog-post"` names the blog and the slug; `kind: "task"` is anything else.
// PURE: no db, no next/headers, so the tests and the CLI can load it.

import {
  FOLLOW_UP_STATUS_LABEL,
  FOLLOW_UP_WHEN_LABEL,
  isLaunchIntent,
  launchWarningGroups,
  type FollowUpStatus,
  type FollowUpWhen,
  type LaunchSettings,
  type LaunchTodo,
} from "@/lib/launch-todos";

export {
  FOLLOW_UP_STATUS_LABEL,
  FOLLOW_UP_WHEN_LABEL,
  isLaunchIntent,
  launchWarningGroups,
  type FollowUpStatus,
  type FollowUpWhen,
  type LaunchSettings,
  type LaunchTodo,
};

/** The blogs a follow-up can name. Values read from the blog's own feed (feed.json), 2026-10-15. */
export const BLOGS = {
  bam: {
    name: "Brand Anthony McDonald: Blog",
    home: "https://brandanthonymcdonald.com/blog",
    /** Listing in this feed is what "published" means (the blog ledger rule). */
    feed: "https://www.brandanthonymcdonald.com/feed.json",
  },
} as const;
export type BlogKey = keyof typeof BLOGS;

export interface BlogPostRef {
  blog: BlogKey;
  slug: string;
  /** The post's title, as drafted. */
  postTitle: string;
  /** Its number in the blog ledger (gemini/witus/plans/playbook/*-blog-ledger.md), when it has one. */
  ledger?: number;
}

export interface ReleaseFollowUp {
  /** Stable id; the done state is keyed on it. Never renumber. */
  key: string;
  /** Tenant slug the courses belong to. A follow-up never shows on another school. */
  tenant: string;
  /** Course slugs in that tenant. */
  courses: string[];
  /** "all" (default): due when every listed course has reached `when`. "any": when one has. */
  match?: "all" | "any";
  when: FollowUpWhen;
  kind: "blog-post" | "task";
  /** One line, imperative: what to do. */
  title: string;
  /** The detail: order, prerequisites, what to re-check. */
  detail: string;
  blogPost?: BlogPostRef;
  /** Where the full instructions live, e.g. "bam-landing-page task 80, step 4". */
  ref?: string;
}

const LEARN = "learn-witus";
const TOOLS = ["map-and-compass", "the-slide-rule", "surveying-how-land-gets-measured", "reading-a-land-description"];

export const RELEASE_FOLLOW_UPS: ReleaseFollowUp[] = [
  // ── Tools That Think (TOOLS-01 to 04), seeded 2026-10-15 ───────────────────────────────────────
  // The four posts were written to go out while the courses are held ("Coming soon"), so they fall
  // due once seeded. Each course then gets a "live" follow-up, because every post describes its
  // course as held and names no reviewer and no filmed demonstration.
  {
    key: "ttt-blog-138-series",
    tenant: LEARN,
    courses: TOOLS,
    when: "seeded",
    kind: "blog-post",
    title: "Publish the Tools That Think series post",
    detail:
      "Publish this one first: posts #139 to #141 link to it. Re-check task 80's step 4 list on the day (reviewers named, demonstrations filmed, research checks answered).",
    blogPost: {
      blog: "bam",
      slug: "tools-that-think",
      postTitle: "Tools That Think: A Course Series Built Around Instruments I Still Have to Buy",
      ledger: 138,
    },
    ref: "bam-landing-page task 80, steps 4 and 5",
  },
  {
    key: "ttt-blog-139-compass",
    tenant: LEARN,
    courses: ["map-and-compass"],
    when: "seeded",
    kind: "blog-post",
    title: "Publish the Map and Compass post",
    detail:
      "After #138 and after `reviewer-name-on-what-they-read` (#65) is live: it links to both. Re-check task 80's step 4 list on the day.",
    blogPost: {
      blog: "bam",
      slug: "a-pace-is-one-step-or-two",
      postTitle: "A Pace Is One Step or Two. My Compass Course Teaches Both.",
      ledger: 139,
    },
    ref: "bam-landing-page task 80, steps 4 and 5",
  },
  {
    key: "ttt-blog-140-slide-rule",
    tenant: LEARN,
    courses: ["the-slide-rule"],
    when: "seeded",
    kind: "blog-post",
    title: "Publish The Slide Rule post",
    detail:
      "After #138 and after `fixing-one-quiz-tell-created-its-opposite` (#64) is live: it links to both. Re-check task 80's step 4 list on the day, including whether the ElementaryMBA copy was approved.",
    blogPost: {
      blog: "bam",
      slug: "logarithms-you-can-hold",
      postTitle: "Logarithms You Can Hold, and the 67 Fixes That Came First",
      ledger: 140,
    },
    ref: "bam-landing-page task 80, steps 4 and 5",
  },
  {
    key: "ttt-blog-141-surveying",
    tenant: LEARN,
    courses: ["surveying-how-land-gets-measured", "reading-a-land-description"],
    when: "seeded",
    kind: "blog-post",
    title: "Publish the surveying post",
    detail:
      "After #138, and after `reviewer-name-on-what-they-read` (#65) and `the-crew-behind-the-show` (#68) are live: it links to all three. Re-check task 80's step 4 list on the day, including the Vincennes land-office research check.",
    blogPost: {
      blog: "bam",
      slug: "surveying-became-two-courses",
      postTitle: "One Surveying Course Became Two. Neither Will Say When Indiana's First Land Office Opened.",
      ledger: 141,
    },
    ref: "bam-landing-page task 80, steps 4 and 5",
  },
  ...(
    [
      ["map-and-compass", "Map and Compass", "#138 and #139"],
      ["the-slide-rule", "The Slide Rule", "#138 and #140"],
      ["surveying-how-land-gets-measured", "Surveying: How Land Gets Measured", "#138 and #141"],
      ["reading-a-land-description", "Reading a Land Description", "#138 and #141"],
    ] as const
  ).map(
    ([slug, name, posts]): ReleaseFollowUp => ({
      key: `ttt-live-${slug}`,
      tenant: LEARN,
      courses: [slug],
      when: "live",
      kind: "task",
      title: `Update the Tools That Think posts: ${name} is live`,
      detail: `Posts ${posts} describe this course as held ("Coming soon"), with no reviewer named and no demonstration filmed. Re-check task 80's step 4 list (reviewers named, demonstrations filmed, research checks answered), then update the published posts or write a release post, and add that post here.`,
      ref: "bam-landing-page task 80, step 4",
    }),
  ),
];

// ── Due state ─────────────────────────────────────────────────────────────────────────────────────

/** The course fields due-ness reads. A subset of the courses row, so a test can build one. */
export interface CourseStageInput {
  slug: string | null;
  visibility: string;
  isPublished: boolean;
  publishHoldReason: string | null;
  vettedAt: Date | null;
  allowUnvettedPublic: boolean;
}

export type CourseStage = "missing" | "seeded" | "scheduled" | "live";

/**
 * "live" reads the same states as the catalog's badges (private, on hold, draft, coming soon), and
 * counts only "public" and "members" as open: "scheduled" has no release date to read here, so a
 * follow-up waits rather than telling BAM to market a course nobody can open yet.
 */
export function courseStage(course: CourseStageInput | undefined): CourseStage {
  if (!course) return "missing";
  const vettingLocked = course.vettedAt == null && !course.allowUnvettedPublic;
  const open = course.visibility === "public" || course.visibility === "members";
  const live = open && course.isPublished && !course.publishHoldReason && !vettingLocked;
  if (live) return "live";
  return course.visibility === "scheduled" ? "scheduled" : "seeded";
}

const RANK: Record<CourseStage, number> = { missing: 0, seeded: 1, scheduled: 2, live: 3 };

/** Has the course reached `when`? The one comparison every surface uses. */
export function stageReaches(stage: CourseStage, when: FollowUpWhen): boolean {
  return RANK[stage] >= RANK[when];
}

export interface FollowUpDue {
  due: boolean;
  /** Course slugs that have not reached the follow-up's `when` yet, with where each one is. */
  waitingOn: { slug: string; stage: CourseStage }[];
}

export function followUpDue(f: ReleaseFollowUp, stageOf: (slug: string) => CourseStage): FollowUpDue {
  const stages = f.courses.map((slug) => ({ slug, stage: stageOf(slug) }));
  const waitingOn = stages.filter((s) => !stageReaches(s.stage, f.when));
  const due = (f.match ?? "all") === "any" ? waitingOn.length < stages.length : waitingOn.length === 0;
  return { due, waitingOn };
}

/** The post's public URL on its blog. */
export function blogPostUrl(ref: BlogPostRef): string {
  return `${BLOGS[ref.blog].home}/${ref.slug}`;
}

export function followUpsForTenant(tenantSlug: string): ReleaseFollowUp[] {
  return RELEASE_FOLLOW_UPS.filter((f) => f.tenant === tenantSlug);
}

export function followUpsForCourse(tenantSlug: string, courseSlug: string): ReleaseFollowUp[] {
  return followUpsForTenant(tenantSlug).filter((f) => f.courses.includes(courseSlug));
}

export function getFollowUp(key: string): ReleaseFollowUp | undefined {
  return RELEASE_FOLLOW_UPS.find((f) => f.key === key);
}

/** A follow-up needs attention when it is due and nobody has closed it. */
export function needsAttention(due: FollowUpDue, status: FollowUpStatus): boolean {
  return due.due && status === "open";
}

// ── The launch to-do list: both sources as one list for one course ──────────────────────────────

export function committedTodo(f: ReleaseFollowUp, due: FollowUpDue, status: FollowUpStatus, note: string | null): LaunchTodo {
  const post = f.blogPost;
  return {
    id: f.key,
    source: "committed",
    kind: f.kind,
    title: f.title,
    detail: f.detail,
    when: f.when,
    status,
    note,
    blogName: post ? BLOGS[post.blog].name : null,
    postTitle: post?.postTitle ?? null,
    postUrl: post ? blogPostUrl(post) : null,
    ref: f.ref ?? null,
    due: due.due,
  };
}

