# ui

Shared Angular component library with per-app themes.

## Build

```bash
ng build ui
```

Output: `dist/ui/`

## Theme

Import in consuming app:

```scss
@import 'ui/themes/tokens.scss';
```

Activate at bootstrap:

```ts
themeService.setApp('alpha');
themeService.setColorMode('light');
```

## Publish

After building, publish from `dist/ui`.
