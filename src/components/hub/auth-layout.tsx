
"use client";

import { useState } from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import Link from "next/link";
import { ChevronLeft, Lock, AlertTriangle } from "lucide-react";

interface AuthLayoutProps {
  onLogin: (user: any) => void;
}

export function AuthLayout({ onLogin }: AuthLayoutProps) {
  const [view, setView] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-primary selection:text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows (Adjusted for Light Mode) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />

      <div className="mb-12 relative z-10 text-center space-y-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-primary transition-all hover:-translate-x-1"
        >
          <ChevronLeft className="h-4 w-4" /> Voltar para o Site
        </Link>
      </div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white border border-zinc-200 p-10 rounded-[32px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
          
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Lock className="text-primary h-8 w-8" />
            </div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">DMG ARTIST HUB</h2>
            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Área Restrita Dresbach Records</p>
          </div>

          {/* Aviso de Sistema em Construção */}
          <div className="mb-8 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex gap-3 items-start">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-[10px] font-black text-amber-700 uppercase tracking-widest leading-none">Aviso de Desenvolvimento</p>
              <p className="text-[11px] text-amber-600 font-bold leading-relaxed uppercase">
                Você pode se cadastrar e logar normalmente, mas esteja ciente: o sistema está em construção e pode apresentar instabilidades.
              </p>
            </div>
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

        <div className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center justify-center gap-2">
          <div className="w-1 h-1 bg-primary rounded-full" />
          Conexão Segura & Criptografada
          <div className="w-1 h-1 bg-primary rounded-full" />
        </div>
      </div>
    </div>
  );
}
