
"use client";
import { Wallet, TrendingUp, Globe, DollarSign } from "lucide-react";

export function RoyaltiesPage() {
  const sources = [
    { l: 'Streaming Digital', p: '72%', v: '$19,570' },
    { l: 'Performance / Rádio', p: '14%', v: '$3,805' },
    { l: 'Sync / Licença', p: '8%', v: '$2,175' },
    { l: 'Mecânico', p: '4%', v: '$1,087' },
    { l: 'Outros', p: '2%', v: '$543' }
  ];

  const territories = [
    {c: '🇺🇸 USA', v: '$11,420', p: '42%'},
    {c: '🇧🇷 Brasil', v: '$6,540', p: '24%'},
    {c: '🇬🇧 UK', v: '$4,080', p: '15%'},
    {c: '🇩🇪 Alemanha', v: '$2,445', p: '9%'},
    {c: '🌐 Outros', v: '$2,695', p: '10%'}
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Gestão de Royalties</h1>
          <p>Conciliação financeira Q1 2025 — DMG Records</p>
        </div>
        <button className="admin-btn btn-gold"><DollarSign size={16} /> Processar Pagamentos</button>
      </div>

      <div className="stats-grid">
        {[
          ['Receita Total Q1', '$27,180'],
          ['A Pagar Artistas', '$18,420'],
          ['Retido Label', '$8,760'],
          ['Pendente', '$3,240'],
          ['Pago YTD', '$23,940'],
        ].map(([l,v], i) => (
          <div key={i} className="stat-card">
            <div className="stat-label">{l}</div>
            <div className="stat-value">{v}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="admin-card">
          <div className="card-title"><TrendingUp className="text-admin-gold" /> Receita por Fonte</div>
          <div className="space-y-8 pt-4">
            {sources.map((s, i) => (
              <div key={i} className="bar-row">
                <div className="bar-lbl">{s.l}</div>
                <div className="bar-track"><div className="bar-fill" style={{width: s.p}}></div></div>
                <div className="bar-val">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card">
          <div className="card-title"><Globe className="text-admin-gold" /> Divisão por Território</div>
          <div className="space-y-4 pt-4">
            {territories.map((t, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-admin-surface2 last:border-0">
                <span className="font-bold text-xs uppercase text-admin-muted">{t.c}</span>
                <div className="text-right">
                  <div className="font-bold text-admin-text">{t.v}</div>
                  <div className="text-[9px] font-black text-admin-muted uppercase">{t.p} do total</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
