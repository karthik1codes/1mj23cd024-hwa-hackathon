import Link from "next/link";
import { Check, ShoppingBag, Sparkles } from "lucide-react";

import { PawMark } from "@/components/brand/logo";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

const checks = ["Free shipping", "30-night trial", "No subscription"];

export function FinalCta() {
  return (
    <section className="relative py-8 sm:py-14">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-950 px-6 py-14 text-cream-100 shadow-lift sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 top-0 size-[26rem] rounded-full bg-ember-500/20 blur-3xl" />
              <div className="absolute bottom-0 right-0 size-[30rem] rounded-full bg-forest-400/15 blur-3xl" />
              <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:22px_22px]" />
              <div className="absolute -right-10 -top-10 rotate-12 text-ember-300/10">
                <PawMark className="size-64" />
              </div>
            </div>

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-cream-100/70">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-400 opacity-70" />
                    <span className="relative inline-flex size-2 rounded-full bg-ember-400" />
                  </span>
                  PawPal One · now shipping
                </span>
                <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-cream-50 sm:text-5xl lg:text-[3.7rem]">
                  Their best day starts while you&apos;re <span className="italic text-ember-300">away.</span>
                </h2>
                <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-cream-100/60">
                  Bring home the companion that plays, comforts and keeps them
                  company — so alone time never feels lonely again.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild variant="accent" size="lg" className="group">
                    <Link href="/order?plan=pro">
                      <ShoppingBag className="transition-transform duration-300 group-hover:-rotate-6" />
                      Buy PawPal now
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/20 text-cream-50 hover:border-white/40 hover:bg-white/5">
                    <Link href="#pricing">See pricing</Link>
                  </Button>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {checks.map((check) => (
                    <span key={check} className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-cream-100/55">
                      <span className="grid size-4 place-items-center rounded-full bg-ember-400/20">
                        <Check className="size-2.5 text-ember-300" />
                      </span>
                      {check}
                    </span>
                  ))}
                </div>
              </div>

              {/* best day reference image */}
              <img src="/best-day.png" alt="Their best day starts while you are away" className="h-auto w-full rounded-[2rem] border border-white/15 bg-forest-950 object-cover shadow-lift" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
