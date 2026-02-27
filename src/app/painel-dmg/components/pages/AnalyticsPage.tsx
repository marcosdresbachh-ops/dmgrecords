
"use client";
import { BarChart3, TrendingUp, Globe, PieChart } from "lucide-react";

export function AnalyticsPage() {
  const platforms = [
    { p: 'Spotify', pct: '58%', v: '696K' },
    { p: 'Apple Music', pct: '22%', v: '264K' },
    { p: 'YouTube', pct: '12%', v: '144K' },
    { p: 'Amazon', pct: '5%', v: '60K' },
    { p: 'Deezer', pct: '3%', v: '36K' }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Analytics Global</h1>
          <p>Dados de performance e audiência do catálogo</p>
        </div>
      </div>

      <div className="stats-grid">
        {[
          ['Streams Totais', '1.2M'],
          ['Ouvintes Únicos', '284K'],
          ['Países Alcançados', '28'],
          ['Saves / Likes', '48,200'],
          ['Playlists Editoriais', '186'],
        ].map(([l,v], i) => (
          <div key={i} className="stat-card">
            <div className="stat-label">{l}</div>
            <div className="stat-value">{v}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 admin-card">
          <div className="card-title"><TrendingUp className="text-admin-gold" /> Performance por Plataforma</div>
          <div className="space-y-8 pt-4">
            {platforms.map((s, i) => (
              <div key={i} className="bar-row">
                <div className="bar-lbl">{s.p}</div>
                <div className="bar-track"><div className="bar-fill" style={{width: s.pct}}></div></div>
                <div className="bar-val">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card">
          <div className="card-title"><Globe className="text-admin-gold" /> Top Países</div>
          <div className="space-y-4">
            {[
              ['🇺🇸 EUA','42%'],['🇧🇷 Brasil','24%'],['🇬🇧 UK','14%'],['🇩🇪 Alemanha','9%'],['🇯🇵 Japão','5%']
            ].map(([c,p], i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-admin-surface2 last:border-0 text-xs font-bold uppercase">
                <span className="text-admin-muted">{c}</span>
                <span className="text-admin-gold">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
