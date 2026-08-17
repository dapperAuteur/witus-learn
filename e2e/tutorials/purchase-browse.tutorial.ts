import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";

// "Buy a course on Learn.WitUS" — Tutorial A from witus plans/31-tutorial-narration-scripts.md,
// split in two on purpose:
//   purchase-browse (this file) — steps 1–5, SIGNED OUT. Safe against production: browse only,
//     nothing is submitted, nothing is bought. Runs with no env at all (given a reachable target).
//   purchase-enroll (purchase-enroll.tutorial.ts) — steps 6–11, SIGNED IN, auth-gated.
// Narration lines are VERBATIM from plans/31 (BAM records one audio file per step). Selectors come
// from the 2026-08-16 flow map of this repo: src/app/(tenant)/page.tsx (home value section),
// src/app/(tenant)/courses/page.tsx (catalog), src/components/course-card.tsx (price/Free line),
// src/app/(tenant)/[username]/[courseSlug]/page.tsx (course page + signed-out CTA),
// src/app/login/page.tsx + src/components/magic-link-form.tsx (login card).
//
// MONEY/SIDE-EFFECT SAFETY: this spec must stay read-only. It never fills or submits the magic-link
// form (that would send a real email), never signs in, and never touches an enroll/buy control.
//
// Multi-tenant note: record against the flagship host (learn.witus.online) — the home-page value
// section and catalog copy asserted here are the WitUS-branded tenant home. A tenant with
// requiresAgeGate would interpose the age-gate before any of this; the flagship school has none.

defineTutorial(
  {
    slug: "purchase-browse",
    title: "Buy a course on Learn.WitUS — browse and sign-in (signed out)",
  },
  [
    {
      title: "Learn.WitUS",
      narration:
        "This is Learn dot WitUS dot online. Courses you can trust — and prove you took. Every course here ends in a certificate anyone can verify. Let's buy one.",
      action: async (page) => {
        // Signed-out home: h1 is the school name; the value section renders only for visitors.
        await expect(page.locator("h1").first()).toBeVisible();
        await expect(page.getByRole("heading", { name: /courses you can trust, and prove you took/i })).toBeVisible();
        await expect(page.getByRole("link", { name: /browse courses/i })).toBeVisible();
      },
    },
    {
      title: "Browse the catalog",
      narration:
        "Browse courses takes you to the full catalog. You can search, filter by track, and every card shows the price up front — some are free, some are paid.",
      action: async (page) => {
        await page.getByRole("link", { name: /browse courses/i }).click();
        await expect(page.getByRole("heading", { name: "Courses" }).first()).toBeVisible();
        // At least one course card (cards link to the stable /course/<id> URL).
        await expect(page.locator('a[href^="/course/"]').first()).toBeVisible();
      },
    },
    {
      title: "Open a course page",
      narration:
        "A course page shows you everything before you spend a dime: the full syllabus, prerequisites, and the sources it's built on — citations included.",
      action: async (page) => {
        // Click a card that shows a PRICE LINE ("Free" or "$…") — a priced card is a published,
        // buyable course, so the next step's signed-out CTA is guaranteed to render. Match the
        // course-card price <p> exactly (anchored regex), not text anywhere in the card: course
        // descriptions can mention "Free"/"$" too, and unvetted "Coming soon" cards (which can't
        // be bought and have no enroll CTA) would otherwise slip through. Belt and braces: also
        // exclude any card carrying the Coming soon badge.
        const pricedCards = page
          .locator('a[href^="/course/"]')
          .filter({ has: page.locator("p", { hasText: /^\s*(Free|\$[\d,.]+)\s*$/ }) })
          .filter({ hasNot: page.getByText(/coming soon/i) });
        // Fail fast and legibly when the catalog has no vetted course yet: the vetted_at
        // migration didn't backfill (src/lib/vetting.ts), so until the platform owner vets
        // courses, EVERY card is "Coming soon" and this tutorial cannot record honestly.
        // (True of production as of 2026-08-16: 213/213 cards unvetted.)
        await expect(
          pricedCards.first(),
          "No priced course card found — every catalog card is 'Coming soon'. Vet at least one (free) course (courses.vetted_at) before recording this tutorial.",
        ).toBeVisible();
        await pricedCards.first().click();
        // /course/<id> redirects to the canonical /{username}/{courseSlug} page.
        await expect(page.getByText("← Back to catalog")).toBeVisible();
        await expect(page.locator("h1").first()).toBeVisible();
      },
    },
    {
      title: "Enrolling starts with signing in",
      narration:
        "To enroll, you sign in first — that's how your progress and your certificate stay attached to you.",
      action: async (page) => {
        // Signed-out CTA under the syllabus header area: "Sign in to enroll and track your progress."
        const cta = page.getByText(/to enroll and track your progress/i);
        await cta.scrollIntoViewIfNeeded();
        await expect(cta).toBeVisible();
      },
    },
    {
      title: "No password — a one-time link",
      narration:
        "No password to remember. Type your email, and we send you a one-time link. If you already have a WitUS account, one click on Sign in with WitUS does the same job.",
      action: async (page) => {
        // Scoped to the CTA paragraph: the site header carries its own "Sign in" link, and an
        // unscoped getByRole would trip strict mode with two matches.
        await page
          .locator("p", { hasText: /to enroll and track your progress/i })
          .getByRole("link", { name: "Sign in" })
          .click();
        await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
        await expect(page.getByText(/no password, we email you a one-time link/i)).toBeVisible();
        await expect(page.getByPlaceholder("you@example.com")).toBeVisible();
        // Show the button; do NOT fill or submit — submitting sends a real magic-link email.
        await expect(page.getByRole("button", { name: /email me a sign-in link/i })).toBeVisible();
      },
    },
  ],
);
