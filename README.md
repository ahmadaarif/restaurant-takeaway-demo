# Karachi Kitchen Manchester — Restaurant Takeaway Demo

A polished, mobile-first demo website for a fictional Pakistani restaurant & takeaway on Manchester's Curry Mile. Built as a portfolio piece to show real restaurant prospects (Wilmslow Road, Rusholme, Longsight, Fallowfield) what a modern site *could* look like for them.

> **Note:** This is a demo. No real payments, no real database, no real emails. All forms submit to placeholders and orders show a fake confirmation page.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ahmadaarif/restaurant-takeaway-demo)

---

## What's inside

| Page | Path | What it does |
|------|------|--------------|
| Home | `/` | Hero, featured dishes carousel, why-us, opening hours, reviews, map |
| Menu | `/menu` | 23 Pakistani dishes across 7 categories with allergens, spice levels, add-to-cart, hover-to-enlarge |
| Order Online | `/order` | Delivery/collection toggle, validated checkout, fake confirmation with order number |
| Book a Table | `/book` | Date → party size → time slots → contact form |
| About | `/about` | Family story (1962 → today), timeline, team, kitchen photos |
| Contact | `/contact` | Quick-action tiles, contact form, map placeholder, FAQ |

### Cross-page features
- Persistent cart with `localStorage` (Zustand)
- Sticky mobile "Order Online" button
- Slide-in cart drawer accessible anywhere
- Schema.org `Restaurant` structured data
- Transparent-on-hero / solid-on-scroll navbar

---

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** components
- **Zustand** for cart state (with localStorage persistence)
- **react-hook-form** + **zod** for form validation
- **next/image** for all photos
- **Playfair Display** (headings) + **Inter** (body) via `next/font`

### Brand palette
| Token | Hex | Used for |
|-------|-----|----------|
| Maroon | `#7C1F2E` | Primary, headings on light bg |
| Cream | `#FFFDF9` | Page background |
| Cream Dark | `#E2D5BE` | Borders, hover surfaces |
| Gold | `#C9A961` | Accents, "popular" badges |
| Ink | `#2C1810` | Body text |

Deliberately avoids pure black, pure white, and the typical garish "curry house red".

---

## Running locally

```bash
git clone https://github.com/ahmadaarif/restaurant-takeaway-demo.git
cd restaurant-takeaway-demo
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Swapping in real client photos

All Unsplash placeholder URLs are tagged with `SWAP IN` comments. To find them:

```bash
grep -r "SWAP IN" src/
```

Replace each `https://images.unsplash.com/...` with the client's photo URL (or import from `/public/images/`). Files to touch:

- `src/lib/menu-data.ts` — dish thumbnails
- `src/components/HeroSection.tsx` — home hero
- `src/app/about/page.tsx` — story, team, kitchen photos
- `src/app/book/page.tsx` — booking hero
- `src/components/ReviewsSection.tsx` — reviewer avatars

---

## What's intentionally *not* wired up

This is a sales demo, not a production system. Skipped on purpose:

- Stripe / real payments — the "Place Order" button skips straight to confirmation
- Real email sending — confirmations are simulated client-side
- Database — order snapshots go to `sessionStorage`
- Auth — there's no login because takeaway customers don't need accounts
- Real Google Maps embed — placeholder card with directions link

Each of these is a 1-2 day add-on conversation to have with the prospect.

---

## Deploying

The easiest path is Vercel (one click via the button at the top of this README). Other hosts that support Next.js 14 App Router work too — Netlify, Cloudflare Pages, self-hosted Node.

---

## License

MIT — feel free to fork and re-skin for your own restaurant prospects. The dish names, team biographies, and brand story are fictional.
