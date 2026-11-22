"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const chapters = [
  {
    kicker: "Chapter one",
    title: "A familiar voice, on a quiet morning",
    description:
      "PawPal greets your dog in your own voice, opens a gentle play session and rewards the first tail wag of the day.",
  },
  {
    kicker: "Chapter two",
    title: "Play that thinks for itself",
    description:
      "The robotic arm teases a toy, the dispenser rewards effort, and the session adapts to your dog's pace in real time.",
  },
  {
    kicker: "Chapter three",
    title: "You're never far away",
    description:
      "Drop into a 4K live view, say hello through two-way audio, and get a daily report of every nap, zoomie and good decision.",
  },
];

const DURATION = 4600;

function RobotFace({ chapter }: { chapter: number }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 animate-pulse-ring rounded-full border border-ember-400/30" />
      <div className="absolute inset-0 -z-10 animate-pulse-ring rounded-full border border-ember-400/20 [animation-delay:1.3s]" />
      <div className="relative flex flex-col items-center">
        <div className="mb-2 h-8 w-1 rounded-full bg-cream-100/30" />
        <div className="absolute -top-1 size-3 rounded-full bg-ember-400 shadow-[0_0_24px_6px_rgba(240,138,75,0.55)]" />
        <div className="relative h-[9.5rem] w-[13.5rem] rounded-[3.4rem] border border-white/25 bg-gradient-to-br from-white via-[#F7F3EA] to-[#DDD6C8] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:h-[11rem] sm:w-[15.5rem]">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2.6rem] bg-gradient-to-b from-[#174535] to-[#071F17]">
            <div className="flex gap-6 sm:gap-7">
              <span className="animate-blink rounded-full bg-ember-300 shadow-[0_0_18px_rgba(246,169,110,0.8)]" style={{ height: "1.9rem", width: "1.05rem", animationDuration: "5.5s" }} />
              <span className="animate-blink rounded-full bg-ember-300 shadow-[0_0_18px_rgba(246,169,110,0.8)]" style={{ height: "1.9rem", width: "1.05rem", animationDuration: "5.5s" }} />
            </div>
            <div className="mt-3 h-[0.45rem] w-9 rounded-full bg-ember-300/80" />
            <span className="absolute right-3 top-3 size-1.5 rounded-full bg-forest-300" />
            {chapter === 0 && (
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-1 pb-3 opacity-80" aria-hidden="true">
                {[35, 70, 50, 90, 45, 75, 30, 60, 85].map((h, i) => (
                  <span
                    key={i}
                    className="eq-bar w-1 rounded-full bg-ember-300"
                    style={{ height: `${h * 0.22}rem`, animationDelay: `${i * 80}ms` }}
                  />
                ))}
              </div>
            )}
          </div>
          <span className="absolute -left-1.5 top-1/2 h-10 w-3 -translate-y-1/2 rounded-full bg-[#F8F4EC]" />
          <span className="absolute -right-1.5 top-1/2 h-10 w-3 -translate-y-1/2 rounded-full bg-[#F8F4EC]" />
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 backdrop-blur">
          <span className="size-1.5 animate-pulse rounded-full bg-forest-300" />
          <span className="text-[0.55rem] font-bold uppercase tracking-[0.18em] text-cream-100/70">
            {chapter === 1 ? "Treat dispensed" : chapter === 0 ? "Playing your voice" : "Live · 4K"}
          </span>
        </div>
      </div>
    </div>
  );
}

