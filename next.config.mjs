/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  turbopack: {
    rules: {
      "*.mp4": { type: "asset" },
    },
  },
};

export default nextConfig;
