import { SPEEDWAY_COURSE } from "../data/speedway-course.ts";
for (const l of SPEEDWAY_COURSE.lessons) {
  if (l.quiz) continue;
  const idx = l.body.indexOf("## Sources");
  const prose = idx >= 0 ? l.body.slice(0, idx) : l.body;
  const sources = idx >= 0 ? l.body.slice(idx) : "";
  const emProse = (prose.match(/—/g) || []).length;
  const enProse = (prose.match(/–/g) || []).length;
  const emSrc = (sources.match(/—/g) || []).length;
  console.log(`${l.slug.padEnd(42)} em(prose)=${emProse} en(prose)=${enProse} em(sources)=${emSrc}`);
}
