import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * REPORT-A-PROBLEM AND LESSON FEEDBACK, QUEUED OFFLINE.
 *
 * BAM's bug report, verbatim: "user should be able to submit comment, correction, question, bug,
 * feedback, idea, other when offline and it syncs when back online". Those seven words are two
 * endpoints with two different body shapes:
 *
 *   bug | feedback | idea | other      → POST /api/report                     → { kind, message }
 *   comment | correction | question    → POST /api/courses/:c/lessons/:l/feedback → { kind, body }
 *
 * The interesting failure is not "does it send" — it's "does it send THE RIGHT THING TO THE RIGHT
 * PLACE, six hours later, from a different page, possibly after signing in again". So these tests
 * assert the URL *and* the body the fake server actually received, and every way an item could be
 * lost or misdirected on the way:
 *
 *   • queued offline, flushed later      → lands on its OWN endpoint, not the other one
 *   • a 400                              → KEPT and flagged, never dropped
 *   • a 401 (session died in the queue)  → KEPT and retried after sign-in
 *   • a flush that half-succeeds         → the sent one is not sent again
 *   • an item queued on another brand    → NOT replayed against this one
 *   • signed-out problem report          → sends anyway; /api/report allows anonymous
 */

class MemoryStorage implements Storage {
  private map = new Map<string, string>();
  get length() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  getItem(k: string) {
    return this.map.get(k) ?? null;
  }
  key(i: number) {
    return [...this.map.keys()][i] ?? null;
  }
  removeItem(k: string) {
    this.map.delete(k);
  }
  setItem(k: string, v: string) {
    this.map.set(k, v);
  }
}

type Seen = { url: string; body: unknown };

let store: MemoryStorage;
/** Every request the fake server saw — url AND body, because the body shape is half the contract. */
let seen: Seen[];

beforeEach(() => {
  store = new MemoryStorage();
  seen = [];
  vi.stubGlobal("localStorage", store);
  vi.stubGlobal("navigator", { onLine: true });
  vi.stubGlobal("window", {
    dispatchEvent: () => true,
    addEventListener: () => {},
    removeEventListener: () => {},
  });
  vi.stubGlobal("location", { origin: "https://bvc.example" });
  vi.stubGlobal("crypto", { randomUUID: () => `id-${Math.random().toString(36).slice(2)}` });
  vi.resetModules();
});

async function load() {
  return {
    outbox: await import("@/lib/offline-outbox"),
    kinds: await import("@/lib/outbox-kinds"),
  };
}

/** A server that answers `status` for every request, recording what it was actually asked to store. */
function server(status: number, body: unknown = { ok: true }) {
  vi.stubGlobal("fetch", async (url: string, init: RequestInit) => {
    seen.push({ url, body: JSON.parse(String(init.body)) });
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json" },
    });
  });
}

/** A server that answers per-URL — for asserting that one flush routes two kinds two ways. */
function routingServer(routes: Record<string, number>) {
  vi.stubGlobal("fetch", async (url: string, init: RequestInit) => {
    seen.push({ url, body: JSON.parse(String(init.body)) });
    const status = routes[url] ?? 404;
    return new Response(JSON.stringify({ ok: status < 300 }), { status });
  });
}

const REPORT_URL = "/api/report";
const FEEDBACK_URL = "/api/courses/course-1/lessons/lesson-4/feedback";
const RECALL_URL = "/api/courses/course-1/lessons/lesson-4/recall";

