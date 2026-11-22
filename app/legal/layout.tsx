import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Logo } from "@/components/brand/logo";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream-100">
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
      <main className="container max-w-3xl py-14 sm:py-20">{children}</main>
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
