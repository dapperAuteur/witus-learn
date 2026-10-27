// courseToPdf: one course in, one PDF out (bytes), for reading on an e-reader or printing.
//
// Pure JavaScript, no browser: the repo's other PDF path (scripts/gen-pdfs.ts + src/lib/pdf-branding.ts)
// drives headless Chrome at DEV time and says so in its header, which is why it must never run in a
// serverless function. This module renders with @react-pdf/renderer instead (a React reconciler over
// pdfkit), so the admin route (src/app/api/admin/courses/[id]/pdf) and the CLI script
// (scripts/export-course-pdf.ts) call the same function, and neither needs a browser.
//
// The input is the EPUB export's input (src/lib/epub/course-to-epub.ts) plus the notices the course
// already carries on the site, so one loader feeds both buttons.
//
// What the "reader" variant contains:
//   * a title page (course title, description, the WitUS mark, the export date, the course's notices),
//   * a contents page: modules and lessons with page numbers (the document is laid out twice: the
//     first pass records where each lesson lands, the second prints the numbers),
//   * one section per lesson, each starting on a new page, with the module as the running header and
//     "Learn.WitUS · course · page N of M" as the running footer. Lesson markdown goes through
//     markdown-pdf.tsx; the app's `:::reveal`, `:::figure` and `:::timeline` directives render here
//     (app-only `:::tool` and `:::field-log` callouts are dropped), and every lesson is a PDF bookmark.
//   * quizzes list every question in the bank with lettered options. As in the EPUB, the answers are
//     NOT beside the questions: each lesson ends with an "Answers" page holding the quiz answers (letter,
//     option, explanation, the lesson to review), the `:::reveal` check answers and the recall-card
//     answers, so a reader can test themselves before looking.
//   * images are never fetched; they become their alt text.
//
// A later variant (a reviewer packet, a one-lesson handout) is a different composition over the same
// lesson renderer: add it here with its own `variant` value; markdown-pdf.tsx does not change.

import { Circle, Document, Page, StyleSheet, Svg, Text, View, renderToBuffer } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import type { EpubCourseInput, EpubLessonInput } from "@/lib/epub/course-to-epub";
import type { QuizContent } from "@/lib/quiz";
import { REVEAL_RE } from "@/lib/reveals";
import { FIGURE_RE } from "@/lib/figures";
import { TIMELINE_CLOSE, TIMELINE_OPEN_RE, parseTimelineEvents } from "@/lib/timeline";
import { BODY_SIZE, PDF_COLOR, PDF_FONT, markdownToPdf, md, pdfText } from "./markdown-pdf";

export type PdfLessonInput = EpubLessonInput;

export interface PdfCourseInput extends Omit<EpubCourseInput, "identifier"> {
  /** Kept for symmetry with the EPUB input; a PDF carries no book id. */
  identifier?: string;
  /**
   * Notices that already apply to this course on the site, verbatim: the site-wide educational
   * disclaimer every course page shows (src/lib/disclaimer.ts) and any certification notice registered
   * for the course (src/lib/cert-disclaimer.ts). Printed on the title page. Nothing is invented here;
   * pass what the site shows, or nothing.
   */
  disclaimers?: string[];
  /** The export date on the title page. Defaults to now; pass a fixed date for reproducible output. */
  generatedOn?: Date;
}

export type PdfVariant = "reader";

export interface CourseToPdfOptions {
  variant: PdfVariant;
  /** Lay the document out twice so the contents page carries page numbers. Default true. */
  tocPageNumbers?: boolean;
}

const APP_NAME = "Learn.WitUS";
const APP_URL = "learn.witus.online";

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

