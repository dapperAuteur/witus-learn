import "server-only";
import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { lessons } from "@/db/schema/courses";
import { linkClicks } from "@/db/schema/learning";

// Privacy-light click counter: counts only, no user/IP/cookies. The upsert targets the
// hand-written COALESCE(lesson_id, sentinel) unique index so course-page links (null lesson)
// share one row instead of inserting on every click.
export async function recordLinkClick(input: {
  tenantId: string;
  courseId: string;
  lessonId: string | null;
  kind: "content" | "ecosystem";
  url: string;
}): Promise<void> {
  const { tenantId, courseId, lessonId, kind, url } = input;
  await db.execute(sql`
    insert into link_clicks (tenant_id, course_id, lesson_id, kind, url, click_count, first_clicked_at, last_clicked_at)
    values (${tenantId}, ${courseId}, ${lessonId}, ${kind}, ${url}, 1, now(), now())
    on conflict (tenant_id, course_id, (coalesce(lesson_id, '00000000-0000-0000-0000-000000000000'::uuid)), url)
    do update set click_count = link_clicks.click_count + 1, last_clicked_at = now()
  `);
}

export interface LinkUsageRow {
  url: string;
  kind: string;
  lessonTitle: string | null;
  clickCount: number;
  lastClickedAt: Date;
}

// Instructor "Link usage" panel: which outbound links in this course get clicked. Tenant-scoped.
export async function listLinkUsage(tenantId: string, courseId: string): Promise<LinkUsageRow[]> {
  return db
    .select({
      url: linkClicks.url,
      kind: linkClicks.kind,
      lessonTitle: lessons.title,
      clickCount: linkClicks.clickCount,
      lastClickedAt: linkClicks.lastClickedAt,
    })
    .from(linkClicks)
    .leftJoin(lessons, eq(lessons.id, linkClicks.lessonId))
    .where(and(eq(linkClicks.tenantId, tenantId), eq(linkClicks.courseId, courseId)))
    .orderBy(desc(linkClicks.clickCount));
}
