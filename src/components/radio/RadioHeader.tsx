"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Logo } from '@/components/shared/Logo';

export function RadioHeader() {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pages = [
    { href: '/', label: 'Início' },
    { href: '/programacao', label: 'Programação' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="site-nav" id="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Logo />
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
        </div>
      </div>
    </header>
  );
}
