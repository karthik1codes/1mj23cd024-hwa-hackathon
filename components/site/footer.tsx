import Link from "next/link";
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";

import { Logo, PawMark } from "@/components/brand/logo";
import { Newsletter } from "@/components/site/newsletter";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "PawPal One", href: "/order?plan=one" },
      { label: "PawPal Pro", href: "/order?plan=pro" },
      { label: "PawPal Pack", href: "/order?plan=pack" },
      { label: "PawPal Care+", href: "#pricing" },
      { label: "Treat refills", href: "#features" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Specifications", href: "#specs" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "hello@pawpal.dog", href: "mailto:hello@pawpal.dog" },
      { label: "Shipping & returns", href: "#faq" },
      { label: "30-night trial", href: "#faq" },
      { label: "Warranty", href: "#specs" },
      { label: "Care+ protection", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "#how-it-works" },
      { label: "The vet council", href: "#benefits" },
      { label: "Sustainability", href: "#specs" },
      { label: "Careers", href: "mailto:hello@pawpal.dog?subject=Careers" },
      { label: "Press", href: "mailto:hello@pawpal.dog?subject=Press" },
    ],
  },
];

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-cream-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 size-80 rounded-full bg-ember-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 size-96 rounded-full bg-forest-400/10 blur-3xl" />
      </div>

      <div className="container relative pt-16 sm:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-cream-100/55">
              The AI companion that keeps your dog entertained, connected and
              cared for while you&apos;re away. Made for the goodest boys and girls.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@pawpal.dog"
                className="inline-flex items-center gap-2 text-[0.82rem] font-semibold text-cream-100/70 transition-colors hover:text-ember-300"
              >
                <Mail className="size-4 text-ember-300" />
                hello@pawpal.dog
              </a>
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`PawPal on ${social.label}`}
                    className="grid size-9 place-items-center rounded-full border border-white/10 text-cream-100/60 transition-colors hover:border-ember-400/40 hover:text-ember-300"
                  >
                    <social.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 sm:p-7">
            <div className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-ember-300">
              <PawMark className="size-4" /> The Good Dog Dispatch
            </div>
            <p className="mt-2 font-display text-xl font-semibold text-cream-50">
              Small joys, delivered monthly.
            </p>
            <p className="mt-1.5 text-[0.82rem] leading-relaxed text-cream-100/50">
              Training tips, dog science and the occasional very good photo.
            </p>
            <Newsletter className="mt-5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-cream-100/35">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.82rem] text-cream-100/60 transition-colors hover:text-cream-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.7rem] text-cream-100/35">
            © {new Date().getFullYear()} PawPal Robotics. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/legal/privacy" className="text-[0.7rem] text-cream-100/35 transition-colors hover:text-cream-100/70">
              Privacy
            </Link>
            <Link href="/legal/terms" className="text-[0.7rem] text-cream-100/35 transition-colors hover:text-cream-100/70">
              Terms
            </Link>
            <Link href="/legal/privacy" className="text-[0.7rem] text-cream-100/35 transition-colors hover:text-cream-100/70">
              Accessibility
            </Link>
            <span className="text-[0.7rem] text-cream-100/25">A companion, not a replacement for walks or vet care.</span>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-[2.5vw] translate-y-[12%] text-center font-display text-[24vw] font-semibold leading-[0.7] tracking-[-0.05em] text-cream-50/[0.035]">
          PawPal
        </p>
      </div>
    </footer>
  );
}
