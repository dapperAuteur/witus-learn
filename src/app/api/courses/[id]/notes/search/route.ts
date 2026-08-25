import { apiContext, errorJson, json } from "@/lib/api";
import { getActiveLearner } from "@/lib/active-learner";
import { noteSearchSource } from "@/lib/annotations";

type Params = { params: Promise<{ id: string }> };

// GET /api/courses/[id]/notes/search?q= — search the notes this viewer may see in this course:
// their own (body + quoted text), teacher notes sent to them, and, when they teach, notes
// students shared with them plus notes they sent (plans/61 §4). The scope rules in
// src/db/queries/notes.ts are the whole security surface; nothing outside them, nothing outside
// the tenant.
export async function GET(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const learner = (await getActiveLearner(session))!;

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);

  const q = new URL(req.url).searchParams.get("q")?.trim() ?? "";
  if (q.length < 2 || q.length > 200) return errorJson("Search needs 2 to 200 characters", 400);

  const results = await sdb.searchNotesInCourse(learner.id, session.user.id, id, q);
  return json({
    results: results.map((n) => {
      // Labelled from ids the route already trusts, not from a fifth SQL clause: the four
      // visibility rules are what decides membership in the result set.
      const source = noteSearchSource(n, learner.id, session.user.id);
      return {
        id: n.id,
        lessonId: n.lessonId,
        lessonTitle: n.lessonTitle,
        lessonSlug: n.lessonSlug,
        kind: n.kind,
        source,
        // Only ever another person's name on a note they chose to put in front of this viewer:
        // a teacher note they were sent, or a note a student shared with them.
        authorName: source === "mine" || source === "sent" ? null : n.authorName,
        body: n.body,
        quote: n.quote,
        createdAt: n.createdAt,
      };
    }),
  });
}
