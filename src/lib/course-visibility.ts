// Course visibility policy: every course is born private and unpublished, and only the platform
// owner takes one public, after vetting (BAM, 2026-10-28: "all courses should be private and
// unpublished and allow me to change that when they're ready to go public and have been vetted").
//
// PURE (no next/headers, no db) so the isolation suite can exercise every branch offline. The
// route that applies a change is src/app/api/courses/[id]/visibility/route.ts; the audit table is
// course_visibility_changes (src/db/schema/course-visibility-changes.ts).
//
// Three rules live here:
//   1. NEW_COURSE_STATE is what every new course row is inserted with: the in-app creator
//      (createCourse), every seeder (seedAuthoredCourse, seed-bvc, seed-languages) and the
//      owner-only private pipeline (seed-local-private, through seedAuthoredCourse). Insert-only:
//      nothing here rewrites an existing row.
//   2. A CLOSED course (private, or carrying a publish hold) opens on /teach and downloads as an
//      EPUB/PDF only for the platform owner and its own instructor. Everyone else gets the same
//      not-found a learner gets (canOpenCourseWorkspace in src/lib/api.ts).
//   3. Leaving "private" goes through the owner's switch only, which shows the release readiness,
//      refuses when not ready unless the owner overrides with a stored reason, and writes an audit
//      row. The course settings PATCH refuses the same transition for everyone.

/** The state every new course row is inserted with. Spread it LAST so nothing overrides it. */
export const NEW_COURSE_STATE = {
  visibility: "private",
  isPublished: false,
  publishedAt: null,
} as const;

export type CourseVisibility = "public" | "members" | "scheduled" | "private";

/** Private, or held (a publish hold reason stands). Either way the content is not for a stranger. */
export function isClosedCourse(course: { visibility: string; publishHoldReason: string | null }): boolean {
  return course.visibility === "private" || Boolean(course.publishHoldReason?.trim());
}

/** The reviewer sign-off totals (ReleaseReadiness in src/lib/lesson-review.ts), as this needs them. */
export interface MarkerReadiness {
  qrTotal: number;
  qrCleared: number;
  pTotal: number;
  pCleared: number;
  openDecisions: number;
}

export interface PublicReadiness {
  /** True when the course may go public without an override. */
  ready: boolean;
  vetted: boolean;
  held: boolean;
  holdReason: string | null;
  markers: MarkerReadiness;
  /** True when every QR and P need is cleared and no decision marker is left (vacuously true
   *  for a course with no markers: its review is the owner's vetting, not a marker list). */
  markersCleared: boolean;
  /** Plain-language reasons it is not ready, in the order the owner should deal with them. */
  blockers: string[];
}

/**
 * Is this course ready to go public? Vetted by the owner, no publish hold standing, and every
 * reviewer marker cleared. Computed on the server from stored rows on every request, never taken
 * from the screen that sent the click.
 *
 * Different from releaseReadiness on one point, on purpose: a course with NO markers is "not ready"
 * there (its hold is cleared by hand), but here the absence of markers is not a blocker, because
 * the owner's vetting stamp is the review that counts.
 */
export function publicReadiness(
  course: { vettedAt: Date | null; publishHoldReason: string | null },
  markers: MarkerReadiness,
): PublicReadiness {
  const vetted = course.vettedAt != null;
  const holdReason = course.publishHoldReason?.trim() ? course.publishHoldReason : null;
  const held = holdReason != null;
  const markersCleared =
    markers.qrCleared === markers.qrTotal && markers.pCleared === markers.pTotal && markers.openDecisions === 0;
  const blockers: string[] = [];
  if (!vetted) blockers.push("Not vetted yet.");
  if (held) blockers.push(`On hold: ${holdReason}`);
  if (markers.openDecisions > 0) {
    blockers.push(
      `${markers.openDecisions} decision ${markers.openDecisions === 1 ? "marker is" : "markers are"} still open.`,
    );
  }
  if (markers.qrCleared < markers.qrTotal) {
    blockers.push(`${markers.qrCleared} of ${markers.qrTotal} qualified-reviewer needs are cleared.`);
  }
  if (markers.pCleared < markers.pTotal) {
    blockers.push(`${markers.pCleared} of ${markers.pTotal} practitioner needs are cleared.`);
  }
  return { ready: blockers.length === 0, vetted, held, holdReason, markers, markersCleared, blockers };
}

