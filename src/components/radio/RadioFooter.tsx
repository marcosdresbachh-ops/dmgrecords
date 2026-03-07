"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, FileText, Home, Info, Instagram, Mail, Megaphone, MessageCircle, Newspaper, Shield, Users, Youtube, Facebook, Twitter, Radio } from 'lucide-react';

export function RadioFooter() {
  return (
    <footer id="site-footer">
      <div className="footer-wrap">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1fr]">
          <div>
            <div className="mb-4">
              <Link href="/">
                <Image 
                    src="/logo_radio_dmg.png" 
                    alt="DMG Records Rádio" 
                    width={160} 
                    height={40} 
                    style={{ filter: 'brightness(0) invert(1)', height: 'auto' }}
                />
              </Link>
            </div>
            <p className="footer-desc">DMG RECORDS LTDA - Música, fé e entretenimento 24 horas por dia. A rádio que conecta artistas e ouvintes em todo o Brasil.</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/radio_dmg_records" target="_blank" rel="noopener noreferrer" className="footer-soc icon"><Instagram style={{ width: '15px', height: '15px' }} /></a>
              <a href="https://www.facebook.com/radio.dmg.records" target="_blank" rel="noopener noreferrer" className="footer-soc icon"><Facebook style={{ width: '15px', height: '15px' }} /></a>
              <a href="#" className="footer-soc icon"><Youtube style={{ width: '15px', height: '15px' }} /></a>
              <a href="#" className="footer-soc icon"><Twitter style={{ width: '15px', height: '15px' }} /></a>
            </div>
            <div className="mt-6">
                <div className="footer-col-title" style={{ marginBottom: '12px' }}>Baixe o App RadiosNet</div>
                <div className="flex flex-wrap items-center gap-2">
                    <a href="https://play.google.com/store/apps/details?id=br.com.radios.radiosmobile.radiosnet&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank" rel="noopener noreferrer">
                        <Image 
                            width={142} 
                            height={45}
                            alt="Disponível no Google Play" 
                            src="https://play.google.com/intl/en_us/badges/images/generic/pt-br-play-badge-border.png"
                            className="transition-opacity hover:opacity-80"
                        />
                    </a>
                    <a href="https://itunes.apple.com/br/app/radiosnet/id1089290449?mt=8" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" style={{
                        display: 'inline-block',
                        overflow: 'hidden',
                        background: 'url(https://linkmaker.itunes.apple.com/images/badges/pt-br/badge_appstore-lrg.svg) no-repeat',
                        width: '152px',
                        height: '45px'
                    }}></a>
                </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Menu</div>
            <ul>
              <li><Link href="/"><Home style={{ width: '12px', height: '12px' }} /> Início</Link></li>
              <li><Link href="/programacao"><Calendar style={{ width: '12px', height: '12px' }} /> Programação</Link></li>
              <li><Link href="/noticias"><Newspaper style={{ width: '12px', height: '12px' }} /> Notícias</Link></li>
              <li><Link href="/radio-indoor"><Radio style={{ width: '12px', height: '12px' }} /> Rádio Indoor</Link></li>
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
              <li><a href="https://wa.me/5551933806999"><MessageCircle style={{ width: '12px', height: '12px' }} /> WhatsApp</a></li>
              <li><a href="mailto:contato@dmgrecords.com.br"><Mail style={{ width: '12px', height: '12px' }} /> E-mail</a></li>
              <li><a href="https://www.instagram.com/radio_dmg_records"><Instagram style={{ width: '12px', height: '12px' }} /> Instagram</a></li>
              <li><a href="#"><Youtube style={{ width: '12px', height: '12px' }} /> YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
            <div className="text-center md:text-left">
                <p className="footer-copy">© 2026 DMG RECORDS LTDA | CNPJ: 63.187.175/0001-70.</p>
                <p className="footer-copy">Todos os direitos reservados.</p>
            </div>
            <a href="https://www.rscriativo.rs.gov.br/dgm-records" target="_blank" rel="noopener noreferrer" className="inline-block shrink-0 rounded-sm border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/60 transition-colors hover:bg-white/20 hover:text-white">
                Selo <span className="font-bold">.RS-CRIATIVO</span>
            </a>
        </div>
      </div>
    </footer>
  );
}
