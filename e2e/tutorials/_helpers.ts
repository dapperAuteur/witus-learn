import { expect, type Page } from "@playwright/test";

// Shared navigation helpers for the tutorial specs (witus plans/33 §5.8). Nothing in here signs
// in: a signed-in spec sets `requiresAuth: true` and runs against TUTORIAL_STORAGE_STATE, and no
// credential or session file is ever written from a spec (§5.5).

/**
 * Open the instructor's course manager for one course and return its /teach/<idOrSlug> path.
 *
 * Which course: TUTORIAL_TEACH_COURSE (a path like /teach/my-course-slug) when set, otherwise the
 * first row of the signed-in account's own list at /teach. Selectors from
 * src/components/teacher-catalog.tsx — every row carries a "Manage" link to /teach/<slug ?? id>.
 *
 * Fails with a readable message rather than a locator timeout when the session is not an
 * instructor on this school: /teach then renders "You are signed in, but not yet an instructor on
 * this brand" instead of the course list (src/app/(tenant)/teach/page.tsx).
 */
export async function openTeachCourse(page: Page): Promise<string> {
  const fromEnv = process.env.TUTORIAL_TEACH_COURSE;
  if (fromEnv) {
    await page.goto(fromEnv);
    await expect(page.locator("h1").first()).toBeVisible();
    return fromEnv;
  }
  await page.goto("/teach");
  await expect(
    page.getByRole("heading", { name: "Your courses", level: 1 }),
    "TUTORIAL_STORAGE_STATE is not an instructor on this school (/teach shows the not-an-instructor notice). Use an instructor or owner session, or set TUTORIAL_TEACH_COURSE.",
  ).toBeVisible();
  const manage = page.getByRole("link", { name: "Manage" }).first();
  await expect(manage, "No courses in this account's /teach list — nothing to record.").toBeVisible();
  const href = (await manage.getAttribute("href"))!;
  await manage.click();
  await expect(page.locator("h1").first()).toBeVisible();
  return href;
}

/**
 * The public course page to use for learner-side specs: TUTORIAL_COURSE_PATH
 * (/<username>/<courseSlug>) when set, otherwise the first priced, vetted catalog card.
 *
 * A card showing a price line ("Free" or "$…") is published AND vetted, so it opens the real
 * course page rather than the Coming-soon face — the same selector rationale, and the same
 * fail-fast message, as purchase-browse.tutorial.ts step 3.
 */
export async function openLearnerCourse(page: Page): Promise<void> {
  const fromEnv = process.env.TUTORIAL_COURSE_PATH;
  if (fromEnv) {
    await page.goto(fromEnv);
  } else {
    await page.goto("/courses");
    const priced = page
      .locator('a[href^="/course/"]')
      .filter({ has: page.locator("p", { hasText: /^\s*(Free|\$[\d,.]+)\s*$/ }) })
      .filter({ hasNot: page.getByText(/coming soon/i) });
    await expect(
      priced.first(),
      "No priced course card found — every catalog card is 'Coming soon'. Vet a course, or set TUTORIAL_COURSE_PATH.",
    ).toBeVisible();
    await priced.first().click();
  }
  await expect(page.getByText("← Back to catalog")).toBeVisible();
  await expect(page.locator("h1").first()).toBeVisible();
}
