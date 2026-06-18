# UI Library

Angular component library with Storybook. This repo is **not an application** — it publishes reusable UI components and uses Storybook to develop and document them.

## Develop components (Storybook)

```bash
npm start
```

Opens Storybook at `http://localhost:6006`.

## Build the library

```bash
npm run build
```

Output: `dist/ui/` (publishable package).

## Build Storybook (static site)

```bash
npm run build:storybook
```

Output: `storybook-static/`.

## Project structure

```
projects/ui/src/
├── public-api.ts
└── lib/
    ├── components/     # UI components + *.stories.ts
    ├── themes/
    │   ├── _theme.scss           # mixins that emit CSS variables
    │   ├── tokens.scss           # imports all app presets (import once)
    │   └── presets/
    │       ├── alpha/            # full theme: colors, typography, spacing
    │       ├── beta/
    │       └── charlie/
    └── services/       # shared services (ThemeService)
```

## Theming (multi-app)

Each application (**alpha**, **beta**, **charlie**) owns a **complete theme** — colors, typography, spacing, and radius. Components only read CSS variables; the active app decides their values.

1. Import tokens in the host app:

```scss
@import 'ui/themes/tokens.scss';
```

2. Activate the app at bootstrap:

```ts
import { ThemeService } from 'ui';

themeService.setApp('alpha');       // 'alpha' | 'beta' | 'charlie'
themeService.setColorMode('light'); // 'light' | 'dark'
```

3. To add a new app, copy `presets/alpha/` → `presets/delta/`, define `_tokens.scss`, add `index.scss`, and register it in `tokens.scss`.

In Storybook, use the **Application** and **Color mode** toolbar to compare alpha, beta, and charlie side by side.

## Add a component

```bash
npx ng generate component my-component --project ui --path lib/components --standalone --skip-tests
```

Stories live next to the component as `my-component.stories.ts`.

## Consume the library

```ts
import { ButtonComponent, RadioButtonComponent, ThemeService } from 'ui';
```

## Tests

```bash
npm test
```

Add `*.spec.ts` files alongside components when needed.
