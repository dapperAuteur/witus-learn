/**
 * Event taxonomy for Learn.WitUS (learn.witus.online and its white-label tenants).
 *
 * The ecosystem shares ONE PostHog project, separated by the `app` property that
 * posthog-provider registers on load. Two rules keep that project readable, and both
 * are cheap now and expensive to retrofit once data has landed:
 *
 *   1. `snake_case`, object first, verb in past tense — `lesson_completed`.
 *   2. NEVER put the app name in the event name. `learn_lesson_completed` is wrong:
 *      it makes the same action from two apps look like two events and kills the
 *      cross-app comparison that sharing a project exists to enable. The `app`
 *      property already carries that.
 *
 * Shared lifecycle events (the SHARED_EVENTS block) use identical names in every
 * ecosystem app, so "where do people fall out of sign-in" is answerable across all of
 * them at once. Do not rename these here without renaming them everywhere.
 *
 * Canonical copy and full contract: witus-online lib/analytics/INTEGRATE.md.
 */

/** Matches this app's slug in witus lib/identity/clients.ts. Every event carries it. */
export const ANALYTICS_APP = "learn";

/**
 * Events with identical names across every ecosystem app. Names are contractual.
 */
export const SHARED_EVENTS = {
  signinStarted: "signin_started",
  signinSucceeded: "signin_succeeded",
  signinFailed: "signin_failed",
} as const;

/**
 * Events specific to this app. Add product events here (by slug or id, never display
 * name) when a call site is instrumented. Properties are ids and kinds only: never a
 * URL, a credit line, a subject label, a note, or anything a learner typed.
 */
export const EVENTS = {
  /** An explicit route view. capture_pageview is off — Next's client router would
   *  fire it once and then lie — so route changes are reported deliberately. */
  routeViewed: "route_viewed",

  // Tours from the field (plans/96 section 8, BAM 2026-11-01 Q5). Sent from the client
  // after the server answered OK, so a refused publish is never counted.
  /** A Field Log capture was put into a lesson's tour slot.
   *  { course_id, lesson_id, media_kind: "image"|"video"|"iframe", projection: "flat"|"equirectangular" } */
  lessonTourPublished: "lesson_tour_published",
  /** A tour was taken off a lesson on /teach/tours. { course_id, lesson_id } */
  lessonTourRemoved: "lesson_tour_removed",
  /** A published tour's credit was edited in place. { course_id, lesson_id } */
  lessonTourCreditEdited: "lesson_tour_credit_edited",
  /** The 360 viewer finished loading its photo on a lesson (once per page view). { lesson_id } */
  tourViewerOpened: "tour_viewer_opened",

  // Reviewer sign-off (plans/97 section 8, BAM 2026-11-01 Q6). Sent from the client after the
  // server answered OK. Ids and kinds only: never a reviewer's name, credential or correction text.
  /** A reviewer (or the owner, for a P need) recorded a verdict.
   *  { course_id, lesson_id, need_kind: "qr"|"p", verdict: "cleared"|"cleared_with_correction"|"not_cleared" } */
  lessonReviewRecorded: "lesson_review_recorded",
  /** The review hold came off a course whose needs were all cleared. { course_id } */
  reviewHoldReleased: "review_hold_released",
  /** A reviewer downloaded the lessons marked for review. { course_id, format: "pdf"|"epub" } */
  reviewPacketDownloaded: "review_packet_downloaded",

  // Quiz integrity panel (plans/98 section 8, BAM 2026-11-01 Q3).
  /** "How this course's quizzes are built" opened, once per page view.
   *  { course_id, surface: "course"|"coming_soon" } */
  quizIntegrityPanelOpened: "quiz_integrity_panel_opened",

  ...SHARED_EVENTS,
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];
