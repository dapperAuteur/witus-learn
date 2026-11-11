import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// Account settings against a real database (BAM, 2026-11-10). Skipped offline like the other .db suites,
// and skipped where migration 0082 has not run yet. Everything here happens inside a transaction that is
// rolled back, so a run leaves no rows behind and never keeps a changed address.
const HAS_DB = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("placeholder");
const ROOT = join(import.meta.dirname, "../..");

class Rollback extends Error {}

async function inRolledBackTx(fn: (tx: Parameters<Parameters<(typeof import("@/db/client"))["db"]["transaction"]>[0]>[0]) => Promise<void>) {
  const { db } = await import("@/db/client");
  try {
    await db.transaction(async (tx) => {
      await fn(tx);
      throw new Rollback();
    });
  } catch (err) {
    if (!(err instanceof Rollback)) throw err;
  }
}

describe.skipIf(!HAS_DB)("migration 0083 and the account change log, on a real database", () => {
  it("moves the five accounts by username, skips an address another account holds, logs each change, and is a no-op on re-run", async () => {
    const { sql } = await import("drizzle-orm");
    const { db } = await import("@/db/client");
    const ready = await db.execute(sql`select to_regclass('public.account_changes') is not null as ok`);
    if (!(ready.rows[0] as { ok: boolean }).ok) return; // migration 0082 not applied on this database yet
    const migration = readFileSync(join(ROOT, "src/db/migrations/0083_awews_faculty_emails.sql"), "utf8");
    const stamp = Date.now();
    const usernames = ["emba-faculty", "witus-faculty", "witus-health", "witus-languages", "trade-faculty"];
    await inRolledBackTx(async (tx) => {
      // Any real rows with these usernames step aside for the length of the transaction.
      await tx.execute(sql`update user_profiles set username = username || ${`-aside-${stamp}`} where username = any(${usernames})`);
      // An existing holder of a target address (trade-faculty's) must be left alone.
      const domainAddr = (lp: string) => `${lp}@${["awews", "com"].join(".")}`;
      await tx.execute(sql`update users set email = email || ${`.aside-${stamp}`} where lower(email) = any(${["faculty", "learn-faculty", "health-faculty", "languages", "trade-faculty"].map(domainAddr)})`);
      for (const u of usernames) {
        await tx.execute(sql`insert into users (id, email, name) values (${`iso-acct-${u}-${stamp}`}, ${`iso-acct-${u}-${stamp}@isolation.test`}, ${u})`);
        await tx.execute(sql`insert into user_profiles (user_id, username) values (${`iso-acct-${u}-${stamp}`}, ${u})`);
      }
      await tx.execute(sql`insert into users (id, email, name) values (${`iso-acct-squatter-${stamp}`}, ${domainAddr("trade-faculty")}, 'squatter')`);

      await tx.execute(sql.raw(migration));
      const after = await tx.execute(sql`select p.username, split_part(u.email, '@', 1) as lp from users u join user_profiles p on p.user_id = u.id where p.username = any(${usernames}) order by p.username`);
      expect(Object.fromEntries((after.rows as { username: string; lp: string }[]).map((r) => [r.username, r.lp]))).toEqual({
        "emba-faculty": "faculty",
        "trade-faculty": `iso-acct-trade-faculty-${stamp}`,
        "witus-faculty": "learn-faculty",
        "witus-health": "health-faculty",
        "witus-languages": "languages",
      });
      const logged = await tx.execute(sql`select count(*)::int as n from account_changes where actor_role = 'migration' and user_id like ${`iso-acct-%-${stamp}`}`);
      expect((logged.rows[0] as { n: number }).n).toBe(4);

      await tx.execute(sql.raw(migration));
      const again = await tx.execute(sql`select count(*)::int as n from account_changes where actor_role = 'migration' and user_id like ${`iso-acct-%-${stamp}`}`);
      expect((again.rows[0] as { n: number }).n).toBe(4);
    });
  });
});
