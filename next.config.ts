import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "url-shortener";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
};

export default nextConfig;