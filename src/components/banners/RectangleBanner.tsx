'use client';
import { useEffect } from 'react';
import './Banners.css';

export function RectangleBanner() {
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
          const rr = document.getElementById(`r-prog-${p.id}`);
          if(rr) {
            rr.className = 'prog-row' + (isOn?' active-row':'');
            const existingLive = rr.querySelector('.pr-live');
            if(isOn && !existingLive){
              const lv = document.createElement('div'); lv.className='pr-live'; lv.textContent='AO VIVO';
              rr.appendChild(lv);
            } else if (!isOn && existingLive) {
              existingLive.remove();
            }
          }
        });
      } catch (e) {}
    }
    highlightNow();
    const highlightInterval = setInterval(highlightNow, 60000);

    const bannerId = 'rect', dotsId = 'rectDots', interval = 6000;
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
    <div className="banner-container my-8 flex-col items-center">
      <div className="banner-rect rect" id="rect">
        <div className="slide rs1-slide active">
          <div className="rs1-bg s-bg"></div>
          <div className="s-content rs1-content">
            <div className="rs1-top">★ WEB RÁDIO · AO VIVO 24H ★</div>
            <div className="rs1-logo-area">
              <span>WEB RÁDIO</span>
              DMG
              <span className="rs1-records">RECORDS</span>
            </div>
            <div className="rs1-line"></div>
            <div className="rs1-slogan">Sertanejo · Gospel · Pop · Rock</div>
            <div className="rs1-cta"><div className="rs1-dot"></div>Ouvir ao Vivo</div>
          </div>
        </div>
        <div className="slide rs2-slide">
          <div className="rs2-bg s-bg"></div>
          <div className="rs2-header">
            <div className="rs2-hlogo">DMG Records</div>
            <div className="rs2-htag">Programação</div>
          </div>
          <div className="s-content rs2-content">
            <div className="rs2-title">— HOJE NA RÁDIO —</div>
            <div className="prog-row" id="r-prog-1">
              <div className="pr-time">06:00</div>
              <div style={{ flex: 1 }}><div className="pr-name">Bom Dia DMG</div><div className="pr-dj">DJ Marcos</div></div>
            </div>
            <div className="prog-row" id="r-prog-2">
              <div className="pr-time">09:00</div>
              <div style={{ flex: 1 }}><div className="pr-name">Morning Hits</div><div className="pr-dj">DJ Letícia</div></div>
            </div>
            <div className="prog-row" id="r-prog-3">
              <div className="pr-time">12:00</div>
              <div style={{ flex: 1 }}><div className="pr-name">Almoço Sertanejo</div><div className="pr-dj">DJ Carlos</div></div>
            </div>
            <div className="prog-row" id="r-prog-4">
              <div className="pr-time">15:00</div>
              <div style={{ flex: 1 }}><div className="pr-name">Tarde Gospel</div><div className="pr-dj">DJ Ana Lima</div></div>
            </div>
            <div className="prog-row" id="r-prog-5">
              <div className="pr-time">18:00</div>
              <div style={{ flex: 1 }}><div className="pr-name">Prime Time DMG</div><div className="pr-dj">DJ Rafael</div></div>
            </div>
            <div className="prog-row" id="r-prog-6">
              <div className="pr-time">21:00</div>
              <div style={{ flex: 1 }}><div className="pr-name">Love Songs</div><div className="pr-dj">DJ Sandra</div></div>
            </div>
          </div>
        </div>
        <div className="slide rs3-slide">
          <div className="rs3-bg s-bg"></div>
          <div className="s-content rs3-content">
            <div className="rs3-tag">● Ao Vivo Agora</div>
            <div className="rs3-title">ANUNCIE<br />NA <em>DMG</em></div>
            <div className="rs3-divider"></div>
            <div className="rs3-sub">Alcance +15.000 ouvintes diários com seu anúncio na maior rádio web da região.</div>
            <div className="rs3-contact">📲 (51) 98144-6019</div>
            <div className="rs3-cta">Fale Conosco</div>
          </div>
        </div>
        <div className="banner-dots" id="rectDots"></div>
      </div>
    </div>
  );
}
