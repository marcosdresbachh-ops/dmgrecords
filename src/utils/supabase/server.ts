
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

/**
 * Utilitário para criar um cliente Supabase no lado do servidor (Server Components/Actions).
 */
export async function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}
