// Markdown to react-pdf elements, for the course PDF export.
//
// The lesson page renders markdown with react-markdown + remark-gfm (src/components/markdown.tsx).
// This module parses with the same remark pipeline (remark-parse + remark-gfm) and walks the mdast
// tree into react-pdf primitives (View, Text, Link), so what the PDF shows is what the lesson page
// parsed: the same headings, lists, tables, links, code and footnotes. It knows nothing about
// courses, quizzes or the app's `:::` directives: those are the caller's job (course-to-pdf.tsx),
// which hands this module plain markdown chunks. A later variant (a reviewer packet, a printable
// handout) composes a different document from this same mapping without touching it.
//
// What changes on the way to paper:
//   * images are never fetched; each becomes its alt text in brackets,
//   * a link keeps its words and, when the words are not the URL itself, shows the URL after them in
//     small type, because paper cannot be clicked (the words stay a live link for screen readers),
//   * an in-app link ("/bam/...") becomes its plain words: it would point nowhere outside the site,
//   * raw HTML is shown as text, exactly as the app shows it (no rehype-raw),
//   * footnotes are gathered under a rule at the end of the chunk, numbered as the text numbers them.
//
// Fonts are the PDF standard 14 (Times for body, Helvetica for headings, Courier for code), which
// every reader has built in, so nothing is embedded and the file stays small. Standard fonts cover
// WinAnsi (Western European) characters; a few common symbols outside it are mapped to ASCII below so
// they do not vanish, and anything else (other scripts, emoji) is left to the reader's fallback.

import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import type { FootnoteDefinition, List, PhrasingContent, Root, RootContent, Table } from "mdast";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";

/** Point sizes shared by every PDF this app writes: body 11pt reads at 100% on a letter page. */
export const PDF_FONT = {
  body: "Times-Roman",
  bodyBold: "Times-Bold",
  bodyItalic: "Times-Italic",
  bodyBoldItalic: "Times-BoldItalic",
  heading: "Helvetica-Bold",
  sans: "Helvetica",
  code: "Courier",
} as const;

export const PDF_COLOR = {
  ink: "#111827",
  slate: "#0f172a",
  muted: "#64748b",
  rule: "#d1d5db",
  fill: "#f3f4f6",
} as const;

export const BODY_SIZE = 11;

