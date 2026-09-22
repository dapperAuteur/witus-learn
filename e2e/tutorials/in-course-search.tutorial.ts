import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";
import { openLearnerCourse } from "./_helpers";

// Quick-reference clip for the help article "Search inside a course"
// (src/lib/help-articles.ts → slug "in-course-search"). Captions only, no voice.
//
// AUTH: requiresAuth. Skips without TUTORIAL_STORAGE_STATE. The box renders only for someone who
// can read the content — an enrolled learner, an editor, or an invited auditor
// (src/app/(tenant)/[username]/[courseSlug]/page.tsx, the `view.isEnrolled || isEditor ||
// view.isAuditor` gate around the "Search this course" section; /api enforces the same gate
// server-side). So the session must be enrolled in, or own, the course this records. Point it at
// one with TUTORIAL_COURSE_PATH=/<username>/<courseSlug>.
//
// NOTE ON THE ARTICLE. It says "Enrolled learners (and you, on your own courses)". The code also
// admits an invited AUDITOR, which the article does not mention. Not a contradiction, just an
// omission; reported rather than edited (witus plans/33 §5.2).
//
// Selectors read 2026-09-21 from src/components/course-search.tsx: <label for="course-search-q">
// Find a word or phrase in this course</label>, the search input (placeholder "e.g. a term, a
// date, a name"), the helper line "Searches lesson text, self-checks, and image descriptions (alt
// text, captions, credits).", and the role="status" aria-live="polite" line that reads
// "Searching…", "N matches", or the no-match sentence. Results appear as a list of links into the
// lessons. Queries shorter than two characters are ignored and there is a 300 ms debounce.
//
// SAFETY: read-only. A search is a GET; nothing is written, and no other learner's notes or
// results are ever on screen (the search covers lesson content, not people).

const QUERY = process.env.TUTORIAL_SEARCH_QUERY ?? "the";

defineTutorial(
  {
    slug: "in-course-search",
    title: "Search inside a course",
    startPath: "/courses",
    requiresAuth: true,
  },
  [
    {
      title: "Open a course you are in",
      narration: "The search box is on the course page, for anyone who can read the lessons.",
      action: async (page) => {
        await openLearnerCourse(page);
        const heading = page.getByRole("heading", { name: "Search this course" });
        await heading.scrollIntoViewIfNeeded();
        await expect(
          heading,
          "No 'Search this course' box — this session is not enrolled in, and does not own, the course being recorded. Set TUTORIAL_COURSE_PATH to one it can read.",
        ).toBeVisible();
      },
    },
    {
      title: "What it looks through",
      narration: "It searches the lesson text, the self-check cards, and the descriptions attached to images.",
      action: async (page) => {
        await expect(page.getByLabel("Find a word or phrase in this course")).toBeVisible();
        await expect(
          page.getByText(/Searches lesson text, self-checks, and image descriptions/),
        ).toBeVisible();
      },
    },
    {
      title: "Type a word",
      narration: "Results arrive as you type, once you are past a couple of letters.",
      action: async (page) => {
        await page.getByLabel("Find a word or phrase in this course").fill(QUERY);
        // 300 ms debounce, then the request; the status line settles on a count or the no-match
        // sentence. Wait for it to stop saying "Searching…" rather than for a fixed sleep.
        await expect(page.getByRole("status")).not.toHaveText(/Searching…/, { timeout: 20_000 });
      },
    },
    {
      title: "It says what it found",
      narration: "The line under the box gives the number of matches, or says plainly that there were none.",
      action: async (page) => {
        await expect(page.getByRole("status")).toHaveText(/\d+ match(es)?|No matches in this course/);
      },
    },
    {
      title: "Images, not pictures",
      narration: "Image results come from the alt text and captions, not from the pictures themselves.",
      action: async (page) => {
        // The empty state says this in those words on purpose (course-search.tsx), and the helper
        // line above the box says it before a learner searches at all.
        await expect(
          page.getByText(/Searches lesson text, self-checks, and image descriptions/),
        ).toBeVisible();
      },
    },
  ],
);
