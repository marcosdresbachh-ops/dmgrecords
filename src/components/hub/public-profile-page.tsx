
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Globe, ExternalLink, Camera, Image as ImageIcon, 
  Music, Share2, Save, Loader2, PlayCircle, Info
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function PublicProfilePage({ user, onUpdate }: any) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    slug: user.artistSlug || (user.artistName || user.firstName).toLowerCase().replace(/\s+/g, '-'),
    playlistUrl: user.playlistUrl || "",
    bannerUrl: user.bannerUrl || "https://picsum.photos/seed/dmg-banner/1920/600",
    avatarUrl: user.avatarUrl || "",
    instagram: user.instagram || "",
    spotify: user.spotify || "",
    whatsapp: user.phone || ""
  });

  const slug = form.slug;
  const publicUrl = `dmgrecords.com.br/${slug}`;

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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none">Minha Página Pública</h1>
          <p className="text-zinc-500 text-sm font-medium mt-2">Este é o seu EPK Online oficial. Configure sua vitrine para o mercado musical.</p>
        </div>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-black uppercase italic tracking-tighter h-12 rounded-none px-8">
          <a href={`/${slug}`} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> VER MINHA PÁGINA
          </a>
        </Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-950 border border-white/5 p-10 space-y-10">
            
            {/* URL Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" /> Endereço Oficial (URL)
              </h3>
              <div className="bg-black/40 border border-white/10 p-5 flex items-center gap-2">
                <span className="text-zinc-600 font-bold text-sm">dmgrecords.com.br/</span>
                <input 
                  value={form.slug}
                  onChange={e => setForm({...form, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                  className="bg-transparent border-none p-0 text-primary font-black uppercase italic text-sm focus:ring-0 w-full"
                  placeholder="seu-nome-artistico"
                />
              </div>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Este link é único e serve como seu cartão de visitas para gravadoras e festivais.</p>
            </div>

            {/* Media Section */}
            <div className="space-y-8">
              <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-primary" /> Identidade Visual
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Foto de Perfil (Quadrada)</Label>
                  <div className="bg-white/5 border border-white/10 h-40 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary/40 transition-all group relative overflow-hidden">
                    {form.avatarUrl ? (
                      <Image src={form.avatarUrl} alt="Avatar" fill className="object-cover opacity-40 group-hover:scale-110 transition-all" />
                    ) : (
                      <Camera className="h-8 w-8 text-zinc-600" />
                    )}
                    <span className="text-[9px] font-black uppercase text-white relative z-10 bg-black/60 px-3 py-1">Alterar Foto</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Banner de Topo (Horizontal)</Label>
                  <div className="bg-white/5 border border-white/10 h-40 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary/40 transition-all group relative overflow-hidden">
                    <Image src={form.bannerUrl} alt="Banner" fill className="object-cover opacity-40 group-hover:scale-110 transition-all" />
                    <span className="text-[9px] font-black uppercase text-white relative z-10 bg-black/60 px-3 py-1">Alterar Banner</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase text-zinc-500 flex items-center gap-2 tracking-widest">
                  <Music className="h-3 w-3 text-primary" /> Playlist Oficial (Spotify / SoundCloud)
                </Label>
                <Input 
                  value={form.playlistUrl}
                  onChange={e => setForm({...form, playlistUrl: e.target.value})}
                  placeholder="https://open.spotify.com/playlist/..." 
                  className="bg-black/40 border-white/10 h-14 rounded-none focus:border-primary font-medium" 
                />
                <p className="text-[10px] text-zinc-600 italic tracking-wider flex items-center gap-2">
                  <Info className="h-3 w-3" /> O player será incorporado automaticamente na sua página pública.
                </p>
              </div>
            </div>

            {/* Social Section */}
            <div className="space-y-8">
              <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                <Share2 className="h-5 w-5 text-primary" /> Canais de Comunicação
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Instagram User (@)</Label>
                  <Input value={form.instagram} onChange={e => setForm({...form, instagram: e.target.value})} className="bg-black/40 border-white/10 h-12 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Spotify Artist Link</Label>
                  <Input value={form.spotify} onChange={e => setForm({...form, spotify: e.target.value})} className="bg-black/40 border-white/10 h-12 rounded-none" />
                </div>
              </div>
            </div>

            <Button 
              onClick={handleSave}
              disabled={loading}
              className="w-full h-20 bg-primary hover:bg-primary/90 rounded-none text-xl font-black italic tracking-tighter uppercase shadow-2xl shadow-primary/20"
            >
              {loading ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : <Save className="h-6 w-6 mr-3" />}
              SALVAR E PUBLICAR EPK OFICIAL
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-primary/5 border border-primary/20 p-10 space-y-8">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
              <PlayCircle className="h-5 w-5" /> Mobile Preview
            </h3>
            <div className="bg-black border-[8px] border-zinc-900 rounded-[3rem] overflow-hidden aspect-[9/18] relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-zinc-900">
                <Image src={form.bannerUrl} alt="Preview" fill className="object-cover opacity-30" />
              </div>
              <div className="absolute bottom-12 left-6 right-6 z-20 space-y-4">
                <div className="w-16 h-16 rounded-xl bg-primary border-4 border-black flex items-center justify-center font-black text-2xl rotate-3 overflow-hidden shadow-lg">
                   {form.avatarUrl ? <Image src={form.avatarUrl} alt="Av" fill className="object-cover" /> : user.firstName[0]}
                </div>
                <h4 className="text-3xl font-black italic uppercase leading-[0.9]">{user.artistName || user.firstName}</h4>
                <div className="h-1 w-10 bg-primary" />
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-white/10 rounded-full" />
                  <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="h-8 flex-1 bg-white/5 border border-white/10" />
                  <div className="h-8 flex-1 bg-primary" />
                </div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] leading-relaxed">
                Este preview mostra como seu perfil aparecerá em dispositivos móveis. Use o link oficial em sua bio do Instagram.
              </p>
              <div className="p-4 bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-black text-zinc-600 uppercase">Status do Perfil</span>
                <span className="text-[9px] font-black text-accent uppercase flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" /> ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
