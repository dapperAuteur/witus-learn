"use client";

import { useEffect, useRef, useState } from "react";
import {
  PANORAMA_DEFAULT,
  fitTexture,
  rad,
  viewAfterDrag,
  viewAfterKey,
  viewAfterZoom,
  type PanoramaView,
} from "@/lib/panorama";

// The 360 viewer itself (plans/96 v2). Loaded ONLY through next/dynamic from tour-panorama.tsx, so
// this code reaches a learner's browser only on a lesson whose tour is a 360 photo.
//
// One WebGL quad: for every pixel, the fragment shader turns the view direction into a longitude and
// latitude and reads that point of the equirectangular image. No library, no 3D scene.
//
// It calls onError (and the wrapper shows the flat image with the same credit) when WebGL is missing,
// or the image will not load as a texture. The usual cause of the second is a host that does not send
// CORS headers: a browser lets a page SHOW such an image but not hand its pixels to the GPU.
//
// It never moves on its own (no auto-rotate), so prefers-reduced-motion needs nothing switched off.

const VERTEX = `
attribute vec2 a_pos;
varying vec2 v_pos;
void main() {
  v_pos = a_pos;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FRAGMENT = `
precision highp float;
uniform sampler2D u_tex;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_tanHalfFov;
uniform float u_aspect;
varying vec2 v_pos;
const float PI = 3.141592653589793;
void main() {
  vec3 d = normalize(vec3(v_pos.x * u_tanHalfFov * u_aspect, v_pos.y * u_tanHalfFov, -1.0));
  float cp = cos(u_pitch);
  float sp = sin(u_pitch);
  d = vec3(d.x, d.y * cp - d.z * sp, d.y * sp + d.z * cp);
  float cy = cos(u_yaw);
  float sy = sin(u_yaw);
  d = vec3(d.x * cy - d.z * sy, d.y, d.x * sy + d.z * cy);
  float lon = atan(d.x, -d.z);
  float lat = asin(clamp(d.y, -1.0, 1.0));
  gl_FragColor = texture2D(u_tex, vec2(lon / (2.0 * PI) + 0.5, 0.5 - lat / PI));
}`;

type Gl = WebGLRenderingContext;

function compile(gl: Gl, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
}

/** The image as something WebGL can upload, scaled down to the GPU's limit when it is larger. */
function textureSource(img: HTMLImageElement, max: number): TexImageSource {
  const size = fitTexture(img.naturalWidth, img.naturalHeight, max);
  if (size.width === img.naturalWidth && size.height === img.naturalHeight) return img;
  const canvas = document.createElement("canvas");
  canvas.width = size.width;
  canvas.height = size.height;
  canvas.getContext("2d")?.drawImage(img, 0, 0, size.width, size.height);
  return canvas;
}

export function PanoramaViewer({
  src,
  label,
  onError,
  onReady,
}: {
  src: string;
  /** The viewer's accessible name. */
  label: string;
  onError: () => void;
  onReady?: () => void;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewRef = useRef<PanoramaView>({ ...PANORAMA_DEFAULT });
  const drawRef = useRef<() => void>(() => {});
  const dragRef = useRef<{ id: number; x: number; y: number } | null>(null);
  const [loading, setLoading] = useState(true);
  // Latest callbacks without re-running the WebGL setup when a parent re-renders.
  const onErrorRef = useRef(onError);
  const onReadyRef = useRef(onReady);
  useEffect(() => {
    onErrorRef.current = onError;
    onReadyRef.current = onReady;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const box = boxRef.current;
    if (!canvas || !box) return;
    const gl = canvas.getContext("webgl", { antialias: false, preserveDrawingBuffer: false }) as Gl | null;
    if (!gl) {
      onErrorRef.current();
      return;
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    const program = gl.createProgram();
    if (!vs || !fs || !program) {
      onErrorRef.current();
      return;
    }
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      onErrorRef.current();
      return;
    }
    gl.useProgram(program);

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
    const u = {
      yaw: gl.getUniformLocation(program, "u_yaw"),
      pitch: gl.getUniformLocation(program, "u_pitch"),
      tanHalfFov: gl.getUniformLocation(program, "u_tanHalfFov"),
      aspect: gl.getUniformLocation(program, "u_aspect"),
    };

    let disposed = false;
    let ready = false;
    let frame = 0;

    const draw = () => {
      if (!ready || disposed || frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const v = viewRef.current;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform1f(u.yaw, rad(v.yaw));
        gl.uniform1f(u.pitch, rad(v.pitch));
        gl.uniform1f(u.tanHalfFov, Math.tan(rad(v.fov) / 2));
        gl.uniform1f(u.aspect, canvas.width / Math.max(1, canvas.height));
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      });
    };
    drawRef.current = draw;

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.max(1, Math.round(box.clientWidth * dpr));
      canvas.height = Math.max(1, Math.round(box.clientHeight * dpr));
      draw();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(box);
    resize();

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";
    img.onload = () => {
      if (disposed) return;
      try {
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // Any size (not a power of two) needs clamp and no mipmaps in WebGL 1.
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        const max = Number(gl.getParameter(gl.MAX_TEXTURE_SIZE)) || 4096;
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, textureSource(img, max));
        if (gl.getError() !== gl.NO_ERROR) throw new Error("texture upload failed");
      } catch {
        onErrorRef.current();
        return;
      }
      ready = true;
      setLoading(false);
      draw();
      onReadyRef.current?.();
    };
    img.onerror = () => {
      if (!disposed) onErrorRef.current();
    };
    img.src = src;

    return () => {
      disposed = true;
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      img.onload = null;
      img.onerror = null;
      drawRef.current = () => {};
    };
  }, [src]);

  function apply(next: PanoramaView | null) {
    if (!next) return false;
    viewRef.current = next;
    drawRef.current();
    return true;
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (apply(viewAfterKey(viewRef.current, e.key, e.shiftKey))) e.preventDefault();
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    dragRef.current = { id: e.pointerId, x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.id !== e.pointerId) return;
    const height = e.currentTarget.clientHeight;
    apply(viewAfterDrag(viewRef.current, e.clientX - drag.x, e.clientY - drag.y, height));
    drag.x = e.clientX;
    drag.y = e.clientY;
  }

  function endDrag(e: React.PointerEvent<HTMLDivElement>) {
    if (dragRef.current?.id === e.pointerId) dragRef.current = null;
  }

  const button =
    "flex h-11 w-11 items-center justify-center rounded-md bg-black/60 text-lg font-bold text-white hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <div className="relative">
      <div
        ref={boxRef}
        role="application"
        aria-roledescription="360 viewer"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="aspect-video w-full cursor-grab touch-none overflow-hidden rounded-lg border border-neutral-200 bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:cursor-grabbing dark:border-neutral-800"
      >
        <canvas ref={canvasRef} aria-hidden="true" className="block h-full w-full" />
        {loading ? (
          <p role="status" className="absolute inset-0 flex items-center justify-center text-sm text-white">
            Loading the 360 view…
          </p>
        ) : null}
      </div>
      <div className="absolute right-2 bottom-2 flex gap-2">
        <button type="button" className={button} aria-label="Zoom in" onClick={() => apply(viewAfterZoom(viewRef.current, 1))}>
          +
        </button>
        <button type="button" className={button} aria-label="Zoom out" onClick={() => apply(viewAfterZoom(viewRef.current, -1))}>
          −
        </button>
      </div>
    </div>
  );
}
