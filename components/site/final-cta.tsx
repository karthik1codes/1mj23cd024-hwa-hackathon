import Link from "next/link";
import { Check, ShoppingBag, Sparkles, Star } from "lucide-react";

import { PawMark } from "@/components/brand/logo";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

const checks = ["Free shipping", "30-night trial", "No subscription"];

function PeekingRobot() {
  return (
    <div className="relative hidden h-full min-h-[22rem] items-end justify-center lg:flex">
      <div className="absolute bottom-10 left-6 animate-float rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-ember-300">PawPal says</p>
        <p className="mt-0.5 font-display text-lg text-cream-50">Ready when you are.</p>
      </div>

      <div className="absolute bottom-24 right-4 animate-float-slow text-ember-300/60">
        <PawMark className="size-8" />
      </div>
      <div className="absolute right-24 top-10 animate-float text-ember-300/30" style={{ animationDelay: "1.2s" }}>
        <PawMark className="size-5" />
      </div>

      <div className="relative w-[19rem] translate-y-14 rotate-[-7deg]">
        <div className="mx-auto mb-1 h-10 w-1.5 rounded-full bg-white/30">
          <span className="absolute -top-1 left-1/2 size-4 -translate-x-1/2 rounded-full bg-ember-400 shadow-[0_0_26px_8px_rgba(240,138,75,0.5)]" />
        </div>
        <div className="relative">
          <span className="absolute -left-3 top-20 z-0 h-20 w-4 rounded-full bg-[#F8F4EC]" />
          <span className="absolute -right-3 top-20 z-0 h-20 w-4 rounded-full bg-[#F8F4EC]" />
          <div className="relative z-10 rounded-[4rem] border border-white/40 bg-gradient-to-br from-white via-[#F8F4EC] to-[#D9D2C4] p-4 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-b from-[#174535] to-[#071F17] px-6 pb-8 pt-10">
              <div className="flex items-center justify-center gap-9">
                <span className="animate-blink block h-10 w-5 rounded-full bg-ember-300 shadow-[0_0_22px_rgba(246,169,110,0.7)]" style={{ animationDuration: "6s" }} />
                <span className="animate-blink block h-10 w-5 rounded-full bg-ember-300 shadow-[0_0_22px_rgba(246,169,110,0.7)]" style={{ animationDuration: "6s" }} />
              </div>
              <div className="mx-auto mt-5 h-2 w-14 rounded-full bg-ember-300/80" />
              <span className="absolute right-5 top-5 size-2 rounded-full bg-forest-300" />
            </div>
            <div className="mt-4 rounded-[2.2rem] bg-[#FBF5E9] p-4">
              <div className="flex items-center justify-center gap-4">
                <span className="grid size-11 place-items-center rounded-full bg-forest-900 text-cream-50">
                  <PawMark className="size-5" />
                </span>
                <span className="grid size-11 place-items-center rounded-full bg-ember-400 text-forest-950">
                  <Star className="size-4 fill-current" />
                </span>
                <span className="grid size-11 place-items-center rounded-full bg-forest-900 text-cream-50">
                  <Sparkles className="size-4" />
                </span>
              </div>
              <p className="mt-3 text-center text-[0.5rem] font-bold uppercase tracking-[0.2em] text-forest-900/30">
                PawPal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

              <PeekingRobot />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
