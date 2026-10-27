import { apiContext, errorJson, isTenantAdmin } from "@/lib/api";
import { courseToPdf } from "@/lib/pdf/course-to-pdf";
import { downloadResponse, exportFilename, loadExportableCourse } from "@/lib/course-export";

// GET /api/admin/courses/[id]/pdf: the course as a PDF (letter, 11pt body), for an e-reader or
// paper. Same gate, loader and shape as the EPUB route beside it; the file is rendered by
// @react-pdf/renderer, pure JavaScript, so no browser runs in this function (see the header of
// src/lib/pdf/course-to-pdf.tsx). A long course is laid out twice (page numbers in the contents),
// which can take some seconds; the duration below is the Next.js route segment config, not a
// platform value, and a host with a shorter limit wins.

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

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

  const bytes = await courseToPdf(loaded.input, { variant: "reader" });
  return downloadResponse(bytes, "application/pdf", exportFilename(loaded.course, "pdf"));
}
