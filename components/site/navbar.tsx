"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, RotateCcw, ShieldCheck, ShoppingBag, Sparkles, Truck, X } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Specs", href: "#specs" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const marqueeItems = [
  { icon: Truck, label: "Free carbon-neutral shipping" },
  { icon: RotateCcw, label: "30-night happiness trial" },
  { icon: ShieldCheck, label: "2-year warranty on Pro" },
  { icon: Sparkles, label: "Vet-designed play routines" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="relative z-50 overflow-hidden bg-forest-950 py-2 text-cream-100">
        <div className="flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-12 pr-12"
            >
              {marqueeItems.map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-cream-100/80"
                >
                  <item.icon className="size-3.5 text-ember-300" />
                  {item.label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-forest-900/10 bg-cream-100/85 shadow-[0_10px_30px_-20px_rgba(18,33,27,0.5)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container flex h-[4.75rem] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[0.82rem] font-semibold text-forest-900/70 transition-colors hover:bg-forest-900/5 hover:text-forest-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
              <Link href="/order?plan=pro">
                <ShoppingBag />
                Buy PawPal
              </Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full border border-forest-900/15 bg-cream-50/70 text-forest-950 transition-colors hover:bg-cream-50 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "overflow-hidden border-forest-900/10 bg-cream-100/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
            open ? "max-h-[32rem] border-t opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav aria-label="Mobile navigation" className="container flex flex-col gap-1 py-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-display text-xl font-medium text-forest-950 transition-colors hover:bg-forest-900/5"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="accent" size="lg" className="mt-3 w-full">
              <Link href="/order?plan=pro" onClick={() => setOpen(false)}>
                <ShoppingBag />
                Buy PawPal
              </Link>
            </Button>
            <p className="mt-2 flex items-center justify-center gap-2 text-xs text-forest-900/55">
              <Truck className="size-4" /> Free shipping · 30-night trial
            </p>
          </nav>
        </div>
      </header>
    </>
  );
}
