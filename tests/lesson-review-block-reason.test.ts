import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  VERDICT_BLOCK_SENTENCE,
  canRecordVerdict,
  verdictBlockReason,
  type VerdictActor,
} from "@/lib/lesson-review";

// Plans/97 v2 (G2, acceptance 2): a reviewer always sees WHY the verdict form is disabled. One
// function answers both "may they" and "why not", so the form and the route can never disagree.

const base: Omit<VerdictActor, "kind"> = { isAuditor: false, hasCredential: false, isOwner: false, isInstructor: false };

describe("verdictBlockReason", () => {
  it("names each rule that refuses a verdict", () => {
    expect(verdictBlockReason({ ...base, isAuditor: true, hasCredential: true, kind: "decision" })).toBe("decision");
    expect(verdictBlockReason({ ...base, isOwner: true, kind: "qr" })).toBe("owner_qr");
    expect(verdictBlockReason({ ...base, isInstructor: true, isAuditor: true, hasCredential: true, kind: "qr" })).toBe("instructor");
    expect(verdictBlockReason({ ...base, kind: "p" })).toBe("no_grant");
    expect(verdictBlockReason({ ...base, isAuditor: true, kind: "qr" })).toBe("no_credential");
  });

  it("is null exactly when canRecordVerdict is true, for every combination", () => {
    for (const kind of ["qr", "p", "decision"] as const)
      for (const isAuditor of [false, true])
        for (const hasCredential of [false, true])
          for (const isOwner of [false, true])
            for (const isInstructor of [false, true]) {
              const a = { isAuditor, hasCredential, isOwner, isInstructor, kind };
              expect(verdictBlockReason(a) === null).toBe(canRecordVerdict(a));
            }
  });

  it("the instructor sentence is the PRD's wording, and every reason has a sentence", () => {
    expect(VERDICT_BLOCK_SENTENCE.instructor).toBe(
      "You teach this course, so you cannot review it. Ask the owner to invite another reviewer.",
    );
    for (const s of Object.values(VERDICT_BLOCK_SENTENCE)) expect(s.length).toBeGreaterThan(20);
  });

  it("the form links the reason to its fieldset for screen readers", () => {
    const form = readFileSync(join(process.cwd(), "src/components/lesson-verdict-form.tsx"), "utf8");
    expect(form).toContain("aria-describedby={!need.canRecord && need.blockedReason ? `${base}-why` : undefined}");
    expect(form).toContain("id={`${base}-why`}");
  });
});
