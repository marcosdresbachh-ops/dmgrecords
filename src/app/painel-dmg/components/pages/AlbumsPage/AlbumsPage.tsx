
"use client";
import { Plus, Disc, MoreVertical } from "lucide-react";
import "./AlbumsPage.css";

export function AlbumsPage() {
  const albums = [
    ['ALB001','Horizons EP','Luna Verona','EP','4','Jan 2025','786636547846','Distribuído'],
    ['ALB002','Porto Sessions','Marco Esteves','Álbum','10','Mar 2025','786636547847','Em Produção'],
    ['ALB003','Neon Sessions','Sofia Andrade','Álbum','8','Dez 2024','786636547848','Distribuído'],
    ['ALB004','Soul Diaries','Ayla Santos','Álbum','12','Nov 2024','786636547849','Distribuído'],
    ['ALB005','Ritmo & Blues','Isabela Cruz','EP','5','Abr 2025','—','Pendente'],
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Álbuns & EPs</h1>
          <p>Gerenciar releases completos e projetos discográficos</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Novo Projeto</button>
      </div>

      <div className="admin-card">
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th><th>Título do Projeto</th><th>Artista</th><th>Tipo</th><th>Faixas</th><th>Lançamento</th><th>UPC</th><th>Status</th><th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {albums.map((a, i) => (
                <tr key={i}>
                  <td><span className="font-mono text-[10px] text-admin-gold">{a[0]}</span></td>
                  <td className="font-black italic uppercase tracking-tighter text-sm">{a[1]}</td>
                  <td className="text-admin-muted font-bold text-[11px] uppercase tracking-widest">{a[2]}</td>
                  <td><span className="admin-badge badge-blue">{a[3]}</span></td>
                  <td className="font-black text-center">{a[4]}</td>
                  <td className="text-admin-muted font-bold text-[11px]">{a[5]}</td>
                  <td className="font-mono text-[10px] text-admin-muted2">{a[6]}</td>
                  <td><span className={`admin-badge ${a[7]==='Distribuído'?'badge-green':a[7]==='Pendente'?'badge-gold':'badge-blue'}`}>{a[7]}</span></td>
                  <td><button className="p-2 hover:text-admin-gold transition-colors"><MoreVertical size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
