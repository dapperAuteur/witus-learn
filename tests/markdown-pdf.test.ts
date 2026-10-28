import { describe, expect, it } from "vitest";
import { Link, Text, View } from "@react-pdf/renderer";
import { isValidElement, type ReactElement, type ReactNode } from "react";
import { markdownToPdf, md, pdfText } from "@/lib/pdf/markdown-pdf";

// The markdown-to-react-pdf mapping (src/lib/pdf/markdown-pdf.tsx): each markdown construct a
// lesson uses becomes the react-pdf element the course PDF expects, with the words intact. These
// tests inspect the element tree, not a rendered file; tests/course-to-pdf.test.ts covers the bytes.

type El = ReactElement<{ children?: ReactNode; style?: unknown; src?: string }>;

function elements(node: ReactNode, out: El[] = []): El[] {
  if (Array.isArray(node)) node.forEach((n) => elements(n, out));
  else if (isValidElement(node)) {
    out.push(node as El);
    elements((node as El).props.children, out);
  }
  return out;
}

function text(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(text).join("");
  if (isValidElement(node)) return text((node as El).props.children);
  return "";
}

function styles(el: El): Record<string, unknown>[] {
  const s = el.props.style;
  return (Array.isArray(s) ? s : [s]).filter((x): x is Record<string, unknown> => !!x && typeof x === "object");
}

const hasStyle = (el: El, style: unknown) => styles(el).includes(style as Record<string, unknown>);

describe("markdownToPdf", () => {
  it("maps headings to heading-styled Text", () => {
    const els = elements(markdownToPdf("# One\n\n## Two\n\n### Three\n\n#### Four"));
    const heads = els.filter((e) => e.type === Text && [md.h1, md.h2, md.h3, md.h4].some((s) => hasStyle(e, s)));
    expect(heads.map((h) => text(h))).toEqual(["One", "Two", "Three", "Four"]);
    expect(hasStyle(heads[0], md.h1)).toBe(true);
    expect(hasStyle(heads[1], md.h2)).toBe(true);
  });

  it("keeps inline formatting as nested Text and maps symbols the standard fonts lack", () => {
    const els = elements(markdownToPdf("Plain **bold** and *em* and `code`, A → B, ~~gone~~."));
    const p = els.find((e) => e.type === Text && hasStyle(e, md.p))!;
    expect(text(p)).toBe("Plain bold and em and code, A -> B, gone.");
    const inner = elements(p.props.children);
    expect(inner.some((e) => hasStyle(e, md.strong) && text(e) === "bold")).toBe(true);
    expect(inner.some((e) => hasStyle(e, md.em) && text(e) === "em")).toBe(true);
    expect(inner.some((e) => hasStyle(e, md.code) && text(e) === "code")).toBe(true);
    expect(inner.some((e) => hasStyle(e, md.del) && text(e) === "gone")).toBe(true);
    expect(pdfText("≥ 5 ✓")).toBe(">= 5 yes");
  });

  it("renders ordered and unordered lists, nested, with markers", () => {
    const out = markdownToPdf("1. first\n2. second\n   - inner a\n   - inner b\n\n- [x] done\n- [ ] todo");
    const els = elements(out);
    const markers = els.filter((e) => e.type === Text && hasStyle(e, md.marker)).map((e) => text(e));
    expect(markers).toEqual(["1.", "2.", "-", "-", "•", "•"]);
    const body = text(out);
    expect(body).toContain("inner a");
    expect(body).toContain("[x] done");
    expect(body).toContain("[ ] todo");
  });

  it("renders a table as bordered rows and cells, header bold, columns aligned as written", () => {
    const els = elements(markdownToPdf("| Name | Amount |\n| :-- | --: |\n| Lift | 1 |\n| Drag | 22 |"));
    const table = els.find((e) => e.type === View && hasStyle(e, md.table))!;
    const rows = elements(table.props.children).filter((e) => e.type === View && hasStyle(e, md.row));
    expect(rows).toHaveLength(3);
    const cells = elements(rows[0].props.children).filter((e) => e.type === View && hasStyle(e, md.cell));
    expect(cells).toHaveLength(2);
    expect(cells.every((c) => hasStyle(c, md.th))).toBe(true);
    const bodyCells = elements(rows[1].props.children).filter((e) => e.type === View && hasStyle(e, md.cell));
    expect(bodyCells.some((c) => hasStyle(c, md.th))).toBe(false);
    const amount = elements(bodyCells[1].props.children).find((e) => e.type === Text)!;
    expect(styles(amount).some((s) => s.textAlign === "right")).toBe(true);
    expect(text(rows[2])).toBe("Drag22");
  });

  it("renders blockquotes, code blocks and rules", () => {
    const els = elements(markdownToPdf("> quoted\n\n```\nlet x = 1;\n```\n\n---\n\nafter"));
    expect(els.some((e) => e.type === View && hasStyle(e, md.blockquote) && text(e) === "quoted")).toBe(true);
    expect(els.some((e) => e.type === View && hasStyle(e, md.codeBlock) && text(e) === "let x = 1;")).toBe(true);
    expect(els.some((e) => e.type === View && hasStyle(e, md.hr))).toBe(true);
  });

  it("prints a link's address after its words, keeps in-app links as words, and does not repeat a bare URL", () => {
    const els = elements(
      markdownToPdf("See [the rule](https://www.faa.gov/x) and [a lesson](/bam/course) and <https://example.com>."),
    );
    const links = els.filter((e) => e.type === Link);
    expect(links.map((l) => l.props.src)).toEqual(["https://www.faa.gov/x", "https://example.com"]);
    const p = els.find((e) => e.type === Text && hasStyle(e, md.p))!;
    expect(text(p)).toBe("See the rule (https://www.faa.gov/x) and a lesson and https://example.com.");
  });

  it("shows an image as its alt text and never its address", () => {
    const out = markdownToPdf("![A sectional chart](https://example.com/chart.png)");
    expect(text(out)).toBe("[Image: A sectional chart]");
    expect(JSON.stringify(out)).not.toContain("chart.png");
  });

  it("shows raw HTML as text, as the lesson page does", () => {
    expect(text(markdownToPdf("Keep <b>this</b> visible."))).toBe("Keep <b>this</b> visible.");
  });

  it("numbers footnote references and gathers the definitions at the end", () => {
    const out = markdownToPdf("A claim[^1] here.\n\n[^1]: The source, p. 4.\n\nMore text.");
    expect(text(out)).toBe("A claim[1] here.More text.[1]The source, p. 4.");
    const els = elements(out);
    expect(els.some((e) => e.type === View && hasStyle(e, md.footnotes))).toBe(true);
  });
});
