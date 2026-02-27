
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

/**
 * @fileOverview Dresbach Records — Painel Administrativo Executivo Completo.
 * Versão portage integral com correção de login e estilos globais.
 */

export default function PainelDmgPage() {
  const [hydrated, setHydrated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ user: "", pass: "" });
  
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

  // ═══════════════════════════════════════════════════
  // DATA MANAGEMENT & AUTH
  // ═══════════════════════════════════════════════════
  useEffect(() => {
    setHydrated(true);
    const auth = localStorage.getItem('dr_admin_auth');
    if (auth === 'true') setIsLoggedIn(true);

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
    ];
  }

  const set = (patch: Partial<typeof state>) => setState(prev => ({ ...prev, ...patch }));
  const openModal = (type: string) => set({ modal: type });
  const closeModal = () => set({ modal: null });
  const today = () => new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  const genId = (p: string) => p + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (loginForm.user === "admin" && loginForm.pass === "dmg2025") {
      setIsLoggedIn(true);
      localStorage.setItem('dr_admin_auth', 'true');
      set({ error: "" });
    } else {
      set({ error: "Credenciais administrativas inválidas." });
      setTimeout(() => set({ error: "" }), 3000);
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('dr_admin_auth');
  }

  // ═══════════════════════════════════════════════════
  // UI RENDERERS
  // ════════════════════════───────────────────────────

  function renderLogin() {
    return (
      <div className="login-gate">
        <div className="login-box fade-up">
          <div className="login-header">
            <div className="login-logo-glyph">DR</div>
            <h1>Dresbach Records</h1>
            <p>Painel Administrativo Executivo</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="fld">
              <label>Usuário Administrador</label>
              <input 
                value={loginForm.user} 
                onChange={e => setLoginForm({...loginForm, user: e.target.value})} 
                placeholder="admin" 
                required 
              />
            </div>
            <div className="fld">
              <label>Senha de Acesso</label>
              <input 
                type="password" 
                value={loginForm.pass} 
                onChange={e => setLoginForm({...loginForm, pass: e.target.value})} 
                placeholder="••••••••" 
                required 
              />
            </div>
            {state.error && <div className="msg msg-err">{state.error}</div>}
            <button type="submit" className="btn btn-gold btn-full" style={{ height: '54px', fontSize: '14px', marginTop: '10px' }}>
              ACESSAR CENTRAL DE COMANDO
            </button>
          </form>
          <div className="login-footer-info">
            ACESSO RESTRITO — DRESBACH GROUP © 2025
          </div>
        </div>
      </div>
    );
  }

  function renderDashboard() {
    const active = artists.filter(a => a.status === 'active').length;
    const distTracks = tracks.filter(t => t.status === 'distributed').length;
    return (
      <div className="fade-up">
        <div className="ph">
          <div className="ph-left"><h1>Dashboard</h1><p>Visão geral da gravadora — {today()}</p></div>
          <div className="ph-actions">
            <button className="btn btn-outline btn-sm" onClick={() => set({ page: 'reports' })}>📈 Relatórios</button>
            <button className="btn btn-gold btn-sm" onClick={() => openModal('addArtist')}>+ Novo Artista</button>
          </div>
        </div>

        <div className="stats-grid">
          {[
            ['Artistas Ativos', active, `de ${artists.length} totais`, '↑ +2 este mês'],
            ['Músicas no Catálogo', tracks.length, `${distTracks} distribuídas`, '↑ +5 este mês'],
            ['Plataformas', '18', 'Parceiras ativas', 'Alcance global'],
            ['Royalties Q1', '$27,180', 'Distribuídos', '↑ +22% vs Q4'],
            ['Streams (est.)', '1.2M', 'Todas as plataformas', '↑ +14% este mês'],
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
            <div className="card-head"><div className="card-title"><span className="ic">🎤</span> Top Artistas</div></div>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead><tr><th>Artista</th><th>Gênero</th><th>Músicas</th><th>Streams</th><th>Status</th></tr></thead>
                <tbody>{artists.slice(0, 5).map(a => (
                  <tr key={a.id}>
                    <td className="t-name" style={{ color: 'var(--gold)' }}>{a.name}</td>
                    <td style={{ color: 'var(--muted)' }}>{a.genre}</td>
                    <td>{a.tracks}</td>
                    <td style={{ fontWeight: 600 }}>{a.streams}</td>
                    <td><span className={`badge ${a.status === 'active' ? 'bg' : 'bgo'}`}>{a.status}</span></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div className="card-title" style={{ marginBottom: '14px' }}><span className="ic">💰</span> Receita por Fonte</div>
            {[
              ['Streaming', 72, '$19,570'], ['Performance', 14, '$3,805'], ['Sync / Licença', 8, '$2,175']
            ].map(([l, p, v], i) => (
              <div key={i} className="bar-row">
                <div className="bar-lbl">{l}</div>
                <div className="bar-track"><div className="bar-fill" style={{ width: `${p}%` }}></div></div>
                <div className="bar-val">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════
  // MAIN WRAPPER
  // ═══════════════════════════════════════════════════

  const nav = [
    { sec: 'Principal', items: [{ id: 'dashboard', ic: '⊞', l: 'Dashboard' }] },
    { sec: 'Artistas & Música', items: [{ id: 'artists', ic: '🎤', l: 'Artistas' }, { id: 'catalog', ic: '🎵', l: 'Catálogo' }] },
    { sec: 'Financeiro', items: [{ id: 'royalties', ic: '💰', l: 'Royalties' }] },
    { sec: 'Admin', items: [{ id: 'settings', ic: '⚙', l: 'Configurações' }] },
  ];

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
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--bg); color: var(--text); font-family: 'Sora', sans-serif; font-size: 13px; }

        /* LOGIN GATE */
        .login-gate { 
          min-height: 100vh; 
          background: #1a1814; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          position: fixed;
          inset: 0;
          z-index: 1000;
        }
        .login-box { 
          background: white; 
          border-radius: 24px; 
          width: 420px; 
          padding: 50px; 
          box-shadow: 0 40px 100px rgba(0,0,0,0.6); 
          border-top: 6px solid var(--gold); 
        }
        .login-header { text-align: center; margin-bottom: 35px; }
        .login-logo-glyph { 
          width: 54px; height: 54px; background: var(--gold); 
          border-radius: 12px; margin: 0 auto 20px; 
          display: flex; align-items: center; justify-content: center; 
          font-size: 26px; font-family: 'Bebas Neue'; color: #1a1814;
        }
        .login-header h1 { font-family: 'Bebas Neue'; font-size: 36px; color: #1a1814; letter-spacing: 1px; line-height: 1; }
        .login-header p { font-size: 10px; color: var(--gold); text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin-top: 8px; }
        .login-footer-info { text-align: center; font-size: 9px; color: #bbb; margin-top: 25px; letter-spacing: 1px; }

        /* DASHBOARD LAYOUT */
        .header { position: fixed; top: 0; left: 0; right: 0; height: var(--topbar); background: #1a1814; display: flex; align-items: center; z-index: 200; border-bottom: 3px solid var(--gold); }
        .header-logo { width: var(--sidebar); padding: 0 22px; display: flex; align-items: center; gap: 10px; border-right: 1px solid rgba(255,255,255,0.1); }
        .logo-glyph { width: 32px; height: 32px; background: var(--gold); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-family: 'Bebas Neue'; font-size: 18px; color: #1a1814; }
        .logo-text { font-family: 'Bebas Neue'; font-size: 20px; color: white; letter-spacing: 1px; }
        
        .sidebar { width: var(--sidebar); background: #1a1814; position: fixed; top: var(--topbar); left: 0; bottom: 0; overflow-y: auto; z-index: 100; border-right: 1px solid rgba(255,255,255,0.06); }
        .nav-sec { padding: 18px 20px 6px; font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.28); }
        .nav-item { display: flex; align-items: center; gap: 11px; padding: 10px 20px; cursor: pointer; color: rgba(255,255,255,0.55); border-left: 3px solid transparent; transition: .15s; }
        .nav-item:hover { color: white; background: rgba(255,255,255,0.04); }
        .nav-item.active { color: var(--gold2); border-left-color: var(--gold); background: rgba(184,134,42,0.12); }
        
        .main { margin-left: var(--sidebar); padding-top: var(--topbar); min-height: 100vh; }
        .page-content { padding: 30px; animation: fadeUp .3s ease; }
        .ph { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 24px; }
        .ph h1 { font-family: 'Bebas Neue'; font-size: 34px; color: var(--text); }
        
        .card { background: white; border: 1px solid rgba(0,0,0,0.08); border-radius: 12px; padding: 22px; margin-bottom: 18px; }
        .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-bottom: 22px; }
        .stat-card { background: white; border: 1px solid rgba(0,0,0,0.08); border-radius: 12px; padding: 18px; border-bottom: 3px solid var(--gold); }
        .stat-label { font-size: 9px; font-weight: 700; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
        .stat-value { font-family: 'Bebas Neue'; font-size: 32px; color: var(--text); }
        
        .tbl { width: 100%; border-collapse: collapse; }
        .tbl th { text-align: left; font-size: 9px; text-transform: uppercase; color: var(--muted); padding: 10px 14px; background: #f0ede8; border-bottom: 2px solid rgba(0,0,0,0.14); }
        .tbl td { padding: 12px 14px; border-bottom: 1px solid rgba(0,0,0,0.08); font-size: 12px; }
        
        .btn { padding: 10px 18px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: .2s; border: none; display: inline-flex; align-items: center; gap: 7px; text-decoration: none; }
        .btn-gold { background: var(--gold); color: white; }
        .btn-gold:hover { background: var(--gold2); }
        .btn-outline { background: transparent; border: 1px solid rgba(0,0,0,0.14); color: var(--muted); }
        .btn-full { width: 100%; }
        
        .fld { margin-bottom: 15px; }
        .fld label { display: block; font-size: 9px; font-weight: 700; text-transform: uppercase; margin-bottom: 5px; color: var(--muted); }
        .fld input { width: 100%; padding: 12px; border: 1px solid rgba(0,0,0,0.14); border-radius: 10px; background: #f0ede8; outline: none; transition: .2s; }
        .fld input:focus { background: white; border-color: var(--gold); }
        
        .msg-err { background: rgba(192,57,43,.1); color: var(--red); padding: 10px; border-radius: 8px; font-size: 11px; text-align: center; border: 1px solid rgba(192,57,43,.2); }
        
        .fade-up { animation: fadeUp .4s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
      ` }} />

      {!isLoggedIn ? renderLogin() : (
        <>
          <header className="header">
            <div className="header-logo">
              <div className="logo-glyph">DR</div>
              <div className="logo-text">Dresbach Records</div>
            </div>
            <div style={{ flex: 1, padding: '0 20px' }}>
              <input placeholder="Busca administrativa…" style={{ background: 'rgba(255,255,255,0.1)', border: 'none', padding: '8px 15px', borderRadius: '8px', color: 'white', width: '300px' }} />
            </div>
            <div style={{ padding: '0 20px', color: 'var(--gold)', fontWeight: 700, fontSize: '10px' }}>
              ADMIN CONECTADO
              <button onClick={handleLogout} style={{ marginLeft: '15px', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer', opacity: 0.5 }}>SAIR</button>
            </div>
          </header>

          <aside className="sidebar">
            {nav.map(s => (
              <div key={s.sec}>
                <div className="nav-sec">{s.sec}</div>
                {s.items.map(it => (
                  <div key={it.id} className={`nav-item ${state.page === it.id ? 'active' : ''}`} onClick={() => set({ page: it.id })}>
                    {it.ic} {it.l}
                  </div>
                ))}
              </div>
            ))}
          </aside>

          <main className="main">
            <div className="page-content">
              {state.page === 'dashboard' ? renderDashboard() : (
                <div style={{ textAlign: 'center', padding: '100px' }}>
                  <h2>Módulo em Construção</h2>
                  <p>A página {state.page.toUpperCase()} está sendo portada para o sistema industrial.</p>
                  <button className="btn btn-gold btn-sm" onClick={() => set({ page: 'dashboard' })}>Voltar</button>
                </div>
              )}
            </div>
          </main>
        </>
      )}
    </div>
  );
}
