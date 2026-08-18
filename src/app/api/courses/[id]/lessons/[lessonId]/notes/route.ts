import { z } from "zod";
import { apiContext, auditorReadOnlyBlock, canEditCourse, errorJson, json } from "@/lib/api";
import { getLessonById, listLessons } from "@/db/queries/authoring";
import { getCompletedLessonIds } from "@/db/queries/progress";
import { isEnrolled } from "@/db/queries/enrollment";
import { lessonAccess } from "@/lib/gating";
import { getActiveLearner } from "@/lib/active-learner";
import { listCohorts, listMembers } from "@/db/queries/cohorts";
import {
  NOTE_BLOCK_ID_MAX,
  NOTE_BODY_MAX,
  NOTE_CONTEXT_MAX,
  NOTE_QUOTE_MAX,
  quoteStillResolves,
} from "@/lib/annotations";

type Params = { params: Promise<{ id: string; lessonId: string }> };

const CreateSchema = z.object({
  body: z.string().trim().min(1).max(NOTE_BODY_MAX),
  // Anchor fields travel together: a quote alone is enough (context and blockId improve
  // re-finding), but context/blockId without a quote anchors nothing and is rejected.
  quote: z.string().min(1).max(NOTE_QUOTE_MAX).optional(),
  contextPrefix: z.string().max(NOTE_CONTEXT_MAX).optional(),
  contextSuffix: z.string().max(NOTE_CONTEXT_MAX).optional(),
  blockId: z.string().max(NOTE_BLOCK_ID_MAX).optional(),
});

/** Shared per-request gate: resolves course + lesson (tenant-scoped, 404 across tenants) and the
 *  viewer's access. Notes exist only where the lesson itself is readable. */
async function gate(id: string, lessonId: string) {
  const { sdb, session } = await apiContext();
  if (!session) return { error: errorJson("Sign in to use notes", 401) } as const;
  const learner = (await getActiveLearner(session))!;

  const course = await sdb.getCourseById(id);
  if (!course) return { error: errorJson("Not found", 404) } as const;
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id) return { error: errorJson("Not found", 404) } as const;

  const isEditor = await canEditCourse(session, sdb.tenantId, course);
  const all = await listLessons(id);
  const ordered = (isEditor ? all : all.filter((l) => l.isPublished)).map((l) => l.id);
  const completed = new Set(await getCompletedLessonIds(learner.id, id));
  const enrolled = await isEnrolled(learner.id, id);
  const access = lessonAccess(course, lesson, {
    isEditor,
    isEnrolled: enrolled,
    completedLessonIds: completed,
    orderedLessonIds: ordered,
  });
  return { sdb, session, learner, course, lesson, isEditor, enrolled, access } as const;
}

// GET /api/courses/[id]/lessons/[lessonId]/notes — everything the viewer may see on this lesson:
// their own notes (with share state and whether each anchored quote still resolves), teacher
// notes sent to them, and — when the viewer teaches — notes students shared with them plus their
// own sent notes. Visibility rules live in src/db/queries/notes.ts.
export async function GET(_req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const g = await gate(id, lessonId);
  if ("error" in g) return g.error;
  const { sdb, learner, access } = g;
  if (!access.open) return errorJson("Forbidden", 403);

  const [own, teacherNotes, sharedWithMe, sent, teachers, bodyText, ownedCohorts] =
    await Promise.all([
      sdb.listOwnLessonNotes(learner.id, lessonId),
      sdb.listTeacherNotesForStudent(learner.id, lessonId),
      sdb.listNotesSharedWithTeacher(g.session.user.id, lessonId),
      sdb.listSentTeacherNotes(g.session.user.id, lessonId),
      sdb.listTeachersForLearner(learner.id),
      sdb.getLessonBodyText(lessonId),
      // The compose-to-cohort surface: cohorts the ACCOUNT owns (never the acted-as child).
      listCohorts(sdb.tenantId, g.session.user.id),
    ]);
  const myCohorts = await Promise.all(
    ownedCohorts.map(async (c) => ({
      id: c.id,
      name: c.name,
      members: (await listMembers(sdb.tenantId, c.id)).map((m) => ({
        userId: m.userId,
        name: m.displayName,
      })),
    })),
  );
  const shares = await sdb.listNoteShares(learner.id, own.map((n) => n.id));
  const sharesByNote = new Map<string, { teacherUserId: string; teacherName: string | null }[]>();
  for (const s of shares) {
    const list = sharesByNote.get(s.noteId) ?? [];
    list.push({ teacherUserId: s.teacherUserId, teacherName: s.teacherName });
    sharesByNote.set(s.noteId, list);
  }

  return json({
    own: own.map((n) => ({
      ...n,
      resolves: quoteStillResolves(bodyText, n.quote),
      sharedWith: sharesByNote.get(n.id) ?? [],
    })),
    teacherNotes: teacherNotes.map((n) => ({ ...n, resolves: quoteStillResolves(bodyText, n.quote) })),
    sharedWithMe: sharedWithMe.map((n) => ({ ...n, resolves: quoteStillResolves(bodyText, n.quote) })),
    sent,
    teachers,
    myCohorts,
  });
}

// POST — create a personal note (lesson-level, or anchored to a selection). Auditors read courses
// and record nothing, so their writes are refused like every other learning write (plans/52 §5).
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const g = await gate(id, lessonId);
  if ("error" in g) return g.error;
  const { sdb, session, learner, course, isEditor, enrolled, access } = g;

  const blocked = await auditorReadOnlyBlock({ session, tenantId: sdb.tenantId, course, isEditor, isEnrolled: enrolled });
  if (blocked) return blocked;
  if (!access.open) return errorJson("Forbidden", 403);

  const parsed = CreateSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { body, quote, contextPrefix, contextSuffix, blockId } = parsed.data;
  if (!quote && (contextPrefix || contextSuffix || blockId)) {
    return errorJson("Anchor context without a quote anchors nothing", 400);
  }

  const note = await sdb.createNote({
    courseId: id,
    lessonId,
    authorId: learner.id,
    body,
    quote: quote ?? null,
    contextPrefix: contextPrefix ?? null,
    contextSuffix: contextSuffix ?? null,
    blockId: blockId ?? null,
  });
  return json({ note }, 201);
}
