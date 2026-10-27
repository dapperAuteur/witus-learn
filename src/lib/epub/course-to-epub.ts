// courseToEpub: one course in, one EPUB 3 file out (bytes). Pure: no filesystem, no database, no
// network, so a CLI script (scripts/export-course-epub.ts) and a future admin route handler can both
// call it unchanged. The caller decides where the course comes from (scripts/data or the DB) and maps
// it onto `EpubCourseInput`, which is deliberately the overlap of `AuthoredCourse` and the `lessons`
// table: title, section, body markdown, quiz, recall cards.
//
// What the book contains:
//   * a title page (course description), then a contents page (the EPUB 3 nav), then
//   * one XHTML file per lesson, in course order. A lesson's `section` (the course module) is shown
//     above its title and groups the table of contents.
//   * Lesson text renders with the app's own markdown parser (markdown-xhtml.ts) and the same
//     directive set as src/components/lesson-body.tsx: `:::reveal` checks, `:::figure`,
//     `:::timeline`. App-only callouts (`:::tool`, `:::field-log`) are dropped.
//   * Quiz lessons list every question in the bank with lettered options. The answers are NOT next
//     to the questions: an e-reader cannot hide text, and a visible answer spoils the self-test. Each
//     chapter ends with an "Answers" section holding the quiz answers (letter, option, explanation,
//     and a link to the lesson that teaches it), the `:::reveal` check answers and the recall-card
//     answers. Every question links to its answer and every answer links back.
//   * Images are never embedded or hotlinked; they become their alt text.
//
// Packaging: `mimetype` is the first zip entry and STORED (uncompressed, no extra field), as the OCF
// spec requires; everything else is deflated. An NCX ships beside the EPUB 3 nav for older readers.

import { zipSync, strToU8, type Zippable } from "fflate";
import type { QuizContent } from "@/lib/quiz";
import { REVEAL_RE } from "@/lib/reveals";
import { FIGURE_RE } from "@/lib/figures";
import { TIMELINE_CLOSE, TIMELINE_OPEN_RE, parseTimelineEvents } from "@/lib/timeline";
import { escapeXml, markdownToXhtml } from "./markdown-xhtml";

export interface EpubLessonInput {
  /** Used to resolve a quiz question's `sourceLessonSlug` into a "Review" link. */
  slug?: string | null;
  title: string;
  /** The course module this lesson sits in. Consecutive lessons with one section share a TOC group. */
  section?: string | null;
  /** The lesson type (`text`, `quiz`, `video`, ...). Media types get a one-line note. */
  lessonType?: string | null;
  /** Lesson markdown (`textContent` in the DB, `body` in scripts/data). */
  body?: string | null;
  quiz?: QuizContent | null;
  recall?: { prompt: string; answer: string }[] | null;
}

export interface EpubCourseInput {
  title: string;
  description?: string | null;
  /** Shown as dc:creator. Defaults to "WitUS". */
  author?: string | null;
  /** BCP 47 language tag. Defaults to "en". */
  language?: string | null;
  /** A stable unique id for the book, e.g. `urn:uuid:<course id>`. Same course, same id. */
  identifier: string;
  /** dcterms:modified. Defaults to now; pass a fixed date for reproducible output. */
  modified?: Date;
  lessons: EpubLessonInput[];
}

const MEDIA_NOTE: Record<string, string> = {
  video: "a video",
  audio: "an audio recording",
  slides: "a slide deck",
  "360video": "a 360 video",
  photo_360: "a 360 photo",
  virtual_tour: "a virtual tour",
  map: "an interactive map",
  assignment: "an assignment you submit online",
  exercise: "an interactive exercise",
};

const TOOL_OR_FIELD_LOG_RE = /^:::(?:tool|field-log)\b/;

