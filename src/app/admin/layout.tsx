import React from 'react';
import './admin.css';

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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/umd/lucide.min.js"></script>
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}
