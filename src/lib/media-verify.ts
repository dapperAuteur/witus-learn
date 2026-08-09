// Media verification: the rules behind /admin/media, kept pure so they are testable with no
// database and reusable by anything that needs to ask "may this course go live?".
//
// WHY THIS EXISTS. Claude uploads images, audio, video and documents to Cloudinary while building a
// course. Until now those landed in the lessons directly, so the first person to see them was a
// learner. The catalog's whole trust posture (every claim cited, every source checkable) falls apart
// if a figure with unclear rights, a wrong caption, or an unreadable scan ships beside it. So every
// uploaded asset is registered, previewed, and either APPROVED or REJECTED before the course is live.
//
// Same discipline as the two verification lists (/admin/citations and /admin/research): a REJECTION
// cannot be recorded without saying why. A rejected asset with no reason behind it stops anyone from
// fixing it, which is worse than leaving it pending. Approval may carry an optional note.

export const MEDIA_KINDS = ["image", "video", "audio", "document"] as const;
export type MediaKind = (typeof MEDIA_KINDS)[number];

export const MEDIA_STATUSES = ["pending", "approved", "rejected"] as const;
export type MediaStatus = (typeof MEDIA_STATUSES)[number];

export const MEDIA_STATUS_LABEL: Record<MediaStatus, string> = {
  pending: "Pending review",
  approved: "Approved",
  rejected: "Rejected",
};

export const MEDIA_KIND_LABEL: Record<MediaKind, string> = {
  image: "Image",
  video: "Video",
  audio: "Audio",
  document: "Document",
};

/**
 * The rights vocabulary. Closed on purpose: free text lets "probably fine" through, and the whole
 * point of the provenance triple (credit, rights, source) is that someone can re-check the answer.
 *
 * `unknown` is a real, honest value and the reason the list has a check at all: it records that the
 * rights were never established, and an asset in that state can never be approved (see
 * rightsAreAccountedFor below). Assuming silence means permission is how a paid catalog gets a
 * takedown notice.
 */
export const RIGHTS_STATUSES = [
  "own-work",
  "public-domain",
  "cc0",
  "cc-by",
  "cc-by-sa",
  "licensed",
  "permission-granted",
  "unknown",
] as const;
export type RightsStatus = (typeof RIGHTS_STATUSES)[number];

export const RIGHTS_STATUS_LABEL: Record<RightsStatus, string> = {
  "own-work": "Our own work",
  "public-domain": "Public domain",
  cc0: "CC0 (no rights reserved)",
  "cc-by": "CC BY (credit required)",
  "cc-by-sa": "CC BY-SA (credit, share alike)",
  licensed: "Licensed for commercial use",
  "permission-granted": "Written permission from the rights holder",
  unknown: "Rights not established yet",
};

export function isMediaKind(value: string): value is MediaKind {
  return (MEDIA_KINDS as readonly string[]).includes(value);
}

export function isMediaStatus(value: string): value is MediaStatus {
  return (MEDIA_STATUSES as readonly string[]).includes(value);
}

export function isRightsStatus(value: string): value is RightsStatus {
  return (RIGHTS_STATUSES as readonly string[]).includes(value);
}

/**
 * Can this asset's rights be accounted for? Anything but `unknown` (or an empty/unrecognised value,
 * which is the same thing said less clearly). The courses are PAID, so "we could not work out who
 * owns this" is a blocker, not a footnote.
 */
export function rightsAreAccountedFor(rightsStatus: string): boolean {
  return isRightsStatus(rightsStatus) && rightsStatus !== "unknown";
}

/** The shape the clearance maths needs. Deliberately narrower than the database row. */
export interface MediaAssetLike {
  courseSlug: string | null;
  status: MediaStatus;
}

export interface MediaCounts {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
}

export function countByStatus(assets: readonly MediaAssetLike[]): MediaCounts {
  const counts: MediaCounts = { total: assets.length, pending: 0, approved: 0, rejected: 0 };
  for (const a of assets) counts[a.status] += 1;
  return counts;
}

export interface MediaClearance extends MediaCounts {
  /** True when nothing is waiting and nothing was turned down. */
  cleared: boolean;
}

/**
 * Is this course's media cleared? Every registered asset is `approved`: nothing pending, and nothing
 * rejected either. A rejected asset still on the list means a lesson may still point at media that
 * was turned down, so it blocks exactly like a pending one until it is replaced or removed.
 *
 * A course with NO registered assets is vacuously clear, because most courses are prose, quizzes and
 * maps and have no uploads to review. `total` rides along in the result so a caller can tell
 * "reviewed, all good" apart from "nothing was ever registered", which the page shows plainly rather
 * than presenting an empty course as a passed review.
 */
export function courseMediaClearance(
  courseSlug: string,
  assets: readonly MediaAssetLike[],
): MediaClearance {
  const mine = assets.filter((a) => a.courseSlug === courseSlug);
  const counts = countByStatus(mine);
  return { ...counts, cleared: counts.pending === 0 && counts.rejected === 0 };
}

/** The one-line answer: may this course go live as far as media is concerned? */
export function isCourseMediaCleared(
  courseSlug: string,
  assets: readonly MediaAssetLike[],
): boolean {
  return courseMediaClearance(courseSlug, assets).cleared;
}

/**
 * Course slugs with at least one asset still waiting on a decision, sorted so the summary at the top
 * of the board reads the same way twice. Assets with no course (a general brand asset) are reported
 * under GENERAL_MEDIA_GROUP rather than dropped, because an unreviewed logo is still unreviewed.
 */
export const GENERAL_MEDIA_GROUP = "(no course)";

export function coursesWithPendingMedia(assets: readonly MediaAssetLike[]): string[] {
  const slugs = new Set<string>();
  for (const a of assets) {
    if (a.status === "pending") slugs.add(a.courseSlug ?? GENERAL_MEDIA_GROUP);
  }
  return [...slugs].sort((a, b) => a.localeCompare(b));
}

/** Group assets for the board: one section per course, newest-first order preserved within a group. */
export function groupByCourse<T extends MediaAssetLike>(
  assets: readonly T[],
): { courseSlug: string; assets: T[] }[] {
  const groups = new Map<string, T[]>();
  for (const a of assets) {
    const key = a.courseSlug ?? GENERAL_MEDIA_GROUP;
    const bucket = groups.get(key);
    if (bucket) bucket.push(a);
    else groups.set(key, [a]);
  }
  return [...groups.entries()]
    .map(([courseSlug, list]) => ({ courseSlug, assets: list }))
    .sort((a, b) => a.courseSlug.localeCompare(b.courseSlug));
}

/**
 * Validate a review decision. Returns the reason it cannot be recorded, or null when it can.
 *
 * The rejection rule is the load-bearing one and is enforced in three places for the same reason the
 * citation rule is: the form (so the mistake is caught before a round trip), the API (so a script or
 * a stale tab cannot get around the form), and here (so both read the same sentence).
 */
export function mediaDecisionError(input: {
  status: MediaStatus;
  note: string;
  rightsStatus: string;
}): string | null {
  const note = input.note.trim();
  if (input.status === "rejected" && !note) {
    return "Say why you are rejecting this before saving. A rejected asset with no reason cannot be fixed.";
  }
  if (input.status === "approved" && !rightsAreAccountedFor(input.rightsStatus)) {
    return "Set the rights status before approving. Media whose rights are not established cannot go live.";
  }
  return null;
}
