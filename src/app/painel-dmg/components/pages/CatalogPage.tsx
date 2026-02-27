
"use client";
import { AdminDB } from "../../lib/admin-db";
import { Music, Play, ShieldCheck, Download, ExternalLink } from "lucide-react";

export function CatalogPage() {
  const tracks = AdminDB.getTracks();

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-admin-text font-bebas">Catálogo de Músicas</h1>
          <p className="text-admin-muted text-xs font-bold uppercase tracking-widest mt-1">Gestão de ISRC e Ativos Fonográficos</p>
        </div>
        <button className="admin-btn admin-btn-gold">+ Adicionar Faixa</button>
      </div>

      <div className="admin-card">
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Artista</th>
                <th>Gênero</th>
                <th>ISRC</th>
                <th>Streams</th>
                <th>Royalties</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((t: any) => (
                <tr key={t.id} className="hover:bg-admin-bg transition-colors">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-admin-text rounded-lg flex items-center justify-center text-admin-gold"><Play className="h-3 w-3 fill-admin-gold" /></div>
                      <span className="font-bold italic uppercase tracking-tighter">{t.title}</span>
                    </div>
                  </td>
                  <td className="text-admin-muted font-bold text-[11px] uppercase">{t.artist}</td>
                  <td><span className="admin-badge badge-blue">{t.genre}</span></td>
                  <td><span className="font-mono text-[10px] bg-admin-surface2 px-2 py-1 rounded">{t.isrc}</span></td>
                  <td className="font-bold">{t.streams}</td>
                  <td className="font-bold text-admin-green">{t.royalties}</td>
                  <td><span className="admin-badge badge-green">Distribuída</span></td>
                  <td>
                    <div className="flex gap-2">
                      <button className="p-2 hover:text-admin-gold transition-colors"><Download className="h-4 w-4" /></button>
                      <button className="p-2 hover:text-admin-gold transition-colors"><ExternalLink className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
