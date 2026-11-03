import { beforeEach, describe, expect, it, vi } from "vitest";
import { saveIfOwner } from "@/lib/source-chat-history";

/**
 * Saved course-chat turns (was "chat with the sources"), platform owner only (BAM, 2026-11-02). The pure rule
 * (saveIfOwner) runs for real everywhere below; the routes run for real with their session, course
 * lookup, model call and database writes mocked.
 */

const mocks = vi.hoisted(() => ({
  apiContext: vi.fn(),
  canEditCourse: vi.fn(),
  isEnrolled: vi.fn(),
  getSourceChatConfig: vi.fn(),
  sourceChat: vi.fn(),
  getActiveLearner: vi.fn(),
  isPlatformOwner: vi.fn(),
  insertSavedSourceChat: vi.fn(),
  deleteSavedSourceChat: vi.fn(),
  deleteAllSavedSourceChats: vi.fn(),
}));

vi.mock("@/lib/api", () => ({
  apiContext: mocks.apiContext,
  canEditCourse: mocks.canEditCourse,
  json: (data: unknown, status = 200) => Response.json(data, { status }),
  errorJson: (error: string, status: number) => Response.json({ error }, { status }),
}));
vi.mock("@/db/queries/enrollment", () => ({ isEnrolled: mocks.isEnrolled }));
vi.mock("@/lib/gating", () => ({ isFreeCourse: () => true }));
vi.mock("@/db/queries/source-chat-config", () => ({ getSourceChatConfig: mocks.getSourceChatConfig }));
// The engine's turn is mocked as events from mocks.sourceChat's answer; collectCourseChat stays real.
vi.mock("@/lib/ai/course-chat", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/ai/course-chat")>()),
  courseChatEvents: async function* () {
    const a = (await mocks.sourceChat()) as typeof ANSWER;
    yield { type: "meta", citations: a.citations, agents: a.agents, usedChunks: a.usedChunks, usedLessons: [] };
    yield { type: "token", text: a.answer };
  },
}));
vi.mock("@/lib/env", () => ({ hasAiProvider: true }));
vi.mock("@/lib/active-learner", () => ({ getActiveLearner: mocks.getActiveLearner }));
vi.mock("@/lib/session", () => ({ isPlatformOwner: mocks.isPlatformOwner }));
vi.mock("@/db/queries/source-chat-history", () => ({
  insertSavedSourceChat: mocks.insertSavedSourceChat,
  deleteSavedSourceChat: mocks.deleteSavedSourceChat,
  deleteAllSavedSourceChats: mocks.deleteAllSavedSourceChats,
}));

import { POST as ask } from "@/app/api/courses/[id]/source-chat/route";
import { DELETE as deleteOne } from "@/app/api/admin/source-chat-history/[id]/route";
import { DELETE as deleteAll } from "@/app/api/admin/source-chat-history/route";

const COURSE = { id: "11111111-1111-4111-8111-111111111111", tenantId: "t1", title: "Rope", isPublished: true };
const ROW_ID = "22222222-2222-4222-8222-222222222222";
const ANSWER = {
  answer: "Anchors hold the load [1].",
  citations: [{ n: 1, kind: "lesson", title: "Anchors", snippet: "An anchor…", href: "/bam/rope/lesson/anchors", external: false }],
  agents: ["explain"],
  usedChunks: 1,
};

function signIn(userId: string | null) {
  mocks.apiContext.mockResolvedValue({
    sdb: { tenantId: "t1", tenant: { flags: {} }, getCourseById: async (id: string) => (id === COURSE.id ? COURSE : null) },
    session: userId ? { user: { id: userId } } : null,
  });
}

const askAs = () =>
  ask(new Request("http://learn.test/api", { method: "POST", body: JSON.stringify({ question: "What holds the load?" }) }), {
    params: Promise.resolve({ id: COURSE.id }),
  });

beforeEach(() => {
  vi.clearAllMocks();
  mocks.getSourceChatConfig.mockResolvedValue({ stage: "invited", agents: ["explain"], provider: "", temperature: 0.2, topK: 6, grounding: "strict", routing: "all" });
  mocks.sourceChat.mockResolvedValue(ANSWER);
  mocks.getActiveLearner.mockImplementation(async (s: { user: { id: string } }) => ({ id: s.user.id }));
  mocks.isEnrolled.mockResolvedValue(true);
  mocks.insertSavedSourceChat.mockResolvedValue(ROW_ID);
  mocks.isPlatformOwner.mockImplementation(async (id: string) => id === "owner");
  mocks.canEditCourse.mockImplementation(async (s: { user: { id: string } }) => s.user.id === "owner");
});

