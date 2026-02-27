
"use client";
import { Settings } from "lucide-react";
import "./SyncPage.css";

export function SyncPage({ pageName }: { pageName: string }) {
  return (
    <div className="sync-container animate-in zoom-in-95 duration-500">
      <div className="sync-icon-box mx-auto">
        <Settings className="h-12 w-12 animate-spin-slow" />
      </div>
      <h2 className="text-5xl font-black italic uppercase tracking-tighter text-admin-text font-bebas">Módulo em Sincronização</h2>
      <p className="text-admin-muted font-bold mt-4 max-w-md uppercase text-[10px] tracking-[0.3em] leading-loose mx-auto">
        A funcionalidade "{pageName.toUpperCase()}" está sendo integrada ao motor industrial da Dresbach Records.
      </p>
      <div className="shimmer-track mx-auto">
        <div className="shimmer-fill" />
      </div>
    </div>
  );
}
