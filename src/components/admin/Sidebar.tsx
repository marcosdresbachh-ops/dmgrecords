'use client';
import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Radio,
  Music,
  Calendar,
  Newspaper,
  MessageCircle,
  Megaphone,
  Users,
  BarChart2,
  Settings,
  FileText
} from 'lucide-react';
import Image from 'next/image';

const NavItem = ({ id, icon, label, badge, currentPage, handleNav }) => (
  <div className={`sb-item ${currentPage === id ? 'active' : ''}`} onClick={() => handleNav(id)}>
    {icon}
    {label}
    {badge && <span className="sb-badge" id={`sb-${id}-badge`}>{badge}</span>}
  </div>
);

export function Sidebar({ currentPage, handleNav, apiData, isOpen }) {
    const [status, setStatus] = useState({ online: false, listeners: 0, onAir: false });

    useEffect(() => {
        if(apiData) {
            setStatus({
                online: apiData.status === 'online',
                listeners: apiData.ouvintes_conectados || 0,
                onAir: apiData.status === 'online'
            })
        }
    }, [apiData]);

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
      <div className="sb-logo">
        <Image src="/logo_radio_dmg.png" alt="DMG Records Rádio" width={140} height={35} style={{ filter: 'brightness(0) invert(1)', margin: '0 auto', height: 'auto' }}/>
      </div>

      <div className="sb-section">Principal</div>
      <NavItem id="dashboard" icon={<LayoutDashboard className="si" />} label="Dashboard" currentPage={currentPage} handleNav={handleNav} />
      <NavItem id="transmissao" icon={<Radio className="si" />} label="Transmissão" badge={status.onAir ? 'ON' : 'OFF'} currentPage={currentPage} handleNav={handleNav} />

      <div className="sb-section">Conteúdo</div>
      <NavItem id="musicas" icon={<Music className="si" />} label="Músicas" currentPage={currentPage} handleNav={handleNav} />
      <NavItem id="programacao" icon={<Calendar className="si" />} label="Programação" currentPage={currentPage} handleNav={handleNav} />
      <NavItem id="noticias" icon={<Newspaper className="si" />} label="Notícias" badge="3" currentPage={currentPage} handleNav={handleNav} />
      <NavItem id="chat" icon={<MessageCircle className="si" />} label="Chat ao Vivo" badge="12" currentPage={currentPage} handleNav={handleNav} />

      <div className="sb-section">Negócios</div>
      <NavItem id="anunciantes" icon={<Megaphone className="si" />} label="Anunciantes" currentPage={currentPage} handleNav={handleNav} />
      <NavItem id="equipe" icon={<Users className="si" />} label="Equipe" currentPage={currentPage} handleNav={handleNav} />
      <NavItem id="estatisticas" icon={<BarChart2 className="si" />} label="Estatísticas" currentPage={currentPage} handleNav={handleNav} />

      <div className="sb-section">Sistema</div>
      <NavItem id="configuracoes" icon={<Settings className="si" />} label="Configurações" currentPage={currentPage} handleNav={handleNav} />
      <NavItem id="logs" icon={<FileText className="si" />} label="Logs do Sistema" currentPage={currentPage} handleNav={handleNav} />

      <div className="sb-footer">
        <div className={`sb-status-box ${status.online ? '' : 'offline'}`}>
          <div className={`sb-status-dot ${status.online ? '' : 'red'}`}></div>
          <div className="sb-status-text">
            <span>{status.online ? 'RÁDIO ON-AIR' : 'OFFLINE'}</span><br />
            <span style={{ color: 'rgba(255,255,255,.38)' }}>{status.listeners} ouvintes</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '2px 4px' }}>
          <div style={{ width: '28px', height: '28px', background: 'var(--red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.72rem', color: '#fff' }}>A</div>
          <div>
            <div style={{ fontSize: '.75rem', fontWeight: 600, color: 'rgba(255,255,255,.82)' }}>Admin DMG</div>
            <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.32)' }}>admin@dmgrecords.com.br</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
