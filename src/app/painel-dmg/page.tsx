
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import "./admin.css";

// Layout
import { AdminHeader } from "./components/layout/AdminHeader";
import { AdminSidebar } from "./components/layout/AdminSidebar";

// Páginas Modulares
import { DashboardPage } from "./components/pages/DashboardPage";
import { ActivityPage } from "./components/pages/ActivityPage";
import { ArtistsPage } from "./components/pages/ArtistsPage";
import { CatalogPage } from "./components/pages/CatalogPage";
import { AlbumsPage } from "./components/pages/AlbumsPage";
import { ContractsPage } from "./components/pages/ContractsPage";
import { DistributionPage } from "./components/pages/DistributionPage";
import { RoyaltiesPage } from "./components/pages/RoyaltiesPage";
import { AnalyticsPage } from "./components/pages/AnalyticsPage";
import { SitePage } from "./components/pages/SitePage";
import { UsersPage } from "./components/pages/UsersPage";
import { SettingsPage } from "./components/pages/SettingsPage";
import { SyncPage } from "./components/pages/SyncPage";

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

  const renderActivePage = () => {
    switch (activePage) {
      case 'dashboard': return <DashboardPage />;
      case 'activity': return <ActivityPage />;
      case 'artists': return <ArtistsPage />;
      case 'catalog': return <CatalogPage />;
      case 'albums': return <AlbumsPage />;
      case 'contracts': return <ContractsPage />;
      case 'distribution': return <DistributionPage />;
      case 'royalties': return <RoyaltiesPage />;
      case 'analytics': return <AnalyticsPage />;
      case 'site': return <SitePage />;
      case 'users': return <UsersPage />;
      case 'settings': return <SettingsPage />;
      default: return <SyncPage pageName={activePage} />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#1a1814] flex items-center justify-center p-6 admin-body">
        <Head><title>Login — Central de Comando DMG</title></Head>
        <div className="bg-white w-full max-w-md rounded-[40px] p-12 shadow-2xl border-t-8 border-admin-gold animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-10">
            <Image src="/logodmg.png" alt="DMG Logo" width={180} height={60} className="mx-auto mb-8 object-contain" priority />
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-admin-text">Central de Comando</h1>
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
        <div className="p-10 pb-32">
          {renderActivePage()}
        </div>
      </main>
    </div>
  );
}
