
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

/**
 * Utilitário para criar um cliente Supabase no lado do servidor (Server Components/Actions).
 * Em um cenário real com autenticação via cookies, aqui seria usada a biblioteca @supabase/ssr.
 */
export async function createClient() {
  const supabaseUrl = process.env.SUPABASE_URL || '';
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}
