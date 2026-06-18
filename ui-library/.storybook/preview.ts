import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  globalTypes: {
    appId: {
      description: 'Application theme (colors, typography, spacing)',
      toolbar: {
        title: 'Application',
        icon: 'component',
        items: [
          { value: 'alpha', title: 'Alpha' },
          { value: 'beta', title: 'Beta' },
          { value: 'charlie', title: 'Charlie' },
        ],
      },
    },
    colorMode: {
      description: 'Light or dark mode within the selected app',
      toolbar: {
        title: 'Color mode',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (storyFn, context) => {
      const root = document.documentElement;
      const appId = context.globals['appId'] ?? 'alpha';
      const colorMode = context.globals['colorMode'] ?? 'light';

      root.setAttribute('data-ui-app', appId);
      root.setAttribute('data-ui-theme', colorMode);

      return storyFn();
    },
  ],
};

export default preview;
