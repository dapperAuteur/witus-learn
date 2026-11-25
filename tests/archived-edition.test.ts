import { describe, expect, it } from "vitest";
import { PgDialect } from "drizzle-orm/pg-core";
import {
  DEFAULT_ARCHIVED_REASON_TEMPLATE,
  archivedEnrollmentMessage,
  archivedSlug,
  defaultArchivedReason,
  isArchived,
  splitSeriesEditions,
} from "@/lib/archived-edition";
import { archivedCondition } from "@/db/queries/catalog";
import { includeInSitemap } from "@/lib/vetting";
import { parseArchiveArgs } from "../scripts/archive-course";

// Archived editions (plans/101 section 5, approved 2026-11-25). What "archived" means to every
// surface, pinned without a database: the label text word for word, the slug rule, the catalog
// predicate the default listing and the counts rely on, the sitemap rule, and the series split.

const PLAN_101_LABEL =
  "Archived edition. This course was built before Learn.WitUS adopted its course method (sources approved before writing, every claim checked, standards per lesson). It stays readable for learners who enrolled, but it is no longer maintained. The replacement is <title>, built from an approved sources packet on <date>.";

describe("the default label", () => {
  it("is plan 101 section 5's text, word for word", () => {
    expect(DEFAULT_ARCHIVED_REASON_TEMPLATE).toBe(PLAN_101_LABEL);
  });

  it("fills the two placeholders with the replacement's title and the calendar date", () => {
    const text = defaultArchivedReason({
      replacementTitle: "US Civics 101",
      date: new Date("2026-11-25T23:30:00Z"),
    });
    expect(text).toBe(PLAN_101_LABEL.replace("<title>", "US Civics 101").replace("<date>", "2026-11-25"));
    expect(text).not.toContain("<title>");
    expect(text).not.toContain("<date>");
  });
});

describe("isArchived", () => {
  it("is archived_at alone: the reason and the replacement are details, not conditions", () => {
    expect(isArchived({ archivedAt: null })).toBe(false);
    expect(isArchived({ archivedAt: undefined })).toBe(false);
    expect(isArchived({ archivedAt: new Date("2026-11-25") })).toBe(true);
    // Rows that came through the JSON cache carry the date as a string.
    expect(isArchived({ archivedAt: "2026-11-25T00:00:00.000Z" })).toBe(true);
  });
});

describe("slug rule (a)", () => {
  it("moves the old course to <slug>-archived-<year>, year from the clock in UTC", () => {
    expect(archivedSlug("us-civics-101", new Date("2026-11-25T12:00:00Z"))).toBe("us-civics-101-archived-2026");
    expect(archivedSlug("tea", new Date("2027-01-01T00:30:00Z"))).toBe("tea-archived-2027");
  });
});

describe("the enrollment refusal message", () => {
  it("names the replacement when there is one", () => {
    expect(archivedEnrollmentMessage("US Civics 101")).toBe(
      "This is an archived edition and takes no new enrollments. Take US Civics 101 instead.",
    );
  });
  it("stands on its own when the replacement is unknown", () => {
    expect(archivedEnrollmentMessage(null)).toBe("This is an archived edition and takes no new enrollments.");
    expect(archivedEnrollmentMessage(undefined)).toBe("This is an archived edition and takes no new enrollments.");
  });
});

describe("catalog predicate", () => {
  const render = (opts: Parameters<typeof archivedCondition>[0]) => {
    const cond = archivedCondition(opts);
    return cond ? new PgDialect().sqlToQuery(cond).sql : null;
  };

  it("excludes archived editions from the default (public) listing and so from the counts", () => {
    expect(render({})).toBe('"courses"."archived_at" is null');
  });

  it("lists only archived editions for the catalog's archived filter", () => {
    expect(render({ archived: "only" })).toBe('"courses"."archived_at" is not null');
  });

  it("includes archived editions for owner and instructor tooling, by request or implied by includeUnpublished", () => {
    expect(render({ archived: "include" })).toBeNull();
    expect(render({ includeUnpublished: true })).toBeNull();
  });

  it("lets a caller that sees unpublished courses still ask for the public shape", () => {
    expect(render({ includeUnpublished: true, archived: "exclude" })).toBe('"courses"."archived_at" is null');
  });
});

describe("sitemap", () => {
  const live = { isPublished: true, visibility: "public", slug: "tea" };
  it("leaves an archived edition out, and keeps everything else as before", () => {
    expect(includeInSitemap(live)).toBe(true);
    expect(includeInSitemap({ ...live, archivedAt: null })).toBe(true);
    expect(includeInSitemap({ ...live, archivedAt: new Date("2026-11-25") })).toBe(false);
  });
});

describe("series placement", () => {
  it("partitions a series into the current path and the earlier editions, keeping order", () => {
    const rows = [
      { id: "a", archivedAt: null },
      { id: "b", archivedAt: new Date("2026-11-25") },
      { id: "c", archivedAt: null },
    ];
    const { current, earlier } = splitSeriesEditions(rows);
    expect(current.map((r) => r.id)).toEqual(["a", "c"]);
    expect(earlier.map((r) => r.id)).toEqual(["b"]);
  });
});

describe("the CLI's flags", () => {
  it("reads --old, --new, --reason-file, --tenant and --dry-run", () => {
    expect(parseArchiveArgs(["--old", "tea", "--new", "tea-v2", "--dry-run"])).toEqual({
      oldSlug: "tea",
      newSlug: "tea-v2",
      reasonFile: null,
      tenantSlug: "learn-witus",
      dryRun: true,
    });
    expect(parseArchiveArgs(["--old", "tea", "--new", "tea-v2", "--reason-file", "r.md", "--tenant", "acme-academy"])).toEqual({
      oldSlug: "tea",
      newSlug: "tea-v2",
      reasonFile: "r.md",
      tenantSlug: "acme-academy",
      dryRun: false,
    });
  });

  it("refuses a missing or shared slug, a flag without a value, and an unknown flag", () => {
    expect(() => parseArchiveArgs(["--old", "tea"])).toThrow(/--new/);
    expect(() => parseArchiveArgs(["--old", "tea", "--new", "tea"])).toThrow(/different/);
    expect(() => parseArchiveArgs(["--old", "--new", "x"])).toThrow(/needs a value/);
    expect(() => parseArchiveArgs(["--old", "a", "--new", "b", "--force"])).toThrow(/Unknown argument/);
  });
});
