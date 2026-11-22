import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "How PawPal makes its website and robot usable for more people.",
};

const commitments = [
  {
    title: "A site that works for everyone",
    body: "We aim to meet WCAG 2.2 AA across the PawPal website. Pages are built with semantic headings, keyboard-friendly controls, visible focus states and colour combinations chosen for contrast.",
  },
  {
    title: "Motion you can turn off",
    body: "Animations pause for anyone who sets reduced motion in their operating system. Nothing important depends on animation or hover alone.",
  },
  {
    title: "A robot you can hear and feel",
    body: "PawPal's app supports screen readers, adjustable text sizes and haptic confirmations. The physical chest buttons are large, raised and high-contrast so they are easy to find by touch — for paws and people alike.",
  },
  {
    title: "Tell us what we missed",
    body: "If something is hard to use, we want to fix it. Email hello@pawpal.dog with the page or feature, and we will reply within two business days.",
  },
];

export default function AccessibilityPage() {
  return (
    <article>
      <span className="eyebrow">Legal</span>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-forest-950 sm:text-5xl">
        Good design includes everyone.
      </h1>
      <p className="mt-4 text-[0.9rem] text-forest-900/50">Last updated 1 November 2026</p>

      <div className="mt-10 space-y-9">
        {commitments.map((item) => (
          <section key={item.title}>
            <h2 className="font-display text-2xl font-semibold text-forest-950">{item.title}</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-forest-900/65">{item.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
