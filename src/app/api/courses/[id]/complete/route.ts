import { apiContext, errorJson, json } from "@/lib/api";
import { createCompletion, hasCompletedAllLessons } from "@/db/queries/enrollment";
import { sendCompletionEmail } from "@/lib/emails";
import { getSiteUrl } from "@/lib/site-url";
import { getActiveLearner } from "@/lib/active-learner";

// POST /api/courses/[id]/complete — idempotent. Issues the completion record +
// certificate token once all published lessons are done, and emails the cert
// (per-tenant sender) on first completion. The completion itself is attributed to
// the ACTIVE learner (self, or a managed child), but the email always goes to the
// signed-in account's real address — a managed child's email is a synthetic,
// non-deliverable placeholder, so the parent is the one who actually receives it.
export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const learner = (await getActiveLearner(session))!;

  const course = await sdb.getCourseById(id);
  if (!course || !course.isPublished) return errorJson("Not found", 404);

  if (!(await hasCompletedAllLessons(learner.id, id))) {
    return errorJson("Course is not yet complete", 400);
  }

  const { completion, created } = await createCompletion(learner.id, id);

  if (created) {
    await sendCompletionEmail({
      tenant: sdb.tenant,
      course,
      to: session.user.email,
      studentName: learner.name ?? session.user.name ?? null,
      token: completion.verificationToken,
      siteUrl: await getSiteUrl(),
    });
  }

  return json({ completed: true, verificationToken: completion.verificationToken });
}
