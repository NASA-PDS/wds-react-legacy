import type { StorybookConfig } from "@storybook/react-vite";
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
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
