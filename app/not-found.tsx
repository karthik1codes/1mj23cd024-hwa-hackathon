import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, ShoppingBag } from "lucide-react";

import { Logo, PawMark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page isn't here. Head back to PawPal and find what you need.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-cream-100">
      <header className="border-b border-forest-900/10 bg-cream-100/85 backdrop-blur-xl">
        <div className="container flex h-[4.75rem] items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.8rem] font-semibold text-forest-900/70 transition-colors hover:bg-forest-900/5 hover:text-forest-950"
          >
            <ArrowLeft className="size-4" />
            Back to PawPal
          </Link>
        </div>
      </header>

      <main className="container flex flex-1 flex-col items-center justify-center py-16 text-center">
        <div className="relative">
          <div className="grid size-24 place-items-center rounded-[2rem] bg-forest-900 text-cream-50 shadow-lift">
            <PawMark className="size-12" />
          </div>
          <span className="absolute -right-4 -top-3 rounded-full bg-ember-400 px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-forest-950 shadow-glow">
            404
          </span>
        </div>

        <span className="eyebrow mt-8 justify-center">
          <span className="size-1.5 rounded-full bg-ember-400" /> Wrong turn
        </span>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-forest-950 sm:text-5xl">
          This page went for a <span className="italic text-ember-500">walk.</span>
        </h1>
        <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-forest-900/60">
          We couldn&apos;t find the page you were looking for. Let&apos;s get you
          back to the good stuff — or straight to PawPal.
        </p>

        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Button asChild variant="accent" size="lg">
            <Link href="/">
              <Home /> Back to PawPal
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/order?plan=pro">
              <ShoppingBag /> Shop PawPal
            </Link>
          </Button>
        </div>
      </main>

      <footer className="border-t border-forest-900/10 bg-forest-950 py-6 text-cream-100">
        <div className="container flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-[0.7rem] text-cream-100/40">
            © {new Date().getFullYear()} PawPal Robotics.
          </p>
          <div className="flex items-center gap-5 text-[0.7rem] text-cream-100/40">
            <Link href="/legal/privacy" className="hover:text-cream-50">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-cream-50">Terms</Link>
            <Link href="/legal/accessibility" className="hover:text-cream-50">Accessibility</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
