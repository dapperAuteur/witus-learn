import "server-only";
import { and, desc, eq, isNull } from "drizzle-orm";
import { db } from "@/db/client";
import { platformSettings } from "@/db/schema/tenancy";
import type { Lens } from "@/lib/ai/specialists";

// Owner-managed per-course config for the course chat (was "chat with the sources"), stored as one JSON value
// in the tenant-scoped platform_settings table under `source_chat:<courseId>` (no migration). Drives the
// access stage (owner → invited → paid), which agents run and how they are picked, provider, and grounding.
// A course with nothing saved gets DEFAULT_SOURCE_CHAT_CONFIG: stage "owner" since 2026-11-04 (BAM: "chat should
// only be available for me until I turn it on for other users"; it was "paid" for one day after the merge of the
// tutor and source chat). Above every stage sits the platform-wide switch below: while it is off (the default),
// only the platform owner gets the chat anywhere. The rule itself is src/lib/source-chat-access.ts.
export interface SourceChatConfig {
  /** owner = platform owner only · invited = + editors + enrolled learners · paid = + editors + enrolled on a paid course. */
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
  stage: "owner",
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

// ── The platform-wide switch: "Course chat for everyone else" ─────────────────────────────────────────────────
//
// One row in platform_settings with a NULL tenant (the teacher-age rule's pattern, src/db/queries/teacher-age.ts;
// no migration). OFF unless the row says "on", so a missing row, a failed write or a fresh database all mean
// owner-only. The (tenant_id, key) unique constraint does not cover NULLs, so reads take the newest row and
// writes replace every row for the key.
export const COURSE_CHAT_OPEN_KEY = "course_chat:open_to_others";

export async function courseChatOpenToOthers(): Promise<boolean> {
  const [row] = await db
    .select({ value: platformSettings.value })
    .from(platformSettings)
    .where(and(isNull(platformSettings.tenantId), eq(platformSettings.key, COURSE_CHAT_OPEN_KEY)))
    .orderBy(desc(platformSettings.updatedAt))
    .limit(1);
  return row?.value === "on";
}

export async function setCourseChatOpenToOthers(on: boolean): Promise<void> {
  await db.transaction(async (tx) => {
    await tx
      .delete(platformSettings)
      .where(and(isNull(platformSettings.tenantId), eq(platformSettings.key, COURSE_CHAT_OPEN_KEY)));
    await tx.insert(platformSettings).values({ tenantId: null, key: COURSE_CHAT_OPEN_KEY, value: on ? "on" : "off" });
  });
}
