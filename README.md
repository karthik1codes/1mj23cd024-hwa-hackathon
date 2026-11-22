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
- Plans: `one`, `pro`, `pack`. Promos: `GOODBOY`, `PAW10` (10%), `NEIGHBOUR` (5%). Care+ is ₹6,600/year.
- Also: `GET /api/orders`, `GET /api/orders/{orderId}`, `POST /api/subscribe`.

## Payments

Place order creates the order first, then sends the buyer to that plan's Dodo Payments
checkout link. The pricing buttons link straight to the matching checkout:

- PawPal One — <https://test.checkout.dodopayments.com/buy/pdt_0NsVvWmxQBkdS4WiRFmNK?quantity=1>
- PawPal Pro — <https://test.checkout.dodopayments.com/buy/pdt_0NsVwgeJHacBsvk1jmH8W?quantity=1>
- PawPal Pack — <https://test.checkout.dodopayments.com/buy/pdt_0NsVwpHcd9gEgIFrRF5sL?quantity=1>

## Deploy

```bash
vercel --prod
```

Live site: <https://1mj23cd024-hwa-hackathon.vercel.app>
