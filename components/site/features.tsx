import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  Bot,
  BrainCircuit,
  Cookie,
  Droplets,
  Gamepad2,
  Route,
  Video,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { RobotPlayground } from "@/components/site/robot-playground";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "AI behaviour monitoring",
    tag: "On-device AI",
    copy: "Reads posture, tail speed and activity to spot boredom, stress or a very good mood — before you do.",
    icon: BrainCircuit,
  },
  {
    title: "Automatic treat dispenser",
    tag: "300g hopper",
    copy: "One-tap or automatic rewards, portioned to your vet's guidance and sealed to stay fresh.",
    icon: Cookie,
  },
  {
    title: "Robotic arm for toys",
    tag: "3-axis",
    copy: "Waves, tugs and teases interactive toys, then stops instantly when your dog pulls away.",
    icon: Bot,
  },
  {
    title: "Owner voice playback",
    tag: "Your voice",
    copy: "Record phrases in your own voice and play them at the moments your dog needs you most.",
    icon: AudioLines,
  },
  {
    title: "Two-way audio & video",
    tag: "4K · night vision",
    copy: "Drop into a crystal-clear live view and say hello from anywhere, with a physical privacy shutter.",
    icon: Video,
  },
  {
    title: "Smart hydration bowl",
    tag: "1.5L filtered",
    copy: "UV-cleans every four hours, keeps water cool and nudges your app when it is running low.",
    icon: Droplets,
  },
  {
    title: "Autonomous movement",
    tag: "Terrain-aware",
    copy: "Self-balancing treads and six sensors let PawPal follow the fun safely around your home.",
    icon: Route,
  },
  {
    title: "Personalised play sessions",
    tag: "Adapts daily",
    copy: "Session length, pace and games flex to your dog's age, breed and energy — every single day.",
    icon: Gamepad2,
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 size-[26rem] rounded-full bg-ember-200/30 blur-3xl" />
        <div className="absolute -left-20 bottom-10 size-[24rem] rounded-full bg-forest-200/30 blur-3xl" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="size-1.5 rounded-full bg-ember-400" /> Everything included
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-4">
              Small robot. <span className="italic text-ember-500">Big feelings.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-forest-900/65">
              Nine thoughtful features, designed to feel less like a gadget and
              more like a member of the family. No subscriptions, no hidden extras.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12">
          <RobotPlayground />
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 4) * 80}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-forest-900/10 bg-cream-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ember-400/30 hover:shadow-lift">
                <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-ember-200/0 blur-2xl transition-colors duration-500 group-hover:bg-ember-200/70" />
                <div className="relative flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl border border-forest-900/5 bg-gradient-to-br from-forest-800 to-forest-950 text-cream-50 shadow-sm transition-transform duration-300 group-hover:-rotate-6">
                    <feature.icon className="size-5" />
                  </span>
                  <Badge variant="soft" className="text-[0.55rem] tracking-[0.1em]">
                    {feature.tag}
                  </Badge>
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold leading-snug text-forest-950">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-[0.85rem] leading-relaxed text-forest-900/60">
                  {feature.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-3xl border border-forest-900/10 bg-cream-200/50 px-6 py-5 sm:flex-row">
            <p className="text-[0.85rem] text-forest-900/60">
              Every feature works offline-first. Nothing here needs a monthly plan.
            </p>
            <Link
              href="#specs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-900 transition-colors hover:text-ember-600"
            >
              See full specifications
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
