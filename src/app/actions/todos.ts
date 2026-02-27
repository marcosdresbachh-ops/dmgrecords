
'use server';

/**
 * @fileOverview Server Action para tarefas via Backend Express com resolução dinâmica de URL.
 */

function getBackendUrl() {
  const envUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
  if (envUrl) return envUrl;
  
  const port = process.env.BACKEND_PORT || '3001';
  return `http://localhost:${port}`;
}

export async function getTodos() {
  const API_BASE = `${getBackendUrl()}/api`;
  
  try {
    const response = await fetch(`${API_BASE}/todos`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Falha na comunicação com o servidor de tarefas.');
    }

    return await response.json();
  } catch (error) {
    console.error('[DMG-TODOS] Erro de conexão API:', error);
    return [];
  }
}