describe("what each kind means", () => {
  it("a problem report goes to /api/report with `message` — not `body`", async () => {
    const { kinds } = await load();
    const draft = kinds.problemReportDraft({
      kind: "bug",
      message: "The audio player stops at 3:12",
      pageUrl: "/bvc/tobacco/lesson/curing",
      email: "learner@example.com",
    });

    expect(draft.kind).toBe("problem-report");
    expect(draft.url).toBe("/api/report");
    expect(draft.method).toBe("POST");
    expect(draft.body).toEqual({
      kind: "bug",
      message: "The audio player stops at 3:12",
      pageUrl: "/bvc/tobacco/lesson/curing",
      email: "learner@example.com",
    });
    // The pending row shows the person their own words.
    expect(draft.label).toBe("The audio player stops at 3:12");
  });

  it("omits an empty email/pageUrl rather than sending `\"\"` — which the API's Zod would 400", async () => {
    const { kinds } = await load();
    const draft = kinds.problemReportDraft({ kind: "idea", message: "Add a dark mode" });
    expect(draft.body).toEqual({ kind: "idea", message: "Add a dark mode" });
    expect(draft.body).not.toHaveProperty("email");
    expect(draft.body).not.toHaveProperty("pageUrl");
  });

  it("lesson feedback goes to the LESSON's endpoint with `body` — not `message`", async () => {
    const { kinds } = await load();
    const draft = kinds.curriculumFeedbackDraft({
      courseId: "course-1",
      lessonId: "lesson-4",
      kind: "correction",
      body: "Wells was born in 1862, not 1863.",
    });

    expect(draft.kind).toBe("curriculum-feedback");
    expect(draft.url).toBe(FEEDBACK_URL); // the lesson is in the URL, so it cannot drift
    expect(draft.body).toEqual({ kind: "correction", body: "Wells was born in 1862, not 1863." });
    expect(draft.body).not.toHaveProperty("message");
  });

  it("a check-yourself grade goes to the LESSON's recall endpoint with the question text", async () => {
    const { kinds } = await load();
    const draft = kinds.recallGradeDraft({
      courseId: "course-1",
      lessonId: "lesson-4",
      prompt: "What does METAR stand for?",
      gotIt: false,
    });

    expect(draft.kind).toBe("recall-grade");
    expect(draft.url).toBe(RECALL_URL); // the lesson is in the URL; the question is in the body
    expect(draft.method).toBe("POST");
    // The server derives the stable identity from the prompt — no client-picked index.
    expect(draft.body).toEqual({ prompt: "What does METAR stand for?", gotIt: false });
    expect(draft.body).not.toHaveProperty("promptIndex");
    expect(draft.label).toContain("Missed");
    expect(draft.label).toContain("What does METAR stand for?");
  });

  it("marking a lesson complete goes to that lesson's progress endpoint with `completed`", async () => {
    const { kinds } = await load();
    const draft = kinds.progressDraft({ courseId: "course-1", lessonId: "lesson-4", completed: true });
    expect(draft.kind).toBe("progress");
    expect(draft.url).toBe("/api/courses/course-1/lessons/lesson-4/progress"); // lesson in the URL
    expect(draft.method).toBe("POST");
    expect(draft.body).toEqual({ completed: true });
    expect(draft.label).toBe("Marked complete");
  });

  it("an instructor lesson edit is a PATCH to the lesson, carrying the exact changes verbatim", async () => {
    const { kinds } = await load();
    const draft = kinds.lessonEditDraft({
      courseId: "course-1",
      lessonId: "lesson-4",
      changes: { title: "Weather, revised", isPublished: true },
      label: 'Edit "Weather": title, isPublished',
    });
    expect(draft.kind).toBe("lesson-edit");
    expect(draft.url).toBe("/api/courses/course-1/lessons/lesson-4"); // the lesson can't drift
    expect(draft.method).toBe("PATCH");
    // The changes are stored verbatim — never re-derived at flush time against a stale lesson.
    expect(draft.body).toEqual({ title: "Weather, revised", isPublished: true });
  });

  it("a quiz attempt POSTs only the learner's picks to the lesson's quiz endpoint", async () => {
    const { kinds } = await load();
    const draft = kinds.quizAttemptDraft({
      courseId: "course-1",
      lessonId: "lesson-4",
      responses: [
        { questionIndex: 0, optionIndex: 2 },
        { questionIndex: 3, optionIndex: 1 },
      ],
    });
    expect(draft.kind).toBe("quiz-attempt");
    expect(draft.url).toBe("/api/courses/course-1/lessons/lesson-4/quiz");
    expect(draft.method).toBe("POST");
    // Only the chosen option indices travel — never a correctIndex; the server scores by identity,
    // so a queued attempt can't leak the answers to the device it was taken on.
    expect(draft.body).toEqual({
      responses: [
        { questionIndex: 0, optionIndex: 2 },
        { questionIndex: 3, optionIndex: 1 },
      ],
    });
  });
});

