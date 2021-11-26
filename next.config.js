const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.BUNDLE === "true",
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
});
