import Link from "next/link";
import {
  Check,
  HeartPulse,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

import { PawMark } from "@/components/brand/logo";
import { HeroScene } from "@/components/site/hero-scene";
import { WatchFilm } from "@/components/site/watch-film";
import { Button } from "@/components/ui/button";

const proof = [
  { initials: "PS", className: "bg-ember-200 text-ember-700" },
  { initials: "DR", className: "bg-forest-200 text-forest-800" },
  { initials: "AK", className: "bg-cream-300 text-forest-800" },
  { initials: "MB", className: "bg-forest-700 text-cream-50" },
];

const assurances = [
  { icon: Truck, label: "Free shipping" },
  { icon: RotateCcw, label: "30-night trial" },
  { icon: ShieldCheck, label: "2-year warranty" },
  { icon: HeartPulse, label: "Vet-designed" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-4 pt-6 sm:pt-12 lg:pb-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(240,138,75,0.24),transparent_65%)] blur-2xl" />
        <div className="absolute -left-48 top-40 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(30,92,69,0.16),transparent_65%)] blur-2xl" />
        <div className="paw-pattern absolute inset-x-0 bottom-0 h-72 opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>

      <div className="container">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.02fr_1.1fr] lg:gap-10 xl:gap-16">
          <div className="relative z-10 max-w-xl">
            <div
              className="animate-in fade-in slide-in-from-bottom-4 inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-cream-50/80 py-1.5 pl-1.5 pr-4 shadow-soft backdrop-blur duration-700"
              style={{ animationDelay: "40ms", animationFillMode: "both" }}
            >
              <span className="grid size-7 place-items-center rounded-full bg-forest-900 text-cream-50">
                <Sparkles className="size-3.5" />
              </span>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-forest-800">
                Meet PawPal · AI companion for dogs
              </span>
            </div>

            <h1
              className="animate-in fade-in slide-in-from-bottom-5 mt-5 font-display text-[3.35rem] font-semibold leading-[0.92] tracking-[-0.045em] text-forest-950 duration-700 sm:text-[4.4rem] lg:text-[4.9rem] xl:text-[5.4rem]"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              They&apos;re
              <br />
              <span className="italic text-forest-700">never</span> really
              <br />
              <span className="underline-swoop">alone</span>
            </h1>

            <p
              className="animate-in fade-in slide-in-from-bottom-5 mt-5 max-w-md text-[1.05rem] leading-relaxed text-forest-900/70 duration-700 sm:text-lg"
              style={{ animationDelay: "220ms", animationFillMode: "both" }}
            >
              Meet PawPal — the intelligent companion that keeps your dog
              entertained, connected and cared for while you&apos;re away.
            </p>

            <div
              className="animate-in fade-in slide-in-from-bottom-5 mt-6 flex flex-col gap-3 sm:mt-8 duration-700 sm:flex-row sm:items-center"
              style={{ animationDelay: "320ms", animationFillMode: "both" }}
            >
              <Button asChild variant="accent" size="lg" className="group">
                <Link href="/order?plan=pro">
                  <ShoppingBag className="transition-transform duration-300 group-hover:-rotate-6" />
                  Buy now
                </Link>
              </Button>
              <WatchFilm />
            </div>

            <div
              className="animate-in fade-in slide-in-from-bottom-5 mt-6 flex flex-wrap items-center gap-x-6 sm:mt-8 gap-y-4 duration-700"
              style={{ animationDelay: "420ms", animationFillMode: "both" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {proof.map((person) => (
                    <span
                      key={person.initials}
                      className={`grid size-9 place-items-center rounded-full border-2 border-cream-100 text-[0.6rem] font-bold ${person.className}`}
                    >
                      {person.initials}
                    </span>
                  ))}
                  <span className="grid size-9 place-items-center rounded-full border-2 border-cream-100 bg-forest-900 text-cream-50">
                    <PawMark className="size-4" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-0.5" aria-label="Rated 4.9 out of 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-ember-400 text-ember-400" />
                    ))}
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-forest-900/60">
                    <span className="font-bold text-forest-950">4.9</span> from 2,400+ dog parents
                  </p>
                </div>
              </div>
            </div>

            <div
              className="animate-in fade-in slide-in-from-bottom-5 mt-5 flex flex-wrap items-center gap-x-5 sm:mt-7 gap-y-2 duration-700"
              style={{ animationDelay: "520ms", animationFillMode: "both" }}
            >
              {["Ships in 24 hours", "No subscription", "Made for every breed"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-[0.72rem] font-semibold text-forest-900/55">
                  <span className="grid size-4 place-items-center rounded-full bg-forest-900/10">
                    <Check className="size-2.5 text-forest-700" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            className="animate-in fade-in zoom-in-95 relative mt-2 duration-1000 sm:mt-0"
            style={{ animationDelay: "180ms", animationFillMode: "both" }}
          >
            <HeroScene />
            <video
              src="/pawpal.mp4"
              className="absolute -z-10 inset-0 h-full w-full rounded-[2rem] bg-cream-200 object-cover sm:rounded-[2.5rem]"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:mt-16 gap-x-4 gap-y-5 border-y border-forest-900/10 py-6 sm:mt-16 sm:grid-cols-4">
          {assurances.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5 text-center sm:justify-start">
              <span className="grid size-9 place-items-center rounded-full bg-cream-50 text-forest-700 shadow-sm ring-1 ring-forest-900/5">
                <item.icon className="size-4" />
              </span>
              <span className="text-[0.78rem] font-semibold text-forest-900/70">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