describe("a self-grade queued offline is never silently lost", () => {
  it("holds a reveal grade with no network, then posts it to that lesson's recall endpoint", async () => {
    const { outbox, kinds } = await load();
    vi.stubGlobal("navigator", { onLine: false });

    outbox.enqueue(
      kinds.recallGradeDraft({ courseId: "course-1", lessonId: "lesson-4", prompt: "Class G day VFR vis?", gotIt: true }),
    );

    // Nothing sends while offline; the pending row is visible to the reveal that queued it.
    server(200);
    await outbox.flushOutbox();
    expect(seen).toEqual([]);
    expect(outbox.outboxFor("recall-grade")).toHaveLength(1);

    // The network returns.
    vi.stubGlobal("navigator", { onLine: true });
    await outbox.flushOutbox();
    expect(seen).toEqual([{ url: RECALL_URL, body: { prompt: "Class G day VFR vis?", gotIt: true } }]);
    expect(outbox.readOutbox()).toHaveLength(0);
  });

  it("KEEPS a grade through a 401 (session died in the queue) and sends it after sign-in", async () => {
    const { outbox, kinds } = await load();
    outbox.enqueue(
      kinds.recallGradeDraft({ courseId: "course-1", lessonId: "lesson-4", prompt: "Class G day VFR vis?", gotIt: false }),
    );
    server(401, { error: "Sign in first" });

    await outbox.flushOutbox();
    const [pending] = outbox.outboxFor("recall-grade");
    expect(pending.failed).toBe(false); // retryable — the grade is fine, the session isn't

    seen = [];
    server(200);
    await outbox.flushOutbox();
    expect(seen).toEqual([{ url: RECALL_URL, body: { prompt: "Class G day VFR vis?", gotIt: false } }]);
    expect(outbox.readOutbox()).toHaveLength(0);
  });
});

describe("offline → queued → flushed to the right endpoint", () => {
  it("holds a problem report with no network, then posts it to /api/report when it's back", async () => {
    const { outbox, kinds } = await load();
    vi.stubGlobal("navigator", { onLine: false });

    const item = outbox.enqueue(
      kinds.problemReportDraft({ kind: "bug", message: "Quiz 3 won't submit", pageUrl: "/q/3" }),
    );
    expect(item).not.toBeNull();

    // Nothing goes anywhere while offline.
    server(200);
    await outbox.flushOutbox();
    expect(seen).toEqual([]);
    expect(outbox.outboxFor("problem-report")).toHaveLength(1);

    // The plane lands.
    vi.stubGlobal("navigator", { onLine: true });
    await outbox.flushOutbox();

    expect(seen).toEqual([
      { url: REPORT_URL, body: { kind: "bug", message: "Quiz 3 won't submit", pageUrl: "/q/3" } },
    ]);
    expect(outbox.readOutbox()).toHaveLength(0); // removed ONLY because the server took it
  });

  it("holds lesson feedback with no network, then posts it to that lesson's endpoint", async () => {
    const { outbox, kinds } = await load();
    vi.stubGlobal("navigator", { onLine: false });

    outbox.enqueue(
      kinds.curriculumFeedbackDraft({
        courseId: "course-1",
        lessonId: "lesson-4",
        kind: "question",
        body: "Which treaty is this referring to?",
      }),
    );

    vi.stubGlobal("navigator", { onLine: true });
    server(200);
    await outbox.flushOutbox();

    expect(seen).toEqual([
      { url: FEEDBACK_URL, body: { kind: "question", body: "Which treaty is this referring to?" } },
    ]);
    expect(outbox.readOutbox()).toHaveLength(0);
  });

  it("routes BOTH kinds in one flush — each to its own endpoint, with its own body shape", async () => {
    // The bug this is here to catch: collapsing the two into one generic payload, so a bug report
    // arrives at the feedback API (or vice versa) and is 400'd — or worse, silently mis-stored.
    const { outbox, kinds } = await load();
    vi.stubGlobal("navigator", { onLine: false });

    outbox.enqueue(kinds.problemReportDraft({ kind: "other", message: "Typo in the footer" }));
    outbox.enqueue(
      kinds.curriculumFeedbackDraft({
        courseId: "course-1",
        lessonId: "lesson-4",
        kind: "comment",
        body: "This lesson finally made compounding click.",
      }),
    );

    vi.stubGlobal("navigator", { onLine: true });
    routingServer({ [REPORT_URL]: 200, [FEEDBACK_URL]: 200 });
    await outbox.flushOutbox();

    expect(seen).toEqual([
      { url: REPORT_URL, body: { kind: "other", message: "Typo in the footer" } },
      {
        url: FEEDBACK_URL,
        body: { kind: "comment", body: "This lesson finally made compounding click." },
      },
    ]);
    expect(outbox.readOutbox()).toHaveLength(0);
  });

  it("a form sees only its own pending rows", async () => {
    const { outbox, kinds } = await load();
    outbox.enqueue(kinds.problemReportDraft({ kind: "bug", message: "A bug" }));
    outbox.enqueue(
      kinds.curriculumFeedbackDraft({ courseId: "c", lessonId: "l", kind: "comment", body: "A note" }),
    );

    expect(outbox.outboxFor("problem-report").map((i) => i.label)).toEqual(["A bug"]);
    expect(outbox.outboxFor("curriculum-feedback").map((i) => i.label)).toEqual(["A note"]);
  });

  it("keeps feedback for lesson 4 distinguishable from lesson 5 while both wait", async () => {
    // The lesson page filters its pending rows by URL. Two lessons queued at once must not show
    // each other's notes.
    const { outbox, kinds } = await load();
    const four = kinds.curriculumFeedbackDraft({ courseId: "course-1", lessonId: "lesson-4", kind: "correction", body: "Wrong date" });
    const five = kinds.curriculumFeedbackDraft({ courseId: "course-1", lessonId: "lesson-5", kind: "question", body: "Source?" });
    outbox.enqueue(four);
    outbox.enqueue(five);

    const forLessonFour = outbox
      .outboxFor("curriculum-feedback")
      .filter((i) => i.url === kinds.feedbackUrl("course-1", "lesson-4"));

    expect(forLessonFour.map((i) => i.label)).toEqual(["Wrong date"]);
  });
});

