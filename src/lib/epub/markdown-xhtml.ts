// Markdown to well-formed XHTML for the EPUB export, using the SAME parser the lesson page uses.
//
// The app renders lesson text with react-markdown + remark-gfm (src/components/markdown.tsx). This
// module calls react-markdown's synchronous `Markdown` function directly, which runs that exact
// unified pipeline and returns a plain React element tree, and then serializes the tree to XHTML
// itself. It never imports react-dom/server, so it runs anywhere React does: a tsx script, a vitest
// test, or a Next.js route handler.
//
// Why a hand serializer rather than renderToStaticMarkup: EPUB content documents are XML. The
// serializer below always self-closes void elements, always quotes and escapes attributes, and
// strips characters XML 1.0 forbids, so every file it writes parses with a strict XML parser.
//
// What changes on the way to an e-reader:
//   * images are NOT embedded or hotlinked; each becomes its alt text in brackets,
//   * links keep only absolute http(s) and mailto targets; an in-app link ("/bam/...") becomes its
//     plain text, because it would point nowhere inside the book,
//   * raw HTML in the markdown is shown as text, exactly as the app shows it (no rehype-raw).

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { isValidElement, Fragment, type ReactNode } from "react";

/** Elements XHTML must write as `<x/>`. */
const VOID = new Set(["br", "hr", "img", "input", "col", "area", "base", "link", "meta", "wbr", "source", "track"]);

/** Characters XML 1.0 does not allow anywhere in a document (C0 controls other than tab, LF, CR). */
// eslint-disable-next-line no-control-regex
const XML_INVALID = /[\u0000-\u0008\u000B\u000C\u000E-\u001F￾￿]/g;

export function escapeXml(text: string): string {
  return text
    .replace(XML_INVALID, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** A React `style` object as a CSS declaration string. */
function styleString(style: Record<string, unknown>): string {
  return Object.entries(style)
    .filter(([, v]) => v != null && v !== "")
    .map(([k, v]) => `${k.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}: ${String(v)}`)
    .join("; ");
}

function isSafeHref(href: unknown): href is string {
  return typeof href === "string" && /^(https?:|mailto:)/i.test(href);
}

/** Serialize one React node (as react-markdown builds them: intrinsic elements, strings, arrays,
 *  fragments) to XHTML. Unknown component types render their children only. */
function serialize(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number" || typeof node === "bigint") {
    return escapeXml(String(node));
  }
  if (Array.isArray(node)) return node.map(serialize).join("");
  if (!isValidElement(node)) return "";

  const props = (node.props ?? {}) as Record<string, unknown> & { children?: ReactNode };
  if (typeof node.type !== "string" || node.type === (Fragment as unknown)) {
    return serialize(props.children);
  }
  const tag = node.type;

  if (tag === "img") {
    const alt = typeof props.alt === "string" && props.alt.trim() ? props.alt.trim() : "image";
    return `<span class="img-alt">[Image: ${escapeXml(alt)}]</span>`;
  }
  if (tag === "a" && !isSafeHref(props.href)) {
    // A footnote back-reference or an in-app path: keep the words, drop the dead link.
    return `<span>${serialize(props.children)}</span>`;
  }

  let attrs = "";
  for (const [key, value] of Object.entries(props)) {
    if (key === "children" || key === "node" || key === "key" || value == null || value === false) continue;
    const name = key === "className" ? "class" : key === "htmlFor" ? "for" : key;
    // Only plain attribute names; anything odd from a plugin is dropped rather than risked.
    if (!/^[a-zA-Z][a-zA-Z0-9-]*$/.test(name)) continue;
    let v: string;
    if (name === "style" && typeof value === "object") v = styleString(value as Record<string, unknown>);
    else if (value === true) v = name;
    else if (Array.isArray(value)) v = value.join(" ");
    else if (typeof value === "string" || typeof value === "number") v = String(value);
    else continue;
    attrs += ` ${name}="${escapeXml(v)}"`;
  }
  if (VOID.has(tag)) return `<${tag}${attrs}/>`;
  return `<${tag}${attrs}>${serialize(props.children)}</${tag}>`;
}

/** Render a markdown block to XHTML with the app's lesson parser (react-markdown + remark-gfm).
 *  `idPrefix` keeps generated ids (GFM footnotes) unique when several blocks share one file. */
export function markdownToXhtml(markdown: string, idPrefix = "md-"): string {
  const tree = Markdown({
    children: markdown,
    remarkPlugins: [remarkGfm],
    remarkRehypeOptions: { clobberPrefix: idPrefix },
  });
  return serialize(tree);
}

