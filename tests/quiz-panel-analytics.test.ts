import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ANALYTICS_APP, EVENTS } from "@/lib/analytics/events";

// Quiz integrity panel v2 (plans/98 section 8, BAM Q3 2026-11-01): one event when a visitor opens
// "How this course's quizzes are built", held to the shared PostHog project's rules (snake_case,
// object first, past tense, no app name in the event, sent through capture(), ids and kinds only).

const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("quiz_integrity_panel_opened", () => {
  it("is registered under the PRD's name, with no app name in it", () => {
    expect(EVENTS.quizIntegrityPanelOpened).toBe("quiz_integrity_panel_opened");
    expect(EVENTS.quizIntegrityPanelOpened.startsWith(`${ANALYTICS_APP}_`)).toBe(false);
    expect(EVENTS.quizIntegrityPanelOpened).not.toMatch(/witus|learn/);
  });

  it("is sent through capture() on opening, with the course id and surface only", () => {
    const code = src("src/components/quiz-integrity-details.tsx");
    expect(code).not.toContain("posthog");
    expect(code).toContain("onToggle");
    expect(code).toContain("if (!e.currentTarget.open || sent.current) return;");
    const at = code.indexOf("capture(EVENTS.quizIntegrityPanelOpened");
    expect(at).toBeGreaterThan(-1);
    const props = code.slice(at, code.indexOf(");", at));
    expect(props).toContain("course_id: courseId");
    expect(props).toContain("surface");
    expect(props).not.toMatch(/url|title|email|name|prompt|question/i);
  });

  it("names its surface on both pages that show the panel", () => {
    expect(src("src/app/(tenant)/[username]/[courseSlug]/page.tsx")).toContain(
      '<CourseQuizIntegrity summary={quizIntegrity} courseId={course.id} surface="course" />',
    );
    expect(src("src/components/coming-soon-course.tsx")).toContain(
      '<CourseQuizIntegrity summary={quizIntegrity} courseId={courseId} surface="coming_soon" />',
    );
  });

  it("keeps the panel's text server-rendered: only the details wrapper is a client component", () => {
    expect(src("src/components/course-quiz-integrity.tsx")).not.toContain('"use client"');
    expect(src("src/components/quiz-integrity-details.tsx").startsWith('"use client"')).toBe(true);
  });
});
