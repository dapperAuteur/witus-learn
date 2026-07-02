import { describe, expect, it } from "vitest";
import { extractIframeSrc, isAllowedStreamUrl, resolveStreamSrc } from "@/lib/stream-embed";

// The admin pastes a provider embed (an <iframe> in a <div>) or a bare URL. We must
// only ever keep an allowlisted https iframe src, never the raw HTML.
describe("extractIframeSrc", () => {
  it("pulls the src out of an iframe-in-div embed", () => {
    const embed = `<div class="wrap"><iframe src="https://s.viloud.tv/embed/abc123" width="640" allowfullscreen></iframe></div>`;
    expect(extractIframeSrc(embed)).toBe("https://s.viloud.tv/embed/abc123");
  });

  it("handles single quotes and extra attributes before src", () => {
    const embed = `<iframe frameborder='0' allow='autoplay' src='https://player.vimeo.com/video/9'></iframe>`;
    expect(extractIframeSrc(embed)).toBe("https://player.vimeo.com/video/9");
  });

  it("returns null when there is no iframe", () => {
    expect(extractIframeSrc("<div>no frame here</div>")).toBeNull();
  });
});

describe("isAllowedStreamUrl", () => {
  it("accepts https on an allowlisted host and its subdomains", () => {
    expect(isAllowedStreamUrl("https://viloud.tv/embed/x")).toBe(true);
    expect(isAllowedStreamUrl("https://s.viloud.tv/embed/x")).toBe(true);
    expect(isAllowedStreamUrl("https://www.youtube-nocookie.com/embed/x")).toBe(true);
  });

  it("rejects http, unknown hosts, and lookalike domains", () => {
    expect(isAllowedStreamUrl("http://s.viloud.tv/embed/x")).toBe(false); // not https
    expect(isAllowedStreamUrl("https://evil.example.com/x")).toBe(false);
    expect(isAllowedStreamUrl("https://viloud.tv.evil.com/x")).toBe(false); // suffix trick
    expect(isAllowedStreamUrl("not a url")).toBe(false);
  });
});

describe("resolveStreamSrc", () => {
  it("resolves a bare allowlisted URL", () => {
    expect(resolveStreamSrc("https://s.viloud.tv/embed/abc")).toEqual({ src: "https://s.viloud.tv/embed/abc" });
  });

  it("resolves an embed snippet to its allowlisted src", () => {
    const r = resolveStreamSrc(`<div><iframe src="https://s.viloud.tv/embed/abc"></iframe></div>`);
    expect(r.src).toBe("https://s.viloud.tv/embed/abc");
  });

  it("rejects an embed whose iframe points at a non-allowlisted host", () => {
    const r = resolveStreamSrc(`<div><iframe src="https://tracker.evil.com/x"></iframe></div>`);
    expect(r.src).toBeUndefined();
    expect(r.error).toMatch(/not an allowed streaming host/i);
  });

  it("rejects input with no iframe url", () => {
    const r = resolveStreamSrc("<script>alert(1)</script>");
    expect(r.src).toBeUndefined();
    expect(r.error).toBeTruthy();
  });

  it("rejects empty input", () => {
    expect(resolveStreamSrc("   ").error).toBeTruthy();
  });
});
