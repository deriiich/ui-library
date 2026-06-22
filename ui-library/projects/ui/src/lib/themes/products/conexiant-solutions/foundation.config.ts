import type { ProductFoundationConfig } from '../../../foundations/foundation.types';
import {
  fontSizeTokens,
  fontWeightTokens,
  lineHeightTokens,
  radiusTokens,
  semanticColorTokens,
  spacingTokens,
  textColorTokens,
} from '../../../foundations/foundation.types';

export const conexiantSolutionsFoundation: ProductFoundationConfig = {
  id: 'conexiant-solutions',
  displayName: 'Conexiant Solutions',
  semanticColorTokens,
  textColorTokens: [...textColorTokens],
  fontSizeTokens,
  fontWeightTokens,
  lineHeightTokens,
  spacingTokens,
  radiusTokens,
  brandSections: [
    {
      title: 'Primary blue',
      tokens: [
        'cnxsolutions-primary-blue',
        'cnxsolutions-primary-blue-10',
        'cnxsolutions-primary-blue-30',
        'cnxsolutions-primary-blue-50',
        'cnxsolutions-primary-blue-70',
        'cnxsolutions-primary-blue-90',
        'cnxsolutions-primary-blue-100',
      ],
      cssPrefix: 'legacy',
    },
    {
      title: 'Primary green',
      tokens: [
        'cnxsolutions-primary-green',
        'cnxsolutions-primary-green-20',
        'cnxsolutions-primary-green-60',
        'cnxsolutions-primary-green-80',
      ],
      cssPrefix: 'legacy',
    },
    {
      title: 'Secondary grey',
      tokens: [
        'cnxsolutions-secondary-grey-10',
        'cnxsolutions-secondary-grey-40',
        'cnxsolutions-secondary-grey-70',
        'cnxsolutions-secondary-grey-100',
      ],
      cssPrefix: 'legacy',
    },
    {
      title: 'Utility',
      tokens: [
        'cnxsolutions-utility-red-60',
        'cnxsolutions-utility-green-60',
        'cnxsolutions-utility-yellow-60',
        'cnxsolutions-utility-grey-10',
      ],
      cssPrefix: 'legacy',
    },
  ],
};