// Letter page, generous margins; the running header and footer sit inside the top and bottom margins.
// Every Page opts into react-pdf's experimentalPagination (4.9): the content is measured once and
// packed into pages, which on FAA Part 107 (118 lessons) cut the two-pass render from 29 s to 20 s and
// the page count from 537 to 488 because the older engine broke a page early before any `wrap={false}`
// block it thought might not fit. Checked on that course: contents numbers, bookmarks, every Answers
// block on its own page, no question split across pages. If a react-pdf upgrade misbehaves, remove the
// prop from the three Page elements below and the output is the older, looser layout.
const MARGIN_X = 58;
const s = StyleSheet.create({
  page: {
    paddingTop: 66,
    paddingBottom: 62,
    paddingHorizontal: MARGIN_X,
    fontFamily: PDF_FONT.body,
    fontSize: BODY_SIZE,
    color: PDF_COLOR.ink,
  },
  header: {
    position: "absolute",
    top: 28,
    left: MARGIN_X,
    right: MARGIN_X,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: PDF_COLOR.rule,
    paddingBottom: 3,
    fontFamily: PDF_FONT.sans,
    fontSize: 8,
    color: PDF_COLOR.muted,
  },
  headerLeft: { maxWidth: "55%" },
  headerRight: { maxWidth: "42%", textAlign: "right" },
  footer: {
    position: "absolute",
    bottom: 28,
    left: MARGIN_X,
    right: MARGIN_X,
    borderTopWidth: 0.5,
    borderTopColor: PDF_COLOR.rule,
    paddingTop: 3,
    fontFamily: PDF_FONT.sans,
    fontSize: 8,
    color: PDF_COLOR.muted,
  },
  wordmarkRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  wordmark: { fontFamily: PDF_FONT.heading, fontSize: 22, color: PDF_COLOR.slate, letterSpacing: -0.5 },
  appLine: { fontFamily: PDF_FONT.sans, fontSize: 9, color: PDF_COLOR.muted },
  courseTitle: { fontFamily: PDF_FONT.heading, fontSize: 26, lineHeight: 1.15, color: PDF_COLOR.slate, marginTop: 110, marginBottom: 10 },
  byline: { fontFamily: PDF_FONT.sans, fontSize: 10, color: PDF_COLOR.muted, marginBottom: 14 },
  meta: { fontFamily: PDF_FONT.sans, fontSize: 9, color: PDF_COLOR.muted, marginTop: 14 },
  notices: { marginTop: 22, borderTopWidth: 0.5, borderTopColor: PDF_COLOR.rule, paddingTop: 8 },
  notice: { fontFamily: PDF_FONT.sans, fontSize: 8.5, lineHeight: 1.35, color: PDF_COLOR.muted, marginBottom: 5 },
  contentsGroup: { fontFamily: PDF_FONT.heading, fontSize: BODY_SIZE, marginTop: 10, marginBottom: 3, color: PDF_COLOR.slate },
  contentsRow: { flexDirection: "row", marginBottom: 2 },
  contentsTitle: { flex: 1, fontFamily: PDF_FONT.body, fontSize: BODY_SIZE, lineHeight: 1.35, paddingLeft: 12 },
  contentsPage: { width: 36, textAlign: "right", fontFamily: PDF_FONT.sans, fontSize: BODY_SIZE - 1, lineHeight: 1.5 },
  kicker: { fontFamily: PDF_FONT.sans, fontSize: 9, color: PDF_COLOR.muted, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 2 },
  lessonTitle: { fontFamily: PDF_FONT.heading, fontSize: 19, lineHeight: 1.2, color: PDF_COLOR.slate, marginBottom: 8 },
  pageMarker: { height: 0, fontSize: 1 },
  note: { fontFamily: PDF_FONT.bodyItalic, fontSize: BODY_SIZE, lineHeight: 1.4, color: PDF_COLOR.muted, marginBottom: 6 },
  box: { borderWidth: 0.5, borderColor: PDF_COLOR.muted, padding: 7, marginTop: 6, marginBottom: 8 },
  boxKicker: { fontFamily: PDF_FONT.sans, fontSize: 8.5, color: PDF_COLOR.muted, marginBottom: 2 },
  figureCredit: { fontFamily: PDF_FONT.bodyItalic, fontSize: BODY_SIZE - 1.5, color: PDF_COLOR.muted, marginTop: 2 },
  question: { marginTop: 8, marginBottom: 2 },
  option: { fontFamily: PDF_FONT.body, fontSize: BODY_SIZE, lineHeight: 1.35, marginLeft: 18, marginBottom: 1 },
  answersHeading: { fontFamily: PDF_FONT.heading, fontSize: 15, color: PDF_COLOR.slate, marginBottom: 6 },
  answer: { marginBottom: 7 },
  answerLabel: { fontFamily: PDF_FONT.heading, fontSize: BODY_SIZE - 1, color: PDF_COLOR.slate, marginBottom: 1 },
  review: { fontFamily: PDF_FONT.sans, fontSize: BODY_SIZE - 2, color: PDF_COLOR.muted, marginTop: 1 },
});

