import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "www.shutterstock.com",
      "thumbs.dreamstime.com",
    ],
    unoptimized: true,
  },
  // output: "export",
  basePath: "/my-portfolio",
};

export default nextConfig;
