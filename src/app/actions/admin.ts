
'use server';

import { revalidatePath } from 'next/cache';

/**
 * @fileOverview Ponte de Dados Industrial entre Next.js e Backend Express.
 */

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

async function apiFetch(endpoint: string, options: RequestInit = {}) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/admin${endpoint}`, {
      ...options,
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (e) {
    console.error(`Erro na chamada ${endpoint}:`, e);
    return null;
  }
}

export async function getAdminStats() {
  return await apiFetch('/stats') || { activeArtists: 0, totalTracks: 0, platforms: 0, royaltiesQ1: "R$ 0", monthlyStreams: "0" };
}

export async function getAdminActivity() {
  return await apiFetch('/activity') || [];
}

export async function getAdminArtists() {
  return await apiFetch('/artists') || [];
}

export async function createAdminArtist(payload: any) {
  const result = await apiFetch('/artists', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  revalidatePath('/painel-dmg');
  return result;
}

export async function getAdminTracks() {
  return await apiFetch('/tracks') || [];
}

export async function createAdminTrack(payload: any) {
  const result = await apiFetch('/tracks', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  revalidatePath('/painel-dmg');
  return result;
}

export async function updateTrackStatus(id: string, status: string) {
  const result = await apiFetch(`/tracks/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
  revalidatePath('/painel-dmg');
  return result;
}

export async function getAdminRoyalties() {
  return await apiFetch('/royalties');
}

export async function getAdminContracts() {
  return await apiFetch('/contracts') || [];
}

export async function getAdminDistribution() {
  return await apiFetch('/distribution');
}

export async function getAdminSiteConfig() {
  return await apiFetch('/site');
}

export async function getAdminSettings() {
  return await apiFetch('/settings');
}
