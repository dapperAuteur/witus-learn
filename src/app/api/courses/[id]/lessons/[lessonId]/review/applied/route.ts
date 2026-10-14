import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getLessonById } from "@/db/queries/authoring";
import { isPlatformOwner } from "@/lib/session";
import { lessonReviewHash } from "@/lib/lesson-review-hash";

type Params = { params: Promise<{ id: string; lessonId: string }> };

const Body = z.object({ needKind: z.enum(["qr", "p"]) });

// POST /api/courses/[id]/lessons/[lessonId]/review/applied — "Applied as written" (reviewer
// sign-off, plans/93 section 1). The platform owner says he has edited the lesson to read exactly as
// the reviewer's correction asked. That stamps correction_applied_at and RE-PINS the verdict's hash
// to the lesson as it now stands, so the edit that applied the correction does not reset the badge.
//
// Owner only, and once only: it puts the reviewer's name on wording they did not see, which is why
// the badge then says "correction applied" with its date, and why a further edit after the stamp
// resets the verdict like any other edit. This is how the owner acts on a correction. He never
// replies to one (no-inbox rule).
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== course.id) return errorJson("Not found", 404);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const row = await sdb.markCorrectionApplied({
    courseId: course.id,
    lessonId: lesson.id,
    needKind: parsed.data.needKind,
    lessonHash: lessonReviewHash(lesson),
  });
  if (!row) return errorJson("There is no unapplied correction on this need.", 409);
  return json({ ok: true, correctionAppliedAt: row.correctionAppliedAt });
}
