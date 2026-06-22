import type { UiProductId } from '../services/theme.service';

export interface ProductFoundationSection {
  title: string;
  tokens: string[];
  /** Use --ui-{token} by default; set legacy name for --{token} without ui prefix */
  cssPrefix?: 'ui' | 'legacy';
}

export interface ProductFoundationConfig {
  id: UiProductId;
  displayName: string;
  semanticColorTokens: string[];
  textColorTokens: string[];
  fontSizeTokens: string[];
  fontWeightTokens: string[];
  lineHeightTokens: string[];
  spacingTokens: string[];
  radiusTokens: string[];
  brandSections?: ProductFoundationSection[];
}

export const semanticColorTokens = [
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

export const textColorTokens = new Set([
  'color-text',
  'color-text-muted',
  'color-on-primary',
  'color-on-danger',
]);

export const fontSizeTokens = [
  'font-size-xs',
  'font-size-sm',
  'font-size-md',
  'font-size-lg',
  'font-size-xl',
  'font-size-2xl',
];

export const fontWeightTokens = [
  'font-weight-regular',
  'font-weight-medium',
  'font-weight-semibold',
  'font-weight-bold',
];

export const lineHeightTokens = ['line-height-tight', 'line-height-normal', 'line-height-relaxed'];

export const spacingTokens = [
  'spacing-xs',
  'spacing-sm',
  'spacing-md',
  'spacing-lg',
  'spacing-xl',
  'spacing-2xl',
  'spacing-3xl',
];

export const radiusTokens = ['radius-sm', 'radius-md', 'radius-lg', 'radius-full'];
