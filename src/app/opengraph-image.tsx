import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";
import { loadHeroBackground, loadWordmark } from "@/lib/og-assets";

export const runtime = "nodejs";
export const alt = `${SITE.name} | ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [wordmark, hero] = await Promise.all([loadWordmark(), loadHeroBackground()]);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0A0A0A",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.72) 45%, rgba(10,10,10,0.92) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 6,
            background: "#E86324",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={wordmark}
          alt={SITE.name}
          width={520}
          height={281}
          style={{
            width: 520,
            height: 281,
            objectFit: "contain",
            marginBottom: 28,
          }}
        />
        <p
          style={{
            margin: 0,
            color: "#FFFFFF",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {SITE.tagline.toUpperCase()}
        </p>
        <p
          style={{
            margin: 0,
            color: "#E86324",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.06em",
          }}
        >
          Sengkol · Praya · South Lombok
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}
