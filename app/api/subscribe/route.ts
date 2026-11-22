import { NextResponse } from "next/server";

import { saveSubscriber, subscriberCount } from "@/lib/orders";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Cache-Control": "no-store",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: cors });
}

export async function GET() {
  return NextResponse.json(
    { ok: true, service: "PawPal newsletter", subscriberCount: await subscriberCount() },
    { headers: cors },
  );
}

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim() : "";
  } catch {
    return NextResponse.json(
      { ok: false, error: "Send a JSON body with an email address." },
      { status: 400, headers: cors },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 422, headers: cors },
    );
  }

  try {
    await saveSubscriber(email);
  } catch {
    /* best-effort */
  }

  return NextResponse.json(
    { ok: true, message: "You're on the list. Good things are coming." },
    { status: 201, headers: cors },
  );
}
