/** Product identity — determines which theme tokens a component uses. */
export type UiProductId = 'conexiant-solutions' | 'beta';

export const DEFAULT_UI_PRODUCT: UiProductId = 'conexiant-solutions';

/** Binds the `product` input to the theme attribute consumed by SCSS. */
export const UI_PRODUCT_HOST = {
  '[attr.data-ui-product]': 'product',
} as const;

export const UI_PRODUCT_ARG_TYPE = {
  control: 'select' as const,
  options: ['conexiant-solutions', 'beta'] satisfies UiProductId[],
};
