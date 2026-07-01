import { ImageResponse } from "next/og";
import { getTenantByHost } from "@/lib/tenant";
import { brandName } from "@/lib/branding";

export const runtime = "nodejs";

// Social preview card for the resolved tenant. Brand name + accent come from the TENANT (resolved
// from the request host) — never a hardcoded brand — so a shared card never leaks another tenant's
// identity. Optional ?title= / ?subtitle= make the card page-relevant (a course/lesson title);
// without them it renders the school's default card (home + any page that doesn't override).
export async function GET(req: Request) {
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  const tenant = await getTenantByHost(host);
  const name = brandName(tenant);
  const accent = tenant?.theme.colors?.accent ?? tenant?.theme.themeColor ?? "#111111";

  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title")?.slice(0, 140);
  const subtitle = searchParams.get("subtitle")?.slice(0, 140) ?? tenant?.tagline ?? null;

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
