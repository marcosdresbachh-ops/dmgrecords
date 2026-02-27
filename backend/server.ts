
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import adminRoutes from './routes/admin.routes';

// Carrega o .env local para obter chaves Supabase e PORT
dotenv.config();

const app = express();

/**
 * DETECÇÃO DINÂMICA DE PORTA
 * Prioridade: 
 * 1. process.env.PORT (Serviços de Nuvem / Firebase App Hosting)
 * 2. process.env.BACKEND_PORT (Definido no .env local)
 * 3. 3001 (Fallback padrão)
 */
const port = process.env.PORT || process.env.BACKEND_PORT || 3001;

// Middlewares Corporativos
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Log de Requisições Industriais
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

/**
 * ROTAS DO SISTEMA
 */
app.use('/api/admin', adminRoutes);

// Mock endpoints para compatibilidade com actions antigas
app.get('/api/notes', (req, res) => res.json([{ id: 1, title: 'Nota de Integração' }]));
app.post('/api/notes', (req, res) => res.status(201).json({ id: Date.now(), ...req.body }));
app.get('/api/todos', (req, res) => res.json([{ id: 1, text: 'Configurar Distribuição' }]));

// Health Check
app.get('/', (req, res) => {
  res.json({ 
    status: 'online', 
    engine: 'DMG API Engine v2.6',
    detection: 'Dynamic Port Enabled',
    timestamp: new Date().toISOString()
  });
});

const server = app.listen(port, () => {
  const actualPort = (server.address() as any).port;
  console.log(`\n🚀 MOTOR BACKEND DMG ATIVO`);
  console.log(`📍 URL: http://localhost:${actualPort}`);
  console.log(`🔒 SEGURANÇA: Chaves Supabase carregadas internamente.\n`);
});
