import type { QuizContent } from "../../src/lib/quiz";

// Shared converters for content authored in the CentOS / Academy format (FAA, BVC).

// GUIDE-01 hard rule: NO stage tags in published lesson text. Turn each audio beat
// marker into a descriptive heading and strip inline cues ([Beat], [Sound: ...]).
const BEAT_HEADINGS: Record<string, string> = {
  RECALL: "Quick recall",
  WELCOME: "Welcome",
  HOOK: "Why this matters",
  TEACH: "The idea",
  PICTURE: "Picture it",
  "ON THE TEST": "On the test",
  "WATCH OUT": "Watch out",
  CHECK: "Quick check",
  REMEMBER: "Remember this",
  STORY: "Story",
  SOURCES: "Sources",
};

export function cleanLessonMarkdown(md: string): string {
  let out = md ?? "";
  for (const [tag, heading] of Object.entries(BEAT_HEADINGS)) {
    out = out.split(`[${tag}]`).join(`\n## ${heading}\n`);
  }
  return out
    .replace(/\[Sound:[^\]]*\]/gi, "")
    .replace(/\[Music:[^\]]*\]/gi, "")
    .replace(/\[Beat\]/gi, "")
    .replace(/\[tone\]/gi, "")
    .replace(/ {2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// CentOS quiz schema -> witus QuizContent. options become a string[]; correctOptionId
// becomes its index; the citation is folded into the explanation.
export interface CentosQuiz {
  passingScore?: number;
  questions: {
    questionText: string;
    options: { id: string; text: string }[];
    correctOptionId: string;
    explanation?: string;
    citation?: string;
  }[];
}

// House rule (BAM): a REGULAR quiz is 10 questions or fewer; only finals/exams may run
// longer. Pass an optional `title` — when it marks the quiz as a final/exam (matches
// /final|exam|comprehensive|midterm/i) the cap is skipped; otherwise the quiz is capped
// to its first 10 questions. Shared by every course using this converter (FAA/BVC/NASM
// on their next re-seed).
const REGULAR_QUIZ_MAX = 10;
const isExamTitle = (title?: string) => /final|exam|comprehensive|midterm/i.test(title ?? "");

export function convertCentosQuiz(c: CentosQuiz, title?: string): QuizContent {
  const questions = (c.questions ?? []).map((q) => {
    const idx = q.options.findIndex((o) => o.id === q.correctOptionId);
    const explanation = q.citation
      ? `${q.explanation ?? ""}\n\nReference: ${q.citation}`.trim()
      : q.explanation;
    return {
      prompt: q.questionText,
      options: q.options.map((o) => o.text),
      correctIndex: idx < 0 ? 0 : idx,
      explanation,
    };
  });
  return {
    passingScore: c.passingScore ?? 80,
    questions:
      isExamTitle(title) || questions.length <= REGULAR_QUIZ_MAX
        ? questions
        : questions.slice(0, REGULAR_QUIZ_MAX),
  };
}
