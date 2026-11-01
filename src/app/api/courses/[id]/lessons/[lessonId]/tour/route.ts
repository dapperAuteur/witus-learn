import { z } from "zod";
import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { getSession } from "@/lib/session";
import { bumpCourseContentVersion, getLessonById } from "@/db/queries/authoring";
import { TOUR_CREDIT_MAX, normalizeTourCredit } from "@/lib/field-log-tour";

type Params = { params: Promise<{ id: string; lessonId: string }> };

const Uuid = z.string().uuid();

// Who, for every method here: anyone who may edit the course (loadEditableCourse: its instructor,
// the platform owner, or a brand admin on a course that is not owner-only). Since plans/96 Q3 that is
// also exactly who may publish, apart from the publisher also having to be on the Field Log project.
//
// Tenant: the course 404s across tenants, and the lesson 404s unless it belongs to THIS course.
async function load(id: string, lessonId: string) {
  // Signed out is a 401 here, before the course read: loadEditableCourse alone would answer 403.
  if (!(await getSession())) return { res: errorJson("Please sign in first.", 401) } as const;
  // A malformed id is a 404 too, rather than a database error.
  if (!Uuid.safeParse(id).success || !Uuid.safeParse(lessonId).success) return { res: errorJson("Not found", 404) } as const;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return { res: ctx.res } as const;
  const { sdb, course } = ctx;
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== course.id) return { res: errorJson("Not found", 404) } as const;
  return { sdb, course, lesson } as const;
}

// DELETE /api/courses/[id]/lessons/[lessonId]/tour: take a field tour off a lesson (plans/93 section
// 2), which puts the slot back to empty and the lesson back to its "forthcoming" wording. Removing is
// the safe direction.
export async function DELETE(_req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const ctx = await load(id, lessonId);
  if ("res" in ctx) return ctx.res;
  const { sdb, course, lesson } = ctx;

  if (!(await sdb.deleteLessonTourEmbed(course.id, lesson.id))) return errorJson("Not found", 404);
  await bumpCourseContentVersion(course.id);
  return json({ ok: true });
}

const Patch = z
  .object({
    // Length is checked after tidying by normalizeTourCredit; this cap only stops an absurd body.
    creditLine: z.string().max(TOUR_CREDIT_MAX * 4).optional(),
    attest: z.literal(true).optional(),
  })
  .strict();

// PATCH { creditLine?, attest?: true } (plans/96 v2): fix a credit in place, or record the
// people-in-frame attestation on a tour published before it existed (Q2). The link is never
// editable here: a different file is a new tour, published from the Field Log.
export async function PATCH(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const ctx = await load(id, lessonId);
  if ("res" in ctx) return ctx.res;
  const { sdb, course, lesson } = ctx;

  const parsed = Patch.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  if (parsed.data.creditLine === undefined && !parsed.data.attest) return errorJson("Nothing to change.", 400);

  let creditLine: string | undefined;
  if (parsed.data.creditLine !== undefined) {
    const credit = normalizeTourCredit(parsed.data.creditLine);
    if (!credit.ok) return errorJson(credit.error, 400);
    creditLine = credit.credit;
  }

  const row = await sdb.updateLessonTourEmbed({
    courseId: course.id,
    lessonId: lesson.id,
    creditLine,
    attestedAt: parsed.data.attest ? new Date() : undefined,
  });
  if (!row) return errorJson("Not found", 404);
  // The credit is part of the lesson page, so saved offline copies are now out of date.
  if (creditLine !== undefined) await bumpCourseContentVersion(course.id);
  return json({ tour: { creditLine: row.creditLine, peopleAttestedAt: row.peopleAttestedAt } });
}
