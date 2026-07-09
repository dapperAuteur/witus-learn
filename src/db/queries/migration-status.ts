import "server-only";
import { sql } from "drizzle-orm";
import { db } from "@/db/client";
import journal from "@/db/migrations/meta/_journal.json";

// Operator signal: is THIS database's migration bookkeeping table caught up with the
// migrations checked into ./src/db/migrations? Answers the recurring "did
// `pnpm db:migrate:prod` actually run?" question from the admin UI instead of a support ping.
//
// On-disk count comes from the drizzle-kit journal (the same manifest `drizzle-orm`'s migrator
// reads) via a static JSON import — bundled at build time, so it works in the serverless
// runtime with no filesystem access. Applied count comes from `drizzle.__drizzle_migrations`,
// the bookkeeping table `scripts/migrate.ts` writes to via drizzle's default migrator config
// (default schema "drizzle", default table "__drizzle_migrations" — see
// drizzle-orm/pg-core/dialect.js). If that table can't be read (fresh/unmigrated DB, missing
// grants, etc.) we degrade gracefully rather than let the page crash.

export interface MigrationStatus {
  /** Number of migrations checked into src/db/migrations (source of truth). */
  onDisk: number;
  /** Tag of the newest migration on disk, e.g. "0033_certain_slayback". */
  latestOnDisk: string | null;
  /** Number of rows in drizzle.__drizzle_migrations for the CURRENT database, or null if unreadable. */
  applied: number | null;
  /** applied >= onDisk, or null when `applied` is unknown. */
  upToDate: boolean | null;
  /** Set only when `applied` could not be determined. */
  error?: string;
}

export async function getMigrationStatus(): Promise<MigrationStatus> {
  const entries = (journal as { entries: { tag: string }[] }).entries ?? [];
  const onDisk = entries.length;
  const latestOnDisk = entries.length > 0 ? entries[entries.length - 1].tag : null;

  try {
    const result = await db.execute(sql`select count(*)::int as count from drizzle.__drizzle_migrations`);
    const row = result.rows?.[0] as { count: number } | undefined;
    const applied = Number(row?.count ?? 0);
    return { onDisk, latestOnDisk, applied, upToDate: applied >= onDisk };
  } catch (err) {
    return {
      onDisk,
      latestOnDisk,
      applied: null,
      upToDate: null,
      error: err instanceof Error ? err.message : "Could not read the migration bookkeeping table.",
    };
  }
}
