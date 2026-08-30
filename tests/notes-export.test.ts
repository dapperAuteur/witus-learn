import { describe, expect, it } from "vitest";
import {
  COURSE_NOTES_HEADING,
  REMOVED_LESSON_HEADING,
  buildNotesMarkdown,
} from "@/lib/notes-export";

// "Download my notes for this course" is the learner's copy of their own work, so the two things
// worth pinning are that it is COMPLETE (course-level notes included, notes on a since-removed
// lesson kept) and that it reads in course order.

const lessons = [
  { id: "l1", title: "One", slug: "one" },
  { id: "l2", title: "Two", slug: "two" },
];

const build = (notes: Parameters<typeof buildNotesMarkdown>[0]["notes"]) =>
  buildNotesMarkdown({
    courseTitle: "A Course",
    exportedOn: "2026-08-30",
    notes,
    lessons,
    lessonUrl: (slug) => `https://example.test/teacher/a-course/lesson/${slug}`,
  });

describe("buildNotesMarkdown", () => {
  it("leads with the course-level notes, then the lessons in course order", () => {
    const md = build([
      { lessonId: "l2", quote: null, body: "second lesson note" },
      { lessonId: null, quote: null, body: "about the whole course" },
      { lessonId: "l1", quote: null, body: "first lesson note" },
    ]);
    const headings = md.split("\n").filter((l) => l.startsWith("## "));
    expect(headings).toEqual([`## ${COURSE_NOTES_HEADING}`, "## One", "## Two"]);
    expect(md).toContain("about the whole course");
    expect(md).toContain("Exported 2026-08-30. 3 notes.");
  });

  it("omits the course heading entirely when there are no course-level notes", () => {
    const md = build([{ lessonId: "l1", quote: null, body: "only a lesson note" }]);
    expect(md).not.toContain(COURSE_NOTES_HEADING);
    expect(md).toContain("Exported 2026-08-30. 1 note.");
  });

  it("gives a course-level note no lesson link, because it has no lesson", () => {
    const md = build([{ lessonId: null, quote: null, body: "about the whole course" }]);
    expect(md).not.toContain("https://example.test");
  });

  it("links each lesson section back to its lesson", () => {
    const md = build([{ lessonId: "l1", quote: null, body: "note" }]);
    expect(md).toContain("https://example.test/teacher/a-course/lesson/one");
  });

  it("keeps a note whose lesson has since been removed, and labels it", () => {
    const md = build([{ lessonId: "gone", quote: null, body: "orphan note" }]);
    expect(md).toContain(`## ${REMOVED_LESSON_HEADING}`);
    expect(md).toContain("orphan note");
  });

  it("quotes an anchored passage above its note, on one line", () => {
    const md = build([{ lessonId: "l1", quote: "a quoted\npassage", body: "note" }]);
    expect(md).toContain("> a quoted passage");
  });
});
