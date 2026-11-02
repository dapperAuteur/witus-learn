import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { parseDriftAction } from "@/lib/seed-drift";

type Params = { params: Promise<{ id: string; driftId: string }> };

// POST /api/courses/[id]/seed-drift/[driftId] {action: "keep_app" | "take_file"} (plans/97 Q5).
//
// The acknowledgment of one "edited in the app since the last seed" warning. Only the lesson's
// author (the course's instructor) or the platform owner decides, because the choice is whose words
// the lesson keeps. keep_app quiets the warning until the course file changes again; take_file writes
// the file's version into the lesson (which, like any edit, resets that lesson's reviewer verdicts).
// Tenant-scoped: a course or warning id from another school is 404.
export async function POST(req: Request, { params }: Params) {
  const { id, driftId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  if (course.instructorId !== session.user.id && !(await isPlatformOwner(session.user.id))) {
    return errorJson("Only the course's instructor or the platform owner can decide this.", 403);
  }
  const body = (await req.json().catch(() => null)) as { action?: unknown } | null;
  const action = parseDriftAction(body?.action);
  if (!action) return errorJson('Choose "keep_app" or "take_file".', 400);
  const done = await sdb.resolveSeedDrift(course.id, driftId, action, session.user.id);
  if (!done) return errorJson("Not found", 404);
  return json({ ok: true, action });
}
