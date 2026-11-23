import { Armchair, CameraOff, HeartCrack, Timer, Umbrella } from "lucide-react";

import { Reveal } from "@/components/site/reveal";

const problems = [
  {
    stat: "4–6 hrs",
    label: "alone on an average workday",
    title: "Boredom has a bite",
    copy: "Chewed skirting boards. Shredded cushions. A dog with energy and nowhere to put it will always find a project.",
    icon: Armchair,
  },
  {
    stat: "1 in 3",
    label: "dogs show signs of separation stress",
    title: "Anxiety is quiet",
    copy: "Pacing, whining, the same spot by the door. By the time you notice, they have been waiting a while.",
    icon: HeartCrack,
  },
  {
    stat: "87%",
    label: "of owners wish they could check in more",
    title: "You miss the good bits",
    copy: "The head tilt. The zoomies. The sunbeam nap. The best parts of their day happen while you are gone.",
    icon: CameraOff,
  },
];

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-20 text-cream-100 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 size-96 rounded-full bg-forest-500/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-ember-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Reveal>
              <span className="eyebrow text-ember-300">
                <Umbrella className="size-3.5" /> Why PawPal exists
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.025em] text-cream-50 sm:text-5xl lg:text-[3.6rem]">
                The hardest part of loving a dog is the <span className="italic text-ember-300">leaving.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-cream-100/65">
                You built your life around them. Then work, errands and the world
                pull you away. For a social animal, four quiet walls can feel like
                forever — and the guilt follows you out the door.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pl-6">
            {/* hardest part reference image */}
            <img src="/hardest-part.png" alt="A quiet room where a dog waits by the window while their person is away" className="h-auto w-full rounded-[2rem] border border-white/10 bg-forest-900/60 object-cover shadow-lift" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {problems.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 110}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-3xl font-semibold text-cream-50">{problem.stat}</p>
                    <p className="mt-1 max-w-[11rem] text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.1em] text-cream-100/40">
                      {problem.label}
                    </p>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-ember-400/15 text-ember-300 transition-transform duration-300 group-hover:-rotate-6">
                    <problem.icon className="size-5" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-cream-50">{problem.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-cream-100/55">{problem.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center font-display text-xl italic text-cream-100/50 sm:text-2xl">
            PawPal doesn&apos;t replace you. It keeps the space between hellos warm.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
