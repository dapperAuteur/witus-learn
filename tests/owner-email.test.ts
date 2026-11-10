import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { OWNER_EMAIL_VAR, ownerEmail } from "../scripts/lib/owner";

/**
 * Task 394, decision 2 (2026-11-09): the platform owner's email address used to be written in about a
 * dozen seed scripts of this PUBLIC repository. It now comes from PLATFORM_OWNER_EMAIL, the variable the
 * app already reads, through scripts/lib/owner.ts, which throws rather than guess, so a seed never
 * creates an instructor with an empty or wrong address. The second block keeps the address out of the
 * tracked tree for good: it asks git for every tracked text file that carries the owner's domain.
 */
const ROOT = join(import.meta.dirname, "..");
// The owner's domain, built from parts so this file is not itself a match.
const OWNER_DOMAIN = ["awews", "com"].join(".");

describe("ownerEmail()", () => {
  const saved = process.env[OWNER_EMAIL_VAR];
  afterEach(() => {
    if (saved === undefined) delete process.env[OWNER_EMAIL_VAR];
    else process.env[OWNER_EMAIL_VAR] = saved;
  });

  it("throws, naming the variable and where it lives, when it is unset or blank", () => {
    expect(() => ownerEmail({})).toThrow(new RegExp(`${OWNER_EMAIL_VAR} is not set.*\\.env\\.local.*\\.env\\.prod.*repository secret`));
    expect(() => ownerEmail({ [OWNER_EMAIL_VAR]: "" })).toThrow(OWNER_EMAIL_VAR);
    expect(() => ownerEmail({ [OWNER_EMAIL_VAR]: "   " })).toThrow(OWNER_EMAIL_VAR);
  });

  it("rejects a value that is not an email address, without echoing it", () => {
    expect(() => ownerEmail({ [OWNER_EMAIL_VAR]: "not-an-address" })).toThrow(`${OWNER_EMAIL_VAR} is not an email address`);
    expect(() => ownerEmail({ [OWNER_EMAIL_VAR]: "not-an-address" })).not.toThrow("not-an-address");
  });

  it("returns the address, trimmed and otherwise untouched, when set", () => {
    expect(ownerEmail({ [OWNER_EMAIL_VAR]: " Owner@Example.com " })).toBe("Owner@Example.com");
  });

  it("reads process.env by default", () => {
    delete process.env[OWNER_EMAIL_VAR];
    expect(() => ownerEmail()).toThrow(OWNER_EMAIL_VAR);
    process.env[OWNER_EMAIL_VAR] = "owner@example.com";
    expect(ownerEmail()).toBe("owner@example.com");
  });

  it("is the variable the app and .env.example already name", () => {
    expect(OWNER_EMAIL_VAR).toBe("PLATFORM_OWNER_EMAIL");
    expect(readFileSync(join(ROOT, "src/lib/env.ts"), "utf8")).toContain("PLATFORM_OWNER_EMAIL:");
    expect(readFileSync(join(ROOT, ".env.example"), "utf8")).toMatch(/^PLATFORM_OWNER_EMAIL=/m);
    // .env.test is tracked and the repo is public: it names only the database variables, kept empty.
    expect(readFileSync(join(ROOT, ".env.test"), "utf8")).not.toContain("PLATFORM_OWNER_EMAIL");
  });
});

describe("the owner's address is in no tracked file", () => {
  // Paths that may carry the owner's domain, each with its reason. Empty on purpose: a reason good
  // enough to add a row here is a reason to put the address in an env var instead.
  const ALLOWED = new Map<string, string>();

  it("git grep finds the owner's domain in no tracked text file", () => {
    let hits: string[] = [];
    try {
      hits = execFileSync("git", ["grep", "-I", "-l", "-i", "--fixed-strings", "-e", OWNER_DOMAIN, "--", "."], {
        cwd: ROOT,
        encoding: "utf8",
      })
        .split("\n")
        .filter(Boolean);
    } catch (error) {
      // git grep exits 1 when nothing matches, which is the pass; anything else is a real failure.
      if ((error as { status?: number }).status !== 1) throw error;
    }
    expect(hits.filter((path) => !ALLOWED.has(path))).toEqual([]);
  });

  it("every script that needs the owner reads it through the helper", () => {
    const scripts = [
      "seed-courses.ts",
      "seed-bvc.ts",
      "seed-bvc-real.ts",
      "seed-faa.ts",
      "seed-health.ts",
      "seed-langchain.ts",
      "seed-languages.ts",
      "seed-local-private.ts",
      "seed-neuromatch.ts",
      "seed-owner.ts",
      "seed-sommelier.ts",
      "seed-speedway.ts",
      "seed-well.ts",
      "reassign-instructor.ts",
      "field-log-import.ts",
    ];
    for (const file of scripts) {
      const text = readFileSync(join(ROOT, "scripts", file), "utf8");
      expect(text, file).toContain('from "./lib/owner"');
      // No script may keep a fallback that bypasses the helper.
      expect(text, file).not.toMatch(/PLATFORM_OWNER_EMAIL\s*\|\|/);
    }
  });
});
