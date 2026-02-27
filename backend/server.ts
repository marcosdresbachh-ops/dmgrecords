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
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
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
 * Rota para buscar notas do Supabase
 */
app.get('/api/notes', async (req, res) => {
  try {
    console.log('📡 Buscando notas no Supabase...');
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('id', { ascending: false });
    
    if (error) throw error;
    res.json(data);
  } catch (err: any) {
    console.error('Erro na Rota Notes (GET):', err.message);
    res.status(500).json({ error: err.message });
  }
});

/**
 * Rota para criar nova nota no Supabase
 */
app.post('/api/notes', async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Título é obrigatório' });

    console.log(`📝 Inserindo nova nota: ${title}`);
    const { data, error } = await supabase
      .from('notes')
      .insert([{ title }])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err: any) {
    console.error('Erro na Rota Notes (POST):', err.message);
    res.status(500).json({ error: err.message });
  }
});

/**
 * Rota para buscar tarefas (todos)
 */
app.get('/api/todos', async (req, res) => {
  try {
    const { data, error } = await supabase.from('todos').select('*').order('id', { ascending: true });
    if (error) throw error;
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 MOTOR BACKEND DMG RODANDO: http://localhost:${port}`);
  console.log(`🔗 Conectado ao Supabase: ${supabaseUrl ? 'OK' : 'PENDENTE'}`);
});
