import { SPEEDWAY_COURSE } from "../data/speedway-course.ts";
const l = SPEEDWAY_COURSE.lessons.find(x => x.slug.startsWith("e1-"));
const idx = l.body.indexOf("## Sources");
const prose = idx >= 0 ? l.body.slice(0, idx) : l.body;
// show lines containing em-dash with context
const lines = prose.split("\n");
lines.forEach((ln,i)=>{ if(ln.includes("—")) console.log(`[${i}] ${ln}`); });
