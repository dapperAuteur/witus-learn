import "server-only";
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

// "Chat with the sources" — a per-course, retrieval-grounded, multi-agent answer. Reuses the tutor's
// specialist LENSES + multi-provider fallback, but grounds on the course's `source_chunks` (retrieved
// top-k) instead of raw lesson material, and defaults to STRICT grounding (answer only from sources).
// Tenant/course-scoped retrieval (isolation invariant). Citations are the retrieved chunks by [number].

export interface SourceChatOptions {
  agents: Lens[];
  provider?: string;
  temperature?: number;
  topK?: number;
  grounding?: "strict" | "mixed";
  /** Who is asking, so a citation only links to lessons this viewer may open. Default: a learner. */
  viewer?: { isEditor: boolean };
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
    tags: [`tenant:${course.tenantId}`, `course:${course.id}`, "source-chat"],
    metadata: { tenantId: course.tenantId, courseId: course.id },
  };
}

function resolveProvider(p?: string): AiProvider | undefined {
  return p && VALID_PROVIDERS.has(p as AiProvider) ? (p as AiProvider) : undefined;
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
    console.error("source-chat: could not check lesson publish state; answering from bibliography only", err);
    return retrieved.filter((c) => c.kind !== "lesson").slice(0, topK);
  }
}

export async function sourceChat(course: Course, question: string, opts: SourceChatOptions): Promise<SourceChatResult> {
  configureLangSmith();
  const topK = Math.min(Math.max(opts.topK ?? 6, 1), 12);
  const isEditor = opts.viewer?.isEditor ?? false;
  const qv = await embedQuery(question);
  const fetchK = isEditor ? topK : Math.min(topK * READER_OVERFETCH, READER_MAX_FETCH);
  const retrieved = await retrieveChunks(course.tenantId, course.id, qv, fetchK);
  const chunks = isEditor ? retrieved : await chunksForReader(course, retrieved, topK);
  if (retrieved.length > 0 && chunks.length === 0) {
    // Everything retrieved came from lessons this reader cannot see yet: say so without asking a model.
    return { answer: "That isn't covered in this course's sources.", citations: [], agents: [], usedChunks: 0 };
  }
  if (chunks.length === 0) {
    return {
      answer: "This course's sources haven't been indexed yet, so I can't answer from them. (An admin indexes it from Admin, Source chat index, or with `pnpm rag:index`.)",
      citations: [],
      agents: [],
      usedChunks: 0,
    };
  }

  const context = chunks
    .map((c, i) => `[${i + 1}] (${c.kind}${c.title ? `, ${c.title}` : ""})\n${c.text}`)
    .join("\n\n");
  const strict = (opts.grounding ?? "strict") === "strict";
  const groundingRule = strict
    ? "Answer ONLY from the SOURCES below. If the answer is not in them, say exactly: \"That isn't covered in this course's sources.\" Never use outside knowledge. Cite the sources you use by their [number]."
    : "Prefer the SOURCES below. You may add clearly-labeled general knowledge ONLY when the sources are insufficient, and say when you do. Cite sources by [number].";

  const agents = (opts.agents?.length ? opts.agents : ["explain"]).filter((a): a is Lens => a in LENSES);
  const provider = resolveProvider(opts.provider);
  const model = withFallback((m) => m, { temperature: opts.temperature ?? 0.2, maxTokens: 700, provider });

  // Links are resolved while the model works; a failure here costs the links, never the answer.
  const linksPromise = loadCitationLinkContext(course, chunks, { isEditor })
    .then((ctx) => chunks.map((c) => resolveCitationLink(c, ctx)))
    .catch((err: unknown) => {
      console.error("source-chat: citation links failed", err);
      return chunks.map(() => null);
    });

  const findings = await Promise.all(
    agents.map(async (lens) => {
      const res = await model.invoke(
        [
          { role: "system", content: `${groundingRule}\n\nYour lens: ${LENSES[lens].instruction}` },
          { role: "user", content: `SOURCES:\n${context}\n\nQUESTION: ${question}` },
        ],
        runConfig(course, `source-chat:${lens}`),
      );
      return { lens, text: asText(res.content) };
    }),
  );

  let answer: string;
  if (findings.length <= 1) {
    answer = findings[0]?.text ?? "";
  } else {
    const notes = findings.map((f) => `### ${LENSES[f.lens].label}\n${f.text}`).join("\n\n");
    const res = await model.invoke(
      [
        { role: "system", content: `${groundingRule}\n\nSynthesize the specialist notes below into ONE grounded, cited answer for the student. Keep the [number] citations.` },
        { role: "user", content: `QUESTION: ${question}\n\nSPECIALIST NOTES:\n${notes}` },
      ],
      runConfig(course, "source-chat:synthesize"),
    );
    answer = asText(res.content);
  }

  const links = await linksPromise;
  return {
    answer,
    citations: chunks.map((c, i) => ({
      n: i + 1,
      kind: c.kind,
      title: c.title,
      snippet: c.text.slice(0, 160).replace(/\s+/g, " ").trim(),
      href: links[i]?.href ?? null,
      external: links[i]?.external ?? false,
    })),
    agents,
    usedChunks: chunks.length,
  };
}
