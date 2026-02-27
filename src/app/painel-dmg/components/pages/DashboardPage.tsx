
"use client";
import { TrendingUp, Users, Music, Radio, Wallet } from "lucide-react";
import { AdminDB } from "../../lib/admin-db";

export function DashboardPage() {
  const artists = AdminDB.getArtists();
  const tracks = AdminDB.getTracks();

  const stats = [
    { label: 'Artistas Ativos', value: artists.length, trend: '↑ +2', sub: 'de roster total', icon: <Users /> },
    { label: 'Catálogo', value: tracks.length, trend: '↑ +5', sub: 'músicas live', icon: <Music /> },
    { label: 'Plataformas', value: '18', trend: 'Global', sub: 'Parceiros ativos', icon: <Radio /> },
    { label: 'Royalties Q1', value: '$27,180', trend: '↑ +22%', sub: 'Distribuídos', icon: <Wallet /> },
    { label: 'Streams', value: '1.2M', trend: '↑ +14%', sub: 'Este mês', icon: <TrendingUp /> },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-admin-text font-bebas">Dashboard Executivo</h1>
          <p className="text-admin-muted text-xs font-bold uppercase tracking-widest mt-1">Gerenciamento Global Dresbach Records — Março 2025</p>
        </div>
        <button className="admin-btn admin-btn-gold">+ Novo Artista</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-[24px] border-b-4 border-admin-gold shadow-sm group hover:shadow-xl transition-all">
            <div className="flex justify-between items-center mb-4">
              <div className="p-3 bg-admin-bg rounded-xl text-admin-gold group-hover:scale-110 transition-transform">{s.icon}</div>
              <span className="text-[10px] font-black text-admin-green bg-admin-green/10 px-2 py-1 rounded-full">{s.trend}</span>
            </div>
            <p className="text-[9px] font-black text-admin-muted uppercase tracking-widest mb-1">{s.label}</p>
            <p className="text-3xl font-black italic tracking-tighter text-admin-text font-bebas">{s.value}</p>
            <p className="text-[10px] text-admin-muted mt-2 font-bold uppercase">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 font-bebas flex items-center gap-3">
            <Users className="text-admin-gold h-5 w-5" /> Roster de Destaque
          </h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Artista</th>
                <th>Gênero</th>
                <th>Músicas</th>
                <th>Streams</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((a: any, i: number) => (
                <tr key={i}>
                  <td className="font-bold text-admin-gold">{a.name}</td>
                  <td className="text-admin-muted font-semibold uppercase text-[10px]">{a.genre}</td>
                  <td className="font-bold">{a.tracks}</td>
                  <td className="font-bold">{a.streams}</td>
                  <td><span className="admin-badge badge-green">Ativo</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 font-bebas">Receita por Fonte</h3>
          <div className="space-y-8">
            {[
              { l: 'Streaming Digital', p: '72%', v: '$19,570' },
              { l: 'Performance / Rádio', p: '14%', v: '$3,805' },
              { l: 'Sync / Licença', p: '8%', v: '$2,175' },
              { l: 'Mecânico', p: '4%', v: '$1,087' },
            ].map((r, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span>{r.l}</span>
                  <span className="text-admin-gold">{r.v}</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: r.p }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
