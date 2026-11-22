import Link from "next/link";

import { cn } from "@/lib/utils";

export function PawMark({
  className,
  padClassName,
}: {
  className?: string;
  padClassName?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <ellipse cx="11.5" cy="17" rx="4.4" ry="6" transform="rotate(-24 11.5 17)" fill="currentColor" />
      <ellipse cx="20" cy="11.4" rx="4.5" ry="6.2" transform="rotate(-8 20 11.4)" fill="currentColor" />
      <ellipse cx="28.8" cy="11.4" rx="4.5" ry="6.2" transform="rotate(8 28.8 11.4)" fill="currentColor" />
      <ellipse cx="37.2" cy="17" rx="4.4" ry="6" transform="rotate(24 37.2 17)" fill="currentColor" />
      <path
        d="M24 43c-7.4 0-12.2-4.2-12.2-9.1 0-3.7 2.9-6.4 6.3-6.4 2.5 0 4.3 1.3 5.9 3.2 1.6-1.9 3.4-3.2 5.9-3.2 3.4 0 6.3 2.7 6.3 6.4C36.2 38.8 31.4 43 24 43Z"
        className={padClassName ?? "text-ember-400"}
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({
  className,
  tone = "light",
  href = "/",
}: {
  className?: string;
  tone?: "light" | "dark";
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="PawPal home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "grid size-10 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6",
          tone === "light"
            ? "bg-forest-900 text-cream-50"
            : "bg-cream-50 text-forest-900",
        )}
      >
        <PawMark className="size-6" />
      </span>
      <span
        className={cn(
          "font-display text-[1.55rem] font-semibold leading-none tracking-[-0.03em]",
          tone === "light" ? "text-forest-950" : "text-cream-50",
        )}
      >
        PawPal
      </span>
    </Link>
  );
}
