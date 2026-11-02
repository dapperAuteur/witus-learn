import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// .github/workflows/seed-production.yml (plans/97 Q5): the post-deploy seed and RAG refresh, held to
// the post-deploy automation rule: a paths filter and workflow_dispatch, a concurrency group that
// never cancels, fail closed with ::error:: naming the missing secret, a step summary, safe to re-run.
const ROOT = join(import.meta.dirname, "..");
const wf = readFileSync(join(ROOT, ".github/workflows/seed-production.yml"), "utf8");

describe("seed-production.yml", () => {
  it("runs on a push to main that changes course data or seeding code, and on demand", () => {
    expect(wf).toMatch(/on:\n {2}push:\n {4}branches: \[main\]\n {4}paths:\n/);
    expect(wf).toContain('- "scripts/data/**"');
    expect(wf).toContain('- "scripts/lib/seed-authored-course.ts"');
    expect(wf).toMatch(/\n {2}workflow_dispatch:/);
  });
  it("never cancels a run and fails closed on each missing secret", () => {
    expect(wf).toMatch(/concurrency:\n {2}group: seed-production\n(?: {2}#.*\n)* {2}cancel-in-progress: false/);
    expect(wf).toContain("::error::Set the repository secret NEON_DIRECT_URL");
    expect(wf).toContain("::error::Set the repository secret MISTRAL_API_KEY");
    // Embeddings moved to Mistral in migration 0076: the Gemini secret is no longer read.
    expect(wf).not.toContain("GOOGLE_GEMINI_API_KEY");
  });
  it("waits for the migration, migrates, seeds with a report, then indexes the seeded courses", () => {
    const jobs = wf.slice(wf.indexOf("\njobs:"));
    const order = ["migrate-production.yml --commit", "scripts/migrate.ts", "scripts/seed-courses.ts", "scripts/rag-index.ts"].map((s) =>
      jobs.indexOf(s),
    );
    expect(order.every((i) => i > 0)).toBe(true);
    expect([...order].sort((a, b) => a - b)).toEqual(order);
    expect(wf).toContain("SEED_REPORT_PATH: ${{ runner.temp }}/seed-report.json");
    expect(wf).toContain('args="--courses-file $list"');
    expect(wf).toContain("GITHUB_STEP_SUMMARY");
  });
  it("reads production secrets only, never the test database ones, and pins actions", () => {
    expect(wf).not.toMatch(/TEST_DATABASE_URL/);
    for (const m of wf.matchAll(/uses: (\S+)/g)) expect(m[1]).toMatch(/@v\d+\.\d+\.\d+$/);
  });
});
