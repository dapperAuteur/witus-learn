import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * The course chat (2026-11-03): one tool for what were "Ask the course tutor" and "Chat with the sources".
 * The engine runs for real with retrieval, the embedder, the model and the lesson reads mocked (so the prompts
 * it sends and the query it embeds are captured); the route runs for real with its session, course lookup,
 * access inputs and database writes mocked.
 */

const mocks = vi.hoisted(() => ({
  // engine
  retrieveChunks: vi.fn(),
  cachedLessonSummaries: vi.fn(),
  embedded: [] as string[],
  prompts: [] as string[],
  condense: "What holds the whole system load?",
  failCondense: false,
  // route
  apiContext: vi.fn(),
  canEditCourse: vi.fn(),
  isEnrolled: vi.fn(),
  getSourceChatConfig: vi.fn(),
  openToOthers: true,
  setCourseChatOpenToOthers: vi.fn(),
  getActiveLearner: vi.fn(),
  isPlatformOwner: vi.fn(),
  insertSavedSourceChat: vi.fn(),
  deleteSavedSourceChatThread: vi.fn(),
  free: false,
}));

vi.mock("@/db/queries/source-chunks", () => ({ retrieveChunks: mocks.retrieveChunks }));
vi.mock("@/lib/rag/embed-batch", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/rag/embed-batch")>()),
  embedQuery: async (q: string) => {
    mocks.embedded.push(q);
    return [0.1, 0.2];
  },
}));
vi.mock("@/lib/ai/langsmith", () => ({ configureLangSmith: () => {} }));
type Msg = { role: string; content: string };
vi.mock("@/lib/ai/fallback", () => ({
  withFallback: () => ({
    invoke: async (messages: Msg[]) => {
      const text = messages.map((m) => m.content).join("\n");
      if (/standalone question/i.test(messages[0].content)) {
        if (mocks.failCondense) throw new Error("model down");
        return { content: mocks.condense };
      }
      mocks.prompts.push(text);
      return { content: "A note [1]." };
    },
    stream: async (messages: Msg[]) => {
      mocks.prompts.push(messages.map((m) => m.content).join("\n"));
      return (async function* () {
        yield { content: "Anchors hold " };
        yield { content: "the load [1]." };
      })();
    },
  }),
}));
vi.mock("@/lib/public-cache", () => ({ cachedLessonSummaries: mocks.cachedLessonSummaries }));
vi.mock("@/db/queries/authoring", () => ({ getUsername: async () => "bam" }));
vi.mock("@/db/client", () => {
  const chain = { select: () => chain, from: () => chain, where: async () => [] };
  return { db: chain };
});

vi.mock("@/lib/api", () => ({
  apiContext: mocks.apiContext,
  canEditCourse: mocks.canEditCourse,
  json: (data: unknown, status = 200) => Response.json(data, { status }),
  errorJson: (error: string, status: number) => Response.json({ error }, { status }),
}));
vi.mock("@/db/queries/enrollment", () => ({ isEnrolled: mocks.isEnrolled }));
vi.mock("@/lib/gating", () => ({ isFreeCourse: () => mocks.free }));
vi.mock("@/db/queries/source-chat-config", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/db/queries/source-chat-config")>()),
  getSourceChatConfig: mocks.getSourceChatConfig,
  courseChatOpenToOthers: async () => mocks.openToOthers,
  setCourseChatOpenToOthers: mocks.setCourseChatOpenToOthers,
}));
vi.mock("@/lib/active-learner", () => ({ getActiveLearner: mocks.getActiveLearner }));
vi.mock("@/lib/session", () => ({ isPlatformOwner: mocks.isPlatformOwner }));
vi.mock("@/db/queries/source-chat-history", () => ({
  insertSavedSourceChat: mocks.insertSavedSourceChat,
  deleteAllSavedSourceChats: vi.fn(),
  deleteSavedSourceChatThread: mocks.deleteSavedSourceChatThread,
}));
vi.mock("@/lib/env", () => ({ hasAiProvider: true }));

