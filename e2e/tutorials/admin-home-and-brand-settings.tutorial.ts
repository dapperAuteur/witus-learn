import { expect } from "@playwright/test";
import { defineTutorial } from "./tutorial";

// Quick-reference clip for the help article "Your admin home and brand settings"
// (src/lib/help-articles.ts → slug "admin-home-and-brand-settings"). Captions only, no voice.
//
// AUTH: requiresAuth. Skips without TUTORIAL_STORAGE_STATE. The session must be a brand admin or
// the platform owner on the recorded school; both /admin and /admin/settings are tenant-admin
// gated, and every setting applies only to the school whose domain the request came in on.
//
// Selectors read 2026-09-21 from:
//   src/app/(tenant)/admin/page.tsx — <h1>Admin</h1>, and three labelled sections whose headings
//     are the accessible names: "admin-at-a-glance" (the headline tiles), "admin-demo" (owner
//     only), "admin-all-tools"
//   src/app/(tenant)/admin/settings/page.tsx — <h1>Brand settings</h1> and the "Saved brand" card
//   src/components/tenant-settings-form.tsx — the three panels <h2>Brand</h2>, <h2>Identity &
//     images</h2>, <h2>Features</h2>; the Features toggles Age gate / Coming soon / Lead funnel;
//     and the "Save changes" button (its success line reads "Saved. Reload to see branding
//     update.")
//
// ===== MUTATION SAFETY =====
// Every control on /admin/settings changes the LIVE school for every visitor: the accent colour,
// the wordmark, the favicon, whether an age gate stands in front of the site, whether the catalog
// is replaced by a holding page. "Save changes" is asserted and NEVER clicked, and no toggle is
// flipped — a toggle is local state until saved, but leaving a recording paused on a flipped
// "Coming soon" switch is exactly the screenshot nobody should have to interpret.
// The tiles on /admin count real learners and real problem reports; the spec asserts the
// structure and never reads out a number, so the caption cannot go stale.

defineTutorial(
  {
    slug: "admin-home-and-brand-settings",
    title: "The admin home and brand settings",
    startPath: "/admin",
    requiresAuth: true,
  },
  [
    {
      title: "The admin home",
      narration: "Admin opens on your school's headline numbers, each one a link to where you act on it.",
      action: async (page) => {
        await expect(
          page.getByRole("heading", { name: "Admin", level: 1 }),
          "This session is not a brand admin or the platform owner on this school — /admin did not render.",
        ).toBeVisible();
        await expect(page.getByRole("region", { name: /at a glance/i })).toBeVisible();
      },
    },
    {
      title: "Every number is a way in",
      narration: "Each tile is a link to the page where you act on that number.",
      action: async (page) => {
        // The caption claims only what is always on screen and is asserted here. The article's
        // "a tile with an open queue is outlined in your accent colour" is deliberately NOT
        // captioned: the outline appears only when a queue happens to be open, so on a clear
        // dashboard the caption would describe something the viewer cannot see.
        const glance = page.getByRole("region", { name: /at a glance/i });
        await expect(glance.getByRole("link").first()).toBeVisible();
        expect(await glance.getByRole("link").count()).toBeGreaterThan(1);
      },
    },
    {
      title: "Everything else is below",
      narration: "Under the numbers is the full tool list, and the sidebar reaches all of it too.",
      action: async (page) => {
        const tools = page.getByRole("region", { name: /all tools/i });
        await tools.scrollIntoViewIfNeeded();
        await expect(tools).toBeVisible();
      },
    },
    {
      title: "Brand settings",
      narration: "Brand settings is where a school changes its own name, colours and images, with no code.",
      action: async (page) => {
        await page.goto("/admin/settings");
        await expect(page.getByRole("heading", { name: "Brand settings", level: 1 })).toBeVisible();
        await expect(page.getByText("Saved brand")).toBeVisible();
      },
    },
    {
      title: "Three panels",
      narration: "Brand holds the name and colours, Identity and images the logo and cards, Features the switches.",
      action: async (page) => {
        for (const panel of ["Brand", "Identity & images", "Features"]) {
          await expect(page.getByRole("heading", { name: panel, exact: true })).toBeVisible();
        }
      },
    },
    {
      title: "The switches that change the front door",
      narration: "Age gate, Coming soon and Lead funnel decide what a first-time visitor meets.",
      action: async (page) => {
        for (const toggle of ["Age gate", "Coming soon", "Lead funnel"]) {
          await expect(page.getByText(toggle, { exact: true })).toBeVisible();
        }
        // SHOWN, NEVER CLICKED — see the mutation-safety header. Nothing is flipped, nothing saved.
        await expect(page.getByRole("button", { name: "Save changes" })).toBeVisible();
      },
    },
  ],
);
