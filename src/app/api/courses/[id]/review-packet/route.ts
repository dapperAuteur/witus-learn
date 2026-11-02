import { apiContext, errorJson, isTenantAdmin } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { listLessons, listModules } from "@/db/queries/authoring";
import { courseToPdf } from "@/lib/pdf/course-to-pdf";
import { courseToEpub } from "@/lib/epub/course-to-epub";
import { downloadResponse } from "@/lib/course-export";
import { DISCLAIMER_SHORT } from "@/lib/disclaimer";
import { getSiteUrl } from "@/lib/site-url";
import { PACKET_PURPOSE, packetFilename, packetLessons, parsePacketFormat } from "@/lib/review-packet";

// GET /api/courses/[id]/review-packet?format=pdf|epub (plans/97 v2, G3): the lessons of this course
// marked "Before release", as one file a reviewer can read offline.
//
// Who: an ACCEPTED review grant on this course (the same grant that opens /audit/review), the
// platform owner, or this school's admin on a course that is not owner-only. Signed out is 401;
// another tenant's course id, or a course with no marked lesson, is 404 (never a redirect); anyone
// else is 403. The course is read through the tenant-scoped DAL, and the file carries THIS school's
// name and host only. The log line names the course id and format, nothing about the viewer.

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

type Params = { params: Promise<{ id: string }> };

export async function GET(req: Request, { params }: Params) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  const format = parsePacketFormat(new URL(req.url).searchParams.get("format"));
  if (!format) return errorJson("Ask for format=pdf or format=epub.", 400);
  const { id } = await params;
  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Course not found.", 404);

  const owner = await isPlatformOwner(session.user.id);
  const admin = !owner && !course.ownerOnly && (await isTenantAdmin(session, sdb.tenantId));
  const grant =
    owner || admin
      ? null
      : await sdb.getViewerAuditorGrant({ courseId: course.id, userId: session.user.id, email: session.user.email ?? null });
  if (!owner && !admin && !grant) return errorJson("Only a reviewer invited to this course can download its review packet.", 403);

  const [rows, modules] = await Promise.all([listLessons(course.id), listModules(course.id)]);
  const lessons = packetLessons(rows, new Map(modules.map((m) => [m.id, m.title])));
  if (lessons.length === 0) return errorJson("No lesson in this course is marked for review.", 404);

  const host = new URL(await getSiteUrl()).host;
  const brand = { name: sdb.tenant.name, host };
  const input = {
    title: `${course.title}: lessons for your review`,
    description: course.description,
    identifier: `urn:uuid:${course.id}-review-packet`,
    language: "en",
    author: sdb.tenant.name,
    publisher: sdb.tenant.name,
    lessons,
    disclaimers: [DISCLAIMER_SHORT],
    brand,
    purpose: PACKET_PURPOSE,
  };
  console.info("review-packet", { courseId: course.id, format });
  if (format === "pdf") {
    const bytes = await courseToPdf(input, { variant: "reader" });
    return downloadResponse(bytes, "application/pdf", packetFilename(course, "pdf"));
  }
  return downloadResponse(courseToEpub(input), "application/epub+zip", packetFilename(course, "epub"));
}
