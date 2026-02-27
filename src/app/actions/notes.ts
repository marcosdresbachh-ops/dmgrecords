'use server';

import { revalidatePath } from 'next/cache';

/**
 * @fileOverview Server Action que consome o Backend Express da DMG Records.
 */

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

export async function getNotes() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/notes`, {
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error(`Erro na API: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Falha ao buscar notas:', error);
    return [];
  }
}

export async function addNote(title: string) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) throw new Error('Falha ao salvar nota no banco real.');
    
    // Força o Next.js a atualizar os dados na página do HUB
    revalidatePath('/hub');
    return await response.json();
  } catch (error) {
    console.error('Erro na ação addNote:', error);
    return null;
  }
}