describe("never lost", () => {
  it("KEEPS a problem report the server 400s — flagged, visible, text recoverable", async () => {
    const { outbox, kinds } = await load();
    outbox.enqueue(kinds.problemReportDraft({ kind: "bug", message: "Something the API refuses" }));
    server(400, { error: "Invalid report." });

    await outbox.flushOutbox();

    const [item] = outbox.outboxFor("problem-report");
    expect(item).toBeTruthy(); // still here — the whole point
    expect(item.failed).toBe(true);
    expect(item.lastError).toContain("400");
    expect(item.label).toBe("Something the API refuses"); // still readable, still copy-out-able

    // And not retried forever behind the user's back.
    seen = [];
    await outbox.flushOutbox();
    expect(seen).toEqual([]);
  });

  it("KEEPS lesson feedback through a 401 and sends it after signing back in", async () => {
    // The real case: a learner saves a lesson for offline, writes a correction on the train, and
    // their session expires before the network comes back. The feedback API is signed-in only.
    const { outbox, kinds } = await load();
    outbox.enqueue(
      kinds.curriculumFeedbackDraft({
        courseId: "course-1",
        lessonId: "lesson-4",
        kind: "correction",
        body: "The 1935 Act, not 1938.",
      }),
    );
    server(401, { error: "Sign in to send feedback" });

    await outbox.flushOutbox();

    const [pending] = outbox.outboxFor("curriculum-feedback");
    expect(pending.failed).toBe(false); // retryable — the note is fine, the session isn't
    expect(pending.lastError).toContain("Sign in");
    expect(pending.label).toBe("The 1935 Act, not 1938.");

    // Signs in. Next flush sends it for real, to the right lesson, with the text intact.
    seen = [];
    server(200);
    await outbox.flushOutbox();
    expect(seen).toEqual([
      { url: FEEDBACK_URL, body: { kind: "correction", body: "The 1935 Act, not 1938." } },
    ]);
    expect(outbox.readOutbox()).toHaveLength(0);
  });

  it("a signed-out problem report still sends — /api/report takes anonymous reports", async () => {
    // ReportProblem renders for everyone, signed in or not, and the API stores userId as null. So a
    // report queued by a signed-out visitor must flush signed-out — no 401, no sign-in prompt.
    const { outbox, kinds } = await load();
    vi.stubGlobal("navigator", { onLine: false });
    outbox.enqueue(
      kinds.problemReportDraft({ kind: "bug", message: "404 on the pricing page", email: "nobody@example.com" }),
    );

    vi.stubGlobal("navigator", { onLine: true });
    server(200, { ok: true }); // what /api/report actually answers an anonymous POST
    await outbox.flushOutbox();

    expect(seen).toEqual([
      {
        url: REPORT_URL,
        body: { kind: "bug", message: "404 on the pricing page", email: "nobody@example.com" },
      },
    ]);
    expect(outbox.readOutbox()).toHaveLength(0); // sent and cleared, with no session anywhere
  });

  it("a half-succeeded flush doesn't double-post the one that got through", async () => {
    // The report sends; the network dies before the feedback does. The next flush must send the
    // feedback and NOT the report again — a duplicate bug report is noise, a duplicate correction
    // is worse.
    const { outbox, kinds } = await load();
    outbox.enqueue(kinds.problemReportDraft({ kind: "bug", message: "Sent before the network died" }));
    outbox.enqueue(
      kinds.curriculumFeedbackDraft({ courseId: "course-1", lessonId: "lesson-4", kind: "comment", body: "Stuck in the queue" }),
    );

    vi.stubGlobal("fetch", async (url: string, init: RequestInit) => {
      seen.push({ url, body: JSON.parse(String(init.body)) });
      if (url === REPORT_URL) return new Response(JSON.stringify({ ok: true }), { status: 200 });
      throw new TypeError("Failed to fetch"); // network gone, mid-flush
    });

    await outbox.flushOutbox();

    expect(seen.map((s) => s.url)).toEqual([REPORT_URL, FEEDBACK_URL]);
    const left = outbox.readOutbox();
    expect(left).toHaveLength(1);
    expect(left[0].kind).toBe("curriculum-feedback"); // the report is gone because it LANDED
    expect(left[0].failed).toBe(false); // a dead network is not the note's fault

    // Network's back. Only the feedback goes — the report is not re-sent.
    seen = [];
    server(200);
    await outbox.flushOutbox();
    expect(seen.map((s) => s.url)).toEqual([FEEDBACK_URL]);
    expect(outbox.readOutbox()).toHaveLength(0);
  });

  it("doesn't send the same report twice when two flushes race", async () => {
    const { outbox, kinds } = await load();
    outbox.enqueue(kinds.problemReportDraft({ kind: "bug", message: "Only once, please" }));
    vi.stubGlobal("fetch", async (url: string, init: RequestInit) => {
      seen.push({ url, body: JSON.parse(String(init.body)) });
      await new Promise((r) => setTimeout(r, 20));
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    });

    await Promise.all([outbox.flushOutbox(), outbox.flushOutbox()]);

    expect(seen).toHaveLength(1);
    expect(outbox.readOutbox()).toHaveLength(0);
  });
});

