import "server-only";
import { z } from "zod";
import type { Course } from "@/db/schema";
import { retrieveChunks } from "@/db/queries/source-chunks";
// The RAG index is mistral-embed since migration 0076, so the question MUST be embedded with the same
// model; src/lib/ai/embeddings.ts (Gemini) stays CYOA's lesson_embeddings embedder and is not used here.
import { embedQuery } from "@/lib/rag/embed-batch";
import { loadCitationLinkContext, loadReaderChunkContext } from "@/db/queries/source-chat-links";
import { readerMayUseChunk, resolveCitationLink } from "@/lib/source-chat-links";
import type { RetrievedChunk } from "@/db/queries/source-chunks";
import { withFallback } from "./fallback";
import { configureLangSmith } from "./langsmith";
import { LENSES, type Lens } from "./specialists";
import { VALID_PROVIDERS, type AiProvider } from "./llm-config";

// The course chat: ONE tool, since 2026-11-03, for what were two ("Ask the course tutor" and "Chat with the
// sources", which BAM found gave the same answer to the same prompt). Per course, retrieval-grounded,
// multi-agent, multi-turn:
//   - every turn retrieves from the course's `source_chunks` (tenant- and course-scoped, the isolation
//     invariant) and, for a reader who cannot edit the course, drops every chunk not provably from a
//     published lesson BEFORE the prompt and the citations are built (chunksForReader);
//   - a follow-up is rewritten into a standalone question for retrieval, and the conversation so far is in
//     the prompt as context, never as a source;
//   - the configured lenses run (or a supervisor picks among them per question, `routing: "auto"`), and the
//     answer is streamed, citing the retrieved chunks by [number]; each citation links to where it can be
//     read (src/lib/source-chat-links.ts);
//   - `streamSentenceEvaluation` is the language courses' sentence coach on the same index.
// Saving (platform owner only) and access live in the route (src/lib/course-chat-handler.ts).

export interface ChatTurn {
  question: string;
  answer: string;
}

export interface CourseChatOptions {
  agents: Lens[];
  /** "all" runs every configured lens; "auto" lets a supervisor pick 1+ of them per question. Default "all". */
  routing?: "all" | "auto";
  provider?: string;
  temperature?: number;
  topK?: number;
  grounding?: "strict" | "mixed";
  /** Who is asking, so a reader is never answered from, or linked to, an unpublished lesson. Default: a reader. */
  viewer?: { isEditor: boolean };
  /** The earlier turns of this conversation, oldest first (trimmed with trimHistory). */
  history?: readonly ChatTurn[];
}

export interface SourceChatCitation {
  n: number;
  kind: string;
  title: string | null;
  snippet: string;
  /** Where to read it in full (src/lib/source-chat-links.ts), or null when there is nowhere sure. */
  href: string | null;
  /** True when href is another site (open in a new tab). */
  external: boolean;
}

export interface SourceChatResult {
  answer: string;
  citations: SourceChatCitation[];
  agents: Lens[];
  usedChunks: number;
}

/** The events a turn produces, in order: one meta, then tokens (an error may replace the rest). */
export type CourseChatEvent =
  | { type: "meta"; citations: SourceChatCitation[]; agents: Lens[]; usedChunks: number; usedLessons: string[] }
  | { type: "token"; text: string }
  | { type: "error"; message: string };

export const NOT_COVERED = "That isn't covered in this course's sources.";
export const NOT_INDEXED =
  "This course's sources haven't been indexed yet, so I can't answer from them. (The platform owner indexes it from Admin, Source chat index, or with `pnpm rag:index`.)";

/** How many earlier turns go back to the model, and how long each may be. */
export const MAX_HISTORY_TURNS = 6;
const MAX_HISTORY_QUESTION = 1000;
const MAX_HISTORY_ANSWER = 2500;

function asText(content: unknown): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content
      .map((p) => (typeof p === "string" ? p : p && typeof p === "object" && "text" in p ? String((p as { text: unknown }).text) : ""))
      .join("");
  }
  return String(content ?? "");
}

function runConfig(course: Course, name: string) {
  return {
    runName: name,
    tags: [`tenant:${course.tenantId}`, `course:${course.id}`, "course-chat"],
    metadata: { tenantId: course.tenantId, courseId: course.id },
  };
}

function resolveProvider(p?: string): AiProvider | undefined {
  return p && VALID_PROVIDERS.has(p as AiProvider) ? (p as AiProvider) : undefined;
}