const CSS = `body { font-family: Georgia, "Times New Roman", serif; line-height: 1.5; margin: 0 0.5em; }
h1, h2, h3, h4 { font-family: Georgia, serif; line-height: 1.25; page-break-after: avoid; }
h1 { font-size: 1.5em; margin: 0.6em 0 0.5em; }
h2 { font-size: 1.25em; margin: 1.2em 0 0.4em; }
h3 { font-size: 1.1em; margin: 1em 0 0.3em; }
p { margin: 0.5em 0; }
.kicker { font-size: 0.85em; font-variant: small-caps; letter-spacing: 0.03em; margin-bottom: 0; }
.note, .img-alt, .credit, .meta { font-style: italic; }
table { border-collapse: collapse; width: 100%; margin: 0.8em 0; font-size: 0.9em; }
th, td { border: 1px solid #000; padding: 0.25em 0.4em; text-align: left; vertical-align: top; }
th { font-weight: bold; }
blockquote { margin: 0.8em 0 0.8em 1em; padding-left: 0.6em; border-left: 2px solid #000; }
code { font-family: "Courier New", monospace; font-size: 0.9em; }
hr { border: 0; border-top: 1px solid #000; margin: 1em 0; }
.check, .figure, .timeline { margin: 0.9em 0; padding: 0.4em 0.6em; border: 1px solid #000; page-break-inside: avoid; }
.question { margin: 1em 0 0.3em; page-break-inside: avoid; }
.option { margin: 0.15em 0 0.15em 1.2em; }
.answers { page-break-before: always; }
.answer { margin: 0.6em 0; }
a { color: inherit; }
`;

function xhtmlDoc(title: string, lang: string, body: string, cssHref: string): string {
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html>\n` +
    `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="${escapeXml(lang)}" lang="${escapeXml(lang)}">\n` +
    `<head>\n<meta charset="UTF-8"/>\n<title>${escapeXml(title)}</title>\n` +
    `<link rel="stylesheet" type="text/css" href="${cssHref}"/>\n</head>\n<body>\n${body}\n</body>\n</html>\n`
  );
}

/** Plain text that may hold blank-line paragraph breaks (quiz explanations), as paragraphs. */
function paragraphs(text: string): string {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${escapeXml(p).replace(/\n/g, "<br/>")}</p>`)
    .join("\n");
}

const letter = (i: number) => String.fromCharCode(65 + i);

const lessonFile = (i: number) => `lesson-${String(i + 1).padStart(3, "0")}.xhtml`;

interface Answer {
  id: string;
  backId: string;
  label: string;
  html: string;
}

/** The lesson body with the app's directives, plus the answers its checks carry. */
function renderBody(body: string, fileIndex: number, answers: Answer[]): string {
  const out: string[] = [];
  let buf: string[] = [];
  let chunk = 0;
  let check = 0;
  const flush = () => {
    if (buf.join("").trim()) out.push(markdownToXhtml(buf.join("\n"), `l${fileIndex}-${chunk++}-`));
    buf = [];
  };
  const lines = body.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const tl = line.match(TIMELINE_OPEN_RE);
    if (tl) {
      let close = i + 1;
      while (close < lines.length && lines[close].trim() !== TIMELINE_CLOSE) close++;
      const events = parseTimelineEvents(lines.slice(i + 1, close));
      if (events.length > 0) {
        flush();
        const items = events
          .map(
            (e) =>
              `<li><strong>${escapeXml(e.year)}</strong>${e.lane ? ` (${escapeXml(e.lane)})` : ""}: ${escapeXml(e.text)}</li>`,
          )
          .join("\n");
        out.push(
          `<div class="timeline">${tl[1] ? `<p class="kicker">${escapeXml(tl[1])}</p>` : ""}<ul>\n${items}\n</ul></div>`,
        );
        i = close;
        continue;
      }
    }
    const fig = line.match(FIGURE_RE);
    const rv = line.match(REVEAL_RE);
    if (fig) {
      flush();
      out.push(
        `<div class="figure"><p class="img-alt">[Figure: ${escapeXml(fig[2])}]</p>` +
          `<p>${escapeXml(fig[3])}</p><p class="credit">${escapeXml(fig[4])}</p></div>`,
      );
    } else if (rv) {
      flush();
      check++;
      const id = `ans-c${check}`;
      const backId = `q-c${check}`;
      out.push(
        `<div class="check" id="${backId}"><p><strong>Check yourself ${check}.</strong> ${escapeXml(rv[1])}</p>` +
          `<p class="meta"><a href="#${id}">See the answer</a></p></div>`,
      );
      answers.push({ id, backId, label: `Check yourself ${check}`, html: paragraphs(rv[2]) });
    } else if (TOOL_OR_FIELD_LOG_RE.test(line)) {
      flush();
    } else {
      buf.push(line);
    }
  }
  flush();
  return out.join("\n");
}

