import React from 'react';
import './vale-indica.css';

export const metadata = {
  title: 'Vale Indica — Guia Comercial do Vale do Sinos · DMG Records',
  description: 'Encontre os melhores comércios, restaurantes e serviços de Taquara, Rolante, Três Coroas, Igrejinha e toda a região do Vale do Sinos.',
};

export default function ValeIndicaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,700;1,9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <div className="vale-indica-page">
        {children}
      </div>
    </>
  );
}
