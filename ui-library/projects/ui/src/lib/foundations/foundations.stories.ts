import { Component, Input, OnChanges, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import type { Meta, StoryObj } from '@storybook/angular';
import type { UiColorMode, UiProductId } from '../services/theme.service';
import {
  applyProductTheme,
  cssVar,
  getProductFoundation,
  productFoundationLabels,
  productFoundationOptions,
} from './foundation-registry';
import type { ProductFoundationConfig, ProductFoundationSection } from './foundation.types';

export interface FoundationsStoryArgs {
  product: UiProductId;
  colorMode: UiColorMode;
}

type FoundationPage = 'colors' | 'typography' | 'spacing' | 'radius';

@Component({
  selector: 'storybook-foundations-page',
  standalone: true,
  template: `<div class="ui-foundations-host" [innerHTML]="html"></div>`,
})
class FoundationsPageComponent implements OnChanges {
  private readonly sanitizer = inject(DomSanitizer);

  @Input({ required: true }) product!: UiProductId;
  @Input({ required: true }) colorMode!: UiColorMode;
  @Input({ required: true }) page!: FoundationPage;

  html: SafeHtml = '';

  ngOnChanges(): void {
    applyProductTheme(this.product, this.colorMode);
    const config = getProductFoundation(this.product);
    const content = buildFoundationPage(this.page, config, this.colorMode);
    this.html = this.sanitizer.bypassSecurityTrustHtml(content);
  }
}

function productBanner(config: ProductFoundationConfig, colorMode: string): string {
  return `
    <p class="ui-foundations__product-banner">
      Showing <strong>${config.displayName}</strong> foundations
      <span class="ui-foundations__product-banner-mode">(${colorMode} mode)</span>
    </p>
  `;
}

function colorSwatch(token: string, textColors: Set<string> | readonly string[]): string {
  const textSet = textColors instanceof Set ? textColors : new Set(textColors);
  const varName = cssVar(token);

  if (textSet.has(token)) {
    const bg =
      token === 'color-on-primary'
        ? 'var(--ui-color-primary)'
        : token === 'color-on-danger'
          ? 'var(--ui-color-danger)'
          : 'var(--ui-color-surface)';

    return `
      <div class="ui-foundations__swatch">
        <div class="ui-foundations__text-sample" style="background: ${bg}; color: var(${varName})">
          Sample text
        </div>
        <div class="ui-foundations__swatch-meta"><code>${varName}</code></div>
      </div>
    `;
  }

  return `
    <div class="ui-foundations__swatch">
      <div class="ui-foundations__swatch-color" style="background: var(${varName})"></div>
      <div class="ui-foundations__swatch-meta"><code>${varName}</code></div>
    </div>
  `;
}

function brandSection(section: ProductFoundationSection): string {
  const swatches = section.tokens
    .map((token) => {
      const varName = cssVar(token, section.cssPrefix ?? 'legacy');
      return `
        <div class="ui-foundations__swatch">
          <div class="ui-foundations__swatch-color" style="background: var(${varName})"></div>
          <div class="ui-foundations__swatch-meta"><code>${varName}</code></div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="ui-foundations__section">
      <h2 class="ui-foundations__section-title">${section.title}</h2>
      <div class="ui-foundations__grid ui-foundations__grid--colors">${swatches}</div>
    </div>
  `;
}

function colorPage(config: ProductFoundationConfig, colorMode: string): string {
  const semantic = config.semanticColorTokens.map((t) => colorSwatch(t, config.textColorTokens)).join('');
  const brand =
    config.brandSections?.map((section) => brandSection(section)).join('') ??
    `<p class="ui-foundations__description">No product-specific brand palette for ${config.displayName}.</p>`;

  return `
    <div class="ui-foundations">
      <h1 class="ui-foundations__title">Colors</h1>
      ${productBanner(config, colorMode)}
      <p class="ui-foundations__description">
        Semantic tokens power shared UI components. Brand tokens are unique to this product.
      </p>
      <div class="ui-foundations__section">
        <h2 class="ui-foundations__section-title">Semantic (shared components)</h2>
        <div class="ui-foundations__grid ui-foundations__grid--colors">${semantic}</div>
      </div>
      ${brand}
    </div>
  `;
}

function typographyPage(config: ProductFoundationConfig, colorMode: string): string {
  const fontFamilies = `
    <div class="ui-foundations__section">
      <h2 class="ui-foundations__section-title">Font families</h2>
      <div class="ui-foundations__type-row">
        <div class="ui-foundations__type-label"><code>${cssVar('font-family-sans')}</code></div>
        <div style="font-family: var(${cssVar('font-family-sans')})">The quick brown fox jumps over the lazy dog.</div>
        <div class="ui-foundations__type-value">Sans</div>
      </div>
      <div class="ui-foundations__type-row">
        <div class="ui-foundations__type-label"><code>${cssVar('font-family-mono')}</code></div>
        <div style="font-family: var(${cssVar('font-family-mono')})">const value = 42;</div>
        <div class="ui-foundations__type-value">Mono</div>
      </div>
    </div>
  `;

  const fontSizes = config.fontSizeTokens
    .map(
      (token) => `
      <div class="ui-foundations__type-row">
        <div class="ui-foundations__type-label"><code>${cssVar(token)}</code></div>
        <div style="font-size: var(${cssVar(token)})">The quick brown fox</div>
        <div class="ui-foundations__type-value">${token.replace('font-size-', '')}</div>
      </div>
    `,
    )
    .join('');

  const fontWeights = config.fontWeightTokens
    .map(
      (token) => `
      <div class="ui-foundations__type-row">
        <div class="ui-foundations__type-label"><code>${cssVar(token)}</code></div>
        <div style="font-weight: var(${cssVar(token)})">The quick brown fox</div>
        <div class="ui-foundations__type-value">${token.replace('font-weight-', '')}</div>
      </div>
    `,
    )
    .join('');

  const lineHeights = config.lineHeightTokens
    .map(
      (token) => `
      <div class="ui-foundations__type-row">
        <div class="ui-foundations__type-label"><code>${cssVar(token)}</code></div>
        <div style="line-height: var(${cssVar(token)})">
          Multi-line sample text to show line height for ${config.displayName}.
        </div>
        <div class="ui-foundations__type-value">${token.replace('line-height-', '')}</div>
      </div>
    `,
    )
    .join('');

  return `
    <div class="ui-foundations">
      <h1 class="ui-foundations__title">Typography</h1>
      ${productBanner(config, colorMode)}
      <p class="ui-foundations__description">
        Font families, sizes, weights, and line heights for ${config.displayName}.
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

function spacingPage(config: ProductFoundationConfig, colorMode: string): string {
  const rows = config.spacingTokens
    .map(
      (token) => `
      <div class="ui-foundations__spacing-row">
        <code>${cssVar(token)}</code>
        <div class="ui-foundations__spacing-bar" style="width: var(${cssVar(token)})"></div>
        <div class="ui-foundations__type-value">${token.replace('spacing-', '')}</div>
      </div>
    `,
    )
    .join('');

  return `
    <div class="ui-foundations">
      <h1 class="ui-foundations__title">Spacing</h1>
      ${productBanner(config, colorMode)}
      <p class="ui-foundations__description">
        Spacing scale for ${config.displayName} padding, gaps, and layout rhythm.
      </p>
      <div class="ui-foundations__grid ui-foundations__grid--spacing">${rows}</div>
    </div>
  `;
}

function radiusPage(config: ProductFoundationConfig, colorMode: string): string {
  const boxes = config.radiusTokens
    .map(
      (token) => `
      <div class="ui-foundations__swatch">
        <div class="ui-foundations__radius-box" style="border-radius: var(${cssVar(token)})">
          <code>${token.replace('radius-', '')}</code>
        </div>
        <div class="ui-foundations__swatch-meta"><code>${cssVar(token)}</code></div>
      </div>
    `,
    )
    .join('');

  return `
    <div class="ui-foundations">
      <h1 class="ui-foundations__title">Border radius</h1>
      ${productBanner(config, colorMode)}
      <p class="ui-foundations__description">
        Corner radius tokens for ${config.displayName} buttons, inputs, and surfaces.
      </p>
      <div class="ui-foundations__grid ui-foundations__grid--radius">${boxes}</div>
    </div>
  `;
}

function buildFoundationPage(page: FoundationPage, config: ProductFoundationConfig, colorMode: string): string {
  switch (page) {
    case 'colors':
      return colorPage(config, colorMode);
    case 'typography':
      return typographyPage(config, colorMode);
    case 'spacing':
      return spacingPage(config, colorMode);
    case 'radius':
      return radiusPage(config, colorMode);
  }
}

const productArgType = {
  name: 'Product',
  description: 'Product whose foundation tokens are shown',
  control: 'select' as const,
  options: productFoundationOptions.map((option) => option.value),
  labels: productFoundationLabels,
};

const meta: Meta<FoundationsStoryArgs> = {
  title: 'Foundations',
  component: FoundationsPageComponent,
  parameters: {
    layout: 'fullscreen',
    controls: {
      include: ['product', 'colorMode'],
    },
    productId: { disable: true },
  },
  argTypes: {
    product: productArgType,
    colorMode: {
      name: 'Color mode',
      control: 'select',
      options: ['light', 'dark'],
    },
  },
  args: {
    product: 'conexiant-solutions',
    colorMode: 'light',
  },
};

export default meta;
type Story = StoryObj<FoundationsStoryArgs & { pageType?: FoundationPage }>;

function createFoundationStory(page: FoundationPage): Story {
  return {
    render: (args) => ({
      props: { ...args, pageType: page },
      moduleMetadata: {
        imports: [FoundationsPageComponent],
      },
      template: `
        <storybook-foundations-page
          [product]="product"
          [colorMode]="colorMode"
          [page]="pageType"
        ></storybook-foundations-page>
      `,
    }),
  };
}

export const Colors: Story = createFoundationStory('colors');

export const Typography: Story = createFoundationStory('typography');

export const Spacing: Story = createFoundationStory('spacing');

export const BorderRadius: Story = createFoundationStory('radius');
