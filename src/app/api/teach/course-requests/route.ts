import { env } from "@/lib/env";
import { apiContext, errorJson, isTenantInstructor, json } from "@/lib/api";
import { CourseRequestInput, COURSE_REQUEST_FORBIDDEN } from "@/lib/course-requests";
import { createCourseRequest, listOwnCourseRequests, listSchoolAdminEmails } from "@/db/queries/course-requests";
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

  const parsed = CourseRequestInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson(parsed.error.issues[0]?.message ?? "Check the form.", 400);

  const request = await createCourseRequest(sdb.tenantId, session.user.id, parsed.data);

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
