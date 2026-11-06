// Give the owner's test addresses a role on ONE named school, so BAM can sign in as a teacher and as a
// school admin and see what each sees (BAM, 2026-11-04: "there are no teacher or admin users. Will
// you add demo users for me to test ... privileges"; 2026-11-05: "add [them] to ElementaryMBA school").
//
// HOW AN ADDRESS GETS ITS ROLE.
//   - The address already has an account: the membership is written now, on the named school only.
//   - It has none yet: a pending grant is written (pending_role_grants, migration 0080). The account
//     does not exist until the person signs in, and it is created by a magic link on any school or by
//     "Sign in with WitUS" on learn.witus.online. better-auth's user.create hook claims the grant at
//     that moment (claimPendingRoleGrants, src/db/queries/pending-role-grants.ts), so the first
//     sign-in lands with the role already in place. No account is created here: an account made
//     ahead of time could not be linked to a WitUS sign-in unless the IdP vouched for the address.
//
// WHAT IT NEVER DOES. Writes on any school but the one named (every write is keyed on its id); makes
// anyone a platform owner; touches an address that is the platform owner's or belongs to one; changes
// a school's courses, settings or domains. The addresses come from the command line or env, never
// from this repo.
//
// Pure helpers first (tests/test-users.test.ts), then the database work
// (tests/isolation/test-users.db.test.ts).

import { and, eq, sql } from "drizzle-orm";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";
import * as schema from "../../src/db/schema";

/** The school BAM named on 2026-11-05 (scripts/seed-tenants.ts). `--school <slug>` picks another. */
export const DEFAULT_SCHOOL_SLUG = "elementary-mba";

export type TestRole = "instructor" | "brand_admin" | "learner";

export interface TestPerson {
  role: TestRole;
  email: string;
}

