import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Re-Open — Renewing American Society"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0E1A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Red / White / Blue stripe at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "7px",
            display: "flex",
          }}
        >
          <div style={{ flex: 1, background: "#B22234", display: "flex" }} />
          <div style={{ flex: 1, background: "#FFFFFF", display: "flex" }} />
          <div style={{ flex: 1, background: "#3C3B6E", display: "flex" }} />
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: "104px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: "36px",
            display: "flex",
          }}
        >
          Re-Open
        </div>

        {/* Divider */}
        <div
          style={{
            width: "72px",
            height: "3px",
            background: "#B22234",
            marginBottom: "36px",
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: "34px",
            color: "rgba(255,255,255,0.60)",
            lineHeight: 1.45,
            maxWidth: "820px",
            display: "flex",
          }}
        >
          It doesn't have to be this way.
        </div>
      </div>
    ),
    { ...size }
  )
}
