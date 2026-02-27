
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import "./base.css";
import "./login.css";

// Layout
import { AdminHeader } from "./components/layout/AdminHeader";
import { AdminSidebar } from "./components/layout/AdminSidebar";

// Modais
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Páginas Modulares
import { DashboardPage } from "./components/pages/DashboardPage/DashboardPage";
import { ActivityPage } from "./components/pages/ActivityPage/ActivityPage";
import { ArtistsPage } from "./components/pages/ArtistsPage/ArtistsPage";
import { CatalogPage } from "./components/pages/CatalogPage/CatalogPage";
import { AlbumsPage } from "./components/pages/AlbumsPage/AlbumsPage";
import { ContractsPage } from "./components/pages/ContractsPage/ContractsPage";
import { DistributionPage } from "./components/pages/DistributionPage/DistributionPage";
import { PlatformsPage } from "./components/pages/PlatformsPage/PlatformsPage";
import { ReleasesPage } from "./components/pages/ReleasesPage/ReleasesPage";
import { RoyaltiesPage } from "./components/pages/RoyaltiesPage/RoyaltiesPage";
import { PaymentsPage } from "./components/pages/PaymentsPage/PaymentsPage";
import { InvoicesPage } from "./components/pages/InvoicesPage/InvoicesPage";
import { AnalyticsPage } from "./components/pages/AnalyticsPage/AnalyticsPage";
import { MarketingPage } from "./components/pages/MarketingPage/MarketingPage";
import { LicensesPage } from "./components/pages/LicensesPage/LicensesPage";
import { SitePage } from "./components/pages/SitePage/SitePage";
import { HubPage } from "./components/pages/HubPage/HubPage";
import { ReportsPage } from "./components/pages/ReportsPage/ReportsPage";
import { UsersPage } from "./components/pages/UsersPage/UsersPage";
import { SettingsPage } from "./components/pages/SettingsPage/SettingsPage";
import { AdminDB } from "./lib/admin-db";

