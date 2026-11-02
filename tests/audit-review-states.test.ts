import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// Plans/97 v2 acceptance 7: /audit/review has loading, error and empty states; the sign-off panel
// says what to do on a held course with no markers.
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("reviewer pages' states", () => {
  it("loading and error boundaries exist with a status and an alert", () => {
    const dir = "src/app/(tenant)/audit/review";
    expect(existsSync(join(process.cwd(), dir, "loading.tsx"))).toBe(true);
    expect(src(`${dir}/loading.tsx`)).toContain('role="status"');
    expect(src(`${dir}/error.tsx`)).toContain('role="alert"');
    expect(src(`${dir}/error.tsx`)).toContain("onClick={reset}");
  });
  it("empty states say what to do", () => {
    expect(src("src/app/(tenant)/audit/review/page.tsx")).toContain("You have no courses to review. Open the invitation link you were sent");
    expect(src("src/app/(tenant)/teach/[courseId]/page.tsx")).toContain("This course has no lessons marked for review. Clear its hold by hand.");
  });
});
