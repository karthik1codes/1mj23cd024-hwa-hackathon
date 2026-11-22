import { NextResponse } from "next/server";

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

  let handled = false;
  if (eventType === "payment.failed" || status === "failed") {
    handled = true;
  } else if (eventType === "subscription.deleted" || status === "cancelled" || status === "canceled") {
    handled = true;
  } else if (eventType === "subscription.updated" || eventType === "subscription.created" || status === "active") {
    handled = true;
  }

  return NextResponse.json(
    {
      ok: true,
      handled,
      eventType,
      userId: userId || null,
      planId: planId || null,
      status: status || null,
    },
    { status: 200 },
  );
}
