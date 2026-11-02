"use client";

import { useEffect, useRef } from "react";
import { FOLLOW_UP_WHEN_LABEL, launchWarningGroups, type LaunchTodo } from "@/lib/launch-todos";
import { quizLengthWarning } from "@/lib/quiz-integrity";

// The warning shown when someone signals that a course should go live: scheduling it, publishing it,
// clearing its hold, releasing the review hold, vetting it. It carries the course's open launch
// to-dos, so the teacher and the owner see what still has to happen and can plan for the real date.
//
// A warning, not a gate: "Go ahead" proceeds with the action exactly as asked. The point is that
// nobody launches a course without having the list in front of them.
//
// Quiz checks (plans/98 v2, BAM 2026-11-01): when measured quizzes in the course do not pass the
// length check, the warning carries one more item saying how many, and it opens for that alone. Still
// never a gate. Focus moves to the warning's heading when it opens; each caller returns focus to the
// button that opened it on "Not yet" (focusLater below).

export function LaunchTodoWarning({
  todos,
  failingQuizzes = 0,
  action,
  confirmLabel,
  busy = false,
  onConfirm,
  onCancel,
}: {
  todos: LaunchTodo[];
  /** Measured quizzes in this course that fail the length check (ScopedDb.listFailingQuizBanks). */
  failingQuizzes?: number;
  /** What the person is about to do, in their words: "schedule this course", "release the hold". */
  action: string;
  confirmLabel: string;
  busy?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const { before, after } = launchWarningGroups(todos);
  const quizItem = quizLengthWarning(failingQuizzes);
  const headingRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    headingRef.current?.focus();
  }, []);
  const item = (t: LaunchTodo) => (
    <li key={t.id} className="text-sm">
      <span className="font-medium">{t.title}</span>
      {t.kind === "blog-post" && t.blogName ? (
        <span className="text-amber-900/90 dark:text-amber-200/90">
          {" "}on {t.blogName}
          {t.postTitle ? <>: &ldquo;{t.postTitle}&rdquo;</> : null}
        </span>
      ) : null}
      {t.due && t.when !== "live" ? <span className="text-amber-900/90 dark:text-amber-200/90"> (due now)</span> : null}
    </li>
  );

  return (
    <div
      role="alertdialog"
      aria-labelledby="launch-warning-title"
      className="rounded-lg border border-amber-300 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/30"
    >
      <p
        id="launch-warning-title"
        ref={headingRef}
        tabIndex={-1}
        className="font-semibold text-amber-900 focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-amber-200"
      >
        Before you {action}: {before.length || after.length ? "this course’s launch to-do list" : "what this course still needs"}
      </p>
      {before.length ? (
        <>
          <p className="mt-2 text-sm text-amber-900 dark:text-amber-200">Still open, {FOLLOW_UP_WHEN_LABEL.scheduled}:</p>
          <ul className="mt-1 list-disc pl-5 text-amber-950 dark:text-amber-100">{before.map(item)}</ul>
        </>
      ) : null}
      {after.length ? (
        <>
          <p className="mt-2 text-sm text-amber-900 dark:text-amber-200">Falls due the moment learners can take it:</p>
          <ul className="mt-1 list-disc pl-5 text-amber-950 dark:text-amber-100">{after.map(item)}</ul>
        </>
      ) : null}
      {quizItem ? (
        <>
          <p className="mt-2 text-sm text-amber-900 dark:text-amber-200">Quiz checks:</p>
          <ul className="mt-1 list-disc pl-5 text-amber-950 dark:text-amber-100">
            <li className="text-sm">
              <span className="font-medium">{quizItem}</span>{" "}
              <span className="text-amber-900/90 dark:text-amber-200/90">They are listed under &ldquo;Quiz checks&rdquo; on this page.</span>
            </li>
          </ul>
        </>
      ) : null}
      {before.length || after.length ? (
        <p className="mt-2 text-xs text-amber-900/90 dark:text-amber-200/90">
          The full list, with notes, is under &ldquo;Launch to-do list&rdquo; on this page.
        </p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onConfirm}
          disabled={busy}
          className="min-h-11 rounded-md px-4 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-12"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {busy ? "Working…" : confirmLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={busy}
          className="min-h-11 rounded-md border border-neutral-300 px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 pointer-coarse:min-h-12"
        >
          Not yet
        </button>
      </div>
    </div>
  );
}

/** Should an action show the warning at all? Only when something on the list is still open. */
export function hasOpenTodos(todos: LaunchTodo[] | undefined): boolean {
  return Boolean(todos?.some((t) => t.status === "open"));
}

/** The warning opens when a launch to-do is open OR a measured quiz fails the length check. */
export function shouldWarnBeforeLaunch(todos: LaunchTodo[] | undefined, failingQuizzes = 0): boolean {
  return hasOpenTodos(todos) || quizLengthWarning(failingQuizzes) !== null;
}

/** Return focus to the control that opened the warning, once "Not yet" has closed it. */
export function focusLater(el: { current: HTMLElement | null }): void {
  setTimeout(() => el.current?.focus(), 0);
}
