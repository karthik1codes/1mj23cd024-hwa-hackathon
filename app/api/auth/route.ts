import { NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    mode?: string;
    email?: string;
    password?: string;
  };
  const mode = body.mode === "signin" ? "signin" : "signup";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email) {
    return NextResponse.json({ ok: false, error: "Email is required." }, { status: 400 });
  }
  if (mode === "signin" && password.length < 6) {
    return NextResponse.json({ ok: false, error: "Password is required." }, { status: 400 });
  }

  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "Supabase is not configured." }, { status: 503 });
  }

  const { data: existing, error: existingError } = await supabase
    .from("users")
    .select("id, email")
    .eq("email", email)
    .maybeSingle();

  if (existingError) {
    return NextResponse.json({ ok: false, error: existingError.message }, { status: 500 });
  }

  let userId = "";
  let created = false;

  if (mode === "signup") {
    const { data: inserted, error: insertError } = await supabase.from("users").insert({ email }).select("id").single();
    if (insertError) {
      return NextResponse.json({ ok: false, error: insertError.message }, { status: 500 });
    }
    userId = inserted?.id ?? "";
    created = Boolean(inserted);
  } else {
    if (!existing) {
      return NextResponse.json({ ok: false, error: "Account not found." }, { status: 404 });
    }
    userId = existing.id;
  }

  return NextResponse.json({ ok: true, userId, email, created }, { status: 200 });
}
