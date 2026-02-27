"use client";

import { useState, useEffect } from "react";
import { 
  Music, DollarSign, FileCheck, ArrowUpRight, 
  TrendingUp, Zap, Cloud, Star, ShieldCheck, 
  StickyNote, Loader2, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getNotes, addNote } from "@/app/actions/notes";
import { toast } from "@/hooks/use-toast";

export function DashboardHome({ user }: any) {
  const works = user.works || [];
  const [notes, setNotes] = useState<any[]>([]);
  const [loadingNotes, setLoadingNotes] = useState(true);
  const [newNote, setNewNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  async function loadNotes() {
    setLoadingNotes(true);
    try {
      const data = await getNotes();
      setNotes(data || []);
    } catch (e) {
      console.error("Erro ao carregar notas");
    } finally {
      setLoadingNotes(false);
    }
  }

  useEffect(() => {
    loadNotes();
  }, []);

  async function handleAddNote(e: React.FormEvent) {
    e.preventDefault();
    if (!newNote.trim()) return;

    setIsSubmitting(true);
    const result = await addNote(newNote);
    
    if (result) {
      toast({ title: "Sucesso!", description: "Nota salva no banco de dados real." });
      setNewNote("");
      loadNotes(); // Recarrega a lista
    } else {
      toast({ title: "Erro", description: "Não foi possível conectar ao backend.", variant: "destructive" });
    }
    setIsSubmitting(false);
  }

  const stats = [
    { label: "Obras Registradas", value: works.length, sub: "No catálogo ativo", trend: "↑ Ativo", icon: <Music className="text-primary" /> },
    { label: "Ganhos Estimados", value: "R$ 1.312,20", sub: "Royalties vitalícios", trend: "↑ +18.4% Q1", icon: <DollarSign className="text-primary" /> },
    { label: "Licenças Ativas", value: "3", sub: "Territórios globais", trend: "1 Pendente", icon: <FileCheck className="text-primary" /> },
    { label: "Plays SoundCloud", value: "9.2K", sub: "Engajamento Orgânico", trend: "↑ +12.4%", icon: <Cloud className="text-[#ff5500]" /> },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 text-zinc-900">
      <header className="flex justify-between items-start">
        <div className="space-y-3">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter leading-none">Bem-vindo, {user.artistName || user.firstName} ♪</h1>
          <p className="text-zinc-500 text-lg font-medium">Sua central de controle de carreira — SoundCloud & DMG Network Integradas.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
             <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">SoundCloud Status</span>
             <span className="text-xs font-black text-accent uppercase italic">Linked & Verified</span>
          </div>
          <div className="w-14 h-14 bg-[#ff5500] rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-[#ff5500]/30 rotate-3 hover:rotate-0 transition-transform cursor-pointer">
             <Cloud className="h-8 w-8" />
          </div>
        </div>
      </header>

      {/* Grid de Estatísticas Industrial */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="border p-8 rounded-[32px] relative overflow-hidden group transition-all duration-300 bg-white border-zinc-200 hover:border-primary/40 shadow-sm hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent opacity-40" />
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 border rounded-2xl group-hover:scale-110 transition-transform bg-zinc-50 border-zinc-100 shadow-inner">
                {s.icon}
              </div>
              <span className="text-[11px] font-black uppercase text-accent tracking-[0.2em] bg-accent/10 px-3 py-1 rounded-full">{s.trend}</span>
            </div>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-2">{s.label}</p>
            <p className="text-4xl font-black italic uppercase tracking-tighter text-zinc-900">{s.value}</p>
            <p className="text-[10px] text-zinc-400 mt-4 font-black uppercase tracking-widest">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          {/* Notas da Gravadora (CONEXÃO REAL SUPABASE) */}
          <div className="border rounded-[40px] p-10 bg-white border-zinc-200 shadow-lg space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-3 text-zinc-900">
                  <StickyNote className="h-6 w-6 text-primary" /> Notas de Produção (Live DB)
                </h3>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Dados sincronizados via DMG API Engine & Supabase</p>
              </div>
              <Button onClick={loadNotes} variant="ghost" size="icon" className="text-zinc-400 hover:text-primary">
                <Zap className="h-4 w-4" />
              </Button>
            </div>

            {/* Input Real para salvar no banco */}
            <form onSubmit={handleAddNote} className="flex gap-3">
              <Input 
                placeholder="Nova nota de produção..." 
                className="rounded-full bg-zinc-50 border-zinc-200 h-12 text-sm px-6 font-bold uppercase tracking-widest focus:border-primary transition-all"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                disabled={isSubmitting || !newNote.trim()}
                className="rounded-full bg-primary h-12 w-12 p-0 flex items-center justify-center shrink-0"
              >
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 text-white" />}
              </Button>
            </form>
            
            {loadingNotes ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-zinc-300" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {notes.map((note) => (
                  <div key={note.id} className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl space-y-2 hover:border-primary/20 transition-all shadow-inner group">
                    <div className="flex justify-between items-start">
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Nota #{note.id}</p>
                      <span className="text-[8px] font-bold text-zinc-300 uppercase">Real-time</span>
                    </div>
                    <p className="text-sm font-bold text-zinc-700 leading-relaxed uppercase">{note.title}</p>
                  </div>
                ))}
                {notes.length === 0 && (
                  <p className="col-span-full text-center py-8 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">Nenhuma nota oficial no momento.</p>
                )}
              </div>
            )}
          </div>

          {/* Sincronização SoundCloud */}
          <div className="border rounded-[40px] p-10 transition-all bg-white border-zinc-200 shadow-lg">
            <div className="flex items-center justify-between mb-10">
              <div className="space-y-1">
                <h3 className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-3 text-zinc-900">
                  <Music className="h-6 w-6 text-primary" /> SoundCloud Track Sync
                </h3>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Sincronização automática com a API SoundCloud for Artists</p>
              </div>
              <Button variant="ghost" className="h-10 text-[11px] font-black uppercase tracking-[0.2em] text-primary hover:text-primary hover:bg-primary/5 border border-primary/20 rounded-full px-6">
                Sync Now <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="py-20 text-center border-2 border-dashed rounded-[32px] space-y-6 border-zinc-100 bg-zinc-50">
              <Zap className="h-12 w-12 text-zinc-300 mx-auto" />
              <p className="text-zinc-500 text-sm font-black uppercase tracking-widest">Conecte sua conta para visualizar plays em tempo real.</p>
              <Button className="bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full px-10 h-12 shadow-lg shadow-primary/20">Conectar SoundCloud Account →</Button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* SoundCloud Profile Card */}
          <div className="border rounded-[32px] p-8 space-y-8 relative overflow-hidden transition-all bg-white border-zinc-200 shadow-lg">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Cloud className="h-20 w-20 text-[#ff5500]" />
            </div>
            <h3 className="text-lg font-black italic uppercase tracking-tighter flex items-center gap-3 text-zinc-900">
              <Cloud className="h-5 w-5 text-[#ff5500]" /> SoundCloud Profile
            </h3>
            <div className="space-y-5">
              {[
                ["Handle", "@" + (user.artistSlug || "artist")],
                ["Plan", "Next Pro (DMG Partner)"],
                ["Followers", "2,841"],
                ["Track Count", works.length || "0"],
                ["Monetization", "Enabled"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-3 border-b last:border-0 border-zinc-100">
                  <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400">{k}</span>
                  <span className="text-xs font-bold italic text-zinc-900">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vantagens Industrial */}
          <div className="border border-primary/20 rounded-[32px] p-8 space-y-6 transition-all shadow-xl bg-white shadow-primary/5">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
              <Star className="h-5 w-5" /> Vantagens DMG Next Pro
            </h3>
            <div className="p-6 border rounded-2xl space-y-3 hover:border-accent/40 transition-all group bg-zinc-50 border-zinc-100 shadow-inner">
              <p className="text-[11px] font-black uppercase text-accent tracking-widest flex items-center gap-2">
                <Zap className="h-3.5 w-3.5" /> ⚡ UPLOAD ILIMITADO
              </p>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                Como parceiro DMG, você tem upload infinito e ferramentas avançadas de substituição de áudio sem perda de plays.
              </p>
            </div>
            <div className="p-6 border rounded-2xl space-y-3 hover:border-[#ff5500]/40 transition-all group bg-zinc-50 border-zinc-100 shadow-inner">
              <p className="text-[11px] font-black uppercase text-[#ff5500] tracking-widest flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5" /> 🛡️ CONTENT ID CLOUD
              </p>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                Proteção automática contra re-uploads não autorizados dentro da rede global SoundCloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
