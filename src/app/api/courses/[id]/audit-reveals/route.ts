import { errorJson, json, loadEditableCourse } from "@/lib/api";
import { listLessons } from "@/db/queries/authoring";
import { extractReveals } from "@/lib/reveals";
import { buildChatModel, defaultProvider, providerConfigured } from "@/lib/ai/llm";

// POST /api/courses/[id]/audit-reveals — instructor/admin. The SEMANTIC half of the assessment
// guardrail: for each `:::reveal` self-check in the course's published lessons, ask the AI whether
// the card's answer is actually supported by the lesson it sits in, and return the ones that look
// wrong. This is ADVISORY (a nudge on the instructor tools), never a build gate — an LLM judgment
// is non-deterministic and can false-positive, so it must never be able to block a commit. The
// deterministic structural checks live in scripts/check-reveals.ts, which DOES gate CI.

// Bounds so one click can't fan out into a huge, slow, expensive request.
const MAX_LESSONS = 12;
const MAX_REVEALS = 60;
const BODY_CHARS = 6000;

interface Flagged {
  lessonTitle: string;
  question: string;
  answer: string;
  note: string;
}

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ctx = await loadEditableCourse(id);
  if ("res" in ctx) return ctx.res;

  const provider = defaultProvider();
  if (!providerConfigured(provider)) return errorJson("No AI provider is configured", 503);

  const lessons = (await listLessons(id)).filter((l) => l.isPublished);
  const model = buildChatModel({ provider, temperature: 0, maxTokens: 1500 });

  const flagged: Flagged[] = [];
  let audited = 0;
  let lessonsSeen = 0;
  let truncated = false;

  for (const lesson of lessons) {
    const reveals = extractReveals(lesson.textContent);
    if (reveals.length === 0) continue;
    if (lessonsSeen >= MAX_LESSONS || audited >= MAX_REVEALS) {
      truncated = true;
      break;
    }
    lessonsSeen += 1;
    const slice = reveals.slice(0, MAX_REVEALS - audited);
    if (slice.length < reveals.length) truncated = true;
    audited += slice.length;

    const cards = slice.map((r, i) => ({ i, question: r.question, answer: r.answer }));
    const prompt = [
      "You audit self-check cards in an online lesson. Below is the lesson text, then a JSON array of",
      "cards. Each card has a question and the answer the lesson presents as correct. For each card,",
      "judge whether the ANSWER is factually accurate AND supported by the lesson text.",
      'Return ONLY a JSON array, one object per card, same order: [{"i":<index>,"ok":<true|false>,',
      '"note":"<short reason, only when ok is false, max 140 chars>"}]. No prose, no code fences.',
      "",
      `LESSON TEXT:\n${(lesson.textContent ?? "").slice(0, BODY_CHARS)}`,
      "",
      `CARDS:\n${JSON.stringify(cards)}`,
    ].join("\n");

    let verdicts: Array<{ i: number; ok: boolean; note?: string }> = [];
    try {
      const res = await model.invoke(prompt);
      const raw = typeof res.content === "string" ? res.content : JSON.stringify(res.content);
      const cleaned = raw.replace(/```json/gi, "").replace(/```/g, "").trim();
      const start = cleaned.indexOf("[");
      const end = cleaned.lastIndexOf("]");
      if (start >= 0 && end > start) verdicts = JSON.parse(cleaned.slice(start, end + 1));
    } catch {
      continue; // best-effort: an unparseable answer just skips this lesson
    }

    for (const v of verdicts) {
      if (v && v.ok === false && cards[v.i]) {
        flagged.push({
          lessonTitle: lesson.title,
          question: cards[v.i].question,
          answer: cards[v.i].answer,
          note: (v.note ?? "The lesson may not support this answer.").slice(0, 200),
        });
      }
    }
  }

  return json({ audited, flagged, truncated });
}
