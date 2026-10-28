import { apiContext, errorJson, isTenantAdmin } from "@/lib/api";
import { courseToEpub } from "@/lib/epub/course-to-epub";
import { downloadResponse, exportFilename, loadExportableCourse } from "@/lib/course-export";

// GET /api/admin/courses/[id]/epub: the course as an EPUB 3 file, for an e-reader. [id] is the
// course slug or uuid. Authorized to a tenant ADMIN (brand_admin or platform owner) only, the same
// gate as /api/admin/gradebook.csv; the "Download EPUB" link on /teach/[courseId] shows only to
// viewers who pass it. The course is read through the tenant-scoped DAL, so another tenant's course
// is a 404. Built from the database (the published lessons a learner sees), not from scripts/data,
// so what downloads is what is live. Attachment download, no caching.

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) {
    return errorJson("Only a school admin can export a course.", 403);
  }
  const { id } = await params;
  const loaded = await loadExportableCourse(sdb, id);
  if (!loaded) return errorJson("Course not found.", 404);

  const bytes = courseToEpub(loaded.input);
  return downloadResponse(bytes, "application/epub+zip", exportFilename(loaded.course, "epub"));
}
