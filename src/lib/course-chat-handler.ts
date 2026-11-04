import "server-only";
import { z } from "zod";
import { apiContext, canEditCourse, errorJson, json } from "@/lib/api";
import { isEnrolled } from "@/db/queries/enrollment";
import { isFreeCourse } from "@/lib/gating";
import { getSourceChatConfig } from "@/db/queries/source-chat-config";
import {
  collectCourseChat,
  courseChatEvents,
  sentenceEvaluationEvents,
  type CourseChatEvent,
  type SourceChatCitation,
} from "@/lib/ai/course-chat";
import type { Lens } from "@/lib/ai/specialists";
import { getActiveLearner } from "@/lib/active-learner";
import { isPlatformOwner } from "@/lib/session";
import { insertSavedSourceChat } from "@/db/queries/source-chat-history";
import { saveIfOwner } from "@/lib/source-chat-history";
import { courseChatAllowed } from "@/lib/source-chat-access";
import { hasAiProvider } from "@/lib/env";

// The course chat's one request handler (2026-11-03), behind POST /api/courses/[id]/chat and the three routes
// it replaced, which forward here so an old caller keeps working:
//   /source-chat     → one JSON reply in the old shape (legacy "source-chat");
//   /tutor           → NDJSON whose meta also carries the old `lenses` (legacy "tutor");
//   /tutor/evaluate  → the sentence coach (legacy "evaluate").
//
// Order of checks: signed in (401) → AI configured (503) → course exists and is published, or the asker edits
// it (404) → access (403: editors always; others need the brand's AI switch and the course's stage) → input
// (400). Saving is the platform owner's only and never blocks or fails the answer (saveIfOwner).

export type LegacyRoute = "source-chat" | "tutor" | "evaluate";

const Turn = z.object({ question: z.string().max(4000), answer: z.string().max(20000) });
const Config = z
  .object({
    agents: z.array(z.enum(["explain", "examples", "coach"])).optional(),
    routing: z.enum(["all", "auto"]).optional(),
    provider: z.string().max(40).optional(),
    temperature: z.number().min(0).max(1).optional(),
    topK: z.number().int().min(1).max(12).optional(),
    grounding: z.enum(["strict", "mixed"]).optional(),
  })
  .optional();

export const ChatBody = z.discriminatedUnion("mode", [
  z.object({
    mode: z.literal("ask"),
    question: z.string().trim().min(1).max(2000),
    /** Earlier turns, oldest first; only the last few reach the model (trimHistory). */
    history: z.array(Turn).max(50).optional(),
    /** Ties the turns of one conversation together for the owner's saved threads. */
    conversationId: z.string().uuid().optional(),
    /** This turn's 0-based place in the conversation (defaults to the number of earlier turns sent). */
    turn: z.number().int().min(0).max(1000).optional(),
    /** Owner/instructor test override from /admin/source-chat (ignored for learners). */
    config: Config,
  }),
  z.object({ mode: z.literal("evaluate"), sentence: z.string().trim().min(2).max(600) }),
]);
export type ChatBodyInput = z.infer<typeof ChatBody>;

/** PURE: read a raw body, old shapes included ({ question } for chat, { sentence } for the coach). */
export function parseChatBody(raw: unknown, legacy?: LegacyRoute): z.ZodSafeParseResult<ChatBodyInput> {
  const o = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const mode = legacy === "evaluate" ? "evaluate" : legacy ? "ask" : (o.mode ?? "ask");
  return ChatBody.safeParse({ ...o, mode });
}

/** Headers that tell an old caller where the route went (RFC 9745 Deprecation, RFC 8288 Link). */
function legacyHeaders(courseId: string, legacy?: LegacyRoute): Record<string, string> {
  if (!legacy) return {};
  return { deprecation: "true", link: `</api/courses/${courseId}/chat>; rel="successor-version"` };
}

