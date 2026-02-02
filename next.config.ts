import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // Fix for workspace root detection warning
  outputFileTracingRoot: path.join(__dirname, "../"),
};

export default nextConfig;
