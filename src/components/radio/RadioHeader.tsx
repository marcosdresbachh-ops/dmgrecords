"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Megaphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function RadioHeader() {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);


  const pages = [
    { href: '/', label: 'Início' },
    { href: '/programacao', label: 'Programação' },
    { href: '/noticias', label: 'Blog' },
    { href: '/agencia-radio', label: 'Agência Rádio' },
    { href: '/noticias-taquara', label: 'Rádio Taquara' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="site-nav" id="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image src="/logo_radio_dmg.png" alt="DMG Records Rádio" width={100} height={22} style={{ height: 'auto' }} />
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
          <Link href="/anuncie" className="btn btn-red">
            <Megaphone style={{ width: '14px', height: '14px' }} /> Anuncie Conosco
          </Link>
        </div>
      </div>
    </header>
  );
}
