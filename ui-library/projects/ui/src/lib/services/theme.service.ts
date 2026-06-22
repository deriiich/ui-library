import { Injectable } from '@angular/core';
import { DEFAULT_UI_PRODUCT, UiProductId } from '../theme/ui-product';

export type { UiProductId } from '../theme/ui-product';
export type UiColorMode = 'light' | 'dark';

/** @deprecated Use UiProductId */
export type UiAppId = UiProductId;

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private colorMode: UiColorMode = 'light';
  private productId: UiProductId = DEFAULT_UI_PRODUCT;

  get currentColorMode(): UiColorMode {
    return this.colorMode;
  }

  get currentProductId(): UiProductId {
    return this.productId;
  }

  /** @deprecated Use currentProductId */
  get currentAppId(): UiProductId {
    return this.productId;
  }

  /** Activates a full product theme (colors, typography, spacing, radius). */
  setProduct(productId: UiProductId): void {
    this.productId = productId;
    document.documentElement.setAttribute('data-ui-product', productId);
  }

  /** @deprecated Use setProduct instead. */
  setApp(productId: UiProductId): void {
    this.setProduct(productId);
  }

  /** Switches light/dark within the active product theme. */
  setColorMode(mode: UiColorMode): void {
    this.colorMode = mode;
    document.documentElement.setAttribute('data-ui-theme', mode);
  }

  /** @deprecated Use setColorMode instead. */
  setTheme(mode: UiColorMode): void {
    this.setColorMode(mode);
  }
}