import {
  conversationBlock,
  courseChat,
  fallbackRetrievalQuery,
  trimHistory,
  MAX_HISTORY_TURNS,
} from "@/lib/ai/course-chat";
import { courseChatAllowed } from "@/lib/source-chat-access";
import { groupSavedThreads } from "@/lib/source-chat-history";
import { POST as chat } from "@/app/api/courses/[id]/chat/route";
import { POST as oldSourceChat } from "@/app/api/courses/[id]/source-chat/route";
import { POST as oldTutor } from "@/app/api/courses/[id]/tutor/route";
import { POST as oldEvaluate } from "@/app/api/courses/[id]/tutor/evaluate/route";
import { DELETE as deleteAll } from "@/app/api/admin/source-chat-history/route";
import { GET as getOpen, POST as setOpen } from "@/app/api/admin/source-chat/open-to-others/route";
import { DEFAULT_SOURCE_CHAT_CONFIG, sanitizeConfig } from "@/db/queries/source-chat-config";
import type { Course } from "@/db/schema";

const COURSE_ID = "11111111-1111-4111-8111-111111111111";
const CONVO = "33333333-3333-4333-8333-333333333333";
const COURSE = { id: COURSE_ID, tenantId: "t1", slug: "rope", instructorId: "u1", title: "Rope", isPublished: true } as unknown as Course;
const DRAFT_TEXT = "UNPUBLISHED-DRAFT-PASSAGE about the anchor test nobody may read yet.";
const row = (kind: string, title: string | null, text: string, ord = 0) => ({
  id: `${title}-${ord}`,
  tenantId: "t1",
  courseId: COURSE_ID,
  sourceId: null,
  kind,
  title,
  text,
  ord,
  createdAt: new Date(),
  distance: 0.1,
});

let course: Course = COURSE;
let brandFlags: Record<string, unknown> = {};

function signIn(userId: string | null) {
  mocks.apiContext.mockResolvedValue({
    sdb: { tenantId: "t1", tenant: { flags: brandFlags }, getCourseById: async (id: string) => (id === COURSE_ID ? course : null) },
    session: userId ? { user: { id: userId } } : null,
  });
}

const post = (handler: typeof chat, body: unknown, qs = "") =>
  handler(new Request(`http://learn.test/api/courses/${COURSE_ID}/chat${qs}`, { method: "POST", body: JSON.stringify(body) }), {
    params: Promise.resolve({ id: COURSE_ID }),
  });

async function events(res: Response): Promise<Record<string, unknown>[]> {
  return (await res.text())
    .split("\n")
    .filter(Boolean)
    .map((l) => JSON.parse(l) as Record<string, unknown>);
}

beforeEach(() => {
  vi.clearAllMocks();
  mocks.prompts.length = 0;
  mocks.embedded.length = 0;
  mocks.failCondense = false;
  mocks.free = false;
  // Most tests below exercise the per-course stages, which only apply once the owner's platform-wide switch is
  // on; the "owner only by default" block turns it off.
  mocks.openToOthers = true;
  course = COURSE;
  brandFlags = {};
  mocks.cachedLessonSummaries.mockResolvedValue([
    { id: "pub", title: "Anchors", slug: "anchors", isPublished: true },
    { id: "draft", title: "Secret Draft", slug: "secret-draft", isPublished: false },
  ]);
  mocks.retrieveChunks.mockResolvedValue([
    row("lesson", "Secret Draft", DRAFT_TEXT),
    row("lesson", "Anchors", "An anchor must hold the whole system load before use."),
    row("citation", "Smith, J. (2020). Rope.", "Smith, J. (2020). Rope."),
  ]);
  mocks.getSourceChatConfig.mockResolvedValue({
    stage: "paid",
    agents: ["explain"],
    routing: "all",
    provider: "",
    temperature: 0.2,
    topK: 6,
    grounding: "strict",
  });
  mocks.getActiveLearner.mockImplementation(async (s: { user: { id: string } }) => ({ id: s.user.id }));
  mocks.isEnrolled.mockResolvedValue(true);
  mocks.insertSavedSourceChat.mockImplementation(async (r: { turn: number }) => `saved-${r.turn}`);
  mocks.isPlatformOwner.mockImplementation(async (id: string) => id === "owner");
  mocks.canEditCourse.mockImplementation(async (s: { user: { id: string } }) => s.user.id === "owner" || s.user.id === "instructor");
});

