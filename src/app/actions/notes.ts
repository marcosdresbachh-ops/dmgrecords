
'use server';

import { revalidatePath } from 'next/cache';

/**
 * @fileOverview Server Action para gerenciamento de notas via Backend Express com autodetecção de host.
 */

function getBackendUrl() {
  const envUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
  if (envUrl) return envUrl;
  
  const port = process.env.BACKEND_PORT || '3001';
  return `http://localhost:${port}`;
}

const API_BASE = `${getBackendUrl()}/api`;

export async function getNotes() {
  try {
    const response = await fetch(`${API_BASE}/notes`, {
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error(`Erro na API: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('[DMG-NOTES] Falha ao buscar notas:', error);
    return [];
  }
}

export async function addNote(title: string) {
  try {
    const response = await fetch(`${API_BASE}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) throw new Error('Falha ao salvar nota no backend.');
    
    revalidatePath('/hub');
    return await response.json();
  } catch (error) {
    console.error('[DMG-NOTES] Erro na ação addNote:', error);
    return null;
  }
}
