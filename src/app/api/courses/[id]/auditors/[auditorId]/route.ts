import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { canManageCourseReviewers, canSeeReviewerEvidence } from "@/lib/course-reviewers";
import { REVIEWER_CREDENTIAL_MAX, REVIEWER_NAME_MAX, normalizeEvidenceUrl } from "@/lib/lesson-review";

type Params = { params: Promise<{ id: string; auditorId: string }> };

// PATCH /api/courses/[id]/auditors/[auditorId]: set how a reviewer is credited (reviewer sign-off,
// plans/93 section 1): the name and the credential a lesson's "Reviewed by" line will show. Set by
// whoever may hand out the grant (the same canManageCourseReviewers gate), never by the reviewer, so
// the credential is not only self-reported. A blank value clears it, which stops that reviewer
// recording a verdict until it is set again; verdicts already recorded keep the credit they copied.
const Credit = z.object({
  reviewerName: z.string().max(REVIEWER_NAME_MAX).nullable(),
  reviewerCredential: z.string().max(REVIEWER_CREDENTIAL_MAX).nullable(),
  /** Optional evidence link (plans/97 v2 Q2). Only the owner or a school admin may send it. */
  credentialEvidenceUrl: z.string().nullable().optional(),
});

export async function PATCH(req: Request, { params }: Params) {
  const { id, auditorId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  if (!(await canManageCourseReviewers(session, sdb.tenantId, course))) {
    return errorJson("Forbidden", 403);
  }

  const parsed = Credit.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return errorJson(
      `Give a name under ${REVIEWER_NAME_MAX} characters and a credential under ${REVIEWER_CREDENTIAL_MAX}.`,
      400,
    );
  }

  const evidence = await canSeeReviewerEvidence(session, sdb.tenantId, course);
  let credentialEvidenceUrl: string | null | undefined = undefined;
  if (parsed.data.credentialEvidenceUrl !== undefined) {
    if (!evidence) return errorJson("Only the platform owner or a school admin can set an evidence link.", 403);
    const checked = normalizeEvidenceUrl(parsed.data.credentialEvidenceUrl);
    if (!checked.ok) return errorJson(checked.error, 400);
    credentialEvidenceUrl = checked.url;
  }

  // Scoped by tenant AND course, like revoke: an id from another school or course updates nothing.
  const updated = await sdb.setCourseAuditorCredit(course.id, auditorId, {
    reviewerName: parsed.data.reviewerName,
    reviewerCredential: parsed.data.reviewerCredential,
    credentialEvidenceUrl,
  });
  if (!updated) return errorJson("Not found", 404);
  return json({
    auditor: {
      id: updated.id,
      email: updated.email,
      invitedAt: updated.invitedAt,
      acceptedAt: updated.acceptedAt,
      reviewerName: updated.reviewerName,
      reviewerCredential: updated.reviewerCredential,
      ...(evidence ? { credentialEvidenceUrl: updated.credentialEvidenceUrl } : {}),
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
  if (!(await canManageCourseReviewers(session, sdb.tenantId, course))) {
    return errorJson("Forbidden", 403);
  }

  // Scoped by tenant AND course, so an id from another school (or another course) deletes nothing
  // and reports the same "not found" a made-up id would.
  const removed = await sdb.revokeCourseAuditor(course.id, auditorId);
  if (!removed) return errorJson("Not found", 404);
  return json({ ok: true });
}
