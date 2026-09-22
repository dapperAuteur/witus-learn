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
// WHICH COURSE. The recorded course must be PRICED, not free: the amount field and the "You keep
// about $X per sale" estimate only render for a non-free price, and step 3's caption promises
// both. The spec fails with that instruction rather than filming a Free course under a caption
// about fees. Pin the course with TUTORIAL_TEACH_COURSE=/teach/<slug>.
//
// The "Stripe isn't configured" warning the article mentions is deliberately NOT a step: it renders
// only when the school has no Stripe keys, so on a correctly configured school its ABSENCE is the
// right answer, and a caption naming it would be describing something not on screen.
//
// Selectors read 2026-09-21 from src/components/course-settings-form.tsx: the "Course settings"
// heading, <label for="cs-pricetype">Pricing</label> with options Free / One-time purchase /
// Subscription, the aria-label="Price in dollars" amount field, the aria-label="Billing frequency"
// select (Monthly / Annually) that appears only for a subscription, the "You keep about $X per
// sale" fee estimate that appears once a non-free price is set, and the "Save settings" button.

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
      // The amount field and the "You keep about $X per sale" line render only for a non-free
      // price (course-settings-form.tsx: `v.priceType !== "free" && v.price > 0`). This step FAILS
      // rather than logging on a free course: the caption promises an amount and a fee estimate,
      // and a clip that says that over a Pricing box set to Free is a false clip.
      await expect(
        page.getByLabel("Price in dollars"),
        "This course is Free, so there is no amount field and no fee estimate to film. Point " +
          "TUTORIAL_TEACH_COURSE at a course with a one-time or subscription price before recording this article.",
      ).toBeVisible();
      await expect(
        page.getByText(/You keep about \$/),
        "The course is priced but the fee estimate is not on screen — course-settings-form.tsx shows it only when " +
          "price > 0. Use a course with a non-zero price.",
      ).toBeVisible();
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