export interface TestUsersInput {
  school: string;
  people: TestPerson[];
  /** Read-only: report what exists, write nothing. */
  check: boolean;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function flag(argv: string[], name: string): string | undefined {
  const i = argv.indexOf(name);
  if (i < 0) return undefined;
  const v = argv[i + 1];
  return v && !v.startsWith("--") ? v : undefined;
}

/**
 * Read `--instructor`, `--admin`, `--learner`, `--school` and `--check`, falling back to
 * TEST_INSTRUCTOR_EMAIL / TEST_ADMIN_EMAIL / TEST_LEARNER_EMAIL / TEST_SCHOOL_SLUG. At least one
 * address is required. Throws a plain-language Error on anything malformed.
 */
export function parseTestUsersArgs(argv: string[], env: Record<string, string | undefined>): TestUsersInput {
  const pick = (name: string, envName: string) => (flag(argv, name) ?? env[envName] ?? "").trim().toLowerCase();
  const wanted: [TestRole, string][] = [
    ["instructor", pick("--instructor", "TEST_INSTRUCTOR_EMAIL")],
    ["brand_admin", pick("--admin", "TEST_ADMIN_EMAIL")],
    ["learner", pick("--learner", "TEST_LEARNER_EMAIL")],
  ];
  const people = wanted.filter(([, email]) => email).map(([role, email]) => ({ role, email }));
  const school = (flag(argv, "--school") ?? env.TEST_SCHOOL_SLUG ?? DEFAULT_SCHOOL_SLUG).trim().toLowerCase();

  if (people.length === 0) {
    throw new Error("Give at least one address: --instructor <email>, --admin <email>, --learner <email>.");
  }
  for (const p of people) {
    if (!EMAIL_RE.test(p.email)) throw new Error(`Not an email address: "${p.email}".`);
  }
  if (new Set(people.map((p) => p.email)).size !== people.length) {
    throw new Error("Each role needs its own address: one account holds one role in a school.");
  }
  if (!SLUG_RE.test(school)) throw new Error(`Not a school slug: "${school}" (e.g. ${DEFAULT_SCHOOL_SLUG}).`);
  return { school, people, check: argv.includes("--check") };
}

/** Refuse to give a test role to the platform owner's account. */
export function personRefusal(
  person: { email: string },
  existing: { isPlatformOwner: boolean } | null,
  ownerEmail: string | undefined,
): string | null {
  if (ownerEmail && person.email === ownerEmail.trim().toLowerCase()) {
    return `${person.email} is the platform owner's address. Use a separate address for a test account.`;
  }
  if (existing?.isPlatformOwner) return `${person.email} belongs to a platform owner. Use a separate address for a test account.`;
  return null;
}

/** What a run should do for one address. Pure, so the decision is tested without a database. */
export function decideGrant(
  existing: { id: string } | null,
  currentRole: string | null,
  wanted: TestRole,
): "membership-new" | "membership-change" | "membership-same" | "pending" {
  if (!existing) return "pending";
  if (currentRole === null) return "membership-new";
  return currentRole === wanted ? "membership-same" : "membership-change";
}

const ROLE_LABEL: Record<TestRole, string> = { instructor: "teacher", brand_admin: "school admin", learner: "learner" };

// ── Database work ───────────────────────────────────────────────────────────────────────────────

type Db = NeonDatabase<typeof schema>;

export interface TestUsersReport {
  tenantId: string;
  lines: string[];
  /** Published, public courses on the school a learner could enroll in. */
  enrollableCourses: number;
}

async function findUser(db: Db, email: string) {
  const [row] = await db
    .select({ id: schema.users.id, isPlatformOwner: schema.userProfiles.isPlatformOwner })
    .from(schema.users)
    .leftJoin(schema.userProfiles, eq(schema.userProfiles.userId, schema.users.id))
    .where(sql`lower(${schema.users.email}) = ${email}`)
    .limit(1);
  return row ? { id: row.id, isPlatformOwner: row.isPlatformOwner ?? false } : null;
}

/**
 * Grant the roles. Idempotent: a second run reports "already" for everything the first one did.
 * Every refusal is decided before the first write, so a refused run writes nothing.
 */
export async function grantTestUsers(db: Db, input: TestUsersInput, opts: { ownerEmail?: string } = {}): Promise<TestUsersReport> {
  const lines: string[] = [];
  const log = (s: string) => lines.push(s);

  const [tenant] = await db.select().from(schema.tenants).where(eq(schema.tenants.slug, input.school)).limit(1);
  if (!tenant) throw new Error(`No school with the slug "${input.school}". Nothing was written.`);
  const tenantId = tenant.id;

  const found = new Map<string, Awaited<ReturnType<typeof findUser>>>();
  for (const p of input.people) {
    const existing = await findUser(db, p.email);
    const refused = personRefusal(p, existing, opts.ownerEmail);
    if (refused) throw new Error(refused);
    found.set(p.email, existing);
  }

  const hosts = await db
    .select({ host: schema.tenantDomains.host, isPrimary: schema.tenantDomains.isPrimary })
    .from(schema.tenantDomains)
    .where(eq(schema.tenantDomains.tenantId, tenantId));
  log(`School: ${tenant.name} (${tenant.slug})`);
  log(`  sign in at: ${hosts.map((h) => `${h.host}${h.isPrimary ? " (primary)" : ""}`).join(", ") || "no host mapped"}`);
  if (tenant.flags.comingSoon) log("  note: this school shows a \"launching soon\" page instead of its catalog (flags.comingSoon)");

  for (const p of input.people) {
    const user = found.get(p.email) ?? null;
    const [m] = user
      ? await db
          .select({ role: schema.tenantMemberships.role })
          .from(schema.tenantMemberships)
          .where(and(eq(schema.tenantMemberships.tenantId, tenantId), eq(schema.tenantMemberships.userId, user.id)))
          .limit(1)
      : [];
    const action = decideGrant(user, m?.role ?? null, p.role);
    const label = `${ROLE_LABEL[p.role]} ${p.email}`;

    if (action === "pending") {
      const [pending] = await db
        .select({ role: schema.pendingRoleGrants.role, claimedAt: schema.pendingRoleGrants.claimedAt })
        .from(schema.pendingRoleGrants)
        .where(and(eq(schema.pendingRoleGrants.tenantId, tenantId), sql`${schema.pendingRoleGrants.email} = ${p.email}`))
        .limit(1);
      if (input.check) {
        log(pending && !pending.claimedAt ? `= ${label}: waiting for first sign-in (${pending.role})` : `- ${label}: no account and no grant yet`);
        continue;
      }
      await db
        .insert(schema.pendingRoleGrants)
        .values({ tenantId, email: p.email, role: p.role })
        .onConflictDoUpdate({
          target: [schema.pendingRoleGrants.tenantId, schema.pendingRoleGrants.email],
          set: { role: p.role, claimedAt: null, claimedUserId: null },
        });
      log(pending && !pending.claimedAt && pending.role === p.role ? `= ${label}: already waiting for first sign-in` : `+ ${label}: no account yet; the role lands on first sign-in`);
      continue;
    }

    if (action === "membership-same") {
      log(`= ${label}: already holds the role`);
      continue;
    }
    if (input.check) {
      log(`- ${label}: has an account, ${m ? `holds "${m.role}"` : "holds no role here"}`);
      continue;
    }
    await db
      .insert(schema.tenantMemberships)
      .values({ tenantId, userId: user!.id, role: p.role })
      .onConflictDoUpdate({
        target: [schema.tenantMemberships.tenantId, schema.tenantMemberships.userId],
        set: { role: p.role },
      });
    log(action === "membership-new" ? `+ ${label}: role granted` : `~ ${label}: role changed from "${m!.role}"`);
  }

  // Whether a learner has anything to enroll in. Reported, never fixed here: a school's courses are
  // its own to publish.
  const [{ n }] = await db
    .select({ n: sql<number>`count(*)::int` })
    .from(schema.courses)
    .where(and(eq(schema.courses.tenantId, tenantId), eq(schema.courses.isPublished, true), eq(schema.courses.visibility, "public")));
  log(n > 0 ? `  ${n} published public course(s) a learner can enroll in` : "  no published public course: a learner has nothing to enroll in yet");

  return { tenantId, lines, enrollableCourses: n };
}
