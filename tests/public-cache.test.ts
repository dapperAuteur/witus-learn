import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * The public-page cache and the writes that clear it (cloud-briefs/learn-db-egress-2026-10-20.md).
 *
 * What this file pins, most expensive regression first:
 *   1. An admin's edit shows on the next read. Every write path that changes cached public data
 *      clears the right tag, and expires it NOW (`expire: 0`), not stale-while-revalidate.
 *   2. Cached reads actually cache: a second read does not touch the database.
 *   3. Dates survive the cache. unstable_cache stores JSON; without the encode/decode step a
 *      `Date` comes back as a string while TypeScript still calls it a Date.
 *   4. Per-visitor and unbounded shapes are never cached: a search, an editor's unpublished view,
 *      an invented category, an invented course URL.
 *   5. Clearing never throws outside a request (seed scripts), so it can never fail an edit.
 *
 * next/cache is replaced by a small in-memory data cache with the same contract: entries keyed by
 * keyParts, tagged, and dropped by revalidateTag. The database is a fake whose rows the tests change.
 */

const h = vi.hoisted(() => {
  const store = new Map<string, { value: unknown; tags: string[] }>();
  const revalidateCalls: { tag: string; profile: unknown }[] = [];
  const state = {
    throwOnRevalidate: false,
    selects: 0,
    lessonsRows: [] as Record<string, unknown>[],
    routeRows: [] as Record<string, unknown>[],
    courseRows: [] as Record<string, unknown>[],
    categoryRows: [] as Record<string, unknown>[],
    catalogRows: [] as Record<string, unknown>[],
    updateReturning: [] as Record<string, unknown>[],
    failUpdate: false,
    writes: [] as string[],
  };
  return { store, revalidateCalls, state };
});

vi.mock("next/cache", () => ({
  unstable_cache:
    (cb: () => Promise<unknown>, keyParts: string[], opts: { tags?: string[] }) =>
    async () => {
      const key = JSON.stringify(keyParts);
      const hit = h.store.get(key);
      if (hit) return JSON.parse(JSON.stringify(hit.value));
      const value = await cb();
      // The real data cache serializes to JSON; so does this one, which is what test 3 relies on.
      h.store.set(key, { value: JSON.parse(JSON.stringify(value)), tags: opts.tags ?? [] });
      return JSON.parse(JSON.stringify(value));
    },
  revalidateTag: (tag: string, profile: unknown) => {
    h.revalidateCalls.push({ tag, profile });
    if (h.state.throwOnRevalidate) throw new Error("Invariant: static generation store missing in revalidateTag");
    for (const [key, entry] of h.store) if (entry.tags.includes(tag)) h.store.delete(key);
  },
}));

// A fake Drizzle: every builder method chains; awaiting the chain answers from h.state by the table
// it touched. Only what these code paths call is modelled.
vi.mock("@/db/client", async () => {
  const schema = await import("@/db/schema");
  type Op = { kind: "select" | "update" | "insert" | "delete"; table?: unknown; joined: boolean };
  const resolve = (op: Op): unknown => {
    const s = h.state;
    if (op.kind === "select") {
      s.selects++;
      if (op.table === schema.lessons) return s.lessonsRows;
      if (op.table === schema.courses && op.joined) return s.routeRows;
      if (op.table === schema.courses) return s.catalogRows.length ? s.catalogRows : s.courseRows;
      if (op.table === schema.courseCategories) return s.categoryRows;
      return [];
    }
    s.writes.push(op.kind);
    if (op.kind === "update" && s.failUpdate) throw new Error("db down");
    return s.updateReturning;
  };
  const chain = (op: Op): unknown => {
    const proxy: unknown = new Proxy(() => {}, {
      get(_t, prop) {
        if (prop === "then") {
          return (ok: (v: unknown) => unknown, bad: (e: unknown) => unknown) =>
            Promise.resolve()
              .then(() => resolve(op))
              .then(ok, bad);
        }
        return (arg: unknown) => {
          if (prop === "from") op.table = arg;
          // The route index inner-joins profiles; the curriculum catalog left-joins categories.
          if (prop === "innerJoin") op.joined = true;
          return proxy;
        };
      },
    });
    return proxy;
  };
  const start = (kind: Op["kind"]) => (table?: unknown) => chain({ kind, table, joined: false });
  return {
    db: { select: start("select"), update: start("update"), insert: start("insert"), delete: start("delete") },
    schema,
  };
});

