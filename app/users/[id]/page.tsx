import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Package, ShieldCheck } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { createSupabaseServerClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: "Your PawPal account",
    description: "Your PawPal purchases and delivery details.",
  };
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(date);
}

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = createSupabaseServerClient();

  const userResult = supabase
    ? await supabase.from("users").select("id, email, created_at").eq("id", id).maybeSingle()
    : null;
  const user = userResult?.data ?? null;
  const ordersResult = supabase
    ? await supabase.from("orders").select("*").eq("user_id", id).order("created_at", { ascending: false })
    : null;
  const orders = Array.isArray(ordersResult?.data) ? ordersResult.data : [];

  const purchases = orders as Array<Record<string, unknown>>;

  return (
    <div className="min-h-screen bg-cream-100">
      <header className="sticky top-0 z-40 border-b border-forest-900/10 bg-cream-100/85 backdrop-blur-xl">
        <div className="container flex h-[4.75rem] items-center justify-between gap-4">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.8rem] font-semibold text-forest-900/70 transition-colors hover:bg-forest-900/5 hover:text-forest-950"
            >
              <ArrowLeft className="size-4" />
              Back to PawPal
            </Link>
          </div>
        </div>
      </header>

      <main className="relative py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-clip">
          <div className="absolute -right-32 top-0 size-[26rem] rounded-full bg-ember-200/40 blur-3xl" />
          <div className="absolute -left-40 top-1/2 size-[24rem] rounded-full bg-forest-200/30 blur-3xl" />
          <div className="paw-pattern absolute inset-x-0 bottom-0 h-64 opacity-25 [mask-image:linear-gradient(to_top,black,transparent)]" />
        </div>

        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-forest-900/40">
            <Link href="/" className="transition-colors hover:text-forest-900/70">
              PawPal
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-forest-900/70">Account</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ember-300">Your pack</p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-forest-950 sm:text-4xl">PawPal account</h1>
            <p className="mt-2 text-[0.9rem] text-forest-900/60">
              Purchases and delivery details for user <span className="font-semibold text-forest-900">{user?.email ?? id}</span>.
            </p>

            <div className="mt-8 space-y-4">
              {purchases.length === 0 ? (
                <div className="rounded-3xl border border-forest-900/10 bg-cream-50 p-8 text-center shadow-sm sm:p-12">
                  <Package className="mx-auto size-10 text-forest-700/60" />
                  <p className="mt-4 font-display text-xl font-semibold text-forest-950">No purchases yet.</p>
                  <p className="mt-2 text-[0.85rem] text-forest-900/55">
                    Your confirmed purchases will show up here once your PawPal order is placed.
                  </p>
                  <Link
                    href="/"
                    className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-forest-900 px-5 py-2.5 text-[0.8rem] font-semibold text-cream-50 transition-colors hover:bg-forest-950"
                  >
                    <ArrowLeft className="size-4" />
                    Back to PawPal
                  </Link>
                </div>
              ) : (
                purchases.map((order: Record<string, unknown>) => {
                  const totals = (order.totals ?? {}) as Record<string, number>;
                  const items = (order.items ?? []) as Array<Record<string, unknown>>;
                  const item = items[0];
                  const createdAt = String(order.createdAt ?? order.created_at ?? "");
                  return (
                    <div key={String(order.id)} className="overflow-hidden rounded-[2rem] border border-forest-900/10 bg-cream-50 shadow-lift">
                      <div className="relative overflow-hidden bg-forest-950 px-6 py-6 text-cream-100 sm:px-8">
                        <div className="pointer-events-none absolute inset-0">
                          <div className="absolute -left-16 top-0 size-64 rounded-full bg-ember-500/20 blur-3xl" />
                          <div className="absolute -right-10 bottom-0 size-56 rounded-full bg-forest-400/15 blur-3xl" />
                        </div>
                        <span className="relative inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-ember-300">
                          <ShieldCheck className="size-3.5 text-ember-300" />
                          {String(order.status ?? "confirmed")}
                        </span>
                        <h2 className="relative mt-3 font-display text-2xl font-semibold text-cream-50">
                          {item ? String(item.name) : `PawPal ${String(order.plan ?? "")}`}
                          {item ? ` x ${String(item.quantity ?? "1")}` : ""}
                        </h2>
                        <p className="relative mt-1 text-[0.75rem] text-cream-100/60">
                          Order {String(order.id ?? "")} · placed {formatDate(createdAt)}
                        </p>
                      </div>
                      <div className="space-y-2 px-6 py-6 sm:px-8">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-forest-900/60">Subtotal</span>
                          <span className="font-semibold text-forest-950">₹{Number(totals.subtotal ?? 0).toLocaleString("en-IN")}</span>
                        </div>
                        {Number(totals.discount ?? 0) > 0 && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-forest-900/60">Promo {String(order.promo ?? "")}</span>
                            <span className="font-semibold text-forest-700">-₹{Number(totals.discount).toLocaleString("en-IN")}</span>
                          </div>
                        )}
                        {Number(totals.addOn ?? 0) > 0 && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-forest-900/60">PawPal Care+</span>
                            <span className="font-semibold text-forest-950">₹{Number(totals.addOn).toLocaleString("en-IN")}</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-forest-900/60">Shipping</span>
                          <span className="font-semibold text-forest-700">Free</span>
                        </div>
                        <div className="mt-2 flex items-center justify-between border-t border-forest-900/10 pt-3 text-sm">
                          <span className="font-semibold text-forest-900">Total</span>
                          <span className="font-display text-lg font-semibold text-forest-950">
                            ₹{Number(totals.total ?? 0).toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-forest-900/10 bg-forest-950 py-6 text-cream-100">
        <div className="container flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[0.7rem] text-cream-100/40">
            © {new Date().getFullYear()} PawPal Robotics · Made for the goodest boys and girls.
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[0.7rem] text-cream-100/45">
              <ShieldCheck className="size-3.5 text-ember-300" />
              30-night trial
            </span>
            <Link href="/" className="text-[0.7rem] text-cream-100/45 transition-colors hover:text-cream-50">
              hello@pawpal.dog
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
