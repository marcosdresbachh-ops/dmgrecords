import React from 'react';
import './painel.css';

export const metadata = {
  title: 'Vale Indica — Painel do Lojista',
  description: 'Gerencie seu anúncio no Guia Comercial do Vale do Sinos da DMG Records.',
};

export default function PainelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      {children}
    </>
  );
}
