/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  basePath: "/DreamDesignerWebsite",
  assetPrefix: "/DreamDesignerWebsite/",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;