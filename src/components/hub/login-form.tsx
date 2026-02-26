
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUsers, saveSession } from "@/lib/hub-auth";
import { Loader2, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";

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
    setError("");
    
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {error && (
        <div className="mb-6 p-4 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest text-center rounded-2xl">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">E-mail de Acesso</Label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-300" />
            <Input 
              type="email" 
              className="bg-zinc-50 border-zinc-200 pl-12 h-14 rounded-2xl focus:border-primary text-sm font-medium transition-all text-zinc-900 placeholder:text-zinc-300 shadow-inner" 
              placeholder="seu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Sua Senha</Label>
            <button type="button" className="text-[9px] font-black uppercase text-primary hover:underline">Esqueceu?</button>
          </div>
          <div className="relative">
            <Input 
              type={showPw ? "text" : "password"} 
              className="bg-zinc-50 border-zinc-200 h-14 rounded-2xl focus:border-primary text-sm font-medium transition-all text-zinc-900 placeholder:text-zinc-300 shadow-inner" 
              placeholder="••••••••"
              value={pw}
              onChange={e => setPw(e.target.value)}
            />
            <button 
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-zinc-900"
              onClick={() => setShowPw(!showPw)}
            >
              {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full h-16 bg-primary hover:bg-primary/90 rounded-full text-lg font-black italic tracking-tighter uppercase group shadow-lg shadow-primary/20 text-white"
        >
          {loading ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : <>ACESSAR PAINEL <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></>}
        </Button>
      </form>

      <div className="mt-10 text-center text-xs text-zinc-400 font-medium uppercase tracking-tight">
        Ainda não faz parte? <button onClick={onSwitch} className="text-primary font-black uppercase hover:underline">REGISTRE-SE AGORA</button>
      </div>
    </div>
  );
}
