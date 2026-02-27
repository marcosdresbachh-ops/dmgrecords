
"use client";
import { Radio, Plus, CheckCircle2, XCircle } from "lucide-react";
import "./PlatformsPage.css";

export function PlatformsPage() {
  const platforms = [
    {ic:'🎵',n:'Spotify',t:'9.8M tracks',status:true,type:'Streaming'},
    {ic:'🍎',n:'Apple Music',t:'4.2M tracks',status:true,type:'Streaming'},
    {ic:'▶️',n:'YouTube Music',t:'6.1M tracks',status:true,type:'Video/Stream'},
    {ic:'📦',n:'Amazon Music',t:'2.3M tracks',status:true,type:'Streaming'},
    {ic:'🎧',n:'Deezer',t:'1.1M tracks',status:true,type:'Streaming'},
    {ic:'🌊',n:'Tidal',t:'890k tracks',status:true,type:'HiFi Stream'},
    {ic:'☁️',n:'SoundCloud',t:'420k tracks',status:true,type:'Upload'},
    {ic:'🔊',n:'Beatport',t:'38k tracks',status:false,type:'DJ / Electronic'},
    {ic:'📻',n:'DMG Radio',t:'247 tracks',status:true,type:'Rádio Digital'},
    {ic:'🎸',n:'Bandcamp',t:'180k tracks',status:false,type:'Indie'},
    {ic:'🎼',n:'ECAD',t:'Registro PRO',status:true,type:'Direitos'},
    {ic:'📡',n:'Boomplay',t:'56k tracks',status:false,type:'África'},
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph flex justify-between items-start mb-10">
        <div>
          <h1>Plataformas de Distribuição</h1>
          <p>Gerenciar parceiros globais e conexões API</p>
        </div>
        <button className="admin-btn btn-gold"><Plus size={16} /> Adicionar Plataforma</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((p, i) => (
          <div key={i} className={`platform-card ${p.status ? 'active' : ''}`}>
            <div className="platform-icon">{p.ic}</div>
            <h3 className="platform-name">{p.n}</h3>
            <p className="platform-tracks">{p.t}</p>
            <p className="platform-type">{p.type}</p>
            <div className="mt-6 pt-6 border-t border-admin-surface2 flex flex-col gap-3">
              <span className={`admin-badge ${p.status ? 'badge-green' : 'badge-red'}`}>
                {p.status ? '✓ Conectada' : '✗ Desconectada'}
              </span>
              <button className="admin-btn btn-outline py-2 text-[9px] w-full justify-center">
                {p.status ? 'Configurar API' : 'Conectar Agora'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
