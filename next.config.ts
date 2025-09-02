import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },

  experimental: {
    ppr: "incremental",
  },

  // ✅ Update devIndicators
  devIndicators: {
    position: "bottom-right", // replaces buildActivityPosition
  },
};

export default nextConfig;
