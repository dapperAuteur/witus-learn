"use client";

/**
 * WHAT EACH OUTBOX `kind` IS, AND WHERE IT GOES.
 *
 * The outbox (src/lib/offline-outbox.ts) is deliberately dumb: an item is `{ url, method, body }`
 * and the flusher replays it verbatim. That is the design — there is no `switch (kind)` in the
 * flusher, and there must never be one, because a queued item that has to be *re-derived* at flush
 * time is a queued item that can be re-derived WRONG (against a different lesson, a different page,
 * a different tenant, six hours later on a plane that has landed somewhere else).
 *
 * So the endpoint and the body are decided ONCE, here, at the moment the human hits send — and this
 * module is the only place that knows the mapping. Each builder returns exactly what `enqueue()`
 * wants. The `kind` string is then only used to answer "which form owns this pending row?".
 *
 *   kind                   → endpoint                                          → body
 *   ─────────────────────────────────────────────────────────────────────────────────────────────
 *   "problem-report"       → /api/report                                       → { kind, message,
 *                                                                                  pageUrl?, email? }
 *   "curriculum-feedback"  → /api/courses/:courseId/lessons/:lessonId/feedback → { kind, body }
 *   "recall-grade"         → /api/courses/:courseId/lessons/:lessonId/recall   → { prompt, gotIt }
 *
 * The two bodies are NOT interchangeable and are not merged into a common shape: `/api/report` reads
 * `message`, the feedback API reads `body`, and both have their own `kind` enum (bug|feedback|idea|
 * other vs. correction|comment|question) that means something different. Zod on the other side would
 * reject the wrong one with a 400 — which the outbox keeps and shows rather than dropping, so the
 * mistake would be visible rather than silent. Better still is not to make it: hence the types below.
 *
 * ── Why the *page* and the *lesson* are captured at enqueue time ──────────────────────────────
 * `pageUrl` is where the problem was SEEN, not where the browser happened to be when the network
 * came back. Same for the lesson in the feedback URL. Baking both into the item at enqueue is what
 * makes a report queued on lesson 4 still be about lesson 4 when it sends from the dashboard.
 *
 * ── Tenancy ──────────────────────────────────────────────────────────────────────────────────
 * Neither body carries a tenant, and neither builder takes one. That is not an omission: the tenant
 * is resolved SERVER-side from the request Host (`resolveTenant()`), and a client-supplied tenant is
 * exactly the thing the multi-tenancy rule forbids. See the `origin` guard in offline-outbox.ts for
 * why a queued item can't be replayed against another brand.
 */

/** Report a problem — the floating widget on every tenant page. Works signed-out. */
export const PROBLEM_REPORT = "problem-report";
/** Suggest a correction/comment/question on a lesson. Signed-in (the API 401s otherwise). */
export const CURRICULUM_FEEDBACK = "curriculum-feedback";
/** A "Check yourself" self-grade on a `:::reveal` card. Signed-in (the API 401s otherwise). */
export const RECALL_GRADE = "recall-grade";
/** Mark a lesson complete. Signed-in. Queued so completing a lesson on a plane still records. */
export const PROGRESS = "progress";
/** An instructor edit to a lesson (title/body/flags/order). Signed-in + owns the course. Queued so
 *  edits made offline are not silently dropped when the network returns. */
export const LESSON_EDIT = "lesson-edit";
/** A quiz attempt: the served responses, POSTed to be scored + recorded server-side. Queued when the
 *  submit happens offline, so the attempt is scored on reconnect WITHOUT the answers ever living on
 *  the client. Integrity holds: the client never learns which option was correct. */
export const QUIZ_ATTEMPT = "quiz-attempt";

/** `/api/report`'s enum — what KIND of problem, not the outbox kind. */
export type ProblemKind = "bug" | "feedback" | "idea" | "other";
/** The feedback API's enum. */
export type FeedbackKind = "correction" | "comment" | "question";

/** Exactly the arguments `enqueue()` takes, so a builder's output is passed straight through. */
export type OutboxDraft = {
  kind: string;
  url: string;
  method: "POST" | "PATCH";
  body: unknown;
  label: string;
};

/** The body `/api/report` parses. Mirrors its Zod schema — keep them in step. */
export type ProblemReportBody = {
  kind: ProblemKind;
  message: string;
  pageUrl?: string;
  email?: string;
};

/** The body the lesson feedback API parses. Note `body`, NOT `message`. */
export type CurriculumFeedbackBody = {
  kind: FeedbackKind;
  body: string;
};

export const REPORT_URL = "/api/report";

export function feedbackUrl(courseId: string, lessonId: string): string {
  return `/api/courses/${courseId}/lessons/${lessonId}/feedback`;
}

/**
 * A problem report, ready to queue or to POST. `email` and `pageUrl` are dropped when empty rather
 * than sent as `""` — the API's Zod treats them as optional, and an empty string is not an email.
 */
