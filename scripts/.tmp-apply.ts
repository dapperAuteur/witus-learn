import { readFileSync, writeFileSync } from "node:fs";
const [, , file, patchFile] = process.argv;
const patch: [string, string][] = JSON.parse(readFileSync(patchFile, "utf-8"));
let text = readFileSync(file, "utf-8"); let n = 0;
for (const [o, s] of patch) {
  const hits = text.split(o).length - 1;
  if (hits !== 1) { console.error(`ABORT: ${hits} matches for:\n  ${o.slice(0,90)}`); process.exit(1); }
  text = text.replace(o, s); n++;
}
writeFileSync(file, text);
console.log(`  applied ${n} to ${file}`);