export default function PainelDmgPage() {
  const [hydrated, setHydrated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ user: "", pass: "" });
  const [activePage, setActivePage] = useState('dashboard');
  const [error, setError] = useState("");
  
  // Modal State
  const [modal, setModal] = useState<string | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<any>(null);

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
      toast({ title: "Bem-vindo de volta", description: "Acesso administrativo concedido." });
    } else {
      setError("Acesso não autorizado.");
      setTimeout(() => setError(""), 3000);
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('dr_admin_auth');
    toast({ title: "Sessão Encerrada", description: "Você saiu do comando administrativo." });
  }

  const openModal = (type: string, data: any = null) => {
    setSelectedArtist(data);
    setModal(type);
  };

  const handleSaveArtist = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get("name") as string;
    if (!name) return;

    const artists = AdminDB.getArtists();
    const newArtist = {
      id: 'A' + Math.random().toString(36).substr(2, 4).toUpperCase(),
      name,
      role: formData.get("role") || 'Musician',
      genre: formData.get("genre") || 'Pop',
      email: formData.get("email"),
      country: formData.get("country") || 'Brazil',
      status: 'active',
      tracks: 0,
      streams: '0',
      royalties: '$0',
      joined: new Date().toLocaleDateString(),
      pro: 'ECAD'
    };

    AdminDB.saveArtists([...artists, newArtist]);
    setModal(null);
    toast({ title: "Artista Adicionado", description: `${name} agora faz parte do roster.` });
    // Forçar re-render da página ativa se necessário
    setActivePage(activePage);
  };

  const renderActivePage = () => {
    const props = { openModal };
    switch (activePage) {
      case 'dashboard': return <DashboardPage {...props} />;
      case 'activity': return <ActivityPage />;
      case 'artists': return <ArtistsPage {...props} />;
      case 'catalog': return <CatalogPage {...props} />;
      case 'albums': return <AlbumsPage {...props} />;
      case 'contracts': return <ContractsPage {...props} />;
      case 'distribution': return <DistributionPage {...props} />;
      case 'platforms': return <PlatformsPage />;
      case 'releases': return <ReleasesPage {...props} />;
      case 'royalties': return <RoyaltiesPage {...props} />;
      case 'payments': return <PaymentsPage />;
      case 'invoices': return <InvoicesPage />;
      case 'analytics': return <AnalyticsPage />;
      case 'marketing': return <MarketingPage {...props} />;
      case 'licenses': return <LicensesPage {...props} />;
      case 'site': return <SitePage />;
      case 'hub': return <HubPage {...props} />;
      case 'reports': return <ReportsPage />;
      case 'users': return <UsersPage {...props} />;
      case 'settings': return <SettingsPage />;
      default: return <DashboardPage {...props} />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-screen admin-body">
        <div className="login-card">
          <div className="text-center mb-10">
            <Image src="/logodmg.png" alt="DMG Logo" width={180} height={60} className="mx-auto mb-8 object-contain" priority />
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Comando Administrativo</h1>
            <p className="text-[10px] font-black text-admin-primary uppercase tracking-[0.3em] mt-2">Industrial Management Suite</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Identidade</label>
              <input 
                value={loginForm.user} 
                onChange={e => setLoginForm({...loginForm, user: e.target.value})} 
                placeholder="usuário" 
                className="login-input"
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Chave</label>
              <input 
                type="password" 
                value={loginForm.pass} 
                onChange={e => setLoginForm({...loginForm, pass: e.target.value})} 
                placeholder="••••••••" 
                className="login-input"
                required 
              />
            </div>
            {error && <div className="bg-red-50 text-red-600 text-[10px] font-black uppercase p-4 rounded-2xl text-center border border-red-100">{error}</div>}
            <button type="submit" className="admin-btn btn-primary w-full h-16 shadow-xl italic">
              INGRESSAR NO SISTEMA
            </button>
          </form>
          <div className="mt-12 text-center text-[9px] font-bold text-zinc-300 uppercase tracking-widest">
            DRESBACH GROUP © 2025 — ENCRYPTED
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-body min-h-screen bg-white">
      <AdminHeader onLogout={handleLogout} />
      <AdminSidebar activePage={activePage} onPageChange={setActivePage} />
      <main className="admin-main" style={{ marginLeft: 'var(--admin-sidebar-w)', paddingTop: 'var(--admin-topbar-h)', minHeight: '100vh' }}>
        <div className="p-10 pb-32 max-w-[1600px] mx-auto">
          {renderActivePage()}
        </div>
      </main>

      {/* Modais Industriais */}
      <Dialog open={!!modal} onOpenChange={() => setModal(null)}>
        <DialogContent className="bg-white text-zinc-900 max-w-2xl rounded-[32px] border-zinc-200">
          {modal === 'addArtist' && (
            <form onSubmit={handleSaveArtist}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-black italic uppercase tracking-tighter">Novo Artista DMG</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">Nome Completo</Label>
                  <Input name="name" required className="rounded-xl bg-zinc-50 border-zinc-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">Gênero</Label>
                  <Input name="genre" placeholder="Ex: Pop, Trap" className="rounded-xl bg-zinc-50 border-zinc-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">E-mail Profissional</Label>
                  <Input name="email" type="email" className="rounded-xl bg-zinc-50 border-zinc-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase">País</Label>
                  <Input name="country" defaultValue="Brasil" className="rounded-xl bg-zinc-50 border-zinc-200" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label className="text-[10px] font-black uppercase">Papel</Label>
                  <Select name="role" defaultValue="Artista">
                    <SelectTrigger className="rounded-xl bg-zinc-50 border-zinc-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-zinc-200 text-zinc-900">
                      <SelectItem value="Artista">Artista / Cantor</SelectItem>
                      <SelectItem value="Compositor">Compositor</SelectItem>
                      <SelectItem value="Produtor">Produtor Musical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setModal(null)} className="rounded-xl text-[10px] font-black uppercase">Cancelar</Button>
                <Button type="submit" className="bg-admin-primary text-white rounded-xl text-[10px] font-black uppercase px-8">Salvar Artista</Button>
              </DialogFooter>
            </form>
          )}
          {modal === 'artistDetail' && selectedArtist && (
            <div className="space-y-8">
              <DialogHeader>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-admin-primary rounded-2xl flex items-center justify-center text-white text-3xl font-black italic">
                    {selectedArtist.name[0]}
                  </div>
                  <div>
                    <DialogTitle className="text-3xl font-black italic uppercase tracking-tighter">{selectedArtist.name}</DialogTitle>
                    <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">{selectedArtist.role} · {selectedArtist.genre}</p>
                  </div>
                </div>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["ID Unico", selectedArtist.id],
                  ["Email", selectedArtist.email],
                  ["Streams", selectedArtist.streams],
                  ["Ganhos", selectedArtist.royalties],
                  ["PRO", selectedArtist.pro],
                  ["Membro desde", selectedArtist.joined],
                ].map(([k, v]) => (
                  <div key={k} className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl">
                    <p className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mb-1">{k}</p>
                    <p className="text-xs font-bold text-zinc-900 uppercase">{v}</p>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setModal(null)} className="rounded-xl w-full text-[10px] font-black uppercase">Fechar Detalhes</Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
