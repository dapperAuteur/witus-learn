import { z } from "zod";
import { apiContext, auditorReadOnlyBlock, canAccessCourse, errorJson, json } from "@/lib/api";
import { isEnrolled } from "@/db/queries/enrollment";
import { getActiveLearner } from "@/lib/active-learner";
import { isUnvetted } from "@/lib/vetting";
import { NOTE_BODY_MAX } from "@/lib/annotations";

type Params = { params: Promise<{ id: string }> };

const CreateSchema = z.object({ body: z.string().trim().min(1).max(NOTE_BODY_MAX) });

// COURSE-level notes (2026-08-30): a learner's private notes about the course as a whole, as
// opposed to the per-lesson and per-passage notes at
// /api/courses/[id]/lessons/[lessonId]/notes. Stored in the same lesson_notes table with
// `lesson_id IS NULL` (src/db/schema/notes.ts), so nothing about anchoring, search, export or
// tenant scoping is duplicated.
//
// PRIVATE, always. There is deliberately no share, no cohort audience and no recipient here: a
// teacher note is content attached to a LESSON, visible where that lesson is (the plans/59
// guardrail), and lesson_notes_teacher_lesson_chk enforces that in the database. A course note
// is therefore the author's alone, and the only routes that can ever return one are this one and
// the author's own search/export.
//
// Access mirrors what the course page grants for the in-course search box
// (src/app/api/courses/[id]/search/route.ts): signed in AND enrolled as the ACTIVE learner, OR
// able to edit the course, OR holding an accepted audit grant on an unvetted course. Tenant
// scoping is end to end — the course resolves through sdb.getCourseById, which returns nothing
// for another tenant's id (so this 404s rather than redirecting, which would leak its existence),
// and every note read/write goes through the scoped DAL with tenant_id AND author_id baked in.

/** Resolve the course + the viewer's access once, for both verbs. */
async function gate(id: string) {
  const { sdb, session } = await apiContext();
  if (!session) return { error: errorJson("Sign in to use notes", 401) } as const;

  const course = await sdb.getCourseById(id);
  if (!course) return { error: errorJson("Not found", 404) } as const;

  const isEditor = await canAccessCourse(session, sdb.tenantId, course);
  // A draft course is invisible to everyone who cannot edit it — the same 404 the page gives.
  if (!course.isPublished && !isEditor) return { error: errorJson("Not found", 404) } as const;

  const learner = (await getActiveLearner(session))!;
  const enrolled = !isEditor ? await isEnrolled(learner.id, course.id) : false;
  // The audit grant belongs to the SIGNED-IN account (never the acted-as child) and only reads an
  // UNVETTED course. Checked last: it is the only branch that costs a query.
  const isAuditor =
    !isEditor && !enrolled && isUnvetted(course)
      ? await sdb.isCourseAuditor({
          courseId: course.id,
          userId: session.user.id,
          email: session.user.email ?? null,
        })
      : false;
  if (!isEditor && !enrolled && !isAuditor) {
    return { error: errorJson("Enroll in this course to keep notes on it", 403) } as const;
  }
  return { sdb, session, learner, course, isEditor, enrolled } as const;
}

// GET — the viewer's OWN course-level notes, oldest first. Nobody else's, ever.
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const g = await gate(id);
  if ("error" in g) return g.error;
  const notes = await g.sdb.listOwnCourseLevelNotes(g.learner.id, id);
  return json({ own: notes });
}

// POST — create a course-level note. Auditors read courses and record nothing, so their writes
// are refused like every other learning write (plans/52 §5).
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const g = await gate(id);
  if ("error" in g) return g.error;

  const blocked = await auditorReadOnlyBlock({
    session: g.session,
    tenantId: g.sdb.tenantId,
    course: g.course,
    isEditor: g.isEditor,
    isEnrolled: g.enrolled,
  });
  if (blocked) return blocked;

  const parsed = CreateSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  // lessonId null is what makes this a course note; the anchor fields stay null because there is
  // no body of prose to quote from.
  const note = await g.sdb.createNote({
    courseId: id,
    lessonId: null,
    authorId: g.learner.id,
    body: parsed.data.body,
  });
  return json({ note }, 201);
}
