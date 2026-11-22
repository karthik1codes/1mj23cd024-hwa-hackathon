import { NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") ?? "";
  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "Supabase is not configured." }, { status: 503 });
  }
  const { data: user, error } = await supabase.from("users").select("id, email").eq("id", userId).maybeSingle();
  if (error || !user) {
    return NextResponse.json({ ok: false, error: error?.message ?? "User not found." }, { status: error ? 500 : 404 });
  }
  const { data: orders } = await supabase.from("orders").select("*").eq("user_id", userId).order("created_at", { ascending: false });
  const subscription = {
    userId: user.id,
    email: user.email,
    orders: orders ?? [],
    latestPlanId: orders?.[0]?.plan ?? null,
  };
  return NextResponse.json({ ok: true, subscription }, { status: 200 });
}
