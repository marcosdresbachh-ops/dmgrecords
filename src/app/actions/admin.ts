'use server';

import { revalidatePath } from 'next/cache';

/**
 * @fileOverview Server Actions para o Painel Administrativo que consomem o Backend Express.
 */

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

export async function getAdminStats() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/admin/stats`, { cache: 'no-store' });
    return await res.json();
  } catch (e) {
    return { activeArtists: 0, totalTracks: 0, platforms: 0, royaltiesQ1: "R$ 0", monthlyStreams: "0" };
  }
}

export async function getAdminArtists() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/admin/artists`, { cache: 'no-store' });
    return await res.json();
  } catch (e) {
    return [];
  }
}

export async function createAdminArtist(formData: any) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/admin/artists`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    revalidatePath('/painel-dmg');
    return await res.json();
  } catch (e) {
    return null;
  }
}

export async function getAdminTracks() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/admin/tracks`, { cache: 'no-store' });
    return await res.json();
  } catch (e) {
    return [];
  }
}

export async function createAdminTrack(formData: any) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/admin/tracks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    revalidatePath('/painel-dmg');
    return await res.json();
  } catch (e) {
    return null;
  }
}

export async function updateTrackStatus(id: string, status: string) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/admin/tracks/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    revalidatePath('/painel-dmg');
    return await res.json();
  } catch (e) {
    return null;
  }
}
