import type { Metadata } from "next";
import Link from "next/link";

import { AuthForm } from "@/components/site/auth-form";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sign in · PawPal",
  description: "Sign in to your PawPal account.",
};

export default function SigninPage() {
  return (
    <div className="min-h-screen bg-cream-100">
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
            <span className="text-forest-900/70">Sign in</span>
          </nav>

          <AuthForm mode="signin" />
        </div>
      </main>
    </div>
  );
}
