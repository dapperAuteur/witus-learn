import { describe, expect, it } from "vitest";
import { strFromU8, unzipSync } from "fflate";
import { courseToEpub, type EpubCourseInput } from "@/lib/epub/course-to-epub";

// Structure of the EPUB the course export writes (src/lib/epub/course-to-epub.ts): the OCF rules an
// e-reader checks first (mimetype entry first and stored), one XHTML per lesson, and every XML file
// well-formed, including when lesson text carries characters that must be escaped.

const COURSE: EpubCourseInput = {
  title: "Test Course <&> \"Quotes\"",
  description: "A course about **escaping** & things.",
  identifier: "urn:uuid:00000000-0000-5000-8000-000000000000",
  modified: new Date("2026-10-27T12:00:00.000Z"),
  lessons: [
    {
      slug: "one",
      title: "Lesson One",
      section: "Module 1",
      body:
        "# Lesson One\n\nText with <b>raw html</b>, a & b, and a [link](/bam/in-app) plus [ext](https://example.com?a=1&b=2).\n\n" +
        "| A | B |\n| :-- | --: |\n| 1 | 2 |\n\n![a picture](https://example.com/x.png)\n\nLine one  \nline two\n\n" +
        ":::reveal What is lift? ||| The force <up> & away.\n\n" +
        ":::figure https://example.com/f.png ||| Alt text ||| A caption ||| Credit: FAA\n\n" +
        ":::tool fly-witus | Open it\n\n## References\n\nFAA. (2016). *Pilot's handbook*.",
      recall: [{ prompt: "Four forces?", answer: "Lift, weight, thrust, drag." }],
    },
    {
      slug: "two",
      title: "Lesson Two",
      section: "Module 1",
      body: "No heading here.\n\n:::timeline Events\n1903 | Flight | Wright brothers\n:::",
    },
    {
      slug: "quiz",
      title: "Module 1 Quiz",
      section: "Module 1",
      quiz: {
        passingScore: 80,
        questions: [
          {
            prompt: "Which is < 2?",
            options: ["1", "3 & up"],
            correctIndex: 0,
            explanation: "One is less.\n\nReference: 14 CFR 107.",
            sourceLessonSlug: "one",
          },
        ],
      },
    },
  ],
};

/** Minimal XML well-formedness check: balanced, properly nested tags, quoted attributes, no
 *  bare `&` or `<` in text. Enough to catch what a hand-built XHTML string gets wrong. */
