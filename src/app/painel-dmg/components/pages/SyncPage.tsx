
"use client";
import { Settings } from "lucide-react";

export function SyncPage({ pageName }: { pageName: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center animate-in zoom-in-95 duration-500">
      <div className="w-24 h-24 bg-admin-gold/10 rounded-full flex items-center justify-center text-admin-gold mb-8 shadow-xl shadow-admin-gold/5">
        <Settings className="h-12 w-12 animate-spin-slow" />
      </div>
      <h2 className="text-5xl font-black italic uppercase tracking-tighter text-admin-text font-bebas">Módulo em Sincronização</h2>
      <p className="text-admin-muted font-bold mt-4 max-w-md uppercase text-[10px] tracking-[0.3em] leading-loose">
        A funcionalidade "{pageName.toUpperCase()}" está sendo integrada ao motor industrial da Dresbach Records.
      </p>
      <div className="mt-12 h-1 w-48 bg-admin-bg rounded-full overflow-hidden">
        <div className="h-full bg-admin-gold animate-[shimmer_2s_infinite]" />
      </div>
      
      <style jsx>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </div>
  );
}
