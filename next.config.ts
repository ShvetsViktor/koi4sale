import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // важный флаг: включаем static export
  basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
