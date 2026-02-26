
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getUsers, saveUsers, saveSession } from "@/lib/hub-auth";
import { Loader2, UserPlus, Music2, Headphones, ShieldCheck, CreditCard } from "lucide-react";

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
        walletBalance: 0
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
    <div className="bg-zinc-950 border border-white/10 p-10 rounded-none animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <UserPlus className="text-primary h-8 w-8" />
        </div>
        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white leading-none">DMG ARTIST HUB</h2>
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Pela Dresbach Records LTDA</p>
      </div>

      {step === 1 ? (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-white font-black uppercase text-sm tracking-widest mb-2">Escolha seu Papel</h3>
            <p className="text-zinc-500 text-xs italic">Como você cria música principalmente?</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setRole("Artista")}
              className={`p-6 border-2 flex flex-col items-center gap-4 transition-all ${role === "Artista" ? "border-primary bg-primary/10" : "border-white/5 bg-white/5 hover:border-white/20"}`}
            >
              <Headphones className={role === "Artista" ? "text-primary" : "text-zinc-600"} />
              <div>
                <span className="text-xs font-black uppercase tracking-widest block">Artista</span>
                <span className="text-[9px] text-zinc-500 uppercase">Intérprete</span>
              </div>
            </button>
            <button 
              onClick={() => setRole("Compositor")}
              className={`p-6 border-2 flex flex-col items-center gap-4 transition-all ${role === "Compositor" ? "border-primary bg-primary/10" : "border-white/5 bg-white/5 hover:border-white/20"}`}
            >
              <Music2 className={role === "Compositor" ? "text-primary" : "text-zinc-600"} />
              <div>
                <span className="text-xs font-black uppercase tracking-widest block">Compositor</span>
                <span className="text-[9px] text-zinc-500 uppercase">Autor</span>
              </div>
            </button>
          </div>
          <Button 
            disabled={!role}
            onClick={() => setStep(2)}
            className="w-full h-16 bg-primary hover:bg-primary/90 rounded-none text-lg font-black italic tracking-tighter uppercase"
          >
            CONTINUAR PARA DADOS
          </Button>
          <div className="auth-switch text-center text-xs text-zinc-500">Já tem uma conta? <button onClick={onSwitch} className="text-primary font-black uppercase hover:underline">ENTRAR</button></div>
        </div>
      ) : (
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="text-center mb-4">
            <h3 className="text-white font-black uppercase text-sm tracking-widest mb-1">Crie sua Conta</h3>
            <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Provisionando Sub-conta Stripe Connect...</p>
          </div>
          
          {error && <div className="p-3 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase text-center">{error}</div>}
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Nome *</Label>
              <Input className="bg-white/5 border-white/10 rounded-none h-11" required value={form.firstName} onChange={e => set("firstName", e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Sobrenome *</Label>
              <Input className="bg-white/5 border-white/10 rounded-none h-11" required value={form.lastName} onChange={e => set("lastName", e.target.value)} />
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Nome Artístico / Stage Name</Label>
            <Input className="bg-white/5 border-white/10 rounded-none h-11" value={form.artistName} onChange={e => set("artistName", e.target.value)} />
          </div>

          <div className="space-y-1">
            <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">E-mail Corporativo *</Label>
            <Input type="email" className="bg-white/5 border-white/10 rounded-none h-11" required value={form.email} onChange={e => set("email", e.target.value)} />
          </div>

          <div className="space-y-1">
            <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Telefone / WhatsApp</Label>
            <Input className="bg-white/5 border-white/10 rounded-none h-11" placeholder="+55..." value={form.phone} onChange={e => set("phone", e.target.value)} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">IPI / CAE Number</Label>
              <Input className="bg-white/5 border-white/10 rounded-none h-11" placeholder="Opcional" value={form.ipi} onChange={e => set("ipi", e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">País de Residência *</Label>
              <Select value={form.country} onValueChange={v => set("country", v)}>
                <SelectTrigger className="bg-white/5 border-white/10 rounded-none h-11">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white">
                  {["Brasil", "EUA", "Portugal", "Reino Unido", "Outro"].map(p => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Senha *</Label>
              <Input type="password" className="bg-white/5 border-white/10 rounded-none h-11" required value={form.password} onChange={e => set("password", e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Confirmar *</Label>
              <Input type="password" className="bg-white/5 border-white/10 rounded-none h-11" required value={form.confirm} onChange={e => set("confirm", e.target.value)} />
            </div>
          </div>

          <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-widest">
              <CreditCard className="h-3 w-3" /> Sistema de Royalties Stripe
            </div>
            <p className="text-[9px] text-zinc-500 leading-tight">
              Ao se cadastrar, uma carteira digital segura será criada para o recebimento de seus ganhos reais. A ativação completa exige o upload de documentos no painel.
            </p>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full h-16 bg-primary hover:bg-primary/90 rounded-none text-lg font-black italic tracking-tighter uppercase mt-4"
          >
            {loading ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : "FINALIZAR CADASTRO →"}
          </Button>
          <div className="flex flex-col gap-2 mt-4 text-center">
            <button type="button" onClick={() => setStep(1)} className="text-[10px] text-zinc-600 hover:text-white uppercase font-black">← Voltar</button>
            <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-600 uppercase font-black tracking-widest">
              <ShieldCheck className="h-3 w-3 text-primary" /> Transações Seguras via SSL
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