describe("progress and lesson edits queued offline never lost", () => {
  // The bug BAM reported: "student course progress isn't syncing when user completes lessons
  // offline; offline course-lesson edits aren't syncing when back online." The completion button
  // and the lesson editor used a bare fetch() with no queue fallback, so an offline completion or
  // edit hit the network directly and was dropped. Both now route through the outbox.
  const PROGRESS_URL = "/api/courses/course-1/lessons/lesson-4/progress";
  const LESSON_URL = "/api/courses/course-1/lessons/lesson-4";

  it("holds a lesson completion with no network, then POSTs it to the progress endpoint", async () => {
    const { outbox, kinds } = await load();
    vi.stubGlobal("navigator", { onLine: false });
    outbox.enqueue(kinds.progressDraft({ courseId: "course-1", lessonId: "lesson-4", completed: true }));

    server(200);
    await outbox.flushOutbox();
    expect(seen).toEqual([]); // nothing sends offline — but the completion is NOT dropped
    expect(outbox.outboxFor("progress")).toHaveLength(1);

    vi.stubGlobal("navigator", { onLine: true });
    await outbox.flushOutbox();
    expect(seen).toEqual([{ url: PROGRESS_URL, body: { completed: true } }]);
    expect(outbox.readOutbox()).toHaveLength(0); // removed only because the server took it
  });

  it("replays a queued lesson edit as a verbatim PATCH to that lesson", async () => {
    const { outbox, kinds } = await load();
    vi.stubGlobal("navigator", { onLine: false });
    outbox.enqueue(
      kinds.lessonEditDraft({
        courseId: "course-1",
        lessonId: "lesson-4",
        changes: { textContent: "A corrected paragraph" },
        label: "Edit lesson: textContent",
      }),
    );

    vi.stubGlobal("navigator", { onLine: true });
    server(200);
    await outbox.flushOutbox();
    expect(seen).toEqual([{ url: LESSON_URL, body: { textContent: "A corrected paragraph" } }]);
    expect(outbox.readOutbox()).toHaveLength(0);
  });

  it("two edits to the same lesson replay in order — last write wins per field", async () => {
    const { outbox, kinds } = await load();
    vi.stubGlobal("navigator", { onLine: false });
    outbox.enqueue(kinds.lessonEditDraft({ courseId: "course-1", lessonId: "lesson-4", changes: { title: "First" }, label: "a" }));
    outbox.enqueue(kinds.lessonEditDraft({ courseId: "course-1", lessonId: "lesson-4", changes: { title: "Second" }, label: "b" }));

    vi.stubGlobal("navigator", { onLine: true });
    server(200);
    await outbox.flushOutbox();
    expect(seen).toEqual([
      { url: LESSON_URL, body: { title: "First" } },
      { url: LESSON_URL, body: { title: "Second" } },
    ]);
    expect(outbox.readOutbox()).toHaveLength(0);
  });

  it("KEEPS a completion through a 401 (session died in the queue) and sends it after sign-in", async () => {
    const { outbox, kinds } = await load();
    outbox.enqueue(kinds.progressDraft({ courseId: "course-1", lessonId: "lesson-4", completed: true }));
    server(401, { error: "Sign in" });
    await outbox.flushOutbox();
    expect(outbox.outboxFor("progress")[0].failed).toBe(false); // retryable — the completion is fine

    seen = [];
    server(200);
    await outbox.flushOutbox();
    expect(seen).toEqual([{ url: PROGRESS_URL, body: { completed: true } }]);
    expect(outbox.readOutbox()).toHaveLength(0);
  });

  it("holds a quiz attempt offline, then POSTs it to be scored on reconnect (no answers on device)", async () => {
    const { outbox, kinds } = await load();
    vi.stubGlobal("navigator", { onLine: false });
    outbox.enqueue(
      kinds.quizAttemptDraft({
        courseId: "course-1",
        lessonId: "lesson-4",
        responses: [{ questionIndex: 0, optionIndex: 1 }],
      }),
    );

    server(200);
    await outbox.flushOutbox();
    expect(seen).toEqual([]); // nothing scores offline — but the attempt is NOT lost
    expect(outbox.outboxFor("quiz-attempt")).toHaveLength(1);

    vi.stubGlobal("navigator", { onLine: true });
    await outbox.flushOutbox();
    expect(seen).toEqual([
      { url: "/api/courses/course-1/lessons/lesson-4/quiz", body: { responses: [{ questionIndex: 0, optionIndex: 1 }] } },
    ]);
    expect(outbox.readOutbox()).toHaveLength(0);
  });
});

