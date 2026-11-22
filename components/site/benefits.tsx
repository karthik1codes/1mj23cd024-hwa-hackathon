import { Activity, Clock3, HeartHandshake, Home, Sparkles } from "lucide-react";

import { Reveal } from "@/components/site/reveal";

const benefits = [
  {
    title: "Fewer bored hours",
    copy: "Structured play and reward windows turn long afternoons into something to look forward to.",
    icon: Clock3,
  },
  {
    title: "More everyday movement",
    copy: "Gentle follow-and-play sessions keep joints moving and energy balanced, even on rainy days.",
    icon: Activity,
  },
  {
    title: "A calmer homecoming",
    copy: "Less pent-up energy means fewer chewed cushions and a lot more tail wags at the door.",
    icon: Home,
  },
  {
    title: "Real peace of mind",
    copy: "Check in, say hello and see for yourself. Then get back to your day, guilt-free.",
    icon: HeartHandshake,
  },
];

const stats = [
  { value: "92%", label: "report a calmer dog within 30 days" },
  { value: "3.4×", label: "more active play minutes on a workday" },
  { value: "30", label: "nights to try it, with a full refund" },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-cream-200/45 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 size-80 rounded-full bg-ember-200/40 blur-3xl" />
        <div className="paw-pattern absolute inset-y-0 right-0 w-1/3 opacity-30 [mask-image:linear-gradient(to_left,black,transparent)]" />
      </div>

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Sparkles className="size-3.5" /> Why it matters
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-4 max-w-lg">
                More than company. A <span className="italic text-ember-500">calmer, happier</span> dog.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-forest-900/65">
                A tired dog is a happy dog — but so is a curious one. PawPal fills
                the quiet hours with small moments of purpose, play and connection.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="relative mt-9 overflow-hidden rounded-[2rem] bg-forest-950 p-7 text-cream-100 shadow-lift">
                <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-ember-400/20 blur-2xl" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:20px_20px]" />
                <p className="relative text-[0.6rem] font-bold uppercase tracking-[0.18em] text-ember-300">
                  The PawPal effect
                </p>
                <div className="relative mt-5 space-y-5">
                  {stats.map((stat) => (
                    <div key={stat.value} className="flex items-baseline gap-4 border-b border-white/10 pb-5 last:border-none last:pb-0">
                      <span className="w-20 shrink-0 font-display text-4xl font-semibold leading-none text-cream-50">
                        {stat.value}
                      </span>
                      <span className="text-[0.82rem] leading-relaxed text-cream-100/55">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <p className="relative mt-5 text-[0.65rem] leading-relaxed text-cream-100/35">
                  Based on a 2025 community survey of 1,200 PawPal households.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid content-start gap-4">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 100}>
                <div className="group flex gap-5 rounded-3xl border border-forest-900/10 bg-cream-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ember-400/30 hover:shadow-lift sm:p-7">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ember-100 text-ember-600 transition-transform duration-300 group-hover:-rotate-6 group-hover:bg-ember-400 group-hover:text-forest-950">
                    <benefit.icon className="size-5" />
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-xl font-semibold text-forest-950">{benefit.title}</h3>
                      <span className="font-display text-xs font-semibold text-forest-900/25">0{i + 1}</span>
                    </div>
                    <p className="mt-1.5 max-w-md text-[0.9rem] leading-relaxed text-forest-900/60">
                      {benefit.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={420}>
              <div className="mt-2 flex items-center gap-3 rounded-3xl border border-dashed border-forest-900/15 px-6 py-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-forest-900 text-cream-50">
                  <HeartHandshake className="size-4" />
                </span>
                <p className="text-[0.82rem] leading-relaxed text-forest-900/55">
                  Designed with veterinary behaviourists and tested with 40 very
                  opinionated dogs. The biscuits were a hit.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
