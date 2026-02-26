
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Globe, ExternalLink, Camera, Image as ImageIcon, 
  Music, Share2, Save, Loader2, PlayCircle, Info, Smartphone
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function PublicProfilePage({ user, onUpdate }: any) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    slug: user.artistSlug || (user.artistName || user.firstName).toLowerCase().replace(/\s+/g, '-'),
    playlistUrl: user.playlistUrl || "",
    bannerUrl: user.bannerUrl || "https://picsum.photos/seed/dmg-banner/1920/600",
    avatarUrl: user.avatarUrl || `https://picsum.photos/seed/${user.artistSlug || 'dmg'}/400/400`,
    instagram: user.instagram || "",
    spotify: user.spotify || "",
    whatsapp: user.phone || ""
  });

  const slug = form.slug;

  async function handleSave() {
    setLoading(true);
    // Persistência no mock BD (localStorage)
    const users = JSON.parse(localStorage.getItem('dmg_hub_users') || '{}');
    const updatedUser = { ...user, ...form, artistSlug: slug };
    users[user.email] = updatedUser;
    localStorage.setItem('dmg_hub_users', JSON.stringify(users));
    localStorage.setItem('dmg_hub_session', JSON.stringify(updatedUser));
    
    onUpdate(updatedUser);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Página Pública Atualizada", description: "As alterações estarão visíveis no seu link oficial." });
    }, 800);
  }

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-3">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white leading-none">Minha Página Pública</h1>
          <p className="text-zinc-500 text-lg font-medium">Configure seu EPK Online oficial — Sua vitrine para gravadoras e festivais.</p>
        </div>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-black uppercase italic tracking-tighter h-14 rounded-none px-10 text-sm">
          <a href={`/${slug}`} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-3 h-5 w-5" /> VISUALIZAR MEU EPK
          </a>
        </Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-zinc-950 border border-white/5 p-12 space-y-12 rounded-[40px]">
            
            {/* URL Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" /> Endereço Oficial (URL)
              </h3>
              <div className="bg-black border border-white/10 p-6 flex items-center gap-3 rounded-2xl group focus-within:border-primary transition-all">
                <span className="text-zinc-600 font-black text-lg uppercase italic tracking-tighter">dmgrecords.com.br/</span>
                <input 
                  value={form.slug}
                  onChange={e => setForm({...form, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                  className="bg-transparent border-none p-0 text-primary font-black uppercase italic text-lg focus:ring-0 w-full tracking-tighter"
                  placeholder="seu-nome-artistico"
                />
              </div>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.3em]">O link único que define sua identidade digital oficial.</p>
            </div>

            {/* Media Section */}
            <div className="space-y-10">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white flex items-center gap-3">
                <ImageIcon className="h-6 w-6 text-primary" /> Identidade Visual
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <Label className="text-[11px] font-black uppercase text-zinc-500 tracking-[0.4em]">Foto de Perfil (Quadrada)</Label>
                  <div className="bg-white/5 border border-white/10 h-56 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary/40 transition-all group relative overflow-hidden rounded-[32px]">
                    {form.avatarUrl ? (
                      <Image src={form.avatarUrl} alt="Avatar" fill className="object-cover opacity-50 group-hover:scale-110 transition-all" />
                    ) : (
                      <Camera className="h-10 w-10 text-zinc-600" />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                      <span className="text-[11px] font-black uppercase text-white bg-primary px-6 py-2 rounded-full">Alterar Foto</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Label className="text-[11px] font-black uppercase text-zinc-500 tracking-[0.4em]">Banner de Topo (Horizontal)</Label>
                  <div className="bg-white/5 border border-white/10 h-56 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary/40 transition-all group relative overflow-hidden rounded-[32px]">
                    <Image src={form.bannerUrl} alt="Banner" fill className="object-cover opacity-50 group-hover:scale-110 transition-all" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                      <span className="text-[11px] font-black uppercase text-white bg-primary px-6 py-2 rounded-full">Alterar Banner</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-[11px] font-black uppercase text-zinc-500 flex items-center gap-3 tracking-[0.4em]">
                  <Music className="h-4 w-4 text-primary" /> Playlist Oficial (Spotify / SoundCloud)
                </Label>
                <Input 
                  value={form.playlistUrl}
                  onChange={e => setForm({...form, playlistUrl: e.target.value})}
                  placeholder="https://open.spotify.com/playlist/..." 
                  className="bg-black border-white/10 h-16 rounded-2xl focus:border-primary font-bold text-lg tracking-tighter italic" 
                />
                <p className="text-[10px] text-zinc-600 italic tracking-[0.2em] flex items-center gap-3 font-bold uppercase">
                  <Info className="h-4 w-4 text-primary" /> O player será incorporado automaticamente no topo do seu EPK.
                </p>
              </div>
            </div>

            {/* Social Section */}
            <div className="space-y-10">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white flex items-center gap-3">
                <Share2 className="h-6 w-6 text-primary" /> Canais de Comunicação
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <Label className="text-[11px] font-black uppercase text-zinc-600 tracking-[0.4em]">Instagram User (@)</Label>
                  <Input value={form.instagram} onChange={e => setForm({...form, instagram: e.target.value})} className="bg-black border-white/10 h-14 rounded-2xl font-bold" />
                </div>
                <div className="space-y-3">
                  <Label className="text-[11px] font-black uppercase text-zinc-600 tracking-[0.4em]">Spotify Artist Link</Label>
                  <Input value={form.spotify} onChange={e => setForm({...form, spotify: e.target.value})} className="bg-black border-white/10 h-14 rounded-2xl font-bold" />
                </div>
              </div>
            </div>

            <Button 
              onClick={handleSave}
              disabled={loading}
              className="w-full h-24 bg-primary hover:bg-primary/90 rounded-none text-2xl font-black italic tracking-tighter uppercase shadow-[0_20px_50px_rgba(255,0,0,0.3)] transition-all hover:translate-y-[-4px]"
            >
              {loading ? <Loader2 className="h-8 w-8 animate-spin mr-4" /> : <Save className="h-8 w-8 mr-4" />}
              SALVAR E PUBLICAR MEU PERFIL DMG
            </Button>
          </div>
        </div>

        {/* Preview Mobile Section - Estilo Editorial */}
        <div className="space-y-8">
          <div className="bg-zinc-950 border border-white/5 p-12 space-y-10 rounded-[50px] sticky top-32">
            <h3 className="text-[12px] font-black uppercase tracking-[0.6em] text-primary flex items-center gap-4">
              <Smartphone className="h-5 w-5" /> MOBILE PREVIEW
            </h3>
            <div className="bg-black border-[12px] border-zinc-900 rounded-[4rem] overflow-hidden aspect-[9/19] relative shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-zinc-900">
                <Image src={form.bannerUrl} alt="Preview" fill className="object-cover opacity-40 grayscale" />
              </div>
              <div className="absolute bottom-16 left-8 right-8 z-20 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-primary border-[6px] border-black flex items-center justify-center font-black text-3xl rotate-3 overflow-hidden shadow-2xl">
                   {form.avatarUrl ? <Image src={form.avatarUrl} alt="Av" fill className="object-cover" /> : <span className="italic">{artistName[0]}</span>}
                </div>
                <div className="space-y-1">
                  <h4 className="text-4xl font-black italic uppercase leading-[0.8] tracking-tighter">{user.artistName || user.firstName}</h4>
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">OFFICIAL EPK</p>
                </div>
                <div className="h-[2px] w-12 bg-primary" />
                <div className="space-y-3">
                  <div className="h-2 w-full bg-white/10 rounded-full" />
                  <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                </div>
                <div className="flex gap-3 pt-4">
                  <div className="h-12 flex-1 bg-white/5 border border-white/10" />
                  <div className="h-12 flex-1 bg-primary" />
                </div>
              </div>
            </div>
            <div className="text-center space-y-6">
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.3em] leading-relaxed">
                Este preview emula sua vitrine digital em dispositivos móveis. Utilize seu link oficial em biografias e apresentações comerciais.
              </p>
              <div className="p-5 bg-black border border-white/5 rounded-2xl flex items-center justify-between">
                <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">Public Status</span>
                <span className="text-[10px] font-black text-accent uppercase flex items-center gap-2 italic tracking-widest">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" /> LIVE NOW
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
