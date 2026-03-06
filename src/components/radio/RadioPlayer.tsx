"use client";

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const STREAM_URL = 'https://player.svrdedicado.org/listen/6862/radio.mp3';

export function RadioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const waveRef = useRef<HTMLDivElement | null>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const [clock, setClock] = useState("00:00:00");

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume / 100;
    
    // Waveform bars
    const pw = waveRef.current;
    if (pw) {
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
        barsRef.current.forEach((b, i) => {
            const h = playing
                ? Math.abs(Math.sin(Date.now() / 160 + i * .45)) * 26 + 4
                : 4 + Math.abs(Math.sin(i * .4)) * 4;
            b.style.height = h + 'px';
            b.classList.toggle('on', playing && h > 15);
        });
        animFrame = requestAnimationFrame(anim);
    };
    anim();
    
    // Clock
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
        cancelAnimationFrame(animFrame);
        clearInterval(clockInterval);
    };
  }, [playing]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (!playing) {
      audioRef.current.src = STREAM_URL;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    setPlaying(!playing);
  };

  return (
    <div className="player-bar" id="player-bar">
      <div className="player-inner">
        <button className="player-play-btn" id="playBtn" onClick={togglePlay}>
          {playing ? <Pause style={{ width: '19px', height: '19px' }} /> : <Play style={{ width: '19px', height: '19px', marginLeft: '2px' }} />}
        </button>
        <div className="p-track">
          <div className="p-name" id="pName">DMG Records Rádio</div>
          <div className="p-sub" id="pSub">{playing ? 'TRANSMISSÃO AO VIVO · DMG RECORDS' : 'CLIQUE PLAY PARA OUVIR AO VIVO'}</div>
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
