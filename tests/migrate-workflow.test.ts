import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import drizzleConfig from "../drizzle.config";

/**
 * .github/workflows/migrate-production.yml runs production migrations on the push to main that
 * changes them. Its `paths:` filter has to name the folder Drizzle actually writes migrations to
 * (drizzle.config.ts `out`), and scripts/migrate.ts has to apply from that same folder. If either
 * drifts, a migration merges and nothing runs it, and the next deploy answers 500 on a missing
 * column. These checks read the files as text, so they need no YAML parser and no database.
 */

const ROOT = join(import.meta.dirname, "..");
const workflow = readFileSync(join(ROOT, ".github/workflows/migrate-production.yml"), "utf8");
const migrateScript = readFileSync(join(ROOT, "scripts/migrate.ts"), "utf8");
const out = String(drizzleConfig.out).replace(/^\.\//, "").replace(/\/$/, "");

/** The quoted entries under `paths:` in the push trigger. */
function triggerPaths(): string[] {
  const block = workflow.match(/\n {4}paths:\n((?: {6}- .+\n)+)/);
  if (!block) return [];
  return [...block[1].matchAll(/- "?([^"\n]+)"?/g)].map((m) => m[1].trim());
}

describe("migrate-production.yml", () => {
  it("triggers on exactly the folder drizzle.config.ts writes migrations to", () => {
    expect(out).toBe("src/db/migrations");
    expect(triggerPaths()).toEqual([`${out}/**`]);
  });

  it("runs on a push to main and on demand", () => {
    expect(workflow).toMatch(/on:\n {2}push:\n {4}branches: \[main\]/);
    expect(workflow).toMatch(/\n {2}workflow_dispatch:/);
  });

  it("never cancels a run in progress and fails closed without the secret", () => {
    expect(workflow).toMatch(/concurrency:\n {2}group: migrate-production\n(?: {2}#.*\n)* {2}cancel-in-progress: false/);
    expect(workflow).toContain('if [ -z "$NEON_DIRECT_URL" ]');
    expect(workflow).toContain("::error::Set the repository secret NEON_DIRECT_URL");
  });

  it("maps the secret onto the name scripts/db-url.ts reads first for a direct connection", () => {
    expect(workflow).toContain("DATABASE_URL_UNPOOLED: ${{ secrets.NEON_DIRECT_URL }}");
    expect(readFileSync(join(ROOT, "scripts/db-url.ts"), "utf8")).toMatch(/const direct = \[\s*"DATABASE_URL_UNPOOLED"/);
  });

  it("runs the same script as pnpm db:migrate:prod, and that script applies from the same folder", () => {
    const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")) as { scripts: Record<string, string> };
    expect(pkg.scripts["db:migrate:prod"]).toContain("scripts/migrate.ts");
    expect(workflow).toContain("pnpm exec tsx scripts/migrate.ts");
    expect(migrateScript).toContain(`const MIGRATIONS_FOLDER = "./${out}";`);
  });

  it("does not run any seed: seeds overwrite teachers' in-app lesson edits", () => {
    const runLines = workflow.split("\n").filter((l) => /^\s+run:/.test(l) || /^\s{10}\S/.test(l));
    expect(runLines.join("\n")).not.toMatch(/seed/);
  });

  it("pins every action to an exact version", () => {
    const uses = [...workflow.matchAll(/uses: (\S+)/g)].map((m) => m[1]);
    expect(uses.length).toBeGreaterThan(0);
    for (const u of uses) expect(u).toMatch(/@v\d+\.\d+\.\d+$/);
  });
});
