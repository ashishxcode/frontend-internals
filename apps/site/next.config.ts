import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx"],
  transpilePackages: ["@frontend-internals/content"],
};

export default nextConfig;
