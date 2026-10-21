import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { OFFLINE_BANNER_TEXT, OfflineBanner, OfflineBannerView } from "@/components/offline-banner";

/**
 * The app-wide offline bar (src/components/offline-banner.tsx), as markup. The live behavior (it
 * appears when the browser goes offline) is covered by e2e/offline-app-shell.spec.ts.
 */
describe("the offline banner", () => {
  it("renders only an empty live region on the server, so a hydrating page never flashes it", () => {
    const html = renderToStaticMarkup(createElement(OfflineBanner));
    expect(html).toBe('<div role="status" aria-live="polite"></div>');
  });

  it("says the visitor is offline, and what still works, inside the live region", () => {
    const html = renderToStaticMarkup(createElement(OfflineBannerView, { online: false }));
    expect(html).toMatch(/^<div role="status" aria-live="polite">/);
    expect(html).toContain(OFFLINE_BANNER_TEXT.replaceAll("'", "&#x27;"));
  });

  it("links to the downloads screen with a real <a>, which the worker can answer offline", () => {
    const html = renderToStaticMarkup(createElement(OfflineBannerView, { online: false }));
    expect(html).toMatch(/<a[^>]*href="\/downloads"[^>]*>Your downloads<\/a>/);
    expect(html).toContain("focus-visible:outline");
  });

  it("is styled for dark mode too, and sits in the flow instead of over the page", () => {
    const html = renderToStaticMarkup(createElement(OfflineBannerView, { online: false }));
    expect(html).toContain("dark:bg-");
    expect(html).not.toMatch(/\b(fixed|absolute|sticky)\b/);
  });
});
