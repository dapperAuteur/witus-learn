// Minimal CSV building, shared by the gradebook export routes. RFC-4180 quoting only where a
// cell needs it (comma, quote, or newline); everything else passes through untouched so the
// file stays diff-friendly. Pure and unit-tested (tests/csv.test.ts).

export function csvCell(value: string | number): string {
  const s = String(value);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** One CSV line from a row of cells. */
export function csvLine(cells: (string | number)[]): string {
  return cells.map(csvCell).join(",");
}
