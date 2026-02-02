# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start Next.js dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Next.js 16** (App Router) with React 19 and TypeScript 5
- **Tailwind CSS 4** with PostCSS
- **Path alias:** `@/*` maps to `./src/*`

## Architecture

### Component Organization

- `src/components/ui/` — Reusable atoms (Button, Card, Container)
- `src/components/layout/` — Layout components (Header, Footer, Section)
- Each directory has `index.ts` barrel exports for clean imports

### Design System

CSS variables defined in `src/app/globals.css`:
- Color tokens: `--color-primary`, `--color-secondary`, `--color-accent`
- Spacing scale: `--spacing-xs` through `--spacing-3xl`
- Border radius: `--radius-sm` through `--radius-full`
- Transitions: `--transition-fast`, `--transition-base`, `--transition-slow`
- Full dark mode support via `prefers-color-scheme`

### Component Patterns

- TypeScript interfaces for all component props
- Tailwind classes with CSS variables for theming
- Conditional class composition using template literals
- Multi-variant components (e.g., Button supports primary/secondary/outline variants and sm/md/lg sizes)

## Project Context

- French-language portfolio site (HTML `lang="fr"`)
- Uses Geist and Geist Mono fonts via next/font
- Mobile-first responsive design with Tailwind breakpoints
