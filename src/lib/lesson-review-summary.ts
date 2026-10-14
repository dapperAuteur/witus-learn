import {
  effectiveReviewState,
  readReviewNeeds,
  releaseReadiness,
  verdictKindsFor,
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
  /** Every "who" the markers name for this kind (usually one). Empty for a badge kept after its marker went. */
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
  /** One entry per verdict kind the markers ask for, plus cleared badges whose marker was removed. */
  rows: NeedSummary[];
  hash: string;
}

export function summarizeLessonReview(
  lesson: MaterialLesson & { id: string; reviewNeeds: unknown },
  reviews: readonly StoredReview[],
): LessonReviewSummary {
  const needs = readReviewNeeds(lesson.reviewNeeds);
  const hash = lessonReviewHash(lesson);
  const marked = verdictKindsFor(needs);
  const byKind = new Map(reviews.map((r) => [r.needKind, r]));
  const rows: NeedSummary[] = [];
  for (const kind of VERDICT_NEED_KINDS) {
    const review = byKind.get(kind) ?? null;
    const state = effectiveReviewState(review, hash);
    if (marked.includes(kind)) {
      rows.push({ kind, whos: needs.filter((n) => n.kind === kind).map((n) => n.who), state, review, stillMarked: true });
    } else if (review && state === "cleared") {
      // "Markers are outside the hash, so removing one keeps a badge" (plans/93).
      rows.push({ kind, whos: [], state, review, stillMarked: false });
    }
  }
  return { lessonId: lesson.id, needs, decisions: needs.filter((n) => n.kind === "decision"), rows, hash };
}

/** Readiness for a whole course from its lessons' summaries. Unmarked badge rows do not count. */
export function readinessOf(summaries: readonly LessonReviewSummary[]): ReleaseReadiness {
  return releaseReadiness(
    summaries.map((s) => ({
      needs: s.needs,
      states: Object.fromEntries(s.rows.filter((r) => r.stillMarked).map((r) => [r.kind, r.state])),
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
