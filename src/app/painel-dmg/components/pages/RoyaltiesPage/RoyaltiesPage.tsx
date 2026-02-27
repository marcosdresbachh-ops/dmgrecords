
"use client";
import { Wallet, TrendingUp, Globe, DollarSign, Download } from "lucide-react";
import "./RoyaltiesPage.css";

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
          <p>Apuração Financeira Q1 2025 — DMG Global Network</p>
        </div>
        <div className="flex gap-3">
          <button className="admin-btn btn-outline"><Download size={14} /> Exportar Extratos</button>
          <button className="admin-btn btn-gold"><DollarSign size={16} /> Processar Pagamentos</button>
        </div>
      </div>

      <div className="stats-grid">
        {[
          ['Receita Bruta Q1', '$27,180'],
          ['Net Artistas', '$18,420'],
          ['Retenção Label', '$8,760'],
          ['Pendente Transf.', '$3,240'],
          ['Pago YTD 2025', '$23,940'],
        ].map(([l,v], i) => (
          <div key={i} className="stat-card">
            <div className="stat-label">{l}</div>
            <div className="stat-value">{v}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
            <TrendingUp className="text-admin-gold h-5 w-5" /> Receita por Fonte de Ativo
          </h3>
          <div className="space-y-8">
            {sources.map((s, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-black uppercase tracking-widest text-admin-muted">{s.l}</span>
                  <span className="text-sm font-black text-admin-gold italic">{s.v}</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: s.p }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
            <Globe className="text-admin-gold h-5 w-5" /> Divisão Geográfica (Market Share)
          </h3>
          <div className="space-y-2">
            {territories.map((t, i) => (
              <div key={i} className="flex justify-between items-center py-5 border-b border-admin-surface2 last:border-0 hover:bg-admin-bg px-4 rounded-2xl transition-colors">
                <span className="font-black text-[11px] uppercase text-admin-muted tracking-widest">{t.c}</span>
                <div className="text-right">
                  <div className="font-black text-admin-text italic text-lg">{t.v}</div>
                  <div className="text-[9px] font-black text-admin-gold uppercase mt-1">{t.p} do total global</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