export const md = StyleSheet.create({
  h1: { fontFamily: PDF_FONT.heading, fontSize: 17, lineHeight: 1.25, marginTop: 14, marginBottom: 6, color: PDF_COLOR.slate },
  h2: { fontFamily: PDF_FONT.heading, fontSize: 14, lineHeight: 1.25, marginTop: 14, marginBottom: 5, color: PDF_COLOR.slate },
  h3: { fontFamily: PDF_FONT.heading, fontSize: 12, lineHeight: 1.25, marginTop: 11, marginBottom: 4, color: PDF_COLOR.slate },
  h4: { fontFamily: PDF_FONT.heading, fontSize: BODY_SIZE, lineHeight: 1.3, marginTop: 9, marginBottom: 3, color: PDF_COLOR.slate },
  p: { fontFamily: PDF_FONT.body, fontSize: BODY_SIZE, lineHeight: 1.4, marginTop: 3, marginBottom: 5 },
  tight: { marginTop: 1, marginBottom: 1 },
  strong: { fontFamily: PDF_FONT.bodyBold },
  em: { fontFamily: PDF_FONT.bodyItalic },
  strongEm: { fontFamily: PDF_FONT.bodyBoldItalic },
  del: { textDecoration: "line-through" },
  code: { fontFamily: PDF_FONT.code, fontSize: BODY_SIZE - 1.5 },
  codeBlock: {
    fontFamily: PDF_FONT.code,
    fontSize: 9,
    lineHeight: 1.35,
    backgroundColor: PDF_COLOR.fill,
    padding: 6,
    marginTop: 4,
    marginBottom: 6,
  },
  link: { color: PDF_COLOR.slate, textDecoration: "underline" },
  url: { fontFamily: PDF_FONT.sans, fontSize: BODY_SIZE - 3, color: PDF_COLOR.muted },
  imgAlt: { fontFamily: PDF_FONT.bodyItalic, color: PDF_COLOR.muted },
  sup: { fontFamily: PDF_FONT.sans, fontSize: BODY_SIZE - 4 },
  blockquote: {
    borderLeftWidth: 1.5,
    borderLeftColor: PDF_COLOR.muted,
    paddingLeft: 8,
    marginTop: 4,
    marginBottom: 6,
    marginLeft: 2,
  },
  list: { marginTop: 2, marginBottom: 5 },
  listItem: { flexDirection: "row", marginBottom: 1.5 },
  marker: { fontFamily: PDF_FONT.body, fontSize: BODY_SIZE, lineHeight: 1.4, width: 16, marginTop: 1 },
  itemBody: { flex: 1 },
  hr: { borderBottomWidth: 0.5, borderBottomColor: PDF_COLOR.rule, marginTop: 8, marginBottom: 8 },
  table: { marginTop: 5, marginBottom: 7, borderTopWidth: 0.5, borderLeftWidth: 0.5, borderColor: PDF_COLOR.muted },
  row: { flexDirection: "row" },
  cell: {
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: PDF_COLOR.muted,
    paddingVertical: 2.5,
    paddingHorizontal: 4,
    fontFamily: PDF_FONT.body,
    fontSize: BODY_SIZE - 1.5,
    lineHeight: 1.3,
  },
  th: { fontFamily: PDF_FONT.bodyBold, backgroundColor: PDF_COLOR.fill },
  footnotes: { marginTop: 8, borderTopWidth: 0.5, borderTopColor: PDF_COLOR.rule, paddingTop: 4 },
  footnote: { fontFamily: PDF_FONT.body, fontSize: BODY_SIZE - 1.5, lineHeight: 1.35, marginBottom: 2 },
});

/** Symbols the standard fonts cannot draw, mapped to ASCII so they do not vanish on the page. */
const SYMBOLS: Record<string, string> = {
  "→": "->",
  "←": "<-",
  "↔": "<->",
  "⇒": "=>",
  "−": "-",
  "≤": "<=",
  "≥": ">=",
  "≈": "~",
  "≠": "!=",
  "✓": "yes",
  "✔": "yes",
  "✗": "no",
  "✘": "no",
  "☐": "[ ]",
  "☑": "[x]",
  "☒": "[x]",
  "μ": "µ",
  "′": "'",
  "″": '"',
  " ": " ",
  " ": " ",
};
const SYMBOL_RE = new RegExp(`[${Object.keys(SYMBOLS).join("")}]`, "g");

/** Text as the standard fonts can set it. Exported so the course composer treats titles the same way. */
export function pdfText(text: string): string {
  return text.replace(SYMBOL_RE, (c) => SYMBOLS[c] ?? c);
}

const parser = unified().use(remarkParse).use(remarkGfm);

/** The mdast tree of a markdown string, with GFM (tables, task lists, footnotes, strikethrough). */
export function parseMarkdown(markdown: string): Root {
  return parser.parse(markdown);
}

function isSafeHref(href: string | null | undefined): href is string {
  return typeof href === "string" && /^(https?:|mailto:)/i.test(href);
}

/** `https://www.faa.gov/x` and `www.faa.gov/x` are the same words; do not print the URL twice. */
function sameAsUrl(words: string, href: string): boolean {
  const strip = (s: string) => s.trim().replace(/^(https?:\/\/)?(www\.)?/i, "").replace(/\/$/, "");
  return strip(words) === strip(href);
}

