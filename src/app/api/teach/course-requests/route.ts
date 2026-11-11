import { env } from "@/lib/env";
import { apiContext, errorJson, isTenantInstructor, json } from "@/lib/api";
import {
  COURSE_REQUEST_ALREADY_YOURS,
  COURSE_REQUEST_DUPLICATE,
  COURSE_REQUEST_FORBIDDEN,
  CourseRequestInput,
  ExistingCourseRequestInput,
  isExistingCourseRequestBody,
} from "@/lib/course-requests";
import {
  createCourseRequest,
  createExistingCourseRequest,
  hasOpenExistingRequest,
  listOwnCourseRequests,
  listSchoolAdminEmails,
} from "@/db/queries/course-requests";
import { isPlatformOwner } from "@/lib/session";
import { getUsername } from "@/db/queries/authoring";
import { pricingInquiryRecipient, sendCourseRequestEmail } from "@/lib/emails";
import { requestOrigin } from "@/lib/request-origin";

// GET /api/teach/course-requests: the signed-in teacher's own requests on this school.
export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantInstructor(session, sdb.tenantId))) return errorJson(COURSE_REQUEST_FORBIDDEN, 403);
  return json({ requests: await listOwnCourseRequests(sdb.tenantId, session.user.id) });
}

// POST /api/teach/course-requests: a teacher of THIS school asks for a course (BAM, 2026-11-10:
// "teachers should be able to submit or request courses"). The tenant is the request host's, never the
// client's; a learner, or a teacher of another school, gets 403. The row is saved first; the email to
// the school's admins is best-effort and never fails the request.
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantInstructor(session, sdb.tenantId))) return errorJson(COURSE_REQUEST_FORBIDDEN, 403);

  const body = await req.json().catch(() => null);
  let request;
  let currentInstructor: string | null = null;
  if (isExistingCourseRequestBody(body)) {
    // An EXISTING course of this school (BAM, 2026-11-10: "allow teacher to choose from list of existing
    // courses also"). Read through the tenant-scoped DAL, so another school's course is a 404; an
    // owner-only course is a 404 to anyone but the owner, as everywhere else.
    const parsed = ExistingCourseRequestInput.safeParse(body);
    if (!parsed.success) return errorJson(parsed.error.issues[0]?.message ?? "Check the form.", 400);
    const course = await sdb.getCourseById(parsed.data.courseId);
    if (!course || (course.ownerOnly && !(await isPlatformOwner(session.user.id)))) return errorJson("Not found", 404);
    if (course.instructorId === session.user.id) return errorJson(COURSE_REQUEST_ALREADY_YOURS, 400);
    if (await hasOpenExistingRequest(sdb.tenantId, session.user.id, course.id)) return errorJson(COURSE_REQUEST_DUPLICATE, 409);
    request = await createExistingCourseRequest(sdb.tenantId, session.user.id, { course, reason: parsed.data.reason });
    const u = await getUsername(course.instructorId).catch(() => null);
    currentInstructor = u ? `@${u}` : null;
  } else {
    const parsed = CourseRequestInput.safeParse(body);
    if (!parsed.success) return errorJson(parsed.error.issues[0]?.message ?? "Check the form.", 400);
    request = await createCourseRequest(sdb.tenantId, session.user.id, parsed.data);
  }

  let notified = 0;
  try {
    const admins = await listSchoolAdminEmails(sdb.tenantId);
    const fallback = pricingInquiryRecipient(sdb.tenant);
    const recipients = admins.length ? admins : fallback ? [fallback] : [];
    const origin = requestOrigin(req.headers) ?? env.NEXT_PUBLIC_APP_URL;
    const teacherName = session.user.name?.trim() || session.user.email;
    for (const to of recipients) {
      await sendCourseRequestEmail({
        tenant: sdb.tenant,
        to,
        teacherName,
        teacherEmail: session.user.email,
        title: request.title,
        description: request.description,
        reason: request.reason,
        briefUrl: request.briefUrl,
        adminUrl: `${origin}/admin/users#course-requests`,
        kind: request.kind === "existing" ? "existing" : "new",
        currentInstructor,
      });
      notified++;
    }
  } catch (err) {
    // The request is already saved and listed on /admin/users; a failed email is a notification
    // problem, logged for the operator, never shown to the teacher as a failure.
    console.error(`[course-requests] request ${request.id} SAVED but the admin email FAILED for school ${sdb.tenant.slug}:`, err);
  }
  return json({ request, notified }, 201);
}
