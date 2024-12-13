/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      actions: false
    }
  }],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: [
    {
      from: '../src/scss/private/base/font',
      to: 'font'
    }
  ]
};
export default config;
