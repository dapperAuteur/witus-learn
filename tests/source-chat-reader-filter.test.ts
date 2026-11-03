import { beforeEach, describe, expect, it, vi } from "vitest";
import { readerMayUseChunk, sharedTitlePublishedLessonIds, type ReaderLesson } from "@/lib/source-chat-links";

/**
 * The indexer embeds every lesson, drafts too. A reader who cannot edit the course must never be
 * answered from an unpublished lesson: not its text in the model's prompt, not its title in the
 * citations. The pure rule (readerMayUseChunk) is tested directly; sourceChat runs for real with
 * retrieval, the embedder, the model and the lesson reads mocked, and the prompt it sends is captured.
 */

const mocks = vi.hoisted(() => ({
  retrieveChunks: vi.fn(),
  cachedLessonSummaries: vi.fn(),
  bodies: [] as { id: string; body: string | null }[],
  prompts: [] as string[],
}));

vi.mock("@/db/queries/source-chunks", () => ({ retrieveChunks: mocks.retrieveChunks }));
vi.mock("@/lib/rag/embed-batch", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/rag/embed-batch")>()),
  embedQuery: async () => [0.1, 0.2],
}));
vi.mock("@/lib/ai/langsmith", () => ({ configureLangSmith: () => {} }));
vi.mock("@/lib/ai/fallback", () => ({
  withFallback: () => ({
    invoke: async (messages: { role: string; content: string }[]) => {
      mocks.prompts.push(messages.map((m) => m.content).join("\n"));
      return { content: "An answer [1]." };
    },
  }),
}));
vi.mock("@/lib/public-cache", () => ({ cachedLessonSummaries: mocks.cachedLessonSummaries }));
vi.mock("@/db/queries/authoring", () => ({ getUsername: async () => "bam" }));
// The one direct query in these loaders: the lesson bodies for shared titles (and course_sources,
// which these chunks never need). A tiny chainable stand-in that returns mocks.bodies.
vi.mock("@/db/client", () => {
  const chain = { select: () => chain, from: () => chain, where: async () => mocks.bodies };
  return { db: chain };
});

import { sourceChat } from "@/lib/ai/source-chat";
import type { Course } from "@/db/schema";

const lesson = (id: string, title: string, isPublished: boolean) => ({ id, title, isPublished });

describe("readerMayUseChunk", () => {
  const lessons: ReaderLesson[] = [
    lesson("pub", "Anchors", true),
    lesson("draft", "Secret Draft", false),
    lesson("r1", "Review", true),
    lesson("r2", "Review", false),
  ];
  const chunk = (title: string | null, text = "some passage text") => ({ kind: "lesson", title, text });

  it("keeps a published lesson's chunk and drops a draft's for a reader", () => {
    expect(readerMayUseChunk(chunk("Anchors"), { isEditor: false, lessons })).toBe(true);
    expect(readerMayUseChunk(chunk("Secret Draft"), { isEditor: false, lessons })).toBe(false);
  });

  it("drops a chunk whose title matches no lesson (renamed since indexing) or has none", () => {
    expect(readerMayUseChunk(chunk("Old Name"), { isEditor: false, lessons })).toBe(false);
    expect(readerMayUseChunk(chunk(null), { isEditor: false, lessons })).toBe(false);
  });

  it("keeps everything for an editor, and bibliography chunks for everyone", () => {
    expect(readerMayUseChunk(chunk("Secret Draft"), { isEditor: true, lessons })).toBe(true);
    expect(readerMayUseChunk({ kind: "citation", title: null, text: "Smith (2020)" }, { isEditor: false, lessons })).toBe(true);
    expect(readerMayUseChunk({ kind: "public_domain_text", title: "https://x.org", text: "t" }, { isEditor: false, lessons })).toBe(true);
  });

  describe("a title shared by a published lesson and a draft", () => {
    it("keeps the chunk only when the published lesson's body contains it", () => {
      const sharedTitleBodies = new Map([["r1", "Intro.\n\nThe published review passage. More."]]);
      expect(readerMayUseChunk(chunk("Review", "The published review passage."), { isEditor: false, lessons, sharedTitleBodies })).toBe(true);
      expect(readerMayUseChunk(chunk("Review", "The draft review passage."), { isEditor: false, lessons, sharedTitleBodies })).toBe(false);
    });

    it("drops it when the bodies were not loaded (fails closed)", () => {
      expect(readerMayUseChunk(chunk("Review", "The published review passage."), { isEditor: false, lessons })).toBe(false);
    });

    it("asks only for the published bodies of shared, retrieved titles", () => {
      expect(sharedTitlePublishedLessonIds(lessons, ["Review", "Anchors"])).toEqual(["r1"]);
      expect(sharedTitlePublishedLessonIds(lessons, ["Anchors"])).toEqual([]);
    });
  });
});

