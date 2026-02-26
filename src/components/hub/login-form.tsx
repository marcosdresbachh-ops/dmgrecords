"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUsers, saveSession } from "@/lib/hub-auth";
import { Loader2, Lock, Mail, Eye, EyeOff } from "lucide-react";

export function LoginForm({ onLogin, onSwitch }: any) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !pw) return setError("Preencha todos os campos.");
    setLoading(true);
    setTimeout(() => {
      const users = getUsers();
      const u = (users as any)[email];
      if (!u || u.passwordHash !== btoa(pw)) {
        setError("E-mail ou senha inválidos.");
        setLoading(false);
        return;
      }
      const { passwordHash, ...user } = u;
      saveSession(user);
      onLogin(user);
      setLoading(false);
    }, 600);
  }

  return (
    <div className="bg-zinc-950 border border-white/10 p-10 rounded-none animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <Lock className="text-primary h-8 w-8" />
        </div>
        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">HUB DO ARTISTA</h2>
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-2">Área de Membros DMG Records</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">E-mail</Label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
            <Input 
              type="email" 
              className="bg-white/5 border-white/10 pl-12 h-14 rounded-none focus:border-primary" 
              placeholder="seu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Senha</Label>
          <div className="relative">
            <Input 
              type={showPw ? "text" : "password"} 
              className="bg-white/5 border-white/10 h-14 rounded-none focus:border-primary" 
              placeholder="••••••••"
              value={pw}
              onChange={e => setPw(e.target.value)}
            />
            <button 
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-white"
              onClick={() => setShowPw(!showPw)}
            >
              {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full h-16 bg-primary hover:bg-primary/90 rounded-none text-lg font-black italic tracking-tighter uppercase"
        >
          {loading ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : "ENTRAR NO HUB"}
        </Button>
      </form>

      <div className="mt-8 text-center text-xs text-zinc-500">
        Ainda não é membro? <button onClick={onSwitch} className="text-primary font-black uppercase hover:underline">REGISTRE-SE</button>
      </div>
    </div>
  );
}
