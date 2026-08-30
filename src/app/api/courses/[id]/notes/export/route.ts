import { apiContext, errorJson } from "@/lib/api";
import { getActiveLearner } from "@/lib/active-learner";
import { listLessons } from "@/db/queries/authoring";
import { buildNotesMarkdown } from "@/lib/notes-export";

type Params = { params: Promise<{ id: string }> };

// GET /api/courses/[id]/notes/export — the viewer's own notes for one course as a markdown file
// (plans/61 §0: exportable, designed in rather than retrofitted; §7 picked markdown with the
// quoted passage and a link back to the lesson). A learner's notes are THEIR work: the export is
// always available, always complete, and contains only their own notes — never a teacher's sent
// notes (those are the teacher's writing) and never anything shared TO them.
//
// "Complete" now includes COURSE-level notes (lesson_id IS NULL), which lead the file under their
// own heading. The assembly itself is pure and lives in src/lib/notes-export.ts.
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
  const urlByLessonSlug = new Map(
    locations
      .filter((loc) => loc.username && loc.lessonSlug)
      .map((loc) => [loc.lessonSlug as string, `/${loc.username}/${loc.courseSlug}/lesson/${loc.lessonSlug}`]),
  );
  const origin = new URL(req.url).origin;

  const markdown = buildNotesMarkdown({
    courseTitle: course.title,
    exportedOn: new Date().toISOString().slice(0, 10),
    notes,
    lessons: lessons.map((l) => ({ id: l.id, title: l.title, slug: l.slug })),
    lessonUrl: (slug) => {
      const path = urlByLessonSlug.get(slug);
      return path ? `${origin}${path}` : null;
    },
  });

  const filename = `notes-${course.slug ?? id}.md`;
  return new Response(markdown, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "content-disposition": `attachment; filename="${filename}"`,
    },
  });
}
