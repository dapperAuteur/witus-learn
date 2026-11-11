import { env } from "@/lib/env";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { requestOrigin } from "@/lib/request-origin";
import { canTeachWithRole } from "@/lib/course-instructor";
import { decideOfferResponse, OfferResponseInput } from "@/lib/course-offers";
import { acceptCourseOffer, declineCourseOffer, getCourseOffer } from "@/db/queries/course-offers";
import { checkInstructorAssignment, schoolRoleOf } from "@/db/queries/course-instructor";
import { listSchoolAdminEmails } from "@/db/queries/course-requests";
import { sendCourseOfferDecisionEmail } from "@/lib/emails";


const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
// POST /api/teach/course-offers/[id]: the teacher a course was offered to accepts or declines it (BAM,
// 2026-11-10: "approve assigned courses"). Read tenant-scoped, so another school's offer is a 404; only
// the teacher it was made to may answer (403), once (409), before it expires (410). Accepting re-runs the
// assignment rule as the admin who offered it (the teacher must still teach here, have a username, and
// hold no course at this slug), then moves the course in one transaction; declining changes nothing on
// the course. The admin who made the offer is emailed either way (best-effort).
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Sign in first, then try again.", 401);
  const offer = UUID_RE.test(id) ? await getCourseOffer(sdb.tenantId, id) : null;
  if (!offer) return errorJson("Not found", 404);

  const parsed = OfferResponseInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson(parsed.error.issues[0]?.message ?? "Choose accept or decline.", 400);
  const note = parsed.data.note?.trim() || null;
  const action = parsed.data.action;

  const teacherCanTeach =
    action === "accept"
      ? canTeachWithRole(await schoolRoleOf(sdb.tenantId, session.user.id)) || (await isPlatformOwner(session.user.id))
      : true;
  const decision = decideOfferResponse({ offer, actorUserId: session.user.id, action, teacherCanTeach, now: new Date() });
  if (!decision.ok) return errorJson(decision.error, decision.status);

  let courseUrl: string | null = null;
  if (action === "accept") {
    const course = await sdb.getCourseById(offer.courseId);
    if (!course) return errorJson("That course no longer exists.", 404);
    const check = await checkInstructorAssignment({
      tenantId: sdb.tenantId,
      course,
      newInstructorId: session.user.id,
      actor: { userId: offer.offeredByUserId ?? session.user.id, isOwner: offer.offeredByRole === "platform_owner", isSchoolAdmin: true },
    });
    if (!check.ok) return errorJson(check.error, check.status);
    const result = await acceptCourseOffer({ tenantId: sdb.tenantId, offer, note });
    if (!result) return errorJson("This offer was already answered, withdrawn or expired.", 409);
    courseUrl = `/teach/${result.course.slug ?? result.course.id}`;
  } else {
    const declined = await declineCourseOffer({ tenantId: sdb.tenantId, offer, note });
    if (!declined) return errorJson("This offer was already answered or withdrawn.", 409);
  }

  try {
    const recipients = offer.offeredByEmail ? [offer.offeredByEmail] : await listSchoolAdminEmails(sdb.tenantId);
    const origin = requestOrigin(req.headers) ?? env.NEXT_PUBLIC_APP_URL;
    for (const to of recipients) {
      await sendCourseOfferDecisionEmail({
        tenant: sdb.tenant,
        to,
        courseTitle: offer.courseTitle,
        teacherName: offer.teacherLabel,
        decision: action === "accept" ? "accepted" : "declined",
        note,
        adminUrl: `${origin}/admin/users#course-offers`,
      });
    }
  } catch (err) {
    console.error(`[course-offers] offer ${offer.id} answered but the admin's email FAILED for school ${sdb.tenant.slug}:`, err);
  }
  return json({ ok: true, status: action === "accept" ? "accepted" : "declined", courseUrl });
}
