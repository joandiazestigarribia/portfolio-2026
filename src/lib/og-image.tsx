import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

const COLORS = {
  paper: "#0d0504",
  ink: "#f3ede7",
  rule: "#312622",
  accent: "#fe860f",
};

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function renderOgImage(subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: COLORS.paper,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            width: 76,
            height: 76,
            border: `1px solid ${COLORS.rule}`,
            borderRadius: 20,
            justifyContent: "center",
            marginBottom: 48,
            color: COLORS.ink,
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          <span>J</span>
          <div
            style={{
              width: 3,
              height: 26,
              background: COLORS.accent,
              borderRadius: 2,
            }}
          />
          <span>D</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            color: COLORS.ink,
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            color: COLORS.accent,
            letterSpacing: "1px",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
