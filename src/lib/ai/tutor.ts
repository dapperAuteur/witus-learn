import "server-only";
import { z } from "zod";
import { and, eq, inArray } from "drizzle-orm";
import type { Course } from "@/db/schema";
import { db } from "@/db/client";
import { lessons } from "@/db/schema";
import { listGlossary, listSources } from "@/db/queries/pedagogy";
import { matchLessons } from "@/db/queries/cyoa";
import { embed } from "./embeddings";
import { withFallback } from "./fallback";
import { configureLangSmith } from "./langsmith";
import { LENSES, type Lens } from "./specialists";
import { VALID_PROVIDERS, type AiProvider } from "./llm-config";

const NO_EXCLUDE = "00000000-0000-0000-0000-000000000000";

export interface TutorResult {
  answer: string;
  usedLessons: string[];
  lenses: Lens[];
}

/** Per-call tutor options (per-tenant provider override). */
export interface TutorOptions {
  provider?: string;
}

function resolveProvider(p?: string): AiProvider | undefined {
  return p && VALID_PROVIDERS.has(p as AiProvider) ? (p as AiProvider) : undefined;
}

/** LangSmith run config — tags runs by tenant + course for filtering in the dashboard. */
function runConfig(course: Course, name: string) {
  return {
    runName: name,
    tags: [`tenant:${course.tenantId}`, `course:${course.id}`],
    metadata: { tenantId: course.tenantId, courseId: course.id },
  };
}

function asText(content: unknown): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content
      .map((p) =>
        typeof p === "string"
          ? p
          : p && typeof p === "object" && "text" in p
            ? String((p as { text: unknown }).text)
            : "",
      )
      .join("");
  }
  return String(content ?? "");
}

/**
 * Retrieve the course's OWN material. COURSE-scoped (matchLessons filters by
 * course_id) — the isolation guarantee: the tutor can only ground on / cite this
 * course, never another course or tenant.
 */
async function retrieveCourseMaterial(
  course: Course,
  question: string,
): Promise<{ material: string; titles: string[] }> {
  let matchIds: string[] = [];
  let titles: string[] = [];
  try {
    const qv = await embed(question);
    const matches = await matchLessons(course.id, qv, NO_EXCLUDE, 4);
    matchIds = matches.map((m) => m.id);
    titles = matches.map((m) => m.title);
  } catch {
    // no embeddings / no Gemini — fall through to first lessons
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

  return {
    material:
      [lessonBlock, glossaryBlock, sourceBlock].filter(Boolean).join("\n\n") || "(no lessons yet)",
    titles,
  };
}

const RouteSchema = z.object({
  lenses: z.array(z.enum(["explain", "examples", "coach"])).min(1),
});

/** SUPERVISOR — choose the useful teaching lenses (safe default on failure). */
async function routeLenses(course: Course, question: string, provider?: AiProvider): Promise<Lens[]> {
  try {
    const supervisor = withFallback(
      (m) => m.withStructuredOutput(RouteSchema, { name: "route" }),
      { temperature: 0, provider },
    );
    const decision = await supervisor.invoke(
      [
        {
          role: "system",
          content:
            `Route a student's question for the course "${course.title}" to the most useful teaching ` +
            `lenses. explain = clarify the concept; examples = concrete examples; coach = a short ` +
            `practice challenge. Pick 1 to 3.`,
        },
        { role: "user", content: question },
      ],
      runConfig(course, "tutor:supervisor"),
    );
    if (Array.isArray(decision.lenses) && decision.lenses.length > 0) return decision.lenses as Lens[];
  } catch {
    // fall through
  }
  return ["explain", "examples"];
}

/** SPECIALISTS — fan out, each grounded only on the course material. */
async function runSpecialists(
  course: Course,
  question: string,
  material: string,
  lenses: Lens[],
  provider?: AiProvider,
): Promise<{ lens: Lens; text: string }[]> {
  const grounding =
    `You are a specialist tutor for the course "${course.title}". Answer ONLY from the COURSE ` +
    `MATERIAL below. Never invent facts, names, or sources. Be concise.`;
  return Promise.all(
    lenses.map(async (lens) => {
      const model = withFallback((m) => m, { temperature: 0.2, maxTokens: 700, provider });
      const res = await model.invoke(
        [
          { role: "system", content: `${grounding}\n\nYour lens: ${LENSES[lens].instruction}` },
          { role: "user", content: `COURSE MATERIAL:\n${material}\n\nQUESTION: ${question}` },
        ],
        runConfig(course, `tutor:${lens}`),
      );
      return { lens, text: asText(res.content) };
    }),
  );
}

function synthMessages(
  course: Course,
  question: string,
  findings: { lens: Lens; text: string }[],
  titles: string[],
) {
  const system =
    `You are the AI tutor for "${course.title}". Combine the specialist notes into ONE warm, clear ` +
    `answer for the student. Use ONLY what the notes and material support; never invent. Cite the ` +
    `lesson titles you used. If there is a practice challenge, end with it. Do not use em-dashes.`;
  const notes = findings.map((f) => `### ${LENSES[f.lens].label}\n${f.text}`).join("\n\n");
  return [
    { role: "system" as const, content: system },
    {
      role: "user" as const,
      content: `QUESTION: ${question}\n\nSPECIALIST NOTES:\n${notes}\n\nLESSONS AVAILABLE: ${titles.join(", ")}`,
    },
  ];
}

/** Non-streaming multi-agent answer. */
export async function askTutor(
  course: Course,
  question: string,
  opts: TutorOptions = {},
): Promise<TutorResult> {
  configureLangSmith();
  const provider = resolveProvider(opts.provider);
  const { material, titles } = await retrieveCourseMaterial(course, question);
  const lenses = await routeLenses(course, question, provider);
  const findings = await runSpecialists(course, question, material, lenses, provider);
  const synth = withFallback((m) => m, { temperature: 0.3, maxTokens: 1024, provider });
  const res = await synth.invoke(
    synthMessages(course, question, findings, titles),
    runConfig(course, "tutor:synthesize"),
  );
  return { answer: asText(res.content), usedLessons: titles, lenses };
}

/** Streaming variant: emits NDJSON — a meta event, then synthesizer token events. */
export async function streamTutor(
  course: Course,
  question: string,
  opts: TutorOptions = {},
): Promise<ReadableStream<Uint8Array>> {
  configureLangSmith();
  const provider = resolveProvider(opts.provider);
  const { material, titles } = await retrieveCourseMaterial(course, question);
  const lenses = await routeLenses(course, question, provider);
  const findings = await runSpecialists(course, question, material, lenses, provider);
  const synth = withFallback((m) => m, { temperature: 0.3, maxTokens: 1024, provider });
  const messages = synthMessages(course, question, findings, titles);
  const encoder = new TextEncoder();

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (obj: unknown) => controller.enqueue(encoder.encode(`${JSON.stringify(obj)}\n`));
      send({ type: "meta", usedLessons: titles, lenses });
      try {
        const stream = await synth.stream(messages, runConfig(course, "tutor:synthesize"));
        for await (const chunk of stream) {
          const t = asText((chunk as { content?: unknown }).content);
          if (t) send({ type: "token", text: t });
        }
      } catch {
        send({ type: "error", message: "The tutor could not finish the answer." });
      }
      send({ type: "done" });
      controller.close();
    },
  });
}