function renderQuiz(
  quiz: QuizContent,
  answers: Answer[],
  fileBySlug: Map<string, { file: string; title: string }>,
): string {
  const qs = quiz.questions ?? [];
  const intro =
    `<p class="meta">${qs.length} question${qs.length === 1 ? "" : "s"}` +
    (quiz.passingScore != null ? `. Passing score in the online course: ${quiz.passingScore}%` : "") +
    `. Answers are at the end of this chapter.</p>`;
  const items = qs.map((q, i) => {
    const n = i + 1;
    const id = `ans-q${n}`;
    const backId = `q-q${n}`;
    const correct = q.options[q.correctIndex];
    const source = q.sourceLessonSlug ? fileBySlug.get(q.sourceLessonSlug) : undefined;
    answers.push({
      id,
      backId,
      label: `Question ${n}`,
      html:
        `<p><strong>${letter(q.correctIndex)}.</strong> ${escapeXml(correct ?? "")}</p>` +
        (q.explanation ? paragraphs(q.explanation) : "") +
        (source ? `<p class="meta">Review: <a href="${source.file}">${escapeXml(source.title)}</a></p>` : ""),
    });
    return (
      `<div class="question" id="${backId}"><p><strong>${n}.</strong> ${escapeXml(q.prompt)}</p>` +
      (q.imageUrl ? `<p class="img-alt">[Figure: ${escapeXml(q.imageAlt || "see the online course")}]</p>` : "") +
      q.options.map((o, j) => `<p class="option">${letter(j)}. ${escapeXml(o)}</p>`).join("") +
      `<p class="option meta"><a href="#${id}">Answer</a></p></div>`
    );
  });
  return `<section class="quiz">\n${intro}\n${items.join("\n")}\n</section>`;
}

function renderRecall(cards: { prompt: string; answer: string }[], answers: Answer[]): string {
  const items = cards.map((c, i) => {
    const n = i + 1;
    const id = `ans-r${n}`;
    const backId = `q-r${n}`;
    answers.push({ id, backId, label: `Recall ${n}`, html: paragraphs(c.answer) });
    return `<li id="${backId}">${escapeXml(c.prompt)} <a href="#${id}">Answer</a></li>`;
  });
  return (
    `<section class="recall">\n<h2>Recall</h2>\n<p class="meta">Answer from memory first, then check the answer at the end of this chapter.</p>\n` +
    `<ol>\n${items.join("\n")}\n</ol>\n</section>`
  );
}

function renderAnswers(answers: Answer[]): string {
  if (answers.length === 0) return "";
  const items = answers
    .map(
      (a) =>
        `<div class="answer" id="${a.id}"><p><strong>${escapeXml(a.label)}</strong> <a href="#${a.backId}">(back)</a></p>\n${a.html}</div>`,
    )
    .join("\n");
  return `<section class="answers" epub:type="answers">\n<h2>Answers</h2>\n${items}\n</section>`;
}

/** `2026-10-27T14:03:09Z`: dcterms:modified must have no fractional seconds. */
function epubDate(d: Date): string {
  return d.toISOString().replace(/\.\d{3}Z$/, "Z");
}

interface TocGroup {
  section: string | null;
  lessons: { file: string; title: string }[];
}

