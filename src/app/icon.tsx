import { ImageResponse } from "next/og";
import { loadWordmark } from "@/lib/og-assets";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={wordmark}
          alt=""
          width={30}
          height={16}
          style={{
            width: 30,
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
