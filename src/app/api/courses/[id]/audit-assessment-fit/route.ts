import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { listLessons } from "@/db/queries/authoring";
import { extractReveals } from "@/lib/reveals";
import { buildChatModel, defaultProvider, providerConfigured } from "@/lib/ai/llm";
import type { QuizContent } from "@/lib/quiz";
import type { ExerciseContent } from "@/lib/exercise";

// POST /api/courses/[id]/audit-assessment-fit — instructor/admin. The SEMANTIC half of the
// assessment guardrail, and the sibling of audit-reveals: for each assessed lesson, ask the AI
// whether the WIDGET fits the content it wraps (a typed fill-in on a fact only multiple-choice can
// test fairly; a graded quiz on interpretive material a self-check suits better; a self-check on
// something that ought to be scored).
//
// ADVISORY, never a build gate. Per CLAUDE.md an LLM verdict must never be able to block a commit:
// it is non-deterministic, so the same tree could pass and then fail. The deterministic half is
// scripts/check-assessment-fit.ts, which DOES run in `pnpm lint` and whose rules live in
// src/lib/assessment-fit.ts. This route deliberately covers only what that half cannot decide.

// Bounds so one click can't fan out into a huge, slow, expensive request.
const MAX_LESSONS = 10;
const BODY_CHARS = 4000;
const MAX_ITEMS_PER_LESSON = 12;

/** The widgets a lesson can carry, in the vocabulary the model is asked to reason about. */
type Widget = "quiz" | "exercise" | "reveal";

interface Flagged {
  lessonTitle: string;
  widget: Widget;
  suggested: string;
  note: string;
}

interface Assessed {
  lessonTitle: string;
  widget: Widget;
  body: string;
  items: string[];
}

/** Everything assessable on one lesson, flattened to the strings the model needs to judge fit. */
function assessedOf(lesson: {
  title: string;
  textContent: string | null;
  quizContent: unknown;
  exerciseContent: unknown;
}): Assessed[] {
  const body = (lesson.textContent ?? "").slice(0, BODY_CHARS);
  const out: Assessed[] = [];

  const quiz = lesson.quizContent as QuizContent | null;
  if (quiz?.questions?.length) {
    out.push({
      lessonTitle: lesson.title,
      widget: "quiz",
      body,
      items: quiz.questions
        .slice(0, MAX_ITEMS_PER_LESSON)
        .map((q) => `${q.prompt} [options: ${(q.options ?? []).join(" | ")}]`),
    });
  }

  const exercise = lesson.exerciseContent as ExerciseContent | null;
  if (exercise?.items?.length) {
    out.push({
      lessonTitle: lesson.title,
      widget: "exercise",
      body,
      items: exercise.items
        .slice(0, MAX_ITEMS_PER_LESSON)
        .map((i) => `${i.prompt} [typed answer: ${i.answer}]`),
    });
  }

  const reveals = extractReveals(lesson.textContent);
  if (reveals.length > 0) {
    out.push({
      lessonTitle: lesson.title,
      widget: "reveal",
      body,
      items: reveals.slice(0, MAX_ITEMS_PER_LESSON).map((r) => `${r.question} [self-check answer: ${r.answer}]`),
    });
  }

  return out;
}

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const provider = defaultProvider();
  if (!providerConfigured(provider)) return errorJson("No AI provider is configured", 503);

  const lessons = (await listLessons(id)).filter((l) => l.isPublished);
  const assessed = lessons.flatMap(assessedOf);
  const slice = assessed.slice(0, MAX_LESSONS);
  const truncated = slice.length < assessed.length;

  const model = buildChatModel({ provider, temperature: 0, maxTokens: 1500 });
  const flagged: Flagged[] = [];

  for (const a of slice) {
    const prompt = [
      "You review the ASSESSMENT WIDGET an online lesson uses, not its facts. Three widgets exist:",
      "  quiz     = scored multiple-choice. Fits a fact with one defensible answer and plausible wrong ones.",
      "  exercise = the learner TYPES an answer, graded by string equality (case and accents forgiven).",
      "             Fits production practice (a conjugation, a term, a calculation), NOT closed-set recall",
      "             of a date or a name, and NOT interpretive material where wording varies.",
      "  reveal   = a hidden-answer self-check the learner grades themselves. Fits open, interpretive or",
      "             reflective questions that cannot be scored fairly.",
      "",
      `This lesson uses the "${a.widget}" widget. Judge ONLY whether that widget fits this content.`,
      "Do not comment on factual accuracy, wording, difficulty, or the number of items.",
      "Flag it only if a DIFFERENT widget would clearly serve the learner better.",
      'Return ONLY JSON, no prose and no code fences: {"fits":<true|false>,"suggested":"<quiz|exercise|reveal|none>",',
      '"note":"<short reason, only when fits is false, max 160 chars>"}',
      "",
      `LESSON TEXT:\n${a.body}`,
      "",
      `ITEMS:\n${a.items.join("\n")}`,
    ].join("\n");

    try {
      const res = await model.invoke(prompt);
      const raw = typeof res.content === "string" ? res.content : JSON.stringify(res.content);
      const cleaned = raw.replace(/```json/gi, "").replace(/```/g, "").trim();
      const start = cleaned.indexOf("{");
      const end = cleaned.lastIndexOf("}");
      if (start < 0 || end <= start) continue;
      const verdict = JSON.parse(cleaned.slice(start, end + 1)) as {
        fits?: boolean;
        suggested?: string;
        note?: string;
      };
      if (verdict.fits === false) {
        flagged.push({
          lessonTitle: a.lessonTitle,
          widget: a.widget,
          suggested: (verdict.suggested ?? "none").slice(0, 20),
          note: (verdict.note ?? "A different widget may fit this content better.").slice(0, 200),
        });
      }
    } catch {
      continue; // best-effort: an unparseable answer just skips this lesson
    }
  }

  return json({ audited: slice.length, flagged, truncated });
}
