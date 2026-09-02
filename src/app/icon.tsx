import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            fontSize: 15,
            fontWeight: 800,
            color: "#f3ede7",
          }}
        >
          <span>J</span>
          <div style={{ width: 2, height: 12, background: "#fe860f", borderRadius: 1 }} />
          <span>D</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
