# re-open.us

Civic engagement landing page challenging political apathy and calling for renewed democratic participation.

**Live site:** https://reopen.us &nbsp;·&nbsp; **GitHub:** https://github.com/DiogenesofAthens/reopen

---

## Tech Stack

- **Next.js 15** — App Router, static export, no backend
- **TypeScript** — throughout
- **Tailwind CSS** — responsive layout with custom typographic utilities
- **Canvas API** — custom waving flag animation (no animation libraries)
- **next/font** — Playfair Display and Inter loaded at build time

---

## Running Locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export
```

---

## Key Files

```
app/
  page.tsx               — Full single-page layout: Hero, The Problem,
                           Where We've Given Up, The Conviction, Join
  layout.tsx             — Root layout with font configuration
components/
  waving-flag.tsx        — Canvas flag animation with sine-wave physics
  email-signup.tsx        — Subscriber capture form
  nav.tsx                — Fixed transparent nav with scroll-to-join
```

---

## Flag Animation

The waving flag (`components/waving-flag.tsx`) draws the flag offscreen at 1900×1000, then re-draws it column by column each frame with a sine-wave vertical offset that grows from left (pinned at the staff) to right (free at the fly). A `ResizeObserver` keeps the canvas sized to its container.

---

## Email Signup

The form in `components/email-signup.tsx` is wired for a real email service integration. The `handleSubmit` function currently sets local state to `"submitted"` — swap in a Resend or ConvertKit API route to go live.
