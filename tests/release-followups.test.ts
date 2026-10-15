import { describe, expect, it } from "vitest";
import { allSeedEntries } from "../scripts/lib/seed-registry";
import {
  BLOGS,
  RELEASE_FOLLOW_UPS,
  blogPostUrl,
  committedTodo,
  courseStage,
  followUpDue,
  stageReaches,
  type CourseStage,
  type CourseStageInput,
  type ReleaseFollowUp,
} from "@/lib/release-followups";
import { isLaunchIntent, launchWarningGroups, type LaunchTodo } from "@/lib/launch-todos";

// Release follow-ups and the launch to-do list are pure where it matters: the committed registry, the
// stage a course is at, when an item falls due, and what counts as an intent to launch. Pinned here
// without a database.

const course = (o: Partial<CourseStageInput> = {}): CourseStageInput => ({
  slug: "c",
  visibility: "public",
  isPublished: true,
  publishHoldReason: null,
  vettedAt: new Date("2026-10-01"),
  allowUnvettedPublic: false,
  ...o,
});

describe("the committed registry", () => {
  it("keeps every key unique, since the done state is keyed on it", () => {
    const keys = RELEASE_FOLLOW_UPS.map((f) => f.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("names only courses that a seed script registers", () => {
    const registered = new Set(allSeedEntries().map((e) => e.slug));
    for (const f of RELEASE_FOLLOW_UPS) {
      expect(f.courses.length, f.key).toBeGreaterThan(0);
      for (const slug of f.courses) expect(registered.has(slug), `${f.key}: ${slug}`).toBe(true);
    }
  });

  it("gives every blog-post follow-up a known blog and a slug, and every item a title and detail", () => {
    for (const f of RELEASE_FOLLOW_UPS) {
      expect(f.title.trim(), f.key).not.toBe("");
      expect(f.detail.trim(), f.key).not.toBe("");
      if (f.kind === "blog-post") {
        expect(f.blogPost, f.key).toBeDefined();
        expect(BLOGS[f.blogPost!.blog], f.key).toBeDefined();
        expect(f.blogPost!.slug, f.key).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      }
    }
  });

  it("builds a post's URL from the blog's own home", () => {
    expect(blogPostUrl({ blog: "bam", slug: "tools-that-think", postTitle: "x" })).toBe(
      "https://brandanthonymcdonald.com/blog/tools-that-think",
    );
  });
});

describe("courseStage", () => {
  it("reads live only when public or members, published, unheld and vetted (or opened unvetted)", () => {
    expect(courseStage(course())).toBe("live");
    expect(courseStage(course({ visibility: "members" }))).toBe("live");
    expect(courseStage(course({ vettedAt: null, allowUnvettedPublic: true }))).toBe("live");
    expect(courseStage(course({ publishHoldReason: "Held for a reviewer" }))).toBe("seeded");
    expect(courseStage(course({ isPublished: false }))).toBe("seeded");
    expect(courseStage(course({ vettedAt: null }))).toBe("seeded");
    expect(courseStage(course({ visibility: "private" }))).toBe("seeded");
    expect(courseStage(undefined)).toBe("missing");
  });

  it("calls a scheduled course scheduled, never live, even when everything else is ready", () => {
    expect(courseStage(course({ visibility: "scheduled" }))).toBe("scheduled");
    expect(courseStage(course({ visibility: "scheduled", publishHoldReason: "Held" }))).toBe("scheduled");
  });

  it("orders the stages so a live course has also reached scheduled and seeded", () => {
    expect(stageReaches("live", "scheduled")).toBe(true);
    expect(stageReaches("live", "seeded")).toBe(true);
    expect(stageReaches("scheduled", "live")).toBe(false);
    expect(stageReaches("seeded", "scheduled")).toBe(false);
    expect(stageReaches("missing", "seeded")).toBe(false);
  });
});

describe("followUpDue", () => {
  const f = (o: Partial<ReleaseFollowUp>): ReleaseFollowUp => ({
    key: "k",
    tenant: "learn-witus",
    courses: ["a", "b"],
    when: "live",
    kind: "task",
    title: "t",
    detail: "d",
    ...o,
  });
  const stages = (m: Record<string, CourseStage>) => (slug: string) => m[slug] ?? "missing";

  it("waits for every listed course by default, and names the ones it waits on", () => {
    const d = followUpDue(f({}), stages({ a: "live", b: "seeded" }));
    expect(d.due).toBe(false);
    expect(d.waitingOn).toEqual([{ slug: "b", stage: "seeded" }]);
    expect(followUpDue(f({}), stages({ a: "live", b: "live" })).due).toBe(true);
  });

  it("falls due on the first course when match is any", () => {
    expect(followUpDue(f({ match: "any" }), stages({ a: "live", b: "seeded" })).due).toBe(true);
    expect(followUpDue(f({ match: "any" }), stages({ a: "seeded", b: "seeded" })).due).toBe(false);
  });

  it("treats a course missing from this school as not there, so another school's slug never fires", () => {
    expect(followUpDue(f({ when: "seeded" }), stages({ a: "seeded" })).due).toBe(false);
  });

  it("makes the Tools That Think posts due once seeded, and their release follow-ups wait for live", () => {
    const post = RELEASE_FOLLOW_UPS.find((x) => x.key === "ttt-blog-139-compass")!;
    const live = RELEASE_FOLLOW_UPS.find((x) => x.key === "ttt-live-map-and-compass")!;
    const held = stages({ "map-and-compass": "seeded" });
    expect(followUpDue(post, held).due).toBe(true);
    expect(followUpDue(live, held).due).toBe(false);
    expect(followUpDue(live, stages({ "map-and-compass": "live" })).due).toBe(true);
  });
});

describe("isLaunchIntent", () => {
  const s = (visibility: string, isPublished: boolean, publishHoldReason: string | null = null) => ({
    visibility,
    isPublished,
    publishHoldReason,
  });

  it("fires on scheduling, opening the visibility, publishing, and clearing the hold", () => {
    expect(isLaunchIntent(s("private", true), s("scheduled", true))).toBe(true);
    expect(isLaunchIntent(s("private", true), s("public", true))).toBe(true);
    expect(isLaunchIntent(s("scheduled", true), s("members", true))).toBe(true);
    expect(isLaunchIntent(s("public", false), s("public", true))).toBe(true);
    expect(isLaunchIntent(s("public", true, "Held"), s("public", true, null))).toBe(true);
  });

  it("stays quiet on saves that do not move the course toward live", () => {
    expect(isLaunchIntent(s("scheduled", true), s("scheduled", true))).toBe(false);
    expect(isLaunchIntent(s("public", true), s("members", true))).toBe(false);
    expect(isLaunchIntent(s("public", true), s("private", true))).toBe(false);
    expect(isLaunchIntent(s("public", true), s("public", false))).toBe(false);
  });
});

describe("launchWarningGroups", () => {
  it("lists only open items, split into before launch and once live", () => {
    const base = RELEASE_FOLLOW_UPS[0];
    const todo = (id: string, when: LaunchTodo["when"], status: LaunchTodo["status"]): LaunchTodo => ({
      ...committedTodo(base, { due: false, waitingOn: [] }, status, null),
      id,
      when,
    });
    const g = launchWarningGroups([
      todo("a", "scheduled", "open"),
      todo("b", "seeded", "open"),
      todo("c", "live", "open"),
      todo("d", "live", "done"),
    ]);
    expect(g.before.map((t) => t.id)).toEqual(["a", "b"]);
    expect(g.after.map((t) => t.id)).toEqual(["c"]);
  });
});