const letter = (i: number) => String.fromCharCode(65 + i);

/** Plain text that may hold blank-line paragraph breaks (quiz explanations), as paragraphs. */
function paragraphs(text: string, keyBase: string, style = md.p): ReactNode[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p, i) => (
      <Text key={`${keyBase}-${i}`} style={[style, md.tight]}>
        {pdfText(p)}
      </Text>
    ));
}

/** The body's own opening H1, if it has one: most authored bodies do, and it is the chapter title. */
function splitLeadingH1(body: string): { heading: string | null; rest: string } {
  const m = body.match(/^\s*#\s+(.+?)\s*#*\s*(?:\r?\n|$)/);
  if (!m) return { heading: null, rest: body };
  return { heading: m[1].trim(), rest: body.slice(m[0].length) };
}

interface Answer {
  label: string;
  body: ReactNode;
}

/** The lesson body with the app's directives, plus the answers its checks carry. */
function renderBody(body: string, lessonIndex: number, answers: Answer[]): ReactNode[] {
  const out: ReactNode[] = [];
  let buf: string[] = [];
  let chunk = 0;
  let check = 0;
  const key = (tag: string) => `l${lessonIndex}-${tag}-${chunk++}`;
  const flush = () => {
    if (buf.join("").trim()) out.push(...markdownToPdf(buf.join("\n"), key("md")));
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
        out.push(
          <View key={key("timeline")} style={s.box}>
            {tl[1] ? <Text style={s.boxKicker}>{pdfText(tl[1])}</Text> : null}
            {events.map((e, j) => (
              <View key={j} style={md.listItem}>
                <Text style={md.marker}>{"•"}</Text>
                <Text style={[md.p, md.tight, md.itemBody]}>
                  <Text style={md.strong}>{pdfText(e.year)}</Text>
                  {e.lane ? ` (${pdfText(e.lane)})` : ""}: {pdfText(e.text)}
                </Text>
              </View>
            ))}
          </View>,
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
        <View key={key("figure")} style={s.box} wrap={false}>
          <Text style={md.imgAlt}>{`[Figure: ${pdfText(fig[2])}]`}</Text>
          <Text style={[md.p, md.tight]}>{pdfText(fig[3])}</Text>
          <Text style={s.figureCredit}>{pdfText(fig[4])}</Text>
        </View>,
      );
    } else if (rv) {
      flush();
      check++;
      const label = `Check yourself ${check}`;
      out.push(
        <View key={key("check")} style={s.box} wrap={false}>
          <Text style={[md.p, md.tight]}>
            <Text style={md.strong}>{`${label}.`}</Text>
            {` ${pdfText(rv[1])}`}
          </Text>
          <Text style={s.review}>Answer at the end of this lesson.</Text>
        </View>,
      );
      answers.push({ label, body: paragraphs(rv[2], key("check-answer")) });
    } else if (TOOL_OR_FIELD_LOG_RE.test(line)) {
      flush();
    } else {
      buf.push(line);
    }
  }
  flush();
  return out;
}

