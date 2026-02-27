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
  origin: '*', // Em produção, restringir para o domínio do frontend
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
 * Rota para buscar tarefas (todos) do Supabase via Motor Express
 */
app.get('/api/todos', async (req, res) => {
  try {
    const { data, error } = await supabase.from('todos').select('*').order('id', { ascending: true });
    if (error) throw error;
    res.json(data);
  } catch (err: any) {
    console.error('Erro na Rota Todos:', err.message);
    res.status(500).json({ error: err.message });
  }
});

/**
 * Rota para buscar notas do Supabase via Motor Express
 */
app.get('/api/notes', async (req, res) => {
  try {
    console.log('📡 Buscando notas no Supabase...');
    const { data, error } = await supabase.from('notes').select('*').order('id', { ascending: false });
    if (error) throw error;
    res.json(data);
  } catch (err: any) {
    console.error('Erro na Rota Notes:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 MOTOR BACKEND DMG RODANDO: http://localhost:${port}`);
  console.log(`🔗 Conectado ao Supabase: ${supabaseUrl ? 'OK' : 'PENDENTE'}`);
});
