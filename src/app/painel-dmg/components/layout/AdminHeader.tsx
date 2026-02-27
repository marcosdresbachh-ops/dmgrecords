
"use client";
import Image from "next/image";
import { Search, LogOut } from "lucide-react";

export function AdminHeader({ onLogout }: { onLogout: () => void }) {
  return (
    <header className="admin-header">
      <div className="flex items-center px-8 w-[260px] border-r border-white/10 h-full">
        <Image src="/logodmg.png" alt="DMG Logo" width={120} height={40} className="object-contain" />
      </div>
      <div className="flex-1 px-8">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
          <input 
            placeholder="Busca administrativa global..." 
            className="w-full bg-white/10 border-none py-2.5 pl-12 pr-4 rounded-full text-white text-sm focus:ring-2 focus:ring-admin-gold outline-none"
          />
        </div>
      </div>
      <div className="px-8 flex items-center gap-6">
        <span className="text-[10px] font-black text-admin-gold uppercase tracking-widest">Marcos Dresbach (Admin)</span>
        <button onClick={onLogout} className="text-white/40 hover:text-white transition-colors">
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
