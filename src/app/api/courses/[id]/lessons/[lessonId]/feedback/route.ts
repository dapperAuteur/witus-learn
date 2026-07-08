import { after } from "next/server";
import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getLessonById } from "@/db/queries/authoring";
import { isPlatformOwner } from "@/lib/session";
import { sendToInbox } from "@/lib/ecosystem-webhook";
import { db } from "@/db/client";
import { lessonFeedback } from "@/db/schema";
import { getActiveLearner } from "@/lib/active-learner";

const Schema = z.object({
  kind: z.enum(["correction", "comment", "question"]),
  body: z.string().min(3).max(4000),
});

type Params = { params: Promise<{ id: string; lessonId: string }> };

// POST /api/courses/[id]/lessons/[lessonId]/feedback — a signed-in learner submits a
// correction/comment/question on the lesson. Tenant-scoped via the scoped DAL. For the platform
// owner's OWN courses it's mirrored to the central WitUS Inbox (so BAM sees it without copy-paste,
// alongside problem reports); other instructors' feedback stays in the in-app /teach/feedback queue.
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Sign in to send feedback", 401);
  const learner = (await getActiveLearner(session))!;

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id) return errorJson("Not found", 404);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { kind, body } = parsed.data;

  await db.insert(lessonFeedback).values({
    tenantId: sdb.tenantId,
    courseId: id,
    lessonId,
    userId: learner.id,
    kind,
    body,
  });

  // Mirror to the WitUS Inbox ONLY for the platform owner's own courses (per BAM's request).
  // submitter_email stays the signed-in account's real address (a managed child's email is
  // a synthetic, non-deliverable placeholder); submitter_name reflects who actually wrote it.
  if (await isPlatformOwner(course.instructorId)) {
    after(
      sendToInbox({
        form_type: "learn-witus-curriculum-feedback",
        submitter_email: session.user.email ?? undefined,
        submitter_name: learner.name ?? session.user.name ?? undefined,
        priority: kind === "correction" ? "high" : "normal",
        payload: {
          kind,
          body,
          course_id: id,
          course_title: course.title,
          lesson_id: lessonId,
          lesson_title: lesson.title,
          school: sdb.tenant.slug,
        },
      }),
    );
  }

  return json({ ok: true });
}
