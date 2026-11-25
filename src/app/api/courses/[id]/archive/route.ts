import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { db } from "@/db/client";
import { archiveCourse, ArchiveRefusal, drizzleArchiveRunner } from "@/lib/archive-course";
import { expireCourse } from "@/lib/cache-tags";

// POST /api/courses/[id]/archive: archive THIS course as an earlier edition of `replacementCourseId`
// (plans/101 section 5, slug rule (a)). Platform owner only: archiving renames two courses' slugs,
// which is the platform's decision, never a school admin's or an instructor's. Both courses must
// resolve in the request's tenant (404 otherwise, never a hint that a foreign course exists). The
// decision itself (refusals, the default label, the two writes in one transaction) is
// src/lib/archive-course.ts, shared with scripts/archive-course.ts. `dryRun` returns the plan and
// writes nothing. On a real write both courses' cache tags are cleared, which the CLI cannot do.
const Body = z.object({
  replacementCourseId: z.string().uuid(),
  reason: z.string().max(4000).optional(),
  dryRun: z.boolean().optional(),
});

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const replacement = await sdb.getCourseById(parsed.data.replacementCourseId);
  if (!replacement) return errorJson("Replacement course not found", 404);
  if (!course.slug || !replacement.slug) {
    return errorJson("Both courses need a slug before one can replace the other.", 409);
  }

  try {
    const plan = await archiveCourse(drizzleArchiveRunner(db), {
      tenantId: sdb.tenantId,
      oldSlug: course.slug,
      newSlug: replacement.slug,
      reason: parsed.data.reason,
      dryRun: parsed.data.dryRun,
    });
    if (plan.written) {
      expireCourse(sdb.tenantId, course.id);
      expireCourse(sdb.tenantId, replacement.id);
    }
    return json({ plan });
  } catch (err) {
    if (err instanceof ArchiveRefusal) return json({ error: err.message, code: err.code }, 409);
    throw err;
  }
}
