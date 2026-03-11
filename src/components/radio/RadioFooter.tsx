
"use client";

import Link from 'next/link';
import { Calendar, FileText, Home, Info, Instagram, Mail, MessageCircle, Newspaper, Shield, Users, Youtube, Facebook, Twitter, Radio, MapPin } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';

export function RadioFooter() {
  return (
    <footer id="site-footer">
      <div className="footer-wrap">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1fr]">
          <div>
            <div className="mb-4">
              <Link href="/">
                <Logo height="50" variant="on-dark" />
              </Link>
            </div>
            <p className="footer-desc">Amor FM é uma rádio digital transmitida pela internet operada pela Dresbach Media Ltda.</p>
            <div className="footer-socials">
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-soc icon"><Instagram style={{ width: '15px', height: '15px' }} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-soc icon"><Facebook style={{ width: '15px', height: '15px' }} /></a>
              <a href="#" className="footer-soc icon"><Youtube style={{ width: '15px', height: '15px' }} /></a>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Menu</div>
            <ul>
              <li><Link href="/"><Home style={{ width: '12px', height: '12px' }} /> Início</Link></li>
              <li><Link href="/programacao"><Calendar style={{ width: '12px', height: '12px' }} /> Programação</Link></li>
              <li><Link href="/contato"><Mail style={{ width: '12px', height: '12px' }} /> Contato</Link></li>
              <li><Link href="/sobre"><Info style={{ width: '12px', height: '12px' }} /> Sobre Nós</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Interaja</div>
            <ul>
                <li><a href="#ao-vivo"><MessageCircle style={{ width: '12px', height: '12px' }} /> Chat Ao Vivo</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Legal</div>
            <ul>
              <li><Link href="/privacidade"><Shield style={{ width: '12px', height: '12px' }} /> Privacidade</Link></li>
              <li><Link href="/termos"><FileText style={{ width: '12px', height: '12px' }} /> Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
            <div className="text-center md:text-left">
                <p className="footer-copy">© 2026 Dresbach Media Ltda</p>
                <p className="footer-copy">Todos os direitos reservados.</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
