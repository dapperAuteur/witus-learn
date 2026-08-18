import { describe, expect, it } from "vitest";
import { formatBytes } from "@/lib/format-bytes";
import { safeFilename } from "@/lib/safe-filename";

// Pure helpers behind the /admin/library PDF download: the file-size label the pages render and
// the Content-Disposition filename guard the download route depends on.

describe("formatBytes", () => {
  it("returns null for missing or invalid sizes so callers render nothing", () => {
    expect(formatBytes(null)).toBeNull();
    expect(formatBytes(undefined)).toBeNull();
    expect(formatBytes(-1)).toBeNull();
    expect(formatBytes(Number.NaN)).toBeNull();
    expect(formatBytes(Number.POSITIVE_INFINITY)).toBeNull();
  });

  it("formats bytes, KB, and MB at the right thresholds", () => {
    expect(formatBytes(0)).toBe("0 B");
    expect(formatBytes(1023)).toBe("1023 B");
    expect(formatBytes(1024)).toBe("1 KB");
    expect(formatBytes(908_288)).toBe("887 KB");
    expect(formatBytes(1024 * 1024)).toBe("1.0 MB");
    expect(formatBytes(1_258_291)).toBe("1.2 MB");
  });
});

describe("safeFilename", () => {
  it("passes ordinary slugs through untouched", () => {
    expect(safeFilename("witus-commercial-playbook")).toBe("witus-commercial-playbook");
    expect(safeFilename("interview_prep.v2")).toBe("interview_prep.v2");
  });

  it("neutralises header-injection and path characters", () => {
    expect(safeFilename('a"b\r\nc')).toBe("a-b--c");
    expect(safeFilename("../../etc/passwd")).toBe("..-..-etc-passwd");
    expect(safeFilename("slash/slug")).toBe("slash-slug");
  });

  it("caps length and never returns an empty name", () => {
    expect(safeFilename("x".repeat(300))).toHaveLength(100);
    expect(safeFilename("")).toBe("document");
    expect(safeFilename("///")).toBe("---");
  });
});
