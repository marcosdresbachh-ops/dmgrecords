
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import adminRoutes from './routes/admin.routes';

// Carrega o .env local da pasta backend para isolamento total de segredos
dotenv.config();

const app = express();
const port = process.env.BACKEND_PORT || 3001;

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

// Health Check
app.get('/', (req, res) => {
  res.json({ 
    status: 'online', 
    engine: 'DMG API Engine v2.5',
    security: 'Environment variables fully migrated to backend',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`🚀 MOTOR BACKEND DMG RODANDO NA PORTA ${port}`);
  console.log(`🔒 SEGURANÇA: Chaves Supabase carregadas internamente.`);
});
