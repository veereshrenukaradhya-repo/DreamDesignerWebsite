/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/DreamDesignerWebsite',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;