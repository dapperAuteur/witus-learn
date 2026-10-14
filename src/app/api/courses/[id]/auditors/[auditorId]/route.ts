import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { canManageCourseReviewers } from "@/lib/course-reviewers";
import { REVIEWER_CREDENTIAL_MAX, REVIEWER_NAME_MAX } from "@/lib/lesson-review";

type Params = { params: Promise<{ id: string; auditorId: string }> };

// PATCH /api/courses/[id]/auditors/[auditorId]: set how a reviewer is credited (reviewer sign-off,
// plans/93 section 1): the name and the credential a lesson's "Reviewed by" line will show. Set by
// whoever may hand out the grant (the same canManageCourseReviewers gate), never by the reviewer, so
// the credential is not only self-reported. A blank value clears it, which stops that reviewer
// recording a verdict until it is set again; verdicts already recorded keep the credit they copied.
const Credit = z.object({
  reviewerName: z.string().max(REVIEWER_NAME_MAX).nullable(),
  reviewerCredential: z.string().max(REVIEWER_CREDENTIAL_MAX).nullable(),
});

export async function PATCH(req: Request, { params }: Params) {
  const { id, auditorId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  if (!(await canManageCourseReviewers(session, sdb.tenantId, course.instructorId))) {
    return errorJson("Forbidden", 403);
  }

  const parsed = Credit.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return errorJson(
      `Give a name under ${REVIEWER_NAME_MAX} characters and a credential under ${REVIEWER_CREDENTIAL_MAX}.`,
      400,
    );
  }

  // Scoped by tenant AND course, like revoke: an id from another school or course updates nothing.
  const updated = await sdb.setCourseAuditorCredit(course.id, auditorId, parsed.data);
  if (!updated) return errorJson("Not found", 404);
  return json({
    auditor: {
      id: updated.id,
      email: updated.email,
      invitedAt: updated.invitedAt,
      acceptedAt: updated.acceptedAt,
      reviewerName: updated.reviewerName,
      reviewerCredential: updated.reviewerCredential,
    },
  });
}

// DELETE /api/courses/[id]/auditors/[auditorId]: revoke an audit grant. Takes effect on the next
// request: the gate reads the table every time, so there is no cached grant to expire.
export async function DELETE(_req: Request, { params }: Params) {
  const { id, auditorId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  // Same gate as minting a grant (src/lib/course-reviewers.ts): whoever may hand one out is
  // whoever may take it back, and there is one definition of that for both.
  if (!(await canManageCourseReviewers(session, sdb.tenantId, course.instructorId))) {
    return errorJson("Forbidden", 403);
  }

  // Scoped by tenant AND course, so an id from another school (or another course) deletes nothing
  // and reports the same "not found" a made-up id would.
  const removed = await sdb.revokeCourseAuditor(course.id, auditorId);
  if (!removed) return errorJson("Not found", 404);
  return json({ ok: true });
}
