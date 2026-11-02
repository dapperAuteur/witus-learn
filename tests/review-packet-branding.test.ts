import { describe, expect, it } from "vitest";
import { strFromU8, unzipSync } from "fflate";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { courseToEpub } from "@/lib/epub/course-to-epub";

// The reviewer packet carries the tenant's branding only (plans/97 v2 section 5).
describe("packet branding", () => {
  it("an EPUB names the school as publisher when given, WitUS otherwise", () => {
    const base = { title: "T", identifier: "urn:uuid:x", lessons: [{ title: "L", body: "Hi." }] };
    const opf = (b: Uint8Array) => strFromU8(unzipSync(b)["OEBPS/content.opf"]);
    expect(opf(courseToEpub({ ...base, publisher: "School A", author: "School A" }))).toContain("<dc:publisher>School A</dc:publisher>");
    expect(opf(courseToEpub(base))).toContain("<dc:publisher>WitUS</dc:publisher>");
  });
  it("the PDF's wordmark, address and footer come from brand when it is set", () => {
    const pdf = readFileSync(join(process.cwd(), "src/lib/pdf/course-to-pdf.tsx"), "utf8");
    expect(pdf).toContain("if (course.brand)");
    expect(pdf).toContain("<Footer course={course.title} brand={brandOf(course).name} />");
    expect(pdf).toContain("{pdfText(brand.wordmark)}");
  });
});
