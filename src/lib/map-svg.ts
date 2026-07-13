import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldData from "world-atlas/countries-110m.json";

// Server-side renderer for the Commodity Map as a standalone SVG string.
//
// Why this exists: the /explore social-preview card shows the REAL map (BAM asked for the map
// itself as the share image, not a generic card). Satori (next/og) cannot render arbitrary SVG
// children, but it CAN rasterize an <img src="data:image/svg+xml;...">. So we build the same
// Natural Earth projection the interactive <CommodityMap> uses, emit it as a self-contained SVG
// string, and hand it to ImageResponse as a data URI.
//
// Pure + DB-free on purpose: the caller passes the pins it already fetched (tenant-scoped), so
// this module can never widen the tenant boundary, and the unit suite can exercise it offline.

export interface SvgPin {
  lat: number | null;
  lon: number | null;
  color: string | null;
  isHome: boolean;
}

export interface MapSvgOptions {
  width?: number;
  height?: number;
  /** Ocean / background fill. */
  background?: string;
  /** Landmass fill. */
  land?: string;
  /** Landmass border. */
  landStroke?: string;
  /** Fallback pin fill when a pin carries no colour of its own. */
  accent?: string;
}

/** Escape the few characters that would break out of an XML attribute or text node. */
function xmlAttr(value: string): string {
  return value.replace(/[<>&"']/g, (c) =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : c === "&" ? "&amp;" : c === '"' ? "&quot;" : "&apos;",
  );
}

/**
 * Only allow colours we are willing to inline into an SVG attribute. The pin colours come from
 * the DB (map_commodities.color), and this string is interpolated into markup — so anything that
 * is not an obvious CSS colour is dropped in favour of the accent, rather than trusted.
 */
function safeColor(value: string | null | undefined, fallback: string): string {
  if (!value) return fallback;
  const v = value.trim();
  if (/^#[0-9a-f]{3,8}$/i.test(v)) return v;
  if (/^[a-z]{3,20}$/i.test(v)) return v; // named CSS colours (e.g. "tomato")
  if (/^rgba?\([0-9.,\s%]+\)$/i.test(v)) return v;
  return fallback;
}

/**
 * Build the world map with a dot at each pin's origin, as an SVG document string.
 * Presentation is done with attributes (not CSS classes) because the rasterizer behind
 * ImageResponse only honours presentation attributes.
 */
export function buildMapSvg(pins: SvgPin[], opts: MapSvgOptions = {}): string {
  const width = opts.width ?? 1200;
  const height = opts.height ?? 630;
  const background = safeColor(opts.background, "#0a0a0a");
  const land = safeColor(opts.land, "#2a2a2a");
  const landStroke = safeColor(opts.landStroke, "#0a0a0a");
  const accent = safeColor(opts.accent, "#888888");

  const topo = worldData as unknown as Topology;
  const collection = feature(
    topo,
    topo.objects.countries as GeometryCollection,
  ) as FeatureCollection;

  const projection = geoNaturalEarth1().fitSize([width, height], collection);
  const path = geoPath(projection);

  const landPaths = collection.features
    .map((f) => path(f))
    .filter((d): d is string => !!d)
    .map((d) => `<path d="${xmlAttr(d)}" fill="${land}" stroke="${landStroke}" stroke-width="0.75"/>`)
    .join("");

  const dots = pins
    .map((p) => {
      if (p.lat == null || p.lon == null) return null;
      const xy = projection([p.lon, p.lat]);
      if (!xy) return null;
      const r = p.isHome ? 13 : 9;
      const fill = safeColor(p.color, accent);
      // A white ring keeps a dark pin legible against dark land at thumbnail size.
      return `<circle cx="${xy[0].toFixed(1)}" cy="${xy[1].toFixed(1)}" r="${r}" fill="${fill}" stroke="#ffffff" stroke-width="2.5"/>`;
    })
    .filter((s): s is string => s !== null)
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${background}"/>${landPaths}${dots}</svg>`;
}

/** The same map as a data URI, ready for an <img src> inside next/og's ImageResponse. */
export function mapSvgDataUri(pins: SvgPin[], opts: MapSvgOptions = {}): string {
  const svg = buildMapSvg(pins, opts);
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
