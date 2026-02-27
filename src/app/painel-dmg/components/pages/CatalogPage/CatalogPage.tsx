
"use client";
import { Play, Download, ExternalLink, Plus, Search, Filter } from "lucide-react";
import { AdminDB } from "../../../lib/admin-db";
import "./CatalogPage.css";

export function CatalogPage() {
  const tracks = AdminDB.getTracks();

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Catálogo de Músicas</h1>
          <p>Gestão de ISRC e Ativos Fonográficos da Dresbach Records</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-admin-muted" />
            <input placeholder="Buscar faixa..." className="bg-white border border-admin-surface2 rounded-full h-12 pl-12 pr-6 text-xs outline-none" />
          </div>
          <button className="admin-btn btn-gold"><Plus size={16} /> Adicionar Faixa</button>
        </div>
      </div>

      <div className="admin-card">
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Título / Obra</th>
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
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-admin-text rounded-xl flex items-center justify-center text-admin-gold shadow-sm group cursor-pointer hover:bg-admin-gold hover:text-white transition-all">
                        <Play className="h-4 w-4 fill-current ml-0.5" />
                      </div>
                      <div>
                        <span className="font-black italic uppercase tracking-tighter text-sm block">{t.title}</span>
                        <span className="text-[9px] font-black text-admin-muted uppercase tracking-widest">{t.type}</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-admin-muted font-bold text-[11px] uppercase tracking-widest">{t.artist}</td>
                  <td><span className="admin-badge badge-blue">{t.genre}</span></td>
                  <td><span className="font-mono text-[10px] bg-admin-surface2 px-3 py-1.5 rounded-lg border border-admin-surface3">{t.isrc}</span></td>
                  <td className="font-black text-admin-text">{t.streams}</td>
                  <td className="font-black text-admin-green">{t.royalties}</td>
                  <td><span className="admin-badge badge-green">Distribuída</span></td>
                  <td>
                    <div className="flex gap-1">
                      <button className="p-3 hover:text-admin-gold transition-colors"><Download className="h-4 w-4" /></button>
                      <button className="p-3 hover:text-admin-gold transition-colors"><ExternalLink className="h-4 w-4" /></button>
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
