import Link from "next/link";
import { Quote, ShoppingBag, Star } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/content";

const summary = [
  { value: "4.9/5", label: "Average rating" },
  { value: "2,400+", label: "Verified reviews" },
  { value: "96%", label: "Would recommend" },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-ember-400 text-ember-400" />
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  location,
  dog,
  initials,
  tint,
}: (typeof testimonials)[number]) {
  return (
    <figure className="relative flex w-[19rem] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-forest-900/10 bg-cream-50 p-6 shadow-soft sm:w-[22rem]">
      <Quote className="pointer-events-none absolute -right-2 -top-3 size-20 text-forest-900/[0.04]" />
      <div>
        <Stars />
        <blockquote className="relative mt-4 text-[0.92rem] leading-relaxed text-forest-900/75">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-forest-900/10 pt-4">
        <span className={`grid size-10 shrink-0 place-items-center rounded-full text-[0.7rem] font-bold ${tint}`}>
          {initials}
        </span>
        <div className="min-w-0">
          <p className="text-[0.82rem] font-bold text-forest-950">
            {name} <span className="font-medium text-forest-900/40">· {location}</span>
          </p>
          <p className="truncate text-[0.7rem] text-forest-900/50">{dog}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="size-1.5 rounded-full bg-ember-400" /> Good dogs, good days
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-4 max-w-xl">
                The reviews are in. And so are the <span className="italic text-ember-500">tail wags.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="grid grid-cols-3 gap-4 rounded-3xl border border-forest-900/10 bg-cream-50 p-5 shadow-soft">
              {summary.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-display text-2xl font-semibold text-forest-950">{item.value}</p>
                  <p className="mt-1 text-[0.6rem] font-bold uppercase leading-tight tracking-[0.1em] text-forest-900/45">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream-100 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream-100 to-transparent sm:w-28" />

        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-4 pr-4" aria-hidden={copy === 1}>
              {testimonials.map((testimonial) => (
                <TestimonialCard key={`${copy}-${testimonial.name}`} {...testimonial} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-[0.78rem] text-forest-900/45">
          Reviews from verified PawPal owners. Dogs were paid in treats.
        </p>
        <Button asChild variant="outline">
          <Link href="/order?plan=pro">
            <ShoppingBag />
            Join 2,400+ happy packs
          </Link>
        </Button>
      </div>
    </section>
  );
}
