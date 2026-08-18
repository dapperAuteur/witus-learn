import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getActiveLearner } from "@/lib/active-learner";
import { NOTE_BODY_MAX } from "@/lib/annotations";

type Params = { params: Promise<{ noteId: string }> };

const PatchSchema = z.object({ body: z.string().trim().min(1).max(NOTE_BODY_MAX) });

// PATCH /api/notes/[noteId] — edit the body of the viewer's OWN note. The anchor (quote, context,
// block id) is immutable: it records what the learner selected when they wrote the note, and
// rewriting it would falsify the citation. Ownership + tenant scoping ride inside the query, so a
// foreign id (other tenant, other author) is a plain 404 that reveals nothing.
export async function PATCH(req: Request, { params }: Params) {
  const { noteId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const learner = (await getActiveLearner(session))!;

  const parsed = PatchSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  // A parent acting as a child edits the child's notes; a teacher's sent notes belong to the
  // account itself. Try the active learner first, then the raw account for teacher-sent notes.
  const updated =
    (await sdb.updateOwnNote(learner.id, noteId, parsed.data.body)) ??
    (learner.id !== session.user.id
      ? await sdb.updateOwnNote(session.user.id, noteId, parsed.data.body)
      : null);
  if (!updated) return errorJson("Not found", 404);
  return json({ note: updated });
}

// DELETE — remove the viewer's OWN note (a student's personal note, or a teacher's sent note,
// which withdraws it from the cohort; share and recipient rows cascade with it).
export async function DELETE(_req: Request, { params }: Params) {
  const { noteId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const learner = (await getActiveLearner(session))!;

  const deleted =
    (await sdb.deleteOwnNote(learner.id, noteId)) ||
    (learner.id !== session.user.id ? await sdb.deleteOwnNote(session.user.id, noteId) : false);
  if (!deleted) return errorJson("Not found", 404);
  return json({ ok: true });
}
