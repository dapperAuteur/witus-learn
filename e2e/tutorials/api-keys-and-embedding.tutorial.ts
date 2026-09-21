import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";

// Quick-reference clip for the help article "Embed your courses in another app (API keys)"
// (src/lib/help-articles.ts → slug "api-keys-and-embedding"). Captions only, no voice.
//
// SCOPE — and one deliberate omission. The article has two halves: a per-school API key for a
// partner's BACKEND, and the paste-anywhere iframes that need no key at all. This records the
// second half only.
//
// THE KEY HALF IS NOT RECORDED, ON PURPOSE. /admin/api-keys shows the full key exactly once, right
// after creation, and it is never retrievable again (src/components/api-keys-admin.tsx). A video
// of that screen is a leaked credential that outlives the recording, and the clip would then have
// to be made with a key that must immediately be revoked. Record that half by hand, off-camera, or
// not at all. Revoking is likewise a real, immediate, permanent mutation.
//
// Selectors read 2026-09-21 from:
//   src/app/embed/card/[id]/page.tsx — the public card: tenant name, the course <h1>, the price
//     line or the "🕒 Coming soon" pill, and the click-through anchor (target="_top")
//   src/app/embed/course/[id]/page.tsx — the chromeless course view: tenant name, <h1>, an <ol> of
//     published lessons each with its lessonType, and the "Continue" link out
//   src/components/course-card.tsx — catalog cards link to /course/<uuid>, which is where this
//     spec gets a real course id from rather than hardcoding one
//   next.config.ts — `frame-ancestors *` is scoped to /embed/* only; that exception is what makes
//     these two routes embeddable and nothing else on the site
//
// Both embed routes are `robots: { index: false, follow: false }` and tenant-resolved from the
// HOST, so they only ever serve this school's published, public courses.
//
// SAFETY: read-only, anonymous, no cookies. No key is created, shown, or revoked.

defineTutorial(
  {
    slug: "api-keys-and-embedding",
    title: "Paste-anywhere course embeds",
    startPath: "/courses",
  },
  [
    {
      title: "Start from a course",
      narration: "Every embed points at one course, named by the id in its catalog link.",
      action: async (page) => {
        const priced = page
          .locator('a[href^="/course/"]')
          .filter({ has: page.locator("p", { hasText: /^\s*(Free|\$[\d,.]+)\s*$/ }) })
          .filter({ hasNot: page.getByText(/coming soon/i) });
        await expect(
          priced.first(),
          "No priced course card found — every catalog card is 'Coming soon', so /embed/course/<id> would have no lesson list to show.",
        ).toBeVisible();
        await expect(priced.first()).toHaveAttribute("href", /^\/course\/[0-9a-f-]{36}$/);
      },
    },
    {
      title: "The card embed",
      narration: "The card embed is a small branded box: the school, the course, the price, and a way in.",
      action: async (page) => {
        const href = await page
          .locator('a[href^="/course/"]')
          .filter({ has: page.locator("p", { hasText: /^\s*(Free|\$[\d,.]+)\s*$/ }) })
          .filter({ hasNot: page.getByText(/coming soon/i) })
          .first()
          .getAttribute("href");
        const id = href!.split("/").pop()!;
        await page.goto(`/embed/card/${id}`);
        await expect(page.locator("h1").first()).toBeVisible();
        // The click-through leaves the iframe (target="_top") and lands on the real course page.
        await expect(page.getByRole("link").first()).toBeVisible();
      },
    },
    {
      title: "It carries the school's colours",
      narration: "It takes the school's name and accent colour, so it does not look borrowed.",
      action: async (page) => {
        // Both halves of the caption are asserted, not assumed. The name is the uppercase line
        // above the title, and the accent rule is the bar above it — embed/card/[id]/page.tsx sets
        // --accent from the tenant's own theme, which is why a host page cannot restyle the card.
        await expect(page.locator("main p").first()).not.toBeEmpty();
        await expect(page.locator('main span[style*="--accent"]').first()).toBeVisible();
      },
    },
    {
      title: "The fuller course embed",
      narration: "The other embed lists the published lessons, with a Continue link out to the real course.",
      action: async (page) => {
        const id = page.url().split("/").pop();
        await page.goto(`/embed/course/${id}`);
        await expect(page.locator("h1").first()).toBeVisible();
        await expect(page.getByRole("link", { name: /continue/i })).toBeVisible();
      },
    },
    {
      title: "No sign-in, no key",
      narration: "Neither embed asks anyone to sign in, and neither one needs an API key.",
      action: async (page) => {
        // Both routes sit OUTSIDE the (tenant) route group: no SiteHeader, so no Sign in link.
        await expect(page.getByRole("link", { name: /^sign in$/i })).toHaveCount(0);
      },
    },
  ],
);
