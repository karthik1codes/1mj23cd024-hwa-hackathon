import Link from "next/link";
import { Check, RotateCcw, ShieldCheck, Sparkles, Truck } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CARE_PLUS_PRICE, plans } from "@/lib/content";
import { cn, formatPrice } from "@/lib/utils";

const assurances = [
  { icon: Truck, label: "Free shipping, always" },
  { icon: RotateCcw, label: "30-night happiness trial" },
  { icon: ShieldCheck, label: "Up to 2-year warranty" },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-cream-200/45 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 rounded-full bg-ember-200/40 blur-3xl" />
        <div className="paw-pattern absolute inset-x-0 bottom-0 h-48 opacity-30 [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="size-1.5 rounded-full bg-ember-400" /> Simple pricing
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-4">
              Pick the companion that fits your <span className="italic text-ember-500">pack.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-lg text-[1.02rem] leading-relaxed text-forest-900/65">
              One-time price. No subscription required. Free shipping and a
              30-night happiness trial on every robot.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const featured = plan.featured;
            const savings = plan.compareAt ? plan.compareAt - plan.price : 0;
            return (
              <Reveal key={plan.id} delay={i * 110} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8",
                    featured
                      ? "bg-forest-950 text-cream-100 ring-1 ring-forest-900 lg:-my-3 lg:py-11"
                      : "border border-forest-900/10 bg-cream-50",
                  )}
                >
                  {featured && (
                    <>
                      <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-ember-400/20 blur-3xl" />
                      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:20px_20px]" />
                    </>
                  )}

                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <h3 className={cn("font-display text-2xl font-semibold", featured ? "text-cream-50" : "text-forest-950")}>
                        {plan.name}
                      </h3>
                      <p className={cn("mt-1.5 max-w-[16rem] text-[0.82rem] leading-relaxed", featured ? "text-cream-100/55" : "text-forest-900/55")}>
                        {plan.tagline}
                      </p>
                    </div>
                    {plan.badge && (
                      <Badge variant={featured ? "accent" : "soft"} className="shrink-0">
                        {featured && <Sparkles className="size-3" />}
                        {plan.badge}
                      </Badge>
                    )}
                  </div>

                  <div className="relative mt-7 flex items-end gap-2">
                    <span className={cn("font-display text-5xl font-semibold leading-none tracking-[-0.03em]", featured ? "text-cream-50" : "text-forest-950")}>
                      {formatPrice(plan.price)}
                    </span>
                    {plan.compareAt && (
                      <span className={cn("pb-1 text-sm line-through", featured ? "text-cream-100/35" : "text-forest-900/35")}>
                        {formatPrice(plan.compareAt)}
                      </span>
                    )}
                  </div>
                  <p className={cn("relative mt-2 text-[0.7rem] font-semibold", featured ? "text-cream-100/45" : "text-forest-900/45")}>
                    or 3 interest-free payments of {formatPrice(Math.ceil(plan.price / 3))} · free shipping
                  </p>
                  <div className="relative mt-1 min-h-[1.05rem]">
                    {savings > 0 && (
                      <p className={cn("text-[0.7rem] font-bold", featured ? "text-ember-300" : "text-ember-600")}>
                        Save {formatPrice(savings)} today
                      </p>
                    )}
                  </div>

                  <div className={cn("relative my-6 h-px w-full", featured ? "bg-white/10" : "bg-forest-900/10")} />

                  <ul className="relative flex-1 space-y-3">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className={cn(
                            "mt-0.5 grid size-[1.1rem] shrink-0 place-items-center rounded-full",
                            featured ? "bg-ember-400 text-forest-950" : "bg-forest-900/10 text-forest-800",
                          )}
                        >
                          <Check className="size-2.5" strokeWidth={3} />
                        </span>
                        <span className={cn("text-[0.84rem] leading-snug", featured ? "text-cream-100/75" : "text-forest-900/70")}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-8">
                    <Button
                      asChild
                      variant={featured ? "accent" : "default"}
                      size="lg"
                      className="w-full"
                    >
                      <Link href={plan.checkoutUrl}>{plan.cta}</Link>
                    </Button>
                    <p className={cn("mt-3 text-center text-[0.68rem]", featured ? "text-cream-100/40" : "text-forest-900/40")}>
                      {plan.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-forest-900/10 bg-cream-50 px-6 py-5 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {assurances.map((item) => (
                <span key={item.label} className="flex items-center gap-2 text-[0.75rem] font-semibold text-forest-900/60">
                  <item.icon className="size-4 text-forest-700" />
                  {item.label}
                </span>
              ))}
            </div>
            <p className="text-center text-[0.72rem] text-forest-900/45 sm:text-right">
              Optional PawPal Care+ is {formatPrice(CARE_PLUS_PRICE)}/year — first 3 months free with Pro.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
