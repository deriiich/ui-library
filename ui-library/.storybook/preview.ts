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
    productId: {
      description: 'Product theme (colors, typography, spacing)',
      toolbar: {
        title: 'Product',
        icon: 'component',
        items: [
          { value: 'conexiant-solutions', title: 'Conexiant Solutions' },
          { value: 'beta', title: 'Beta' },
        ],
      },
    },
    colorMode: {
      description: 'Light or dark mode within the selected product',
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
  initialGlobals: {
    productId: 'conexiant-solutions',
    colorMode: 'light',
  },
  decorators: [
    (storyFn, context) => {
      const root = document.documentElement;
      const productId = context.globals['productId'] ?? 'conexiant-solutions';
      const colorMode = context.globals['colorMode'] ?? 'light';

      root.setAttribute('data-ui-product', productId);
      root.setAttribute('data-ui-theme', colorMode);

      return storyFn();
    },
  ],
};

export default preview;
