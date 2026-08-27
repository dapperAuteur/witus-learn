import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { isKnownCandidate } from "@/lib/cross-links";

// Approve, dismiss, or reopen one cross-course link candidate. Owner-only: a link from one course to
// another is a statement about the catalog under the school's name, and until it is approved nothing
// renders on the lesson.
//
// THE REGISTRY CHECK IS A SECURITY CHECK, not a nicety. The render path reads the approvals table
// directly by (course, lesson, target) and never consults the registry, which is what makes it one
// indexed read. So without this guard a POST could mint an approval for ANY triple of slugs and put
// a link on a lesson that never mentioned that course. Validating the triple against the committed
// candidate list means the only links that can exist are ones the generator actually found in the
// lesson text.
//
// The tenant is resolved from the request HOST by apiContext(), never from the body: an approval is
// per school, and a client-supplied tenant would let one school's owner decide another's links.
const Schema = z.object({
  sourceCourseSlug: z.string().min(1).max(200),
  sourceLessonSlug: z.string().min(1).max(200),
  targetCourseSlug: z.string().min(1).max(200),
  decision: z.enum(["approve", "dismiss", "reset"]),
  /** Why: required to dismiss, optional to approve. */
  note: z.string().trim().max(2000).optional(),
});

export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { decision, note, ...triple } = parsed.data;

  if (!isKnownCandidate(triple)) return errorJson("Unknown cross-link candidate", 404);

  // A dismissal without a reason is the same failure the citation board refuses: it closes the item,
  // nobody looks again, and the record says nothing about why the link was turned down.
  if (decision === "dismiss" && !note?.trim()) {
    return errorJson("Say why before dismissing a candidate.", 400);
  }

  if (decision === "approve") {
    await sdb.approveCrossLink({
      triple,
      approvedBy: session.user.id,
      note: note?.trim() || null,
    });
  } else if (decision === "dismiss") {
    await sdb.dismissCrossLink({
      triple,
      dismissedBy: session.user.id,
      reason: note?.trim() || null,
    });
  } else {
    await sdb.resetCrossLink(triple);
  }

  return json({ ...triple, decision });
}
