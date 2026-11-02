import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { shouldWarnBeforeLaunch } from "@/components/launch-todo-warning";
import type { LaunchTodo } from "@/lib/launch-todos";
import { quizLengthWarning } from "@/lib/quiz-integrity";

// Quiz integrity panel v2 (plans/98 G1, BAM Q1 2026-11-01): scheduling, publishing, releasing or
// vetting a course whose measured quizzes fail the length check shows one more item in the existing
// launch warning. A warning, never a gate.

const todo = (status: LaunchTodo["status"]): LaunchTodo => ({
  id: "t",
  source: "custom",
  kind: "task",
  title: "Tell the partner",
  detail: null,
  when: "live",
  status,
  note: null,
  blogName: null,
  postTitle: null,
  postUrl: null,
  ref: null,
  due: false,
});

const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("the quiz item in the launch warning", () => {
  it("opens the warning for failing quizzes alone, and not when nothing fails", () => {
    expect(shouldWarnBeforeLaunch([], 0)).toBe(false);
    expect(shouldWarnBeforeLaunch(undefined, 0)).toBe(false);
    expect(shouldWarnBeforeLaunch([todo("done")], 0)).toBe(false);
    expect(shouldWarnBeforeLaunch([], 2)).toBe(true);
    expect(shouldWarnBeforeLaunch(undefined, 1)).toBe(true);
  });

  it("still opens for an open to-do with no failing quiz, as before", () => {
    expect(shouldWarnBeforeLaunch([todo("open")], 0)).toBe(true);
    expect(shouldWarnBeforeLaunch([todo("open")])).toBe(true);
  });

  it("adds the item only when the failing count is above zero", () => {
    expect(quizLengthWarning(0)).toBeNull();
    expect(quizLengthWarning(2)).toBe("2 quizzes do not pass the length check yet.");
  });

  it("every launch control on /teach is handed the failing count", () => {
    const page = src("src/app/(tenant)/teach/[courseId]/page.tsx");
    expect(page.match(/failingQuizzes=\{failingQuizzes\.length\}/g)?.length).toBe(4);
    for (const c of [
      "src/components/course-settings-form.tsx",
      "src/components/review-actions.tsx",
      "src/components/vet-course-cta.tsx",
    ]) {
      const code = src(c);
      expect(code, c).toContain("shouldWarnBeforeLaunch(launchTodos, failingQuizzes)");
      expect(code, c).toContain("failingQuizzes={failingQuizzes}");
      // "Not yet" returns focus to the control that opened the warning.
      expect(code, c).toContain("focusLater(");
    }
    expect(src("src/components/course-visibility-switch.tsx")).toContain("quizLengthWarning(failingQuizzes)");
  });

  it("never blocks: Continue still runs the action, and the warning moves focus to its heading", () => {
    const w = src("src/components/launch-todo-warning.tsx");
    expect(w).toContain("onClick={onConfirm}");
    expect(w).toContain("headingRef.current?.focus()");
    expect(w).toContain("tabIndex={-1}");
  });
});