/** PURE: the last MAX_HISTORY_TURNS turns with a question, each cut to a sane length. */
export function trimHistory(history: readonly ChatTurn[] | undefined): ChatTurn[] {
  return (history ?? [])
    .filter((t) => t && typeof t.question === "string" && t.question.trim())
    .slice(-MAX_HISTORY_TURNS)
    .map((t) => ({
      question: t.question.trim().slice(0, MAX_HISTORY_QUESTION),
      answer: (t.answer ?? "").trim().slice(0, MAX_HISTORY_ANSWER),
    }));
}

/** PURE: the conversation so far as prompt text, or "" for a first question. */
export function conversationBlock(history: readonly ChatTurn[]): string {
  if (history.length === 0) return "";
  const lines = history.map((t) => `Student: ${t.question}\nCourse chat: ${t.answer || "(no answer)"}`).join("\n\n");
  return `CONVERSATION SO FAR (context for what the student means; it is NOT a source and must not be cited):\n${lines}\n\n`;
}

/** PURE: the retrieval query when the standalone rewrite fails: the previous question plus this one. */
export function fallbackRetrievalQuery(question: string, history: readonly ChatTurn[]): string {
  const last = history[history.length - 1];
  return last ? `${last.question}\n${question}` : question;
}

/**
 * A follow-up ("what about the second one?") retrieves nothing useful on its own, so it is rewritten into a
 * standalone question first. A first question is returned as is, with no model call. Never throws.
 */
export async function standaloneQuestion(
  course: Course,
  question: string,
  history: readonly ChatTurn[],
  provider?: AiProvider,
): Promise<string> {
  if (history.length === 0) return question;
  try {
    const model = withFallback((m) => m, { temperature: 0, maxTokens: 200, provider });
    const res = await model.invoke(
      [
        {
          role: "system",
          content:
            "Rewrite the student's latest message as ONE standalone question that can be understood without the " +
            "conversation, keeping every name and term it refers to. Reply with the question only.",
        },
        { role: "user", content: `${conversationBlock(history)}LATEST MESSAGE: ${question}` },
      ],
      runConfig(course, "course-chat:condense"),
    );
    const text = asText(res.content).trim();
    return text ? text.slice(0, 2000) : fallbackRetrievalQuery(question, history);
  } catch {
    return fallbackRetrievalQuery(question, history);
  }
}

// A reader who cannot edit the course must never be answered from an unpublished lesson: the indexer
// embeds drafts too, so their chunks are dropped right after retrieval, before the prompt and the
// citations are built (readerMayUseChunk). To keep top-k meaningful, readers' retrieval over-fetches
// and the kept chunks are trimmed back to top-k.
const READER_OVERFETCH = 3;
const READER_MAX_FETCH = 36;

/** The chunks a non-editor may be answered from, at most topK. Fails closed: on an error, no lesson chunks. */
export async function chunksForReader<C extends Pick<RetrievedChunk, "kind" | "title" | "text">>(
  course: Pick<Course, "id">,
  retrieved: readonly C[],
  topK: number,
): Promise<C[]> {
  try {
    const ctx = await loadReaderChunkContext(course, retrieved);
    return retrieved.filter((c) => readerMayUseChunk(c, ctx)).slice(0, topK);
  } catch (err) {
    console.error("course-chat: could not check lesson publish state; answering from bibliography only", err);
    return retrieved.filter((c) => c.kind !== "lesson").slice(0, topK);
  }
}

type Retrieval =
  | { kind: "fixed"; answer: string }
  | {
      kind: "ready";
      chunks: RetrievedChunk[];
      context: string;
      citations: () => Promise<SourceChatCitation[]>;
    };

/** Retrieve (with the reader filter) and start resolving the citation links. Shared by chat and the coach. */
async function retrieve(course: Course, query: string, topKIn: number | undefined, isEditor: boolean): Promise<Retrieval> {
  const topK = Math.min(Math.max(topKIn ?? 6, 1), 12);
  const qv = await embedQuery(query);
  const fetchK = isEditor ? topK : Math.min(topK * READER_OVERFETCH, READER_MAX_FETCH);
  const retrieved = await retrieveChunks(course.tenantId, course.id, qv, fetchK);
  const chunks = isEditor ? retrieved : await chunksForReader(course, retrieved, topK);
  // Everything retrieved came from lessons this reader cannot see yet: say so without asking a model.
  if (retrieved.length > 0 && chunks.length === 0) return { kind: "fixed", answer: NOT_COVERED };
  if (chunks.length === 0) return { kind: "fixed", answer: NOT_INDEXED };

  const context = chunks.map((c, i) => `[${i + 1}] (${c.kind}${c.title ? `, ${c.title}` : ""})\n${c.text}`).join("\n\n");
  // Links are resolved while the model works; a failure here costs the links, never the answer.
  const linksPromise = loadCitationLinkContext(course, chunks, { isEditor })
    .then((ctx) => chunks.map((c) => resolveCitationLink(c, ctx)))
    .catch((err: unknown) => {
      console.error("course-chat: citation links failed", err);
      return chunks.map(() => null);
    });
  return {
    kind: "ready",
    chunks,
    context,
    citations: async () => {
      const links = await linksPromise;
      return chunks.map((c, i) => ({
        n: i + 1,
        kind: c.kind,
        title: c.title,
        snippet: c.text.slice(0, 160).replace(/\s+/g, " ").trim(),
        href: links[i]?.href ?? null,
        external: links[i]?.external ?? false,
      }));
    },
  };
}

