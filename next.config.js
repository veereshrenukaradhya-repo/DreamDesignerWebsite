/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/DreamDesignerWebsite",   // no trailing slash
  assetPrefix: "/DreamDesignerWebsite/", // keep trailing slash
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;