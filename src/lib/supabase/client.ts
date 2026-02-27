import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_DMGSUPABASE_URL!,
    process.env.NEXT_PUBLIC_DMGSUPABASE_ANON_KEY!
  );
}
