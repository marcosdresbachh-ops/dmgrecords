
"use client";
import { Globe, Search, Layout, Settings, Edit3 } from "lucide-react";
import "./SitePage.css";

export function SitePage() {
  const sections = [
    ['🏠','Página Inicial','Hero, textos, banner principal'],
    ['🎤','Página Artistas','Grade de artistas e perfis individuais'],
    ['💿','Página Catálogo','Músicas em destaque e lançamentos'],
    ['📰','Blog / Notícias','Artigos, releases e novidades da label'],
    ['📬','Contato','Formulários e informações institucionais'],
    ['ℹ️','Sobre Nós','Missão, visão e história da gravadora'],
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Gerenciar Site Público</h1>
          <p>Administrar conteúdo e visibilidade do portal Dresbach Records</p>
        </div>
        <button className="admin-btn btn-gold"><Globe size={16} /> Ver Site Online</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {sections.map((s, i) => (
          <div key={i} className="admin-card text-center hover:border-admin-gold transition-all cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-admin-surface2 group-hover:bg-admin-gold transition-colors"></div>
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform py-4">{s[0]}</div>
            <h3 className="font-black uppercase italic text-xl mb-2 tracking-tighter">{s[1]}</h3>
            <p className="text-[10px] font-black text-admin-muted uppercase tracking-widest leading-relaxed mb-8 px-4">{s[2]}</p>
            <button className="admin-btn btn-outline w-full py-3 text-[9px] group-hover:bg-admin-gold group-hover:text-white transition-all">✎ Editar Seção</button>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
          <Search className="text-admin-gold h-5 w-5" /> SEO & Indexação Global
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="fld">
            <label>Título do Site (Meta Title)</label>
            <input defaultValue="Dresbach Records — Gravadora Independente Brasileira" />
          </div>
          <div className="fld">
            <label>Palavras-Chave (Keywords)</label>
            <input defaultValue="gravadora, música urbana, trap, r&b, vini amaral" />
          </div>
          <div className="fld md:col-span-2">
            <label>Meta Descrição (Description)</label>
            <textarea rows={4} defaultValue="Dresbach Records LTDA — Especializada em produção, mixagem e masterização de alta performance. Casa oficial do cantor Vini Amaral." />
          </div>
        </div>
        <button className="admin-btn btn-gold px-12 h-14 mt-4 shadow-xl shadow-admin-gold/20">Salvar Alterações de SEO</button>
      </div>
    </div>
  );
}
