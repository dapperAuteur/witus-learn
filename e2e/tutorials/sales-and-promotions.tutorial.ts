import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";

// Quick-reference clip for the help article "Sales and promotions (no promo code needed)"
// (src/lib/help-articles.ts → slug "sales-and-promotions"). Captions only, no voice.
//
// SCOPE. Records what a LEARNER meets — the public sales index and a sale's own page — because
// that is the half of the article that can be shown without changing prices. Starting or ending a
// sale in Admin → Marketing → Sales and promotions re-prices live courses for every visitor, so
// it is not driven against production.
//
// Selectors read 2026-09-21 from:
//   src/app/(tenant)/sale/page.tsx — <h1>Sales</h1>, the standfirst, the three section headings
//     "Running now" / "Starting soon" / "Ended", each row a <a href="/sale/<slug>"> carrying the
//     sale name and a discount label ("30% off", "$5 off", "Free"), and the empty state
//     "There are no sales running right now. Courses are at their usual prices."
//   src/lib/sale-pricing.ts — promotionStatus() is what sorts a promotion into those three
//     sections, and coursePriceView() is what puts the struck-through price on a card
//
// WHY ONLY SOME SALES ARE LISTED (sale/page.tsx header comment): a promotion gets a page only when
// it is given a slug. A one-off discount on a single course is a price, not a campaign, so the
// index deliberately does not list every promotion row.
//
// WHAT THIS SPEC DOES WHEN NOTHING IS ON SALE. The page renders its empty state, which is a true
// and recordable answer ("nothing is discounted today"), but it is not a useful clip. The spec
// passes either way and logs which face it filmed, so the recorder knows whether the take is
// worth keeping or should wait for a live campaign.
//
// SAFETY: read-only. Nothing is bought; no checkout control is clicked.

defineTutorial(
  {
    slug: "sales-and-promotions",
    title: "Where a sale shows up for learners",
    startPath: "/sale",
  },
  [
    {
      title: "The sales page",
      narration: "One page lists every campaign the school is running, with no code to type.",
      action: async (page) => {
        await expect(page.getByRole("heading", { name: "Sales", level: 1 })).toBeVisible();
        await expect(
          page.getByText(/Every current offer in one place/i),
        ).toBeVisible();
      },
    },
    {
      title: "Running, starting, ended",
      narration: "Campaigns are grouped by whether they are on now, starting soon, or already over.",
      action: async (page) => {
        const empty = page.getByText(/There are no sales running right now/i);
        if (await empty.isVisible().catch(() => false)) {
          // A true state of the page, and the honest thing to film when it is the truth.
          console.log("[sales-and-promotions] EMPTY STATE filmed — no promotion has a slug today.");
          await expect(empty).toBeVisible();
          return;
        }
        const sections = ["Running now", "Starting soon", "Ended"];
        const present: string[] = [];
        for (const s of sections) {
          if (await page.getByRole("heading", { name: s, exact: true }).isVisible().catch(() => false)) {
            present.push(s);
          }
        }
        console.log(`[sales-and-promotions] sections on screen: ${present.join(", ")}`);
        expect(present.length).toBeGreaterThan(0);
      },
    },
    {
      title: "What each row tells you",
      narration: "Each row names the campaign, how much comes off, and how much of the catalog it covers.",
      action: async (page) => {
        const rows = page.locator('a[href^="/sale/"]');
        if ((await rows.count()) === 0) {
          console.log("[sales-and-promotions] no sale rows — steps 3 and 4 have nothing to show.");
          return;
        }
        await expect(rows.first()).toBeVisible();
        await rows.first().scrollIntoViewIfNeeded();
      },
    },
    {
      title: "Every campaign has its own page",
      narration: "Opening a campaign gives it a page you can share, and that link keeps working after it ends.",
      action: async (page) => {
        const rows = page.locator('a[href^="/sale/"]');
        if ((await rows.count()) === 0) return;
        await rows.first().click();
        await page.waitForURL(/\/sale\/[^/]+$/);
        await expect(page.locator("h1").first()).toBeVisible();
      },
    },
  ],
);
