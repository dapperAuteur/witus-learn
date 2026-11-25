import { describe, expect, it } from "vitest";
import {
  archiveCourse,
  ArchiveRefusal,
  type ArchiveCourseRow,
  type ArchiveRunner,
  type ArchiveStore,
  type ArchiveWrite,
} from "@/lib/archive-course";
import { DEFAULT_ARCHIVED_REASON_TEMPLATE } from "@/lib/archived-edition";

// The archive operation (plans/101 section 5, slug rule (a)) against an in-memory store that stands
// in for one Drizzle transaction: every refusal writes nothing, a dry run writes nothing, and the
// real run makes exactly the two writes in the order the unique slug index needs.

const TENANT = "11111111-1111-1111-1111-111111111111";
const OTHER_TENANT = "22222222-2222-2222-2222-222222222222";
const NOW = new Date("2026-11-25T15:00:00Z");

function row(over: Partial<ArchiveCourseRow> & { id: string; slug: string }): ArchiveCourseRow {
  return { tenantId: TENANT, title: `Course ${over.id}`, archivedAt: null, ...over };
}

/** A store over an array, plus a transaction log, plus a runner that rolls the array back when the
 *  body throws (what a real transaction does). */
function fake(rows: ArchiveCourseRow[]) {
  const writes: { id: string; patch: ArchiveWrite }[] = [];
  let transactions = 0;
  const store: ArchiveStore = {
    async findBySlug(tenantId, slug) {
      return rows.filter((r) => r.tenantId === tenantId && r.slug === slug);
    },
    async update(id, patch) {
      writes.push({ id, patch });
      const r = rows.find((x) => x.id === id);
      if (!r) throw new Error(`no row ${id}`);
      if (patch.slug !== undefined) r.slug = patch.slug;
      if (patch.archivedAt !== undefined) r.archivedAt = patch.archivedAt;
    },
  };
  const run: ArchiveRunner = async (fn) => {
    transactions++;
    const snapshot = rows.map((r) => ({ ...r }));
    try {
      return await fn(store);
    } catch (err) {
      rows.splice(0, rows.length, ...snapshot);
      throw err;
    }
  };
  return { rows, writes, run, transactions: () => transactions };
}

const refusal = async (p: Promise<unknown>) => {
  try {
    await p;
  } catch (err) {
    expect(err).toBeInstanceOf(ArchiveRefusal);
    return (err as ArchiveRefusal).code;
  }
  throw new Error("expected a refusal");
};

describe("archiveCourse refuses, and writes nothing, when", () => {
  it("the new slug does not exist in the tenant", async () => {
    const f = fake([row({ id: "old", slug: "tea" })]);
    expect(await refusal(archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW }))).toBe(
      "new-not-found",
    );
    expect(f.writes).toEqual([]);
  });

  it("the new slug exists only on another tenant (a foreign course is not a replacement)", async () => {
    const f = fake([row({ id: "old", slug: "tea" }), row({ id: "foreign", slug: "tea-v2", tenantId: OTHER_TENANT })]);
    expect(await refusal(archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW }))).toBe(
      "new-not-found",
    );
    expect(f.writes).toEqual([]);
  });

  it("the old slug does not exist", async () => {
    const f = fake([row({ id: "new", slug: "tea-v2" })]);
    expect(await refusal(archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW }))).toBe(
      "old-not-found",
    );
    expect(f.writes).toEqual([]);
  });

  it("the old course is already archived", async () => {
    const f = fake([
      row({ id: "old", slug: "tea", archivedAt: new Date("2026-01-01") }),
      row({ id: "new", slug: "tea-v2" }),
    ]);
    expect(await refusal(archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW }))).toBe(
      "already-archived",
    );
    expect(f.writes).toEqual([]);
  });

  it("the replacement is itself archived", async () => {
    const f = fake([row({ id: "old", slug: "tea" }), row({ id: "new", slug: "tea-v2", archivedAt: new Date("2026-01-01") })]);
    expect(await refusal(archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW }))).toBe(
      "new-is-archived",
    );
    expect(f.writes).toEqual([]);
  });

  it("the target slug <slug>-archived-<year> is taken", async () => {
    const f = fake([
      row({ id: "old", slug: "tea" }),
      row({ id: "new", slug: "tea-v2" }),
      row({ id: "squatter", slug: "tea-archived-2026" }),
    ]);
    expect(await refusal(archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW }))).toBe(
      "target-slug-taken",
    );
    expect(f.writes).toEqual([]);
  });

  it("either slug names two courses (two instructors sharing it)", async () => {
    const f = fake([row({ id: "old-a", slug: "tea" }), row({ id: "old-b", slug: "tea" }), row({ id: "new", slug: "tea-v2" })]);
    expect(await refusal(archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW }))).toBe(
      "old-ambiguous",
    );
    expect(f.writes).toEqual([]);
  });

  it("both slugs name the same course", async () => {
    const f = fake([row({ id: "old", slug: "tea" })]);
    expect(await refusal(archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: " tea ", now: NOW }))).toBe(
      "same-course",
    );
    expect(f.writes).toEqual([]);
  });

  it("a reason file was given but is empty", async () => {
    const f = fake([row({ id: "old", slug: "tea" }), row({ id: "new", slug: "tea-v2" })]);
    expect(
      await refusal(archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW, reason: "  \n" })),
    ).toBe("reason-empty");
    expect(f.writes).toEqual([]);
  });
});

