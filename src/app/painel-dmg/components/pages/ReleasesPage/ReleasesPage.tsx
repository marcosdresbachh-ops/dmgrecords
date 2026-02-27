
"use client";
import { Rocket, Plus, CheckCircle2, Clock, Globe } from "lucide-react";
import "./ReleasesPage.css";

export function ReleasesPage() {
  const releases = [
    ['Jan 10, 2025','Blue Horizon','Luna Verona','Single','5 plataformas','live'],
    ['Jan 25, 2025','Miami Nights','Ayla Santos','Álbum','5 plataformas','live'],
    ['Feb 1, 2025','Porto do Sol','Marco Esteves','Single','3 plataformas','live'],
    ['Mar 1, 2025','Corazón Libre','Isabela Cruz','Single','5 plataformas','live'],
    ['Abr 15, 2025','Raiz do Norte','Diego Ferreira','Single','—','pending'],
    ['Mai 1, 2025','Novo Álbum','Marco Esteves','Álbum','—','planning'],
    ['Jun 1, 2025','EP de Verão','Luna Verona','EP','—','planning'],
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph flex justify-between items-start mb-10">
        <div>
          <h1>Gestão de Lançamentos</h1>
          <p>Calendário editorial e planejamento estratégico</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Planejar Lançamento</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 admin-card">
          <div className="card-title mb-8"><Rocket className="text-admin-gold" /> Calendário 2025</div>
          <table className="admin-table">
            <thead>
              <tr><th>Data</th><th>Título</th><th>Artista</th><th>Tipo</th><th>Plataformas</th><th>Status</th></tr>
            </thead>
            <tbody>
              {releases.map((r, i) => (
                <tr key={i}>
                  <td className={`font-bold italic uppercase tracking-tighter ${r[5]==='live' ? 'text-admin-green' : 'text-admin-muted'}`}>{r[0]}</td>
                  <td className="font-bold text-admin-text">{r[1]}</td>
                  <td className="text-admin-muted font-bold text-[11px] uppercase">{r[2]}</td>
                  <td><span className="admin-badge badge-blue">{r[3]}</span></td>
                  <td className="text-[10px] font-bold text-admin-muted2">{r[4]}</td>
                  <td>
                    <span className={`admin-badge ${r[5]==='live'?'badge-green':r[5]==='pending'?'badge-gold':'badge-blue'}`}>
                      {r[5].toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8">Checklist de Lançamento</h3>
          <div className="space-y-4">
            {[
              ['Upload do áudio (WAV 24-bit)',true],['Arte da capa (3000x3000px)',true],['Metadados completos',true],
              ['ISRC registrado',true],['ISWC registrado',false],['Split sheet assinado',true],
              ['Distribuição agendada',false],['Press release pronto',false],['Pitching editorial',false],
            ].map(([t,done], i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-admin-surface2 last:border-0">
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-white ${done ? 'bg-admin-green' : 'bg-admin-surface3'}`}>
                  {done && <CheckCircle2 size={12} />}
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-widest ${done ? 'text-admin-muted line-through' : 'text-admin-text'}`}>{t as string}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
