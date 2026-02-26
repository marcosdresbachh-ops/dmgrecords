"use client";

import { useState } from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface AuthLayoutProps {
  onLogin: (user: any) => void;
}

export function AuthLayout({ onLogin }: AuthLayoutProps) {
  const [view, setView] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary flex flex-col">
      <div className="p-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-4 w-4" /> Voltar para o Site
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4 pb-20">
        <div className="w-full max-w-md">
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
      </div>
    </div>
  );
}
