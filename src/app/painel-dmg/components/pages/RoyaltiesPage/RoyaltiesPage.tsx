
"use client";
import { Wallet, TrendingUp, Globe, DollarSign, Download, Star, Music, Radio, Tv } from "lucide-react";
import { AdminDB } from "../../../lib/admin-db";
import "./RoyaltiesPage.css";

export function RoyaltiesPage() {
  const artists = AdminDB.getArtists();
  
  const sources = [
    { l: 'Streaming Digital', p: '72%', v: '$19,570', ic: <Music size={14}/> },
    { l: 'Performance / Rádio', p: '14%', v: '$3,805', ic: <Radio size={14}/> },
    { l: 'Sync / Licença', p: '8%', v: '$2,175', ic: <Tv size={14}/> },
    { l: 'Mecânico', p: '4%', v: '$1,087', ic: <Star size={14}/> },
    { l: 'Outros', p: '2%', v: '$543', ic: <Globe size={14}/> }
  ];

  const territories = [
    {c: '🇺🇸 Estados Unidos', v: '$11,420', p: '42%'},
    {c: '🇧🇷 Brasil', v: '$6,540', p: '24%'},
    {c: '🇬🇧 Reino Unido', v: '$4,080', p: '15%'},
    {c: '🇩🇪 Alemanha', v: '$2,445', p: '9%'},
    {c: '🌐 Outros', v: '$2,695', p: '10%'}
  ];

  const fmtR = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Gestão de Royalties</h1>
          <p>Apuração Financeira Q1 2025 — DMG Global Network</p>
        </div>
        <div className="flex gap-3">
          <button className="admin-btn btn-outline"><Download size={14} /> Exportar Relatório</button>
          <button className="admin-btn btn-primary"><DollarSign size={16} /> Processar Pagamentos</button>
        </div>
      </div>

      <div className="stats-grid">
        {[
          ['Receita Bruta Q1', '$27,180', '↑ +22% vs Q4'],
          ['A Pagar Artistas', '$18,420', 'Próximo ciclo'],
          ['Retenção Label', '$8,760', '30% médio'],
          ['Pendente Transf.', '$3,240', 'Em processamento'],
          ['Pago YTD 2025', '$23,940', 'Total anual'],
        ].map(([l,v,t], i) => (
          <div key={i} className="stat-card">
            <div className="stat-label">{l}</div>
            <div className="stat-value">{v}</div>
            <p className="text-[9px] font-black uppercase text-admin-primary mt-2">{t}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
            <Wallet className="text-admin-primary h-5 w-5" /> Divisão por Artista (Q1)
          </h3>
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr><th>Artista</th><th>Gênero</th><th>Split (A/L)</th><th>Bruto</th><th>Valor Artista</th><th>Status</th></tr>
              </thead>
              <tbody>
                {artists.map((a: any, i: number) => {
                  const splits = [70, 60, 80, 75, 85, 50, 70, 85];
                  const gross = [3420, 2180, 5640, 340, 9200, 1050, 4820, 820];
                  const g = gross[i] || 0;
                  const s = splits[i] || 70;
                  const art = g * s / 100;
                  return (
                    <tr key={i}>
                      <td className="font-black italic uppercase tracking-tighter text-sm">{a.name}</td>
                      <td className="text-admin-muted font-bold text-[10px] uppercase">{a.genre}</td>
                      <td className="font-mono text-xs font-bold">{s}/{100 - s}</td>
                      <td className="font-black">${g.toLocaleString()}</td>
                      <td className="font-black text-admin-primary italic">{fmtR(art)}</td>
                      <td><span className={`admin-badge ${i < 5 ? 'badge-green' : 'badge-red'}`}>{i < 5 ? 'Pago' : 'Pendente'}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8">Receita por Fonte</h3>
            <div className="space-y-6">
              {sources.map((s, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase text-admin-muted flex items-center gap-2">{s.ic} {s.l}</span>
                    <span className="text-xs font-black text-admin-primary">{s.v}</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: s.p }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8">Top Mercados</h3>
            <div className="space-y-4">
              {territories.map((t, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-admin-surface2 last:border-0 hover:bg-admin-surface2 px-3 rounded-xl transition-all">
                  <span className="font-black text-[11px] uppercase tracking-widest">{t.c}</span>
                  <div className="text-right">
                    <div className="font-black text-admin-primary italic">{t.v}</div>
                    <div className="text-[9px] font-bold text-admin-muted">{t.p}</div>
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
