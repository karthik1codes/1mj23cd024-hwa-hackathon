"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthForm({ mode }: { mode: "signup" | "signin" }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [pending, setPending] = React.useState(false);

  const isSignup = mode === "signup";
  const title = isSignup ? "Create your PawPal account" : "Welcome back";
  const subtitle = isSignup ? "Start your 30-night happiness trial." : "Sign in to pick up your pack.";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending) return;
    const trimmed = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
      setError("Enter a valid email address.");
      return;
    }
    if (isSignup && password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setError("");
    setPending(true);
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, email: trimmed, password: isSignup ? password : "" }),
      });
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string; userId?: string };
      if (!response.ok || !data.ok || !data.userId) {
        setError(data.error ?? "Could not complete the request.");
        return;
      }
      window.location.assign(`/users/${data.userId}`);
    } catch {
      setError("Network hiccup. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ember-300">{isSignup ? "Join PawPal" : "Welcome back"}</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-forest-950 sm:text-4xl">{title}</h1>
      <p className="mt-2 text-[0.9rem] text-forest-900/60">{subtitle}</p>

      <form onSubmit={onSubmit} className="mt-8 rounded-[2rem] border border-forest-900/10 bg-cream-50 p-6 shadow-lift sm:p-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="auth-email" className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-forest-900/60">
              Email
            </label>
            <input
              id="auth-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="flex h-12 w-full rounded-2xl border border-forest-900/10 bg-white px-4 text-sm text-forest-950 outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-200"
            />
          </div>
          {isSignup && (
            <div className="space-y-2">
              <label htmlFor="auth-password" className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-forest-900/60">
                Password
              </label>
              <input
                id="auth-password"
                type="password"
                autoComplete="new-password"
                placeholder="At least 6 characters"
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="flex h-12 w-full rounded-2xl border border-forest-900/10 bg-white px-4 text-sm text-forest-950 outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-200"
              />
            </div>
          )}
          {error ? <p className="text-[0.75rem] font-medium text-red-600">{error}</p> : null}
          <Button type="submit" variant="accent" size="lg" className="w-full" disabled={pending || !email.trim()}>
            {pending ? "Please wait…" : isSignup ? "Create account" : "Sign in"}
          </Button>
        </div>
      </form>

      <p className="mt-6 text-center text-[0.8rem] text-forest-900/60">
        {isSignup ? "Already have an account?" : "New to PawPal?"}{" "}
        <Link
          href={isSignup ? "/signin" : "/signup"}
          className="font-semibold text-forest-900 underline decoration-ember-400/60 decoration-2 underline-offset-4 hover:text-ember-600"
        >
          {isSignup ? "Sign in" : "Create account"}
        </Link>
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-forest-900/70 transition-colors hover:text-forest-950"
      >
        <ArrowLeft className="size-4" />
        Back to PawPal
      </Link>
    </div>
  );
}