function plainText(nodes: PhrasingContent[]): string {
  return nodes
    .map((n) => {
      if (n.type === "text" || n.type === "inlineCode" || n.type === "html") return n.value;
      if (n.type === "image") return n.alt ?? "";
      if ("children" in n) return plainText(n.children as PhrasingContent[]);
      return "";
    })
    .join("");
}

interface Ctx {
  /** Key prefix, so several chunks on one page never collide. */
  prefix: string;
  /** Footnote definitions met in this chunk, rendered at its end. */
  footnotes: FootnoteDefinition[];
}

/** Inline (phrasing) nodes as nested Text/Link children. */
function inlines(nodes: PhrasingContent[], ctx: Ctx, keyBase: string): ReactNode[] {
  return nodes.map((n, i) => {
    const key = `${keyBase}-${i}`;
    switch (n.type) {
      case "text":
        return pdfText(n.value);
      case "strong":
        return (
          <Text key={key} style={md.strong}>
            {inlines(n.children, ctx, key)}
          </Text>
        );
      case "emphasis":
        return (
          <Text key={key} style={md.em}>
            {inlines(n.children, ctx, key)}
          </Text>
        );
      case "delete":
        return (
          <Text key={key} style={md.del}>
            {inlines(n.children, ctx, key)}
          </Text>
        );
      case "inlineCode":
        return (
          <Text key={key} style={md.code}>
            {pdfText(n.value)}
          </Text>
        );
      case "break":
        return "\n";
      case "image":
        return (
          <Text key={key} style={md.imgAlt}>
            [Image: {pdfText(n.alt?.trim() || "image")}]
          </Text>
        );
      case "html":
        return pdfText(n.value);
      case "link": {
        const words = inlines(n.children, ctx, key);
        if (!isSafeHref(n.url)) return <Text key={key}>{words}</Text>;
        const showUrl = !sameAsUrl(plainText(n.children), n.url);
        return (
          <Text key={key}>
            <Link src={n.url} style={md.link}>
              {words}
            </Link>
            {showUrl ? <Text style={md.url}> ({n.url})</Text> : null}
          </Text>
        );
      }
      case "footnoteReference":
        return (
          <Text key={key} style={md.sup}>
            [{n.label ?? n.identifier}]
          </Text>
        );
      case "linkReference":
      case "imageReference":
        // Reference-style links need definitions this parser is not given; keep the words.
        return (
          <Text key={key}>
            {"children" in n ? inlines(n.children as PhrasingContent[], ctx, key) : null}
          </Text>
        );
      default:
        return null;
    }
  });
}

function heading(depth: number) {
  return depth <= 1 ? md.h1 : depth === 2 ? md.h2 : depth === 3 ? md.h3 : md.h4;
}

function list(node: List, ctx: Ctx, key: string, depth: number): ReactNode {
  const start = node.start ?? 1;
  return (
    <View key={key} style={md.list}>
      {node.children.map((item, i) => {
        const marker = node.ordered ? `${start + i}.` : depth % 2 === 0 ? "•" : "-";
        const check = item.checked == null ? "" : item.checked ? "[x] " : "[ ] ";
        return (
          <View key={`${key}-${i}`} style={md.listItem}>
            <Text style={md.marker}>{marker}</Text>
            <View style={md.itemBody}>
              {check ? <Text style={[md.p, md.tight]}>{check}</Text> : null}
              {blocks(item.children, ctx, `${key}-${i}`, { tight: !item.spread && !node.spread, depth: depth + 1 })}
            </View>
          </View>
        );
      })}
    </View>
  );
}

/** Column widths: proportional to the longest cell in each column, clamped so one wordy column
 *  cannot crush the others into a single character per line. */
function columnWeights(table: Table): number[] {
  const cols = Math.max(...table.children.map((r) => r.children.length), 1);
  const weights = Array.from({ length: cols }, () => 1);
  for (const row of table.children) {
    row.children.forEach((cell, c) => {
      const len = plainText(cell.children).length;
      weights[c] = Math.max(weights[c], Math.min(Math.max(len, 4), 40));
    });
  }
  return weights;
}

