import { apiContext, errorJson } from "@/lib/api";
import { getActiveLearner } from "@/lib/active-learner";
import { listLessons } from "@/db/queries/authoring";

type Params = { params: Promise<{ id: string }> };

// GET /api/courses/[id]/notes/export — the viewer's own notes for one course as a markdown file
// (plans/61 §0: exportable, designed in rather than retrofitted; §7 picked markdown with the
// quoted passage and a link back to the lesson). A learner's notes are THEIR work: the export is
// always available, always complete, and contains only their own notes — never a teacher's sent
// notes (those are the teacher's writing) and never anything shared TO them.
export async function GET(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Sign in to export your notes", 401);
  const learner = (await getActiveLearner(session))!;

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);

  const [notes, lessons, locations] = await Promise.all([
    sdb.listOwnCourseNotes(learner.id, id),
    listLessons(id),
    // The pretty URL's username half comes from the instructor's profile; this query is the
    // authority on lesson URLs (never hand-assemble them from guessed parts).
    course.slug ? sdb.listLessonLocations([course.slug]) : Promise.resolve([]),
  ]);
  const lessonById = new Map(lessons.map((l) => [l.id, l]));
  const urlByLessonSlug = new Map(
    locations
      .filter((loc) => loc.username && loc.lessonSlug)
      .map((loc) => [loc.lessonSlug as string, `/${loc.username}/${loc.courseSlug}/lesson/${loc.lessonSlug}`]),
  );
  const origin = new URL(req.url).origin;

  const lines: string[] = [
    `# My notes, ${course.title}`,
    "",
    `Exported ${new Date().toISOString().slice(0, 10)}. ${notes.length} note${notes.length === 1 ? "" : "s"}.`,
    "",
  ];
  // Group by lesson, in course order; notes within a lesson stay in creation order.
  const byLesson = new Map<string, typeof notes>();
  for (const n of notes) {
    const list = byLesson.get(n.lessonId) ?? [];
    list.push(n);
    byLesson.set(n.lessonId, list);
  }
  const orderedLessonIds = [
    ...lessons.map((l) => l.id).filter((lid) => byLesson.has(lid)),
    ...[...byLesson.keys()].filter((lid) => !lessonById.has(lid)),
  ];
  for (const lessonId of orderedLessonIds) {
    const lesson = lessonById.get(lessonId);
    lines.push(`## ${lesson?.title ?? "A lesson that has since been removed"}`);
    const path = lesson?.slug ? urlByLessonSlug.get(lesson.slug) : null;
    if (path) lines.push("", `${origin}${path}`);
    lines.push("");
    for (const n of byLesson.get(lessonId) ?? []) {
      if (n.quote) lines.push(`> ${n.quote.replace(/\n/g, " ")}`, "");
      lines.push(n.body, "");
    }
  }

  const filename = `notes-${course.slug ?? id}.md`;
  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "content-disposition": `attachment; filename="${filename}"`,
    },
  });
}
