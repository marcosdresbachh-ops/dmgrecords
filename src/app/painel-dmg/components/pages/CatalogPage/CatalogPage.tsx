
"use client";
import { Play, Download, ExternalLink, Plus, Search, CheckCircle2 } from "lucide-react";
import { AdminDB } from "../../../lib/admin-db";
import { toast } from "@/hooks/use-toast";
import "./CatalogPage.css";

export function CatalogPage({ openModal }: any) {
  const tracks = AdminDB.getTracks();

  const handleApprove = (title: string) => {
    toast({ title: "Obra Aprovada", description: `A faixa "${title}" foi movida para distribuição.` });
  };

  const handleDownload = (title: string) => {
    toast({ title: "Download Iniciado", description: `Baixando metadados de "${title}"...` });
  };

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
            <input placeholder="Buscar faixa..." className="bg-white border border-zinc-200 rounded-full h-12 pl-12 pr-6 text-xs outline-none focus:border-admin-primary transition-all shadow-sm" />
          </div>
          <button onClick={() => openModal('addTrack')} className="admin-btn btn-primary"><Plus size={16} /> Adicionar Faixa</button>
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
                <tr key={t.id} className="hover:bg-zinc-50 transition-colors">
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-admin-primary shadow-sm group cursor-pointer hover:bg-admin-primary hover:text-white transition-all">
                        <Play className="h-4 w-4 fill-current ml-0.5" />
                      </div>
                      <div>
                        <span className="font-black italic uppercase tracking-tighter text-sm block text-zinc-900">{t.title}</span>
                        <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{t.type}</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-zinc-500 font-bold text-[11px] uppercase tracking-widest">{t.artist}</td>
                  <td><span className="admin-badge badge-blue">{t.genre}</span></td>
                  <td><span className="font-mono text-[10px] bg-zinc-100 px-3 py-1.5 rounded-lg border border-zinc-200 text-zinc-600">{t.isrc}</span></td>
                  <td className="font-black text-zinc-900 italic">{t.streams}</td>
                  <td className="font-black text-admin-green italic">{t.royalties}</td>
                  <td><span className="admin-badge badge-green">LIVE NOW</span></td>
                  <td>
                    <div className="flex gap-1">
                      <button onClick={() => handleDownload(t.title)} className="p-3 text-zinc-400 hover:text-admin-primary transition-colors"><Download className="h-4 w-4" /></button>
                      <button onClick={() => handleApprove(t.title)} className="p-3 text-zinc-400 hover:text-admin-green transition-colors"><CheckCircle2 className="h-4 w-4" /></button>
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
