"use client";

import { useRef, type ReactNode } from "react";
import { capture } from "@/lib/analytics/capture";
import { EVENTS } from "@/lib/analytics/events";

/**
 * The client half of "How this course's quizzes are built" (src/components/course-quiz-integrity.tsx):
 * a native <details> whose content stays server-rendered, plus one analytics event the first time a
 * visitor opens it on this page view (plans/98 v2, BAM Q3 2026-11-01: does anyone open the panel?).
 *
 * Ids and the surface only: { course_id, surface }. Nothing about the visitor or the quizzes. The
 * <details> keeps working with JavaScript off; only the event needs it.
 */
export function QuizIntegrityDetails({
  courseId,
  surface,
  className,
  children,
}: {
  courseId: string;
  surface: "course" | "coming_soon";
  className?: string;
  children: ReactNode;
}) {
  const sent = useRef(false);
  return (
    <details
      className={className}
      onToggle={(e) => {
        if (!e.currentTarget.open || sent.current) return;
        sent.current = true;
        capture(EVENTS.quizIntegrityPanelOpened, { course_id: courseId, surface });
      }}
    >
      {children}
    </details>
  );
}
