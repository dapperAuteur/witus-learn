import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";

// Quick-reference clip for the help article "See learner feedback and problem reports"
// (src/lib/help-articles.ts → slug "learner-feedback-and-reports"). Captions only, no voice.
//
// SCOPE. Records the reporting end — the site-wide "🐞 Report a problem" button — because it is
// public, works signed out, and is the half a teacher needs to be able to describe to a learner.
// The reading end is not recorded: /teach → Curriculum feedback and Admin → Problem reports both
// display other people's submissions, and witus plans/33 §5.4 forbids filming another user's data.
//
// Selectors read 2026-09-21 from:
//   src/components/report-problem.tsx — the collapsed "🐞 Report a problem" button, the popover's
//     "Report a problem" heading, the role="group" aria-label="Report type" chips (bug / feedback /
//     idea / other, each aria-pressed), the textarea aria-label "Describe the problem or idea",
//     the email input aria-label "Your email (optional)", the submit button ("Send report" when
//     online, "Save report" when offline), and the ✕ button aria-label "Close"
//   src/app/(tenant)/layout.tsx:14,66 — <ReportProblem/> is mounted in the tenant layout, so the
//     button is on every tenant page, signed in or out
//
// SAFETY: the form is opened and typed into but NEVER submitted. Submitting POSTs to /api/report,
// which files a real problem report on the platform owner's triage queue and mirrors owner-course
// feedback to the WitUS Inbox. The last step closes the popover with ✕ instead.
//
// The offline half of the article ("Waiting to send", the queued-report card) needs the browser to
// go offline mid-form; it is not recorded here.

defineTutorial(
  {
    slug: "learner-feedback-and-reports",
    title: "Report a problem from any page",
    startPath: "/courses",
  },
  [
    {
      title: "The button is on every page",
      narration: "Report a problem sits in the bottom corner of every page, whether you are signed in or not.",
      action: async (page) => {
        await expect(page.getByRole("button", { name: /report a problem/i })).toBeVisible();
      },
    },
    {
      title: "Open the form",
      narration: "It opens a small form right where you are, so you do not lose the page you are on.",
      action: async (page) => {
        await page.getByRole("button", { name: /report a problem/i }).click();
        await expect(page.getByRole("group", { name: "Report type" })).toBeVisible();
        await expect(page.getByLabel("Describe the problem or idea")).toBeVisible();
      },
    },
    {
      title: "Say which kind it is",
      narration: "Four kinds: bug, feedback, idea, or other. Bug is selected until you pick another.",
      action: async (page) => {
        const group = page.getByRole("group", { name: "Report type" });
        await expect(group.getByRole("button", { name: "bug" })).toHaveAttribute("aria-pressed", "true");
        await group.getByRole("button", { name: "feedback" }).click();
        await expect(group.getByRole("button", { name: "feedback" })).toHaveAttribute("aria-pressed", "true");
      },
    },
    {
      title: "Write what happened",
      narration: "Describe the problem, and leave an email only if you want a reply.",
      action: async (page) => {
        // Typed, never sent. The [TUTORIAL] marker is here so that if this text ever DOES reach the
        // triage queue by accident, it is obvious what it is (witus plans/33 §5.4).
        await page
          .getByLabel("Describe the problem or idea")
          .fill("[TUTORIAL] Lesson 3 gives the date as 1851; the source page says 1850.");
        await expect(page.getByLabel("Your email (optional)")).toBeVisible();
        // The page it was filed from is captured automatically (report-problem.tsx pageUrl).
        await expect(page.getByRole("button", { name: "Send report" })).toBeEnabled();
      },
    },
    {
      title: "Where it lands",
      narration: "Sending it puts the note on the school's triage list, with the page it came from attached.",
      action: async (page) => {
        // NOT CLICKED — see the safety header. Close the form instead, discarding the draft.
        await page.getByRole("button", { name: "Close" }).click();
        await expect(page.getByRole("button", { name: /report a problem/i })).toBeVisible();
      },
    },
  ],
);
