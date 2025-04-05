import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "www.notion.so",
      },
      {
        hostname: "img.notionusercontent.com",
      },
    ],
  },
};

export default nextConfig;
