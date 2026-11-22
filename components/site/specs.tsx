import { Box, Leaf, PackageCheck, RefreshCw } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { specs } from "@/lib/content";

function RobotBlueprint() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
      <svg viewBox="0 0 440 520" className="block h-auto w-full rounded-[1.5rem] bg-[#071F17]" role="img" aria-label="Technical front view of PawPal with labelled components">
        <defs>
          <pattern id="spec-grid" width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M22 0 L0 0 0 22" fill="none" stroke="#7DB79C" strokeOpacity="0.09" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="440" height="520" fill="url(#spec-grid)" />
        <circle cx="220" cy="270" r="170" fill="#F08A4B" opacity="0.05" />

        <text x="24" y="34" fill="#F6EBD8" fontSize="11" fontWeight="700" letterSpacing="3" opacity="0.85">
          PAWPAL ONE
        </text>
        <text x="24" y="48" fill="#F6EBD8" fontSize="6.5" letterSpacing="2" opacity="0.4">
          TECHNICAL VIEW · REV 2.4
        </text>
        <g stroke="#F6EBD8" strokeOpacity="0.25" strokeWidth="1">
          <path d="M410 24 L424 24 L424 38" fill="none" />
          <path d="M16 482 L16 496 L30 496" fill="none" />
        </g>

        {/* dimension lines */}
        <g stroke="#F6EBD8" strokeOpacity="0.28" strokeWidth="1">
          <path d="M62 100 L62 390" strokeDasharray="3 4" />
          <path d="M56 100 L68 100" />
          <path d="M56 390 L68 390" />
          <path d="M150 478 L290 478" />
          <path d="M150 472 L150 484" />
          <path d="M290 472 L290 484" />
        </g>
        <text x="52" y="250" fill="#F6EBD8" fontSize="8" letterSpacing="1.5" opacity="0.4" transform="rotate(-90 52 250)" textAnchor="middle">
          42 CM
        </text>
        <text x="220" y="470" fill="#F6EBD8" fontSize="8" letterSpacing="1.5" opacity="0.4" textAnchor="middle">
          31 CM
        </text>

        {/* robot */}
        <g>
          <path d="M220 130 L220 106" stroke="#F6EBD8" strokeWidth="2" strokeOpacity="0.6" />
          <circle cx="220" cy="101" r="5.5" fill="#F08A4B" />
          <rect x="136" y="180" width="14" height="52" rx="7" fill="none" stroke="#F6EBD8" strokeOpacity="0.55" strokeWidth="1.6" />
          <rect x="290" y="180" width="14" height="52" rx="7" fill="none" stroke="#F6EBD8" strokeOpacity="0.55" strokeWidth="1.6" />
          <rect x="150" y="130" width="140" height="230" rx="70" fill="none" stroke="#F6EBD8" strokeOpacity="0.75" strokeWidth="1.8" />
          <rect x="165" y="150" width="110" height="95" rx="34" fill="#0B2B20" stroke="#F6EBD8" strokeOpacity="0.5" strokeWidth="1.4" />
          <rect x="186" y="184" width="14" height="25" rx="7" fill="#F08A4B" />
          <rect x="222" y="184" width="14" height="25" rx="7" fill="#F08A4B" />
          <path d="M208 218 Q220 227 232 218" stroke="#F08A4B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="256" cy="163" r="3" fill="#7DB79C" />

          <rect x="170" y="262" width="100" height="58" rx="24" fill="none" stroke="#F6EBD8" strokeOpacity="0.5" strokeWidth="1.4" />
          <circle cx="190" cy="291" r="9" fill="none" stroke="#F6EBD8" strokeOpacity="0.6" strokeWidth="1.4" />
          <circle cx="220" cy="291" r="9" fill="none" stroke="#F08A4B" strokeOpacity="0.9" strokeWidth="1.4" />
          <circle cx="250" cy="291" r="9" fill="none" stroke="#F6EBD8" strokeOpacity="0.6" strokeWidth="1.4" />
          <path d="M197 309 L243 309" stroke="#F6EBD8" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round" />

          <rect x="155" y="352" width="130" height="38" rx="19" fill="none" stroke="#F6EBD8" strokeOpacity="0.65" strokeWidth="1.6" />
          <circle cx="176" cy="378" r="8" fill="none" stroke="#F6EBD8" strokeOpacity="0.5" strokeWidth="1.4" />
          <circle cx="264" cy="378" r="8" fill="none" stroke="#F6EBD8" strokeOpacity="0.5" strokeWidth="1.4" />

          {/* arm */}
          <path d="M150 285 L112 272 L96 238" stroke="#F6EBD8" strokeOpacity="0.65" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <circle cx="112" cy="272" r="6" fill="#0B2B20" stroke="#F6EBD8" strokeOpacity="0.6" strokeWidth="1.4" />
          <circle cx="96" cy="238" r="5" fill="#0B2B20" stroke="#F6EBD8" strokeOpacity="0.6" strokeWidth="1.4" />
          <circle cx="86" cy="214" r="13" fill="none" stroke="#F08A4B" strokeOpacity="0.9" strokeWidth="1.6" />
          <path d="M76 208 C82 216 92 220 98 216" stroke="#F08A4B" strokeOpacity="0.6" strokeWidth="1.2" fill="none" />
        </g>

        {/* smart bowl */}
        <g>
          <path d="M318 440 L402 440 L394 462 C392 468 384 470 360 470 C336 470 328 468 326 462 Z" fill="none" stroke="#F6EBD8" strokeOpacity="0.55" strokeWidth="1.5" />
          <ellipse cx="360" cy="440" rx="42" ry="8" fill="none" stroke="#F6EBD8" strokeOpacity="0.45" strokeWidth="1.4" />
          <ellipse cx="360" cy="441" rx="30" ry="4.5" fill="#7FB6C9" opacity="0.35" />
        </g>

        {/* callouts */}
        <g stroke="#F08A4B" strokeOpacity="0.55" strokeWidth="1">
          <path d="M276 186 L306 166" />
          <path d="M270 286 L306 276" />
          <path d="M86 214 L56 196" />
          <path d="M285 370 L310 366" />
          <path d="M326 458 L306 458" />
          <path d="M162 384 L120 408" />
        </g>
        <g fill="#F08A4B">
          <circle cx="276" cy="186" r="2.5" />
          <circle cx="270" cy="286" r="2.5" />
          <circle cx="86" cy="214" r="2.5" />
          <circle cx="285" cy="370" r="2.5" />
          <circle cx="326" cy="458" r="2.5" />
          <circle cx="162" cy="384" r="2.5" />
        </g>
        <g fill="#F6EBD8" fontSize="7" letterSpacing="1.6" opacity="0.6">
          <text x="310" y="164">4K CAMERA</text>
          <text x="310" y="274">300G TREAT HOPPER</text>
          <text x="16" y="192">3-AXIS PLAY ARM</text>
          <text x="314" y="364">12-HR BATTERY</text>
          <text x="306" y="461">SMART HYDRO BOWL</text>
          <text x="38" y="414">6 TERRAIN SENSORS</text>
        </g>
      </svg>
    </div>
  );
}

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
              <RobotBlueprint />
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
