import { Fragment } from "react";
import { Markdown } from "./markdown";
import { EcosystemCallout } from "./ecosystem-callout";

// Renders lesson body markdown, with two course-aware behaviours layered on:
//  1. external links are counted (linkContext → /api/link/click),
//  2. a line `:::tool <slug> | optional CTA` becomes an EcosystemCallout (cross-promo idea #2).
// Everything else is ordinary markdown. Splitting on the directive keeps the Markdown renderer
// pure (no custom remark plugin / new dependency).
const TOOL_RE = /^:::tool\s+([\w-]+)(?:\s*\|\s*(.+?))?\s*$/;

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
    const m = line.match(TOOL_RE);
    if (m) {
      flush(`md-${i}`);
      blocks.push(
        <EcosystemCallout key={`tool-${i}`} slug={m[1]} cta={m[2]} courseId={courseId} lessonId={lessonId} />,
      );
    } else {
      buf.push(line);
    }
  });
  flush("md-final");

  return <Fragment>{blocks}</Fragment>;
}
