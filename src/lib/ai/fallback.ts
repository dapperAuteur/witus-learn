import "server-only";
import type { BaseChatModel } from "@langchain/core/language_models/chat_models";
import type { Runnable } from "@langchain/core/runnables";
import { env } from "@/lib/env";
import { buildChatModel, defaultProvider, providerConfigured, type ModelOptions } from "./llm";
import { VALID_PROVIDERS, type AiProvider } from "./llm-config";

// Parse COACH_FALLBACK_PROVIDERS, dropping unknown/unconfigured providers so a
// stale env value never prevents the primary call from running.
function parseFallback(raw: string | undefined, primary: AiProvider): AiProvider[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((p) => p.trim().toLowerCase())
    .filter((p): p is AiProvider => VALID_PROVIDERS.has(p as AiProvider))
    .filter((p) => p !== primary && providerConfigured(p));
}

/**
 * Build a runnable with the primary provider, wrapped in a fallback chain when
 * COACH_FALLBACK_PROVIDERS is set. `build` is applied per-provider BEFORE the
 * fallbacks compose (so structured-output etc. survives — the centenarian gotcha).
 */
export function withFallback<R extends Runnable>(
  build: (model: BaseChatModel) => R,
  opts: ModelOptions = {},
): R {
  const primary = build(buildChatModel(opts));
  const chain = parseFallback(env.COACH_FALLBACK_PROVIDERS, opts.provider ?? defaultProvider());
  if (chain.length === 0) return primary;
  const fallbacks = chain.map((provider) => build(buildChatModel({ ...opts, provider })));
  return primary.withFallbacks(fallbacks) as unknown as R;
}
