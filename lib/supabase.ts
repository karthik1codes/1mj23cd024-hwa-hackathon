import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "";
export const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY ?? "";

export function hasSupabaseEnv() {
  return Boolean(supabaseUrl && supabasePublishableKey && supabaseSecretKey);
}

export function createSupabaseServerClient() {
  if (!supabaseUrl || !supabaseSecretKey) return null;
  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function createSupabaseBrowserClient() {
  if (!supabaseUrl || !supabasePublishableKey) return null;
  return createClient(supabaseUrl, supabasePublishableKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
