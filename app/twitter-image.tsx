import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px",
          background: "#0f172a",
          color: "#f8fafc",
          fontFamily: "Geist, Inter, sans-serif",
        }}
      >
        <p
          style={{
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#818cf8",
          }}
        >
          Crystal ERP
        </p>
        <h1 style={{ fontSize: 70, lineHeight: 1.1, marginTop: 24 }}>
          Modern ERP & POS software for ambitious Kenyan businesses.
        </h1>
        <p style={{ fontSize: 30, marginTop: 30, color: "#CBD5F5" }}>
          Inventory · Finance · HR · Analytics · Support
        </p>
        <p style={{ fontSize: 26, marginTop: 40, color: "#A5B4FC" }}>
          {siteConfig.url}
        </p>
      </div>
    ),
    { ...size }
  );
}