function renderQuiz(
  quiz: QuizContent,
  lessonIndex: number,
  answers: Answer[],
  titleBySlug: Map<string, string>,
): ReactNode {
  const qs = quiz.questions ?? [];
  const intro =
    `${qs.length} question${qs.length === 1 ? "" : "s"}` +
    (quiz.passingScore != null ? `. Passing score in the online course: ${quiz.passingScore}%` : "") +
    ". Answers are at the end of this lesson.";
  const items = qs.map((q, i) => {
    const n = i + 1;
    const correct = q.options[q.correctIndex];
    const source = q.sourceLessonSlug ? titleBySlug.get(q.sourceLessonSlug) : undefined;
    const k = `l${lessonIndex}-q${n}`;
    answers.push({
      label: `Question ${n}`,
      body: [
        <Text key={`${k}-a`} style={[md.p, md.tight]}>
          <Text style={md.strong}>{`${letter(q.correctIndex)}.`}</Text>
          {` ${pdfText(correct ?? "")}`}
        </Text>,
        ...(q.explanation ? paragraphs(q.explanation, `${k}-x`) : []),
        source ? (
          <Text key={`${k}-r`} style={s.review}>
            {`Review: ${pdfText(source)}`}
          </Text>
        ) : null,
      ],
    });
    return (
      <View key={k} style={s.question} wrap={false}>
        <Text style={[md.p, md.tight]}>
          <Text style={md.strong}>{`${n}.`}</Text>
          {` ${pdfText(q.prompt)}`}
        </Text>
        {q.imageUrl ? (
          <Text style={[md.imgAlt, s.option]}>{`[Figure: ${pdfText(q.imageAlt || "see the online course")}]`}</Text>
        ) : null}
        {q.options.map((o, j) => (
          <Text key={j} style={s.option}>
            {`${letter(j)}. ${pdfText(o)}`}
          </Text>
        ))}
      </View>
    );
  });
  return (
    <View key={`l${lessonIndex}-quiz`}>
      <Text style={s.note}>{intro}</Text>
      {items}
    </View>
  );
}

function renderRecall(cards: { prompt: string; answer: string }[], lessonIndex: number, answers: Answer[]): ReactNode {
  return (
    <View key={`l${lessonIndex}-recall`}>
      <Text style={md.h2} minPresenceAhead={40}>
        Recall
      </Text>
      <Text style={s.note}>Answer from memory first, then check the answer at the end of this lesson.</Text>
      {cards.map((c, i) => {
        const n = i + 1;
        answers.push({ label: `Recall ${n}`, body: paragraphs(c.answer, `l${lessonIndex}-r${n}`) });
        return (
          <View key={n} style={md.listItem}>
            <Text style={md.marker}>{`${n}.`}</Text>
            <Text style={[md.p, md.tight, md.itemBody]}>{pdfText(c.prompt)}</Text>
          </View>
        );
      })}
    </View>
  );
}

function renderAnswers(answers: Answer[], lessonIndex: number): ReactNode {
  if (answers.length === 0) return null;
  return (
    <View key={`l${lessonIndex}-answers`} break>
      <Text style={s.answersHeading}>Answers</Text>
      {answers.map((a, i) => (
        <View key={i} style={s.answer} wrap={false}>
          <Text style={s.answerLabel}>{a.label}</Text>
          {a.body}
        </View>
      ))}
    </View>
  );
}

function Header({ left, right }: { left: string; right: string }) {
  return (
    <View style={s.header} fixed>
      <Text style={s.headerLeft}>{pdfText(left)}</Text>
      <Text style={s.headerRight}>{pdfText(right)}</Text>
    </View>
  );
}

