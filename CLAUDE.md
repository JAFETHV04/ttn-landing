# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ Critical: Read the bundled docs first

This project runs **Next.js 16**, which has breaking changes from prior versions. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`. Do not rely on training-data knowledge of Next.js APIs — they may have changed.

Notable hint from the bundled docs:
> If fixing slow client-side navigations, `Suspense` alone is not enough. You must also export `unstable_instant` from the route. Read `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.mdx` before making changes.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # run ESLint
```

No test runner is configured.

## Architecture

This is a **Next.js App Router** project. All routes and layouts live under `app/`.

- `app/layout.tsx` — root layout; sets HTML/body, loads Geist Sans + Geist Mono via `next/font/google`, applies font CSS variables
- `app/page.tsx` — home route (`/`)
- `app/globals.css` — global styles entry point

## Styling

**Tailwind CSS v4** — the import and theming syntax differ from v3:

```css
/* ✅ v4 — used here */
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --font-sans: var(--font-geist-sans);
}
```

There is no `tailwind.config.js`. Theme tokens are defined inside `globals.css` using `@theme inline`. PostCSS is configured via `postcss.config.mjs` using `@tailwindcss/postcss`.

Dark mode is driven by `prefers-color-scheme` (CSS media query), not a class toggle.

@AGENTS.md
