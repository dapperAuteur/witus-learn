import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getProjectBundle } from "@/db/queries/field-log";
import { bumpCourseContentVersion, getLessonById, getUsername } from "@/db/queries/authoring";
import { isPlatformOwner } from "@/lib/session";
import {
  TOUR_CREDIT_MAX,
  buildTourCredit,
  canPublishTour,
  isEmptyTourSlot,
  normalizeTourCredit,
  suggestSlotFromNotes,
  tourCaptureEligibility,
} from "@/lib/field-log-tour";

type Params = { params: Promise<{ id: string; legId: string }> };

const Uuid = z.string().uuid();

const Body = z.object({
  captureId: z.string().uuid(),
  lessonId: z.string().uuid(),
  // Length is checked after tidying by normalizeTourCredit; this cap only stops an absurd body.
  credit: z.string().max(TOUR_CREDIT_MAX * 4),
});

// Tours from the field (plans/93 section 2): put one of this leg's captures into a lesson's tour slot.
//
// Who: a crew member of this project (getProjectBundle, which is also the tenant check) who is the
// platform owner or the target course's own instructor. Nobody else, and nothing is requested or
// queued for anyone: the publisher writes the tour directly, or it does not happen.
//
// Tenant: from the host via the scoped DAL. The project, leg and capture 404 unless they are this
// user's, in this tenant; the lesson and its course 404 across tenants.
//
// The capture rules (consent, minors, kind, https link, embeddable, the leg's permission note) are
// checked HERE, on the server, and again every time the lesson renders. The client's greyed-out
// captures are a preview of the same function, never the gate.

async function loadLeg(id: string, legId: string) {
  const { sdb, session } = await apiContext();
  if (!session) return { res: errorJson("Please sign in first.", 401) } as const;
  if (!Uuid.safeParse(id).success || !Uuid.safeParse(legId).success) return { res: errorJson("Not found", 404) } as const;
  const bundle = await getProjectBundle(sdb.tenantId, session.user.id, id);
  const leg = bundle?.legs.find((l) => l.id === legId);
  if (!bundle || !leg) return { res: errorJson("Not found", 404) } as const;
  const isOwner = await isPlatformOwner(session.user.id);
  return { sdb, session, bundle, leg, isOwner } as const;
}

// GET: the slots this user may fill, the one the leg's notes point at, and the leg's captures with
// each one's eligibility and suggested credit.
export async function GET(_req: Request, { params }: Params) {
  const { id, legId } = await params;
  const ctx = await loadLeg(id, legId);
  if ("res" in ctx) return ctx.res;
  const { sdb, session, bundle, leg, isOwner } = ctx;

  const slots = (await sdb.listTourSlots({ userId: session.user.id, isOwner }))
    .filter((s) => isEmptyTourSlot(s, s.tour !== null))
    .map((s) => ({
      courseId: s.courseId,
      courseTitle: s.courseTitle,
      courseSlug: s.courseSlug,
      username: s.username,
      lessonId: s.lessonId,
      lessonTitle: s.lessonTitle,
      lessonSlug: s.lessonSlug,
    }));
  const suggested = suggestSlotFromNotes(leg.notes, slots);

  const captures = bundle.captures
    .filter((c) => c.legId === leg.id)
    .map((c) => {
      const e = tourCaptureEligibility(c, leg);
      return {
        id: c.id,
        kind: c.kind,
        subject: c.subject,
        storageUrl: c.storageUrl,
        eligible: e.ok,
        reason: e.ok ? null : e.message,
        credit: buildTourCredit({
          kind: c.kind,
          capturedBy: session.user.name,
          legName: leg.name,
          locationLabel: leg.locationLabel,
          capturedAt: c.capturedAt,
        }),
      };
    });

  return json({ slots, suggestedLessonId: suggested?.lessonId ?? null, captures, permissionNote: leg.permissionNote });
}

// POST { captureId, lessonId, credit }: publish the tour.
export async function POST(req: Request, { params }: Params) {
  const { id, legId } = await params;
  const ctx = await loadLeg(id, legId);
  if ("res" in ctx) return ctx.res;
  const { sdb, session, bundle, leg, isOwner } = ctx;

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  // The capture must be in this project AND on this leg: the leg is where its permission note lives.
  const capture = bundle.captures.find((c) => c.id === parsed.data.captureId && c.legId === leg.id);
  if (!capture) return errorJson("Not found", 404);

  const lesson = await getLessonById(sdb.tenantId, parsed.data.lessonId);
  const course = lesson ? await sdb.getCourseById(lesson.courseId) : null;
  if (!lesson || !course) return errorJson("Not found", 404);

  if (!canPublishTour({ isOwner, isInstructor: course.instructorId === session.user.id })) {
    return errorJson("Only the platform owner or this course's own instructor can add a tour to it.", 403);
  }

  const existing = await sdb.getLessonTourEmbed(lesson.id);
  if (!isEmptyTourSlot(lesson, existing !== null)) {
    return errorJson(
      existing
        ? "This lesson already has a tour from the field. Remove it on Teach, Tours first."
        : "This lesson is not an empty tour slot.",
      409,
    );
  }

  const eligibility = tourCaptureEligibility(capture, leg);
  if (!eligibility.ok) return errorJson(eligibility.message, 422);

  const credit = normalizeTourCredit(parsed.data.credit);
  if (!credit.ok) return errorJson(credit.error, 400);

  const result = await sdb.insertLessonTourEmbed({
    courseId: course.id,
    lessonId: lesson.id,
    captureId: capture.id,
    url: capture.storageUrl!.trim(),
    creditLine: credit.credit,
    setBy: session.user.id,
  });
  if (!result.ok) {
    if (result.reason === "not_found") return errorJson("Not found", 404);
    return errorJson("This lesson already has a tour, or is no longer an empty tour slot.", 409);
  }
  // Saved offline copies of the course are now out of date.
  await bumpCourseContentVersion(course.id);

  const username = await getUsername(course.instructorId);
  return json(
    {
      tour: { lessonId: lesson.id, courseId: course.id, url: result.row.url, credit: result.row.creditLine },
      lessonTitle: lesson.title,
      courseTitle: course.title,
      href: username && course.slug && lesson.slug ? `/${username}/${course.slug}/lesson/${lesson.slug}` : null,
    },
    201,
  );
}