describe("tenant isolation", () => {
  it("stamps the brand's origin on a queued item", async () => {
    const { outbox, kinds } = await load();
    const item = outbox.enqueue(kinds.problemReportDraft({ kind: "bug", message: "Filed on BVC" }));
    expect(item!.origin).toBe("https://bvc.example");
  });

  it("REFUSES to replay another brand's queued report against this one", async () => {
    // In production this is already impossible — tenants are separate domains and localStorage is
    // partitioned per origin, so brand B's page cannot even SEE brand A's queue. The guard exists
    // for the one place that isn't true: a dev box where DEV_TENANT_HOST re-points a single origin
    // at a different brand. A bug report filed against BVC must never land on another school.
    const { outbox, kinds } = await load();
    outbox.enqueue(kinds.problemReportDraft({ kind: "bug", message: "Filed on BVC" }));

    // Same browser, same storage, now serving a different brand.
    vi.stubGlobal("location", { origin: "https://other-school.example" });
    vi.resetModules();
    const moved = await import("@/lib/offline-outbox");
    server(200);

    await moved.flushOutbox();

    expect(seen).toEqual([]); // it was NOT posted to the other tenant
    const [item] = moved.outboxFor("problem-report");
    expect(item).toBeTruthy(); // but it was NOT thrown away either
    expect(item.failed).toBe(true);
    expect(item.lastError).toContain("bvc.example"); // and it says where it belongs
    expect(item.label).toBe("Filed on BVC");
  });

  it("still sends items queued before origins were stamped (older builds)", async () => {
    const { outbox } = await load();
    // An item written by the previous build: no `origin` field at all.
    store.setItem(
      "witus-offline-outbox-v1",
      JSON.stringify([
        {
          id: "old-1",
          kind: "future-note",
          url: "/api/admin/future/notes",
          method: "POST",
          body: { itemKey: "x", body: "Queued last week" },
          label: "Queued last week",
          createdAt: Date.now(),
          attempts: 0,
          lastError: null,
          failed: false,
        },
      ]),
    );
    server(200);

    await outbox.flushOutbox();

    expect(seen.map((s) => s.url)).toEqual(["/api/admin/future/notes"]);
    expect(outbox.readOutbox()).toHaveLength(0);
  });
});
