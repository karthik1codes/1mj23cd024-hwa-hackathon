"use client";

import * as React from "react";
import { Cookie, Mic, Play, Sparkles, Volume2 } from "lucide-react";

import { cn } from "@/lib/utils";

type Action = "hello" | "treat" | "play";

const copy: Record<Action, { bubble: string; note: string }> = {
  hello: {
    bubble: "Good boy, Buddy!",
    note: "Voice playback · your recorded clip, in your own voice.",
  },
  treat: {
    bubble: "One treat, coming right up.",
    note: "Treat dispenser · reward 1 of 6 for today.",
  },
  play: {
    bubble: "Tug time! Ready?",
    note: "Robotic arm · gentle tug session started.",
  },
};

const buttons: { action: Action; label: string; icon: typeof Mic }[] = [
  { action: "hello", label: "Hello", icon: Mic },
  { action: "treat", label: "Treat", icon: Cookie },
  { action: "play", label: "Play", icon: Play },
];

export function RobotPlayground() {
  const [action, setAction] = React.useState<Action | null>(null);
  const [eventId, setEventId] = React.useState(0);
  const [learned, setLearned] = React.useState(3);

  const handle = (next: Action) => {
    setAction(next);
    setEventId((n) => n + 1);
    setLearned((n) => Math.min(12, n + 1));

    if (next === "hello" && typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance("Good boy, Buddy!");
        utterance.rate = 0.92;
        utterance.pitch = 1.08;
        window.speechSynthesis.speak(utterance);
      } catch {
        /* voice is a bonus, not a requirement */
      }
    }
  };

  const current = action ? copy[action] : null;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-forest-950 p-5 text-cream-100 shadow-lift sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-0 size-80 rounded-full bg-ember-500/15 blur-3xl" />
        <div className="absolute -bottom-24 right-0 size-80 rounded-full bg-forest-400/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="relative flex justify-center pt-10 lg:pt-6">
          <div className="absolute inset-x-0 bottom-2 mx-auto h-10 w-52 rounded-full bg-ember-500/20 blur-2xl" />

          <div className="relative w-[15rem] sm:w-[16.5rem]">
            {/* speech bubble */}
            <div className="absolute -top-12 left-1/2 z-20 w-max max-w-[13rem] -translate-x-1/2">
              <div
                key={eventId}
                aria-live="polite"
                className={cn(
                  "relative rounded-2xl border border-white/15 bg-white/95 px-3.5 py-2 text-center text-[0.78rem] font-semibold text-forest-950 shadow-lift transition-all",
                  !current && "text-forest-900/60",
                )}
              >
                {current ? current.bubble : "Hi! Tap a button to play."}
                <span className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 border-b border-r border-white/15 bg-white/95" />
              </div>
            </div>

            {/* antenna */}
            <div className="relative mx-auto mb-1 h-7 w-1 rounded-full bg-white/25">
              <span className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-ember-400 shadow-[0_0_20px_5px_rgba(240,138,75,0.5)]" />
            </div>

            <div className="relative">
              {/* ears */}
              <span className="absolute -left-2 top-16 z-0 h-16 w-3 rounded-full bg-[#F8F4EC] shadow-sm" />
              <span className="absolute -right-2 top-16 z-0 h-16 w-3 rounded-full bg-[#F8F4EC] shadow-sm" />

              <div
                className={cn(
                  "relative z-10 rounded-[3.2rem] border border-white/40 bg-gradient-to-br from-white via-[#F8F4EC] to-[#DCD5C7] p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] transition-transform duration-500",
                  action === "play" && "-rotate-2",
                )}
              >
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#174535] to-[#071F17] px-4 pb-5 pt-6">
                  <div className="flex items-center justify-center gap-7">
                    <span
                      className={cn(
                        "block h-7 w-4 rounded-full bg-ember-300 shadow-[0_0_16px_rgba(246,169,110,0.7)] transition-all duration-300",
                        action === "hello" && "h-3 -translate-y-1",
                      )}
                    />
                    <span
                      className={cn(
                        "block h-7 w-4 rounded-full bg-ember-300 shadow-[0_0_16px_rgba(246,169,110,0.7)] transition-all duration-300",
                        action === "hello" && "h-3 -translate-y-1",
                      )}
                    />
                  </div>
                  <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-ember-300/80" />
                  <span className="absolute right-4 top-4 size-1.5 rounded-full bg-forest-300" />

                  {action === "hello" && (
                    <div className="absolute inset-x-0 bottom-2 flex items-end justify-center gap-1" aria-hidden="true">
                      {[40, 75, 55, 95, 50, 80, 35, 65, 90, 45].map((h, i) => (
                        <span
                          key={`${eventId}-${i}`}
                          className="eq-bar w-1 rounded-full bg-ember-300/80"
                          style={{ height: `${h * 0.2}rem`, animationDelay: `${i * 70}ms` }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative mt-3 rounded-[1.8rem] bg-[#FBF5E9] px-3 pb-2.5 pt-3 shadow-inner">
                  <div className="flex items-center justify-center gap-2.5">
                    {buttons.map((button) => {
                      const isActive = action === button.action;
                      return (
                        <div key={button.action} className="flex flex-col items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handle(button.action)}
                            aria-label={`${button.label} — try the PawPal button`}
                            className={cn(
                              "group relative grid size-11 place-items-center rounded-full transition-all duration-200 active:translate-y-0.5",
                              isActive
                                ? "bg-ember-400 text-forest-950 shadow-[0_0_0_4px_rgba(240,138,75,0.25)]"
                                : "bg-forest-900 text-cream-50 hover:bg-forest-700",
                            )}
                          >
                            {!action && (
                              <span className="absolute inset-0 animate-pulse-ring rounded-full border border-ember-400/60" />
                            )}
                            <button.icon className="size-4" />
                          </button>
                          <span className="text-[0.5rem] font-bold uppercase tracking-[0.1em] text-forest-900/50">
                            {button.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-1 flex items-center justify-between px-1">
                    <span className="text-[0.45rem] font-bold uppercase tracking-[0.18em] text-forest-900/30">PawPal</span>
                    <span className="flex items-center gap-1 text-[0.45rem] font-bold uppercase tracking-[0.12em] text-forest-900/30">
                      <Volume2 className="size-2.5" /> On
                    </span>
                  </div>

                  {/* treat token */}
                  {action === "treat" && (
                    <span
                      key={eventId}
                      className="treat-token absolute left-1/2 top-[3.1rem] z-20 size-3 -translate-x-1/2 rounded-full bg-[#C98A5B] shadow-sm ring-2 ring-[#F0D5B0]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>

              {/* base */}
              <div className="relative z-0 mx-auto -mt-3 h-9 w-[82%] rounded-b-[1.4rem] rounded-t-lg border border-white/30 bg-gradient-to-b from-[#F1ECE2] to-[#D5CEC0]">
                <div className="absolute inset-x-3 bottom-2 flex justify-between">
                  <span className="size-3.5 rounded-full bg-[#123B2C]" />
                  <span className="size-3.5 rounded-full bg-[#123B2C]" />
                </div>
              </div>
            </div>

            {/* play ball */}
            {action === "play" && (
              <span
                key={`ball-${eventId}`}
                className="absolute -right-6 bottom-16 size-6 animate-bob rounded-full bg-gradient-to-br from-ember-300 to-ember-500 shadow-[0_0_20px_rgba(240,138,75,0.4)]"
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ember-300/30 bg-ember-400/10 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-ember-200">
            <Sparkles className="size-3" /> Interactive · try the buttons
          </span>
          <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
            Buttons your dog can actually learn
          </h3>
          <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-cream-100/60">
            Three big, nose-friendly buttons sit right on PawPal&apos;s chest.
            Press one and something wonderful happens — a familiar voice, a
            treat, a game. Dogs learn cause and effect fast when the reward is
            this good.
          </p>

          <div
            className="mt-6 min-h-[3.5rem] rounded-2xl border border-white/10 bg-white/[0.06] p-4"
            aria-live="polite"
          >
            <p className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ember-300">
              <span className={cn("size-1.5 rounded-full", action ? "bg-ember-400" : "bg-cream-100/30")} />
              {action ? "PawPal responded" : "Waiting for a tap"}
            </p>
            <p className="mt-1 text-[0.85rem] text-cream-100/70">
              {current ? current.note : "Tap any of the three buttons on PawPal to see what your dog would experience."}
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-[0.12em] text-cream-100/45">
              <span>Tricks learned</span>
              <span className="text-cream-100/70">{learned} of 12</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-ember-400 to-ember-300 transition-all duration-500"
                style={{ width: `${(learned / 12) * 100}%` }}
              />
            </div>
            <p className="mt-3 text-[0.7rem] text-cream-100/40">
              Real PawPal sessions track each new button, voice and trick your dog discovers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
