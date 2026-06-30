import { SPEEDWAY_COURSE } from "../data/speedway-course.ts";
const aiTells = [
  /\bbut here'?s (what|the)\b/gi,
  /\bhere'?s (what|the|why)\b/gi,
  /\blet me tell you\b/gi,
  /\bbelieve it or not\b/gi,
  /\bthink about it\b/gi,
  /\bbuckle up\b/gi,
  /\bblew everyone'?s mind/gi,
  /\bmind-?blowing\b/gi,
  /\bgame-?changing\b/gi,
  /\bin this episode\b/gi,
  /\bwelcome (back )?to\b/gi,
  /\btoday we'?re\b/gi,
  /\bstay tuned\b/gi,
  /\bdon'?t go anywhere\b/gi,
  /\bjoin (me|us)\b/gi,
  /\bin our next episode\b/gi,
  /\bnext (time|episode)\b/gi,
  /\bhost\b/gi,
  /\bnarrator\b/gi,
  /\[[^\]]+\]/g,
  /\*\[[^\]]+\]\*/g,
  /\bSEGMENT\b/g,
  /\bCOLD OPEN\b/gi,
  /\bcue\b/gi,
  /\bsound:/gi,
  /\bmusic:/gi,
  /\btransition:/gi,
  /\bvoiceover\b/gi,
  /\bV\.?O\.?\b/g,
];
for (const l of SPEEDWAY_COURSE.lessons) {
  if (l.quiz) continue;
  const idx = l.body.indexOf("## Sources");
  const prose = idx >= 0 ? l.body.slice(0, idx) : l.body;
  const lines = prose.split("\n");
  lines.forEach((ln, i) => {
    for (const re of aiTells) {
      re.lastIndex = 0;
      if (re.test(ln)) { console.log(`${l.slug.slice(0,18)} [${i}] ${re.source.slice(0,30)} :: ${ln.trim().slice(0,120)}`); break; }
    }
  });
}