describe("saveIfOwner", () => {
  it("saves for the owner and returns the row id", async () => {
    const save = vi.fn().mockResolvedValue("id-1");
    expect(await saveIfOwner({ isOwner: async () => true, save })).toBe("id-1");
    expect(save).toHaveBeenCalledOnce();
  });

  it("never saves for anyone else", async () => {
    const save = vi.fn().mockResolvedValue("id-1");
    expect(await saveIfOwner({ isOwner: async () => false, save })).toBeNull();
    expect(save).not.toHaveBeenCalled();
  });

  it("returns null and logs when the owner check or the insert fails, never throwing", async () => {
    const log = vi.fn();
    expect(await saveIfOwner({ isOwner: async () => { throw new Error("db down"); }, save: vi.fn(), log })).toBeNull();
    expect(await saveIfOwner({ isOwner: async () => true, save: async () => { throw new Error("insert failed"); }, log })).toBeNull();
    expect(log).toHaveBeenCalledTimes(2);
  });

  it("gives up on a slow save instead of holding the answer", async () => {
    const log = vi.fn();
    const slow = () => new Promise<string>((resolve) => setTimeout(() => resolve("late"), 200));
    const started = Date.now();
    expect(await saveIfOwner({ isOwner: async () => true, save: slow, timeoutMs: 20, log })).toBeNull();
    expect(Date.now() - started).toBeLessThan(150);
    expect(log).toHaveBeenCalledOnce();
  });
});

describe("POST /api/courses/[id]/source-chat (the old route, forwarded to the course chat) saving", () => {
  it("saves the owner's question with the answer and its linked citations", async () => {
    signIn("owner");
    const res = await askAs();
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ...ANSWER, savedId: ROW_ID, conversationId: expect.any(String) });
    expect(mocks.insertSavedSourceChat).toHaveBeenCalledWith(
      expect.objectContaining({
        tenantId: "t1",
        courseId: COURSE.id,
        userId: "owner",
        question: "What holds the load?",
        answer: ANSWER.answer,
        citations: ANSWER.citations,
        agents: ["explain"],
        grounding: "strict",
        usedChunks: 1,
      }),
    );
  });

  it("stores nothing for an enrolled learner, who gets the answer exactly as before", async () => {
    signIn("learner");
    const res = await askAs();
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ...ANSWER, savedId: null, conversationId: expect.any(String) });
    expect(mocks.insertSavedSourceChat).not.toHaveBeenCalled();
  });

  it("still answers the owner when saving fails", async () => {
    signIn("owner");
    mocks.insertSavedSourceChat.mockRejectedValue(new Error("relation does not exist"));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    const res = await askAs();
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ...ANSWER, savedId: null, conversationId: expect.any(String) });
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe("deleting saved chats is owner-only", () => {
  const one = () => deleteOne(new Request("http://learn.test/api", { method: "DELETE" }), { params: Promise.resolve({ id: ROW_ID }) });
  const all = (qs = "") => deleteAll(new Request(`http://learn.test/api/admin/source-chat-history${qs}`, { method: "DELETE" }));

  it("refuses a signed-out visitor and a non-owner without touching the table", async () => {
    signIn(null);
    expect((await one()).status).toBe(401);
    expect((await all()).status).toBe(401);
    signIn("brand-admin");
    expect((await one()).status).toBe(403);
    expect((await all()).status).toBe(403);
    expect(mocks.deleteSavedSourceChat).not.toHaveBeenCalled();
    expect(mocks.deleteAllSavedSourceChats).not.toHaveBeenCalled();
  });

  it("lets the owner delete one of their own, keyed by their user id; another's id is a 404", async () => {
    signIn("owner");
    mocks.deleteSavedSourceChat.mockResolvedValueOnce(true).mockResolvedValueOnce(false);
    expect((await one()).status).toBe(200);
    expect(mocks.deleteSavedSourceChat).toHaveBeenCalledWith("owner", ROW_ID);
    expect((await one()).status).toBe(404);
  });

  it("lets the owner delete all, or all for one course", async () => {
    signIn("owner");
    mocks.deleteAllSavedSourceChats.mockResolvedValue(3);
    const res = await all();
    expect(await res.json()).toEqual({ deleted: 3 });
    expect(mocks.deleteAllSavedSourceChats).toHaveBeenCalledWith("owner", null);
    await all(`?courseId=${COURSE.id}`);
    expect(mocks.deleteAllSavedSourceChats).toHaveBeenLastCalledWith("owner", COURSE.id);
    expect((await all("?courseId=nope")).status).toBe(400);
  });
});
