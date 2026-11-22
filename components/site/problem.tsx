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

function WaitingWindow() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-forest-900/60 p-3 shadow-lift">
      <svg viewBox="0 0 420 330" className="block h-auto w-full rounded-[1.5rem]" role="img" aria-label="A quiet room with rain at the window, a leash and a waiting ball">
        <defs>
          <linearGradient id="wait-room" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#123B2C" />
            <stop offset="1" stopColor="#082018" />
          </linearGradient>
          <linearGradient id="wait-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5F8A78" />
            <stop offset="1" stopColor="#9DB8A4" />
          </linearGradient>
          <linearGradient id="wait-light" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F6E3BC" stopOpacity="0.55" />
            <stop offset="1" stopColor="#F6E3BC" stopOpacity="0" />
          </linearGradient>
          <clipPath id="wait-arch">
            <path d="M150 250 L150 138 A60 60 0 0 1 270 138 L270 250 Z" />
          </clipPath>
        </defs>
        <rect width="420" height="330" fill="url(#wait-room)" />
        <rect y="248" width="420" height="82" fill="#071F17" />
        <path d="M150 250 L150 138 A60 60 0 0 1 270 138 L270 250 Z" fill="url(#wait-sky)" />
        <g clipPath="url(#wait-arch)">
          <circle cx="236" cy="120" r="16" fill="#F7E9CB" opacity="0.9" />
          <path d="M120 200 C150 178 190 186 214 200 C238 214 272 200 300 188 L300 260 L120 260 Z" fill="#41685A" opacity="0.75" />
          <g stroke="#DCEBE0" strokeWidth="2" strokeLinecap="round" opacity="0.5">
            <path d="M168 140 L160 168" />
            <path d="M190 120 L182 150" />
            <path d="M216 146 L208 174" />
            <path d="M242 126 L234 154" />
            <path d="M180 190 L172 218" />
            <path d="M226 186 L218 214" />
            <path d="M252 166 L244 194" />
          </g>
        </g>
        <path d="M150 250 L150 138 A60 60 0 0 1 270 138 L270 250 Z" fill="none" stroke="#F6EBD8" strokeWidth="7" />
        <path d="M210 78 L210 250" stroke="#F6EBD8" strokeWidth="4" opacity="0.9" />
        <path d="M150 180 L270 180" stroke="#F6EBD8" strokeWidth="4" opacity="0.9" />
        <path d="M138 250 L282 250 L282 258 L138 258 Z" fill="#F6EBD8" />
        <path d="M150 260 L270 260 L320 330 L100 330 Z" fill="url(#wait-light)" />

        {/* leash on hook */}
        <g>
          <circle cx="344" cy="128" r="4" fill="#C98A5B" />
          <path d="M344 132 C344 168 328 176 334 210 C338 234 348 246 344 268" stroke="#C98A5B" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M334 268 C330 280 340 288 350 282" stroke="#C98A5B" strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>

        {/* bowl */}
        <g>
          <ellipse cx="92" cy="294" rx="34" ry="9" fill="#04120D" opacity="0.6" />
          <path d="M62 282 L122 282 L116 300 C114 305 106 307 92 307 C78 307 70 305 68 300 Z" fill="#D9C9AE" />
          <ellipse cx="92" cy="282" rx="30" ry="7" fill="#164936" />
          <ellipse cx="92" cy="283" rx="22" ry="4.5" fill="#7FB6C9" opacity="0.7" />
        </g>

        {/* ball */}
        <circle cx="214" cy="292" r="13" fill="#D65E1E" />
        <path d="M203 287 C210 294 218 297 224 294" stroke="#FBE7C4" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* clock */}
        <g>
          <circle cx="66" cy="86" r="22" fill="#F6EBD8" opacity="0.92" />
          <circle cx="66" cy="86" r="22" fill="none" stroke="#C98A5B" strokeWidth="3" />
          <path d="M66 74 L66 87 L76 92" stroke="#0B2B20" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/10 bg-forest-950/60 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2 text-cream-100/70">
          <Timer className="size-4 text-ember-300" />
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em]">The quiet hours</span>
        </div>
        <span className="font-display text-lg text-cream-50">2:41 pm</span>
      </div>
    </div>
  );
}

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
            <WaitingWindow />
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
