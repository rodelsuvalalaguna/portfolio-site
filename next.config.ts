import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', // Use static export
  images: {
    unoptimized: true, // Optional: For <Image /> in static export
  },
  reactStrictMode: true,
  basePath: '/portfolio-site',  // Adjust this based on your GitHub Pages path
  assetPrefix: '/portfolio-site',  // Helps with loading assets from GitHub Pages
  trailingSlash: true,  // Ensure trailing slash for paths
};

export default nextConfig;