export async function handleCourseChat(req: Request, courseId: string, legacy?: LegacyRoute): Promise<Response> {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!hasAiProvider) return errorJson("The course chat is not configured", 503);

  const course = await sdb.getCourseById(courseId);
  if (!course) return errorJson("Not found", 404);
  const isEditor = await canEditCourse(session, sdb.tenantId, course);
  // Editors can test on their own unpublished course; nobody else learns it exists.
  if (!course.isPublished && !isEditor) return errorJson("Not found", 404);

  const config = await getSourceChatConfig(sdb.tenantId, courseId);
  let allowed = isEditor;
  if (!allowed) {
    // Enrollment is per learner (see /api/courses/[id]/enroll), so check the ACTIVE learner (self, or a
    // managed child while "studying as"), not the signed-in account directly.
    const learner = (await getActiveLearner(session))!;
    allowed = courseChatAllowed({
      isEditor: false,
      isEnrolled: await isEnrolled(learner.id, courseId),
      free: isFreeCourse(course),
      stage: config.stage,
      brandAiOn: sdb.tenant.flags.aiTutor !== false,
    });
  }
  if (!allowed) return errorJson("The course chat isn't available for you on this course yet.", 403);

  const parsed = parseChatBody(await req.json().catch(() => null), legacy);
  if (!parsed.success) return errorJson("Invalid input", 400);
  const body = parsed.data;
  const url = new URL(req.url);
  const wantJson = legacy === "source-chat" || url.searchParams.get("format") === "json";
  const headers = legacyHeaders(courseId, legacy);

  // Editors can test unsaved params; learners always get the saved config. The brand's provider applies when
  // the course names none.
  const eff = body.mode === "ask" && isEditor && body.config ? { ...config, ...body.config } : config;
  const provider = eff.provider || sdb.tenant.flags.aiProvider || undefined;
  const viewer = { isEditor };

  if (body.mode === "evaluate") {
    const events = sentenceEvaluationEvents(course, body.sentence, { provider, topK: eff.topK, viewer });
    return ndjson(events, { headers, onDone: async () => ({}) });
  }

  const history = body.history ?? [];
  const conversationId = body.conversationId ?? crypto.randomUUID();
  const events = courseChatEvents(course, body.question, {
    agents: eff.agents as Lens[],
    routing: eff.routing,
    provider,
    temperature: eff.temperature,
    topK: eff.topK,
    grounding: eff.grounding,
    viewer,
    history,
  });

  // Saved for the platform owner only (BAM, 2026-11-02), one row per turn; nobody else's questions are stored.
  const save = (r: { answer: string; citations: SourceChatCitation[]; agents: Lens[]; usedChunks: number }) =>
    saveIfOwner({
      isOwner: () => isPlatformOwner(session.user.id),
      save: () =>
        insertSavedSourceChat({
          tenantId: course.tenantId,
          courseId: course.id,
          userId: session.user.id,
          question: body.question,
          answer: r.answer,
          citations: r.citations,
          agents: r.agents,
          grounding: eff.grounding ?? null,
          provider: provider ?? null,
          temperature: eff.temperature ?? null,
          topK: eff.topK ?? null,
          usedChunks: r.usedChunks,
          conversationId,
          turn: body.turn ?? Math.min(history.length, 1000),
        }),
    });

  if (wantJson) {
    let result;
    try {
      result = await collectCourseChat(events);
    } catch (err) {
      console.error("course-chat: the turn failed", err);
      return errorJson("The course chat could not answer right now.", 502);
    }
    if (result.error && !result.answer) return errorJson(result.error, 502);
    const savedId = await save(result);
    return withHeaders(
      json({ answer: result.answer, citations: result.citations, agents: result.agents, usedChunks: result.usedChunks, savedId, conversationId }),
      headers,
    );
  }

  return ndjson(events, {
    headers,
    conversationId,
    legacyTutor: legacy === "tutor",
    onDone: async (r) => (r.answer && !r.error ? { savedId: await save(r) } : { savedId: null }),
  });
}

function withHeaders(res: Response, headers: Record<string, string>): Response {
  for (const [k, v] of Object.entries(headers)) res.headers.set(k, v);
  return res;
}

interface Collected {
  answer: string;
  citations: SourceChatCitation[];
  agents: Lens[];
  usedChunks: number;
  error: string | null;
}

/**
 * Stream a turn as NDJSON: `meta` (conversationId, citations, agents, usedChunks, usedLessons), `token`s, an
 * optional `error`, then `done` (with the saved row's id for the owner). A failure before the first token
 * becomes an `error` event, so the client always gets a `done`.
 */
function ndjson(
  events: AsyncIterable<CourseChatEvent>,
  opts: {
    headers: Record<string, string>;
    conversationId?: string;
    legacyTutor?: boolean;
    onDone: (r: Collected) => Promise<Record<string, unknown>>;
  },
): Response {
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (obj: unknown) => controller.enqueue(encoder.encode(`${JSON.stringify(obj)}\n`));
      const r: Collected = { answer: "", citations: [], agents: [], usedChunks: 0, error: null };
      try {
        for await (const ev of events) {
          if (ev.type === "meta") {
            r.citations = ev.citations;
            r.agents = ev.agents;
            r.usedChunks = ev.usedChunks;
            send({
              ...ev,
              ...(opts.conversationId ? { conversationId: opts.conversationId } : {}),
              ...(opts.legacyTutor ? { lenses: ev.agents } : {}),
            });
          } else {
            if (ev.type === "token") r.answer += ev.text;
            else r.error = ev.message;
            send(ev);
          }
        }
      } catch (err) {
        console.error("course-chat: the turn failed", err);
        r.error = "The course chat could not answer right now.";
        send({ type: "error", message: r.error });
      }
      let extra: Record<string, unknown> = {};
      try {
        extra = await opts.onDone(r);
      } catch {
        // saveIfOwner never throws; this is belt and braces so `done` always goes out.
      }
      send({ type: "done", ...(opts.conversationId ? { conversationId: opts.conversationId } : {}), ...extra });
      controller.close();
    },
  });
  return new Response(stream, {
    headers: { "content-type": "application/x-ndjson; charset=utf-8", "cache-control": "no-store", ...opts.headers },
  });
}