describe("archiveCourse, the real run", () => {
  it("makes the two writes in one transaction, old first so the canonical slug is free for the new", async () => {
    const f = fake([row({ id: "old", slug: "tea", title: "Tea" }), row({ id: "new", slug: "tea-v2", title: "Tea, second edition" })]);
    const plan = await archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW });

    expect(f.transactions()).toBe(1);
    expect(f.writes.map((w) => w.id)).toEqual(["old", "new"]);
    expect(f.writes[0].patch).toEqual({
      slug: "tea-archived-2026",
      archivedAt: NOW,
      archivedReason: DEFAULT_ARCHIVED_REASON_TEMPLATE.replace("<title>", "Tea, second edition").replace("<date>", "2026-11-25"),
      supersededByCourseId: "new",
      updatedAt: NOW,
    });
    expect(f.writes[1].patch).toEqual({ slug: "tea", updatedAt: NOW });

    expect(plan.written).toBe(true);
    expect(plan.old).toEqual({ id: "old", title: "Tea", slugBefore: "tea", slugAfter: "tea-archived-2026" });
    expect(plan.replacement).toEqual({ id: "new", title: "Tea, second edition", slugBefore: "tea-v2", slugAfter: "tea" });

    // The rows afterwards: the replacement owns the canonical slug, the old course the archived one.
    expect(f.rows.find((r) => r.id === "new")?.slug).toBe("tea");
    expect(f.rows.find((r) => r.id === "old")?.slug).toBe("tea-archived-2026");
  });

  it("uses the reason given, as given", async () => {
    const f = fake([row({ id: "old", slug: "tea" }), row({ id: "new", slug: "tea-v2" })]);
    const plan = await archiveCourse(f.run, {
      tenantId: TENANT,
      oldSlug: "tea",
      newSlug: "tea-v2",
      now: NOW,
      reason: "Replaced after the 2026 review.\nSee the new edition.",
    });
    expect(plan.reason).toBe("Replaced after the 2026 review.\nSee the new edition.");
    expect(f.writes[0].patch.archivedReason).toBe(plan.reason);
  });

  it("a dry run decides everything and writes nothing", async () => {
    const f = fake([row({ id: "old", slug: "tea" }), row({ id: "new", slug: "tea-v2" })]);
    const plan = await archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW, dryRun: true });
    expect(plan.written).toBe(false);
    expect(plan.old.slugAfter).toBe("tea-archived-2026");
    expect(plan.replacement.slugAfter).toBe("tea");
    expect(f.writes).toEqual([]);
    expect(f.rows.find((r) => r.id === "old")?.slug).toBe("tea");
  });

  it("a second run on the same pair is refused: the old course is archived and the slugs have moved", async () => {
    const f = fake([row({ id: "old", slug: "tea" }), row({ id: "new", slug: "tea-v2" })]);
    await archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW });
    // By the old slugs: "tea" is now the replacement and "tea-v2" is gone.
    expect(await refusal(archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea", newSlug: "tea-v2", now: NOW }))).toBe(
      "new-not-found",
    );
    // By the new slugs: the archived course cannot be archived again.
    expect(
      await refusal(archiveCourse(f.run, { tenantId: TENANT, oldSlug: "tea-archived-2026", newSlug: "tea", now: NOW })),
    ).toBe("already-archived");
    expect(f.writes).toHaveLength(2);
  });
});
