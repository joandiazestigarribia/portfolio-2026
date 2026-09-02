import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0504",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 72,
            fontWeight: 800,
            color: "#f3ede7",
          }}
        >
          <span>J</span>
          <div style={{ width: 8, height: 56, background: "#fe860f", borderRadius: 4 }} />
          <span>D</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
