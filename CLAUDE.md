# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (also runs TypeScript and lint checks)
npm run start    # serve production build
npm run lint     # ESLint
```

There are no tests configured. TypeScript type-checking runs as part of `npm run build`.

## Architecture

Single-page Next.js 15 (App Router) site with no backend — all content is static, all interactivity is client-side.

**Key files:**
- `app/page.tsx` — the entire site. One long scrolling page with five sections: Hero, The Problem, Where We've Given Up, The Conviction, Join. Add or reorder sections here.
- `components/waving-flag.tsx` — canvas-based American flag animation. Draws the flag offscreen at 1900×1000, then re-draws it column-by-column each frame with a sine-wave vertical offset that grows from left (pinned) to right (free end). Uses a `ResizeObserver` to keep the canvas sized to its container. No external dependencies.
- `components/email-signup.tsx` — form UI only. The `handleSubmit` function currently just sets local state to `"submitted"`. Wire up a real email service here (e.g. Resend, ConvertKit API route).
- `components/nav.tsx` — fixed transparent nav, accepts `onJoinClick` prop to scroll to the join section.

**Styling:** Tailwind CSS 3 with two custom CSS utilities (`text-dim-1/2/3`) defined in `globals.css`. No shadcn/ui or Radix — keep it that way unless a component genuinely needs it. The `cn()` helper in `lib/utils.ts` (clsx + tailwind-merge) is available if needed.

**Fonts:** Playfair Display (`font-serif`) for headlines, Inter (`font-sans`) for body. Both loaded via `next/font/google` in `layout.tsx`.

**`suppressHydrationWarning`** is set on `<html>` in `layout.tsx` to silence Dark Reader extension false positives — do not remove it.

## Deploying

Target domain is `re-open.us`. The project is Vercel-ready (`next build` produces a standard App Router output). No environment variables are currently required.

When an email backend is added, it will need a `RESEND_API_KEY` (or equivalent) environment variable and a `app/api/subscribe/route.ts` API route.