/** Shortest override reason accepted: long enough that it has to say something. */
export const MIN_OVERRIDE_REASON = 10;

export type VisibilityAction = "make-public" | "make-private";

export interface VisibilityRequest {
  action: VisibilityAction;
  override?: boolean;
  reason?: string | null;
}

export interface VisibilityCourseState {
  visibility: string;
  isPublished: boolean;
  publishedAt: Date | null;
  publishHoldReason: string | null;
}

export type VisibilityDecision =
  | { ok: false; status: 403 | 400 | 409; error: string }
  | {
      ok: true;
      /** False when the course is already in the requested state: nothing to write, no audit row. */
      changed: boolean;
      patch: {
        visibility: CourseVisibility;
        isPublished: boolean;
        publishedAt?: Date;
        publishHoldReason?: null;
      };
      audit: {
        fromVisibility: string;
        toVisibility: CourseVisibility;
        fromPublished: boolean;
        toPublished: boolean;
        overrodeReadiness: boolean;
        reason: string | null;
        /** The hold the override cleared, kept so the audit row says what was set aside. */
        clearedHoldReason: string | null;
      };
    };

/**
 * The owner's switch. Owner only. Make public publishes the row AND sets visibility public in the
 * same write. Not ready → 409 unless `override` is ticked with a reason of at least
 * MIN_OVERRIDE_REASON characters; an override also clears a standing hold (its text goes into the
 * audit row). Make private takes the course down: visibility private and unpublished.
 */
export function decideVisibilityChange(input: {
  isOwner: boolean;
  course: VisibilityCourseState;
  readiness: PublicReadiness;
  request: VisibilityRequest;
  now?: Date;
}): VisibilityDecision {
  const { isOwner, course, readiness, request } = input;
  if (!isOwner) return { ok: false, status: 403, error: "Only the platform owner can change a course's visibility here." };
  const reason = request.reason?.trim() ? request.reason.trim() : null;
  const from = { fromVisibility: course.visibility, fromPublished: course.isPublished };

  if (request.action === "make-private") {
    const changed = course.visibility !== "private" || course.isPublished;
    return {
      ok: true,
      changed,
      patch: { visibility: "private", isPublished: false },
      audit: { ...from, toVisibility: "private", toPublished: false, overrodeReadiness: false, reason, clearedHoldReason: null },
    };
  }

  const overriding = request.override === true;
  if (!readiness.ready) {
    if (!overriding) {
      return { ok: false, status: 409, error: `Not ready to go public. ${readiness.blockers.join(" ")}` };
    }
    if (!reason || reason.length < MIN_OVERRIDE_REASON) {
      return {
        ok: false,
        status: 400,
        error: `An override needs a reason of at least ${MIN_OVERRIDE_REASON} characters; it is stored with the change.`,
      };
    }
  }
  const changed = course.visibility !== "public" || !course.isPublished;
  const clearsHold = !readiness.ready && overriding && readiness.held;
  return {
    ok: true,
    changed,
    patch: {
      visibility: "public",
      isPublished: true,
      ...(course.publishedAt ? {} : { publishedAt: input.now ?? new Date() }),
      ...(clearsHold ? { publishHoldReason: null } : {}),
    },
    audit: {
      ...from,
      toVisibility: "public",
      toPublished: true,
      overrodeReadiness: !readiness.ready && overriding,
      reason,
      clearedHoldReason: clearsHold ? readiness.holdReason : null,
    },
  };
}

/**
 * The course settings PATCH may not open a private course: neither move it out of "private" nor
 * publish it (several catalog reads filter on is_published alone, so a published private row can
 * surface). Both are the owner's switch, with its readiness check and its audit row. Returns the
 * refusal message, or null when the patch opens nothing. Going INTO private, or unpublishing, stays
 * open to every editor: taking a course down is never the risky direction. The settings form sends
 * every field on every save, so only a CHANGE is refused, never a value repeated as it stands.
 */
export function patchOpensPrivate(
  current: { visibility: string; isPublished: boolean },
  requested: { visibility?: string; isPublished?: boolean },
): string | null {
  if (current.visibility !== "private") return null;
  const leaves = requested.visibility !== undefined && requested.visibility !== "private";
  const publishes = requested.isPublished === true && !current.isPublished;
  if (!leaves && !publishes) return null;
  return "A private course is opened only with the platform owner's Make public control on its /teach page, which checks vetting and review readiness and records the change.";
}
