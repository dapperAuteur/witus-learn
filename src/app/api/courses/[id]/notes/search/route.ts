import { apiContext, errorJson, json } from "@/lib/api";
import { getActiveLearner } from "@/lib/active-learner";

type Params = { params: Promise<{ id: string }> };

// GET /api/courses/[id]/notes/search?q= — search the viewer's notes in this course: their own
// (body + quoted text) plus teacher notes visible to them. The scope rules in
// src/db/queries/notes.ts are the whole security surface (plans/61 §4); nothing outside
// (own ∪ visible-to-me), nothing outside the tenant.
export async function GET(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const learner = (await getActiveLearner(session))!;

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);

  const q = new URL(req.url).searchParams.get("q")?.trim() ?? "";
  if (q.length < 2 || q.length > 200) return errorJson("Search needs 2 to 200 characters", 400);

  const results = await sdb.searchNotesInCourse(learner.id, id, q);
  return json({
    results: results.map((n) => ({
      id: n.id,
      lessonId: n.lessonId,
      lessonTitle: n.lessonTitle,
      lessonSlug: n.lessonSlug,
      kind: n.kind,
      body: n.body,
      quote: n.quote,
      createdAt: n.createdAt,
    })),
  });
}
