import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, describe, expect, it } from "vitest";

// plans/98 Q4 (BAM 2026-11-01): the empty GRANDFATHERED map left check-longest-option.ts. Without it
// the guard must still fail any file whose bank of 8+ questions can be beaten by always clicking the
// longest option, and pass one whose options are balanced.

const dir = mkdtempSync(join(tmpdir(), "longest-option-"));
afterAll(() => rmSync(dir, { recursive: true, force: true }));

function fixture(name: string, options: string[], correctIndex: number): string {
  const questions = Array.from(
    { length: 8 },
    (_, i) => `    { prompt: "Question ${i}?", options: ${JSON.stringify(options)}, correctIndex: ${correctIndex} },`,
  ).join("\n");
  const file = join(dir, `${name}.ts`);
  writeFileSync(file, `export const QUIZ = {\n  title: "${name}",\n  questions: [\n${questions}\n  ],\n};\n`);
  return file;
}

function run(file: string) {
  return spawnSync(join(process.cwd(), "node_modules", ".bin", "tsx"), ["scripts/check-longest-option.ts", "--files", file], {
    cwd: process.cwd(),
    encoding: "utf8",
  });
}

describe("check-longest-option with no grandfathered files", () => {
  it("fails a new file whose correct option is visibly the longest", () => {
    const r = run(fixture("tell", ["Red", "Blue", "Green", "The one correct answer, with its qualifier and its because clause"], 3));
    expect(r.status).toBe(1);
    expect(r.stderr).toContain("LONGEST option");
    expect(r.stdout).toContain("1 violation.");
  }, 60_000);

  it("passes a file whose options are the same length", () => {
    const r = run(fixture("balanced", ["Alpha one", "Bravo two", "Charl tre", "Delta for"], 2));
    expect(r.status).toBe(0);
    expect(r.stdout).toContain("0 violations.");
  }, 60_000);

  it("carries no GRANDFATHERED map, so no file can be let through by a line", () => {
    const code = readFileSync(join(process.cwd(), "scripts/check-longest-option.ts"), "utf8");
    expect(code).not.toContain("GRANDFATHERED:");
    expect(code).not.toContain("--emit-grandfather");
  });
});
