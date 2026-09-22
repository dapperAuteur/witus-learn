import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";

// Quick-reference clip for the help article "Sharing, previews, and cross-promotion"
// (src/lib/help-articles.ts → slug "sharing-and-cross-promotion"). Captions only, no voice.
//
// SCOPE. Records the Share control, which is the part of the article every visitor can use. The
// article's other two bullets are not recorded here and one of them is wrong today — see the
// mismatch note below.
//
// Selectors read 2026-09-21 from:
//   src/components/share-button.tsx — the "↗ Share course" button (aria-haspopup="menu"), and the
//     popover role="menu" holding "Copy link" plus X / LinkedIn / Facebook / Email links
//   src/app/(tenant)/[username]/[courseSlug]/page.tsx (~line 362) — the course page renders
//     ShareButton only when the course is published and not private
//   src/components/course-card.tsx — the catalog card's price line, used to pick an open course
//
// MISMATCH WITH THE ARTICLE (reported, not fixed in this pass — witus plans/33 §5.2):
//   The article says "Link usage, the course page shows how often outbound links get clicked."
//   LinkUsagePanel is imported and rendered only by src/app/(tenant)/teach/[courseId]/page.tsx:17
//   and :230 — the instructor's course MANAGER, not the public course page. Nothing renders it on
//   [username]/[courseSlug]/page.tsx. The spec follows the app and stays off that claim.
//   "Related WitUS tools" is also conditional (showEcosystem && relatedSlugs.length > 0, ~line
//   742), so it is not asserted: on a course with no curated siblings it correctly renders nothing.
//
// SAFETY: read-only. The popover is opened, which posts nothing. NO channel is ever clicked —
// share-button.tsx fires POST /api/share on Copy link and on every channel link, which would add
// fake share counts to the admin dashboard's marketing signals.
//
// RECORDING NOTE — why this spec turns off the Web Share API. share-button.tsx onClick() branches:
// when navigator.share exists it hands the URL to the operating system's share sheet and returns,
// otherwise it opens the in-page popover. Chrome on macOS HAS navigator.share (verified by this
// spec failing against production on 2026-09-21: the click took the native branch and no popover
// appeared), and an OS-level sheet is drawn outside the page, so Playwright can neither see it nor
// record it. Step 1 therefore installs an init script that hides navigator.share, which puts the
// browser on the SAME branch as a desktop browser without the Web Share API — the branch the help
// article describes as "Copy / X / LinkedIn / Facebook / Email otherwise". Nothing about the
// component is changed; it is the fallback path, filmed.

defineTutorial(
  {
    slug: "sharing-and-cross-promotion",
    title: "Share a course page",
    startPath: "/courses",
  },
  [
    {
      title: "Open a course",
      narration: "Start on any course that is open to learners.",
      action: async (page) => {
        // See the RECORDING NOTE above: put this browser on the popover branch of
        // share-button.tsx. BOTH calls are needed. Clicking a catalog card is an App Router SOFT
        // navigation — same document, no scripts re-run — so addInitScript alone never fires and
        // the course page keeps the real navigator.share (that is why the first run of this spec
        // failed on 2026-09-21). The evaluate patches the document we are already in, which is the
        // one the course page renders into; addInitScript covers any hard navigation after it.
        const hideWebShare = () => {
          Object.defineProperty(navigator, "share", { value: undefined, configurable: true });
        };
        await page.addInitScript(hideWebShare);
        await page.evaluate(hideWebShare);
        // A card showing a price line ("Free" or "$…") is published and vetted, so its page is the
        // full course page and carries the Share button. Same selector rationale as
        // purchase-browse.tutorial.ts step 3.
        const priced = page
          .locator('a[href^="/course/"]')
          .filter({ has: page.locator("p", { hasText: /^\s*(Free|\$[\d,.]+)\s*$/ }) })
          .filter({ hasNot: page.getByText(/coming soon/i) });
        await expect(
          priced.first(),
          "No priced course card found — every catalog card is 'Coming soon', so no course page shows a Share button.",
        ).toBeVisible();
        await priced.first().click();
        await expect(page.getByText("← Back to catalog")).toBeVisible();
        await expect(page.locator("h1").first()).toBeVisible();
      },
    },
    {
      title: "The Share button",
      narration: "Share course sits beside the title on every published, public course page.",
      action: async (page) => {
        const share = page.getByRole("button", { name: /share course/i });
        await expect(share).toBeVisible();
        await expect(share).toHaveAttribute("aria-expanded", "false");
      },
    },
    {
      title: "Pick where it goes",
      narration: "It opens a short menu: copy the link, or hand it to X, LinkedIn, Facebook, or email.",
      action: async (page) => {
        await page.getByRole("button", { name: /share course/i }).click();
        const menu = page.getByRole("menu");
        await expect(menu).toBeVisible();
        // Shown, never clicked — each of these posts a share count to /api/share.
        await expect(menu.getByRole("menuitem", { name: "Copy link" })).toBeVisible();
        for (const channel of ["X", "LinkedIn", "Facebook", "Email"]) {
          await expect(menu.getByRole("menuitem", { name: channel, exact: true })).toBeVisible();
        }
      },
    },
    {
      title: "Escape closes it",
      narration: "Escape closes the menu without sharing anything.",
      action: async (page) => {
        await page.keyboard.press("Escape");
        await expect(page.getByRole("menu")).toHaveCount(0);
        await expect(page.getByRole("button", { name: /share course/i })).toHaveAttribute(
          "aria-expanded",
          "false",
        );
      },
    },
  ],
);