function assertWellFormed(name: string, xml: string): void {
  const stack: string[] = [];
  const src = xml.replace(/^<\?xml[^>]*\?>/, "").replace(/<!DOCTYPE[^>]*>/, "");
  const tagRe = /<[^>]*>/g;
  let last = 0;
  let m: RegExpExecArray | null;
  const checkText = (text: string) => {
    expect(text, `${name}: bare '<' in text`).not.toMatch(/</);
    for (const amp of text.matchAll(/&([^;\s]*);?/g)) {
      expect(amp[0], `${name}: bad entity ${amp[0]}`).toMatch(/^&(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);$/);
    }
  };
  while ((m = tagRe.exec(src))) {
    checkText(src.slice(last, m.index));
    last = m.index + m[0].length;
    const tag = m[0];
    if (tag.startsWith("<!--")) continue;
    if (tag.startsWith("</")) {
      const nameClose = tag.slice(2, -1).trim();
      expect(stack.pop(), `${name}: mismatched </${nameClose}>`).toBe(nameClose);
      continue;
    }
    const open = /^<([A-Za-z][\w:.-]*)((?:\s+[\w:.-]+="[^"<]*")*)\s*(\/?)>$/.exec(tag);
    expect(open, `${name}: malformed tag ${tag}`).not.toBeNull();
    for (const value of open![2].matchAll(/="([^"]*)"/g)) checkText(value[1]);
    if (!open![3]) stack.push(open![1]);
  }
  checkText(src.slice(last));
  expect(stack, `${name}: unclosed tags`).toEqual([]);
}

describe("courseToEpub", () => {
  const bytes = courseToEpub(COURSE);
  const files = unzipSync(bytes);

  it("writes mimetype as the first entry, stored, with no extra field", () => {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    expect(view.getUint32(0, true)).toBe(0x04034b50); // local file header
    expect(view.getUint16(8, true)).toBe(0); // compression method: stored
    const nameLen = view.getUint16(26, true);
    const extraLen = view.getUint16(28, true);
    expect(extraLen).toBe(0);
    expect(strFromU8(bytes.subarray(30, 30 + nameLen))).toBe("mimetype");
    expect(strFromU8(bytes.subarray(30 + nameLen, 30 + nameLen + 20))).toBe("application/epub+zip");
  });

  it("has the container, package, nav, NCX and one XHTML per lesson", () => {
    expect(strFromU8(files["META-INF/container.xml"])).toContain('full-path="OEBPS/content.opf"');
    const opf = strFromU8(files["OEBPS/content.opf"]);
    expect(opf).toContain('properties="nav"');
    expect(opf).toContain("<dc:language>en</dc:language>");
    expect(opf).toContain('<meta property="dcterms:modified">2026-10-27T12:00:00Z</meta>');
    expect(files["OEBPS/nav.xhtml"]).toBeDefined();
    expect(files["OEBPS/toc.ncx"]).toBeDefined();
    const lessons = Object.keys(files).filter((f) => f.startsWith("OEBPS/text/"));
    expect(lessons).toEqual(["OEBPS/text/lesson-001.xhtml", "OEBPS/text/lesson-002.xhtml", "OEBPS/text/lesson-003.xhtml"]);
    for (const f of lessons) expect(opf).toContain(`href="${f.slice("OEBPS/".length)}"`);
  });

  it("writes every XML file well-formed", () => {
    for (const [name, data] of Object.entries(files)) {
      if (/\.(xhtml|opf|ncx|xml)$/.test(name)) assertWellFormed(name, strFromU8(data));
    }
  });

  it("renders lesson content for an e-reader", () => {
    const one = strFromU8(files["OEBPS/text/lesson-001.xhtml"]);
    expect(one).toContain("<table>");
    expect(one).toContain("[Image: a picture]");
    expect(one).not.toContain("example.com/x.png"); // no hotlinked image
    expect(one).not.toContain('href="/bam/in-app"'); // in-app links become text
    expect(one).toContain('href="https://example.com?a=1&amp;b=2"');
    expect(one).toContain("&lt;b&gt;raw html&lt;/b&gt;"); // raw HTML shown as text, as in the app
    expect(one).toContain("<br/>");
    expect(one).toContain("Check yourself 1.");
    expect(one).toContain("[Figure: Alt text]");
    expect(one).not.toContain(":::tool");
    expect(one).toContain("<h2>References</h2>");
    // Answers sit in the chapter's Answers section, after the questions.
    expect(one.indexOf("The force &lt;up&gt; &amp; away.")).toBeGreaterThan(one.indexOf("<h2>Answers</h2>"));
    expect(one).toContain("Lift, weight, thrust, drag.");
    // The body's own H1 is the title; no second one is added.
    expect(one.match(/<h1>/g)).toHaveLength(1);

    const two = strFromU8(files["OEBPS/text/lesson-002.xhtml"]);
    expect(two).toContain("<h1>Lesson Two</h1>");
    expect(two).toContain("<strong>1903</strong> (Flight): Wright brothers");

    const quiz = strFromU8(files["OEBPS/text/lesson-003.xhtml"]);
    expect(quiz).toContain("A. 1");
    expect(quiz).toContain("B. 3 &amp; up");
    expect(quiz.indexOf("<strong>A.</strong> 1")).toBeGreaterThan(quiz.indexOf("<h2>Answers</h2>"));
    expect(quiz).toContain('Review: <a href="lesson-001.xhtml">Lesson One</a>');
  });
});
