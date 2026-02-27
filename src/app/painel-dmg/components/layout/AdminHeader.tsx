
"use client";
import Image from "next/image";
import { Search, LogOut, Bell } from "lucide-react";
import "./AdminHeader.css";

export function AdminHeader({ onLogout }: { onLogout: () => void }) {
  return (
    <header className="admin-header">
      <div className="flex items-center px-8 w-[260px] border-r border-white/10 h-full">
        <Image src="/logodmg.png" alt="DMG Logo" width={140} height={40} className="object-contain" priority />
      </div>
      <div className="flex-1 px-10">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
          <input 
            placeholder="Buscar artistas, músicas, contratos..." 
            className="header-search-input outline-none"
          />
        </div>
      </div>
      <div className="px-8 flex items-center gap-8">
        <span className="text-[10px] font-black text-admin-gold uppercase tracking-[0.2em] bg-admin-gold/10 px-4 py-2 rounded-full border border-admin-gold/20">Dresbach Records Admin</span>
        <button className="text-white/40 hover:text-white relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-admin-red rounded-full" />
        </button>
        <button onClick={onLogout} className="text-white/40 hover:text-white transition-colors">
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
