# Conexiant v2

Angular **22** SSR application for Conexiant v2. UI components come from the sibling `Ui-Library` workspace.

## Location

`Conexiant/v2`

## Related project

| Folder | Purpose |
|--------|---------|
| `../Ui-Library` | `shared-ui` component library + Storybook |
| `v2` (this app) | SSR web application |

## Commands

```bash
npm install

# Build UI library, then the app
npm run build:all

# Dev server (CSR during development)
npm start

# SSR production server (after build:all)
npm run serve:ssr:conexiant-v2
```

## Library integration

`tsconfig.json` maps `shared-ui` to `../Ui-Library/dist/shared-ui`. Run `npm run build:ui` (or `build:all`) whenever library components change.

## SSR

Created with `ng new --ssr`. Server routes are configured in `src/app/app.routes.server.ts`.
