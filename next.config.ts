import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Use current working directory so Turbopack resolves from the project folder
    // (run `npm run dev` from shembgroup-site so this is correct).
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
