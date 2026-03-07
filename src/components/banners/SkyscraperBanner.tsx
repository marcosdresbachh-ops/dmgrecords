'use client';
import { useEffect } from 'react';
import './Banners.css';

export function SkyscraperBanner() {
  useEffect(() => {
    function highlightNow(){
      try {
        const h = new Date().getHours();
        const progs = [
          {id:1, start:6,  end:9}, {id:2, start:9,  end:12},
          {id:3, start:12, end:15}, {id:4, start:15, end:18},
          {id:5, start:18, end:21}, {id:6, start:21, end:24},
        ];
        progs.forEach(p => {
          const isOn = h >= p.start && h < p.end;
          const sr = document.getElementById(`s-prog-${p.id}`);
          if(sr) sr.className = 'ss2-row' + (isOn?' on':'');
        });
      } catch (e) {}
    }
    highlightNow();
    const highlightInterval = setInterval(highlightNow, 60000);

    const bannerId = 'sky', dotsId = 'skyDots', interval = 7000;
    const banner = document.getElementById(bannerId);
    const dotsWrap = document.getElementById(dotsId);
    if (!banner || !dotsWrap) return;

    const slides = banner.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    let cur = 0;
    dotsWrap.innerHTML = '';
    
    slides.forEach((_,i)=>{
      const d = document.createElement('div');
      d.className = 'bd' + (i===0?' active':'');
      dotsWrap.appendChild(d);
    });
    const dots = dotsWrap.querySelectorAll('.bd');

    function goTo(n: number){
      if (!slides[cur] || !dots[cur]) return;
      slides[cur].classList.remove('active');
      dots[cur].classList.remove('active');
      cur = (n + slides.length) % slides.length;
      slides[cur].classList.add('active');
      dots[cur].classList.add('active');
    }
    
    goTo(0);
    const slideInterval = setInterval(() => goTo(cur + 1), interval);

    return () => {
        clearInterval(highlightInterval);
        clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="banner-sky sky" id="sky">
      <div className="slide ss1-slide active">
        <div className="ss1-bg s-bg"></div>
        <div className="ss1-top"></div>
        <div className="s-content ss1-content">
          <div className="ss1-logo">
            <small>WEB RÁDIO</small>
            DMG
            <div className="rec">RECORDS</div>
          </div>
          <div className="ss1-line"></div>
          <div className="ss1-on-air"><div className="s1-dot"></div>AO VIVO 24H</div>
          <div className="genre-stack">
            <div className="gs-item" style={{ background: 'rgba(212,36,58,.15)', color: 'var(--red)' }}>🎸 SERTANEJO</div>
            <div className="gs-item" style={{ background: 'rgba(22,163,74,.12)', color: 'var(--green)' }}>✝️ GOSPEL</div>
            <div className="gs-item" style={{ background: 'rgba(37,99,235,.12)', color: 'var(--blue)' }}>🎤 POP / R&B</div>
            <div className="gs-item" style={{ background: 'rgba(124,58,237,.12)', color: '#7C3AED' }}>🎸 ROCK</div>
          </div>
          <div className="ss1-slogan">A rádio que move<br />a cidade.<br />Desde 2017.</div>
          <div className="ss1-contact">🌐 dmgrecords.com.br<br />📲 (51) 98144-6019</div>
        </div>
        <div className="ss1-bottom"></div>
      </div>
      <div className="slide ss2-slide">
        <div className="ss2-bg s-bg"></div>
        <div className="ss2-header">
          <div className="ss2-hname">DMG Records</div>
          <div className="ss2-htag">● Programação de Hoje</div>
        </div>
        <div className="s-content ss2-content">
          <div className="ss2-section">Programação</div>
          <div className="ss2-prog">
            <div className="ss2-row" id="s-prog-1"><div className="ss2-hora">06:00</div><div className="ss2-pnome">Bom Dia DMG</div></div>
            <div className="ss2-row" id="s-prog-2"><div className="ss2-hora">09:00</div><div className="ss2-pnome">Morning Hits</div></div>
            <div className="ss2-row" id="s-prog-3"><div className="ss2-hora">12:00</div><div className="ss2-pnome">Almoço Sertanejo</div></div>
            <div className="ss2-row" id="s-prog-4"><div className="ss2-hora">15:00</div><div className="ss2-pnome">Tarde Gospel</div></div>
            <div className="ss2-row" id="s-prog-5"><div className="ss2-hora">18:00</div><div className="ss2-pnome">Prime Time DMG</div></div>
            <div className="ss2-row" id="s-prog-6"><div className="ss2-hora">21:00</div><div className="ss2-pnome">Love Songs</div></div>
          </div>
          <div className="ss2-cta-block">
            <div className="ss2-cta-t">Site Oficial</div>
            <div className="ss2-cta-v">dmgrecords.com.br</div>
            <div className="ss2-cta-btn">▶ Ouvir Grátis</div>
          </div>
        </div>
      </div>
      <div className="banner-dots" style={{ bottom: '10px', right: '6px' }} id="skyDots"></div>
    </div>
  );
}
