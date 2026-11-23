import Link from "next/link";
import { ArrowUpRight, ScanFace, SlidersHorizontal, Sunrise, ToyBrick } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Meet & learn",
    tag: "First 48 hours",
    copy: "PawPal maps your dog's routine, favourite games and comfort level. Slow and steady wins every tail.",
    icon: ScanFace,
  },
  {
    number: "02",
    title: "Set the rhythm",
    tag: "2 minutes",
    copy: "Choose play windows, treat limits and voice prompts in the app — or let PawPal plan a balanced day for you.",
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Play together, apart",
    tag: "All day",
    copy: "The arm teases, the dispenser rewards, your voice cheers. Sessions adapt in real time to energy and mood.",
    icon: ToyBrick,
  },
  {
    number: "04",
    title: "Come home to calm",
    tag: "Every evening",
    copy: "A daily report shows mood, movement and the little wins you missed. Tomorrow's plan is ready before you are.",
    icon: Sunrise,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-forest-900/15 to-transparent" />
        <div className="absolute -left-32 top-1/3 size-96 rounded-full bg-ember-200/40 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="size-1.5 rounded-full bg-ember-400" /> How PawPal works
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-4 max-w-lg">
                A day with PawPal, from hello to <span className="italic text-ember-500">goodnight.</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-forest-900/65">
                Set it up once. PawPal learns the rest — and keeps getting better
                at being your dog&apos;s favourite housemate.
              </p>
            </Reveal>

            <div className="mt-10 space-y-0">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 90}>
                  <div className="group relative flex gap-5 pb-9 last:pb-0">
                    {i < steps.length - 1 && (
                      <span className="absolute left-[1.45rem] top-12 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-forest-900/20 to-forest-900/5" />
                    )}
                    <div className="relative shrink-0">
                      <span className="grid size-12 place-items-center rounded-2xl border border-forest-900/10 bg-cream-50 text-forest-800 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-ember-400/40 group-hover:bg-ember-50 group-hover:text-ember-600">
                        <step.icon className="size-5" />
                      </span>
                    </div>
                    <div className="pt-0.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-display text-xs font-semibold text-forest-900/35">{step.number}</span>
                        <h3 className="font-display text-xl font-semibold text-forest-950">{step.title}</h3>
                        <span className="rounded-full border border-forest-900/10 bg-cream-200/60 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-forest-900/50">
                          {step.tag}
                        </span>
                      </div>
                      <p className="mt-1.5 max-w-md text-[0.9rem] leading-relaxed text-forest-900/60">{step.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <Button asChild variant="outline" className="mt-8">
                <Link href="#features">
                  Explore every feature
                  <ArrowUpRight />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={180} className="relative lg:sticky lg:top-28">
            {/* phone reference image */}
            <img src="/phone.png" alt="The PawPal app on a phone, from hello to goodnight" className="h-auto w-full rounded-[2rem] border border-white/15 bg-forest-950 object-cover shadow-lift" />
            <p className="mt-8 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-forest-900/40">
              The PawPal app · included with every robot
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
