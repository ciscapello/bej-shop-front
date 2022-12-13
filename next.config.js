/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: true,
  images: {
    domains: ["example.com"],
  },
};

module.exports = nextConfig;
