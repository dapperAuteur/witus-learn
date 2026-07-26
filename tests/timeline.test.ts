import { describe, expect, it } from "vitest";
import { parseTimelineEvents, timelineLanes, TIMELINE_OPEN_RE, TIMELINE_CLOSE } from "@/lib/timeline";

describe("timeline block parser", () => {
  it("matches the opening fence and captures an optional title", () => {
    expect("::: timeline".match(TIMELINE_OPEN_RE)).toBeNull(); // space after ::: is not the fence
    expect(":::timeline".match(TIMELINE_OPEN_RE)![1]).toBeUndefined();
    expect(":::timeline The clearance calendar".match(TIMELINE_OPEN_RE)![1]).toBe("The clearance calendar");
    expect(TIMELINE_CLOSE).toBe(":::");
  });

  it("parses year | lane | text and year | text", () => {
    const events = parseTimelineEvents([
      "1936 | built | The first Green Book edition appears",
      "1949 | done | A new segregation statute passes",
      "1964 | The Civil Rights Act ends legal segregation",
    ]);
    expect(events).toHaveLength(3);
    expect(events[0]).toEqual({ year: "1936", lane: "built", text: "The first Green Book edition appears" });
    expect(events[2]).toEqual({ year: "1964", text: "The Civil Rights Act ends legal segregation" });
    expect(events[2].lane).toBeUndefined();
  });

  it("preserves a pipe inside the text (only the first two splits are structural)", () => {
    const [e] = parseTimelineEvents(["1970 | law | Berman v. Parker | applied locally"]);
    expect(e.text).toBe("Berman v. Parker | applied locally");
  });

  it("skips blank and malformed lines instead of breaking", () => {
    const events = parseTimelineEvents(["", "1936 | built | ok", "no pipe here", "  ", "| | ", "1980 | also ok"]);
    expect(events.map((e) => e.year)).toEqual(["1936", "1980"]);
  });

  it("returns distinct lanes in appearance order", () => {
    const events = parseTimelineEvents(["1 | built | a", "2 | done | b", "3 | built | c", "4 | law | d"]);
    expect(timelineLanes(events)).toEqual(["built", "done", "law"]);
  });

  it("has no lanes when no event carries one", () => {
    expect(timelineLanes(parseTimelineEvents(["1936 | a", "1964 | b"]))).toEqual([]);
  });
});
