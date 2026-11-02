// The 360 viewer's view math (plans/96 v2, tours from the field). Pure, so the keyboard and drag
// behaviour is pinned by tests/panorama.test.ts without a browser or a GPU.
//
// WHY NO LIBRARY. A tour slot shows ONE equirectangular photo: no hotspots, no scenes, no video. A
// full viewer (Photo Sphere Viewer, which Wanderlust uses, brings three.js) would add a large client
// bundle for that, and this app's build already runs near Vercel's limits. The view is one fragment
// shader on one quad (src/components/panorama-viewer.tsx) plus the state below, all loaded only on a
// lesson whose tour is a 360 photo.
//
// Angles are in DEGREES here; the shader takes radians. Yaw 0 looks at the middle of the image, and
// yaw grows to the right. Pitch 0 is the horizon, positive looks up. Fov is the VERTICAL field of view.

export interface PanoramaView {
  yaw: number;
  pitch: number;
  fov: number;
}

export const PANORAMA_DEFAULT: PanoramaView = { yaw: 0, pitch: 0, fov: 75 };
export const FOV_MIN = 30;
export const FOV_MAX = 100;
/** Short of straight up or down, where the image's top and bottom rows pinch to a point. */
export const PITCH_LIMIT = 85;
/** Degrees one arrow press turns; Shift turns three times as far. */
export const KEY_STEP = 5;
export const ZOOM_STEP = 10;

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

/** Keep yaw in [0, 360), pitch short of the poles, and fov in its range. */
export function normalizeView(v: PanoramaView): PanoramaView {
  const yaw = ((v.yaw % 360) + 360) % 360;
  return { yaw: yaw === 360 ? 0 : yaw, pitch: clamp(v.pitch, -PITCH_LIMIT, PITCH_LIMIT), fov: clamp(v.fov, FOV_MIN, FOV_MAX) };
}

/**
 * The view after a key press, or null when the key is not one the viewer uses (so the page keeps it:
 * Tab still moves focus, and Space still scrolls). Arrows look around, + and - zoom, Home resets.
 */
export function viewAfterKey(v: PanoramaView, key: string, shift = false): PanoramaView | null {
  const step = KEY_STEP * (shift ? 3 : 1);
  switch (key) {
    case "ArrowLeft":
      return normalizeView({ ...v, yaw: v.yaw - step });
    case "ArrowRight":
      return normalizeView({ ...v, yaw: v.yaw + step });
    case "ArrowUp":
      return normalizeView({ ...v, pitch: v.pitch + step });
    case "ArrowDown":
      return normalizeView({ ...v, pitch: v.pitch - step });
    case "+":
    case "=":
      return normalizeView({ ...v, fov: v.fov - ZOOM_STEP });
    case "-":
    case "_":
      return normalizeView({ ...v, fov: v.fov + ZOOM_STEP });
    case "Home":
      return { ...PANORAMA_DEFAULT };
    default:
      return null;
  }
}

/**
 * The view after a drag of (dx, dy) CSS pixels on a viewer `height` pixels tall. Dragging moves the
 * picture with the pointer, the way a photo is dragged: drag left and the view turns right. One full
 * viewer height of drag turns by one field of view, so a zoomed-in view moves more finely.
 */
export function viewAfterDrag(v: PanoramaView, dx: number, dy: number, height: number): PanoramaView {
  const perPixel = v.fov / Math.max(1, height);
  return normalizeView({ ...v, yaw: v.yaw - dx * perPixel, pitch: v.pitch + dy * perPixel });
}

/** The view after a zoom button: +1 in, -1 out. */
export function viewAfterZoom(v: PanoramaView, direction: 1 | -1): PanoramaView {
  return normalizeView({ ...v, fov: v.fov - direction * ZOOM_STEP });
}

/**
 * The size to upload an image at, so neither side exceeds the GPU's texture limit (often 4096 on a
 * phone, while a 360 camera writes 6000 or more across). Keeps the 2:1 shape; never scales up.
 */
export function fitTexture(width: number, height: number, max: number): { width: number; height: number } {
  const scale = Math.min(1, max / Math.max(width, height, 1));
  return { width: Math.max(1, Math.floor(width * scale)), height: Math.max(1, Math.floor(height * scale)) };
}

/** Degrees to radians, for the shader. */
export const rad = (deg: number) => (deg * Math.PI) / 180;
