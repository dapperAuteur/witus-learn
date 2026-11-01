import { describe, expect, it } from "vitest";
import {
  FOV_MAX,
  FOV_MIN,
  KEY_STEP,
  PANORAMA_DEFAULT,
  PITCH_LIMIT,
  fitTexture,
  normalizeView,
  viewAfterDrag,
  viewAfterKey,
  viewAfterZoom,
} from "@/lib/panorama";

// The 360 viewer's keyboard and drag rules (plans/96 v2, acceptance 1: "the viewer pans with arrow
// keys"). The WebGL half only draws whatever view these functions return.

const v = PANORAMA_DEFAULT;

describe("keyboard", () => {
  it("turns with the arrow keys, further with Shift", () => {
    expect(viewAfterKey(v, "ArrowRight")?.yaw).toBe(KEY_STEP);
    expect(viewAfterKey(v, "ArrowLeft")?.yaw).toBe(360 - KEY_STEP);
    expect(viewAfterKey(v, "ArrowUp")?.pitch).toBe(KEY_STEP);
    expect(viewAfterKey(v, "ArrowDown")?.pitch).toBe(-KEY_STEP);
    expect(viewAfterKey(v, "ArrowRight", true)?.yaw).toBe(KEY_STEP * 3);
  });

  it("zooms with plus and minus, inside the limits", () => {
    expect(viewAfterKey(v, "+")!.fov).toBeLessThan(v.fov);
    expect(viewAfterKey(v, "=")!.fov).toBeLessThan(v.fov);
    expect(viewAfterKey(v, "-")!.fov).toBeGreaterThan(v.fov);
    expect(viewAfterKey({ ...v, fov: FOV_MIN }, "+")!.fov).toBe(FOV_MIN);
    expect(viewAfterKey({ ...v, fov: FOV_MAX }, "-")!.fov).toBe(FOV_MAX);
  });

  it("never looks past the poles, and Home resets", () => {
    let view = v;
    for (let i = 0; i < 40; i++) view = viewAfterKey(view, "ArrowUp")!;
    expect(view.pitch).toBe(PITCH_LIMIT);
    expect(viewAfterKey(view, "Home")).toEqual(PANORAMA_DEFAULT);
  });

  it("leaves every other key to the page, so Tab and Space still work", () => {
    for (const key of ["Tab", "Enter", " ", "a", "Escape", "PageDown"]) expect(viewAfterKey(v, key)).toBeNull();
  });
});

describe("drag and zoom buttons", () => {
  it("moves the picture with the pointer: drag left, look right", () => {
    const after = viewAfterDrag(v, -100, 0, 400);
    expect(after.yaw).toBeCloseTo((100 * v.fov) / 400);
    expect(viewAfterDrag(v, 0, 100, 400).pitch).toBeGreaterThan(0);
  });

  it("zooms in and out by button", () => {
    expect(viewAfterZoom(v, 1).fov).toBeLessThan(v.fov);
    expect(viewAfterZoom(v, -1).fov).toBeGreaterThan(v.fov);
  });

  it("wraps yaw into one turn", () => {
    expect(normalizeView({ ...v, yaw: 725 }).yaw).toBe(5);
    expect(normalizeView({ ...v, yaw: -10 }).yaw).toBe(350);
  });
});

describe("fitTexture", () => {
  it("scales a 360 photo down to the GPU limit, keeping 2:1, and never up", () => {
    expect(fitTexture(8192, 4096, 4096)).toEqual({ width: 4096, height: 2048 });
    expect(fitTexture(2000, 1000, 4096)).toEqual({ width: 2000, height: 1000 });
  });
});
