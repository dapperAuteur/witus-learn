import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { platformSettings } from "@/db/schema/tenancy";
import type { Lens } from "@/lib/ai/specialists";

// Owner-managed per-course config for the course chat (was "chat with the sources"), stored as one JSON value
// in the tenant-scoped platform_settings table under `source_chat:<courseId>` (no migration). Drives the
// access stage (owner → invited → paid), which agents run and how they are picked, provider, and grounding.
// A course with nothing saved gets DEFAULT_SOURCE_CHAT_CONFIG: stage "paid" since 2026-11-03, the audience the
// old course tutor had, so merging the two tools took the chat away from no enrolled paid learner.
export interface SourceChatConfig {
  /** owner = owner/instructor only · invited = + enrolled learners · paid = + enrolled on a paid course. */
  stage: "owner" | "invited" | "paid";
  agents: Lens[];
  /** all = every agent above runs; auto = a supervisor picks 1+ of them per question (the old tutor's routing). */
  routing: "all" | "auto";
  /** Provider id ("" = server default). The model follows the provider (DEFAULT_MODELS). */
  provider: string;
  temperature: number;
  topK: number;
  grounding: "strict" | "mixed";
}

export const DEFAULT_SOURCE_CHAT_CONFIG: SourceChatConfig = {
  stage: "paid",
  agents: ["explain", "examples"],
  routing: "all",
  provider: "",
  temperature: 0.2,
  topK: 6,
  grounding: "strict",
};

const VALID_LENSES = new Set<Lens>(["explain", "examples", "coach"]);
const keyFor = (courseId: string) => `source_chat:${courseId}`;

export function sanitizeConfig(input: unknown): SourceChatConfig {
  const o = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  const stage = ["owner", "invited", "paid"].includes(o.stage as string) ? (o.stage as SourceChatConfig["stage"]) : DEFAULT_SOURCE_CHAT_CONFIG.stage;
  const routing = o.routing === "auto" ? "auto" : "all";
  const agents = Array.isArray(o.agents) ? (o.agents.filter((a) => VALID_LENSES.has(a as Lens)) as Lens[]) : [];
  const grounding = o.grounding === "mixed" ? "mixed" : "strict";
  const temperature = Math.min(Math.max(Number(o.temperature ?? 0.2) || 0.2, 0), 1);
  const topK = Math.min(Math.max(Math.round(Number(o.topK ?? 6) || 6), 1), 12);
  const provider = typeof o.provider === "string" ? o.provider.slice(0, 40) : "";
  return { stage, agents: agents.length ? agents : DEFAULT_SOURCE_CHAT_CONFIG.agents, routing, provider, temperature, topK, grounding };
}

export async function getSourceChatConfig(tenantId: string, courseId: string): Promise<SourceChatConfig> {
  const rows = await db
    .select({ value: platformSettings.value })
    .from(platformSettings)
    .where(and(eq(platformSettings.tenantId, tenantId), eq(platformSettings.key, keyFor(courseId))))
    .limit(1);
  const raw = rows[0]?.value;
  if (!raw) return { ...DEFAULT_SOURCE_CHAT_CONFIG };
  try {
    return sanitizeConfig(JSON.parse(raw));
  } catch {
    return { ...DEFAULT_SOURCE_CHAT_CONFIG };
  }
}

export async function setSourceChatConfig(tenantId: string, courseId: string, config: unknown): Promise<SourceChatConfig> {
  const clean = sanitizeConfig(config);
  const value = JSON.stringify(clean);
  await db
    .insert(platformSettings)
    .values({ tenantId, key: keyFor(courseId), value })
    .onConflictDoUpdate({ target: [platformSettings.tenantId, platformSettings.key], set: { value, updatedAt: new Date() } });
  return clean;
}
