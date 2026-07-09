import { NextResponse } from "next/server";
import { authenticateApiV1Request } from "@/lib/api-v1-auth";
import { listPublishedCourses } from "@/db/queries/api-v1";

// GET /api/v1/courses — the calling tenant's published, public courses. Auth: a
// per-tenant API key (Authorization: Bearer <key>) — see plans/wanderlearn-embed-design.md.
// The tenant comes ONLY from the key; there is no way to ask for another tenant's data.
export async function GET(request: Request) {
  const auth = await authenticateApiV1Request(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const items = await listPublishedCourses(auth.tenant.id);
  return NextResponse.json(
    { courses: items },
    {
      status: 200,
      headers: {
        // Short, shared cache — content is public-published, but changes shouldn't take
        // long to propagate to a consumer app. No per-request personalization to leak.
        "Cache-Control": "private, max-age=60",
      },
    },
  );
}