describe("conversation helpers (pure)", () => {
  it("keeps the last turns that have a question, trimmed", () => {
    const many = Array.from({ length: 9 }, (_, i) => ({ question: `q${i}`, answer: `a${i}` }));
    const kept = trimHistory([...many, { question: "  ", answer: "dropped" }]);
    expect(kept).toHaveLength(MAX_HISTORY_TURNS);
    expect(kept[0].question).toBe("q3");
    expect(trimHistory([{ question: "x".repeat(5000), answer: "y".repeat(9000) }])[0].question).toHaveLength(1000);
  });

  it("marks the conversation as context, never a source, and is empty for a first question", () => {
    expect(conversationBlock([])).toBe("");
    const block = conversationBlock([{ question: "What is an anchor?", answer: "A fixed point [1]." }]);
    expect(block).toMatch(/NOT a source/);
    expect(block).toContain("Student: What is an anchor?");
  });

  it("falls back to the previous question plus this one", () => {
    expect(fallbackRetrievalQuery("and the second?", [{ question: "Name two knots", answer: "" }])).toBe("Name two knots\nand the second?");
    expect(fallbackRetrievalQuery("first", [])).toBe("first");
  });
});

describe("follow-ups use the prior turns", () => {
  const history = [{ question: "What is an anchor?", answer: "A fixed point that holds the load [1]." }];

  it("a first question is embedded as is, with no rewrite and no conversation in the prompt", async () => {
    await courseChat(COURSE, "What is an anchor?", { agents: ["explain"], viewer: { isEditor: false } });
    expect(mocks.embedded).toEqual(["What is an anchor?"]);
    expect(mocks.prompts.join("\n")).not.toContain("CONVERSATION SO FAR");
  });

  it("a follow-up retrieves with the standalone rewrite and carries the conversation into the prompt", async () => {
    const res = await courseChat(COURSE, "How much load?", { agents: ["explain"], viewer: { isEditor: false }, history });
    expect(mocks.embedded).toEqual([mocks.condense]);
    const prompt = mocks.prompts.join("\n");
    expect(prompt).toContain("Student: What is an anchor?");
    expect(prompt).toContain("QUESTION: How much load?");
    expect(res.answer).toBe("Anchors hold the load [1].");
  });

  it("falls back to previous question + follow-up when the rewrite fails", async () => {
    mocks.failCondense = true;
    await courseChat(COURSE, "How much load?", { agents: ["explain"], viewer: { isEditor: false }, history });
    expect(mocks.embedded).toEqual(["What is an anchor?\nHow much load?"]);
  });

  it("applies the reader filter on every turn, follow-ups included", async () => {
    for (const h of [[], history, [...history, { question: "How much load?", answer: "All of it [1]." }]]) {
      mocks.prompts.length = 0;
      const res = await courseChat(COURSE, "Tell me more", { agents: ["explain", "examples"], viewer: { isEditor: false }, history: h });
      expect(mocks.prompts.join("\n")).not.toContain(DRAFT_TEXT);
      expect(res.citations.map((c) => c.title)).not.toContain("Secret Draft");
    }
    // an editor still gets the draft
    mocks.prompts.length = 0;
    await courseChat(COURSE, "Tell me more", { agents: ["explain"], viewer: { isEditor: true }, history });
    expect(mocks.prompts.join("\n")).toContain(DRAFT_TEXT);
  });

  it("numbers the citations and links them to where they can be read", async () => {
    const res = await courseChat(COURSE, "How much load?", { agents: ["explain"], viewer: { isEditor: false }, history });
    expect(res.citations.map((c) => c.n)).toEqual([1, 2]);
    expect(res.citations[0]).toMatchObject({ kind: "lesson", title: "Anchors", external: false });
    expect(res.citations[0].href).toMatch(/\/bam\/rope\/lesson\/anchors#:~:text=/);
  });

  it("several lenses are combined by a synthesizer that keeps the citations", async () => {
    const res = await courseChat(COURSE, "What holds the load?", { agents: ["explain", "coach"], viewer: { isEditor: false } });
    expect(res.agents).toEqual(["explain", "coach"]);
    expect(mocks.prompts.at(-1)).toMatch(/SPECIALIST NOTES/);
    expect(mocks.prompts.at(-1)).toMatch(/Keep the \[number\] citations/);
  });
});

describe("access: owner only until the platform switch is on, then by the course's stage", () => {
  it("is the pure rule", () => {
    const base = { isOwner: false, isEditor: false, isEnrolled: true, free: false, openToOthers: true };
    // the owner always, switch off or on, any stage, brand AI off
    for (const stage of ["owner", "invited", "paid"] as const) {
      expect(courseChatAllowed({ ...base, isOwner: true, stage, openToOthers: false, brandAiOn: false })).toBe(true);
    }
    // switch off: nobody else, editors included
    expect(courseChatAllowed({ ...base, stage: "paid", openToOthers: false })).toBe(false);
    expect(courseChatAllowed({ ...base, isEditor: true, stage: "invited", openToOthers: false })).toBe(false);
    // switch on: the stage decides
    expect(courseChatAllowed({ ...base, stage: "owner" })).toBe(false);
    expect(courseChatAllowed({ ...base, isEditor: true, stage: "owner" })).toBe(false);
    expect(courseChatAllowed({ ...base, stage: "invited" })).toBe(true);
    expect(courseChatAllowed({ ...base, stage: "paid" })).toBe(true);
    expect(courseChatAllowed({ ...base, free: true, stage: "paid" })).toBe(false);
    expect(courseChatAllowed({ ...base, isEnrolled: false, stage: "invited" })).toBe(false);
    expect(courseChatAllowed({ ...base, stage: "paid", brandAiOn: false })).toBe(false);
    expect(courseChatAllowed({ ...base, isEditor: true, isEnrolled: false, stage: "paid", brandAiOn: false })).toBe(true);
  });

  it("a course with nothing saved is the owner's only", () => {
    expect(DEFAULT_SOURCE_CHAT_CONFIG.stage).toBe("owner");
    expect(sanitizeConfig({}).stage).toBe("owner");
    expect(sanitizeConfig({ stage: "everyone" }).stage).toBe("owner");
    expect(sanitizeConfig({ stage: "paid" }).stage).toBe("paid");
  });

  it("no saved config: only the owner gets 200, even with the switch on", async () => {
    mocks.getSourceChatConfig.mockResolvedValue({ ...DEFAULT_SOURCE_CHAT_CONFIG });
    for (const open of [false, true]) {
      mocks.openToOthers = open;
      signIn("owner");
      expect((await post(chat, { question: "Hi" }, "?format=json")).status).toBe(200);
      for (const who of ["learner", "instructor"]) {
        signIn(who);
        expect((await post(chat, { question: "Hi" }, "?format=json")).status).toBe(403);
      }
    }
  });

  it("switch off: only the owner, whatever the course's stage says", async () => {
    mocks.openToOthers = false;
    for (const stage of ["invited", "paid"]) {
      mocks.getSourceChatConfig.mockResolvedValue({ ...DEFAULT_SOURCE_CHAT_CONFIG, stage });
      for (const who of ["learner", "instructor"]) {
        signIn(who);
        expect((await post(chat, { question: "Hi" }, "?format=json")).status).toBe(403);
      }
      signIn("owner");
      expect((await post(chat, { question: "Hi" }, "?format=json")).status).toBe(200);
    }
    // the owner may still test an unpublished course
    course = { ...COURSE, isPublished: false } as Course;
    expect((await post(chat, { question: "Hi" }, "?format=json")).status).toBe(200);
  });

  it("switch on: an explicit stage is honored, with the brand switch and publish state", async () => {
    signIn(null);
    expect((await post(chat, { question: "Hi" })).status).toBe(401);

    signIn("learner");
    expect((await post(chat, { question: "Hi" })).status).toBe(200); // stage "paid", enrolled, paid course
    mocks.getSourceChatConfig.mockResolvedValueOnce({ ...(await mocks.getSourceChatConfig()), stage: "owner" });
    expect((await post(chat, { question: "Hi" })).status).toBe(403);

    mocks.free = true; // stage "paid" on a free course
    expect((await post(chat, { question: "Hi" })).status).toBe(403);
    mocks.getSourceChatConfig.mockResolvedValueOnce({ ...(await mocks.getSourceChatConfig()), stage: "invited" });
    expect((await post(chat, { question: "Hi" })).status).toBe(200);
    mocks.free = false;

    brandFlags = { aiTutor: false };
    signIn("learner");
    expect((await post(chat, { question: "Hi" })).status).toBe(403);
    signIn("instructor");
    expect((await post(chat, { question: "Hi" })).status).toBe(200);
    brandFlags = {};

    course = { ...COURSE, isPublished: false } as Course;
    signIn("learner");
    expect((await post(chat, { question: "Hi" })).status).toBe(404);
    signIn("instructor");
    expect((await post(chat, { question: "Hi" })).status).toBe(200);
  });

  it("the platform switch is the owner's alone", async () => {
    const req = (on: unknown) =>
      new Request("http://learn.test/api/admin/source-chat/open-to-others", { method: "POST", body: JSON.stringify({ on }) });
    signIn(null);
    expect((await setOpen(req(true))).status).toBe(401);
    for (const who of ["learner", "instructor"]) {
      signIn(who);
      expect((await setOpen(req(true))).status).toBe(403);
      expect((await getOpen()).status).toBe(403);
    }
    expect(mocks.setCourseChatOpenToOthers).not.toHaveBeenCalled();
    signIn("owner");
    expect((await setOpen(req("yes"))).status).toBe(400);
    expect((await setOpen(req(true))).status).toBe(200);
    expect(mocks.setCourseChatOpenToOthers).toHaveBeenCalledWith(true);
    mocks.openToOthers = false;
    expect(await (await getOpen()).json()).toEqual({ on: false });
  });

  it("ignores a learner's config override and honors an editor's", async () => {
    signIn("learner");
    await post(chat, { question: "Hi", config: { grounding: "mixed" } }, "?format=json");
    expect(mocks.prompts.join("\n")).toMatch(/Answer ONLY from the SOURCES/);
    mocks.prompts.length = 0;
    signIn("instructor");
    await post(chat, { question: "Hi", config: { grounding: "mixed" } }, "?format=json");
    expect(mocks.prompts.join("\n")).toMatch(/Prefer the SOURCES/);
  });
});

describe("saving: the owner's every turn, nobody else's", () => {
  it("streams meta, tokens and done, and saves each owner turn with its conversation id and place", async () => {
    signIn("owner");
    const first = await events(await post(chat, { question: "What is an anchor?", conversationId: CONVO }));
    expect(first[0]).toMatchObject({ type: "meta", conversationId: CONVO });
    // The owner edits the course, so the draft is in too; every lesson citation links to its lesson.
    const cites = first[0].citations as { title: string; href: string | null }[];
    expect(cites.find((c) => c.title === "Anchors")?.href).toMatch(/lesson\/anchors/);
    expect(first.filter((e) => e.type === "token").map((e) => e.text).join("")).toBe("Anchors hold the load [1].");
    expect(first.at(-1)).toEqual({ type: "done", conversationId: CONVO, savedId: "saved-0" });

    const second = await events(
      await post(chat, {
        question: "How much load?",
        conversationId: CONVO,
        turn: 1,
        history: [{ question: "What is an anchor?", answer: "Anchors hold the load [1]." }],
      }),
    );
    expect(second.at(-1)).toMatchObject({ savedId: "saved-1" });
    expect(mocks.insertSavedSourceChat).toHaveBeenCalledTimes(2);
    expect(mocks.insertSavedSourceChat.mock.calls.map((c) => [c[0].conversationId, c[0].turn, c[0].question])).toEqual([
      [CONVO, 0, "What is an anchor?"],
      [CONVO, 1, "How much load?"],
    ]);
    expect(mocks.insertSavedSourceChat.mock.calls[1][0]).toMatchObject({ userId: "owner", answer: "Anchors hold the load [1]." });
  });

  it("saves nothing for a learner or an instructor, who still get the whole answer", async () => {
    for (const who of ["learner", "instructor"]) {
      signIn(who);
      const evs = await events(await post(chat, { question: "What is an anchor?", conversationId: CONVO }));
      expect(evs.at(-1)).toEqual({ type: "done", conversationId: CONVO, savedId: null });
    }
    expect(mocks.insertSavedSourceChat).not.toHaveBeenCalled();
  });

  it("gives a conversation id when the client sent none", async () => {
    signIn("learner");
    const res = await post(chat, { question: "Hi" }, "?format=json");
    expect((await res.json()).conversationId).toMatch(/^[0-9a-f-]{36}$/);
  });

  it("deletes a whole saved thread for the owner only", async () => {
    signIn("owner");
    mocks.deleteSavedSourceChatThread.mockResolvedValueOnce(3).mockResolvedValueOnce(0);
    const del = (qs: string) => deleteAll(new Request(`http://learn.test/api/admin/source-chat-history${qs}`, { method: "DELETE" }));
    expect(await (await del(`?conversationId=${CONVO}`)).json()).toEqual({ deleted: 3 });
    expect(mocks.deleteSavedSourceChatThread).toHaveBeenCalledWith("owner", CONVO);
    expect((await del(`?conversationId=${CONVO}`)).status).toBe(404);
    expect((await del("?conversationId=nope")).status).toBe(400);
    signIn("learner");
    expect((await del(`?conversationId=${CONVO}`)).status).toBe(403);
  });

  it("groups saved rows into threads in turn order, newest thread first", () => {
    const rows = [
      { id: "b1", conversationId: "B", turn: 1, createdAt: "2026-11-03T10:05:00Z" },
      { id: "old", conversationId: null, turn: 0, createdAt: "2026-11-02T09:00:00Z" },
      { id: "a0", conversationId: "A", turn: 0, createdAt: "2026-11-03T09:00:00Z" },
      { id: "b0", conversationId: "B", turn: 0, createdAt: "2026-11-03T10:00:00Z" },
    ];
    const threads = groupSavedThreads(rows);
    expect(threads.map((t) => t.key)).toEqual(["B", "A", "old"]);
    expect(threads[0].turns.map((t) => t.id)).toEqual(["b0", "b1"]);
    expect(threads[0].latestAt).toBe("2026-11-03T10:05:00Z");
  });
});

describe("the old routes still work, forwarded to the course chat", () => {
  it("/source-chat answers one JSON reply in its old shape, marked deprecated", async () => {
    signIn("learner");
    const res = await post(oldSourceChat, { question: "What holds the load?" });
    expect(res.status).toBe(200);
    expect(res.headers.get("deprecation")).toBe("true");
    expect(res.headers.get("link")).toBe(`</api/courses/${COURSE_ID}/chat>; rel="successor-version"`);
    const body = await res.json();
    expect(body).toMatchObject({ answer: "Anchors hold the load [1].", agents: ["explain"], usedChunks: 2, savedId: null });
    expect(body.citations[0].href).toMatch(/lesson\/anchors/);
  });

  it("/tutor streams NDJSON whose meta still has usedLessons and lenses", async () => {
    signIn("learner");
    const res = await post(oldTutor, { question: "What holds the load?" });
    expect(res.headers.get("content-type")).toMatch(/ndjson/);
    expect(res.headers.get("deprecation")).toBe("true");
    const evs = await events(res);
    expect(evs[0]).toMatchObject({ type: "meta", usedLessons: ["Anchors"], lenses: ["explain"] });
    expect(evs.at(-1)?.type).toBe("done");
  });

  it("/tutor/evaluate runs the sentence coach on the same index, reader filter included", async () => {
    signIn("learner");
    const evs = await events(await post(oldEvaluate, { sentence: "Yo soy un ancla." }));
    expect(evs[0]).toMatchObject({ type: "meta", usedLessons: ["Anchors"] });
    expect(mocks.prompts.join("\n")).toMatch(/STUDENT SENTENCE: Yo soy un ancla\./);
    expect(mocks.prompts.join("\n")).not.toContain(DRAFT_TEXT);
    expect(mocks.insertSavedSourceChat).not.toHaveBeenCalled();
  });

  it("the new route takes the coach as mode evaluate", async () => {
    signIn("learner");
    const evs = await events(await post(chat, { mode: "evaluate", sentence: "Yo soy un ancla." }));
    expect(evs.filter((e) => e.type === "token").length).toBeGreaterThan(0);
    expect((await post(chat, { mode: "evaluate" })).status).toBe(400);
  });
});
