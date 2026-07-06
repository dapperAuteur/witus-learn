import { Fragment } from "react";
import { Markdown } from "./markdown";
import { EcosystemCallout } from "./ecosystem-callout";
import { FieldLogCallout } from "./field-log/field-log-callout";
import { Reveal } from "./reveal";

// Renders lesson body markdown, with course-aware behaviours layered on:
//  1. external links are counted (linkContext → /api/link/click),
//  2. `:::tool <slug> | optional CTA` becomes an EcosystemCallout (cross-promo idea #2),
//  3. `:::field-log <templateKey> | optional CTA` becomes a "Start your project" deep-link
//     (the capstone → Field Log hook),
//  4. `:::reveal <question> ||| <answer>` becomes a click-to-reveal self-check (Check-yourself).
// Everything else is ordinary markdown. Splitting on the directives keeps the Markdown renderer
// pure (no custom remark plugin / new dependency).
const TOOL_RE = /^:::tool\s+([\w-]+)(?:\s*\|\s*(.+?))?\s*$/;
const FIELD_LOG_RE = /^:::field-log\s+([\w-]+)(?:\s*\|\s*(.+?))?\s*$/;
const REVEAL_RE = /^:::reveal\s+(.+?)\s*\|\|\|\s*(.+?)\s*$/;

export function LessonBody({
  text,
  courseId,
  lessonId,
}: {
  text: string;
  courseId?: string | null;
  lessonId?: string | null;
}) {
  const ctx = { courseId, lessonId };
  const lines = text.split("\n");
  const blocks: React.ReactNode[] = [];
  let buf: string[] = [];

  const flush = (key: string) => {
    if (buf.join("").trim().length > 0) {
      blocks.push(
        <Markdown key={key} linkContext={ctx}>
          {buf.join("\n")}
        </Markdown>,
      );
    }
    buf = [];
  };

  lines.forEach((line, i) => {
    const tool = line.match(TOOL_RE);
    const fl = line.match(FIELD_LOG_RE);
    const rv = line.match(REVEAL_RE);
    if (tool) {
      flush(`md-${i}`);
      blocks.push(
        <EcosystemCallout key={`tool-${i}`} slug={tool[1]} cta={tool[2]} courseId={courseId} lessonId={lessonId} />,
      );
    } else if (fl) {
      flush(`md-${i}`);
      blocks.push(<FieldLogCallout key={`fl-${i}`} templateKey={fl[1]} cta={fl[2]} />);
    } else if (rv) {
      flush(`md-${i}`);
      blocks.push(<Reveal key={`rv-${i}`} question={rv[1]} answer={rv[2]} />);
    } else {
      buf.push(line);
    }
  });
  flush("md-final");

  return <Fragment>{blocks}</Fragment>;
}
