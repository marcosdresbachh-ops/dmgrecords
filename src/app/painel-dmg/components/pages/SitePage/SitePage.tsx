
"use client";
import { Globe, Search, Layout, Settings, Edit3, Image as ImageIcon, MessageSquare, Info, Contact, BookOpen } from "lucide-react";
import "./SitePage.css";

export function SitePage() {
  const sections = [
    { ic: <Layout size={24}/>, t: 'Página Inicial', d: 'Hero, textos e banners principais.', id: 'home' },
    { ic: <Music size={24}/>, t: 'Página Artistas', d: 'Grade de artistas e perfis individuais.', id: 'artists' },
    { ic: <ImageIcon size={24}/>, t: 'Catálogo Público', d: 'Músicas em destaque e lançamentos.', id: 'catalog' },
    { ic: <BookOpen size={24}/>, t: 'Blog / News', d: 'Artigos, releases e novidades da label.', id: 'blog' },
    { ic: <Contact size={24}/>, t: 'Contato', d: 'Formulários e informações institucionais.', id: 'contact' },
    { ic: <Info size={24}/>, t: 'Sobre Nós', d: 'Missão, visão e história da gravadora.', id: 'about' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Gerenciar Site Público</h1>
          <p>Administrar conteúdo e visibilidade do portal Dresbach Records</p>
        </div>
        <button className="admin-btn btn-primary"><Globe size={16} /> Ver Site Online</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {sections.map((s, i) => (
          <div key={i} className="admin-card text-center hover:border-admin-primary transition-all cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-admin-surface2 group-hover:bg-admin-primary transition-colors"></div>
            <div className="w-16 h-16 bg-admin-surface2 rounded-2xl flex items-center justify-center mx-auto mb-6 text-admin-muted group-hover:text-admin-primary group-hover:scale-110 transition-all">
              {s.ic}
            </div>
            <h3 className="font-black uppercase italic text-xl mb-2 tracking-tighter">{s.t}</h3>
            <p className="text-[10px] font-black text-admin-muted uppercase tracking-widest leading-relaxed mb-8 px-4">{s.d}</p>
            <button className="admin-btn btn-outline w-full py-3 text-[9px] group-hover:bg-admin-primary group-hover:text-white transition-all">✎ Editar Seção</button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
            <Search className="text-admin-primary h-5 w-5" /> SEO & Indexação Global
          </h3>
          <div className="space-y-6">
            <div className="fld">
              <label>Título do Site (Meta Title)</label>
              <input defaultValue="Dresbach Records — Gravadora Independente Brasileira" />
            </div>
            <div className="fld">
              <label>Palavras-Chave (Keywords)</label>
              <input defaultValue="gravadora, música urbana, trap, r&b, vini amaral" />
            </div>
            <div className="fld">
              <label>Meta Descrição (Description)</label>
              <textarea rows={4} defaultValue="Dresbach Records LTDA — Especializada em produção, mixagem e masterização de alta performance. Casa oficial do cantor Vini Amaral." />
            </div>
            <button className="admin-btn btn-primary w-full h-14 shadow-xl shadow-admin-primary/10">Salvar Alterações de SEO</button>
          </div>
        </div>

        <div className="admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
            <Settings className="text-admin-primary h-5 w-5" /> Configurações do Site
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="fld"><label>Nome do Site</label><input defaultValue="Dresbach Records" /></div>
            <div className="fld"><label>URL Principal</label><input defaultValue="https://dresbachrecords.com" /></div>
            <div className="fld"><label>Email de Contato</label><input defaultValue="contato@dresbachrecords.com" /></div>
            <div className="fld"><label>Telefone Público</label><input defaultValue="+55 11 3000-0000" /></div>
            <div className="fld md:col-span-2"><label>Endereço exibido</label><input defaultValue="São Paulo, SP, Brasil" /></div>
            <div className="fld md:col-span-2">
              <label>Google Analytics ID</label>
              <input placeholder="G-XXXXXXXXXX" />
            </div>
          </div>
          <button className="admin-btn btn-outline w-full h-14 mt-4">Redefinir Configurações</button>
        </div>
      </div>
    </div>
  );
}
