
"use client";
import { Megaphone, Plus, Mail, MessageCircle, BarChart3, Link as LinkIcon, Share2, Target } from "lucide-react";
import "./MarketingPage.css";

export function MarketingPage() {
  const tools = [
    { ic: <Share2 />, t: "Press Releases", d: "Criar e gerenciar comunicados de imprensa para lançamentos" },
    { ic: <Mail />, t: "Email Marketing", d: "Enviar newsletters segmentadas para fãs e parceiros" },
    { ic: <MessageCircle />, t: "Social Media", d: "Gerenciar posts e cronogramas nas redes sociais" },
    { ic: <Target />, t: "Pitching Editorial", d: "Submeter músicas para as principais playlists do mercado" },
    { ic: <BarChart3 />, t: "Campanhas Pagas", d: "Google Ads, Meta Ads e Spotify Showcase" },
    { ic: <LinkIcon />, t: "Smart Links", d: "Criar páginas de destino inteligentes para releases" },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Marketing & Promoção</h1>
          <p>Ferramentas de expansão de marca e audiência DMG Records</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Nova Campanha</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {tools.map((t, i) => (
          <div key={i} className="admin-card text-center group hover:border-admin-gold transition-all cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-admin-surface2 group-hover:bg-admin-gold transition-colors"></div>
            <div className="w-20 h-20 bg-admin-surface2 rounded-3xl flex items-center justify-center mx-auto mb-8 text-admin-gold group-hover:scale-110 transition-transform shadow-sm">
              {t.ic}
            </div>
            <h3 className="font-black uppercase italic text-xl mb-3 tracking-tighter text-admin-text leading-none">{t.t}</h3>
            <p className="text-[10px] font-black text-admin-muted uppercase tracking-widest leading-loose px-4">{t.d}</p>
            <button className="admin-btn btn-outline w-full mt-8 py-3 text-[9px]">Acessar Ferramenta</button>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
          <Megaphone className="text-admin-gold h-5 w-5" /> Campanhas Ativas (Real-time)
        </h3>
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr><th>Campanha / Nome</th><th>Canal</th><th>Artista</th><th>Alcance Est.</th><th>Cliques</th><th>Status</th></tr>
            </thead>
            <tbody>
              {[
                ['Blue Horizon Global Launch','Press Release','Luna Verona','8,400','1,240','active'],
                ['Neon Galaxy Spotify Push','Pitching','Sofia Andrade','—','—','active'],
                ['Miami Nights Social Ads','Meta Ads','Ayla Santos','124,000','3,820','active'],
              ].map((c, i) => (
                <tr key={i}>
                  <td className="font-black italic uppercase tracking-tighter">{c[0]}</td>
                  <td><span className="admin-badge badge-blue">{c[1]}</span></td>
                  <td className="text-admin-muted font-bold text-[11px] uppercase tracking-widest">{c[2]}</td>
                  <td className="font-black text-sm">{c[3]}</td>
                  <td className="font-black text-admin-gold italic text-sm">{c[4]}</td>
                  <td><span className="admin-badge badge-green">Ativa</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
