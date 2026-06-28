import "server-only";
import { and, eq, inArray } from "drizzle-orm";
import type { Course } from "@/db/schema";
import { db } from "@/db/client";
import { lessons } from "@/db/schema";
import { listGlossary, listSources } from "@/db/queries/pedagogy";
import { matchLessons } from "@/db/queries/cyoa";
import { embed } from "./embeddings";
import { withFallback } from "./fallback";

const NO_EXCLUDE = "00000000-0000-0000-0000-000000000000";

export interface TutorResult {
  answer: string;
  usedLessons: string[];
}

/**
 * Grounded course tutor. Retrieval is COURSE-scoped (matchLessons filters by
 * course_id) — so it can only ever cite this course's own material; it never
 * reaches another course or tenant. Answers strictly from that material.
 */
export async function askTutor(course: Course, question: string): Promise<TutorResult> {
  // Retrieve the most relevant lessons via embeddings (course-scoped); fall back
  // to the first lessons if embeddings haven't been generated.
  let matchIds: string[] = [];
  let titles: string[] = [];
  try {
    const qv = await embed(question);
    const matches = await matchLessons(course.id, qv, NO_EXCLUDE, 4);
    matchIds = matches.map((m) => m.id);
    titles = matches.map((m) => m.title);
  } catch {
    // no embeddings / no Gemini — handled below
  }

  const lessonRows =
    matchIds.length > 0
      ? await db
          .select({ title: lessons.title, textContent: lessons.textContent })
          .from(lessons)
          .where(and(eq(lessons.courseId, course.id), inArray(lessons.id, matchIds)))
      : await db
          .select({ title: lessons.title, textContent: lessons.textContent })
          .from(lessons)
          .where(and(eq(lessons.courseId, course.id), eq(lessons.isPublished, true)))
          .limit(4);
  if (titles.length === 0) titles = lessonRows.map((l) => l.title);

  const [glossary, sources] = await Promise.all([listGlossary(course.id), listSources(course.id)]);

  const lessonBlock = lessonRows
    .map((l) => `## ${l.title}\n${(l.textContent ?? "").slice(0, 1500)}`)
    .join("\n\n");
  const glossaryBlock = glossary.length
    ? "### Glossary\n" + glossary.slice(0, 40).map((g) => `- ${g.term}: ${g.definition}`).join("\n")
    : "";
  const sourceBlock = sources.length
    ? "### Sources\n" + sources.slice(0, 20).map((s) => `- ${s.apa ?? s.inText ?? s.url}`).join("\n")
    : "";
  const material = [lessonBlock, glossaryBlock, sourceBlock].filter(Boolean).join("\n\n");

  const system =
    `You are the AI tutor for the course "${course.title}". Answer the student's question ` +
    `using ONLY the COURSE MATERIAL below. If the material does not cover it, say you do not ` +
    `have that in this course and point them to what to review. Never invent facts, names, or ` +
    `sources. Cite the lesson titles you used. Be concise, clear, and encouraging. Do not use ` +
    `em-dashes.`;

  const model = withFallback((m) => m, { temperature: 0.2, maxTokens: 1024 });
  const res = await model.invoke([
    { role: "system", content: system },
    {
      role: "user",
      content: `COURSE MATERIAL:\n${material || "(no lessons yet)"}\n\nQUESTION: ${question}`,
    },
  ]);
  const answer = typeof res.content === "string" ? res.content : JSON.stringify(res.content);
  return { answer, usedLessons: titles };
}
