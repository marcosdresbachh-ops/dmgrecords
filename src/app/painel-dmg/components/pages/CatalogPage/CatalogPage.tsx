
"use client";
import { Play, Download, Plus, Search, CheckCircle2, MoreHorizontal, Clock, Trash2 } from "lucide-react";
import { AdminDB } from "../../../lib/admin-db";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import "./CatalogPage.css";

export function CatalogPage({ openModal, refresh }: any) {
  const [tracks, setTracks] = useState(AdminDB.getTracks());

  const handleApprove = (id: string) => {
    const updated = tracks.map((t: any) => t.id === id ? { ...t, status: 'distributed' } : t);
    AdminDB.saveTracks(updated);
    setTracks(updated);
    toast({ title: "Obra Aprovada", description: "O status foi atualizado para DISTRIBUÍDA." });
  };

  const handleDownload = (t: any) => {
    const content = `DMG RECORDS - METADADOS\n\nTítulo: ${t.title}\nArtista: ${t.artist}\nISRC: ${t.isrc}\nGênero: ${t.genre}\nStatus: ${t.status}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meta_${t.id}.txt`;
    a.click();
    toast({ title: "Exportando Metadados", description: "O arquivo .txt foi gerado." });
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">Catálogo de Obras</h1>
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-2">
            Gestão de ISRC e Ativos Fonográficos Oficiais
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => openModal('addTrack')} className="admin-btn btn-primary shadow-xl shadow-primary/20">
            <Plus size={16} /> Adicionar Faixa
          </button>
        </div>
      </div>

      <div className="admin-card">
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-100">
                <th className="p-6">Obra / Título</th>
                <th>Artista</th>
                <th>Gênero</th>
                <th>ISRC</th>
                <th>Streams</th>
                <th>Status</th>
                <th className="text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((t: any) => (
                <tr key={t.id} className="hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-0">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center text-primary group cursor-pointer hover:bg-primary hover:text-white transition-all shadow-sm">
                        <Play className="h-4 w-4 fill-current ml-0.5" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-black italic uppercase tracking-tighter text-sm block truncate text-zinc-900">{t.title}</span>
                        <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{t.type}</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-zinc-500 font-bold text-[11px] uppercase tracking-widest">{t.artist}</td>
                  <td><span className="admin-badge badge-blue">{t.genre}</span></td>
                  <td><span className="font-mono text-[10px] bg-zinc-100 px-3 py-1.5 rounded-lg border border-zinc-200 text-zinc-600">{t.isrc}</span></td>
                  <td className="font-black text-zinc-900 italic">{t.streams}</td>
                  <td>
                    <span className={`admin-badge ${t.status === 'distributed' ? 'badge-green' : 'badge-gold'}`}>
                      {t.status === 'distributed' ? 'LIVE NOW' : 'PENDENTE'}
                    </span>
                  </td>
                  <td className="text-right p-6">
                    <div className="flex justify-end gap-1">
                      <button onClick={() => handleDownload(t)} className="p-3 text-zinc-300 hover:text-primary transition-colors"><Download className="h-4 w-4" /></button>
                      {t.status === 'pending' && (
                        <button onClick={() => handleApprove(t.id)} className="p-3 text-zinc-300 hover:text-green-500 transition-colors"><CheckCircle2 className="h-4 w-4" /></button>
                      )}
                      <button className="p-3 text-zinc-300 hover:text-red-500 transition-colors"><Trash2 className="h-4 w-4" /></button>
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
