// The markdown a learner gets from "Download my notes for this course" (plans/61 §7 picked
// markdown with the quoted passage and a link back to the lesson).
//
// Pure on purpose: the route does the tenant-scoped reads, this does the assembly, so the shape
// of the file a learner receives is testable without a database. The rule it encodes is that a
// learner's notes are THEIR work — the export is always complete and contains only their own
// notes, never a teacher's sent notes and never anything shared to them.

export interface ExportNote {
  /** null = a COURSE-level note (about the course as a whole, not any one lesson). */
  lessonId: string | null;
  quote: string | null;
  body: string;
}

export interface ExportLesson {
  id: string;
  title: string;
  slug: string | null;
}

/** Heading for the course-level notes, which have no lesson to name. */
export const COURSE_NOTES_HEADING = "About this course";

/** Heading used when a note outlives the lesson it was written on. */
export const REMOVED_LESSON_HEADING = "A lesson that has since been removed";

export function buildNotesMarkdown(input: {
  courseTitle: string;
  exportedOn: string;
  notes: ExportNote[];
  /** Lessons in course order, so the export reads in the order the learner studied. */
  lessons: ExportLesson[];
  /** Absolute URL for a lesson slug, or null when the course has no public path. */
  lessonUrl: (slug: string) => string | null;
}): string {
  const { courseTitle, exportedOn, notes, lessons, lessonUrl } = input;
  const lessonById = new Map(lessons.map((l) => [l.id, l]));

  const lines: string[] = [
    `# My notes, ${courseTitle}`,
    "",
    `Exported ${exportedOn}. ${notes.length} note${notes.length === 1 ? "" : "s"}.`,
    "",
  ];

  // Group by lesson. Course-level notes get their own bucket under a sentinel key, which is why
  // the map is keyed by `string | null` rather than by lesson id alone.
  const byLesson = new Map<string | null, ExportNote[]>();
  for (const n of notes) {
    const list = byLesson.get(n.lessonId) ?? [];
    list.push(n);
    byLesson.set(n.lessonId, list);
  }

  const sections: (string | null)[] = [
    // Course-level notes first: they are about the whole thing, so they read as a preamble.
    ...(byLesson.has(null) ? [null] : []),
    ...lessons.map((l) => l.id).filter((id) => byLesson.has(id)),
    // Notes whose lesson no longer exists still belong to the learner, so they are kept and
    // labelled rather than dropped.
    ...[...byLesson.keys()].filter((k) => k !== null && !lessonById.has(k)),
  ];

  for (const key of sections) {
    const lesson = key === null ? undefined : lessonById.get(key);
    lines.push(
      `## ${key === null ? COURSE_NOTES_HEADING : (lesson?.title ?? REMOVED_LESSON_HEADING)}`,
    );
    const path = lesson?.slug ? lessonUrl(lesson.slug) : null;
    if (path) lines.push("", path);
    lines.push("");
    for (const n of byLesson.get(key) ?? []) {
      if (n.quote) lines.push(`> ${n.quote.replace(/\n/g, " ")}`, "");
      lines.push(n.body, "");
    }
  }

  return lines.join("\n");
}