/** PURE: the lesson titles among the citations, once each (the old tutor's "Based on" list). */
export function lessonTitles(citations: readonly SourceChatCitation[]): string[] {
  return [...new Set(citations.filter((c) => c.kind === "lesson" && c.title).map((c) => c.title as string))];
}

export function groundingRule(grounding: "strict" | "mixed" | undefined): string {
  return (grounding ?? "strict") === "strict"
    ? `Answer ONLY from the SOURCES below. If the answer is not in them, say exactly: "${NOT_COVERED}" Never use outside knowledge. Cite the sources you use by their [number].`
    : "Prefer the SOURCES below. You may add clearly-labeled general knowledge ONLY when the sources are insufficient, and say when you do. Cite sources by [number].";
}

const RouteSchema = z.object({ lenses: z.array(z.enum(["explain", "examples", "coach"])).min(1) });

/**
 * SUPERVISOR (from the old tutor): pick the useful lenses for this question, only among the ones the course
 * allows. Any failure, or a pick outside the allowed set, keeps every allowed lens.
 */
export async function routeLenses(course: Course, question: string, allowed: readonly Lens[], provider?: AiProvider): Promise<Lens[]> {
  if (allowed.length <= 1) return [...allowed];
  try {
    const supervisor = withFallback((m) => m.withStructuredOutput(RouteSchema, { name: "route" }), { temperature: 0, provider });
    const decision = await supervisor.invoke(
      [
        {
          role: "system",
          content:
            `Route a student's question for the course "${course.title}" to the most useful teaching lenses. ` +
            `Choose only from: ${allowed.join(", ")}. explain = clarify the concept; examples = concrete examples; ` +
            `coach = a short practice challenge. Pick 1 to ${allowed.length}.`,
        },
        { role: "user", content: question },
      ],
      runConfig(course, "course-chat:supervisor"),
    );
    const picked = (Array.isArray(decision.lenses) ? decision.lenses : []).filter((l): l is Lens => allowed.includes(l as Lens));
    if (picked.length > 0) return [...new Set(picked)];
  } catch {
    // fall through
  }
  return [...allowed];
}

async function* streamText(model: ReturnType<typeof chatModel>, messages: { role: "system" | "user"; content: string }[], config: ReturnType<typeof runConfig>): AsyncGenerator<string> {
  const stream = await model.stream(messages, config);
  for await (const chunk of stream) {
    const t = asText((chunk as { content?: unknown }).content);
    if (t) yield t;
  }
}

function chatModel(opts: { temperature?: number; provider?: AiProvider; maxTokens?: number }) {
  return withFallback((m) => m, { temperature: opts.temperature ?? 0.2, maxTokens: opts.maxTokens ?? 700, provider: opts.provider });
}

