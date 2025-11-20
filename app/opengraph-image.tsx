import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "120px",
          background: "linear-gradient(135deg,#EEF2FF 0%,#F8FAFC 100%)",
          fontFamily: "Geist, Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            padding: "12px 20px",
            borderRadius: "999px",
            fontSize: 22,
            fontWeight: 600,
            color: "#4338CA",
            border: "1px solid rgba(67,56,202,0.2)",
          }}
        >
          Crystal ERP
        </div>
        <h1
          style={{
            marginTop: 40,
            fontSize: 72,
            lineHeight: 1.05,
            color: "#0f172a",
          }}
        >
          Run every retail and service workflow on one platform.
        </h1>
        <p
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "#475569",
            maxWidth: 840,
          }}
        >
          POS, inventory, finance, HR, and analytics purpose-built for Kenyan
          businesses.
        </p>
        <p
          style={{
            marginTop: 48,
            fontSize: 28,
            fontWeight: 600,
            color: "#4338CA",
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </p>
      </div>
    ),
    { ...size }
  );
}
