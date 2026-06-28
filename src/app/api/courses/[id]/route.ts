import { NextResponse } from "next/server";
import { getScopedDb } from "@/db/scoped";

// GET /api/courses/[id] — by-id read. 404s across tenants (a foreign UUID must
// not resolve), so direct-UUID probing can't leak another brand's course.
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sdb = await getScopedDb();
  const course = await sdb.getCourseById(id);
  if (!course) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ course });
}
