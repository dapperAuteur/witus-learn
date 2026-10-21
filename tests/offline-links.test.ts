import { describe, expect, it } from "vitest";
import { offlineHardNavigationTarget, type ClickedAnchor, type LinkClick } from "@/lib/offline-links";

/** Which clicks src/components/offline-link-fallback.tsx turns into a full page load offline. */

const HERE = { href: "https://bettervice.club/courses?category=art" };

const click = (overrides: Partial<LinkClick> = {}): LinkClick => ({
  button: 0,
  metaKey: false,
  ctrlKey: false,
  shiftKey: false,
  altKey: false,
  defaultPrevented: false,
  ...overrides,
});

const anchor = (href: string, opts: { target?: string; download?: boolean } = {}): ClickedAnchor => ({
  href,
  target: opts.target ?? "",
  hasAttribute: (name) => name === "download" && Boolean(opts.download),
});

describe("offline link clicks", () => {
  it("loads an in-app page in full", () => {
    expect(offlineHardNavigationTarget(click(), anchor("/bam/knots"), HERE)).toBe("https://bettervice.club/bam/knots");
    expect(offlineHardNavigationTarget(click(), anchor("https://bettervice.club/help"), HERE)).toBe(
      "https://bettervice.club/help",
    );
  });

  it("keeps the query string and the fragment of the target", () => {
    expect(offlineHardNavigationTarget(click(), anchor("/courses?category=math#top"), HERE)).toBe(
      "https://bettervice.club/courses?category=math#top",
    );
  });

  it("leaves new-tab, new-window and non-primary clicks to the browser", () => {
    for (const mod of [{ metaKey: true }, { ctrlKey: true }, { shiftKey: true }, { altKey: true }, { button: 1 }]) {
      expect(offlineHardNavigationTarget(click(mod), anchor("/bam/knots"), HERE)).toBeNull();
    }
  });

  it("leaves a click another handler already took", () => {
    expect(offlineHardNavigationTarget(click({ defaultPrevented: true }), anchor("/bam/knots"), HERE)).toBeNull();
  });

  it("leaves links that open elsewhere or download", () => {
    expect(offlineHardNavigationTarget(click(), anchor("/bam/knots", { target: "_blank" }), HERE)).toBeNull();
    expect(offlineHardNavigationTarget(click(), anchor("/files/a.pdf", { download: true }), HERE)).toBeNull();
    expect(offlineHardNavigationTarget(click(), anchor("/bam/knots", { target: "_self" }), HERE)).not.toBeNull();
  });

  it("leaves other origins and non-web schemes", () => {
    expect(offlineHardNavigationTarget(click(), anchor("https://example.com/x"), HERE)).toBeNull();
    expect(offlineHardNavigationTarget(click(), anchor("mailto:hi@example.com"), HERE)).toBeNull();
    expect(offlineHardNavigationTarget(click(), anchor("tel:+15555550100"), HERE)).toBeNull();
  });

  it("leaves a jump within the current page, which needs no network", () => {
    expect(offlineHardNavigationTarget(click(), anchor("#section-2"), HERE)).toBeNull();
    expect(offlineHardNavigationTarget(click(), anchor("/courses?category=art#section-2"), HERE)).toBeNull();
  });

  it("does load the current page again when the link names it with no fragment", () => {
    expect(offlineHardNavigationTarget(click(), anchor("/courses?category=art"), HERE)).toBe(HERE.href);
  });
});