function Footer({ course }: { course: string }) {
  const label = `${APP_NAME} · ${pdfText(course)} · `;
  return (
    <Text style={s.footer} fixed render={({ pageNumber, totalPages }) => `${label}page ${pageNumber} of ${totalPages}`} />
  );
}

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

interface TocGroup {
  section: string | null;
  lessons: { index: number; title: string }[];
}

/** Table of contents groups: consecutive lessons sharing a section. */
function tocGroups(lessons: PdfLessonInput[]): TocGroup[] {
  const groups: TocGroup[] = [];
  lessons.forEach((l, index) => {
    const section = l.section?.trim() || null;
    const last = groups[groups.length - 1];
    const entry = { index, title: l.title };
    if (section && last && last.section === section) last.lessons.push(entry);
    else groups.push({ section, lessons: [entry] });
  });
  return groups;
}

function TitlePage({ course, generatedOn }: { course: PdfCourseInput; generatedOn: Date }) {
  const author = course.author?.trim() || "WitUS";
  const notices = (course.disclaimers ?? []).map((d) => d.trim()).filter(Boolean);
  return (
    <Page size="LETTER" style={s.page} experimentalPagination bookmark="About this book">
      <View style={s.wordmarkRow}>
        <Text style={s.wordmark}>WitUS</Text>
        <Svg width={8} height={8} style={{ marginLeft: 3, marginTop: 8 }}>
          <Circle cx={4} cy={4} r={3} fill={PDF_COLOR.muted} />
        </Svg>
      </View>
      <Text style={s.appLine}>
        {APP_NAME}.Online · {APP_URL}
      </Text>
      <Text style={s.courseTitle}>{pdfText(course.title)}</Text>
      <Text style={s.byline}>{pdfText(author)}</Text>
      {course.description?.trim() ? markdownToPdf(course.description, "desc") : null}
      <Text style={md.h3} minPresenceAhead={40}>
        How to read this book
      </Text>
      <Text style={md.p}>
        Each lesson starts on a new page. Quiz questions, check-yourself questions and recall cards appear in the
        lesson; their answers are collected in an Answers section at the end of the same lesson, on a page of its
        own, so you can test yourself before you look. The contents page and the bookmarks list every lesson.
      </Text>
      <Text style={s.meta}>
        {`Exported ${isoDate(generatedOn)} from ${APP_URL}. Images in the online course are described here by their alt text; links show their address.`}
      </Text>
      {notices.length > 0 ? (
        <View style={s.notices}>
          {notices.map((n, i) => (
            <Text key={i} style={s.notice}>
              {pdfText(n)}
            </Text>
          ))}
        </View>
      ) : null}
    </Page>
  );
}

function ContentsPage({ course, groups, pages }: { course: PdfCourseInput; groups: TocGroup[]; pages: number[] }) {
  return (
    <Page size="LETTER" style={s.page} experimentalPagination bookmark="Contents">
      <Header left={course.title} right="Contents" />
      <Footer course={course.title} />
      <Text style={s.lessonTitle}>Contents</Text>
      {groups.map((g, gi) => (
        <View key={gi}>
          {g.section ? (
            <Text style={s.contentsGroup} minPresenceAhead={30}>
              {pdfText(g.section)}
            </Text>
          ) : null}
          {g.lessons.map((l) => (
            <View key={l.index} style={s.contentsRow} wrap={false}>
              <Text style={s.contentsTitle}>{pdfText(l.title)}</Text>
              <Text style={s.contentsPage}>{pages[l.index] != null ? String(pages[l.index]) : ""}</Text>
            </View>
          ))}
        </View>
      ))}
    </Page>
  );
}

