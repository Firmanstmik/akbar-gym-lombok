import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Include 2x/3x phone widths so mobile stays sharp
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 2560],
    imageSizes: [64, 96, 128, 256, 384, 512],
    qualities: [75, 80, 85, 90],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
