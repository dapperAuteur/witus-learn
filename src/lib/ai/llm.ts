import "server-only";
import { ChatAnthropic } from "@langchain/anthropic";
import type { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatOllama } from "@langchain/ollama";
import { ChatOpenAI } from "@langchain/openai";
import { env } from "@/lib/env";
import { DEFAULT_MODELS, OPENAI_COMPATIBLE_BASE_URLS, VALID_PROVIDERS, type AiProvider } from "./llm-config";

function requireKey(value: string | undefined, name: string): string {
  if (!value) throw new Error(`${name} is not set (required for the active AI provider).`);
  return value;
}

/** Whether a provider has the credentials it needs. */
export function providerConfigured(p: AiProvider): boolean {
  switch (p) {
    case "google":
      return Boolean(env.GOOGLE_GEMINI_API_KEY);
    case "anthropic":
      return Boolean(env.ANTHROPIC_API_KEY);
    case "cerebras":
      return Boolean(env.CEREBRAS_API_KEY);
    case "openrouter":
      return Boolean(env.OPENROUTER_API_KEY);
    case "mistral":
      return Boolean(env.MISTRAL_API_KEY);
    case "together":
      return Boolean(env.TOGETHER_API_KEY);
    case "ollama":
      return Boolean(env.OLLAMA_BASE_URL);
  }
}

/** The primary provider: AI_PROVIDER if set + configured, else first configured. */
export function defaultProvider(): AiProvider {
  const pref = (env.AI_PROVIDER ?? "").toLowerCase() as AiProvider;
  if (VALID_PROVIDERS.has(pref) && providerConfigured(pref)) return pref;
  const order: AiProvider[] = ["google", "anthropic", "cerebras", "openrouter", "together", "mistral", "ollama"];
  return order.find(providerConfigured) ?? "google";
}

export interface ModelOptions {
  provider?: AiProvider;
  temperature?: number;
  maxTokens?: number;
}

/** Build a LangChain chat model for the given (or default) provider. */
export function buildChatModel(opts: ModelOptions = {}): BaseChatModel {
  const provider = opts.provider ?? defaultProvider();
  const model = DEFAULT_MODELS[provider];
  const temperature = opts.temperature ?? 0.2;
  const maxTokens = opts.maxTokens ?? 1024;

  switch (provider) {
    case "anthropic":
      return new ChatAnthropic({
        apiKey: requireKey(env.ANTHROPIC_API_KEY, "ANTHROPIC_API_KEY"),
        model,
        temperature,
        maxTokens,
        maxRetries: 2,
      });
    case "google":
      return new ChatGoogleGenerativeAI({
        apiKey: requireKey(env.GOOGLE_GEMINI_API_KEY, "GOOGLE_GEMINI_API_KEY"),
        model,
        temperature,
        maxOutputTokens: maxTokens,
        maxRetries: 2,
      });
    case "mistral":
      return new ChatMistralAI({
        apiKey: requireKey(env.MISTRAL_API_KEY, "MISTRAL_API_KEY"),
        model,
        temperature,
        maxTokens,
        maxRetries: 2,
      });
    case "ollama":
      return new ChatOllama({
        model,
        temperature,
        numPredict: maxTokens,
        baseUrl: env.OLLAMA_BASE_URL ?? "http://localhost:11434",
      });
    case "cerebras":
    case "openrouter":
    case "together": {
      const key =
        provider === "cerebras"
          ? env.CEREBRAS_API_KEY
          : provider === "openrouter"
            ? env.OPENROUTER_API_KEY
            : env.TOGETHER_API_KEY;
      const keyName =
        provider === "cerebras"
          ? "CEREBRAS_API_KEY"
          : provider === "openrouter"
            ? "OPENROUTER_API_KEY"
            : "TOGETHER_API_KEY";
      return new ChatOpenAI({
        apiKey: requireKey(key, keyName),
        model,
        temperature,
        maxTokens,
        maxRetries: 2,
        configuration: { baseURL: OPENAI_COMPATIBLE_BASE_URLS[provider] },
      });
    }
  }
}
