import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Migration 0083 (BAM, 2026-11-10): role mailboxes for the five synthetic faculty accounts. The SQL is
 * run for real against a database in tests/isolation/account-settings.db.test.ts (inside a transaction
 * that is rolled back); these checks pin the properties that make it safe to run on production:
 * keyed by username, a no-op on re-run, never taking an address another account holds, never touching
 * the platform owner, and logging every change.
 */

const ROOT = join(import.meta.dirname, "..");
const SQL = readFileSync(join(ROOT, "src/db/migrations/0083_awews_faculty_emails.sql"), "utf8");
const code = SQL.split("\n")
  .filter((l) => !l.trim().startsWith("--"))
  .join("\n");

describe("0083_awews_faculty_emails", () => {
  it("maps exactly the five usernames to five distinct local parts, ElementaryMBA's faculty account to faculty@", () => {
    const pairs = [...code.matchAll(/\('([a-z-]+)',\s*'([a-z-]+)@[a-z.]+'\)/g)].map((m) => [m[1], m[2]]);
    expect(Object.fromEntries(pairs)).toEqual({
      "emba-faculty": "faculty",
      "witus-faculty": "learn-faculty",
      "witus-health": "health-faculty",
      "witus-languages": "languages",
      "trade-faculty": "trade-faculty",
    });
    expect(new Set(pairs.map((p) => p[1])).size).toBe(5);
  });

  it("finds each account by username (citext), never by its current address", () => {
    expect(code).toMatch(/JOIN user_profiles p ON p\.username = t\.username::citext/);
    expect(code).not.toMatch(/WHERE\s+u\.email\s*=/i);
  });

  it("is a no-op on re-run, skips an address another account holds, and never touches the platform owner", () => {
    expect(code).toMatch(/u\.email IS DISTINCT FROM t\.new_email/);
    expect(code).toMatch(/NOT EXISTS \(SELECT 1 FROM users o WHERE lower\(o\.email\) = lower\(t\.new_email\) AND o\.id <> u\.id\)/);
    expect(code).toMatch(/p\.is_platform_owner = false/);
  });

  it("logs every change in account_changes as the migration, old and new address", () => {
    expect(code).toMatch(/INSERT INTO account_changes \(user_id, actor_role, field, from_value, to_value\)\s*SELECT user_id, 'migration', 'email', old_email, new_email FROM changed/);
  });

  it("runs after the migration that creates account_changes", () => {
    const journal = JSON.parse(readFileSync(join(ROOT, "src/db/migrations/meta/_journal.json"), "utf8")) as { entries: { tag: string }[] };
    const tags = journal.entries.map((e) => e.tag);
    expect(tags.indexOf("0083_awews_faculty_emails")).toBe(tags.indexOf("0082_account_settings") + 1);
  });
});
