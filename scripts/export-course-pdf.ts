/**
 * Export one course as a PDF (letter, 11pt body), for an e-reader or paper.
 *
 *   pnpm export:pdf <course-slug>                    writes content/pdf/<slug>.pdf
 *   pnpm export:pdf <course-slug> --out ~/book.pdf   writes there instead
 *   pnpm export:pdf faa-part-107 --content <dir>     FAA only: read the academy-import from <dir>
 *   pnpm export:pdf <course-slug> --no-toc-pages     one layout pass, no page numbers in the contents
 *
 * The course comes from the committed data (scripts/lib/course-export-input.ts explains where); no
 * database is touched, and no browser runs: the file is built by `courseToPdf`
 * (src/lib/pdf/course-to-pdf.tsx) with @react-pdf/renderer, the same function the admin route
 * /api/admin/courses/[id]/pdf calls with a course loaded from the database. The output goes under
 * content/, which is gitignored: an export is a personal reading copy, not a release artifact.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { courseToPdf } from "../src/lib/pdf/course-to-pdf";
import { argValue, expandHome, exportInputFor, loadAuthoredCourse, noCourseMessage, slugArg } from "./lib/course-export-input";

async function main() {
  const slug = slugArg(["--out", "--content"]);
  if (!slug) {
    console.error("Usage: pnpm export:pdf <course-slug> [--out path] [--content dir] [--no-toc-pages]");
    process.exit(1);
  }
  const contentDir = argValue("--content");
  const course = await loadAuthoredCourse(slug, contentDir ? resolve(expandHome(contentDir)) : undefined);
  if (!course || course.lessons.length === 0) {
    console.error(noCourseMessage(slug));
    process.exit(1);
  }

  const started = Date.now();
  const bytes = await courseToPdf(exportInputFor(slug, course), {
    variant: "reader",
    tocPageNumbers: !process.argv.includes("--no-toc-pages"),
  });

  const out = resolve(expandHome(argValue("--out") ?? join("content", "pdf", `${slug}.pdf`)));
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, bytes);
  const quizzes = course.lessons.filter((l) => l.quiz).length;
  console.log(
    `Wrote ${out}\n  ${course.title}: ${course.lessons.length} lessons (${quizzes} quizzes), ${(bytes.length / 1024).toFixed(0)} KB, ${((Date.now() - started) / 1000).toFixed(1)}s`,
  );
}

main().catch((error) => {
  console.error("PDF export failed:", error);
  process.exit(1);
});
