import { readFileSync, writeFileSync } from "node:fs";
const [, , file, patchFile] = process.argv;
const patch: [string, string][] = JSON.parse(readFileSync(patchFile, "utf-8"));
let text = readFileSync(file, "utf-8");
let n = 0;
for (const [o, s] of patch) {
  // Prefer the exact option literal `"text",` — the same sentence often also appears in a lesson
  // body or a :::reveal, and only the literal is the quiz option.
  const candidates = [`"${o}",`, o];
  const hit = candidates.find((c) => text.split(c).length - 1 === 1);
  if (!hit) {
    const counts = candidates.map((c) => text.split(c).length - 1).join("/");
    console.error(`ABORT: matches ${counts} (need exactly 1) for:\n  ${o.slice(0, 90)}`);
    process.exit(1);
  }
  text = text.replace(hit, hit === o ? s : `"${s}",`);
  n++;
}
writeFileSync(file, text);
console.log(`  applied ${n} to ${file}`);
