import { ImageResponse } from "next/og";
import { getTenantByHost } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { listCommodities } from "@/db/queries/map";
import { mapSvgDataUri } from "@/lib/map-svg";

export const runtime = "nodejs";

// Social preview card for the resolved tenant. Brand name + accent come from the TENANT (resolved
// from the request host) — never a hardcoded brand — so a shared card never leaks another tenant's
// identity. Optional ?title= / ?subtitle= make the card page-relevant (a course/lesson title);
// without them it renders the school's default card (home + any page that doesn't override).
//
// ?map=1 renders the school's ACTUAL Commodity Map (its own pins, at their real origins) behind
// the title — /explore uses it so sharing the link previews the map itself. The pins are read with
// listCommodities(tenant.id), i.e. tenant-scoped exactly like every other map query: a brand can
// only ever get its own pins on its own card. If the tenant has no pins (or the map fails to
// render) we fall through to the plain branded card rather than shipping a broken image.
export async function GET(req: Request) {
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  const tenant = await getTenantByHost(host);
  const name = brandName(tenant);
  const accent = tenant?.theme.colors?.accent ?? tenant?.theme.themeColor ?? "#111111";

  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title")?.slice(0, 140);
  const subtitle = searchParams.get("subtitle")?.slice(0, 140) ?? tenant?.tagline ?? null;
  const wantsMap = searchParams.get("map") === "1";

  let mapUri: string | null = null;
  if (wantsMap && tenant && tenant.flags.commodityMap !== false) {
    try {
      const pins = await listCommodities(tenant.id);
      if (pins.length > 0) {
        mapUri = mapSvgDataUri(pins, { width: 1200, height: 630, accent });
      }
    } catch (err) {
      // A social card is never worth a 500 — degrade to the branded card below.
      console.error("[og] map render failed; falling back to the branded card:", err);
    }
  }

  if (mapUri) {
    return new ImageResponse(
      (
        <div style={{ display: "flex", width: "100%", height: "100%", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mapUri} width={1200} height={630} alt="" style={{ position: "absolute", top: 0, left: 0 }} />
          {/* Scrim so the type stays readable over land, sea, and pins alike. */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 42%, rgba(10,10,10,0.15) 100%)",
            }}
          />
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "62%",
              height: "100%",
              padding: "72px",
              color: "#ffffff",
            }}
          >
            <div style={{ display: "flex", height: 12, width: 160, background: accent }} />
            <div style={{ display: "flex", marginTop: 26, fontSize: 30, color: "#dddddd" }}>{name}</div>
            <div
              style={{
                display: "flex",
                marginTop: 12,
                fontSize: 62,
                fontWeight: 700,
                lineHeight: 1.05,
              }}
            >
              {title ?? "The Commodity Map"}
            </div>
            {subtitle ? (
              <div style={{ display: "flex", marginTop: 16, fontSize: 27, color: "#cccccc" }}>
                {subtitle}
              </div>
            ) : null}
          </div>
        </div>
      ),
      { width: 1200, height: 630 },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", height: 12, width: 160, background: accent }} />
        {title ? (
          // Page card: brand small, page title large.
          <>
            <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#cccccc" }}>{name}</div>
            <div style={{ display: "flex", marginTop: 12, fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
              {title}
            </div>
            {subtitle ? (
              <div style={{ display: "flex", marginTop: 16, fontSize: 30, color: "#cccccc" }}>{subtitle}</div>
            ) : null}
          </>
        ) : (
          // Default school card.
          <>
            <div style={{ display: "flex", marginTop: 28, fontSize: 72, fontWeight: 700 }}>{name}</div>
            {subtitle ? (
              <div style={{ display: "flex", marginTop: 16, fontSize: 30, color: "#cccccc" }}>{subtitle}</div>
            ) : null}
          </>
        )}
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
