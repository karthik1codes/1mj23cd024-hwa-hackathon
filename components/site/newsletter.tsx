"use client";

import * as React from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export function Newsletter({ className }: { className?: string }) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStatus("error");
        setMessage(data?.error ?? "That didn't work. Try another email?");
        return;
      }
      setStatus("success");
      setMessage("You're on the list. Good things are coming.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network hiccup. Please try again.");
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="you@example.com"
          autoComplete="email"
          className="h-12 min-w-0 flex-1 rounded-full border border-white/15 bg-white/[0.06] px-5 text-sm text-cream-50 placeholder:text-cream-100/30 focus:border-ember-400/60 focus:outline-none focus:ring-2 focus:ring-ember-400/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-ember-400 px-6 text-sm font-semibold text-forest-950 transition-all hover:bg-ember-300 disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : status === "success" ? (
            <Check className="size-4" />
          ) : (
            <ArrowRight className="size-4" />
          )}
          {status === "success" ? "Subscribed" : "Join the pack"}
        </button>
      </form>
      <p
        aria-live="polite"
        className={cn(
          "mt-2.5 min-h-[1.1rem] text-[0.7rem]",
          status === "error" ? "text-red-300" : status === "success" ? "text-forest-300" : "text-cream-100/35",
        )}
      >
        {message || "One thoughtful email a month. No noise, no nonsense."}
      </p>
    </div>
  );
}
