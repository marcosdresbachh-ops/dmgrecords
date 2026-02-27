
'use server';

import { revalidatePath } from 'next/cache';

/**
 * @fileOverview Ponte de Dados Industrial entre Next.js e Backend Express.
 * Implementa autodetecção dinâmica de URL para flexibilidade de portas e ambientes.
 */

function getBackendUrl() {
  const envUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
  if (envUrl) return envUrl;
  const port = process.env.BACKEND_PORT || '3001';
  return `http://localhost:${port}`;
}

const API_BASE = `${getBackendUrl()}/api/admin`;

async function apiFetch(endpoint: string, options: RequestInit = {}) {
  try {
    const url = `${API_BASE}${endpoint}`;
    
    const res = await fetch(url, {
      ...options,
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API Error ${res.status}: ${errorText || res.statusText}`);
    }
    
    return await res.json();
  } catch (e) {
    console.error(`[DMG-BRIDGE] Falha crítica em ${endpoint}:`, e);
    return null;
  }
}

// 0. Autenticação Admin
export async function loginAdmin(credentials: { email: string; pass: string }) {
  return await apiFetch('/login', {
    method: 'POST',
    body: JSON.stringify({ email: credentials.email, password: credentials.pass }),
  });
}

// 1 & 2. Dashboard & Stats
export async function getAdminStats() {
  return await apiFetch('/stats');
}

export async function getAdminActivity() {
  return await apiFetch('/activity');
}

// 3. Artistas
export async function getAdminArtists() {
  const data = await apiFetch('/artists');
  return Array.isArray(data) ? data : [];
}

export async function createAdminArtist(payload: any) {
  const result = await apiFetch('/artists', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  revalidatePath('/painel-dmg');
  return result;
}

// 4. Catálogo
export async function getAdminTracks() {
  const data = await apiFetch('/tracks');
  return Array.isArray(data) ? data : [];
}

export async function createAdminTrack(payload: any) {
  const result = await apiFetch('/tracks', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  revalidatePath('/painel-dmg');
  return result;
}

// 5 & 6. Álbuns e Contratos
export async function getAdminAlbums() {
  return await apiFetch('/albums') || [];
}

export async function getAdminContracts() {
  return await apiFetch('/contracts') || [];
}

// 7, 8 & 9. Distribuição, Plataformas e Lançamentos
export async function getAdminDistribution() {
  return await apiFetch('/distribution');
}

export async function getAdminPlatforms() {
  return await apiFetch('/platforms') || [];
}

export async function getAdminReleases() {
  return await apiFetch('/releases') || [];
}

// 10, 11 & 12. Financeiro (Royalties, Pagamentos, NFs)
export async function getAdminRoyalties() {
  return await apiFetch('/royalties') || [];
}

export async function getAdminPayments() {
  return await apiFetch('/payments') || [];
}

export async function getAdminInvoices() {
  return await apiFetch('/invoices') || [];
}

// 13, 14 & 15. Analytics, Marketing, Licenciamento
export async function getAdminAnalytics() {
  return await apiFetch('/analytics');
}

export async function getAdminMarketing() {
  return await apiFetch('/marketing') || [];
}

export async function getAdminLicenses() {
  return await apiFetch('/licenses') || [];
}

// 16, 17 & 18. Plataforma
export async function getAdminSiteConfig() {
  return await apiFetch('/site');
}

export async function getAdminHubMembers() {
  return await apiFetch('/hub/members') || [];
}

export async function generateAdminReport() {
  return await apiFetch('/reports/generate', { method: 'POST' });
}

// 19 & 20. Admin
export async function getAdminUsers() {
  return await apiFetch('/users') || [];
}

export async function getAdminSettings() {
  return await apiFetch('/settings');
}
