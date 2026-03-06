"use client";

import Link from 'next/link';
import { Calendar, FileText, Home, Info, Instagram, Mail, Megaphone, MessageCircle, Newspaper, Shield, Users, Youtube, Facebook, Twitter } from 'lucide-react';

export function RadioFooter() {
  return (
    <footer id="site-footer">
      <div className="footer-wrap">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <div className="footer-lmark"></div>
              <span className="footer-ltext">DMG Records Rádio</span>
            </div>
            <p className="footer-desc">Música, fé e entretenimento 24 horas por dia. A rádio que conecta artistas e ouvintes em todo o Brasil.</p>
            <div className="footer-socials">
              <div className="footer-soc icon"><Instagram style={{ width: '15px', height: '15px' }} /></div>
              <div className="footer-soc icon"><Facebook style={{ width: '15px', height: '15px' }} /></div>
              <div className="footer-soc icon"><Youtube style={{ width: '15px', height: '15px' }} /></div>
              <div className="footer-soc icon"><Twitter style={{ width: '15px', height: '15px' }} /></div>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Menu</div>
            <ul>
              <li><Link href="/"><Home style={{ width: '12px', height: '12px' }} /> Início</Link></li>
              <li><Link href="/programacao"><Calendar style={{ width: '12px', height: '12px' }} /> Programação</Link></li>
              <li><Link href="/noticias"><Newspaper style={{ width: '12px', height: '12px' }} /> Notícias</Link></li>
              <li><Link href="/anuncie"><Megaphone style={{ width: '12px', height: '12px' }} /> Anuncie</Link></li>
              <li><Link href="/contato"><Mail style={{ width: '12px', height: '12px' }} /> Contato</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Institucional</div>
            <ul>
              <li><Link href="/sobre"><Info style={{ width: '12px', height: '12px' }} /> Sobre Nós</Link></li>
              <li><Link href="/equipe"><Users style={{ width: '12px', height: '12px' }} /> Nossa Equipe</Link></li>
              <li><Link href="/privacidade"><Shield style={{ width: '12px', height: '12px' }} /> Privacidade</Link></li>
              <li><Link href="/termos"><FileText style={{ width: '12px', height: '12px' }} /> Termos de Uso</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contato</div>
            <ul>
              <li><a href="https://wa.me/5500000000000"><MessageCircle style={{ width: '12px', height: '12px' }} /> WhatsApp</a></li>
              <li><a href="mailto:contato@dmgrecords.com.br"><Mail style={{ width: '12px', height: '12px' }} /> E-mail</a></li>
              <li><a href="#"><Instagram style={{ width: '12px', height: '12px' }} /> Instagram</a></li>
              <li><a href="#"><Youtube style={{ width: '12px', height: '12px' }} /> YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2025 DMG Records Rádio. Todos os direitos reservados.</span>
          <span className="footer-copy" style={{ color: 'rgba(255,255,255,.28)' }}>Transmissão ao vivo 24h</span>
        </div>
      </div>
    </footer>
  );
}
