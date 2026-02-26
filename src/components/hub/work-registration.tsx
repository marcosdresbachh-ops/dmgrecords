"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getUsers, saveUsers, saveSession } from "@/lib/hub-auth";
import { Loader2, PlusCircle, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function WorkRegistration({ user, onUpdate }: any) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "", genre: "", duration: "", isrc: "", year: new Date().getFullYear().toString()
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.genre) return;
    setLoading(true);

    setTimeout(() => {
      const users = getUsers();
      const stored = (users as any)[user.email];
      
      const newWork = {
        ...form,
        regId: "REG-" + Math.random().toString(36).slice(2,8).toUpperCase(),
        date: new Date().toLocaleDateString("pt-BR"),
        status: "Ativo"
      };

      stored.works = [...(stored.works || []), newWork];
      saveUsers(users);
      
      const updatedUser = { ...user, works: stored.works };
      saveSession(updatedUser);
      onUpdate(updatedUser);
      
      setLoading(false);
      setForm({ title: "", genre: "", duration: "", isrc: "", year: new Date().getFullYear().toString() });
      toast({ title: "Obra Registrada!", description: `ID: ${newWork.regId}` });
    }, 700);
  }

  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">Registrar Obra</h1>
        <p className="text-zinc-500 text-lg font-medium">Cadastre suas composições e fonogramas no catálogo DMG.</p>
      </header>

      <div className="max-w-3xl">
        <form onSubmit={handleSubmit} className="bg-black/40 border border-white/5 p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2 space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Título da Obra *</Label>
              <Input 
                className="bg-white/5 border-white/10 rounded-none h-14 focus:border-primary" 
                placeholder="Ex: Noites de Neon" 
                required
                value={form.title}
                onChange={e => set("title", e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Gênero Principal *</Label>
              <Select value={form.genre} onValueChange={v => set("genre", v)}>
                <SelectTrigger className="bg-white/5 border-white/10 rounded-none h-14">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white">
                  {["Pop", "Trap", "R&B", "Hip-Hop", "Funk", "Lo-Fi", "Outro"].map(g => (
                    <SelectItem key={g} value={g}>{g}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Ano de Criação</Label>
              <Input 
                className="bg-white/5 border-white/10 rounded-none h-14 focus:border-primary" 
                value={form.year}
                onChange={e => set("year", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Duração (00:00)</Label>
              <Input 
                className="bg-white/5 border-white/10 rounded-none h-14 focus:border-primary" 
                placeholder="3:45"
                value={form.duration}
                onChange={e => set("duration", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">ISRC (Opcional)</Label>
              <Input 
                className="bg-white/5 border-white/10 rounded-none h-14 focus:border-primary" 
                placeholder="BR-XXX-24-00001"
                value={form.isrc}
                onChange={e => set("isrc", e.target.value)}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full h-16 bg-primary hover:bg-primary/90 rounded-none text-lg font-black italic tracking-tighter uppercase"
          >
            {loading ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : <PlusCircle className="h-6 w-6 mr-3" />}
            REGISTRAR AGORA
          </Button>
        </form>
      </div>
    </div>
  );
}
