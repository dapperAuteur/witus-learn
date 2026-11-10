import { describe, expect, it } from "vitest";
import { memberSearchPattern } from "@/db/queries/school-members";

// The Users page search (BAM, 2026-11-10). The query itself is tenant-scoped and exercised against
// a database in tests/isolation/school-members.db.test.ts.

describe("memberSearchPattern", () => {
  it("wraps a trimmed, lower-cased term in wildcards", () => {
    expect(memberSearchPattern("  Rivera ")).toBe("%rivera%");
  });

  it("is null for an empty search, so the list is not filtered", () => {
    expect(memberSearchPattern("")).toBeNull();
    expect(memberSearchPattern("   ")).toBeNull();
    expect(memberSearchPattern(null)).toBeNull();
    expect(memberSearchPattern(undefined)).toBeNull();
  });

  it("strips the LIKE metacharacters a visitor could type", () => {
    expect(memberSearchPattern("%_\\a")).toBe("%a%");
  });
});