import { CACHE_TAGS, expireCacheTags, PUBLIC_CACHE_SECONDS } from "@/lib/cache-tags";
import {
  cachedCategories,
  cachedCourseBySlug,
  cachedLessonSummaries,
  cachedListCourses,
  cachedRead,
} from "@/lib/public-cache";
import {
  bumpCourseContentVersion,
  createCourse,
  createModule,
  deleteCourse,
  deleteLesson,
  ensureUsername,
  updateCourse,
  updateLesson,
} from "@/db/queries/authoring";
import { addCategory, deleteCategory } from "@/db/queries/categories-admin";
import { markCoursesAnnounced } from "@/db/queries/announce";
import { setTenantActive } from "@/db/queries/platform-subscriptions";
import { removeDomain, setPrimaryDomain } from "@/db/queries/admin-domains";

const TENANT = "11111111-1111-4111-8111-111111111111";
const COURSE = "22222222-2222-4222-8222-222222222222";
const LESSON = "33333333-3333-4333-8333-333333333333";

const expired = () => h.revalidateCalls.map((c) => c.tag);

beforeEach(() => {
  h.store.clear();
  h.revalidateCalls.length = 0;
  Object.assign(h.state, {
    throwOnRevalidate: false,
    selects: 0,
    lessonsRows: [],
    routeRows: [],
    courseRows: [],
    categoryRows: [],
    catalogRows: [],
    updateReturning: [],
    failUpdate: false,
    writes: [],
  });
});

describe("cache tags", () => {
  it("names one tag per scope, keyed by id", () => {
    expect(CACHE_TAGS.catalog(TENANT)).toBe(`catalog:${TENANT}`);
    expect(CACHE_TAGS.course(COURSE)).toBe(`course:${COURSE}`);
    expect(CACHE_TAGS.tenants).toBe("tenants");
    expect(CACHE_TAGS.profiles).toBe("profiles");
    expect(PUBLIC_CACHE_SECONDS).toBe(3600);
  });

  it("expires immediately (expire: 0), so the next read after an edit is fresh", () => {
    expireCacheTags(["a", "b"]);
    expect(h.revalidateCalls).toEqual([
      { tag: "a", profile: { expire: 0 } },
      { tag: "b", profile: { expire: 0 } },
    ]);
  });

  it("never throws outside a request (seed scripts), and still tries every tag", () => {
    h.state.throwOnRevalidate = true;
    expect(() => expireCacheTags(["a", "b"])).not.toThrow();
    expect(expired()).toEqual(["a", "b"]);
  });
});

describe("cachedRead", () => {
  it("reads the database once, then serves the cache", async () => {
    const fn = vi.fn(async (id: string) => ({ id }));
    const read = cachedRead("t", fn, (id) => [`x:${id}`]);
    expect(await read("a")).toEqual({ id: "a" });
    expect(await read("a")).toEqual({ id: "a" });
    expect(fn).toHaveBeenCalledTimes(1);
    await read("b");
    expect(fn).toHaveBeenCalledTimes(2); // a different argument is a different entry
  });

  it("brings Dates back as Dates, nested in rows and arrays", async () => {
    const when = new Date("2026-10-20T12:00:00.000Z");
    const read = cachedRead("dates", async () => [{ updatedAt: when, nested: { at: when, n: 1 }, none: null }], () => []);
    await read(); // fill
    const [row] = await read(); // from the JSON cache
    expect(row.updatedAt).toBeInstanceOf(Date);
    expect(row.updatedAt.getTime()).toBe(when.getTime());
    expect(row.nested.at).toBeInstanceOf(Date);
    expect(row.nested.n).toBe(1);
    expect(row.none).toBeNull();
  });

  it("is dropped by its tag", async () => {
    const fn = vi.fn(async () => 1);
    const read = cachedRead("tagged", fn, () => ["t1"]);
    await read();
    expireCacheTags(["t1"]);
    await read();
    expect(fn).toHaveBeenCalledTimes(2);
  });
});

