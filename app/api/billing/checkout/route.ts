import { NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase";
import { plans } from "@/lib/content";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { userId?: string; planId?: string };
  const userId = typeof body.userId === "string" ? body.userId : "";
  const planId = typeof body.planId === "string" ? body.planId : "";

  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "Supabase is not configured." }, { status: 503 });
  }

  const { data: user } = await supabase.from("users").select("id, email").eq("id", userId).maybeSingle();
  if (!user) {
    return NextResponse.json({ ok: false, error: "User not found." }, { status: 404 });
  }

  const plan = plans.find((item) => item.id === planId) ?? plans[0];
  const amount = plan.price;
  const apiKey = process.env.DODO_API_KEY ?? "";
  let checkoutUrl = plan.checkoutUrl;

  if (apiKey) {
    const response = await fetch("https://api.dodopayments.com/checkout/v1/session", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        currency: "INR",
        description: `PawPal ${plan.name}`,
        metadata: { userId: user.id, planId: plan.id },
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://1mj23cd024-hwa-hackathon.vercel.app"}/payment/success?userId=${user.id}&planId=${plan.id}`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://1mj23cd024-hwa-hackathon.vercel.app"}/order?plan=${plan.id}&cancelled=1`,
      }),
    });
    const data = (await response.json().catch(() => ({}))) as { checkoutUrl?: string };
    if (response.ok && data.checkoutUrl) {
      checkoutUrl = data.checkoutUrl;
    }
  }

  return NextResponse.json(
    {
      ok: true,
      checkoutUrl,
      userId: user.id,
      planId: plan.id,
      amount,
      currency: "INR",
    },
    { status: 200 },
  );
}
