import { test, expect, type Page } from "@playwright/test";
import { goOffline, goOnline } from "./support/offline";

// The app works offline from the last good copy of every public page the visitor opened, with a
// banner that says so (cloud-briefs/offline-app-shell-2026-10-21.md). Not @smoke yet: it drives
// the real service worker against a deployment, so it runs against a preview, not as the
// production gate.

const BANNER = /You.re offline\. Pages you.ve opened and courses you saved still work\./;

/** A course page linked from /courses, at its canonical `/{username}/{courseSlug}` address.
 *  Course cards link `/course/{id}`, which redirects there, and the worker never stores a
 *  redirect, so the test visits (and later expects offline) the page the redirect lands on. */
async function firstCoursePath(page: Page): Promise<string | null> {
  await page.goto("/courses");
  const paths = await page
    .locator("main a[href]")
    .evaluateAll((links) =>
      [...new Set(links.map((a) => (a as HTMLAnchorElement).pathname))].filter(
        (p) => /^\/[^/]+\/[^/]+$/.test(p) && !p.startsWith("/series/"),
      ),
    );
  if (!paths[0]) return null;
  await page.goto(paths[0]);
  return new URL(page.url()).pathname;
}

async function expectServedFromCache(page: Page, path: string) {
  const res = await page.goto(path);
  expect(res?.headers()["content-type"] ?? "", `${path} is an HTML document`).toContain("text/html");
  await expect(page.getByRole("heading", { name: /You.re offline/ }), `${path} is not the offline page`).toHaveCount(0);
  await expect(page.getByRole("status").filter({ hasText: BANNER }), `${path} shows the banner`).toBeVisible();
}

test("pages opened online open offline, with the offline banner, and links between them work", async ({
  page,
  context,
}) => {
  // The worker only sees navigations once it controls the page, so wait for it before browsing.
  await page.goto("/");
  await page.waitForFunction(() => navigator.serviceWorker?.controller != null, null, { timeout: 30_000 });

  const course = await firstCoursePath(page);
  const visited = ["/", "/courses", "/help", ...(course ? [course] : [])];
  for (const path of visited) {
    await page.goto(path);
    await expect(page.locator("main").first()).toBeVisible();
    // Online, the bar is not there.
    await expect(page.getByRole("status").filter({ hasText: BANNER })).toHaveCount(0);
  }

  await goOffline(context);

  // Negative: the test really is offline. A request the worker never answers from a cache fails.
  const probe = await page.evaluate(() =>
    fetch(`/api/health?offline-probe=${Date.now()}`, { cache: "no-store" }).then(
      () => "reached the server",
      () => "failed",
    ),
  );
  expect(probe).toBe("failed");

  for (const path of visited) await expectServedFromCache(page, path);

  // A page this visitor never opened has no copy, so it shows the offline page.
  await page.goto("/terms");
  await expect(page.getByRole("heading", { name: /You.re offline/ })).toBeVisible();
  await expect(page.getByRole("link", { name: "Your downloads" }).first()).toHaveAttribute("href", "/downloads");

  // Clicking an in-app link to a visited page works offline: a full load the worker answers.
  await page.goto("/");
  const targets = visited.filter((p) => p !== "/");
  const link = page.locator(targets.map((p) => `a[href="${p}"]:visible`).join(", ")).first();
  test.skip((await link.count()) === 0, "The home page links to none of the visited pages.");
  const href = await link.getAttribute("href");
  await link.click();
  await expect(page).toHaveURL(new RegExp(`${href!.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
  await expect(page.getByRole("heading", { name: /You.re offline/ })).toHaveCount(0);
  await expect(page.getByRole("status").filter({ hasText: BANNER })).toBeVisible();

  await goOnline(context);
  await expect(page.getByRole("status").filter({ hasText: BANNER })).toHaveCount(0);
});

test("a page reached by tapping a link, never loaded in full, opens offline", async ({ page, context }) => {
  await page.goto("/courses");
  await page.waitForFunction(() => navigator.serviceWorker?.controller != null, null, { timeout: 30_000 });

  // A course card: a client-side (next/link) navigation, so the browser never loads it as a document.
  const card = page.locator('main a[href^="/"]:visible').filter({ hasNot: page.locator("a") }).filter({
    has: page.locator("h3, h2"),
  });
  test.skip((await card.count()) === 0, "The catalog lists no courses.");
  const href = await card.first().getAttribute("href");
  await card.first().click();
  await expect(page).toHaveURL(new RegExp(`${href!.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
  const path = new URL(page.url()).pathname;
  expect(path, "cards link the canonical course page, not the /course/{id} redirect").not.toMatch(/^\/course\//);

  // The worker fetches and remembers the page as a document in the background after the tap.
  await expect
    .poll(
      () =>
        page.evaluate(
          async (p) => Boolean(await (await caches.open("witus-visited-v1")).match(location.origin + p)),
          path,
        ),
      { timeout: 15_000 },
    )
    .toBe(true);

  await goOffline(context);
  await expectServedFromCache(page, path);
  await goOnline(context);
});
