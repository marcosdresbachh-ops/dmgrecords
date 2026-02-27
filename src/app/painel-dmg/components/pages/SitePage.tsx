
"use client";
import { Layout, Edit2, Globe, Search, Plus } from "lucide-react";

export function SitePage() {
  const sections = [
    ['🏠','Página Inicial','Hero, textos, banner principal'],
    ['🎤','Página Artistas','Grade de artistas e perfis'],
    ['💿','Página Catálogo','Músicas em destaque'],
    ['📰','Blog / Notícias','Artigos e releases de imprensa'],
    ['📬','Contato','Formulário e informações'],
    ['ℹ️','Sobre Nós','História e equipe'],
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Gerenciar Site Público</h1>
          <p>Administrar conteúdo do portal Dresbach Records</p>
        </div>
        <button className="admin-btn btn-gold"><Globe size={16} /> Ver Site Online</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {sections.map((s, i) => (
          <div key={i} className="admin-card text-center hover:border-admin-gold transition-all cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{s[0]}</div>
            <h3 className="font-bold uppercase italic text-lg mb-2">{s[1]}</h3>
            <p className="text-[10px] font-bold text-admin-muted uppercase mb-6">{s[2]}</p>
            <button className="admin-btn btn-outline py-2 px-6 text-[9px] w-full justify-center">✎ Editar Seção</button>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <div className="card-title"><Search className="text-admin-gold" /> SEO & Visibilidade</div>
        <div className="space-y-6 pt-4">
          <div className="fld">
            <label>Título do Site (Meta Title)</label>
            <input defaultValue="Dresbach Records — Gravadora Independente Brasileira" />
          </div>
          <div className="fld">
            <label>Meta Descrição</label>
            <textarea rows={3} defaultValue="Dresbach Records LTDA — Gravadora independente sediada em São Paulo, Brasil. Artistas, músicas e distribuição digital." />
          </div>
          <button className="admin-btn btn-gold px-10">Salvar Alterações de SEO</button>
        </div>
      </div>
    </div>
  );
}