function LessonPage({
  course,
  lesson,
  index,
  titleBySlug,
  onPage,
}: {
  course: PdfCourseInput;
  lesson: PdfLessonInput;
  index: number;
  titleBySlug: Map<string, string>;
  onPage: (index: number, page: number) => void;
}) {
  const answers: Answer[] = [];
  const { heading, rest } = splitLeadingH1(lesson.body ?? "");
  const title = heading ?? lesson.title;
  const type = lesson.lessonType ?? (lesson.quiz ? "quiz" : "text");
  const section = lesson.section?.trim() || null;
  const body = rest.trim() ? renderBody(rest, index + 1, answers) : [];
  const quiz = lesson.quiz?.questions?.length ? renderQuiz(lesson.quiz, index + 1, answers, titleBySlug) : null;
  const recall = lesson.recall?.length ? renderRecall(lesson.recall, index + 1, answers) : null;
  return (
    <Page size="LETTER" style={s.page} experimentalPagination bookmark={pdfText(lesson.title)}>
      <Header left={section ?? course.title} right={lesson.title} />
      <Footer course={course.title} />
      {section ? <Text style={s.kicker}>{pdfText(section)}</Text> : null}
      <Text style={s.lessonTitle}>{pdfText(title)}</Text>
      {/* Page marker: the render callback fires as the layout settles, and the last page number it
          sees is where this lesson starts, which the contents page prints on the second pass. It is
          a separate zero-height element because react-pdf 4.9 draws nothing for a render-prop Text
          that carries a lineHeight, which the title style does. */}
      <Text
        style={s.pageMarker}
        render={({ pageNumber }) => {
          onPage(index, pageNumber);
          return "";
        }}
      />
      {MEDIA_NOTE[type] ? <Text style={s.note}>{`In the online course, this lesson includes ${MEDIA_NOTE[type]}.`}</Text> : null}
      {body}
      {quiz}
      {recall}
      {renderAnswers(answers, index + 1)}
    </Page>
  );
}

function ReaderDocument({
  course,
  generatedOn,
  pages,
  lessonPages,
}: {
  course: PdfCourseInput;
  generatedOn: Date;
  pages: number[];
  lessonPages: ReactNode[];
}) {
  return (
    <Document
      title={pdfText(course.title)}
      author={course.author?.trim() || "WitUS"}
      subject={`A ${APP_NAME} course`}
      creator={`${APP_NAME}.Online`}
      producer={`${APP_NAME}.Online`}
      language={course.language?.trim() || "en"}
    >
      <TitlePage course={course} generatedOn={generatedOn} />
      {course.lessons.length > 0 ? <ContentsPage course={course} groups={tocGroups(course.lessons)} pages={pages} /> : null}
      {lessonPages}
    </Document>
  );
}

/** Build the PDF. Returns the file bytes. */
export async function courseToPdf(course: PdfCourseInput, opts: CourseToPdfOptions): Promise<Uint8Array> {
  if (opts.variant !== "reader") throw new Error(`Unknown PDF variant: ${String(opts.variant)}`);
  const generatedOn = course.generatedOn ?? new Date();
  const titleBySlug = new Map<string, string>();
  for (const l of course.lessons) if (l.slug) titleBySlug.set(l.slug, l.title);

  const pages: number[] = [];
  const onPage = (index: number, page: number) => {
    pages[index] = page;
  };
  // Built once and laid out twice: the elements are plain descriptions, so both passes share them.
  const lessonPages = course.lessons.map((lesson, index) => (
    <LessonPage key={index} course={course} lesson={lesson} index={index} titleBySlug={titleBySlug} onPage={onPage} />
  ));

  const withNumbers = opts.tocPageNumbers ?? true;
  if (withNumbers) {
    // Pass one: same contents rows with blank numbers (the number column has a fixed width, so the
    // layout does not shift when the numbers arrive), recording where every lesson starts.
    await renderToBuffer(<ReaderDocument course={course} generatedOn={generatedOn} pages={[]} lessonPages={lessonPages} />);
  }
  const buf = await renderToBuffer(
    <ReaderDocument course={course} generatedOn={generatedOn} pages={withNumbers ? pages : []} lessonPages={lessonPages} />,
  );
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
}
