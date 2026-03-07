"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Megaphone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function RadioHeader() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  const pages = [
    { href: '/', label: 'Início' },
    { href: '/programacao', label: 'Programação' },
    { href: '/noticias', label: 'Notícias' },
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
            <Link key={p.href} href={p.href} className={isClient && pathname === p.href ? 'active' : ''}>
              {p.label}
            </Link>
          ))}
        </nav>
        <div className="nav-right">
          <div className="nav-live"><div className="live-dot"></div>AO VIVO</div>
          <Link href="/radio-indoor" className="btn btn-red">
            <Megaphone style={{ width: '14px', height: '14px' }} /> Rádio Indoor
          </Link>
        </div>
      </div>
    </header>
  );
}
