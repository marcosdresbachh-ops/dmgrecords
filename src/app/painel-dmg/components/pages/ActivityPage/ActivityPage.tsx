
"use client";
import { Clock, Filter } from "lucide-react";
import "./ActivityPage.css";

export function ActivityPage() {
  const activities = [
    {type:'track',msg:'Diego Ferreira enviou "Raiz do Norte" para revisão',time:'há 2 horas',c:'var(--admin-gold)'},
    {type:'dist',msg:'Distribuição de "Miami Nights" concluída em 5 plataformas',time:'Ontem 14:32',c:'var(--admin-green)'},
    {type:'contract',msg:'Contrato de Sofia Andrade assinado digitalmente',time:'Ontem 11:10',c:'var(--admin-blue)'},
    {type:'royalty',msg:'Royalties Q1 2025 processados — $27,180 distribuídos',time:'3 dias atrás',c:'var(--admin-green)'},
    {type:'artist',msg:'Lucas Moraes completou cadastro no Artist Hub',time:'1 semana atrás',c:'var(--admin-purple)'},
    {type:'track',msg:'Álbum "Neon Sessions" de Sofia Andrade aprovado',time:'1 semana atrás',c:'var(--admin-gold)'},
    {type:'license',msg:'Licença sync aprovada para "Blue Horizon" — FilmCo',time:'2 semanas atrás',c:'var(--admin-blue)'},
    {type:'dist',msg:'"Corazón Libre" alcançou 150k streams no Spotify',time:'2 semanas atrás',c:'var(--admin-green)'},
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div className="ph-left">
          <h1>Feed de Atividade</h1>
          <p>Tudo o que aconteceu no ecossistema Dresbach Records</p>
        </div>
        <button className="admin-btn btn-outline"><Filter size={14} /> Filtrar Feed</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 admin-card">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
            <Clock className="text-admin-gold h-5 w-5" /> Atividade Recente
          </h3>
          <div className="space-y-2">
            {activities.map((a, i) => (
              <div key={i} className="feed-item">
                <div className="feed-dot" style={{ background: a.c }}></div>
                <div className="feed-content">
                  <div className="feed-title">{a.msg}</div>
                  <div className="feed-meta">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8">Resumo Semanal</h3>
            {[
              ['Faixas enviadas','4'],['Distribuições','2'],['Contratos assinados','1'],['Royalties processados','$3,240'],['Novos streams','48,200']
            ].map(([l,v], i) => (
              <div key={i} className="flex justify-between py-4 border-b border-admin-surface2 last:border-0 text-[10px] font-black uppercase tracking-widest">
                <span className="text-admin-muted">{l}</span>
                <span className="text-admin-gold">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
