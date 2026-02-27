
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

/**
 * @fileOverview Dresbach Records — Painel Administrativo Executivo.
 * Gerenciamento de artistas, catálogo, distribuição e royalties.
 */

export default function PainelDmgPage() {
  const [hydrated, setHydrated] = useState(false);
  const [state, setState] = useState({
    page: 'dashboard',
    modal: null as string | null,
    notifOpen: false,
    tab: 0,
    success: '',
    error: '',
    loading: false,
    selectedArtist: null as any,
    selectedTrack: null as any,
    distTab: 0,
    finTab: 0,
    settingsTab: 0,
    siteTab: 0,
    reportTab: 0,
  });

  const [artists, setArtists] = useState<any[]>([]);
  const [tracks, setTracks] = useState<any[]>([]);

  // Carregamento inicial de dados
  useEffect(() => {
    setHydrated(true);
    const storedArtists = localStorage.getItem('dr_artists');
    const storedTracks = localStorage.getItem('dr_tracks');

    if (storedArtists) {
      setArtists(JSON.parse(storedArtists));
    } else {
      const seed = getSeedArtists();
      setArtists(seed);
      localStorage.setItem('dr_artists', JSON.stringify(seed));
    }

    if (storedTracks) {
      setTracks(JSON.parse(storedTracks));
    } else {
      const seed = getSeedTracks();
      setTracks(seed);
      localStorage.setItem('dr_tracks', JSON.stringify(seed));
    }
  }, []);

  if (!hydrated) return null;

  // Utilitários de State
  const set = (patch: Partial<typeof state>) => setState(prev => ({ ...prev, ...patch }));
  const openModal = (type: string) => set({ modal: type });
  const closeModal = () => set({ modal: null });

  function getSeedArtists() {
    return [
      { id: 'A001', name: 'Luna Verona', role: 'Composer', genre: 'Indie Pop', country: 'Brazil', email: 'luna@example.com', phone: '+55 11 99999-0001', status: 'active', tracks: 8, streams: '142,800', royalties: '$3,420', joined: 'Mar 2024', pro: 'ECAD', ipi: 'IPI-00123', bio: 'Multi-award winning indie pop artist from São Paulo.', social: ['https://instagram.com/lunaverona'], label: 'Dresbach Records' },
      { id: 'A002', name: 'Marco Esteves', role: 'Musician', genre: 'Jazz', country: 'Brazil', email: 'marco@example.com', phone: '+55 21 99999-0002', status: 'active', tracks: 12, streams: '89,400', royalties: '$2,180', joined: 'Jan 2024', pro: 'ECAD', ipi: 'IPI-00124', bio: 'Jazz guitarist and composer from Rio de Janeiro.', social: [], label: 'Dresbach Records' },
      { id: 'A003', name: 'Sofia Andrade', role: 'Composer', genre: 'Electronic', country: 'Brazil', email: 'sofia@example.com', phone: '+55 31 99999-0003', status: 'active', tracks: 6, streams: '220,100', royalties: '$5,640', joined: 'Jun 2024', pro: 'ECAD', ipi: 'IPI-00125', bio: 'Electronic music producer and DJ.', social: [], label: 'Dresbach Records' },
      { id: 'A004', name: 'Diego Ferreira', role: 'Musician', genre: 'Rock', country: 'Brazil', email: 'diego@example.com', phone: '+55 41 99999-0004', status: 'pending', tracks: 3, streams: '14,200', royalties: '$340', joined: 'Nov 2024', pro: 'None', ipi: '', bio: '', social: [], label: 'Dresbach Records' },
      { id: 'A005', name: 'Ayla Santos', role: 'Composer', genre: 'R&B / Soul', country: 'USA', email: 'ayla@example.com', phone: '+1 555 000 0005', status: 'active', tracks: 9, streams: '380,500', royalties: '$9,200', joined: 'Feb 2024', pro: 'ASCAP', ipi: 'IPI-00126', bio: 'R&B artist and songwriter based in Miami.', social: [], label: 'Dresbach Records' },
    ];
  }

  function getSeedTracks() {
    return [
      { id: 'T001', title: 'Blue Horizon', artist: 'Luna Verona', artistId: 'A001', genre: 'Indie Pop', duration: '3:42', isrc: 'BRA123001', iswc: 'T-123.456.001', status: 'distributed', platforms: ['Spotify', 'Apple Music', 'YouTube Music', 'Amazon', 'Deezer'], streams: '84,200', royalties: '$2,050', released: 'Jan 10, 2025', type: 'Single' },
      { id: 'T002', title: 'Midnight Rain', artist: 'Luna Verona', artistId: 'A001', genre: 'Indie Pop', duration: '4:15', isrc: 'BRA123002', iswc: 'T-123.456.002', status: 'distributed', platforms: ['Spotify', 'Apple Music', 'YouTube Music'], streams: '58,600', royalties: '$1,370', released: 'Dec 5, 2024', type: 'Single' },
      { id: 'T003', title: 'Porto do Sol', artist: 'Marco Esteves', artistId: 'A002', genre: 'Jazz', duration: '5:28', isrc: 'BRA123003', iswc: 'T-123.456.003', status: 'distributed', platforms: ['Spotify', 'Apple Music', 'Tidal'], streams: '31,200', royalties: '$750', released: 'Feb 1, 2025', type: 'EP' },
      { id: 'T004', title: 'Neon Galaxy', artist: 'Sofia Andrade', artistId: 'A003', genre: 'Electronic', duration: '4:00', isrc: 'BRA123004', iswc: 'T-123.456.004', status: 'distributed', platforms: ['Spotify', 'Apple Music', 'YouTube Music', 'Beatport', 'SoundCloud'], streams: '140,900', royalties: '$3,400', released: 'Nov 20, 2024', type: 'Single' },
    ];
  }

  // Ações
  function saveArtist() {
    const name = (document.getElementById('af_name') as HTMLInputElement)?.value;
    if (!name) return;
    const newArtist = {
      id: 'A' + Math.random().toString(36).slice(2, 5).toUpperCase(),
      name,
      role: (document.getElementById('af_role') as HTMLSelectElement)?.value || 'Musician',
      genre: (document.getElementById('af_genre') as HTMLSelectElement)?.value || 'Pop',
      status: 'pending',
      tracks: 0,
      streams: '0',
      royalties: '$0',
      joined: new Date().toLocaleDateString('pt-BR'),
    };
    const updated = [...artists, newArtist];
    setArtists(updated);
    localStorage.setItem('dr_artists', JSON.stringify(updated));
    closeModal();
    set({ success: 'Artista adicionado com sucesso!' });
    setTimeout(() => set({ success: '' }), 3000);
  }

  function approveTrack(id: string) {
    const updated = tracks.map(t => t.id === id ? { ...t, status: 'review' } : t);
    setTracks(updated);
    localStorage.setItem('dr_tracks', JSON.stringify(updated));
    set({ success: 'Faixa enviada para revisão técnica.' });
    setTimeout(() => set({ success: '' }), 3000);
  }

  // Renderização de Subpáginas
  function renderDashboard() {
    return (
      <div className="fade-up">
        <div className="ph">
          <div className="ph-left">
            <h1>Dashboard Executivo</h1>
            <p>Visão estratégica da gravadora — {new Date().toLocaleDateString()}</p>
          </div>
          <div className="ph-actions">
            <button className="btn btn-outline btn-sm" onClick={() => set({ page: 'reports' })}>Relatório Completo</button>
            <button className="btn btn-gold btn-sm" onClick={() => openModal('addArtist')}>+ Novo Artista</button>
          </div>
        </div>

        <div className="stats-grid">
          {[
            ['Artistas Ativos', artists.filter(a => a.status === 'active').length, `de ${artists.length} totais`, '↑ +2 este mês'],
            ['Catálogo Musical', tracks.length, `${tracks.filter(t => t.status === 'distributed').length} faixas live`, '↑ +5 este mês'],
            ['Plataformas', '18', 'Parceiras ativas', 'Alcance global'],
            ['Royalties Q1', '$27,180', 'A distribuir', '↑ +22% vs Q4'],
            ['Streams Mensais', '1.2M', 'Total global', '↑ +14%'],
          ].map(([l, v, s, t], i) => (
            <div key={i} className="stat-card">
              <div className="stat-label">{l}</div>
              <div className="stat-value">{v}</div>
              <div className="stat-sub">{s}</div>
              <div className="stat-up">{t}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '18px' }}>
          <div className="card">
            <div className="card-head">
              <div className="card-title"><span className="ic">🎤</span> Top Performers</div>
              <button className="btn btn-outline btn-sm" onClick={() => set({ page: 'artists' })}>Ver Todos</button>
            </div>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead><tr><th>Artista</th><th>Gênero</th><th>Tracks</th><th>Streams</th><th>Royalties</th><th>Status</th></tr></thead>
                <tbody>
                  {artists.slice(0, 5).map(a => (
                    <tr key={a.id}>
                      <td className="t-name" style={{ color: 'var(--gold)', cursor: 'pointer' }}>{a.name}</td>
                      <td>{a.genre}</td>
                      <td>{a.tracks}</td>
                      <td style={{ fontWeight: 700 }}>{a.streams}</td>
                      <td style={{ color: 'var(--green)', fontWeight: 700 }}>{a.royalties}</td>
                      <td><span className={`badge ${a.status === 'active' ? 'bg' : 'bgo'}`}>{a.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-title" style={{ marginBottom: '14px' }}><span className="ic">⚡</span> Ações Administrativas</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button className="btn btn-primary btn-sm" onClick={() => openModal('addArtist')}>+ Novo Artista</button>
              <button className="btn btn-gold btn-sm" onClick={() => openModal('addTrack')}>+ Nova Música</button>
              <button className="btn btn-outline btn-sm" onClick={() => set({ page: 'distribution' })}>🚀 Distribuir Material</button>
              <button className="btn btn-outline btn-sm" onClick={() => set({ page: 'royalties' })}>💰 Processar Ganhos</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderArtists() {
    return (
      <div className="fade-up">
        <div className="ph">
          <div className="ph-left"><h1>Roster de Artistas</h1><p>{artists.length} talentos sob gestão Dresbach</p></div>
          <button className="btn btn-gold btn-sm" onClick={() => openModal('addArtist')}>+ Adicionar Artista</button>
        </div>
        <div className="card">
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>ID</th><th>Nome</th><th>Papel</th><th>Gênero</th><th>PRO</th><th>Status</th><th>Ações</th></tr></thead>
              <tbody>
                {artists.map(a => (
                  <tr key={a.id}>
                    <td><span className="mono">{a.id}</span></td>
                    <td className="t-name">{a.name}</td>
                    <td>{a.role}</td>
                    <td>{a.genre}</td>
                    <td><span className="mono">{a.pro || '—'}</span></td>
                    <td><span className={`badge ${a.status === 'active' ? 'bg' : 'bgo'}`}>{a.status}</span></td>
                    <td><button className="btn btn-outline btn-xs">Gerenciar</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  function renderCatalog() {
    return (
      <div className="fade-up">
        <div className="ph">
          <div className="ph-left"><h1>Catálogo Fonográfico</h1><p>{tracks.length} obras registradas</p></div>
          <button className="btn btn-gold btn-sm" onClick={() => openModal('addTrack')}>+ Nova Faixa</button>
        </div>
        <div className="card">
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>ID</th><th>Título</th><th>Artista</th><th>Gênero</th><th>ISRC</th><th>Status</th><th>Ações</th></tr></thead>
              <tbody>
                {tracks.map(t => (
                  <tr key={t.id}>
                    <td><span className="mono">{t.id}</span></td>
                    <td className="t-name">{t.title}</td>
                    <td>{t.artist}</td>
                    <td>{t.genre}</td>
                    <td><span className="mono">{t.isrc || 'Pendente'}</span></td>
                    <td><span className={`badge ${t.status === 'distributed' ? 'bg' : 'bgo'}`}>{t.status}</span></td>
                    <td>
                      {t.status === 'pending' && <button className="btn btn-gold btn-xs" onClick={() => approveTrack(t.id)}>Aprovar</button>}
                      <button className="btn btn-outline btn-xs" style={{ marginLeft: '5px' }}>Editar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="painel-dmg">
      <Head>
        <title>Dresbach Records — Painel Administrativo</title>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg: #f5f3ef;
          --surface: #ffffff;
          --surface2: #f0ede8;
          --surface3: #e8e4dc;
          --border: rgba(0,0,0,0.08);
          --border2: rgba(0,0,0,0.14);
          --text: #1a1814;
          --muted: #7a7570;
          --muted2: #b0aca5;
          --gold: #b8862a;
          --gold2: #d4a43a;
          --goldbg: rgba(184,134,42,0.08);
          --goldborder: rgba(184,134,42,0.25);
          --red: #c0392b;
          --green: #27ae60;
          --sidebar: 240px;
          --topbar: 58px;
        }
        .painel-dmg { background: var(--bg); color: var(--text); font-family: 'Sora', sans-serif; min-height: 100vh; font-size: 13px; }
        
        /* HEADER */
        .header {
          position: fixed; top: 0; left: 0; right: 0; height: var(--topbar);
          background: var(--text); display: flex; align-items: center; z-index: 200;
          border-bottom: 3px solid var(--gold);
        }
        .header-logo { width: var(--sidebar); padding: 0 22px; display: flex; align-items: center; gap: 10px; border-right: 1px solid rgba(255,255,255,0.1); }
        .logo-glyph { width: 32px; height: 32px; background: var(--gold); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-family: 'Bebas Neue'; font-size: 18px; color: var(--text); }
        .logo-text { font-family: 'Bebas Neue'; font-size: 20px; color: white; letter-spacing: 1px; }
        
        /* SIDEBAR */
        .sidebar { width: var(--sidebar); background: var(--text); position: fixed; top: var(--topbar); left: 0; bottom: 0; overflow-y: auto; z-index: 100; border-right: 1px solid rgba(255,255,255,0.06); }
        .nav-sec { padding: 18px 20px 6px; font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.28); }
        .nav-item { display: flex; align-items: center; gap: 11px; padding: 10px 20px; cursor: pointer; color: rgba(255,255,255,0.55); border-left: 3px solid transparent; }
        .nav-item:hover { color: white; background: rgba(255,255,255,0.04); }
        .nav-item.active { color: var(--gold2); border-left-color: var(--gold); background: rgba(184,134,42,0.12); }
        
        /* MAIN */
        .main { margin-left: var(--sidebar); padding-top: var(--topbar); display: flex; flex-direction: column; min-height: 100vh; }
        .page-content { padding: 28px; flex: 1; }
        
        /* COMPONENTS */
        .ph { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 24px; }
        .ph h1 { font-family: 'Bebas Neue'; font-size: 34px; color: var(--text); }
        .card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 22px; margin-bottom: 18px; }
        .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-bottom: 22px; }
        .stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 18px; position: relative; overflow: hidden; border-bottom: 3px solid var(--gold); }
        .stat-label { font-size: 9px; font-weight: 700; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
        .stat-value { font-family: 'Bebas Neue'; font-size: 32px; color: var(--text); }
        .tbl { width: 100%; border-collapse: collapse; }
        .tbl th { text-align: left; font-size: 9px; text-transform: uppercase; color: var(--muted2); padding: 10px 14px; background: var(--surface2); }
        .tbl td { padding: 12px 14px; border-bottom: 1px solid var(--border); font-size: 12px; }
        .badge { padding: 3px 9px; border-radius: 4px; font-size: 10px; font-weight: 700; text-transform: uppercase; display: inline-block; }
        .bg { background: rgba(39,174,96,.1); color: var(--green); }
        .bgo { background: var(--goldbg); color: var(--gold); }
        .btn { padding: 10px 18px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: .2s; border: none; }
        .btn-gold { background: var(--gold); color: white; }
        .btn-primary { background: var(--text); color: white; }
        .btn-outline { background: transparent; border: 1px solid var(--border2); color: var(--muted); }
        .btn-xs { padding: 4px 10px; font-size: 10px; }
        .mono { font-family: monospace; }
        .fade-up { animation: fadeUp .3s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        /* MODAL */
        .modal-bg { position: fixed; inset: 0; background: rgba(0,0,0,.5); display: flex; align-items: center; justify-content: center; z-index: 500; backdrop-filter: blur(4px); }
        .modal { background: white; border-radius: 14px; width: 500px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,.2); }
        .modal-head { padding: 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; }
        .modal-body { padding: 20px; }
        .fld { margin-bottom: 15px; }
        .fld label { display: block; font-size: 10px; font-weight: 700; text-transform: uppercase; margin-bottom: 5px; }
        .fld input, .fld select { width: 100%; padding: 10px; border: 1px solid var(--border2); border-radius: 8px; }
        .msg { padding: 10px; border-radius: 8px; margin-bottom: 15px; font-weight: 600; }
        .msg-ok { background: rgba(39,174,96,.1); color: var(--green); border: 1px solid var(--green); }
      ` }} />

      <header className="header">
        <div className="header-logo">
          <div className="logo-glyph">DR</div>
          <div>
            <div className="logo-text">Dresbach Records</div>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Admin Panel</div>
          </div>
        </div>
        <div style={{ flex: 1, padding: '0 20px' }}>
          <div style={{ position: 'relative', maxWidth: '300px' }}>
            <input placeholder="Buscar..." style={{ width: '100%', background: 'rgba(255,255,255,0.1)', border: 'none', padding: '8px 12px', borderRadius: '6px', color: 'white' }} />
          </div>
        </div>
        <div style={{ padding: '0 20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
          <span className="h-badge" style={{ color: 'var(--gold)', fontWeight: 700 }}>ID: ADMIN-01</span>
          <div style={{ width: '34px', height: '34px', background: 'var(--gold)', borderRadius: '8px', display: 'flex', alignItems: 'center', justify: 'center', fontWeight: 700 }}>A</div>
        </div>
      </header>

      <aside className="sidebar">
        <div className="nav-sec">Gerenciamento</div>
        <div className={`nav-item ${state.page === 'dashboard' ? 'active' : ''}`} onClick={() => set({ page: 'dashboard' })}>Dashboard</div>
        <div className={`nav-item ${state.page === 'artists' ? 'active' : ''}`} onClick={() => set({ page: 'artists' })}>Artistas</div>
        <div className={`nav-item ${state.page === 'catalog' ? 'active' : ''}`} onClick={() => set({ page: 'catalog' })}>Catálogo</div>
        <div className="nav-sec">Operacional</div>
        <div className={`nav-item ${state.page === 'distribution' ? 'active' : ''}`} onClick={() => set({ page: 'distribution' })}>Distribuição</div>
        <div className={`nav-item ${state.page === 'royalties' ? 'active' : ''}`} onClick={() => set({ page: 'royalties' })}>Royalties</div>
        <div className={`nav-item ${state.page === 'contracts' ? 'active' : ''}`} onClick={() => set({ page: 'contracts' })}>Contratos</div>
        <div className="nav-sec">Plataforma</div>
        <div className={`nav-item ${state.page === 'settings' ? 'active' : ''}`} onClick={() => set({ page: 'settings' })}>Configurações</div>
      </aside>

      <main className="main">
        <div className="page-content">
          {state.success && <div className="msg msg-ok">{state.success}</div>}
          {state.page === 'dashboard' && renderDashboard()}
          {state.page === 'artists' && renderArtists()}
          {state.page === 'catalog' && renderCatalog()}
          {['distribution', 'royalties', 'contracts', 'settings', 'reports'].includes(state.page) && (
            <div className="empty" style={{ textAlign: 'center', padding: '100px' }}>
              <div style={{ fontSize: '40px' }}>⏳</div>
              <h2>Módulo em Integração</h2>
              <p>Esta seção está sendo conectada ao novo backend industrial.</p>
              <button className="btn btn-gold btn-sm" style={{ marginTop: '20px' }} onClick={() => set({ page: 'dashboard' })}>Voltar ao Início</button>
            </div>
          )}
        </div>

        <footer style={{ padding: '20px 28px', borderTop: '1px solid var(--border)', fontSize: '11px', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between' }}>
          <div>© 2025 Dresbach Records LTDA — CNPJ 63.187.175/0001-70</div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span>Termos</span>
            <span>Privacidade</span>
            <span>Suporte Técnico</span>
          </div>
        </footer>
      </main>

      {state.modal === 'addArtist' && (
        <div className="modal-bg">
          <div className="modal">
            <div className="modal-head"><h2>Novo Artista</h2><button onClick={closeModal}>×</button></div>
            <div className="modal-body">
              <div className="fld"><label>Nome Completo</label><input id="af_name" placeholder="Nome real ou artístico" /></div>
              <div className="fld">
                <label>Papel Principal</label>
                <select id="af_role">
                  <option value="Musician">Músico / Intérprete</option>
                  <option value="Composer">Compositor / Autor</option>
                </select>
              </div>
              <div className="fld">
                <label>Gênero</label>
                <select id="af_genre">
                  <option>Pop</option><option>Rock</option><option>Jazz</option><option>Eletrônica</option><option>R&B</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button className="btn btn-outline" style={{ flex: 1 }} onClick={closeModal}>Cancelar</button>
                <button className="btn btn-gold" style={{ flex: 1 }} onClick={saveArtist}>Salvar Artista</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {state.modal === 'addTrack' && (
        <div className="modal-bg">
          <div className="modal">
            <div className="modal-head"><h2>Nova Faixa</h2><button onClick={closeModal}>×</button></div>
            <div className="modal-body">
              <div className="fld"><label>Título da Obra</label><input placeholder="Ex: Blue Horizon" /></div>
              <div className="fld">
                <label>Artista Detentor</label>
                <select>{artists.map(a => <option key={a.id}>{a.name}</option>)}</select>
              </div>
              <div className="fld"><label>ISRC (Opcional)</label><input placeholder="BR-XXX-25-00001" /></div>
              <button className="btn btn-gold btn-full" style={{ marginTop: '10px' }} onClick={() => { set({ success: 'Faixa registrada!' }); closeModal(); setTimeout(() => set({ success: '' }), 2000); }}>Registrar no Catálogo</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
