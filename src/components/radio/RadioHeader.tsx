"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail } from 'lucide-react';

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
          <Link href="/contato" className="btn btn-red">
            <Mail style={{ width: '14px', height: '14px' }} /> Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
