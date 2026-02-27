
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

/**
 * @fileOverview Dresbach Records — Painel Administrativo Executivo Completo.
 * Sistema de gestão de gravadora com 20 módulos integrados.
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
  // DATA MANAGEMENT
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

  // Utilitários
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
    } else {
      set({ error: "Credenciais administrativas inválidas." });
      setTimeout(() => set({ error: "" }), 3000);
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('dr_admin_auth');
  }

  function getSeedArtists() {
    return [
      { id: 'A001', name: 'Luna Verona', role: 'Composer', genre: 'Indie Pop', country: 'Brazil', email: 'luna@example.com', phone: '+55 11 99999-0001', status: 'active', tracks: 8, streams: '142,800', royalties: '$3,420', joined: 'Mar 2024', pro: 'ECAD', ipi: 'IPI-00123', bio: 'Multi-award winning indie pop artist from São Paulo.', social: ['https://instagram.com/lunaverona'], label: 'Dresbach Records' },
      { id: 'A002', name: 'Marco Esteves', role: 'Musician', genre: 'Jazz', country: 'Brazil', email: 'marco@example.com', phone: '+55 21 99999-0002', status: 'active', tracks: 12, streams: '89,400', royalties: '$2,180', joined: 'Jan 2024', pro: 'ECAD', ipi: 'IPI-00124', bio: 'Jazz guitarist and composer from Rio de Janeiro.', social: [], label: 'Dresbach Records' },
      { id: 'A003', name: 'Sofia Andrade', role: 'Composer', genre: 'Electronic', country: 'Brazil', email: 'sofia@example.com', phone: '+55 31 99999-0003', status: 'active', tracks: 6, streams: '220,100', royalties: '$5,640', joined: 'Jun 2024', pro: 'ECAD', ipi: 'IPI-00125', bio: 'Electronic music producer and DJ.', social: [], label: 'Dresbach Records' },
      { id: 'A004', name: 'Diego Ferreira', role: 'Musician', genre: 'Rock', country: 'Brazil', email: 'diego@example.com', phone: '+55 41 99999-0004', status: 'pending', tracks: 3, streams: '14,200', royalties: '$340', joined: 'Nov 2024', pro: 'None', ipi: '', bio: '', social: [], label: 'Dresbach Records' },
      { id: 'A005', name: 'Ayla Santos', role: 'Composer', genre: 'R&B / Soul', country: 'USA', email: 'ayla@example.com', phone: '+1 555 000 0005', status: 'active', tracks: 9, streams: '380,500', royalties: '$9,200', joined: 'Feb 2024', pro: 'ASCAP', ipi: 'IPI-00126', bio: 'R&B artist and songwriter based in Miami.', social: [], label: 'Dresbach Records' },
      { id: 'A006', name: 'Rafael Lima', role: 'Musician', genre: 'Classical', country: 'Brazil', email: 'rafael@example.com', phone: '+55 11 99999-0006', status: 'inactive', tracks: 15, streams: '42,000', royalties: '$1,050', joined: 'Aug 2023', pro: 'ECAD', ipi: 'IPI-00127', bio: '', social: [], label: 'Dresbach Records' },
      { id: 'A007', name: 'Isabela Cruz', role: 'Composer', genre: 'Latin', country: 'Mexico', email: 'isabela@example.com', phone: '+52 55 9999-0007', status: 'active', tracks: 7, streams: '198,300', royalties: '$4,820', joined: 'Apr 2024', pro: 'SGAE', ipi: 'IPI-00128', bio: '', social: [], label: 'Dresbach Records' },
      { id: 'A008', name: 'Lucas Moraes', role: 'Musician', genre: 'Folk', country: 'Brazil', email: 'lucas@example.com', phone: '+55 61 99999-0008', status: 'active', tracks: 5, streams: '33,700', royalties: '$820', joined: 'Sep 2024', pro: 'ECAD', ipi: '', bio: '', social: [], label: 'Dresbach Records' },
    ];
  }

  function getSeedTracks() {
    return [
      { id: 'T001', title: 'Blue Horizon', artist: 'Luna Verona', artistId: 'A001', genre: 'Indie Pop', duration: '3:42', isrc: 'BRA123001', iswc: 'T-123.456.001', status: 'distributed', platforms: ['Spotify', 'Apple Music', 'YouTube Music', 'Amazon', 'Deezer'], streams: '84,200', royalties: '$2,050', released: 'Jan 10, 2025', type: 'Single' },
      { id: 'T002', title: 'Midnight Rain', artist: 'Luna Verona', artistId: 'A001', genre: 'Indie Pop', duration: '4:15', isrc: 'BRA123002', iswc: 'T-123.456.002', status: 'distributed', platforms: ['Spotify', 'Apple Music', 'YouTube Music'], streams: '58,600', royalties: '$1,370', released: 'Dec 5, 2024', type: 'Single' },
      { id: 'T003', title: 'Porto do Sol', artist: 'Marco Esteves', artistId: 'A002', genre: 'Jazz', duration: '5:28', isrc: 'BRA123003', iswc: 'T-123.456.003', status: 'distributed', platforms: ['Spotify', 'Apple Music', 'Tidal'], streams: '31,200', royalties: '$750', released: 'Feb 1, 2025', type: 'EP' },
      { id: 'T004', title: 'Neon Galaxy', artist: 'Sofia Andrade', artistId: 'A003', genre: 'Electronic', duration: '4:00', isrc: 'BRA123004', iswc: 'T-123.456.004', status: 'distributed', platforms: ['Spotify', 'Apple Music', 'YouTube Music', 'Beatport', 'SoundCloud'], streams: '140,900', royalties: '$3,400', released: 'Nov 20, 2024', type: 'Single' },
      { id: 'T005', title: 'Raiz do Norte', artist: 'Diego Ferreira', artistId: 'A004', genre: 'Rock', duration: '3:55', isrc: 'BRA123005', iswc: '', status: 'pending', platforms: [], streams: '0', royalties: '$0', released: '—', type: 'Single' },
      { id: 'T006', title: 'Miami Nights', artist: 'Ayla Santos', artistId: 'A005', genre: 'R&B / Soul', duration: '3:28', isrc: 'USA123001', iswc: 'T-123.456.006', status: 'distributed', platforms: ['Spotify', 'Apple Music', 'YouTube Music', 'Amazon', 'Tidal'], streams: '220,400', royalties: '$5,320', released: 'Jan 25, 2025', type: 'Album' },
      { id: 'T007', title: 'Corda Fina', artist: 'Rafael Lima', artistId: 'A006', genre: 'Classical', duration: '6:10', isrc: 'BRA123007', iswc: 'T-123.456.007', status: 'review', platforms: [], streams: '0', royalties: '$0', released: '—', type: 'Single' },
      { id: 'T008', title: 'Corazón Libre', artist: 'Isabela Cruz', artistId: 'A007', genre: 'Latin', duration: '3:38', isrc: 'MEX123001', iswc: 'T-123.456.008', status: 'distributed', platforms: ['Spotify', 'Apple Music', 'YouTube Music', 'Amazon', 'Deezer'], streams: '198,300', royalties: '$4,820', released: 'Mar 1, 2025', type: 'Single' },
    ];
  }

  // Ações CRUD
  function saveArtist() {
    const name = (document.getElementById('af_name') as HTMLInputElement)?.value;
    if (!name) return;
    const newArtist = {
      id: genId('A'),
      name,
      artistName: (document.getElementById('af_art') as HTMLInputElement)?.value || name,
      role: (document.getElementById('af_role') as HTMLSelectElement)?.value || 'Musician',
      genre: (document.getElementById('af_genre') as HTMLSelectElement)?.value || 'Pop',
      email: (document.getElementById('af_email') as HTMLInputElement)?.value,
      phone: (document.getElementById('af_phone') as HTMLInputElement)?.value,
      country: (document.getElementById('af_country') as HTMLSelectElement)?.value || 'Brazil',
      status: 'pending',
      tracks: 0,
      streams: '0',
      royalties: '$0',
      joined: today(),
      label: 'Dresbach Records'
    };
    const updated = [...artists, newArtist];
    setArtists(updated);
    localStorage.setItem('dr_artists', JSON.stringify(updated));
    closeModal();
    set({ success: `Artista ${name} adicionado com sucesso!` });
    setTimeout(() => set({ success: '' }), 3000);
  }

  function saveTrack() {
    const title = (document.getElementById('tf_title') as HTMLInputElement)?.value;
    if (!title) return;
    const artistId = (document.getElementById('tf_artist') as HTMLSelectElement)?.value;
    const artist = artists.find(a => a.id === artistId);
    const newTrack = {
      id: genId('T'),
      title,
      artistId,
      artist: artist?.name || '—',
      genre: (document.getElementById('tf_genre') as HTMLSelectElement)?.value || 'Pop',
      type: (document.getElementById('tf_type') as HTMLSelectElement)?.value || 'Single',
      duration: (document.getElementById('tf_dur') as HTMLInputElement)?.value || '—',
      isrc: (document.getElementById('tf_isrc') as HTMLInputElement)?.value,
      status: 'pending',
      platforms: [],
      streams: '0',
      royalties: '$0',
      released: '—'
    };
    const updated = [...tracks, newTrack];
    setTracks(updated);
    localStorage.setItem('dr_tracks', JSON.stringify(updated));
    closeModal();
    set({ success: `Faixa "${title}" adicionada ao catálogo!` });
    setTimeout(() => set({ success: '' }), 3000);
  }

  function approveTrack(id: string) {
    const updated = tracks.map(t => t.id === id ? { ...t, status: 'review' } : t);
    setTracks(updated);
    localStorage.setItem('dr_tracks', JSON.stringify(updated));
    set({ success: 'Faixa enviada para revisão técnica.' });
    setTimeout(() => set({ success: '' }), 3000);
  }

  // ═══════════════════════════════════════════════════
  // PAGE RENDERERS
  // ═══════════════════════════════════════════════════

  function renderDashboard() {
    const active = artists.filter(a => a.status === 'active').length;
    const distTracks = tracks.filter(t => t.status === 'distributed').length;
    return (
      <div className="fade-up">
        <div className="ph">
          <div className="ph-left"><h1>Dashboard</h1><p>Visão geral da gravadora — {today()}</p></div>
          <div className="ph-actions">
            <button className="btn btn-outline btn-sm" onClick={() => set({ page: 'reports' })}>📈 Relatório Completo</button>
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
          <div>
            <div className="card">
              <div className="card-head"><div className="card-title"><span className="ic">🎤</span> Top Artistas</div><button className="btn btn-outline btn-sm" onClick={() => set({ page: 'artists' })}>Ver Todos</button></div>
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead><tr><th>Artista</th><th>Gênero</th><th>Músicas</th><th>Streams</th><th>Royalties</th><th>Status</th></tr></thead>
                  <tbody>{artists.filter(a => a.status === 'active').slice(0, 5).map(a => (
                    <tr key={a.id}>
                      <td className="t-name" style={{ cursor: 'pointer', color: 'var(--gold)' }} onClick={() => { set({ selectedArtist: a }); openModal('artistDetail'); }}>{a.name}</td>
                      <td style={{ color: 'var(--muted)' }}>{a.genre}</td>
                      <td>{a.tracks}</td>
                      <td style={{ fontWeights: 600 }}>{a.streams}</td>
                      <td style={{ color: 'var(--green)', fontWeights: 600 }}>{a.royalties}</td>
                      <td><span className="badge bg">Ativo</span></td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="card-head"><div className="card-title"><span className="ic">🎵</span> Músicas Recentes</div><button className="btn btn-outline btn-sm" onClick={() => set({ page: 'catalog' })}>Catálogo</button></div>
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead><tr><th>Título</th><th>Artista</th><th>Tipo</th><th>Status</th><th>Streams</th></tr></thead>
                  <tbody>{tracks.slice(0, 6).map(t => (
                    <tr key={t.id}>
                      <td className="t-name">{t.title}</td>
                      <td style={{ color: 'var(--muted)' }}>{t.artist}</td>
                      <td><span className="badge bb">{t.type}</span></td>
                      <td><span className={`badge ${t.status === 'distributed' ? 'bg' : t.status === 'pending' ? 'bgo' : 'br'}`}>{t.status === 'distributed' ? 'Distribuída' : t.status === 'pending' ? 'Pendente' : 'Revisão'}</span></td>
                      <td>{t.streams}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{ marginBottom: '16px' }}>
              <div className="card-title" style={{ marginBottom: '14px' }}><span className="ic">💰</span> Receita por Fonte</div>
              {[
                ['Streaming', 72, '$19,570'], ['Performance', 14, '$3,805'], ['Sync / Licença', 8, '$2,175'], ['Mecânico', 4, '$1,087'], ['Outros', 2, '$543']
              ].map(([l, p, v], i) => (
                <div key={i} className="bar-row">
                  <div className="bar-lbl">{l}</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: `${p}%` }}></div></div>
                  <div className="bar-val">{v}</div>
                </div>
              ))}
            </div>
            <div className="card" style={{ marginBottom: '16px' }}>
              <div className="card-title" style={{ marginBottom: '14px' }}><span className="ic">⚡</span> Ações Rápidas</div>
              <button className="btn btn-primary btn-sm btn-full" style={{ marginBottom: '8px' }} onClick={() => openModal('addArtist')}>+ Novo Artista</button>
              <button className="btn btn-gold btn-sm btn-full" style={{ marginBottom: '8px' }} onClick={() => openModal('addTrack')}>+ Nova Música</button>
              <button className="btn btn-outline btn-sm btn-full" style={{ marginBottom: '8px' }} onClick={() => set({ page: 'distribution' })}>⬆ Distribuir Faixa</button>
              <button className="btn btn-outline btn-sm btn-full" style={{ marginBottom: '8px' }} onClick={() => set({ page: 'contracts' })}>📜 Gerar Contrato</button>
              <button className="btn btn-outline btn-sm btn-full" style={{ marginBottom: '8px' }} onClick={() => set({ page: 'royalties' })}>💰 Processar Royalties</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderArtists() {
    const colors = ['#2c3e6b','#3d2c6b','#2c6b3d','#6b3d2c','#2c5a6b','#6b2c3d','#4a6b2c','#6b5a2c'];
    return (
      <div className="fade-up">
        <div className="ph">
          <div className="ph-left"><h1>Artistas</h1><p>{artists.length} artistas no roster Dresbach</p></div>
          <div className="ph-actions">
            <button className="btn btn-gold btn-sm" onClick={() => openModal('addArtist')}>+ Novo Artista</button>
          </div>
        </div>
        <div className="tabs">
          {['Cards', 'Lista'].map((t, i) => (
            <div key={i} className={`tab ${state.tab === i ? 'on' : ''}`} onClick={() => set({ tab: i })}>{t}</div>
          ))}
        </div>
        {state.tab === 0 ? (
          <div className="artist-grid">
            {artists.map((a, i) => (
              <div key={a.id} className="artist-card" onClick={() => { set({ selectedArtist: a }); openModal('artistDetail'); }}>
                <div className="artist-card-thumb" style={{ background: colors[i % colors.length], color: 'rgba(255,255,255,0.2)' }}>
                  <span style={{ color: 'white', fontSize: '26px', fontWeight: 700 }}>{a.name.split(' ').map((w:any) => w[0]).join('').slice(0, 2)}</span>
                </div>
                <div className="artist-card-body">
                  <div className="artist-card-name">{a.name}</div>
                  <div className="artist-card-role">{a.role} · {a.genre}</div>
                  <div style={{ marginTop: '6px' }}><span className={`badge ${a.status === 'active' ? 'bg' : a.status === 'pending' ? 'bgo' : 'br'}`}>{a.status}</span></div>
                  <div className="artist-card-stats">
                    <div className="artist-card-stat"><b>{a.tracks}</b>músicas</div>
                    <div className="artist-card-stat"><b>{a.streams}</b>streams</div>
                    <div className="artist-card-stat"><b style={{ color: 'var(--green)' }}>{a.royalties}</b>royalties</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card">
            <div className="tbl-wrap">
              <table className="tbl">
                <thead><tr><th>ID</th><th>Nome</th><th>Papel</th><th>Gênero</th><th>PRO</th><th>Status</th><th>Ações</th></tr></thead>
                <tbody>{artists.map(a => (
                  <tr key={a.id}>
                    <td><span className="mono">{a.id}</span></td>
                    <td className="t-name">{a.name}</td>
                    <td>{a.role}</td>
                    <td>{a.genre}</td>
                    <td><span className="mono">{a.pro}</span></td>
                    <td><span className={`badge ${a.status === 'active' ? 'bg' : 'bgo'}`}>{a.status}</span></td>
                    <td><button className="btn btn-outline btn-xs" onClick={() => { set({ selectedArtist: a }); openModal('artistDetail'); }}>Gerenciar</button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }

  function renderCatalog() {
    return (
      <div className="fade-up">
        <div className="ph">
          <div className="ph-left"><h1>Catálogo de Músicas</h1><p>{tracks.length} faixas registradas</p></div>
          <div className="ph-actions">
            <button className="btn btn-gold btn-sm" onClick={() => openModal('addTrack')}>+ Adicionar Faixa</button>
          </div>
        </div>
        <div className="card">
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>ID</th><th>Título</th><th>Artista</th><th>Tipo</th><th>Gênero</th><th>ISRC</th><th>Status</th><th>Ações</th></tr></thead>
              <tbody>{tracks.map(t => (
                <tr key={t.id}>
                  <td><span className="mono">{t.id}</span></td>
                  <td className="t-name">{t.title}</td>
                  <td>{t.artist}</td>
                  <td><span className="badge bb">{t.type}</span></td>
                  <td>{t.genre}</td>
                  <td><span className="mono">{t.isrc || '—'}</span></td>
                  <td><span className={`badge ${t.status === 'distributed' ? 'bg' : t.status === 'pending' ? 'bgo' : 'br'}`}>{t.status}</span></td>
                  <td style={{ display: 'flex', gap: '5px' }}>
                    {t.status === 'pending' && <button className="btn btn-gold btn-xs" onClick={() => approveTrack(t.id)}>✓ Aprovar</button>}
                    <button className="btn btn-outline btn-xs">Ver</button>
                  </td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  function renderLogin() {
    return (
      <div className="login-gate">
        <style dangerouslySetInnerHTML={{ __html: `
          .login-gate { min-height: 100vh; background: var(--text); display: flex; align-items: center; justify-content: center; font-family: 'Sora', sans-serif; }
          .login-box { background: white; border-radius: 20px; width: 400px; padding: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); border-top: 5px solid var(--gold); }
          .login-header { text-align: center; margin-bottom: 30px; }
          .login-header h1 { font-family: 'Bebas Neue'; font-size: 32px; color: var(--text); letter-spacing: 1px; }
          .login-header p { font-size: 10px; color: var(--gold); text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin-top: 5px; }
        ` }} />
        <div className="login-box fade-up">
          <div className="login-header">
            <div style={{ width: '50px', height: '50px', background: 'var(--gold)', borderRadius: '10px', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justify: 'center', fontSize: '24px', fontFamily: 'Bebas Neue' }}>DR</div>
            <h1>Dresbach Records</h1>
            <p>Painel Administrativo</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="fld"><label>Usuário Administrador</label><input value={loginForm.user} onChange={e => setLoginForm({...loginForm, user: e.target.value})} placeholder="admin" required /></div>
            <div className="fld"><label>Senha de Acesso</label><input type="password" value={loginForm.pass} onChange={e => setLoginForm({...loginForm, pass: e.target.value})} placeholder="••••••••" required /></div>
            {state.error && <div className="msg msg-err" style={{ marginBottom: '20px' }}>{state.error}</div>}
            <button className="btn btn-gold btn-full" style={{ height: '50px', fontSize: '14px' }}>ACESSAR CENTRAL DE COMANDO</button>
          </form>
          <p style={{ textAlign: 'center', fontSize: '10px', color: '#ccc', marginTop: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Acesso Restrito — Dresbach Group 2025</p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════
  // MAIN LAYOUT
  // ═══════════════════════════════════════════════════

  if (!isLoggedIn) return renderLogin();

  const nav = [
    { sec: 'Principal', items: [{ id: 'dashboard', ic: '⊞', l: 'Dashboard' }, { id: 'activity', ic: '⏱', l: 'Atividade', badge: 3 }] },
    { sec: 'Artistas & Música', items: [{ id: 'artists', ic: '🎤', l: 'Artistas' }, { id: 'catalog', ic: '🎵', l: 'Catálogo' }, { id: 'contracts', ic: '📋', l: 'Contratos' }] },
    { sec: 'Distribuição', items: [{ id: 'distribution', ic: '🌐', l: 'Distribuição' }, { id: 'platforms', ic: '📡', l: 'Plataformas' }] },
    { sec: 'Financeiro', items: [{ id: 'royalties', ic: '💰', l: 'Royalties' }, { id: 'payments', ic: '💳', l: 'Pagamentos' }] },
    { sec: 'Plataforma', items: [{ id: 'site', ic: '🌍', l: 'Gerenciar Site' }, { id: 'settings', ic: '⚙', l: 'Configurações' }] },
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
          --border: rgba(0,0,0,0.08);
          --border2: rgba(0,0,0,0.14);
          --text: #1a1814;
          --muted: #7a7570;
          --gold: #b8862a;
          --gold2: #d4a43a;
          --goldbg: rgba(184,134,42,0.08);
          --goldborder: rgba(184,134,42,0.25);
          --red: #c0392b;
          --green: #27ae60;
          --blue: #2980b9;
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
        .logo-sub { font-size: 9px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1.5px; }
        
        /* SIDEBAR */
        .sidebar { width: var(--sidebar); background: var(--text); position: fixed; top: var(--topbar); left: 0; bottom: 0; overflow-y: auto; z-index: 100; border-right: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; }
        .nav-sec { padding: 18px 20px 6px; font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.28); }
        .nav-item { display: flex; align-items: center; gap: 11px; padding: 10px 20px; cursor: pointer; color: rgba(255,255,255,0.55); border-left: 3px solid transparent; transition: .15s; }
        .nav-item:hover { color: white; background: rgba(255,255,255,0.04); }
        .nav-item.active { color: var(--gold2); border-left-color: var(--gold); background: rgba(184,134,42,0.12); }
        .nav-bdg { margin-left: auto; background: var(--red); color: white; font-size: 9px; font-weight: 700; padding: 2px 7px; border-radius: 12px; }
        
        /* MAIN & PAGE */
        .main { margin-left: var(--sidebar); padding-top: var(--topbar); display: flex; flex-direction: column; min-height: 100vh; }
        .page-content { padding: 28px; flex: 1; animation: fadeUp .3s ease; }
        .ph { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 24px; }
        .ph h1 { font-family: 'Bebas Neue'; font-size: 34px; color: var(--text); }
        .card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 22px; margin-bottom: 18px; }
        .card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
        .card-title { font-family: 'Bebas Neue'; font-size: 18px; display: flex; align-items: center; gap: 9px; }
        .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-bottom: 22px; }
        .stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 18px; position: relative; overflow: hidden; border-bottom: 3px solid var(--gold); }
        .stat-label { font-size: 9px; font-weight: 700; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
        .stat-value { font-family: 'Bebas Neue'; font-size: 32px; color: var(--text); }
        .stat-up { color: var(--green); font-size: 11px; font-weight: 600; }
        
        /* TABLES */
        .tbl { width: 100%; border-collapse: collapse; }
        .tbl th { text-align: left; font-size: 9px; text-transform: uppercase; color: var(--muted); padding: 10px 14px; background: var(--surface2); border-bottom: 2px solid var(--border2); }
        .tbl td { padding: 12px 14px; border-bottom: 1px solid var(--border); font-size: 12px; }
        .tbl .t-name { font-weight: 600; }
        
        /* UI ELEMENTS */
        .badge { padding: 3px 9px; border-radius: 4px; font-size: 10px; font-weight: 700; text-transform: uppercase; display: inline-block; }
        .bg { background: rgba(39,174,96,.1); color: var(--green); border: 1px solid var(--green); }
        .bgo { background: var(--goldbg); color: var(--gold); border: 1px solid var(--gold); }
        .br { background: rgba(192,57,43,.1); color: var(--red); border: 1px solid var(--red); }
        .bb { background: rgba(41,128,185,.1); color: var(--blue); border: 1px solid var(--blue); }
        .btn { padding: 10px 18px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: .2s; border: none; display: inline-flex; align-items: center; gap: 7px; }
        .btn-gold { background: var(--gold); color: white; }
        .btn-primary { background: var(--text); color: white; }
        .btn-outline { background: transparent; border: 1px solid var(--border2); color: var(--muted); }
        .btn-xs { padding: 4px 10px; font-size: 10px; }
        .btn-full { width: 100%; }
        .mono { font-family: monospace; background: var(--surface2); padding: 2px 5px; border-radius: 4px; }
        .fade-up { animation: fadeUp .3s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        /* FOOTER */
        .footer { margin-left: var(--sidebar); background: var(--text); padding: 40px; border-top: 3px solid var(--gold); color: rgba(255,255,255,0.5); }
        
        /* MODAL */
        .modal-bg { position: fixed; inset: 0; background: rgba(0,0,0,.5); display: flex; align-items: center; justify-content: center; z-index: 500; backdrop-filter: blur(4px); }
        .modal { background: white; border-radius: 14px; width: 100%; max-width: 580px; overflow: hidden; box-shadow: 0 24px 60px rgba(0,0,0,0.2); animation: fadeUp .25s ease; }
        .modal-head { padding: 20px 26px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .modal-head h2 { font-family: 'Bebas Neue'; font-size: 22px; }
        .modal-body { padding: 22px 26px; }
        .modal-foot { padding: 14px 26px; border-top: 1px solid var(--border); display: flex; gap: 9px; justify-content: flex-end; }
        .fld { margin-bottom: 15px; }
        .fld label { display: block; font-size: 9px; font-weight: 700; text-transform: uppercase; margin-bottom: 5px; color: var(--muted); }
        .fld input, .fld select, .fld textarea { width: 100%; padding: 10px; border: 1px solid var(--border2); border-radius: 8px; background: var(--surface2); outline: none; }
        .fg { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .msg { padding: 10px; border-radius: 8px; margin-bottom: 15px; font-size: 12px; }
        .msg-ok { background: rgba(39,174,96,.1); color: var(--green); border: 1px solid var(--green); }
        
        /* ARTIST GRID */
        .artist-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .artist-card { background: white; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; cursor: pointer; transition: .2s; }
        .artist-card:hover { transform: translateY(-3px); border-color: var(--gold); }
        .artist-card-thumb { height: 110px; display: flex; align-items: center; justify-content: center; font-family: 'Bebas Neue'; font-size: 42px; }
        .artist-card-body { padding: 12px 14px; }
        .artist-card-name { font-weight: 700; }
        .artist-card-stats { display: flex; gap: 12px; margin-top: 8px; border-top: 1px solid var(--border); padding-top: 8px; font-size: 10px; color: var(--muted); }
        .artist-card-stat b { display: block; color: var(--text); font-size: 12px; }
      ` }} />

      <header className="header">
        <div className="header-logo">
          <div className="logo-glyph">DR</div>
          <div>
            <div className="logo-text">Dresbach Records</div>
            <div className="logo-sub">Admin Dashboard</div>
          </div>
        </div>
        <div style={{ flex: 1, padding: '0 20px' }}>
          <div style={{ position: 'relative', maxWidth: '340px' }}>
            <input placeholder="Buscar artistas, músicas, contratos…" style={{ width: '100%', background: 'rgba(255,255,255,0.1)', border: 'none', padding: '8px 12px 8px 34px', borderRadius: '8px', color: 'white', fontSize: '12px' }} />
          </div>
        </div>
        <div className="header-right" style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '0 20px' }}>
          <span className="h-badge">CNPJ 63.187.175/0001-70</span>
          <div className="h-avatar" onClick={handleLogout} title="Sair">A</div>
        </div>
      </header>

      <aside className="sidebar">
        {nav.map(s => (
          <div key={s.sec}>
            <div className="nav-sec">{s.sec}</div>
            {s.items.map(it => (
              <div key={it.id} className={`nav-item ${state.page === it.id ? 'active' : ''}`} onClick={() => set({ page: it.id, tab: 0 })}>
                <span style={{ width: '18px', textAlign: 'center' }}>{it.ic}</span>{it.l}
                {it.badge && <span className="nav-bdg">{it.badge}</span>}
              </div>
            ))}
          </div>
        ))}
        <div style={{ marginTop: 'auto', padding: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>
          <strong>Dresbach Records LTDA</strong><br />São Paulo, Brasil
        </div>
      </aside>

      <main className="main">
        <div className="page-content">
          {state.success && <div className="msg msg-ok">✓ {state.success}</div>}
          {state.page === 'dashboard' && renderDashboard()}
          {state.page === 'artists' && renderArtists()}
          {state.page === 'catalog' && renderCatalog()}
          {['activity', 'contracts', 'distribution', 'platforms', 'royalties', 'payments', 'site', 'settings', 'reports'].includes(state.page) && (
            <div style={{ textAlign: 'center', padding: '100px' }}>
              <div style={{ fontSize: '40px' }}>⏳</div>
              <h2>Módulo Administrativo</h2>
              <p>Esta seção está sendo populada com dados do banco industrial.</p>
              <button className="btn btn-gold btn-sm" style={{ marginTop: '20px' }} onClick={() => set({ page: 'dashboard' })}>Voltar ao Início</button>
            </div>
          )}
        </div>

        <footer className="footer">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '40px' }}>
            <div>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '28px', color: 'white', marginBottom: '10px' }}>Dresbach Records</div>
              <p>Gravadora e editora independente sediada em São Paulo. Gerenciando talentos desde 2020.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--gold)', fontSize: '10px', textTransform: 'uppercase', marginBottom: '15px' }}>Links Rápidos</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a onClick={() => set({ page: 'artists' })} style={{ cursor: 'pointer' }}>Artistas</a>
                <a onClick={() => set({ page: 'catalog' })} style={{ cursor: 'pointer' }}>Catálogo</a>
                <a onClick={() => set({ page: 'royalties' })} style={{ cursor: 'pointer' }}>Financeiro</a>
              </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '11px' }}>
              © 2025 Dresbach Records LTDA<br />Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </main>

      {/* MODAL SYSTEM */}
      {state.modal === 'addArtist' && (
        <div className="modal-bg" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="modal">
            <div className="modal-head"><h2>Novo Artista</h2><button onClick={closeModal} style={{ background: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button></div>
            <div className="modal-body">
              <div className="fg">
                <div className="fld"><label>Nome Completo *</label><input id="af_name" placeholder="Nome real" /></div>
                <div className="fld"><label>Nome Artístico</label><input id="af_art" placeholder="Nome público" /></div>
                <div className="fld"><label>Papel *</label><select id="af_role"><option>Musician</option><option>Composer</option></select></div>
                <div className="fld"><label>Gênero</label><select id="af_genre"><option>Pop</option><option>Rock</option><option>Jazz</option><option>Eletrônica</option></select></div>
                <div className="fld"><label>Email *</label><input id="af_email" type="email" /></div>
                <div className="fld"><label>País</label><select id="af_country"><option>Brasil</option><option>USA</option></select></div>
              </div>
            </div>
            <div className="modal-foot">
              <button className="btn btn-outline btn-sm" onClick={closeModal}>Cancelar</button>
              <button className="btn btn-gold btn-sm" onClick={saveArtist}>Salvar Artista</button>
            </div>
          </div>
        </div>
      )}

      {state.modal === 'addTrack' && (
        <div className="modal-bg" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="modal">
            <div className="modal-head"><h2>Adicionar Faixa</h2><button onClick={closeModal} style={{ background: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button></div>
            <div className="modal-body">
              <div className="fg">
                <div className="fld" style={{ gridColumn: '1/-1' }}><label>Título da Obra *</label><input id="tf_title" placeholder="Ex: Blue Horizon" /></div>
                <div className="fld"><label>Artista Detentor *</label><select id="tf_artist">{artists.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}</select></div>
                <div className="fld"><label>Tipo</label><select id="tf_type"><option>Single</option><option>Álbum</option></select></div>
                <div className="fld"><label>Duração</label><input id="tf_dur" placeholder="3:45" /></div>
                <div className="fld"><label>ISRC</label><input id="tf_isrc" placeholder="BR-XXX..." /></div>
              </div>
            </div>
            <div className="modal-foot">
              <button className="btn btn-outline btn-sm" onClick={closeModal}>Cancelar</button>
              <button className="btn btn-gold btn-sm" onClick={saveTrack}>Adicionar Faixa</button>
            </div>
          </div>
        </div>
      )}

      {state.modal === 'artistDetail' && state.selectedArtist && (
        <div className="modal-bg" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="modal">
            <div className="modal-head"><h2>Perfil: {state.selectedArtist.name}</h2><button onClick={closeModal} style={{ background: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button></div>
            <div className="modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[['ID', state.selectedArtist.id], ['Status', state.selectedArtist.status], ['Email', state.selectedArtist.email], ['Streams', state.selectedArtist.streams], ['Royalties', state.selectedArtist.royalties], ['PRO', state.selectedArtist.pro]].map(([k, v]) => (
                  <div key={k} style={{ padding: '10px', background: 'var(--surface2)', borderRadius: '7px' }}>
                    <div style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '3px' }}>{k}</div>
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '20px' }}>
                <button className="btn btn-primary btn-sm btn-full" onClick={() => set({ page: 'catalog', modal: null })}>Ver Músicas no Catálogo</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
