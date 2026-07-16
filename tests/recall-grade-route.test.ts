import { beforeEach, describe, expect, it, vi } from "vitest";
import { revealPromptIndex } from "@/lib/reveals";

/**
 * POST /api/courses/[id]/lessons/[lessonId]/recall — WHO a self-grade is recorded for and
 * UNDER WHAT IDENTITY.
 *
 * The two regressions this file pins:
 *   1. Attribution: grades must land on the ACTIVE learner (a managed child when a parent is
 *      "studying as" one), never raw session.user.id — same rule as progress/quiz.
 *   2. Reveal identity: a `:::reveal` grade arrives as question TEXT; the server must verify it
 *      against the lesson body and derive the negative, prompt-hashed promptIndex itself. A
 *      client must not be able to key arbitrary junk into recall_attempts.
 * Plus the paths that must never write: signed-out (401), cross-course lesson (404),
 * unknown prompt (400), malformed body (400).
 */

const mocks = vi.hoisted(() => ({
  apiContext: vi.fn(),
  getActiveLearner: vi.fn(),
  getLessonById: vi.fn(),
  recordRecallAttempt: vi.fn(),
  getCourseById: vi.fn(),
}));

vi.mock("@/lib/api", () => ({
  apiContext: mocks.apiContext,
  json: (data: unknown, status = 200) => Response.json(data, { status }),
  errorJson: (error: string, status: number) => Response.json({ error }, { status }),
}));
vi.mock("@/lib/active-learner", () => ({ getActiveLearner: mocks.getActiveLearner }));
vi.mock("@/db/queries/authoring", () => ({ getLessonById: mocks.getLessonById }));
vi.mock("@/db/queries/recall", () => ({ recordRecallAttempt: mocks.recordRecallAttempt }));

import { POST } from "@/app/api/courses/[id]/lessons/[lessonId]/recall/route";

const TENANT = "tenant-1";
const COURSE = "course-1";
const LESSON = "lesson-1";
const QUESTION = "What does METAR stand for?";
const LESSON_BODY = `Intro prose.\n:::reveal ${QUESTION} ||| Meteorological Aerodrome Report.\nMore prose.`;

const session = { user: { id: "parent-1", name: "Parent" } };

function post(body: unknown) {
  return POST(
    new Request("http://tenant.test/api/recall", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }),
    { params: Promise.resolve({ id: COURSE, lessonId: LESSON }) },
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  mocks.apiContext.mockResolvedValue({
    sdb: { tenantId: TENANT, getCourseById: mocks.getCourseById },
    session,
  });
  // Default: the parent is studying as themselves.
  mocks.getActiveLearner.mockResolvedValue({ id: "parent-1", name: "Parent", isChild: false });
  mocks.getCourseById.mockResolvedValue({ id: COURSE });
  mocks.getLessonById.mockResolvedValue({ id: LESSON, courseId: COURSE, textContent: LESSON_BODY });
});

describe("signed-out", () => {
  it("401s and records nothing — reveals still work client-side, grading just isn't offered", async () => {
    mocks.apiContext.mockResolvedValue({ sdb: { tenantId: TENANT, getCourseById: mocks.getCourseById }, session: null });
    const res = await post({ prompt: QUESTION, gotIt: true });
    expect(res.status).toBe(401);
    expect(mocks.recordRecallAttempt).not.toHaveBeenCalled();
  });
});

describe("attribution — the ACTIVE learner, not the session user", () => {
  it("records a reveal grade for the managed child a parent is studying as", async () => {
    mocks.getActiveLearner.mockResolvedValue({ id: "child-9", name: "Kid", isChild: true });
    const res = await post({ prompt: QUESTION, gotIt: false });
    expect(res.status).toBe(200);
    expect(mocks.recordRecallAttempt).toHaveBeenCalledTimes(1);
    expect(mocks.recordRecallAttempt).toHaveBeenCalledWith(
      expect.objectContaining({ userId: "child-9", tenantId: TENANT, courseId: COURSE, lessonId: LESSON, gotIt: false }),
    );
  });

  it("records a recall-card grade for the active learner too (existing shape unchanged)", async () => {
    mocks.getActiveLearner.mockResolvedValue({ id: "child-9", name: "Kid", isChild: true });
    const res = await post({ promptIndex: 3, gotIt: true });
    expect(res.status).toBe(200);
    expect(mocks.recordRecallAttempt).toHaveBeenCalledWith(
      expect.objectContaining({ userId: "child-9", promptIndex: 3, gotIt: true }),
    );
  });
});

describe("reveal identity — server-derived, verified against the lesson body", () => {
  it("stores the NEGATIVE prompt-hashed index for a question that exists in the body", async () => {
    const res = await post({ prompt: QUESTION, gotIt: true });
    expect(res.status).toBe(200);
    const arg = mocks.recordRecallAttempt.mock.calls[0][0];
    expect(arg.promptIndex).toBe(revealPromptIndex(QUESTION));
    expect(arg.promptIndex).toBeLessThan(0);
  });

  it("matches the prompt whitespace-insensitively, but keys by the CANONICAL body text", async () => {
    const res = await post({ prompt: `  What does\tMETAR   stand for? `, gotIt: true });
    expect(res.status).toBe(200);
    expect(mocks.recordRecallAttempt.mock.calls[0][0].promptIndex).toBe(revealPromptIndex(QUESTION));
  });

  it("400s a prompt that is not in this lesson — junk can't be keyed into the table", async () => {
    const res = await post({ prompt: "A question from some other lesson?", gotIt: true });
    expect(res.status).toBe(400);
    expect(mocks.recordRecallAttempt).not.toHaveBeenCalled();
  });

  it("400s a malformed body", async () => {
    for (const bad of [{}, { gotIt: true }, { prompt: "", gotIt: true }, { promptIndex: -5, gotIt: true }]) {
      const res = await post(bad);
      expect(res.status).toBe(400);
    }
    expect(mocks.recordRecallAttempt).not.toHaveBeenCalled();
  });
});

describe("scoping", () => {
  it("404s when the course isn't this tenant's (sdb.getCourseById already tenant-filters)", async () => {
    mocks.getCourseById.mockResolvedValue(null);
    const res = await post({ prompt: QUESTION, gotIt: true });
    expect(res.status).toBe(404);
    expect(mocks.recordRecallAttempt).not.toHaveBeenCalled();
  });

  it("404s a lesson that belongs to a different course", async () => {
    mocks.getLessonById.mockResolvedValue({ id: LESSON, courseId: "other-course", textContent: LESSON_BODY });
    const res = await post({ prompt: QUESTION, gotIt: true });
    expect(res.status).toBe(404);
    expect(mocks.recordRecallAttempt).not.toHaveBeenCalled();
  });

  it("404s a lesson the tenant-scoped lookup can't see", async () => {
    mocks.getLessonById.mockResolvedValue(null);
    const res = await post({ prompt: QUESTION, gotIt: true });
    expect(res.status).toBe(404);
    expect(mocks.recordRecallAttempt).not.toHaveBeenCalled();
  });
});
