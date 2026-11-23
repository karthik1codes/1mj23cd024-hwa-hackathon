import { Box, Leaf, PackageCheck, RefreshCw } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { specs } from "@/lib/content";

const assurances = [
  { icon: PackageCheck, label: "Ships fully assembled" },
  { icon: RefreshCw, label: "5 years of feature updates" },
  { icon: Leaf, label: "Recyclable packaging" },
  { icon: Box, label: "Spare parts, always" },
];

export function Specs() {
  return (
    <section id="specs" className="relative overflow-hidden bg-forest-950 py-20 text-cream-100 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-10 size-96 rounded-full bg-ember-500/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 size-80 rounded-full bg-forest-400/10 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <Reveal>
              <span className="eyebrow text-ember-300">
                <span className="size-1.5 rounded-full bg-ember-400" /> Under the shell
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.03] tracking-[-0.025em] text-cream-50 sm:text-5xl">
                Built like a companion. Engineered like a <span className="italic text-ember-300">machine.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="max-w-md text-[0.98rem] leading-relaxed text-cream-100/60 lg:justify-self-end">
              Quiet motors, soft-touch materials and a 12-hour battery. Every
              component earns its place — and every part is replaceable.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <img
                src="/machine.png"
                alt="PawPal engineered like a machine"
                className="h-auto w-full rounded-[2rem] border border-white/10 bg-[#071F17] object-cover shadow-lift"
              />
              <p className="mt-4 px-2 text-[0.72rem] leading-relaxed text-cream-100/40">
                Designed in Copenhagen. Tested against a very enthusiastic Labrador named Otto.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Tabs defaultValue="Hardware">
              <TabsList className="h-auto w-full flex-wrap justify-start gap-1 border-white/10 bg-white/[0.05] p-1.5">
                {Object.keys(specs).map((group) => (
                  <TabsTrigger
                    key={group}
                    value={group}
                    className="flex-1 rounded-full px-4 py-2.5 text-[0.8rem] text-cream-100/60 data-[state=active]:bg-cream-50 data-[state=active]:text-forest-950"
                  >
                    {group}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(specs).map(([group, rows]) => (
                <TabsContent key={group} value={group} className="mt-5">
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                    {rows.map(([label, value], i) => (
                      <div
                        key={label}
                        className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 ${
                          i !== rows.length - 1 ? "border-b border-white/10" : ""
                        }`}
                      >
                        <span className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-cream-100/40">
                          {label}
                        </span>
                        <span className="text-[0.86rem] leading-relaxed text-cream-100/80 sm:max-w-[58%] sm:text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
          {assurances.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon className="size-4 text-ember-300" />
              <span className="text-[0.72rem] font-semibold text-cream-100/55">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
