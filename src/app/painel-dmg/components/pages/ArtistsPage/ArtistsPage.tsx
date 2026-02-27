
"use client";
import { Mail, Globe, Star, Plus, Search, MoreVertical } from "lucide-react";
import { AdminDB } from "../../../lib/admin-db";
import "./ArtistsPage.css";

export function ArtistsPage({ openModal, refresh }: any) {
  const artists = AdminDB.getArtists();

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">Roster de Artistas</h1>
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-2">
            {artists.length} Artistas sob gestão executiva DMG
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-300" />
            <input placeholder="Buscar no roster..." className="bg-zinc-50 border border-zinc-100 rounded-full h-12 pl-12 pr-6 text-xs outline-none focus:border-primary transition-all" />
          </div>
          <button onClick={() => openModal('addArtist')} className="admin-btn btn-primary shadow-xl shadow-primary/20">
            <Plus size={16} /> Novo Artista
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((a: any) => (
          <div key={a.id} className="artist-card group hover:border-primary/40 transition-all">
            <div className="flex items-center gap-6 mb-8">
              <div className="artist-avatar group-hover:scale-110 transition-transform">
                {a.name.substring(0,2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-black italic uppercase tracking-tighter truncate text-zinc-900">{a.name}</h3>
                <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest mt-1">{a.role} · {a.genre}</p>
              </div>
              <button className="p-2 text-zinc-300 hover:text-zinc-900 transition-colors"><MoreVertical size={16}/></button>
            </div>
            
            <div className="space-y-4 pt-6 border-t border-zinc-100">
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                <span className="text-zinc-400 flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> Email</span>
                <span className="text-zinc-900 truncate max-w-[140px]">{a.email}</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                <span className="text-zinc-400 flex items-center gap-2"><Globe className="h-3.5 w-3.5" /> País</span>
                <span className="text-zinc-900">{a.country}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="text-center p-4 bg-zinc-50 rounded-2xl border border-zinc-50 group-hover:bg-white transition-all shadow-inner">
                <p className="text-[8px] font-black text-zinc-400 uppercase mb-1">Tracks</p>
                <p className="text-sm font-black text-zinc-900 italic">{a.tracks}</p>
              </div>
              <div className="text-center p-4 bg-zinc-50 rounded-2xl border border-zinc-50 group-hover:bg-white transition-all shadow-inner">
                <p className="text-[8px] font-black text-zinc-400 uppercase mb-1">Streams</p>
                <p className="text-sm font-black text-zinc-900 italic">{a.streams}</p>
              </div>
              <div className="text-center p-4 bg-zinc-50 rounded-2xl border border-zinc-50 group-hover:bg-white transition-all shadow-inner">
                <p className="text-[8px] font-black text-zinc-400 uppercase mb-1">Net</p>
                <p className="text-sm font-black text-primary italic">{a.royalties}</p>
              </div>
            </div>
            
            <button 
              onClick={() => openModal('artistDetail', a)}
              className="admin-btn btn-outline w-full mt-6 py-3 text-[9px] font-black"
            >
              VER PERFIL COMPLETO
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
