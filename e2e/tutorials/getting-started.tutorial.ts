import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";

// Quick-reference clip for the help article "Getting started as a teacher"
// (src/lib/help-articles.ts → slug "getting-started"). Captions only, no voice.
//
// AUTH: requiresAuth. Skips cleanly without TUTORIAL_STORAGE_STATE. The session must be an
// instructor, brand_admin or the platform owner on the recorded school — /teach renders "You are
// signed in, but not yet an instructor on this brand" for anyone else
// (src/app/(tenant)/teach/page.tsx). No credential is written into the repo.
//
// Selectors read 2026-09-21 from:
//   src/app/(tenant)/teach/page.tsx — <h1>Your courses</h1>, the header links (Help →, Edit
//     profile →, Curriculum feedback →, plus Admin → and Announce → for admins), and the
//     "New course" form: <label for="title">Title</label>, an optional Description, "Create course"
//   src/components/teacher-catalog.tsx — the "Search your courses" input (aria-label), the status
//     chips (All / Published / Draft / Private / On hold, each aria-pressed), the "N shown" count,
//     "Select all shown", and the bulk bar that appears once something is selected
//
// SAFETY. Nothing here writes. "Create course" is shown and never submitted — it inserts a real
// course row. The bulk bar is revealed by selecting rows, which is client-side state only
// (teacher-catalog.tsx holds `selected` in React), and every button on it — Publish, Unpublish,
// Make free, Mark vetted — is asserted and never clicked. The selection is cleared before the end
// so the recording does not finish on a screen full of ticked live courses.

defineTutorial(
  {
    slug: "getting-started",
    title: "Getting started as a teacher",
    startPath: "/teach",
    requiresAuth: true,
  },
  [
    {
      title: "Everything you write lives under Teach",
      narration: "Teach is where your courses live, with links out to your profile and your learners' feedback.",
      action: async (page) => {
        await expect(
          page.getByRole("heading", { name: "Your courses", level: 1 }),
          "This session is not an instructor on this school — /teach shows the not-an-instructor notice instead of the course list.",
        ).toBeVisible();
        await expect(page.getByRole("link", { name: "Curriculum feedback →" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Edit profile →" })).toBeVisible();
      },
    },
    {
      title: "Step one: a title",
      narration: "A new course needs a title and nothing else; the description can wait.",
      action: async (page) => {
        await expect(page.getByRole("heading", { name: "New course" })).toBeVisible();
        await expect(page.getByLabel("Title")).toBeVisible();
        await expect(page.getByLabel("Description (optional)")).toBeVisible();
        // SHOWN, NEVER SUBMITTED — this writes a real course on the school.
        await expect(page.getByRole("button", { name: "Create course" })).toBeVisible();
      },
    },
    {
      title: "Find one course among many",
      narration: "The list has its own search and a row of status filters, so a long catalog stays workable.",
      action: async (page) => {
        await expect(page.getByLabel("Search your courses")).toBeVisible();
        const all = page.getByRole("button", { name: "All", exact: true });
        await expect(all).toHaveAttribute("aria-pressed", "true");
        await expect(page.getByText(/\d+ shown/)).toBeVisible();
      },
    },
    {
      title: "Filter to drafts",
      narration: "Each filter narrows the list in place and the count underneath follows it.",
      action: async (page) => {
        const draft = page.getByRole("button", { name: "Draft", exact: true });
        await draft.click();
        await expect(draft).toHaveAttribute("aria-pressed", "true");
        await expect(page.getByText(/\d+ shown/)).toBeVisible();
        await page.getByRole("button", { name: "All", exact: true }).click();
      },
    },
    {
      title: "Work on several at once",
      narration: "Ticking courses opens a bar of bulk actions that apply to everything you selected.",
      action: async (page) => {
        // The bulk bar only exists once something is selected, and nothing can be selected in an
        // empty list — so an account with no courses would film this caption over a bare page.
        // Fail with the reason instead of a locator timeout.
        await expect(
          page.getByRole("link", { name: "Manage" }).first(),
          "This account's /teach list is empty, so there are no rows to tick and no bulk bar to film. Record with an " +
            "account that has courses, or set TUTORIAL_STORAGE_STATE to one that does.",
        ).toBeVisible();
        await page.getByRole("button", { name: "Select all shown" }).click();
        // Shown, never clicked: each one rewrites live courses.
        for (const label of ["Publish", "Unpublish", "Make free"]) {
          await expect(page.getByRole("button", { name: label, exact: true })).toBeVisible();
        }
        // Leave the list clean — the button reads "Clear (N)".
        await page.getByRole("button", { name: /^Clear \(\d+\)$/ }).click();
        await expect(page.getByRole("button", { name: "Publish", exact: true })).toHaveCount(0);
      },
    },
    {
      title: "Open one to write it",
      narration: "Manage opens a course, where settings, lessons, pricing and publishing all live.",
      action: async (page) => {
        const manage = page.getByRole("link", { name: "Manage" }).first();
        await expect(manage).toBeVisible();
        await manage.click();
        await expect(page.locator("h1").first()).toBeVisible();
      },
    },
  ],
);
