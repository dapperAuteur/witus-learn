import { ImageResponse } from "next/og";
import { getTenantByHost } from "@/lib/tenant";
import { brandName } from "@/lib/branding";

export const runtime = "nodejs";

// Default OG image for the resolved tenant. Renders the TENANT's name + accent —
// never a hardcoded brand — so a shared card never leaks another tenant's identity.
export async function GET(req: Request) {
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  const tenant = await getTenantByHost(host);
  const name = brandName(tenant);
  const accent = tenant?.theme.colors?.accent ?? tenant?.theme.themeColor ?? "#111111";

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
        <div style={{ marginTop: 28, fontSize: 72, fontWeight: 700 }}>{name}</div>
        {tenant?.tagline ? (
          <div style={{ marginTop: 16, fontSize: 30, color: "#cccccc" }}>{tenant.tagline}</div>
        ) : null}
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
