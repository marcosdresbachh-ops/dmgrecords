
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Globe, ExternalLink, Camera, Image as ImageIcon, 
  Music, Share2, Save, Loader2, PlayCircle 
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function PublicProfilePage({ user, onUpdate }: any) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    slug: user.artistSlug || (user.artistName || user.firstName).toLowerCase().replace(/\s+/g, '-'),
    playlistUrl: user.playlistUrl || "",
    bannerUrl: user.bannerUrl || "",
    avatarUrl: user.avatarUrl || "",
    instagram: user.instagram || "",
    spotify: user.spotify || "",
    whatsapp: user.phone || ""
  });

  const slug = form.slug;
  const publicUrl = `dmgrecords.com.br/${slug}`;

  async function handleSave() {
    setLoading(true);
    // Simulação de atualização no localStorage
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
          <p className="text-zinc-500 text-sm font-medium mt-2">Configure como o mundo vê você na plataforma DMG Records.</p>
        </div>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-black uppercase italic tracking-tighter h-12">
          <a href={`/${slug}`} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> VER MINHA PÁGINA
          </a>
        </Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" /> Endereço Oficial
              </h3>
              <div className="bg-black/40 border border-white/10 p-4 flex items-center gap-2 rounded-xl">
                <span className="text-zinc-600 font-bold text-sm">dmgrecords.com.br/</span>
                <input 
                  value={form.slug}
                  onChange={e => setForm({...form, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                  className="bg-transparent border-none p-0 text-primary font-black uppercase italic text-sm focus:ring-0 w-full"
                  placeholder="seu-nome-artistico"
                />
              </div>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Este será o link para seu EPK online e contatos oficiais.</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-primary" /> Visual e Mídia
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-zinc-500">Foto de Perfil (Avatar)</Label>
                  <div className="bg-white/5 border border-white/10 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/40 transition-all">
                    <Camera className="h-6 w-6 text-zinc-600" />
                    <span className="text-[9px] font-black uppercase text-zinc-600">Alterar Foto</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-zinc-500">Banner de Fundo</Label>
                  <div className="bg-white/5 border border-white/10 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/40 transition-all">
                    <ImageIcon className="h-6 w-6 text-zinc-600" />
                    <span className="text-[9px] font-black uppercase text-zinc-600">Alterar Banner</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-zinc-500 flex items-center gap-2">
                  <Music className="h-3 w-3 text-primary" /> Playlist Integrada (Spotify / SoundCloud)
                </Label>
                <Input 
                  value={form.playlistUrl}
                  onChange={e => setForm({...form, playlistUrl: e.target.value})}
                  placeholder="https://open.spotify.com/playlist/..." 
                  className="bg-black/40 border-white/10 h-14 rounded-xl focus:border-primary" 
                />
                <p className="text-[10px] text-zinc-600 italic">O sistema gerará o player executável automaticamente na sua página pública.</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                <Share2 className="h-5 w-5 text-primary" /> Redes e Contato
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-zinc-500">Instagram (@)</Label>
                  <Input value={form.instagram} onChange={e => setForm({...form, instagram: e.target.value})} className="bg-black/40 border-white/10 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-zinc-500">Link Spotify Artist</Label>
                  <Input value={form.spotify} onChange={e => setForm({...form, spotify: e.target.value})} className="bg-black/40 border-white/10 h-12 rounded-xl" />
                </div>
              </div>
            </div>

            <Button 
              onClick={handleSave}
              disabled={loading}
              className="w-full h-16 bg-primary hover:bg-primary/90 rounded-2xl text-lg font-black italic tracking-tighter uppercase shadow-lg shadow-primary/20"
            >
              {loading ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : <Save className="h-6 w-6 mr-3" />}
              SALVAR E PUBLICAR PÁGINA
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <PlayCircle className="h-4 w-4" /> Preview Rápido
            </h3>
            <div className="bg-black border border-white/10 rounded-2xl overflow-hidden aspect-[9/16] relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-xs font-black">♪</div>
                <span className="text-[10px] font-black uppercase italic tracking-tighter">DMG STREAM</span>
              </div>
              <div className="absolute bottom-8 left-6 right-6 z-20 space-y-4">
                <h4 className="text-2xl font-black italic uppercase leading-none">{user.artistName || user.firstName}</h4>
                <div className="h-1 w-12 bg-primary" />
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/10 rounded-full" />
                  <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                </div>
                <div className="pt-4 grid grid-cols-3 gap-3">
                  <div className="aspect-square bg-white/5 border border-white/10 rounded-lg" />
                  <div className="aspect-square bg-white/5 border border-white/10 rounded-lg" />
                  <div className="aspect-square bg-white/5 border border-white/10 rounded-lg" />
                </div>
              </div>
            </div>
            <p className="text-[10px] text-zinc-500 text-center font-bold uppercase tracking-widest leading-relaxed">
              Sua página pública é otimizada para mobile e redes sociais. Use-a como seu link na bio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
