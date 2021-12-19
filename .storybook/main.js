const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-mui-mode",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/types": path.resolve(__dirname, "../src/types"),
      "@/common": path.resolve(__dirname, "../src/common"),
      "@/providers": path.resolve(__dirname, "../src/providers"),
      "@/hooks": path.resolve(__dirname, "../src/hooks"),
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/env": path.resolve(__dirname, "../src/env"),
    };

    return config;
  },
};
