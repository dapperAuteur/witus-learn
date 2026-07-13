"use client";

import { useEffect, useRef } from "react";

/** Don't re-ping the SAME lesson if we pinged it this recently. */
const REPING_AFTER_MS = 5 * 60 * 1000;
const KEY = "witus:last-lesson-view";

// Renders nothing. Tells the server "the learner opened this lesson", which is what makes
// "continue where you left off" able to point at the lesson they were ACTUALLY on rather than
// the first gap in the syllabus. Opening a lesson is not finishing it — this never completes
// anything, and a viewed lesson is excluded from the completion % and any certificate.
//
// Frugal on purpose (Neon data-transfer is a live budget):
//   • one fetch per lesson OPEN, never on re-render — a ref survives React's StrictMode
//     double-effect, so the dev double-mount doesn't double-fire;
//   • a single sessionStorage record of the LAST lesson pinged (not one key per lesson)
//     suppresses an immediate re-ping of the same lesson — e.g. bouncing back from the quiz.
//     Because it stores the last lesson rather than a per-lesson timestamp, navigating
//     20 → 5 → 20 still re-pings 20, so the resume anchor follows the learner correctly;
//   • the server debounces again (30s) in case any of the above is bypassed.
export function LessonViewPing({ courseId, lessonId }: { courseId: string; lessonId: string }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    try {
      const [prevId, prevAt] = (sessionStorage.getItem(KEY) ?? "").split(":");
      if (prevId === lessonId && Date.now() - Number(prevAt) < REPING_AFTER_MS) return;
      sessionStorage.setItem(KEY, `${lessonId}:${Date.now()}`);
    } catch {
      // Private mode / storage disabled — fall through and ping. The server debounce still holds.
    }

    void fetch(`/api/courses/${courseId}/lessons/${lessonId}/view`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "{}",
      keepalive: true,
    }).catch(() => {
      // Resume is a convenience, never a correctness requirement. A failed ping means the
      // learner resumes from an older anchor — it must never surface an error to them.
    });
  }, [courseId, lessonId]);

  return null;
}
