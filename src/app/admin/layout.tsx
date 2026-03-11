import React from 'react';
import './admin.css';
import Script from 'next/script';

export const metadata = {
  title: 'Amor FM — Painel Administrativo',
  description: 'Painel de gerenciamento da Rádio Amor FM.',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="lucide-script" src="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/umd/lucide.min.js" />
      {children}
    </>
  );
}
