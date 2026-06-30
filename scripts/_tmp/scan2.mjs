import { SPEEDWAY_COURSE } from "../data/speedway-course.ts";
const pats = [
  /I'?m Anthony McDonald/i,
  /I am your host/i,
  /This is \*?Speedway/i,
  /Thanks for listening/i,
  /Thank you for listening/i,
  /New episodes drop/i,
  /Next (week|episode)/i,
  /today'?s episode is/i,
  /^>\s*This script uses/i,
  /documented research with inline APA/i,
  /Where illustrative scenes/i,
];
for (const l of SPEEDWAY_COURSE.lessons) {
  if (l.quiz) continue;
  const idx = l.body.indexOf("## Sources");
  const prose = idx >= 0 ? l.body.slice(0, idx) : l.body;
  prose.split("\n").forEach((ln) => {
    for (const re of pats) if (re.test(ln)) { console.log(`${l.slug.slice(0,16)} :: ${ln.trim().slice(0,130)}`); break; }
  });
}
