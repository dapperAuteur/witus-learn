import { NextResponse, after } from "next/server";
import { getScopedDb } from "@/db/scoped";
import { recordLinkClick } from "@/db/queries/link-clicks";

// GET /api/link/click?u=<enc url>&c=<courseId>&l=<lessonId?>&k=<content|ecosystem>
// Counts an outbound click (privacy-light, counts only) then 302s to the target.
// Guards: target must be http(s) absolute (no open redirect); course must be in this
// tenant (no cross-tenant leak). Counting is best-effort via after() — never blocks the hop.
export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);
  const raw = searchParams.get("u");
  const courseId = searchParams.get("c");
  const lessonId = searchParams.get("l");
  const kind = searchParams.get("k") === "ecosystem" ? "ecosystem" : "content";

  // Validate the target is a real external http(s) URL — reject javascript:, data:, relative, etc.
  let target: URL | null = null;
  try {
    if (raw) {
      const u = new URL(raw);
      if (u.protocol === "http:" || u.protocol === "https:") target = u;
    }
  } catch {
    target = null;
  }
  if (!target) return NextResponse.redirect(origin, 302);

  if (courseId) {
    const sdb = await getScopedDb();
    // Only count if the course actually belongs to this tenant (by-id 404s across tenants).
    const course = await sdb.getCourseById(courseId);
    if (course) {
      const tenantId = sdb.tenantId;
      const url = target.toString();
      after(() =>
        recordLinkClick({ tenantId, courseId, lessonId: lessonId || null, kind, url }).catch(() => {}),
      );
    }
  }

  return NextResponse.redirect(target.toString(), 302);
}
