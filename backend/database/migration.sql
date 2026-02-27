
-- DMG RECORDS INDUSTRIAL DATABASE SCHEMA
-- Migration for Supabase / PostgreSQL

-- 1. Artistas
CREATE TABLE IF NOT EXISTS artists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  artist_slug TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'Artista',
  genre TEXT,
  email TEXT UNIQUE,
  phone TEXT,
  country TEXT DEFAULT 'Brasil',
  status TEXT DEFAULT 'active',
  pro TEXT DEFAULT 'None',
  ipi TEXT,
  bio TEXT,
  avatar_url TEXT,
  banner_url TEXT,
  instagram TEXT,
  spotify TEXT,
  whatsapp TEXT,
  streams_total BIGINT DEFAULT 0,
  royalties_total DECIMAL(12,2) DEFAULT 0.00,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 2. Obras (Tracks)
CREATE TABLE IF NOT EXISTS tracks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  genre TEXT,
  type TEXT DEFAULT 'Single', -- Single, EP, Album
  duration TEXT,
  isrc TEXT UNIQUE,
  iswc TEXT,
  status TEXT DEFAULT 'pending', -- pending, review, distributed
  platforms JSONB DEFAULT '[]',
  streams BIGINT DEFAULT 0,
  royalties DECIMAL(12,2) DEFAULT 0.00,
  released_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 3. Álbuns / EPs
CREATE TABLE IF NOT EXISTS albums (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  type TEXT DEFAULT 'Álbum',
  release_date DATE,
  upc TEXT,
  status TEXT DEFAULT 'Em Produção',
  cover_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 4. Contratos
CREATE TABLE IF NOT EXISTS contracts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  split_artist INTEGER DEFAULT 70,
  split_label INTEGER DEFAULT 30,
  status TEXT DEFAULT 'Ativo',
  start_date DATE DEFAULT CURRENT_DATE,
  expiry_date DATE,
  exclusivity BOOLEAN DEFAULT TRUE,
  document_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 5. Financeiro: Royalties
CREATE TABLE IF NOT EXISTS royalties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  amount DECIMAL(12,2) NOT NULL,
  source TEXT, -- Streaming, Sync, Performance
  period TEXT, -- Q1 2025
  status TEXT DEFAULT 'pending',
  processed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 6. Financeiro: Pagamentos
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  amount DECIMAL(12,2) NOT NULL,
  method TEXT DEFAULT 'PIX',
  status TEXT DEFAULT 'Paid',
  payment_date DATE DEFAULT CURRENT_DATE,
  receipt_url TEXT
);

-- 7. Financeiro: Notas Fiscais
CREATE TABLE IF NOT EXISTS invoices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  invoice_number TEXT UNIQUE NOT NULL,
  client_name TEXT,
  description TEXT,
  amount DECIMAL(12,2) NOT NULL,
  status TEXT DEFAULT 'Emitida',
  issue_date DATE DEFAULT CURRENT_DATE
);

-- 8. Marketing e Campanhas
CREATE TABLE IF NOT EXISTS marketing_campaigns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT,
  artist_id UUID REFERENCES artists(id),
  reach BIGINT DEFAULT 0,
  clicks BIGINT DEFAULT 0,
  budget DECIMAL(12,2) DEFAULT 0.00,
  status TEXT DEFAULT 'Active'
);

-- 9. Licenciamento
CREATE TABLE IF NOT EXISTS licenses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  work_id UUID REFERENCES tracks(id),
  artist_id UUID REFERENCES artists(id),
  licensee TEXT,
  value DECIMAL(12,2) DEFAULT 0.00,
  type TEXT DEFAULT 'Sync',
  territory TEXT DEFAULT 'Worldwide',
  status TEXT DEFAULT 'Active',
  expiry_date DATE
);

-- 10. Notas de Produção (Dashboard)
CREATE TABLE IF NOT EXISTS production_notes (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 11. Configuração do Site
CREATE TABLE IF NOT EXISTS site_config (
  id INTEGER PRIMARY KEY DEFAULT 1,
  title TEXT,
  description TEXT,
  seo_keywords TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  address TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 12. Usuários Admin
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'Admin',
  access_level TEXT DEFAULT 'Total',
  last_login TIMESTAMP WITH TIME ZONE
);
