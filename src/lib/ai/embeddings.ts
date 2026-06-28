import "server-only";
import { env, hasGemini } from "@/lib/env";

// Direct Gemini embeddings (no LangChain dependency yet). 768-dim matches the
// lesson_embeddings vector(768) column. When we adopt the multi-provider AI layer
// (plans/future/03), this is the single function to swap.
const GEMINI_MODEL = "gemini-embedding-001";
export const EMBEDDING_DIMS = 768;

export async function embed(text: string): Promise<number[]> {
  if (!hasGemini) throw new Error("GOOGLE_GEMINI_API_KEY is not set");

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:embedContent`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": env.GOOGLE_GEMINI_API_KEY as string,
      },
      body: JSON.stringify({
        model: `models/${GEMINI_MODEL}`,
        content: { parts: [{ text: text.slice(0, 8000) }] },
        outputDimensionality: EMBEDDING_DIMS,
      }),
    },
  );
  if (!res.ok) {
    throw new Error(`Gemini embed failed: ${res.status} ${await res.text().catch(() => "")}`);
  }
  const data = (await res.json()) as { embedding?: { values?: number[] } };
  const values = data.embedding?.values;
  if (!Array.isArray(values) || values.length !== EMBEDDING_DIMS) {
    throw new Error(`Unexpected embedding dimension: ${values?.length}`);
  }
  return values;
}

/** pgvector text literal for a vector, e.g. [0.1,0.2,...]. */
export function vectorLiteral(v: number[]): string {
  return `[${v.join(",")}]`;
}
