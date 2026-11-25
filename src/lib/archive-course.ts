// The archive operation (plans/101 section 5, slug rule (a), approved 2026-11-25): one transaction
// that turns the old course into an archived edition and hands its canonical slug to the replacement.
//
//   old course: slug <slug>  ->  <slug>-archived-<year>, archived_at, archived_reason, superseded_by
//   new course: slug <temporary>  ->  <slug>
//
// Two callers share it: scripts/archive-course.ts (the operator's CLI, run from the laptop against
// production) and POST /api/courses/[id]/archive (the owner's control on /teach). Both hand in a
// runner that opens the transaction, so the decision logic here is tested against an in-memory store
// and the Drizzle wiring stays a few lines. Reads and writes go through ArchiveStore only.
//
// Kept free of `@/` imports and of src/db/client: the CLI runs under tsx with its own connection and
// no app env. What "archived" means to readers lives in ./archived-edition.ts.

import { and, eq } from "drizzle-orm";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";
import * as schema from "../db/schema";
import { archivedSlug, defaultArchivedReason } from "./archived-edition";

/** The columns the operation reads. A subset of `courses`, so a test can build rows by hand. */
export interface ArchiveCourseRow {
  id: string;
  tenantId: string;
  title: string;
  slug: string | null;
  archivedAt: Date | null;
}

export interface ArchiveWrite {
  slug?: string;
  archivedAt?: Date;
  archivedReason?: string;
  supersededByCourseId?: string;
  updatedAt: Date;
}

export interface ArchiveStore {
  /** Every course in the tenant with exactly this slug: 0, 1, or more (slugs are unique per
   *  instructor within a tenant, not per tenant, so two instructors may share one). */
  findBySlug(tenantId: string, slug: string): Promise<ArchiveCourseRow[]>;
  update(id: string, patch: ArchiveWrite): Promise<void>;
}

/** Opens the transaction and runs `fn` inside it with a store bound to that transaction. */
export type ArchiveRunner = <T>(fn: (store: ArchiveStore) => Promise<T>) => Promise<T>;

export interface ArchiveCourseInput {
  tenantId: string;
  /** The course being archived, by its current (canonical) slug. */
  oldSlug: string;
  /** The replacement, by its current slug. It takes `oldSlug` when the operation completes. */
  newSlug: string;
  /** The banner text. Empty or omitted = the default label from plan 101 section 5, with the
   *  replacement's title and today's date filled in. */
  reason?: string | null;
  now?: Date;
  /** Decide and report, write nothing. */
  dryRun?: boolean;
}

export type ArchiveRefusalCode =
  | "old-not-found"
  | "old-ambiguous"
  | "new-not-found"
  | "new-ambiguous"
  | "same-course"
  | "already-archived"
  | "new-is-archived"
  | "target-slug-taken"
  | "reason-empty";

/** Why the operation would not run. Thrown inside the transaction, so nothing is written. */
export class ArchiveRefusal extends Error {
  readonly code: ArchiveRefusalCode;
  constructor(code: ArchiveRefusalCode, message: string) {
    super(message);
    this.name = "ArchiveRefusal";
    this.code = code;
  }
}

export interface ArchivePlan {
  tenantId: string;
  archivedAt: Date;
  reason: string;
  old: { id: string; title: string; slugBefore: string; slugAfter: string };
  replacement: { id: string; title: string; slugBefore: string; slugAfter: string };
  /** False on a dry run: the plan was computed and nothing was written. */
  written: boolean;
}

/**
 * Archive `oldSlug` in favour of `newSlug`, inside one transaction. Throws ArchiveRefusal (and writes
 * nothing) when the replacement does not exist, the old course is already archived, the target slug
 * is taken, either slug is ambiguous in the tenant, or both name the same course.
 */
export async function archiveCourse(run: ArchiveRunner, input: ArchiveCourseInput): Promise<ArchivePlan> {
  const now = input.now ?? new Date();
  const oldSlug = input.oldSlug.trim();
  const newSlug = input.newSlug.trim();
  return run(async (store) => {
    const old = await one(store, input.tenantId, oldSlug, "old");
    const replacement = await one(store, input.tenantId, newSlug, "new");
    if (old.id === replacement.id) {
      throw new ArchiveRefusal("same-course", `--old and --new both name ${old.title} (${old.id}).`);
    }
    if (old.archivedAt) {
      throw new ArchiveRefusal(
        "already-archived",
        `${old.title} (${oldSlug}) is already archived (${old.archivedAt.toISOString()}).`,
      );
    }
    if (replacement.archivedAt) {
      throw new ArchiveRefusal("new-is-archived", `${replacement.title} (${newSlug}) is itself archived.`);
    }
    const target = archivedSlug(oldSlug, now);
    if ((await store.findBySlug(input.tenantId, target)).length > 0) {
      throw new ArchiveRefusal("target-slug-taken", `The slug ${target} is already taken in this tenant.`);
    }
    const given = input.reason?.trim() ?? "";
    if (input.reason != null && given === "") {
      throw new ArchiveRefusal("reason-empty", "The reason given is empty. Omit it to use the default label.");
    }
    const reason = given || defaultArchivedReason({ replacementTitle: replacement.title, date: now });

    const plan: ArchivePlan = {
      tenantId: input.tenantId,
      archivedAt: now,
      reason,
      old: { id: old.id, title: old.title, slugBefore: oldSlug, slugAfter: target },
      replacement: { id: replacement.id, title: replacement.title, slugBefore: newSlug, slugAfter: oldSlug },
      written: false,
    };
    if (input.dryRun) return plan;

    // Free the canonical slug FIRST: the unique index on (tenant, instructor, slug) is checked per
    // statement, so the replacement can only take it after the old course has moved off it.
    await store.update(old.id, {
      slug: target,
      archivedAt: now,
      archivedReason: reason,
      supersededByCourseId: replacement.id,
      updatedAt: now,
    });
    await store.update(replacement.id, { slug: oldSlug, updatedAt: now });
    return { ...plan, written: true };
  });
}

async function one(store: ArchiveStore, tenantId: string, slug: string, which: "old" | "new"): Promise<ArchiveCourseRow> {
  const rows = await store.findBySlug(tenantId, slug);
  if (rows.length === 0) {
    throw new ArchiveRefusal(`${which}-not-found`, `No course with slug ${slug} in this tenant.`);
  }
  if (rows.length > 1) {
    throw new ArchiveRefusal(
      `${which}-ambiguous`,
      `${rows.length} courses share the slug ${slug} in this tenant (different instructors). Rename one first.`,
    );
  }
  return rows[0];
}

// ── Drizzle wiring ─────────────────────────────────────────────────────────────────────────────

type Db = NeonDatabase<typeof schema>;
type Tx = Parameters<Parameters<Db["transaction"]>[0]>[0];

export function drizzleArchiveStore(tx: Tx): ArchiveStore {
  return {
    async findBySlug(tenantId, slug) {
      return tx
        .select({
          id: schema.courses.id,
          tenantId: schema.courses.tenantId,
          title: schema.courses.title,
          slug: schema.courses.slug,
          archivedAt: schema.courses.archivedAt,
        })
        .from(schema.courses)
        .where(and(eq(schema.courses.tenantId, tenantId), eq(schema.courses.slug, slug)));
    },
    async update(id, patch) {
      await tx.update(schema.courses).set(patch).where(eq(schema.courses.id, id));
    },
  };
}

/** The production runner: one Drizzle transaction per archive operation. */
export function drizzleArchiveRunner(db: Db): ArchiveRunner {
  return (fn) => db.transaction((tx) => fn(drizzleArchiveStore(tx)));
}
