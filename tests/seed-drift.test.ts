import { readFileSync } from "node:fs";
import { join } from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { getTableColumns } from "drizzle-orm";
import {
  compactDiff,
  decideSeedAction,
  diffSeedContent,
  lineDiff,
  readSeedContent,
  seedContentHash,
  type SeedContent,
} from "@/lib/seed-drift";
import { lessonSeedDrifts } from "@/db/schema/seed-drift";

// Seed drift (plans/97 Q5, BAM 2026-11-01): a seed skips a lesson edited in the app since the last
// seed, reports it, and the author acknowledges it on /teach.

const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const lesson = (over: Partial<SeedContent> = {}): SeedContent => ({
  title: "1 · Set sound",
  textContent: "Line one.\nLine two.",
  contentUrl: null,
  quizContent: { questions: [{ prompt: "Q", options: ["a", "b"], correctIndex: 0 }] },
  exerciseContent: null,
  mapContent: null,
  recallContent: null,
  ...over,
});

describe("seedContentHash", () => {
  it("ignores jsonb key order and changes on any edit, whitespace included", () => {
    const a = lesson();
    const b = lesson({ quizContent: { questions: [{ correctIndex: 0, options: ["a", "b"], prompt: "Q" }] } });
    expect(seedContentHash(a)).toBe(seedContentHash(b));
    expect(seedContentHash(lesson({ textContent: "Line one.\nLine two. " }))).not.toBe(seedContentHash(a));
    expect(seedContentHash(lesson({ title: "1 · Set Sound" }))).not.toBe(seedContentHash(a));
  });
});

describe("decideSeedAction", () => {
  const F = "file";
  it("writes a new lesson, a baseline, an untouched one, and one already equal to the file", () => {
    expect(decideSeedAction({ seedHash: undefined, appHash: undefined, fileHash: F, drift: null })).toBe("write");
    expect(decideSeedAction({ seedHash: null, appHash: "app", fileHash: F, drift: null })).toBe("write");
    expect(decideSeedAction({ seedHash: "old", appHash: "old", fileHash: F, drift: null })).toBe("write");
    expect(decideSeedAction({ seedHash: "old", appHash: F, fileHash: F, drift: null })).toBe("write");
  });
  it("skips and reports an in-app edit", () => {
    expect(decideSeedAction({ seedHash: "old", appHash: "edited", fileHash: F, drift: null })).toBe("skip_report");
    expect(decideSeedAction({ seedHash: "old", appHash: "edited", fileHash: F, drift: { fileHash: F, resolution: null } })).toBe("skip_report");
  });
  it("stays quiet after 'keep the app edit' until the FILE changes again", () => {
    const kept = { fileHash: F, resolution: "kept_app" };
    expect(decideSeedAction({ seedHash: "old", appHash: "edited", fileHash: F, drift: kept })).toBe("skip_kept");
    expect(decideSeedAction({ seedHash: "old", appHash: "edited", fileHash: "newer", drift: kept })).toBe("skip_report");
  });
});

describe("the difference shown to the author", () => {
  it("line diff marks app-only and file-only lines and compacts unchanged runs", () => {
    const d = lineDiff("a\nb\nc\nd\ne\nf\ng", "a\nb\nc\nX\ne\nf\ng")!;
    expect(d.filter((l) => l.op !== "same")).toEqual([
      { op: "del", text: "d" },
      { op: "add", text: "X" },
    ]);
    const c = compactDiff(d, 1);
    expect(c[0]).toEqual({ op: "gap", text: "2 unchanged lines" });
    expect(c.at(-1)).toEqual({ op: "gap", text: "2 unchanged lines" });
  });
  it("lists only fields that differ, and a reordered JSON key is not a difference", () => {
    const app = lesson({ textContent: "Edited in the app." });
    const file = lesson({ quizContent: { questions: [{ correctIndex: 0, options: ["a", "b"], prompt: "Q" }] } });
    expect(diffSeedContent(app, file).map((f) => f.field)).toEqual(["textContent"]);
  });
  it("gives up politely on a body too long to diff", () => {
    expect(lineDiff("x\n".repeat(2000), "y")).toBeNull();
  });
  it("reads stored file content defensively", () => {
    expect(readSeedContent(null)).toBeNull();
    expect(readSeedContent({ title: 3 })).toBeNull();
    expect(readSeedContent(lesson())?.title).toBe("1 · Set sound");
  });
});

