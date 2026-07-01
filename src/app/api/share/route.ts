import { NextResponse } from "next/server";
import { z } from "zod";
import { getScopedDb } from "@/db/scoped";
import { recordShare } from "@/db/queries/social-shares";

// POST /api/share — record a share action from the ShareButton (privacy-light, counts only).
// Tenant-scoped; a courseId is only accepted if it belongs to this tenant (no cross-tenant write).
const Body = z.object({
  channel: z.enum(["copy", "native", "x", "linkedin", "facebook", "email"]),
  courseId: z.string().uuid().nullable().optional(),
  lessonId: z.string().uuid().nullable().optional(),
});

export async function POST(req: Request) {
  const sdb = await getScopedDb();
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid share." }, { status: 400 });
  const { channel, courseId, lessonId } = parsed.data;

  // Drop a courseId that isn't in this tenant rather than trust the client.
  let safeCourseId: string | null = null;
  if (courseId) {
    const course = await sdb.getCourseById(courseId);
    safeCourseId = course ? courseId : null;
  }

  await recordShare({ tenantId: sdb.tenantId, courseId: safeCourseId, lessonId: safeCourseId ? (lessonId ?? null) : null, channel });
  return NextResponse.json({ ok: true });
}
