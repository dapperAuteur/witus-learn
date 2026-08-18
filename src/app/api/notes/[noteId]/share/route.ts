import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getActiveLearner } from "@/lib/active-learner";

type Params = { params: Promise<{ noteId: string }> };

const Schema = z.object({ teacherUserId: z.string().min(1).max(200) });

// POST /api/notes/[noteId]/share — share ONE of the viewer's own notes with ONE of their
// teachers. Per-note, opt-in, explicit (plans/61 §3): there is deliberately no bulk toggle
// anywhere, and the teacher must actually BE one of the learner's teachers (an owner of a cohort
// the learner belongs to, in this tenant) — a request naming anyone else is refused without
// revealing whether that account exists.
export async function POST(req: Request, { params }: Params) {
  const { noteId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const learner = (await getActiveLearner(session))!;

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { teacherUserId } = parsed.data;

  const teachers = await sdb.listTeachersForLearner(learner.id);
  if (!teachers.some((t) => t.id === teacherUserId)) {
    return errorJson("You can only share with your own teachers", 403);
  }

  const ok = await sdb.shareNoteWithTeacher(learner.id, noteId, teacherUserId);
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}

// DELETE — withdraw the share. The teacher loses access the moment the row is gone.
export async function DELETE(req: Request, { params }: Params) {
  const { noteId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const learner = (await getActiveLearner(session))!;

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const ok = await sdb.unshareNote(learner.id, noteId, parsed.data.teacherUserId);
  if (!ok) return errorJson("Not found", 404);
  return json({ ok: true });
}
