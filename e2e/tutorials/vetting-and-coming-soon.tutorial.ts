import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";

// Quick-reference clip for the help article 'Vetting a course, and the "Coming soon" page'
// (src/lib/help-articles.ts → slug "vetting-and-coming-soon"). Captions only, no voice.
//
// SCOPE. This records the half a stranger sees: what a course that has not been vetted yet looks
// like from outside. The platform owner's half (the /teach?status=unvetted queue, "Mark vetted",
// "Open while unvetted") mutates live courses and is deliberately not automated — a seven-step
// narrated script for it already exists in src/lib/tutorial-scripts.ts for a hand-recorded take.
//
// Selectors read 2026-09-21 from:
//   src/app/(tenant)/courses/page.tsx — catalog grid; an unvetted card carries "🕒 Coming soon"
//   src/components/course-card.tsx — that badge renders INSIDE the card's own <a href="/course/…">
//     (via <ComingSoonBadge/>), in place of the price, so the anchor itself is filterable
//   src/components/coming-soon-course.tsx — ComingSoonCourseFace / ComingSoonPanel: the "← Back to
//     catalog" link, the h2 "This course is being reviewed", the collapsed <details> summary
//     "Want to help this course open? Test it, or vet it →", and the closing "Already studying
//     this course? Sign in and it will open as usual."
//   src/components/course-notify-form.tsx — label "Get notified when this course opens" + the
//     "Notify me" button
//   src/components/course-interest-form.tsx — legend "How would you like to be involved?" + the
//     "Put my name in" button
//
// SAFETY: read-only, and this one matters. NEITHER form is ever submitted. "Notify me" writes a
// lead (POST /api/course-notify) and "Put my name in" records a review request that is mirrored to
// the WitUS Inbox — both would put a fake person in the platform owner's queue. Both are shown,
// neither is filled or clicked.
//
// Multi-tenant note: record against learn.witus.online. A school with every course vetted has no
// Coming-soon card and this tutorial has nothing to show; the spec says so rather than passing.

defineTutorial(
  {
    slug: "vetting-and-coming-soon",
    title: 'A course that is still "Coming soon"',
    startPath: "/courses",
  },
  [
    {
      title: "Coming soon in the catalog",
      narration: "A course that has not been reviewed yet carries a Coming soon badge instead of a price.",
      action: async (page) => {
        const comingSoon = page.locator('a[href^="/course/"]').filter({ hasText: /coming soon/i });
        await expect(
          comingSoon.first(),
          "No 'Coming soon' card in the catalog — every course here is vetted, so this article has nothing to record on this school.",
        ).toBeVisible();
        await comingSoon.first().scrollIntoViewIfNeeded();
      },
    },
    {
      title: "Its page is still public",
      narration: "Opening it still gives you the title, who teaches it, and what the course covers.",
      action: async (page) => {
        await page.locator('a[href^="/course/"]').filter({ hasText: /coming soon/i }).first().click();
        // /course/<id> redirects to the canonical /{username}/{courseSlug} page.
        await expect(page.getByText("← Back to catalog")).toBeVisible();
        await expect(page.locator("h1").first()).toBeVisible();
      },
    },
    {
      title: "What is closed, and why",
      narration: "In place of the lessons is a panel saying the course is being checked against its sources.",
      action: async (page) => {
        const panel = page.getByRole("heading", { name: "This course is being reviewed" });
        await panel.scrollIntoViewIfNeeded();
        await expect(panel).toBeVisible();
        // No date is shown on purpose (coming-soon-course.tsx): a missed date is worse than none.
        await expect(page.getByText(/Enrollment opens when the review is finished/i)).toBeVisible();
      },
    },
    {
      title: "Ask to be told when it opens",
      narration: "One field takes an email address and adds it to the list for this course.",
      action: async (page) => {
        await expect(page.getByLabel("Get notified when this course opens")).toBeVisible();
        // SHOWN, NEVER CLICKED — submitting creates a real lead for the platform owner.
        await expect(page.getByRole("button", { name: "Notify me" })).toBeVisible();
      },
    },
    {
      title: "Or offer to help it open",
      narration: "The panel underneath opens a longer form for people who want to test the course or vet it.",
      action: async (page) => {
        const summary = page.getByText(/Want to help this course open\?/i);
        await summary.scrollIntoViewIfNeeded();
        await summary.click();
        await expect(page.getByText("How would you like to be involved?")).toBeVisible();
        // SHOWN, NEVER CLICKED — this records a request that reaches the WitUS Inbox.
        await expect(page.getByRole("button", { name: "Put my name in" })).toBeVisible();
      },
    },
    {
      title: "Already enrolled? Nothing changed",
      narration: "Anyone already studying the course still gets all of it; the page says so at the bottom.",
      action: async (page) => {
        const note = page.getByText(/Already studying this course\?/i);
        await note.scrollIntoViewIfNeeded();
        await expect(note).toBeVisible();
      },
    },
  ],
);
