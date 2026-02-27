'use server';

/**
 * @fileOverview Server Action para tarefas via Backend Express.
 */

export async function getTodos() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
  
  try {
    const response = await fetch(`${backendUrl}/api/todos`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Falha na comunicação com o servidor de tarefas.');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro de conexão API:', error);
    return [];
  }
}
