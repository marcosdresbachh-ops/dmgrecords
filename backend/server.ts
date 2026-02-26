
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente do arquivo .env na raiz
dotenv.config();

const app = express();
const port = process.env.BACKEND_PORT || 3001;

// Configuração do cliente Supabase
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

app.use(express.json());

/**
 * Rota para buscar tarefas (todos) do Supabase
 */
app.get('/api/todos', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('todos')
      .select();
      
    if (error) {
      console.error('Erro no Supabase:', error);
      return res.status(500).json({ error: error.message });
    }
    
    res.json(data);
  } catch (err) {
    console.error('Erro no servidor:', err);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

/**
 * Rota para buscar notas do Supabase
 */
app.get('/api/notes', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('notes')
      .select();
      
    if (error) {
      console.error('Erro no Supabase:', error);
      return res.status(500).json({ error: error.message });
    }
    
    res.json(data);
  } catch (err) {
    console.error('Erro no servidor:', err);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Servidor backend rodando em http://localhost:${port}`);
});
