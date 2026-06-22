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

export const betaFoundation: ProductFoundationConfig = {
  id: 'beta',
  displayName: 'Beta',
  semanticColorTokens,
  textColorTokens: [...textColorTokens],
  fontSizeTokens,
  fontWeightTokens,
  lineHeightTokens,
  spacingTokens,
  radiusTokens,
};
