
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import "./admin.css";

// Importando os novos componentes modulares
import { AdminHeader } from "./components/layout/AdminHeader";
import { AdminSidebar } from "./components/layout/AdminSidebar";
import { DashboardPage } from "./components/pages/DashboardPage";

export default function PainelDmgPage() {
  const [hydrated, setHydrated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ user: "", pass: "" });
  const [activePage, setActivePage] = useState('dashboard');
  const [error, setError] = useState("");

  useEffect(() => {
    setHydrated(true);
    const auth = localStorage.getItem('dr_admin_auth');
    if (auth === 'true') setIsLoggedIn(true);
  }, []);

  if (!hydrated) return null;

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (loginForm.user.toLowerCase() === "marcos dresbach" && loginForm.pass === "Ma596220@") {
      setIsLoggedIn(true);
      localStorage.setItem('dr_admin_auth', 'true');
      setError("");
    } else {
      setError("Credenciais executivas inválidas.");
      setTimeout(() => setError(""), 3000);
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('dr_admin_auth');
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#1a1814] flex items-center justify-center p-6 admin-body">
        <Head><title>Login — Central de Comando DMG</title></Head>
        <div className="bg-white w-full max-w-md rounded-[40px] p-12 shadow-2xl border-t-8 border-admin-gold animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-10">
            <Image src="/logodmg.png" alt="DMG Logo" width={180} height={60} className="mx-auto mb-8 object-contain" priority />
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-admin-text font-headline">Central de Comando</h1>
            <p className="text-[10px] font-black text-admin-gold uppercase tracking-[0.3em] mt-2">Acesso Restrito Executivo</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-admin-muted">Identificação</label>
              <input 
                value={loginForm.user} 
                onChange={e => setLoginForm({...loginForm, user: e.target.value})} 
                placeholder="nome de usuário" 
                className="w-full bg-admin-bg border-2 border-transparent focus:border-admin-gold rounded-full h-14 px-6 font-bold outline-none transition-all"
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-admin-muted">Chave de Segurança</label>
              <input 
                type="password" 
                value={loginForm.pass} 
                onChange={e => setLoginForm({...loginForm, pass: e.target.value})} 
                placeholder="••••••••" 
                className="w-full bg-admin-bg border-2 border-transparent focus:border-admin-gold rounded-full h-14 px-6 font-bold outline-none transition-all"
                required 
              />
            </div>
            {error && <div className="bg-admin-red/10 text-admin-red text-[10px] font-black uppercase p-4 rounded-2xl text-center border border-admin-red/20">{error}</div>}
            <button type="submit" className="w-full bg-admin-gold hover:bg-admin-gold2 text-white font-black h-16 rounded-full shadow-xl shadow-admin-gold/20 transition-all text-sm uppercase tracking-widest italic">
              ACESSAR MOTOR INDUSTRIAL
            </button>
          </form>
          <div className="mt-12 text-center text-[9px] font-bold text-admin-muted uppercase tracking-widest opacity-40">
            DRESBACH GROUP © 2025 — ENCRYPTED SESSION
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-body min-h-screen">
      <Head><title>Dresbach Records — Painel Administrativo</title></Head>
      
      <AdminHeader onLogout={handleLogout} />
      <AdminSidebar activePage={activePage} onPageChange={setActivePage} />

      <main className="admin-main">
        <div className="p-10">
          {activePage === 'dashboard' ? (
            <DashboardPage />
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-admin-gold/10 rounded-full flex items-center justify-center text-admin-gold mb-6">
                <Settings className="h-12 w-12 animate-spin-slow" />
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter text-admin-text font-headline">Módulo em Sincronização</h2>
              <p className="text-admin-muted font-semibold mt-4 max-w-md uppercase text-xs tracking-widest leading-loose">
                A funcionalidade "{activePage.toUpperCase()}" está sendo integrada ao motor industrial da Dresbach Records.
              </p>
              <button 
                onClick={() => setActivePage('dashboard')}
                className="mt-10 admin-btn admin-btn-gold"
              >
                Voltar ao Dashboard
              </button>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
