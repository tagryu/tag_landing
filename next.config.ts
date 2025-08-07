import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Vercel에서는 필요 없음
  // trailingSlash: true, // Vercel에서는 필요 없음
  images: {
    unoptimized: true
  }
};

export default nextConfig;
