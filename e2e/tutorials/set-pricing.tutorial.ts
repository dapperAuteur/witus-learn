import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";
import { openTeachCourse } from "./_helpers";

// Quick-reference clip for the help article "Set a price (it's here, not in Stripe)"
// (src/lib/help-articles.ts → slug "set-pricing"). Captions only, no voice.
//
// AUTH: requiresAuth. Skips without TUTORIAL_STORAGE_STATE. Needs the instructor of the course
// (or a brand admin / the platform owner) — course-settings-form.tsx otherwise refuses the save
// with "You don't have permission to edit this course".
//
// ===== MUTATION SAFETY =====
// Pricing is the one settings field whose value is money. Changing it re-prices the next checkout
// (help article: "Changing the price re-prices the next checkout automatically"), so:
//  - the spec reads the Pricing controls and STOPS. "Save settings" is asserted, never clicked.
//  - TUTORIAL_ALLOW_MUTATIONS=1 is the only way to add the save step, and it is off by default.
//    The step is appended CONDITIONALLY, at load time, so marks.json always matches what actually
//    recorded (same pattern as purchase-enroll.tutorial.ts).
//  - Even with the flag on, this must not be pointed at production. Point PLAYWRIGHT_BASE_URL at a
//    preview deployment with its own database.
//
// Selectors read 2026-09-21 from src/components/course-settings-form.tsx: the "Course settings"
// heading, <label for="cs-pricetype">Pricing</label> with options Free / One-time purchase /
// Subscription, the aria-label="Price in dollars" amount field, the aria-label="Billing frequency"
// select (Monthly / Annually) that appears only for a subscription, the "You keep about $X per
// sale" fee estimate that appears once a non-free price is set, the "Stripe isn't configured"
// warning shown when !hasStripe on a paid course, and the "Save settings" button.

const ALLOW_MUTATIONS = process.env.TUTORIAL_ALLOW_MUTATIONS === "1";

const steps = [
  {
    title: "Pricing lives in the course, not in Stripe",
    narration: "Open the course and scroll to Course settings; the price is a field here.",
    action: async (page: import("@playwright/test").Page) => {
      await openTeachCourse(page);
      const settings = page.getByRole("heading", { name: "Course settings" });
      await settings.scrollIntoViewIfNeeded();
      await expect(settings).toBeVisible();
    },
  },
  {
    title: "Three kinds of price",
    narration: "A course is free, a one-time purchase, or a subscription.",
    action: async (page: import("@playwright/test").Page) => {
      const pricing = page.getByLabel("Pricing");
      await pricing.scrollIntoViewIfNeeded();
      await expect(pricing).toBeVisible();
      for (const option of ["Free", "One-time purchase", "Subscription"]) {
        await expect(pricing.locator("option", { hasText: option })).toHaveCount(1);
      }
    },
  },
  {
    title: "What you actually keep",
    narration: "Choose an amount and the form says what is left after the estimated processor fee.",
    action: async (page: import("@playwright/test").Page) => {
      // The amount field and the fee estimate render only for a non-free price. On a free course
      // there is nothing to show, which is itself true and worth saying in the caption.
      const amount = page.getByLabel("Price in dollars");
      if (await amount.isVisible().catch(() => false)) {
        await expect(amount).toBeVisible();
        await expect(page.getByText(/You keep about \$/)).toBeVisible();
      } else {
        console.log("[set-pricing] this course is Free — no amount field or fee estimate to film.");
      }
    },
  },
  {
    title: "Stripe only executes it",
    narration: "Stripe charges whatever is set here, and says so plainly when its keys are missing.",
    action: async (page: import("@playwright/test").Page) => {
      // The warning is conditional (hasStripe), so it is checked and reported, not asserted:
      // on a correctly configured school its ABSENCE is the right answer.
      const warning = page.getByText(/Stripe isn't configured/i);
      const shown = await warning.isVisible().catch(() => false);
      console.log(`[set-pricing] "Stripe isn't configured" warning on screen: ${shown}`);
    },
  },
  {
    title: "Saving is the last step",
    narration: "Save settings writes the new price, and the next checkout uses it.",
    action: async (page: import("@playwright/test").Page) => {
      const save = page.getByRole("button", { name: "Save settings" });
      await save.scrollIntoViewIfNeeded();
      // NOT CLICKED. See the mutation-safety header.
      await expect(save).toBeVisible();
    },
  },
];

if (ALLOW_MUTATIONS) {
  steps.push({
    // Only reachable with TUTORIAL_ALLOW_MUTATIONS=1, which must never be set against production.
    title: "Saved",
    narration: "The price is saved on the course, and nothing had to be changed in Stripe.",
    action: async (page: import("@playwright/test").Page) => {
      await page.getByRole("button", { name: "Save settings" }).click();
      await expect(page.getByText(/Saved|Saving…/)).toBeVisible({ timeout: 30_000 });
    },
  });
}

defineTutorial(
  {
    slug: "set-pricing",
    title: "Set a course's price",
    startPath: "/teach",
    requiresAuth: true,
  },
  steps,
);
