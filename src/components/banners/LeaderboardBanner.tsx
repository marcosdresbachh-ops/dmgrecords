'use client';
import { useEffect } from 'react';
import './Banners.css';

export function LeaderboardBanner() {
  useEffect(() => {
    const waveEl = document.getElementById('lbWave');
    if (waveEl && waveEl.children.length === 0) {
        [8,14,20,16,10,18,14,8,12,18,14,10].forEach(() => {
          const b = document.createElement('div');
          b.className = 's2-wb';
          const h = Math.floor(Math.random()*20)+4;
          const dur = (.55+Math.random()*.7).toFixed(2);
          const del = (Math.random()*.5).toFixed(2);
          b.style.cssText = `height:${h}px;animation:wfAnim ${dur}s ${del}s ease-in-out infinite`;
          waveEl.appendChild(b);
        });
    }

    const bannerId = 'lb', dotsId = 'lbDots', interval = 5000;
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

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-lb lb" id="lb">
        <div className="slide s1-slide active">
          <div className="s1-bg s-bg"></div>
          <div className="s-content s1-content" style={{ display: 'flex' }}>
            <div className="s1-left">
              <div className="s1-left-inner">
                <div className="s1-dmg"><span>WEB RÁDIO</span>DMG<br />RECORDS</div>
              </div>
            </div>
            <div className="s1-right">
              <div className="s1-msg">
                <div className="s1-tag"><div className="s1-dot"></div>Transmitindo Agora</div>
                <div className="s1-headline">SERTANEJO · GOSPEL · POP · ROCK</div>
                <div className="s1-sub">24 horas por dia, 7 dias por semana — ao vivo para você!</div>
              </div>
              <div className="s1-cta">▶ Ouvir Agora</div>
            </div>
          </div>
        </div>
        <div className="slide s2-slide">
          <div className="s2-bg s-bg"></div>
          <div className="s2-bar"></div>
          <div className="s-content" style={{ display: 'flex', alignItems: 'center', padding: '0 24px', gap: '20px' }}>
            <div className="s2-wave" id="lbWave"></div>
            <div className="s2-text">
              <div className="s2-genre">♫ Sertanejo</div>
              <div className="s2-title">O MELHOR DO <em>SERTANEJO</em></div>
              <div className="s2-sub">Zé Neto & Cristiano · Henrique & Juliano · Jorge & Mateus e muito mais!</div>
            </div>
            <div className="s2-badge">Ouça Grátis</div>
          </div>
        </div>
        <div className="slide s3-slide">
          <div className="s3-bg s-bg"></div>
          <div className="s3-stripe"></div>
          <div className="s-content" style={{ display: 'flex', alignItems: 'center', padding: '0 24px', gap: '16px' }}>
            <div className="s3-icon">✝️</div>
            <div className="s3-text">
              <div className="s3-genre">Gospel · Cristão</div>
              <div className="s3-title">TARDE GOSPEL — 15h ÀS 18h</div>
              <div className="s3-sub">DJ Ana Lima com os maiores sucessos do gospel nacional · Todo dia!</div>
            </div>
            <div className="s3-cta">Sintonize</div>
          </div>
        </div>
        <div className="slide s4-slide">
          <div className="s4-bg s-bg" style={{ background: 'var(--gold2)' }}></div>
          <div className="s-content" style={{ display: 'flex', alignItems: 'center', padding: '0 24px', gap: '20px' }}>
            <div className="s4-text">
              <div className="s4-pre">🎵 Peça sua música!</div>
              <div className="s4-title">MANDE SEU PEDIDO AGORA</div>
              <div className="s4-sub">WhatsApp: (51) 98144-6019 · Site: dmgrecords.com.br</div>
            </div>
            <div className="s4-cta">Pedir Agora</div>
          </div>
        </div>
        <div className="banner-dots" id="lbDots"></div>
      </div>
    </div>
  );
}
