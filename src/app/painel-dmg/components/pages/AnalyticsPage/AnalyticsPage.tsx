
"use client";
import { BarChart3, TrendingUp, Globe, Target, ArrowUpRight } from "lucide-react";
import "./AnalyticsPage.css";

export function AnalyticsPage() {
  const platforms = [
    { p: 'Spotify', pct: '58%', v: '696K', c: '#1DB954' },
    { p: 'Apple Music', pct: '22%', v: '264K', c: '#FC3C44' },
    { p: 'YouTube', pct: '12%', v: '144K', c: '#FF0000' },
    { p: 'Amazon', pct: '5%', v: '60K', c: '#00A8E1' },
    { p: 'Deezer', pct: '3%', v: '36K', c: '#A238FF' }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Analytics Global</h1>
          <p>Inteligência de mercado e performance de catálogo 24/7</p>
        </div>
        <button className="admin-btn btn-outline">Filtrar por Período</button>
      </div>

      <div className="stats-grid">
        {[
          ['Consumo Total', '1.2M', 'Streams'],
          ['Ouvintes Ativos', '284K', 'Global'],
          ['Alcance Viral', '+32%', 'Crescimento'],
          ['Playlists Ads', '186', 'Curadorias'],
          ['Saves Totais', '48K', 'Retenção'],
        ].map(([l,v,s], i) => (
          <div key={i} className="stat-card">
            <div className="stat-label">{l}</div>
            <div className="stat-value">{v}</div>
            <p className="text-[9px] font-black uppercase text-admin-muted mt-2 tracking-widest">{s}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
            <TrendingUp className="text-admin-gold h-5 w-5" /> Performance Industrial por Plataforma
          </h3>
          <div className="space-y-10 pt-4">
            {platforms.map((s, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-admin-text">{s.p}</span>
                  <div className="text-right">
                    <span className="text-sm font-black italic text-admin-gold mr-3">{s.v}</span>
                    <span className="text-[9px] font-black text-admin-muted uppercase">{s.pct} Share</span>
                  </div>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: s.pct, backgroundColor: s.c }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
            <Target className="text-admin-gold h-5 w-5" /> Top Mercados em Ascensão
          </h3>
          <div className="space-y-4">
            {[
              ['🇺🇸 Estados Unidos','42%','↑ +18%'],
              ['🇧🇷 Brasil','24%','↑ +32%'],
              ['🇬🇧 Reino Unido','14%','↑ +10%'],
              ['🇩🇪 Alemanha','9%','↑ +8%'],
              ['🇯🇵 Japão','5%','↑ +22%']
            ].map(([c,p,g], i) => (
              <div key={i} className="flex justify-between items-center py-5 border-b border-admin-surface2 last:border-0 hover:bg-admin-bg px-4 rounded-2xl transition-colors">
                <div>
                  <span className="font-black text-[11px] uppercase text-admin-text tracking-widest block">{c}</span>
                  <span className="text-[9px] font-black text-admin-green uppercase mt-1 flex items-center gap-1"><ArrowUpRight size={10} /> {g} MoM</span>
                </div>
                <span className="text-lg font-black text-admin-gold italic leading-none">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
