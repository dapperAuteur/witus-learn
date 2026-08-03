import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Guard: a seed script may only look up a tenant slug that seed-tenants.ts actually creates.
 *
 * WHY THIS EXISTS. `scripts/seed-sommelier.ts` shipped calling `tenantBySlug("bvc")`. The BVC
 * tenant's real slug is "better-vice-club"; "bvc" is only the content directory name
 * (content/bvc/) and the informal name used in comments. The seeder was written by pattern-matching
 * the informal name instead of reading seed-tenants.ts, which is exactly the failure the
 * authoritative-values rule in CLAUDE.md exists to prevent: a value owned by another source was
 * guessed and then asserted as correct.
 *
 * The failure was safe (the script exited 1 with a clear message rather than seeding into the wrong
 * tenant) but it was only discoverable by RUNNING it against a live database, which is a slow and
 * manual loop. A guessed slug is mechanically detectable without a database, so it should be.
 *
 * WHAT IT CHECKS. Every string literal passed to a tenant-slug lookup anywhere in scripts/ must
 * appear in the TENANTS list in scripts/seed-tenants.ts. That covers the three helper names the
 * seeders actually use (`tenantBySlug`, `tenantIdBySlug`) plus direct
 * `eq(schema.tenants.slug, "...")` comparisons, which is how seed-bvc-real.ts does it.
 *
 * WHAT IT DELIBERATELY DOES NOT CHECK. It cannot catch a slug passed through a variable, and it is
 * not trying to. The bug class it targets is a hardcoded guess, and a hardcoded guess is a literal.
 */

const SCRIPTS = join(process.cwd(), "scripts");

/** Slugs seed-tenants.ts actually creates. This file is the authority; nothing else is. */
function authoritativeSlugs(): Set<string> {
  const src = readFileSync(join(SCRIPTS, "seed-tenants.ts"), "utf-8");
  return new Set([...src.matchAll(/^\s{4}slug:\s*"([a-z0-9-]+)"/gm)].map((m) => m[1]));
}

/** Every tenant-slug string literal a script looks up, with the file it came from. */
function referencedSlugs(): { file: string; slug: string }[] {
  const patterns = [
    /\btenantBySlug\(\s*"([a-z0-9-]+)"/g,
    /\btenantIdBySlug\(\s*"([a-z0-9-]+)"/g,
    /schema\.tenants\.slug\s*,\s*"([a-z0-9-]+)"/g,
  ];
  const out: { file: string; slug: string }[] = [];
  for (const file of readdirSync(SCRIPTS).filter((f) => f.endsWith(".ts"))) {
    const src = readFileSync(join(SCRIPTS, file), "utf-8");
    for (const p of patterns) {
      for (const m of src.matchAll(p)) out.push({ file, slug: m[1] });
    }
  }
  return out;
}

describe("seed scripts only reference tenant slugs that seed-tenants.ts creates", () => {
  const known = authoritativeSlugs();

  it("seed-tenants.ts itself parses into a non-empty slug list", () => {
    // If this ever fails, the regex above has drifted from the file's shape and every other
    // assertion in here is silently passing against an empty set.
    expect(known.size).toBeGreaterThan(3);
    expect(known.has("better-vice-club")).toBe(true);
    expect(known.has("learn-witus")).toBe(true);
  });

  it("finds tenant lookups to check, so the guard cannot pass vacuously", () => {
    expect(referencedSlugs().length).toBeGreaterThan(3);
  });

  it("every referenced slug exists", () => {
    const unknown = referencedSlugs().filter((r) => !known.has(r.slug));
    const detail = unknown.map((u) => `${u.file} looks up "${u.slug}"`).join("\n  ");
    expect(
      unknown,
      unknown.length
        ? `Tenant slug not created by seed-tenants.ts:\n  ${detail}\n` +
            `Known slugs: ${[...known].sort().join(", ")}\n` +
            `Read seed-tenants.ts for the slug rather than inferring it from a directory name, ` +
            `a brand's initials, or a comment.`
        : undefined,
    ).toEqual([]);
  });
});
