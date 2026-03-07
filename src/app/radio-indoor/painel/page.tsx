'use client';
import React from 'react';

const indoorHTML = `
<!-- ══════════════════════════════════
     HORA CERTA OVERLAY
══════════════════════════════════════ -->
<div class="hora-overlay" id="horaOverlay">
  <div class="ho-content">
    <div class="ho-ring">
      <div>
        <div class="ho-time-big" id="hoOverlayTime">00:00:00</div>
        <div class="ho-label">● HORA CERTA · DMG RECORDS</div>
      </div>
    </div>
    <div class="ho-saudacao" id="hoSaudacao">Boa Tarde!</div>
    <div class="ho-radio">DMG Records Rádio · Ao Vivo 24h</div>
    <div class="ho-bar"><div class="ho-bar-fill" id="hoBarFill"></div></div>
  </div>
</div>

<!-- ══════════════════════════════════
     LAYOUT PRINCIPAL
══════════════════════════════════════ -->
<div class="indoor-wrap">

  <!-- ── HEADER ── -->
  <header class="header">
    <div class="logo-block">
      <div class="logo-sq">D</div>
      <div>
        <div class="logo-name">DMG <span>Records</span></div>
        <div class="logo-tag">Rádio Indoor · Painel Comercial</div>
      </div>
    </div>

    <!-- Ticker -->
    <div class="ticker-wrap">
      <div class="ticker-label">
        <div class="ticker-dot"></div>
        Notícias
      </div>
      <div class="ticker-track">
        <div class="ticker-inner" id="tickerText">
          🎵 Henrique &amp; Juliano — Show em São Paulo no próximo mês! &nbsp;&nbsp;•&nbsp;&nbsp;
          🏆 DMG Records completa 8 anos no ar! Obrigado a todos os ouvintes! &nbsp;&nbsp;•&nbsp;&nbsp;
          🎙️ Convidado especial amanhã às 18h no Prime Time DMG &nbsp;&nbsp;•&nbsp;&nbsp;
          📻 Pedidos: WhatsApp (51) 98144-6019 ou pelo site dmgrecords.com.br &nbsp;&nbsp;•&nbsp;&nbsp;
          🎵 Novo CD de Fernandinho disponível nas plataformas digitais &nbsp;&nbsp;•&nbsp;&nbsp;
          ⭐ Vote na sua música favorita pelo nosso site! &nbsp;&nbsp;•&nbsp;&nbsp;
          🎸 Jorge &amp; Mateus — nova música já toca aqui na DMG Records &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>

    <!-- Temperatura -->
    <div class="header-temp">
      <div class="temp-val" id="tempVal">28°C</div>
      <div class="temp-lbl">☀️ Ensolarado</div>
    </div>

    <!-- Relógio -->
    <div class="header-clock">
      <div class="hclock-time" id="hclockTime">--:--:--</div>
      <div class="hclock-date" id="hclockDate">---</div>
    </div>
  </header>

  <!-- ── MAIN CONTENT ── -->
  <main class="main">

    <!-- Painel de Anúncios -->
    <div class="ad-panel" id="adPanel">

      <!-- Badge -->
      <div class="ad-badge" id="adBadge">Anúncio 1 / 4</div>

      <!-- Slide 1 — Supermercado Central -->
      <div class="ad-slide active" id="slide-0">
        <div class="ad-1-bg"></div>
        <div class="ad-content">
          <div class="ad-logo-box" style="background:linear-gradient(135deg,#1a2060,#0d1240);color:#5B8AF0;font-size:2rem">
            🛒
          </div>
          <div class="ad-text-block">
            <div class="ad-eyebrow" style="color:var(--blue)">
              <span style="width:28px;height:2px;background:var(--blue);display:inline-block"></span>
              Anunciante Parceiro
            </div>
            <div class="ad-headline" style="font-size:4.5rem;color:#fff">
              SUPER<br><span style="color:var(--blue)">MERCADO</span><br>CENTRAL
            </div>
            <div class="ad-sub">
              Ofertas imperdíveis todos os dias!<br>
              Venha conferir os melhores preços da cidade.
            </div>
            <div class="ad-cta" style="background:var(--blue);color:#fff">
              📍 Av. Principal, 1200 · Aberto das 7h às 22h
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 2 — Pizzaria Dom Marco -->
      <div class="ad-slide" id="slide-1">
        <div class="ad-2-bg"></div>
        <div class="ad-content">
          <div class="ad-logo-box" style="background:linear-gradient(135deg,#3a1000,#6a2000);color:#FF8040;font-size:3rem">
            🍕
          </div>
          <div class="ad-text-block">
            <div class="ad-eyebrow" style="color:#FF8040">
              <span style="width:28px;height:2px;background:#FF8040;display:inline-block"></span>
              Gastronomia
            </div>
            <div class="ad-headline" style="font-size:4.5rem;color:#fff">
              PIZZARIA<br><span style="color:#FF8040">DOM</span><br>MARCO
            </div>
            <div class="ad-sub">
              As melhores pizzas artesanais da região.<br>
              Peça por delivery ou venha jantar conosco!
            </div>
            <div class="ad-cta" style="background:#FF8040;color:#fff">
              🍕 (51) 98144-6019 · Delivery até 23h
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3 — Farmácia Saúde+ -->
      <div class="ad-slide" id="slide-2">
        <div class="ad-3-bg"></div>
        <div class="ad-content">
          <div class="ad-logo-box" style="background:linear-gradient(135deg,#001a08,#002810);color:var(--green);font-size:3rem">
            💊
          </div>
          <div class="ad-text-block">
            <div class="ad-eyebrow" style="color:var(--green)">
              <span style="width:28px;height:2px;background:var(--green);display:inline-block"></span>
              Saúde &amp; Bem-estar
            </div>
            <div class="ad-headline" style="font-size:4.5rem;color:#fff">
              FARMÁCIA<br><span style="color:var(--green)">SAÚDE</span><br><span style="color:rgba(255,255,255,.4)">PLUS</span>
            </div>
            <div class="ad-sub">
              Medicamentos, perfumaria e suplementos.<br>
              Atendimento humanizado com farmacêutico.
            </div>
            <div class="ad-cta" style="background:var(--green);color:#000;font-weight:800">
              💊 Rua das Flores, 320 · Plantão 24h
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 4 — Auto Peças Alves -->
      <div class="ad-slide" id="slide-3">
        <div class="ad-4-bg"></div>
        <div class="ad-content">
          <div class="ad-logo-box" style="background:linear-gradient(135deg,#0d0020,#1a0040);color:#A070FF;font-size:3rem">
            🔧
          </div>
          <div class="ad-text-block">
            <div class="ad-eyebrow" style="color:#A070FF">
              <span style="width:28px;height:2px;background:#A070FF;display:inline-block"></span>
              Automotivo
            </div>
            <div class="ad-headline" style="font-size:4.5rem;color:#fff">
              AUTO<br><span style="color:#A070FF">PEÇAS</span><br>ALVES
            </div>
            <div class="ad-sub">
              Peças originais e paralelas para todos os carros.<br>
              Serviços de instalação no local.
            </div>
            <div class="ad-cta" style="background:#A070FF;color:#fff">
              🔧 Rod. BR-116, km 42 · (51) 98144-6019
            </div>
          </div>
        </div>
      </div>

      <!-- Progress dos slides -->
      <div class="ad-progress" id="adProgress">
        <div class="ap-seg active"><div class="ap-fill" id="af-0"></div></div>
        <div class="ap-seg"><div class="ap-fill" id="af-1"></div></div>
        <div class="ap-seg"><div class="ap-fill" id="af-2"></div></div>
        <div class="ap-seg"><div class="ap-fill" id="af-3"></div></div>
      </div>
    </div>

  </main>

  <!-- ── SIDEBAR ── -->
  <aside class="sidebar">

    <!-- Hora Certa mini -->
    <div class="hora-certa">
      <div class="hc-label">⏰ Hora Certa</div>
      <div class="hc-time" id="hcTime">--:--:--</div>
      <div class="hc-date" id="hcDate">---</div>
      <div class="hc-saudacao" id="hcSaudacao">Boa tarde!</div>
    </div>

    <!-- On Air -->
    <div class="on-air-box">
      <div class="oab-label"><div class="oab-dot"></div>On Air Agora</div>
      <div style="display:flex;align-items:center;gap:10px">
        <div class="oab-disc">🎵</div>
        <div class="oab-info">
          <div class="oab-track" id="oabTrack">Apelido Carinhoso</div>
          <div class="oab-artist" id="oabArtist">Zé Neto & Cristiano</div>
        </div>
      </div>
      <div class="oab-prog-wrap">
        <div class="oab-prog"><div class="oab-prog-fill" id="oabProgFill"></div></div>
        <div class="oab-times"><span id="oabCur">1:42</span><span>3:55</span></div>
      </div>
      <!-- Waveform -->
      <div class="waveform" id="sideWave"></div>
    </div>

    <!-- Playlist -->
    <div class="playlist-box">
      <div class="pb-header">
        <div class="pb-title">
          🎵 Próximas Músicas
        </div>
        <div class="pb-count" id="pbCount">12 músicas</div>
      </div>
      <div class="pb-list">
        <div class="pb-inner" id="pbInner"></div>
      </div>
    </div>

    <!-- Próximo programa -->
    <div class="proximo-box">
      <div class="px-icon">📅</div>
      <div class="px-info">
        <div class="px-label">Próximo Programa</div>
        <div class="px-prog" id="pxProg">Tarde Gospel</div>
        <div class="px-time" id="pxTime">Às 15:00h · DJ Ana Lima</div>
      </div>
    </div>

  </aside>

  <!-- ── PLAYER BAR ── -->
  <footer class="player-bar">

    <!-- Branding -->
    <div class="pb-brand">
      <div class="pb-brand-logo">DMG</div>
      <div class="pb-brand-text">
        <div class="pb-brand-name">DMG Records</div>
        <div class="pb-brand-sub">● Ao Vivo · 24h</div>
      </div>
    </div>

    <div class="pb-div"></div>

    <!-- Now Playing -->
    <div class="pb-now">
      <div class="pb-disc">
        🎵
        <div class="pb-disc-hole"></div>
      </div>
      <div class="pb-track-info">
        <div class="pb-track-name" id="pbTrackName">Apelido Carinhoso</div>
        <div class="pb-track-artist" id="pbTrackArtist">Zé Neto & Cristiano · Sertanejo</div>
      </div>
    </div>

    <div class="pb-div"></div>

    <!-- Waveform + Progress -->
    <div class="pb-center">
      <div class="pb-wave" id="pbWave"></div>
      <div class="pb-prog-bar">
        <div class="pb-prog-fill2" id="pbProgFill2"></div>
      </div>
      <div class="pb-prog-times">
        <span id="pbCurTime">1:42</span>
        <span>3:55</span>
      </div>
    </div>

    <div class="pb-div"></div>

    <!-- Controls -->
    <div class="pb-controls">
      <button class="pbc-btn">⏮</button>
      <button class="pbc-btn pbc-main" id="mainPlayBtn" onclick="togglePlay()">⏸</button>
      <button class="pbc-btn">⏭</button>
    </div>

    <div class="pb-div"></div>

    <!-- Volume -->
    <div class="pb-vol">
      <span class="pb-vol-icon">🔊</span>
      <input type="range" class="pb-vol-range" value="75" id="volRange">
    </div>

    <div class="pb-div"></div>

    <!-- Status -->
    <div class="pb-status">
      <div class="pbs-live"><div class="pbs-dot"></div>Ao Vivo</div>
      <div class="pbs-ouvintes" id="pbsOuvintes">1.247 ouvintes</div>
    </div>

  </footer>

</div><!-- /indoor-wrap -->
`;

