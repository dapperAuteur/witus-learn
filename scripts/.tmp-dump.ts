import { readFileSync } from "node:fs";
import ts from "typescript";
const file = process.argv[2];
const text = readFileSync(file, "utf-8");
const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
const pm = (o: ts.ObjectLiteralExpression) => { const m = new Map<string, ts.Expression>();
  for (const p of o.properties) if (ts.isPropertyAssignment(p) && (ts.isIdentifier(p.name)||ts.isStringLiteral(p.name))) m.set(p.name.text, p.initializer); return m; };
const str = (e?: ts.Expression) => e && (ts.isStringLiteral(e)||ts.isNoSubstitutionTemplateLiteral(e)) ? e.text : null;
const visit = (n: ts.Node) => {
  if (ts.isObjectLiteralExpression(n)) {
    const p = pm(n); const qs = p.get("questions");
    if (qs && ts.isArrayLiteralExpression(qs)) {
      for (const el of qs.elements) {
        if (!ts.isObjectLiteralExpression(el)) continue;
        const q = pm(el); const opts = q.get("options"); const ci = q.get("correctIndex");
        if (!opts || !ts.isArrayLiteralExpression(opts) || !ci || !ts.isNumericLiteral(ci)) continue;
        const lens = opts.elements.map(e => (str(e as ts.Expression) ?? "").trim().length);
        const c = Number(ci.text); const max = Math.max(...lens); const margin = Math.max(8, max*0.1);
        const vis = lens.filter(l => l >= max-margin).length;
        const val = lens[c] >= max-margin ? 1/vis : 0;
        console.log(`\n[${val===1?"TELL":val.toFixed(2)}] ${str(q.get("prompt"))}`);
        opts.elements.forEach((e,i) => console.log(`  ${i===c?"*":" "}[${String(lens[i]).padStart(3)}] ${str(e as ts.Expression)}`));
      }
    }
  }
  ts.forEachChild(n, visit);
};
ts.forEachChild(sf, visit);