/** Build the EPUB. Returns the zip bytes. */
export function courseToEpub(course: EpubCourseInput): Uint8Array {
  const lang = course.language?.trim() || "en";
  const author = course.author?.trim() || "WitUS";
  const modified = course.modified ?? new Date();
  const lessons = course.lessons;

  const fileBySlug = new Map<string, { file: string; title: string }>();
  lessons.forEach((l, i) => {
    if (l.slug) fileBySlug.set(l.slug, { file: lessonFile(i), title: l.title });
  });

  // Lesson chapters.
  const chapters = lessons.map((l, i) => {
    const answers: Answer[] = [];
    const parts: string[] = [];
    if (l.section) parts.push(`<p class="kicker">${escapeXml(l.section)}</p>`);
    const body = l.body ?? "";
    // Most authored bodies open with their own H1; only add the title when the body does not.
    if (!/^\s*#\s/.test(body)) parts.push(`<h1>${escapeXml(l.title)}</h1>`);
    const type = l.lessonType ?? (l.quiz ? "quiz" : "text");
    if (MEDIA_NOTE[type]) {
      parts.push(`<p class="note">In the online course, this lesson includes ${MEDIA_NOTE[type]}.</p>`);
    }
    if (body.trim()) parts.push(renderBody(body, i + 1, answers));
    if (l.quiz?.questions?.length) parts.push(renderQuiz(l.quiz, answers, fileBySlug));
    if (l.recall?.length) parts.push(renderRecall(l.recall, answers));
    parts.push(renderAnswers(answers));
    return xhtmlDoc(
      l.title,
      lang,
      `<section epub:type="chapter" id="chapter">\n${parts.filter(Boolean).join("\n")}\n</section>`,
      "../style.css",
    );
  });

  // Table of contents, grouped by consecutive section.
  const groups: TocGroup[] = [];
  lessons.forEach((l, i) => {
    const section = l.section?.trim() || null;
    const last = groups[groups.length - 1];
    const entry = { file: `text/${lessonFile(i)}`, title: l.title };
    if (section && last && last.section === section) last.lessons.push(entry);
    else groups.push({ section, lessons: [entry] });
  });

  const navItems = groups
    .map((g) =>
      g.section
        ? `<li><a href="${g.lessons[0].file}">${escapeXml(g.section)}</a>\n<ol>\n${g.lessons
            .map((x) => `<li><a href="${x.file}">${escapeXml(x.title)}</a></li>`)
            .join("\n")}\n</ol></li>`
        : g.lessons.map((x) => `<li><a href="${x.file}">${escapeXml(x.title)}</a></li>`).join("\n"),
    )
    .join("\n");
  const firstLesson = lessons.length ? `text/${lessonFile(0)}` : "title.xhtml";
  const nav = xhtmlDoc(
    "Contents",
    lang,
    `<nav epub:type="toc" id="toc">\n<h1>Contents</h1>\n<ol>\n<li><a href="title.xhtml">About this book</a></li>\n${navItems}\n</ol>\n</nav>\n` +
      `<nav epub:type="landmarks" id="landmarks" hidden="hidden">\n<h2>Landmarks</h2>\n<ol>\n` +
      `<li><a epub:type="toc" href="nav.xhtml">Contents</a></li>\n` +
      `<li><a epub:type="bodymatter" href="${firstLesson}">Start reading</a></li>\n</ol>\n</nav>`,
    "style.css",
  );

  const titlePage = xhtmlDoc(
    course.title,
    lang,
    `<section epub:type="titlepage" id="titlepage">\n<h1>${escapeXml(course.title)}</h1>\n<p class="meta">${escapeXml(author)}</p>\n` +
      (course.description?.trim() ? markdownToXhtml(course.description, "desc-") : "") +
      `\n<h2>How to read this book</h2>\n<p>Each lesson is one chapter. Quiz questions, check-yourself questions and recall cards appear in the lesson; their answers are collected in an Answers section at the end of the same chapter, so you can test yourself before you look. Every question links to its answer, and every answer links back.</p>\n` +
      `<p class="meta">Exported ${escapeXml(epubDate(modified).slice(0, 10))}. Images in the online course are described here by their alt text.</p>\n</section>`,
    "style.css",
  );

  // NCX for older readers. playOrder is per distinct target, in reading order, so a section entry
  // and its first lesson (same file) share one number and the sequence has no gaps.
  const playOrder = new Map<string, number>();
  for (const src of ["title.xhtml", ...lessons.map((_, i) => `text/${lessonFile(i)}`)]) {
    if (!playOrder.has(src)) playOrder.set(src, playOrder.size + 1);
  }
  let navPointId = 0;
  const navPoint = (label: string, src: string, children = "") =>
    `<navPoint id="np-${++navPointId}" playOrder="${playOrder.get(src)}"><navLabel><text>${escapeXml(label)}</text></navLabel><content src="${src}"/>${children}</navPoint>`;
  const ncxPoints = [
    navPoint("About this book", "title.xhtml"),
    ...groups.flatMap((g) =>
      g.section
        ? [navPoint(g.section, g.lessons[0].file, g.lessons.map((x) => navPoint(x.title, x.file)).join("\n"))]
        : g.lessons.map((x) => navPoint(x.title, x.file)),
    ),
  ].join("\n");
  const ncx =
    `<?xml version="1.0" encoding="UTF-8"?>\n<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1" xml:lang="${escapeXml(lang)}">\n` +
    `<head>\n<meta name="dtb:uid" content="${escapeXml(course.identifier)}"/>\n<meta name="dtb:depth" content="2"/>\n` +
    `<meta name="dtb:totalPageCount" content="0"/>\n<meta name="dtb:maxPageNumber" content="0"/>\n</head>\n` +
    `<docTitle><text>${escapeXml(course.title)}</text></docTitle>\n<navMap>\n${ncxPoints}\n</navMap>\n</ncx>\n`;

  const manifestLessons = lessons
    .map((_, i) => `<item id="l${i + 1}" href="text/${lessonFile(i)}" media-type="application/xhtml+xml"/>`)
    .join("\n");
  const spineLessons = lessons.map((_, i) => `<itemref idref="l${i + 1}"/>`).join("\n");
  const opf =
    `<?xml version="1.0" encoding="UTF-8"?>\n<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid" xml:lang="${escapeXml(lang)}">\n` +
    `<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">\n` +
    `<dc:identifier id="bookid">${escapeXml(course.identifier)}</dc:identifier>\n` +
    `<dc:title>${escapeXml(course.title)}</dc:title>\n<dc:language>${escapeXml(lang)}</dc:language>\n` +
    `<dc:creator>${escapeXml(author)}</dc:creator>\n<dc:publisher>WitUS</dc:publisher>\n` +
    (course.description?.trim() ? `<dc:description>${escapeXml(course.description.trim())}</dc:description>\n` : "") +
    `<meta property="dcterms:modified">${epubDate(modified)}</meta>\n</metadata>\n<manifest>\n` +
    `<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>\n` +
    `<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>\n` +
    `<item id="css" href="style.css" media-type="text/css"/>\n` +
    `<item id="titlepage" href="title.xhtml" media-type="application/xhtml+xml"/>\n${manifestLessons}\n</manifest>\n` +
    `<spine toc="ncx">\n<itemref idref="titlepage"/>\n<itemref idref="nav"/>\n${spineLessons}\n</spine>\n</package>\n`;

  const container =
    `<?xml version="1.0" encoding="UTF-8"?>\n<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">\n` +
    `<rootfiles>\n<rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>\n</rootfiles>\n</container>\n`;

  // Key order is zip entry order: mimetype MUST come first, stored.
  const mtime = modified;
  const files: Zippable = {
    mimetype: [strToU8("application/epub+zip"), { level: 0, mtime }],
    "META-INF/container.xml": [strToU8(container), { mtime }],
    "OEBPS/content.opf": [strToU8(opf), { mtime }],
    "OEBPS/nav.xhtml": [strToU8(nav), { mtime }],
    "OEBPS/toc.ncx": [strToU8(ncx), { mtime }],
    "OEBPS/style.css": [strToU8(CSS), { mtime }],
    "OEBPS/title.xhtml": [strToU8(titlePage), { mtime }],
  };
  chapters.forEach((xhtml, i) => {
    files[`OEBPS/text/${lessonFile(i)}`] = [strToU8(xhtml), { mtime }];
  });
  return zipSync(files, { level: 9 });
}
