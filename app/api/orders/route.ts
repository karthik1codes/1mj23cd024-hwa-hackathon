import { NextResponse } from "next/server";

import { CARE_PLUS_PRICE, orderPromos, plans } from "@/lib/content";
import type { OrderCustomer, OrderRecord } from "@/lib/order-types";
import { deliveryEstimate, makeOrderId, orderCount, saveOrder } from "@/lib/orders";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Cache-Control": "no-store",
};

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status, headers: cors });
}

async function readBody(request: Request): Promise<Record<string, unknown>> {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Body must be a JSON object.");
    }
    return parsed as Record<string, unknown>;
  }
  if (contentType.includes("form")) {
    const form = await request.formData();
    const body: Record<string, unknown> = {};
    form.forEach((value, key) => {
      const field = typeof value === "string" ? value : value.name;
      const nested = key.match(/^customer(?:\[|\.)(.+?)\]?$/);
      if (nested) {
        const customer = (body.customer as Record<string, unknown> | undefined) ?? {};
        customer[nested[1]] = field;
        body.customer = customer;
      } else {
        body[key] = field;
      }
    });
    return body;
  }
  const text = await request.text();
  if (!text.trim()) return {};
  const parsed = JSON.parse(text);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Body must be an object.");
  }
  return parsed as Record<string, unknown>;
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: cors });
}

export async function GET() {
  const count = await orderCount();
  return json({
    ok: true,
    service: "PawPal orders API",
    currency: "INR",
    orderCount: count,
    endpoints: {
      create: "POST /api/orders",
      lookup: "GET /api/orders/{orderId}",
    },
    plans: plans.map((plan) => ({
      id: plan.id,
      name: plan.name,
      price: plan.price,
      compareAt: plan.compareAt ?? null,
    })),
    carePlus: CARE_PLUS_PRICE,
  });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await readBody(request);
  } catch {
    return json({ ok: false, error: "Could not read the request body. Send JSON or form data." }, 400);
  }

  const planId = asString(body.planId ?? body.plan ?? body.plan_id).toLowerCase();
  const plan = plans.find((item) => item.id === planId);
  const quantity = Number(body.quantity ?? 1);
  const addOnValue = body.addOn ?? body.addon ?? body.carePlus ?? body.care_plus;
  const addOn =
    addOnValue === true || addOnValue === "true" || addOnValue === "on" || addOnValue === 1;

  const rawCustomer =
    body.customer && typeof body.customer === "object" && !Array.isArray(body.customer)
      ? (body.customer as Record<string, unknown>)
      : body;

  const customer: OrderCustomer = {
    name: asString(rawCustomer.name).slice(0, 90),
    email: asString(rawCustomer.email).slice(0, 160),
    phone: asString(rawCustomer.phone).slice(0, 40) || undefined,
    address: asString(rawCustomer.address).slice(0, 200),
    city: asString(rawCustomer.city).slice(0, 90),
    postalCode: asString(rawCustomer.postalCode).slice(0, 24),
    country: asString(rawCustomer.country).slice(0, 60),
  };

  const fieldErrors: Record<string, string> = {};
  if (!plan) fieldErrors.planId = "Choose a valid plan: one, pro or pack.";
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 5) {
    fieldErrors.quantity = "Quantity must be a whole number between 1 and 5.";
  }
  if (customer.name.length < 2) fieldErrors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(customer.email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (customer.address.length < 5) fieldErrors.address = "Please enter a delivery address.";
  if (customer.city.length < 2) fieldErrors.city = "Please enter a city.";
  if (customer.postalCode.length < 3) fieldErrors.postalCode = "Please enter a postal code.";
  if (customer.country.length < 2) fieldErrors.country = "Please choose a country.";

  if (Object.keys(fieldErrors).length > 0 || !plan) {
    return json(
      {
        ok: false,
        error: "Some details need another look.",
        fieldErrors,
      },
      422,
    );
  }

  const promoInput = asString(body.promo).toUpperCase();
  const rate = orderPromos[promoInput] ?? 0;
  const promo = rate > 0 ? promoInput : null;

  const subtotal = plan.price * quantity;
  const discount = Math.round(subtotal * rate);
  const addOnPrice = addOn ? CARE_PLUS_PRICE : 0;
  const total = subtotal - discount + addOnPrice;

  const order: OrderRecord = {
    id: makeOrderId(),
    createdAt: new Date().toISOString(),
    status: "confirmed",
    customer,
    items: [{ planId: plan.id, name: plan.name, price: plan.price, quantity }],
    addOn,
    promo,
    totals: {
      subtotal,
      discount,
      addOn: addOnPrice,
      shipping: 0,
      total,
    },
    estimatedDelivery: deliveryEstimate(),
  };

  try {
    await saveOrder(order);
  } catch {
    /* the order is still confirmed for the client; storage is best-effort */
  }

  return json(
    {
      ok: true,
      message: "Order confirmed. Welcome to the pack.",
      order,
      razorpayKey: process.env.RAZORPAY_API_KEY ?? process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? null,
    },
    201,
  );
}
