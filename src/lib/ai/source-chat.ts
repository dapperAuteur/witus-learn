import "server-only";
import type { Course } from "@/db/schema";
import { retrieveChunks } from "@/db/queries/source-chunks";
import { embed } from "./embeddings";
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
}

export interface SourceChatCitation {
  n: number;
  kind: string;
  title: string | null;
  snippet: string;
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

export async function sourceChat(course: Course, question: string, opts: SourceChatOptions): Promise<SourceChatResult> {
  configureLangSmith();
  const topK = Math.min(Math.max(opts.topK ?? 6, 1), 12);
  const qv = await embed(question);
  const chunks = await retrieveChunks(course.tenantId, course.id, qv, topK);
  if (chunks.length === 0) {
    return {
      answer: "This course's sources haven't been indexed yet, so I can't answer from them. (Run `pnpm rag:index` for this course.)",
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

  return {
    answer,
    citations: chunks.map((c, i) => ({ n: i + 1, kind: c.kind, title: c.title, snippet: c.text.slice(0, 160).replace(/\s+/g, " ").trim() })),
    agents,
    usedChunks: chunks.length,
  };
}
