import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { canManageCourseReviewers } from "@/lib/course-reviewers";
import { sendCourseAuditInviteEmail } from "@/lib/emails";
import { getSiteUrl } from "@/lib/site-url";
import {
  grantsAuditOnDecision,
  isInterestCapacity,
  serializeForOwner,
} from "@/lib/course-interest";

type Params = { params: Promise<{ id: string; requestId: string }> };

const Body = z.object({ decision: z.enum(["approve", "decline"]) });

/**
 * POST /api/courses/[id]/interest/[requestId], the human decision on a self-nomination.
 *
 * THIS IS THE ONLY PLACE A SELF-NOMINATION BECOMES ACCESS, and only ever through the EXISTING
 * invite path (ScopedDb.inviteCourseAuditor). There is no second grant mechanism to audit.
 *
 * The chain, in order, because each link is load-bearing:
 *   1. signed in, and canManageCourseReviewers says owner / this course's instructor / tenant admin.
 *      The same gate as handing out an audit invite by hand, because that is what this does.
 *   2. the course and the request are both read through the tenant-scoped DAL, so an id from
 *      another school 404s exactly as an invented one would.
 *   3. the pure grantsAuditOnDecision decides whether a grant is minted at all. "approve" on an
 *      INTERESTED LEARNER mints nothing: they asked to be told when the course opens, not to read
 *      it early. Only "beta" and "expert" carry a grant, and only on approve.
 *   4. approving NEVER enrolls anybody, in any capacity. src/db/schema/auditors.ts explains why:
 *      an enrollment writes progress, earns a certificate and lands in every course statistic, so a
 *      tester counted as a learner corrupts the numbers the quiz-integrity rule exists to protect.
 *      Making someone a real learner stays a separate, deliberate act.
 *
 * The response carries the PII fields (it is the same owner-only surface as the GET beside it) so
 * the panel can re-render the decided row without a second round trip.
 */
export async function POST(req: Request, { params }: Params) {
  const { id, requestId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  if (!(await canManageCourseReviewers(session, sdb.tenantId, course.instructorId))) {
    return errorJson("Forbidden", 403);
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Say approve or decline.", 400);
  const status = parsed.data.decision === "approve" ? "approved" : "declined";

  const existing = await sdb.getCourseInterest(course.id, requestId);
  if (!existing) return errorJson("Not found", 404);

  const decided = await sdb.decideCourseInterest({
    courseId: course.id,
    requestId,
    status,
    decidedBy: session.user.id,
  });
  if (!decided) return errorJson("Not found", 404);

  const capacity = isInterestCapacity(decided.capacity) ? decided.capacity : "learner";

  let inviteUrl: string | null = null;
  let emailed = false;
  if (grantsAuditOnDecision({ capacity, status })) {
    // The EXISTING invite path, idempotent per address: re-approving refreshes the token on the
    // same course_auditors row rather than minting a second grant. Note what it does NOT do: the
    // grant lands PENDING (`accepted_at` null), so even after approval the person still has to open
    // the link. src/lib/auditors.ts: a pending invite grants nothing.
    const auditor = await sdb.inviteCourseAuditor({
      courseId: course.id,
      email: decided.email,
      invitedBy: session.user.id,
    });
    inviteUrl = `${await getSiteUrl()}/audit/${auditor.token}`;
    try {
      await sendCourseAuditInviteEmail({
        tenant: sdb.tenant,
        courseTitle: course.title,
        to: auditor.email,
        inviteUrl,
      });
      emailed = true;
    } catch {
      // Mailgun may not be configured, or the send failed. The grant exists either way, so hand the
      // link back for the owner to send rather than failing a decision that is already recorded.
      emailed = false;
    }
  }

  return json({
    request: serializeForOwner(decided, sdb.tenantId),
    /** Null for an interested learner, and for every decline. */
    inviteUrl,
    emailed,
  });
}
