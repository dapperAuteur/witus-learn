import { SPEEDWAY_COURSE } from "../data/speedway-course.ts";
for (const slug of ["e1-","e5-","e13-"]) {
  const l = SPEEDWAY_COURSE.lessons.find(x => x.slug.startsWith(slug));
  const idx = l.body.indexOf("## Sources");
  const prose = idx >= 0 ? l.body.slice(0, idx) : l.body;
  const lines = prose.split("\n").filter(x=>x.trim());
  console.log("\n==== "+l.slug+" ==== TITLE: "+l.title);
  console.log("--- first 8 nonblank ---");
  lines.slice(0,8).forEach(x=>console.log("  "+x.slice(0,110)));
  console.log("--- last 6 nonblank ---");
  lines.slice(-6).forEach(x=>console.log("  "+x.slice(0,110)));
}
