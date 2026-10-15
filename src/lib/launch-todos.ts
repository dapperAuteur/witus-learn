// The launch to-do list's shared vocabulary: types, labels and the two pure checks the client
// components need (the intent check and the warning's grouping). Kept apart from
// src/lib/release-followups.ts so the committed follow-up registry never ships in a browser bundle.

export type FollowUpWhen = "seeded" | "scheduled" | "live";
export const FOLLOW_UP_WHEN_LABEL: Record<FollowUpWhen, string> = {
  seeded: "once the course is in the catalog, held or not",
  scheduled: "before it goes live, from the moment it is scheduled",
  live: "once learners can take the course",
};

export type FollowUpStatus = "open" | "done" | "skipped";
export const FOLLOW_UP_STATUS_LABEL: Record<FollowUpStatus, string> = {
  open: "Not done yet",
  done: "Done",
  skipped: "Not doing it",
};

/** One item on a course's launch to-do list, from either source, ready to render or serialize. */
export interface LaunchTodo {
  /** Committed follow-up key, or the custom item's uuid. */
  id: string;
  source: "committed" | "custom";
  kind: "blog-post" | "task";
  title: string;
  detail: string | null;
  when: FollowUpWhen;
  status: FollowUpStatus;
  note: string | null;
  /** For a blog post: the blog's name, and the post's (or the blog's) URL when known. */
  blogName: string | null;
  postTitle: string | null;
  postUrl: string | null;
  ref: string | null;
  /** True when every course it waits on has reached `when`. */
  due: boolean;
}

/** The settings that decide whether a course is live, as the settings form holds them. */
export interface LaunchSettings {
  visibility: string;
  isPublished: boolean;
  publishHoldReason: string | null;
}

/**
 * Does this change say "make it live"? Scheduling it, moving it to public or members from private
 * or scheduled, publishing it, or clearing its hold. Any one is an intent to launch, and the moment
 * the launch to-do list must be in front of the person making it.
 */
export function isLaunchIntent(before: LaunchSettings, after: LaunchSettings): boolean {
  const open = (v: string) => v === "public" || v === "members";
  if (after.visibility === "scheduled" && before.visibility !== "scheduled") return true;
  if (open(after.visibility) && !open(before.visibility)) return true;
  if (after.isPublished && !before.isPublished) return true;
  if (before.publishHoldReason && !after.publishHoldReason) return true;
  return false;
}

/** The open items, split the way the warning reads: what to do before launch, and what launch starts. */
export function launchWarningGroups(todos: LaunchTodo[]): { before: LaunchTodo[]; after: LaunchTodo[] } {
  const open = todos.filter((t) => t.status === "open");
  return { before: open.filter((t) => t.when !== "live"), after: open.filter((t) => t.when === "live") };
}
