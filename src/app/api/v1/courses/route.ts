import { NextResponse } from "next/server";
import { authenticateApiV1Request } from "@/lib/api-v1-auth";
import { listPublishedCourses } from "@/db/queries/api-v1";
import { DISCLAIMER_FULL } from "@/lib/disclaimer";

// GET /api/v1/courses — the calling tenant's published, public courses. Auth: a
// per-tenant API key (Authorization: Bearer <key>) — see plans/wanderlearn-embed-design.md.
// The tenant comes ONLY from the key; there is no way to ask for another tenant's data.
// Pagination: ?limit=&offset= (defaults 20/0, capped at 100) — see normalizeListPagination.
export async function GET(request: Request) {
  const auth = await authenticateApiV1Request(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const url = new URL(request.url);
  const limitParam = url.searchParams.get("limit");
  const offsetParam = url.searchParams.get("offset");
  const { items, pagination } = await listPublishedCourses(auth.tenant.id, {
    limit: limitParam !== null ? Number(limitParam) : undefined,
    offset: offsetParam !== null ? Number(offsetParam) : undefined,
  });

  return NextResponse.json(
    { courses: items, pagination, disclaimer: DISCLAIMER_FULL },
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
