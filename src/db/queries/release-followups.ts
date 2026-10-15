import "server-only";
import { and, asc, eq, inArray } from "drizzle-orm";
import { db } from "@/db/client";
import {
  courseLaunchTodos,
  courseReleaseFollowups,
  type CourseLaunchTodo,
  type CourseReleaseFollowup,
} from "@/db/schema";
import {
  committedTodo,
  courseStage,
  followUpDue,
  followUpsForCourse,
  followUpsForTenant,
  stageReaches,
  type LaunchTodo,
  type FollowUpWhen,
  type CourseStage,
  type CourseStageInput,
  type FollowUpDue,
  type FollowUpStatus,
  type ReleaseFollowUp,
} from "@/lib/release-followups";

// What the owner did about each release follow-up (/admin/follow-ups). Every read and write is
// tenant-scoped, and the tenant is always resolved server-side from the host, never from the client.
// The definitions are committed code in src/lib/release-followups.ts; due-ness is computed here from
// the course rows the caller passes in, never stored.

export interface UpsertReleaseFollowup {
  tenantId: string;
  followupKey: string;
  status: FollowUpStatus;
  note: string | null;
  decidedBy: string | null;
}

export async function upsertReleaseFollowup(v: UpsertReleaseFollowup): Promise<CourseReleaseFollowup> {
  const [row] = await db
    .insert(courseReleaseFollowups)
    .values(v)
    .onConflictDoUpdate({
      target: [courseReleaseFollowups.tenantId, courseReleaseFollowups.followupKey],
      set: { status: v.status, note: v.note, decidedBy: v.decidedBy, updatedAt: new Date() },
    })
    .returning();
  return row;
}

export async function releaseFollowupsByKey(tenantId: string): Promise<Map<string, CourseReleaseFollowup>> {
  const rows = await db
    .select()
    .from(courseReleaseFollowups)
    .where(eq(courseReleaseFollowups.tenantId, tenantId))
    .limit(1000);
  return new Map(rows.map((r) => [r.followupKey, r]));
}

export interface FollowUpView {
  followUp: ReleaseFollowUp;
  due: FollowUpDue;
  status: FollowUpStatus;
  row: CourseReleaseFollowup | null;
}

/**
 * Every follow-up defined for this tenant, joined to its stored status and its due state. `courses`
 * must be THIS tenant's rows (the scoped DAL's listCourses), so a slug that only exists on another
 * school reads as "missing" here and its follow-up never falls due.
 */
export function viewFollowUps(
  tenantSlug: string,
  courses: (CourseStageInput & { slug: string | null })[],
  rows: Map<string, CourseReleaseFollowup>,
): FollowUpView[] {
  const bySlug = new Map<string, CourseStage>();
  for (const c of courses) if (c.slug) bySlug.set(c.slug, courseStage(c));
  return followUpsForTenant(tenantSlug).map((f) => {
    const row = rows.get(f.key) ?? null;
    return {
      followUp: f,
      due: followUpDue(f, (slug) => bySlug.get(slug) ?? "missing"),
      status: (row?.status ?? "open") as FollowUpStatus,
      row,
    };
  });
}

// ── Items added on the course page (course_launch_todos) ─────────────────────────────────────────
// Every read and write names BOTH the tenant and the course, so an id from another school or another
// course matches nothing.

export interface NewLaunchTodo {
  tenantId: string;
  courseId: string;
  kind: "task" | "blog-post";
  title: string;
  blogName: string | null;
  postUrl: string | null;
  dueWhen: FollowUpWhen;
  createdBy: string;
}

export async function addLaunchTodo(v: NewLaunchTodo): Promise<CourseLaunchTodo> {
  const [row] = await db.insert(courseLaunchTodos).values(v).returning();
  return row;
}

export async function updateLaunchTodo(
  tenantId: string,
  courseId: string,
  id: string,
  patch: { status?: FollowUpStatus; note?: string | null; postUrl?: string | null; decidedBy: string },
): Promise<CourseLaunchTodo | undefined> {
  const [row] = await db
    .update(courseLaunchTodos)
    .set({ ...patch, updatedAt: new Date() })
    .where(
      and(eq(courseLaunchTodos.tenantId, tenantId), eq(courseLaunchTodos.courseId, courseId), eq(courseLaunchTodos.id, id)),
    )
    .returning();
  return row;
}

export async function deleteLaunchTodo(tenantId: string, courseId: string, id: string): Promise<boolean> {
  const rows = await db
    .delete(courseLaunchTodos)
    .where(
      and(eq(courseLaunchTodos.tenantId, tenantId), eq(courseLaunchTodos.courseId, courseId), eq(courseLaunchTodos.id, id)),
    )
    .returning({ id: courseLaunchTodos.id });
  return rows.length > 0;
}

/** Added items for some of this tenant's courses (all of them when `courseIds` is omitted). */
export async function listLaunchTodos(tenantId: string, courseIds?: string[]): Promise<CourseLaunchTodo[]> {
  if (courseIds && courseIds.length === 0) return [];
  return db
    .select()
    .from(courseLaunchTodos)
    .where(
      courseIds
        ? and(eq(courseLaunchTodos.tenantId, tenantId), inArray(courseLaunchTodos.courseId, courseIds))
        : eq(courseLaunchTodos.tenantId, tenantId),
    )
    .orderBy(asc(courseLaunchTodos.createdAt))
    .limit(2000);
}

export function customTodo(row: CourseLaunchTodo, stage: ReturnType<typeof courseStage>): LaunchTodo {
  const when = row.dueWhen as FollowUpWhen;
  return {
    id: row.id,
    source: "custom",
    kind: row.kind as "task" | "blog-post",
    title: row.title,
    detail: null,
    when,
    status: row.status as FollowUpStatus,
    note: row.note,
    blogName: row.blogName,
    postTitle: null,
    postUrl: row.postUrl,
    ref: null,
    due: stageReaches(stage, when),
  };
}

/**
 * One course's whole launch to-do list: the committed follow-ups that name it, then the items added
 * on its page. `courses` must be THIS tenant's rows, because a committed follow-up can wait on several
 * courses and is due only when all of them are there.
 */
export async function launchTodosForCourse(
  tenant: { id: string; slug: string },
  course: CourseStageInput & { id: string; slug: string | null },
  courses: (CourseStageInput & { slug: string | null })[],
): Promise<LaunchTodo[]> {
  const committed = course.slug ? followUpsForCourse(tenant.slug, course.slug) : [];
  const [rows, custom] = await Promise.all([
    committed.length ? releaseFollowupsByKey(tenant.id) : Promise.resolve(new Map<string, CourseReleaseFollowup>()),
    listLaunchTodos(tenant.id, [course.id]),
  ]);
  const bySlug = new Map<string, CourseStage>();
  for (const c of courses) if (c.slug) bySlug.set(c.slug, courseStage(c));
  return [
    ...committed.map((f) => {
      const row = rows.get(f.key);
      return committedTodo(
        f,
        followUpDue(f, (slug) => bySlug.get(slug) ?? "missing"),
        (row?.status ?? "open") as FollowUpStatus,
        row?.note ?? null,
      );
    }),
    ...custom.map((r) => customTodo(r, courseStage(course))),
  ];
}
