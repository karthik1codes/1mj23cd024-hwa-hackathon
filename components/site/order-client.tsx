"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Copy,
  Loader2,
  Lock,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CARE_PLUS_PRICE, orderPromos, plans, type Plan } from "@/lib/content";
import type { OrderRecord } from "@/lib/order-types";
import { cn, formatPrice } from "@/lib/utils";

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "New Zealand",
  "Singapore",
  "United Arab Emirates",
  "Germany",
  "France",
  "Netherlands",
  "Spain",
  "Italy",
  "Sweden",
  "Ireland",
  "Japan",
  "South Korea",
  "Brazil",
  "Mexico",
  "South Africa",
];

type Fields = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

const emptyFields: Fields = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  country: "India",
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-[0.72rem] font-medium text-red-600">
      {message}
    </p>
  );
}

export function OrderClient({ initialPlanId }: { initialPlanId: Plan["id"] }) {
  const [planId, setPlanId] = React.useState<Plan["id"]>(initialPlanId);
  const [quantity, setQuantity] = React.useState(1);
  const [addOn, setAddOn] = React.useState(false);
  const [promo] = React.useState("GOODBOY");
  const [fields, setFields] = React.useState<Fields>(emptyFields);
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({});
  const [serverError, setServerError] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [order, setOrder] = React.useState<OrderRecord | null>(null);
  const [copied, setCopied] = React.useState(false);

  const plan = plans.find((item) => item.id === planId) ?? plans[1];
  const promoRate = orderPromos[promo.trim().toUpperCase()] ?? 0;
  const subtotal = plan.price * quantity;
  const discount = Math.round(subtotal * promoRate);
  const addOnPrice = addOn ? CARE_PLUS_PRICE : 0;
  const total = subtotal - discount + addOnPrice;

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFields((current) => ({ ...current, [key]: event.target.value }));
    setFieldErrors((current) => ({ ...current, [key]: "" }));
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (fields.name.trim().length < 2) errors.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) errors.email = "Enter a valid email address.";
    if (fields.address.trim().length < 5) errors.address = "Enter a delivery address.";
    if (fields.city.trim().length < 2) errors.city = "Enter a city.";
    if (fields.postalCode.trim().length < 3) errors.postalCode = "Enter a postal code.";
    return errors;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setServerError("");
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const first = Object.keys(errors)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId,
          quantity,
          addOn,
          promo: promo.trim() || undefined,
          customer: {
            name: fields.name.trim(),
            email: fields.email.trim(),
            phone: fields.phone.trim() || undefined,
            address: fields.address.trim(),
            city: fields.city.trim(),
            postalCode: fields.postalCode.trim(),
            country: fields.country,
          },
        }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Record<string, string>;
        order?: OrderRecord;
      };

      if (!response.ok || !data.ok || !data.order) {
        setFieldErrors(data.fieldErrors ?? {});
        setServerError(data.error ?? "We couldn't place that order. Please try again.");
        return;
      }

      if (typeof window !== "undefined") window.location.assign(plan.checkoutUrl);
    } catch {
      setServerError("Network hiccup. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const copyOrderId = async () => {
    if (!order) return;
    try {
      await navigator.clipboard.writeText(order.id);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard is a bonus */
    }
  };

  if (order) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-[2rem] border border-forest-900/10 bg-cream-50 shadow-lift">
          <div className="relative overflow-hidden bg-forest-950 px-6 py-10 text-center text-cream-100 sm:px-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-16 top-0 size-64 rounded-full bg-ember-500/20 blur-3xl" />
              <div className="absolute -right-10 bottom-0 size-56 rounded-full bg-forest-400/15 blur-3xl" />
            </div>
            <span className="relative mx-auto grid size-16 place-items-center rounded-full bg-ember-400 text-forest-950">
              <Check className="size-8" strokeWidth={3} />
            </span>
            <p className="relative mt-5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ember-300">
              Payment successful
            </p>
            <h1 className="relative mt-2 font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
              You&apos;re all set, {order.customer.name.split(" ")[0]}.
            </h1>
            <p className="relative mx-auto mt-2 max-w-md text-[0.9rem] leading-relaxed text-cream-100/60">
              {order.customer.name.split(" ")[0]}&apos;s PawPal is being packed with
              care. Estimated delivery:{" "}
              <span className="font-semibold text-cream-50">{order.estimatedDelivery}</span>.
            </p>

            <button
              type="button"
              onClick={copyOrderId}
              className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.78rem] font-semibold text-cream-100/80 transition-colors hover:bg-white/10"
            >
              {order.id}
              {copied ? <Check className="size-3.5 text-forest-300" /> : <Copy className="size-3.5" />}
              <span className="sr-only">{copied ? "Copied" : "Copy order number"}</span>
            </button>
          </div>

          <div className="px-6 py-7 sm:px-10">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-forest-900/60">
                  {order.items[0].name} × {order.items[0].quantity}
                </span>
                <span className="font-semibold text-forest-950">{formatPrice(order.totals.subtotal)}</span>
              </div>
              {order.totals.discount > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-forest-900/60">Promo {order.promo}</span>
                  <span className="font-semibold text-forest-700">−{formatPrice(order.totals.discount)}</span>
                </div>
              )}
              {order.addOn && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-forest-900/60">PawPal Care+ · 12 months</span>
                  <span className="font-semibold text-forest-950">{formatPrice(order.totals.addOn)}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-sm">
                <span className="text-forest-900/60">Shipping</span>
                <span className="font-semibold text-forest-700">Free</span>
              </div>
              <div className="flex items-center justify-between border-t border-forest-900/10 pt-3">
                <span className="font-display text-lg font-semibold text-forest-950">Total</span>
                <span className="font-display text-2xl font-semibold text-forest-950">
                  {formatPrice(order.totals.total)}
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-forest-900/10 bg-cream-100/60 p-4">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-forest-900/45">
                Delivery to
              </p>
              <p className="mt-1 text-[0.85rem] leading-relaxed text-forest-900/70">
                {order.customer.name}
                <br />
                {order.customer.address}, {order.customer.city} {order.customer.postalCode}
                <br />
                {order.customer.country}
              </p>
              <p className="mt-2 text-[0.75rem] text-forest-900/45">
                Order details saved for {order.customer.email}.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="default" className="flex-1">
                <Link href="/">
                  <ArrowLeft />
                  Back to PawPal
                </Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setOrder(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <ShoppingBag />
                Place another order
              </Button>
            </div>
            <p className="mt-4 text-center text-[0.7rem] text-forest-900/40">
              Payment of {formatPrice(order.totals.total)} received via Razorpay for order {order.id}.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
      <div>
        <div className="mb-8">
          <span className="eyebrow">
            <Lock className="size-3.5" /> Checkout · free shipping
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-forest-950 sm:text-5xl">
            Bring home <span className="italic text-ember-500">PawPal.</span>
          </h1>
          <p className="mt-3 max-w-lg text-[0.98rem] leading-relaxed text-forest-900/60">
            One small step for you, a much happier afternoon for them. Free
            shipping and a 30-night happiness trial are included.
          </p>
        </div>

        <section aria-labelledby="step-plan" className="rounded-[1.75rem] border border-forest-900/10 bg-cream-50 p-5 shadow-soft sm:p-6">
          <div className="flex items-center gap-3">
            <span className="grid size-7 place-items-center rounded-full bg-forest-900 text-[0.65rem] font-bold text-cream-50">01</span>
            <h2 id="step-plan" className="font-display text-xl font-semibold text-forest-950">Choose your PawPal</h2>
          </div>

          <fieldset className="mt-4">
            <legend className="sr-only">Choose a PawPal plan</legend>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {plans.map((option) => {
                const selected = option.id === planId;
                return (
                  <label
                    key={option.id}
                    className={cn(
                      "relative cursor-pointer rounded-2xl border p-4 transition-all duration-200 focus-within:ring-2 focus-within:ring-ember-400 focus-within:ring-offset-2 focus-within:ring-offset-cream-50",
                      selected
                        ? "border-forest-900 bg-forest-900 text-cream-50 shadow-soft"
                        : "border-forest-900/10 bg-cream-100/50 text-forest-950 hover:border-forest-900/30",
                    )}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={option.id}
                      checked={selected}
                      onChange={() => setPlanId(option.id)}
                      className="sr-only"
                    />
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[0.82rem] font-bold leading-tight">{option.name}</span>
                      <span
                        className={cn(
                          "grid size-[1.05rem] shrink-0 place-items-center rounded-full border",
                          selected ? "border-ember-400 bg-ember-400 text-forest-950" : "border-forest-900/20",
                        )}
                      >
                        {selected && <Check className="size-2.5" strokeWidth={3} />}
                      </span>
                    </div>
                    <p className={cn("mt-1 text-[0.7rem]", selected ? "text-cream-100/55" : "text-forest-900/45")}>
                      {option.note}
                    </p>
                    <p className="mt-3 font-display text-xl font-semibold">{formatPrice(option.price)}</p>
                    {option.compareAt && (
                      <p className={cn("text-[0.65rem] line-through", selected ? "text-cream-100/35" : "text-forest-900/35")}>
                        {formatPrice(option.compareAt)}
                      </p>
                    )}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-forest-900/10 pt-4">
            <div>
              <p className="text-[0.78rem] font-semibold text-forest-950">Quantity</p>
              <p className="text-[0.68rem] text-forest-900/45">One robot per dog works best.</p>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-forest-900/15 bg-cream-100 p-1">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="grid size-9 place-items-center rounded-full text-forest-900 transition-colors hover:bg-cream-300 disabled:opacity-30"
                disabled={quantity <= 1}
              >
                <Minus className="size-4" />
              </button>
              <span aria-live="polite" className="w-8 text-center text-sm font-bold text-forest-950">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(5, q + 1))}
                aria-label="Increase quantity"
                className="grid size-9 place-items-center rounded-full text-forest-900 transition-colors hover:bg-cream-300 disabled:opacity-30"
                disabled={quantity >= 5}
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>
          <FieldError id="quantity-error" message={fieldErrors.quantity} />
        </section>

        <section aria-labelledby="step-details" className="mt-5 rounded-[1.75rem] border border-forest-900/10 bg-cream-50 p-5 shadow-soft sm:p-6">
          <div className="flex items-center gap-3">
            <span className="grid size-7 place-items-center rounded-full bg-forest-900 text-[0.65rem] font-bold text-cream-50">02</span>
            <h2 id="step-details" className="font-display text-xl font-semibold text-forest-950">Where should we send it?</h2>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="field-name">Full name</Label>
              <Input
                id="field-name"
                value={fields.name}
                onChange={update("name")}
                placeholder="Priya Sharma"
                autoComplete="name"
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
                className={cn("mt-1.5", fieldErrors.name && "border-red-400")}
              />
              <FieldError id="name-error" message={fieldErrors.name} />
            </div>
            <div>
              <Label htmlFor="field-email">Email</Label>
              <Input
                id="field-email"
                type="email"
                value={fields.email}
                onChange={update("email")}
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                className={cn("mt-1.5", fieldErrors.email && "border-red-400")}
              />
              <FieldError id="email-error" message={fieldErrors.email} />
            </div>
            <div>
              <Label htmlFor="field-phone">Phone <span className="font-normal normal-case tracking-normal text-forest-900/35">(optional)</span></Label>
              <Input
                id="field-phone"
                type="tel"
                value={fields.phone}
                onChange={update("phone")}
                placeholder="+91 98765 43210"
                autoComplete="tel"
                className="mt-1.5"
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="field-address">Delivery address</Label>
              <Input
                id="field-address"
                value={fields.address}
                onChange={update("address")}
                placeholder="Flat / house, street, area"
                autoComplete="street-address"
                aria-invalid={Boolean(fieldErrors.address)}
                aria-describedby={fieldErrors.address ? "address-error" : undefined}
                className={cn("mt-1.5", fieldErrors.address && "border-red-400")}
              />
              <FieldError id="address-error" message={fieldErrors.address} />
            </div>
            <div>
              <Label htmlFor="field-city">City</Label>
              <Input
                id="field-city"
                value={fields.city}
                onChange={update("city")}
                placeholder="Bengaluru"
                autoComplete="address-level2"
                aria-invalid={Boolean(fieldErrors.city)}
                aria-describedby={fieldErrors.city ? "city-error" : undefined}
                className={cn("mt-1.5", fieldErrors.city && "border-red-400")}
              />
              <FieldError id="city-error" message={fieldErrors.city} />
            </div>
            <div>
              <Label htmlFor="field-postalCode">Postal code</Label>
              <Input
                id="field-postalCode"
                value={fields.postalCode}
                onChange={update("postalCode")}
                placeholder="560001"
                autoComplete="postal-code"
                aria-invalid={Boolean(fieldErrors.postalCode)}
                aria-describedby={fieldErrors.postalCode ? "postalCode-error" : undefined}
                className={cn("mt-1.5", fieldErrors.postalCode && "border-red-400")}
              />
              <FieldError id="postalCode-error" message={fieldErrors.postalCode} />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="field-country">Country</Label>
              <div className="mt-1.5">
                <Select
                  value={fields.country}
                  onValueChange={(value) => {
                    setFields((current) => ({ ...current, country: value }));
                    setFieldErrors((current) => ({ ...current, country: "" }));
                  }}
                >
                  <SelectTrigger id="field-country" aria-label="Country">
                    <SelectValue placeholder="Choose a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <FieldError id="country-error" message={fieldErrors.country} />
            </div>
          </div>
        </section>


      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-[2rem] border border-forest-900/10 bg-cream-50 shadow-lift">
          <div className="border-b border-forest-900/10 bg-cream-100/70 px-6 py-5">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-forest-900/45">Your order</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-forest-900 text-cream-50">
                <ShoppingBag className="size-5" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold leading-tight text-forest-950">{plan.name}</p>
                <p className="text-[0.7rem] text-forest-900/50">Qty {quantity} · free shipping</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 px-6 py-5 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-forest-900/60">Subtotal</span>
              <span className="font-semibold text-forest-950">{formatPrice(subtotal)}</span>
            </div>
            {addOn && (
              <div className="flex items-center justify-between">
                <span className="text-forest-900/60">PawPal Care+</span>
                <span className="font-semibold text-forest-950">{formatPrice(addOnPrice)}</span>
              </div>
            )}
            {discount > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-forest-900/60">Promo {promo.trim().toUpperCase()}</span>
                <span className="font-semibold text-forest-700">−{formatPrice(discount)}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-forest-900/60">Shipping</span>
              <span className="font-semibold text-forest-700">Free</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-forest-900/60">Taxes</span>
              <span className="text-[0.78rem] text-forest-900/45">Included</span>
            </div>
            <div className="flex items-end justify-between border-t border-forest-900/10 pt-4">
              <span className="font-display text-lg font-semibold text-forest-950">Total</span>
              <span className="font-display text-3xl font-semibold text-forest-950">{formatPrice(total)}</span>
            </div>
          </div>

          <div className="px-6 pb-6">
            {serverError && (
              <p role="alert" className="mb-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-[0.75rem] font-medium text-red-700">
                {serverError}
              </p>
            )}
            <Button type="submit" variant="accent" size="lg" className="w-full" disabled={submitting}>
              {submitting ? <Loader2 className="animate-spin" /> : <Lock />}
              {submitting ? "Placing order…" : `Pay · ${formatPrice(total)}`}
            </Button>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.68rem] text-forest-900/40">
              <ShieldCheck className="size-3.5" />
              Secure checkout · via Razorpay
            </div>

            <div className="mt-5 space-y-2.5 border-t border-forest-900/10 pt-4">
              {[
                { icon: Truck, text: "Free carbon-neutral shipping" },
                { icon: Sparkles, text: "30-night happiness trial" },
                { icon: ShieldCheck, text: "2-year warranty included" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-[0.72rem] text-forest-900/55">
                  <item.icon className="size-3.5 text-forest-700" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 px-2 text-center text-[0.7rem] leading-relaxed text-forest-900/40">
          This is a preview store for PawPal. The order is confirmed through
          Razorpay — no card details are stored.
        </p>
      </aside>
    </form>
  );
}
