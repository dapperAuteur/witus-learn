import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getLessonById } from "@/db/queries/authoring";
import { db } from "@/db/client";
import { lessonFeedback } from "@/db/schema";

const Schema = z.object({
  kind: z.enum(["correction", "comment", "question"]),
  body: z.string().min(3).max(4000),
});

type Params = { params: Promise<{ id: string; lessonId: string }> };

// POST /api/courses/[id]/lessons/[lessonId]/feedback — a signed-in learner submits a
// correction/comment/question on the lesson. Tenant-scoped via the scoped DAL.
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Sign in to send feedback", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id) return errorJson("Not found", 404);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  await db.insert(lessonFeedback).values({
    tenantId: sdb.tenantId,
    courseId: id,
    lessonId,
    userId: session.user.id,
    kind: parsed.data.kind,
    body: parsed.data.body,
  });
  return json({ ok: true });
}
