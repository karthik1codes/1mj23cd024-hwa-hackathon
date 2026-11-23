import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { createSupabaseServerClient } from "@/lib/supabase";
import { Card } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: "Payment successful · PawPal",
    description: "Your PawPal order was confirmed.",
  };
}

export default async function PaymentSuccessPage({ searchParams }: { searchParams: Promise<{ userId?: string; orderId?: string }> }) {
  const { userId, orderId } = await searchParams;
  const supabase = createSupabaseServerClient();

  let verified = false;
  let orderDetails: Record<string, unknown> | null = null;
  let userEmail = userId ?? "";

  if (supabase && userId) {
    const { data: user, error: userError } = await supabase.from("users").select("id, email").eq("id", userId).maybeSingle();
    if (!userError && user) {
      const { data: orders } = await supabase.from("orders").select("*").eq("user_id", userId).order("created_at", { ascending: false });
      const found = (orders ?? []).find((order) => orderId ? String(order.id) === orderId : true) ?? orders?.[0] ?? null;
      if (found) {
        verified = true;
        orderDetails = found as Record<string, unknown>;
      }
      userEmail = user.email;
    }
  }

  if (!verified) {
    return (
      <div className="min-h-screen bg-cream-100">
        <main className="relative py-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-clip">
            <div className="absolute -right-32 top-0 size-[26rem] rounded-full bg-ember-200/40 blur-3xl" />
            <div className="absolute -left-40 top-1/2 size-[24rem] rounded-full bg-forest-200/30 blur-3xl" />
            <div className="paw-pattern absolute inset-x-0 bottom-0 h-64 opacity-25 [mask-image:linear-gradient(to_top,black,transparent)]" />
          </div>
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <h1 className="font-display text-3xl font-semibold text-forest-950 sm:text-4xl">Payment could not be confirmed</h1>
              <p className="mt-3 text-[0.95rem] text-forest-900/60">
                We could not verify this payment on the PawPal side. Please reach out to support if you were charged, or head back
                to place the order again.
              </p>
              <Link href="/order" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-forest-900 px-5 py-2.5 text-[0.8rem] font-semibold text-cream-50 transition-colors hover:bg-forest-950">
                Back to checkout
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const totals = (orderDetails?.totals ?? {}) as Record<string, number>;
  const items = (orderDetails?.items ?? []) as Array<Record<string, unknown>>;
  const item = items[0];

  return (
    <div className="min-h-screen bg-cream-100">
      <main className="relative py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-clip">
          <div className="absolute -right-32 top-0 size-[26rem] rounded-full bg-ember-200/40 blur-3xl" />
          <div className="absolute -left-40 top-1/2 size-[24rem] rounded-full bg-forest-200/30 blur-3xl" />
          <div className="paw-pattern absolute inset-x-0 bottom-0 h-64 opacity-25 [mask-image:linear-gradient(to_top,black,transparent)]" />
        </div>
        <div className="container">
          <Card className="mx-auto max-w-2xl rounded-[2rem] border border-forest-900/10 bg-cream-50 p-8 text-center shadow-lift sm:p-12">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-ember-400 text-forest-950">
              <Check className="size-8" strokeWidth={3} />
            </span>
            <p className="mt-5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ember-300">Payment confirmed</p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-forest-950 sm:text-4xl">Thank you for your purchase{userEmail ? `, ${userEmail.split("@")[0]}` : ""}.</h1>
            <p className="mt-2 text-[0.9rem] text-forest-900/60">Thank you for purchasing your PawPal — your order {String(orderDetails?.id ?? "")} was verified and is being packed with care.</p>
            <div className="mt-6 space-y-2 rounded-2xl bg-cream-100 p-5 text-left">
              <div className="flex items-center justify-between text-sm">
                <span className="text-forest-900/60">{item ? String(item.name) : "PawPal order"}</span>
                <span className="font-semibold text-forest-950">₹{Number(totals.total ?? 0).toLocaleString("en-IN")}</span>
              </div>
            </div>
            <Link href="/" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-forest-900 px-5 py-2.5 text-[0.8rem] font-semibold text-cream-50 transition-colors hover:bg-forest-950">
              Back to PawPal
            </Link>
          </Card>
        </div>
      </main>
    </div>
  );
}
