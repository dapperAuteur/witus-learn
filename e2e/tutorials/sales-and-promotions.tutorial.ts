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
// WHAT THIS SPEC DOES WHEN NOTHING IS ON SALE: it FAILS, on purpose (witus plans/33 §5.2). An
// earlier version passed against the empty state and logged a warning, which meant steps 3 and 4
// captioned "Each row names the campaign…" and "Opening a campaign gives it a page…" over a screen
// with no rows on it. A spec that passes while its clip says something false is worse than one
// that fails: the failure is seen, the false caption is not. The requirement is stated in the
// assertion message so the recorder knows exactly what to arrange.
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
        // The rows ARE the sections: sale/page.tsx renders a heading only for a group that has
        // rows, and the empty state instead of all three. Requiring a row is therefore the same
        // check as requiring a section, and it is the thing steps 3 and 4 caption.
        await expect(
          page.locator('a[href^="/sale/"]').first(),
          "No campaigns on /sale — this school has no promotion with a slug, so the page shows its empty state and " +
            "steps 2 to 4 would be captioned over a screen with nothing on it. Before recording this article, create " +
            "a promotion WITH A SLUG in Admin → Marketing → Sales and promotions (any status: running, scheduled or " +
            "ended — sale/page.tsx lists all three). Recording is not possible until then.",
        ).toBeVisible();
        // At least one of the three group headings is therefore on screen; name it in the run log
        // so the finished clip can be checked against this caption.
        const present: string[] = [];
        for (const s of ["Running now", "Starting soon", "Ended"]) {
          if (await page.getByRole("heading", { name: s, exact: true }).isVisible().catch(() => false)) {
            present.push(s);
          }
        }
        expect(present.length, "Sale rows are on the page but no group heading is").toBeGreaterThan(0);
        console.log(`[sales-and-promotions] groups on screen: ${present.join(", ")}`);
      },
    },
    {
      title: "What each row tells you",
      narration: "Each row names the campaign, how much comes off, and how much of the catalog it covers.",
      action: async (page) => {
        const row = page.locator('a[href^="/sale/"]').first();
        await expect(row).toBeVisible();
        await row.scrollIntoViewIfNeeded();
        // The three things the caption promises, from sale/page.tsx: the name, the discount label
        // ("30% off" / "$5 off" / "Free"), and the scope line.
        await expect(row).toHaveText(/%\soff|\$[\d,.]+\soff|Free/);
        await expect(row).toHaveText(/Everything in the catalog|\d+ courses?|One item/);
      },
    },
    {
      title: "Every campaign has its own page",
      narration: "Opening a campaign gives it a page you can share, and that link keeps working after it ends.",
      action: async (page) => {
        await page.locator('a[href^="/sale/"]').first().click();
        await page.waitForURL(/\/sale\/[^/]+$/);
        // The sale's own name is the <h1> of its page (sale/[slug]/page.tsx:82).
        await expect(page.locator("h1").first()).toBeVisible();
      },
    },
  ],
);
