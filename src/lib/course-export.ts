// The course as the two admin export routes hand it to the book builders: what a LEARNER sees,
// loaded from the database, mapped onto the shape courseToEpub (src/lib/epub/course-to-epub.ts) and
// courseToPdf (src/lib/pdf/course-to-pdf.tsx) both take. One loader, two file formats.
//
// What a learner sees (src/lib/course-access.ts): the course's PUBLISHED lessons, in order, with the
// title of the module each sits in. Draft lessons stay out of the book. The course itself is read
// through the tenant-scoped DAL, so a course in another tenant is a 404, never a redirect.
//
// The notices on the title page are the ones the site already shows for this course, verbatim: the
// site-wide educational disclaimer (every course page, the embed view and the public API carry it)
// and the certification notice registered for the course, if any. Nothing is written here.

import type { ScopedDb } from "@/db/scoped";
import type { Course } from "@/db/schema";
import { listLessons, listModules } from "@/db/queries/authoring";
import { certDisclaimerFor } from "@/lib/cert-disclaimer";
import { DISCLAIMER_SHORT } from "@/lib/disclaimer";
import type { QuizContent } from "@/lib/quiz";
import type { PdfCourseInput } from "@/lib/pdf/course-to-pdf";

/** The EPUB input is this minus the notices; the PDF input is the whole thing. */
export interface CourseExportInput extends PdfCourseInput {
  identifier: string;
}

export interface ExportableCourse {
  course: Course;
  input: CourseExportInput;
}

function asQuiz(value: unknown): QuizContent | null {
  if (!value || typeof value !== "object") return null;
  const q = value as Partial<QuizContent>;
  return Array.isArray(q.questions) ? (q as QuizContent) : null;
}

/** Resolve a course by id or slug within the request's tenant and load its published lessons. */
export async function loadExportableCourse(sdb: ScopedDb, idOrSlug: string): Promise<ExportableCourse | null> {
  const course = await sdb.getCourseByIdOrSlug(idOrSlug);
  if (!course) return null;
  const [all, modules] = await Promise.all([listLessons(course.id), listModules(course.id)]);
  const sectionOf = new Map(modules.map((m) => [m.id, m.title]));
  const lessons = all
    .filter((l) => l.isPublished)
    .map((l) => ({
      slug: l.slug,
      title: l.title,
      section: l.moduleId ? (sectionOf.get(l.moduleId) ?? null) : null,
      lessonType: l.lessonType,
      body: l.textContent,
      quiz: asQuiz(l.quizContent),
      recall: l.recallContent ?? null,
    }));
  const cert = certDisclaimerFor(course.slug);
  return {
    course,
    input: {
      title: course.title,
      description: course.description,
      identifier: `urn:uuid:${course.id}`,
      language: "en",
      lessons,
      disclaimers: [DISCLAIMER_SHORT, ...(cert ? [cert.text] : [])],
    },
  };
}

/** `<slug>.<ext>`, falling back to the id for a course without a slug; only filename-safe characters. */
export function exportFilename(course: Pick<Course, "slug" | "id">, ext: "epub" | "pdf"): string {
  const base = (course.slug ?? course.id).replace(/[^A-Za-z0-9._-]+/g, "-");
  return `${base}.${ext}`;
}

/** A download response: attachment, never cached (the course changes; an admin wants the current one). */
export function downloadResponse(bytes: Uint8Array, contentType: string, filename: string): Response {
  // A fresh ArrayBuffer copy: Response wants a BufferSource over an ArrayBuffer, and a Uint8Array
  // view may sit on a larger or shared buffer.
  const body = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
  return new Response(body, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
