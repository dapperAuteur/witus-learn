import {
  effectiveReviewState,
  readReviewNeeds,
  releaseReadiness,
  reviewerKeyOf,
  slotId,
  verdictSlotsFor,
  VERDICT_NEED_KINDS,
  type MaterialLesson,
  type ReleaseReadiness,
  type ReviewNeed,
  type ReviewState,
  type Verdict,
  type VerdictNeedKind,
} from "@/lib/lesson-review";
import { lessonReviewHash } from "@/lib/lesson-review-hash";

// Reviewer sign-off (plans/93 section 1): one lesson's needs joined to its stored verdicts, with the
// state computed against the lesson's CURRENT hash. Every surface (the lesson page, the /teach panel
// and chip, /audit/review, the release route) goes through this one function, so they cannot
// disagree about whether a lesson is cleared.

/** A stored verdict, reduced to what a screen may show. */
export interface StoredReview {
  needKind: string;
  /** Which reviewer the verdict is for ('' for an untagged need; migration 0075). */
  reviewerKey?: string;
  /** The grant it was recorded under (null for the owner's own P verdict, or once revoked). */
  auditorId?: string | null;
  verdict: Verdict | string;
  reviewerUserId: string | null;
  reviewerName: string;
  reviewerCredential: string;
  correction: string | null;
  correctionAppliedAt: Date | null;
  lessonHash: string;
  decidedAt: Date;
}

export interface NeedSummary {
  kind: VerdictNeedKind;
  /** Which reviewer this sign-off is for ('' when untagged). Each (kind, key) is its own row and verdict. */
  reviewerKey: string;
  /** Every "who" the markers name for this sign-off (usually one). Empty for a badge kept after its marker went. */
  whos: string[];
  state: ReviewState;
  review: StoredReview | null;
  /** False when the marker was removed but a still-valid cleared verdict keeps its badge. */
  stillMarked: boolean;
}

export interface LessonReviewSummary {
  lessonId: string;
  needs: ReviewNeed[];
  /** Decision markers: shown, never cleared by a verdict. */
  decisions: ReviewNeed[];
  /** One entry per sign-off (kind and reviewer key) the markers ask for, plus cleared badges whose marker was removed. */
  rows: NeedSummary[];
  hash: string;
}

export function summarizeLessonReview(
  lesson: MaterialLesson & { id: string; reviewNeeds: unknown },
  reviews: readonly StoredReview[],
): LessonReviewSummary {
  const needs = readReviewNeeds(lesson.reviewNeeds);
  const hash = lessonReviewHash(lesson);
  const slots = verdictSlotsFor(needs);
  const marked = new Set(slots.map((s) => slotId(s.kind, s.reviewerKey)));
  const bySlot = new Map(reviews.map((r) => [slotId(r.needKind as VerdictNeedKind, r.reviewerKey ?? ""), r]));
  const rows: NeedSummary[] = [];
  for (const kind of VERDICT_NEED_KINDS) {
    for (const { reviewerKey } of slots.filter((s) => s.kind === kind)) {
      const review = bySlot.get(slotId(kind, reviewerKey)) ?? null;
      rows.push({
        kind,
        reviewerKey,
        whos: needs.filter((n) => n.kind === kind && reviewerKeyOf(n) === reviewerKey).map((n) => n.who),
        state: effectiveReviewState(review, hash),
        review,
        stillMarked: true,
      });
    }
    // "Markers are outside the hash, so removing one keeps a badge" (plans/93): a still-valid cleared
    // verdict whose marker went keeps its credit line, per reviewer.
    for (const review of reviews) {
      if (review.needKind !== kind) continue;
      const reviewerKey = review.reviewerKey ?? "";
      if (marked.has(slotId(kind, reviewerKey))) continue;
      const state = effectiveReviewState(review, hash);
      if (state === "cleared") rows.push({ kind, reviewerKey, whos: [], state, review, stillMarked: false });
    }
  }
  return { lessonId: lesson.id, needs, decisions: needs.filter((n) => n.kind === "decision"), rows, hash };
}

/** Readiness for a whole course from its lessons' summaries. Unmarked badge rows do not count. */
export function readinessOf(summaries: readonly LessonReviewSummary[]): ReleaseReadiness {
  return releaseReadiness(
    summaries.map((s) => ({
      needs: s.needs,
      states: Object.fromEntries(s.rows.filter((r) => r.stillMarked).map((r) => [slotId(r.kind, r.reviewerKey), r.state])),
    })),
  );
}

/** Group stored reviews by lesson id, for joining to lessons. */
export function reviewsByLesson<T extends StoredReview & { lessonId: string }>(rows: readonly T[]): Map<string, T[]> {
  const out = new Map<string, T[]>();
  for (const r of rows) {
    const list = out.get(r.lessonId) ?? [];
    list.push(r);
    out.set(r.lessonId, list);
  }
  return out;
}
