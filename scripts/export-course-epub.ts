/**
 * Export one course as an EPUB 3 file, for reading on an e-reader (Kobo, Apple Books, or a Kindle via
 * Send to Kindle, which accepts EPUB).
 *
 *   pnpm export:epub <course-slug>                    writes content/epub/<slug>.epub
 *   pnpm export:epub <course-slug> --out ~/book.epub  writes there instead
 *   pnpm export:epub faa-part-107 --content <dir>     FAA only: read the academy-import from <dir>
 *
 * WHERE THE COURSE COMES FROM. The committed course data, the same source the seeders read: the
 * course registry (scripts/lib/seed-registry.ts) resolves the slug to its scripts/data module. FAA
 * Part 107 is not a data module; it is assembled from the gitignored content/drone-curriculum/
 * import by scripts/lib/faa-course.ts, the same builder `pnpm seed:faa` uses. No database is
 * touched. The output goes under content/, which is gitignored: an export is a personal reading
 * copy, not a release artifact.
 *
 * The book itself is built by `courseToEpub` (src/lib/epub/course-to-epub.ts), which an admin route
 * could call with a course loaded from the database instead.
 */

import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { homedir } from "node:os";
import type { AuthoredCourse } from "./data/authored-course";
import { findSeedEntry, loadCourse } from "./lib/seed-registry";
import { FAA_CONTENT_DIR, FAA_COURSE_SLUG, buildFaaCourse } from "./lib/faa-course";
import { courseToEpub, type EpubCourseInput } from "../src/lib/epub/course-to-epub";

function argValue(flag: string): string | undefined {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

function expandHome(p: string): string {
  return p.startsWith("~/") ? join(homedir(), p.slice(2)) : p;
}

/** A stable urn:uuid for a slug (name-based, SHA-1, RFC 4122 version 5 layout), so re-exporting a
 *  course gives the same book id and an e-reader treats it as an update rather than a new book. */
function uuidForSlug(slug: string): string {
  const h = createHash("sha1").update(`witus-learn:course:${slug}`).digest();
  h[6] = (h[6] & 0x0f) | 0x50;
  h[8] = (h[8] & 0x3f) | 0x80;
  const x = h.subarray(0, 16).toString("hex");
  return `${x.slice(0, 8)}-${x.slice(8, 12)}-${x.slice(12, 16)}-${x.slice(16, 20)}-${x.slice(20, 32)}`;
}

async function loadAuthored(slug: string): Promise<AuthoredCourse | null> {
  if (slug === FAA_COURSE_SLUG) {
    const dir = argValue("--content");
    return buildFaaCourse(dir ? resolve(expandHome(dir)) : FAA_CONTENT_DIR).course;
  }
  const entry = findSeedEntry(slug);
  if (!entry) return null;
  return loadCourse(entry);
}

async function main() {
  const slug = process.argv.slice(2).find((a, i, all) => !a.startsWith("--") && !["--out", "--content"].includes(all[i - 1]));
  if (!slug) {
    console.error("Usage: pnpm export:epub <course-slug> [--out path] [--content dir]");
    process.exit(1);
  }
  const course = await loadAuthored(slug);
  if (!course || course.lessons.length === 0) {
    console.error(
      slug === FAA_COURSE_SLUG
        ? "No FAA content found: the academy-import must be in content/drone-curriculum/ (or pass --content <dir>)."
        : `No course data found for "${slug}". Check the slug against scripts/seed-*.ts; generated (gitignored) data modules must be generated first.`,
    );
    process.exit(1);
  }

  const input: EpubCourseInput = {
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
  };
  const bytes = courseToEpub(input);

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
