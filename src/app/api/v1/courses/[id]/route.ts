import { NextResponse } from "next/server";
import { authenticateApiV1Request } from "@/lib/api-v1-auth";
import { getPublishedCourseWithLessons } from "@/db/queries/api-v1";
import { DISCLAIMER_FULL } from "@/lib/disclaimer";

type Params = { params: Promise<{ id: string }> };

// GET /api/v1/courses/[id] — one of the calling tenant's published, public courses,
// plus its published lessons (metadata only — no lesson bodies/media URLs). 404s for a
// foreign-tenant id, an unpublished/private course, or a genuinely unknown id alike —
// never distinguish "not yours" from "doesn't exist" (that would leak cross-tenant
// existence, the same rule ScopedDb.ownOrNotFound enforces for host-scoped reads).
export async function GET(request: Request, { params }: Params) {
  const auth = await authenticateApiV1Request(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { id } = await params;
  // Reject non-UUID input before hitting the DB (cheap, and avoids a Postgres error
  // leaking query shape in a 500).
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const course = await getPublishedCourseWithLessons(auth.tenant.id, id);
  if (!course) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(
    { course, disclaimer: DISCLAIMER_FULL },
    { status: 200, headers: { "Cache-Control": "private, max-age=60" } },
  );
}
