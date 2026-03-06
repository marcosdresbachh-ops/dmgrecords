"use client";

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Music4 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const STREAM_URL = 'https://s02.svrdedicado.org:6862/stream';

interface NowPlayingInfo {
  musica_atual: string;
  ouvintes_conectados: string;
  capa_musica: string;
  titulo: string;
}

export function RadioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [nowPlaying, setNowPlaying] = useState<NowPlayingInfo | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const waveRef = useRef<HTMLDivElement | null>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const [clock, setClock] = useState("00:00:00");
  const [error, setError] = useState<string|null>(null);

  // Effect to fetch now playing info periodically
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/now-playing');
        if (!response.ok) {
          throw new Error('Failed to fetch now playing data');
        }
        const data = await response.json();
        setNowPlaying(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Could not load track info.');
        setNowPlaying(null);
      }
    };

    fetchNowPlaying(); // Fetch immediately
    const interval = setInterval(fetchNowPlaying, 15000); // And then every 15 seconds

    return () => clearInterval(interval);
  }, []);

  // Effect to initialize player, animations, and clock. Runs only once.
  useEffect(() => {
    if (typeof window !== 'undefined') {
        audioRef.current = new Audio();
        audioRef.current.volume = volume / 100;
    }
    
    const pw = waveRef.current;
    if (pw) {
        pw.innerHTML = '';
        barsRef.current = [];
        for (let i = 0; i < 40; i++) {
            const b = document.createElement('div');
            b.className = 'pw-bar';
            b.style.height = '4px';
            pw.appendChild(b);
            barsRef.current.push(b);
        }
    }
    
    let animFrame: number;
    const anim = () => {
        const isPlaying = audioRef.current ? !audioRef.current.paused : false;
        barsRef.current.forEach((b, i) => {
            const h = isPlaying
                ? Math.abs(Math.sin(Date.now() / 160 + i * .45)) * 26 + 4
                : 4 + Math.abs(Math.sin(i * .4)) * 4;
            b.style.height = h + 'px';
            b.classList.toggle('on', isPlaying && h > 15);
        });
        animFrame = requestAnimationFrame(anim);
    };
    anim();
    
    const tick = () => {
        const n = new Date();
        const t = [n.getHours(), n.getMinutes(), n.getSeconds()]
          .map(v => String(v).padStart(2,'0')).join(':');
        setClock(t);
    };
    const clockInterval = setInterval(tick, 1000);

    return () => {
        if(audioRef.current) {
            audioRef.current.pause();
        }
        if (animFrame) cancelAnimationFrame(animFrame);
        clearInterval(clockInterval);
    };
  }, []);

  // Effect to update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (!playing) {
      audioRef.current.src = STREAM_URL;
      audioRef.current.play().catch((e) => console.error("Error playing audio:", e));
    } else {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    setPlaying(!playing);
  };

  const trackName = nowPlaying?.musica_atual || nowPlaying?.titulo || 'DMG Records Rádio';
  const subtitle = playing 
    ? (nowPlaying?.ouvintes_conectados ? `${nowPlaying.ouvintes_conectados} ouvintes` : 'AO VIVO') 
    : 'CLIQUE PLAY PARA OUVIR';


  return (
    <div className="player-bar" id="player-bar">
      <div className="player-inner">
        <button className="player-play-btn" id="playBtn" onClick={togglePlay}>
          {playing ? <Pause style={{ width: '19px', height: '19px' }} /> : <Play style={{ width: '19px', height: '19px', marginLeft: '2px' }} />}
        </button>
        <Avatar>
            <AvatarImage src={nowPlaying?.capa_musica} alt={trackName} />
            <AvatarFallback>
                <Music4 className="h-5 w-5" />
            </AvatarFallback>
        </Avatar>
        <div className="p-track">
          <div className="p-name" id="pName">{trackName}</div>
          <div className="p-sub" id="pSub">{error || subtitle}</div>
        </div>
        <div className="p-wave" id="pWave" ref={waveRef}></div>
        <div className="p-vol">
          <Volume2 style={{ width: '16px', height: '16px' }} />
          <input type="range" className="p-vol-range" id="volR" min="0" max="100" value={volume} onChange={e => setVolume(Number(e.target.value))} />
        </div>
        <div className="p-clock" id="pClock">{clock}</div>
        <div className="p-onair"><div className="live-dot"></div>AO VIVO</div>
      </div>
    </div>
  );
}
