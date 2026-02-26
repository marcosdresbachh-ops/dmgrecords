
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getUsers, saveUsers, saveSession } from "@/lib/hub-auth";
import { Loader2, UserPlus, Music2, Headphones, ShieldCheck, CreditCard, Globe, Star } from "lucide-react";

export function RegisterForm({ onLogin, onSwitch }: any) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "", lastName: "", artistName: "", email: "",
    password: "", confirm: "", phone: "", country: "", ipi: "", pro: ""
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.password) return setError("Campos obrigatórios faltando.");
    if (form.password !== form.confirm) return setError("As senhas não coincidem.");
    setLoading(true);
    
    setTimeout(() => {
      const users = getUsers();
      if ((users as any)[form.email]) {
        setError("E-mail já registrado.");
        setLoading(false);
        return;
      }
      
      const artistDisplayName = form.artistName || `${form.firstName} ${form.lastName}`;
      const autoSlug = artistDisplayName.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

      const user = {
        ...form,
        role,
        id: "DMG-" + Math.random().toString(36).slice(2,8).toUpperCase(),
        joined: new Date().toLocaleDateString("pt-BR", { year: 'numeric', month: 'long', day: 'numeric' }),
        works: [],
        artistSlug: autoSlug,
        bio: `Bem-vindo ao perfil oficial de ${artistDisplayName}. Artista integrante do catálogo DMG Records.`,
        bannerUrl: "https://picsum.photos/seed/dmg-banner/1920/600",
        avatarUrl: `https://picsum.photos/seed/${autoSlug}/400/400`,
        playlistUrl: "",
        instagram: "",
        spotify: "",
        whatsapp: form.phone || "",
        // Stripe & KYC Initial State
        stripeAccountId: "acct_tmp_" + Math.random().toString(36).slice(2,10),
        kycStatus: "pending",
        walletBalance: 0,
        // ASCAP Partnership Data
        ascapStatus: "processing",
        ascapSubmissionDate: new Date().toISOString(),
        ipi: form.ipi || ""
      };
      
      const { password, confirm, ...userData } = user as any;
      (users as any)[form.email] = { ...userData, passwordHash: btoa(form.password) };
      saveUsers(users);
      saveSession(userData);
      onLogin(userData);
      setLoading(false);
    }, 1200);
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {step === 1 ? (
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-white font-black uppercase text-sm tracking-[0.3em]">Qual seu Papel Principal?</h3>
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">A ASCAP precisa saber como você cria.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setRole("Artista")}
              className={`p-8 border-2 flex flex-col items-center gap-4 transition-all rounded-[24px] ${role === "Artista" ? "border-primary bg-primary/10" : "border-white/5 bg-white/5 hover:border-white/20"}`}
            >
              <Headphones className={role === "Artista" ? "text-primary" : "text-zinc-600"} />
              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-widest block">Cantor(a)</span>
                <span className="text-[8px] text-zinc-500 uppercase font-black">Intérprete</span>
              </div>
            </button>
            <button 
              onClick={() => setRole("Compositor")}
              className={`p-8 border-2 flex flex-col items-center gap-4 transition-all rounded-[24px] ${role === "Compositor" ? "border-primary bg-primary/10" : "border-white/5 bg-white/5 hover:border-white/20"}`}
            >
              <Music2 className={role === "Compositor" ? "text-primary" : "text-zinc-600"} />
              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-widest block">Compositor</span>
                <span className="text-[8px] text-zinc-500 uppercase font-black">Autor</span>
              </div>
            </button>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl flex items-start gap-3">
             <Star className="h-4 w-4 text-primary shrink-0" />
             <p className="text-[10px] text-zinc-400 leading-tight font-medium">
                Como parceira oficial, a DMG Records facilita sua entrada na <strong>ASCAP</strong>. Escolha sua função para gerar a documentação automática.
             </p>
          </div>

          <Button 
            disabled={!role}
            onClick={() => setStep(2)}
            className="w-full h-16 bg-primary hover:bg-primary/90 rounded-2xl text-lg font-black italic tracking-tighter uppercase"
          >
            CONTINUAR PARA DADOS
          </Button>
          <div className="text-center text-xs text-zinc-500 font-medium">Já tem uma conta? <button onClick={onSwitch} className="text-primary font-black uppercase hover:underline">ENTRAR</button></div>
        </div>
      ) : (
        <form onSubmit={handleRegister} className="space-y-5">
          <div className="text-center space-y-1">
            <h3 className="text-white font-black uppercase text-sm tracking-widest">Dados do Criador</h3>
            <p className="text-primary text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
              <Globe className="h-3 w-3" /> Auto-Filiação ASCAP em tempo real
            </p>
          </div>
          
          {error && <div className="p-4 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase text-center rounded-xl">{error}</div>}
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Nome *</Label>
              <Input className="bg-white/5 border-white/10 rounded-xl h-12 text-sm" required value={form.firstName} onChange={e => set("firstName", e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Sobrenome *</Label>
              <Input className="bg-white/5 border-white/10 rounded-xl h-12 text-sm" required value={form.lastName} onChange={e => set("lastName", e.target.value)} />
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Nome Artístico / Pseudônimo</Label>
            <Input className="bg-white/5 border-white/10 rounded-xl h-12 text-sm" value={form.artistName} onChange={e => set("artistName", e.target.value)} />
          </div>

          <div className="space-y-1">
            <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">E-mail Profissional *</Label>
            <Input type="email" className="bg-white/5 border-white/10 rounded-xl h-12 text-sm" required value={form.email} onChange={e => set("email", e.target.value)} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">IPI / CAE (Opcional)</Label>
              <Input className="bg-white/5 border-white/10 rounded-xl h-12 text-sm font-mono" placeholder="Ex: 001234567" value={form.ipi} onChange={e => set("ipi", e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">País de Residência *</Label>
              <Select value={form.country} onValueChange={v => set("country", v)}>
                <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-12 text-sm">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-white/10 text-white">
                  {["Brasil", "EUA", "Portugal", "Reino Unido", "Outro"].map(p => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Senha *</Label>
              <Input type="password" className="bg-white/5 border-white/10 rounded-xl h-12 text-sm" required value={form.password} onChange={e => set("password", e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Confirmar *</Label>
              <Input type="password" className="bg-white/5 border-white/10 rounded-xl h-12 text-sm" required value={form.confirm} onChange={e => set("confirm", e.target.value)} />
            </div>
          </div>

          <div className="p-4 bg-zinc-900 border border-white/5 rounded-2xl space-y-2">
            <p className="text-[9px] text-zinc-500 leading-relaxed font-medium">
              Ao clicar em finalizar, você autoriza a DMG Records a compartilhar seus dados com a <strong>ASCAP</strong> para fins de filiação e coleta internacional. Se você já possui um IPI, ele será sincronizado. Se não, um novo será solicitado.
            </p>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full h-16 bg-primary hover:bg-primary/90 rounded-2xl text-lg font-black italic tracking-tighter uppercase shadow-lg shadow-primary/20"
          >
            {loading ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : "FINALIZAR CADASTRO DMG HUB →"}
          </Button>
          
          <button type="button" onClick={() => setStep(1)} className="w-full text-[10px] text-zinc-600 hover:text-white uppercase font-black text-center">← Voltar</button>
        </form>
      )}
    </div>
  );
}
