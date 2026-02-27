
"use client";
import { TrendingUp, Users, Music, Radio, Wallet, Clock } from "lucide-react";
import { AdminDB } from "../../../lib/admin-db";
import "./DashboardPage.css";

export function DashboardPage() {
  const artists = AdminDB.getArtists();
  const tracks = AdminDB.getTracks();

  const stats = [
    { label: 'Artistas Ativos', value: artists.length, trend: '↑ +2', sub: 'Roster total', icon: <Users /> },
    { label: 'Catálogo', value: tracks.length, trend: '↑ +5', sub: 'Músicas live', icon: <Music /> },
    { label: 'Plataformas', value: '18', trend: 'Global', sub: 'Canais ativos', icon: <Radio /> },
    { label: 'Royalties Q1', value: 'R$ 27K', trend: '↑ +22%', sub: 'Distribuídos', icon: <Wallet /> },
    { label: 'Streams', value: '1.2M', trend: '↑ +14%', sub: 'Este mês', icon: <TrendingUp /> },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Dashboard Executivo</h1>
          <p>Visão geral da operação — Dresbach Records</p>
        </div>
        <div className="flex gap-3">
          <button className="admin-btn btn-outline">Relatórios</button>
          <button className="admin-btn btn-primary">+ Novo Artista</button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card group">
            <div className="flex justify-between items-center mb-4">
              <div className="p-3 bg-zinc-50 rounded-xl text-admin-primary group-hover:scale-110 transition-transform">{s.icon}</div>
              <span className="text-[10px] font-black text-admin-green bg-green-50 px-2 py-1 rounded-full border border-green-100">{s.trend}</span>
            </div>
            <p className="stat-label">{s.label}</p>
            <p className="stat-value">{s.value}</p>
            <p className="text-[10px] text-admin-muted mt-2 font-bold uppercase">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="admin-card">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-3">
                <Users className="text-admin-primary h-5 w-5" /> Top Artistas
              </h3>
              <button className="text-[10px] font-black text-admin-primary uppercase hover:underline">Ver Todos</button>
            </div>
            <div className="overflow-x-auto">
              <table className="admin-table">
                <thead>
                  <tr><th>Artista</th><th>Gênero</th><th>Músicas</th><th>Streams</th><th>Royalties</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {artists.slice(0, 5).map((a: any, i: number) => (
                    <tr key={i}>
                      <td className="font-bold text-admin-primary italic uppercase tracking-tighter">{a.name}</td>
                      <td className="text-admin-muted font-bold uppercase text-[10px]">{a.genre}</td>
                      <td className="font-bold">{a.tracks}</td>
                      <td className="font-bold">{a.streams}</td>
                      <td className="font-bold text-admin-green">{a.royalties}</td>
                      <td><span className="admin-badge badge-green">Ativo</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8">Receita por Fonte</h3>
            <div className="space-y-8">
              {[
                { l: 'Streaming Digital', p: '72%', v: 'R$ 19K' },
                { l: 'Performance / Rádio', p: '14%', v: 'R$ 3.8K' },
                { l: 'Sync / Licença', p: '8%', v: 'R$ 2.1K' },
                { l: 'Mecânico', p: '4%', v: 'R$ 1K' },
              ].map((r, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span>{r.l}</span>
                    <span className="text-admin-primary">{r.v}</span>
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
    </div>
  );
}
