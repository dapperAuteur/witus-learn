import "server-only";
import { and, eq, inArray } from "drizzle-orm";
import { db } from "@/db/client";
import { courseSources, lessons, type Course } from "@/db/schema";
import { getUsername } from "@/db/queries/authoring";
import { cachedLessonSummaries } from "@/lib/public-cache";
import { bibliographyAccess } from "@/lib/course-bibliography";
import { coursePagePath } from "@/lib/course-href";
import { cleanChunkSource } from "@/lib/rag/content-hash";
import {
  duplicateTitleLessonIds,
  type CitationChunk,
  type CitationLinkContext,
  type LinkableSource,
} from "@/lib/source-chat-links";

// Gathers what src/lib/source-chat-links.ts needs to turn a source-chat answer's chunks into links.
// Every read is keyed by THIS course's id (which the caller got from the tenant-scoped data layer),
// so a link can only ever point inside the course being asked about.

export async function loadCitationLinkContext(
  course: Course,
  chunks: readonly CitationChunk[],
  viewer: { isEditor: boolean },
): Promise<CitationLinkContext> {
  const sourceIds = [...new Set(chunks.flatMap((c) => (c.kind === "citation" && c.sourceId ? [c.sourceId] : [])))];
  const hasLessonChunks = chunks.some((c) => c.kind === "lesson");

  const [username, summaries, sourceRows] = await Promise.all([
    getUsername(course.instructorId),
    hasLessonChunks ? cachedLessonSummaries(course.id) : Promise.resolve([]),
    sourceIds.length
      ? db
          .select({ id: courseSources.id, url: courseSources.url, pdfUrl: courseSources.pdfUrl, doi: courseSources.doi })
          .from(courseSources)
          .where(and(eq(courseSources.courseId, course.id), inArray(courseSources.id, sourceIds)))
      : Promise.resolve([] as LinkableSource[]),
  ]);

  // The canonical page only: the `/course/{id}` fallback redirects and has no lesson or sources routes.
  const path = coursePagePath(course, username);
  const coursePath = path.startsWith("/course/") ? null : path;

  // The same list the lesson route looks its slug up in (loadCourseView): editors see every lesson,
  // everyone else only published ones.
  const visible = summaries
    .filter((l) => viewer.isEditor || l.isPublished)
    .map((l) => ({ id: l.id, title: l.title, slug: l.slug }));

  // Lesson titles are not unique within a course. Only when a cited title is shared are the bodies of
  // those few lessons read, to see which one the chunk came from.
  const citedTitles = chunks.flatMap((c) => (c.kind === "lesson" && c.title ? [c.title] : []));
  const dupIds = duplicateTitleLessonIds(visible, citedTitles);
  let duplicateTitleBodies: Map<string, string> | undefined;
  if (dupIds.length) {
    const rows = await db
      .select({ id: lessons.id, body: lessons.textContent })
      .from(lessons)
      .where(and(eq(lessons.courseId, course.id), inArray(lessons.id, dupIds)));
    duplicateTitleBodies = new Map(rows.map((r) => [r.id, cleanChunkSource(r.body ?? "")]));
  }

  const sourcesPageHref =
    coursePath && bibliographyAccess(course, { isEditor: viewer.isEditor, isAuditor: false }) !== "not-found"
      ? `${coursePath}/sources`
      : null;

  return {
    coursePath,
    lessons: visible,
    sources: new Map(sourceRows.map((s) => [s.id, s])),
    sourcesPageHref,
    duplicateTitleBodies,
  };
}
