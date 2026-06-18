import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../projects/ui/src/lib/foundations/**/*.stories.@(ts|mdx)',
    '../projects/ui/src/lib/components/**/*.stories.@(ts|mdx)',
  ],
  addons: ['@storybook/addon-onboarding', '@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {},
};

export default config;
