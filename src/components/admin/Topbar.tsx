'use client';
import React, { useState, useEffect } from 'react';
import { Search, RefreshCw, Bell } from 'lucide-react';

const PAGE_TITLES = {
  dashboard: <>Dashboard <em>Geral</em></>,
  transmissao: <>Controle de <em>Transmissão</em></>,
  musicas: <>Biblioteca de <em>Músicas</em></>,
  programacao: <>Grade de <em>Programação</em></>,
  noticias: <>Gestão de <em>Notícias</em></>,
  chat: <>Chat <em>ao Vivo</em></>,
  anunciantes: <>Painel de <em>Anunciantes</em></>,
  equipe: <>Nossa <em>Equipe</em></>,
  estatisticas: <>Relatório de <em>Audiência</em></>,
  configuracoes: <><em>Configurações</em> do Sistema</>,
  logs: <>Logs do <em>Sistema</em></>,
};

export function Topbar({ currentPage, fetchAPI, handleNav }) {
  const [isApiConnected, setIsApiConnected] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchAPI(true);
    setIsRefreshing(false);
  };

  useEffect(() => {
    // A simple check to see if the API can be reached initially.
    fetch('/api/now-playing')
      .then(res => setIsApiConnected(res.ok))
      .catch(() => setIsApiConnected(false));
  }, []);

  return (
    <>
      <div className="tb-title">{PAGE_TITLES[currentPage] || currentPage}</div>
      <div className="tb-search">
        <Search style={{ width: '13px', height: '13px', color: 'var(--ink3)' }} />
        <input type="text" placeholder="Buscar…" />
      </div>
      <div className={`api-badge ${isApiConnected ? '' : 'err'}`}>
        <div className="api-badge-dot"></div>
        <span>{isApiConnected ? 'API Conectada' : 'API Offline'}</span>
      </div>
      <button className="tb-icon-btn" title="Atualizar dados da API" onClick={handleRefresh}>
        <RefreshCw style={{ width: '14px', height: '14px', animation: isRefreshing ? 'spin 1s linear infinite' : 'none' }} />
      </button>
      <button className="tb-icon-btn" title="Notificações" onClick={() => handleNav('logs')}>
        <Bell style={{ width: '14px', height: '14px' }} />
        <span className="notif-dot"></span>
      </button>
      <div className="tb-avatar" title="Perfil Admin">A</div>
    </>
  );
}
