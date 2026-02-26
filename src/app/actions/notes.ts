
'use server';

/**
 * @fileOverview Server Action para buscar notas do Supabase.
 */

import { supabase } from '@/lib/supabase';

export async function getNotes() {
  const { data, error } = await supabase
    .from('notes')
    .select();
    
  if (error) {
    console.error('Erro ao buscar notas do Supabase:', error);
    throw new Error('Falha na comunicação com o banco de dados.');
  }
  
  return data;
}
