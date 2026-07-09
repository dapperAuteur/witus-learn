import { NextResponse } from "next/server";
import { authenticateApiV1Request } from "@/lib/api-v1-auth";
import { getPublishedLesson } from "@/db/queries/api-v1";
import { DISCLAIMER_FULL } from "@/lib/disclaimer";

type Params = { params: Promise<{ id: string; lessonId: string }> };

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// GET /api/v1/courses/[id]/lessons/[lessonId] — the full published lesson (body/media
// included) for one of the calling tenant's published, public courses. This is the ONLY
// api-v1 endpoint that returns lesson content — /courses and /courses/[id] stay metadata-only
// — so a consumer (e.g. WanderLearn) can render the actual lesson after listing/choosing it.
// 404s alike for a foreign-tenant course, an unpublished/private course, a lesson that isn't
// published, or a lesson that belongs to a different course — never distinguish "not yours"
// from "doesn't exist" (see getPublishedLesson's isolation comment).
export async function GET(request: Request, { params }: Params) {
  const auth = await authenticateApiV1Request(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { id, lessonId } = await params;
  // Reject non-UUID input before hitting the DB (cheap, and avoids a Postgres error
  // leaking query shape in a 500).
  if (!UUID_RE.test(id) || !UUID_RE.test(lessonId)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const lesson = await getPublishedLesson(auth.tenant.id, id, lessonId);
  if (!lesson) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(
    { lesson, disclaimer: DISCLAIMER_FULL },
    { status: 200, headers: { "Cache-Control": "private, max-age=60" } },
  );
}
