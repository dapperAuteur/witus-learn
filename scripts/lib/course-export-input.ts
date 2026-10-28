// Shared by the export scripts (export-course-epub.ts, export-course-pdf.ts): where a course comes
// from on disk, and how it maps onto the input the book builders take. The admin routes do the same
// job from the database (src/lib/course-export.ts); this is the no-database path.
//
// WHERE THE COURSE COMES FROM. The committed course data, the same source the seeders read: the
// course registry (seed-registry.ts) resolves the slug to its scripts/data module. FAA Part 107 is
// not a data module; it is assembled from the gitignored content/drone-curriculum/ import by
// faa-course.ts, the same builder `pnpm seed:faa` uses.

import { createHash } from "node:crypto";
import { join } from "node:path";
import { homedir } from "node:os";
import type { AuthoredCourse } from "../data/authored-course";
import { findSeedEntry, loadCourse } from "./seed-registry";
import { FAA_CONTENT_DIR, FAA_COURSE_SLUG, buildFaaCourse } from "./faa-course";
import { certDisclaimerFor } from "../../src/lib/cert-disclaimer";
import { DISCLAIMER_SHORT } from "../../src/lib/disclaimer";
import type { CourseExportInput } from "../../src/lib/course-export";

export function argValue(flag: string): string | undefined {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

export function expandHome(p: string): string {
  return p.startsWith("~/") ? join(homedir(), p.slice(2)) : p;
}

/** The slug argument: the first bare argument that is not the value of a flag. */
export function slugArg(flagsWithValues: string[]): string | undefined {
  return process.argv.slice(2).find((a, i, all) => !a.startsWith("--") && !flagsWithValues.includes(all[i - 1]));
}

/** A stable urn:uuid for a slug (name-based, SHA-1, RFC 4122 version 5 layout), so re-exporting a
 *  course gives the same book id and an e-reader treats it as an update rather than a new book. */
export function uuidForSlug(slug: string): string {
  const h = createHash("sha1").update(`witus-learn:course:${slug}`).digest();
  h[6] = (h[6] & 0x0f) | 0x50;
  h[8] = (h[8] & 0x3f) | 0x80;
  const x = h.subarray(0, 16).toString("hex");
  return `${x.slice(0, 8)}-${x.slice(8, 12)}-${x.slice(12, 16)}-${x.slice(16, 20)}-${x.slice(20, 32)}`;
}

/** The authored course for a slug, or null when nothing registers it. `contentDir` is FAA only. */
export async function loadAuthoredCourse(slug: string, contentDir?: string): Promise<AuthoredCourse | null> {
  if (slug === FAA_COURSE_SLUG) return buildFaaCourse(contentDir ?? FAA_CONTENT_DIR).course;
  const entry = findSeedEntry(slug);
  if (!entry) return null;
  return loadCourse(entry);
}

export function noCourseMessage(slug: string): string {
  return slug === FAA_COURSE_SLUG
    ? "No FAA content found: the academy-import must be in content/drone-curriculum/ (or pass --content <dir>)."
    : `No course data found for "${slug}". Check the slug against scripts/seed-*.ts; generated (gitignored) data modules must be generated first.`;
}

/** The book builders' input, carrying the same notices the site shows for this course. */
export function exportInputFor(slug: string, course: AuthoredCourse): CourseExportInput {
  const cert = certDisclaimerFor(slug);
  return {
    title: course.title,
    description: course.description,
    identifier: `urn:uuid:${uuidForSlug(slug)}`,
    language: "en",
    lessons: course.lessons.map((l) => ({
      slug: l.slug,
      title: l.title,
      section: l.section,
      lessonType: l.lessonType ?? (l.quiz ? "quiz" : l.exercise ? "exercise" : l.mapContent ? "map" : "text"),
      body: l.body,
      quiz: l.quiz,
      recall: l.recallContent,
    })),
    disclaimers: [DISCLAIMER_SHORT, ...(cert ? [cert.text] : [])],
  };
}
