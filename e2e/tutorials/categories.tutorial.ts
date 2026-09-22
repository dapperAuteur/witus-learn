import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";

// Quick-reference clip for the help article "Organize courses with categories"
// (src/lib/help-articles.ts → slug "categories"). Captions only, no voice.
//
// SCOPE. The article has two halves. This spec records the LEARNER-FACING half — the catalog's
// category chips, which is what a category is FOR — because it is public and read-only. The
// authoring half (Admin → Categories: add, rename, delete) renames or deletes categories on a live
// catalog, so it is not recorded against production; the manifest keeps that stated.
//
// Selectors read 2026-09-21 from src/app/(tenant)/courses/page.tsx: the <h1>Courses</h1>, the
// search/sort form (#q, #sort), the <nav aria-label="Categories"> of chip links where "All" is
// /courses and each category is /courses?category=<name>, and the "N courses in <category>" count
// line under it. Category rows come from sdb.listCategories() (tenant-scoped).
//
// SAFETY: read-only. Navigates and reads; submits nothing, and touches no admin control.
//
// Multi-tenant note: record against learn.witus.online. The chips render only when the tenant has
// categories (courses/page.tsx wraps the <nav> in `categories.length > 0`), so a fresh white-label
// school would legitimately show none and this tutorial would have nothing to say.

defineTutorial(
  {
    slug: "categories",
    title: "Organize courses with categories",
    startPath: "/courses",
  },
  [
    {
      title: "The catalog",
      narration: "The catalog lists every course in the school, with a search box and a sort order.",
      action: async (page) => {
        await expect(page.getByRole("heading", { name: "Courses", level: 1 })).toBeVisible();
        await expect(page.locator("#q")).toBeVisible();
        await expect(page.locator("#sort")).toBeVisible();
      },
    },
    {
      title: "Categories are the row of chips",
      narration: "The row under the search box is one chip per category, starting with All.",
      action: async (page) => {
        const chips = page.getByRole("navigation", { name: "Categories" }).getByRole("link");
        // Fail legibly on a school that has no categories yet: the <nav> is not rendered at all,
        // so there is nothing to film rather than an empty row.
        await expect(
          chips.first(),
          "No category chips on /courses — this school has no categories (courses/page.tsx renders the nav only when listCategories() returns rows).",
        ).toBeVisible();
        await expect(chips.filter({ hasText: /^All$/ })).toHaveCount(1);
        expect(await chips.count()).toBeGreaterThan(1);
      },
    },
    {
      title: "Pick one category",
      narration: "Choosing a chip filters the catalog to that category and puts it in the address bar.",
      action: async (page) => {
        // The first chip after "All" — whichever category this school ordered first.
        const chip = page.getByRole("navigation", { name: "Categories" }).getByRole("link").nth(1);
        const name = (await chip.innerText()).trim();
        await chip.click();
        await page.waitForURL(/\/courses\?category=/);
        // The count line says "N courses in <category>" (courses/page.tsx).
        await expect(page.getByText(new RegExp(`courses? in ${escapeRe(name)}`, "i"))).toBeVisible();
      },
    },
    {
      title: "The chosen chip is marked",
      narration: "The active chip is bold and marked as current, so the filter you are in is never a guess.",
      action: async (page) => {
        await expect(
          page.getByRole("navigation", { name: "Categories" }).locator('a[aria-current="true"]'),
        ).toHaveCount(1);
      },
    },
    {
      title: "Back to everything",
      narration: "All clears the filter and returns the whole catalog.",
      action: async (page) => {
        await page.getByRole("navigation", { name: "Categories" }).getByRole("link", { name: "All", exact: true }).click();
        await page.waitForURL(/\/courses\/?$/);
        await expect(page.getByRole("heading", { name: "Courses", level: 1 })).toBeVisible();
      },
    },
  ],
);

/** Category names are tenant data and can contain regex metacharacters. */
function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
