import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { OrderClient } from "@/components/site/order-client";
import type { Plan } from "@/lib/content";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Bring home PawPal — free shipping, a 30-night happiness trial and no subscription.",
};

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  const initialPlanId: Plan["id"] =
    plan === "one" || plan === "pack" || plan === "pro" ? plan : "pro";

  return (
    <div className="min-h-screen bg-cream-100">
      <header className="sticky top-0 z-40 border-b border-forest-900/10 bg-cream-100/85 backdrop-blur-xl">
        <div className="container flex h-[4.75rem] items-center justify-between gap-4">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden items-center gap-2 rounded-full border border-forest-900/10 bg-cream-50 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-forest-900/50 sm:flex">
              <Lock className="size-3.5 text-forest-700" />
              Secure checkout
            </span>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.8rem] font-semibold text-forest-900/70 transition-colors hover:bg-forest-900/5 hover:text-forest-950"
            >
              <ArrowLeft className="size-4" />
              Back to PawPal
            </Link>
          </div>
        </div>
      </header>

      <main className="relative py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-clip">
          <div className="absolute -right-32 top-0 size-[26rem] rounded-full bg-ember-200/40 blur-3xl" />
          <div className="absolute -left-40 top-1/2 size-[24rem] rounded-full bg-forest-200/30 blur-3xl" />
          <div className="paw-pattern absolute inset-x-0 bottom-0 h-64 opacity-25 [mask-image:linear-gradient(to_top,black,transparent)]" />
        </div>

        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-forest-900/40">
            <Link href="/" className="transition-colors hover:text-forest-900/70">
              PawPal
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-forest-900/70">Checkout</span>
          </nav>

          <OrderClient initialPlanId={initialPlanId} />
        </div>
      </main>

      <footer className="border-t border-forest-900/10 bg-forest-950 py-6 text-cream-100">
        <div className="container flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[0.7rem] text-cream-100/40">
            © {new Date().getFullYear()} PawPal Robotics · Made for the goodest boys and girls.
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[0.7rem] text-cream-100/45">
              <ShieldCheck className="size-3.5 text-ember-300" />
              30-night trial
            </span>
            <a href="mailto:hello@pawpal.dog" className="text-[0.7rem] text-cream-100/45 transition-colors hover:text-cream-50">
              hello@pawpal.dog
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
