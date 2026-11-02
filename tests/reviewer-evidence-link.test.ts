import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { EVIDENCE_URL_MAX, normalizeEvidenceUrl } from "@/lib/lesson-review";

// Plans/97 v2 Q2: an optional, owner-only link to evidence for a reviewer's credential.
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("normalizeEvidenceUrl", () => {
  it("accepts https, clears on blank", () => {
    expect(normalizeEvidenceUrl("  https://example.org/license/123 ")).toEqual({ ok: true, url: "https://example.org/license/123" });
    expect(normalizeEvidenceUrl("")).toEqual({ ok: true, url: null });
    expect(normalizeEvidenceUrl(null)).toEqual({ ok: true, url: null });
  });
  it("refuses http, javascript and non-URLs, and anything over the limit", () => {
    expect(normalizeEvidenceUrl("http://example.org").ok).toBe(false);
    expect(normalizeEvidenceUrl("javascript:alert(1)").ok).toBe(false);
    expect(normalizeEvidenceUrl("example.org/license").ok).toBe(false);
    expect(normalizeEvidenceUrl(`https://example.org/${"a".repeat(EVIDENCE_URL_MAX)}`).ok).toBe(false);
  });
});

describe("the evidence link stays with the owner and school admin", () => {
  it("is never read by a learner-facing page or copied into a verdict", () => {
    for (const p of [
      "src/app/(tenant)/[username]/[courseSlug]/lesson/[lessonSlug]/page.tsx",
      "src/components/release-needs-box.tsx",
      "src/app/(tenant)/audit/review/page.tsx",
      "src/db/schema/lesson-reviews.ts",
      "src/db/queries/lesson-reviews.ts",
    ]) {
      expect(src(p), p).not.toMatch(/credentialEvidenceUrl|credential_evidence_url/);
    }
  });
  it("the routes gate it on canSeeReviewerEvidence and the table checks https and length", () => {
    expect(src("src/app/api/courses/[id]/auditors/[auditorId]/route.ts")).toContain("canSeeReviewerEvidence(session, sdb.tenantId, course)");
    expect(src("src/app/api/courses/[id]/auditors/route.ts")).toContain("canSeeReviewerEvidence(session, sdb.tenantId, course)");
    const sql = src("src/db/migrations/0074_review_v2_seed_drift_rag_index.sql");
    expect(sql).toContain("like 'https://%'");
    expect(sql).toContain("<= 500");
    // The course's own instructor is not in the evidence gate.
    const gate = src("src/lib/course-reviewers.ts").split("export async function canSeeReviewerEvidence")[1];
    expect(gate).not.toContain("instructorId");
  });
});