export function WatchFilm({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);

  React.useEffect(() => {
    if (!open || !playing) return;
    const started = Date.now();
    const timer = window.setInterval(() => {
      const pct = Math.min(100, ((Date.now() - started) / DURATION) * 100);
      setProgress(pct);
      if (pct >= 100) {
        setProgress(0);
        setIndex((i) => (i + 1) % chapters.length);
      }
    }, 60);
    return () => window.clearInterval(timer);
  }, [open, playing, index]);

  const goTo = (next: number) => {
    setProgress(0);
    setIndex(((next % chapters.length) + chapters.length) % chapters.length);
  };

  const chapter = chapters[index];

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (value) {
          setIndex(0);
          setProgress(0);
          setPlaying(true);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className={cn("group", className)}>
          <span className="grid size-7 place-items-center rounded-full bg-forest-900 text-cream-50 transition-transform duration-300 group-hover:scale-110">
            <Play className="size-3 fill-current" />
          </span>
          Watch how it works
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
        <DialogTitle className="sr-only">How PawPal works — product film</DialogTitle>
        <DialogDescription className="sr-only">
          A short three-chapter look at how PawPal keeps your dog company through the day.
        </DialogDescription>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-forest-950 shadow-lift">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-video">
            <video
              src="/pawpal.mp4"
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,#1E5C45_0%,#0B2B20_55%,#071F17_100%)]" />
            <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:26px_26px]" />
            <div className="absolute -left-16 top-1/4 size-72 rounded-full bg-ember-500/20 blur-3xl" />
            <div className="absolute -right-10 bottom-0 size-64 rounded-full bg-forest-400/20 blur-3xl" />

            <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur sm:left-6 sm:top-6">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-400 opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-ember-400" />
              </span>
              <span className="text-[0.55rem] font-bold uppercase tracking-[0.18em] text-cream-100/80">
                Product film · 0:48
              </span>
            </div>

            <div className="absolute right-4 top-4 z-20 hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-cream-100/70 backdrop-blur sm:right-6 sm:top-6 sm:flex">
              <Sparkles className="size-3 text-ember-300" /> PawPal One
            </div>

            <div className="relative z-10 flex h-full w-full items-center justify-center px-6 pb-44 pt-16 sm:pb-28 sm:pt-10">
              <RobotFace chapter={index} />
            </div>

            {/* Chapter-specific floating details */}
            {index === 0 && (
              <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 animate-float sm:left-8 sm:block">
                <div className="max-w-[12rem] rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-ember-300">Now playing</p>
                  <p className="mt-1 font-display text-lg leading-tight text-cream-50">
                    &ldquo;Good morning, Buddy.&rdquo;
                  </p>
                  <p className="mt-1 text-[0.62rem] text-cream-100/55">Your recorded voice · 8:04 am</p>
                </div>
              </div>
            )}
            {index === 1 && (
              <>
                <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 animate-treat-drop sm:block">
                  <div className="rounded-full bg-ember-400 px-3 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-forest-950 shadow-glow">
                    +1 treat
                  </div>
                </div>
                <div className="absolute bottom-28 right-6 hidden animate-float rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur sm:block">
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-cream-100/50">Play session</p>
                  <p className="mt-1 font-display text-xl text-cream-50">12 min · tug</p>
                  <p className="text-[0.62rem] text-forest-300">Pace adapted · 2 breaks</p>
                </div>
              </>
            )}
            {index === 2 && (
              <div className="absolute bottom-28 right-6 hidden animate-float rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur sm:block">
                <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-cream-100/50">Today&apos;s report</p>
                <div className="mt-2 flex items-center gap-3">
                  <div>
                    <p className="font-display text-xl leading-none text-cream-50">42m</p>
                    <p className="text-[0.6rem] text-cream-100/50">Play</p>
                  </div>
                  <div className="h-8 w-px bg-white/15" />
                  <div>
                    <p className="font-display text-xl leading-none text-cream-50">Calm</p>
                    <p className="text-[0.6rem] text-cream-100/50">Mood</p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom caption */}
            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-forest-950 via-forest-950/85 to-transparent px-4 pb-4 pt-14 sm:px-6 sm:pb-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-md">
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-ember-300">
                    {chapter.kicker}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold leading-tight text-cream-50 sm:text-2xl">
                    {chapter.title}
                  </p>
                  <p className="mt-1.5 hidden text-[0.8rem] leading-relaxed text-cream-100/60 sm:block">
                    {chapter.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => goTo(index - 1)}
                    aria-label="Previous chapter"
                    className="grid size-9 place-items-center rounded-full border border-white/15 text-cream-100/80 transition-colors hover:bg-white/10"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlaying((p) => !p)}
                    aria-label={playing ? "Pause film" : "Play film"}
                    className="grid size-11 place-items-center rounded-full bg-ember-400 text-forest-950 transition-transform hover:scale-105"
                  >
                    {playing ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(index + 1)}
                    aria-label="Next chapter"
                    className="grid size-9 place-items-center rounded-full border border-white/15 text-cream-100/80 transition-colors hover:bg-white/10"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex gap-1.5">
                {chapters.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to chapter ${i + 1}`}
                    className="group h-1 flex-1 overflow-hidden rounded-full bg-white/15"
                  >
                    <span
                      className="block h-full rounded-full bg-ember-400 transition-[width] duration-100 ease-linear"
                      style={{ width: i < index ? "100%" : i === index ? `${progress}%` : "0%" }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
