/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // ✅ allow Unsplash images
  },
};

module.exports = nextConfig;
