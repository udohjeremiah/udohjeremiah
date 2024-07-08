import { createContentlayerPlugin } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
      },
    ],
  },

  // Silence, contentlayer
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
