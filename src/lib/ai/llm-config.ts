// Pure provider config (no server imports) — safe to import anywhere.
export type AiProvider =
  | "google"
  | "anthropic"
  | "cerebras"
  | "openrouter"
  | "mistral"
  | "together"
  | "ollama";

export const VALID_PROVIDERS = new Set<AiProvider>([
  "google",
  "anthropic",
  "cerebras",
  "openrouter",
  "mistral",
  "together",
  "ollama",
]);

// OpenAI-compatible providers reached through ChatOpenAI with a custom baseURL.
export const OPENAI_COMPATIBLE_BASE_URLS: Record<
  "cerebras" | "openrouter" | "together",
  string
> = {
  cerebras: "https://api.cerebras.ai/v1",
  openrouter: "https://openrouter.ai/api/v1",
  together: "https://api.together.xyz/v1",
};

// A sensible default model per provider for the tutor (cheap/fast tier).
export const DEFAULT_MODELS: Record<AiProvider, string> = {
  google: "gemini-2.5-flash",
  anthropic: "claude-haiku-4-5-20251001",
  cerebras: "llama-3.3-70b",
  openrouter: "deepseek/deepseek-chat:free",
  mistral: "mistral-small-latest",
  together: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
  ollama: "llama3.1:8b",
};
