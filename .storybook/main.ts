import type { StorybookConfig } from "@storybook/react-webpack5"

const config: StorybookConfig = {
  core: {
    disableTelemetry: true, // 👈 Disables telemetry, reference https://storybook.js.org/docs/react/configure/telemetry
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  }
};
export default config;