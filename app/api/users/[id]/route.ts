import { NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json({ ok: false, error: "Supabase is not configured." }, { status: 503 });
  }

  const { data: user, error: userError } = await supabase
    .from("users")
    .select("id, email, created_at")
    .eq("id", id)
    .maybeSingle();

  if (userError) {
    return NextResponse.json({ ok: false, error: userError.message }, { status: 500 });
  }
  if (!user) {
    return NextResponse.json({ ok: false, error: "User not found." }, { status: 404 });
  }

  const { data: orders, error: ordersError } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", id)
    .order("created_at", { ascending: false });

  if (ordersError) {
    return NextResponse.json({ ok: false, error: ordersError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, user, orders: orders ?? [] });
}
