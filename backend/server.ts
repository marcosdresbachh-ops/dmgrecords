
import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.BACKEND_PORT || 3001;

// Configuração do cliente Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Middlewares
app.use(cors());
app.use(express.json());

/**
 * Rota de Health Check
 */
app.get('/', (req, res) => {
  res.json({ status: 'online', service: 'DMG API Engine' });
});

/**
 * Rota para buscar tarefas (todos) do Supabase
 */
app.get('/api/todos', async (req, res) => {
  try {
    const { data, error } = await supabase.from('todos').select();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

/**
 * Rota para buscar notas do Supabase
 */
app.get('/api/notes', async (req, res) => {
  try {
    const { data, error } = await supabase.from('notes').select();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Servidor backend industrial rodando em http://localhost:${port}`);
});
