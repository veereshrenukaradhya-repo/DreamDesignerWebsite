/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  distDir: "docs",   // ✅ VERY IMPORTANT (this fixes everything)
  assetPrefix: "/DreamDesignerWebsite/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;