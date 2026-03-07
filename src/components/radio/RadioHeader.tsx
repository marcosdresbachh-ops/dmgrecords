"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Megaphone } from 'lucide-react';

export function RadioHeader() {
  const pathname = usePathname();

  const pages = [
    { href: '/', label: 'Início' },
    { href: '/programacao', label: 'Programação' },
    { href: '/noticias', label: 'Notícias' },
    { href: '/anuncie', label: 'Anuncie' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="site-nav" id="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-mark"></div>
          <span className="nav-brand">DMG <span>Records</span> Rádio</span>
        </Link>
        <nav className="nav-links">
          {pages.map(p => (
            <Link key={p.href} href={p.href} className={pathname === p.href ? 'active' : ''}>
              {p.label}
            </Link>
          ))}
        </nav>
        <div className="nav-right">
          <div className="nav-live"><div className="live-dot"></div>AO VIVO</div>
          <Link href="/anuncie" className="btn btn-red">
            <Megaphone style={{ width: '14px', height: '14px' }} /> Anuncie Conosco
          </Link>
        </div>
      </div>
    </header>
  );
}
