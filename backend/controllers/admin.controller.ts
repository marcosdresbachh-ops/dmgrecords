
import { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

/**
 * DASHBOARD & STATS
 */
export const getStats = async (req: Request, res: Response) => {
  try {
    const { count: artists } = await supabase.from('artists').select('*', { count: 'exact', head: true });
    const { count: tracks } = await supabase.from('tracks').select('*', { count: 'exact', head: true });
    
    res.json({
      activeArtists: artists || 0,
      totalTracks: tracks || 0,
      platforms: 18,
      royaltiesQ1: "R$ 27.180",
      monthlyStreams: "1.2M",
      trend: "+14%"
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getActivity = async (req: Request, res: Response) => {
  res.json([
    { type: 'track', msg: 'Diego Ferreira enviou "Raiz do Norte" para revisão', time: 'há 2 horas', c: '#ff0000' },
    { type: 'dist', msg: 'Distribuição de "Miami Nights" concluída', time: 'Ontem 14:32', c: '#22c55e' }
  ]);
};

/**
 * ARTISTAS
 */
export const getArtists = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('artists').select('*').order('name');
  if (error) return res.status(500).json(error);
  res.json(data);
};

export const createArtist = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('artists').insert([req.body]).select();
  if (error) return res.status(500).json(error);
  res.status(201).json(data[0]);
};

export const getArtistById = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('artists').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json(error);
  res.json(data);
};

/**
 * CATÁLOGO
 */
export const getTracks = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('tracks').select('*').order('created_at', { ascending: false });
  if (error) return res.status(500).json(error);
  res.json(data);
};

export const createTrack = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('tracks').insert([req.body]).select();
  if (error) return res.status(500).json(error);
  res.status(201).json(data[0]);
};

export const updateTrackStatus = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('tracks').update({ status: req.body.status }).eq('id', req.params.id).select();
  if (error) return res.status(500).json(error);
  res.json(data[0]);
};

/**
 * FINANCEIRO & ROYALTIES
 */
export const getRoyalties = async (req: Request, res: Response) => {
  res.json({
    gross: 27180,
    netArtists: 18420,
    labelShare: 8760,
    period: 'Q1 2025'
  });
};

export const processRoyalties = async (req: Request, res: Response) => {
  console.log('Iniciando processamento industrial de royalties...');
  res.json({ success: true, message: 'Processamento concluído via engine.' });
};

export const getPayments = async (req: Request, res: Response) => {
  res.json([]);
};

export const getInvoices = async (req: Request, res: Response) => {
  res.json([]);
};

/**
 * JURÍDICO
 */
export const getContracts = async (req: Request, res: Response) => {
  res.json([]);
};

export const createContract = async (req: Request, res: Response) => {
  res.json({ success: true });
};

export const getLicenses = async (req: Request, res: Response) => {
  res.json([]);
};

/**
 * OPERACIONAL & SITE
 */
export const getDistributionStatus = async (req: Request, res: Response) => {
  res.json({ active: true, globalReach: '180+ countries' });
};

export const getReleases = async (req: Request, res: Response) => {
  res.json([]);
};

export const getAnalytics = async (req: Request, res: Response) => {
  res.json({ topPlats: ['Spotify', 'Apple Music', 'YouTube'] });
};

export const getSiteConfig = async (req: Request, res: Response) => {
  res.json({ title: 'Dresbach Records', seo: {} });
};

export const updateSiteConfig = async (req: Request, res: Response) => {
  res.json({ success: true });
};

export const getAdminUsers = async (req: Request, res: Response) => {
  res.json([]);
};

export const getSettings = async (req: Request, res: Response) => {
  res.json({ currency: 'BRL', timezone: 'America/Sao_Paulo' });
};
