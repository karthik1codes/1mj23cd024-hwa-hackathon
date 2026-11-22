import { Cookie, Mic, Sparkles, Video } from "lucide-react";

import { cn } from "@/lib/utils";

function LiveCard() {
  return (
    <div className="glass w-[10.5rem] rounded-2xl p-2.5 sm:w-[12rem] sm:p-3">
      <div className="flex items-center gap-1.5 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-forest-900/70 sm:text-[0.6rem]">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        Live view
        <span className="ml-auto font-semibold tracking-normal text-forest-900/45">2:41</span>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-forest-900 text-cream-50">
          <Video className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[0.72rem] font-bold text-forest-950 sm:text-xs">Buddy is playing</p>
          <p className="truncate text-[0.6rem] text-forest-900/55 sm:text-[0.65rem]">Living room · Calm</p>
        </div>
      </div>
    </div>
  );
}

function VoiceCard() {
  return (
    <div className="glass w-[10.5rem] rounded-2xl p-2.5 sm:w-[12.5rem] sm:p-3">
      <div className="flex items-center gap-2">
        <span className="grid size-7 place-items-center rounded-full bg-ember-400 text-forest-950">
          <Mic className="size-3.5" />
        </span>
        <div>
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-forest-900/55">Your voice</p>
          <p className="text-[0.72rem] font-semibold text-forest-950 sm:text-xs">&ldquo;Who&apos;s a good boy?&rdquo;</p>
        </div>
      </div>
      <div className="mt-2.5 flex h-5 items-end gap-[3px]" aria-hidden="true">
        {[40, 70, 100, 55, 85, 35, 65, 95, 50, 75, 45, 60].map((h, i) => (
          <span
            key={i}
            className="eq-bar w-[3px] rounded-full bg-forest-700/70"
            style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function InsightCard() {
  return (
    <div className="glass w-[11.5rem] rounded-2xl p-3">
      <div className="flex items-center gap-1.5 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-forest-900/55">
        <Sparkles className="size-3 text-ember-500" />
        PawPal insight
      </div>
      <p className="mt-1.5 font-display text-lg font-semibold leading-none text-forest-950">Tail wags +24%</p>
      <p className="mt-1 text-[0.62rem] text-forest-900/55">This week vs. last</p>
      <svg viewBox="0 0 120 30" className="mt-2 h-6 w-full" aria-hidden="true">
        <path
          d="M2 24 C14 22 18 12 30 15 C42 18 46 8 58 11 C70 14 76 4 88 8 C100 12 108 5 118 3"
          fill="none"
          stroke="#E8762F"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="118" cy="3" r="3" fill="#0B2B20" />
      </svg>
    </div>
  );
}

function TreatCard() {
  return (
    <div className="glass flex items-center gap-2.5 rounded-2xl p-2.5 pr-3">
      <span className="grid size-8 place-items-center rounded-full bg-cream-200 text-ember-600">
        <Cookie className="size-4" />
      </span>
      <div>
        <p className="text-[0.7rem] font-bold text-forest-950">Treat dispensed</p>
        <p className="text-[0.6rem] text-forest-900/55">Reward · 1 of 6 today</p>
      </div>
    </div>
  );
}

export function HeroScene({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(70%_70%_at_70%_30%,rgba(240,138,75,0.28),transparent_70%)] blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-cream-200 shadow-lift sm:rounded-[2.5rem]">
        <svg
          viewBox="0 0 780 660"
          className="block h-auto w-full"
          role="img"
          aria-labelledby="hero-scene-title"
        >
          <title id="hero-scene-title">
            A white PawPal companion robot playing with a golden retriever in a sunlit modern living room
          </title>
          <defs>
            <linearGradient id="hero-wall" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FBF1DF" />
              <stop offset="1" stopColor="#F0DDC0" />
            </linearGradient>
            <linearGradient id="hero-floor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#E9CFA9" />
              <stop offset="1" stopColor="#D8B588" />
            </linearGradient>
            <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#D6EBDD" />
              <stop offset="1" stopColor="#F2F5E4" />
            </linearGradient>
            <linearGradient id="hero-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#F5CB8B" />
              <stop offset="1" stopColor="#DE9E52" />
            </linearGradient>
            <linearGradient id="hero-gold-deep" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#E2A75C" />
              <stop offset="1" stopColor="#C9853D" />
            </linearGradient>
            <linearGradient id="hero-robot" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="0.62" stopColor="#F8F5EE" />
              <stop offset="1" stopColor="#E7E1D5" />
            </linearGradient>
            <linearGradient id="hero-screen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#174535" />
              <stop offset="1" stopColor="#081F16" />
            </linearGradient>
            <linearGradient id="hero-rug" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F8EAD2" />
              <stop offset="1" stopColor="#EBD4AF" />
            </linearGradient>
            <linearGradient id="hero-ball" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#F7B578" />
              <stop offset="1" stopColor="#E8762F" />
            </linearGradient>
            <radialGradient id="hero-sun" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#FBE3B6" />
              <stop offset="1" stopColor="#FBE3B6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hero-vignette" cx="0.5" cy="0.45" r="0.75">
              <stop offset="0.6" stopColor="#0B2B20" stopOpacity="0" />
              <stop offset="1" stopColor="#0B2B20" stopOpacity="0.14" />
            </radialGradient>
            <filter id="hero-blur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <clipPath id="hero-window-clip">
              <path d="M455 350 L455 172 A140 140 0 0 1 735 172 L735 350 Z" />
            </clipPath>
          </defs>

          {/* Room */}
          <rect width="780" height="660" fill="url(#hero-wall)" />
          <rect x="0" y="0" width="780" height="360" fill="url(#hero-wall)" />
          <circle cx="700" cy="70" r="200" fill="url(#hero-sun)" opacity="0.65" />

          {/* Window */}
          <g>
            <path d="M455 350 L455 172 A140 140 0 0 1 735 172 L735 350 Z" fill="url(#hero-sky)" />
            <g clipPath="url(#hero-window-clip)">
              <circle cx="650" cy="160" r="34" fill="#F7DCA8" opacity="0.9" />
              <ellipse cx="520" cy="330" rx="130" ry="80" fill="#A8C8A4" />
              <ellipse cx="700" cy="340" rx="120" ry="90" fill="#8FB68C" />
              <ellipse cx="600" cy="352" rx="150" ry="70" fill="#9DBE96" />
              <circle cx="500" cy="245" r="34" fill="#7FAA7F" />
              <circle cx="548" cy="262" r="24" fill="#8FB68C" />
              <circle cx="700" cy="255" r="42" fill="#7FAA7F" />
              <path d="M560 350 L560 300" stroke="#6F9A70" strokeWidth="5" strokeLinecap="round" />
              <path d="M690 350 L690 280" stroke="#6F9A70" strokeWidth="6" strokeLinecap="round" />
              <rect x="455" y="120" width="280" height="40" fill="#FFFFFF" opacity="0.18" />
            </g>
            <path
              d="M455 350 L455 172 A140 140 0 0 1 735 172 L735 350 Z"
              fill="none"
              stroke="#FDF8EE"
              strokeWidth="12"
            />
            <path d="M595 66 L595 350" stroke="#FDF8EE" strokeWidth="8" />
            <path d="M455 226 L735 226" stroke="#FDF8EE" strokeWidth="8" />
            <rect x="438" y="342" width="314" height="16" rx="8" fill="#FBF5E9" />
          </g>

          {/* Sunbeams */}
          <g opacity="0.35">
            <path d="M470 350 L540 350 L400 660 L290 660 Z" fill="#FFF7E4" />
            <path d="M620 350 L690 350 L620 660 L520 660 Z" fill="#FFF7E4" />
          </g>

          {/* Wall art */}
          <g>
            <rect x="236" y="84" width="92" height="116" rx="10" fill="#FCF7EC" stroke="#DFC8A5" strokeWidth="3" />
            <path d="M252 180 L252 138 A30 30 0 0 1 312 138 L312 180 Z" fill="#1E5C45" />
            <circle cx="282" cy="126" r="10" fill="#F08A4B" />
            <rect x="348" y="66" width="74" height="92" rx="9" fill="#FCF7EC" stroke="#DFC8A5" strokeWidth="3" />
            <circle cx="385" cy="102" r="18" fill="#F6A96E" />
            <path d="M362 140 L385 112 L408 140 Z" fill="#2A7357" />
          </g>

          {/* Hanging plant */}
          <g>
            <path d="M92 0 L92 54" stroke="#B9915F" strokeWidth="3" />
            <path d="M66 54 L118 54 L110 84 L74 84 Z" fill="#C97F4C" />
            <path d="M74 84 C74 108 58 116 52 132" stroke="#2A7357" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M96 84 C96 116 104 128 118 140" stroke="#2A7357" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M86 84 C82 110 84 128 78 146" stroke="#4B9375" strokeWidth="4" fill="none" strokeLinecap="round" />
            <ellipse cx="50" cy="134" rx="10" ry="6" transform="rotate(-40 50 134)" fill="#2A7357" />
            <ellipse cx="120" cy="142" rx="11" ry="6" transform="rotate(35 120 142)" fill="#4B9375" />
            <ellipse cx="77" cy="148" rx="10" ry="6" transform="rotate(-10 77 148)" fill="#2A7357" />
          </g>

          {/* Sofa */}
          <g>
            <rect x="-70" y="352" width="212" height="120" rx="26" fill="#164936" />
            <rect x="-58" y="382" width="188" height="96" rx="24" fill="#1E5C45" />
            <rect x="-46" y="398" width="82" height="66" rx="16" fill="#F6EBD8" />
            <rect x="46" y="398" width="76" height="66" rx="16" fill="#E9B27E" />
            <rect x="-70" y="464" width="220" height="52" rx="20" fill="#123B2C" />
            <rect x="-58" y="508" width="14" height="30" rx="6" fill="#8A5A34" />
            <rect x="126" y="508" width="14" height="30" rx="6" fill="#8A5A34" />
          </g>

          {/* Floor */}
          <rect x="0" y="356" width="780" height="304" fill="url(#hero-floor)" />
          <rect x="0" y="352" width="780" height="10" fill="#F4E5CD" />
          <g stroke="#C79A6B" strokeWidth="1.4" opacity="0.35">
            <path d="M0 402 L780 396" />
            <path d="M0 448 L780 442" />
            <path d="M0 496 L780 489" />
            <path d="M0 546 L780 538" />
            <path d="M0 598 L780 590" />
          </g>
          <g stroke="#C79A6B" strokeWidth="1" opacity="0.22">
            <path d="M120 356 L96 660" />
            <path d="M320 356 L306 660" />
            <path d="M560 356 L574 660" />
            <path d="M720 356 L750 660" />
          </g>

          {/* Rug */}
          <ellipse cx="398" cy="576" rx="330" ry="82" fill="url(#hero-rug)" />
          <ellipse cx="398" cy="576" rx="330" ry="82" fill="none" stroke="#E0C49B" strokeWidth="3" />
          <ellipse cx="398" cy="576" rx="270" ry="62" fill="none" stroke="#E8762F" strokeOpacity="0.28" strokeWidth="5" strokeDasharray="18 16" />

          {/* Dog */}
          <ellipse cx="298" cy="566" rx="118" ry="22" fill="#6B4A2A" opacity="0.16" filter="url(#hero-blur)" />
          <g>
            <g
              className="animate-wag"
              style={{ transformOrigin: "208px 516px", transformBox: "view-box" }}
            >
              <path
                d="M210 524 C176 532 146 514 132 484 C122 462 138 446 152 456 C170 470 180 500 212 506 Z"
                fill="url(#hero-gold-deep)"
              />
              <path
                d="M140 470 C148 478 154 492 164 500"
                stroke="#F8DDB1"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.55"
                fill="none"
              />
            </g>

            <path
              d="M196 546 C176 500 190 446 234 421 C268 402 304 408 320 434 L322 522 C300 552 232 558 196 546 Z"
              fill="url(#hero-gold)"
            />
            <ellipse cx="255" cy="506" rx="54" ry="52" fill="#E7A95E" opacity="0.55" />
            <path
              d="M281 424 C318 404 352 422 358 464 L358 544 C336 558 302 558 287 548 Z"
              fill="#F3C88B"
            />
            <ellipse cx="334" cy="488" rx="34" ry="54" fill="#FBE7C4" opacity="0.85" />

            <rect x="316" y="466" width="30" height="88" rx="15" fill="#F0BF7E" />
            <rect x="347" y="468" width="28" height="86" rx="14" fill="#E9B26E" />
            <ellipse cx="331" cy="552" rx="20" ry="10" fill="#FBE7C4" />
            <ellipse cx="361" cy="552" rx="19" ry="10" fill="#F6D8A8" />
            <path d="M322 540 L322 548 M352 540 L352 548" stroke="#D89B55" strokeWidth="2" opacity="0.6" />

            <g>
              <path
                d="M268 312 C250 300 236 322 240 352 C244 382 260 402 280 402 C272 376 268 344 268 312 Z"
                fill="url(#hero-gold-deep)"
              />
              <path
                d="M266 330 C266 294 292 272 325 274 C360 276 382 300 380 335 C378 370 354 392 322 392 C290 392 268 368 266 330 Z"
                fill="url(#hero-gold)"
              />
              <ellipse cx="302" cy="306" rx="30" ry="19" fill="#FBE0B6" opacity="0.6" />
              <path
                d="M372 304 C392 298 402 320 398 350 C394 380 380 398 364 400 C372 372 374 338 372 304 Z"
                fill="#D08B3F"
              />
              <ellipse cx="351" cy="362" rx="41" ry="31" fill="#F6D8A8" />
              <path d="M302 338 Q311 329 320 338" stroke="#3A2A20" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M342 334 Q351 325 360 334" stroke="#3A2A20" strokeWidth="4" fill="none" strokeLinecap="round" />
              <ellipse cx="374" cy="349" rx="13" ry="10" fill="#3A2A20" />
              <circle cx="369" cy="346" r="3" fill="#6B5444" />
              <path d="M374 360 C374 371 362 377 351 375" stroke="#3A2A20" strokeWidth="3" fill="none" strokeLinecap="round" />
              <ellipse cx="354" cy="378" rx="8" ry="6" fill="#E88A7B" />
              <path
                d="M276 399 C302 419 344 419 364 401"
                stroke="#0B2B20"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="330" cy="421" r="9" fill="#F08A4B" stroke="#FBF5E9" strokeWidth="2" />
              <path d="M330 417 L330 425" stroke="#FBF5E9" strokeWidth="2" strokeLinecap="round" />
            </g>

            <g stroke="#C9853D" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" fill="none">
              <path d="M218 470 C230 476 238 488 240 500" />
              <path d="M230 452 C242 458 250 468 254 480" />
            </g>
          </g>

          {/* Robot shadow */}
          <ellipse cx="588" cy="572" rx="100" ry="18" fill="#4A3826" opacity="0.16" filter="url(#hero-blur)" />

          {/* Robot */}
          <g>
            {/* arm */}
            <g>
              <path d="M524 470 L484 458" stroke="#F6F1E7" strokeWidth="18" strokeLinecap="round" />
              <path d="M484 458 L452 420" stroke="#F6F1E7" strokeWidth="16" strokeLinecap="round" />
              <circle cx="484" cy="458" r="11" fill="#E3DCCF" stroke="#CFC7B9" strokeWidth="2" />
              <circle cx="452" cy="420" r="9" fill="#E3DCCF" stroke="#CFC7B9" strokeWidth="2" />
              <circle cx="444" cy="412" r="8" fill="#F08A4B" />
              <g className="animate-float" style={{ animationDuration: "5s" }}>
                <circle cx="430" cy="390" r="20" fill="url(#hero-ball)" />
                <path d="M414 382 C424 392 440 400 448 396" stroke="#FBE7C4" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <path d="M416 399 C428 392 438 382 442 374" stroke="#FBE7C4" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
              </g>
            </g>

            {/* base */}
            <rect x="520" y="520" width="136" height="46" rx="23" fill="url(#hero-robot)" stroke="#DCD5C9" strokeWidth="2" />
            <rect x="530" y="548" width="116" height="12" rx="6" fill="#153A2C" opacity="0.92" />
            <circle cx="552" cy="562" r="9" fill="#143A2C" />
            <circle cx="624" cy="562" r="9" fill="#143A2C" />
            <circle cx="552" cy="562" r="3" fill="#7DB79C" />
            <circle cx="624" cy="562" r="3" fill="#7DB79C" />

            {/* body */}
            <rect x="514" y="330" width="148" height="205" rx="72" fill="url(#hero-robot)" stroke="#DCD5C9" strokeWidth="2" />
            <path d="M628 348 C646 372 650 420 640 462 C632 496 620 516 602 528 L640 528 C650 496 656 450 654 410 C652 380 644 360 636 346 Z" fill="#D9D2C6" opacity="0.45" />
            <ellipse cx="548" cy="356" rx="20" ry="14" fill="#FFFFFF" opacity="0.9" />

            {/* ears */}
            <rect x="500" y="374" width="18" height="56" rx="9" fill="#F8F4EC" stroke="#DCD5C9" strokeWidth="2" />
            <rect x="658" y="374" width="18" height="56" rx="9" fill="#F8F4EC" stroke="#DCD5C9" strokeWidth="2" />
            <path d="M509 386 L509 418" stroke="#F08A4B" strokeWidth="3" strokeLinecap="round" />
            <path d="M667 386 L667 418" stroke="#F08A4B" strokeWidth="3" strokeLinecap="round" />

            {/* antenna */}
            <path d="M588 330 L588 300" stroke="#CFC7B9" strokeWidth="4" strokeLinecap="round" />
            <circle cx="588" cy="296" r="7" fill="#F08A4B" />
            <circle cx="588" cy="296" r="12" fill="none" stroke="#F08A4B" strokeOpacity="0.35" strokeWidth="3" />

            {/* face */}
            <rect x="527" y="344" width="122" height="100" rx="38" fill="url(#hero-screen)" />
            <rect x="527" y="344" width="122" height="100" rx="38" fill="none" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="2" />
            <g
              className="animate-blink"
              style={{ transformOrigin: "588px 388px", transformBox: "view-box" }}
            >
              <rect x="550" y="374" width="15" height="27" rx="7.5" fill="#F6A96E" />
              <rect x="611" y="374" width="15" height="27" rx="7.5" fill="#F6A96E" />
              <circle cx="555" cy="381" r="2.5" fill="#FFF3E2" />
              <circle cx="616" cy="381" r="2.5" fill="#FFF3E2" />
            </g>
            <path d="M575 408 Q588 418 601 408" stroke="#F6A96E" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="636" cy="356" r="4" fill="#7DB79C" />

            {/* chest */}
            <rect x="536" y="456" width="104" height="60" rx="25" fill="#FBF5E9" stroke="#E3DACC" strokeWidth="2" />
            <circle cx="559" cy="476" r="11" fill="#0B2B20" />
            <circle cx="588" cy="476" r="11" fill="#F08A4B" />
            <circle cx="617" cy="476" r="11" fill="#0B2B20" />
            <g fill="#FBF5E9">
              <circle cx="555" cy="473" r="2.2" />
              <circle cx="563" cy="473" r="2.2" />
              <circle cx="559" cy="479" r="3.2" />
            </g>
            <path d="M583 476 L593 476" stroke="#0B2B20" strokeWidth="3" strokeLinecap="round" />
            <circle cx="585" cy="472" r="2" fill="#0B2B20" />
            <circle cx="591" cy="472" r="2" fill="#0B2B20" />
            <path d="M614 472 L620 478 L614 484 Z" fill="#FBF5E9" />
            <rect x="563" y="498" width="50" height="8" rx="4" fill="#143A2C" opacity="0.85" />
            <text x="588" y="512" textAnchor="middle" fontSize="7" letterSpacing="2" fill="#0B2B20" opacity="0.45" fontFamily="sans-serif">
              PAWPAL
            </text>
          </g>

          {/* Smart bowl */}
          <g>
            <ellipse cx="708" cy="586" rx="46" ry="12" fill="#4A3826" opacity="0.14" filter="url(#hero-blur)" />
            <path d="M668 560 L748 560 L740 588 C738 596 730 600 708 600 C686 600 678 596 676 588 Z" fill="#FBF5E9" stroke="#DCD5C9" strokeWidth="2" />
            <ellipse cx="708" cy="560" rx="40" ry="9" fill="#1E5C45" />
            <ellipse cx="708" cy="561" rx="31" ry="6" fill="#7FB6C9" opacity="0.8" />
            <circle cx="742" cy="572" r="3" fill="#7DB79C" />
          </g>

          {/* Toys */}
          <g>
            <circle cx="408" cy="612" r="17" fill="url(#hero-ball)" />
            <path d="M394 606 C402 616 414 621 422 618" stroke="#FBE7C4" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M394 618 C404 612 412 604 416 597" stroke="#FBE7C4" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.8" />
            <path
              d="M466 618 C478 606 494 610 500 620 C506 610 522 608 530 618 C520 626 508 628 500 622 C492 630 476 628 466 618 Z"
              fill="#2A7357"
            />
            <circle cx="498" cy="620" r="5" fill="#F08A4B" />
          </g>

          {/* Treats */}
          <g fill="#C98A5B">
            <rect x="438" y="584" width="10" height="7" rx="3.5" transform="rotate(-18 438 584)" />
            <rect x="452" y="592" width="9" height="6" rx="3" transform="rotate(12 452 592)" />
          </g>

          {/* Sparkles */}
          <g fill="#F08A4B">
            <path d="M455 248 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 Z" opacity="0.7" />
            <path d="M690 330 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 Z" opacity="0.55" />
            <path d="M382 186 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 Z" opacity="0.45" />
          </g>

          <rect width="780" height="660" fill="url(#hero-vignette)" />
        </svg>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-3 top-4 animate-float sm:left-5 sm:top-6">
            <LiveCard />
          </div>
          <div className="absolute right-4 top-5 hidden animate-float sm:block" style={{ animationDelay: "1.4s" }}>
            <InsightCard />
          </div>
          <div className="absolute bottom-4 left-3 hidden animate-float sm:bottom-6 sm:left-5 sm:block" style={{ animationDelay: "0.8s" }}>
            <VoiceCard />
          </div>
          <div className="absolute bottom-5 right-4 hidden animate-float sm:block" style={{ animationDelay: "2s" }}>
            <TreatCard />
          </div>
        </div>
      </div>

    </div>
  );
}
