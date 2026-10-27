/**
 * Export one course as an EPUB 3 file, for reading on an e-reader (Kobo, Apple Books, or a Kindle via
 * Send to Kindle, which accepts EPUB).
 *
 *   pnpm export:epub <course-slug>                    writes content/epub/<slug>.epub
 *   pnpm export:epub <course-slug> --out ~/book.epub  writes there instead
 *   pnpm export:epub faa-part-107 --content <dir>     FAA only: read the academy-import from <dir>
 *
 * The course comes from the committed data (scripts/lib/course-export-input.ts explains where); no
 * database is touched. The output goes under content/, which is gitignored: an export is a personal
 * reading copy, not a release artifact.
 *
 * The book itself is built by `courseToEpub` (src/lib/epub/course-to-epub.ts), which the admin route
 * /api/admin/courses/[id]/epub calls with a course loaded from the database instead.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { courseToEpub } from "../src/lib/epub/course-to-epub";
import { argValue, expandHome, exportInputFor, loadAuthoredCourse, noCourseMessage, slugArg } from "./lib/course-export-input";

async function main() {
  const slug = slugArg(["--out", "--content"]);
  if (!slug) {
    console.error("Usage: pnpm export:epub <course-slug> [--out path] [--content dir]");
    process.exit(1);
  }
  const contentDir = argValue("--content");
  const course = await loadAuthoredCourse(slug, contentDir ? resolve(expandHome(contentDir)) : undefined);
  if (!course || course.lessons.length === 0) {
    console.error(noCourseMessage(slug));
    process.exit(1);
  }

  const bytes = courseToEpub(exportInputFor(slug, course));

  const out = resolve(expandHome(argValue("--out") ?? join("content", "epub", `${slug}.epub`)));
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, bytes);
  const quizzes = course.lessons.filter((l) => l.quiz).length;
  console.log(
    `Wrote ${out}\n  ${course.title}: ${course.lessons.length} chapters (${quizzes} quizzes), ${(bytes.length / 1024).toFixed(0)} KB`,
  );
}

main().catch((error) => {
  console.error("EPUB export failed:", error);
  process.exit(1);
});
