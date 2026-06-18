import type { Meta, StoryObj } from '@storybook/angular';

const colorTokens = [
  'color-primary',
  'color-primary-hover',
  'color-on-primary',
  'color-danger',
  'color-danger-hover',
  'color-on-danger',
  'color-text',
  'color-text-muted',
  'color-border',
  'color-surface',
  'color-surface-muted',
  'color-surface-muted-hover',
  'color-surface-hover',
];

const textColorTokens = new Set(['color-text', 'color-text-muted', 'color-on-primary', 'color-on-danger']);

const fontSizeTokens = ['font-size-xs', 'font-size-sm', 'font-size-md', 'font-size-lg', 'font-size-xl', 'font-size-2xl'];
const fontWeightTokens = ['font-weight-regular', 'font-weight-medium', 'font-weight-semibold', 'font-weight-bold'];
const lineHeightTokens = ['line-height-tight', 'line-height-normal', 'line-height-relaxed'];
const spacingTokens = ['spacing-xs', 'spacing-sm', 'spacing-md', 'spacing-lg', 'spacing-xl', 'spacing-2xl', 'spacing-3xl'];
const radiusTokens = ['radius-sm', 'radius-md', 'radius-lg', 'radius-full'];

function tokenVar(name: string): string {
  return `--ui-${name}`;
}

function colorSwatches(): string {
  const swatches = colorTokens
    .map((token) => {
      if (textColorTokens.has(token)) {
        const bg =
          token === 'color-on-primary'
            ? 'var(--ui-color-primary)'
            : token === 'color-on-danger'
              ? 'var(--ui-color-danger)'
              : 'var(--ui-color-surface)';

        return `
          <div class="ui-foundations__swatch">
            <div class="ui-foundations__text-sample" style="background: ${bg}; color: var(${tokenVar(token)})">
              Sample text
            </div>
            <div class="ui-foundations__swatch-meta"><code>${tokenVar(token)}</code></div>
          </div>
        `;
      }

      return `
        <div class="ui-foundations__swatch">
          <div class="ui-foundations__swatch-color" style="background: var(${tokenVar(token)})"></div>
          <div class="ui-foundations__swatch-meta"><code>${tokenVar(token)}</code></div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="ui-foundations">
      <h1 class="ui-foundations__title">Colors</h1>
      <p class="ui-foundations__description">
        Semantic color tokens for the active application theme. Switch app or color mode from the toolbar.
      </p>
      <div class="ui-foundations__grid ui-foundations__grid--colors">${swatches}</div>
    </div>
  `;
}

function typographyPage(): string {
  const fontFamilies = `
    <div class="ui-foundations__section">
      <h2 class="ui-foundations__section-title">Font families</h2>
      <div class="ui-foundations__type-row">
        <div class="ui-foundations__type-label"><code>${tokenVar('font-family-sans')}</code></div>
        <div style="font-family: var(${tokenVar('font-family-sans')})">The quick brown fox jumps over the lazy dog.</div>
        <div class="ui-foundations__type-value">Sans</div>
      </div>
      <div class="ui-foundations__type-row">
        <div class="ui-foundations__type-label"><code>${tokenVar('font-family-mono')}</code></div>
        <div style="font-family: var(${tokenVar('font-family-mono')})">const value = 42;</div>
        <div class="ui-foundations__type-value">Mono</div>
      </div>
    </div>
  `;

  const fontSizes = fontSizeTokens
    .map(
      (token) => `
      <div class="ui-foundations__type-row">
        <div class="ui-foundations__type-label"><code>${tokenVar(token)}</code></div>
        <div style="font-size: var(${tokenVar(token)})">The quick brown fox</div>
        <div class="ui-foundations__type-value">${token.replace('font-size-', '')}</div>
      </div>
    `,
    )
    .join('');

  const fontWeights = fontWeightTokens
    .map(
      (token) => `
      <div class="ui-foundations__type-row">
        <div class="ui-foundations__type-label"><code>${tokenVar(token)}</code></div>
        <div style="font-weight: var(${tokenVar(token)})">The quick brown fox</div>
        <div class="ui-foundations__type-value">${token.replace('font-weight-', '')}</div>
      </div>
    `,
    )
    .join('');

  const lineHeights = lineHeightTokens
    .map(
      (token) => `
      <div class="ui-foundations__type-row">
        <div class="ui-foundations__type-label"><code>${tokenVar(token)}</code></div>
        <div style="line-height: var(${tokenVar(token)})">
          Multi-line sample text to show line height. Typography tokens keep content readable across apps.
        </div>
        <div class="ui-foundations__type-value">${token.replace('line-height-', '')}</div>
      </div>
    `,
    )
    .join('');

  return `
    <div class="ui-foundations">
      <h1 class="ui-foundations__title">Typography</h1>
      <p class="ui-foundations__description">
        Font families, sizes, weights, and line heights used by all library components.
      </p>
      ${fontFamilies}
      <div class="ui-foundations__section">
        <h2 class="ui-foundations__section-title">Font sizes</h2>
        ${fontSizes}
      </div>
      <div class="ui-foundations__section">
        <h2 class="ui-foundations__section-title">Font weights</h2>
        ${fontWeights}
      </div>
      <div class="ui-foundations__section">
        <h2 class="ui-foundations__section-title">Line heights</h2>
        ${lineHeights}
      </div>
    </div>
  `;
}

function spacingPage(): string {
  const rows = spacingTokens
    .map(
      (token) => `
      <div class="ui-foundations__spacing-row">
        <code>${tokenVar(token)}</code>
        <div class="ui-foundations__spacing-bar" style="width: var(${tokenVar(token)})"></div>
        <div class="ui-foundations__type-value">${token.replace('spacing-', '')}</div>
      </div>
    `,
    )
    .join('');

  return `
    <div class="ui-foundations">
      <h1 class="ui-foundations__title">Spacing</h1>
      <p class="ui-foundations__description">
        Consistent spacing scale for padding, gaps, and layout rhythm.
      </p>
      <div class="ui-foundations__grid ui-foundations__grid--spacing">${rows}</div>
    </div>
  `;
}

function radiusPage(): string {
  const boxes = radiusTokens
    .map(
      (token) => `
      <div class="ui-foundations__swatch">
        <div class="ui-foundations__radius-box" style="border-radius: var(${tokenVar(token)})">
          <code>${token.replace('radius-', '')}</code>
        </div>
        <div class="ui-foundations__swatch-meta"><code>${tokenVar(token)}</code></div>
      </div>
    `,
    )
    .join('');

  return `
    <div class="ui-foundations">
      <h1 class="ui-foundations__title">Border radius</h1>
      <p class="ui-foundations__description">
        Corner radius tokens for buttons, inputs, and surfaces.
      </p>
      <div class="ui-foundations__grid ui-foundations__grid--radius">${boxes}</div>
    </div>
  `;
}

const meta: Meta = {
  title: 'Foundations',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const Colors: Story = {
  render: () => ({ template: colorSwatches() }),
};

export const Typography: Story = {
  render: () => ({ template: typographyPage() }),
};

export const Spacing: Story = {
  render: () => ({ template: spacingPage() }),
};

export const BorderRadius: Story = {
  render: () => ({ template: radiusPage() }),
};
