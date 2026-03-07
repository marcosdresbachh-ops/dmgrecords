import React from 'react';
import './indoor.css';

export const metadata = {
  title: 'DMG Records — Painel Indoor',
};

export default function IndoorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      {children}
    </>
  );
}
