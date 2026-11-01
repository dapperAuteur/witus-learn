import { z } from "zod";
import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { getSession } from "@/lib/session";
import { getLessonById } from "@/db/queries/authoring";
import { checkTourLink, describeLinkCheck } from "@/lib/tour-link-check";

type Params = { params: Promise<{ id: string; lessonId: string }> };

const Uuid = z.string().uuid();

// POST /api/courses/[id]/lessons/[lessonId]/tour/check (plans/96 v2): "Check link" on /teach/tours.
//
// Same guard as the tour's PATCH and DELETE (loadEditableCourse; the lesson must belong to this
// course). The link fetched is the STORED one, never a URL from the request. The result is returned,
// not stored, and the URL is never logged. POST, not GET: it makes an outbound request, and a GET
// could be fired by a prefetch or an image tag.
export async function POST(_req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  if (!(await getSession())) return errorJson("Please sign in first.", 401);
  if (!Uuid.safeParse(id).success || !Uuid.safeParse(lessonId).success) return errorJson("Not found", 404);
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;
  const { sdb, course } = ctx;

  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== course.id) return errorJson("Not found", 404);

  const url = await sdb.getLessonTourUrl(course.id, lesson.id);
  if (!url) return errorJson("Not found", 404);

  const result = await checkTourLink(url);
  let storedHost = "";
  try {
    storedHost = new URL(url).hostname;
  } catch {
    // isCheckableUrl already refused it; the sentence explains that.
  }
  return json({
    status: result.status,
    reachable: result.reachable,
    finalHost: result.status === null ? null : result.finalHost,
    message: describeLinkCheck(result, storedHost),
  });
}
