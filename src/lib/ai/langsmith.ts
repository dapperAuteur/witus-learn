import "server-only";
import { env } from "@/lib/env";

// Env-driven LangSmith tracing. When LANGSMITH_API_KEY is set and
// LANGSMITH_TRACING is "true", LangChain auto-traces tutor runs. Fail-soft: with
// no key, tracing is simply off and the tutor runs normally.
let configured = false;

export function configureLangSmith(): boolean {
  const on =
    Boolean(env.LANGSMITH_API_KEY) && (env.LANGSMITH_TRACING ?? "").toLowerCase() === "true";
  if (on && !configured) {
    process.env.LANGCHAIN_TRACING_V2 = "true";
    process.env.LANGSMITH_TRACING = "true";
    process.env.LANGSMITH_API_KEY = env.LANGSMITH_API_KEY as string;
    process.env.LANGCHAIN_API_KEY = env.LANGSMITH_API_KEY as string;
    if (!process.env.LANGSMITH_PROJECT) {
      process.env.LANGSMITH_PROJECT = env.LANGSMITH_PROJECT ?? "Learn.WitUS";
    }
    configured = true;
  }
  return on;
}