describe("wiring", () => {
  it("the seeder decides with decideSeedAction, records seed_hash and never overwrites a skipped lesson's content", () => {
    const s = src("scripts/lib/seed-authored-course.ts");
    expect(s).toContain("decideSeedAction({");
    expect(s).toContain("seedHash: sql`excluded.seed_hash`");
    expect(s).toContain(".set({ sortOrder: k.sortOrder, moduleId: k.moduleId })");
    expect(src("scripts/seed-courses.ts")).toContain("await writeSeedReport(db, seedReport());");
  });
  it("every query is tenant-filtered and the drift table holds content, never a message", () => {
    const q = src("src/db/queries/seed-drift.ts");
    expect(q.match(/eq\(lessonSeedDrifts\.tenantId, tenantId\)/g)?.length).toBeGreaterThanOrEqual(2);
    const cols = Object.values(getTableColumns(lessonSeedDrifts)).map((c) => c.name);
    expect(cols.filter((n) => /(reply|thread|parent|read_at|seen_at|message|body)/.test(n))).toEqual([]);
  });
  it("warnings show on /teach, the course page and /admin", () => {
    expect(src("src/app/(tenant)/teach/page.tsx")).toContain("<SeedDriftWarnings drifts={drifts} />");
    expect(src("src/app/(tenant)/admin/page.tsx")).toContain("<SeedDriftWarnings drifts={drifts} />");
    expect(src("src/app/(tenant)/teach/[courseId]/page.tsx")).toContain("<SeedDriftPanel courseId={course.id} items={driftItems} />");
  });
});

// ── The acknowledgment route ──────────────────────────────────────────────
const m = vi.hoisted(() => ({
  session: null as null | { user: { id: string; email: string } },
  owner: false,
  resolved: true,
  calls: [] as unknown[],
}));
vi.mock("@/lib/api", () => ({
  apiContext: async () => ({
    session: m.session,
    sdb: {
      getCourseById: async (id: string) => (id === "c1" ? { id: "c1", instructorId: "teacher" } : null),
      resolveSeedDrift: async (...a: unknown[]) => {
        m.calls.push(a);
        return m.resolved;
      },
    },
  }),
  errorJson: (error: string, status: number) => Response.json({ error }, { status }),
  json: (b: unknown) => Response.json(b),
}));
vi.mock("@/lib/session", () => ({ isPlatformOwner: async () => m.owner }));
import { POST } from "@/app/api/courses/[id]/seed-drift/[driftId]/route";

describe("POST /api/courses/[id]/seed-drift/[driftId]", () => {
  const call = (id: string, action: unknown) =>
    POST(new Request("https://x/api", { method: "POST", body: JSON.stringify({ action }) }), {
      params: Promise.resolve({ id, driftId: "d1" }),
    });
  beforeEach(() => {
    m.session = { user: { id: "teacher", email: "t@example.org" } };
    m.owner = false;
    m.resolved = true;
    m.calls = [];
  });
  it("401, 404 across tenants, 403 for anyone but the instructor or owner, 400 on a bad action", async () => {
    m.session = null;
    expect((await call("c1", "keep_app")).status).toBe(401);
    m.session = { user: { id: "teacher", email: "t@example.org" } };
    expect((await call("other-tenant-course", "keep_app")).status).toBe(404);
    expect((await call("c1", "delete")).status).toBe(400);
    m.session = { user: { id: "stranger", email: "s@example.org" } };
    expect((await call("c1", "keep_app")).status).toBe(403);
  });
  it("the instructor and the owner decide; an unknown warning is 404", async () => {
    expect((await call("c1", "take_file")).status).toBe(200);
    expect(m.calls[0]).toEqual(["c1", "d1", "take_file", "teacher"]);
    m.session = { user: { id: "owner", email: "o@example.org" } };
    m.owner = true;
    expect((await call("c1", "keep_app")).status).toBe(200);
    m.resolved = false;
    expect((await call("c1", "keep_app")).status).toBe(404);
  });
});
