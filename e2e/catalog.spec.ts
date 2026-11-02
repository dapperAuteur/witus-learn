import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

// Happy path + a11y gate for the public catalog surface (witus plan 30 Phase 2; a11y mandate from
// witus docs/shared-ui-ux-dx.md). Kept to stable public pages on purpose — deep flows arrive with
// later phases; this gate's job is "the site renders, navigates, and stays accessible".

/** Gate on serious+critical axe violations. Minor/moderate findings are reported in the failure
 *  message when the gate trips, but don't fail the build on their own — the charter's bar is
 *  WCAG AA, and axe's minor findings routinely include below-AA nitpicks that would make the
 *  gate flaky-red and get ignored. Tighten later if the pages stay clean. */
async function expectNoSeriousA11yViolations(page: import("@playwright/test").Page) {
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  const gating = results.violations.filter(
    (v) => v.impact === "serious" || v.impact === "critical",
  );
  expect(
    gating.map((v) => `${v.impact}: ${v.id} — ${v.help} (${v.nodes.length} nodes)`),
  ).toEqual([]);
}

// Multi-tenant note: the tenant resolves from the Host header, so against a real deployment "/"
// is the tenant home; against an unrecognized host it's a holding surface. Assert an h1, not
// tenant-specific copy.
test("homepage renders and is accessible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1").first()).toBeVisible();
  await expectNoSeriousA11yViolations(page);
});

test("public catalog renders and is accessible", async ({ page }) => {
  await page.goto("/courses");
  await expect(page.getByRole("heading", { name: "Courses" }).first()).toBeVisible();
  await expectNoSeriousA11yViolations(page);
});

// Quiz integrity panel (plans/98 acceptance 9): a public course with quizzes shows the collapsed
// "How this course's quizzes are built" card, visible to a signed-out visitor (BAM Q2). Which courses
// exist depends on the deployment's tenant, so the test walks the catalog's course links (a few at
// most) instead of naming a slug, and skips when none of them has a quiz.
test("a public course with quizzes shows the quiz integrity panel", async ({ page }) => {
  await page.goto("/courses");
  const hrefs = await page
    .locator("main a[href]")
    .evaluateAll((as) =>
      Array.from(new Set(as.map((a) => a.getAttribute("href") ?? ""))).filter((h) => /^\/[^/]+\/[^/]+$/.test(h)),
    );
  for (const href of hrefs.slice(0, 8)) {
    await page.goto(href);
    const summary = page.locator("details > summary", { hasText: "How this course's quizzes are built" });
    if ((await summary.count()) === 0) continue;
    await expect(summary.first()).toBeVisible();
    // Collapsed by default: the sentences sit inside a closed <details>.
    await expect(summary.first().locator("xpath=..")).not.toHaveAttribute("open", "");
    return;
  }
  test.skip(true, "No course among the first catalog links has a quiz on this deployment.");
});
