import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080a",
          color: "#f4f4f5",
          padding: "60px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-120px",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            background: "rgba(142, 216, 230, 0.14)",
            filter: "blur(90px)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "44px",
            bottom: "96px",
            display: "flex",
            fontSize: "280px",
            lineHeight: 1,
            letterSpacing: "-18px",
            color: "rgba(255,255,255,0.045)",
            fontFamily: "monospace",
          }}
        >
          JS
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.16)",
                fontSize: "15px",
                letterSpacing: "-0.5px",
                color: "#8ed8e6",
                fontFamily: "monospace",
              }}
            >
              JS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "19px", fontWeight: 600 }}>{site.name}</span>
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#8f8f98",
                }}
              >
                {site.role}
              </span>
            </div>
          </div>

          <span style={{ fontSize: "14px", color: "#8f8f98" }}>
            {new URL(site.url).host}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#8f8f98",
            }}
          >
            <span style={{ color: "#8ed8e6" }}>Portfolio</span>
            <span style={{ width: "32px", height: "1px", background: "#2a2a30", display: "flex" }} />
            <span>2026</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              fontSize: "76px",
              lineHeight: 1.05,
              letterSpacing: "-3.5px",
              fontWeight: 600,
            }}
          >
            <span>I build software</span>
            <div style={{ display: "flex", gap: "16px" }}>
              <span>that</span>
              <span style={{ color: "#8ed8e6" }}>holds up.</span>
            </div>
          </div>

          <span
            style={{
              fontSize: "21px",
              lineHeight: 1.5,
              color: "#a1a1aa",
              maxWidth: "720px",
            }}
          >
            Interfaces, APIs, data models, and the deployment that holds it together.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            fontSize: "14px",
            color: "#8f8f98",
            position: "relative",
          }}
        >
          <span>TypeScript · React · Next.js · Rust</span>
          <span>{site.location}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