/** One turn of the course chat, as events: a meta (citations, lenses), then the answer's tokens. */
export async function* courseChatEvents(course: Course, question: string, opts: CourseChatOptions): AsyncGenerator<CourseChatEvent> {
  configureLangSmith();
  const isEditor = opts.viewer?.isEditor ?? false;
  const provider = resolveProvider(opts.provider);
  const history = trimHistory(opts.history);

  const query = await standaloneQuestion(course, question, history, provider);
  const r = await retrieve(course, query, opts.topK, isEditor);
  if (r.kind === "fixed") {
    yield { type: "meta", citations: [], agents: [], usedChunks: 0, usedLessons: [] };
    yield { type: "token", text: r.answer };
    return;
  }

  const allowed = (opts.agents?.length ? opts.agents : (["explain"] as Lens[])).filter((a): a is Lens => a in LENSES);
  const agents = opts.routing === "auto" ? await routeLenses(course, query, allowed, provider) : allowed;
  const rule = groundingRule(opts.grounding);
  const model = chatModel({ temperature: opts.temperature, provider });
  const convo = conversationBlock(history);
  const userTurn = `${convo}SOURCES:\n${r.context}\n\nQUESTION: ${question}`;
  const style = "Do not use em dashes.";

  let messages: { role: "system" | "user"; content: string }[];
  let runName: string;
  if (agents.length === 1) {
    messages = [
      { role: "system", content: `${rule}\n\nYour lens: ${LENSES[agents[0]].instruction}\n${style}` },
      { role: "user", content: userTurn },
    ];
    runName = `course-chat:${agents[0]}`;
  } else {
    const findings = await Promise.all(
      agents.map(async (lens) => {
        const res = await model.invoke(
          [
            { role: "system", content: `${rule}\n\nYour lens: ${LENSES[lens].instruction}` },
            { role: "user", content: userTurn },
          ],
          runConfig(course, `course-chat:${lens}`),
        );
        return { lens, text: asText(res.content) };
      }),
    );
    const notes = findings.map((f) => `### ${LENSES[f.lens].label}\n${f.text}`).join("\n\n");
    messages = [
      {
        role: "system",
        content:
          `${rule}\n\nYou are the course chat for "${course.title}". Combine the specialist notes below into ONE warm, ` +
          `clear, grounded answer for the student. Keep the [number] citations. If the notes include a practice ` +
          `challenge, end with it. ${style}`,
      },
      { role: "user", content: `${convo}QUESTION: ${question}\n\nSPECIALIST NOTES:\n${notes}` },
    ];
    runName = "course-chat:synthesize";
  }

  const citations = await r.citations();
  yield { type: "meta", citations, agents, usedChunks: r.chunks.length, usedLessons: lessonTitles(citations) };
  try {
    for await (const t of streamText(model, messages, runConfig(course, runName))) yield { type: "token", text: t };
  } catch (err) {
    console.error("course-chat: the answer stream failed", err);
    yield { type: "error", message: "The course chat could not finish the answer." };
  }
}

/**
 * The language courses' sentence coach (was the tutor's /evaluate): the learner submits a sentence and gets a
 * verdict, a correction and the rule, grounded on the same index with the same reader filter, then one next
 * practice prompt. Same events as a chat turn.
 */
export async function* sentenceEvaluationEvents(
  course: Course,
  sentence: string,
  opts: Pick<CourseChatOptions, "provider" | "topK" | "viewer">,
): AsyncGenerator<CourseChatEvent> {
  configureLangSmith();
  const r = await retrieve(course, sentence, opts.topK, opts.viewer?.isEditor ?? false);
  if (r.kind === "fixed") {
    yield { type: "meta", citations: [], agents: [], usedChunks: 0, usedLessons: [] };
    yield { type: "token", text: r.answer === NOT_COVERED ? "This course's sources don't cover that sentence yet." : r.answer };
    return;
  }
  const model = chatModel({ temperature: 0.2, provider: resolveProvider(opts.provider) });
  const system =
    `You are a warm, patient language coach for the course "${course.title}". A student wrote a sentence as ` +
    `practice. Evaluate it using ONLY the SOURCES below; never invent rules, vocabulary, or sources. Structure your reply:\n` +
    `1. A one-line verdict (correct / almost / needs work).\n` +
    `2. The corrected sentence in the target language (omit if already correct).\n` +
    `3. A short, friendly explanation of any grammar or word-order issue, citing the source that teaches the rule by its [number].\n` +
    `4. End with ONE short next practice prompt. Keep it encouraging. Do not use em dashes.`;
  const citations = await r.citations();
  yield { type: "meta", citations, agents: [], usedChunks: r.chunks.length, usedLessons: lessonTitles(citations) };
  try {
    const messages = [
      { role: "system" as const, content: system },
      { role: "user" as const, content: `SOURCES:\n${r.context}\n\nSTUDENT SENTENCE: ${sentence}` },
    ];
    for await (const t of streamText(model, messages, runConfig(course, "course-chat:evaluate"))) yield { type: "token", text: t };
  } catch (err) {
    console.error("course-chat: the coach stream failed", err);
    yield { type: "error", message: "The coach could not finish the feedback." };
  }
}

/** PURE-ish: drain a turn's events into one result (the JSON reply, and the saved row). */
export async function collectCourseChat(events: AsyncIterable<CourseChatEvent>): Promise<SourceChatResult & { error: string | null }> {
  let answer = "";
  let citations: SourceChatCitation[] = [];
  let agents: Lens[] = [];
  let usedChunks = 0;
  let error: string | null = null;
  for await (const ev of events) {
    if (ev.type === "meta") ({ citations, agents, usedChunks } = ev);
    else if (ev.type === "token") answer += ev.text;
    else error = ev.message;
  }
  return { answer, citations, agents, usedChunks, error };
}

/** One turn, non-streaming. */
export async function courseChat(course: Course, question: string, opts: CourseChatOptions): Promise<SourceChatResult> {
  const r = await collectCourseChat(courseChatEvents(course, question, opts));
  return { answer: r.answer, citations: r.citations, agents: r.agents, usedChunks: r.usedChunks };
}
