import type { UiColorMode, UiProductId } from '../services/theme.service';
import type { ProductFoundationConfig } from './foundation.types';
import { betaFoundation } from '../themes/products/beta/foundation.config';
import { conexiantSolutionsFoundation } from '../themes/products/conexiant-solutions/foundation.config';

export interface ProductFoundationOption {
  value: UiProductId;
  label: string;
}

export const productFoundationOptions: ProductFoundationOption[] = [
  { value: 'conexiant-solutions', label: 'Conexiant Solutions' },
  { value: 'beta', label: 'Beta' },
];

const foundationByProduct: Record<UiProductId, ProductFoundationConfig> = {
  'conexiant-solutions': conexiantSolutionsFoundation,
  beta: betaFoundation,
};

export function getProductFoundation(productId: string): ProductFoundationConfig {
  return foundationByProduct[productId as UiProductId] ?? conexiantSolutionsFoundation;
}

export function applyProductTheme(productId: UiProductId, colorMode: UiColorMode): void {
  document.documentElement.setAttribute('data-ui-product', productId);
  document.documentElement.setAttribute('data-ui-theme', colorMode);
}

export function cssVar(token: string, prefix: 'ui' | 'legacy' = 'ui'): string {
  return prefix === 'legacy' ? `--${token}` : `--ui-${token}`;
}

export const productFoundationLabels = Object.fromEntries(
  productFoundationOptions.map(({ value, label }) => [value, label]),
) as Record<UiProductId, string>;
