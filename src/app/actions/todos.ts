
'use server';

/**
 * @fileOverview Server Action para buscar tarefas do Supabase.
 */

import { supabase } from '@/lib/supabase';

export async function getTodos() {
  const { data, error } = await supabase
    .from('todos')
    .select();
    
  if (error) {
    console.error('Erro ao buscar dados do Supabase:', error);
    throw new Error('Falha na comunicação com o banco de dados.');
  }
  
  return data;
}
