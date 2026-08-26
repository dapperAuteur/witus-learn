import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { sendCourseAuditInviteEmail } from "@/lib/emails";
import { getSiteUrl } from "@/lib/site-url";
import { canManageCourseReviewers } from "@/lib/course-reviewers";

type Params = { params: Promise<{ id: string }> };

const Body = z.object({ email: z.string().email() });

// Who may hand out an audit grant now lives in src/lib/course-reviewers.ts (canManageCourseReviewers),
// shared with the self-nomination approval route so the two paths into the same privilege cannot
// drift apart: widening one widens both, and the isolation suite asserts every route uses it.

// GET /api/courses/[id]/auditors — list this course's auditors (owner / its instructor / admin).
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  if (!(await canManageCourseReviewers(session, sdb.tenantId, course.instructorId))) {
    return errorJson("Forbidden", 403);
  }

  const auditors = await sdb.listCourseAuditors(course.id);
  // The TOKEN is never listed: it is a bearer credential, and a list endpoint is not where a live
  // invite link should be re-readable. Lost the link? Re-invite, which mints a fresh one.
  return json({
    auditors: auditors.map((a) => ({
      id: a.id,
      email: a.email,
      invitedAt: a.invitedAt,
      acceptedAt: a.acceptedAt,
    })),
  });
}

// POST /api/courses/[id]/auditors — invite an email to audit this course. Idempotent per address
// (a re-invite refreshes the token on the same row). Returns the invite URL so the inviter can
// copy it even when email is not configured, exactly like the cohort invite route.
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  if (!(await canManageCourseReviewers(session, sdb.tenantId, course.instructorId))) {
    return errorJson("Forbidden", 403);
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Please enter a valid email address.", 400);

  const auditor = await sdb.inviteCourseAuditor({
    courseId: course.id,
    email: parsed.data.email,
    invitedBy: session.user.id,
  });
  const inviteUrl = `${await getSiteUrl()}/audit/${auditor.token}`;

  let emailed = true;
  try {
    await sendCourseAuditInviteEmail({
      tenant: sdb.tenant,
      courseTitle: course.title,
      to: auditor.email,
      inviteUrl,
    });
  } catch {
    // Mailgun may not be configured (or the send failed). The grant exists either way, so hand
    // back the link rather than failing the request.
    emailed = false;
  }

  return json({
    auditor: { id: auditor.id, email: auditor.email, invitedAt: auditor.invitedAt, acceptedAt: auditor.acceptedAt },
    inviteUrl,
    emailed,
  });
}
