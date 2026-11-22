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
import filmVideo from "../../pawpal.mp4";

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

export function WatchFilm({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
    const frac = Math.min(1, video.currentTime / video.duration);
    const idx = Math.min(chapters.length - 1, Math.floor(frac * chapters.length));
    setIndex(idx);
    setProgress(((frac * chapters.length) % 1) * 100);
    setPlaying(!video.paused);
  };

  const seekToChapter = (next: number) => {
    const idx = ((next % chapters.length) + chapters.length) % chapters.length;
    const video = videoRef.current;
    setIndex(idx);
    setProgress(0);
    if (video && Number.isFinite(video.duration) && video.duration > 0) {
      video.currentTime = (video.duration * idx) / chapters.length;
      const playPromise = video.play();
      if (playPromise) playPromise.catch(() => undefined);
      setPlaying(true);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      const playPromise = video.play();
      if (playPromise) playPromise.catch(() => undefined);
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
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
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-forest-950 sm:aspect-video">
            <video
              ref={videoRef}
              src={filmVideo}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              aria-label="PawPal product film"
            />

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
                    onClick={() => seekToChapter(index - 1)}
                    aria-label="Previous chapter"
                    className="grid size-9 place-items-center rounded-full border border-white/15 text-cream-100/80 transition-colors hover:bg-white/10"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={playing ? "Pause film" : "Play film"}
                    className="grid size-11 place-items-center rounded-full bg-ember-400 text-forest-950 transition-transform hover:scale-105"
                  >
                    {playing ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => seekToChapter(index + 1)}
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
                    onClick={() => seekToChapter(i)}
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
