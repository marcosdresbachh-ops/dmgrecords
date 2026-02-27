
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
    { type: 'contract', msg: 'Contrato de Sofia Andrade assinado digitalmente', time: 'Há 3 dias', c: '#3b82f6' },
    { type: 'royalty', msg: 'Royalties Q1 2025 processados', time: '1 semana atrás', c: '#22c55e' }
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
    { id: 'ALB001', title: 'Horizons EP', artist: 'Luna Verona', type: 'EP', tracks: 4, status: 'Distribuído', releaseDate: 'Jan 2025' },
    { id: 'ALB002', title: 'Porto Sessions', artist: 'Marco Esteves', type: 'Álbum', tracks: 10, status: 'Em Produção', releaseDate: 'Mar 2025' }
  ]);
};

// 6. Contratos
export const getContracts = async (req: Request, res: Response) => {
  res.json([
    { id: 'CNT001', artist: 'Luna Verona', type: 'Gravação Exclusiva', split: '70/30', status: 'Ativo', expiry: 'Jan 2026' },
    { id: 'CNT002', artist: 'Diego Ferreira', type: 'Distribuição', split: '85/15', status: 'Pendente', expiry: 'Nov 2025' }
  ]);
};

// 7. Distribuição
export const getDistributionStatus = async (req: Request, res: Response) => {
  res.json({
    active: true,
    globalReach: '180+ countries',
    pendingReviews: 2,
    pipeline: [
      { step: 'Upload', status: 'done' },
      { step: 'Review', status: 'done' },
      { step: 'Metadata', status: 'active' },
      { step: 'Delivery', status: 'pending' }
    ]
  });
};

// 8. Plataformas
export const getPlatforms = async (req: Request, res: Response) => {
  res.json([
    { name: 'Spotify', connected: true, streams: '696K', icon: '🎵' },
    { name: 'Apple Music', connected: true, streams: '264K', icon: '🍎' },
    { name: 'SoundCloud', connected: true, streams: '42K', icon: '☁️' }
  ]);
};

// 9. Lançamentos
export const getReleases = async (req: Request, res: Response) => {
  res.json([
    { date: '2025-03-15', title: 'Raiz do Norte', artist: 'Diego Ferreira', status: 'Pending', type: 'Single' },
    { date: '2025-04-01', title: 'Blue Moon', artist: 'Luna Verona', status: 'Planned', type: 'EP' }
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
      { source: 'Streaming', value: 19570, pct: 72 },
      { source: 'Performance', value: 3805, pct: 14 },
      { source: 'Sync', value: 2175, pct: 8 }
    ]
  });
};

// 11. Pagamentos
export const getPayments = async (req: Request, res: Response) => {
  res.json([
    { id: 'PAY001', artist: 'Luna Verona', amount: 2394, method: 'PIX', status: 'Paid', date: '2025-03-10' },
    { id: 'PAY002', artist: 'Ayla Santos', amount: 6440, method: 'Wire', status: 'Paid', date: '2025-03-10' }
  ]);
};

// 12. Notas Fiscais
export const getInvoices = async (req: Request, res: Response) => {
  res.json([
    { number: 'NF-2025-001', client: 'FilmCo', amount: 2500, status: 'Emitida', date: '2025-01-15' },
    { number: 'NF-2025-002', client: 'StreamMax', amount: 800, status: 'Emitida', date: '2025-03-05' }
  ]);
};

// 13. Analytics
export const getAnalytics = async (req: Request, res: Response) => {
  res.json({
    topCountries: [
      { country: 'USA', share: '42%', growth: '+18%' },
      { country: 'Brazil', share: '24%', growth: '+32%' }
    ],
    growth: '+18%',
    totalStreams: '1.2M'
  });
};

// 14. Marketing
export const getMarketingCampaigns = async (req: Request, res: Response) => {
  res.json([
    { name: 'Blue Horizon Launch', type: 'Press Release', reach: 8400, status: 'Active', clicks: 1240 },
    { name: 'Miami Nights Ads', type: 'Meta Ads', reach: 124000, status: 'Active', clicks: 3820 }
  ]);
};

// 15. Licenciamento
export const getLicenses = async (req: Request, res: Response) => {
  res.json([
    { id: 'LIC-001', work: 'Blue Horizon', artist: 'Luna Verona', licensee: 'FilmCo', value: 2500, status: 'Active', type: 'Sync' }
  ]);
};

// 16. Gerenciar Site
export const getSiteConfig = async (req: Request, res: Response) => {
  res.json({
    title: 'Dresbach Records — Gravadora Independente Brasileira',
    description: 'Especializada em produção, mixagem e masterização.',
    seo: { keywords: 'trap, r&b, music, vini amaral' },
    contact: { email: 'contato@dmgrecords.com.br', phone: '+55 11 3000-0000' }
  });
};

// 17. Artist Hub
export const getHubMembers = async (req: Request, res: Response) => {
  res.json([
    { name: 'Luna Verona', email: 'luna@example.com', lastLogin: 'Há 2 horas', status: 'Active', works: 8 },
    { name: 'Vini Amaral', email: 'vini@dmgrecords.com.br', lastLogin: 'Agora', status: 'Active', works: 12 }
  ]);
};

// 18. Relatórios
export const generateReport = async (req: Request, res: Response) => {
  // Simulação de geração de relatório industrial
  res.json({ 
    success: true, 
    downloadUrl: '/api/admin/reports/download/current',
    filename: `DMG_Report_${Date.now()}.pdf`,
    timestamp: new Date().toISOString()
  });
};

// 19. Usuários Admin
export const getAdminUsers = async (req: Request, res: Response) => {
  res.json([
    { name: 'Marcos Dresbach', role: 'Super Admin', email: 'admin@dmgrecords.com.br', access: 'Total' },
    { name: 'Ana Financeiro', role: 'Financeiro', email: 'financeiro@dmgrecords.com.br', access: 'Restrito' }
  ]);
};

// 20. Configurações
export const getSettings = async (req: Request, res: Response) => {
  res.json({
    company: {
      name: 'Dresbach Records LTDA',
      cnpj: '63.187.175/0001-70',
      address: 'Taquara, RS Brasil'
    },
    finance: {
      currency: 'BRL',
      taxRate: '15%',
      payoutCycle: 'Trimestral'
    }
  });
};
