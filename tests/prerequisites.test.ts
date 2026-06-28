import { describe, expect, it } from "vitest";
import { unmetRequired } from "@/lib/prerequisites";

describe("unmetRequired", () => {
  it("returns required prereqs the learner hasn't completed", () => {
    expect(unmetRequired(["a", "b"], new Set(["a"]), false)).toEqual(["b"]);
  });
  it("is empty when all required are completed", () => {
    expect(unmetRequired(["a", "b"], new Set(["a", "b"]), false)).toEqual([]);
  });
  it("an override clears everything", () => {
    expect(unmetRequired(["a", "b"], new Set(), true)).toEqual([]);
  });
  it("no prereqs → nothing unmet", () => {
    expect(unmetRequired([], new Set(), false)).toEqual([]);
  });
});
