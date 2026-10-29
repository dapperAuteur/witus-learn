import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Every course is BORN private and unpublished (src/lib/course-visibility.ts, BAM 2026-10-28):
 *
 *   1. the in-app creator (createCourse) inserts NEW_COURSE_STATE;
 *   2. the seeder (seedAuthoredCourse, which the private pipeline also uses) inserts it whatever the
 *      registration says, and a RE-SEED of an existing row never touches visibility or publishing;
 *   3. a guard: every file that inserts into `courses` spreads NEW_COURSE_STATE, so a new insert path
 *      cannot quietly create a public course;
 *   4. the schema default itself is private (migration 0070 changes the default, not any row).
 */

const rec = vi.hoisted(() => ({ inserted: [] as Array<Record<string, unknown>>, updated: [] as Array<Record<string, unknown>>, existing: [] as Array<{ id: string }> }));

/** A chainable stand-in for a drizzle db: records insert values and update sets, resolves reads to `existing`. */
function fakeDb(): unknown {
  const chain = (result: unknown): unknown =>
    new Proxy(function () {}, {
      get(_t, prop) {
        if (prop === "then") return (res: (v: unknown) => void) => res(result);
        if (prop === "values") return (v: Record<string, unknown> | Array<Record<string, unknown>>) => {
          if (!Array.isArray(v)) rec.inserted.push(v);
          return chain([{ id: "new-id", ...(Array.isArray(v) ? {} : v) }]);
        };
        if (prop === "set") return (v: Record<string, unknown>) => { rec.updated.push(v); return chain([]); };
        return () => chain(result);
      },
    });
  return {
    select: () => chain(rec.existing),
    insert: () => chain([{ id: "new-id" }]),
    update: () => chain([]),
    delete: () => chain([]),
  };
}

vi.mock("@/db/client", () => ({ db: fakeDb() }));
vi.mock("@/lib/cache-tags", () => ({ expireCourse: vi.fn(), expireCacheTags: vi.fn(), expireProfiles: vi.fn(), CACHE_TAGS: {} }));

import { createCourse } from "@/db/queries/authoring";
import { seedAuthoredCourse } from "../scripts/lib/seed-authored-course";
import { courses } from "@/db/schema";

const COURSE = { title: "A Course", description: "About it.", lessons: [] };

beforeEach(() => {
  rec.inserted.length = 0;
  rec.updated.length = 0;
  rec.existing = [];
});

describe("createCourse (the in-app course creator)", () => {
  it("inserts the course private and unpublished", async () => {
    await createCourse("tenant-1", "teacher-1", { title: "My New Course" });
    expect(rec.inserted).toHaveLength(1);
    expect(rec.inserted[0]).toMatchObject({ visibility: "private", isPublished: false, publishedAt: null });
  });
});

describe("seedAuthoredCourse (seeder registrations and the private pipeline)", () => {
  type Db = Parameters<typeof seedAuthoredCourse>[0];

  it("inserts a registration with no visibility as private and unpublished", async () => {
    await seedAuthoredCourse(fakeDb() as Db, { tenantId: "t", instructorId: "i", slug: "new-one", course: COURSE });
    const course = rec.inserted.find((r) => r.slug === "new-one");
    expect(course).toMatchObject({ visibility: "private", isPublished: false, publishedAt: null });
  });

  it("keeps the hold reason a private registration carries", async () => {
    await seedAuthoredCourse(fakeDb() as Db, { tenantId: "t", instructorId: "i", slug: "held", course: COURSE, visibility: "private", publishHoldReason: "Private study copy." });
    expect(rec.inserted.find((r) => r.slug === "held")).toMatchObject({ visibility: "private", isPublished: false, publishHoldReason: "Private study copy." });
  });

  it("never touches visibility or publishing on a re-seed of an existing course (insert-only)", async () => {
    rec.existing = [{ id: "existing-id" }];
    await seedAuthoredCourse(fakeDb() as Db, { tenantId: "t", instructorId: "i", slug: "already-public", course: COURSE });
    expect(rec.inserted.find((r) => r.slug === "already-public")).toBeUndefined();
    for (const set of rec.updated) {
      expect(set).not.toHaveProperty("visibility");
      expect(set).not.toHaveProperty("isPublished");
      expect(set).not.toHaveProperty("publishedAt");
    }
  });
});

describe("guard: every insert into courses is born private", () => {
  const ROOT = join(import.meta.dirname, "..");
  function walk(dir: string, out: string[] = []): string[] {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) {
        if (name !== "node_modules" && name !== "data") walk(p, out);
      } else if (/\.(ts|tsx)$/.test(name)) out.push(p);
    }
    return out;
  }

  it("each src/ or scripts/ file that inserts a course row spreads NEW_COURSE_STATE", () => {
    const files = [...walk(join(ROOT, "src")), ...walk(join(ROOT, "scripts"))];
    const inserting = files.filter((f) => /\.insert\((schema\.)?courses\)/.test(readFileSync(f, "utf8")));
    expect(inserting.length).toBeGreaterThanOrEqual(4);
    const missing = inserting.filter((f) => !readFileSync(f, "utf8").includes("...NEW_COURSE_STATE")).map((f) => relative(ROOT, f));
    expect(missing).toEqual([]);
  });

  it("the column default is private too, for any insert that sets nothing", () => {
    expect(courses.visibility.default).toBe("private");
    expect(courses.isPublished.default).toBe(false);
  });
});
