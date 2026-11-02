import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { EVENTS } from "@/lib/analytics/events";

// Reviewer sign-off product events (plans/97 section 8, BAM 2026-11-01 Q6): registered with the
// PRD's names, sent after the server said OK, ids and kinds only.
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("reviewer sign-off events", () => {
  it("are registered with the PRD's names, no app name in them", () => {
    expect(EVENTS.lessonReviewRecorded).toBe("lesson_review_recorded");
    expect(EVENTS.reviewHoldReleased).toBe("review_hold_released");
    expect(EVENTS.reviewPacketDownloaded).toBe("review_packet_downloaded");
  });
  it("carry ids and kinds only", () => {
    const form = src("src/components/lesson-verdict-form.tsx");
    expect(form).toContain(
      "capture(EVENTS.lessonReviewRecorded, { course_id: courseId, lesson_id: lessonId, need_kind: need.kind, verdict });",
    );
    expect(src("src/components/review-actions.tsx")).toContain("capture(EVENTS.reviewHoldReleased, { course_id: courseId });");
    expect(src("src/components/review-packet-download.tsx")).toContain(
      "capture(EVENTS.reviewPacketDownloaded, { course_id: courseId, format });",
    );
    for (const f of ["src/components/lesson-verdict-form.tsx", "src/components/review-actions.tsx"]) {
      const calls = src(f).match(/capture\([^)]*\)/g) ?? [];
      for (const c of calls) expect(c).not.toMatch(/correction|reviewerName|credential|email/);
    }
  });
});
