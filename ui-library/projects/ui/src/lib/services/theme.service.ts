import { Injectable } from '@angular/core';

export type UiAppId = 'alpha' | 'beta' | 'charlie';
export type UiColorMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private colorMode: UiColorMode = 'light';
  private appId: UiAppId = 'alpha';

  get currentColorMode(): UiColorMode {
    return this.colorMode;
  }

  get currentAppId(): UiAppId {
    return this.appId;
  }

  /** Activates a full app theme (colors, typography, spacing, radius). */
  setApp(appId: UiAppId): void {
    this.appId = appId;
    document.documentElement.setAttribute('data-ui-app', appId);
  }

  /** Switches light/dark within the active app theme. */
  setColorMode(mode: UiColorMode): void {
    this.colorMode = mode;
    document.documentElement.setAttribute('data-ui-theme', mode);
  }

  /** @deprecated Use setColorMode instead. */
  setTheme(mode: UiColorMode): void {
    this.setColorMode(mode);
  }
}
