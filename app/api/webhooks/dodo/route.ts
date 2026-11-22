import { NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const processedEvents = new Set<string>();

export async function POST(request: Request) {
  const signature = request.headers.get("x-dodo-signature") ?? "";
  const secret = process.env.DODO_WEBHOOK_SECRET ?? "";
  const rawBody = await request.text();

  if (secret) {
    const crypto = await import("node:crypto");
    const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
    const provided = signature.replace(/^sha256=/, "");
    if (expected !== provided) {
      return NextResponse.json({ ok: false, error: "Invalid signature." }, { status: 401 });
    }
  }

  const payload = (await request.json().catch(() => (null))) as {
    event?: { type?: string; id?: string };
    data?: { userId?: string; planId?: string; status?: string };
    metadata?: { userId?: string; planId?: string };
  };

  const eventType = payload?.event?.type ?? "";
  const eventId = payload?.event?.id ?? "";
  if (eventId) {
    if (processedEvents.has(eventId)) {
      return NextResponse.json({ ok: true, handled: false, reason: "duplicate" }, { status: 200 });
    }
    processedEvents.add(eventId);
  }

  const userId = payload?.data?.userId ?? payload?.metadata?.userId ?? "";
  const planId = payload?.data?.planId ?? payload?.metadata?.planId ?? "";
  const status = payload?.data?.status ?? "";

  let orderStatus: string | null = null;
  if (eventType === "payment.failed" || status === "failed") {
    orderStatus = "failed";
  } else if (eventType === "subscription.deleted" || status === "cancelled" || status === "canceled") {
    orderStatus = "cancelled";
  } else if (eventType === "subscription.updated" || eventType === "subscription.created" || status === "active") {
    orderStatus = "confirmed";
  }

  const supabase = createSupabaseServerClient();
  let dbError: string | null = null;
  let updatedOrderId: string | null = null;

  if (userId && planId && orderStatus && supabase) {
    const { data: orders, error } = await supabase
      .from("orders")
      .select("id, status")
      .eq("user_id", userId)
      .eq("plan", planId)
      .order("created_at", { ascending: false });

    const order = (orders ?? [])[0];
    if (error) {
      dbError = error.message;
    } else if (order) {
      updatedOrderId = String(order.id);
      const { error: updateError } = await supabase
        .from("orders")
        .update({ status: orderStatus })
        .eq("id", order.id);
      if (updateError) dbError = updateError.message;
    }
  }

  return NextResponse.json(
    {
      ok: true,
      handled: Boolean(orderStatus),
      eventType,
      userId: userId || null,
      planId: planId || null,
      status: status || null,
      orderStatus,
      updatedOrderId,
      dbError,
    },
    { status: 200 },
  );
}
