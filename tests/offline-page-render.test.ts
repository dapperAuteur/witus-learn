import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import OfflinePage from "@/app/offline/page";

/**
 * What /offline gives a learner BEFORE any JavaScript runs.
 *
 * The cached /offline page is often an old copy whose JS chunks are gone, so the saved-lessons list
 * (client-rendered) may never appear. The server-rendered markup alone has to offer a way forward:
 * a Downloads link, and a Retry that reloads the page they asked for rather than "/", which is
 * never saved and so looped straight back here.
 */
describe("/offline without JavaScript", () => {
  const html = renderToStaticMarkup(createElement(OfflinePage));

  it("links to the downloads screen as the primary action", () => {
    expect(html).toMatch(/<a[^>]*href="\/downloads"[^>]*>Your downloads<\/a>/);
  });

  it("makes Retry reload the current address, not the never-saved home page", () => {
    expect(html).toMatch(/<a[^>]*href=""[^>]*>Retry<\/a>/);
    expect(html).not.toContain('href="/"');
  });

  it("puts the way forward before Retry", () => {
    expect(html.indexOf("Your downloads")).toBeLessThan(html.indexOf("Retry"));
  });
});
