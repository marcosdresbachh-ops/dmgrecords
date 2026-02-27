
import { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

/**
 * @fileOverview Controlador Industrial Central DMG Records.
 * Gerencia a lógica de todas as 20 subpáginas do sistema.
 */

// 1. Dashboard & Stats
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

// 2. Atividade
export const getActivity = async (req: Request, res: Response) => {
  res.json([
    { type: 'track', msg: 'Diego Ferreira enviou "Raiz do Norte" para revisão', time: 'há 2 horas', c: '#ff0000' },
    { type: 'dist', msg: 'Distribuição de "Miami Nights" concluída', time: 'Ontem 14:32', c: '#22c55e' },
    { type: 'contract', msg: 'Contrato de Sofia Andrade assinado digitalmente', time: 'Há 3 dias', c: '#3b82f6' }
  ]);
};

// 3. Artistas
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

// 4. Catálogo (Tracks)
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

// 5. Álbuns
export const getAlbums = async (req: Request, res: Response) => {
  res.json([
    { id: 'ALB001', title: 'Horizons EP', artist: 'Luna Verona', type: 'EP', tracks: 4, status: 'Distribuído' }
  ]);
};

// 6. Contratos
export const getContracts = async (req: Request, res: Response) => {
  res.json([
    { id: 'CNT001', artist: 'Luna Verona', type: 'Gravação Exclusiva', split: '70/30', status: 'Ativo' }
  ]);
};

// 7. Distribuição
export const getDistributionStatus = async (req: Request, res: Response) => {
  res.json({ active: true, globalReach: '180+ countries', pendingReviews: 2 });
};

// 8. Plataformas
export const getPlatforms = async (req: Request, res: Response) => {
  res.json([
    { name: 'Spotify', connected: true, streams: '696K' },
    { name: 'Apple Music', connected: true, streams: '264K' }
  ]);
};

// 9. Lançamentos
export const getReleases = async (req: Request, res: Response) => {
  res.json([
    { date: '2025-03-15', title: 'Raiz do Norte', artist: 'Diego Ferreira', status: 'Pending' }
  ]);
};

// 10. Royalties
export const getRoyalties = async (req: Request, res: Response) => {
  res.json({
    gross: 27180,
    netArtists: 18420,
    labelShare: 8760,
    period: 'Q1 2025',
    breakdown: [
      { source: 'Streaming', value: 19570 },
      { source: 'Radio', value: 3805 }
    ]
  });
};

// 11. Pagamentos
export const getPayments = async (req: Request, res: Response) => {
  res.json([
    { id: 'PAY001', artist: 'Luna Verona', amount: 2394, method: 'PIX', status: 'Paid' }
  ]);
};

// 12. Notas Fiscais
export const getInvoices = async (req: Request, res: Response) => {
  res.json([
    { number: 'NF-2025-001', client: 'FilmCo', amount: 2500, status: 'Emitida' }
  ]);
};

// 13. Analytics
export const getAnalytics = async (req: Request, res: Response) => {
  res.json({
    topCountries: [
      { country: 'USA', share: '42%' },
      { country: 'Brazil', share: '24%' }
    ],
    growth: '+18%'
  });
};

// 14. Marketing
export const getMarketingCampaigns = async (req: Request, res: Response) => {
  res.json([
    { name: 'Blue Horizon Launch', type: 'Press Release', reach: 8400, status: 'Active' }
  ]);
};

// 15. Licenciamento
export const getLicenses = async (req: Request, res: Response) => {
  res.json([
    { id: 'LIC-001', work: 'Blue Horizon', licensee: 'FilmCo', value: 2500, status: 'Active' }
  ]);
};

// 16. Gerenciar Site
export const getSiteConfig = async (req: Request, res: Response) => {
  res.json({
    title: 'Dresbach Records',
    description: 'Gravadora Independente Brasileira',
    seo: { keywords: 'trap, r&b, music' }
  });
};

// 17. Artist Hub
export const getHubMembers = async (req: Request, res: Response) => {
  res.json([
    { name: 'Luna Verona', email: 'luna@example.com', lastLogin: 'Há 2 horas', status: 'Active' }
  ]);
};

// 18. Relatórios
export const generateReport = async (req: Request, res: Response) => {
  res.json({ success: true, downloadUrl: '/api/admin/reports/download/current' });
};

// 19. Usuários Admin
export const getAdminUsers = async (req: Request, res: Response) => {
  res.json([
    { name: 'Marcos Dresbach', role: 'CEO', email: 'admin@dmgrecords.com.br' }
  ]);
};

// 20. Configurações
export const getSettings = async (req: Request, res: Response) => {
  res.json({
    companyName: 'Dresbach Records LTDA',
    cnpj: '63.187.175/0001-70',
    currency: 'BRL',
    taxRate: '15%'
  });
};
