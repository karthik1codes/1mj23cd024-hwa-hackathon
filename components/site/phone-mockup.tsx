import { Bell, Camera, Check, Home, Mic, PawPrint, Sparkles, User, Video } from "lucide-react";

import { PawMark } from "@/components/brand/logo";

const stats = [
  { label: "Play", value: "42m", tone: "bg-ember-100 text-ember-700" },
  { label: "Mood", value: "Calm", tone: "bg-forest-100 text-forest-700" },
  { label: "Treats", value: "6", tone: "bg-cream-300 text-forest-800" },
];

const plan = [
  { time: "9:30", title: "Morning hello", detail: "Voice note · 2 min", done: true },
  { time: "12:00", title: "Tug & treat", detail: "Robotic arm · 12 min", done: true },
  { time: "16:30", title: "Puzzle game", detail: "Reward session", done: false },
  { time: "20:00", title: "Wind-down voice", detail: "Your voice · 3 min", done: false },
];

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative mx-auto w-full max-w-[21rem]">
        <div className="absolute -inset-6 -z-10 rounded-[3.5rem] bg-[radial-gradient(60%_60%_at_60%_30%,rgba(240,138,75,0.3),transparent_70%)] blur-2xl" />

        <div className="relative rounded-[2.9rem] border border-white/15 bg-forest-950 p-2.5 shadow-lift">
          <div className="relative overflow-hidden rounded-[2.35rem] bg-cream-100">
            <div className="absolute left-1/2 top-2.5 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-forest-950" />
            <div className="px-4 pb-3 pt-3">
              <div className="flex items-center justify-between px-1 text-[0.55rem] font-bold text-forest-900/60">
                <span>9:41</span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-3 rounded-[2px] bg-forest-900/50" />
                  <span className="h-2 w-3 rounded-[2px] bg-forest-900/30" />
                  <span className="h-2 w-4 rounded-[3px] border border-forest-900/40" />
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-forest-900/45">
                    Good afternoon, Priya
                  </p>
                  <p className="mt-0.5 font-display text-xl font-semibold text-forest-950">Mango is happy</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-full border border-forest-900/10 bg-cream-50 text-forest-900/60">
                    <Bell className="size-3.5" />
                  </span>
                  <span className="relative grid size-9 place-items-center rounded-full bg-ember-400 text-forest-950">
                    <PawMark className="size-4" />
                    <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-cream-100 bg-emerald-500" />
                  </span>
                </div>
              </div>

              <div className="relative mt-4 h-[8.6rem] overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-[#2E6B52] to-[#0B2B20]">
                <div className="absolute right-4 top-4 size-10 rounded-full bg-[#F7DCA8]/70 blur-[1px]" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-[#164936]" />
                <div className="absolute bottom-5 left-5 h-10 w-16 rounded-t-full bg-[#123B2C]" />
                <div className="absolute bottom-4 left-10 h-8 w-10 rounded-t-full bg-[#0B2B20]" />

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                  <div className="relative flex h-14 w-12 flex-col items-center rounded-[1.1rem] bg-gradient-to-b from-white to-[#E5DED1] p-1 shadow-lg">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-[0.85rem] bg-[#0B2B20]">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-1 rounded-full bg-ember-300" />
                        <span className="h-2 w-1 rounded-full bg-ember-300" />
                      </div>
                      <span className="mt-1 h-0.5 w-3 rounded-full bg-ember-300/70" />
                    </div>
                    <span className="absolute -top-1 size-1.5 rounded-full bg-ember-400" />
                  </div>
                </div>

                <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-forest-950/50 px-2 py-1 backdrop-blur">
                  <span className="size-1.5 animate-pulse rounded-full bg-red-400" />
                  <span className="text-[0.5rem] font-bold uppercase tracking-[0.14em] text-cream-50">Live</span>
                </div>
                <div className="absolute right-3 top-3 rounded-full bg-forest-950/50 px-2 py-1 text-[0.5rem] font-bold text-cream-50/80 backdrop-blur">
                  4K
                </div>

                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                  <span className="rounded-full bg-forest-950/55 px-2.5 py-1 text-[0.55rem] font-semibold text-cream-50/85 backdrop-blur">
                    Living room · 2:41 pm
                  </span>
                  <div className="flex gap-1.5">
                    <span className="grid size-7 place-items-center rounded-full bg-cream-50/90 text-forest-900">
                      <Mic className="size-3" />
                    </span>
                    <span className="grid size-7 place-items-center rounded-full bg-cream-50/90 text-forest-900">
                      <Video className="size-3" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {stats.map((stat) => (
                  <div key={stat.label} className={`rounded-2xl px-3 py-2.5 ${stat.tone}`}>
                    <p className="text-[0.5rem] font-bold uppercase tracking-[0.12em] opacity-60">{stat.label}</p>
                    <p className="font-display text-lg font-semibold leading-tight">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-forest-900/50">Today&apos;s plan</p>
                  <span className="text-[0.55rem] font-semibold text-ember-600">See all</span>
                </div>
                <div className="mt-2 space-y-1.5">
                  {plan.map((item) => (
                    <div
                      key={item.time}
                      className="flex items-center gap-2.5 rounded-xl border border-forest-900/5 bg-cream-50 px-2.5 py-2"
                    >
                      <span
                        className={`grid size-6 shrink-0 place-items-center rounded-full ${
                          item.done ? "bg-forest-700 text-cream-50" : "border border-forest-900/15 text-transparent"
                        }`}
                      >
                        <Check className="size-3" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className={`truncate text-[0.68rem] font-bold ${item.done ? "text-forest-900/45 line-through" : "text-forest-950"}`}>
                          {item.title}
                        </p>
                        <p className="truncate text-[0.55rem] text-forest-900/45">{item.detail}</p>
                      </div>
                      <span className="text-[0.55rem] font-bold text-forest-900/40">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-around rounded-2xl border border-forest-900/5 bg-cream-50 py-2">
                <span className="flex flex-col items-center gap-0.5 text-forest-900">
                  <Home className="size-4" />
                  <span className="text-[0.45rem] font-bold">Home</span>
                </span>
                <span className="flex flex-col items-center gap-0.5 text-forest-900/35">
                  <Camera className="size-4" />
                  <span className="text-[0.45rem] font-bold">Camera</span>
                </span>
                <span className="flex flex-col items-center gap-0.5 text-forest-900/35">
                  <Sparkles className="size-4" />
                  <span className="text-[0.45rem] font-bold">Play</span>
                </span>
                <span className="flex flex-col items-center gap-0.5 text-forest-900/35">
                  <User className="size-4" />
                  <span className="text-[0.45rem] font-bold">Mango</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -right-6 -top-5 hidden animate-float rounded-2xl border border-forest-900/10 bg-cream-50 px-3 py-2 shadow-soft sm:block">
          <p className="flex items-center gap-1.5 text-[0.55rem] font-bold uppercase tracking-[0.12em] text-forest-900/50">
            <PawPrint className="size-3 text-ember-500" /> Just now
          </p>
          <p className="mt-0.5 text-[0.7rem] font-bold text-forest-950">Mango chose tug time</p>
        </div>

        <div className="absolute -bottom-8 -left-6 hidden animate-float rounded-2xl border border-forest-900/10 bg-cream-50 px-3 py-2 shadow-soft sm:block" style={{ animationDelay: "1.6s" }}>
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-forest-900/50">Daily report</p>
          <p className="mt-0.5 font-display text-base font-semibold text-forest-950">3 good decisions</p>
        </div>
      </div>
    </div>
  );
}
