import { env } from "@/lib/env";
import { apiContext, errorJson, json } from "@/lib/api";
import { getMembership, isPlatformOwner } from "@/lib/session";
import { CourseRequestDecisionInput, decideCourseRequestAction } from "@/lib/course-requests";
import { approveCourseRequest, approveExistingCourseRequest, declineCourseRequest, getCourseRequest } from "@/db/queries/course-requests";
import { checkInstructorAssignment, schoolRoleOf } from "@/db/queries/course-instructor";
import { canTeachWithRole } from "@/lib/course-instructor";
import { ensureUsernameById } from "@/db/queries/authoring";
import { sendCourseRequestDecisionEmail } from "@/lib/emails";
import { requestOrigin } from "@/lib/request-origin";

// POST /api/admin/course-requests/[id]: approve (a new-course request creates the draft course with the
// requester as its instructor; an existing-course request hands that course to them) or decline (with a
// note) a course request on THIS school. The platform owner, or a
// brand_admin of the school the request's host resolved to; the request is read tenant-scoped, so
// another school's request is a 404 and another school's admin a 403. The rule is
// src/lib/course-requests.ts. The teacher's email is best-effort and never fails the decision.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const request = await getCourseRequest(sdb.tenantId, id);
  if (!request) return errorJson("Not found", 404);

  const parsed = CourseRequestDecisionInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Choose approve or decline.", 400);
  const note = parsed.data.note?.trim() || null;

  const isOwner = await isPlatformOwner(session.user.id);
  const isSchoolAdmin = isOwner ? true : (await getMembership(session.user.id, sdb.tenantId)) === "brand_admin";
  const requesterCanTeach =
    parsed.data.action === "approve"
      ? canTeachWithRole(await schoolRoleOf(sdb.tenantId, request.requesterUserId)) || (await isPlatformOwner(request.requesterUserId))
      : true;
  const decision = decideCourseRequestAction({
    actor: { isOwner, isSchoolAdmin },
    request,
    action: parsed.data.action,
    note,
    requesterCanTeach,
  });
  if (!decision.ok) return errorJson(decision.error, decision.status);

  const origin = requestOrigin(req.headers) ?? env.NEXT_PUBLIC_APP_URL;
  let courseUrl: string | null = null;
  let decided;
  const existing = request.kind === "existing";
  if (parsed.data.action === "approve" && existing) {
    // An EXISTING course (BAM, 2026-11-10): approving hands it to the requester instead of creating a draft,
    // through the same assignment rule as every other hand-over (src/lib/course-instructor.ts), with the
    // decider as the actor. The course is read tenant-scoped; gone means there is nothing to hand over.
    const course = request.requestedCourseId ? await sdb.getCourseById(request.requestedCourseId) : null;
    if (!course) return errorJson("That course no longer exists, so it can't be handed over. Decline the request.", 409);
    const check = await checkInstructorAssignment({
      tenantId: sdb.tenantId,
      course,
      newInstructorId: request.requesterUserId,
      actor: { userId: session.user.id, isOwner, isSchoolAdmin },
    });
    if (!check.ok) return errorJson(check.error, check.status);
    const result = await approveExistingCourseRequest({
      tenantId: sdb.tenantId,
      request,
      course,
      deciderUserId: session.user.id,
      deciderRole: isOwner ? "platform_owner" : "brand_admin",
      note,
    });
    if (!result) return errorJson("This request was already decided.", 409);
    decided = result.request;
    courseUrl = `${origin}/teach/${result.course.slug ?? result.course.id}`;
  } else if (parsed.data.action === "approve") {
    // Pretty course URLs are /{username}/{slug}: the requester needs a username before the course exists.
    await ensureUsernameById(request.requesterUserId);
    const result = await approveCourseRequest({ tenantId: sdb.tenantId, request, deciderUserId: session.user.id, note });
    if (!result) return errorJson("This request was already decided.", 409);
    decided = result.request;
    courseUrl = `${origin}/teach/${result.course.slug ?? result.course.id}`;
  } else {
    decided = await declineCourseRequest({ tenantId: sdb.tenantId, requestId: request.id, deciderUserId: session.user.id, note: note ?? "" });
    if (!decided) return errorJson("This request was already decided.", 409);
  }

  try {
    await sendCourseRequestDecisionEmail({
      tenant: sdb.tenant,
      to: request.requesterEmail,
      title: request.title,
      decision: parsed.data.action === "approve" ? "approved" : "declined",
      note,
      courseUrl,
      kind: existing ? "existing" : "new",
    });
  } catch (err) {
    console.error(`[course-requests] request ${request.id} ${decided.status} but the teacher's email FAILED for school ${sdb.tenant.slug}:`, err);
  }
  return json({ request: decided, courseUrl });
}
