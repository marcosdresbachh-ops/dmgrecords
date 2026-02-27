
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

/**
 * @fileOverview Dresbach Records — Painel Administrativo Executivo Completo.
 * Versão atualizada com a logomarca oficial logodmg.png.
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
  const closeModal = () => set({ modal: null });
  const today = () => new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });

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

  function renderLogin() {
    return (
      <div className="login-gate">
        <div className="login-box fade-up">
          <div className="login-header">
            <img src="/logodmg.png" alt="DMG Logo" style={{ height: '80px', margin: '0 auto 25px', display: 'block' }} />
            <h1>Painel Administrativo</h1>
            <p>Acesso Executivo Dresbach Records</p>
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
            <button type="submit" className="btn btn-gold btn-full" style={{ height: '54px', fontSize: '14px', marginTop: '10px', borderRadius: '50px' }}>
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
            <button className="btn btn-outline btn-sm" style={{ borderRadius: '50px' }} onClick={() => set({ page: 'reports' })}>📈 Relatórios</button>
            <button className="btn btn-gold btn-sm" style={{ borderRadius: '50px' }} onClick={() => set({ modal: 'addArtist' })}>+ Novo Artista</button>
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
          --topbar: 64px;
        }
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--bg); color: var(--text); font-family: 'Sora', sans-serif; font-size: 13px; }

        .login-gate { min-height: 100vh; background: #1a1814; display: flex; align-items: center; justify-content: center; position: fixed; inset: 0; z-index: 1000; }
        .login-box { background: white; border-radius: 32px; width: 440px; padding: 60px; box-shadow: 0 40px 100px rgba(0,0,0,0.6); border-top: 8px solid var(--gold); }
        .login-header { text-align: center; margin-bottom: 40px; }
        .login-header h1 { font-family: 'Bebas Neue'; font-size: 32px; color: #1a1814; letter-spacing: 1px; line-height: 1; }
        .login-header p { font-size: 10px; color: var(--gold); text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin-top: 10px; }
        .login-footer-info { text-align: center; font-size: 9px; color: #bbb; margin-top: 30px; letter-spacing: 1px; }

        .header { position: fixed; top: 0; left: 0; right: 0; height: var(--topbar); background: #1a1814; display: flex; align-items: center; z-index: 200; border-bottom: 3px solid var(--gold); }
        .header-logo { width: var(--sidebar); padding: 0 25px; display: flex; align-items: center; border-right: 1px solid rgba(255,255,255,0.1); height: 100%; }
        
        .sidebar { width: var(--sidebar); background: #1a1814; position: fixed; top: var(--topbar); left: 0; bottom: 0; overflow-y: auto; z-index: 100; border-right: 1px solid rgba(255,255,255,0.06); }
        .nav-sec { padding: 22px 20px 8px; font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.28); }
        .nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 20px; cursor: pointer; color: rgba(255,255,255,0.55); border-left: 4px solid transparent; transition: .2s; }
        .nav-item:hover { color: white; background: rgba(255,255,255,0.04); }
        .nav-item.active { color: var(--gold2); border-left-color: var(--gold); background: rgba(184,134,42,0.12); }
        
        .main { margin-left: var(--sidebar); padding-top: var(--topbar); min-height: 100vh; }
        .page-content { padding: 35px; animation: fadeUp .3s ease; }
        .ph { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 30px; }
        .ph h1 { font-family: 'Bebas Neue'; font-size: 38px; color: var(--text); letter-spacing: 1px; }
        
        .card { background: white; border: 1px solid rgba(0,0,0,0.08); border-radius: 16px; padding: 25px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.02); }
        .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-bottom: 25px; }
        .stat-card { background: white; border: 1px solid rgba(0,0,0,0.08); border-radius: 16px; padding: 20px; border-bottom: 4px solid var(--gold); }
        .stat-label { font-size: 9px; font-weight: 700; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; letter-spacing: 1px; }
        .stat-value { font-family: 'Bebas Neue'; font-size: 34px; color: var(--text); line-height: 1; }
        
        .tbl { width: 100%; border-collapse: collapse; }
        .tbl th { text-align: left; font-size: 9px; text-transform: uppercase; color: var(--muted); padding: 12px 15px; background: #f0ede8; border-bottom: 2px solid rgba(0,0,0,0.1); }
        .tbl td { padding: 14px 15px; border-bottom: 1px solid rgba(0,0,0,0.06); font-size: 12px; }
        
        .btn { padding: 12px 22px; border-radius: 50px; font-weight: 700; cursor: pointer; transition: .2s; border: none; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; text-transform: uppercase; letter-spacing: .5px; }
        .btn-gold { background: var(--gold); color: white; box-shadow: 0 4px 15px rgba(184,134,42,0.3); }
        .btn-gold:hover { background: var(--gold2); transform: translateY(-2px); }
        .btn-outline { background: transparent; border: 2px solid rgba(0,0,0,0.1); color: var(--muted); }
        .btn-outline:hover { border-color: var(--text); color: var(--text); }
        
        .fld { margin-bottom: 18px; }
        .fld label { display: block; font-size: 9px; font-weight: 700; text-transform: uppercase; margin-bottom: 6px; color: var(--muted); letter-spacing: 1px; }
        .fld input { width: 100%; padding: 14px; border: 1px solid rgba(0,0,0,0.1); border-radius: 12px; background: #f0ede8; outline: none; transition: .2s; font-weight: 500; }
        .fld input:focus { background: white; border-color: var(--gold); box-shadow: 0 0 0 4px rgba(184,134,42,0.1); }
        
        .fade-up { animation: fadeUp .4s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
      ` }} />

      {!isLoggedIn ? renderLogin() : (
        <>
          <header className="header">
            <div className="header-logo">
              <img src="/logodmg.png" alt="DMG Logo" style={{ height: '38px', width: 'auto', objectContain: 'contain' }} />
            </div>
            <div style={{ flex: 1, padding: '0 25px' }}>
              <input placeholder="Busca administrativa…" style={{ background: 'rgba(255,255,255,0.1)', border: 'none', padding: '10px 20px', borderRadius: '50px', color: 'white', width: '350px', fontSize: '12px' }} />
            </div>
            <div style={{ padding: '0 25px', color: 'var(--gold)', fontWeight: 700, fontSize: '10px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              ADMIN CONECTADO
              <button onClick={handleLogout} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', cursor: 'pointer', padding: '6px 15px', borderRadius: '50px', fontSize: '9px', fontWeight: 700 }}>SAIR DO SISTEMA</button>
            </div>
          </header>

          <aside className="sidebar">
            {nav.map(s => (
              <div key={s.sec}>
                <div className="nav-sec">{s.sec}</div>
                {s.items.map(it => (
                  <div key={it.id} className={`nav-item ${state.page === it.id ? 'active' : ''}`} onClick={() => set({ page: it.id })}>
                    <span style={{ fontSize: '16px' }}>{it.ic}</span> {it.l}
                  </div>
                ))}
              </div>
            ))}
          </aside>

          <main className="main">
            <div className="page-content">
              {state.page === 'dashboard' ? renderDashboard() : (
                <div style={{ textAlign: 'center', padding: '100px' }}>
                  <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '32px' }}>Módulo em Construção</h2>
                  <p style={{ color: 'var(--muted)', marginTop: '10px' }}>A página {state.page.toUpperCase()} está sendo sincronizada com o motor industrial.</p>
                  <button className="btn btn-gold btn-sm" style={{ marginTop: '25px', borderRadius: '50px' }} onClick={() => set({ page: 'dashboard' })}>Voltar ao Dashboard</button>
                </div>
              )}
            </div>
          </main>
        </>
      )}
    </div>
  );
}
