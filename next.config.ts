import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "moyo-database.s3.ap-south-1.amazonaws.com" },
      { protocol: "https", hostname: "moyo-international-bucket.s3.ap-south-1.amazonaws.com" },
      { protocol: "https", hostname: "ik.imagekit.io" },
    ],
  },
};

export default nextConfig;
