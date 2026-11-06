import { apiContext, courseExportAccess, errorJson } from "@/lib/api";
import { courseToEpub } from "@/lib/epub/course-to-epub";
import { downloadResponse, exportFilename, loadExportableCourse } from "@/lib/course-export";

// GET /api/admin/courses/[id]/epub: the course as an EPUB 3 file, for an e-reader. [id] is the
// course slug or uuid. Authorized to whoever may open the course's workspace: the platform owner, its
// own instructor, and the school's brand_admin, except on an owner-only course (courseExportAccess).
// The "Download EPUB" link on /teach/[courseId] shows to exactly those viewers. The course is read through the tenant-scoped DAL, so another tenant's course
// is a 404. Built from the database (the published lessons a learner sees), not from scripts/data,
// so what downloads is what is live. Attachment download, no caching.

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  const { id } = await params;
  const course = await sdb.getCourseByIdOrSlug(id);
  if (!course) return errorJson("Course not found.", 404);
  // Exports for whoever may open the course's workspace: the platform owner, its own instructor, and
  // the school's brand_admin (not on an owner-only course). Anyone else gets "not found" on a closed
  // course and 403 on an open one (courseExportAccess in src/lib/api.ts).
  const access = await courseExportAccess(session, sdb.tenantId, course);
  if (access === "not-found") return errorJson("Course not found.", 404);
  if (access === "forbidden") return errorJson("Only a school admin can export a course.", 403);
  const loaded = await loadExportableCourse(course);

  const bytes = courseToEpub(loaded.input);
  return downloadResponse(bytes, "application/epub+zip", exportFilename(loaded.course, "epub"));
}
