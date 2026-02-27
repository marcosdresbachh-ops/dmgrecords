
"use client";
import { TrendingUp, Users, Music, Radio, Wallet, Clock } from "lucide-react";
import { AdminDB } from "../../../lib/admin-db";
import "./DashboardPage.css";

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
      <div className="ph flex justify-between items-start mb-10">
        <div>
          <h1>Dashboard Executivo</h1>
          <p>Visão geral da gravadora — Março 2025</p>
        </div>
        <div className="flex gap-3">
          <button className="admin-btn btn-outline">📈 Relatório Completo</button>
          <button className="admin-btn btn-gold">+ Novo Artista</button>
        </div>
      </div>

      <div className="dashboard-stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card group">
            <div className="flex justify-between items-center mb-4">
              <div className="p-3 bg-admin-bg rounded-xl text-admin-gold group-hover:scale-110 transition-transform">{s.icon}</div>
              <span className="text-[10px] font-black text-admin-green bg-admin-green/10 px-2 py-1 rounded-full">{s.trend}</span>
            </div>
            <p className="text-[9px] font-black text-admin-muted uppercase tracking-widest mb-1">{s.label}</p>
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
                <Users className="text-admin-gold h-5 w-5" /> Top Artistas
              </h3>
              <button className="text-[10px] font-black text-admin-gold uppercase hover:underline">Ver Todos</button>
            </div>
            <table className="admin-table">
              <thead>
                <tr><th>Artista</th><th>Gênero</th><th>Músicas</th><th>Streams</th><th>Royalties</th><th>Status</th></tr>
              </thead>
              <tbody>
                {artists.slice(0, 5).map((a: any, i: number) => (
                  <tr key={i}>
                    <td className="font-bold text-admin-gold italic uppercase tracking-tighter">{a.name}</td>
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

          <div className="admin-card">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-3">
                <Music className="text-admin-gold h-5 w-5" /> Músicas Recentes
              </h3>
              <button className="text-[10px] font-black text-admin-gold uppercase hover:underline">Ir ao Catálogo</button>
            </div>
            <table className="admin-table">
              <thead>
                <tr><th>Título</th><th>Artista</th><th>Tipo</th><th>Status</th><th>Streams</th></tr>
              </thead>
              <tbody>
                {tracks.slice(0, 5).map((t: any, i: number) => (
                  <tr key={i}>
                    <td className="font-bold italic uppercase tracking-tighter">{t.title}</td>
                    <td className="text-admin-muted font-bold uppercase text-[10px]">{t.artist}</td>
                    <td><span className="admin-badge badge-blue">{t.type}</span></td>
                    <td><span className="admin-badge badge-green">Distribuída</span></td>
                    <td className="font-bold">{t.streams}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8">Receita por Fonte</h3>
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

          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8">Feed de Atividade</h3>
            <div className="space-y-6">
              {[
                ['Nova faixa pendente','Diego Ferreira','var(--admin-gold)'],
                ['Distribuição concluída','"Miami Nights" live','var(--admin-green)'],
                ['Contrato assinado','Sofia Andrade','var(--admin-blue)'],
                ['Royalties pagos','Q4 2024 — $21,400','var(--admin-green)'],
              ].map(([t,s,c], i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-1.5" style={{ background: c }} />
                  <div>
                    <p className="text-[11px] font-black uppercase italic tracking-tighter">{t}</p>
                    <p className="text-[10px] text-admin-muted font-bold uppercase">{s}</p>
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
