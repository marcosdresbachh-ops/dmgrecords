'use client';

import { useEffect } from 'react';
import './banners.css';

export function BannerExamples() {
  useEffect(() => {
    // ══ WAVEFORM LB ══
    const waveEl = document.getElementById('lbWave');
    if (waveEl && waveEl.children.length === 0) {
        [8,14,20,16,10,18,14,8,12,18,14,10].forEach((h,i) => {
          const b = document.createElement('div');
          b.className = 's2-wb';
          const dur = (.55+Math.random()*.7).toFixed(2);
          const del = (Math.random()*.5).toFixed(2);
          b.style.cssText = `height:${h}px;animation:wfAnim ${dur}s ${del}s ease-in-out infinite`;
          waveEl.appendChild(b);
        });
    }

    // ══ HIGHLIGHT PROGRAMA ATUAL ══
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
          const sr = document.getElementById(`s-prog-${p.id}`);
          if(sr) sr.className = 'ss2-row' + (isOn?' on':'');
        });
      } catch (e) {
        // Avoid errors in case DOM elements are not found
      }
    }
    highlightNow();
    const highlightInterval = setInterval(highlightNow, 60000);

    // ══ SLIDESHOW GENÉRICO ══
    function makeSlideshow(bannerId: string, dotsId: string, interval: number) {
      const banner = document.getElementById(bannerId);
      const dotsWrap = document.getElementById(dotsId);
      if (!banner || !dotsWrap) return null;

      const slides = banner.querySelectorAll('.slide');
      if (slides.length === 0) return null;
      
      let cur = 0;
      dotsWrap.innerHTML = ''; // Clear previous dots
      
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
      return slideInterval;
    }

    const interval1 = makeSlideshow('lb',   'lbDots',   5000);
    const interval2 = makeSlideshow('rect', 'rectDots', 6000);
    const interval3 = makeSlideshow('sky',  'skyDots',  7000);

    // Cleanup function
    return () => {
      clearInterval(highlightInterval);
      if (interval1) clearInterval(interval1);
      if (interval2) clearInterval(interval2);
      if (interval3) clearInterval(interval3);
    };

  }, []);

  return (
    <div className="page-wrap">
      <h2>Banner Leaderboard — 728 × 90 px</h2>
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
              <div className="s4-sub">WhatsApp: (55) 9 9999-0000 · Site: dmgrecords.com.br</div>
            </div>
            <div className="s4-cta">Pedir Agora</div>
          </div>
        </div>
        <div className="banner-dots" id="lbDots"></div>
      </div>

      <div className="row-banners">
        <div>
          <h2 style={{ marginBottom: '12px' }}>Retângulo — 300 × 250 px</h2>
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
                <div className="rs3-contact">📲 (55) 9 9999-0000</div>
                <div className="rs3-cta">Fale Conosco</div>
              </div>
            </div>
            <div className="banner-dots" id="rectDots"></div>
          </div>
        </div>
        <div>
          <h2 style={{ marginBottom: '12px' }}>Skyscraper — 160 × 600 px</h2>
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
                <div className="ss1-contact">🌐 dmgrecords.com.br<br />📲 (55) 9 9999-0000</div>
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
        </div>
      </div>
    </div>
  );
}
