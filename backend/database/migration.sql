
-- SCRIPT DE MIGRAÇÃO INDUSTRIAL DMG RECORDS
-- Copie e cole no SQL Editor do Supabase

-- 1. Artistas
CREATE TABLE IF NOT EXISTS artists (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  artist_name TEXT,
  role TEXT DEFAULT 'Artista',
  genre TEXT,
  email TEXT UNIQUE,
  phone TEXT,
  country TEXT DEFAULT 'Brasil',
  status TEXT DEFAULT 'active',
  tracks INTEGER DEFAULT 0,
  streams TEXT DEFAULT '0',
  royalties TEXT DEFAULT 'R$ 0',
  joined TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ipi TEXT,
  pro TEXT DEFAULT 'None',
  bio TEXT,
  avatar_url TEXT,
  banner_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tracks (Obras)
CREATE TABLE IF NOT EXISTS tracks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  genre TEXT,
  duration TEXT,
  isrc TEXT UNIQUE,
  iswc TEXT UNIQUE,
  status TEXT DEFAULT 'pending',
  platforms TEXT[] DEFAULT '{}',
  streams TEXT DEFAULT '0',
  royalties TEXT DEFAULT 'R$ 0',
  release_date TEXT,
  type TEXT DEFAULT 'Single',
  audio_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Albuns / EPs
CREATE TABLE IF NOT EXISTS albums (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  type TEXT DEFAULT 'Album',
  tracks_count INTEGER DEFAULT 0,
  release_date TEXT,
  upc TEXT UNIQUE,
  status TEXT DEFAULT 'planning',
  cover_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Contratos
CREATE TABLE IF NOT EXISTS contracts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  is_exclusive BOOLEAN DEFAULT FALSE,
  split_ratio TEXT DEFAULT '70/30',
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'active',
  document_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Royalties
CREATE TABLE IF NOT EXISTS royalties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  period TEXT NOT NULL,
  gross_amount DECIMAL(12,2) DEFAULT 0,
  net_amount DECIMAL(12,2) DEFAULT 0,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Pagamentos
CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  period TEXT,
  method TEXT DEFAULT 'PIX',
  amount DECIMAL(12,2) NOT NULL,
  payment_date DATE,
  status TEXT DEFAULT 'pending',
  receipt_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Invoices (Notas Fiscais)
CREATE TABLE IF NOT EXISTS invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  recipient TEXT NOT NULL,
  description TEXT,
  amount DECIMAL(12,2) NOT NULL,
  issue_date DATE DEFAULT CURRENT_DATE,
  status TEXT DEFAULT 'emitted',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Campanhas de Marketing
CREATE TABLE IF NOT EXISTS marketing_campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  artist_id UUID REFERENCES artists(id) ON DELETE SET NULL,
  reach TEXT DEFAULT '0',
  clicks TEXT DEFAULT '0',
  budget TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Licenciamento
CREATE TABLE IF NOT EXISTS licenses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  track_id UUID REFERENCES tracks(id) ON DELETE CASCADE,
  licensee TEXT NOT NULL,
  type TEXT,
  territory TEXT DEFAULT 'Worldwide',
  amount DECIMAL(12,2) DEFAULT 0,
  validity TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. Configuração do Site
CREATE TABLE IF NOT EXISTS site_config (
  id INTEGER PRIMARY KEY DEFAULT 1,
  title TEXT,
  description TEXT,
  keywords TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  address TEXT,
  google_analytics_id TEXT,
  facebook_pixel_id TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT single_row CHECK (id = 1)
);

-- Inserir dados iniciais para teste (Seeds)
INSERT INTO artists (name, artist_name, genre, email, country, status, tracks, streams, royalties) 
VALUES ('Vini Amaral', 'Vini Amaral', 'R&B / Trap', 'vini@dmgrecords.com.br', 'Brasil', 'active', 12, '1.2M', 'R$ 5.420')
ON CONFLICT (email) DO NOTHING;

INSERT INTO site_config (id, title, description, contact_email, address)
VALUES (1, 'Dresbach Records', 'Gravadora Independente Oficial', 'contato@dmgrecords.com.br', 'Taquara, RS Brasil')
ON CONFLICT (id) DO NOTHING;
