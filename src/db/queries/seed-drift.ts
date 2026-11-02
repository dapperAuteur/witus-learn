import "server-only";
import { and, eq, isNull } from "drizzle-orm";
import { db } from "@/db/client";
import { courses, lessonSeedDrifts, lessons } from "@/db/schema";
import { readSeedContent, seedContentHash, seedContentOf, type SeedContent } from "@/lib/seed-drift";

// Seed drift reads and the two acknowledgments (plans/97 Q5). Every function takes the tenant and
// filters on it, so a drift id from another school reads and changes nothing.

export interface OpenSeedDrift {
  id: string;
  courseId: string;
  courseSlug: string | null;
  courseTitle: string;
  instructorId: string;
  lessonId: string;
  lessonSlug: string | null;
  lessonTitle: string;
  detectedAt: Date;
  lastCheckedAt: Date;
  app: SeedContent;
  file: SeedContent;
}

/**
 * Open warnings (not acknowledged), newest first. `instructorId` limits them to one instructor's
 * courses (/teach for a teacher); `courseId` to one course. A row whose lesson already equals the
 * file's version (someone fixed it by hand) is left out: there is nothing left to decide.
 */
export async function listOpenSeedDrifts(
  tenantId: string,
  opts: { instructorId?: string; courseId?: string } = {},
): Promise<OpenSeedDrift[]> {
  const rows = await db
    .select({
      drift: lessonSeedDrifts,
      courseSlug: courses.slug,
      courseTitle: courses.title,
      instructorId: courses.instructorId,
      lesson: {
        slug: lessons.slug,
        title: lessons.title,
        textContent: lessons.textContent,
        contentUrl: lessons.contentUrl,
        quizContent: lessons.quizContent,
        exerciseContent: lessons.exerciseContent,
        mapContent: lessons.mapContent,
        recallContent: lessons.recallContent,
      },
    })
    .from(lessonSeedDrifts)
    .innerJoin(courses, and(eq(courses.id, lessonSeedDrifts.courseId), eq(courses.tenantId, tenantId)))
    .innerJoin(lessons, eq(lessons.id, lessonSeedDrifts.lessonId))
    .where(
      and(
        eq(lessonSeedDrifts.tenantId, tenantId),
        isNull(lessonSeedDrifts.resolution),
        opts.instructorId ? eq(courses.instructorId, opts.instructorId) : undefined,
        opts.courseId ? eq(lessonSeedDrifts.courseId, opts.courseId) : undefined,
      ),
    );
  const out: OpenSeedDrift[] = [];
  for (const r of rows) {
    const file = readSeedContent(r.drift.fileContent);
    if (!file) continue;
    const app = seedContentOf(r.lesson as SeedContent);
    if (seedContentHash(app) === r.drift.fileHash) continue;
    out.push({
      id: r.drift.id,
      courseId: r.drift.courseId,
      courseSlug: r.courseSlug,
      courseTitle: r.courseTitle,
      instructorId: r.instructorId,
      lessonId: r.drift.lessonId,
      lessonSlug: r.lesson.slug,
      lessonTitle: r.lesson.title,
      detectedAt: r.drift.detectedAt,
      lastCheckedAt: r.drift.lastCheckedAt,
      app,
      file,
    });
  }
  return out.sort((a, b) => +b.lastCheckedAt - +a.lastCheckedAt);
}

/**
 * Acknowledge one warning. keep_app: the app's edit stays, and the warning stays quiet until the
 * course FILE changes again (the seeder compares file_hash). take_file: the file's version is written
 * into the lesson and recorded as what the seed wrote, and the warning is removed. Returns false when
 * the id is not an open warning on this tenant's course.
 */
export async function resolveSeedDrift(
  tenantId: string,
  courseId: string,
  driftId: string,
  action: "keep_app" | "take_file",
  userId: string,
): Promise<boolean> {
  const [row] = await db
    .select()
    .from(lessonSeedDrifts)
    .where(
      and(
        eq(lessonSeedDrifts.tenantId, tenantId),
        eq(lessonSeedDrifts.courseId, courseId),
        eq(lessonSeedDrifts.id, driftId),
        isNull(lessonSeedDrifts.resolution),
      ),
    )
    .limit(1);
  if (!row) return false;
  if (action === "keep_app") {
    await db
      .update(lessonSeedDrifts)
      .set({ resolution: "kept_app", resolvedAt: new Date(), resolvedBy: userId })
      .where(eq(lessonSeedDrifts.id, row.id));
    return true;
  }
  const file = readSeedContent(row.fileContent);
  if (!file) return false;
  await db
    .update(lessons)
    .set({
      title: file.title,
      textContent: file.textContent,
      contentUrl: file.contentUrl,
      quizContent: file.quizContent as typeof lessons.$inferInsert.quizContent,
      exerciseContent: file.exerciseContent as typeof lessons.$inferInsert.exerciseContent,
      mapContent: file.mapContent as typeof lessons.$inferInsert.mapContent,
      recallContent: file.recallContent as typeof lessons.$inferInsert.recallContent,
      seedHash: row.fileHash,
      updatedAt: new Date(),
    })
    .where(and(eq(lessons.id, row.lessonId), eq(lessons.courseId, courseId), eq(lessons.tenantId, tenantId)));
  await db.delete(lessonSeedDrifts).where(eq(lessonSeedDrifts.id, row.id));
  return true;
}
