import { test, expect, type Page } from "@playwright/test";

// A lesson saved for offline must OPEN offline, along with the course it belongs to and the
// downloads list, instead of "You're offline / Retry" (cloud-briefs/offline-fix-2026-10-16.md).
// Not @smoke yet: it needs a free lesson a signed-out visitor can open, and it drives the real
// service worker, so it runs against a preview, not as the production gate.

/** First public lesson whose page offers "Save for offline" to a signed-out visitor. */
async function findOpenLesson(page: Page): Promise<string | null> {
  await page.goto("/courses");
  const courseHrefs = await page
    .locator("main a[href]")
    .evaluateAll((links) =>
      [...new Set(links.map((a) => (a as HTMLAnchorElement).pathname))].filter((p) =>
        /^\/[^/]+\/[^/]+$/.test(p),
      ),
    );
  for (const courseHref of courseHrefs.slice(0, 8)) {
    await page.goto(courseHref);
    const lessonHref = await page
      .locator(`a[href^="${courseHref}/lesson/"]`)
      .first()
      .getAttribute("href")
      .catch(() => null);
    if (!lessonHref) continue;
    await page.goto(lessonHref);
    if (await page.getByRole("button", { name: /Save for offline/ }).isVisible().catch(() => false)) {
      return lessonHref;
    }
  }
  return null;
}

async function saveThisLesson(page: Page) {
  await page.waitForFunction(() => navigator.serviceWorker?.controller != null, null, { timeout: 30_000 });
  await page.getByRole("button", { name: /Save for offline/ }).click();
  await expect(page.getByText("Saved for offline")).toBeVisible({ timeout: 30_000 });
}

test("a lesson saved for offline opens offline, with its course and the downloads list", async ({ page, context }) => {
  const lessonHref = await findOpenLesson(page);
  test.skip(!lessonHref, "No lesson on this deployment is open to a signed-out visitor with Save for offline.");
  const lesson = new URL(lessonHref!, page.url()).pathname;
  const course = lesson.slice(0, lesson.indexOf("/lesson/"));

  // Online: save this lesson, and the next one so "Next →" has somewhere to go offline.
  await page.goto(lesson);
  const lessonTitle = (await page.locator("main h1").first().innerText()).trim();
  await saveThisLesson(page);
  const nextHref = await page.getByRole("link", { name: /Next →/ }).first().getAttribute("href").catch(() => null);
  let nextTitle: string | null = null;
  if (nextHref) {
    await page.goto(nextHref);
    if (await page.getByRole("button", { name: /Save for offline/ }).isVisible().catch(() => false)) {
      nextTitle = (await page.locator("main h1").first().innerText()).trim();
      await saveThisLesson(page);
    }
    await page.goto(lesson);
  }

  await context.setOffline(true);

  // Negative: a page that was never saved (or visited) shows the offline page, with a way forward.
  // Not /courses: worker v6 remembers every public page opened online, and this test opened it.
  await page.goto("/terms");
  await expect(page.getByRole("heading", { name: /You.re offline/ })).toBeVisible();
  await expect(page.getByRole("link", { name: "Your downloads" })).toHaveAttribute("href", "/downloads");

  // Positive: the saved lesson is served as an HTML document, not the offline page.
  const res = await page.goto(lesson);
  expect(res?.headers()["content-type"] ?? "").toContain("text/html");
  await expect(page.locator("main h1").first()).toHaveText(lessonTitle);
  await expect(page.getByRole("heading", { name: /You.re offline/ })).toHaveCount(0);

  if (nextTitle) {
    await page.getByRole("link", { name: /Next →/ }).first().click();
    await expect(page.locator("main h1").first()).toHaveText(nextTitle);
  }

  // The course page was saved with the lesson (fix 3).
  await page.goto(course);
  await expect(page.getByRole("heading", { name: /You.re offline/ })).toHaveCount(0);
  await expect(page.locator(`a[href="${lesson}"]`).first()).toBeVisible();

  // And the downloads list names the lesson.
  await page.goto("/downloads");
  await expect(page.getByText(lessonTitle).first()).toBeVisible();

  await context.setOffline(false);
});
