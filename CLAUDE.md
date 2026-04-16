# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # dev server on :3000
pnpm build      # production build
pnpm test       # vitest run (single pass)
pnpm lint       # eslint
pnpm check      # prettier write + eslint fix
```

## Stack

- **React 19** + **TypeScript**
- **TanStack Router** (file-based routing, auto-generated `src/routeTree.gen.ts`)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — imported in `src/styles.css` with `@import "tailwindcss"`
- **Vite 8**, path alias `#` → `src/`

## Architecture

- `src/routes/__root.tsx` — root layout: `Header` + `<Outlet />` + `Footer`
- `src/routes/index.tsx` — homepage (single-page site with anchor sections)
- `src/components/` — shared components (`Header`, `Footer`)
- `src/styles.css` — global styles + CSS custom properties (design tokens) + utility classes

## Styling Rules

**Always use Tailwind v4 classes** for styling. No plain CSS files unless adding global tokens or utilities that cannot be expressed as Tailwind classes.

Design tokens live in `src/styles.css` as CSS custom properties (`--sea-ink`, `--lagoon-deep`, etc.). Reference them in Tailwind with `text-[var(--sea-ink)]` syntax.

Reusable CSS utility classes defined in `styles.css` (use as `className`):
- `.page-wrap` — centered max-width container
- `.island-shell` — frosted-glass card surface
- `.display-title` — Fraunces serif heading font
- `.island-kicker` — small-caps label style
- `.nav-link` — nav anchor with underline animation
- `.rise-in` — entry animation

## Component Rules

**Split into components aggressively.** Any section, card, or repeated UI pattern should be its own component in `src/components/`. Route files (`src/routes/`) should compose components, not contain inline JSX blocks.

## Fonts

- Display/headings: `Fraunces` (apply `.display-title` class)
- Body: `Manrope` (default `--font-sans`)