describe("lesson content: edits show on the next read", () => {
  const lesson = (title: string) => ({ id: LESSON, courseId: COURSE, title, slug: "one", isPublished: true });

  it("serves cached summaries until a lesson write clears the course", async () => {
    h.state.lessonsRows = [lesson("Old title")];
    expect((await cachedLessonSummaries(COURSE))[0].title).toBe("Old title");

    // The database changes behind the cache's back: still the cached copy, no new query.
    h.state.lessonsRows = [lesson("New title")];
    const before = h.state.selects;
    expect((await cachedLessonSummaries(COURSE))[0].title).toBe("Old title");
    expect(h.state.selects).toBe(before);

    // An in-app edit goes through updateLesson -> bumpCourseContentVersion, which clears the tag.
    h.state.updateReturning = [{ ...lesson("New title"), tenantId: TENANT }];
    await updateLesson(COURSE, LESSON, { title: "New title" });
    expect((await cachedLessonSummaries(COURSE))[0].title).toBe("New title");
  });

  it("every lesson and section write clears the course AND its catalog entry", async () => {
    h.state.updateReturning = [{ tenantId: TENANT, id: LESSON }];
    await updateLesson(COURSE, LESSON, { title: "x" });
    expect(expired()).toEqual([CACHE_TAGS.catalog(TENANT), CACHE_TAGS.course(COURSE)]);

    h.revalidateCalls.length = 0;
    await deleteLesson(COURSE, LESSON);
    expect(expired()).toContain(CACHE_TAGS.course(COURSE));

    h.revalidateCalls.length = 0;
    h.state.updateReturning = [{ id: "m1", tenantId: TENANT }];
    await createModule(COURSE, { title: "Section" });
    expect(expired()).toContain(CACHE_TAGS.course(COURSE));
  });

  it("a failed version bump still clears the course content (the edit happened)", async () => {
    h.state.failUpdate = true;
    await bumpCourseContentVersion(COURSE);
    expect(expired()).toEqual([CACHE_TAGS.course(COURSE)]);
  });
});

describe("course rows: create, update, delete clear catalog + course", () => {
  it("updateCourse", async () => {
    h.state.updateReturning = [{ id: COURSE, tenantId: TENANT }];
    await updateCourse(TENANT, COURSE, { title: "Renamed" });
    expect(expired()).toEqual([CACHE_TAGS.catalog(TENANT), CACHE_TAGS.course(COURSE)]);
  });

  it("updateCourse on a foreign or missing id clears nothing", async () => {
    h.state.updateReturning = [];
    await updateCourse(TENANT, COURSE, { title: "Renamed" });
    expect(expired()).toEqual([]);
  });

  it("createCourse and deleteCourse", async () => {
    h.state.updateReturning = [{ id: COURSE, tenantId: TENANT }];
    await createCourse(TENANT, "user-1", { title: "New course" });
    expect(expired()).toEqual([CACHE_TAGS.catalog(TENANT), CACHE_TAGS.course(COURSE)]);

    h.revalidateCalls.length = 0;
    await deleteCourse(TENANT, COURSE);
    expect(expired()).toEqual([CACHE_TAGS.catalog(TENANT), CACHE_TAGS.course(COURSE)]);
  });

  it("a newly published course appears on the cached catalog after its update", async () => {
    h.state.catalogRows = [{ id: "c-old", title: "Old" }];
    expect(await cachedListCourses(TENANT)).toHaveLength(1);
    h.state.catalogRows = [{ id: "c-old", title: "Old" }, { id: COURSE, title: "New" }];
    expect(await cachedListCourses(TENANT)).toHaveLength(1); // cached
    h.state.updateReturning = [{ id: COURSE, tenantId: TENANT }];
    await updateCourse(TENANT, COURSE, { isPublished: true });
    expect(await cachedListCourses(TENANT)).toHaveLength(2);
  });
});

