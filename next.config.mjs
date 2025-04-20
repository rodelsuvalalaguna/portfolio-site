// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'
const prefix = isProd ? '/portfolio-site' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: { unoptimized: true },
    basePath: prefix,
    assetPrefix: prefix,
    trailingSlash: true,
}

export default nextConfig
