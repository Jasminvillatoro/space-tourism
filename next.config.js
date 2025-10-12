/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 100], // allow 100 quality
  },
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;
