
"use client";

import { useState } from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import Link from "next/link";
import { ChevronLeft, Lock } from "lucide-react";

interface AuthLayoutProps {
  onLogin: (user: any) => void;
}

export function AuthLayout({ onLogin }: AuthLayoutProps) {
  const [view, setView] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />

      <div className="mb-12 relative z-10 text-center space-y-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-primary transition-all hover:-translate-x-1"
        >
          <ChevronLeft className="h-4 w-4" /> Voltar para o Site
        </Link>
      </div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-zinc-950 border border-white/10 p-10 rounded-[32px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Lock className="text-primary h-8 w-8" />
            </div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white leading-none">DMG ARTIST HUB</h2>
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Área Restrita Dresbach Records</p>
          </div>

          {view === "login" ? (
            <LoginForm 
              onLogin={onLogin} 
              onSwitch={() => setView("register")} 
            />
          ) : (
            <RegisterForm 
              onLogin={onLogin} 
              onSwitch={() => setView("login")} 
            />
          )}
        </div>

        <div className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-zinc-600 flex items-center justify-center gap-2">
          <div className="w-1 h-1 bg-primary rounded-full" />
          Conexão Segura & Criptografada
          <div className="w-1 h-1 bg-primary rounded-full" />
        </div>
      </div>
    </div>
  );
}
