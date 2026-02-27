
"use client";
import { TrendingUp, Users, Music, Radio, Wallet, FileText, Download } from "lucide-react";
import { AdminDB } from "../../../lib/admin-db";
import { toast } from "@/hooks/use-toast";
import "./DashboardPage.css";

export function DashboardPage({ openModal }: any) {
  const artists = AdminDB.getArtists();
  const tracks = AdminDB.getTracks();

  const stats = [
    { label: 'Artistas Ativos', value: artists.length, trend: '↑ +2', sub: 'Roster total', icon: <Users /> },
    { label: 'Catálogo', value: tracks.length, trend: '↑ +5', sub: 'Músicas live', icon: <Music /> },
    { label: 'Plataformas', value: '18', trend: 'Global', sub: 'Canais ativos', icon: <Radio /> },
    { label: 'Royalties Q1', value: 'R$ 27K', trend: '↑ +22%', sub: 'Distribuídos', icon: <Wallet /> },
    { label: 'Streams', value: '1.2M', trend: '↑ +14%', sub: 'Este mês', icon: <TrendingUp /> },
  ];

  const handleDownloadReport = () => {
    const content = `Relatorio DMG Records - ${new Date().toLocaleDateString()}\nTotal Artistas: ${artists.length}\nTotal Faixas: ${tracks.length}\nStreams Mensais: 1.2M`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio_dmg_${Date.now()}.txt`;
    a.click();
    toast({ title: "Relatório Gerado", description: "O arquivo .txt foi baixado com sucesso." });
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Dashboard Executivo</h1>
          <p>Visão geral da operação — Dresbach Records</p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleDownloadReport} className="admin-btn btn-outline"><Download size={14} /> Relatórios</button>
          <button onClick={() => openModal('addArtist')} className="admin-btn btn-primary">+ Novo Artista</button>
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
              <h3 className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-3 text-zinc-900">
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
                      <td className="font-bold text-admin-primary italic uppercase tracking-tighter cursor-pointer" onClick={() => openModal('artistDetail', a)}>{a.name}</td>
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
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 text-zinc-900">Receita por Fonte</h3>
            <div className="space-y-8">
              {[
                { l: 'Streaming Digital', p: '72%', v: 'R$ 19K' },
                { l: 'Performance / Rádio', p: '14%', v: 'R$ 3.8K' },
                { l: 'Sync / Licença', p: '8%', v: 'R$ 2.1K' },
                { l: 'Mecânico', p: '4%', v: 'R$ 1K' },
              ].map((r, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-zinc-500">{r.l}</span>
                    <span className="text-admin-primary font-black italic">{r.v}</span>
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