function table(node: Table, ctx: Ctx, key: string): ReactNode {
  const weights = columnWeights(node);
  const align = node.align ?? [];
  return (
    <View key={key} style={md.table}>
      {node.children.map((row, r) => (
        <View key={`${key}-${r}`} style={md.row} wrap={false}>
          {weights.map((w, c) => {
            const cell = row.children[c];
            const textAlign = align[c] === "center" ? "center" : align[c] === "right" ? "right" : "left";
            return (
              <View key={`${key}-${r}-${c}`} style={[md.cell, r === 0 ? md.th : {}, { flex: w }]}>
                <Text style={{ textAlign }}>{cell ? inlines(cell.children, ctx, `${key}-${r}-${c}`) : ""}</Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}

interface BlockOptions {
  /** Inside a tight list item: paragraphs lose their vertical margin. */
  tight?: boolean;
  /** List nesting depth, which picks the bullet glyph. */
  depth?: number;
}

/** Block (flow) nodes as react-pdf elements. */
function blocks(nodes: RootContent[], ctx: Ctx, keyBase: string, opts: BlockOptions = {}): ReactNode[] {
  const depth = opts.depth ?? 0;
  return nodes.map((n, i) => {
    const key = `${keyBase}-${i}`;
    switch (n.type) {
      case "heading":
        return (
          <Text key={key} style={heading(n.depth)} minPresenceAhead={40}>
            {inlines(n.children, ctx, key)}
          </Text>
        );
      case "paragraph":
        return (
          <Text key={key} style={opts.tight ? [md.p, md.tight] : md.p}>
            {inlines(n.children, ctx, key)}
          </Text>
        );
      case "list":
        return list(n, ctx, key, depth);
      case "blockquote":
        return (
          <View key={key} style={md.blockquote}>
            {blocks(n.children, ctx, key, { depth })}
          </View>
        );
      case "code":
        return (
          <View key={key} style={md.codeBlock}>
            <Text>{pdfText(n.value)}</Text>
          </View>
        );
      case "table":
        return table(n, ctx, key);
      case "thematicBreak":
        return <View key={key} style={md.hr} />;
      case "html":
        return (
          <Text key={key} style={md.p}>
            {pdfText(n.value)}
          </Text>
        );
      case "footnoteDefinition":
        ctx.footnotes.push(n);
        return null;
      case "definition":
        return null;
      default:
        // A node type this walker does not know: show its text rather than lose it.
        return "children" in n ? (
          <Text key={key} style={md.p}>
            {inlines(n.children as PhrasingContent[], ctx, key)}
          </Text>
        ) : null;
    }
  });
}

function footnotes(ctx: Ctx): ReactNode {
  if (ctx.footnotes.length === 0) return null;
  return (
    <View key={`${ctx.prefix}-fn`} style={md.footnotes}>
      {ctx.footnotes.map((fn, i) => (
        <View key={`${ctx.prefix}-fn-${i}`} style={md.listItem}>
          <Text style={[md.marker, { fontSize: BODY_SIZE - 1.5 }]}>[{fn.label ?? fn.identifier}]</Text>
          <View style={md.itemBody}>{blocks(fn.children, ctx, `${ctx.prefix}-fn-${i}`, { tight: true })}</View>
        </View>
      ))}
    </View>
  );
}

/** Render a markdown string to react-pdf elements. `prefix` keeps React keys unique when several
 *  chunks share one page. The result is a list of block elements to place inside a Page or View. */
export function markdownToPdf(markdown: string, prefix = "md"): ReactNode[] {
  const ctx: Ctx = { prefix, footnotes: [] };
  const out = blocks(parseMarkdown(markdown).children, ctx, prefix);
  const fn = footnotes(ctx);
  return fn ? [...out, fn] : out;
}
