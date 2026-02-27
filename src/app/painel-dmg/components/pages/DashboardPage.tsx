
"use client";
import { TrendingUp, Users, Music, Radio, Wallet } from "lucide-react";

export function DashboardPage() {
  const stats = [
    { label: 'Artistas Ativos', value: '12', trend: '↑ +2', sub: 'de 15 totais', icon: <Users /> },
    { label: 'Catálogo', value: '247', trend: '↑ +5', sub: 'músicas live', icon: <Music /> },
    { label: 'Plataformas', value: '18', trend: 'Global', sub: 'Parceiros ativos', icon: <Radio /> },
    { label: 'Royalties Q1', value: '$27,180', trend: '↑ +22%', sub: 'Distribuídos', icon: <Wallet /> },
    { label: 'Streams', value: '1.2M', trend: '↑ +14%', sub: 'Este mês', icon: <TrendingUp /> },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-admin-text font-headline">Dashboard Executivo</h1>
          <p className="text-admin-muted text-sm font-semibold mt-1">Gerenciamento Global Dresbach Records — Março 2025</p>
        </div>
        <button className="admin-btn admin-btn-gold">+ Novo Artista</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-[24px] border-b-4 border-admin-gold shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="p-2 bg-admin-bg rounded-xl text-admin-gold">{s.icon}</div>
              <span className="text-[10px] font-black text-admin-green">{s.trend}</span>
            </div>
            <p className="text-[9px] font-black text-admin-muted uppercase tracking-widest mb-1">{s.label}</p>
            <p className="text-3xl font-black italic tracking-tighter text-admin-text font-headline">{s.value}</p>
            <p className="text-[10px] text-admin-muted mt-2 font-bold uppercase">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-6 font-headline flex items-center gap-3">
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
              {['Luna Verona', 'Marco Esteves', 'Sofia Andrade'].map((name, i) => (
                <tr key={i}>
                  <td className="font-bold text-admin-gold">{name}</td>
                  <td className="text-admin-muted">Urban Pop</td>
                  <td className="font-bold">12</td>
                  <td className="font-bold">142,800</td>
                  <td><span className="admin-badge admin-badge-green">Ativo</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-6 font-headline">Receita por Fonte</h3>
          <div className="space-y-6">
            {[
              { l: 'Streaming', p: '72%', v: '$19,570' },
              { l: 'Performance', p: '14%', v: '$3,805' },
              { l: 'Sync', p: '8%', v: '$2,175' },
            ].map((r, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase">
                  <span>{r.l}</span>
                  <span>{r.v}</span>
                </div>
                <div className="h-2 bg-admin-bg rounded-full overflow-hidden">
                  <div className="h-full bg-admin-gold" style={{ width: r.p }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
