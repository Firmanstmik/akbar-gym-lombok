import { ImageResponse } from "next/og";
import { loadWordmark } from "@/lib/og-assets";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const wordmark = await loadWordmark();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0A0A0A",
          borderRadius: 36,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={wordmark}
          alt=""
          width={150}
          height={81}
          style={{
            width: 150,
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