const indoorScript = `
/* ═══════════════════════════════════════════════
   RELÓGIO + HORA CERTA
═══════════════════════════════════════════════ */
const DIAS   = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
const MESES  = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
const MESES2 = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

function pad(n){return String(n).padStart(2,'0')}

function getSaudacao(h){
  if(h>=5&&h<12)  return 'Bom Dia!';
  if(h>=12&&h<18) return 'Boa Tarde!';
  return 'Boa Noite!';
}

let lastMin = -1;
let horaCertaShown = false;

function updateClock(){
  const now  = new Date();
  const h    = now.getHours();
  const m    = now.getMinutes();
  const s    = now.getSeconds();
  const timeStr = \`\${pad(h)}:\${pad(m)}:\${pad(s)}\`;
  const dateStr = \`\${DIAS[now.getDay()]} · \${pad(now.getDate())} de \${MESES2[now.getMonth()]} de \${now.getFullYear()}\`;
  const dateSml = \`\${DIAS[now.getDay()].slice(0,3)} \${pad(now.getDate())}/\${MESES[now.getMonth()]} \${now.getFullYear()}\`;

  // Header clock
  document.getElementById('hclockTime').textContent = timeStr;
  document.getElementById('hclockDate').textContent = dateSml.toUpperCase();

  // Sidebar hora certa
  document.getElementById('hcTime').textContent = timeStr;
  document.getElementById('hcDate').textContent = dateStr;
  document.getElementById('hcSaudacao').textContent = getSaudacao(h);

  // Hora Certa Overlay — dispara todo minuto redondo (XX:00)
  if(s === 0 && m !== lastMin){
    lastMin = m;
    showHoraCerta(timeStr, getSaudacao(h));
  }

  // Simula progresso da música
  const totalSec = 235; // 3:55
  const curSec   = ((h*3600 + m*60 + s) % totalSec);
  const pct      = (curSec / totalSec) * 100;
  const curMin   = Math.floor(curSec/60);
  const curSecR  = curSec % 60;

  ['oabProgFill','pbProgFill2'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.style.width = pct + '%';
  });
  ['oabCur','pbCurTime'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = \`\${curMin}:\${pad(curSecR)}\`;
  });
}

/* Hora Certa Overlay */
function showHoraCerta(timeStr, saudacao){
  const ov = document.getElementById('horaOverlay');
  document.getElementById('hoOverlayTime').textContent = timeStr;
  document.getElementById('hoSaudacao').textContent    = saudacao;

  // Reinicia animação da barra
  const bar = document.getElementById('hoBarFill');
  bar.style.animation = 'none';
  bar.offsetHeight; // reflow
  bar.style.animation = 'hobar 5s linear forwards';

  ov.classList.add('show');
  setTimeout(()=> ov.classList.remove('show'), 5500);
}

setInterval(updateClock, 1000);
updateClock();

/* ═══════════════════════════════════════════════
   SLIDESHOW DE ANÚNCIOS
═══════════════════════════════════════════════ */
const AD_DURATION = 8000; // 8 segundos por anúncio
const slides  = document.querySelectorAll('.ad-slide');
const segs    = document.querySelectorAll('.ap-seg');
const fills   = document.querySelectorAll('.ap-fill');
let   curSlide = 0;
let   adTimer  = null;

function goToSlide(idx){
  // Desativa todos
  slides.forEach((s,i)=>{
    s.classList.remove('active');
    segs[i].classList.remove('active','done');
    fills[i].style.animation = 'none';
  });
  // Marca passados como done
  for(let i=0;i<idx;i++) segs[i].classList.add('done');
  // Ativa atual
  slides[idx].classList.add('active');
  segs[idx].classList.add('active');
  fills[idx].offsetHeight;
  fills[idx].style.animation = \`apfill \${AD_DURATION/1000}s linear forwards\`;

  document.getElementById('adBadge').textContent = \`Anúncio \${idx+1} / \${slides.length}\`;
  curSlide = idx;
}

function nextSlide(){
  goToSlide((curSlide+1) % slides.length);
}

if (slides.length) {
    goToSlide(0);
    setInterval(nextSlide, AD_DURATION);
}

/* ═══════════════════════════════════════════════
   PLAYLIST SCROLL
═══════════════════════════════════════════════ */
const playlist = [
  {n:'Apelido Carinhoso',  a:'Zé Neto & Cristiano',  e:'🎸', g:'Sertanejo', d:'3:55', now:true},
  {n:'Não Abro Mão',       a:'Henrique & Juliano',    e:'🎵', g:'Sertanejo', d:'3:42'},
  {n:'Saudade Que Dói',    a:'Jorge & Mateus',        e:'🎵', g:'Sertanejo', d:'3:25'},
  {n:'Deus Cuida de Mim',  a:'Fernandinho',           e:'✝️', g:'Gospel',    d:'4:12'},
  {n:'Evidências',         a:'Chitãozinho & Xororó',  e:'🎵', g:'Sertanejo', d:'4:44'},
  {n:'Mil Milagres',       a:'Aline Barros',          e:'✝️', g:'Gospel',    d:'3:58'},
  {n:'Tempo de Virar',     a:'Luísa Sonza',           e:'🎤', g:'Pop',       d:'3:08'},
  {n:'Coração Valente',    a:'Maiara & Maraísa',      e:'🎸', g:'Sertanejo', d:'3:33'},
  {n:'Quem Sabe Deus',     a:'Padre Reginaldo Manzotti',e:'✝️',g:'Gospel',   d:'4:22'},
  {n:'Bala Estravagante',  a:'Wesley Safadão',        e:'🎵', g:'Forró',     d:'3:10'},
  {n:'Te Esperando',       a:'Luan Santana',          e:'🎸', g:'Sertanejo', d:'3:44'},
  {n:'Oração do Pai Nosso',a:'Padre Zezinho',         e:'✝️', g:'Gospel',    d:'3:30'},
];

function buildPlaylist(){
  const container = document.getElementById('pbInner');
  if (!container) return;
  // Duplica para scroll infinito
  const allItems  = [...playlist, ...playlist];
  container.innerHTML = allItems.map((t,i)=>\`
    <div class="pb-item \${t.now && i<playlist.length ?'now':''}">
      \${t.now && i<playlist.length
        ? \`<div class="pb-now-icon">▶</div>\`
        : \`<div class="pb-num">\${(i%playlist.length)+1}</div>\`}
      <div class="pb-art">\${t.e}</div>
      <div class="pb-info">
        <div class="pb-name">\${t.n}</div>
        <div class="pb-meta">\${t.a} · \${t.g}</div>
      </div>
      <div class="pb-dur">\${t.d}</div>
    </div>
  \`).join('');

  // Ajusta duração da animação de scroll
  const totalH = container.scrollHeight / 2;
  const speed  = totalH / 40; // 40px/s
  container.style.animationDuration = \`\${speed}s\`;
  document.getElementById('pbCount').textContent = \`\${playlist.length} músicas\`;
}
buildPlaylist();

/* ═══════════════════════════════════════════════
   WAVEFORMS ANIMADOS
═══════════════════════════════════════════════ */
function buildWave(containerId, count, color, maxH){
  const c = document.getElementById(containerId);
  if(!c) return;
  c.innerHTML = '';
  for(let i=0;i<count;i++){
    const b = document.createElement('div');
    b.className = 'wf-b';
    const h = Math.floor(Math.random()*maxH)+4;
    const dur = (0.6+Math.random()*0.8).toFixed(2);
    const delay = (Math.random()*0.6).toFixed(2);
    b.style.cssText = \`height:\${h}px;background:\${color};animation:wfAnim \${dur}s \${delay}s ease-in-out infinite\`;
    c.appendChild(b);
  }
}

const wfStyle = document.createElement('style');
wfStyle.textContent = \`@keyframes wfAnim{0%,100%{transform:scaleY(0.4);opacity:0.5}50%{transform:scaleY(1.4);opacity:1}}\`;
document.head.appendChild(wfStyle);

buildWave('sideWave', 18, 'var(--green)', 14);
buildWave('pbWave',   24, 'var(--red)',   18);

/* ═══════════════════════════════════════════════
   PLAY / PAUSE
═══════════════════════════════════════════════ */
let isPlaying = true;
function togglePlay(){
  isPlaying = !isPlaying;
  document.getElementById('mainPlayBtn').textContent = isPlaying ? '⏸' : '▶';
}

/* ═══════════════════════════════════════════════
   OUVINTES (simulado)
═══════════════════════════════════════════════ */
function updateListeners(){
  const base = 1200;
  const rand = Math.floor(Math.random()*100);
  document.getElementById('pbsOuvintes').textContent = \`\${(base+rand).toLocaleString('pt-BR')} ouvintes\`;
}
setInterval(updateListeners, 15000);

/* ═══════════════════════════════════════════════
   TEMPERATURA (simulada / pode usar API)
═══════════════════════════════════════════════ */
const temps = ['24°C ⛅','26°C ☀️','28°C ☀️','22°C 🌧️','25°C 🌤️'];
let   tempIdx = 0;
document.getElementById('tempVal').textContent = temps[tempIdx].split(' ')[0];
setInterval(()=>{
  tempIdx = (tempIdx+1)%temps.length;
  document.getElementById('tempVal').textContent = temps[tempIdx].split(' ')[0];
}, 300000); // atualiza a cada 5 min

/* ═══════════════════════════════════════════════
   HORA CERTA — TESTE IMEDIATO (primeira vez)
═══════════════════════════════════════════════ */
setTimeout(()=>{
  const now = new Date();
  const h   = now.getHours();
  const m   = now.getMinutes();
  const s   = now.getSeconds();
  showHoraCerta(\`\${pad(h)}:\${pad(m)}:\${pad(s)}\`, getSaudacao(h));
}, 3000);

/* ═══════════════════════════════════════════════
   TECLAS DE ATALHO
═══════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if(e.code === 'Space') { e.preventDefault(); togglePlay(); }
  if(e.code === 'KeyH')  showHoraCerta(document.getElementById('hcTime').textContent, document.getElementById('hcSaudacao').textContent);
  if(e.code === 'Escape') document.getElementById('horaOverlay').classList.remove('show');
  if(e.code === 'KeyF')  document.documentElement.requestFullscreen?.();
});

/* ═══════════════════════════════════════════════
   FULLSCREEN automático após 2s (opcional)
═══════════════════════════════════════════════ */
// Descomente para ativar fullscreen automático
// setTimeout(()=> document.documentElement.requestFullscreen?.(), 2000);
`;

export default function IndoorPainelPage() {
    React.useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.innerHTML = indoorScript;
        document.body.appendChild(scriptTag);
    
        return () => {
          if (document.body.contains(scriptTag)) {
            document.body.removeChild(scriptTag);
          }
        };
      }, []);

  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: indoorHTML }} />
  );
}
