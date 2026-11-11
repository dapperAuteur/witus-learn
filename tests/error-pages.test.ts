import { readFileSync, existsSync } from "node:fs";
import { createElement, type ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Error pages keep the header and footer (BAM, 2026-11-04: "404 page should still have header/footer.
// all apps should include header/footer on 400/500 error pages"). The 404 and 403 render above the
// school layout, so they bring the chrome themselves (ErrorChrome); the school's error boundary sits
// inside the layout; the root boundaries bring the neutral chrome. Every one keeps a Sign in control,
// one h1, a way home and the catalog search. The live check (an unknown URL answers 404 with the
// header's Sign in and the footer) is the @smoke test in e2e/smoke.spec.ts.

const mocks = vi.hoisted(() => ({
  resolveTenant: vi.fn(),
  hasAcknowledgedAge: vi.fn(),
  SiteHeader: vi.fn(),
  host: "learn.witus.online" as string | null,
}));

vi.mock("next/headers", () => ({
  headers: async () => new Headers(mocks.host ? { host: mocks.host } : {}),
}));
vi.mock("next/navigation", () => ({ unstable_rethrow: () => {} }));
vi.mock("@/lib/tenant", () => ({ resolveTenant: mocks.resolveTenant }));
vi.mock("@/lib/age-gate", () => ({ hasAcknowledgedAge: mocks.hasAcknowledgedAge }));
vi.mock("@/components/site-header", () => ({ SiteHeader: mocks.SiteHeader }));
vi.mock("@/components/site-footer", () => ({
  SiteFooter: ({ tenant }: { tenant: { name: string } }) => createElement("footer", { "data-footer": "school" }, tenant.name),
}));
vi.mock("@/components/ecosystem-footer", () => ({
  EcosystemFooter: () => createElement("footer", { "data-footer": "ecosystem" }, "WitUS"),
}));

const { ErrorChrome } = await import("@/components/error-chrome");
const { ErrorContent } = await import("@/components/error-content");
const { NeutralChrome } = await import("@/components/neutral-chrome");

const TENANT = { slug: "school", name: "A School", theme: { colors: { accent: "#123456" } }, flags: {} };
const body = createElement(ErrorContent, { code: "404", title: "Page not found", message: "Gone." });

async function renderChrome() {
  return renderToStaticMarkup((await ErrorChrome({ children: body })) as ReactElement);
}
const count = (html: string, re: RegExp) => (html.match(re) ?? []).length;

beforeEach(() => {
  vi.clearAllMocks();
  mocks.host = "learn.witus.online";
  mocks.resolveTenant.mockResolvedValue(TENANT);
  mocks.hasAcknowledgedAge.mockResolvedValue(true);
  mocks.SiteHeader.mockResolvedValue(
    createElement("header", { "data-header": "school" }, createElement("a", { href: "/login" }, "Sign in")),
  );
});

describe("ErrorContent", () => {
  it("has one h1, a way home, the catalog and a labelled search", () => {
    const html = renderToStaticMarkup(body);
    expect(count(html, /<h1/g)).toBe(1);
    expect(html).toContain("<main");
    expect(html).toContain('href="/"');
    expect(html).toContain('href="/courses"');
    expect(html).toMatch(/<form role="search"[^>]*action="\/courses"/);
    expect(html).toMatch(/<label for="error-search"[^>]*>Search courses<\/label>/);
  });
});

describe("ErrorChrome (the 404 and 403 pages)", () => {
  it("wears the school's own header and footer on a known school", async () => {
    const html = await renderChrome();
    expect(html).toContain('data-header="school"');
    expect(html).toContain(">Sign in<");
    expect(html).toContain('data-footer="ecosystem"'); // learn.witus.online is WitUS-branded
    expect(html).toContain("--accent:#123456");
    expect(count(html, /<h1/g)).toBe(1);
  });

  it("uses the school footer on a white-label domain", async () => {
    mocks.host = "school.example";
    const html = await renderChrome();
    expect(html).toContain('data-footer="school"');
  });

  it.each([
    ["an unknown host", () => mocks.resolveTenant.mockResolvedValue(null)],
    ["an age gate not yet passed", () => mocks.hasAcknowledgedAge.mockResolvedValue(false)],
    ["a school header that fails to draw", () => mocks.SiteHeader.mockRejectedValue(new Error("db down"))],
    ["a tenant lookup that fails", () => mocks.resolveTenant.mockRejectedValue(new Error("db down"))],
  ])("falls back to the neutral header and footer, with Sign in, for %s", async (_name, arrange) => {
    arrange();
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const html = await renderChrome();
    expect(html).not.toContain('data-header="school"');
    expect(html).toMatch(/<header[\s\S]*href="\/login"[^>]*>Sign in<\/a>[\s\S]*<\/header>/);
    expect(html).toContain("<footer");
    expect(html).not.toContain("A School"); // nothing of the school when its chrome is not drawn
    expect(count(html, /<h1/g)).toBe(1);
  });
});

describe("NeutralChrome (root error boundaries)", () => {
  it("has a header with Sign in, the page, and a footer", () => {
    const html = renderToStaticMarkup(createElement(NeutralChrome, null, body));
    expect(html).toMatch(/<header[\s\S]*>Sign in<\/a>[\s\S]*<\/header>/);
    expect(html).toMatch(/<footer[\s\S]*href="\/help"/);
    expect(html).toContain('id="main-content"');
  });
});

describe("error pages keep the saved theme", () => {
  // BAM, 2026-11-11: a made-up URL flipped dark mode to light. An error page can be drawn by Next's
  // error shell without the root layout's body, so the chrome carries the page colors and re-applies
  // the saved theme itself.
  it("the school chrome sets the page background and text, and re-applies the saved theme", async () => {
    const html = await renderChrome();
    expect(html).toContain("bg-[var(--page-bg)]");
    expect(html).toContain("dark:text-neutral-100");
  });
  it("the neutral chrome does the same", () => {
    const html = renderToStaticMarkup(createElement(NeutralChrome, null, body));
    expect(html).toContain("bg-[var(--page-bg)]");
    expect(html).toContain("dark:text-neutral-100");
  });
  it("both chromes mount the ThemeKeeper; global-error brings the no-FOUC script", () => {
    expect(readFileSync("src/components/error-chrome.tsx", "utf8")).toContain("<ThemeKeeper />");
    expect(readFileSync("src/components/neutral-chrome.tsx", "utf8")).toContain("<ThemeKeeper />");
    expect(readFileSync("src/app/global-error.tsx", "utf8")).toContain("THEME_SCRIPT");
  });
});

describe("every error page is wired to its chrome", () => {
  const src = (p: string) => readFileSync(p, "utf8");
  it("not-found and forbidden render inside ErrorChrome", () => {
    expect(src("src/app/not-found.tsx")).toContain("<ErrorChrome>");
    expect(src("src/app/forbidden.tsx")).toContain("<ErrorChrome>");
  });
  it("the school error boundary sits inside the (tenant) layout; the root ones bring the neutral chrome", () => {
    expect(existsSync("src/app/(tenant)/error.tsx")).toBe(true);
    expect(src("src/app/error.tsx")).toContain("<NeutralChrome>");
    expect(src("src/app/global-error.tsx")).toContain("<NeutralChrome>");
    expect(src("src/app/global-error.tsx")).toContain('import "./globals.css"');
  });
});
