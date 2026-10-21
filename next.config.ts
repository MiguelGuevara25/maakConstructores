import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Static export has no `/_next/image` endpoint, so images are resized and
    // compressed by the remote CDN through this loader.
    loader: "custom",
    loaderFile: "./src/libs/image-loader.ts",
    // Cap the largest variant: 3840px images weigh >1 MB and add nothing here.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