describe("catalog, profile and tenant writes", () => {
  it("category writes clear the tenant's catalog", async () => {
    h.state.updateReturning = [{ id: "cat-1" }];
    await addCategory(TENANT, "History");
    expect(expired()).toEqual([CACHE_TAGS.catalog(TENANT)]);

    h.revalidateCalls.length = 0;
    h.state.categoryRows = [{ name: "History" }];
    await deleteCategory(TENANT, "cat-1");
    expect(expired()).toEqual([CACHE_TAGS.catalog(TENANT)]);
  });

  it("announce stamps clear the tenant's catalog", async () => {
    h.state.updateReturning = [{ id: COURSE }];
    await markCoursesAnnounced(TENANT, [COURSE], new Date());
    expect(expired()).toEqual([CACHE_TAGS.catalog(TENANT)]);
  });

  it("a new username clears the profiles tag (it is half of every course URL)", async () => {
    await ensureUsername("user-1", "ada@example.com");
    expect(expired()).toEqual([CACHE_TAGS.profiles]);
  });

  it("suspending a school and changing its domains clear the tenant lookup", async () => {
    await setTenantActive(TENANT, false);
    expect(expired()).toEqual([CACHE_TAGS.tenants]);

    h.revalidateCalls.length = 0;
    await removeDomain("dom-1");
    expect(expired()).toEqual([CACHE_TAGS.tenants]);

    h.revalidateCalls.length = 0;
    h.state.catalogRows = [];
    await setPrimaryDomain("dom-1"); // no such domain → returns before writing
    expect(expired()).toEqual([]);
  });
});

describe("what is NOT cached", () => {
  it("a free-text search, an editor's view and an invented category read the database every time", async () => {
    h.state.catalogRows = [{ id: COURSE, title: "A" }];
    h.state.categoryRows = [{ name: "History" }];
    for (const opts of [{ q: "dante" }, { includeUnpublished: true }, { category: "not-a-category" }]) {
      const before = h.state.selects;
      await cachedListCourses(TENANT, opts);
      await cachedListCourses(TENANT, opts);
      // Two direct reads (plus, for the category check, the cached categories read once).
      expect(h.state.selects - before).toBeGreaterThanOrEqual(2);
    }
    const keys = [...h.store.keys()].join("\n");
    expect(keys).not.toContain("dante");
    expect(keys).not.toContain("not-a-category");
  });

  it("a real category is cached", async () => {
    h.state.catalogRows = [{ id: COURSE, title: "A" }];
    h.state.categoryRows = [{ name: "History" }];
    await cachedCategories(TENANT);
    await cachedListCourses(TENANT, { category: "History" });
    const before = h.state.selects;
    await cachedListCourses(TENANT, { category: "History" });
    expect(h.state.selects).toBe(before);
  });

  it("an invented course URL resolves to null without adding a cache entry for that URL", async () => {
    h.state.routeRows = [{ id: COURSE, username: "Ada", slug: "intro" }];
    h.state.courseRows = [{ id: COURSE, tenantId: TENANT, title: "Intro" }];

    // citext username: case-insensitive, like the SQL it replaces. Slug: exact.
    expect(await cachedCourseBySlug(TENANT, "ada", "intro")).toMatchObject({ id: COURSE });
    expect(await cachedCourseBySlug(TENANT, "ada", "INTRO")).toBeNull();

    const entries = h.store.size;
    expect(await cachedCourseBySlug(TENANT, "wp-admin", "setup.php")).toBeNull();
    expect(h.store.size).toBe(entries);
    expect([...h.store.keys()].join("\n")).not.toContain("wp-admin");
  });
});

describe("per-user data never enters the shared cache", () => {
  it("public-cache imports no session, progress, enrollment, notes, attempt or auditor module", async () => {
    const { readFileSync } = await import("node:fs");
    const src = readFileSync(new URL("../src/lib/public-cache.ts", import.meta.url), "utf8");
    const imports = [...src.matchAll(/from "([^"]+)"/g)].map((m) => m[1]);
    for (const forbidden of [
      "@/lib/session",
      "@/lib/auth",
      "@/lib/active-learner",
      "@/db/queries/progress",
      "@/db/queries/enrollment",
      "@/db/queries/notes",
      "@/db/queries/quiz-attempts",
      "@/db/queries/recall",
      "@/db/queries/course-auditors",
      "@/db/queries/dashboard",
      "@/db/queries/promotions",
      "next/headers",
    ]) {
      expect(imports).not.toContain(forbidden);
    }
  });

  it("loadCourseView still reads the viewer's own state fresh, outside the cache", async () => {
    const { readFileSync } = await import("node:fs");
    const src = readFileSync(new URL("../src/lib/course-access.ts", import.meta.url), "utf8");
    expect(src).toContain("getCourseProgressSummary(learner.id, course.id)");
    expect(src).toContain("checkEnrolled(learner.id, course.id)");
    expect(src).not.toMatch(/cached\w*\(\s*(learner|session)/);
  });
});
