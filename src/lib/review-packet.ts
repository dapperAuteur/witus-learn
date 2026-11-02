// The reviewer packet (plans/97 v2, G3): the lessons of ONE course that carry a "Before release"
// need, as a PDF or an EPUB a reviewer can read offline. A different composition over the course
// export (src/lib/course-export.ts): the same lesson renderer, limited to the marked lessons, each
// headed by the needs a reviewer is asked to check. Pure, so the selection is unit-tested.
//
// What it never contains: anything about learners, any verdict or correction (those are attached to
// the lesson in the app, never mailed around), and another school's branding.

import { KIND_TITLE, readReviewNeeds, type ReviewNeed } from "@/lib/lesson-review";
import type { QuizContent } from "@/lib/quiz";

export type PacketFormat = "pdf" | "epub";
export const PACKET_FORMATS: readonly PacketFormat[] = ["pdf", "epub"];

export function parsePacketFormat(v: string | null): PacketFormat | null {
  return v === "pdf" || v === "epub" ? v : null;
}

export interface PacketLessonRow {
  slug: string | null;
  title: string;
  moduleId: string | null;
  lessonType: string | null;
  textContent: string | null;
  quizContent: unknown;
  recallContent: unknown;
  reviewNeeds: unknown;
  isPublished: boolean;
}

/** The blockquote that heads each lesson in the packet: one line per need, in the course's words. */
export function needsHeading(needs: readonly ReviewNeed[]): string {
  const lines = needs.map((n) => {
    const q = n.kind === "decision" && n.question != null ? ` (brief question ${n.question})` : "";
    return `> **${KIND_TITLE[n.kind]}${q}:** ${n.who}`;
  });
  return ["> **For your review before release.**", ">", ...lines.flatMap((l, i) => (i ? [">", l] : [l]))].join("\n");
}

function asQuiz(value: unknown): QuizContent | null {
  if (!value || typeof value !== "object") return null;
  const q = value as Partial<QuizContent>;
  return Array.isArray(q.questions) ? (q as QuizContent) : null;
}

/** Published lessons that carry at least one need, in course order, each headed by its needs. */
export function packetLessons(rows: readonly PacketLessonRow[], sectionOf: ReadonlyMap<string, string>) {
  return rows
    .filter((l) => l.isPublished)
    .map((l) => ({ l, needs: readReviewNeeds(l.reviewNeeds) }))
    .filter((x) => x.needs.length > 0)
    .map(({ l, needs }) => ({
      slug: l.slug,
      title: l.title,
      section: l.moduleId ? (sectionOf.get(l.moduleId) ?? null) : null,
      lessonType: l.lessonType,
      body: `${needsHeading(needs)}\n\n${l.textContent ?? ""}`.trimEnd(),
      quiz: asQuiz(l.quizContent),
      recall: Array.isArray(l.recallContent) ? (l.recallContent as { prompt: string; answer: string }[]) : null,
    }));
}

export const PACKET_PURPOSE =
  "Lessons for your review: only the lessons of this course marked “Before release”, each headed by what a reviewer is asked to check. Record your verdict on each lesson's page in the course; this file is for reading.";

/** `<slug>-review-packet.<ext>`, filename-safe. */
export function packetFilename(course: { slug: string | null; id: string }, ext: PacketFormat): string {
  const base = (course.slug ?? course.id).replace(/[^A-Za-z0-9._-]+/g, "-");
  return `${base}-review-packet.${ext}`;
}

