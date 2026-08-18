import { describe, expect, it } from "vitest";
import { csvCell, csvLine } from "@/lib/csv";

// The CSV helpers behind the gradebook exports (plans/50). Exports are opened in spreadsheet
// apps by teachers, so quoting must be exactly RFC-4180: a mis-escaped student name shifts every
// column after it.

describe("csvCell", () => {
  it("passes plain strings and numbers through untouched", () => {
    expect(csvCell("Ada Lovelace")).toBe("Ada Lovelace");
    expect(csvCell(42)).toBe("42");
    expect(csvCell("")).toBe("");
  });

  it("quotes a cell containing a comma", () => {
    expect(csvCell("Lovelace, Ada")).toBe('"Lovelace, Ada"');
  });

  it("quotes and doubles embedded quotes", () => {
    expect(csvCell('the "best" course')).toBe('"the ""best"" course"');
  });

  it("quotes a cell containing a newline", () => {
    expect(csvCell("line one\nline two")).toBe('"line one\nline two"');
  });
});

describe("csvLine", () => {
  it("joins cells with commas, escaping only where needed", () => {
    expect(csvLine(["Ada", "a@example.com", 3, "Math, Year 1"])).toBe(
      'Ada,a@example.com,3,"Math, Year 1"',
    );
  });
});
