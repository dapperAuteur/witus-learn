import { describe, expect, it } from "vitest";
import { unzlibSync } from "fflate";
import { courseToPdf, type PdfCourseInput } from "@/lib/pdf/course-to-pdf";

// The course PDF (src/lib/pdf/course-to-pdf.tsx): a real render of a small course, checked as
// bytes. The reader-facing structure is read back from the file itself: page objects, bookmark
// titles, and the text runs inside the (zlib-compressed) content streams, which pdfkit writes as
// one hex glyph per character in `[<..> kern <..>] TJ` arrays for the standard fonts.

const COURSE: PdfCourseInput = {
  title: "Test Course & Friends",
  description: "A course about **escaping** & things.",
  generatedOn: new Date("2026-10-27T12:00:00.000Z"),
  disclaimers: ["For educational purposes only."],
  lessons: [
    {
      slug: "one",
      title: "Lesson One",
      section: "Module 1",
      body:
        "# Lesson One\n\nText with <b>raw html</b>, a & b, an arrow → here, and a [link](/bam/in-app) plus [ext](https://example.com?a=1&b=2).\n\n" +
        "| A | B |\n| :-- | --: |\n| 1 | 2 |\n\n![a picture](https://example.com/x.png)\n\nLine one  \nline two\n\n" +
        ":::reveal What is lift? ||| The force up and away.\n\n" +
        ":::figure https://example.com/f.png ||| Alt text ||| A caption ||| Credit: FAA\n\n" +
        ":::tool fly-witus | Open it\n\n## References\n\nFAA. (2016). *Pilot's handbook*.",
      recall: [{ prompt: "Four forces?", answer: "Lift, weight, thrust, drag." }],
    },
    {
      slug: "two",
      title: "Lesson Two",
      section: "Module 1",
      lessonType: "video",
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

function latin(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("latin1");
}

/** Every text run drawn in the file, in file order, decoded from the standard-font glyph codes.
 *  Each stream's byte length comes from its dictionary's /Length, as a PDF reader finds it. A run is
 *  one line of one Text node, except that the line breaker starts a new run at a bracket. */
function textRuns(bytes: Uint8Array): string[] {
  const src = latin(bytes);
  const runs: string[] = [];
  for (const m of src.matchAll(/\/Length (\d+)[^>]*>>\s*stream\r?\n/g)) {
    const start = m.index + m[0].length;
    const end = start + Number(m[1]);
    let content: string;
    try {
      content = latin(unzlibSync(bytes.subarray(start, end)));
    } catch {
      continue; // an image or font stream, not page content
    }
    for (const arr of content.matchAll(/\[([^\]]*)\]\s*TJ/g)) {
      runs.push(
        [...arr[1].matchAll(/<([0-9a-fA-F]+)>/g)].map((h) => Buffer.from(h[1], "hex").toString("latin1")).join(""),
      );
    }
  }
  return runs;
}

const pageCount = (bytes: Uint8Array) => (latin(bytes).match(/\/Type \/Page(?!s)/g) ?? []).length;
const bookmarks = (bytes: Uint8Array) => [...latin(bytes).matchAll(/\/Title \(([^)]*)\)/g)].map((m) => m[1]);

describe("courseToPdf", () => {
  it("writes a multi-page PDF with a bookmark per lesson and the course title in its metadata", async () => {
    const bytes = await courseToPdf(COURSE, { variant: "reader" });
    expect(latin(bytes.subarray(0, 5))).toBe("%PDF-");
    // Title, contents, three lessons each on a new page, plus the answers pages of lessons one and three.
    expect(pageCount(bytes)).toBe(7);
    const marks = bookmarks(bytes);
    expect(marks).toContain("About this book");
    expect(marks).toContain("Contents");
    expect(marks).toContain("Lesson One");
    expect(marks).toContain("Lesson Two");
    expect(marks).toContain("Module 1 Quiz");
    // The document title, as pdfkit writes the Info dictionary's string object.
    expect(latin(bytes)).toContain("(Test Course & Friends)");
  });

  it("draws the lesson text, the running header and footer, and the questions before their answers", async () => {
    const bytes = await courseToPdf(COURSE, { variant: "reader" });
    const runs = textRuns(bytes);
    const all = runs.join("\n");
    expect(all).toContain("Test Course & Friends");
    expect(all).toContain("For educational purposes only.");
    expect(all).toContain("Contents");
    expect(all).toContain("Module 1");
    expect(all).toContain("Lesson One");
    expect(all).toContain("raw html");
    expect(all).toContain("an arrow -> here");
    expect(all).toContain("Image: a picture]");
    expect(all).not.toContain("x.png");
    expect(all).toContain("https://example.com?a=1&b=2");
    expect(all).not.toContain("/bam/in-app");
    expect(all).toContain("Check yourself 1.");
    expect(all).toContain("Figure: Alt text]");
    expect(all).not.toContain(":::tool");
    expect(all).toContain("References");
    expect(all).toContain("1903");
    expect(all).toContain("this lesson includes a video");
    expect(all).toContain("Recall");
    expect(all).toContain("A. 1");
    expect(all).toContain("B. 3 & up");
    expect(all).toContain("Review: Lesson One");
    expect(all).toContain("page 2 of 7");
    expect(all).toContain("page 7 of 7");
    // The answers come after the questions and the checks they answer.
    expect(all.indexOf("The force up and away.")).toBeGreaterThan(all.indexOf("What is lift?"));
    expect(all.indexOf("Lift, weight, thrust, drag.")).toBeGreaterThan(all.indexOf("Four forces?"));
    expect(all.indexOf("One is less.")).toBeGreaterThan(all.indexOf("Which is < 2?"));
  });

  it("prints page numbers in the contents that match where the lessons start", async () => {
    const bytes = await courseToPdf(COURSE, { variant: "reader" });
    const runs = textRuns(bytes);
    // The contents page: the rows read title, number, title, number in file order.
    const start = runs.indexOf("Contents", runs.indexOf("Contents") + 1);
    const contents = runs.slice(start, start + 12);
    const after = (title: string) => contents[contents.indexOf(title) + 1];
    expect(after("Lesson One")).toBe("3");
    expect(after("Lesson Two")).toBe("5");
    expect(after("Module 1 Quiz")).toBe("6");
  });

  it("can skip the second layout pass, leaving the contents without numbers", async () => {
    const bytes = await courseToPdf(COURSE, { variant: "reader", tocPageNumbers: false });
    expect(pageCount(bytes)).toBe(7);
    const runs = textRuns(bytes);
    const start = runs.indexOf("Contents", runs.indexOf("Contents") + 1);
    expect(runs.slice(start, start + 8)).not.toContain("3");
  });

  it("rejects a variant it does not know", async () => {
    await expect(courseToPdf(COURSE, { variant: "poster" as unknown as "reader" })).rejects.toThrow(/variant/);
  });
});
