import React from 'react';
import './admin.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: 'DMG Records — Painel Administrativo',
  description: 'Painel de gerenciamento da Rádio DMG Records.',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
          {children}
          <Toaster />
      </body>
    </html>
  );
}