describe("sourceChat for a reader vs an editor", () => {
  const COURSE = { id: "c1", tenantId: "t1", slug: "rope", instructorId: "u1", title: "Rope" } as unknown as Course;
  const row = (kind: string, title: string | null, text: string, ord = 0) => ({ id: `${title}-${ord}`, tenantId: "t1", courseId: "c1", sourceId: null, kind, title, text, ord, createdAt: new Date(), distance: 0.1 });
  const DRAFT_TEXT = "UNPUBLISHED-DRAFT-PASSAGE about the anchor test nobody may read yet.";
  const SHARED_DRAFT_TEXT = "SHARED-TITLE-DRAFT-PASSAGE from the unpublished review.";
  const PUBLISHED_REVIEW = "Published review passage about rigging checks.";

  beforeEach(() => {
    vi.clearAllMocks();
    mocks.prompts.length = 0;
    mocks.cachedLessonSummaries.mockResolvedValue([
      { id: "pub", title: "Anchors", slug: "anchors", isPublished: true },
      { id: "draft", title: "Secret Draft", slug: "secret-draft", isPublished: false },
      { id: "r1", title: "Review", slug: "review-1", isPublished: true },
      { id: "r2", title: "Review", slug: "review-2", isPublished: false },
    ]);
    mocks.bodies = [{ id: "r1", body: `Intro.\n\n${PUBLISHED_REVIEW}` }];
    mocks.retrieveChunks.mockResolvedValue([
      row("lesson", "Secret Draft", DRAFT_TEXT),
      row("lesson", "Review", SHARED_DRAFT_TEXT),
      row("lesson", "Anchors", "An anchor must hold the whole system load before use."),
      row("lesson", "Review", PUBLISHED_REVIEW, 1),
      row("citation", "Smith, J. (2020). Rope.", "Smith, J. (2020). Rope."),
    ]);
  });

  const ask = (isEditor: boolean, topK = 6) => sourceChat(COURSE, "What holds the load?", { agents: ["explain"], topK, viewer: { isEditor } });

  it("never puts an unpublished lesson's text in a reader's prompt or its title in the citations", async () => {
    const res = await ask(false);
    const prompt = mocks.prompts.join("\n");
    expect(prompt).not.toContain(DRAFT_TEXT);
    expect(prompt).not.toContain(SHARED_DRAFT_TEXT);
    expect(prompt).not.toContain("Secret Draft");
    expect(prompt).toContain(PUBLISHED_REVIEW);
    expect(res.citations.map((c) => c.title)).toEqual(["Anchors", "Review", "Smith, J. (2020). Rope."]);
    expect(res.citations.map((c) => c.n)).toEqual([1, 2, 3]);
    expect(res.citations.find((c) => c.title === "Review")?.href).toMatch(/\/bam\/rope\/lesson\/review-1/);
  });

  it("over-fetches for a reader and trims back to top-k", async () => {
    const res = await ask(false, 2);
    expect(mocks.retrieveChunks).toHaveBeenCalledWith("t1", "c1", expect.any(Array), 6);
    expect(res.usedChunks).toBe(2);
    expect(res.citations.map((c) => c.title)).toEqual(["Anchors", "Review"]);
  });

  it("gives an editor every chunk, drafts included, at plain top-k", async () => {
    const res = await ask(true);
    expect(mocks.retrieveChunks).toHaveBeenCalledWith("t1", "c1", expect.any(Array), 6);
    expect(mocks.prompts.join("\n")).toContain(DRAFT_TEXT);
    expect(res.citations.map((c) => c.title)).toContain("Secret Draft");
  });

  it("fails closed for a reader when the publish state cannot be read", async () => {
    mocks.cachedLessonSummaries.mockRejectedValue(new Error("db down"));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    const res = await ask(false);
    expect(res.citations.map((c) => c.kind)).toEqual(["citation"]);
    expect(mocks.prompts.join("\n")).not.toContain("UNPUBLISHED");
    spy.mockRestore();
  });

  it("answers 'not covered' without a model call when only drafts matched", async () => {
    mocks.retrieveChunks.mockResolvedValue([row("lesson", "Secret Draft", DRAFT_TEXT)]);
    const res = await ask(false);
    expect(res).toEqual({ answer: "That isn't covered in this course's sources.", citations: [], agents: [], usedChunks: 0 });
    expect(mocks.prompts).toEqual([]);
  });
});
