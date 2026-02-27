import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.BACKEND_PORT || 3001;

// Configuração do cliente Supabase (Core do Backend)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Middlewares Industriais
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

/**
 * Rota de Health Check
 */
app.get('/', (req, res) => {
  res.json({ 
    status: 'online', 
    service: 'DMG API Engine',
    timestamp: new Date().toISOString()
  });
});

/**
 * GESTÃO DE ARTISTAS
 */
app.get('/api/admin/artists', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('artists')
      .select('*')
      .order('name', { ascending: true });
    
    if (error) throw error;
    res.json(data || []);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/artists', async (req, res) => {
  try {
    const artist = req.body;
    const { data, error } = await supabase
      .from('artists')
      .insert([artist])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GESTÃO DE OBRAS (TRACKS)
 */
app.get('/api/admin/tracks', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('tracks')
      .select('*')
      .order('id', { ascending: false });
    
    if (error) throw error;
    res.json(data || []);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/tracks', async (req, res) => {
  try {
    const track = req.body;
    const { data, error } = await supabase
      .from('tracks')
      .insert([track])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.patch('/api/admin/tracks/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const { data, error } = await supabase
      .from('tracks')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json(data[0]);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * ESTATÍSTICAS DO DASHBOARD (Processamento em Backend)
 */
app.get('/api/admin/stats', async (req, res) => {
  try {
    const { count: artistsCount } = await supabase.from('artists').select('*', { count: 'exact', head: true });
    const { count: tracksCount } = await supabase.from('tracks').select('*', { count: 'exact', head: true });
    
    res.json({
      activeArtists: artistsCount || 0,
      totalTracks: tracksCount || 0,
      platforms: 18,
      royaltiesQ1: "R$ 27.180",
      monthlyStreams: "1.2M"
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 MOTOR BACKEND DMG RODANDO: http://localhost:${port}`);
});
