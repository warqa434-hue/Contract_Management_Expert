# Building Contract Expert (BCX)

## Overview
A React + TypeScript + Vite frontend application for Building Contract Expert — a UAE-based construction contract review service. The app helps homeowners, developers, and SMEs identify risks, hidden costs, and unfair clauses in building contracts.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Backend/Auth**: Supabase (configured via environment variables)
- **Internationalization**: Custom i18n with LanguageContext (English/Arabic)

## Project Structure
- `src/App.tsx` — Main router with all page routes
- `src/pages/` — Page components (Home, About, Portfolio, Contact, HowWeWork, HOWWEPROTECTYOU and sub-pages)
- `src/components/` — Shared UI components (Layout, etc.)
- `src/contexts/` — React contexts (LanguageContext for i18n)
- `src/i18n/` — Translation files
- `src/lib/` — Utilities and Supabase client

## Running the App
- **Dev**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Environment Variables
If Supabase features are used, the following env vars are needed:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Replit Configuration
- Vite dev server configured to listen on `0.0.0.0:5000` with `allowedHosts: true` for Replit's proxied preview pane.
- Deployment: autoscale, build with `npm run build`, run with `node ./dist/index.cjs`.
