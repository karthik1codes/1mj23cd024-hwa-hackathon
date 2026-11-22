import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms that come with bringing a PawPal home.",
};

const sections = [
  {
    title: "Buying PawPal",
    body: [
      "Prices are shown in Indian rupees (INR) and include applicable taxes unless stated otherwise. We accept major cards, UPI, Apple Pay and Google Pay at launch. An order is confirmed when you receive an order number from us.",
      "We may limit quantities for household use. PawPal is a consumer companion robot, not a medical device or a substitute for training, exercise or veterinary care.",
    ],
  },
  {
    title: "Shipping and the 30-night trial",
    body: [
      "Orders placed before 2pm ship the same business day, with free carbon-neutral delivery in 3–5 business days. Delivery estimates are estimates, not promises.",
      "You have 30 nights from delivery to try PawPal. If your dog is not happier and calmer, contact us for a full refund and we will cover return shipping. We ask that you give the routine a fair two weeks.",
    ],
  },
  {
    title: "Warranty and Care+",
    body: [
      "PawPal One includes a one-year limited warranty. PawPal Pro and Pack include a two-year limited warranty covering manufacturing defects.",
      "PawPal Care+ is an optional annual plan covering accidental damage and priority support. It can be cancelled at any time and is not insurance.",
    ],
  },
  {
    title: "Using PawPal safely",
    body: [
      "PawPal is designed for supervised and semi-supervised home use with dogs. It is not chew-proof. Introduce it gently, keep charging cables away from curious teeth, and use the app's comfort settings for nervous dogs.",
      "Do not use PawPal outdoors unattended, near water, or with dogs under 3kg without checking the play settings first.",
    ],
  },
  {
    title: "Changes and contact",
    body: [
      "We may update these terms as the product grows. Material changes will be shared in the app before they take effect. Questions? hello@pawpal.dog.",
    ],
  },
];

export default function TermsPage() {
  return (
    <article>
      <span className="eyebrow">Legal</span>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-forest-950 sm:text-5xl">
        The fine print, kept friendly.
      </h1>
      <p className="mt-4 text-[0.9rem] text-forest-900/50">Last updated 1 November 2026</p>

      <div className="mt-10 space-y-9">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-2xl font-semibold text-forest-950">{section.title}</h2>
            <div className="mt-3 space-y-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-[0.95rem] leading-relaxed text-forest-900/65">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-forest-900/10 bg-cream-50 p-5 text-[0.8rem] leading-relaxed text-forest-900/50">
        PawPal is a demonstration storefront built for a design showcase. Orders
        placed here are stored only to demonstrate the checkout experience, and
        no payment is collected.
      </div>
    </article>
  );
}
