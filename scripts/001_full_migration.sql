-- =============================================
-- DMG RECORDS - MIGRAÇÃO COMPLETA PARA SUPABASE
-- =============================================

-- 1. TABELA DE PROFILES (Artistas do Hub - ligada a auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  artist_name TEXT,
  email TEXT,
  role TEXT DEFAULT 'Artista',
  phone TEXT,
  country TEXT DEFAULT 'Brasil',
  ipi TEXT,
  pro TEXT DEFAULT 'None',
  bio TEXT,
  artist_slug TEXT,
  avatar_url TEXT,
  banner_url TEXT,
  playlist_url TEXT,
  instagram TEXT,
  spotify TEXT,
  whatsapp TEXT,
  kyc_status TEXT DEFAULT 'pending',
  wallet_balance DECIMAL(12,2) DEFAULT 0,
  ascap_status TEXT DEFAULT 'processing',
  ascap_submission_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "profiles_delete_own" ON public.profiles FOR DELETE USING (auth.uid() = id);

-- Trigger para criar perfil automaticamente no signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_artist_name TEXT;
  v_slug TEXT;
BEGIN
  v_artist_name := COALESCE(
    new.raw_user_meta_data ->> 'artist_name',
    CONCAT(
      COALESCE(new.raw_user_meta_data ->> 'first_name', ''),
      ' ',
      COALESCE(new.raw_user_meta_data ->> 'last_name', '')
    )
  );

  v_slug := LOWER(TRIM(REGEXP_REPLACE(
    REGEXP_REPLACE(v_artist_name, '[^\w\s-]', '', 'g'),
    '[\s_-]+', '-', 'g'
  )));

  INSERT INTO public.profiles (
    id, first_name, last_name, artist_name, email, role, phone,
    country, ipi, artist_slug, ascap_submission_date
  )
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data ->> 'first_name', NULL),
    COALESCE(new.raw_user_meta_data ->> 'last_name', NULL),
    NULLIF(TRIM(v_artist_name), ''),
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'role', 'Artista'),
    COALESCE(new.raw_user_meta_data ->> 'phone', NULL),
    COALESCE(new.raw_user_meta_data ->> 'country', 'Brasil'),
    COALESCE(new.raw_user_meta_data ->> 'ipi', NULL),
    v_slug,
    NOW()
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();


-- 2. TABELA DE ADMIN USERS (Login admin separado)
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'Super Admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Desabilitar RLS para admin_users (acesso via service_role key apenas)
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
-- Nenhuma policy RLS para admin_users - acesso apenas via service_role


-- 3. TABELA DE NOTAS (visível para todos os artistas logados)
CREATE TABLE IF NOT EXISTS public.notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "notes_select_all_authenticated" ON public.notes 
  FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "notes_insert_authenticated" ON public.notes 
  FOR INSERT WITH CHECK (auth.uid() = user_id);


-- 4. TABELAS EXISTENTES DO ADMIN (artists, tracks, albums, etc.)
CREATE TABLE IF NOT EXISTS public.artists (
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

CREATE TABLE IF NOT EXISTS public.tracks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  artist_id UUID REFERENCES public.artists(id) ON DELETE CASCADE,
  artist TEXT,
  genre TEXT,
  duration TEXT,
  isrc TEXT,
  iswc TEXT,
  status TEXT DEFAULT 'pending',
  platforms TEXT[] DEFAULT '{}',
  streams TEXT DEFAULT '0',
  royalties TEXT DEFAULT 'R$ 0',
  release_date TEXT,
  type TEXT DEFAULT 'Single',
  audio_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.albums (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  artist_id UUID REFERENCES public.artists(id) ON DELETE CASCADE,
  type TEXT DEFAULT 'Album',
  tracks_count INTEGER DEFAULT 0,
  release_date TEXT,
  upc TEXT,
  status TEXT DEFAULT 'planning',
  cover_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.contracts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  artist_id UUID REFERENCES public.artists(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  is_exclusive BOOLEAN DEFAULT FALSE,
  split_ratio TEXT DEFAULT '70/30',
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'active',
  document_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.royalties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  artist_id UUID REFERENCES public.artists(id) ON DELETE CASCADE,
  period TEXT NOT NULL,
  gross_amount DECIMAL(12,2) DEFAULT 0,
  net_amount DECIMAL(12,2) DEFAULT 0,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  artist_id UUID REFERENCES public.artists(id) ON DELETE CASCADE,
  period TEXT,
  method TEXT DEFAULT 'PIX',
  amount DECIMAL(12,2) NOT NULL,
  payment_date DATE,
  status TEXT DEFAULT 'pending',
  receipt_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  recipient TEXT NOT NULL,
  description TEXT,
  amount DECIMAL(12,2) NOT NULL,
  issue_date DATE DEFAULT CURRENT_DATE,
  status TEXT DEFAULT 'emitted',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.marketing_campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  artist_id UUID REFERENCES public.artists(id) ON DELETE SET NULL,
  reach TEXT DEFAULT '0',
  clicks TEXT DEFAULT '0',
  budget TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.licenses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  track_id UUID REFERENCES public.tracks(id) ON DELETE CASCADE,
  licensee TEXT NOT NULL,
  type TEXT,
  territory TEXT DEFAULT 'Worldwide',
  amount DECIMAL(12,2) DEFAULT 0,
  validity TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.site_config (
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


-- 5. SEEDS (Dados iniciais)
INSERT INTO public.artists (name, artist_name, genre, email, country, status, tracks, streams, royalties) 
VALUES ('Vini Amaral', 'Vini Amaral', 'R&B / Trap', 'vini@dmgrecords.com.br', 'Brasil', 'active', 12, '1.2M', 'R$ 5.420')
ON CONFLICT (email) DO NOTHING;

INSERT INTO public.site_config (id, title, description, contact_email, address)
VALUES (1, 'Dresbach Records', 'Gravadora Independente Oficial', 'contato@dmgrecords.com.br', 'Taquara, RS Brasil')
ON CONFLICT (id) DO NOTHING;
