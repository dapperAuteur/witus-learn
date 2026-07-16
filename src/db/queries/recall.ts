import "server-only";
import { and, eq, inArray, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { courses, lessons, recallAttempts, userProfiles } from "@/db/schema";
import { findRevealByPromptIndex, isRevealPromptIndex } from "@/lib/reveals";

// Record one self-grade. Signed-in only; tenant-scoped by the caller.
export async function recordRecallAttempt(input: {
  tenantId: string;
  userId: string;
  courseId: string;
  lessonId: string;
  promptIndex: number;
  gotIt: boolean;
}): Promise<void> {
  await db.insert(recallAttempts).values(input);
}

export interface RecallStats {
  attempts: number;
  gotIt: number;
  /** 0–100, or null when there are no attempts. */
  accuracy: number | null;
}

// Aggregate in-lesson recall accuracy for a course (all learners). Tenant-scoped. Used on the
// teacher page next to quiz accuracy so BAM can see whether it's sticking in-lesson vs at quiz time.
export async function getCourseRecallStats(tenantId: string, courseId: string): Promise<RecallStats> {
  const [row] = await db
    .select({
      attempts: sql<number>`count(*)`.mapWith(Number),
      gotIt: sql<number>`count(*) filter (where ${recallAttempts.gotIt})`.mapWith(Number),
    })
    .from(recallAttempts)
    .where(and(eq(recallAttempts.tenantId, tenantId), eq(recallAttempts.courseId, courseId)));
  const attempts = row?.attempts ?? 0;
  const gotIt = row?.gotIt ?? 0;
  return { attempts, gotIt, accuracy: attempts > 0 ? Math.round((gotIt / attempts) * 100) : null };
}

/** One self-checked item (a `:::reveal` check or a recall card) in a learner's history. */
export interface RecallHistoryEntry {
  /** Stable per-item key: `${lessonId}:${promptIndex}`. */
  key: string;
  /** "check" = inline `:::reveal` check-yourself · "card" = quick-recall card. */
  kind: "check" | "card";
  /** The question text, resolved from today's lesson content (fallback label if edited away). */
  prompt: string;
  lessonTitle: string;
  courseTitle: string;
  /** Link to the lesson (or the course when slugs are missing). */
  href: string;
  attempts: number;
  misses: number;
  lastAt: Date;
  lastMissAt: Date | null;
  /** The most recent grade — false means they STILL haven't recovered it. */
  lastGotIt: boolean;
}

export interface RecallCourseSummary {
  courseId: string;
  courseTitle: string;
  href: string;
  attempts: number;
  misses: number;
  /** 0–100, integer. */
  missRate: number;
}

export interface RecallHistory {
  totalAttempts: number;
  /** Items last MISSED most recently, newest first. */
  recentMisses: RecallHistoryEntry[];
  /** Spaced-recall candidates: last attempt was a miss, or missed before and not seen in a while. */
  dueAgain: RecallHistoryEntry[];
  /** Per-course miss rate, worst first. */
  courses: RecallCourseSummary[];
}

/** An item is "due again" if it was never recovered, or was ever missed and not retried lately. */
const DUE_AGAIN_STALE_DAYS = 7;
const HISTORY_LIST_LIMIT = 8;

/**
 * One learner's self-grade history across a tenant — which checks they missed, when, how often,
 * per course — grouped by the stable item identity (lesson + promptIndex, where a negative
 * promptIndex is a `:::reveal` check and a non-negative one a recall card; see src/lib/reveals.ts).
 * TENANT-SCOPED: recall_attempts carries tenant_id directly. Powers the /dashboard history and its
 * simple recency+miss "review again" list (deliberately not a full SRS scheduler).
 */
export async function getRecallHistory(tenantId: string, userId: string): Promise<RecallHistory> {
  const grouped = await db
    .select({
      lessonId: recallAttempts.lessonId,
      promptIndex: recallAttempts.promptIndex,
      courseId: recallAttempts.courseId,
      attempts: sql<number>`count(*)::int`,
      misses: sql<number>`count(*) filter (where not ${recallAttempts.gotIt})::int`,
      lastAt: sql<string>`max(${recallAttempts.createdAt})`,
      lastMissAt: sql<string | null>`max(${recallAttempts.createdAt}) filter (where not ${recallAttempts.gotIt})`,
      lastGotIt: sql<boolean>`(array_agg(${recallAttempts.gotIt} order by ${recallAttempts.createdAt} desc))[1]`,
      lessonSlug: lessons.slug,
      lessonTitle: lessons.title,
      courseSlug: courses.slug,
      courseTitle: courses.title,
      username: userProfiles.username,
    })
    .from(recallAttempts)
    .innerJoin(lessons, eq(lessons.id, recallAttempts.lessonId))
    .innerJoin(courses, eq(courses.id, recallAttempts.courseId))
    .leftJoin(userProfiles, eq(userProfiles.userId, courses.instructorId))
    .where(and(eq(recallAttempts.tenantId, tenantId), eq(recallAttempts.userId, userId)))
    .groupBy(
      recallAttempts.lessonId,
      recallAttempts.promptIndex,
      recallAttempts.courseId,
      lessons.slug,
      lessons.title,
      courses.slug,
      courses.title,
      userProfiles.username,
    );

  const courseHref = (r: (typeof grouped)[number]) =>
    r.username && r.courseSlug ? `/${r.username}/${r.courseSlug}` : `/course/${r.courseId}`;
  const lessonHref = (r: (typeof grouped)[number]) =>
    r.username && r.courseSlug && r.lessonSlug
      ? `/${r.username}/${r.courseSlug}/lesson/${r.lessonSlug}`
      : courseHref(r);

  // Per-course rollup over EVERY attempt (not just the capped display lists).
  const byCourse = new Map<string, RecallCourseSummary>();
  let totalAttempts = 0;
  for (const r of grouped) {
    totalAttempts += r.attempts;
    const c = byCourse.get(r.courseId) ?? {
      courseId: r.courseId,
      courseTitle: r.courseTitle,
      href: courseHref(r),
      attempts: 0,
      misses: 0,
      missRate: 0,
    };
    c.attempts += r.attempts;
    c.misses += r.misses;
    byCourse.set(r.courseId, c);
  }
  const courseSummaries = [...byCourse.values()]
    .map((c) => ({ ...c, missRate: c.attempts > 0 ? Math.round((c.misses / c.attempts) * 100) : 0 }))
    .sort((a, b) => b.missRate - a.missRate || b.attempts - a.attempts);

  const staleBefore = Date.now() - DUE_AGAIN_STALE_DAYS * 86400000;
  const toEntry = (r: (typeof grouped)[number]): RecallHistoryEntry => ({
    key: `${r.lessonId}:${r.promptIndex}`,
    kind: isRevealPromptIndex(r.promptIndex) ? "check" : "card",
    prompt: "", // resolved below from the lesson content
    lessonTitle: r.lessonTitle,
    courseTitle: r.courseTitle,
    href: lessonHref(r),
    attempts: r.attempts,
    misses: r.misses,
    lastAt: new Date(r.lastAt),
    lastMissAt: r.lastMissAt ? new Date(r.lastMissAt) : null,
    lastGotIt: r.lastGotIt,
  });

  const recentMisses = grouped
    .filter((r) => r.lastMissAt !== null)
    .sort((a, b) => new Date(b.lastMissAt!).getTime() - new Date(a.lastMissAt!).getTime())
    .slice(0, HISTORY_LIST_LIMIT);

  const dueAgain = grouped
    .filter(
      (r) =>
        !r.lastGotIt ||
        (r.misses > 0 && new Date(r.lastAt).getTime() < staleBefore),
    )
    .sort((a, b) => {
      // Still-missed first, then stalest first — the simple recency+miss heuristic.
      if (a.lastGotIt !== b.lastGotIt) return a.lastGotIt ? 1 : -1;
      return new Date(a.lastAt).getTime() - new Date(b.lastAt).getTime();
    })
    .slice(0, HISTORY_LIST_LIMIT);

  // Resolve prompt text for just the rows we'll show: a card's prompt lives in the lesson's
  // recall_content array at its index; a check's question is re-found in the lesson body by its
  // prompt hash. An item whose question was edited away keeps an honest fallback label.
  const shown = [...recentMisses, ...dueAgain];
  const lessonIds = [...new Set(shown.map((r) => r.lessonId))];
  const contentRows = lessonIds.length
    ? await db
        .select({ id: lessons.id, textContent: lessons.textContent, recallContent: lessons.recallContent })
        .from(lessons)
        .where(and(eq(lessons.tenantId, tenantId), inArray(lessons.id, lessonIds)))
    : [];
  const contentByLesson = new Map(contentRows.map((r) => [r.id, r]));

  const resolvePrompt = (r: (typeof grouped)[number]): string => {
    const content = contentByLesson.get(r.lessonId);
    if (isRevealPromptIndex(r.promptIndex)) {
      return (
        findRevealByPromptIndex(content?.textContent, r.promptIndex)?.question ??
        "A check-yourself question (since edited)"
      );
    }
    return content?.recallContent?.[r.promptIndex]?.prompt ?? `Recall card ${r.promptIndex + 1}`;
  };
  const finish = (rows: typeof grouped): RecallHistoryEntry[] =>
    rows.map((r) => ({ ...toEntry(r), prompt: resolvePrompt(r) }));

  return {
    totalAttempts,
    recentMisses: finish(recentMisses),
    dueAgain: finish(dueAgain),
    courses: courseSummaries,
  };
}

// A single learner's own recall accuracy in a course (for their results view). Tenant-scoped.
export async function getUserCourseRecallStats(
  tenantId: string,
  userId: string,
  courseId: string,
): Promise<RecallStats> {
  const [row] = await db
    .select({
      attempts: sql<number>`count(*)`.mapWith(Number),
      gotIt: sql<number>`count(*) filter (where ${recallAttempts.gotIt})`.mapWith(Number),
    })
    .from(recallAttempts)
    .where(
      and(
        eq(recallAttempts.tenantId, tenantId),
        eq(recallAttempts.userId, userId),
        eq(recallAttempts.courseId, courseId),
      ),
    );
  const attempts = row?.attempts ?? 0;
  const gotIt = row?.gotIt ?? 0;
  return { attempts, gotIt, accuracy: attempts > 0 ? Math.round((gotIt / attempts) * 100) : null };
}
