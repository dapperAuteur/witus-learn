import "server-only";
import { and, desc, eq, inArray, isNotNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { courses, enrollments, lessonProgress, lessons, userProfiles, type Course } from "@/db/schema";
import { listLessons } from "@/db/queries/authoring";

export interface NextLesson {
  slug: string;
  title: string;
  lessonType: string;
}

export interface DashboardCourse {
  course: Course;
  username: string | null;
  total: number;
  completed: number;
  /** 0–100, integer. */
  percent: number;
  lastActivity: Date | null;
}

export interface Badge {
  key: string;
  label: string;
  icon: string;
  earned: boolean;
}

export interface LearnerDashboard {
  courses: DashboardCourse[];
  /** The course to resume (most recently active and not yet finished), or null. */
  resume: DashboardCourse | null;
  /** Next + a few upcoming lessons in the resume course. */
  upNext: NextLesson[];
  /** Consecutive days (ending today or yesterday) with a completed lesson. */
  streak: number;
  /** Best streak ever (longest run of consecutive active days). */
  bestStreak: number;
  /** Last 7 days, oldest → newest. */
  week: { label: string; count: number; active: boolean }[];
  daysActive: number;
  // Derived gamification (no extra storage). Shown per the tenant's gamification flag.
  xp: number;
  level: number;
  xpIntoLevel: number;
  xpForLevel: number;
  badges: Badge[];
}

const XP_PER_LEVEL = 500;

/** XP + level + badges, all derived from existing progress — no points table to drift. */
function computeGamification(totalCompleted: number, coursesCompleted: number, bestStreak: number) {
  const xp = totalCompleted * 10 + coursesCompleted * 100;
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const badges: Badge[] = [
    { key: "first-steps", label: "First steps", icon: "🌱", earned: totalCompleted >= 1 },
    { key: "streak-3", label: "3-day streak", icon: "⚡", earned: bestStreak >= 3 },
    { key: "on-fire", label: "7-day streak", icon: "🔥", earned: bestStreak >= 7 },
    { key: "dedicated", label: "2-week streak", icon: "💎", earned: bestStreak >= 14 },
    { key: "finisher", label: "Course finisher", icon: "🏅", earned: coursesCompleted >= 1 },
    { key: "scholar", label: "Scholar · 3 courses", icon: "🎓", earned: coursesCompleted >= 3 },
    { key: "centurion", label: "100 lessons", icon: "💯", earned: totalCompleted >= 100 },
  ];
  return { xp, level, xpIntoLevel: xp % XP_PER_LEVEL, xpForLevel: XP_PER_LEVEL, badges };
}

const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const dayKey = (d: Date) => d.toISOString().slice(0, 10); // YYYY-MM-DD (UTC, matches date_trunc)

/**
 * The learner's home data for one tenant: enrolled courses with mastery %, the course
 * to resume + what's next, and a streak / weekly-activity. TENANT-SCOPED — every read
 * joins lessons (which carry tenant_id) or filters enrollments by tenant, so a learner
 * never sees another tenant's progress.
 */
export async function getLearnerDashboard(tenantId: string, userId: string): Promise<LearnerDashboard> {
  const enrolled = await db
    .select({ course: courses, enrolledAt: enrollments.enrolledAt })
    .from(enrollments)
    .innerJoin(courses, eq(courses.id, enrollments.courseId))
    .where(
      and(
        eq(enrollments.tenantId, tenantId),
        eq(enrollments.userId, userId),
        eq(enrollments.status, "active"),
        eq(courses.isPublished, true),
      ),
    )
    .orderBy(desc(enrollments.enrolledAt));

  // Streak / week come from ALL completed lessons in this tenant, even if the course
  // was since unenrolled — so a learner's history is honest.
  const dayRows = await db
    .select({
      day: sql<string>`to_char(date_trunc('day', ${lessonProgress.completedAt}), 'YYYY-MM-DD')`,
      count: sql<number>`count(*)::int`,
    })
    .from(lessonProgress)
    .innerJoin(lessons, eq(lessons.id, lessonProgress.lessonId))
    .where(and(eq(lessonProgress.userId, userId), eq(lessons.tenantId, tenantId), isNotNull(lessonProgress.completedAt)))
    .groupBy(sql`date_trunc('day', ${lessonProgress.completedAt})`);
  const dayCount = new Map(dayRows.map((r) => [r.day, r.count]));
  const { streak, bestStreak, week, daysActive } = computeStreaks(dayCount);
  const totalCompleted = [...dayCount.values()].reduce((s, n) => s + n, 0);

  if (enrolled.length === 0) {
    return {
      courses: [],
      resume: null,
      upNext: [],
      streak,
      bestStreak,
      week,
      daysActive,
      ...computeGamification(totalCompleted, 0, bestStreak),
    };
  }

  const courseIds = enrolled.map((e) => e.course.id);

  const totalsRows = await db
    .select({ courseId: lessons.courseId, total: sql<number>`count(*)::int` })
    .from(lessons)
    .where(and(inArray(lessons.courseId, courseIds), eq(lessons.isPublished, true)))
    .groupBy(lessons.courseId);
  const totals = new Map(totalsRows.map((r) => [r.courseId, r.total]));

  const completedRows = await db
    .select({
      courseId: lessons.courseId,
      done: sql<number>`count(*) filter (where ${lessonProgress.completedAt} is not null)::int`,
      lastActivity: sql<string | null>`max(${lessonProgress.updatedAt})`,
    })
    .from(lessonProgress)
    .innerJoin(lessons, eq(lessons.id, lessonProgress.lessonId))
    .where(and(eq(lessonProgress.userId, userId), inArray(lessons.courseId, courseIds)))
    .groupBy(lessons.courseId);
  const progress = new Map(completedRows.map((r) => [r.courseId, r]));

  const instructorIds = [...new Set(enrolled.map((e) => e.course.instructorId))];
  const profRows = instructorIds.length
    ? await db
        .select({ userId: userProfiles.userId, username: userProfiles.username })
        .from(userProfiles)
        .where(inArray(userProfiles.userId, instructorIds))
    : [];
  const usernames = new Map(profRows.map((p) => [p.userId, p.username]));

  const dashCourses: DashboardCourse[] = enrolled.map((e) => {
    const total = totals.get(e.course.id) ?? 0;
    const p = progress.get(e.course.id);
    const done = p?.done ?? 0;
    return {
      course: e.course,
      username: usernames.get(e.course.instructorId) ?? null,
      total,
      completed: done,
      percent: total > 0 ? Math.round((done / total) * 100) : 0,
      lastActivity: p?.lastActivity ? new Date(p.lastActivity) : null,
    };
  });

  const resume =
    [...dashCourses]
      .filter((d) => d.percent < 100)
      .sort((a, b) => (b.lastActivity?.getTime() ?? 0) - (a.lastActivity?.getTime() ?? 0))[0] ?? null;

  let upNext: NextLesson[] = [];
  if (resume) {
    const published = (await listLessons(resume.course.id)).filter((l) => l.isPublished && l.slug);
    const completedIds = new Set(
      (
        await db
          .select({ id: lessonProgress.lessonId })
          .from(lessonProgress)
          .innerJoin(lessons, eq(lessons.id, lessonProgress.lessonId))
          .where(
            and(
              eq(lessonProgress.userId, userId),
              eq(lessons.courseId, resume.course.id),
              isNotNull(lessonProgress.completedAt),
            ),
          )
      ).map((r) => r.id),
    );
    upNext = published
      .filter((l) => !completedIds.has(l.id))
      .slice(0, 3)
      .map((l) => ({ slug: l.slug as string, title: l.title, lessonType: l.lessonType }));
  }

  const coursesCompleted = dashCourses.filter((d) => d.percent === 100).length;
  return {
    courses: dashCourses,
    resume,
    upNext,
    streak,
    bestStreak,
    week,
    daysActive,
    ...computeGamification(totalCompleted, coursesCompleted, bestStreak),
  };
}

function computeStreaks(dayCount: Map<string, number>) {
  const today = new Date();

  let streak = 0;
  for (let i = 0; ; i++) {
    const d = new Date(today);
    d.setUTCDate(today.getUTCDate() - i);
    if (dayCount.has(dayKey(d))) streak++;
    else if (i === 0) continue; // today not done yet doesn't break a run from yesterday
    else break;
  }

  // Best streak: longest run across all active days.
  const keys = [...dayCount.keys()].sort();
  let bestStreak = 0;
  let run = 0;
  let prev: Date | null = null;
  for (const k of keys) {
    const d = new Date(`${k}T00:00:00Z`);
    if (prev && (d.getTime() - prev.getTime()) / 86400000 === 1) run++;
    else run = 1;
    bestStreak = Math.max(bestStreak, run);
    prev = d;
  }

  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setUTCDate(today.getUTCDate() - (6 - i));
    const key = dayKey(d);
    return { label: DOW[d.getUTCDay()], count: dayCount.get(key) ?? 0, active: dayCount.has(key) };
  });

  return { streak, bestStreak: Math.max(bestStreak, streak), week, daysActive: dayCount.size };
}
