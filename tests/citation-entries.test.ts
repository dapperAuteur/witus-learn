import { describe, expect, it } from "vitest";
import { CITATION_URL_RE, extractCitations, normalizeCitationEntry } from "@/lib/citation-entries";
import { parseReleaseMarkers } from "@/lib/lesson-review";
import { CABLES_AND_CONNECTORS_COURSE } from "../scripts/data/cables-and-connectors-course";
import { SOUND_CRAFT_COURSE } from "../scripts/data/sound-craft-course";
import { WHERE_WE_RESTED_COURSE } from "../scripts/data/where-we-rested-course";

// The parser moved from scripts/gen-citations.ts to src/lib/citation-entries.ts so the learner
// bibliography shares it. The committed registry (src/lib/citation-content/citations.ts) must not
// change because of the move, and there is no database here to regenerate it, so this file keeps a
// FROZEN copy of the function as it stood in gen-citations.ts on 2026-11-01 and proves the shared one
// returns the same entries, the same normalized text and the same URL on fixtures and real courses.
const OLD_REFERENCE_SHAPED = /\((?:n\.d\.|\d{4}[a-z]?)|https?:\/\/|10\.\d{4,}\//i;
const OLD_SUBHEADING = /^\*\*[^*]+\*\*:?$/;
const OLD_URL_RE = /(https?:\/\/[^\s)\]]+|10\.\d{4,}\/[^\s)\]]+)/;
function oldNormalize(entry: string): string {
  return entry.replace(/\*+/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function oldExtractCitations(body: string): string[] {
  const lines = body.split("\n");
  const out: string[] = [];
  let inSources = false;
  for (const raw of lines) {
    if (/^#{1,6}\s/.test(raw)) {
      inSources = /^#{1,6}\s*(sources|references|further reading|bibliography)/i.test(raw);
      continue;
    }
    if (!inSources) continue;
    const line = raw.trim();
    if (!line || OLD_SUBHEADING.test(line)) continue;
    const bullet = line.match(/^[-*]\s+(.*\S)\s*$/);
    if (bullet) {
      out.push(bullet[1].trim());
    } else if (OLD_REFERENCE_SHAPED.test(line)) {
      out.push(line);
    }
  }
  return out;
}

const FIXTURE = [
  "Intro prose that cites (Belden, 2026a, p. 1).",
  "",
  "## Sources",
  "",
  "**Law**",
  "",
  '- Belden. (2026a). *Product 1694A: 75 ohm SDI coax, RG-6* [Technical data sheet]. https://catalog.belden.com/techdata/EN/1694A_techdata.pdf Locator: p. 1, "Product Description".',
  "* AJA Video Systems. (n.d.). *12GDA* [Product page]. https://www.aja.com/products/12gda",
  "",
  "Harrison Chase. (2024). *LangGraph* [Computer software]. https://github.com/langchain-ai/langgraph",
  "",
  "Read more on the NASM site at https://www.nasm.org/ for the full position statement.",
  "This line names nothing and links nothing, so it is skipped.",
  "",
  "## Next heading",
  "- not a source (2020).",
].join("\n");

describe("the shared citation-entry parser", () => {
  it("reads bulleted, unbulleted APA and prose-with-URL entries, and skips bold sub-headings", () => {
    expect(extractCitations(FIXTURE)).toEqual([
      'Belden. (2026a). *Product 1694A: 75 ohm SDI coax, RG-6* [Technical data sheet]. https://catalog.belden.com/techdata/EN/1694A_techdata.pdf Locator: p. 1, "Product Description".',
      "AJA Video Systems. (n.d.). *12GDA* [Product page]. https://www.aja.com/products/12gda",
      "Harrison Chase. (2024). *LangGraph* [Computer software]. https://github.com/langchain-ai/langgraph",
      "Read more on the NASM site at https://www.nasm.org/ for the full position statement.",
    ]);
  });

  it("matches the frozen gen-citations copy on the fixture and on every lesson of three real courses", () => {
    const bodies = [
      FIXTURE,
      ...[CABLES_AND_CONNECTORS_COURSE, SOUND_CRAFT_COURSE, WHERE_WE_RESTED_COURSE].flatMap((c) =>
        c.lessons.map((l) => parseReleaseMarkers(l.body).body),
      ),
    ];
    let n = 0;
    for (const b of bodies) {
      const now = extractCitations(b);
      expect(now).toEqual(oldExtractCitations(b));
      for (const e of now) {
        expect(normalizeCitationEntry(e)).toBe(oldNormalize(e));
        expect(e.match(CITATION_URL_RE)?.[1]).toBe(e.match(OLD_URL_RE)?.[1]);
        n++;
      }
    }
    expect(n).toBeGreaterThan(200);
  });

  it("gen-citations imports the shared parser instead of keeping its own", async () => {
    const { readFileSync } = await import("node:fs");
    const src = readFileSync("scripts/gen-citations.ts", "utf8");
    expect(src).toContain('from "../src/lib/citation-entries"');
    expect(src).not.toContain("function extractCitations");
    expect(src).not.toContain("const REFERENCE_SHAPED");
  });
});
