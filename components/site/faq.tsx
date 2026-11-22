import Link from "next/link";
import { ArrowUpRight, MessageCircleQuestion, Sparkles } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="size-1.5 rounded-full bg-ember-400" /> Good to know
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-4">
                Questions, <span className="italic text-ember-500">answered.</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 max-w-sm text-[1.02rem] leading-relaxed text-forest-900/65">
                Everything you might wonder before bringing a small robot home to
                a very big personality.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-forest-950 p-7 text-cream-100 shadow-lift">
                <div className="pointer-events-none absolute -right-8 -top-8 size-36 rounded-full bg-ember-400/20 blur-2xl" />
                <span className="relative grid size-11 place-items-center rounded-2xl bg-ember-400 text-forest-950">
                  <MessageCircleQuestion className="size-5" />
                </span>
                <h3 className="relative mt-4 font-display text-2xl font-semibold text-cream-50">
                  Still curious?
                </h3>
                <p className="relative mt-2 text-[0.86rem] leading-relaxed text-cream-100/60">
                  Talk to a human who has probably owned a dog exactly like yours.
                  No scripts, no bots — unless you count PawPal.
                </p>
                <Button asChild variant="cream" size="sm" className="relative mt-5">
                  <a href="mailto:hello@pawpal.dog">
                    Ask the pack
                    <ArrowUpRight />
                  </a>
                </Button>
                <p className="relative mt-3 flex items-center gap-1.5 text-[0.65rem] text-cream-100/35">
                  <Sparkles className="size-3 text-ember-300" />
                  Average reply time: 2 hours, 14 minutes
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-5 px-2 text-[0.75rem] text-forest-900/45">
              Need something specific?{" "}
              <Link href="/order?plan=pro" className="font-semibold text-forest-900 underline decoration-ember-400/60 decoration-2 underline-offset-4 hover:text-ember-600">
                Start with PawPal
              </Link>{" "}
              and use the 30-night trial to see for yourself.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
