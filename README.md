# PawPal — They're never really alone

PawPal is a friendly AI dog companion robot that keeps a dog entertained, cared for and company while its humans are away. The live site is a product marketing page, an interactive product experience, a checkout flow and a small order API.

## Highlights

- Custom hero illustration with live view, insight, treat and voice overlays.
- Interactive robot playground with tap-to-play behaviours.
- Product film dialog with three chapters and autoplay controls.
- App mockup, features, benefits, specs, testimonials, pricing and FAQ.
- Checkout flow with plan selection, quantity, Care+ and promo codes.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS 3.
- shadcn-style UI components, `lucide-react`, `next/font/google` (Fraunces + Plus Jakarta Sans).

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Production commands: `npm run build` and `npm run start`.

## Order API

- `POST /api/orders` — accepts JSON or form data, returns `201` with the created order.
- Plans: `one`, `pro`, `pack`. Promos: `GOODBOY`, `PAW10` (10%), `NEIGHBOUR` (5%). Care+ is $79/year.
- Also: `GET /api/orders`, `GET /api/orders/{orderId}`, `POST /api/subscribe`.

## Payments

The checkout uses Razorpay. Place order creates the order first, then sends the buyer to the
Razorpay payment page (`https://rzp.io/rzp/EmkqcKw`) or opens the Razorpay checkout modal when
`NEXT_PUBLIC_RAZORPAY_KEY_ID` is configured.

## Deploy

```bash
vercel --prod
```

Live site: <https://1mj23cd024-hwa-hackathon.vercel.app>
