
"use client";
import { Globe, Rocket, Cloud, CheckCircle2, ChevronRight } from "lucide-react";
import "./DistributionPage.css";

export function DistributionPage() {
  const steps = [
    {ic:'📁',n:'Upload',d:'Arquivo enviado',done:true},
    {ic:'🔍',n:'Revisão',d:'Análise técnica',done:true},
    {ic:'📝',n:'Metadados',d:'ISRC, ISWC, tags',done:true},
    {ic:'✅',n:'Aprovação',d:'Aprovação interna',active:true},
    {ic:'📡',n:'Entrega',d:'Envio às plats'},
    {ic:'🌐',n:'Live',d:'Disponível ao público'},
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Distribuição Digital</h1>
          <p>Gerenciar entrega de música para plataformas mundiais</p>
        </div>
        <button className="admin-btn btn-gold"><Rocket size={16} /> Novo Lançamento</button>
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
          <Globe className="text-admin-gold h-5 w-5" /> Pipeline Industrial de Distribuição
        </h3>
        <div className="pipeline">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center group">
              {i > 0 && <ChevronRight className="text-admin-muted mx-2 opacity-30" size={20} />}
              <div className={`pipe-box ${s.done ? 'done' : s.active ? 'active' : ''} group-hover:scale-105 transition-transform`}>
                <div className="text-2xl mb-2">{s.ic}</div>
                <div className="pipe-name">{s.n}</div>
                <div className="pipe-sub">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
          <Cloud className="text-admin-gold h-5 w-5" /> Status por Plataforma Global
        </h3>
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Obra / Track</th><th>Artista</th><th>Spotify</th><th>Apple</th><th>YouTube</th><th>Amazon</th><th>Deezer</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Blue Horizon','Luna Verona','✓','✓','✓','✓','✓','LIVE'],
                ['Miami Nights','Ayla Santos','✓','✓','✓','✓','✓','LIVE'],
                ['Neon Galaxy','Sofia Andrade','✓','✓','✓','✓','✓','LIVE']
              ].map((row, i) => (
                <tr key={i}>
                  <td className="font-black italic uppercase tracking-tighter">{row[0]}</td>
                  <td className="text-admin-muted font-bold text-[11px] uppercase tracking-widest">{row[1]}</td>
                  <td className="text-admin-green font-black">{row[2]}</td>
                  <td className="text-admin-green font-black">{row[3]}</td>
                  <td className="text-admin-green font-black">{row[4]}</td>
                  <td className="text-admin-green font-black">{row[5]}</td>
                  <td className="text-admin-green font-black">{row[6]}</td>
                  <td><span className="admin-badge badge-green font-black">{row[7]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
