import { test, expect } from "@playwright/test";

// Post-deploy smoke (@smoke): the production workflow job runs ONLY tests tagged @smoke, so keep
// this file to checks that are safe and meaningful against live production. /api/health is
// deliberately tenant-agnostic and touches the real database, returning 503 fast when it's
// unreachable (see src/app/api/health/route.ts), so a green here means "deployed AND serving real
// data", which is the whole point of the gate.
test("@smoke health endpoint answers ok", async ({ request }) => {
  const res = await request.get("/api/health");
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.ok).toBe(true);
});

// This app is multi-tenant and resolves the tenant from the Host header; an unknown host serves a
// holding/404 surface instead of a brand home. Assert only that SOME h1 renders — tenant home or
// holding page both count as "the deployment serves HTML" — never specific tenant copy.
test("@smoke homepage serves", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1").first()).toBeVisible();
});

// Error pages keep the header and footer (BAM, 2026-11-04). An unknown URL must answer 404 AND still
// carry the school's header with its Sign in control and the footer, so a visitor who hits a dead link
// can sign in or get back. Signed out on purpose (no auth state), which is when Sign in shows.
test.describe("@smoke unknown URL", () => {
  const path = "/this-page-does-not-exist-smoke-404";

  test("@smoke answers 404 with the header's Sign in and the footer", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const res = await page.goto(path);
    expect(res?.status()).toBe(404);
    const header = page.locator("header").first();
    await expect(header).toBeVisible();
    await expect(header.getByRole("link", { name: "Sign in" })).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.getByRole("link", { name: "Back to home" })).toBeVisible();
  });

  test("@smoke works at 320px: header, footer, no sideways scroll", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 });
    const res = await page.goto(path);
    expect(res?.status()).toBe(404);
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
});
