
"use client";
import { AdminDB } from "../../lib/admin-db";
import { Users, Mail, Phone, Globe, Star } from "lucide-react";

export function ArtistsPage() {
  const artists = AdminDB.getArtists();

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-admin-text font-bebas">Roster de Artistas</h1>
          <p className="text-admin-muted text-xs font-bold uppercase tracking-widest mt-1">{artists.length} Artistas sob gestão Dresbach Records</p>
        </div>
        <button className="admin-btn admin-btn-gold">+ Novo Artista</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {artists.map((a: any) => (
          <div key={a.id} className="admin-card group hover:border-admin-gold transition-all">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-admin-text rounded-2xl flex items-center justify-center font-bebas text-2xl text-admin-gold shadow-lg group-hover:rotate-3 transition-transform">
                {a.name.substring(0,2).toUpperCase()}
              </div>
              <div>
                <h3 className="text-lg font-black italic uppercase tracking-tighter leading-none">{a.name}</h3>
                <p className="text-[10px] text-admin-muted font-bold uppercase tracking-widest mt-1">{a.role} · {a.genre}</p>
              </div>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-admin-bg">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase">
                <span className="text-admin-muted flex items-center gap-2"><Mail className="h-3 w-3" /> Email</span>
                <span>{a.email}</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-bold uppercase">
                <span className="text-admin-muted flex items-center gap-2"><Globe className="h-3 w-3" /> País</span>
                <span>{a.country}</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-bold uppercase">
                <span className="text-admin-muted flex items-center gap-2"><Star className="h-3 w-3" /> PRO</span>
                <span className="text-admin-gold font-black">{a.pro}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-8">
              <div className="text-center p-3 bg-admin-bg rounded-xl">
                <p className="text-[8px] font-black text-admin-muted uppercase">Músicas</p>
                <p className="text-sm font-black">{a.tracks}</p>
              </div>
              <div className="text-center p-3 bg-admin-bg rounded-xl">
                <p className="text-[8px] font-black text-admin-muted uppercase">Streams</p>
                <p className="text-sm font-black">{a.streams}</p>
              </div>
              <div className="text-center p-3 bg-admin-bg rounded-xl">
                <p className="text-[8px] font-black text-admin-muted uppercase">Ganhos</p>
                <p className="text-sm font-black text-admin-green">{a.royalties}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
