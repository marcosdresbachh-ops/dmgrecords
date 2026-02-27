-- Inserir admin user com senha hashada
-- A senha será hashada pelo script Node.js antes de inserir
-- Este script é executado após o 001_full_migration.sql

-- Inserir admin user (senha: Ma596220@) - hash gerado pelo script setup
INSERT INTO public.admin_users (email, password_hash, name, role)
VALUES (
  'viniamaral2026@gmail.com',
  '$2b$10$placeholder',
  'Vini Amaral (Admin)',
  'Super Admin'
)
ON CONFLICT (email) DO NOTHING;
