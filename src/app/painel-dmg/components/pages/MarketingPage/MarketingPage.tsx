
"use client";
import { Megaphone, Plus, Mail, MessageCircle, BarChart3, Link as LinkIcon, Share2, Target } from "lucide-react";
import "./MarketingPage.css";

export function MarketingPage() {
  const tools = [
    { ic: <Share2 />, t: "Press Releases", d: "Criar e gerenciar press releases para lançamentos" },
    { ic: <Mail />, t: "Email Marketing", d: "Enviar newsletters para fãs e parceiros" },
    { ic: <MessageCircle />, t: "Social Media", d: "Gerenciar posts e campanhas nas redes sociais" },
    { ic: <Target />, t: "Pitching Editorial", d: "Submeter músicas para playlists editoriais" },
    { ic: <BarChart3 />, t: "Campanhas Pagas", d: "Google Ads, Meta Ads, Spotify Ads" },
    { ic: <LinkIcon />, t: "Smart Links", d: "Criar links inteligentes para lançamentos" },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph flex justify-between items-start mb-10">
        <div>
          <h1>Marketing & Promoção</h1>
          <p>Ferramentas de expansão de audiência DMG</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Nova Campanha</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {tools.map((t, i) => (
          <div key={i} className="admin-card text-center group hover:border-admin-gold transition-all cursor-pointer">
            <div className="w-16 h-16 bg-admin-surface2 rounded-2xl flex items-center justify-center mx-auto mb-6 text-admin-gold group-hover:scale-110 transition-transform">
              {t.ic}
            </div>
            <h3 className="font-bold uppercase italic text-lg mb-2">{t.t}</h3>
            <p className="text-[10px] font-bold text-admin-muted uppercase tracking-widest leading-relaxed">{t.d}</p>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
          <Megaphone className="text-admin-gold h-5 w-5" /> Campanhas Ativas
        </h3>
        <table className="admin-table">
          <thead>
            <tr><th>Campanha</th><th>Tipo</th><th>Artista</th><th>Alcance</th><th>Cliques</th><th>Status</th></tr>
          </thead>
          <tbody>
            {[
              ['Blue Horizon Launch','Press Release','Luna Verona','8,400','1,240','active'],
              ['Neon Galaxy Push','Pitching','Sofia Andrade','—','—','active'],
              ['Miami Nights Ads','Social Media Ads','Ayla Santos','124,000','3,820','active'],
            ].map((c, i) => (
              <tr key={i}>
                <td className="font-bold italic uppercase tracking-tighter">{c[0]}</td>
                <td><span className="admin-badge badge-blue">{c[1]}</span></td>
                <td className="text-admin-muted font-bold text-[11px] uppercase">{c[2]}</td>
                <td className="font-bold">{c[3]}</td>
                <td className="font-bold text-admin-gold">{c[4]}</td>
                <td><span className="admin-badge badge-green">Ativa</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