export function problemReportDraft(input: {
  kind: ProblemKind;
  message: string;
  pageUrl?: string;
  email?: string;
}): OutboxDraft {
  const body: ProblemReportBody = {
    kind: input.kind,
    message: input.message,
    ...(input.pageUrl ? { pageUrl: input.pageUrl } : {}),
    ...(input.email ? { email: input.email } : {}),
  };
  return {
    kind: PROBLEM_REPORT,
    url: REPORT_URL,
    method: "POST",
    body,
    // The label is what the human sees on the pending row, so it's their words — not a summary.
    label: input.message,
  };
}

/** Lesson feedback, ready to queue or to POST. The lesson is in the URL, so it can't drift. */
export function curriculumFeedbackDraft(input: {
  courseId: string;
  lessonId: string;
  kind: FeedbackKind;
  body: string;
}): OutboxDraft {
  const body: CurriculumFeedbackBody = { kind: input.kind, body: input.body };
  return {
    kind: CURRICULUM_FEEDBACK,
    url: feedbackUrl(input.courseId, input.lessonId),
    method: "POST",
    body,
    label: input.body,
  };
}

/** The reveal-shaped body the recall API parses. Mirrors its Zod schema — keep them in step.
 *  (`prompt`, not an index: the server re-derives the stable identity from the question text.) */
export type RecallGradeBody = {
  prompt: string;
  gotIt: boolean;
};

export function recallUrl(courseId: string, lessonId: string): string {
  return `/api/courses/${courseId}/lessons/${lessonId}/recall`;
}

/** A check-yourself self-grade, ready to queue or to POST. Lesson in the URL; question in the
 *  body — both captured at grade time, so a grade queued on lesson 4 is still about lesson 4's
 *  question when it sends from somewhere else after the network returns. */
export function recallGradeDraft(input: {
  courseId: string;
  lessonId: string;
  prompt: string;
  gotIt: boolean;
}): OutboxDraft {
  const body: RecallGradeBody = { prompt: input.prompt, gotIt: input.gotIt };
  return {
    kind: RECALL_GRADE,
    url: recallUrl(input.courseId, input.lessonId),
    method: "POST",
    body,
    label: `${input.gotIt ? "Got it" : "Missed"}: ${input.prompt}`,
  };
}

/** The body the progress API parses. Mirrors its Zod schema — keep them in step. */
export type ProgressBody = { completed: boolean };

export function progressUrl(courseId: string, lessonId: string): string {
  return `/api/courses/${courseId}/lessons/${lessonId}/progress`;
}

/** Mark-a-lesson-complete, ready to queue or to POST. The lesson is in the URL, so a completion
 *  queued on lesson 4 offline still records lesson 4 when it sends after the network returns.
 *  Completing is idempotent server-side, so a replay is harmless. */
export function progressDraft(input: {
  courseId: string;
  lessonId: string;
  completed: boolean;
}): OutboxDraft {
  const body: ProgressBody = { completed: input.completed };
  return {
    kind: PROGRESS,
    url: progressUrl(input.courseId, input.lessonId),
    method: "POST",
    body,
    label: input.completed ? "Marked complete" : "Marked incomplete",
  };
}

export function lessonEditUrl(courseId: string, lessonId: string): string {
  return `/api/courses/${courseId}/lessons/${lessonId}`;
}

/** An instructor lesson edit, ready to queue or to PATCH. `changes` is the exact partial the API
 *  already accepts (title/body/flags/sortOrder/…), captured verbatim so it replays as-authored —
 *  no re-derivation. Two offline edits to the same lesson queue as two PATCHes and replay in order
 *  (last write wins per field), which is the same result as if they'd been sent live. */
export function lessonEditDraft(input: {
  courseId: string;
  lessonId: string;
  changes: Record<string, unknown>;
  label: string;
}): OutboxDraft {
  return {
    kind: LESSON_EDIT,
    url: lessonEditUrl(input.courseId, input.lessonId),
    method: "PATCH",
    body: input.changes,
    label: input.label,
  };
}

export function quizUrl(courseId: string, lessonId: string): string {
  return `/api/courses/${courseId}/lessons/${lessonId}/quiz`;
}

/** A quiz attempt, ready to queue or to POST. `responses` are the ORIGINAL question/option indices
 *  for the served subset (the server scores by identity, exactly as for a live submit). The lesson
 *  is in the URL, so an attempt queued offline still scores against the right quiz on reconnect. */
export function quizAttemptDraft(input: {
  courseId: string;
  lessonId: string;
  responses: { questionIndex: number; optionIndex: number }[];
}): OutboxDraft {
  return {
    kind: QUIZ_ATTEMPT,
    url: quizUrl(input.courseId, input.lessonId),
    method: "POST",
    body: { responses: input.responses },
    label: `Quiz attempt (${input.responses.length} answer${input.responses.length === 1 ? "" : "s"})`,
  };
}
