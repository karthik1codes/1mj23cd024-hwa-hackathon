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
          <img
            src="/buttons.png"
            alt="PawPal with its three learning buttons"
            className="h-auto w-full max-w-[15rem] rounded-[2rem] border border-white/10 bg-forest-900/60 object-cover shadow-lift sm:max-w-[16.5rem]"
          />
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
