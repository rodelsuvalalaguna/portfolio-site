/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    reactStrictMode: true,
    images: {
        unoptimized: true, // For static export
    },
    basePath: '/portfolio-site',  // Adjust this if necessary
    assetPrefix: '/portfolio-site',  // For assets on GitHub Pages
    trailingSlash: true,
};

export default nextConfig;
