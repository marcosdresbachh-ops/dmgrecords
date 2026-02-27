'use server';

/**
 * @fileOverview Server Action que consome o Backend Express da DMG Records.
 * O fluxo de dados é: Next.js -> Node.js Express -> Supabase.
 */

export async function getNotes() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
  
  try {
    const response = await fetch(`${backendUrl}/api/notes`, {
      cache: 'no-store', // Garante dados sempre frescos (Real-time feel)
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`Erro na API Backend: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Falha ao conectar com o Motor API DMG:', error);
    return [];
  }
}
